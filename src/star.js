import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class Star extends React.Component {
  get starContainerStyle() {
    const {
      changeRating,
      starSpacing,
      isFirstStar,
      isLastStar,
      ignoreInlineStyles
    } = this.props;

    const starContainerStyle = {
      position: "relative",
      display: "inline-block",
      verticalAlign: "middle",
      paddingLeft: isFirstStar ? undefined : starSpacing,
      paddingRight: isLastStar ? undefined : starSpacing,
      cursor: changeRating ? "pointer" : undefined
    };
    return ignoreInlineStyles ? {} : starContainerStyle;
  }

  get starSvgStyle() {
    const {
      ignoreInlineStyles,
      isCurrentHoveredStar,
      starDimension
    } = this.props;
    const starSvgStyle = {
      width: starDimension,
      height: starDimension,
      transition: "transform .2s ease-in-out",
      transform: isCurrentHoveredStar ? "scale(1.1)" : undefined
    };

    return ignoreInlineStyles ? {} : starSvgStyle;
  }

  get pathStyle() {
    const {
      isStarred,
      isPartiallyFullStar,
      isHovered,
      hoverMode,
      starEmptyColor,
      starRatedColor,
      starHoverColor,
      gradientPathName,
      fillId,
      ignoreInlineStyles
    } = this.props;

    let fill;
    if (hoverMode) {
      if (isHovered) fill = starHoverColor;
      else fill = starEmptyColor;
    } else {
      if (isPartiallyFullStar) fill = `url('${gradientPathName}#${fillId}')`;
      else if (isStarred) fill = starRatedColor;
      else fill = starEmptyColor;
    }

    const pathStyle = {
      fill: fill,
      transition: "fill .2s ease-in-out"
    };

    return ignoreInlineStyles ? {} : pathStyle;
  }

  get starClasses() {
    const {
      isSelected,
      isPartiallyFullStar,
      isHovered,
      isCurrentHoveredStar,
      ignoreInlineStyles
    } = this.props;

    const starClasses = classNames({
      "widget-svg": true,
      "widget-selected": isSelected,
      "multi-widget-selected": isPartiallyFullStar,
      hovered: isHovered,
      "current-hovered": isCurrentHoveredStar
    });

    return ignoreInlineStyles ? {} : starClasses;
  }

  render() {
    const {
      changeRating,
      hoverOverStar,
      unHoverOverStar,
      svgIconViewBox,
      svgIconPath
    } = this.props;
    return (
      <div
        className="star-container"
        style={this.starContainerStyle}
        onMouseEnter={hoverOverStar}
        onMouseLeave={unHoverOverStar}
        onClick={changeRating}
      >
        <svg
          viewBox={svgIconViewBox}
          className={this.starClasses}
          style={this.starSvgStyle}
        >
          <path className="star" style={this.pathStyle} d={svgIconPath} />
        </svg>
      </div>
    );
  }
}

Star.propTypes = {
  fillId: PropTypes.string.isRequired,
  changeRating: PropTypes.func,
  hoverOverStar: PropTypes.func,
  unHoverOverStar: PropTypes.func,
  isStarred: PropTypes.bool.isRequired,
  isPartiallyFullStar: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  hoverMode: PropTypes.bool.isRequired,
  isCurrentHoveredStar: PropTypes.bool.isRequired,
  isFirstStar: PropTypes.bool.isRequired,
  isLastStar: PropTypes.bool.isRequired,
  starDimension: PropTypes.string.isRequired,
  starSpacing: PropTypes.string.isRequired,
  starHoverColor: PropTypes.string.isRequired,
  starRatedColor: PropTypes.string.isRequired,
  starEmptyColor: PropTypes.string.isRequired,
  gradientPathName: PropTypes.string.isRequired,
  ignoreInlineStyles: PropTypes.bool.isRequired,
  svgIconPath: PropTypes.string.isRequired,
  svgIconViewBox: PropTypes.string.isRequired
};

export default Star;
