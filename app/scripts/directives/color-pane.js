'use strict';

angular.module('tshirtDesignLabApp')
  .directive('colorPane', function () {
    return {
      templateUrl: 'views/color-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        // Event to change the color of the current product
        scope.selectedColor = '';
        scope.changeProductColor = function(color) {
          if (color) {
            scope.changeProduct(scope.currentProduct, color.toLowerCase());
            scope.selectedColor = color;
          }
        };
      }
    };
  });
