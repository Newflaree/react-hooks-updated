# Notas Hooks

## Introducción al concepto de un reducer
### ¿Qué es un Reducer?
1. Es una función común y corriente. Por ejemplo, no puede ser asincrona.
2. Debe ser una función pura. Todo lo que la función realice, debe resolverse de manera interna.
3. Debe de retornar siempre un nuevo estado. Es obligarotio crear un nuevo estado y no mutar el anterior.
4. Usualmente sólo recibe dos argumentos.
  * El estado inicial (initialState) y la acción a ejecutar.


Es una función común y corriente
```
const todoReducer = () => {

}
```

Debe de ser una función pura
1. No debe tener efectos secundarios: Mi reducer debe ser capaz de resolver todo lo que se le pide sin necesidad de llamar otras funcionas.
2. No debe de realizar tareas asíncronas: Siempre debe trabajar como una función sincrona.
3. Debe de retornar siempre un estado nuevo: Nunca debe mutar el estado actual. En su lugar, debe generar un estado nuevo.
4. No debe de llamar localStorage o sessionStorage: No se debe llamar internamente dentro del reducer. Aunque se puede hacer ya que son tareas síncronas, pero rompe las reglas anteriores ya que el llamado a estas funciones son considerados efectos secundarios, pueden fallar y de esta manera no estamos regresando un nuevo estado, estamos regresando un error.
5. No debe de requerir más que una acción que puede o no tener argumentos.
```
cosnt initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

const todoReducer = ( state = initialState, action ) => {

  return state;
}
```

### ¿Para qué hacer todo esto?
La idea es tener controlado en un solo lugar todas las acciones que modifican el estado de mi aplicación y, de esta manera, podemos ver a nivel general todas las posibles modificaciones que nuestra aplicación tiene o puede realizar. La función reducer es donde están las acciones de la app. Si quiero saber qué acciones son posibles, simplemente iría a ver esos reducers y ahí debería estar la lógica de la manipulación de cada una de las posibles acciones que la app puede realizar.

### Funcionamiento
Vamos a ver cómo funciona el ciclo de vida de un reducer. Al iniciar la app tendremos un estado inicial, el día 0. El state es un arreglo que tiene 'todos', luego el componente se va a mostrar en pantalla y el state le va a pasar los 'todos' a la vista para que los muestre en pantalla. En caso de que quisieramos agregar un nuevo todo, tenemos que considerar que la página no habla directamente con el state, de ser así lo estaríamos mutando y ya sabemos que eso está prohibido. En cambio, la página o vista creará una action, está Action será 'Agregar un nuevo TODO' y es la que enviamos al reducer, quien tiene todas las acciones permitidas para crear un nuevo estado. Si la Action enviada no se encuentra en el reducer, simplemente se regresa el state actual. Finalmente, muestra el nuevo state en la vista. La idea es que la información fluya en una sola via y, sobre todo que lo haga de manera controlada

## Introducción al Context

