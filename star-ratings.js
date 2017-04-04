import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Star from './star';

class StarRatings extends Component {
  constructor() {
    super();

    this.highlightStar = this.highlightStar.bind(this);
    this.unHighlightStar = this.unHighlightStar.bind(this);
    this.state = {
      highlightValue: -Infinity,
    };
  }

  highlightStar(starRating) {
    this.setState({
      highlightValue: starRating,
    });
  }

  unHighlightStar() {
    this.setState({
      highlightValue: -Infinity,
    });
  }

  render() {
    const rating = this.props.rating || 0;
    const numOfStars = this.props.numOfStars;
    const numOfStarsArray = Array(numOfStars).fill().map((_, i) => i + 1 );

    const isInteger = Number.isInteger(rating);

    const highlightValue = this.state.highlightValue;
    let anyStarHighlighted = false;
    var fillId = `starGrad${Math.random().toFixed(15).slice(2)}`
    let starsArray = numOfStarsArray.map((level) => {
      let isStarred = false;
      let isHighlighted = false;
      let isIntegerStar = true;
      if (level <= rating) {
        isStarred = true;
      }
      if (level <= highlightValue) {
        isHighlighted = true;
        anyStarHighlighted = true;
      }
      if (!isInteger) {
        if (level > rating && level - 1 < rating) {
          isIntegerStar = false;
          isStarred = true;
        }
      }

      let firstStar = i === 0;
      let lastStar = numOfStarsArray.length - 1 === i;
      return (
        <Star
          fillId={fillId}
          key={level}
          rating={level}
          isStarred={isStarred}
          isSelectable={this.props.isSelectable}
          isAggregateRating={this.props.isAggregateRating}
          isInteger={isIntegerStar}
          isHighlighted={isHighlighted}
          anyStarHighlighted={anyStarHighlighted}
          highlightStar={this.highlightStar}
          unHighlightStar={this.unHighlightStar}
          changeRating={this.props.changeRating}
          starSize={this.props.starWidthAndHeight}
          starSpacing={this.props.starSpacing}
          starSelectingHoverColor={this.props.starSelectingHoverColor}
          starRatedColor={this.props.starRatedColor}
          starEmptyColor={this.props.starEmptyColor}
          firstStar={firstStar}
          lastStar={lastStar}
        />
      );
    });

    let offsetValue = '0%';
    if (!isInteger) {
      const firstTwoDecimals = rating.toFixed(2).split('.')[1].slice(0, 2);
      offsetValue = `${firstTwoDecimals}%`;
    }

    let stopColorFirstStyle = {
      stopColor: this.props.starRatedColor,
      stopOpacity: '1'
    }
    let stopColorFinalStyle = {
      stopColor: this.props.starEmptyColor,
      stopOpacity: '1'
    };

    let titleText;
    if ( this.props.isAggregateRating ) {
      let formattedRating = rating.toFixed(1);
      if ( rating === 0 ) {
        formattedRating = '0';
      } else if ( formattedRating.lastIndexOf(0) !== -1 ) {
        formattedRating = formattedRating.slice(0,1);
      }
      let starText = 'Stars';
      if ( formattedRating === '1' ) {
        starText = 'Star';
      }
      titleText = `${formattedRating} ${starText}`;
    }    
    return (
      <div 
        className="star-ratings" 
        title={ titleText }
        style={{
          position: 'relative',
          display: 'inline-flex',
        }}
      >
        <svg 
          className="star-grad"
          style={{
            position: 'absolute',
            zIndex: '0',
            width: '10px',
            height: '10px',
          }}
        >
          <defs>
            <linearGradient id={ fillId } x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="stop-color-first" style={stopColorFirstStyle} />
              <stop offset={ offsetValue } className="stop-color-first" style={stopColorFirstStyle} />
              <stop offset={ offsetValue } className="stop-color-final" style={stopColorFinalStyle} />
              <stop offset="100%" className="stop-color-final" style={stopColorFinalStyle} />
            </linearGradient>
          </defs>
         </svg>
        {starsArray}
      </div>
    );
  }
}

StarRatings.propTypes = {
  rating: PropTypes.number,
  numOfStars: PropTypes.number,
  changeRating: PropTypes.func,
  isSelectable: PropTypes.bool,
  isAggregateRating: PropTypes.bool,
  starSelectingHoverColor: PropTypes.string,
  starRatedColor: PropTypes.string,
  starEmptyColor: PropTypes.string,
  starWidthAndHeight: PropTypes.string,
  starSpacing: PropTypes.string,
};

StarRatings.defaultProps = {
  rating: 0,
  numOfStars: 5,
  changeRating: function(){},
  isSelectable: false,
  isAggregateRating: false,
  starSelectingHoverColor: 'rgb(255, 251, 0)',
  starRatedColor: 'rgb(109, 122, 130)',
  starEmptyColor: 'rgb(203, 211, 227)',
  starWidthAndHeight: '50px',
  starSpacing: '7px'

};

export default StarRatings;