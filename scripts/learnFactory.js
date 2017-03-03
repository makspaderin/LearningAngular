angular
      .module('ngLearn')
      .factory('learnFactory', function($http){

        function getLearn(){
          return $http.get('data/data.json');
        }

        return {
          getLearn: getLearn
        }
      });
