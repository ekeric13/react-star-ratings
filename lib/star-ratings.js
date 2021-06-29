"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _star = _interopRequireDefault(require("./star"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StarRatings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StarRatings, _React$Component);

  function StarRatings() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StarRatings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StarRatings)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      highestStarHovered: -Infinity
    });

    _defineProperty(_assertThisInitialized(_this), "hoverOverStar", function (starRating) {
      return function () {
        _this.setState({
          highestStarHovered: starRating
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "unHoverOverStar", function () {
      _this.setState({
        highestStarHovered: -Infinity
      });
    });

    return _this;
  }

  _createClass(StarRatings, [{
    key: "stopColorStyle",
    value: function stopColorStyle(color) {
      var stopColorStyle = {
        stopColor: color,
        stopOpacity: "1"
      };
      return this.props.ignoreInlineStyles ? {} : stopColorStyle;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          starRatedColor = _this$props.starRatedColor,
          starEmptyColor = _this$props.starEmptyColor;
      return _react.default.createElement("div", {
        className: "star-ratings",
        title: this.titleText,
        style: this.starRatingsStyle
      }, _react.default.createElement("svg", {
        className: "star-grad",
        style: this.starGradientStyle
      }, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
        id: this.fillId,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, _react.default.createElement("stop", {
        offset: "0%",
        className: "stop-color-first",
        style: this.stopColorStyle(starRatedColor)
      }), _react.default.createElement("stop", {
        offset: this.offsetValue,
        className: "stop-color-first",
        style: this.stopColorStyle(starRatedColor)
      }), _react.default.createElement("stop", {
        offset: this.offsetValue,
        className: "stop-color-final",
        style: this.stopColorStyle(starEmptyColor)
      }), _react.default.createElement("stop", {
        offset: "100%",
        className: "stop-color-final",
        style: this.stopColorStyle(starEmptyColor)
      })))), this.renderStars);
    }
  }, {
    key: "starRatingsStyle",
    get: function get() {
      var starRatingsStyle = {
        position: "relative",
        boxSizing: "border-box",
        display: "inline-block"
      };
      return this.props.ignoreInlineStyles ? {} : starRatingsStyle;
    }
  }, {
    key: "starGradientStyle",
    get: function get() {
      var starGradientStyle = {
        position: "absolute",
        zIndex: "0",
        width: "0",
        height: "0",
        visibility: "hidden"
      };
      return this.props.ignoreInlineStyles ? {} : starGradientStyle;
    }
  }, {
    key: "titleText",
    get: function get() {
      var _this$props2 = this.props,
          typeOfWidget = _this$props2.typeOfWidget,
          selectedRating = _this$props2.rating;
      var hoveredRating = this.state.highestStarHovered;
      var currentRating = hoveredRating > 0 ? hoveredRating : selectedRating; // fix it at 2 decimal places and remove trailing 0s

      var fixedRating = currentRating ? currentRating.toFixed(2) : 0;
      var formattedRating = parseFloat(fixedRating).toString();

      if (Number.isInteger(currentRating)) {
        formattedRating = String(currentRating);
      }

      var starText = "".concat(typeOfWidget, "s");

      if (formattedRating === "1") {
        starText = typeOfWidget;
      }

      return "".concat(formattedRating, " ").concat(starText);
    }
  }, {
    key: "offsetValue",
    get: function get() {
      var rating = this.props.rating;
      var ratingIsInteger = Number.isInteger(rating);
      var offsetValue = "0%";

      if (!ratingIsInteger) {
        var guardedRating = rating ? rating : 0; // This is utter and complete nonsense because Javascript doesn't know how to handle factorials or
        // really just numbers in general. A simple solution could be a N % 1 but that'll give us a remainder
        // in the trillionth place. There's also N - Math.floor(N), guess what, same result.

        var firstTwoDecimalsArr = (Math.trunc(guardedRating * 100) / 100).toFixed(2).split("."); // This should always be two, but, check

        if (firstTwoDecimalsArr.length > 1) {
          offsetValue = "".concat(firstTwoDecimalsArr[1], "%");
        }
      }

      return offsetValue;
    }
  }, {
    key: "fillId",
    get: function get() {
      // Using the rating's decimal place to set a unique id for the fill. e.g. a rating of 3.5 and 4.5 will use the same half fill star with id #star-grad-5.
      return "star-grad-".concat(Math.round(this.props.rating % 1 * 10)).concat(this.props.name ? "-".concat(this.props.name) : "");
    }
  }, {
    key: "renderStars",
    get: function get() {
      var _this2 = this;

      var _this$props3 = this.props,
          changeRating = _this$props3.changeRating,
          selectedRating = _this$props3.rating,
          numberOfStars = _this$props3.numberOfStars,
          starDimension = _this$props3.starDimension,
          starSpacing = _this$props3.starSpacing,
          starRatedColor = _this$props3.starRatedColor,
          starEmptyColor = _this$props3.starEmptyColor,
          starHoverColor = _this$props3.starHoverColor,
          gradientPathName = _this$props3.gradientPathName,
          ignoreInlineStyles = _this$props3.ignoreInlineStyles,
          svgIconPath = _this$props3.svgIconPath,
          svgIconViewBox = _this$props3.svgIconViewBox,
          name = _this$props3.name;
      var highestStarHovered = this.state.highestStarHovered;
      var numberOfStarsArray = Array.apply(null, Array(numberOfStars));
      return numberOfStarsArray.map(function (_, index) {
        var starRating = index + 1;
        var isStarred = starRating <= selectedRating; // hovered only matters when changeRating is true

        var hoverMode = highestStarHovered > 0;
        var isHovered = starRating <= highestStarHovered;
        var isCurrentHoveredStar = starRating === highestStarHovered; // only matters when changeRating is false
        // given star 5 and rating 4.2:  5 > 4.2 && 4 < 4.2;

        var isPartiallyFullStar = starRating > selectedRating && starRating - 1 < selectedRating;
        var isFirstStar = starRating === 1;
        var isLastStar = starRating === numberOfStars;
        return _react.default.createElement(_star.default, {
          key: starRating,
          fillId: _this2.fillId,
          changeRating: changeRating ? function () {
            return changeRating(starRating, name);
          } : null,
          hoverOverStar: changeRating ? _this2.hoverOverStar(starRating) : null,
          unHoverOverStar: changeRating ? _this2.unHoverOverStar : null,
          isStarred: isStarred,
          isPartiallyFullStar: isPartiallyFullStar,
          isHovered: isHovered,
          hoverMode: hoverMode,
          isCurrentHoveredStar: isCurrentHoveredStar,
          isFirstStar: isFirstStar,
          isLastStar: isLastStar,
          starDimension: starDimension,
          starSpacing: starSpacing,
          starHoverColor: starHoverColor,
          starRatedColor: starRatedColor,
          starEmptyColor: starEmptyColor,
          gradientPathName: gradientPathName,
          ignoreInlineStyles: ignoreInlineStyles,
          svgIconPath: svgIconPath,
          svgIconViewBox: svgIconViewBox
        });
      });
    }
  }]);

  return StarRatings;
}(_react.default.Component);

StarRatings.propTypes = {
  rating: _propTypes.default.number.isRequired,
  numberOfStars: _propTypes.default.number.isRequired,
  changeRating: _propTypes.default.func,
  starHoverColor: _propTypes.default.string.isRequired,
  starRatedColor: _propTypes.default.string.isRequired,
  starEmptyColor: _propTypes.default.string.isRequired,
  starDimension: _propTypes.default.string.isRequired,
  starSpacing: _propTypes.default.string.isRequired,
  gradientPathName: _propTypes.default.string.isRequired,
  ignoreInlineStyles: _propTypes.default.bool.isRequired,
  svgIconPath: _propTypes.default.string.isRequired,
  svgIconViewBox: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
StarRatings.defaultProps = {
  rating: 0,
  typeOfWidget: "Star",
  numberOfStars: 5,
  changeRating: null,
  starHoverColor: "rgb(230, 67, 47)",
  starRatedColor: "rgb(109, 122, 130)",
  starEmptyColor: "rgb(203, 211, 227)",
  starDimension: "50px",
  starSpacing: "7px",
  gradientPathName: "",
  ignoreInlineStyles: false,
  svgIconPath: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
  svgIconViewBox: "0 0 51 48"
};
var _default = StarRatings;
exports.default = _default;
//# sourceMappingURL=star-ratings.js.map