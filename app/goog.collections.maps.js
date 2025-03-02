goog.loadModule(function(exports) {
  function setAll(map, entries) {
    if (!entries) {
      return;
    }
    var $jscomp$iter$0 = $jscomp.makeIterator(entries);
    var $jscomp$key$m553479753$13$ = $jscomp$iter$0.next();
    for (; !$jscomp$key$m553479753$13$.done; $jscomp$key$m553479753$13$ = $jscomp$iter$0.next()) {
      var $jscomp$destructuring$var26 = $jscomp$key$m553479753$13$.value;
      {
        var $jscomp$destructuring$var27 = $jscomp.makeIterator($jscomp$destructuring$var26);
        var k = $jscomp$destructuring$var27.next().value;
        var v = $jscomp$destructuring$var27.next().value;
        {
          map.set(k, v);
        }
      }
    }
  }
  function hasValue(map, val, valueEqualityFn) {
    valueEqualityFn = valueEqualityFn === void 0 ? defaultEqualityFn : valueEqualityFn;
    var $jscomp$iter$1 = $jscomp.makeIterator(map.values());
    var $jscomp$key$m553479753$14$v = $jscomp$iter$1.next();
    for (; !$jscomp$key$m553479753$14$v.done; $jscomp$key$m553479753$14$v = $jscomp$iter$1.next()) {
      var v = $jscomp$key$m553479753$14$v.value;
      {
        if (valueEqualityFn(v, val)) {
          return true;
        }
      }
    }
    return false;
  }
  function equals(map, otherMap, valueEqualityFn) {
    valueEqualityFn = valueEqualityFn === void 0 ? defaultEqualityFn : valueEqualityFn;
    if (map === otherMap) {
      return true;
    }
    if (map.size !== otherMap.size) {
      return false;
    }
    var $jscomp$iter$2 = $jscomp.makeIterator(map.keys());
    var $jscomp$key$m553479753$15$key = $jscomp$iter$2.next();
    for (; !$jscomp$key$m553479753$15$key.done; $jscomp$key$m553479753$15$key = $jscomp$iter$2.next()) {
      var key = $jscomp$key$m553479753$15$key.value;
      {
        if (!otherMap.has(key)) {
          return false;
        }
        if (!valueEqualityFn(map.get(key), otherMap.get(key))) {
          return false;
        }
      }
    }
    return true;
  }
  function transpose(map) {
    var transposed = new Map();
    var $jscomp$iter$3 = $jscomp.makeIterator(map.keys());
    var $jscomp$key$m553479753$16$key = $jscomp$iter$3.next();
    for (; !$jscomp$key$m553479753$16$key.done; $jscomp$key$m553479753$16$key = $jscomp$iter$3.next()) {
      var key = $jscomp$key$m553479753$16$key.value;
      {
        var val = map.get(key);
        transposed.set(val, key);
      }
    }
    return transposed;
  }
  function toObject(map) {
    var obj = {};
    var $jscomp$iter$4 = $jscomp.makeIterator(map.keys());
    var $jscomp$key$m553479753$17$key = $jscomp$iter$4.next();
    for (; !$jscomp$key$m553479753$17$key.done; $jscomp$key$m553479753$17$key = $jscomp$iter$4.next()) {
      var key = $jscomp$key$m553479753$17$key.value;
      {
        obj[key] = map.get(key);
      }
    }
    return obj;
  }
  "use strict";
  goog.module("goog.collections.maps");
  goog.module.declareLegacyNamespace();
  var MapLike = function() {
    this.size;
  };
  MapLike.prototype.set = function(key, val) {
  };
  MapLike.prototype.get = function(key) {
  };
  MapLike.prototype.keys = function() {
  };
  MapLike.prototype.values = function() {
  };
  MapLike.prototype.has = function(key) {
  };
  exports.MapLike = MapLike;
  exports.setAll = setAll;
  exports.hasValue = hasValue;
  var defaultEqualityFn = function(a, b) {
    return a === b;
  };
  exports.equals = equals;
  exports.transpose = transpose;
  exports.toObject = toObject;
  return exports;
});

//# sourceMappingURL=goog.collections.maps.js.map
