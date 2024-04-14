import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import Body from './components/Body';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Browse from './components/Browse';
import MovieSuggestion from './components/MovieSuggestion';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
      {
        path: '/suggest',
        element: <MovieSuggestion />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
