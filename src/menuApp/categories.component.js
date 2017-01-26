/**
 * Created by hhe on 12/9/2016.
 */
(function () {
    'use strict';
    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/menuApp/templates/categoriesList.template.html',
            bindings: {
                categories: '<'
            }
        });
})();
