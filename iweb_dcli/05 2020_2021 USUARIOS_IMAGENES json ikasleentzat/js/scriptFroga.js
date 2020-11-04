$(document).ready(function () {

    $('#entrar').click(function () {
        var usuarios = $.get('JSON/Usuarios.json', function(data) {
            console.log(data);
            console.log("data");
            
        });
    });


});