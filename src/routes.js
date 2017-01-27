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
                        var promise = MenuDataService.getAllCategories();
                        return promise;
                        }
                    ]
                }
            })

            .state('itemsDetail', {
                url: '/categories/itemsList/{shortName}',
                templateUrl: 'src/menuApp/templates/items.template.html',
                controller: 'itemsDetailController as itemsDetail',
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            var promise = MenuDataService.getItemsForCategory($stateParams.shortName);
                            // promise.then(function (response) {
                            //     var items = response.data;
                            //     console.log('items: ', items);
                            //     return items;
                            // });
                            return promise;
                        }]
                }
            });
    }
})();
