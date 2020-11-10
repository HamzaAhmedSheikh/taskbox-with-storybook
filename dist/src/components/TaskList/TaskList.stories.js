"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = exports.Loading = exports.WithPinnedTasks = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TaskList = require("../TaskList/TaskList");

var TaskStories = _interopRequireWildcard(require("../Task/Task.stories"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  component: _TaskList.PureTaskList,
  title: 'TaskList',
  decorators: [function (story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '3rem'
      }
    }, " ", story(), " ");
  }]
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TaskList.PureTaskList, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited the Default story in task.stories.js.
  tasks: [_objectSpread({}, TaskStories.Default.args.task, {
    id: '1',
    title: 'Task 1'
  }), _objectSpread({}, TaskStories.Default.args.task, {
    id: '2',
    title: 'Task 2'
  }), _objectSpread({}, TaskStories.Default.args.task, {
    id: '3',
    title: 'Task 3'
  }), _objectSpread({}, TaskStories.Default.args.task, {
    id: '4',
    title: 'Task 4'
  }), _objectSpread({}, TaskStories.Default.args.task, {
    id: '5',
    title: 'Task 5'
  }), _objectSpread({}, TaskStories.Default.args.task, {
    id: '6',
    title: 'Task 6'
  }), _objectSpread({}, TaskStories.Default.args.task, {
    id: '7',
    title: 'Task 7'
  })]
};
var WithPinnedTasks = Template.bind({});
exports.WithPinnedTasks = WithPinnedTasks;
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [].concat(_toConsumableArray(Default.args.tasks.slice(0, 5)), [{
    id: '6',
    title: 'Task 6 (pinned)',
    state: 'TASK_PINNED'
  }])
};
var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = {
  tasks: [],
  loading: true
};
var Empty = Template.bind({});
exports.Empty = Empty;
Empty.args = _objectSpread({}, Loading.args, {
  loading: false
});

//# sourceMappingURL=TaskList.stories.js.map