import React from 'react';

import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <>
      <h1 className='text-md text-white'> {title} </h1>
      <div className='flex overflow-x-scroll'>
        <div className='my-4 flex'>
          {movies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
