(function() {
  'use strict';

  const app = angular.module('register');

  app.controller('orderController', orderController)
  app.controller('recieptController', recieptController)

  function orderController ($scope, $rootScope) {
    $scope.menu = [{name: 'Pizza', price: 9.99, count: 0},{name: 'Burger', price: 12.99, count: 0},{name: 'Salad', price: 5.99, count: 0},{name: 'Cheeseburger', price: 12.99, count: 0}]

    $rootScope.total = 0
    $rootScope.tax = 0

    $scope.addToOrder = function (item) {
      if ($rootScope.order.includes(item)) {
        item.count++
      } else {
        $rootScope.order.push(item)
        item.count++
      }

      $rootScope.total += item.price
      $rootScope.tax = $rootScope.total * .08 || 0
    }
  }

  function recieptController ($scope, $rootScope) {
    if (!$rootScope.order) {
      $rootScope.order = []
    }
    $scope.inOrder = $rootScope.order
  }


}());
