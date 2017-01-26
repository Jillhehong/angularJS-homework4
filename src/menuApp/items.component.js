/**
 * Created by hhe on 1/25/2017.
 */
angular.module('MenuApp')
    .component('itemsList', {
        templateUrl: 'src/menuApp/templates/itemsList.template.html',
        bindings: {
            items: '<'
        }
    });