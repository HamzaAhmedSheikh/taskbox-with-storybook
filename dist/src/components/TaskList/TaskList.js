"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureTaskList = PureTaskList;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _taskboxRedux = require("../../lib/taskbox-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Task = _interopRequireDefault(require("../Task/Task"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PureTaskList(_ref) {
  var loading = _ref.loading,
      tasks = _ref.tasks,
      onPinTask = _ref.onPinTask,
      onArchiveTask = _ref.onArchiveTask;
  var events = {
    onPinTask: onPinTask,
    onArchiveTask: onArchiveTask
  };

  var LoadingRow = /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-item"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "glow-checkbox"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "glow-text"
  }, /*#__PURE__*/_react.default.createElement("span", null, " Loading "), /*#__PURE__*/_react.default.createElement("span", null, " cool "), /*#__PURE__*/_react.default.createElement("span", null, " state ")));

  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "list-items"
    }, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow);
  }

  if (tasks.length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "list-items"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrapper-message"
    }, /*#__PURE__*/_react.default.createElement(_CheckCircle.default, {
      style: {
        width: "50px",
        height: "70px"
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "title-message"
    }, " You have no tasks "), /*#__PURE__*/_react.default.createElement("div", {
      className: "subtitle-message"
    }, " Sit back and relax ")));
  }

  var tasksInOrder = [].concat(_toConsumableArray(tasks.filter(function (t) {
    return t.state === 'TASK_PINNED';
  })), _toConsumableArray(tasks.filter(function (t) {
    return t.state !== 'TASK_PINNED';
  })));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list-items"
  }, tasksInOrder.map(function (task) {
    return /*#__PURE__*/_react.default.createElement(_Task.default, _extends({
      key: task.id,
      task: task
    }, events));
  }));
}

PureTaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: _propTypes.default.bool,

  /** The list of tasks */
  tasks: _propTypes.default.arrayOf(_Task.default.propTypes.task).isRequired,

  /** Event to change the task to pinned */
  onPinTask: _propTypes.default.func,

  /** Event to change the task to archived */
  onArchiveTask: _propTypes.default.func
};
PureTaskList.defaultProps = {
  loading: false
};
PureTaskList.defaultProps = {
  loading: false
};

var _default = (0, _reactRedux.connect)(function (_ref2) {
  var tasks = _ref2.tasks;
  return {
    tasks: tasks.filter(function (t) {
      return t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED';
    })
  };
}, function (dispatch) {
  return {
    onArchiveTask: function onArchiveTask(id) {
      return dispatch((0, _taskboxRedux.archiveTask)(id));
    },
    onPinTask: function onPinTask(id) {
      return dispatch((0, _taskboxRedux.pinTask)(id));
    }
  };
})(PureTaskList);

exports.default = _default;

//# sourceMappingURL=TaskList.js.map