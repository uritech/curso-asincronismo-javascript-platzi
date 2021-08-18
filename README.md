# Curso de Asincronismo en JavaScript (Platzi)

El asincronismo es la acción que no ocurre al mismo tiempo.
El manejador de eventos de nuestro JavaScript es el EventLoop. Lo podemos comparar a una torre de control de un aeropuerto.


## Consumir una API

Se utilizará la API de rickadnmortyapi.com, esta contiene todos los datos de los personajes de esta serie animada. Realizaremos las siguientes tareas:

1.- Obtener la lista completa de cuántos personajes tiene esta serie.

2.- Obtener el nombre del primer personaje que nos regrese

3.- Obtener la dimensión a la que pertenece nuestro personaje.

Utilizaremos dentro de callbacks con las promesas y async/await.


### Callbacks

Es una función que al crearla le pasamos como parámetro una segunda función y de esta forma al hacer una petición asincrona, esta (segunda función) se ejecuta después de esta petición o llamado.


### Promesas

Utilizan el objeto 'promise' para ser ejecutadas. 
Su concepto es que algo va a suceder, ahora, en el futuro o tal vez nunca.

### Async y Await

Es preferible sobre las promesas, por que hará que nuestro código se comporte como "Sincrono"

### Ventajas y desventajas entre Callbacks, Promesas y Async/Await

Los callbacks son universales, corren en navegadores nuevos o viejos.
Una desventaja es que tenemos que anidar demasiado nuestras peticiones y llegamos al concepto de Callback-Hell.

Recordar que todo el código que escribimos es para humanos.

Las promesas son fácilmente enlazadas con then y un return. Más fácil de leer.
Nos permite una gran capacidad de trabajar con asincronismo.
Las desventajas es que no maneja excepciones si no que lo maneja en el último catch.

Async/await, podemos utilizar el tradicional try-catch.
Son más fáciles de leer y comprender.
La desventaja es que tenemos que esperar a que se ejecuten nuestras peticiones para poder hacer una siguiente petición.
Es indispensable utilizar un polyfill como 'Babel' para convertir este código para que pueda funcionar en todos nuestros navegadores ya sea nuevos o viejos.