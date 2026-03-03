//import StateBasics from "./Components/StateBasics";
//import { FormWithState, UserProfile } from "./Components/FormWithState";
import ListsBasics from "./Components/ListsBasics"; 
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm"; 



// Componente principal de la aplicación
function App() {
  return (
    <div>
       <ListsBasics />
        <TaskList />
    </div>
  );
}

export default App;

