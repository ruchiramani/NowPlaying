import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router';
import {fetchMovie} from '../actions/index';
import MovieReviews from './movie_reviews';

class MovieShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount(){
    var orig = document.body.className
    document.body.className = 'second'
    this.props.fetchMovie(this.props.params.id)
  }


  render(){
    const {movie} = this.props;
    if (!movie) {
      return <div> Loading </div>;
    }
    return (
      <div className="jumbotron">
       <center>
          <h3> {movie.title} </h3>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}` } height="350" width="250"/>
          <p> Average Rating: {movie.vote_average} </p>
          <MovieReviews reviews={movie.reviews.results} />
        </center>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {movie: state.movies.movie}
}

export default connect(mapStateToProps, {fetchMovie})(MovieShow);
