/**
 * Created by hhe on 12/9/2016.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider
//
        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menuApp/templates/homePage.template.html'
            })
//
            //Premade list page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuApp/templates/categories.template.html',
                controller: 'categoriesController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                          MenuDataService.getAllCategories()
                              .then(function (response) {
                                  console.log('categories is ', response.data);
                                  return response.data;
                              });
                        }
                    ]
                }
            })

//             // .state('itemsDetail', {
//             //     url: '/categories/itemsList/{shortName}',
//             //     templateUrl: 'src/menuApp/templates/item.template.html',
//             //     controller: 'itemDetailController as itemDetail',
//             //     resolve: {
//             //         items: ['$stateParams', 'MenuDataService',
//             //             function ($stateParams, MenuDataService) {
//             //                 var promise = MenuDataService.getItemsForCategory(shortName);
//             //                 promise.then(function (response) {
//             //                     var items = response.data;
//             //                 });
//             //                 return items.menu_items;
//             //             }]
//             //     }
//             // });
    }
})();
