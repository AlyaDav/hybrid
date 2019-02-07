import * as angular from "angular";

export const module = angular.module('AngularJS', ['ui.router']);

module.config(($locationProvider, $stateProvider) => {
    // use history api instead of URL fragment
    $locationProvider.html5Mode(true);

    $stateProvider.state('angularjs_a', {
        url: '/angularjs_a',
        template: `
      AngularJS A!
 
      <a href="/angular_a">Go to Angular A</a>
    `
    });

    $stateProvider.state('sink', {
        url: '/*path',
        template: ''
    });

});