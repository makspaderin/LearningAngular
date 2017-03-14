angular
      .module('ngLearn')
      .controller('learnController', function($scope, learnFactory) {
          $scope.items;

          $scope.pupsinessInfo = {
            min: 0,
            max: 1000
          }

          $scope.newListing = {};
          $scope.addItem = function(newListing) {
            $scope.items.push(newListing);
            $scope.newListing = {};
          }

          learnFactory.getLearn().then(function(data) {
            $scope.items = data.data;
          }, function(error) {
            console.log(error)
          });﻿

          $scope.showContent = function() {
            console.log("Content is here!");
          }
      });
