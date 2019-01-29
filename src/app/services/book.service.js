import defaultBooks from '../../assets/default-books.json';

export function BookService($cookies) {

  const localStorageId = 'BookshelfStorage';
  const cookieStorageId = 'BookshelfCookie';
  let editBook = '';
  const Book = {
    id: '',
    title: '',
    authors: [{
      firstName: '',
      lastName: ''
    }],
    pageNumber: '',
    publisher: '',
    publishYear: '',
    releaseDate: '',
    isbn: '',
    image: ''
  };
  
  let bookList = angular.fromJson(localStorage.getItem(localStorageId));

  let saveBooks = () => localStorage.setItem(localStorageId, angular.toJson(bookList));

  this.filter = $cookies.getObject(cookieStorageId) || { value: 'title' };

  this.saveFilter = () => $cookies.putObject(cookieStorageId, this.filter);

  this.initSavedBooks = () => {
    bookList = defaultBooks;
    saveBooks();
  };

  this.getBooks = () => {
    return bookList;
  }

  this.initBook = () => {
    editBook = angular.copy(Book);
    return editBook;
  };

  this.getBook = (bookId) => {
    editBook = angular.copy(bookList.find((n) => n.id == bookId));

    if (editBook.releaseDate) {
      //ангуляр возвращает дату в нормально виде только через new Date
      editBook.releaseDate = new Date(editBook.releaseDate);
    }
    return editBook;
  };

  let generateBookId = () => {
    let lastId = 0;
    return function(){
      if(arguments[0]===0)
      id = 0;
      return lastId++;
    }
  };

  this.addBook = () => {
    editBook.id = generateBookId();
    bookList.push(editBook);
    saveBooks();
  };

  this.updateBook = () => {
    let book = bookList.find((n) => n.id == editBook.id);
    angular.extend(book, editBook);
    saveBooks();
  };

  this.deleteBook = (book) => {
    let index = bookList.findIndex((n) => n == book);
    bookList.splice(index, 1);
    saveBooks();
  };

  this.addAuthor = () => editBook.authors.push(Book.authors);
  this.deleteAuthor = (index) => editBook.authors.splice(index, 1);

}

BookService.$inject = ['$cookies'];