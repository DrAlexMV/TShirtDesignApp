'use strict';

angular.module('tshirtDesignLabApp')
  .directive('newPane', function ($modal, toolEnum) {
    return {
      templateUrl: 'views/new-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        // Reference to the two image elements that
        // provide the background for the canvases
        var frontBackground = document.getElementById('front-image-background');
        var backBackground = document.getElementById('back-image-background');
        var basePP = document.getElementById('base-product-preview');

        // Change current product
        scope.changeProduct = function(product, color) {
          if (product) {
            scope.currentProduct = product;
	    
	    while (color.search(' ') >= 0) {
		var colorArr = color.split('');
		colorArr.splice(colorArr.indexOf(' '), 1);
		color = colorArr.join('');
	    }
	    console.log("color: ", color);
	    console.log("changing product: ", product);
            frontBackground.src = basePP.src = product.availableColors[color].frontSrc;
            backBackground.src = product.availableColors[color].backSrc;
          }
        };

        // Call upon the brand selector to adjust brand/color choices
        scope.changeBrand = function() {
          var modal =  $modal.open({
            templateUrl: 'views/brand-selector.html',
            controller: 'BrandSelectorCtrl'
          });
          modal.result.then(function(selectedProduct) {
            scope.currentProduct = selectedProduct;
            // List of supported colors and their codes
            scope.colors = [];
            angular.forEach(scope.currentProduct.availableColors, function(c) {
              scope.colors.push({name: c.name, code: c.code});
            });
            scope.changeProduct(selectedProduct, 'white');
            scope.$emit('changeSelectedTool', 'colorPane');
          });
        };
      }
    };
  });
