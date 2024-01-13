import {DefaultButton,GoogleSignInButton,InvertedButton, ButtonSpinner} from './button.styles.jsx';

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

const Button = ({children, buttonType, isLoading, ...otherProps}) =>{
  const CustomButton = getButton(buttonType);
  return[
    <CustomButton 
      key='CustomButton' 
      disabled={isLoading}
      {...otherProps}>
      {isLoading ? <ButtonSpinner/> : children}
    </CustomButton>
  ]
}

export default Button;