import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm"; 
import TaskFilter from "./TaskFilter";
import TaskStats from "./TaskStats";
import ThemeToggle from "./ThemeToggle";


function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudiar React", completed: false },
    { id: 2, text: "Hacer ejercicio", completed: false },
    { id: 3, text: "Leer documentación", completed: true },
  ]);

  const [filter, setFilter] = useState("all"); // "all", "active", "completed"
  const [theme, setTheme] = useState("light"); // "light" o "dark"

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId 
      ? { ...task, completed: !task.completed } 
      : task
    ));
  };

  const addTask = (text) => {
      const newId = Math.max(...tasks.map(t => t.id), 0) + 1; // Generar un nuevo ID único
      setTasks([...tasks, { id: newId, text: text, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const getFilteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter(t => t.completed === true);
    } 
    if (filter === "pending") {
      return tasks.filter(t => t.completed === false);
    }
    return tasks; // "all"
  };

    const filteredTasks = getFilteredTasks();

  const counts = {
    all: tasks.length,
    pending: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  };

  const bgColor = theme === "light" ? "#fff" : "#2c2c2c";
  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ 
      padding: "20px", 
      border: "2px solid purple",
      backgroundColor: bgColor,
      color: textColor,
      minHeight: "100vh",}}>
      <h2>Lista de Tareas</h2>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <TaskStats tasks={tasks} theme={theme} /> 

      <TaskForm onAdd={addTask} />

        <TaskFilter 
        currentFilter={filter} 
        onFilterChange={setFilter} 
        counts={counts} 
        />

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem 
          key={task.id}
          task={task}
          onToggle={toggleTask} 
          onDelete={deleteTask}
            />
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p style={{ fontStyle: "italic", color: "gray" }}>
          No hay tareas para mostrar.
        </p>
      )}
    </div>
  );
} 

export default TaskList;