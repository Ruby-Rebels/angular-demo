(function() {
  'use strict';

  angular.module('app').controller('peopleCtrl', function($scope) {
    $scope.people = [
      {
        bio: 'Father of our country',
        name: 'George Washington',
        bioVisible: true
      },
      {
        bio: 'This guy is hilarious',
        name: 'Charles Dickens',
        bioVisible: true
      },
      {
        bio: 'Pride & Prejudice and other romantic novels',
        name: 'Jane Austen',
        bioVisible: true
      }
    ]

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    }

    $scope.addPerson = function() {
      $scope.people.push($scope.person);
      $scope.person = {};
      console.log($scope.people);
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    }

  });
})();
