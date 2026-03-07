# DÍA 5 — PROPS Y COMUNICACIÓN ENTRE COMPONENTES

## BLOQUE 1: Dividir componentes

### ¿Qué son las props en React?
R: son propiedades

### ¿Qué hace onToggle en TaskItem?
R: cambia el check 

### ¿Por qué TaskForm recibe onAdd y NO directamente setTasks?
R: no sé

### Ventajas de dividir en componentes pequeños:
R: que se pueden reutilizar de manera mas eficiente




## EVALUACIÓN FINAL DÍA 5

### 1. ¿Las props van de padre a hijo o de hijo a padre?
R: van de padre a hijo 

### 2. ¿El hijo puede modificar las props que recibe?
R: NO, solamente son readonly.

### 3. Completa el código:

// Padre
function TaskList() {
  const [tasks, setTasks] = useState([...]);
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };
  
  return <TaskItem task={task} />;
}

// Hijo
function TaskItem({ task, ??? }) {
  return (
    <button onClick={() => ???(task.id)}>Eliminar</button>
  );
}




## BLOQUE 1: Estado compartido

### ¿Por qué TaskStats puede acceder a las tareas?
R: porque se agregó el componente en TaskList, por lo que al ejecutar el código ya se encuentra dentro.

### ¿Dónde vive el estado (tasks)?
R: creo que vive dentro del props que sería el padre, podría ser en TaskItem o en TaskList.


### ¿TaskForm y TaskStats son hermanos? ¿Pueden comunicarse directamente?
R: Deberían poder comunicarse en parelelo

### Dibuja el flujo (con flechas):
TaskList (padre)
├── TaskStats
└── TaskForm

TaskList => TaskStats
         => TaskForm  

¿Cómo se comparten datos entre TaskStats y TaskForm?

Debieran compartirse en movimientos laterales





# DÍA 6 — LIFTING STATE UP (ESTADO ELEVADO)

## BLOQUE 2: Lifting State Up en acción

### ¿Dónde vive el estado `theme`?
R: Vive en el Padre "TasksList"

### ¿Por qué NO pusimos el estado en ThemeToggle?
R: Porque ThemeToggle también está dentro del padre "TaskList"

### ThemeToggle y TaskStats necesitan el mismo dato (theme).
¿Cómo lo comparten?
R: Tendría que ThemeToggle enviar el dato al Padre TaskList y luego, TaskList se lo comparte a TaskStats, porque entre hermanos no pueden comunicarse.

### ¿Qué patrón aplicamos aquí? Explica con tus palabras qué es "Lifting State Up".

R: Aplicamos un patrón que deja claro que la comunicación entre hermanos no ocurre, siempre es padre a hijo o hijo a padre.



## EVALUACIÓN FINAL DÍA 6

### 1. Si dos componentes hermanos necesitan el mismo dato, ¿dónde debe vivir el estado?
R: Debería vivir en el padre, en este caso en TaskList, pero, También podría vivir en ThemeToggle, entonces, uno de los hijos tendría que llamar una function del padre (onAdd) y así, luego al renderizar, enviaría los cambios a los 2 hijos por igual.

### 2. ¿Los hermanos pueden comunicarse directamente en React?
R: no, no pueden, tienen que comunicarse con el padre a través de funciones para luego comunicarse con el hermano o con todos los hermanos dependiendo el caso.


### 3. Completa el flujo:

ComponentA (necesita dato X)
ComponentB (necesita dato X)

¿Dónde pones el estado de X?
R: En el padre.
¿Cómo reciben X los componentes A y B?
R: Los reciben a través del padre.
Si A quiere cambiar X, ¿qué hace?
R: tiene que hacerlo a través de una función que llame al padre


### 4. ¿Qué significa "single source of truth" (única fuente de verdad)?R: significa que es un elemento inmutable, como por ejemplo los datos de un props, contiene el valor que le otorga el padre por lo que no lo puede modificar si no tiene autorización del padre.



### COMPONENTES Y JSX

1. ¿Qué es un componente en React?
R: es una pieza, un elemento independiente y reutilizable.


2. ¿Cuál es la diferencia entre un componente y HTML estático?
R: que un componente es mutable, en cambio HTML estático es fijo


---

### ESTADO (useState)

3. ¿Qué retorna useState(0)?
R: retorna [0, function]

4. ¿Por qué este código NO funciona?
const [count, setCount] = useState(0);
count = 5;

R: porque está intentando modificar el useState y no se puede


5. ¿Cuándo usarías setCount(count + 1) vs setCount(prev => prev + 1)?
R: cuando en un caso necesite ir sumando de 1 en 1 y en otro caso cuando necesite ir aumentando 1 más.

---

### PROPS

6. ¿Las props van de padre a hijo o de hijo a padre?
R: de padre  a hijo siempre


7. ¿El hijo puede modificar las props que recibe?
R: puede llamando alguna function, pero no puede directamente, debe llamar la function, modificar y luego re-renderizar


8. Si un hijo necesita cambiar algo del padre, ¿qué patrón usa?
R: tendría que llamar una function especifica

---

### LISTAS Y KEYS

9. ¿Para qué sirve la prop key en map()?
R: para hacer único e independiente un valor


10. ¿Cuál es el problema de usar key={index} al eliminar elementos?
R: que no renderiza bien los cambios y sigue leyendo elementos de manera ordenada, lo que hace que no mantenga un id único e independiente de los valores.


---

### INPUTS CONTROLADOS

11. ¿Qué hace que un input sea "controlado"?
R: que el valor no lo maneja el dom interno si no que lo maneja el estado del componente


12. ¿Cuál es la diferencia entre value y defaultValue?
R: que un value puede ser cualquier valor que se otorgue y defaultvalue tecnicamente es un valor por defecto que se muestra

---

### ARRAYS Y OBJETOS EN ESTADO

13. ¿Por qué NO hacemos tasks.push(newTask)?
R: porque push modifica el array y eso viola es concepto de inmutabilidad del estado


14. ¿Cómo actualizas solo una propiedad de un objeto sin perder las demás?
R: habría que usar el operador spread (...) y ahí recién sobreescribir la propiedad que se dea modificar.


---

### LIFTING STATE UP

15. Si dos hermanos necesitan el mismo dato, ¿dónde vive el estado?
R: El estado vive en el padre. debe vivir en el ancestro común más cercano


16. ¿Qué significa "single source of truth"?
R: es la gestión de datos que centraliza la información en una sola ubicación o sistema de referencia.




## PARTE 2: Mini-proyecto Contact Manager

### ¿Qué conceptos del Día 1-6 usaste en este proyecto?
Lista TODOS los que identifiques:
R:
- useState
- TaskForm
- TaskItem
- FormWithState
- TaskFilter


### ¿Dónde vive el estado principal (contacts)?
R: en ContactItem

### ¿Por qué ContactForm no tiene el estado de contacts?
R: porque ContactForm solo se enfoca en la validación de seguridad


### ¿Qué patrón usamos en toggleFavorite?
R: lifting state up

