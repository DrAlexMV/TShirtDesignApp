'use strict';

angular.module('tshirtDesignLabApp')
  .directive('modifyTextPane', function ($templateCache, $filter) {
    return {
      templateUrl: 'views/modify-text-pane.html' ,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        // Color picker colors
        scope.colorToggle = true;
        scope.colorSelection = ['black', 'white', 'green', 'red', 'blue', 'pink', 'orange', 'yellow', 'purple', 'brown', 'CornFlowerBlue', 'DarkBlue', 'Crimson', 'Lime', 'Ivory', 'Gold'];
        scope.toggle = function() { scope.colorToggle = !scope.colorToggle };

        scope.currentText = {};
        scope.fonts = ['Helvetica', 'Times New Roman', 'Bauhaus93','Georgia', 'Arial', 'Tahoma', 'Verdana', 'Palatino', 'Geneva'];

        scope.$on('modifyText', function(event, args) {
          scope.currentText = args;
        });

        // Redraw canvas immediately when changing text
        scope.$watchCollection('[currentText.text, currentText.fontFamily, ' +
          'currentText.height, ' +
          'currentText.width,    currentText.scaleX,' +
          'currentText.scaleY,   currentText.fontWeight, ' +
          'currentText.fontStyle]', function(newVal) {
          if (scope.currentText.type === 'text') {
            scope.currentText.setCoords();
            scope.canvas.renderAll();
          }
        });

        // Since watchCollection does not keep track of old correctly (AngularJS bug as of 1.2.5)
        scope.$watch('currentText.fontSize', function(newVal, oldVal) {
          if (scope.currentText.type === 'text') {
            if (!angular.isNumber(scope.currentText.fontSize)) scope.currentText.fontSize = oldVal;
            scope.currentText.setCoords();
            scope.canvas.renderAll();
          }
        });

        scope.toggleBold = function(text) {
          text.fontWeight = text.fontWeight == 'bold' ? 'normal' : 'bold';
        };

        scope.toggleItalic = function(text) {
          text.fontStyle = text.fontStyle == 'italic' ? 'normal' : 'italic';
        };

        scope.removeText = function(text) {
          scope.$emit('changeSelectedTool', scope.selectedPreviously);
          scope.canvas.fxRemove(text);
          scope.currentText = {};
        };

        scope.changeTextColor = function(color, text) {
          if (color && text) text.fill = color;
          scope.canvas.renderAll();
        };

        scope.alignText = function(direction, text) {
          if (text && direction) text.textAlign = direction;
          scope.canvas.renderAll();
        };
      }
    };
  });
