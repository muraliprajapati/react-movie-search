import React, { Component } from 'react';
import axios from 'axios';
import MovieGrid from './MovieGrid';
import Header from './Header';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  handleSearch = (movieName) => {
    this.getMovieList(movieName)
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
    const OMDB_BASE_URL = `https://www.omdbapi.com/?apikey=d3f6c0ee`;
    const omdbSearchUrl = `${OMDB_BASE_URL}&s=${movieName}`;
    return axios.get(omdbSearchUrl);
  };

  render() {
    return (
      <div>
        <Header appName="React Movie Search" />
        <Search onSearch={this.handleSearch} />
        <MovieGrid movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
