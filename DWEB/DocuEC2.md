## EC2
### ¿Qué es y para qué sirve EC2?
Amazon Elastic Compute Cloud (Amazon EC2) proporciona capacidad de computación escalable en la nube de Amazon Web Services (AWS).
### Instancia creada
![instancia ec2](https://github.com/MonzonIker/DAW_2/blob/main/DWEB/instancia%20creada.png?raw=true)
## Instalacion de aplicaciones
### Apache2
![Apache](https://github.com/MonzonIker/DAW_2/blob/main/DWEB/apache2%20prueba.png?raw=true)
### PHP
![PHP](https://github.com/MonzonIker/DAW_2/blob/main/DWEB/php%20status.png?raw=true)
### MySQL
![MySQL](https://github.com/MonzonIker/DAW_2/blob/main/DWEB/mysql.png?raw=true)
### FTP
![FTP](https://github.com/MonzonIker/DAW_2/blob/main/DWEB/ftp%20status.png?raw=true)
## IP elastica
###  ¿Qué es y para qué sirve una IP Elástica?
Las direcciones IP elásticas son direcciones IPv4 estáticas diseñadas para la informática en la nube dinámica. Con una dirección IP elástica, puede enmascarar los errores de una instancia o software volviendo a mapear rápidamente la dirección a otra instancia de su cuenta.
### Imagen de mi EC2
![IP elastica](https://raw.githubusercontent.com/MonzonIker/DAW_2/main/DWEB/asociar%20ip%20elastica.png)
![instamcia ya con ip elastica](https://github.com/MonzonIker/DAW_2/blob/main/DWEB/instanciaelastica.png?raw=true)
## DNS
###  ¿Qué es y para qué sirve el DNS?
Los servidores DNS que controlan todo, más conocidos como Root Name Servers o DNS Root Servers, son los que gestionan las peticiones de traducción de un nombre de dominio a una dirección IP.
### Indica cuales son y para qué se usan los diferentes tipos de registros DNS.
A: apunta a una IP. El servidor de destino es el encargado de tratar la solicitud entrante. Ejemplo: 192.168.1.104

AAAA: Apunta hacia una dirección IP IPv6. Ejemplo: 2001:0dd8:85a3:08d3:1319:8a2e:0370:7334

CNAME: apunta a otro dominio o a otro subdominio. Ejemplo: blog.example.com

MX: se utilizan para apuntar a los servidores de correo electrónico. El correo será dirigido con prioridad al servidor MX primario.

TXT: puedes rellenarlos con cualquier texto que desees. Los usos más habituales de los registros TXT son verificar la propiedad del dominio y evitar el uso indebido del correo electrónico. 

SRV especifica la información sobre los servicios disponibles.

SPF: o Convenio de Remitentes, del inglés Sender Policy Framework. Es una protección contra la falsificación de direcciones en el envío de correo electrónico.

CAA: es un mecanismo de autorización para entidades certificadoras. 
### Registros DNS de Guebs
![DNS del cpanel](https://raw.githubusercontent.com/MonzonIker/DAW_2/main/DWEB/DNS%20cpanel.png)
A: Apunta a la ip 54.76.1.76

MX: servidor de correo electronico

TXT: verificar la propiedad del dominio y evitar el uso indebido del correo electrónico.
## DNS preguntas
### ¿Cuántos servidores DNS existen?
En la actualidad existen un total de 13 servidores raíz DNS, y están nombrados por letras de la “A” a la “M”. Estos servidores, tienen una dirección IPv4 y una dirección IPv6.
### ¿Cuántas redirecciones DNS son posibles?
Todas las necesarias hasta encontrar respuesta a la direccion solicitada o hasta que un root DNS indique que no ha encontrado anda.
###  ¿Qué son los servidores DNS Raíz?
Un Root Name Server es un servidor que desempeña la función de traducir nombres de dominio en direcciones IP, los servidores de nombres raíz son una parte fundamental de Internet, ya que son el primer paso en la traducción (resolución) de los nombres de host legibles en direcciones IP que se utilizan en la comunicación entre los hosts de Internet.
### ¿Para qué montar un servidor si simplemente escribiendo en un fichero la relación IP/Nombre el sistema ya funcionaría?
Por que para poder comunicarte con otras direcciones tendrias que tener en el host la informacion y al estar en un servidor se puede consultar, por que se actualiza automaticamente al conectarse al servidor por que DNs actualiza el registro.
###  Según lo expuesto, y si en tu configuración de red del sistema operativo solamente posees un servidor DNS, entonces: ¿cuál sería el proceso para encontrar la IP de la dirección web: http://www.debian.org/distrib/netinst?
El ordenador manda peticion a DNS y este lo reenvia hasta encontrarlo o llegar un root DNS.
### ¿Es posible si dispones de una conexión a Internet con IP dinámica ofrecer servicios en Internet? Es decir, si quieres ofrecer los servicios SND, no dispones de IP estática, esto es, cada vez que te conectas a Internet tu IP, aunque a veces sea la misma, no siempre es la misma. 
Si es posible con un DDNS que se encargaria de mantener actulizada la informacion
### ¿Qué es ICANN?
Internet Corporation for Assigned Names and Numbers (ICANN) es una organización sin fines de lucro que opera a nivel internacional, responsable de asignar espacio de direcciones numéricas de protocolo de Internet (IP), identificadores de protocolo y de las funciones de gestión [o administración] del sistema de nombres de dominio de primer nivel genéricos (gTLD) y de códigos de países (ccTLD), así como de la administración del sistema de servidores raíz.