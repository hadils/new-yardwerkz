goog.loadModule(function(exports) {
  function getAttrNameAndValue(tagName, name, value) {
    if (value instanceof Const) {
      value = Const.unwrap(value);
    } else if (name.toLowerCase() == "style") {
      if (SafeHtml.SUPPORT_STYLE_ATTRIBUTE) {
        value = getStyleValue(value);
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
      }
    } else if (/^on/i.test(name)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + name + '" requires goog.string.Const value, "' + value + '" given.' : "");
    } else if (name.toLowerCase() in URL_ATTRIBUTES) {
      if (value instanceof TrustedResourceUrl) {
        value = TrustedResourceUrl.unwrap(value);
      } else if (value instanceof SafeUrl) {
        value = SafeUrl.unwrap(value);
      } else if (typeof value === "string") {
        value = SafeUrl.sanitize(value).getTypedStringValue();
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + name + '" on tag "' + tagName + '" requires goog.html.SafeUrl, goog.string.Const, or' + ' string, value "' + value + '" given.' : "");
      }
    }
    if (value.implementsGoogStringTypedString) {
      value = value.getTypedStringValue();
    }
    asserts.assert(typeof value === "string" || typeof value === "number", "String or number value expected, got " + typeof value + " with value: " + value);
    return name + '\x3d"' + internal.htmlEscape(String(value)) + '"';
  }
  function getStyleValue(value) {
    if (!goog.isObject(value)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map ' + "of style properties, " + typeof value + " given: " + value : "");
    }
    if (!(value instanceof SafeStyle)) {
      value = SafeStyle.create(value);
    }
    return SafeStyle.unwrap(value);
  }
  "use strict";
  goog.module("goog.html.SafeHtml");
  goog.module.declareLegacyNamespace();
  var Const = goog.require("goog.string.Const");
  var SafeScript = goog.require("goog.html.SafeScript");
  var SafeStyle = goog.require("goog.html.SafeStyle");
  var SafeStyleSheet = goog.require("goog.html.SafeStyleSheet");
  var SafeUrl = goog.require("goog.html.SafeUrl");
  var TagName = goog.require("goog.dom.TagName");
  var TrustedResourceUrl = goog.require("goog.html.TrustedResourceUrl");
  var TypedString = goog.require("goog.string.TypedString");
  var asserts = goog.require("goog.asserts");
  var browser = goog.require("goog.labs.userAgent.browser");
  var googArray = goog.require("goog.array");
  var googObject = goog.require("goog.object");
  var internal = goog.require("goog.string.internal");
  var tags = goog.require("goog.dom.tags");
  var trustedtypes = goog.require("goog.html.trustedtypes");
  var CONSTRUCTOR_TOKEN_PRIVATE = {};
  var SafeHtml = function(value, token) {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
    this.implementsGoogStringTypedString = true;
  };
  SafeHtml.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
  };
  SafeHtml.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
  };
  SafeHtml.unwrap = function(safeHtml) {
    return SafeHtml.unwrapTrustedHTML(safeHtml).toString();
  };
  SafeHtml.unwrapTrustedHTML = function(safeHtml) {
    if (safeHtml instanceof SafeHtml && safeHtml.constructor === SafeHtml) {
      return safeHtml.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    } else {
      asserts.fail("expected object of type SafeHtml, got '" + safeHtml + "' of type " + goog.typeOf(safeHtml));
      return "type_error:SafeHtml";
    }
  };
  SafeHtml.htmlEscape = function(textOrHtml) {
    if (textOrHtml instanceof SafeHtml) {
      return textOrHtml;
    }
    var textIsObject = typeof textOrHtml == "object";
    var textAsString;
    if (textIsObject && textOrHtml.implementsGoogStringTypedString) {
      textAsString = textOrHtml.getTypedStringValue();
    } else {
      textAsString = String(textOrHtml);
    }
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.htmlEscape(textAsString));
  };
  SafeHtml.htmlEscapePreservingNewlines = function(textOrHtml) {
    if (textOrHtml instanceof SafeHtml) {
      return textOrHtml;
    }
    var html = SafeHtml.htmlEscape(textOrHtml);
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.newLineToBr(SafeHtml.unwrap(html)));
  };
  SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(textOrHtml) {
    if (textOrHtml instanceof SafeHtml) {
      return textOrHtml;
    }
    var html = SafeHtml.htmlEscape(textOrHtml);
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.whitespaceEscape(SafeHtml.unwrap(html)));
  };
  SafeHtml.comment = function(text) {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + internal.htmlEscape(text) + "--\x3e");
  };
  SafeHtml.create = function(tagName, attributes, content) {
    SafeHtml.verifyTagName(String(tagName));
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(tagName), attributes, content);
  };
  SafeHtml.verifyTagName = function(tagName) {
    if (!VALID_NAMES_IN_TAG.test(tagName)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name \x3c" + tagName + "\x3e." : "");
    }
    if (tagName.toUpperCase() in NOT_ALLOWED_TAG_NAMES) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name \x3c" + tagName + "\x3e is not allowed for SafeHtml." : "");
    }
  };
  SafeHtml.createIframe = function(src, srcdoc, attributes, content) {
    if (src) {
      TrustedResourceUrl.unwrap(src);
    }
    var fixedAttributes = {};
    fixedAttributes["src"] = src || null;
    fixedAttributes["srcdoc"] = srcdoc && SafeHtml.unwrap(srcdoc);
    var defaultAttributes = {"sandbox":""};
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
  };
  SafeHtml.createSandboxIframe = function(src, srcdoc, attributes, content) {
    if (!SafeHtml.canUseSandboxIframe()) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
    }
    var fixedAttributes = {};
    if (src) {
      fixedAttributes["src"] = SafeUrl.unwrap(SafeUrl.sanitize(src));
    } else {
      fixedAttributes["src"] = null;
    }
    fixedAttributes["srcdoc"] = srcdoc || null;
    fixedAttributes["sandbox"] = "";
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, {}, attributes);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
  };
  SafeHtml.canUseSandboxIframe = function() {
    return goog.global["HTMLIFrameElement"] && "sandbox" in goog.global["HTMLIFrameElement"].prototype;
  };
  SafeHtml.createScriptSrc = function(src, attributes) {
    TrustedResourceUrl.unwrap(src);
    var fixedAttributes = {"src":src};
    var defaultAttributes = {};
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", combinedAttrs);
  };
  SafeHtml.createScript = function(script, attributes) {
    var attr;
    for (attr in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
        var attrLower = attr.toLowerCase();
        if (attrLower == "language" || attrLower == "src" || attrLower == "text") {
          throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + attrLower + '" attribute' : "");
        }
      }
    }
    var content = "";
    script = googArray.concat(script);
    var i = 0;
    for (; i < script.length; i++) {
      content = content + SafeScript.unwrap(script[i]);
    }
    var htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", attributes, htmlContent);
  };
  SafeHtml.createStyle = function(styleSheet, attributes) {
    var fixedAttributes = {"type":"text/css"};
    var defaultAttributes = {};
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
    var content = "";
    styleSheet = googArray.concat(styleSheet);
    var i = 0;
    for (; i < styleSheet.length; i++) {
      content = content + SafeStyleSheet.unwrap(styleSheet[i]);
    }
    var htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", combinedAttrs, htmlContent);
  };
  SafeHtml.createMetaRefresh = function(url, secs) {
    var unwrappedUrl = SafeUrl.unwrap(SafeUrl.sanitize(url));
    if (browser.isIE() || browser.isEdge()) {
      if (internal.contains(unwrappedUrl, ";")) {
        unwrappedUrl = "'" + unwrappedUrl.replace(/'/g, "%27") + "'";
      }
    }
    var attributes = {"http-equiv":"refresh", "content":(secs || 0) + "; url\x3d" + unwrappedUrl};
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", attributes);
  };
  SafeHtml.join = function(separator, parts) {
    var separatorHtml = SafeHtml.htmlEscape(separator);
    var content = [];
    var addArgument = function(argument) {
      if (Array.isArray(argument)) {
        argument.forEach(addArgument);
      } else {
        var html = SafeHtml.htmlEscape(argument);
        content.push(SafeHtml.unwrap(html));
      }
    };
    parts.forEach(addArgument);
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content.join(SafeHtml.unwrap(separatorHtml)));
  };
  SafeHtml.concat = function(var_args) {
    return SafeHtml.join(SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
  };
  SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(html) {
    var noinlineHtml = html;
    var policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
    var trustedHtml = policy ? policy.createHTML(noinlineHtml) : noinlineHtml;
    return new SafeHtml(trustedHtml, CONSTRUCTOR_TOKEN_PRIVATE);
  };
  SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(tagName, attributes, content) {
    var result = "\x3c" + tagName;
    result = result + SafeHtml.stringifyAttributes(tagName, attributes);
    if (content == null) {
      content = [];
    } else if (!Array.isArray(content)) {
      content = [content];
    }
    if (tags.isVoidTag(tagName.toLowerCase())) {
      asserts.assert(!content.length, "Void tag \x3c" + tagName + "\x3e does not allow content.");
      result = result + "\x3e";
    } else {
      var html = SafeHtml.concat(content);
      result = result + ("\x3e" + SafeHtml.unwrap(html) + "\x3c/" + tagName + "\x3e");
    }
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(result);
  };
  SafeHtml.stringifyAttributes = function(tagName, attributes) {
    var result = "";
    if (attributes) {
      var name;
      for (name in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, name)) {
          if (!VALID_NAMES_IN_TAG.test(name)) {
            throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + name + '".' : "");
          }
          var value = attributes[name];
          if (value == null) {
            continue;
          }
          result = result + (" " + getAttrNameAndValue(tagName, name, value));
        }
      }
    }
    return result;
  };
  SafeHtml.combineAttributes = function(fixedAttributes, defaultAttributes, attributes) {
    var combinedAttributes = {};
    var name;
    for (name in fixedAttributes) {
      if (Object.prototype.hasOwnProperty.call(fixedAttributes, name)) {
        asserts.assert(name.toLowerCase() == name, "Must be lower case");
        combinedAttributes[name] = fixedAttributes[name];
      }
    }
    var name$jscomp$0;
    for (name$jscomp$0 in defaultAttributes) {
      if (Object.prototype.hasOwnProperty.call(defaultAttributes, name$jscomp$0)) {
        asserts.assert(name$jscomp$0.toLowerCase() == name$jscomp$0, "Must be lower case");
        combinedAttributes[name$jscomp$0] = defaultAttributes[name$jscomp$0];
      }
    }
    if (attributes) {
      var name$jscomp$1;
      for (name$jscomp$1 in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, name$jscomp$1)) {
          var nameLower = name$jscomp$1.toLowerCase();
          if (nameLower in fixedAttributes) {
            throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + nameLower + '" attribute, got "' + name$jscomp$1 + '" with value "' + attributes[name$jscomp$1] + '"' : "");
          }
          if (nameLower in defaultAttributes) {
            delete combinedAttributes[nameLower];
          }
          combinedAttributes[name$jscomp$1] = attributes[name$jscomp$1];
        }
      }
    }
    return combinedAttributes;
  };
  SafeHtml.ENABLE_ERROR_MESSAGES = goog.define("goog.html.SafeHtml.ENABLE_ERROR_MESSAGES", goog.DEBUG);
  SafeHtml.SUPPORT_STYLE_ATTRIBUTE = goog.define("goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE", true);
  SafeHtml.TextOrHtml_;
  SafeHtml.from = SafeHtml.htmlEscape;
  var VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/;
  var URL_ATTRIBUTES = googObject.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
  var NOT_ALLOWED_TAG_NAMES = googObject.createSet(TagName.APPLET, TagName.BASE, TagName.EMBED, TagName.IFRAME, TagName.LINK, TagName.MATH, TagName.META, TagName.OBJECT, TagName.SCRIPT, TagName.STYLE, TagName.SVG, TagName.TEMPLATE);
  SafeHtml.AttributeValue;
  SafeHtml.DOCTYPE_HTML = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!DOCTYPE html\x3e");
  }}.valueOf();
  SafeHtml.EMPTY = new SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", CONSTRUCTOR_TOKEN_PRIVATE);
  SafeHtml.BR = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3cbr\x3e");
  }}.valueOf();
  exports = SafeHtml;
  return exports;
});

//# sourceMappingURL=goog.html.safehtml.js.map
