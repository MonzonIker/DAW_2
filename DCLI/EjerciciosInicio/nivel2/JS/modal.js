var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var tipo = urlParams.get('tipo');

if (tipo == "plato") {
    document.getElementById("titulo").innerHTML = "PLATOS:";
    document.getElementById("comboMenus").style.display = "none";
    var cartas = document.getElementsByClassName("card");

    for (var i = 0; i < cartas.length; i++) {
        cartas[i].style.display = "block";
    }
}

/* document.getElementById("comboMenus").addEventListener(onchange,mostrarmenus(Event)); */

function mostrarmenus() {

    var tipomenu = document.getElementById("comboMenus").value;

    var cartas = document.getElementsByClassName("card");

    for (var i = 0; i < cartas.length; i++) {

        if (cartas[i].dataset.basico == "true" && tipomenu == "basico") {

            cartas[i].style.display = "block";
        } else if (cartas[i].dataset.especial == "true" && tipomenu == "especial") {

            cartas[i].style.display = "block";
        } else {
            cartas[i].style.display = "none";
        }

    }
}
var total = 0;
function hacerpedido() {
    document.getElementById("fade").style.display = "block";
    document.getElementById("light").style.display = "flex";
    document.getElementById("edad").disabled = true;
    document.getElementById("direccion").disabled = true;
    document.getElementById("btnComprar").disabled = true;

    var checks = document.getElementsByClassName("classCheckbox");
    console.log(checks);
    total = 0;
    document.getElementById("hemenJarri").innerHTML += "<ul id='listita'>";
    for (var i = 0; i < checks.length; i++) {

        if (checks[i].checked == true) {

            total = total + parseFloat(checks[i].value);
            console.log(checks[i]);
            document.getElementById("listita").innerHTML += "<li><span>" + checks[i].dataset.titulo + "</span>" + checks[i].value + " €</li>";

        }
    }



    document.getElementById("hemenJarri").innerHTML += "<hr><p>TOTAL: " + total + " €<p>"
    document.getElementById("hemenJarri").innerHTML += "<hr><p id='prom'>PROMOCION: " + promo + " % -> " + quitardeltotal + " €</p>"
    document.getElementById("hemenJarri").innerHTML += "<hr><p id='tot'>TOTAL A PAGAR: " + total + " €</p>"
}


function cancelarpedido() {
    if (tipo == "menu") {
        location.href = "elegir_producto.html?tipo=menu";
    } else {
        location.href = "elegir_producto.html?tipo=plato";
    }
}

var quitardeltotal = 0;
var promo = 0;
function calcularpromo() {
    var edad = document.getElementById("edad").value
    console.log(document.getElementById("edad").value);

    if (edad < 18) {
        quitardeltotal = total * 0.1;
        quitardeltotal = quitardeltotal.toFixed(2);
        promo = 10;
        var calculado = total - quitardeltotal;
        document.getElementById("prom").innerHTML = "PROMOCION: " + promo + " % -> " + quitardeltotal + " €";
        document.getElementById("tot").innerHTML = "TOTAL A PAGAR: " + calculado + " €";
    } else if (edad > 65) {
        quitardeltotal = total * 0.2;
        promo = 20;
        var calculado = total - quitardeltotal;
        document.getElementById("prom").innerHTML = "PROMOCION: " + promo + " % -> " + quitardeltotal + " €";
        document.getElementById("tot").innerHTML = "TOTAL A PAGAR: " + calculado + " €";
    }
}


/**formulario */

function mostrarcosas(lacosa) {
    document.getElementById(lacosa).disabled = false;
    if (lacosa == "direccion") {
        console.log("calculamos");
        calcularpromo();
    }

}


/**edad */
function esnumero(tecla) {
    tecleado = document.getElementById("edad").value.lentgh;
    if (!isNaN(parseInt(tecla.key)) & parseInt(tecla.key) >= 0 & parseInt(tecla.key) <= 9 & document.getElementById("edad").value < 10) {
        if (tecleado > 1) {

            return false;
        }
    } else {
        return false;
    }

}

/**comprar */

function terminarcompra() {
    var r = confirm("¿Son correctos los datos de entrega?");
    if (r == true) {
        alert("Pedido realizado correctamente");
        location.href = "index.html";
    } else {
        cancelarpedido()
    }
}