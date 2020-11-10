"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Archived = exports.Pinned = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _Task.default,
  title: 'Task'
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Task.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
  }
};
var Pinned = Template.bind({});
exports.Pinned = Pinned;
Pinned.args = {
  task: _objectSpread({}, Default.args.task, {
    state: 'TASK_PINNED'
  })
};
var Archived = Template.bind({});
exports.Archived = Archived;
Archived.args = {
  task: _objectSpread({}, Default.args.task, {
    state: 'TASK_ARCHIVED'
  })
};

//# sourceMappingURL=Task.stories.js.map