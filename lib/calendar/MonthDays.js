"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthDays = exports.MonthDay = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MonthDays = _styledComponents["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-gap: 0;\n  font-size: 1.2em;\n  font-weight: 300;\n  margin: 0;\n  padding: 0;\n"])));
exports.MonthDays = MonthDays;
var MonthDay = _styledComponents["default"].li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  list-style: none;\n  display: grid;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  padding: 1em 0;\n  border-radius: 50%;\n  transition: all 0.25s ease;\n  font-weight: ", ";\n  color: ", ";\n  opacity: ", ";\n\n  :hover {\n    cursor: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.isToday ? 'bold' : 'inherit';
}, function (props) {
  return props.isToday ? props.theme.primary : 'inherit';
}, function (props) {
  return props.isValid ? 1 : 0.3;
}, function (props) {
  return props.isValid ? 'pointer' : 'inherit';
}, function (props) {
  return props.isValid ? props.theme.primary : 'inherit';
});
exports.MonthDay = MonthDay;