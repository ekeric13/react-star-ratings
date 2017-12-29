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
      var highlightStar = null;
      var unHighlightStar = null;
      var changeRating = null;

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
        starSvgStyle.transform = 'scale(1.1)';
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
            viewBox: this.props.svgIconViewBox,
            className: starClasses,
            style: starSvgStyle
          },
          _react2.default.createElement('path', {
            className: 'star',
            style: pathStyle,
            d: this.props.svgIconPath
          })
        )
      );
    }
  }]);

  return Star;
}(_react2.default.Component);

exports.default = Star;