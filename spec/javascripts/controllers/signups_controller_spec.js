describe("SignupsCtrl", function() {
  var scope, ctrl;
  beforeEach(function() {
    var parksApp = module('parksApp');

    inject(function($controller) {
      scope = {};
      ctrl = $controller('SignupsCtrl', {$scope: scope});
    });
  });

  it('has a save function on the scope', function() {
    expect(scope.save).toEqual(jasmine.any(Function));
  });
});
