'use strict';

angular.module('tshirtDesignLabApp')
  .directive('colorPane', function () {
    return {
      templateUrl: 'views/color-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        // List of supported colors and their codes
        scope.colors =
          [
            { name: 'White', code: '#FFFFFF'},
            { name: 'Black', code: '#000000'},
            { name: 'Red', code: '#FC0000'}
          ];

        // Event to change the color of the current product
        scope.changeProductColor = function(color) {
          if (color) {
            scope.changeProduct(scope.currentProduct, color.toLowerCase());
          }
        };
      }
    };
  });
