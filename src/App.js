import './App.css';
import Header from './components/Header'
import Items from './components/Items'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        text: 'Milk',
        quantity: 5,
        important: true,
    },
    {
        id: 2,
        text: 'Flour',
        quantity: 5,
        important: true,
    },
    {
        id: 3,
        text: 'Bread',
        quantity: 5,
        important: true,
    },
])

  // Set Non-Important
  const setNonImportant = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, important: !item.important } : item))
  }

  // Delete Item
    const deleteItem = (id) => {
      setItems(items.filter((item) => item.id !== id))
    }


  return (
    <div className="container">
     <Header />
    {items.length > 0 ? <Items items={items} onDelete={deleteItem} onImportantToggle={setNonImportant} /> : 'The list is empty'}
    </div>
  );
}

export default App;
