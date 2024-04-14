import React, { useState, useRef } from 'react';

import { API_OPTIONS } from '../utils/constants';
import openai from '../utils/openai';
import MovieList from './MovieList';

const GPTSearch = () => {
  const search = useRef(null);
  const [suggestions, setSuggestions] = useState([]);

  const fetchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      API_OPTIONS
    );
    const json = await data.json();

    setSuggestions((prevState) => [...prevState, json.results[0]]);
  };
  const fetchResults = async (ev) => {
    ev.preventDefault();

    setSuggestions([]);

    const query = `Act as a movie recommendation system and suggest movies for the query ${search.current.value} only give me names of 5 movies. Strictly comma seperated like ex: Movie, Movie, Movie, Movie, Movie. I don't want in any other format like numbering`;

    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    const movies = response?.choices[0]?.message?.content.split(',');

    movies.map((movie) => fetchMovie(movie));
  };

  return (
    <div className='absolute m-auto p-12 top-32 left-0 right-0 lg:w-2/3 bg-black rounded-lg bg-opacity-80 text-center'>
      <form onSubmit={fetchResults}>
        <h1 className='mb-4 text-3xl text-white'>
          What you would like to watch today
        </h1>
        <input
          className='w-full lg:w-2/4 mr-2 p-2 border-slate-300 rounded-lg'
          type='text'
          placeholder='I can suggest you some better movies'
          ref={search}
        />
        <button
          className='mt-2 lg:mt-0 bg-red-600 p-2 rounded-lg hover:bg-red-500 text-white'
          type='submit'
        >
          Get Suggestions
        </button>
      </form>
      <div className='mt-8 text-white'>
        {suggestions.length > 0 && (
          <MovieList title='Suggestions' movies={suggestions} />
        )}
      </div>
    </div>
  );
};

export default GPTSearch;
