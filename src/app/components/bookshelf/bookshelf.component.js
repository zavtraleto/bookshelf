export default {
  template: require('text-loader!./bookshelf.view.html'),
  controller: BookshelfController,
}

export function BookshelfController(BookService) {
  this.filter = BookService.filter;

  if (!BookService.getBooks()) {
    BookService.initSavedBooks();
  }

  this.books = BookService.getBooks();

  this.selectFilter = () => BookService.saveFilter();
}

BookshelfController.$inject = ['BookService'];