var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope) {

    $scope.nombre = "";
    $scope.apellido = "";
    $scope.mensaje = "";
    $scope.aux = false;

    $scope.SacarMensaje = function () {
        $scope.mensaje = "Hola " + $scope.nombre + " " + $scope.apellido;
        $scope.aux = true;
    }

    $scope.limpiarmsg = function () {
        $scope.nombre = "";
        $scope.apellido = "";
        $scope.mensaje = "";
        $scope.aux = false;
    }

});
