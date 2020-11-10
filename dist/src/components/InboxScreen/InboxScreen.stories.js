"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _addonActions = require("@storybook/addon-actions");

var _InboxScreen = require("./InboxScreen");

var TaskListStories = _interopRequireWildcard(require("../TaskList/TaskList.stories"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A super-simple mock of a redux store 
var store = {
  getState: function getState() {
    return {
      tasks: TaskListStories.Default.args.tasks
    };
  },
  subscribe: function subscribe() {
    return 0;
  },
  dispatch: (0, _addonActions.action)('dispatch')
};
var _default = {
  component: _InboxScreen.PureInboxScreen,
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, story());
  }],
  title: 'InboxScreen'
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_InboxScreen.PureInboxScreen, args);
};

var Default = Template.bind({});
exports.Default = Default;
var Error = Template.bind({});
exports.Error = Error;
Error.args = {
  error: 'Something'
};

//# sourceMappingURL=InboxScreen.stories.js.map