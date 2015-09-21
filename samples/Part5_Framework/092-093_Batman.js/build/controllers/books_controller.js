(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Books.BooksController = (function(_super) {

    __extends(BooksController, _super);

    BooksController.prototype.routingKey = 'books';

    function BooksController() {
      var _ref;
      BooksController.__super__.constructor.apply(this, arguments);
      this.set('newBook', new Books.Book());
      if (((_ref = Books.Book.get('all')) != null ? _ref.length : void 0) === 0) {
        (new Books.Book({
          name: "アプリを作ろう！　Android入門 ～ゼロから学ぶアプリの作成から公開まで",
          price: 1995
        })).save();
        (new Books.Book({
          name: "TECHNICAL MASTER　はじめてのJSP＆サーブレット　Eclipse 3.7 Indigo＋Tomcat 7対応版",
          price: 2730
        })).save();
        (new Books.Book({
          name: "Windows Azure Platform開発入門",
          price: 3990
        })).save();
      }
    }

    BooksController.prototype.index = function() {
      return this.set('bookList', Books.Book.get('all'));
    };

    BooksController.prototype.createBook = function() {
      var _this = this;
      return this.get('newBook').save(function(err, book) {
        if (err) {
          if (!(err instanceof Batman.ErrorsSet)) {
            throw err;
          }
        } else {
          return _this.set('newBook', new Books.Book());
        }
      });
    };

    BooksController.prototype.destroyBook = function(node, event, context) {
      var book;
      book = context.get('book');
      return book.destroy(function(err) {
        if (err) {
          throw err;
        }
      });
    };

    return BooksController;

  })(Batman.Controller);

}).call(this);
