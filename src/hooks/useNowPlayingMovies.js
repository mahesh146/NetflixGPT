import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/store/movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
