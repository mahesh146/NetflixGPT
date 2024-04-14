import React from 'react';
import useTrailer from '../hooks/useTrailer';
import { useSelector } from 'react-redux';

const Video = ({ title, overview, movieId }) => {
  useTrailer(movieId);

  const trailerKey = useSelector((store) => store.movies.trailer?.key);

  return (
    <>
      <div className='pl-8 pt-[25%] w-screen aspect-video lg:absolute bg-gradient-to-r from-black hidden lg:block'>
        <h1 className='text-3xl text-white'> {title} </h1>
        <p className='mt-2 text-sm text-white w-2/4'> {overview} </p>
        <button className='mt-4 px-6 py-2 bg-white text-black rounded-sm hover:bg-opacity-80'>
          Play
        </button>
        <button className='mx-2 px-6 py-2 bg-white text-black rounded-sm opacity-50'>
          More Info
        </button>
      </div>
      <iframe
        className='w-screen aspect-video lg:static relative top-12 lg:top-0'
        src={
          'https://www.youtube.com/embed/' +
          trailerKey +
          '?si=iTwprPhF7pLyWbEw&amp;controls=0&autoplay=1&mute=1&loop=1'
        }
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </>
  );
};

export default Video;
