angular
      .module('ngLearn')
      .controller('learnController', function($scope) {
          $scope.data = [
            {
              "name": "Maksim",
              "surname": "Paderin",
              "pupsiness": 600
            },
            {
              "name": "Katya",
              "surname": "Ladeichshikova",
              "pupsiness": 999
            },
            {
              "name": "Johhny",
              "surname": "Cat",
              "pupsiness": 400
            },
          ];
      });
