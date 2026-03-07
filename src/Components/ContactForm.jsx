import { useState } from "react";

function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    //Validaciones
    if (!name.trim()) {
      setError("El nombre es obligatorio");
      return;
    }

    if (!email.trim()) {
      setError("El email es obligatorio");
      return;
    }

    if (!validateEmail(email)) {
      setError("El email no es válido");
      return;
    }

    // Si pasa validaciones, agregar contacto
    onAdd({ name: name.trim(), email: email.trim() });

    // Limpiar formulario
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      borderRadius: "5px"
    }}>
      <h3>Agregar Contacto</h3>

    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      style={{
        width: "100%",
        padding: "8px",
        fontSize: "14px",
        borderRadius: "4px",
        border: "1px solid #ddd"
      }} 
    />
  </div>

<div style={{ marginBottom: "15px" }}>
  <input
    type="email"
    placeholder="email@ejemplo.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      borderRadius: "4px",
      border: "1px solid #ddd"
    }}
  />
</div>

{error && (
  <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}> ⚠️ {error}
  </p>
)}

<button 
  type="submit" 
  style={{
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px"
  }}
>
  Agregar Contacto  
</button>
</form>
  );
}

export default ContactForm;