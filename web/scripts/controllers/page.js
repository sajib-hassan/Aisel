'use strict';

angular.module('projectxApp')
  .controller('PageCtrl', ['$location','$scope','$routeParams','pageService','categoryService',function ($location, $scope, $routeParams, pageService, categoryService) {

        $scope.pageLimit = 5;
        $scope.paginationPage = 1;

        var handleSuccess = function(data, status) {
            $scope.pageList = data;
        };

        // Pages
        pageService.getPages($scope).success(
            function(data, status) {
                $scope.pageList = data;
            }
        );

        $scope.pageChanged = function(page) {
            $scope.paginationPage = page;
            pageService.getPages($scope).success(
                function(data, status) {
                    $scope.pageList = data;
                }
            );
        };

    }]);