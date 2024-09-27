import { Book } from './books';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getAvailableBooks(): Book[] {
    return this.books.filter(book => book.available);
  }

  borrowBook(isbn: string): void {
    const book = this.books.find(book => book.isbn === isbn && book.available);
    if (book) {
      book.available = false;
    }
  }

  returnBook(isbn: string): void {
    const book = this.books.find(book => book.isbn === isbn && !book.available);
    if (book) {
      book.available = true; // Mark the book as available
    }
  }
}
