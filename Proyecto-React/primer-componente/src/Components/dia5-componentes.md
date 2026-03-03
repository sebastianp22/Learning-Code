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