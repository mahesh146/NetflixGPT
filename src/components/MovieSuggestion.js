import React from 'react';

import backgroundImage from '../../public/assets/background-home.jpeg';

import GPTSearch from './GPTSearch';

const MovieSuggestion = () => {
  return (
    <>
      <img
        className='min-h-[100vh] opacity-50'
        src={backgroundImage}
        alt='Login Page'
      />
      <GPTSearch />
    </>
  );
};

export default MovieSuggestion;
