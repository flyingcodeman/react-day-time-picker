"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dateFns = _interopRequireDefault(require("date-fns"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function generateTimeSlots(selectedDate, slotSizeMinutes) {
  var isToday = _dateFns["default"].isToday(selectedDate);
  var start = selectedDate;
  if (isToday) {
    var now = new Date();
    var offsetHours = _dateFns["default"].getHours(now);

    // "Pad" the start time with the amount of hours of the current time, to
    // prevent rendering time slots of the past
    start = _dateFns["default"].addHours(start, offsetHours);

    // The start positions might still be in the past in terms of minutes
    // So "pad" the start time with the slot size, to prevent rendering time
    // slots of the past
    while (start <= now) {
      start = _dateFns["default"].addMinutes(start, slotSizeMinutes);
    }
  }
  var end = _dateFns["default"].addDays(selectedDate, 1);
  var slot = start;
  var timeSlots = [];
  while (slot < end) {
    timeSlots.push(slot);
    slot = _dateFns["default"].addMinutes(slot, slotSizeMinutes);
  }
  return timeSlots;
}
var _default = generateTimeSlots;
exports["default"] = _default;