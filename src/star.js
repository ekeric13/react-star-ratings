import React, { Component } from 'react';
import classNames from 'classnames';

class Star extends React.Component {
  constructor() {
    super();
    this.highlightStar = this.highlightStar.bind(this);
    this.unHighlightStar = this.unHighlightStar.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  highlightStar() {
    this.props.highlightStar(this.props.rating);
  }

  unHighlightStar(){
    this.props.unHighlightStar();
  }

  changeRating() {
    this.props.changeRating(this.props.rating);
  }

  render() {
    let starClasses;
    let highlightStar = false;
    let unHighlightStar = false;
    let changeRating = false;

    var starContainerStyle = {
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
    };
    
    if ( this.props.isSelectable ) {
      starContainerStyle.cursor = 'pointer';
    }

    if ( this.props.firstStar ) {
      starContainerStyle.paddingRight = this.props.starSpacing;
    } else if ( this.props.lastStar ) {
      starContainerStyle.paddingLeft = this.props.starSpacing;
    } else {
      starContainerStyle.paddingLeft = this.props.starSpacing;
      starContainerStyle.paddingRight = this.props.starSpacing;
    }

    var starSvgStyle = {
      width: this.props.starWidthAndHeight,
      height: this.props.starWidthAndHeight,
      transition: 'transform .2s ease-in-out'
    };

    var pathStyle = {
      fill: this.props.starEmptyColor
    };
    if ( this.props.isSelectable ) {
      highlightStar = this.highlightStar;
      unHighlightStar = this.unHighlightStar;
      changeRating = this.changeRating;
      starClasses = classNames({
        'star-svg': true,
        'star-level': this.props.isStarred && !this.props.anyStarHighlighted,
        'star-selected': this.props.isHighlighted,
        'star-hovered-over': this.props.currentHighlightedStar
      });

      if ( this.props.isStarred && !this.props.anyStarHighlighted ) {
        pathStyle = {
          fill: this.props.starRatedColor
        };
      } else if ( this.props.isHighlighted ) {
        pathStyle = {
          fill: this.props.starSelectingHoverColor
        };        
      }

    } else {
      if (this.props.isAggregateRating) {
        starClasses = classNames({
          'star-svg': true,
          'star-level': this.props.isStarred,
          'star-multi-level': !this.props.isInteger,
        });

        if ( this.props.isStarred && !this.props.isInteger ) {
          pathStyle = {
            'fill':`url('${this.props.gradientPathName}#${this.props.fillId}')`
          };
        } else if ( this.props.isStarred ) {
          pathStyle = {
            'fill': this.props.starRatedColor
          };
        }

      } else {
        starClasses = classNames({
          'star-svg': true,
          'star-level': this.props.isStarred,
        });

        if ( this.props.isStarred ) {
          pathStyle = {
            'fill': this.props.starRatedColor
          };
        }

      }
    }
    
    if ( this.props.currentHighlightedStar ) {
      starSvgStyle.transform = 'scale(1.1)';
    }
    
    pathStyle.transition = 'fill .2s ease-in-out';
    
    if ( this.props.ignoreInlineStyles ) {
      starContainerStyle = {};
      starSvgStyle = {};
      pathStyle = {};
    }

    return (
      <div 
        className="star-container"
        style={ starContainerStyle }
        onMouseEnter={ highlightStar }
        onMouseLeave={ unHighlightStar }
        onClick={ changeRating }
      >
        <svg
          viewBox="0 0 51 48"
          className={ starClasses }   
          style={ starSvgStyle }                  
        >
          <path
            className="star"
            style={ pathStyle }
            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          />
        </svg>
      </div>
    );
  }
}

export default Star;