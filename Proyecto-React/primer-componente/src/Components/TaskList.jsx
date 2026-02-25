import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudiar React", completed: false },
    { id: 2, text: "Hacer ejercicio", completed: false },
    { id: 3, text: "Leer documentación", completed: true },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const toggleTask = (taskId) => {
    setTasks((tasks.map(task =>
      task.id === taskId 
      ? { ...task, completed: !task.completed } 
      : task
    )));
  };

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      const newId = Math.max(...tasks.map(t => t.id)) + 1; // Generar un nuevo ID único
      setTasks([...tasks, { id: newId, text: newTaskText, completed: false }]);
      setNewTaskText("");
    }
  };

  return (
    <div style={{ padding: "20px", border: "2px solid purple" }}>
      <h2>Lista de Tareas</h2>

      <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Nueva tarea..."
        style={{ marginRight: "10px" }}
      />
      <button onClick={addTask}>Agregar Tarea</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ 
              marginLeft: "10px",
              textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;