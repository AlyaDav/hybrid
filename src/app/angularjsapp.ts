import * as angular from "angular";


export const module = angular.module('AngularJS', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {

    $locationProvider.html5Mode(true);

    $stateProvider.state('angularjs', {
        url: '/angularjs',
        templateUrl: './components/angularJs/angularJs.html',
        controller: 'AngularJSCTRL'
    });
    
    $stateProvider.state('angular', {
        url: '/angular',
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
                $location.url('angular' + '?paramsJs=' + $scope.modelJS);
            else {
                $location.url('angular');
            }
        };
    });