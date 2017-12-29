'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
          currentHighlightedStar: currentHighlightedStar,
          svgIconPath: _this2.props.svgIconPath,
          svgIconViewBox: _this2.props.svgIconViewBox
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
        // fix it at 2 decimal places and remove trailing 0s
        var formattedRating = parseFloat(rating.toFixed(2)).toString();
        if (Number.isInteger(rating)) {
          formattedRating = String(rating);
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
  rating: _propTypes2.default.number,
  numOfStars: _propTypes2.default.number,
  changeRating: _propTypes2.default.func,
  isSelectable: _propTypes2.default.bool,
  isAggregateRating: _propTypes2.default.bool,
  starSelectingHoverColor: _propTypes2.default.string,
  starRatedColor: _propTypes2.default.string,
  starEmptyColor: _propTypes2.default.string,
  starWidthAndHeight: _propTypes2.default.string,
  starSpacing: _propTypes2.default.string,
  gradientPathName: _propTypes2.default.string,
  ignoreInlineStyles: _propTypes2.default.bool,
  svgIconPath: _propTypes2.default.string,
  svgIconViewBox: _propTypes2.default.string
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
  ignoreInlineStyles: false,
  svgIconPath: 'm25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z',
  svgIconViewBox: '0 0 51 48'
};

exports.default = StarRatings;