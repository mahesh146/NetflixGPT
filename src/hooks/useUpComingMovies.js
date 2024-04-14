import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { API_OPTIONS } from '../utils/constants';
import { addUpComingMovies } from '../utils/store/movieSlice';

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.upComingMovies);

  const fetchUpComingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && fetchUpComingMovies();
  }, []);
};

export default useUpComingMovies;
