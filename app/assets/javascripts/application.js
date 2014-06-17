// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require_tree .

var parksApp = angular.module('parksApp', ['parkServices']);

parksApp.controller('ParksListCtrl', ['$scope', 'Parks', function ($scope, Parks) {
    $scope.parks = Parks.query();
    $scope.alphaSortValue = function(name) {
      return name.replace(/[Tt]he\s+/, '');
    }
}]);

var parkServices = angular.module('parkServices', ['ngResource']);

parkServices.factory('Parks', ['$resource',
    function ($resource) {
        return $resource('parks/:parkId', {}, {
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: function (data) {
                    return JSON.parse(data).parks;
                }
            }
        });
    }
]);
