## APACHE 2
### Ficheros de configuración y directivas en Linux
#### 1. ¿Cuál es la ruta a los ficheros de configuración de apache?
Por lo genreal el fichero de configuracion de apache se encuentra en una de estas rutas.

/etc/apache2/httpd.conf

/etc/apache2/apache2.conf

/etc/httpd/httpd.conf

/etc/httpd/conf/httpd.conf
#### 2. ¿Cuál es el fichero de configuración principal?
httpd. conf
#### 3. ¿Que son las directivas "include" que aparecen en el fichero de configuración principal?
Include permite que se incluyan otros archivos de configuración en el tiempo de ejecución.
#### 4. ¿Que contiene el fichero ports.conf?
Almacena las directivas que determinan los puertos TCP en los que Apache está escuchando.
#### 5. ¿Que contiene el fichero envvars?
Contiene las variables de entorno de Apache2.
#### 6. ¿Cuál es el uso de las carpetas "sites-avaliable" y "sites-enabled"'?
sites-available: Es donde se almacenan los archivos que continen los virtualhosts de nuestros dominios.
sites-enabled: contiene enlaces simbólicos al directorio /etc/apache2/sites-available.

### Define para que se utilizan las siguientes :
#### ServerRoot:
La directiva ServerRoot especifica el directorio de nivel superior que tiene el contenido web. Por defecto, ServerRoot está configurado a "/etc/httpd" para servidores seguros y no seguros.
#### ServerAdmin:
Configure la directiva ServerAdmin a la dirección de correo electrónico del administrador del servidor Web. Esta dirección de correo aparecerá en los mensajes de error en las páginas generadas por el servidor Web, de tal manera que los usuarios pueden comunicar errores enviando correo al administrador.
Por defecto, ServerAdmin es configurado a root@localhost.
#### ServerName:
Use la directiva ServerName para configurar un nombre de servidor y un número de puerto (que coincida con la directiva Listen) para el servidor. El ServerName no necesita coincidir con el nombre real de la máquina.
#### ServerAlias:
Pata poner nombres alternativos a un host
#### user:
La directiva User establece el nombre de usuario para el proceso del servidor y determina qué archivos puede accesar el servidor. Cualquier archivo que no esté accesible a este usuarip tampoco estará disponible para los clientes del Servidor Apache HTTP.
#### Include:
Include permite que se incluyan otros archivos de configuración en el tiempo de ejecución.
#### Group:
Especifica el nombre del grupo de los procesos Servidor Apache HTTP.
#### KeepAlive
KeepAlive determina si el servidor permitirá más de una petición por conexión y se puede usar para prevenir a un cliente consumir demasiados recursos del servidor.
#### Files:
usto tras AccessFileName, un conjunto de indicadores de Files aplican el control de acceso a cualquier archivo comenzando con un .ht.
#### Location:
Las etiquetas <Location> y </Location> permiten crear un contenedor en el cual se puede especificar el control de acceso basado en URL.
#### Errorlog:
ErrorLog especifica el archivo donde se guardan los errores del servidor . Por defecto, esta directiva es configurada a /var/log/httpd/error_log.
#### Listen:
El comando Listen identifica los puertos en los que el servidor Web aceptará las peticiones entrantes.
#### Alias:
El valor Alias hace accesibles a los directorios fuera del directorio DocumentRoot.Cualquier URL que termine en el alias será automáticamente traducido a la ruta del alias.
#### Redirect:
Cuando se mueve una página web, se puede utilizar Redirect para crear asignaciones de la ubicación del archivo a un nuevo URL. 
#### ErrorDocumetn 404:
La directiva ErrorDocument asocia un código de respuesta HTTP con un mensaje o un URL para que sea devuelto al cliente.
#### Options:
La directiva Options controla características del servidor que están disponibles en un directorio en particular.
#### < Virtualhost>…< /Virtualhost>:
Las etiquetas < VirtualHost> y < /VirtualHost> crean un contenedor mostrando las características de un host virtual. El contenedor VirtualHost acepta la mayoría de las directivas de configuración.
#### < Directory >…< /Directory>:
Las etiquetas < Directory path/to/directory> y </ Directory> se usan para crear un contenedor que se utiliza para cercar un grupo de directivas de configuración que sólo se aplican a un directorio y sus subdirectorios específicos. Cualquier directiva aplicable a un directorio puede usarse en las etiquetas Directory.
#### DocumentRoot:
DocumentRoot es el directorio que contiene la mayoría de los archivos HTML que se entregarán en respuesta a peticiones. El directorio predeterminado DocumentRoot para servidores web seguros y no seguros es /var/www/html.
#### DirectoryIndex:
DirectoryIndex es la página por defecto que entrega el servidor cuando hay una petición de índice de un directorio especificado con una barra (/) al final del nombre del directorio.