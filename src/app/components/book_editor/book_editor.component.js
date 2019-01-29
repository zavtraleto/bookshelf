export default {
  template: require('text-loader!./book_editor.view.html'),
  controller: BookEditorController
}

export function BookEditorController($state, $stateParams, BookService) {
  this.book = $stateParams.id ? BookService.getBook($stateParams.id) : BookService.initBook()

  this.addAuthor = ($event) => {
    $event.preventDefault();
    BookService.addAuthor();
  };

  this.deleteAuthor = ($event, index) => {
    $event.preventDefault();
    BookService.deleteAuthor(index);
  };

  this.saveData = (form) => {
    if (!form.$valid) {
      return false;
    }

    this.book.id ? BookService.updateBook() : BookService.addBook();
    $state.go('bookshelf');
  };
}

BookEditorController.$inject = ['$state', '$stateParams', 'BookService'];