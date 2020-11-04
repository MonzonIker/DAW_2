$(document).ready(function () {

    $('#irudia').mouseover(function () {
        $('#irudia').attr('src', 'img/bulls.png');
    });

    $('#irudia').mouseout(function () {
        $('#irudia').attr('src', 'img/celtics.jpg');
    });

    $('.radio').click(function () {
        tamainoa = $(this).val();
        // a todos los Name="textop" les doy el taminoa
        $('.textop').css('font-size', tamainoa);
    });

    $("form").submit(function () {
        if ($("#Izena").val() === null || $("#Izena").val() === "") {
            alert("El campo izena no puede estar vacio");
            return false;
        };
        if ($("#Adina").val() === null || $("#Adina").val() === "") {
            alert("El campo Adina no puede estar vacio");
            return false;
        };
        if ($("#Adina").val() < 0 || $("#Adina").val() > 80) {
            alert("Adina tiene que ser una valor del rango 0-80");
            return false;
        };
        if ($("#Balorazioa").val() === null || $("#Balorazioa").val() === "") {
            alert("El campo Balorazioa no puede estar vacio");
            return false;
        };
        if ($("#Balorazioa").val() < 0 || $("#Balorazioa").val() > 10) {
            alert("Balorazioa tiene que ser una valor del rango 0-10");
            return false;
        }
        return;
    });

    $('#Adina,#Balorazioa').keypress(function (e) {
        var keychar;
        var teclanum;
        teclanum = e.which;                             //codigo ASCII de la tecla pulsada
        keychar = String.fromCharCode(teclanum);        //caracter pulsado
        if ((keychar >= "0" && keychar <= "9") || teclanum == 8) {
            longitud = $(this).val().length;
            // alert(longitud);
            if (longitud == 2) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    });

    $('#BotonCrear').click(function () {
        textoTecleado = $('#palabra').val();
        longitud = textoTecleado.length;
        $textoHTML = "";
        for (i = 0; i < longitud; i++) {
            $textoHTML = $textoHTML + "<input type='button' value='" + textoTecleado.charAt(i) + "'>"
        }
        $('#ZonaBotones').append($textoHTML);
    })
});