import { useState } from 'react';

function ListsBasics() {
  const [fruits, setFruits] = useState([
{id:1, name:'Manzana'},
{id:2, name:'Banana'},
{id:3, name:'Naranja'}
  ]);

  const addFruit = () => {
    const newFruit = prompt('Ingrese una nueva fruta:');
    if (newFruit) {
      const newId = Math.max(...fruits.map(f => f.id)) + 1; // Generar un nuevo ID único
      setFruits([...fruits, { id: newId, name: newFruit }]);
    }
  };

  const removeFruit = (idToRemove) => {
    setFruits(fruits.filter(fruit => fruit.id !== idToRemove));
  };

 return (
  <div style={{ padding: '20px', border: '2px solid orange' }}>
    <h2>Lista de Frutas (con ID único)</h2>
    <button onClick={addFruit}>Agregar Fruta</button>
    <ul>
   {fruits.map((fruit) => (
  <li key={fruit.id}>
    <input 
    type="text" 
    defaultValue={fruit.name} 
    style={{ marginRight: '10px' }} 
    />
    <button onClick={() => removeFruit(fruit.id)}>Eliminar</button>
  </li>
))}
    </ul>
  </div>
 );
}

export default ListsBasics;