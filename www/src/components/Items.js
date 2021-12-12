import Item from './Item'

const Items = ({ items, onDelete, onCheckedToggle }) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} onCheckedToggle={onCheckedToggle} />
            ))}
        </>
    )
}

export default Items
