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
        categoriesList.categories = categories.data;
        console.log(categoriesList.categories);
    }
})();