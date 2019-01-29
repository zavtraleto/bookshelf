import './assets/stylesheets/style.scss';

import angular from 'angular';
import 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';

import routes from './app/router/app.routes';
import { BookService } from './app/services/book.service';
import ValidateIsbn from './app/directives/validate-isbn.directive';
import UploadFileDirective from './app/directives/upload-file.directive';
import BookshelfComponent from './app/components/bookshelf/bookshelf.component';
import BookComponent from './app/components/book/book.component';
import BookEditorComponent from './app/components/book_editor/book_editor.component';

angular
  .module('books', ['ui.router', ngMessages, ngCookies])
  .config(routes)
  .service('BookService', BookService)
  .directive('validateIsbn', ValidateIsbn)
  .directive('uploadFile', UploadFileDirective)
  .component('bookshelfComponent', BookshelfComponent)
  .component('bookComponent', BookComponent)
  .component('bookEditorComponent', BookEditorComponent)
  ;
