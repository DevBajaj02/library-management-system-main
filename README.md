# Library Management System

## Overview
The Library Management System is a JavaScript-based application designed to manage book inventories within a library. It facilitates the addition of new books, handling of borrowings and returns, and querying of book details.

## Features
- **Add Books**: Ability to add new books to the library with title and author.
- **Borrow Books**: Functionality to check out books from the library.
- **Return Books**: Feature to return books back to the library.
- **Query Book Details**: Retrieve details of any book in the library.
- **List All Books**: View a list of all books currently in the library.

## Getting Started
To use the Library Management System, import the `Library` class from the provided module and instantiate it:

```javascript
const { Library } = require('./library');
const library = new Library();
```

## Functionalities
1. Add a Book
- Use `library.addBook(title, author)` to add a new book.
2. Borrow a Book
- Use `library.borrowBook(bookId)` to borrow a book.
3. Return a Book
- Use `library.returnBook(bookId)` to return a book.
4. Get Book Details
Use `library.getBookDetails(bookId)` to get details of a book.
5. List All Books
- Use `library.listAllBooks()` to list all books.

## Known Issues
1. There have been observations of multiple entries of the same book in the catalog. How could this be possible?
2. Reports suggest that books on loan have disappeared from records. Accurate record-keeping for books on loan is essential.
3. The system currently does not track who borrows books, which is a critical missing feature.
4. Though the number of books stored in the library is pretty low, the book IDs are very large. What could cause this and how can it be fixed?
