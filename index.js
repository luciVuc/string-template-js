"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.replace = replace;
/**
 * String templating utility that creates new string literals based on templates and embedded expressions (or values).
 * A template is given as a string, which similar to the `ES6 Literal Templates` contains
 * placeholders that will be replaced with actual values or expressions, whereas the actual values or
 * expressions are given as properties of a JS object (a hashmap of key-value pairs).
 * A placeholder is an identifier enclosed within curly braces and preceded by the 'Dollar' sign
 * (`${expression}`), which is expected to match the reference to the actual value or expression.
 * 
 * @export
 * @param {String} sTemplate The string template, which, similar to the ES6 literal templates can contain value placeholders enclosed within curly braces and preceded by the 'Dollar' sign (`${expression}`)
 * @param {Object} mData The JS object (hashmap) containing the actual values and expressions to replace the template placeholders with.
 * @returns {String}
 */
function replace(sTemplate, mData) {
  if (typeof sTemplate === "string") {
    // mData = mData instanceof Object ? mData : {};
    mData = mData ? mData : {};
    return sTemplate.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, function (fullMath, grp) {
      var val = mData[grp];
      if (typeof val === "function") {
        val = val();
      } else if (val === null || val === undefined) {
        val = "";
      } else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" || (typeof val === "undefined" ? "undefined" : _typeof(val)) === "symbol") {
        val = val.toString();
      } else {
        val = val.valueOf();
      }
      return val;
    });
  }
  return "";
}
// export default replace;
