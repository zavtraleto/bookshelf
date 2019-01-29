export default {
  template: require('text-loader!./book.view.html'),
  controller: BookController,
  bindings: {
    book: '='
  }
}

export function BookController($rootScope, BookService) {
  this.authorsToString = function (arr) {
    return arr.map(function (author) {
      return author.firstName + ' ' + author.lastName;
    }).join(', ');
  }

  this.deleteBook = function ($event) {
    $event.stopPropagation();
    BookService.deleteBook(this.book);
    $rootScope.$emit('book:clear');
  }
}

BookController.$inject = ['$rootScope', 'BookService'];