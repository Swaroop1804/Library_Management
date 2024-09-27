import { Library } from '../src/library';
import { Book } from '../src/books';

describe('Library Management System - View Available Books', () => {
  it('should return all available books in the library', () => {
    const library = new Library();
    const book1 = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    const book2 = new Book('5678', 'To Kill a Mockingbird', 'Harper Lee', 1960, false); // This one is borrowed

    library.addBook(book1);
    library.addBook(book2);

    const availableBooks = library.getAvailableBooks();
    
    expect(availableBooks.length).toBe(1); // Only one book should be available
    expect(availableBooks[0].isbn).toBe('1234'); // The available book should be 'The Great Gatsby'
  });
});
