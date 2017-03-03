angular
      .module('ngLearn')
      .controller('learnController', function($scope, learnFactory) {
          $scope.items;

          learnFactory.getLearn().then(function(data) {
            $scope.items = data.data;
          }, function(error) {
            console.log(error)
          });﻿
      });
