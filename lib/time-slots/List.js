"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var List = _styledComponents["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: min-content;\n  grid-gap: 1em;\n  list-style: none;\n  margin: 0;\n  padding: 1em;\n  height: 355px;\n  overflow: auto;\n  border-top: 1px solid ", ";\n"])), function (props) {
  return props.theme.secondary;
});
exports.List = List;
var ListItem = _styledComponents["default"].li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0.75em 0.5em;\n  border: 1px solid;\n  margin: 0;\n  opacity: ", ";\n\n  :hover {\n    cursor: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.isValid ? 1 : 0.3;
}, function (props) {
  return props.isValid ? 'pointer' : 'inherit';
}, function (props) {
  return props.isValid ? props.theme.primary : 'inherit';
});
exports.ListItem = ListItem;