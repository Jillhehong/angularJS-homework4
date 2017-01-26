/**
 * Created by hhe on 1/23/2017.
 */
(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('categoriesController', categoriesController);
    categoriesController.$inject = ['MenuDataService','categories'];
    function categoriesController(MenuDataService, categories) {
        var categoriesList = this;
        var promise = MenuDataService.getAllCategories();
        promise.then(function (response) {
            categoriesList.categories  = response.data
        });
        // categoriesList.categories = categories;
        // console.log('categories: ', categoriesList.categories);
    }
})();