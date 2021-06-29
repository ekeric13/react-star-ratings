"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Star =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    _classCallCheck(this, Star);

    return _possibleConstructorReturn(this, _getPrototypeOf(Star).apply(this, arguments));
  }

  _createClass(Star, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          changeRating = _this$props.changeRating,
          hoverOverStar = _this$props.hoverOverStar,
          unHoverOverStar = _this$props.unHoverOverStar,
          svgIconViewBox = _this$props.svgIconViewBox,
          svgIconPath = _this$props.svgIconPath;
      return _react.default.createElement("div", {
        className: "star-container",
        style: this.starContainerStyle,
        onMouseEnter: hoverOverStar,
        onMouseLeave: unHoverOverStar,
        onClick: changeRating
      }, _react.default.createElement("svg", {
        viewBox: svgIconViewBox,
        className: this.starClasses,
        style: this.starSvgStyle
      }, _react.default.createElement("path", {
        className: "star",
        style: this.pathStyle,
        d: svgIconPath
      })));
    }
  }, {
    key: "starContainerStyle",
    get: function get() {
      var _this$props2 = this.props,
          changeRating = _this$props2.changeRating,
          starSpacing = _this$props2.starSpacing,
          isFirstStar = _this$props2.isFirstStar,
          isLastStar = _this$props2.isLastStar,
          ignoreInlineStyles = _this$props2.ignoreInlineStyles;
      var starContainerStyle = {
        position: "relative",
        display: "inline-block",
        verticalAlign: "middle",
        paddingLeft: isFirstStar ? undefined : starSpacing,
        paddingRight: isLastStar ? undefined : starSpacing,
        cursor: changeRating ? "pointer" : undefined
      };
      return ignoreInlineStyles ? {} : starContainerStyle;
    }
  }, {
    key: "starSvgStyle",
    get: function get() {
      var _this$props3 = this.props,
          ignoreInlineStyles = _this$props3.ignoreInlineStyles,
          isCurrentHoveredStar = _this$props3.isCurrentHoveredStar,
          starDimension = _this$props3.starDimension;
      var starSvgStyle = {
        width: starDimension,
        height: starDimension,
        transition: "transform .2s ease-in-out",
        transform: isCurrentHoveredStar ? "scale(1.1)" : undefined
      };
      return ignoreInlineStyles ? {} : starSvgStyle;
    }
  }, {
    key: "pathStyle",
    get: function get() {
      var _this$props4 = this.props,
          isStarred = _this$props4.isStarred,
          isPartiallyFullStar = _this$props4.isPartiallyFullStar,
          isHovered = _this$props4.isHovered,
          hoverMode = _this$props4.hoverMode,
          starEmptyColor = _this$props4.starEmptyColor,
          starRatedColor = _this$props4.starRatedColor,
          starHoverColor = _this$props4.starHoverColor,
          gradientPathName = _this$props4.gradientPathName,
          fillId = _this$props4.fillId,
          ignoreInlineStyles = _this$props4.ignoreInlineStyles;
      var fill;

      if (hoverMode) {
        if (isHovered) fill = starHoverColor;else fill = starEmptyColor;
      } else {
        if (isPartiallyFullStar) fill = "url('".concat(gradientPathName, "#").concat(fillId, "')");else if (isStarred) fill = starRatedColor;else fill = starEmptyColor;
      }

      var pathStyle = {
        fill: fill,
        transition: "fill .2s ease-in-out"
      };
      return ignoreInlineStyles ? {} : pathStyle;
    }
  }, {
    key: "starClasses",
    get: function get() {
      var _this$props5 = this.props,
          isSelected = _this$props5.isSelected,
          isPartiallyFullStar = _this$props5.isPartiallyFullStar,
          isHovered = _this$props5.isHovered,
          isCurrentHoveredStar = _this$props5.isCurrentHoveredStar,
          ignoreInlineStyles = _this$props5.ignoreInlineStyles;
      var starClasses = (0, _classnames.default)({
        "widget-svg": true,
        "widget-selected": isSelected,
        "multi-widget-selected": isPartiallyFullStar,
        hovered: isHovered,
        "current-hovered": isCurrentHoveredStar
      });
      return ignoreInlineStyles ? {} : starClasses;
    }
  }]);

  return Star;
}(_react.default.Component);

Star.propTypes = {
  fillId: _propTypes.default.string.isRequired,
  changeRating: _propTypes.default.func,
  hoverOverStar: _propTypes.default.func,
  unHoverOverStar: _propTypes.default.func,
  isStarred: _propTypes.default.bool.isRequired,
  isPartiallyFullStar: _propTypes.default.bool.isRequired,
  isHovered: _propTypes.default.bool.isRequired,
  hoverMode: _propTypes.default.bool.isRequired,
  isCurrentHoveredStar: _propTypes.default.bool.isRequired,
  isFirstStar: _propTypes.default.bool.isRequired,
  isLastStar: _propTypes.default.bool.isRequired,
  starDimension: _propTypes.default.string.isRequired,
  starSpacing: _propTypes.default.string.isRequired,
  starHoverColor: _propTypes.default.string.isRequired,
  starRatedColor: _propTypes.default.string.isRequired,
  starEmptyColor: _propTypes.default.string.isRequired,
  gradientPathName: _propTypes.default.string.isRequired,
  ignoreInlineStyles: _propTypes.default.bool.isRequired,
  svgIconPath: _propTypes.default.string.isRequired,
  svgIconViewBox: _propTypes.default.string.isRequired
};
var _default = Star;
exports.default = _default;
//# sourceMappingURL=star.js.map