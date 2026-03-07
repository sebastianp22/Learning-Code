function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ 
        marginLeft: "10px",
        textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: "10px" }}>
          🗑️
      </button>
    </li>
  );
}

export default TaskItem;