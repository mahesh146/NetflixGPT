import React from 'react';

import { useSelector } from 'react-redux';

import Video from './Video';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const highlight = movies[0];
  const { original_title, overview, id } = highlight;

  return <Video title={original_title} overview={overview} movieId={id} />;
};

export default MainContainer;
