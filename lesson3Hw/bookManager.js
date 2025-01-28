console.log('bookManager.js подключен!');
const { readBooks, writeBooks } = require('./fileManager');
const { v4: uuidv4 } = require('uuid'); // Генерация уникального ID

// CREATE: Добавить новую книгу
function addBook(title, author, year, genre) {
  const books = readBooks();
  const newBook = { id: uuidv4(), title, author, year, genre };
  books.push(newBook);
  writeBooks(books);
  console.log('Книга успешно добавлена:', newBook);
}

// READ: Получить список всех книг
function listBooks() {
  const books = readBooks();
  console.log('Books list:', books.length ? books : 'No available books.');
}

// READ: Найти книгу по ID
function getBookById(id) {
  const books = readBooks();
  const book = books.find((b) => b.id === id);
  console.log(book ? book : 'No book found.');
}

// UPDATE: Обновить информацию о книге
function updateBook(id, updatedData) {
  const books = readBooks();
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex === -1) {
    console.log('No book found.');
    return;
  }
  books[bookIndex] = { ...books[bookIndex], ...updatedData };
  writeBooks(books);
  console.log('Book is updated:', books[bookIndex]);
}

// DELETE: Удалить книгу
function deleteBook(id) {
  const books = readBooks();
  const newBooks = books.filter((b) => b.id !== id);
  if (books.length === newBooks.length) {
    console.log('No book found.');
    return;
  }
  writeBooks(newBooks);
  console.log('Book is deleted.');
}

module.exports = {
    addBook,
    listBooks,
    getBookById,
    updateBook,
    deleteBook,
  };
