import Button from './Button'
const Header = ({title, onClick}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add Items' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Shopping List',
}

export default Header
