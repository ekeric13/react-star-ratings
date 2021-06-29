"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _starRatings = _interopRequireDefault(require("./star-ratings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// polyfill for ie
Number.isInteger = Number.isInteger || function (value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

var _default = _starRatings.default;
exports.default = _default;
//# sourceMappingURL=index.js.map