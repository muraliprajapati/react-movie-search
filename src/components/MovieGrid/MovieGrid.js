import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MovieGrid.css';

const MovieGrid = (props) => {
  const { movies } = props;
  return (
    <div className="movie-grid">
      {movies.map((aMovie) => (
        <MovieItem key={aMovie.id} movie={aMovie} />
      ))}
    </div>
  );
};

export default MovieGrid;
