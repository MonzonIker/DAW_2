$(document).ready(function () {
    $('#entrar').click(function () {
        email = $('#email').val();
        contraseña = $('#pwd').val();
        console.log(email);
        console.log(contraseña);
        if (email == "" || contraseña == "") {
            alert("Por favor rellene los datos");
        } else {
            $.ajax({
                url: "JSON/Usuarios.json",
                type: "GET",
                dataType: "json",
                currentType: "application/json",
                success: function (datos) {
                    
                    encontrado = false;
                    administrador = false;
                    for (i = 0; i < datos.length; i++) {
                        if (email == datos[i].idUsuario && contraseña == datos[i].pasahitza) {
                            encontrado = true;

                            if (datos[i].tipo == "usu") {
                                alert(datos[i].tipo);
                                $('#usuarioLogin').hide();
                                $('#datosUsuario').show();

                                $('#usuEmail').val(datos[i].idUsuario);
                                $('#usuPwd').val(datos[i].pasahitza);
                                $('#usuNombre').val(datos[i].izena);
                                $('#usuApellido').val(datos[i].abizena);
                                $('#usuImagen').css('background-image', 'url(' + datos[i].argazkia + ')');

                                miUsuario = i;
                
                            } else {
                                admin = true;
                                alert(datos[i].tipo);
                                $('#usuarioLogin').hide();
                                $('#datosAdmin').show();

                            }
                            seleccionado = datos[i].argazkia
                        }
                    }
                    
                    if (encontrado == false) {
                        alert("ta mal");
                    }

                    // alert(miUsuario);
                    if (encontrado == true) {

                        // alert("entrando");
                        $.ajax({
                            url: "JSON/Imagenes.json",
                            type: "GET",
                            dataType: "json",
                            currentType: "application/json",
                            success: function (datos) {
                                for (i = 0; i < datos.length; i++) {

                                    if (seleccionado == datos[i].imagen) {
                                        $('#imagenesUsuarios').append("<option class='opcion' selected>" + datos[i].imagen + "</option>");
                                    } else {
                                        $('#imagenesUsuarios').append("<option class='opcion' >" + datos[i].imagen + "</option>");
                                    }
                                }


                                $('#imagenesUsuarios').change(function () {
                                    valorImagen = $('#imagenesUsuarios').val();
                                    $('#usuImagen').css('background-image', 'url(' + valorImagen + ')');

                                });
                                $(".guardar").click(function () {
                                    mail = $('#usuEmail').val();
                                    contraseña = $('#usuPwd').val();
                                    nombre = $('#usuNombre').val();
                                    apellido = $('#usuApellido').val();
                                    alert(mail + " " + contraseña + " " + nombre + " " + apellido)
                                });

                            }
                        });
                    }


                    for (i = 0; i < datos.length; i++) {
                        $('.imagenesUsu').append('<img class="todasImagenes" src="' + datos[i].argazkia + '" width="100px">');
                    }
                    $('.todasImagenes').click(function () {
                        $('.zonaDatosAdmin').show();
                        for (i = 0; i < datos.length; i++) {

                            if ($(this).attr('src') == datos[i].argazkia) {
                                $('.todasImagenes').css('border', '0px');
                                $('.todasImagenes').css('opacity', '.5');
                                $(this).css('border', '3px solid red');
                                $(this).css('opacity', '1');

                                $('#usuActualEmail').val(datos[i].idUsuario);
                                $('#usuActualPwd').val(datos[i].pasahitza);
                                $('#usuActualNombre').val(datos[i].izena);
                                $('#usuActualApellido').val(datos[i].abizena);
                            }
                        }
                    });
                }
            });
        }
    });
})