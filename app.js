const express = require('express');
const { Library } = require('./library'); // Assuming the Library class is in 'library.js'

const app = express();
const library = new Library();
app.use(express.json());


app.get('/', (req, res) => {
  const m=req.query.m;
  res.send(`Welcome to the library ${m}!`);
});
// Endpoint to add a new book
app.post('/addBook', (req, res) => {
  const { title, author } = req.body;
  const bookId = library.addBook(title, author);
  res.status(201).send({ message: 'Book added successfully', bookId });
});

// Endpoint to borrow a book
app.post('/borrowBook', (req, res) => {
  const { bookId } = req.body;
  const success = library.borrowBook(bookId);
  if (success) {
    res.send({ message: 'Book borrowed successfully' });
  } else {
    res.status(400).send({ message: 'Failed to borrow book' });
  }
});

// Endpoint to return a book
app.post('/returnBook', (req, res) => {
  const { bookId } = req.body;
  const success = library.returnBook(bookId);
  if (success) {
    res.send({ message: 'Book returned successfully' });
  } else {
    res.status(400).send({ message: 'Failed to return book' });
  }
});

// Endpoint to get book details
app.get('/book/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookDetails = library.getBookDetails(bookId);
  if (bookDetails) {
    res.send(bookDetails);
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Library server running on port ${PORT}`);
});
