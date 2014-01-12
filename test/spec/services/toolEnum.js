'use strict';

describe('Service: Toolenum', function () {

  // load the service's module
  beforeEach(module('tshirtDesignLabApp'));

  // instantiate service
  var Toolenum;
  beforeEach(inject(function (_Toolenum_) {
    Toolenum = _Toolenum_;
  }));

  it('should do something', function () {
    expect(!!Toolenum).toBe(true);
  });

});
