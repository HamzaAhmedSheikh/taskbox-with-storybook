"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Counter(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: props.backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement("h4", null, " Hello World "), /*#__PURE__*/_react.default.createElement("strong", null, "  Hello Counter  ", props.initialValue, " "));
}

var _default = Counter;
exports.default = _default;

//# sourceMappingURL=Counter.js.map