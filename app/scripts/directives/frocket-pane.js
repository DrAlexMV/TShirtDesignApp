'use strict';

angular.module('tshirtDesignLabApp')
  .directive('frocketPane', function () {
    return {
      templateUrl: 'views/frocket-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.frocketFile = scope.frocketDesign = null;
        var reader = new FileReader();
        var imgPreview = document.getElementById('frocketPreview');
        scope.frocketSelected = function() {
          imgPreview.src = scope.frocketDesign = null;
          reader.readAsDataURL(element.find('input')[0].files[0]);
          reader.onload = function(e) {
            imgPreview.src = e.target.result;
            scope.frocketDesign = e.target.result;
            scope.frocketFile = null
            scope.$apply();
          };
        };
      }
    };
  });
