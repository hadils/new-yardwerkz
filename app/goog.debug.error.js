goog.loadModule(function(exports) {
  function DebugError(msg, cause) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DebugError);
    } else {
      var stack = (new Error()).stack;
      if (stack) {
        this.stack = stack;
      }
    }
    if (msg) {
      this.message = String(msg);
    }
    if (cause !== undefined) {
      this.cause = cause;
    }
    this.reportErrorToServer = true;
  }
  "use strict";
  goog.module("goog.debug.Error");
  goog.module.declareLegacyNamespace();
  goog.inherits(DebugError, Error);
  DebugError.prototype.name = "CustomError";
  exports = DebugError;
  return exports;
});

//# sourceMappingURL=goog.debug.error.js.map
