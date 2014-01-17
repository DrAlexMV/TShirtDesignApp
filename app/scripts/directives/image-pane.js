'use strict';

angular.module('tshirtDesignLabApp')
  .directive('imagePane', function ($timeout) {
    return {
      templateUrl: 'views/image-pane.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.uploadedImages = {};
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
          $timeout(function() { scope.waiting = false; }, 500);
          if (scope.file) {
            // Rev up the spinning wheel
            scope.waiting = true;
            // Add image to canvas
            fabric.Image.fromURL(currentImage, function(img) {
              img.scale(.25);
              img.name = scope.file;
              scope.canvas.centerObject(img);
              scope.canvas.add(img);
              scope.canvas.setActiveObject(img);
              scope.uploadedImages[img.name] = currentImage;
              scope.file = imgPreview.src = null;
            });
          }
        }
      }
    };
  });
