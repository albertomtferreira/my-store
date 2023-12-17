import { useState } from 'react';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import {SignInContainer,ButtonsContainer} from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signinWithGoogle =async ()=>{
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential"){
        alert ('wrong credentials.')
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