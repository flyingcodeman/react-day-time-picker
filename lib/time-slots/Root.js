"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dateFns = _interopRequireDefault(require("date-fns"));
var _generateTimeSlots = _interopRequireDefault(require("./generate-time-slots"));
var _List = require("./List");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Root(_ref) {
  var pickedDay = _ref.pickedDay,
    slotSizeMinutes = _ref.slotSizeMinutes,
    validator = _ref.validator,
    pickTime = _ref.pickTime;
  var timeSlots = (0, _generateTimeSlots["default"])(pickedDay, slotSizeMinutes);
  return /*#__PURE__*/_react["default"].createElement(_List.List, null, timeSlots.map(function (slot) {
    var isValid = validator ? validator(slot) : true;
    return /*#__PURE__*/_react["default"].createElement(_List.ListItem, {
      key: slot,
      isValid: isValid,
      onClick: function onClick() {
        return isValid && pickTime(slot);
      }
    }, _dateFns["default"].format(slot, 'HH:mm'));
  }));
}
Root.propTypes = {
  pickedDay: _propTypes["default"].instanceOf(Date),
  slotSizeMinutes: _propTypes["default"].number.isRequired,
  validator: _propTypes["default"].func,
  pickTime: _propTypes["default"].func.isRequired
};
var _default = Root;
exports["default"] = _default;