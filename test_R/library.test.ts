import { Library } from '../src/library';
import { Book } from '../src/books';

describe('Library Management System - Borrow Book', () => {
  it('should allow a user to borrow a book and mark it as unavailable', () => {
    const library = new Library();
    const book = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    
    library.addBook(book); // First add the book to the library
    library.borrowBook('1234'); // Borrow the book using its ISBN

    const availableBooks = library.getAvailableBooks();
    
    expect(availableBooks.length).toBe(0); // Book should no longer be available
    expect(book.available).toBe(false); // Book's availability should be marked false
  });
});
