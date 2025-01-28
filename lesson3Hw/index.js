console.log('Программа запущена!');

const readline = require('readline');
const { addBook, listBooks, getBookById, updateBook, deleteBook } = require('./bookManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainMenu() {
  console.log(`
  Please Choose :
  1. Add book
  2. See the list of books
  3. Find a book by ID
  4. Update a book
  5. Delete a book
  6. Exit
  `);

  rl.question('Your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter the book name: ', (title) => {
          rl.question('Enter the book author: ', (author) => {
            rl.question('Enter the year of publication: ', (year) => {
              rl.question('Enter the genre of the book: ', (genre) => {
                addBook(title, author, parseInt(year), genre);
                mainMenu();
              });
            });
          });
        });
        break;

      case '2':
        listBooks();
        mainMenu();
        break;

      case '3':
        rl.question('Enter book ID: ', (id) => {
          getBookById(id);
          mainMenu();
        });
        break;

      case '4':
        rl.question('Enter book ID to update: ', (id) => {
          rl.question('Enter new name (or press button ENTER to skip): ', (title) => {
            rl.question('Enter new author (or press button ENTER to skip): ', (author) => {
              rl.question('Enter new year (or press button ENTER to skip): ', (year) => {
                rl.question('Enter new genre (or press button ENTER to skip): ', (genre) => {
                  const updatedData = {};
                  if (title) updatedData.title = title;
                  if (author) updatedData.author = author;
                  if (year) updatedData.year = parseInt(year);
                  if (genre) updatedData.genre = genre;

                  updateBook(id, updatedData);
                  mainMenu();
                });
              });
            });
          });
        });
        break;

      case '5':
        rl.question('Enter the ID of the book to delete: ', (id) => {
          deleteBook(id);
          mainMenu();
        });
        break;

      case '6':
        console.log('Exiting...');
        rl.close();
        break;

      default:
        console.log('Wrong choice, try again.');
        mainMenu();
        break;
    }
  });
}

mainMenu();
