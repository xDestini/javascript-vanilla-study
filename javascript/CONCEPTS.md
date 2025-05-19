# Conceptos

## Types of Data

8 tipos de datos

Datos primitivos: (number, boolean, undefined, null, bigint, string, symbol)
Datos no primitivos: (object, object-arreglo)

## Closure

Es una función que guarda referencias la estado adyacente, es decir al entorno léxico, Esto permite que una función acceda a las variables de una función exterior.
genera privacidad dentro de nuestra función.

## Scope

Alcance, Es el contexto actual de código el cual determina a que variables tiene acceso en cada parte del codigo

## Hoisting

Es un mecanismo de JavaScript que mueve las declaraciones de variables y funciones al principio de su ámbito de ejecución

## this

Hace referencia al contexto en el que se ejecuta un fragmento de código.

## Currying

Es una técnica que permite transformar una función que toma varios argumentos en una serie de funciones y estas funciones hijos heredan el contexto del padre.

## Función parcial

Cuando se quiere que un valor del currying sea default.

## Apply

Es similar a call con la única diferencia de que acepta variables por medio de un arreglo.

## Call

Es una función predefinida que permite llamar un método o función que pertenece a un objeto y asignarlo a otro objeto

## Bind

Se crea una nueva función apartir de una existente modificando el contexto this de la nueva función y proporcionando los argumentos  para invocarla.

## Funciones anónimas

Es una función sin un nombre.

## IIFE

Funciones inmediatamente invocadas

## example

(function () {
    return 'Hola mundo'
})

## Funciones flecha

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional

## Promise

Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo (error). Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el método then de una promesa. Si la promesa ya se ha cumplido o rechazado cuando se adjunta un manejador correspondiente, se llamará al manejador, por lo que no existe una condición de carrera entre la finalización de una operación asíncrona y la conexión de sus manejadores.

## Async Await
