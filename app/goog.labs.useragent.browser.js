goog.loadModule(function(exports) {
  function useUserAgentDataBrand(ignoreClientHintsFlag) {
    ignoreClientHintsFlag = ignoreClientHintsFlag === void 0 ? false : ignoreClientHintsFlag;
    if (util.ASSUME_CLIENT_HINTS_SUPPORT) {
      return true;
    }
    if (!ignoreClientHintsFlag && !useClientHints()) {
      return false;
    }
    var userAgentData = util.getUserAgentData();
    return !!userAgentData && userAgentData.brands.length > 0;
  }
  function hasFullVersionList() {
    return isAtLeast(Brand.CHROMIUM, 98);
  }
  function matchOpera() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Opera");
  }
  function matchIE() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Trident") || util.matchUserAgent("MSIE");
  }
  function matchEdgeHtml() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Edge");
  }
  function matchEdgeChromium() {
    if (useUserAgentDataBrand()) {
      return util.matchUserAgentDataBrand(Brand.EDGE);
    }
    return util.matchUserAgent("Edg/");
  }
  function matchOperaChromium() {
    if (useUserAgentDataBrand()) {
      return util.matchUserAgentDataBrand(Brand.OPERA);
    }
    return util.matchUserAgent("OPR");
  }
  function matchFirefox() {
    return util.matchUserAgent("Firefox") || util.matchUserAgent("FxiOS");
  }
  function matchSafari() {
    return util.matchUserAgent("Safari") && !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() || matchEdgeChromium() || matchOperaChromium() || matchFirefox() || isSilk() || util.matchUserAgent("Android"));
  }
  function matchCoast() {
    if (useUserAgentDataBrand()) {
      return false;
    }
    return util.matchUserAgent("Coast");
  }
  function matchIosWebview() {
    return (util.matchUserAgent("iPad") || util.matchUserAgent("iPhone")) && !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() && util.matchUserAgent("AppleWebKit");
  }
  function matchChrome() {
    if (useUserAgentDataBrand()) {
      return util.matchUserAgentDataBrand(Brand.CHROMIUM);
    }
    return (util.matchUserAgent("Chrome") || util.matchUserAgent("CriOS")) && !matchEdgeHtml() || isSilk();
  }
  function matchAndroidBrowser() {
    return util.matchUserAgent("Android") && !(isChrome() || isFirefox() || isOpera() || isSilk());
  }
  function isSilk() {
    return util.matchUserAgent("Silk");
  }
  function createVersionMap(versionTuples) {
    var versionMap = {};
    versionTuples.forEach(function(tuple) {
      var key = tuple[0];
      var value = tuple[1];
      versionMap[key] = value;
    });
    return function(keys) {
      return versionMap[keys.find(function(key) {
        return key in versionMap;
      })] || "";
    };
  }
  function getVersion() {
    var userAgentString = util.getUserAgent();
    if (isIE()) {
      return getIEVersion(userAgentString);
    }
    var versionTuples = util.extractVersionTuples(userAgentString);
    var lookUpValueWithKeys = createVersionMap(versionTuples);
    if (isOpera()) {
      return lookUpValueWithKeys(["Version", "Opera"]);
    }
    if (isEdge()) {
      return lookUpValueWithKeys(["Edge"]);
    }
    if (isEdgeChromium()) {
      return lookUpValueWithKeys(["Edg"]);
    }
    if (isSilk()) {
      return lookUpValueWithKeys(["Silk"]);
    }
    if (isChrome()) {
      return lookUpValueWithKeys(["Chrome", "CriOS", "HeadlessChrome"]);
    }
    var tuple = versionTuples[2];
    return tuple && tuple[1] || "";
  }
  function isVersionOrHigher(version) {
    return compareVersions(getVersion(), version) >= 0;
  }
  function getIEVersion(userAgent) {
    var rv = /rv: *([\d\.]*)/.exec(userAgent);
    if (rv && rv[1]) {
      return rv[1];
    }
    var version = "";
    var msie = /MSIE +([\d\.]+)/.exec(userAgent);
    if (msie && msie[1]) {
      var tridentVersion = /Trident\/(\d.\d)/.exec(userAgent);
      if (msie[1] == "7.0") {
        if (tridentVersion && tridentVersion[1]) {
          switch(tridentVersion[1]) {
            case "4.0":
              version = "8.0";
              break;
            case "5.0":
              version = "9.0";
              break;
            case "6.0":
              version = "10.0";
              break;
            case "7.0":
              version = "11.0";
              break;
          }
        } else {
          version = "7.0";
        }
      } else {
        version = msie[1];
      }
    }
    return version;
  }
  function getFullVersionFromUserAgentString(browser) {
    var userAgentString = util.getUserAgent();
    if (browser === Brand.IE) {
      return isIE() ? getIEVersion(userAgentString) : "";
    }
    var versionTuples = util.extractVersionTuples(userAgentString);
    var lookUpValueWithKeys = createVersionMap(versionTuples);
    switch(browser) {
      case Brand.OPERA:
        if (isOpera()) {
          return lookUpValueWithKeys(["Version", "Opera"]);
        } else if (isOperaChromium()) {
          return lookUpValueWithKeys(["OPR"]);
        }
        break;
      case Brand.EDGE:
        if (isEdge()) {
          return lookUpValueWithKeys(["Edge"]);
        } else if (isEdgeChromium()) {
          return lookUpValueWithKeys(["Edg"]);
        }
        break;
      case Brand.CHROMIUM:
        if (isChrome()) {
          return lookUpValueWithKeys(["Chrome", "CriOS", "HeadlessChrome"]);
        }
        break;
    }
    if (browser === Brand.FIREFOX && isFirefox() || browser === Brand.SAFARI && isSafari() || browser === Brand.ANDROID_BROWSER && isAndroidBrowser() || browser === Brand.SILK && isSilk()) {
      var tuple = versionTuples[2];
      return tuple && tuple[1] || "";
    }
    return "";
  }
  function versionOf_(browser) {
    var versionParts;
    if (useUserAgentDataBrand() && browser !== Brand.SILK) {
      var data = util.getUserAgentData();
      var matchingBrand = data.brands.find(function($jscomp$destructuring$var16) {
        var $jscomp$destructuring$var17 = $jscomp$destructuring$var16;
        var brand = $jscomp$destructuring$var17.brand;
        return brand === browser;
      });
      if (!matchingBrand || !matchingBrand.version) {
        return NaN;
      }
      versionParts = matchingBrand.version.split(".");
    } else {
      var fullVersion = getFullVersionFromUserAgentString(browser);
      if (fullVersion === "") {
        return NaN;
      }
      versionParts = fullVersion.split(".");
    }
    if (versionParts.length === 0) {
      return NaN;
    }
    var majorVersion = versionParts[0];
    return Number(majorVersion);
  }
  function isAtLeast(brand, majorVersion) {
    assert(Math.floor(majorVersion) === majorVersion, "Major version must be an integer");
    return versionOf_(brand) >= majorVersion;
  }
  function isAtMost(brand, majorVersion) {
    assert(Math.floor(majorVersion) === majorVersion, "Major version must be an integer");
    return versionOf_(brand) <= majorVersion;
  }
  function loadFullVersions() {
    return $jscomp.asyncExecutePromiseGeneratorProgram(function($jscomp$generator$context$556352062$32) {
      if ($jscomp$generator$context$556352062$32.nextAddress == 1) {
        if (!useUserAgentDataBrand(true)) {
          return $jscomp$generator$context$556352062$32.jumpTo(2);
        }
        return $jscomp$generator$context$556352062$32.yield(fullVersionList.load(), 2);
      }
      preUachHasLoaded = true;
      $jscomp$generator$context$556352062$32.jumpToEnd();
    });
  }
  function fullVersionOf(browser) {
    var fallbackVersionString = "";
    if (!hasFullVersionList()) {
      fallbackVersionString = getFullVersionFromUserAgentString(browser);
    }
    var useUach = browser !== Brand.SILK && useUserAgentDataBrand(true);
    if (useUach) {
      var data = util.getUserAgentData();
      if (!data.brands.find(function($jscomp$destructuring$var22) {
        var $jscomp$destructuring$var23 = $jscomp$destructuring$var22;
        var brand = $jscomp$destructuring$var23.brand;
        return brand === browser;
      })) {
        return undefined;
      }
    } else if (fallbackVersionString === "") {
      return undefined;
    }
    return new HighEntropyBrandVersion(browser, useUach, fallbackVersionString);
  }
  function getVersionStringForLogging(browser) {
    if (useUserAgentDataBrand(true)) {
      var fullVersionObj = fullVersionOf(browser);
      if (fullVersionObj) {
        var fullVersion = fullVersionObj.getIfLoaded();
        if (fullVersion) {
          return fullVersion.toVersionStringForLogging();
        }
        var data = util.getUserAgentData();
        var matchingBrand = data.brands.find(function($jscomp$destructuring$var24) {
          var $jscomp$destructuring$var25 = $jscomp$destructuring$var24;
          var brand = $jscomp$destructuring$var25.brand;
          return brand === browser;
        });
        assertExists(matchingBrand);
        return matchingBrand.version;
      }
      return "";
    } else {
      return getFullVersionFromUserAgentString(browser);
    }
  }
  "use strict";
  goog.module("goog.labs.userAgent.browser");
  goog.module.declareLegacyNamespace();
  var util = goog.require("goog.labs.userAgent.util");
  var $jscomp$destructuring$var11 = goog.require("goog.labs.userAgent.highEntropy.highEntropyValue");
  var AsyncValue = $jscomp$destructuring$var11.AsyncValue;
  var Version = $jscomp$destructuring$var11.Version;
  var $jscomp$destructuring$var12 = goog.require("goog.asserts");
  var assert = $jscomp$destructuring$var12.assert;
  var assertExists = $jscomp$destructuring$var12.assertExists;
  var $jscomp$destructuring$var13 = goog.require("goog.string.internal");
  var compareVersions = $jscomp$destructuring$var13.compareVersions;
  var $jscomp$destructuring$var14 = goog.require("goog.labs.userAgent.highEntropy.highEntropyData");
  var fullVersionList = $jscomp$destructuring$var14.fullVersionList;
  var $jscomp$destructuring$var15 = goog.require("goog.labs.userAgent");
  var useClientHints = $jscomp$destructuring$var15.useClientHints;
  var Brand = {ANDROID_BROWSER:"Android Browser", CHROMIUM:"Chromium", EDGE:"Microsoft Edge", FIREFOX:"Firefox", IE:"Internet Explorer", OPERA:"Opera", SAFARI:"Safari", SILK:"Silk"};
  exports.Brand = Brand;
  var isOpera = matchOpera;
  exports.isOpera = isOpera;
  var isIE = matchIE;
  exports.isIE = isIE;
  var isEdge = matchEdgeHtml;
  exports.isEdge = isEdge;
  var isEdgeChromium = matchEdgeChromium;
  exports.isEdgeChromium = isEdgeChromium;
  var isOperaChromium = matchOperaChromium;
  exports.isOperaChromium = isOperaChromium;
  var isFirefox = matchFirefox;
  exports.isFirefox = isFirefox;
  var isSafari = matchSafari;
  exports.isSafari = isSafari;
  var isCoast = matchCoast;
  exports.isCoast = isCoast;
  var isIosWebview = matchIosWebview;
  exports.isIosWebview = isIosWebview;
  var isChrome = matchChrome;
  exports.isChrome = isChrome;
  var isAndroidBrowser = matchAndroidBrowser;
  exports.isAndroidBrowser = isAndroidBrowser;
  exports.isSilk = isSilk;
  exports.getVersion = getVersion;
  exports.isVersionOrHigher = isVersionOrHigher;
  exports.isAtLeast = isAtLeast;
  exports.isAtMost = isAtMost;
  var HighEntropyBrandVersion = function(brand, useUach, fallbackVersion) {
    this.brand_ = brand;
    this.version_ = new Version(fallbackVersion);
    this.useUach_ = useUach;
  };
  HighEntropyBrandVersion.prototype.getIfLoaded = function() {
    var $jscomp$this$556352062$25 = this;
    if (this.useUach_) {
      var loadedVersionList = fullVersionList.getIfLoaded();
      if (loadedVersionList !== undefined) {
        var matchingBrand = loadedVersionList.find(function($jscomp$destructuring$var18) {
          var $jscomp$destructuring$var19 = $jscomp$destructuring$var18;
          var brand = $jscomp$destructuring$var19.brand;
          return $jscomp$this$556352062$25.brand_ === brand;
        });
        assertExists(matchingBrand);
        return new Version(matchingBrand.version);
      }
    }
    if (preUachHasLoaded) {
      return this.version_;
    }
    return;
  };
  HighEntropyBrandVersion.prototype.load = function() {
    var $jscomp$async$this = this;
    var loadedVersionList;
    var matchingBrand;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function($jscomp$generator$context$556352062$33) {
      if ($jscomp$generator$context$556352062$33.nextAddress == 1) {
        if ($jscomp$async$this.useUach_) {
          return $jscomp$generator$context$556352062$33.yield(fullVersionList.load(), 5);
        }
        return $jscomp$generator$context$556352062$33.yield(0, 3);
      }
      if ($jscomp$generator$context$556352062$33.nextAddress != 3) {
        loadedVersionList = $jscomp$generator$context$556352062$33.yieldResult;
        if (loadedVersionList !== undefined) {
          matchingBrand = loadedVersionList.find(function($jscomp$destructuring$var20) {
            var $jscomp$destructuring$var21 = $jscomp$destructuring$var20;
            var brand = $jscomp$destructuring$var21.brand;
            return $jscomp$async$this.brand_ === brand;
          });
          assertExists(matchingBrand);
          return $jscomp$generator$context$556352062$33.return(new Version(matchingBrand.version));
        }
      }
      preUachHasLoaded = true;
      return $jscomp$generator$context$556352062$33.return($jscomp$async$this.version_);
    });
  };
  var preUachHasLoaded = false;
  exports.loadFullVersions = loadFullVersions;
  exports.resetForTesting = function() {
    preUachHasLoaded = false;
    fullVersionList.resetForTesting();
  };
  exports.fullVersionOf = fullVersionOf;
  exports.getVersionStringForLogging = getVersionStringForLogging;
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.browser.js.map
