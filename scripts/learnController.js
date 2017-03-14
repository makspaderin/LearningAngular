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

          $scope.editItem = function(item) {
            $scope.editListing = true;
            $scope.existingListing = item;
          }

          $scope.saveItemEdit = function() {
            $scope.existingListing = {};
            $scope.editListing = false;
          }

          $scope.deleteItem = function(listing) {
            var index = $scope.item.indexOf(listing);
            $scope.item.splice(index, 1);
            $scope.existingListing = {};
            $scope.editListing = false;
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
