import Item from './Item'

const Items = ({ items, onDelete, onImportantToggle }) => {
    return (
        <>
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={onDelete} onImportantToggle={onImportantToggle} />
          ))}  
        </>
    )
}

export default Items
