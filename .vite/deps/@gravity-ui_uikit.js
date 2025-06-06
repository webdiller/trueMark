import {
  require_react_dom
} from "./chunk-T46KWSWP.js";
import {
  require_react
} from "./chunk-E55NSNTN.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-4MBMRILA.js";

// node_modules/bem-cn/lib/index.js
var require_lib = __commonJS({
  "node_modules/bem-cn/lib/index.js"(exports, module) {
    !function(n, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.block = t() : n.block = t();
    }(exports, function() {
      return function(n) {
        var t = {};
        function e(r) {
          if (t[r]) return t[r].exports;
          var o = t[r] = { i: r, l: false, exports: {} };
          return n[r].call(o.exports, o, o.exports, e), o.l = true, o.exports;
        }
        return e.m = n, e.c = t, e.d = function(n2, t2, r) {
          e.o(n2, t2) || Object.defineProperty(n2, t2, { enumerable: true, get: r });
        }, e.r = function(n2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
        }, e.t = function(n2, t2) {
          if (1 & t2 && (n2 = e(n2)), 8 & t2) return n2;
          if (4 & t2 && "object" == typeof n2 && n2 && n2.__esModule) return n2;
          var r = /* @__PURE__ */ Object.create(null);
          if (e.r(r), Object.defineProperty(r, "default", { enumerable: true, value: n2 }), 2 & t2 && "string" != typeof n2) for (var o in n2) e.d(r, o, (function(t3) {
            return n2[t3];
          }).bind(null, o));
          return r;
        }, e.n = function(n2) {
          var t2 = n2 && n2.__esModule ? function() {
            return n2.default;
          } : function() {
            return n2;
          };
          return e.d(t2, "a", t2), t2;
        }, e.o = function(n2, t2) {
          return Object.prototype.hasOwnProperty.call(n2, t2);
        }, e.p = "", e(e.s = 0);
      }([function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var r = e(1);
        t.ERROR_BLOCK_NAME_TYPE = "Block name should be a string", t.ERROR_BLOCK_NAME_EMPTY = "Block name should be non-empty";
        var o = { ns: "", el: "__", mod: "_", modValue: "_" }, i = function(n2) {
          return "string" == typeof n2;
        }, u = function(n2) {
          return "string" != typeof n2;
        }, s = function(n2, t2) {
          for (var e2 = [], o2 = 2; o2 < arguments.length; o2++) e2[o2 - 2] = arguments[o2];
          var i2 = r.assign({}, t2);
          return i2.mixes = i2.mixes.concat(e2), c(i2, n2);
        }, a = function(n2, t2, e2) {
          for (var o2 = [], i2 = 3; i2 < arguments.length; i2++) o2[i2 - 3] = arguments[i2];
          var u2 = r.assign({}, t2), s2 = r.assign({}, u2.states || {});
          return s2[e2] = r.assign.apply(void 0, [{}, s2[e2] || {}].concat(o2)), u2.states = s2, c(u2, n2);
        }, l = function(n2, t2, e2, r2) {
          return String.prototype.split.call(f(n2, t2), e2, r2);
        }, f = function(n2, t2) {
          var e2 = t2.name, r2 = t2.mods, o2 = t2.mixes, i2 = t2.states, u2 = [e2];
          if (r2 && (u2 = u2.concat(Object.keys(r2).filter(function(n3) {
            return r2[n3];
          }).map(function(t3) {
            var o3 = r2[t3];
            return true === o3 ? e2 + n2.mod + t3 : e2 + n2.mod + t3 + n2.modValue + o3;
          }))), i2 && Object.keys(i2).forEach(function(n3) {
            var t3 = i2[n3];
            u2 = u2.concat(Object.keys(t3).filter(function(n4) {
              return t3[n4];
            }).map(function(t4) {
              return n3 + t4;
            }));
          }), n2.ns && (u2 = u2.map(function(t3) {
            return n2.ns + t3;
          })), o2 && (u2 = u2.concat(function(n3) {
            return void 0 === n3 && (n3 = []), n3.map(function(n4) {
              return Array.isArray(n4) ? n4.join(" ") : "object" == typeof n4 && null !== n4 ? n4.toString() : "function" == typeof n4 ? n4.toString() : "string" == typeof n4 ? n4 : "";
            }).filter(function(n4) {
              return !!n4;
            });
          }(o2))), n2.classMap) {
            var s2 = n2.classMap;
            u2 = u2.map(function(n3) {
              return s2[n3] || n3;
            });
          }
          return u2.join(" ");
        }, c = function(n2, t2) {
          return { mix: s.bind(null, t2, n2), split: l.bind(null, t2, n2), is: a.bind(null, t2, n2, "is-"), has: a.bind(null, t2, n2, "has-"), state: a.bind(null, t2, n2, "is-"), toString: f.bind(null, t2, n2) };
        }, d = function(n2, t2) {
          var e2 = { name: n2, mods: {}, mixes: [], states: { "is-": {}, "has-": {} } }, o2 = (function(n3, t3) {
            for (var e3 = [], o3 = 2; o3 < arguments.length; o3++) e3[o3 - 2] = arguments[o3];
            if (!e3.length) return f(n3, t3);
            var s2 = r.assign({}, t3), a2 = e3.filter(i).reduce(function(t4, e4) {
              return t4 + n3.el + e4;
            }, "");
            a2 && (s2.name = s2.name + a2);
            var l2 = e3.filter(u).reduce(function(n4, t4) {
              return r.assign(n4, t4);
            }, {});
            return s2.mods = r.assign({}, s2.mods, l2), c(s2, n3);
          }).bind(null, t2, e2);
          return o2.mix = s.bind(null, t2, e2), o2.split = l.bind(null, t2, e2), o2.is = a.bind(null, t2, e2, "is-"), o2.has = a.bind(null, t2, e2, "has-"), o2.state = a.bind(null, t2, e2, "is-"), o2.toString = f.bind(null, t2, e2), o2;
        };
        t.setup = function(n2) {
          return void 0 === n2 && (n2 = {}), function(e2) {
            if ("string" != typeof e2) throw new Error(t.ERROR_BLOCK_NAME_TYPE);
            var i2 = e2.trim();
            if (!i2) throw new Error(t.ERROR_BLOCK_NAME_EMPTY);
            return d(i2, r.assign({}, o, n2));
          };
        }, t.block = t.setup(), t.default = t.block;
      }, function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.assign = function(n2) {
          for (var t2 = [], e2 = 1; e2 < arguments.length; e2++) t2[e2 - 1] = arguments[e2];
          for (var r = 0; r < t2.length; r++) {
            var o = t2[r];
            for (var i in o) o.hasOwnProperty(i) && (n2[i] = o[i]);
          }
          return n2;
        };
      }]);
    });
  }
});

// node_modules/bem-cn-lite/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/bem-cn-lite/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bem_cn_1 = require_lib();
    var block2 = bem_cn_1.setup();
    function bemClassNameLite(blockName) {
      var b80 = block2(blockName);
      function element() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var elementName = args.shift();
        var modifiers = args[0], mixin = args[1];
        var result;
        if (typeof elementName !== "string" || typeof modifiers === "string") {
          mixin = modifiers;
          modifiers = null;
        }
        result = b80(elementName, modifiers);
        if (mixin) {
          result = result.mix(mixin);
        }
        return result.toString();
      }
      element.builder = function() {
        return b80;
      };
      return element;
    }
    bemClassNameLite.setup = function(config2) {
      block2 = bem_cn_1.setup(config2);
    };
    bemClassNameLite.reset = function() {
      block2 = bem_cn_1.setup();
    };
    exports.default = bemClassNameLite;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value2, other) {
      return value2 === other || value2 !== value2 && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value2) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value2]);
      } else {
        data[index2][1] = value2;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value2) {
      var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
      try {
        value2[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value2);
      if (unmasked) {
        if (isOwn) {
          value2[symToStringTag] = tag;
        } else {
          delete value2[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value2) {
      return nativeObjectToString.call(value2);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value2) {
      if (value2 == null) {
        return value2 === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value2) {
      var type = typeof value2;
      return value2 != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value2) {
      if (!isObject(value2)) {
        return false;
      }
      var tag = baseGetTag(value2);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value2) {
      if (!isObject(value2) || isMasked(value2)) {
        return false;
      }
      var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value2));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value2 = getValue(object, key);
      return baseIsNative(value2) ? value2 : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value2) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED : value2;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value2) {
      var type = typeof value2;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value2) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value2);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value2) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value2]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value2);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value2) {
      this.__data__.set(value2, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value2) {
      return this.__data__.has(value2);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index2 = -1, length = values2 == null ? 0 : values2.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values2[index2]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index2 < arrLength) {
        var arrValue = array[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value2, key) {
        result[++index2] = [key, value2];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value2) {
        result[++index2] = value2;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values2) {
      var index2 = -1, length = values2.length, offset2 = array.length;
      while (++index2 < length) {
        array[offset2 + index2] = values2[index2];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value2 = array[index2];
        if (predicate(value2, index2, array)) {
          result[resIndex++] = value2;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value2) {
      return value2 != null && typeof value2 == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value2) {
      return isObjectLike(value2) && baseGetTag(value2) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value2) {
      return isObjectLike(value2) && hasOwnProperty.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value2, length) {
      var type = typeof value2;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value2) {
      return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value2) {
      return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value2) {
        return func(value2);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value2, inherited) {
      var isArr = isArray(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer(value2), isType = !isArr && !isArg && !isBuff && isTypedArray(value2), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value2.length, String) : [], length = result.length;
      for (var key in value2) {
        if ((inherited || hasOwnProperty.call(value2, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value2) {
      var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value2 === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value2) {
      return value2 != null && isLength(value2.length) && !isFunction(value2);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index2 < objLength) {
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value2) {
        var result = baseGetTag(value2), Ctor = result == objectTag ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value2, other, bitmask, customizer, stack) {
      if (value2 === other) {
        return true;
      }
      if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
        return value2 !== value2 && other !== other;
      }
      return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index2 = matchData.length, length = index2, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index2--) {
        var data = matchData[index2];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index2 < length) {
        data = matchData[index2];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value2) {
      return value2 === value2 && !isObject(value2);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value2 = object[key];
        result[length] = [key, value2, isStrictComparable(value2)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value2) {
      return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value2, object) {
      if (isArray(value2)) {
        return false;
      }
      var type = typeof value2;
      if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
        return true;
      }
      return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value2) {
      if (typeof value2 == "string") {
        return value2;
      }
      if (isArray(value2)) {
        return arrayMap(value2, baseToString) + "";
      }
      if (isSymbol(value2)) {
        return symbolToString ? symbolToString.call(value2) : "";
      }
      var result = value2 + "";
      return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value2) {
      return value2 == null ? "" : baseToString(value2);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value2, object) {
      if (isArray(value2)) {
        return value2;
      }
      return isKey(value2, object) ? [value2] : stringToPath(toString(value2));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value2) {
      if (typeof value2 == "string" || isSymbol(value2)) {
        return value2;
      }
      var result = value2 + "";
      return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index2 = 0, length = path.length;
      while (object != null && index2 < length) {
        object = object[toKey(path[index2++])];
      }
      return index2 && index2 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index2 = -1, length = path.length, result = false;
      while (++index2 < length) {
        var key = toKey(path[index2]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index2 != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get2 = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get2(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value2) {
      return value2;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value2) {
      if (typeof value2 == "function") {
        return value2;
      }
      if (value2 == null) {
        return identity;
      }
      if (typeof value2 == "object") {
        return isArray(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
      }
      return property(value2);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value2) {
      return value2 !== value2;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value2, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value2) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value2, fromIndex) {
      return value2 === value2 ? strictIndexOf(array, value2, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value2) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value2, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array, value2, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value2, array[index2])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop2() {
    }
    module.exports = noop2;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set2 = require_Set();
    var noop2 = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
      return new Set2(values2);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index2 < length) {
          var value2 = array[index2], computed = iteratee ? iteratee(value2) : value2;
          value2 = comparator || value2 !== 0 ? value2 : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value2);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value2);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy2(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy2;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start2, end2) {
      var index2 = -1, length = array.length;
      if (start2 < 0) {
        start2 = -start2 > length ? 0 : length + start2;
      }
      end2 = end2 > length ? length : end2;
      if (end2 < 0) {
        end2 += length;
      }
      length = start2 > end2 ? 0 : end2 - start2 >>> 0;
      start2 >>>= 0;
      var result = Array(length);
      while (++index2 < length) {
        result[index2] = array[index2 + start2];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "node_modules/lodash/_castSlice.js"(exports, module) {
    var baseSlice = require_baseSlice();
    function castSlice(array, start2, end2) {
      var length = array.length;
      end2 = end2 === void 0 ? length : end2;
      return !start2 && end2 >= length ? array : baseSlice(array, start2, end2);
    }
    module.exports = castSlice;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "node_modules/lodash/_asciiToArray.js"(exports, module) {
    function asciiToArray(string) {
      return string.split("");
    }
    module.exports = asciiToArray;
  }
});

// node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "node_modules/lodash/_unicodeToArray.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
  }
});

// node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "node_modules/lodash/_stringToArray.js"(exports, module) {
    var asciiToArray = require_asciiToArray();
    var hasUnicode = require_hasUnicode();
    var unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "node_modules/lodash/_createCaseFirst.js"(exports, module) {
    var castSlice = require_castSlice();
    var hasUnicode = require_hasUnicode();
    var stringToArray = require_stringToArray();
    var toString = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module.exports = createCaseFirst;
  }
});

// node_modules/lodash/upperFirst.js
var require_upperFirst = __commonJS({
  "node_modules/lodash/upperFirst.js"(exports, module) {
    var createCaseFirst = require_createCaseFirst();
    var upperFirst = createCaseFirst("toUpperCase");
    module.exports = upperFirst;
  }
});

// node_modules/lodash/capitalize.js
var require_capitalize = __commonJS({
  "node_modules/lodash/capitalize.js"(exports, module) {
    var toString = require_toString();
    var upperFirst = require_upperFirst();
    function capitalize2(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    module.exports = capitalize2;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement3, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement3(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value2) {
            var type = getPreciseType(value2);
            if (type === "symbol") {
              return String(value2);
            }
            return value2;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement3(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value2) {
        var type = getPreciseType(value2);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b80) {
      if (a === b80) return true;
      if (a && b80 && typeof a == "object" && typeof b80 == "object") {
        if (a.constructor !== b80.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b80.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b80[i])) return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b80 instanceof Map) {
          if (a.size !== b80.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b80.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b80.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b80 instanceof Set) {
          if (a.size !== b80.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b80.has(i.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b80)) {
          length = a.length;
          if (length != b80.length) return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b80[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b80.source && a.flags === b80.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b80.valueOf === "function") return a.valueOf() === b80.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b80.toString === "function") return a.toString() === b80.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b80).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b80, keys[i])) return false;
        if (hasElementType && a instanceof Element) return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b80[keys[i]])) return false;
        }
        return true;
      }
      return a !== a && b80 !== b80;
    }
    module.exports = function isEqual3(a, b80) {
      try {
        return equal(a, b80);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format2, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format2, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format2 === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format2].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now2 = function() {
      return root.Date.now();
    };
    module.exports = now2;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace.test(string.charAt(index2))) {
      }
      return index2;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value2) {
      if (typeof value2 == "number") {
        return value2;
      }
      if (isSymbol(value2)) {
        return NAN;
      }
      if (isObject(value2)) {
        var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
        value2 = isObject(other) ? other + "" : other;
      }
      if (typeof value2 != "string") {
        return value2 === 0 ? value2 : +value2;
      }
      value2 = baseTrim(value2);
      var isBinary = reIsBinary.test(value2);
      return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now2 = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now2();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now2());
      }
      function debounced() {
        var time = now2(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce2 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        // .toUpperCase handles XHTML
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text2, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text2;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format3 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format3, text2);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text2);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text2);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format2("message" in options ? options.message : defaultMessage);
          window.prompt(message, text2);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// node_modules/react-copy-to-clipboard/lib/Component.js
var require_Component = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/Component.js"(exports) {
    "use strict";
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof2(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CopyToClipboard = void 0;
    var _react = _interopRequireDefault(require_react());
    var _copyToClipboard = _interopRequireDefault(require_copy_to_clipboard());
    var _excluded = ["text", "onCopy", "options", "children"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose2(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties2(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass) _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf2(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf2(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn2(this, result);
      };
    }
    function _possibleConstructorReturn2(self2, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf2(o) {
      _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf2(o);
    }
    function _defineProperty2(obj, key, value2) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value2;
      }
      return obj;
    }
    var CopyToClipboard2 = function(_React$PureComponent) {
      _inherits2(CopyToClipboard3, _React$PureComponent);
      var _super = _createSuper(CopyToClipboard3);
      function CopyToClipboard3() {
        var _this;
        _classCallCheck2(this, CopyToClipboard3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty2(_assertThisInitialized2(_this), "onClick", function(event) {
          var _this$props = _this.props, text2 = _this$props.text, onCopy = _this$props.onCopy, children2 = _this$props.children, options = _this$props.options;
          var elem = _react["default"].Children.only(children2);
          var result = (0, _copyToClipboard["default"])(text2, options);
          if (onCopy) {
            onCopy(text2, result);
          }
          if (elem && elem.props && typeof elem.props.onClick === "function") {
            elem.props.onClick(event);
          }
        });
        return _this;
      }
      _createClass2(CopyToClipboard3, [{
        key: "render",
        value: function render() {
          var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children2 = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);
          var elem = _react["default"].Children.only(children2);
          return _react["default"].cloneElement(elem, _objectSpread2(_objectSpread2({}, props), {}, {
            onClick: this.onClick
          }));
        }
      }]);
      return CopyToClipboard3;
    }(_react["default"].PureComponent);
    exports.CopyToClipboard = CopyToClipboard2;
    _defineProperty2(CopyToClipboard2, "defaultProps", {
      onCopy: void 0,
      options: void 0
    });
  }
});

// node_modules/react-copy-to-clipboard/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/index.js"(exports, module) {
    "use strict";
    var _require = require_Component();
    var CopyToClipboard2 = _require.CopyToClipboard;
    CopyToClipboard2.CopyToClipboard = CopyToClipboard2;
    module.exports = CopyToClipboard2;
  }
});

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant2 = function(condition, format2, a, b80, c, d, e, f) {
      if (true) {
        if (format2 === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format2 === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b80, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format2.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant2;
  }
});

// node_modules/lodash/_baseRange.js
var require_baseRange = __commonJS({
  "node_modules/lodash/_baseRange.js"(exports, module) {
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function baseRange(start2, end2, step, fromRight) {
      var index2 = -1, length = nativeMax(nativeCeil((end2 - start2) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index2] = start2;
        start2 += step;
      }
      return result;
    }
    module.exports = baseRange;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value2, index2, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value2);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value2) {
      if (!value2) {
        return value2 === 0 ? value2 : 0;
      }
      value2 = toNumber(value2);
      if (value2 === INFINITY || value2 === -INFINITY) {
        var sign = value2 < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value2 === value2 ? value2 : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/_createRange.js
var require_createRange = __commonJS({
  "node_modules/lodash/_createRange.js"(exports, module) {
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start2, end2, step) {
        if (step && typeof step != "number" && isIterateeCall(start2, end2, step)) {
          end2 = step = void 0;
        }
        start2 = toFinite(start2);
        if (end2 === void 0) {
          end2 = start2;
          start2 = 0;
        } else {
          end2 = toFinite(end2);
        }
        step = step === void 0 ? start2 < end2 ? 1 : -1 : toFinite(step);
        return baseRange(start2, end2, step, fromRight);
      };
    }
    module.exports = createRange;
  }
});

// node_modules/lodash/range.js
var require_range = __commonJS({
  "node_modules/lodash/range.js"(exports, module) {
    var createRange = require_createRange();
    var range = createRange();
    module.exports = range;
  }
});

// node_modules/lodash/_baseSum.js
var require_baseSum = __commonJS({
  "node_modules/lodash/_baseSum.js"(exports, module) {
    function baseSum(array, iteratee) {
      var result, index2 = -1, length = array.length;
      while (++index2 < length) {
        var current = iteratee(array[index2]);
        if (current !== void 0) {
          result = result === void 0 ? current : result + current;
        }
      }
      return result;
    }
    module.exports = baseSum;
  }
});

// node_modules/lodash/sumBy.js
var require_sumBy = __commonJS({
  "node_modules/lodash/sumBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseSum = require_baseSum();
    function sumBy(array, iteratee) {
      return array && array.length ? baseSum(array, baseIteratee(iteratee, 2)) : 0;
    }
    module.exports = sumBy;
  }
});

// node_modules/lodash/_baseHas.js
var require_baseHas = __commonJS({
  "node_modules/lodash/_baseHas.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }
    module.exports = baseHas;
  }
});

// node_modules/lodash/has.js
var require_has2 = __commonJS({
  "node_modules/lodash/has.js"(exports, module) {
    var baseHas = require_baseHas();
    var hasPath = require_hasPath();
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }
    module.exports = has;
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber(value2) {
      return typeof value2 == "number" || isObjectLike(value2) && baseGetTag(value2) == numberTag;
    }
    module.exports = isNumber;
  }
});

// node_modules/lodash/_baseDifference.js
var require_baseDifference = __commonJS({
  "node_modules/lodash/_baseDifference.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var arrayMap = require_arrayMap();
    var baseUnary = require_baseUnary();
    var cacheHas = require_cacheHas();
    var LARGE_ARRAY_SIZE = 200;
    function baseDifference(array, values2, iteratee, comparator) {
      var index2 = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values2.length;
      if (!length) {
        return result;
      }
      if (iteratee) {
        values2 = arrayMap(values2, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      } else if (values2.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values2 = new SetCache(values2);
      }
      outer:
        while (++index2 < length) {
          var value2 = array[index2], computed = iteratee == null ? value2 : iteratee(value2);
          value2 = comparator || value2 !== 0 ? value2 : 0;
          if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values2[valuesIndex] === computed) {
                continue outer;
              }
            }
            result.push(value2);
          } else if (!includes(values2, computed, comparator)) {
            result.push(value2);
          }
        }
      return result;
    }
    module.exports = baseDifference;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start2, transform) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
        while (++index2 < length) {
          array[index2] = args[start2 + index2];
        }
        index2 = -1;
        var otherArgs = Array(start2 + 1);
        while (++index2 < start2) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start2] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value2) {
      return function() {
        return value2;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start2) {
      return setToString(overRest(func, start2, identity), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value2) {
      return isObjectLike(value2) && isArrayLike(value2);
    }
    module.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/without.js
var require_without = __commonJS({
  "node_modules/lodash/without.js"(exports, module) {
    var baseDifference = require_baseDifference();
    var baseRest = require_baseRest();
    var isArrayLikeObject = require_isArrayLikeObject();
    var without = baseRest(function(array, values2) {
      return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
    });
    module.exports = without;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value2) {
      return isArray(value2) || isArguments(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index2 = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value2 = array[index2];
        if (depth > 0 && predicate(value2)) {
          if (depth > 1) {
            baseFlatten(value2, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value2);
          }
        } else if (!isStrict) {
          result[result.length] = value2;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/union.js
var require_union = __commonJS({
  "node_modules/lodash/union.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseRest = require_baseRest();
    var baseUniq = require_baseUniq();
    var isArrayLikeObject = require_isArrayLikeObject();
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });
    module.exports = union;
  }
});

// node_modules/lodash/difference.js
var require_difference = __commonJS({
  "node_modules/lodash/difference.js"(exports, module) {
    var baseDifference = require_baseDifference();
    var baseFlatten = require_baseFlatten();
    var baseRest = require_baseRest();
    var isArrayLikeObject = require_isArrayLikeObject();
    var difference = baseRest(function(array, values2) {
      return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
    });
    module.exports = difference;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value2) {
      return typeof value2 == "string" || !isArray(value2) && isObjectLike(value2) && baseGetTag(value2) == stringTag;
    }
    module.exports = isString;
  }
});

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/MobileContext.js
var import_react = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/cn.js
var import_bem_cn_lite = __toESM(require_lib2());
var NAMESPACE = "yc-";
function block(name) {
  return (0, import_bem_cn_lite.default)(`${NAMESPACE}${name}`);
}
function modsClassName(className) {
  return className.split(/\s(.*)/)[1];
}

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/constants.js
var Platform;
(function(Platform2) {
  Platform2["IOS"] = "ios";
  Platform2["ANDROID"] = "android";
  Platform2["BROWSER"] = "browser";
})(Platform || (Platform = {}));
var b = block("root");
var rootMobileClassName = b({ mobile: true }).split(/\s+/)[1];

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/MobileContext.js
var initialValue = {
  mobile: false,
  platform: Platform.BROWSER,
  useHistory: () => ({ action: "", replace() {
  }, push() {
  }, goBack() {
  } }),
  useLocation: () => ({ pathname: "", search: "", hash: "" }),
  setMobile: () => {
  },
  setPlatform: () => {
  }
};
var MobileContext = import_react.default.createContext(initialValue);

// node_modules/@gravity-ui/uikit/node_modules/tslib/tslib.es6.js
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/MobileProvider.js
var import_react2 = __toESM(require_react());
function useHistoryMock() {
  return { action: "", replace() {
  }, push() {
  }, goBack() {
  } };
}
function useLocationMock() {
  return { pathname: "", search: "", hash: "" };
}
function MobileProvider({ mobile = false, platform = Platform.BROWSER, useHistory = useHistoryMock, useLocation = useLocationMock, children: children2 }) {
  const [mobileValue, setMobile] = import_react2.default.useState(mobile);
  const [platformValue, setPlatform] = import_react2.default.useState(platform);
  const useHistoryFunction = import_react2.default.useCallback(function useHistoryFunction2() {
    const _a = useHistory(), { goBack, back } = _a, props = __rest(_a, ["goBack", "back"]);
    let goBackFunction;
    if (typeof goBack === "function") {
      goBackFunction = goBack;
    } else if (typeof back === "function") {
      goBackFunction = back;
    } else {
      goBackFunction = () => {
      };
    }
    return Object.assign(Object.assign({}, props), { goBack: goBackFunction });
  }, [useHistory]);
  document.body.classList.toggle(rootMobileClassName, mobileValue);
  const state = import_react2.default.useMemo(() => {
    return {
      mobile: mobileValue,
      setMobile,
      platform: platformValue,
      setPlatform,
      useLocation,
      useHistory: useHistoryFunction
    };
  }, [mobileValue, platformValue, useLocation, useHistoryFunction]);
  return import_react2.default.createElement(MobileContext.Provider, { value: state }, children2);
}

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/useMobile.js
var import_react3 = __toESM(require_react());
function useMobile() {
  const { mobile, setMobile } = import_react3.default.useContext(MobileContext);
  return [mobile, setMobile];
}

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/usePlatform.js
var import_react4 = __toESM(require_react());
function usePlatform() {
  const { platform, setPlatform } = import_react4.default.useContext(MobileContext);
  return [platform, setPlatform];
}

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/withMobile.js
var import_react5 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/getComponentName.js
function getComponentName(Component4) {
  return Component4.displayName || Component4.name || "Component";
}

// node_modules/@gravity-ui/uikit/build/esm/components/mobile/withMobile.js
function withMobile(WrappedComponent) {
  var _a;
  const componentName = getComponentName(WrappedComponent);
  return _a = class WithMobileComponent extends import_react5.default.Component {
    render() {
      return import_react5.default.createElement(WrappedComponent, Object.assign({}, this.props, { mobile: this.context.mobile, platform: this.context.platform, useHistory: this.context.useHistory, useLocation: this.context.useLocation, setMobile: this.context.setMobile, setPlatform: this.context.setPlatform }));
    }
  }, _a.displayName = `withMobile(${componentName})`, _a.contextType = MobileContext, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/ThemeContext.js
var import_react6 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/theme/constants.js
var DEFAULT_THEME = "system";
var DEFAULT_LIGHT_THEME = "light";
var DEFAULT_DARK_THEME = "dark";
var LIGHT_THEMES = ["light", "light-hc"];
var DARK_THEMES = ["dark", "dark-hc"];
var THEMES = [...LIGHT_THEMES, ...DARK_THEMES];
var ROOT_CLASS_NAME = "root";

// node_modules/@gravity-ui/uikit/build/esm/components/theme/ThemeContext.js
var initialValue2 = {
  theme: DEFAULT_THEME,
  setTheme: () => {
  }
};
var ThemeContext = import_react6.default.createContext(initialValue2);
ThemeContext.displayName = "ThemeContext";

// node_modules/@gravity-ui/uikit/build/esm/components/theme/ThemeValueContext.js
var import_react7 = __toESM(require_react());
var initialValue3 = {
  themeValue: "light"
};
var ThemeValueContext = import_react7.default.createContext(initialValue3);
ThemeValueContext.displayName = "ThemeValueContext";

// node_modules/@gravity-ui/uikit/build/esm/components/theme/ThemeProvider.js
var import_react10 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/theme/ThemeSettingsContext.js
var import_react8 = __toESM(require_react());
var ThemeSettingsContext = import_react8.default.createContext(void 0);
ThemeSettingsContext.displayName = "ThemeSettingsContext";

// node_modules/@gravity-ui/uikit/build/esm/components/theme/updateBodyClassName.js
var b2 = block(ROOT_CLASS_NAME);
var rootClassName = b2();
var defaultModifiers = {
  "native-scrollbar": false
};
function updateBodyClassName(newTheme, modifiers, customRootClassName) {
  const bodyEl = document.body;
  if (!bodyEl.classList.contains(rootClassName)) {
    bodyEl.classList.add(rootClassName);
  }
  if (customRootClassName) {
    const parsedCustomRootClassNames = customRootClassName.split(" ");
    parsedCustomRootClassNames.forEach((cls) => {
      if (cls && !bodyEl.classList.contains(cls)) {
        bodyEl.classList.add(cls);
      }
    });
  }
  [...bodyEl.classList].forEach((cls) => {
    if (cls.startsWith(modsClassName(b2({ theme: true })))) {
      bodyEl.classList.remove(cls);
    }
  });
  bodyEl.classList.add(modsClassName(b2({ theme: newTheme })));
  for (const [key, value2] of Object.entries(Object.assign(Object.assign({}, defaultModifiers), modifiers))) {
    bodyEl.classList.toggle(modsClassName(b2({ [key]: true })), value2);
  }
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/useSystemTheme.js
var import_react9 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/theme/getDarkMediaMatch.js
var getDarkMediaMatch = () => window.matchMedia("(prefers-color-scheme: dark)");

// node_modules/@gravity-ui/uikit/build/esm/components/theme/getSystemTheme.js
function getSystemTheme() {
  if (typeof window === "object") {
    return getDarkMediaMatch().matches ? "dark" : "light";
  } else {
    return "light";
  }
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/useSystemTheme.js
function addListener(matcher, handler) {
  const isLegacyMethod = typeof matcher.addEventListener !== "function";
  if (isLegacyMethod) {
    matcher.addListener(handler);
  } else {
    matcher.addEventListener("change", handler);
  }
  return () => {
    if (isLegacyMethod) {
      matcher.removeListener(handler);
    } else {
      matcher.removeEventListener("change", handler);
    }
  };
}
function useSystemTheme() {
  const [theme, setTheme] = (0, import_react9.useState)(getSystemTheme());
  (0, import_react9.useEffect)(() => {
    function onChange(event) {
      setTheme(event.matches ? "dark" : "light");
    }
    const matcher = getDarkMediaMatch();
    const unsubscribe = addListener(matcher, onChange);
    return () => unsubscribe();
  }, []);
  return theme;
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/ThemeProvider.js
var b3 = block(ROOT_CLASS_NAME);
function ThemeProvider({ theme: themeProp = DEFAULT_THEME, systemLightTheme: systemLightThemeProp = DEFAULT_LIGHT_THEME, systemDarkTheme: systemDarkThemeProp = DEFAULT_DARK_THEME, nativeScrollbar = false, scoped = false, rootClassName: rootClassName2 = "", children: children2 }) {
  const [theme, setTheme] = (0, import_react10.useState)(themeProp);
  const [{ systemLightTheme, systemDarkTheme }, setThemeSettings] = (0, import_react10.useState)({
    systemLightTheme: systemLightThemeProp,
    systemDarkTheme: systemDarkThemeProp
  });
  (0, import_react10.useLayoutEffect)(() => {
    setTheme(themeProp);
    setThemeSettings({
      systemLightTheme: systemLightThemeProp,
      systemDarkTheme: systemDarkThemeProp
    });
  }, [themeProp, systemLightThemeProp, systemDarkThemeProp]);
  const systemTheme = useSystemTheme() === "light" ? systemLightTheme : systemDarkTheme;
  const themeValue = theme === "system" ? systemTheme : theme;
  (0, import_react10.useEffect)(() => {
    if (!scoped) {
      updateBodyClassName(themeValue, { "native-scrollbar": nativeScrollbar }, rootClassName2);
    }
  }, [nativeScrollbar, themeValue, scoped, rootClassName2]);
  const contextValue = (0, import_react10.useMemo)(() => ({
    theme,
    themeValue,
    setTheme
  }), [theme, themeValue]);
  const themeValueContext = (0, import_react10.useMemo)(() => ({ themeValue }), [themeValue]);
  const themeSettingsContext = (0, import_react10.useMemo)(() => ({
    themeSettings: { systemLightTheme, systemDarkTheme },
    setThemeSettings
  }), [systemLightTheme, systemDarkTheme]);
  return import_react10.default.createElement(
    ThemeContext.Provider,
    { value: contextValue },
    import_react10.default.createElement(
      ThemeSettingsContext.Provider,
      { value: themeSettingsContext },
      import_react10.default.createElement(ThemeValueContext.Provider, { value: themeValueContext }, scoped ? import_react10.default.createElement("div", { className: b3({
        theme: themeValue,
        "native-scrollbar": nativeScrollbar
      }, rootClassName2) }, children2) : children2)
    )
  );
}
ThemeProvider.displayName = "ThemeProvider";

// node_modules/@gravity-ui/uikit/build/esm/components/theme/useTheme.js
var import_react11 = __toESM(require_react());
function useTheme() {
  const { theme, setTheme } = import_react11.default.useContext(ThemeContext);
  return [theme, setTheme];
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/useThemeValue.js
var import_react12 = __toESM(require_react());
function useThemeValue() {
  const { themeValue } = import_react12.default.useContext(ThemeValueContext);
  return themeValue;
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/useThemeSettings.js
var import_react13 = __toESM(require_react());
function useThemeSettings() {
  const settings = import_react13.default.useContext(ThemeSettingsContext);
  if (settings === void 0) {
    throw new Error("useThemeSettings must be used within ThemeProvider");
  }
  const { themeSettings, setThemeSettings } = settings;
  return [themeSettings, setThemeSettings];
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/getThemeType.js
function getThemeType(theme) {
  return DARK_THEMES.includes(theme) ? "dark" : "light";
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/useThemeType.js
function useThemeType() {
  const themeValue = useThemeValue();
  return getThemeType(themeValue);
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/withTheme.js
var import_react14 = __toESM(require_react());
function withTheme(WrappedComponent) {
  var _a;
  const componentName = getComponentName(WrappedComponent);
  return _a = class WithThemeComponent extends import_react14.default.Component {
    render() {
      return import_react14.default.createElement(WrappedComponent, Object.assign({}, this.props, { theme: this.context.theme, setTheme: this.context.setTheme }));
    }
  }, _a.displayName = `withTheme(${componentName})`, _a.contextType = ThemeContext, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/theme/withThemeValue.js
var import_react15 = __toESM(require_react());
function withThemeValue(WrappedComponent) {
  var _a;
  const componentName = getComponentName(WrappedComponent);
  return _a = class WithThemeValueComponent extends import_react15.default.Component {
    render() {
      return import_react15.default.createElement(WrappedComponent, Object.assign({}, this.props, { themeValue: this.context.themeValue }));
    }
  }, _a.displayName = `withThemeValue(${componentName})`, _a.contextType = ThemeValueContext, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/ActionTooltip/ActionTooltip.js
var import_react33 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/Hotkey.js
var import_react16 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/definitions.js
var PcNormalizeMap = {
  arrowup: "up",
  arrowdown: "down",
  arrowleft: "left",
  arrowright: "right",
  esc: "escape",
  return: "enter",
  mod: "ctrl",
  control: "ctrl",
  opt: "alt",
  option: "alt",
  cmd: "ctrl",
  command: "ctrl"
};
var MacNormalizeMap = {
  arrowup: "up",
  arrowdown: "down",
  arrowleft: "left",
  arrowright: "right",
  esc: "escape",
  enter: "return",
  mod: "command",
  ctrl: "control",
  alt: "option",
  opt: "option",
  cmd: "command"
};
var PcDisplayName = {
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
  escape: "Esc",
  plus: "＋",
  enter: "Enter",
  ctrl: "Ctrl",
  alt: "Alt",
  shift: "Shift",
  tab: "Tab",
  backspace: "Backspace"
};
var MacDisplayName = {
  up: "▲",
  down: "▼",
  left: "◀",
  right: "▶",
  escape: "⎋",
  plus: "＋",
  return: "⏎",
  command: "⌘",
  option: "⌥",
  control: "⌃",
  shift: "⇧",
  backspace: "⌫",
  tab: "⇥"
};
var PcKeyPriority = {
  shift: 200,
  alt: 300,
  ctrl: 400
};
var MacKeyPriority = {
  command: 100,
  shift: 200,
  option: 300,
  control: 400
};
var defsByPlatform = {
  pc: {
    NormalizeMap: PcNormalizeMap,
    Priority: PcKeyPriority,
    DisplayName: PcDisplayName
  },
  mac: {
    NormalizeMap: MacNormalizeMap,
    Priority: MacKeyPriority,
    DisplayName: MacDisplayName
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/parse.js
var import_uniqBy = __toESM(require_uniqBy());
var import_capitalize = __toESM(require_capitalize());

// node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/utils.js
var isMac = () => typeof navigator !== "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;
function split(val, separator) {
  return val.trim().split(separator).filter(Boolean);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/parse.js
var GROUPS_SEPARATOR = /\s/;
var KEYS_SEPARATOR = "+";
function parseKeyGroups(defs, value2) {
  return split(value2, GROUPS_SEPARATOR).map((keys) => (0, import_uniqBy.default)(
    split(keys, KEYS_SEPARATOR).map(keyParser(defs)).sort((a, b80) => b80.priority - a.priority),
    // high to low
    (key) => key.id
  ).map(renderKey));
}
function keyParser(defs) {
  return function(raw) {
    var _a;
    const keyId = getKeyId(defs, raw);
    return {
      raw,
      id: keyId,
      priority: (_a = defs.Priority[keyId]) !== null && _a !== void 0 ? _a : 0,
      displayName: defs.DisplayName[keyId]
    };
  };
}
function getKeyId(defs, val) {
  var _a;
  val = val.toLowerCase();
  return (_a = defs.NormalizeMap[val]) !== null && _a !== void 0 ? _a : val;
}
function renderKey(key) {
  var _a;
  return (_a = key.displayName) !== null && _a !== void 0 ? _a : (0, import_capitalize.default)(key.id);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/Hotkey.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Hotkey/Hotkey.css";
var b4 = block("hotkey");
var Spaces = {
  BetweenGroups: String.fromCharCode(160),
  BetweenKeys: String.fromCharCode(8239)
  // Narrow No-Break Space
};
var Hotkey = import_react16.default.forwardRef(function Hotkey2(props, ref) {
  const { value: value2, platform, view = "light", qa, style, className } = props;
  const groups = parseHotkeys(value2, { platform });
  const content = [];
  let hasGroups = false;
  groups.forEach((keys, groupIdx) => {
    if (keys.length === 0)
      return;
    if (hasGroups) {
      content.push(Spaces.BetweenGroups);
    } else {
      hasGroups = true;
    }
    keys.forEach((key, keyIdx) => {
      const isFirstKey = keyIdx === 0;
      if (!isFirstKey) {
        content.push(Spaces.BetweenKeys, import_react16.default.createElement("span", { className: b4("plus") }, "+"), Spaces.BetweenKeys);
      }
      content.push(import_react16.default.createElement("kbd", { key: `${key}_${groupIdx}_${keyIdx}` }, key));
    });
  });
  if (content.length === 0)
    return null;
  return import_react16.default.createElement("kbd", { ref, style, "data-qa": qa, className: b4({ view }, className) }, content);
});
function parseHotkeys(value2, opts) {
  var _a;
  const platform = (_a = opts.platform) !== null && _a !== void 0 ? _a : isMac() ? "mac" : "pc";
  const defs = defsByPlatform[platform];
  return parseKeyGroups(defs, value2);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Tooltip/Tooltip.js
var import_react32 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Popup/Popup.js
var import_react30 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_react19 = __toESM(require_react());

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react18 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react17 = __toESM(require_react());
var TransitionGroupContext_default = import_react17.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children2 = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react18.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children2 === "function" ? children2(status, childProps) : import_react18.default.cloneElement(import_react18.default.Children.only(children2), childProps))
    );
  };
  return Transition2;
}(import_react18.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value2 = propValue[key];
      return import_prop_types2.default.instanceOf(value2 && "ownerDocument" in value2 ? value2.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return import_react19.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react19.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types3.default.func
}) : {};
var CSSTransition_default = CSSTransition;

// node_modules/react-transition-group/esm/ReplaceTransition.js
var import_prop_types5 = __toESM(require_prop_types());
var import_react22 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react21 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react20 = __toESM(require_react());
function getChildMapping(children2, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react20.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children2) import_react20.Children.map(children2, function(c) {
    return c;
  }).forEach(function(child) {
    result[child.key] = mapper(child);
  });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react20.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children2).forEach(function(key) {
    var child = children2[key];
    if (!(0, import_react20.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react20.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children2[key] = (0, import_react20.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children2[key] = (0, import_react20.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react20.isValidElement)(prevChild)) {
      children2[key] = (0, import_react20.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children2;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children2 = _extends({}, state.children);
        delete children2[child.key];
        return {
          children: children2
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component4 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children2 = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component4 === null) {
      return import_react21.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return import_react21.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, import_react21.default.createElement(Component4, props, children2));
  };
  return TransitionGroup2;
}(import_react21.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types4.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types4.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types4.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/react-transition-group/esm/ReplaceTransition.js
var ReplaceTransition = function(_React$Component) {
  _inheritsLoose(ReplaceTransition2, _React$Component);
  function ReplaceTransition2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.handleEnter = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.handleLifecycle("onEnter", 0, args);
    };
    _this.handleEntering = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.handleLifecycle("onEntering", 0, args);
    };
    _this.handleEntered = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.handleLifecycle("onEntered", 0, args);
    };
    _this.handleExit = function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.handleLifecycle("onExit", 1, args);
    };
    _this.handleExiting = function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.handleLifecycle("onExiting", 1, args);
    };
    _this.handleExited = function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.handleLifecycle("onExited", 1, args);
    };
    return _this;
  }
  var _proto = ReplaceTransition2.prototype;
  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;
    var children2 = this.props.children;
    var child = import_react22.default.Children.toArray(children2)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = import_react22.default.Children.toArray(children2), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return import_react22.default.createElement(TransitionGroup_default, props, inProp ? import_react22.default.cloneElement(first, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : import_react22.default.cloneElement(second, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return ReplaceTransition2;
}(import_react22.default.Component);
ReplaceTransition.propTypes = true ? {
  in: import_prop_types5.default.bool.isRequired,
  children: function children(props, propName) {
    if (import_react22.default.Children.count(props[propName]) !== 2) return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }
} : {};

// node_modules/react-transition-group/esm/SwitchTransition.js
var import_react23 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;
  if (import_react23.default.isValidElement(oldChildren) && import_react23.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }
  return true;
}
var modes = {
  out: "out-in",
  in: "in-out"
};
var callHook = function callHook2(element, name, cb) {
  return function() {
    var _element$props;
    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};
var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function(_ref) {
  var current = _ref.current, changeState = _ref.changeState;
  return import_react23.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, import_react23.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return import_react23.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, import_react23.default.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [import_react23.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, import_react23.default.cloneElement(children2, {
        in: true
      }));
    })
  }), import_react23.default.cloneElement(children2, {
    in: true
  })];
}, _enterRenders);
var SwitchTransition = function(_React$Component) {
  _inheritsLoose(SwitchTransition2, _React$Component);
  function SwitchTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;
    _this.changeState = function(status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }
      _this.setState({
        status,
        current
      });
    };
    return _this;
  }
  var _proto = SwitchTransition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  SwitchTransition2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }
    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }
    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }
    return {
      current: import_react23.default.cloneElement(props.children, {
        in: true
      })
    };
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, mode = _this$props.mode, _this$state = this.state, status = _this$state.status, current = _this$state.current;
    var data = {
      children: children2,
      current,
      changeState: this.changeState,
      status
    };
    var component;
    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;
      case EXITING:
        component = leaveRenders[mode](data);
        break;
      case ENTERED:
        component = current;
    }
    return import_react23.default.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };
  return SwitchTransition2;
}(import_react23.default.Component);
SwitchTransition.propTypes = true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: import_prop_types6.default.oneOf([modes.in, modes.out]),
  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: import_prop_types6.default.oneOfType([import_prop_types6.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// node_modules/@gravity-ui/uikit/build/esm/components/utils/transition.js
function getCSSTransitionClassNames(b80) {
  return {
    appear: modsClassName(b80({ appear: true })),
    appearActive: modsClassName(b80({ appear: "active" })),
    appearDone: modsClassName(b80({ appear: "done" })),
    enter: modsClassName(b80({ enter: true })),
    enterActive: modsClassName(b80({ enter: "active" })),
    enterDone: modsClassName(b80({ enter: "done" })),
    exit: modsClassName(b80({ exit: true })),
    exitActive: modsClassName(b80({ exit: "active" })),
    exitDone: modsClassName(b80({ exit: "done" }))
  };
}

// node_modules/@gravity-ui/uikit/build/esm/components/Portal/Portal.js
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/usePortalContainer.js
var import_react25 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/PortalProvider.js
var import_react24 = __toESM(require_react());
var PortalContext = import_react24.default.createContext({ current: null });
PortalContext.displayName = "PortalContext";
var PortalProvider = ({ container, children: children2 }) => {
  return import_react24.default.createElement(PortalContext.Provider, { value: container }, children2);
};

// node_modules/@gravity-ui/uikit/build/esm/components/utils/usePortalContainer.js
function usePortalContainer() {
  var _a;
  const context = (0, import_react25.useContext)(PortalContext);
  let defaultContainer = null;
  if (typeof window === "object") {
    defaultContainer = window.document.body;
  }
  return (_a = context.current) !== null && _a !== void 0 ? _a : defaultContainer;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Portal/Portal.js
function Portal({ container, children: children2 }) {
  const defaultContainer = usePortalContainer();
  const containerNode = container !== null && container !== void 0 ? container : defaultContainer;
  return containerNode ? import_react_dom3.default.createPortal(children2, containerNode) : null;
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useLayer.js
var import_react26 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/LayerManager.js
var LayerManager = class {
  constructor() {
    this.stack = [];
    this.handleDocumentKeyDown = (event) => {
      var _a, _b, _c;
      if (event.code === "Escape") {
        const topLayer = this.getTopLayer();
        if (!topLayer.disableEscapeKeyDown) {
          (_a = topLayer.onEscapeKeyDown) === null || _a === void 0 ? void 0 : _a.call(topLayer, event);
          (_b = topLayer.onClose) === null || _b === void 0 ? void 0 : _b.call(topLayer, event, "escapeKeyDown");
        }
      }
      if (event.code === "Enter") {
        const topLayer = this.getTopLayer();
        (_c = topLayer.onEnterKeyDown) === null || _c === void 0 ? void 0 : _c.call(topLayer, event);
      }
    };
    this.handleDocumentClick = (event) => {
      var _a, _b;
      let layer;
      let mouseDownTarget = null;
      if (this.mouseDownLayerTarget) {
        layer = this.mouseDownLayerTarget.layer;
        mouseDownTarget = this.mouseDownLayerTarget.target;
        this.mouseDownLayerTarget = void 0;
        if (!this.stack.includes(layer)) {
          return;
        }
      } else {
        layer = this.getTopLayer();
      }
      if (!layer.disableOutsideClick && this.isOutsideClick(layer, event, mouseDownTarget)) {
        (_a = layer.onOutsideClick) === null || _a === void 0 ? void 0 : _a.call(layer, event);
        (_b = layer.onClose) === null || _b === void 0 ? void 0 : _b.call(layer, event, "outsideClick");
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const layer = this.getTopLayer();
      if (layer) {
        this.mouseDownLayerTarget = { layer, target: event.target };
      }
    };
  }
  add(config2) {
    this.stack.push(config2);
    if (this.stack.length === 1) {
      this.addListeners();
    }
  }
  remove(config2) {
    const index2 = this.stack.indexOf(config2);
    this.stack.splice(index2, 1);
    if (this.stack.length === 0) {
      this.removeListeners();
    }
  }
  addListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("click", this.handleDocumentClick, true);
    document.addEventListener("mousedown", this.handleDocumentMouseDown, true);
  }
  removeListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("click", this.handleDocumentClick, true);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown, true);
  }
  getTopLayer() {
    return this.stack[this.stack.length - 1];
  }
  isOutsideClick(layer, event, mouseDownTarget = null) {
    const contentElements = layer.contentRefs || [];
    const { target } = event;
    const composedPath = typeof event.composedPath === "function" ? event.composedPath() : [];
    if (contentElements.length > 0) {
      const isClickOnContentElements = contentElements.some((el) => {
        var _a, _b, _c, _d;
        return ((_b = (_a = el === null || el === void 0 ? void 0 : el.current) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, target)) || ((_d = (_c = el === null || el === void 0 ? void 0 : el.current) === null || _c === void 0 ? void 0 : _c.contains) === null || _d === void 0 ? void 0 : _d.call(_c, mouseDownTarget)) || composedPath.includes(el === null || el === void 0 ? void 0 : el.current);
      });
      return !isClickOnContentElements;
    }
    return false;
  }
};
var layerManager = new LayerManager();

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useLayer.js
function useLayer({ open, disableEscapeKeyDown, disableOutsideClick, onEscapeKeyDown, onEnterKeyDown, onOutsideClick, onClose, contentRefs, enabled = true }) {
  const layerConfigRef = import_react26.default.useRef({
    disableEscapeKeyDown,
    disableOutsideClick,
    onEscapeKeyDown,
    onEnterKeyDown,
    onOutsideClick,
    onClose,
    contentRefs
  });
  import_react26.default.useEffect(() => {
    Object.assign(layerConfigRef.current, {
      disableEscapeKeyDown,
      disableOutsideClick,
      onEscapeKeyDown,
      onEnterKeyDown,
      onOutsideClick,
      onClose,
      contentRefs,
      enabled
    });
  }, [
    disableEscapeKeyDown,
    disableOutsideClick,
    onEscapeKeyDown,
    onEnterKeyDown,
    onOutsideClick,
    onClose,
    contentRefs,
    enabled
  ]);
  import_react26.default.useEffect(() => {
    if (open && enabled) {
      const layerConfig = layerConfigRef.current;
      layerManager.add(layerConfig);
      return () => {
        layerManager.remove(layerConfig);
      };
    }
    return void 0;
  }, [open, enabled]);
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/usePopper.js
var import_react27 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/node_modules/react-popper/lib/esm/Popper.js
var React27 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/node_modules/react-popper/lib/esm/Manager.js
var React24 = __toESM(require_react());
var ManagerReferenceNodeContext = React24.createContext();
var ManagerReferenceNodeSetterContext = React24.createContext();

// node_modules/@gravity-ui/uikit/node_modules/react-popper/lib/esm/utils.js
var React25 = __toESM(require_react());
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value2 = _ref[1];
    acc[key] = value2;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? React25.useLayoutEffect : React25.useEffect;

// node_modules/@gravity-ui/uikit/node_modules/react-popper/lib/esm/usePopper.js
var React26 = __toESM(require_react());

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value2 = attributes[name2];
      if (value2 === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value2 === true ? "" : value2);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value2, max2) {
  return max(min2, min(value2, max2));
}
function withinMaxClamp(min2, value2, max2) {
  var v = within(min2, value2, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value2, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value2;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b80) {
    return overflows[a] - overflows[b80];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value2, index2, self2) {
      return self2.indexOf(value2) === index2;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers4 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers4, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers3 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers3
});

// node_modules/@gravity-ui/uikit/node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toESM(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = React26.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = React26.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = React26.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        setState({
          styles: fromEntries(elements.map(function(element) {
            return [element, state2.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function(element) {
            return [element, state2.attributes[element]];
          }))
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = React26.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React26.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper4 = options.createPopper || createPopper3;
    var popperInstance = createPopper4(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// node_modules/@gravity-ui/uikit/node_modules/react-popper/lib/esm/Reference.js
var React28 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/usePopper.js
var DEFAULT_PLACEMENT = [
  "bottom-start",
  "bottom",
  "bottom-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "left-start",
  "left",
  "left-end"
];
function usePopper3({ anchorRef, placement = DEFAULT_PLACEMENT, offset: offset2, modifiers = [], strategy }) {
  const [popperElement, setPopperElement] = import_react27.default.useState(null);
  const [arrowElement, setArrowElement] = import_react27.default.useState(null);
  const placements2 = Array.isArray(placement) ? placement : [placement];
  const { attributes, styles } = usePopper(anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current, popperElement, {
    strategy,
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: offset2 } },
      { name: "flip", options: { fallbackPlacements: placements2.slice(1) } },
      ...modifiers
    ],
    placement: placements2[0]
  });
  return {
    attributes,
    styles,
    setPopperRef: setPopperElement,
    setArrowRef: setArrowElement
  };
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useForkRef.js
var import_react28 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/setRef.js
function setRef2(ref, value2) {
  if (typeof ref === "function") {
    ref(value2);
  } else if (ref) {
    ref.current = value2;
  }
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useForkRef.js
function useForkRef(refA, refB) {
  return import_react28.default.useMemo(() => {
    if (refA === null && refB === null) {
      return null;
    }
    return (value2) => {
      setRef2(refA, value2);
      setRef2(refB, value2);
    };
  }, [refA, refB]);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Popup/PopupArrow.js
var import_react29 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Popup/Popup.css";
var b5 = block("popup");
function PopupArrow({ styles, attributes, setArrowRef }) {
  return import_react29.default.createElement(
    "div",
    Object.assign({ "data-popper-arrow": true, ref: setArrowRef, className: b5("arrow"), style: styles }, attributes),
    import_react29.default.createElement(
      "div",
      { className: b5("arrow-content") },
      import_react29.default.createElement(
        "div",
        { className: b5("arrow-circle-wrapper") },
        import_react29.default.createElement("div", { className: b5("arrow-circle", { left: true }) })
      ),
      import_react29.default.createElement(
        "div",
        { className: b5("arrow-circle-wrapper") },
        import_react29.default.createElement("div", { className: b5("arrow-circle", { right: true }) })
      )
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Popup/Popup.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Popup/Popup.css";
var b6 = block("popup");
var bWrapper = block("popup-wrapper");
var ARROW_SIZE = 8;
function Popup({ keepMounted = false, hasArrow = false, offset: offset2 = [0, 4], open, placement, anchorRef, disableEscapeKeyDown, disableOutsideClick, disableLayer, style, className, modifiers = [], children: children2, onEscapeKeyDown, onOutsideClick, onClose, onClick, onMouseEnter, onMouseLeave, container, strategy, qa }) {
  const containerRef = import_react30.default.useRef(null);
  useLayer({
    open,
    disableEscapeKeyDown,
    disableOutsideClick,
    onEscapeKeyDown,
    onOutsideClick,
    onClose,
    contentRefs: [anchorRef, containerRef],
    enabled: !disableLayer
  });
  const { attributes, styles, setPopperRef, setArrowRef } = usePopper3({
    anchorRef,
    placement,
    // Take arrow size into offset account
    offset: hasArrow ? [offset2[0], offset2[1] + ARROW_SIZE] : offset2,
    strategy,
    modifiers: [
      // Properly display arrow within rounded container
      { name: "arrow", options: { enabled: hasArrow, padding: 4 } },
      // Prevent border hiding
      { name: "preventOverflow", options: { padding: 1 } },
      ...modifiers
    ]
  });
  const handleRef = useForkRef(setPopperRef, containerRef);
  return import_react30.default.createElement(
    Portal,
    { container },
    import_react30.default.createElement(
      CSSTransition_default,
      { nodeRef: containerRef, in: open, addEndListener: (done) => {
        var _a;
        return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("animationend", done);
      }, classNames: getCSSTransitionClassNames(bWrapper), mountOnEnter: !keepMounted, unmountOnExit: !keepMounted, appear: true },
      import_react30.default.createElement(
        "div",
        Object.assign({ ref: handleRef, style: styles.popper }, attributes.popper, { className: bWrapper({ open }) }),
        import_react30.default.createElement(
          "div",
          { onClick, onMouseEnter, onMouseLeave, tabIndex: -1, className: b6({ open }, className), style, "data-qa": qa },
          hasArrow && import_react30.default.createElement(PopupArrow, { styles: styles.arrow, attributes: attributes.arrow, setArrowRef }),
          children2
        )
      )
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useBoolean.js
var import_react31 = __toESM(require_react());
function useBoolean(initialState2) {
  const [value2, setValue] = (0, import_react31.useState)(initialState2);
  return [
    value2,
    (0, import_react31.useCallback)(() => setValue(true), []),
    (0, import_react31.useCallback)(() => setValue(false), []),
    (0, import_react31.useCallback)(() => setValue((val) => !val), [])
  ];
}

// node_modules/@gravity-ui/uikit/build/esm/components/Tooltip/Tooltip.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Tooltip/Tooltip.css";
var b7 = block("tooltip");
var DEFAULT_PLACEMENT2 = ["bottom", "top"];
var Tooltip = (props) => {
  const { children: children2, content, disabled, placement = DEFAULT_PLACEMENT2 } = props;
  const [anchorElement, setAnchorElement] = (0, import_react32.useState)(null);
  const tooltipVisible = useTooltipVisible(anchorElement, props);
  const renderPopup = () => {
    return import_react32.default.createElement(
      Popup,
      { className: b7(null, props.className), open: tooltipVisible && !disabled, placement, anchorRef: { current: anchorElement }, disableEscapeKeyDown: true, disableOutsideClick: true, disableLayer: true },
      import_react32.default.createElement("div", { className: b7("content", props.contentClassName) }, content)
    );
  };
  const child = import_react32.Children.only(children2);
  const childRef = child.ref;
  const ref = useForkRef(setAnchorElement, childRef);
  return import_react32.default.createElement(
    import_react32.default.Fragment,
    null,
    (0, import_react32.cloneElement)(child, { ref }),
    anchorElement ? renderPopup() : null
  );
};
function useTooltipVisible(anchor, { openDelay, closeDelay }) {
  const [tooltipVisible, showTooltip, hideTooltip] = useBoolean(false);
  const timeoutRef = import_react32.default.useRef();
  (0, import_react32.useEffect)(() => {
    if (!anchor) {
      return void 0;
    }
    function handleHover() {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(showTooltip, openDelay);
    }
    function handleBlur() {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(hideTooltip, closeDelay);
    }
    anchor.addEventListener("mouseenter", handleHover);
    anchor.addEventListener("mouseleave", handleBlur);
    return () => {
      anchor.removeEventListener("mouseenter", handleHover);
      anchor.removeEventListener("mouseleave", handleBlur);
    };
  }, [anchor, showTooltip, hideTooltip, openDelay, closeDelay]);
  return tooltipVisible;
}

// node_modules/@gravity-ui/uikit/build/esm/components/ActionTooltip/ActionTooltip.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ActionTooltip/ActionTooltip.css";
var b8 = block("action-tooltip");
var ActionTooltip = function TooltipLayout(props) {
  const { title, hotkey, description, children: children2 } = props, tooltipProps = __rest(props, ["title", "hotkey", "description", "children"]);
  return import_react33.default.createElement(Tooltip, Object.assign({}, tooltipProps, { className: b8(null, tooltipProps.className), contentClassName: b8("layout"), content: import_react33.default.createElement(
    import_react33.default.Fragment,
    null,
    import_react33.default.createElement(
      "div",
      { className: b8("heading") },
      import_react33.default.createElement("div", { className: b8("title") }, title),
      hotkey && import_react33.default.createElement(Hotkey, { view: "dark", value: hotkey, className: b8("hotkey") })
    ),
    description && import_react33.default.createElement("div", { className: b8("description") }, description)
  ) }), children2);
};

// node_modules/@gravity-ui/uikit/build/esm/components/ArrowToggle/ArrowToggle.js
var import_react36 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Icon/Icon.js
var import_react34 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/svg.js
var a11yHiddenSvgProps = {
  // Hides element from a11y tree
  "aria-hidden": true
};

// node_modules/@gravity-ui/uikit/build/esm/components/Icon/utils.js
function isSpriteData(data) {
  return typeof data === "object";
}
function isSvgrData(data) {
  return typeof data === "function" && (!data.prototype || !data.prototype.render);
}
function isComponentSvgData(data) {
  return typeof data === "object" && "defaultProps" in data;
}
function isStringSvgData(data) {
  return typeof data === "string";
}
function prepareStringData(data) {
  return data.replace(/(width|height)=(["']?)\d+\2/g, "");
}
function getStringViewBox(data) {
  const match = data.match(/viewBox=(["']?)([\d\s,-]+)\1/);
  return match ? match[2] : void 0;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Icon/Icon.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Icon/Icon.css";
var b9 = block("icon");
function Icon({ data, width, height, size: size2, className, onClick, fill = "currentColor", stroke = "none", qa }) {
  let w, h;
  if (size2) {
    w = size2;
    h = size2;
  }
  if (width) {
    w = width;
  }
  if (height) {
    h = height;
  }
  let viewBox;
  if (isSpriteData(data)) {
    ({ viewBox } = data);
  } else if (isStringSvgData(data)) {
    viewBox = getStringViewBox(data);
  } else if (isComponentSvgData(data)) {
    ({ viewBox } = data.defaultProps);
  } else if (isSvgrData(data)) {
    const el = data({});
    if (el) {
      ({ viewBox } = el.props);
    }
  }
  if (viewBox && (!w || !h)) {
    const values2 = viewBox.split(/\s+|\s*,\s*/);
    if (!w) {
      w = values2[2];
    }
    if (!h) {
      h = values2[3];
    }
  }
  const props = Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: w,
    height: h,
    className: b9(null, className),
    onClick,
    fill,
    stroke,
    "data-qa": qa
  }, a11yHiddenSvgProps);
  if (isStringSvgData(data)) {
    const preparedData = prepareStringData(data);
    return import_react34.default.createElement("svg", Object.assign({}, props, { dangerouslySetInnerHTML: { __html: preparedData } }));
  }
  if (isSpriteData(data)) {
    return import_react34.default.createElement(
      "svg",
      Object.assign({}, props, { viewBox }),
      import_react34.default.createElement("use", { xlinkHref: Icon.prefix + (data.url || `#${data.id}`) })
    );
  }
  const IconComponent = data;
  if (IconComponent.defaultProps) {
    IconComponent.defaultProps.width = IconComponent.defaultProps.height = void 0;
  }
  return import_react34.default.createElement(
    "svg",
    Object.assign({}, props),
    import_react34.default.createElement(IconComponent, { width: void 0, height: void 0 })
  );
}
Icon.displayName = "Icon";
Icon.prefix = "";

// node_modules/@gravity-ui/uikit/build/esm/components/icons/ChevronDownIcon.js
var import_react35 = __toESM(require_react());
function ChevronDownIcon(props) {
  return import_react35.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16" }, a11yHiddenSvgProps, props),
    import_react35.default.createElement("path", { stroke: "currentColor", fill: "none", d: "M3 6l5 5 5-5" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/ArrowToggle/ArrowToggle.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ArrowToggle/ArrowToggle.css";
var b10 = block("arrow-toggle");
function ArrowToggle({ size: size2 = 16, direction = "bottom", className }) {
  return import_react36.default.createElement(
    "span",
    { style: { width: size2, height: size2 }, className: b10({ direction }, className) },
    import_react36.default.createElement(Icon, { data: ChevronDownIcon, size: size2 })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/Breadcrumbs.js
var React52 = __toESM(require_react());
var import_throttle = __toESM(require_throttle());

// node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value2) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value2;
        } else {
          this.__entries__.push([key, value2]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = (
  /** @class */
  function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }()
);
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value2) {
  return parseFloat(value2) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size2, position) {
    var value2 = styles["border-" + position + "-width"];
    return size2 + toFloat(value2);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value2 = styles["padding-" + position];
    paddings[position] = toFloat(value2);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = (
  /** @class */
  function() {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }()
);
var ResizeObserverEntry = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  }()
);
var ResizeObserverSPI = (
  /** @class */
  function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }()
);
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserver2(callback) {
      if (!(this instanceof ResizeObserver2)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver2;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
var ResizeObserver_es_default = index;

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/BreadcrumbsItem.js
var React39 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Link/Link.js
var import_react37 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/event-broker.js
var EventBroker = class {
  constructor(prefix) {
    this.subscriptions = [];
    this.componentPrefix = prefix;
  }
  subscribe(subscription) {
    this.subscriptions.push(subscription);
  }
  unsubscribe(subscription) {
    const index2 = this.subscriptions.indexOf(subscription);
    if (index2 > -1) {
      this.subscriptions.splice(index2, 1);
    }
  }
  publish(_a) {
    var { componentId } = _a, restData = __rest(_a, ["componentId"]);
    this.subscriptions.forEach((fn2) => fn2(Object.assign(Object.assign({}, restData), { componentId: this.componentPrefix ? `${this.componentPrefix}${componentId}` : componentId })));
  }
  withEventPublisher(componentId, qa) {
    return (eventBrokerData) => {
      this.publish(Object.assign(Object.assign({}, eventBrokerData), {
        componentId,
        qa
      }));
    };
  }
};
var eventBroker = new EventBroker(NAMESPACE);

// node_modules/@gravity-ui/uikit/build/esm/components/Link/Link.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Link/Link.css";
var b11 = block("link");
var Link = import_react37.default.forwardRef(function Link2({ view = "normal", href, target, rel, title, children: children2, extraProps, onClick, onFocus, onBlur, id, style, className, qa }, ref) {
  const handleClickCapture = import_react37.default.useCallback((event) => {
    eventBroker.publish({
      componentId: "Link",
      eventId: "click",
      domEvent: event
    });
  }, []);
  const commonProps = {
    title,
    children: children2,
    onClick,
    onClickCapture: handleClickCapture,
    onFocus,
    onBlur,
    id,
    style,
    className: b11({ view }, className),
    "data-qa": qa
  };
  if (typeof href === "string") {
    const relProp = target === "_blank" && !rel ? "noopener noreferrer" : rel;
    return import_react37.default.createElement("a", Object.assign({}, extraProps, commonProps, { ref, href, target, rel: relProp }));
  } else {
    return import_react37.default.createElement("span", Object.assign({}, extraProps, commonProps, { ref, tabIndex: 0 }));
  }
});

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/BreadcrumbsItem.js
var b12 = block("breadcrumbs");
function Item({ data, isCurrent, isPrevCurrent, renderItem }) {
  const { text: text2, href, action } = data;
  if (isPrevCurrent || !isCurrent) {
    return React39.createElement(Link, { key: text2, view: "secondary", href, title: text2, onClick: action, className: b12("item", { "prev-current": isPrevCurrent }) }, renderItem ? renderItem(data, isCurrent, isPrevCurrent) : text2);
  }
  return React39.createElement("div", { title: text2, className: b12("item", { current: true }) }, renderItem ? renderItem(data, isCurrent, isPrevCurrent) : text2);
}
var BreadcrumbsItem = React39.memo(Item);
BreadcrumbsItem.displayName = "Breadcrumbs.Item";

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/BreadcrumbsSeparator.js
var React40 = __toESM(require_react());
var b13 = block("breadcrumbs");
function BreadcrumbsSeparator({ renderItemDivider }) {
  return React40.createElement("div", { "aria-hidden": true, className: b13("divider") }, renderItemDivider ? renderItemDivider() : "/");
}
BreadcrumbsSeparator.displayName = "Breadcrumbs.Separator";

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/BreadcrumbsMore.js
var React51 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenu.js
var import_react50 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Button/Button.js
var import_react40 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/isOfType.js
var import_react38 = __toESM(require_react());
function isOfType(Component4) {
  return function isMatching(component) {
    if (!(0, import_react38.isValidElement)(component)) {
      return false;
    }
    const { type } = component;
    return type === Component4 || type.displayName === Component4.displayName;
  };
}

// node_modules/@gravity-ui/uikit/build/esm/components/Button/ButtonIcon.js
var import_react39 = __toESM(require_react());
var b14 = block("button");
var ButtonIcon = ({ side, className, children: children2 }) => {
  return import_react39.default.createElement(
    "span",
    { className: b14("icon", {
      side
    }, className) },
    import_react39.default.createElement("span", { className: b14("icon-inner") }, children2)
  );
};
ButtonIcon.displayName = "Button.Icon";

// node_modules/@gravity-ui/uikit/build/esm/components/utils/common.js
var nextUniqueId = 1;
function getUniqId() {
  return `${NAMESPACE}uniq-${nextUniqueId++}`;
}
var isIcon = isOfType(Icon);

// node_modules/@gravity-ui/uikit/build/esm/components/Button/Button.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Button/Button.css";
var b15 = block("button");
var ButtonWithHandlers = import_react40.default.forwardRef(function Button({ view = "normal", size: size2 = "m", pin = "round-round", selected = false, disabled = false, loading = false, width, title, tabIndex, type = "button", component, href, target, rel, extraProps, onClick, onMouseEnter, onMouseLeave, onFocus, onBlur, children: children2, id, style, className, qa }, ref) {
  const handleClickCapture = import_react40.default.useCallback((event) => {
    eventBroker.publish({
      componentId: "Button",
      eventId: "click",
      domEvent: event,
      meta: {
        content: event.currentTarget.textContent,
        view
      }
    });
  }, [view]);
  const commonProps = {
    title,
    tabIndex,
    onClick,
    onClickCapture: handleClickCapture,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    id,
    style,
    className: b15({
      view,
      size: size2,
      pin,
      selected,
      disabled: disabled || loading,
      loading,
      width
    }, className),
    "data-qa": qa
  };
  if (typeof href === "string" || component) {
    const linkProps = {
      href,
      target,
      rel: target === "_blank" && !rel ? "noopener noreferrer" : rel
    };
    return import_react40.default.createElement(component || "a", Object.assign(Object.assign(Object.assign(Object.assign({}, extraProps), commonProps), component ? {} : linkProps), { ref, "aria-disabled": disabled || loading }), prepareChildren(children2));
  } else {
    return import_react40.default.createElement("button", Object.assign({}, extraProps, commonProps, { ref, type, disabled: disabled || loading }), prepareChildren(children2));
  }
});
ButtonWithHandlers.displayName = "Button";
var Button2 = Object.assign(ButtonWithHandlers, { Icon: ButtonIcon });
var isButtonIconComponent = isOfType(ButtonIcon);
function prepareChildren(children2) {
  const items = import_react40.default.Children.toArray(children2);
  if (items.length === 1) {
    const onlyItem = items[0];
    if (isButtonIconComponent(onlyItem)) {
      return onlyItem;
    } else if (isIcon(onlyItem)) {
      return import_react40.default.createElement(Button2.Icon, { key: "icon" }, onlyItem);
    } else {
      return import_react40.default.createElement("span", { key: "text", className: b15("text") }, onlyItem);
    }
  } else {
    let leftIcon, rightIcon, text2;
    const content = [];
    for (const item of items) {
      const isIconElement = isIcon(item);
      const isButtonIconElement = isButtonIconComponent(item);
      if (isIconElement || isButtonIconElement) {
        if (!leftIcon && content.length === 0) {
          const key = "icon-left";
          const side = "left";
          if (isIconElement) {
            leftIcon = import_react40.default.createElement(Button2.Icon, { key, side }, item);
          } else {
            leftIcon = (0, import_react40.cloneElement)(item, {
              side
            });
          }
        } else if (!rightIcon && content.length !== 0) {
          const key = "icon-right";
          const side = "right";
          if (isIconElement) {
            rightIcon = import_react40.default.createElement(Button2.Icon, { key, side }, item);
          } else {
            rightIcon = (0, import_react40.cloneElement)(item, {
              side
            });
          }
        }
      } else {
        content.push(item);
      }
    }
    if (content.length > 0) {
      text2 = import_react40.default.createElement("span", { key: "text", className: b15("text") }, content);
    }
    return [leftIcon, rightIcon, text2];
  }
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/DotsIcon.js
var import_react41 = __toESM(require_react());
function DotsIcon(props) {
  return import_react41.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react41.default.createElement("path", { d: "M14 6.125a1.874 1.874 0 1 1 .001 3.749A1.874 1.874 0 0 1 14 6.125zm-5.906 0a1.874 1.874 0 1 1 0 3.749 1.874 1.874 0 0 1 0-3.749zM2 6.125a1.874 1.874 0 1 1 .001 3.749A1.874 1.874 0 0 1 2 6.125z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useStateWithCallback.js
var import_react42 = __toESM(require_react());
function useStateWithCallback(initialValue4, callback) {
  const [state, setState] = (0, import_react42.useState)(initialValue4);
  const setWithCallback = (0, import_react42.useCallback)((nextValue) => {
    callback === null || callback === void 0 ? void 0 : callback();
    setState(nextValue);
  }, [callback]);
  return [state, setWithCallback];
}

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenuContext.js
var import_react43 = __toESM(require_react());
var DropdownMenuContext = (0, import_react43.createContext)({
  toggle() {
  },
  data: void 0
});
DropdownMenuContext.displayName = "DropdownMenu.Context";

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenuPopup.js
var import_react49 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Menu/Menu.js
var import_react47 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Menu/MenuItem.js
var import_react44 = __toESM(require_react());
var b16 = block("menu");
var MenuItem = import_react44.default.forwardRef(function MenuItem2({ icon, title, disabled, active, href, target, rel, onClick, style, className, theme, extraProps, children: children2, qa }, ref) {
  const handleClickCapture = import_react44.default.useCallback((event) => {
    eventBroker.publish({
      componentId: "MenuItem",
      eventId: "click",
      domEvent: event
    });
  }, []);
  const commonProps = {
    title,
    onClick: disabled ? void 0 : onClick,
    onClickCapture: disabled ? void 0 : handleClickCapture,
    style,
    tabIndex: disabled ? -1 : 0,
    className: b16("item", { disabled, active, theme }, className),
    qa
  };
  const content = [
    icon && import_react44.default.createElement("div", { key: "icon", className: b16("item-icon") }, icon),
    import_react44.default.createElement("div", { key: "content", className: b16("item-content") }, children2)
  ];
  let item;
  if (href) {
    item = import_react44.default.createElement("a", Object.assign({}, extraProps, commonProps, { href, target, rel }), content);
  } else {
    item = import_react44.default.createElement("div", Object.assign({}, extraProps, commonProps), content);
  }
  return import_react44.default.createElement("li", { ref, className: b16("list-item") }, item);
});

// node_modules/@gravity-ui/uikit/build/esm/components/Menu/MenuGroup.js
var import_react46 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useUniqId.js
var import_react45 = __toESM(require_react());
function useUniqId() {
  const idRef = import_react45.default.useRef(getUniqId());
  return idRef.current;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Menu/MenuGroup.js
var b17 = block("menu");
var MenuGroup = import_react46.default.forwardRef(function MenuGroup2({ label, children: children2, style, className, qa }, ref) {
  const labelId = useUniqId();
  return import_react46.default.createElement(
    "li",
    { ref, className: b17("list-group-item") },
    import_react46.default.createElement(
      "div",
      { style, className: b17("group", className), "data-qa": qa },
      label && import_react46.default.createElement("div", { id: labelId, className: b17("group-label") }, label),
      import_react46.default.createElement("ul", { role: "group", "aria-labelledby": labelId, className: b17("group-list") }, children2)
    )
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/Menu/Menu.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Menu/Menu.css";
var b18 = block("menu");
var Menu = import_react47.default.forwardRef(function Menu2({ size: size2 = "m", children: children2, style, className, qa }, ref) {
  return import_react47.default.createElement("ul", {
    ref,
    role: "menu",
    // tabIndex={0}
    style,
    className: b18({ size: size2 }, className),
    "data-qa": qa
  }, children2);
});
Menu.Item = MenuItem;
Menu.Group = MenuGroup;

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/toItemList.js
function toItemList(items, separator) {
  const updatedItems = [];
  let addedGroup = false;
  for (const item of items) {
    if (Array.isArray(item)) {
      const visibleItems = item.filter(({ hidden }) => !hidden);
      if (visibleItems.length === 0) {
        continue;
      }
      if (updatedItems.length !== 0) {
        updatedItems.push(separator);
      }
      updatedItems.push(...visibleItems);
      addedGroup = true;
    } else {
      if (item.hidden) {
        continue;
      }
      if (addedGroup) {
        updatedItems.push(separator);
      }
      updatedItems.push(item);
      addedGroup = false;
    }
  }
  return updatedItems;
}

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenuItem.js
var import_react48 = __toESM(require_react());
var DropdownMenuItem = (_a) => {
  var { text: text2, children: children2, action } = _a, props = __rest(_a, ["text", "children", "action"]);
  const { toggle, data } = (0, import_react48.useContext)(DropdownMenuContext);
  const onClick = (0, import_react48.useCallback)((event) => {
    action === null || action === void 0 ? void 0 : action(event, data);
    toggle(false);
  }, [action, data, toggle]);
  return import_react48.default.createElement(Menu.Item, Object.assign({ onClick }, props), text2 || children2);
};
DropdownMenuItem.displayName = "DropdownMenu.Item";

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenuPopup.js
var b19 = block("dropdown-menu");
var SEPARATOR = { text: "", action: () => {
} };
var DropdownMenuPopup = ({ items, open, anchorRef, onClose, popupClassName, placement, size: size2, menuProps, children: children2 }) => {
  const content = (0, import_react49.useMemo)(() => {
    return children2 || import_react49.default.createElement(Menu, Object.assign({ className: b19("menu"), size: size2 }, menuProps), toItemList(items, SEPARATOR).map((item, index2) => {
      const { className } = item, itemProps = __rest(item, ["className"]);
      return import_react49.default.createElement(DropdownMenuItem, Object.assign({ key: index2, className: b19("menu-item", { separator: item === SEPARATOR }, className) }, itemProps));
    }));
  }, [children2, size2, menuProps, items]);
  return import_react49.default.createElement(Popup, { open, anchorRef, className: popupClassName, placement, onClose }, content);
};

// node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenu.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenu.css";
var b20 = block("dropdown-menu");
var DropdownMenu = ({ items = [], size: size2 = "m", icon = import_react50.default.createElement(Icon, { data: DotsIcon }), onMenuToggle, hideOnScroll = true, data, disabled, switcher, switcherWrapperClassName, defaultSwitcherProps, defaultSwitcherClassName, onSwitcherClick, menuProps, popupClassName, popupPlacement, children: children2 }) => {
  const [isPopupShown, setPopupShown] = useStateWithCallback(false, onMenuToggle);
  const anchorRef = (0, import_react50.useRef)(null);
  const handleSwitcherClick = (event) => {
    if (disabled) {
      return;
    }
    onSwitcherClick === null || onSwitcherClick === void 0 ? void 0 : onSwitcherClick(event);
    setPopupShown((value2) => !value2);
  };
  const handleClose = (0, import_react50.useCallback)(() => {
    setPopupShown(false);
  }, [setPopupShown]);
  const handleScroll = (0, import_react50.useCallback)((event) => {
    if (event.target.contains(anchorRef.current)) {
      setPopupShown(false);
    }
  }, [setPopupShown]);
  (0, import_react50.useEffect)(() => {
    if (!isPopupShown || !hideOnScroll) {
      return;
    }
    document.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [isPopupShown, hideOnScroll, handleScroll]);
  (0, import_react50.useEffect)(() => {
    if (disabled && isPopupShown) {
      setPopupShown(false);
    }
  }, [disabled, isPopupShown, setPopupShown]);
  const contextValue = (0, import_react50.useMemo)(() => ({
    toggle(open) {
      setPopupShown((popupShown) => {
        if (typeof open === "boolean") {
          return open;
        }
        return !popupShown;
      });
    },
    data
  }), [data, setPopupShown]);
  return import_react50.default.createElement(
    DropdownMenuContext.Provider,
    { value: contextValue },
    import_react50.default.createElement("div", { ref: anchorRef, className: b20("switcher-wrapper", switcherWrapperClassName), onClick: handleSwitcherClick }, switcher || import_react50.default.createElement(Button2, Object.assign({ view: "flat", size: size2 }, defaultSwitcherProps, { className: b20("switcher-button", defaultSwitcherClassName), disabled }), icon)),
    import_react50.default.createElement(DropdownMenuPopup, { popupClassName, items, open: isPopupShown, size: size2, placement: popupPlacement, menuProps, anchorRef, onClose: handleClose }, children2)
  );
};
var DropdownMenuExport = Object.assign(DropdownMenu, { Item: DropdownMenuItem });

// node_modules/@gravity-ui/i18n/build/esm/replace-params.js
var PARAM_REGEXP = /{{(.*?)}}/g;
function replaceParams(keyValue, params) {
  let result = "";
  let lastIndex = PARAM_REGEXP.lastIndex = 0;
  let match;
  while (match = PARAM_REGEXP.exec(keyValue)) {
    if (lastIndex !== match.index) {
      result += keyValue.slice(lastIndex, match.index);
    }
    lastIndex = PARAM_REGEXP.lastIndex;
    const [all, key] = match;
    if (key && Object.prototype.hasOwnProperty.call(params, key)) {
      result += params[key];
    } else {
      result += all;
    }
  }
  if (lastIndex < keyValue.length) {
    result += keyValue.slice(lastIndex);
  }
  return result;
}

// node_modules/@gravity-ui/i18n/build/esm/consts.js
var KEYSET_SEPARATOR = "::";
var MAX_NESTING_DEPTH = 1;
var getNestingTranslationsRegExp = () => new RegExp(/\$t{([^}]+)}/g);

// node_modules/@gravity-ui/i18n/build/esm/translation-helpers.js
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2["EmptyKeyset"] = "EMPTY_KEYSET";
  ErrorCode2["EmptyLanguageData"] = "EMPTY_LANGUAGE_DATA";
  ErrorCode2["KeysetNotFound"] = "KEYSET_NOT_FOUND";
  ErrorCode2["MissingKey"] = "MISSING_KEY";
  ErrorCode2["MissingKeyFor0"] = "MISSING_KEY_FOR_0";
  ErrorCode2["MissingKeyParamsCount"] = "MISSING_KEY_PARAMS_COUNT";
  ErrorCode2["MissingKeyPlurals"] = "MISSING_KEY_PLURALS";
  ErrorCode2["MissingInheritedKey"] = "MISSING_INHERITED_KEY";
  ErrorCode2["NestedPlural"] = "NESTED_PLURAL";
  ErrorCode2["ExceedTranslationNestingDepth"] = "EXCEED_TRANSLATION_NESTING_DEPTH";
  ErrorCode2["NoLanguageData"] = "NO_LANGUAGE_DATA";
})(ErrorCode || (ErrorCode = {}));
var codeValues = Object.values(ErrorCode);
function mapErrorCodeToMessage(args) {
  const { code, fallbackLang, lang } = args;
  let message = `Using language ${lang}. `;
  switch (code) {
    case ErrorCode.EmptyKeyset: {
      message += `Keyset is empty.`;
      break;
    }
    case ErrorCode.EmptyLanguageData: {
      message += "Language data is empty.";
      break;
    }
    case ErrorCode.KeysetNotFound: {
      message += "Keyset not found.";
      break;
    }
    case ErrorCode.MissingKey: {
      message += "Missing key.";
      break;
    }
    case ErrorCode.MissingKeyFor0: {
      message += "Missing key for 0";
      return message;
    }
    case ErrorCode.MissingKeyParamsCount: {
      message += "Missing params.count for key.";
      break;
    }
    case ErrorCode.MissingKeyPlurals: {
      message += "Missing required plurals.";
      break;
    }
    case ErrorCode.NoLanguageData: {
      message = `Language "${lang}" is not defined, make sure you call setLang for the same language you called registerKeysets for!`;
    }
  }
  if (fallbackLang) {
    message += ` Trying to use fallback language "${fallbackLang}"...`;
  }
  return message;
}
var hasNestingTranslations = (keyValue) => {
  var _a;
  const NESTING_PREGEXP = getNestingTranslationsRegExp();
  const match = NESTING_PREGEXP.exec(keyValue);
  return ((_a = match === null || match === void 0 ? void 0 : match.length) !== null && _a !== void 0 ? _a : 0) > 0;
};
var getPluralValues = (keyValue) => {
  if (keyValue instanceof Array) {
    return keyValue;
  } else if (keyValue instanceof Object) {
    return Object.values(keyValue);
  }
  return [];
};

// node_modules/@gravity-ui/i18n/build/esm/types.js
var PluralForm;
(function(PluralForm2) {
  PluralForm2[PluralForm2["One"] = 0] = "One";
  PluralForm2[PluralForm2["Few"] = 1] = "Few";
  PluralForm2[PluralForm2["Many"] = 2] = "Many";
  PluralForm2[PluralForm2["None"] = 3] = "None";
})(PluralForm || (PluralForm = {}));
function isPluralValue(value2) {
  return typeof value2 !== "string";
}

// node_modules/@gravity-ui/i18n/build/esm/plural/en.js
function en_default(count, pluralForms) {
  if (count === 0) {
    return pluralForms.None;
  }
  if (count === 1 || count === -1) {
    return pluralForms.One;
  }
  return pluralForms.Many;
}

// node_modules/@gravity-ui/i18n/build/esm/plural/ru.js
function ru_default(count, pluralForms) {
  const lastDigit = Math.abs(count % 10);
  const last2Digits = Math.abs(count % 100);
  if (count === 0) {
    return pluralForms.None;
  }
  if (lastDigit === 1 && last2Digits !== 11) {
    return pluralForms.One;
  }
  if (lastDigit > 1 && lastDigit < 5 && (last2Digits < 10 || last2Digits > 20)) {
    return pluralForms.Few;
  }
  return pluralForms.Many;
}

// node_modules/@gravity-ui/i18n/build/esm/plural/general.js
function getPluralViaIntl(value2, count, lang) {
  if (value2.zero && count === 0) {
    return value2.zero;
  }
  if (!Intl.PluralRules) {
    throw new Error("Intl.PluralRules is not available. Use polyfill.");
  }
  const pluralRules = new Intl.PluralRules(lang);
  const form = pluralRules.select(count);
  if (form === "other" && typeof value2.other === "undefined") {
    return value2.many || value2.few;
  }
  return value2[form] || value2.other;
}
function getPluralValue({ value: value2, count, lang, pluralizers, log, key }) {
  if (!Array.isArray(value2)) {
    return getPluralViaIntl(value2, count, lang) || key;
  }
  if (!pluralizers) {
    log("Can not use deprecated plural format without pluralizers");
    return key;
  }
  if (!pluralizers[lang]) {
    log(`Pluralization is not configured for language '${lang}', falling back to the english ruleset`);
  }
  if (value2.length < 3) {
    log("Missing required plurals");
    return key;
  }
  const pluralizer = pluralizers[lang] || pluralizers["en"];
  if (!pluralizer) {
    log("Fallback pluralization is not configured!");
    return key;
  }
  return value2[pluralizer(count, PluralForm)] || value2[PluralForm.Many] || key;
}

// node_modules/@gravity-ui/i18n/build/esm/index.js
var I18N = class {
  constructor(options = {}) {
    this.data = {};
    this.pluralizers = {
      en: en_default,
      ru: ru_default
    };
    this.logger = null;
    const { data, fallbackLang, lang, logger = null } = options;
    this.fallbackLang = fallbackLang;
    this.lang = lang;
    this.logger = logger;
    if (data) {
      Object.entries(data).forEach(([keysetLang, keysetData]) => {
        this.registerKeysets(keysetLang, keysetData);
      });
    }
  }
  setLang(lang) {
    this.lang = lang;
  }
  setFallbackLang(fallbackLang) {
    this.fallbackLang = fallbackLang;
  }
  /**
   * @deprecated Plurals automatically used from Intl.PluralRules. You can safely remove this call. Will be removed in v2.
   */
  configurePluralization(pluralizers) {
    this.pluralizers = Object.assign({}, this.pluralizers, pluralizers);
  }
  registerKeyset(lang, keysetName, data = {}) {
    const isAlreadyRegistered = this.data[lang] && Object.prototype.hasOwnProperty.call(this.data[lang], keysetName);
    if (isAlreadyRegistered && true) {
      this.warn(`Keyset '${keysetName}' is already registered.`);
    }
    this.data[lang] = Object.assign({}, this.data[lang], { [keysetName]: data });
  }
  registerKeysets(lang, data) {
    Object.keys(data).forEach((keysetName) => {
      this.registerKeyset(lang, keysetName, data[keysetName]);
    });
  }
  has(keysetName, key, lang) {
    var _a;
    const languageData = this.getLanguageData(lang);
    return Boolean(languageData && languageData[keysetName] && ((_a = languageData[keysetName]) === null || _a === void 0 ? void 0 : _a[key]));
  }
  i18n(keysetName, key, params) {
    if (!this.lang && !this.fallbackLang) {
      throw new Error('Language is not specified. You should set at least one of these: "lang", "fallbackLang"');
    }
    let text2;
    if (this.lang) {
      text2 = this._i18n(keysetName, key, this.lang, params);
    } else {
      this.warn("Target language is not specified.");
    }
    if (text2 === void 0 && this.fallbackLang && this.fallbackLang !== this.lang) {
      text2 = this._i18n(keysetName, key, this.fallbackLang, params);
    }
    return text2 !== null && text2 !== void 0 ? text2 : key;
  }
  keyset(keysetName) {
    return (key, params) => {
      return this.i18n(keysetName, key, params);
    };
  }
  warn(msg, keyset, key) {
    var _a;
    let cacheKey = "";
    if (keyset) {
      cacheKey += keyset;
      if (key) {
        cacheKey += `.${key}`;
      }
    } else {
      cacheKey = "languageData";
    }
    (_a = this.logger) === null || _a === void 0 ? void 0 : _a.log(`I18n: ${msg}`, {
      level: "info",
      logger: cacheKey,
      extra: {
        type: "i18n"
      }
    });
  }
  getLanguageData(lang) {
    const langCode = lang || this.lang;
    return langCode ? this.data[langCode] : void 0;
  }
  _i18n(keysetName, key, lang, params) {
    const { text: text2, details } = new I18NTranslation(this, lang, key, keysetName, params).getTranslationData();
    if (details) {
      const message = mapErrorCodeToMessage({
        code: details.code,
        lang,
        fallbackLang: this.fallbackLang === lang ? void 0 : this.fallbackLang
      });
      this.warn(message, details.keysetName, details.key);
    }
    return text2;
  }
};
var I18NTranslation = class _I18NTranslation {
  constructor(i18n2, lang, key, keysetName, params, nestingDepth) {
    this.i18n = i18n2;
    this.lang = lang;
    this.key = key;
    this.keysetName = keysetName;
    this.params = params;
    this.nestingDepth = nestingDepth !== null && nestingDepth !== void 0 ? nestingDepth : 0;
  }
  getTranslationData() {
    var _a;
    const { data: keyset, details } = this.getKeyset();
    if (details) {
      return { details };
    }
    const keyValue = keyset && keyset[this.key];
    const result = {};
    if (keyValue === void 0) {
      return this.getTranslationDataError(ErrorCode.MissingKey);
    }
    if (isPluralValue(keyValue)) {
      const isNested = this.nestingDepth > 0;
      const isPluralValueHasNestingTranslations = getPluralValues(keyValue).some((kv) => hasNestingTranslations(kv));
      if (isNested || isPluralValueHasNestingTranslations) {
        return this.getTranslationDataError(ErrorCode.NestedPlural);
      }
      const count = Number((_a = this.params) === null || _a === void 0 ? void 0 : _a.count);
      if (Number.isNaN(count)) {
        return this.getTranslationDataError(ErrorCode.MissingKeyParamsCount);
      }
      result.text = getPluralValue({
        key: this.key,
        value: keyValue,
        count,
        lang: this.lang || "en",
        pluralizers: this.i18n.pluralizers,
        log: (message) => this.i18n.warn(message, this.keysetName, this.key)
      });
    } else {
      result.text = String(keyValue);
    }
    if (this.params) {
      result.text = replaceParams(String(result.text), this.params);
    }
    const replaceTranslationsInheritanceResult = this.replaceTranslationsInheritance({
      keyValue: String(result.text)
    });
    if (!replaceTranslationsInheritanceResult.text) {
      return replaceTranslationsInheritanceResult;
    }
    result.text = replaceTranslationsInheritanceResult.text;
    return result;
  }
  getTranslationDataError(errorCode) {
    return { details: { code: errorCode, keysetName: this.keysetName, key: this.key } };
  }
  getKeyset() {
    const languageData = this.i18n.getLanguageData(this.lang);
    if (typeof languageData === "undefined") {
      return this.getTranslationDataError(ErrorCode.NoLanguageData);
    }
    if (Object.keys(languageData).length === 0) {
      return this.getTranslationDataError(ErrorCode.EmptyLanguageData);
    }
    const keyset = languageData[this.keysetName];
    if (!keyset) {
      return this.getTranslationDataError(ErrorCode.KeysetNotFound);
    }
    if (Object.keys(keyset).length === 0) {
      return this.getTranslationDataError(ErrorCode.EmptyKeyset);
    }
    return { data: keyset };
  }
  replaceTranslationsInheritance(args) {
    const { keyValue } = args;
    const NESTING_PREGEXP = getNestingTranslationsRegExp();
    let result = "";
    let lastIndex = NESTING_PREGEXP.lastIndex = 0;
    let match;
    while (match = NESTING_PREGEXP.exec(keyValue)) {
      if (lastIndex !== match.index) {
        result += keyValue.slice(lastIndex, match.index);
      }
      lastIndex = NESTING_PREGEXP.lastIndex;
      const [all, key] = match;
      if (key) {
        if (this.nestingDepth + 1 > MAX_NESTING_DEPTH) {
          return this.getTranslationDataError(ErrorCode.ExceedTranslationNestingDepth);
        }
        let [inheritedKey, inheritedKeysetName] = [
          key,
          void 0
        ];
        const parts = key.split(KEYSET_SEPARATOR);
        if (parts.length > 1) {
          [inheritedKeysetName, inheritedKey] = [parts[0], parts[1]];
        }
        if (!inheritedKey) {
          return this.getTranslationDataError(ErrorCode.MissingInheritedKey);
        }
        const data = new _I18NTranslation(this.i18n, this.lang, inheritedKey, inheritedKeysetName !== null && inheritedKeysetName !== void 0 ? inheritedKeysetName : this.keysetName, void 0, this.nestingDepth + 1).getTranslationData();
        if (data.details) {
          return this.getTranslationDataError(ErrorCode.MissingInheritedKey);
        }
        result += data.text;
      } else {
        result += all;
      }
    }
    if (lastIndex < keyValue.length) {
      result += keyValue.slice(lastIndex);
    }
    return { text: result };
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/utils/configure.js
var Lang;
(function(Lang2) {
  Lang2["Ru"] = "ru";
  Lang2["En"] = "en";
})(Lang || (Lang = {}));
var subs = [];
var config = {
  lang: Lang.En
};
var configure = (newConfig) => {
  Object.assign(config, newConfig);
  subs.forEach((sub) => {
    sub(config);
  });
};
var subscribeConfigure = (sub) => {
  subs.push(sub);
  return () => {
    subs = subs.filter((item) => item !== sub);
  };
};
var getConfig = () => config;

// node_modules/@gravity-ui/uikit/build/esm/i18n.js
var i18n = new I18N();
i18n.setLang(getConfig().lang);
subscribeConfigure((config2) => {
  i18n.setLang(config2.lang);
});

// node_modules/@gravity-ui/uikit/build/esm/components/utils/registerKeyset.js
function registerKeyset(data, keysetName) {
  Object.entries(data).forEach(([lang, keys]) => i18n.registerKeyset(lang, keysetName, keys));
  return i18n.keyset(keysetName);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/i18n/en.json
var en_default2 = {
  label_more: "Show more"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/i18n/ru.json
var ru_default2 = {
  label_more: "Показать больше"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/i18n/index.js
var COMPONENT = "Breadcrumbs";
var i18n_default = registerKeyset({ en: en_default2, ru: ru_default2 }, COMPONENT);

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/BreadcrumbsMore.js
var b21 = block("breadcrumbs");
function Switcher() {
  return React51.createElement(Link, { view: "secondary", title: i18n_default("label_more"), className: b21("item", { more: true }) }, "...");
}
function BreadcrumbsMore({ popupStyle, popupPlacement, items }) {
  return React51.createElement(DropdownMenuExport, { items, popupClassName: b21("popup", {
    staircase: popupStyle === "staircase"
  }), popupPlacement, switcher: React51.createElement(Switcher, null) });
}
BreadcrumbsMore.displayName = "Breadcrumbs.More";

// node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/Breadcrumbs.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Breadcrumbs/Breadcrumbs.css";
var RESIZE_THROTTLE = 200;
var MORE_ITEM_WIDTH = 34;
var DEFAULT_POPUP_PLACEMENT = ["bottom", "top"];
var b22 = block("breadcrumbs");
var LastDisplayedItemsCount;
(function(LastDisplayedItemsCount2) {
  LastDisplayedItemsCount2[LastDisplayedItemsCount2["One"] = 1] = "One";
  LastDisplayedItemsCount2[LastDisplayedItemsCount2["Two"] = 2] = "Two";
})(LastDisplayedItemsCount || (LastDisplayedItemsCount = {}));
var FirstDisplayedItemsCount;
(function(FirstDisplayedItemsCount2) {
  FirstDisplayedItemsCount2[FirstDisplayedItemsCount2["Zero"] = 0] = "Zero";
  FirstDisplayedItemsCount2[FirstDisplayedItemsCount2["One"] = 1] = "One";
})(FirstDisplayedItemsCount || (FirstDisplayedItemsCount = {}));
var Breadcrumbs = class _Breadcrumbs extends React52.Component {
  constructor(props) {
    super(props);
    this.handleResize = () => {
      const state = _Breadcrumbs.prepareInitialState(this.props);
      this.setState(state, this.recalculate);
    };
    this.handleResize = (0, import_throttle.default)(this.handleResize, RESIZE_THROTTLE);
    this.resizeObserver = new ResizeObserver_es_default(this.handleResize);
    this.container = React52.createRef();
    this.state = _Breadcrumbs.prepareInitialState(props);
  }
  static prepareInitialState(props) {
    const { firstDisplayedItemsCount } = props;
    return {
      calculated: false,
      rootItem: firstDisplayedItemsCount ? props.items[0] : void 0,
      visibleItems: props.items.slice(firstDisplayedItemsCount),
      hiddenItems: [],
      allItems: props.items
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.allItems !== props.items) {
      return _Breadcrumbs.prepareInitialState(props);
    }
    return null;
  }
  componentDidMount() {
    this.recalculate();
    this.resizeObserver.observe(this.container.current);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.state.allItems) {
      this.recalculate();
    }
  }
  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }
  render() {
    const { className } = this.props;
    const { calculated } = this.state;
    const rootItem = this.renderRootItem();
    return React52.createElement(
      "div",
      { className: b22({ calculated: calculated ? "yes" : "no" }, className) },
      React52.createElement(
        "div",
        { className: b22("inner"), ref: this.container },
        rootItem,
        this.renderMoreItem(),
        this.renderVisibleItems()
      )
    );
  }
  renderItem(data, isCurrent, isPrevCurrent) {
    const { renderItemContent } = this.props;
    return React52.createElement(BreadcrumbsItem, { data, isCurrent, isPrevCurrent, renderItem: renderItemContent });
  }
  renderItemDivider() {
    const { renderItemDivider } = this.props;
    return React52.createElement(BreadcrumbsSeparator, { renderItemDivider });
  }
  renderRootItem() {
    const { renderRootContent, renderItemContent } = this.props;
    const { rootItem, visibleItems } = this.state;
    const isCurrent = visibleItems.length === 0;
    if (!rootItem) {
      return null;
    }
    return React52.createElement(BreadcrumbsItem, { data: rootItem, isCurrent, isPrevCurrent: false, renderItem: renderRootContent || renderItemContent });
  }
  renderVisibleItems() {
    const { visibleItems } = this.state;
    return visibleItems.map((item, index2, items) => {
      const isCurrent = index2 === items.length - 1;
      const isPrevCurrent = index2 === items.length - 2;
      return React52.createElement(
        React52.Fragment,
        { key: index2 },
        this.renderItemDivider(),
        this.renderItem(item, isCurrent, isPrevCurrent)
      );
    });
  }
  renderMoreItem() {
    const { hiddenItems } = this.state;
    if (hiddenItems.length === 0) {
      return null;
    }
    const { popupStyle, popupPlacement, renderItemDivider } = this.props;
    return React52.createElement(
      React52.Fragment,
      null,
      React52.createElement(BreadcrumbsSeparator, { renderItemDivider }),
      React52.createElement(BreadcrumbsMore, { items: hiddenItems, popupPlacement, popupStyle })
    );
  }
  recalculate() {
    const { items: allItems, lastDisplayedItemsCount, firstDisplayedItemsCount } = this.props;
    if (this.container.current) {
      const dividers = Array.from(this.container.current.querySelectorAll(`.${b22("divider")}`));
      const items = Array.from(this.container.current.querySelectorAll(`.${b22("item")}`));
      const availableWidth = this.container.current.offsetWidth;
      const itemsWidths = items.map((elem) => elem.scrollWidth);
      const dividersWidths = dividers.map((elem) => elem.offsetWidth);
      const buttonsWidth = itemsWidths.reduce((total, width, index2, widths) => {
        const isLastItem = widths.length - 1 === index2;
        const isItemBeforeLast = lastDisplayedItemsCount === LastDisplayedItemsCount.Two && widths.length - 2 === index2;
        if (isLastItem || isItemBeforeLast) {
          return total + Math.min(width, 200);
        }
        return total + width;
      }, 0);
      const dividersWidth = dividersWidths.reduce((total, width) => total + width, 0);
      let totalWidth = buttonsWidth + dividersWidth;
      let visibleItemsStartIndex = 1;
      while (totalWidth > availableWidth && visibleItemsStartIndex < items.length - lastDisplayedItemsCount) {
        if (visibleItemsStartIndex === 1) {
          totalWidth += MORE_ITEM_WIDTH + dividersWidths[visibleItemsStartIndex];
        }
        totalWidth -= itemsWidths[visibleItemsStartIndex] + dividersWidths[visibleItemsStartIndex];
        visibleItemsStartIndex++;
      }
      this.setState({
        calculated: true,
        visibleItems: allItems.slice(visibleItemsStartIndex - (1 - firstDisplayedItemsCount)),
        hiddenItems: allItems.slice(firstDisplayedItemsCount, visibleItemsStartIndex - (1 - firstDisplayedItemsCount))
      });
    }
  }
};
Breadcrumbs.defaultProps = {
  popupPlacement: DEFAULT_POPUP_PLACEMENT
};

// node_modules/@gravity-ui/uikit/build/esm/components/Checkbox/Checkbox.js
var import_react54 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useCheckbox.js
var import_react51 = __toESM(require_react());
function useCheckbox({ name, value: value2, id, defaultChecked, checked, indeterminate, onUpdate, onChange, controlRef, controlProps, onFocus, onBlur, disabled }) {
  const innerControlRef = import_react51.default.useRef(null);
  const [checkedState, setCheckedState] = import_react51.default.useState(defaultChecked !== null && defaultChecked !== void 0 ? defaultChecked : false);
  const isControlled = typeof checked === "boolean";
  const isChecked = isControlled ? checked : checkedState;
  const inputChecked = indeterminate ? false : checked;
  const inputAriaChecked = indeterminate ? "mixed" : isChecked;
  const handleRef = useForkRef(controlRef, innerControlRef);
  import_react51.default.useLayoutEffect(() => {
    if (innerControlRef.current) {
      innerControlRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);
  const handleChange = (event) => {
    if (!isControlled) {
      setCheckedState(event.target.checked);
    }
    if (onChange) {
      onChange(event);
    }
    if (onUpdate) {
      onUpdate(event.target.checked);
    }
  };
  const handleClickCapture = import_react51.default.useCallback((event) => {
    eventBroker.publish({
      componentId: "Checkbox",
      eventId: "click",
      domEvent: event,
      meta: {
        checked: event.target.checked
      }
    });
  }, []);
  const inputProps = Object.assign(Object.assign({}, controlProps), {
    name,
    value: value2,
    id,
    onFocus,
    onBlur,
    disabled,
    type: "checkbox",
    onChange: handleChange,
    onClickCapture: handleClickCapture,
    defaultChecked,
    checked: inputChecked,
    "aria-checked": inputAriaChecked,
    ref: handleRef
  });
  return { checked: isChecked, inputProps };
}

// node_modules/@gravity-ui/uikit/build/esm/components/Checkbox/CheckboxTickIcon.js
var import_react52 = __toESM(require_react());
function CheckboxTickIcon(props) {
  return import_react52.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 10", width: "16", height: "16", fill: "currentColor" }, props),
    import_react52.default.createElement("path", { d: "M.49 5.385l1.644-1.644 4.385 4.385L4.874 9.77.49 5.385zm4.384 1.096L10.356 1 12 2.644 6.519 8.126 4.874 6.48v.001z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Checkbox/CheckboxDashIcon.js
var import_react53 = __toESM(require_react());
function CheckboxDashIcon(props) {
  return import_react53.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17 17", width: "16", height: "16", fill: "currentColor" }, props),
    import_react53.default.createElement("path", { d: "M4 7h9v3H4z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Checkbox/Checkbox.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Checkbox/Checkbox.css";
var b23 = block("checkbox");
var Checkbox = import_react54.default.forwardRef(function Checkbox2(props, ref) {
  const { size: size2 = "m", indeterminate, disabled = false, content, children: children2, title, style, className, qa } = props;
  const { checked, inputProps } = useCheckbox(props);
  const text2 = content || children2;
  return import_react54.default.createElement(
    "label",
    { ref, title, style, className: b23({
      size: size2,
      disabled,
      indeterminate,
      checked
    }, className), "data-qa": qa },
    import_react54.default.createElement(
      "span",
      { className: b23("indicator") },
      import_react54.default.createElement("span", { className: b23("icon"), "aria-hidden": true }, indeterminate ? import_react54.default.createElement(CheckboxDashIcon, { className: b23("icon-svg", { type: "dash" }) }) : import_react54.default.createElement(CheckboxTickIcon, { className: b23("icon-svg", { type: "tick" }) })),
      import_react54.default.createElement("input", Object.assign({}, inputProps, { className: b23("control") })),
      import_react54.default.createElement("span", { className: b23("outline") })
    ),
    text2 && import_react54.default.createElement("span", { className: b23("text") }, text2)
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/Card/Card.js
var import_react55 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Card/Card.css";
var b24 = block("card");
var Card = import_react55.default.forwardRef(function Card2(props, ref) {
  const { type = "container", theme, view, children: children2, className, onClick, disabled, selected } = props;
  const isTypeAction = type === "action";
  const isTypeSelection = type === "selection";
  const isTypeContainer = type === "container";
  const hasAction = isTypeAction || isTypeSelection;
  const isClickable = hasAction && Boolean(onClick) && !(disabled || selected);
  const defaultTheme = isTypeContainer ? "normal" : void 0;
  const defaultView = isTypeContainer || isTypeSelection ? "outlined" : void 0;
  return import_react55.default.createElement("div", { ref, className: b24({
    theme: theme || defaultTheme,
    view: view || defaultView,
    type,
    selected,
    disabled,
    clickable: isClickable
  }, className), onClick: isClickable ? onClick : void 0 }, children2);
});

// node_modules/@gravity-ui/uikit/build/esm/components/ClipboardButton/ClipboardButton.js
var import_react58 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/ClipboardIcon/ClipboardIcon.js
var import_react56 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/CopyToClipboard/types.js
var CopyToClipboardStatus;
(function(CopyToClipboardStatus2) {
  CopyToClipboardStatus2["Pending"] = "pending";
  CopyToClipboardStatus2["Success"] = "success";
  CopyToClipboardStatus2["Error"] = "error";
})(CopyToClipboardStatus || (CopyToClipboardStatus = {}));

// node_modules/@gravity-ui/uikit/build/esm/components/ClipboardIcon/ClipboardIcon.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ClipboardIcon/ClipboardIcon.css";
var b25 = block("clipboard-icon");
var renderStatusPath = (path) => import_react56.default.createElement("path", { stroke: "currentColor", fill: "transparent", className: b25("state"), strokeWidth: "1.5", d: path });
var STATUS_PATH = {
  [CopyToClipboardStatus.Success]: renderStatusPath("M9.5 13l3 3l5 -5"),
  [CopyToClipboardStatus.Error]: renderStatusPath("M9.5 10l8 8m-8 0l8 -8")
};
function ClipboardIcon({ size: size2, status, className }) {
  return import_react56.default.createElement(
    "svg",
    Object.assign({ width: size2, height: size2, viewBox: "0 0 24 24", className: b25(null, className) }, a11yHiddenSvgProps),
    import_react56.default.createElement("path", { fill: "currentColor", d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }),
    status === CopyToClipboardStatus.Pending ? null : STATUS_PATH[status]
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/CopyToClipboard/CopyToClipboard.js
var import_react57 = __toESM(require_react());
var import_react_copy_to_clipboard = __toESM(require_lib3());
var CopyToClipboard = class _CopyToClipboard extends import_react57.default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      status: _CopyToClipboard.INITIAL_STATUS
    };
    this.handleCopy = (text2, result) => {
      const { timeout: timeout2, onCopy } = this.props;
      this.setState({
        status: result ? CopyToClipboardStatus.Success : CopyToClipboardStatus.Error
      });
      clearTimeout(this.timerId);
      this.timerId = window.setTimeout(() => {
        this.setState({ status: _CopyToClipboard.INITIAL_STATUS });
        this.timerId = void 0;
      }, timeout2);
      onCopy === null || onCopy === void 0 ? void 0 : onCopy(text2, result);
    };
  }
  componentWillUnmount() {
    clearTimeout(this.timerId);
  }
  render() {
    const { children: children2, text: text2, options } = this.props;
    const { status } = this.state;
    const content = children2(status);
    if (!import_react57.default.isValidElement(content)) {
      throw new Error("Content must be a valid react element");
    }
    return import_react57.default.createElement(import_react_copy_to_clipboard.default, { text: String(text2), onCopy: this.handleCopy, options }, content);
  }
};
CopyToClipboard.INITIAL_STATUS = CopyToClipboardStatus.Pending;

// node_modules/@gravity-ui/uikit/build/esm/components/ClipboardButton/ClipboardButton.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ClipboardButton/ClipboardButton.css";
var b26 = block("clipboard-button");
var DEFAULT_ICON_SIZE = 24;
var DEFAULT_TIMEOUT = 1e3;
function ClipboardButton({ text: text2, size: size2 = DEFAULT_ICON_SIZE, className, qa, onCopy, timeout: timeout2 = DEFAULT_TIMEOUT, options }) {
  const buttonRef = (0, import_react58.useRef)(null);
  (0, import_react58.useEffect)(() => {
    var _a;
    (_a = buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty("--yc-button-height", `${size2}px`);
  }, [size2]);
  return import_react58.default.createElement(CopyToClipboard, { text: text2, timeout: timeout2, onCopy, options }, (status) => import_react58.default.createElement(
    Button2,
    { ref: buttonRef, view: "flat", className: b26(null, className), qa },
    import_react58.default.createElement(
      Button2.Icon,
      null,
      import_react58.default.createElement(ClipboardIcon, { status, size: size2, className: b26("icon") })
    )
  ));
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/Dialog.js
var import_react67 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Modal/Modal.js
var import_react60 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useBodyScrollLock.js
var import_react59 = __toESM(require_react());
var locks = 0;
var storedBodyStyle;
function useBodyScrollLock({ enabled }) {
  import_react59.default.useLayoutEffect(() => {
    if (enabled) {
      locks++;
      if (locks === 1) {
        setBodyStyles();
      }
      return () => {
        locks--;
        if (locks === 0) {
          restoreBodyStyles();
        }
      };
    }
    return void 0;
  }, [enabled]);
}
function setBodyStyles() {
  const yScrollbarWidth = getYScrollbarWidth();
  const xScrollbarWidth = getXScrollbarWidth();
  const bodyPadding = getBodyComputedPadding();
  storedBodyStyle = document.body.style.cssText;
  document.body.style.overflow = "hidden";
  if (yScrollbarWidth) {
    document.body.style.paddingRight = `${bodyPadding.right + yScrollbarWidth}px`;
  }
  if (xScrollbarWidth) {
    document.body.style.paddingBottom = `${bodyPadding.bottom + xScrollbarWidth}px`;
  }
}
function restoreBodyStyles() {
  if (storedBodyStyle) {
    document.body.style.cssText = storedBodyStyle;
  } else {
    document.body.removeAttribute("style");
  }
}
function getYScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}
function getXScrollbarWidth() {
  return window.innerHeight - document.documentElement.clientHeight;
}
function getBodyComputedPadding() {
  const computedStyle = window.getComputedStyle(document.body);
  return {
    top: Number.parseFloat(computedStyle.paddingTop),
    right: Number.parseFloat(computedStyle.paddingRight),
    bottom: Number.parseFloat(computedStyle.paddingBottom),
    left: Number.parseFloat(computedStyle.paddingLeft)
  };
}

// node_modules/@gravity-ui/uikit/build/esm/components/Modal/Modal.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Modal/Modal.css";
var b27 = block("modal");
function Modal({
  open = false,
  keepMounted = false,
  disableBodyScrollLock = false,
  // disableFocusTrap = false,
  disableEscapeKeyDown,
  disableOutsideClick,
  onEscapeKeyDown,
  onEnterKeyDown,
  onOutsideClick,
  onClose,
  children: children2,
  style,
  className,
  contentClassName,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
  container,
  qa
}) {
  const containerRef = import_react60.default.useRef(null);
  const contentRef = import_react60.default.useRef(null);
  const [inTransition, setInTransition] = import_react60.default.useState(false);
  useBodyScrollLock({ enabled: !disableBodyScrollLock && (open || inTransition) });
  useLayer({
    open,
    disableEscapeKeyDown,
    disableOutsideClick,
    onEscapeKeyDown,
    onEnterKeyDown,
    onOutsideClick,
    onClose,
    contentRefs: [contentRef]
  });
  return import_react60.default.createElement(
    Portal,
    { container },
    import_react60.default.createElement(
      CSSTransition_default,
      { nodeRef: containerRef, in: open, addEndListener: (done) => {
        var _a;
        return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("animationend", done);
      }, classNames: getCSSTransitionClassNames(b27), mountOnEnter: !keepMounted, unmountOnExit: !keepMounted, appear: true, onEnter: () => setInTransition(true), onExit: () => setInTransition(true), onEntered: () => setInTransition(false), onExited: () => setInTransition(false) },
      import_react60.default.createElement(
        "div",
        { ref: containerRef, style, className: b27({ open }, className), "data-qa": qa },
        import_react60.default.createElement(
          "div",
          { className: b27("table") },
          import_react60.default.createElement(
            "div",
            { className: b27("cell") },
            import_react60.default.createElement("div", { ref: contentRef, tabIndex: -1, role: "dialog", "aria-modal": open, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: b27("content", contentClassName) }, children2)
          )
        )
      )
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogFooter/DialogFooter.js
var import_react61 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogFooter/DialogFooter.css";
var b28 = block("dialog-footer");
function getButtonView(preset) {
  switch (preset) {
    case "default":
      return "action";
    case "success":
      return "action";
    case "danger":
      return "action";
    default:
      return "action";
  }
}
var DialogFooter = class extends import_react61.default.Component {
  constructor() {
    super(...arguments);
    this.errorTooltipRef = import_react61.default.createRef();
    this.handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (this.props.onClickButtonApply) {
          this.props.onClickButtonApply(event);
        }
      }
    };
  }
  componentDidMount() {
    if (this.props.listenKeyEnter) {
      this.attachKeyDownListeners();
    }
  }
  componentDidUpdate(prevProps) {
    if (!this.props.listenKeyEnter && prevProps.listenKeyEnter) {
      this.detachKeyDownListeners();
    }
    if (this.props.listenKeyEnter && !prevProps.listenKeyEnter) {
      this.attachKeyDownListeners();
    }
  }
  componentWillUnmount() {
    this.detachKeyDownListeners();
  }
  render() {
    const { onClickButtonCancel, onClickButtonApply, loading, textButtonCancel, textButtonApply, propsButtonCancel, propsButtonApply, preset, children: children2, errorText, showError, renderButtons } = this.props;
    const buttonCancel = import_react61.default.createElement(
      "div",
      { className: b28("button", { action: "cancel" }) },
      import_react61.default.createElement(Button2, Object.assign({ view: textButtonApply ? "flat" : "normal", size: "l", width: "max", onClick: onClickButtonCancel, disabled: loading }, propsButtonCancel), textButtonCancel)
    );
    const buttonApply = import_react61.default.createElement(
      "div",
      { className: b28("button", { action: "apply" }) },
      import_react61.default.createElement(Button2, Object.assign({ ref: this.errorTooltipRef, type: "submit", view: getButtonView(preset), size: "l", width: "max", onClick: onClickButtonApply, loading, className: b28("button-apply", { preset }) }, propsButtonApply), textButtonApply),
      errorText && import_react61.default.createElement(
        Popup,
        { open: showError, anchorRef: this.errorTooltipRef, placement: ["bottom", "top"], hasArrow: true },
        import_react61.default.createElement("div", { className: b28("error") }, errorText)
      )
    );
    return import_react61.default.createElement(
      "div",
      { className: b28() },
      import_react61.default.createElement("div", { className: b28("children") }, children2),
      import_react61.default.createElement("div", { className: b28("bts-wrapper") }, renderButtons ? renderButtons(buttonApply, buttonCancel) : import_react61.default.createElement(
        import_react61.default.Fragment,
        null,
        textButtonCancel && buttonCancel,
        textButtonApply && buttonApply
      ))
    );
  }
  attachKeyDownListeners() {
    setTimeout(() => {
      window.addEventListener("keydown", this.handleKeyDown);
    }, 0);
  }
  detachKeyDownListeners() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
};
DialogFooter.defaultProps = {
  preset: "default",
  showError: false,
  listenKeyEnter: false
};

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogHeader/DialogHeader.js
var import_react62 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogHeader/DialogHeader.css";
var b29 = block("dialog-header");
function DialogHeader(props) {
  const { caption = "", insertBefore, insertAfter, className, id } = props;
  return import_react62.default.createElement(
    "div",
    { className: b29(null, className) },
    insertBefore,
    import_react62.default.createElement("div", { className: b29("caption"), id }, caption),
    insertAfter
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogBody/DialogBody.js
var import_react63 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogBody/DialogBody.css";
var b30 = block("dialog-body");
function DialogBody(props) {
  const { className } = props;
  return import_react63.default.createElement("div", { className: b30(null, className) }, props.children);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogDivider/DialogDivider.js
var import_react64 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Dialog/DialogDivider/DialogDivider.css";
var b31 = block("dialog-divider");
function DialogDivider({ className }) {
  return import_react64.default.createElement("div", { className: b31(null, className) });
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/ButtonClose/ButtonClose.js
var import_react66 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/icons/CrossIcon.js
var import_react65 = __toESM(require_react());
function CrossIcon(props) {
  return import_react65.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 10", width: "10", height: "10", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react65.default.createElement("path", { d: "M9.75592 8.57741C10.0814 8.90285 10.0814 9.43049 9.75592 9.75592C9.43049 10.0814 8.90285 10.0814 8.57741 9.75592L5 6.17851L1.42259 9.75592C1.09715 10.0814 0.569515 10.0814 0.244078 9.75592C-0.0813592 9.43049 -0.0813592 8.90285 0.244078 8.57741L3.82149 5L0.244078 1.42259C-0.0813592 1.09715 -0.0813592 0.569515 0.244078 0.244078C0.569515 -0.0813592 1.09715 -0.0813592 1.42259 0.244078L5 3.82149L8.57741 0.244078C8.90285 -0.0813592 9.43049 -0.0813592 9.75592 0.244078C10.0814 0.569515 10.0814 1.09715 9.75592 1.42259L6.17851 5L9.75592 8.57741Z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/ButtonClose/ButtonClose.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Dialog/ButtonClose/ButtonClose.css";
var b32 = block("dialog-btn-close");
function ButtonClose({ onClose }) {
  return import_react66.default.createElement(
    "div",
    { className: b32() },
    import_react66.default.createElement(
      Button2,
      { view: "flat", size: "l", className: b32("btn"), onClick: (event) => onClose(event, { isOutsideClick: false }) },
      import_react66.default.createElement(Icon, { data: CrossIcon, size: 12 })
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Dialog/Dialog.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Dialog/Dialog.css";
var b33 = block("dialog");
var Dialog = class extends import_react67.default.Component {
  constructor() {
    super(...arguments);
    this.handleCloseButtonClick = (event) => {
      const { onClose } = this.props;
      onClose(event.nativeEvent, "closeButtonClick");
    };
  }
  render() {
    const { container, children: children2, open, disableBodyScrollLock, disableEscapeKeyDown, disableOutsideClick, keepMounted, size: size2, className, modalClassName, hasCloseButton, onEscapeKeyDown, onEnterKeyDown, onOutsideClick, onClose, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, qa } = this.props;
    return import_react67.default.createElement(
      Modal,
      { open, disableBodyScrollLock, disableEscapeKeyDown, disableOutsideClick, keepMounted, onEscapeKeyDown, onEnterKeyDown, onOutsideClick, onClose, className: b33("modal", modalClassName), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, container, qa },
      import_react67.default.createElement(
        "div",
        { className: b33({ size: size2, "has-close": hasCloseButton }, className) },
        children2,
        hasCloseButton && import_react67.default.createElement(ButtonClose, { onClose: this.handleCloseButtonClick })
      )
    );
  }
};
Dialog.defaultProps = {
  disableBodyScrollLock: false,
  disableEscapeKeyDown: false,
  disableOutsideClick: false,
  keepMounted: false,
  hasCloseButton: true
};
Dialog.Footer = DialogFooter;
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Divider = DialogDivider;

// node_modules/@gravity-ui/uikit/build/esm/components/HelpPopover/HelpPopover.js
var import_react92 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/Popover.js
var import_react91 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Alarm.js
var import_react68 = __toESM(require_react());
function Alarm(props) {
  return import_react68.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none" }, a11yHiddenSvgProps, props),
    import_react68.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m13.441 4.094 8.438 14.66c.633 1.125-.176 2.496-1.477 2.496H3.562c-1.3 0-2.109-1.406-1.476-2.496l8.437-14.66c.633-1.125 2.286-1.09 2.918 0Zm-2.592 12.08c.29-.294.694-.479 1.151-.479.879 0 1.617.739 1.617 1.617 0 .395-.137.75-.364 1.027a1.62 1.62 0 0 1-1.253.59 1.591 1.591 0 0 1-1.617-1.616 1.62 1.62 0 0 1 .466-1.139Zm-.31-6.578a.381.381 0 0 0-.086.299l.246 4.78c.035.247.211.388.422.388h1.723a.408.408 0 0 0 .32-.147.478.478 0 0 0 .102-.24l.246-4.781c.035-.247-.176-.457-.422-.457h-2.215a.438.438 0 0 0-.336.158Z", fill: "currentColor" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Chevron.js
var import_react69 = __toESM(require_react());
function Chevron(props) {
  return import_react69.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react69.default.createElement("path", { d: "M3.50172 5.44253C3.19384 5.16544 2.71962 5.19039 2.44253 5.49828C2.16544 5.80616 2.19039 6.28038 2.49828 6.55747L3.50172 5.44253ZM8 10.5L7.49828 11.0575C7.7835 11.3142 8.2165 11.3142 8.50172 11.0575L8 10.5ZM13.5017 6.55747C13.8096 6.28038 13.8346 5.80616 13.5575 5.49828C13.2804 5.19039 12.8062 5.16544 12.4983 5.44253L13.5017 6.55747ZM2.49828 6.55747L7.49828 11.0575L8.50172 9.94253L3.50172 5.44253L2.49828 6.55747ZM8.50172 11.0575L13.5017 6.55747L12.4983 5.44253L7.49828 9.94253L8.50172 11.0575Z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/ExternalLinkIcon.js
var import_react70 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/icons/GearIcon.js
var import_react71 = __toESM(require_react());
function GearIcon(props) {
  return import_react71.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react71.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.929 4.93l.001-.002.002.001.527-.528a.575.575 0 01.786-.025l1.21 1.061a1.856 1.856 0 003.115-1.291h.004l.105-1.607a.575.575 0 01.574-.537h.746V2v.002h.747c.303 0 .554.235.574.537l.105 1.607h.005c.019.484.223.92.544 1.24a1.854 1.854 0 002.584.039l1.196-1.05a.575.575 0 01.786.026l.528.528.002-.002v.002l-.001.002.528.527a.575.575 0 01.026.786l-1.06 1.212a1.85 1.85 0 00-.492 1.258c0 .515.21.98.548 1.317.32.318.753.52 1.235.539v.004l1.606.105c.303.02.538.271.538.574V12H22v.002h-.002v.746a.575.575 0 01-.537.574l-1.607.107v.001c-.484.02-.92.223-1.24.544a1.854 1.854 0 00-.05 2.572h-.002l1.062 1.211c.2.228.188.572-.026.786l-.528.528v.002h-.001l-.528.527a.575.575 0 01-.785.026l-1.168-1.021a1.851 1.851 0 00-1.302-.534 1.86 1.86 0 00-1.857 1.786h-.004l-.105 1.607a.575.575 0 01-.54.536h-1.56a.575.575 0 01-.54-.536l-.105-1.607h-.004a1.851 1.851 0 00-.545-1.244 1.851 1.851 0 00-1.31-.542c-.504 0-.96.2-1.295.526l-1.177 1.03a.575.575 0 01-.785-.027l-.528-.528-.001-.001-.528-.528a.575.575 0 01-.026-.786l1.062-1.21-.001-.001a1.85 1.85 0 00.493-1.26c0-.515-.21-.98-.548-1.317a1.85 1.85 0 00-1.236-.539v-.001l-1.607-.107a.575.575 0 01-.537-.574v-.746H2V12h.001v-.747c0-.303.235-.554.538-.574l1.606-.105v-.004a1.851 1.851 0 001.242-.545 1.854 1.854 0 00.043-2.577L4.376 6.244a.575.575 0 01.026-.786l.528-.527-.001-.002zM16.286 12a4.286 4.286 0 11-8.572 0 4.286 4.286 0 018.572 0z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Info.js
var import_react72 = __toESM(require_react());
function Info(props) {
  return import_react72.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none" }, a11yHiddenSvgProps, props),
    import_react72.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.281 12.25c0-4.781 3.903-8.719 8.719-8.719 4.781 0 8.719 3.938 8.719 8.719 0 4.816-3.938 8.719-8.719 8.719a8.717 8.717 0 0 1-8.719-8.719Zm10.196-3.375c0-.809-.668-1.477-1.477-1.477-.844 0-1.477.668-1.477 1.477 0 .844.633 1.477 1.477 1.477.809 0 1.477-.633 1.477-1.477Zm.07 7.875c.21 0 .422-.176.422-.422v-.844a.454.454 0 0 0-.422-.421h-.422v-3.516a.454.454 0 0 0-.422-.422h-2.25a.427.427 0 0 0-.422.422v.844c0 .246.176.421.422.421h.422v2.25h-.422a.427.427 0 0 0-.422.422v.844c0 .246.176.422.422.422h3.094Z", fill: "currentColor" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/PlayIcon.js
var import_react73 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/icons/PreviewCloseIcon.js
var import_react74 = __toESM(require_react());
function PreviewCloseIcon(props) {
  return import_react74.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react74.default.createElement("path", { stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", d: "M7.357 7.357l9.286 9.286m0-9.286l-9.286 9.286" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/QuestionMarkIcon.js
var import_react75 = __toESM(require_react());
function QuestionMarkIcon(props) {
  return import_react75.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "none" }, a11yHiddenSvgProps, props),
    import_react75.default.createElement("path", { d: "M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z", stroke: "currentColor", strokeOpacity: "0.15" }),
    import_react75.default.createElement("path", { opacity: "0.5", fillRule: "evenodd", clipRule: "evenodd", d: "M8.46436 9.92432H7.09473C7.09115 9.72738 7.08936 9.60742 7.08936 9.56445C7.08936 9.12044 7.16276 8.75521 7.30957 8.46875C7.45638 8.18229 7.75 7.86003 8.19043 7.50195C8.63086 7.14388 8.89404 6.90934 8.97998 6.79834C9.11247 6.62288 9.17871 6.42953 9.17871 6.21826C9.17871 5.92464 9.06144 5.6731 8.8269 5.46362C8.59237 5.25415 8.27637 5.14941 7.87891 5.14941C7.49577 5.14941 7.17529 5.25863 6.91748 5.47705C6.65967 5.69548 6.48242 6.02848 6.38574 6.47607L5 6.3042C5.03939 5.66325 5.31242 5.11898 5.81909 4.67139C6.32577 4.22379 6.99088 4 7.81445 4C8.68099 4 9.37028 4.22648 9.88232 4.67944C10.3944 5.13241 10.6504 5.65966 10.6504 6.26123C10.6504 6.59424 10.5564 6.90934 10.3684 7.20654C10.1804 7.50375 9.77849 7.90836 9.1626 8.42041C8.84391 8.68539 8.64608 8.89844 8.56909 9.05957C8.49211 9.2207 8.45719 9.50895 8.46436 9.92432ZM7.09473 11.9546V10.4453H8.604V11.9546H7.09473Z", fill: "currentColor" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Success.js
var import_react76 = __toESM(require_react());
function Success(props) {
  return import_react76.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", fill: "none" }, a11yHiddenSvgProps, props),
    import_react76.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3.531c4.781 0 8.719 3.938 8.719 8.719 0 4.816-3.938 8.719-8.719 8.719a8.717 8.717 0 0 1-8.719-8.719c0-4.781 3.903-8.719 8.719-8.719Zm-1.828 13.36c.21.21.598.21.808 0l6.47-6.47a.596.596 0 0 0 0-.808l-.81-.773a.497.497 0 0 0-.773 0l-5.273 5.273-2.496-2.46a.497.497 0 0 0-.774 0l-.808.773a.596.596 0 0 0 0 .808l3.656 3.657Z", fill: "currentColor" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Link.js
var import_react77 = __toESM(require_react());
function Link3(props) {
  return import_react77.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currnetColor" }, a11yHiddenSvgProps, props),
    import_react77.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6l.727-.727Zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879l-.727.727Zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06l4-4Z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Share.js
var import_react78 = __toESM(require_react());
function Share(props) {
  return import_react78.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react78.default.createElement("path", { d: "M12.5 5a2.98 2.98 0 0 0-1.976.758L6.45 3.495c.027-.162.05-.325.05-.495a3 3 0 1 0-3 3c.76 0 1.447-.292 1.976-.759L9.55 7.505c-.027.162-.05.326-.05.495 0 .169.023.333.05.495l-4.074 2.264A2.975 2.975 0 0 0 3.5 10a3 3 0 1 0 3 3c0-.17-.023-.333-.05-.495l4.074-2.263A2.98 2.98 0 0 0 12.5 11a3 3 0 1 0 0-6z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/shareOptions.js
var shareOptions_exports = {};
__export(shareOptions_exports, {
  Facebook: () => Facebook,
  LinkedIn: () => LinkedIn,
  Mail: () => Mail,
  Telegram: () => Telegram,
  Twitter: () => Twitter,
  VK: () => VK
});

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Facebook.js
var import_react79 = __toESM(require_react());
function Facebook(props) {
  return import_react79.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currenColor" }, a11yHiddenSvgProps, props),
    import_react79.default.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#fff" }),
    import_react79.default.createElement("path", { d: "M0 8a8 8 0 1 1 9.229 7.906V10.29h1.859l.352-2.304H9.23v-1.5c0-.625.31-1.25 1.302-1.25h1V3.283s-.902-.164-1.77-.164c-1.818 0-2.998 1.111-2.998 3.111v1.762H4.732v2.305h2.031v5.608A8.002 8.002 0 0 1 0 8Z", fill: "#1877F2" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Telegram.js
var import_react80 = __toESM(require_react());
function Telegram(props) {
  return import_react80.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currnetColor" }, a11yHiddenSvgProps, props),
    import_react80.default.createElement(
      "g",
      { clipPath: "url(#clip0_3048_78838)" },
      import_react80.default.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#2AABEE" }),
      import_react80.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.619 8.013A408.555 408.555 0 0 1 8.452 6.06c2.301-.899 2.78-1.055 3.091-1.06a.571.571 0 0 1 .321.09.32.32 0 0 1 .118.211c.011.06.025.199.014.306-.125 1.23-.664 4.215-.939 5.592-.116.583-.345.778-.566.797-.482.042-.847-.298-1.313-.585-.73-.448-1.142-.728-1.85-1.166-.818-.506-.287-.784.179-1.238.122-.12 2.242-1.93 2.283-2.094.006-.02.01-.097-.038-.137-.049-.04-.12-.027-.172-.016-.073.016-1.238.739-3.495 2.169-.331.213-.63.317-.899.311-.296-.006-.865-.157-1.288-.286-.52-.158-.932-.242-.896-.51.019-.14.224-.284.617-.43Z", fill: "#fff" })
    ),
    import_react80.default.createElement(
      "defs",
      null,
      import_react80.default.createElement(
        "clipPath",
        { id: "clip0_3048_78838" },
        import_react80.default.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })
      )
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Twitter.js
var import_react81 = __toESM(require_react());
function Twitter(props) {
  return import_react81.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currnetColor" }, a11yHiddenSvgProps, props),
    import_react81.default.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#1D9BF0" }),
    import_react81.default.createElement("path", { d: "M12.569 6.077c.006.094.006.188.006.283 0 2.895-2.177 6.234-6.158 6.234v-.002A6.073 6.073 0 0 1 3.1 11.61a4.313 4.313 0 0 0 3.203-.908A2.17 2.17 0 0 1 4.281 9.18c.325.064.659.05.977-.037a2.185 2.185 0 0 1-1.736-2.148v-.028c.301.17.638.264.982.275a2.21 2.21 0 0 1-.67-2.926 6.118 6.118 0 0 0 4.46 2.29 2.21 2.21 0 0 1 .627-2.094 2.148 2.148 0 0 1 3.062.095c.485-.097.95-.277 1.374-.532-.161.507-.5.938-.951 1.212a4.263 4.263 0 0 0 1.243-.345c-.29.44-.657.825-1.08 1.135Z", fill: "#fff" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/VK.js
var import_react82 = __toESM(require_react());
function VK(props) {
  return import_react82.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currnetColor" }, a11yHiddenSvgProps, props),
    import_react82.default.createElement(
      "g",
      { clipPath: "url(#clip0_3274_86056)" },
      import_react82.default.createElement("path", { d: "M.5 7.7c0-3.394 0-5.091 1.054-6.146C2.61.5 4.306.5 7.7.5h.6c3.394 0 5.091 0 6.146 1.054C15.5 2.61 15.5 4.306 15.5 7.7v.6c0 3.394 0 5.091-1.054 6.146C13.39 15.5 11.694 15.5 8.3 15.5h-.6c-3.394 0-5.091 0-6.146-1.054C.5 13.39.5 11.694.5 8.3v-.6Z", fill: "#07F" }),
      import_react82.default.createElement("path", { d: "M8.516 11.542c-3.663 0-5.753-2.51-5.84-6.69h1.835c.06 3.068 1.413 4.367 2.485 4.635V4.853h1.727v2.645c1.058-.114 2.17-1.32 2.545-2.645h1.727c-.287 1.634-1.493 2.839-2.35 3.334.857.402 2.23 1.454 2.752 3.355h-1.902c-.408-1.272-1.426-2.256-2.772-2.39v2.39h-.207Z", fill: "#fff" })
    ),
    import_react82.default.createElement(
      "defs",
      null,
      import_react82.default.createElement(
        "clipPath",
        { id: "clip0_3274_86056" },
        import_react82.default.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })
      )
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/LinkedIn.js
var import_react83 = __toESM(require_react());
function LinkedIn(props) {
  return import_react83.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currnetColor" }, a11yHiddenSvgProps, props),
    import_react83.default.createElement("rect", { x: ".5", y: ".5", width: "15", height: "15", rx: "3", fill: "#0A66C2" }),
    import_react83.default.createElement("path", { d: "M12.987 12.988h-2.099V9.7c0-.784-.014-1.793-1.091-1.793-1.094 0-1.261.854-1.261 1.736v3.344H6.437v-6.76h2.015v.924h.028a2.208 2.208 0 0 1 1.989-1.092c2.127 0 2.52 1.4 2.52 3.22l-.002 3.709ZM4.07 5.303a1.218 1.218 0 1 1 0-2.436 1.218 1.218 0 0 1 0 2.436Zm1.05 7.685H3.016V6.227h2.101v6.76Z", fill: "#fff" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Mail.js
var import_react84 = __toESM(require_react());
function Mail(props) {
  return import_react84.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "currnetColor" }, a11yHiddenSvgProps, props),
    import_react84.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 4h9c.25 0 .485.06.692.169L8.75 7.5a1.25 1.25 0 0 1-1.5 0L2.808 4.169C3.015 4.06 3.251 4 3.5 4ZM2.001 5.438 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5l-.001-.062L9.65 8.7a2.75 2.75 0 0 1-3.3 0L2.001 5.438ZM.5 5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-5Z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/components/Buttons/Buttons.js
var import_react85 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/Popover.classname.js
var cnPopover = block("popover");

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/components/Buttons/helpers/getButtonView.js
var getButtonView2 = (theme, isAction = false) => {
  switch (theme) {
    case "special":
      return isAction ? "normal-contrast" : "flat-contrast";
    case "announcement":
      return isAction ? "normal-contrast" : "outlined";
    default:
      return isAction ? "normal" : "flat";
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/components/Buttons/Buttons.js
var Buttons = ({ theme, tooltipActionButton, tooltipCancelButton }) => {
  if (!tooltipActionButton && !tooltipCancelButton) {
    return null;
  }
  return import_react85.default.createElement(
    "div",
    { className: cnPopover("tooltip-buttons") },
    tooltipActionButton && import_react85.default.createElement(Button2, { view: getButtonView2(theme, true), width: "max", onClick: tooltipActionButton.onClick, className: cnPopover("tooltip-button") }, tooltipActionButton.text),
    tooltipCancelButton && import_react85.default.createElement(Button2, { view: getButtonView2(theme, false), width: "max", onClick: tooltipCancelButton.onClick, className: cnPopover("tooltip-button") }, tooltipCancelButton.text)
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/components/Content/Content.js
var import_react86 = __toESM(require_react());
var Content = ({ secondary, htmlContent, content, className }) => {
  if (!htmlContent && !content) {
    return null;
  }
  if (htmlContent) {
    return import_react86.default.createElement("div", { className: cnPopover("tooltip-content", { secondary }), dangerouslySetInnerHTML: {
      __html: htmlContent
    } });
  }
  if (content) {
    return import_react86.default.createElement("div", { className: cnPopover("tooltip-content", { secondary }, className) }, content);
  }
  return null;
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/components/Links/Links.js
var import_react87 = __toESM(require_react());
var Links = ({ links }) => {
  if (links.length === 0) {
    return null;
  }
  return import_react87.default.createElement("div", { className: cnPopover("tooltip-links") }, links.map((link, index2) => {
    const { text: text2, href, target = "_blank", onClick } = link;
    return import_react87.default.createElement(
      import_react87.default.Fragment,
      { key: `link-${index2}` },
      import_react87.default.createElement(Link, { href, target, onClick, className: cnPopover("tooltip-link") }, text2),
      import_react87.default.createElement("br", null)
    );
  }));
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/components/Trigger/Trigger.js
var import_react88 = __toESM(require_react());
var Trigger = ({ open, disabled, openTooltip, closeTooltip, closedManually, onClick, children: children2 }) => {
  const handleClick = async (event) => {
    if (disabled) {
      return;
    }
    const shouldToggleTooltip = !onClick || await onClick(event);
    if (!shouldToggleTooltip) {
      return;
    }
    const toggleTooltip = () => {
      const nextOpen = !open;
      if (nextOpen) {
        openTooltip();
        closedManually.current = false;
      } else {
        closeTooltip();
        closedManually.current = true;
      }
    };
    toggleTooltip();
  };
  return import_react88.default.createElement("span", { onClick: handleClick }, children2);
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/hooks/useOpen.js
var import_react90 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useUpdateEffect.js
var import_react89 = __toESM(require_react());
var useUpdateEffect = (effect4, deps) => {
  const isInitial = (0, import_react89.useRef)(true);
  (0, import_react89.useEffect)(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    effect4();
  }, deps);
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/config.js
var PopoverBehavior;
(function(PopoverBehavior2) {
  PopoverBehavior2["Immediate"] = "immediate";
  PopoverBehavior2["Delayed"] = "delayed";
  PopoverBehavior2["DelayedClosing"] = "delayedClosing";
})(PopoverBehavior || (PopoverBehavior = {}));
var delayByBehavior = {
  [PopoverBehavior.Immediate]: [0, 0],
  [PopoverBehavior.Delayed]: [300, 300],
  [PopoverBehavior.DelayedClosing]: [0, 300]
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/hooks/useOpen.js
var useOpen = ({ initialOpen, disabled, autoclosable, onOpenChange, delayOpening, delayClosing, behavior, shouldBeOpen }) => {
  const openingTimeout = (0, import_react90.useRef)(null);
  const closingTimeout = (0, import_react90.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react90.useState)(initialOpen);
  const unsetOpeningTimeout = (0, import_react90.useCallback)(() => {
    if (openingTimeout.current) {
      clearTimeout(openingTimeout.current);
      openingTimeout.current = null;
    }
  }, []);
  const unsetClosingTimeout = (0, import_react90.useCallback)(() => {
    if (closingTimeout.current) {
      clearTimeout(closingTimeout.current);
      closingTimeout.current = null;
    }
  }, []);
  (0, import_react90.useEffect)(() => {
    return () => {
      unsetOpeningTimeout();
      unsetClosingTimeout();
    };
  }, [unsetClosingTimeout, unsetOpeningTimeout]);
  const setTooltipOpen = (0, import_react90.useCallback)((open) => {
    setIsOpen(open);
    shouldBeOpen.current = open;
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(open);
  }, [onOpenChange, shouldBeOpen]);
  const openTooltip = (0, import_react90.useCallback)(() => {
    unsetOpeningTimeout();
    setTooltipOpen(true);
  }, [setTooltipOpen, unsetOpeningTimeout]);
  const closeTooltip = (0, import_react90.useCallback)(() => {
    unsetClosingTimeout();
    setTooltipOpen(false);
  }, [setTooltipOpen, unsetClosingTimeout]);
  (0, import_react90.useEffect)(() => {
    if (disabled) {
      closeTooltip();
    }
  }, [disabled, closeTooltip]);
  useUpdateEffect(() => {
    if (autoclosable && !shouldBeOpen.current) {
      closeTooltip();
    }
  }, [autoclosable, closeTooltip, shouldBeOpen]);
  const [defaultDelayOpening, defaultDelayClosing] = delayByBehavior[behavior];
  const openTooltipDelayed = (0, import_react90.useCallback)(() => {
    openingTimeout.current = setTimeout(() => {
      openingTimeout.current = null;
      openTooltip();
    }, delayOpening !== null && delayOpening !== void 0 ? delayOpening : defaultDelayOpening);
  }, [defaultDelayOpening, delayOpening, openTooltip]);
  const closeTooltipDelayed = (0, import_react90.useCallback)(() => {
    closingTimeout.current = setTimeout(() => {
      closingTimeout.current = null;
      closeTooltip();
    }, delayClosing !== null && delayClosing !== void 0 ? delayClosing : defaultDelayClosing);
  }, [closeTooltip, defaultDelayClosing, delayClosing]);
  return {
    isOpen,
    closingTimeout,
    openTooltip,
    openTooltipDelayed,
    unsetOpeningTimeout,
    closeTooltip,
    closeTooltipDelayed,
    unsetClosingTimeout
  };
};

// node_modules/@gravity-ui/uikit/build/esm/components/Popover/Popover.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Popover/Popover.css";
var Popover = (0, import_react91.forwardRef)(function({ initialOpen = false, disabled = false, autoclosable = true, openOnHover = true, delayOpening, delayClosing, behavior = PopoverBehavior.Delayed, placement = ["right", "bottom"], offset: offset2 = {}, tooltipOffset, tooltipClassName, theme = "info", size: size2 = "s", hasArrow = true, hasClose = false, className, children: children2, title, content, htmlContent, contentClassName, links, forceLinksAppearance = true, tooltipActionButton, tooltipCancelButton, onOpenChange, onCloseClick, onClick, anchorRef, strategy, qa }, ref) {
  const controlRef = (0, import_react91.useRef)(null);
  const closedManually = (0, import_react91.useRef)(false);
  const shouldBeOpen = (0, import_react91.useRef)(initialOpen);
  const { isOpen, closingTimeout, openTooltip, openTooltipDelayed, unsetOpeningTimeout, closeTooltip, closeTooltipDelayed, unsetClosingTimeout } = useOpen({
    initialOpen,
    disabled,
    autoclosable,
    onOpenChange,
    delayOpening,
    delayClosing,
    behavior,
    shouldBeOpen
  });
  (0, import_react91.useImperativeHandle)(ref, () => ({
    openTooltip,
    closeTooltip
  }), [openTooltip, closeTooltip]);
  const handleCloseClick = async (event) => {
    closeTooltip();
    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick(event);
  };
  const hasTitle = Boolean(title);
  const tooltip = import_react91.default.createElement(
    Popup,
    { strategy, anchorRef: anchorRef || controlRef, className: cnPopover("tooltip", {
      theme,
      size: size2,
      ["with-close"]: hasClose,
      "force-links-appearance": forceLinksAppearance
    }, tooltipClassName), open: isOpen, placement, hasArrow, offset: tooltipOffset, onClose: anchorRef ? void 0 : closeTooltip, qa: qa ? `${qa}-tooltip` : "" },
    import_react91.default.createElement(
      import_react91.default.Fragment,
      null,
      title && import_react91.default.createElement("h3", { className: cnPopover("tooltip-title") }, title),
      import_react91.default.createElement(Content, { secondary: hasTitle ? theme !== "announcement" : false, content, htmlContent, className: contentClassName }),
      links && import_react91.default.createElement(Links, { links }),
      import_react91.default.createElement(Buttons, { theme, tooltipActionButton, tooltipCancelButton }),
      hasClose && import_react91.default.createElement(
        "div",
        { className: cnPopover("tooltip-close") },
        import_react91.default.createElement(
          Button2,
          { size: "s", view: "flat-secondary", onClick: handleCloseClick, extraProps: {
            "aria-label": "Close"
          } },
          import_react91.default.createElement(Icon, { data: PreviewCloseIcon, size: 24 })
        )
      )
    )
  );
  if (anchorRef) {
    return tooltip;
  }
  const onMouseEnter = () => {
    unsetClosingTimeout();
    if (!isOpen && !disabled && !closedManually.current) {
      openTooltipDelayed();
    } else {
      shouldBeOpen.current = true;
    }
  };
  const onMouseLeave = () => {
    if (autoclosable && !closedManually.current && !closingTimeout.current) {
      unsetOpeningTimeout();
      closeTooltipDelayed();
    } else {
      shouldBeOpen.current = false;
    }
    closedManually.current = false;
  };
  return import_react91.default.createElement(
    "div",
    { ref: controlRef, className: cnPopover({ disabled }, className), onMouseEnter: openOnHover ? onMouseEnter : void 0, onMouseLeave: openOnHover ? onMouseLeave : void 0, style: {
      top: offset2.top,
      left: offset2.left
    }, "data-qa": qa },
    import_react91.default.createElement(Trigger, { closeTooltip, openTooltip, open: isOpen, disabled, onClick, closedManually }, children2),
    tooltip
  );
});
Popover.displayName = "Popover";

// node_modules/@gravity-ui/uikit/build/esm/components/HelpPopover/HelpPopover.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/HelpPopover/HelpPopover.css";
var b34 = block("help-popover");
function HelpPopover(props) {
  return import_react92.default.createElement(
    Popover,
    Object.assign({ offset: { left: 4 } }, props, { className: b34(null, props.className) }),
    import_react92.default.createElement(Icon, { data: QuestionMarkIcon, size: 16 })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Label/Label.js
var import_react93 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Label/Label.css";
var b35 = block("label");
var sizeMap = {
  s: { copyIconSize: 12, closeIconSize: 8 },
  m: { copyIconSize: 16, closeIconSize: 10 }
};
var commonActionButtonProps = {
  pin: "brick-round",
  className: b35("addon", {
    side: "right",
    interactive: true
  })
};
var Label = import_react93.default.forwardRef(function Label2(props, ref) {
  const { type = "default", theme = "normal", size: size2 = "s", style = "default", icon, children: children2, onClose, className, disabled, copyText, closeButtonLabel, copyButtonLabel, interactive = false, onCopy, onClick } = props;
  const hasContent = Boolean(children2 !== "" && import_react93.default.Children.count(children2) > 0);
  const typeDefault = type === "default";
  const typeClose = type === "close" && hasContent;
  const typeCopy = type === "copy" && hasContent;
  const hasOnClick = Boolean(onClick) && typeDefault;
  const hasCopy = Boolean(typeCopy && copyText);
  const isInteractive = hasOnClick || hasCopy || interactive;
  const { copyIconSize, closeIconSize } = sizeMap[size2];
  const leftIcon = icon && import_react93.default.createElement("div", { className: b35("addon", { side: hasContent ? "left" : void 0 }) }, icon);
  const content = hasContent && import_react93.default.createElement("div", { className: b35("text") }, children2);
  const renderLabel = (status) => {
    let actionButton;
    if (typeCopy) {
      actionButton = import_react93.default.createElement(
        Button2,
        Object.assign({ size: size2, extraProps: { "aria-label": copyButtonLabel || void 0 } }, commonActionButtonProps),
        import_react93.default.createElement(
          Button2.Icon,
          null,
          import_react93.default.createElement(ClipboardIcon, { status: status || CopyToClipboardStatus.Pending, size: copyIconSize })
        )
      );
    } else if (typeClose) {
      actionButton = import_react93.default.createElement(
        Button2,
        Object.assign({ onClick: onClose, size: size2, extraProps: { "aria-label": closeButtonLabel || void 0 } }, commonActionButtonProps),
        import_react93.default.createElement(Icon, { size: closeIconSize, data: CrossIcon })
      );
    }
    return import_react93.default.createElement(
      "div",
      { ref, onClick: hasOnClick ? onClick : void 0, className: b35({
        theme,
        size: size2,
        style,
        type,
        "is-interactive": isInteractive,
        "has-right-addon": Boolean(actionButton),
        "has-left-addon": Boolean(leftIcon),
        disabled
      }, className) },
      leftIcon,
      content,
      actionButton
    );
  };
  if (hasCopy && copyText) {
    return import_react93.default.createElement(CopyToClipboard, { text: copyText, onCopy, timeout: 1e3 }, (status) => renderLabel(status));
  }
  return renderLabel();
});

// node_modules/@gravity-ui/uikit/build/esm/components/List/index.js
var import_react105 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/List/List.js
var import_react104 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var import_react94 = __toESM(require_react());
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends2 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
};
var slicedToArray = /* @__PURE__ */ function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var windowObject = void 0;
if (typeof window !== "undefined") {
  windowObject = window;
} else if (typeof self !== "undefined") {
  windowObject = self;
} else {
  windowObject = global;
}
var cancelFrame = null;
var requestFrame = null;
var TIMEOUT_DURATION = 20;
var clearTimeoutFn = windowObject.clearTimeout;
var setTimeoutFn = windowObject.setTimeout;
var cancelAnimationFrameFn = windowObject.cancelAnimationFrame || windowObject.mozCancelAnimationFrame || windowObject.webkitCancelAnimationFrame;
var requestAnimationFrameFn = windowObject.requestAnimationFrame || windowObject.mozRequestAnimationFrame || windowObject.webkitRequestAnimationFrame;
if (cancelAnimationFrameFn == null || requestAnimationFrameFn == null) {
  cancelFrame = clearTimeoutFn;
  requestFrame = function requestAnimationFrameViaSetTimeout(callback) {
    return setTimeoutFn(callback, TIMEOUT_DURATION);
  };
} else {
  cancelFrame = function cancelFrame2(_ref) {
    var _ref2 = slicedToArray(_ref, 2), animationFrameID = _ref2[0], timeoutID = _ref2[1];
    cancelAnimationFrameFn(animationFrameID);
    clearTimeoutFn(timeoutID);
  };
  requestFrame = function requestAnimationFrameWithSetTimeoutFallback(callback) {
    var animationFrameID = requestAnimationFrameFn(function animationFrameCallback() {
      clearTimeoutFn(timeoutID);
      callback();
    });
    var timeoutID = setTimeoutFn(function timeoutCallback() {
      cancelAnimationFrameFn(animationFrameID);
      callback();
    }, TIMEOUT_DURATION);
    return [animationFrameID, timeoutID];
  };
}
function createDetectElementResize(nonce) {
  var animationKeyframes = void 0;
  var animationName = void 0;
  var animationStartEvent = void 0;
  var animationStyle = void 0;
  var checkTriggers = void 0;
  var resetTriggers = void 0;
  var scrollListener = void 0;
  var attachEvent = typeof document !== "undefined" && document.attachEvent;
  if (!attachEvent) {
    resetTriggers = function resetTriggers2(element) {
      var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    checkTriggers = function checkTriggers2(element) {
      return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
    };
    scrollListener = function scrollListener2(e) {
      if (e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function animationFrame() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function forEachResizeListener(fn2) {
            fn2.call(element, e);
          });
        }
      });
    };
    var animation = false;
    var keyframeprefix = "";
    animationStartEvent = "animationstart";
    var domPrefixes = "Webkit Moz O ms".split(" ");
    var startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    var pfx = "";
    {
      var elm = document.createElement("fakeelement");
      if (elm.style.animationName !== void 0) {
        animation = true;
      }
      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== void 0) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationStartEvent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    animationName = "resizeanim";
    animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  var createStyles = function createStyles2(doc) {
    if (!doc.getElementById("detectElementResize")) {
      var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  var addResizeListener = function addResizeListener2(element, fn2) {
    if (attachEvent) {
      element.attachEvent("onresize", fn2);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = windowObject.getComputedStyle(element);
        if (elementStyle && elementStyle.position === "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        var expandTrigger = doc.createElement("div");
        expandTrigger.className = "expand-trigger";
        expandTrigger.appendChild(doc.createElement("div"));
        var contractTrigger = doc.createElement("div");
        contractTrigger.className = "contract-trigger";
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);
        if (animationStartEvent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName === animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn2);
    }
  };
  var removeResizeListener = function removeResizeListener2(element, fn2) {
    if (attachEvent) {
      element.detachEvent("onresize", fn2);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn2), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}
var AutoSizer = function(_React$PureComponent) {
  inherits(AutoSizer2, _React$PureComponent);
  function AutoSizer2() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, AutoSizer2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer2.__proto__ || Object.getPrototypeOf(AutoSizer2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function() {
      var _this$props = _this.props, disableHeight = _this$props.disableHeight, disableWidth = _this$props.disableWidth, onResize2 = _this$props.onResize;
      if (_this._parentNode) {
        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;
        var _style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;
        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;
        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });
          onResize2({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function(autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass(AutoSizer2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;
      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        this._parentNode = this._autoSizer.parentNode;
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props, children2 = _props.children, className = _props.className, disableHeight = _props.disableHeight, disableWidth = _props.disableWidth, style = _props.style;
      var _state = this.state, height = _state.height, width = _state.width;
      var outerStyle = { overflow: "visible" };
      var childParams = {};
      var bailoutOnChildren = false;
      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.height = 0;
        childParams.height = height;
      }
      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.width = 0;
        childParams.width = width;
      }
      return (0, import_react94.createElement)(
        "div",
        {
          className,
          ref: this._setRef,
          style: _extends2({}, outerStyle, style)
        },
        !bailoutOnChildren && children2(childParams)
      );
    }
  }]);
  return AutoSizer2;
}(import_react94.PureComponent);
AutoSizer.defaultProps = {
  onResize: function onResize() {
  },
  disableHeight: false,
  disableWidth: false,
  style: {}
};
var index_esm_default = AutoSizer;

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value2) {
  return typeof value2 === "number" && value2 !== value2;
};
function isEqual2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/@gravity-ui/uikit/node_modules/react-window/dist/index.esm.js
var import_react95 = __toESM(require_react());
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start2 = now();
  function tick() {
    if (now() - start2 >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var size = -1;
function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (size === -1 || recalculate) {
    var div = document.createElement("div");
    var style = div.style;
    style.width = "50px";
    style.height = "50px";
    style.overflow = "scroll";
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return size;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;
var defaultItemKey = function defaultItemKey2(_ref) {
  var columnIndex = _ref.columnIndex, data = _ref.data, rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
};
var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;
if (true) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsOverscanCount = /* @__PURE__ */ new WeakSet();
    devWarningsOverscanRowsColumnsCount = /* @__PURE__ */ new WeakSet();
    devWarningsTagName = /* @__PURE__ */ new WeakSet();
  }
}
function createGridComponent(_ref2) {
  var _class, _temp;
  var getColumnOffset3 = _ref2.getColumnOffset, getColumnStartIndexForOffset3 = _ref2.getColumnStartIndexForOffset, getColumnStopIndexForStartIndex3 = _ref2.getColumnStopIndexForStartIndex, getColumnWidth3 = _ref2.getColumnWidth, getEstimatedTotalHeight4 = _ref2.getEstimatedTotalHeight, getEstimatedTotalWidth4 = _ref2.getEstimatedTotalWidth, getOffsetForColumnAndAlignment3 = _ref2.getOffsetForColumnAndAlignment, getOffsetForRowAndAlignment3 = _ref2.getOffsetForRowAndAlignment, getRowHeight3 = _ref2.getRowHeight, getRowOffset3 = _ref2.getRowOffset, getRowStartIndexForOffset3 = _ref2.getRowStartIndexForOffset, getRowStopIndexForStartIndex3 = _ref2.getRowStopIndexForStartIndex, initInstanceProps5 = _ref2.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange, validateProps6 = _ref2.validateProps;
  return _temp = _class = function(_PureComponent) {
    _inheritsLoose(Grid, _PureComponent);
    function Grid(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps5(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        horizontalScrollDirection: "forward",
        scrollLeft: typeof _this.props.initialScrollLeft === "number" ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === "number" ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: "forward"
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex,
          overscanColumnStopIndex,
          overscanRowStartIndex,
          overscanRowStopIndex,
          visibleColumnStartIndex,
          visibleColumnStopIndex,
          visibleRowStartIndex,
          visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection,
          scrollLeft,
          scrollTop,
          verticalScrollDirection,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(rowIndex, columnIndex) {
        var _this$props = _this.props, columnWidth = _this$props.columnWidth, direction = _this$props.direction, rowHeight = _this$props.rowHeight;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);
        var key = rowIndex + ":" + columnIndex;
        var style;
        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset3(_this.props, columnIndex, _this._instanceProps);
          var isRtl = direction === "rtl";
          itemStyleCache[key] = style = {
            position: "absolute",
            left: isRtl ? void 0 : _offset,
            right: isRtl ? _offset : void 0,
            top: getRowOffset3(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight3(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth3(_this.props, columnIndex, _this._instanceProps)
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_, __, ___) {
        return {};
      });
      _this._onScroll = function(event) {
        var _event$currentTarget = event.currentTarget, clientHeight = _event$currentTarget.clientHeight, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollTop = _event$currentTarget.scrollTop, scrollHeight = _event$currentTarget.scrollHeight, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            return null;
          }
          var direction = _this.props.direction;
          var calculatedScrollLeft = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                calculatedScrollLeft = -scrollLeft;
                break;
              case "positive-descending":
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? "forward" : "backward",
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? "forward" : "backward",
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1);
        });
      };
      return _this;
    }
    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps6(nextProps);
      return null;
    };
    var _proto = Grid.prototype;
    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop;
      if (scrollLeft !== void 0) {
        scrollLeft = Math.max(0, scrollLeft);
      }
      if (scrollTop !== void 0) {
        scrollTop = Math.max(0, scrollTop);
      }
      this.setState(function(prevState) {
        if (scrollLeft === void 0) {
          scrollLeft = prevState.scrollLeft;
        }
        if (scrollTop === void 0) {
          scrollTop = prevState.scrollTop;
        }
        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }
        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? "forward" : "backward",
          scrollLeft,
          scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? "forward" : "backward"
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align, align = _ref4$align === void 0 ? "auto" : _ref4$align, columnIndex = _ref4.columnIndex, rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props, columnCount = _this$props2.columnCount, height = _this$props2.height, rowCount = _this$props2.rowCount, width = _this$props2.width;
      var _this$state = this.state, scrollLeft = _this$state.scrollLeft, scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();
      if (columnIndex !== void 0) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }
      if (rowIndex !== void 0) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }
      var estimatedTotalHeight = getEstimatedTotalHeight4(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth4(this.props, this._instanceProps);
      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== void 0 ? getOffsetForColumnAndAlignment3(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== void 0 ? getOffsetForRowAndAlignment3(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props, initialScrollLeft = _this$props3.initialScrollLeft, initialScrollTop = _this$props3.initialScrollTop;
      if (this._outerRef != null) {
        var outerRef = this._outerRef;
        if (typeof initialScrollLeft === "number") {
          outerRef.scrollLeft = initialScrollLeft;
        }
        if (typeof initialScrollTop === "number") {
          outerRef.scrollTop = initialScrollTop;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state, scrollLeft = _this$state2.scrollLeft, scrollTop = _this$state2.scrollTop, scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "rtl") {
          switch (getRTLOffsetType()) {
            case "negative":
              outerRef.scrollLeft = -scrollLeft;
              break;
            case "positive-ascending":
              outerRef.scrollLeft = scrollLeft;
              break;
            default:
              var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }
        outerRef.scrollTop = Math.max(0, scrollTop);
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props4 = this.props, children2 = _this$props4.children, className = _this$props4.className, columnCount = _this$props4.columnCount, direction = _this$props4.direction, height = _this$props4.height, innerRef = _this$props4.innerRef, innerElementType = _this$props4.innerElementType, innerTagName = _this$props4.innerTagName, itemData = _this$props4.itemData, _this$props4$itemKey = _this$props4.itemKey, itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey, outerElementType = _this$props4.outerElementType, outerTagName = _this$props4.outerTagName, rowCount = _this$props4.rowCount, style = _this$props4.style, useIsScrolling = _this$props4.useIsScrolling, width = _this$props4.width;
      var isScrolling = this.state.isScrolling;
      var _this$_getHorizontalR = this._getHorizontalRangeToRender(), columnStartIndex = _this$_getHorizontalR[0], columnStopIndex = _this$_getHorizontalR[1];
      var _this$_getVerticalRan = this._getVerticalRangeToRender(), rowStartIndex = _this$_getVerticalRan[0], rowStopIndex = _this$_getVerticalRan[1];
      var items = [];
      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push((0, import_react95.createElement)(children2, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : void 0,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      }
      var estimatedTotalHeight = getEstimatedTotalHeight4(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth4(this.props, this._instanceProps);
      return (0, import_react95.createElement)(outerElementType || outerTagName || "div", {
        className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, (0, import_react95.createElement)(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? "none" : void 0,
          width: estimatedTotalWidth
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props, columnCount = _this$props5.columnCount, onItemsRendered = _this$props5.onItemsRendered, onScroll = _this$props5.onScroll, rowCount = _this$props5.rowCount;
      if (typeof onItemsRendered === "function") {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(), _overscanColumnStartIndex = _this$_getHorizontalR2[0], _overscanColumnStopIndex = _this$_getHorizontalR2[1], _visibleColumnStartIndex = _this$_getHorizontalR2[2], _visibleColumnStopIndex = _this$_getHorizontalR2[3];
          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(), _overscanRowStartIndex = _this$_getVerticalRan2[0], _overscanRowStopIndex = _this$_getVerticalRan2[1], _visibleRowStartIndex = _this$_getVerticalRan2[2], _visibleRowStopIndex = _this$_getVerticalRan2[3];
          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }
      if (typeof onScroll === "function") {
        var _this$state3 = this.state, _horizontalScrollDirection = _this$state3.horizontalScrollDirection, _scrollLeft = _this$state3.scrollLeft, _scrollTop = _this$state3.scrollTop, _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested, _verticalScrollDirection = _this$state3.verticalScrollDirection;
        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    };
    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props, columnCount = _this$props6.columnCount, overscanColumnCount = _this$props6.overscanColumnCount, overscanColumnsCount = _this$props6.overscanColumnsCount, overscanCount = _this$props6.overscanCount, rowCount = _this$props6.rowCount;
      var _this$state4 = this.state, horizontalScrollDirection = _this$state4.horizontalScrollDirection, isScrolling = _this$state4.isScrolling, scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;
      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getColumnStartIndexForOffset3(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex3(this.props, startIndex, scrollLeft, this._instanceProps);
      var overscanBackward = !isScrolling || horizontalScrollDirection === "backward" ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === "forward" ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props, columnCount = _this$props7.columnCount, overscanCount = _this$props7.overscanCount, overscanRowCount = _this$props7.overscanRowCount, overscanRowsCount = _this$props7.overscanRowsCount, rowCount = _this$props7.rowCount;
      var _this$state5 = this.state, isScrolling = _this$state5.isScrolling, verticalScrollDirection = _this$state5.verticalScrollDirection, scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;
      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getRowStartIndexForOffset3(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex3(this.props, startIndex, scrollTop, this._instanceProps);
      var overscanBackward = !isScrolling || verticalScrollDirection === "backward" ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === "forward" ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return Grid;
  }(import_react95.PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    useIsScrolling: false
  }, _temp;
}
var validateSharedProps = function validateSharedProps2(_ref5, _ref6) {
  var children2 = _ref5.children, direction = _ref5.direction, height = _ref5.height, innerTagName = _ref5.innerTagName, outerTagName = _ref5.outerTagName, overscanColumnsCount = _ref5.overscanColumnsCount, overscanCount = _ref5.overscanCount, overscanRowsCount = _ref5.overscanRowsCount, width = _ref5.width;
  var instance = _ref6.instance;
  if (true) {
    if (typeof overscanCount === "number") {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn("The overscanCount prop has been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.");
      }
    }
    if (typeof overscanColumnsCount === "number" || typeof overscanRowsCount === "number") {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn("The overscanColumnsCount and overscanRowsCount props have been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.");
      }
    }
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    if (children2 == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children2 === null ? "null" : typeof children2) + '" was specified.'));
    }
    switch (direction) {
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    if (typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Grids must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    }
    if (typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Grids must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var DEFAULT_ESTIMATED_ITEM_SIZE = 50;
var getEstimatedTotalHeight = function getEstimatedTotalHeight2(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap, estimatedRowHeight = _ref2.estimatedRowHeight, lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0;
  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }
  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }
  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};
var getEstimatedTotalWidth = function getEstimatedTotalWidth2(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap, estimatedColumnWidth = _ref4.estimatedColumnWidth, lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0;
  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }
  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }
  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};
var getItemMetadata = function getItemMetadata2(itemType, props, index2, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;
  if (itemType === "column") {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }
  if (index2 > lastMeasuredIndex) {
    var offset2 = 0;
    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset2 = itemMetadata.offset + itemMetadata.size;
    }
    for (var i = lastMeasuredIndex + 1; i <= index2; i++) {
      var size2 = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset2,
        size: size2
      };
      offset2 += size2;
    }
    if (itemType === "column") {
      instanceProps.lastMeasuredColumnIndex = index2;
    } else {
      instanceProps.lastMeasuredRowIndex = index2;
    }
  }
  return itemMetadataMap[index2];
};
var findNearestItem = function findNearestItem2(itemType, props, instanceProps, offset2) {
  var itemMetadataMap, lastMeasuredIndex;
  if (itemType === "column") {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;
  if (lastMeasuredItemOffset >= offset2) {
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset2);
  } else {
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset2);
  }
};
var findNearestItemBinarySearch = function findNearestItemBinarySearch2(itemType, props, instanceProps, high, low, offset2) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;
    if (currentOffset === offset2) {
      return middle;
    } else if (currentOffset < offset2) {
      low = middle + 1;
    } else if (currentOffset > offset2) {
      high = middle - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
var findNearestItemExponentialSearch = function findNearestItemExponentialSearch2(itemType, props, instanceProps, index2, offset2) {
  var itemCount = itemType === "column" ? props.columnCount : props.rowCount;
  var interval = 1;
  while (index2 < itemCount && getItemMetadata(itemType, props, index2, instanceProps).offset < offset2) {
    index2 += interval;
    interval *= 2;
  }
  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index2, itemCount - 1), Math.floor(index2 / 2), offset2);
};
var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment2(itemType, props, index2, align, scrollOffset, instanceProps, scrollbarSize) {
  var size2 = itemType === "column" ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index2, instanceProps);
  var estimatedTotalSize = itemType === "column" ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size2, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size2 + scrollbarSize + itemMetadata.size);
  if (align === "smart") {
    if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
      align = "auto";
    } else {
      align = "center";
    }
  }
  switch (align) {
    case "start":
      return maxOffset;
    case "end":
      return minOffset;
    case "center":
      return Math.round(minOffset + (maxOffset - minOffset) / 2);
    case "auto":
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }
  }
};
var VariableSizeGrid = createGridComponent({
  getColumnOffset: function getColumnOffset(props, index2, instanceProps) {
    return getItemMetadata("column", props, index2, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem("column", props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount, width = props.width;
    var itemMetadata = getItemMetadata("column", props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset2 = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;
    while (stopIndex < columnCount - 1 && offset2 < maxOffset) {
      stopIndex++;
      offset2 += getItemMetadata("column", props, stopIndex, instanceProps).size;
    }
    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index2, instanceProps) {
    return instanceProps.columnMetadataMap[index2].size;
  },
  getEstimatedTotalHeight,
  getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index2, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment("column", props, index2, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index2, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment("row", props, index2, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index2, instanceProps) {
    return getItemMetadata("row", props, index2, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index2, instanceProps) {
    return instanceProps.rowMetadataMap[index2].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem("row", props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount, height = props.height;
    var itemMetadata = getItemMetadata("row", props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset2 = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;
    while (stopIndex < rowCount - 1 && offset2 < maxOffset) {
      stopIndex++;
      offset2 += getItemMetadata("row", props, stopIndex, instanceProps).size;
    }
    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props, estimatedColumnWidth = _ref5.estimatedColumnWidth, estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };
    instance.resetAfterColumnIndex = function(columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }
      instance.resetAfterIndices({
        columnIndex,
        shouldForceUpdate
      });
    };
    instance.resetAfterRowIndex = function(rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }
      instance.resetAfterIndices({
        rowIndex,
        shouldForceUpdate
      });
    };
    instance.resetAfterIndices = function(_ref6) {
      var columnIndex = _ref6.columnIndex, rowIndex = _ref6.rowIndex, _ref6$shouldForceUpda = _ref6.shouldForceUpdate, shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;
      if (typeof columnIndex === "number") {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }
      if (typeof rowIndex === "number") {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      }
      instance._getItemStyleCache(-1);
      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };
    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth, rowHeight = _ref7.rowHeight;
    if (true) {
      if (typeof columnWidth !== "function") {
        throw Error('An invalid "columnWidth" prop has been specified. Value should be a function. ' + ('"' + (columnWidth === null ? "null" : typeof columnWidth) + '" was specified.'));
      } else if (typeof rowHeight !== "function") {
        throw Error('An invalid "rowHeight" prop has been specified. Value should be a function. ' + ('"' + (rowHeight === null ? "null" : typeof rowHeight) + '" was specified.'));
      }
    }
  }
});
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey3(index2, data) {
  return index2;
};
var devWarningsDirection = null;
var devWarningsTagName$1 = null;
if (true) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsDirection = /* @__PURE__ */ new WeakSet();
    devWarningsTagName$1 = /* @__PURE__ */ new WeakSet();
  }
}
function createListComponent(_ref) {
  var _class, _temp;
  var getItemOffset3 = _ref.getItemOffset, getEstimatedTotalSize4 = _ref.getEstimatedTotalSize, getItemSize3 = _ref.getItemSize, getOffsetForIndexAndAlignment5 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset3 = _ref.getStartIndexForOffset, getStopIndexForStartIndex3 = _ref.getStopIndexForStartIndex, initInstanceProps5 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps6 = _ref.validateProps;
  return _temp = _class = function(_PureComponent) {
    _inheritsLoose(List2, _PureComponent);
    function List2(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps5(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index2) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index2)) {
          style = itemStyleCache[index2];
        } else {
          var _offset = getItemOffset3(_this.props, index2, _this._instanceProps);
          var size2 = getItemSize3(_this.props, index2, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index2] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size2 : "100%",
            width: isHorizontal ? size2 : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps6(nextProps);
      return null;
    };
    var _proto = List2.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index2, align) {
      if (align === void 0) {
        align = "auto";
      }
      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index2 = Math.max(0, Math.min(index2, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment5(this.props, index2, align, scrollOffset, this._instanceProps));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props, direction = _this$props2.direction, initialScrollOffset = _this$props2.initialScrollOffset, layout = _this$props2.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props, direction = _this$props3.direction, layout = _this$props3.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props4 = this.props, children2 = _this$props4.children, className = _this$props4.className, direction = _this$props4.direction, height = _this$props4.height, innerRef = _this$props4.innerRef, innerElementType = _this$props4.innerElementType, innerTagName = _this$props4.innerTagName, itemCount = _this$props4.itemCount, itemData = _this$props4.itemData, _this$props4$itemKey = _this$props4.itemKey, itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey, layout = _this$props4.layout, outerElementType = _this$props4.outerElementType, outerTagName = _this$props4.outerTagName, style = _this$props4.style, useIsScrolling = _this$props4.useIsScrolling, width = _this$props4.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push((0, import_react95.createElement)(children2, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize4(this.props, this._instanceProps);
      return (0, import_react95.createElement)(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, (0, import_react95.createElement)(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props, itemCount = _this$props5.itemCount, overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset3(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex3(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List2;
  }(import_react95.PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
}
var validateSharedProps$1 = function validateSharedProps3(_ref2, _ref3) {
  var children2 = _ref2.children, direction = _ref2.direction, height = _ref2.height, layout = _ref2.layout, innerTagName = _ref2.innerTagName, outerTagName = _ref2.outerTagName, width = _ref2.width;
  var instance = _ref3.instance;
  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    switch (direction) {
      case "horizontal":
      case "vertical":
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    switch (layout) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + layout + '" was specified.'));
    }
    if (children2 == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children2 === null ? "null" : typeof children2) + '" was specified.'));
    }
    if (isHorizontal && typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    } else if (!isHorizontal && typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;
var getItemMetadata$1 = function getItemMetadata3(props, index2, instanceProps) {
  var _ref = props, itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap, lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  if (index2 > lastMeasuredIndex) {
    var offset2 = 0;
    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset2 = itemMetadata.offset + itemMetadata.size;
    }
    for (var i = lastMeasuredIndex + 1; i <= index2; i++) {
      var size2 = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset2,
        size: size2
      };
      offset2 += size2;
    }
    instanceProps.lastMeasuredIndex = index2;
  }
  return itemMetadataMap[index2];
};
var findNearestItem$1 = function findNearestItem3(props, instanceProps, offset2) {
  var itemMetadataMap = instanceProps.itemMetadataMap, lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;
  if (lastMeasuredItemOffset >= offset2) {
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset2);
  } else {
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset2);
  }
};
var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch3(props, instanceProps, high, low, offset2) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;
    if (currentOffset === offset2) {
      return middle;
    } else if (currentOffset < offset2) {
      low = middle + 1;
    } else if (currentOffset > offset2) {
      high = middle - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch3(props, instanceProps, index2, offset2) {
  var itemCount = props.itemCount;
  var interval = 1;
  while (index2 < itemCount && getItemMetadata$1(props, index2, instanceProps).offset < offset2) {
    index2 += interval;
    interval *= 2;
  }
  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index2, itemCount - 1), Math.floor(index2 / 2), offset2);
};
var getEstimatedTotalSize = function getEstimatedTotalSize2(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap, estimatedItemSize = _ref3.estimatedItemSize, lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0;
  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }
  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }
  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};
var VariableSizeList = createListComponent({
  getItemOffset: function getItemOffset(props, index2, instanceProps) {
    return getItemMetadata$1(props, index2, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index2, instanceProps) {
    return instanceProps.itemMetadataMap[index2].size;
  },
  getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment3(props, index2, align, scrollOffset, instanceProps) {
    var direction = props.direction, height = props.height, layout = props.layout, width = props.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index2, instanceProps);
    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size2, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size2 + itemMetadata.size);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center":
        return Math.round(minOffset + (maxOffset - minOffset) / 2);
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset2, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset2);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction, height = props.height, itemCount = props.itemCount, layout = props.layout, width = props.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size2;
    var offset2 = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;
    while (stopIndex < itemCount - 1 && offset2 < maxOffset) {
      stopIndex++;
      offset2 += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }
    return stopIndex;
  },
  initInstanceProps: function initInstanceProps2(props, instance) {
    var _ref4 = props, estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };
    instance.resetAfterIndex = function(index2, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }
      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index2 - 1);
      instance._getItemStyleCache(-1);
      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };
    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps2(_ref5) {
    var itemSize = _ref5.itemSize;
    if (true) {
      if (typeof itemSize !== "function") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a function. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});
var FixedSizeGrid = createGridComponent({
  getColumnOffset: function getColumnOffset2(_ref, index2) {
    var columnWidth = _ref.columnWidth;
    return index2 * columnWidth;
  },
  getColumnWidth: function getColumnWidth2(_ref2, index2) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset2(_ref3, index2) {
    var rowHeight = _ref3.rowHeight;
    return index2 * rowHeight;
  },
  getRowHeight: function getRowHeight2(_ref4, index2) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight3(_ref5) {
    var rowCount = _ref5.rowCount, rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth3(_ref6) {
    var columnCount = _ref6.columnCount, columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment2(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount, columnWidth = _ref7.columnWidth, width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);
    if (align === "smart") {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center":
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(width / 2)) {
          return 0;
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset;
        } else {
          return middleOffset;
        }
      case "auto":
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment2(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight, height = _ref8.height, rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);
    if (align === "smart") {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center":
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(height / 2)) {
          return 0;
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset;
        } else {
          return middleOffset;
        }
      case "auto":
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset2(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth, columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex2(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth, columnCount = _ref10.columnCount, width = _ref10.width;
    var left2 = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left2) / columnWidth);
    return Math.max(0, Math.min(
      columnCount - 1,
      startIndex + numVisibleColumns - 1
      // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset2(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight, rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex2(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight, rowCount = _ref12.rowCount, height = _ref12.height;
    var top2 = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top2) / rowHeight);
    return Math.max(0, Math.min(
      rowCount - 1,
      startIndex + numVisibleRows - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps3(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps3(_ref13) {
    var columnWidth = _ref13.columnWidth, rowHeight = _ref13.rowHeight;
    if (true) {
      if (typeof columnWidth !== "number") {
        throw Error('An invalid "columnWidth" prop has been specified. Value should be a number. ' + ('"' + (columnWidth === null ? "null" : typeof columnWidth) + '" was specified.'));
      }
      if (typeof rowHeight !== "number") {
        throw Error('An invalid "rowHeight" prop has been specified. Value should be a number. ' + ('"' + (rowHeight === null ? "null" : typeof rowHeight) + '" was specified.'));
      }
    }
  }
});
var FixedSizeList = createListComponent({
  getItemOffset: function getItemOffset2(_ref, index2) {
    var itemSize = _ref.itemSize;
    return index2 * itemSize;
  },
  getItemSize: function getItemSize2(_ref2, index2) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize3(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment4(_ref4, index2, align, scrollOffset) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index2 * itemSize);
    var minOffset = Math.max(0, index2 * itemSize - size2 + itemSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset2(_ref5, offset2) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset2 / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex2(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset2 = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset2) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps4(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps4(_ref7) {
    var itemSize = _ref7.itemSize;
    if (true) {
      if (typeof itemSize !== "number") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread.js
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {}, o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function(e2) {
      return Object.getOwnPropertyDescriptor(t, e2).enumerable;
    })), o.forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    });
  }
  return e;
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// node_modules/@gravity-ui/uikit/node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js
var import_react96 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());
var import_invariant = __toESM(require_browser());

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/@gravity-ui/uikit/node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js
var import_prop_types7 = __toESM(require_prop_types());
var Manager2 = function() {
  function Manager3() {
    _classCallCheck(this, Manager3);
    _defineProperty(this, "refs", {});
  }
  _createClass(Manager3, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }
      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index2 = this.getIndex(collection, ref);
      if (index2 !== -1) {
        this.refs[collection].splice(index2, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;
      return this.refs[this.active.collection].find(function(_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);
  return Manager3;
}();
function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
var events = {
  end: ["touchend", "touchcancel", "mouseup"],
  move: ["touchmove", "mousemove"],
  start: ["touchstart", "mousedown"]
};
var vendorPrefix = function() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return "";
  }
  var styles = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"];
  var pre = (Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) || styles.OLink === "" && ["", "o"])[1];
  switch (pre) {
    case "ms":
      return "ms";
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : "";
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function(key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? "" : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? "" : "".concat(duration, "ms");
}
function closest(el, fn2) {
  while (el) {
    if (fn2(el)) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}
function limit(min2, max2, value2) {
  return Math.max(min2, Math.min(value2, max2));
}
function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === "px") {
    return parseFloat(stringValue);
  }
  return 0;
}
function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    left: 0,
    top: 0
  };
  if (!node) {
    return void 0;
  }
  var nodeOffset = {
    left: offset2.left + node.offsetLeft,
    top: offset2.top + node.offsetTop
  };
  if (node.parentNode === parent) {
    return nodeOffset;
  }
  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset, width = _ref.width, height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = "px";
  if (typeof lockOffset === "string") {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    (0, import_invariant.default)(match !== null, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }
  (0, import_invariant.default)(isFinite(offsetX) && isFinite(offsetY), "lockOffset value should be a finite. Given %s", lockOffset);
  if (unit === "%") {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }
  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height, width = _ref2.width, lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  (0, import_invariant.default)(offsets.length === 2, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", lockOffset);
  var _offsets = _slicedToArray(offsets, 2), minLockOffset = _offsets[0], maxLockOffset = _offsets[1];
  return [getLockPixelOffset({
    height,
    lockOffset: minLockOffset,
    width
  }), getLockPixelOffset({
    height,
    lockOffset: maxLockOffset,
    width
  })];
}
function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ["overflow", "overflowX", "overflowY"];
  return properties.find(function(property) {
    return overflowRegex.test(computedStyle[property]);
  });
}
function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);
  if (style.display === "grid") {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: "A",
  Button: "BUTTON",
  Canvas: "CANVAS",
  Input: "INPUT",
  Option: "OPTION",
  Textarea: "TEXTAREA",
  Select: "SELECT"
};
function cloneNode(node) {
  var selector = "input, textarea, select, canvas, [contenteditable]";
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);
  var clonedFields = _toConsumableArray(clonedNode.querySelectorAll(selector));
  clonedFields.forEach(function(field, i) {
    if (field.type !== "file") {
      field.value = fields[i].value;
    }
    if (field.type === "radio" && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }
    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext("2d");
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}
var AutoScroller = function() {
  function AutoScroller2(container, onScrollCallback) {
    _classCallCheck(this, AutoScroller2);
    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }
  _createClass(AutoScroller2, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }
      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;
      var translate = _ref.translate, minTranslate = _ref.minTranslate, maxTranslate = _ref.maxTranslate, width = _ref.width, height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container, scrollTop = _this$container.scrollTop, scrollLeft = _this$container.scrollLeft, scrollHeight = _this$container.scrollHeight, scrollWidth = _this$container.scrollWidth, clientHeight = _this$container.clientHeight, clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;
      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }
      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }
      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function() {
          _this.isAutoScrolling = true;
          var offset2 = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset2.top;
          _this.container.scrollLeft += offset2.left;
          _this.onScrollCallback(offset2);
        }, 5);
      }
    }
  }]);
  return AutoScroller2;
}();
function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}
function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];
  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }
  if (closest(event.target, function(el) {
    return el.contentEditable === "true";
  })) {
    return true;
  }
  return false;
}
var propTypes = {
  axis: import_prop_types7.default.oneOf(["x", "y", "xy"]),
  contentWindow: import_prop_types7.default.any,
  disableAutoscroll: import_prop_types7.default.bool,
  distance: import_prop_types7.default.number,
  getContainer: import_prop_types7.default.func,
  getHelperDimensions: import_prop_types7.default.func,
  helperClass: import_prop_types7.default.string,
  helperContainer: import_prop_types7.default.oneOfType([import_prop_types7.default.func, typeof HTMLElement === "undefined" ? import_prop_types7.default.any : import_prop_types7.default.instanceOf(HTMLElement)]),
  hideSortableGhost: import_prop_types7.default.bool,
  keyboardSortingTransitionDuration: import_prop_types7.default.number,
  lockAxis: import_prop_types7.default.string,
  lockOffset: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string, import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]))]),
  lockToContainerEdges: import_prop_types7.default.bool,
  onSortEnd: import_prop_types7.default.func,
  onSortMove: import_prop_types7.default.func,
  onSortOver: import_prop_types7.default.func,
  onSortStart: import_prop_types7.default.func,
  pressDelay: import_prop_types7.default.number,
  pressThreshold: import_prop_types7.default.number,
  keyCodes: import_prop_types7.default.shape({
    lift: import_prop_types7.default.arrayOf(import_prop_types7.default.number),
    drop: import_prop_types7.default.arrayOf(import_prop_types7.default.number),
    cancel: import_prop_types7.default.arrayOf(import_prop_types7.default.number),
    up: import_prop_types7.default.arrayOf(import_prop_types7.default.number),
    down: import_prop_types7.default.arrayOf(import_prop_types7.default.number)
  }),
  shouldCancelStart: import_prop_types7.default.func,
  transitionDuration: import_prop_types7.default.number,
  updateBeforeSortStart: import_prop_types7.default.func,
  useDragHandle: import_prop_types7.default.bool,
  useWindowAsScrollContainer: import_prop_types7.default.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps2 = {
  axis: "y",
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: "50%",
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps5(props) {
  (0, import_invariant.default)(!(props.distance && props.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.");
}
function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }
  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }
  return finalizer(false, value);
}
var SortableContext = (0, import_react96.createContext)({
  manager: {}
});
function sortableContainer(WrappedComponent) {
  var _class, _temp;
  var config2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function(_React$Component) {
    _inherits(WithSortableContainer, _React$Component);
    function WithSortableContainer(props) {
      var _this;
      _classCallCheck(this, WithSortableContainer);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithSortableContainer).call(this, props));
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStart", function(event) {
        var _this$props = _this.props, distance = _this$props.distance, shouldCancelStart = _this$props.shouldCancelStart;
        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }
        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function(el) {
          return el.sortableInfo != null;
        });
        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo, index2 = _node$sortableInfo.index, collection = _node$sortableInfo.collection, disabled = _node$sortableInfo.disabled;
          if (disabled) {
            return;
          }
          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }
          _this.manager.active = {
            collection,
            index: index2
          };
          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }
          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function() {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nodeIsChild", function(node) {
        return node.sortableInfo.manager === _this.manager;
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMove", function(event) {
        var _this$props2 = _this.props, distance = _this$props2.distance, pressThreshold = _this$props2.pressThreshold;
        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;
          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnd", function() {
        _this.touched = false;
        _this.cancel();
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancel", function() {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;
        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }
          _this.manager.active = null;
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePress", function(event) {
        try {
          var active = _this.manager.getActive();
          var _temp6 = function() {
            if (active) {
              var _temp7 = function _temp72() {
                var index2 = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);
                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();
                var dimensions = _getHelperDimensions({
                  index: index2,
                  node: _node,
                  collection: _collection
                });
                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index2;
                _this.newIndex = index2;
                _this.axis = {
                  x: _axis.indexOf("x") >= 0,
                  y: _axis.indexOf("y") >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);
                if (_isKeySorting) {
                  _this.initialOffset = getPosition(_objectSpread({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }
                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: "border-box",
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: "none",
                  position: "fixed",
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });
                if (_isKeySorting) {
                  _this.helper.focus();
                }
                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: "hidden"
                  });
                }
                _this.minTranslate = {};
                _this.maxTranslate = {};
                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect, containerTop = _ref.top, containerLeft = _ref.left, containerWidth = _ref.width, containerHeight = _ref.height;
                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;
                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }
                if (_helperClass) {
                  _helperClass.split(" ").forEach(function(className) {
                    return _this.helper.classList.add(className);
                  });
                }
                _this.listenerNode = event.touches ? event.target : _this.contentWindow;
                if (_isKeySorting) {
                  _this.listenerNode.addEventListener("wheel", _this.handleKeyEnd, true);
                  _this.listenerNode.addEventListener("mousedown", _this.handleKeyEnd, true);
                  _this.listenerNode.addEventListener("keydown", _this.handleKeyDown);
                } else {
                  events.move.forEach(function(eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function(eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }
                _this.setState({
                  sorting: true,
                  sortingIndex: index2
                });
                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index2,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }
                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };
              var _this$props3 = _this.props, _axis = _this$props3.axis, _getHelperDimensions = _this$props3.getHelperDimensions, _helperClass = _this$props3.helperClass, _hideSortableGhost = _this$props3.hideSortableGhost, updateBeforeSortStart = _this$props3.updateBeforeSortStart, _onSortStart = _this$props3.onSortStart, _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node, _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;
              var _temp8 = function() {
                if (typeof updateBeforeSortStart === "function") {
                  _this._awaitingUpdateBeforeSortStart = true;
                  var _temp9 = _finallyRethrows(function() {
                    var index2 = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index2,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function() {
                    });
                  }, function(_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });
                  if (_temp9 && _temp9.then) return _temp9.then(function() {
                  });
                }
              }();
              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();
          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function() {
          }) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortMove", function(event) {
        var onSortMove = _this.props.onSortMove;
        if (typeof event.preventDefault === "function" && event.cancelable) {
          event.preventDefault();
        }
        _this.updateHelperPosition(event);
        _this.animateNodes();
        _this.autoscroll();
        if (onSortMove) {
          onSortMove(event);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortEnd", function(event) {
        var _this$props4 = _this.props, hideSortableGhost = _this$props4.hideSortableGhost, onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager, collection = _this$manager.active.collection, isKeySorting = _this$manager.isKeySorting;
        var nodes = _this.manager.getOrderedRefs();
        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener("wheel", _this.handleKeyEnd, true);
            _this.listenerNode.removeEventListener("mousedown", _this.handleKeyEnd, true);
            _this.listenerNode.removeEventListener("keydown", _this.handleKeyDown);
          } else {
            events.move.forEach(function(eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function(eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }
        _this.helper.parentNode.removeChild(_this.helper);
        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: "",
            visibility: ""
          });
        }
        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }
        _this.autoScroller.clear();
        _this.manager.active = null;
        _this.manager.isKeySorting = false;
        _this.setState({
          sorting: false,
          sortingIndex: null
        });
        if (typeof onSortEnd === "function") {
          onSortEnd({
            collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting,
            nodes
          }, event);
        }
        _this.touched = false;
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autoscroll", function() {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;
        if (disableAutoscroll) {
          _this.autoScroller.clear();
          return;
        }
        if (isKeySorting) {
          var translate = _objectSpread({}, _this.translate);
          var scrollX = 0;
          var scrollY = 0;
          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }
          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }
          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }
        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAutoScroll", function(offset2) {
        _this.translate.x += offset2.left;
        _this.translate.y += offset2.top;
        _this.animateNodes();
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function(event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props, shouldCancelStart = _this$props5.shouldCancelStart, _this$props5$keyCodes = _this$props5.keyCodes, customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;
        var keyCodes = _objectSpread({}, defaultKeyCodes, customKeyCodes);
        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;
          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyLift", function(event) {
        var target = event.target;
        var node = closest(target, function(el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo, index2 = _node$sortableInfo2.index, collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index2,
          collection
        };
        _this.handlePress(event);
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyMove", function(shift) {
        var nodes = _this.manager.getOrderedRefs();
        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;
        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }
        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function(_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };
        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyDrop", function(event) {
        _this.handleSortEnd(event);
        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyEnd", function(event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isValidSortingTarget", function(event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function(el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });
      var manager = new Manager2();
      validateProps5(props);
      _this.manager = manager;
      _this.wrappedInstance = (0, import_react96.createRef)();
      _this.sortableContextValue = {
        manager
      };
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }
    _createClass(WithSortableContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function(containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === "function" ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function(key) {
            return events[key].forEach(function(eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });
          _this2.container.addEventListener("keydown", _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;
        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }
        if (!this.container) {
          return;
        }
        Object.keys(this.events).forEach(function(key) {
          return events[key].forEach(function(eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener("keydown", this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props, lockAxis = _this$props6.lockAxis, lockOffset = _this$props6.lockOffset, lockToContainerEdges = _this$props6.lockToContainerEdges, transitionDuration = _this$props6.transitionDuration, _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration, keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset2 = getPosition(event);
        var translate = {
          x: offset2.x - this.initialOffset.x,
          y: offset2.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;
        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset,
            width: this.width
          }), _getLockPixelOffsets2 = _slicedToArray(_getLockPixelOffsets, 2), minLockOffset = _getLockPixelOffsets2[0], maxLockOffset = _getLockPixelOffsets2[1];
          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }
        if (lockAxis === "x") {
          translate.y = 0;
        } else if (lockAxis === "y") {
          translate.x = 0;
        }
        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }
        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props, transitionDuration = _this$props7.transitionDuration, hideSortableGhost = _this$props7.hideSortableGhost, onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta, windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;
        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index2 = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset2 = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index2 > this.index && index2 <= prevIndex;
          var mustShiftForward = isKeySorting && index2 < this.index && index2 >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;
          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;
            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }
          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];
          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);
            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }
          if (index2 === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: "hidden"
              });
            }
            continue;
          }
          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }
          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index2 < this.index && (sortingOffset.left + windowScrollDelta.left - offset2.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset2.height || sortingOffset.top + windowScrollDelta.top + offset2.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;
                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset2.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }
                if (this.newIndex === null) {
                  this.newIndex = index2;
                }
              } else if (mustShiftBackward || index2 > this.index && (sortingOffset.left + windowScrollDelta.left + offset2.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset2.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset2.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);
                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset2.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }
                this.newIndex = index2;
              }
            } else {
              if (mustShiftBackward || index2 > this.index && sortingOffset.left + windowScrollDelta.left + offset2.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index2;
              } else if (mustShiftForward || index2 < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset2.width) {
                translate.x = this.width + this.marginOffset.x;
                if (this.newIndex == null) {
                  this.newIndex = index2;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index2 > this.index && sortingOffset.top + windowScrollDelta.top + offset2.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index2;
            } else if (mustShiftForward || index2 < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset2.height) {
              translate.y = this.height + this.marginOffset.y;
              if (this.newIndex == null) {
                this.newIndex = index2;
              }
            }
          }
          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }
        if (this.newIndex == null) {
          this.newIndex = this.index;
        }
        if (isKeySorting) {
          this.newIndex = prevIndex;
        }
        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;
        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex,
            isKeySorting,
            nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        (0, import_invariant.default)(config2.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call");
        return this.wrappedInstance.current;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer2 = this.props.getContainer;
        if (typeof getContainer2 !== "function") {
          return (0, import_react_dom4.findDOMNode)(this);
        }
        return getContainer2(config2.withRef ? this.getWrappedInstance() : void 0);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config2.withRef ? this.wrappedInstance : null;
        return (0, import_react96.createElement)(SortableContext.Provider, {
          value: this.sortableContextValue
        }, (0, import_react96.createElement)(WrappedComponent, _extends({
          ref
        }, omit(this.props, omittedProps))));
      }
    }, {
      key: "helperContainer",
      get: function get2() {
        var helperContainer = this.props.helperContainer;
        if (typeof helperContainer === "function") {
          return helperContainer();
        }
        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get2() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }
        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get2() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);
    return WithSortableContainer;
  }(import_react96.Component), _defineProperty(_class, "displayName", provideDisplayName("sortableList", WrappedComponent)), _defineProperty(_class, "defaultProps", defaultProps2), _defineProperty(_class, "propTypes", propTypes), _temp;
}
var propTypes$1 = {
  index: import_prop_types7.default.number.isRequired,
  collection: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]),
  disabled: import_prop_types7.default.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;
  var config2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function(_React$Component) {
    _inherits(WithSortableElement, _React$Component);
    function WithSortableElement() {
      var _getPrototypeOf2;
      var _this;
      _classCallCheck(this, WithSortableElement);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithSortableElement)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrappedInstance", (0, import_react96.createRef)());
      return _this;
    }
    _createClass(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }
          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }
        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props, collection = _this$props.collection, disabled = _this$props.disabled, index2 = _this$props.index;
        var node = (0, import_react_dom4.findDOMNode)(this);
        node.sortableInfo = {
          collection,
          disabled,
          index: index2,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        (0, import_invariant.default)(config2.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call");
        return this.wrappedInstance.current;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config2.withRef ? this.wrappedInstance : null;
        return (0, import_react96.createElement)(WrappedComponent, _extends({
          ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);
    return WithSortableElement;
  }(import_react96.Component), _defineProperty(_class, "displayName", provideDisplayName("sortableElement", WrappedComponent)), _defineProperty(_class, "contextType", SortableContext), _defineProperty(_class, "propTypes", propTypes$1), _defineProperty(_class, "defaultProps", {
    collection: 0
  }), _temp;
}

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/TextInput.js
var import_react100 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useElementSize.js
var import_react97 = __toESM(require_react());
var import_throttle2 = __toESM(require_throttle());
var RESIZE_THROTTLE2 = 16;
function useElementSize(ref, key) {
  const [size2, setSize] = (0, import_react97.useState)({
    width: 0,
    height: 0
  });
  (0, import_react97.useLayoutEffect)(() => {
    if (!(ref === null || ref === void 0 ? void 0 : ref.current)) {
      return void 0;
    }
    const handleResize = (entries) => {
      if (!Array.isArray(entries)) {
        return;
      }
      const entry = entries[0];
      if (entry.borderBoxSize) {
        const borderBoxSize = entry.borderBoxSize[0] ? entry.borderBoxSize[0] : entry.borderBoxSize;
        setSize({
          width: Math.round(borderBoxSize.inlineSize),
          height: Math.round(borderBoxSize.blockSize)
        });
      } else {
        const target = entry.target;
        setSize({
          width: Math.round(target.offsetWidth),
          height: Math.round(target.offsetHeight)
        });
      }
    };
    const observer = new ResizeObserver_es_default((0, import_throttle2.default)(handleResize, RESIZE_THROTTLE2));
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, key]);
  return size2;
}

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/TextAreaControl/TextAreaControl.js
var import_react98 = __toESM(require_react());
var b36 = block("text-input");
function TextAreaControl(props) {
  var _a;
  const { name, id, tabIndex, autoFocus, autoComplete, placeholder, value: value2, defaultValue, onChange, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, controlRef, controlProps, disabled, rows, minRows = 1, maxRows } = props;
  const innerControlRef = import_react98.default.useRef(null);
  const handleRef = useForkRef(controlRef, innerControlRef);
  const textareaRows = rows || minRows;
  const resizeHeight = import_react98.default.useCallback(() => {
    const control = innerControlRef === null || innerControlRef === void 0 ? void 0 : innerControlRef.current;
    if (control && !rows) {
      const inputValue = value2 || control.value;
      const numberOfLines = (inputValue.match(/\n/g) || []).length + 1;
      const controlStyles = getComputedStyle(control);
      const lineHeight = parseInt(controlStyles.getPropertyValue("line-height"), 10);
      const borderWidth = parseInt(controlStyles.getPropertyValue("border-top-width"), 10);
      const paddingTop = parseInt(controlStyles.getPropertyValue("padding-top"), 10);
      const lines = Math.floor(control.scrollHeight / lineHeight);
      if (maxRows && maxRows < Math.max(lines, numberOfLines)) {
        control.style.height = "auto";
        control.style.height = `${maxRows * lineHeight + 2 * paddingTop + 2 * borderWidth}px`;
      } else {
        control.style.height = "auto";
        control.style.height = `${control.scrollHeight + 2 * borderWidth}px`;
      }
    }
  }, [rows, maxRows, value2]);
  import_react98.default.useEffect(resizeHeight, [resizeHeight]);
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    } else {
      resizeHeight();
    }
  };
  return import_react98.default.createElement("textarea", Object.assign({}, controlProps, { ref: handleRef, style: Object.assign(Object.assign({}, (_a = controlProps) === null || _a === void 0 ? void 0 : _a.style), { height: rows ? "auto" : void 0 }), className: b36("control", { type: "textarea" }, controlProps === null || controlProps === void 0 ? void 0 : controlProps.className), name, id, tabIndex, placeholder, value: value2, defaultValue, rows: textareaRows, autoFocus, autoComplete, onChange: handleChange, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, disabled }));
}

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/InputControl/InputControl.js
var import_react99 = __toESM(require_react());
var b37 = block("text-input");
function InputControl(props) {
  const { type, name, id, tabIndex, autoFocus, autoComplete, placeholder, value: value2, defaultValue, onChange, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, controlProps, controlRef, disabled } = props;
  return import_react99.default.createElement("input", Object.assign({}, controlProps, { ref: controlRef, className: b37("control", { type: "input" }, controlProps === null || controlProps === void 0 ? void 0 : controlProps.className), type, name, id, tabIndex, placeholder, value: value2, defaultValue, autoFocus, autoComplete, onChange, onFocus, onBlur, onKeyDown, onKeyUp, onKeyPress, disabled }));
}

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/i18n/en.json
var en_default3 = {
  "label_clear-button": "Clear input value"
};

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/i18n/ru.json
var ru_default3 = {
  "label_clear-button": "Очистить введённое значение"
};

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/i18n/index.js
var i18n_default2 = registerKeyset({ en: en_default3, ru: ru_default3 }, "text-input");

// node_modules/@gravity-ui/uikit/build/esm/components/TextInput/TextInput.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/TextInput/TextInput.css";
var b38 = block("text-input");
var getTextInputState = (args = {}) => {
  const { error } = args;
  return error ? "error" : void 0;
};
var prepareAutoComplete = (autoComplete) => {
  if (typeof autoComplete === "boolean") {
    return autoComplete ? "on" : "off";
  } else {
    return autoComplete;
  }
};
var TextInput = import_react100.default.forwardRef(function TextInput2(props, ref) {
  const { view = "normal", size: size2 = "m", pin = "round-round", name, value: value2, defaultValue, label, disabled = false, multiline = false, hasClear = false, error, autoComplete, onUpdate, onChange, id: originalId, tabIndex, style, className, qa, controlProps: originalControlProps } = props;
  const [uncontrolledValue, setUncontrolledValue] = import_react100.default.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : "");
  const innerControlRef = import_react100.default.useRef(null);
  const labelRef = import_react100.default.useRef(null);
  const [hasVerticalScrollbar, setHasVerticalScrollbar] = import_react100.default.useState(false);
  const isControlled = value2 !== void 0;
  const inputValue = isControlled ? value2 : uncontrolledValue;
  const isLabelVisible = !multiline && Boolean(label);
  const innerId = useUniqId();
  const id = isLabelVisible ? originalId || innerId : originalId;
  const isAutoCompleteOff = isLabelVisible && !originalId && !name && typeof autoComplete === "undefined";
  const handleRef = useForkRef(props.controlRef, innerControlRef);
  const labelSize = useElementSize(isLabelVisible ? labelRef : null, size2);
  import_react100.default.useEffect(() => {
    const control = innerControlRef.current;
    if (control && multiline) {
      const currHasVerticalScrollbar = control.scrollHeight > control.clientHeight;
      if (hasVerticalScrollbar !== currHasVerticalScrollbar) {
        setHasVerticalScrollbar(currHasVerticalScrollbar);
      }
    }
  }, [multiline, inputValue, hasVerticalScrollbar]);
  const state = import_react100.default.useMemo(() => getTextInputState({ error }), [error]);
  const handleClear = (event) => {
    const control = innerControlRef.current;
    if (control) {
      control.focus();
      const syntheticEvent = Object.create(event);
      syntheticEvent.target = control;
      syntheticEvent.currentTarget = control;
      control.value = "";
      if (onChange) {
        onChange(syntheticEvent);
      }
      if (onUpdate) {
        onUpdate("");
      }
    }
    if (!isControlled) {
      setUncontrolledValue("");
    }
  };
  const isErrorMsgVisible = typeof error === "string";
  const isClearControlVisible = Boolean(hasClear && !disabled && inputValue);
  const controlProps = Object.assign(Object.assign({}, originalControlProps), { style: Object.assign(Object.assign({}, originalControlProps === null || originalControlProps === void 0 ? void 0 : originalControlProps.style), isLabelVisible && labelSize.width ? { paddingLeft: `${labelSize.width}px` } : {}) });
  const commonProps = {
    id,
    tabIndex,
    name,
    onChange(event) {
      const newValue = event.target.value;
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      if (onChange) {
        onChange(event);
      }
      if (onUpdate) {
        onUpdate(newValue);
      }
    },
    autoComplete: isAutoCompleteOff ? "off" : prepareAutoComplete(autoComplete),
    controlProps
  };
  return import_react100.default.createElement(
    "span",
    { ref, style, className: b38({
      view,
      size: size2,
      pin: view === "clear" ? void 0 : pin,
      disabled,
      state,
      "has-clear": hasClear,
      "has-scrollbar": hasVerticalScrollbar
    }, className), "data-qa": qa },
    isLabelVisible && import_react100.default.createElement("label", { ref: labelRef, className: b38("label"), title: label, htmlFor: id }, `${label}`),
    multiline ? import_react100.default.createElement(TextAreaControl, Object.assign({}, props, commonProps, { controlRef: handleRef })) : import_react100.default.createElement(InputControl, Object.assign({}, props, commonProps, { controlRef: handleRef })),
    isErrorMsgVisible && import_react100.default.createElement("div", { className: b38("error") }, error),
    hasClear && import_react100.default.createElement(
      Button2,
      { size: size2, className: b38("clear", { visible: isClearControlVisible }), onClick: handleClear, extraProps: { "aria-label": i18n_default2("label_clear-button") } },
      import_react100.default.createElement(Icon, { data: CrossIcon, size: 10 })
    )
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/List/components/ListItem.js
var import_react102 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/constants.js
var KeyCode = {
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  TAB: "Tab",
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#whitespace_keys
  SPACEBAR: " "
};

// node_modules/@gravity-ui/uikit/build/esm/components/List/constants.js
var ListQa = {
  ACTIVE_ITEM: "list-active-item"
};
var listNavigationIgnoredKeys = [
  // Tab key should focus the next element
  KeyCode.TAB
];

// node_modules/@gravity-ui/uikit/build/esm/components/List/components/DragHandleIcon.js
var import_react101 = __toESM(require_react());
function DragHandleIcon(props) {
  return import_react101.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 6 10", width: "6", height: "10", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react101.default.createElement("path", { d: "M0 0h2v2H0zm0 4h2v2H0zm0 4h2v2H0zm4-8h2v2H4zm0 4h2v2H4zm0 4h2v2H4z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/List/components/ListItem.js
var b39 = block("list");
var defaultRenderItem = (item) => String(item);
var ListItem = class _ListItem extends import_react102.default.Component {
  constructor() {
    super(...arguments);
    this.ref = import_react102.default.createRef();
    this.getRef = () => this.ref;
    this.onClick = () => {
      var _a, _b;
      return (_b = (_a = this.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, this.props.item, this.props.itemIndex);
    };
    this.onClickCapture = (event) => {
      _ListItem.publishEvent({
        domEvent: event,
        eventId: "click"
      });
    };
    this.onMouseEnter = () => !this.props.item.disabled && this.props.onActivate(this.props.itemIndex);
    this.onMouseLeave = () => this.props.onActivate(void 0);
  }
  render() {
    const { item, style, sortable, sortHandleAlign, itemClassName, selected, active } = this.props;
    return import_react102.default.createElement(
      "div",
      { role: "listitem", "data-qa": active ? ListQa.ACTIVE_ITEM : void 0, className: b39("item", {
        sortable,
        active,
        selected,
        inactive: item.disabled,
        "sort-handle-align": sortHandleAlign
      }, itemClassName), style, onClick: item.disabled ? void 0 : this.onClick, onClickCapture: item.disabled ? void 0 : this.onClickCapture, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, ref: this.ref },
      this.renderSortIcon(),
      this.renderContent()
    );
  }
  renderSortIcon() {
    const { sortable } = this.props;
    return sortable ? import_react102.default.createElement(
      "div",
      { className: b39("item-sort-icon") },
      import_react102.default.createElement(DragHandleIcon, null)
    ) : null;
  }
  renderContent() {
    const { renderItem = defaultRenderItem, item, active, itemIndex } = this.props;
    return import_react102.default.createElement("div", { className: b39("item-content") }, renderItem(item, active, itemIndex));
  }
};
ListItem.publishEvent = eventBroker.withEventPublisher("List");

// node_modules/@gravity-ui/uikit/build/esm/components/List/components/SimpleContainer.js
var import_react103 = __toESM(require_react());
var import_range = __toESM(require_range());
function getRefs(count) {
  return (0, import_range.default)(count).reduce((acc, index2) => {
    acc[index2] = import_react103.default.createRef();
    return acc;
  }, {});
}
var SimpleContainer = class extends import_react103.default.Component {
  static getDerivedStateFromProps({ itemCount }, prevState) {
    const refsCount = Object.keys(prevState).length;
    if (itemCount === refsCount) {
      return prevState;
    } else {
      return getRefs(itemCount);
    }
  }
  constructor(props) {
    super(props);
    this.state = getRefs(props.itemCount);
  }
  render() {
    const children2 = import_react103.default.Children.map(this.props.children, (child, index2) => import_react103.default.cloneElement(child, { ref: this.state[index2] }));
    return import_react103.default.createElement("div", null, children2);
  }
  scrollToItem(index2) {
    var _a, _b, _c;
    const listItem = (_a = this.state[index2]) === null || _a === void 0 ? void 0 : _a.current;
    if (listItem && typeof listItem.getRef === "function") {
      const ref = listItem.getRef();
      if (ref.current) {
        (_c = (_b = ref.current).scrollIntoView) === null || _c === void 0 ? void 0 : _c.call(_b, {
          block: "nearest"
        });
      }
    }
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/List/List.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/List/List.css";
var b40 = block("list");
var DEFAULT_ITEM_HEIGHT = 28;
var SortableListItem = sortableElement(ListItem);
var SortableListContainer = sortableContainer(VariableSizeList, { withRef: true });
var SortableSimpleContainer = sortableContainer(SimpleContainer, { withRef: true });
var listDefaultProps = {
  items: [],
  itemClassName: "",
  filterable: true,
  sortable: false,
  virtualized: true,
  deactivateOnLeave: true
};
var List = class _List extends import_react104.default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      items: this.props.items,
      filter: ""
    };
    this.refFilter = import_react104.default.createRef();
    this.refContainer = import_react104.default.createRef();
    this.blurTimer = null;
    this.onKeyDown = (event) => {
      const { activeItem, pageSize } = this.state;
      if (listNavigationIgnoredKeys.includes(event.key)) {
        return;
      }
      switch (event.key) {
        case "ArrowDown": {
          this.handleKeyMove(event, 1, -1);
          break;
        }
        case "ArrowUp": {
          this.handleKeyMove(event, -1);
          break;
        }
        case "PageDown": {
          this.handleKeyMove(event, pageSize);
          break;
        }
        case "PageUp": {
          this.handleKeyMove(event, -pageSize);
          break;
        }
        case "Home": {
          this.handleKeyMove(event, this.state.items.length - (activeItem || 0));
          break;
        }
        case "End": {
          this.handleKeyMove(event, -(activeItem || 0) - 1);
          break;
        }
        case "Enter": {
          if (typeof activeItem === "number" && this.props.onItemClick) {
            this.props.onItemClick(this.state.items[activeItem], activeItem, true);
          }
          break;
        }
        default: {
          if (this.refFilter.current) {
            this.refFilter.current.focus();
          }
        }
      }
    };
    this.renderItem = ({ index: index2, style }) => {
      const { sortHandleAlign } = this.props;
      const { items, activeItem } = this.state;
      const item = items[index2];
      const sortable = this.props.sortable && items.length > 1 && !this.getFilter();
      const active = index2 === activeItem || index2 === this.props.activeItemIndex;
      const Item2 = sortable ? SortableListItem : ListItem;
      return import_react104.default.createElement(Item2, { key: index2, style, index: index2, itemIndex: index2, item, sortable, sortHandleAlign, renderItem: this.props.renderItem, itemClassName: this.props.itemClassName, active, selected: index2 === this.props.selectedItemIndex, onActivate: this.onItemActivate, onClick: this.props.onItemClick });
    };
    this.filterItem = (filter) => (item) => {
      return String(item).includes(filter);
    };
    this.scrollToIndex = (index2) => {
      const container = this.getContainer();
      if (container) {
        container.scrollToItem(index2);
      }
    };
    this.deactivate = () => {
      if (!this.blurTimer) {
        return;
      }
      if (this.props.deactivateOnLeave) {
        this.setState({ activeItem: void 0 });
      }
    };
    this.handleFocus = () => {
      if (this.blurTimer) {
        clearTimeout(this.blurTimer);
        this.blurTimer = null;
      }
    };
    this.handleBlur = () => {
      if (!this.blurTimer) {
        this.blurTimer = setTimeout(this.deactivate, 50);
      }
    };
    this.onUpdateFilterInternal = (value2) => {
      const { items, filterItem = this.filterItem, onFilterEnd } = this.props;
      this.setState({
        filter: value2,
        items: value2 ? items.filter(filterItem(value2)) : items
      }, () => {
        if (onFilterEnd) {
          onFilterEnd({ items: this.state.items });
        }
      });
    };
    this.onFilterUpdate = (value2) => {
      if (this.props.onFilterUpdate) {
        this.props.onFilterUpdate(value2);
      } else {
        this.onUpdateFilterInternal(value2);
      }
    };
    this.onItemsRendered = ({ visibleStartIndex, visibleStopIndex }) => {
      this.setState({
        pageSize: visibleStopIndex - visibleStartIndex
      });
    };
    this.onItemActivate = (index2) => {
      if (!this.state.sorting) {
        this.activateItem(index2, false);
      }
    };
    this.onMouseLeave = () => {
      this.deactivate();
    };
    this.onSortStart = () => {
      this.setState({ sorting: true });
    };
    this.onSortEnd = (params) => {
      if (this.props.onSortEnd) {
        this.props.onSortEnd(params);
      }
      this.setState({
        sorting: false,
        activeItem: params.newIndex
      });
    };
    this.getItemHeight = (index2) => {
      const { itemHeight } = this.props;
      if (typeof itemHeight === "function") {
        const { items } = this.state;
        return itemHeight(items[index2], index2);
      }
      return itemHeight;
    };
    this.getVirtualizedItemHeight = (index2) => {
      return this.getItemHeight(index2) || DEFAULT_ITEM_HEIGHT;
    };
  }
  static moveListElement(list, oldIndex, newIndex) {
    if (oldIndex !== newIndex) {
      const [item] = list.splice(oldIndex, 1);
      list.splice(newIndex, 0, item);
    }
    return list;
  }
  static findNextIndex(list, index2, step) {
    const dataLength = list.length;
    let currentIndex = (index2 + dataLength) % dataLength;
    for (let i = 0; i < dataLength; i += 1) {
      if (list[currentIndex] && !list[currentIndex].disabled) {
        return currentIndex;
      }
      currentIndex = (currentIndex + dataLength + step) % dataLength;
    }
    return void 0;
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      const filter = this.getFilter();
      const internalFiltering = filter && !this.props.onFilterUpdate;
      if (internalFiltering) {
        this.onUpdateFilterInternal(filter);
      } else {
        this.setState({ items: this.props.items });
      }
    }
    if (this.props.activeItemIndex !== prevProps.activeItemIndex) {
      this.activateItem(this.props.activeItemIndex);
    }
  }
  componentWillUnmount() {
    this.blurTimer = null;
  }
  render() {
    const { emptyPlaceholder, virtualized, className, itemsClassName } = this.props;
    const { items } = this.state;
    return import_react104.default.createElement(MobileContext.Consumer, null, ({ mobile }) => import_react104.default.createElement(
      "div",
      { className: b40({ mobile }, className), tabIndex: -1, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.onKeyDown },
      this.renderFilter(),
      import_react104.default.createElement(
        "div",
        { className: b40("items", { virtualized }, itemsClassName), style: this.getItemsStyle(), onMouseLeave: this.onMouseLeave },
        this.renderItems(),
        items.length === 0 && Boolean(emptyPlaceholder) && import_react104.default.createElement("div", { className: b40("empty-placeholder") }, emptyPlaceholder)
      )
    ));
  }
  getItems() {
    return this.state.items;
  }
  getActiveItem() {
    return typeof this.state.activeItem === "number" ? this.state.activeItem : null;
  }
  activateItem(index2, scrollTo = true) {
    if (typeof index2 === "number" && scrollTo) {
      this.scrollToIndex(index2);
    }
    this.setState({ activeItem: index2 });
  }
  renderFilter() {
    const { size: size2, filterable, filter = this.state.filter, filterPlaceholder, filterClassName = "" } = this.props;
    if (!filterable) {
      return null;
    }
    return import_react104.default.createElement(
      "div",
      { className: b40("filter", filterClassName) },
      import_react104.default.createElement(TextInput, { controlRef: this.refFilter, size: size2, placeholder: filterPlaceholder, value: filter, hasClear: true, onUpdate: this.onFilterUpdate })
    );
  }
  renderSimpleContainer() {
    const { sortable } = this.props;
    const { items } = this.state;
    const Container = sortable ? SortableSimpleContainer : SimpleContainer;
    return import_react104.default.createElement(Container, { helperClass: b40("item", { sorting: true }), distance: 5, lockAxis: "y", onSortStart: this.onSortStart, onSortEnd: this.onSortEnd, itemCount: items.length, ref: this.refContainer }, items.map((_item, index2) => this.renderItem({ index: index2, style: { height: this.getItemHeight(index2) } })));
  }
  renderVirtualizedContainer() {
    const Container = this.props.sortable ? SortableListContainer : VariableSizeList;
    return import_react104.default.createElement(index_esm_default, null, ({ width, height }) => import_react104.default.createElement(Container, {
      ref: this.refContainer,
      width,
      height,
      itemSize: this.getVirtualizedItemHeight,
      itemData: this.state.items,
      itemCount: this.state.items.length,
      overscanCount: 10,
      helperClass: b40("item", { sorting: true }),
      distance: 5,
      lockAxis: "y",
      onItemsRendered: this.onItemsRendered,
      onSortStart: this.onSortStart,
      onSortEnd: this.onSortEnd,
      // this property used to rerender items in viewport
      // must be last, typescript skips checks for all props behind ts-ignore/ts-expect-error
      // @ts-expect-error
      activeItem: this.state.activeItem
    }, this.renderItem));
  }
  renderItems() {
    if (this.props.virtualized) {
      return this.renderVirtualizedContainer();
    } else {
      return this.renderSimpleContainer();
    }
  }
  getContainer() {
    const ref = this.refContainer.current;
    const wrappedInstance = ref && "getWrappedInstance" in ref && typeof ref.getWrappedInstance === "function" && ref.getWrappedInstance();
    return this.props.sortable ? wrappedInstance : ref;
  }
  getFilter() {
    const { filter = this.state.filter } = this.props;
    return filter;
  }
  getItemsStyle() {
    let { itemsHeight } = this.props;
    if (typeof itemsHeight === "function") {
      itemsHeight = itemsHeight(this.state.items);
    }
    return itemsHeight ? { height: itemsHeight } : void 0;
  }
  handleKeyMove(event, step, defaultItemIndex = 0) {
    event.preventDefault();
    const { activeItem = defaultItemIndex } = this.state;
    this.activateItem(_List.findNextIndex(this.state.items, activeItem + step, Math.sign(step)));
  }
};
List.defaultProps = listDefaultProps;

// node_modules/@gravity-ui/uikit/build/esm/components/List/index.js
var ListWrapper = (props) => import_react105.default.createElement(List, Object.assign({}, props));
ListWrapper.defaultProps = listDefaultProps;

// node_modules/@gravity-ui/uikit/build/esm/components/Loader/Loader.js
var import_react106 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Loader/Loader.css";
var b41 = block("loader");
function Loader({ size: size2 = "s", className }) {
  return import_react106.default.createElement(
    "div",
    { className: b41({ size: size2 }, className) },
    import_react106.default.createElement("div", { className: b41("left") }),
    import_react106.default.createElement("div", { className: b41("center") }),
    import_react106.default.createElement("div", { className: b41("right") })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Progress/Progress.js
var import_react107 = __toESM(require_react());
var import_sumBy = __toESM(require_sumBy());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Progress/Progress.css";
var b42 = block("progress");
var Progress = class _Progress extends import_react107.Component {
  static isFiniteNumber(value2) {
    return isFinite(value2) && !isNaN(value2);
  }
  static isBetween(value2, min2, max2) {
    return value2 >= min2 && value2 <= max2;
  }
  static getOffset(value2) {
    return value2 < 100 ? value2 - 100 : 0;
  }
  static getValueFromStack(stack) {
    return (0, import_sumBy.default)(stack, (item) => item.value);
  }
  static isProgressWithStack(props) {
    return props.stack !== void 0;
  }
  render() {
    const { view, className } = this.props;
    return import_react107.default.createElement(
      "div",
      { className: b42({ view }, className) },
      this.renderText(),
      this.renderContent()
    );
  }
  getTheme() {
    if (_Progress.isProgressWithStack(this.props)) {
      throw new Error("Unexpected behavior");
    }
    const { theme, colorStops, colorStopsValue, value: value2 } = this.props;
    if (colorStops) {
      const matchingColorStopItem = colorStops.find((item, index2) => {
        const currentValue = typeof colorStopsValue === "number" ? colorStopsValue : value2;
        return _Progress.isBetween(currentValue, index2 > 1 ? colorStops[index2 - 1].stop : 0, index2 < colorStops.length - 1 ? item.stop : 100);
      });
      return matchingColorStopItem ? matchingColorStopItem.theme : theme;
    }
    return theme;
  }
  renderContent() {
    if (_Progress.isProgressWithStack(this.props)) {
      return this.renderStack(this.props);
    } else {
      return this.renderItem(this.props);
    }
  }
  renderItem(props) {
    const { value: value2 } = props;
    const className = b42("item", { theme: this.getTheme() });
    const offset2 = _Progress.getOffset(value2);
    const style = { transform: `translateX(${offset2}%)` };
    if (_Progress.isFiniteNumber(value2)) {
      return import_react107.default.createElement("div", { className, style }, this.renderInnerText(offset2));
    }
    return null;
  }
  renderStack(props) {
    const { stack, stackClassName } = props;
    const className = b42("stack", stackClassName);
    const value2 = props.value || _Progress.getValueFromStack(stack);
    const offset2 = _Progress.getOffset(value2);
    const style = { transform: `translateX(${offset2}%)` };
    let itemStyle = { width: `${-offset2}%` };
    return import_react107.default.createElement(
      "div",
      { className, style },
      import_react107.default.createElement("div", { className: b42("item"), style: itemStyle }),
      stack.map(({ value: itemValue, color, title, theme, className: itemClassName, content }, index2) => {
        itemStyle = { width: `${itemValue}%`, backgroundColor: color };
        const modifiers = {};
        if (typeof color === "undefined") {
          modifiers.theme = theme || "default";
        }
        if (_Progress.isFiniteNumber(value2)) {
          return import_react107.default.createElement("div", { key: index2, className: b42("item", modifiers, itemClassName), style: itemStyle, title }, content);
        }
        return null;
      }),
      this.renderInnerText(offset2)
    );
  }
  renderInnerText(offset2) {
    const { text: text2 } = this.props;
    if (!text2) {
      return null;
    }
    const className = b42("text-inner");
    const style = { transform: `translateX(${-offset2}%)` };
    return import_react107.default.createElement("div", { className, style }, text2);
  }
  renderText() {
    const { text: text2 } = this.props;
    const className = b42("text");
    return import_react107.default.createElement("div", { className }, text2);
  }
};
Progress.defaultProps = {
  text: "",
  theme: "default",
  view: "normal"
};

// node_modules/@gravity-ui/uikit/build/esm/components/PromoSheet/PromoSheet.js
var import_react110 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Sheet/Sheet.js
var import_react109 = __toESM(require_react());
var import_react_dom5 = __toESM(require_react_dom());

// node_modules/@gravity-ui/uikit/build/esm/components/Sheet/SheetContent.js
var import_react108 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Sheet/utils.js
var Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.timeStamp = Date.now();
  }
};
var VelocityTracker = class {
  constructor(len = 5) {
    this.points = [];
    this.pointsLen = len;
    this.clear();
  }
  clear() {
    this.points = new Array(this.pointsLen);
  }
  addMovement({ x, y }) {
    this.points.pop();
    this.points.unshift(new Point(x, y));
  }
  getYAcceleration(lastPointCount = 1) {
    const endPoint = this.points[0];
    const startPoint = this.points[lastPointCount];
    if (!endPoint || !startPoint) {
      return 0;
    }
    return (endPoint.y - startPoint.y) / Math.pow(endPoint.timeStamp - startPoint.timeStamp, 2);
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/Sheet/constants.js
var sheetBlock = block("sheet");

// node_modules/@gravity-ui/uikit/build/esm/components/Sheet/SheetContent.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Sheet/Sheet.css";
var DEFAULT_TRANSITION_DURATION = "0.3s";
var HIDE_THRESHOLD = 50;
var ACCELERATION_Y_MAX = 0.08;
var ACCELERATION_Y_MIN = -0.02;
var MAX_CONTENT_HEIGHT_FROM_VIEWPORT_COEFFICIENT = 0.9;
var hashHistory = [];
var SheetContent = class extends import_react108.default.Component {
  constructor() {
    super(...arguments);
    this.veilRef = import_react108.default.createRef();
    this.sheetRef = import_react108.default.createRef();
    this.sheetTopRef = import_react108.default.createRef();
    this.sheetContentRef = import_react108.default.createRef();
    this.sheetInnerContentRef = import_react108.default.createRef();
    this.sheetTitleRef = import_react108.default.createRef();
    this.velocityTracker = new VelocityTracker();
    this.observer = null;
    this.transitionDuration = DEFAULT_TRANSITION_DURATION;
    this.state = {
      startScrollTop: 0,
      startY: 0,
      deltaY: 0,
      prevInnerContentHeight: 0,
      swipeAreaTouched: false,
      contentTouched: false,
      veilTouched: false,
      isAnimating: false,
      inWindowResizeScope: false
    };
    this.setStyles = ({ status, deltaHeight = 0 }) => {
      if (!this.sheetRef.current || !this.veilRef.current) {
        return;
      }
      const visibleHeight = this.sheetHeight - deltaHeight;
      const translate = status === "showing" ? `translate3d(0, -${visibleHeight}px, 0)` : "translate3d(0, 0, 0)";
      let opacity = 0;
      if (status === "showing") {
        opacity = deltaHeight === 0 ? 1 : visibleHeight / this.sheetHeight;
      }
      this.veilRef.current.style.opacity = String(opacity);
      this.sheetRef.current.style.transform = translate;
    };
    this.show = () => {
      this.setState({ isAnimating: true }, () => {
        this.setStyles({ status: "showing" });
        this.setHash();
      });
    };
    this.hide = () => {
      this.setState({ isAnimating: true }, () => {
        this.setStyles({ status: "hiding" });
        this.removeHash();
      });
    };
    this.onSwipeAreaTouchStart = (e) => {
      this.velocityTracker.clear();
      this.setState({
        startY: e.nativeEvent.touches[0].clientY,
        swipeAreaTouched: true
      });
    };
    this.onContentTouchStart = (e) => {
      if (!this.props.allowHideOnContentScroll || this.state.swipeAreaTouched) {
        return;
      }
      this.velocityTracker.clear();
      this.setState({
        startY: e.nativeEvent.touches[0].clientY,
        startScrollTop: this.sheetScrollTop,
        contentTouched: true
      });
    };
    this.onSwipeAriaTouchMove = (e) => {
      const delta = e.nativeEvent.touches[0].clientY - this.state.startY;
      this.velocityTracker.addMovement({
        x: e.nativeEvent.touches[0].clientX,
        y: e.nativeEvent.touches[0].clientY
      });
      this.setState({ deltaY: delta });
      if (delta <= 0) {
        return;
      }
      this.setStyles({ status: "showing", deltaHeight: delta });
    };
    this.onContentTouchMove = (e) => {
      if (!this.props.allowHideOnContentScroll) {
        return;
      }
      const { startScrollTop, swipeAreaTouched } = this.state;
      if (swipeAreaTouched || this.sheetScrollTop > 0 || startScrollTop > 0 && startScrollTop !== this.sheetScrollTop) {
        return;
      }
      const delta = e.nativeEvent.touches[0].clientY - this.state.startY;
      this.velocityTracker.addMovement({
        x: e.nativeEvent.touches[0].clientX,
        y: e.nativeEvent.touches[0].clientY
      });
      this.setState({ deltaY: delta });
      if (delta <= 0) {
        return;
      }
      this.setStyles({ status: "showing", deltaHeight: delta });
    };
    this.onTouchEndAction = (deltaY) => {
      const accelerationY = this.velocityTracker.getYAcceleration();
      if (this.sheetHeight <= deltaY) {
        this.props.hideSheet();
      } else if (deltaY > HIDE_THRESHOLD && accelerationY <= ACCELERATION_Y_MAX && accelerationY >= ACCELERATION_Y_MIN || accelerationY > ACCELERATION_Y_MAX) {
        this.hide();
      } else if (deltaY > 0) {
        this.show();
      }
    };
    this.onSwipeAriaTouchEnd = () => {
      const { deltaY } = this.state;
      this.onTouchEndAction(deltaY);
      this.setState({
        startY: 0,
        deltaY: 0,
        swipeAreaTouched: false
      });
    };
    this.onContentTouchEnd = () => {
      const { deltaY, swipeAreaTouched } = this.state;
      if (!this.props.allowHideOnContentScroll || swipeAreaTouched) {
        return;
      }
      this.onTouchEndAction(deltaY);
      this.setState({
        startY: 0,
        deltaY: 0,
        contentTouched: false
      });
    };
    this.onVeilClick = () => {
      this.setState({ veilTouched: true });
      this.hide();
    };
    this.onVeilTransitionEnd = () => {
      this.setState({ isAnimating: false });
      if (this.veilOpacity === "0") {
        this.props.hideSheet();
      }
    };
    this.onContentTransitionEnd = (e) => {
      if (e.propertyName === "height") {
        if (this.sheetContentRef.current) {
          this.sheetContentRef.current.style.transition = "none";
        }
      }
    };
    this.onResizeWindow = () => {
      this.setState({ inWindowResizeScope: true });
      this.onResize();
      setTimeout(() => this.setState({ inWindowResizeScope: false }), 0);
    };
    this.onResize = () => {
      const heightChanged = this.state.prevInnerContentHeight !== this.innerContentHeight;
      if (!this.sheetRef.current || !this.sheetContentRef.current || !heightChanged) {
        return;
      }
      this.sheetContentRef.current.style.transition = this.state.prevInnerContentHeight > this.innerContentHeight ? `height 0s ease ${this.transitionDuration}` : "none";
      const contentHeight = this.sheetTitleHeight + this.innerContentHeight;
      const viewportHeight = window.innerHeight;
      const resultHeight = contentHeight >= viewportHeight ? viewportHeight * MAX_CONTENT_HEIGHT_FROM_VIEWPORT_COEFFICIENT : contentHeight;
      this.sheetContentRef.current.style.height = `${resultHeight}px`;
      this.sheetRef.current.style.transform = `translate3d(0, -${resultHeight + this.sheetTopHeight}px, 0)`;
      this.setState({ prevInnerContentHeight: contentHeight });
    };
  }
  componentDidMount() {
    this.addListeners();
    this.show();
    this.setInitialStyles();
    this.setState({ prevInnerContentHeight: this.innerContentHeight });
  }
  componentDidUpdate(prevProps) {
    const { visible, location } = this.props;
    if (!prevProps.visible && visible) {
      this.show();
    }
    if (prevProps.visible && !visible || this.shouldClose(prevProps)) {
      this.hide();
    }
    if (prevProps.location.pathname !== location.pathname) {
      hashHistory = [];
    }
  }
  componentWillUnmount() {
    this.removeListeners();
  }
  render() {
    const { content, contentClassName, swipeAreaClassName, hideTopBar, title } = this.props;
    const { deltaY, swipeAreaTouched, contentTouched, veilTouched, isAnimating, inWindowResizeScope } = this.state;
    const veilTransitionMod = {
      "with-transition": !deltaY || veilTouched
    };
    const sheetTransitionMod = {
      "with-transition": !inWindowResizeScope && veilTransitionMod["with-transition"]
    };
    const contentMod = {
      "without-scroll": deltaY > 0 && contentTouched || swipeAreaTouched
    };
    return import_react108.default.createElement(
      import_react108.default.Fragment,
      null,
      import_react108.default.createElement("div", { ref: this.veilRef, className: sheetBlock("veil", veilTransitionMod), onClick: isAnimating ? void 0 : this.onVeilClick, onTransitionEnd: this.onVeilTransitionEnd }),
      import_react108.default.createElement(
        "div",
        { ref: this.sheetRef, className: sheetBlock("sheet", sheetTransitionMod) },
        !hideTopBar && import_react108.default.createElement(
          "div",
          { ref: this.sheetTopRef, className: sheetBlock("sheet-top") },
          import_react108.default.createElement("div", { className: sheetBlock("sheet-top-resizer") })
        ),
        import_react108.default.createElement("div", { className: sheetBlock("sheet-swipe-area", swipeAreaClassName), onTouchStart: this.onSwipeAreaTouchStart, onTouchMove: this.onSwipeAriaTouchMove, onTouchEnd: this.onSwipeAriaTouchEnd }),
        import_react108.default.createElement(
          "div",
          { ref: this.sheetContentRef, className: sheetBlock("sheet-content", contentMod, contentClassName), onTouchStart: this.onContentTouchStart, onTouchMove: this.onContentTouchMove, onTouchEnd: this.onContentTouchEnd, onTransitionEnd: this.onContentTransitionEnd },
          title && import_react108.default.createElement("div", { ref: this.sheetTitleRef, className: sheetBlock("sheet-content-title") }, title),
          import_react108.default.createElement("div", { ref: this.sheetInnerContentRef }, content)
        )
      )
    );
  }
  get veilOpacity() {
    var _a;
    return ((_a = this.veilRef.current) === null || _a === void 0 ? void 0 : _a.style.opacity) || 0;
  }
  get sheetTopHeight() {
    var _a;
    return ((_a = this.sheetTopRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height) || 0;
  }
  get sheetHeight() {
    var _a;
    return ((_a = this.sheetRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height) || 0;
  }
  get innerContentHeight() {
    var _a;
    return ((_a = this.sheetInnerContentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height) || 0;
  }
  get sheetTitleHeight() {
    var _a;
    return ((_a = this.sheetTitleRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height) || 0;
  }
  get sheetScrollTop() {
    var _a;
    return ((_a = this.sheetContentRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0;
  }
  setInitialStyles() {
    if (this.sheetContentRef.current && this.sheetInnerContentRef.current) {
      this.transitionDuration = getComputedStyle(this.sheetContentRef.current).getPropertyValue("--yc-sheet-transition-duration");
      const initialHeight = this.sheetHeight - this.sheetTopHeight;
      this.sheetContentRef.current.style.height = `${initialHeight}px`;
    }
  }
  addListeners() {
    window.addEventListener("resize", this.onResizeWindow);
    if (this.sheetRef.current) {
      const config2 = { subtree: true, childList: true };
      this.observer = new MutationObserver(this.onResize);
      this.observer.observe(this.sheetRef.current, config2);
    }
  }
  removeListeners() {
    window.removeEventListener("resize", this.onResizeWindow);
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  setHash() {
    const { id, platform, location, history } = this.props;
    if (platform === Platform.BROWSER) {
      return;
    }
    const newLocation = Object.assign(Object.assign({}, location), { hash: id });
    switch (platform) {
      case Platform.IOS:
        if (location.hash) {
          hashHistory.push(location.hash);
        }
        history.replace(newLocation);
        break;
      case Platform.ANDROID:
        history.push(newLocation);
        break;
    }
  }
  removeHash() {
    var _a;
    const { id, platform, location, history } = this.props;
    if (platform === Platform.BROWSER || location.hash !== `#${id}`) {
      return;
    }
    switch (platform) {
      case Platform.IOS:
        history.replace(Object.assign(Object.assign({}, location), { hash: (_a = hashHistory.pop()) !== null && _a !== void 0 ? _a : "" }));
        break;
      case Platform.ANDROID:
        history.goBack();
        break;
    }
  }
  shouldClose(prevProps) {
    const { id, platform, location, history } = this.props;
    return platform !== Platform.BROWSER && history.action === "POP" && prevProps.location.hash !== location.hash && location.hash !== `#${id}`;
  }
};
SheetContent.defaultProps = {
  id: "sheet",
  allowHideOnContentScroll: true
};
function withRouterWrapper(Component4) {
  const ComponentWithRouter = (props) => {
    const { useHistory, useLocation } = props, remainingProps = __rest(props, ["useHistory", "useLocation"]);
    return import_react108.default.createElement(Component4, Object.assign({}, remainingProps, { history: useHistory(), location: useLocation() }));
  };
  const componentName = Component4.displayName || Component4.name || "Component";
  ComponentWithRouter.displayName = `withRouterWrapper(${componentName})`;
  return ComponentWithRouter;
}
var SheetContentContainer = withMobile(withRouterWrapper(SheetContent));

// node_modules/@gravity-ui/uikit/build/esm/components/Sheet/Sheet.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Sheet/Sheet.css";
var Sheet = class _Sheet extends import_react109.default.Component {
  constructor() {
    super(...arguments);
    this.bodyScrollLocked = false;
    this.state = {
      visible: false
    };
    this.showSheet = () => {
      this.lockBodyScroll();
      this.setState({ visible: true });
    };
    this.hideSheet = () => {
      this.restoreBodyScroll();
      if (this.props.onClose) {
        this.props.onClose();
      }
      this.setState({ visible: false });
    };
  }
  static lockBodyScroll() {
    if (++_Sheet.bodyScrollLocksCount === 1) {
      _Sheet.bodyInitialOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
  }
  static restoreBodyScroll() {
    if (_Sheet.bodyScrollLocksCount === 0) {
      return;
    }
    if (--_Sheet.bodyScrollLocksCount === 0) {
      document.body.style.overflow = _Sheet.bodyInitialOverflow || "";
      _Sheet.bodyInitialOverflow = void 0;
    }
  }
  componentDidMount() {
    if (this.props.visible) {
      this.showSheet();
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      this.showSheet();
    }
  }
  componentWillUnmount() {
    this.restoreBodyScroll();
  }
  render() {
    if (!this.state.visible) {
      return null;
    }
    return import_react_dom5.default.createPortal(this.renderSheet(), document.body);
  }
  restoreBodyScroll() {
    if (!this.bodyScrollLocked) {
      return;
    }
    _Sheet.restoreBodyScroll();
    this.bodyScrollLocked = false;
  }
  lockBodyScroll() {
    _Sheet.lockBodyScroll();
    this.bodyScrollLocked = true;
  }
  renderSheet() {
    const { id, children: children2, className, contentClassName, swipeAreaClassName, title, visible, allowHideOnContentScroll, hideTopBar } = this.props;
    return import_react109.default.createElement(
      "div",
      { className: sheetBlock(null, className) },
      import_react109.default.createElement(SheetContentContainer, { id, content: children2, contentClassName, swipeAreaClassName, title, visible, allowHideOnContentScroll, hideTopBar, hideSheet: this.hideSheet })
    );
  }
};
Sheet.bodyScrollLocksCount = 0;
Sheet.bodyInitialOverflow = void 0;

// node_modules/@gravity-ui/uikit/build/esm/components/PromoSheet/PromoSheet.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/PromoSheet/PromoSheet.css";
var cn = block("promo-sheet");
var PromoSheet = ({ title, message, actionText, closeText, actionHref, imageSrc, className, contentClassName, imageContainerClassName, imageClassName, onActionClick, onClose }) => {
  const [visible, setVisible] = (0, import_react110.useState)(true);
  const [loaded, setLoaded] = (0, import_react110.useState)(!imageSrc);
  const [imageSizes, setImageSizes] = (0, import_react110.useState)();
  const handleActionClick = (0, import_react110.useCallback)((event) => {
    setVisible(false);
    onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick(event);
  }, [onActionClick]);
  const handleCloseClick = (0, import_react110.useCallback)(() => {
    setVisible(false);
  }, []);
  const closeButtonExtraProps = (0, import_react110.useMemo)(() => ({
    "aria-label": closeText
  }), [closeText]);
  (0, import_react110.useEffect)(() => {
    if (!imageSrc) {
      setLoaded(true);
      return;
    }
    const image = new Image();
    image.onload = () => {
      setImageSizes({
        width: image.naturalWidth,
        height: image.naturalHeight
      });
      setLoaded(true);
      image.onload = null;
      image.onerror = null;
    };
    image.onerror = () => {
      setImageSizes(void 0);
      setLoaded(true);
      image.onload = null;
      image.onerror = null;
    };
    image.src = imageSrc;
  }, [imageSrc]);
  return import_react110.default.createElement(
    Sheet,
    { className: cn(null, className), contentClassName: cn("content", contentClassName), visible: visible && loaded, hideTopBar: true, onClose },
    import_react110.default.createElement(
      "header",
      { className: cn("header") },
      import_react110.default.createElement("h2", { className: cn("title") }, title),
      import_react110.default.createElement(
        Button2,
        { className: cn("close-button"), size: "xl", view: "flat-contrast", onClick: handleCloseClick, extraProps: closeButtonExtraProps },
        import_react110.default.createElement(Icon, { data: CrossIcon, size: 16 })
      )
    ),
    import_react110.default.createElement("p", { className: cn("message") }, message),
    imageSrc && import_react110.default.createElement(
      "div",
      { className: cn("image-container", imageContainerClassName) },
      import_react110.default.createElement("img", { role: "presentation", className: cn("image", imageClassName), src: imageSrc, alt: "", width: imageSizes === null || imageSizes === void 0 ? void 0 : imageSizes.width, height: imageSizes === null || imageSizes === void 0 ? void 0 : imageSizes.height })
    ),
    import_react110.default.createElement(
      "div",
      { className: cn("actions") },
      import_react110.default.createElement(Button2, { className: cn("action-button"), size: "xl", view: "outlined-contrast", width: "max", href: actionHref, onClick: handleActionClick }, actionText)
    )
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Radio/Radio.js
var import_react112 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useRadio.js
var import_react111 = __toESM(require_react());
function useRadio({ name, value: value2, checked, defaultChecked, disabled, controlRef, controlProps, onUpdate, onChange, onFocus, onBlur, id }) {
  const controlId = useUniqId();
  const innerControlRef = import_react111.default.useRef(null);
  const [checkedState, setCheckedState] = import_react111.default.useState(defaultChecked !== null && defaultChecked !== void 0 ? defaultChecked : false);
  const isControlled = typeof checked === "boolean";
  const isChecked = isControlled ? checked : checkedState;
  const handleRef = useForkRef(controlRef, innerControlRef);
  const handleChange = (event) => {
    if (!isControlled) {
      setCheckedState(event.target.checked);
    }
    if (onChange) {
      onChange(event);
    }
    if (onUpdate) {
      onUpdate(event.target.checked);
    }
  };
  const onChangeCapture = (event) => {
    eventBroker.publish({
      componentId: "Radio",
      eventId: "click",
      domEvent: event
    });
  };
  const inputProps = Object.assign(Object.assign({}, controlProps), {
    name: name || controlId,
    value: value2,
    id,
    onFocus,
    onBlur,
    disabled,
    type: "radio",
    onChange: handleChange,
    onChangeCapture,
    checked,
    defaultChecked,
    "aria-checked": isChecked,
    ref: handleRef
  });
  return { checked: isChecked, inputProps };
}

// node_modules/@gravity-ui/uikit/build/esm/components/Radio/Radio.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Radio/Radio.css";
var b43 = block("radio");
var Radio = import_react112.default.forwardRef(function Radio2(props, ref) {
  const { size: size2 = "m", disabled = false, content, children: children2, title, style, className, qa } = props;
  const { checked, inputProps } = useRadio(props);
  const text2 = content || children2;
  return import_react112.default.createElement(
    "label",
    { ref, title, style, className: b43({
      size: size2,
      disabled,
      checked
    }, className), "data-qa": qa },
    import_react112.default.createElement(
      "span",
      { className: b43("indicator") },
      import_react112.default.createElement("span", { className: b43("disc") }),
      import_react112.default.createElement("input", Object.assign({}, inputProps, { className: b43("control") })),
      import_react112.default.createElement("span", { className: b43("outline") })
    ),
    text2 && import_react112.default.createElement("span", { className: b43("text") }, text2)
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/RadioButton/RadioButton.js
var import_react115 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/RadioButton/RadioButtonOption.js
var import_react113 = __toESM(require_react());
var b44 = block("radio-button");
var RadioButtonOption = import_react113.default.forwardRef(function RadioButtonOption2(props, ref) {
  const { disabled = false, content, children: children2 } = props;
  const { checked, inputProps } = useRadio(props);
  const inner = content || children2;
  const icon = isIcon(inner);
  return import_react113.default.createElement(
    "label",
    { className: b44("option", {
      disabled,
      checked
    }), ref },
    import_react113.default.createElement("input", Object.assign({}, inputProps, { className: b44("option-control") })),
    import_react113.default.createElement("span", { className: b44("option-outline") }),
    inner && import_react113.default.createElement("span", { className: b44("option-text", { icon }) }, inner)
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useRadioGroup.js
var import_react114 = __toESM(require_react());
function useRadioGroup(props) {
  var _a, _b;
  const { name, value: value2, defaultValue, options = [], disabled, onUpdate, onChange, onFocus, onBlur } = props;
  const controlId = useUniqId();
  const [valueState, setValueState] = import_react114.default.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : (_b = (_a = options[0]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString());
  const isControlled = typeof value2 === "string";
  const currentValue = isControlled ? value2 : valueState;
  const handleChange = import_react114.default.useCallback((event) => {
    if (!isControlled) {
      setValueState(event.target.value);
    }
    if (onChange) {
      onChange(event);
    }
    if (onUpdate) {
      onUpdate(event.target.value);
    }
  }, [isControlled, onUpdate, onChange]);
  const containerProps = {
    role: "radiogroup",
    "aria-disabled": disabled,
    "aria-label": props["aria-label"],
    "aria-labelledby": props["aria-labelledby"]
  };
  const optionsProps = options.map((option) => ({
    name: name || controlId,
    value: String(option.value),
    content: option.content,
    checked: currentValue === String(option.value),
    disabled: disabled || option.disabled,
    onChange: handleChange,
    onFocus,
    onBlur
  }));
  return { containerProps, optionsProps };
}

// node_modules/@gravity-ui/uikit/build/esm/components/RadioButton/RadioButton.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/RadioButton/RadioButton.css";
var b45 = block("radio-button");
var RadioButton = import_react115.default.forwardRef(function RadioButton2(props, ref) {
  const { size: size2 = "m", width, style, className, qa, children: children2 } = props;
  let options = props.options;
  if (!options) {
    options = import_react115.default.Children.toArray(children2).map(({ props: props2 }) => ({
      value: props2.value,
      content: props2.content || props2.children,
      disabled: props2.disabled
    }));
  }
  const plateRef = (0, import_react115.useRef)(null);
  const optionRef = (0, import_react115.useRef)();
  const handleCheckedOptionMount = (0, import_react115.useCallback)((checkedOptionNode) => {
    if (!checkedOptionNode) {
      return;
    }
    const plateNode = plateRef.current;
    if (!plateNode) {
      return;
    }
    const uncheckedOptionNode = optionRef.current;
    if (uncheckedOptionNode && uncheckedOptionNode !== checkedOptionNode) {
      const setPlateStyle = (node) => {
        plateNode.style.left = `${node.offsetLeft}px`;
        plateNode.style.width = `${node.offsetWidth}px`;
      };
      setPlateStyle(uncheckedOptionNode);
      plateNode.hidden = false;
      setPlateStyle(checkedOptionNode);
    }
    optionRef.current = checkedOptionNode;
  }, []);
  const handlePlateTransitionEnd = (0, import_react115.useCallback)((event) => {
    event.currentTarget.hidden = true;
  }, []);
  const { containerProps, optionsProps } = useRadioGroup(Object.assign(Object.assign({}, props), { options }));
  return import_react115.default.createElement(
    "div",
    Object.assign({}, containerProps, { ref, style, className: b45({ size: size2, width }, className), "data-qa": qa }),
    import_react115.default.createElement("div", { ref: plateRef, className: b45("plate"), onTransitionEnd: handlePlateTransitionEnd, hidden: true }),
    optionsProps.map((optionProps) => import_react115.default.createElement(RadioButtonOption, Object.assign({}, optionProps, { key: optionProps.value, ref: optionProps.checked ? handleCheckedOptionMount : void 0 })))
  );
});
RadioButton.Option = RadioButtonOption;

// node_modules/@gravity-ui/uikit/build/esm/components/RadioGroup/RadioGroup.js
var import_react116 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/RadioGroup/RadioGroup.css";
var b46 = block("radio-group");
var RadioGroup = import_react116.default.forwardRef(function RadioGroup2(props, ref) {
  const { size: size2 = "m", direction = "horizontal", style, className, optionClassName, qa, children: children2 } = props;
  let options = props.options;
  if (!options) {
    options = import_react116.default.Children.toArray(children2).map(({ props: props2 }) => ({
      value: props2.value,
      content: props2.content || props2.children,
      disabled: props2.disabled
    }));
  }
  const { containerProps, optionsProps } = useRadioGroup(Object.assign(Object.assign({}, props), { options }));
  return import_react116.default.createElement("div", Object.assign({}, containerProps, { ref, style, className: b46({ size: size2, direction }, className), "data-qa": qa }), optionsProps.map((optionProps) => import_react116.default.createElement(Radio, Object.assign({}, optionProps, { key: optionProps.value, className: b46("option", optionClassName), size: size2 }))));
});
RadioGroup.Option = Radio;

// node_modules/@gravity-ui/uikit/build/esm/components/Select/Select.js
var import_react128 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useSelect/useSelect.js
var import_react117 = __toESM(require_react());
var useSelect = (props) => {
  const { value: valueProps, defaultValue = [], multiple, defaultOpen = false, onUpdate } = props;
  const [innerValue, setInnerValue] = import_react117.default.useState(defaultValue);
  const [open, setOpen] = import_react117.default.useState(defaultOpen);
  const value2 = valueProps || innerValue;
  const uncontrolled = !valueProps;
  const handleSingleSelection = import_react117.default.useCallback((option) => {
    if (!value2.includes(option.value)) {
      const nextValue = [option.value];
      onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(nextValue);
      if (uncontrolled) {
        setInnerValue(nextValue);
      }
    }
    setOpen(false);
  }, [value2, uncontrolled, onUpdate]);
  const handleMultipleSelection = import_react117.default.useCallback((option) => {
    const alreadySelected = value2.includes(option.value);
    const nextValue = alreadySelected ? value2.filter((iteratedVal) => iteratedVal !== option.value) : [...value2, option.value];
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(nextValue);
    if (uncontrolled) {
      setInnerValue(nextValue);
    }
  }, [value2, uncontrolled, onUpdate]);
  const handleSelection = import_react117.default.useCallback((option) => {
    if (multiple) {
      handleMultipleSelection(option);
    } else {
      handleSingleSelection(option);
    }
  }, [multiple, handleSingleSelection, handleMultipleSelection]);
  return {
    value: value2,
    open,
    setOpen,
    handleSelection
  };
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/store/reducer.js
var initialState = { filter: "" };
var reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTROL_RECT": {
      const { controlRect } = action.payload;
      return Object.assign(Object.assign({}, state), { controlRect });
    }
    case "SET_FILTER": {
      const { filter } = action.payload;
      return Object.assign(Object.assign({}, state), { filter });
    }
    default: {
      return state;
    }
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/hooks/useQuickSearch.js
var import_react119 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Select/utils.js
var import_react118 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Select/constants.js
var selectBlock = block("select");
var selectListBlock = block("select-list");
var SIZE_TO_ITEM_HEIGHT = {
  s: 28,
  m: 28,
  l: 32,
  xl: 36
};
var GROUP_ITEM_MARGIN_TOP = 5;
var CONTAINER_VERTICAL_MARGIN = 4;
var BORDER_WIDTH = 1;
var POPUP_MIN_WIDTH_IN_VIRTUALIZE_CASE = 100;
var QUICK_SEARCH_TIMEOUT = 2e3;
var DEFAULT_VIRTUALIZATION_THRESHOLD = 50;
var SelectQa = {
  LIST: "select-list",
  POPUP: "select-popup"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/utils.js
var getFlattenOptions = (options) => {
  return options.reduce((acc, option) => {
    if ("label" in option) {
      acc.push({ label: option.label, disabled: true });
      acc.push(...option.options || []);
    } else {
      acc.push(option);
    }
    return acc;
  }, []);
};
var getPopupItemHeight = (args) => {
  const { getOptionHeight, size: size2, option, index: index2 } = args;
  if ("label" in option) {
    const marginTop = index2 === 0 ? 0 : GROUP_ITEM_MARGIN_TOP;
    return SIZE_TO_ITEM_HEIGHT[size2] + marginTop;
  }
  return getOptionHeight ? getOptionHeight(option) : SIZE_TO_ITEM_HEIGHT[size2];
};
var getListHeight = (args) => {
  const { getOptionHeight, size: size2, options } = args;
  return options.reduce((height, option, index2) => {
    return height + getPopupItemHeight({ getOptionHeight, size: size2, option, index: index2 });
  }, 0);
};
var getPopupVerticalOffset = (args) => {
  const { height, controlRect } = args;
  if (!controlRect) {
    return BORDER_WIDTH;
  }
  const vh = window.innerHeight / 100;
  const heigth5vh = vh * 5;
  const heigth90vh = vh * 90;
  const containerHeight = heigth90vh < height ? heigth90vh : height;
  const popupPlacement = controlRect.y + controlRect.height / 2 < window.innerHeight / 2 ? "bottom-start" : "top-start";
  const screenOffset = popupPlacement === "bottom-start" ? window.innerHeight - controlRect.y - controlRect.height : controlRect.y;
  let offset2 = BORDER_WIDTH;
  if (containerHeight > screenOffset) {
    offset2 = (containerHeight - screenOffset) * -1 - heigth5vh - CONTAINER_VERTICAL_MARGIN;
  }
  return offset2;
};
var getOptionText = (option) => {
  if (typeof option.content === "string") {
    return option.content;
  }
  if (typeof option.children === "string") {
    return option.children;
  }
  if (option.text) {
    return option.text;
  }
  return option.value;
};
var getSelectedOptionsContent = (flattenOptions, value2, renderSelectedOption) => {
  if (value2.length === 0) {
    return null;
  }
  const selectedOptions = flattenOptions.reduce((acc, option) => {
    if ("label" in option) {
      return acc;
    }
    const optionSelected = value2.includes(option.value);
    if (optionSelected) {
      acc.push(option);
    }
    return acc;
  }, []);
  if (renderSelectedOption) {
    return selectedOptions.map((option, index2) => {
      return import_react118.default.createElement(import_react118.default.Fragment, { key: option.value }, renderSelectedOption(option, index2));
    });
  } else {
    return selectedOptions.map((option) => {
      return getOptionText(option);
    }).join(", ");
  }
};
var getTypedChildrenArray = (children2) => {
  return import_react118.default.Children.toArray(children2);
};
var getOptionsFromOptgroupChildren = (children2) => {
  return import_react118.default.Children.toArray(children2).reduce((acc, { props }) => {
    if ("value" in props) {
      acc.push(props);
    }
    return acc;
  }, []);
};
var getOptionsFromChildren = (children2) => {
  return getTypedChildrenArray(children2).reduce((acc, { props }) => {
    if ("label" in props) {
      const options = props.options || getOptionsFromOptgroupChildren(props.children);
      acc.push({
        options,
        label: props.label
      });
    }
    if ("value" in props) {
      acc.push(Object.assign({}, props));
    }
    return acc;
  }, []);
};
var getPopupMinWidth = (virtualized, controlRect) => {
  const controlWidth = controlRect === null || controlRect === void 0 ? void 0 : controlRect.width;
  if (virtualized && controlWidth) {
    return controlWidth > POPUP_MIN_WIDTH_IN_VIRTUALIZE_CASE ? controlWidth : POPUP_MIN_WIDTH_IN_VIRTUALIZE_CASE;
  }
  return controlWidth ? controlWidth - BORDER_WIDTH * 2 : void 0;
};
var getNextQuickSearch = (keyCode, quickSearch) => {
  const writingSystemKeyPressed = keyCode.length === 1;
  const backspacePressed = keyCode === KeyCode.BACKSPACE;
  let nextQuickSearch = "";
  if (backspacePressed && quickSearch.length) {
    nextQuickSearch = quickSearch.slice(0, quickSearch.length - 1);
  } else if (writingSystemKeyPressed) {
    nextQuickSearch = (quickSearch + keyCode).trim();
  }
  return nextQuickSearch;
};
var getEscapedRegExp = (string) => {
  return new RegExp(string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "i");
};
var findItemIndexByQuickSearch = (quickSearch, items) => {
  if (!items) {
    return -1;
  }
  return items.findIndex((item) => {
    if ("label" in item) {
      return false;
    }
    if (item.disabled) {
      return false;
    }
    const optionText = getOptionText(item);
    return getEscapedRegExp(quickSearch).test(optionText);
  });
};
var getListItems = (listRef) => {
  var _a;
  return ((_a = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || [];
};
var getActiveItem = (listRef) => {
  var _a;
  const items = getListItems(listRef);
  const activeItemIndex = (_a = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a === void 0 ? void 0 : _a.getActiveItem();
  return typeof activeItemIndex === "number" ? items[activeItemIndex] : void 0;
};
var activateFirstClickableItem = (listRef) => {
  var _a;
  const items = getListItems(listRef);
  const isGroupTitleFirstItem = items[0] && "label" in items[0];
  (_a = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a === void 0 ? void 0 : _a.activateItem(isGroupTitleFirstItem ? 1 : 0, false);
};
var isOptionMatchedByFilter = (option, filter) => {
  const lowerOptionText = getOptionText(option).toLocaleLowerCase();
  const lowerFilter = filter.toLocaleLowerCase();
  return Boolean(lowerOptionText.match(lowerFilter));
};
var isGroupTitle = (option) => {
  return Boolean(option && "label" in option);
};
var getFilteredFlattenOptions = (args) => {
  const { options, filter, filterOption } = args;
  const filteredOptions = options.filter((option) => {
    if (isGroupTitle(option)) {
      return true;
    }
    return filterOption ? filterOption(option, filter) : isOptionMatchedByFilter(option, filter);
  });
  return filteredOptions.reduce((acc, option, index2) => {
    const groupTitle = isGroupTitle(option);
    const previousGroupTitle = isGroupTitle(acc[index2 - 1]);
    const isLastOption = index2 === filteredOptions.length - 1;
    if (groupTitle && previousGroupTitle) {
      acc.pop();
    }
    if (!groupTitle || groupTitle && !isLastOption) {
      acc.push(option);
    }
    return acc;
  }, []);
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/hooks/useQuickSearch.js
var useQuickSearch = (props) => {
  const { onChange, open, disabled } = props;
  const [search, setSearch] = import_react119.default.useState("");
  const [timer, setTimer] = import_react119.default.useState();
  const handleTimer = import_react119.default.useCallback((nextSearch) => {
    clearTimeout(timer);
    if (nextSearch) {
      const nextTimer = window.setTimeout(() => setSearch(""), QUICK_SEARCH_TIMEOUT);
      setTimer(nextTimer);
    }
  }, [timer]);
  const handleSearch = import_react119.default.useCallback((e) => {
    e.stopPropagation();
    const nextSearch = getNextQuickSearch(e.key, search);
    if (search !== nextSearch) {
      handleTimer(nextSearch);
      setSearch(nextSearch);
    }
  }, [handleTimer, search]);
  import_react119.default.useEffect(() => {
    if (open && !disabled) {
      document.addEventListener("keydown", handleSearch);
    } else if (!open && !disabled) {
      setSearch("");
    }
    return () => {
      if (open && !disabled) {
        document.removeEventListener("keydown", handleSearch);
      }
    };
  }, [handleSearch, open, disabled]);
  import_react119.default.useEffect(() => {
    if (!open) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [open, timer]);
  import_react119.default.useEffect(() => {
    onChange(search);
  }, [onChange, search]);
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/EmptyOptions/EmptyOptions.js
var import_react120 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Select/components/EmptyOptions/EmptyOptions.css";
var b47 = block("select-empty-placeholder");
var EmptyOptions = ({ renderEmptyOptions, filter }) => {
  return import_react120.default.createElement("div", { className: b47({ empty: !renderEmptyOptions }) }, renderEmptyOptions === null || renderEmptyOptions === void 0 ? void 0 : renderEmptyOptions({ filter }));
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectControl/SelectControl.js
var import_react121 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectControl/SelectControl.css";
var SelectControl = import_react121.default.forwardRef((props, ref) => {
  const { setOpen, onKeyDown, renderControl, view, size: size2, pin, selectedOptionsContent, width, className, qa, name, label, placeholder, open, disabled } = props;
  const controlRef = import_react121.default.useRef(null);
  const handleControlRef = useForkRef(ref, controlRef);
  const showOptionsText = Boolean(selectedOptionsContent);
  const showPlaceholder = Boolean(placeholder && !showOptionsText);
  const mods = Object.assign({
    view,
    size: size2,
    pin,
    disabled,
    open
  }, typeof width === "string" && { width });
  const inlineStyles = {};
  if (typeof width === "number") {
    inlineStyles.width = width;
  }
  const handleClick = import_react121.default.useCallback(() => setOpen(!open), [setOpen, open]);
  if (renderControl) {
    return renderControl({
      onKeyDown,
      onClick: handleClick,
      ref: handleControlRef,
      open: Boolean(open)
    });
  }
  return import_react121.default.createElement(
    "button",
    { ref: handleControlRef, name, className: selectBlock(mods, className), style: inlineStyles, "aria-haspopup": "listbox", disabled, onClick: handleClick, onKeyDown, type: "button", "data-qa": qa },
    label && import_react121.default.createElement("span", { className: selectBlock("label") }, label),
    showPlaceholder && import_react121.default.createElement("span", { className: selectBlock("placeholder") }, placeholder),
    showOptionsText && import_react121.default.createElement("span", { className: selectBlock("option-text") }, selectedOptionsContent),
    import_react121.default.createElement(Icon, { className: selectBlock("chevron-icon"), data: Chevron })
  );
});
SelectControl.displayName = "SelectControl";

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectFilter/SelectFilter.js
var import_react122 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectFilter/SelectFilter.css";
var b48 = block("select-filter");
var SelectFilter = import_react122.default.forwardRef((props, ref) => {
  const { onChange, onKeyDown, renderFilter, size: size2, value: value2, placeholder } = props;
  const wrapRef = import_react122.default.useRef(null);
  const inputRef = import_react122.default.useRef(null);
  import_react122.default.useImperativeHandle(ref, () => ({
    getHeight: () => {
      var _a;
      return (_a = wrapRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
    },
    focus: () => {
      var _a;
      return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
    }
  }), []);
  return import_react122.default.createElement("div", { ref: wrapRef, className: b48() }, renderFilter ? renderFilter({ onChange, onKeyDown, value: value2, ref: inputRef }) : import_react122.default.createElement(TextInput, { controlRef: inputRef, controlProps: { className: b48("input"), size: 1 }, size: size2, value: value2, placeholder, onUpdate: onChange, onKeyDown }));
});
SelectFilter.displayName = "SelectFilter";

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectList/SelectList.js
var import_react126 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectList/GroupLabel.js
var import_react123 = __toESM(require_react());
var b49 = block("select-list");
var GroupLabel = ({ label }) => {
  return import_react123.default.createElement(
    "div",
    { className: b49("group-label") },
    import_react123.default.createElement("div", { className: b49("group-label-content") }, label)
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectList/OptionWrap.js
var import_react125 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/icons/Tick.js
var import_react124 = __toESM(require_react());
function Tick(props) {
  return import_react124.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "none" }, a11yHiddenSvgProps, props),
    import_react124.default.createElement("path", { d: "M3 7.75L6.75 11.5L13 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectList/OptionWrap.js
var b50 = block("select-list");
var DefaultOption = ({ option }) => {
  const { content, children: children2, disabled } = option;
  return import_react125.default.createElement("span", { className: b50("option-default-label", { disabled }) }, content || children2);
};
var OptionWrap = (props) => {
  const { renderOption, value: value2, option, multiple } = props;
  const selected = value2.indexOf(option.value) !== -1;
  const optionContent = renderOption ? renderOption(option) : import_react125.default.createElement(DefaultOption, { option });
  return import_react125.default.createElement(
    "div",
    { className: b50("option", { colored: selected && !multiple }) },
    optionContent,
    multiple && import_react125.default.createElement(Icon, { className: b50("tick-icon", { shown: selected && multiple }), data: Tick })
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectList/SelectList.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectList/SelectList.css";
var SelectList = import_react126.default.forwardRef((props, ref) => {
  const { onOptionClick, renderOption, getOptionHeight, size: size2, flattenOptions, value: value2, listHeight, filterHeight, multiple, virtualized } = props;
  const getItemHeight = import_react126.default.useCallback((option, index2) => {
    return getPopupItemHeight({ getOptionHeight, size: size2, option, index: index2 });
  }, [getOptionHeight, size2]);
  const renderItem = import_react126.default.useCallback((option) => {
    if ("label" in option) {
      return import_react126.default.createElement(GroupLabel, { label: option.label });
    }
    return import_react126.default.createElement(OptionWrap, { option, value: value2, multiple, renderOption });
  }, [renderOption, value2, multiple]);
  return import_react126.default.createElement(
    "div",
    { className: selectListBlock({ size: size2, virtualized }), style: { maxHeight: `calc(90vh - ${filterHeight}px)` }, "data-qa": SelectQa.LIST },
    import_react126.default.createElement(List, { ref, itemClassName: selectListBlock("item"), itemHeight: getItemHeight, itemsHeight: virtualized ? listHeight : void 0, items: flattenOptions, filterable: false, virtualized, renderItem, onItemClick: onOptionClick })
  );
});
SelectList.displayName = "SelectList";

// node_modules/@gravity-ui/uikit/build/esm/components/Select/components/SelectPopup/SelectPopup.js
var import_react127 = __toESM(require_react());
var SelectPopup = ({ handleClose, verticalOffset, width, minWidth, open, controlRef, children: children2, className }) => import_react127.default.createElement(Popup, { className, qa: SelectQa.POPUP, style: { width, minWidth }, anchorRef: controlRef, offset: [BORDER_WIDTH, verticalOffset], placement: ["bottom-start", "top-start"], open, onClose: handleClose }, children2);

// node_modules/@gravity-ui/uikit/build/esm/components/Select/tech-components.js
var Option = () => null;
var OptionGroup = () => null;

// node_modules/@gravity-ui/uikit/build/esm/components/Select/Select.js
var Select = import_react128.default.forwardRef(function Select2(props, ref) {
  var _a;
  const { onUpdate, onOpenChange, onFilterChange, renderControl, renderFilter, renderOption, renderSelectedOption, renderEmptyOptions, getOptionHeight, filterOption, name, className, popupClassName, qa, value: propsValue, defaultValue, defaultOpen, label, placeholder, filterPlaceholder, width, popupWidth, virtualizationThreshold = DEFAULT_VIRTUALIZATION_THRESHOLD, view = "normal", size: size2 = "m", pin = "round-round", multiple = false, disabled = false, filterable = false } = props;
  const [{ controlRect, filter }, dispatch] = import_react128.default.useReducer(reducer, initialState);
  const controlRef = import_react128.default.useRef(null);
  const filterRef = import_react128.default.useRef(null);
  const listRef = import_react128.default.useRef(null);
  const handleControlRef = useForkRef(ref, controlRef);
  const { value: value2, open, setOpen, handleSelection } = useSelect({
    onUpdate,
    value: propsValue,
    defaultValue,
    defaultOpen,
    multiple
  });
  const options = props.options || getOptionsFromChildren(props.children);
  const flattenOptions = getFlattenOptions(options);
  const filteredFlattenOptions = filterable && filter ? getFilteredFlattenOptions({
    options: flattenOptions,
    filter,
    filterOption
  }) : flattenOptions;
  const selectedOptionsContent = getSelectedOptionsContent(flattenOptions, value2, renderSelectedOption);
  const virtualized = filteredFlattenOptions.length >= virtualizationThreshold;
  const listHeight = getListHeight({
    options: filteredFlattenOptions,
    getOptionHeight,
    size: size2
  });
  const filterHeight = ((_a = filterRef.current) === null || _a === void 0 ? void 0 : _a.getHeight()) || 0;
  const popupHeight = listHeight + filterHeight;
  const popupMinWidth = getPopupMinWidth(virtualized, controlRect);
  const popupVerticalOffset = getPopupVerticalOffset({ height: popupHeight, controlRect });
  const handleClose = import_react128.default.useCallback(() => setOpen(false), [setOpen]);
  const handleOptionClick = import_react128.default.useCallback((option) => {
    var _a2, _b;
    if (!option || "label" in option) {
      return;
    }
    if (multiple) {
      const activeItemIndex = (_a2 = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a2 === void 0 ? void 0 : _a2.getActiveItem();
      (_b = filterRef.current) === null || _b === void 0 ? void 0 : _b.focus();
      if (typeof activeItemIndex === "number") {
        setTimeout(() => {
          var _a3;
          (_a3 = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a3 === void 0 ? void 0 : _a3.activateItem(activeItemIndex, true);
        }, 50);
      }
    }
    handleSelection(option);
  }, [handleSelection, multiple]);
  const handleControlKeyDown = import_react128.default.useCallback((e) => {
    var _a2;
    if ([KeyCode.ENTER, KeyCode.SPACEBAR].includes(e.key) && open) {
      e.preventDefault();
      if (e.key === KeyCode.SPACEBAR) {
        handleOptionClick(getActiveItem(listRef));
      }
    }
    (_a2 = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a2 === void 0 ? void 0 : _a2.onKeyDown(e);
  }, [handleOptionClick, open]);
  const handleFilterKeyDown = import_react128.default.useCallback((e) => {
    var _a2;
    (_a2 = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a2 === void 0 ? void 0 : _a2.onKeyDown(e);
  }, []);
  const handleFilterChange = import_react128.default.useCallback((nextFilter) => {
    onFilterChange === null || onFilterChange === void 0 ? void 0 : onFilterChange(nextFilter);
    dispatch({ type: "SET_FILTER", payload: { filter: nextFilter } });
  }, [onFilterChange]);
  const handleQuickSearchChange = import_react128.default.useCallback((search) => {
    var _a2;
    if (search) {
      const itemIndex = findItemIndexByQuickSearch(search, getListItems(listRef));
      if (typeof itemIndex === "number" && itemIndex !== -1) {
        (_a2 = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a2 === void 0 ? void 0 : _a2.activateItem(itemIndex, true);
      }
    }
  }, []);
  useQuickSearch({
    onChange: handleQuickSearchChange,
    open,
    disabled: filterable
  });
  import_react128.default.useEffect(() => {
    var _a2, _b;
    if (open) {
      activateFirstClickableItem(listRef);
      const nextControlRect = (_a2 = controlRef.current) === null || _a2 === void 0 ? void 0 : _a2.getBoundingClientRect();
      if (filterable) {
        (_b = filterRef.current) === null || _b === void 0 ? void 0 : _b.focus();
      }
      dispatch({ type: "SET_CONTROL_RECT", payload: { controlRect: nextControlRect } });
    } else {
      dispatch({ type: "SET_FILTER", payload: { filter: "" } });
    }
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(open);
  }, [open, filterable, onOpenChange]);
  return import_react128.default.createElement(
    import_react128.default.Fragment,
    null,
    import_react128.default.createElement(SelectControl, { ref: handleControlRef, className, qa, name, view, size: size2, pin, width, label, placeholder, selectedOptionsContent, open, disabled, setOpen, onKeyDown: handleControlKeyDown, renderControl }),
    import_react128.default.createElement(
      SelectPopup,
      { className: popupClassName, controlRef, width: popupWidth, minWidth: popupMinWidth, verticalOffset: popupVerticalOffset, open, handleClose },
      filterable && import_react128.default.createElement(SelectFilter, { ref: filterRef, size: size2, value: filter, placeholder: filterPlaceholder, onChange: handleFilterChange, onKeyDown: handleFilterKeyDown, renderFilter }),
      filteredFlattenOptions.length ? import_react128.default.createElement(SelectList, { ref: listRef, size: size2, value: value2, flattenOptions: filteredFlattenOptions, listHeight, filterHeight, multiple, virtualized, onOptionClick: handleOptionClick, renderOption, getOptionHeight }) : import_react128.default.createElement(EmptyOptions, { filter, renderEmptyOptions })
    )
  );
});
Select.Option = Option;
Select.OptionGroup = OptionGroup;

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/constants.js
var ShareOptions;
(function(ShareOptions2) {
  ShareOptions2["Telegram"] = "Telegram";
  ShareOptions2["Facebook"] = "Facebook";
  ShareOptions2["Twitter"] = "Twitter";
  ShareOptions2["VK"] = "VK";
  ShareOptions2["LinkedIn"] = "LinkedIn";
  ShareOptions2["Mail"] = "Mail";
})(ShareOptions || (ShareOptions = {}));
var LayoutDirection;
(function(LayoutDirection2) {
  LayoutDirection2["Row"] = "row";
  LayoutDirection2["Column"] = "column";
})(LayoutDirection || (LayoutDirection = {}));

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareList/ShareList.js
var import_react130 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareListItem/ShareListItem.js
var import_react129 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/i18n/en.json
var en_default4 = {
  "label_copy-link": "Copy link",
  "label_copy-link-copied": "Link copied",
  label_share: "Share to {{name}}"
};

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/i18n/ru.json
var ru_default4 = {
  "label_copy-link": "Копировать ссылку",
  "label_copy-link-copied": "Ссылка скопирована",
  label_share: "Поделиться в {{name}}"
};

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/i18n/index.js
var COMPONENT2 = "yc-share-tooltip";
var i18n_default3 = registerKeyset({ en: en_default4, ru: ru_default4 }, COMPONENT2);

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareListItem/ShareListItem.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareListItem/ShareListItem.css";
var b51 = block("share-list-item");
var ShareListItem = class extends import_react129.default.PureComponent {
  render() {
    var _a;
    const _b = this.props, { type, direction, className, label, getShareLink } = _b, rest = __rest(_b, ["type", "direction", "className", "label", "getShareLink"]);
    const icon = this.props.icon || type && shareOptions_exports[type];
    const url = (_a = getShareLink === null || getShareLink === void 0 ? void 0 : getShareLink(rest)) !== null && _a !== void 0 ? _a : type && this.getShareLink(type);
    const typeModifier = type === null || type === void 0 ? void 0 : type.toLowerCase();
    const name = label || type && ShareOptions[type];
    if (!url) {
      return null;
    }
    if (direction === "column") {
      return import_react129.default.createElement(
        Button2,
        { view: "flat", size: "l", href: url, target: "_blank", width: "max", className: b51(null, className), extraProps: { "aria-label": i18n_default3("label_share", { name }) } },
        icon && import_react129.default.createElement(Icon, { data: icon, size: 16, className: b51("icon", { type: typeModifier }) }),
        name && import_react129.default.createElement("span", { className: b51(null, className) }, name)
      );
    }
    return import_react129.default.createElement(Button2, { view: "flat", size: "l", href: url, target: "_blank", className: b51(null, className), extraProps: { "aria-label": i18n_default3("label_share", { name }) } }, icon && import_react129.default.createElement(Icon, { data: icon, size: 24, className: b51("icon", { type: typeModifier }) }));
  }
  getShareLink(type) {
    const { url, title, text: text2 } = this.props;
    switch (type) {
      case ShareOptions.Telegram:
        return this.getShareUrlWithParams("https://t.me/share/url", { url, text: title });
      case ShareOptions.Facebook:
        return this.getShareUrlWithParams("https://facebook.com/sharer.php", { u: url });
      case ShareOptions.Twitter:
        return this.getShareUrlWithParams("https://twitter.com/intent/tweet", {
          url,
          text: title
        });
      case ShareOptions.VK:
        return this.getShareUrlWithParams("https://vk.com/share.php", {
          url,
          title,
          comment: text2
        });
      case ShareOptions.LinkedIn:
        return this.getShareUrlWithParams("https://www.linkedin.com/sharing/share-offsite/", {
          url
        });
      case ShareOptions.Mail:
        return this.getShareUrlWithParams("mailto:", {
          subject: title,
          body: text2 ? `${text2}
${url}` : url
        });
      default:
        console.error(`Unknown share type: ${type}`);
        return null;
    }
  }
  getShareUrlWithParams(url, params = {}) {
    const result = new URL(url);
    Object.entries(params).forEach(([name, value2]) => {
      if (value2) {
        result.searchParams.set(name, value2);
      }
    });
    return result.toString();
  }
};

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareList/ShareList.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareList/ShareList.css";
var b52 = block("share-list");
var isShareListItemComponent = isOfType(ShareListItem);
var ShareList = class extends import_react130.default.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      copied: false
    };
    this.copyLink = null;
    this.copyLinkRef = (element) => {
      this.copyLink = element;
    };
  }
  componentDidMount() {
    if (this.props.withCopyLink && this.copyLink) {
      this.copyLink.style.width = `${this.copyLink.scrollWidth}px`;
    }
  }
  render() {
    const { socialNets, withCopyLink, className, direction, children: children2 } = this.props;
    const hasNets = Array.isArray(socialNets) && socialNets.length > 0;
    const extensions = import_react130.default.Children.toArray(children2).filter((child) => isShareListItemComponent(child));
    return import_react130.default.createElement(
      "div",
      { className: b52({ layout: direction }, className) },
      import_react130.default.createElement(
        "div",
        { className: b52("socials-container") },
        hasNets && this.renderSocialShareLinks(),
        Boolean(extensions === null || extensions === void 0 ? void 0 : extensions.length) && extensions
      ),
      hasNets && withCopyLink && import_react130.default.createElement("div", { className: b52("separator") }),
      withCopyLink && this.renderCopyLink()
    );
  }
  renderSocialShareLinks() {
    const { url, title, text: text2, socialNets, direction } = this.props;
    return import_react130.default.createElement("div", { className: b52("social") }, socialNets.map((type) => import_react130.default.createElement(ShareListItem, { key: type, type, url, title, text: text2, className: b52("link"), direction })));
  }
  renderCopyLink() {
    const { url, copyIcon, copyTitle, renderCopy } = this.props;
    const { copied } = this.state;
    const label = copyTitle || (copied ? i18n_default3("label_copy-link-copied") : i18n_default3("label_copy-link"));
    return import_react130.default.createElement("div", { className: b52("copy-link") }, renderCopy ? renderCopy({
      url,
      title: label,
      icon: copyIcon || Link3
    }) : import_react130.default.createElement(CopyToClipboard, { text: this.props.url, timeout: 1500 }, (status) => import_react130.default.createElement(
      Button2,
      { ref: this.copyLinkRef, view: "flat-secondary", size: "l", disabled: status === CopyToClipboardStatus.Success, width: "max" },
      import_react130.default.createElement(Icon, { data: copyIcon || Link3, size: 16 }),
      label
    )));
  }
};
ShareList.defaultProps = {
  socialNets: [],
  withCopyLink: false
};
ShareList.Item = ShareListItem;

// node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareTooltip.js
var import_react131 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/ShareTooltip/ShareTooltip.css";
var b53 = block("share-tooltip");
var shareTooltipDefaultProps = {
  iconSize: 16,
  socialNets: ShareList.defaultProps.socialNets,
  withCopyLink: true,
  useWebShareApi: false,
  placement: ["bottom-end"],
  openByHover: true,
  autoclosable: true,
  closeDelay: 300,
  direction: LayoutDirection.Row
};
var ShareTooltip = class extends import_react131.default.PureComponent {
  constructor() {
    super(...arguments);
    this.handleClick = async (event) => {
      const { url, title, text: text2, useWebShareApi, handleMetrika } = this.props;
      if (handleMetrika) {
        handleMetrika();
      }
      if (useWebShareApi && navigator && typeof navigator.share === "function") {
        await navigator.share({ url, title, text: text2 });
        event.preventDefault();
        return false;
      }
      return true;
    };
  }
  render() {
    const { url, title, text: text2, socialNets, withCopyLink, useWebShareApi, placement, openByHover, autoclosable, closeDelay, iconSize, iconClass, tooltipClassName, switcherClassName, className, direction, customIcon, buttonTitle, copyTitle, copyIcon, renderCopy, children: children2 } = this.props;
    const content = import_react131.default.createElement(ShareList, { url, title, text: text2, socialNets, withCopyLink, direction, copyTitle, copyIcon, renderCopy }, children2);
    return import_react131.default.createElement(
      Popover,
      { placement, hasArrow: false, openOnHover: openByHover && !useWebShareApi, autoclosable, delayClosing: closeDelay, content, className: b53(null, className), tooltipClassName: b53("tooltip", tooltipClassName), onClick: this.handleClick },
      import_react131.default.createElement(
        "div",
        { className: b53("container", switcherClassName) },
        import_react131.default.createElement(
          "div",
          { className: b53("icon-container") },
          import_react131.default.createElement(Icon, { data: customIcon ? customIcon : Share, size: iconSize, className: b53("icon", iconClass) })
        ),
        Boolean(buttonTitle) && import_react131.default.createElement("div", { className: b53("title") }, buttonTitle)
      )
    );
  }
};
ShareTooltip.defaultProps = shareTooltipDefaultProps;

// node_modules/@gravity-ui/uikit/build/esm/components/Skeleton/Skeleton.js
var import_react132 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Skeleton/Skeleton.css";
var b54 = block("skeleton");
function Skeleton({ className, style }) {
  return import_react132.default.createElement("div", { className: b54(null, className), style });
}

// node_modules/@gravity-ui/uikit/build/esm/components/Spin/Spin.js
var import_react133 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Spin/Spin.css";
var b55 = block("spin");
var Spin = import_react133.default.forwardRef(function Spin2(props, ref) {
  const { size: size2 = "m", style, className, qa } = props;
  return import_react133.default.createElement(
    "div",
    { ref, style, className: b55({ size: size2 }, className), "data-qa": qa },
    import_react133.default.createElement("div", { className: b55("inner") })
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/StoreBadge/StoreBadge.js
var import_react134 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/StoreBadge/StoreBadge.css";
var b56 = block("store-badge");
function StoreBadge({ platform, lang = Lang.En, className, onClick, url, alt }) {
  if (!url) {
    return import_react134.default.createElement("img", { className: b56({ platform, lang }, className), onClick, alt });
  }
  return import_react134.default.createElement(
    "a",
    { className: b56(null, className), onClick, href: url, target: "_blank", rel: "noopener noreferrer" },
    import_react134.default.createElement("img", { className: b56("image", { platform, lang }), alt })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/Stories.js
var import_react139 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/StoriesLayout/StoriesLayout.js
var import_react138 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/ImageView/ImageView.js
var import_react135 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/ImageView/ImageView.css";
var b57 = block("stories-image-view");
function ImageView({ media }) {
  const type = media.type || "image";
  return type === "image" ? import_react135.default.createElement("img", { className: b57(), src: media.url, alt: "" }) : null;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/VideoView/VideoView.js
var import_react136 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/VideoView/VideoView.css";
var b58 = block("stories-video-view");
function VideoView({ media }) {
  return media.type === "video" ? import_react136.default.createElement("video", { className: b58(), src: media.url, controls: false, playsInline: true, muted: true, autoPlay: true, loop: true, "webkit-playsinline": "true", poster: media.posterUrl }) : null;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/MediaRenderer/MediaRenderer.js
var import_react137 = __toESM(require_react());
function MediaRenderer({ media }) {
  return (media.type || "image") === "image" ? import_react137.default.createElement(ImageView, { media }) : import_react137.default.createElement(VideoView, { media });
}

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/i18n/en.json
var en_default5 = {
  label_back: "Back",
  label_next: "Next",
  label_close: "Close",
  label_more: "More",
  label_counter: "{{current}} of {{total}}"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/i18n/ru.json
var ru_default5 = {
  label_back: "Назад",
  label_next: "Дальше",
  label_close: "Закрыть",
  label_more: "Подробнее",
  label_counter: "{{current}} из {{total}}"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/i18n/index.js
var COMPONENT3 = "Stories";
var i18n_default4 = registerKeyset({ en: en_default5, ru: ru_default5 }, COMPONENT3);

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/StoriesLayout/StoriesLayout.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Stories/components/StoriesLayout/StoriesLayout.css";
var b59 = block("stories-layout");
var IndexType;
(function(IndexType2) {
  IndexType2[IndexType2["Start"] = 1] = "Start";
  IndexType2[IndexType2["End"] = 2] = "End";
  IndexType2[IndexType2["InProccess"] = 3] = "InProccess";
})(IndexType || (IndexType = {}));
var StoriesLayout = (props) => {
  const currentStory = props.items[props.storyIndex];
  return import_react138.default.createElement(
    "div",
    { className: b59("wrap-outer") },
    import_react138.default.createElement(
      "div",
      { className: b59("wrap-inner") },
      import_react138.default.createElement(
        "div",
        { className: b59("container") },
        import_react138.default.createElement(
          "div",
          { className: b59("left-pane") },
          import_react138.default.createElement("div", { className: b59("counter") }, i18n_default4("label_counter", {
            current: props.storyIndex + 1,
            total: props.items.length
          })),
          import_react138.default.createElement("div", { className: b59("text-block") }, currentStory && import_react138.default.createElement(
            import_react138.default.Fragment,
            null,
            currentStory.title && import_react138.default.createElement("div", { className: b59("text-header") }, currentStory.title),
            currentStory.description && import_react138.default.createElement("div", { className: b59("text-content") }, currentStory.description),
            currentStory.url && import_react138.default.createElement(
              "div",
              { className: b59("story-link-block") },
              import_react138.default.createElement(Link, { href: currentStory.url, target: "_blank" }, i18n_default4("label_more"))
            )
          )),
          import_react138.default.createElement(
            "div",
            { className: b59("controls-block") },
            IndexType.Start !== props.indexType && import_react138.default.createElement(Button2, { onClick: props.handleGotoPrevious, view: "outlined", size: "l" }, i18n_default4("label_back")),
            IndexType.InProccess !== props.indexType && import_react138.default.createElement(Button2, { onClick: props.handleButtonClose, size: "l" }, i18n_default4("label_close")),
            IndexType.End !== props.indexType && import_react138.default.createElement(Button2, { onClick: props.handleGotoNext, view: "action", size: "l" }, i18n_default4("label_next"))
          )
        ),
        import_react138.default.createElement(
          "div",
          { className: b59("right-pane") },
          import_react138.default.createElement(ButtonClose, { onClose: props.handleButtonClose }),
          (currentStory === null || currentStory === void 0 ? void 0 : currentStory.media) && import_react138.default.createElement(
            "div",
            { className: b59("media-block") },
            import_react138.default.createElement(MediaRenderer, { media: currentStory.media })
          )
        )
      )
    )
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Stories/Stories.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Stories/Stories.css";
var b60 = block("stories");
function Stories({ open, onClose, items, onPreviousClick, onNextClick, initialStoryIndex = 0, disableOutsideClick = true }) {
  const [storyIndex, setStoryIndex] = import_react139.default.useState(initialStoryIndex);
  const handleClose = import_react139.default.useCallback((event, reason) => {
    onClose === null || onClose === void 0 ? void 0 : onClose(event, reason);
  }, [onClose]);
  const handleButtonClose = import_react139.default.useCallback((event) => {
    handleClose(event, "closeButtonClick");
  }, [handleClose]);
  const handleGotoPrevious = import_react139.default.useCallback(() => {
    setStoryIndex((currentStoryIndex) => {
      if (currentStoryIndex <= 0) {
        return 0;
      }
      const newIndex = currentStoryIndex - 1;
      onPreviousClick === null || onPreviousClick === void 0 ? void 0 : onPreviousClick(newIndex);
      return newIndex;
    });
  }, [onPreviousClick]);
  const handleGotoNext = import_react139.default.useCallback(() => {
    setStoryIndex((currentStoryIndex) => {
      if (currentStoryIndex >= items.length - 1) {
        return items.length - 1;
      }
      const newIndex = currentStoryIndex + 1;
      onNextClick === null || onNextClick === void 0 ? void 0 : onNextClick(newIndex);
      return newIndex;
    });
  }, [items, onNextClick]);
  if (items.length === 0) {
    return null;
  }
  if (items[storyIndex] === void 0) {
    const correctIndex = items[initialStoryIndex] === void 0 ? 0 : initialStoryIndex;
    setStoryIndex(correctIndex);
    return null;
  }
  const indexType = storyIndex === 0 && IndexType.Start || storyIndex === items.length - 1 && IndexType.End || IndexType.InProccess;
  return import_react139.default.createElement(
    Modal,
    { open, onClose: handleClose, disableOutsideClick, contentClassName: b60("modal-content") },
    import_react139.default.createElement(StoriesLayout, { items, storyIndex, indexType, handleButtonClose, handleGotoNext, handleGotoPrevious })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/StoriesGroup/StoriesGroup.js
var import_react141 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/StoriesGroup/components/StoriesPreview/StoriesPreview.js
var import_react140 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/StoriesGroup/components/StoriesPreview/StoriesPreview.css";
var PREVIEW_ITEM_SIZE = 40;
var PREVIEW_LIST_GAP = 8;
var b61 = block("stories-group-preview");
var PreviewItem = ({ active, disabled, groupIndex, media, onSelectGroup }) => {
  const onClick = import_react140.default.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    onSelectGroup === null || onSelectGroup === void 0 ? void 0 : onSelectGroup(groupIndex);
  }, [onSelectGroup, groupIndex]);
  return import_react140.default.createElement("div", { className: b61("stories-preview-item", {
    active,
    disabled
  }), onClick }, media && import_react140.default.createElement(MediaRenderer, { media }));
};
var StoriesPreviewList = ({ groupIndex, groups, onGroupSelect, offset: offset2 = 0 }) => {
  return import_react140.default.createElement(import_react140.default.Fragment, null, groups.map(({ thumbnailMedia, items }, i) => {
    var _a;
    const media = thumbnailMedia || ((_a = items[0]) === null || _a === void 0 ? void 0 : _a.media);
    const currentGroupIndex = offset2 + i;
    return import_react140.default.createElement(PreviewItem, { key: i, groupIndex: currentGroupIndex, active: currentGroupIndex === groupIndex, disabled: items.length === 0, media, onSelectGroup: onGroupSelect });
  }));
};
var StoriesPreviewListWithSlider = ({ groupIndex, groups, onGroupSelect, maxSliderItemsCount }) => {
  const [offset2, setOffset] = import_react140.default.useState(0);
  import_react140.default.useEffect(() => {
    const currentOffset = maxSliderItemsCount * Math.floor(groupIndex / maxSliderItemsCount);
    setOffset(currentOffset);
  }, [groupIndex, maxSliderItemsCount]);
  const setPreviewOffset = import_react140.default.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setOffset((currentOffset) => {
      return currentOffset - maxSliderItemsCount;
    });
  }, [maxSliderItemsCount]);
  const setNextOffset = import_react140.default.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setOffset((currentOffset) => {
      return currentOffset + maxSliderItemsCount;
    });
  }, [maxSliderItemsCount]);
  return import_react140.default.createElement(
    import_react140.default.Fragment,
    null,
    groups.length > maxSliderItemsCount && import_react140.default.createElement("div", { className: b61("slider-button-wrapper") }, offset2 !== 0 && import_react140.default.createElement(
      Button2,
      { view: "raised", pin: "circle-circle", onClick: setPreviewOffset },
      import_react140.default.createElement(Icon, { className: b61("Icon", { left: true }), data: Chevron })
    )),
    import_react140.default.createElement(
      "div",
      { className: b61("slider-preview-list-wrapper"), style: {
        width: `${PREVIEW_ITEM_SIZE * maxSliderItemsCount + PREVIEW_LIST_GAP * (maxSliderItemsCount - 1)}px`
      } },
      import_react140.default.createElement(StoriesPreviewList, { groupIndex, groups: groups.slice(offset2, offset2 + maxSliderItemsCount), onGroupSelect, offset: offset2 })
    ),
    groups.length > maxSliderItemsCount && import_react140.default.createElement("div", { className: b61("slider-button-wrapper") }, offset2 < groups.length - maxSliderItemsCount && import_react140.default.createElement(
      Button2,
      { view: "raised", pin: "circle-circle", onClick: setNextOffset },
      import_react140.default.createElement(Icon, { className: b61("Icon", { right: true }), data: Chevron })
    ))
  );
};
var StoriesPreview = ({ groups, groupIndex, onGroupSelect, maxSliderItemsCount, onClose }) => {
  const handleClose = import_react140.default.useCallback((event) => {
    onClose === null || onClose === void 0 ? void 0 : onClose(event, "outsideClick");
  }, [onClose]);
  if (groups.length < maxSliderItemsCount) {
    return import_react140.default.createElement(
      "div",
      { className: b61(), onClick: handleClose },
      import_react140.default.createElement(StoriesPreviewList, { groupIndex, groups, onGroupSelect })
    );
  }
  return import_react140.default.createElement(
    "div",
    { className: b61(), onClick: handleClose },
    import_react140.default.createElement(StoriesPreviewListWithSlider, { maxSliderItemsCount, groupIndex, groups, onGroupSelect })
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/StoriesGroup/StoriesGroup.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/StoriesGroup/StoriesGroup.css";
var DEFAULT_MAX_SLIDER_ITEMS_COUNT = 12;
var b62 = block("stories-group");
var StoriesGroup = ({ open, groups, onItemSelect, disableOutsideClick = true, initialStoryIndex = [0, 0], maxSliderItemsCount = DEFAULT_MAX_SLIDER_ITEMS_COUNT, onClose }) => {
  const [[groupIndex, itemIndex], setStoryIndex] = import_react141.default.useState(initialStoryIndex);
  const handleClose = import_react141.default.useCallback((event, reason) => {
    onClose === null || onClose === void 0 ? void 0 : onClose(event, reason);
  }, [onClose]);
  const handleButtonClose = import_react141.default.useCallback((event) => {
    handleClose(event, "closeButtonClick");
  }, [handleClose]);
  const handleGotoPrevious = import_react141.default.useCallback(() => {
    setStoryIndex((prevState) => {
      const [currentGroupIndex, currentItemIndex] = prevState;
      if (currentItemIndex > 0) {
        const newState = [currentGroupIndex, currentItemIndex - 1];
        onItemSelect === null || onItemSelect === void 0 ? void 0 : onItemSelect(newState, false);
        return newState;
      }
      for (let i = currentGroupIndex - 1; i >= 0; --i) {
        if (groups[i].items.length !== 0) {
          const newState = [i, groups[i].items.length - 1];
          onItemSelect === null || onItemSelect === void 0 ? void 0 : onItemSelect(newState, false);
          return newState;
        }
      }
      return prevState;
    });
  }, [groups, onItemSelect]);
  const handleGotoNext = import_react141.default.useCallback(() => {
    setStoryIndex((prevState) => {
      var _a;
      const [currentGroupIndex, currentItemIndex] = prevState;
      if (currentItemIndex < ((_a = groups[currentGroupIndex]) === null || _a === void 0 ? void 0 : _a.items.length) - 1) {
        const newState = [currentGroupIndex, currentItemIndex + 1];
        onItemSelect === null || onItemSelect === void 0 ? void 0 : onItemSelect(newState, false);
        return newState;
      }
      for (let i = currentGroupIndex + 1; i < groups.length; ++i) {
        if (groups[i].items.length !== 0) {
          const newState = [i, 0];
          onItemSelect === null || onItemSelect === void 0 ? void 0 : onItemSelect(newState, false);
          return newState;
        }
      }
      return prevState;
    });
  }, [groups, onItemSelect]);
  const onGroupSelect = import_react141.default.useCallback((newGroupIndex) => {
    setStoryIndex([newGroupIndex, 0]);
    onItemSelect === null || onItemSelect === void 0 ? void 0 : onItemSelect([newGroupIndex, 0], true);
  }, [onItemSelect]);
  if (groups.length === 0) {
    return null;
  }
  const currentGroup = groups[groupIndex];
  const currentItems = (currentGroup === null || currentGroup === void 0 ? void 0 : currentGroup.items) || [];
  if (currentGroup === void 0 || currentItems[itemIndex] === void 0) {
    if (groups[initialStoryIndex[0]] && groups[initialStoryIndex[0]].items[initialStoryIndex[1]]) {
      setStoryIndex(initialStoryIndex);
    } else {
      for (let i = 0; i < groups.length; ++i) {
        if (groups[i] && groups[i].items.length !== 0) {
          setStoryIndex([i, 0]);
          break;
        }
      }
    }
    return null;
  }
  const indexType = groupIndex === 0 && itemIndex === 0 && IndexType.Start || groupIndex === groups.length - 1 && itemIndex === currentItems.length - 1 && IndexType.End || IndexType.InProccess;
  return import_react141.default.createElement(
    Modal,
    { open, onClose: handleClose, disableOutsideClick, contentClassName: b62("modal-content") },
    import_react141.default.createElement(StoriesPreview, { maxSliderItemsCount: maxSliderItemsCount > 0 ? maxSliderItemsCount : 1, groups, groupIndex, onGroupSelect, onClose: disableOutsideClick ? void 0 : handleClose }),
    import_react141.default.createElement(StoriesLayout, { storyIndex: itemIndex, items: currentItems, indexType, handleButtonClose, handleGotoNext, handleGotoPrevious })
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Switch/Switch.js
var import_react142 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Switch/Switch.css";
var b63 = block("switch");
var Switch = import_react142.default.forwardRef(function Switch2(props, ref) {
  const { size: size2 = "m", disabled = false, content, children: children2, title, style, className, qa } = props;
  const { checked, inputProps } = useCheckbox(props);
  const text2 = content || children2;
  return import_react142.default.createElement(
    "label",
    { ref, title, style, className: b63({
      size: size2,
      disabled,
      checked
    }, className), "data-qa": qa },
    import_react142.default.createElement(
      "span",
      { className: b63("indicator") },
      import_react142.default.createElement("input", Object.assign({}, inputProps, { className: b63("control") })),
      import_react142.default.createElement("span", { className: b63("outline") }),
      import_react142.default.createElement("span", { className: b63("slider") })
    ),
    text2 && import_react142.default.createElement("span", { className: b63("text") }, text2)
  );
});

// node_modules/@gravity-ui/uikit/build/esm/components/Table/Table.js
var import_react143 = __toESM(require_react());
var import_get = __toESM(require_get());
var import_has = __toESM(require_has2());
var import_isNumber = __toESM(require_isNumber());

// node_modules/@gravity-ui/uikit/build/esm/components/Table/i18n/en.json
var en_default6 = {
  label_empty: "No data"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Table/i18n/ru.json
var ru_default6 = {
  label_empty: "Нет данных"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Table/i18n/index.js
var COMPONENT4 = "Table";
var i18n_default5 = registerKeyset({ en: en_default6, ru: ru_default6 }, COMPONENT4);

// node_modules/@gravity-ui/uikit/build/esm/components/Table/Table.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/Table.css";
var DASH = "—";
var b64 = block("table");
var Table = class _Table extends import_react143.default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      activeScrollElement: "scrollContainer",
      columnsStyles: Array.from(this.props.columns, () => ({})),
      columnHeaderRefs: Array.from(this.props.columns, () => import_react143.default.createRef())
    };
    this.tableRef = import_react143.default.createRef();
    this.scrollContainerRef = import_react143.default.createRef();
    this.horizontalScrollBarRef = import_react143.default.createRef();
    this.horizontalScrollBarInnerRef = import_react143.default.createRef();
    this.renderRow = (item, rowIndex) => {
      const { columns, isRowDisabled, onRowClick, onRowMouseEnter, onRowMouseLeave, getRowClassNames, verticalAlign, edgePadding } = this.props;
      const { columnsStyles } = this.state;
      const disabled = isRowDisabled ? isRowDisabled(item, rowIndex) : false;
      const interactive = Boolean(!disabled && onRowClick);
      const additionalClassNames = getRowClassNames ? getRowClassNames(item, rowIndex) : [];
      return import_react143.default.createElement("tr", { key: _Table.getRowId(this.props, item, rowIndex), onClick: !disabled && onRowClick ? onRowClick.bind(null, item, rowIndex) : void 0, onMouseEnter: !disabled && onRowMouseEnter ? onRowMouseEnter.bind(null, item, rowIndex) : void 0, onMouseLeave: !disabled && onRowMouseLeave ? onRowMouseLeave.bind(null, item, rowIndex) : void 0, className: b64("row", { disabled, interactive, "vertical-align": verticalAlign }, additionalClassNames.join(" ")) }, columns.map((column, colIndex) => {
        const { id, align, primary, className, sticky } = column;
        const content = _Table.getBodyCellContent(column, item, rowIndex);
        return import_react143.default.createElement("td", { key: id, style: columnsStyles[colIndex], className: b64("cell", {
          align,
          primary,
          sticky,
          ["edge-padding"]: edgePadding
        }, className) }, content);
      }));
    };
    this.handleScrollContainerMouseenter = () => {
      this.setState({ activeScrollElement: "scrollContainer" });
    };
    this.handleScrollContainerScroll = () => {
      if (this.state.activeScrollElement === "scrollContainer" && this.horizontalScrollBarRef.current && this.scrollContainerRef.current) {
        this.horizontalScrollBarRef.current.scrollLeft = this.scrollContainerRef.current.scrollLeft;
      }
    };
    this.handleHorizontalScrollBarMouseenter = () => {
      this.setState({ activeScrollElement: "scrollBar" });
    };
    this.handleHorizontalScrollBarScroll = () => {
      if (this.state.activeScrollElement === "scrollBar" && this.horizontalScrollBarRef.current && this.scrollContainerRef.current) {
        this.scrollContainerRef.current.scrollLeft = this.horizontalScrollBarRef.current.scrollLeft;
      }
    };
  }
  // Static methods may be used by HOCs
  static getRowId(props, item, rowIndex) {
    const { data, getRowId } = props;
    const index2 = rowIndex !== null && rowIndex !== void 0 ? rowIndex : data.indexOf(item);
    if (typeof getRowId === "function") {
      return getRowId(item, index2);
    }
    if (getRowId && getRowId in item) {
      return String(item[getRowId]);
    }
    return String(index2);
  }
  static getHeadCellContent(column) {
    const { id, name } = column;
    let content;
    if (typeof name === "function") {
      content = name();
    } else if (typeof name === "string") {
      content = name;
    } else {
      content = id;
    }
    return import_react143.default.createElement("span", { className: b64("th-content") }, content);
  }
  static getBodyCellContent(column, item, rowIndex) {
    const { id, template, placeholder } = column;
    let placeholderValue;
    if (typeof placeholder === "function") {
      placeholderValue = placeholder(item, rowIndex);
    } else {
      placeholderValue = placeholder !== null && placeholder !== void 0 ? placeholder : DASH;
    }
    let value2;
    if (typeof template === "function") {
      value2 = template(item, rowIndex);
    } else if (typeof template === "string") {
      value2 = (0, import_get.default)(item, template);
    } else if ((0, import_has.default)(item, id)) {
      value2 = (0, import_get.default)(item, id);
    }
    if ([void 0, null, ""].includes(value2) && placeholderValue) {
      return placeholderValue;
    }
    return value2;
  }
  static getDerivedStateFromProps(props, state) {
    if (props.columns.length === state.columnHeaderRefs.length) {
      return null;
    }
    return {
      columnHeaderRefs: Array.from(props.columns, () => import_react143.default.createRef())
    };
  }
  componentDidMount() {
    if (this.props.stickyHorizontalScroll) {
      this.tableResizeObserver = new ResizeObserver_es_default((entries) => {
        var _a;
        const { contentRect } = entries[0];
        (_a = this.horizontalScrollBarInnerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty("width", `${contentRect.width}px`);
      });
      if (this.tableRef.current) {
        this.tableResizeObserver.observe(this.tableRef.current);
      }
      if (this.scrollContainerRef.current) {
        this.scrollContainerRef.current.addEventListener("scroll", this.handleScrollContainerScroll);
        this.scrollContainerRef.current.addEventListener("mouseenter", this.handleScrollContainerMouseenter);
      }
      if (this.horizontalScrollBarRef.current) {
        this.horizontalScrollBarRef.current.addEventListener("scroll", this.handleHorizontalScrollBarScroll);
        this.horizontalScrollBarRef.current.addEventListener("mouseenter", this.handleHorizontalScrollBarMouseenter);
      }
    }
    this.columnsResizeObserver = new ResizeObserver_es_default(() => {
      this.updateColumnStyles();
    });
    if (this.tableRef.current) {
      this.columnsResizeObserver.observe(this.tableRef.current);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.columns !== prevProps.columns) {
      this.updateColumnStyles();
    }
  }
  componentWillUnmount() {
    if (this.props.stickyHorizontalScroll) {
      if (this.tableResizeObserver) {
        this.tableResizeObserver.disconnect();
      }
      if (this.scrollContainerRef.current) {
        this.scrollContainerRef.current.removeEventListener("scroll", this.handleScrollContainerScroll);
        this.scrollContainerRef.current.removeEventListener("mouseenter", this.handleScrollContainerMouseenter);
      }
      if (this.horizontalScrollBarRef.current) {
        this.horizontalScrollBarRef.current.removeEventListener("scroll", this.handleHorizontalScrollBarScroll);
        this.horizontalScrollBarRef.current.removeEventListener("mouseenter", this.handleHorizontalScrollBarMouseenter);
      }
    }
    if (this.columnsResizeObserver) {
      this.columnsResizeObserver.disconnect();
    }
  }
  render() {
    const { columns, stickyHorizontalScroll, className, qa } = this.props;
    const withPrimary = columns.some(({ primary }) => primary);
    return import_react143.default.createElement("div", { className: b64({
      "with-primary": withPrimary,
      "with-sticky-scroll": stickyHorizontalScroll
    }, className), "data-qa": qa }, stickyHorizontalScroll ? import_react143.default.createElement(
      import_react143.default.Fragment,
      null,
      import_react143.default.createElement("div", { ref: this.scrollContainerRef, className: b64("scroll-container") }, this.renderTable()),
      this.renderHorizontalScrollBar()
    ) : this.renderTable());
  }
  renderHead() {
    const { columns, edgePadding } = this.props;
    const { columnsStyles } = this.state;
    return import_react143.default.createElement(
      "thead",
      { className: b64("head") },
      import_react143.default.createElement("tr", { className: b64("row") }, columns.map((column, index2) => {
        const { id, align, primary, sticky, className } = column;
        const content = _Table.getHeadCellContent(column);
        return import_react143.default.createElement("th", { key: id, ref: this.state.columnHeaderRefs[index2], style: columnsStyles[index2], className: b64("cell", {
          align,
          primary,
          sticky,
          ["edge-padding"]: edgePadding
        }, className) }, content);
      }))
    );
  }
  renderBody() {
    const { data } = this.props;
    return import_react143.default.createElement("tbody", { className: b64("body") }, data.length > 0 ? data.map(this.renderRow) : this.renderEmptyRow());
  }
  renderTable() {
    return import_react143.default.createElement(
      "table",
      { ref: this.tableRef, className: b64("table") },
      this.renderHead(),
      this.renderBody()
    );
  }
  renderEmptyRow() {
    const { columns, emptyMessage } = this.props;
    return import_react143.default.createElement(
      "tr",
      { className: b64("row", { empty: true }) },
      import_react143.default.createElement("td", { className: b64("cell"), colSpan: columns.length }, emptyMessage ? emptyMessage : i18n_default5("label_empty"))
    );
  }
  renderHorizontalScrollBar() {
    const { stickyHorizontalScroll, stickyHorizontalScrollBreakpoint = 0 } = this.props;
    return import_react143.default.createElement(
      "div",
      { ref: this.horizontalScrollBarRef, className: b64("horizontal-scroll-bar", {
        "sticky-horizontal-scroll": stickyHorizontalScroll
      }), style: { bottom: `${stickyHorizontalScrollBreakpoint}px` }, "data-qa": "sticky-horizontal-scroll-breakpoint-qa" },
      import_react143.default.createElement("div", { ref: this.horizontalScrollBarInnerRef, className: b64("horizontal-scroll-bar-inner") })
    );
  }
  updateColumnStyles() {
    this.setState((prevState) => {
      const columnsWidth = prevState.columnHeaderRefs.map((ref) => ref.current === null ? void 0 : ref.current.getBoundingClientRect().width);
      const columnsStyles = this.props.columns.map((_, index2) => this.getColumnStyles(index2, columnsWidth));
      return { columnsStyles };
    });
  }
  getColumnStyles(index2, columnsWidth) {
    const { columns } = this.props;
    const column = columns[index2];
    const style = {};
    if (typeof column.width === "string") {
      return { maxWidth: 0, width: column.width };
    }
    if (typeof column.width !== "undefined") {
      style.width = column.width;
    }
    if (!column.sticky) {
      return style;
    }
    const filteredColumns = column.sticky === "left" ? columnsWidth.slice(0, index2) : columnsWidth.slice(index2 + 1);
    style[column.sticky] = filteredColumns.reduce((left2, width) => {
      return (0, import_isNumber.default)(width) ? left2 + width : left2;
    }, 0);
    return style;
  }
};
Table.defaultProps = {
  edgePadding: true
};

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSelection/withTableSelection.js
var import_react144 = __toESM(require_react());
var import_without = __toESM(require_without());
var import_union = __toESM(require_union());
var import_difference = __toESM(require_difference());
var import_memoize = __toESM(require_memoize());
var import_get2 = __toESM(require_get());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSelection/withTableSelection.css";
var b65 = block("table");
var selectionColumnId = "_selection";
function withTableSelection(TableComponent) {
  var _a;
  const componentName = getComponentName(TableComponent);
  const displayName = `withTableSelection(${componentName})`;
  return _a = class extends import_react144.default.Component {
    constructor() {
      super(...arguments);
      this.renderHeadCell = () => {
        const { data, selectedIds } = this.props;
        let disabled = true;
        let checked = data.every((item, index2) => {
          if (this.isDisabled(item, index2)) {
            return true;
          } else {
            disabled = false;
          }
          const id = Table.getRowId(this.props, item, index2);
          return selectedIds.includes(id);
        });
        if (disabled) {
          checked = false;
        }
        return this.renderCheckBox({ disabled, checked, handler: this.handleAllCheckBoxUpdate });
      };
      this.renderBodyCell = (item, index2) => {
        const { selectedIds } = this.props;
        const id = Table.getRowId(this.props, item, index2);
        const checked = selectedIds.includes(id);
        return this.renderCheckBox({
          disabled: this.isDisabled(item, index2),
          checked,
          handler: this.handleCheckBoxUpdate.bind(this, id, index2)
        });
      };
      this.handleCheckBoxUpdate = (id, index2, event) => {
        const { checked } = event.target;
        const isShiftPressed = event.nativeEvent.shiftKey;
        const { data, selectedIds, onSelectionChange } = this.props;
        if (isShiftPressed && this.lastCheckedIndex !== void 0 && this.lastCheckedIndex >= 0) {
          const begin = Math.min(this.lastCheckedIndex, index2);
          const end2 = Math.max(this.lastCheckedIndex, index2);
          const dataIds = data.map((item, i) => Table.getRowId(this.props, item, i));
          const diffIds = dataIds.filter((_id, i) => begin <= i && i <= end2 && !this.isDisabled(data[i], i));
          onSelectionChange(checked ? (0, import_union.default)(selectedIds, diffIds) : (0, import_without.default)(selectedIds, ...diffIds));
        } else {
          onSelectionChange(checked ? [...selectedIds, id] : (0, import_without.default)(selectedIds, id));
        }
        this.lastCheckedIndex = index2;
      };
      this.handleAllCheckBoxUpdate = (event) => {
        const { checked } = event.target;
        const { data, selectedIds, onSelectionChange } = this.props;
        const dataIds = data.map((item, index2) => Table.getRowId(this.props, item, index2));
        const notDisabledItemIds = dataIds.filter((_id, index2) => !this.isDisabled(data[index2], index2));
        onSelectionChange(checked ? (0, import_union.default)(selectedIds, notDisabledItemIds) : (0, import_difference.default)(selectedIds, dataIds));
      };
      this.enhanceColumns = (0, import_memoize.default)((columns) => {
        const selectionColumn = {
          id: selectionColumnId,
          name: this.renderHeadCell,
          template: this.renderBodyCell,
          width: 17,
          sticky: (0, import_get2.default)(columns, [0, "sticky"]) === "left" ? "left" : void 0
        };
        return [selectionColumn, ...columns];
      });
      this.enhanceOnRowClick = (0, import_memoize.default)((onRowClick) => {
        if (!onRowClick) {
          return onRowClick;
        }
        return (item, index2, event) => {
          const checkboxClassName = b65("selection-checkbox");
          if (
            // @ts-ignore
            event.nativeEvent.target.matches(`.${checkboxClassName}, .${checkboxClassName} *`)
          ) {
            return void 0;
          }
          return onRowClick(item, index2, event);
        };
      });
      this.enhanceGetRowClassNames = (0, import_memoize.default)((getRowClassNames) => {
        return (item, index2) => {
          const { selectedIds } = this.props;
          const classNames = getRowClassNames ? getRowClassNames(item, index2) : [];
          const id = Table.getRowId(this.props, item, index2);
          const selected = selectedIds.includes(id);
          classNames.push(b65("row", { selected }));
          return classNames;
        };
      });
      this.isDisabled = (item, index2) => {
        const { isRowDisabled, isRowSelectionDisabled } = this.props;
        if (isRowSelectionDisabled && isRowSelectionDisabled(item, index2)) {
          return true;
        }
        return isRowDisabled ? isRowDisabled(item, index2) : false;
      };
    }
    render() {
      const _a2 = this.props, {
        selectedIds,
        // eslint-disable-line @typescript-eslint/no-unused-vars
        onSelectionChange,
        // eslint-disable-line @typescript-eslint/no-unused-vars
        columns,
        onRowClick,
        getRowClassNames
      } = _a2, restTableProps = __rest(_a2, ["selectedIds", "onSelectionChange", "columns", "onRowClick", "getRowClassNames"]);
      return import_react144.default.createElement(TableComponent, Object.assign({}, restTableProps, { columns: this.enhanceColumns(columns), onRowClick: this.enhanceOnRowClick(onRowClick), getRowClassNames: this.enhanceGetRowClassNames(getRowClassNames) }));
    }
    renderCheckBox({ disabled, checked, handler }) {
      return import_react144.default.createElement(Checkbox, { size: "l", checked, disabled, onChange: handler, className: b65("selection-checkbox") });
    }
  }, _a.displayName = displayName, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableActions/withTableActions.js
var import_react145 = __toESM(require_react());
var import_memoize2 = __toESM(require_memoize());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableActions/withTableActions.css";
var actionsColumnId = "_actions";
function enhanceSystemColumn(columns, enhancer) {
  const existedColumn = columns.find(({ id }) => id === actionsColumnId);
  const systemColumn = existedColumn || {
    id: actionsColumnId,
    name: "",
    sticky: "right",
    width: 28,
    placeholder: ""
  };
  enhancer(systemColumn);
  return existedColumn ? columns : [...columns, systemColumn];
}
var b66 = block("table");
var bPopup = block("table-action-popup");
var BUTTON_CLASSNAME = b66("actions-button");
function withTableActions(TableComponent) {
  var _a;
  const componentName = getComponentName(TableComponent);
  const displayName = `withTableActions(${componentName})`;
  return _a = class extends import_react145.default.Component {
    constructor() {
      super(...arguments);
      this.state = {
        popupOpen: false,
        popupData: null
      };
      this.anchorRef = import_react145.default.createRef();
      this.renderBodyCell = (item, index2) => {
        const { isRowDisabled, getRowActions } = this.props;
        const actions = getRowActions(item, index2);
        if (actions.length === 0) {
          return null;
        }
        const disabled = isRowDisabled ? isRowDisabled(item, index2) : false;
        return import_react145.default.createElement(
          "div",
          { className: b66("actions") },
          import_react145.default.createElement(
            Button2,
            { view: "flat-secondary", disabled, className: BUTTON_CLASSNAME, onClick: this.handleActionsButtonClick.bind(this, { item, index: index2 }) },
            import_react145.default.createElement(Icon, { data: DotsIcon })
          )
        );
      };
      this.renderPopupMenuItem = (action, index2) => {
        const { popupData } = this.state;
        if (this.isActionGroup(action)) {
          return import_react145.default.createElement(Menu.Group, { key: index2, label: action.title }, action.items.map(this.renderPopupMenuItem));
        } else {
          return import_react145.default.createElement(Menu.Item, { key: index2, disabled: action.disabled, onClick: this.handleActionClick.bind(this, action, popupData), theme: action.theme, className: bPopup("menu-item") }, action.text);
        }
      };
      this.handleActionsButtonClick = (data, event) => {
        const { popupOpen } = this.state;
        const anchor = event.currentTarget;
        if (popupOpen && this.anchorRef.current === anchor) {
          this.closePopup();
        } else {
          this.openPopup(anchor, data);
        }
      };
      this.handleActionClick = (action, data, event) => {
        action.handler(data.item, data.index, event);
        this.closePopup();
      };
      this.handlePopupClose = () => {
        this.closePopup();
      };
      this.enhanceColumns = (0, import_memoize2.default)((columns) => enhanceSystemColumn(columns, (systemColumn) => {
        systemColumn.template = this.renderBodyCell;
      }));
      this.enhanceOnRowClick = (0, import_memoize2.default)((onRowClick) => {
        if (!onRowClick) {
          return onRowClick;
        }
        return (item, index2, event) => {
          if (
            // @ts-ignore
            event.nativeEvent.target.matches(`.${BUTTON_CLASSNAME}, .${BUTTON_CLASSNAME} *`)
          ) {
            return;
          }
          return onRowClick(item, index2, event);
        };
      });
    }
    render() {
      const _a2 = this.props, {
        getRowActions,
        // eslint-disable-line @typescript-eslint/no-unused-vars
        columns,
        onRowClick
      } = _a2, restTableProps = __rest(_a2, ["getRowActions", "columns", "onRowClick"]);
      return import_react145.default.createElement(
        import_react145.default.Fragment,
        null,
        import_react145.default.createElement(TableComponent, Object.assign({}, restTableProps, { columns: this.enhanceColumns(columns), onRowClick: this.enhanceOnRowClick(onRowClick) })),
        this.renderPopup()
      );
    }
    renderPopup() {
      const { getRowActions } = this.props;
      const { popupOpen, popupData } = this.state;
      if (!popupData) {
        return null;
      }
      const actions = getRowActions(popupData.item, popupData.index);
      return import_react145.default.createElement(
        Popup,
        { open: popupOpen, anchorRef: this.anchorRef, placement: ["bottom-end", "top-end"], onClose: this.handlePopupClose },
        import_react145.default.createElement(Menu, { className: bPopup("menu") }, actions.map(this.renderPopupMenuItem))
      );
    }
    openPopup(anchor, data) {
      this.anchorRef.current = anchor;
      this.setState({ popupOpen: true, popupData: data });
    }
    closePopup() {
      this.setState({ popupOpen: false });
    }
    isActionGroup(config2) {
      return Array.isArray(config2.items);
    }
  }, _a.displayName = displayName, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableCopy/withTableCopy.js
var import_react146 = __toESM(require_react());
var import_memoize3 = __toESM(require_memoize());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableCopy/withTableCopy.css";
var b67 = block("table");
function withTableCopy(TableComponent) {
  var _a;
  const componentName = getComponentName(TableComponent);
  const displayName = `withTableCopy(${componentName})`;
  return _a = class extends import_react146.default.Component {
    constructor() {
      super(...arguments);
      this.enhanceColumns = (0, import_memoize3.default)((columns) => {
        return columns.map((column) => {
          const meta = column.meta;
          if (!meta || !meta.copy) {
            return column;
          }
          return Object.assign(Object.assign({}, column), { template: (item, index2) => {
            const originContent = Table.getBodyCellContent(Object.assign(Object.assign({}, column), { placeholder: "" }), item, index2);
            if (!originContent) {
              return originContent;
            }
            let copyText;
            if (typeof meta.copy === "function") {
              copyText = String(meta.copy(item, index2));
            } else if (typeof originContent === "string" || typeof originContent === "number") {
              copyText = String(originContent);
            }
            if (!copyText) {
              return originContent;
            }
            return import_react146.default.createElement(
              "div",
              { className: b67("copy") },
              import_react146.default.createElement("div", { className: b67("copy-content") }, originContent),
              import_react146.default.createElement(
                "div",
                { className: b67("copy-button") },
                import_react146.default.createElement(ClipboardButton, { text: copyText, size: 14 })
              )
            );
          } });
        });
      });
      this.enhanceOnRowClick = (0, import_memoize3.default)((onRowClick) => {
        if (!onRowClick) {
          return onRowClick;
        }
        return (item, index2, event) => {
          const buttonClassName = b67("copy-button");
          if (
            // @ts-ignore
            event.nativeEvent.target.matches(`.${buttonClassName}, .${buttonClassName} *`)
          ) {
            return;
          }
          return onRowClick(item, index2, event);
        };
      });
    }
    render() {
      const _a2 = this.props, { columns, onRowClick } = _a2, restTableProps = __rest(_a2, ["columns", "onRowClick"]);
      return import_react146.default.createElement(TableComponent, Object.assign({}, restTableProps, { columns: this.enhanceColumns(columns), onRowClick: this.enhanceOnRowClick(onRowClick) }));
    }
  }, _a.displayName = displayName, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSorting/withTableSorting.js
var import_react148 = __toESM(require_react());
var import_memoize4 = __toESM(require_memoize());

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSorting/SortIndicator/SortIndicator.js
var import_react147 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSorting/SortIndicator/SortIndicator.css";
var b68 = block("sort-indicator");
function SortIndicator({ order: order2 = "asc" }) {
  return import_react147.default.createElement(
    "div",
    { className: b68() },
    import_react147.default.createElement(
      "div",
      { className: b68("caret"), style: { transform: order2 === "asc" ? "scale(1, -1)" : void 0 } },
      import_react147.default.createElement(
        "svg",
        Object.assign({ width: "6", height: "3", viewBox: "0 0 6 3", fill: "currentColor" }, a11yHiddenSvgProps),
        import_react147.default.createElement("path", { d: "M0.404698 0C0.223319 0 0.102399 0.0887574 0.0419396 0.230769C-0.0386733 0.372781 0.00163315 0.497041 0.122552 0.60355L2.72232 2.89349C2.80293 2.9645 2.88354 3 3.00446 3C3.10523 3 3.20599 2.9645 3.28661 2.89349L5.88637 0.60355C6.00729 0.497041 6.02745 0.372781 5.96699 0.230769C5.88637 0.0887574 5.76545 0 5.60423 0H0.404698Z" })
      )
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSorting/withTableSorting.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSorting/withTableSorting.css";
var b69 = block("table");
function withTableSorting(TableComponent) {
  var _a;
  const componentName = getComponentName(TableComponent);
  const displayName = `withTableSorting(${componentName})`;
  function defaultCompareFunction(itemA, itemB, columnId) {
    if (itemA[columnId] === itemB[columnId]) {
      return 0;
    } else {
      return itemA[columnId] > itemB[columnId] ? 1 : -1;
    }
  }
  return _a = class extends import_react148.default.Component {
    constructor() {
      var _a2;
      super(...arguments);
      this.state = {
        sort: (_a2 = this.props.defaultSortState) !== null && _a2 !== void 0 ? _a2 : []
      };
      this.enhanceColumns = (0, import_memoize4.default)((columns) => {
        return columns.map((column) => {
          const meta = column.meta;
          if (meta && meta.sort) {
            return Object.assign(Object.assign({}, column), { meta: Object.assign(Object.assign({}, column.meta), { _originalName: column.name }), name: () => {
              const sortState = this.getSortState();
              let sortOrder;
              if (sortState.length > 0) {
                const state = sortState.find((s) => s.column === column.id);
                if (state) {
                  sortOrder = state.order;
                }
              }
              const originContent = Table.getHeadCellContent(column);
              const content = [
                import_react148.default.createElement("div", { key: "content", className: b69("sort-content") }, originContent),
                import_react148.default.createElement("div", { key: "spacer", className: b69("sort-spacer") }),
                import_react148.default.createElement(
                  "div",
                  { key: "indicator", className: b69("sort-indicator") },
                  import_react148.default.createElement(SortIndicator, { order: sortOrder || this.getColumnDefaultSortOrder(column) })
                )
              ];
              if (column.align === "right") {
                content.reverse();
              }
              return import_react148.default.createElement("div", { className: b69("sort", { active: Boolean(sortOrder) }), onClick: this.handleColumnSortClick.bind(this, column) }, content);
            } });
          } else {
            return column;
          }
        });
      });
      this.handleColumnSortClick = (column, event) => {
        const sortState = this.getSortState();
        const currentStateIndex = sortState.findIndex((state) => state.column === column.id);
        const currentState = sortState[currentStateIndex];
        const nextColumnSort = this.getNextSortForColumn(column, currentState);
        if (!event.shiftKey) {
          this.handleSortStateChange(nextColumnSort);
          return;
        }
        if (currentState) {
          this.handleSortStateChange([
            ...sortState.slice(0, currentStateIndex),
            ...sortState.slice(currentStateIndex + 1),
            ...nextColumnSort
          ]);
        } else {
          this.handleSortStateChange([...sortState, ...nextColumnSort]);
        }
      };
    }
    render() {
      const _a2 = this.props, { columns } = _a2, restTableProps = __rest(_a2, ["columns"]);
      return import_react148.default.createElement(TableComponent, Object.assign({}, restTableProps, { data: this.getSortedData(), columns: this.enhanceColumns(columns) }));
    }
    getSortedData() {
      const { data, columns } = this.props;
      const sortState = this.getSortState();
      if (this.isControlledState() || sortState.length === 0) {
        return data;
      }
      return data.slice().sort((itemA, itemB) => {
        var _a2;
        let i = 0;
        while (i < sortState.length) {
          const state = sortState[i++];
          const column = columns.find((c) => c.id === state.column);
          const compareFunction = (_a2 = column === null || column === void 0 ? void 0 : column.meta) === null || _a2 === void 0 ? void 0 : _a2.sort;
          if (!compareFunction) {
            continue;
          }
          const compareValue = typeof compareFunction === "function" ? compareFunction(itemA, itemB) : defaultCompareFunction(itemA, itemB, state.column);
          if (compareValue !== 0) {
            return state.order === "asc" ? compareValue : -compareValue;
          }
        }
        return 0;
      });
    }
    getSortState() {
      const { sortState } = this.props;
      const { sort } = this.state;
      return this.isControlledState() ? sortState : sort;
    }
    handleSortStateChange(newSortState) {
      const { onSortStateChange } = this.props;
      if (this.isControlledState()) {
        onSortStateChange(newSortState);
      } else {
        this.setState({ sort: newSortState });
      }
    }
    isControlledState() {
      const { sortState, onSortStateChange } = this.props;
      return Boolean(sortState && onSortStateChange);
    }
    getColumnDefaultSortOrder(column) {
      var _a2;
      return ((_a2 = column.meta) === null || _a2 === void 0 ? void 0 : _a2.defaultSortOrder) || "asc";
    }
    getNextSortForColumn(column, currentState) {
      const defaultOrder = this.getColumnDefaultSortOrder(column);
      const orderStack = defaultOrder === "desc" ? ["desc", "asc", void 0] : ["asc", "desc", void 0];
      const currentIndex = orderStack.indexOf(currentState === null || currentState === void 0 ? void 0 : currentState.order);
      const nextIndex = (currentIndex + 1) % orderStack.length;
      const nextOrder = orderStack[nextIndex];
      if (!nextOrder) {
        return [];
      }
      return [{ column: column.id, order: nextOrder }];
    }
  }, _a.displayName = displayName, _a;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/withTableSettings.js
var import_react152 = __toESM(require_react());
var import_last = __toESM(require_last());
var import_isString = __toESM(require_isString());
var import_get3 = __toESM(require_get());

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/TableColumnSetup.js
var import_react151 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/TickIcon.js
var import_react149 = __toESM(require_react());
function TickIcon(props) {
  return import_react149.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react149.default.createElement("path", { d: "M5.95 11.008L1.863 6.572.392 7.927l5.533 6.003 9.67-10.114-1.444-1.381z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/LockIcon.js
var import_react150 = __toESM(require_react());
function LockIcon(props) {
  return import_react150.default.createElement(
    "svg",
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "16", height: "16", fill: "currentColor" }, a11yHiddenSvgProps, props),
    import_react150.default.createElement("path", { d: "M5.75 6.232C5.75 3.811 6.953 3.5 8 3.5s2.25.31 2.25 2.732V7h-4.5v-.768zm6 .768v-.768C11.75 2.55 9.4 2 8 2s-3.75.55-3.75 4.232V7H3v7h10V7h-1.25z" })
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/i18n/en.json
var en_default7 = {
  button_switcher: "Columns",
  button_apply: "Apply"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/i18n/ru.json
var ru_default7 = {
  button_switcher: "Колонки",
  button_apply: "Применить"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/i18n/index.js
var COMPONENT5 = "TableColumnSetup";
var i18n_default6 = registerKeyset({ en: en_default7, ru: ru_default7 }, COMPONENT5);

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/TableColumnSetup.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/TableColumnSetup/TableColumnSetup.css";
var b70 = block("table-column-setup");
var TableColumnSetup = (props) => {
  const { switcher, disabled, popupWidth, popupPlacement, className, items: propsItems, getItemTitle = (item) => item.title, sortable = true, filterable = false, showStatus } = props;
  const [focused, setFocused] = import_react151.default.useState(false);
  const [items, setItems] = import_react151.default.useState([]);
  const [currentItems, setCurrentItems] = import_react151.default.useState([]);
  const [requiredItems, setRequiredItems] = import_react151.default.useState([]);
  const refControl = import_react151.default.useRef(null);
  const LIST_ITEM_HEIGHT = 36;
  const getRequiredItems = (list) => list.filter(({ required }) => required).map((column) => Object.assign(Object.assign({}, column), { disabled: true }));
  const getConfigurableItems = (list) => list.filter(({ required }) => !required);
  import_react151.default.useEffect(() => {
    if (propsItems !== items) {
      setItems(propsItems);
      setRequiredItems(getRequiredItems(propsItems));
      setCurrentItems(getConfigurableItems(propsItems));
    }
  }, [items, propsItems]);
  const setInitialState = () => {
    setFocused(false);
    setRequiredItems(getRequiredItems(items));
    setCurrentItems(getConfigurableItems(items));
  };
  const getListHeight2 = (list) => {
    const itemHeight = LIST_ITEM_HEIGHT;
    return Math.min(5, list.length) * itemHeight + itemHeight / 2;
  };
  const getRequiredListHeight = (list) => list.length * LIST_ITEM_HEIGHT;
  const getCountSelected = () => items.reduce((acc, cur) => cur.selected ? acc + 1 : acc, 0);
  const makeOnSortEnd = (list) => ({ oldIndex, newIndex }) => {
    setCurrentItems(List.moveListElement(list.slice(), oldIndex, newIndex));
  };
  const handleUpdate = (value2) => setCurrentItems(value2);
  const handleClosePopup = () => setInitialState();
  const handleControlClick = () => {
    if (!disabled) {
      setFocused(!focused);
      setRequiredItems(getRequiredItems(items));
      setCurrentItems(getConfigurableItems(items));
    }
  };
  const handleApplyClick = () => {
    setInitialState();
    const newItems = requiredItems.concat(currentItems);
    if (items !== newItems) {
      props.onUpdate(newItems);
    }
  };
  const handleItemClick = (value2) => {
    const newItems = currentItems.map((item) => item === value2 ? Object.assign(Object.assign({}, item), { selected: !item.selected }) : item);
    handleUpdate(newItems);
  };
  const renderItem = (item) => {
    return import_react151.default.createElement(
      "div",
      { className: b70("item-content") },
      item.required ? import_react151.default.createElement(
        "div",
        { className: b70("lock-wrap", { visible: item.selected }) },
        import_react151.default.createElement(Icon, { data: LockIcon })
      ) : import_react151.default.createElement(
        "div",
        { className: b70("tick-wrap", { visible: item.selected }) },
        import_react151.default.createElement(Icon, { data: TickIcon, className: b70("tick"), width: 10, height: 10 })
      ),
      import_react151.default.createElement("div", { className: b70("title") }, getItemTitle(item))
    );
  };
  const renderStatus = () => {
    if (!showStatus) {
      return null;
    }
    const selected = getCountSelected();
    const all = propsItems.length;
    const status = `${selected}/${all}`;
    return import_react151.default.createElement("span", { className: b70("status") }, status);
  };
  const renderRequiredColumns = () => {
    const hasRequiredColumns = requiredItems.length;
    if (!hasRequiredColumns) {
      return null;
    }
    return import_react151.default.createElement(List, { items: requiredItems, itemHeight: LIST_ITEM_HEIGHT, itemsHeight: getRequiredListHeight, filterable, renderItem, itemsClassName: b70("items"), itemClassName: b70("item"), virtualized: false });
  };
  const renderConfigurableColumns = () => {
    return import_react151.default.createElement(List, { items: currentItems, itemHeight: LIST_ITEM_HEIGHT, itemsHeight: getListHeight2, sortable, filterable, sortHandleAlign: "right", onSortEnd: makeOnSortEnd(currentItems), onItemClick: handleItemClick, renderItem, itemsClassName: b70("items"), itemClassName: b70("item"), virtualized: false });
  };
  return import_react151.default.createElement(
    "div",
    { className: b70(null, className) },
    import_react151.default.createElement("div", { className: b70("control"), ref: refControl, onClick: handleControlClick }, switcher || import_react151.default.createElement(
      Button2,
      { disabled },
      import_react151.default.createElement(Icon, { data: GearIcon }),
      i18n_default6("button_switcher"),
      renderStatus()
    )),
    import_react151.default.createElement(
      Popup,
      { anchorRef: refControl, placement: popupPlacement || ["bottom-start", "bottom-end", "top-start", "top-end"], open: focused, onClose: handleClosePopup, className: b70("popup"), style: { width: popupWidth } },
      renderRequiredColumns(),
      renderConfigurableColumns(),
      import_react151.default.createElement(
        "div",
        { className: b70("controls") },
        import_react151.default.createElement(Button2, { view: "action", width: "max", onClick: handleApplyClick }, i18n_default6("button_apply"))
      )
    )
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/withTableSettings.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Table/hoc/withTableSettings/withTableSettings.css";
function filterColumns(columns, settings) {
  const filteredColumns = settings.map(({ id, isSelected }) => ({
    isSelected,
    columnSettings: columns.find((column) => id === column.id)
  })).filter(({ isSelected, columnSettings }) => isSelected && columnSettings).map(({ columnSettings }) => columnSettings);
  if (columns[0] && columns[0].id === selectionColumnId) {
    filteredColumns.unshift(columns[0]);
  }
  const lastColumn = (0, import_last.default)(columns);
  if (lastColumn && lastColumn.id === actionsColumnId) {
    filteredColumns.push(lastColumn);
  }
  return filteredColumns;
}
function getColumnStringTitle(column) {
  if ((0, import_isString.default)(column.name)) {
    return column.name;
  }
  const originalName = (0, import_get3.default)(column, ["meta", "_originalName"]);
  if ((0, import_isString.default)(originalName)) {
    return originalName;
  }
  return column.id;
}
function getActualItems(columns, settings) {
  const newColumnSettings = columns.filter(({ id }) => id !== actionsColumnId && id !== selectionColumnId && settings.every((setting) => setting.id !== id)).map((column) => {
    var _a;
    return {
      id: column.id,
      isSelected: ((_a = column.meta) === null || _a === void 0 ? void 0 : _a.selectedByDefault) !== false
    };
  });
  return settings.filter(({ id }) => columns.some((column) => id === column.id)).concat(newColumnSettings).map(({ id, isSelected }) => {
    var _a;
    const foundColumn = columns.find((column) => column.id === id);
    const isProtected = Boolean((_a = foundColumn === null || foundColumn === void 0 ? void 0 : foundColumn.meta) === null || _a === void 0 ? void 0 : _a.selectedAlways);
    return {
      id,
      isSelected: isProtected ? true : isSelected,
      isProtected,
      title: foundColumn ? getColumnStringTitle(foundColumn) : id
    };
  });
}
function prepareColumnSetupItems(items) {
  return items.map(({ id, title, isSelected, isProtected }) => ({
    id,
    title,
    selected: isSelected,
    required: isProtected
  }));
}
function prepareUpdateSettings(items) {
  return items.map(({ id, selected }) => ({
    id,
    isSelected: selected
  }));
}
var b71 = block("table");
function withTableSettings(TableComponent) {
  const componentName = getComponentName(TableComponent);
  const TableWithSettings = (_a) => {
    var { updateSettings, settings, columns, settingsPopupWidth } = _a, restTableProps = __rest(_a, ["updateSettings", "settings", "columns", "settingsPopupWidth"]);
    const actualItems = import_react152.default.useMemo(() => getActualItems(columns, settings || []), [columns, settings]);
    const onUpdateColumns = import_react152.default.useCallback((newItems) => {
      updateSettings(prepareUpdateSettings(newItems));
    }, [updateSettings]);
    const columnSetupItems = import_react152.default.useMemo(() => prepareColumnSetupItems(actualItems), [actualItems]);
    const enhancedColumns = import_react152.default.useMemo(() => enhanceSystemColumn(filterColumns(columns, actualItems), (systemColumn) => {
      systemColumn.name = () => import_react152.default.createElement(
        "div",
        { className: b71("settings") },
        import_react152.default.createElement(TableColumnSetup, { popupWidth: settingsPopupWidth, popupPlacement: ["bottom-end", "bottom", "top-end", "top"], onUpdate: onUpdateColumns, items: columnSetupItems, switcher: import_react152.default.createElement(
          Button2,
          { view: "flat", className: b71("settings-button") },
          import_react152.default.createElement(Icon, { data: GearIcon, size: 20 })
        ) })
      );
    }), [actualItems, columnSetupItems, columns, onUpdateColumns, settingsPopupWidth]);
    return import_react152.default.createElement(
      import_react152.default.Fragment,
      null,
      import_react152.default.createElement(TableComponent, Object.assign({}, restTableProps, { columns: enhancedColumns }))
    );
  };
  TableWithSettings.displayName = `withTableSettings(${componentName})`;
  return TableWithSettings;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Tabs/Tabs.js
var import_react154 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Tabs/TabsItem.js
var import_react153 = __toESM(require_react());
var b72 = block("tabs");
var TabsItem = ({ id, className, title, meta, hint, icon, counter, label, active, disabled, hasOverflow, extraProps, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      onClick(id);
    }
  };
  const htmlTitle = (0, import_react153.useMemo)(() => {
    if (hint !== void 0) {
      return hint;
    }
    if (typeof title === "string") {
      return title;
    }
    return void 0;
  }, [hint, title]);
  return import_react153.default.createElement(
    "div",
    Object.assign({}, extraProps, { role: "tab", "aria-selected": active === true, "aria-disabled": disabled === true, tabIndex: disabled ? -1 : 0, className: b72("item", { active, disabled, overflow: Boolean(hasOverflow) }, className), title: htmlTitle, onClick: handleClick, onKeyDown: handleKeyDown }),
    import_react153.default.createElement(
      "div",
      { className: b72("item-content") },
      icon && import_react153.default.createElement("div", { className: b72("item-icon") }, icon),
      import_react153.default.createElement("div", { className: b72("item-title") }, title || id),
      typeof counter === "number" && import_react153.default.createElement("div", { className: b72("item-counter") }, counter),
      label && import_react153.default.createElement(Label, { className: b72("item-label"), theme: label.theme }, label.content)
    ),
    meta && import_react153.default.createElement("div", { className: b72("item-meta") }, meta)
  );
};

// node_modules/@gravity-ui/uikit/build/esm/components/Tabs/Tabs.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Tabs/Tabs.css";
var b73 = block("tabs");
var TabsDirection;
(function(TabsDirection2) {
  TabsDirection2["Horizontal"] = "horizontal";
  TabsDirection2["Vertical"] = "vertical";
})(TabsDirection || (TabsDirection = {}));
var Tabs = (0, import_react154.forwardRef)(({ direction = TabsDirection.Horizontal, size: size2 = "m", activeTab, allowNotSelected = false, items = [], className, onSelectTab, wrapTo, qa }, ref) => {
  const activeTabId = (0, import_react154.useMemo)(() => {
    if (activeTab) {
      return activeTab;
    }
    if (allowNotSelected || items.length === 0) {
      return void 0;
    }
    return items[0].id;
  }, [activeTab, allowNotSelected, items]);
  const handleTabClick = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
  };
  return import_react154.default.createElement("div", { role: "tablist", className: b73({ direction, size: size2 }, className), "data-qa": qa, ref }, items.map((item, index2) => {
    const tabItemNode = import_react154.default.createElement(TabsItem, Object.assign({ key: item.id }, item, { active: item.id === activeTabId, onClick: handleTabClick }));
    if (wrapTo) {
      return wrapTo(item, tabItemNode, index2);
    }
    return tabItemNode;
  }));
});
Tabs.displayName = "Tabs";

// node_modules/@gravity-ui/uikit/build/esm/components/Text/Text.js
var import_react155 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Text/text/text.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Text/text/text.css";
var b74 = block("text");
var TEXT_VARIANTS = [
  "display-4",
  "display-3",
  "display-2",
  "display-1",
  "header-2",
  "header-1",
  "subheader-3",
  "subheader-2",
  "subheader-1",
  "body-3",
  "body-2",
  "body-1",
  "body-short",
  "caption-2",
  "caption-1",
  "code-3",
  "code-inline-3",
  "code-2",
  "code-inline-2",
  "code-1",
  "code-inline-1"
];
var text = ({ variant = "body-1", ellipsis, whiteSpace, wordBreak }, className) => b74({ variant, ellipsis, ws: whiteSpace, wb: wordBreak }, className);

// node_modules/@gravity-ui/uikit/build/esm/components/Text/colorText/colorText.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Text/colorText/colorText.css";
var b75 = block("color-text");
var TEXT_COLORS = [
  "primary",
  "complementary",
  "secondary",
  "hint",
  "info",
  "positive",
  "warning-medium",
  "warning-heavy",
  "danger",
  "utility",
  "misc",
  "special",
  "link",
  "link-hover",
  "link-visited",
  "link-visited-hover",
  "yandex-red",
  "dark-primary",
  "dark-complementary",
  "dark-secondary",
  "light-primary",
  "light-complementary",
  "light-secondary",
  "light-hint",
  "inverted-primary",
  "inverted-complementary",
  "inverted-secondary",
  "inverted-hint"
];
var colorText = ({ color }, className) => b75({ color }, className);

// node_modules/@gravity-ui/uikit/build/esm/components/Text/Text.js
var Text = (_a) => {
  var { as: Tag = "span", children: children2, variant, className, ellipsis, color, title, titleAttribute, whiteSpace, wordBreak } = _a, rest = __rest(_a, ["as", "children", "variant", "className", "ellipsis", "color", "title", "titleAttribute", "whiteSpace", "wordBreak"]);
  return import_react155.default.createElement(Tag, Object.assign({ className: text({ variant, ellipsis, whiteSpace, wordBreak }, color ? colorText({ color }, className) : className) }, rest, { title: title || titleAttribute }), children2);
};

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToasterSingleton.js
var import_react166 = __toESM(require_react());
var import_react_dom6 = __toESM(require_react_dom());
var import_get4 = __toESM(require_get());

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/utilities/getToastIndex.js
function getToastIndex(toasts, name) {
  return toasts.findIndex((toast) => toast.name === name);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Provider/ToasterProvider.js
var import_react158 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Provider/ToasterContext.js
var import_react156 = __toESM(require_react());
var ToasterContext = import_react156.default.createContext(null);
ToasterContext.displayName = "ToasterContext";

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/utilities/hasToast.js
function hasToast(toasts, name) {
  return getToastIndex(toasts, name) !== -1;
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/utilities/removeToast.js
function removeToast(toasts, name) {
  if (!hasToast(toasts, name)) {
    return toasts;
  }
  return toasts.filter((toast) => toast.name !== name);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Provider/ToastsContext.js
var import_react157 = __toESM(require_react());
var ToastsContext = import_react157.default.createContext([]);
ToastsContext.displayName = "ToastsContext";

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Provider/ToasterProvider.js
var ToasterProvider = import_react158.default.forwardRef(function ToasterProvider2({ children: children2 }, ref) {
  const [toasts, setToasts] = import_react158.default.useState([]);
  const add = import_react158.default.useCallback((toast) => {
    const { name } = toast;
    setToasts((toasts2) => {
      let nextToasts = toasts2;
      if (hasToast(toasts2, name)) {
        nextToasts = removeToast(toasts2, name);
      }
      return [...nextToasts, Object.assign(Object.assign({}, toast), { addedAt: Date.now() })];
    });
  }, []);
  const remove = import_react158.default.useCallback((toastName) => {
    setToasts((toasts2) => {
      return removeToast(toasts2, toastName);
    });
  }, []);
  const removeAll = import_react158.default.useCallback(() => {
    setToasts(() => []);
  }, []);
  const update = import_react158.default.useCallback((toastName, override) => {
    setToasts((toasts2) => {
      if (!hasToast(toasts2, toastName)) {
        return toasts2;
      }
      const index2 = getToastIndex(toasts2, toastName);
      return [
        ...toasts2.slice(0, index2),
        Object.assign(Object.assign(Object.assign({}, toasts2[index2]), override), { isOverride: true }),
        ...toasts2.slice(index2 + 1)
      ];
    });
  }, []);
  const toasterContext = import_react158.default.useMemo(() => {
    return {
      add,
      remove,
      removeAll,
      update
    };
  }, [add, remove, removeAll, update]);
  import_react158.default.useImperativeHandle(ref, () => ({
    add,
    createToast: add,
    remove,
    removeToast: remove,
    removeAll,
    update,
    overrideToast: update
  }));
  return import_react158.default.createElement(
    ToasterContext.Provider,
    { value: toasterContext },
    import_react158.default.createElement(ToastsContext.Provider, { value: toasts }, children2)
  );
});
ToasterProvider.displayName = "ToasterProvider";

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToasterComponent/ToasterComponent.js
var import_react165 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/hooks/useToaster.js
var import_react159 = __toESM(require_react());
function useToaster() {
  const toaster2 = import_react159.default.useContext(ToasterContext);
  if (toaster2 === null) {
    throw new Error("Toaster: `useToaster` hook is used out of context");
  }
  const { add, remove, removeAll, update } = toaster2;
  return import_react159.default.useMemo(() => ({
    add,
    createToast: add,
    remove,
    removeToast: remove,
    removeAll,
    update,
    overrideToast: update
  }), [add, remove, removeAll, update]);
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToastList/ToastList.js
var import_react163 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Toast/Toast.js
var import_react162 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useHover.js
var import_react160 = __toESM(require_react());
function useHover() {
  const [isHovering, setIsHovering] = import_react160.default.useState(false);
  const onMouseEnter = import_react160.default.useCallback(() => {
    setIsHovering(true);
  }, []);
  const onMouseLeave = import_react160.default.useCallback(() => {
    setIsHovering(false);
  }, []);
  return [onMouseEnter, onMouseLeave, isHovering];
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useTimeout.js
var import_react161 = __toESM(require_react());
function useTimeout(callback, ms) {
  import_react161.default.useEffect(() => {
    if (typeof ms !== "number") {
      return;
    }
    const timer = setTimeout(() => {
      callback();
    }, ms);
    return () => {
      clearTimeout(timer);
    };
  }, [callback, ms]);
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useCloseOnTimeout.js
function useCloseOnTimeout({ onClose, timeout: timeout2 }) {
  const [onMouseOver, onMouseLeave, isHovering] = useHover();
  useTimeout(onClose, isHovering ? null : timeout2);
  return { onMouseOver, onMouseLeave };
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/i18n/en.json
var en_default8 = {
  "label_close-button": "Close"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/i18n/ru.json
var ru_default8 = {
  "label_close-button": "Закрыть"
};

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/i18n/index.js
var COMPONENT6 = "Toaster";
var i18n_default7 = registerKeyset({
  en: en_default8,
  ru: ru_default8
}, COMPONENT6);

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Toast/Toast.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Toaster/Toast/Toast.css";
var b76 = block("toast");
var FADE_IN_LAST_ANIMATION_NAME = "toast-display-end";
var FADE_OUT_LAST_ANIMATION_NAME = "toast-hide-end";
var DEFAULT_TIMEOUT2 = 5e3;
var CROSS_ICON_SIZE = 12;
var TITLE_ICONS = {
  info: Info,
  success: Success,
  warning: Alarm,
  error: Alarm
};
var ToastStatus;
(function(ToastStatus2) {
  ToastStatus2["Creating"] = "creating";
  ToastStatus2["ShowingIndents"] = "showing-indents";
  ToastStatus2["ShowingHeight"] = "showing-height";
  ToastStatus2["Hiding"] = "hiding";
  ToastStatus2["Shown"] = "shown";
})(ToastStatus || (ToastStatus = {}));
function getHeight(ref) {
  var _a;
  return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;
}
function useToastHeight({ isOverride, status }) {
  const [height, setHeight] = import_react162.default.useState(void 0);
  const ref = import_react162.default.useRef(null);
  const heightRef = import_react162.default.useRef();
  import_react162.default.useEffect(() => {
    if (status === ToastStatus.ShowingIndents) {
      heightRef.current = getHeight(ref);
    }
  }, [status]);
  import_react162.default.useEffect(() => {
    const height2 = typeof heightRef.current === "number" && !isOverride ? heightRef.current : getHeight(ref);
    setHeight(height2);
  }, [isOverride]);
  const style = {};
  if (height && status !== ToastStatus.ShowingIndents && status !== ToastStatus.Shown) {
    style.height = height;
  }
  return { style, ref };
}
function useToastStatus({ onRemove }) {
  const [status, setStatus] = import_react162.default.useState(ToastStatus.Creating);
  import_react162.default.useEffect(() => {
    if (status === ToastStatus.Creating) {
      setStatus(ToastStatus.ShowingIndents);
    } else if (status === ToastStatus.ShowingIndents) {
      setStatus(ToastStatus.ShowingHeight);
    }
  }, [status]);
  const onFadeInAnimationEnd = (e) => {
    if (e.animationName === FADE_IN_LAST_ANIMATION_NAME) {
      setStatus(ToastStatus.Shown);
    }
  };
  const onFadeOutAnimationEnd = (e) => {
    if (e.animationName === FADE_OUT_LAST_ANIMATION_NAME) {
      onRemove();
    }
  };
  let onAnimationEnd;
  if (status === ToastStatus.ShowingHeight) {
    onAnimationEnd = onFadeInAnimationEnd;
  }
  if (status === ToastStatus.Hiding) {
    onAnimationEnd = onFadeOutAnimationEnd;
  }
  const handleClose = import_react162.default.useCallback(() => {
    setStatus(ToastStatus.Hiding);
  }, []);
  return { status, containerProps: { onAnimationEnd }, handleClose };
}
function renderActions({ actions, onClose }) {
  if (!actions) {
    return null;
  }
  return import_react162.default.createElement("div", { className: b76("actions") }, actions.map(({ label, onClick, view = "outlined", removeAfterClick = true }, index2) => {
    const onActionClick = () => {
      onClick();
      if (removeAfterClick) {
        onClose();
      }
    };
    return import_react162.default.createElement(Button2, { key: `${label}__${index2}`, className: b76("action"), onClick: onActionClick, type: "button", view }, label);
  }));
}
function renderIcon({ type }) {
  if (!type) {
    return null;
  }
  return import_react162.default.createElement(Icon, { data: TITLE_ICONS[type], className: b76("icon", { [type]: true }) });
}
function Toast(props) {
  const { content, actions, title, className, type, allowAutoHiding = true, isClosable = true, isOverride = false, mobile = false } = props;
  const { status, containerProps: statusProps, handleClose } = useToastStatus({ onRemove: props.removeCallback });
  const heightProps = useToastHeight({ isOverride, status });
  const timeout2 = allowAutoHiding ? props.timeout || DEFAULT_TIMEOUT2 : void 0;
  const closeOnTimeoutProps = useCloseOnTimeout({ onClose: handleClose, timeout: timeout2 });
  const mods = {
    mobile,
    appearing: status === ToastStatus.ShowingIndents || status === ToastStatus.ShowingHeight,
    "show-animation": status === ToastStatus.ShowingHeight,
    "hide-animation": status === ToastStatus.Hiding,
    created: status !== ToastStatus.Creating,
    [type || "default"]: true
  };
  return import_react162.default.createElement(
    "div",
    Object.assign({ className: b76(mods, className) }, statusProps, heightProps, closeOnTimeoutProps),
    import_react162.default.createElement(
      "div",
      { className: b76("container") },
      renderIcon({ type }),
      import_react162.default.createElement("h3", { className: b76("title") }, title),
      isClosable && import_react162.default.createElement(
        Button2,
        { view: "flat-secondary", className: b76("btn-close"), onClick: handleClose, extraProps: { "aria-label": i18n_default7("label_close-button") } },
        import_react162.default.createElement(Icon, { data: CrossIcon, size: CROSS_ICON_SIZE })
      ),
      Boolean(content) && import_react162.default.createElement("div", { className: b76("content") }, content),
      renderActions({ actions, onClose: handleClose })
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToastList/ToastList.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToastList/ToastList.css";
function ToastList(props) {
  const { toasts, mobile, removeCallback } = props;
  return import_react163.default.createElement(import_react163.default.Fragment, null, toasts.map((toast) => import_react163.default.createElement(Toast, Object.assign({}, toast, { key: `${toast.name}_${toast.addedAt}`, mobile, removeCallback: () => removeCallback(toast.name) }))));
}

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToasterComponent/ToasterPortal.js
var import_react164 = __toESM(require_react());
var b77 = block("toaster");
function ToasterPortal({ children: children2, className, mobile }) {
  const el = import_react164.default.useRef(typeof document !== "undefined" ? document.createElement("div") : void 0);
  import_react164.default.useEffect(() => {
    const container = el.current;
    if (!container) {
      return;
    }
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  import_react164.default.useEffect(() => {
    if (!el.current) {
      return;
    }
    el.current.className = b77({ mobile }, className);
  }, [className, mobile]);
  return import_react164.default.createElement(Portal, { container: el.current }, children2);
}
ToasterPortal.displayName = "ToasterPortal";

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToasterComponent/ToasterComponent.js
function ToasterComponent({ className, mobile, hasPortal = true }) {
  const [defaultMobile] = useMobile();
  const { remove } = useToaster();
  const list = import_react165.default.useContext(ToastsContext);
  const toaster2 = import_react165.default.createElement(ToastList, { toasts: list, removeCallback: remove, mobile: mobile !== null && mobile !== void 0 ? mobile : defaultMobile });
  if (!hasPortal) {
    return toaster2;
  }
  return import_react165.default.createElement(ToasterPortal, { className: className || "", mobile: mobile !== null && mobile !== void 0 ? mobile : defaultMobile }, toaster2);
}
ToasterComponent.displayName = "ToasterComponent";

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/ToasterSingleton.js
var TOASTER_KEY = Symbol("Toaster instance key");
var bToaster = block("toaster");
var ToasterSingleton = class _ToasterSingleton {
  constructor(args) {
    this._toasts = [];
    this.className = "";
    this.mobile = false;
    this.componentAPI = null;
    this.add = (options) => {
      var _a;
      (_a = this.componentAPI) === null || _a === void 0 ? void 0 : _a.add(options);
    };
    this.remove = (name) => {
      var _a;
      (_a = this.componentAPI) === null || _a === void 0 ? void 0 : _a.remove(name);
    };
    this.removeAll = () => {
      var _a;
      (_a = this.componentAPI) === null || _a === void 0 ? void 0 : _a.removeAll();
    };
    this.update = (name, overrideOptions) => {
      var _a;
      (_a = this.componentAPI) === null || _a === void 0 ? void 0 : _a.update(name, overrideOptions);
    };
    this.createToast = async (toastOptions) => {
      this.add(toastOptions);
    };
    this.removeToast = (name) => {
      this.remove(name);
    };
    this.overrideToast = (name, overrideOptions) => {
      this.update(name, overrideOptions);
    };
    this._getToastIndex = (name) => {
      return getToastIndex(this._toasts, name);
    };
    const additionalClass = (0, import_get4.default)(args, ["additionalClass"], "");
    const className = (0, import_get4.default)(args, ["className"], "");
    const mobile = (0, import_get4.default)(args, ["mobile"], false);
    if (window[TOASTER_KEY] instanceof _ToasterSingleton) {
      const me = window[TOASTER_KEY];
      me.className = className || additionalClass;
      me.mobile = mobile;
      me.setRootNodeClassName();
      return me;
    }
    this.className = additionalClass;
    this.mobile = mobile;
    this._toasts = [];
    this._createRootNode();
    this._render();
    window[TOASTER_KEY] = this;
  }
  // FIXME: BREAKING CHANGE. Rename to "removeToastFromDOM" and convert to private
  /** @deprecated  Will be renamed and converted to private method in te next major */
  _removeToastFromDOM(name) {
    this.remove(name);
  }
  // FIXME: BREAKING CHANGE. Rename to "createRootNode" and convert to private
  /** @deprecated  Will be renamed and converted to private method in te next major */
  _createRootNode() {
    this._rootNode = document.createElement("div");
    this.setRootNodeClassName();
    document.body.appendChild(this._rootNode);
  }
  // FIXME: BREAKING CHANGE. Rename to "render" and convert to private
  /** @deprecated  Will be renamed and converted to private method in te next major */
  _render() {
    import_react_dom6.default.render(import_react166.default.createElement(
      ToasterProvider,
      { ref: (api) => {
        this.componentAPI = api;
      } },
      import_react166.default.createElement(ToasterComponent, { hasPortal: false, mobile: this.mobile })
    ), this._rootNode, () => Promise.resolve());
  }
  destroy() {
    this._toasts = [];
    import_react_dom6.default.unmountComponentAtNode(this._rootNode);
    document.body.removeChild(this._rootNode);
  }
  setRootNodeClassName() {
    this._rootNode.className = bToaster({ mobile: this.mobile }, this.className);
  }
};

// node_modules/@gravity-ui/uikit/build/esm/toaster-singleton.js
var toaster = typeof window === "object" ? new ToasterSingleton() : null;

// node_modules/@gravity-ui/uikit/build/esm/components/Toaster/withToaster.js
var import_react167 = __toESM(require_react());
function withToaster() {
  return function(WrappedComponent) {
    function WithToaster(props) {
      const toaster2 = useToaster();
      return import_react167.default.createElement(WrappedComponent, Object.assign({}, props, { toaster: toaster2 }));
    }
    WithToaster.displayName = `WithToaster(${getComponentName(WrappedComponent)})`;
    return WithToaster;
  };
}

// node_modules/@gravity-ui/uikit/build/esm/components/User/User.js
var import_react169 = __toESM(require_react());

// node_modules/@gravity-ui/uikit/build/esm/components/UserAvatar/UserAvatar.js
var import_react168 = __toESM(require_react());
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/UserAvatar/UserAvatar.css";
var b78 = block("user-avatar");
function UserAvatar({ imgUrl, size: size2 = "m", title, className, onClick }) {
  return import_react168.default.createElement("div", { title, className: b78({ size: size2 }, className), style: {
    backgroundImage: `url(${imgUrl})`
  }, onClick });
}

// node_modules/@gravity-ui/uikit/build/esm/components/User/User.js
import "C:/Users/user/Desktop/ALL_PROJECTS/mpa/app/node_modules/@gravity-ui/uikit/build/esm/components/User/User.css";
var b79 = block("user");
function User({ name, description, imgUrl, size: size2 = "m", className }) {
  const compact = size2 === "xs";
  return import_react169.default.createElement(
    "div",
    { className: b79({ size: size2 }, className) },
    imgUrl && import_react169.default.createElement(UserAvatar, { imgUrl, size: size2, className: b79("avatar") }),
    (name || description) && import_react169.default.createElement(
      "div",
      { className: b79("info") },
      name && import_react169.default.createElement("span", { className: b79("name") }, name),
      !compact && description && import_react169.default.createElement("span", { className: b79("description") }, description)
    )
  );
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/withEventBrokerDomHandlers.js
var import_react170 = __toESM(require_react());
function withEventBrokerDomHandlers(Component4, eventTypes, eventBrokerData) {
  const componentName = getComponentName(Component4);
  const displayName = `withEventBroker(${componentName})`;
  const LoggedComponent = import_react170.default.forwardRef((props, ref) => {
    const decoratedHandlers = eventTypes.reduce((handlers, eventType) => {
      const originalHandler = props[eventType];
      return Object.assign(Object.assign({}, handlers), { [eventType]: (event) => {
        eventBroker.publish(Object.assign({ eventId: eventType.replace(/^on/, "").toLowerCase(), domEvent: event }, eventBrokerData));
        return originalHandler && originalHandler(event);
      } });
    }, {});
    return import_react170.default.createElement(Component4, Object.assign({}, props, decoratedHandlers, { ref }));
  });
  LoggedComponent.displayName = displayName;
  return LoggedComponent;
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useEventBroker.js
var import_react171 = __toESM(require_react());
function useEventBroker(subscription, broker = eventBroker) {
  (0, import_react171.useEffect)(() => {
    broker.subscribe(subscription);
    return () => broker.unsubscribe(subscription);
  }, [broker, subscription]);
}

// node_modules/@gravity-ui/uikit/build/esm/components/utils/useVirtualElementRef.js
var import_react172 = __toESM(require_react());
var initialPosition = { top: 0, right: 0, bottom: 0, left: 0 };
function useVirtualElementRef(props = {}) {
  const { rect, contextElement } = props;
  const rectRef = import_react172.default.useRef(initialPosition);
  const ref = import_react172.default.useRef({
    contextElement,
    getBoundingClientRect() {
      const { top: top2, right: right2, bottom: bottom2, left: left2 } = rectRef.current;
      const width = right2 - left2;
      const height = bottom2 - top2;
      return {
        top: top2,
        right: right2,
        bottom: bottom2,
        left: left2,
        width,
        height
      };
    }
  });
  ref.current.contextElement = contextElement;
  if (rect) {
    const { top: top2 = 0, left: left2 = 0, right: right2 = left2, bottom: bottom2 = top2 } = rect;
    rectRef.current = { top: top2, right: right2, bottom: bottom2, left: left2 };
  } else {
    rectRef.current = initialPosition;
  }
  return ref;
}
export {
  ActionTooltip,
  ArrowToggle,
  Breadcrumbs,
  Button2 as Button,
  Card,
  Checkbox,
  ClipboardButton,
  ClipboardIcon,
  CopyToClipboard,
  CopyToClipboardStatus,
  Dialog,
  DialogBody,
  DialogDivider,
  DialogFooter,
  DialogHeader,
  DropdownMenuExport as DropdownMenu,
  EventBroker,
  FirstDisplayedItemsCount,
  HelpPopover,
  Hotkey,
  Icon,
  Label,
  Lang,
  LastDisplayedItemsCount,
  Link,
  List,
  ListItem,
  ListQa,
  ListWrapper,
  Loader,
  Menu,
  MobileContext,
  MobileProvider,
  Modal,
  Platform,
  Popover,
  PopoverBehavior,
  Popup,
  Portal,
  PortalContext,
  PortalProvider,
  Progress,
  PromoSheet,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  SelectQa,
  ShareList,
  ShareOptions,
  ShareOptions as ShareSocialNetwork,
  ShareTooltip,
  Sheet,
  Skeleton,
  Spin,
  StoreBadge,
  Stories,
  StoriesGroup,
  Switch,
  TEXT_COLORS,
  TEXT_VARIANTS,
  Table,
  TableColumnSetup,
  Tabs,
  TabsDirection,
  Text,
  TextInput,
  ThemeContext,
  ThemeProvider,
  ThemeSettingsContext,
  ThemeValueContext,
  Toast,
  ToasterSingleton as Toaster,
  ToasterComponent,
  ToasterProvider,
  Tooltip,
  User,
  UserAvatar,
  colorText,
  configure,
  eventBroker,
  getComponentName,
  getThemeType,
  listDefaultProps,
  parseHotkeys,
  rootMobileClassName,
  text,
  toaster,
  useBodyScrollLock,
  useEventBroker,
  useLayer,
  useMobile,
  usePlatform,
  usePortalContainer,
  useSelect,
  useTheme,
  useThemeSettings,
  useThemeType,
  useThemeValue,
  useToaster,
  useVirtualElementRef,
  withEventBrokerDomHandlers,
  withMobile,
  withTableActions,
  withTableCopy,
  withTableSelection,
  withTableSettings,
  withTableSorting,
  withTheme,
  withThemeValue,
  withToaster
};
/*! Bundled license information:

bem-cn/lib/index.js:
  (*!
   * bem-cn v3.0.1
   * Friendly BEM class names generator, greate for React
   * @author Alexander Burtsev, https://github.com/albburtsev
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@gravity-ui_uikit.js.map
