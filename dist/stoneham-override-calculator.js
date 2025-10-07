var stonehamOverrideCalculator = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a15, b7) => {
    for (var prop in b7 || (b7 = {}))
      if (__hasOwnProp.call(b7, prop))
        __defNormalProp(a15, prop, b7[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b7)) {
        if (__propIsEnum.call(b7, prop))
          __defNormalProp(a15, prop, b7[prop]);
      }
    return a15;
  };
  var __spreadProps = (a15, b7) => __defProps(a15, __getOwnPropDescs(b7));
  var __restKey = (key) => typeof key === "symbol" ? key : key + "";
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function d(n9, l8) {
    for (var u17 in l8) n9[u17] = l8[u17];
    return n9;
  }
  function g(n9) {
    n9 && n9.parentNode && n9.parentNode.removeChild(n9);
  }
  function _(l8, u17, t9) {
    var i10, r11, o11, e8 = {};
    for (o11 in u17) "key" == o11 ? i10 = u17[o11] : "ref" == o11 ? r11 = u17[o11] : e8[o11] = u17[o11];
    if (arguments.length > 2 && (e8.children = arguments.length > 3 ? n.call(arguments, 2) : t9), "function" == typeof l8 && null != l8.defaultProps) for (o11 in l8.defaultProps) void 0 === e8[o11] && (e8[o11] = l8.defaultProps[o11]);
    return m(l8, e8, i10, r11, null);
  }
  function m(n9, t9, i10, r11, o11) {
    var e8 = { type: n9, props: t9, key: i10, ref: r11, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o11 ? ++u : o11, __i: -1, __u: 0 };
    return null == o11 && null != l.vnode && l.vnode(e8), e8;
  }
  function b() {
    return { current: null };
  }
  function k(n9) {
    return n9.children;
  }
  function x(n9, l8) {
    this.props = n9, this.context = l8;
  }
  function S(n9, l8) {
    if (null == l8) return n9.__ ? S(n9.__, n9.__i + 1) : null;
    for (var u17; l8 < n9.__k.length; l8++) if (null != (u17 = n9.__k[l8]) && null != u17.__e) return u17.__e;
    return "function" == typeof n9.type ? S(n9) : null;
  }
  function C(n9) {
    var l8, u17;
    if (null != (n9 = n9.__) && null != n9.__c) {
      for (n9.__e = n9.__c.base = null, l8 = 0; l8 < n9.__k.length; l8++) if (null != (u17 = n9.__k[l8]) && null != u17.__e) {
        n9.__e = n9.__c.base = u17.__e;
        break;
      }
      return C(n9);
    }
  }
  function M(n9) {
    (!n9.__d && (n9.__d = true) && i.push(n9) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n9, u17, t9, r11, o11, f14, c13, s12 = 1; i.length; ) i.length > s12 && i.sort(e), n9 = i.shift(), s12 = i.length, n9.__d && (t9 = void 0, r11 = void 0, o11 = (r11 = (u17 = n9).__v).__e, f14 = [], c13 = [], u17.__P && ((t9 = d({}, r11)).__v = r11.__v + 1, l.vnode && l.vnode(t9), O(u17.__P, t9, r11, u17.__n, u17.__P.namespaceURI, 32 & r11.__u ? [o11] : null, f14, null == o11 ? S(r11) : o11, !!(32 & r11.__u), c13), t9.__v = r11.__v, t9.__.__k[t9.__i] = t9, N(f14, t9, c13), r11.__e = r11.__ = null, t9.__e != o11 && C(t9)));
    $.__r = 0;
  }
  function I(n9, l8, u17, t9, i10, r11, o11, e8, f14, c13, s12) {
    var a15, h8, y8, w8, d6, g6, _7, m8 = t9 && t9.__k || v, b7 = l8.length;
    for (f14 = P(u17, l8, m8, f14, b7), a15 = 0; a15 < b7; a15++) null != (y8 = u17.__k[a15]) && (h8 = -1 == y8.__i ? p : m8[y8.__i] || p, y8.__i = a15, g6 = O(n9, y8, h8, i10, r11, o11, e8, f14, c13, s12), w8 = y8.__e, y8.ref && h8.ref != y8.ref && (h8.ref && B(h8.ref, null, y8), s12.push(y8.ref, y8.__c || w8, y8)), null == d6 && null != w8 && (d6 = w8), (_7 = !!(4 & y8.__u)) || h8.__k === y8.__k ? f14 = A(y8, f14, n9, _7) : "function" == typeof y8.type && void 0 !== g6 ? f14 = g6 : w8 && (f14 = w8.nextSibling), y8.__u &= -7);
    return u17.__e = d6, f14;
  }
  function P(n9, l8, u17, t9, i10) {
    var r11, o11, e8, f14, c13, s12 = u17.length, a15 = s12, h8 = 0;
    for (n9.__k = new Array(i10), r11 = 0; r11 < i10; r11++) null != (o11 = l8[r11]) && "boolean" != typeof o11 && "function" != typeof o11 ? (f14 = r11 + h8, (o11 = n9.__k[r11] = "string" == typeof o11 || "number" == typeof o11 || "bigint" == typeof o11 || o11.constructor == String ? m(null, o11, null, null, null) : w(o11) ? m(k, { children: o11 }, null, null, null) : null == o11.constructor && o11.__b > 0 ? m(o11.type, o11.props, o11.key, o11.ref ? o11.ref : null, o11.__v) : o11).__ = n9, o11.__b = n9.__b + 1, e8 = null, -1 != (c13 = o11.__i = L(o11, u17, f14, a15)) && (a15--, (e8 = u17[c13]) && (e8.__u |= 2)), null == e8 || null == e8.__v ? (-1 == c13 && (i10 > s12 ? h8-- : i10 < s12 && h8++), "function" != typeof o11.type && (o11.__u |= 4)) : c13 != f14 && (c13 == f14 - 1 ? h8-- : c13 == f14 + 1 ? h8++ : (c13 > f14 ? h8-- : h8++, o11.__u |= 4))) : n9.__k[r11] = null;
    if (a15) for (r11 = 0; r11 < s12; r11++) null != (e8 = u17[r11]) && 0 == (2 & e8.__u) && (e8.__e == t9 && (t9 = S(e8)), D(e8, e8));
    return t9;
  }
  function A(n9, l8, u17, t9) {
    var i10, r11;
    if ("function" == typeof n9.type) {
      for (i10 = n9.__k, r11 = 0; i10 && r11 < i10.length; r11++) i10[r11] && (i10[r11].__ = n9, l8 = A(i10[r11], l8, u17, t9));
      return l8;
    }
    n9.__e != l8 && (t9 && (l8 && n9.type && !l8.parentNode && (l8 = S(n9)), u17.insertBefore(n9.__e, l8 || null)), l8 = n9.__e);
    do {
      l8 = l8 && l8.nextSibling;
    } while (null != l8 && 8 == l8.nodeType);
    return l8;
  }
  function H(n9, l8) {
    return l8 = l8 || [], null == n9 || "boolean" == typeof n9 || (w(n9) ? n9.some(function(n10) {
      H(n10, l8);
    }) : l8.push(n9)), l8;
  }
  function L(n9, l8, u17, t9) {
    var i10, r11, o11, e8 = n9.key, f14 = n9.type, c13 = l8[u17], s12 = null != c13 && 0 == (2 & c13.__u);
    if (null === c13 && null == n9.key || s12 && e8 == c13.key && f14 == c13.type) return u17;
    if (t9 > (s12 ? 1 : 0)) {
      for (i10 = u17 - 1, r11 = u17 + 1; i10 >= 0 || r11 < l8.length; ) if (null != (c13 = l8[o11 = i10 >= 0 ? i10-- : r11++]) && 0 == (2 & c13.__u) && e8 == c13.key && f14 == c13.type) return o11;
    }
    return -1;
  }
  function T(n9, l8, u17) {
    "-" == l8[0] ? n9.setProperty(l8, null == u17 ? "" : u17) : n9[l8] = null == u17 ? "" : "number" != typeof u17 || y.test(l8) ? u17 : u17 + "px";
  }
  function j(n9, l8, u17, t9, i10) {
    var r11, o11;
    n: if ("style" == l8) if ("string" == typeof u17) n9.style.cssText = u17;
    else {
      if ("string" == typeof t9 && (n9.style.cssText = t9 = ""), t9) for (l8 in t9) u17 && l8 in u17 || T(n9.style, l8, "");
      if (u17) for (l8 in u17) t9 && u17[l8] == t9[l8] || T(n9.style, l8, u17[l8]);
    }
    else if ("o" == l8[0] && "n" == l8[1]) r11 = l8 != (l8 = l8.replace(f, "$1")), o11 = l8.toLowerCase(), l8 = o11 in n9 || "onFocusOut" == l8 || "onFocusIn" == l8 ? o11.slice(2) : l8.slice(2), n9.l || (n9.l = {}), n9.l[l8 + r11] = u17, u17 ? t9 ? u17.u = t9.u : (u17.u = c, n9.addEventListener(l8, r11 ? a : s, r11)) : n9.removeEventListener(l8, r11 ? a : s, r11);
    else {
      if ("http://www.w3.org/2000/svg" == i10) l8 = l8.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l8 && "height" != l8 && "href" != l8 && "list" != l8 && "form" != l8 && "tabIndex" != l8 && "download" != l8 && "rowSpan" != l8 && "colSpan" != l8 && "role" != l8 && "popover" != l8 && l8 in n9) try {
        n9[l8] = null == u17 ? "" : u17;
        break n;
      } catch (n10) {
      }
      "function" == typeof u17 || (null == u17 || false === u17 && "-" != l8[4] ? n9.removeAttribute(l8) : n9.setAttribute(l8, "popover" == l8 && 1 == u17 ? "" : u17));
    }
  }
  function F(n9) {
    return function(u17) {
      if (this.l) {
        var t9 = this.l[u17.type + n9];
        if (null == u17.t) u17.t = c++;
        else if (u17.t < t9.u) return;
        return t9(l.event ? l.event(u17) : u17);
      }
    };
  }
  function O(n9, u17, t9, i10, r11, o11, e8, f14, c13, s12) {
    var a15, h8, p10, v6, y8, _7, m8, b7, S8, C10, M6, $5, P7, A7, H6, L6, T8, j10 = u17.type;
    if (null != u17.constructor) return null;
    128 & t9.__u && (c13 = !!(32 & t9.__u), o11 = [f14 = u17.__e = t9.__e]), (a15 = l.__b) && a15(u17);
    n: if ("function" == typeof j10) try {
      if (b7 = u17.props, S8 = "prototype" in j10 && j10.prototype.render, C10 = (a15 = j10.contextType) && i10[a15.__c], M6 = a15 ? C10 ? C10.props.value : a15.__ : i10, t9.__c ? m8 = (h8 = u17.__c = t9.__c).__ = h8.__E : (S8 ? u17.__c = h8 = new j10(b7, M6) : (u17.__c = h8 = new x(b7, M6), h8.constructor = j10, h8.render = E), C10 && C10.sub(h8), h8.props = b7, h8.state || (h8.state = {}), h8.context = M6, h8.__n = i10, p10 = h8.__d = true, h8.__h = [], h8._sb = []), S8 && null == h8.__s && (h8.__s = h8.state), S8 && null != j10.getDerivedStateFromProps && (h8.__s == h8.state && (h8.__s = d({}, h8.__s)), d(h8.__s, j10.getDerivedStateFromProps(b7, h8.__s))), v6 = h8.props, y8 = h8.state, h8.__v = u17, p10) S8 && null == j10.getDerivedStateFromProps && null != h8.componentWillMount && h8.componentWillMount(), S8 && null != h8.componentDidMount && h8.__h.push(h8.componentDidMount);
      else {
        if (S8 && null == j10.getDerivedStateFromProps && b7 !== v6 && null != h8.componentWillReceiveProps && h8.componentWillReceiveProps(b7, M6), !h8.__e && null != h8.shouldComponentUpdate && false === h8.shouldComponentUpdate(b7, h8.__s, M6) || u17.__v == t9.__v) {
          for (u17.__v != t9.__v && (h8.props = b7, h8.state = h8.__s, h8.__d = false), u17.__e = t9.__e, u17.__k = t9.__k, u17.__k.some(function(n10) {
            n10 && (n10.__ = u17);
          }), $5 = 0; $5 < h8._sb.length; $5++) h8.__h.push(h8._sb[$5]);
          h8._sb = [], h8.__h.length && e8.push(h8);
          break n;
        }
        null != h8.componentWillUpdate && h8.componentWillUpdate(b7, h8.__s, M6), S8 && null != h8.componentDidUpdate && h8.__h.push(function() {
          h8.componentDidUpdate(v6, y8, _7);
        });
      }
      if (h8.context = M6, h8.props = b7, h8.__P = n9, h8.__e = false, P7 = l.__r, A7 = 0, S8) {
        for (h8.state = h8.__s, h8.__d = false, P7 && P7(u17), a15 = h8.render(h8.props, h8.state, h8.context), H6 = 0; H6 < h8._sb.length; H6++) h8.__h.push(h8._sb[H6]);
        h8._sb = [];
      } else do {
        h8.__d = false, P7 && P7(u17), a15 = h8.render(h8.props, h8.state, h8.context), h8.state = h8.__s;
      } while (h8.__d && ++A7 < 25);
      h8.state = h8.__s, null != h8.getChildContext && (i10 = d(d({}, i10), h8.getChildContext())), S8 && !p10 && null != h8.getSnapshotBeforeUpdate && (_7 = h8.getSnapshotBeforeUpdate(v6, y8)), L6 = a15, null != a15 && a15.type === k && null == a15.key && (L6 = V(a15.props.children)), f14 = I(n9, w(L6) ? L6 : [L6], u17, t9, i10, r11, o11, e8, f14, c13, s12), h8.base = u17.__e, u17.__u &= -161, h8.__h.length && e8.push(h8), m8 && (h8.__E = h8.__ = null);
    } catch (n10) {
      if (u17.__v = null, c13 || null != o11) if (n10.then) {
        for (u17.__u |= c13 ? 160 : 128; f14 && 8 == f14.nodeType && f14.nextSibling; ) f14 = f14.nextSibling;
        o11[o11.indexOf(f14)] = null, u17.__e = f14;
      } else {
        for (T8 = o11.length; T8--; ) g(o11[T8]);
        z(u17);
      }
      else u17.__e = t9.__e, u17.__k = t9.__k, n10.then || z(u17);
      l.__e(n10, u17, t9);
    }
    else null == o11 && u17.__v == t9.__v ? (u17.__k = t9.__k, u17.__e = t9.__e) : f14 = u17.__e = q(t9.__e, u17, t9, i10, r11, o11, e8, c13, s12);
    return (a15 = l.diffed) && a15(u17), 128 & u17.__u ? void 0 : f14;
  }
  function z(n9) {
    n9 && n9.__c && (n9.__c.__e = true), n9 && n9.__k && n9.__k.forEach(z);
  }
  function N(n9, u17, t9) {
    for (var i10 = 0; i10 < t9.length; i10++) B(t9[i10], t9[++i10], t9[++i10]);
    l.__c && l.__c(u17, n9), n9.some(function(u18) {
      try {
        n9 = u18.__h, u18.__h = [], n9.some(function(n10) {
          n10.call(u18);
        });
      } catch (n10) {
        l.__e(n10, u18.__v);
      }
    });
  }
  function V(n9) {
    return "object" != typeof n9 || null == n9 || n9.__b && n9.__b > 0 ? n9 : w(n9) ? n9.map(V) : d({}, n9);
  }
  function q(u17, t9, i10, r11, o11, e8, f14, c13, s12) {
    var a15, h8, v6, y8, d6, _7, m8, b7 = i10.props, k7 = t9.props, x6 = t9.type;
    if ("svg" == x6 ? o11 = "http://www.w3.org/2000/svg" : "math" == x6 ? o11 = "http://www.w3.org/1998/Math/MathML" : o11 || (o11 = "http://www.w3.org/1999/xhtml"), null != e8) {
      for (a15 = 0; a15 < e8.length; a15++) if ((d6 = e8[a15]) && "setAttribute" in d6 == !!x6 && (x6 ? d6.localName == x6 : 3 == d6.nodeType)) {
        u17 = d6, e8[a15] = null;
        break;
      }
    }
    if (null == u17) {
      if (null == x6) return document.createTextNode(k7);
      u17 = document.createElementNS(o11, x6, k7.is && k7), c13 && (l.__m && l.__m(t9, e8), c13 = false), e8 = null;
    }
    if (null == x6) b7 === k7 || c13 && u17.data == k7 || (u17.data = k7);
    else {
      if (e8 = e8 && n.call(u17.childNodes), b7 = i10.props || p, !c13 && null != e8) for (b7 = {}, a15 = 0; a15 < u17.attributes.length; a15++) b7[(d6 = u17.attributes[a15]).name] = d6.value;
      for (a15 in b7) if (d6 = b7[a15], "children" == a15) ;
      else if ("dangerouslySetInnerHTML" == a15) v6 = d6;
      else if (!(a15 in k7)) {
        if ("value" == a15 && "defaultValue" in k7 || "checked" == a15 && "defaultChecked" in k7) continue;
        j(u17, a15, null, d6, o11);
      }
      for (a15 in k7) d6 = k7[a15], "children" == a15 ? y8 = d6 : "dangerouslySetInnerHTML" == a15 ? h8 = d6 : "value" == a15 ? _7 = d6 : "checked" == a15 ? m8 = d6 : c13 && "function" != typeof d6 || b7[a15] === d6 || j(u17, a15, d6, b7[a15], o11);
      if (h8) c13 || v6 && (h8.__html == v6.__html || h8.__html == u17.innerHTML) || (u17.innerHTML = h8.__html), t9.__k = [];
      else if (v6 && (u17.innerHTML = ""), I("template" == t9.type ? u17.content : u17, w(y8) ? y8 : [y8], t9, i10, r11, "foreignObject" == x6 ? "http://www.w3.org/1999/xhtml" : o11, e8, f14, e8 ? e8[0] : i10.__k && S(i10, 0), c13, s12), null != e8) for (a15 = e8.length; a15--; ) g(e8[a15]);
      c13 || (a15 = "value", "progress" == x6 && null == _7 ? u17.removeAttribute("value") : null != _7 && (_7 !== u17[a15] || "progress" == x6 && !_7 || "option" == x6 && _7 != b7[a15]) && j(u17, a15, _7, b7[a15], o11), a15 = "checked", null != m8 && m8 != u17[a15] && j(u17, a15, m8, b7[a15], o11));
    }
    return u17;
  }
  function B(n9, u17, t9) {
    try {
      if ("function" == typeof n9) {
        var i10 = "function" == typeof n9.__u;
        i10 && n9.__u(), i10 && null == u17 || (n9.__u = n9(u17));
      } else n9.current = u17;
    } catch (n10) {
      l.__e(n10, t9);
    }
  }
  function D(n9, u17, t9) {
    var i10, r11;
    if (l.unmount && l.unmount(n9), (i10 = n9.ref) && (i10.current && i10.current != n9.__e || B(i10, null, u17)), null != (i10 = n9.__c)) {
      if (i10.componentWillUnmount) try {
        i10.componentWillUnmount();
      } catch (n10) {
        l.__e(n10, u17);
      }
      i10.base = i10.__P = null;
    }
    if (i10 = n9.__k) for (r11 = 0; r11 < i10.length; r11++) i10[r11] && D(i10[r11], u17, t9 || "function" != typeof n9.type);
    t9 || g(n9.__e), n9.__c = n9.__ = n9.__e = void 0;
  }
  function E(n9, l8, u17) {
    return this.constructor(n9, u17);
  }
  function G(u17, t9, i10) {
    var r11, o11, e8, f14;
    t9 == document && (t9 = document.documentElement), l.__ && l.__(u17, t9), o11 = (r11 = "function" == typeof i10) ? null : i10 && i10.__k || t9.__k, e8 = [], f14 = [], O(t9, u17 = (!r11 && i10 || t9).__k = _(k, null, [u17]), o11 || p, p, t9.namespaceURI, !r11 && i10 ? [i10] : o11 ? null : t9.firstChild ? n.call(t9.childNodes) : null, e8, !r11 && i10 ? i10 : o11 ? o11.__e : t9.firstChild, r11, f14), N(e8, u17, f14);
  }
  function J(n9, l8) {
    G(n9, l8, J);
  }
  function K(l8, u17, t9) {
    var i10, r11, o11, e8, f14 = d({}, l8.props);
    for (o11 in l8.type && l8.type.defaultProps && (e8 = l8.type.defaultProps), u17) "key" == o11 ? i10 = u17[o11] : "ref" == o11 ? r11 = u17[o11] : f14[o11] = void 0 === u17[o11] && null != e8 ? e8[o11] : u17[o11];
    return arguments.length > 2 && (f14.children = arguments.length > 3 ? n.call(arguments, 2) : t9), m(l8.type, f14, i10 || l8.key, r11 || l8.ref, null);
  }
  function Q(n9) {
    function l8(n10) {
      var u17, t9;
      return this.getChildContext || (u17 = /* @__PURE__ */ new Set(), (t9 = {})[l8.__c] = this, this.getChildContext = function() {
        return t9;
      }, this.componentWillUnmount = function() {
        u17 = null;
      }, this.shouldComponentUpdate = function(n11) {
        this.props.value != n11.value && u17.forEach(function(n12) {
          n12.__e = true, M(n12);
        });
      }, this.sub = function(n11) {
        u17.add(n11);
        var l9 = n11.componentWillUnmount;
        n11.componentWillUnmount = function() {
          u17 && u17.delete(n11), l9 && l9.call(n11);
        };
      }), n10.children;
    }
    return l8.__c = "__cC" + h++, l8.__ = n9, l8.Provider = l8.__l = (l8.Consumer = function(n10, l9) {
      return n10.children(l9);
    }).contextType = l8, l8;
  }
  var n, l, u, t, i, r, o, e, f, c, s, a, h, p, v, y, w;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      p = {};
      v = [];
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      w = Array.isArray;
      n = v.slice, l = { __e: function(n9, l8, u17, t9) {
        for (var i10, r11, o11; l8 = l8.__; ) if ((i10 = l8.__c) && !i10.__) try {
          if ((r11 = i10.constructor) && null != r11.getDerivedStateFromError && (i10.setState(r11.getDerivedStateFromError(n9)), o11 = i10.__d), null != i10.componentDidCatch && (i10.componentDidCatch(n9, t9 || {}), o11 = i10.__d), o11) return i10.__E = i10;
        } catch (l9) {
          n9 = l9;
        }
        throw n9;
      } }, u = 0, t = function(n9) {
        return null != n9 && null == n9.constructor;
      }, x.prototype.setState = function(n9, l8) {
        var u17;
        u17 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n9 && (n9 = n9(d({}, u17), this.props)), n9 && d(u17, n9), null != n9 && this.__v && (l8 && this._sb.push(l8), M(this));
      }, x.prototype.forceUpdate = function(n9) {
        this.__v && (this.__e = true, n9 && this.__h.push(n9), M(this));
      }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n9, l8) {
        return n9.__v.__b - l8.__v.__b;
      }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function p2(n9, t9) {
    c2.__h && c2.__h(r2, n9, o2 || t9), o2 = 0;
    var u17 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n9 >= u17.__.length && u17.__.push({}), u17.__[n9];
  }
  function d2(n9) {
    return o2 = 1, h2(D2, n9);
  }
  function h2(n9, u17, i10) {
    var o11 = p2(t2++, 2);
    if (o11.t = n9, !o11.__c && (o11.__ = [i10 ? i10(u17) : D2(void 0, u17), function(n10) {
      var t9 = o11.__N ? o11.__N[0] : o11.__[0], r11 = o11.t(t9, n10);
      t9 !== r11 && (o11.__N = [r11, o11.__[1]], o11.__c.setState({}));
    }], o11.__c = r2, !r2.__f)) {
      var f14 = function(n10, t9, r11) {
        if (!o11.__c.__H) return true;
        var u18 = o11.__c.__H.__.filter(function(n11) {
          return !!n11.__c;
        });
        if (u18.every(function(n11) {
          return !n11.__N;
        })) return !c13 || c13.call(this, n10, t9, r11);
        var i11 = o11.__c.props !== n10;
        return u18.forEach(function(n11) {
          if (n11.__N) {
            var t10 = n11.__[0];
            n11.__ = n11.__N, n11.__N = void 0, t10 !== n11.__[0] && (i11 = true);
          }
        }), c13 && c13.call(this, n10, t9, r11) || i11;
      };
      r2.__f = true;
      var c13 = r2.shouldComponentUpdate, e8 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n10, t9, r11) {
        if (this.__e) {
          var u18 = c13;
          c13 = void 0, f14(n10, t9, r11), c13 = u18;
        }
        e8 && e8.call(this, n10, t9, r11);
      }, r2.shouldComponentUpdate = f14;
    }
    return o11.__N || o11.__;
  }
  function y2(n9, u17) {
    var i10 = p2(t2++, 3);
    !c2.__s && C2(i10.__H, u17) && (i10.__ = n9, i10.u = u17, r2.__H.__h.push(i10));
  }
  function _2(n9, u17) {
    var i10 = p2(t2++, 4);
    !c2.__s && C2(i10.__H, u17) && (i10.__ = n9, i10.u = u17, r2.__h.push(i10));
  }
  function A2(n9) {
    return o2 = 5, T2(function() {
      return { current: n9 };
    }, []);
  }
  function F2(n9, t9, r11) {
    o2 = 6, _2(function() {
      if ("function" == typeof n9) {
        var r12 = n9(t9());
        return function() {
          n9(null), r12 && "function" == typeof r12 && r12();
        };
      }
      if (n9) return n9.current = t9(), function() {
        return n9.current = null;
      };
    }, null == r11 ? r11 : r11.concat(n9));
  }
  function T2(n9, r11) {
    var u17 = p2(t2++, 7);
    return C2(u17.__H, r11) && (u17.__ = n9(), u17.__H = r11, u17.__h = n9), u17.__;
  }
  function q2(n9, t9) {
    return o2 = 8, T2(function() {
      return n9;
    }, t9);
  }
  function x2(n9) {
    var u17 = r2.context[n9.__c], i10 = p2(t2++, 9);
    return i10.c = n9, u17 ? (null == i10.__ && (i10.__ = true, u17.sub(r2)), u17.props.value) : n9.__;
  }
  function P2(n9, t9) {
    c2.useDebugValue && c2.useDebugValue(t9 ? t9(n9) : n9);
  }
  function b2(n9) {
    var u17 = p2(t2++, 10), i10 = d2();
    return u17.__ = n9, r2.componentDidCatch || (r2.componentDidCatch = function(n10, t9) {
      u17.__ && u17.__(n10, t9), i10[1](n10);
    }), [i10[0], function() {
      i10[1](void 0);
    }];
  }
  function g2() {
    var n9 = p2(t2++, 11);
    if (!n9.__) {
      for (var u17 = r2.__v; null !== u17 && !u17.__m && null !== u17.__; ) u17 = u17.__;
      var i10 = u17.__m || (u17.__m = [0, 0]);
      n9.__ = "P" + i10[0] + "-" + i10[1]++;
    }
    return n9.__;
  }
  function j2() {
    for (var n9; n9 = f2.shift(); ) if (n9.__P && n9.__H) try {
      n9.__H.__h.forEach(z2), n9.__H.__h.forEach(B2), n9.__H.__h = [];
    } catch (t9) {
      n9.__H.__h = [], c2.__e(t9, n9.__v);
    }
  }
  function w2(n9) {
    var t9, r11 = function() {
      clearTimeout(u17), k2 && cancelAnimationFrame(t9), setTimeout(n9);
    }, u17 = setTimeout(r11, 35);
    k2 && (t9 = requestAnimationFrame(r11));
  }
  function z2(n9) {
    var t9 = r2, u17 = n9.__c;
    "function" == typeof u17 && (n9.__c = void 0, u17()), r2 = t9;
  }
  function B2(n9) {
    var t9 = r2;
    n9.__c = n9.__(), r2 = t9;
  }
  function C2(n9, t9) {
    return !n9 || n9.length !== t9.length || t9.some(function(t10, r11) {
      return t10 !== n9[r11];
    });
  }
  function D2(n9, t9) {
    return "function" == typeof t9 ? t9(n9) : t9;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n9) {
        r2 = null, e2 && e2(n9);
      }, c2.__ = function(n9, t9) {
        n9 && t9.__k && t9.__k.__m && (n9.__m = t9.__k.__m), s2 && s2(n9, t9);
      }, c2.__r = function(n9) {
        a2 && a2(n9), t2 = 0;
        var i10 = (r2 = n9.__c).__H;
        i10 && (u2 === r2 ? (i10.__h = [], r2.__h = [], i10.__.forEach(function(n10) {
          n10.__N && (n10.__ = n10.__N), n10.u = n10.__N = void 0;
        })) : (i10.__h.forEach(z2), i10.__h.forEach(B2), i10.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n9) {
        v2 && v2(n9);
        var t9 = n9.__c;
        t9 && t9.__H && (t9.__H.__h.length && (1 !== f2.push(t9) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t9.__H.__.forEach(function(n10) {
          n10.u && (n10.__H = n10.u), n10.u = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n9, t9) {
        t9.some(function(n10) {
          try {
            n10.__h.forEach(z2), n10.__h = n10.__h.filter(function(n11) {
              return !n11.__ || B2(n11);
            });
          } catch (r11) {
            t9.some(function(n11) {
              n11.__h && (n11.__h = []);
            }), t9 = [], c2.__e(r11, n10.__v);
          }
        }), l2 && l2(n9, t9);
      }, c2.unmount = function(n9) {
        m2 && m2(n9);
        var t9, r11 = n9.__c;
        r11 && r11.__H && (r11.__H.__.forEach(function(n10) {
          try {
            z2(n10);
          } catch (n11) {
            t9 = n11;
          }
        }), r11.__H = void 0, t9 && c2.__e(t9, r11.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  var compat_module_exports = {};
  __export(compat_module_exports, {
    Children: () => O2,
    Component: () => x,
    Fragment: () => k,
    PureComponent: () => N2,
    StrictMode: () => Cn,
    Suspense: () => P3,
    SuspenseList: () => B3,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => hn,
    cloneElement: () => _n,
    createContext: () => Q,
    createElement: () => _,
    createFactory: () => dn,
    createPortal: () => $2,
    createRef: () => b,
    default: () => Rn,
    findDOMNode: () => Sn,
    flushSync: () => En,
    forwardRef: () => D3,
    hydrate: () => tn,
    isElement: () => xn,
    isFragment: () => pn,
    isMemo: () => yn,
    isValidElement: () => mn,
    lazy: () => z3,
    memo: () => M2,
    render: () => nn,
    startTransition: () => R,
    unmountComponentAtNode: () => bn,
    unstable_batchedUpdates: () => gn,
    useCallback: () => q2,
    useContext: () => x2,
    useDebugValue: () => P2,
    useDeferredValue: () => w3,
    useEffect: () => y2,
    useErrorBoundary: () => b2,
    useId: () => g2,
    useImperativeHandle: () => F2,
    useInsertionEffect: () => I2,
    useLayoutEffect: () => _2,
    useMemo: () => T2,
    useReducer: () => h2,
    useRef: () => A2,
    useState: () => d2,
    useSyncExternalStore: () => C3,
    useTransition: () => k3,
    version: () => vn
  });
  function g3(n9, t9) {
    for (var e8 in t9) n9[e8] = t9[e8];
    return n9;
  }
  function E2(n9, t9) {
    for (var e8 in n9) if ("__source" !== e8 && !(e8 in t9)) return true;
    for (var r11 in t9) if ("__source" !== r11 && n9[r11] !== t9[r11]) return true;
    return false;
  }
  function C3(n9, t9) {
    var e8 = t9(), r11 = d2({ t: { __: e8, u: t9 } }), u17 = r11[0].t, o11 = r11[1];
    return _2(function() {
      u17.__ = e8, u17.u = t9, x3(u17) && o11({ t: u17 });
    }, [n9, e8, t9]), y2(function() {
      return x3(u17) && o11({ t: u17 }), n9(function() {
        x3(u17) && o11({ t: u17 });
      });
    }, [n9]), e8;
  }
  function x3(n9) {
    var t9, e8, r11 = n9.u, u17 = n9.__;
    try {
      var o11 = r11();
      return !((t9 = u17) === (e8 = o11) && (0 !== t9 || 1 / t9 == 1 / e8) || t9 != t9 && e8 != e8);
    } catch (n10) {
      return true;
    }
  }
  function R(n9) {
    n9();
  }
  function w3(n9) {
    return n9;
  }
  function k3() {
    return [false, R];
  }
  function N2(n9, t9) {
    this.props = n9, this.context = t9;
  }
  function M2(n9, e8) {
    function r11(n10) {
      var t9 = this.props.ref, r12 = t9 == n10.ref;
      return !r12 && t9 && (t9.call ? t9(null) : t9.current = null), e8 ? !e8(this.props, n10) || !r12 : E2(this.props, n10);
    }
    function u17(e9) {
      return this.shouldComponentUpdate = r11, _(n9, e9);
    }
    return u17.displayName = "Memo(" + (n9.displayName || n9.name) + ")", u17.prototype.isReactComponent = true, u17.__f = true, u17.type = n9, u17;
  }
  function D3(n9) {
    function t9(t10) {
      var e8 = g3({}, t10);
      return delete e8.ref, n9(e8, t10.ref || null);
    }
    return t9.$$typeof = A3, t9.render = n9, t9.prototype.isReactComponent = t9.__f = true, t9.displayName = "ForwardRef(" + (n9.displayName || n9.name) + ")", t9;
  }
  function V2(n9, t9, e8) {
    return n9 && (n9.__c && n9.__c.__H && (n9.__c.__H.__.forEach(function(n10) {
      "function" == typeof n10.__c && n10.__c();
    }), n9.__c.__H = null), null != (n9 = g3({}, n9)).__c && (n9.__c.__P === e8 && (n9.__c.__P = t9), n9.__c.__e = true, n9.__c = null), n9.__k = n9.__k && n9.__k.map(function(n10) {
      return V2(n10, t9, e8);
    })), n9;
  }
  function W(n9, t9, e8) {
    return n9 && e8 && (n9.__v = null, n9.__k = n9.__k && n9.__k.map(function(n10) {
      return W(n10, t9, e8);
    }), n9.__c && n9.__c.__P === t9 && (n9.__e && e8.appendChild(n9.__e), n9.__c.__e = true, n9.__c.__P = e8)), n9;
  }
  function P3() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j3(n9) {
    var t9 = n9.__.__c;
    return t9 && t9.__a && t9.__a(n9);
  }
  function z3(n9) {
    var e8, r11, u17;
    function o11(o12) {
      if (e8 || (e8 = n9()).then(function(n10) {
        r11 = n10.default || n10;
      }, function(n10) {
        u17 = n10;
      }), u17) throw u17;
      if (!r11) throw e8;
      return _(r11, o12);
    }
    return o11.displayName = "Lazy", o11.__f = true, o11;
  }
  function B3() {
    this.i = null, this.l = null;
  }
  function Z(n9) {
    return this.getChildContext = function() {
      return n9.context;
    }, n9.children;
  }
  function Y(n9) {
    var e8 = this, r11 = n9.h;
    if (e8.componentWillUnmount = function() {
      G(null, e8.v), e8.v = null, e8.h = null;
    }, e8.h && e8.h !== r11 && e8.componentWillUnmount(), !e8.v) {
      for (var u17 = e8.__v; null !== u17 && !u17.__m && null !== u17.__; ) u17 = u17.__;
      e8.h = r11, e8.v = { nodeType: 1, parentNode: r11, childNodes: [], __k: { __m: u17.__m }, contains: function() {
        return true;
      }, insertBefore: function(n10, t9) {
        this.childNodes.push(n10), e8.h.insertBefore(n10, t9);
      }, removeChild: function(n10) {
        this.childNodes.splice(this.childNodes.indexOf(n10) >>> 1, 1), e8.h.removeChild(n10);
      } };
    }
    G(_(Z, { context: e8.context }, n9.__v), e8.v);
  }
  function $2(n9, e8) {
    var r11 = _(Y, { __v: n9, h: e8 });
    return r11.containerInfo = e8, r11;
  }
  function nn(n9, t9, e8) {
    return null == t9.__k && (t9.textContent = ""), G(n9, t9), "function" == typeof e8 && e8(), n9 ? n9.__c : null;
  }
  function tn(n9, t9, e8) {
    return J(n9, t9), "function" == typeof e8 && e8(), n9 ? n9.__c : null;
  }
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  function dn(n9) {
    return _.bind(null, n9);
  }
  function mn(n9) {
    return !!n9 && n9.$$typeof === q3;
  }
  function pn(n9) {
    return mn(n9) && n9.type === k;
  }
  function yn(n9) {
    return !!n9 && !!n9.displayName && ("string" == typeof n9.displayName || n9.displayName instanceof String) && n9.displayName.startsWith("Memo(");
  }
  function _n(n9) {
    return mn(n9) ? K.apply(null, arguments) : n9;
  }
  function bn(n9) {
    return !!n9.__k && (G(null, n9), true);
  }
  function Sn(n9) {
    return n9 && (n9.base || 1 === n9.nodeType && n9) || null;
  }
  var I2, T3, A3, L2, O2, F3, U, H2, q3, G2, J2, K2, Q2, X, en, ln, cn, fn, an, sn, hn, vn, gn, En, Cn, xn, Rn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      I2 = _2;
      (N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n9, t9) {
        return E2(this.props, n9) || E2(this.state, t9);
      };
      T3 = l.__b;
      l.__b = function(n9) {
        n9.type && n9.type.__f && n9.ref && (n9.props.ref = n9.ref, n9.ref = null), T3 && T3(n9);
      };
      A3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      L2 = function(n9, t9) {
        return null == n9 ? null : H(H(n9).map(t9));
      };
      O2 = { map: L2, forEach: L2, count: function(n9) {
        return n9 ? H(n9).length : 0;
      }, only: function(n9) {
        var t9 = H(n9);
        if (1 !== t9.length) throw "Children.only";
        return t9[0];
      }, toArray: H };
      F3 = l.__e;
      l.__e = function(n9, t9, e8, r11) {
        if (n9.then) {
          for (var u17, o11 = t9; o11 = o11.__; ) if ((u17 = o11.__c) && u17.__c) return null == t9.__e && (t9.__e = e8.__e, t9.__k = e8.__k), u17.__c(n9, t9);
        }
        F3(n9, t9, e8, r11);
      };
      U = l.unmount;
      l.unmount = function(n9) {
        var t9 = n9.__c;
        t9 && t9.__R && t9.__R(), t9 && 32 & n9.__u && (n9.type = null), U && U(n9);
      }, (P3.prototype = new x()).__c = function(n9, t9) {
        var e8 = t9.__c, r11 = this;
        null == r11.o && (r11.o = []), r11.o.push(e8);
        var u17 = j3(r11.__v), o11 = false, i10 = function() {
          o11 || (o11 = true, e8.__R = null, u17 ? u17(l8) : l8());
        };
        e8.__R = i10;
        var l8 = function() {
          if (!--r11.__u) {
            if (r11.state.__a) {
              var n10 = r11.state.__a;
              r11.__v.__k[0] = W(n10, n10.__c.__P, n10.__c.__O);
            }
            var t10;
            for (r11.setState({ __a: r11.__b = null }); t10 = r11.o.pop(); ) t10.forceUpdate();
          }
        };
        r11.__u++ || 32 & t9.__u || r11.setState({ __a: r11.__b = r11.__v.__k[0] }), n9.then(i10, i10);
      }, P3.prototype.componentWillUnmount = function() {
        this.o = [];
      }, P3.prototype.render = function(n9, e8) {
        if (this.__b) {
          if (this.__v.__k) {
            var r11 = document.createElement("div"), o11 = this.__v.__k[0].__c;
            this.__v.__k[0] = V2(this.__b, r11, o11.__O = o11.__P);
          }
          this.__b = null;
        }
        var i10 = e8.__a && _(k, null, n9.fallback);
        return i10 && (i10.__u &= -33), [_(k, null, e8.__a ? null : n9.children), i10];
      };
      H2 = function(n9, t9, e8) {
        if (++e8[1] === e8[0] && n9.l.delete(t9), n9.props.revealOrder && ("t" !== n9.props.revealOrder[0] || !n9.l.size)) for (e8 = n9.i; e8; ) {
          for (; e8.length > 3; ) e8.pop()();
          if (e8[1] < e8[0]) break;
          n9.i = e8 = e8[2];
        }
      };
      (B3.prototype = new x()).__a = function(n9) {
        var t9 = this, e8 = j3(t9.__v), r11 = t9.l.get(n9);
        return r11[0]++, function(u17) {
          var o11 = function() {
            t9.props.revealOrder ? (r11.push(u17), H2(t9, n9, r11)) : u17();
          };
          e8 ? e8(o11) : o11();
        };
      }, B3.prototype.render = function(n9) {
        this.i = null, this.l = /* @__PURE__ */ new Map();
        var t9 = H(n9.children);
        n9.revealOrder && "b" === n9.revealOrder[0] && t9.reverse();
        for (var e8 = t9.length; e8--; ) this.l.set(t9[e8], this.i = [1, 0, this.i]);
        return n9.children;
      }, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
        var n9 = this;
        this.l.forEach(function(t9, e8) {
          H2(n9, e8, t9);
        });
      };
      q3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      K2 = /[A-Z0-9]/g;
      Q2 = "undefined" != typeof document;
      X = function(n9) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n9);
      };
      x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t9) {
        Object.defineProperty(x.prototype, t9, { configurable: true, get: function() {
          return this["UNSAFE_" + t9];
        }, set: function(n9) {
          Object.defineProperty(this, t9, { configurable: true, writable: true, value: n9 });
        } });
      });
      en = l.event;
      l.event = function(n9) {
        return en && (n9 = en(n9)), n9.persist = rn, n9.isPropagationStopped = un, n9.isDefaultPrevented = on, n9.nativeEvent = n9;
      };
      cn = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      fn = l.vnode;
      l.vnode = function(n9) {
        "string" == typeof n9.type && (function(n10) {
          var t9 = n10.props, e8 = n10.type, u17 = {}, o11 = -1 === e8.indexOf("-");
          for (var i10 in t9) {
            var l8 = t9[i10];
            if (!("value" === i10 && "defaultValue" in t9 && null == l8 || Q2 && "children" === i10 && "noscript" === e8 || "class" === i10 || "className" === i10)) {
              var c13 = i10.toLowerCase();
              "defaultValue" === i10 && "value" in t9 && null == t9.value ? i10 = "value" : "download" === i10 && true === l8 ? l8 = "" : "translate" === c13 && "no" === l8 ? l8 = false : "o" === c13[0] && "n" === c13[1] ? "ondoubleclick" === c13 ? i10 = "ondblclick" : "onchange" !== c13 || "input" !== e8 && "textarea" !== e8 || X(t9.type) ? "onfocus" === c13 ? i10 = "onfocusin" : "onblur" === c13 ? i10 = "onfocusout" : J2.test(i10) && (i10 = c13) : c13 = i10 = "oninput" : o11 && G2.test(i10) ? i10 = i10.replace(K2, "-$&").toLowerCase() : null === l8 && (l8 = void 0), "oninput" === c13 && u17[i10 = c13] && (i10 = "oninputCapture"), u17[i10] = l8;
            }
          }
          "select" == e8 && u17.multiple && Array.isArray(u17.value) && (u17.value = H(t9.children).forEach(function(n11) {
            n11.props.selected = -1 != u17.value.indexOf(n11.props.value);
          })), "select" == e8 && null != u17.defaultValue && (u17.value = H(t9.children).forEach(function(n11) {
            n11.props.selected = u17.multiple ? -1 != u17.defaultValue.indexOf(n11.props.value) : u17.defaultValue == n11.props.value;
          })), t9.class && !t9.className ? (u17.class = t9.class, Object.defineProperty(u17, "className", cn)) : (t9.className && !t9.class || t9.class && t9.className) && (u17.class = u17.className = t9.className), n10.props = u17;
        })(n9), n9.$$typeof = q3, fn && fn(n9);
      };
      an = l.__r;
      l.__r = function(n9) {
        an && an(n9), ln = n9.__c;
      };
      sn = l.diffed;
      l.diffed = function(n9) {
        sn && sn(n9);
        var t9 = n9.props, e8 = n9.__e;
        null != e8 && "textarea" === n9.type && "value" in t9 && t9.value !== e8.value && (e8.value = null == t9.value ? "" : t9.value), ln = null;
      };
      hn = { ReactCurrentDispatcher: { current: { readContext: function(n9) {
        return ln.__n[n9.__c].props.value;
      }, useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: w3, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: I2, useLayoutEffect: _2, useMemo: T2, useReducer: h2, useRef: A2, useState: d2, useSyncExternalStore: C3, useTransition: k3 } } };
      vn = "18.3.1";
      gn = function(n9, t9) {
        return n9(t9);
      };
      En = function(n9, t9) {
        return n9(t9);
      };
      Cn = k;
      xn = mn;
      Rn = { useState: d2, useId: g2, useReducer: h2, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: R, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: _, createContext: Q, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
  var require_use_sync_external_store_with_selector_development = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
      "use strict";
      (function() {
        function is(x6, y8) {
          return x6 === y8 && (0 !== x6 || 1 / x6 === 1 / y8) || x6 !== x6 && y8 !== y8;
        }
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
        var React = (init_compat_module(), __toCommonJS(compat_module_exports)), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
        exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef(null);
          if (null === instRef.current) {
            var inst = { hasValue: false, value: null };
            instRef.current = inst;
          } else inst = instRef.current;
          instRef = useMemo(
            function() {
              function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                  hasMemo = true;
                  memoizedSnapshot = nextSnapshot;
                  nextSnapshot = selector(nextSnapshot);
                  if (void 0 !== isEqual && inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, nextSnapshot))
                      return memoizedSelection = currentSelection;
                  }
                  return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot))
                  return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                  return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
              }
              var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
              return [
                function() {
                  return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                  return memoizedSelector(maybeGetServerSnapshot());
                }
              ];
            },
            [getSnapshot, getServerSnapshot, selector, isEqual]
          );
          var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
          useEffect(
            function() {
              inst.hasValue = true;
              inst.value = value;
            },
            [value]
          );
          useDebugValue(value);
          return value;
        };
        "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
      })();
    }
  });

  // node_modules/use-sync-external-store/with-selector.js
  var require_with_selector = __commonJS({
    "node_modules/use-sync-external-store/with-selector.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_use_sync_external_store_with_selector_development();
      }
    }
  });

  // src/index.tsx
  var index_exports = {};
  __export(index_exports, {
    renderCalculator: () => renderCalculator
  });
  init_preact_module();

  // node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
  init_compat_module();
  var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, Rn).useLayoutEffect : () => {
  };

  // node_modules/@react-aria/utils/dist/useEffectEvent.mjs
  init_compat_module();
  var $8ae05eaa5c114e9c$var$_React_useInsertionEffect;
  var $8ae05eaa5c114e9c$var$useEarlyEffect = ($8ae05eaa5c114e9c$var$_React_useInsertionEffect = (0, Rn)["useInsertionEffect"]) !== null && $8ae05eaa5c114e9c$var$_React_useInsertionEffect !== void 0 ? $8ae05eaa5c114e9c$var$_React_useInsertionEffect : (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
  function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn2) {
    const ref = (0, A2)(null);
    $8ae05eaa5c114e9c$var$useEarlyEffect(() => {
      ref.current = fn2;
    }, [
      fn2
    ]);
    return (0, q2)((...args) => {
      const f14 = ref.current;
      return f14 === null || f14 === void 0 ? void 0 : f14(...args);
    }, []);
  }

  // node_modules/@react-aria/utils/dist/domHelpers.mjs
  var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
  };
  var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
    if (el && "window" in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
  };
  function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
  }
  function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
  }

  // node_modules/@react-stately/flags/dist/import.mjs
  var $f4e2df6bd15f8569$var$_shadowDOM = false;
  function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
  }

  // node_modules/@react-aria/utils/dist/DOMFunctions.mjs
  function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while (currentNode !== null) {
      if (currentNode === node) return true;
      if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
        currentNode = currentNode.assignedSlot.parentNode;
      else if ((0, $431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode))
        currentNode = currentNode.host;
      else currentNode = currentNode.parentNode;
    }
    return false;
  }
  var $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
    var _activeElement_shadowRoot;
    if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement2 = doc.activeElement;
    while (activeElement2 && "shadowRoot" in activeElement2 && ((_activeElement_shadowRoot = activeElement2.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement2 = activeElement2.shadowRoot.activeElement;
    return activeElement2;
  };
  function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if ((0, $f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
      if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
  }

  // node_modules/@react-aria/utils/dist/platform.mjs
  function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    let brands = (_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands;
    return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
  }
  function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
  }
  function $c87311424ea30a05$var$cached(fn2) {
    if (false) return fn2;
    let res = null;
    return () => {
      if (res == null) res = fn2();
      return res;
    };
  }
  var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
  });
  var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
  });
  var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
  });
  var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
  });
  var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
  });
  var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
  });
  var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
  });
  var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
  });
  var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
  });

  // node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
  init_compat_module();
  function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, A2)(/* @__PURE__ */ new Map());
    let addGlobalListener = (0, q2)((eventTarget, type, listener, options) => {
      let fn2 = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
        globalListeners.current.delete(listener);
        listener(...args);
      } : listener;
      globalListeners.current.set(listener, {
        type,
        eventTarget,
        fn: fn2,
        options
      });
      eventTarget.addEventListener(type, fn2, options);
    }, []);
    let removeGlobalListener = (0, q2)((eventTarget, type, listener, options) => {
      var _globalListeners_current_get;
      let fn2 = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
      eventTarget.removeEventListener(type, fn2, options);
      globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, q2)(() => {
      globalListeners.current.forEach((value, key) => {
        removeGlobalListener(value.eventTarget, value.type, key, value.options);
      });
    }, [
      removeGlobalListener
    ]);
    (0, y2)(() => {
      return removeAllGlobalListeners;
    }, [
      removeAllGlobalListeners
    ]);
    return {
      addGlobalListener,
      removeGlobalListener,
      removeAllGlobalListeners
    };
  }

  // node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
  function $6a7db85432448f7f$export$60278871457622de(event) {
    if (event.pointerType === "" && event.isTrusted) return true;
    if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
  }

  // node_modules/@react-aria/interactions/dist/utils.mjs
  init_compat_module();
  function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = () => event.defaultPrevented;
    event.isPropagationStopped = () => event.cancelBubble;
    event.persist = () => {
    };
    return event;
  }
  function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, "target", {
      value: target
    });
    Object.defineProperty(event, "currentTarget", {
      value: target
    });
  }
  function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, A2)({
      isFocused: false,
      observer: null
    });
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
      const state = stateRef.current;
      return () => {
        if (state.observer) {
          state.observer.disconnect();
          state.observer = null;
        }
      };
    }, []);
    let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e8);
    });
    return (0, q2)((e8) => {
      if (e8.target instanceof HTMLButtonElement || e8.target instanceof HTMLInputElement || e8.target instanceof HTMLTextAreaElement || e8.target instanceof HTMLSelectElement) {
        stateRef.current.isFocused = true;
        let target = e8.target;
        let onBlurHandler = (e9) => {
          stateRef.current.isFocused = false;
          if (target.disabled) {
            let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e9);
            dispatchBlur(event);
          }
          if (stateRef.current.observer) {
            stateRef.current.observer.disconnect();
            stateRef.current.observer = null;
          }
        };
        target.addEventListener("focusout", onBlurHandler, {
          once: true
        });
        stateRef.current.observer = new MutationObserver(() => {
          if (stateRef.current.isFocused && target.disabled) {
            var _stateRef_current_observer;
            (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
            let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
            target.dispatchEvent(new FocusEvent("blur", {
              relatedTarget: relatedTargetEl
            }));
            target.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true,
              relatedTarget: relatedTargetEl
            }));
          }
        });
        stateRef.current.observer.observe(target, {
          attributes: true,
          attributeFilter: [
            "disabled"
          ]
        });
      }
    }, [
      dispatchBlur
    ]);
  }
  var $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;

  // node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
  init_compat_module();
  var $507fabe10e71c6fb$var$currentModality = null;
  var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
  var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
  var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
  };
  function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e8) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e8);
  }
  function $507fabe10e71c6fb$var$isValidKey(e8) {
    return !(e8.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e8.altKey || e8.ctrlKey || e8.key === "Control" || e8.key === "Shift" || e8.key === "Meta");
  }
  function $507fabe10e71c6fb$var$handleKeyboardEvent(e8) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e8)) {
      $507fabe10e71c6fb$var$currentModality = "keyboard";
      $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e8);
    }
  }
  function $507fabe10e71c6fb$var$handlePointerEvent(e8) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    if (e8.type === "mousedown" || e8.type === "pointerdown") {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e8);
    }
  }
  function $507fabe10e71c6fb$var$handleClickEvent(e8) {
    if ((0, $6a7db85432448f7f$export$60278871457622de)(e8)) {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      $507fabe10e71c6fb$var$currentModality = "virtual";
    }
  }
  function $507fabe10e71c6fb$var$handleFocusEvent(e8) {
    if (e8.target === window || e8.target === document || (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e8.isTrusted) return;
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
      $507fabe10e71c6fb$var$currentModality = "virtual";
      $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e8);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  }
  function $507fabe10e71c6fb$var$handleWindowBlur() {
    if (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
  }
  function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === "undefined" || typeof document === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
    const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      focus.apply(this, arguments);
    };
    documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (false) {
      documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    windowObject.addEventListener("beforeunload", () => {
      $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
      once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
      focus
    });
  }
  var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
    const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
    if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (false) {
      documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
  };
  function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
    let loadListener;
    if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
      loadListener = () => {
        $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
      };
      documentObject.addEventListener("DOMContentLoaded", loadListener);
    }
    return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
  }
  if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
  function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
  }
  var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e8) {
    let document1 = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8 === null || e8 === void 0 ? void 0 : e8.target);
    const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).KeyboardEvent : KeyboardEvent;
    isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
    return !(isTextInput && modality === "keyboard" && e8 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e8.key]);
  }
  function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn2, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, y2)(() => {
      let handler = (modality, e8) => {
        if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e8)) return;
        fn2($507fabe10e71c6fb$export$b9b3dfddab17db27());
      };
      $507fabe10e71c6fb$var$changeHandlers.add(handler);
      return () => {
        $507fabe10e71c6fb$var$changeHandlers.delete(handler);
      };
    }, deps);
  }

  // node_modules/@react-aria/interactions/dist/useFocus.mjs
  init_compat_module();
  function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
    const onBlur = (0, q2)((e8) => {
      if (e8.target === e8.currentTarget) {
        if (onBlurProp) onBlurProp(e8);
        if (onFocusChange) onFocusChange(false);
        return true;
      }
    }, [
      onBlurProp,
      onFocusChange
    ]);
    const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, q2)((e8) => {
      const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
      const activeElement2 = ownerDocument ? (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)();
      if (e8.target === e8.currentTarget && activeElement2 === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) {
        if (onFocusProp) onFocusProp(e8);
        if (onFocusChange) onFocusChange(true);
        onSyntheticFocus(e8);
      }
    }, [
      onFocusChange,
      onFocusProp,
      onSyntheticFocus
    ]);
    return {
      focusProps: {
        onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
        onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
      }
    };
  }

  // node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
  init_compat_module();
  function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
    let state = (0, A2)({
      isFocusWithin: false
    });
    let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let onBlur = (0, q2)((e8) => {
      if (!e8.currentTarget.contains(e8.target)) return;
      if (state.current.isFocusWithin && !e8.currentTarget.contains(e8.relatedTarget)) {
        state.current.isFocusWithin = false;
        removeAllGlobalListeners();
        if (onBlurWithin) onBlurWithin(e8);
        if (onFocusWithinChange) onFocusWithinChange(false);
      }
    }, [
      onBlurWithin,
      onFocusWithinChange,
      state,
      removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, q2)((e8) => {
      if (!e8.currentTarget.contains(e8.target)) return;
      const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
      const activeElement2 = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
      if (!state.current.isFocusWithin && activeElement2 === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) {
        if (onFocusWithin) onFocusWithin(e8);
        if (onFocusWithinChange) onFocusWithinChange(true);
        state.current.isFocusWithin = true;
        onSyntheticFocus(e8);
        let currentTarget = e8.currentTarget;
        addGlobalListener(ownerDocument, "focus", (e9) => {
          if (state.current.isFocusWithin && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e9.target)) {
            let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
              relatedTarget: e9.target
            });
            (0, $8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
            let event = (0, $8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
            onBlur(event);
          }
        }, {
          capture: true
        });
      }
    }, [
      onFocusWithin,
      onFocusWithinChange,
      onSyntheticFocus,
      addGlobalListener,
      onBlur
    ]);
    if (isDisabled) return {
      focusWithinProps: {
        // These cannot be null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
    return {
      focusWithinProps: {
        onFocus,
        onBlur
      }
    };
  }

  // node_modules/@react-aria/interactions/dist/useHover.mjs
  init_compat_module();
  var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  var $6179b936705e76d3$var$hoverCount = 0;
  function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    setTimeout(() => {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
  }
  function $6179b936705e76d3$var$handleGlobalPointerEvent(e8) {
    if (e8.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
  }
  function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if ($6179b936705e76d3$var$hoverCount === 0) {
      if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
      else if (false) document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    }
    $6179b936705e76d3$var$hoverCount++;
    return () => {
      $6179b936705e76d3$var$hoverCount--;
      if ($6179b936705e76d3$var$hoverCount > 0) return;
      if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
      else if (false) document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
  }
  function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
    let [isHovered, setHovered] = (0, d2)(false);
    let state = (0, A2)({
      isHovered: false,
      ignoreEmulatedMouseEvents: false,
      pointerType: "",
      target: null
    }).current;
    (0, y2)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let { hoverProps, triggerHoverEnd } = (0, T2)(() => {
      let triggerHoverStart = (event, pointerType) => {
        state.pointerType = pointerType;
        if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
        state.isHovered = true;
        let target = event.currentTarget;
        state.target = target;
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(event.target), "pointerover", (e8) => {
          if (state.isHovered && state.target && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, e8.target)) triggerHoverEnd2(e8, e8.pointerType);
        }, {
          capture: true
        });
        if (onHoverStart) onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(true);
        setHovered(true);
      };
      let triggerHoverEnd2 = (event, pointerType) => {
        let target = state.target;
        state.pointerType = "";
        state.target = null;
        if (pointerType === "touch" || !state.isHovered || !target) return;
        state.isHovered = false;
        removeAllGlobalListeners();
        if (onHoverEnd) onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(false);
        setHovered(false);
      };
      let hoverProps2 = {};
      if (typeof PointerEvent !== "undefined") {
        hoverProps2.onPointerEnter = (e8) => {
          if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e8.pointerType === "mouse") return;
          triggerHoverStart(e8, e8.pointerType);
        };
        hoverProps2.onPointerLeave = (e8) => {
          if (!isDisabled && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, e8.pointerType);
        };
      } else if (false) {
        hoverProps2.onTouchStart = () => {
          state.ignoreEmulatedMouseEvents = true;
        };
        hoverProps2.onMouseEnter = (e8) => {
          if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e8, "mouse");
          state.ignoreEmulatedMouseEvents = false;
        };
        hoverProps2.onMouseLeave = (e8) => {
          if (!isDisabled && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, "mouse");
        };
      }
      return {
        hoverProps: hoverProps2,
        triggerHoverEnd: triggerHoverEnd2
      };
    }, [
      onHoverStart,
      onHoverChange,
      onHoverEnd,
      isDisabled,
      state,
      addGlobalListener,
      removeAllGlobalListeners
    ]);
    (0, y2)(() => {
      if (isDisabled) triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
    }, [
      isDisabled
    ]);
    return {
      hoverProps,
      isHovered
    };
  }

  // node_modules/@react-aria/focus/dist/useFocusRing.mjs
  init_compat_module();
  function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus = false, isTextInput, within } = props;
    let state = (0, A2)({
      isFocused: false,
      isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (0, d2)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, d2)(() => state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, q2)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, q2)((isFocused2) => {
      state.current.isFocused = isFocused2;
      setFocused(isFocused2);
      updateState();
    }, [
      updateState
    ]);
    (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
      state.current.isFocusVisible = isFocusVisible;
      updateState();
    }, [], {
      isTextInput
    });
    let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
      isDisabled: within,
      onFocusChange
    });
    let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
      isDisabled: !within,
      onFocusWithinChange: onFocusChange
    });
    return {
      isFocused,
      isFocusVisible: isFocusVisibleState,
      focusProps: within ? focusWithinProps : focusProps
    };
  }

  // node_modules/@headlessui/react/dist/hooks/use-active-press.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/env.js
  var i3 = Object.defineProperty;
  var d3 = (t9, e8, n9) => e8 in t9 ? i3(t9, e8, { enumerable: true, configurable: true, writable: true, value: n9 }) : t9[e8] = n9;
  var r3 = (t9, e8, n9) => (d3(t9, typeof e8 != "symbol" ? e8 + "" : e8, n9), n9);
  var o3 = class {
    constructor() {
      r3(this, "current", this.detect());
      r3(this, "handoffState", "pending");
      r3(this, "currentId", 0);
    }
    set(e8) {
      this.current !== e8 && (this.handoffState = "pending", this.currentId = 0, this.current = e8);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  };
  var s3 = new o3();

  // node_modules/@headlessui/react/dist/utils/owner.js
  function l3(n9) {
    var u17;
    return s3.isServer ? null : n9 == null ? document : (u17 = n9 == null ? void 0 : n9.ownerDocument) != null ? u17 : document;
  }
  function r4(n9) {
    var u17, o11;
    return s3.isServer ? null : n9 == null ? document : (o11 = (u17 = n9 == null ? void 0 : n9.getRootNode) == null ? void 0 : u17.call(n9)) != null ? o11 : document;
  }
  function e3(n9) {
    var u17, o11;
    return (o11 = (u17 = r4(n9)) == null ? void 0 : u17.activeElement) != null ? o11 : null;
  }
  function d4(n9) {
    return e3(n9) === n9;
  }

  // node_modules/@headlessui/react/dist/hooks/use-disposables.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/micro-task.js
  function t3(e8) {
    typeof queueMicrotask == "function" ? queueMicrotask(e8) : Promise.resolve().then(e8).catch((o11) => setTimeout(() => {
      throw o11;
    }));
  }

  // node_modules/@headlessui/react/dist/utils/disposables.js
  function o4() {
    let s12 = [], r11 = { addEventListener(e8, t9, n9, i10) {
      return e8.addEventListener(t9, n9, i10), r11.add(() => e8.removeEventListener(t9, n9, i10));
    }, requestAnimationFrame(...e8) {
      let t9 = requestAnimationFrame(...e8);
      return r11.add(() => cancelAnimationFrame(t9));
    }, nextFrame(...e8) {
      return r11.requestAnimationFrame(() => r11.requestAnimationFrame(...e8));
    }, setTimeout(...e8) {
      let t9 = setTimeout(...e8);
      return r11.add(() => clearTimeout(t9));
    }, microTask(...e8) {
      let t9 = { current: true };
      return t3(() => {
        t9.current && e8[0]();
      }), r11.add(() => {
        t9.current = false;
      });
    }, style(e8, t9, n9) {
      let i10 = e8.style.getPropertyValue(t9);
      return Object.assign(e8.style, { [t9]: n9 }), this.add(() => {
        Object.assign(e8.style, { [t9]: i10 });
      });
    }, group(e8) {
      let t9 = o4();
      return e8(t9), this.add(() => t9.dispose());
    }, add(e8) {
      return s12.includes(e8) || s12.push(e8), () => {
        let t9 = s12.indexOf(e8);
        if (t9 >= 0) for (let n9 of s12.splice(t9, 1)) n9();
      };
    }, dispose() {
      for (let e8 of s12.splice(0)) e8();
    } };
    return r11;
  }

  // node_modules/@headlessui/react/dist/hooks/use-disposables.js
  function p3() {
    let [e8] = d2(o4);
    return y2(() => () => e8.dispose(), [e8]), e8;
  }

  // node_modules/@headlessui/react/dist/hooks/use-event.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-latest-value.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
  init_compat_module();
  var n2 = (e8, t9) => {
    s3.isServer ? y2(e8, t9) : _2(e8, t9);
  };

  // node_modules/@headlessui/react/dist/hooks/use-latest-value.js
  function s4(e8) {
    let r11 = A2(e8);
    return n2(() => {
      r11.current = e8;
    }, [e8]), r11;
  }

  // node_modules/@headlessui/react/dist/hooks/use-event.js
  var o5 = function(t9) {
    let e8 = s4(t9);
    return Rn.useCallback((...r11) => e8.current(...r11), [e8]);
  };

  // node_modules/@headlessui/react/dist/hooks/use-active-press.js
  function E3(e8) {
    let t9 = e8.width / 2, n9 = e8.height / 2;
    return { top: e8.clientY - n9, right: e8.clientX + t9, bottom: e8.clientY + n9, left: e8.clientX - t9 };
  }
  function P4(e8, t9) {
    return !(!e8 || !t9 || e8.right < t9.left || e8.left > t9.right || e8.bottom < t9.top || e8.top > t9.bottom);
  }
  function w4({ disabled: e8 = false } = {}) {
    let t9 = A2(null), [n9, l8] = d2(false), r11 = p3(), o11 = o5(() => {
      t9.current = null, l8(false), r11.dispose();
    }), f14 = o5((s12) => {
      if (r11.dispose(), t9.current === null) {
        t9.current = s12.currentTarget, l8(true);
        {
          let i10 = l3(s12.currentTarget);
          r11.addEventListener(i10, "pointerup", o11, false), r11.addEventListener(i10, "pointermove", (c13) => {
            if (t9.current) {
              let p10 = E3(c13);
              l8(P4(p10, t9.current.getBoundingClientRect()));
            }
          }, false), r11.addEventListener(i10, "pointercancel", o11, false);
        }
      }
    });
    return { pressed: n9, pressProps: e8 ? {} : { onPointerDown: f14, onPointerUp: o11, onClick: o11 } };
  }

  // node_modules/@headlessui/react/dist/hooks/use-slot.js
  init_compat_module();
  function n3(e8) {
    return T2(() => e8, Object.values(e8));
  }

  // node_modules/@headlessui/react/dist/internal/disabled.js
  init_compat_module();
  var e4 = Q(void 0);
  function a3() {
    return x2(e4);
  }

  // node_modules/@headlessui/react/dist/utils/render.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/class-names.js
  function t4(...r11) {
    return Array.from(new Set(r11.flatMap((n9) => typeof n9 == "string" ? n9.split(" ") : []))).filter(Boolean).join(" ");
  }

  // node_modules/@headlessui/react/dist/utils/match.js
  function u3(r11, n9, ...a15) {
    if (r11 in n9) {
      let e8 = n9[r11];
      return typeof e8 == "function" ? e8(...a15) : e8;
    }
    let t9 = new Error('Tried to handle "'.concat(r11, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n9).map((e8) => '"'.concat(e8, '"')).join(", "), "."));
    throw Error.captureStackTrace && Error.captureStackTrace(t9, u3), t9;
  }

  // node_modules/@headlessui/react/dist/utils/render.js
  var A4 = ((a15) => (a15[a15.None = 0] = "None", a15[a15.RenderStrategy = 1] = "RenderStrategy", a15[a15.Static = 2] = "Static", a15))(A4 || {});
  var C4 = ((e8) => (e8[e8.Unmount = 0] = "Unmount", e8[e8.Hidden = 1] = "Hidden", e8))(C4 || {});
  function K3() {
    let n9 = $3();
    return q2((r11) => U2(__spreadValues({ mergeRefs: n9 }, r11)), [n9]);
  }
  function U2({ ourProps: n9, theirProps: r11, slot: e8, defaultTag: a15, features: s12, visible: t9 = true, name: l8, mergeRefs: i10 }) {
    i10 = i10 != null ? i10 : I3;
    let o11 = P5(r11, n9);
    if (t9) return F4(o11, e8, a15, l8, i10);
    let y8 = s12 != null ? s12 : 0;
    if (y8 & 2) {
      let _a = o11, { static: f14 = false } = _a, u17 = __objRest(_a, ["static"]);
      if (f14) return F4(u17, e8, a15, l8, i10);
    }
    if (y8 & 1) {
      let _b = o11, { unmount: f14 = true } = _b, u17 = __objRest(_b, ["unmount"]);
      return u3(f14 ? 0 : 1, { [0]() {
        return null;
      }, [1]() {
        return F4(__spreadProps(__spreadValues({}, u17), { hidden: true, style: { display: "none" } }), e8, a15, l8, i10);
      } });
    }
    return F4(o11, e8, a15, l8, i10);
  }
  function F4(n9, r11 = {}, e8, a15, s12) {
    let _a = h3(n9, ["unmount", "static"]), { as: t9 = e8, children: l8, refName: i10 = "ref" } = _a, o11 = __objRest(_a, ["as", "children", "refName"]), y8 = n9.ref !== void 0 ? { [i10]: n9.ref } : {}, f14 = typeof l8 == "function" ? l8(r11) : l8;
    "className" in o11 && o11.className && typeof o11.className == "function" && (o11.className = o11.className(r11)), o11["aria-labelledby"] && o11["aria-labelledby"] === o11.id && (o11["aria-labelledby"] = void 0);
    let u17 = {};
    if (r11) {
      let d6 = false, p10 = [];
      for (let [c13, T8] of Object.entries(r11)) typeof T8 == "boolean" && (d6 = true), T8 === true && p10.push(c13.replace(/([A-Z])/g, (g6) => "-".concat(g6.toLowerCase())));
      if (d6) {
        u17["data-headlessui-state"] = p10.join(" ");
        for (let c13 of p10) u17["data-".concat(c13)] = "";
      }
    }
    if (b3(t9) && (Object.keys(m3(o11)).length > 0 || Object.keys(m3(u17)).length > 0)) if (!mn(f14) || Array.isArray(f14) && f14.length > 1 || D4(f14)) {
      if (Object.keys(m3(o11)).length > 0) throw new Error(['Passing props on "Fragment"!', "", "The current component <".concat(a15, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(m3(o11)).concat(Object.keys(m3(u17))).map((d6) => "  - ".concat(d6)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d6) => "  - ".concat(d6)).join("\n")].join("\n"));
    } else {
      let d6 = f14.props, p10 = d6 == null ? void 0 : d6.className, c13 = typeof p10 == "function" ? (...R2) => t4(p10(...R2), o11.className) : t4(p10, o11.className), T8 = c13 ? { className: c13 } : {}, g6 = P5(f14.props, m3(h3(o11, ["ref"])));
      for (let R2 in u17) R2 in g6 && delete u17[R2];
      return _n(f14, Object.assign({}, g6, u17, y8, { ref: s12(H3(f14), y8.ref) }, T8));
    }
    return _(t9, Object.assign({}, h3(o11, ["ref"]), !b3(t9) && y8, !b3(t9) && u17), f14);
  }
  function $3() {
    let n9 = A2([]), r11 = q2((e8) => {
      for (let a15 of n9.current) a15 != null && (typeof a15 == "function" ? a15(e8) : a15.current = e8);
    }, []);
    return (...e8) => {
      if (!e8.every((a15) => a15 == null)) return n9.current = e8, r11;
    };
  }
  function I3(...n9) {
    return n9.every((r11) => r11 == null) ? void 0 : (r11) => {
      for (let e8 of n9) e8 != null && (typeof e8 == "function" ? e8(r11) : e8.current = r11);
    };
  }
  function P5(...n9) {
    var a15;
    if (n9.length === 0) return {};
    if (n9.length === 1) return n9[0];
    let r11 = {}, e8 = {};
    for (let s12 of n9) for (let t9 in s12) t9.startsWith("on") && typeof s12[t9] == "function" ? ((a15 = e8[t9]) != null || (e8[t9] = []), e8[t9].push(s12[t9])) : r11[t9] = s12[t9];
    if (r11.disabled || r11["aria-disabled"]) for (let s12 in e8) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s12) && (e8[s12] = [(t9) => {
      var l8;
      return (l8 = t9 == null ? void 0 : t9.preventDefault) == null ? void 0 : l8.call(t9);
    }]);
    for (let s12 in e8) Object.assign(r11, { [s12](t9, ...l8) {
      let i10 = e8[s12];
      for (let o11 of i10) {
        if ((t9 instanceof Event || (t9 == null ? void 0 : t9.nativeEvent) instanceof Event) && t9.defaultPrevented) return;
        o11(t9, ...l8);
      }
    } });
    return r11;
  }
  function V3(...n9) {
    var a15;
    if (n9.length === 0) return {};
    if (n9.length === 1) return n9[0];
    let r11 = {}, e8 = {};
    for (let s12 of n9) for (let t9 in s12) t9.startsWith("on") && typeof s12[t9] == "function" ? ((a15 = e8[t9]) != null || (e8[t9] = []), e8[t9].push(s12[t9])) : r11[t9] = s12[t9];
    for (let s12 in e8) Object.assign(r11, { [s12](...t9) {
      let l8 = e8[s12];
      for (let i10 of l8) i10 == null || i10(...t9);
    } });
    return r11;
  }
  function Y2(n9) {
    var r11;
    return Object.assign(D3(n9), { displayName: (r11 = n9.displayName) != null ? r11 : n9.name });
  }
  function m3(n9) {
    let r11 = Object.assign({}, n9);
    for (let e8 in r11) r11[e8] === void 0 && delete r11[e8];
    return r11;
  }
  function h3(n9, r11 = []) {
    let e8 = Object.assign({}, n9);
    for (let a15 of r11) a15 in e8 && delete e8[a15];
    return e8;
  }
  function H3(n9) {
    return Rn.version.split(".")[0] >= "19" ? n9.props.ref : n9.ref;
  }
  function b3(n9) {
    return n9 === k || n9 === Symbol.for("react.fragment");
  }
  function D4(n9) {
    return b3(n9.type);
  }

  // node_modules/@headlessui/react/dist/hooks/use-controllable.js
  init_compat_module();
  init_compat_module();
  function b4(l8, r11, c13) {
    let [i10, s12] = d2(c13), e8 = l8 !== void 0, t9 = A2(e8), u17 = A2(false), d6 = A2(false);
    return e8 && !t9.current && !u17.current ? (u17.current = true, t9.current = e8, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e8 && t9.current && !d6.current && (d6.current = true, t9.current = e8, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e8 ? l8 : i10, o5((n9) => (e8 || En(() => s12(n9)), r11 == null ? void 0 : r11(n9)))];
  }

  // node_modules/@headlessui/react/dist/hooks/use-default-value.js
  init_compat_module();
  function l4(e8) {
    let [t9] = d2(e8);
    return t9;
  }

  // node_modules/@headlessui/react/dist/hooks/use-id.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/internal/form-fields.js
  init_compat_module();
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/form.js
  init_compat_module();
  function p4(t9 = {}, i10 = null, n9 = []) {
    for (let [e8, o11] of Object.entries(t9)) s5(n9, r5(i10, e8), o11);
    return n9;
  }
  function r5(t9, i10) {
    return t9 ? t9 + "[" + i10 + "]" : i10;
  }
  function s5(t9, i10, n9) {
    if (Array.isArray(n9)) for (let [e8, o11] of n9.entries()) s5(t9, r5(i10, e8.toString()), o11);
    else n9 instanceof Date ? t9.push([i10, n9.toISOString()]) : typeof n9 == "boolean" ? t9.push([i10, n9 ? "1" : "0"]) : typeof n9 == "string" ? t9.push([i10, n9]) : typeof n9 == "number" ? t9.push([i10, "".concat(n9)]) : n9 == null ? t9.push([i10, ""]) : c3(n9) && !mn(n9) && p4(n9, i10, t9);
  }
  function c3(t9) {
    if (Object.prototype.toString.call(t9) !== "[object Object]") return false;
    let i10 = Object.getPrototypeOf(t9);
    return i10 === null || Object.getPrototypeOf(i10) === null;
  }

  // node_modules/@headlessui/react/dist/internal/hidden.js
  var a4 = "span";
  var s6 = ((e8) => (e8[e8.None = 1] = "None", e8[e8.Focusable = 2] = "Focusable", e8[e8.Hidden = 4] = "Hidden", e8))(s6 || {});
  function l5(t9, r11) {
    var n9;
    let _a = t9, { features: d6 = 1 } = _a, e8 = __objRest(_a, ["features"]), o11 = { ref: r11, "aria-hidden": (d6 & 2) === 2 ? true : (n9 = e8["aria-hidden"]) != null ? n9 : void 0, hidden: (d6 & 4) === 4 ? true : void 0, style: __spreadValues({ position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, (d6 & 4) === 4 && (d6 & 2) !== 2 && { display: "none" }) };
    return K3()({ ourProps: o11, theirProps: e8, slot: {}, defaultTag: a4, name: "Hidden" });
  }
  var f3 = Y2(l5);

  // node_modules/@headlessui/react/dist/internal/form-fields.js
  var f4 = Q(null);
  function c4({ children: t9 }) {
    let e8 = x2(f4);
    if (!e8) return Rn.createElement(Rn.Fragment, null, t9);
    let { target: r11 } = e8;
    return r11 ? $2(Rn.createElement(Rn.Fragment, null, t9), r11) : null;
  }
  function j4({ data: t9, form: e8, disabled: r11, onReset: n9, overrides: F6 }) {
    let [i10, a15] = d2(null), p10 = p3();
    return y2(() => {
      if (n9 && i10) return p10.addEventListener(i10, "reset", n9);
    }, [i10, e8, n9]), Rn.createElement(c4, null, Rn.createElement(C5, { setForm: a15, formId: e8 }), p4(t9).map(([s12, v6]) => Rn.createElement(f3, __spreadValues({ features: s6.Hidden }, m3(__spreadValues({ key: s12, as: "input", type: "hidden", hidden: true, readOnly: true, form: e8, disabled: r11, name: s12, value: v6 }, F6))))));
  }
  function C5({ setForm: t9, formId: e8 }) {
    return y2(() => {
      if (e8) {
        let r11 = document.getElementById(e8);
        r11 && t9(r11);
      }
    }, [t9, e8]), e8 ? null : Rn.createElement(f3, { features: s6.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r11) => {
      if (!r11) return;
      let n9 = r11.closest("form");
      n9 && t9(n9);
    } });
  }

  // node_modules/@headlessui/react/dist/internal/id.js
  init_compat_module();
  var e5 = Q(void 0);
  function u4() {
    return x2(e5);
  }

  // node_modules/@headlessui/react/dist/utils/dom.js
  function o6(e8) {
    return typeof e8 != "object" || e8 === null ? false : "nodeType" in e8;
  }
  function t5(e8) {
    return o6(e8) && "tagName" in e8;
  }
  function n4(e8) {
    return t5(e8) && "accessKey" in e8;
  }
  function i4(e8) {
    return t5(e8) && "tabIndex" in e8;
  }
  function r6(e8) {
    return t5(e8) && "style" in e8;
  }
  function u5(e8) {
    return n4(e8) && e8.nodeName === "IFRAME";
  }
  function l6(e8) {
    return n4(e8) && e8.nodeName === "INPUT";
  }
  function m4(e8) {
    return n4(e8) && e8.nodeName === "LABEL";
  }
  function a5(e8) {
    return n4(e8) && e8.nodeName === "FIELDSET";
  }
  function E4(e8) {
    return n4(e8) && e8.nodeName === "LEGEND";
  }
  function L3(e8) {
    return t5(e8) ? e8.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
  }

  // node_modules/@headlessui/react/dist/utils/bugs.js
  function s7(l8) {
    let e8 = l8.parentElement, t9 = null;
    for (; e8 && !a5(e8); ) E4(e8) && (t9 = e8), e8 = e8.parentElement;
    let i10 = (e8 == null ? void 0 : e8.getAttribute("disabled")) === "";
    return i10 && r7(t9) ? false : i10;
  }
  function r7(l8) {
    if (!l8) return false;
    let e8 = l8.previousElementSibling;
    for (; e8 !== null; ) {
      if (E4(e8)) return false;
      e8 = e8.previousElementSibling;
    }
    return true;
  }

  // node_modules/@headlessui/react/dist/components/description/description.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
  init_compat_module();
  var u6 = Symbol();
  function T4(t9, n9 = true) {
    return Object.assign(t9, { [u6]: n9 });
  }
  function y3(...t9) {
    let n9 = A2(t9);
    y2(() => {
      n9.current = t9;
    }, [t9]);
    let c13 = o5((e8) => {
      for (let o11 of n9.current) o11 != null && (typeof o11 == "function" ? o11(e8) : o11.current = e8);
    });
    return t9.every((e8) => e8 == null || (e8 == null ? void 0 : e8[u6])) ? void 0 : c13;
  }

  // node_modules/@headlessui/react/dist/components/description/description.js
  var a6 = Q(null);
  a6.displayName = "DescriptionContext";
  function f5() {
    let r11 = x2(a6);
    if (r11 === null) {
      let e8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(e8, f5), e8;
    }
    return r11;
  }
  function w5() {
    var r11, e8;
    return (e8 = (r11 = x2(a6)) == null ? void 0 : r11.value) != null ? e8 : void 0;
  }
  var I4 = "p";
  function C6(r11, e8) {
    let c13 = g2(), t9 = a3(), _a = r11, { id: i10 = "headlessui-description-".concat(c13) } = _a, l8 = __objRest(_a, ["id"]), n9 = f5(), o11 = y3(e8);
    n2(() => n9.register(i10), [i10, n9.register]);
    let s12 = n3(__spreadProps(__spreadValues({}, n9.slot), { disabled: t9 || false })), p10 = __spreadProps(__spreadValues({ ref: o11 }, n9.props), { id: i10 });
    return K3()({ ourProps: p10, theirProps: l8, slot: s12, defaultTag: I4, name: n9.name || "Description" });
  }
  var _3 = Y2(C6);
  var M3 = Object.assign(_3, {});

  // node_modules/@headlessui/react/dist/components/keyboard.js
  var o7 = ((r11) => (r11.Space = " ", r11.Enter = "Enter", r11.Escape = "Escape", r11.Backspace = "Backspace", r11.Delete = "Delete", r11.ArrowLeft = "ArrowLeft", r11.ArrowUp = "ArrowUp", r11.ArrowRight = "ArrowRight", r11.ArrowDown = "ArrowDown", r11.Home = "Home", r11.End = "End", r11.PageUp = "PageUp", r11.PageDown = "PageDown", r11.Tab = "Tab", r11))(o7 || {});

  // node_modules/@headlessui/react/dist/components/label/label.js
  init_compat_module();
  var L4 = Q(null);
  L4.displayName = "LabelContext";
  function C7() {
    let n9 = x2(L4);
    if (n9 === null) {
      let l8 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(l8, C7), l8;
    }
    return n9;
  }
  function N3(n9) {
    var a15, e8, o11;
    let l8 = (e8 = (a15 = x2(L4)) == null ? void 0 : a15.value) != null ? e8 : void 0;
    return ((o11 = n9 == null ? void 0 : n9.length) != null ? o11 : 0) > 0 ? [l8, ...n9].filter(Boolean).join(" ") : l8;
  }
  function V4({ inherit: n9 = false } = {}) {
    let l8 = N3(), [a15, e8] = d2([]), o11 = n9 ? [l8, ...a15].filter(Boolean) : a15;
    return [o11.length > 0 ? o11.join(" ") : void 0, T2(() => function(t9) {
      let p10 = o5((i10) => (e8((u17) => [...u17, i10]), () => e8((u17) => {
        let d6 = u17.slice(), f14 = d6.indexOf(i10);
        return f14 !== -1 && d6.splice(f14, 1), d6;
      }))), b7 = T2(() => ({ register: p10, slot: t9.slot, name: t9.name, props: t9.props, value: t9.value }), [p10, t9.slot, t9.name, t9.props, t9.value]);
      return Rn.createElement(L4.Provider, { value: b7 }, t9.children);
    }, [e8])];
  }
  var G3 = "label";
  function U3(n9, l8) {
    var y8;
    let a15 = g2(), e8 = C7(), o11 = u4(), T8 = a3(), _a = n9, { id: t9 = "headlessui-label-".concat(a15), htmlFor: p10 = o11 != null ? o11 : (y8 = e8.props) == null ? void 0 : y8.htmlFor, passive: b7 = false } = _a, i10 = __objRest(_a, ["id", "htmlFor", "passive"]), u17 = y3(l8);
    n2(() => e8.register(t9), [t9, e8.register]);
    let d6 = o5((s12) => {
      let g6 = s12.currentTarget;
      if (!(s12.target !== s12.currentTarget && L3(s12.target)) && (m4(g6) && s12.preventDefault(), e8.props && "onClick" in e8.props && typeof e8.props.onClick == "function" && e8.props.onClick(s12), m4(g6))) {
        let r11 = document.getElementById(g6.htmlFor);
        if (r11) {
          let E7 = r11.getAttribute("disabled");
          if (E7 === "true" || E7 === "") return;
          let x6 = r11.getAttribute("aria-disabled");
          if (x6 === "true" || x6 === "") return;
          (l6(r11) && (r11.type === "file" || r11.type === "radio" || r11.type === "checkbox") || r11.role === "radio" || r11.role === "checkbox" || r11.role === "switch") && r11.click(), r11.focus({ preventScroll: true });
        }
      }
    }), f14 = n3(__spreadProps(__spreadValues({}, e8.slot), { disabled: T8 || false })), c13 = __spreadProps(__spreadValues({ ref: u17 }, e8.props), { id: t9, htmlFor: p10, onClick: d6 });
    return b7 && ("onClick" in c13 && (delete c13.htmlFor, delete c13.onClick), "onClick" in i10 && delete i10.onClick), K3()({ ourProps: c13, theirProps: i10, slot: f14, defaultTag: p10 ? G3 : "div", name: e8.name || "Label" });
  }
  var j5 = Y2(U3);
  var Z2 = Object.assign(j5, {});

  // node_modules/@tanstack/react-virtual/dist/esm/index.js
  init_compat_module();
  init_compat_module();

  // node_modules/@tanstack/virtual-core/dist/esm/utils.js
  function memo(getDeps, fn2, opts) {
    var _a;
    let deps = (_a = opts.initialDeps) != null ? _a : [];
    let result;
    function memoizedFunction() {
      var _a2, _b, _c, _d;
      let depTime;
      if (opts.key && ((_a2 = opts.debug) == null ? void 0 : _a2.call(opts))) depTime = Date.now();
      const newDeps = getDeps();
      const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index3) => deps[index3] !== dep);
      if (!depsChanged) {
        return result;
      }
      deps = newDeps;
      let resultTime;
      if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
      result = fn2(...newDeps);
      if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(
          "%c\u23F1 ".concat(pad(resultEndTime, 5), " /").concat(pad(depEndTime, 5), " ms"),
          "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(".concat(Math.max(
            0,
            Math.min(120 - 120 * resultFpsPercentage, 120)
          ), "deg 100% 31%);"),
          opts == null ? void 0 : opts.key
        );
      }
      (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
      return result;
    }
    memoizedFunction.updateDeps = (newDeps) => {
      deps = newDeps;
    };
    return memoizedFunction;
  }
  function notUndefined(value, msg) {
    if (value === void 0) {
      throw new Error("Unexpected undefined".concat(msg ? ": ".concat(msg) : ""));
    } else {
      return value;
    }
  }
  var approxEqual = (a15, b7) => Math.abs(a15 - b7) < 1.01;
  var debounce = (targetWindow, fn2, ms) => {
    let timeoutId;
    return function(...args) {
      targetWindow.clearTimeout(timeoutId);
      timeoutId = targetWindow.setTimeout(() => fn2.apply(this, args), ms);
    };
  };

  // node_modules/@tanstack/virtual-core/dist/esm/index.js
  var getRect = (element) => {
    const { offsetWidth, offsetHeight } = element;
    return { width: offsetWidth, height: offsetHeight };
  };
  var defaultKeyExtractor = (index3) => index3;
  var defaultRangeExtractor = (range) => {
    const start = Math.max(range.startIndex - range.overscan, 0);
    const end = Math.min(range.endIndex + range.overscan, range.count - 1);
    const arr = [];
    for (let i10 = start; i10 <= end; i10++) {
      arr.push(i10);
    }
    return arr;
  };
  var observeElementRect = (instance, cb) => {
    const element = instance.scrollElement;
    if (!element) {
      return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
      return;
    }
    const handler = (rect) => {
      const { width, height } = rect;
      cb({ width: Math.round(width), height: Math.round(height) });
    };
    handler(getRect(element));
    if (!targetWindow.ResizeObserver) {
      return () => {
      };
    }
    const observer = new targetWindow.ResizeObserver((entries) => {
      const run = () => {
        const entry = entries[0];
        if (entry == null ? void 0 : entry.borderBoxSize) {
          const box = entry.borderBoxSize[0];
          if (box) {
            handler({ width: box.inlineSize, height: box.blockSize });
            return;
          }
        }
        handler(getRect(element));
      };
      instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
    });
    observer.observe(element, { box: "border-box" });
    return () => {
      observer.unobserve(element);
    };
  };
  var addEventListenerOptions = {
    passive: true
  };
  var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
  var observeElementOffset = (instance, cb) => {
    const element = instance.scrollElement;
    if (!element) {
      return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
      return;
    }
    let offset4 = 0;
    const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
      targetWindow,
      () => {
        cb(offset4, false);
      },
      instance.options.isScrollingResetDelay
    );
    const createHandler = (isScrolling) => () => {
      const { horizontal, isRtl } = instance.options;
      offset4 = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
      fallback();
      cb(offset4, isScrolling);
    };
    const handler = createHandler(true);
    const endHandler = createHandler(false);
    endHandler();
    element.addEventListener("scroll", handler, addEventListenerOptions);
    const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
    if (registerScrollendEvent) {
      element.addEventListener("scrollend", endHandler, addEventListenerOptions);
    }
    return () => {
      element.removeEventListener("scroll", handler);
      if (registerScrollendEvent) {
        element.removeEventListener("scrollend", endHandler);
      }
    };
  };
  var measureElement = (element, entry, instance) => {
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        const size4 = Math.round(
          box[instance.options.horizontal ? "inlineSize" : "blockSize"]
        );
        return size4;
      }
    }
    return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
  };
  var elementScroll = (offset4, {
    adjustments = 0,
    behavior
  }, instance) => {
    var _a, _b;
    const toOffset = offset4 + adjustments;
    (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
      [instance.options.horizontal ? "left" : "top"]: toOffset,
      behavior
    });
  };
  var Virtualizer = class {
    constructor(opts) {
      this.unsubs = [];
      this.scrollElement = null;
      this.targetWindow = null;
      this.isScrolling = false;
      this.measurementsCache = [];
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.pendingMeasuredCacheIndexes = [];
      this.scrollRect = null;
      this.scrollOffset = null;
      this.scrollDirection = null;
      this.scrollAdjustments = 0;
      this.elementsCache = /* @__PURE__ */ new Map();
      this.observer = /* @__PURE__ */ (() => {
        let _ro = null;
        const get2 = () => {
          if (_ro) {
            return _ro;
          }
          if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
            return null;
          }
          return _ro = new this.targetWindow.ResizeObserver((entries) => {
            entries.forEach((entry) => {
              const run = () => {
                this._measureElement(entry.target, entry);
              };
              this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
            });
          });
        };
        return {
          disconnect: () => {
            var _a;
            (_a = get2()) == null ? void 0 : _a.disconnect();
            _ro = null;
          },
          observe: (target) => {
            var _a;
            return (_a = get2()) == null ? void 0 : _a.observe(target, { box: "border-box" });
          },
          unobserve: (target) => {
            var _a;
            return (_a = get2()) == null ? void 0 : _a.unobserve(target);
          }
        };
      })();
      this.range = null;
      this.setOptions = (opts2) => {
        Object.entries(opts2).forEach(([key, value]) => {
          if (typeof value === "undefined") delete opts2[key];
        });
        this.options = __spreadValues({
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: defaultKeyExtractor,
          rangeExtractor: defaultRangeExtractor,
          onChange: () => {
          },
          measureElement,
          initialRect: { width: 0, height: 0 },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: true,
          isRtl: false,
          useScrollendEvent: false,
          useAnimationFrameWithResizeObserver: false
        }, opts2);
      };
      this.notify = (sync) => {
        var _a, _b;
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      };
      this.maybeNotify = memo(
        () => {
          this.calculateRange();
          return [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null
          ];
        },
        (isScrolling) => {
          this.notify(isScrolling);
        },
        {
          key: "maybeNotify",
          debug: () => this.options.debug,
          initialDeps: [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null
          ]
        }
      );
      this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach((d6) => d6());
        this.unsubs = [];
        this.observer.disconnect();
        this.scrollElement = null;
        this.targetWindow = null;
      };
      this._didMount = () => {
        return () => {
          this.cleanup();
        };
      };
      this._willUpdate = () => {
        var _a2;
        var _a;
        const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== scrollElement) {
          this.cleanup();
          if (!scrollElement) {
            this.maybeNotify();
            return;
          }
          this.scrollElement = scrollElement;
          if (this.scrollElement && "ownerDocument" in this.scrollElement) {
            this.targetWindow = this.scrollElement.ownerDocument.defaultView;
          } else {
            this.targetWindow = (_a2 = (_a = this.scrollElement) == null ? void 0 : _a.window) != null ? _a2 : null;
          }
          this.elementsCache.forEach((cached) => {
            this.observer.observe(cached);
          });
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
          this.unsubs.push(
            this.options.observeElementRect(this, (rect) => {
              this.scrollRect = rect;
              this.maybeNotify();
            })
          );
          this.unsubs.push(
            this.options.observeElementOffset(this, (offset4, isScrolling) => {
              this.scrollAdjustments = 0;
              this.scrollDirection = isScrolling ? this.getScrollOffset() < offset4 ? "forward" : "backward" : null;
              this.scrollOffset = offset4;
              this.isScrolling = isScrolling;
              this.maybeNotify();
            })
          );
        }
      };
      this.getSize = () => {
        var _a;
        if (!this.options.enabled) {
          this.scrollRect = null;
          return 0;
        }
        this.scrollRect = (_a = this.scrollRect) != null ? _a : this.options.initialRect;
        return this.scrollRect[this.options.horizontal ? "width" : "height"];
      };
      this.getScrollOffset = () => {
        var _a;
        if (!this.options.enabled) {
          this.scrollOffset = null;
          return 0;
        }
        this.scrollOffset = (_a = this.scrollOffset) != null ? _a : typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset;
        return this.scrollOffset;
      };
      this.getFurthestMeasurement = (measurements, index3) => {
        const furthestMeasurementsFound = /* @__PURE__ */ new Map();
        const furthestMeasurements = /* @__PURE__ */ new Map();
        for (let m8 = index3 - 1; m8 >= 0; m8--) {
          const measurement = measurements[m8];
          if (furthestMeasurementsFound.has(measurement.lane)) {
            continue;
          }
          const previousFurthestMeasurement = furthestMeasurements.get(
            measurement.lane
          );
          if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
            furthestMeasurements.set(measurement.lane, measurement);
          } else if (measurement.end < previousFurthestMeasurement.end) {
            furthestMeasurementsFound.set(measurement.lane, true);
          }
          if (furthestMeasurementsFound.size === this.options.lanes) {
            break;
          }
        }
        return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a15, b7) => {
          if (a15.end === b7.end) {
            return a15.index - b7.index;
          }
          return a15.end - b7.end;
        })[0] : void 0;
      };
      this.getMeasurementOptions = memo(
        () => [
          this.options.count,
          this.options.paddingStart,
          this.options.scrollMargin,
          this.options.getItemKey,
          this.options.enabled
        ],
        (count2, paddingStart, scrollMargin, getItemKey, enabled) => {
          this.pendingMeasuredCacheIndexes = [];
          return {
            count: count2,
            paddingStart,
            scrollMargin,
            getItemKey,
            enabled
          };
        },
        {
          key: false
        }
      );
      this.getMeasurements = memo(
        () => [this.getMeasurementOptions(), this.itemSizeCache],
        ({ count: count2, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
          if (!enabled) {
            this.measurementsCache = [];
            this.itemSizeCache.clear();
            return [];
          }
          if (this.measurementsCache.length === 0) {
            this.measurementsCache = this.options.initialMeasurementsCache;
            this.measurementsCache.forEach((item) => {
              this.itemSizeCache.set(item.key, item.size);
            });
          }
          const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
          this.pendingMeasuredCacheIndexes = [];
          const measurements = this.measurementsCache.slice(0, min2);
          for (let i10 = min2; i10 < count2; i10++) {
            const key = getItemKey(i10);
            const furthestMeasurement = this.options.lanes === 1 ? measurements[i10 - 1] : this.getFurthestMeasurement(measurements, i10);
            const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
            const measuredSize = itemSizeCache.get(key);
            const size4 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i10);
            const end = start + size4;
            const lane = furthestMeasurement ? furthestMeasurement.lane : i10 % this.options.lanes;
            measurements[i10] = {
              index: i10,
              start,
              size: size4,
              end,
              key,
              lane
            };
          }
          this.measurementsCache = measurements;
          return measurements;
        },
        {
          key: "getMeasurements",
          debug: () => this.options.debug
        }
      );
      this.calculateRange = memo(
        () => [
          this.getMeasurements(),
          this.getSize(),
          this.getScrollOffset(),
          this.options.lanes
        ],
        (measurements, outerSize, scrollOffset, lanes) => {
          return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
            measurements,
            outerSize,
            scrollOffset,
            lanes
          }) : null;
        },
        {
          key: "calculateRange",
          debug: () => this.options.debug
        }
      );
      this.getVirtualIndexes = memo(
        () => {
          let startIndex = null;
          let endIndex = null;
          const range = this.calculateRange();
          if (range) {
            startIndex = range.startIndex;
            endIndex = range.endIndex;
          }
          this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
          return [
            this.options.rangeExtractor,
            this.options.overscan,
            this.options.count,
            startIndex,
            endIndex
          ];
        },
        (rangeExtractor, overscan, count2, startIndex, endIndex) => {
          return startIndex === null || endIndex === null ? [] : rangeExtractor({
            startIndex,
            endIndex,
            overscan,
            count: count2
          });
        },
        {
          key: "getVirtualIndexes",
          debug: () => this.options.debug
        }
      );
      this.indexFromElement = (node) => {
        const attributeName = this.options.indexAttribute;
        const indexStr = node.getAttribute(attributeName);
        if (!indexStr) {
          console.warn(
            "Missing attribute name '".concat(attributeName, "={index}' on measured element.")
          );
          return -1;
        }
        return parseInt(indexStr, 10);
      };
      this._measureElement = (node, entry) => {
        const index3 = this.indexFromElement(node);
        const item = this.measurementsCache[index3];
        if (!item) {
          return;
        }
        const key = item.key;
        const prevNode = this.elementsCache.get(key);
        if (prevNode !== node) {
          if (prevNode) {
            this.observer.unobserve(prevNode);
          }
          this.observer.observe(node);
          this.elementsCache.set(key, node);
        }
        if (node.isConnected) {
          this.resizeItem(index3, this.options.measureElement(node, entry, this));
        }
      };
      this.resizeItem = (index3, size4) => {
        var _a;
        const item = this.measurementsCache[index3];
        if (!item) {
          return;
        }
        const itemSize = (_a = this.itemSizeCache.get(item.key)) != null ? _a : item.size;
        const delta = size4 - itemSize;
        if (delta !== 0) {
          if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
            if (this.options.debug) {
              console.info("correction", delta);
            }
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: this.scrollAdjustments += delta,
              behavior: void 0
            });
          }
          this.pendingMeasuredCacheIndexes.push(item.index);
          this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size4));
          this.notify(false);
        }
      };
      this.measureElement = (node) => {
        if (!node) {
          this.elementsCache.forEach((cached, key) => {
            if (!cached.isConnected) {
              this.observer.unobserve(cached);
              this.elementsCache.delete(key);
            }
          });
          return;
        }
        this._measureElement(node, void 0);
      };
      this.getVirtualItems = memo(
        () => [this.getVirtualIndexes(), this.getMeasurements()],
        (indexes, measurements) => {
          const virtualItems = [];
          for (let k7 = 0, len = indexes.length; k7 < len; k7++) {
            const i10 = indexes[k7];
            const measurement = measurements[i10];
            virtualItems.push(measurement);
          }
          return virtualItems;
        },
        {
          key: "getVirtualItems",
          debug: () => this.options.debug
        }
      );
      this.getVirtualItemForOffset = (offset4) => {
        const measurements = this.getMeasurements();
        if (measurements.length === 0) {
          return void 0;
        }
        return notUndefined(
          measurements[findNearestBinarySearch(
            0,
            measurements.length - 1,
            (index3) => notUndefined(measurements[index3]).start,
            offset4
          )]
        );
      };
      this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
        const size4 = this.getSize();
        const scrollOffset = this.getScrollOffset();
        if (align === "auto") {
          align = toOffset >= scrollOffset + size4 ? "end" : "start";
        }
        if (align === "center") {
          toOffset += (itemSize - size4) / 2;
        } else if (align === "end") {
          toOffset -= size4;
        }
        const maxOffset = this.getTotalSize() + this.options.scrollMargin - size4;
        return Math.max(Math.min(maxOffset, toOffset), 0);
      };
      this.getOffsetForIndex = (index3, align = "auto") => {
        index3 = Math.max(0, Math.min(index3, this.options.count - 1));
        const item = this.measurementsCache[index3];
        if (!item) {
          return void 0;
        }
        const size4 = this.getSize();
        const scrollOffset = this.getScrollOffset();
        if (align === "auto") {
          if (item.end >= scrollOffset + size4 - this.options.scrollPaddingEnd) {
            align = "end";
          } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
            align = "start";
          } else {
            return [scrollOffset, align];
          }
        }
        const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(toOffset, align, item.size),
          align
        ];
      };
      this.isDynamicMode = () => this.elementsCache.size > 0;
      this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
        if (behavior === "smooth" && this.isDynamicMode()) {
          console.warn(
            "The `smooth` scroll behavior is not fully supported with dynamic size."
          );
        }
        this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
          adjustments: void 0,
          behavior
        });
      };
      this.scrollToIndex = (index3, { align: initialAlign = "auto", behavior } = {}) => {
        if (behavior === "smooth" && this.isDynamicMode()) {
          console.warn(
            "The `smooth` scroll behavior is not fully supported with dynamic size."
          );
        }
        index3 = Math.max(0, Math.min(index3, this.options.count - 1));
        let attempts = 0;
        const maxAttempts = 10;
        const tryScroll = (currentAlign) => {
          if (!this.targetWindow) return;
          const offsetInfo = this.getOffsetForIndex(index3, currentAlign);
          if (!offsetInfo) {
            console.warn("Failed to get offset for index:", index3);
            return;
          }
          const [offset4, align] = offsetInfo;
          this._scrollToOffset(offset4, { adjustments: void 0, behavior });
          this.targetWindow.requestAnimationFrame(() => {
            const currentOffset = this.getScrollOffset();
            const afterInfo = this.getOffsetForIndex(index3, align);
            if (!afterInfo) {
              console.warn("Failed to get offset for index:", index3);
              return;
            }
            if (!approxEqual(afterInfo[0], currentOffset)) {
              scheduleRetry(align);
            }
          });
        };
        const scheduleRetry = (align) => {
          if (!this.targetWindow) return;
          attempts++;
          if (attempts < maxAttempts) {
            if (this.options.debug) {
              console.info("Schedule retry", attempts, maxAttempts);
            }
            this.targetWindow.requestAnimationFrame(() => tryScroll(align));
          } else {
            console.warn(
              "Failed to scroll to index ".concat(index3, " after ").concat(maxAttempts, " attempts.")
            );
          }
        };
        tryScroll(initialAlign);
      };
      this.scrollBy = (delta, { behavior } = {}) => {
        if (behavior === "smooth" && this.isDynamicMode()) {
          console.warn(
            "The `smooth` scroll behavior is not fully supported with dynamic size."
          );
        }
        this._scrollToOffset(this.getScrollOffset() + delta, {
          adjustments: void 0,
          behavior
        });
      };
      this.getTotalSize = () => {
        var _a2;
        var _a;
        const measurements = this.getMeasurements();
        let end;
        if (measurements.length === 0) {
          end = this.options.paddingStart;
        } else if (this.options.lanes === 1) {
          end = (_a2 = (_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) != null ? _a2 : 0;
        } else {
          const endByLane = Array(this.options.lanes).fill(null);
          let endIndex = measurements.length - 1;
          while (endIndex >= 0 && endByLane.some((val) => val === null)) {
            const item = measurements[endIndex];
            if (endByLane[item.lane] === null) {
              endByLane[item.lane] = item.end;
            }
            endIndex--;
          }
          end = Math.max(...endByLane.filter((val) => val !== null));
        }
        return Math.max(
          end - this.options.scrollMargin + this.options.paddingEnd,
          0
        );
      };
      this._scrollToOffset = (offset4, {
        adjustments,
        behavior
      }) => {
        this.options.scrollToFn(offset4, { behavior, adjustments }, this);
      };
      this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map();
        this.notify(false);
      };
      this.setOptions(opts);
    }
  };
  var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
    while (low <= high) {
      const middle = (low + high) / 2 | 0;
      const currentValue = getCurrentValue(middle);
      if (currentValue < value) {
        low = middle + 1;
      } else if (currentValue > value) {
        high = middle - 1;
      } else {
        return middle;
      }
    }
    if (low > 0) {
      return low - 1;
    } else {
      return 0;
    }
  };
  function calculateRange({
    measurements,
    outerSize,
    scrollOffset,
    lanes
  }) {
    const lastIndex = measurements.length - 1;
    const getOffset = (index3) => measurements[index3].start;
    if (measurements.length <= lanes) {
      return {
        startIndex: 0,
        endIndex: lastIndex
      };
    }
    let startIndex = findNearestBinarySearch(
      0,
      lastIndex,
      getOffset,
      scrollOffset
    );
    let endIndex = startIndex;
    if (lanes === 1) {
      while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
        endIndex++;
      }
    } else if (lanes > 1) {
      const endPerLane = Array(lanes).fill(0);
      while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
        const item = measurements[endIndex];
        endPerLane[item.lane] = item.end;
        endIndex++;
      }
      const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
      while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
        const item = measurements[startIndex];
        startPerLane[item.lane] = item.start;
        startIndex--;
      }
      startIndex = Math.max(0, startIndex - startIndex % lanes);
      endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
    }
    return { startIndex, endIndex };
  }

  // node_modules/@tanstack/react-virtual/dist/esm/index.js
  var useIsomorphicLayoutEffect = typeof document !== "undefined" ? _2 : y2;
  function useVirtualizerBase(options) {
    const rerender = h2(() => ({}), {})[1];
    const resolvedOptions = __spreadProps(__spreadValues({}, options), {
      onChange: (instance2, sync) => {
        var _a;
        if (sync) {
          En(rerender);
        } else {
          rerender();
        }
        (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
      }
    });
    const [instance] = d2(
      () => new Virtualizer(resolvedOptions)
    );
    instance.setOptions(resolvedOptions);
    useIsomorphicLayoutEffect(() => {
      return instance._didMount();
    }, []);
    useIsomorphicLayoutEffect(() => {
      return instance._willUpdate();
    });
    return instance;
  }
  function useVirtualizer(options) {
    return useVirtualizerBase(__spreadValues({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll
    }, options));
  }

  // node_modules/@headlessui/react/dist/components/combobox/combobox.js
  init_compat_module();
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
  init_compat_module();
  function l7(e8, r11) {
    return e8 !== null && r11 !== null && typeof e8 == "object" && typeof r11 == "object" && "id" in e8 && "id" in r11 ? e8.id === r11.id : e8 === r11;
  }
  function u7(e8 = l7) {
    return q2((r11, t9) => {
      if (typeof e8 == "string") {
        let o11 = e8;
        return (r11 == null ? void 0 : r11[o11]) === (t9 == null ? void 0 : t9[o11]);
      }
      return e8(r11, t9);
    }, [e8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-element-size.js
  init_compat_module();
  function h4(i10) {
    if (i10 === null) return { width: 0, height: 0 };
    let { width: t9, height: e8 } = i10.getBoundingClientRect();
    return { width: t9, height: e8 };
  }
  function w6(i10, t9, e8 = false) {
    let [r11, f14] = d2(() => h4(t9));
    return n2(() => {
      if (!t9 || !i10) return;
      let n9 = o4();
      return n9.requestAnimationFrame(function s12() {
        n9.requestAnimationFrame(s12), f14((u17) => {
          let o11 = h4(t9);
          return o11.width === u17.width && o11.height === u17.height ? u17 : o11;
        });
      }), () => {
        n9.dispose();
      };
    }, [t9, i10]), e8 ? { width: "".concat(r11.width, "px"), height: "".concat(r11.height, "px") } : r11;
  }

  // node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/components/mouse.js
  var g4 = ((f14) => (f14[f14.Left = 0] = "Left", f14[f14.Right = 2] = "Right", f14))(g4 || {});

  // node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
  function s8(t9) {
    let r11 = A2(null), u17 = o5((e8) => {
      r11.current = e8.pointerType, !s7(e8.currentTarget) && e8.pointerType === "mouse" && e8.button === g4.Left && (e8.preventDefault(), t9(e8));
    }), i10 = o5((e8) => {
      r11.current !== "mouse" && (s7(e8.currentTarget) || t9(e8));
    });
    return { onPointerDown: u17, onClick: i10 };
  }

  // node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/default-map.js
  var a7 = class extends Map {
    constructor(t9) {
      super();
      this.factory = t9;
    }
    get(t9) {
      let e8 = super.get(t9);
      return e8 === void 0 && (e8 = this.factory(t9), this.set(t9, e8)), e8;
    }
  };

  // node_modules/@headlessui/react/dist/machine.js
  var h5 = Object.defineProperty;
  var v3 = (t9, e8, r11) => e8 in t9 ? h5(t9, e8, { enumerable: true, configurable: true, writable: true, value: r11 }) : t9[e8] = r11;
  var S2 = (t9, e8, r11) => (v3(t9, typeof e8 != "symbol" ? e8 + "" : e8, r11), r11);
  var b5 = (t9, e8, r11) => {
    if (!e8.has(t9)) throw TypeError("Cannot " + r11);
  };
  var i5 = (t9, e8, r11) => (b5(t9, e8, "read from private field"), r11 ? r11.call(t9) : e8.get(t9));
  var c5 = (t9, e8, r11) => {
    if (e8.has(t9)) throw TypeError("Cannot add the same private member more than once");
    e8 instanceof WeakSet ? e8.add(t9) : e8.set(t9, r11);
  };
  var u8 = (t9, e8, r11, s12) => (b5(t9, e8, "write to private field"), s12 ? s12.call(t9, r11) : e8.set(t9, r11), r11);
  var n5;
  var a8;
  var o8;
  var T5 = class {
    constructor(e8) {
      c5(this, n5, {});
      c5(this, a8, new a7(() => /* @__PURE__ */ new Set()));
      c5(this, o8, /* @__PURE__ */ new Set());
      S2(this, "disposables", o4());
      u8(this, n5, e8), s3.isServer && this.disposables.microTask(() => {
        this.dispose();
      });
    }
    dispose() {
      this.disposables.dispose();
    }
    get state() {
      return i5(this, n5);
    }
    subscribe(e8, r11) {
      if (s3.isServer) return () => {
      };
      let s12 = { selector: e8, callback: r11, current: e8(i5(this, n5)) };
      return i5(this, o8).add(s12), this.disposables.add(() => {
        i5(this, o8).delete(s12);
      });
    }
    on(e8, r11) {
      return s3.isServer ? () => {
      } : (i5(this, a8).get(e8).add(r11), this.disposables.add(() => {
        i5(this, a8).get(e8).delete(r11);
      }));
    }
    send(e8) {
      let r11 = this.reduce(i5(this, n5), e8);
      if (r11 !== i5(this, n5)) {
        u8(this, n5, r11);
        for (let s12 of i5(this, o8)) {
          let l8 = s12.selector(i5(this, n5));
          j6(s12.current, l8) || (s12.current = l8, s12.callback(l8));
        }
        for (let s12 of i5(this, a8).get(e8.type)) s12(i5(this, n5), e8);
      }
    }
  };
  n5 = /* @__PURE__ */ new WeakMap(), a8 = /* @__PURE__ */ new WeakMap(), o8 = /* @__PURE__ */ new WeakMap();
  function j6(t9, e8) {
    return Object.is(t9, e8) ? true : typeof t9 != "object" || t9 === null || typeof e8 != "object" || e8 === null ? false : Array.isArray(t9) && Array.isArray(e8) ? t9.length !== e8.length ? false : f6(t9[Symbol.iterator](), e8[Symbol.iterator]()) : t9 instanceof Map && e8 instanceof Map || t9 instanceof Set && e8 instanceof Set ? t9.size !== e8.size ? false : f6(t9.entries(), e8.entries()) : p5(t9) && p5(e8) ? f6(Object.entries(t9)[Symbol.iterator](), Object.entries(e8)[Symbol.iterator]()) : false;
  }
  function f6(t9, e8) {
    do {
      let r11 = t9.next(), s12 = e8.next();
      if (r11.done && s12.done) return true;
      if (r11.done || s12.done || !Object.is(r11.value, s12.value)) return false;
    } while (true);
  }
  function p5(t9) {
    if (Object.prototype.toString.call(t9) !== "[object Object]") return false;
    let e8 = Object.getPrototypeOf(t9);
    return e8 === null || Object.getPrototypeOf(e8) === null;
  }

  // node_modules/@headlessui/react/dist/machines/stack-machine.js
  var a9 = Object.defineProperty;
  var r8 = (e8, c13, t9) => c13 in e8 ? a9(e8, c13, { enumerable: true, configurable: true, writable: true, value: t9 }) : e8[c13] = t9;
  var p6 = (e8, c13, t9) => (r8(e8, typeof c13 != "symbol" ? c13 + "" : c13, t9), t9);
  var k4 = ((t9) => (t9[t9.Push = 0] = "Push", t9[t9.Pop = 1] = "Pop", t9))(k4 || {});
  var y4 = { [0](e8, c13) {
    let t9 = c13.id, s12 = e8.stack, i10 = e8.stack.indexOf(t9);
    if (i10 !== -1) {
      let n9 = e8.stack.slice();
      return n9.splice(i10, 1), n9.push(t9), s12 = n9, __spreadProps(__spreadValues({}, e8), { stack: s12 });
    }
    return __spreadProps(__spreadValues({}, e8), { stack: [...e8.stack, t9] });
  }, [1](e8, c13) {
    let t9 = c13.id, s12 = e8.stack.indexOf(t9);
    if (s12 === -1) return e8;
    let i10 = e8.stack.slice();
    return i10.splice(s12, 1), __spreadProps(__spreadValues({}, e8), { stack: i10 });
  } };
  var o9 = class _o2 extends T5 {
    constructor() {
      super(...arguments);
      p6(this, "actions", { push: (t9) => this.send({ type: 0, id: t9 }), pop: (t9) => this.send({ type: 1, id: t9 }) });
      p6(this, "selectors", { isTop: (t9, s12) => t9.stack[t9.stack.length - 1] === s12, inStack: (t9, s12) => t9.stack.includes(s12) });
    }
    static new() {
      return new _o2({ stack: [] });
    }
    reduce(t9, s12) {
      return u3(s12.type, y4, t9, s12);
    }
  };
  var x4 = new a7(() => o9.new());

  // node_modules/@headlessui/react/dist/react-glue.js
  var import_with_selector = __toESM(require_with_selector(), 1);
  function S3(e8, n9, r11 = j6) {
    return (0, import_with_selector.useSyncExternalStoreWithSelector)(o5((i10) => e8.subscribe(s9, i10)), o5(() => e8.state), o5(() => e8.state), o5(n9), r11);
  }
  function s9(e8) {
    return e8;
  }

  // node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
  function I5(o11, s12) {
    let t9 = g2(), r11 = x4.get(s12), [i10, c13] = S3(r11, q2((e8) => [r11.selectors.isTop(e8, t9), r11.selectors.inStack(e8, t9)], [r11, t9]));
    return n2(() => {
      if (o11) return r11.actions.push(t9), () => r11.actions.pop(t9);
    }, [r11, o11, t9]), o11 ? c13 ? i10 : true : false;
  }

  // node_modules/@headlessui/react/dist/hooks/use-inert-others.js
  var f7 = /* @__PURE__ */ new Map();
  var u9 = /* @__PURE__ */ new Map();
  function h6(t9) {
    var e8;
    let r11 = (e8 = u9.get(t9)) != null ? e8 : 0;
    return u9.set(t9, r11 + 1), r11 !== 0 ? () => m5(t9) : (f7.set(t9, { "aria-hidden": t9.getAttribute("aria-hidden"), inert: t9.inert }), t9.setAttribute("aria-hidden", "true"), t9.inert = true, () => m5(t9));
  }
  function m5(t9) {
    var i10;
    let r11 = (i10 = u9.get(t9)) != null ? i10 : 1;
    if (r11 === 1 ? u9.delete(t9) : u9.set(t9, r11 - 1), r11 !== 1) return;
    let e8 = f7.get(t9);
    e8 && (e8["aria-hidden"] === null ? t9.removeAttribute("aria-hidden") : t9.setAttribute("aria-hidden", e8["aria-hidden"]), t9.inert = e8.inert, f7.delete(t9));
  }
  function y5(t9, { allowed: r11, disallowed: e8 } = {}) {
    let i10 = I5(t9, "inert-others");
    n2(() => {
      var d6, c13;
      if (!i10) return;
      let a15 = o4();
      for (let n9 of (d6 = e8 == null ? void 0 : e8()) != null ? d6 : []) n9 && a15.add(h6(n9));
      let s12 = (c13 = r11 == null ? void 0 : r11()) != null ? c13 : [];
      for (let n9 of s12) {
        if (!n9) continue;
        let l8 = l3(n9);
        if (!l8) continue;
        let o11 = n9.parentElement;
        for (; o11 && o11 !== l8.body; ) {
          for (let p10 of o11.children) s12.some((E7) => p10.contains(E7)) || a15.add(h6(p10));
          o11 = o11.parentElement;
        }
      }
      return a15.dispose;
    }, [i10, r11, e8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
  init_compat_module();
  function p7(s12, n9, o11) {
    let i10 = s4((t9) => {
      let e8 = t9.getBoundingClientRect();
      e8.x === 0 && e8.y === 0 && e8.width === 0 && e8.height === 0 && o11();
    });
    y2(() => {
      if (!s12) return;
      let t9 = n9 === null ? null : n4(n9) ? n9 : n9.current;
      if (!t9) return;
      let e8 = o4();
      if (typeof ResizeObserver != "undefined") {
        let r11 = new ResizeObserver(() => i10.current(t9));
        r11.observe(t9), e8.add(() => r11.disconnect());
      }
      if (typeof IntersectionObserver != "undefined") {
        let r11 = new IntersectionObserver(() => i10.current(t9));
        r11.observe(t9), e8.add(() => r11.disconnect());
      }
      return () => e8.dispose();
    }, [n9, i10, s12]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-outside-click.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/utils/focus-management.js
  var E5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e8) => "".concat(e8, ":not([tabindex='-1'])")).join(",");
  var S4 = ["[data-autofocus]"].map((e8) => "".concat(e8, ":not([tabindex='-1'])")).join(",");
  var T6 = ((o11) => (o11[o11.First = 1] = "First", o11[o11.Previous = 2] = "Previous", o11[o11.Next = 4] = "Next", o11[o11.Last = 8] = "Last", o11[o11.WrapAround = 16] = "WrapAround", o11[o11.NoScroll = 32] = "NoScroll", o11[o11.AutoFocus = 64] = "AutoFocus", o11))(T6 || {});
  var A5 = ((n9) => (n9[n9.Error = 0] = "Error", n9[n9.Overflow = 1] = "Overflow", n9[n9.Success = 2] = "Success", n9[n9.Underflow = 3] = "Underflow", n9))(A5 || {});
  var O3 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(O3 || {});
  var I6 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(I6 || {});
  function H4(e8, r11 = 0) {
    var t9;
    return e8 === ((t9 = l3(e8)) == null ? void 0 : t9.body) ? false : u3(r11, { [0]() {
      return e8.matches(E5);
    }, [1]() {
      let l8 = e8;
      for (; l8 !== null; ) {
        if (l8.matches(E5)) return true;
        l8 = l8.parentElement;
      }
      return false;
    } });
  }
  var g5 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(g5 || {});
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e8) => {
    e8.metaKey || e8.altKey || e8.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e8) => {
    e8.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e8.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  var _4 = ["textarea", "input"].join(",");
  function G4(e8, r11 = (t9) => t9) {
    return e8.slice().sort((t9, l8) => {
      let n9 = r11(t9), a15 = r11(l8);
      if (n9 === null || a15 === null) return 0;
      let u17 = n9.compareDocumentPosition(a15);
      return u17 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u17 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }

  // node_modules/@headlessui/react/dist/utils/platform.js
  function t6() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function i6() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function n6() {
    return t6() || i6();
  }

  // node_modules/@headlessui/react/dist/hooks/use-document-event.js
  init_compat_module();
  function i7(t9, e8, o11, n9) {
    let u17 = s4(o11);
    y2(() => {
      if (!t9) return;
      function r11(m8) {
        u17.current(m8);
      }
      return document.addEventListener(e8, r11, n9), () => document.removeEventListener(e8, r11, n9);
    }, [t9, e8, n9]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-window-event.js
  init_compat_module();
  function s10(t9, e8, o11, n9) {
    let i10 = s4(o11);
    y2(() => {
      if (!t9) return;
      function r11(d6) {
        i10.current(d6);
      }
      return window.addEventListener(e8, r11, n9), () => window.removeEventListener(e8, r11, n9);
    }, [t9, e8, n9]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-outside-click.js
  var C8 = 30;
  function k5(o11, f14, h8) {
    let m8 = s4(h8), s12 = q2(function(e8, c13) {
      if (e8.defaultPrevented) return;
      let r11 = c13(e8);
      if (r11 === null || !r11.getRootNode().contains(r11) || !r11.isConnected) return;
      let M6 = (function u17(n9) {
        return typeof n9 == "function" ? u17(n9()) : Array.isArray(n9) || n9 instanceof Set ? n9 : [n9];
      })(f14);
      for (let u17 of M6) if (u17 !== null && (u17.contains(r11) || e8.composed && e8.composedPath().includes(u17))) return;
      return !H4(r11, I6.Loose) && r11.tabIndex !== -1 && e8.preventDefault(), m8.current(e8, r11);
    }, [m8, f14]), i10 = A2(null);
    i7(o11, "pointerdown", (t9) => {
      var e8, c13;
      n6() || (i10.current = ((c13 = (e8 = t9.composedPath) == null ? void 0 : e8.call(t9)) == null ? void 0 : c13[0]) || t9.target);
    }, true), i7(o11, "pointerup", (t9) => {
      if (n6() || !i10.current) return;
      let e8 = i10.current;
      return i10.current = null, s12(t9, () => e8);
    }, true);
    let l8 = A2({ x: 0, y: 0 });
    i7(o11, "touchstart", (t9) => {
      l8.current.x = t9.touches[0].clientX, l8.current.y = t9.touches[0].clientY;
    }, true), i7(o11, "touchend", (t9) => {
      let e8 = { x: t9.changedTouches[0].clientX, y: t9.changedTouches[0].clientY };
      if (!(Math.abs(e8.x - l8.current.x) >= C8 || Math.abs(e8.y - l8.current.y) >= C8)) return s12(t9, () => i4(t9.target) ? t9.target : null);
    }, true), s10(o11, "blur", (t9) => s12(t9, () => u5(window.document.activeElement) ? window.document.activeElement : null), true);
  }

  // node_modules/@headlessui/react/dist/hooks/use-owner.js
  init_compat_module();
  function u10(...e8) {
    return T2(() => l3(...e8), [...e8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-quick-release.js
  init_compat_module();
  var H5 = ((e8) => (e8[e8.Ignore = 0] = "Ignore", e8[e8.Select = 1] = "Select", e8[e8.Close = 2] = "Close", e8))(H5 || {});
  var S5 = { Ignore: { kind: 0 }, Select: (r11) => ({ kind: 1, target: r11 }), Close: { kind: 2 } };
  var M4 = 200;
  var f8 = 5;
  function L5(r11, { trigger: n9, action: T8, close: e8, select: p10 }) {
    let l8 = A2(null), i10 = A2(null), u17 = A2(null);
    i7(r11 && n9 !== null, "pointerdown", (t9) => {
      o6(t9 == null ? void 0 : t9.target) && n9 != null && n9.contains(t9.target) && (i10.current = t9.x, u17.current = t9.y, l8.current = t9.timeStamp);
    }), i7(r11 && n9 !== null, "pointerup", (t9) => {
      var s12, m8;
      let c13 = l8.current;
      if (c13 === null || (l8.current = null, !i4(t9.target)) || Math.abs(t9.x - ((s12 = i10.current) != null ? s12 : t9.x)) < f8 && Math.abs(t9.y - ((m8 = u17.current) != null ? m8 : t9.y)) < f8) return;
      let a15 = T8(t9);
      switch (a15.kind) {
        case 0:
          return;
        case 1: {
          t9.timeStamp - c13 > M4 && (p10(a15.target), e8());
          break;
        }
        case 2: {
          e8();
          break;
        }
      }
    }, { capture: true });
  }

  // node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-event-listener.js
  init_compat_module();
  function E6(n9, e8, a15, t9) {
    let i10 = s4(a15);
    y2(() => {
      n9 = n9 != null ? n9 : window;
      function r11(o11) {
        i10.current(o11);
      }
      return n9.addEventListener(e8, r11, t9), () => n9.removeEventListener(e8, r11, t9);
    }, [n9, e8, t9]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
  function v4(e8) {
    let l8 = A2({ value: "", selectionStart: null, selectionEnd: null });
    return E6(e8, "blur", (n9) => {
      let t9 = n9.target;
      l6(t9) && (l8.current = { value: t9.value, selectionStart: t9.selectionStart, selectionEnd: t9.selectionEnd });
    }), o5(() => {
      if (!d4(e8) && l6(e8) && e8.isConnected) {
        if (e8.focus({ preventScroll: true }), e8.value !== l8.current.value) e8.setSelectionRange(e8.value.length, e8.value.length);
        else {
          let { selectionStart: n9, selectionEnd: t9 } = l8.current;
          n9 !== null && t9 !== null && e8.setSelectionRange(n9, t9);
        }
        l8.current = { value: "", selectionStart: null, selectionEnd: null };
      }
    });
  }

  // node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
  init_compat_module();
  function e6(t9, u17) {
    return T2(() => {
      var n9;
      if (t9.type) return t9.type;
      let r11 = (n9 = t9.as) != null ? n9 : "button";
      if (typeof r11 == "string" && r11.toLowerCase() === "button" || (u17 == null ? void 0 : u17.tagName) === "BUTTON" && !u17.hasAttribute("type")) return "button";
    }, [t9.type, t9.as, u17]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-store.js
  init_compat_module();
  function o10(t9) {
    return C3(t9.subscribe, t9.getSnapshot, t9.getSnapshot);
  }

  // node_modules/@headlessui/react/dist/utils/store.js
  function a11(o11, r11) {
    let t9 = o11(), n9 = /* @__PURE__ */ new Set();
    return { getSnapshot() {
      return t9;
    }, subscribe(e8) {
      return n9.add(e8), () => n9.delete(e8);
    }, dispatch(e8, ...s12) {
      let i10 = r11[e8].call(t9, ...s12);
      i10 && (t9 = i10, n9.forEach((c13) => c13()));
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
  function d5() {
    let r11;
    return { before({ doc: e8 }) {
      var l8;
      let o11 = e8.documentElement, t9 = (l8 = e8.defaultView) != null ? l8 : window;
      r11 = Math.max(0, t9.innerWidth - o11.clientWidth);
    }, after({ doc: e8, d: o11 }) {
      let t9 = e8.documentElement, l8 = Math.max(0, t9.clientWidth - t9.offsetWidth), n9 = Math.max(0, r11 - l8);
      o11.style(t9, "paddingRight", "".concat(n9, "px"));
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
  function w7() {
    return t6() ? { before({ doc: o11, d: r11, meta: m8 }) {
      function a15(s12) {
        for (let l8 of m8().containers) for (let c13 of l8()) if (c13.contains(s12)) return true;
        return false;
      }
      r11.microTask(() => {
        var c13;
        if (window.getComputedStyle(o11.documentElement).scrollBehavior !== "auto") {
          let t9 = o4();
          t9.style(o11.documentElement, "scrollBehavior", "auto"), r11.add(() => r11.microTask(() => t9.dispose()));
        }
        let s12 = (c13 = window.scrollY) != null ? c13 : window.pageYOffset, l8 = null;
        r11.addEventListener(o11, "click", (t9) => {
          if (i4(t9.target)) try {
            let e8 = t9.target.closest("a");
            if (!e8) return;
            let { hash: n9 } = new URL(e8.href), f14 = o11.querySelector(n9);
            i4(f14) && !a15(f14) && (l8 = f14);
          } catch (e8) {
          }
        }, true), r11.group((t9) => {
          r11.addEventListener(o11, "touchstart", (e8) => {
            if (t9.dispose(), i4(e8.target) && r6(e8.target)) if (a15(e8.target)) {
              let n9 = e8.target;
              for (; n9.parentElement && a15(n9.parentElement); ) n9 = n9.parentElement;
              t9.style(n9, "overscrollBehavior", "contain");
            } else t9.style(e8.target, "touchAction", "none");
          });
        }), r11.addEventListener(o11, "touchmove", (t9) => {
          if (i4(t9.target)) {
            if (l6(t9.target)) return;
            if (a15(t9.target)) {
              let e8 = t9.target;
              for (; e8.parentElement && e8.dataset.headlessuiPortal !== "" && !(e8.scrollHeight > e8.clientHeight || e8.scrollWidth > e8.clientWidth); ) e8 = e8.parentElement;
              e8.dataset.headlessuiPortal === "" && t9.preventDefault();
            } else t9.preventDefault();
          }
        }, { passive: false }), r11.add(() => {
          var e8;
          let t9 = (e8 = window.scrollY) != null ? e8 : window.pageYOffset;
          s12 !== t9 && window.scrollTo(0, s12), l8 && l8.isConnected && (l8.scrollIntoView({ block: "nearest" }), l8 = null);
        });
      });
    } } : {};
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
  function r9() {
    return { before({ doc: e8, d: o11 }) {
      o11.style(e8.documentElement, "overflow", "hidden");
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
  function r10(e8) {
    let o11 = {};
    for (let t9 of e8) Object.assign(o11, t9(o11));
    return o11;
  }
  var c6 = a11(() => /* @__PURE__ */ new Map(), { PUSH(e8, o11) {
    var n9;
    let t9 = (n9 = this.get(e8)) != null ? n9 : { doc: e8, count: 0, d: o4(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
    return t9.count++, t9.meta.add(o11), t9.computedMeta = r10(t9.meta), this.set(e8, t9), this;
  }, POP(e8, o11) {
    let t9 = this.get(e8);
    return t9 && (t9.count--, t9.meta.delete(o11), t9.computedMeta = r10(t9.meta)), this;
  }, SCROLL_PREVENT(e8) {
    let o11 = { doc: e8.doc, d: e8.d, meta() {
      return e8.computedMeta;
    } }, t9 = [w7(), d5(), r9()];
    t9.forEach(({ before: n9 }) => n9 == null ? void 0 : n9(o11)), t9.forEach(({ after: n9 }) => n9 == null ? void 0 : n9(o11));
  }, SCROLL_ALLOW({ d: e8 }) {
    e8.dispose();
  }, TEARDOWN({ doc: e8 }) {
    this.delete(e8);
  } });
  c6.subscribe(() => {
    let e8 = c6.getSnapshot(), o11 = /* @__PURE__ */ new Map();
    for (let [t9] of e8) o11.set(t9, t9.documentElement.style.overflow);
    for (let t9 of e8.values()) {
      let n9 = o11.get(t9.doc) === "hidden", a15 = t9.count !== 0;
      (a15 && !n9 || !a15 && n9) && c6.dispatch(t9.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t9), t9.count === 0 && c6.dispatch("TEARDOWN", t9);
    }
  });

  // node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
  function a12(r11, e8, n9 = () => ({ containers: [] })) {
    let f14 = o10(c6), o11 = e8 ? f14.get(e8) : void 0, i10 = o11 ? o11.count > 0 : false;
    return n2(() => {
      if (!(!e8 || !r11)) return c6.dispatch("PUSH", e8, n9), () => c6.dispatch("POP", e8, n9);
    }, [r11, e8]), i10;
  }

  // node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
  function f9(e8, c13, n9 = () => [document.body]) {
    let r11 = I5(e8, "scroll-lock");
    a12(r11, c13, (t9) => {
      var o11;
      return { containers: [...(o11 = t9.containers) != null ? o11 : [], n9] };
    });
  }

  // node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
  init_compat_module();
  function t7(e8) {
    return [e8.screenX, e8.screenY];
  }
  function u11() {
    let e8 = A2([-1, -1]);
    return { wasMoved(r11) {
      let n9 = t7(r11);
      return e8.current[0] === n9[0] && e8.current[1] === n9[1] ? false : (e8.current = n9, true);
    }, update(r11) {
      e8.current = t7(r11);
    } };
  }

  // node_modules/@headlessui/react/dist/hooks/use-transition.js
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-flags.js
  init_compat_module();
  function c7(u17 = 0) {
    let [r11, a15] = d2(u17), g6 = q2((e8) => a15(e8), []), s12 = q2((e8) => a15((l8) => l8 | e8), []), m8 = q2((e8) => (r11 & e8) === e8, [r11]), n9 = q2((e8) => a15((l8) => l8 & ~e8), []), F6 = q2((e8) => a15((l8) => l8 ^ e8), []);
    return { flags: r11, setFlag: g6, addFlag: s12, hasFlag: m8, removeFlag: n9, toggleFlag: F6 };
  }

  // node_modules/@headlessui/react/dist/hooks/use-transition.js
  var T7;
  var S6;
  typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T7 = process == null ? void 0 : process.env) == null ? void 0 : T7["NODE_ENV"]) === "test" && typeof ((S6 = Element == null ? void 0 : Element.prototype) == null ? void 0 : S6.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
    return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join("\n")), [];
  });
  var A6 = ((i10) => (i10[i10.None = 0] = "None", i10[i10.Closed = 1] = "Closed", i10[i10.Enter = 2] = "Enter", i10[i10.Leave = 4] = "Leave", i10))(A6 || {});
  function x5(e8) {
    let r11 = {};
    for (let t9 in e8) e8[t9] === true && (r11["data-".concat(t9)] = "");
    return r11;
  }
  function N4(e8, r11, t9, n9) {
    let [i10, a15] = d2(t9), { hasFlag: s12, addFlag: o11, removeFlag: l8 } = c7(e8 && i10 ? 3 : 0), u17 = A2(false), f14 = A2(false), E7 = p3();
    return n2(() => {
      var d6;
      if (e8) {
        if (t9 && a15(true), !r11) {
          t9 && o11(3);
          return;
        }
        return (d6 = n9 == null ? void 0 : n9.start) == null || d6.call(n9, t9), C9(r11, { inFlight: u17, prepare() {
          f14.current ? f14.current = false : f14.current = u17.current, u17.current = true, !f14.current && (t9 ? (o11(3), l8(4)) : (o11(4), l8(2)));
        }, run() {
          f14.current ? t9 ? (l8(3), o11(4)) : (l8(4), o11(3)) : t9 ? l8(1) : o11(1);
        }, done() {
          var p10;
          f14.current && D5(r11) || (u17.current = false, l8(7), t9 || a15(false), (p10 = n9 == null ? void 0 : n9.end) == null || p10.call(n9, t9));
        } });
      }
    }, [e8, t9, r11, E7]), e8 ? [i10, { closed: s12(1), enter: s12(2), leave: s12(4), transition: s12(2) || s12(4) }] : [t9, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
  }
  function C9(e8, { prepare: r11, run: t9, done: n9, inFlight: i10 }) {
    let a15 = o4();
    return j7(e8, { prepare: r11, inFlight: i10 }), a15.nextFrame(() => {
      t9(), a15.requestAnimationFrame(() => {
        a15.add(M5(e8, n9));
      });
    }), a15.dispose;
  }
  function M5(e8, r11) {
    var a15, s12;
    let t9 = o4();
    if (!e8) return t9.dispose;
    let n9 = false;
    t9.add(() => {
      n9 = true;
    });
    let i10 = (s12 = (a15 = e8.getAnimations) == null ? void 0 : a15.call(e8).filter((o11) => o11 instanceof CSSTransition)) != null ? s12 : [];
    return i10.length === 0 ? (r11(), t9.dispose) : (Promise.allSettled(i10.map((o11) => o11.finished)).then(() => {
      n9 || r11();
    }), t9.dispose);
  }
  function j7(e8, { inFlight: r11, prepare: t9 }) {
    if (r11 != null && r11.current) {
      t9();
      return;
    }
    let n9 = e8.style.transition;
    e8.style.transition = "none", t9(), e8.offsetHeight, e8.style.transition = n9;
  }
  function D5(e8) {
    var t9, n9;
    return ((n9 = (t9 = e8.getAnimations) == null ? void 0 : t9.call(e8)) != null ? n9 : []).some((i10) => i10 instanceof CSSTransition && i10.playState !== "finished");
  }

  // node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
  init_compat_module();
  function F5(c13, { container: e8, accept: t9, walk: r11 }) {
    let o11 = A2(t9), l8 = A2(r11);
    y2(() => {
      o11.current = t9, l8.current = r11;
    }, [t9, r11]), n2(() => {
      if (!e8 || !c13) return;
      let n9 = l3(e8);
      if (!n9) return;
      let f14 = o11.current, p10 = l8.current, i10 = Object.assign((m8) => f14(m8), { acceptNode: f14 }), u17 = n9.createTreeWalker(e8, NodeFilter.SHOW_ELEMENT, i10, false);
      for (; u17.nextNode(); ) p10(u17.currentNode);
    }, [e8, c13, o11, l8]);
  }

  // node_modules/@headlessui/react/dist/hooks/use-watch.js
  init_compat_module();
  function m6(u17, t9) {
    let e8 = A2([]), r11 = o5(u17);
    y2(() => {
      let o11 = [...e8.current];
      for (let [a15, l8] of t9.entries()) if (e8.current[a15] !== l8) {
        let n9 = r11(t9, o11);
        return e8.current = t9, n9;
      }
    }, [r11, ...t9]);
  }

  // node_modules/@floating-ui/react/dist/floating-ui.react.mjs
  init_compat_module();
  init_compat_module();

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
  }
  var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function isTableElement(element) {
    return tableElements.has(getNodeName(element));
  }
  var topLayerSelectors = [":popover-open", ":modal"];
  function isTopLayer(element) {
    return topLayerSelectors.some((selector) => {
      try {
        return element.matches(selector);
      } catch (_e) {
        return false;
      }
    });
  }
  var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
  var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
  var containValues = ["paint", "layout", "strict", "content"];
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
  function getUserAgent() {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return uaData.brands.map((_ref) => {
        let {
          brand,
          version
        } = _ref;
        return brand + "/" + version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v6) => ({
    x: v6,
    y: v6
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
  function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  var lrPlacement = ["left", "right"];
  var rlPlacement = ["right", "left"];
  var tbPlacement = ["top", "bottom"];
  var btPlacement = ["bottom", "top"];
  function getSideList(side, isStart, rtl) {
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rlPlacement : lrPlacement;
        return isStart ? lrPlacement : rlPlacement;
      case "left":
      case "right":
        return isStart ? tbPlacement : btPlacement;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return __spreadValues({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, padding);
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x6,
      y: y8,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y8,
      left: x6,
      right: x6 + width,
      bottom: y8 + height,
      x: x6,
      y: y8
    };
  }

  // node_modules/@floating-ui/react/dist/floating-ui.react.mjs
  init_compat_module();

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x6,
      y: y8
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i10 = 0; i10 < validMiddleware.length; i10++) {
      const {
        name,
        fn: fn2
      } = validMiddleware[i10];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn2({
        x: x6,
        y: y8,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x6 = nextX != null ? nextX : x6;
      y8 = nextY != null ? nextY : y8;
      middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
        [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
      });
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x6,
            y: y8
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i10 = -1;
      }
    }
    return {
      x: x6,
      y: y8,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x6,
      y: y8,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x6,
      y: y8,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a, detectOverflowOptions = __objRest(_a, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d6) => getSideAxis(d6.placement) === initialSideAxis ? d6.overflows[0] > 0 : true)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d6) => d6.overflows[0] <= 0).sort((a15, b7) => a15.overflows[1] - b7.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d6) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d6.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d6) => [d6.placement, d6.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a15, b7) => a15[1] - b7[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  var originSides = /* @__PURE__ */ new Set(["left", "top"]);
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x6,
          y: y8,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x6 + diffCoords.x,
          y: y8 + diffCoords.y,
          data: __spreadProps(__spreadValues({}, diffCoords), {
            placement
          })
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x6,
          y: y8,
          placement
        } = state;
        const _a = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x7,
                y: y9
              } = _ref;
              return {
                x: x7,
                y: y9
              };
            }
          }
        } = _a, detectOverflowOptions = __objRest(_a, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x: x6,
          y: y8
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, state), {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        }));
        return __spreadProps(__spreadValues({}, limitedCoords), {
          data: {
            x: limitedCoords.x - x6,
            y: limitedCoords.y - y8,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        });
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const _a = evaluate(options, state), {
          apply = () => {
          }
        } = _a, detectOverflowOptions = __objRest(_a, [
          "apply"
        ]);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply(__spreadProps(__spreadValues({}, state), {
          availableWidth,
          availableHeight
        }));
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $5
    } = getCssDimensions(domElement);
    let x6 = ($5 ? round(rect.width) : rect.width) / width;
    let y8 = ($5 ? round(rect.height) : rect.height) / height;
    if (!x6 || !Number.isFinite(x6)) {
      x6 = 1;
    }
    if (!y8 || !Number.isFinite(y8)) {
      y8 = 1;
    }
    return {
      x: x6,
      y: y8
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x6 = (clientRect.left + visualOffsets.x) / scale.x;
    let y8 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x6 *= iframeScale.x;
        y8 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x6 += left;
        y8 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x6,
      y: y8
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x6 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y8 = htmlRect.top + scroll.scrollTop;
    return {
      x: x6,
      y: y8
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x6 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y8 = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x6 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x6,
      y: y8
    };
  }
  var SCROLLBAR_MAX = 25;
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x6 = 0;
    let y8 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x6 = visualViewport.offsetLeft;
        y8 = visualViewport.offsetTop;
      }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    if (windowScrollbarX <= 0) {
      const doc = html.ownerDocument;
      const body = doc.body;
      const bodyStyles = getComputedStyle(body);
      const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
      const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
      if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
        width -= clippingStableScrollbarWidth;
      }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
      width += windowScrollbarX;
    }
    return {
      width,
      height,
      x: x6,
      y: y8
    };
  }
  var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x6 = left * scale.x;
    const y8 = top * scale.y;
    return {
      width,
      height,
      x: x6,
      y: y8
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x6 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y8 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x6,
      y: y8,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a15, b7) {
    return a15.x === b7.x && a15.y === b7.y && a15.width === b7.width && a15.height === b7.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
          // Handle <iframe>s
          root: root.ownerDocument
        }));
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var detectOverflow2 = detectOverflow;
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = __spreadValues({
      platform
    }, options);
    const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
      _c: cache
    });
    return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
      platform: platformWithCache
    }));
  };

  // node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
  init_compat_module();
  init_compat_module();
  init_compat_module();
  var isClient = typeof document !== "undefined";
  var noop = function noop2() {
  };
  var index = isClient ? _2 : noop;
  function deepEqual(a15, b7) {
    if (a15 === b7) {
      return true;
    }
    if (typeof a15 !== typeof b7) {
      return false;
    }
    if (typeof a15 === "function" && a15.toString() === b7.toString()) {
      return true;
    }
    let length;
    let i10;
    let keys;
    if (a15 && b7 && typeof a15 === "object") {
      if (Array.isArray(a15)) {
        length = a15.length;
        if (length !== b7.length) return false;
        for (i10 = length; i10-- !== 0; ) {
          if (!deepEqual(a15[i10], b7[i10])) {
            return false;
          }
        }
        return true;
      }
      keys = Object.keys(a15);
      length = keys.length;
      if (length !== Object.keys(b7).length) {
        return false;
      }
      for (i10 = length; i10-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b7, keys[i10])) {
          return false;
        }
      }
      for (i10 = length; i10-- !== 0; ) {
        const key = keys[i10];
        if (key === "_owner" && a15.$$typeof) {
          continue;
        }
        if (!deepEqual(a15[key], b7[key])) {
          return false;
        }
      }
      return true;
    }
    return a15 !== a15 && b7 !== b7;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref = A2(value);
    index(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options;
    const [data, setData] = d2({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = d2(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = d2(null);
    const [_floating, _setFloating] = d2(null);
    const setReference = q2((node) => {
      if (node !== referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, []);
    const setFloating = q2((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = A2(null);
    const floatingRef = A2(null);
    const dataRef = A2(data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform2);
    const openRef = useLatestRef(open);
    const update = q2(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = __spreadProps(__spreadValues({}, data2), {
          // The floating element's position may be recomputed while it's closed
          // but still mounted (such as when transitioning out). To ensure
          // `isPositioned` will be `false` initially on the next open, avoid
          // setting it to `true` when `open === false` (must be specified).
          isPositioned: openRef.current !== false
        });
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          En(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef, openRef]);
    index(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => __spreadProps(__spreadValues({}, data2), {
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = A2(false);
    index(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index(() => {
      if (referenceEl) referenceRef.current = referenceEl;
      if (floatingEl) floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update);
        }
        update();
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
    const refs = T2(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = T2(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = T2(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x6 = roundByDPR(elements.floating, data.x);
      const y8 = roundByDPR(elements.floating, data.y);
      if (transform) {
        return __spreadValues(__spreadProps(__spreadValues({}, initialStyles), {
          transform: "translate(" + x6 + "px, " + y8 + "px)"
        }), getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        });
      }
      return {
        position: strategy,
        left: x6,
        top: y8
      };
    }, [strategy, transform, elements.floating, data.x, data.y]);
    return T2(() => __spreadProps(__spreadValues({}, data), {
      update,
      refs,
      elements,
      floatingStyles
    }), [data, update, refs, elements, floatingStyles]);
  }
  var offset3 = (options, deps) => __spreadProps(__spreadValues({}, offset2(options)), {
    options: [options, deps]
  });
  var shift3 = (options, deps) => __spreadProps(__spreadValues({}, shift2(options)), {
    options: [options, deps]
  });
  var flip3 = (options, deps) => __spreadProps(__spreadValues({}, flip2(options)), {
    options: [options, deps]
  });
  var size3 = (options, deps) => __spreadProps(__spreadValues({}, size2(options)), {
    options: [options, deps]
  });

  // node_modules/@floating-ui/react/dist/floating-ui.react.mjs
  var SafeReact = __spreadValues({}, compat_module_exports);
  var useInsertionEffect = SafeReact.useInsertionEffect;
  var useSafeInsertionEffect = useInsertionEffect || ((fn2) => fn2());
  function useEffectEvent(callback) {
    const ref = A2(() => {
      if (true) {
        throw new Error("Cannot call an event handler while rendering.");
      }
    });
    useSafeInsertionEffect(() => {
      ref.current = callback;
    });
    return q2(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref.current == null ? void 0 : ref.current(...args);
    }, []);
  }
  var ARROW_UP = "ArrowUp";
  var ARROW_DOWN = "ArrowDown";
  var ARROW_LEFT = "ArrowLeft";
  var ARROW_RIGHT = "ArrowRight";
  var index2 = typeof document !== "undefined" ? _2 : y2;
  var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
  var verticalKeys = [ARROW_UP, ARROW_DOWN];
  var allKeys = [...horizontalKeys, ...verticalKeys];
  var serverHandoffComplete = false;
  var count = 0;
  var genId = () => (
    // Ensure the id is unique with multiple independent versions of Floating UI
    // on <React 18
    "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
  );
  function useFloatingId() {
    const [id, setId] = d2(() => serverHandoffComplete ? genId() : void 0);
    index2(() => {
      if (id == null) {
        setId(genId());
      }
    }, []);
    y2(() => {
      serverHandoffComplete = true;
    }, []);
    return id;
  }
  var useReactId = SafeReact.useId;
  var useId = useReactId || useFloatingId;
  var devMessageSet;
  if (true) {
    devMessageSet = /* @__PURE__ */ new Set();
  }
  function warn() {
    var _devMessageSet;
    for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
      messages[_key] = arguments[_key];
    }
    const message = "Floating UI: " + messages.join(" ");
    if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
      var _devMessageSet2;
      (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
      console.warn(message);
    }
  }
  function error() {
    var _devMessageSet3;
    for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      messages[_key2] = arguments[_key2];
    }
    const message = "Floating UI: " + messages.join(" ");
    if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
      var _devMessageSet4;
      (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
      console.error(message);
    }
  }
  function createPubSub() {
    const map = /* @__PURE__ */ new Map();
    return {
      emit(event, data) {
        var _map$get;
        (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
      },
      on(event, listener) {
        map.set(event, [...map.get(event) || [], listener]);
      },
      off(event, listener) {
        var _map$get2;
        map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l8) => l8 !== listener)) || []);
      }
    };
  }
  var FloatingNodeContext = /* @__PURE__ */ Q(null);
  var FloatingTreeContext = /* @__PURE__ */ Q(null);
  var useFloatingParentNodeId = () => {
    var _React$useContext;
    return ((_React$useContext = x2(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
  };
  var useFloatingTree = () => x2(FloatingTreeContext);
  var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
  function useFloatingRootContext(options) {
    const {
      open = false,
      onOpenChange: onOpenChangeProp,
      elements: elementsProp
    } = options;
    const floatingId = useId();
    const dataRef = A2({});
    const [events] = d2(() => createPubSub());
    const nested = useFloatingParentNodeId() != null;
    if (true) {
      const optionDomReference = elementsProp.reference;
      if (optionDomReference && !isElement(optionDomReference)) {
        error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
      }
    }
    const [positionReference, setPositionReference] = d2(elementsProp.reference);
    const onOpenChange = useEffectEvent((open2, event, reason) => {
      dataRef.current.openEvent = open2 ? event : void 0;
      events.emit("openchange", {
        open: open2,
        event,
        reason,
        nested
      });
      onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
    });
    const refs = T2(() => ({
      setPositionReference
    }), []);
    const elements = T2(() => ({
      reference: positionReference || elementsProp.reference || null,
      floating: elementsProp.floating || null,
      domReference: elementsProp.reference
    }), [positionReference, elementsProp.reference, elementsProp.floating]);
    return T2(() => ({
      dataRef,
      open,
      onOpenChange,
      elements,
      events,
      floatingId,
      refs
    }), [open, onOpenChange, elements, events, floatingId, refs]);
  }
  function useFloating2(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      nodeId
    } = options;
    const internalRootContext = useFloatingRootContext(__spreadProps(__spreadValues({}, options), {
      elements: __spreadValues({
        reference: null,
        floating: null
      }, options.elements)
    }));
    const rootContext = options.rootContext || internalRootContext;
    const computedElements = rootContext.elements;
    const [_domReference, setDomReference] = d2(null);
    const [positionReference, _setPositionReference] = d2(null);
    const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
    const domReference = optionDomReference || _domReference;
    const domReferenceRef = A2(null);
    const tree = useFloatingTree();
    index2(() => {
      if (domReference) {
        domReferenceRef.current = domReference;
      }
    }, [domReference]);
    const position = useFloating(__spreadProps(__spreadValues({}, options), {
      elements: __spreadValues(__spreadValues({}, computedElements), positionReference && {
        reference: positionReference
      })
    }));
    const setPositionReference = q2((node) => {
      const computedPositionReference = isElement(node) ? {
        getBoundingClientRect: () => node.getBoundingClientRect(),
        contextElement: node
      } : node;
      _setPositionReference(computedPositionReference);
      position.refs.setReference(computedPositionReference);
    }, [position.refs]);
    const setReference = q2((node) => {
      if (isElement(node) || node === null) {
        domReferenceRef.current = node;
        setDomReference(node);
      }
      if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
      // `null` to support `positionReference` + an unstable `reference`
      // callback ref.
      node !== null && !isElement(node)) {
        position.refs.setReference(node);
      }
    }, [position.refs]);
    const refs = T2(() => __spreadProps(__spreadValues({}, position.refs), {
      setReference,
      setPositionReference,
      domReference: domReferenceRef
    }), [position.refs, setReference, setPositionReference]);
    const elements = T2(() => __spreadProps(__spreadValues({}, position.elements), {
      domReference
    }), [position.elements, domReference]);
    const context = T2(() => __spreadProps(__spreadValues(__spreadValues({}, position), rootContext), {
      refs,
      elements,
      nodeId
    }), [position, refs, elements, nodeId, rootContext]);
    index2(() => {
      rootContext.dataRef.current.floatingContext = context;
      const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
      if (node) {
        node.context = context;
      }
    });
    return T2(() => __spreadProps(__spreadValues({}, position), {
      context,
      refs,
      elements
    }), [position, refs, elements, context]);
  }
  var ACTIVE_KEY = "active";
  var SELECTED_KEY = "selected";
  function mergeProps(userProps, propsList, elementKey) {
    const map = /* @__PURE__ */ new Map();
    const isItem = elementKey === "item";
    let domUserProps = userProps;
    if (isItem && userProps) {
      const _a = userProps, {
        [ACTIVE_KEY]: _7,
        [SELECTED_KEY]: __
      } = _a, validProps = __objRest(_a, [
        __restKey(ACTIVE_KEY),
        __restKey(SELECTED_KEY)
      ]);
      domUserProps = validProps;
    }
    return __spreadValues(__spreadValues(__spreadValues({}, elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    }), domUserProps), propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn2) => fn2(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {}));
  }
  function useInteractions(propsList) {
    if (propsList === void 0) {
      propsList = [];
    }
    const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
    const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
    const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
    const getReferenceProps = q2(
      (userProps) => mergeProps(userProps, propsList, "reference"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      referenceDeps
    );
    const getFloatingProps = q2(
      (userProps) => mergeProps(userProps, propsList, "floating"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      floatingDeps
    );
    const getItemProps = q2(
      (userProps) => mergeProps(userProps, propsList, "item"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      itemDeps
    );
    return T2(() => ({
      getReferenceProps,
      getFloatingProps,
      getItemProps
    }), [getReferenceProps, getFloatingProps, getItemProps]);
  }
  function getArgsWithCustomFloatingHeight(state, height) {
    return __spreadProps(__spreadValues({}, state), {
      rects: __spreadProps(__spreadValues({}, state.rects), {
        floating: __spreadProps(__spreadValues({}, state.rects.floating), {
          height
        })
      })
    });
  }
  var inner = (props) => ({
    name: "inner",
    options: props,
    async fn(state) {
      const _a = evaluate(props, state), {
        listRef,
        overflowRef,
        onFallbackChange,
        offset: innerOffset = 0,
        index: index3 = 0,
        minItemsVisible = 4,
        referenceOverflowThreshold = 0,
        scrollRef
      } = _a, detectOverflowOptions = __objRest(_a, [
        "listRef",
        "overflowRef",
        "onFallbackChange",
        "offset",
        "index",
        "minItemsVisible",
        "referenceOverflowThreshold",
        "scrollRef"
      ]);
      const {
        rects,
        elements: {
          floating
        }
      } = state;
      const item = listRef.current[index3];
      const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
      const clientTop = floating.clientTop || scrollEl.clientTop;
      const floatingIsBordered = floating.clientTop !== 0;
      const scrollElIsBordered = scrollEl.clientTop !== 0;
      const floatingIsScrollEl = floating === scrollEl;
      if (true) {
        if (!state.placement.startsWith("bottom")) {
          warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
        }
      }
      if (!item) {
        return {};
      }
      const nextArgs = __spreadValues(__spreadValues({}, state), await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state));
      const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
      const refOverflow = await detectOverflow2(nextArgs, __spreadProps(__spreadValues({}, detectOverflowOptions), {
        elementContext: "reference"
      }));
      const diffY = max(0, overflow.top);
      const nextY = nextArgs.y + diffY;
      const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
      const rounder = isScrollable ? (v6) => v6 : round;
      const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
      scrollEl.style.maxHeight = maxHeight + "px";
      scrollEl.scrollTop = diffY;
      if (onFallbackChange) {
        const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
        En(() => onFallbackChange(shouldFallback));
      }
      if (overflowRef) {
        overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight(__spreadProps(__spreadValues({}, nextArgs), {
          y: nextY
        }), scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
      }
      return {
        y: nextY
      };
    }
  });
  function useInnerOffset(context, props) {
    const {
      open,
      elements
    } = context;
    const {
      enabled = true,
      overflowRef,
      scrollRef,
      onChange: unstable_onChange
    } = props;
    const onChange = useEffectEvent(unstable_onChange);
    const controlledScrollingRef = A2(false);
    const prevScrollTopRef = A2(null);
    const initialOverflowRef = A2(null);
    y2(() => {
      if (!enabled) return;
      function onWheel(e8) {
        if (e8.ctrlKey || !el || overflowRef.current == null) {
          return;
        }
        const dY = e8.deltaY;
        const isAtTop = overflowRef.current.top >= -0.5;
        const isAtBottom = overflowRef.current.bottom >= -0.5;
        const remainingScroll = el.scrollHeight - el.clientHeight;
        const sign = dY < 0 ? -1 : 1;
        const method = dY < 0 ? "max" : "min";
        if (el.scrollHeight <= el.clientHeight) {
          return;
        }
        if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
          e8.preventDefault();
          En(() => {
            onChange((d6) => d6 + Math[method](dY, remainingScroll * sign));
          });
        } else if (/firefox/i.test(getUserAgent())) {
          el.scrollTop += dY;
        }
      }
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (open && el) {
        el.addEventListener("wheel", onWheel);
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
          if (overflowRef.current != null) {
            initialOverflowRef.current = __spreadValues({}, overflowRef.current);
          }
        });
        return () => {
          prevScrollTopRef.current = null;
          initialOverflowRef.current = null;
          el.removeEventListener("wheel", onWheel);
        };
      }
    }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
    const floating = T2(() => ({
      onKeyDown() {
        controlledScrollingRef.current = true;
      },
      onWheel() {
        controlledScrollingRef.current = false;
      },
      onPointerMove() {
        controlledScrollingRef.current = false;
      },
      onScroll() {
        const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
        if (!overflowRef.current || !el || !controlledScrollingRef.current) {
          return;
        }
        if (prevScrollTopRef.current !== null) {
          const scrollDiff = el.scrollTop - prevScrollTopRef.current;
          if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
            En(() => onChange((d6) => d6 + scrollDiff));
          }
        }
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
        });
      }
    }), [elements.floating, onChange, overflowRef, scrollRef]);
    return T2(() => enabled ? {
      floating
    } : {}, [enabled, floating]);
  }

  // node_modules/@headlessui/react/dist/internal/floating.js
  init_compat_module();
  init_compat_module();
  var y6 = Q({ styles: void 0, setReference: () => {
  }, setFloating: () => {
  }, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
  y6.displayName = "FloatingContext";
  var $4 = Q(null);
  $4.displayName = "PlacementContext";
  function ye(e8) {
    return T2(() => e8 ? typeof e8 == "string" ? { to: e8 } : e8 : null, [e8]);
  }
  function Fe() {
    return x2(y6).setReference;
  }
  function Te() {
    let { getFloatingProps: e8, slot: t9 } = x2(y6);
    return q2((...n9) => Object.assign({}, e8(...n9), { "data-anchor": t9.anchor }), [e8, t9]);
  }
  function Re(e8 = null) {
    e8 === false && (e8 = null), typeof e8 == "string" && (e8 = { to: e8 });
    let t9 = x2($4), n9 = T2(() => e8, [JSON.stringify(e8, (l8, o11) => {
      var u17;
      return (u17 = o11 == null ? void 0 : o11.outerHTML) != null ? u17 : o11;
    })]);
    n2(() => {
      t9 == null || t9(n9 != null ? n9 : null);
    }, [t9, n9]);
    let r11 = x2(y6);
    return T2(() => [r11.setFloating, e8 ? r11.styles : {}], [r11.setFloating, e8, r11.styles]);
  }
  var D6 = 4;
  function Ae({ children: e8, enabled: t9 = true }) {
    let [n9, r11] = d2(null), [l8, o11] = d2(0), u17 = A2(null), [f14, s12] = d2(null);
    ce(f14);
    let i10 = t9 && n9 !== null && f14 !== null, { to: F6 = "bottom", gap: E7 = 0, offset: A7 = 0, padding: c13 = 0, inner: h8 } = ge(n9, f14), [a15, p10 = "center"] = F6.split(" ");
    n2(() => {
      i10 && o11(0);
    }, [i10]);
    let { refs: b7, floatingStyles: S8, context: g6 } = useFloating2({ open: i10, placement: a15 === "selection" ? p10 === "center" ? "bottom" : "bottom-".concat(p10) : p10 === "center" ? "".concat(a15) : "".concat(a15, "-").concat(p10), strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: a15 === "selection" ? 0 : E7, crossAxis: A7 }), shift3({ padding: c13 }), a15 !== "selection" && flip3({ padding: c13 }), a15 === "selection" && h8 ? inner(__spreadProps(__spreadValues({}, h8), { padding: c13, overflowRef: u17, offset: l8, minItemsVisible: D6, referenceOverflowThreshold: c13, onFallbackChange(P7) {
      var L6, N5;
      if (!P7) return;
      let d6 = g6.elements.floating;
      if (!d6) return;
      let M6 = parseFloat(getComputedStyle(d6).scrollPaddingBottom) || 0, I9 = Math.min(D6, d6.childElementCount), W3 = 0, B4 = 0;
      for (let m8 of (N5 = (L6 = g6.elements.floating) == null ? void 0 : L6.childNodes) != null ? N5 : []) if (n4(m8)) {
        let x6 = m8.offsetTop, k7 = x6 + m8.clientHeight + M6, H6 = d6.scrollTop, U4 = H6 + d6.clientHeight;
        if (x6 >= H6 && k7 <= U4) I9--;
        else {
          B4 = Math.max(0, Math.min(k7, U4) - Math.max(x6, H6)), W3 = m8.clientHeight;
          break;
        }
      }
      I9 >= 1 && o11((m8) => {
        let x6 = W3 * I9 - B4 + M6;
        return m8 >= x6 ? m8 : x6;
      });
    } })) : null, size3({ padding: c13, apply({ availableWidth: P7, availableHeight: d6, elements: M6 }) {
      Object.assign(M6.floating.style, { overflow: "auto", maxWidth: "".concat(P7, "px"), maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(d6, "px)") });
    } })].filter(Boolean), whileElementsMounted: autoUpdate }), [w8 = a15, V5 = p10] = g6.placement.split("-");
    a15 === "selection" && (w8 = "selection");
    let G5 = T2(() => ({ anchor: [w8, V5].filter(Boolean).join(" ") }), [w8, V5]), K4 = useInnerOffset(g6, { overflowRef: u17, onChange: o11 }), { getReferenceProps: Q3, getFloatingProps: X3 } = useInteractions([K4]), Y3 = o5((P7) => {
      s12(P7), b7.setFloating(P7);
    });
    return _($4.Provider, { value: r11 }, _(y6.Provider, { value: { setFloating: Y3, setReference: b7.setReference, styles: S8, getReferenceProps: Q3, getFloatingProps: X3, slot: G5 } }, e8));
  }
  function ce(e8) {
    n2(() => {
      if (!e8) return;
      let t9 = new MutationObserver(() => {
        let n9 = window.getComputedStyle(e8).maxHeight, r11 = parseFloat(n9);
        if (isNaN(r11)) return;
        let l8 = parseInt(n9);
        isNaN(l8) || r11 !== l8 && (e8.style.maxHeight = "".concat(Math.ceil(r11), "px"));
      });
      return t9.observe(e8, { attributes: true, attributeFilter: ["style"] }), () => {
        t9.disconnect();
      };
    }, [e8]);
  }
  function ge(e8, t9) {
    var o11, u17, f14;
    let n9 = O4((o11 = e8 == null ? void 0 : e8.gap) != null ? o11 : "var(--anchor-gap, 0)", t9), r11 = O4((u17 = e8 == null ? void 0 : e8.offset) != null ? u17 : "var(--anchor-offset, 0)", t9), l8 = O4((f14 = e8 == null ? void 0 : e8.padding) != null ? f14 : "var(--anchor-padding, 0)", t9);
    return __spreadProps(__spreadValues({}, e8), { gap: n9, offset: r11, padding: l8 });
  }
  function O4(e8, t9, n9 = void 0) {
    let r11 = p3(), l8 = o5((s12, i10) => {
      if (s12 == null) return [n9, null];
      if (typeof s12 == "number") return [s12, null];
      if (typeof s12 == "string") {
        if (!i10) return [n9, null];
        let F6 = J3(s12, i10);
        return [F6, (E7) => {
          let A7 = q4(s12);
          {
            let c13 = A7.map((h8) => window.getComputedStyle(i10).getPropertyValue(h8));
            r11.requestAnimationFrame(function h8() {
              r11.nextFrame(h8);
              let a15 = false;
              for (let [b7, S8] of A7.entries()) {
                let g6 = window.getComputedStyle(i10).getPropertyValue(S8);
                if (c13[b7] !== g6) {
                  c13[b7] = g6, a15 = true;
                  break;
                }
              }
              if (!a15) return;
              let p10 = J3(s12, i10);
              F6 !== p10 && (E7(p10), F6 = p10);
            });
          }
          return r11.dispose;
        }];
      }
      return [n9, null];
    }), o11 = T2(() => l8(e8, t9)[0], [e8, t9]), [u17 = o11, f14] = d2();
    return n2(() => {
      let [s12, i10] = l8(e8, t9);
      if (f14(s12), !!i10) return i10(f14);
    }, [e8, t9]), u17;
  }
  function q4(e8) {
    let t9 = /var\((.*)\)/.exec(e8);
    if (t9) {
      let n9 = t9[1].indexOf(",");
      if (n9 === -1) return [t9[1]];
      let r11 = t9[1].slice(0, n9).trim(), l8 = t9[1].slice(n9 + 1).trim();
      return l8 ? [r11, ...q4(l8)] : [r11];
    }
    return [];
  }
  function J3(e8, t9) {
    let n9 = document.createElement("div");
    t9.appendChild(n9), n9.style.setProperty("margin-top", "0px", "important"), n9.style.setProperty("margin-top", e8, "important");
    let r11 = parseFloat(window.getComputedStyle(n9).marginTop) || 0;
    return t9.removeChild(n9), r11;
  }

  // node_modules/@headlessui/react/dist/internal/frozen.js
  init_compat_module();
  function f10({ children: t9, freeze: e8 }, o11) {
    let n9 = u12(e8, t9);
    return mn(n9) ? _n(n9, { ref: o11 }) : Rn.createElement(Rn.Fragment, null, n9);
  }
  var s11 = Rn.forwardRef(f10);
  function u12(t9, e8) {
    let [o11, n9] = d2(e8);
    return !t9 && o11 !== e8 && n9(e8), t9 ? o11 : e8;
  }

  // node_modules/@headlessui/react/dist/internal/open-closed.js
  init_compat_module();
  var n7 = Q(null);
  n7.displayName = "OpenClosedContext";
  var i8 = ((e8) => (e8[e8.Open = 1] = "Open", e8[e8.Closed = 2] = "Closed", e8[e8.Closing = 4] = "Closing", e8[e8.Opening = 8] = "Opening", e8))(i8 || {});
  function u13() {
    return x2(n7);
  }
  function c8({ value: o11, children: t9 }) {
    return Rn.createElement(n7.Provider, { value: o11 }, t9);
  }

  // node_modules/@headlessui/react/dist/utils/document-ready.js
  function t8(n9) {
    function e8() {
      document.readyState !== "loading" && (n9(), document.removeEventListener("DOMContentLoaded", e8));
    }
    typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e8), e8());
  }

  // node_modules/@headlessui/react/dist/utils/active-element-history.js
  var n8 = [];
  t8(() => {
    function e8(t9) {
      if (!i4(t9.target) || t9.target === document.body || n8[0] === t9.target) return;
      let r11 = t9.target;
      r11 = r11.closest(E5), n8.unshift(r11 != null ? r11 : t9.target), n8 = n8.filter((o11) => o11 != null && o11.isConnected), n8.splice(10);
    }
    window.addEventListener("click", e8, { capture: true }), window.addEventListener("mousedown", e8, { capture: true }), window.addEventListener("focus", e8, { capture: true }), document.body.addEventListener("click", e8, { capture: true }), document.body.addEventListener("mousedown", e8, { capture: true }), document.body.addEventListener("focus", e8, { capture: true });
  });

  // node_modules/@headlessui/react/dist/utils/calculate-active-index.js
  function u14(l8) {
    throw new Error("Unexpected object: " + l8);
  }
  var c9 = ((i10) => (i10[i10.First = 0] = "First", i10[i10.Previous = 1] = "Previous", i10[i10.Next = 2] = "Next", i10[i10.Last = 3] = "Last", i10[i10.Specific = 4] = "Specific", i10[i10.Nothing = 5] = "Nothing", i10))(c9 || {});
  function f11(l8, n9) {
    let t9 = n9.resolveItems();
    if (t9.length <= 0) return null;
    let r11 = n9.resolveActiveIndex(), s12 = r11 != null ? r11 : -1;
    switch (l8.focus) {
      case 0: {
        for (let e8 = 0; e8 < t9.length; ++e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 1: {
        s12 === -1 && (s12 = t9.length);
        for (let e8 = s12 - 1; e8 >= 0; --e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 2: {
        for (let e8 = s12 + 1; e8 < t9.length; ++e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 3: {
        for (let e8 = t9.length - 1; e8 >= 0; --e8) if (!n9.resolveDisabled(t9[e8], e8, t9)) return e8;
        return r11;
      }
      case 4: {
        for (let e8 = 0; e8 < t9.length; ++e8) if (n9.resolveId(t9[e8], e8, t9) === l8.id) return e8;
        return r11;
      }
      case 5:
        return null;
      default:
        u14(l8);
    }
  }

  // node_modules/@headlessui/react/dist/components/portal/portal.js
  init_compat_module();
  init_compat_module();

  // node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
  init_compat_module();
  function c10(t9) {
    let r11 = o5(t9), e8 = A2(false);
    y2(() => (e8.current = false, () => {
      e8.current = true, t3(() => {
        e8.current && r11();
      });
    }), [r11]);
  }

  // node_modules/@headlessui/react/dist/internal/portal-force-root.js
  init_compat_module();
  var e7 = Q(false);
  function a13() {
    return x2(e7);
  }

  // node_modules/@headlessui/react/dist/components/portal/portal.js
  function W2(e8) {
    let o11 = a13(), l8 = x2(c11), [r11, p10] = d2(() => {
      var s12;
      if (!o11 && l8 !== null) return (s12 = l8.current) != null ? s12 : null;
      if (s3.isServer) return null;
      let t9 = e8 == null ? void 0 : e8.getElementById("headlessui-portal-root");
      if (t9) return t9;
      if (e8 === null) return null;
      let n9 = e8.createElement("div");
      return n9.setAttribute("id", "headlessui-portal-root"), e8.body.appendChild(n9);
    });
    return y2(() => {
      r11 !== null && (e8 != null && e8.body.contains(r11) || e8 == null || e8.body.appendChild(r11));
    }, [r11, e8]), y2(() => {
      o11 || l8 !== null && p10(l8.current);
    }, [l8, p10, o11]), r11;
  }
  var _5 = k;
  var j8 = Y2(function(o11, l8) {
    let _a = o11, { ownerDocument: r11 = null } = _a, p10 = __objRest(_a, ["ownerDocument"]), t9 = A2(null), n9 = y3(T4((a15) => {
      t9.current = a15;
    }), l8), s12 = u10(t9.current), C10 = r11 != null ? r11 : s12, u17 = W2(C10), y8 = x2(m7), g6 = p3(), v6 = K3();
    return c10(() => {
      var a15;
      u17 && u17.childNodes.length <= 0 && ((a15 = u17.parentElement) == null || a15.removeChild(u17));
    }), u17 ? $2(Rn.createElement("div", { "data-headlessui-portal": "", ref: (a15) => {
      g6.dispose(), y8 && a15 && g6.add(y8.register(a15));
    } }, v6({ ourProps: { ref: n9 }, theirProps: p10, slot: {}, defaultTag: _5, name: "Portal" })), u17) : null;
  });
  function S7(e8, o11) {
    let l8 = y3(o11), _a = e8, { enabled: r11 = true, ownerDocument: p10 } = _a, t9 = __objRest(_a, ["enabled", "ownerDocument"]), n9 = K3();
    return r11 ? Rn.createElement(j8, __spreadProps(__spreadValues({}, t9), { ownerDocument: p10, ref: l8 })) : n9({ ourProps: { ref: l8 }, theirProps: t9, slot: {}, defaultTag: _5, name: "Portal" });
  }
  var I7 = k;
  var c11 = Q(null);
  function D7(e8, o11) {
    let _a = e8, { target: l8 } = _a, r11 = __objRest(_a, ["target"]), t9 = { ref: y3(o11) }, n9 = K3();
    return Rn.createElement(c11.Provider, { value: l8 }, n9({ ourProps: t9, theirProps: r11, defaultTag: I7, name: "Popover.Group" }));
  }
  var m7 = Q(null);
  var J4 = Y2(S7);
  var X2 = Y2(D7);
  var te = Object.assign(J4, { Group: X2 });

  // node_modules/@headlessui/react/dist/utils/element-movement.js
  var c12 = { Idle: { kind: "Idle" }, Tracked: (e8) => ({ kind: "Tracked", position: e8 }), Moved: { kind: "Moved" } };
  function a14(e8) {
    let t9 = e8.getBoundingClientRect();
    return "".concat(t9.x, ",").concat(t9.y);
  }
  function p8(e8, t9, i10) {
    let n9 = o4();
    if (t9.kind === "Tracked") {
      let o11 = function() {
        d6 !== a14(e8) && (n9.dispose(), i10());
      };
      var f14 = o11;
      let { position: d6 } = t9, s12 = new ResizeObserver(o11);
      s12.observe(e8), n9.add(() => s12.disconnect()), n9.addEventListener(window, "scroll", o11, { passive: true }), n9.addEventListener(window, "resize", o11);
    }
    return () => n9.dispose();
  }

  // node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js
  var I8 = Object.defineProperty;
  var h7 = (t9, i10, e8) => i10 in t9 ? I8(t9, i10, { enumerable: true, configurable: true, writable: true, value: e8 }) : t9[i10] = e8;
  var f12 = (t9, i10, e8) => (h7(t9, typeof i10 != "symbol" ? i10 + "" : i10, e8), e8);
  var P6 = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(P6 || {});
  var k6 = ((e8) => (e8[e8.Single = 0] = "Single", e8[e8.Multi = 1] = "Multi", e8))(k6 || {});
  var _6 = ((n9) => (n9[n9.Pointer = 0] = "Pointer", n9[n9.Focus = 1] = "Focus", n9[n9.Other = 2] = "Other", n9))(_6 || {});
  var D8 = ((l8) => (l8[l8.OpenCombobox = 0] = "OpenCombobox", l8[l8.CloseCombobox = 1] = "CloseCombobox", l8[l8.GoToOption = 2] = "GoToOption", l8[l8.SetTyping = 3] = "SetTyping", l8[l8.RegisterOption = 4] = "RegisterOption", l8[l8.UnregisterOption = 5] = "UnregisterOption", l8[l8.DefaultToFirstOption = 6] = "DefaultToFirstOption", l8[l8.SetActivationTrigger = 7] = "SetActivationTrigger", l8[l8.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", l8[l8.SetInputElement = 9] = "SetInputElement", l8[l8.SetButtonElement = 10] = "SetButtonElement", l8[l8.SetOptionsElement = 11] = "SetOptionsElement", l8[l8.MarkInputAsMoved = 12] = "MarkInputAsMoved", l8))(D8 || {});
  function v5(t9, i10 = (e8) => e8) {
    let e8 = t9.activeOptionIndex !== null ? t9.options[t9.activeOptionIndex] : null, n9 = i10(t9.options.slice()), o11 = n9.length > 0 && n9[0].dataRef.current.order !== null ? n9.sort((u17, a15) => u17.dataRef.current.order - a15.dataRef.current.order) : G4(n9, (u17) => u17.dataRef.current.domRef.current), r11 = e8 ? o11.indexOf(e8) : null;
    return r11 === -1 && (r11 = null), { options: o11, activeOptionIndex: r11 };
  }
  var j9 = { [1](t9) {
    var e8;
    if ((e8 = t9.dataRef.current) != null && e8.disabled || t9.comboboxState === 1) return t9;
    let i10 = t9.inputElement ? c12.Tracked(a14(t9.inputElement)) : t9.inputPositionState;
    return __spreadProps(__spreadValues({}, t9), { activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, inputPositionState: i10, __demoMode: false });
  }, [0](t9) {
    var i10, e8;
    if ((i10 = t9.dataRef.current) != null && i10.disabled || t9.comboboxState === 0) return t9;
    if ((e8 = t9.dataRef.current) != null && e8.value) {
      let n9 = t9.dataRef.current.calculateIndex(t9.dataRef.current.value);
      if (n9 !== -1) return __spreadProps(__spreadValues({}, t9), { activeOptionIndex: n9, comboboxState: 0, __demoMode: false, inputPositionState: c12.Idle });
    }
    return __spreadProps(__spreadValues({}, t9), { comboboxState: 0, inputPositionState: c12.Idle, __demoMode: false });
  }, [3](t9, i10) {
    return t9.isTyping === i10.isTyping ? t9 : __spreadProps(__spreadValues({}, t9), { isTyping: i10.isTyping });
  }, [2](t9, i10) {
    var r11, u17, a15, s12;
    if ((r11 = t9.dataRef.current) != null && r11.disabled || t9.optionsElement && !((u17 = t9.dataRef.current) != null && u17.optionsPropsRef.current.static) && t9.comboboxState === 1) return t9;
    if (t9.virtual) {
      let { options: p10, disabled: c13 } = t9.virtual, m8 = i10.focus === c9.Specific ? i10.idx : f11(i10, { resolveItems: () => p10, resolveActiveIndex: () => {
        var l8, x6;
        return (x6 = (l8 = t9.activeOptionIndex) != null ? l8 : p10.findIndex((S8) => !c13(S8))) != null ? x6 : null;
      }, resolveDisabled: c13, resolveId() {
        throw new Error("Function not implemented.");
      } }), b7 = (a15 = i10.trigger) != null ? a15 : 2;
      return t9.activeOptionIndex === m8 && t9.activationTrigger === b7 ? t9 : __spreadProps(__spreadValues({}, t9), { activeOptionIndex: m8, activationTrigger: b7, isTyping: false, __demoMode: false });
    }
    let e8 = v5(t9);
    if (e8.activeOptionIndex === null) {
      let p10 = e8.options.findIndex((c13) => !c13.dataRef.current.disabled);
      p10 !== -1 && (e8.activeOptionIndex = p10);
    }
    let n9 = i10.focus === c9.Specific ? i10.idx : f11(i10, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (p10) => p10.id, resolveDisabled: (p10) => p10.dataRef.current.disabled }), o11 = (s12 = i10.trigger) != null ? s12 : 2;
    return t9.activeOptionIndex === n9 && t9.activationTrigger === o11 ? t9 : __spreadProps(__spreadValues(__spreadValues({}, t9), e8), { isTyping: false, activeOptionIndex: n9, activationTrigger: o11, __demoMode: false });
  }, [4]: (t9, i10) => {
    var r11, u17, a15, s12;
    if ((r11 = t9.dataRef.current) != null && r11.virtual) return __spreadProps(__spreadValues({}, t9), { options: [...t9.options, i10.payload] });
    let e8 = i10.payload, n9 = v5(t9, (p10) => (p10.push(e8), p10));
    t9.activeOptionIndex === null && (a15 = (u17 = t9.dataRef.current).isSelected) != null && a15.call(u17, i10.payload.dataRef.current.value) && (n9.activeOptionIndex = n9.options.indexOf(e8));
    let o11 = __spreadProps(__spreadValues(__spreadValues({}, t9), n9), { activationTrigger: 2 });
    return (s12 = t9.dataRef.current) != null && s12.__demoMode && t9.dataRef.current.value === void 0 && (o11.activeOptionIndex = 0), o11;
  }, [5]: (t9, i10) => {
    var n9;
    if ((n9 = t9.dataRef.current) != null && n9.virtual) return __spreadProps(__spreadValues({}, t9), { options: t9.options.filter((o11) => o11.id !== i10.id) });
    let e8 = v5(t9, (o11) => {
      let r11 = o11.findIndex((u17) => u17.id === i10.id);
      return r11 !== -1 && o11.splice(r11, 1), o11;
    });
    return __spreadProps(__spreadValues(__spreadValues({}, t9), e8), { activationTrigger: 2 });
  }, [6]: (t9, i10) => t9.defaultToFirstOption === i10.value ? t9 : __spreadProps(__spreadValues({}, t9), { defaultToFirstOption: i10.value }), [7]: (t9, i10) => t9.activationTrigger === i10.trigger ? t9 : __spreadProps(__spreadValues({}, t9), { activationTrigger: i10.trigger }), [8]: (t9, i10) => {
    var n9, o11;
    if (t9.virtual === null) return __spreadProps(__spreadValues({}, t9), { virtual: { options: i10.options, disabled: (n9 = i10.disabled) != null ? n9 : () => false } });
    if (t9.virtual.options === i10.options && t9.virtual.disabled === i10.disabled) return t9;
    let e8 = t9.activeOptionIndex;
    if (t9.activeOptionIndex !== null) {
      let r11 = i10.options.indexOf(t9.virtual.options[t9.activeOptionIndex]);
      r11 !== -1 ? e8 = r11 : e8 = null;
    }
    return __spreadProps(__spreadValues({}, t9), { activeOptionIndex: e8, virtual: { options: i10.options, disabled: (o11 = i10.disabled) != null ? o11 : () => false } });
  }, [9]: (t9, i10) => t9.inputElement === i10.element ? t9 : __spreadProps(__spreadValues({}, t9), { inputElement: i10.element }), [10]: (t9, i10) => t9.buttonElement === i10.element ? t9 : __spreadProps(__spreadValues({}, t9), { buttonElement: i10.element }), [11]: (t9, i10) => t9.optionsElement === i10.element ? t9 : __spreadProps(__spreadValues({}, t9), { optionsElement: i10.element }), [12](t9) {
    return t9.inputPositionState.kind !== "Tracked" ? t9 : __spreadProps(__spreadValues({}, t9), { inputPositionState: c12.Moved });
  } };
  var y7 = class _y extends T5 {
    constructor(e8) {
      super(e8);
      f12(this, "actions", { onChange: (e9) => {
        let { onChange: n9, compare: o11, mode: r11, value: u17 } = this.state.dataRef.current;
        return u3(r11, { [0]: () => n9 == null ? void 0 : n9(e9), [1]: () => {
          let a15 = u17.slice(), s12 = a15.findIndex((p10) => o11(p10, e9));
          return s12 === -1 ? a15.push(e9) : a15.splice(s12, 1), n9 == null ? void 0 : n9(a15);
        } });
      }, registerOption: (e9, n9) => (this.send({ type: 4, payload: { id: e9, dataRef: n9 } }), () => {
        this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(n9.current.value) && this.send({ type: 6, value: true }), this.send({ type: 5, id: e9 });
      }), goToOption: (e9, n9) => (this.send({ type: 6, value: false }), this.send(__spreadProps(__spreadValues({ type: 2 }, e9), { trigger: n9 }))), setIsTyping: (e9) => {
        this.send({ type: 3, isTyping: e9 });
      }, closeCombobox: () => {
        var e9, n9;
        this.send({ type: 1 }), this.send({ type: 6, value: false }), (n9 = (e9 = this.state.dataRef.current).onClose) == null || n9.call(e9);
      }, openCombobox: () => {
        this.send({ type: 0 }), this.send({ type: 6, value: true });
      }, setActivationTrigger: (e9) => {
        this.send({ type: 7, trigger: e9 });
      }, selectActiveOption: () => {
        let e9 = this.selectors.activeOptionIndex(this.state);
        if (e9 !== null) {
          if (this.actions.setIsTyping(false), this.state.virtual) this.actions.onChange(this.state.virtual.options[e9]);
          else {
            let { dataRef: n9 } = this.state.options[e9];
            this.actions.onChange(n9.current.value);
          }
          this.actions.goToOption({ focus: c9.Specific, idx: e9 });
        }
      }, setInputElement: (e9) => {
        this.send({ type: 9, element: e9 });
      }, setButtonElement: (e9) => {
        this.send({ type: 10, element: e9 });
      }, setOptionsElement: (e9) => {
        this.send({ type: 11, element: e9 });
      } });
      f12(this, "selectors", { activeDescendantId: (e9) => {
        var o11, r11;
        let n9 = this.selectors.activeOptionIndex(e9);
        if (n9 !== null) return e9.virtual ? (r11 = e9.options.find((u17) => !u17.dataRef.current.disabled && e9.dataRef.current.compare(u17.dataRef.current.value, e9.virtual.options[n9]))) == null ? void 0 : r11.id : (o11 = e9.options[n9]) == null ? void 0 : o11.id;
      }, activeOptionIndex: (e9) => {
        if (e9.defaultToFirstOption && e9.activeOptionIndex === null && (e9.virtual ? e9.virtual.options.length > 0 : e9.options.length > 0)) {
          if (e9.virtual) {
            let { options: o11, disabled: r11 } = e9.virtual, u17 = o11.findIndex((a15) => {
              var s12;
              return !((s12 = r11 == null ? void 0 : r11(a15)) != null && s12);
            });
            if (u17 !== -1) return u17;
          }
          let n9 = e9.options.findIndex((o11) => !o11.dataRef.current.disabled);
          if (n9 !== -1) return n9;
        }
        return e9.activeOptionIndex;
      }, activeOption: (e9) => {
        var o11, r11;
        let n9 = this.selectors.activeOptionIndex(e9);
        return n9 === null ? null : e9.virtual ? e9.virtual.options[n9 != null ? n9 : 0] : (r11 = (o11 = e9.options[n9]) == null ? void 0 : o11.dataRef.current.value) != null ? r11 : null;
      }, isActive: (e9, n9, o11) => {
        var u17;
        let r11 = this.selectors.activeOptionIndex(e9);
        return r11 === null ? false : e9.virtual ? r11 === e9.dataRef.current.calculateIndex(n9) : ((u17 = e9.options[r11]) == null ? void 0 : u17.id) === o11;
      }, shouldScrollIntoView: (e9, n9, o11) => !(e9.virtual || e9.__demoMode || e9.comboboxState !== 0 || e9.activationTrigger === 0 || !this.selectors.isActive(e9, n9, o11)), didInputMove(e9) {
        return e9.inputPositionState.kind === "Moved";
      } });
      {
        let n9 = this.state.id, o11 = x4.get(null);
        this.disposables.add(o11.on(k4.Push, (r11) => {
          !o11.selectors.isTop(r11, n9) && this.state.comboboxState === 0 && this.actions.closeCombobox();
        })), this.on(0, () => o11.actions.push(n9)), this.on(1, () => o11.actions.pop(n9));
      }
      this.disposables.group((n9) => {
        this.on(1, (o11) => {
          o11.inputElement && (n9.dispose(), n9.add(p8(o11.inputElement, o11.inputPositionState, () => {
            this.send({ type: 12 });
          })));
        });
      });
    }
    static new({ id: e8, virtual: n9 = null, __demoMode: o11 = false }) {
      var r11;
      return new _y({ id: e8, dataRef: { current: {} }, comboboxState: o11 ? 0 : 1, isTyping: false, options: [], virtual: n9 ? { options: n9.options, disabled: (r11 = n9.disabled) != null ? r11 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: o11, inputPositionState: c12.Idle });
    }
    reduce(e8, n9) {
      return u3(n9.type, j9, e8, n9);
    }
  };

  // node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js
  init_compat_module();
  var u15 = Q(null);
  function p9(n9) {
    let o11 = x2(u15);
    if (o11 === null) {
      let e8 = new Error("<".concat(n9, " /> is missing a parent <Combobox /> component."));
      throw Error.captureStackTrace && Error.captureStackTrace(e8, b6), e8;
    }
    return o11;
  }
  function b6({ id: n9, virtual: o11 = null, __demoMode: e8 = false }) {
    let t9 = T2(() => y7.new({ id: n9, virtual: o11, __demoMode: e8 }), []);
    return c10(() => t9.dispose()), t9;
  }

  // node_modules/@headlessui/react/dist/components/combobox/combobox.js
  var de = Q(null);
  de.displayName = "ComboboxDataContext";
  function te2(T8) {
    let O5 = x2(de);
    if (O5 === null) {
      let e8 = new Error("<".concat(T8, " /> is missing a parent <Combobox /> component."));
      throw Error.captureStackTrace && Error.captureStackTrace(e8, te2), e8;
    }
    return O5;
  }
  var Le = Q(null);
  function Eo(T8) {
    let O5 = p9("VirtualProvider"), e8 = te2("VirtualProvider"), { options: o11 } = e8.virtual, E7 = S3(O5, (a15) => a15.optionsElement), [R2, y8] = T2(() => {
      let a15 = E7;
      if (!a15) return [0, 0];
      let u17 = window.getComputedStyle(a15);
      return [parseFloat(u17.paddingBlockStart || u17.paddingTop), parseFloat(u17.paddingBlockEnd || u17.paddingBottom)];
    }, [E7]), b7 = useVirtualizer({ enabled: o11.length !== 0, scrollPaddingStart: R2, scrollPaddingEnd: y8, count: o11.length, estimateSize() {
      return 40;
    }, getScrollElement() {
      return O5.state.optionsElement;
    }, overscan: 12 }), [h8, p10] = d2(0);
    n2(() => {
      p10((a15) => a15 + 1);
    }, [o11]);
    let f14 = b7.getVirtualItems(), n9 = S3(O5, (a15) => a15.activationTrigger === _6.Pointer), m8 = S3(O5, O5.selectors.activeOptionIndex);
    return f14.length === 0 ? null : Rn.createElement(Le.Provider, { value: b7 }, Rn.createElement("div", { style: { position: "relative", width: "100%", height: "".concat(b7.getTotalSize(), "px") }, ref: (a15) => {
      a15 && (n9 || m8 !== null && o11.length > m8 && b7.scrollToIndex(m8));
    } }, f14.map((a15) => {
      var u17;
      return Rn.createElement(k, { key: a15.key }, Rn.cloneElement((u17 = T8.children) == null ? void 0 : u17.call(T8, __spreadProps(__spreadValues({}, T8.slot), { option: o11[a15.index] })), { key: "".concat(h8, "-").concat(a15.key), "data-index": a15.index, "aria-setsize": o11.length, "aria-posinset": a15.index + 1, style: { position: "absolute", top: 0, left: 0, transform: "translateY(".concat(a15.start, "px)"), overflowAnchor: "none" } }));
    })));
  }
  var ho = k;
  function Ao(T8, O5) {
    let e8 = g2(), o11 = a3(), _a = T8, { value: E7, defaultValue: R2, onChange: y8, form: b7, name: h8, by: p10, invalid: f14 = false, disabled: n9 = o11 || false, onClose: m8, __demoMode: a15 = false, multiple: u17 = false, immediate: A7 = false, virtual: d6 = null, nullable: X3 } = _a, G5 = __objRest(_a, ["value", "defaultValue", "onChange", "form", "name", "by", "invalid", "disabled", "onClose", "__demoMode", "multiple", "immediate", "virtual", "nullable"]), C10 = l4(R2), [x6 = u17 ? [] : void 0, v6] = b4(E7, y8, C10), c13 = b6({ id: e8, virtual: d6, __demoMode: a15 }), z4 = A2({ static: false, hold: false }), D9 = u7(p10), K4 = o5((i10) => d6 ? p10 === null ? d6.options.indexOf(i10) : d6.options.findIndex((M6) => D9(M6, i10)) : c13.state.options.findIndex((M6) => D9(M6.dataRef.current.value, i10))), W3 = q2((i10) => u3(l8.mode, { [k6.Multi]: () => x6.some((M6) => D9(M6, i10)), [k6.Single]: () => D9(x6, i10) }), [x6]), S8 = S3(c13, (i10) => i10.virtual), j10 = o5(() => m8 == null ? void 0 : m8()), l8 = T2(() => ({ __demoMode: a15, immediate: A7, optionsPropsRef: z4, value: x6, defaultValue: C10, disabled: n9, invalid: f14, mode: u17 ? k6.Multi : k6.Single, virtual: d6 ? S8 : null, onChange: v6, isSelected: W3, calculateIndex: K4, compare: D9, onClose: j10 }), [a15, A7, z4, x6, C10, n9, f14, u17, d6, S8, v6, W3, K4, D9, j10]);
    n2(() => {
      var i10;
      d6 && c13.send({ type: D8.UpdateVirtualConfiguration, options: d6.options, disabled: (i10 = d6.disabled) != null ? i10 : null });
    }, [d6, d6 == null ? void 0 : d6.options, d6 == null ? void 0 : d6.disabled]), n2(() => {
      c13.state.dataRef.current = l8;
    }, [l8]);
    let [k7, Y3, s12, U4] = S3(c13, (i10) => [i10.comboboxState, i10.buttonElement, i10.inputElement, i10.optionsElement]), $5 = x4.get(null), ne = S3($5, q2((i10) => $5.selectors.isTop(i10, e8), [$5, e8]));
    k5(ne, [Y3, s12, U4], () => c13.actions.closeCombobox());
    let be = S3(c13, c13.selectors.activeOptionIndex), ee = S3(c13, c13.selectors.activeOption), q5 = n3({ open: k7 === P6.Open, disabled: n9, invalid: f14, activeIndex: be, activeOption: ee, value: x6 }), [t9, V5] = V4(), P7 = O5 === null ? {} : { ref: O5 }, N5 = q2(() => {
      if (C10 !== void 0) return v6 == null ? void 0 : v6(C10);
    }, [v6, C10]), g6 = K3();
    return Rn.createElement(V5, { value: t9, props: { htmlFor: s12 == null ? void 0 : s12.id }, slot: { open: k7 === P6.Open, disabled: n9 } }, Rn.createElement(Ae, null, Rn.createElement(de.Provider, { value: l8 }, Rn.createElement(u15.Provider, { value: c13 }, Rn.createElement(c8, { value: u3(k7, { [P6.Open]: i8.Open, [P6.Closed]: i8.Closed }) }, h8 != null && Rn.createElement(j4, { disabled: n9, data: x6 != null ? { [h8]: x6 } : {}, form: b7, onReset: N5 }), g6({ ourProps: P7, theirProps: G5, slot: q5, defaultTag: ho, name: "Combobox" }))))));
  }
  var Io = "input";
  function Ro(T8, O5) {
    var ee, q5;
    let e8 = p9("Combobox.Input"), o11 = te2("Combobox.Input"), E7 = g2(), R2 = u4(), _a = T8, { id: y8 = R2 || "headlessui-combobox-input-".concat(E7), onChange: b7, displayValue: h8, disabled: p10 = o11.disabled || false, autoFocus: f14 = false, type: n9 = "text" } = _a, m8 = __objRest(_a, ["id", "onChange", "displayValue", "disabled", "autoFocus", "type"]), a15 = A2(null), u17 = y3(a15, O5, Fe(), e8.actions.setInputElement), [A7, d6] = S3(e8, (t9) => [t9.comboboxState, t9.isTyping]), X3 = p3(), G5 = o5(() => {
      e8.actions.onChange(null), e8.state.optionsElement && (e8.state.optionsElement.scrollTop = 0), e8.actions.goToOption({ focus: c9.Nothing });
    }), C10 = T2(() => {
      var t9;
      return typeof h8 == "function" && o11.value !== void 0 ? (t9 = h8(o11.value)) != null ? t9 : "" : typeof o11.value == "string" ? o11.value : "";
    }, [o11.value, h8]);
    m6(([t9, V5], [P7, N5]) => {
      if (e8.state.isTyping) return;
      let g6 = a15.current;
      g6 && ((N5 === P6.Open && V5 === P6.Closed || t9 !== P7) && (g6.value = t9), requestAnimationFrame(() => {
        if (e8.state.isTyping || !g6 || d4(g6)) return;
        let { selectionStart: i10, selectionEnd: M6 } = g6;
        Math.abs((M6 != null ? M6 : 0) - (i10 != null ? i10 : 0)) === 0 && i10 === 0 && g6.setSelectionRange(g6.value.length, g6.value.length);
      }));
    }, [C10, A7, d6]), m6(([t9], [V5]) => {
      if (t9 === P6.Open && V5 === P6.Closed) {
        if (e8.state.isTyping) return;
        let P7 = a15.current;
        if (!P7) return;
        let N5 = P7.value, { selectionStart: g6, selectionEnd: i10, selectionDirection: M6 } = P7;
        P7.value = "", P7.value = N5, M6 !== null ? P7.setSelectionRange(g6, i10, M6) : P7.setSelectionRange(g6, i10);
      }
    }, [A7]);
    let x6 = A2(false), v6 = o5(() => {
      x6.current = true;
    }), c13 = o5(() => {
      X3.nextFrame(() => {
        x6.current = false;
      });
    }), z4 = o5((t9) => {
      switch (e8.actions.setIsTyping(true), t9.key) {
        case o7.Enter:
          if (e8.state.comboboxState !== P6.Open || x6.current) return;
          if (t9.preventDefault(), t9.stopPropagation(), e8.selectors.activeOptionIndex(e8.state) === null) {
            e8.actions.closeCombobox();
            return;
          }
          e8.actions.selectActiveOption(), o11.mode === k6.Single && e8.actions.closeCombobox();
          break;
        case o7.ArrowDown:
          return t9.preventDefault(), t9.stopPropagation(), u3(e8.state.comboboxState, { [P6.Open]: () => e8.actions.goToOption({ focus: c9.Next }), [P6.Closed]: () => e8.actions.openCombobox() });
        case o7.ArrowUp:
          return t9.preventDefault(), t9.stopPropagation(), u3(e8.state.comboboxState, { [P6.Open]: () => e8.actions.goToOption({ focus: c9.Previous }), [P6.Closed]: () => {
            En(() => e8.actions.openCombobox()), o11.value || e8.actions.goToOption({ focus: c9.Last });
          } });
        case o7.Home:
          if (e8.state.comboboxState === P6.Closed || t9.shiftKey) break;
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.First });
        case o7.PageUp:
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.First });
        case o7.End:
          if (e8.state.comboboxState === P6.Closed || t9.shiftKey) break;
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.Last });
        case o7.PageDown:
          return t9.preventDefault(), t9.stopPropagation(), e8.actions.goToOption({ focus: c9.Last });
        case o7.Escape:
          return e8.state.comboboxState !== P6.Open ? void 0 : (t9.preventDefault(), e8.state.optionsElement && !o11.optionsPropsRef.current.static && t9.stopPropagation(), o11.mode === k6.Single && o11.value === null && G5(), e8.actions.closeCombobox());
        case o7.Tab:
          if (e8.actions.setIsTyping(false), e8.state.comboboxState !== P6.Open) return;
          o11.mode === k6.Single && e8.state.activationTrigger !== _6.Focus && e8.actions.selectActiveOption(), e8.actions.closeCombobox();
          break;
      }
    }), D9 = o5((t9) => {
      b7 == null || b7(t9), o11.mode === k6.Single && t9.target.value === "" && G5(), e8.actions.openCombobox();
    }), K4 = o5((t9) => {
      var P7, N5, g6;
      let V5 = (P7 = t9.relatedTarget) != null ? P7 : n8.find((i10) => i10 !== t9.currentTarget);
      if (!((N5 = e8.state.optionsElement) != null && N5.contains(V5)) && !((g6 = e8.state.buttonElement) != null && g6.contains(V5)) && e8.state.comboboxState === P6.Open) return t9.preventDefault(), o11.mode === k6.Single && o11.value === null && G5(), e8.actions.closeCombobox();
    }), W3 = o5((t9) => {
      var P7, N5, g6;
      let V5 = (P7 = t9.relatedTarget) != null ? P7 : n8.find((i10) => i10 !== t9.currentTarget);
      (N5 = e8.state.buttonElement) != null && N5.contains(V5) || (g6 = e8.state.optionsElement) != null && g6.contains(V5) || o11.disabled || o11.immediate && e8.state.comboboxState !== P6.Open && X3.microTask(() => {
        En(() => e8.actions.openCombobox()), e8.actions.setActivationTrigger(_6.Focus);
      });
    }), S8 = N3(), j10 = w5(), { isFocused: l8, focusProps: k7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f14 }), { isHovered: Y3, hoverProps: s12 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p10 }), U4 = S3(e8, (t9) => t9.optionsElement), $5 = n3({ open: A7 === P6.Open, disabled: p10, invalid: o11.invalid, hover: Y3, focus: l8, autofocus: f14 }), ne = V3({ ref: u17, id: y8, role: "combobox", type: n9, "aria-controls": U4 == null ? void 0 : U4.id, "aria-expanded": A7 === P6.Open, "aria-activedescendant": S3(e8, e8.selectors.activeDescendantId), "aria-labelledby": S8, "aria-describedby": j10, "aria-autocomplete": "list", defaultValue: (q5 = (ee = T8.defaultValue) != null ? ee : o11.defaultValue !== void 0 ? h8 == null ? void 0 : h8(o11.defaultValue) : null) != null ? q5 : o11.defaultValue, disabled: p10 || void 0, autoFocus: f14, onCompositionStart: v6, onCompositionEnd: c13, onKeyDown: z4, onChange: D9, onFocus: W3, onBlur: K4 }, k7, s12);
    return K3()({ ourProps: ne, theirProps: m8, slot: $5, defaultTag: Io, name: "Combobox.Input" });
  }
  var _o = "button";
  function Fo(T8, O5) {
    let e8 = p9("Combobox.Button"), o11 = te2("Combobox.Button"), [E7, R2] = d2(null), y8 = y3(O5, R2, e8.actions.setButtonElement), b7 = g2(), _a = T8, { id: h8 = "headlessui-combobox-button-".concat(b7), disabled: p10 = o11.disabled || false, autoFocus: f14 = false } = _a, n9 = __objRest(_a, ["id", "disabled", "autoFocus"]), [m8, a15, u17] = S3(e8, (l8) => [l8.comboboxState, l8.inputElement, l8.optionsElement]), A7 = v4(a15), d6 = m8 === P6.Open;
    L5(d6, { trigger: E7, action: q2((l8) => {
      if (E7 != null && E7.contains(l8.target)) return S5.Ignore;
      if (a15 != null && a15.contains(l8.target)) return S5.Ignore;
      let k7 = l8.target.closest('[role="option"]:not([data-disabled])');
      return n4(k7) ? S5.Select(k7) : u17 != null && u17.contains(l8.target) ? S5.Ignore : S5.Close;
    }, [E7, a15, u17]), close: e8.actions.closeCombobox, select: e8.actions.selectActiveOption });
    let X3 = o5((l8) => {
      switch (l8.key) {
        case o7.Space:
        case o7.Enter:
          l8.preventDefault(), l8.stopPropagation(), e8.state.comboboxState === P6.Closed && En(() => e8.actions.openCombobox()), A7();
          return;
        case o7.ArrowDown:
          l8.preventDefault(), l8.stopPropagation(), e8.state.comboboxState === P6.Closed && (En(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c9.First })), A7();
          return;
        case o7.ArrowUp:
          l8.preventDefault(), l8.stopPropagation(), e8.state.comboboxState === P6.Closed && (En(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c9.Last })), A7();
          return;
        case o7.Escape:
          if (e8.state.comboboxState !== P6.Open) return;
          l8.preventDefault(), e8.state.optionsElement && !o11.optionsPropsRef.current.static && l8.stopPropagation(), En(() => e8.actions.closeCombobox()), A7();
          return;
        default:
          return;
      }
    }), G5 = s8(() => {
      e8.state.comboboxState === P6.Open ? e8.actions.closeCombobox() : e8.actions.openCombobox(), A7();
    }), C10 = N3([h8]), { isFocusVisible: x6, focusProps: v6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f14 }), { isHovered: c13, hoverProps: z4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p10 }), { pressed: D9, pressProps: K4 } = w4({ disabled: p10 }), W3 = n3({ open: m8 === P6.Open, active: D9 || m8 === P6.Open, disabled: p10, invalid: o11.invalid, value: o11.value, hover: c13, focus: x6 }), S8 = V3({ ref: y8, id: h8, type: e6(T8, E7), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": u17 == null ? void 0 : u17.id, "aria-expanded": m8 === P6.Open, "aria-labelledby": C10, disabled: p10 || void 0, autoFocus: f14, onKeyDown: X3 }, G5, v6, z4, K4);
    return K3()({ ourProps: S8, theirProps: n9, slot: W3, defaultTag: _o, name: "Combobox.Button" });
  }
  var Do = "div";
  var So = A4.RenderStrategy | A4.Static;
  function Mo(T8, O5) {
    var M6, Ce, ve;
    let e8 = g2(), _a = T8, { id: o11 = "headlessui-combobox-options-".concat(e8), hold: E7 = false, anchor: R2, portal: y8 = false, modal: b7 = true, transition: h8 = false } = _a, p10 = __objRest(_a, ["id", "hold", "anchor", "portal", "modal", "transition"]), f14 = p9("Combobox.Options"), n9 = te2("Combobox.Options"), m8 = ye(R2);
    m8 && (y8 = true);
    let [a15, u17] = Re(m8), [A7, d6] = d2(null), X3 = Te(), G5 = y3(O5, m8 ? a15 : null, f14.actions.setOptionsElement, d6), [C10, x6, v6, c13, z4] = S3(f14, (_7) => [_7.comboboxState, _7.inputElement, _7.buttonElement, _7.optionsElement, _7.activationTrigger]), D9 = u10(x6 || v6), K4 = u10(c13), W3 = u13(), [S8, j10] = N4(h8, A7, W3 !== null ? (W3 & i8.Open) === i8.Open : C10 === P6.Open);
    p7(S8, x6, f14.actions.closeCombobox);
    let l8 = n9.__demoMode ? false : b7 && C10 === P6.Open;
    f9(l8, K4);
    let k7 = n9.__demoMode ? false : b7 && C10 === P6.Open;
    y5(k7, { allowed: q2(() => [x6, v6, c13], [x6, v6, c13]) });
    let s12 = S3(f14, f14.selectors.didInputMove) ? false : S8;
    n2(() => {
      var _7;
      n9.optionsPropsRef.current.static = (_7 = T8.static) != null ? _7 : false;
    }, [n9.optionsPropsRef, T8.static]), n2(() => {
      n9.optionsPropsRef.current.hold = E7;
    }, [n9.optionsPropsRef, E7]), F5(C10 === P6.Open, { container: c13, accept(_7) {
      return _7.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : _7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
    }, walk(_7) {
      _7.setAttribute("role", "none");
    } });
    let U4 = N3([v6 == null ? void 0 : v6.id]), $5 = n3({ open: C10 === P6.Open, option: void 0 }), ne = o5(() => {
      f14.actions.setActivationTrigger(_6.Pointer);
    }), be = o5((_7) => {
      _7.preventDefault(), f14.actions.setActivationTrigger(_6.Pointer);
    }), ee = V3(m8 ? X3() : {}, __spreadValues({ "aria-labelledby": U4, role: "listbox", "aria-multiselectable": n9.mode === k6.Multi ? true : void 0, id: o11, ref: G5, style: __spreadProps(__spreadValues(__spreadValues({}, p10.style), u17), { "--input-width": w6(S8, x6, true).width, "--button-width": w6(S8, v6, true).width }), onWheel: z4 === _6.Pointer ? void 0 : ne, onMouseDown: be }, x5(j10))), q5 = S8 && C10 === P6.Closed && !T8.static, t9 = u12(q5, (M6 = n9.virtual) == null ? void 0 : M6.options), V5 = u12(q5, n9.value), P7 = q2((_7) => n9.compare(V5, _7), [n9.compare, V5]), N5 = T2(() => {
      if (!n9.virtual) return n9;
      if (t9 === void 0) throw new Error("Missing `options` in virtual mode");
      return t9 !== n9.virtual.options ? __spreadProps(__spreadValues({}, n9), { virtual: __spreadProps(__spreadValues({}, n9.virtual), { options: t9 }) }) : n9;
    }, [n9, t9, (Ce = n9.virtual) == null ? void 0 : Ce.options]);
    n9.virtual && Object.assign(p10, { children: Rn.createElement(de.Provider, { value: N5 }, Rn.createElement(Eo, { slot: $5 }, p10.children)) });
    let g6 = K3(), i10 = T2(() => n9.mode === k6.Multi ? n9 : __spreadProps(__spreadValues({}, n9), { isSelected: P7 }), [n9, P7]);
    return Rn.createElement(te, { enabled: y8 ? T8.static || S8 : false, ownerDocument: D9 }, Rn.createElement(de.Provider, { value: i10 }, g6({ ourProps: ee, theirProps: __spreadProps(__spreadValues({}, p10), { children: Rn.createElement(s11, { freeze: q5 }, typeof p10.children == "function" ? (ve = p10.children) == null ? void 0 : ve.call(p10, $5) : p10.children) }), slot: $5, defaultTag: Do, features: So, visible: s12, name: "Combobox.Options" })));
  }
  var Lo = "div";
  function Vo(T8, O5) {
    var l8, k7, Y3;
    let e8 = te2("Combobox.Option"), o11 = p9("Combobox.Option"), E7 = g2(), _a = T8, { id: R2 = "headlessui-combobox-option-".concat(E7), value: y8, disabled: b7 = (Y3 = (k7 = (l8 = e8.virtual) == null ? void 0 : l8.disabled) == null ? void 0 : k7.call(l8, y8)) != null ? Y3 : false, order: h8 = null } = _a, p10 = __objRest(_a, ["id", "value", "disabled", "order"]), [f14] = S3(o11, (s12) => [s12.inputElement]), n9 = v4(f14), m8 = S3(o11, q2((s12) => o11.selectors.isActive(s12, y8, R2), [y8, R2])), a15 = e8.isSelected(y8), u17 = A2(null), A7 = s4({ disabled: b7, value: y8, domRef: u17, order: h8 }), d6 = x2(Le), X3 = y3(O5, u17, d6 ? d6.measureElement : null), G5 = o5(() => {
      o11.actions.setIsTyping(false), o11.actions.onChange(y8);
    });
    n2(() => o11.actions.registerOption(R2, A7), [A7, R2]);
    let C10 = S3(o11, q2((s12) => o11.selectors.shouldScrollIntoView(s12, y8, R2), [y8, R2]));
    n2(() => {
      if (C10) return o4().requestAnimationFrame(() => {
        var s12, U4;
        (U4 = (s12 = u17.current) == null ? void 0 : s12.scrollIntoView) == null || U4.call(s12, { block: "nearest" });
      });
    }, [C10, u17]);
    let x6 = o5((s12) => {
      s12.preventDefault(), s12.button === g4.Left && (b7 || (G5(), n6() || requestAnimationFrame(() => n9()), e8.mode === k6.Single && o11.actions.closeCombobox()));
    }), v6 = o5(() => {
      if (b7) return o11.actions.goToOption({ focus: c9.Nothing });
      let s12 = e8.calculateIndex(y8);
      o11.actions.goToOption({ focus: c9.Specific, idx: s12 });
    }), c13 = u11(), z4 = o5((s12) => c13.update(s12)), D9 = o5((s12) => {
      if (!c13.wasMoved(s12) || b7 || m8 && o11.state.activationTrigger === _6.Pointer) return;
      let U4 = e8.calculateIndex(y8);
      o11.actions.goToOption({ focus: c9.Specific, idx: U4 }, _6.Pointer);
    }), K4 = o5((s12) => {
      c13.wasMoved(s12) && (b7 || m8 && (e8.optionsPropsRef.current.hold || o11.state.activationTrigger === _6.Pointer && o11.actions.goToOption({ focus: c9.Nothing })));
    }), W3 = n3({ active: m8, focus: m8, selected: a15, disabled: b7 }), S8 = { id: R2, ref: X3, role: "option", tabIndex: b7 === true ? void 0 : -1, "aria-disabled": b7 === true ? true : void 0, "aria-selected": a15, disabled: void 0, onMouseDown: x6, onFocus: v6, onPointerEnter: z4, onMouseEnter: z4, onPointerMove: D9, onMouseMove: D9, onPointerLeave: K4, onMouseLeave: K4 };
    return K3()({ ourProps: S8, theirProps: p10, slot: W3, defaultTag: Lo, name: "Combobox.Option" });
  }
  var wo = Y2(Ao);
  var Bo = Y2(Fo);
  var ko = Y2(Ro);
  var No = Z2;
  var Uo = Y2(Mo);
  var Ho = Y2(Vo);
  var Ht = Object.assign(wo, { Input: ko, Button: Bo, Label: No, Options: Uo, Option: Ho });

  // node_modules/react-number-format/dist/react-number-format.es.js
  init_compat_module();
  function __rest(s12, e8) {
    var t9 = {};
    for (var p10 in s12) {
      if (Object.prototype.hasOwnProperty.call(s12, p10) && e8.indexOf(p10) < 0) {
        t9[p10] = s12[p10];
      }
    }
    if (s12 != null && typeof Object.getOwnPropertySymbols === "function") {
      for (var i10 = 0, p10 = Object.getOwnPropertySymbols(s12); i10 < p10.length; i10++) {
        if (e8.indexOf(p10[i10]) < 0 && Object.prototype.propertyIsEnumerable.call(s12, p10[i10])) {
          t9[p10[i10]] = s12[p10[i10]];
        }
      }
    }
    return t9;
  }
  var SourceType;
  (function(SourceType2) {
    SourceType2["event"] = "event";
    SourceType2["props"] = "prop";
  })(SourceType || (SourceType = {}));
  function noop3() {
  }
  function memoizeOnce(cb) {
    var lastArgs;
    var lastValue = void 0;
    return function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      if (lastArgs && args.length === lastArgs.length && args.every(function(value, index3) {
        return value === lastArgs[index3];
      })) {
        return lastValue;
      }
      lastArgs = args;
      lastValue = cb.apply(void 0, args);
      return lastValue;
    };
  }
  function charIsNumber(char) {
    return !!(char || "").match(/\d/);
  }
  function isNil(val) {
    return val === null || val === void 0;
  }
  function isNanValue(val) {
    return typeof val === "number" && isNaN(val);
  }
  function isNotValidValue(val) {
    return isNil(val) || isNanValue(val) || typeof val === "number" && !isFinite(val);
  }
  function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
  function getThousandsGroupRegex(thousandsGroupStyle) {
    switch (thousandsGroupStyle) {
      case "lakh":
        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
      case "wan":
        return /(\d)(?=(\d{4})+(?!\d))/g;
      case "thousand":
      default:
        return /(\d)(?=(\d{3})+(?!\d))/g;
    }
  }
  function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index3 = str.search(/[1-9]/);
    index3 = index3 === -1 ? str.length : index3;
    return str.substring(0, index3) + str.substring(index3, str.length).replace(thousandsGroupRegex, "$1" + thousandSeparator);
  }
  function usePersistentCallback(cb) {
    var callbackRef = A2(cb);
    callbackRef.current = cb;
    var persistentCbRef = A2(function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      return callbackRef.current.apply(callbackRef, args);
    });
    return persistentCbRef.current;
  }
  function splitDecimal(numStr, allowNegative) {
    if (allowNegative === void 0) allowNegative = true;
    var hasNegation = numStr[0] === "-";
    var addNegation = hasNegation && allowNegative;
    numStr = numStr.replace("-", "");
    var parts = numStr.split(".");
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || "";
    return {
      beforeDecimal,
      afterDecimal,
      hasNegation,
      addNegation
    };
  }
  function fixLeadingZero(numStr) {
    if (!numStr) {
      return numStr;
    }
    var isNegative = numStr[0] === "-";
    if (isNegative) {
      numStr = numStr.substring(1, numStr.length);
    }
    var parts = numStr.split(".");
    var beforeDecimal = parts[0].replace(/^0+/, "") || "0";
    var afterDecimal = parts[1] || "";
    return (isNegative ? "-" : "") + beforeDecimal + (afterDecimal ? "." + afterDecimal : "");
  }
  function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = "";
    var filler = fixedDecimalScale ? "0" : "";
    for (var i10 = 0; i10 <= scale - 1; i10++) {
      str += numStr[i10] || filler;
    }
    return str;
  }
  function repeat(str, count2) {
    return Array(count2 + 1).join(str);
  }
  function toNumericString(num) {
    var _num = num + "";
    var sign = _num[0] === "-" ? "-" : "";
    if (sign) {
      _num = _num.substring(1);
    }
    var ref = _num.split(/[eE]/g);
    var coefficient = ref[0];
    var exponent = ref[1];
    exponent = Number(exponent);
    if (!exponent) {
      return sign + coefficient;
    }
    coefficient = coefficient.replace(".", "");
    var decimalIndex = 1 + exponent;
    var coffiecientLn = coefficient.length;
    if (decimalIndex < 0) {
      coefficient = "0." + repeat("0", Math.abs(decimalIndex)) + coefficient;
    } else if (decimalIndex >= coffiecientLn) {
      coefficient = coefficient + repeat("0", decimalIndex - coffiecientLn);
    } else {
      coefficient = (coefficient.substring(0, decimalIndex) || "0") + "." + coefficient.substring(decimalIndex);
    }
    return sign + coefficient;
  }
  function roundToPrecision(numStr, scale, fixedDecimalScale) {
    if (["", "-"].indexOf(numStr) !== -1) {
      return numStr;
    }
    var shouldHaveDecimalSeparator = (numStr.indexOf(".") !== -1 || fixedDecimalScale) && scale;
    var ref = splitDecimal(numStr);
    var beforeDecimal = ref.beforeDecimal;
    var afterDecimal = ref.afterDecimal;
    var hasNegation = ref.hasNegation;
    var floatValue = parseFloat("0." + (afterDecimal || "0"));
    var floatValueStr = afterDecimal.length <= scale ? "0." + afterDecimal : floatValue.toFixed(scale);
    var roundedDecimalParts = floatValueStr.split(".");
    var intPart = beforeDecimal;
    if (beforeDecimal && Number(roundedDecimalParts[0])) {
      intPart = beforeDecimal.split("").reverse().reduce(function(roundedStr, current, idx) {
        if (roundedStr.length > idx) {
          return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
        }
        return current + roundedStr;
      }, roundedDecimalParts[0]);
    }
    var decimalPart = limitToScale(roundedDecimalParts[1] || "", scale, fixedDecimalScale);
    var negation = hasNegation ? "-" : "";
    var decimalSeparator = shouldHaveDecimalSeparator ? "." : "";
    return "" + negation + intPart + decimalSeparator + decimalPart;
  }
  function setCaretPosition(el, caretPos) {
    el.value = el.value;
    if (el !== null) {
      if (el.createTextRange) {
        var range = el.createTextRange();
        range.move("character", caretPos);
        range.select();
        return true;
      }
      if (el.selectionStart || el.selectionStart === 0) {
        el.focus();
        el.setSelectionRange(caretPos, caretPos);
        return true;
      }
      el.focus();
      return false;
    }
  }
  var findChangeRange = memoizeOnce(function(prevValue, newValue) {
    var i10 = 0, j10 = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;
    while (prevValue[i10] === newValue[i10] && i10 < prevLength) {
      i10++;
    }
    while (prevValue[prevLength - 1 - j10] === newValue[newLength - 1 - j10] && newLength - j10 > i10 && prevLength - j10 > i10) {
      j10++;
    }
    return {
      from: { start: i10, end: prevLength - j10 },
      to: { start: i10, end: newLength - j10 }
    };
  });
  var findChangedRangeFromCaretPositions = function(lastCaretPositions, currentCaretPosition) {
    var startPosition = Math.min(lastCaretPositions.selectionStart, currentCaretPosition);
    return {
      from: { start: startPosition, end: lastCaretPositions.selectionEnd },
      to: { start: startPosition, end: currentCaretPosition }
    };
  };
  function clamp2(num, min2, max2) {
    return Math.min(Math.max(num, min2), max2);
  }
  function geInputCaretPosition(el) {
    return Math.max(el.selectionStart, el.selectionEnd);
  }
  function addInputMode() {
    return typeof navigator !== "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
  }
  function getDefaultChangeMeta(value) {
    return {
      from: {
        start: 0,
        end: 0
      },
      to: {
        start: 0,
        end: value.length
      },
      lastValue: ""
    };
  }
  function defaultIsCharacterSame(ref) {
    var currentValue = ref.currentValue;
    var formattedValue = ref.formattedValue;
    var currentValueIndex = ref.currentValueIndex;
    var formattedValueIndex = ref.formattedValueIndex;
    return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
  }
  function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, isCharacterSame) {
    if (isCharacterSame === void 0) isCharacterSame = defaultIsCharacterSame;
    var firstAllowedPosition = boundary.findIndex(function(b7) {
      return b7;
    });
    var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
    if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
      lastFormattedValue = prefixFormat;
      curValue = prefixFormat + curValue;
      curCaretPos = curCaretPos + prefixFormat.length;
    }
    var curValLn = curValue.length;
    var formattedValueLn = newFormattedValue.length;
    var addedIndexMap = {};
    var indexMap = new Array(curValLn);
    for (var i10 = 0; i10 < curValLn; i10++) {
      indexMap[i10] = -1;
      for (var j10 = 0, jLn = formattedValueLn; j10 < jLn; j10++) {
        var isCharSame = isCharacterSame({
          currentValue: curValue,
          lastValue: lastFormattedValue,
          formattedValue: newFormattedValue,
          currentValueIndex: i10,
          formattedValueIndex: j10
        });
        if (isCharSame && addedIndexMap[j10] !== true) {
          indexMap[i10] = j10;
          addedIndexMap[j10] = true;
          break;
        }
      }
    }
    var pos = curCaretPos;
    while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
      pos++;
    }
    var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
    pos = curCaretPos - 1;
    while (pos > 0 && indexMap[pos] === -1) {
      pos--;
    }
    var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
    if (startIndex > endIndex) {
      return endIndex;
    }
    return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
  }
  function getCaretPosInBoundary(value, caretPos, boundary, direction) {
    var valLn = value.length;
    caretPos = clamp2(caretPos, 0, valLn);
    if (direction === "left") {
      while (caretPos >= 0 && !boundary[caretPos]) {
        caretPos--;
      }
      if (caretPos === -1) {
        caretPos = boundary.indexOf(true);
      }
    } else {
      while (caretPos <= valLn && !boundary[caretPos]) {
        caretPos++;
      }
      if (caretPos > valLn) {
        caretPos = boundary.lastIndexOf(true);
      }
    }
    if (caretPos === -1) {
      caretPos = valLn;
    }
    return caretPos;
  }
  function caretUnknownFormatBoundary(formattedValue) {
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
      return true;
    });
    for (var i10 = 0, ln2 = boundaryAry.length; i10 < ln2; i10++) {
      boundaryAry[i10] = Boolean(charIsNumber(formattedValue[i10]) || charIsNumber(formattedValue[i10 - 1]));
    }
    return boundaryAry;
  }
  function useInternalValues(value, defaultValue, valueIsNumericString, format3, removeFormatting2, onValueChange) {
    if (onValueChange === void 0) onValueChange = noop3;
    var getValues = usePersistentCallback(function(value2, valueIsNumericString2) {
      var formattedValue, numAsString;
      if (isNotValidValue(value2)) {
        numAsString = "";
        formattedValue = "";
      } else if (typeof value2 === "number" || valueIsNumericString2) {
        numAsString = typeof value2 === "number" ? toNumericString(value2) : value2;
        formattedValue = format3(numAsString);
      } else {
        numAsString = removeFormatting2(value2, void 0);
        formattedValue = format3(numAsString);
      }
      return { formattedValue, numAsString };
    });
    var ref = d2(function() {
      return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
    });
    var values = ref[0];
    var setValues = ref[1];
    var _onValueChange = function(newValues2, sourceInfo) {
      if (newValues2.formattedValue !== values.formattedValue) {
        setValues({
          formattedValue: newValues2.formattedValue,
          numAsString: newValues2.value
        });
      }
      onValueChange(newValues2, sourceInfo);
    };
    var _value = value;
    var _valueIsNumericString = valueIsNumericString;
    if (isNil(value)) {
      _value = values.numAsString;
      _valueIsNumericString = true;
    }
    var newValues = getValues(_value, _valueIsNumericString);
    T2(function() {
      setValues(newValues);
    }, [newValues.formattedValue]);
    return [values, _onValueChange];
  }
  function defaultRemoveFormatting(value) {
    return value.replace(/[^0-9]/g, "");
  }
  function defaultFormat(value) {
    return value;
  }
  function NumberFormatBase(props) {
    var type = props.type;
    if (type === void 0) type = "text";
    var displayType = props.displayType;
    if (displayType === void 0) displayType = "input";
    var customInput = props.customInput;
    var renderText = props.renderText;
    var getInputRef = props.getInputRef;
    var format3 = props.format;
    if (format3 === void 0) format3 = defaultFormat;
    var removeFormatting2 = props.removeFormatting;
    if (removeFormatting2 === void 0) removeFormatting2 = defaultRemoveFormatting;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var isAllowed = props.isAllowed;
    var onChange = props.onChange;
    if (onChange === void 0) onChange = noop3;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop3;
    var onMouseUp = props.onMouseUp;
    if (onMouseUp === void 0) onMouseUp = noop3;
    var onFocus = props.onFocus;
    if (onFocus === void 0) onFocus = noop3;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop3;
    var propValue = props.value;
    var getCaretBoundary2 = props.getCaretBoundary;
    if (getCaretBoundary2 === void 0) getCaretBoundary2 = caretUnknownFormatBoundary;
    var isValidInputCharacter = props.isValidInputCharacter;
    if (isValidInputCharacter === void 0) isValidInputCharacter = charIsNumber;
    var isCharacterSame = props.isCharacterSame;
    var otherProps = __rest(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]);
    var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format3, removeFormatting2, onValueChange);
    var ref_0 = ref[0];
    var formattedValue = ref_0.formattedValue;
    var numAsString = ref_0.numAsString;
    var onFormattedValueChange = ref[1];
    var caretPositionBeforeChange = A2();
    var lastUpdatedValue = A2({ formattedValue, numAsString });
    var _onValueChange = function(values, source) {
      lastUpdatedValue.current = { formattedValue: values.formattedValue, numAsString: values.value };
      onFormattedValueChange(values, source);
    };
    var ref$1 = d2(false);
    var mounted = ref$1[0];
    var setMounted = ref$1[1];
    var focusedElm = A2(null);
    var timeout = A2({
      setCaretTimeout: null,
      focusTimeout: null
    });
    y2(function() {
      setMounted(true);
      return function() {
        clearTimeout(timeout.current.setCaretTimeout);
        clearTimeout(timeout.current.focusTimeout);
      };
    }, []);
    var _format = format3;
    var getValueObject = function(formattedValue2, numAsString2) {
      var floatValue = parseFloat(numAsString2);
      return {
        formattedValue: formattedValue2,
        value: numAsString2,
        floatValue: isNaN(floatValue) ? void 0 : floatValue
      };
    };
    var setPatchedCaretPosition = function(el, caretPos, currentValue) {
      if (el.selectionStart === 0 && el.selectionEnd === el.value.length) {
        return;
      }
      setCaretPosition(el, caretPos);
      timeout.current.setCaretTimeout = setTimeout(function() {
        if (el.value === currentValue && el.selectionStart !== caretPos) {
          setCaretPosition(el, caretPos);
        }
      }, 0);
    };
    var correctCaretPosition = function(value, caretPos, direction) {
      return getCaretPosInBoundary(value, caretPos, getCaretBoundary2(value), direction);
    };
    var getNewCaretPosition = function(inputValue, newFormattedValue, caretPos) {
      var caretBoundary = getCaretBoundary2(newFormattedValue);
      var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
      updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
      return updatedCaretPos;
    };
    var updateValueAndCaretPosition = function(params) {
      var newFormattedValue = params.formattedValue;
      if (newFormattedValue === void 0) newFormattedValue = "";
      var input = params.input;
      var source = params.source;
      var event = params.event;
      var numAsString2 = params.numAsString;
      var caretPos;
      if (input) {
        var inputValue = params.inputValue || input.value;
        var currentCaretPosition2 = geInputCaretPosition(input);
        input.value = newFormattedValue;
        caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition2);
        if (caretPos !== void 0) {
          setPatchedCaretPosition(input, caretPos, newFormattedValue);
        }
      }
      if (newFormattedValue !== formattedValue) {
        _onValueChange(getValueObject(newFormattedValue, numAsString2), { event, source });
      }
    };
    y2(function() {
      var ref2 = lastUpdatedValue.current;
      var lastFormattedValue = ref2.formattedValue;
      var lastNumAsString = ref2.numAsString;
      if (formattedValue !== lastFormattedValue || numAsString !== lastNumAsString) {
        _onValueChange(getValueObject(formattedValue, numAsString), {
          event: void 0,
          source: SourceType.props
        });
      }
    }, [formattedValue, numAsString]);
    var currentCaretPosition = focusedElm.current ? geInputCaretPosition(focusedElm.current) : void 0;
    var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? _2 : y2;
    useIsomorphicLayoutEffect2(function() {
      var input = focusedElm.current;
      if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
        var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
        input.value = formattedValue;
        setPatchedCaretPosition(input, caretPos, formattedValue);
      }
    }, [formattedValue]);
    var formatInputValue = function(inputValue, event, source) {
      var input = event.target;
      var changeRange = caretPositionBeforeChange.current ? findChangedRangeFromCaretPositions(caretPositionBeforeChange.current, input.selectionEnd) : findChangeRange(formattedValue, inputValue);
      var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
      var _numAsString = removeFormatting2(inputValue, changeMeta);
      var _formattedValue = _format(_numAsString);
      _numAsString = removeFormatting2(_formattedValue, void 0);
      if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
        var input$1 = event.target;
        var currentCaretPosition2 = geInputCaretPosition(input$1);
        var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition2);
        input$1.value = formattedValue;
        setPatchedCaretPosition(input$1, caretPos, formattedValue);
        return false;
      }
      updateValueAndCaretPosition({
        formattedValue: _formattedValue,
        numAsString: _numAsString,
        inputValue,
        event,
        source,
        input: event.target
      });
      return true;
    };
    var setCaretPositionInfoBeforeChange = function(el, endOffset) {
      if (endOffset === void 0) endOffset = 0;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      caretPositionBeforeChange.current = { selectionStart, selectionEnd: selectionEnd + endOffset };
    };
    var _onChange = function(e8) {
      var el = e8.target;
      var inputValue = el.value;
      var changed = formatInputValue(inputValue, e8, SourceType.event);
      if (changed) {
        onChange(e8);
      }
      caretPositionBeforeChange.current = void 0;
    };
    var _onKeyDown = function(e8) {
      var el = e8.target;
      var key = e8.key;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value;
      if (value === void 0) value = "";
      var expectedCaretPosition;
      if (key === "ArrowLeft" || key === "Backspace") {
        expectedCaretPosition = Math.max(selectionStart - 1, 0);
      } else if (key === "ArrowRight") {
        expectedCaretPosition = Math.min(selectionStart + 1, value.length);
      } else if (key === "Delete") {
        expectedCaretPosition = selectionStart;
      }
      var endOffset = 0;
      if (key === "Delete" && selectionStart === selectionEnd) {
        endOffset = 1;
      }
      var isArrowKey = key === "ArrowLeft" || key === "ArrowRight";
      if (expectedCaretPosition === void 0 || selectionStart !== selectionEnd && !isArrowKey) {
        onKeyDown(e8);
        setCaretPositionInfoBeforeChange(el, endOffset);
        return;
      }
      var newCaretPosition = expectedCaretPosition;
      if (isArrowKey) {
        var direction = key === "ArrowLeft" ? "left" : "right";
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
        if (newCaretPosition !== expectedCaretPosition) {
          e8.preventDefault();
        }
      } else if (key === "Delete" && !isValidInputCharacter(value[expectedCaretPosition])) {
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "right");
      } else if (key === "Backspace" && !isValidInputCharacter(value[expectedCaretPosition])) {
        newCaretPosition = correctCaretPosition(value, expectedCaretPosition, "left");
      }
      if (newCaretPosition !== expectedCaretPosition) {
        setPatchedCaretPosition(el, newCaretPosition, value);
      }
      onKeyDown(e8);
      setCaretPositionInfoBeforeChange(el, endOffset);
    };
    var _onMouseUp = function(e8) {
      var el = e8.target;
      var correctCaretPositionIfRequired = function() {
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = "";
        if (selectionStart === selectionEnd) {
          var caretPosition = correctCaretPosition(value, selectionStart);
          if (caretPosition !== selectionStart) {
            setPatchedCaretPosition(el, caretPosition, value);
          }
        }
      };
      correctCaretPositionIfRequired();
      requestAnimationFrame(function() {
        correctCaretPositionIfRequired();
      });
      onMouseUp(e8);
      setCaretPositionInfoBeforeChange(el);
    };
    var _onFocus = function(e8) {
      if (e8.persist) {
        e8.persist();
      }
      var el = e8.target;
      var currentTarget = e8.currentTarget;
      focusedElm.current = el;
      timeout.current.focusTimeout = setTimeout(function() {
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = "";
        var caretPosition = correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          setPatchedCaretPosition(el, caretPosition, value);
        }
        onFocus(Object.assign(Object.assign({}, e8), { currentTarget }));
      }, 0);
    };
    var _onBlur = function(e8) {
      focusedElm.current = null;
      clearTimeout(timeout.current.focusTimeout);
      clearTimeout(timeout.current.setCaretTimeout);
      onBlur(e8);
    };
    var inputMode = mounted && addInputMode() ? "numeric" : void 0;
    var inputProps = Object.assign({ inputMode }, otherProps, {
      type,
      value: formattedValue,
      onChange: _onChange,
      onKeyDown: _onKeyDown,
      onMouseUp: _onMouseUp,
      onFocus: _onFocus,
      onBlur: _onBlur
    });
    if (displayType === "text") {
      return renderText ? Rn.createElement(Rn.Fragment, null, renderText(formattedValue, otherProps) || null) : Rn.createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue);
    } else if (customInput) {
      var CustomInput = customInput;
      return Rn.createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }
    return Rn.createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
  }
  function format(numStr, props) {
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var allowNegative = props.allowNegative;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    if (thousandsGroupStyle === void 0) thousandsGroupStyle = "thousand";
    if (numStr === "" || numStr === "-") {
      return numStr;
    }
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var hasDecimalSeparator = decimalScale !== 0 && numStr.indexOf(".") !== -1 || decimalScale && fixedDecimalScale;
    var ref$1 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$1.beforeDecimal;
    var afterDecimal = ref$1.afterDecimal;
    var addNegation = ref$1.addNegation;
    if (decimalScale !== void 0) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
    }
    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }
    if (prefix) {
      beforeDecimal = prefix + beforeDecimal;
    }
    if (suffix) {
      afterDecimal = afterDecimal + suffix;
    }
    if (addNegation) {
      beforeDecimal = "-" + beforeDecimal;
    }
    numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || "") + afterDecimal;
    return numStr;
  }
  function getSeparators(props) {
    var decimalSeparator = props.decimalSeparator;
    if (decimalSeparator === void 0) decimalSeparator = ".";
    var thousandSeparator = props.thousandSeparator;
    var allowedDecimalSeparators = props.allowedDecimalSeparators;
    if (thousandSeparator === true) {
      thousandSeparator = ",";
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, "."];
    }
    return {
      decimalSeparator,
      thousandSeparator,
      allowedDecimalSeparators
    };
  }
  function handleNegation(value, allowNegative) {
    if (value === void 0) value = "";
    var negationRegex = new RegExp("(-)");
    var doubleNegationRegex = new RegExp("(-)(.)*(-)");
    var hasNegation = negationRegex.test(value);
    var removeNegation = doubleNegationRegex.test(value);
    value = value.replace(/-/g, "");
    if (hasNegation && !removeNegation && allowNegative) {
      value = "-" + value;
    }
    return value;
  }
  function getNumberRegex(decimalSeparator, global) {
    return new RegExp("(^-)|[0-9]|" + escapeRegExp(decimalSeparator), global ? "g" : void 0);
  }
  function isNumericString(val, prefix, suffix) {
    if (val === "") {
      return true;
    }
    return !(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === "string" && !isNaN(Number(val));
  }
  function removeFormatting(value, changeMeta, props) {
    var assign;
    if (changeMeta === void 0) changeMeta = getDefaultChangeMeta(value);
    var allowNegative = props.allowNegative;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var decimalScale = props.decimalScale;
    var from = changeMeta.from;
    var to = changeMeta.to;
    var start = to.start;
    var end = to.end;
    var ref = getSeparators(props);
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var decimalSeparator = ref.decimalSeparator;
    var isBeforeDecimalSeparator = value[end] === decimalSeparator;
    if (charIsNumber(value) && (value === prefix || value === suffix) && changeMeta.lastValue === "") {
      return value;
    }
    if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
      var separator = decimalScale === 0 ? "" : decimalSeparator;
      value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
    }
    var stripNegation = function(value2, start2, end2) {
      var hasNegation2 = false;
      var hasDoubleNegation = false;
      if (prefix.startsWith("-")) {
        hasNegation2 = false;
      } else if (value2.startsWith("--")) {
        hasNegation2 = false;
        hasDoubleNegation = true;
      } else if (suffix.startsWith("-") && value2.length === suffix.length) {
        hasNegation2 = false;
      } else if (value2[0] === "-") {
        hasNegation2 = true;
      }
      var charsToRemove = hasNegation2 ? 1 : 0;
      if (hasDoubleNegation) {
        charsToRemove = 2;
      }
      if (charsToRemove) {
        value2 = value2.substring(charsToRemove);
        start2 -= charsToRemove;
        end2 -= charsToRemove;
      }
      return { value: value2, start: start2, end: end2, hasNegation: hasNegation2 };
    };
    var toMetadata = stripNegation(value, start, end);
    var hasNegation = toMetadata.hasNegation;
    assign = toMetadata, value = assign.value, start = assign.start, end = assign.end;
    var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
    var fromStart = ref$1.start;
    var fromEnd = ref$1.end;
    var lastValue = ref$1.value;
    var updatedSuffixPart = value.substring(start, end);
    if (value.length && lastValue.length && (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) && !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
      value = lastValue;
    }
    var startIndex = 0;
    if (value.startsWith(prefix)) {
      startIndex += prefix.length;
    } else if (start < prefix.length) {
      startIndex = start;
    }
    value = value.substring(startIndex);
    end -= startIndex;
    var endIndex = value.length;
    var suffixStartIndex = value.length - suffix.length;
    if (value.endsWith(suffix)) {
      endIndex = suffixStartIndex;
    } else if (end > suffixStartIndex) {
      endIndex = end;
    } else if (end > value.length - suffix.length) {
      endIndex = end;
    }
    value = value.substring(0, endIndex);
    value = handleNegation(hasNegation ? "-" + value : value, allowNegative);
    value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join("");
    var firstIndex = value.indexOf(decimalSeparator);
    value = value.replace(new RegExp(escapeRegExp(decimalSeparator), "g"), function(match, index3) {
      return index3 === firstIndex ? "." : "";
    });
    var ref$2 = splitDecimal(value, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation;
    if (to.end - to.start < from.end - from.start && beforeDecimal === "" && isBeforeDecimalSeparator && !parseFloat(afterDecimal)) {
      value = addNegation ? "-" : "";
    }
    return value;
  }
  function getCaretBoundary(formattedValue, props) {
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var suffix = props.suffix;
    if (suffix === void 0) suffix = "";
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function() {
      return true;
    });
    var hasNegation = formattedValue[0] === "-";
    boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
    var valLn = formattedValue.length;
    boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
    return boundaryAry;
  }
  function validateAndUpdateProps(props) {
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var allowNegative = props.allowNegative;
    if (allowNegative === void 0) allowNegative = true;
    if (thousandSeparator === decimalSeparator) {
      throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + decimalSeparator + " (default value for decimalSeparator is .)\n     ");
    }
    if (prefix.startsWith("-") && allowNegative) {
      console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    ");
      allowNegative = false;
    }
    return Object.assign(Object.assign({}, props), { allowNegative });
  }
  function useNumericFormat(props) {
    props = validateAndUpdateProps(props);
    var _decimalSeparator = props.decimalSeparator;
    var _allowedDecimalSeparators = props.allowedDecimalSeparators;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    var suffix = props.suffix;
    var allowNegative = props.allowNegative;
    var allowLeadingZeros = props.allowLeadingZeros;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop3;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop3;
    var thousandSeparator = props.thousandSeparator;
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = "";
    var defaultValue = props.defaultValue;
    var value = props.value;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var restProps = __rest(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
    var ref = getSeparators(props);
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var _format = function(numStr) {
      return format(numStr, props);
    };
    var _removeFormatting = function(inputValue, changeMeta) {
      return removeFormatting(inputValue, changeMeta, props);
    };
    var _value = isNil(value) ? defaultValue : value;
    var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
    if (!isNil(value)) {
      _valueIsNumericString = _valueIsNumericString || typeof value === "number";
    } else if (!isNil(defaultValue)) {
      _valueIsNumericString = _valueIsNumericString || typeof defaultValue === "number";
    }
    var roundIncomingValueToPrecision = function(value2) {
      if (isNotValidValue(value2)) {
        return value2;
      }
      if (typeof value2 === "number") {
        value2 = toNumericString(value2);
      }
      if (_valueIsNumericString && typeof decimalScale === "number") {
        return roundToPrecision(value2, decimalScale, Boolean(fixedDecimalScale));
      }
      return value2;
    };
    var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
    var ref$1_0 = ref$1[0];
    var numAsString = ref$1_0.numAsString;
    var formattedValue = ref$1_0.formattedValue;
    var _onValueChange = ref$1[1];
    var _onKeyDown = function(e8) {
      var el = e8.target;
      var key = e8.key;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value2 = el.value;
      if (value2 === void 0) value2 = "";
      if ((key === "Backspace" || key === "Delete") && selectionEnd < prefix.length) {
        e8.preventDefault();
        return;
      }
      if (selectionStart !== selectionEnd) {
        onKeyDown(e8);
        return;
      }
      if (key === "Backspace" && value2[0] === "-" && selectionStart === prefix.length + 1 && allowNegative) {
        setCaretPosition(el, 1);
      }
      if (decimalScale && fixedDecimalScale) {
        if (key === "Backspace" && value2[selectionStart - 1] === decimalSeparator) {
          setCaretPosition(el, selectionStart - 1);
          e8.preventDefault();
        } else if (key === "Delete" && value2[selectionStart] === decimalSeparator) {
          e8.preventDefault();
        }
      }
      if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value2[selectionStart] === decimalSeparator) {
        setCaretPosition(el, selectionStart + 1);
      }
      var _thousandSeparator = thousandSeparator === true ? "," : thousandSeparator;
      if (key === "Backspace" && value2[selectionStart - 1] === _thousandSeparator) {
        setCaretPosition(el, selectionStart - 1);
      }
      if (key === "Delete" && value2[selectionStart] === _thousandSeparator) {
        setCaretPosition(el, selectionStart + 1);
      }
      onKeyDown(e8);
    };
    var _onBlur = function(e8) {
      var _value2 = numAsString;
      if (!_value2.match(/\d/g)) {
        _value2 = "";
      }
      if (!allowLeadingZeros) {
        _value2 = fixLeadingZero(_value2);
      }
      if (fixedDecimalScale && decimalScale) {
        _value2 = roundToPrecision(_value2, decimalScale, fixedDecimalScale);
      }
      if (_value2 !== numAsString) {
        var formattedValue2 = format(_value2, props);
        _onValueChange({
          formattedValue: formattedValue2,
          value: _value2,
          floatValue: parseFloat(_value2)
        }, {
          event: e8,
          source: SourceType.event
        });
      }
      onBlur(e8);
    };
    var isValidInputCharacter = function(inputChar) {
      if (inputChar === decimalSeparator) {
        return true;
      }
      return charIsNumber(inputChar);
    };
    var isCharacterSame = function(ref2) {
      var currentValue = ref2.currentValue;
      var lastValue = ref2.lastValue;
      var formattedValue2 = ref2.formattedValue;
      var currentValueIndex = ref2.currentValueIndex;
      var formattedValueIndex = ref2.formattedValueIndex;
      var curChar = currentValue[currentValueIndex];
      var newChar = formattedValue2[formattedValueIndex];
      var typedRange = findChangeRange(lastValue, currentValue);
      var to = typedRange.to;
      var getDecimalSeparatorIndex = function(value2) {
        return _removeFormatting(value2).indexOf(".") + prefix.length;
      };
      if (value === 0 && fixedDecimalScale && decimalScale && currentValue[to.start] === decimalSeparator && getDecimalSeparatorIndex(currentValue) < currentValueIndex && getDecimalSeparatorIndex(formattedValue2) > formattedValueIndex) {
        return false;
      }
      if (currentValueIndex >= to.start && currentValueIndex < to.end && allowedDecimalSeparators && allowedDecimalSeparators.includes(curChar) && newChar === decimalSeparator) {
        return true;
      }
      return curChar === newChar;
    };
    return Object.assign(Object.assign({}, restProps), {
      value: formattedValue,
      valueIsNumericString: false,
      isValidInputCharacter,
      isCharacterSame,
      onValueChange: _onValueChange,
      format: _format,
      removeFormatting: _removeFormatting,
      getCaretBoundary: function(formattedValue2) {
        return getCaretBoundary(formattedValue2, props);
      },
      onKeyDown: _onKeyDown,
      onBlur: _onBlur
    });
  }
  function NumericFormat(props) {
    var numericFormatProps = useNumericFormat(props);
    return Rn.createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
  }

  // src/use-calculator.ts
  init_hooks_module();

  // node_modules/fuse.js/dist/fuse.mjs
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => "Invalid value for key ".concat(key);
  var PATTERN_LENGTH_TOO_LARGE = (max2) => "Pattern length exceeds max of ".concat(max2, ".");
  var MISSING_KEY_PROPERTY = (name) => "Missing ".concat(name, " property in key");
  var INVALID_KEY_WEIGHT_VALUE = (key) => "Property 'weight' in key '".concat(key, "' must be a positive integer");
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        let obj = createKey(key);
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }
    return { path, id, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index3) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index3]) {
        list.push(obj2);
      } else {
        let key = path2[index3];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index3 === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i10 = 0, len = value.length; i10 < len; i10 += 1) {
            deepGet(value[i10], path2, index3 + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index3 + 1);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When `true`, the algorithm will ignore diacritics (accents) in comparisons
    ignoreDiacritics: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a15, b7) => a15.score === b7.score ? a15.idx < b7.idx ? -1 : 1 : a15.score < b7.score ? -1 : 1
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m8 = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n9 = parseFloat(Math.round(norm2 * m8) / m8);
        cache.set(numTokens, n9);
        return n9;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i10 = idx, len = this.size(); i10 < len; i10 += 1) {
        this.records[i10].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray(value2)) {
              value2.forEach((item, k7) => {
                stack.push({
                  nestedArrIndex: k7,
                  value: item
                });
              });
            } else ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i10 = 0;
    for (let len = matchmask.length; i10 < len; i10 += 1) {
      let match = matchmask[i10];
      if (match && start === -1) {
        start = i10;
      } else if (!match && start !== -1) {
        end = i10 - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i10 - 1] && i10 - start >= minMatchCharLength) {
      indices.push([start, i10 - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index3;
    while ((index3 = text.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore$1(pattern, {
        currentLocation: index3,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index3 + patternLen;
      if (computeMatches) {
        let i10 = 0;
        while (i10 < patternLen) {
          matchMask[index3 + i10] = 1;
          i10 += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i10 = 0; i10 < patternLen; i10 += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern, {
          errors: i10,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i10) - 1;
      for (let j10 = finish; j10 >= start; j10 -= 1) {
        let currentLocation = j10 - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j10] = (bitArr[j10 + 1] << 1 | 1) & charMatch;
        if (i10) {
          bitArr[j10] |= (lastBitArr[j10 + 1] | lastBitArr[j10]) << 1 | 1 | lastBitArr[j10 + 1];
        }
        if (bitArr[j10] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: i10,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern, {
        errors: i10 + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i10 = 0, len = pattern.length; i10 < len; i10 += 1) {
      const char = pattern.charAt(i10);
      mask[char] = (mask[char] || 0) | 1 << len - i10 - 1;
    }
    return mask;
  }
  var stripDiacritics = String.prototype.normalize ? ((str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((str) => str);
  var BitapSearch = class {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i10 = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i10 < end) {
          addChunk(this.pattern.substr(i10, MAX_BITS), i10);
          i10 += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern, alphabet, {
          location: location + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index3 = text.indexOf(this.pattern);
      const isMatch = index3 === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreDiacritics,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location = 0;
      let index3;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index3 = text.indexOf(this.pattern, location)) > -1) {
        location = index3 + patternLen;
        indices.push([index3, location - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i10 = 0, len = query.length; i10 < len; i10 += 1) {
        const queryItem = query[i10];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      ignoreDiacritics = Config.ignoreDiacritics,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        ignoreDiacritics,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location,
        threshold,
        distance
      };
      pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
      this.pattern = pattern;
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_7, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      text = ignoreDiacritics ? stripDiacritics(text) : text;
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i10 = 0, qLen = query.length; i10 < qLen; i10 += 1) {
        const searchers2 = query[i10];
        allIndices.length = 0;
        numMatches = 0;
        for (let j10 = 0, pLen = searchers2.length; j10 < pLen; j10 += 1) {
          const searcher = searchers2[j10];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i10 = 0, len = registeredSearchers.length; i10 < len; i10 += 1) {
      let searcherClass = registeredSearchers[i10];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options, { auto = true } = {}) {
    const next = (query2) => {
      let keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format2(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options = {}, index3) {
      this.options = __spreadValues(__spreadValues({}, Config), options);
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index3);
    }
    setCollection(docs, index3) {
      this._docs = docs;
      if (index3 && !(index3 instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index3 || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i10 = 0, len = this._docs.length; i10 < len; i10 += 1) {
        const doc = this._docs[i10];
        if (predicate(doc, i10)) {
          this.removeAt(i10);
          i10 -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format2(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate2 = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i10 = 0, len = node.children.length; i10 < len; i10 += 1) {
          const child = node.children[i10];
          const result = evaluate2(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate2(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "7.1.0";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }

  // src/properties.json
  var properties_default = [{ "#": "10 ALBION AVE (17-0-94)", $: 591300 }, { "#": "11 ALBION AVE (17-0-116)", $: 664400 }, { "#": "12 ALBION AVE (17-0-95)", $: 963700 }, { "#": "13 ALBION AVE (17-0-115)", $: 707500 }, { "#": "14 ALBION AVE (17-0-96)", $: 775900 }, { "#": "15 ALBION AVE (17-0-114)", $: 686100 }, { "#": "16 ALBION AVE (17-0-97)", $: 575400 }, { "#": "17 ALBION AVE (17-0-112)", $: 601400 }, { "#": "18 ALBION AVE (17-0-98)", $: 673200 }, { "#": "19 ALBION AVE (17-0-111)", $: 670700 }, { "#": "20 ALBION AVE (17-0-99)", $: 623200 }, { "#": "21 ALBION AVE (17-0-110)", $: 676400 }, { "#": "22 ALBION AVE (17-0-100)", $: 672900 }, { "#": "23 ALBION AVE (17-0-109)", $: 671200 }, { "#": "24 ALBION AVE (17-0-101)", $: 597600 }, { "#": "25 ALBION AVE (17-0-108)", $: 627e3 }, { "#": "26 ALBION AVE (17-0-102)", $: 675500 }, { "#": "27 ALBION AVE (17-0-107)", $: 601300 }, { "#": "28 ALBION AVE (17-0-103)", $: 580500 }, { "#": "29 ALBION AVE (17-0-106)", $: 610800 }, { "#": "3 ALBION AVE (17-0-118)", $: 877700 }, { "#": "30 ALBION AVE (17-0-104)", $: 608e3 }, { "#": "31 ALBION AVE (17-0-105)", $: 670200 }, { "#": "32 ALBION AVE (16-0-268)", $: 721600 }, { "#": "33 ALBION AVE (16-0-267)", $: 682500 }, { "#": "35 ALBION AVE (16-0-266)", $: 697900 }, { "#": "37 ALBION AVE (16-0-265)", $: 828300 }, { "#": "38 ALBION AVE (16-0-269)", $: 765500 }, { "#": "8 ALBION AVE (17-0-93)", $: 563700 }, { "#": "9 ALBION AVE (17-0-117)", $: 655200 }, { "#": "1 ALDEN AVE (22-0-21A)", $: 700600 }, { "#": "11 ALDEN AVE (21-0-303)", $: 681900 }, { "#": "12 ALDEN AVE (21-0-310A)", $: 877100 }, { "#": "15 ALDEN AVE (21-0-302)", $: 828200 }, { "#": "17 ALDEN AVE (21-0-301)", $: 873100 }, { "#": "19 ALDEN AVE (21-0-300)", $: 924200 }, { "#": "20 ALDEN AVE (21-0-315)", $: 1029e3 }, { "#": "22 ALDEN AVE (21-0-316)", $: 842200 }, { "#": "26 ALDEN AVE (21-0-318)", $: 799400 }, { "#": "29 ALDEN AVE (21-0-295)", $: 1124100 }, { "#": "3 ALDEN AVE (22-0-20A)", $: 764500 }, { "#": "31 ALDEN AVE (21-0-294)", $: 753900 }, { "#": "33 ALDEN AVE (21-0-293)", $: 832500 }, { "#": "4 ALDEN AVE (21-0-307)", $: 845700 }, { "#": "5 ALDEN AVE (21-0-306)", $: 865700 }, { "#": "6 ALDEN AVE (21-0-308)", $: 787e3 }, { "#": "7 ALDEN AVE (21-0-305)", $: 872200 }, { "#": "8 ALDEN AVE (21-0-309)", $: 803400 }, { "#": "9 ALDEN AVE (21-0-304)", $: 762400 }, { "#": "3 ALICE LN (19-0-153)", $: 929600 }, { "#": "10 ALBION AVE (17-0-94)", $: 591300 }, { "#": "1 APPLE HILL LN (7-0-352)", $: 1201e3 }, { "#": "10 APPLE HILL LN (7-0-350)", $: 1018900 }, { "#": "12 APPLE HILL LN (7-0-350A)", $: 1017400 }, { "#": "2 APPLE HILL LN (7-0-328)", $: 1008900 }, { "#": "3 APPLE HILL LN (7-0-353)", $: 1377100 }, { "#": "4 APPLE HILL LN (7-0-329A)", $: 1041900 }, { "#": "5 APPLE HILL LN (7-0-354)", $: 1004200 }, { "#": "6 APPLE HILL LN (7-0-329B)", $: 1001e3 }, { "#": "8 APPLE HILL LN (7-0-329C)", $: 1106100 }, { "#": "9 APPLE HILL LN (7-0-329D)", $: 1065300 }, { "#": "10 ARICIA LN (11-0-366)", $: 834e3 }, { "#": "11 ARICIA LN (11-0-372)", $: 1014800 }, { "#": "12 ARICIA LN (11-0-367)", $: 862e3 }, { "#": "14 ARICIA LN (11-0-368)", $: 866600 }, { "#": "15 ARICIA LN (11-0-371)", $: 958200 }, { "#": "16 ARICIA LN (11-0-369)", $: 900900 }, { "#": "17 ARICIA LN (11-0-370)", $: 1087500 }, { "#": "2 ARICIA LN (6-0-210)", $: 944500 }, { "#": "4 ARICIA LN (6-0-210A)", $: 856e3 }, { "#": "5 ARICIA LN (6-0-210B)", $: 1016800 }, { "#": "6 ARICIA LN (11-0-364)", $: 991300 }, { "#": "7 ARICIA LN (11-0-374)", $: 866500 }, { "#": "8 ARICIA LN (11-0-365)", $: 892200 }, { "#": "9 ARICIA LN (11-0-373)", $: 962800 }, { "#": "10 ARLENE AVE (20-0-52)", $: 937800 }, { "#": "4 ARLENE AVE (15-0-62)", $: 876900 }, { "#": "6 ARLENE AVE (15-0-63)", $: 759400 }, { "#": "7 ARLENE AVE (20-0-53)", $: 822500 }, { "#": "8 ARLENE AVE (15-0-64)", $: 750200 }, { "#": "10 ARNOLD RD (21-0-370)", $: 664100 }, { "#": "11 ARNOLD RD (21-0-362)", $: 794300 }, { "#": "12 ARNOLD RD (21-0-371)", $: 821700 }, { "#": "14 ARNOLD RD (21-0-372)", $: 769400 }, { "#": "15 ARNOLD RD (21-0-361)", $: 753200 }, { "#": "16 ARNOLD RD (21-0-373)", $: 675300 }, { "#": "17 ARNOLD RD (21-0-360)", $: 799400 }, { "#": "18 ARNOLD RD (21-0-374)", $: 706800 }, { "#": "19 ARNOLD RD (21-0-359)", $: 1193800 }, { "#": "2 ARNOLD RD (21-0-368)", $: 661e3 }, { "#": "20 ARNOLD RD (21-0-375)", $: 745500 }, { "#": "21 ARNOLD RD (21-0-358)", $: 1016400 }, { "#": "22 ARNOLD RD (21-0-376)", $: 734e3 }, { "#": "23 ARNOLD RD (21-0-356)", $: 721800 }, { "#": "24 ARNOLD RD (21-0-377)", $: 664600 }, { "#": "26 ARNOLD RD (21-0-378)", $: 690100 }, { "#": "3 ARNOLD RD (21-0-366)", $: 623800 }, { "#": "5 ARNOLD RD (21-0-365)", $: 651700 }, { "#": "7 ARNOLD RD (21-0-364)", $: 767100 }, { "#": "8 ARNOLD RD (21-0-369)", $: 816500 }, { "#": "9 ARNOLD RD (21-0-363)", $: 668600 }, { "#": "1 APPLE HILL LN (7-0-352)", $: 1201e3 }, { "#": "3 ARTHUR ST (19-0-171A)", $: 745200 }, { "#": "4 ARTHUR ST (19-0-166A)", $: 916500 }, { "#": "11 ASPEN LN (21-0-452)", $: 999400 }, { "#": "3 ASPEN LN (25-0-28)", $: 1093400 }, { "#": "4 ASPEN LN (21-0-455)", $: 1036500 }, { "#": "5 ASPEN LN (25-0-29)", $: 1082700 }, { "#": "6 ASPEN LN (21-0-454)", $: 1044500 }, { "#": "7 ASPEN LN (25-0-30)", $: 1116400 }, { "#": "8 ASPEN LN (21-0-453)", $: 1050300 }, { "#": "9 ASPEN LN (25-0-31)", $: 1078600 }, { "#": "1 ATWOOD AVE (18-0-29)", $: 571600 }, { "#": "10 ATWOOD AVE (18-0-24)", $: 729500 }, { "#": "11 ATWOOD AVE (18-0-35)", $: 563900 }, { "#": "14 ATWOOD AVE (23-0-30)", $: 632700 }, { "#": "16 ATWOOD AVE (23-0-31)", $: 733700 }, { "#": "19 ATWOOD AVE (18-0-37)", $: 687400 }, { "#": "22 ATWOOD AVE (23-0-33)", $: 682100 }, { "#": "26 ATWOOD AVE (23-0-35)", $: 679e3 }, { "#": "3 ATWOOD AVE (18-0-28)", $: 574600 }, { "#": "4 ATWOOD AVE (18-0-22)", $: 633400 }, { "#": "5 ATWOOD AVE (18-0-27)", $: 693200 }, { "#": "6 ATWOOD AVE (18-0-23)", $: 537200 }, { "#": "7 ATWOOD AVE (18-0-26)", $: 594300 }, { "#": "1 AVALON RD (3-0-287)", $: 661600 }, { "#": "10 AVALON RD (3-0-261)", $: 722900 }, { "#": "11 AVALON RD (3-0-275)", $: 678400 }, { "#": "12 AVALON RD (3-0-262)", $: 691e3 }, { "#": "13 AVALON RD (3-0-274)", $: 779200 }, { "#": "14 AVALON RD (3-0-263)", $: 698200 }, { "#": "16 AVALON RD (3-0-264)", $: 766600 }, { "#": "17 AVALON RD (3-0-269)", $: 791600 }, { "#": "18 AVALON RD (3-0-265)", $: 637400 }, { "#": "19 AVALON RD (3-0-268)", $: 684900 }, { "#": "2 AVALON RD (3-0-256)", $: 721400 }, { "#": "20 AVALON RD (3-0-266)", $: 751400 }, { "#": "21 AVALON RD (9-0-109)", $: 636800 }, { "#": "22 AVALON RD (3-0-267)", $: 675e3 }, { "#": "24 AVALON RD (9-0-110)", $: 658100 }, { "#": "25 AVALON RD (9-0-117)", $: 884800 }, { "#": "26 AVALON RD (9-0-114)", $: 752500 }, { "#": "3 AVALON RD (3-0-285)", $: 701900 }, { "#": "4 AVALON RD (3-0-257)", $: 878400 }, { "#": "5 AVALON RD (3-0-284)", $: 829200 }, { "#": "6 AVALON RD (3-0-258)", $: 667500 }, { "#": "8 AVALON RD (3-0-259)", $: 780400 }, { "#": "9 AVALON RD (3-0-276)", $: 766100 }, { "#": "10 AVON ST (12-0-165)", $: 681400 }, { "#": "11 AVON ST (12-0-164)", $: 698900 }, { "#": "12 AVON ST (12-0-166)", $: 944600 }, { "#": "14 AVON ST (12-0-167)", $: 582200 }, { "#": "3 ARTHUR ST (19-0-171A)", $: 745200 }, { "#": "15 AVON ST (12-0-162)", $: 828400 }, { "#": "16 AVON ST (12-0-168)", $: 633200 }, { "#": "17 AVON ST (12-0-161)", $: 763400 }, { "#": "18 AVON ST (12-0-171)", $: 726600 }, { "#": "2 AVON ST (12-0-184)", $: 628800 }, { "#": "4 AVON ST (12-0-185)", $: 620500 }, { "#": "5 AVON ST (12-0-198)", $: 486900 }, { "#": "8 AVON ST (12-0-187)", $: 862600 }, { "#": "1 BANCROFT PL (8-0-21)", $: 590300 }, { "#": "3 BANCROFT PL (8-0-22)", $: 836500 }, { "#": "4 BANCROFT PL (13-0-137)", $: 745600 }, { "#": "8 BANCROFT PL (13-0-139)", $: 689200 }, { "#": "10 BARBARA RD (1-0-49)", $: 1026700 }, { "#": "11 BARBARA RD (1-0-54)", $: 647400 }, { "#": "12 BARBARA RD (1-0-50)", $: 821900 }, { "#": "14 BARBARA RD (1-0-51)", $: 877e3 }, { "#": "15 BARBARA RD (1-0-53)", $: 717900 }, { "#": "17 BARBARA RD (1-0-52)", $: 793100 }, { "#": "18 BARBARA RD (1-0-307)", $: 1424300 }, { "#": "19 BARBARA RD (1-0-308)", $: 1026900 }, { "#": "2 BARBARA RD (1-0-45)", $: 908e3 }, { "#": "3 BARBARA RD (7-0-216)", $: 746700 }, { "#": "4 BARBARA RD (1-0-46)", $: 670100 }, { "#": "5 BARBARA RD (7-0-215)", $: 1031e3 }, { "#": "6 BARBARA RD (1-0-47)", $: 826500 }, { "#": "7 BARBARA RD (7-0-214)", $: 744600 }, { "#": "8 BARBARA RD (1-0-48)", $: 737700 }, { "#": "9 BARBARA RD (1-0-55)", $: 778100 }, { "#": "5 BARRETT AVE (13-0-171)", $: 584800 }, { "#": "10 BEACON ST (2-0-164)", $: 729500 }, { "#": "11 BEACON ST (7-0-396)", $: 663400 }, { "#": "13 BEACON ST (7-0-395)", $: 736500 }, { "#": "15 BEACON ST (2-0-177)", $: 637400 }, { "#": "17 BEACON ST (2-0-176)", $: 562100 }, { "#": "19 BEACON ST (2-0-175)", $: 678400 }, { "#": "21 BEACON ST (2-0-174)", $: 630200 }, { "#": "22 BEACON ST (2-0-166)", $: 616300 }, { "#": "24 BEACON ST (2-0-167)", $: 652500 }, { "#": "25 BEACON ST (2-0-370)", $: 1181100 }, { "#": "26 BEACON ST (2-0-168)", $: 613e3 }, { "#": "27 BEACON ST (2-0-369)", $: 1026200 }, { "#": "28 BEACON ST (2-0-169)", $: 604600 }, { "#": "29 BEACON ST (2-0-368)", $: 974800 }, { "#": "30 BEACON ST (2-0-170)", $: 972900 }, { "#": "31 BEACON ST (2-0-367)", $: 983200 }, { "#": "32 BEACON ST (2-0-361)", $: 925800 }, { "#": "33 BEACON ST (8-0-185)", $: 1183e3 }, { "#": "34 BEACON ST (2-0-362)", $: 1025700 }, { "#": "35 BEACON ST (8-0-184)", $: 953100 }, { "#": "36 BEACON ST (2-0-363)", $: 918600 }, { "#": "15 AVON ST (12-0-162)", $: 828400 }, { "#": "38 BEACON ST (2-0-364)", $: 984100 }, { "#": "39 BEACON ST (8-0-183)", $: 1011300 }, { "#": "4 BEACON ST (2-0-161)", $: 659800 }, { "#": "40 BEACON ST (2-0-365)", $: 1058600 }, { "#": "42 BEACON ST (2-0-366)", $: 980500 }, { "#": "5 BEACON ST (7-0-399)", $: 828400 }, { "#": "6 BEACON ST (2-0-162)", $: 762400 }, { "#": "7 BEACON ST (7-0-398)", $: 737800 }, { "#": "8 BEACON ST (2-0-163)", $: 609300 }, { "#": "9 BEACON ST (7-0-397)", $: 941600 }, { "#": "10 BEAR HILL RD (11-0-63)", $: 771600 }, { "#": "12 BEAR HILL RD (11-0-64)", $: 734600 }, { "#": "14 BEAR HILL RD (11-0-65)", $: 1003100 }, { "#": "15 BEAR HILL RD (11-0-83)", $: 792500 }, { "#": "16 BEAR HILL RD (11-0-66)", $: 630400 }, { "#": "17 BEAR HILL RD (11-0-82)", $: 722200 }, { "#": "18 BEAR HILL RD (11-0-67)", $: 724400 }, { "#": "19 BEAR HILL RD (11-0-81)", $: 836900 }, { "#": "22 BEAR HILL RD (11-0-69)", $: 631300 }, { "#": "23 BEAR HILL RD (11-0-80)", $: 717400 }, { "#": "24 BEAR HILL RD (11-0-70)", $: 707900 }, { "#": "26 BEAR HILL RD (11-0-71)", $: 603800 }, { "#": "27 BEAR HILL RD (11-0-79)", $: 954400 }, { "#": "28 BEAR HILL RD (11-0-72)", $: 696400 }, { "#": "29 BEAR HILL RD (11-0-78)", $: 1138300 }, { "#": "30 BEAR HILL RD (11-0-73)", $: 737300 }, { "#": "31 BEAR HILL RD (11-0-77)", $: 674100 }, { "#": "32 BEAR HILL RD (11-0-74)", $: 591e3 }, { "#": "33 BEAR HILL RD (11-0-76)", $: 720100 }, { "#": "34 BEAR HILL RD (11-0-75)", $: 673700 }, { "#": "7 BEAR HILL RD (11-0-96)", $: 754300 }, { "#": "9 BEAR HILL RD (11-0-95)", $: 923e3 }, { "#": "16 BELLEVUE RD (5-0-46)", $: 649500 }, { "#": "18 BELLEVUE RD (5-0-45)", $: 767900 }, { "#": "20 BELLEVUE RD (5-0-44)", $: 752900 }, { "#": "24 BELLEVUE RD (5-0-43)", $: 646200 }, { "#": "25 BELLEVUE RD (5-0-7)", $: 943700 }, { "#": "30 BELLEVUE RD (5-0-41)", $: 854500 }, { "#": "37 BELLEVUE RD (5-0-15)", $: 1250900 }, { "#": "38 BELLEVUE RD (5-0-37)", $: 953300 }, { "#": "39 BELLEVUE RD (5-0-18)", $: 987300 }, { "#": "40 BELLEVUE RD (5-0-38)", $: 1084200 }, { "#": "44 BELLEVUE RD (5-0-27A)", $: 869200 }, { "#": "46 BELLEVUE RD (5-0-26)", $: 843300 }, { "#": "48 BELLEVUE RD (6-0-3)", $: 1098300 }, { "#": "10 BENJAMIN TRL (8-0-176B)", $: 803300 }, { "#": "12 BENJAMIN TRL (8-0-176C)", $: 881100 }, { "#": "4 BENJAMIN TRL (8-0-182)", $: 798600 }, { "#": "6 BENJAMIN TRL (8-0-181)", $: 864500 }, { "#": "8 BENJAMIN TRL (8-0-176A)", $: 821700 }, { "#": "38 BEACON ST (2-0-364)", $: 984100 }, { "#": "11 BENTON ST (18-0-320)", $: 831500 }, { "#": "6 BENTON ST (18-0-325)", $: 734600 }, { "#": "10 BERKLEY ST (21-0-203)", $: 800300 }, { "#": "3 BERKLEY ST (21-0-199)", $: 608600 }, { "#": "4 BERKLEY ST (21-0-200)", $: 612200 }, { "#": "5 BERKLEY ST (21-0-198)", $: 699700 }, { "#": "6 BERKLEY ST (21-0-201)", $: 808600 }, { "#": "7 BERKLEY ST (21-0-197)", $: 798e3 }, { "#": "8 BERKLEY ST (21-0-202)", $: 645400 }, { "#": "11 BIRCH ST (19-0-118)", $: 1304100 }, { "#": "2 BIRCH ST (19-0-127)", $: 670100 }, { "#": "4 BIRCH ST (19-0-129)", $: 703200 }, { "#": "5 BIRCH ST (19-0-130)", $: 648100 }, { "#": "7 BIRCH ST (19-0-131)", $: 1177200 }, { "#": "9 BIRCH ST (19-0-120)", $: 1217400 }, { "#": "2 BLUEBERRY LN (7-0-354E)", $: 1068500 }, { "#": "3 BLUEBERRY LN (7-0-354A)", $: 1226900 }, { "#": "4 BLUEBERRY LN (7-0-354D)", $: 1132e3 }, { "#": "5 BLUEBERRY LN (7-0-354B)", $: 1095600 }, { "#": "6 BLUEBERRY LN (7-0-354C)", $: 907600 }, { "#": "10 BONAD RD (16-0-129)", $: 708300 }, { "#": "11 BONAD RD (16-0-159)", $: 587600 }, { "#": "12 BONAD RD (16-0-130)", $: 633500 }, { "#": "14 BONAD RD (16-0-131)", $: 637100 }, { "#": "15 BONAD RD (16-0-158)", $: 801400 }, { "#": "16 BONAD RD (16-0-132)", $: 727200 }, { "#": "17 BONAD RD (16-0-157)", $: 773600 }, { "#": "18 BONAD RD (16-0-133)", $: 696500 }, { "#": "19 BONAD RD (16-0-156)", $: 683900 }, { "#": "20 BONAD RD (16-0-134)", $: 705500 }, { "#": "21 BONAD RD (16-0-155)", $: 618700 }, { "#": "22 BONAD RD (16-0-135)", $: 704500 }, { "#": "23 BONAD RD (16-0-154)", $: 651500 }, { "#": "24 BONAD RD (16-0-136)", $: 714e3 }, { "#": "29 BONAD RD (16-0-151)", $: 821300 }, { "#": "30 BONAD RD (16-0-137)", $: 827e3 }, { "#": "31 BONAD RD (16-0-150)", $: 681700 }, { "#": "33 BONAD RD (16-0-149)", $: 677200 }, { "#": "34 BONAD RD (16-0-138)", $: 747700 }, { "#": "35 BONAD RD (16-0-148)", $: 552100 }, { "#": "36 BONAD RD (16-0-139)", $: 577500 }, { "#": "37 BONAD RD (16-0-147)", $: 727900 }, { "#": "38 BONAD RD (16-0-140)", $: 666800 }, { "#": "39 BONAD RD (16-0-146)", $: 547300 }, { "#": "4 BONAD RD (16-0-126)", $: 598900 }, { "#": "40 BONAD RD (16-0-141)", $: 676500 }, { "#": "41 BONAD RD (16-0-145)", $: 851200 }, { "#": "42 BONAD RD (16-0-142)", $: 714800 }, { "#": "45 BONAD RD (16-0-143)", $: 1087500 }, { "#": "5 BONAD RD (16-0-162)", $: 621800 }, { "#": "11 BENTON ST (18-0-320)", $: 831500 }, { "#": "6 BONAD RD (16-0-127)", $: 712e3 }, { "#": "7 BONAD RD (16-0-161)", $: 719700 }, { "#": "8 BONAD RD (16-0-128)", $: 790400 }, { "#": "9 BONAD RD (16-0-160)", $: 605500 }, { "#": "1 BOW ST (7-0-377)", $: 797500 }, { "#": "10 BOW ST (12-0-190)", $: 1015700 }, { "#": "13 BOW ST (7-0-376)", $: 695600 }, { "#": "14 BOW ST (7-0-3)", $: 1063300 }, { "#": "15 BOW ST (7-0-375)", $: 762700 }, { "#": "17 BOW ST (7-0-374)", $: 644100 }, { "#": "18 BOW ST (7-0-4)", $: 742100 }, { "#": "20 BOW ST (7-0-5)", $: 588500 }, { "#": "22 BOW ST (7-0-6)", $: 632700 }, { "#": "29 BOW ST (7-0-369)", $: 725e3 }, { "#": "35 BOW ST (7-0-368)", $: 767200 }, { "#": "40 BOW ST (7-0-273B)", $: 678800 }, { "#": "42 BOW ST (7-0-273A)", $: 589200 }, { "#": "43 BOW ST (7-0-361)", $: 579300 }, { "#": "44 BOW ST (7-0-277)", $: 621100 }, { "#": "45 BOW ST (7-0-359)", $: 545400 }, { "#": "46 BOW ST (7-0-278)", $: 569e3 }, { "#": "48 BOW ST (7-0-279)", $: 551700 }, { "#": "49 BOW ST (7-0-358)", $: 638700 }, { "#": "50 BOW ST (7-0-280)", $: 589e3 }, { "#": "51 BOW ST (7-0-357)", $: 760600 }, { "#": "52 BOW ST (7-0-281)", $: 684300 }, { "#": "54 BOW ST (7-0-282)", $: 596900 }, { "#": "55 BOW ST (7-0-288)", $: 587800 }, { "#": "56 BOW ST (7-0-283)", $: 518300 }, { "#": "57 BOW ST (7-0-287)", $: 577400 }, { "#": "6 BOW ST (7-0-2)", $: 723e3 }, { "#": "60 BOW ST (7-0-266)", $: 735600 }, { "#": "63 BOW ST (7-0-264)", $: 648200 }, { "#": "67 BOW ST (7-0-263)", $: 756500 }, { "#": "10 BOW STREET CT (7-0-291)", $: 598900 }, { "#": "12 BOW STREET CT (7-0-292)", $: 653600 }, { "#": "16 BOW STREET CT (7-0-330)", $: 536200 }, { "#": "17 BOW STREET CT (7-0-329)", $: 756400 }, { "#": "18 BOW STREET CT (7-0-331)", $: 621900 }, { "#": "20 BOW STREET CT (7-0-332)", $: 615700 }, { "#": "22 BOW STREET CT (7-0-333)", $: 611700 }, { "#": "23 BOW STREET CT (7-0-326)", $: 724400 }, { "#": "24 BOW STREET CT (7-0-334)", $: 635200 }, { "#": "25 BOW STREET CT (7-0-325)", $: 585e3 }, { "#": "26 BOW STREET CT (7-0-335)", $: 625400 }, { "#": "27 BOW STREET CT (7-0-311)", $: 707200 }, { "#": "28 BOW STREET CT (7-0-336)", $: 712600 }, { "#": "29 BOW STREET CT (7-0-310)", $: 677800 }, { "#": "3 BOW STREET CT (7-0-356)", $: 747600 }, { "#": "31 BOW STREET CT (7-0-309)", $: 605500 }, { "#": "6 BONAD RD (16-0-127)", $: 712e3 }, { "#": "33 BOW STREET CT (1-0-288)", $: 606700 }, { "#": "35 BOW STREET CT (1-0-287)", $: 644300 }, { "#": "4 BOW STREET CT (7-0-289)", $: 639800 }, { "#": "5 BOW STREET CT (7-0-355)", $: 690500 }, { "#": "6 BOW STREET CT (7-0-290)", $: 746200 }, { "#": "7 BOW STREET CT (7-0-351)", $: 766100 }, { "#": "1 BOXWOOD RD (9-0-48)", $: 837900 }, { "#": "3 BOXWOOD RD (9-0-47)", $: 864900 }, { "#": "1 BRACKETT AVE (7-0-174)", $: 678300 }, { "#": "10 BRACKETT AVE (7-0-178)", $: 732400 }, { "#": "11 BRACKETT AVE (7-0-171)", $: 760200 }, { "#": "12 BRACKETT AVE (7-0-179)", $: 577400 }, { "#": "13 BRACKETT AVE (7-0-170)", $: 722400 }, { "#": "14 BRACKETT AVE (7-0-180)", $: 569900 }, { "#": "15 BRACKETT AVE (7-0-168)", $: 668500 }, { "#": "16 BRACKETT AVE (7-0-182)", $: 671700 }, { "#": "19 BRACKETT AVE (7-0-167)", $: 772900 }, { "#": "20 BRACKETT AVE (7-0-185)", $: 709e3 }, { "#": "29 BRACKETT AVE (7-0-82)", $: 978800 }, { "#": "3 BRACKETT AVE (7-0-173)", $: 614800 }, { "#": "4 BRACKETT AVE (7-0-175)", $: 755300 }, { "#": "6 BRACKETT AVE (7-0-176)", $: 808400 }, { "#": "7 BRACKETT AVE (7-0-172)", $: 974600 }, { "#": "8 BRACKETT AVE (7-0-177)", $: 744500 }, { "#": "2 BRAMANTE CIR (2-0-332)", $: 979200 }, { "#": "4 BRAMANTE CIR (2-0-330)", $: 951100 }, { "#": "6 BRAMANTE CIR (2-0-331)", $: 981600 }, { "#": "3 BRENTWOOD RD (22-0-69)", $: 826900 }, { "#": "4 BRENTWOOD RD (22-0-28)", $: 76e4 }, { "#": "5 BRENTWOOD RD (22-0-68)", $: 878700 }, { "#": "8 BRENTWOOD RD (22-0-29)", $: 968800 }, { "#": "12 BROADWAY (11-0-45)", $: 768700 }, { "#": "13 BROADWAY (11-0-290)", $: 823e3 }, { "#": "14 BROADWAY (11-0-46)", $: 866500 }, { "#": "15 BROADWAY (11-0-289)", $: 914600 }, { "#": "18 BROADWAY (11-0-47)", $: 1069500 }, { "#": "19 BROADWAY (11-0-288)", $: 970800 }, { "#": "21 BROADWAY (11-0-287)", $: 821400 }, { "#": "25 BROADWAY (11-0-275)", $: 794700 }, { "#": "26 BROADWAY (11-0-48)", $: 1130200 }, { "#": "279 BROADWAY (6-0-77)", $: 647900 }, { "#": "28 BROADWAY (11-0-49)", $: 849900 }, { "#": "280 BROADWAY (6-0-64)", $: 1196600 }, { "#": "285 BROADWAY (6-0-76)", $: 749500 }, { "#": "286 BROADWAY (6-0-65)", $: 1066200 }, { "#": "297 BROADWAY (6-0-68)", $: 688400 }, { "#": "30 BROADWAY (11-0-51)", $: 1002700 }, { "#": "305 BROADWAY (6-0-67)", $: 749100 }, { "#": "31 BROADWAY (11-0-273)", $: 766400 }, { "#": "32 BROADWAY (11-0-52)", $: 1743100 }, { "#": "33 BOW STREET CT (1-0-288)", $: 606700 }, { "#": "33 BROADWAY (11-0-272)", $: 827600 }, { "#": "34 BROADWAY (11-0-53)", $: 1022e3 }, { "#": "35 BROADWAY (11-0-271)", $: 801e3 }, { "#": "36 BROADWAY (11-0-54)", $: 803400 }, { "#": "38 BROADWAY (11-0-55)", $: 740100 }, { "#": "39 BROADWAY (11-0-269)", $: 1347200 }, { "#": "40 BROADWAY (11-0-170)", $: 791300 }, { "#": "42 BROADWAY (11-0-171)", $: 722100 }, { "#": "44 BROADWAY (11-0-172)", $: 837800 }, { "#": "45 BROADWAY (11-0-238)", $: 754500 }, { "#": "46 BROADWAY (11-0-174)", $: 829200 }, { "#": "48 BROADWAY (11-0-175)", $: 867400 }, { "#": "5 BROADWAY (11-0-294A)", $: 648100 }, { "#": "50 BROADWAY (11-0-176)", $: 733900 }, { "#": "51 BROADWAY (11-0-206)", $: 1083100 }, { "#": "52 BROADWAY (11-0-177)", $: 706500 }, { "#": "53 BROADWAY (6-0-192)", $: 709900 }, { "#": "54 BROADWAY (6-0-196)", $: 756400 }, { "#": "56 BROADWAY (6-0-197)", $: 571600 }, { "#": "58 BROADWAY (6-0-198)", $: 645200 }, { "#": "60 BROADWAY (6-0-199)", $: 745700 }, { "#": "7 BROADWAY (11-0-293)", $: 769700 }, { "#": "8 BROADWAY (11-0-44)", $: 1128600 }, { "#": "9 BROADWAY (11-0-292)", $: 951e3 }, { "#": "11 BROOK ST (4-0-119)", $: 400900 }, { "#": "2 BROOK ST (4-0-115)", $: 676100 }, { "#": "4 BROOK ST (4-0-116)", $: 746700 }, { "#": "5 BROOK ST (4-0-122)", $: 658900 }, { "#": "7 BROOK ST (4-0-121)", $: 1265100 }, { "#": "1 BROOKBRIDGE RD (7-0-344)", $: 716700 }, { "#": "10 BROOKBRIDGE RD (7-0-298)", $: 632900 }, { "#": "11 BROOKBRIDGE RD (7-0-339)", $: 1219800 }, { "#": "12 BROOKBRIDGE RD (7-0-299)", $: 687400 }, { "#": "14 BROOKBRIDGE RD (7-0-300)", $: 874800 }, { "#": "15 BROOKBRIDGE RD (7-0-338)", $: 591400 }, { "#": "16 BROOKBRIDGE RD (7-0-302)", $: 644400 }, { "#": "17 BROOKBRIDGE RD (7-0-337)", $: 655e3 }, { "#": "18 BROOKBRIDGE RD (7-0-304)", $: 663900 }, { "#": "2 BROOKBRIDGE RD (7-0-293)", $: 671800 }, { "#": "20 BROOKBRIDGE RD (7-0-306)", $: 1096800 }, { "#": "22 BROOKBRIDGE RD (7-0-308)", $: 641300 }, { "#": "24 BROOKBRIDGE RD (1-0-57)", $: 976700 }, { "#": "25 BROOKBRIDGE RD (1-0-282)", $: 707500 }, { "#": "26 BROOKBRIDGE RD (1-0-58)", $: 956e3 }, { "#": "27 BROOKBRIDGE RD (1-0-278)", $: 762e3 }, { "#": "28 BROOKBRIDGE RD (1-0-62)", $: 731800 }, { "#": "3 BROOKBRIDGE RD (7-0-343)", $: 651700 }, { "#": "30 BROOKBRIDGE RD (1-0-67)", $: 673600 }, { "#": "32 BROOKBRIDGE RD (1-0-68)", $: 663200 }, { "#": "34 BROOKBRIDGE RD (1-0-71)", $: 765700 }, { "#": "33 BROADWAY (11-0-272)", $: 827600 }, { "#": "36 BROOKBRIDGE RD (1-0-74)", $: 947400 }, { "#": "38 BROOKBRIDGE RD (1-0-79)", $: 924100 }, { "#": "39 BROOKBRIDGE RD (1-0-276)", $: 726800 }, { "#": "41 BROOKBRIDGE RD (1-0-275)", $: 723900 }, { "#": "43 BROOKBRIDGE RD (1-0-274)", $: 783700 }, { "#": "45 BROOKBRIDGE RD (1-0-273)", $: 785e3 }, { "#": "46 BROOKBRIDGE RD (1-0-96)", $: 715100 }, { "#": "47 BROOKBRIDGE RD (1-0-272)", $: 791300 }, { "#": "48 BROOKBRIDGE RD (1-0-97)", $: 77e4 }, { "#": "49 BROOKBRIDGE RD (1-0-271)", $: 704900 }, { "#": "5 BROOKBRIDGE RD (7-0-342)", $: 667400 }, { "#": "50 BROOKBRIDGE RD (1-0-98)", $: 1118500 }, { "#": "51 BROOKBRIDGE RD (1-0-270)", $: 857500 }, { "#": "52 BROOKBRIDGE RD (1-0-99)", $: 879400 }, { "#": "53 BROOKBRIDGE RD (1-0-269)", $: 818e3 }, { "#": "54 BROOKBRIDGE RD (1-0-100)", $: 872300 }, { "#": "56 BROOKBRIDGE RD (1-0-103)", $: 854800 }, { "#": "58 BROOKBRIDGE RD (1-0-105)", $: 852100 }, { "#": "6 BROOKBRIDGE RD (7-0-294)", $: 693100 }, { "#": "61 BROOKBRIDGE RD (1-0-266)", $: 848200 }, { "#": "7 BROOKBRIDGE RD (7-0-341)", $: 692100 }, { "#": "8 BROOKBRIDGE RD (7-0-297)", $: 778600 }, { "#": "9 BROOKBRIDGE RD (7-0-340)", $: 877100 }, { "#": "11 BUTLER AVE (17-0-389)", $: 634e3 }, { "#": "15 BUTLER AVE (17-0-388)", $: 610700 }, { "#": "17 BUTLER AVE (17-0-387)", $: 720400 }, { "#": "21 BUTLER AVE (17-0-386)", $: 693700 }, { "#": "22 BUTLER AVE (17-0-345)", $: 705600 }, { "#": "25 BUTLER AVE (17-0-385)", $: 784900 }, { "#": "29 BUTLER AVE (17-0-384)", $: 669900 }, { "#": "35 BUTLER AVE (17-0-383)", $: 570200 }, { "#": "38 BUTLER AVE (17-0-347)", $: 759400 }, { "#": "39 BUTLER AVE (17-0-382A)", $: 1290100 }, { "#": "41 BUTLER AVE (17-0-382)", $: 1264400 }, { "#": "43 BUTLER AVE (17-0-381)", $: 713700 }, { "#": "47 BUTLER AVE (17-0-380)", $: 739800 }, { "#": "49 BUTLER AVE (17-0-379)", $: 657700 }, { "#": "50 BUTLER AVE (17-0-369)", $: 580300 }, { "#": "51 BUTLER AVE (17-0-378)", $: 654100 }, { "#": "52 BUTLER AVE (17-0-370)", $: 758700 }, { "#": "53 BUTLER AVE (17-0-377)", $: 690100 }, { "#": "55 BUTLER AVE (17-0-376)", $: 626200 }, { "#": "56 BUTLER AVE (17-0-371)", $: 680500 }, { "#": "57 BUTLER AVE (17-0-375)", $: 625500 }, { "#": "59 BUTLER AVE (17-0-374)", $: 581200 }, { "#": "61 BUTLER AVE (17-0-373)", $: 833500 }, { "#": "62 BUTLER AVE (17-0-363)", $: 987100 }, { "#": "10 BUTTONWOOD RD (19-0-193)", $: 966100 }, { "#": "12 BUTTONWOOD RD (19-0-194)", $: 624900 }, { "#": "3 BUTTONWOOD RD (19-0-198)", $: 647e3 }, { "#": "36 BROOKBRIDGE RD (1-0-74)", $: 947400 }, { "#": "5 BUTTONWOOD RD (19-0-197)", $: 558e3 }, { "#": "6 BUTTONWOOD RD (19-0-190)", $: 609500 }, { "#": "7 BUTTONWOOD RD (19-0-196)", $: 808700 }, { "#": "8 BUTTONWOOD RD (19-0-192)", $: 548500 }, { "#": "9 BUTTONWOOD RD (19-0-195)", $: 729700 }, { "#": "10 CABOT RD (22-0-66)", $: 993700 }, { "#": "11 CABOT RD (22-0-32)", $: 967500 }, { "#": "14 CABOT RD (22-0-67)", $: 884500 }, { "#": "15 CABOT RD (22-0-31)", $: 980400 }, { "#": "17 CABOT RD (22-0-30)", $: 1035800 }, { "#": "2 CABOT RD (22-0-62)", $: 867500 }, { "#": "21 CABOT RD (22-0-55)", $: 923800 }, { "#": "4 CABOT RD (22-0-63)", $: 877900 }, { "#": "6 CABOT RD (22-0-64)", $: 763700 }, { "#": "8 CABOT RD (22-0-65)", $: 898800 }, { "#": "9 CABOT RD (22-0-33)", $: 782400 }, { "#": "1 CAMPBELL RD (14-0-86)", $: 626100 }, { "#": "10 CAMPBELL RD (14-0-69)", $: 682800 }, { "#": "11 CAMPBELL RD (14-0-81)", $: 734600 }, { "#": "12 CAMPBELL RD (14-0-70)", $: 660200 }, { "#": "14 CAMPBELL RD (14-0-71)", $: 676900 }, { "#": "15 CAMPBELL RD (14-0-80)", $: 633500 }, { "#": "16 CAMPBELL RD (14-0-72)", $: 600300 }, { "#": "17 CAMPBELL RD (14-0-79)", $: 810200 }, { "#": "18 CAMPBELL RD (14-0-73)", $: 617200 }, { "#": "19 CAMPBELL RD (14-0-78)", $: 710500 }, { "#": "2 CAMPBELL RD (14-0-65)", $: 730300 }, { "#": "20 CAMPBELL RD (14-0-74)", $: 714900 }, { "#": "21 CAMPBELL RD (14-0-77)", $: 722400 }, { "#": "22 CAMPBELL RD (14-0-75)", $: 741900 }, { "#": "23 CAMPBELL RD (14-0-76)", $: 656400 }, { "#": "4 CAMPBELL RD (14-0-66)", $: 644200 }, { "#": "5 CAMPBELL RD (14-0-85)", $: 908800 }, { "#": "6 CAMPBELL RD (14-0-67)", $: 743300 }, { "#": "7 CAMPBELL RD (14-0-84)", $: 690500 }, { "#": "8 CAMPBELL RD (14-0-68)", $: 691400 }, { "#": "9 CAMPBELL RD (14-0-82)", $: 611e3 }, { "#": "1 CAPEN ST (12-0-335)", $: 523100 }, { "#": "3 CAPEN ST (12-0-334)", $: 666400 }, { "#": "3 CARDINAL RD (1-0-173)", $: 709800 }, { "#": "4 CARDINAL RD (1-0-168)", $: 732200 }, { "#": "5 CARDINAL RD (1-0-172)", $: 843600 }, { "#": "6 CARDINAL RD (1-0-169)", $: 718200 }, { "#": "8 CARDINAL RD (1-0-170)", $: 820600 }, { "#": "3 CARLIDA RD (6-0-131)", $: 817200 }, { "#": "4 CARLIDA RD (6-0-117)", $: 813300 }, { "#": "5 CARLIDA RD (6-0-130)", $: 667700 }, { "#": "6 CARLIDA RD (6-0-118)", $: 782200 }, { "#": "0 CARMEN AVE (1-0-149)", $: 1249500 }, { "#": "2 CARMEN AVE (2-0-16)", $: 716300 }, { "#": "5 BUTTONWOOD RD (19-0-197)", $: 558e3 }, { "#": "3 CARMEN AVE (2-0-20)", $: 754900 }, { "#": "4 CARMEN AVE (2-0-17)", $: 785e3 }, { "#": "6 CARMEN AVE (2-0-18)", $: 789300 }, { "#": "9 CARMEN AVE (2-0-19)", $: 826600 }, { "#": "10 CAROL ST (19-0-124)", $: 625100 }, { "#": "15 CAROL ST (19-0-139)", $: 861500 }, { "#": "17 CAROL ST (19-0-141)", $: 834200 }, { "#": "3 CAROL ST (19-0-136)", $: 592900 }, { "#": "30 CAROL ST (19-0-110)", $: 793200 }, { "#": "31 CAROL ST (19-0-108)", $: 471800 }, { "#": "5 CAROL ST (19-0-137)", $: 727300 }, { "#": "6 CAROL ST (19-0-133)", $: 791100 }, { "#": "7 CAROL ST (19-0-138)", $: 743200 }, { "#": "1 CEDAR AVE (18-0-112)", $: 921500 }, { "#": "11 CEDAR AVE (18-0-78)", $: 647100 }, { "#": "16 CEDAR AVE (18-0-88)", $: 1109200 }, { "#": "17 CEDAR AVE (18-0-75)", $: 593600 }, { "#": "19 CEDAR AVE (18-0-74)", $: 604200 }, { "#": "2 CEDAR AVE (18-0-84)", $: 645800 }, { "#": "20 CEDAR AVE (18-0-90)", $: 935400 }, { "#": "21 CEDAR AVE (18-0-73)", $: 689e3 }, { "#": "22 CEDAR AVE (18-0-90A)", $: 918800 }, { "#": "23 CEDAR AVE (18-0-72)", $: 699800 }, { "#": "25 CEDAR AVE (18-0-71)", $: 538700 }, { "#": "27 CEDAR AVE (18-0-70)", $: 536600 }, { "#": "3 CEDAR AVE (18-0-83)", $: 785100 }, { "#": "30 CEDAR AVE (18-0-91)", $: 544400 }, { "#": "31 CEDAR AVE (18-0-68)", $: 755200 }, { "#": "32 CEDAR AVE (18-0-98)", $: 803200 }, { "#": "33 CEDAR AVE (18-0-67)", $: 963400 }, { "#": "4 CEDAR AVE (18-0-85)", $: 671500 }, { "#": "5 CEDAR AVE (18-0-82)", $: 593200 }, { "#": "7 CEDAR AVE (18-0-81)", $: 761900 }, { "#": "8 CEDAR AVE (18-0-86)", $: 693600 }, { "#": "1 CEDAR WAY (1-0-239)", $: 669100 }, { "#": "10 CEDAR WAY (1-0-222)", $: 648900 }, { "#": "12 CEDAR WAY (1-0-223)", $: 625800 }, { "#": "14 CEDAR WAY (1-0-224)", $: 571700 }, { "#": "15 CEDAR WAY (1-0-234)", $: 487500 }, { "#": "2 CEDAR WAY (1-0-218)", $: 453400 }, { "#": "24 CEDAR WAY (1-0-225)", $: 661100 }, { "#": "25 CEDAR WAY (1-0-232)", $: 597300 }, { "#": "28 CEDAR WAY (1-0-226)", $: 638900 }, { "#": "29 CEDAR WAY (1-0-231)", $: 582200 }, { "#": "30 CEDAR WAY (1-0-227)", $: 695700 }, { "#": "31 CEDAR WAY (1-0-230)", $: 631500 }, { "#": "32 CEDAR WAY (1-0-228)", $: 992800 }, { "#": "33 CEDAR WAY (1-0-229)", $: 763500 }, { "#": "6 CEDAR WAY (1-0-219)", $: 724400 }, { "#": "7 CEDAR WAY (1-0-238)", $: 709300 }, { "#": "3 CARMEN AVE (2-0-20)", $: 754900 }, { "#": "8 CEDAR WAY (1-0-220)", $: 661500 }, { "#": "9 CEDAR WAY (1-0-236)", $: 766700 }, { "#": "10 CELESTINE TRL (11-0-12)", $: 615200 }, { "#": "11 CELESTINE TRL (11-0-14)", $: 795900 }, { "#": "12 CELESTINE TRL (11-0-13)", $: 671600 }, { "#": "3 CELESTINE TRL (11-0-18)", $: 554e3 }, { "#": "4 CELESTINE TRL (11-0-9)", $: 587200 }, { "#": "5 CELESTINE TRL (11-0-17)", $: 537e3 }, { "#": "6 CELESTINE TRL (11-0-10)", $: 578500 }, { "#": "7 CELESTINE TRL (11-0-16)", $: 740200 }, { "#": "8 CELESTINE TRL (11-0-11)", $: 568100 }, { "#": "9 CELESTINE TRL (11-0-15)", $: 667e3 }, { "#": "118 CENTRAL ST (17-0-160)", $: 620800 }, { "#": "127 CENTRAL ST (12-0-13)", $: 706400 }, { "#": "131 CENTRAL ST (12-0-12)", $: 483900 }, { "#": "133 CENTRAL ST (12-0-10)", $: 631e3 }, { "#": "141 CENTRAL ST (12-0-9)", $: 491500 }, { "#": "145 CENTRAL ST (12-0-8)", $: 568900 }, { "#": "149 CENTRAL ST (12-0-7)", $: 502800 }, { "#": "152 CENTRAL ST (17-0-163)", $: 541700 }, { "#": "153 CENTRAL ST (12-0-6)", $: 470900 }, { "#": "154 CENTRAL ST (17-0-164)", $: 469300 }, { "#": "159 CENTRAL ST (12-0-5)", $: 645500 }, { "#": "181 CENTRAL ST (12-0-3)", $: 714300 }, { "#": "185 CENTRAL ST (12-0-3A)", $: 804500 }, { "#": "203 CENTRAL ST (12-0-1)", $: 675700 }, { "#": "207 CENTRAL ST (11-0-359)", $: 503600 }, { "#": "211 CENTRAL ST (11-0-358)", $: 549400 }, { "#": "221 CENTRAL ST (11-0-352)", $: 634600 }, { "#": "223 CENTRAL ST (11-0-351)", $: 599600 }, { "#": "225 CENTRAL ST (11-0-350)", $: 645300 }, { "#": "229 CENTRAL ST (11-0-349)", $: 578300 }, { "#": "245 CENTRAL ST (11-0-348)", $: 703300 }, { "#": "249 CENTRAL ST (11-0-347)", $: 830600 }, { "#": "68 CENTRAL ST (12-0-423)", $: 562300 }, { "#": "70 CENTRAL ST (12-0-424)", $: 654100 }, { "#": "72 CENTRAL ST (12-0-425)", $: 672900 }, { "#": "80 CENTRAL ST (12-0-426)", $: 543200 }, { "#": "82 CENTRAL ST (12-0-428)", $: 543400 }, { "#": "86 CENTRAL ST (12-0-430)", $: 510500 }, { "#": "10 CHAPEL WAY (8-0-212)", $: 864100 }, { "#": "3 CHAPEL WAY (8-0-87E)", $: 978700 }, { "#": "4 CHAPEL WAY (8-0-209)", $: 757600 }, { "#": "5 CHAPEL WAY (8-0-87F1)", $: 954900 }, { "#": "6 CHAPEL WAY (8-0-210)", $: 762100 }, { "#": "7 CHAPEL WAY (8-0-87G)", $: 962300 }, { "#": "8 CHAPEL WAY (8-0-211)", $: 747500 }, { "#": "1 CHARLES ST (12-0-206)", $: 786700 }, { "#": "10 CHARLES ST (12-0-195)", $: 528100 }, { "#": "11 CHARLES ST (12-0-190A)", $: 847800 }, { "#": "8 CEDAR WAY (1-0-220)", $: 661500 }, { "#": "12 CHARLES ST (12-0-196)", $: 622700 }, { "#": "13 CHARLES ST (12-0-189)", $: 798700 }, { "#": "15 CHARLES ST (12-0-188)", $: 701400 }, { "#": "6 CHARLES ST (12-0-192)", $: 628400 }, { "#": "7 CHARLES ST (12-0-191)", $: 689500 }, { "#": "8 CHARLES ST (12-0-193)", $: 699e3 }, { "#": "2 CHASE RD (11-0-186)", $: 567700 }, { "#": "3 CHASE RD (6-0-169)", $: 588e3 }, { "#": "4 CHASE RD (6-0-170)", $: 672300 }, { "#": "5 CHASE RD (6-0-168)", $: 644400 }, { "#": "6 CHASE RD (6-0-171)", $: 813400 }, { "#": "7 CHASE RD (6-0-167)", $: 762600 }, { "#": "8 CHASE RD (6-0-172)", $: 800600 }, { "#": "10 CHERRY AVE (2-0-21)", $: 772500 }, { "#": "14 CHERRY AVE (2-0-23)", $: 668e3 }, { "#": "15 CHERRY AVE (2-0-13)", $: 609300 }, { "#": "16 CHERRY AVE (2-0-24)", $: 622600 }, { "#": "17 CHERRY AVE (2-0-12)", $: 637500 }, { "#": "18 CHERRY AVE (2-0-25)", $: 798500 }, { "#": "19 CHERRY AVE (2-0-11)", $: 623100 }, { "#": "2 CHERRY AVE (1-0-138)", $: 679400 }, { "#": "20 CHERRY AVE (2-0-26)", $: 655600 }, { "#": "21 CHERRY AVE (2-0-10)", $: 592300 }, { "#": "22 CHERRY AVE (2-0-27)", $: 641800 }, { "#": "24 CHERRY AVE (2-0-28)", $: 588500 }, { "#": "3 CHERRY AVE (1-0-145)", $: 728600 }, { "#": "4 CHERRY AVE (1-0-141)", $: 876100 }, { "#": "5 CHERRY AVE (1-0-144)", $: 659200 }, { "#": "6 CHERRY AVE (1-0-142)", $: 791500 }, { "#": "7 CHERRY AVE (2-0-15)", $: 750400 }, { "#": "8 CHERRY AVE (1-0-143)", $: 669900 }, { "#": "9 CHERRY AVE (2-0-14)", $: 832100 }, { "#": "11 CHESTNUT ST (17-0-233)", $: 782900 }, { "#": "14 CHESTNUT ST (18-0-115)", $: 725900 }, { "#": "15 CHESTNUT ST (18-0-114)", $: 671800 }, { "#": "17 CHESTNUT ST (18-0-113)", $: 604500 }, { "#": "18 CHESTNUT ST (18-0-117)", $: 743800 }, { "#": "26 CHESTNUT ST (18-0-141)", $: 921900 }, { "#": "27 CHESTNUT ST (18-0-111)", $: 528100 }, { "#": "28 CHESTNUT ST (18-0-142)", $: 776600 }, { "#": "29 CHESTNUT ST (18-0-110)", $: 541800 }, { "#": "3 CHESTNUT ST (17-0-236)", $: 608600 }, { "#": "31 CHESTNUT ST (18-0-109)", $: 668700 }, { "#": "34 CHESTNUT ST (18-0-144)", $: 926800 }, { "#": "37 CHESTNUT ST (18-0-107)", $: 822300 }, { "#": "40 CHESTNUT ST (18-0-514)", $: 649400 }, { "#": "41 CHESTNUT ST (18-0-559)", $: 723500 }, { "#": "42 CHESTNUT ST (18-0-515)", $: 612500 }, { "#": "7 CHESTNUT ST (17-0-235)", $: 559800 }, { "#": "9 CHESTNUT ST (17-0-234)", $: 552800 }, { "#": "12 CHARLES ST (12-0-196)", $: 622700 }, { "#": "10 CHRISTINE AVE (17-0-25)", $: 574900 }, { "#": "12 CHRISTINE AVE (17-0-26)", $: 531400 }, { "#": "14 CHRISTINE AVE (17-0-27)", $: 633200 }, { "#": "2 CHRISTINE AVE (17-0-22)", $: 559900 }, { "#": "3 CHRISTINE AVE (17-0-31)", $: 536500 }, { "#": "4 CHRISTINE AVE (17-0-23)", $: 938900 }, { "#": "5 CHRISTINE AVE (17-0-30)", $: 704e3 }, { "#": "7 CHRISTINE AVE (17-0-29)", $: 703900 }, { "#": "8 CHRISTINE AVE (17-0-24)", $: 695200 }, { "#": "9 CHRISTINE AVE (17-0-28)", $: 763300 }, { "#": "1 CITATION AVE (9-0-35)", $: 880900 }, { "#": "10 CITATION AVE (9-0-133)", $: 892e3 }, { "#": "11 CITATION AVE (9-0-30)", $: 825500 }, { "#": "12 CITATION AVE (9-0-134)", $: 993800 }, { "#": "14 CITATION AVE (9-0-135)", $: 956700 }, { "#": "15 CITATION AVE (9-0-29)", $: 787400 }, { "#": "16 CITATION AVE (9-0-139)", $: 734700 }, { "#": "18 CITATION AVE (9-0-140)", $: 838600 }, { "#": "19 CITATION AVE (9-0-27)", $: 905300 }, { "#": "2 CITATION AVE (9-0-129)", $: 783600 }, { "#": "20 CITATION AVE (9-0-141)", $: 753700 }, { "#": "21 CITATION AVE (9-0-26)", $: 717700 }, { "#": "22 CITATION AVE (9-0-142)", $: 787500 }, { "#": "23 CITATION AVE (9-0-25)", $: 922300 }, { "#": "24 CITATION AVE (9-0-143)", $: 768100 }, { "#": "25 CITATION AVE (9-0-24)", $: 905e3 }, { "#": "26 CITATION AVE (9-0-144)", $: 762200 }, { "#": "27 CITATION AVE (9-0-23)", $: 749700 }, { "#": "28 CITATION AVE (9-0-145)", $: 866200 }, { "#": "3 CITATION AVE (9-0-34)", $: 1111200 }, { "#": "30 CITATION AVE (9-0-146)", $: 799200 }, { "#": "32 CITATION AVE (9-0-147)", $: 824600 }, { "#": "33 CITATION AVE (9-0-1)", $: 837600 }, { "#": "34 CITATION AVE (9-0-148)", $: 888900 }, { "#": "4 CITATION AVE (9-0-130)", $: 841200 }, { "#": "5 CITATION AVE (9-0-33)", $: 937600 }, { "#": "6 CITATION AVE (9-0-131)", $: 983900 }, { "#": "7 CITATION AVE (9-0-32)", $: 848700 }, { "#": "8 CITATION AVE (9-0-132)", $: 887800 }, { "#": "9 CITATION AVE (9-0-31)", $: 824e3 }, { "#": "10 CLEARVIEW RD (13-0-193)", $: 875500 }, { "#": "11 CLEARVIEW RD (13-0-190)", $: 951900 }, { "#": "12 CLEARVIEW RD (13-0-194)", $: 705500 }, { "#": "14 CLEARVIEW RD (13-0-195)", $: 714400 }, { "#": "16 CLEARVIEW RD (13-0-196)", $: 757600 }, { "#": "18 CLEARVIEW RD (13-0-197)", $: 864600 }, { "#": "19 CLEARVIEW RD (13-0-201)", $: 803400 }, { "#": "20 CLEARVIEW RD (13-0-198)", $: 759200 }, { "#": "21 CLEARVIEW RD (13-0-200)", $: 781e3 }, { "#": "22 CLEARVIEW RD (13-0-199)", $: 945900 }, { "#": "10 CHRISTINE AVE (17-0-25)", $: 574900 }, { "#": "8 CLEARVIEW RD (13-0-192)", $: 803400 }, { "#": "9 CLEARVIEW RD (13-0-191)", $: 859300 }, { "#": "10 CLIFF ST (13-0-306)", $: 653e3 }, { "#": "10 COLLINCOTE ST (12-0-16)", $: 693200 }, { "#": "102 COLLINCOTE ST (11-0-319)", $: 627400 }, { "#": "103 COLLINCOTE ST (12-0-35)", $: 668900 }, { "#": "108 COLLINCOTE ST (11-0-320)", $: 644600 }, { "#": "109 COLLINCOTE ST (11-0-317)", $: 576100 }, { "#": "111 COLLINCOTE ST (11-0-316)", $: 809500 }, { "#": "114 COLLINCOTE ST (11-0-321)", $: 685800 }, { "#": "115 COLLINCOTE ST (11-0-315)", $: 742700 }, { "#": "119 COLLINCOTE ST (11-0-314)", $: 665700 }, { "#": "120 COLLINCOTE ST (11-0-322)", $: 672500 }, { "#": "123 COLLINCOTE ST (11-0-313)", $: 740200 }, { "#": "124 COLLINCOTE ST (11-0-323)", $: 634e3 }, { "#": "127 COLLINCOTE ST (11-0-312A)", $: 740900 }, { "#": "131 COLLINCOTE ST (11-0-312)", $: 734800 }, { "#": "132 COLLINCOTE ST (11-0-324)", $: 748700 }, { "#": "14 COLLINCOTE ST (12-0-17)", $: 568600 }, { "#": "140 COLLINCOTE ST (11-0-325)", $: 596800 }, { "#": "15 COLLINCOTE ST (12-0-52)", $: 572600 }, { "#": "152 COLLINCOTE ST (11-0-326)", $: 841500 }, { "#": "157 COLLINCOTE ST (11-0-307)", $: 596900 }, { "#": "164 COLLINCOTE ST (11-0-343)", $: 666500 }, { "#": "168 COLLINCOTE ST (11-0-344)", $: 916500 }, { "#": "17 COLLINCOTE ST (12-0-51)", $: 535500 }, { "#": "170 COLLINCOTE ST (11-0-345)", $: 713100 }, { "#": "171 COLLINCOTE ST (11-0-303A)", $: 1006600 }, { "#": "172 COLLINCOTE ST (11-0-346)", $: 747800 }, { "#": "18 COLLINCOTE ST (12-0-18)", $: 533300 }, { "#": "189 COLLINCOTE ST (11-0-303B)", $: 1018300 }, { "#": "193 COLLINCOTE ST (11-0-303C)", $: 1095300 }, { "#": "197 COLLINCOTE ST (11-0-302)", $: 844100 }, { "#": "198 COLLINCOTE ST (11-0-361)", $: 657600 }, { "#": "199 COLLINCOTE ST (11-0-301)", $: 706600 }, { "#": "21 COLLINCOTE ST (12-0-50)", $: 1165e3 }, { "#": "22 COLLINCOTE ST (12-0-19)", $: 515700 }, { "#": "26 COLLINCOTE ST (12-0-20)", $: 569300 }, { "#": "30 COLLINCOTE ST (12-0-21)", $: 625700 }, { "#": "36 COLLINCOTE ST (12-0-22)", $: 625500 }, { "#": "40 COLLINCOTE ST (12-0-23)", $: 767900 }, { "#": "43 COLLINCOTE ST (12-0-48)", $: 943e3 }, { "#": "45 COLLINCOTE ST (12-0-47)", $: 719600 }, { "#": "47 COLLINCOTE ST (12-0-46)", $: 583900 }, { "#": "48 COLLINCOTE ST (12-0-24)", $: 738300 }, { "#": "51 COLLINCOTE ST (12-0-45)", $: 571e3 }, { "#": "54 COLLINCOTE ST (12-0-25)", $: 774900 }, { "#": "6 COLLINCOTE ST (12-0-15A)", $: 592600 }, { "#": "60 COLLINCOTE ST (12-0-26)", $: 711700 }, { "#": "61 COLLINCOTE ST (12-0-44)", $: 719600 }, { "#": "8 CLEARVIEW RD (13-0-192)", $: 803400 }, { "#": "65 COLLINCOTE ST (12-0-43)", $: 748400 }, { "#": "66 COLLINCOTE ST (12-0-27)", $: 740400 }, { "#": "68 COLLINCOTE ST (12-0-28)", $: 690200 }, { "#": "71 COLLINCOTE ST (12-0-42)", $: 710700 }, { "#": "74 COLLINCOTE ST (12-0-29)", $: 645300 }, { "#": "77 COLLINCOTE ST (12-0-41)", $: 696300 }, { "#": "81 COLLINCOTE ST (12-0-40)", $: 611500 }, { "#": "85 COLLINCOTE ST (12-0-39)", $: 649300 }, { "#": "88 COLLINCOTE ST (12-0-34)", $: 654800 }, { "#": "89 COLLINCOTE ST (12-0-38)", $: 687800 }, { "#": "95 COLLINCOTE ST (12-0-37)", $: 611e3 }, { "#": "98 COLLINCOTE ST (11-0-318)", $: 648600 }, { "#": "99 COLLINCOTE ST (12-0-36)", $: 626e3 }, { "#": "2 COLUMBUS AVE (3-0-39)", $: 686800 }, { "#": "3 COLUMBUS AVE (3-0-44)", $: 591800 }, { "#": "4 COLUMBUS AVE (3-0-40)", $: 762600 }, { "#": "5 COLUMBUS AVE (3-0-43)", $: 637900 }, { "#": "21 COMMON ST (12-0-365)", $: 549300 }, { "#": "1 CONCORD RD (20-0-104)", $: 1031100 }, { "#": "10 CONCORD RD (20-0-92)", $: 894100 }, { "#": "11 CONCORD RD (20-0-99)", $: 914600 }, { "#": "12 CONCORD RD (20-0-93)", $: 959200 }, { "#": "14 CONCORD RD (20-0-94)", $: 983200 }, { "#": "15 CONCORD RD (20-0-98)", $: 1187200 }, { "#": "16 CONCORD RD (20-0-95)", $: 1029100 }, { "#": "17 CONCORD RD (20-0-97)", $: 949400 }, { "#": "18 CONCORD RD (24-0-7)", $: 1195800 }, { "#": "19 CONCORD RD (20-0-96)", $: 1195400 }, { "#": "2 CONCORD RD (20-0-88)", $: 1137100 }, { "#": "20 CONCORD RD (24-0-8)", $: 1140800 }, { "#": "3 CONCORD RD (20-0-103)", $: 924300 }, { "#": "4 CONCORD RD (20-0-89)", $: 935900 }, { "#": "5 CONCORD RD (20-0-102)", $: 914500 }, { "#": "6 CONCORD RD (20-0-90)", $: 1069800 }, { "#": "7 CONCORD RD (20-0-101)", $: 1014600 }, { "#": "8 CONCORD RD (20-0-91)", $: 1236600 }, { "#": "9 CONCORD RD (20-0-100)", $: 1001900 }, { "#": "1 CONGRESS ST (18-0-397)", $: 615100 }, { "#": "12 CONGRESS ST (18-0-547)", $: 668100 }, { "#": "13 CONGRESS ST (18-0-531)", $: 679700 }, { "#": "2 CONGRESS ST (18-0-396)", $: 620800 }, { "#": "23 CONGRESS ST (18-0-525)", $: 745800 }, { "#": "26 CONGRESS ST (18-0-552)", $: 785200 }, { "#": "28 CONGRESS ST (18-0-553)", $: 514700 }, { "#": "29 CONGRESS ST (18-0-523)", $: 781900 }, { "#": "3 CONGRESS ST (18-0-537)", $: 635e3 }, { "#": "30 CONGRESS ST (18-0-554)", $: 527e3 }, { "#": "4 CONGRESS ST (18-0-538)", $: 651100 }, { "#": "5 CONGRESS ST (18-0-536)", $: 587700 }, { "#": "6 CONGRESS ST (18-0-544)", $: 665400 }, { "#": "65 COLLINCOTE ST (12-0-43)", $: 748400 }, { "#": "8 CONGRESS ST (18-0-545)", $: 661100 }, { "#": "9 CONGRESS ST (18-0-533)", $: 703700 }, { "#": "9 CONGRESS ST (18-0-534)", $: 567900 }, { "#": "1 CONSTITUTION RD (20-0-83)", $: 1003600 }, { "#": "10 CONSTITUTION RD (20-0-108)", $: 948500 }, { "#": "11 CONSTITUTION RD (20-0-78)", $: 1007e3 }, { "#": "12 CONSTITUTION RD (20-0-109)", $: 1170200 }, { "#": "14 CONSTITUTION RD (20-0-110)", $: 1077200 }, { "#": "15 CONSTITUTION RD (20-0-77)", $: 1216300 }, { "#": "16 CONSTITUTION RD (20-0-111)", $: 1039400 }, { "#": "17 CONSTITUTION RD (20-0-76)", $: 875900 }, { "#": "18 CONSTITUTION RD (20-0-112)", $: 911500 }, { "#": "19 CONSTITUTION RD (20-0-75)", $: 907600 }, { "#": "20 CONSTITUTION RD (20-0-113)", $: 1134900 }, { "#": "21 CONSTITUTION RD (24-0-6)", $: 828900 }, { "#": "23 CONSTITUTION RD (24-0-5)", $: 836900 }, { "#": "3 CONSTITUTION RD (20-0-82)", $: 1082200 }, { "#": "4 CONSTITUTION RD (20-0-105)", $: 1057300 }, { "#": "5 CONSTITUTION RD (20-0-81)", $: 960100 }, { "#": "6 CONSTITUTION RD (20-0-106)", $: 973600 }, { "#": "7 CONSTITUTION RD (20-0-80)", $: 1129500 }, { "#": "8 CONSTITUTION RD (20-0-107)", $: 1077100 }, { "#": "9 CONSTITUTION RD (20-0-79)", $: 965100 }, { "#": "76 CONVERSE ST (6-0-6)", $: 1136600 }, { "#": "80 CONVERSE ST (6-0-7)", $: 1050300 }, { "#": "81 CONVERSE ST (6-0-5A)", $: 1234500 }, { "#": "84 CONVERSE ST (6-0-9)", $: 933800 }, { "#": "85 CONVERSE ST (6-0-4)", $: 1286700 }, { "#": "88 CONVERSE ST (6-0-10A)", $: 1224400 }, { "#": "17 COOLIDGE ST (18-0-542)", $: 620100 }, { "#": "9 COOLIDGE ST (18-0-543)", $: 672900 }, { "#": "1 COREY AVE (2-0-88B)", $: 978300 }, { "#": "10 COREY AVE (2-0-82)", $: 926800 }, { "#": "3 COREY AVE (2-0-88A)", $: 1161400 }, { "#": "5 COREY AVE (2-0-88)", $: 944e3 }, { "#": "7 COREY AVE (2-0-87)", $: 977e3 }, { "#": "9 COREY AVE (2-0-86)", $: 980600 }, { "#": "10 COTTAGE ST (17-0-261)", $: 705600 }, { "#": "12 COTTAGE ST (17-0-262)", $: 515200 }, { "#": "21 COTTAGE ST (17-0-438)", $: 672900 }, { "#": "22 COTTAGE ST (17-0-421)", $: 535900 }, { "#": "24 COTTAGE ST (17-0-422)", $: 672500 }, { "#": "25 COTTAGE ST (17-0-437)", $: 548700 }, { "#": "27 COTTAGE ST (17-0-436)", $: 594500 }, { "#": "31 COTTAGE ST (17-0-435)", $: 604800 }, { "#": "32 COTTAGE ST (17-0-424)", $: 812100 }, { "#": "33 COTTAGE ST (17-0-434)", $: 645600 }, { "#": "34 COTTAGE ST (17-0-425)", $: 770400 }, { "#": "35 COTTAGE ST (17-0-433)", $: 521300 }, { "#": "37 COTTAGE ST (17-0-432)", $: 626400 }, { "#": "8 CONGRESS ST (18-0-545)", $: 661100 }, { "#": "38 COTTAGE ST (17-0-426)", $: 681e3 }, { "#": "39 COTTAGE ST (17-0-431)", $: 556200 }, { "#": "41 COTTAGE ST (17-0-430)", $: 614800 }, { "#": "42 COTTAGE ST (17-0-427)", $: 639700 }, { "#": "46 COTTAGE ST (17-0-428)", $: 805100 }, { "#": "48 COTTAGE ST (17-0-429)", $: 628e3 }, { "#": "5 COTTAGE ST (17-0-269)", $: 516600 }, { "#": "52 COTTAGE ST (17-0-447)", $: 743600 }, { "#": "7 COTTAGE ST (17-0-268)", $: 524700 }, { "#": "8 COTTAGE ST (17-0-260)", $: 589600 }, { "#": "10 COUNTRY CLUB RD (17-0-458)", $: 827500 }, { "#": "11 COUNTRY CLUB RD (17-0-463)", $: 675300 }, { "#": "14 COUNTRY CLUB RD (17-0-460)", $: 699500 }, { "#": "15 COUNTRY CLUB RD (17-0-462)", $: 730400 }, { "#": "16 COUNTRY CLUB RD (17-0-461)", $: 740900 }, { "#": "17 COUNTRY CLUB RD (22-0-37)", $: 966800 }, { "#": "18 COUNTRY CLUB RD (22-0-38)", $: 860600 }, { "#": "2 COUNTRY CLUB RD (17-0-454)", $: 871400 }, { "#": "20 COUNTRY CLUB RD (22-0-39)", $: 964900 }, { "#": "22 COUNTRY CLUB RD (22-0-40)", $: 816e3 }, { "#": "24 COUNTRY CLUB RD (22-0-41)", $: 953300 }, { "#": "25 COUNTRY CLUB RD (22-0-61)", $: 857800 }, { "#": "26 COUNTRY CLUB RD (22-0-42)", $: 877900 }, { "#": "29 COUNTRY CLUB RD (22-0-60)", $: 898100 }, { "#": "3 COUNTRY CLUB RD (17-0-474)", $: 758200 }, { "#": "30 COUNTRY CLUB RD (22-0-43)", $: 1167900 }, { "#": "32 COUNTRY CLUB RD (22-0-44)", $: 962200 }, { "#": "33 COUNTRY CLUB RD (22-0-59)", $: 1006800 }, { "#": "34 COUNTRY CLUB RD (22-0-45)", $: 1111300 }, { "#": "35 COUNTRY CLUB RD (22-0-58)", $: 984700 }, { "#": "36 COUNTRY CLUB RD (22-0-46)", $: 1062400 }, { "#": "37 COUNTRY CLUB RD (22-0-57)", $: 917100 }, { "#": "39 COUNTRY CLUB RD (22-0-56)", $: 827900 }, { "#": "4 COUNTRY CLUB RD (17-0-455)", $: 728700 }, { "#": "40 COUNTRY CLUB RD (22-0-47)", $: 887100 }, { "#": "42 COUNTRY CLUB RD (22-0-48)", $: 935400 }, { "#": "43 COUNTRY CLUB RD (22-0-54)", $: 921400 }, { "#": "44 COUNTRY CLUB RD (22-0-49)", $: 920900 }, { "#": "45 COUNTRY CLUB RD (22-0-53)", $: 901400 }, { "#": "46 COUNTRY CLUB RD (22-0-50)", $: 886e3 }, { "#": "48 COUNTRY CLUB RD (22-0-51)", $: 836700 }, { "#": "50 COUNTRY CLUB RD (22-0-52)", $: 866500 }, { "#": "6 COUNTRY CLUB RD (17-0-456)", $: 617200 }, { "#": "7 COUNTRY CLUB RD (17-0-465)", $: 767500 }, { "#": "8 COUNTRY CLUB RD (17-0-457)", $: 976e3 }, { "#": "9 COUNTRY CLUB RD (17-0-464)", $: 833500 }, { "#": "1 COVENTRY LN (11-0-265)", $: 1323700 }, { "#": "11 COVENTRY LN (11-0-264E)", $: 1339200 }, { "#": "3 COVENTRY LN (11-0-264I)", $: 1492900 }, { "#": "5 COVENTRY LN (11-0-264H)", $: 1149400 }, { "#": "38 COTTAGE ST (17-0-426)", $: 681e3 }, { "#": "6 COVENTRY LN (11-0-264C)", $: 697400 }, { "#": "8 COVENTRY LN (11-0-264D)", $: 1599400 }, { "#": "9 COVENTRY LN (11-0-264F)", $: 1392700 }, { "#": "1 COWDREY ST (11-0-230)", $: 1073900 }, { "#": "10 COWDREY ST (11-0-310)", $: 891500 }, { "#": "11 COWDREY ST (11-0-308)", $: 742900 }, { "#": "12 COWDREY ST (11-0-311)", $: 873800 }, { "#": "3 COWDREY ST (11-0-246)", $: 821800 }, { "#": "5 COWDREY ST (11-0-309)", $: 903e3 }, { "#": "7 COWDREY ST (11-0-309A)", $: 962400 }, { "#": "8 COWDREY ST (11-0-310A)", $: 952400 }, { "#": "9 COWDREY ST (11-0-308A)", $: 84e4 }, { "#": "11 CRESCENT AVE (6-0-139)", $: 735400 }, { "#": "3 CRESCENT AVE (6-0-144)", $: 635600 }, { "#": "4 CRESCENT AVE (6-0-103)", $: 636700 }, { "#": "5 CRESCENT AVE (6-0-143)", $: 559400 }, { "#": "6 CRESCENT AVE (6-0-105)", $: 759500 }, { "#": "7 CRESCENT AVE (6-0-142)", $: 604600 }, { "#": "8 CRESCENT AVE (6-0-106)", $: 738900 }, { "#": "9 CRESCENT AVE (6-0-141)", $: 577100 }, { "#": "10 CRICKLEWOOD DR (2-0-122)", $: 837700 }, { "#": "11 CRICKLEWOOD DR (2-0-121)", $: 833400 }, { "#": "12 CRICKLEWOOD DR (2-0-123)", $: 1113500 }, { "#": "14 CRICKLEWOOD DR (2-0-124)", $: 875700 }, { "#": "15 CRICKLEWOOD DR (2-0-120)", $: 916900 }, { "#": "16 CRICKLEWOOD DR (2-0-125)", $: 1007600 }, { "#": "17 CRICKLEWOOD DR (2-0-119)", $: 817800 }, { "#": "18 CRICKLEWOOD DR (2-0-126)", $: 843200 }, { "#": "19 CRICKLEWOOD DR (2-0-118)", $: 944300 }, { "#": "20 CRICKLEWOOD DR (2-0-127)", $: 837300 }, { "#": "21 CRICKLEWOOD DR (2-0-117)", $: 924300 }, { "#": "23 CRICKLEWOOD DR (2-0-116)", $: 848e3 }, { "#": "3 CRICKLEWOOD DR (2-0-153)", $: 824200 }, { "#": "4 CRICKLEWOOD DR (2-0-148)", $: 739500 }, { "#": "5 CRICKLEWOOD DR (2-0-152)", $: 645200 }, { "#": "6 CRICKLEWOOD DR (2-0-149)", $: 754900 }, { "#": "7 CRICKLEWOOD DR (2-0-151)", $: 806700 }, { "#": "8 CRICKLEWOOD DR (2-0-150)", $: 672500 }, { "#": "10 CROSBY ST (21-0-6)", $: 776700 }, { "#": "11 CROSBY ST (21-0-23)", $: 664300 }, { "#": "12 CROSBY ST (21-0-7)", $: 881400 }, { "#": "14 CROSBY ST (21-0-8)", $: 839200 }, { "#": "15 CROSBY ST (21-0-22)", $: 675200 }, { "#": "16 CROSBY ST (21-0-9)", $: 579900 }, { "#": "17 CROSBY ST (21-0-21)", $: 681600 }, { "#": "18 CROSBY ST (21-0-10)", $: 682e3 }, { "#": "19 CROSBY ST (21-0-20)", $: 643e3 }, { "#": "20 CROSBY ST (21-0-11)", $: 1050900 }, { "#": "21 CROSBY ST (21-0-19)", $: 691900 }, { "#": "22 CROSBY ST (21-0-12)", $: 672500 }, { "#": "6 COVENTRY LN (11-0-264C)", $: 697400 }, { "#": "24 CROSBY ST (25-0-19)", $: 1016200 }, { "#": "26 CROSBY ST (25-0-20)", $: 906400 }, { "#": "28 CROSBY ST (25-0-21)", $: 891900 }, { "#": "3 CROSBY ST (21-0-84)", $: 710300 }, { "#": "30 CROSBY ST (25-0-22)", $: 965200 }, { "#": "32 CROSBY ST (24-0-2)", $: 1078800 }, { "#": "34 CROSBY ST (24-0-3)", $: 956800 }, { "#": "36 CROSBY ST (24-0-4)", $: 802100 }, { "#": "4 CROSBY ST (21-0-3)", $: 662900 }, { "#": "6 CROSBY ST (21-0-4)", $: 671300 }, { "#": "7 CROSBY ST (21-0-25)", $: 689700 }, { "#": "8 CROSBY ST (21-0-5)", $: 688200 }, { "#": "9 CROSBY ST (21-0-24)", $: 679500 }, { "#": "10 CRYSTAL DR (1-0-264)", $: 822300 }, { "#": "11 CRYSTAL DR (1-0-121)", $: 857800 }, { "#": "12 CRYSTAL DR (1-0-265)", $: 840500 }, { "#": "15 CRYSTAL DR (1-0-120)", $: 895700 }, { "#": "17 CRYSTAL DR (1-0-119)", $: 948500 }, { "#": "18 CRYSTAL DR (1-0-106)", $: 887400 }, { "#": "19 CRYSTAL DR (1-0-118)", $: 1010300 }, { "#": "20 CRYSTAL DR (1-0-107)", $: 811300 }, { "#": "21 CRYSTAL DR (1-0-117)", $: 1059900 }, { "#": "22 CRYSTAL DR (1-0-108)", $: 997600 }, { "#": "23 CRYSTAL DR (1-0-116)", $: 1176700 }, { "#": "24 CRYSTAL DR (1-0-109)", $: 893300 }, { "#": "25 CRYSTAL DR (1-0-115)", $: 795e3 }, { "#": "26 CRYSTAL DR (1-0-110)", $: 1081500 }, { "#": "27 CRYSTAL DR (1-0-114)", $: 1001800 }, { "#": "28 CRYSTAL DR (1-0-111)", $: 1323600 }, { "#": "29 CRYSTAL DR (1-0-113)", $: 1129100 }, { "#": "3 CRYSTAL DR (1-0-130)", $: 776900 }, { "#": "30 CRYSTAL DR (1-0-112)", $: 1670900 }, { "#": "4 CRYSTAL DR (1-0-261)", $: 954300 }, { "#": "5 CRYSTAL DR (1-0-129)", $: 746800 }, { "#": "6 CRYSTAL DR (1-0-262)", $: 1145500 }, { "#": "7 CRYSTAL DR (1-0-128)", $: 857400 }, { "#": "8 CRYSTAL DR (1-0-263)", $: 858700 }, { "#": "19 CURVE RD (15-0-31)", $: 528200 }, { "#": "20 CURVE RD (15-0-40)", $: 736700 }, { "#": "21 CURVE RD (15-0-30)", $: 600100 }, { "#": "25 CURVE RD (15-0-18)", $: 530900 }, { "#": "3 CURVE RD (15-0-34A)", $: 867800 }, { "#": "31 CURVE RD (15-0-43)", $: 551700 }, { "#": "34 CURVE RD (15-0-38)", $: 784100 }, { "#": "35 CURVE RD (15-0-45)", $: 903600 }, { "#": "37 CURVE RD (15-0-41)", $: 845100 }, { "#": "38 CURVE RD (15-0-37)", $: 855900 }, { "#": "39 CURVE RD (15-0-41A)", $: 1176700 }, { "#": "40 CURVE RD (15-0-36)", $: 807100 }, { "#": "5 CURVE RD (15-0-34)", $: 1091800 }, { "#": "24 CROSBY ST (25-0-19)", $: 1016200 }, { "#": "7 CURVE RD (15-0-33)", $: 677700 }, { "#": "1 DALE CT (13-0-59)", $: 547800 }, { "#": "3 DALE CT (13-0-58)", $: 535300 }, { "#": "10 DANBY RD (21-0-159)", $: 753400 }, { "#": "11 DANBY RD (21-0-151)", $: 901800 }, { "#": "12 DANBY RD (21-0-160)", $: 771100 }, { "#": "14 DANBY RD (21-0-161)", $: 833500 }, { "#": "15 DANBY RD (21-0-150)", $: 806e3 }, { "#": "16 DANBY RD (21-0-162)", $: 780100 }, { "#": "17 DANBY RD (21-0-149)", $: 773200 }, { "#": "18 DANBY RD (21-0-163)", $: 689100 }, { "#": "19 DANBY RD (21-0-148)", $: 686700 }, { "#": "20 DANBY RD (21-0-164)", $: 826300 }, { "#": "21 DANBY RD (21-0-147)", $: 728300 }, { "#": "22 DANBY RD (21-0-165)", $: 1130500 }, { "#": "3 DANBY RD (21-0-155)", $: 813600 }, { "#": "4 DANBY RD (21-0-156)", $: 818300 }, { "#": "5 DANBY RD (21-0-154)", $: 896500 }, { "#": "6 DANBY RD (21-0-157)", $: 732e3 }, { "#": "7 DANBY RD (21-0-153)", $: 702e3 }, { "#": "8 DANBY RD (21-0-158)", $: 744100 }, { "#": "9 DANBY RD (21-0-152)", $: 782300 }, { "#": "2 DANIEL DR (14-0-313)", $: 929200 }, { "#": "3 DANIEL DR (14-0-317)", $: 1167600 }, { "#": "5 DANIEL DR (14-0-314)", $: 1278800 }, { "#": "6 DANIEL DR (14-0-315)", $: 1029200 }, { "#": "7 DANIEL DR (14-0-316)", $: 1140500 }, { "#": "12 DAPPER DARBY DR (14-0-262)", $: 934600 }, { "#": "14 DAPPER DARBY DR (14-0-263)", $: 952200 }, { "#": "16 DAPPER DARBY DR (14-0-51A)", $: 1353900 }, { "#": "18 DAPPER DARBY DR (14-0-297)", $: 999700 }, { "#": "19 DAPPER DARBY DR (14-0-264)", $: 1037400 }, { "#": "20 DAPPER DARBY DR (14-0-298)", $: 953600 }, { "#": "21 DAPPER DARBY DR (14-0-319)", $: 994100 }, { "#": "22 DAPPER DARBY DR (14-0-299)", $: 1022e3 }, { "#": "23 DAPPER DARBY DR (14-0-318)", $: 1095100 }, { "#": "24 DAPPER DARBY DR (14-0-300)", $: 1069e3 }, { "#": "25 DAPPER DARBY DR (14-0-312)", $: 934500 }, { "#": "26 DAPPER DARBY DR (14-0-301)", $: 1052e3 }, { "#": "27 DAPPER DARBY DR (14-0-311)", $: 1177500 }, { "#": "29 DAPPER DARBY DR (14-0-310)", $: 1149100 }, { "#": "3 DAPPER DARBY DR (14-0-273)", $: 856800 }, { "#": "30 DAPPER DARBY DR (14-0-302)", $: 995e3 }, { "#": "31 DAPPER DARBY DR (14-0-305)", $: 1010600 }, { "#": "32 DAPPER DARBY DR (14-0-303)", $: 1067600 }, { "#": "33 DAPPER DARBY DR (14-0-304)", $: 996400 }, { "#": "4 DAPPER DARBY DR (14-0-255)", $: 854400 }, { "#": "5 DAPPER DARBY DR (14-0-272)", $: 907400 }, { "#": "7 DAPPER DARBY DR (14-0-271)", $: 973700 }, { "#": "9 DAPPER DARBY DR (14-0-270)", $: 902700 }, { "#": "7 CURVE RD (15-0-33)", $: 677700 }, { "#": "3 DAVID CIR (19-0-177R)", $: 956600 }, { "#": "4 DAVID CIR (19-0-177T)", $: 895200 }, { "#": "5 DAVID CIR (19-0-177S)", $: 934100 }, { "#": "10 DEAN ST (18-0-600)", $: 674300 }, { "#": "11 DEAN ST (18-0-615)", $: 1052300 }, { "#": "12 DEAN ST (18-0-601)", $: 606e3 }, { "#": "14 DEAN ST (18-0-602)", $: 593600 }, { "#": "15 DEAN ST (18-0-614)", $: 540900 }, { "#": "16 DEAN ST (18-0-603)", $: 680700 }, { "#": "18 DEAN ST (18-0-604)", $: 922300 }, { "#": "21 DEAN ST (18-0-612)", $: 654700 }, { "#": "23 DEAN ST (18-0-611)", $: 623300 }, { "#": "25 DEAN ST (18-0-610)", $: 796700 }, { "#": "26 DEAN ST (18-0-609)", $: 727600 }, { "#": "6 DEAN ST (18-0-598)", $: 796400 }, { "#": "8 DEAN ST (18-0-599)", $: 535900 }, { "#": "9 DEAN ST (18-0-616)", $: 62e4 }, { "#": "10 DEWITT RD (21-0-417)", $: 73e4 }, { "#": "11 DEWITT RD (21-0-409)", $: 776500 }, { "#": "12 DEWITT RD (21-0-418)", $: 668200 }, { "#": "13 DEWITT RD (21-0-408)", $: 750500 }, { "#": "14 DEWITT RD (21-0-419)", $: 710700 }, { "#": "15 DEWITT RD (21-0-407)", $: 880300 }, { "#": "16 DEWITT RD (21-0-420)", $: 724400 }, { "#": "17 DEWITT RD (21-0-406)", $: 602900 }, { "#": "19 DEWITT RD (21-0-405)", $: 913800 }, { "#": "2 DEWITT RD (22-0-8)", $: 727500 }, { "#": "20 DEWITT RD (21-0-421)", $: 693800 }, { "#": "21 DEWITT RD (21-0-404)", $: 746100 }, { "#": "22 DEWITT RD (21-0-423)", $: 710200 }, { "#": "23 DEWITT RD (21-0-403)", $: 652200 }, { "#": "25 DEWITT RD (21-0-402)", $: 627200 }, { "#": "26 DEWITT RD (21-0-424)", $: 765700 }, { "#": "27 DEWITT RD (21-0-401)", $: 669300 }, { "#": "3 DEWITT RD (21-0-413)", $: 850400 }, { "#": "5 DEWITT RD (21-0-412)", $: 846900 }, { "#": "6 DEWITT RD (21-0-414)", $: 892200 }, { "#": "7 DEWITT RD (21-0-411)", $: 807800 }, { "#": "8 DEWITT RD (21-0-416)", $: 641500 }, { "#": "9 DEWITT RD (21-0-410)", $: 750800 }, { "#": "2 DIANNE RD (6-0-69)", $: 802600 }, { "#": "3 DIANNE RD (6-0-75)", $: 741700 }, { "#": "4 DIANNE RD (6-0-70)", $: 766500 }, { "#": "5 DIANNE RD (6-0-74)", $: 725600 }, { "#": "6 DIANNE RD (6-0-71)", $: 830300 }, { "#": "7 DIANNE RD (6-0-73)", $: 686600 }, { "#": "8 DIANNE RD (6-0-72)", $: 738200 }, { "#": "1 DINANNO RD (2-0-227)", $: 782700 }, { "#": "11 DINANNO RD (2-0-221)", $: 757100 }, { "#": "12 DINANNO RD (2-0-216)", $: 968800 }, { "#": "3 DAVID CIR (19-0-177R)", $: 956600 }, { "#": "14 DINANNO RD (2-0-217)", $: 859400 }, { "#": "15 DINANNO RD (2-0-220)", $: 813900 }, { "#": "16 DINANNO RD (2-0-218)", $: 775700 }, { "#": "17 DINANNO RD (2-0-219)", $: 881800 }, { "#": "3 DINANNO RD (2-0-226)", $: 836600 }, { "#": "4 DINANNO RD (2-0-229)", $: 825100 }, { "#": "5 DINANNO RD (2-0-225)", $: 839200 }, { "#": "6 DINANNO RD (2-0-230)", $: 760200 }, { "#": "7 DINANNO RD (2-0-224)", $: 943200 }, { "#": "9 DINANNO RD (2-0-222)", $: 913200 }, { "#": "1 DOHERTYS LN (13-0-236)", $: 703900 }, { "#": "3 DOHERTYS LN (13-0-232)", $: 720400 }, { "#": "4 DOHERTYS LN (13-0-226A)", $: 1083200 }, { "#": "5 DOHERTYS LN (13-0-230)", $: 1050400 }, { "#": "6 DOHERTYS LN (13-0-226B)", $: 1081100 }, { "#": "7 DOHERTYS LN (13-0-226E)", $: 1204600 }, { "#": "8 DOHERTYS LN (13-0-226C)", $: 1041e3 }, { "#": "9 DOHERTYS LN (13-0-226D)", $: 1191800 }, { "#": "1 DRUMMOND RD (15-0-65A)", $: 764e3 }, { "#": "10 DRUMMOND RD (20-0-58)", $: 805100 }, { "#": "11 DRUMMOND RD (20-0-38)", $: 991900 }, { "#": "12 DRUMMOND RD (20-0-59)", $: 864700 }, { "#": "13 DRUMMOND RD (20-0-37)", $: 1024500 }, { "#": "14 DRUMMOND RD (20-0-60)", $: 923e3 }, { "#": "16 DRUMMOND RD (20-0-34)", $: 736700 }, { "#": "17 DRUMMOND RD (20-0-36)", $: 839300 }, { "#": "19 DRUMMOND RD (20-0-35)", $: 695700 }, { "#": "2 DRUMMOND RD (20-0-54)", $: 746700 }, { "#": "3 DRUMMOND RD (20-0-42)", $: 666600 }, { "#": "4 DRUMMOND RD (20-0-55)", $: 658800 }, { "#": "5 DRUMMOND RD (20-0-41)", $: 792500 }, { "#": "6 DRUMMOND RD (20-0-56)", $: 748100 }, { "#": "7 DRUMMOND RD (20-0-40)", $: 1112300 }, { "#": "8 DRUMMOND RD (20-0-57)", $: 800700 }, { "#": "9 DRUMMOND RD (20-0-39)", $: 1070400 }, { "#": "10 DRURY LN (21-0-217)", $: 639300 }, { "#": "11 DRURY LN (21-0-196)", $: 610200 }, { "#": "12 DRURY LN (21-0-216)", $: 773e3 }, { "#": "14 DRURY LN (21-0-215)", $: 718800 }, { "#": "15 DRURY LN (21-0-195)", $: 631e3 }, { "#": "16 DRURY LN (25-0-2)", $: 648200 }, { "#": "17 DRURY LN (21-0-194)", $: 595600 }, { "#": "18 DRURY LN (25-0-3)", $: 629900 }, { "#": "19 DRURY LN (21-0-193)", $: 708300 }, { "#": "2 DRURY LN (21-0-223)", $: 942e3 }, { "#": "20 DRURY LN (25-0-4)", $: 747700 }, { "#": "22 DRURY LN (25-0-5)", $: 639100 }, { "#": "24 DRURY LN (25-0-6)", $: 732700 }, { "#": "26 DRURY LN (25-0-7)", $: 596700 }, { "#": "28 DRURY LN (21-0-191)", $: 687600 }, { "#": "14 DINANNO RD (2-0-217)", $: 859400 }, { "#": "3 DRURY LN (21-0-214)", $: 1156600 }, { "#": "30 DRURY LN (21-0-192)", $: 910500 }, { "#": "4 DRURY LN (21-0-220)", $: 742700 }, { "#": "5 DRURY LN (21-0-204)", $: 678700 }, { "#": "6 DRURY LN (21-0-219)", $: 641900 }, { "#": "8 DRURY LN (21-0-218)", $: 581700 }, { "#": "14 DUNCKLEE AVE (7-0-140)", $: 718900 }, { "#": "15 DUNCKLEE AVE (7-0-109A)", $: 802300 }, { "#": "17 DUNCKLEE AVE (7-0-108)", $: 636e3 }, { "#": "20 DUNCKLEE AVE (7-0-141)", $: 675200 }, { "#": "27 DUNCKLEE AVE (7-0-106)", $: 853500 }, { "#": "31 DUNCKLEE AVE (7-0-105)", $: 886e3 }, { "#": "34 DUNCKLEE AVE (7-0-143)", $: 686400 }, { "#": "36 DUNCKLEE AVE (7-0-144)", $: 982400 }, { "#": "37 DUNCKLEE AVE (7-0-104)", $: 932800 }, { "#": "38 DUNCKLEE AVE (7-0-145)", $: 709700 }, { "#": "43 DUNCKLEE AVE (7-0-103)", $: 619100 }, { "#": "51 DUNCKLEE AVE (7-0-101)", $: 742800 }, { "#": "53 DUNCKLEE AVE (7-0-101A)", $: 704700 }, { "#": "68 DUNCKLEE AVE (7-0-95)", $: 638700 }, { "#": "70 DUNCKLEE AVE (7-0-98)", $: 643500 }, { "#": "1 EAST ST (1-0-155)", $: 1017900 }, { "#": "10 EAST ST (1-0-242A)", $: 757100 }, { "#": "11 EAST ST (1-0-152)", $: 933900 }, { "#": "13 EAST ST (1-0-151)", $: 616e3 }, { "#": "14 EAST ST (1-0-260)", $: 947100 }, { "#": "15 EAST ST (1-0-150)", $: 758100 }, { "#": "17 EAST ST (1-0-148)", $: 588800 }, { "#": "18 EAST ST (1-0-131)", $: 691700 }, { "#": "2 EAST ST (1-0-242)", $: 702700 }, { "#": "22 EAST ST (1-0-133)", $: 727600 }, { "#": "23 EAST ST (1-0-136)", $: 730900 }, { "#": "25 EAST ST (1-0-135)", $: 630300 }, { "#": "27 EAST ST (1-0-134)", $: 841700 }, { "#": "5 EAST ST (1-0-154A)", $: 726200 }, { "#": "7 EAST ST (1-0-154B)", $: 667900 }, { "#": "9 EAST ST (1-0-153)", $: 645100 }, { "#": "10 EASTERN AVE (1-0-247)", $: 900300 }, { "#": "11 EASTERN AVE (1-0-255)", $: 853300 }, { "#": "14 EASTERN AVE (1-0-253)", $: 862700 }, { "#": "15 EASTERN AVE (1-0-254)", $: 792100 }, { "#": "16 EASTERN AVE (1-0-268)", $: 940500 }, { "#": "17 EASTERN AVE (1-0-267)", $: 897700 }, { "#": "2 EASTERN AVE (1-0-243)", $: 831100 }, { "#": "3 EASTERN AVE (1-0-259)", $: 798400 }, { "#": "4 EASTERN AVE (1-0-244)", $: 781e3 }, { "#": "5 EASTERN AVE (1-0-258)", $: 759100 }, { "#": "6 EASTERN AVE (1-0-245)", $: 892400 }, { "#": "7 EASTERN AVE (1-0-257)", $: 896200 }, { "#": "8 EASTERN AVE (1-0-246)", $: 861e3 }, { "#": "3 DRURY LN (21-0-214)", $: 1156600 }, { "#": "9 EASTERN AVE (1-0-256)", $: 834700 }, { "#": "1 EASTVIEW TRL (8-0-39)", $: 566600 }, { "#": "3 EASTVIEW TRL (8-0-38)", $: 754600 }, { "#": "1 EDWARDS RD (21-0-110)", $: 825100 }, { "#": "2 EDWARDS RD (21-0-108)", $: 786e3 }, { "#": "4 EDWARDS RD (21-0-109)", $: 631600 }, { "#": "10 ELAINE RD (21-0-61)", $: 764700 }, { "#": "11 ELAINE RD (20-0-23)", $: 667500 }, { "#": "12 ELAINE RD (21-0-62)", $: 668400 }, { "#": "13 ELAINE RD (20-0-22)", $: 779400 }, { "#": "14 ELAINE RD (21-0-63)", $: 830700 }, { "#": "16 ELAINE RD (20-0-24)", $: 634900 }, { "#": "17 ELAINE RD (20-0-21)", $: 592300 }, { "#": "18 ELAINE RD (20-0-25)", $: 754500 }, { "#": "2 ELAINE RD (21-0-57)", $: 726e3 }, { "#": "3 ELAINE RD (21-0-67)", $: 837500 }, { "#": "4 ELAINE RD (21-0-58)", $: 706800 }, { "#": "5 ELAINE RD (21-0-66)", $: 697900 }, { "#": "6 ELAINE RD (21-0-59)", $: 725400 }, { "#": "7 ELAINE RD (21-0-65)", $: 604e3 }, { "#": "8 ELAINE RD (21-0-60)", $: 719400 }, { "#": "9 ELAINE RD (21-0-64)", $: 727800 }, { "#": "1 ELIZABETH RD (22-0-5)", $: 682900 }, { "#": "10 ELIZABETH RD (21-0-441)", $: 875400 }, { "#": "11 ELIZABETH RD (21-0-431)", $: 565e3 }, { "#": "12 ELIZABETH RD (21-0-442)", $: 669100 }, { "#": "14 ELIZABETH RD (21-0-443)", $: 625300 }, { "#": "15 ELIZABETH RD (21-0-430)", $: 657800 }, { "#": "16 ELIZABETH RD (21-0-444)", $: 635900 }, { "#": "17 ELIZABETH RD (21-0-429)", $: 634400 }, { "#": "18 ELIZABETH RD (21-0-445)", $: 598100 }, { "#": "19 ELIZABETH RD (21-0-428)", $: 784e3 }, { "#": "2 ELIZABETH RD (22-0-4)", $: 750200 }, { "#": "21 ELIZABETH RD (21-0-427)", $: 821600 }, { "#": "3 ELIZABETH RD (21-0-435)", $: 731200 }, { "#": "5 ELIZABETH RD (21-0-434)", $: 819200 }, { "#": "7 ELIZABETH RD (21-0-433)", $: 667e3 }, { "#": "8 ELIZABETH RD (21-0-438)", $: 748600 }, { "#": "9 ELIZABETH RD (21-0-432)", $: 580500 }, { "#": "10 ELLEN RD (2-0-194)", $: 741600 }, { "#": "11 ELLEN RD (2-0-201)", $: 693200 }, { "#": "12 ELLEN RD (2-0-195)", $: 614500 }, { "#": "13 ELLEN RD (2-0-200)", $: 777600 }, { "#": "14 ELLEN RD (2-0-196)", $: 798300 }, { "#": "15 ELLEN RD (2-0-199)", $: 756200 }, { "#": "16 ELLEN RD (2-0-197)", $: 799100 }, { "#": "18 ELLEN RD (2-0-354)", $: 1005600 }, { "#": "19 ELLEN RD (2-0-198)", $: 772500 }, { "#": "20 ELLEN RD (2-0-353)", $: 1056500 }, { "#": "21 ELLEN RD (2-0-334)", $: 906700 }, { "#": "9 EASTERN AVE (1-0-256)", $: 834700 }, { "#": "22 ELLEN RD (2-0-352)", $: 890100 }, { "#": "23 ELLEN RD (2-0-335)", $: 912400 }, { "#": "24 ELLEN RD (2-0-351)", $: 1183600 }, { "#": "25 ELLEN RD (2-0-336)", $: 997600 }, { "#": "26 ELLEN RD (2-0-350)", $: 957200 }, { "#": "27 ELLEN RD (2-0-337)", $: 825400 }, { "#": "28 ELLEN RD (2-0-349)", $: 945e3 }, { "#": "29 ELLEN RD (2-0-338)", $: 815700 }, { "#": "30 ELLEN RD (2-0-348)", $: 1027500 }, { "#": "31 ELLEN RD (2-0-339)", $: 980800 }, { "#": "32 ELLEN RD (2-0-347)", $: 1115300 }, { "#": "33 ELLEN RD (2-0-340)", $: 975e3 }, { "#": "34 ELLEN RD (2-0-346)", $: 934500 }, { "#": "35 ELLEN RD (2-0-341)", $: 1020400 }, { "#": "37 ELLEN RD (2-0-342)", $: 927700 }, { "#": "38 ELLEN RD (2-0-344)", $: 960100 }, { "#": "39 ELLEN RD (2-0-343)", $: 912600 }, { "#": "4 ELLEN RD (3-0-7)", $: 746900 }, { "#": "40 ELLEN RD (2-0-223A)", $: 976100 }, { "#": "41 ELLEN RD (2-0-383)", $: 1029300 }, { "#": "42 ELLEN RD (2-0-371)", $: 1099600 }, { "#": "43 ELLEN RD (2-0-382)", $: 1001500 }, { "#": "5 ELLEN RD (3-0-11)", $: 761400 }, { "#": "6 ELLEN RD (3-0-8)", $: 724800 }, { "#": "7 ELLEN RD (3-0-10)", $: 814e3 }, { "#": "8 ELLEN RD (2-0-193)", $: 872300 }, { "#": "9 ELLEN RD (3-0-9)", $: 806100 }, { "#": "1 ELM ST (17-0-127)", $: 642200 }, { "#": "100 ELM ST (12-0-120)", $: 720800 }, { "#": "102 ELM ST (7-0-132)", $: 651500 }, { "#": "104 ELM ST (7-0-133)", $: 861100 }, { "#": "110 ELM ST (7-0-135)", $: 568700 }, { "#": "119 ELM ST (7-0-154)", $: 631400 }, { "#": "129 ELM ST (7-0-157)", $: 737e3 }, { "#": "133 ELM ST (7-0-155)", $: 932900 }, { "#": "134 ELM ST (6-0-80)", $: 659100 }, { "#": "135 ELM ST (6-0-160A)", $: 825900 }, { "#": "137 ELM ST (6-0-160)", $: 487100 }, { "#": "138 ELM ST (6-0-81)", $: 583e3 }, { "#": "139 ELM ST (6-0-161)", $: 572500 }, { "#": "14 ELM ST (12-0-14)", $: 584900 }, { "#": "140 ELM ST (6-0-82)", $: 738500 }, { "#": "142 ELM ST (6-0-91)", $: 524100 }, { "#": "143 ELM ST (6-0-156)", $: 669400 }, { "#": "144 ELM ST (6-0-92)", $: 632200 }, { "#": "145 ELM ST (6-0-148)", $: 508500 }, { "#": "146 ELM ST (6-0-93)", $: 1076400 }, { "#": "147 ELM ST (6-0-147)", $: 616400 }, { "#": "148 ELM ST (6-0-94A)", $: 815e3 }, { "#": "149 ELM ST (6-0-146)", $: 494700 }, { "#": "22 ELLEN RD (2-0-352)", $: 890100 }, { "#": "151 ELM ST (6-0-145)", $: 656400 }, { "#": "153 ELM ST (6-0-102)", $: 556500 }, { "#": "155 ELM ST (6-0-101)", $: 582800 }, { "#": "157 ELM ST (6-0-100)", $: 692100 }, { "#": "161 ELM ST (6-0-98)", $: 562300 }, { "#": "163 ELM ST (6-0-97)", $: 645400 }, { "#": "165 ELM ST (6-0-95)", $: 660700 }, { "#": "2 ELM ST (17-0-121)", $: 500300 }, { "#": "3 ELM ST (17-0-126)", $: 682700 }, { "#": "34 ELM ST (12-0-53)", $: 534700 }, { "#": "36 ELM ST (12-0-54)", $: 511100 }, { "#": "37 ELM ST (12-0-301)", $: 445700 }, { "#": "38 ELM ST (12-0-55)", $: 536200 }, { "#": "40 ELM ST (12-0-56)", $: 547500 }, { "#": "5 ELM ST (17-0-125)", $: 744800 }, { "#": "50 ELM ST (12-0-82)", $: 598400 }, { "#": "51 ELM ST (12-0-296)", $: 650100 }, { "#": "53 ELM ST (12-0-294)", $: 710300 }, { "#": "55 ELM ST (12-0-293)", $: 664600 }, { "#": "58 ELM ST (12-0-83)", $: 699200 }, { "#": "63 ELM ST (12-0-291)", $: 823600 }, { "#": "65 ELM ST (12-0-290)", $: 662600 }, { "#": "67 ELM ST (12-0-289)", $: 583600 }, { "#": "7 ELM ST (17-0-124)", $: 601700 }, { "#": "72 ELM ST (12-0-108)", $: 650800 }, { "#": "73 ELM ST (12-0-287)", $: 784e3 }, { "#": "75 ELM ST (12-0-286)", $: 697100 }, { "#": "76 ELM ST (12-0-110)", $: 634400 }, { "#": "77 ELM ST (12-0-285)", $: 575800 }, { "#": "78 ELM ST (12-0-111)", $: 696200 }, { "#": "80 ELM ST (12-0-112)", $: 712500 }, { "#": "81 ELM ST (12-0-284)", $: 704900 }, { "#": "82 ELM ST (12-0-113)", $: 742700 }, { "#": "83 ELM ST (12-0-283)", $: 714400 }, { "#": "84 ELM ST (12-0-114)", $: 1123400 }, { "#": "92 ELM ST (12-0-116)", $: 631700 }, { "#": "93 ELM ST (12-0-126)", $: 890800 }, { "#": "94 ELM ST (12-0-117)", $: 670700 }, { "#": "95 ELM ST (12-0-125)", $: 570800 }, { "#": "97 ELM ST (12-0-124)", $: 663300 }, { "#": "98 ELM ST (12-0-119)", $: 656400 }, { "#": "1 ELMHURST RD (12-0-273)", $: 650500 }, { "#": "10 ELMHURST RD (12-0-278)", $: 618900 }, { "#": "11 ELMHURST RD (12-0-288A)", $: 856700 }, { "#": "15 ELMHURST RD (12-0-270)", $: 819200 }, { "#": "17 ELMHURST RD (12-0-268)", $: 528700 }, { "#": "19 ELMHURST RD (12-0-267)", $: 840300 }, { "#": "2 ELMHURST RD (12-0-274)", $: 586300 }, { "#": "21 ELMHURST RD (12-0-266)", $: 622300 }, { "#": "3 ELMHURST RD (12-0-272)", $: 605e3 }, { "#": "151 ELM ST (6-0-145)", $: 656400 }, { "#": "4 ELMHURST RD (12-0-275)", $: 69e4 }, { "#": "5 ELMHURST RD (12-0-271)", $: 753300 }, { "#": "6 ELMHURST RD (12-0-276)", $: 700400 }, { "#": "7 ELMHURST RD (12-0-288C)", $: 785800 }, { "#": "8 ELMHURST RD (12-0-277)", $: 737600 }, { "#": "9 ELMHURST RD (12-0-288B)", $: 783400 }, { "#": "1 ELWOOD AVE (1-0-241B)", $: 879500 }, { "#": "2 ELWOOD AVE (1-0-216)", $: 709800 }, { "#": "3 ELWOOD AVE (1-0-241)", $: 689400 }, { "#": "4 ELWOOD AVE (1-0-241A)", $: 598800 }, { "#": "10 EMERALD CT (8-0-152A)", $: 854900 }, { "#": "14 EMERALD CT (8-0-155)", $: 503e3 }, { "#": "15 EMERALD CT (8-0-161)", $: 647200 }, { "#": "16 EMERALD CT (8-0-156)", $: 624900 }, { "#": "18 EMERALD CT (8-0-157)", $: 731200 }, { "#": "21 EMERALD CT (8-0-158)", $: 535e3 }, { "#": "3 EMERALD CT (8-0-167)", $: 482100 }, { "#": "6 EMERALD CT (8-0-154)", $: 638500 }, { "#": "7 EMERALD CT (8-0-165)", $: 733100 }, { "#": "9 EMERALD CT (8-0-164)", $: 934300 }, { "#": "14 EMERSON ST (13-0-7)", $: 466300 }, { "#": "14 EMERSON ST (13-0-7A)", $: 38e4 }, { "#": "14 EMERSON ST (13-0-7B)", $: 320500 }, { "#": "19 EMERSON ST (13-0-517)", $: 596700 }, { "#": "7 EMERSON ST (13-0-524)", $: 520100 }, { "#": "26 EMERY CT (14-0-33)", $: 883700 }, { "#": "5 EMERY CT (13-0-218)", $: 695600 }, { "#": "9 EMERY CT (13-0-219)", $: 495800 }, { "#": "19 ENDICOTT RD (11-0-333)", $: 765400 }, { "#": "22 ENDICOTT RD (11-0-334)", $: 763900 }, { "#": "24 ENDICOTT RD (11-0-335)", $: 625400 }, { "#": "25 ENDICOTT RD (11-0-332)", $: 739200 }, { "#": "28 ENDICOTT RD (11-0-336)", $: 691700 }, { "#": "29 ENDICOTT RD (11-0-331)", $: 690800 }, { "#": "33 ENDICOTT RD (11-0-330)", $: 663900 }, { "#": "38 ENDICOTT RD (11-0-337)", $: 659700 }, { "#": "39 ENDICOTT RD (11-0-329)", $: 687200 }, { "#": "42 ENDICOTT RD (11-0-338)", $: 697700 }, { "#": "44 ENDICOTT RD (11-0-339)", $: 576600 }, { "#": "45 ENDICOTT RD (11-0-328)", $: 925600 }, { "#": "47 ENDICOTT RD (11-0-327)", $: 695700 }, { "#": "50 ENDICOTT RD (11-0-340)", $: 713800 }, { "#": "54 ENDICOTT RD (11-0-341)", $: 596800 }, { "#": "62 ENDICOTT RD (11-0-342)", $: 690600 }, { "#": "1 ERICKSON ST (21-0-99)", $: 713100 }, { "#": "10 ERICKSON ST (21-0-94)", $: 751600 }, { "#": "11 ERICKSON ST (20-0-68)", $: 852e3 }, { "#": "12 ERICKSON ST (20-0-69)", $: 880900 }, { "#": "14 ERICKSON ST (20-0-70)", $: 687600 }, { "#": "15 ERICKSON ST (20-0-67)", $: 666600 }, { "#": "4 ELMHURST RD (12-0-275)", $: 69e4 }, { "#": "16 ERICKSON ST (20-0-71)", $: 756900 }, { "#": "17 ERICKSON ST (20-0-66)", $: 776400 }, { "#": "18 ERICKSON ST (20-0-72)", $: 742900 }, { "#": "19 ERICKSON ST (20-0-65)", $: 785300 }, { "#": "20 ERICKSON ST (20-0-29)", $: 796600 }, { "#": "21 ERICKSON ST (20-0-64)", $: 744500 }, { "#": "22 ERICKSON ST (20-0-30)", $: 811600 }, { "#": "23 ERICKSON ST (20-0-63)", $: 768900 }, { "#": "24 ERICKSON ST (20-0-31)", $: 72e4 }, { "#": "25 ERICKSON ST (20-0-62)", $: 679600 }, { "#": "3 ERICKSON ST (21-0-98)", $: 796e3 }, { "#": "5 ERICKSON ST (21-0-97)", $: 756300 }, { "#": "7 ERICKSON ST (21-0-96)", $: 744200 }, { "#": "9 ERICKSON ST (21-0-95)", $: 757800 }, { "#": "10 ESSEX ST (21-0-212)", $: 784400 }, { "#": "12 ESSEX ST (21-0-213)", $: 785800 }, { "#": "3 ESSEX ST (21-0-208)", $: 688600 }, { "#": "4 ESSEX ST (21-0-209)", $: 682100 }, { "#": "5 ESSEX ST (21-0-207)", $: 701200 }, { "#": "6 ESSEX ST (21-0-210)", $: 680100 }, { "#": "7 ESSEX ST (21-0-206)", $: 799200 }, { "#": "8 ESSEX ST (21-0-211)", $: 610100 }, { "#": "9 ESSEX ST (21-0-205)", $: 695500 }, { "#": "1 EUSTIS ST (7-0-382)", $: 542300 }, { "#": "11 EUSTIS ST (7-0-362)", $: 550800 }, { "#": "2 EUSTIS ST (7-0-381A)", $: 772300 }, { "#": "3 EUSTIS ST (7-0-366)", $: 609600 }, { "#": "4 EUSTIS ST (7-0-367)", $: 843800 }, { "#": "5 EUSTIS ST (7-0-364)", $: 922900 }, { "#": "6 EUSTIS ST (7-0-367A)", $: 821200 }, { "#": "9 EUSTIS ST (7-0-363)", $: 766500 }, { "#": "10 EVANS RD (21-0-184)", $: 685300 }, { "#": "11 EVANS RD (21-0-176)", $: 661500 }, { "#": "12 EVANS RD (21-0-185)", $: 786e3 }, { "#": "14 EVANS RD (21-0-186)", $: 743200 }, { "#": "15 EVANS RD (21-0-175)", $: 727700 }, { "#": "16 EVANS RD (21-0-187)", $: 548600 }, { "#": "17 EVANS RD (21-0-174)", $: 879100 }, { "#": "18 EVANS RD (21-0-188)", $: 701700 }, { "#": "19 EVANS RD (21-0-173)", $: 675300 }, { "#": "20 EVANS RD (21-0-189)", $: 626600 }, { "#": "21 EVANS RD (21-0-172)", $: 832400 }, { "#": "23 EVANS RD (21-0-171)", $: 1161200 }, { "#": "25 EVANS RD (21-0-170)", $: 689500 }, { "#": "27 EVANS RD (21-0-169)", $: 685400 }, { "#": "3 EVANS RD (21-0-180)", $: 678500 }, { "#": "4 EVANS RD (21-0-181)", $: 763200 }, { "#": "5 EVANS RD (21-0-179)", $: 665300 }, { "#": "6 EVANS RD (21-0-182)", $: 657500 }, { "#": "7 EVANS RD (21-0-178)", $: 636900 }, { "#": "16 ERICKSON ST (20-0-71)", $: 756900 }, { "#": "8 EVANS RD (21-0-183)", $: 604900 }, { "#": "9 EVANS RD (21-0-177)", $: 695600 }, { "#": "10 EVERETT ST (18-0-643)", $: 706200 }, { "#": "12 EVERETT ST (18-0-644)", $: 793800 }, { "#": "17 EVERETT ST (18-0-11)", $: 775800 }, { "#": "18 EVERETT ST (18-0-7)", $: 760100 }, { "#": "19 EVERETT ST (18-0-10)", $: 664800 }, { "#": "20 EVERETT ST (18-0-8)", $: 741e3 }, { "#": "21 EVERETT ST (18-0-9)", $: 856400 }, { "#": "22 EVERETT ST (23-0-151)", $: 600300 }, { "#": "23 EVERETT ST (18-0-9A)", $: 787900 }, { "#": "25 EVERETT ST (23-0-150)", $: 697900 }, { "#": "26 EVERETT ST (23-0-146C)", $: 756900 }, { "#": "27 EVERETT ST (23-0-149)", $: 632100 }, { "#": "28 EVERETT ST (23-0-146B)", $: 743500 }, { "#": "29 EVERETT ST (23-0-148)", $: 838400 }, { "#": "30 EVERETT ST (23-0-146A)", $: 791900 }, { "#": "32 EVERETT ST (23-0-146)", $: 878e3 }, { "#": "33 EVERETT ST (23-0-147)", $: 622700 }, { "#": "6 EVERETT ST (18-0-642)", $: 788300 }, { "#": "7 EVERETT ST (18-0-639)", $: 690200 }, { "#": "9 EVERETT ST (18-0-634)", $: 691400 }, { "#": "1 EVERGREEN RD (15-0-8)", $: 725700 }, { "#": "10 EVERGREEN RD (15-0-15)", $: 659200 }, { "#": "11 EVERGREEN RD (15-0-55)", $: 715100 }, { "#": "12 EVERGREEN RD (15-0-16)", $: 788900 }, { "#": "14 EVERGREEN RD (15-0-47)", $: 813200 }, { "#": "15 EVERGREEN RD (15-0-54)", $: 758e3 }, { "#": "16 EVERGREEN RD (15-0-48)", $: 890200 }, { "#": "17 EVERGREEN RD (15-0-53)", $: 791400 }, { "#": "18 EVERGREEN RD (15-0-49)", $: 688400 }, { "#": "19 EVERGREEN RD (15-0-52)", $: 825600 }, { "#": "20 EVERGREEN RD (15-0-50)", $: 756300 }, { "#": "22 EVERGREEN RD (15-0-51)", $: 746200 }, { "#": "24 EVERGREEN RD (15-0-61)", $: 802400 }, { "#": "25 EVERGREEN RD (15-0-1)", $: 692500 }, { "#": "26 EVERGREEN RD (15-0-66A)", $: 677200 }, { "#": "27 EVERGREEN RD (20-0-51)", $: 804300 }, { "#": "28 EVERGREEN RD (20-0-43)", $: 752600 }, { "#": "29 EVERGREEN RD (20-0-50)", $: 695700 }, { "#": "3 EVERGREEN RD (15-0-7)", $: 861600 }, { "#": "30 EVERGREEN RD (20-0-44)", $: 769500 }, { "#": "32 EVERGREEN RD (20-0-45)", $: 935800 }, { "#": "34 EVERGREEN RD (20-0-46)", $: 849200 }, { "#": "36 EVERGREEN RD (20-0-47)", $: 945100 }, { "#": "4 EVERGREEN RD (15-0-12)", $: 764500 }, { "#": "6 EVERGREEN RD (15-0-13)", $: 677600 }, { "#": "8 EVERGREEN RD (15-0-14)", $: 651800 }, { "#": "9 EVERGREEN RD (15-0-56)", $: 740200 }, { "#": "10 FAIRLANE RD (6-0-122)", $: 857900 }, { "#": "8 EVANS RD (21-0-183)", $: 604900 }, { "#": "12 FAIRLANE RD (6-0-123)", $: 764200 }, { "#": "14 FAIRLANE RD (6-0-124)", $: 729500 }, { "#": "15 FAIRLANE RD (6-0-129)", $: 819300 }, { "#": "17 FAIRLANE RD (6-0-128)", $: 808e3 }, { "#": "22 FAIRLANE RD (7-0-212)", $: 701200 }, { "#": "9 FAIRLANE RD (6-0-119)", $: 1064100 }, { "#": "11 FAIRVIEW RD (14-0-206)", $: 1138900 }, { "#": "12 FAIRVIEW RD (14-0-210)", $: 874600 }, { "#": "14 FAIRVIEW RD (14-0-212)", $: 985300 }, { "#": "15 FAIRVIEW RD (14-0-205)", $: 680700 }, { "#": "17 FAIRVIEW RD (14-0-203)", $: 836e3 }, { "#": "18 FAIRVIEW RD (14-0-213)", $: 694700 }, { "#": "20 FAIRVIEW RD (14-0-214)", $: 537600 }, { "#": "23 FAIRVIEW RD (14-0-194)", $: 660700 }, { "#": "24 FAIRVIEW RD (14-0-216)", $: 726200 }, { "#": "31 FAIRVIEW RD (14-0-174)", $: 739200 }, { "#": "32 FAIRVIEW RD (14-0-155)", $: 547500 }, { "#": "34 FAIRVIEW RD (14-0-156)", $: 550700 }, { "#": "35 FAIRVIEW RD (14-0-172)", $: 63e4 }, { "#": "36 FAIRVIEW RD (14-0-157)", $: 622300 }, { "#": "37 FAIRVIEW RD (14-0-171)", $: 652700 }, { "#": "38 FAIRVIEW RD (14-0-158)", $: 647100 }, { "#": "40 FAIRVIEW RD (14-0-159)", $: 613900 }, { "#": "41 FAIRVIEW RD (14-0-170)", $: 944600 }, { "#": "42 FAIRVIEW RD (14-0-160)", $: 649600 }, { "#": "43 FAIRVIEW RD (14-0-168)", $: 912400 }, { "#": "44 FAIRVIEW RD (14-0-161)", $: 555e3 }, { "#": "45 FAIRVIEW RD (14-0-166)", $: 533e3 }, { "#": "46 FAIRVIEW RD (14-0-162)", $: 595300 }, { "#": "10 FATIMA RD (7-0-316)", $: 810300 }, { "#": "11 FATIMA RD (7-0-319)", $: 774300 }, { "#": "12 FATIMA RD (7-0-317)", $: 831900 }, { "#": "15 FATIMA RD (7-0-318)", $: 763500 }, { "#": "2 FATIMA RD (7-0-312)", $: 711600 }, { "#": "3 FATIMA RD (7-0-324)", $: 728e3 }, { "#": "4 FATIMA RD (7-0-313)", $: 768900 }, { "#": "5 FATIMA RD (7-0-323)", $: 730100 }, { "#": "6 FATIMA RD (7-0-314)", $: 813600 }, { "#": "7 FATIMA RD (7-0-322)", $: 771900 }, { "#": "8 FATIMA RD (7-0-315)", $: 81e4 }, { "#": "9 FATIMA RD (7-0-321)", $: 786800 }, { "#": "6 FELICIA RD (4-0-98)", $: 597100 }, { "#": "11 FELLS RD (14-0-16)", $: 526700 }, { "#": "14 FELLS RD (14-0-10)", $: 626e3 }, { "#": "17 FELLS RD (14-0-15)", $: 868100 }, { "#": "18 FELLS RD (14-0-11)", $: 637500 }, { "#": "7 FELLS RD (14-0-13)", $: 763700 }, { "#": "8 FELLS RD (14-0-9)", $: 545700 }, { "#": "18 FELLSMERE AVE (2-0-46A)", $: 630300 }, { "#": "25 FELLSMERE AVE (2-0-8)", $: 693100 }, { "#": "12 FAIRLANE RD (6-0-123)", $: 764200 }, { "#": "26 FELLSMERE AVE (2-0-28A)", $: 781700 }, { "#": "27 FELLSMERE AVE (2-0-7)", $: 670100 }, { "#": "28 FELLSMERE AVE (2-0-29)", $: 744200 }, { "#": "5 FELLSMERE AVE (2-0-39)", $: 860500 }, { "#": "100 FELLSVIEW RD (4-0-63)", $: 738500 }, { "#": "102 FELLSVIEW RD (4-0-64)", $: 783e3 }, { "#": "105 FELLSVIEW RD (4-0-47)", $: 690800 }, { "#": "109 FELLSVIEW RD (4-0-46)", $: 665400 }, { "#": "72 FELLSVIEW RD (4-0-55)", $: 707400 }, { "#": "85 FELLSVIEW RD (4-0-51)", $: 673700 }, { "#": "89 FELLSVIEW RD (4-0-50)", $: 889900 }, { "#": "95 FELLSVIEW RD (4-0-49)", $: 896200 }, { "#": "99 FELLSVIEW RD (4-0-48)", $: 813700 }, { "#": "461 FELLSWAY EAST (4-0-97)", $: 768500 }, { "#": "492 FELLSWAY EAST (4-0-113)", $: 707300 }, { "#": "500 FELLSWAY EAST (4-0-124)", $: 450400 }, { "#": "506 FELLSWAY EAST (4-0-100)", $: 826900 }, { "#": "510 FELLSWAY EAST (4-0-101)", $: 643400 }, { "#": "512 FELLSWAY EAST (4-0-103)", $: 911800 }, { "#": "1 FELSPA RD (1-0-190)", $: 741600 }, { "#": "10 FELSPA RD (1-0-181)", $: 556200 }, { "#": "11 FELSPA RD (1-0-184)", $: 567700 }, { "#": "12 FELSPA RD (1-0-182)", $: 576800 }, { "#": "2 FELSPA RD (1-0-177)", $: 814700 }, { "#": "3 FELSPA RD (1-0-189)", $: 567400 }, { "#": "7 FELSPA RD (1-0-186)", $: 753800 }, { "#": "8 FELSPA RD (1-0-179)", $: 761700 }, { "#": "9 FELSPA RD (1-0-185)", $: 493900 }, { "#": "1 FERDINAND ST (2-0-267)", $: 773900 }, { "#": "10 FERDINAND ST (2-0-263)", $: 909500 }, { "#": "16 FERDINAND ST (3-0-87)", $: 687100 }, { "#": "2 FERDINAND ST (2-0-258)", $: 577900 }, { "#": "4 FERDINAND ST (2-0-259)", $: 751500 }, { "#": "6 FERDINAND ST (2-0-265)", $: 748500 }, { "#": "10 FIELDSTONE DR (9-0-122)", $: 827100 }, { "#": "11 FIELDSTONE DR (9-0-100)", $: 850400 }, { "#": "12 FIELDSTONE DR (9-0-123)", $: 876100 }, { "#": "14 FIELDSTONE DR (9-0-124)", $: 826500 }, { "#": "16 FIELDSTONE DR (9-0-125)", $: 767900 }, { "#": "17 FIELDSTONE DR (9-0-81)", $: 785500 }, { "#": "18 FIELDSTONE DR (9-0-126)", $: 781100 }, { "#": "19 FIELDSTONE DR (9-0-80)", $: 747500 }, { "#": "2 FIELDSTONE DR (9-0-118)", $: 889400 }, { "#": "20 FIELDSTONE DR (9-0-127)", $: 768300 }, { "#": "21 FIELDSTONE DR (9-0-64)", $: 909800 }, { "#": "22 FIELDSTONE DR (9-0-128)", $: 878400 }, { "#": "23 FIELDSTONE DR (9-0-63)", $: 760400 }, { "#": "25 FIELDSTONE DR (9-0-62)", $: 848200 }, { "#": "26 FIELDSTONE DR (9-0-36)", $: 942200 }, { "#": "27 FIELDSTONE DR (9-0-61)", $: 865800 }, { "#": "26 FELLSMERE AVE (2-0-28A)", $: 781700 }, { "#": "28 FIELDSTONE DR (9-0-37)", $: 968600 }, { "#": "29 FIELDSTONE DR (9-0-60)", $: 816500 }, { "#": "3 FIELDSTONE DR (9-0-107)", $: 816200 }, { "#": "31 FIELDSTONE DR (9-0-59)", $: 831100 }, { "#": "32 FIELDSTONE DR (9-0-41)", $: 845800 }, { "#": "33 FIELDSTONE DR (9-0-58)", $: 899800 }, { "#": "34 FIELDSTONE DR (9-0-42)", $: 853100 }, { "#": "35 FIELDSTONE DR (9-0-57)", $: 823900 }, { "#": "36 FIELDSTONE DR (9-0-43)", $: 858400 }, { "#": "37 FIELDSTONE DR (9-0-56)", $: 819100 }, { "#": "38 FIELDSTONE DR (9-0-44)", $: 999900 }, { "#": "39 FIELDSTONE DR (9-0-55)", $: 873300 }, { "#": "4 FIELDSTONE DR (9-0-119)", $: 781700 }, { "#": "40 FIELDSTONE DR (9-0-45)", $: 864800 }, { "#": "41 FIELDSTONE DR (9-0-54)", $: 808200 }, { "#": "42 FIELDSTONE DR (9-0-46)", $: 846e3 }, { "#": "43 FIELDSTONE DR (9-0-53)", $: 928700 }, { "#": "45 FIELDSTONE DR (9-0-52)", $: 886600 }, { "#": "46 FIELDSTONE DR (9-0-49)", $: 938800 }, { "#": "47 FIELDSTONE DR (9-0-51)", $: 829300 }, { "#": "48 FIELDSTONE DR (9-0-50)", $: 837500 }, { "#": "50 FIELDSTONE DR (9-0-67)", $: 813700 }, { "#": "6 FIELDSTONE DR (9-0-120)", $: 921700 }, { "#": "8 FIELDSTONE DR (9-0-121)", $: 814700 }, { "#": "9 FIELDSTONE DR (9-0-101)", $: 842800 }, { "#": "5 FISKE AVE (19-0-104)", $: 723100 }, { "#": "121 FLINT AVE (17-0-281A)", $: 538200 }, { "#": "13 FLINT AVE (17-0-289)", $: 663500 }, { "#": "15 FLINT AVE (17-0-288)", $: 864900 }, { "#": "16 FLINT AVE (17-0-283)", $: 1193600 }, { "#": "17 FLINT AVE (17-0-287)", $: 593e3 }, { "#": "18 FLINT AVE (17-0-284)", $: 700400 }, { "#": "19 FLINT AVE (17-0-286)", $: 866300 }, { "#": "22 FLINT AVE (17-0-267)", $: 727300 }, { "#": "23 FLINT AVE (17-0-266)", $: 967200 }, { "#": "7 FLINT AVE (17-0-299)", $: 625600 }, { "#": "9 FLINT AVE (17-0-298)", $: 581500 }, { "#": "1 FLORENCE CIR (7-0-296)", $: 685200 }, { "#": "2 FLORENCE CIR (7-0-295)", $: 881700 }, { "#": "1 FOREST ST (16-0-361)", $: 686e3 }, { "#": "103 FOREST ST (21-0-229)", $: 847400 }, { "#": "105 FOREST ST (21-0-228)", $: 730500 }, { "#": "107 FOREST ST (21-0-227)", $: 596e3 }, { "#": "110 FOREST ST (21-0-425)", $: 611900 }, { "#": "111 FOREST ST (21-0-226)", $: 567600 }, { "#": "113 FOREST ST (21-0-225)", $: 663800 }, { "#": "114 FOREST ST (21-0-426)", $: 712600 }, { "#": "115 FOREST ST (21-0-224)", $: 725e3 }, { "#": "120 FOREST ST (21-0-446)", $: 681600 }, { "#": "122 FOREST ST (21-0-447)", $: 645900 }, { "#": "28 FIELDSTONE DR (9-0-37)", $: 968600 }, { "#": "123 FOREST ST (21-0-221)", $: 864900 }, { "#": "124 FOREST ST (21-0-448)", $: 879100 }, { "#": "125 FOREST ST (25-0-1B)", $: 765500 }, { "#": "126 FOREST ST (21-0-449)", $: 835500 }, { "#": "127 FOREST ST (25-0-1A)", $: 846600 }, { "#": "130 FOREST ST (21-0-450)", $: 637e3 }, { "#": "17 FOREST ST (16-0-358)", $: 932e3 }, { "#": "18 FOREST ST (16-0-348)", $: 739e3 }, { "#": "19 FOREST ST (21-0-100B)", $: 870700 }, { "#": "2 FOREST ST (16-0-163)", $: 619200 }, { "#": "20 FOREST ST (16-0-349)", $: 709800 }, { "#": "21 FOREST ST (21-0-100C)", $: 1048400 }, { "#": "27 FOREST ST (21-0-252)", $: 603800 }, { "#": "32 FOREST ST (21-0-276)", $: 780300 }, { "#": "34 FOREST ST (21-0-277)", $: 860300 }, { "#": "36 FOREST ST (21-0-278)", $: 654100 }, { "#": "38 FOREST ST (21-0-279)", $: 679400 }, { "#": "4 FOREST ST (16-0-164)", $: 646600 }, { "#": "40 FOREST ST (21-0-280)", $: 703800 }, { "#": "42 FOREST ST (21-0-281)", $: 666400 }, { "#": "43 FOREST ST (21-0-249)", $: 712e3 }, { "#": "45 FOREST ST (21-0-246)", $: 983400 }, { "#": "49 FOREST ST (21-0-244)", $: 777500 }, { "#": "5 FOREST ST (16-0-360)", $: 618300 }, { "#": "52 FOREST ST (21-0-283)", $: 740300 }, { "#": "53 FOREST ST (21-0-243)", $: 677500 }, { "#": "56 FOREST ST (21-0-284)", $: 639800 }, { "#": "57 FOREST ST (21-0-242)", $: 715900 }, { "#": "58 FOREST ST (21-0-285)", $: 618600 }, { "#": "59 FOREST ST (21-0-241)", $: 658700 }, { "#": "6 FOREST ST (16-0-165)", $: 582200 }, { "#": "61 FOREST ST (21-0-240)", $: 669800 }, { "#": "62 FOREST ST (21-0-286)", $: 643200 }, { "#": "63 FOREST ST (21-0-238)", $: 755400 }, { "#": "64 FOREST ST (21-0-287)", $: 758e3 }, { "#": "67 FOREST ST (21-0-236)", $: 1156300 }, { "#": "68 FOREST ST (21-0-288)", $: 684500 }, { "#": "69 FOREST ST (21-0-235)", $: 775800 }, { "#": "7 FOREST ST (16-0-359)", $: 69e4 }, { "#": "70 FOREST ST (21-0-352)", $: 607700 }, { "#": "71 FOREST ST (21-0-234)", $: 754200 }, { "#": "72 FOREST ST (21-0-353)", $: 686600 }, { "#": "76 FOREST ST (21-0-354)", $: 622e3 }, { "#": "81 FOREST ST (21-0-233)", $: 796400 }, { "#": "84 FOREST ST (21-0-355)", $: 1145100 }, { "#": "87 FOREST ST (21-0-232)", $: 644e3 }, { "#": "97 FOREST ST (21-0-231)", $: 742400 }, { "#": "99 FOREST ST (21-0-230)", $: 685500 }, { "#": "4 FRANKLIN PL (8-0-150)", $: 762300 }, { "#": "6 FRANKLIN PL (8-0-151)", $: 681e3 }, { "#": "123 FOREST ST (21-0-221)", $: 864900 }, { "#": "FRANKLIN ST (13-0-177)", $: 593200 }, { "#": "1011 FRANKLIN ST (13-0-348)", $: 543300 }, { "#": "102 FRANKLIN ST (13-0-66)", $: 501100 }, { "#": "103 FRANKLIN ST (13-0-347)", $: 548600 }, { "#": "104 FRANKLIN ST (13-0-67)", $: 505300 }, { "#": "105 FRANKLIN ST (13-0-346)", $: 803400 }, { "#": "109 FRANKLIN ST (13-0-178)", $: 584900 }, { "#": "111 FRANKLIN ST (13-0-176)", $: 520100 }, { "#": "112 FRANKLIN ST (13-0-90)", $: 663100 }, { "#": "1153 FRANKLIN ST (3-0-96)", $: 671100 }, { "#": "1155 FRANKLIN ST (3-0-95)", $: 703600 }, { "#": "1157 FRANKLIN ST (3-0-94)", $: 669800 }, { "#": "116 FRANKLIN ST (13-0-92)", $: 518400 }, { "#": "1162 FRANKLIN ST (3-0-131)", $: 734500 }, { "#": "1163 FRANKLIN ST (3-0-36)", $: 732700 }, { "#": "1164 FRANKLIN ST (3-0-132)", $: 888100 }, { "#": "1165 FRANKLIN ST (3-0-35)", $: 735500 }, { "#": "1166 FRANKLIN ST (3-0-133)", $: 816500 }, { "#": "1167 FRANKLIN ST (3-0-34)", $: 713e3 }, { "#": "1169 FRANKLIN ST (3-0-33)", $: 661500 }, { "#": "1171 FRANKLIN ST (3-0-32)", $: 740800 }, { "#": "1174 FRANKLIN ST (3-0-136)", $: 758600 }, { "#": "1176 FRANKLIN ST (3-0-137)", $: 692400 }, { "#": "119 FRANKLIN ST (13-0-150)", $: 643400 }, { "#": "123 FRANKLIN ST (8-0-179)", $: 473200 }, { "#": "124 FRANKLIN ST (8-0-69)", $: 510700 }, { "#": "126 FRANKLIN ST (8-0-70)", $: 635300 }, { "#": "1401 FRANKLIN ST (8-0-94A)", $: 764200 }, { "#": "141 FRANKLIN ST (8-0-168)", $: 541300 }, { "#": "146 FRANKLIN ST (8-0-95)", $: 580800 }, { "#": "147 FRANKLIN ST (8-0-153)", $: 504200 }, { "#": "148 FRANKLIN ST (8-0-96)", $: 569800 }, { "#": "150 FRANKLIN ST (8-0-97)", $: 831e3 }, { "#": "152 FRANKLIN ST (8-0-98)", $: 731300 }, { "#": "155 FRANKLIN ST (8-0-148)", $: 550600 }, { "#": "160 FRANKLIN ST (8-0-101)", $: 565500 }, { "#": "162 FRANKLIN ST (8-0-102)", $: 686200 }, { "#": "170 FRANKLIN ST (8-0-106A)", $: 963400 }, { "#": "171 FRANKLIN ST (8-0-130)", $: 607600 }, { "#": "173 FRANKLIN ST (8-0-129)", $: 713600 }, { "#": "181 FRANKLIN ST (8-0-124)", $: 776600 }, { "#": "185 FRANKLIN ST (8-0-110)", $: 681500 }, { "#": "189 FRANKLIN ST (3-0-368)", $: 778300 }, { "#": "193 FRANKLIN ST (3-0-352)", $: 902400 }, { "#": "196 FRANKLIN ST (3-0-12)", $: 811700 }, { "#": "201 FRANKLIN ST (3-0-343)", $: 659300 }, { "#": "202 FRANKLIN ST (3-0-15)", $: 688200 }, { "#": "204 FRANKLIN ST (3-0-31)", $: 793e3 }, { "#": "205 FRANKLIN ST (3-0-341)", $: 728300 }, { "#": "207 FRANKLIN ST (3-0-340)", $: 557800 }, { "#": "FRANKLIN ST (13-0-177)", $: 593200 }, { "#": "215 FRANKLIN ST (3-0-338)", $: 682200 }, { "#": "78 FRANKLIN ST (13-0-44)", $: 563500 }, { "#": "81 FRANKLIN ST (13-0-375)", $: 704400 }, { "#": "83 FRANKLIN ST (13-0-364)", $: 529400 }, { "#": "89 FRANKLIN ST (13-0-362)", $: 527900 }, { "#": "91 FRANKLIN ST (13-0-361)", $: 559600 }, { "#": "94 FRANKLIN ST (13-0-61)", $: 587200 }, { "#": "95 FRANKLIN ST (13-0-351)", $: 732600 }, { "#": "1 GARDEN RD (7-0-94)", $: 660900 }, { "#": "15 GARDEN RD (7-0-83)", $: 917400 }, { "#": "17 GARDEN RD (7-0-78)", $: 895200 }, { "#": "19 GARDEN RD (7-0-502)", $: 921100 }, { "#": "21 GARDEN RD (7-0-501)", $: 811e3 }, { "#": "22 GARDEN RD (7-0-186)", $: 1000600 }, { "#": "23 GARDEN RD (7-0-500)", $: 896900 }, { "#": "25 GARDEN RD (7-0-499)", $: 901400 }, { "#": "26 GARDEN RD (7-0-494)", $: 983700 }, { "#": "27 GARDEN RD (7-0-498)", $: 1064400 }, { "#": "29 GARDEN RD (7-0-497)", $: 1055e3 }, { "#": "3 GARDEN RD (7-0-93)", $: 584600 }, { "#": "31 GARDEN RD (7-0-496)", $: 1044500 }, { "#": "5 GARDEN RD (7-0-92)", $: 629300 }, { "#": "2 GARFIELD AVE (12-0-149A)", $: 577800 }, { "#": "3 GARFIELD AVE (12-0-153)", $: 627700 }, { "#": "4 GARFIELD AVE (12-0-150)", $: 712900 }, { "#": "5 GARFIELD AVE (12-0-152)", $: 637e3 }, { "#": "6 GARFIELD AVE (12-0-151)", $: 846200 }, { "#": "10 GAVIN CIR (8-0-42)", $: 885100 }, { "#": "11 GAVIN CIR (8-0-42C)", $: 1097500 }, { "#": "12 GAVIN CIR (8-0-42A)", $: 974900 }, { "#": "3 GAVIN CIR (8-0-198)", $: 967500 }, { "#": "4 GAVIN CIR (8-0-194)", $: 1139200 }, { "#": "5 GAVIN CIR (8-0-197)", $: 965400 }, { "#": "6 GAVIN CIR (8-0-195)", $: 1036400 }, { "#": "7 GAVIN CIR (8-0-196)", $: 987300 }, { "#": "9 GAVIN CIR (8-0-42B)", $: 1002500 }, { "#": "11 GEORGE ST (16-0-21)", $: 721e3 }, { "#": "12 GEORGE ST (16-0-26)", $: 642400 }, { "#": "14 GEORGE ST (16-0-27)", $: 753700 }, { "#": "16 GEORGE ST (16-0-28)", $: 664700 }, { "#": "18 GEORGE ST (16-0-29)", $: 624800 }, { "#": "6 GEORGE ST (16-0-24)", $: 784600 }, { "#": "7 GEORGE ST (16-0-23)", $: 777900 }, { "#": "8 GEORGE ST (16-0-25)", $: 713300 }, { "#": "9 GEORGE ST (16-0-22)", $: 716100 }, { "#": "2 GERALD RD (3-0-1)", $: 788800 }, { "#": "20 GERALD RD (2-0-180)", $: 882200 }, { "#": "3 GERALD RD (3-0-5)", $: 698300 }, { "#": "4 GERALD RD (3-0-2)", $: 749300 }, { "#": "5 GERALD RD (3-0-4)", $: 737500 }, { "#": "215 FRANKLIN ST (3-0-338)", $: 682200 }, { "#": "6 GERALD RD (2-0-178)", $: 812500 }, { "#": "7 GERALD RD (2-0-189)", $: 666200 }, { "#": "8 GERALD RD (2-0-179)", $: 636600 }, { "#": "9 GERALD RD (2-0-188)", $: 888300 }, { "#": "3 GERRY CT (13-0-53)", $: 550700 }, { "#": "4 GERRY CT (13-0-52)", $: 559300 }, { "#": "5 GERRY CT (13-0-51)", $: 537100 }, { "#": "6 GERRY CT (13-0-50)", $: 647600 }, { "#": "7 GERRY CT (13-0-49)", $: 619300 }, { "#": "GERRY ST (13-0-476)", $: 579100 }, { "#": "1 GERRY ST (13-0-475)", $: 652500 }, { "#": "12 GERRY ST (18-0-248)", $: 586e3 }, { "#": "14 GERRY ST (18-0-249)", $: 614100 }, { "#": "4 GERRY ST (13-0-470)", $: 575300 }, { "#": "6 GERRY ST (13-0-471)", $: 726100 }, { "#": "8 GERRY ST (13-0-472)", $: 582100 }, { "#": "1 GIGANTE DR (23-0-29)", $: 714300 }, { "#": "10 GIGANTE DR (23-0-22)", $: 766100 }, { "#": "11 GIGANTE DR (23-0-24)", $: 890700 }, { "#": "12 GIGANTE DR (23-0-23)", $: 737600 }, { "#": "2 GIGANTE DR (18-0-24A)", $: 685500 }, { "#": "3 GIGANTE DR (23-0-28)", $: 767800 }, { "#": "4 GIGANTE DR (23-0-19)", $: 890800 }, { "#": "5 GIGANTE DR (23-0-27)", $: 962100 }, { "#": "6 GIGANTE DR (23-0-20)", $: 944400 }, { "#": "8 GIGANTE DR (23-0-21)", $: 83e4 }, { "#": "9 GIGANTE DR (23-0-25)", $: 735400 }, { "#": "10 GILMORE ST (17-0-232)", $: 566900 }, { "#": "2 GILMORE ST (18-0-125B)", $: 573300 }, { "#": "3 GILMORE ST (17-0-228)", $: 531600 }, { "#": "5 GILMORE ST (17-0-227)", $: 576500 }, { "#": "7 GILMORE ST (17-0-226)", $: 716800 }, { "#": "10 GIRARD RD (21-0-393)", $: 747e3 }, { "#": "11 GIRARD RD (21-0-386)", $: 986800 }, { "#": "12 GIRARD RD (21-0-394)", $: 629100 }, { "#": "15 GIRARD RD (21-0-385)", $: 721800 }, { "#": "16 GIRARD RD (21-0-395)", $: 766400 }, { "#": "17 GIRARD RD (21-0-384)", $: 658400 }, { "#": "18 GIRARD RD (21-0-396)", $: 660300 }, { "#": "19 GIRARD RD (21-0-383)", $: 618100 }, { "#": "2 GIRARD RD (21-0-390)", $: 750700 }, { "#": "20 GIRARD RD (21-0-397)", $: 721e3 }, { "#": "21 GIRARD RD (21-0-382)", $: 738500 }, { "#": "22 GIRARD RD (21-0-398)", $: 720900 }, { "#": "23 GIRARD RD (21-0-381)", $: 761100 }, { "#": "24 GIRARD RD (21-0-399)", $: 642200 }, { "#": "25 GIRARD RD (21-0-380)", $: 661300 }, { "#": "26 GIRARD RD (21-0-400)", $: 887100 }, { "#": "27 GIRARD RD (21-0-379)", $: 795100 }, { "#": "3 GIRARD RD (21-0-389)", $: 780500 }, { "#": "6 GERALD RD (2-0-178)", $: 812500 }, { "#": "6 GIRARD RD (21-0-391)", $: 854900 }, { "#": "7 GIRARD RD (21-0-388)", $: 816200 }, { "#": "8 GIRARD RD (21-0-392)", $: 643400 }, { "#": "9 GIRARD RD (21-0-387)", $: 672500 }, { "#": "10 GLEN RD (23-0-49A)", $: 906600 }, { "#": "4 GLEN RD (23-0-44)", $: 645900 }, { "#": "6 GLEN RD (23-0-45)", $: 616900 }, { "#": "8 GLEN RD (23-0-47)", $: 628400 }, { "#": "9 GLEN RD (23-0-112)", $: 878600 }, { "#": "10 GLENDALE RD (19-0-189)", $: 727500 }, { "#": "5 GLENDALE RD (19-0-71C)", $: 659700 }, { "#": "6 GLENDALE RD (19-0-182)", $: 809700 }, { "#": "10 GORHAM AVE (14-0-198)", $: 817700 }, { "#": "11 GORHAM AVE (14-0-197)", $: 566100 }, { "#": "15 GORHAM AVE (14-0-196)", $: 704300 }, { "#": "16 GORHAM AVE (14-0-199)", $: 755600 }, { "#": "17 GORHAM AVE (14-0-195)", $: 720800 }, { "#": "22 GORHAM AVE (14-0-200)", $: 721100 }, { "#": "28 GORHAM AVE (14-0-202)", $: 850300 }, { "#": "34 GORHAM AVE (14-0-215)", $: 666700 }, { "#": "42 GORHAM AVE (14-0-230)", $: 575600 }, { "#": "43 GORHAM AVE (14-0-229)", $: 711500 }, { "#": "45 GORHAM AVE (14-0-228)", $: 643e3 }, { "#": "48 GORHAM AVE (14-0-231)", $: 550700 }, { "#": "51 GORHAM AVE (14-0-227)", $: 673500 }, { "#": "52 GORHAM AVE (14-0-232)", $: 727300 }, { "#": "55 GORHAM AVE (14-0-226)", $: 691800 }, { "#": "61 GORHAM AVE (14-0-225)", $: 671e3 }, { "#": "62 GORHAM AVE (14-0-234)", $: 625600 }, { "#": "10 GOULD ST (13-0-19)", $: 573500 }, { "#": "15 GOULD ST (13-0-31)", $: 501500 }, { "#": "19 GOULD ST (13-0-29)", $: 686500 }, { "#": "21 GOULD ST (13-0-28)", $: 676300 }, { "#": "24 GOULD ST (13-0-26)", $: 651e3 }, { "#": "28 GOULD ST (13-0-118)", $: 726100 }, { "#": "30 GOULD ST (13-0-119)", $: 602800 }, { "#": "32 GOULD ST (13-0-120)", $: 661800 }, { "#": "35 GOULD ST (13-0-131)", $: 776e3 }, { "#": "36 GOULD ST (13-0-122)", $: 516900 }, { "#": "38 GOULD ST (13-0-123)", $: 544700 }, { "#": "40 GOULD ST (13-0-127)", $: 616300 }, { "#": "43 GOULD ST (13-0-128)", $: 548400 }, { "#": "44 GOULD ST (8-0-26)", $: 548200 }, { "#": "46 GOULD ST (8-0-27)", $: 786600 }, { "#": "47 GOULD ST (8-0-19)", $: 775500 }, { "#": "48 GOULD ST (8-0-29)", $: 546700 }, { "#": "51 GOULD ST (8-0-18)", $: 518300 }, { "#": "53 GOULD ST (8-0-17)", $: 605e3 }, { "#": "55 GOULD ST (8-0-16)", $: 723700 }, { "#": "57 GOULD ST (8-0-59)", $: 717700 }, { "#": "6 GIRARD RD (21-0-391)", $: 854900 }, { "#": "58 GOULD ST (8-0-58A)", $: 837400 }, { "#": "59 GOULD ST (8-0-58)", $: 596100 }, { "#": "7 GOULD ST (13-0-35)", $: 640800 }, { "#": "103 GOVERNOR RD (16-0-72)", $: 664100 }, { "#": "104 GOVERNOR RD (16-0-94)", $: 666e3 }, { "#": "12 GOVERNOR RD (16-0-84)", $: 636100 }, { "#": "20 GOVERNOR RD (16-0-85)", $: 724100 }, { "#": "24 GOVERNOR RD (16-0-86)", $: 770600 }, { "#": "25 GOVERNOR RD (16-0-83)", $: 682300 }, { "#": "34 GOVERNOR RD (16-0-87)", $: 716700 }, { "#": "35 GOVERNOR RD (16-0-82)", $: 784800 }, { "#": "41 GOVERNOR RD (16-0-81)", $: 589800 }, { "#": "46 GOVERNOR RD (16-0-88)", $: 639200 }, { "#": "47 GOVERNOR RD (16-0-80)", $: 581700 }, { "#": "52 GOVERNOR RD (16-0-89)", $: 615700 }, { "#": "53 GOVERNOR RD (16-0-79)", $: 637600 }, { "#": "54 GOVERNOR RD (16-0-91)", $: 679200 }, { "#": "65 GOVERNOR RD (16-0-78)", $: 755700 }, { "#": "66 GOVERNOR RD (16-0-90)", $: 753e3 }, { "#": "67 GOVERNOR RD (16-0-77)", $: 730300 }, { "#": "69 GOVERNOR RD (16-0-76)", $: 678500 }, { "#": "71 GOVERNOR RD (16-0-75)", $: 788200 }, { "#": "73 GOVERNOR RD (16-0-74)", $: 654600 }, { "#": "90 GOVERNOR RD (16-0-92)", $: 695600 }, { "#": "95 GOVERNOR RD (16-0-73)", $: 725900 }, { "#": "96 GOVERNOR RD (16-0-93)", $: 705200 }, { "#": "10 GRACEWOOD RD (6-0-86)", $: 667700 }, { "#": "11 GRACEWOOD RD (6-0-88)", $: 716400 }, { "#": "12 GRACEWOOD RD (6-0-87)", $: 825200 }, { "#": "14 GRACEWOOD RD (6-0-93F)", $: 769100 }, { "#": "15 GRACEWOOD RD (6-0-93A)", $: 798100 }, { "#": "16 GRACEWOOD RD (6-0-93E)", $: 867e3 }, { "#": "17 GRACEWOOD RD (6-0-93B)", $: 970100 }, { "#": "18 GRACEWOOD RD (6-0-93D)", $: 904500 }, { "#": "19 GRACEWOOD RD (6-0-93C)", $: 828400 }, { "#": "3 GRACEWOOD RD (6-0-90)", $: 682100 }, { "#": "4 GRACEWOOD RD (6-0-83)", $: 656500 }, { "#": "5 GRACEWOOD RD (6-0-89)", $: 903100 }, { "#": "6 GRACEWOOD RD (6-0-84)", $: 618e3 }, { "#": "8 GRACEWOOD RD (6-0-85)", $: 671300 }, { "#": "13 GRANDVIEW AVE (18-0-57)", $: 1061300 }, { "#": "10 GRANT ST (18-0-579)", $: 672900 }, { "#": "12 GRANT ST (18-0-580)", $: 599900 }, { "#": "14 GRANT ST (18-0-581)", $: 650700 }, { "#": "15 GRANT ST (18-0-574)", $: 526500 }, { "#": "16 GRANT ST (18-0-582)", $: 598600 }, { "#": "17 GRANT ST (18-0-573)", $: 712500 }, { "#": "19 GRANT ST (18-0-572)", $: 821400 }, { "#": "20 GRANT ST (18-0-583)", $: 666600 }, { "#": "22 GRANT ST (18-0-584)", $: 619500 }, { "#": "58 GOULD ST (8-0-58A)", $: 837400 }, { "#": "4 GRANT ST (18-0-517)", $: 667600 }, { "#": "5 GRANT ST (18-0-516)", $: 657700 }, { "#": "6 GRANT ST (18-0-518)", $: 636200 }, { "#": "8 GRANT ST (18-0-560)", $: 732600 }, { "#": "9 GRANT ST (18-0-576)", $: 717e3 }, { "#": "11 GRAYSTONE RD (19-0-149)", $: 805800 }, { "#": "14 GRAYSTONE RD (19-0-164)", $: 901700 }, { "#": "15 GRAYSTONE RD (19-0-147)", $: 777800 }, { "#": "17 GRAYSTONE RD (19-0-146)", $: 516200 }, { "#": "18 GRAYSTONE RD (19-0-166)", $: 783600 }, { "#": "22 GRAYSTONE RD (19-0-171)", $: 676800 }, { "#": "23 GRAYSTONE RD (19-0-102)", $: 1023800 }, { "#": "6 GRAYSTONE RD (19-0-157)", $: 550500 }, { "#": "8 GRAYSTONE RD (19-0-158)", $: 809500 }, { "#": "100 GREEN ST (7-0-51)", $: 1096900 }, { "#": "102 GREEN ST (7-0-50)", $: 714500 }, { "#": "105 GREEN ST (7-0-267)", $: 560700 }, { "#": "113 GREEN ST (7-0-265)", $: 893800 }, { "#": "139 GREEN ST (7-0-261)", $: 721600 }, { "#": "146 GREEN ST (7-0-54)", $: 608700 }, { "#": "15 GREEN ST (7-0-371)", $: 832800 }, { "#": "150 GREEN ST (7-0-56)", $: 680600 }, { "#": "151 GREEN ST (7-0-258)", $: 779300 }, { "#": "158 GREEN ST (7-0-57)", $: 576800 }, { "#": "164 GREEN ST (7-0-58)", $: 621700 }, { "#": "165 GREEN ST (7-0-257)", $: 841200 }, { "#": "165 GREEN ST (7-0-259)", $: 576800 }, { "#": "168 GREEN ST (7-0-59)", $: 698700 }, { "#": "172 GREEN ST (7-0-60)", $: 831300 }, { "#": "181 GREEN ST (7-0-255)", $: 705e3 }, { "#": "218 GREEN ST (7-0-61)", $: 610900 }, { "#": "219 GREEN ST (7-0-232)", $: 730900 }, { "#": "22 GREEN ST (7-0-373)", $: 945700 }, { "#": "221 GREEN ST (7-0-231)", $: 676500 }, { "#": "222 GREEN ST (7-0-62)", $: 719600 }, { "#": "226 GREEN ST (7-0-63)", $: 1005700 }, { "#": "233 GREEN ST (7-0-229)", $: 547100 }, { "#": "235 GREEN ST (7-0-228)", $: 532200 }, { "#": "237 GREEN ST (7-0-227)", $: 726600 }, { "#": "239 GREEN ST (7-0-226)", $: 730500 }, { "#": "243 GREEN ST (7-0-222)", $: 568100 }, { "#": "244 GREEN ST (7-0-65)", $: 607500 }, { "#": "246 GREEN ST (7-0-66)", $: 958200 }, { "#": "250 GREEN ST (7-0-67)", $: 688700 }, { "#": "256 GREEN ST (7-0-68)", $: 668e3 }, { "#": "259 GREEN ST (7-0-221A)", $: 757400 }, { "#": "261 GREEN ST (7-0-221)", $: 63e4 }, { "#": "269 GREEN ST (7-0-219)", $: 772100 }, { "#": "278 GREEN ST (7-0-69)", $: 61e4 }, { "#": "280 GREEN ST (7-0-211)", $: 566300 }, { "#": "4 GRANT ST (18-0-517)", $: 667600 }, { "#": "296 GREEN ST (6-0-136)", $: 663400 }, { "#": "3 GREEN ST (7-0-379A)", $: 829700 }, { "#": "30 GREEN ST (7-0-7)", $: 593700 }, { "#": "303 GREEN ST (6-0-135)", $: 664e3 }, { "#": "304 GREEN ST (6-0-137)", $: 573100 }, { "#": "306 GREEN ST (6-0-138)", $: 650800 }, { "#": "307 GREEN ST (6-0-134)", $: 677200 }, { "#": "309 GREEN ST (6-0-133)", $: 847300 }, { "#": "311 GREEN ST (6-0-132)", $: 612200 }, { "#": "312 GREEN ST (6-0-107)", $: 616200 }, { "#": "319 GREEN ST (6-0-116)", $: 654100 }, { "#": "320 GREEN ST (6-0-108)", $: 579900 }, { "#": "323 GREEN ST (6-0-115)", $: 646200 }, { "#": "327 GREEN ST (6-0-114)", $: 653e3 }, { "#": "328 GREEN ST (6-0-109)", $: 833800 }, { "#": "332 GREEN ST (6-0-110)", $: 712e3 }, { "#": "333 GREEN ST (6-0-113)", $: 726200 }, { "#": "34 GREEN ST (7-0-8)", $: 788e3 }, { "#": "37 GREEN ST (7-0-276)", $: 754100 }, { "#": "45 GREEN ST (7-0-275)", $: 540500 }, { "#": "53 GREEN ST (7-0-273)", $: 800800 }, { "#": "62 GREEN ST (7-0-43)", $: 701100 }, { "#": "65 GREEN ST (7-0-272)", $: 682100 }, { "#": "71 GREEN ST (7-0-271)", $: 633900 }, { "#": "74 GREEN ST (7-0-44)", $: 684200 }, { "#": "80 GREEN ST (7-0-45)", $: 587100 }, { "#": "82 GREEN ST (7-0-46)", $: 599900 }, { "#": "95 GREEN ST (7-0-269)", $: 547900 }, { "#": "97 GREEN ST (7-0-268)", $: 653900 }, { "#": "11 GREENVIEW RD (11-0-131)", $: 771300 }, { "#": "14 GREENVIEW RD (6-0-220)", $: 800400 }, { "#": "15 GREENVIEW RD (6-0-219)", $: 809700 }, { "#": "17 GREENVIEW RD (6-0-218)", $: 1004400 }, { "#": "18 GREENVIEW RD (6-0-221)", $: 873e3 }, { "#": "19 GREENVIEW RD (6-0-217)", $: 801200 }, { "#": "3 GREENVIEW RD (11-0-135)", $: 773700 }, { "#": "4 GREENVIEW RD (11-0-128)", $: 777700 }, { "#": "5 GREENVIEW RD (11-0-134)", $: 830700 }, { "#": "6 GREENVIEW RD (11-0-129)", $: 737400 }, { "#": "7 GREENVIEW RD (11-0-133)", $: 873300 }, { "#": "8 GREENVIEW RD (11-0-130)", $: 901100 }, { "#": "9 GREENVIEW RD (11-0-132)", $: 777e3 }, { "#": "1 GREENWAY CIR (17-0-19)", $: 619700 }, { "#": "10 GREENWAY CIR (17-0-12)", $: 691500 }, { "#": "11 GREENWAY CIR (17-0-14)", $: 6e5 }, { "#": "14 GREENWAY CIR (17-0-13)", $: 647200 }, { "#": "15 GREENWAY CIR (16-0-321D)", $: 759500 }, { "#": "16 GREENWAY CIR (17-0-8)", $: 856300 }, { "#": "17 GREENWAY CIR (16-0-321C)", $: 778900 }, { "#": "19 GREENWAY CIR (16-0-321B)", $: 624500 }, { "#": "296 GREEN ST (6-0-136)", $: 663400 }, { "#": "21 GREENWAY CIR (16-0-321A)", $: 671e3 }, { "#": "3 GREENWAY CIR (17-0-18)", $: 704500 }, { "#": "5 GREENWAY CIR (17-0-17)", $: 699800 }, { "#": "6 GREENWAY CIR (17-0-11)", $: 747200 }, { "#": "7 GREENWAY CIR (17-0-16)", $: 720500 }, { "#": "9 GREENWAY CIR (17-0-15)", $: 807300 }, { "#": "3 GREG RD (1-0-127)", $: 871700 }, { "#": "4 GREG RD (1-0-122)", $: 911800 }, { "#": "5 GREG RD (1-0-126)", $: 847100 }, { "#": "6 GREG RD (1-0-123)", $: 746e3 }, { "#": "7 GREG RD (1-0-125)", $: 853600 }, { "#": "8 GREG RD (1-0-124)", $: 848e3 }, { "#": "1 HALL RD (1-0-95)", $: 754500 }, { "#": "10 HALL RD (1-0-86)", $: 864200 }, { "#": "11 HALL RD (1-0-90)", $: 865200 }, { "#": "12 HALL RD (1-0-87)", $: 802600 }, { "#": "14 HALL RD (1-0-88)", $: 946500 }, { "#": "15 HALL RD (1-0-89)", $: 826100 }, { "#": "16 HALL RD (1-0-310)", $: 958500 }, { "#": "17 HALL RD (1-0-325)", $: 896600 }, { "#": "18 HALL RD (1-0-311)", $: 944300 }, { "#": "19 HALL RD (1-0-324)", $: 848600 }, { "#": "2 HALL RD (1-0-82)", $: 838700 }, { "#": "20 HALL RD (1-0-312)", $: 862700 }, { "#": "21 HALL RD (1-0-323)", $: 852e3 }, { "#": "22 HALL RD (1-0-313)", $: 927300 }, { "#": "23 HALL RD (1-0-322)", $: 839200 }, { "#": "24 HALL RD (1-0-314)", $: 890600 }, { "#": "26 HALL RD (1-0-315)", $: 917800 }, { "#": "27 HALL RD (1-0-321)", $: 833100 }, { "#": "28 HALL RD (1-0-316)", $: 897e3 }, { "#": "29 HALL RD (1-0-320)", $: 898500 }, { "#": "3 HALL RD (1-0-94)", $: 727800 }, { "#": "30 HALL RD (1-0-319)", $: 860500 }, { "#": "31 HALL RD (1-0-331)", $: 895800 }, { "#": "32 HALL RD (1-0-330)", $: 814200 }, { "#": "33 HALL RD (1-0-332)", $: 979e3 }, { "#": "34 HALL RD (1-0-329)", $: 855200 }, { "#": "35 HALL RD (1-0-333)", $: 880500 }, { "#": "36 HALL RD (1-0-328)", $: 893600 }, { "#": "37 HALL RD (1-0-334)", $: 966100 }, { "#": "38 HALL RD (1-0-327)", $: 861400 }, { "#": "39 HALL RD (1-0-25)", $: 764500 }, { "#": "4 HALL RD (1-0-83)", $: 858e3 }, { "#": "40 HALL RD (1-0-326)", $: 894100 }, { "#": "42 HALL RD (1-0-26)", $: 862400 }, { "#": "5 HALL RD (1-0-93)", $: 771900 }, { "#": "6 HALL RD (1-0-84)", $: 831600 }, { "#": "7 HALL RD (1-0-92)", $: 735500 }, { "#": "8 HALL RD (1-0-85)", $: 884100 }, { "#": "21 GREENWAY CIR (16-0-321A)", $: 671e3 }, { "#": "9 HALL RD (1-0-91)", $: 733600 }, { "#": "3 HAMILL CT (2-0-158A1)", $: 1065100 }, { "#": "4 HAMILL CT (2-0-156)", $: 878500 }, { "#": "5 HAMILL CT (2-0-158A2)", $: 1184400 }, { "#": "6 HAMILL CT (2-0-155B)", $: 879900 }, { "#": "8 HAMILL CT (2-0-155A)", $: 842800 }, { "#": "1 HAMPTON RD (3-0-283)", $: 797300 }, { "#": "3 HAMPTON RD (3-0-282)", $: 868900 }, { "#": "4 HAMPTON RD (3-0-277)", $: 901400 }, { "#": "5 HAMPTON RD (3-0-281)", $: 756800 }, { "#": "6 HAMPTON RD (3-0-279)", $: 894900 }, { "#": "7 HAMPTON RD (3-0-292)", $: 971800 }, { "#": "8 HAMPTON RD (3-0-293)", $: 780900 }, { "#": "10 HANCOCK ST (13-0-420)", $: 616300 }, { "#": "103 HANCOCK ST (13-0-497)", $: 711800 }, { "#": "104 HANCOCK ST (18-0-233)", $: 564100 }, { "#": "108 HANCOCK ST (18-0-234)", $: 508100 }, { "#": "14 HANCOCK ST (13-0-421)", $: 649900 }, { "#": "166 HANCOCK ST (18-0-446)", $: 588600 }, { "#": "173 HANCOCK ST (18-0-466)", $: 541900 }, { "#": "178 HANCOCK ST (18-0-468)", $: 570100 }, { "#": "179 HANCOCK ST (18-0-465)", $: 839700 }, { "#": "180 HANCOCK ST (18-0-469)", $: 556900 }, { "#": "198 HANCOCK ST (18-0-521)", $: 691900 }, { "#": "2 HANCOCK ST (13-0-340)", $: 486700 }, { "#": "205 HANCOCK ST (18-0-558)", $: 676400 }, { "#": "209 HANCOCK ST (18-0-592)", $: 686400 }, { "#": "214 HANCOCK ST (18-0-594)", $: 642400 }, { "#": "215 HANCOCK ST (18-0-591)", $: 706200 }, { "#": "216 HANCOCK ST (18-0-595)", $: 541100 }, { "#": "219 HANCOCK ST (18-0-590)", $: 577900 }, { "#": "227 HANCOCK ST (18-0-589)", $: 660300 }, { "#": "235 HANCOCK ST (18-0-588)", $: 660800 }, { "#": "236 HANCOCK ST (18-0-622)", $: 722600 }, { "#": "239 HANCOCK ST (18-0-587)", $: 606100 }, { "#": "240 HANCOCK ST (18-0-623)", $: 65e4 }, { "#": "33 HANCOCK ST (13-0-416)", $: 565800 }, { "#": "35 HANCOCK ST (13-0-415)", $: 502800 }, { "#": "42 HANCOCK ST (13-0-449)", $: 637800 }, { "#": "52 HANCOCK ST (13-0-452)", $: 627300 }, { "#": "56 HANCOCK ST (13-0-453)", $: 491700 }, { "#": "57 HANCOCK ST (13-0-412)", $: 669200 }, { "#": "65 HANCOCK ST (13-0-411)", $: 601900 }, { "#": "76 HANCOCK ST (13-0-490)", $: 664100 }, { "#": "77 HANCOCK ST (13-0-409)", $: 453800 }, { "#": "79 HANCOCK ST (13-0-408)", $: 510800 }, { "#": "80 HANCOCK ST (13-0-491)", $: 465500 }, { "#": "81 HANCOCK ST (13-0-407)", $: 514200 }, { "#": "82 HANCOCK ST (13-0-492)", $: 512700 }, { "#": "96 HANCOCK ST (13-0-494)", $: 603500 }, { "#": "9 HALL RD (1-0-91)", $: 733600 }, { "#": "1 HANFORD RD (21-0-89)", $: 712600 }, { "#": "11 HANFORD RD (21-0-73)", $: 729200 }, { "#": "12 HANFORD RD (21-0-68)", $: 669500 }, { "#": "15 HANFORD RD (21-0-72)", $: 768500 }, { "#": "16 HANFORD RD (21-0-69)", $: 813200 }, { "#": "18 HANFORD RD (20-0-16)", $: 583500 }, { "#": "19 HANFORD RD (20-0-14)", $: 691400 }, { "#": "20 HANFORD RD (20-0-17)", $: 661700 }, { "#": "21 HANFORD RD (20-0-13)", $: 706100 }, { "#": "22 HANFORD RD (20-0-18)", $: 1070100 }, { "#": "23 HANFORD RD (20-0-12)", $: 872500 }, { "#": "24 HANFORD RD (20-0-19)", $: 597400 }, { "#": "25 HANFORD RD (20-0-11)", $: 760900 }, { "#": "26 HANFORD RD (20-0-20)", $: 1016600 }, { "#": "27 HANFORD RD (20-0-10)", $: 1100500 }, { "#": "29 HANFORD RD (20-0-9)", $: 732900 }, { "#": "3 HANFORD RD (21-0-77)", $: 605800 }, { "#": "31 HANFORD RD (20-0-87)", $: 931900 }, { "#": "33 HANFORD RD (20-0-86)", $: 943900 }, { "#": "35 HANFORD RD (20-0-85)", $: 866500 }, { "#": "37 HANFORD RD (20-0-84)", $: 1447300 }, { "#": "4 HANFORD RD (21-0-88A)", $: 785200 }, { "#": "5 HANFORD RD (21-0-76)", $: 627800 }, { "#": "7 HANFORD RD (21-0-75)", $: 731700 }, { "#": "9 HANFORD RD (21-0-74)", $: 927e3 }, { "#": "1 HARRISON ST (3-0-130)", $: 768100 }, { "#": "10 HARRISON ST (3-0-106)", $: 820500 }, { "#": "11 HARRISON ST (3-0-125)", $: 688300 }, { "#": "12 HARRISON ST (3-0-107)", $: 822900 }, { "#": "13 HARRISON ST (3-0-124)", $: 791200 }, { "#": "14 HARRISON ST (3-0-108)", $: 898e3 }, { "#": "15 HARRISON ST (3-0-123)", $: 783500 }, { "#": "17 HARRISON ST (3-0-122)", $: 783100 }, { "#": "19 HARRISON ST (3-0-121)", $: 626300 }, { "#": "21 HARRISON ST (3-0-120)", $: 719300 }, { "#": "23 HARRISON ST (3-0-119)", $: 701600 }, { "#": "27 HARRISON ST (3-0-118)", $: 825200 }, { "#": "3 HARRISON ST (3-0-129)", $: 723400 }, { "#": "41 HARRISON ST (3-0-114)", $: 695100 }, { "#": "5 HARRISON ST (3-0-128)", $: 940300 }, { "#": "7 HARRISON ST (3-0-127)", $: 816600 }, { "#": "8 HARRISON ST (3-0-103)", $: 768900 }, { "#": "1 HEATHER LN (14-0-261)", $: 892700 }, { "#": "3 HEATHER LN (14-0-260)", $: 979300 }, { "#": "4 HEATHER LN (14-0-256)", $: 880500 }, { "#": "5 HEATHER LN (14-0-259)", $: 1776800 }, { "#": "6 HEATHER LN (14-0-257)", $: 880900 }, { "#": "8 HEATHER LN (14-0-258)", $: 916300 }, { "#": "15 HERSAM ST (18-0-122)", $: 744100 }, { "#": "16 HERSAM ST (18-0-136)", $: 657100 }, { "#": "1 HANFORD RD (21-0-89)", $: 712600 }, { "#": "18 HERSAM ST (18-0-137)", $: 732e3 }, { "#": "19 HERSAM ST (18-0-120)", $: 619600 }, { "#": "21 HERSAM ST (18-0-119)", $: 613e3 }, { "#": "6 HERSAM ST (18-0-131)", $: 506e3 }, { "#": "4 HIGH CLIFF TRL (21-0-247)", $: 922400 }, { "#": "5 HIGH CLIFF TRL (21-0-248)", $: 1036e3 }, { "#": "10 HIGH ROCK RD (19-0-299A)", $: 1015300 }, { "#": "11 HIGH ROCK RD (19-0-298)", $: 783400 }, { "#": "3 HIGH ROCK RD (14-0-296)", $: 976400 }, { "#": "4 HIGH ROCK RD (14-0-284)", $: 1114200 }, { "#": "5 HIGH ROCK RD (14-0-295)", $: 984200 }, { "#": "7 HIGH ROCK RD (14-0-294)", $: 886900 }, { "#": "8 HIGH ROCK RD (14-0-292)", $: 951900 }, { "#": "9 HIGH ROCK RD (14-0-293)", $: 1193300 }, { "#": "HIGH ST (11-0-141)", $: 707900 }, { "#": "HIGH ST (11-0-253)", $: 845200 }, { "#": "10 HIGH ST (12-0-73)", $: 1068800 }, { "#": "101 HIGH ST (11-0-100)", $: 935600 }, { "#": "103 HIGH ST (10-0-16)", $: 1037400 }, { "#": "105 HIGH ST (10-0-15)", $: 937800 }, { "#": "109 HIGH ST (10-0-14B)", $: 1488400 }, { "#": "11 HIGH ST (12-0-106)", $: 793700 }, { "#": "113 HIGH ST (10-0-14)", $: 1450900 }, { "#": "119 HIGH ST (10-0-14A)", $: 1286600 }, { "#": "123 HIGH ST (10-0-13)", $: 781400 }, { "#": "131 HIGH ST (10-0-26)", $: 995200 }, { "#": "15 HIGH ST (12-0-104)", $: 924800 }, { "#": "19 HIGH ST (12-0-87)", $: 635400 }, { "#": "2 HIGH ST (12-0-85)", $: 964600 }, { "#": "21 HIGH ST (11-0-254)", $: 609200 }, { "#": "22 HIGH ST (11-0-255)", $: 915900 }, { "#": "23 HIGH ST (11-0-252)", $: 897200 }, { "#": "24 HIGH ST (11-0-256)", $: 870900 }, { "#": "25 HIGH ST (11-0-251)", $: 726500 }, { "#": "27 HIGH ST (11-0-250)", $: 1112700 }, { "#": "28 HIGH ST (11-0-257)", $: 1086100 }, { "#": "29 HIGH ST (11-0-249)", $: 726300 }, { "#": "30 HIGH ST (11-0-258)", $: 964100 }, { "#": "31 HIGH ST (11-0-248)", $: 947700 }, { "#": "32 HIGH ST (11-0-259)", $: 869800 }, { "#": "33 HIGH ST (11-0-247)", $: 1038800 }, { "#": "34 HIGH ST (11-0-260)", $: 932500 }, { "#": "35 HIGH ST (11-0-245)", $: 807300 }, { "#": "36 HIGH ST (11-0-261)", $: 723200 }, { "#": "37 HIGH ST (11-0-244)", $: 987800 }, { "#": "38 HIGH ST (11-0-262)", $: 871400 }, { "#": "39 HIGH ST (11-0-243)", $: 809900 }, { "#": "4 HIGH ST (12-0-86)", $: 765300 }, { "#": "41 HIGH ST (11-0-242)", $: 727600 }, { "#": "42 HIGH ST (11-0-263)", $: 855200 }, { "#": "18 HERSAM ST (18-0-137)", $: 732e3 }, { "#": "43 HIGH ST (11-0-241)", $: 833600 }, { "#": "45 HIGH ST (11-0-240)", $: 922700 }, { "#": "47 HIGH ST (11-0-239)", $: 874200 }, { "#": "48 HIGH ST (11-0-266)", $: 948800 }, { "#": "5 HIGH ST (12-0-109A)", $: 831200 }, { "#": "50 HIGH ST (11-0-267)", $: 811900 }, { "#": "52 HIGH ST (11-0-268)", $: 640200 }, { "#": "54 HIGH ST (11-0-56)", $: 972500 }, { "#": "56 HIGH ST (11-0-57)", $: 896600 }, { "#": "57 HIGH ST (11-0-169)", $: 700200 }, { "#": "59 HIGH ST (11-0-168)", $: 624700 }, { "#": "60 HIGH ST (11-0-58)", $: 1024100 }, { "#": "61 HIGH ST (11-0-144)", $: 613600 }, { "#": "63 HIGH ST (11-0-142)", $: 641600 }, { "#": "63 HIGH ST (11-0-143)", $: 665400 }, { "#": "65 HIGH ST (11-0-148)", $: 969900 }, { "#": "67 HIGH ST (11-0-140)", $: 754400 }, { "#": "69 HIGH ST (11-0-139)", $: 632100 }, { "#": "7 HIGH ST (12-0-107A)", $: 663200 }, { "#": "72 HIGH ST (11-0-97)", $: 706400 }, { "#": "73 HIGH ST (11-0-138)", $: 855600 }, { "#": "74 HIGH ST (11-0-98)", $: 922600 }, { "#": "75 HIGH ST (11-0-137)", $: 642900 }, { "#": "77 HIGH ST (11-0-136)", $: 690300 }, { "#": "79 HIGH ST (11-0-127)", $: 668500 }, { "#": "81 HIGH ST (11-0-126)", $: 830700 }, { "#": "9 HIGH ST (12-0-107)", $: 687500 }, { "#": "95 HIGH ST (11-0-107)", $: 724500 }, { "#": "97 HIGH ST (11-0-104)", $: 964900 }, { "#": "98 HIGH ST (11-0-102)", $: 1041600 }, { "#": "99 HIGH ST (11-0-101)", $: 1318400 }, { "#": "1 HIGHLAND AVE (8-0-15)", $: 685300 }, { "#": "13 HIGHLAND AVE (8-0-9)", $: 732e3 }, { "#": "14 HIGHLAND AVE (8-0-63)", $: 636600 }, { "#": "15 HIGHLAND AVE (8-0-7)", $: 745700 }, { "#": "16 HIGHLAND AVE (8-0-64)", $: 742800 }, { "#": "18 HIGHLAND AVE (8-0-65)", $: 641200 }, { "#": "21 HIGHLAND AVE (8-0-4)", $: 888900 }, { "#": "22 HIGHLAND AVE (8-0-67)", $: 766700 }, { "#": "23 HIGHLAND AVE (8-0-3)", $: 750900 }, { "#": "26 HIGHLAND AVE (8-0-75)", $: 945300 }, { "#": "3 HIGHLAND AVE (8-0-14)", $: 728400 }, { "#": "4 HIGHLAND AVE (8-0-60)", $: 691900 }, { "#": "7 HIGHLAND AVE (8-0-13)", $: 625400 }, { "#": "9 HIGHLAND AVE (8-0-11)", $: 589400 }, { "#": "HILL ST (23-0-145A)", $: 1218600 }, { "#": "1 HILL ST (23-0-145C)", $: 871e3 }, { "#": "3 HILL ST (23-0-145B)", $: 709200 }, { "#": "4 HILL ST (23-0-155C)", $: 1020700 }, { "#": "7 HILL ST (23-0-144)", $: 714900 }, { "#": "43 HIGH ST (11-0-241)", $: 833600 }, { "#": "8 HILL ST (23-0-155D)", $: 308e3 }, { "#": "10 HILLSIDE AVE (11-0-151)", $: 630200 }, { "#": "12 HILLSIDE AVE (11-0-152)", $: 574e3 }, { "#": "15 HILLSIDE AVE (11-0-163)", $: 593500 }, { "#": "16 HILLSIDE AVE (11-0-153)", $: 804600 }, { "#": "19 HILLSIDE AVE (11-0-162)", $: 643100 }, { "#": "21 HILLSIDE AVE (11-0-161)", $: 779500 }, { "#": "22 HILLSIDE AVE (11-0-158)", $: 679900 }, { "#": "23 HILLSIDE AVE (11-0-160)", $: 712800 }, { "#": "25 HILLSIDE AVE (6-0-205)", $: 656400 }, { "#": "26 HILLSIDE AVE (6-0-206)", $: 670200 }, { "#": "27 HILLSIDE AVE (6-0-204)", $: 735700 }, { "#": "28 HILLSIDE AVE (6-0-207)", $: 763200 }, { "#": "29 HILLSIDE AVE (6-0-203)", $: 535800 }, { "#": "3 HILLSIDE AVE (11-0-166)", $: 755600 }, { "#": "30 HILLSIDE AVE (6-0-208)", $: 773400 }, { "#": "31 HILLSIDE AVE (6-0-202)", $: 689100 }, { "#": "32 HILLSIDE AVE (6-0-209)", $: 580400 }, { "#": "4 HILLSIDE AVE (11-0-145)", $: 603500 }, { "#": "6 HILLSIDE AVE (11-0-146)", $: 702800 }, { "#": "7 HILLSIDE AVE (11-0-165)", $: 756700 }, { "#": "9 HILLSIDE AVE (11-0-164)", $: 785400 }, { "#": "10 HILLSIDE RD (23-0-55A)", $: 756300 }, { "#": "2 HILLSIDE RD (23-0-54)", $: 577200 }, { "#": "8 HILLSIDE RD (23-0-55)", $: 502200 }, { "#": "9 HILLSIDE RD (23-0-109)", $: 652300 }, { "#": "4 HOMESTEAD LN (6-0-94B)", $: 912e3 }, { "#": "6 HOMESTEAD LN (6-0-94C)", $: 983300 }, { "#": "8 HOMESTEAD LN (6-0-94D)", $: 989200 }, { "#": "1 HOTIN RD (17-0-58)", $: 578100 }, { "#": "5 HOTIN RD (17-0-57)", $: 615900 }, { "#": "4 IRVING ST (13-0-283)", $: 702300 }, { "#": "6 IRVING ST (13-0-285)", $: 588600 }, { "#": "8 IRVING ST (13-0-286)", $: 650700 }, { "#": "11 ISABELLA ST (3-0-89)", $: 1036100 }, { "#": "14 ISABELLA ST (3-0-46)", $: 74e4 }, { "#": "15 ISABELLA ST (3-0-75)", $: 613800 }, { "#": "18 ISABELLA ST (3-0-47)", $: 786700 }, { "#": "19 ISABELLA ST (3-0-74)", $: 794200 }, { "#": "20 ISABELLA ST (3-0-48)", $: 781300 }, { "#": "21 ISABELLA ST (3-0-73)", $: 707200 }, { "#": "23 ISABELLA ST (3-0-72)", $: 762900 }, { "#": "24 ISABELLA ST (3-0-55)", $: 637300 }, { "#": "25 ISABELLA ST (3-0-71)", $: 612e3 }, { "#": "27 ISABELLA ST (3-0-69)", $: 946800 }, { "#": "28 ISABELLA ST (3-0-56)", $: 844500 }, { "#": "30 ISABELLA ST (3-0-57)", $: 884400 }, { "#": "33 ISABELLA ST (3-0-67)", $: 880800 }, { "#": "35 ISABELLA ST (2-0-269)", $: 843400 }, { "#": "37 ISABELLA ST (2-0-268)", $: 726100 }, { "#": "8 HILL ST (23-0-155D)", $: 308e3 }, { "#": "40 ISABELLA ST (2-0-244)", $: 762700 }, { "#": "43 ISABELLA ST (2-0-257)", $: 707600 }, { "#": "44 ISABELLA ST (2-0-251)", $: 665e3 }, { "#": "46 ISABELLA ST (2-0-252)", $: 1039700 }, { "#": "47 ISABELLA ST (2-0-256)", $: 668900 }, { "#": "9 ISABELLA ST (3-0-91)", $: 761900 }, { "#": "4 IVY RD (11-0-154)", $: 838200 }, { "#": "3 JANICE LN (20-0-28)", $: 821200 }, { "#": "4 JANICE LN (20-0-74)", $: 677400 }, { "#": "5 JANICE LN (20-0-27)", $: 748200 }, { "#": "6 JANICE LN (21-0-70)", $: 677700 }, { "#": "7 JANICE LN (20-0-15)", $: 744600 }, { "#": "8 JANICE LN (21-0-71)", $: 556e3 }, { "#": "5 JENNIFER RD (1-0-1)", $: 481700 }, { "#": "1 JOAN AVE (17-0-368)", $: 744600 }, { "#": "10 JOAN AVE (17-0-354)", $: 779400 }, { "#": "12 JOAN AVE (17-0-355)", $: 562400 }, { "#": "15 JOAN AVE (17-0-459)", $: 627300 }, { "#": "2 JOAN AVE (17-0-350)", $: 809e3 }, { "#": "4 JOAN AVE (17-0-351)", $: 662800 }, { "#": "6 JOAN AVE (17-0-352)", $: 573500 }, { "#": "7 JOAN AVE (17-0-367)", $: 713700 }, { "#": "8 JOAN AVE (17-0-353)", $: 586400 }, { "#": "1 JUNE RD (13-0-187)", $: 673300 }, { "#": "2 JUNE RD (13-0-204)", $: 531500 }, { "#": "3 JUNE RD (13-0-188)", $: 703500 }, { "#": "4 JUNE RD (13-0-203)", $: 752600 }, { "#": "5 JUNE RD (13-0-189)", $: 489500 }, { "#": "6 JUNE RD (13-0-202)", $: 633e3 }, { "#": "2 KAREN DR (9-0-38)", $: 1008200 }, { "#": "4 KAREN DR (9-0-38A)", $: 910500 }, { "#": "11 KATHERINE RD (18-0-667)", $: 636600 }, { "#": "14 KATHERINE RD (18-0-658)", $: 590800 }, { "#": "15 KATHERINE RD (18-0-666)", $: 603400 }, { "#": "22 KATHERINE RD (18-0-659)", $: 636500 }, { "#": "23 KATHERINE RD (18-0-665)", $: 614900 }, { "#": "26 KATHERINE RD (18-0-660)", $: 501900 }, { "#": "27 KATHERINE RD (18-0-664)", $: 543600 }, { "#": "34 KATHERINE RD (18-0-661)", $: 574200 }, { "#": "35 KATHERINE RD (18-0-663)", $: 705500 }, { "#": "49 KATHERINE RD (18-0-662)", $: 626100 }, { "#": "55 KATHERINE RD (19-0-7)", $: 660700 }, { "#": "59 KATHERINE RD (19-0-6)", $: 641600 }, { "#": "61 KATHERINE RD (19-0-5)", $: 617e3 }, { "#": "63 KATHERINE RD (19-0-4AB)", $: 885200 }, { "#": "11 KAYS RD (16-0-257)", $: 684400 }, { "#": "15 KAYS RD (16-0-256)", $: 632900 }, { "#": "17 KAYS RD (16-0-255)", $: 561200 }, { "#": "3 KAYS RD (16-0-272)", $: 694e3 }, { "#": "4 KAYS RD (16-0-262)", $: 682300 }, { "#": "40 ISABELLA ST (2-0-244)", $: 762700 }, { "#": "5 KAYS RD (16-0-271)", $: 695200 }, { "#": "6 KAYS RD (16-0-263)", $: 697e3 }, { "#": "7 KAYS RD (16-0-270)", $: 727600 }, { "#": "8 KAYS RD (16-0-258)", $: 897700 }, { "#": "9 KAYS RD (16-0-264)", $: 758e3 }, { "#": "KEENE ST (11-0-230A)", $: 939e3 }, { "#": "10 KEENE ST (11-0-225)", $: 718800 }, { "#": "11 KEENE ST (11-0-218)", $: 599700 }, { "#": "12 KEENE ST (11-0-226)", $: 831600 }, { "#": "13 KEENE ST (11-0-217)", $: 770400 }, { "#": "14 KEENE ST (11-0-227)", $: 835600 }, { "#": "15 KEENE ST (11-0-216)", $: 940200 }, { "#": "16 KEENE ST (11-0-228)", $: 711500 }, { "#": "17 KEENE ST (11-0-215)", $: 911700 }, { "#": "19 KEENE ST (11-0-214)", $: 935100 }, { "#": "21 KEENE ST (11-0-213)", $: 953300 }, { "#": "22 KEENE ST (11-0-229A)", $: 1012700 }, { "#": "23 KEENE ST (11-0-212)", $: 779400 }, { "#": "24 KEENE ST (11-0-229)", $: 1191200 }, { "#": "25 KEENE ST (11-0-211)", $: 1032900 }, { "#": "26 KEENE ST (11-0-232)", $: 1171500 }, { "#": "27 KEENE ST (11-0-210)", $: 1033300 }, { "#": "28 KEENE ST (11-0-233)", $: 975100 }, { "#": "29 KEENE ST (11-0-209)", $: 931300 }, { "#": "3 KEENE ST (12-0-92)", $: 736500 }, { "#": "30 KEENE ST (11-0-234)", $: 680500 }, { "#": "31 KEENE ST (11-0-208)", $: 999300 }, { "#": "32 KEENE ST (11-0-235)", $: 741800 }, { "#": "33 KEENE ST (11-0-207)", $: 786200 }, { "#": "34 KEENE ST (11-0-236)", $: 892500 }, { "#": "36 KEENE ST (11-0-237)", $: 688300 }, { "#": "4 KEENE ST (12-0-91)", $: 728100 }, { "#": "6 KEENE ST (11-0-223)", $: 850600 }, { "#": "7 KEENE ST (11-0-219)", $: 734400 }, { "#": "8 KEENE ST (11-0-224)", $: 729600 }, { "#": "1 KEITHS LN (7-0-47)", $: 923e3 }, { "#": "10 KENNETH TRL (11-0-87)", $: 1120100 }, { "#": "14 KENNETH TRL (11-0-89)", $: 825500 }, { "#": "16 KENNETH TRL (11-0-90)", $: 714700 }, { "#": "18 KENNETH TRL (11-0-91)", $: 786200 }, { "#": "20 KENNETH TRL (11-0-93)", $: 768700 }, { "#": "22 KENNETH TRL (11-0-94)", $: 756200 }, { "#": "4 KENNETH TRL (11-0-84)", $: 620300 }, { "#": "6 KENNETH TRL (11-0-85)", $: 732700 }, { "#": "8 KENNETH TRL (11-0-86)", $: 758500 }, { "#": "10 KENWOOD AVE (19-0-252)", $: 786800 }, { "#": "11 KENWOOD AVE (19-0-241)", $: 858700 }, { "#": "15 KENWOOD AVE (19-0-177Q)", $: 922100 }, { "#": "4 KENWOOD AVE (19-0-247)", $: 573600 }, { "#": "5 KENWOOD AVE (19-0-243)", $: 814800 }, { "#": "5 KAYS RD (16-0-271)", $: 695200 }, { "#": "6 KENWOOD AVE (19-0-248)", $: 607700 }, { "#": "7 KENWOOD AVE (19-0-244)", $: 718500 }, { "#": "8 KENWOOD AVE (19-0-251)", $: 719500 }, { "#": "9 KENWOOD AVE (19-0-242)", $: 784700 }, { "#": "2 KEVIN AVE (3-0-332)", $: 857900 }, { "#": "10 KIMBALL DR (16-0-189)", $: 805900 }, { "#": "11 KIMBALL DR (16-0-192)", $: 891e3 }, { "#": "12 KIMBALL DR (16-0-190)", $: 763300 }, { "#": "15 KIMBALL DR (16-0-191)", $: 720300 }, { "#": "2 KIMBALL DR (16-0-186B)", $: 823500 }, { "#": "3 KIMBALL DR (16-0-196)", $: 73e4 }, { "#": "4 KIMBALL DR (16-0-186C)", $: 809500 }, { "#": "5 KIMBALL DR (16-0-195)", $: 744300 }, { "#": "6 KIMBALL DR (16-0-187)", $: 705600 }, { "#": "7 KIMBALL DR (16-0-194)", $: 706400 }, { "#": "8 KIMBALL DR (16-0-188)", $: 742700 }, { "#": "9 KIMBALL DR (16-0-193)", $: 798900 }, { "#": "10 KIRMES RD (21-0-113)", $: 986900 }, { "#": "11 KIRMES RD (21-0-116)", $: 768700 }, { "#": "12 KIRMES RD (21-0-114)", $: 772400 }, { "#": "14 KIRMES RD (21-0-115)", $: 690200 }, { "#": "3 KIRMES RD (21-0-119)", $: 716e3 }, { "#": "5 KIRMES RD (21-0-118)", $: 814800 }, { "#": "6 KIRMES RD (21-0-111)", $: 703700 }, { "#": "8 KIRMES RD (21-0-112)", $: 949500 }, { "#": "9 KIRMES RD (21-0-117)", $: 717200 }, { "#": "31 LAKE AVE (2-0-238B)", $: 531400 }, { "#": "33 LAKE AVE (2-0-238A)", $: 981400 }, { "#": "10 LANDERS RD (8-0-190)", $: 1028500 }, { "#": "11 LANDERS RD (8-0-187)", $: 959e3 }, { "#": "12 LANDERS RD (8-0-191)", $: 1025100 }, { "#": "14 LANDERS RD (8-0-192)", $: 1026100 }, { "#": "15 LANDERS RD (8-0-188)", $: 931e3 }, { "#": "16 LANDERS RD (8-0-193)", $: 1011e3 }, { "#": "17 LANDERS RD (8-0-189)", $: 1080900 }, { "#": "18 LANDERS RD (8-0-199)", $: 918900 }, { "#": "2 LANDERS RD (7-0-401A)", $: 1281800 }, { "#": "20 LANDERS RD (8-0-200)", $: 1234600 }, { "#": "22 LANDERS RD (8-0-201)", $: 1070700 }, { "#": "23 LANDERS RD (8-0-208)", $: 1489500 }, { "#": "24 LANDERS RD (8-0-202)", $: 997700 }, { "#": "25 LANDERS RD (8-0-207)", $: 979400 }, { "#": "27 LANDERS RD (8-0-206)", $: 854600 }, { "#": "28 LANDERS RD (8-0-204)", $: 905600 }, { "#": "29 LANDERS RD (8-0-205)", $: 1012500 }, { "#": "3 LANDERS RD (7-0-404)", $: 889100 }, { "#": "4 LANDERS RD (7-0-490)", $: 982100 }, { "#": "5 LANDERS RD (7-0-491)", $: 862800 }, { "#": "6 LANDERS RD (7-0-490A)", $: 960900 }, { "#": "7 LANDERS RD (7-0-492)", $: 1009100 }, { "#": "6 KENWOOD AVE (19-0-248)", $: 607700 }, { "#": "8 LANDERS RD (7-0-493)", $: 983600 }, { "#": "9 LANDERS RD (8-0-186)", $: 1090100 }, { "#": "1 LARSON LN (15-0-79)", $: 788600 }, { "#": "11 LARSON LN (16-0-365)", $: 831e3 }, { "#": "14 LARSON LN (15-0-83)", $: 835800 }, { "#": "15 LARSON LN (16-0-366)", $: 854700 }, { "#": "17 LARSON LN (16-0-367)", $: 1045100 }, { "#": "19 LARSON LN (16-0-368)", $: 878900 }, { "#": "2 LARSON LN (15-0-87)", $: 750700 }, { "#": "21 LARSON LN (16-0-369)", $: 837100 }, { "#": "3 LARSON LN (15-0-80)", $: 714800 }, { "#": "4 LARSON LN (15-0-86)", $: 855e3 }, { "#": "5 LARSON LN (15-0-81)", $: 847400 }, { "#": "6 LARSON LN (15-0-85)", $: 913500 }, { "#": "7 LARSON LN (15-0-82)", $: 721900 }, { "#": "8 LARSON LN (15-0-84)", $: 796800 }, { "#": "9 LARSON LN (16-0-364)", $: 809100 }, { "#": "1 LAURIE LN (14-0-269)", $: 938400 }, { "#": "2 LAURIE LN (14-0-266)", $: 905500 }, { "#": "3 LAURIE LN (14-0-268)", $: 885600 }, { "#": "4 LAURIE LN (14-0-267)", $: 1125900 }, { "#": "1 LAWNDALE RD (10-0-25)", $: 717500 }, { "#": "10 LAWNDALE RD (10-0-30)", $: 721400 }, { "#": "11 LAWNDALE RD (10-0-22)", $: 982800 }, { "#": "12 LAWNDALE RD (10-0-31)", $: 829500 }, { "#": "14 LAWNDALE RD (10-0-32)", $: 874200 }, { "#": "15 LAWNDALE RD (10-0-21)", $: 915500 }, { "#": "16 LAWNDALE RD (10-0-33)", $: 902900 }, { "#": "17 LAWNDALE RD (10-0-20)", $: 939800 }, { "#": "18 LAWNDALE RD (10-0-34)", $: 1182800 }, { "#": "19 LAWNDALE RD (10-0-19)", $: 968100 }, { "#": "20 LAWNDALE RD (10-0-35)", $: 942e3 }, { "#": "21 LAWNDALE RD (10-0-18)", $: 1030500 }, { "#": "22 LAWNDALE RD (10-0-36)", $: 914100 }, { "#": "23 LAWNDALE RD (10-0-17)", $: 917100 }, { "#": "24 LAWNDALE RD (10-0-37)", $: 1036800 }, { "#": "25 LAWNDALE RD (11-0-116)", $: 907400 }, { "#": "26 LAWNDALE RD (10-0-38)", $: 977300 }, { "#": "27 LAWNDALE RD (11-0-115)", $: 978100 }, { "#": "28 LAWNDALE RD (11-0-117)", $: 945700 }, { "#": "29 LAWNDALE RD (11-0-114)", $: 938400 }, { "#": "3 LAWNDALE RD (10-0-24)", $: 723800 }, { "#": "30 LAWNDALE RD (11-0-118)", $: 931700 }, { "#": "31 LAWNDALE RD (11-0-113)", $: 988e3 }, { "#": "32 LAWNDALE RD (11-0-119)", $: 893600 }, { "#": "33 LAWNDALE RD (11-0-112)", $: 850100 }, { "#": "34 LAWNDALE RD (11-0-120)", $: 784500 }, { "#": "35 LAWNDALE RD (11-0-111)", $: 1007e3 }, { "#": "36 LAWNDALE RD (6-0-229)", $: 874600 }, { "#": "38 LAWNDALE RD (6-0-230)", $: 998700 }, { "#": "8 LANDERS RD (7-0-493)", $: 983600 }, { "#": "4 LAWNDALE RD (10-0-27)", $: 776e3 }, { "#": "40 LAWNDALE RD (6-0-231)", $: 860600 }, { "#": "41 LAWNDALE RD (11-0-121)", $: 643200 }, { "#": "42 LAWNDALE RD (6-0-232)", $: 849400 }, { "#": "5 LAWNDALE RD (10-0-23)", $: 831800 }, { "#": "6 LAWNDALE RD (10-0-28)", $: 831200 }, { "#": "8 LAWNDALE RD (10-0-29)", $: 675200 }, { "#": "14 LEDGE ST (18-0-52)", $: 597600 }, { "#": "15 LEDGE ST (18-0-61)", $: 564500 }, { "#": "17 LEDGE ST (18-0-60)", $: 576700 }, { "#": "3 LEDGE ST (18-0-63)", $: 817100 }, { "#": "30 LEDGE ST (18-0-53)", $: 684e3 }, { "#": "7 LEDGE ST (18-0-62)", $: 701600 }, { "#": "37 LEE ST (21-0-321)", $: 780900 }, { "#": "41 LEE ST (21-0-320)", $: 836600 }, { "#": "44 LEE ST (21-0-349)", $: 1089e3 }, { "#": "45 LEE ST (21-0-319)", $: 944600 }, { "#": "5 LEE ST (22-0-15)", $: 615600 }, { "#": "52 LEE ST (21-0-351)", $: 848600 }, { "#": "10 LEXINGTON ST (17-0-360)", $: 724600 }, { "#": "12 LEXINGTON ST (17-0-361)", $: 679100 }, { "#": "14 LEXINGTON ST (17-0-362)", $: 638200 }, { "#": "2 LEXINGTON ST (17-0-356)", $: 717900 }, { "#": "4 LEXINGTON ST (17-0-357)", $: 681300 }, { "#": "5 LEXINGTON ST (17-0-366)", $: 644600 }, { "#": "6 LEXINGTON ST (17-0-358)", $: 783300 }, { "#": "7 LEXINGTON ST (17-0-365)", $: 627100 }, { "#": "8 LEXINGTON ST (17-0-359)", $: 664600 }, { "#": "9 LEXINGTON ST (17-0-364)", $: 686200 }, { "#": "LINCOLN ST (18-0-488)", $: 647900 }, { "#": "11 LINCOLN ST (18-0-486)", $: 828400 }, { "#": "14 LINCOLN ST (18-0-496)", $: 657200 }, { "#": "16 LINCOLN ST (18-0-497)", $: 657500 }, { "#": "17 LINCOLN ST (18-0-478)", $: 636400 }, { "#": "18 LINCOLN ST (18-0-498)", $: 699400 }, { "#": "20 LINCOLN ST (18-0-499)", $: 799e3 }, { "#": "21 LINCOLN ST (18-0-475)", $: 740300 }, { "#": "23 LINCOLN ST (18-0-474)", $: 732600 }, { "#": "25 LINCOLN ST (18-0-473)", $: 678300 }, { "#": "26 LINCOLN ST (18-0-501)", $: 642700 }, { "#": "27 LINCOLN ST (18-0-471)", $: 630700 }, { "#": "28 LINCOLN ST (18-0-503)", $: 742800 }, { "#": "30 LINCOLN ST (18-0-502)", $: 875500 }, { "#": "32 LINCOLN ST (18-0-504)", $: 686e3 }, { "#": "34 LINCOLN ST (18-0-505)", $: 1115400 }, { "#": "35 LINCOLN ST (18-0-464)", $: 724500 }, { "#": "39 LINCOLN ST (18-0-463)", $: 591900 }, { "#": "4 LINCOLN ST (18-0-492)", $: 673200 }, { "#": "40 LINCOLN ST (18-0-508)", $: 706500 }, { "#": "41 LINCOLN ST (18-0-462)", $: 678600 }, { "#": "4 LAWNDALE RD (10-0-27)", $: 776e3 }, { "#": "42 LINCOLN ST (18-0-509)", $: 487100 }, { "#": "43 LINCOLN ST (18-0-461)", $: 608700 }, { "#": "44 LINCOLN ST (18-0-510)", $: 580400 }, { "#": "53 LINCOLN ST (18-0-157)", $: 692500 }, { "#": "55 LINCOLN ST (18-0-156)", $: 609300 }, { "#": "58 LINCOLN ST (18-0-146)", $: 661600 }, { "#": "59 LINCOLN ST (18-0-154)", $: 563400 }, { "#": "6 LINCOLN ST (18-0-493)", $: 785e3 }, { "#": "60 LINCOLN ST (18-0-147)", $: 771300 }, { "#": "61 LINCOLN ST (18-0-153)", $: 549900 }, { "#": "63 LINCOLN ST (18-0-152)", $: 569100 }, { "#": "7 LINCOLN ST (18-0-490)", $: 687400 }, { "#": "7 LINDEN ST (18-0-312)", $: 691600 }, { "#": "10 LINDENWOOD RD (17-0-305)", $: 389400 }, { "#": "30 LINDENWOOD RD (17-0-312A)", $: 820300 }, { "#": "34 LINDENWOOD RD (17-0-312)", $: 991100 }, { "#": "35 LINDENWOOD RD (17-0-420)", $: 540500 }, { "#": "38 LINDENWOOD RD (17-0-313)", $: 711300 }, { "#": "39 LINDENWOOD RD (17-0-418)", $: 853200 }, { "#": "40 LINDENWOOD RD (17-0-314)", $: 684600 }, { "#": "41 LINDENWOOD RD (17-0-417)", $: 856600 }, { "#": "42 LINDENWOOD RD (17-0-325)", $: 719100 }, { "#": "43 LINDENWOOD RD (17-0-391)", $: 855300 }, { "#": "44 LINDENWOOD RD (17-0-326)", $: 916400 }, { "#": "45 LINDENWOOD RD (17-0-390)", $: 813400 }, { "#": "46 LINDENWOOD RD (17-0-327)", $: 882200 }, { "#": "47 LINDENWOOD RD (17-0-344)", $: 856200 }, { "#": "49 LINDENWOOD RD (17-0-343)", $: 619800 }, { "#": "50 LINDENWOOD RD (17-0-328)", $: 828e3 }, { "#": "51 LINDENWOOD RD (17-0-331)", $: 767900 }, { "#": "52 LINDENWOOD RD (17-0-330)", $: 651300 }, { "#": "54 LINDENWOOD RD (17-0-250)", $: 790900 }, { "#": "56 LINDENWOOD RD (17-0-251)", $: 859500 }, { "#": "58 LINDENWOOD RD (17-0-253A)", $: 1049300 }, { "#": "1 LONGBOW RD (6-0-126)", $: 844e3 }, { "#": "10 LONGBOW RD (1-0-5)", $: 744200 }, { "#": "11 LONGBOW RD (1-0-14)", $: 827700 }, { "#": "12 LONGBOW RD (1-0-6)", $: 88e4 }, { "#": "15 LONGBOW RD (1-0-13)", $: 778600 }, { "#": "17 LONGBOW RD (1-0-11)", $: 820700 }, { "#": "18 LONGBOW RD (1-0-7)", $: 294200 }, { "#": "19 LONGBOW RD (1-0-10)", $: 822e3 }, { "#": "2 LONGBOW RD (6-0-125)", $: 741300 }, { "#": "3 LONGBOW RD (1-0-18)", $: 768800 }, { "#": "4 LONGBOW RD (1-0-2)", $: 911200 }, { "#": "5 LONGBOW RD (1-0-17)", $: 720400 }, { "#": "6 LONGBOW RD (1-0-3)", $: 781900 }, { "#": "7 LONGBOW RD (1-0-16)", $: 699400 }, { "#": "8 LONGBOW RD (1-0-4)", $: 758900 }, { "#": "9 LONGBOW RD (1-0-15)", $: 1179100 }, { "#": "42 LINCOLN ST (18-0-509)", $: 487100 }, { "#": "31 LOTUS AVE (2-0-31)", $: 704700 }, { "#": "38 LOTUS AVE (2-0-33A)", $: 627800 }, { "#": "10 LUCY ST (14-0-113)", $: 639100 }, { "#": "11 LUCY ST (14-0-105)", $: 585800 }, { "#": "12 LUCY ST (14-0-114)", $: 708400 }, { "#": "15 LUCY ST (14-0-104)", $: 535400 }, { "#": "3 LUCY ST (14-0-109)", $: 816800 }, { "#": "4 LUCY ST (14-0-110)", $: 705900 }, { "#": "5 LUCY ST (14-0-108)", $: 748400 }, { "#": "6 LUCY ST (14-0-111)", $: 658700 }, { "#": "7 LUCY ST (14-0-107)", $: 690900 }, { "#": "8 LUCY ST (14-0-112)", $: 837500 }, { "#": "9 LUCY ST (14-0-106)", $: 760100 }, { "#": "24 LYNN FELLS PKWY (4-0-35)", $: 674e3 }, { "#": "26 LYNN FELLS PKWY (4-0-36)", $: 1044500 }, { "#": "28 LYNN FELLS PKWY (4-0-39)", $: 782800 }, { "#": "34 LYNN FELLS PKWY (4-0-38)", $: 850500 }, { "#": "38 LYNN FELLS PKWY (4-0-44A)", $: 800900 }, { "#": "4 LYNN FELLS PKWY (4-0-29)", $: 787600 }, { "#": "40 LYNN FELLS PKWY (4-0-44)", $: 906100 }, { "#": "6 LYNN FELLS PKWY (4-0-30)", $: 585e3 }, { "#": "101 MACARTHUR RD (6-0-13)", $: 949300 }, { "#": "102 MACARTHUR RD (6-0-225)", $: 975400 }, { "#": "103 MACARTHUR RD (6-0-12)", $: 733700 }, { "#": "105 MACARTHUR RD (6-0-11)", $: 759400 }, { "#": "107 MACARTHUR RD (6-0-10)", $: 595200 }, { "#": "108 MACARTHUR RD (6-0-226)", $: 1047100 }, { "#": "111 MACARTHUR RD (6-0-3A)", $: 923900 }, { "#": "112 MACARTHUR RD (6-0-227)", $: 920400 }, { "#": "114 MACARTHUR RD (6-0-228)", $: 955700 }, { "#": "115 MACARTHUR RD (6-0-1)", $: 665400 }, { "#": "116 MACARTHUR RD (5-0-30)", $: 822500 }, { "#": "117 MACARTHUR RD (5-0-28A)", $: 968800 }, { "#": "118 MACARTHUR RD (5-0-31)", $: 791500 }, { "#": "120 MACARTHUR RD (10-0-39B)", $: 773400 }, { "#": "4 MACARTHUR RD (7-0-136)", $: 728400 }, { "#": "40 MACARTHUR RD (6-0-184)", $: 525e3 }, { "#": "44 MACARTHUR RD (6-0-185)", $: 577100 }, { "#": "46 MACARTHUR RD (6-0-186)", $: 703600 }, { "#": "48 MACARTHUR RD (6-0-187)", $: 572400 }, { "#": "50 MACARTHUR RD (6-0-189)", $: 720700 }, { "#": "54 MACARTHUR RD (6-0-190)", $: 750600 }, { "#": "66 MACARTHUR RD (6-0-200)", $: 587900 }, { "#": "68 MACARTHUR RD (6-0-201)", $: 694900 }, { "#": "75 MACARTHUR RD (6-0-62)", $: 619800 }, { "#": "77 MACARTHUR RD (6-0-61)", $: 838500 }, { "#": "79 MACARTHUR RD (6-0-60)", $: 699300 }, { "#": "80 MACARTHUR RD (6-0-211)", $: 782300 }, { "#": "84 MACARTHUR RD (6-0-215)", $: 648300 }, { "#": "85 MACARTHUR RD (6-0-22)", $: 790200 }, { "#": "31 LOTUS AVE (2-0-31)", $: 704700 }, { "#": "86 MACARTHUR RD (6-0-216)", $: 667e3 }, { "#": "87 MACARTHUR RD (6-0-21)", $: 1026500 }, { "#": "91 MACARTHUR RD (6-0-18)", $: 864400 }, { "#": "95 MACARTHUR RD (6-0-16)", $: 687100 }, { "#": "96 MACARTHUR RD (6-0-223)", $: 933100 }, { "#": "97 MACARTHUR RD (6-0-15)", $: 643400 }, { "#": "98 MACARTHUR RD (6-0-224)", $: 943700 }, { "#": "99 MACARTHUR RD (6-0-14)", $: 785800 }, { "#": "1 MACONE CIR (9-0-106)", $: 955500 }, { "#": "2 MACONE CIR (9-0-102)", $: 844400 }, { "#": "3 MACONE CIR (9-0-105)", $: 905800 }, { "#": "4 MACONE CIR (9-0-103)", $: 797700 }, { "#": "5 MACONE CIR (9-0-104)", $: 913800 }, { "#": "6 MACONE CIR (9-0-103A)", $: 1020100 }, { "#": "7 MACONE CIR (9-0-103B)", $: 1012600 }, { "#": "10 MAGNOLIA TRL (16-0-308)", $: 563900 }, { "#": "12 MAGNOLIA TRL (16-0-309)", $: 876200 }, { "#": "2 MAGNOLIA TRL (16-0-304)", $: 675900 }, { "#": "4 MAGNOLIA TRL (16-0-305)", $: 668300 }, { "#": "6 MAGNOLIA TRL (16-0-306)", $: 859200 }, { "#": "8 MAGNOLIA TRL (16-0-307)", $: 766100 }, { "#": "128 MAIN ST (11-0-294)", $: 807800 }, { "#": "128 MAIN ST (11-0-295)", $: 480300 }, { "#": "128 MAIN ST (11-0-296)", $: 498700 }, { "#": "128 MAIN ST (11-0-297)", $: 599300 }, { "#": "130 MAIN ST (16-0-243)", $: 591600 }, { "#": "518 MAIN ST (18-0-264)", $: 682700 }, { "#": "521 MAIN ST (18-0-279)", $: 757300 }, { "#": "522 MAIN ST (18-0-265)", $: 488800 }, { "#": "523 MAIN ST (18-0-278)", $: 761600 }, { "#": "524 MAIN ST (18-0-266)", $: 470800 }, { "#": "526 MAIN ST (18-0-267)", $: 508100 }, { "#": "528 MAIN ST (18-0-268)", $: 555800 }, { "#": "530 MAIN ST (18-0-269)", $: 502800 }, { "#": "531 MAIN ST (19-0-280)", $: 713e3 }, { "#": "532 MAIN ST (19-0-282)", $: 660600 }, { "#": "540 MAIN ST (19-0-293)", $: 798700 }, { "#": "544 MAIN ST (19-0-295)", $: 932500 }, { "#": "546 MAIN ST (19-0-296)", $: 1334100 }, { "#": "547 MAIN ST (19-0-275)", $: 1019200 }, { "#": "550 MAIN ST (19-0-297)", $: 640100 }, { "#": "556 MAIN ST (19-0-299)", $: 1006300 }, { "#": "558 MAIN ST (19-0-301)", $: 654e3 }, { "#": "560 MAIN ST (19-0-302)", $: 773400 }, { "#": "566 MAIN ST (19-0-303)", $: 680800 }, { "#": "567 MAIN ST (19-0-269)", $: 540100 }, { "#": "569 MAIN ST (19-0-268)", $: 622e3 }, { "#": "57 MAIN ST (16-0-229)", $: 564500 }, { "#": "570 MAIN ST (19-0-304)", $: 651600 }, { "#": "571 MAIN ST (19-0-267)", $: 533900 }, { "#": "86 MACARTHUR RD (6-0-216)", $: 667e3 }, { "#": "576 MAIN ST (19-0-305)", $: 630800 }, { "#": "580 MAIN ST (19-0-307)", $: 638800 }, { "#": "583 MAIN ST (19-0-261)", $: 506500 }, { "#": "592 MAIN ST (19-0-311)", $: 637e3 }, { "#": "594 MAIN ST (19-0-312)", $: 654600 }, { "#": "612 MAIN ST (19-0-319)", $: 820500 }, { "#": "18 MAPLE ST (18-0-455)", $: 724200 }, { "#": "22 MAPLE ST (18-0-456)", $: 605700 }, { "#": "28 MAPLE ST (18-0-511)", $: 742700 }, { "#": "30 MAPLE ST (18-0-513)", $: 600900 }, { "#": "32 MAPLE ST (18-0-563)", $: 649200 }, { "#": "33 MAPLE ST (18-0-105)", $: 578100 }, { "#": "34 MAPLE ST (18-0-564)", $: 806400 }, { "#": "35 MAPLE ST (18-0-104)", $: 777500 }, { "#": "37 MAPLE ST (18-0-103)", $: 721900 }, { "#": "38 MAPLE ST (18-0-566)", $: 660800 }, { "#": "39 MAPLE ST (18-0-102)", $: 822e3 }, { "#": "41 MAPLE ST (18-0-101)", $: 865400 }, { "#": "42 MAPLE ST (18-0-568)", $: 581300 }, { "#": "43 MAPLE ST (18-0-100)", $: 731e3 }, { "#": "44 MAPLE ST (18-0-569)", $: 768e3 }, { "#": "45 MAPLE ST (18-0-99)", $: 640900 }, { "#": "46 MAPLE ST (18-0-51)", $: 654700 }, { "#": "50 MAPLE ST (18-0-63A)", $: 847200 }, { "#": "60 MAPLE ST (23-0-41)", $: 663500 }, { "#": "62 MAPLE ST (23-0-42)", $: 614700 }, { "#": "8 MAPLE ST (18-0-427)", $: 526e3 }, { "#": "100 MARBLE ST (18-0-360)", $: 680700 }, { "#": "103 MARBLE ST (18-0-392)", $: 655200 }, { "#": "104 MARBLE ST (18-0-361)", $: 743e3 }, { "#": "108 MARBLE ST (18-0-362)", $: 641300 }, { "#": "114 MARBLE ST (18-0-391)", $: 566200 }, { "#": "118 MARBLE ST (18-0-648)", $: 892200 }, { "#": "130 MARBLE ST (18-0-656)", $: 560700 }, { "#": "131 MARBLE ST (18-0-3)", $: 721600 }, { "#": "135 MARBLE ST (18-0-2)", $: 1052300 }, { "#": "138 MARBLE ST (18-0-657)", $: 679500 }, { "#": "139 MARBLE ST (18-0-1)", $: 576500 }, { "#": "140 MARBLE ST (18-0-668)", $: 583500 }, { "#": "143 MARBLE ST (23-0-154)", $: 657600 }, { "#": "15 MARBLE ST (18-0-330)", $: 622100 }, { "#": "157 MARBLE ST (23-0-152)", $: 1090600 }, { "#": "34 MARBLE ST (18-0-337)", $: 608300 }, { "#": "44 MARBLE ST (18-0-349)", $: 693300 }, { "#": "45 MARBLE ST (18-0-401)", $: 747900 }, { "#": "50 MARBLE ST (18-0-350)", $: 457400 }, { "#": "58 MARBLE ST (18-0-353)", $: 749700 }, { "#": "64 MARBLE ST (18-0-354)", $: 681e3 }, { "#": "68 MARBLE ST (18-0-355)", $: 766900 }, { "#": "71 MARBLE ST (18-0-398)", $: 811700 }, { "#": "576 MAIN ST (19-0-305)", $: 630800 }, { "#": "72 MARBLE ST (18-0-356)", $: 531100 }, { "#": "74 MARBLE ST (18-0-357)", $: 748800 }, { "#": "84 MARBLE ST (18-0-358)", $: 838800 }, { "#": "92 MARBLE ST (18-0-359)", $: 711e3 }, { "#": "93 MARBLE ST (18-0-394)", $: 567500 }, { "#": "2 MARDIN LN (2-0-375)", $: 999300 }, { "#": "3 MARDIN LN (2-0-378)", $: 1033800 }, { "#": "4 MARDIN LN (2-0-376)", $: 1009e3 }, { "#": "5 MARDIN LN (2-0-377)", $: 993400 }, { "#": "10 MARGARET RD (21-0-45)", $: 869900 }, { "#": "11 MARGARET RD (21-0-51)", $: 722900 }, { "#": "12 MARGARET RD (21-0-46)", $: 633900 }, { "#": "14 MARGARET RD (21-0-47)", $: 749700 }, { "#": "15 MARGARET RD (21-0-50)", $: 649300 }, { "#": "16 MARGARET RD (21-0-48)", $: 1065600 }, { "#": "17 MARGARET RD (21-0-49)", $: 700100 }, { "#": "19 MARGARET RD (20-0-26)", $: 571200 }, { "#": "2 MARGARET RD (21-0-41)", $: 1121e3 }, { "#": "3 MARGARET RD (21-0-55)", $: 715700 }, { "#": "4 MARGARET RD (21-0-42)", $: 766300 }, { "#": "5 MARGARET RD (21-0-54)", $: 771400 }, { "#": "6 MARGARET RD (21-0-43)", $: 873100 }, { "#": "7 MARGARET RD (21-0-53)", $: 729e3 }, { "#": "8 MARGARET RD (21-0-44)", $: 706500 }, { "#": "9 MARGARET RD (21-0-52)", $: 662400 }, { "#": "10 MARIE AVE (11-0-22)", $: 667400 }, { "#": "11 MARIE AVE (11-0-24)", $: 706300 }, { "#": "15 MARIE AVE (11-0-23)", $: 828e3 }, { "#": "3 MARIE AVE (11-0-28)", $: 600200 }, { "#": "4 MARIE AVE (11-0-19)", $: 645200 }, { "#": "5 MARIE AVE (11-0-27)", $: 654400 }, { "#": "6 MARIE AVE (11-0-20)", $: 773e3 }, { "#": "7 MARIE AVE (11-0-26)", $: 616800 }, { "#": "8 MARIE AVE (11-0-21)", $: 720200 }, { "#": "9 MARIE AVE (11-0-25)", $: 662600 }, { "#": "1 MARION ST (2-0-74)", $: 976600 }, { "#": "2 MARION ST (2-0-66)", $: 876100 }, { "#": "4 MARION ST (2-0-66A)", $: 1204100 }, { "#": "1 MARSHALL RD (11-0-125)", $: 809100 }, { "#": "3 MARSHALL RD (11-0-124)", $: 646300 }, { "#": "4 MARSHALL RD (11-0-108)", $: 799600 }, { "#": "5 MARSHALL RD (11-0-123)", $: 770500 }, { "#": "6 MARSHALL RD (11-0-109)", $: 843800 }, { "#": "7 MARSHALL RD (11-0-122)", $: 898e3 }, { "#": "8 MARSHALL RD (11-0-110)", $: 903800 }, { "#": "3 MARTIN LOUIS WAY (3-0-194E)", $: 866500 }, { "#": "4 MARTIN LOUIS WAY (3-0-194A)", $: 1268500 }, { "#": "5 MARTIN LOUIS WAY (3-0-194D)", $: 1096100 }, { "#": "6 MARTIN LOUIS WAY (3-0-194B)", $: 923e3 }, { "#": "8 MARTIN LOUIS WAY (3-0-194C)", $: 908500 }, { "#": "72 MARBLE ST (18-0-356)", $: 531100 }, { "#": "1 MARZINO LN (7-0-64B)", $: 865800 }, { "#": "2 MARZINO LN (7-0-64A)", $: 830400 }, { "#": "3 MARZINO LN (7-0-64)", $: 880100 }, { "#": "1 MAURIELLO DR (19-0-177)", $: 961e3 }, { "#": "11 MAURIELLO DR (19-0-177E)", $: 1085900 }, { "#": "12 MAURIELLO DR (19-0-177P)", $: 1260500 }, { "#": "14 MAURIELLO DR (19-0-177N)", $: 1018600 }, { "#": "15 MAURIELLO DR (19-0-177F)", $: 1184900 }, { "#": "16 MAURIELLO DR (19-0-177M)", $: 1082900 }, { "#": "17 MAURIELLO DR (19-0-177G)", $: 1029500 }, { "#": "18 MAURIELLO DR (19-0-177L)", $: 1048e3 }, { "#": "19 MAURIELLO DR (19-0-177H)", $: 1010700 }, { "#": "2 MAURIELLO DR (19-0-177W)", $: 998e3 }, { "#": "20 MAURIELLO DR (19-0-177K)", $: 1076800 }, { "#": "21 MAURIELLO DR (19-0-177I)", $: 1210200 }, { "#": "23 MAURIELLO DR (19-0-177J)", $: 935e3 }, { "#": "3 MAURIELLO DR (19-0-177A)", $: 972400 }, { "#": "4 MAURIELLO DR (19-0-177V)", $: 998500 }, { "#": "6 MAURIELLO DR (19-0-177U)", $: 963400 }, { "#": "7 MAURIELLO DR (19-0-177C)", $: 912100 }, { "#": "9 MAURIELLO DR (19-0-177D)", $: 1085700 }, { "#": "10 MAYFLOWER DR (6-0-47)", $: 849300 }, { "#": "11 MAYFLOWER DR (6-0-38)", $: 770700 }, { "#": "12 MAYFLOWER DR (6-0-48)", $: 890800 }, { "#": "14 MAYFLOWER DR (6-0-49)", $: 792200 }, { "#": "15 MAYFLOWER DR (6-0-37)", $: 779500 }, { "#": "17 MAYFLOWER DR (6-0-36)", $: 747600 }, { "#": "19 MAYFLOWER DR (6-0-35)", $: 747200 }, { "#": "2 MAYFLOWER DR (6-0-43)", $: 754800 }, { "#": "3 MAYFLOWER DR (6-0-42)", $: 908200 }, { "#": "4 MAYFLOWER DR (6-0-44)", $: 716e3 }, { "#": "5 MAYFLOWER DR (6-0-41)", $: 934700 }, { "#": "6 MAYFLOWER DR (6-0-45)", $: 778e3 }, { "#": "7 MAYFLOWER DR (6-0-40)", $: 876300 }, { "#": "8 MAYFLOWER DR (6-0-46)", $: 882900 }, { "#": "9 MAYFLOWER DR (6-0-39)", $: 784300 }, { "#": "4 MEADOW RD (18-0-367)", $: 918800 }, { "#": "10 MELBA LN (7-0-243)", $: 656300 }, { "#": "12 MELBA LN (7-0-244)", $: 742500 }, { "#": "15 MELBA LN (7-0-249)", $: 670900 }, { "#": "17 MELBA LN (7-0-248)", $: 676500 }, { "#": "19 MELBA LN (7-0-247)", $: 675600 }, { "#": "20 MELBA LN (1-0-305)", $: 916100 }, { "#": "21 MELBA LN (1-0-302)", $: 871400 }, { "#": "23 MELBA LN (1-0-303)", $: 906500 }, { "#": "25 MELBA LN (1-0-304)", $: 932700 }, { "#": "3 MELBA LN (7-0-254)", $: 69e4 }, { "#": "5 MELBA LN (7-0-253)", $: 907500 }, { "#": "7 MELBA LN (7-0-252)", $: 662800 }, { "#": "9 MELBA LN (7-0-251)", $: 655400 }, { "#": "1 MARZINO LN (7-0-64B)", $: 865800 }, { "#": "10 MERROW LN (12-0-316)", $: 631e3 }, { "#": "2 MERROW LN (12-0-312)", $: 668e3 }, { "#": "4 MERROW LN (12-0-313)", $: 713600 }, { "#": "5 MERROW LN (12-0-319)", $: 682800 }, { "#": "6 MERROW LN (12-0-314)", $: 514500 }, { "#": "7 MERROW LN (12-0-318)", $: 892600 }, { "#": "8 MERROW LN (12-0-315)", $: 712e3 }, { "#": "9 MERROW LN (12-0-317)", $: 794300 }, { "#": "3 MICAH`S POND WAY (17-0-1A)", $: 1122300 }, { "#": "4 MICAH`S POND WAY (22-0-22)", $: 1111400 }, { "#": "6 MICAH`S POND WAY (22-0-22B)", $: 1063400 }, { "#": "3 MICHAEL CIR (1-0-252)", $: 907800 }, { "#": "4 MICHAEL CIR (1-0-248)", $: 872500 }, { "#": "5 MICHAEL CIR (1-0-251)", $: 1006400 }, { "#": "6 MICHAEL CIR (1-0-249)", $: 826800 }, { "#": "7 MICHAEL CIR (1-0-250)", $: 833900 }, { "#": "10 MIDDLE ST (13-0-484)", $: 573900 }, { "#": "14 MIDDLE ST (13-0-485)", $: 835500 }, { "#": "15 MIDDLE ST (13-0-480)", $: 577500 }, { "#": "19 MIDDLE ST (13-0-479)", $: 773800 }, { "#": "1 MIDDLESEX RD (18-0-275)", $: 617900 }, { "#": "11 MIDDLESEX RD (18-0-274)", $: 740800 }, { "#": "14 MIDDLESEX RD (13-0-309)", $: 919400 }, { "#": "15 MIDDLESEX RD (18-0-273)", $: 629e3 }, { "#": "18 MIDDLESEX RD (13-0-310)", $: 717400 }, { "#": "19 MIDDLESEX RD (18-0-272)", $: 619600 }, { "#": "2 MIDDLESEX RD (13-0-307)", $: 661600 }, { "#": "23 MIDDLESEX RD (18-0-271)", $: 605e3 }, { "#": "24 MIDDLESEX RD (13-0-312)", $: 772300 }, { "#": "27 MIDDLESEX RD (18-0-270)", $: 650200 }, { "#": "30 MIDDLESEX RD (13-0-315)", $: 8e5 }, { "#": "35 MIDDLESEX RD (19-0-285)", $: 601e3 }, { "#": "49 MIDDLESEX RD (19-0-288)", $: 651100 }, { "#": "54 MIDDLESEX RD (14-0-23)", $: 577300 }, { "#": "55 MIDDLESEX RD (19-0-287)", $: 585500 }, { "#": "56 MIDDLESEX RD (14-0-24)", $: 486600 }, { "#": "57 MIDDLESEX RD (19-0-286)", $: 618300 }, { "#": "58 MIDDLESEX RD (14-0-25)", $: 498800 }, { "#": "61 MIDDLESEX RD (19-0-286A)", $: 955e3 }, { "#": "8 MIDDLESEX RD (13-0-308)", $: 731200 }, { "#": "10 MINOT ST (18-0-173)", $: 494e3 }, { "#": "12 MINOT ST (18-0-174)", $: 423e3 }, { "#": "14 MINOT ST (18-0-175)", $: 527200 }, { "#": "15 MINOT ST (18-0-169)", $: 576500 }, { "#": "79 MINOT ST (18-0-171)", $: 483800 }, { "#": "26 MONTVALE AVE (17-0-210)", $: 436900 }, { "#": "28 MONTVALE AVE (17-0-211)", $: 577200 }, { "#": "44 MONTVALE AVE (17-0-237)", $: 651400 }, { "#": "53 MONTVALE AVE (17-0-254)", $: 689e3 }, { "#": "10 MORGAN AVE (6-0-26)", $: 848800 }, { "#": "10 MERROW LN (12-0-316)", $: 631e3 }, { "#": "11 MORGAN AVE (6-0-56)", $: 759100 }, { "#": "12 MORGAN AVE (6-0-27)", $: 796800 }, { "#": "14 MORGAN AVE (6-0-28)", $: 766200 }, { "#": "15 MORGAN AVE (6-0-55)", $: 849200 }, { "#": "16 MORGAN AVE (6-0-29)", $: 862100 }, { "#": "17 MORGAN AVE (6-0-54)", $: 812200 }, { "#": "18 MORGAN AVE (6-0-30)", $: 928100 }, { "#": "19 MORGAN AVE (6-0-53)", $: 865500 }, { "#": "3 MORGAN AVE (6-0-59)", $: 745500 }, { "#": "4 MORGAN AVE (6-0-23)", $: 810700 }, { "#": "6 MORGAN AVE (6-0-24)", $: 781300 }, { "#": "7 MORGAN AVE (6-0-58)", $: 731400 }, { "#": "8 MORGAN AVE (6-0-25)", $: 740400 }, { "#": "9 MORGAN AVE (6-0-57)", $: 855e3 }, { "#": "3 MORRISON AVE (5-0-14)", $: 1131200 }, { "#": "31 MORRISON AVE (5-0-10)", $: 966900 }, { "#": "33 MORRISON AVE (5-0-10A)", $: 1063500 }, { "#": "48 MORRISON AVE (5-0-12)", $: 888900 }, { "#": "10 MOULTON AVE (15-0-20)", $: 429200 }, { "#": "3 MOULTON AVE (15-0-28)", $: 568600 }, { "#": "8 MOULTON AVE (15-0-21)", $: 447900 }, { "#": "9 MOULTON AVE (15-0-24)", $: 637600 }, { "#": "12 MT VERNON ST (7-0-29)", $: 742300 }, { "#": "2 MT VERNON ST (12-0-136)", $: 965900 }, { "#": "3 MT VERNON ST (12-0-141)", $: 692e3 }, { "#": "6 MT VERNON ST (12-0-137)", $: 979800 }, { "#": "7 MT VERNON ST (12-0-140)", $: 597100 }, { "#": "8 MT VERNON ST (12-0-138)", $: 588e3 }, { "#": "9 MT VERNON ST (7-0-26)", $: 752300 }, { "#": "11 MURDOCK RD (14-0-243)", $: 945300 }, { "#": "12 MURDOCK RD (14-0-244)", $: 850500 }, { "#": "15 MURDOCK RD (14-0-242)", $: 950200 }, { "#": "18 MURDOCK RD (14-0-276)", $: 877900 }, { "#": "20 MURDOCK RD (14-0-277)", $: 818600 }, { "#": "21 MURDOCK RD (14-0-282)", $: 890900 }, { "#": "22 MURDOCK RD (14-0-278)", $: 880100 }, { "#": "23 MURDOCK RD (14-0-281)", $: 900200 }, { "#": "24 MURDOCK RD (14-0-279)", $: 1017400 }, { "#": "25 MURDOCK RD (14-0-280)", $: 812800 }, { "#": "26 MURDOCK RD (14-0-47C)", $: 941300 }, { "#": "27 MURDOCK RD (14-0-47B)", $: 1086700 }, { "#": "28 MURDOCK RD (14-0-47D)", $: 1444300 }, { "#": "29 MURDOCK RD (14-0-47A)", $: 1242e3 }, { "#": "30 MURDOCK RD (14-0-47)", $: 1243100 }, { "#": "10 MYOPIA RD (16-0-104)", $: 594e3 }, { "#": "11 MYOPIA RD (16-0-97)", $: 654200 }, { "#": "12 MYOPIA RD (16-0-105)", $: 750100 }, { "#": "14 MYOPIA RD (16-0-106)", $: 610800 }, { "#": "15 MYOPIA RD (16-0-96)", $: 901e3 }, { "#": "16 MYOPIA RD (16-0-107)", $: 960400 }, { "#": "11 MORGAN AVE (6-0-56)", $: 759100 }, { "#": "17 MYOPIA RD (16-0-114)", $: 732500 }, { "#": "18 MYOPIA RD (16-0-108)", $: 817400 }, { "#": "19 MYOPIA RD (16-0-113)", $: 696500 }, { "#": "2 MYOPIA RD (16-0-100)", $: 624200 }, { "#": "20 MYOPIA RD (16-0-109)", $: 674e3 }, { "#": "22 MYOPIA RD (16-0-110)", $: 627900 }, { "#": "23 MYOPIA RD (16-0-112)", $: 846800 }, { "#": "24 MYOPIA RD (16-0-111)", $: 764400 }, { "#": "25 MYOPIA RD (16-0-153)", $: 833700 }, { "#": "26 MYOPIA RD (16-0-152)", $: 858500 }, { "#": "27 MYOPIA RD (16-0-175)", $: 605600 }, { "#": "28 MYOPIA RD (16-0-176)", $: 543100 }, { "#": "4 MYOPIA RD (16-0-101)", $: 703700 }, { "#": "5 MYOPIA RD (16-0-99)", $: 553e3 }, { "#": "6 MYOPIA RD (16-0-102)", $: 656e3 }, { "#": "8 MYOPIA RD (16-0-103)", $: 759100 }, { "#": "9 MYOPIA RD (16-0-98)", $: 980600 }, { "#": "11 MYRTLE ST (7-0-16)", $: 667500 }, { "#": "12 MYRTLE ST (7-0-39)", $: 671700 }, { "#": "14 MYRTLE ST (7-0-40)", $: 572300 }, { "#": "15 MYRTLE ST (7-0-15)", $: 587e3 }, { "#": "17 MYRTLE ST (7-0-14)", $: 671700 }, { "#": "18 MYRTLE ST (7-0-41)", $: 672200 }, { "#": "19 MYRTLE ST (7-0-13)", $: 649e3 }, { "#": "2 MYRTLE ST (12-0-178)", $: 851800 }, { "#": "20 MYRTLE ST (7-0-42)", $: 772e3 }, { "#": "21 MYRTLE ST (7-0-12)", $: 634600 }, { "#": "3 MYRTLE ST (12-0-181)", $: 576700 }, { "#": "4 MYRTLE ST (12-0-179)", $: 616500 }, { "#": "5 MYRTLE ST (12-0-180)", $: 726100 }, { "#": "6 MYRTLE ST (12-0-170)", $: 605600 }, { "#": "7 MYRTLE ST (12-0-169)", $: 704e3 }, { "#": "9 MYRTLE ST (7-0-18)", $: 664700 }, { "#": "1 NEWCOMB RD (3-0-183)", $: 764400 }, { "#": "11 NEWCOMB RD (3-0-181)", $: 787700 }, { "#": "12 NEWCOMB RD (4-0-1)", $: 785600 }, { "#": "16 NEWCOMB RD (4-0-2)", $: 771300 }, { "#": "17 NEWCOMB RD (3-0-180)", $: 643e3 }, { "#": "2 NEWCOMB RD (3-0-176)", $: 685500 }, { "#": "20 NEWCOMB RD (4-0-3)", $: 798400 }, { "#": "21 NEWCOMB RD (3-0-179)", $: 754800 }, { "#": "24 NEWCOMB RD (4-0-4)", $: 813100 }, { "#": "25 NEWCOMB RD (4-0-26)", $: 673e3 }, { "#": "28 NEWCOMB RD (4-0-5)", $: 909600 }, { "#": "29 NEWCOMB RD (4-0-25)", $: 656200 }, { "#": "30 NEWCOMB RD (4-0-7)", $: 871e3 }, { "#": "32 NEWCOMB RD (4-0-9)", $: 992500 }, { "#": "33 NEWCOMB RD (4-0-24)", $: 738500 }, { "#": "37 NEWCOMB RD (4-0-23)", $: 739500 }, { "#": "40 NEWCOMB RD (4-0-10)", $: 994400 }, { "#": "17 MYOPIA RD (16-0-114)", $: 732500 }, { "#": "41 NEWCOMB RD (4-0-22)", $: 72e4 }, { "#": "45 NEWCOMB RD (4-0-21)", $: 756800 }, { "#": "49 NEWCOMB RD (4-0-20)", $: 623600 }, { "#": "5 NEWCOMB RD (3-0-182)", $: 696200 }, { "#": "53 NEWCOMB RD (4-0-19)", $: 601400 }, { "#": "57 NEWCOMB RD (4-0-18)", $: 1086100 }, { "#": "58 NEWCOMB RD (4-0-11)", $: 793500 }, { "#": "59 NEWCOMB RD (4-0-17)", $: 839900 }, { "#": "6 NEWCOMB RD (3-0-177)", $: 729300 }, { "#": "60 NEWCOMB RD (4-0-12)", $: 838e3 }, { "#": "61 NEWCOMB RD (4-0-16)", $: 721700 }, { "#": "62 NEWCOMB RD (4-0-13)", $: 831e3 }, { "#": "63 NEWCOMB RD (4-0-15)", $: 864100 }, { "#": "64 NEWCOMB RD (4-0-14)", $: 894500 }, { "#": "8 NEWCOMB RD (3-0-178)", $: 718700 }, { "#": "1 NINA ST (3-0-65)", $: 950900 }, { "#": "2 NINA ST (3-0-58)", $: 1005700 }, { "#": "3 NINA ST (3-0-64)", $: 598700 }, { "#": "4 NINA ST (3-0-59)", $: 814900 }, { "#": "5 NINA ST (3-0-63)", $: 526600 }, { "#": "7 NINA ST (3-0-62)", $: 904400 }, { "#": "10 NIXON LN (11-0-39)", $: 787500 }, { "#": "14 NIXON LN (11-0-38)", $: 877e3 }, { "#": "15 NIXON LN (11-0-33)", $: 815500 }, { "#": "16 NIXON LN (11-0-37)", $: 885200 }, { "#": "17 NIXON LN (11-0-34)", $: 802400 }, { "#": "18 NIXON LN (11-0-36)", $: 1016800 }, { "#": "19 NIXON LN (11-0-35)", $: 781400 }, { "#": "7 NIXON LN (11-0-30)", $: 877600 }, { "#": "8 NIXON LN (11-0-40)", $: 932200 }, { "#": "9 NIXON LN (11-0-31)", $: 831300 }, { "#": "100 NORTH AVE (3-0-208)", $: 762900 }, { "#": "45 NORTH AVE (3-0-104)", $: 458400 }, { "#": "46 NORTH AVE (3-0-105)", $: 421400 }, { "#": "49 NORTH AVE (3-0-147)", $: 779200 }, { "#": "53 NORTH AVE (3-0-145)", $: 698600 }, { "#": "91 NORTH AVE (3-0-309)", $: 675400 }, { "#": "99 NORTH AVE (3-0-308)", $: 681200 }, { "#": "5 NORTH BORDER RD (19-0-201)", $: 544700 }, { "#": "7 NORTH BORDER RD (19-0-200)", $: 680200 }, { "#": "9 NORTH BORDER RD (19-0-199)", $: 647700 }, { "#": "103 NORTH ST (16-0-9)", $: 918800 }, { "#": "107 NORTH ST (16-0-8)", $: 685700 }, { "#": "109 NORTH ST (16-0-7)", $: 726500 }, { "#": "112 NORTH ST (16-0-58D)", $: 873100 }, { "#": "114 NORTH ST (16-0-58)", $: 972800 }, { "#": "120 NORTH ST (16-0-59)", $: 659900 }, { "#": "121 NORTH ST (16-0-5)", $: 699800 }, { "#": "122 NORTH ST (16-0-60)", $: 659100 }, { "#": "125 NORTH ST (16-0-4)", $: 663300 }, { "#": "41 NEWCOMB RD (4-0-22)", $: 72e4 }, { "#": "128 NORTH ST (16-0-124)", $: 789600 }, { "#": "129 NORTH ST (16-0-3)", $: 744800 }, { "#": "130 NORTH ST (16-0-125)", $: 716e3 }, { "#": "131 NORTH ST (16-0-2)", $: 1394100 }, { "#": "137 NORTH ST (16-0-1A)", $: 838e3 }, { "#": "139 NORTH ST (16-0-1)", $: 1129700 }, { "#": "146 NORTH ST (16-0-362)", $: 735700 }, { "#": "150 NORTH ST (16-0-363)", $: 643900 }, { "#": "152 NORTH ST (21-0-100A)", $: 904600 }, { "#": "160 NORTH ST (21-0-101)", $: 664800 }, { "#": "168 NORTH ST (21-0-105)", $: 594e3 }, { "#": "174 NORTH ST (21-0-106)", $: 733500 }, { "#": "175 NORTH ST (21-0-88B)", $: 799600 }, { "#": "178 NORTH ST (21-0-107)", $: 768100 }, { "#": "179 NORTH ST (21-0-88C)", $: 1184500 }, { "#": "181 NORTH ST (21-0-88)", $: 1161800 }, { "#": "184 NORTH ST (21-0-120)", $: 889800 }, { "#": "185 NORTH ST (21-0-88D)", $: 1083200 }, { "#": "186 NORTH ST (21-0-121)", $: 696600 }, { "#": "188 NORTH ST (21-0-123)", $: 616600 }, { "#": "189 NORTH ST (21-0-87)", $: 936800 }, { "#": "193 NORTH ST (21-0-86)", $: 979800 }, { "#": "196 NORTH ST (21-0-142)", $: 618300 }, { "#": "197 NORTH ST (21-0-85)", $: 720700 }, { "#": "200 NORTH ST (21-0-143)", $: 827500 }, { "#": "203 NORTH ST (21-0-2)", $: 751700 }, { "#": "204 NORTH ST (21-0-144)", $: 738800 }, { "#": "205 NORTH ST (21-0-1B)", $: 889600 }, { "#": "207 NORTH ST (21-0-453A)", $: 895e3 }, { "#": "208 NORTH ST (21-0-145)", $: 799100 }, { "#": "212 NORTH ST (21-0-146)", $: 698200 }, { "#": "216 NORTH ST (21-0-166)", $: 762800 }, { "#": "220 NORTH ST (21-0-167)", $: 764900 }, { "#": "224 NORTH ST (21-0-168)", $: 675700 }, { "#": "231 NORTH ST (25-0-9A1)", $: 924e3 }, { "#": "235 NORTH ST (25-0-9A2)", $: 910200 }, { "#": "238 NORTH ST (21-0-190)", $: 638500 }, { "#": "242 NORTH ST (25-0-8)", $: 689100 }, { "#": "243 NORTH ST (25-0-9A3)", $: 922500 }, { "#": "244 NORTH ST (25-0-9)", $: 734900 }, { "#": "67 NORTH ST (15-0-67)", $: 794900 }, { "#": "74 NORTH ST (16-0-18)", $: 638800 }, { "#": "75 NORTH ST (16-0-15)", $: 661600 }, { "#": "78 NORTH ST (16-0-19)", $: 649700 }, { "#": "82 NORTH ST (16-0-20)", $: 578400 }, { "#": "88 NORTH ST (16-0-30)", $: 647500 }, { "#": "89 NORTH ST (16-0-14)", $: 684800 }, { "#": "90 NORTH ST (16-0-31)", $: 555900 }, { "#": "91 NORTH ST (16-0-13)", $: 64e4 }, { "#": "93 NORTH ST (16-0-12)", $: 561800 }, { "#": "128 NORTH ST (16-0-124)", $: 789600 }, { "#": "94 NORTH ST (16-0-32)", $: 753300 }, { "#": "95 NORTH ST (16-0-11)", $: 667700 }, { "#": "96 NORTH ST (16-0-34)", $: 733400 }, { "#": "98 NORTH ST (16-0-35)", $: 774100 }, { "#": "99 NORTH ST (16-0-10)", $: 524600 }, { "#": "2 NORTHGATE RD (16-0-56)", $: 732100 }, { "#": "6 NORTHGATE RD (16-0-57)", $: 647900 }, { "#": "1 NORVAL AVE (7-0-153)", $: 621200 }, { "#": "11 NORVAL AVE (7-0-150)", $: 62e4 }, { "#": "12 NORVAL AVE (7-0-158)", $: 795700 }, { "#": "15 NORVAL AVE (7-0-149)", $: 579300 }, { "#": "18 NORVAL AVE (7-0-159)", $: 563300 }, { "#": "20 NORVAL AVE (7-0-160)", $: 535500 }, { "#": "21 NORVAL AVE (7-0-148)", $: 521900 }, { "#": "30 NORVAL AVE (7-0-162)", $: 714200 }, { "#": "34 NORVAL AVE (7-0-163)", $: 706500 }, { "#": "37 NORVAL AVE (7-0-147)", $: 717300 }, { "#": "38 NORVAL AVE (7-0-164)", $: 565600 }, { "#": "41 NORVAL AVE (7-0-146)", $: 582400 }, { "#": "44 NORVAL AVE (7-0-165)", $: 704200 }, { "#": "5 NORVAL AVE (7-0-152)", $: 561900 }, { "#": "54 NORVAL AVE (7-0-84)", $: 903600 }, { "#": "57 NORVAL AVE (7-0-91)", $: 744200 }, { "#": "59 NORVAL AVE (7-0-90)", $: 839500 }, { "#": "60 NORVAL AVE (7-0-86)", $: 983200 }, { "#": "61 NORVAL AVE (7-0-90A)", $: 942200 }, { "#": "64 NORVAL AVE (7-0-55A)", $: 1069800 }, { "#": "68 NORVAL AVE (7-0-55)", $: 904900 }, { "#": "7 NORVAL AVE (7-0-151)", $: 685e3 }, { "#": "72 NORVAL AVE (7-0-55B)", $: 958400 }, { "#": "3 NOTTINGHAM WAY (16-0-374B)", $: 974600 }, { "#": "4 NOTTINGHAM WAY (16-0-370)", $: 1008e3 }, { "#": "5 NOTTINGHAM WAY (16-0-374A)", $: 972800 }, { "#": "6 NOTTINGHAM WAY (16-0-371)", $: 913900 }, { "#": "7 NOTTINGHAM WAY (16-0-374)", $: 1184100 }, { "#": "8 NOTTINGHAM WAY (16-0-372)", $: 953900 }, { "#": "9 NOTTINGHAM WAY (16-0-373)", $: 1000300 }, { "#": "1 O`GRADY CIR (13-0-538)", $: 1037800 }, { "#": "2 O`GRADY CIR (8-0-223)", $: 1520100 }, { "#": "3 O`GRADY CIR (13-0-537)", $: 1213600 }, { "#": "4 O`GRADY CIR (8-0-224)", $: 1246600 }, { "#": "5 O`GRADY CIR (13-0-536)", $: 1198400 }, { "#": "10 OAK RIDGE RD (16-0-292)", $: 602900 }, { "#": "11 OAK RIDGE RD (16-0-294)", $: 831800 }, { "#": "12 OAK RIDGE RD (16-0-293)", $: 909900 }, { "#": "3 OAK RIDGE RD (16-0-297)", $: 665200 }, { "#": "4 OAK RIDGE RD (16-0-289)", $: 637400 }, { "#": "5 OAK RIDGE RD (16-0-296)", $: 850200 }, { "#": "6 OAK RIDGE RD (16-0-290)", $: 811500 }, { "#": "8 OAK RIDGE RD (16-0-291)", $: 723e3 }, { "#": "94 NORTH ST (16-0-32)", $: 753300 }, { "#": "9 OAK RIDGE RD (16-0-295)", $: 730700 }, { "#": "1 OAK ST (17-0-90)", $: 750700 }, { "#": "11 OAK ST (17-0-85)", $: 644300 }, { "#": "15 OAK ST (17-0-84)", $: 661700 }, { "#": "17 OAK ST (17-0-83)", $: 687900 }, { "#": "18 OAK ST (17-0-69)", $: 884500 }, { "#": "19 OAK ST (17-0-82)", $: 694600 }, { "#": "2 OAK ST (17-0-62)", $: 775e3 }, { "#": "20 OAK ST (17-0-70)", $: 636800 }, { "#": "21 OAK ST (17-0-81)", $: 652800 }, { "#": "22 OAK ST (17-0-71)", $: 556400 }, { "#": "23 OAK ST (17-0-80)", $: 627500 }, { "#": "24 OAK ST (17-0-72)", $: 636600 }, { "#": "25 OAK ST (17-0-79)", $: 576500 }, { "#": "27 OAK ST (17-0-78)", $: 675800 }, { "#": "28 OAK ST (17-0-73)", $: 528500 }, { "#": "29 OAK ST (17-0-77)", $: 554500 }, { "#": "30 OAK ST (17-0-74)", $: 644100 }, { "#": "31 OAK ST (16-0-280)", $: 636200 }, { "#": "32 OAK ST (17-0-75)", $: 643300 }, { "#": "33 OAK ST (16-0-279)", $: 760700 }, { "#": "34 OAK ST (17-0-76)", $: 665700 }, { "#": "35 OAK ST (16-0-278)", $: 703600 }, { "#": "36 OAK ST (16-0-281)", $: 624300 }, { "#": "37 OAK ST (16-0-277)", $: 704900 }, { "#": "39 OAK ST (16-0-276)", $: 736500 }, { "#": "4 OAK ST (17-0-64)", $: 650500 }, { "#": "40 OAK ST (16-0-282)", $: 1606600 }, { "#": "41 OAK ST (16-0-275)", $: 602300 }, { "#": "44 OAK ST (16-0-283)", $: 1435900 }, { "#": "46 OAK ST (16-0-284)", $: 750100 }, { "#": "48 OAK ST (16-0-286)", $: 833300 }, { "#": "5 OAK ST (17-0-88)", $: 581200 }, { "#": "52 OAK ST (16-0-288)", $: 733100 }, { "#": "53 OAK ST (16-0-186)", $: 1112400 }, { "#": "54 OAK ST (16-0-298)", $: 630100 }, { "#": "56 OAK ST (16-0-300)", $: 814600 }, { "#": "57 OAK ST (16-0-185)", $: 716700 }, { "#": "6 OAK ST (17-0-65)", $: 907700 }, { "#": "62 OAK ST (16-0-301)", $: 705500 }, { "#": "63 OAK ST (16-0-183)", $: 575900 }, { "#": "64 OAK ST (16-0-302)", $: 628500 }, { "#": "65 OAK ST (16-0-182)", $: 847e3 }, { "#": "66 OAK ST (16-0-303)", $: 826200 }, { "#": "67 OAK ST (16-0-181)", $: 619700 }, { "#": "69 OAK ST (16-0-180)", $: 537900 }, { "#": "7 OAK ST (17-0-87)", $: 644300 }, { "#": "71 OAK ST (16-0-179)", $: 631100 }, { "#": "73 OAK ST (16-0-178)", $: 617e3 }, { "#": "75 OAK ST (16-0-177)", $: 786500 }, { "#": "9 OAK RIDGE RD (16-0-295)", $: 730700 }, { "#": "8 OAK ST (17-0-66)", $: 823e3 }, { "#": "81 OAK ST (16-0-174)", $: 667900 }, { "#": "82 OAK ST (16-0-340)", $: 729100 }, { "#": "83 OAK ST (16-0-173)", $: 797800 }, { "#": "84 OAK ST (16-0-341)", $: 577400 }, { "#": "85 OAK ST (16-0-172)", $: 628800 }, { "#": "86 OAK ST (16-0-342)", $: 724100 }, { "#": "87 OAK ST (16-0-171)", $: 872500 }, { "#": "88 OAK ST (16-0-343)", $: 865e3 }, { "#": "89 OAK ST (16-0-170)", $: 522200 }, { "#": "9 OAK ST (17-0-86)", $: 794700 }, { "#": "90 OAK ST (16-0-344)", $: 594500 }, { "#": "91 OAK ST (16-0-169)", $: 952200 }, { "#": "92 OAK ST (16-0-345)", $: 668600 }, { "#": "93 OAK ST (16-0-168)", $: 574200 }, { "#": "94 OAK ST (16-0-346)", $: 706500 }, { "#": "95 OAK ST (16-0-167)", $: 627200 }, { "#": "96 OAK ST (16-0-347)", $: 640200 }, { "#": "97 OAK ST (16-0-166)", $: 888600 }, { "#": "3 ORCHARD PL (4-0-62)", $: 611600 }, { "#": "10 ORCHARD ST (19-0-70)", $: 453400 }, { "#": "5 ORIENTAL CT (12-0-355)", $: 415e3 }, { "#": "153 ORRIS ST (3-0-164)", $: 1011500 }, { "#": "155 ORRIS ST (3-0-162)", $: 849500 }, { "#": "156 ORRIS ST (3-0-166)", $: 398400 }, { "#": "158 ORRIS ST (3-0-169)", $: 770300 }, { "#": "160 ORRIS ST (3-0-170)", $: 831500 }, { "#": "1 OVERLOOK RD (14-0-291)", $: 936600 }, { "#": "3 OVERLOOK RD (14-0-290)", $: 975900 }, { "#": "4 OVERLOOK RD (14-0-285)", $: 977800 }, { "#": "5 OVERLOOK RD (14-0-289)", $: 988400 }, { "#": "6 OVERLOOK RD (14-0-286)", $: 907200 }, { "#": "7 OVERLOOK RD (14-0-288)", $: 1081300 }, { "#": "8 OVERLOOK RD (14-0-287)", $: 940700 }, { "#": "2 PAMELA CIR (2-0-292)", $: 956600 }, { "#": "3 PAMELA CIR (2-0-296)", $: 888700 }, { "#": "4 PAMELA CIR (2-0-293)", $: 781700 }, { "#": "5 PAMELA CIR (2-0-295)", $: 889700 }, { "#": "7 PAMELA CIR (2-0-294)", $: 973800 }, { "#": "45 PARK AVE (5-0-17)", $: 1269e3 }, { "#": "46 PARK AVE (5-0-22)", $: 1080900 }, { "#": "50 PARK AVE (5-0-25)", $: 852800 }, { "#": "54 PARK AVE (5-0-28)", $: 885e3 }, { "#": "56 PARK AVE (5-0-29)", $: 817800 }, { "#": "59 PARK AVE (5-0-36)", $: 630400 }, { "#": "60 PARK AVE (10-0-39A)", $: 920500 }, { "#": "61 PARK AVE (5-0-35)", $: 627800 }, { "#": "63 PARK AVE (5-0-33)", $: 753400 }, { "#": "64 PARK AVE (10-0-39)", $: 732200 }, { "#": "65 PARK AVE (5-0-32)", $: 793e3 }, { "#": "8 OAK ST (17-0-66)", $: 823e3 }, { "#": "66 PARK AVE (10-0-40)", $: 850300 }, { "#": "67 PARK AVE (10-0-49)", $: 851300 }, { "#": "68 PARK AVE (10-0-41)", $: 767500 }, { "#": "69 PARK AVE (10-0-48)", $: 694600 }, { "#": "70 PARK AVE (10-0-42)", $: 951100 }, { "#": "71 PARK AVE (10-0-47)", $: 803800 }, { "#": "72 PARK AVE (10-0-43)", $: 815100 }, { "#": "103 PARK ST (18-0-16)", $: 667e3 }, { "#": "109 PARK ST (18-0-15)", $: 671100 }, { "#": "11 PARK ST (18-0-50)", $: 658100 }, { "#": "112 PARK ST (18-0-633)", $: 951400 }, { "#": "113 PARK ST (18-0-14)", $: 664300 }, { "#": "116 PARK ST (18-0-635)", $: 846500 }, { "#": "119 PARK ST (18-0-13)", $: 649e3 }, { "#": "123 PARK ST (18-0-12)", $: 624300 }, { "#": "13 PARK ST (18-0-49)", $: 678300 }, { "#": "131 PARK ST (18-0-6)", $: 823500 }, { "#": "132 PARK ST (18-0-645)", $: 769200 }, { "#": "139 PARK ST (18-0-5)", $: 586800 }, { "#": "140 PARK ST (18-0-646)", $: 464e3 }, { "#": "147 PARK ST (18-0-4)", $: 675400 }, { "#": "171 PARK ST (18-0-655)", $: 679500 }, { "#": "173 PARK ST (18-0-654)", $: 571900 }, { "#": "174 PARK ST (18-0-390)", $: 715e3 }, { "#": "177 PARK ST (18-0-653)", $: 639900 }, { "#": "178 PARK ST (18-0-389)", $: 724800 }, { "#": "18 PARK ST (18-0-570)", $: 725200 }, { "#": "182 PARK ST (18-0-388)", $: 744600 }, { "#": "183 PARK ST (18-0-652)", $: 619400 }, { "#": "187 PARK ST (18-0-651)", $: 621600 }, { "#": "188 PARK ST (18-0-387)", $: 707600 }, { "#": "192 PARK ST (18-0-386)", $: 692600 }, { "#": "193 PARK ST (18-0-650)", $: 634e3 }, { "#": "196 PARK ST (18-0-385A)", $: 825100 }, { "#": "197 PARK ST (18-0-649)", $: 912800 }, { "#": "20 PARK ST (18-0-571)", $: 552300 }, { "#": "202 PARK ST (19-0-11)", $: 684600 }, { "#": "203 PARK ST (19-0-8)", $: 555200 }, { "#": "206 PARK ST (19-0-12)", $: 704100 }, { "#": "207 PARK ST (19-0-9)", $: 531e3 }, { "#": "210 PARK ST (19-0-13)", $: 691500 }, { "#": "211 PARK ST (19-0-10)", $: 523200 }, { "#": "212 PARK ST (19-0-14)", $: 671600 }, { "#": "215 PARK ST (19-0-3)", $: 723100 }, { "#": "216 PARK ST (19-0-17)", $: 707100 }, { "#": "217 PARK ST (19-0-2)", $: 692400 }, { "#": "220 PARK ST (19-0-18)", $: 579100 }, { "#": "222 PARK ST (19-0-19)", $: 547600 }, { "#": "226 PARK ST (19-0-68)", $: 714800 }, { "#": "239 PARK ST (19-0-1)", $: 660800 }, { "#": "66 PARK AVE (10-0-40)", $: 850300 }, { "#": "26 PARK ST (18-0-585)", $: 508400 }, { "#": "31 PARK ST (18-0-45)", $: 583200 }, { "#": "35 PARK ST (18-0-44)", $: 650400 }, { "#": "36 PARK ST (18-0-586)", $: 528e3 }, { "#": "57 PARK ST (18-0-32)", $: 510300 }, { "#": "60 PARK ST (18-0-624)", $: 656800 }, { "#": "61 PARK ST (18-0-31)", $: 694800 }, { "#": "62 PARK ST (18-0-625)", $: 574500 }, { "#": "65 PARK ST (18-0-30)", $: 653500 }, { "#": "74 PARK ST (18-0-627)", $: 680100 }, { "#": "80 PARK ST (18-0-628)", $: 887900 }, { "#": "85 PARK ST (18-0-19)", $: 832600 }, { "#": "86 PARK ST (18-0-629)", $: 788200 }, { "#": "15 PARKWAY RD (19-0-329)", $: 614600 }, { "#": "16 PARKWAY RD (14-0-181)", $: 798e3 }, { "#": "19 PARKWAY RD (19-0-328)", $: 677700 }, { "#": "23 PARKWAY RD (19-0-327)", $: 606100 }, { "#": "24 PARKWAY RD (14-0-184)", $: 728800 }, { "#": "29 PARKWAY RD (19-0-326)", $: 606900 }, { "#": "31 PARKWAY RD (19-0-325)", $: 706600 }, { "#": "32 PARKWAY RD (14-0-185)", $: 661400 }, { "#": "35 PARKWAY RD (19-0-324)", $: 520600 }, { "#": "36 PARKWAY RD (14-0-186)", $: 682300 }, { "#": "44 PARKWAY RD (14-0-188)", $: 660800 }, { "#": "1 PATRICK CIR (7-0-480)", $: 778400 }, { "#": "2 PATRICK CIR (7-0-475)", $: 910900 }, { "#": "3 PATRICK CIR (7-0-479)", $: 954e3 }, { "#": "4 PATRICK CIR (7-0-260)", $: 861200 }, { "#": "5 PATRICK CIR (7-0-478)", $: 923e3 }, { "#": "6 PATRICK CIR (7-0-476)", $: 813500 }, { "#": "8 PATRICK CIR (7-0-477)", $: 817300 }, { "#": "1 PATRIOT RD (8-0-57)", $: 794300 }, { "#": "10 PATRIOT RD (8-0-216)", $: 823300 }, { "#": "3 PATRIOT RD (8-0-219)", $: 792100 }, { "#": "4 PATRIOT RD (8-0-214)", $: 774900 }, { "#": "5 PATRIOT RD (8-0-218)", $: 781700 }, { "#": "6 PATRIOT RD (8-0-215)", $: 876600 }, { "#": "7 PATRIOT RD (8-0-217)", $: 772800 }, { "#": "8 PATRIOT RD (8-0-56)", $: 826300 }, { "#": "1 PAUL MICHAEL WAY (4-0-138)", $: 869400 }, { "#": "3 PAUL MICHAEL WAY (4-0-137)", $: 920800 }, { "#": "4 PAUL MICHAEL WAY (4-0-136)", $: 913100 }, { "#": "3 PAULA AVE (20-0-33)", $: 804100 }, { "#": "4 PAULA AVE (20-0-61)", $: 967800 }, { "#": "5 PAULA AVE (20-0-32)", $: 843900 }, { "#": "1 PEABODY RD (19-0-291)", $: 628900 }, { "#": "10 PEABODY RD (14-0-1)", $: 634600 }, { "#": "14 PEABODY RD (14-0-3)", $: 747600 }, { "#": "15 PEABODY RD (14-0-19+)", $: 802200 }, { "#": "16 PEABODY RD (14-0-4)", $: 560800 }, { "#": "26 PARK ST (18-0-585)", $: 508400 }, { "#": "17 PEABODY RD (14-0-18)", $: 900200 }, { "#": "5 PEABODY RD (19-0-290)", $: 675e3 }, { "#": "7 PEABODY RD (19-0-289)", $: 573700 }, { "#": "11 PEARL ST (13-0-371)", $: 709900 }, { "#": "12 PEARL ST (13-0-369)", $: 793100 }, { "#": "13 PEARL ST (13-0-413A)", $: 725600 }, { "#": "2 PEARL ST (13-0-365)", $: 606100 }, { "#": "10 PEBBLE PL (2-0-289)", $: 881200 }, { "#": "11 PEBBLE PL (2-0-303)", $: 828e3 }, { "#": "12 PEBBLE PL (2-0-290)", $: 816500 }, { "#": "14 PEBBLE PL (2-0-291)", $: 913800 }, { "#": "16 PEBBLE PL (2-0-297)", $: 910800 }, { "#": "18 PEBBLE PL (2-0-298)", $: 888e3 }, { "#": "2 PEBBLE PL (2-0-93)", $: 852800 }, { "#": "20 PEBBLE PL (2-0-299)", $: 1163300 }, { "#": "3 PEBBLE PL (2-0-96)", $: 937e3 }, { "#": "4 PEBBLE PL (2-0-94)", $: 757400 }, { "#": "5 PEBBLE PL (2-0-300)", $: 1001800 }, { "#": "6 PEBBLE PL (2-0-95)", $: 839200 }, { "#": "7 PEBBLE PL (2-0-301)", $: 877200 }, { "#": "8 PEBBLE PL (2-0-288)", $: 986100 }, { "#": "9 PEBBLE PL (2-0-302)", $: 832100 }, { "#": "10 PENNY LN (7-0-111)", $: 625300 }, { "#": "17 PENNY LN (7-0-130)", $: 833600 }, { "#": "19 PENNY LN (7-0-128)", $: 554400 }, { "#": "20 PENNY LN (7-0-112)", $: 583700 }, { "#": "22 PENNY LN (7-0-113)", $: 597800 }, { "#": "25 PENNY LN (7-0-127)", $: 1065300 }, { "#": "26 PENNY LN (7-0-114)", $: 617200 }, { "#": "31 PENNY LN (7-0-126)", $: 672900 }, { "#": "32 PENNY LN (7-0-115)", $: 638200 }, { "#": "37 PENNY LN (7-0-125)", $: 917100 }, { "#": "38 PENNY LN (7-0-116)", $: 573300 }, { "#": "42 PENNY LN (7-0-117)", $: 608100 }, { "#": "43 PENNY LN (7-0-124)", $: 516100 }, { "#": "48 PENNY LN (7-0-118)", $: 800900 }, { "#": "49 PENNY LN (7-0-123)", $: 799900 }, { "#": "55 PENNY LN (7-0-122)", $: 822300 }, { "#": "56 PENNY LN (7-0-119)", $: 565700 }, { "#": "61 PENNY LN (7-0-121)", $: 633600 }, { "#": "64 PENNY LN (7-0-120)", $: 547200 }, { "#": "15 PENTO RD (25-0-25)", $: 839100 }, { "#": "17 PENTO RD (25-0-26)", $: 785600 }, { "#": "19 PENTO RD (25-0-27)", $: 766300 }, { "#": "1 PERKINS ST (3-0-337)", $: 629200 }, { "#": "10 PERKINS ST (3-0-139)", $: 731700 }, { "#": "14 PERKINS ST (3-0-141)", $: 694300 }, { "#": "17 PERKINS ST (3-0-310)", $: 606700 }, { "#": "18 PERKINS ST (3-0-142)", $: 657400 }, { "#": "20 PERKINS ST (3-0-143)", $: 874500 }, { "#": "17 PEABODY RD (14-0-18)", $: 900200 }, { "#": "24 PERKINS ST (3-0-144)", $: 651500 }, { "#": "27 PERKINS ST (3-0-207)", $: 536200 }, { "#": "28 PERKINS ST (3-0-148)", $: 742400 }, { "#": "29 PERKINS ST (3-0-206)", $: 615300 }, { "#": "3 PERKINS ST (3-0-336)", $: 683100 }, { "#": "30 PERKINS ST (3-0-149)", $: 635500 }, { "#": "31 PERKINS ST (3-0-205)", $: 731900 }, { "#": "32 PERKINS ST (3-0-150)", $: 784800 }, { "#": "33 PERKINS ST (3-0-204)", $: 741e3 }, { "#": "34 PERKINS ST (3-0-151)", $: 862600 }, { "#": "36 PERKINS ST (3-0-152)", $: 761900 }, { "#": "40 PERKINS ST (3-0-153)", $: 703600 }, { "#": "41 PERKINS ST (3-0-203)", $: 729900 }, { "#": "42 PERKINS ST (3-0-154)", $: 705600 }, { "#": "44 PERKINS ST (3-0-155)", $: 680100 }, { "#": "45 PERKINS ST (3-0-202)", $: 888700 }, { "#": "47 PERKINS ST (3-0-200)", $: 678400 }, { "#": "5 PERKINS ST (3-0-335)", $: 795600 }, { "#": "50 PERKINS ST (3-0-156)", $: 758400 }, { "#": "51 PERKINS ST (3-0-198)", $: 771300 }, { "#": "53 PERKINS ST (3-0-196)", $: 543400 }, { "#": "54 PERKINS ST (3-0-158)", $: 740600 }, { "#": "58 PERKINS ST (3-0-159)", $: 860700 }, { "#": "59 PERKINS ST (3-0-195)", $: 701300 }, { "#": "6 PERKINS ST (3-0-138)", $: 666800 }, { "#": "60 PERKINS ST (3-0-160)", $: 616900 }, { "#": "63 PERKINS ST (3-0-193)", $: 650700 }, { "#": "65 PERKINS ST (3-0-192)", $: 811800 }, { "#": "67 PERKINS ST (3-0-189)", $: 716100 }, { "#": "7 PERKINS ST (3-0-311)", $: 615800 }, { "#": "73 PERKINS ST (3-0-186)", $: 761200 }, { "#": "75 PERKINS ST (3-0-185)", $: 664300 }, { "#": "76 PERKINS ST (3-0-171)", $: 642100 }, { "#": "80 PERKINS ST (3-0-172)", $: 565100 }, { "#": "90 PERKINS ST (3-0-173)", $: 791800 }, { "#": "96 PERKINS ST (3-0-174)", $: 470300 }, { "#": "1 PERSHING PL (13-0-247)", $: 749400 }, { "#": "2 PERSHING PL (13-0-250)", $: 595400 }, { "#": "3 PERSHING PL (13-0-248)", $: 593300 }, { "#": "4 PERSHING PL (13-0-254A)", $: 935900 }, { "#": "5 PERSHING PL (13-0-249)", $: 676100 }, { "#": "6 PERSHING PL (13-0-249A)", $: 732300 }, { "#": "3 PETERS DR (6-0-214)", $: 669600 }, { "#": "5 PETERS DR (6-0-213)", $: 771700 }, { "#": "6 PETERS DR (6-0-212)", $: 829200 }, { "#": "1 PHILIPS RD (4-0-81)", $: 727400 }, { "#": "10 PHILIPS RD (4-0-108)", $: 752700 }, { "#": "11 PHILIPS RD (4-0-76)", $: 709600 }, { "#": "12 PHILIPS RD (4-0-109)", $: 704700 }, { "#": "14 PHILIPS RD (4-0-110)", $: 760500 }, { "#": "24 PERKINS ST (3-0-144)", $: 651500 }, { "#": "15 PHILIPS RD (4-0-75)", $: 739100 }, { "#": "17 PHILIPS RD (4-0-74)", $: 668500 }, { "#": "19 PHILIPS RD (4-0-74A)", $: 1039500 }, { "#": "2 PHILIPS RD (4-0-104)", $: 729e3 }, { "#": "21 PHILIPS RD (4-0-73)", $: 783100 }, { "#": "3 PHILIPS RD (4-0-80)", $: 715700 }, { "#": "4 PHILIPS RD (4-0-105)", $: 787e3 }, { "#": "5 PHILIPS RD (4-0-79)", $: 776100 }, { "#": "6 PHILIPS RD (4-0-106)", $: 799500 }, { "#": "7 PHILIPS RD (4-0-78)", $: 801600 }, { "#": "8 PHILIPS RD (4-0-107)", $: 814400 }, { "#": "9 PHILIPS RD (4-0-77)", $: 845800 }, { "#": "48 PILGRIM RD (4-0-33)", $: 187600 }, { "#": "55 PILGRIM RD (4-0-31)", $: 675100 }, { "#": "11 PINE RIDGE RD (15-0-2)", $: 907300 }, { "#": "2 PINE RIDGE RD (15-0-57)", $: 681200 }, { "#": "3 PINE RIDGE RD (15-0-6)", $: 880600 }, { "#": "4 PINE RIDGE RD (15-0-58)", $: 910200 }, { "#": "5 PINE RIDGE RD (15-0-5)", $: 753300 }, { "#": "6 PINE RIDGE RD (15-0-59)", $: 1000400 }, { "#": "7 PINE RIDGE RD (15-0-4)", $: 858500 }, { "#": "8 PINE RIDGE RD (15-0-60)", $: 769300 }, { "#": "9 PINE RIDGE RD (15-0-3)", $: 1030300 }, { "#": "1 PINE ST (12-0-371)", $: 690200 }, { "#": "101 PINE ST (13-0-14)", $: 5e5 }, { "#": "12 PINE ST (13-0-37)", $: 552e3 }, { "#": "17 PINE ST (13-0-12)", $: 499100 }, { "#": "23 PINE ST (13-0-11)", $: 586800 }, { "#": "291 PINE ST (13-0-514)", $: 502600 }, { "#": "31 PINE ST (13-0-512)", $: 501700 }, { "#": "35 PINE ST (13-0-511)", $: 522900 }, { "#": "49 PINE ST (13-0-394)", $: 581900 }, { "#": "51 PINE ST (13-0-393)", $: 592200 }, { "#": "52 PINE ST (13-0-382)", $: 646600 }, { "#": "53 PINE ST (13-0-392)", $: 582200 }, { "#": "54 PINE ST (13-0-383)", $: 622100 }, { "#": "55 PINE ST (13-0-391)", $: 633100 }, { "#": "57 PINE ST (13-0-390)", $: 588100 }, { "#": "60 PINE ST (13-0-385)", $: 684700 }, { "#": "62 PINE ST (13-0-386)", $: 620900 }, { "#": "63 PINE ST (13-0-388)", $: 662700 }, { "#": "64 PINE ST (13-0-387)", $: 576400 }, { "#": "7 PINE ST (12-0-368)", $: 551800 }, { "#": "70 PINE ST (13-0-456)", $: 556500 }, { "#": "74 PINE ST (13-0-463)", $: 666200 }, { "#": "77 PINE ST (13-0-478)", $: 65e4 }, { "#": "8 PINE ST (12-0-362)", $: 615300 }, { "#": "87 PINE ST (13-0-467)", $: 669200 }, { "#": "10 PINEWOOD RD (3-0-345)", $: 657500 }, { "#": "14 PINEWOOD RD (3-0-323)", $: 609800 }, { "#": "15 PHILIPS RD (4-0-75)", $: 739100 }, { "#": "15 PINEWOOD RD (3-0-322)", $: 655e3 }, { "#": "3 PINEWOOD RD (3-0-349)", $: 769200 }, { "#": "5 PINEWOOD RD (3-0-348)", $: 721500 }, { "#": "9 PINEWOOD RD (3-0-347)", $: 760300 }, { "#": "10 PLAZA AVE (3-0-357)", $: 826700 }, { "#": "11 PLAZA AVE (3-0-361A)", $: 913600 }, { "#": "14 PLAZA AVE (3-0-358)", $: 1106100 }, { "#": "15 PLAZA AVE (3-0-361)", $: 857e3 }, { "#": "3 PLAZA AVE (3-0-365)", $: 957500 }, { "#": "6 PLAZA AVE (3-0-354)", $: 957200 }, { "#": "PLEASANT ST (13-0-145)", $: 670100 }, { "#": "23 PLEASANT ST (12-0-373)", $: 555700 }, { "#": "31 PLEASANT ST (12-0-357)", $: 634700 }, { "#": "33 PLEASANT ST (12-0-352)", $: 458100 }, { "#": "34 PLEASANT ST (12-0-377)", $: 1119600 }, { "#": "38 PLEASANT ST (12-0-378)", $: 1042800 }, { "#": "44 PLEASANT ST (12-0-344)", $: 553400 }, { "#": "45 PLEASANT ST (13-0-115)", $: 722500 }, { "#": "47 PLEASANT ST (13-0-114)", $: 663100 }, { "#": "49 PLEASANT ST (13-0-112)", $: 575100 }, { "#": "52 PLEASANT ST (12-0-347)", $: 755900 }, { "#": "53 PLEASANT ST (13-0-111)", $: 605900 }, { "#": "54 PLEASANT ST (13-0-116)", $: 716900 }, { "#": "55 PLEASANT ST (13-0-110)", $: 640300 }, { "#": "56 PLEASANT ST (13-0-117)", $: 529200 }, { "#": "57 PLEASANT ST (13-0-109)", $: 641900 }, { "#": "59 PLEASANT ST (13-0-108)", $: 723100 }, { "#": "6 PLEASANT ST (17-0-194)", $: 493100 }, { "#": "60 PLEASANT ST (13-0-132)", $: 716300 }, { "#": "65 PLEASANT ST (13-0-105)", $: 788e3 }, { "#": "67 PLEASANT ST (13-0-103)", $: 588100 }, { "#": "69 PLEASANT ST (13-0-99)", $: 573600 }, { "#": "72 PLEASANT ST (13-0-143)", $: 840200 }, { "#": "76 PLEASANT ST (13-0-146)", $: 742500 }, { "#": "77 PLEASANT ST (13-0-96)", $: 564700 }, { "#": "80 PLEASANT ST (13-0-147)", $: 474700 }, { "#": "86 PLEASANT ST (13-0-148)", $: 857200 }, { "#": "1 PLEASANT ST TRL (13-0-102)", $: 579700 }, { "#": "3 PLEASANT ST TRL (13-0-101)", $: 526500 }, { "#": "34 POMEWORTH ST (12-0-333)", $: 706300 }, { "#": "42 POMEWORTH ST (12-0-336)", $: 578500 }, { "#": "44 POMEWORTH ST (12-0-337)", $: 804800 }, { "#": "49 POMEWORTH ST (12-0-229)", $: 592200 }, { "#": "POND ST (13-0-442)", $: 469700 }, { "#": "100 POND ST (14-0-45)", $: 664100 }, { "#": "102 POND ST (14-0-46)", $: 632800 }, { "#": "105 POND ST (14-0-236)", $: 75e4 }, { "#": "106 POND ST (14-0-53A)", $: 569600 }, { "#": "107 POND ST (14-0-235)", $: 845600 }, { "#": "11 POND ST (13-0-357)", $: 732600 }, { "#": "15 PINEWOOD RD (3-0-322)", $: 655e3 }, { "#": "110 POND ST (14-0-54)", $: 642200 }, { "#": "111 POND ST (14-0-224)", $: 818300 }, { "#": "112 POND ST (14-0-55)", $: 601700 }, { "#": "114 POND ST (14-0-56)", $: 907800 }, { "#": "116 POND ST (14-0-57)", $: 663300 }, { "#": "117 POND ST (14-0-122)", $: 655500 }, { "#": "118 POND ST (14-0-58)", $: 538400 }, { "#": "119 POND ST (14-0-121)", $: 630400 }, { "#": "120 POND ST (14-0-59)", $: 539500 }, { "#": "121 POND ST (14-0-120)", $: 733500 }, { "#": "122 POND ST (14-0-60)", $: 680200 }, { "#": "123 POND ST (14-0-119)", $: 928100 }, { "#": "124 POND ST (14-0-61)", $: 801100 }, { "#": "125 POND ST (14-0-118)", $: 656e3 }, { "#": "126 POND ST (14-0-62)", $: 583700 }, { "#": "127 POND ST (14-0-117)", $: 558700 }, { "#": "128 POND ST (14-0-63)", $: 843900 }, { "#": "129 POND ST (14-0-116)", $: 560900 }, { "#": "130 POND ST (14-0-64)", $: 83e4 }, { "#": "131 POND ST (14-0-115)", $: 548700 }, { "#": "136 POND ST (14-0-87)", $: 734200 }, { "#": "140 POND ST (14-0-88)", $: 664800 }, { "#": "142 POND ST (14-0-89)", $: 774700 }, { "#": "144 POND ST (14-0-90)", $: 578600 }, { "#": "146 POND ST (14-0-91)", $: 604400 }, { "#": "148 POND ST (14-0-92)", $: 566900 }, { "#": "150 POND ST (14-0-93)", $: 688200 }, { "#": "152 POND ST (14-0-94)", $: 624400 }, { "#": "154 POND ST (14-0-95)", $: 608400 }, { "#": "18 POND ST (13-0-423)", $: 694400 }, { "#": "2 POND ST (13-0-352)", $: 560400 }, { "#": "20 POND ST (13-0-424)", $: 611500 }, { "#": "21 POND ST (13-0-447)", $: 617200 }, { "#": "23 POND ST (13-0-446)", $: 472600 }, { "#": "26 POND ST (13-0-426)", $: 526300 }, { "#": "28 POND ST (13-0-427)", $: 517400 }, { "#": "29 POND ST (13-0-443)", $: 588300 }, { "#": "3 POND ST (13-0-360)", $: 624e3 }, { "#": "30 POND ST (13-0-428)", $: 618100 }, { "#": "33 POND ST (13-0-440)", $: 516300 }, { "#": "34 POND ST (13-0-430)", $: 782300 }, { "#": "35 POND ST (13-0-439)", $: 597800 }, { "#": "36 POND ST (13-0-431)", $: 772100 }, { "#": "38 POND ST (13-0-432)", $: 727800 }, { "#": "4 POND ST (13-0-353)", $: 693e3 }, { "#": "40 POND ST (13-0-433)", $: 695800 }, { "#": "44 POND ST (13-0-324)", $: 656400 }, { "#": "47 POND ST (13-0-272)", $: 543600 }, { "#": "5 POND ST (13-0-359)", $: 533500 }, { "#": "50 POND ST (13-0-261)", $: 756600 }, { "#": "110 POND ST (14-0-54)", $: 642200 }, { "#": "52 POND ST (13-0-262)", $: 627700 }, { "#": "53 POND ST (13-0-271)", $: 688500 }, { "#": "54 POND ST (13-0-263)", $: 542100 }, { "#": "541 POND ST (13-0-264)", $: 630200 }, { "#": "55 POND ST (13-0-270)", $: 580100 }, { "#": "56 POND ST (13-0-265)", $: 761500 }, { "#": "58 POND ST (13-0-266)", $: 658400 }, { "#": "60 POND ST (13-0-267)", $: 634500 }, { "#": "66 POND ST (14-0-35)", $: 628100 }, { "#": "68 POND ST (14-0-36)", $: 656400 }, { "#": "70 POND ST (14-0-37)", $: 724900 }, { "#": "74 POND ST (14-0-38)", $: 1093700 }, { "#": "75 POND ST (14-0-31)", $: 762900 }, { "#": "79 POND ST (14-0-30)", $: 65e4 }, { "#": "8 POND ST (13-0-354)", $: 635600 }, { "#": "80 POND ST (14-0-39)", $: 1184400 }, { "#": "82 POND ST (14-0-40)", $: 550700 }, { "#": "83 POND ST (14-0-29)", $: 541600 }, { "#": "84 POND ST (14-0-41)", $: 609300 }, { "#": "85 POND ST (14-0-28)", $: 657800 }, { "#": "87 POND ST (14-0-27)", $: 680700 }, { "#": "9 POND ST (13-0-358)", $: 582700 }, { "#": "93 POND ST (14-0-239C)", $: 769900 }, { "#": "94 POND ST (14-0-42)", $: 844600 }, { "#": "95 POND ST (14-0-239)", $: 764200 }, { "#": "96 POND ST (14-0-43)", $: 740400 }, { "#": "97 POND ST (14-0-239B)", $: 776200 }, { "#": "98 POND ST (14-0-44)", $: 837800 }, { "#": "1 POPLAR ST (18-0-97)", $: 781900 }, { "#": "11 POPLAR ST (18-0-92)", $: 783600 }, { "#": "2 POPLAR ST (18-0-103A)", $: 592100 }, { "#": "3 POPLAR ST (18-0-96)", $: 728100 }, { "#": "5 POPLAR ST (18-0-95)", $: 705900 }, { "#": "7 POPLAR ST (18-0-94)", $: 785400 }, { "#": "9 POPLAR ST (18-0-93)", $: 740900 }, { "#": "11 PROSPECT ST (7-0-23)", $: 729500 }, { "#": "15 PROSPECT ST (7-0-22)", $: 715600 }, { "#": "17 PROSPECT ST (7-0-21)", $: 700900 }, { "#": "19 PROSPECT ST (7-0-20)", $: 515400 }, { "#": "2 PROSPECT ST (7-0-31)", $: 729700 }, { "#": "4 PROSPECT ST (7-0-32)", $: 1146800 }, { "#": "5 PROSPECT ST (7-0-25)", $: 687800 }, { "#": "7 PROSPECT ST (7-0-24)", $: 779e3 }, { "#": "8 PROSPECT ST (7-0-33)", $: 1029900 }, { "#": "10 RAFFERTY RD (18-0-65)", $: 738500 }, { "#": "2 RAFFERTY RD (17-0-247)", $: 549600 }, { "#": "4 RAFFERTY RD (17-0-246)", $: 550200 }, { "#": "6 RAFFERTY RD (17-0-245)", $: 641700 }, { "#": "8 RAFFERTY RD (17-0-244)", $: 551500 }, { "#": "10 RANDOLPH RD (21-0-129)", $: 1072800 }, { "#": "52 POND ST (13-0-262)", $: 627700 }, { "#": "11 RANDOLPH RD (21-0-137)", $: 805e3 }, { "#": "3 RANDOLPH RD (21-0-133)", $: 598100 }, { "#": "5 RANDOLPH RD (21-0-134)", $: 763900 }, { "#": "6 RANDOLPH RD (21-0-131)", $: 786700 }, { "#": "7 RANDOLPH RD (21-0-135)", $: 722400 }, { "#": "8 RANDOLPH RD (21-0-130)", $: 767100 }, { "#": "9 RANDOLPH RD (21-0-136)", $: 739900 }, { "#": "33 RAVINE RD (4-0-88)", $: 782600 }, { "#": "35 RAVINE RD (4-0-87)", $: 729700 }, { "#": "37 RAVINE RD (4-0-86)", $: 827400 }, { "#": "38 RAVINE RD (4-0-90)", $: 297100 }, { "#": "39 RAVINE RD (4-0-85)", $: 755700 }, { "#": "41 RAVINE RD (4-0-84)", $: 820200 }, { "#": "43 RAVINE RD (4-0-83)", $: 874700 }, { "#": "45 RAVINE RD (4-0-82)", $: 771e3 }, { "#": "46 RAVINE RD (4-0-91)", $: 831e3 }, { "#": "48 RAVINE RD (4-0-92)", $: 675100 }, { "#": "50 RAVINE RD (4-0-93)", $: 784300 }, { "#": "52 RAVINE RD (4-0-95)", $: 1026900 }, { "#": "11 RAYMOND RD (13-0-460)", $: 525600 }, { "#": "12 RAYMOND RD (13-0-459)", $: 551600 }, { "#": "3 RAYMOND RD (13-0-462)", $: 650700 }, { "#": "8 RAYMOND RD (13-0-458)", $: 615900 }, { "#": "9 RAYMOND RD (13-0-461)", $: 745700 }, { "#": "2 RAYNER CIR (2-0-136)", $: 718700 }, { "#": "3 RAYNER CIR (2-0-140)", $: 666500 }, { "#": "4 RAYNER CIR (2-0-137)", $: 676800 }, { "#": "5 RAYNER CIR (2-0-139)", $: 790900 }, { "#": "6 RAYNER CIR (2-0-138)", $: 761100 }, { "#": "1 REBECCA LN (7-0-489)", $: 869300 }, { "#": "10 REBECCA LN (7-0-485)", $: 1136600 }, { "#": "2 REBECCA LN (7-0-481)", $: 954200 }, { "#": "3 REBECCA LN (7-0-488)", $: 1076600 }, { "#": "4 REBECCA LN (7-0-482)", $: 961800 }, { "#": "5 REBECCA LN (7-0-487)", $: 1083300 }, { "#": "6 REBECCA LN (7-0-483)", $: 1084800 }, { "#": "7 REBECCA LN (7-0-486)", $: 1091400 }, { "#": "8 REBECCA LN (7-0-484)", $: 964300 }, { "#": "10 RHULAND RD (21-0-127)", $: 1143300 }, { "#": "12 RHULAND RD (21-0-128)", $: 778200 }, { "#": "3 RHULAND RD (21-0-141)", $: 823800 }, { "#": "4 RHULAND RD (21-0-124)", $: 769500 }, { "#": "5 RHULAND RD (21-0-140)", $: 736300 }, { "#": "6 RHULAND RD (21-0-125)", $: 1122200 }, { "#": "7 RHULAND RD (21-0-139)", $: 721400 }, { "#": "8 RHULAND RD (21-0-126)", $: 877100 }, { "#": "9 RHULAND RD (21-0-138)", $: 695500 }, { "#": "10 RICHARDSON RD (17-0-335)", $: 585300 }, { "#": "11 RICHARDSON RD (17-0-339)", $: 527500 }, { "#": "12 RICHARDSON RD (17-0-336)", $: 787200 }, { "#": "11 RANDOLPH RD (21-0-137)", $: 805e3 }, { "#": "15 RICHARDSON RD (17-0-338)", $: 583400 }, { "#": "17 RICHARDSON RD (17-0-337)", $: 722500 }, { "#": "2 RICHARDSON RD (17-0-332)", $: 764100 }, { "#": "5 RICHARDSON RD (17-0-342)", $: 648100 }, { "#": "6 RICHARDSON RD (17-0-333)", $: 755800 }, { "#": "7 RICHARDSON RD (17-0-341)", $: 874600 }, { "#": "8 RICHARDSON RD (17-0-334)", $: 7e5 }, { "#": "3 RITA RD (1-0-317)", $: 770800 }, { "#": "4 RITA RD (1-0-318)", $: 818200 }, { "#": "10 RIVERS LN (2-0-306)", $: 905400 }, { "#": "11 RIVERS LN (2-0-312)", $: 945500 }, { "#": "12 RIVERS LN (2-0-305)", $: 967200 }, { "#": "15 RIVERS LN (2-0-311)", $: 827300 }, { "#": "2 RIVERS LN (2-0-310)", $: 806800 }, { "#": "3 RIVERS LN (2-0-316)", $: 884700 }, { "#": "4 RIVERS LN (2-0-309)", $: 886e3 }, { "#": "5 RIVERS LN (2-0-315)", $: 784400 }, { "#": "6 RIVERS LN (2-0-308)", $: 930500 }, { "#": "7 RIVERS LN (2-0-314)", $: 859400 }, { "#": "8 RIVERS LN (2-0-307)", $: 1002600 }, { "#": "9 RIVERS LN (2-0-313)", $: 784100 }, { "#": "3 ROBERTS WAY (14-0-309)", $: 1039300 }, { "#": "4 ROBERTS WAY (14-0-306)", $: 877700 }, { "#": "6 ROBERTS WAY (14-0-307)", $: 873700 }, { "#": "8 ROBERTS WAY (14-0-308)", $: 1170600 }, { "#": "66 ROBIN HOOD RD (21-0-269A)", $: 929800 }, { "#": "68 ROBIN HOOD RD (21-0-269)", $: 960600 }, { "#": "71 ROBIN HOOD RD (16-0-357)", $: 722500 }, { "#": "72 ROBIN HOOD RD (21-0-271)", $: 661900 }, { "#": "73 ROBIN HOOD RD (16-0-356)", $: 1046600 }, { "#": "74 ROBIN HOOD RD (21-0-272)", $: 695300 }, { "#": "75 ROBIN HOOD RD (16-0-355)", $: 667500 }, { "#": "76 ROBIN HOOD RD (21-0-273)", $: 729200 }, { "#": "77 ROBIN HOOD RD (16-0-354)", $: 731200 }, { "#": "78 ROBIN HOOD RD (21-0-274)", $: 683700 }, { "#": "79 ROBIN HOOD RD (16-0-353)", $: 602300 }, { "#": "80 ROBIN HOOD RD (21-0-275)", $: 663100 }, { "#": "81 ROBIN HOOD RD (16-0-352)", $: 1047600 }, { "#": "82 ROBIN HOOD RD (21-0-276A)", $: 966700 }, { "#": "83 ROBIN HOOD RD (16-0-351)", $: 643900 }, { "#": "85 ROBIN HOOD RD (16-0-350)", $: 690700 }, { "#": "5 ROCKVILLE PARK (19-0-183)", $: 537800 }, { "#": "9 ROCKVILLE PARK (19-0-185)", $: 724300 }, { "#": "11 RODGERS RD (16-0-323)", $: 894300 }, { "#": "12 RODGERS RD (21-0-258)", $: 860400 }, { "#": "14 RODGERS RD (21-0-259A)", $: 804600 }, { "#": "15 RODGERS RD (16-0-322)", $: 863600 }, { "#": "16 RODGERS RD (21-0-259)", $: 860800 }, { "#": "17 RODGERS RD (21-0-256)", $: 1024700 }, { "#": "18 RODGERS RD (21-0-260)", $: 843400 }, { "#": "15 RICHARDSON RD (17-0-338)", $: 583400 }, { "#": "2 RODGERS RD (17-0-7)", $: 841100 }, { "#": "20 RODGERS RD (21-0-261)", $: 958200 }, { "#": "21 RODGERS RD (21-0-254)", $: 775400 }, { "#": "22 RODGERS RD (21-0-262)", $: 751600 }, { "#": "23 RODGERS RD (21-0-253)", $: 881900 }, { "#": "24 RODGERS RD (21-0-263)", $: 706900 }, { "#": "26 RODGERS RD (21-0-264)", $: 776900 }, { "#": "28 RODGERS RD (21-0-265)", $: 852600 }, { "#": "30 RODGERS RD (21-0-266)", $: 818500 }, { "#": "4 RODGERS RD (17-0-7A)", $: 796100 }, { "#": "5 RODGERS RD (16-0-325)", $: 898300 }, { "#": "6 RODGERS RD (16-0-325A)", $: 983e3 }, { "#": "7 RODGERS RD (16-0-324)", $: 906100 }, { "#": "8 RODGERS RD (21-0-257)", $: 1572700 }, { "#": "9 RODGERS RD (16-0-323A)", $: 870600 }, { "#": "10 ROSE LN (21-0-82)", $: 609700 }, { "#": "11 ROSE LN (21-0-26)", $: 719600 }, { "#": "12 ROSE LN (21-0-83)", $: 764300 }, { "#": "2 ROSE LN (21-0-78)", $: 730600 }, { "#": "3 ROSE LN (21-0-56)", $: 784400 }, { "#": "4 ROSE LN (21-0-79)", $: 1397e3 }, { "#": "6 ROSE LN (21-0-80)", $: 684500 }, { "#": "7 ROSE LN (21-0-40)", $: 727900 }, { "#": "8 ROSE LN (21-0-81)", $: 1000400 }, { "#": "11 ROWE HILL RD (13-0-300)", $: 584600 }, { "#": "14 ROWE HILL RD (13-0-302)", $: 593e3 }, { "#": "15 ROWE HILL RD (13-0-299)", $: 703e3 }, { "#": "17 ROWE HILL RD (13-0-288F)", $: 985900 }, { "#": "18 ROWE HILL RD (13-0-303)", $: 628500 }, { "#": "19 ROWE HILL RD (13-0-288E)", $: 1020100 }, { "#": "2 ROWE HILL RD (14-0-8+7)", $: 671500 }, { "#": "21 ROWE HILL RD (13-0-288D)", $: 993200 }, { "#": "22 ROWE HILL RD (13-0-304)", $: 660900 }, { "#": "23 ROWE HILL RD (13-0-288C)", $: 1007700 }, { "#": "24 ROWE HILL RD (13-0-305)", $: 750500 }, { "#": "28 ROWE HILL RD (13-0-288A)", $: 971500 }, { "#": "30 ROWE HILL RD (13-0-288B)", $: 993200 }, { "#": "9 ROWE HILL RD (14-0-5)", $: 606700 }, { "#": "3 ROWE ST (17-0-297)", $: 537300 }, { "#": "4 ROWE ST (17-0-290)", $: 480500 }, { "#": "5 ROWE ST (17-0-296)", $: 473600 }, { "#": "6 ROWE ST (17-0-292)", $: 539500 }, { "#": "7 ROWE ST (17-0-295)", $: 534100 }, { "#": "8 ROWE ST (17-0-293)", $: 493100 }, { "#": "9 ROWE ST (17-0-294)", $: 692100 }, { "#": "1 ROYAL ST (17-0-53)", $: 612e3 }, { "#": "2 ROYAL ST (17-0-48)", $: 698700 }, { "#": "4 ROYAL ST (17-0-49)", $: 644800 }, { "#": "5 ROYAL ST (17-0-52)", $: 735400 }, { "#": "6 ROYAL ST (17-0-50)", $: 673300 }, { "#": "2 RODGERS RD (17-0-7)", $: 841100 }, { "#": "8 ROYAL ST (17-0-51)", $: 565800 }, { "#": "1 RUSTIC RD (8-0-123)", $: 825400 }, { "#": "11 RUSTIC RD (9-0-88)", $: 923300 }, { "#": "12 RUSTIC RD (9-0-93)", $: 792e3 }, { "#": "15 RUSTIC RD (9-0-87)", $: 1007800 }, { "#": "16 RUSTIC RD (9-0-95)", $: 852500 }, { "#": "17 RUSTIC RD (9-0-86)", $: 1021900 }, { "#": "18 RUSTIC RD (9-0-97)", $: 760900 }, { "#": "19 RUSTIC RD (9-0-85)", $: 802600 }, { "#": "2 RUSTIC RD (8-0-111)", $: 692200 }, { "#": "20 RUSTIC RD (9-0-98)", $: 831900 }, { "#": "21 RUSTIC RD (9-0-84)", $: 851200 }, { "#": "22 RUSTIC RD (9-0-99)", $: 793300 }, { "#": "23 RUSTIC RD (9-0-83)", $: 741e3 }, { "#": "25 RUSTIC RD (9-0-82)", $: 687300 }, { "#": "4 RUSTIC RD (8-0-112)", $: 736400 }, { "#": "5 RUSTIC RD (8-0-114)", $: 734300 }, { "#": "6 RUSTIC RD (8-0-113)", $: 779700 }, { "#": "7 RUSTIC RD (9-0-90)", $: 848700 }, { "#": "8 RUSTIC RD (9-0-91)", $: 710100 }, { "#": "9 RUSTIC RD (9-0-89)", $: 795e3 }, { "#": "1 RYAN CIR (7-0-467)", $: 1124900 }, { "#": "2 RYAN CIR (7-0-470)", $: 968900 }, { "#": "3 RYAN CIR (7-0-468)", $: 1065100 }, { "#": "4 RYAN CIR (7-0-469)", $: 901e3 }, { "#": "6 RYAN CIR (7-0-468A)", $: 1013600 }, { "#": "4 SAN JOSE TRL (21-0-330)", $: 814600 }, { "#": "8 SAN JOSE TRL (21-0-331)", $: 926200 }, { "#": "2 SCHIAPPA CIR (8-0-54A)", $: 1092300 }, { "#": "3 SCHIAPPA CIR (7-0-412B)", $: 1237400 }, { "#": "4 SCHIAPPA CIR (8-0-54B)", $: 965100 }, { "#": "5 SCHIAPPA CIR (7-0-412A)", $: 991e3 }, { "#": "6 SCHIAPPA CIR (8-0-54C1)", $: 1146100 }, { "#": "1 SEWARD RD (11-0-188)", $: 707800 }, { "#": "10 SEWARD RD (11-0-194)", $: 568800 }, { "#": "12 SEWARD RD (11-0-195)", $: 649600 }, { "#": "14 SEWARD RD (11-0-196)", $: 778300 }, { "#": "15 SEWARD RD (11-0-183)", $: 717700 }, { "#": "16 SEWARD RD (11-0-197)", $: 705400 }, { "#": "18 SEWARD RD (11-0-198)", $: 821100 }, { "#": "19 SEWARD RD (11-0-182)", $: 685700 }, { "#": "20 SEWARD RD (11-0-199)", $: 1019500 }, { "#": "21 SEWARD RD (11-0-181)", $: 738400 }, { "#": "22 SEWARD RD (11-0-200)", $: 872900 }, { "#": "23 SEWARD RD (11-0-180)", $: 746600 }, { "#": "24 SEWARD RD (11-0-201)", $: 907500 }, { "#": "25 SEWARD RD (11-0-179)", $: 725300 }, { "#": "26 SEWARD RD (11-0-202)", $: 690100 }, { "#": "27 SEWARD RD (6-0-195)", $: 728500 }, { "#": "28 SEWARD RD (11-0-203)", $: 713800 }, { "#": "8 ROYAL ST (17-0-51)", $: 565800 }, { "#": "29 SEWARD RD (6-0-194)", $: 736200 }, { "#": "3 SEWARD RD (11-0-187)", $: 599300 }, { "#": "30 SEWARD RD (11-0-204)", $: 918300 }, { "#": "31 SEWARD RD (6-0-193)", $: 709800 }, { "#": "32 SEWARD RD (11-0-205)", $: 1015600 }, { "#": "4 SEWARD RD (11-0-191)", $: 624400 }, { "#": "6 SEWARD RD (11-0-192)", $: 692700 }, { "#": "8 SEWARD RD (11-0-193)", $: 715600 }, { "#": "9 SEWARD RD (11-0-185)", $: 640800 }, { "#": "3 SHEFFIELD RD (3-0-273)", $: 660300 }, { "#": "4 SHEFFIELD RD (3-0-270)", $: 697200 }, { "#": "5 SHEFFIELD RD (3-0-272)", $: 834300 }, { "#": "6 SHEFFIELD RD (3-0-271)", $: 833e3 }, { "#": "1 SHERIDAN RD (11-0-222)", $: 767e3 }, { "#": "10 SHERIDAN RD (11-0-190)", $: 894e3 }, { "#": "11 SHERIDAN RD (12-0-121)", $: 960600 }, { "#": "13 SHERIDAN RD (7-0-138)", $: 653900 }, { "#": "14 SHERIDAN RD (11-0-189)", $: 629100 }, { "#": "15 SHERIDAN RD (7-0-137)", $: 676500 }, { "#": "16 SHERIDAN RD (6-0-165)", $: 605300 }, { "#": "18 SHERIDAN RD (6-0-166)", $: 640200 }, { "#": "5 SHERIDAN RD (11-0-221)", $: 842600 }, { "#": "6 SHERIDAN RD (11-0-220)", $: 752500 }, { "#": "7 SHERIDAN RD (12-0-123)", $: 637100 }, { "#": "9 SHERIDAN RD (12-0-122)", $: 771700 }, { "#": "3 SHERMAN RD (6-0-181)", $: 692900 }, { "#": "4 SHERMAN RD (6-0-182)", $: 725900 }, { "#": "5 SHERMAN RD (6-0-180)", $: 692500 }, { "#": "6 SHERMAN RD (6-0-183)", $: 813900 }, { "#": "7 SHERMAN RD (6-0-179)", $: 714200 }, { "#": "11 SHERWOOD RD (16-0-120)", $: 674800 }, { "#": "13 SHERWOOD RD (16-0-119)", $: 580100 }, { "#": "15 SHERWOOD RD (16-0-118)", $: 685100 }, { "#": "17 SHERWOOD RD (16-0-117)", $: 717800 }, { "#": "19 SHERWOOD RD (16-0-116)", $: 753400 }, { "#": "20 SHERWOOD RD (16-0-95)", $: 611300 }, { "#": "21 SHERWOOD RD (16-0-115)", $: 622400 }, { "#": "4 SHERWOOD RD (16-0-61)", $: 1410700 }, { "#": "5 SHERWOOD RD (16-0-123)", $: 809400 }, { "#": "7 SHERWOOD RD (16-0-122)", $: 679100 }, { "#": "9 SHERWOOD RD (16-0-121)", $: 840800 }, { "#": "12 SHUMWAY CIR (5-0-2)", $: 854100 }, { "#": "20 SHUMWAY CIR (5-0-5)", $: 849700 }, { "#": "1 SKYEWOOD DR (14-0-39A)", $: 799100 }, { "#": "10 SKYEWOOD DR (14-0-247)", $: 988400 }, { "#": "11 SKYEWOOD DR (14-0-253)", $: 1003500 }, { "#": "12 SKYEWOOD DR (14-0-248)", $: 999900 }, { "#": "14 SKYEWOOD DR (14-0-249)", $: 998800 }, { "#": "15 SKYEWOOD DR (14-0-252)", $: 1058100 }, { "#": "16 SKYEWOOD DR (14-0-250)", $: 1019100 }, { "#": "29 SEWARD RD (6-0-194)", $: 736200 }, { "#": "17 SKYEWOOD DR (14-0-251)", $: 1159200 }, { "#": "19 SKYEWOOD DR (14-0-51E)", $: 1634400 }, { "#": "21 SKYEWOOD DR (14-0-51F)", $: 1169800 }, { "#": "22 SKYEWOOD DR (14-0-250B)", $: 1383200 }, { "#": "23 SKYEWOOD DR (14-0-51G)", $: 1283600 }, { "#": "24 SKYEWOOD DR (14-0-250C)", $: 384600 }, { "#": "25 SKYEWOOD DR (14-0-33A)", $: 1306400 }, { "#": "26 SKYEWOOD DR (14-0-250D)", $: 860300 }, { "#": "28 SKYEWOOD DR (14-0-33B)", $: 1193400 }, { "#": "4 SKYEWOOD DR (14-0-241)", $: 865900 }, { "#": "5 SKYEWOOD DR (14-0-275)", $: 825300 }, { "#": "6 SKYEWOOD DR (14-0-245)", $: 919900 }, { "#": "7 SKYEWOOD DR (14-0-274)", $: 1039800 }, { "#": "1 SMITTY`S WAY (25-0-9A4)", $: 999900 }, { "#": "11 SMITTY`S WAY (25-0-9A9)", $: 955500 }, { "#": "3 SMITTY`S WAY (25-0-9A5)", $: 969100 }, { "#": "5 SMITTY`S WAY (25-0-9A6)", $: 1073300 }, { "#": "7 SMITTY`S WAY (25-0-9A7)", $: 902800 }, { "#": "9 SMITTY`S WAY (25-0-9A8)", $: 977300 }, { "#": "1 SOUTH HILLSIDE ST (19-0-98)", $: 909600 }, { "#": "12 SOUTH HILLSIDE ST (19-0-89)", $: 798600 }, { "#": "14 SOUTH HILLSIDE ST (19-0-40)", $: 9e5 }, { "#": "17 SOUTH HILLSIDE ST (19-0-91)", $: 825800 }, { "#": "2 SOUTH HILLSIDE ST (19-0-85)", $: 743700 }, { "#": "21 SOUTH HILLSIDE ST (18-0-383)", $: 665800 }, { "#": "4 SOUTH HILLSIDE ST (19-0-86)", $: 816300 }, { "#": "5 SOUTH HILLSIDE ST (19-0-96)", $: 754200 }, { "#": "7 SOUTH HILLSIDE ST (19-0-93)", $: 828700 }, { "#": "8 SOUTH HILLSIDE ST (19-0-88)", $: 744700 }, { "#": "1 SOUTH MARBLE ST (18-0-363)", $: 717600 }, { "#": "11 SOUTH MARBLE ST (19-0-47)", $: 597900 }, { "#": "14 SOUTH MARBLE ST (19-0-35)", $: 829600 }, { "#": "15 SOUTH MARBLE ST (19-0-48)", $: 835700 }, { "#": "17 SOUTH MARBLE ST (19-0-51)", $: 870800 }, { "#": "2 SOUTH MARBLE ST (18-0-364)", $: 825900 }, { "#": "4 SOUTH MARBLE ST (18-0-365)", $: 585900 }, { "#": "6 SOUTH MARBLE ST (18-0-366)", $: 675900 }, { "#": "7 SOUTH MARBLE ST (18-0-385)", $: 651200 }, { "#": "8 SOUTH MARBLE ST (19-0-38)", $: 687900 }, { "#": "9 SOUTH MARBLE ST (19-0-35A)", $: 1013100 }, { "#": "14 SOUTH ST (19-0-323)", $: 699900 }, { "#": "18 SOUTH ST (14-0-187)", $: 733900 }, { "#": "20 SOUTH ST (14-0-167)", $: 635900 }, { "#": "30 SOUTH ST (14-0-164)", $: 734e3 }, { "#": "36 SOUTH ST (14-0-139)", $: 873400 }, { "#": "38 SOUTH ST (14-0-103)", $: 826e3 }, { "#": "40 SOUTH ST (14-0-102)", $: 603600 }, { "#": "42 SOUTH ST (14-0-101)", $: 661800 }, { "#": "44 SOUTH ST (14-0-100)", $: 660600 }, { "#": "46 SOUTH ST (14-0-99)", $: 651600 }, { "#": "17 SKYEWOOD DR (14-0-251)", $: 1159200 }, { "#": "48 SOUTH ST (14-0-98)", $: 546500 }, { "#": "50 SOUTH ST (14-0-97)", $: 581400 }, { "#": "52 SOUTH ST (14-0-96)", $: 1385300 }, { "#": "10 SPALDING RD (6-0-218A)", $: 1249800 }, { "#": "2 SPALDING RD (6-0-17)", $: 846700 }, { "#": "6 SPALDING RD (6-0-220A)", $: 1194900 }, { "#": "7 SPALDING RD (6-0-216A)", $: 1224e3 }, { "#": "8 SPALDING RD (6-0-219A)", $: 1282800 }, { "#": "9 SPALDING RD (6-0-217A)", $: 1305600 }, { "#": "1 SPARHAWK CIR (9-0-22)", $: 783900 }, { "#": "10 SPARHAWK CIR (9-0-6)", $: 798600 }, { "#": "11 SPARHAWK CIR (9-0-17)", $: 871800 }, { "#": "12 SPARHAWK CIR (9-0-7)", $: 879900 }, { "#": "14 SPARHAWK CIR (9-0-8)", $: 987300 }, { "#": "16 SPARHAWK CIR (9-0-9)", $: 812e3 }, { "#": "18 SPARHAWK CIR (9-0-10)", $: 829400 }, { "#": "19 SPARHAWK CIR (9-0-15)", $: 789700 }, { "#": "2 SPARHAWK CIR (9-0-2)", $: 792600 }, { "#": "20 SPARHAWK CIR (9-0-11)", $: 731400 }, { "#": "21 SPARHAWK CIR (9-0-14)", $: 830400 }, { "#": "22 SPARHAWK CIR (9-0-12)", $: 826500 }, { "#": "24 SPARHAWK CIR (9-0-13)", $: 798e3 }, { "#": "3 SPARHAWK CIR (9-0-21)", $: 1045100 }, { "#": "4 SPARHAWK CIR (9-0-3)", $: 826100 }, { "#": "5 SPARHAWK CIR (9-0-20)", $: 867300 }, { "#": "6 SPARHAWK CIR (9-0-4)", $: 732100 }, { "#": "7 SPARHAWK CIR (9-0-19)", $: 829e3 }, { "#": "8 SPARHAWK CIR (9-0-5)", $: 1096600 }, { "#": "9 SPARHAWK CIR (9-0-18)", $: 914900 }, { "#": "3 SPARTAN CIR (25-0-16)", $: 876e3 }, { "#": "4 SPARTAN CIR (25-0-18)", $: 944900 }, { "#": "6 SPARTAN CIR (25-0-17)", $: 937200 }, { "#": "19 SPRING LN (8-0-53)", $: 781700 }, { "#": "2 SPRING LN (7-0-408)", $: 649900 }, { "#": "21 SPRING LN (8-0-52)", $: 647e3 }, { "#": "23 SPRING LN (8-0-49)", $: 983800 }, { "#": "4 SPRING LN (7-0-409)", $: 795900 }, { "#": "6 SPRING LN (7-0-410)", $: 926600 }, { "#": "7 SPRING LN (7-0-412)", $: 959200 }, { "#": "8 SPRING LN (7-0-411)", $: 674300 }, { "#": "101 SPRING ST (2-0-147)", $: 643e3 }, { "#": "104 SPRING ST (1-0-175)", $: 801500 }, { "#": "105 SPRING ST (2-0-146)", $: 753e3 }, { "#": "107 SPRING ST (2-0-145)", $: 574e3 }, { "#": "108 SPRING ST (1-0-176)", $: 591400 }, { "#": "109 SPRING ST (2-0-143)", $: 71e4 }, { "#": "110 SPRING ST (1-0-191)", $: 701100 }, { "#": "111 SPRING ST (2-0-142)", $: 739900 }, { "#": "112 SPRING ST (1-0-192)", $: 646200 }, { "#": "114 SPRING ST (1-0-193)", $: 628400 }, { "#": "48 SOUTH ST (14-0-98)", $: 546500 }, { "#": "115 SPRING ST (2-0-141)", $: 730500 }, { "#": "116 SPRING ST (1-0-214)", $: 560500 }, { "#": "123 SPRING ST (2-0-135)", $: 758900 }, { "#": "130 SPRING ST (2-0-270)", $: 779200 }, { "#": "131 SPRING ST (2-0-134)", $: 576100 }, { "#": "132 SPRING ST (2-0-271)", $: 731100 }, { "#": "133 SPRING ST (2-0-133)", $: 795200 }, { "#": "134 SPRING ST (2-0-272)", $: 763900 }, { "#": "135 SPRING ST (2-0-132)", $: 683100 }, { "#": "136 SPRING ST (2-0-273)", $: 753600 }, { "#": "138 SPRING ST (2-0-274)", $: 699500 }, { "#": "140 SPRING ST (2-0-275)", $: 792500 }, { "#": "141 SPRING ST (2-0-89)", $: 866500 }, { "#": "142 SPRING ST (2-0-2)", $: 68e4 }, { "#": "144 SPRING ST (2-0-3)", $: 662600 }, { "#": "146 SPRING ST (2-0-4)", $: 677e3 }, { "#": "147 SPRING ST (2-0-83A)", $: 915700 }, { "#": "148 SPRING ST (2-0-5)", $: 614500 }, { "#": "149 SPRING ST (2-0-83)", $: 527400 }, { "#": "15 SPRING ST (12-0-215)", $: 771200 }, { "#": "150 SPRING ST (2-0-43)", $: 698600 }, { "#": "154 SPRING ST (2-0-46)", $: 792600 }, { "#": "155 SPRING ST (2-0-81)", $: 717800 }, { "#": "157 SPRING ST (2-0-80)", $: 628900 }, { "#": "161 SPRING ST (2-0-75)", $: 704500 }, { "#": "164 SPRING ST (2-0-60)", $: 566800 }, { "#": "17 SPRING ST (12-0-214)", $: 578300 }, { "#": "2 SPRING ST (12-0-221)", $: 747400 }, { "#": "23 SPRING ST (12-0-212)", $: 513300 }, { "#": "27 SPRING ST (7-0-448)", $: 617300 }, { "#": "34 SPRING ST (7-0-378)", $: 664800 }, { "#": "35 SPRING ST (7-0-436)", $: 588100 }, { "#": "38 SPRING ST (7-0-379)", $: 730300 }, { "#": "39 SPRING ST (7-0-433)", $: 675400 }, { "#": "42 SPRING ST (7-0-380)", $: 608300 }, { "#": "44 SPRING ST (7-0-381)", $: 786100 }, { "#": "45 SPRING ST (7-0-431)", $: 736800 }, { "#": "48 SPRING ST (7-0-383)", $: 619900 }, { "#": "5 SPRING ST (12-0-220)", $: 725900 }, { "#": "51 SPRING ST (7-0-423)", $: 632e3 }, { "#": "53 SPRING ST (7-0-422)", $: 732900 }, { "#": "55 SPRING ST (7-0-417)", $: 873600 }, { "#": "57 SPRING ST (7-0-416)", $: 737100 }, { "#": "6 SPRING ST (12-0-207)", $: 724600 }, { "#": "61 SPRING ST (7-0-415)", $: 698e3 }, { "#": "64 SPRING ST (7-0-385A)", $: 744900 }, { "#": "66 SPRING ST (7-0-385)", $: 685600 }, { "#": "67 SPRING ST (7-0-407)", $: 736200 }, { "#": "68 SPRING ST (7-0-387)", $: 951600 }, { "#": "69 SPRING ST (7-0-406)", $: 530100 }, { "#": "115 SPRING ST (2-0-141)", $: 730500 }, { "#": "71 SPRING ST (7-0-405)", $: 662600 }, { "#": "74 SPRING ST (7-0-390)", $: 579e3 }, { "#": "79 SPRING ST (7-0-401)", $: 974400 }, { "#": "8 SPRING ST (7-0-1)", $: 618600 }, { "#": "81 SPRING ST (7-0-400)", $: 586100 }, { "#": "82 SPRING ST (7-0-392)", $: 581500 }, { "#": "89 SPRING ST (2-0-158)", $: 876300 }, { "#": "9 SPRING ST (12-0-218)", $: 700400 }, { "#": "90 SPRING ST (1-0-157)", $: 724e3 }, { "#": "91 SPRING ST (2-0-157)", $: 605700 }, { "#": "94 SPRING ST (1-0-166)", $: 509600 }, { "#": "95 SPRING ST (2-0-155)", $: 632200 }, { "#": "96 SPRING ST (1-0-167)", $: 619e3 }, { "#": "97 SPRING ST (2-0-154)", $: 536700 }, { "#": "1 SPRUCE ST (21-0-268)", $: 783500 }, { "#": "2 SPRUCE ST (21-0-267)", $: 824100 }, { "#": "7 SPRUCE ST (21-0-290)", $: 855e3 }, { "#": "9 SPRUCE ST (21-0-289)", $: 834500 }, { "#": "1 STANDISH RD (17-0-473)", $: 756700 }, { "#": "10 STANDISH RD (22-0-36)", $: 888300 }, { "#": "11 STANDISH RD (22-0-35)", $: 767800 }, { "#": "15 STANDISH RD (22-0-34)", $: 885700 }, { "#": "3 STANDISH RD (17-0-472)", $: 633800 }, { "#": "4 STANDISH RD (17-0-466)", $: 767500 }, { "#": "5 STANDISH RD (17-0-471)", $: 672e3 }, { "#": "6 STANDISH RD (17-0-467)", $: 749900 }, { "#": "7 STANDISH RD (17-0-470)", $: 745800 }, { "#": "8 STANDISH RD (17-0-468)", $: 683700 }, { "#": "9 STANDISH RD (17-0-469)", $: 656200 }, { "#": "2 STANTON RD (11-0-184)", $: 680500 }, { "#": "3 STANTON RD (6-0-175)", $: 576400 }, { "#": "4 STANTON RD (6-0-176)", $: 572400 }, { "#": "5 STANTON RD (6-0-174)", $: 661e3 }, { "#": "6 STANTON RD (6-0-177)", $: 710900 }, { "#": "7 STANTON RD (6-0-173)", $: 750400 }, { "#": "8 STANTON RD (6-0-178)", $: 667e3 }, { "#": "1 STEELE ST (11-0-306)", $: 850300 }, { "#": "10 STEELE ST (11-0-285A)", $: 884800 }, { "#": "11 STEELE ST (11-0-277)", $: 689200 }, { "#": "12 STEELE ST (11-0-285)", $: 1007700 }, { "#": "14 STEELE ST (11-0-286)", $: 799500 }, { "#": "15 STEELE ST (11-0-276)", $: 775600 }, { "#": "2 STEELE ST (11-0-305)", $: 727700 }, { "#": "3 STEELE ST (11-0-281)", $: 692300 }, { "#": "6 STEELE ST (11-0-283)", $: 800200 }, { "#": "7 STEELE ST (11-0-280)", $: 819400 }, { "#": "8 STEELE ST (11-0-284)", $: 758100 }, { "#": "1 STELLA WAY (21-0-906)", $: 1611500 }, { "#": "2 STELLA WAY (21-0-901)", $: 520200 }, { "#": "5 STELLA WAY (21-0-904)", $: 1685800 }, { "#": "71 SPRING ST (7-0-405)", $: 662600 }, { "#": "6 STELLA WAY (21-0-903)", $: 1388200 }, { "#": "101 STEVENS ST (8-0-35)", $: 675700 }, { "#": "10 STEVENS ST (8-0-36)", $: 559e3 }, { "#": "11 STEVENS ST (8-0-34)", $: 653700 }, { "#": "12 STEVENS ST (8-0-37)", $: 589500 }, { "#": "13 STEVENS ST (8-0-33)", $: 631200 }, { "#": "20 STEVENS ST (8-0-84)", $: 717e3 }, { "#": "22 STEVENS ST (8-0-85)", $: 680800 }, { "#": "24 STEVENS ST (8-0-86B)", $: 694900 }, { "#": "25 STEVENS ST (8-0-58B)", $: 760900 }, { "#": "26 STEVENS ST (8-0-86A)", $: 729400 }, { "#": "28 STEVENS ST (8-0-87D)", $: 725700 }, { "#": "29 STEVENS ST (8-0-82)", $: 576400 }, { "#": "3 STEVENS ST (7-0-444)", $: 724900 }, { "#": "32 STEVENS ST (8-0-87A)", $: 766600 }, { "#": "33 STEVENS ST (8-0-83)", $: 693900 }, { "#": "34 STEVENS ST (8-0-87B)", $: 676500 }, { "#": "35 STEVENS ST (8-0-81)", $: 643400 }, { "#": "36 STEVENS ST (8-0-87C)", $: 673500 }, { "#": "39 STEVENS ST (8-0-80)", $: 705900 }, { "#": "45 STEVENS ST (8-0-78)", $: 824100 }, { "#": "47 STEVENS ST (8-0-76)", $: 542e3 }, { "#": "49 STEVENS ST (8-0-74)", $: 606200 }, { "#": "5 STEVENS ST (7-0-443)", $: 534200 }, { "#": "59 STEVENS ST (8-0-72)", $: 59e4 }, { "#": "60 STEVENS ST (8-0-91)", $: 535600 }, { "#": "61 STEVENS ST (8-0-71)", $: 616500 }, { "#": "7 STEVENS ST (7-0-442)", $: 531100 }, { "#": "8 STEVENS ST (7-0-434)", $: 994500 }, { "#": "1 STOCKWELL RD (3-0-236)", $: 784400 }, { "#": "10 STOCKWELL RD (3-0-229)", $: 896100 }, { "#": "12 STOCKWELL RD (3-0-230)", $: 1095e3 }, { "#": "14 STOCKWELL RD (3-0-231)", $: 921600 }, { "#": "3 STOCKWELL RD (3-0-235)", $: 876500 }, { "#": "4 STOCKWELL RD (3-0-226)", $: 779300 }, { "#": "5 STOCKWELL RD (3-0-234)", $: 959800 }, { "#": "6 STOCKWELL RD (3-0-227)", $: 874400 }, { "#": "7 STOCKWELL RD (3-0-233)", $: 828300 }, { "#": "8 STOCKWELL RD (3-0-228)", $: 806900 }, { "#": "11 STONE AVE (3-0-324)", $: 837100 }, { "#": "14 STONE AVE (3-0-318)", $: 875500 }, { "#": "2 STONE AVE (3-0-313)", $: 706e3 }, { "#": "3 STONE AVE (3-0-334)", $: 857800 }, { "#": "4 STONE AVE (3-0-314)", $: 556300 }, { "#": "6 STONE AVE (3-0-315)", $: 679200 }, { "#": "9 STONE AVE (3-0-326)", $: 789200 }, { "#": "20 STONECROFT AVE (7-0-200)", $: 1008e3 }, { "#": "23 STONECROFT AVE (7-0-187)", $: 755200 }, { "#": "10 STONEWOOD AVE (3-0-247)", $: 829200 }, { "#": "11 STONEWOOD AVE (3-0-222)", $: 814600 }, { "#": "6 STELLA WAY (21-0-903)", $: 1388200 }, { "#": "12 STONEWOOD AVE (3-0-248)", $: 937300 }, { "#": "14 STONEWOOD AVE (3-0-249)", $: 801700 }, { "#": "15 STONEWOOD AVE (3-0-221)", $: 823700 }, { "#": "16 STONEWOOD AVE (3-0-250)", $: 740700 }, { "#": "17 STONEWOOD AVE (3-0-220)", $: 713800 }, { "#": "18 STONEWOOD AVE (3-0-251)", $: 717200 }, { "#": "19 STONEWOOD AVE (3-0-219)", $: 865600 }, { "#": "21 STONEWOOD AVE (3-0-218)", $: 840700 }, { "#": "3 STONEWOOD AVE (9-0-111)", $: 921600 }, { "#": "4 STONEWOOD AVE (3-0-244)", $: 849900 }, { "#": "5 STONEWOOD AVE (3-0-243)", $: 782800 }, { "#": "6 STONEWOOD AVE (3-0-245)", $: 838700 }, { "#": "8 STONEWOOD AVE (3-0-246)", $: 898700 }, { "#": "9 STONEWOOD AVE (3-0-223)", $: 929600 }, { "#": "11 SULLIVAN CIR (8-0-46A)", $: 887500 }, { "#": "3 SULLIVAN CIR (8-0-46F)", $: 1199500 }, { "#": "5 SULLIVAN CIR (8-0-46E)", $: 1106700 }, { "#": "7 SULLIVAN CIR (8-0-46C)", $: 1036600 }, { "#": "9 SULLIVAN CIR (8-0-46B)", $: 1112100 }, { "#": "4 SULLIVAN LN (8-0-46D)", $: 1004900 }, { "#": "100 SUMMER ST (13-0-69)", $: 588100 }, { "#": "104 SUMMER ST (13-0-70)", $: 666400 }, { "#": "106 SUMMER ST (13-0-71)", $: 613700 }, { "#": "108 SUMMER ST (13-0-72)", $: 494300 }, { "#": "109 SUMMER ST (13-0-82)", $: 771100 }, { "#": "112 SUMMER ST (13-0-74)", $: 672300 }, { "#": "114 SUMMER ST (13-0-75)", $: 833600 }, { "#": "115 SUMMER ST (13-0-139A)", $: 729300 }, { "#": "116 SUMMER ST (13-0-76)", $: 669200 }, { "#": "117 SUMMER ST (13-0-138)", $: 672700 }, { "#": "12 SUMMER ST (13-0-318)", $: 579900 }, { "#": "122 SUMMER ST (13-0-79)", $: 645300 }, { "#": "128 SUMMER ST (13-0-135)", $: 477500 }, { "#": "130 SUMMER ST (13-0-136)", $: 534200 }, { "#": "131 SUMMER ST (13-0-125)", $: 687300 }, { "#": "131 SUMMER ST (8-0-25)", $: 776200 }, { "#": "133 SUMMER ST (7-0-447)", $: 676900 }, { "#": "133 SUMMER ST (8-0-24)", $: 619800 }, { "#": "136 SUMMER ST (13-0-124)", $: 684100 }, { "#": "138 SUMMER ST (12-0-210)", $: 733700 }, { "#": "14 SUMMER ST (13-0-319)", $: 540800 }, { "#": "140 SUMMER ST (12-0-211)", $: 567200 }, { "#": "15 SUMMER ST (13-0-282)", $: 683200 }, { "#": "16 SUMMER ST (13-0-320)", $: 578500 }, { "#": "17 SUMMER ST (13-0-281)", $: 573800 }, { "#": "19 SUMMER ST (13-0-280)", $: 519100 }, { "#": "25 SUMMER ST (13-0-278)", $: 618300 }, { "#": "27 SUMMER ST (13-0-277)", $: 470500 }, { "#": "29 SUMMER ST (13-0-276)", $: 561400 }, { "#": "30 SUMMER ST (13-0-322)", $: 651200 }, { "#": "12 STONEWOOD AVE (3-0-248)", $: 937300 }, { "#": "31 SUMMER ST (13-0-275)", $: 529400 }, { "#": "35 SUMMER ST (13-0-274)", $: 888500 }, { "#": "36 SUMMER ST (13-0-325)", $: 792700 }, { "#": "40 SUMMER ST (13-0-326)", $: 612200 }, { "#": "41 SUMMER ST (13-0-258)", $: 724100 }, { "#": "42 SUMMER ST (13-0-327)", $: 664400 }, { "#": "43 SUMMER ST (13-0-256)", $: 609900 }, { "#": "44 SUMMER ST (13-0-328)", $: 642700 }, { "#": "46 SUMMER ST (13-0-329)", $: 704100 }, { "#": "57 SUMMER ST (13-0-253)", $: 718900 }, { "#": "61 SUMMER ST (13-0-208)", $: 558e3 }, { "#": "63 SUMMER ST (13-0-208A)", $: 551300 }, { "#": "65 SUMMER ST (13-0-207)", $: 584e3 }, { "#": "67 SUMMER ST (13-0-206)", $: 571400 }, { "#": "70 SUMMER ST (13-0-335)", $: 1275100 }, { "#": "72 SUMMER ST (13-0-337)", $: 663100 }, { "#": "73 SUMMER ST (13-0-205)", $: 611400 }, { "#": "74 SUMMER ST (13-0-338)", $: 668500 }, { "#": "75 SUMMER ST (13-0-186)", $: 582e3 }, { "#": "76 SUMMER ST (13-0-339)", $: 560700 }, { "#": "78 SUMMER ST (13-0-341)", $: 483400 }, { "#": "81 SUMMER ST (13-0-184)", $: 773700 }, { "#": "82 SUMMER ST (13-0-342)", $: 521100 }, { "#": "83 SUMMER ST (13-0-184B)", $: 886e3 }, { "#": "84 SUMMER ST (13-0-343)", $: 597100 }, { "#": "86 SUMMER ST (13-0-344)", $: 536700 }, { "#": "87 SUMMER ST (13-0-180)", $: 562300 }, { "#": "88 SUMMER ST (13-0-345)", $: 583600 }, { "#": "89 SUMMER ST (13-0-182)", $: 542400 }, { "#": "96 SUMMER ST (13-0-69A)", $: 709400 }, { "#": "1 SUMMERHILL ST (13-0-257)", $: 657100 }, { "#": "10 SUMMERHILL ST (13-0-240)", $: 587200 }, { "#": "14 SUMMERHILL ST (13-0-241)", $: 657400 }, { "#": "17 SUMMERHILL ST (13-0-227)", $: 728800 }, { "#": "18 SUMMERHILL ST (13-0-242)", $: 537700 }, { "#": "21 SUMMERHILL ST (13-0-225)", $: 763300 }, { "#": "22 SUMMERHILL ST (13-0-243)", $: 677300 }, { "#": "23 SUMMERHILL ST (13-0-224)", $: 840500 }, { "#": "25 SUMMERHILL ST (13-0-222)", $: 811500 }, { "#": "29 SUMMERHILL ST (13-0-221)", $: 556400 }, { "#": "3 SUMMERHILL ST (13-0-238)", $: 558300 }, { "#": "33 SUMMERHILL ST (13-0-217)", $: 731600 }, { "#": "35 SUMMERHILL ST (13-0-216)", $: 1040900 }, { "#": "43 SUMMERHILL ST (13-0-213)", $: 862600 }, { "#": "45 SUMMERHILL ST (13-0-212)", $: 562200 }, { "#": "46 SUMMERHILL ST (13-0-244)", $: 586400 }, { "#": "47 SUMMERHILL ST (13-0-211)", $: 903600 }, { "#": "48 SUMMERHILL ST (13-0-245)", $: 526400 }, { "#": "51 SUMMERHILL ST (13-0-210)", $: 443200 }, { "#": "54 SUMMERHILL ST (13-0-251)", $: 631500 }, { "#": "31 SUMMER ST (13-0-275)", $: 529400 }, { "#": "55 SUMMERHILL ST (13-0-209)", $: 527600 }, { "#": "6 SUMMERHILL ST (13-0-239)", $: 708400 }, { "#": "7 SUMMERHILL ST (13-0-237)", $: 549600 }, { "#": "11 SUMMIT RD (19-0-83)", $: 558e3 }, { "#": "15 SUMMIT RD (19-0-81)", $: 787200 }, { "#": "16 SUMMIT RD (19-0-99)", $: 941700 }, { "#": "18 SUMMIT RD (19-0-101)", $: 787600 }, { "#": "21 SUMMIT RD (19-0-79)", $: 913600 }, { "#": "23 SUMMIT RD (19-0-78)", $: 808600 }, { "#": "25 SUMMIT RD (19-0-77)", $: 874200 }, { "#": "28 SUMMIT RD (19-0-175)", $: 1030700 }, { "#": "36 SUMMIT RD (19-0-176)", $: 1142800 }, { "#": "8 SUMMIT RD (19-0-52)", $: 800800 }, { "#": "1 SUNRISE AVE (16-0-336)", $: 775100 }, { "#": "10 SUNRISE AVE (16-0-313)", $: 705600 }, { "#": "11 SUNRISE AVE (16-0-331)", $: 667600 }, { "#": "12 SUNRISE AVE (16-0-314)", $: 914700 }, { "#": "14 SUNRISE AVE (16-0-315)", $: 804300 }, { "#": "15 SUNRISE AVE (16-0-330)", $: 603800 }, { "#": "16 SUNRISE AVE (16-0-316)", $: 931800 }, { "#": "17 SUNRISE AVE (16-0-329)", $: 636800 }, { "#": "18 SUNRISE AVE (16-0-317)", $: 587800 }, { "#": "19 SUNRISE AVE (16-0-328)", $: 712700 }, { "#": "20 SUNRISE AVE (16-0-318)", $: 623700 }, { "#": "21 SUNRISE AVE (16-0-327)", $: 690600 }, { "#": "22 SUNRISE AVE (16-0-319)", $: 692e3 }, { "#": "23 SUNRISE AVE (16-0-326)", $: 581300 }, { "#": "24 SUNRISE AVE (16-0-320)", $: 601e3 }, { "#": "26 SUNRISE AVE (16-0-321)", $: 666900 }, { "#": "27 SUNRISE AVE (17-0-6)", $: 543700 }, { "#": "29 SUNRISE AVE (17-0-5)", $: 758700 }, { "#": "3 SUNRISE AVE (16-0-335)", $: 678600 }, { "#": "30 SUNRISE AVE (17-0-9)", $: 947400 }, { "#": "31 SUNRISE AVE (17-0-4)", $: 607300 }, { "#": "32 SUNRISE AVE (17-0-10)", $: 730300 }, { "#": "4 SUNRISE AVE (16-0-310)", $: 600400 }, { "#": "5 SUNRISE AVE (16-0-334)", $: 797800 }, { "#": "6 SUNRISE AVE (16-0-311)", $: 632e3 }, { "#": "7 SUNRISE AVE (16-0-333)", $: 815800 }, { "#": "8 SUNRISE AVE (16-0-312)", $: 724700 }, { "#": "9 SUNRISE AVE (16-0-332)", $: 683700 }, { "#": "12 SUNSET RD (9-0-75)", $: 709900 }, { "#": "14 SUNSET RD (9-0-76)", $: 847e3 }, { "#": "15 SUNSET RD (8-0-119)", $: 740600 }, { "#": "16 SUNSET RD (9-0-77)", $: 1153200 }, { "#": "17 SUNSET RD (8-0-118)", $: 830100 }, { "#": "18 SUNSET RD (9-0-78)", $: 1288300 }, { "#": "19 SUNSET RD (9-0-71)", $: 780600 }, { "#": "2 SUNSET RD (8-0-115)", $: 880700 }, { "#": "20 SUNSET RD (9-0-79)", $: 839200 }, { "#": "55 SUMMERHILL ST (13-0-209)", $: 527600 }, { "#": "21 SUNSET RD (9-0-70)", $: 793200 }, { "#": "23 SUNSET RD (9-0-68)", $: 761600 }, { "#": "27 SUNSET RD (9-0-66)", $: 807600 }, { "#": "29 SUNSET RD (9-0-65)", $: 777400 }, { "#": "4 SUNSET RD (8-0-116)", $: 571200 }, { "#": "5 SUNSET RD (8-0-122)", $: 1206900 }, { "#": "6 SUNSET RD (8-0-117)", $: 782e3 }, { "#": "7 SUNSET RD (8-0-121)", $: 588700 }, { "#": "8 SUNSET RD (9-0-72)", $: 789700 }, { "#": "9 SUNSET RD (8-0-120)", $: 780300 }, { "#": "3 SYCAMORE RD (16-0-339)", $: 631800 }, { "#": "5 SYCAMORE RD (16-0-338)", $: 884700 }, { "#": "1 TAMAROCK TRL (2-0-131)", $: 899800 }, { "#": "10 TAMAROCK TRL (2-0-97)", $: 866e3 }, { "#": "12 TAMAROCK TRL (2-0-98)", $: 835200 }, { "#": "14 TAMAROCK TRL (2-0-99)", $: 686600 }, { "#": "15 TAMAROCK TRL (2-0-115)", $: 824100 }, { "#": "16 TAMAROCK TRL (2-0-100)", $: 775800 }, { "#": "17 TAMAROCK TRL (2-0-114)", $: 828700 }, { "#": "18 TAMAROCK TRL (2-0-101)", $: 771500 }, { "#": "19 TAMAROCK TRL (2-0-113)", $: 747e3 }, { "#": "2 TAMAROCK TRL (2-0-90)", $: 889600 }, { "#": "20 TAMAROCK TRL (2-0-102)", $: 976400 }, { "#": "21 TAMAROCK TRL (2-0-112)", $: 860800 }, { "#": "22 TAMAROCK TRL (2-0-317)", $: 889400 }, { "#": "23 TAMAROCK TRL (2-0-329)", $: 1001300 }, { "#": "24 TAMAROCK TRL (2-0-318)", $: 902400 }, { "#": "25 TAMAROCK TRL (2-0-328)", $: 968100 }, { "#": "26 TAMAROCK TRL (2-0-319)", $: 858700 }, { "#": "27 TAMAROCK TRL (2-0-327)", $: 850700 }, { "#": "28 TAMAROCK TRL (2-0-320)", $: 807400 }, { "#": "29 TAMAROCK TRL (2-0-326)", $: 980400 }, { "#": "3 TAMAROCK TRL (2-0-130)", $: 743300 }, { "#": "30 TAMAROCK TRL (2-0-321)", $: 893200 }, { "#": "31 TAMAROCK TRL (2-0-325)", $: 843600 }, { "#": "32 TAMAROCK TRL (2-0-322)", $: 832200 }, { "#": "33 TAMAROCK TRL (2-0-324)", $: 830700 }, { "#": "34 TAMAROCK TRL (2-0-355)", $: 1018100 }, { "#": "35 TAMAROCK TRL (2-0-323)", $: 1036700 }, { "#": "36 TAMAROCK TRL (2-0-356)", $: 1062800 }, { "#": "37 TAMAROCK TRL (2-0-360)", $: 955e3 }, { "#": "38 TAMAROCK TRL (2-0-357)", $: 1214200 }, { "#": "39 TAMAROCK TRL (2-0-359)", $: 856200 }, { "#": "4 TAMAROCK TRL (2-0-91)", $: 876600 }, { "#": "40 TAMAROCK TRL (2-0-358)", $: 980900 }, { "#": "41 TAMAROCK TRL (2-0-358A)", $: 969e3 }, { "#": "5 TAMAROCK TRL (2-0-129)", $: 881400 }, { "#": "6 TAMAROCK TRL (2-0-92)", $: 877100 }, { "#": "7 TAMAROCK TRL (2-0-128)", $: 825700 }, { "#": "2 TEDFORD DR (9-0-28)", $: 860100 }, { "#": "21 SUNSET RD (9-0-70)", $: 793200 }, { "#": "4 TEDFORD DR (9-0-16)", $: 814800 }, { "#": "1 THERESA RD (7-0-242)", $: 647400 }, { "#": "10 THERESA RD (7-0-237)", $: 699400 }, { "#": "12 THERESA RD (7-0-238)", $: 605e3 }, { "#": "14 THERESA RD (7-0-239)", $: 797e3 }, { "#": "2 THERESA RD (7-0-233)", $: 627600 }, { "#": "3 THERESA RD (7-0-241)", $: 791500 }, { "#": "4 THERESA RD (7-0-234)", $: 635600 }, { "#": "5 THERESA RD (7-0-240)", $: 716900 }, { "#": "6 THERESA RD (7-0-235)", $: 741200 }, { "#": "8 THERESA RD (7-0-236)", $: 662500 }, { "#": "1 THOMAS CIR (7-0-451)", $: 869200 }, { "#": "10 THOMAS CIR (7-0-456)", $: 914600 }, { "#": "11 THOMAS CIR (7-0-458)", $: 870300 }, { "#": "12 THOMAS CIR (7-0-457)", $: 842800 }, { "#": "2 THOMAS CIR (7-0-452)", $: 1032600 }, { "#": "3 THOMAS CIR (7-0-450)", $: 957e3 }, { "#": "4 THOMAS CIR (7-0-453)", $: 1037900 }, { "#": "5 THOMAS CIR (7-0-449)", $: 893300 }, { "#": "6 THOMAS CIR (7-0-454)", $: 1022200 }, { "#": "7 THOMAS CIR (7-0-460)", $: 793100 }, { "#": "8 THOMAS CIR (7-0-455)", $: 93e4 }, { "#": "9 THOMAS CIR (7-0-459)", $: 907700 }, { "#": "1 THOMPSON POND RD (13-0-216A)", $: 1002700 }, { "#": "10 THOMPSON POND RD (13-0-532)", $: 1063400 }, { "#": "11 THOMPSON POND RD (8-0-221)", $: 1198300 }, { "#": "12 THOMPSON POND RD (13-0-533)", $: 1040600 }, { "#": "14 THOMPSON POND RD (8-0-220)", $: 1155200 }, { "#": "4 THOMPSON POND RD (13-0-529)", $: 103e4 }, { "#": "5 THOMPSON POND RD (13-0-535)", $: 1134600 }, { "#": "6 THOMPSON POND RD (13-0-530)", $: 1013400 }, { "#": "7 THOMPSON POND RD (13-0-534)", $: 1061900 }, { "#": "8 THOMPSON POND RD (13-0-531)", $: 1102600 }, { "#": "9 THOMPSON POND RD (8-0-222)", $: 1475200 }, { "#": "1 TOM`S WAY (16-0-254A)", $: 758500 }, { "#": "3 TOM`S WAY (16-0-254B)", $: 973800 }, { "#": "21 TOWNE CREST DR (6-0-52)", $: 911400 }, { "#": "23 TOWNE CREST DR (6-0-51)", $: 864300 }, { "#": "25 TOWNE CREST DR (6-0-50)", $: 818500 }, { "#": "29 TOWNE CREST DR (6-0-34)", $: 896500 }, { "#": "31 TOWNE CREST DR (6-0-66)", $: 839600 }, { "#": "11 TREMONT ST (12-0-248)", $: 619100 }, { "#": "12 TREMONT ST (12-0-254)", $: 1060300 }, { "#": "15 TREMONT ST (12-0-247)", $: 701300 }, { "#": "16 TREMONT ST (12-0-255A)", $: 909e3 }, { "#": "17 TREMONT ST (12-0-246)", $: 610300 }, { "#": "19 TREMONT ST (12-0-243)", $: 491800 }, { "#": "20 TREMONT ST (12-0-255)", $: 730800 }, { "#": "21 TREMONT ST (12-0-242)", $: 468e3 }, { "#": "22 TREMONT ST (12-0-256)", $: 1268300 }, { "#": "4 TEDFORD DR (9-0-16)", $: 814800 }, { "#": "24 TREMONT ST (12-0-257B)", $: 1240200 }, { "#": "25 TREMONT ST (12-0-240)", $: 619500 }, { "#": "29 TREMONT ST (12-0-238)", $: 634700 }, { "#": "30 TREMONT ST (12-0-258)", $: 639e3 }, { "#": "31 TREMONT ST (12-0-237)", $: 551100 }, { "#": "32 TREMONT ST (12-0-259)", $: 674600 }, { "#": "33 TREMONT ST (12-0-236)", $: 589700 }, { "#": "34 TREMONT ST (12-0-260)", $: 670400 }, { "#": "35 TREMONT ST (12-0-235)", $: 672700 }, { "#": "36 TREMONT ST (12-0-261)", $: 587700 }, { "#": "37 TREMONT ST (12-0-234)", $: 576200 }, { "#": "38 TREMONT ST (12-0-262)", $: 646700 }, { "#": "39 TREMONT ST (12-0-233)", $: 665200 }, { "#": "4 TREMONT ST (12-0-252)", $: 654500 }, { "#": "40 TREMONT ST (12-0-263)", $: 570500 }, { "#": "5 TREMONT ST (12-0-251)", $: 709400 }, { "#": "7 TREMONT ST (12-0-250)", $: 668500 }, { "#": "8 TREMONT ST (12-0-253)", $: 685e3 }, { "#": "1 UNICORN AVE (17-0-45)", $: 540900 }, { "#": "10 UNICORN AVE (17-0-38)", $: 789e3 }, { "#": "10 UNICORN AVE (17-0-39)", $: 656800 }, { "#": "11 UNICORN AVE (17-0-41)", $: 686e3 }, { "#": "12 UNICORN AVE (17-0-40)", $: 675400 }, { "#": "3 UNICORN AVE (17-0-44)", $: 576600 }, { "#": "4 UNICORN AVE (17-0-35)", $: 746400 }, { "#": "6 UNICORN AVE (17-0-36)", $: 600800 }, { "#": "7 UNICORN AVE (17-0-43)", $: 580200 }, { "#": "8 UNICORN AVE (17-0-37)", $: 549300 }, { "#": "9 UNICORN AVE (17-0-42)", $: 794700 }, { "#": "12 UPLAND RD (14-0-128)", $: 817300 }, { "#": "15 UPLAND RD (14-0-148)", $: 667600 }, { "#": "18 UPLAND RD (14-0-129)", $: 754300 }, { "#": "22 UPLAND RD (14-0-130)", $: 593600 }, { "#": "27 UPLAND RD (14-0-146)", $: 684600 }, { "#": "29 UPLAND RD (14-0-145)", $: 561700 }, { "#": "33 UPLAND RD (14-0-144)", $: 647300 }, { "#": "34 UPLAND RD (14-0-133)", $: 665800 }, { "#": "37 UPLAND RD (14-0-143)", $: 549e3 }, { "#": "41 UPLAND RD (14-0-142)", $: 617200 }, { "#": "42 UPLAND RD (14-0-136)", $: 649400 }, { "#": "45 UPLAND RD (14-0-141)", $: 677800 }, { "#": "46 UPLAND RD (14-0-137)", $: 575700 }, { "#": "8 UPLAND RD (14-0-127)", $: 571500 }, { "#": "1 VALDORA DR (1-0-306)", $: 787500 }, { "#": "11 VALDORA DR (7-0-463)", $: 1176300 }, { "#": "14 VALDORA DR (7-0-466)", $: 1086500 }, { "#": "15 VALDORA DR (7-0-464)", $: 970500 }, { "#": "16 VALDORA DR (7-0-465)", $: 1042800 }, { "#": "2 VALDORA DR (7-0-474)", $: 940800 }, { "#": "4 VALDORA DR (7-0-473)", $: 877100 }, { "#": "24 TREMONT ST (12-0-257B)", $: 1240200 }, { "#": "5 VALDORA DR (1-0-309)", $: 869e3 }, { "#": "6 VALDORA DR (7-0-472)", $: 907300 }, { "#": "7 VALDORA DR (7-0-461)", $: 982200 }, { "#": "8 VALDORA DR (7-0-471)", $: 1005200 }, { "#": "9 VALDORA DR (7-0-462)", $: 1091800 }, { "#": "10 VALLEY RD (1-0-20)", $: 745500 }, { "#": "11 VALLEY RD (1-0-43)", $: 739300 }, { "#": "12 VALLEY RD (1-0-21)", $: 932400 }, { "#": "14 VALLEY RD (1-0-22)", $: 728100 }, { "#": "15 VALLEY RD (1-0-42)", $: 1002300 }, { "#": "16 VALLEY RD (1-0-23)", $: 876400 }, { "#": "17 VALLEY RD (1-0-41)", $: 768200 }, { "#": "18 VALLEY RD (1-0-32)", $: 855800 }, { "#": "19 VALLEY RD (1-0-40)", $: 737600 }, { "#": "2 VALLEY RD (6-0-135A)", $: 701600 }, { "#": "20 VALLEY RD (1-0-33)", $: 813e3 }, { "#": "21 VALLEY RD (1-0-39)", $: 785100 }, { "#": "22 VALLEY RD (1-0-34)", $: 849700 }, { "#": "23 VALLEY RD (1-0-38)", $: 792800 }, { "#": "24 VALLEY RD (1-0-35)", $: 792400 }, { "#": "25 VALLEY RD (1-0-301)", $: 881600 }, { "#": "26 VALLEY RD (1-0-36)", $: 864200 }, { "#": "27 VALLEY RD (1-0-300)", $: 864400 }, { "#": "28 VALLEY RD (1-0-290)", $: 939400 }, { "#": "29 VALLEY RD (1-0-299)", $: 897100 }, { "#": "3 VALLEY RD (7-0-218)", $: 792700 }, { "#": "30 VALLEY RD (1-0-291)", $: 966700 }, { "#": "31 VALLEY RD (1-0-298)", $: 893500 }, { "#": "32 VALLEY RD (1-0-292)", $: 879800 }, { "#": "33 VALLEY RD (1-0-297)", $: 931100 }, { "#": "34 VALLEY RD (1-0-293)", $: 918e3 }, { "#": "35 VALLEY RD (1-0-296)", $: 962500 }, { "#": "36 VALLEY RD (1-0-294)", $: 1084500 }, { "#": "38 VALLEY RD (1-0-295)", $: 962400 }, { "#": "4 VALLEY RD (6-0-127)", $: 807500 }, { "#": "5 VALLEY RD (7-0-217)", $: 763100 }, { "#": "8 VALLEY RD (1-0-19)", $: 627100 }, { "#": "9 VALLEY RD (1-0-44)", $: 760900 }, { "#": "2 VERA LN (12-0-130)", $: 795800 }, { "#": "3 VERA LN (12-0-134)", $: 79e4 }, { "#": "4 VERA LN (12-0-131)", $: 769700 }, { "#": "5 VERA LN (12-0-133)", $: 837700 }, { "#": "6 VERA LN (12-0-132)", $: 832900 }, { "#": "7 VERA LN (7-0-28)", $: 790800 }, { "#": "8 VERA LN (7-0-27)", $: 683200 }, { "#": "10 VERNON AVE (6-0-152)", $: 646100 }, { "#": "11 VERNON AVE (6-0-154)", $: 744600 }, { "#": "12 VERNON AVE (6-0-153)", $: 667600 }, { "#": "13 VERNON AVE (7-0-208)", $: 536100 }, { "#": "15 VERNON AVE (7-0-207)", $: 681400 }, { "#": "5 VALDORA DR (1-0-309)", $: 869e3 }, { "#": "16 VERNON AVE (7-0-209)", $: 501700 }, { "#": "19 VERNON AVE (7-0-205)", $: 723300 }, { "#": "20 VERNON AVE (7-0-210)", $: 655700 }, { "#": "21 VERNON AVE (7-0-495)", $: 786400 }, { "#": "3 VERNON AVE (6-0-155)", $: 598700 }, { "#": "6 VERNON AVE (6-0-150)", $: 570200 }, { "#": "8 VERNON AVE (6-0-151)", $: 631400 }, { "#": "1 VETERANS LN (1-0-158)", $: 676600 }, { "#": "2 VETERANS LN (1-0-165)", $: 605400 }, { "#": "3 VETERANS LN (1-0-159)", $: 616700 }, { "#": "4 VETERANS LN (1-0-164)", $: 666300 }, { "#": "5 VETERANS LN (1-0-160)", $: 696400 }, { "#": "6 VETERANS LN (1-0-163)", $: 588800 }, { "#": "8 VETERANS LN (1-0-162)", $: 667300 }, { "#": "9 VETERANS LN (1-0-161)", $: 669500 }, { "#": "1 VICTORIA LN (16-0-274)", $: 575500 }, { "#": "10 VICTORIA LN (16-0-201)", $: 560800 }, { "#": "11 VICTORIA LN (16-0-259)", $: 546300 }, { "#": "12 VICTORIA LN (16-0-202)", $: 858800 }, { "#": "14 VICTORIA LN (16-0-203)", $: 545400 }, { "#": "2 VICTORIA LN (16-0-197)", $: 771700 }, { "#": "3 VICTORIA LN (16-0-273)", $: 617200 }, { "#": "4 VICTORIA LN (16-0-198)", $: 657300 }, { "#": "6 VICTORIA LN (16-0-199)", $: 988100 }, { "#": "7 VICTORIA LN (16-0-261)", $: 692500 }, { "#": "8 VICTORIA LN (16-0-200)", $: 880600 }, { "#": "9 VICTORIA LN (16-0-260)", $: 600900 }, { "#": "VINTON CT (7-0-420)", $: 516300 }, { "#": "1 VINTON CT (7-0-430)", $: 848500 }, { "#": "3 VINTON CT (7-0-429)", $: 716300 }, { "#": "4 VINTON CT (7-0-426)", $: 645900 }, { "#": "5 VINTON CT (7-0-428)", $: 693600 }, { "#": "6 VINTON CT (7-0-418)", $: 559500 }, { "#": "2 VIRGINIA LN (16-0-A6)", $: 934600 }, { "#": "3 VIRGINIA LN (15-0-89)", $: 102e4 }, { "#": "4 VIRGINIA LN (16-0-B6)", $: 888500 }, { "#": "5 VIRGINIA LN (15-0-88)", $: 997200 }, { "#": "3 W FERDINAND ST (2-0-250)", $: 73e4 }, { "#": "5 W FERDINAND ST (2-0-249)", $: 689600 }, { "#": "6 W FERDINAND ST (2-0-246)", $: 775200 }, { "#": "7 W FERDINAND ST (2-0-248)", $: 690600 }, { "#": "8 W FERDINAND ST (2-0-247)", $: 686100 }, { "#": "1 WAGNER RD (20-0-7)", $: 875e3 }, { "#": "11 WAGNER RD (20-0-2)", $: 707700 }, { "#": "15 WAGNER RD (20-0-1)", $: 692300 }, { "#": "17 WAGNER RD (21-0-15)", $: 645300 }, { "#": "19 WAGNER RD (21-0-14)", $: 675900 }, { "#": "21 WAGNER RD (21-0-13)", $: 583100 }, { "#": "3 WAGNER RD (20-0-6)", $: 1190200 }, { "#": "5 WAGNER RD (20-0-5)", $: 637400 }, { "#": "16 VERNON AVE (7-0-209)", $: 501700 }, { "#": "7 WAGNER RD (20-0-4)", $: 660100 }, { "#": "9 WAGNER RD (20-0-3)", $: 1044300 }, { "#": "5 WALNUT ST (13-0-436)", $: 862600 }, { "#": "6 WALNUT ST (13-0-437)", $: 535500 }, { "#": "8 WALNUT ST (13-0-438)", $: 784900 }, { "#": "10 WALSH AVE (3-0-18)", $: 642100 }, { "#": "11 WALSH AVE (3-0-24)", $: 700400 }, { "#": "12 WALSH AVE (3-0-19)", $: 826400 }, { "#": "14 WALSH AVE (3-0-20)", $: 807e3 }, { "#": "15 WALSH AVE (3-0-23)", $: 577300 }, { "#": "16 WALSH AVE (3-0-21)", $: 710300 }, { "#": "17 WALSH AVE (3-0-22)", $: 690400 }, { "#": "18 WALSH AVE (2-0-202)", $: 723500 }, { "#": "19 WALSH AVE (2-0-243)", $: 884500 }, { "#": "20 WALSH AVE (2-0-203)", $: 712600 }, { "#": "21 WALSH AVE (2-0-242)", $: 733800 }, { "#": "22 WALSH AVE (2-0-204)", $: 736600 }, { "#": "23 WALSH AVE (2-0-241)", $: 658e3 }, { "#": "24 WALSH AVE (2-0-205)", $: 848900 }, { "#": "25 WALSH AVE (2-0-240)", $: 673900 }, { "#": "26 WALSH AVE (2-0-206)", $: 650900 }, { "#": "27 WALSH AVE (2-0-239)", $: 669100 }, { "#": "28 WALSH AVE (2-0-207)", $: 817200 }, { "#": "3 WALSH AVE (3-0-29)", $: 618100 }, { "#": "30 WALSH AVE (2-0-208)", $: 803e3 }, { "#": "31 WALSH AVE (2-0-237)", $: 756200 }, { "#": "32 WALSH AVE (2-0-209)", $: 833e3 }, { "#": "33 WALSH AVE (2-0-236)", $: 841400 }, { "#": "34 WALSH AVE (2-0-210)", $: 769900 }, { "#": "35 WALSH AVE (2-0-235)", $: 772900 }, { "#": "36 WALSH AVE (2-0-211)", $: 743e3 }, { "#": "37 WALSH AVE (2-0-234)", $: 804400 }, { "#": "38 WALSH AVE (2-0-212)", $: 750700 }, { "#": "39 WALSH AVE (2-0-233)", $: 764400 }, { "#": "40 WALSH AVE (2-0-213)", $: 806300 }, { "#": "41 WALSH AVE (2-0-232)", $: 823900 }, { "#": "42 WALSH AVE (2-0-214)", $: 713e3 }, { "#": "43 WALSH AVE (2-0-231)", $: 775500 }, { "#": "44 WALSH AVE (2-0-215)", $: 964500 }, { "#": "48 WALSH AVE (2-0-379)", $: 1014400 }, { "#": "49 WALSH AVE (2-0-374)", $: 1016100 }, { "#": "5 WALSH AVE (3-0-27)", $: 778600 }, { "#": "50 WALSH AVE (2-0-380)", $: 961800 }, { "#": "51 WALSH AVE (2-0-373)", $: 1015100 }, { "#": "52 WALSH AVE (2-0-381)", $: 1009500 }, { "#": "53 WALSH AVE (2-0-372)", $: 939600 }, { "#": "6 WALSH AVE (3-0-16)", $: 559100 }, { "#": "7 WALSH AVE (3-0-26)", $: 656600 }, { "#": "8 WALSH AVE (3-0-17)", $: 933200 }, { "#": "9 WALSH AVE (3-0-25)", $: 693400 }, { "#": "7 WAGNER RD (20-0-4)", $: 660100 }, { "#": "11 WARREN ST (18-0-423)", $: 607800 }, { "#": "13 WARREN ST (18-0-421)", $: 481200 }, { "#": "131 WARREN ST (18-0-422)", $: 506600 }, { "#": "19 WARREN ST (18-0-418)", $: 624900 }, { "#": "24 WARREN ST (18-0-310)", $: 510100 }, { "#": "26 WARREN ST (18-0-311)", $: 483700 }, { "#": "27 WARREN ST (18-0-414)", $: 653e3 }, { "#": "31 WARREN ST (18-0-412)", $: 551800 }, { "#": "36 WARREN ST (18-0-319)", $: 724400 }, { "#": "37 WARREN ST (18-0-409)", $: 839600 }, { "#": "39 WARREN ST (18-0-408)", $: 704300 }, { "#": "43 WARREN ST (18-0-406)", $: 67e4 }, { "#": "45 WARREN ST (18-0-405)", $: 586300 }, { "#": "47 WARREN ST (18-0-404)", $: 723600 }, { "#": "49 WARREN ST (18-0-403)", $: 699900 }, { "#": "51 WARREN ST (18-0-402)", $: 637800 }, { "#": "7 WARREN ST (18-0-425)", $: 632900 }, { "#": "9 WARREN ST (18-0-424)", $: 715900 }, { "#": "1 WASHINGTON AVE (12-0-174)", $: 663800 }, { "#": "10 WASHINGTON AVE (12-0-160)", $: 624700 }, { "#": "12 WASHINGTON AVE (7-0-19)", $: 532700 }, { "#": "13 WASHINGTON AVE (7-0-37)", $: 606200 }, { "#": "15 WASHINGTON AVE (7-0-36)", $: 728500 }, { "#": "19 WASHINGTON AVE (7-0-35)", $: 519900 }, { "#": "3 WASHINGTON AVE (12-0-173)", $: 586500 }, { "#": "5 WASHINGTON AVE (12-0-172)", $: 647700 }, { "#": "6 WASHINGTON AVE (12-0-158)", $: 527600 }, { "#": "8 WASHINGTON AVE (12-0-159)", $: 718700 }, { "#": "1 WASHINGTON CT (12-0-147)", $: 616e3 }, { "#": "2 WASHINGTON CT (12-0-145)", $: 1039600 }, { "#": "4 WASHINGTON CT (12-0-146)", $: 543400 }, { "#": "11 WASHINGTON ST (12-0-201)", $: 632800 }, { "#": "12 WASHINGTON ST (12-0-223)", $: 565500 }, { "#": "15 WASHINGTON ST (12-0-200)", $: 611800 }, { "#": "16 WASHINGTON ST (12-0-224)", $: 775400 }, { "#": "18 WASHINGTON ST (12-0-225)", $: 687200 }, { "#": "19 WASHINGTON ST (12-0-199)", $: 619e3 }, { "#": "22 WASHINGTON ST (12-0-226)", $: 709800 }, { "#": "23 WASHINGTON ST (12-0-183)", $: 579900 }, { "#": "24 WASHINGTON ST (12-0-227)", $: 581600 }, { "#": "27 WASHINGTON ST (12-0-177)", $: 892200 }, { "#": "31 WASHINGTON ST (12-0-176)", $: 617300 }, { "#": "33 WASHINGTON ST (12-0-175)", $: 580600 }, { "#": "35 WASHINGTON ST (12-0-156)", $: 648500 }, { "#": "37 WASHINGTON ST (12-0-155)", $: 631200 }, { "#": "41 WASHINGTON ST (12-0-154)", $: 710600 }, { "#": "43 WASHINGTON ST (12-0-149)", $: 579700 }, { "#": "5 WASHINGTON ST (12-0-203)", $: 573600 }, { "#": "52 WASHINGTON ST (12-0-232)", $: 750100 }, { "#": "53 WASHINGTON ST (12-0-143)", $: 447900 }, { "#": "11 WARREN ST (18-0-423)", $: 607800 }, { "#": "55 WASHINGTON ST (12-0-142)", $: 629800 }, { "#": "56 WASHINGTON ST (12-0-264)", $: 623500 }, { "#": "58 WASHINGTON ST (12-0-265)", $: 587700 }, { "#": "61 WASHINGTON ST (12-0-135)", $: 695300 }, { "#": "62 WASHINGTON ST (12-0-279)", $: 744900 }, { "#": "64 WASHINGTON ST (12-0-280)", $: 617100 }, { "#": "66 WASHINGTON ST (12-0-281)", $: 655500 }, { "#": "71 WASHINGTON ST (12-0-128)", $: 661600 }, { "#": "73 WASHINGTON ST (12-0-127)", $: 650300 }, { "#": "75 WASHINGTON ST (12-0-96)", $: 588300 }, { "#": "76 WASHINGTON ST (12-0-98)", $: 729e3 }, { "#": "77 WASHINGTON ST (12-0-95)", $: 701500 }, { "#": "79 WASHINGTON ST (12-0-94)", $: 700500 }, { "#": "8 WASHINGTON ST (12-0-222)", $: 673500 }, { "#": "80 WASHINGTON ST (12-0-99)", $: 680600 }, { "#": "81 WASHINGTON ST (12-0-93)", $: 1066700 }, { "#": "88 WASHINGTON ST (12-0-100)", $: 778900 }, { "#": "89 WASHINGTON ST (12-0-90)", $: 690200 }, { "#": "90 WASHINGTON ST (12-0-101)", $: 636300 }, { "#": "91 WASHINGTON ST (12-0-89)", $: 723400 }, { "#": "92 WASHINGTON ST (12-0-102)", $: 869800 }, { "#": "93 WASHINGTON ST (12-0-88)", $: 745100 }, { "#": "94 WASHINGTON ST (12-0-103)", $: 719300 }, { "#": "10 WATERHOUSE RD (21-0-31)", $: 751800 }, { "#": "11 WATERHOUSE RD (21-0-35)", $: 769700 }, { "#": "12 WATERHOUSE RD (21-0-32)", $: 662900 }, { "#": "14 WATERHOUSE RD (21-0-33)", $: 646e3 }, { "#": "15 WATERHOUSE RD (21-0-34)", $: 716e3 }, { "#": "16 WATERHOUSE RD (21-0-18)", $: 780100 }, { "#": "17 WATERHOUSE RD (21-0-17)", $: 606900 }, { "#": "2 WATERHOUSE RD (21-0-27)", $: 709600 }, { "#": "3 WATERHOUSE RD (21-0-39)", $: 894100 }, { "#": "4 WATERHOUSE RD (21-0-28)", $: 808300 }, { "#": "5 WATERHOUSE RD (21-0-38)", $: 746900 }, { "#": "6 WATERHOUSE RD (21-0-29)", $: 595300 }, { "#": "7 WATERHOUSE RD (21-0-37)", $: 878300 }, { "#": "8 WATERHOUSE RD (21-0-30)", $: 692400 }, { "#": "9 WATERHOUSE RD (21-0-36)", $: 618300 }, { "#": "10 WAVERLY ST (12-0-61)", $: 628600 }, { "#": "12 WAVERLY ST (12-0-62)", $: 57e4 }, { "#": "14 WAVERLY ST (12-0-63)", $: 1273600 }, { "#": "15 WAVERLY ST (12-0-83B)", $: 790800 }, { "#": "16 WAVERLY ST (12-0-64)", $: 771600 }, { "#": "17 WAVERLY ST (12-0-79)", $: 730800 }, { "#": "18 WAVERLY ST (12-0-65)", $: 687600 }, { "#": "19 WAVERLY ST (12-0-78)", $: 910600 }, { "#": "23 WAVERLY ST (12-0-76)", $: 721400 }, { "#": "24 WAVERLY ST (12-0-68)", $: 859700 }, { "#": "25 WAVERLY ST (12-0-75)", $: 1422300 }, { "#": "26 WAVERLY ST (12-0-69)", $: 716100 }, { "#": "55 WASHINGTON ST (12-0-142)", $: 629800 }, { "#": "28 WAVERLY ST (12-0-70)", $: 634300 }, { "#": "30 WAVERLY ST (12-0-71)", $: 676200 }, { "#": "32 WAVERLY ST (12-0-72)", $: 842900 }, { "#": "34 WAVERLY ST (11-0-255A)", $: 615200 }, { "#": "6 WAVERLY ST (12-0-59)", $: 542400 }, { "#": "8 WAVERLY ST (12-0-60)", $: 862e3 }, { "#": "9 WAVERLY ST (12-0-80)", $: 780100 }, { "#": "1 WEBSTER CT (18-0-338)", $: 514700 }, { "#": "2 WEBSTER CT (18-0-347)", $: 564100 }, { "#": "3 WEBSTER CT (18-0-339)", $: 372500 }, { "#": "4 WEBSTER CT (18-0-346)", $: 602500 }, { "#": "6 WEBSTER CT (18-0-345)", $: 643300 }, { "#": "1 WELD RD (16-0-184)", $: 752700 }, { "#": "3 WELD RD (16-0-144)", $: 719700 }, { "#": "3 WESCOTT RD (11-0-357)", $: 713700 }, { "#": "4 WESCOTT RD (11-0-353)", $: 639400 }, { "#": "5 WESCOTT RD (11-0-356)", $: 621900 }, { "#": "6 WESCOTT RD (11-0-354)", $: 577500 }, { "#": "8 WESCOTT RD (11-0-355)", $: 660900 }, { "#": "0 WEST HANCOCK ST (18-0-41)", $: 666e3 }, { "#": "1 WEST HANCOCK ST (18-0-33)", $: 783400 }, { "#": "11 WEST HANCOCK ST (18-0-36)", $: 619300 }, { "#": "2 WEST HANCOCK ST (18-0-40)", $: 676600 }, { "#": "4 WEST HANCOCK ST (18-0-39)", $: 696300 }, { "#": "6 WEST HANCOCK ST (18-0-38)", $: 673700 }, { "#": "WEST ST (17-0-392)", $: 751300 }, { "#": "1 WEST ST (17-0-317)", $: 721400 }, { "#": "10 WEST ST (17-0-394)", $: 746900 }, { "#": "11 WEST ST (17-0-414)", $: 741300 }, { "#": "12 WEST ST (17-0-395)", $: 724400 }, { "#": "15 WEST ST (17-0-413)", $: 729600 }, { "#": "18 WEST ST (17-0-397)", $: 843300 }, { "#": "19 WEST ST (17-0-412)", $: 777800 }, { "#": "2 WEST ST (17-0-319)", $: 739600 }, { "#": "20 WEST ST (17-0-398)", $: 828600 }, { "#": "21 WEST ST (17-0-411)", $: 791700 }, { "#": "23 WEST ST (17-0-410)", $: 727300 }, { "#": "24 WEST ST (17-0-399)", $: 816e3 }, { "#": "25 WEST ST (17-0-409)", $: 774200 }, { "#": "27 WEST ST (17-0-408)", $: 835300 }, { "#": "3 WEST ST (17-0-316)", $: 702700 }, { "#": "30 WEST ST (17-0-400)", $: 873500 }, { "#": "34 WEST ST (17-0-401)", $: 793600 }, { "#": "36 WEST ST (17-0-402)", $: 713300 }, { "#": "37 WEST ST (17-0-407)", $: 855600 }, { "#": "38 WEST ST (17-0-403)", $: 797e3 }, { "#": "39 WEST ST (17-0-406)", $: 792800 }, { "#": "4 WEST ST (17-0-321)", $: 838e3 }, { "#": "40 WEST ST (17-0-404)", $: 582900 }, { "#": "42 WEST ST (17-0-405)", $: 625100 }, { "#": "28 WAVERLY ST (12-0-70)", $: 634300 }, { "#": "43 WEST ST (17-0-450)", $: 775700 }, { "#": "5 WEST ST (17-0-315)", $: 693900 }, { "#": "6 WEST ST (17-0-323)", $: 611900 }, { "#": "7 WEST ST (17-0-416)", $: 706800 }, { "#": "8 WEST ST (17-0-393)", $: 637e3 }, { "#": "9 WEST ST (17-0-415)", $: 694600 }, { "#": "285 WEST WYOMING AVE (4-0-72)", $: 742e3 }, { "#": "106 WESTWOOD RD (16-0-70)", $: 689100 }, { "#": "114 WESTWOOD RD (16-0-71)", $: 721100 }, { "#": "115 WESTWOOD RD (16-0-63)", $: 751400 }, { "#": "19 WESTWOOD RD (16-0-48)", $: 721400 }, { "#": "25 WESTWOOD RD (16-0-47)", $: 772200 }, { "#": "36 WESTWOOD RD (16-0-49)", $: 675800 }, { "#": "39 WESTWOOD RD (16-0-44)", $: 753200 }, { "#": "42 WESTWOOD RD (16-0-50)", $: 774600 }, { "#": "43 WESTWOOD RD (16-0-43)", $: 734300 }, { "#": "51 WESTWOOD RD (16-0-42)", $: 717500 }, { "#": "52 WESTWOOD RD (16-0-51)", $: 672200 }, { "#": "57 WESTWOOD RD (16-0-41)", $: 715100 }, { "#": "58 WESTWOOD RD (16-0-52)", $: 721400 }, { "#": "63 WESTWOOD RD (16-0-40)", $: 731600 }, { "#": "64 WESTWOOD RD (16-0-53)", $: 563700 }, { "#": "67 WESTWOOD RD (16-0-39)", $: 616200 }, { "#": "70 WESTWOOD RD (16-0-54)", $: 758500 }, { "#": "73 WESTWOOD RD (16-0-38)", $: 786300 }, { "#": "78 WESTWOOD RD (16-0-55)", $: 870300 }, { "#": "79 WESTWOOD RD (16-0-37)", $: 904900 }, { "#": "84 WESTWOOD RD (16-0-67)", $: 789300 }, { "#": "89 WESTWOOD RD (16-0-66)", $: 660600 }, { "#": "91 WESTWOOD RD (16-0-65)", $: 692200 }, { "#": "92 WESTWOOD RD (16-0-68)", $: 683e3 }, { "#": "94 WESTWOOD RD (16-0-69)", $: 718100 }, { "#": "95 WESTWOOD RD (16-0-64)", $: 1265400 }, { "#": "10 WHIPPLE AVE (1-0-197)", $: 580800 }, { "#": "11 WHIPPLE AVE (1-0-208)", $: 617100 }, { "#": "12 WHIPPLE AVE (1-0-198)", $: 620500 }, { "#": "15 WHIPPLE AVE (1-0-207)", $: 549700 }, { "#": "16 WHIPPLE AVE (1-0-199)", $: 665800 }, { "#": "161 WHIPPLE AVE (1-0-200A)", $: 860100 }, { "#": "17 WHIPPLE AVE (1-0-206)", $: 636800 }, { "#": "18 WHIPPLE AVE (1-0-200)", $: 694800 }, { "#": "19 WHIPPLE AVE (1-0-205)", $: 745500 }, { "#": "2 WHIPPLE AVE (1-0-194)", $: 566200 }, { "#": "20 WHIPPLE AVE (1-0-201)", $: 615100 }, { "#": "21 WHIPPLE AVE (1-0-204)", $: 67e4 }, { "#": "23 WHIPPLE AVE (1-0-203)", $: 829800 }, { "#": "4 WHIPPLE AVE (1-0-195)", $: 575200 }, { "#": "5 WHIPPLE AVE (1-0-212)", $: 547e3 }, { "#": "51 WHIPPLE AVE (1-0-202)", $: 649300 }, { "#": "7 WHIPPLE AVE (1-0-210)", $: 637900 }, { "#": "43 WEST ST (17-0-450)", $: 775700 }, { "#": "8 WHIPPLE AVE (1-0-196)", $: 601900 }, { "#": "1 WHITTEMORE LN (2-0-1)", $: 905200 }, { "#": "10 WHITTEMORE LN (2-0-279)", $: 725e3 }, { "#": "12 WHITTEMORE LN (2-0-280)", $: 723e3 }, { "#": "14 WHITTEMORE LN (2-0-281)", $: 857600 }, { "#": "16 WHITTEMORE LN (2-0-282)", $: 812600 }, { "#": "2 WHITTEMORE LN (2-0-287)", $: 727200 }, { "#": "3 WHITTEMORE LN (2-0-277)", $: 798800 }, { "#": "4 WHITTEMORE LN (2-0-286)", $: 762200 }, { "#": "5 WHITTEMORE LN (2-0-276)", $: 862300 }, { "#": "6 WHITTEMORE LN (2-0-285)", $: 716100 }, { "#": "7 WHITTEMORE LN (2-0-284)", $: 751200 }, { "#": "8 WHITTEMORE LN (2-0-278)", $: 716800 }, { "#": "9 WHITTEMORE LN (2-0-283)", $: 742400 }, { "#": "2 WILBUR ST (19-0-159)", $: 938500 }, { "#": "3 WILBUR ST (19-0-162)", $: 725500 }, { "#": "3 WILDWOOD LN (15-0-17)", $: 701900 }, { "#": "4 WILDWOOD LN (15-0-44)", $: 965800 }, { "#": "6 WILDWOOD LN (15-0-46)", $: 956500 }, { "#": "107 WILLIAM ST (12-0-310)", $: 1173200 }, { "#": "113 WILLIAM ST (12-0-309)", $: 693400 }, { "#": "169 WILLIAM ST (17-0-134)", $: 647300 }, { "#": "174 WILLIAM ST (17-0-444)", $: 678500 }, { "#": "175 WILLIAM ST (17-0-132)", $: 616600 }, { "#": "182 WILLIAM ST (17-0-445)", $: 599400 }, { "#": "184 WILLIAM ST (17-0-446)", $: 704600 }, { "#": "185 WILLIAM ST (17-0-131)", $: 789300 }, { "#": "189 WILLIAM ST (17-0-130)", $: 751600 }, { "#": "190 WILLIAM ST (17-0-448)", $: 674400 }, { "#": "195 WILLIAM ST (17-0-128)", $: 800700 }, { "#": "199 WILLIAM ST (17-0-129)", $: 723200 }, { "#": "220 WILLIAM ST (17-0-449)", $: 908900 }, { "#": "221 WILLIAM ST (17-0-61)", $: 586200 }, { "#": "227 WILLIAM ST (17-0-60)", $: 574600 }, { "#": "229 WILLIAM ST (17-0-59)", $: 583e3 }, { "#": "241 WILLIAM ST (17-0-56)", $: 755e3 }, { "#": "244 WILLIAM ST (17-0-451)", $: 683400 }, { "#": "245 WILLIAM ST (17-0-55)", $: 712300 }, { "#": "250 WILLIAM ST (17-0-452)", $: 751300 }, { "#": "251 WILLIAM ST (17-0-54)", $: 597200 }, { "#": "256 WILLIAM ST (17-0-453)", $: 64e4 }, { "#": "259 WILLIAM ST (17-0-47)", $: 583700 }, { "#": "26 WILLIAM ST (12-0-379)", $: 596e3 }, { "#": "263 WILLIAM ST (17-0-46)", $: 604e3 }, { "#": "271 WILLIAM ST (17-0-34)", $: 562700 }, { "#": "277 WILLIAM ST (17-0-33)", $: 657600 }, { "#": "278 WILLIAM ST (17-0-475)", $: 616600 }, { "#": "279 WILLIAM ST (17-0-32)", $: 607800 }, { "#": "286 WILLIAM ST (17-0-476)", $: 615100 }, { "#": "290 WILLIAM ST (17-0-477)", $: 580700 }, { "#": "8 WHIPPLE AVE (1-0-196)", $: 601900 }, { "#": "291 WILLIAM ST (17-0-21)", $: 776700 }, { "#": "294 WILLIAM ST (17-0-478)", $: 695600 }, { "#": "301 WILLIAM ST (17-0-20)", $: 832e3 }, { "#": "302 WILLIAM ST (17-0-479)", $: 576100 }, { "#": "311 WILLIAM ST (17-0-3)", $: 752700 }, { "#": "314 WILLIAM ST (17-0-480)", $: 566700 }, { "#": "325 WILLIAM ST (17-0-2)", $: 717300 }, { "#": "326 WILLIAM ST (17-0-481)", $: 642e3 }, { "#": "342 WILLIAM ST (22-0-23)", $: 663800 }, { "#": "351 WILLIAM ST (17-0-1)", $: 695600 }, { "#": "355 WILLIAM ST (22-0-22A)", $: 1119200 }, { "#": "358 WILLIAM ST (22-0-24)", $: 734e3 }, { "#": "359 WILLIAM ST (22-0-21)", $: 751600 }, { "#": "366 WILLIAM ST (22-0-25)", $: 801e3 }, { "#": "372 WILLIAM ST (22-0-26)", $: 765e3 }, { "#": "382 WILLIAM ST (22-0-27)", $: 676400 }, { "#": "383 WILLIAM ST (22-0-20)", $: 827500 }, { "#": "385 WILLIAM ST (22-0-19)", $: 574700 }, { "#": "387 WILLIAM ST (22-0-18)", $: 682700 }, { "#": "390 WILLIAM ST (22-0-70)", $: 565700 }, { "#": "391 WILLIAM ST (22-0-17)", $: 795100 }, { "#": "398 WILLIAM ST (22-0-71)", $: 559700 }, { "#": "405 WILLIAM ST (22-0-16)", $: 610300 }, { "#": "407 WILLIAM ST (22-0-14)", $: 613800 }, { "#": "408 WILLIAM ST (22-0-72)", $: 634200 }, { "#": "418 WILLIAM ST (22-0-73)", $: 665600 }, { "#": "422 WILLIAM ST (22-0-74)", $: 593100 }, { "#": "426 WILLIAM ST (22-0-75)", $: 628500 }, { "#": "427 WILLIAM ST (22-0-13)", $: 555900 }, { "#": "429 WILLIAM ST (22-0-12)", $: 933800 }, { "#": "431 WILLIAM ST (22-0-11)", $: 821800 }, { "#": "434 WILLIAM ST (22-0-76)", $: 768100 }, { "#": "437 WILLIAM ST (22-0-10)", $: 753400 }, { "#": "438 WILLIAM ST (22-0-77)", $: 546600 }, { "#": "445 WILLIAM ST (22-0-9)", $: 717600 }, { "#": "457 WILLIAM ST (22-0-7)", $: 783500 }, { "#": "46 WILLIAM ST (12-0-383)", $: 543300 }, { "#": "463 WILLIAM ST (22-0-6)", $: 735900 }, { "#": "483 WILLIAM ST (22-0-3)", $: 702e3 }, { "#": "495 WILLIAM ST (22-0-2)", $: 1074400 }, { "#": "507 WILLIAM ST (22-0-1)", $: 876e3 }, { "#": "509 WILLIAM ST (21-0-451A)", $: 1111800 }, { "#": "511 WILLIAM ST (21-0-451)", $: 679100 }, { "#": "69 WILLIAM ST (12-0-324)", $: 739500 }, { "#": "75 WILLIAM ST (12-0-322)", $: 1057500 }, { "#": "79 WILLIAM ST (12-0-321)", $: 663600 }, { "#": "80 WILLIAM ST (12-0-388)", $: 605800 }, { "#": "83 WILLIAM ST (12-0-320)", $: 624200 }, { "#": "86 WILLIAM ST (12-0-389)", $: 616500 }, { "#": "94 WILLIAM ST (12-0-391)", $: 694600 }, { "#": "291 WILLIAM ST (17-0-21)", $: 776700 }, { "#": "99 WILLIAM ST (12-0-311)", $: 628600 }, { "#": "10 WILSON RD (14-0-190)", $: 551700 }, { "#": "12 WILSON RD (14-0-191)", $: 655400 }, { "#": "14 WILSON RD (14-0-192)", $: 648600 }, { "#": "15 WILSON RD (14-0-176)", $: 1809200 }, { "#": "16 WILSON RD (14-0-193)", $: 664200 }, { "#": "19 WILSON RD (14-0-153)", $: 703700 }, { "#": "20 WILSON RD (14-0-217)", $: 702600 }, { "#": "21 WILSON RD (14-0-152)", $: 694100 }, { "#": "22 WILSON RD (14-0-218)", $: 735400 }, { "#": "23 WILSON RD (14-0-151)", $: 587700 }, { "#": "24 WILSON RD (14-0-219)", $: 698400 }, { "#": "25 WILSON RD (14-0-150)", $: 661200 }, { "#": "26 WILSON RD (14-0-220)", $: 568300 }, { "#": "27 WILSON RD (14-0-126)", $: 690200 }, { "#": "28 WILSON RD (14-0-221)", $: 718100 }, { "#": "29 WILSON RD (14-0-125)", $: 677700 }, { "#": "30 WILSON RD (14-0-222)", $: 544400 }, { "#": "32 WILSON RD (14-0-223)", $: 585600 }, { "#": "33 WILSON RD (14-0-123)", $: 582e3 }, { "#": "4 WILSON RD (19-0-312A)", $: 985e3 }, { "#": "7 WILSON RD (19-0-331)", $: 645100 }, { "#": "8 WILSON RD (14-0-189)", $: 553400 }, { "#": "1 WINDSOR RD (3-0-217)", $: 782700 }, { "#": "11 WINDSOR RD (3-0-212)", $: 681400 }, { "#": "12 WINDSOR RD (3-0-255)", $: 767500 }, { "#": "15 WINDSOR RD (3-0-211)", $: 683800 }, { "#": "17 WINDSOR RD (3-0-210)", $: 667e3 }, { "#": "19 WINDSOR RD (3-0-209)", $: 694600 }, { "#": "24 WINDSOR RD (3-0-288)", $: 714800 }, { "#": "26 WINDSOR RD (3-0-289)", $: 613100 }, { "#": "27 WINDSOR RD (3-0-307)", $: 792100 }, { "#": "28 WINDSOR RD (3-0-290)", $: 689e3 }, { "#": "29 WINDSOR RD (3-0-306)", $: 716800 }, { "#": "3 WINDSOR RD (3-0-216)", $: 852200 }, { "#": "30 WINDSOR RD (3-0-291)", $: 662200 }, { "#": "31 WINDSOR RD (3-0-305)", $: 861900 }, { "#": "33 WINDSOR RD (3-0-304)", $: 713e3 }, { "#": "35 WINDSOR RD (3-0-303)", $: 718500 }, { "#": "37 WINDSOR RD (3-0-302)", $: 617900 }, { "#": "39 WINDSOR RD (3-0-301)", $: 717800 }, { "#": "40 WINDSOR RD (3-0-294)", $: 788900 }, { "#": "41 WINDSOR RD (3-0-300)", $: 655800 }, { "#": "42 WINDSOR RD (3-0-295)", $: 719300 }, { "#": "43 WINDSOR RD (3-0-299)", $: 1078400 }, { "#": "45 WINDSOR RD (3-0-298)", $: 884700 }, { "#": "46 WINDSOR RD (3-0-296)", $: 704200 }, { "#": "47 WINDSOR RD (3-0-297)", $: 702700 }, { "#": "5 WINDSOR RD (3-0-215)", $: 708700 }, { "#": "6 WINDSOR RD (3-0-253)", $: 726700 }, { "#": "99 WILLIAM ST (12-0-311)", $: 628600 }, { "#": "7 WINDSOR RD (3-0-214)", $: 735300 }, { "#": "8 WINDSOR RD (3-0-254)", $: 910300 }, { "#": "9 WINDSOR RD (3-0-213)", $: 663300 }, { "#": "19 WINSHIP DR (6-0-20A3)", $: 455800 }, { "#": "20 WINSHIP DR (6-0-20A4)", $: 1246100 }, { "#": "21 WINSHIP DR (6-0-214A)", $: 1332300 }, { "#": "22 WINSHIP DR (6-0-213A)", $: 1298100 }, { "#": "23 WINSHIP DR (6-0-215A)", $: 1276400 }, { "#": "24 WINSHIP DR (6-0-212A)", $: 1340400 }, { "#": "26 WINSHIP DR (6-0-211A)", $: 1210300 }, { "#": "28 WINSHIP DR (6-0-210A1)", $: 1441600 }, { "#": "30 WINSHIP DR (6-0-209A)", $: 1344200 }, { "#": "32 WINSHIP DR (6-0-208A)", $: 1322e3 }, { "#": "34 WINSHIP DR (6-0-207A)", $: 1253e3 }, { "#": "36 WINSHIP DR (6-0-206A)", $: 1373600 }, { "#": "37 WINSHIP DR (6-0-221A)", $: 1228e3 }, { "#": "38 WINSHIP DR (6-0-205A)", $: 1447e3 }, { "#": "40 WINSHIP DR (6-0-204A)", $: 1194500 }, { "#": "41 WINSHIP DR (6-0-222A)", $: 1186200 }, { "#": "42 WINSHIP DR (6-0-203A)", $: 1197900 }, { "#": "44 WINSHIP DR (6-0-202A)", $: 1202800 }, { "#": "45 WINSHIP DR (6-0-223A)", $: 1186200 }, { "#": "46 WINSHIP DR (6-0-201A)", $: 1254100 }, { "#": "47 WINSHIP DR (6-0-224A)", $: 1341500 }, { "#": "49 WINSHIP DR (6-0-20A1)", $: 874800 }, { "#": "11 WINTHROP ST (18-0-526)", $: 745800 }, { "#": "14 WINTHROP ST (18-0-528)", $: 665800 }, { "#": "15 WINTHROP ST (18-0-550)", $: 532500 }, { "#": "17 WINTHROP ST (18-0-606)", $: 549500 }, { "#": "18 WINTHROP ST (18-0-607)", $: 589700 }, { "#": "19 WINTHROP ST (18-0-605)", $: 875100 }, { "#": "20 WINTHROP ST (18-0-608)", $: 731700 }, { "#": "25 WINTHROP ST (18-0-631)", $: 605400 }, { "#": "27 WINTHROP ST (18-0-630)", $: 896500 }, { "#": "28 WINTHROP ST (18-0-632)", $: 783800 }, { "#": "3 WINTHROP ST (18-0-480)", $: 909200 }, { "#": "5 WINTHROP ST (18-0-479)", $: 667400 }, { "#": "7 WINTHROP ST (18-0-500)", $: 671800 }, { "#": "8 WINTHROP ST (18-0-483A)", $: 714400 }, { "#": "1 WOLCOTT RD (12-0-30)", $: 493900 }, { "#": "3 WOLCOTT RD (12-0-31)", $: 483900 }, { "#": "7 WOLCOTT RD (12-0-33)", $: 68e4 }, { "#": "2 WOODBRIAR RD (3-0-224)", $: 791800 }, { "#": "3 WOODBRIAR RD (3-0-242)", $: 843100 }, { "#": "4 WOODBRIAR RD (3-0-225)", $: 827700 }, { "#": "5 WOODBRIAR RD (3-0-241)", $: 1038400 }, { "#": "7 WOODBRIAR RD (3-0-240)", $: 925400 }, { "#": "8 WOODBRIAR RD (3-0-237)", $: 727800 }, { "#": "9 WOODBRIAR RD (3-0-239)", $: 896800 }, { "#": "WRIGHT ST (18-0-432)", $: 596400 }, { "#": "7 WINDSOR RD (3-0-214)", $: 735300 }, { "#": "WRIGHT ST (18-0-436)", $: 547100 }, { "#": "WRIGHT ST (18-0-472)", $: 461800 }, { "#": "10 WRIGHT ST (18-0-445A)", $: 957700 }, { "#": "13 WRIGHT ST (18-0-440)", $: 702200 }, { "#": "14 WRIGHT ST (18-0-448)", $: 525400 }, { "#": "16 WRIGHT ST (18-0-449)", $: 624300 }, { "#": "17 WRIGHT ST (18-0-438)", $: 715e3 }, { "#": "18 WRIGHT ST (18-0-450)", $: 572800 }, { "#": "19 WRIGHT ST (18-0-437)", $: 625300 }, { "#": "26 WRIGHT ST (18-0-453)", $: 841500 }, { "#": "32 WRIGHT ST (18-0-161)", $: 669400 }, { "#": "33 WRIGHT ST (18-0-182)", $: 443600 }, { "#": "34 WRIGHT ST (18-0-162)", $: 641700 }, { "#": "35 WRIGHT ST (18-0-181)", $: 613800 }, { "#": "37 WRIGHT ST (18-0-179)", $: 674500 }, { "#": "38 WRIGHT ST (18-0-163)", $: 563200 }, { "#": "4 WRIGHT ST (18-0-443)", $: 588e3 }, { "#": "44 WRIGHT ST (18-0-165)", $: 610100 }, { "#": "45 WRIGHT ST (18-0-176)", $: 566500 }, { "#": "46 WRIGHT ST (18-0-166)", $: 654100 }, { "#": "49 WRIGHT ST (18-0-168)", $: 549700 }, { "#": "50 WRIGHT ST (18-0-135)", $: 599500 }, { "#": "53 WRIGHT ST (18-0-127)", $: 650500 }, { "#": "56 WRIGHT ST (18-0-124)", $: 539200 }, { "#": "60 WRIGHT ST (18-0-125A)", $: 812600 }, { "#": "62 WRIGHT ST (17-0-218)", $: 731500 }, { "#": "65 WRIGHT ST (17-0-215)", $: 764600 }, { "#": "66 WRIGHT ST (17-0-219)", $: 536200 }, { "#": "67 WRIGHT ST (17-0-214)", $: 708500 }, { "#": "68 WRIGHT ST (17-0-220)", $: 635200 }, { "#": "69 WRIGHT ST (17-0-213)", $: 692200 }, { "#": "70 WRIGHT ST (17-0-221)", $: 532700 }, { "#": "72 WRIGHT ST (17-0-222)", $: 623200 }, { "#": "8 WRIGHT ST (18-0-444)", $: 752400 }, { "#": "WRIGHT ST (18-0-436)", $: 547100 }, { "#": "10 ALDEN AVE (21-0-310)", $: 494e3 }, { "#": "10 ALDEN AVE (21-0-310B)", $: 521700 }, { "#": "25 ALDEN AVE (21-0-297A)", $: 678400 }, { "#": "25 ALDEN AVE (21-0-297B)", $: 640100 }, { "#": "12 BEACON ST (2-0-165A1)", $: 1007e3 }, { "#": "12 BEACON ST (2-0-165A2)", $: 944e3 }, { "#": "12 BEACON ST (2-0-165A3)", $: 1033e3 }, { "#": "12 BENTON ST (18-0-327A)", $: 476500 }, { "#": "12 BENTON ST (18-0-327B)", $: 427e3 }, { "#": "12 BENTON ST (18-0-327C)", $: 488600 }, { "#": "12 BENTON ST (18-0-327D)", $: 496100 }, { "#": "12 BENTON ST (18-0-327E)", $: 489200 }, { "#": "12 BENTON ST (18-0-327F)", $: 481600 }, { "#": "12 BENTON ST (18-0-327G)", $: 481900 }, { "#": "12 BENTON ST (18-0-327H)", $: 474200 }, { "#": "25 BOW ST (7-0-370A)", $: 588600 }, { "#": "27 BOW ST (7-0-370B)", $: 495100 }, { "#": "11 BROADWAY (11-0-291A)", $: 805300 }, { "#": "11 BROADWAY (11-0-291B)", $: 742700 }, { "#": "29 CEDAR AVE (18-0-69A)", $: 616700 }, { "#": "29 CEDAR AVE (18-0-69B)", $: 574600 }, { "#": "175 CENTRAL ST (12-0-4175)", $: 434200 }, { "#": "177 CENTRAL ST (12-0-4177)", $: 421200 }, { "#": "83 CENTRAL ST (12-0-396A)", $: 491900 }, { "#": "83 CENTRAL ST (12-0-396B)", $: 472e3 }, { "#": "83 CENTRAL ST (12-0-396C)", $: 400800 }, { "#": "85 CENTRAL ST (12-0-395A)", $: 790700 }, { "#": "85 CENTRAL ST (12-0-395B)", $: 790700 }, { "#": "39 CHESTNUT ST (18-0-562)", $: 408200 }, { "#": "39 CHESTNUT ST (18-0-5621R)", $: 439300 }, { "#": "39 CHESTNUT ST (18-0-5622C)", $: 524100 }, { "#": "39 CHESTNUT ST (18-0-5622L)", $: 416400 }, { "#": "39 CHESTNUT ST (18-0-5622R)", $: 458900 }, { "#": "39 CHESTNUT ST (18-0-5624)", $: 354e3 }, { "#": "39 CHESTNUT ST (18-0-5625A)", $: 345500 }, { "#": "39 CHESTNUT ST (18-0-5628)", $: 55e4 }, { "#": "1 CHRISTOPHER ST (3-0-50A1)", $: 624400 }, { "#": "2 CHRISTOPHER ST (3-0-50A2)", $: 258900 }, { "#": "3 CHRISTOPHER ST (3-0-50A3)", $: 626900 }, { "#": "4 CHRISTOPHER ST (3-0-50A4)", $: 648300 }, { "#": "5 CHRISTOPHER ST (3-0-50A5)", $: 658200 }, { "#": "6 CHRISTOPHER ST (3-0-50A6)", $: 619500 }, { "#": "7 CHRISTOPHER ST (3-0-50A7)", $: 259300 }, { "#": "8 CHRISTOPHER ST (3-0-50A8)", $: 624700 }, { "#": "195 COLLINCOTE ST (11-0-3031)", $: 487100 }, { "#": "195 COLLINCOTE ST (11-0-30310)", $: 360700 }, { "#": "195 COLLINCOTE ST (11-0-30311)", $: 444900 }, { "#": "195 COLLINCOTE ST (11-0-30312)", $: 540400 }, { "#": "195 COLLINCOTE ST (11-0-3032)", $: 399800 }, { "#": "195 COLLINCOTE ST (11-0-3034)", $: 568300 }, { "#": "10 ALDEN AVE (21-0-310)", $: 494e3 }, { "#": "195 COLLINCOTE ST (11-0-3035)", $: 444700 }, { "#": "195 COLLINCOTE ST (11-0-3036)", $: 529500 }, { "#": "195 COLLINCOTE ST (11-0-3037)", $: 525900 }, { "#": "195 COLLINCOTE ST (11-0-3038)", $: 399800 }, { "#": "195 COLLINCOTE ST (11-0-3039)", $: 364500 }, { "#": "10 COMMON ST (12-0-4116)", $: 488500 }, { "#": "8 COMMON ST (12-0-4111)", $: 460900 }, { "#": "8 COMMON ST (12-0-4112)", $: 444500 }, { "#": "8 COMMON ST (12-0-4113)", $: 442100 }, { "#": "8 COMMON ST (12-0-4114)", $: 439600 }, { "#": "8 COMMON ST (12-0-4115)", $: 518700 }, { "#": "17 CONGRESS ST (18-0-529A)", $: 739900 }, { "#": "19 CONGRESS ST (18-0-529B)", $: 739900 }, { "#": "14 COOLIDGE ST (18-0-540A)", $: 486200 }, { "#": "16 COOLIDGE ST (18-0-540B)", $: 486200 }, { "#": "109 ELM ST (7-0-110A)", $: 838700 }, { "#": "109 ELM ST (7-0-110B)", $: 922400 }, { "#": "25 EMERSON ST (13-0-51525)", $: 528800 }, { "#": "27 EMERSON ST (13-0-51527)", $: 522e3 }, { "#": "11 EXECUTIVE DR (27-0-3C111)", $: 661900 }, { "#": "11 EXECUTIVE DR (27-0-3C112)", $: 800400 }, { "#": "11 EXECUTIVE DR (27-0-3C113)", $: 829300 }, { "#": "11 EXECUTIVE DR (27-0-3C114)", $: 661900 }, { "#": "11 EXECUTIVE DR (27-0-3C115)", $: 661900 }, { "#": "11 EXECUTIVE DR (27-0-3C116)", $: 800400 }, { "#": "11 EXECUTIVE DR (27-0-3C117)", $: 800400 }, { "#": "11 EXECUTIVE DR (27-0-3C118)", $: 661900 }, { "#": "11 EXECUTIVE DR (27-0-3C121)", $: 718600 }, { "#": "11 EXECUTIVE DR (27-0-3C122)", $: 829300 }, { "#": "11 EXECUTIVE DR (27-0-3C123)", $: 800400 }, { "#": "11 EXECUTIVE DR (27-0-3C124)", $: 661900 }, { "#": "11 EXECUTIVE DR (27-0-3C125)", $: 661900 }, { "#": "11 EXECUTIVE DR (27-0-3C126)", $: 829300 }, { "#": "11 EXECUTIVE DR (27-0-3C127)", $: 800400 }, { "#": "11 EXECUTIVE DR (27-0-3C128)", $: 689700 }, { "#": "11 EXECUTIVE DR (27-0-3C131)", $: 718600 }, { "#": "11 EXECUTIVE DR (27-0-3C132)", $: 902100 }, { "#": "11 EXECUTIVE DR (27-0-3C133)", $: 829300 }, { "#": "11 EXECUTIVE DR (27-0-3C134)", $: 698400 }, { "#": "11 EXECUTIVE DR (27-0-3C135)", $: 727300 }, { "#": "11 EXECUTIVE DR (27-0-3C136)", $: 873200 }, { "#": "11 EXECUTIVE DR (27-0-3C137)", $: 800400 }, { "#": "11 EXECUTIVE DR (27-0-3C138)", $: 689700 }, { "#": "7 EXECUTIVE DR (27-0-3C211)", $: 661900 }, { "#": "7 EXECUTIVE DR (27-0-3C212)", $: 800400 }, { "#": "7 EXECUTIVE DR (27-0-3C213)", $: 884300 }, { "#": "7 EXECUTIVE DR (27-0-3C214)", $: 661900 }, { "#": "7 EXECUTIVE DR (27-0-3C215)", $: 661900 }, { "#": "7 EXECUTIVE DR (27-0-3C216)", $: 800400 }, { "#": "7 EXECUTIVE DR (27-0-3C217)", $: 800400 }, { "#": "195 COLLINCOTE ST (11-0-3035)", $: 444700 }, { "#": "7 EXECUTIVE DR (27-0-3C218)", $: 661900 }, { "#": "7 EXECUTIVE DR (27-0-3C221)", $: 689700 }, { "#": "7 EXECUTIVE DR (27-0-3C222)", $: 829300 }, { "#": "7 EXECUTIVE DR (27-0-3C223)", $: 873200 }, { "#": "7 EXECUTIVE DR (27-0-3C224)", $: 661900 }, { "#": "7 EXECUTIVE DR (27-0-3C225)", $: 661900 }, { "#": "7 EXECUTIVE DR (27-0-3C226)", $: 829300 }, { "#": "7 EXECUTIVE DR (27-0-3C227)", $: 873200 }, { "#": "7 EXECUTIVE DR (27-0-3C228)", $: 730400 }, { "#": "7 EXECUTIVE DR (27-0-3C231)", $: 689700 }, { "#": "7 EXECUTIVE DR (27-0-3C232)", $: 902100 }, { "#": "7 EXECUTIVE DR (27-0-3C233)", $: 873200 }, { "#": "7 EXECUTIVE DR (27-0-3C234)", $: 698400 }, { "#": "7 EXECUTIVE DR (27-0-3C235)", $: 819700 }, { "#": "7 EXECUTIVE DR (27-0-3C236)", $: 902100 }, { "#": "7 EXECUTIVE DR (27-0-3C237)", $: 873200 }, { "#": "7 EXECUTIVE DR (27-0-3C238)", $: 718600 }, { "#": "100 FELLSVIEW TRL (4-0-101A)", $: 526500 }, { "#": "100 FELLSVIEW TRL (4-0-102A)", $: 417100 }, { "#": "100 FELLSVIEW TRL (4-0-103B)", $: 417100 }, { "#": "100 FELLSVIEW TRL (4-0-104B)", $: 318900 }, { "#": "100 FELLSVIEW TRL (4-0-105B)", $: 323100 }, { "#": "100 FELLSVIEW TRL (4-0-106C)", $: 435700 }, { "#": "100 FELLSVIEW TRL (4-0-107C)", $: 323100 }, { "#": "100 FELLSVIEW TRL (4-0-108C)", $: 318900 }, { "#": "110 FELLSVIEW TRL (4-0-111A)", $: 383400 }, { "#": "110 FELLSVIEW TRL (4-0-112A)", $: 427e3 }, { "#": "110 FELLSVIEW TRL (4-0-113B)", $: 417100 }, { "#": "110 FELLSVIEW TRL (4-0-114B)", $: 422700 }, { "#": "110 FELLSVIEW TRL (4-0-115C)", $: 417100 }, { "#": "110 FELLSVIEW TRL (4-0-116C)", $: 41e4 }, { "#": "120 FELLSVIEW TRL (4-0-121A)", $: 298100 }, { "#": "120 FELLSVIEW TRL (4-0-122A)", $: 323100 }, { "#": "120 FELLSVIEW TRL (4-0-123A)", $: 387900 }, { "#": "120 FELLSVIEW TRL (4-0-124B)", $: 300500 }, { "#": "120 FELLSVIEW TRL (4-0-125B)", $: 300600 }, { "#": "120 FELLSVIEW TRL (4-0-126B)", $: 417100 }, { "#": "120 FELLSVIEW TRL (4-0-127C)", $: 318900 }, { "#": "120 FELLSVIEW TRL (4-0-128C)", $: 337600 }, { "#": "120 FELLSVIEW TRL (4-0-129C)", $: 421400 }, { "#": "200 FELLSVIEW TRL (4-0-201A)", $: 369200 }, { "#": "200 FELLSVIEW TRL (4-0-202A)", $: 318900 }, { "#": "200 FELLSVIEW TRL (4-0-203A)", $: 317400 }, { "#": "200 FELLSVIEW TRL (4-0-204B)", $: 417100 }, { "#": "200 FELLSVIEW TRL (4-0-205B)", $: 318900 }, { "#": "200 FELLSVIEW TRL (4-0-206B)", $: 323100 }, { "#": "200 FELLSVIEW TRL (4-0-207C)", $: 417100 }, { "#": "200 FELLSVIEW TRL (4-0-208C)", $: 333700 }, { "#": "200 FELLSVIEW TRL (4-0-209C)", $: 323100 }, { "#": "210 FELLSVIEW TRL (4-0-211A)", $: 428e3 }, { "#": "7 EXECUTIVE DR (27-0-3C218)", $: 661900 }, { "#": "210 FELLSVIEW TRL (4-0-212A)", $: 383400 }, { "#": "210 FELLSVIEW TRL (4-0-213B)", $: 417100 }, { "#": "210 FELLSVIEW TRL (4-0-214B)", $: 417100 }, { "#": "210 FELLSVIEW TRL (4-0-215C)", $: 408600 }, { "#": "210 FELLSVIEW TRL (4-0-216C)", $: 439600 }, { "#": "220 FELLSVIEW TRL (4-0-221A)", $: 417100 }, { "#": "220 FELLSVIEW TRL (4-0-222A)", $: 422e3 }, { "#": "220 FELLSVIEW TRL (4-0-223B)", $: 417100 }, { "#": "220 FELLSVIEW TRL (4-0-224B)", $: 400300 }, { "#": "220 FELLSVIEW TRL (4-0-225C)", $: 417100 }, { "#": "220 FELLSVIEW TRL (4-0-226C)", $: 417100 }, { "#": "300 FELLSVIEW TRL (4-0-301A)", $: 370900 }, { "#": "300 FELLSVIEW TRL (4-0-302A)", $: 413600 }, { "#": "300 FELLSVIEW TRL (4-0-303B)", $: 464400 }, { "#": "300 FELLSVIEW TRL (4-0-304B)", $: 436e3 }, { "#": "300 FELLSVIEW TRL (4-0-305C)", $: 429500 }, { "#": "300 FELLSVIEW TRL (4-0-306C)", $: 429800 }, { "#": "310 FELLSVIEW TRL (4-0-311A)", $: 420800 }, { "#": "310 FELLSVIEW TRL (4-0-312A)", $: 417100 }, { "#": "310 FELLSVIEW TRL (4-0-313B)", $: 432800 }, { "#": "310 FELLSVIEW TRL (4-0-314B)", $: 417100 }, { "#": "310 FELLSVIEW TRL (4-0-315C)", $: 417100 }, { "#": "310 FELLSVIEW TRL (4-0-316C)", $: 417100 }, { "#": "320 FELLSVIEW TRL (4-0-321A)", $: 555200 }, { "#": "320 FELLSVIEW TRL (4-0-322A)", $: 417100 }, { "#": "320 FELLSVIEW TRL (4-0-323B)", $: 543200 }, { "#": "320 FELLSVIEW TRL (4-0-324B)", $: 417100 }, { "#": "320 FELLSVIEW TRL (4-0-325C)", $: 543200 }, { "#": "320 FELLSVIEW TRL (4-0-326C)", $: 417100 }, { "#": "400 FELLSVIEW TRL (4-0-401A)", $: 532400 }, { "#": "400 FELLSVIEW TRL (4-0-402A)", $: 417100 }, { "#": "400 FELLSVIEW TRL (4-0-403B)", $: 547700 }, { "#": "400 FELLSVIEW TRL (4-0-404B)", $: 447800 }, { "#": "400 FELLSVIEW TRL (4-0-405C)", $: 547700 }, { "#": "400 FELLSVIEW TRL (4-0-406C)", $: 417100 }, { "#": "410 FELLSVIEW TRL (4-0-411A)", $: 432800 }, { "#": "410 FELLSVIEW TRL (4-0-412A)", $: 475400 }, { "#": "410 FELLSVIEW TRL (4-0-413B)", $: 417100 }, { "#": "410 FELLSVIEW TRL (4-0-414B)", $: 297100 }, { "#": "410 FELLSVIEW TRL (4-0-415B)", $: 318900 }, { "#": "410 FELLSVIEW TRL (4-0-416C)", $: 423300 }, { "#": "410 FELLSVIEW TRL (4-0-417C)", $: 297800 }, { "#": "410 FELLSVIEW TRL (4-0-418C)", $: 323100 }, { "#": "500 FELLSVIEW TRL (4-0-501A)", $: 419e3 }, { "#": "500 FELLSVIEW TRL (4-0-502A)", $: 417100 }, { "#": "500 FELLSVIEW TRL (4-0-503B)", $: 417100 }, { "#": "500 FELLSVIEW TRL (4-0-504B)", $: 421100 }, { "#": "500 FELLSVIEW TRL (4-0-505C)", $: 418e3 }, { "#": "500 FELLSVIEW TRL (4-0-506C)", $: 417100 }, { "#": "510 FELLSVIEW TRL (4-0-511A)", $: 417100 }, { "#": "210 FELLSVIEW TRL (4-0-212A)", $: 383400 }, { "#": "510 FELLSVIEW TRL (4-0-512A)", $: 476200 }, { "#": "510 FELLSVIEW TRL (4-0-513B)", $: 417100 }, { "#": "510 FELLSVIEW TRL (4-0-514B)", $: 306800 }, { "#": "510 FELLSVIEW TRL (4-0-515B)", $: 323100 }, { "#": "510 FELLSVIEW TRL (4-0-516C)", $: 417100 }, { "#": "510 FELLSVIEW TRL (4-0-517C)", $: 312600 }, { "#": "510 FELLSVIEW TRL (4-0-518C)", $: 323100 }, { "#": "117 FRANKLIN ST (13-0-151A)", $: 389700 }, { "#": "117 FRANKLIN ST (13-0-151B)", $: 438e3 }, { "#": "117 FRANKLIN ST (13-0-151C)", $: 530600 }, { "#": "117 FRANKLIN ST (13-0-151D)", $: 612800 }, { "#": "131 FRANKLIN ST (8-0-D101)", $: 370300 }, { "#": "131 FRANKLIN ST (8-0-D102)", $: 368e3 }, { "#": "131 FRANKLIN ST (8-0-D103)", $: 248500 }, { "#": "131 FRANKLIN ST (8-0-D104)", $: 264600 }, { "#": "131 FRANKLIN ST (8-0-D105)", $: 339400 }, { "#": "131 FRANKLIN ST (8-0-D106)", $: 371100 }, { "#": "131 FRANKLIN ST (8-0-D201)", $: 366100 }, { "#": "131 FRANKLIN ST (8-0-D202)", $: 390400 }, { "#": "131 FRANKLIN ST (8-0-D203)", $: 338100 }, { "#": "131 FRANKLIN ST (8-0-D204)", $: 356500 }, { "#": "131 FRANKLIN ST (8-0-D205)", $: 365900 }, { "#": "131 FRANKLIN ST (8-0-D206)", $: 346700 }, { "#": "131 FRANKLIN ST (8-0-D301)", $: 348900 }, { "#": "131 FRANKLIN ST (8-0-D302)", $: 346700 }, { "#": "131 FRANKLIN ST (8-0-D303)", $: 347400 }, { "#": "131 FRANKLIN ST (8-0-D304)", $: 370100 }, { "#": "131 FRANKLIN ST (8-0-D305)", $: 362500 }, { "#": "131 FRANKLIN ST (8-0-D306)", $: 39e4 }, { "#": "131 FRANKLIN ST (8-0-D401)", $: 346700 }, { "#": "131 FRANKLIN ST (8-0-D402)", $: 346700 }, { "#": "131 FRANKLIN ST (8-0-D403)", $: 347400 }, { "#": "131 FRANKLIN ST (8-0-D404)", $: 359900 }, { "#": "131 FRANKLIN ST (8-0-D405)", $: 353800 }, { "#": "131 FRANKLIN ST (8-0-D406)", $: 362800 }, { "#": "131 FRANKLIN ST (8-0-D501)", $: 346700 }, { "#": "131 FRANKLIN ST (8-0-D502)", $: 346700 }, { "#": "131 FRANKLIN ST (8-0-D503)", $: 381500 }, { "#": "131 FRANKLIN ST (8-0-D504)", $: 394e3 }, { "#": "131 FRANKLIN ST (8-0-D505)", $: 390500 }, { "#": "131 FRANKLIN ST (8-0-D506)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C101)", $: 357e3 }, { "#": "133 FRANKLIN ST (8-0-C102)", $: 342400 }, { "#": "133 FRANKLIN ST (8-0-C103)", $: 248500 }, { "#": "133 FRANKLIN ST (8-0-C104)", $: 280100 }, { "#": "133 FRANKLIN ST (8-0-C105)", $: 375e3 }, { "#": "133 FRANKLIN ST (8-0-C106)", $: 334600 }, { "#": "133 FRANKLIN ST (8-0-C201)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C202)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C203)", $: 347400 }, { "#": "510 FELLSVIEW TRL (4-0-512A)", $: 476200 }, { "#": "133 FRANKLIN ST (8-0-C204)", $: 356500 }, { "#": "133 FRANKLIN ST (8-0-C205)", $: 403300 }, { "#": "133 FRANKLIN ST (8-0-C206)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C301)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C302)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C303)", $: 347400 }, { "#": "133 FRANKLIN ST (8-0-C304)", $: 387800 }, { "#": "133 FRANKLIN ST (8-0-C305)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C306)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C401)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C402)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C403)", $: 347400 }, { "#": "133 FRANKLIN ST (8-0-C404)", $: 356500 }, { "#": "133 FRANKLIN ST (8-0-C405)", $: 370800 }, { "#": "133 FRANKLIN ST (8-0-C406)", $: 349900 }, { "#": "133 FRANKLIN ST (8-0-C501)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C502)", $: 346700 }, { "#": "133 FRANKLIN ST (8-0-C503)", $: 391300 }, { "#": "133 FRANKLIN ST (8-0-C504)", $: 359700 }, { "#": "133 FRANKLIN ST (8-0-C505)", $: 381900 }, { "#": "133 FRANKLIN ST (8-0-C506)", $: 346700 }, { "#": "135 FRANKLIN ST (8-0-A101)", $: 338200 }, { "#": "135 FRANKLIN ST (8-0-A102)", $: 323600 }, { "#": "135 FRANKLIN ST (8-0-A103)", $: 260700 }, { "#": "135 FRANKLIN ST (8-0-A104)", $: 278300 }, { "#": "135 FRANKLIN ST (8-0-A105)", $: 333100 }, { "#": "135 FRANKLIN ST (8-0-A106)", $: 326e3 }, { "#": "135 FRANKLIN ST (8-0-A201)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A202)", $: 346300 }, { "#": "135 FRANKLIN ST (8-0-A203)", $: 340900 }, { "#": "135 FRANKLIN ST (8-0-A204)", $: 343700 }, { "#": "135 FRANKLIN ST (8-0-A205)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A206)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A301)", $: 343600 }, { "#": "135 FRANKLIN ST (8-0-A302)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A303)", $: 34e4 }, { "#": "135 FRANKLIN ST (8-0-A304)", $: 349800 }, { "#": "135 FRANKLIN ST (8-0-A305)", $: 346600 }, { "#": "135 FRANKLIN ST (8-0-A306)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A401)", $: 343600 }, { "#": "135 FRANKLIN ST (8-0-A402)", $: 358300 }, { "#": "135 FRANKLIN ST (8-0-A403)", $: 377400 }, { "#": "135 FRANKLIN ST (8-0-A404)", $: 367500 }, { "#": "135 FRANKLIN ST (8-0-A405)", $: 354e3 }, { "#": "135 FRANKLIN ST (8-0-A406)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A501)", $: 340200 }, { "#": "135 FRANKLIN ST (8-0-A502)", $: 363700 }, { "#": "135 FRANKLIN ST (8-0-A503)", $: 340900 }, { "#": "135 FRANKLIN ST (8-0-A504)", $: 349800 }, { "#": "135 FRANKLIN ST (8-0-A505)", $: 340200 }, { "#": "133 FRANKLIN ST (8-0-C204)", $: 356500 }, { "#": "135 FRANKLIN ST (8-0-A506)", $: 371300 }, { "#": "137 FRANKLIN ST (8-0-B101)", $: 332500 }, { "#": "137 FRANKLIN ST (8-0-B102)", $: 353600 }, { "#": "137 FRANKLIN ST (8-0-B103)", $: 252300 }, { "#": "137 FRANKLIN ST (8-0-B104)", $: 275100 }, { "#": "137 FRANKLIN ST (8-0-B105)", $: 341e3 }, { "#": "137 FRANKLIN ST (8-0-B106)", $: 332500 }, { "#": "137 FRANKLIN ST (8-0-B201)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B202)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B203)", $: 345200 }, { "#": "137 FRANKLIN ST (8-0-B204)", $: 370600 }, { "#": "137 FRANKLIN ST (8-0-B205)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B206)", $: 341500 }, { "#": "137 FRANKLIN ST (8-0-B301)", $: 374100 }, { "#": "137 FRANKLIN ST (8-0-B302)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B303)", $: 344e3 }, { "#": "137 FRANKLIN ST (8-0-B304)", $: 357700 }, { "#": "137 FRANKLIN ST (8-0-B305)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B306)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B401)", $: 351600 }, { "#": "137 FRANKLIN ST (8-0-B402)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B403)", $: 345200 }, { "#": "137 FRANKLIN ST (8-0-B404)", $: 364800 }, { "#": "137 FRANKLIN ST (8-0-B405)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B406)", $: 345e3 }, { "#": "137 FRANKLIN ST (8-0-B501)", $: 351400 }, { "#": "137 FRANKLIN ST (8-0-B502)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B503)", $: 345200 }, { "#": "137 FRANKLIN ST (8-0-B504)", $: 354300 }, { "#": "137 FRANKLIN ST (8-0-B505)", $: 344500 }, { "#": "137 FRANKLIN ST (8-0-B506)", $: 344500 }, { "#": "139 FRANKLIN ST (8-0-169A)", $: 708300 }, { "#": "139 FRANKLIN ST (8-0-169B)", $: 732700 }, { "#": "139 FRANKLIN ST (8-0-169C)", $: 713700 }, { "#": "157 FRANKLIN ST (8-0-IA1)", $: 265600 }, { "#": "157 FRANKLIN ST (8-0-IA10)", $: 215400 }, { "#": "157 FRANKLIN ST (8-0-IA11)", $: 265600 }, { "#": "157 FRANKLIN ST (8-0-IA2)", $: 214800 }, { "#": "157 FRANKLIN ST (8-0-IA4)", $: 192300 }, { "#": "157 FRANKLIN ST (8-0-IA5)", $: 192300 }, { "#": "157 FRANKLIN ST (8-0-IA6)", $: 222600 }, { "#": "157 FRANKLIN ST (8-0-IA7)", $: 209100 }, { "#": "157 FRANKLIN ST (8-0-IA8)", $: 262300 }, { "#": "157 FRANKLIN ST (8-0-IA9)", $: 214800 }, { "#": "157 FRANKLIN ST (8-0-IB1)", $: 274100 }, { "#": "157 FRANKLIN ST (8-0-IB2)", $: 220200 }, { "#": "157 FRANKLIN ST (8-0-IB3)", $: 345900 }, { "#": "157 FRANKLIN ST (8-0-IB4)", $: 271300 }, { "#": "157 FRANKLIN ST (8-0-IB5)", $: 291400 }, { "#": "157 FRANKLIN ST (8-0-IB6)", $: 293900 }, { "#": "135 FRANKLIN ST (8-0-A506)", $: 371300 }, { "#": "157 FRANKLIN ST (8-0-IB7)", $: 231400 }, { "#": "157 FRANKLIN ST (8-0-IB8)", $: 289400 }, { "#": "157 FRANKLIN ST (8-0-IC1)", $: 271300 }, { "#": "157 FRANKLIN ST (8-0-IC2)", $: 220600 }, { "#": "157 FRANKLIN ST (8-0-IC3)", $: 292800 }, { "#": "157 FRANKLIN ST (8-0-IC4)", $: 271300 }, { "#": "157 FRANKLIN ST (8-0-IC5)", $: 276300 }, { "#": "157 FRANKLIN ST (8-0-IC6)", $: 291100 }, { "#": "157 FRANKLIN ST (8-0-IC7)", $: 231400 }, { "#": "157 FRANKLIN ST (8-0-IC8)", $: 288600 }, { "#": "157 FRANKLIN ST (8-0-ID1)", $: 271300 }, { "#": "157 FRANKLIN ST (8-0-ID2)", $: 220600 }, { "#": "157 FRANKLIN ST (8-0-ID3)", $: 299300 }, { "#": "157 FRANKLIN ST (8-0-ID4)", $: 288700 }, { "#": "157 FRANKLIN ST (8-0-ID5)", $: 322600 }, { "#": "157 FRANKLIN ST (8-0-ID6)", $: 314600 }, { "#": "157 FRANKLIN ST (8-0-ID7)", $: 266700 }, { "#": "157 FRANKLIN ST (8-0-ID8)", $: 293800 }, { "#": "157 FRANKLIN ST (8-0-IE1)", $: 271300 }, { "#": "157 FRANKLIN ST (8-0-IE2)", $: 220600 }, { "#": "157 FRANKLIN ST (8-0-IE3)", $: 327500 }, { "#": "157 FRANKLIN ST (8-0-IE4)", $: 271300 }, { "#": "157 FRANKLIN ST (8-0-IE5)", $: 346500 }, { "#": "157 FRANKLIN ST (8-0-IE6)", $: 327500 }, { "#": "157 FRANKLIN ST (8-0-IE7)", $: 231700 }, { "#": "157 FRANKLIN ST (8-0-IE8)", $: 308500 }, { "#": "159 FRANKLIN ST (8-0-IIA1)", $: 283700 }, { "#": "159 FRANKLIN ST (8-0-IIA2)", $: 221500 }, { "#": "159 FRANKLIN ST (8-0-IIA3)", $: 203500 }, { "#": "159 FRANKLIN ST (8-0-IIA4)", $: 283700 }, { "#": "159 FRANKLIN ST (8-0-IIA5)", $: 298700 }, { "#": "159 FRANKLIN ST (8-0-IIA6)", $: 301900 }, { "#": "159 FRANKLIN ST (8-0-IIA7)", $: 204200 }, { "#": "159 FRANKLIN ST (8-0-IIA8)", $: 283700 }, { "#": "159 FRANKLIN ST (8-0-IIB1)", $: 302300 }, { "#": "159 FRANKLIN ST (8-0-IIB2)", $: 227300 }, { "#": "159 FRANKLIN ST (8-0-IIB3)", $: 307300 }, { "#": "159 FRANKLIN ST (8-0-IIB4)", $: 270700 }, { "#": "159 FRANKLIN ST (8-0-IIB5)", $: 286900 }, { "#": "159 FRANKLIN ST (8-0-IIB6)", $: 340600 }, { "#": "159 FRANKLIN ST (8-0-IIB7)", $: 244700 }, { "#": "159 FRANKLIN ST (8-0-IIB8)", $: 286900 }, { "#": "159 FRANKLIN ST (8-0-IIC1)", $: 286900 }, { "#": "159 FRANKLIN ST (8-0-IIC2)", $: 231400 }, { "#": "159 FRANKLIN ST (8-0-IIC3)", $: 305200 }, { "#": "159 FRANKLIN ST (8-0-IIC4)", $: 295600 }, { "#": "159 FRANKLIN ST (8-0-IIC5)", $: 286900 }, { "#": "159 FRANKLIN ST (8-0-IIC6)", $: 305200 }, { "#": "159 FRANKLIN ST (8-0-IIC7)", $: 244200 }, { "#": "159 FRANKLIN ST (8-0-IIC8)", $: 270700 }, { "#": "157 FRANKLIN ST (8-0-IB7)", $: 231400 }, { "#": "159 FRANKLIN ST (8-0-IID1)", $: 289e3 }, { "#": "159 FRANKLIN ST (8-0-IID2)", $: 247400 }, { "#": "159 FRANKLIN ST (8-0-IID3)", $: 305200 }, { "#": "159 FRANKLIN ST (8-0-IID4)", $: 308100 }, { "#": "159 FRANKLIN ST (8-0-IID5)", $: 321e3 }, { "#": "159 FRANKLIN ST (8-0-IID6)", $: 326600 }, { "#": "159 FRANKLIN ST (8-0-IID7)", $: 247200 }, { "#": "159 FRANKLIN ST (8-0-IID8)", $: 286900 }, { "#": "159 FRANKLIN ST (8-0-IIE1)", $: 324200 }, { "#": "159 FRANKLIN ST (8-0-IIE2)", $: 231400 }, { "#": "159 FRANKLIN ST (8-0-IIE3)", $: 371500 }, { "#": "159 FRANKLIN ST (8-0-IIE4)", $: 286900 }, { "#": "159 FRANKLIN ST (8-0-IIE5)", $: 324400 }, { "#": "159 FRANKLIN ST (8-0-IIE6)", $: 305200 }, { "#": "159 FRANKLIN ST (8-0-IIE7)", $: 244200 }, { "#": "159 FRANKLIN ST (8-0-IIE8)", $: 286200 }, { "#": "175 FRANKLIN ST (8-0-127)", $: 438900 }, { "#": "175 FRANKLIN ST (8-0-127A)", $: 440800 }, { "#": "177 FRANKLIN ST (8-0-126A)", $: 305200 }, { "#": "177 FRANKLIN ST (8-0-126B)", $: 333e3 }, { "#": "177 FRANKLIN ST (8-0-126C)", $: 342800 }, { "#": "177 FRANKLIN ST (8-0-126D)", $: 335600 }, { "#": "177 FRANKLIN ST (8-0-126E)", $: 349200 }, { "#": "177 FRANKLIN ST (8-0-126F)", $: 335600 }, { "#": "179 FRANKLIN ST (8-0-125A)", $: 287300 }, { "#": "179 FRANKLIN ST (8-0-125B)", $: 342e3 }, { "#": "179 FRANKLIN ST (8-0-125C)", $: 348300 }, { "#": "179 FRANKLIN ST (8-0-125D)", $: 244300 }, { "#": "179 FRANKLIN ST (8-0-125E)", $: 333200 }, { "#": "179 FRANKLIN ST (8-0-125F)", $: 333400 }, { "#": "179 FRANKLIN ST (8-0-125G)", $: 234100 }, { "#": "61 FRANKLIN ST (13-0-61A)", $: 336100 }, { "#": "61 FRANKLIN ST (13-0-61B)", $: 247300 }, { "#": "63 FRANKLIN ST (13-0-63B)", $: 320300 }, { "#": "2 GERRY ST (13-0-469A)", $: 526700 }, { "#": "8 GILMORE ST (17-0-230A)", $: 508200 }, { "#": "8 GILMORE ST (17-0-230B)", $: 435400 }, { "#": "8 GILMORE ST (17-0-230C)", $: 570100 }, { "#": "8 GILMORE ST (17-0-230D)", $: 520100 }, { "#": "8 GILMORE ST (17-0-230E)", $: 451600 }, { "#": "8 GILMORE ST (17-0-230F)", $: 517600 }, { "#": "2 GOULD ST (13-0-15)", $: 276700 }, { "#": "2 GOULD ST (13-0-15B)", $: 265e3 }, { "#": "2 GOULD ST (13-0-15C)", $: 409700 }, { "#": "2 GOULD ST (13-0-15D)", $: 413300 }, { "#": "50 GOULD ST (8-0-30A)", $: 359800 }, { "#": "50 GOULD ST (8-0-30B)", $: 603800 }, { "#": "2 GRANT ST (18-0-507)", $: 472400 }, { "#": "2 GRANT ST (18-0-507A)", $: 471500 }, { "#": "30 HANCOCK ST (13-0-448A)", $: 566200 }, { "#": "159 FRANKLIN ST (8-0-IID1)", $: 289e3 }, { "#": "30 HANCOCK ST (13-0-448B)", $: 602800 }, { "#": "86 HANCOCK ST (13-0-493B)", $: 453700 }, { "#": "88 HANCOCK ST (13-0-493)", $: 565100 }, { "#": "88 HANCOCK ST (13-0-493A)", $: 396200 }, { "#": "10 HERSAM ST (18-0-133A)", $: 515300 }, { "#": "10 HERSAM ST (18-0-133B)", $: 447e3 }, { "#": "11 HERSAM ST (18-0-128A)", $: 393100 }, { "#": "11 HERSAM ST (18-0-128B)", $: 422900 }, { "#": "11 HERSAM ST (18-0-128C)", $: 461400 }, { "#": "12 HERSAM ST (18-0-134A)", $: 682700 }, { "#": "12 HERSAM ST (18-0-134B)", $: 682700 }, { "#": "20 HERSAM ST (18-0-138A)", $: 815400 }, { "#": "22 HERSAM ST (18-0-138B)", $: 693e3 }, { "#": "5 HILLSIDE RD (23-0-110)", $: 396900 }, { "#": "7 HILLSIDE RD (23-0-110A)", $: 398100 }, { "#": "2 JEFTS TRL (3-0-187A)", $: 338200 }, { "#": "3 JEFTS TRL (3-0-187B)", $: 775800 }, { "#": "4 JEFTS TRL (3-0-187C)", $: 587200 }, { "#": "6 JEFTS TRL (3-0-187D)", $: 535800 }, { "#": "9 JEFTS TRL (3-0-187E)", $: 594700 }, { "#": "9 JEFTS TRL (3-0-187F)", $: 377900 }, { "#": "2 KEITHS LN (7-0-48A)", $: 773600 }, { "#": "2 KEITHS LN (7-0-48B)", $: 774200 }, { "#": "100 LEDGEWOOD DR (22-0-110)", $: 462300 }, { "#": "100 LEDGEWOOD DR (22-0-111)", $: 527400 }, { "#": "100 LEDGEWOOD DR (22-0-112)", $: 348500 }, { "#": "100 LEDGEWOOD DR (22-0-113)", $: 339100 }, { "#": "100 LEDGEWOOD DR (22-0-114)", $: 435200 }, { "#": "100 LEDGEWOOD DR (22-0-115)", $: 435600 }, { "#": "100 LEDGEWOOD DR (22-0-116)", $: 330200 }, { "#": "100 LEDGEWOOD DR (22-0-117)", $: 348100 }, { "#": "100 LEDGEWOOD DR (22-0-118)", $: 436900 }, { "#": "100 LEDGEWOOD DR (22-0-210)", $: 516600 }, { "#": "100 LEDGEWOOD DR (22-0-211)", $: 456e3 }, { "#": "100 LEDGEWOOD DR (22-0-212)", $: 359100 }, { "#": "100 LEDGEWOOD DR (22-0-213)", $: 339500 }, { "#": "100 LEDGEWOOD DR (22-0-214)", $: 435100 }, { "#": "100 LEDGEWOOD DR (22-0-215)", $: 435200 }, { "#": "100 LEDGEWOOD DR (22-0-216)", $: 324900 }, { "#": "100 LEDGEWOOD DR (22-0-217)", $: 329500 }, { "#": "100 LEDGEWOOD DR (22-0-218)", $: 437100 }, { "#": "100 LEDGEWOOD DR (22-0-219)", $: 443100 }, { "#": "100 LEDGEWOOD DR (22-0-220)", $: 329300 }, { "#": "100 LEDGEWOOD DR (22-0-310)", $: 463e3 }, { "#": "100 LEDGEWOOD DR (22-0-311)", $: 457900 }, { "#": "100 LEDGEWOOD DR (22-0-312)", $: 428500 }, { "#": "100 LEDGEWOOD DR (22-0-313)", $: 339300 }, { "#": "100 LEDGEWOOD DR (22-0-314)", $: 435200 }, { "#": "100 LEDGEWOOD DR (22-0-315)", $: 470100 }, { "#": "100 LEDGEWOOD DR (22-0-316)", $: 324e3 }, { "#": "30 HANCOCK ST (13-0-448B)", $: 602800 }, { "#": "100 LEDGEWOOD DR (22-0-317)", $: 329100 }, { "#": "100 LEDGEWOOD DR (22-0-318)", $: 437400 }, { "#": "100 LEDGEWOOD DR (22-0-319)", $: 447400 }, { "#": "100 LEDGEWOOD DR (22-0-320)", $: 329300 }, { "#": "100 LEDGEWOOD DR (22-0-410)", $: 463e3 }, { "#": "100 LEDGEWOOD DR (22-0-411)", $: 464700 }, { "#": "100 LEDGEWOOD DR (22-0-412)", $: 359500 }, { "#": "100 LEDGEWOOD DR (22-0-413)", $: 344900 }, { "#": "100 LEDGEWOOD DR (22-0-414)", $: 436400 }, { "#": "100 LEDGEWOOD DR (22-0-415)", $: 439800 }, { "#": "100 LEDGEWOOD DR (22-0-416)", $: 324900 }, { "#": "100 LEDGEWOOD DR (22-0-417)", $: 334200 }, { "#": "100 LEDGEWOOD DR (22-0-418)", $: 438e3 }, { "#": "100 LEDGEWOOD DR (22-0-419)", $: 462400 }, { "#": "100 LEDGEWOOD DR (22-0-420)", $: 332300 }, { "#": "100 LEDGEWOOD DR (22-0-510)", $: 473300 }, { "#": "100 LEDGEWOOD DR (22-0-511)", $: 463500 }, { "#": "100 LEDGEWOOD DR (22-0-512)", $: 358100 }, { "#": "100 LEDGEWOOD DR (22-0-513)", $: 344e3 }, { "#": "100 LEDGEWOOD DR (22-0-514)", $: 513700 }, { "#": "100 LEDGEWOOD DR (22-0-515)", $: 444800 }, { "#": "100 LEDGEWOOD DR (22-0-516)", $: 324400 }, { "#": "100 LEDGEWOOD DR (22-0-517)", $: 369e3 }, { "#": "100 LEDGEWOOD DR (22-0-518)", $: 441800 }, { "#": "100 LEDGEWOOD DR (22-0-519)", $: 453600 }, { "#": "100 LEDGEWOOD DR (22-0-520)", $: 359400 }, { "#": "100 LEDGEWOOD DR (22-0-610)", $: 552300 }, { "#": "100 LEDGEWOOD DR (22-0-611)", $: 532200 }, { "#": "100 LEDGEWOOD DR (22-0-612)", $: 330400 }, { "#": "100 LEDGEWOOD DR (22-0-613)", $: 342400 }, { "#": "100 LEDGEWOOD DR (22-0-614)", $: 427600 }, { "#": "100 LEDGEWOOD DR (22-0-615)", $: 436300 }, { "#": "100 LEDGEWOOD DR (22-0-616)", $: 322100 }, { "#": "100 LEDGEWOOD DR (22-0-617)", $: 392800 }, { "#": "100 LEDGEWOOD DR (22-0-618)", $: 437100 }, { "#": "100 LEDGEWOOD DR (22-0-619)", $: 480800 }, { "#": "100 LEDGEWOOD DR (22-0-620)", $: 596700 }, { "#": "100 LEDGEWOOD DR (22-0-621)", $: 515100 }, { "#": "200 LEDGEWOOD DR (22-0-101)", $: 339300 }, { "#": "200 LEDGEWOOD DR (22-0-102)", $: 430100 }, { "#": "200 LEDGEWOOD DR (22-0-103)", $: 416700 }, { "#": "200 LEDGEWOOD DR (22-0-104)", $: 425e3 }, { "#": "200 LEDGEWOOD DR (22-0-105)", $: 432300 }, { "#": "200 LEDGEWOOD DR (22-0-106)", $: 486900 }, { "#": "200 LEDGEWOOD DR (22-0-107)", $: 585100 }, { "#": "200 LEDGEWOOD DR (22-0-108)", $: 325e3 }, { "#": "200 LEDGEWOOD DR (22-0-201)", $: 337400 }, { "#": "200 LEDGEWOOD DR (22-0-202)", $: 434300 }, { "#": "200 LEDGEWOOD DR (22-0-203)", $: 435200 }, { "#": "200 LEDGEWOOD DR (22-0-204)", $: 407600 }, { "#": "100 LEDGEWOOD DR (22-0-317)", $: 329100 }, { "#": "200 LEDGEWOOD DR (22-0-205)", $: 429300 }, { "#": "200 LEDGEWOOD DR (22-0-206)", $: 524400 }, { "#": "200 LEDGEWOOD DR (22-0-207)", $: 347300 }, { "#": "200 LEDGEWOOD DR (22-0-208)", $: 325800 }, { "#": "200 LEDGEWOOD DR (22-0-209)", $: 529500 }, { "#": "200 LEDGEWOOD DR (22-0-301)", $: 326600 }, { "#": "200 LEDGEWOOD DR (22-0-302)", $: 433600 }, { "#": "200 LEDGEWOOD DR (22-0-303)", $: 426100 }, { "#": "200 LEDGEWOOD DR (22-0-304)", $: 435500 }, { "#": "200 LEDGEWOOD DR (22-0-305)", $: 429600 }, { "#": "200 LEDGEWOOD DR (22-0-306)", $: 476700 }, { "#": "200 LEDGEWOOD DR (22-0-307)", $: 401900 }, { "#": "200 LEDGEWOOD DR (22-0-308)", $: 325900 }, { "#": "200 LEDGEWOOD DR (22-0-309)", $: 462300 }, { "#": "200 LEDGEWOOD DR (22-0-401)", $: 325400 }, { "#": "200 LEDGEWOOD DR (22-0-402)", $: 430500 }, { "#": "200 LEDGEWOOD DR (22-0-403)", $: 472600 }, { "#": "200 LEDGEWOOD DR (22-0-404)", $: 434200 }, { "#": "200 LEDGEWOOD DR (22-0-405)", $: 432400 }, { "#": "200 LEDGEWOOD DR (22-0-406)", $: 484500 }, { "#": "200 LEDGEWOOD DR (22-0-407)", $: 354200 }, { "#": "200 LEDGEWOOD DR (22-0-408)", $: 330800 }, { "#": "200 LEDGEWOOD DR (22-0-409)", $: 462700 }, { "#": "200 LEDGEWOOD DR (22-0-501)", $: 332100 }, { "#": "200 LEDGEWOOD DR (22-0-502)", $: 506100 }, { "#": "200 LEDGEWOOD DR (22-0-503)", $: 467400 }, { "#": "200 LEDGEWOOD DR (22-0-504)", $: 428600 }, { "#": "200 LEDGEWOOD DR (22-0-505)", $: 433200 }, { "#": "200 LEDGEWOOD DR (22-0-506)", $: 484200 }, { "#": "200 LEDGEWOOD DR (22-0-507)", $: 359300 }, { "#": "200 LEDGEWOOD DR (22-0-508)", $: 336600 }, { "#": "200 LEDGEWOOD DR (22-0-509)", $: 459900 }, { "#": "200 LEDGEWOOD DR (22-0-601)", $: 497500 }, { "#": "200 LEDGEWOOD DR (22-0-602)", $: 427800 }, { "#": "200 LEDGEWOOD DR (22-0-603)", $: 502e3 }, { "#": "200 LEDGEWOOD DR (22-0-604)", $: 464500 }, { "#": "200 LEDGEWOOD DR (22-0-605)", $: 433100 }, { "#": "200 LEDGEWOOD DR (22-0-606)", $: 472e3 }, { "#": "200 LEDGEWOOD DR (22-0-607)", $: 433800 }, { "#": "200 LEDGEWOOD DR (22-0-608)", $: 523900 }, { "#": "200 LEDGEWOOD DR (22-0-609)", $: 581300 }, { "#": "LINCOLN ST (18-0-487A)", $: 839800 }, { "#": "LINCOLN ST (18-0-487B)", $: 843800 }, { "#": "13 LINCOLN ST (18-0-485A)", $: 602100 }, { "#": "13 LINCOLN ST (18-0-485B)", $: 602100 }, { "#": "MAIN ST (16-0-407)", $: 308300 }, { "#": "100 MAIN ST (16-0-381)", $: 308e3 }, { "#": "100 MAIN ST (16-0-382)", $: 213200 }, { "#": "100 MAIN ST (16-0-383)", $: 329900 }, { "#": "100 MAIN ST (16-0-384)", $: 336900 }, { "#": "200 LEDGEWOOD DR (22-0-205)", $: 429300 }, { "#": "100 MAIN ST (16-0-385)", $: 443400 }, { "#": "100 MAIN ST (16-0-386)", $: 303300 }, { "#": "1001 MAIN ST (16-0-387)", $: 293200 }, { "#": "1001 MAIN ST (16-0-388)", $: 21e4 }, { "#": "1001 MAIN ST (16-0-389)", $: 366200 }, { "#": "1001 MAIN ST (16-0-390)", $: 299400 }, { "#": "1001 MAIN ST (16-0-391)", $: 312e3 }, { "#": "1001 MAIN ST (16-0-392)", $: 299700 }, { "#": "1002 MAIN ST (16-0-393)", $: 293e3 }, { "#": "1002 MAIN ST (16-0-394)", $: 211200 }, { "#": "1002 MAIN ST (16-0-395)", $: 311600 }, { "#": "1002 MAIN ST (16-0-396)", $: 345900 }, { "#": "1002 MAIN ST (16-0-397)", $: 311600 }, { "#": "1002 MAIN ST (16-0-398)", $: 301200 }, { "#": "1003 MAIN ST (16-0-399)", $: 332100 }, { "#": "1003 MAIN ST (16-0-400)", $: 241e3 }, { "#": "1003 MAIN ST (16-0-401)", $: 310900 }, { "#": "1003 MAIN ST (16-0-402)", $: 301600 }, { "#": "1003 MAIN ST (16-0-403)", $: 386700 }, { "#": "1003 MAIN ST (16-0-404)", $: 301600 }, { "#": "1004 MAIN ST (16-0-405)", $: 311300 }, { "#": "1004 MAIN ST (16-0-406)", $: 215900 }, { "#": "1004 MAIN ST (16-0-408)", $: 378900 }, { "#": "1004 MAIN ST (16-0-409)", $: 35e4 }, { "#": "1004 MAIN ST (16-0-410)", $: 3e5 }, { "#": "1005 MAIN ST (16-0-411)", $: 283200 }, { "#": "1005 MAIN ST (16-0-412)", $: 230400 }, { "#": "1005 MAIN ST (16-0-413)", $: 353700 }, { "#": "1005 MAIN ST (16-0-414)", $: 354e3 }, { "#": "1005 MAIN ST (16-0-415)", $: 333600 }, { "#": "1005 MAIN ST (16-0-416)", $: 307800 }, { "#": "122 MAIN ST (16-0-A100)", $: 280900 }, { "#": "122 MAIN ST (16-0-A101)", $: 307500 }, { "#": "122 MAIN ST (16-0-A102)", $: 322400 }, { "#": "122 MAIN ST (16-0-A103)", $: 314700 }, { "#": "122 MAIN ST (16-0-A104)", $: 293700 }, { "#": "122 MAIN ST (16-0-A201)", $: 347200 }, { "#": "122 MAIN ST (16-0-A202)", $: 340800 }, { "#": "122 MAIN ST (16-0-A203)", $: 339800 }, { "#": "122 MAIN ST (16-0-A204)", $: 334e3 }, { "#": "122 MAIN ST (16-0-A301)", $: 339800 }, { "#": "122 MAIN ST (16-0-A302)", $: 338300 }, { "#": "122 MAIN ST (16-0-A303)", $: 331200 }, { "#": "122 MAIN ST (16-0-A304)", $: 334e3 }, { "#": "122 MAIN ST (16-0-A401)", $: 339800 }, { "#": "122 MAIN ST (16-0-A402)", $: 322600 }, { "#": "122 MAIN ST (16-0-A403)", $: 341e3 }, { "#": "122 MAIN ST (16-0-A404)", $: 334e3 }, { "#": "150 MAIN ST (16-0-247A)", $: 261300 }, { "#": "150 MAIN ST (16-0-247B)", $: 300400 }, { "#": "100 MAIN ST (16-0-385)", $: 443400 }, { "#": "150 MAIN ST (16-0-247C)", $: 260100 }, { "#": "150 MAIN ST (16-0-247D)", $: 257700 }, { "#": "150 MAIN ST (16-0-247E)", $: 259600 }, { "#": "150 MAIN ST (16-0-247F)", $: 305400 }, { "#": "150 MAIN ST (16-0-247G)", $: 309500 }, { "#": "150 MAIN ST (16-0-247H)", $: 259200 }, { "#": "150 MAIN ST (16-0-247I)", $: 263100 }, { "#": "150 MAIN ST (16-0-247J)", $: 355200 }, { "#": "150 MAIN ST (16-0-247K)", $: 306600 }, { "#": "150 MAIN ST (16-0-247L)", $: 264400 }, { "#": "159 MAIN ST (16-0-10A)", $: 371400 }, { "#": "159 MAIN ST (16-0-10B)", $: 372700 }, { "#": "159 MAIN ST (16-0-10C)", $: 421600 }, { "#": "159 MAIN ST (16-0-11A)", $: 399800 }, { "#": "159 MAIN ST (16-0-11B)", $: 389700 }, { "#": "159 MAIN ST (16-0-11C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-12A)", $: 408300 }, { "#": "159 MAIN ST (16-0-12B)", $: 388400 }, { "#": "159 MAIN ST (16-0-12C)", $: 426300 }, { "#": "159 MAIN ST (16-0-14A)", $: 301700 }, { "#": "159 MAIN ST (16-0-14B)", $: 333900 }, { "#": "159 MAIN ST (16-0-14C)", $: 301700 }, { "#": "159 MAIN ST (16-0-15A)", $: 309500 }, { "#": "159 MAIN ST (16-0-15B)", $: 322400 }, { "#": "159 MAIN ST (16-0-15C)", $: 299900 }, { "#": "159 MAIN ST (16-0-16A)", $: 39e4 }, { "#": "159 MAIN ST (16-0-16B)", $: 389e3 }, { "#": "159 MAIN ST (16-0-16C)", $: 393900 }, { "#": "159 MAIN ST (16-0-17A)", $: 338300 }, { "#": "159 MAIN ST (16-0-17B)", $: 372500 }, { "#": "159 MAIN ST (16-0-17C)", $: 400700 }, { "#": "159 MAIN ST (16-0-18A)", $: 419800 }, { "#": "159 MAIN ST (16-0-18B)", $: 390900 }, { "#": "159 MAIN ST (16-0-19A)", $: 368500 }, { "#": "159 MAIN ST (16-0-19B)", $: 371e3 }, { "#": "159 MAIN ST (16-0-19C)", $: 452600 }, { "#": "159 MAIN ST (16-0-1B)", $: 378200 }, { "#": "159 MAIN ST (16-0-1C)", $: 437400 }, { "#": "159 MAIN ST (16-0-20A)", $: 374e3 }, { "#": "159 MAIN ST (16-0-20B)", $: 373300 }, { "#": "159 MAIN ST (16-0-20C)", $: 401200 }, { "#": "159 MAIN ST (16-0-21A)", $: 371400 }, { "#": "159 MAIN ST (16-0-21B)", $: 384800 }, { "#": "159 MAIN ST (16-0-21C)", $: 460300 }, { "#": "159 MAIN ST (16-0-22A)", $: 383100 }, { "#": "159 MAIN ST (16-0-22B)", $: 436300 }, { "#": "159 MAIN ST (16-0-22C)", $: 393400 }, { "#": "159 MAIN ST (16-0-23A)", $: 387100 }, { "#": "159 MAIN ST (16-0-23B)", $: 397200 }, { "#": "159 MAIN ST (16-0-23C)", $: 387100 }, { "#": "150 MAIN ST (16-0-247C)", $: 260100 }, { "#": "159 MAIN ST (16-0-24A)", $: 296300 }, { "#": "159 MAIN ST (16-0-24B)", $: 301700 }, { "#": "159 MAIN ST (16-0-24C)", $: 300700 }, { "#": "159 MAIN ST (16-0-25A)", $: 299900 }, { "#": "159 MAIN ST (16-0-25B)", $: 299900 }, { "#": "159 MAIN ST (16-0-25C)", $: 299900 }, { "#": "159 MAIN ST (16-0-26A)", $: 390300 }, { "#": "159 MAIN ST (16-0-26B)", $: 389300 }, { "#": "159 MAIN ST (16-0-26C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-27A)", $: 375700 }, { "#": "159 MAIN ST (16-0-27B)", $: 367200 }, { "#": "159 MAIN ST (16-0-27C)", $: 366900 }, { "#": "159 MAIN ST (16-0-28A)", $: 426700 }, { "#": "159 MAIN ST (16-0-28B)", $: 373300 }, { "#": "159 MAIN ST (16-0-28C)", $: 416300 }, { "#": "159 MAIN ST (16-0-29A)", $: 371700 }, { "#": "159 MAIN ST (16-0-29B)", $: 426e3 }, { "#": "159 MAIN ST (16-0-29C)", $: 371400 }, { "#": "159 MAIN ST (16-0-2A)", $: 407300 }, { "#": "159 MAIN ST (16-0-2B)", $: 366200 }, { "#": "159 MAIN ST (16-0-2C)", $: 403100 }, { "#": "159 MAIN ST (16-0-30A)", $: 406800 }, { "#": "159 MAIN ST (16-0-30B)", $: 376700 }, { "#": "159 MAIN ST (16-0-30C)", $: 373300 }, { "#": "159 MAIN ST (16-0-31A)", $: 371400 }, { "#": "159 MAIN ST (16-0-31B)", $: 372400 }, { "#": "159 MAIN ST (16-0-31C)", $: 371400 }, { "#": "159 MAIN ST (16-0-32A)", $: 39e4 }, { "#": "159 MAIN ST (16-0-32B)", $: 391600 }, { "#": "159 MAIN ST (16-0-32C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-33A)", $: 393700 }, { "#": "159 MAIN ST (16-0-33B)", $: 490800 }, { "#": "159 MAIN ST (16-0-33C)", $: 387100 }, { "#": "159 MAIN ST (16-0-34A)", $: 301700 }, { "#": "159 MAIN ST (16-0-34B)", $: 301700 }, { "#": "159 MAIN ST (16-0-34C)", $: 301700 }, { "#": "159 MAIN ST (16-0-35A)", $: 299900 }, { "#": "159 MAIN ST (16-0-35B)", $: 299900 }, { "#": "159 MAIN ST (16-0-35C)", $: 300100 }, { "#": "159 MAIN ST (16-0-36A)", $: 39e4 }, { "#": "159 MAIN ST (16-0-36B)", $: 387600 }, { "#": "159 MAIN ST (16-0-36C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-37A)", $: 374300 }, { "#": "159 MAIN ST (16-0-37B)", $: 366900 }, { "#": "159 MAIN ST (16-0-37C)", $: 385700 }, { "#": "159 MAIN ST (16-0-38A)", $: 373300 }, { "#": "159 MAIN ST (16-0-38B)", $: 373300 }, { "#": "159 MAIN ST (16-0-38C)", $: 373300 }, { "#": "159 MAIN ST (16-0-39A)", $: 371400 }, { "#": "159 MAIN ST (16-0-39B)", $: 369700 }, { "#": "159 MAIN ST (16-0-24A)", $: 296300 }, { "#": "159 MAIN ST (16-0-39C)", $: 371400 }, { "#": "159 MAIN ST (16-0-3A)", $: 387100 }, { "#": "159 MAIN ST (16-0-3B)", $: 382800 }, { "#": "159 MAIN ST (16-0-3C)", $: 38e4 }, { "#": "159 MAIN ST (16-0-40A)", $: 383400 }, { "#": "159 MAIN ST (16-0-40B)", $: 380800 }, { "#": "159 MAIN ST (16-0-40C)", $: 373300 }, { "#": "159 MAIN ST (16-0-41A)", $: 371700 }, { "#": "159 MAIN ST (16-0-41B)", $: 373e3 }, { "#": "159 MAIN ST (16-0-41C)", $: 371400 }, { "#": "159 MAIN ST (16-0-42A)", $: 406400 }, { "#": "159 MAIN ST (16-0-42B)", $: 437100 }, { "#": "159 MAIN ST (16-0-42C)", $: 398700 }, { "#": "159 MAIN ST (16-0-43A)", $: 387800 }, { "#": "159 MAIN ST (16-0-43B)", $: 388e3 }, { "#": "159 MAIN ST (16-0-43C)", $: 387100 }, { "#": "159 MAIN ST (16-0-44A)", $: 314e3 }, { "#": "159 MAIN ST (16-0-44B)", $: 301700 }, { "#": "159 MAIN ST (16-0-44C)", $: 309200 }, { "#": "159 MAIN ST (16-0-45A)", $: 299900 }, { "#": "159 MAIN ST (16-0-45B)", $: 299900 }, { "#": "159 MAIN ST (16-0-45C)", $: 348200 }, { "#": "159 MAIN ST (16-0-46A)", $: 39e4 }, { "#": "159 MAIN ST (16-0-46B)", $: 430500 }, { "#": "159 MAIN ST (16-0-46C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-47A)", $: 367200 }, { "#": "159 MAIN ST (16-0-47B)", $: 361400 }, { "#": "159 MAIN ST (16-0-47C)", $: 366900 }, { "#": "159 MAIN ST (16-0-48A)", $: 373300 }, { "#": "159 MAIN ST (16-0-48B)", $: 373300 }, { "#": "159 MAIN ST (16-0-48C)", $: 375600 }, { "#": "159 MAIN ST (16-0-49A)", $: 371400 }, { "#": "159 MAIN ST (16-0-49B)", $: 346900 }, { "#": "159 MAIN ST (16-0-49C)", $: 371400 }, { "#": "159 MAIN ST (16-0-4A)", $: 376500 }, { "#": "159 MAIN ST (16-0-4B)", $: 381500 }, { "#": "159 MAIN ST (16-0-4C)", $: 376800 }, { "#": "159 MAIN ST (16-0-50A)", $: 373300 }, { "#": "159 MAIN ST (16-0-50B)", $: 407900 }, { "#": "159 MAIN ST (16-0-50C)", $: 373300 }, { "#": "159 MAIN ST (16-0-51A)", $: 413600 }, { "#": "159 MAIN ST (16-0-51B)", $: 406900 }, { "#": "159 MAIN ST (16-0-51C)", $: 429800 }, { "#": "159 MAIN ST (16-0-52A)", $: 390300 }, { "#": "159 MAIN ST (16-0-52B)", $: 389e3 }, { "#": "159 MAIN ST (16-0-52C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-53A)", $: 387400 }, { "#": "159 MAIN ST (16-0-53B)", $: 388e3 }, { "#": "159 MAIN ST (16-0-53C)", $: 426100 }, { "#": "159 MAIN ST (16-0-54A)", $: 315100 }, { "#": "159 MAIN ST (16-0-39C)", $: 371400 }, { "#": "159 MAIN ST (16-0-54B)", $: 301700 }, { "#": "159 MAIN ST (16-0-54C)", $: 301700 }, { "#": "159 MAIN ST (16-0-55A)", $: 299900 }, { "#": "159 MAIN ST (16-0-55B)", $: 306200 }, { "#": "159 MAIN ST (16-0-55C)", $: 331900 }, { "#": "159 MAIN ST (16-0-56A)", $: 39e4 }, { "#": "159 MAIN ST (16-0-56B)", $: 389300 }, { "#": "159 MAIN ST (16-0-56C)", $: 39e4 }, { "#": "159 MAIN ST (16-0-57A)", $: 366900 }, { "#": "159 MAIN ST (16-0-57B)", $: 404600 }, { "#": "159 MAIN ST (16-0-57C)", $: 366900 }, { "#": "159 MAIN ST (16-0-58A)", $: 373300 }, { "#": "159 MAIN ST (16-0-58B)", $: 373300 }, { "#": "159 MAIN ST (16-0-58C)", $: 373300 }, { "#": "159 MAIN ST (16-0-59A)", $: 453600 }, { "#": "159 MAIN ST (16-0-59B)", $: 418400 }, { "#": "159 MAIN ST (16-0-59C)", $: 374800 }, { "#": "159 MAIN ST (16-0-5A)", $: 406200 }, { "#": "159 MAIN ST (16-0-5B)", $: 389900 }, { "#": "159 MAIN ST (16-0-5C)", $: 414800 }, { "#": "159 MAIN ST (16-0-6A)", $: 279e3 }, { "#": "159 MAIN ST (16-0-6B)", $: 275500 }, { "#": "159 MAIN ST (16-0-6C)", $: 273800 }, { "#": "159 MAIN ST (16-0-7A)", $: 392300 }, { "#": "159 MAIN ST (16-0-7B)", $: 371200 }, { "#": "159 MAIN ST (16-0-7C)", $: 371900 }, { "#": "159 MAIN ST (16-0-8A)", $: 367400 }, { "#": "159 MAIN ST (16-0-8B)", $: 386200 }, { "#": "159 MAIN ST (16-0-8C)", $: 391700 }, { "#": "159 MAIN ST (16-0-9A)", $: 373300 }, { "#": "159 MAIN ST (16-0-9B)", $: 373300 }, { "#": "159 MAIN ST (16-0-9C)", $: 373300 }, { "#": "159 MAIN ST (16-0-A1)", $: 371700 }, { "#": "40 MAIN ST (10-0-101)", $: 328500 }, { "#": "40 MAIN ST (10-0-102)", $: 403300 }, { "#": "40 MAIN ST (10-0-103)", $: 326500 }, { "#": "40 MAIN ST (10-0-106)", $: 320300 }, { "#": "40 MAIN ST (10-0-107)", $: 496500 }, { "#": "40 MAIN ST (10-0-108)", $: 403300 }, { "#": "40 MAIN ST (10-0-201)", $: 331700 }, { "#": "40 MAIN ST (10-0-202)", $: 403600 }, { "#": "40 MAIN ST (10-0-203)", $: 356600 }, { "#": "40 MAIN ST (10-0-204)", $: 405200 }, { "#": "40 MAIN ST (10-0-205)", $: 323600 }, { "#": "40 MAIN ST (10-0-206)", $: 405200 }, { "#": "40 MAIN ST (10-0-207)", $: 531800 }, { "#": "40 MAIN ST (10-0-208)", $: 403300 }, { "#": "40 MAIN ST (10-0-301)", $: 349800 }, { "#": "40 MAIN ST (10-0-302)", $: 462900 }, { "#": "40 MAIN ST (10-0-303)", $: 326500 }, { "#": "159 MAIN ST (16-0-54B)", $: 301700 }, { "#": "40 MAIN ST (10-0-304)", $: 425300 }, { "#": "40 MAIN ST (10-0-305)", $: 330200 }, { "#": "40 MAIN ST (10-0-306)", $: 491900 }, { "#": "40 MAIN ST (10-0-307)", $: 499700 }, { "#": "40 MAIN ST (10-0-308)", $: 406500 }, { "#": "40 MAIN ST (10-0-401)", $: 330900 }, { "#": "40 MAIN ST (10-0-402)", $: 407500 }, { "#": "40 MAIN ST (10-0-403)", $: 332100 }, { "#": "40 MAIN ST (10-0-404)", $: 405200 }, { "#": "40 MAIN ST (10-0-405)", $: 33e4 }, { "#": "40 MAIN ST (10-0-406)", $: 405200 }, { "#": "40 MAIN ST (10-0-407)", $: 496500 }, { "#": "40 MAIN ST (10-0-408)", $: 483600 }, { "#": "40 MAIN ST (10-0-501)", $: 356500 }, { "#": "40 MAIN ST (10-0-502)", $: 403300 }, { "#": "40 MAIN ST (10-0-503)", $: 329700 }, { "#": "40 MAIN ST (10-0-504)", $: 405200 }, { "#": "40 MAIN ST (10-0-505)", $: 359300 }, { "#": "40 MAIN ST (10-0-506)", $: 405200 }, { "#": "40 MAIN ST (10-0-507)", $: 505700 }, { "#": "40 MAIN ST (10-0-508)", $: 456500 }, { "#": "426 MAIN ST (13-0-502103)", $: 382400 }, { "#": "426 MAIN ST (13-0-502104)", $: 428400 }, { "#": "426 MAIN ST (13-0-502105)", $: 515900 }, { "#": "426 MAIN ST (13-0-502106)", $: 412500 }, { "#": "426 MAIN ST (13-0-502107)", $: 364e3 }, { "#": "426 MAIN ST (13-0-502108)", $: 377600 }, { "#": "426 MAIN ST (13-0-502109)", $: 536800 }, { "#": "426 MAIN ST (13-0-502110)", $: 502100 }, { "#": "426 MAIN ST (13-0-502111)", $: 405700 }, { "#": "426 MAIN ST (13-0-502201)", $: 571700 }, { "#": "426 MAIN ST (13-0-502202)", $: 598300 }, { "#": "426 MAIN ST (13-0-502203)", $: 548800 }, { "#": "426 MAIN ST (13-0-502204)", $: 554700 }, { "#": "426 MAIN ST (13-0-502205)", $: 530500 }, { "#": "426 MAIN ST (13-0-502206)", $: 427200 }, { "#": "426 MAIN ST (13-0-502207)", $: 365100 }, { "#": "426 MAIN ST (13-0-502208)", $: 546900 }, { "#": "426 MAIN ST (13-0-502209)", $: 527300 }, { "#": "426 MAIN ST (13-0-502210)", $: 510600 }, { "#": "426 MAIN ST (13-0-502211)", $: 530900 }, { "#": "426 MAIN ST (13-0-502301)", $: 548400 }, { "#": "426 MAIN ST (13-0-502302)", $: 602900 }, { "#": "426 MAIN ST (13-0-502303)", $: 524700 }, { "#": "426 MAIN ST (13-0-502304)", $: 553300 }, { "#": "426 MAIN ST (13-0-502305)", $: 395900 }, { "#": "426 MAIN ST (13-0-502306)", $: 440500 }, { "#": "426 MAIN ST (13-0-502307)", $: 508500 }, { "#": "426 MAIN ST (13-0-502308)", $: 575700 }, { "#": "426 MAIN ST (13-0-502401)", $: 554700 }, { "#": "40 MAIN ST (10-0-304)", $: 425300 }, { "#": "426 MAIN ST (13-0-502402)", $: 602100 }, { "#": "426 MAIN ST (13-0-502403)", $: 516700 }, { "#": "426 MAIN ST (13-0-502404)", $: 554200 }, { "#": "426 MAIN ST (13-0-502405)", $: 395600 }, { "#": "426 MAIN ST (13-0-502406)", $: 442700 }, { "#": "426 MAIN ST (13-0-502407)", $: 514700 }, { "#": "426 MAIN ST (13-0-502408)", $: 574700 }, { "#": "426 MAIN ST (13-0-502501)", $: 567300 }, { "#": "426 MAIN ST (13-0-502502)", $: 607900 }, { "#": "426 MAIN ST (13-0-502503)", $: 529e3 }, { "#": "426 MAIN ST (13-0-502504)", $: 604100 }, { "#": "426 MAIN ST (13-0-502505)", $: 430500 }, { "#": "426 MAIN ST (13-0-502506)", $: 454700 }, { "#": "426 MAIN ST (13-0-502507)", $: 541600 }, { "#": "426 MAIN ST (13-0-502508)", $: 566700 }, { "#": "436438 MAIN ST (18-0-226A)", $: 381100 }, { "#": "436438 MAIN ST (18-0-226B)", $: 365200 }, { "#": "436438 MAIN ST (18-0-226C)", $: 516e3 }, { "#": "44 MAIN ST (10-0-101C)", $: 332100 }, { "#": "44 MAIN ST (10-0-102B)", $: 403300 }, { "#": "44 MAIN ST (10-0-103D)", $: 325200 }, { "#": "44 MAIN ST (10-0-106E)", $: 323800 }, { "#": "44 MAIN ST (10-0-107A)", $: 496500 }, { "#": "44 MAIN ST (10-0-108B)", $: 403300 }, { "#": "44 MAIN ST (10-0-201C)", $: 332400 }, { "#": "44 MAIN ST (10-0-202B)", $: 404e3 }, { "#": "44 MAIN ST (10-0-203D)", $: 338600 }, { "#": "44 MAIN ST (10-0-204B)", $: 407e3 }, { "#": "44 MAIN ST (10-0-205D)", $: 332200 }, { "#": "44 MAIN ST (10-0-206B)", $: 428700 }, { "#": "44 MAIN ST (10-0-207A)", $: 503300 }, { "#": "44 MAIN ST (10-0-208B)", $: 399700 }, { "#": "44 MAIN ST (10-0-301C)", $: 348900 }, { "#": "44 MAIN ST (10-0-302B)", $: 410100 }, { "#": "44 MAIN ST (10-0-303D)", $: 326500 }, { "#": "44 MAIN ST (10-0-304B)", $: 405200 }, { "#": "44 MAIN ST (10-0-305D)", $: 335100 }, { "#": "44 MAIN ST (10-0-306B)", $: 405200 }, { "#": "44 MAIN ST (10-0-307A)", $: 523e3 }, { "#": "44 MAIN ST (10-0-308B)", $: 423200 }, { "#": "44 MAIN ST (10-0-401C)", $: 332100 }, { "#": "44 MAIN ST (10-0-402B)", $: 403600 }, { "#": "44 MAIN ST (10-0-403D)", $: 322900 }, { "#": "44 MAIN ST (10-0-404B)", $: 405600 }, { "#": "44 MAIN ST (10-0-405D)", $: 326500 }, { "#": "44 MAIN ST (10-0-406B)", $: 410600 }, { "#": "44 MAIN ST (10-0-407A)", $: 496500 }, { "#": "44 MAIN ST (10-0-408B)", $: 403300 }, { "#": "44 MAIN ST (10-0-501C)", $: 349200 }, { "#": "44 MAIN ST (10-0-502B)", $: 403300 }, { "#": "426 MAIN ST (13-0-502402)", $: 602100 }, { "#": "44 MAIN ST (10-0-503D)", $: 325200 }, { "#": "44 MAIN ST (10-0-504B)", $: 405200 }, { "#": "44 MAIN ST (10-0-505D)", $: 35e4 }, { "#": "44 MAIN ST (10-0-506B)", $: 405200 }, { "#": "44 MAIN ST (10-0-507A)", $: 498300 }, { "#": "44 MAIN ST (10-0-508B)", $: 403300 }, { "#": "471 MAIN ST (18-0-293C)", $: 665200 }, { "#": "471 MAIN ST (18-0-293D)", $: 648200 }, { "#": "471 MAIN ST (18-0-293E)", $: 646900 }, { "#": "471 MAIN ST (18-0-293F)", $: 658600 }, { "#": "471 MAIN ST (18-0-293G)", $: 649200 }, { "#": "471 MAIN ST (18-0-293H)", $: 649200 }, { "#": "471 MAIN ST (18-0-293I)", $: 658600 }, { "#": "471 MAIN ST (18-0-293J)", $: 649200 }, { "#": "471 MAIN ST (18-0-293K)", $: 649200 }, { "#": "471 MAIN ST (18-0-293L)", $: 658600 }, { "#": "472 MAIN ST (18-0-237A)", $: 777100 }, { "#": "472 MAIN ST (18-0-237B)", $: 777100 }, { "#": "472 MAIN ST (18-0-237C)", $: 777100 }, { "#": "472 MAIN ST (18-0-237D)", $: 777100 }, { "#": "519 MAIN ST (18-0-280A)", $: 588400 }, { "#": "519 MAIN ST (18-0-280B)", $: 559e3 }, { "#": "55 MAIN ST (16-0-230A)", $: 730300 }, { "#": "55 MAIN ST (16-0-230B)", $: 730300 }, { "#": "559 MAIN ST (19-0-272)", $: 550300 }, { "#": "559 MAIN ST (19-0-272B)", $: 465700 }, { "#": "578 MAIN ST (19-0-306)", $: 479600 }, { "#": "578 MAIN ST (19-0-306A)", $: 479700 }, { "#": "5881 MAIN ST (19-0-1A)", $: 275e3 }, { "#": "5881 MAIN ST (19-0-1B)", $: 327700 }, { "#": "5881 MAIN ST (19-0-1C)", $: 286900 }, { "#": "5881 MAIN ST (19-0-1D)", $: 340200 }, { "#": "5882 MAIN ST (19-0-2A)", $: 343200 }, { "#": "5882 MAIN ST (19-0-2B)", $: 363800 }, { "#": "5882 MAIN ST (19-0-2C)", $: 343200 }, { "#": "5882 MAIN ST (19-0-2D)", $: 366900 }, { "#": "5883 MAIN ST (19-0-3A)", $: 343200 }, { "#": "5883 MAIN ST (19-0-3B)", $: 359100 }, { "#": "5883 MAIN ST (19-0-3C)", $: 343200 }, { "#": "5883 MAIN ST (19-0-3D)", $: 359400 }, { "#": "5884 MAIN ST (19-0-4A)", $: 321200 }, { "#": "5884 MAIN ST (19-0-4B)", $: 359100 }, { "#": "5884 MAIN ST (19-0-4C)", $: 346200 }, { "#": "5884 MAIN ST (19-0-4D)", $: 359100 }, { "#": "597 MAIN ST (19-0-259A)", $: 693600 }, { "#": "597 MAIN ST (19-0-259A2)", $: 664600 }, { "#": "597 MAIN ST (19-0-259A3)", $: 665900 }, { "#": "597 MAIN ST (19-0-259A4)", $: 675100 }, { "#": "597 MAIN ST (19-0-259A5)", $: 665900 }, { "#": "597 MAIN ST (19-0-259B6)", $: 703e3 }, { "#": "44 MAIN ST (10-0-503D)", $: 325200 }, { "#": "597 MAIN ST (19-0-259B7)", $: 709800 }, { "#": "597 MAIN ST (19-0-259C10)", $: 662400 }, { "#": "597 MAIN ST (19-0-259C11)", $: 668900 }, { "#": "597 MAIN ST (19-0-259C8)", $: 719100 }, { "#": "597 MAIN ST (19-0-259C9)", $: 704400 }, { "#": "600 MAIN ST (19-0-3141)", $: 332500 }, { "#": "600 MAIN ST (19-0-3142)", $: 350700 }, { "#": "64 MAIN ST (11-0-11B)", $: 375700 }, { "#": "64 MAIN ST (11-0-12B)", $: 383400 }, { "#": "64 MAIN ST (11-0-13B)", $: 293e3 }, { "#": "64 MAIN ST (11-0-14B)", $: 384500 }, { "#": "64 MAIN ST (11-0-15B)", $: 374700 }, { "#": "64 MAIN ST (11-0-16B)", $: 412200 }, { "#": "64 MAIN ST (11-0-17B)", $: 384900 }, { "#": "64 MAIN ST (11-0-18B)", $: 376300 }, { "#": "64 MAIN ST (11-0-21B)", $: 347900 }, { "#": "64 MAIN ST (11-0-22B)", $: 405200 }, { "#": "64 MAIN ST (11-0-23B)", $: 377200 }, { "#": "64 MAIN ST (11-0-24B)", $: 346900 }, { "#": "64 MAIN ST (11-0-25B)", $: 346700 }, { "#": "64 MAIN ST (11-0-26B)", $: 386600 }, { "#": "64 MAIN ST (11-0-27B)", $: 412400 }, { "#": "64 MAIN ST (11-0-28B)", $: 348100 }, { "#": "64 MAIN ST (11-0-31B)", $: 350700 }, { "#": "64 MAIN ST (11-0-32B)", $: 355100 }, { "#": "64 MAIN ST (11-0-33B)", $: 358e3 }, { "#": "64 MAIN ST (11-0-34B)", $: 397500 }, { "#": "64 MAIN ST (11-0-35B)", $: 346700 }, { "#": "64 MAIN ST (11-0-36B)", $: 374100 }, { "#": "64 MAIN ST (11-0-37B)", $: 247300 }, { "#": "64 MAIN ST (11-0-38B)", $: 355900 }, { "#": "64 MAIN ST (11-0-39B)", $: 351100 }, { "#": "64 MAIN ST (11-0-41B)", $: 347900 }, { "#": "64 MAIN ST (11-0-42B)", $: 365500 }, { "#": "64 MAIN ST (11-0-43B)", $: 355900 }, { "#": "64 MAIN ST (11-0-44B)", $: 354100 }, { "#": "64 MAIN ST (11-0-45B)", $: 370400 }, { "#": "64 MAIN ST (11-0-46B)", $: 356500 }, { "#": "64 MAIN ST (11-0-47B)", $: 246900 }, { "#": "64 MAIN ST (11-0-48B)", $: 356700 }, { "#": "64 MAIN ST (11-0-49B)", $: 347900 }, { "#": "64 MAIN ST (11-0-51B)", $: 354300 }, { "#": "64 MAIN ST (11-0-52B)", $: 354600 }, { "#": "64 MAIN ST (11-0-53B)", $: 441800 }, { "#": "64 MAIN ST (11-0-54B)", $: 346900 }, { "#": "64 MAIN ST (11-0-55B)", $: 346500 }, { "#": "64 MAIN ST (11-0-56B)", $: 354600 }, { "#": "64 MAIN ST (11-0-57B)", $: 245900 }, { "#": "64 MAIN ST (11-0-58B)", $: 364100 }, { "#": "64 MAIN ST (11-0-59B)", $: 403200 }, { "#": "597 MAIN ST (19-0-259B7)", $: 709800 }, { "#": "66 MAIN ST (11-0-11A)", $: 399200 }, { "#": "66 MAIN ST (11-0-12A)", $: 374200 }, { "#": "66 MAIN ST (11-0-13A)", $: 232100 }, { "#": "66 MAIN ST (11-0-14A)", $: 414800 }, { "#": "66 MAIN ST (11-0-15A)", $: 376700 }, { "#": "66 MAIN ST (11-0-16A)", $: 384400 }, { "#": "66 MAIN ST (11-0-17A)", $: 397100 }, { "#": "66 MAIN ST (11-0-18A)", $: 376300 }, { "#": "66 MAIN ST (11-0-21A)", $: 347300 }, { "#": "66 MAIN ST (11-0-22A)", $: 354e3 }, { "#": "66 MAIN ST (11-0-23A)", $: 354800 }, { "#": "66 MAIN ST (11-0-24A)", $: 400200 }, { "#": "66 MAIN ST (11-0-25A)", $: 347500 }, { "#": "66 MAIN ST (11-0-26A)", $: 406e3 }, { "#": "66 MAIN ST (11-0-27A)", $: 411400 }, { "#": "66 MAIN ST (11-0-28A)", $: 354e3 }, { "#": "66 MAIN ST (11-0-31A)", $: 347700 }, { "#": "66 MAIN ST (11-0-32A)", $: 356400 }, { "#": "66 MAIN ST (11-0-33A)", $: 379300 }, { "#": "66 MAIN ST (11-0-34A)", $: 350500 }, { "#": "66 MAIN ST (11-0-35A)", $: 350500 }, { "#": "66 MAIN ST (11-0-36A)", $: 413900 }, { "#": "66 MAIN ST (11-0-37A)", $: 246300 }, { "#": "66 MAIN ST (11-0-38A)", $: 354800 }, { "#": "66 MAIN ST (11-0-39A)", $: 347300 }, { "#": "66 MAIN ST (11-0-41A)", $: 347300 }, { "#": "66 MAIN ST (11-0-42A)", $: 407800 }, { "#": "66 MAIN ST (11-0-43A)", $: 353200 }, { "#": "66 MAIN ST (11-0-44A)", $: 347700 }, { "#": "66 MAIN ST (11-0-45A)", $: 347100 }, { "#": "66 MAIN ST (11-0-46A)", $: 361e3 }, { "#": "66 MAIN ST (11-0-47A)", $: 246100 }, { "#": "66 MAIN ST (11-0-48A)", $: 358e3 }, { "#": "66 MAIN ST (11-0-49A)", $: 348e3 }, { "#": "66 MAIN ST (11-0-51A)", $: 395500 }, { "#": "66 MAIN ST (11-0-52A)", $: 354600 }, { "#": "66 MAIN ST (11-0-53A)", $: 369500 }, { "#": "66 MAIN ST (11-0-54A)", $: 347700 }, { "#": "66 MAIN ST (11-0-55A)", $: 347800 }, { "#": "66 MAIN ST (11-0-56A)", $: 358700 }, { "#": "66 MAIN ST (11-0-57A)", $: 246100 }, { "#": "66 MAIN ST (11-0-58A)", $: 356400 }, { "#": "66 MAIN ST (11-0-59A)", $: 347500 }, { "#": "68 MAIN ST (11-0-11C)", $: 376500 }, { "#": "68 MAIN ST (11-0-12C)", $: 413100 }, { "#": "68 MAIN ST (11-0-13C)", $: 331e3 }, { "#": "68 MAIN ST (11-0-14C)", $: 382600 }, { "#": "68 MAIN ST (11-0-15C)", $: 466e3 }, { "#": "68 MAIN ST (11-0-16C)", $: 384100 }, { "#": "68 MAIN ST (11-0-17C)", $: 385300 }, { "#": "66 MAIN ST (11-0-11A)", $: 399200 }, { "#": "68 MAIN ST (11-0-18C)", $: 408700 }, { "#": "68 MAIN ST (11-0-21C)", $: 343800 }, { "#": "68 MAIN ST (11-0-22C)", $: 379500 }, { "#": "68 MAIN ST (11-0-23C)", $: 354800 }, { "#": "68 MAIN ST (11-0-24C)", $: 347600 }, { "#": "68 MAIN ST (11-0-25C)", $: 348700 }, { "#": "68 MAIN ST (11-0-26C)", $: 402500 }, { "#": "68 MAIN ST (11-0-27C)", $: 372800 }, { "#": "68 MAIN ST (11-0-28C)", $: 379e3 }, { "#": "68 MAIN ST (11-0-31C)", $: 349100 }, { "#": "68 MAIN ST (11-0-32C)", $: 354100 }, { "#": "68 MAIN ST (11-0-33C)", $: 355100 }, { "#": "68 MAIN ST (11-0-34C)", $: 347500 }, { "#": "68 MAIN ST (11-0-35C)", $: 348700 }, { "#": "68 MAIN ST (11-0-36C)", $: 355e3 }, { "#": "68 MAIN ST (11-0-37C)", $: 246100 }, { "#": "68 MAIN ST (11-0-38C)", $: 379300 }, { "#": "68 MAIN ST (11-0-39C)", $: 405100 }, { "#": "68 MAIN ST (11-0-41C)", $: 346700 }, { "#": "68 MAIN ST (11-0-42C)", $: 365900 }, { "#": "68 MAIN ST (11-0-43C)", $: 383600 }, { "#": "68 MAIN ST (11-0-44C)", $: 370900 }, { "#": "68 MAIN ST (11-0-45C)", $: 392200 }, { "#": "68 MAIN ST (11-0-46C)", $: 359800 }, { "#": "68 MAIN ST (11-0-47C)", $: 245900 }, { "#": "68 MAIN ST (11-0-48C)", $: 354600 }, { "#": "68 MAIN ST (11-0-49C)", $: 347500 }, { "#": "68 MAIN ST (11-0-51C)", $: 347500 }, { "#": "68 MAIN ST (11-0-52C)", $: 354200 }, { "#": "68 MAIN ST (11-0-53C)", $: 353e3 }, { "#": "68 MAIN ST (11-0-54C)", $: 346900 }, { "#": "68 MAIN ST (11-0-55C)", $: 349900 }, { "#": "68 MAIN ST (11-0-56C)", $: 354400 }, { "#": "68 MAIN ST (11-0-57C)", $: 245900 }, { "#": "68 MAIN ST (11-0-58C)", $: 349100 }, { "#": "68 MAIN ST (11-0-59C)", $: 399e3 }, { "#": "98 MAIN ST (16-0-375)", $: 311900 }, { "#": "98 MAIN ST (16-0-376)", $: 213200 }, { "#": "98 MAIN ST (16-0-377)", $: 315300 }, { "#": "98 MAIN ST (16-0-378)", $: 296200 }, { "#": "98 MAIN ST (16-0-379)", $: 360500 }, { "#": "98 MAIN ST (16-0-380)", $: 304800 }, { "#": "19 MAPLE ST (18-0-160A)", $: 820600 }, { "#": "21 MAPLE ST (18-0-160B)", $: 820600 }, { "#": "23 MAPLE ST (18-0-159)", $: 368900 }, { "#": "23 MAPLE ST (18-0-159A)", $: 444300 }, { "#": "24 MAPLE ST (18-0-457)", $: 436e3 }, { "#": "2424 MAPLE ST (18-0-457A)", $: 477e3 }, { "#": "25 MAPLE ST (18-0-158A)", $: 704500 }, { "#": "25 MAPLE ST (18-0-158B)", $: 609e3 }, { "#": "68 MAIN ST (11-0-18C)", $: 408700 }, { "#": "25 MAPLE ST (18-0-158C)", $: 719100 }, { "#": "26 MAPLE ST (18-0-458A)", $: 570800 }, { "#": "26 MAPLE ST (18-0-458B)", $: 556e3 }, { "#": "58 MAPLE ST (18-0-64A)", $: 885e3 }, { "#": "58 MAPLE ST (18-0-64B)", $: 885e3 }, { "#": "144 MARBLE ST (23-0-101C)", $: 382200 }, { "#": "144 MARBLE ST (23-0-102C)", $: 383600 }, { "#": "144 MARBLE ST (23-0-103C)", $: 250300 }, { "#": "144 MARBLE ST (23-0-104C)", $: 265200 }, { "#": "144 MARBLE ST (23-0-105C)", $: 480300 }, { "#": "144 MARBLE ST (23-0-106C)", $: 388600 }, { "#": "144 MARBLE ST (23-0-107C)", $: 383600 }, { "#": "144 MARBLE ST (23-0-108C)", $: 384200 }, { "#": "144 MARBLE ST (23-0-201C)", $: 411800 }, { "#": "144 MARBLE ST (23-0-202C)", $: 429100 }, { "#": "144 MARBLE ST (23-0-203C)", $: 438900 }, { "#": "144 MARBLE ST (23-0-204C)", $: 354e3 }, { "#": "144 MARBLE ST (23-0-205C)", $: 387900 }, { "#": "144 MARBLE ST (23-0-206C)", $: 436600 }, { "#": "144 MARBLE ST (23-0-207C)", $: 454500 }, { "#": "144 MARBLE ST (23-0-208C)", $: 429300 }, { "#": "144 MARBLE ST (23-0-301C)", $: 383600 }, { "#": "144 MARBLE ST (23-0-302C)", $: 383600 }, { "#": "144 MARBLE ST (23-0-303C)", $: 395500 }, { "#": "144 MARBLE ST (23-0-304C)", $: 342e3 }, { "#": "144 MARBLE ST (23-0-305C)", $: 434200 }, { "#": "144 MARBLE ST (23-0-306C)", $: 388900 }, { "#": "144 MARBLE ST (23-0-307C)", $: 388700 }, { "#": "144 MARBLE ST (23-0-308C)", $: 383900 }, { "#": "144 MARBLE ST (23-0-401C)", $: 383600 }, { "#": "144 MARBLE ST (23-0-402C)", $: 403700 }, { "#": "144 MARBLE ST (23-0-403C)", $: 388600 }, { "#": "144 MARBLE ST (23-0-404C)", $: 311900 }, { "#": "144 MARBLE ST (23-0-405C)", $: 413400 }, { "#": "144 MARBLE ST (23-0-406C)", $: 434600 }, { "#": "144 MARBLE ST (23-0-407C)", $: 386800 }, { "#": "144 MARBLE ST (23-0-408C)", $: 430200 }, { "#": "144 MARBLE ST (23-0-501C)", $: 481400 }, { "#": "144 MARBLE ST (23-0-502C)", $: 405500 }, { "#": "144 MARBLE ST (23-0-503C)", $: 388600 }, { "#": "144 MARBLE ST (23-0-504C)", $: 311900 }, { "#": "144 MARBLE ST (23-0-505C)", $: 426500 }, { "#": "144 MARBLE ST (23-0-506C)", $: 389300 }, { "#": "144 MARBLE ST (23-0-507C)", $: 383600 }, { "#": "144 MARBLE ST (23-0-508C)", $: 383600 }, { "#": "146 MARBLE ST (23-0-201A)", $: 357600 }, { "#": "146 MARBLE ST (23-0-202A)", $: 363900 }, { "#": "146 MARBLE ST (23-0-203A)", $: 369500 }, { "#": "146 MARBLE ST (23-0-204A)", $: 412200 }, { "#": "146 MARBLE ST (23-0-205A)", $: 368300 }, { "#": "25 MAPLE ST (18-0-158C)", $: 719100 }, { "#": "146 MARBLE ST (23-0-206A)", $: 370300 }, { "#": "146 MARBLE ST (23-0-207A)", $: 234700 }, { "#": "146 MARBLE ST (23-0-208A)", $: 173300 }, { "#": "146 MARBLE ST (23-0-209A)", $: 371100 }, { "#": "146 MARBLE ST (23-0-210A)", $: 369500 }, { "#": "146 MARBLE ST (23-0-211A)", $: 394600 }, { "#": "146 MARBLE ST (23-0-212A)", $: 396300 }, { "#": "146 MARBLE ST (23-0-213A)", $: 372600 }, { "#": "146 MARBLE ST (23-0-214A)", $: 391700 }, { "#": "146 MARBLE ST (23-0-215A)", $: 401e3 }, { "#": "146 MARBLE ST (23-0-216A)", $: 425900 }, { "#": "146 MARBLE ST (23-0-301A)", $: 392500 }, { "#": "146 MARBLE ST (23-0-302A)", $: 377100 }, { "#": "146 MARBLE ST (23-0-303A)", $: 452500 }, { "#": "146 MARBLE ST (23-0-304A)", $: 307e3 }, { "#": "146 MARBLE ST (23-0-305A)", $: 382600 }, { "#": "146 MARBLE ST (23-0-306A)", $: 381e3 }, { "#": "146 MARBLE ST (23-0-307A)", $: 401e3 }, { "#": "146 MARBLE ST (23-0-308A)", $: 377100 }, { "#": "146 MARBLE ST (23-0-401A)", $: 402600 }, { "#": "146 MARBLE ST (23-0-402A)", $: 449900 }, { "#": "146 MARBLE ST (23-0-403A)", $: 383500 }, { "#": "146 MARBLE ST (23-0-404A)", $: 308600 }, { "#": "146 MARBLE ST (23-0-405A)", $: 406500 }, { "#": "146 MARBLE ST (23-0-406A)", $: 381300 }, { "#": "146 MARBLE ST (23-0-407A)", $: 425800 }, { "#": "146 MARBLE ST (23-0-408A)", $: 401200 }, { "#": "146 MARBLE ST (23-0-501A)", $: 434e3 }, { "#": "146 MARBLE ST (23-0-502A)", $: 428900 }, { "#": "146 MARBLE ST (23-0-503A)", $: 385200 }, { "#": "146 MARBLE ST (23-0-504A)", $: 330100 }, { "#": "146 MARBLE ST (23-0-505A)", $: 386800 }, { "#": "146 MARBLE ST (23-0-506A)", $: 439900 }, { "#": "146 MARBLE ST (23-0-507A)", $: 396800 }, { "#": "146 MARBLE ST (23-0-508A)", $: 429300 }, { "#": "148 MARBLE ST (23-0-101B)", $: 374500 }, { "#": "148 MARBLE ST (23-0-102B)", $: 370100 }, { "#": "148 MARBLE ST (23-0-103B)", $: 270500 }, { "#": "148 MARBLE ST (23-0-104B)", $: 272900 }, { "#": "148 MARBLE ST (23-0-105B)", $: 446900 }, { "#": "148 MARBLE ST (23-0-106B)", $: 446700 }, { "#": "148 MARBLE ST (23-0-107B)", $: 421800 }, { "#": "148 MARBLE ST (23-0-108B)", $: 368100 }, { "#": "148 MARBLE ST (23-0-201B)", $: 397700 }, { "#": "148 MARBLE ST (23-0-202B)", $: 478100 }, { "#": "148 MARBLE ST (23-0-203B)", $: 383900 }, { "#": "148 MARBLE ST (23-0-204B)", $: 305800 }, { "#": "148 MARBLE ST (23-0-205B)", $: 381200 }, { "#": "148 MARBLE ST (23-0-206B)", $: 402100 }, { "#": "148 MARBLE ST (23-0-207B)", $: 374900 }, { "#": "146 MARBLE ST (23-0-206A)", $: 370300 }, { "#": "148 MARBLE ST (23-0-208B)", $: 374600 }, { "#": "148 MARBLE ST (23-0-301B)", $: 397100 }, { "#": "148 MARBLE ST (23-0-302B)", $: 375900 }, { "#": "148 MARBLE ST (23-0-303B)", $: 381e3 }, { "#": "148 MARBLE ST (23-0-304B)", $: 305800 }, { "#": "148 MARBLE ST (23-0-305B)", $: 380300 }, { "#": "148 MARBLE ST (23-0-306B)", $: 380300 }, { "#": "148 MARBLE ST (23-0-307B)", $: 447300 }, { "#": "148 MARBLE ST (23-0-308B)", $: 424200 }, { "#": "148 MARBLE ST (23-0-401B)", $: 383700 }, { "#": "148 MARBLE ST (23-0-402B)", $: 408900 }, { "#": "148 MARBLE ST (23-0-403B)", $: 381e3 }, { "#": "148 MARBLE ST (23-0-404B)", $: 305800 }, { "#": "148 MARBLE ST (23-0-405B)", $: 423500 }, { "#": "148 MARBLE ST (23-0-406B)", $: 383700 }, { "#": "148 MARBLE ST (23-0-407B)", $: 424900 }, { "#": "148 MARBLE ST (23-0-408B)", $: 375800 }, { "#": "148 MARBLE ST (23-0-501B)", $: 375200 }, { "#": "148 MARBLE ST (23-0-502B)", $: 407500 }, { "#": "148 MARBLE ST (23-0-503B)", $: 403700 }, { "#": "148 MARBLE ST (23-0-504B)", $: 304500 }, { "#": "148 MARBLE ST (23-0-505B)", $: 399700 }, { "#": "148 MARBLE ST (23-0-506B)", $: 429700 }, { "#": "148 MARBLE ST (23-0-507B)", $: 375600 }, { "#": "148 MARBLE ST (23-0-508B)", $: 432500 }, { "#": "18 MARBLE ST (18-0-333A)", $: 433200 }, { "#": "20 MARBLE ST (18-0-333B)", $: 406300 }, { "#": "26 MARBLE ST (18-0-335)", $: 409200 }, { "#": "26 MARBLE ST (18-0-335C)", $: 447600 }, { "#": "28 MARBLE ST (18-0-335B)", $: 407700 }, { "#": "28 MARBLE ST (18-0-335D)", $: 417600 }, { "#": "2 NIXON LN (11-0-375)", $: 257200 }, { "#": "2 NIXON LN (11-0-376)", $: 372e3 }, { "#": "2 NIXON LN (11-0-377)", $: 304200 }, { "#": "2 NIXON LN (11-0-378)", $: 380100 }, { "#": "2 NIXON LN (11-0-379)", $: 380100 }, { "#": "2 NIXON LN (11-0-380)", $: 360100 }, { "#": "4 NIXON LN (11-0-381)", $: 279100 }, { "#": "4 NIXON LN (11-0-382)", $: 236600 }, { "#": "4 NIXON LN (11-0-383)", $: 305900 }, { "#": "4 NIXON LN (11-0-384)", $: 353700 }, { "#": "4 NIXON LN (11-0-385)", $: 321100 }, { "#": "4 NIXON LN (11-0-386)", $: 303500 }, { "#": "101 PARK ST (18-0-17B)", $: 612900 }, { "#": "224 PARK ST (19-0-A1)", $: 646900 }, { "#": "224 PARK ST (19-0-A10)", $: 661600 }, { "#": "224 PARK ST (19-0-A11)", $: 631400 }, { "#": "224 PARK ST (19-0-A12)", $: 648200 }, { "#": "224 PARK ST (19-0-A13)", $: 611200 }, { "#": "224 PARK ST (19-0-A14)", $: 576700 }, { "#": "148 MARBLE ST (23-0-208B)", $: 374600 }, { "#": "224 PARK ST (19-0-A2)", $: 542200 }, { "#": "224 PARK ST (19-0-A3)", $: 568100 }, { "#": "224 PARK ST (19-0-A4)", $: 542200 }, { "#": "224 PARK ST (19-0-A5)", $: 542200 }, { "#": "224 PARK ST (19-0-A6)", $: 614e3 }, { "#": "224 PARK ST (19-0-A7)", $: 671400 }, { "#": "224 PARK ST (19-0-A8)", $: 544500 }, { "#": "224 PARK ST (19-0-A9)", $: 623e3 }, { "#": "224 PARK ST (19-0-B1)", $: 628400 }, { "#": "224 PARK ST (19-0-B10)", $: 679900 }, { "#": "224 PARK ST (19-0-B11)", $: 558e3 }, { "#": "224 PARK ST (19-0-B12)", $: 642400 }, { "#": "224 PARK ST (19-0-B13)", $: 652900 }, { "#": "224 PARK ST (19-0-B14)", $: 563e3 }, { "#": "224 PARK ST (19-0-B15)", $: 628900 }, { "#": "224 PARK ST (19-0-B16)", $: 555700 }, { "#": "224 PARK ST (19-0-B17)", $: 655e3 }, { "#": "224 PARK ST (19-0-B18)", $: 660400 }, { "#": "224 PARK ST (19-0-B2)", $: 619e3 }, { "#": "224 PARK ST (19-0-B3)", $: 555700 }, { "#": "224 PARK ST (19-0-B4)", $: 555700 }, { "#": "224 PARK ST (19-0-B5)", $: 602800 }, { "#": "224 PARK ST (19-0-B6)", $: 555700 }, { "#": "224 PARK ST (19-0-B7)", $: 636e3 }, { "#": "224 PARK ST (19-0-B8)", $: 672700 }, { "#": "224 PARK ST (19-0-B9)", $: 628400 }, { "#": "224 PARK ST (19-0-C1)", $: 570400 }, { "#": "224 PARK ST (19-0-C10)", $: 589800 }, { "#": "224 PARK ST (19-0-C11)", $: 683300 }, { "#": "224 PARK ST (19-0-C12)", $: 543700 }, { "#": "224 PARK ST (19-0-C13)", $: 543700 }, { "#": "224 PARK ST (19-0-C14)", $: 589700 }, { "#": "224 PARK ST (19-0-C15)", $: 605100 }, { "#": "224 PARK ST (19-0-C16)", $: 599e3 }, { "#": "224 PARK ST (19-0-C17)", $: 568500 }, { "#": "224 PARK ST (19-0-C2)", $: 569400 }, { "#": "224 PARK ST (19-0-C3)", $: 660700 }, { "#": "224 PARK ST (19-0-C4)", $: 543700 }, { "#": "224 PARK ST (19-0-C5)", $: 627400 }, { "#": "224 PARK ST (19-0-C6)", $: 543700 }, { "#": "224 PARK ST (19-0-C7)", $: 710400 }, { "#": "224 PARK ST (19-0-C8)", $: 543700 }, { "#": "224 PARK ST (19-0-C9)", $: 666400 }, { "#": "99 PARK ST (18-0-17A)", $: 608100 }, { "#": "100 PARK TERR DR (4-0-A101)", $: 379600 }, { "#": "100 PARK TERR DR (4-0-A102)", $: 363700 }, { "#": "100 PARK TERR DR (4-0-A103)", $: 337700 }, { "#": "100 PARK TERR DR (4-0-A104)", $: 379600 }, { "#": "100 PARK TERR DR (4-0-A105)", $: 323400 }, { "#": "100 PARK TERR DR (4-0-A106)", $: 352100 }, { "#": "224 PARK ST (19-0-A2)", $: 542200 }, { "#": "100 PARK TERR DR (4-0-A121)", $: 337100 }, { "#": "100 PARK TERR DR (4-0-A122)", $: 298100 }, { "#": "100 PARK TERR DR (4-0-A123)", $: 370100 }, { "#": "100 PARK TERR DR (4-0-A124)", $: 363700 }, { "#": "100 PARK TERR DR (4-0-A125)", $: 319900 }, { "#": "100 PARK TERR DR (4-0-A126)", $: 340800 }, { "#": "100 PARK TERR DR (4-0-A127)", $: 317900 }, { "#": "100 PARK TERR DR (4-0-A128)", $: 317900 }, { "#": "100 PARK TERR DR (4-0-A131)", $: 340800 }, { "#": "100 PARK TERR DR (4-0-A132)", $: 301800 }, { "#": "100 PARK TERR DR (4-0-A133)", $: 367400 }, { "#": "100 PARK TERR DR (4-0-A134)", $: 370700 }, { "#": "100 PARK TERR DR (4-0-A135)", $: 302600 }, { "#": "100 PARK TERR DR (4-0-A136)", $: 340800 }, { "#": "100 PARK TERR DR (4-0-A137)", $: 281600 }, { "#": "100 PARK TERR DR (4-0-A138)", $: 366300 }, { "#": "100 PARK TERR DR (4-0-A141)", $: 324600 }, { "#": "100 PARK TERR DR (4-0-A142)", $: 301800 }, { "#": "100 PARK TERR DR (4-0-A143)", $: 376300 }, { "#": "100 PARK TERR DR (4-0-A144)", $: 367400 }, { "#": "100 PARK TERR DR (4-0-A145)", $: 299300 }, { "#": "100 PARK TERR DR (4-0-A146)", $: 340800 }, { "#": "100 PARK TERR DR (4-0-A147)", $: 326400 }, { "#": "100 PARK TERR DR (4-0-A148)", $: 317900 }, { "#": "100 PARK TERR DR (4-0-A151)", $: 340800 }, { "#": "100 PARK TERR DR (4-0-A152)", $: 267400 }, { "#": "100 PARK TERR DR (4-0-A153)", $: 367400 }, { "#": "100 PARK TERR DR (4-0-A154)", $: 395100 }, { "#": "100 PARK TERR DR (4-0-A155)", $: 299300 }, { "#": "100 PARK TERR DR (4-0-A156)", $: 340800 }, { "#": "100 PARK TERR DR (4-0-A157)", $: 317900 }, { "#": "100 PARK TERR DR (4-0-A158)", $: 321200 }, { "#": "200 PARK TERR DR (4-0-A201)", $: 373100 }, { "#": "200 PARK TERR DR (4-0-A202)", $: 367e3 }, { "#": "200 PARK TERR DR (4-0-A203)", $: 341e3 }, { "#": "200 PARK TERR DR (4-0-A204)", $: 379400 }, { "#": "200 PARK TERR DR (4-0-A205)", $: 297e3 }, { "#": "200 PARK TERR DR (4-0-A206)", $: 323400 }, { "#": "200 PARK TERR DR (4-0-A221)", $: 340800 }, { "#": "200 PARK TERR DR (4-0-A222)", $: 267400 }, { "#": "200 PARK TERR DR (4-0-A223)", $: 325500 }, { "#": "200 PARK TERR DR (4-0-A224)", $: 375700 }, { "#": "200 PARK TERR DR (4-0-A225)", $: 299300 }, { "#": "200 PARK TERR DR (4-0-A226)", $: 347300 }, { "#": "200 PARK TERR DR (4-0-A227)", $: 299700 }, { "#": "200 PARK TERR DR (4-0-A228)", $: 357800 }, { "#": "200 PARK TERR DR (4-0-A231)", $: 340800 }, { "#": "200 PARK TERR DR (4-0-A232)", $: 305100 }, { "#": "200 PARK TERR DR (4-0-A233)", $: 367400 }, { "#": "200 PARK TERR DR (4-0-A234)", $: 367400 }, { "#": "100 PARK TERR DR (4-0-A121)", $: 337100 }, { "#": "200 PARK TERR DR (4-0-A235)", $: 299300 }, { "#": "200 PARK TERR DR (4-0-A236)", $: 347300 }, { "#": "200 PARK TERR DR (4-0-A237)", $: 324300 }, { "#": "200 PARK TERR DR (4-0-A238)", $: 321200 }, { "#": "200 PARK TERR DR (4-0-A241)", $: 340800 }, { "#": "200 PARK TERR DR (4-0-A242)", $: 305100 }, { "#": "200 PARK TERR DR (4-0-A243)", $: 367400 }, { "#": "200 PARK TERR DR (4-0-A244)", $: 367400 }, { "#": "200 PARK TERR DR (4-0-A245)", $: 305100 }, { "#": "200 PARK TERR DR (4-0-A246)", $: 340800 }, { "#": "200 PARK TERR DR (4-0-A247)", $: 302900 }, { "#": "200 PARK TERR DR (4-0-A248)", $: 299700 }, { "#": "200 PARK TERR DR (4-0-A251)", $: 340800 }, { "#": "200 PARK TERR DR (4-0-A252)", $: 304900 }, { "#": "200 PARK TERR DR (4-0-A253)", $: 367400 }, { "#": "200 PARK TERR DR (4-0-A254)", $: 370700 }, { "#": "200 PARK TERR DR (4-0-A255)", $: 299300 }, { "#": "200 PARK TERR DR (4-0-A256)", $: 340800 }, { "#": "200 PARK TERR DR (4-0-A257)", $: 317900 }, { "#": "200 PARK TERR DR (4-0-A258)", $: 317900 }, { "#": "300 PARK TERR DR (4-0-A301)", $: 228500 }, { "#": "300 PARK TERR DR (4-0-A302)", $: 231100 }, { "#": "300 PARK TERR DR (4-0-A303)", $: 249500 }, { "#": "300 PARK TERR DR (4-0-A304)", $: 240900 }, { "#": "300 PARK TERR DR (4-0-A305)", $: 240700 }, { "#": "300 PARK TERR DR (4-0-A306)", $: 192200 }, { "#": "300 PARK TERR DR (4-0-A307)", $: 228500 }, { "#": "300 PARK TERR DR (4-0-A308)", $: 230200 }, { "#": "300 PARK TERR DR (4-0-A309)", $: 230200 }, { "#": "300 PARK TERR DR (4-0-A310)", $: 262300 }, { "#": "300 PARK TERR DR (4-0-A311)", $: 228500 }, { "#": "300 PARK TERR DR (4-0-A312)", $: 236700 }, { "#": "300 PARK TERR DR (4-0-A321)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A322)", $: 309700 }, { "#": "300 PARK TERR DR (4-0-A323)", $: 336800 }, { "#": "300 PARK TERR DR (4-0-A324)", $: 336800 }, { "#": "300 PARK TERR DR (4-0-A325)", $: 271500 }, { "#": "300 PARK TERR DR (4-0-A326)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A327)", $: 412600 }, { "#": "300 PARK TERR DR (4-0-A328)", $: 324800 }, { "#": "300 PARK TERR DR (4-0-A331)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A332)", $: 271500 }, { "#": "300 PARK TERR DR (4-0-A333)", $: 336800 }, { "#": "300 PARK TERR DR (4-0-A334)", $: 340100 }, { "#": "300 PARK TERR DR (4-0-A335)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A336)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A337)", $: 405700 }, { "#": "300 PARK TERR DR (4-0-A338)", $: 288e3 }, { "#": "300 PARK TERR DR (4-0-A341)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A342)", $: 306400 }, { "#": "200 PARK TERR DR (4-0-A235)", $: 299300 }, { "#": "300 PARK TERR DR (4-0-A343)", $: 336800 }, { "#": "300 PARK TERR DR (4-0-A344)", $: 293e3 }, { "#": "300 PARK TERR DR (4-0-A345)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A346)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A347)", $: 411700 }, { "#": "300 PARK TERR DR (4-0-A348)", $: 324800 }, { "#": "300 PARK TERR DR (4-0-A351)", $: 271500 }, { "#": "300 PARK TERR DR (4-0-A352)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A353)", $: 336800 }, { "#": "300 PARK TERR DR (4-0-A354)", $: 378600 }, { "#": "300 PARK TERR DR (4-0-A355)", $: 306400 }, { "#": "300 PARK TERR DR (4-0-A356)", $: 312800 }, { "#": "300 PARK TERR DR (4-0-A357)", $: 410100 }, { "#": "300 PARK TERR DR (4-0-A358)", $: 287800 }, { "#": "7 PEARL ST (13-0-373)", $: 331e3 }, { "#": "7 PEARL ST (13-0-373A)", $: 198200 }, { "#": "7 PEARL ST (13-0-373B)", $: 262400 }, { "#": "2 PINE ST (12-0-358)", $: 430500 }, { "#": "2 PINE ST (12-0-358A)", $: 320200 }, { "#": "2 PINE ST (12-0-358B)", $: 239800 }, { "#": "2 PINE ST (12-0-358D)", $: 358500 }, { "#": "81 PINE ST (13-0-469)", $: 342e3 }, { "#": "36 PLEASANT ST (12-0-378AA)", $: 766800 }, { "#": "36 PLEASANT ST (12-0-378AB)", $: 745800 }, { "#": "42 PLEASANT ST (12-0-3431)", $: 667900 }, { "#": "42 PLEASANT ST (12-0-34310)", $: 695300 }, { "#": "42 PLEASANT ST (12-0-34311)", $: 663e3 }, { "#": "42 PLEASANT ST (12-0-34312)", $: 664400 }, { "#": "42 PLEASANT ST (12-0-34313)", $: 662600 }, { "#": "42 PLEASANT ST (12-0-34314)", $: 681100 }, { "#": "42 PLEASANT ST (12-0-34315)", $: 663300 }, { "#": "42 PLEASANT ST (12-0-34316)", $: 693400 }, { "#": "42 PLEASANT ST (12-0-34317)", $: 694e3 }, { "#": "42 PLEASANT ST (12-0-34318)", $: 662300 }, { "#": "42 PLEASANT ST (12-0-34319)", $: 693700 }, { "#": "42 PLEASANT ST (12-0-3432)", $: 664400 }, { "#": "42 PLEASANT ST (12-0-34320)", $: 664100 }, { "#": "42 PLEASANT ST (12-0-34321)", $: 694700 }, { "#": "42 PLEASANT ST (12-0-3433)", $: 661500 }, { "#": "42 PLEASANT ST (12-0-3434)", $: 666100 }, { "#": "42 PLEASANT ST (12-0-3435)", $: 662700 }, { "#": "42 PLEASANT ST (12-0-3436)", $: 663500 }, { "#": "42 PLEASANT ST (12-0-3437)", $: 661500 }, { "#": "42 PLEASANT ST (12-0-3438)", $: 648900 }, { "#": "42 PLEASANT ST (12-0-3439)", $: 665700 }, { "#": "68 PLEASANT ST (13-0-140)", $: 373700 }, { "#": "68 PLEASANT ST (13-0-140A)", $: 371600 }, { "#": "10 POMEWORTH ST (12-0-386A)", $: 586200 }, { "#": "10 POMEWORTH ST (12-0-386B)", $: 607600 }, { "#": "10 POMEWORTH ST (12-0-386C)", $: 600600 }, { "#": "300 PARK TERR DR (4-0-A343)", $: 336800 }, { "#": "10 POMEWORTH ST (12-0-386D)", $: 606800 }, { "#": "10 POMEWORTH ST (12-0-386E)", $: 621400 }, { "#": "10 POMEWORTH ST (12-0-386F)", $: 604800 }, { "#": "10 POMEWORTH ST (12-0-386G)", $: 587200 }, { "#": "10 POMEWORTH ST (12-0-386H)", $: 613900 }, { "#": "10 POMEWORTH ST (12-0-386I)", $: 584900 }, { "#": "10 POMEWORTH ST (12-0-386J)", $: 599800 }, { "#": "10 POMEWORTH ST (12-0-386K)", $: 651500 }, { "#": "10 POMEWORTH ST (12-0-386L)", $: 598900 }, { "#": "10 POMEWORTH ST (12-0-386M)", $: 600300 }, { "#": "10 POMEWORTH ST (12-0-386N)", $: 608100 }, { "#": "15 POMEWORTH ST (12-0-384)", $: 384e3 }, { "#": "15 POMEWORTH ST (12-0-384A)", $: 300800 }, { "#": "43 POMEWORTH ST (12-0-A12)", $: 336200 }, { "#": "43 POMEWORTH ST (12-0-A14)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A15)", $: 318900 }, { "#": "43 POMEWORTH ST (12-0-A16)", $: 299400 }, { "#": "43 POMEWORTH ST (12-0-A17)", $: 358200 }, { "#": "43 POMEWORTH ST (12-0-A18)", $: 338600 }, { "#": "43 POMEWORTH ST (12-0-A19)", $: 339100 }, { "#": "43 POMEWORTH ST (12-0-A21)", $: 313500 }, { "#": "43 POMEWORTH ST (12-0-A22)", $: 337400 }, { "#": "43 POMEWORTH ST (12-0-A23)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A24)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A25)", $: 287600 }, { "#": "43 POMEWORTH ST (12-0-A26)", $: 303500 }, { "#": "43 POMEWORTH ST (12-0-A27)", $: 338600 }, { "#": "43 POMEWORTH ST (12-0-A28)", $: 338600 }, { "#": "43 POMEWORTH ST (12-0-A31)", $: 341e3 }, { "#": "43 POMEWORTH ST (12-0-A32)", $: 345800 }, { "#": "43 POMEWORTH ST (12-0-A33)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A34)", $: 297800 }, { "#": "43 POMEWORTH ST (12-0-A35)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A36)", $: 375e3 }, { "#": "43 POMEWORTH ST (12-0-A37)", $: 338900 }, { "#": "43 POMEWORTH ST (12-0-A38)", $: 352700 }, { "#": "43 POMEWORTH ST (12-0-A41)", $: 313500 }, { "#": "43 POMEWORTH ST (12-0-A42)", $: 338600 }, { "#": "43 POMEWORTH ST (12-0-A43)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A44)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A45)", $: 373100 }, { "#": "43 POMEWORTH ST (12-0-A46)", $: 303200 }, { "#": "43 POMEWORTH ST (12-0-A47)", $: 338600 }, { "#": "43 POMEWORTH ST (12-0-A48)", $: 336200 }, { "#": "47 POMEWORTH ST (12-0-338A)", $: 421300 }, { "#": "47 POMEWORTH ST (12-0-338B)", $: 558100 }, { "#": "34 SOUTH ST (14-0-140A)", $: 808300 }, { "#": "34 SOUTH ST (14-0-140B)", $: 721200 }, { "#": "86 SPRING ST (7-0-394A)", $: 371300 }, { "#": "86 SPRING ST (7-0-394B)", $: 371100 }, { "#": "10 POMEWORTH ST (12-0-386D)", $: 606800 }, { "#": "113 SUMMER ST (13-0-80)", $: 403900 }, { "#": "113 SUMMER ST (13-0-80B)", $: 441900 }, { "#": "118 SUMMER ST (13-0-77A)", $: 601300 }, { "#": "118 SUMMER ST (13-0-77B)", $: 580700 }, { "#": "53 SUMMER ST (13-0-254BA)", $: 655800 }, { "#": "53 SUMMER ST (13-0-254BB)", $: 54e4 }, { "#": "77 SUMMER ST (13-0-185A)", $: 470200 }, { "#": "77 SUMMER ST (13-0-185B)", $: 540300 }, { "#": "2 VINTON CT (7-0-424A)", $: 726e3 }, { "#": "2 VINTON CT (7-0-424B)", $: 726e3 }, { "#": "30 WARREN ST (18-0-30930)", $: 573700 }, { "#": "32 WARREN ST (18-0-30932)", $: 538200 }, { "#": "7 WASHINGTON ST (12-0-202A)", $: 627400 }, { "#": "9 WASHINGTON ST (12-0-202B)", $: 609500 }, { "#": "295 WEST WYOMING AVE (4-0-125)", $: 413300 }, { "#": "295 WEST WYOMING AVE (4-0-126)", $: 396200 }, { "#": "295 WEST WYOMING AVE (4-0-127)", $: 479300 }, { "#": "295 WEST WYOMING AVE (4-0-128)", $: 396200 }, { "#": "295 WEST WYOMING AVE (4-0-129)", $: 396200 }, { "#": "295 WEST WYOMING AVE (4-0-130)", $: 325600 }, { "#": "295 WEST WYOMING AVE (4-0-131)", $: 313800 }, { "#": "295 WEST WYOMING AVE (4-0-132)", $: 396200 }, { "#": "295 WEST WYOMING AVE (4-0-133)", $: 396200 }, { "#": "295 WEST WYOMING AVE (4-0-134)", $: 493500 }, { "#": "102 WILLIAM ST (12-0-392A)", $: 808300 }, { "#": "102 WILLIAM ST (12-0-392B)", $: 808300 }, { "#": "12 WRIGHT ST (18-0-445)", $: 561600 }, { "#": "12 WRIGHT ST (18-0-445B)", $: 444400 }, { "#": "22 WRIGHT ST (18-0-452A)", $: 955e3 }, { "#": "22 WRIGHT ST (18-0-452B)", $: 942400 }, { "#": "22 WRIGHT ST (18-0-452C)", $: 952400 }, { "#": "61 WRIGHT ST (17-0-482)", $: 287400 }, { "#": "61 WRIGHT ST (17-0-483)", $: 359900 }, { "#": "61 WRIGHT ST (17-0-484)", $: 263200 }, { "#": "61 WRIGHT ST (17-0-485)", $: 359900 }, { "#": "61 WRIGHT ST (17-0-486)", $: 370900 }, { "#": "61 WRIGHT ST (17-0-487)", $: 387600 }, { "#": "61 WRIGHT ST (17-0-488)", $: 393700 }, { "#": "61 WRIGHT ST (17-0-489)", $: 291200 }, { "#": "61 WRIGHT ST (17-0-490)", $: 385500 }, { "#": "61 WRIGHT ST (17-0-491)", $: 381700 }, { "#": "61 WRIGHT ST (17-0-492)", $: 379e3 }, { "#": "61 WRIGHT ST (17-0-493)", $: 381700 }, { "#": "61 WRIGHT ST (17-0-494)", $: 291200 }, { "#": "61 WRIGHT ST (17-0-495)", $: 381700 }, { "#": "61 WRIGHT ST (17-0-496)", $: 389500 }, { "#": "113 SUMMER ST (13-0-80)", $: 403900 }, { "#": "24 ALBION AVE (17-0-91)", $: 809600 }, { "#": "6 ALBION AVE (17-0-92)", $: 887200 }, { "#": "14 ALDEN AVE (21-0-312)", $: 916600 }, { "#": "16 ALDEN AVE (21-0-313)", $: 972500 }, { "#": "18 ALDEN AVE (21-0-314)", $: 895200 }, { "#": "21 ALDEN AVE (21-0-299)", $: 809100 }, { "#": "23 ALDEN AVE (21-0-298)", $: 899800 }, { "#": "24 ALDEN AVE (21-0-317)", $: 955300 }, { "#": "27 ALDEN AVE (21-0-296)", $: 840500 }, { "#": "18 ATWOOD AVE (23-0-32)", $: 718700 }, { "#": "24 ATWOOD AVE (23-0-34)", $: 640400 }, { "#": "9 ATWOOD AVE (18-0-25)", $: 750200 }, { "#": "21 AVON ST (7-0-38)", $: 677e3 }, { "#": "6 AVON ST (12-0-186)", $: 703300 }, { "#": "2 BARRETT AVE (13-0-173)", $: 643300 }, { "#": "23 BEACON ST (2-0-172)", $: 1019900 }, { "#": "4 BENTON ST (18-0-324)", $: 685100 }, { "#": "5 BENTON ST (18-0-323)", $: 747600 }, { "#": "7 BENTON ST (18-0-322)", $: 838700 }, { "#": "8 BENTON ST (18-0-326)", $: 785200 }, { "#": "9 BENTON ST (18-0-321)", $: 755700 }, { "#": "30 BUTLER AVE (17-0-346)", $: 828100 }, { "#": "65 BUTLER AVE (17-0-372)", $: 713500 }, { "#": "1 CARMEN AVE (1-0-147)", $: 722600 }, { "#": "12 CEDAR AVE (18-0-87)", $: 789700 }, { "#": "13 CEDAR AVE (18-0-77)", $: 1203100 }, { "#": "9 CEDAR AVE (18-0-79)", $: 714300 }, { "#": "113115 CENTRAL ST (12-0-305)", $: 648400 }, { "#": "114 CENTRAL ST (17-0-167)", $: 916200 }, { "#": "170 CENTRAL ST (17-0-165)", $: 1017100 }, { "#": "52 CENTRAL ST (12-0-414)", $: 643500 }, { "#": "57 CENTRAL ST (12-0-404)", $: 620200 }, { "#": "66 CENTRAL ST (12-0-422)", $: 737900 }, { "#": "87 CENTRAL ST (12-0-394)", $: 794e3 }, { "#": "89 CENTRAL ST (12-0-393)", $: 623900 }, { "#": "14 CHARLES ST (12-0-197)", $: 690700 }, { "#": "2 CHARLES ST (12-0-205)", $: 791500 }, { "#": "10 CHESTNUT ST (17-0-225)", $: 723700 }, { "#": "16 CHESTNUT ST (18-0-116)", $: 780100 }, { "#": "20 CHESTNUT ST (18-0-118)", $: 663900 }, { "#": "30 CHESTNUT ST (18-0-143)", $: 834600 }, { "#": "33 CHESTNUT ST (18-0-108)", $: 764800 }, { "#": "4648 CHESTNUT ST (18-0-519)", $: 732e3 }, { "#": "8 CHESTNUT ST (17-0-224)", $: 638800 }, { "#": "200 COLLINCOTE ST (11-0-363A)", $: 773300 }, { "#": "204206 COLLINCOTE ST (11-0-362)", $: 711500 }, { "#": "11 CONGRESS ST (18-0-532)", $: 694400 }, { "#": "15 CONGRESS ST (18-0-530)", $: 845700 }, { "#": "16 CONGRESS ST (18-0-548)", $: 795500 }, { "#": "18 CONGRESS ST (18-0-549)", $: 766500 }, { "#": "24 ALBION AVE (17-0-91)", $: 809600 }, { "#": "24 CONGRESS ST (18-0-551)", $: 867700 }, { "#": "32 CONGRESS ST (18-0-555)", $: 646300 }, { "#": "7 CONGRESS ST (18-0-535)", $: 691e3 }, { "#": "10 COOLIDGE ST (18-0-539)", $: 977100 }, { "#": "14 COTTAGE ST (17-0-263)", $: 561200 }, { "#": "15 COTTAGE ST (17-0-265)", $: 738300 }, { "#": "2628 COTTAGE ST (17-0-423)", $: 736e3 }, { "#": "1416 CURVE RD (15-0-39)", $: 765100 }, { "#": "2426 CURVE RD (15-0-39A)", $: 694900 }, { "#": "17 DAPPER DARBY DR (14-0-265)", $: 1032800 }, { "#": "35 DEAN ST (18-0-618)", $: 706400 }, { "#": "7 DEAN ST (18-0-617)", $: 788700 }, { "#": "2 DINANNO RD (2-0-228)", $: 872300 }, { "#": "21 DUNCKLEE AVE (7-0-107)", $: 752400 }, { "#": "24 DUNCKLEE AVE (7-0-142)", $: 673700 }, { "#": "20 EAST ST (1-0-132)", $: 855100 }, { "#": "21 EAST ST (1-0-146)", $: 621300 }, { "#": "46 ELIZABETH RD (21-0-437)", $: 962900 }, { "#": "103 ELM ST (7-0-131)", $: 792600 }, { "#": "106 ELM ST (7-0-134)", $: 919500 }, { "#": "111113 ELM ST (7-0-109)", $: 725700 }, { "#": "117 ELM ST (7-0-139)", $: 829300 }, { "#": "46 ELM ST (12-0-57)", $: 711100 }, { "#": "59 ELM ST (12-0-292)", $: 722200 }, { "#": "62 ELM ST (12-0-83A)", $: 837900 }, { "#": "68 ELM ST (12-0-84)", $: 681200 }, { "#": "71 ELM ST (12-0-288)", $: 728e3 }, { "#": "74 ELM ST (12-0-109)", $: 710700 }, { "#": "8 ELM ST (17-0-158)", $: 664100 }, { "#": "96 ELM ST (12-0-118)", $: 687900 }, { "#": "19 EMERALD CT (8-0-160)", $: 705700 }, { "#": "11 EMERSON ST (13-0-523)", $: 587200 }, { "#": "16 EMERSON ST (13-0-8)", $: 652700 }, { "#": "17 EMERSON ST (13-0-518)", $: 484800 }, { "#": "18 EMERSON ST (13-0-9)", $: 646600 }, { "#": "2022 EMERSON ST (13-0-10)", $: 693500 }, { "#": "3 EVERETT ST (18-0-640)", $: 850900 }, { "#": "4 EVERETT ST (18-0-641)", $: 722100 }, { "#": "10 FLINT AVE (17-0-280)", $: 772200 }, { "#": "12 FLINT AVE (17-0-281)", $: 750900 }, { "#": "14 FLINT AVE (17-0-282)", $: 686100 }, { "#": "20 FLINT AVE (17-0-285)", $: 643400 }, { "#": "35 FOREST ST (21-0-250)", $: 963300 }, { "#": "100 FRANKLIN ST (13-0-65)", $: 791600 }, { "#": "101 FRANKLIN ST (13-0-349)", $: 740700 }, { "#": "106 FRANKLIN ST (13-0-68)", $: 710900 }, { "#": "107 FRANKLIN ST (13-0-179)", $: 591700 }, { "#": "114 FRANKLIN ST (13-0-91)", $: 564700 }, { "#": "115 FRANKLIN ST (13-0-174)", $: 721200 }, { "#": "1159 FRANKLIN ST (3-0-93)", $: 813900 }, { "#": "24 CONGRESS ST (18-0-551)", $: 867700 }, { "#": "1160 FRANKLIN ST (3-0-100)", $: 855100 }, { "#": "1161 FRANKLIN ST (3-0-92)", $: 913200 }, { "#": "1170 FRANKLIN ST (3-0-134)", $: 658500 }, { "#": "120 FRANKLIN ST (13-0-149)", $: 750600 }, { "#": "121 FRANKLIN ST (8-0-180)", $: 462900 }, { "#": "122 FRANKLIN ST (8-0-1)", $: 758200 }, { "#": "125 FRANKLIN ST (8-0-178)", $: 850800 }, { "#": "127 FRANKLIN ST (8-0-177)", $: 709700 }, { "#": "158 FRANKLIN ST (8-0-99)", $: 863300 }, { "#": "165 FRANKLIN ST (8-0-144)", $: 707700 }, { "#": "169 FRANKLIN ST (8-0-132)", $: 778300 }, { "#": "191 FRANKLIN ST (3-0-352A)", $: 777600 }, { "#": "197 FRANKLIN ST (3-0-351)", $: 757700 }, { "#": "198 FRANKLIN ST (3-0-13)", $: 846800 }, { "#": "49 FRANKLIN ST (13-0-400)", $: 902600 }, { "#": "59 FRANKLIN ST (13-0-397)", $: 596500 }, { "#": "71 FRANKLIN ST (13-0-379)", $: 448100 }, { "#": "7476 FRANKLIN ST (13-0-43)", $: 683900 }, { "#": "77 FRANKLIN ST (13-0-377)", $: 942100 }, { "#": "79 FRANKLIN ST (13-0-376)", $: 871400 }, { "#": "80 FRANKLIN ST (13-0-45)", $: 709900 }, { "#": "8688 FRANKLIN ST (13-0-47)", $: 707800 }, { "#": "87 FRANKLIN ST (13-0-363)", $: 569900 }, { "#": "90 FRANKLIN ST (13-0-60)", $: 861500 }, { "#": "96 FRANKLIN ST (13-0-64)", $: 583500 }, { "#": "99 FRANKLIN ST (13-0-350)", $: 601100 }, { "#": "57 FULLER ST (13-0-519)", $: 609800 }, { "#": "1 GERALD RD (3-0-6)", $: 751800 }, { "#": "10 GERRY ST (18-0-247)", $: 621900 }, { "#": "16 GERRY ST (18-0-250)", $: 785900 }, { "#": "22 GERRY ST (18-0-317)", $: 742900 }, { "#": "24 GERRY ST (18-0-318)", $: 658900 }, { "#": "3 GERRY ST (13-0-474)", $: 606600 }, { "#": "46 GILMORE ST (17-0-229)", $: 657800 }, { "#": "17 GOULD ST (13-0-30)", $: 621300 }, { "#": "23 GOULD ST (13-0-27)", $: 643100 }, { "#": "2626 GOULD ST (13-0-113)", $: 717e3 }, { "#": "34 GOULD ST (13-0-121)", $: 569900 }, { "#": "39 GOULD ST (13-0-130)", $: 795700 }, { "#": "4 GOULD ST (13-0-16)", $: 531200 }, { "#": "41 GOULD ST (13-0-129)", $: 874100 }, { "#": "45 GOULD ST (8-0-20)", $: 620600 }, { "#": "48 GOULD ST (8-0-28)", $: 735500 }, { "#": "52 GOULD ST (8-0-31)", $: 822400 }, { "#": "56 GOULD ST (8-0-32)", $: 585300 }, { "#": "6 GOULD ST (13-0-17)", $: 715900 }, { "#": "8 GOULD ST (13-0-18)", $: 726700 }, { "#": "11 GRANT ST (18-0-575)", $: 700200 }, { "#": "7 GRANT ST (18-0-561)", $: 709400 }, { "#": "3 GRAYSTONE RD (19-0-273A)", $: 687600 }, { "#": "1160 FRANKLIN ST (3-0-100)", $: 855100 }, { "#": "118120 GREEN ST (7-0-52)", $: 675300 }, { "#": "12 GREEN ST (7-0-372)", $: 723500 }, { "#": "135 GREEN ST (7-0-262)", $: 684500 }, { "#": "155 GREEN ST (7-0-258A)", $: 718600 }, { "#": "38 GREEN ST (7-0-9)", $: 850800 }, { "#": "81 GREEN ST (7-0-270)", $: 679e3 }, { "#": "100 HANCOCK ST (13-0-495)", $: 749100 }, { "#": "107 HANCOCK ST (13-0-496)", $: 707700 }, { "#": "134 HANCOCK ST (18-0-306)", $: 895100 }, { "#": "138 HANCOCK ST (18-0-307)", $: 777700 }, { "#": "142 HANCOCK ST (18-0-308)", $: 689700 }, { "#": "150152 HANCOCK ST (18-0-416)", $: 1046400 }, { "#": "167 HANCOCK ST (18-0-447)", $: 683600 }, { "#": "172174 HANCOCK ST (18-0-467)", $: 759400 }, { "#": "206208 HANCOCK ST (18-0-557)", $: 798200 }, { "#": "210212 HANCOCK ST (18-0-593)", $: 842e3 }, { "#": "218220 HANCOCK ST (18-0-596)", $: 751200 }, { "#": "230 HANCOCK ST (18-0-620)", $: 721e3 }, { "#": "232 HANCOCK ST (18-0-621)", $: 684500 }, { "#": "43 HANCOCK ST (13-0-414)", $: 696200 }, { "#": "48 HANCOCK ST (13-0-450)", $: 814600 }, { "#": "51 HANCOCK ST (13-0-413)", $: 873e3 }, { "#": "58 HANCOCK ST (13-0-454)", $: 707100 }, { "#": "66 HANCOCK ST (13-0-455)", $: 777200 }, { "#": "79 HANCOCK ST (13-0-419)", $: 854e3 }, { "#": "71 HANCOCK ST (13-0-410)", $: 628300 }, { "#": "29 HARRISON ST (3-0-117)", $: 688300 }, { "#": "31 HARRISON ST (3-0-115)", $: 683900 }, { "#": "6 HARRISON ST (3-0-102)", $: 775500 }, { "#": "9 HARRISON ST (3-0-126)", $: 807100 }, { "#": "13 HERSAM ST (18-0-123)", $: 790600 }, { "#": "17 HERSAM ST (18-0-121)", $: 710700 }, { "#": "24 HERSAM ST (18-0-139)", $: 1207600 }, { "#": "66 HIGH ST (11-0-60)", $: 773800 }, { "#": "68 HIGH ST (11-0-61)", $: 835200 }, { "#": "70 HIGH ST (11-0-62)", $: 853800 }, { "#": "11 HIGHLAND AVE (8-0-10)", $: 711800 }, { "#": "12 HIGHLAND AVE (8-0-62)", $: 798100 }, { "#": "8 HIGHLAND AVE (8-0-61)", $: 803700 }, { "#": "6 HILL ST (23-0-155A)", $: 362700 }, { "#": "3 HILLSIDE RD (23-0-52)", $: 719100 }, { "#": "10 ISABELLA ST (3-0-38)", $: 811900 }, { "#": "8 ISABELLA ST (3-0-37)", $: 701600 }, { "#": "1115 LEE ST (21-0-337)", $: 824100 }, { "#": "1214 LEE ST (21-0-341)", $: 830900 }, { "#": "1618 LEE ST (21-0-342)", $: 817200 }, { "#": "1719 LEE ST (21-0-336)", $: 803600 }, { "#": "2022 LEE ST (21-0-343)", $: 817300 }, { "#": "2123 LEE ST (21-0-325)", $: 802200 }, { "#": "2426 LEE ST (21-0-344)", $: 816200 }, { "#": "118120 GREEN ST (7-0-52)", $: 675300 }, { "#": "2527 LEE ST (21-0-324)", $: 792400 }, { "#": "2830 LEE ST (21-0-345)", $: 821800 }, { "#": "2931 LEE ST (21-0-323)", $: 820800 }, { "#": "3234 LEE ST (21-0-346)", $: 925500 }, { "#": "3335 LEE ST (21-0-322)", $: 827200 }, { "#": "3638 LEE ST (21-0-347)", $: 857600 }, { "#": "46 LEE ST (21-0-339)", $: 968300 }, { "#": "4042 LEE ST (21-0-348)", $: 832200 }, { "#": "4850 LEE ST (21-0-350)", $: 976800 }, { "#": "79 LEE ST (21-0-338)", $: 798900 }, { "#": "810 LEE ST (21-0-340)", $: 821800 }, { "#": "LINCOLN ST (18-0-489)", $: 729400 }, { "#": "10 LINCOLN ST (18-0-495)", $: 816400 }, { "#": "15 LINCOLN ST (18-0-484)", $: 824900 }, { "#": "19 LINCOLN ST (18-0-476)", $: 745500 }, { "#": "29 LINCOLN ST (18-0-470)", $: 68e4 }, { "#": "37 LINCOLN ST (18-0-463A)", $: 861900 }, { "#": "45 LINCOLN ST (18-0-460)", $: 691800 }, { "#": "47 LINCOLN ST (18-0-459)", $: 750100 }, { "#": "57 LINCOLN ST (18-0-155)", $: 617400 }, { "#": "6264 LINCOLN ST (18-0-148)", $: 532700 }, { "#": "6668 LINCOLN ST (18-0-149)", $: 730700 }, { "#": "8 LINCOLN ST (18-0-494)", $: 754100 }, { "#": "6 LINDEN ST (18-0-314)", $: 620100 }, { "#": "12 LINDENWOOD RD (17-0-306)", $: 683600 }, { "#": "14 LINDENWOOD RD (17-0-307)", $: 694800 }, { "#": "16 LINDENWOOD RD (17-0-308)", $: 857300 }, { "#": "18 LINDENWOOD RD (17-0-309)", $: 717800 }, { "#": "20 LINDENWOOD RD (17-0-310)", $: 758e3 }, { "#": "22 LINDENWOOD RD (17-0-311)", $: 685100 }, { "#": "8 LINDENWOOD RD (17-0-304)", $: 677200 }, { "#": "29 LOTUS AVE (2-0-6)", $: 654e3 }, { "#": "30 LOTUS AVE (2-0-40)", $: 705800 }, { "#": "39 LOTUS AVE (2-0-32)", $: 809400 }, { "#": "158 MAIN ST (16-0-248)", $: 754900 }, { "#": "160162 MAIN ST (16-0-248A)", $: 743900 }, { "#": "262264 MAIN ST (17-0-177)", $: 672900 }, { "#": "268 MAIN ST (17-0-179)", $: 559300 }, { "#": "274 MAIN ST (17-0-182)", $: 484500 }, { "#": "282 MAIN ST (17-0-185)", $: 542100 }, { "#": "397 MAIN ST (18-0-196)", $: 855100 }, { "#": "465 MAIN ST (18-0-295)", $: 853400 }, { "#": "467 MAIN ST (18-0-294)", $: 850900 }, { "#": "501 MAIN ST (18-0-286)", $: 764100 }, { "#": "503 MAIN ST (18-0-285)", $: 823600 }, { "#": "511513 MAIN ST (18-0-282)", $: 772400 }, { "#": "515 MAIN ST (18-0-281A)", $: 802400 }, { "#": "527 MAIN ST (18-0-277)", $: 766100 }, { "#": "529 MAIN ST (18-0-276)", $: 730500 }, { "#": "533535 MAIN ST (19-0-279)", $: 785300 }, { "#": "2527 LEE ST (21-0-324)", $: 792400 }, { "#": "537 MAIN ST (19-0-278)", $: 784700 }, { "#": "539 MAIN ST (19-0-277)", $: 782400 }, { "#": "541 MAIN ST (19-0-276)", $: 1049300 }, { "#": "542 MAIN ST (19-0-294)", $: 773800 }, { "#": "556556 MAIN ST (19-0-300)", $: 843e3 }, { "#": "563 MAIN ST (19-0-271)", $: 592400 }, { "#": "573 MAIN ST (19-0-266)", $: 1126700 }, { "#": "601603 MAIN ST (19-0-205)", $: 787400 }, { "#": "602604 MAIN ST (19-0-315)", $: 871500 }, { "#": "608 MAIN ST (19-0-317)", $: 876500 }, { "#": "610 MAIN ST (19-0-318)", $: 950200 }, { "#": "1113 MAPLE ST (18-0-184)", $: 687300 }, { "#": "16 MAPLE ST (18-0-430)", $: 813400 }, { "#": "31 MAPLE ST (18-0-106)", $: 716800 }, { "#": "6668 MAPLE ST (23-0-43)", $: 688300 }, { "#": "11 MARBLE ST (18-0-331)", $: 573300 }, { "#": "155 MARBLE ST (23-0-153)", $: 1224400 }, { "#": "2224 MARBLE ST (18-0-334)", $: 717200 }, { "#": "30 MARBLE ST (18-0-336)", $: 761600 }, { "#": "3638 MARBLE ST (18-0-348)", $: 760800 }, { "#": "5456 MARBLE ST (18-0-352)", $: 788e3 }, { "#": "91 MARBLE ST (18-0-395)", $: 701200 }, { "#": "11 MIDDLE ST (13-0-482)", $: 684100 }, { "#": "13 MIDDLE ST (13-0-481)", $: 778200 }, { "#": "1618 MIDDLE ST (13-0-486)", $: 887700 }, { "#": "3 MIDDLE ST (18-0-241)", $: 821600 }, { "#": "6 MIDDLE ST (18-0-239)", $: 596100 }, { "#": "9 MIDDLE ST (13-0-483)", $: 792100 }, { "#": "1113 MINOT ST (18-0-170)", $: 684600 }, { "#": "6 MINOT ST (18-0-172)", $: 601100 }, { "#": "1012 MONTVALE AVE (17-0-206)", $: 827200 }, { "#": "1416 MONTVALE AVE (17-0-207)", $: 75e4 }, { "#": "1517 MONTVALE AVE (17-0-275)", $: 637e3 }, { "#": "1820 MONTVALE AVE (17-0-208)", $: 708e3 }, { "#": "24 MONTVALE AVE (17-0-204)", $: 595800 }, { "#": "22 MONTVALE AVE (17-0-209)", $: 717700 }, { "#": "24 MONTVALE AVE (17-0-209A)", $: 655200 }, { "#": "3032 MONTVALE AVE (17-0-212)", $: 763600 }, { "#": "68 MONTVALE AVE (17-0-205)", $: 816600 }, { "#": "19 MURDOCK RD (14-0-283)", $: 822200 }, { "#": "23 MYRTLE ST (7-0-11)", $: 835700 }, { "#": "11 NIXON LN (11-0-32)", $: 923800 }, { "#": "51 NORTH AVE (3-0-146)", $: 837900 }, { "#": "154 NORTH ST (21-0-100)", $: 1416500 }, { "#": "65 NORTH ST (15-0-68)", $: 693400 }, { "#": "72 NORTH ST (16-0-17)", $: 720200 }, { "#": "5 ORCHARD PL (4-0-60)", $: 651600 }, { "#": "1 ORIENTAL CT (12-0-353)", $: 475800 }, { "#": "3 ORIENTAL CT (12-0-354)", $: 513800 }, { "#": "79 ORIENTAL CT (13-0-22)", $: 571100 }, { "#": "537 MAIN ST (19-0-278)", $: 784700 }, { "#": "120122 PARK ST (18-0-636)", $: 694e3 }, { "#": "124 PARK ST (18-0-637)", $: 657700 }, { "#": "1719 PARK ST (18-0-48)", $: 909800 }, { "#": "214 PARK ST (19-0-15)", $: 811600 }, { "#": "45 PARK ST (18-0-43)", $: 554500 }, { "#": "1012 PARKWAY RD (14-0-180)", $: 755400 }, { "#": "911 PARKWAY RD (19-0-330)", $: 709e3 }, { "#": "4 PEABODY RD (19-0-283)", $: 875100 }, { "#": "911 PEABODY RD (14-0-21)", $: 796500 }, { "#": "1618 PEARL ST (13-0-370)", $: 826e3 }, { "#": "3 PEARL ST (13-0-374)", $: 955500 }, { "#": "4 PEARL ST (13-0-366)", $: 639800 }, { "#": "8 PEARL ST (13-0-368)", $: 663200 }, { "#": "9 PEARL ST (13-0-372)", $: 695600 }, { "#": "15 PEBBLE PL (2-0-304)", $: 900800 }, { "#": "49 PERKINS ST (3-0-199)", $: 664300 }, { "#": "10 PINE ST (12-0-363)", $: 77e4 }, { "#": "11 PINE ST (12-0-364)", $: 580900 }, { "#": "29 PINE ST (13-0-513)", $: 633500 }, { "#": "3 PINE ST (12-0-370)", $: 662900 }, { "#": "33 PINE ST (13-0-512A)", $: 657e3 }, { "#": "4648 PINE ST (13-0-381)", $: 588400 }, { "#": "55 PINE ST (12-0-369)", $: 649700 }, { "#": "61 PINE ST (13-0-389)", $: 826500 }, { "#": "71 PINE ST (13-0-488)", $: 732200 }, { "#": "72 PINE ST (13-0-457)", $: 734600 }, { "#": "79 PINE ST (13-0-477)", $: 788300 }, { "#": "80 PINE ST (13-0-465)", $: 749300 }, { "#": "85 PINE ST (13-0-468)", $: 679300 }, { "#": "PLEASANT ST (13-0-141)", $: 811400 }, { "#": "12 PLEASANT ST (12-0-418)", $: 573700 }, { "#": "14 PLEASANT ST (12-0-419)", $: 663300 }, { "#": "21 PLEASANT ST (12-0-374)", $: 770900 }, { "#": "61 PLEASANT ST (13-0-107)", $: 743400 }, { "#": "62 PLEASANT ST (13-0-133)", $: 688100 }, { "#": "7 PLEASANT ST (12-0-416)", $: 682300 }, { "#": "70 PLEASANT ST (13-0-142)", $: 708300 }, { "#": "71 PLEASANT ST (13-0-98)", $: 722500 }, { "#": "74 PLEASANT ST (13-0-144)", $: 666400 }, { "#": "75 PLEASANT ST (13-0-97)", $: 674400 }, { "#": "810 PLEASANT ST (12-0-417A)", $: 675800 }, { "#": "83 PLEASANT ST (13-0-94)", $: 586500 }, { "#": "2 POMEWORTH ST (12-0-400)", $: 722400 }, { "#": "45 POMEWORTH ST (12-0-339)", $: 816400 }, { "#": "101 POND ST (14-0-237)", $: 886300 }, { "#": "104 POND ST (14-0-50)", $: 849200 }, { "#": "12 POND ST (13-0-355)", $: 637200 }, { "#": "14 POND ST (13-0-418)", $: 873600 }, { "#": "15 POND ST (13-0-356)", $: 564400 }, { "#": "16 POND ST (13-0-422)", $: 725e3 }, { "#": "120122 PARK ST (18-0-636)", $: 694e3 }, { "#": "19 POND ST (13-0-417)", $: 855700 }, { "#": "22 POND ST (13-0-425)", $: 781500 }, { "#": "25 POND ST (13-0-444)", $: 635400 }, { "#": "31 POND ST (13-0-441)", $: 713200 }, { "#": "32 POND ST (13-0-429)", $: 737600 }, { "#": "42 POND ST (13-0-434)", $: 749100 }, { "#": "46 POND ST (13-0-260)", $: 797400 }, { "#": "64 POND ST (13-0-268)", $: 640100 }, { "#": "19 RODGERS RD (21-0-255)", $: 813200 }, { "#": "1115 SAN JOSE TRL (21-0-327)", $: 819300 }, { "#": "1214 SAN JOSE TRL (21-0-332)", $: 827700 }, { "#": "1618 SAN JOSE TRL (21-0-333)", $: 82e4 }, { "#": "1719 SAN JOSE TRL (21-0-326)", $: 819500 }, { "#": "2022 SAN JOSE TRL (21-0-334)", $: 826400 }, { "#": "2426 SAN JOSE TRL (21-0-335)", $: 817300 }, { "#": "35 SAN JOSE TRL (21-0-329)", $: 822200 }, { "#": "79 SAN JOSE TRL (21-0-328)", $: 817300 }, { "#": "14 SHUMWAY CIR (5-0-3)", $: 948700 }, { "#": "8 SKYEWOOD DR (14-0-246)", $: 952800 }, { "#": "9 SKYEWOOD DR (14-0-254)", $: 1010400 }, { "#": "15 SOUTH HILLSIDE ST (19-0-92)", $: 739200 }, { "#": "68 SOUTH ST (19-0-322)", $: 712400 }, { "#": "11 SPRING ST (12-0-217)", $: 658900 }, { "#": "13 SPRING ST (12-0-216)", $: 694400 }, { "#": "37 SPRING ST (7-0-435)", $: 645500 }, { "#": "41 SPRING ST (7-0-432)", $: 1152600 }, { "#": "65 SPRING ST (7-0-414)", $: 1353800 }, { "#": "70 SPRING ST (7-0-388)", $: 679400 }, { "#": "83 SPRING ST (2-0-160)", $: 689e3 }, { "#": "84 SPRING ST (7-0-393)", $: 748400 }, { "#": "88 SPRING ST (1-0-156)", $: 739600 }, { "#": "3 SPRUCE ST (21-0-292)", $: 993e3 }, { "#": "5 SPRUCE ST (21-0-291)", $: 986300 }, { "#": "5658 STEVENS ST (8-0-90)", $: 712900 }, { "#": "57 STEVENS ST (8-0-68)", $: 611400 }, { "#": "9 STEVENS ST (7-0-441)", $: 659400 }, { "#": "16 STONE AVE (3-0-319)", $: 828400 }, { "#": "18 STONE AVE (3-0-320)", $: 744900 }, { "#": "2 SULLIVAN LN (8-0-46)", $: 850700 }, { "#": "10 SUMMER ST (13-0-317)", $: 733300 }, { "#": "110 SUMMER ST (13-0-73)", $: 750900 }, { "#": "111 SUMMER ST (13-0-81)", $: 820800 }, { "#": "120120 SUMMER ST (13-0-78)", $: 773700 }, { "#": "135 SUMMER ST (7-0-445)", $: 654600 }, { "#": "2224 SUMMER ST (13-0-321)", $: 777e3 }, { "#": "23 SUMMER ST (13-0-279)", $: 724100 }, { "#": "39 SUMMER ST (13-0-259)", $: 677500 }, { "#": "47 SUMMER ST (13-0-255)", $: 760700 }, { "#": "48 SUMMER ST (13-0-330)", $: 719600 }, { "#": "52 SUMMER ST (13-0-331)", $: 753500 }, { "#": "19 POND ST (13-0-417)", $: 855700 }, { "#": "5860 SUMMER ST (13-0-332)", $: 738800 }, { "#": "6 SUMMER ST (18-0-257)", $: 677300 }, { "#": "91 SUMMER ST (13-0-89)", $: 802900 }, { "#": "93 SUMMER ST (13-0-88)", $: 732400 }, { "#": "5658 SUMMERHILL ST (13-0-252)", $: 994900 }, { "#": "27 SUMMIT RD (19-0-73)", $: 889900 }, { "#": "26 TREMONT ST (12-0-257)", $: 993200 }, { "#": "27 TREMONT ST (12-0-239)", $: 601200 }, { "#": "9 TREMONT ST (12-0-249)", $: 822800 }, { "#": "16 VICTORIA LN (16-0-204)", $: 700900 }, { "#": "2022 VICTORIA LN (16-0-205)", $: 691300 }, { "#": "2426 VICTORIA LN (16-0-206)", $: 693100 }, { "#": "2830 VICTORIA LN (16-0-207)", $: 742100 }, { "#": "911 WALNUT ST (13-0-435)", $: 862e3 }, { "#": "15 WARREN ST (18-0-420)", $: 830400 }, { "#": "17 WARREN ST (18-0-419)", $: 707700 }, { "#": "25 WARREN ST (18-0-415)", $: 691100 }, { "#": "29 WARREN ST (18-0-413)", $: 976100 }, { "#": "33 WARREN ST (18-0-411)", $: 834500 }, { "#": "35 WARREN ST (18-0-410)", $: 678600 }, { "#": "42 WARREN ST (18-0-329)", $: 779900 }, { "#": "24 WASHINGTON AVE (12-0-157)", $: 726500 }, { "#": "0 WASHINGTON CT (12-0-144)", $: 1305600 }, { "#": "WASHINGTON ST (12-0-221A)", $: 1069200 }, { "#": "25 WASHINGTON ST (12-0-182)", $: 688300 }, { "#": "28 WASHINGTON ST (12-0-228)", $: 782100 }, { "#": "47 WASHINGTON ST (12-0-148)", $: 692700 }, { "#": "69 WASHINGTON ST (12-0-129)", $: 746600 }, { "#": "20 WAVERLY ST (12-0-66)", $: 661500 }, { "#": "21 WAVERLY ST (12-0-77)", $: 705e3 }, { "#": "22 WAVERLY ST (12-0-67)", $: 653800 }, { "#": "4 WAVERLY ST (12-0-58)", $: 863700 }, { "#": "5 WEBSTER CT (18-0-340)", $: 653300 }, { "#": "57 WEST HANCOCK ST (18-0-34)", $: 704700 }, { "#": "16 WEST ST (17-0-396)", $: 862600 }, { "#": "292 WEST WYOMING AVE (4-0-111)", $: 630100 }, { "#": "42 WILLIAM ST (12-0-382)", $: 646500 }, { "#": "450450 WILLIAM ST (22-0-78)", $: 764600 }, { "#": "76 WILLIAM ST (12-0-387)", $: 724500 }, { "#": "1 WINTHROP ST (18-0-442)", $: 643300 }, { "#": "23 WINTHROP ST (18-0-613)", $: 728900 }, { "#": "44 WINTHROP ST (18-0-482)", $: 776400 }, { "#": "6 WINTHROP ST (18-0-483)", $: 922200 }, { "#": "15 WRIGHT ST (18-0-439)", $: 708300 }, { "#": "20 WRIGHT ST (18-0-451)", $: 777300 }, { "#": "21 WRIGHT ST (18-0-435)", $: 721800 }, { "#": "23 WRIGHT ST (18-0-434)", $: 607700 }, { "#": "25 WRIGHT ST (18-0-433)", $: 724600 }, { "#": "27 WRIGHT ST (18-0-431)", $: 721800 }, { "#": "39 WRIGHT ST (18-0-178)", $: 741500 }, { "#": "5860 SUMMER ST (13-0-332)", $: 738800 }, { "#": "40 WRIGHT ST (18-0-164)", $: 798600 }, { "#": "4143 WRIGHT ST (18-0-177)", $: 731100 }, { "#": "48 WRIGHT ST (18-0-167)", $: 729600 }, { "#": "40 WRIGHT ST (18-0-164)", $: 798600 }, { "#": "13 AVON ST (12-0-163)", $: 1030200 }, { "#": "3 BARRETT AVE (13-0-175)", $: 700400 }, { "#": "59 CENTRAL ST (12-0-403)", $: 914800 }, { "#": "60 CENTRAL ST (12-0-420)", $: 883600 }, { "#": "77 CENTRAL ST (12-0-399)", $: 965600 }, { "#": "20 COMMON ST (12-0-367)", $: 917900 }, { "#": "10 CONGRESS ST (18-0-546)", $: 815400 }, { "#": "2 COTTAGE ST (17-0-258)", $: 1075900 }, { "#": "85 ELM ST (12-0-282)", $: 1060900 }, { "#": "8890 ELM ST (12-0-97)", $: 1125700 }, { "#": "76 FELLSVIEW RD (4-0-56)", $: 894800 }, { "#": "200 FRANKLIN ST (3-0-14)", $: 1127500 }, { "#": "49 FRANKLIN ST (13-0-400+)", $: 867800 }, { "#": "55 FRANKLIN ST (13-0-399)", $: 922900 }, { "#": "57 FRANKLIN ST (13-0-398)", $: 904300 }, { "#": "69 FRANKLIN ST (13-0-380)", $: 849600 }, { "#": "72 FRANKLIN ST (13-0-42)", $: 937800 }, { "#": "84 FRANKLIN ST (13-0-46)", $: 932600 }, { "#": "18 GERRY ST (18-0-251)", $: 851200 }, { "#": "5-7 GERRY ST (13-0-473)", $: 934e3 }, { "#": "35 GOULD ST (13-0-36)", $: 836200 }, { "#": "8 HERSAM ST (18-0-132)", $: 801800 }, { "#": "1 LINCOLN ST (18-0-400)", $: 967900 }, { "#": "2 LINCOLN ST (18-0-399)", $: 869e3 }, { "#": "280 MAIN ST (17-0-184)", $: 908e3 }, { "#": "478 MAIN ST (18-0-243)", $: 740200 }, { "#": "480 MAIN ST (18-0-244)", $: 629900 }, { "#": "485 MAIN ST (18-0-289)", $: 809900 }, { "#": "505 MAIN ST (18-0-284)", $: 826200 }, { "#": "507509 MAIN ST (18-0-283)", $: 949100 }, { "#": "517 MAIN ST (18-0-281)", $: 852400 }, { "#": "538 MAIN ST (19-0-292)", $: 904900 }, { "#": "1517 MAPLE ST (18-0-183)", $: 764e3 }, { "#": "3636 MAPLE ST (18-0-565)", $: 793500 }, { "#": "24 MIDDLE ST (18-0-238)", $: 916300 }, { "#": "23 PARK ST (18-0-47)", $: 662300 }, { "#": "6 PEARL ST (13-0-367)", $: 958200 }, { "#": "15 PINE ST (13-0-13)", $: 9e5 }, { "#": "4 PINE ST (12-0-359)", $: 851e3 }, { "#": "82 PINE ST (13-0-466)", $: 937700 }, { "#": "11 PLEASANT ST (12-0-415)", $: 851700 }, { "#": "19 PLEASANT ST (12-0-375)", $: 918300 }, { "#": "66 PLEASANT ST (13-0-134)", $: 750900 }, { "#": "79 PLEASANT ST (13-0-95)", $: 677200 }, { "#": "98100 SPRING ST (1-0-174)", $: 848100 }, { "#": "8 SUMMER ST (13-0-316)", $: 851500 }, { "#": "41 WARREN ST (18-0-407)", $: 939100 }, { "#": "90 WILLIAM ST (12-0-390)", $: 808700 }, { "#": "11 WILSON RD (14-0-178)", $: 930100 }, { "#": "57 WRIGHT ST (18-0-126)", $: 933400 }, { "#": "13 AVON ST (12-0-163)", $: 1030200 }, { "#": "58 WRIGHT ST (18-0-125)", $: 915100 }, { "#": "58 WRIGHT ST (18-0-125)", $: 915100 }, { "#": "BOW STREET CT (7-0-327)", $: 427500 }, { "#": "23 BROOKBRIDGE RD (1-0-286)", $: 61e3 }, { "#": "7 COVENTRY LN (11-0-264G)", $: 561500 }, { "#": "GREEN ST (6-0-112)", $: 21700 }, { "#": "GREEN ST (7-0-10)", $: 41900 }, { "#": "52 NEWCOMB RD (4-0-10A)", $: 121800 }, { "#": "164 NORTH ST (21-0-103)", $: 392500 }, { "#": "PARK AVE (5-0-24)", $: 349900 }, { "#": "96 PARK AVE (10-0-44)", $: 228500 }, { "#": "PROSPECT ST (4-0-52)", $: 25e3 }, { "#": "10 RODGERS RD (21-0-257A)", $: 440600 }, { "#": "2 STEVENS ST (7-0-438)", $: 394200 }, { "#": "276 WEST WYOMING AVE (4-0-73A)", $: 48900 }, { "#": "BOW STREET CT (7-0-327)", $: 427500 }, { "#": "61 BOW ST (7-0-284)", $: 679200 }, { "#": "1 COLUMBUS AVE (3-0-45)", $: 792500 }, { "#": "4 COMMON ST (12-0-410)", $: 1226e3 }, { "#": "5 EMERALD CT (8-0-166)", $: 502800 }, { "#": "10 GOULD ST (13-0-20)", $: 835900 }, { "#": "11 MELBA LN (7-0-250)", $: 891200 }, { "#": "57 MIDDLE ST (18-0-240)", $: 839100 }, { "#": "58 OAK ST (16-0-299)", $: 1166100 }, { "#": "5 SPRING LN (7-0-413)", $: 694200 }, { "#": "72 SPRING ST (7-0-389)", $: 1246800 }, { "#": "73 SPRING ST (7-0-403)", $: 928400 }, { "#": "87 SPRING ST (2-0-159)", $: 715e3 }, { "#": "62 SUMMER ST (13-0-334)", $: 839700 }, { "#": "34 WARREN ST (18-0-315)", $: 1431400 }, { "#": "172 WILLIAM ST (17-0-443)", $: 1055100 }, { "#": "61 BOW ST (7-0-284)", $: 679200 }, { "#": "55 CENTRAL ST (12-0-405)", $: 975300 }, { "#": "24 CHESTNUT ST (18-0-140)", $: 1119700 }, { "#": "7375 FRANKLIN ST (13-0-378)", $: 1416800 }, { "#": "149 HANCOCK ST (18-0-417)", $: 938500 }, { "#": "72 HANCOCK ST (13-0-489)", $: 1059600 }, { "#": "2 HILL CT (18-0-185)", $: 1520400 }, { "#": "5 HILL CT (18-0-186)", $: 1198e3 }, { "#": "3 LINCOLN ST (18-0-491)", $: 1137300 }, { "#": "269 MAIN ST (17-0-302)", $: 1092300 }, { "#": "455 MAIN ST (18-0-297)", $: 1135e3 }, { "#": "476 MAIN ST (18-0-242)", $: 1047700 }, { "#": "489 MAIN ST (18-0-288)", $: 2455900 }, { "#": "500502 MAIN ST (18-0-262)", $: 1540400 }, { "#": "589 MAIN ST (19-0-260)", $: 983300 }, { "#": "59 MAIN ST (16-0-228)", $: 946500 }, { "#": "1012 MAPLE ST (18-0-428)", $: 1252700 }, { "#": "5658 PINE ST (13-0-384)", $: 1156e3 }, { "#": "6 PINE ST (12-0-360)", $: 1004400 }, { "#": "57 PLAZA AVE (3-0-364)", $: 1016600 }, { "#": "13 POMEWORTH ST (12-0-385)", $: 1304400 }, { "#": "1921 SPRING ST (12-0-213)", $: 918100 }, { "#": "55 CENTRAL ST (12-0-405)", $: 975300 }, { "#": "CENTRAL ST (11-0-360)", $: 12497600 }, { "#": "COLONIAL CT APTS (11-0-298+)", $: 1594e4 }, { "#": "15 EXECUTIVE DR (27-0-3D)", $: 76764500 }, { "#": "15 EXECUTIVE DR (27-0-3D)", $: 76764500 }, { "#": "225 FALLON RD (26-0-1)", $: 92206300 }, { "#": "168 FRANKLIN ST (8-0-106)", $: 9660400 }, { "#": "50 FRANKLIN ST (13-0-509)", $: 5470700 }, { "#": "5 GLEN RD (23-0-143A)", $: 5440800 }, { "#": "HILL ST (23-0-143)", $: 31573700 }, { "#": "117 HILL ST (23-0-93)", $: 15702700 }, { "#": "12 HILLSIDE RD (23-0-57A)", $: 5029e3 }, { "#": "411 MAIN ST (18-0-193)", $: 8509e3 }, { "#": "5254 MAIN ST (11-0-3)", $: 11853400 }, { "#": "555 MAIN ST (19-0-273)", $: 2877200 }, { "#": "95 MAPLE ST (23-0-17)", $: 39729e3 }, { "#": "105109 MARBLE ST (18-0-647)", $: 5606e3 }, { "#": "71 MONTVALE AVE (22-0-86)", $: 6410100 }, { "#": "27 NORTH ST (10-0-10)", $: 2852700 }, { "#": "45 NORTH ST (10-0-6)", $: 6445300 }, { "#": "52 NORTH ST (10-0-2)", $: 38292e3 }, { "#": "48 PLEASANT ST (12-0-346)", $: 5109400 }, { "#": "POMEWORTH ST (12-0-328)", $: 3834400 }, { "#": "30 POMEWORTH ST (12-0-325)", $: 4899900 }, { "#": "1 STONEHILL DR (15-0-73)", $: 9507400 }, { "#": "3 STONEHILL DR (15-0-72)", $: 9439500 }, { "#": "5 STONEHILL DR (15-0-71)", $: 9316100 }, { "#": "7 STONEHILL DR (15-0-69)", $: 9868900 }, { "#": "3 WARREN ST (18-0-426)", $: 1946e3 }, { "#": "CENTRAL ST (11-0-360)", $: 12497600 }, { "#": "MOUNTAINVIEW DR (22-0-81X)", $: 38740100 }, { "#": "MOUNTAINVIEW DR (22-0-81X)", $: 38740100 }, { "#": "140 FRANKLIN ST (8-0-94)", $: 11095300 }, { "#": "140 FRANKLIN ST (8-0-94)", $: 11095300 }];

  // src/use-calculator.ts
  var DEFAULT_OVERRIDE_AMOUNT = 5e6;
  var DEFAULT_ASSESSED_VALUE = 765770;
  var CURRENT_TAX_RATE = 10.23;
  var RATE_IMPACT_PER_OVERRIDE_DOLLAR = 2.2 / 146e5;
  var formatDollars = (val) => val.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  var fuse = new Fuse(properties_default, {
    keys: ["#"],
    threshold: 0.2
  });
  var useCalculator = () => {
    const [isLoading, setIsLoading] = d2(false);
    const [suggestions, setSuggestions] = d2([]);
    const [selectedProperty, setSelectedProperty] = d2(
      null
    );
    const [query, setQuery] = d2("");
    const [assessedValue, setAssessedValue] = d2(
      DEFAULT_ASSESSED_VALUE
    );
    const [overrideValue, setOverrideValue] = d2(
      DEFAULT_OVERRIDE_AMOUNT
    );
    const [calculatedValues, setCalculatedValues] = d2({
      currentTaxRate: "",
      newTaxRate: "",
      newTaxRateImpact: "",
      currentTaxBillYearly: "",
      newTaxBillYearly: "",
      currentTaxBillQuarterly: "",
      newTaxBillQuarterly: "",
      estimatedTaxImpactYearly: "",
      estimatedTaxImpactQuarterly: "",
      estimatedTaxImpactMonthly: "",
      estimatedTaxImpactDaily: ""
    });
    const fetchSuggestions = q2(async (searchQuery) => {
      setIsLoading(true);
      try {
        const data = fuse.search(searchQuery).slice(0, 10).map(({ item }) => ({
          address: item["#"],
          value: item.$
        }));
        setSuggestions(data);
      } catch (error2) {
        console.error("Error fetching suggestions:", error2);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, []);
    const debouncedFetchSuggestions = q2(
      /* @__PURE__ */ (() => {
        let timeoutId;
        return (searchQuery) => {
          setIsLoading(true);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fetchSuggestions(searchQuery), 200);
        };
      })(),
      [fetchSuggestions]
    );
    y2(() => {
      const rateImpact = (overrideValue != null ? overrideValue : 0) * RATE_IMPACT_PER_OVERRIDE_DOLLAR;
      const proposedNewTaxRate = CURRENT_TAX_RATE + rateImpact;
      const currentTaxBill = (assessedValue != null ? assessedValue : 0) / 1e3 * CURRENT_TAX_RATE;
      const newTaxBill = (assessedValue != null ? assessedValue : 0) / 1e3 * proposedNewTaxRate;
      const taxBillImpactYearly = newTaxBill - currentTaxBill;
      const taxBillImpactQuarterly = taxBillImpactYearly / 4;
      const taxBillImpactMonthly = taxBillImpactYearly / 12;
      const taxBillImpactDaily = taxBillImpactYearly / 365;
      setCalculatedValues({
        currentTaxRate: formatDollars(CURRENT_TAX_RATE),
        newTaxRate: formatDollars(proposedNewTaxRate),
        newTaxRateImpact: formatDollars(rateImpact),
        currentTaxBillYearly: formatDollars(currentTaxBill),
        newTaxBillYearly: formatDollars(newTaxBill),
        currentTaxBillQuarterly: formatDollars(currentTaxBill / 4),
        newTaxBillQuarterly: formatDollars(newTaxBill / 4),
        estimatedTaxImpactYearly: formatDollars(taxBillImpactYearly),
        estimatedTaxImpactQuarterly: formatDollars(taxBillImpactQuarterly),
        estimatedTaxImpactMonthly: formatDollars(taxBillImpactMonthly),
        estimatedTaxImpactDaily: formatDollars(taxBillImpactDaily)
      });
    }, [assessedValue, overrideValue]);
    const onPropertyChange = q2((property) => {
      setSelectedProperty(property);
      if (property) {
        setAssessedValue(property.value);
        setQuery(property.address);
      }
    }, []);
    const onAddressInputChange = q2(
      (event) => {
        const value = event.target.value;
        setQuery(value);
        debouncedFetchSuggestions(value);
      },
      [debouncedFetchSuggestions]
    );
    const onAssessedValueChange = q2((value) => {
      setAssessedValue(value);
    }, []);
    const onOverrideValueChange = q2((value) => {
      setOverrideValue(value);
    }, []);
    const getDisplayValue = q2(
      (property) => {
        var _a;
        return (_a = property == null ? void 0 : property.address) != null ? _a : query;
      },
      [query]
    );
    return {
      isLoading,
      suggestions,
      selectedProperty,
      query,
      assessedValue,
      overrideValue,
      calculatedValues,
      onPropertyChange,
      onAddressInputChange,
      onAssessedValueChange,
      onOverrideValueChange,
      getDisplayValue
    };
  };

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var f13 = 0;
  var i9 = Array.isArray;
  function u16(e8, t9, n9, o11, i10, u17) {
    t9 || (t9 = {});
    var a15, c13, p10 = t9;
    if ("ref" in p10) for (c13 in p10 = {}, t9) "ref" == c13 ? a15 = t9[c13] : p10[c13] = t9[c13];
    var l8 = { type: e8, props: p10, key: n9, ref: a15, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f13, __i: -1, __u: 0, __source: i10, __self: u17 };
    if ("function" == typeof e8 && (a15 = e8.defaultProps)) for (c13 in a15) void 0 === p10[c13] && (p10[c13] = a15[c13]);
    return l.vnode && l.vnode(l8), l8;
  }

  // src/calculator.tsx
  var Calculator = () => {
    const calculator = useCalculator();
    return /* @__PURE__ */ u16("article", { id: "stoneham-override-calculator", className: "calculator", children: [
      /* @__PURE__ */ u16("section", { className: "calculator__inputs", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Calculator Inputs" }),
        /* @__PURE__ */ u16("form", { className: "calculator__form", children: /* @__PURE__ */ u16("fieldset", { className: "calculator__fieldset", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__field", children: [
            /* @__PURE__ */ u16("label", { htmlFor: "propertyAddress", className: "calculator__label", children: "Your Property Address" }),
            /* @__PURE__ */ u16(
              Ht,
              {
                value: calculator.selectedProperty,
                onChange: calculator.onPropertyChange,
                children: /* @__PURE__ */ u16("div", { className: "calculator__combobox", children: [
                  /* @__PURE__ */ u16(
                    ko,
                    {
                      id: "propertyAddress",
                      className: "calculator__input calculator__input--combobox",
                      placeholder: "Enter your property address",
                      displayValue: calculator.getDisplayValue,
                      onChange: calculator.onAddressInputChange
                    }
                  ),
                  /* @__PURE__ */ u16(Uo, { className: "calculator__combobox-options", children: calculator.isLoading ? /* @__PURE__ */ u16("div", { className: "calculator__combobox-message", children: "Loading..." }) : calculator.suggestions.length === 0 && calculator.query.length > 2 ? /* @__PURE__ */ u16("div", { className: "calculator__combobox-message", children: "No properties found" }) : calculator.suggestions.map((suggestion, index3) => /* @__PURE__ */ u16(
                    Ho,
                    {
                      value: suggestion,
                      className: "calculator__combobox-option",
                      children: [
                        /* @__PURE__ */ u16("div", { className: "calculator__combobox-option-address", children: suggestion.address }),
                        /* @__PURE__ */ u16("div", { className: "calculator__combobox-option-value", children: [
                          "Assessed Value: ",
                          formatDollars(suggestion.value)
                        ] })
                      ]
                    },
                    index3
                  )) })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__field", children: [
            /* @__PURE__ */ u16("label", { htmlFor: "yourValue", className: "calculator__label", children: "Your Assessed Property Value" }),
            /* @__PURE__ */ u16("div", { className: "calculator__input-wrapper", children: [
              /* @__PURE__ */ u16("span", { className: "calculator__currency-symbol", children: "$" }),
              /* @__PURE__ */ u16(
                NumericFormat,
                {
                  id: "yourValue",
                  className: "calculator__input calculator__input--numeric",
                  name: "Your assessment value",
                  type: "text",
                  value: calculator.assessedValue,
                  onValueChange: (e8) => calculator.onAssessedValueChange(e8.floatValue),
                  placeholder: formatDollars(DEFAULT_ASSESSED_VALUE),
                  thousandSeparator: true,
                  allowNegative: false,
                  decimalScale: 0,
                  max: 1e8,
                  maxLength: 11
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__field", children: [
            /* @__PURE__ */ u16("label", { htmlFor: "overrideValue", className: "calculator__label", children: "Hypothetical Override Amount" }),
            /* @__PURE__ */ u16("div", { className: "calculator__input-wrapper", children: [
              /* @__PURE__ */ u16("span", { className: "calculator__currency-symbol", children: "$" }),
              /* @__PURE__ */ u16(
                NumericFormat,
                {
                  id: "overrideValue",
                  className: "calculator__input calculator__input--numeric",
                  name: "New override amount",
                  type: "text",
                  value: calculator.overrideValue,
                  onValueChange: (e8) => calculator.onOverrideValueChange(e8.floatValue),
                  placeholder: formatDollars(DEFAULT_OVERRIDE_AMOUNT),
                  thousandSeparator: true,
                  allowNegative: false,
                  decimalScale: 0,
                  max: 146e5,
                  maxLength: 10
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ u16("section", { className: "calculator__results calculator__results--tax-rate", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Estimated Tax Rate Impact" }),
        /* @__PURE__ */ u16("dl", { className: "calculator__data-list", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Current Tax Rate" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: "(per $1,000)" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.currentTaxRate })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Proposed Tax Rate" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: "(per $1,000)" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.newTaxRate })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Rate Increase" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--unit", children: "(per $1,000)" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.newTaxRateImpact })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u16("section", { className: "calculator__results calculator__results--tax-bill", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Your Estimated Tax Bill" }),
        /* @__PURE__ */ u16("dl", { className: "calculator__data-list", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Current Annual Bill" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.currentTaxBillYearly })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Proposed Annual Bill" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.newTaxBillYearly })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Current Quarterly Bill" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.currentTaxBillQuarterly })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Proposed Quarterly Bill" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.newTaxBillQuarterly })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u16("section", { className: "calculator__results calculator__results--tax-impact", children: [
        /* @__PURE__ */ u16("h2", { className: "calculator__heading", children: "Your Estimated Tax Impact" }),
        /* @__PURE__ */ u16("dl", { className: "calculator__data-list", children: [
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Annual Impact:" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.estimatedTaxImpactYearly })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Quarterly Impact:" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.estimatedTaxImpactQuarterly })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Monthly Impact:" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.estimatedTaxImpactMonthly })
          ] }),
          /* @__PURE__ */ u16("div", { className: "calculator__data-item", children: [
            /* @__PURE__ */ u16("dt", { className: "calculator__term", children: "Daily Impact:" }),
            /* @__PURE__ */ u16("dd", { className: "calculator__detail calculator__detail--value", children: calculator.calculatedValues.estimatedTaxImpactDaily })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u16("footer", { className: "calculator__footer", children: /* @__PURE__ */ u16("p", { className: "calculator__disclaimer", children: [
        "Methodology derived from",
        " ",
        /* @__PURE__ */ u16(
          "a",
          {
            href: "https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc",
            className: "calculator__link",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "the Massachusetts Department of Revenue's Division of Local Services Tax Impact Calculator"
          }
        ),
        " ",
        "for the town of Stoneham (FY2025). Property assessments pulled from public record via",
        " ",
        /* @__PURE__ */ u16(
          "a",
          {
            href: "https://stoneham.patriotproperties.com/default.asp",
            className: "calculator__link",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "the Stoneham Patriot Properties website"
          }
        ),
        ". For demonstration purposes only. Actual tax impact may vary based on final override amount, assessed property values, and other adjustments to the tax levy. This calculator is not approved nor endorsed by the town of Stoneham, the Massachusetts Department of Revenue, Patriot Properties, nor any other official entity. Source code available via",
        " ",
        /* @__PURE__ */ u16(
          "a",
          {
            href: "https://github.com/RoboCafaz/stoneham-override-calculator",
            className: "calculator__link",
            target: "_blank",
            children: "GitHub"
          }
        ),
        "."
      ] }) })
    ] });
  };

  // src/index.tsx
  var renderCalculator = (targetElementId) => {
    G(/* @__PURE__ */ u16(Calculator, {}), document.getElementById(targetElementId));
  };
  window.stonehamOverrideCalculator = {
    renderCalculator
  };
  return __toCommonJS(index_exports);
})();
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=stoneham-override-calculator.js.map
