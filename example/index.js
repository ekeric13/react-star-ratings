import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatings from '../index';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.changeRating = this.changeRating.bind(this);
    this.state = { 
      rating: 0 
    };
  }

  changeRating(rating) {
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
            isSelectable={true}
            starRatedColor={'blue'}
            isAggregateRating={false}
            changeRating={this.changeRating}
            numOfStars={6}
          />
        </div>
        <div>
          <StarRatings
            rating={3.33}
            isSelectable={false}
            isAggregateRating={true}
            starWidthAndHeight={'40px'}
            starSpacing={'15px'}
          />
        </div>
      </div>
    )
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('content')
);