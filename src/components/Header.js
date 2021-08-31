import Button from './Button'
const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
