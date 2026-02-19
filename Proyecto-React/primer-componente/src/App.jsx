import StateBasics from "./Components/StateBasics";
import { FormWithState, UserProfile } from "./Components/FormWithState";

// Componente principal de la aplicación
function App() {
  return (
    <div>
      <FormWithState />
      <StateBasics />
      <UserProfile />
    </div>
  );
}

export default App;

