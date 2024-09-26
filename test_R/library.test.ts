import { Library } from '../src/library';
import { Book } from '../src/books';

describe('Library Management System', () => {
  it('should add a new book to the library', () => {
    const library = new Library();
    const newBook = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);

    library.addBook(newBook);
    const availableBooks = library.getAvailableBooks();

    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].isbn).toBe('1234');
  });
});
