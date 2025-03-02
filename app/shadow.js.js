goog.provide("shadow.js");
shadow.js.files = {};
shadow.js.nativeProvides = {};
shadow.js.NODE_ENV = goog.define("shadow.js.NODE_ENV", "development");
shadow.js.requireStack = [];
shadow.js.exportCopy = function(module, other) {
  var copy = {};
  var exports = module["exports"];
  var $jscomp$loop$1680581215$0 = {};
  var key;
  for (key in other) {
    $jscomp$loop$1680581215$0 = {key$jscomp$106:$jscomp$loop$1680581215$0.key$jscomp$106};
    $jscomp$loop$1680581215$0.key$jscomp$106 = key;
    if ($jscomp$loop$1680581215$0.key$jscomp$106 == "default" || $jscomp$loop$1680581215$0.key$jscomp$106 in exports || $jscomp$loop$1680581215$0.key$jscomp$106 in copy) {
      continue;
    }
    copy[$jscomp$loop$1680581215$0.key$jscomp$106] = {enumerable:true, get:function($jscomp$loop$1680581215$0) {
      return function() {
        return other[$jscomp$loop$1680581215$0.key$jscomp$106];
      };
    }($jscomp$loop$1680581215$0)};
  }
  Object.defineProperties(exports, copy);
};
shadow.js.jsRequire = function(name, opts) {
  var nativeObj = shadow.js.nativeProvides[name];
  if (nativeObj !== undefined) {
    return nativeObj;
  }
  try {
    if (goog.DEBUG) {
      if (name instanceof String && name.indexOf("/") != -1) {
        console.warn("Tried to dynamically require '" + name + "' from '" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + "'. This is not supported and may cause issues.");
      }
    }
    shadow.js.requireStack.push(name);
    var module = shadow.js.files[name];
    var moduleFn = shadow$provide[name];
    if (module === undefined) {
      if (moduleFn === undefined) {
        throw "Module not provided: " + name;
      }
      module = {};
      module["exports"] = {};
      shadow.js.files[name] = module;
    }
    if (moduleFn) {
      delete shadow$provide[name];
      try {
        moduleFn.call(module, goog.global, shadow.js.jsRequire, module, module["exports"]);
      } catch (e) {
        console.warn("shadow-cljs - failed to load", name);
        console.error(e);
        throw e;
      }
      if (opts) {
        var globals = opts["globals"];
        if (globals) {
          var i = 0;
          for (; i < globals.length; i++) {
            window[globals[i]] = module["exports"];
          }
        }
      }
    }
  } finally {
    shadow.js.requireStack.pop();
  }
  return module["exports"];
};
shadow.js.jsRequire["cache"] = {};
shadow.js.jsRequire["resolve"] = function(name) {
  return name;
};
shadow.js.jsRequire["exportCopy"] = shadow.js.exportCopy;
shadow.js.jsRequire["esmDefault"] = function(mod) {
  return mod && mod["__esModule"] ? mod : {"default":mod};
};
shadow.js.jsRequire["dynamic"] = function(name) {
  return Promise.resolve().then(function() {
    return shadow.js.jsRequire(name);
  });
};
shadow.js.modules = {};
shadow.js.require = function(name, opts) {
  return shadow.js.jsRequire(name, opts);
};

//# sourceMappingURL=shadow.js.js.map
