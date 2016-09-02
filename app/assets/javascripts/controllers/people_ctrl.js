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
      $http.post('/api/v1/people.json', person).success(function(response) {
        $scope.message = response.data.message;
        $scope.people.push(person);
        $scope.person = {};
      }).error(function(response) {
        $scope.errors = response.errors;
      })
    }

    $scope.deletePerson = function(person) {
      var index = $scope.people.indexOf(person);
      $scope.people.splice(index, 1);
    }

    $scope.toggleOrder = function(orderAttribute) {
      if (orderAttribute != $scope.orderAttribute) {
        $scope.isReverse = false;
      } else {
        $scope.isReverse = !$scope.isReverse;
      }
      $scope.orderAttribute = orderAttribute;
    }

  });
})();
