(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Books.Book = (function(_super) {

    __extends(Book, _super);

    function Book() {
      return Book.__super__.constructor.apply(this, arguments);
    }

    Book.persist(Batman.LocalStorage);

    Book.encode('name', 'price');

    Book.validate('name', {
      presence: true
    });

    Book.validate('price', {
      presence: true,
      numeric: true
    });

    Book.storageKey = 'books-sample-batman';

    return Book;

  })(Batman.Model);

}).call(this);
