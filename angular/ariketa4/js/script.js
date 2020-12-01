let myApp = angular.module('miApp', []);

myApp.controller('miControlador', function ($scope) {
    $scope.aux = false
    $scope.lista = [];

    $scope.cargar = function () {
        $scope.select;

        if ($scope.select != undefined) {
            $scope.lista.push({ nombre: $scope.select, curso: 1 });
            $scope.aux = true;
        }
    }

    $scope.limpiar = function () {
        $scope.lista = [];
        $scope.aux = false
    }
});