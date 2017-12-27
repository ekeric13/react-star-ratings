import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Star from './star';

class StarRatings extends React.Component {
  constructor() {
    super();

    this.highlightStar = this.highlightStar.bind(this);
    this.unHighlightStar = this.unHighlightStar.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.state = {
      highlightValue: -Infinity,
      clickValue: -Infinity,
    };
  }

  highlightStar(starRating) {
    this.setState({
      highlightValue: starRating,
    });
    if (this.state.clickValue !== starRating) {
      this.setState({
        clickValue: -Infinity,
      });
    }
  }

  unHighlightStar() {
    this.setState({
      highlightValue: -Infinity,
      clickValue: -Infinity,
    });
  }

  changeRating(rating) {
    this.setState({
      clickValue: rating,
    });
    this.props.changeRating(rating);
  }

  render() {
    const rating = this.props.rating || 0;
    const numOfStars = this.props.numOfStars;
    const numOfStarsArray = Array(numOfStars).fill().map((_, i) => i + 1 );

    const isInteger = Number.isInteger(rating);

    const clickValue = this.state.clickValue;
    const highlightValue = this.state.highlightValue;
    let anyStarHighlighted = false;
    var fillId = `starGrad${Math.random().toFixed(15).slice(2)}`
    let starsArray = numOfStarsArray.map((level, i) => {
      let isClicked = false;
      let isStarred = false;
      let isHighlighted = false;
      let isIntegerStar = true;
      let currentHighlightedStar = false;
      if (level <= rating) {
        isStarred = true;
        if (clickValue === highlightValue && clickValue !== -Infinity) {
          isClicked = true;
        }
      }
      if (level <= highlightValue) {
        isHighlighted = true;
        anyStarHighlighted = true;
        currentHighlightedStar = level === highlightValue;
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
          isClicked={isClicked}
          isStarred={isStarred}
          isSelectable={this.props.isSelectable}
          isAggregateRating={this.props.isAggregateRating}
          isInteger={isIntegerStar}
          isHighlighted={isHighlighted}
          anyStarHighlighted={anyStarHighlighted}
          highlightStar={this.highlightStar}
          unHighlightStar={this.unHighlightStar}
          changeRating={this.changeRating}
          starWidthAndHeight={this.props.starWidthAndHeight}
          starSpacing={this.props.starSpacing}
          starHoverColor={this.props.starHoverColor}
          starSelectingColor={this.props.starSelectingColor}
          starRatedColor={this.props.starRatedColor}
          starEmptyColor={this.props.starEmptyColor}
          gradientPathName={this.props.gradientPathName}
          ignoreInlineStyles={this.props.ignoreInlineStyles}
          firstStar={firstStar}
          lastStar={lastStar}
          currentHighlightedStar={currentHighlightedStar}
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
      // fix it at 2 decimal places and remove trailing 0s
      let formattedRating = parseFloat(rating.toFixed(2)).toString();
      if ( Number.isInteger(rating) ) {
        formattedRating = String(rating);
      }
      let starText = 'Stars';
      if ( formattedRating === '1' ) {
        starText = 'Star';
      }
      titleText = `${formattedRating} ${starText}`;
    }    
    
    var starRatingsStyle = {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'inline-block'
    };
    var starGradientStyle = {
      position: 'absolute',
      zIndex: '0',
      width: '10px',
      height: '10px',
    };
    if ( this.props.ignoreInlineStyles ) {
      starRatingsStyle = {};
      starGradientStyle = {};
      stopColorFirstStyle = {};
      stopColorFinalStyle = {};
    }
    
    return (
      <div 
        className="star-ratings" 
        title={ titleText }
        style={starRatingsStyle}
      >
        <svg 
          className="star-grad"
          style={starGradientStyle}
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
  starHoverColor: PropTypes.string,
  starSelectingColor: PropTypes.string,
  starRatedColor: PropTypes.string,
  starEmptyColor: PropTypes.string,
  starWidthAndHeight: PropTypes.string,
  starSpacing: PropTypes.string,
  gradientPathName: PropTypes.string,
  ignoreInlineStyles: PropTypes.bool,
};

StarRatings.defaultProps = {
  rating: 0,
  numOfStars: 5,
  changeRating: function(){},
  isSelectable: false,
  isAggregateRating: true,
  starHoverColor: '#fa8b00',
  starSelectingColor: '#ffb115',
  starRatedColor: '#ffb115',
  starEmptyColor: '#cccccc',
  starWidthAndHeight: '25px',
  starSpacing: '0',
  gradientPathName: '',
  ignoreInlineStyles: false
};

export default StarRatings;
