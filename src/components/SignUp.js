import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';

import { addUser } from '../utils/store/userSlice';

import backgroundImage from '../../public/assets/background-home.jpeg';
import { validateField, validateEmail, validatePassword } from '../utils/utils';

import Input from './Input';
import Button from './Button';

const SignUp = () => {
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onSubmitForm = (ev) => {
    ev.preventDefault();

    const fullnameError = validateField(fullname.current.value);
    const emailError = validateEmail(email.current.value);
    const passwordError = validatePassword(password.current.value);

    setError({ ...emailError, ...passwordError, ...fullnameError });

    if (Object.keys(error).length === 0) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullname.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorMessage = error.message;

              setError({
                apiErrorMessage: errorMessage,
              });
            });
        })
        .catch((error) => {
          const errorMessage = error.message;

          setError({
            apiErrorMessage: errorMessage,
          });
        });
    }
  };

  return (
    <>
      <img
        className='min-h-[100vh] opacity-50'
        src={backgroundImage}
        alt='Sign Up Page'
      />
      <div className='absolute m-auto p-12 top-28 left-0 right-0 lg:w-2/6 bg-black  text-white rounded-lg bg-opacity-80'>
        <h1 className='text-2xl'> Sign Up </h1>
        <form className='my-4' onSubmit={(ev) => onSubmitForm(ev)}>
          <Input
            ref={fullname}
            inputId='fullname'
            inputType='text'
            labelText='Full Name'
            placeholderText='Enter Full Name'
            errorMessage={error.required}
          />
          <Input
            ref={email}
            inputId='email'
            inputType='text'
            labelText='Email'
            placeholderText='Enter email address'
            errorMessage={error.email}
          />
          <Input
            ref={password}
            inputId='password'
            inputType='password'
            labelText='Password'
            placeholderText='Enter password'
            errorMessage={error.password}
          />
          <Button buttonType='submit' buttonText='Sign Up' className='w-full' />
        </form>

        <p className='my-2 text-sm text-red-400'>{error.apiErrorMessage}</p>

        <p className='my-2 text-sm text-slate-500'>
          Already a Member?
          <span> </span>
          <Link to='/login' className='text-sm text-white'>
            Log In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
