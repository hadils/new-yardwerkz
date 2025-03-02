goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.dom.element");
  goog.module.declareLegacyNamespace();
  var NodeType = goog.require("goog.dom.NodeType");
  var TagName = goog.require("goog.dom.TagName");
  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  var isElement = function(value) {
    return goog.isObject(value) && value.nodeType === NodeType.ELEMENT;
  };
  var isHtmlElement = function(value) {
    return goog.isObject(value) && isElement(value) && (!value.namespaceURI || value.namespaceURI === HTML_NAMESPACE);
  };
  var isHtmlElementOfType = function(value, tagName) {
    return goog.isObject(value) && isHtmlElement(value) && value.tagName.toUpperCase() === tagName.toString();
  };
  var isHtmlAnchorElement = function(value) {
    return isHtmlElementOfType(value, TagName.A);
  };
  var isHtmlButtonElement = function(value) {
    return isHtmlElementOfType(value, TagName.BUTTON);
  };
  var isHtmlLinkElement = function(value) {
    return isHtmlElementOfType(value, TagName.LINK);
  };
  var isHtmlImageElement = function(value) {
    return isHtmlElementOfType(value, TagName.IMG);
  };
  var isHtmlAudioElement = function(value) {
    return isHtmlElementOfType(value, TagName.AUDIO);
  };
  var isHtmlVideoElement = function(value) {
    return isHtmlElementOfType(value, TagName.VIDEO);
  };
  var isHtmlInputElement = function(value) {
    return isHtmlElementOfType(value, TagName.INPUT);
  };
  var isHtmlTextAreaElement = function(value) {
    return isHtmlElementOfType(value, TagName.TEXTAREA);
  };
  var isHtmlCanvasElement = function(value) {
    return isHtmlElementOfType(value, TagName.CANVAS);
  };
  var isHtmlEmbedElement = function(value) {
    return isHtmlElementOfType(value, TagName.EMBED);
  };
  var isHtmlFormElement = function(value) {
    return isHtmlElementOfType(value, TagName.FORM);
  };
  var isHtmlFrameElement = function(value) {
    return isHtmlElementOfType(value, TagName.FRAME);
  };
  var isHtmlIFrameElement = function(value) {
    return isHtmlElementOfType(value, TagName.IFRAME);
  };
  var isHtmlObjectElement = function(value) {
    return isHtmlElementOfType(value, TagName.OBJECT);
  };
  var isHtmlScriptElement = function(value) {
    return isHtmlElementOfType(value, TagName.SCRIPT);
  };
  exports = {isElement:isElement, isHtmlElement:isHtmlElement, isHtmlElementOfType:isHtmlElementOfType, isHtmlAnchorElement:isHtmlAnchorElement, isHtmlButtonElement:isHtmlButtonElement, isHtmlLinkElement:isHtmlLinkElement, isHtmlImageElement:isHtmlImageElement, isHtmlAudioElement:isHtmlAudioElement, isHtmlVideoElement:isHtmlVideoElement, isHtmlInputElement:isHtmlInputElement, isHtmlTextAreaElement:isHtmlTextAreaElement, isHtmlCanvasElement:isHtmlCanvasElement, isHtmlEmbedElement:isHtmlEmbedElement, 
  isHtmlFormElement:isHtmlFormElement, isHtmlFrameElement:isHtmlFrameElement, isHtmlIFrameElement:isHtmlIFrameElement, isHtmlObjectElement:isHtmlObjectElement, isHtmlScriptElement:isHtmlScriptElement};
  return exports;
});

//# sourceMappingURL=goog.dom.element.js.map
