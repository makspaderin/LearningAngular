angular
      .module('ngLearn')
      .factory('learnFactory', function(){
        var learnData;

        function getLearn(){
          return learnData;
        }

        return {
          getLearn: getLearn
        }

      });
