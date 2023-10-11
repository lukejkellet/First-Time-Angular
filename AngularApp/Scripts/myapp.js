var app = angular.module('MyApp', []);
app.controller('MyController', function ($scope) {
    $scope.myVal = "Welcome to Angular.JS";

    $scope.MyFun = function () {
        alert("Hello world");
    }
    $scope.MyFun2 = function (val) {
        alert("Parameter passed: " + val);
    }
});