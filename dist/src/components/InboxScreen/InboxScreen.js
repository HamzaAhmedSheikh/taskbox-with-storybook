"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureInboxScreen = PureInboxScreen;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _SentimentVeryDissatisfied = _interopRequireDefault(require("@material-ui/icons/SentimentVeryDissatisfied"));

var _TaskList = _interopRequireDefault(require("../TaskList/TaskList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PureInboxScreen(_ref) {
  var error = _ref.error;

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "page lists-show"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrapper-message"
    }, /*#__PURE__*/_react.default.createElement(_SentimentVeryDissatisfied.default, {
      style: {
        width: "50px",
        height: "70px"
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "title-message"
    }, "Oh no!"), /*#__PURE__*/_react.default.createElement("div", {
      className: "subtitle-message"
    }, " Something went wrong. ")));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "page lists-show"
  }, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "title-page"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "title-wrapper"
  }, " Taskbox "))), /*#__PURE__*/_react.default.createElement(_TaskList.default, null));
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: _propTypes.default.string
};
PureInboxScreen.defaultProps = {
  error: null
};

var _default = (0, _reactRedux.connect)(function (_ref2) {
  var error = _ref2.error;
  return {
    error: error
  };
})(PureInboxScreen);

exports.default = _default;

//# sourceMappingURL=InboxScreen.js.map