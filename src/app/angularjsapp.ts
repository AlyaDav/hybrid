import * as angular from "angular";

export const module = angular.module('AngularJS', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {
    // use history api instead of URL fragment
    $locationProvider.html5Mode(true);//изменять маршрутизацию и URL-адреса наших страниц без обновления страницы.

    $stateProvider.state('angularjs_a', {
        url: '/angularjs_a',
        templateUrl: './components/angularJs/angularJs.html',
        controller: 'AngularJSCTRL'
    });

    $stateProvider.state('sink', { //регистрация состояния
        url: '/*path',
        template: ''

    });
    $stateProvider.state('angular_a', { //регистрация состояния
        url: '/angular_a',
        template: ''
    });
})

    .controller('AngularJSCTRL', function ($location, $scope) {

        if ($location.search().hasOwnProperty('paramsAngular')) { //получаем параметры quevery param angular 
            var myvalue = $location.search()['paramsAngular']; // == param
            $scope.modelJS = myvalue;
        }

        $scope.change = function () {
            $location.url('angular_a' + '?paramsJs=' + $scope.modelJS);
        };
    });