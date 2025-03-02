goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.highEntropy.highEntropyValue");
  var util = goog.require("goog.labs.userAgent.util");
  var $jscomp$destructuring$var9 = goog.require("goog.string.internal");
  var compareVersions = $jscomp$destructuring$var9.compareVersions;
  var AsyncValue = function() {
  };
  AsyncValue.prototype.getIfLoaded = function() {
  };
  AsyncValue.prototype.load = function() {
  };
  exports.AsyncValue = AsyncValue;
  var HighEntropyValue = function(key) {
    this.key_ = key;
    this.value_ = undefined;
    this.promise_ = undefined;
    this.pending_ = false;
  };
  HighEntropyValue.prototype.getIfLoaded = function() {
    var userAgentData = util.getUserAgentData();
    if (!userAgentData) {
      return undefined;
    }
    return this.value_;
  };
  HighEntropyValue.prototype.load = function() {
    var $jscomp$async$this = this;
    var userAgentData;
    return $jscomp.asyncExecutePromiseGeneratorProgram(function($jscomp$generator$context$949581286$15) {
      if ($jscomp$generator$context$949581286$15.nextAddress == 1) {
        userAgentData = util.getUserAgentData();
        if (!userAgentData) {
          return $jscomp$generator$context$949581286$15.return(undefined);
        }
        if (!$jscomp$async$this.promise_) {
          $jscomp$async$this.pending_ = true;
          $jscomp$async$this.promise_ = function() {
            var dataValues;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function($jscomp$generator$context$949581286$14) {
              if ($jscomp$generator$context$949581286$14.nextAddress == 1) {
                $jscomp$generator$context$949581286$14.setFinallyBlock(2);
                return $jscomp$generator$context$949581286$14.yield(userAgentData.getHighEntropyValues([$jscomp$async$this.key_]), 4);
              }
              if ($jscomp$generator$context$949581286$14.nextAddress != 2) {
                dataValues = $jscomp$generator$context$949581286$14.yieldResult;
                $jscomp$async$this.value_ = dataValues[$jscomp$async$this.key_];
                return $jscomp$generator$context$949581286$14.return($jscomp$async$this.value_);
              }
              $jscomp$generator$context$949581286$14.enterFinallyBlock();
              $jscomp$async$this.pending_ = false;
              return $jscomp$generator$context$949581286$14.leaveFinallyBlock(0);
            });
          }();
        }
        return $jscomp$generator$context$949581286$15.yield($jscomp$async$this.promise_, 2);
      }
      return $jscomp$generator$context$949581286$15.return($jscomp$generator$context$949581286$15.yieldResult);
    });
  };
  HighEntropyValue.prototype.resetForTesting = function() {
    if (this.pending_) {
      throw new Error("Unsafe call to resetForTesting");
    }
    this.promise_ = undefined;
    this.value_ = undefined;
    this.pending_ = false;
  };
  exports.HighEntropyValue = HighEntropyValue;
  var Version = function(versionString) {
    this.versionString_ = versionString;
  };
  Version.prototype.toVersionStringForLogging = function() {
    return this.versionString_;
  };
  Version.prototype.isAtLeast = function(version) {
    return compareVersions(this.versionString_, version) >= 0;
  };
  exports.Version = Version;
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.highentropy.highentropyvalue.js.map
