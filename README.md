# Super-app
Aplicación para buscar super-heroes y elegir 6 de ellos para sumarlos a tu equipo.


## Descripción
### Login
Para ingresar necesitas un usuario y contraseña. La solicitud se envía a una API de Alkemy.
El formulario está validado con formik, necesitas ingresar un e-mail y pass válidos enviar la solicitud a la API.

Las credenciales correctas para ingresar son:
Usuario: challenge@alkemy.org
Pass: react

### Buscador
Esta sección es donde tenemos un input para buscar los super-heroes que querramos agregar a nuestro equipo.
El input también está validado con formik. Al menos debemos escribir una letra para hacer la solicitud a la API.
La petición se realiza a la API de https://superheroapi.com/ 
Los resultados se obtienen diferenciados por su borde. Tienen borde verde los super-heroes buenos y los malos un borde rojo.
Cada caja de super-heroe viene con un boton para agregar a el equipo, si el equipo correspondiente está lleno nos aparece una alerta.
Cuando un heroe es agregado, automáticamente nos aparece el botón de "Quitar".

### Mi equipo
Aquí encontramos los heroes que hemos agregado y sus estadísticas.
Podemos ver un cuadro con las estadísticas totales del equipo y cual es la estadística que predomina.
En esta sección también podemos eliminar heroes del equipo.


### Finalidad
Esta app fue creada principalmente como un challenge para poder ingresar a Alkemy.
El proyecto fue aprobado y su login modificado para poder mostrarlo en GH-PAGES.
Puedes probar como funciona desde aquí: 
https://emij7.github.io/super-app/

