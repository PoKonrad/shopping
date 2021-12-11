import './App.css';
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem';
import { useState, useEffect } from 'react'
import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  const [showAddItem, toggleShowAddItem] = useState(false)
  const [items, setItems] = useState([])
  const a = items;
  // Get new items
  useEffect(() => {
    ; (async () => {
      const resp = await fetch('http://localhost:3500/list')
        .then(resp => resp.json())
      setItems(await resp)
    })();
    return () => {

    }
  }, [])

  const getItems = async () => {
    const resp = await fetch('http://localhost:3500/list')
      .then(resp => resp.json())
    setItems(await resp)
  }


  // Set Non-Important
  const setChecked = async (id) => {
    await fetch(`http://localhost:3500/list/${id}`, {
      method: 'PATCH'
    })
    setItems(items.map((item) => item.id === id ? { ...item, important: !item.important } : item))
    getItems()
  }

  // Delete Item
  const deleteItem = async (id) => {
    await fetch(`http://localhost:3500/list/${id}`, {
      method: 'DELETE'
    })
    getItems()
  }

  // Add Item
  const addItem = async (item) => {
    let body = (JSON.stringify(item))
    await fetch('http://localhost:3500/list', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    getItems()
  }

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          maxWidth: 500,
          margin: 1,
          marginTop: 4
        }
        }>
        <Header onClick={() => toggleShowAddItem(!showAddItem)} />
        {showAddItem && <AddItem onAdd={addItem} />}
        <Divider />
        {items.length > 0 ? <Items items={items} onDelete={deleteItem} onCheckedToggle={setChecked} /> : 'The list is empty'}
      </Box>
    </Container>
  );
}

export default App;
