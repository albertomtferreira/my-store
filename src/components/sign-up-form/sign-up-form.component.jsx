import { useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  return[
    <div key={'signup-form'} className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up wiht email and pass</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            required
            label='Display Name'
            type="text"
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
          <FormInput
            required
            label='Email'
            type="email"
            onChange={handleChange}
            name='email'
            value={email}
            autoComplete="email"
          />
          <FormInput
            required
            label='Password'
            type="password"
            onChange={handleChange}
            name='password'
            value={password}
            autoComplete="new-password"
          />
          <FormInput
            required
            label='Confirm Password'
            type="password"
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
            autoComplete="new-password"
          />
          <Button buttonType='default' type="submit">Sign Up</Button>
        </form>
      
    </div>
  ]
}

export default SignUpForm