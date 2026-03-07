import { useState } from "react";

function StateBasics() {
  console.log("🔴 TODO EL COMPONENTE SE EJECUTÓ");

  // Variable normal
  let normalCount = 0;
  console.log("🟡 normalCount se declaró:", normalCount);

  // Estado de React
  const [stateCount, setStateCount] = useState(0);
  console.log("🟢 stateCount actual:", stateCount);

  const incrementNormal = () => {
    normalCount = normalCount + 1;
    console.log('Normal count:', normalCount);
  };

  const incrementState = () => {
    console.log('ANTES:', stateCount);
    setStateCount(stateCount + 1);
    console.log('DESPUÉS:', stateCount);
  };

  console.log("🔵 A punto de retornar el JSX");

  const incrementThreeTimesCorrect = () => {
    setStateCount(prev => prev + 1);
    setStateCount(prev => prev + 1);
    setStateCount(prev => prev + 1);
    console.log('Despues de llamar 3 veces:', stateCount);
  }; 

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: '20px', border: '1px solid red' }}>
      <h2>Variable Normal</h2>
      <p>Count: {normalCount}</p>
      <button onClick={incrementNormal}>Incrementar Normal</button>
    </div>

    <div style={{ border: '1px solid green' }}>
      <h2>useState</h2>
      <p>Count: {stateCount}</p>
      <button onClick={incrementState}>Incrementar State</button>
      <button onClick={incrementThreeTimesCorrect}>+3 (correcto)</button>
    </div>
  </div>
  );
};

export default StateBasics;