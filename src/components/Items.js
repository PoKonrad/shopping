const Items = ({ items }) => {
    return (
        <>
          {items.map((item) => (
            <h3 key={item.id}>{item.text}</h3>
          ))}  
        </>
    )
}

export default Items
