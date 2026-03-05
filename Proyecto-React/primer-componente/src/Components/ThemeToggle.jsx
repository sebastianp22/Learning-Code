function ThemeToggle({ theme, onToggle }) {
  return (
    <button 
    onClick={onToggle} 
    style={{
      padding: "10px 20px", 
      marginBottom: "20px", 
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: theme === "light" ? "#333" : "#fff",
      color: theme === "light" ? "#fff" : "#333"}}
    >
      {theme === "light" ? "Modo oscuro" : "Modo claro"}
    </button>
  );
}

export default ThemeToggle;