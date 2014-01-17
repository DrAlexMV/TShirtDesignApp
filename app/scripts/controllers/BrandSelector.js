'use strict';

angular.module('tshirtDesignLabApp')
  .controller('BrandSelectorCtrl', function ($scope, $modalInstance) {

    // Scope models
    $scope.otherSelection = 'Generic';

    $scope.selectProduct = function(product) {
      $scope.selectedProduct = product;
    };

    // Move on to the product design area
    $scope.closeForm = function(product) {
      if (product) $modalInstance.close(product);
    };

    $scope.otherChanged = function(name, currentBrand) {
      if (currentBrand.name == 'Other') {
        angular.forEach(currentBrand.products, function(p) {
          p.brandName = name;
        });
      }
    };

    // A list of the shirts and their backgrounds
    // Brands:
    //   Gildan
    // Important Note:
    // To add new colors, add a new attribute
    // to the particular color
    $scope.brandList =
      [
        {
          name: 'Gildan',
          products:
            [
              {
                name: 'Short sleeve',
                brandName: 'Gildan',
                availableColors:
                  {
                    white: { name: 'White', code: 'white',
                      frontSrc: '../images/teeW.png', backSrc: '../images/teeWBack.png'},
                    black: { name: 'Black', code: 'black',
                      frontSrc: '../images/teeB.png', backSrc: '../images/teeBBack.png'},
                    red: { name: 'Red', code: 'red',
                      frontSrc: '../images/teeR.png', backSrc: '../images/teeRBack.png'}
                  }
              },
              {
                name: 'Long sleeve',
                brandName: 'Gildan',
                availableColors:
                  {
                    white: { name: 'White', code: 'white',
                      frontSrc: '../images/longW.png', backSrc: '../images/longWBack.png'},
                    black: { name: 'Black', code: 'black',
                      frontSrc: '../images/longB.png', backSrc: '../images/longBBack.png'},
                    red: { name: 'Red', code: 'red',
                      frontSrc: '../images/longR.png', backSrc: '../images/longRBack.png'}
                  }
              },
              {
                name: 'Tank top',
                brandName: 'Gildan',
                availableColors:
                  {
                    white: { name: 'White', code: 'white',
                      frontSrc: '../images/tankW.png', backSrc: '../images/tankWBack.png'},
                    black: { name: 'Black', code: 'black',
                      frontSrc: '../images/tankB.png', backSrc: '../images/tankBBack.png'},
                    red: { name: 'Red', code: 'red',
                      frontSrc: '../images/tankR.png', backSrc: '../images/tankRBack.png'}
                  }
              }
            ]
        },
        {
          name: 'Other',
          products:
            [
              {
                name: 'Short sleeve',
                brandName: $scope.otherSelection,
                availableColors:
                {
                  white: { name: 'White', code: 'white',
                    frontSrc: '../images/teeW.png', backSrc: '../images/teeWBack.png'},
                  black: { name: 'Black', code: 'black',
                    frontSrc: '../images/teeB.png', backSrc: '../images/teeBBack.png'},
                  red: { name: 'Red', code: 'red',
                    frontSrc: '../images/teeR.png', backSrc: '../images/teeRBack.png'}
                }
              },
              {
                name: 'Long sleeve',
                brandName: $scope.otherSelection,
                availableColors:
                {
                  white: { name: 'White', code: 'white',
                    frontSrc: '../images/longW.png', backSrc: '../images/longWBack.png'},
                  black: { name: 'Black', code: 'black',
                    frontSrc: '../images/longB.png', backSrc: '../images/longBBack.png'},
                  red: { name: 'Red', code: 'red',
                    frontSrc: '../images/longR.png', backSrc: '../images/longRBack.png'}
                }
              },
              {
                name: 'Tank top',
                brandName: $scope.otherSelection,
                availableColors:
                {
                  white: { name: 'White', code: 'white',
                    frontSrc: '../images/tankW.png', backSrc: '../images/tankWBack.png'},
                  black: { name: 'Black', code: 'black',
                    frontSrc: '../images/tankB.png', backSrc: '../images/tankBBack.png'},
                  red: { name: 'Red', code: 'red',
                    frontSrc: '../images/tankR.png', backSrc: '../images/tankRBack.png'}
                }
              }
            ]
        }
      ];
  });
