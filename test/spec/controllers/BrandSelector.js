'use strict';

describe('Controller: BrandselectorCtrl', function () {

  // load the controller's module
  beforeEach(module('tshirtDesignLabApp'));

  var BrandselectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrandselectorCtrl = $controller('BrandselectorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
