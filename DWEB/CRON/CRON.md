## Preguntas CRON
### ¿Qué es CRON?
Es un administrador de procesos en segundo plano, buscara en CRONTAB si existe alguna tarea que hacer y cuando hacerla para ejecutarla cuando se arranca el sistema.
### ¿Qué es CRONTAB?
Es un archivo de texto donde se apuntan las tareas que tiene que ejecutar el CRON donde se apunta la hora o frecuencia de ejecución y el script o comando a ejecutar
### ¿Qué hace cada línea de cron? 
#### 30 * * * * /home/prueba.sh 
Ejecuta el script prueba.sh cada minuto 30 de cada hora, basicamente cada hora
#### 30 20 * * * /home/prueba.sh 
Ejecuta el script prueba.sh a las 20:30 cada dia
#### 30 20 * * 1-5 /home/prueba.sh 
Ejecuta el script prueba.sh a las 20:30 de lunes a viernes
#### 30 20 * * 2,4 /home/prueba.sh
Ejecuta el script prueba.sh a las 20:30 los martes y los juevez
#### 30 20 10,20 * * /home/prueba.sh 
Ejecuta el script prueba.sh a las 20:30 los días 10 y 20 de cada mes
#### */15 * * * * /home/prueba.sh 
Ejecuta el script prueba.sh cada 15 minutos
#### @daily /home/prueba.sh 
Ejecuta el script prueba.sh una vez al dia
#### @mountly /etc/backup.sh 
No hace nada esta mal escrito
#### 30 20 * * Mon-Fri /etc/test.sh 
Ejecuta el script prueba.sh a las 20:30 de lunes a viernes
#### 1 0 1-7 * * [ "$(date '+%a')" = "Fri" ] && /etc/backup.sh
Ejecutara esa linea que no entiendo y el script backup.sh, cada 00:01 los dias del 1 al 7 de cada mes
### Script 1
Tenemos que crear un script que ponga un texto en otro documento y que cron lo haga cada 5 minutos
```
echo `date "+Hello $USER, today is %A, %B %dth, %Y and it's %H:%M:%S. I'm Iker."` >> pruebacron
```
y en crontab pondremos
```
*/5 * * * * scriptcron.sh >> pruebacron
```
para que lo haga cada 5 minutos y lo ponga en el otro documento y le damos permisos
### Script 2
Tenemos que crear una carpeta en /copias para guarar las copias y en crontab pondremos
```
*/15 * * * 2 tar -cf /copias/copia.tar.gz /home/ubuntu
```
para que lo haga cada 15 minutos los martes