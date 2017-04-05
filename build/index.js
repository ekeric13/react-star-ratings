'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _starRatings = require('./star-ratings');

var _starRatings2 = _interopRequireDefault(_starRatings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _starRatings2.default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _star = require('./star');

var _star2 = _interopRequireDefault(_star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarRatings = function (_React$Component) {
  _inherits(StarRatings, _React$Component);

  function StarRatings() {
    _classCallCheck(this, StarRatings);

    var _this = _possibleConstructorReturn(this, (StarRatings.__proto__ || Object.getPrototypeOf(StarRatings)).call(this));

    _this.highlightStar = _this.highlightStar.bind(_this);
    _this.unHighlightStar = _this.unHighlightStar.bind(_this);
    _this.state = {
      highlightValue: -Infinity
    };
    return _this;
  }

  _createClass(StarRatings, [{
    key: 'highlightStar',
    value: function highlightStar(starRating) {
      this.setState({
        highlightValue: starRating
      });
    }
  }, {
    key: 'unHighlightStar',
    value: function unHighlightStar() {
      this.setState({
        highlightValue: -Infinity
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rating = this.props.rating || 0;
      var numOfStars = this.props.numOfStars;
      var numOfStarsArray = Array(numOfStars).fill().map(function (_, i) {
        return i + 1;
      });

      var isInteger = Number.isInteger(rating);

      var highlightValue = this.state.highlightValue;
      var anyStarHighlighted = false;
      var fillId = 'starGrad' + Math.random().toFixed(15).slice(2);
      var starsArray = numOfStarsArray.map(function (level, i) {
        var isStarred = false;
        var isHighlighted = false;
        var isIntegerStar = true;
        var currentHighlightedStar = false;
        if (level <= rating) {
          isStarred = true;
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

        var firstStar = i === 0;
        var lastStar = numOfStarsArray.length - 1 === i;
        return _react2.default.createElement(_star2.default, {
          fillId: fillId,
          key: level,
          rating: level,
          isStarred: isStarred,
          isSelectable: _this2.props.isSelectable,
          isAggregateRating: _this2.props.isAggregateRating,
          isInteger: isIntegerStar,
          isHighlighted: isHighlighted,
          anyStarHighlighted: anyStarHighlighted,
          highlightStar: _this2.highlightStar,
          unHighlightStar: _this2.unHighlightStar,
          changeRating: _this2.props.changeRating,
          starWidthAndHeight: _this2.props.starWidthAndHeight,
          starSpacing: _this2.props.starSpacing,
          starSelectingHoverColor: _this2.props.starSelectingHoverColor,
          starRatedColor: _this2.props.starRatedColor,
          starEmptyColor: _this2.props.starEmptyColor,
          gradientPathName: _this2.props.gradientPathName,
          ignoreInlineStyles: _this2.props.ignoreInlineStyles,
          firstStar: firstStar,
          lastStar: lastStar,
          currentHighlightedStar: currentHighlightedStar
        });
      });

      var offsetValue = '0%';
      if (!isInteger) {
        var firstTwoDecimals = rating.toFixed(2).split('.')[1].slice(0, 2);
        offsetValue = firstTwoDecimals + '%';
      }

      var stopColorFirstStyle = {
        stopColor: this.props.starRatedColor,
        stopOpacity: '1'
      };
      var stopColorFinalStyle = {
        stopColor: this.props.starEmptyColor,
        stopOpacity: '1'
      };

      var titleText = void 0;
      if (this.props.isAggregateRating) {
        var formattedRating = rating.toFixed(2);
        if (rating === 0) {
          formattedRating = '0';
        } else if (formattedRating.lastIndexOf(0) !== -1) {
          formattedRating = formattedRating.slice(0, 2);
        }
        var starText = 'Stars';
        if (formattedRating === '1') {
          starText = 'Star';
        }
        titleText = formattedRating + ' ' + starText;
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
        height: '10px'
      };
      if (this.props.ignoreInlineStyles) {
        starRatingsStyle = {};
        starGradientStyle = {};
        stopColorFirstStyle = {};
        stopColorFinalStyle = {};
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'star-ratings',
          title: titleText,
          style: starRatingsStyle
        },
        _react2.default.createElement(
          'svg',
          {
            className: 'star-grad',
            style: starGradientStyle
          },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'linearGradient',
              { id: fillId, x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
              _react2.default.createElement('stop', { offset: '0%', className: 'stop-color-first', style: stopColorFirstStyle }),
              _react2.default.createElement('stop', { offset: offsetValue, className: 'stop-color-first', style: stopColorFirstStyle }),
              _react2.default.createElement('stop', { offset: offsetValue, className: 'stop-color-final', style: stopColorFinalStyle }),
              _react2.default.createElement('stop', { offset: '100%', className: 'stop-color-final', style: stopColorFinalStyle })
            )
          )
        ),
        starsArray
      );
    }
  }]);

  return StarRatings;
}(_react2.default.Component);

StarRatings.propTypes = {
  rating: _react.PropTypes.number,
  numOfStars: _react.PropTypes.number,
  changeRating: _react.PropTypes.func,
  isSelectable: _react.PropTypes.bool,
  isAggregateRating: _react.PropTypes.bool,
  starSelectingHoverColor: _react.PropTypes.string,
  starRatedColor: _react.PropTypes.string,
  starEmptyColor: _react.PropTypes.string,
  starWidthAndHeight: _react.PropTypes.string,
  starSpacing: _react.PropTypes.string,
  gradientPathName: _react.PropTypes.string,
  ignoreInlineStyles: _react.PropTypes.bool
};

StarRatings.defaultProps = {
  rating: 0,
  numOfStars: 5,
  changeRating: function changeRating() {},
  isSelectable: false,
  isAggregateRating: true,
  starSelectingHoverColor: 'rgb(230, 67, 47)',
  starRatedColor: 'rgb(109, 122, 130)',
  starEmptyColor: 'rgb(203, 211, 227)',
  starWidthAndHeight: '50px',
  starSpacing: '7px',
  gradientPathName: '',
  ignoreInlineStyles: false
};

exports.default = StarRatings;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    _classCallCheck(this, Star);

    var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this));

    _this.highlightStar = _this.highlightStar.bind(_this);
    _this.unHighlightStar = _this.unHighlightStar.bind(_this);
    _this.changeRating = _this.changeRating.bind(_this);
    return _this;
  }

  _createClass(Star, [{
    key: 'highlightStar',
    value: function highlightStar() {
      this.props.highlightStar(this.props.rating);
    }
  }, {
    key: 'unHighlightStar',
    value: function unHighlightStar() {
      this.props.unHighlightStar();
    }
  }, {
    key: 'changeRating',
    value: function changeRating() {
      this.props.changeRating(this.props.rating);
    }
  }, {
    key: 'render',
    value: function render() {
      var starClasses = void 0;
      var highlightStar = false;
      var unHighlightStar = false;
      var changeRating = false;

      var starContainerStyle = {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'top'
      };

      if (this.props.isSelectable) {
        starContainerStyle.cursor = 'pointer';
      }

      if (this.props.firstStar) {
        starContainerStyle.paddingRight = this.props.starSpacing;
      } else if (this.props.lastStar) {
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
      if (this.props.isSelectable) {
        highlightStar = this.highlightStar;
        unHighlightStar = this.unHighlightStar;
        changeRating = this.changeRating;
        starClasses = (0, _classnames2.default)({
          'star-svg': true,
          'star-level': this.props.isStarred && !this.props.anyStarHighlighted,
          'star-selected': this.props.isHighlighted,
          'star-hovered-over': this.props.currentHighlightedStar
        });

        if (this.props.isStarred && !this.props.anyStarHighlighted) {
          pathStyle = {
            fill: this.props.starRatedColor
          };
        } else if (this.props.isHighlighted) {
          pathStyle = {
            fill: this.props.starSelectingHoverColor
          };
        }
      } else {
        if (this.props.isAggregateRating) {
          starClasses = (0, _classnames2.default)({
            'star-svg': true,
            'star-level': this.props.isStarred,
            'star-multi-level': !this.props.isInteger
          });

          if (this.props.isStarred && !this.props.isInteger) {
            pathStyle = {
              'fill': 'url(\'' + this.props.gradientPathName + '#' + this.props.fillId + '\')'
            };
          } else if (this.props.isStarred) {
            pathStyle = {
              'fill': this.props.starRatedColor
            };
          }
        } else {
          starClasses = (0, _classnames2.default)({
            'star-svg': true,
            'star-level': this.props.isStarred
          });

          if (this.props.isStarred) {
            pathStyle = {
              'fill': this.props.starRatedColor
            };
          }
        }
      }

      if (this.props.currentHighlightedStar) {
        starSvgStyle.transform = 'scale(1.2)';
      }

      pathStyle.transition = 'fill .2s ease-in-out';

      if (this.props.ignoreInlineStyles) {
        starContainerStyle = {};
        starSvgStyle = {};
        pathStyle = {};
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'star-container',
          style: starContainerStyle,
          onMouseEnter: highlightStar,
          onMouseLeave: unHighlightStar,
          onClick: changeRating
        },
        _react2.default.createElement(
          'svg',
          {
            viewBox: '0 0 51 48',
            className: starClasses,
            style: starSvgStyle
          },
          _react2.default.createElement('path', {
            className: 'star',
            style: pathStyle,
            d: 'm25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
          })
        )
      );
    }
  }]);

  return Star;
}(_react2.default.Component);

exports.default = Star;
