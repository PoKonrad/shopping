import PropTypes from 'prop-types'
export const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick} className='btn' style={{ backgroundColor: color}}>{text}</button>

}

Button.defaultProps = {
    color: 'green'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
