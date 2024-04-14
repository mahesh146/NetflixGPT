import React from 'react';

import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='mx-8 lg:-mt-60 mt-8 relative z-10'>
      <MovieList title='Trending' movies={movies.topRatedMovies} />
      <MovieList title='Now Playing' movies={movies.nowPlayingMovies} />
      <MovieList title='Upcoming' movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
