let myApp = angular.module('miApp', []);

myApp.controller('miControlador', function ($scope) {

    $scope.lista = [
        { id: '1', nombre: "ANA", apellido1: "ANSOLA", apellido2: "BAaaaRTET", ciclo: "APLICACIONES WEB", curso: "primero", seleccionado: false },
        { id: '2', nombre: "SARA", apellido1: "ANSUATEGI", apellido2: "ETXABE", ciclo: "APLICACIONES WEB", curso: "segundo", seleccionado: false },
        { id: '14', nombre: "ENEKO", apellido1: "ARRIETA", apellido2: "GABIOLA", ciclo: "APLICACIONES WEB", curso: "segundo", seleccionado: false },
        { id: '24', nombre: "MIREN", apellido1: "BALZATEGI", apellido2: "ZUMELAGA", ciclo: "CUIDADOS AUX ENF", curso: "primero", seleccionado: false },
        { id: '25', nombre: "ASIER", apellido1: "ETXEANDIA", apellido2: "RASIER", ciclo: "SOLDADURA", curso: "segundo", seleccionado: false }
    ];



    $scope.botones = true
    $scope.formnuevo = false
    $scope.buscar = false

    $scope.eliminarselected = function () {
        var auxlength = $scope.lista.length

        for (var i = 0; i < auxlength; i++) {
            
            if($scope.lista[i].seleccionado == true){
                $scope.lista.splice(i, 1);
                i--
            }
            

         }
    }

    $scope.eliminartodo = function () {
        $scope.lista = []
    }

    $scope.vernuevo = function () {
        $scope.botones = false
        $scope.formnuevo = true

        var auxlength

        if ($scope.lista.length != 0) {

            auxlength = $scope.lista.length - 1
        } else {
            auxlength = $scope.lista.length
        }

        if (auxlength == 0) {
            $scope.idactual = 1
        } else {

            $scope.idactual = $scope.lista[auxlength].id
            $scope.idactual++
        }

    }

    $scope.addnuevo = function () {

        $scope.lista.push({ id: $scope.idactual, nombre: $scope.newnombre, apellido1: $scope.newape1 , apellido2: $scope.newape2, ciclo: $scope.newciclo, curso: $scope.newcurso, seleccionado: false});
        $scope.botones = true
        $scope.formnuevo = false
        $scope.idactual = 1
        $scope.newnombre = ""
        $scope.newape1 = ""
        $scope.newape2 = ""
        $scope.newciclo = ""
        $scope.newcurso = ""
    }

    $scope.cancelarnuevo = function () {
        $scope.botones = true
        $scope.formnuevo = false
        $scope.idactual = 1
        $scope.newnombre = ""
        $scope.newape1 = ""
        $scope.newape2 = ""
        $scope.newciclo = ""
        $scope.newcurso = ""
    }

    $scope.verbuscar = function () {
        $scope.botones = false
        $scope.buscar = true}

        $scope.cancelarbuscar = function () {
            $scope.botones = true
            $scope.buscar = false
            $scope.filtro =""
        }
});