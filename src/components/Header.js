import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/store/userSlice';

import logo from '../../public/assets/logo.png';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className='lg:px-12 py-2 absolute w-screen z-10 flex items-center justify-between bg-black text-slate-50 bg-transparent'>
      <img
        className='lg:px-8 lg:py-2 lg:w-56 px-4 w-40'
        src={logo}
        alt='Netflix'
      />
      <ul className='mr-2 flex justify-between'>
        {user && (
          <>
            <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
              <Link to='/browse'> Home </Link>
            </li>
            <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
              <Link to='/suggest'> Movie Suggestions </Link>
            </li>
            <button
              className='bg-red-600 px-2 rounded-lg hover:bg-red-500'
              onClick={onClickSignOut}
              type='button'
            >
              Sign Out
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
