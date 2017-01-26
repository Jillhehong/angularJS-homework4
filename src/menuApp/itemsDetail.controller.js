// /**
//  * Created by hhe on 1/25/2017.

(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('itemsDetailController', itemsDetailController);
    itemsDetailController.$inject = ['$stateParams','MenuDataService', 'items'];
    function itemsDetailController($stateParams, MenuDataService, items) {
        var itemDetail = this;
        var promise = MenuDataService.getItemsForCategory($stateParams.shortName);
        promise.then(function (response) {
            var items = response.data;
            itemDetail.items = items;
        });
        // itemsDetail.items = items;
    }
})();