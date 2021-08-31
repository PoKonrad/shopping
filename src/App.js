import './App.css';
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem';
import { useState } from 'react'

function App() {
  const [showAddItem, toggleShowAddItem] = useState(false)
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

  // Add Item
  const addItem = (item) => {
    const id = items.length + 1
    const newItem = { id, ...item }
    setItems([...items, newItem])
  }

  return (
    <div className="container">
     <Header onClick={() => toggleShowAddItem(!showAddItem)} />
     {showAddItem && <AddItem onAdd={addItem} />}
    {items.length > 0 ? <Items items={items} onDelete={deleteItem} onImportantToggle={setNonImportant} /> : 'The list is empty'}
    </div>
  );
}

export default App;
