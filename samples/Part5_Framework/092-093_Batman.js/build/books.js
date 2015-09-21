(function() {
  var Books,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Books = (function(_super) {

    __extends(Books, _super);

    function Books() {
      return Books.__super__.constructor.apply(this, arguments);
    }

    Books.root('books#index');

    return Books;

  })(Batman.App);

  window.Books = Books;

}).call(this);
