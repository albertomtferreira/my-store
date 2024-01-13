import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../store/user/user.action.js';

import {SignUpContainer} from './sign-up-form.styles.jsx';

// (A) 👇🏻👇🏻 defining default form field values for a sign up form component
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber:'',
};

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields);
  // (B) 👇🏻👇🏻 destructuring form fields from the formFields state variable
  const { displayName, email, password, confirmPassword, phoneNumber } = formFields;

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
      // (C) 👇🏻👇🏻 dispatch the fields
      dispatch(signUpStart(email, password, displayName, phoneNumber))
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
    <SignUpContainer key='SignUpContainer'>
      <h2>Don't have an account?</h2>
      <span>Sign Up wiht email and pass</span>
        {/*  (D) 👇🏻👇🏻 defining the form fields for the sign up form */}
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
            label='Phone Number'
            type="text"
            onChange={handleChange}
            name='phoneNumber'
            value={phoneNumber}
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
          <Button buttonType={BUTTON_TYPE_CLASSES.default} type="submit">Sign Up</Button>
        </form>
    </SignUpContainer>
  ]
}

export default SignUpForm