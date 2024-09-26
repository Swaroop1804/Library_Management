import { Book } from './books';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getAvailableBooks(): Book[] {
    return this.books.filter(book => book.available);
  }
}
