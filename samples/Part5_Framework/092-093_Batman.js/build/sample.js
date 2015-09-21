(function() {
  var Sample,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Sample = (function(_super) {

    __extends(Sample, _super);

    function Sample() {
      return Sample.__super__.constructor.apply(this, arguments);
    }

    Sample.set('mission', 'fight crime');

    Sample.root('examples#index');

    return Sample;

  })(Batman.App);

  window.Sample = Sample;

}).call(this);
