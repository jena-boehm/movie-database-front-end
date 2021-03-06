import './App.css';
import React, { Component } from 'react';
import MoviesRender from './MoviesRender.js'
import { Link } from 'react-router-dom';
import { fetchMovies } from './APIFunctions.js';

export default class App extends Component {
state = {
  movies: []
}

  componentDidMount = async () => {
    const movies = await fetchMovies();

    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
      <div className="body">
        <header className="title">Full Movie List</header>
        <div className="movie-grid">
          {
            movies.map(movie => 
              <Link to={`/movie/${movie.id}`} className="movie-link">
                <MoviesRender
                  name={movie.name}
                  year={movie.year}
                  oscars={movie.oscars}
                  genre={movie.genre}
                  ownerId={movie.owner_id} />
                </Link>
              )
          }
        </div>
      </div>
      </div>
    )
  }
}

