import Button from '@mui/material/Button'
const Header = ({ onClick }) => {
    return (
        <header className='header'>
            <h1>Shopping List</h1>
            <Button variant='contained' size='large' onClick={onClick}>Add Items</Button>
        </header>
    )
}

export default Header
