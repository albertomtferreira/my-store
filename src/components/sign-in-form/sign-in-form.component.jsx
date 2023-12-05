import { useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

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
    <div key={'signin-form'} className='sign-in-container'>
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
          <div className='buttons-container'>
            <Button buttonType='default' type='submit'>Sign In</Button>
            <Button buttonType='google' type='button' onClick={signinWithGoogle}>Google Sign In</Button>
          </div>
        </form>
    </div>
  ]
}

export default SignInForm;