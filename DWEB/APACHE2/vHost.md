## www.apuntes.daw.net:80
### Configuración mediante fichero .htaccess.
### Alojado en: /var/www/apuntes/.
### Sin Fichero index.
### Permitir mostrar índice de ficheros.
### Pagina de error 404: /var/www/404.html.
### Redirigir www.apuntes.daw.net/buscador/ a www.google.es.
### Ficheros log: apuntes.error.log y apuntes.access.log
```
<VirtualHost *:80>
    ServerName www.apuntes.daw.net 
    DocumentRoot /var/www/apuntes/

    <Directory />
        AllowOverride None
    </Directory>

    <Directory /var/www/apuntes/>
        AllowOverride All
    </Directory>

    Alias /error /var/www 
    ErrorDocument 404 /error/404.html

    ErrorLog ${APACHE_LOG_DIR}/apuntes.error.log
    LogLevel warn
    
    CustomLog ${APACHE_LOG_DIR}/apuntes.access.log combined
</VirtualHost>
```

### .htacces
```
Options Indexes FollowSymLinks MultiViews
Redirect www.apuntes.daw.net/buscador / www.google.es.
```
## www.daw.net:443
### Alojado en: /var/www/daw/seguro/
### Crear y utilizar el certificado daw.crt y la firma daw.key
### Fichero index: inicio.html.
### No permitir mostrar índice de ficheros.
### Pagina de error 404: /var/www/404.html
### Ficheros log: daw.ssl.error.log y daw.ssl.access.log
### Autenticación de usuarios "Basic” con fichero de usuarios permitidos en /var/www/acceso.basic.daw
```
<VirtualHost *:443>
    ServerName www.daw.net   
    DocumentRoot /var/www/daw/seguro
    SSLEngine On
    SSL CertificateFile /etc/ssl/certs/daw.crt
    SSL CertificateKeyFile /etc/ssl/private/daw.key
    
    <Directory /var/www/daw/seguro>
        DirectoryIndex inicio.html
        Options FollowSymLinks MultiViews 
        AllowOverride None
        Order allow,deny
        allow from all

        AuthAsUserFile "/var/www/acceeso.basic.daw/claves.txt"
        AuthName "Password"
        AuthType Basic
        Require valid-user
    </Directory>

    <Directory />
        Options FollowSymLinks
        AllowOverride None
    </Directory>

    Alias /error /var/www 
    ErrorDocument 404 /error/404.html

    ErrorLog ${APACHE_LOG_DIR}/daw.ssl.error.log
    LogLevel warn
    
    CustomLog ${APACHE_LOG_DIR}/daw.ssl.access.log combined
</VirtualHost>
```