import {DefaultButton,GoogleSignInButton,InvertedButton} from './button.styles.jsx';

  export const BUTTON_TYPE_CLASSES ={
  default:'default',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default)=>(
    {
      [BUTTON_TYPE_CLASSES.default]: DefaultButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
  )

const Button = ({children, buttonType, ...otherProps}) =>{
  const CustomButton = getButton(buttonType);
  return[
    <CustomButton key='CustomButton' {...otherProps}>
      {children}
    </CustomButton>
  ]
}

export default Button;