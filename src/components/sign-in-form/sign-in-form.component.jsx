import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {SignInContainer,ButtonsContainer} from './sign-in-form.styles.jsx';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action.js';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const navigate = useNavigate()
  const goToShopScreen = () => navigate('/shop')
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signinWithGoogle =async ()=>{
    dispatch(googleSignInStart())
    goToShopScreen();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields();
      goToShopScreen();
    } catch (error) {
      if (error.code === "auth/invalid-credential"){
        alert ('wrong credentials!')
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return[
    <SignInContainer key='SignInContainer'>
      <h2>Already have an account?</h2>
      <span>Sign In wiht email and pass</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            required
            label='Email'
            type='email'
            onChange={handleChange}
            name='email'
            value={email}
            autoComplete='email'
          />
          <FormInput
            required
            label='Password'
            type='password'
            onChange={handleChange}
            name='password'
            value={password}
            autoComplete='new-password'
          />
          <ButtonsContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.default} type='submit'>Sign In</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signinWithGoogle}>Google Sign In</Button>
          </ButtonsContainer>
        </form>
    </SignInContainer>
  ]
}

export default SignInForm;