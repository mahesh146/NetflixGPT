import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/store/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.topRatedMovies);

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && fetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
