'use strict';

angular.module('tshirtDesignLabApp')
  .controller('CheckoutCtrl', function ($scope, $rootScope, $http, $modalInstance) {

    // Order JSON model
    $scope.form = {};
    $scope.order = {
      numSmall: 0,
      numMedium: 0,
      numLarge: 0,
      backDesign: '',
      frontDesign: '',
      frocketDesign: '',
      shirtBrand: 'Gildan',
      comments: '',
      userEmail: ''
    };
    $scope.showOther = false;
    // Collect the designs from the canvases
    angular.extend($scope.order, $rootScope.collectData());

    // Create cloning canvas that takes a png of the design,
    // the picture of the shirt and combines them together
    // to create one png
    var cloningFront = document.createElement('canvas');
    var cloningBack = document.createElement('canvas');

    var canvases = [
      { side: 'front', ctx: cloningFront.getContext('2d'), canvas: cloningFront },
      { side: 'back', ctx: cloningBack.getContext('2d'), canvas: cloningBack }
    ];
    angular.forEach(canvases, function(value) {
      var ctx = document.getElementById(value.side + '-shirt-display').getContext('2d');
      var background = new Image();
      var backgroundElem = document.getElementById(value.side + '-image-background');
      value.canvas.width = value.canvas.height = backgroundElem.width;
      background.src = backgroundElem.src;
      background.onload = function() {
        value.ctx.drawImage(background, 0, 0);
        var design = new Image();
        design.src = $scope.order[value.side + 'Design'];
        design.onload = function() {
          // Tweak these values when changing the location of the canvas
          value.ctx.drawImage(design, 135, 125);
          $scope.order[value.side + 'Design'] = value.canvas.toDataURL();
          $scope.$apply();
        };
      };
    });

    // Initial form values
    $scope.selectedForm = 0;
    $scope.progress = {value: 25, type: 'danger'};

    // Rotate the image on the preview form
    $scope.rotate = true;

    var numberOfStages = 4;
    $scope.changeForm = function(formChange) {
      var finalChange = $scope.selectedForm + formChange;
      $scope.selectedForm = (finalChange >= 0 && finalChange < numberOfStages) ?
        finalChange : $scope.selectedForm;
      switch($scope.selectedForm) {
        default:
        case 0:
          $scope.progress = {value: 25, type: 'danger'};
          break;
        case 1:
          $scope.progress = {value: 50, type: 'warning'};
          break;
        case 2:
          $scope.progress = {value: 75, type: 'primary'};
          break;
        case 3:
          $scope.progress = {value: 100, type: 'success'};
          break;
      }
    };

    $scope.submitOrder = function(order) {
      if (!$scope.form.checkoutForm.$invalid) {
        $http.post('url', order);
        order = {};
        $modalInstance.close('done');
      }
    }
  });
