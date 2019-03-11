import React, { Component } from 'react';
import axios from 'axios';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      movies: [],
    };
  }

  handleOnChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovieList(this.state.query)
      .then((res) => res.data)
      .then((data) => {
        console.log(data.Search);
        this.setState({
          movies: data.Search,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  getMovieList = (movieName) => {
    // const API_KEY = 'a6f54267423cc7a32964f9e176005116';
    // const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

    const OMDB_API_KEY = 'd3f6c0  ee';
    const OMDB_BASE_URL = `http://www.omdbapi.com/?apikey=d3f6c0ee`;

    // const searchUrl = `${BASE_URL}&query=${movieName}`;
    const omdbSearchUrl = `${OMDB_BASE_URL}&s=${movieName}`;
    return axios.get(omdbSearchUrl);
  };

  render() {
    return (
      <div>
        <header>React Movie Search</header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleOnChange}
            placeholder="Search"
          />
        </form>
        <div className="container">
          <MovieGrid movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
