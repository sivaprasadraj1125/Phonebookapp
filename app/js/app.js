var app = angular.module("PhoneBookApp",[]);

app.controller("createContactController",['$scope',function($scope) {
$scope.list = [];
$scope.createContact = function() {
console.log($scope.username);
}
}]);
