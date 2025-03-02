goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.asserts.dom");
  goog.module.declareLegacyNamespace();
  var TagName = goog.require("goog.dom.TagName");
  var asserts = goog.require("goog.asserts");
  var element = goog.require("goog.dom.element");
  var assertIsElement = function(value) {
    if (asserts.ENABLE_ASSERTS && !element.isElement(value)) {
      asserts.fail("Argument is not an Element; got: " + debugStringForType(value));
    }
    return value;
  };
  var assertIsHtmlElement = function(value) {
    if (asserts.ENABLE_ASSERTS && !element.isHtmlElement(value)) {
      asserts.fail("Argument is not an HTML Element; got: " + debugStringForType(value));
    }
    return value;
  };
  var assertIsHtmlElementOfType = function(value, tagName) {
    if (asserts.ENABLE_ASSERTS && !element.isHtmlElementOfType(value, tagName)) {
      asserts.fail("Argument is not an HTML Element with tag name " + (tagName.toString() + "; got: " + debugStringForType(value)));
    }
    return value;
  };
  var assertIsHtmlAnchorElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.A);
  };
  var assertIsHtmlButtonElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.BUTTON);
  };
  var assertIsHtmlLinkElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.LINK);
  };
  var assertIsHtmlImageElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.IMG);
  };
  var assertIsHtmlAudioElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.AUDIO);
  };
  var assertIsHtmlVideoElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.VIDEO);
  };
  var assertIsHtmlInputElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.INPUT);
  };
  var assertIsHtmlTextAreaElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.TEXTAREA);
  };
  var assertIsHtmlCanvasElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.CANVAS);
  };
  var assertIsHtmlEmbedElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.EMBED);
  };
  var assertIsHtmlFormElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.FORM);
  };
  var assertIsHtmlFrameElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.FRAME);
  };
  var assertIsHtmlIFrameElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.IFRAME);
  };
  var assertIsHtmlObjectElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.OBJECT);
  };
  var assertIsHtmlScriptElement = function(value) {
    return assertIsHtmlElementOfType(value, TagName.SCRIPT);
  };
  var debugStringForType = function(value) {
    if (goog.isObject(value)) {
      try {
        return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
      } catch (e) {
        return "\x3cobject could not be stringified\x3e";
      }
    } else {
      return value === undefined ? "undefined" : value === null ? "null" : typeof value;
    }
  };
  exports = {assertIsElement:assertIsElement, assertIsHtmlElement:assertIsHtmlElement, assertIsHtmlElementOfType:assertIsHtmlElementOfType, assertIsHtmlAnchorElement:assertIsHtmlAnchorElement, assertIsHtmlButtonElement:assertIsHtmlButtonElement, assertIsHtmlLinkElement:assertIsHtmlLinkElement, assertIsHtmlImageElement:assertIsHtmlImageElement, assertIsHtmlAudioElement:assertIsHtmlAudioElement, assertIsHtmlVideoElement:assertIsHtmlVideoElement, assertIsHtmlInputElement:assertIsHtmlInputElement, assertIsHtmlTextAreaElement:assertIsHtmlTextAreaElement, 
  assertIsHtmlCanvasElement:assertIsHtmlCanvasElement, assertIsHtmlEmbedElement:assertIsHtmlEmbedElement, assertIsHtmlFormElement:assertIsHtmlFormElement, assertIsHtmlFrameElement:assertIsHtmlFrameElement, assertIsHtmlIFrameElement:assertIsHtmlIFrameElement, assertIsHtmlObjectElement:assertIsHtmlObjectElement, assertIsHtmlScriptElement:assertIsHtmlScriptElement};
  return exports;
});

//# sourceMappingURL=goog.asserts.dom.js.map
