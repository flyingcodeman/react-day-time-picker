"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ConfirmButton = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 1em;\n  font-weight: 500;\n  padding: 0.8em 1em;\n  border-radius: 4px;\n  border: 0;\n  box-sizing: border-box;\n  outline: 0;\n  transition: all 0.25s ease;\n  min-width: 150px;\n  color: ", ";\n  background-color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n    background-color: ", ";\n  }\n\n  :disabled {\n    cursor: not-allowed;\n    color: ", ";\n    background-color: ", ";\n  }\n\n  @media (max-width: 450px) {\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.buttons.confirm.color;
}, function (props) {
  return props.theme.buttons.confirm.background;
}, function (props) {
  return props.theme.buttons.confirm.hover.color;
}, function (props) {
  return props.theme.buttons.confirm.hover.background;
}, function (props) {
  return props.theme.buttons.disabled.color;
}, function (props) {
  return props.theme.buttons.disabled.background;
});
exports.ConfirmButton = ConfirmButton;