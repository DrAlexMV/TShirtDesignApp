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
                antiquecherryred: { name: 'Antique Cherry Red',
                                    code: '#a5384f',

                                    frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-antique-cherry-red.jpg',
                                    backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-antique-cherry-red.jp'},

                antiqueirishgreen: { name: 'Antique Irish Green',
                                     code: '#049260',

                                     frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-antique-irish-green.jpg',
                                     backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-antique-irish-green.jpg'},

                antiqueorange: { name: 'Antique Orange',
                                 code: '#c15a39',

                                 frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-antique-orange.jpg',
                                 backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-antique-orange.jpg'},

                /* more! */
                antiquesapphire: { name: 'Antique Sapphire',
                                   code: '#008cbd',

                                   frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-antique-sapphire.jpg',
                                   backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-antique-sapphire.jpg'},

                ashgrey: { name: 'Ash Grey',
                           code: '#d3d3d3',

                           frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-ash-grey.jpg',
                           backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-ash-grey.jpg'},

                aubergine: { name: 'Aubergine',
                             code: '#5a1f4d',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-aubergine.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-aubergine.jpg'},

                /* more! */
                azalea: { name: 'Azalea',
                          code: '#f88db7',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-azalea.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-azalea.jpg'},

                berry: { name: 'Berry',
                         code: '#85245a',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-berry.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-berry.jpg'},

                black: { name: 'Black',
                         code: '#000',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-black.jpg'},

                /* more! */
                blackberry: { name: 'Blackberry',
                              code: '#322a39',

                              frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-blackberry.jpg',
                              backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-blackberry.jpg'},

                brownsavanna: { name: 'Brown Savanna',
                                code: '#827467',

                                frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-brown-savana.jpg',
                                backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-brown-savana.jpg'},

                cardinalred: { name: 'Cardinal Red',
                               code: '#a93041',

                               frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-cardinal-red.jpg',
                               backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-cardinal-red.jpg'},

                /* more! */
                carolinablue: { name: 'Carolina Blue',
                                code: '#7fa1d1',

                                frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-carolina-blue.jpg',
                                backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-carolina-blue.jpg'},

                charcoal: { name: 'Charcoal',
                            code: '#666666',

                            frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-charcoal.jpg',
                            backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-charcoal.jpg'},

                coralsilk: { name: 'Coral Silk',
                             code: '#f26a6a',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-coral-silk.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-coral-silk.jpg'},

                /* more! */
                daisy: { name: 'Daisy',
                         code: '#fcd549',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-daisy.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-daisy.jpg'},

                darkchocolate: { name: 'Dark Chocolate',
                                 code: '#48372f',

                                 frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-dark-chocolate.jpg',
                                 backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-dark-chocolate.jpg'},

                electricgreen: { name: 'Electric Green',
                                 code: '#00ae32',

                                 frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-electric-green.jpg',
                                 backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-electric-green.jpg'},

                /* more! */
                forestgreen: { name: 'Forest Green',
                               code: '#203a21',

                               frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-forest-green.jpg',
                               backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-forest-green.jpg'},

                garnet: { name: 'Garnet',
                          code: '#741e27',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-garnet.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-garnet.jpg'},

                gravel: { name: 'Gravel',
                          code: '#adadad',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-gravel.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-gravel.jpg'},

                /* more! */
                heathermilitarygreen: { name: 'Heather Military Green',
                                        code: '#787c65',

                                        frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-heather-military-green.jpg',
                                        backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-heather-military-green.jpg'},

                heatherred: { name: 'Heather Red',
                              code: '#c26266',

                              frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-heather-red.jpg',
                              backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-heather-red.jpg'},

                heliconia: { name: 'Heliconia',
                             code: '#d9426f',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-heliconia.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-heliconia.jpg'},

                /* more! */
                icegrey: { name: 'Ice Grey',
                           code: '#c2c3c7',

                           frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-ice-grey.jpg',
                           backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-ice-grey.jpg'},

                indigoblue: { name: 'Indigo Blue',
                              code: '#496477',

                              frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-indigo-blue.jpg',
                              backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-indigo-blue.jpg'},

                irishgreen: { name: 'Irish Green',
                              code: '#018e42',

                              frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-irish-green.jpg',
                              backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-irish-green.jpg'},

                /* more! */
                kiwi: { name: 'Kiwi',
                        code: '#889e49',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-kiwi.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-kiwi.jpg'},

                lightblue: { name: 'Light Blue',
                             code: '#adc8dd',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-light-blue.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-light-blue.jpg'},

                lightpink: { name: 'Light Pink',
                             code: '#fcc6d3',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-light-pink.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-light-pink.jpg'},

                /* more! */
                lilac: { name: 'Lilac',
                         code: '#523b7f',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-lilac.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-lilac.jpg'},

                lime: { name: 'Lime',
                        code: '#96cb61',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-lime.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-lime.jpg'},

                maroon: { name: 'Maroon',
                          code: '#642f35',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-maroon.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-maroon.jpg'},

                /* more! */
                midnight: { name: 'Midnight',
                            code: '#1a3c46',

                            frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-midnight.jpg',
                            backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-midnight.jpg'},

                militarygreen: { name: 'Military Green',
                                 code: '#54563e',

                                 frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-military-green.jpg',
                                 backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-military-green.jpg'},

                natural: { name: 'Natural',
                           code: '#e7e0d0',

                           frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-natural.jpg',
                           backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-natural.jpg'},

                /* more! */
                navy: { name: 'Navy',
                        code: '#111030',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-navy.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-navy.jpg'},

                oldred: { name: 'Old Red',
                          code: '#c49452',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-old-red.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-old-red.jpg'},

                orange: { name: 'Orange',
                          code: '#fc643b',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-orange.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-orange.jpg'},

                /* more! */
                purple: { name: 'Purple',
                          code: '#593670',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-purple.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-purple.jpg'},

                red: { name: 'Red',
                       code: '#cf3442',

                       frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-red.jpg'},

                royal: { name: 'Royal',
                         code: '#2a5d9c',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-royal.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-royal.jpg'},

                /* more! */
                russet: { name: 'Russet',
                          code: '#462e2e',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-russet.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-russet.jpg'},

                sand: { name: 'Sand',
                        code: '#e5d6c1',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-sand.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-sand.jpg'},

                sapphire: { name: 'Sapphire',
                            code: '#007cb6',

                            frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-sapphire.jpg',
                            backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-sapphire.jpg'},

                /* more! */
                sky: { name: 'Sky',
                       code: '#8ac3d4',

                       frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-sky.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-sky.jpg'},

                sportgrey: { name: 'Sport Grey',
                             code: '#c4c5c9',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-sport-grey.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-sport-grey.jpg'},

                sunset: { name: 'Sunset',
                          code: '#d47652',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-sunset.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-sunset.jpg'},

                /* more! */
                tangerine: { name: 'Tangerine',
                             code: '#ffad30',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-tangerine.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-tangerine.jpg'},

                tennesseeorange: { name: 'Tennessee Orange',
                                   code: '#ff911b',

                                   frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-tennessee-orange.jpg',
                                   backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-tennessee-orange.jpg'},

                tropicalblue: { name: 'Tropical Blue',
                                code: '#0099a7',

                                frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-tropical-blue.jpg',
                                backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-tropical-blue.jpg'},

                /* more! */
                turfgreen: { name: 'Turf Green',
                             code: '#0f4e08',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-turf-green.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-turf-green.jpg'},

                violet: { name: 'Violet',
                          code: '#8886b5',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-violet.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-violet.jpg'},

                white: { name: 'White',
                         code: '#fff',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-white.jpg'},

                yellowhaze: { name: 'Yellow Haze',
                              code: '#ffd27f',

                              frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-yellow-haze.jpg',
                              backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-yellow-haze.jpg'}
              }
            },

            {

              name: 'Long sleeve',

              brandName: 'Gildan',

              availableColors:
              {
                ashgrey: { name: 'Ash Grey',
                           code: '#d3d3d3',

                           frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-ash-grey.jpg',
                           backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-ash-grey.jpg'},

                black: { name: 'Black',
                         code: '#000',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-black.jpg'},

                cardinalred: { name: 'Cardinal Red',
                               code: '#842b3c',

                               frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-cardinal-red.jpg',
                               backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-cardinal-red.jpg'},

                /* more! */
                carolinablue: { name: 'Carolina Blue',
                                code: '#7fa1d1',

                                frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-carolina-blue.jpg',
                                backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-carolina-blue.jpg'},

                forestgreen: { name: 'Forest Green',
                               code: '#203a21',

                               frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-forest-green.jpg',
                               backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-forest-green.jpg'},

                garnet: { name: 'Garnet',
                          code: '#741e27',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-garnet.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-garnet.jpg'},

                /* more! */
                gold: { name: 'Gold',
                        code: '#f6a426',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-gold.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-gold.jpg'},

                irishgreen: { name: 'Irish Green',
                              code: '#018e42',

                              frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-irish-green.jpg',
                              backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-irish-green.jpg'},

                navy: { name: 'Navy',
                        code: '#111030',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-navy.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-navy.jpg'},

                /* more! */
                purple: { name: 'Purple',
                          code: '#593670',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-purple.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-purple.jpg'},

                red: { name: 'Red',
                       code: '#cf3442',

                       frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-red.jpg'},

                royal: { name: 'Royal',
                         code: '#2a5d9c',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-royal.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-royal.jpg'},

                /* more! */
                sportgrey: { name: 'Sport Grey',
                             code: '#c4c5c9',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-sport-grey.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-sport-grey.jpg'},

                white: { name: 'White',
                         code: 'white',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-white.jpg'}
              }
            },




            {
              name: 'Long sleeve Pocket',
              brandName: 'Gildan',
              availableColors:
              {
                black: { name: 'Black',
                         code: 'black',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/back-black.jpg'},

                navy: { name: 'Navy',
                        code: '#101336',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/front-navy.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/back-navy.jpg'},

                /* new colors */
                red: { name: 'Red',
                       code: 'red',

                       frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/back-red.jpg'},

                safetygreen: { name: 'Safety Green',
                               code: '#96cb5f',

                               frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/front-safety-green.jpg',
                               backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/back-safety-green.jpg'},

                safetyorange: { name: 'Safety Orange',
                                code: '#fd6b46',

                                frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/front-safety-orange.jpg',
                                backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve-Pocket/back-safety-orange.jpg'},

                white: { name: 'White',
                         code: '#fff',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-white.jpg'}
              }
            },
            {
              name: 'Tank top',
              brandName: 'Gildan',
              availableColors:
              {
                white: { name: 'White',
                         code: '#fff',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-white.jpg'},

                black: { name: 'Black',
                         code: '#000',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-black.jpg'},

                ashgrey: { name: 'Ash Grey',
                           code: '#d3d3d3',

                           frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-ash-grey',
                           backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-ash-grey.jpg'},

                /* more! */
                carolinablue: { name: 'Carolina Blue',
                                code: '#717cba',

                                frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-carolina-blue.jpg',
                                backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-carolina-blue.jpg'},

                charcoal: { name: 'Charcoal',
                            code: '#666666',

                            frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-charcoal.jpg',
                            backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-charcoal.jpg'},

                gold: { name: 'Gold',
                        code: '#f8a628',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-gold.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-gold.jpg'},

                /* more! */
                lime: { name: 'Lime',
                        code: '#96cb5f',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-lime.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-lime.jpg'},

                navy: { name: 'Navy',
                        code: '#101336',

                        frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-navy.jpg',
                        backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-navy.jpg'},

                orange: { name: 'Orange',
                          code: '#e54305',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-orange.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-orange.jpg'},

                /* more */
                purple: { name: 'Purple',
                          code: '#704897',

                          frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-purple.jpg',
                          backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-purple.jpg'},

                red: { name: 'Red',
                       code: '#c0243a',

                       frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-red.jpg'},

                royal: { name: 'Royal',
                         code: '#2e5e9e',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-royal.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-royal.jpg'},

                /* more */
                sapphire: { name: 'Sapphire',
                            code: '#3399ff',

                            frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-sapphire.jpg',
                            backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-sapphire.jpg'},

                sportgrey: { name: 'Sport Grey',
                             code: '#a2a3a5',

                             frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-sport-grey.jpg',
                             backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-sport-grey.jpg'}
              }
            }
          ]
        },
        {
          name: 'Comfort Colors',
          products:
          [
              {
                  name: 'Short sleeve',
                  brandName: 'Comfort Colors',
                  availableColors: {
                      white: { name: 'White',
                          code: 'white',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve/front-white.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve/back-white.jpg'},
                      bluejean: { name: 'Blue Jean',
                          code: '#1560bd',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-bluejean.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-bluejean.jpg'},

                      brown: { name: 'Brown',
                          code: '#827467',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-brown.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-brown.jpg'},

                      chocolate: { name: 'Chocolate',
                          code: '#726457',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-chocolate.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-chocolate.jpg'},

                      denim: { name: 'Denim',
                          code: '#4e6590',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-denim.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-denim.jpg'},

                      grey: { name: 'Grey',
                          code: '#d3d3d3',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-grey.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-grey.jpg'},

                      citrus: { name: 'Citrus',
                          code: '#eda445',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-citrus.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-citrus.jpg'},

                      crimson: { name: 'Crimson',
                          code: '#93333f',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-crimson.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-crimson.jpg'},

                      floblue: { name: 'Flo Blue',
                          code: '#5a73b6',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-flo-blue.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-flo-blue.jpg'},

                      khaki: { name: 'Khaki',
                          code: '#b2a885',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-khaki.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-khaki.jpg'},

                      mustard: { name: 'Mustard',
                          code: '#ae873c',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-mustard.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-mustard.jpg'},

                      neongreen: { name: 'Neon Green',
                          code: '#56a46a',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-neon-green.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-neon-green.jpg'},

                      neonpink: { name: 'Neon Pink',
                          code: '#f572b4',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-neon-pink.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-neon-pink.jpg'},

                      neonredorange: { name: 'Neon Red Orange',
                          code: '#f6757a',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-neon-red-orange.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-neon-red-orange.jpg'},

                      seafoam: { name: 'Seafoam',
                          code: '#49908a',

                          frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/front-seafoam.jpg',
                          backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve/back-seafoam.jpg'}
                  }
              },
			{
              name: 'Short sleeve Pocket',
              brandName: 'Comfort Colors',
              availableColors:
              {
                bluejean: { name: 'Blue Jean',
                         code: '#4f5e75',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/front-blue-jean.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/back-blue-jean.jpg'},
						 
                citrus: { name: 'Citrus',
                            code: '#eaa142',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-citrus.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-citrus.jpg'},
							
                crimson: { name: 'Crimson',
                         code: '#93333f',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/front-crimson.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/back-crimson.jpg'},
						 
                floblue: { name: 'Flo Blue',
                            code: '#5871b4',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-flo-blue.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-flo-blue.jpg'},

                grey: { name: 'Grey',
                         code: '#656565',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/front-grey.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/back-grey.jpg'},
						 
                iceblue: { name: 'Ice Blue',
                            code: '#868da9',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-ice-blue.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-ice-blue.jpg'},
							
                khaki: { name: 'Khaki',
                         code: '#afa582',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/front-khaki.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/back-khaki.jpg'},
						 
                mustard: { name: 'Mustard',
                            code: '#b48d42',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-mustard.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-mustard.jpg'},
							
                neongreen: { name: 'Neon Green',
                            code: '#509e64',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-neon-green.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-neon-green.jpg'},
							
                neonpink: { name: 'Neon Pink',
                         code: '#f974b6',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/front-neon-pink.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Color-Short-Sleeve-Pocket/back-neon-pink.jpg'},
						 
                neonredorange: { name: 'Neon Red Orange',
                            code: '#f96e73',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-neon-red-orange.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-neon-red-orange.jpg'},
							
                pepper: { name: 'Pepper',
                            code: '#434343',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-pepper.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-pepper.jpg'},
							
                seafoam: { name: 'Seafoam',
                            code: '#4a918b',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-seafoam.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-seafoam.jpg'},
							
                white: { name: 'White',
                            code: '#fff',

                            frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/front-white.jpg',
                            backSrc: 'http://www.texasca.com/images/Comfort-Colors-Short-Sleeve-Pocket/back-white.jpg'}
              }
            },
            {
              name: 'Long Sleeve',
              brandName: 'Comfort Colors',
              availableColors:
              {
                bluejean: { name: 'Blue Jean',
                        code: '#49908a',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-blue-jean.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-blue-jean.jpg'},
		
                seafoam: { name: 'Brown',
                         code: '#5c4734',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-seafoam.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-seafoam.jpg'},
						 
                crimson: { name: 'Crimson',
                        code: '#973743',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-crimson.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-crimson.jpg'},
		
                grey: { name: 'Grey',
                         code: '#656565',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-grey.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-grey.jpg'},
						 
                hemp: { name: 'Hemp',
                        code: '#545945',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-hemp.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-hemp.jpg'},
		
                mustard: { name: 'Mustard',
                         code: '#d7b063',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-mustard.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-mustard.jpg'},
						 
                pepper: { name: 'Pepper',
                        code: '#383838',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-pepper.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-pepper.jpg'},
		
                yam: { name: 'Yam',
                         code: '#ac6048',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/front-yam.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Long-Sleeve/back-yam.jpg'}
              }
            },
            {
              name: 'Tank Top',
              brandName: 'Comfort Colors',
              availableColors:
              {
                black: { name: 'Black',
                        code: 'black',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-black.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-black.jpg'},
		
                bluejean: { name: 'Blue Jean',
                         code: '#556072',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-blue-jean.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-blue-jean.jpg'},
						 
                citrus: { name: 'Citrus',
                        code: '#f1b55d',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-black.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-black.jpg'},
		
                floblue: { name: 'Flo Blue',
                         code: '#5e6fa7',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-blue-jean.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-blue-jean.jpg'},
						 
                lagoon: { name: 'Lagoon',
                         code: '#75b8c8',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-lagoon.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-lagoon.jpg'},
						 
                lime: { name: 'Lime',
                        code: '#9cc26d',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-lime.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-lime.jpg'},
		
                neonpink: { name: 'Neon Pink',
                         code: '#f56aab',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-neon-pink.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-neon-pink.jpg'},  
						
                neonredorange: { name: 'Neon Red Orange',
                         code: '#f16b5f',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-neon-red-orange.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-neon-red-orange.jpg'},
						 
                neonyellow: { name: 'Neon Yellow',
                        code: '#fafb45',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-neon-yellow.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-neon-yellow.jpg'},
		
                sapphire: { name: 'Sapphire',
                         code: '#3aa5b7',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-sapphire.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-sapphire.jpg'},  
						
                seafoam: { name: 'Seafoam',
                         code: '#72a19b',

                         frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-seafoam.jpg',
                         backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-seafoam.jpg'},
						 
                white: { name: 'White',
                        code: 'white',

                        frontSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/front-white.jpg',
                        backSrc: 'http://www.texasca.com/images/Comfort-Colors-Tanktop/back-white.jpg'}

              }
            },
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
                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-white.jpg'},
                black: { name: 'Black', code: 'black',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-black.jpg'},
                red: { name: 'Red', code: 'red',
                       frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-red.jpg'},
			    orange: { name: 'Orange', code: 'orange',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-orange.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-orange.jpg'},
                blue: { name: 'Blue', code: 'Blue',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-indigo-blue.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-indigo-blue.jpg'},
                green: { name: 'green', code: 'green',
                       frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-lime.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-lime.jpg'},
			    brown: { name: 'Brown', code: 'brown',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-brown-savana.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-brown-savana.jpg'},
                pink: { name: 'Pink', code: 'pink',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-light-pink.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-light-pink.jpg'},
                purple: { name: 'Purple', code: 'purple',
                       frontSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/front-purple.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Short-Sleeve/back-purple.jpg'}
              }
            },
            {
              name: 'Long sleeve',
              brandName: $scope.otherSelection,
              availableColors:
              {
                white: { name: 'White', code: 'white',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-white.jpg'},
                black: { name: 'Black', code: 'black',
                         frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-black.jpg'},
                red: { name: 'Red', code: 'red',
                       frontSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Long-Sleeve/back-red.jpg'}
              }
            },
            {
              name: 'Tank top',
              brandName: $scope.otherSelection,
              availableColors:
              {
                white: { name: 'White',
                         code: 'white',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-white.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-white.jpg'},

                black: { name: 'Black',
                         code: 'black',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-black.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-black.jpg'},
                red: { name: 'Red', code: 'red',
                       frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-red.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-red.jpg'},
					   
                orange: { name: 'Orange',
                         code: 'orange',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-orange.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-orange.jpg'},

                blue: { name: 'Blue',
                         code: 'blue',

                         frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-carolina-blue.jpg',
                         backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-carolina-blue.jpg'},
                green: { name: 'Green', code: 'green',
                       frontSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/front-lime.jpg',
                       backSrc: 'http://www.texasca.com/images/Gildan-Tank-Top/back-lime.jpg'}
              }
            }
          ]
        }
      ];
  });
