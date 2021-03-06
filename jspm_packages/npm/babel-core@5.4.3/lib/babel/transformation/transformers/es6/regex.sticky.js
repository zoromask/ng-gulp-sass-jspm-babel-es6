/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.Literal = Literal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _helpersRegex = require("../../helpers/regex");

var regex = _interopRequireWildcard(_helpersRegex);

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

function Literal(node) {
  if (!regex.is(node, "y")) return;
  return t.newExpression(t.identifier("RegExp"), [t.literal(node.regex.pattern), t.literal(node.regex.flags)]);
}