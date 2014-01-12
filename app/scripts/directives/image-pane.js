'use strict';

angular.module('tshirtDesignLabApp')
  .directive('imagePane', function ($timeout) {
    return {
      templateUrl: 'views/image-pane.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.file;

        var reader = new FileReader();
        var currentImage;
        var imgPreview = document.getElementById('uploadPreview');
        scope.fileSelected = function() {
          reader.readAsDataURL(element.find('input')[0].files[0]);
          reader.onload = function(e) {
            imgPreview.src = currentImage = e.target.result;
          };
        };

        // Spinning wheel
        scope.waiting = false;

        // Upload image
        scope.upload = function() {
          if (scope.file) {
            scope.waiting = true;
            $timeout(function() {
              scope.file = imgPreview.src = null;
              scope.waiting = false;
            }, 500);

            // Add image to canvas
            fabric.Image.fromURL(currentImage, function(img) {
              img.scale(.25);
              scope.canvas.add(img);
            });
            scope.file = null;
          }
        }
      }
    };
  });
