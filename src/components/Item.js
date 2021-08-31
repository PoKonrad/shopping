const Item = ({ item, onDelete, onImportantToggle }) => {
    return (
        <div className='item'
        // eslint-disable-next-line react/jsx-no-duplicate-props
        className={`item ${item.important ? 'important' : ''}`}
        onDoubleClick={() => onImportantToggle(item.id)}>
            <h3>{item.text} <p style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(item.id)}>x</p></h3>
        <p>Quantity: {item.quantity}</p>
        </div>
    )
}

export default Item
