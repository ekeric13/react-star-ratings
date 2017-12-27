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
            changeRating={this.changeRating}
            isSelectable
          />
        </div>
        <div>
          <StarRatings
            rating={3.33}
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