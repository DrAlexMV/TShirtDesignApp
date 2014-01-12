'use strict';

angular.module('tshirtDesignLabApp')
  .factory('toolEnum', function toolEnum() {
    var tools =
    {
      newPane: 0,
      textPane: 1,
      greekPane: 2,
      colorPane: 3,
      imagePane: 4,
      frocketPane: 5
    };
    return {
      get: function(toolName) { return tools[toolName]; }
    };
  });
