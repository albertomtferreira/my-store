import { useState } from 'react';

// import FormInput from '../form-input/form-input.component';
// import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

// import './sign-up-form.styles.scss';

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
    <div key={'signup-form'}>
      <h1>Sign Up wiht email and pass</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='displayName'>Display Name</label>
          <input
            required
            type="text"
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
          <label htmlFor='email'>Email</label>
          <input
            required
            type="email"
            onChange={handleChange}
            name='email'
            value={email}
            autoComplete="email"
          />
          <label htmlFor='password'>Password</label>
          <input
            required
            type="password"
            onChange={handleChange}
            name='password'
            value={password}
            autoComplete="new-password"
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            required
            type="password"
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
            autoComplete="new-password"
          />
          <button type="submit">Sign Up</button>
        </form>
      
    </div>
  ]
}

export default SignUpForm