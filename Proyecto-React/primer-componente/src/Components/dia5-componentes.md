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
