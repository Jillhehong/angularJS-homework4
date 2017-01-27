// /**
//  * Created by hhe on 1/25/2017.

(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('itemsDetailController', itemsDetailController);
    itemsDetailController.$inject = ['$stateParams','MenuDataService', 'items'];
    function itemsDetailController($stateParams, MenuDataService , items ) {  //
        // console.log(items.data.menu_items);
        var itemsDetail = this;
        itemsDetail.items = items.data.menu_items;
    }
})();