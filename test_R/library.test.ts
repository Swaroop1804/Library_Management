import { Library } from '../src/library';
import { Book } from '../src/books';

describe('Library Management System', () => {

  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  // 1. Adding Books
  it('should add a new book to the library', () => {
    const newBook = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    library.addBook(newBook);

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].isbn).toBe('1234');
  });

  it('should not add a book with duplicate ISBN', () => {
    const book1 = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    const book2 = new Book('1234', 'Another Title', 'Another Author', 2020);

    library.addBook(book1);
    expect(() => library.addBook(book2))

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(1); // Should still be 1 book
});


  it('should add multiple books to the library', () => {
    const book1 = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    const book2 = new Book('5678', '1984', 'George Orwell', 1949);

    library.addBook(book1);
    library.addBook(book2);

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(2);
  });

  // 2. Borrowing Books
  it('should allow borrowing an available book', () => {
    const newBook = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    library.addBook(newBook);

    library.borrowBook('1234');
    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(0); // Book is no longer available
  });

  it('should not allow borrowing an already borrowed book', () => {
    const newBook = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    library.addBook(newBook);

    library.borrowBook('1234');

    expect(() => library.borrowBook('1234')).toThrowError('Book is not available');
  });

  it('should throw an error when borrowing a book that doesn\'t exist', () => {
    expect(() => library.borrowBook('9999')).toThrowError('Book not found');
  });

  // 3. Returning Books
  it('should allow returning a borrowed book', () => {
    const newBook = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    library.addBook(newBook);

    library.borrowBook('1234');
    library.returnBook('1234');

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(1); // Book is available again
  });

  it('should not allow returning a book that wasn\'t borrowed', () => {
    const newBook = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    library.addBook(newBook);

    expect(() => library.returnBook('1234')).toThrowError('Book was not borrowed');
  });

  it('should throw an error when returning a book that doesn\'t exist', () => {
    expect(() => library.returnBook('9999')).toThrowError('Book not found');
  });

  // 4. Viewing Available Books
  it('should show all available books in the library', () => {
    const book1 = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    const book2 = new Book('5678', '1984', 'George Orwell', 1949);

    library.addBook(book1);
    library.addBook(book2);

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(2);
  });

  it('should show only available books after borrowing one', () => {
    const book1 = new Book('1234', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    const book2 = new Book('5678', '1984', 'George Orwell', 1949);

    library.addBook(book1);
    library.addBook(book2);
    library.borrowBook('1234');

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].isbn).toBe('5678');
  });

  it('should return an empty list if no books are available', () => {
    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(0);
  });

});
