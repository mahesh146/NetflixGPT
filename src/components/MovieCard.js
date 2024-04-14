import React from 'react';

import { CDN } from '../utils/constants';

const MovieCard = ({ movie }) => {
  return (
    <div className='pr-4 w-52 bg-gradient-to-r from-black'>
      <img
        className='w-52 rounded-sm'
        src={CDN + movie.backdrop_path}
        alt={movie.original_title}
      />
    </div>
  );
};

export default MovieCard;
