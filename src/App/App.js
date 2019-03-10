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
        console.log(data);
        this.setState({
          movies: data.results,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  getMovieList = (movieName) => {
    const API_KEY = 'a6f54267423cc7a32964f9e176005116';
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

    const searchUrl = `${BASE_URL}&query=${movieName}`;

    return axios.get(searchUrl);
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
