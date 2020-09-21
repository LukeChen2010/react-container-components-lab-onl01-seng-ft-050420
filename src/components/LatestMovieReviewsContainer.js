import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(URL)
<<<<<<< HEAD
      .then(response => 
        response.json())
=======
      .then(res => 
        res.json())
>>>>>>> 596bf07f0bd2147ce0ee049f679911a857f7ea3a
      .then(response => 
        this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default LatestMovieReviewsContainer;