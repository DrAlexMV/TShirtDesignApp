'use strict';

describe('Directive: tshirtWorkshop', function () {

  // load the directive's module
  beforeEach(module('tshirtDesignLabApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tshirt-workshop></tshirt-workshop>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tshirtWorkshop directive');
  }));
});
