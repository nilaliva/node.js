console.log('fileManager.js подключен!');
const fs = require('fs');

// Путь к файлу
const filePath = './books.json';

// Функция чтения данных из файла
function readBooks() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    if (error.code === 'ENOENT') {
      fs.writeFileSync(filePath, '[]');
      return [];
    }
    throw error;
  }
}

// Функция записи данных в файл
function writeBooks(books) {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

module.exports = { readBooks, writeBooks };

