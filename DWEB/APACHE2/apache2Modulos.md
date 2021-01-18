## Indica qué módulos estáticos hay activos en tu instancia de AWS y qué hace cada una de ellas:
![Modulos](https://raw.githubusercontent.com/MonzonIker/DAW_2/main/DWEB/modulos1.png)

### core
Funcionalides básicas del Servidor HTTP Apache que siempre están presentes.
### so
Carga el codigo y modulos al iniciar o reiniciar
### watchdog
da instrucciones de tares a otros modulos
### http
capa de transporte de http
### log_config
el login de las peticiones que se hacen al servidor
### logio
el log de bytes por input y output de cada peticion
### version
la configuracion dependiente de apache
### unixd
seguridad basica para las plataformas unix

## Activar módulos:
### 1- Comprueba si los módulos info y status están activos en tu instancia.
En la captura anterior podemos ver que status i que esta activo asi que activaremos info

### 2- Activa el módulo que no esté activo y compruébalo
En /etc/apache2/mods-available podemos ver como se llama el modulo que es info.load y para activarlo con a2enmod info.load y reiniciamos el servicio para ver que ahora si esta activo

![info](https://raw.githubusercontent.com/MonzonIker/DAW_2/main/DWEB/infomodulo.png)