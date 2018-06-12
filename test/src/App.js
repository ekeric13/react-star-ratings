import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import StarRatings from 'react-star-ratings';
import StarRatings from './star-ratings';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: 0
    };
  }

  changeRating(rating, name) {
    this.setState({
      rating: rating
    })
  }

  render() {
    return (
      <div className="page-wrap">
        <div>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="blue"
            changeRating={this.changeRating}
            numberOfStars={6}
            name="rating"
          />
        </div>
        <div>
          <StarRatings
            rating={2.403}
            starDimension="30px"
            starSpacing="15px"
          />
        </div>
      </div>
    )
  }

};

export default App;