routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('bookshelf', {
      url: '/bookshelf',
      component: 'bookshelfComponent'
    })
    .state('newBook', {
      url: '/bookshelf/new-book',
      component: 'bookEditorComponent'
    })
    .state('editBook', {
      url: '/bookshelf/edit-book:id',
      component: 'bookEditorComponent'
    });
  $urlRouterProvider.otherwise('/bookshelf');
}