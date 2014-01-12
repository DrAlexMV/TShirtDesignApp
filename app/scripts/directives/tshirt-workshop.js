'use strict';

angular.module('tshirtDesignLabApp')
  .directive('tshirtWorkshop', function ($rootScope, $timeout) {
    return {
      templateUrl: 'views/tshirt-workshop.html',
      restrict: 'E',
      link: function postLink(scope) {

        // Set up Fabric.js canvas for the front of the shirt
        var canvasWidth = 235;
        var canvasHeight = 320;
        scope.frontCanvas = new fabric.Canvas('front-shirt-display')
          .setWidth(canvasWidth)
          .setHeight(canvasHeight);

        // Set up Fabric.js canvas for the front of the shirt
        scope.backCanvas = new fabric.Canvas('back-shirt-display')
          .setWidth(canvasWidth)
          .setHeight(canvasHeight);
        scope.backCanvas.renderOnAddRemove = scope.frontCanvas.renderOnAddRemove = true;

        // Set up which canvas to use (default to 'front' of shirt)
        scope.shirtDirection = 'front';
        scope.canvas = scope.frontCanvas;

        // Function to rotate shirt from front to back
        scope.rotateShirt = function(shirtDirection) {
          switch(shirtDirection) {
            case 'front':
              scope.shirtDirection = 'back';
              scope.canvas = scope.backCanvas;
              break;
            case 'back':
              scope.shirtDirection = 'front';
              scope.canvas = scope.frontCanvas;
              break;
          }
          $timeout(function() { scope.canvas.calcOffset(); }, 0);
        };

        scope.selectedPreviously = 'newPane';
        var objectSelected = function(options) {
          if (options.target) {
            if (scope.selected !== 'modifyTextPane' &&
              scope.selected != 'modifyImagePane')  {
              scope.selectedPreviously = angular.copy(scope.selected);
            }
            switch(options.target.type) {
              case 'text':
                scope.$broadcast('modifyText', options.target);
                scope.selected = 'modifyTextPane';
                break;
              case 'image':
                scope.selected = 'modifyImagePane';
                scope.currentImage = options.target;
                break;
            };
          } else {
            scope.$emit('changeSelectedTool', scope.selectedPreviously);
          }
          scope.$apply();
        };

        // Event listener when selecting an object (text or image)
        scope.frontCanvas.on('object:selected', objectSelected);
        scope.backCanvas.on('object:selected', objectSelected);

        // Event listener when clicking on the canvas
        scope.frontCanvas.on('mouse:down', objectSelected);
        scope.backCanvas.on('mouse:down', objectSelected);

        // Event listener when modifying and object
        scope.frontCanvas.on('object:modified', function() { scope.$apply(); });
        scope.backCanvas.on('object:modified', function() { scope.$apply(); });

        // Listener for changes in the current tool
        scope.selected = 'newPane';
        scope.$on('toolChanged', function(event, args) {
          if (args) {
            scope.selectedPreviously = scope.selected = args;
          }
        });

        scope.duplicateText = function(img) {
          if (img.type == 'image') {
            img.clone(function(clone) { scope.canvas.add(clone); });
          } else {
            // FabricJS clone for text is buggy
            scope.canvas.add(img.clone());
          }
        };

        $rootScope.collectData = function() {
          // Change selected tool to new pane
          scope.$emit('changeSelectedTool', 'newPane');
          // Deactivate all current selections
          scope.frontCanvas.deactivateAll().renderAll();
          scope.backCanvas.deactivateAll().renderAll();
          // Serialize front canvas
          return {
            frontDesign: scope.frontCanvas.toDataURL(),
            backDesign: scope.backCanvas.toDataURL(),
            frocketDesign: scope.frocketDesign
          }
        };
      }
    };
  });
