# DÍA 4 — RENDERIZADO DE LISTAS (map + key)

## BLOQUE 1: map() básico + warning de key

### ¿Qué hace fruits.map((fruit) => <li>{fruit}</li>)?
R: Recorre el array y ejecuta los elementos uno a uno


### ¿Aparece un warning en la consola? Copia exactamente qué dice:
R: se ven 2 errores:



Each child in a list should have a unique "key" prop. Check the render method of `ListsBasics`. See https://react.dev/link/warning-keys for more information. Stack: 

    li unknown:0



y este:



Error de mapa de fuente: Error: JSON.parse: unexpected character at line 1 column 1 of the JSON data Stack in the worker:parseSourceMapInput@resource://devtools/client/shared/vendor/source-map/lib/util.js:163:15 _factory@resource://devtools/client/shared/vendor/source-map/lib/source-map-consumer.js:1069:22 SourceMapConsumer@resource://devtools/client/shared/vendor/source-map/lib/source-map-consumer.js:26:12 _fetch@resource://devtools/client/shared/source-map-loader/utils/fetchSourceMap.js:83:19 URL del recurso: http://localhost:5173/%3Canonymous%20code%3E URL del mapa de fuente: installHook.js.map


### Sin buscar en internet, ¿qué crees que significa "key"?
R: Debe significar "llave", algún concepto clave para poder abrir o acceder a un elemento, componente, array, o algo similar.

### ¿Qué es `index` en map((fruit, index) => ...)?
R: corresponde a indexar, ordenar por número.


### ¿Desapareció el warning al agregar key={index}?
R: si.




### ¿Qué hace [...fruits, newFruit]?
R: se encarga de agregar la nueva fruta que se escribe en la casilla.


### ¿Por qué no hacemos fruits.push(newFruit)?
R: no lo sé


### ¿Crees que usar index como key siempre es correcto, o podría causar problemas?
R: creo que puede causar problemas en algún contexto, pero debiera ser con condiciones muy específicas.




### Experimento: Eliminación con key={index}

Escribí en los inputs: [Manzana, Banana, Naranja]

Eliminé: [Banana]

¿Qué pasó con los textos de los inputs?
R: Solo se elimina el input que decido eliminar


¿Por qué crees que pasó esto?
R: Por que está todo programado pra que esto suceda





### Experimento: Eliminación con key={index}

Escribí en los inputs:
- Input 1: AAA
- Input 2: BBB
- Input 3: CCC

Eliminé: BBB (el del medio)

¿Qué textos quedaron en los inputs después de eliminar?
Input 1: [AAA]
Input 2: [BBB]

¿Es lo que esperabas? ¿Qué esperabas que quedara?
R: no es lo que esperaba, según yo, debiera quedar AAA y CCC. por lo que aquí debe estar el bug importante que hay que corregir





## BLOQUE 2: Objetos complejos + interacción

### ¿Qué hace tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task)?
R: recorre el array completo y pregunta si la tarea es igual a algo se ejecuta una acción y si es diferente, se ejecuta otra acción

Explica paso a paso qué hace el operador ternario aquí.


### ¿Por qué usamos checked={task.completed} en lugar de defaultChecked?
R: R: porque tiene que revisar si es que la tarea está en estado chekeado o no.


### ¿Qué significa task.completed ? 'line-through' : 'none'?
R: Significa que al presionar click en la casilla o muestra un visto bueno o no muestra nada.


### ¿Por qué el input de agregar tarea usa value={newTaskText} y no defaultValue?
R: Porque no va un valor por defecto, uno mismo tiene que escribir el input.


### ¿Qué hace newTaskText.trim()?
R: Eliminar los espacios en blanco de las respuestas


### ¿Por qué hacemos setNewTaskText('') después de agregar?
R: Porque necesita ingresar una nueva tarea despues de ingresar la última.