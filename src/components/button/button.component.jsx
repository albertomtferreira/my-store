import './button.styles.scss';

const BUTTON_TYPE_CLASSES ={
  default:'',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) =>{
  return[
    <button
      key={'button_template'} 
      className=
        {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
    >
      {children}
    </button>
  ]
}

export default Button;