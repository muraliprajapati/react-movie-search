import React from 'react';
import './MovieItem.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

const MovieItem = (props) => {
  const { movie } = props;
  // const imgUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;
  return (
    <div className="movie-item">
      <img src={movie.Poster} />
      <div className="movie-info">
        <span>{movie.Title}</span>
        {/* <span>
          {movie.vote_average} <span>⭐</span>
        </span> */}
      </div>
    </div>
  );
};

export default MovieItem;
