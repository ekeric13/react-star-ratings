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
    let highlightStar = null;
    let unHighlightStar = null;
    let changeRating = null;

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
      } else if ( this.props.isClicked ) {
        pathStyle = {
          fill: this.props.starSelectingColor
        };
      } else if ( this.props.isHighlighted ) {
        pathStyle = {
          fill: this.props.starHoverColor
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
          viewBox="0 0 25 25"
          className={ starClasses }   
          style={ starSvgStyle }                  
        >
          <path
            className="star"
            style={ pathStyle }
            d="M12.12.52l2.56,5.72a1,1,0,0,0,.76.55l6.23.67a.94.94,0,0,1,.53,1.63l-4.65,4.2a.93.93,0,0,0-.29.89l1.29,6.14a.93.93,0,0,1-1.38,1L11.73,18.2a.93.93,0,0,0-.94,0L5.36,21.32a.94.94,0,0,1-1.39-1l1.29-6.14A.93.93,0,0,0,5,13.29L.32,9.09A.94.94,0,0,1,.85,7.46l6.24-.67a.94.94,0,0,0,.75-.55L10.41.52A.94.94,0,0,1,12.12.52Z"
          />
        </svg>
      </div>
    );
  }
}

export default Star;
