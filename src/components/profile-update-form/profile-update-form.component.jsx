import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../store/user/user.action.js';

import {ProfileUpdateContainer} from './profile-update-form.styles.jsx';

// (A) 👇🏻👇🏻 defining default form field values for a sign up form component
const defaultFormFields = {
  displayName: '',
  password: '',
  currentPassword:'',
  confirmPassword: '',
  phoneNumber:'',
};

const ProfileUpdateForm = () => {
//   const navigate = useNavigate()
//   const goToShopScreen = () => navigate('/shop')
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields);
  // (B) 👇🏻👇🏻 destructuring form fields from the formFields state variable
  const { displayName, password, confirmPassword, phoneNumber, currentPassword } = formFields;

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
      dispatch(signUpStart(password, displayName, phoneNumber))
      resetFormFields();
    //   goToShopScreen()
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
    <ProfileUpdateContainer key='ProfileUpdateContainer'>
      <h2>Profile Update</h2>
      <span>Personnal Details</span>
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
            label='Phone Number'
            type="text"
            onChange={handleChange}
            name='phoneNumber'
            value={phoneNumber}
          />
          <span>Security Details</span>
          <FormInput
            required
            label='Current Password'
            type="password"
            onChange={handleChange}
            name='currentPassword'
            value={currentPassword}
            autoComplete="current-password"
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
          <Button buttonType={BUTTON_TYPE_CLASSES.default} >Save</Button>
          {/* <Button buttonType={BUTTON_TYPE_CLASSES.default} type="submit">Save</Button> */}
        </form>
    </ProfileUpdateContainer>
  ]
}

export default ProfileUpdateForm