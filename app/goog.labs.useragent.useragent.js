goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent");
  goog.module.declareLegacyNamespace();
  var flags = goog.require("goog.flags");
  var USE_CLIENT_HINTS_OVERRIDE = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE", "");
  var USE_CLIENT_HINTS = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS", false);
  var forceClientHintsInTests = false;
  exports.setUseClientHintsForTesting = function(use) {
    forceClientHintsInTests = use;
  };
  var useClientHintsRuntimeOverride = USE_CLIENT_HINTS_OVERRIDE ? !!goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) : false;
  exports.useClientHints = function() {
    return flags.USE_USER_AGENT_CLIENT_HINTS || USE_CLIENT_HINTS || useClientHintsRuntimeOverride || forceClientHintsInTests;
  };
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.useragent.js.map
