"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StarBorder = _interopRequireDefault(require("@material-ui/icons/StarBorder"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Task(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      onPinTask = _ref.onPinTask;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list-item ".concat(state)
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    defaultChecked: state === 'TASK_ARCHIVED',
    disabled: true,
    name: "checked"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox-custom",
    onClick: function onClick() {
      return onArchiveTask(id);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: title,
    readOnly: true,
    placeholder: "Input title"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "actions",
    onClick: function onClick(event) {
      return event.stopPropagation();
    }
  }, state !== 'TASK_ARCHIVED' &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  _react.default.createElement("a", {
    onClick: function onClick() {
      return onPinTask(id);
    }
  }, /*#__PURE__*/_react.default.createElement(_Star.default, null))));
}

Task.propTypes = {
  /** Composition of the task */
  task: _propTypes.default.shape({
    /** Id of the task */
    id: _propTypes.default.string.isRequired,

    /** Title of the task */
    title: _propTypes.default.string.isRequired,

    /** Current state of the task */
    state: _propTypes.default.string.isRequired
  }),

  /** Event to change the task to archived */
  onArchiveTask: _propTypes.default.func,

  /** Event to change the task to pinned */
  onPinTask: _propTypes.default.func
};

//# sourceMappingURL=Task.js.map