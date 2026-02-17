# DÍA 3 — useState PROFUNDO

## BLOQUE 1: Evaluación Conceptual

### 1. ¿Qué problema técnico resuelve useState que una variable normal no puede resolver?

R: Modifica las variables normales dependiendo del estado de lo que se necesite.

### 2. ¿Qué retorna `useState('valor inicial')`? ¿Qué tipo de dato es cada elemento?

R: no sé que devuelve. Debiera ser un string cada elemento.


### 3. Si hago `const [count, setCount] = useState(0)` y luego `count = 5`, ¿qué pasa?

R: Debería hacer una cuenta desde 0 a 5 de 1 en 1.


### 4. ¿Cuándo se ejecuta el código dentro de un componente funcional?

Cuando se ejecuta el return

---

## BLOQUE 1: Observaciones del Experimento

### ¿Qué botón actualiza la UI?

R: Actualiza el botón de useState cada vez que se presiona, en cambio en la variable normal siempre vuelve a 0 a pesar de que en la consola si va cambiando.


### ¿Qué muestra la consola en cada caso?

R:en normal count siempre vuelve a iniciar desde 1, en cambio en useState siempre queda guardado y retoma desde el número que quedó anteriormente.


### ¿Por qué crees que pasa esto?

R: Creo que en una variable normal no usa ningún tipo de memoria y que en useState se utiliza una memoria que va guardando el estado, por lo que se va renderizando de otra manera.

