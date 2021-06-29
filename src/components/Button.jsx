import '../styles/button.scss'

function Button({ isOutlined = false, ...props }) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}

export default Button;