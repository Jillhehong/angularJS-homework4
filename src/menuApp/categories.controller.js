/**
 * Created by hhe on 1/23/2017.
 */
(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('categoriesController', categoriesController);
    categoriesController.$inject = ['categories'];
    function categoriesController( categories) {
        var categoriesList = this;
        categoriesList.categories = categories;
        // console.log('categories: ', categoriesList.categories);
    }
})();