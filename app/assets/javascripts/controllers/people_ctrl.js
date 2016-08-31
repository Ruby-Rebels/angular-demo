(function() {
  'use strict';

  angular.module('app').controller('peopleCtrl', function($scope, $http) {
    function setup() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    }

    setup();

    $scope.toggleBio = function(person) {
      person.bioVisible = !person.bioVisible;
    }

    $scope.addPerson = function(person) {
      $http.post('/api/v1/people.json', person).then(function(response) {
        $scope.message = response.data.message;
        $scope.people.push(person);
        $scope.person = {};
      });
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    }

  });
})();
