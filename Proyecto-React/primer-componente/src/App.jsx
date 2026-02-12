// Mi primer componente en React
function Saludo({ nombre }) {
  return (
    <h2 style={{ color: 'green' }}>
      ¡Hola {nombre}, bienvenido a React!
      </h2>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <div style ={{ padding: '20px' }}>
      <h1>Mi primera app react</h1>
      <p>Hoy es 11 de febrero y estoy aprendiendo React</p>

      <Saludo nombre="Sebastian" />
      <Saludo nombre="Developer"/>
      <Saludo nombre="React Learner" />
      <Saludo nombre="Security + Frontend" />

      <p>Reutilicé el componente 3 veces</p>
    </div>
  );
}

export default App;