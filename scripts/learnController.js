angular
      .module('ngLearn')
      .controller('learnController', function($scope, learnFactory) {
          $scope.data = learnFactory.getLearn();
      });
