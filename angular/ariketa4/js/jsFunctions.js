let myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.ver = false
    $scope.lista = [];

    $scope.cargar = function () {
        $scope.select;

        if ($scope.select != undefined) {
            $scope.lista.push({ nombre: $scope.select, curso: 1 });
            $scope.ver = true;
        }
    }

    $scope.limpiar = function () {
        $scope.lista = [];
        $scope.ver = false
    }
});