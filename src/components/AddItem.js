import { useState } from "react"

const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [isImportant, setImportant] = useState(true)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('No item added!')
            return
        }

        onAdd({ text, quantity, isImportant})

        setText('')
        setQuantity('')
        setImportant(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input type='text' placeholder='Add Item' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Quantity</label>
                <input type='number' placeholder='Add Item' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Not Important?</label>
                <input type='checkbox' value={isImportant} onChange={(e) => setImportant(e.currentTarget.checked)} checked={isImportant} />
            </div>

            <input type='submit' value='Add' className='btn btn-block' />
        </form>
    )
}

export default AddItem
