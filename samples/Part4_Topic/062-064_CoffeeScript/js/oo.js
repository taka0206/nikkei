// Generated by CoffeeScript 1.4.0

/*
  クラス型オブジェクト指向
*/


(function() {
  var Member, SubClass,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Member = (function() {
    var takano;

    Member.prototype.yasunishi = 'Hello';

    Member.yamada = 'Hello';

    takano = 'Hello';

    function Member(yasunishi) {
      this.yasunishi = yasunishi;
    }

    Member.prototype.func = function() {
      this.yasunishi;
      Member.yamada;
      return takano;
    };

    Member.staticfunc = function() {
      return this.yamada;
    };

    return Member;

  })();

  SubClass = (function(_super) {

    __extends(SubClass, _super);

    function SubClass() {
      return SubClass.__super__.constructor.apply(this, arguments);
    }

    SubClass.prototype.func = function() {
      return SubClass.__super__.func.call(this);
    };

    return SubClass;

  })(Member);

}).call(this);
