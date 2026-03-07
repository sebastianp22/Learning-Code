import { useState } from "react";

function FormWithState() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    console.log('event.target.value:', event.target.value);
    setName(event.target.value);   
  };

  return (
    <div style={{ padding: "20px", border: "2px solid blue" }}>
      <h2>Input Controlado</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Escribe tu nombre"
      />
      <p>Escribiste: {name}</p>
      <p>Longitud: {name.length} caracteres</p>
      <button onClick={() => setName('')}>Limpiar</button>
    </div>
  );
}

function UserProfile() {  
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const updateName = (event) => {
    setUser({
      ...user,
      name: event.target.value
    });
  };

  const updateEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value
    });
  };

  return (
    <div style={{ padding: "20px", border: "2px solid purple", marginTop: "20px" }}>
      <h2>Estado con Objeto</h2>
      <input
        placeholder="Nombre"
        value={user.name}
        onChange={updateName}
      />
      <input
        placeholder="Email"
        value={user.email}
        onChange={updateEmail}
        style={{ marginLeft: "10px" }}
      />
      <p>Usuario: {user.name} - {user.email}</p>
    </div>
  );
}
        export { FormWithState, UserProfile };