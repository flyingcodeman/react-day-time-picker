"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekDays = exports.WeekDay = exports.WEEK_DAYS = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WEEK_DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
exports.WEEK_DAYS = WEEK_DAYS;
var WeekDays = _styledComponents["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 1fr;\n  grid-gap: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 0.8em;\n  font-weight: 500;\n  text-transform: uppercase;\n  opacity: 0.6;\n"])));
exports.WeekDays = WeekDays;
var WeekDay = _styledComponents["default"].li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  list-style: none;\n  display: grid;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n"])));
exports.WeekDay = WeekDay;