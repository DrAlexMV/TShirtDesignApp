'use strict';

angular.module('tshirtDesignLabApp')
  .controller('MainCtrl', function ($scope, $modal) {
    // Modal Checkout
    $scope.$on('checkout', function() {
      var checkoutModal = $modal.open({
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      });
    });
  });
