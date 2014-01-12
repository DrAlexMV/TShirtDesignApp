'use strict';

describe('Directive: modifyTextPane', function () {

  // load the directive's module
  beforeEach(module('tshirtDesignLabApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<modify-text-pane></modify-text-pane>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the modifyTextPane directive');
  }));
});
