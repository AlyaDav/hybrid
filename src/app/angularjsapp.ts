import * as angular from "angular";


export const module = angular.module('AngularJS', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {

    $locationProvider.html5Mode(true);

    $stateProvider.state('angularjs_a', {
        url: '/angularjs_a',
        templateUrl: './components/angularJs/angularJs.html',
        controller: 'AngularJSCTRL'
    });
    
    $stateProvider.state('angular_a', {
        url: '/angular_a',
        template: ''
    });
})

    .controller('AngularJSCTRL', function ($location, $scope) {
        if ($location.search().hasOwnProperty('paramsAngular')) {
            var myvalue = $location.search()['paramsAngular'];
            $scope.modelJS = myvalue;
        }
        $scope.change = function () {
            if ($scope.modelJS)
                $location.url('angular_a' + '?paramsJs=' + $scope.modelJS);
            else {
                $location.url('angular_a');
            }
        };
    });