(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        m = {},
        ha = {},
        p = function(a, b) {
            var c = ha[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        },
        q = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in m ? f = m : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(m, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    q("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.h
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    q("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, m.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");
    var ia = function(a) {
            a = {
                next: a
            };
            a[p(m.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ja = function(a) {
            return a.raw = a
        },
        r = function(a) {
            var b = "undefined" != typeof m.Symbol && p(m.Symbol, "iterator") && a[p(m.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: ba(a)
            }
        },
        ka = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        t = function(a) {
            return a instanceof Array ? a : ka(r(a))
        },
        la = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        na = fa && "function" == typeof p(Object, "assign") ? p(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) la(d, e) && (a[e] = d[e])
            }
            return a
        };
    q("Object.assign", function(a) {
        return a || na
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa,
        v = function(a, b) {
            a.prototype = oa(b.prototype);
            a.prototype.constructor = a;
            if (ta) ta(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Sa = b.prototype
        },
        ua = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    q("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    q("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.h = (e += Math.random() + 1).toString();
                if (g) {
                    g = r(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!la(g, d)) {
                var k = new b;
                ca(g, d, {
                    value: k
                })
            }
            if (!la(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.h] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && la(g, d) ? g[d][this.h] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && la(g, d) && la(g[d], this.h)
        };
        f.prototype.delete = function(g) {
            return c(g) && la(g, d) && la(g[d], this.h) ? delete g[d][this.h] : !1
        };
        return f
    }, "es6");
    q("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(r([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (u) {
                    return !1
                }
            }()) return a;
        var b = new m.WeakMap,
            c = function(h) {
                this.i = {};
                this.h = f();
                this.size = 0;
                if (h) {
                    h = r(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.s ? l.s.value = k : (l.s = {
                next: this.h,
                D: this.h.D,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.s), this.h.D.next = l.s, this.h.D = l.s, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.s && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.s.D.next = h.s.next, h.s.next.D = h.s.D, h.s.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.i = {};
            this.h = this.h.D = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).s
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).s) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[p(m.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.i[l];
                if (n && la(h.i, l))
                    for (h = 0; h < n.length; h++) {
                        var u = n[h];
                        if (k !== k && u.key !== u.key || k === u.key) return {
                            id: l,
                            list: n,
                            index: h,
                            s: u
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    s: void 0
                }
            },
            e = function(h, k) {
                var l = h.h;
                return ia(function() {
                    if (l) {
                        for (; l.head != h.h;) l = l.D;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.D = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    var va = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[p(m.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    q("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var wa = function(a) {
        return a ? a : p(Array.prototype, "fill")
    };
    q("Int8Array.prototype.fill", wa, "es6");
    q("Uint8Array.prototype.fill", wa, "es6");
    q("Uint8ClampedArray.prototype.fill", wa, "es6");
    q("Int16Array.prototype.fill", wa, "es6");
    q("Uint16Array.prototype.fill", wa, "es6");
    q("Int32Array.prototype.fill", wa, "es6");
    q("Uint32Array.prototype.fill", wa, "es6");
    q("Float32Array.prototype.fill", wa, "es6");
    q("Float64Array.prototype.fill", wa, "es6");
    q("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(r([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.h = new m.Map;
            if (c) {
                c = r(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return p(this.h, "values").call(this.h)
        };
        b.prototype.keys = p(b.prototype, "values");
        b.prototype[p(m.Symbol, "iterator")] = p(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var xa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = xa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = xa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    q("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = xa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? p(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || p(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== xa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var w = this || self,
        ya = function(a) {
            a = a.split(".");
            for (var b = w, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Ba = function(a) {
            return Object.prototype.hasOwnProperty.call(a, za) && a[za] || (a[za] = ++Aa)
        },
        za = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Aa = 0,
        Ca = function(a, b) {
            a = a.split(".");
            var c = w;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var Da = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        La = function(a) {
            if (!Ea.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Fa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ga, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ha, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ia, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ja, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ka, "&#0;"));
            return a
        },
        Fa = /&/g,
        Ga = /</g,
        Ha = />/g,
        Ia = /"/g,
        Ja = /'/g,
        Ka = /\x00/g,
        Ea = /[\x00&<>"']/,
        Na = function(a, b) {
            var c = 0;
            a = Da(String(a)).split(".");
            b = Da(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ma(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ma(0 == f[2].length, 0 == g[2].length) || Ma(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Ma = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function Oa() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Pa(a) {
        return -1 != Oa().indexOf(a)
    };
    var Qa = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Ra = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Sa = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Ta(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Va(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Wa(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Xa = function(a) {
        Xa[" "](a);
        return a
    };
    Xa[" "] = function() {};
    var Ya = {},
        Za = null,
        ab = function(a) {
            var b;
            void 0 === b && (b = 0);
            $a();
            b = Ya[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        cb = function(a) {
            var b = [];
            bb(a, function(c) {
                b.push(c)
            });
            return b
        },
        bb = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Za[l];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            $a();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        $a = function() {
            if (!Za) {
                Za = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ya[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Za[f] && (Za[f] = e)
                    }
                }
            }
        };
    var db = "undefined" !== typeof Uint8Array,
        eb = {};
    var fb, gb = function(a) {
        if (eb !== eb) throw Error("illegal external caller");
        this.U = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    gb.prototype.isEmpty = function() {
        return null == this.U
    };
    var x = "function" === typeof m.Symbol && "symbol" === typeof(0, m.Symbol)() ? (0, m.Symbol)() : void 0;

    function z(a, b) {
        if (x) return a[x] |= b;
        if (void 0 !== a.B) return a.B |= b;
        Object.defineProperties(a, {
            B: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function hb(a, b) {
        x ? a[x] && (a[x] &= ~b) : void 0 !== a.B && (a.B &= ~b)
    }

    function A(a) {
        var b;
        x ? b = a[x] : b = a.B;
        return null == b ? 0 : b
    }

    function B(a, b) {
        x ? a[x] = b : void 0 !== a.B ? a.B = b : Object.defineProperties(a, {
            B: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function ib(a) {
        z(a, 1);
        return a
    }

    function C(a) {
        return !!(A(a) & 2)
    }

    function jb(a) {
        z(a, 16);
        return a
    }

    function kb(a, b) {
        B(b, (a | 0) & -51)
    }

    function lb(a, b) {
        B(b, (a | 18) & -41)
    };
    var mb = {};

    function nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ob, pb, qb = [];
    B(qb, 23);
    pb = Object.freeze(qb);
    var rb = function(a) {
        if (C(a.l)) throw Error("Cannot mutate an immutable Message");
    };

    function sb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && nb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    var tb;

    function ub(a, b) {
        tb = b;
        a = new a(b);
        tb = void 0;
        return a
    };

    function vb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (A(a) & 128)) return a = Array.prototype.slice.call(a), sb(a), a
                    } else {
                        if (db && null != a && a instanceof Uint8Array) return ab(a);
                        if (a instanceof gb) {
                            var b = a.U;
                            return null == b ? "" : "string" === typeof b ? b : a.U = ab(b)
                        }
                    }
        }
        return a
    };

    function wb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = xb(a, b, c, void 0 !== d);
            else if (nb(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = wb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function xb(a, b, c, d) {
        var e = A(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = wb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function yb(a) {
        return a.S === mb ? a.toJSON() : vb(a)
    }

    function zb(a, b) {
        a & 128 && sb(b)
    };
    var Ab = function(a) {
            var b = a.h + a.G;
            return a.A || (a.A = a.l[b] = {})
        },
        D = function(a, b, c) {
            return -1 === b ? null : b >= a.h ? a.A ? a.A[b] : void 0 : c && a.A && (c = a.A[b], null != c) ? c : a.l[b + a.G]
        },
        G = function(a, b, c, d) {
            rb(a);
            return F(a, b, c, d)
        };

    function F(a, b, c, d) {
        a.i && (a.i = void 0);
        if (b >= a.h || d) return Ab(a)[b] = c, a;
        a.l[b + a.G] = c;
        (c = a.A) && b in c && delete c[b];
        return a
    }

    function Db(a, b, c, d, e) {
        var f = D(a, b, d);
        Array.isArray(f) || (f = pb);
        var g = A(f);
        g & 1 || ib(f);
        if (e) g & 2 || z(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && hb(f, 16) : (f = ib(Array.prototype.slice.call(f)), F(a, b, f, d))
        }
        return f
    }

    function Eb(a, b) {
        var c = C(a.l),
            d = Db(a, b, 1, !1, c),
            e = A(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = ib(d.slice()), F(a, b, d, !1));
            for (var f = 0, g = 0; f < d.length; f++) {
                var h = d[f];
                null != h && (d[g++] = h)
            }
            g < f && (d.length = g);
            z(d, 5);
            c && (z(d, 2), Object.freeze(d))
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), z(d, 5), Fb(a, b, d, !1));
        return d
    }
    var H = function(a, b) {
        a = D(a, b);
        return null == a ? 0 : a
    };

    function Gb(a, b, c) {
        if (null == c) G(a, b, pb);
        else {
            var d = A(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (var e = 0; e < c.length; e++) c[e] = c[e];
                B(c, d | 5)
            }
            G(a, b, c)
        }
    }
    var Fb = function(a, b, c, d) {
        if (null == c) c = pb;
        else {
            var e = A(c);
            1 !== (e & 1) && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), B(c, e | 1))
        }
        return G(a, b, c, d)
    };

    function J(a, b, c, d) {
        rb(a);
        c !== d ? F(a, b, c) : F(a, b, void 0, !1);
        return a
    }
    var Ib = function(a, b, c, d) {
            rb(a);
            (c = Hb(a, c)) && c !== b && null != d && F(a, c, void 0, !1);
            return F(a, b, d)
        },
        K = function(a, b, c) {
            return Hb(a, b) === c ? c : -1
        },
        Hb = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != D(a, e) && (0 !== c && F(a, c, void 0, !1), c = e)
            }
            return c
        },
        Jb = function(a, b, c, d) {
            var e = D(a, c, d);
            var f = !1;
            var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.S !== mb ? f ? new b(e) : void 0 : e;
            g !== e && null != g && (F(a, c, g, d), z(g.l, A(a.l) & 18));
            return g
        },
        L = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = Jb(a, b, c, d);
            if (null == b) return b;
            if (!C(a.l)) {
                var e = Kb(b);
                e !== b && (b = e, F(a, c, b, d))
            }
            return b
        },
        M = function(a, b, c) {
            var d = C(a.l);
            a.u || (a.u = {});
            var e = a.u[c];
            var f = Db(a, c, 3, void 0, d);
            if (e) d || (Object.isFrozen(e) ? d || (e = Array.prototype.slice.call(e), a.u[c] = e) : d && Object.freeze(e));
            else {
                e = [];
                var g = !!(A(a.l) & 16),
                    h = C(f);
                !d && h && (f = ib(Array.prototype.slice.call(f)), F(a, c, f));
                for (var k = h, l = 0; l < f.length; l++) {
                    var n = f[l];
                    var u = b;
                    var y = g,
                        I = !1;
                    I = void 0 === I ? !1 : I;
                    y = void 0 === y ? !1 : y;
                    u = Array.isArray(n) ? new u(y ? jb(n) : n) : I ? new u : void 0;
                    void 0 !== u && (k = k || C(n), e.push(u), h && z(u.l, 2))
                }
                a.u[c] = e;
                Object.isFrozen(f) || (b = A(f) | 33, B(f, k ? b & -9 : b | 8));
                (d || d && h) && z(e, 2);
                (d || d) && Object.freeze(e)
            }
            a = Db(a, c, 3, void 0, d);
            if (!(d || A(a) & 8)) {
                for (d = 0; d < e.length; d++) c = e[d], f = Kb(c), c !== f && (e[d] = f, a[d] = e[d].l);
                z(a, 8)
            }
            return e
        },
        Lb = function(a, b, c) {
            rb(a);
            null == c && (c = void 0);
            return F(a, b, c)
        },
        Mb = function(a, b, c, d) {
            rb(a);
            null == d && (d = void 0);
            return Ib(a, b, c, d)
        },
        Nb = function(a, b, c, d) {
            rb(a);
            if (null != c) {
                var e = ib([]);
                for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].l, f = f || C(e[g]);
                a.u || (a.u = {});
                a.u[b] = c;
                c = e;
                f ? hb(c, 8) : z(c, 8)
            } else a.u && (a.u[b] = void 0), e = pb;
            return F(a, b, e, d)
        };

    function N(a, b) {
        return null == a ? b : a
    }
    var Ob = function(a, b) {
            return N(D(a, b), "")
        },
        Pb = function(a, b) {
            a = D(a, b);
            return N(null == a ? a : !!a, !1)
        },
        Qb = function(a, b) {
            a = D(a, b);
            return N(null == a ? a : +a, 0)
        };

    function Rb(a) {
        var b = A(a);
        if (b & 2) return a;
        a = Sa(a, Sb);
        lb(b, a);
        Object.freeze(a);
        return a
    }

    function Tb(a, b, c) {
        c = void 0 === c ? lb : c;
        if (null != a) {
            if (db && a instanceof Uint8Array) return a.length ? new gb(new Uint8Array(a)) : fb || (fb = new gb(null));
            if (Array.isArray(a)) {
                var d = A(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return B(a, d | 2), a;
                a = xb(a, Tb, c, !0);
                b = A(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.S === mb ? Sb(a) : a
        }
    }

    function Sb(a) {
        if (C(a.l)) return a;
        a = Ub(a, !0);
        z(a.l, 2);
        return a
    }

    function Ub(a, b) {
        var c = a.l,
            d = jb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        a.A && (d.length = c.length, p(d, "fill").call(d, void 0, d.length, c.length), d[d.length - 1] = {});
        0 !== (A(c) & 128) && sb(d);
        b = b || C(a.l) ? lb : kb;
        d = ub(a.constructor, d);
        a.ka && (d.ka = a.ka.slice());
        e = !!(A(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (f === c.length - 1 && nb(g))
                for (var h in g) {
                    var k = +h;
                    if (p(Number, "isNaN").call(Number, k)) Ab(d)[k] = g[k];
                    else {
                        var l = g[h],
                            n = a.u && a.u[k];
                        n ? Nb(d, k, Rb(n), !0) : G(d, k, Tb(l, e, b), !0)
                    }
                } else k = f - a.G, (l = a.u && a.u[k]) ? Nb(d, k, Rb(l), !1) : G(d, k, Tb(g, e, b), !1)
        }
        return d
    }

    function Kb(a) {
        if (!C(a.l)) return a;
        var b = Ub(a, !1);
        b.i = a;
        return b
    };
    var O = function(a, b, c) {
        null == a && (a = tb);
        tb = void 0;
        var d = this.constructor.h || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            a = f ? [f] : [];
            var h = !0;
            B(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = z(a, 0),
                l = k;
            if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
            if (e)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var n = a[a.length - 1];
                        if (nb(n) && "g" in n) {
                            d = 0;
                            l |= 128;
                            delete n.g;
                            var u = !0,
                                y;
                            for (y in n) {
                                u = !1;
                                break
                            }
                            u && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && B(a, l)
        }
        this.G = (f ? 0 : -1) - d;
        this.u = void 0;
        this.l = a;
        a: {
            f = this.l.length;d = f - 1;
            if (f && (f = this.l[d], nb(f))) {
                this.A = f;
                this.h = d - this.G;
                break a
            }
            void 0 !== b && -1 < b ? (this.h = Math.max(b, d + 1 - this.G), this.A = void 0) : this.h = Number.MAX_VALUE
        }
        if (!e && this.A && "g" in this.A) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !g && !0;
            e = this.h;
            var I;
            for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.G, (d = a[g]) ? Vb(d, b) : a[g] = pb) : (I || (I = Ab(this)), (d = I[g]) ? Vb(d, b) : I[g] = pb)
        }
    };
    O.prototype.toJSON = function() {
        var a = this.l;
        return ob ? a : xb(a, yb, zb)
    };

    function Vb(a, b) {
        if (Array.isArray(a)) {
            var c = A(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && B(a, c | d)
        }
    }
    O.prototype.S = mb;

    function Wb(a, b) {
        return vb(b)
    };
    var Xb = void 0;

    function Yb() {
        var a = !P(Zb).h,
            b = Xb;
        Xb = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    var bc = function(a, b) {
        this.i = a === $b && b || "";
        this.j = ac
    };
    bc.prototype.I = !0;
    bc.prototype.h = function() {
        return this.i
    };
    var cc = function(a) {
            return a instanceof bc && a.constructor === bc && a.j === ac ? a.i : "type_error:Const"
        },
        Q = function(a) {
            return new bc($b, a)
        },
        ac = {},
        $b = {};
    var dc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var ec = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function fc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var gc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var R = function(a, b) {
        this.i = b === hc ? a : ""
    };
    R.prototype.toString = function() {
        return this.i + ""
    };
    R.prototype.I = !0;
    R.prototype.h = function() {
        return this.i.toString()
    };
    var lc = function(a, b) {
            a = ic.exec(jc(a).toString());
            var c = a[3] || "";
            return new R(a[1] + kc("?", a[2] || "", b) + kc("#", c), hc)
        },
        jc = function(a) {
            return a instanceof R && a.constructor === R ? a.i : "type_error:TrustedResourceUrl"
        },
        ic = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        mc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += cc(a[c]);
            return new R(b, hc)
        },
        hc = {},
        kc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var S = function(a, b) {
        this.i = b === nc ? a : ""
    };
    S.prototype.toString = function() {
        return this.i.toString()
    };
    S.prototype.I = !0;
    S.prototype.h = function() {
        return this.i.toString()
    };
    var oc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        pc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        nc = {},
        qc = new S("about:invalid#zClosurez", nc);
    var rc = {},
        sc = function(a, b) {
            this.i = b === rc ? a : "";
            this.I = !0
        };
    sc.prototype.h = function() {
        return this.i.toString()
    };
    sc.prototype.toString = function() {
        return this.i.toString()
    };
    var tc = function(a) {
            return a instanceof sc && a.constructor === sc ? a.i : "type_error:SafeHtml"
        },
        uc = function(a) {
            return a instanceof sc ? a : new sc(La("object" == typeof a && a.I ? a.h() : String(a)), rc)
        },
        yc = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g]
                    }
            var h;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!vc.test(k)) throw Error("");
                        c = a[k];
                        if (null != c) {
                            g = k;
                            if (c instanceof bc) c = cc(c);
                            else {
                                if ("style" == g.toLowerCase()) throw Error("");
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in wc)
                                    if (c instanceof R) c = jc(c).toString();
                                    else if (c instanceof S) c = c instanceof S && c.constructor === S ? c.i : "type_error:SafeUrl";
                                else if ("string" === typeof c) c instanceof S || (c = "object" == typeof c && c.I ? c.h() : String(c), pc.test(c) ? c = new S(c, nc) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(oc) ? new S(c, nc) : null)), c = (c || qc).h();
                                else throw Error("");
                            }
                            c.I && (c = c.h());
                            g = g + '="' + La(String(c)) + '"';
                            b += " " + g
                        }
                    }
            var k = "<script" + b;
            null == h ? h = [] : Array.isArray(h) || (h = [h]);
            !0 === gc.script ? k += ">" : (h = xc(h), k += ">" + tc(h).toString() + "\x3c/script>");
            return new sc(k, rc)
        },
        Ac = function(a) {
            var b = uc(zc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = uc(e), c.push(tc(e).toString()))
                };
            a.forEach(d);
            return new sc(c.join(tc(b).toString()), rc)
        },
        xc = function(a) {
            return Ac(Array.prototype.slice.call(arguments))
        },
        vc = /^[a-zA-Z0-9-]+$/,
        wc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        zc = new sc(w.trustedTypes && w.trustedTypes.emptyHTML || "", rc);
    var Cc = function() {
            a: {
                var a = w.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Bc.test(a)) break a;a = ""
            }
            return a
        },
        Bc = /^[\w+/_-]+[=]{0,2}$/;
    var Dc = function() {
        return Pa("iPad") || Pa("Android") && !Pa("Mobile") || Pa("Silk")
    };
    var Ec = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Fc = function(a) {
            return a ? decodeURI(a) : a
        },
        Gc = /#|$/,
        Hc = function(a, b) {
            var c = a.search(Gc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Ic(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Jc(a, b) {
        a.write(tc(b))
    };
    var Kc = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Xa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Lc = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? w : c;
            for (var d = 0; c && 40 > d++ && (!b && !Kc(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        Mc = function(a) {
            var b = a;
            Lc(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Qc = function(a, b) {
            if (!Nc() && !Oc()) {
                var c = Math.random();
                if (c < b) return c = Pc(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Pc = function() {
            if (!m.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                m.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Rc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Sc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Oc = dc(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Tc, void 0) || 1E-4 > Math.random()
        }),
        Nc = dc(function() {
            return Tc("MSIE")
        }),
        Tc = function(a) {
            return -1 != Oa().indexOf(a)
        },
        Uc = /^(-?[0-9.]{1,30})$/;

    function Vc(a) {
        if (!Uc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    var Wc = dc(function() {
            return !Dc() && (Pa("iPod") || Pa("iPhone") || Pa("Android") || Pa("IEMobile")) ? 2 : Dc() ? 1 : 0
        }),
        Xc = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Yc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Zc(a) {
        var b = ua.apply(1, arguments);
        if (0 === b.length) return new R(a[0], hc);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return new R(c.join(""), hc)
    };
    var $c = {
        Ia: 0,
        Ha: 1,
        Ea: 2,
        za: 3,
        Fa: 4,
        Aa: 5,
        Ga: 6,
        Ca: 7,
        Da: 8,
        ya: 9,
        Ba: 10
    };
    var ad = {
        Ka: 0,
        La: 1,
        Ja: 2
    };
    var bd = "a".charCodeAt(),
        cd = fc($c),
        dd = fc(ad);
    var ed = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.i = a;
            this.h = 0
        },
        hd = function(a) {
            var b = T(a, 16);
            return !0 === !!T(a, 1) ? (a = fd(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : gd(a, b)
        },
        fd = function(a) {
            for (var b = T(a, 12), c = []; b--;) {
                var d = !0 === !!T(a, 1),
                    e = T(a, 16);
                if (d)
                    for (d = T(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        gd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (T(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        T = function(a, b) {
            if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.i.substring(a.h, a.h + b);
            a.h += b;
            return parseInt(c, 2)
        };
    var jd = function(a, b) {
            try {
                var c = cb(a.split(".")[0]).map(function(e) {
                        return (aa = e.toString(2), p(aa, "padStart")).call(aa, 8, "0")
                    }).join(""),
                    d = new ed(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.h += 78;
                c.cmpId = T(d, 12);
                c.cmpVersion = T(d, 12);
                d.h += 30;
                c.tcfPolicyVersion = T(d, 6);
                c.isServiceSpecific = !!T(d, 1);
                c.useNonStandardStacks = !!T(d, 1);
                c.specialFeatureOptins = id(gd(d, 12, dd), dd);
                c.purpose = {
                    consents: id(gd(d, 24, cd), cd),
                    legitimateInterests: id(gd(d, 24, cd), cd)
                };
                c.purposeOneTreatment = !!T(d, 1);
                c.publisherCC = String.fromCharCode(bd + T(d, 6)) + String.fromCharCode(bd + T(d, 6));
                c.vendor = {
                    consents: id(hd(d), b),
                    legitimateInterests: id(hd(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        id = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = r(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function kd(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.na] = b.message.toJSON(), c)]
        })])
    };
    var ld = function(a, b) {
        if (m.globalThis.fetch) m.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var nd = function(a) {
        O.call(this, a, -1, md)
    };
    v(nd, O);
    var od = function(a, b) {
            return Lb(a, 1, b)
        },
        pd = function(a, b) {
            return Nb(a, 2, b)
        },
        qd = function(a, b) {
            return Fb(a, 4, b)
        },
        rd = function(a, b) {
            return Nb(a, 5, b)
        },
        sd = function(a, b) {
            return J(a, 6, b, 0)
        },
        td = function(a) {
            O.call(this, a)
        };
    v(td, O);
    td.prototype.H = function() {
        return H(this, 1)
    };
    var ud = function(a, b) {
            return J(a, 1, b, 0)
        },
        vd = function(a, b) {
            return J(a, 2, b, 0)
        },
        wd = function(a) {
            O.call(this, a)
        };
    v(wd, O);
    var md = [2, 4, 5],
        xd = [1, 2];
    var zd = function(a) {
        O.call(this, a, -1, yd)
    };
    v(zd, O);
    var Bd = function(a) {
        O.call(this, a, -1, Ad)
    };
    v(Bd, O);
    var yd = [2, 3],
        Ad = [5],
        Cd = [1, 2, 3, 4];
    var Dd = function(a) {
        O.call(this, a)
    };
    v(Dd, O);
    Dd.prototype.getTagSessionCorrelator = function() {
        return N(D(this, 2), 0)
    };
    var Fd = function(a) {
            var b = new Dd;
            return Mb(b, 4, Ed, a)
        },
        Ed = [4, 5, 7];
    var Hd = function(a) {
        O.call(this, a, -1, Gd)
    };
    v(Hd, O);
    var Gd = [3];
    var Jd = function(a) {
        O.call(this, a, -1, Id)
    };
    v(Jd, O);
    var Id = [4];
    var Ld = function(a) {
        O.call(this, a, -1, Kd)
    };
    v(Ld, O);
    Ld.prototype.getTagSessionCorrelator = function() {
        return N(D(this, 1), 0)
    };
    var Kd = [2];
    var Md = function(a) {
        O.call(this, a)
    };
    v(Md, O);
    var Nd = [4];

    function Od(a) {
        a.ma.apply(a, t(ua.apply(1, arguments).map(function(b) {
            return {
                na: 2,
                message: b
            }
        })))
    }

    function Pd(a) {
        a.ma.apply(a, t(ua.apply(1, arguments).map(function(b) {
            return {
                na: 4,
                message: b
            }
        })))
    };
    var Qd = function() {
        this.j = this.j;
        this.m = this.m
    };
    Qd.prototype.j = !1;
    Qd.prototype.J = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };
    var Rd = function(a, b, c, d, e) {
            this.C = a;
            this.o = b;
            this.F = c;
            this.j = d;
            this.m = e;
            this.h = [];
            this.i = null
        },
        Sd = function(a) {
            null !== a.i && (clearTimeout(a.i), a.i = null);
            if (a.h.length) {
                var b = kd(a.h);
                a.o(a.C + "?e=1", b);
                a.h = []
            }
        };
    Rd.prototype.ma = function() {
        var a = ua.apply(0, arguments),
            b = this;
        this.m && 65536 <= kd(this.h.concat(a)).length && Sd(this);
        this.h.push.apply(this.h, t(a));
        this.h.length >= this.j && Sd(this);
        this.h.length && null === this.i && (this.i = setTimeout(function() {
            Sd(b)
        }, this.F))
    };
    var Td = function(a, b, c) {
        Rd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", ld, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!m.globalThis.fetch)
    };
    v(Td, Rd);
    var Ud = function(a) {
            this.h = a;
            this.defaultValue = !1
        },
        Vd = function(a) {
            this.h = a;
            this.defaultValue = 0
        };
    var Wd = new Ud(427549339),
        Xd = new Vd(428094087),
        Yd = new Vd(24),
        Zd = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.h = a;
            this.defaultValue = b
        }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]),
        $d = new Ud(203);
    var ae = function() {
        this.h = {}
    };
    var be = function(a) {
        O.call(this, a)
    };
    v(be, O);
    var ce = function(a) {
        O.call(this, a)
    };
    v(ce, O);
    var de = function(a) {
        O.call(this, a)
    };
    v(de, O);
    var ee = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 25, 26];
    var fe = function() {};
    var he = function(a) {
        O.call(this, a, -1, ge)
    };
    v(he, O);
    var ie = function(a) {
        O.call(this, a)
    };
    v(ie, O);
    var je = function(a) {
        O.call(this, a)
    };
    v(je, O);
    var ge = [7];
    var ke = function(a) {
        this.h = a || {
            cookie: ""
        }
    };
    ke.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Pa;
            d = c.Qa || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.ua
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    ke.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Da(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    ke.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    ke.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Da(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            ua: 0,
            path: void 0,
            domain: void 0
        })
    };
    var le = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }("45369554");
    var me = function() {
            this.h = {};
            var a = w.__fcexpdef || "";
            try {
                var b = JSON.parse(a)[0];
                a = "";
                for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                this.h = JSON.parse(a)
            } catch (d) {}
        },
        ne;
    v(me, ae);

    function oe(a) {
        return (a = pe(a)) ? L(a, ie, 4) : null
    }

    function pe(a) {
        if (a = (new ke(a)).get("FCCDCF", ""))
            if (p(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (e) {
                qe(1), b = null
            } else b = a;
            else b = null;
        try {
            if (b)
                if (null == b || "" == b) var c = new he;
                else {
                    var d = JSON.parse(b);
                    if (!Array.isArray(d)) throw Error(void 0);
                    c = ub(he, jb(d))
                }
            else c = null;
            return c
        } catch (e) {
            return qe(2), null
        }
    }

    function qe(a) {
        new fe;
        var b = new ce;
        a = G(b, 7, a);
        b = new be;
        a = Lb(b, 1, a);
        b = new de;
        Mb(b, 22, ee, a);
        ne || (ne = new me);
        a = ne.h[le.key];
        if ("proto" === le.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };
    fc($c).map(function(a) {
        return Number(a)
    });
    fc(ad).map(function(a) {
        return Number(a)
    });
    var re = function(a) {
            this.h = a;
            this.i = null
        },
        te = function(a) {
            a.__tcfapiPostMessageReady || se(new re(a))
        },
        se = function(a) {
            a.i = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.h.addEventListener("message", a.i);
            a.h.__tcfapiPostMessageReady = !0
        };
    var ue = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Yc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var ve = function(a) {
            this.h = a;
            this.i = a.document;
            this.o = (a = (a = pe(this.i)) ? L(a, je, 5) || null : null) ? D(a, 2) : null;
            this.j = (a = oe(this.i)) && null != D(a, 1) ? D(a, 1) : null;
            this.m = (a = oe(this.i)) && null != D(a, 2) ? D(a, 2) : null
        },
        ye = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new ve(a), we(a), xe(a))
        },
        we = function(a) {
            !a.o || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", ue(a.h, "__uspapiLocator"), Ca("__uspapi", function() {
                return a.F.apply(a, t(ua.apply(0, arguments)))
            }))
        };
    ve.prototype.F = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var xe = function(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", ue(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Ca("__tcfapi", function() {
            return a.C.apply(a, t(ua.apply(0, arguments)))
        }), te(a.h))
    };
    ve.prototype.C = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(ze(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(ze(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var ze = function(a, b, c) {
        if (!a.j) return null;
        b = jd(a.j, b);
        b.addtlConsent = null != a.m ? a.m : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var Ae = function(a) {
        return "string" === typeof a
    };
    var Be = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Ce = null,
        De = function() {
            if (null === Ce) {
                Ce = "";
                try {
                    var a = "";
                    try {
                        a = w.top.location.hash
                    } catch (c) {
                        a = w.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Ce = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Ce
        };
    var Fe = function(a) {
        O.call(this, a, -1, Ee)
    };
    v(Fe, O);
    var Ee = [2, 8],
        Ge = [3, 4, 5],
        He = [6, 7];
    var Ie;
    Ie = {
        Ma: 0,
        oa: 3,
        pa: 4,
        qa: 5
    };
    var Je = Ie.oa,
        U = Ie.pa,
        Ke = Ie.qa,
        Le = function(a) {
            return null != a ? !a : a
        },
        Me = function(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        Oe = function(a, b) {
            var c = M(a, Fe, 2);
            if (!c.length) return Ne(a, b);
            a = H(a, 1);
            if (1 === a) return Le(Oe(c[0], b));
            c = Sa(c, function(d) {
                return function() {
                    return Oe(d, b)
                }
            });
            switch (a) {
                case 2:
                    return Me(c, !1);
                case 3:
                    return Me(c, !0)
            }
        },
        Ne = function(a, b) {
            var c = Hb(a, Ge);
            a: {
                switch (c) {
                    case Je:
                        var d = H(a, K(a, Ge, 3));
                        break a;
                    case U:
                        d = H(a, K(a, Ge, 4));
                        break a;
                    case Ke:
                        d = H(a, K(a, Ge, 5));
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, t(Eb(a, 8)))
                } catch (f) {
                    return
                }
                b = H(a, 1);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Ob(a, K(a, He, 7));
                else a: {
                    switch (c) {
                        case U:
                            a = Qb(a, K(a, He, 6));
                            break a;
                        case Ke:
                            a = Ob(a, K(a, He, 7));
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === Na(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return Ae(a) && Ae(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === Na(String(e), a);
                        case 11:
                            return null != e && 1 === Na(String(e), a)
                    }
                }
            }
        },
        Pe = function(a, b) {
            return !a || !(!b || !Oe(a, b))
        };
    var Re = function(a) {
        O.call(this, a, -1, Qe)
    };
    v(Re, O);
    var Qe = [4];
    var Se = function(a) {
        O.call(this, a)
    };
    v(Se, O);
    var Ue = function(a) {
        O.call(this, a, -1, Te)
    };
    v(Ue, O);
    var Te = [5],
        Ve = [1, 2, 3, 6, 7];
    var We = function(a, b, c) {
            var d = void 0 === d ? new Td(b) : d;
            this.i = a;
            this.o = c;
            this.j = d;
            this.h = [];
            this.m = 0 < this.i && Pc() < 1 / this.i
        },
        Ye = function(a, b, c, d, e, f) {
            var g = vd(ud(new td, b), c);
            b = sd(pd(od(rd(qd(new nd, d), e), g), a.h.slice()), f);
            b = Fd(b);
            a.m && Pd(a.j, Xe(a, b));
            if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                    return h.H() === g.H() && H(h, 2) === c
                })) a.h.push(g), 100 < a.h.length && a.h.shift()
        },
        Ze = function(a, b, c, d) {
            if (a.o) {
                var e = new zd;
                b = Nb(e, 2, b);
                c = Nb(b, 3, c);
                d && J(c, 1, d, 0);
                d = new Dd;
                d = Mb(d, 7, Ed, c);
                a.m && Pd(a.j, Xe(a, d))
            }
        },
        Xe = function(a, b) {
            b = J(b, 1, Date.now(), 0);
            var c = Xc(window);
            b = J(b, 2, c, 0);
            return J(b, 6, a.i, 0)
        };
    var P = function(a) {
        var b = "P";
        if (a.P && a.hasOwnProperty(b)) return a.P;
        b = new a;
        return a.P = b
    };
    var $e = function() {
        var a = {};
        this.h = (a[Je] = {}, a[U] = {}, a[Ke] = {}, a)
    };
    var af = /^true$/.test("false"),
        bf = function(a, b) {
            switch (b) {
                case 1:
                    return H(a, K(a, Ve, 1));
                case 2:
                    return H(a, K(a, Ve, 2));
                case 3:
                    return H(a, K(a, Ve, 3));
                case 6:
                    return H(a, K(a, Ve, 6));
                default:
                    return null
            }
        },
        cf = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return Pb(a, 1);
                case 7:
                    return Ob(a, 3);
                case 2:
                    return Qb(a, 2);
                case 3:
                    return Ob(a, 3);
                case 6:
                    return Eb(a, 4);
                default:
                    return null
            }
        },
        df = dc(function() {
            if (!af) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a)
            } catch (b) {}
            return {}
        }),
        hf = function(a, b, c, d) {
            var e = d = void 0 === d ? 0 : d,
                f, g;
            P(ef).j[e] = null != (g = null == (f = P(ef).j[e]) ? void 0 : f.add(b)) ? g : (new m.Set).add(b);
            e = df();
            if (null != e[b]) return e[b];
            b = ff(d)[b];
            if (!b) return c;
            b = new Ue(b);
            b = gf(b);
            a = cf(b, a);
            return null != a ? a : c
        },
        gf = function(a) {
            var b = P($e).h;
            if (b) {
                var c = Va(M(a, Se, 5), function(f) {
                    return Pe(L(f, Fe, 1), b)
                });
                if (c) {
                    var d;
                    return null != (d = L(c, Re, 2)) ? d : null
                }
            }
            var e;
            return null != (e = L(a, Re, 4)) ? e : null
        },
        ef = function() {
            this.i = {};
            this.m = [];
            this.j = {};
            this.h = new m.Map
        },
        jf = function(a, b, c) {
            return !!hf(1, a, void 0 === b ? !1 : b, c)
        },
        kf = function(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(hf(2, a, b, c));
            return isNaN(a) ? b : a
        },
        lf = function(a, b, c) {
            return hf(3, a, void 0 === b ? "" : b, c)
        },
        mf = function(a, b, c) {
            b = void 0 === b ? [] : b;
            return hf(6, a, b, c)
        },
        ff = function(a) {
            return P(ef).i[a] || (P(ef).i[a] = {})
        },
        nf = function(a, b) {
            var c = ff(b);
            Rc(a, function(d, e) {
                return c[e] = d
            })
        },
        of = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                g = [];
            Qa(b, function(h) {
                var k = ff(h);
                Qa(a, function(l) {
                    var n = Hb(l, Ve),
                        u = bf(l, n);
                    if (u) {
                        var y, I, Bb;
                        var Cb = null != (Bb = null == (y = P(ef).h.get(h)) ? void 0 : null == (I = y.get(u)) ? void 0 : I.slice(0)) ? Bb : [];
                        a: {
                            y = new Bd;
                            switch (n) {
                                case 1:
                                    Ib(y, 1, Cd, u);
                                    break;
                                case 2:
                                    Ib(y, 2, Cd, u);
                                    break;
                                case 3:
                                    Ib(y, 3, Cd, u);
                                    break;
                                case 6:
                                    Ib(y, 4, Cd, u);
                                    break;
                                default:
                                    n = void 0;
                                    break a
                            }
                            Fb(y, 5, Cb);n = y
                        }
                        if (Cb = n) {
                            var Ua;
                            Cb = !(null == (Ua = P(ef).j[h]) || !Ua.has(u))
                        }
                        Cb && f.push(n);
                        if (Ua = n) {
                            var ma;
                            Ua = !(null == (ma = P(ef).h.get(h)) || !ma.has(u))
                        }
                        Ua && g.push(n);
                        e || (ma = P(ef), ma.h.has(h) || ma.h.set(h, new m.Map), ma.h.get(h).has(u) || ma.h.get(h).set(u, []), d && ma.h.get(h).get(u).push(d));
                        k[u] = l.toJSON()
                    }
                })
            });
            (f.length || g.length) && Ze(c, f, g, null != d ? d : void 0)
        },
        pf = function(a, b) {
            var c = ff(b);
            Qa(a, function(d) {
                var e = new Ue(d),
                    f = Hb(e, Ve);
                (e = bf(e, f)) && (c[e] || (c[e] = d))
            })
        },
        qf = function() {
            return Sa(p(Object, "keys").call(Object, P(ef).i), function(a) {
                return Number(a)
            })
        },
        rf = function(a) {
            Wa(P(ef).m, a) || nf(ff(4), a)
        };
    var V = function(a) {
            this.methodName = a
        },
        sf = new V(1),
        tf = new V(16),
        uf = new V(15),
        vf = new V(2),
        wf = new V(3),
        xf = new V(4),
        yf = new V(5),
        zf = new V(6),
        Af = new V(7),
        Bf = new V(8),
        Cf = new V(9),
        Df = new V(10),
        Ef = new V(11),
        Ff = new V(12),
        Gf = new V(13),
        Hf = new V(14),
        W = function(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        X = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        },
        If = function(a) {
            W(yf, jf, a);
            W(zf, kf, a);
            W(Af, lf, a);
            W(Bf, mf, a);
            W(Gf, pf, a);
            W(uf, rf, a)
        },
        Jf = function(a) {
            W(xf, function(b) {
                P($e).h = b
            }, a);
            W(Cf, function(b, c) {
                var d = P($e);
                d.h[Je][b] || (d.h[Je][b] = c)
            }, a);
            W(Df, function(b, c) {
                var d = P($e);
                d.h[U][b] || (d.h[U][b] = c)
            }, a);
            W(Ef, function(b, c) {
                var d = P($e);
                d.h[Ke][b] || (d.h[Ke][b] = c)
            }, a);
            W(Hf, function(b) {
                for (var c = P($e), d = r([Je, U, Ke]), e = d.next(); !e.done; e = d.next()) e = e.value, p(Object, "assign").call(Object, c.h[e], b[e])
            }, a)
        },
        Kf = function(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };
    var Lf = function() {
            this.i = function() {};
            this.h = function() {
                return []
            }
        },
        Mf = function(a, b, c) {
            a.i = function(d) {
                X(vf, b, function() {
                    return []
                })(d, c)
            };
            a.h = function() {
                return X(wf, b, function() {
                    return []
                })(c)
            }
        };

    function Nf(a, b) {
        b = void 0 === b ? window.document : b;
        if (a.length && b.head) {
            a = r(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Yc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    var Of = function(a, b) {
            try {
                var c = a.split(".");
                a = w;
                for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f
            } catch (g) {}
        },
        Pf = function() {
            var a = {};
            this[Je] = (a[8] = function(b) {
                try {
                    return null != ya(b)
                } catch (c) {}
            }, a[9] = function(b) {
                try {
                    var c = ya(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }, a[10] = function() {
                return window == window.top
            }, a[6] = function(b) {
                return Wa(P(Lf).h(), parseInt(b, 10))
            }, a[27] = function(b) {
                b = Of(b, "boolean");
                return void 0 !== b ? b : void 0
            }, a[60] = function(b) {
                try {
                    return !!w.document.querySelector(b)
                } catch (c) {}
            }, a[69] = function(b) {
                var c = w.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(aa = d.features(), p(aa, "includes")).call(aa, b))
            }, a[70] = function(b) {
                var c = w.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), p(aa, "includes")).call(aa, b))
            }, a);
            a = {};
            this[U] = (a[3] = function() {
                return Wc()
            }, a[6] = function(b) {
                b = Of(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = Fc(w.location.href.match(Ec)[3] || null);
                b = c ? Sc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
            a = {};
            this[Ke] = (a[2] = function() {
                return window.location.href
            }, a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }, a[4] = function(b) {
                b = Of(b, "string");
                return void 0 !== b ? b : void 0
            }, a[10] = function() {
                try {
                    var b = w.document;
                    return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
                } catch (c) {
                    return ""
                }
            }, a[11] = function() {
                try {
                    var b, c, d, e, f;
                    return null != (f = null == (d = null == (b = ya("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = p(d, "find").call(d, function(g) {
                        return "Google Chrome" === g.brand
                    })) ? void 0 : e.version) ? f : ""
                } catch (g) {
                    return ""
                }
            }, a)
        };
    var Qf = function() {
        var a = void 0 === a ? w : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Sf = function(a) {
        O.call(this, a, -1, Rf)
    };
    v(Sf, O);
    Sf.prototype.getId = function() {
        return N(D(this, 1), 0)
    };
    Sf.prototype.H = function() {
        return H(this, 7)
    };
    var Rf = [2];
    var Uf = function(a) {
        O.call(this, a, -1, Tf)
    };
    v(Uf, O);
    Uf.prototype.H = function() {
        return H(this, 5)
    };
    var Tf = [2];
    var Wf = function(a) {
        O.call(this, a, -1, Vf)
    };
    v(Wf, O);
    var Yf = function(a) {
        O.call(this, a, -1, Xf)
    };
    v(Yf, O);
    Yf.prototype.H = function() {
        return H(this, 1)
    };
    var Zf = function(a) {
        O.call(this, a)
    };
    v(Zf, O);
    var Vf = [1, 4, 2, 3],
        Xf = [2];
    var $f = [12, 13, 20],
        ag = function() {},
        bg = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ha ? !1 : e.ha,
                g = void 0 === e.va ? {} : e.va;
            e = void 0 === e.la ? [] : e.la;
            a.m = b;
            a.C = {};
            a.F = f;
            a.o = g;
            b = {};
            a.i = (b[c] = [], b[4] = [], b);
            a.j = {};
            (c = De()) && Qa(c.split(",") || [], function(h) {
                (h = parseInt(h, 10)) && (a.j[h] = !0)
            });
            Qa(e, function(h) {
                a.j[h] = !0
            });
            a.h = d;
            return a
        },
        fg = function(a, b, c) {
            var d = [],
                e = cg(a.m, b),
                f;
            if (f = 9 !== b) a.C[b] ? f = !0 : (a.C[b] = !0, f = !1);
            if (f) return Ye(a.h, b, c, d, [], 4), d;
            if (!e.length) return Ye(a.h, b, c, d, [], 3), d;
            var g = Wa($f, b),
                h = [];
            Qa(e, function(k) {
                var l = new wd;
                if (k = dg(a, k, c, l)) 0 !== Hb(l, xd) && h.push(l), l = k.getId(), d.push(l), eg(a, l, g ? 4 : c), (k = M(k, Ue, 2)) && (g ? of (k, qf(), a.h, l) : of (k, [c], a.h, l))
            });
            Ye(a.h, b, c, d, h, 1);
            return d
        },
        eg = function(a, b, c) {
            a.i[c] || (a.i[c] = []);
            a = a.i[c];
            Wa(a, b) || a.push(b)
        },
        gg = function(a, b) {
            a.m.push.apply(a.m, t(Ra(Sa(b, function(c) {
                return new Yf(c)
            }), function(c) {
                return !Wa($f, c.H())
            })))
        },
        dg = function(a, b, c, d) {
            var e = P($e).h;
            if (!Pe(L(b, Fe, 3), e)) return null;
            var f = M(b, Sf, 2),
                g = H(b, 6);
            if (g) {
                Ib(d, 1, xd, g);
                f = e[U];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                c = void 0;
                if (h) try {
                    c = h(g), J(d, 3, c, 0)
                } catch (k) {}
                return (b = hg(b, c)) ? ig(a, [b], 1) : null
            }
            if (g = H(b, 10)) {
                Ib(d, 2, xd, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[U][9];
                        break;
                    case 2:
                        h = e[U][10];
                        break;
                    default:
                        return null
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === H(b, 11)) return null;
                void 0 !== c && J(d, 3, c, 0);
                return (b = hg(b, c)) ? ig(a, [b], 1) : null
            }
            d = e ? Ra(f, function(k) {
                return Pe(L(k, Fe, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * N(D(b, 1), 0);
            return (b = H(b, 4)) ? jg(a, b, c, d) : ig(a, d, c / 1E3)
        },
        jg = function(a, b, c, d) {
            var e = null != a.o[b] ? a.o[b] : 1E3;
            if (0 >= e) return null;
            d = ig(a, d, c / e);
            a.o[b] = d ? 0 : e - c;
            return d
        },
        ig = function(a, b, c) {
            var d = a.j,
                e = Ta(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.F ? null : Qc(b, c)
        },
        kg = function(a, b) {
            W(sf, function(c) {
                a.j[c] = !0
            }, b);
            W(vf, function(c, d) {
                return fg(a, c, d)
            }, b);
            W(wf, function(c) {
                return (a.i[c] || []).concat(a.i[4])
            }, b);
            W(Ff, function(c) {
                return void gg(a, c)
            }, b);
            W(tf, function(c, d) {
                return void eg(a, c, d)
            }, b)
        },
        cg = function(a, b) {
            return (a = Ta(a, function(c) {
                return c.H() == b
            })) && M(a, Uf, 2) || []
        },
        hg = function(a, b) {
            var c = M(a, Sf, 2),
                d = c.length,
                e = N(D(a, 8), 0);
            a = d * N(D(a, 1), 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Pc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = P($e).h;
            return !c || e && !Pe(L(c, Fe, 3), e) ? null : c
        };
    var lg = function() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    };
    var mg = function() {
            this.h = function() {}
        },
        ng = function(a) {
            P(mg).h(a)
        };
    var og, pg, qg, rg, sg, tg, wg = function(a, b) {
            var c = {
                    ha: ug(211),
                    la: ug(226)
                },
                d = void 0,
                e = 2;
            d = void 0 === d ? Qf() : d;
            e = void 0 === e ? 0 : e;
            var f = void 0 === f ? new We(null != (rg = null == (og = L(a, Zf, 5)) ? void 0 : N(D(og, 2), 0)) ? rg : 0, null != (sg = null == (pg = L(a, Zf, 5)) ? void 0 : N(D(pg, 4), 0)) ? sg : 0, null != (tg = null == (qg = L(a, Zf, 5)) ? void 0 : Pb(qg, 3)) ? tg : !1) : f;
            d.hasOwnProperty("init-done") ? (X(Ff, d)(Sa(M(a, Yf, 2), function(g) {
                return g.toJSON()
            })), X(Gf, d)(Sa(M(a, Ue, 1), function(g) {
                return g.toJSON()
            }), e), b && X(Hf, d)(b), vg(e, d)) : (kg(bg(P(ag), M(a, Yf, 2), e, f, c), d), If(d), Jf(d), Kf(d), vg(e, d), of (M(a, Ue, 1), [e], f, void 0, !0), af = af || !(!c || !c.Na), ng(P(Pf)), b && ng(b))
        },
        vg = function(a, b) {
            var c = b = void 0 === b ? Qf() : b;
            Mf(P(Lf), c, a);
            xg(b, a);
            a = b;
            P(mg).h = X(Hf, a);
            P(lg).m()
        },
        xg = function(a, b) {
            var c = P(lg);
            c.h = function(d, e) {
                return X(yf, a, function() {
                    return !1
                })(d, e, b)
            };
            c.i = function(d, e) {
                return X(zf, a, function() {
                    return 0
                })(d, e, b)
            };
            c.o = function(d, e) {
                return X(Af, a, function() {
                    return ""
                })(d, e, b)
            };
            c.j = function(d, e) {
                return X(Bf, a, function() {
                    return []
                })(d, e, b)
            };
            c.m = function() {
                X(uf, a)(b)
            }
        };
    var yg = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        zg = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? Zc(yg) : c;
            this.j = a;
            this.i = b;
            this.h = c
        };

    function Ag(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Yc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Array.prototype.indexOf.call(f, d, void 0);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            ec(d, "load", e);
            ec(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Cg = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver";
            Rc(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Bg(c, b)
        },
        Bg = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ag(c, a, void 0 === b ? !1 : b)
        };
    var Dg = Q("gpt/pubads_impl_"),
        Eg = Q("pagead/managed/js/gpt/");

    function Fg(a) {
        a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Gg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Hg = function(a, b) {
            var c = Fg(b);
            c && Gg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Ig = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Fg(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Gg(p(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Fg() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Jg = function(a, b) {
            return Ig(a, b, function(c, d) {
                var e = new zg;
                var f = void 0 === f ? e.i : f;
                var g = void 0 === g ? e.j : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Be(d, {
                    context: c,
                    id: g
                })), w.google_js_errors = w.google_js_errors || [], w.google_js_errors.push(d), w.error_rep_loaded || (f = w.document, c = Yc("SCRIPT", f), c.src = jc(e.h), Ic(c), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), w.error_rep_loaded = !0))
            })
        };

    function Y(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Kg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Lg() {
        var a = new m.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = r(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Mg(a) {
        a = a.id;
        return null != a && (Lg().has(a) || p(a, "startsWith").call(a, "google_ads_iframe_") || p(a, "startsWith").call(a, "aswift"))
    }

    function Ng(a, b, c) {
        if (!a.sources) return !1;
        switch (Og(a)) {
            case 2:
                var d = Pg(a);
                if (d) return c.some(function(f) {
                    return Qg(d, f)
                });
            case 1:
                var e = Rg(a);
                if (e) return b.some(function(f) {
                    return Qg(e, f)
                })
        }
        return !1
    }

    function Og(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Rg(a) {
        return Sg(a, function(b) {
            return b.currentRect
        })
    }

    function Pg(a) {
        return Sg(a, function(b) {
            return b.previousRect
        })
    }

    function Sg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var Tg = function() {
        Qd.call(this);
        this.i = this.h = this.M = this.L = this.T = 0;
        this.da = this.aa = Number.NEGATIVE_INFINITY;
        this.W = this.Y = this.Z = this.ba = this.ga = this.C = this.fa = this.O = 0;
        this.X = !1;
        this.N = this.K = this.F = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.ea = a ? a.getAttribute("data-google-query-id") : null;
        this.o = null;
        this.ca = !1;
        this.V = function() {}
    };
    v(Tg, Qd);
    var Wg = function() {
            var a = new Tg;
            if (P(lg).h($d.h, $d.defaultValue)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = r(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, Ug(a).observe({
                        type: c,
                        buffered: !0
                    });
                    Vg(a)
                }
            }
        },
        Ug = function(a) {
            a.o || (a.o = new PerformanceObserver(Jg(640, function(b) {
                var c = Xg !== window.scrollX || Yg !== window.scrollY ? [] : Zg,
                    d = $g();
                b = r(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.T += Number(e.value);
                            Number(e.value) > f.L && (f.L = Number(e.value));
                            f.M += 1;
                            var g = Ng(e, c, d);
                            g && (f.C += e.value, f.ba++);
                            if (5E3 < e.startTime - f.aa || 1E3 < e.startTime - f.da) f.aa = e.startTime, f.h = 0, f.i = 0;
                            f.da = e.startTime;
                            f.h += e.value;
                            g && (f.i += e.value);
                            f.h > f.O && (f.O = f.h, f.ga = f.i, f.fa = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Z = Math.floor(e.renderTime || e.loadTime);
                        a.Y = e.size;
                        break;
                    case "first-input":
                        a.W = Number((e.processingStart - e.startTime).toFixed(3));
                        a.X = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.F += e, a.K = Math.max(a.K, e), a.N += 1
                }
            })));
            return a.o
        },
        Vg = function(a) {
            var b = Jg(641, function() {
                    var d = document;
                    2 == (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && ah(a)
                }),
                c = Jg(641, function() {
                    return void ah(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.V = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Ug(a).disconnect()
            }
        };
    Tg.prototype.J = function() {
        Qd.prototype.J.call(this);
        this.V()
    };
    var ah = function(a) {
            if (!a.ca) {
                a.ca = !0;
                Ug(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Kg("cls", a.T), b += Kg("mls", a.L), b += Y("nls", a.M), window.LayoutShiftAttribution && (b += Kg("cas", a.C), b += Y("nas", a.ba)), b += Kg("wls", a.O), b += Kg("tls", a.fa), window.LayoutShiftAttribution && (b += Kg("was", a.ga)));
                window.LargestContentfulPaint && (b += Y("lcp", a.Z), b += Y("lcps", a.Y));
                window.PerformanceEventTiming && a.X && (b += Y("fid", a.W));
                window.PerformanceLongTaskTiming && (b += Y("cbt", a.F), b += Y("mbt", a.K), b += Y("nlt", a.N));
                for (var c = 0, d = r(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Mg(e.value) && c++;
                b += Y("nif", c);
                c = window.google_unique_id;
                b += Y("ifi", "number" === typeof c ? c : 0);
                c = P(Lf).h();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (w === w.top ? 1 : 0);
                b += a.ea ? "&qqid=" + encodeURIComponent(a.ea) : Y("pvsid", Xc(w));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.j || (a.j = !0, a.J())
            }
        },
        Qg = function(a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
        },
        $g = function() {
            var a = [].concat(t(document.getElementsByTagName("iframe"))).filter(Mg),
                b = [].concat(t(Lg())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            Xg = window.scrollX;
            Yg = window.scrollY;
            return Zg = [].concat(t(a), t(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Xg = void 0,
        Yg = void 0,
        Zg = [];
    var ch = function(a) {
        O.call(this, a, -1, bh)
    };
    v(ch, O);
    var dh = function(a, b) {
            return G(a, 2, b)
        },
        eh = function(a, b) {
            return G(a, 3, b)
        },
        fh = function(a, b) {
            return G(a, 4, b)
        },
        gh = function(a, b) {
            return G(a, 5, b)
        },
        hh = function(a, b) {
            return G(a, 9, b)
        },
        ih = function(a, b) {
            return Nb(a, 10, b)
        },
        jh = function(a, b) {
            return G(a, 11, b)
        },
        kh = function(a, b) {
            return G(a, 1, b)
        },
        lh = function(a, b) {
            return G(a, 7, b)
        },
        mh = function(a) {
            O.call(this, a)
        };
    v(mh, O);
    mh.prototype.getVersion = function() {
        return Ob(this, 2)
    };
    var bh = [10, 6];
    var nh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function oh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function ph(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function qh(a) {
        if (!ph(a)) return null;
        var b = oh(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(nh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function rh(a) {
        var b;
        return jh(ih(gh(dh(kh(fh(lh(hh(eh(new ch, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new mh;
            d = G(d, 1, c.brand);
            return G(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function sh(a) {
        var b, c;
        return null != (c = null == (b = qh(a)) ? void 0 : b.then(function(d) {
            return rh(d)
        })) ? c : null
    };
    var Z = {},
        th = (Z[23] = .001, Z[211] = !1, Z[253] = !1, Z[246] = [], Z[226] = [], Z[150] = ".google.com.np", Z[221] = /^true$/.test(""), Z[36] = /^true$/.test("false"), Z[172] = null, Z[260] = void 0, Z[251] = null, Z),
        Zb = function() {
            this.h = !1
        };

    function ug(a) {
        P(Zb).h = !0;
        return th[a]
    }

    function uh(a, b) {
        P(Zb).h = !0;
        th[a] = b
    };
    var vh = new m.WeakMap,
        wh = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var xh = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        yh = function(a, b) {
            b = void 0 === b ? wh : b;
            var c = Ba(a),
                d = function(e) {
                    e = r(e);
                    e.next();
                    e = ka(e);
                    return b(c, e)
                };
            return function() {
                var e = ua.apply(0, arguments),
                    f = this || w,
                    g = vh.get(f);
                g || (g = {}, vh.set(f, g));
                f = g;
                g = [this].concat(t(e));
                e = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var h = r(g);
                    g = h.next().value;
                    h = ka(h);
                    g = a.apply(g, h);
                    f = f[e] = g
                }
                return f
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? xh.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });

    function zh() {
        return 0 === yh(ug(172))
    };

    function Ah(a, b) {
        var c = {},
            d = {},
            e = {};
        return e[Je] = (c[3] = zh, c[59] = function() {
            var f = ua.apply(0, arguments),
                g = p(f, "includes"),
                h = String,
                k;
            var l = void 0 === l ? window : l;
            var n;
            l = null != (n = null == (k = Fc(l.location.href.match(Ec)[3] || null)) ? void 0 : k.split(".")) ? n : [];
            k = 2 > l.length ? null : "uk" === l[l.length - 1] ? 3 > l.length ? null : Sc(l.splice(l.length - 3).join(".")) : Sc(l.splice(l.length - 2).join("."));
            return g.call(f, h(k))
        }, c[61] = function() {
            return ug(221)
        }, c[63] = function() {
            return ug(221) || ".google.ch" === ug(150)
        }, c), e[U] = (d[1] = function() {
            var f;
            return null != (f = Vc("{{MOD}}")) ? f : -1
        }, d[4] = function() {
            return Vc("6") || 0
        }, d[12] = function() {
            if (a) {
                var f = RegExp("[?&]gmeid=([^&]*)").exec(a.src);
                var g;
                f = f ? null != (g = Vc(f[1])) ? g : -1 : -1
            } else f = -1;
            return f
        }, d[13] = function() {
            return b
        }, d), e
    };

    function Bh(a, b, c) {
        var d = new Wf(ug(246));
        if (!M(d, Ue, 1).length && M(a, Ue, 1).length) {
            var e = M(a, Ue, 1);
            Nb(d, 1, e)
        }!M(d, Yf, 2).length && M(a, Yf, 2).length && (e = M(a, Yf, 2), Nb(d, 2, e));
        void 0 === Jb(d, Zf, 5, !1) && void 0 !== Jb(a, Zf, 5, !1) && (a = L(a, Zf, 5), Lb(d, 5, a));
        wg(d, Ah(b, c))
    };
    var Ch = function(a) {
        O.call(this, a)
    };
    v(Ch, O);
    var Eh = function() {
            return [].concat(t(p(Dh, "values").call(Dh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Dh = new m.Map;

    function Fh() {
        var a;
        return null != (a = w.googletag) ? a : w.googletag = {
            cmd: []
        }
    }

    function Gh(a, b) {
        var c = Fh();
        c.hasOwnProperty(a) || (c[a] = b)
    };

    function Hh() {
        var a = Ih,
            b = Fh(),
            c, d = null != (c = b.fifWin) ? c : window,
            e = d.document;
        c = b.fifWin ? window : d;
        var f = Jh(),
            g = new Ch;
        Yb();
        p(Object, "assign").call(Object, th, b._vars_);
        b._vars_ = th;
        g && (Pb(g, 3) && uh(36, !0), Pb(g, 5) && uh(221, !0), Ob(g, 6) && uh(150, Ob(g, 6)));
        Gh("_loaded_", !0);
        var h = Kh(f, g);
        Gh("getVersion", function() {
            return String(h.sa || h.ia)
        });
        Gh("cmd", []);
        var k = Lh(e),
            l;
        f = null != (l = Mh(e)) ? l : Nh(e);
        Oh(void 0 !== Jb(g, Wf, 1, !1) ? L(g, Wf, 1) : new Wf(a), d, f, N(D(g, 2), 0));
        try {
            Wg()
        } catch (Bb) {}
        Hg("1", d);
        a = Ph(h, f);
        if (!k) {
            d = "gpt-impl-" + Math.random();
            try {
                Jc(e, yc(a, {
                    id: d,
                    nonce: Cc()
                }))
            } catch (Bb) {}
            e.getElementById(d) && (b._loadStarted_ = !0)
        }
        if (!b._loadStarted_) {
            var n = Yc("SCRIPT");
            n.src = jc(a);
            Ic(n);
            n.async = !0;
            e = b.fifWin ? c.document : e;
            a = e.body;
            d = e.documentElement;
            var u, y, I = null != (y = null != (u = e.head) ? u : a) ? y : d;
            "complete" !== c.document.readyState && b.fifWin ? ec(c, "load", function() {
                return void I.appendChild(n)
            }) : I.appendChild(n);
            b._loadStarted_ = !0
        }
        c === c.top && ye(c);
        Mc(c) === (Kc(c.top) ? c.top : null) && Qh(c.top, f)
    }

    function Jh() {
        var a = Number("2022120601");
        1 > a || Math.floor(a) !== a ? (Cg({
            v: "2022120601"
        }), a = "1") : a = "2022120601";
        return {
            ia: a,
            R: "",
            wa: new Td,
            xa: .01 > Pc(),
            ra: 100
        }
    }

    function Kh(a, b) {
        var c = Q("2022120601");
        var d = a.R;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : (d && Cg({
            mjsv: d
        }), d = void 0);
        return p(Object, "assign").call(Object, {}, a, {
            ja: c,
            sa: d,
            ta: Q(""),
            Oa: Xc(window),
            Ra: b
        })
    }

    function Mh(a) {
        return (a = a.currentScript) ? a : null
    }

    function Nh(a) {
        var b;
        a = r(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, p(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function Ph(a, b) {
        b = Rh(b) ? Q("https://pagead2.googlesyndication.com/") : Q("https://securepubads.g.doubleclick.net/");
        a = a.R ? mc([b, Eg, a.ta, Q("/pubads_impl.js")]) : P(lg).h(Wd.h, Wd.defaultValue) ? mc([b, Eg, Q("m"), a.ja, Q("/pubads_impl.js")]) : mc([b, Dg, a.ja, Q(".js")]);
        b = {};
        var c = P(lg).i(Yd.h, Yd.defaultValue),
            d = P(lg).i(Xd.h, Xd.defaultValue);
        c && (b.cb = c);
        d && (b.mcb = d);
        return p(Object, "keys").call(Object, b).length ? lc(a, b) : a
    }

    function Oh(a, b, c, d) {
        uh(172, c);
        Bh(a, c, d);
        P(Lf).i(12);
        P(Lf).i(5);
        (a = sh(b)) && a.then(function(e) {
            a: {
                ob = !0;
                try {
                    var f = JSON.stringify(e.toJSON(), Wb);
                    break a
                } finally {
                    ob = !1
                }
                f = void 0
            }
            return void uh(251, f)
        });
        Nf(P(lg).j(Zd.h, Zd.defaultValue), b.document)
    }

    function Lh(a) {
        var b = Mh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }
    var Sh = function() {
        this.h = []
    };
    Sh.prototype.addListener = function(a) {
        void 0 !== this.i || this.error ? a(this.i, this.error) : this.h.push(a)
    };
    var Th = function(a, b, c) {
        a.i = b;
        a.error = c;
        for (var d = r(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
        a.h.length = 0
    };

    function Qh(a, b) {
        var c = new Sh;
        uh(260, function(e) {
            return void c.addListener(e)
        });
        if (a = Uh(a, b)) {
            var d = new m.globalThis.XMLHttpRequest;
            d.open("GET", a.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (Hg("13", window), Th(c, 204 === d.status ? "" : d.responseText)) : Th(c, void 0, new m.globalThis.Error("resp:" + d.status))
            };
            d.onerror = function() {
                return void Th(c, void 0, new m.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            };
            d.send()
        } else Th(c, void 0, new m.globalThis.Error("no provided or inferred data"))
    }

    function Uh(a, b) {
        if (!b) return null;
        a = a.location.host;
        var c = Hc(b.src, "domain"),
            d = Hc(b.src, "network-code");
        if (!a && !c && !d) return null;
        b = Rh(b) ? Q("https://pagead2.googlesyndication.com") : Q("https://securepubads.g.doubleclick.net");
        return lc(mc([b, Q("/pagead/ppub_config")]), {
            ippd: a,
            pppd: c,
            pppnc: d
        })
    }

    function Rh(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Fc(a.src.match(Ec)[3] || null)
    };
    var Ih;
    a: {
        try {
            if (Array.isArray(E)) {
                Ih = E;
                break a
            }
        } catch (a) {}
        Ih = []
    }
    try {
        Hh()
    } catch (a) {
        try {
            var Vh = Jh();
            if (Vh.xa) {
                var Wh, Xh = a.error && a.meta && a.id ? a.error : a,
                    Yh, Zh = new Md,
                    $h = new Ld;
                try {
                    var ai;
                    ai = Xc(window);
                    J($h, 1, ai, 0)
                } catch (b) {}
                try {
                    var bi = P(Lf).h();
                    Fb($h, 2, bi)
                } catch (b) {}
                try {
                    J($h, 3, window.document.URL, "")
                } catch (b) {}
                Yh = Lb(Zh, 2, $h);
                var ci, di = new Jd;
                ci = J(di, 1, 420, 0);
                try {
                    var ei = Ae(null == Xh ? void 0 : Xh.name) ? Xh.name : "Unknown error";
                    J(ci, 2, ei, "")
                } catch (b) {}
                try {
                    var fi = Ae(null == Xh ? void 0 : Xh.message) ? Xh.message : "Caught " + Xh;
                    J(ci, 3, fi, "")
                } catch (b) {}
                try {
                    var gi = Ae(null == Xh ? void 0 : Xh.stack) ? Xh.stack : Error().stack;
                    gi && Gb(ci, 4, gi.split(/\n\s*/))
                } catch (b) {}
                Wh = Lb(Yh, 1, ci);
                var hi = new Hd;
                try {
                    J(hi, 1, Vh.R || Vh.ia, "")
                } catch (b) {}
                try {
                    var ii = Eh();
                    J(hi, 2, ii, 0)
                } catch (b) {}
                try {
                    var ji = [].concat(t(p(Dh, "keys").call(Dh)));
                    Gb(hi, 3, ji)
                } catch (b) {}
                Mb(Wh, 4, Nd, hi);
                J(Wh, 5, Vh.ra, 0);
                Od(Vh.wa, Wh)
            }
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [null, 472785970, null, [null, 500]],
        [447540098, null, null, [1]],
        [447540095, null, null, [1]],
        [447540096, null, null, [1]],
        [null, 7, null, [null, 0.1]],
        [null, 448338836, null, [null, 0.01]],
        [null, 408380992, null, [null, 0.01]],
        [null, 377289019, null, [null, 10000]],
        [null, 529, null, [null, 20]],
        [null, 447000223, null, [null, 0.01]],
        [360245597, null, null, [1]],
        [null, 494, null, [null, 10000]],
        [null, 471890184, null, [null, 0.01]],
        [null, 517, null, [null, 0.01]],
        [485597276, null, null, [1]],
        [488720814, null, null, [1]],
        [null, 492, null, [null, 0.01]],
        [464128744, null, null, [1]],
        [null, 45374287, null, [null, 1000]],
        [null, 398776877, null, [null, 60000]],
        [null, 374201269, null, [null, 60000]],
        [null, 371364213, null, [null, 60000]],
        [null, 376149757, null, [null, 0.0025]],
        [476447134, null, null, [1]],
        [377936516, null, null, [1]],
        [null, null, 2, [null, null, "1-0-40"]],
        [null, null, null, [], null, 489],
        [392065905, null, null, null, [
            [
                [4, null, 68],
                [1]
            ]
        ]],
        [null, 360245595, null, [null, 500]],
        [null, 397316938, null, [null, 1000]],
        [444587044, null, null, [1]],
        [440148284, null, null, [1]],
        [440148282, null, null, [1]],
        [489509230, null, null, null, [
            [
                [2, [
                    [12, null, null, null, 4, null, "Chrome\\/((?!10[0-8])\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]]
                ]],
                [1]
            ]
        ]],
        [480068022, null, null, null, [
            [
                [2, [
                    [12, null, null, null, 4, null, "Chrome\\/((?!10[0-6])\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]]
                ]],
                [1]
            ]
        ]],
        [null, null, null, [], null, 489560439],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 12]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [478498873, null, null, [1]],
        [null, null, null, [null, null, null, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1934],
        [1947, null, null, [1]],
        [1971, null, null, [1]],
        [null, 1972, null, []],
        [null, 1142, null, [null, 8]],
        [null, 1195, null, [null, 1]],
        [null, 1119, null, [null, 300]],
        [null, 1193, null, [null, 100]],
        [null, 1114, null, [null, 1]],
        [null, 1116, null, [null, 300]],
        [null, 1117, null, [null, 100]],
        [null, 1110, null, [null, 5]],
        [null, 1111, null, [null, 5]],
        [null, 1112, null, [null, 5]],
        [null, 1113, null, [null, 5]],
        [null, 1115, null, [null, -1]],
        [null, 1194, null, [null, 1]],
        [null, 469675170, null, [null, 30000]],
        [479047366, null, null, [1]],
        [392736476, null, null, []],
        [null, null, null, [], null, 1932],
        [432938498, null, null, []],
        [485990406, null, null, []]
    ],
    [
        [2, [
            [1, [
                [31071053],
                [31071054]
            ], null, null, null, null, null, null, null, 102],
            [5, [
                [44780194],
                [44780195, [
                    [1122, null, null, [1]]
                ]],
                [44780196, [
                    [1122, null, null, [1]]
                ]],
                [44780197, [
                    [1122, null, null, [1]]
                ]],
                [44780198, [
                    [1122, null, null, [1]]
                ]]
            ], null, null, null, null, null, 601, null, 102],
            [10, [
                [31061165],
                [31061166, [
                    [null, 363650251, null, [null, 2]]
                ]],
                [31061167, [
                    [null, 363650251, null, [null, 1]]
                ]]
            ], null, null, null, null, null, 1, null, 102],
            [10, [
                [31069101]
            ]],
            [10, [
                [31069102],
                [31069103]
            ], null, null, null, null, null, null, null, 104],
            [10, [
                [31070908],
                [31070909, [
                    [null, 474872234, null, [null, 1]]
                ]]
            ]],
            [100, [
                    [31071083],
                    [31071084, [
                        [null, null, null, [null, null, null, ["[\"424397508\",[[\"pubcid.org\",null,true]]]", "[\"23202586\",[[\"pubcid.org\",null,true]]]", "[\"170737076\",[[\"pubcid.org\",null,true]]]", "[\"24132379\",[[\"pubcid.org\",null,true]]]", "[\"21869819039\",[[\"pubcid.org\",null,true]]]", "[\"6556\",[[\"pubcid.org\",null,true]]]", "[\"344101295\",[[\"pubcid.org\",null,true]]]", "[\"62532913\",[[\"pubcid.org\",null,true]]]", "[\"152344380\",[[\"pubcid.org\",null,true]]]", "[\"127641337\",[[\"pubcid.org\",null,true]]]"]], null, 471270390]
                    ]]
                ],
                [3, [
                    [4, null, 15, null, null, null, null, ["424397508"]],
                    [4, null, 15, null, null, null, null, ["23202586"]],
                    [4, null, 15, null, null, null, null, ["170737076"]],
                    [4, null, 15, null, null, null, null, ["24132379"]],
                    [4, null, 15, null, null, null, null, ["21869819039"]],
                    [4, null, 15, null, null, null, null, ["6556"]],
                    [4, null, 15, null, null, null, null, ["344101295"]],
                    [4, null, 15, null, null, null, null, ["62532913"]],
                    [4, null, 15, null, null, null, null, ["152344380"]],
                    [4, null, 15, null, null, null, null, ["127641337"]]
                ]], 67
            ],
            [10, [
                    [31071187],
                    [31071188, [
                        [501, null, null, [1]]
                    ]],
                    [31071189, [
                        [441529989, null, null, [1]],
                        [501, null, null, [1]]
                    ]],
                    [31071190, [
                        [501, null, null, [1]],
                        [484598396, null, null, [1]]
                    ]],
                    [31071191, [
                        [441529989, null, null, [1]],
                        [501, null, null, [1]],
                        [484598396, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 66],
                    [6, null, null, 3, null, 2],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102|103|104|105)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]], null, null, null, null, null, null, 114
            ],
            [1, [
                    [31071192],
                    [31071193, [
                        [441529989, null, null, [1]],
                        [501, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102|103|104|105)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]], null, null, null, null, 500, null, 114
            ],
            [10, [
                [44752585],
                [44752586, [
                    [392065905, null, null, [1]]
                ]]
            ], null, 41],
            [50, [
                    [44777628],
                    [44777629, [
                        [392065905, null, null, []]
                    ]]
                ],
                [4, null, 68], 41
            ]
        ]],
        [4, [
            [null, [
                [44714449, [
                    [null, 7, null, [null, 1]]
                ]],
                [676982961, [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]]
                ]],
                [676982996, [
                    [null, 7, null, [null, 1]]
                ]]
            ]]
        ]],
        [3, [
            [null, [
                [676982960],
                [676982998]
            ]],
            [null, [
                [1337, [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31069125, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, -1],
                                [7, null, null, 1, null, 5]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 35]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 39],
                                [7, null, null, 1, null, 45]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ],
                [31069126, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]],
                        [437292966, null, null, [1]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 4],
                                [7, null, null, 1, null, 10]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 34],
                                [7, null, null, 1, null, 40]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 44],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]
            ], null, 67],
            [10, [
                [31069595],
                [31069596, [
                    [472976668, null, null, [1]]
                ]]
            ]],
            [1, [
                [31071119],
                [31071120],
                [31071121],
                [31071122],
                [31071123],
                [31071124]
            ]],
            [1, [
                [31071125],
                [31071126, [
                    [480068022, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071159],
                [31071160, [
                    [489509230, null, null, [1]]
                ]]
            ], null, 59],
            [1000, [
                    [31071234, [
                        [477812799, null, null, [1]]
                    ]]
                ],
                [4, null, 8, null, null, null, null, ["sharedStorage"]]
            ]
        ]],
        [5, [
            [50, [
                    [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    [21062786, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [900, [
                    [21062812, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [50, [
                    [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    [21063917, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [900, [
                    [21064113, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [50, [
                    [31067420],
                    [31067421, [
                        [360245597, null, null, []]
                    ]],
                    [44776073],
                    [44777420],
                    [44779108],
                    [44779905]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 69
            ],
            [100, [
                [31070872],
                [31070873, [
                    [485860314, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31071023, [
                            [null, 24, null, [null, 31071023]]
                        ],
                        [6, null, null, 13, null, 31071023]
                    ],
                    [31071024, [
                            [null, 24, null, [null, 31071024]]
                        ],
                        [6, null, null, 13, null, 31071024]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                [31071051, [
                        [null, 428094087, null, [null, 31071051]]
                    ],
                    [6, null, null, 12, null, 31071051]
                ],
                [31071052, [
                        [null, 428094087, null, [null, 31071052]]
                    ],
                    [6, null, null, 12, null, 31071052]
                ]
            ]],
            [null, [
                [31071057],
                [31071058, [
                    [null, 434620574, null, [null, 300]],
                    [474159377, null, null, [1]]
                ]]
            ], null, 69],
            [1000, [
                    [31071073, [
                            [null, 24, null, [null, 31071073]]
                        ],
                        [6, null, null, 13, null, 31071073]
                    ],
                    [31071074, [
                            [null, 24, null, [null, 31071074]]
                        ],
                        [6, null, null, 13, null, 31071074]
                    ]
                ],
                [4, null, 3], 1
            ],
            [10, [
                [31071089],
                [31071090, [
                    [486663050, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071091],
                [31071092, [
                    [488463535, null, null, [1]]
                ]]
            ]],
            [100, [
                [31071093],
                [31071094, [
                    [488999963, null, null, [1]]
                ]]
            ]],
            [1, [
                [31071142],
                [31071143, [
                    [489217043, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071144],
                [31071145, [
                    [486708758, null, null, [1]]
                ]]
            ]],
            [100, [
                [31071150],
                [31071151, [
                    [45385570, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071185],
                [31071186, [
                    [485091276, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071197],
                [31071198, [
                    [422917270, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31071221, [
                            [null, 24, null, [null, 31071221]]
                        ],
                        [6, null, null, 4, null, 4]
                    ],
                    [31071222, [
                            [null, 24, null, [null, 31071222]]
                        ],
                        [6, null, null, 4, null, 5]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31071256, [
                            [null, 24, null, [null, 31071256]]
                        ],
                        [6, null, null, 4, null, 6]
                    ],
                    [31071257, [
                            [null, 24, null, [null, 31071257]]
                        ],
                        [6, null, null, 4, null, 7]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31071294, [
                            [null, 24, null, [null, 31071294]]
                        ],
                        [6, null, null, 4, null, 8]
                    ],
                    [31071295, [
                            [null, 24, null, [null, 31071295]]
                        ],
                        [6, null, null, 4, null, 9]
                    ]
                ],
                [4, null, 3], 1
            ],
            [10, [
                [31071296],
                [31071297, [
                    [484113279, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071298],
                [31071299, [
                    [492198798, null, null, [1]]
                ]]
            ]],
            [50, [
                [44761477],
                [44761478, [
                    [null, 427198696, null, [null, 1]]
                ]]
            ]],
            [10, [
                    [44776366],
                    [44776367],
                    [44779256]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 69
            ]
        ]],
        [25, [
            [10, [
                    [31064132],
                    [31064133, [
                        [null, 438663674, null, [null, 1]]
                    ]]
                ],
                [2, [
                    [4, null, 68],
                    [3, [
                        [6, null, null, null, 4, null, "2g", ["navigator.connection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.mozConnection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.webkitConnection.effectiveType"]]
                    ]]
                ]], 40
            ],
            [50, [
                [31068366],
                [31068367, [
                    [null, 455645877, null, [null, 0.1]]
                ]]
            ]],
            [10, [
                [31068825],
                [31068826, [
                    [null, 462420536, null, [null, 0.1]]
                ]]
            ]],
            [50, [
                [31070232],
                [31070233, [
                    [476475256, null, null, [1]]
                ]]
            ]],
            [1, [
                [44777085, null, [4, null, 68]],
                [44777086, [
                        [null, 438663674, null, [null, 1]]
                    ],
                    [4, null, 68]
                ],
                [44777087, [
                        [null, 438663674, null, [null, 500]]
                    ],
                    [4, null, 68]
                ],
                [44777088, [
                        [null, 438663674, null, [null, 1000]]
                    ],
                    [4, null, 68]
                ],
                [44777089, [
                        [null, 438663674, null, [null, 1500]]
                    ],
                    [4, null, 68]
                ],
                [44777090, [
                        [null, 438663674, null, [null, 2000]]
                    ],
                    [4, null, 68]
                ],
                [44777091, [
                        [null, 438663674, null, [null, 2500]]
                    ],
                    [4, null, 68]
                ],
                [44777092, [
                        [null, 438663674, null, [null, 3000]]
                    ],
                    [4, null, 68]
                ]
            ], null, 40]
        ]],
        [12, [
            [20, [
                    [21065724],
                    [21065725, [
                        [203, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["LayoutShift"]]
            ],
            [10, [
                [31061690],
                [31061691, [
                    [83, null, null, [1]],
                    [84, null, null, [1]]
                ]]
            ], null, 61],
            [10, [
                [44769661],
                [44769662, [
                    [1973, null, null, [1]]
                ]]
            ]]
        ]],
        [13, [
            [500, [
                    [31061692],
                    [31061693, [
                        [77, null, null, [1]],
                        [78, null, null, [1]],
                        [85, null, null, [1]],
                        [80, null, null, [1]],
                        [76, null, null, [1]]
                    ]]
                ],
                [4, null, 6, null, null, null, null, ["31061691"]]
            ],
            [1000, [
                    [31067146, null, [4, null, 9, null, null, null, null, ["document.browsingTopics"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067147, null, [2, [
                        [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]],
                        [4, null, 9, null, null, null, null, ["navigator.joinAdInterestGroup"]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067148, null, [4, null, 69, null, null, null, null, ["attribution-reporting"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067672, null, [2, [
                        [4, null, 69, null, null, null, null, ["browsing-topics"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["browsing-topics"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067673, null, [2, [
                        [4, null, 69, null, null, null, null, ["join-ad-interest-group"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["join-ad-interest-group"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067674, null, [2, [
                        [4, null, 69, null, null, null, null, ["run-ad-auction"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["run-ad-auction"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067675, null, [2, [
                        [4, null, 69, null, null, null, null, ["attribution-reporting"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068556, null, [4, null, 8, null, null, null, null, ["sharedStorage"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068557, null, [2, [
                        [4, null, 69, null, null, null, null, ["shared-storage"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["shared-storage"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [10, [
                    [31070380],
                    [31070381, [
                        [477209535, null, null, [1]],
                        [487608180, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["document.browsingTopics"]]
            ],
            [null, [
                    [31070383, null, [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]],
                    [31070384, [
                            [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701],
                            [439828594, null, null, [1]]
                        ],
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                    ]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]], 70
            ],
            [null, [
                    [31070594],
                    [31070595, [
                        [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701],
                        [439828594, null, null, [1]],
                        [483962503, null, null, [1]]
                    ]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]], 70
            ],
            [10, [
                [31071010],
                [31071011, [
                    [1974, null, null, [1]]
                ]]
            ]],
            [null, [
                [44768158, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44768159, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]],
            [50, [
                [44776500, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44776501, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]],
            [50, [
                [44776502, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44776503, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]]
        ]],
        [20, [
            [1000, [
                    [31070530, null, [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ],
            [1000, [
                    [31070531, null, [2, [
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]],
                        [4, null, 8, null, null, null, null, ["credentialless"]]
                    ]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ],
            [1000, [
                    [31070532, null, [4, null, 9, null, null, null, null, ["SharedArrayBuffer"]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ]
        ]]
    ], null, null, [0.001, 1000, 1, 1000]
])