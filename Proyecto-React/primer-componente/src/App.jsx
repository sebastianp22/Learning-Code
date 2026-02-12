// Mi primer componente en React
function Saludo() {
  return (
    <h2 style={{ color: 'green' }}>¡Hola, bienvenido a React!</h2>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <div style ={{ padding: '20 px' }}>
      <h1>Mi primera app react</h1>
      <p>Hoy es 11 de febrero y estoy aprendiendo React</p>

      <saludo />
      <saludo />
      <saludo />

      <p>Reutilicé el componente 3 veces</p>
    </div>
  );
}

export default App;