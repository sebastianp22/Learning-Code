function TaskStats({ tasks, theme }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const bgColor = theme === "light" ? "#f0f0f0" : "#444";
  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ 
      backgroundColor: bgColor,
      color: textColor,
      marginBottom: "20px", 
      borderRadius: "8px", 
      padding: "10px" }}>
      <h3>Estadísticas</h3>
      <p>Total: {total}</p>
      <p>Completadas: {completed}</p>
      <p>Pendientes: {pending}</p>
      <div style={{ 
        width: "100%",
        backgroundColor: "#ddd", 
        borderRadius: "10px",
        height: "20px",
        marginTop: "10px" }}>
          <div style={{
            width: `${percentage}%`,
            backgroundColor: "#4caf50",
            height: "100%",
            borderRadius: "10px",
            transition: "width 0.3s"
          }}></div>
      </div>
      <p style={{ textAlign: "center", marginTop: "5px" }}>{percentage}% Completado</p>
    </div>
  );
}

export default TaskStats;
      