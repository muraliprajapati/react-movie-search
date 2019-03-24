import React from 'react';
import MovieItem from './MovieItem';

const MovieGrid = (props) => {
  // This function iterates over the movies array and
  // generates MovieItem component.
  const getMovieItems = () => {
    const movieItems = props.movies.map((aMovie) => {
      return <MovieItem movie={aMovie} />;
    });

    return movieItems;
  };
  return <div className="movie-grid">{getMovieItems()}</div>;
};

export default MovieGrid;
