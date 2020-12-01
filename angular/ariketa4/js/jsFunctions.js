let myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.ver = false
    $scope.ListaSeleccionados = [];

    $scope.load = function () {
        $scope.mySelect;

        if ($scope.mySelect != undefined) {
            $scope.ListaSeleccionados.push({ nombre: $scope.mySelect, curso: 1 });
            $scope.ver = true;
        }
    }

    $scope.clean = function () {
        $scope.ListaSeleccionados = [];
        $scope.ver = false
    }
});