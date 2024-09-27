import { Book } from './books';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    if (this.books.some(b => b.isbn === book.isbn)) {
        return; // Silently ignore the addition
    }
    this.books.push(book);
}


  getAvailableBooks(): Book[] {
    return this.books.filter(book => book.available);
  }

  borrowBook(isbn: string): void {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) {
      throw new Error('Book not found');
    }
    if (!book.available) {
      throw new Error('Book is not available');
    }
    book.available = false;
  }

  returnBook(isbn: string): void {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) {
      throw new Error('Book not found');
    }
    if (book.available) {
      throw new Error('Book was not borrowed');
    }
    book.available = true;
  }
}
