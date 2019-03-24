import React from 'react';

const MovieItem = (props) => {
  return (
    <div className="movie-item">
      <img src={props.movie.Poster} />
      <div className="movie-info">
        <span>{props.movie.Title}</span>
      </div>
    </div>
  );
};

export default MovieItem;
