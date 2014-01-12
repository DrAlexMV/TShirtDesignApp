'use strict';

angular.module('tshirtDesignLabApp')
  .directive('textPane', function () {
    return {
      templateUrl: 'views/text-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.textToAdd = {};

        // Event listener for addition of new text to the canvas
        scope.addText = function(text, font) {
          font = font ? font : 'Helvetica';
          if (text && angular.isString(text)) {
            var text = new fabric.Text(text, {
              fontFamily: font,
              fontSize: 40
            });
            scope.canvas.centerObject(text);
            scope.canvas.add(text);
            scope.textToAdd = {};
          }
        };

        scope.resetForm = function(textToAdd) {
          scope.textToAdd = {};
        };
      }
    };
  });
