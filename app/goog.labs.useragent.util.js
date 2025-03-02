goog.loadModule(function(exports) {
  function getNativeUserAgentString() {
    var navigator = getNavigator();
    if (navigator) {
      var userAgent = navigator.userAgent;
      if (userAgent) {
        return userAgent;
      }
    }
    return "";
  }
  function getNativeUserAgentData() {
    var navigator = getNavigator();
    if (navigator) {
      return navigator.userAgentData || null;
    }
    return null;
  }
  function getNavigator() {
    return goog.global.navigator;
  }
  function setUserAgent(userAgent) {
    userAgentInternal = typeof userAgent === "string" ? userAgent : getNativeUserAgentString();
  }
  function getUserAgent() {
    return userAgentInternal == null ? getNativeUserAgentString() : userAgentInternal;
  }
  function setUserAgentData(userAgentData) {
    userAgentDataInternal = userAgentData;
  }
  function resetUserAgentData() {
    userAgentDataInternal = getNativeUserAgentData();
  }
  function getUserAgentData() {
    return userAgentDataInternal;
  }
  function matchUserAgentDataBrand(str) {
    if (!useClientHints()) {
      return false;
    }
    var data = getUserAgentData();
    if (!data) {
      return false;
    }
    return data.brands.some(function($jscomp$destructuring$var7) {
      var $jscomp$destructuring$var8 = $jscomp$destructuring$var7;
      var brand = $jscomp$destructuring$var8.brand;
      return brand && contains(brand, str);
    });
  }
  function matchUserAgent(str) {
    var userAgent = getUserAgent();
    return contains(userAgent, str);
  }
  function matchUserAgentIgnoreCase(str) {
    var userAgent = getUserAgent();
    return caseInsensitiveContains(userAgent, str);
  }
  function extractVersionTuples(userAgent) {
    var versionRegExp = new RegExp("([A-Z][\\w ]+)" + "/" + "([^\\s]+)" + "\\s*" + "(?:\\((.*?)\\))?", "g");
    var data = [];
    var match;
    for (; match = versionRegExp.exec(userAgent);) {
      data.push([match[1], match[2], match[3] || undefined]);
    }
    return data;
  }
  "use strict";
  goog.module("goog.labs.userAgent.util");
  goog.module.declareLegacyNamespace();
  var $jscomp$destructuring$var5 = goog.require("goog.string.internal");
  var caseInsensitiveContains = $jscomp$destructuring$var5.caseInsensitiveContains;
  var contains = $jscomp$destructuring$var5.contains;
  var $jscomp$destructuring$var6 = goog.require("goog.labs.userAgent");
  var useClientHints = $jscomp$destructuring$var6.useClientHints;
  var ASSUME_CLIENT_HINTS_SUPPORT = false;
  var userAgentInternal = null;
  var userAgentDataInternal = getNativeUserAgentData();
  exports = {ASSUME_CLIENT_HINTS_SUPPORT:ASSUME_CLIENT_HINTS_SUPPORT, extractVersionTuples:extractVersionTuples, getNativeUserAgentString:getNativeUserAgentString, getUserAgent:getUserAgent, getUserAgentData:getUserAgentData, matchUserAgent:matchUserAgent, matchUserAgentDataBrand:matchUserAgentDataBrand, matchUserAgentIgnoreCase:matchUserAgentIgnoreCase, resetUserAgentData:resetUserAgentData, setUserAgent:setUserAgent, setUserAgentData:setUserAgentData};
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.util.js.map
