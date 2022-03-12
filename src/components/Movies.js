import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Pages</h1>

        {movies.map((movie, index) => (
          <div key={index}>
            <h3>Title: {movie.title}</h3>
            <h3>Time: {movie.time}</h3>
            <h3>Genres:</h3>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
