# Aplicacion de prueba en Docker 

Ésta es una aplicación base para el desarrollo de los cursos de construccion de imagenes, y uso de Docker Compose

La aplicacion es un simple ejemplo escrito en Node.js la cual intenta establecer conexion con una base de datos de MongoDB, Indicando si el estado ha sido o no exitoso.

Los componentes para proceder con la creacion de las imagenes estan incluidos en:

- Dockerfile: Contiene el archivo de construccion de la imagen de la aplicacion
- Docker-compose: Contiene todo lo necesario para lanzar los contenedores en el entorno de contenedores

Antes de lanzar los contenedores usando docker-compose construya la imagen y nombrela como myapp
