import { useState } from "react"
import { TextField, Button, Fade } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const AddItem = ({ onAdd, fade }) => {
    const [text, setText] = useState('')
    const [quantity, setQuantity] = useState(0)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('No item added!')
            return
        }

        onAdd({ text, quantity })

        setText('')
        setQuantity('')
    }

    return (
        <Fade in={fade}>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form'>
                <TextField className='input' label='Item' variant='standard' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form'>
                <TextField className='input' label='Value' type='number' variant='standard' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <Button variant='contained' type='Submit' className='add-button' endIcon={<AddIcon />}>Add</Button>
        </form>
        </Fade>
    )
}

export default AddItem
