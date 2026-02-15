// Mi primer componente en React
function Saludo({ nombre }) {
  return (
    <h2 style={{ color: "green" }}>¡Hola {nombre}, bienvenido a React!</h2>
  );
}

// Componente principal de la aplicación
function App() {
  const usuarioPrincipal = {
    nombre: "Sebastian",
    rol: "Admin",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mi primera app react</h1>
      <p>Hoy es 15 de febrero y estoy aprendiendo React</p>

      <Saludo nombre={usuarioPrincipal.nombre} rol={usuarioPrincipal.rol} />

      <Saludo nombre="Developer" rol="User" />
      <Saludo nombre="React Learner" rol="Student" />
      <Saludo nombre="Security + Frontend" rol="Builder" />
    </div>
  );
}

export default App;
