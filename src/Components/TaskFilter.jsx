function TaskFilter({ currentFilter, onFilterChange, counts }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button 
        onClick={() => onFilterChange("all")} 
        style={{
          marginRight: "10px",
          fontWeight: currentFilter === "all" ? "bold" : "normal"
        }}
      >
        Todas ({counts.all})
      </button>
      <button 
        onClick={() => onFilterChange("pending")}
        style={{
          marginRight: "10px",
          fontWeight: currentFilter === "pending" ? "bold" : "normal"
        }}
      >
        Pendientes ({counts.pending})
      </button>
      <button 
        onClick={() => onFilterChange("completed")}
        style={{
          marginRight: "10px",
          fontWeight: currentFilter === "completed" ? "bold" : "normal"
        }}
      >
        Completadas ({counts.completed})
      </button>
    </div>
  );
}

export default TaskFilter;