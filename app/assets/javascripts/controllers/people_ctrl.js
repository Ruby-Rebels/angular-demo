(function() {
  'use strict';

  angular.module('app').controller('peopleCtrl', function($scope) {
    $scope.people = [
      {
        bio: 'Father of our country',
        name: 'George Washington',
        bioVisible: false
      },
      {
        bio: 'Charles Dickens',
        name: 'This guy is hilarious',
        bioVisible: true
      },
      {
        bio: 'Pride & Prejudice and other romantic novels',
        name: 'Jane Austen',
        bioVisible: true
      }
    ]
  });
})();
