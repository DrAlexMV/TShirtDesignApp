'use strict';

angular.module('tshirtDesignLabApp')
  .directive('greekPane', function () {
    return {
      templateUrl: 'views/greek-pane.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.greekAlphabet =
          [
            { name: 'Alpha;', character: 'Α' },
            { name: 'Beta', character: 'Β' },
            { name: 'Gamma', character: 'Γ' },
            { name: 'Delta', character: 'Δ' },
            { name: 'Epsilon', character: 'Ε' },
            { name: 'Zeta', character: 'Ζ' },
            { name: 'Eta', character: 'Η' },
            { name: 'Theta', character: 'Θ' },
            { name: 'Iota', character: 'Ι' },
            { name: 'Kappa', character: 'Κ' },
            { name: 'Lambda', character: 'Λ' },
            { name: 'Mu', character: 'Μ' },
            { name: 'Nu', character: 'Ν' },
            { name: 'Xi', character: 'Ξ' },
            { name: 'Omicron', character: 'Ο' },
            { name: 'Pi', character: 'Π' },
            { name: 'Rho', character: 'Ρ' },
            { name: 'Sigma', character: 'Σ' },
            { name: 'Tau', character: 'Τ' },
            { name: 'Upsilon', character: 'Υ' },
            { name: 'Phi', character: 'Φ' },
            { name: 'Chi', character: 'Χ' },
            { name: 'Psi', character: 'Ψ' },
            { name: 'Omega', character: 'Ω' }
          ];
      }
    };
  });
