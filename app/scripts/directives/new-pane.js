'use strict';

angular.module('tshirtDesignLabApp')
  .directive('newPane', function () {
    return {
      templateUrl: 'views/new-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        // Reference to the two image elements that
        // provide the background for the canvases
        var frontBackground = document.getElementById('front-image-background');
        var backBackground = document.getElementById('back-image-background');

        // A list of the shirts and their backgrounds
        scope.productList =
          [
            {
              tooltip: 'Short sleeve',
              whiteFrontSrc: '../images/teeW.png',
              whiteBackSrc: '../images/teeWBack.png',
              blackFrontSrc: '../images/teeB.png',
              blackBackSrc: '../images/teeBBack.png',
              redFrontSrc: '../images/teeR.png',
              redBackSrc: '../images/teeRBack.png'
            },
            {
              tooltip: 'Long sleeve',
              whiteFrontSrc: '../images/longW.png',
              whiteBackSrc: '../images/longWBack.png',
              blackFrontSrc: '../images/longB.png',
              blackBackSrc: '../images/longBBack.png',
              redFrontSrc: '../images/longR.png',
              redBackSrc: '../images/longRBack.png'
            },
            {
              tooltip: 'Tank top',
              whiteFrontSrc: '../images/tankW.png',
              whiteBackSrc: '../images/tankWBack.png',
              blackFrontSrc: '../images/tankB.png',
              blackBackSrc: '../images/tankBBack.png',
              redFrontSrc: '../images/tankR.png',
              redBackSrc: '../images/tankRBack.png'
            }
          ];

        // The currently displayed product
        scope.currentProduct = scope.productList[0];

        scope.changeProduct = function(product, color) {
          // Change current product
          scope.currentProduct = product;
          frontBackground.src = product[color + 'FrontSrc'];
          backBackground.src = product[color + 'BackSrc'];
        };

        // Init the background for the first shirt
        scope.changeProduct(scope.currentProduct, "white");
      }
    };
  });
