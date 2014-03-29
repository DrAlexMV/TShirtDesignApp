'use strict';

angular.module('tshirtDesignLabApp')
  .directive('toolPane', function (toolEnum) {
    return {
      templateUrl: 'views/tool-pane.html',
      restrict: 'E',
      link: function postLink(scope) {
        var currentlySelectedToolIndex = 0;
        scope.toolPaneTools =
          [
            {
              name: 'newPane',
              tooltip: 'Change product',
              icon: 'fa fa-file fa-2x',
              active: true
            },
            {
              name: 'colorPane',
              tooltip: 'Change color',
              icon: 'fa fa-th-large fa-2x',
              active: false
            },
            {
              name: 'textPane',
              tooltip: 'Add text',
              icon: 'fa fa-text-height fa-2x',
              active: false
            },
            {
              name: 'greekPane',
              tooltip: 'Greek letters',
              icon: 'icon-omega im-2x',
              active: false
            },
            {
              name: 'imagePane',
              tooltip: 'Upload picture',
              icon: 'fa fa-picture-o fa-2x',
              active: false
            },
          ];

        scope.$on('changeSelectedTool', function(event, args) {
          scope.changeTool(toolEnum.get(args));
        });

        scope.changeTool = function(index) {
          // Select appropiate tool
          scope.toolPaneTools[currentlySelectedToolIndex].active = false;
          scope.toolPaneTools[index].active = true;
          currentlySelectedToolIndex = index;
          scope.$broadcast('toolChanged', scope.toolPaneTools[index].name);
        };

        scope.checkout = function() {
          scope.$emit('checkout');
        };
      }
    };
  });
