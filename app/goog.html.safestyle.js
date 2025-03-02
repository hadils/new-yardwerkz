goog.loadModule(function(exports) {
  function sanitizePropertyValue(value) {
    if (value instanceof SafeUrl) {
      var url = SafeUrl.unwrap(value);
      return 'url("' + url.replace(/</g, "%3c").replace(/[\\"]/g, "\\$\x26") + '")';
    }
    var result = value instanceof Const ? Const.unwrap(value) : sanitizePropertyValueString(String(value));
    if (/[{;}]/.test(result)) {
      throw new AssertionError("Value does not allow [{;}], got: %s.", [result]);
    }
    return result;
  }
  function sanitizePropertyValueString(value) {
    var valueWithoutFunctions = value.replace(FUNCTIONS_RE, "$1").replace(FUNCTIONS_RE, "$1").replace(URL_RE, "url");
    if (!VALUE_RE.test(valueWithoutFunctions)) {
      fail("String value allows only " + VALUE_ALLOWED_CHARS + " and simple functions, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (COMMENT_RE.test(value)) {
      fail("String value disallows comments, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (!hasBalancedQuotes(value)) {
      fail("String value requires balanced quotes, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    } else if (!hasBalancedSquareBrackets(value)) {
      fail("String value requires balanced square brackets and one" + " identifier per pair of brackets, got: " + value);
      return SafeStyle.INNOCUOUS_STRING;
    }
    return sanitizeUrl(value);
  }
  function hasBalancedQuotes(value) {
    var outsideSingle = true;
    var outsideDouble = true;
    var i = 0;
    for (; i < value.length; i++) {
      var c = value.charAt(i);
      if (c == "'" && outsideDouble) {
        outsideSingle = !outsideSingle;
      } else if (c == '"' && outsideSingle) {
        outsideDouble = !outsideDouble;
      }
    }
    return outsideSingle && outsideDouble;
  }
  function hasBalancedSquareBrackets(value) {
    var outside = true;
    var tokenRe = /^[-_a-zA-Z0-9]$/;
    var i = 0;
    for (; i < value.length; i++) {
      var c = value.charAt(i);
      if (c == "]") {
        if (outside) {
          return false;
        }
        outside = true;
      } else if (c == "[") {
        if (!outside) {
          return false;
        }
        outside = false;
      } else if (!outside && !tokenRe.test(c)) {
        return false;
      }
    }
    return outside;
  }
  function sanitizeUrl(value) {
    return value.replace(URL_RE, function(match, before, url, after) {
      var quote = "";
      url = url.replace(/^(['"])(.*)\1$/, function(match, start, inside) {
        quote = start;
        return inside;
      });
      var sanitized = SafeUrl.sanitize(url).getTypedStringValue();
      return before + quote + sanitized + quote + after;
    });
  }
  "use strict";
  goog.module("goog.html.SafeStyle");
  goog.module.declareLegacyNamespace();
  var Const = goog.require("goog.string.Const");
  var SafeUrl = goog.require("goog.html.SafeUrl");
  var TypedString = goog.require("goog.string.TypedString");
  var $jscomp$destructuring$var1 = goog.require("goog.asserts");
  var AssertionError = $jscomp$destructuring$var1.AssertionError;
  var assert = $jscomp$destructuring$var1.assert;
  var fail = $jscomp$destructuring$var1.fail;
  var $jscomp$destructuring$var2 = goog.require("goog.string.internal");
  var contains = $jscomp$destructuring$var2.contains;
  var endsWith = $jscomp$destructuring$var2.endsWith;
  var CONSTRUCTOR_TOKEN_PRIVATE = {};
  var SafeStyle = function(value, token) {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
    this.implementsGoogStringTypedString = true;
  };
  SafeStyle.fromConstant = function(style) {
    var styleString = Const.unwrap(style);
    if (styleString.length === 0) {
      return SafeStyle.EMPTY;
    }
    assert(endsWith(styleString, ";"), "Last character of style string is not ';': " + styleString);
    assert(contains(styleString, ":"), "Style string must contain at least one ':', to " + 'specify a "name: value" pair: ' + styleString);
    return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(styleString);
  };
  SafeStyle.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
  };
  SafeStyle.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString();
  };
  SafeStyle.unwrap = function(safeStyle) {
    if (safeStyle instanceof SafeStyle && safeStyle.constructor === SafeStyle) {
      return safeStyle.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    } else {
      fail("expected object of type SafeStyle, got '" + safeStyle + "' of type " + goog.typeOf(safeStyle));
      return "type_error:SafeStyle";
    }
  };
  SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(style) {
    return new SafeStyle(style, CONSTRUCTOR_TOKEN_PRIVATE);
  };
  SafeStyle.create = function(map) {
    var style = "";
    var name;
    for (name in map) {
      if (Object.prototype.hasOwnProperty.call(map, name)) {
        if (!/^[-_a-zA-Z0-9]+$/.test(name)) {
          throw new Error("Name allows only [-_a-zA-Z0-9], got: " + name);
        }
        var value = map[name];
        if (value == null) {
          continue;
        }
        if (Array.isArray(value)) {
          value = value.map(sanitizePropertyValue).join(" ");
        } else {
          value = sanitizePropertyValue(value);
        }
        style = style + (name + ":" + value + ";");
      }
    }
    if (!style) {
      return SafeStyle.EMPTY;
    }
    return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
  };
  SafeStyle.concat = function(var_args) {
    var style = "";
    var addArgument = function(argument) {
      if (Array.isArray(argument)) {
        argument.forEach(addArgument);
      } else {
        style = style + SafeStyle.unwrap(argument);
      }
    };
    Array.prototype.forEach.call(arguments, addArgument);
    if (!style) {
      return SafeStyle.EMPTY;
    }
    return SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
  };
  SafeStyle.EMPTY = SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
  SafeStyle.INNOCUOUS_STRING = "zClosurez";
  SafeStyle.PropertyValue;
  SafeStyle.PropertyMap;
  var VALUE_ALLOWED_CHARS = "[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]";
  var VALUE_RE = new RegExp("^" + VALUE_ALLOWED_CHARS + "+$");
  var URL_RE = new RegExp("\\b(url\\([ \t\n]*)(" + "'[ -\x26(-\\[\\]-~]*'" + '|"[ !#-\\[\\]-~]*"' + "|[!#-\x26*-\\[\\]-~]*" + ")([ \t\n]*\\))", "g");
  var ALLOWED_FUNCTIONS = ["calc", "cubic-bezier", "fit-content", "hsl", "hsla", "linear-gradient", "matrix", "minmax", "radial-gradient", "repeat", "rgb", "rgba", "(rotate|scale|translate)(X|Y|Z|3d)?", "steps", "var"];
  var FUNCTIONS_RE = new RegExp("\\b(" + ALLOWED_FUNCTIONS.join("|") + ")" + "\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
  var COMMENT_RE = /\/\*/;
  exports = SafeStyle;
  return exports;
});

//# sourceMappingURL=goog.html.safestyle.js.map
