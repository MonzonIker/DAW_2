var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope, $http) {

    $scope.estilofondo = {
        backgroundColor: 'cyan'
    }

    $scope.estilotitulo = {
        textAlign: "center"
    }

    $scope.tabla = false

    $scope.Cargar = function () {

        $scope.tabla=true

        $http.get("JSON/datos.json").then(function(datos){
            $scope.persona = datos.data


        });
    }

});
