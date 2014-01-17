'use strict';

angular.module('tshirtDesignLabApp')
  .factory('toolEnum', function toolEnum() {
    var tools =
    {
      newPane: 0,
      colorPane: 1,
      textPane: 2,
      greekPane: 3,
      imagePane: 4,
      frocketPane: 5
    };
    return {
      get: function(toolName) { return tools[toolName]; }
    };
  });
