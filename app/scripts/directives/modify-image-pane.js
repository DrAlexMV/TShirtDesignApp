'use strict';

angular.module('tshirtDesignLabApp')
  .directive('modifyImagePane', function () {
    return {
      templateUrl: 'views/modify-image-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.currentImage = {};
        scope.$watchCollection('[currentImage.scaleX, currentImage.scaleY, currentImage.angle]', function()  {
          scope.canvas.renderAll();
        })
      }
    };
  });
