var myApp = angular.module('myApp', ['base64', "ngRoute", "uiGmapgoogle-maps", "vesparny.fancyModal"]).run(function($rootScope) {
    $rootScope.routeDetails = [];
}).config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
         key: 'AIzaSyAqkqJc5A80Pdk9b7gOnSvzU2ryz1s0tTA',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});