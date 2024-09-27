import { Library } from '../src/library';
import { Book } from '../src/books';

describe('Library Management System - Return Book', () => {
  it('should allow a user to return a borrowed book and mark it as available', () => {
    const library = new Library();
    const book = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, false); // Initially marked as unavailable
    
    library.addBook(book); 
    library.returnBook('1234'); // Return the book using its ISBN

    const availableBooks = library.getAvailableBooks();
    
    expect(availableBooks.length).toBe(1); // Book should now be available
    expect(book.available).toBe(true); // Book's availability should be marked true
  });
});
