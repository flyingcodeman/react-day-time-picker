"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessIcon = exports.PrevIcon = exports.NextIcon = exports.FailedIcon = exports.DayIcon = exports.ClockIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes2 = _interopRequireDefault(require("prop-types"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _propTypes = {
  className: _propTypes2["default"].string
};
var PrevIcon = function PrevIcon(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronLeft,
    className: className
  });
};
exports.PrevIcon = PrevIcon;
PrevIcon.propTypes = _propTypes;
var NextIcon = function NextIcon(_ref2) {
  var className = _ref2.className;
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronRight,
    className: className
  });
};
exports.NextIcon = NextIcon;
NextIcon.propTypes = _propTypes;
var DayIcon = function DayIcon(_ref3) {
  var className = _ref3.className;
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCalendarDay,
    className: className
  });
};
exports.DayIcon = DayIcon;
DayIcon.propTypes = _propTypes;
var ClockIcon = function ClockIcon(_ref4) {
  var className = _ref4.className;
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClock,
    className: className
  });
};
exports.ClockIcon = ClockIcon;
ClockIcon.propTypes = _propTypes;
var SuccessIcon = function SuccessIcon(_ref5) {
  var className = _ref5.className;
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheckCircle,
    className: className
  });
};
exports.SuccessIcon = SuccessIcon;
SuccessIcon.propTypes = _propTypes;
var FailedIcon = function FailedIcon(_ref6) {
  var className = _ref6.className;
  return /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faExclamationCircle,
    className: className
  });
};
exports.FailedIcon = FailedIcon;
FailedIcon.propTypes = _propTypes;