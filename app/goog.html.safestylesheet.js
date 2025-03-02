goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeStyleSheet");
  goog.module.declareLegacyNamespace();
  var Const = goog.require("goog.string.Const");
  var SafeStyle = goog.require("goog.html.SafeStyle");
  var TypedString = goog.require("goog.string.TypedString");
  var googObject = goog.require("goog.object");
  var $jscomp$destructuring$var3 = goog.require("goog.asserts");
  var assert = $jscomp$destructuring$var3.assert;
  var fail = $jscomp$destructuring$var3.fail;
  var $jscomp$destructuring$var4 = goog.require("goog.string.internal");
  var contains = $jscomp$destructuring$var4.contains;
  var CONSTRUCTOR_TOKEN_PRIVATE = {};
  var SafeStyleSheet = function(value, token) {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
    this.implementsGoogStringTypedString = true;
  };
  SafeStyleSheet.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_.toString();
  };
  SafeStyleSheet.createRule = function(selector, style) {
    if (contains(selector, "\x3c")) {
      throw new Error("Selector does not allow '\x3c', got: " + selector);
    }
    var selectorToCheck = selector.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(selectorToCheck)) {
      throw new Error("Selector allows only [-_a-zA-Z0-9#.:* ,\x3e+~[\\]()\x3d^$|] and " + "strings, got: " + selector);
    }
    if (!SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {
      throw new Error("() and [] in selector must be balanced, got: " + selector);
    }
    if (!(style instanceof SafeStyle)) {
      style = SafeStyle.create(style);
    }
    var styleSheet = selector + "{" + SafeStyle.unwrap(style).replace(/</g, "\\3C ") + "}";
    return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
  };
  SafeStyleSheet.hasBalancedBrackets_ = function(s) {
    var brackets = {"(":")", "[":"]"};
    var expectedBrackets = [];
    var i = 0;
    for (; i < s.length; i++) {
      var ch = s[i];
      if (brackets[ch]) {
        expectedBrackets.push(brackets[ch]);
      } else if (googObject.contains(brackets, ch)) {
        if (expectedBrackets.pop() != ch) {
          return false;
        }
      }
    }
    return expectedBrackets.length == 0;
  };
  SafeStyleSheet.concat = function(var_args) {
    var result = "";
    var addArgument = function(argument) {
      if (Array.isArray(argument)) {
        argument.forEach(addArgument);
      } else {
        result = result + SafeStyleSheet.unwrap(argument);
      }
    };
    Array.prototype.forEach.call(arguments, addArgument);
    return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);
  };
  SafeStyleSheet.fromConstant = function(styleSheet) {
    var styleSheetString = Const.unwrap(styleSheet);
    if (styleSheetString.length === 0) {
      return SafeStyleSheet.EMPTY;
    }
    assert(!contains(styleSheetString, "\x3c"), "Forbidden '\x3c' character in style sheet string: " + styleSheetString);
    return SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);
  };
  SafeStyleSheet.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  };
  SafeStyleSheet.unwrap = function(safeStyleSheet) {
    if (safeStyleSheet instanceof SafeStyleSheet && safeStyleSheet.constructor === SafeStyleSheet) {
      return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    } else {
      fail("expected object of type SafeStyleSheet, got '" + safeStyleSheet + "' of type " + goog.typeOf(safeStyleSheet));
      return "type_error:SafeStyleSheet";
    }
  };
  SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(styleSheet) {
    return new SafeStyleSheet(styleSheet, CONSTRUCTOR_TOKEN_PRIVATE);
  };
  SafeStyleSheet.EMPTY = SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
  exports = SafeStyleSheet;
  return exports;
});

//# sourceMappingURL=goog.html.safestylesheet.js.map
