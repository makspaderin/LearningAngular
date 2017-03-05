angular
      .module("ngLearn")
      .filter("learnFilter", function() {

        return function(listings, pupsinessInfo) {
            var filtered = [];

            var min = pupsinessInfo.min;
            var max = pupsinessInfo.max;

            angular.forEach(listings, function(listing) {
              if (listing.pupsiness >= min && listing.pupsiness <= max) {
                filtered.push(listing);
              }
            });
            return filtered;
        }
      });
