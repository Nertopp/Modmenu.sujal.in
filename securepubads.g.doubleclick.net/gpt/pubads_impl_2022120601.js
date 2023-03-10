(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var aa, da, fa, ha, ja, ma, oa, qa, ta, na, sa, va, xa, ya, za, Aa, Ea, Fa, Ga, Ha, Ia, Ka, Ja, La, Ma, Ra, Sa, Ua, Wa, Za, ab, db, fb, mb, pb, sb, ub, wb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Ib, Jb, Lb, Ob, Pb, Rb, Sb, Tb, Ub, Vb, Xb, Yb, $b, ac, bc, cc, ec, fc, gc, hc, jc, kc, lc, dc, rc, tc, sc, wc, uc, yc, xc, vc, Cc, Ec, Gc, Hc, Jc, Lc, Mc, Pc, Qc, Oc, Rc, Tc, Uc, Xc, bd, dd, Zc, hd, kd, ed, fd, od, pd, qd, rd, md, nd, sd, wd, xd, zd, Ad, Bd, Cd, Ed, Jd, Kd, C, Md, Nd, Pd, Qd, Rd, Td, Vd, Xd, ke, de, me, ne, oe, qe, ue, ve, Ce, Je, Fe, Oe, Pe, Ze, Ue, Te, Se, $e, kf, lf, mf, Cf, If, Gf, Hf, Nf, Rf, Sf, ig, pg, qg, sg, tg, xg, yg, zg, vg, wg, Ag, Bg, Dg, Eg, Cg, Ig, Kg, Lg, Mg, Tg, Xg, J, bh, ph, th, vh, yh, Ah, Bh, Ch, Eh, Hh, Kh, Mh, Oh, Nh, Vh, Wh, Xh, Yh, Ph, Zh, Qh, ai, ci, di, fi, ei, ki, ii, li, ui, xi, pi, qi, yi, Ci, Di, Fi, Gi, Hi, Ii, Mi, Si, Oi, Ki, aj, Zi, $i, bj, dj, gj, ij, N, kj, lj, mj, oj, qj, rj, sj, uj, Bj, wj, vj, yj, zj, Aj, Sj, Tj, Vj, Wj, ak, dk, hk, nk, pk, rk, sk, tk, wk, zk, Bk, Dk, Ek, Gk, Ik, Jk, Lk, Hk, pa, Nk, Pk, Rk, Wk, el, fl, hl, Yk, ql, rl, tl, vl, Cl, Il, Jl, Ql, Rl, Sl, Tl, Ul, Wl, Xl, Yl, Zl, am, $l, bm, cm, dm, em, fm, gm, jm, mm, om, pm, qm, rm, sm, tm, um, Am, Fm, Im, Gm, Hm, Pm, Um, Wm, Zm, cn, $m, en, fn, gn, hn, ln, nn, un, on, pn, kn, xn, zn, An, Dn, In, Vn, Wn, Yn, eo, ho, io, jo, po, qo, to, uo, zo, Ao, Go, Ho, Jo, Ko, Lo, So, Xo, Zo, Np, Qp, Rp, Sp, $p, bq, eq, hq, E, iq, jq, kq, lq, mq, w, nq, oq, pq, Q, qq, rq, sq, zq, Aq, Bq, hb, jb, kb, Dq, Gq, Eq, Fq, Hq, Iq, bb, Yc, ra, la, Nq, Oq, Pq, Qq, re;
    da = function(a) {
        return a ? a.passive && ca() ? a : a.capture || !1 : !1
    };
    fa = function(a, b) {
        b = _.ea(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ha = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ja = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ma = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ka(e) ? "o" + la(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    oa = function(a, b) {
        a.sort(b || na)
    };
    qa = function(a) {
        for (var b = pa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || na;
        oa(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    ta = function(a, b) {
        if (!ra(a) || !ra(b) || a.length != b.length) return !1;
        for (var c = a.length, d = sa, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    na = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    sa = function(a, b) {
        return a === b
    };
    va = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    xa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = xa.apply(null, ja(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    ya = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    za = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Aa = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Ea = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ca.length; f++) c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Fa = function() {
        var a = _.q.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ga = function(a) {
        return -1 != Fa().indexOf(a)
    };
    Ha = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Ia = function() {
        return Ga("Firefox") || Ga("FxiOS")
    };
    Ka = function() {
        return Ga("Safari") && !(Ja() || Ga("Coast") || Ga("Opera") || Ga("Edge") || Ga("Edg/") || Ga("OPR") || Ia() || Ga("Silk") || Ga("Android"))
    };
    Ja = function() {
        return (Ga("Chrome") || Ga("CriOS")) && !Ga("Edge") || Ga("Silk")
    };
    La = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    Ma = function() {
        var a = Fa();
        if (Ga("Trident") || Ga("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = Ha(a);
        b = La(a);
        return Ga("Opera") ? b(["Version", "Opera"]) : Ga("Edge") ? b(["Edge"]) : Ga("Edg/") ? b(["Edg"]) : Ga("Silk") ? b(["Silk"]) : Ja() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    _.Qa = function(a) {
        if (a instanceof Na) a = Oa(a);
        else {
            b: if (Pa) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    Ra = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Sa = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ua = function(a, b) {
        a.textContent = b instanceof Ta && b.constructor === Ta ? b.j : "type_error:SafeScript";
        Sa(a)
    };
    Wa = function(a, b) {
        a.src = Va(b);
        Sa(a)
    };
    Za = function(a, b) {
        a.write(Ya(b))
    };
    ab = function(a) {
        return new _.$a(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    db = function(a) {
        for (var b = bb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return _.cb(c.join(""))
    };
    fb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new w.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Wa(g, a);
            c && "complete" !== b.document.readyState ? _.eb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    mb = function(a) {
        var b, c, d, e, f, g;
        return _.gb(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.Eb, c = void 0, h.D = 2, hb(h, ib(b), 4);
                case 4:
                    c = h.m;
                    jb(h, 3);
                    break;
                case 2:
                    kb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Vb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.I,
                        xe: c.bg_hash_basename,
                        we: c.bg_binary,
                        kf: a.j + "_" + a.m,
                        Vb: d,
                        Eb: a.Eb,
                        Fc: e,
                        Mc: f,
                        Ec: g
                    }) : h.return(void 0)
            }
        })
    };
    pb = function(a) {
        var b;
        return _.gb(function(c) {
            if (1 == c.j) return hb(c, mb(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.xe, g._bgp_ = b.we, g._li_ = b.kf, g._jk_ = b.Vb, g._st_ = b.Eb, g._rc_ = b.Fc, g._dl_ = b.Mc, g._g2_ = b.Ec, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = nb(ob, {
                    basename: d
                });
                fb(d)
            }
            return c.return(b)
        })
    };
    sb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (qb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (rb || (rb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    ub = function(a) {
        return tb && null != a && a instanceof Uint8Array
    };
    wb = function(a) {
        if (a !== vb) throw Error("illegal external caller");
    };
    yb = function(a, b) {
        if (xb) return a[xb] |= b;
        if (void 0 !== a.Oa) return a.Oa |= b;
        Object.defineProperties(a, {
            Oa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    };
    zb = function(a, b) {
        xb ? a[xb] && (a[xb] &= ~b) : void 0 !== a.Oa && (a.Oa &= ~b)
    };
    Ab = function(a) {
        var b;
        xb ? b = a[xb] : b = a.Oa;
        return null == b ? 0 : b
    };
    Bb = function(a, b) {
        xb ? a[xb] = b : void 0 !== a.Oa ? a.Oa = b : Object.defineProperties(a, {
            Oa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    Cb = function(a) {
        yb(a, 1);
        return a
    };
    Db = function(a) {
        return !!(Ab(a) & 2)
    };
    Eb = function(a) {
        yb(a, 2);
        return a
    };
    Fb = function(a) {
        yb(a, 16);
        return a
    };
    Gb = function(a, b) {
        Bb(b, (a | 0) & -51)
    };
    Ib = function(a, b) {
        Bb(b, (a | 18) & -41)
    };
    Jb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Lb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Ob = function(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Mb(a, vb) : Nb();
            else if (a.constructor !== Mb)
            if (ub(a)) a = a.length ? new Mb(new Uint8Array(a), vb) : Nb();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    Pb = function(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Jb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    Rb = function(a, b) {
        Qb = b;
        a = new a.constructor(b);
        Qb = void 0;
        return a
    };
    Sb = function(a, b) {
        Qb = b;
        a = new a(b);
        Qb = void 0;
        return a
    };
    Tb = function(a) {
        return a
    };
    Ub = function(a) {
        return a
    };
    Vb = function(a) {
        return a
    };
    Xb = function(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Wb === Wb) return a;
        if (d) return new b(a);
        if (c) return new b
    };
    Yb = function(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    };
    $b = function(a, b, c, d) {
        a = Xb(a, b, !0);
        c ? Eb(a.ba) : d && (a = Zb(a));
        return a
    };
    ac = function(a) {
        return a
    };
    bc = function(a) {
        return a
    };
    cc = function(a) {
        return a
    };
    ec = function(a, b) {
        a = a || {};
        b = b || {};
        var c = {},
            d;
        for (d in a) Lb(a, d) && (c[d] = 0);
        for (var e in b) Lb(b, e) && (c[e] = 0);
        for (var f in c)
            if (Lb(c, f) && !dc(a, f, a[f], b, f, b[f])) return !1;
        return !0
    };
    fc = function(a) {
        return a && "object" === typeof a && a.Wb === Wb
    };
    gc = function(a, b) {
        if (null == b) return !1;
        a = a.j;
        b = b.j;
        if (a.size != b.size) return !1;
        for (var c = _.t(a, "entries").call(a), d; !(d = c.next()).done;) {
            d = d.value;
            var e = d[0];
            if (!dc(a, e, d[1], b, e, b.get(e))) return !1
        }
        return !0
    };
    hc = function(a, b, c) {
        null != a && (a instanceof w.Map ? a.set(b, c) : a[b] = c);
        return c
    };
    jc = function(a, b, c, d) {
        if (null == d) d = [];
        else if (!Array.isArray(d)) return null;
        return hc(b, c, ic(a, d))
    };
    kc = function(a, b) {
        return null == b ? !1 : dc(void 0, void 0, a.ba, void 0, void 0, b.ba)
    };
    lc = function(a, b, c) {
        var d = Ob(c, !0);
        return null == d ? null : d === c ? d : hc(a, b, d)
    };
    dc = function(a, b, c, d, e, f) {
        if (c == f) return !0;
        if (c instanceof Mb || ub(c)) return c = lc(a, b, c), f = lc(d, e, f), f instanceof Mb && mc(c, f);
        if (f instanceof Mb || ub(f)) return c = lc(a, b, c), f = lc(d, e, f), c instanceof Mb && mc(f, c);
        if (fc(c)) return a = c, kc(a, fc(f) ? f : Array.isArray(f) ? hc(d, e, Rb(a, f)) : null);
        if (fc(f)) return kc(f, Array.isArray(c) ? hc(a, b, Rb(f, c)) : null);
        if (c instanceof nc) return gc(c, f instanceof nc ? f : jc(c, d, e, f));
        if (f instanceof nc) return gc(f, jc(f, a, b, c));
        if (null == c && Array.isArray(f) && Ab(f) & 1 && !f.length || null == f && Array.isArray(c) && Ab(c) & 1 && !c.length) return !0;
        if (!_.ka(c) || !_.ka(f)) return "number" === typeof c && isNaN(c) || "number" === typeof f && isNaN(f) ? String(c) == String(f) : !1;
        if (c.constructor != f.constructor) return !1;
        if (c.constructor === Array) {
            a = c;
            c = b = void 0;
            d = Math.max(a.length, f.length);
            for (e = 0; e < d; e++) {
                var g = a[e],
                    h = f[e];
                g && e == a.length - 1 && Jb(g) && (b = g, g = void 0);
                h && e == f.length - 1 && Jb(h) && (c = h, h = void 0);
                if (!dc(a, e, g, f, e, h)) return !1
            }
            return b || c ? (b = b || {}, c = c || {}, ec(b, c)) : !0
        }
        if (c.constructor === Object) return ec(c, f);
        throw Error("Invalid type in JSPB array");
    };
    rc = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (Ab(a) & 128)) return a = Array.prototype.slice.call(a), Pb(a), a
                    } else {
                        if (ub(a)) return oc(a);
                        if (a instanceof Mb) return pc(a);
                        if (a instanceof nc) return qc(a)
                    }
        }
        return a
    };
    tc = function(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = sc(a, b, c, void 0 !== d);
            else if (Jb(a)) {
                var e = {},
                    f;
                for (f in a) Lb(a, f) && (e[f] = tc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    };
    sc = function(a, b, c, d) {
        var e = Ab(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = tc(a[f], b, c, d);
        c(e, a);
        return a
    };
    wc = function(a) {
        return tc(a, uc, vc)
    };
    uc = function(a) {
        return a.Wb === Wb ? a.toJSON() : a instanceof nc ? qc(a, wc) : rc(a)
    };
    yc = function(a) {
        return tc(a, xc, vc)
    };
    xc = function(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (ub(a)) return new Uint8Array(a);
            if (a instanceof nc) return a.size ? ic(a, Fb(zc(a, yc))) : [];
            if (a.Wb === Wb) return Ac(a)
        }
        return a
    };
    vc = function(a, b) {
        a & 128 && Pb(b)
    };
    Cc = function(a, b, c, d) {
        a.m && (a.m = void 0);
        if (b >= a.j || d) return Bc(a)[b] = c, a;
        a.ba[b + a.gb] = c;
        (c = a.Da) && b in c && delete c[b];
        return a
    };
    Ec = function(a, b, c, d, e) {
        var f = y(a, b, d);
        Array.isArray(f) || (f = Dc);
        var g = Ab(f);
        g & 1 || Cb(f);
        if (e) g & 2 || Eb(f), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && zb(f, 16) : (f = Cb(Array.prototype.slice.call(f)), Cc(a, b, f, d))
        }
        return f
    };
    Gc = function(a, b, c, d) {
        var e = Db(a.ba),
            f = Ec(a, b, 1, d, e),
            g = Ab(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = Cb(f.slice()), Cc(a, b, f, d));
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            yb(f, 5);
            e && (Eb(f), Object.freeze(f))
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), yb(f, 5), Fc(a, b, f, d));
        return f
    };
    Hc = function(a) {
        return Ob(a, !0)
    };
    Jc = function(a, b, c) {
        var d = !1;
        if (null == b) {
            if (c) return Ic || (Ic = new nc(Eb([])));
            b = []
        } else if (b.constructor === nc) {
            if (0 == (b.m & 2) || c) return b;
            b = zc(b)
        } else Array.isArray(b) ? d = Db(b) : b = [];
        if (c) {
            if (!b.length) return Ic || (Ic = new nc(Eb([])));
            d || (d = !0, Eb(b))
        } else if (d)
            for (d = !1, b = Array.prototype.slice.call(b), c = 0; c < b.length; c++) {
                var e = b[c] = Array.prototype.slice.call(b[c]);
                Array.isArray(e[1]) && (e[1] = Eb(e[1]))
            }
        d || (Ab(b) & 32 ? zb(b, 16) : Ab(a.ba) & 16 && Fb(b));
        d = new nc(b, void 0);
        Cc(a, 26, d, !1);
        return d
    };
    _.z = function(a, b, c, d) {
        Kc(a);
        c !== d ? Cc(a, b, c) : Cc(a, b, void 0, !1);
        return a
    };
    Lc = function(a, b, c, d, e, f) {
        a.Aa || (a.Aa = {});
        var g = a.Aa[c],
            h = Ec(a, c, 3, d, f);
        if (g) f || (Object.isFrozen(g) ? e || (g = Array.prototype.slice.call(g), a.Aa[c] = g) : e && Object.freeze(g));
        else {
            g = [];
            var k = !!(Ab(a.ba) & 16),
                l = Db(h);
            !f && l && (h = Cb(Array.prototype.slice.call(h)), Cc(a, c, h, d));
            d = l;
            for (var n = 0; n < h.length; n++) {
                var m = h[n];
                var p = b;
                var r = k,
                    u = !1;
                u = void 0 === u ? !1 : u;
                r = void 0 === r ? !1 : r;
                p = Array.isArray(m) ? new p(r ? Fb(m) : m) : u ? new p : void 0;
                void 0 !== p && (d = d || Db(m), g.push(p), l && Eb(p.ba))
            }
            a.Aa[c] = g;
            a = h;
            Object.isFrozen(a) || (b = Ab(a) | 33, Bb(a, d ? b & -9 : b | 8));
            (f || e && l) && Eb(g);
            (f || e) && Object.freeze(g)
        }
        return g
    };
    Mc = function(a, b) {
        return null == a ? b : a
    };
    Pc = function(a) {
        var b = Ab(a);
        if (b & 2) return a;
        a = _.Nc(a, Oc);
        Ib(b, a);
        Object.freeze(a);
        return a
    };
    Qc = function(a, b, c) {
        c = void 0 === c ? Ib : c;
        if (null != a) {
            if (tb && a instanceof Uint8Array) return a.length ? new Mb(new Uint8Array(a), vb) : Nb();
            if (Array.isArray(a)) {
                var d = Ab(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Bb(a, d | 2), a;
                a = sc(a, Qc, c, !0);
                b = Ab(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Wb === Wb ? Oc(a) : a instanceof nc ? ic(a, Eb(zc(a, Qc))) : a
        }
    };
    Oc = function(a) {
        if (Db(a.ba)) return a;
        a = Rc(a, !0);
        Eb(a.ba);
        return a
    };
    Rc = function(a, b) {
        var c = a.ba,
            d = Fb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        a.Da && (d.length = c.length, _.t(d, "fill").call(d, void 0, d.length, c.length), d[d.length - 1] = {});
        0 !== (Ab(c) & 128) && Pb(d);
        b = b || Db(a.ba) ? Ib : Gb;
        d = Sb(a.constructor, d);
        a.yb && (d.yb = a.yb.slice());
        e = !!(Ab(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (f === c.length - 1 && Jb(g))
                for (var h in g) {
                    var k = +h;
                    if (_.t(Number, "isNaN").call(Number, k)) Bc(d)[k] = g[k];
                    else {
                        var l = g[h],
                            n = a.Aa && a.Aa[k];
                        n ? Sc(d, k, Pc(n), !0) : _.A(d, k, Qc(l, e, b), !0)
                    }
                } else k = f - a.gb, (l = a.Aa && a.Aa[k]) ? Sc(d, k, Pc(l), !1) : _.A(d, k, Qc(g, e, b), !1)
        }
        return d
    };
    Tc = function(a, b) {
        if (Array.isArray(a)) {
            var c = Ab(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Bb(a, c | d)
        }
    };
    Uc = function(a, b) {
        return rc(b)
    };
    Xc = function(a, b) {
        b.yb && (a.yb = b.yb.slice());
        var c = b.Aa;
        if (c) {
            b = b.Da;
            for (var d in c)
                if (Lb(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = Wc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Xc(f[g], e[g])
                        } else throw Error("unexpected object: type: " + Yc(e) + ": " + e);
                    }
                }
        }
    };
    bd = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.B(Zc(c, a)), b = c.next().value, a = c.next().value, c = b);
        $c = c >>> 0;
        ad = a >>> 0
    };
    dd = function(a) {
        if (16 > a.length) bd(Number(a));
        else if (cd) a = BigInt(a), $c = Number(a & BigInt(4294967295)) >>> 0, ad = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            ad = $c = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), ad *= 1E6, $c = 1E6 * $c + d, 4294967296 <= $c && (ad += $c / 4294967296 | 0, $c %= 4294967296);
            b && (b = _.B(Zc($c, ad)), a = b.next().value, b = b.next().value, $c = a, ad = b)
        }
    };
    Zc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    hd = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Lb(c, e)) {
                    var f = c[e],
                        g = f.Zf;
                    g || (d.Jb = f.sh || f.Ah.Pc, f.ve ? (d.Uc = ed(f.ve), g = function(h) {
                        return function(k, l, n) {
                            return h.Jb(k, l, n, h.Uc)
                        }
                    }(d)) : f.mf ? (d.Tc = fd(f.Je.Hd, f.mf), g = function(h) {
                        return function(k, l, n) {
                            return h.Jb(k, l, n, h.Tc)
                        }
                    }(d)) : g = d.Jb, f.Zf = g);
                    g(b, a, f.Je)
                }
                d = {
                    Jb: d.Jb,
                    Uc: d.Uc,
                    Tc: d.Tc
                }
            }
        }
        gd(b, a)
    };
    kd = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (id in c || jd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    ed = function(a) {
        var b = a[ld];
        if (!b) {
            var c = md(a);
            b = function(d, e) {
                return nd(d, e, c)
            };
            a[ld] = b
        }
        return b
    };
    fd = function(a, b) {
        var c = a[ld];
        c || (c = function(d, e) {
            return hd(d, e, b)
        }, a[ld] = c);
        return c
    };
    od = function(a, b) {
        a.push(b)
    };
    pd = function(a, b, c) {
        a.push(b, c.Pc)
    };
    qd = function(a, b, c, d) {
        var e = ed(d),
            f = md(d).Hd,
            g = c.Pc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    rd = function(a, b, c, d, e, f) {
        var g = fd(d, f),
            h = c.Pc;
        a.push(b, function(k, l, n) {
            return h(k, l, n, d, g)
        })
    };
    md = function(a) {
        var b = a[jd];
        if (b) return b;
        b = a[jd] = [];
        var c = od,
            d = pd,
            e = qd,
            f = rd;
        b.Hd = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = kd(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = kd(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        id in a && jd in a && (a.length = 0);
        return b
    };
    nd = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        hd(a, b, e ? c[0] : void 0)
    };
    sd = function(a, b) {
        return {
            zh: a,
            Pc: b
        }
    };
    wd = function(a, b, c) {
        b = y(b, c);
        null != b && ("string" === typeof b && td(b), null != b && (ud(a.j, 8 * c), "number" === typeof b ? (a = a.j, bd(b), vd(a, $c, ad)) : (c = td(b), vd(a.j, c.m, c.j))))
    };
    xd = function(a) {
        return a
    };
    zd = function(a, b) {
        var c = yd;
        yd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    Ad = function(a, b, c) {
        zd(a, b, c);
        return a
    };
    Bd = function(a, b, c) {
        b = yd;
        yd = void 0;
        if (!a) {
            if (b) throw Error(b());
            if (c && 0 < c.length) throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    };
    Cd = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Ed = function(a) {
        var b = document;
        if (a.length && b.head) {
            a = _.B(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = _.Dd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    Jd = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.B(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.B(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || Fd(h, b))) {
                        f = _.B(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Gd(function(f) {
            if (!f.parent || !Hd(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (Id(g[h]) == f) {
                    Jd(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    Kd = function(a) {
        a = void 0 === a ? _.q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    C = function(a) {
        var b = bb.apply(1, arguments);
        if (0 === b.length) return Ld(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ld(c.join(""))
    };
    Md = function(a, b) {
        var c = Va(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ld(c)
    };
    Nd = function(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.ke] = b.message.toJSON(), c)]
        })])
    };
    Pd = function(a) {
        a.je.apply(a, _.Od(bb.apply(1, arguments).map(function(b) {
            return {
                ke: 2,
                message: b
            }
        })))
    };
    Qd = function(a) {
        a.je.apply(a, _.Od(bb.apply(1, arguments).map(function(b) {
            return {
                ke: 5,
                message: b
            }
        })))
    };
    Rd = function(a) {
        a && "function" == typeof a.Ca && a.Ca()
    };
    Td = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.Dd("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && fa(a.google_image_requests, e);
                _.Sd(e, "load", f);
                _.Sd(e, "error", f)
            };
            _.eb(e, "load", f);
            _.eb(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    Vd = function() {
        var a = Ud;
        return (0, D.gd)(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }, function() {
            return "unknown enum"
        })
    };
    Xd = function() {
        var a = Wd;
        return (0, D.gd)(function(b) {
            return b instanceof a
        }, function() {
            return (0, D.functionName)(a)
        })
    };
    ke = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Yd(Zd, d);
            if (d) {
                var f = Yd(Zd, d);
                $d(f, ae(be(1), -1));
                ce(f)
            }
        } catch (g) {
            de(d), e = new Zd
        }
        if (c = (E = Wc(e, ee, 1), _.t(E, "find")).call(E, function(g) {
                return fe(g, 1, 0) === b
            }))
            if (f = ge(c, 2), null === f || isNaN(f)) de(d);
            else return f;
        d = he() ? null : Math.floor(1E3 * ie());
        if (null === d) return null;
        c ? ae(c, d) : $d(e, ae(be(b), d));
        return je(a, ce(e)) ? d : null
    };
    de = function(a) {
        .01 > Math.random() && le({
            data: a
        }, "ls_tamp")
    };
    me = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ae: b.__uspapiReturn.callId
        }
    };
    ne = function(a, b) {
        b = void 0 === b ? window : b;
        if (F(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    oe = function(a) {
        return "null" !== a.origin
    };
    qe = function(a, b, c) {
        b = F(b, 5) && oe(c) ? c.document.cookie : null;
        return null === b ? null : (new pe({
            cookie: b
        })).get(a) || ""
    };
    _.se = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : re()
    };
    _.te = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    ue = function(a, b) {
        b = void 0 === b ? _.q : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    ve = function(a) {
        a = void 0 === a ? _.q : a;
        var b = Math.min(ue("domLoading", a) || Infinity, ue("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(ue("responseEnd", a), ue("navigationStart", a)) : b
    };
    Ce = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = we.j();
        0 === e.j && (e.j = Math.random() < _.xe(ye) ? 2 : 1);
        2 === e.j && (e = {}, le(_.t(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(ze(window)), e.em = c, e.lid = b, e.eids = _.Ae(Be).j().join(), e), d), "esp"))
    };
    Je = function(a, b, c, d) {
        Ce(18, a);
        try {
            var e = _.se();
            _.xe(De) && (_.A(b, 8, Number(((0, D.J)(Ee(b, 8)) - 1).toFixed(3))), _.A(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Ce(29, a, null, {
                    delta: String(_.se() - e)
                });
                if (null == f) return Ce(41, a), Fe(b, 111, d), b;
                null != f && ("string" !== typeof f ? Ce(21, a) : f.length || Ce(20, a));
                Ge(_.A(b, 2, f), 10);
                He().set(b, d) && Ce(27, a);
                return b
            }).catch(function(f) {
                Fe(b, 106, d);
                Ce(28, a, Ie(f));
                return b
            })
        } catch (f) {
            return Fe(b, 107, d), Ce(1, a, Ie(f)), w.Promise.resolve(b)
        }
    };
    Fe = function(a, b, c) {
        var d;
        Ke(a, Le(null != (d = Me(a, Ne, 10)) ? d : new Ne, b));
        He().set(a, c)
    };
    Oe = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new w.Promise(function(c) {
            var d = function() {
                c(b());
                _.Sd(a, "load", d)
            };
            _.eb(a, "load", d)
        })
    };
    Pe = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    Ze = function(a, b, c, d) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        d = void 0 === d ? [] : d;
        var e = _.xe(Qe),
            f = new Re,
            g = Se(c, b),
            h = (E = g.map(function(k) {
                return k.Qb()
            }), _.t(E, "flatMap")).call(E, function(k) {
                return k
            }).map(function(k) {
                return k.na()
            });
        Te(f, a, b, e, h);
        Ue(f, g, c, b, e);
        _.G(Ve) && Ue(f, d, c, b, e);
        return Wc(f, We, 2).length ? oc(Xe(f, Ye), 3) : null
    };
    Ue = function(a, b, c, d, e) {
        if (d && c && "function" === typeof c.getUserIdsAsEidBySource) {
            b = _.B(b);
            for (var f = b.next(); !f.done; f = b.next())
                if (f = f.value, String(f.Ra()) === d) {
                    f = _.B(f.Qb());
                    for (var g = f.next(); !g.done; g = f.next())
                        if (g = g.value.na(), !$e(a, g)) {
                            var h = null;
                            try {
                                var k = void 0,
                                    l = void 0,
                                    n = void 0;
                                h = null == (k = c.getUserIdsAsEidBySource(g)) ? void 0 : null == (l = k.uids) ? void 0 : null == (n = l[0]) ? void 0 : n.id
                            } catch (m) {
                                k = void 0, Ce(45, g, null == (k = m) ? void 0 : k.message)
                            }
                            h && (h.length > e ? (k = {}, Ce(12, g, null, (k.sl = String(h.length), k.fp = "1", k))) : (k = af(g), h = _.A(k, 2, h), h = _.A(h, 11, !0), bf(a, 2, We, h), h = {}, Ce(19, g, null, (h.fp = "1", h))))
                        }
                }
        }
    };
    Te = function(a, b, c, d, e) {
        if (b)
            for (var f = _.xe(cf), g = _.B(Pe(b)), h = g.next(); !h.done; h = g.next())
                if (h = h.value, !_.t(e, "includes").call(e, h)) {
                    var k = He().get(h, b).sb;
                    if (k) {
                        var l = df(k);
                        if (2 !== l && 3 !== l) {
                            var n = !1;
                            if (c && (l = /^(\d+)$/.exec(h)) && !(n = _.t(c.split(","), "includes").call(c.split(","), l[1]))) continue;
                            _.A(k, 9, n);
                            l = y(k, 2);
                            n = n ? f : d;
                            0 <= n && l && l.length > n && (n = {}, Ce(12, h, null, (n.sl = String(l.length), n)), Fe(k, 108, b), Ge(k, 2));
                            bf(a, 2, We, k);
                            Ce(19, h)
                        }
                    }
                }
    };
    Se = function(a, b) {
        if (!b || "function" !== typeof(null == a ? void 0 : a.getUserIdsAsEidBySource)) return [];
        a = [];
        for (var c = _.B(ef(ff)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = null;
            try {
                e = Yd(gf, d)
            } catch (f) {
                d = void 0;
                Ce(44, "UNKNOWN_ID", null == (d = f) ? void 0 : d.message);
                continue
            }
            e.Ra() === b && a.push(e)
        }
        return a
    };
    $e = function(a, b) {
        return Wc(a, We, 2).some(function(c) {
            return c.na() === b && jf(c, 2)
        })
    };
    kf = function(a, b) {
        var c, d, e;
        return _.gb(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.lc
            }) : a, hb(f, w.Promise.all(c.map(function(g) {
                return g.xb.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.lc
                });
                e = _.se();
                return hb(f, w.Promise.race([w.Promise.all(d.map(function(g) {
                    return g.xb.promise
                })), new w.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.se() - e)
        })
    };
    lf = function(a) {
        var b = function(c) {
            var d = {};
            Ce(c, (0, D.J)(a.na()), null, (d.tic = String(Math.round((Date.now() - (0, D.J)(y(a, 3))) / 6E4)), d))
        };
        switch (df(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                break;
            case 2:
                b(26);
                break;
            case 3:
                Ce(9, (0, D.J)(a.na()));
                break;
            case 4:
                b(23)
        }
    };
    mf = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Cf = function(a, b, c, d) {
        var e, f, g, h, k, l, n, m, p, r, u, v, x, I, K;
        return _.gb(function(M) {
            e = new nf;
            f = _.xe(De);
            g = new of (a, c, d);
            h = new pf(g.o, c, d);
            k = new qf(g.l, f, d);
            l = new rf(k.l, f, d);
            n = new sf(l.o, f, d);
            m = new pf(n.o, c, d);
            r = p = null;
            _.G(tf) ? (u = new uf(n.l, d), H(e, u), p = u.o, v = new vf(u.l, f, d), H(e, v), x = new wf(b, v.l, d), H(e, x), H(e, new pf(x.l, c, d)), H(e, new xf(x.l, _.xe(Qe), _.xe(cf), d)), r = function() {
                var S, T, Z;
                return _.gb(function(ba) {
                    return 1 == ba.j ? (Z = a, hb(ba, x.l.promise, 2)) : ba.return({
                        id: Z,
                        collectorGeneratedData: null != (T = null == (S = ba.m) ? void 0 : y(S, 2)) ? T : null
                    })
                })
            }) : (I = new yf(b, n.l, c, d), H(e, I), p = I.F, r = function() {
                var S;
                return _.gb(function(T) {
                    return 1 == T.j ? hb(T, I.l.promise, 2) : T.return(null != (S = T.m) ? S : {
                        id: a,
                        collectorGeneratedData: null
                    })
                })
            });
            K = new zf(b, p, c, d);
            Af(e, [g, h, k, l, n, m, K]);
            Bf(e);
            return M.return(r())
        })
    };
    If = function(a, b, c) {
        b ? Df() === Ef(window) || _.G(Ff) ? Gf(a, "encryptedSignalProviders", c) && Gf(a, "secureSignalProviders", c) || (Ce(38, ""), Hf(a, "encryptedSignalProviders", b, c), Hf(a, "secureSignalProviders", b, c)) : Ce(16, "") : Ce(15, "")
    };
    Gf = function(a, b, c) {
        return a[b] instanceof Jf ? (a[b].addErrorHandler(c), !0) : !1
    };
    Hf = function(a, b, c, d) {
        var e, f = new Kf(null != (e = a[b]) ? e : [], c);
        a[b] = new Jf(f);
        f.addErrorHandler(d)
    };
    Nf = function(a, b) {
        var c = new nf,
            d = new Lf(b);
        a = new Mf(d.A, a, b);
        Af(c, [d, a]);
        Bf(c)
    };
    Rf = function(a, b, c, d) {
        if (!c) return null;
        var e = b.toString();
        if (Of.has(e)) return null;
        Of.add(e);
        var f = _.xe(De);
        e = new nf;
        a = new of (a, c, d);
        var g = new pf(a.o, c, d),
            h = new Pf(a.l, d),
            k = new qf(h.l, f, d);
        f = new sf(k.l, f, d);
        var l = new pf(f.o, c, d);
        b = new Qf(f.l, b, d);
        c = new pf(b.l, c, d);
        Af(e, [a, g, h, k, f, l, b, c]);
        Bf(e);
        return e
    };
    Sf = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(E = c.allowedFeatures(), _.t(E, "includes")).call(E, a))
    };
    ig = function(a) {
        var b = void 0 === b ? Tf : b;
        var c = _.t(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.t(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.t(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? e : void 0
        };
        if (a)
            for (e = _.B(_.t(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.B(a.value), a = c.next().value, c = c.next().value, (0, D.be)(Uf.test(a)), d[a] = c;
        if (!Vf.test("div")) throw Error("");
        if ("DIV" in Wf) throw Error("");
        e = "";
        if (d)
            for (f in d)
                if (Object.prototype.hasOwnProperty.call(d, f)) {
                    if (!Vf.test(f)) throw Error("");
                    c = d[f];
                    if (null != c) {
                        a = f;
                        if (c instanceof Xf) c = Yf(c);
                        else {
                            if ("style" == a.toLowerCase()) throw Error("");
                            if (/^on/i.test(a)) throw Error("");
                            if (a.toLowerCase() in Zf)
                                if (c instanceof $f) c = Va(c).toString();
                                else if (c instanceof Na) c = Oa(c);
                            else if ("string" === typeof c) c instanceof Na || (c = "object" == typeof c && c.Ta ? c.Na() : String(c), ag.test(c) ? c = _.cb(c) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(bg) ? _.cb(c) : null)), c = (c || _.cg).Na();
                            else throw Error("");
                        }
                        c.Ta && (c = c.Na());
                        a = a + '="' + dg(String(c)) + '"';
                        e += " " + a
                    }
                }
        var f = "<div" + e;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === eg.div ? f += ">" : (d = fg(b), f += ">" + Ya(d).toString() + "</div>");
        return new gg(f, hg)
    };
    pg = function(a) {
        jg();
        var b = kg.googleToken[5] || 0;
        a && (0 != b || lg[3] >= re() ? mg.zd(a) : (mg.Ac().push(a), mg.de()));
        lg[3] >= re() && lg[2] >= re() || mg.de()
    };
    qg = function(a) {
        a = _.Nc(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    sg = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.rg(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ma(a);
        oa(a, function(b, c) {
            return b - c
        });
        return a
    };
    tg = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    xg = function(a, b, c, d) {
        var e = new _.ug,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.Sd(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (n) {}
            },
            h = vg(a);
        return h ? (_.eb(a, "message", g), f = c(h), e.promise) : (c = wg(a)) ? (f = String(Math.floor(2147483647 * ie())), _.eb(a, "message", g), b(c, f), e.promise) : null
    };
    yg = function(a) {
        return xg(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    zg = function(a) {
        return !!vg(a) || !!wg(a)
    };
    vg = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    wg = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    Ag = function(a) {
        var b, c;
        return null != (c = (E = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.t(E, "find")).call(E, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Bg = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    Dg = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.B(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Cg(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent)
                        if (k = Cg(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Eg = function(a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++)
            for (var h = 0; h < b; h++) {
                var k = f,
                    l = b - 1,
                    n = e - 1;
                k.push.call(k, {
                    x: (0 === l ? 0 : h / l) * a,
                    y: c + (0 === n ? 0 : g / n) * (d - c)
                })
            }
        return f
    };
    Cg = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Fg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= _.Gg(_.Hg, a).width && 1 >= _.Gg(_.Hg, a).height ? !0 : !1;
        if (d) {
            var f, g;
            d.j("ach_evt", {
                url: b.location.href,
                tn: a.tagName,
                id: null != (f = a.getAttribute("id")) ? f : "",
                cls: null != (g = a.getAttribute("class")) ? g : "",
                ign: String(e),
                pw: b.innerWidth,
                ph: b.innerHeight,
                x: c.x,
                y: c.y
            }, !0, 1)
        }
        return e ? null : a
    };
    Ig = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.rg(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Kg = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Jg(d, function(e) {
                    return !_.t(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Ig(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Lg = function(a, b) {
        .001 > ie() && le({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    Mg = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.Pg = function(a) {
        _.Ae(Ng).j = !0;
        return Og[a]
    };
    Tg = function(a) {
        var b = new Qg;
        b = _.z(b, 1, Date.now(), 0);
        b = _.z(b, 2, a.pvsid, 0);
        b = _.z(b, 3, a.Ja, "");
        var c = _.Ae(Be).j();
        b = Fc(b, 4, c);
        b = _.z(b, 5, a.jf, 0);
        a = _.z(b, 12, a.Ee, "");
        var d;
        if (b = null == (d = w.globalThis.performance) ? void 0 : d.memory) {
            d = new Rg;
            try {
                _.z(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                _.z(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                _.z(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && _.Sg(a, 10, d);
        return a
    };
    Xg = function(a) {
        var b = ve();
        if (a.bc) {
            var c = a.qb;
            a = Tg(a);
            var d = new Ug;
            b = _.z(d, 2, b, 0);
            b = Vg(a, 6, Wg, b);
            Qd(c, b)
        }
    };
    J = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = bb.apply(0, arguments),
                f = _.Yg(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.bc && a.Hf) {
                    var h = a.qb,
                        k = Tg(a);
                    var l = _.z(k, 5, a.hf, 0);
                    var n = new Zg;
                    var m = _.z(n, 1, b, 0);
                    var p = _.z(m, 2, g, 0);
                    var r = Vg(l, 9, Wg, p);
                    Qd(h, r)
                }
            } catch (u) {}
            return f
        }
    };
    _.Yg = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = bb.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Ae($g);
            try {
                var l = _.G(ah);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (n) {
                try {
                    if (g) bh.call(this, a, 110, n);
                    else if (bh.call(this, a, b, n), !d) throw n;
                } catch (m) {
                    if ((e = h) && ch && dh() && (ch.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), ch.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw n;
                }
            }
            return f
        }
    };
    _.eh = function(a, b, c, d) {
        return _.Yg(a, b, c, void 0 === d ? !1 : d)()
    };
    bh = function(a, b, c) {
        if (a.ie) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new fh,
                e = new gh;
            try {
                var f = ze(window);
                _.z(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = _.Ae(Be).j();
                Fc(e, 2, g)
            } catch (p) {}
            try {
                _.z(e, 3, window.document.URL, "")
            } catch (p) {}
            f = _.Sg(d, 2, e);
            g = new hh;
            b = _.z(g, 1, b, 0);
            try {
                var h = ih(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.z(b, 2, h, "")
            } catch (p) {}
            try {
                var k = ih(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.z(b, 3, k, "")
            } catch (p) {}
            try {
                var l = ih(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.jh(b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = _.Sg(f, 1, b);
            k = new kh;
            try {
                _.z(k, 1, a.eb || a.Ja, "")
            } catch (p) {}
            try {
                var n = lh();
                _.z(k, 2, n, 0)
            } catch (p) {}
            try {
                var m = [].concat(_.Od(_.t(mh, "keys").call(mh)));
                _.jh(k, 3, m)
            } catch (p) {}
            Vg(h, 4, nh, k);
            _.z(h, 5, a.Jd, 0);
            Pd(a.qb, h)
        }
    };
    ph = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.t(a, "find").call(a, function(e) {
            e = (0, D.J)(Me(e, oh, 1));
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : Wc(c, oh, 2)) ? d : null
    };
    th = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Wc(a, qh, 6).length ? ph(Wc(a, qh, 6), rh(sh(new oh, b), c)) : Wc(a, oh, 5)
    };
    vh = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = uh(!1, b), c = th(a, b.width, b.height));
        null != c || (c = th(a));
        return null == c ? [] : c.map(function(d) {
            return F(d, 3) ? "fluid" : [(0, D.ta)(d.getWidth()), (0, D.ta)(d.getHeight())]
        })
    };
    yh = function(a) {
        if (!vh(a).length && wh(a, xh, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.B(vh(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Ah = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(yh(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? zh(c.join(":")).toString() : "0"
    };
    Bh = function(a) {
        return 0 !== a && 1 !== a
    };
    Ch = function(a, b) {
        var c;
        return !(null != (c = F(b, 22)) ? !c : !F(a, 15))
    };
    Eh = function(a) {
        var b = a.document;
        return Dh(a) ? b.URL : b.referrer
    };
    Hh = function(a) {
        try {
            return Fh(a, window.top)
        } catch (b) {
            return new _.Gh(-12245933, -12245933)
        }
    };
    Kh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Gg(Ih, a), a = new _.Jh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Mh = function(a, b) {
        for (var c = {}, d = _.B(_.t(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = Ac(b[e]),
                g = _.Ae(Lh),
                h = g.j.get(e);
            null == h ? h = ++_.Ae($g).D : g.j.delete(e);
            _.A(f, 20, h);
            c[e] = f
        }
        return {
            V: Ac(a),
            R: c
        }
    };
    Oh = function() {
        for (var a = "", b = _.B(Nh()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Nh = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Vh = function(a, b, c, d) {
        var e = Ph(b, a) || Qh(b, a);
        if (!e) return null;
        var f = Hh(e),
            g = e === Qh(b, a),
            h = Rh(function() {
                var p = g ? Qh(b, a) : e;
                return p && Sh(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = vh(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var n;
            f.y += Math.round(Math.min(null != (n = Th(k("padding-top"))) ? n : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var m;
                f.x += Math.round(Math.min(null != (m = Th(k("padding-left"))) ? m : 0, d))
            }
        }
        return f && Uh(e) ? f : new _.Gh(-12245933, -12245933)
    };
    Wh = function(a, b, c, d) {
        var e = Qh(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Vh(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Xh = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Yh = function(a) {
        return Xh(a) + "__container__"
    };
    Ph = function(a, b) {
        var c;
        return (null == (c = Qh(a, b)) ? void 0 : c.querySelector('[id="' + Yh(a) + '"]')) || null
    };
    Zh = function(a, b) {
        var c, d;
        return null != (d = null == (c = Ph(a, b)) ? void 0 : c.querySelector('iframe[id="' + Xh(a) + '"]')) ? d : null
    };
    Qh = function(a, b) {
        b = void 0 === b ? document : b;
        return $h().D.get(a) || b.getElementById(a.getDomId())
    };
    ai = function(a) {
        return Math.round(Number(Th(a)))
    };
    ci = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.bi(a, c), a = a.parentElement
    };
    di = function(a, b, c, d, e) {
        _.bi(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.bi(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.bi(a, f)), !0) : !1
    };
    fi = function(a, b, c, d, e, f, g, h, k) {
        var l = yh(d);
        _.q.setTimeout(_.Yg(a, 459, function() {
            return void ei(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    ei = function(a, b, c, d, e, f, g, h, k) {
        if (_.q.IntersectionObserver) {
            var l = null,
                n, m = null != (n = Zh(c, b)) ? n : Qh(c, b);
            n = _.Yg(a, 459, function(p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect,
                        u = window.innerWidth,
                        v = Math.round(r.left),
                        x = Math.round(r.right),
                        I = 0 > v + 2,
                        K = 0 < x - (u + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || I || K) gi(h, function(M) {
                        if (I || K) {
                            var S = new hi;
                            S.set(8);
                            ii(m) && S.set(10);
                            S = ji(S)
                        } else S = ki(b, c);
                        var T = li(c, m, f),
                            Z = T.bf;
                        T = T.cf;
                        mi(M, a);
                        L(M, "qid", k);
                        L(M, "iu", c.getAdUnitPath());
                        L(M, "e", String(S));
                        I && L(M, "ofl", String(v));
                        K && L(M, "ofr", String(x - u));
                        L(M, "ret", e + "x" + f);
                        L(M, "req", g);
                        L(M, "bm", String(d));
                        L(M, "efh", Number(Z));
                        L(M, "stk", Number(T));
                        L(M, "ifi", ni(window))
                    }, _.xe(oi)), l && l.unobserve((0, D.J)(m))
                }
            });
            m && (l = new _.q.IntersectionObserver(n, {
                threshold: [1]
            }), (0, D.J)(l).observe(m))
        }
    };
    ki = function(a, b) {
        var c = Zh(b, a) || Qh(b, a),
            d = new hi;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Qh(b, a),
                n = (0, D.J)(Sh(l, window));
            if ("hidden" === n.visibility || "none" === n.display) return ji(d);
            var m = ai(n.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + m + 2, g + m);
            var r = a.elementsFromPoint(b - m - 2, g + m);
            var u = a.elementsFromPoint(b - m - 2, k - m);
            var v = a.elementsFromPoint(f + m + 2, k - m);
            var x = a.elementsFromPoint(b / 2, k - m)
        } catch (K) {
            return d.set(1), ji(d)
        }
        if (!(p && p.length && r && r.length && u && u.length && v && v.length && x && x.length)) return d.set(7), ji(d);
        a = function(K, M) {
            for (var S = !1, T = 0; T < K.length; T++) {
                var Z = K[T];
                if (S) {
                    var ba = Sh(Z, window);
                    if ("hidden" !== ba.visibility && !pi(Z) && !I(c, Z)) {
                        d.set(M);
                        "absolute" === ba.position && d.set(11);
                        break
                    }
                } else c === Z && (S = !0)
            }
        };
        qi(c) && d.set(9);
        var I = function(K, M) {
            return ri(K, M) || ri(M, K)
        };
        f = p[0];
        c === f || I(c, f) || pi(f) || d.set(2);
        f = r[0];
        c === f || I(c, f) || pi(f) || d.set(3);
        f = u[0];
        c === f || I(c, f) || pi(f) || d.set(4);
        f = v[0];
        c === f || I(c, f) || pi(f) || d.set(5);
        if (pi(c)) return ji(d);
        a(p, 12);
        a(r, 13);
        a(u, 14);
        a(v, 15);
        a(x, 6);
        return ji(d)
    };
    ii = function(a) {
        var b = !1,
            c = !1;
        return si(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    li = function(a, b, c) {
        var d = (a = Qh(a)) && Sh(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        ti(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = ui(k, _.q, -1, -1);
                else {
                    l = l && l.height;
                    var n = (l && _.t(l, "endsWith").call(l, "px") ? ai(l) : 0) >= c;
                    !l || n || "string" === typeof l && _.t(vi, "includes").call(vi, l) || (e = !1)
                }
            f || (k = Sh(k, _.q), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            bf: e,
            cf: f
        }
    };
    ui = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.t(vi, "includes").call(vi, e.height) || (null == e ? 0 : e.maxHeight) && !_.t(wi, "includes").call(wi, e.maxHeight) || xi(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.t(vi, "includes").call(vi, g) || !!f && !_.t(wi, "includes").call(wi, f)
        }, c, d) ? !1 : !0
    };
    xi = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (M) {
                    if (15 == M.code) throw M.styleSheet = k, M;
                }
                h = l
            } catch (M) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var n = h[l],
                        m, p = c;
                    if (!(m = f.call(a, n.selectorText) && p(n))) a: {
                        var r = void 0;p = a;
                        var u = c,
                            v = e,
                            x = null != (r = n.cssRules) ? r : [];
                        for (r = 0; r < Math.min(x.length, v); r++) {
                            var I = x[r],
                                K = u;
                            if (f.call(p, I.selectorText) && K(I)) {
                                m = !0;
                                break a
                            }
                        }
                        m = !1
                    }
                    if (m) return !0
                } catch (M) {}
        }
        return !1
    };
    pi = function(a) {
        return si(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    qi = function(a) {
        return si(a, function(b) {
            var c;
            return (E = ["left", "right"], _.t(E, "includes")).call(E, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    yi = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Ci = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Ld(b), a.src = Va(b).toString())
    };
    Di = function(a) {
        if (!/^[0-9a-fA-F-]*$/.test(a)) throw Error("Expected a UUID in the RFC4122 v4 format but received " + a + " instead.");
        return Ld("uuid-in-package:" + a)
    };
    Fi = function(a, b, c) {
        c = void 0 === c ? Ei : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.eb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Gi = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Hi = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Ii = function(a) {
        if (a === a.top || Hd(a.top)) return w.Promise.resolve({
            status: 4
        });
        var b = Gi(a);
        if (!b) return w.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Hi(a.document.referrer)) return w.Promise.resolve({
            status: 3
        });
        var c = new _.ug;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                tc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Mi = function(a) {
        var b = void 0 === b ? Ji : b;
        var c = Ki(a);
        return c.messageChannelSendRequestFn ? w.Promise.resolve(c.messageChannelSendRequestFn) : new w.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Dd("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Va(b).toString();
            var g = (new URL(b.toString())).origin,
                h = Li({
                    destination: a,
                    Dc: f,
                    origin: g,
                    Ma: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Si = function(a, b, c, d, e, f) {
        function g(m, p) {
            h && le({
                timeMs: String((b.performance.now() - m).toFixed(2)),
                useCache: p ? "1" : "0"
            }, "topics_stats")
        }
        var h = _.G(Ni),
            k = (h = void 0 === h ? !1 : h) ? b.performance.now() : 0;
        c = Oi(f);
        var l = c.oc,
            n = c.nc;
        c = Ki(b);
        c.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics"
        }).then(function(m) {
            var p = n;
            if (m instanceof Uint8Array) p || (p = !(l instanceof Uint8Array && ta(m, l)));
            else if (Vd()(m)) p || (p = m !== l);
            else return m = Error(JSON.stringify(m)), bh(e.context, 989, m), 7;
            if (p && f) try {
                var r = new Pi;
                var u = _.A(r, 2, _.se());
                m instanceof Uint8Array ? Qi(u, 1, Ri, Ob(m, !1)) : Qi(u, 3, Ri, m);
                f.setItem("goog:cached:topics", ce(u))
            } catch (v) {}
            return m
        }), c.getTopicsPromise = (0, D.ta)(a));
        return l && !n ? (g(k, !0), w.Promise.resolve(l)) : c.getTopicsPromise.then(function(m) {
            g(k, !1);
            return m
        })
    };
    Oi = function(a) {
        if (!a) return {
            oc: null,
            nc: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                oc: null,
                nc: !0
            };
            var c = Yd(Pi, b),
                d = Ti(c, Ri);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = Ui(c, Ri, 1),
                        g = Vi(c, f);
                    var h = null == g ? Nb() : g;
                    var k = Wi(h);
                    e = k ? new Uint8Array(k) : Xi || (Xi = new Uint8Array(0));
                    break;
                case 3:
                    e = fe(c, Ui(c, Ri, 3), 0);
                    break;
                default:
                    Ra(d)
            }
            var l = Yi(c, 2) + 6048E5 < _.se();
            return {
                oc: e,
                nc: l
            }
        } catch (n) {
            return {
                oc: null,
                nc: !0
            }
        }
    };
    Ki = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    aj = function(a) {
        if (Ja()) {
            var b = a.document.documentElement.lang;
            Zi(a) ? $i(ze(a), !0, "", b) : (new MutationObserver(function(c, d) {
                Zi(a) && ($i(ze(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    Zi = function(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    };
    $i = function(a, b, c, d) {
        le({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    bj = function(a) {
        var b = "";
        Gd(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    dj = function(a) {
        a = (Hd(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!cj(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    gj = function(a, b) {
        var c = ej.get(a);
        c || (b = c = b(), fj.set(b, a), ej.set(a, b));
        return c
    };
    ij = function(a, b) {
        return (0, D.ta)(gj(b, function() {
            return new hj(a, b)
        }))
    };
    N = function(a) {
        return function() {
            return new jj(a, [].concat(_.Od(bb.apply(0, arguments))))
        }
    };
    kj = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? kj(b) : String(b)
        }).join(", ") + "]"
    };
    lj = function(a, b) {
        b = kj(b);
        b = b.substring(1, b.length - 1);
        return new jj(96, [a, b])
    };
    mj = function(a) {
        return (E = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.t(E, "includes")).call(E, a) ? a : null
    };
    oj = function(a, b, c) {
        return gj(c, function() {
            return new nj(a, b, c)
        })
    };
    qj = function(a, b, c) {
        return gj(c, function() {
            return new pj(a, b, c)
        })
    };
    rj = function() {
        var a;
        return null != (a = _.q.googletag) ? a : _.q.googletag = {
            cmd: []
        }
    };
    sj = function(a, b) {
        var c = rj();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    uj = function(a) {
        if (a = tj[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = rj())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    Bj = function(a) {
        var b = window;
        "complete" === _.q.document.readyState ? _.eh(a, 94, function() {
            rj()._pubconsole_disable_ || null !== vj(b) && wj(a, b)
        }) : _.eb(_.q, "load", _.Yg(a, 94, function() {
            rj()._pubconsole_disable_ || null !== vj(b) && wj(a, b)
        }));
        _.G(xj) || (sj("disablePublisherConsole", J(a, 93, yj)), sj("onPubConsoleJsLoad", J(a, 731, zj)), sj("openConsole", J(a, 732, function(c) {
            Aj(a, void 0 === c ? "" : c)
        })))
    };
    wj = function(a, b) {
        b = void 0 === b ? _.q : b;
        if (!Cj) {
            var c = new Dj("gpt_pubconsole_loaded");
            mi(c, a);
            L(c, "param", String(vj(b)));
            L(c, "api", String(Ej));
            Fj(c, 1);
            Gj(b.document, Hj);
            Cj = !0
        }
    };
    vj = function(a) {
        var b = Eh(a),
            c;
        return null != (c = (E = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.t(E, "find")).call(E, function(d) {
            return null !== Ij(b, d)
        })) ? c : null
    };
    yj = function() {
        rj()._pubconsole_disable_ = !0
    };
    zj = function() {
        Jj && ((0, D.J)(rj().console).openConsole(Kj), Kj = void 0, Jj = !1)
    };
    Aj = function(a, b) {
        b = void 0 === b ? "" : b;
        Ej = !0;
        var c;
        (null == (c = rj()) ? 0 : c.console) ? (0, D.J)(rj().console).openConsole(b): (b && (Kj = b), Jj = !0, wj(a))
    };
    Sj = function(a, b, c, d, e) {
        if ("string" !== typeof c || Lj(c)) O(e, lj("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : ra(d) ? f = _.t(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (E = Mj(b), _.t(E, "find")).call(E, function(g) {
                return Nj(g) === c
            })) ? Oj(d, f): (d = Oj(Pj(new Qj, c), f), bf(b, 9, Qj, d));
            e.info(Rj(c, f.join(), (0, D.J)(b.getAdUnitPath())), a)
        }
    };
    Tj = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.B(_.t(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, Sj(a, b, f, c[f], d);
        else d.error(lj("Slot.updateTargetingFromMap", [c]), a)
    };
    Vj = function(a, b, c) {
        return gj(c, function() {
            return new Uj(a, b, c, c.j)
        })
    };
    Wj = function(a) {
        return _.t(Object, "assign").call(Object, {}, a, _.t(Object, "fromEntries").call(Object, _.t(Object, "entries").call(Object, a).map(function(b) {
            b = _.B(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    ak = function() {
        var a = {},
            b = Wj(Xj);
        a.OutOfPageFormat = b;
        b = Wj(Yj);
        a.TrafficSource = b;
        b = Wj(Zj);
        a.Taxonomy = b;
        return a
    };
    dk = function() {
        for (var a = bk(ck) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    hk = function() {
        if (ek) return ek;
        for (var a = ef(fk), b = [], c = 0; c < a.length; c += 2) gk(a[c], a[c + 1], b);
        return ek = b.join("&")
    };
    nk = function(a, b) {
        if (!b || !_.ka(b)) return null;
        var c = !1,
            d = new ik;
        _.jk(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.A(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.A(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.A(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    kk();
                    return;
                default:
                    g = !0
            }
            g && a.error(lk("setSafeFrameConfig", mk(b), f, mk(e)))
        });
        return c ? null : d
    };
    pk = function(a) {
        var b = new ik;
        a = _.B(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) ok(c, 1) && _.A(b, 1, F(c, 1)), ok(c, 2) && _.A(b, 2, F(c, 2)), ok(c, 3) && _.A(b, 3, F(c, 3)), ok(c, 4) && _.A(b, 4, F(c, 4));
        return b
    };
    rk = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = qk.exec(null != (b = null == (a = _.Pg(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    sk = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    tk = function(a, b) {
        var c = b.j;
        return a.map(function(d) {
            return _.t(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Xd())
    };
    wk = function(a) {
        var b = _.Ae(uk),
            c = [];
        a = _.B(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.C = d;
            var e = vk(9);
            1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
        }
        return c
    };
    zk = function(a, b, c, d, e, f) {
        var g = xk(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Xa;
        if (!f || !g) return O(b, lj("PubAdsService.definePassback", [d, e])), null;
        _.A(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Zd: Vj(a, b, new yk(a, f, c)),
            Xa: g
        }
    };
    Bk = function(a, b, c, d) {
        return gj(c, function() {
            return new Ak(a, b, c, d)
        })
    };
    Dk = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ck) : "fluid" === a
    };
    Ek = function(a) {
        return Array.isArray(a) && 2 === a.length && Ck(a[0]) && Ck(a[1])
    };
    Gk = function(a) {
        return Array.isArray(a) ? rh(sh(new oh, (0, D.ta)(a[0])), (0, D.ta)(a[1])) : Fk()
    };
    Ik = function(a) {
        var b = [];
        if (Hk(a)) b.push(Gk((0, D.J)(a)));
        else if (Array.isArray(a)) {
            a = _.B(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Hk(c) ? b.push(Gk((0, D.J)(c))) : ta(c, ["fluid"]) && b.push(Fk())
        }
        return b
    };
    Jk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return rh(sh(new oh, b), a)
    };
    Lk = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            zc: [],
            La: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = Ik(a.fixed);
            if (_.G(Kk)) return {
                zc: c,
                La: null
            };
            var d;
            if (d = Jk(a.max)) {
                var e = a.min ? Jk(a.min) : new oh;
                null != (null == e ? void 0 : e.getWidth()) || null != e && sh(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && rh(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                b = (0, D.J)(d);
                if (0 === b.getWidth() || 0 === b.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    f = (0, D.J)(e);
                    var g = f.getWidth(),
                        h = b.getWidth();
                    if (null != g && null != h && g > h) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    f = f.getHeight();
                    b = b.getHeight();
                    if (null != f && null != b && f > b) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a));
            !_.G(Kk) && d && e ? (a = new xh, a = _.Sg(a, 1, d), a = _.Sg(a, 2, e)) : a = null;
            return {
                zc: c,
                La: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            zc: Ik(a),
            La: null
        }
    };
    Hk = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    pa = function(a, b) {
        a: {
            b = (0, D.ta)(b[0]);a = (0, D.ta)(a[0]);
            for (var c = na, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = na(b.length, a.length)
        }
        return b
    };
    Nk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Mk("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Ek(b)) throw new Mk("Size must be an array of two non-negative integers");
        b = rh(sh(new oh, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Ik(a[1]), 0 === a.length) throw new Mk("At least one slot size must be present");
        var c = new qh;
        b = _.Sg(c, 1, b);
        return Sc(b, 2, a)
    };
    Pk = function(a, b, c) {
        return gj(c, function() {
            return new Ok(a, b, c)
        })
    };
    Rk = function(a, b) {
        var c, d;
        if (null == b) var e = void 0;
        else {
            e = b.get;
            if (_.G(Qk)) {
                var f = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                f = 3 !== (null == f ? void 0 : f.length) ? a : "/" + f[1] + f[2]
            } else f = a;
            e = e.call(b, f)
        }
        return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(zh(a))) ? d : 0
    };
    Wk = function(a, b, c, d, e, f) {
        if (null != c && c.size) {
            var g, h;
            f = null != (h = null != (g = null == f ? void 0 : f.adUnits) ? g : null == b ? void 0 : b.adUnits) ? h : [];
            b = {};
            g = _.B(f);
            for (h = g.next(); !h.done; b = {
                    jc: b.jc
                }, h = g.next()) {
                f = h.value;
                h = f.code;
                var k = f.bids;
                f = void 0;
                if (h && null != (f = k) && f.length && (h = Rk(h, c), b.jc = h / 1E6, !(0 >= h))) {
                    var l = void 0;
                    f = {};
                    k = _.B(null != (l = k) ? l : []);
                    for (l = k.next(); !l.done; f = {
                            Pa: f.Pa,
                            Rc: f.Rc
                        }, l = k.next()) l = l.value, f.Rc = "function" === typeof l.getFloor ? l.getFloor : void 0, f.Pa = Sk(Tk(Uk(new Vk, 4), h), d), l.getFloor = function(n, m) {
                        return function(p) {
                            4 === fe(n.Pa, 1, 0) && Uk(n.Pa, 1);
                            var r, u = null == (r = n.Rc) ? void 0 : r.apply(a, [p]);
                            p = d ? u || {} : {
                                currency: "USD",
                                floor: m.jc
                            };
                            return null != u && u.floor ? (null == u ? 0 : u.currency) && "USD" !== u.currency ? (1 === fe(n.Pa, 1, 0) && (p = Tk(Uk(n.Pa, 6), 1E6 * u.floor), _.A(p, 3, u.currency)), u) : (u.floor || 0) > m.jc ? (1 === fe(n.Pa, 1, 0) && Tk(Uk(n.Pa, 5), 1E6 * u.floor), u) : p : p
                        }
                    }(f, b), e.set(l.getFloor, f.Pa)
                }
            }
        }
    };
    el = function(a, b, c, d, e, f) {
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var n;
            k = (null == (n = (0, D.J)(f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : n.bids) || []
        }
        g = k.filter(function(m) {
            return m.auctionId !== c && d.some(function(p) {
                return (E = Xk(p, 2), _.t(E, "includes")).call(E, m.adId)
            })
        });
        g = _.B(g);
        for (h = g.next(); !h.done; h = g.next()) h = h.value, l = k = void 0, n = Yk(h, e, d, null == (k = f.adUnits) ? void 0 : null == (l = _.t(k, "find").call(k, function(m) {
            m = m.code;
            return m === b.getAdUnitPath() || m === b.getDomId()
        })) ? void 0 : l.mediaTypes), k = Zk(a, $k(_.A(al(bl(new cl, h.bidder), 1), 6, !0), n)), "number" === typeof h.timeToRespond && dl(k, h.timeToRespond)
    };
    fl = function(a, b, c) {
        ok(a, 3) || (c === b.getAdUnitPath() ? _.A(a, 3, 1) : c === b.getDomId() && _.A(a, 3, 2))
    };
    hl = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : fe(f, 1, 0)) && _.Sg(b, 5, f);
        wh(a, Vk, 5) || (f ? 1 === fe(f, 1, 0) ? gl(a, f) : gl(a, Tk(Uk(Sk(new Vk, e), 1), Rk(c, d))) : gl(a, Uk(Sk(new Vk, e), Rk(c, d) ? 2 : 3)))
    };
    Yk = function(a, b, c, d) {
        var e = a.cpm,
            f = a.originalCpm,
            g = a.currency,
            h = a.originalCurrency,
            k = a.dealId,
            l = a.adserverTargeting,
            n = a.bidder,
            m = a.adUnitCode,
            p = a.adId,
            r = a.mediaType,
            u = a.height,
            v = a.width,
            x = a.adUrl;
        a = a.ad;
        var I = new il;
        "number" === typeof e && (_.A(I, 2, Math.round(1E6 * e)), h && h !== g || (e = Math.round(1E6 * Number(f)), isNaN(e) || e === Yi(I, 2) || _.A(I, 8, e)));
        "string" === typeof g && _.A(I, 3, g);
        "string" === typeof k && jl(I, kl(k));
        if ("object" === typeof l)
            for (c = _.t(Object, "fromEntries").call(Object, c.map(function(S) {
                    return [y(S, 1), Xk(S, 2)]
                })), g = _.B(["", "_" + n]), k = g.next(); !k.done; k = g.next()) {
                k = k.value;
                e = [];
                f = _.B(_.t(Object, "entries").call(Object, l));
                for (h = f.next(); !h.done; h = f.next()) {
                    h = _.B(h.value);
                    var K = h.next().value;
                    h = h.next().value;
                    K = (K + k).slice(0, 20);
                    var M = void 0;
                    if (null != (M = c[K]) && M.length)
                        if (c[K][0] === String(h)) e.push(K);
                        else {
                            e = [];
                            break
                        }
                }
                ll(I, Xk(I, 4).concat(e))
            }
        switch (r || "banner") {
            case "banner":
                _.A(I, 5, 1);
                break;
            case "native":
                _.A(I, 5, 2);
                gi("hbyg_nat", function(S) {
                    L(S, "pub_url", document.URL);
                    L(S, "b", n);
                    L(S, "auc", null != m ? m : "");
                    L(S, "hmt", Number(!!d));
                    var T;
                    L(S, "hat", Number(!!(null == d ? 0 : null == (T = d.native) ? 0 : T.adTemplate)))
                }, _.xe(ml));
                break;
            case "video":
                _.A(I, 5, 3)
        }
        "number" === typeof u && "number" === typeof v && nl(I, ol(pl(v), u));
        "string" === typeof p && (_.A(I, 1, p), b.set(p, {
            height: u,
            width: v,
            adUrl: "string" === typeof x ? x : void 0,
            hh: "string" === typeof a ? a : void 0,
            format: fe(I, 5, 0),
            cpm: null != y(I, 2) ? Yi(I, 2) : void 0
        }));
        return I
    };
    ql = function(a, b) {
        var c = new w.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.B(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Od(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.B(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).Cf = f)
            }
        }
        d = new w.Map;
        a = _.B(_.t(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.B(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.Cf, g && h && d.set(f, {
            latency: h - g,
            Rd: !1
        });
        e = _.B(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Rd = !0;
        return d
    };
    rl = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return rj().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    tl = function(a, b) {
        return (0, D.ta)(gj(b, function() {
            return new sl(a, b)
        }))
    };
    vl = function(a, b, c, d) {
        for (var e = _.B(_.t(Object, "entries").call(Object, ul)), f = e.next(); !f.done; f = e.next()) {
            var g = _.B(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(c, d))
        }
    };
    Cl = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && F(c, 5)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? ne(c) : null;
            var e = 0;
            try {
                e |= wl(a, 2500);
                if (_.G(xl)) {
                    var f = _.yl(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= zl(a);
                0 < b && !_.Al(_.Bl(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    Il = function(a, b, c, d, e, f) {
        d = Dl(d);
        if (5 !== d) return !1;
        var g = Cl(e, !Gl(c), f);
        if (g &= -134217729) gi("gpt_int_ns", function(h) {
            L(h, "nsr", g);
            mi(h, a)
        }, _.xe(Hl)), vl(b, g, d, c.getAdUnitPath());
        return !!g
    };
    Jl = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8
        }
    };
    Ql = function(a, b) {
        a = Jl(a);
        if (!a) return null;
        var c = 0;
        if (11 !== a) {
            c |= _.q != _.q.top ? 512 : 0;
            var d = _.Kl(_.q);
            d = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
            d && (c |= 64);
            if (c) return c
        }
        if (2 === a || 1 === a) {
            d = {
                Fa: _.q,
                Ud: Ll,
                ze: b ? a : void 0
            };
            0 === (0, _.Ml)() && (d.Ud = 3E3, d.nf = 650);
            b = d.Fa;
            var e = d.nf,
                f = d.Ud,
                g = d.ze,
                h = d.Va,
                k = d.mh;
            d = 0;
            try {
                d |= b != b.top ? 512 : 0;
                var l = Math.min(b.screen.width || 0, b.screen.height || 0);
                d |= l ? 320 > l ? 8192 : 0 : 2048;
                var n;
                if (n = b.navigator) {
                    var m = b.navigator.userAgent;
                    n = /Android 2/.test(m) || /iPhone OS [34]_/.test(m) || /Windows Phone (?:OS )?[67]/.test(m) || /MSIE.*Windows NT/.test(m) || /Windows NT.*Trident/.test(m)
                }
                d |= n ? 1048576 : 0;
                d = e ? d | (b.innerHeight >= e ? 0 : 1024) : d | (_.Nl(b) ? 0 : 8);
                d |= wl(b, f);
                d |= zl(b)
            } catch (p) {
                d |= 32
            }
            switch (g) {
                case 2:
                    l = h;
                    l = void 0 === l ? null : l;
                    n = Eg(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), Ol) + 15, 3);
                    null != Dg(b, n, void 0 === l ? null : l) && (d |= 16777216);
                    break;
                case 1:
                    l = h, l = void 0 === l ? null : l, n = b.innerWidth, m = b.innerHeight, e = Math.min(Math.round(b.innerWidth / 320 * 50), Ol) + 15, f = Eg(n, 3, m - e, m, 3), 25 < e && f.push({
                        x: n - 25,
                        y: m - 25
                    }), null != Dg(b, f, void 0 === l ? null : l) && (d |= 16777216)
            }
            k && (h = void 0 === h ? null : h, h = void 0 === h ? null : h, k = b.innerWidth, l = b.innerHeight, n = _.xe(Pl), k = Eg(k, 10, l - n, l, 10), k = null != Dg(b, k, h));
            k && (d |= 16777216);
            c |= d
        } else 8 === a ? c |= Cl(_.q) : 11 !== a && (c |= 32);
        c || (b = _.Kl(_.q), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return c
    };
    Rl = function(a, b) {
        for (var c = new hi, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return ji(c)
    };
    Sl = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.Pb ? "" : c.Pb;
        c = void 0 === c.pa ? "," : c.pa;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    Tl = function(a, b, c, d) {
        var e = _.Dd("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Ul = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Wl = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !Vl(b, c, d))) {
                    a: {
                        do {
                            var g = Sh(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    Xl = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Cd: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Cd: a.length - b.length + 8
        }
    };
    Yl = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Zl = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Yl(a, b)
    };
    am = function(a, b) {
        var c = b.R;
        return Sl(a, function(d) {
            return $l(c[d.getDomId()]).join("&")
        }, {
            pa: "|"
        })
    };
    $l = function(a) {
        a = bm(a);
        var b = [];
        _.jk(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    bm = function(a) {
        for (var b = {}, c = _.B(Mj(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[(0, D.J)(Nj(d))] = Xk(d, 2);
        a = Xk(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    cm = function(a) {
        var b = !1,
            c = Wc(a, Qj, 2).map(function(d) {
                var e = (0, D.J)(Nj(d));
                b = "excl_cat" === e;
                d = Xk(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = Xk(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    dm = function(a) {
        var b, c;
        return null != (c = null == (b = _.t(a, "find").call(a, function(d) {
            return "page_url" === y(d, 1)
        })) ? void 0 : Xk(b, 2)[0]) ? c : null
    };
    em = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    fm = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Gd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    gm = function(a, b) {
        var c = b.R;
        return !!dm(b.V.ua()) || a.some(function(d) {
            return null !== dm(c[d.getDomId()].ua())
        })
    };
    jm = function(a, b, c) {
        var d = null;
        try {
            var e = hm(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.V,
                    h = c.R[f.getDomId()],
                    k;
                f = null == (k = Wh(f, h, b.document, Ch(g, h))) ? void 0 : k.y;
                k = uh(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++im
            })
        } catch (f) {}
        return d
    };
    mm = function(a, b, c, d) {
        a = a.map(function(e) {
            if (c) {
                var f = d.R[e.getDomId()];
                f = Ah(f);
                if (e = b.j.get(e)) e.ub = f;
                return f
            }
            f = d.V;
            var g = d.R[e.getDomId()],
                h;
            if (!(h = km(b, e))) {
                f = Ah(g, F(f, 6) || F(g, 17) ? null : Qh(e));
                if (e = b.j.get(e)) e.ub = f;
                h = f
            }
            return h
        });
        return _.G(lm) ? a : a.join()
    };
    om = function() {
        var a = void 0 === a ? window : a;
        nm = _.se(a)
    };
    pm = function(a, b) {
        return a && (a = Me(a, oh, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    qm = function(a, b) {
        return a && (a = Me(a, oh, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    rm = function(a) {
        return a && (a = Me(a, oh, 2)) ? a.getWidth() || 0 : 0
    };
    sm = function(a) {
        return a && (a = Me(a, oh, 2)) ? a.getHeight() || 0 : 0
    };
    tm = function(a, b) {
        var c;
        return !(null != (c = F(a, 11)) ? !c : !F(b, 10))
    };
    um = function(a, b, c, d) {
        if (a = Qh(a, b)) {
            var e;
            if (c = null != (e = F(c, 24)) ? e : F(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.q.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Am = function(a, b, c, d, e, f, g) {
        var h = new nf,
            k = new vm(a, d);
        H(h, k);
        f = new wm(a, e, f);
        H(h, f);
        f = new xm(a, b, e, g, k.Ya);
        H(h, f);
        b = new ym(a, b, c, e, d, g, k.Ya);
        H(h, b);
        a = new zm(a, k.Ya, b.l, f.l);
        H(h, a);
        Bf(h);
        return {
            Ya: a.A,
            va: h
        }
    };
    Fm = function(a, b) {
        var c = window,
            d = new nf;
        c = new Bm(c);
        _.Cm(d, c);
        b = new Dm(a, c, b);
        H(d, b);
        a = new Em(a, c, b.zb);
        H(d, a);
        Bf(d);
        return {
            zb: b.zb,
            Nd: a.l,
            va: d
        }
    };
    Im = function(a, b, c, d) {
        var e = d.Id,
            f = d.adUnitPath;
        d = void 0 === d.kb ? !1 : d.kb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Gm(e)) ? Hm(a, b, f, c, {
            Za: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            kb: d
        }) : (b.error(lj("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Gm = function(a) {
        return !!cj(Xj, function(b) {
            return b === a
        })
    };
    Hm = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Za: e.Za,
            format: f,
            kb: e.kb
        });
        a = b.slotId;
        b = b.Xa;
        a && b && (_.A(b, 15, f), _.Jm(a, function() {
            var g = window,
                h = Jl((0, D.J)(f));
            if (h) {
                g = _.Kl(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Pm = function(a, b, c, d, e, f, g) {
        var h = document,
            k = c.getAdUnitPath();
        c = Km.get(fe(c, 2, 0));
        if (k && c) {
            var l, n = null == (l = Im(a, g, f, {
                Id: c,
                adUnitPath: k,
                kb: _.G(Lm)
            })) ? void 0 : l.j;
            n && (a = Mm($h(), n.getSlotElementId()), d && null != a && bf(a, 27, Nm, d), b.cmd.push(function() {
                n.addService(b.pubads())
            }), Om(h, function() {
                b.display(n);
                F(e, 4) && b.pubads().refresh([n])
            }))
        }
    };
    Um = function(a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = zh(c),
            e;
        return null == (e = Wc(a, Qm, 1)) ? void 0 : e.some(function(f) {
            switch (Ti(f, Rm)) {
                case 1:
                    f = (0, D.J)(Sm(f, Tm, 1, Rm));
                    if (ok(f, 1) && ok(f, 2)) {
                        var g = (0, D.J)(ge(f, 1));
                        f = 0 >= g || g > c.length ? !1 : (0, D.J)(ge(f, 2)) === zh(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return (0, D.J)(ge(f, Ui(f, Rm, 2))) === d;
                default:
                    return !1
            }
        })
    };
    Wm = function(a) {
        var b;
        return null == (b = Vm(a, 2)) ? void 0 : b.some(function(c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.Ml)();
                case 4:
                    return 2 === (0, _.Ml)();
                case 3:
                    return 1 === (0, _.Ml)();
                default:
                    return !1
            }
        })
    };
    Zm = function(a, b, c, d) {
        var e = document,
            f = [];
        b = _.B(Wc(b, Xm, 3));
        for (var g = b.next(); !g.done; g = b.next())
            if (g = g.value, jf(g, 1) && jf(g, 2) && ok(g, 3) && ok(g, 4)) {
                var h = e.querySelector(Ym(g, 1)),
                    k = void 0;
                if (null != (k = h) && k.parentElement) {
                    k = g.getAdUnitPath();
                    var l = "gpt_opp_" + k;
                    if (!e.getElementById(l)) {
                        var n = e.createElement("div");
                        n.id = l;
                        h.insertAdjacentElement("beforebegin", n);
                        if (g = a.defineSlot(k, [g.getWidth(), g.getHeight()], l)) g.addService(a.pubads()), h = Mm($h(), g.getSlotElementId()), d && (k = void 0, null != (k = h) && bf(k, 27, Nm, d)), f.push(g)
                    }
                }
            }
        f.length && Om(e, function() {
            for (var m = _.B(f), p = m.next(); !p.done; p = m.next()) a.display(p.value);
            F(c, 4) && a.pubads().refresh(f)
        })
    };
    cn = function(a, b, c) {
        var d = $m(b, c);
        c = d.slotId;
        var e = d.Ce;
        d = d.De;
        if (c) {
            if (d = $h(), (b = Mm(d, c.getDomId())) && !F(b, 19))
                if (e && d.D.set(c, e), Qh(c) || Bh(Dl(b)))
                    for (_.A(b, 19, !0), a = Mh(d.j, d.m), e = _.B(Xk(b, 4)), b = e.next(); !b.done; b = e.next()) b = uj(b.value), b = (0, D.J)(fj.get((0, D.J)(b))), b.m && b.K(a, c);
                else O(a, an(String(b.getAdUnitPath()), String(b.getDomId())), c)
        } else d ? a.error(bn(d)) : a.error(lj("googletag.display", [String(b)]))
    };
    $m = function(a, b) {
        var c = "";
        if ("string" === typeof a) c = a, b = dn(b, c);
        else if (_.ka(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = dn(b, c)
        } else b = (E = [].concat(_.Od(b.W)), _.t(E, "find")).call(E, function(e) {
            return e.j === a
        });
        return {
            slotId: b,
            Ce: d,
            De: c
        }
    };
    en = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    fn = function(a, b, c, d) {
        O(a, lk("googletag.setConfig.commerce", mk(b), c, mk(d)))
    };
    gn = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    hn = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    ln = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.t(Object, "keys").call(Object, (0, D.J)(a)).some(function(d) {
                return (E = _.t(Object, "values").call(Object, jn), _.t(E, "includes")).call(E, Number(d))
            })) return !0;
        kn("taxonomies", a, b, c);
        return !1
    };
    nn = function(a, b) {
        var c = Wc(b, mn, 1).filter(function(d) {
            return fe(d, 1, 0) !== a
        });
        Sc(b, 1, c)
    };
    un = function(a, b, c, d) {
        if (void 0 !== _.t(b, "values"))
            if (null === _.t(b, "values")) nn(a, c);
            else if (on(_.t(b, "values"), d, b) && (b = pn(a, _.t(b, "values"), d, b), b.length)) {
            var e = (E = Wc(c, mn, 1), _.t(E, "find")).call(E, function(f) {
                return fe(f, 1, 0) === a
            });
            e ? qn(e, b) : rn(c, qn(sn(new mn, a), b));
            d.info(tn(mk(b), mk(a)))
        }
    };
    on = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        kn("taxonomyData.values", a, b, c);
        return !1
    };
    pn = function(a, b, c, d) {
        var e = [],
            f = [],
            g = !1;
        b = _.B(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, 5 <= e.length && (g = !0), "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
        0 < f.length && kn("taxonomyData.values", f, c, d);
        g && O(c, vn(mk(a), mk(5)));
        return e
    };
    kn = function(a, b, c, d) {
        O(c, lk("googletag.setConfig.pps", mk(d), a, mk(b)))
    };
    xn = function(a) {
        wn = a
    };
    zn = function() {
        for (var a = _.B(_.t(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), Ua(c, new Ta(b.textContent, yn)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    An = function(a, b) {
        b = _.B(_.t(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.B(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    Dn = function(a, b, c) {
        var d = [];
        c = [].concat(_.Od(c.W)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, lj("googletag.destroySlots", [b])), !1;
            ma(b);
            d = c.filter(function(e) {
                return _.t(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        Bn(d);
        Cn(d);
        return !0
    };
    In = function(a, b, c, d) {
        var e;
        if (Zl("google_content_service_disabled", c)) gi("gpt_scdvqp", function(f) {
            mi(f, a)
        }, 1);
        else if (!_.G(En)) return J(a, 817, function() {
            _.G(Fn) && b.error(Gn(), null, !0);
            null != e || (e = new Hn(a, b, d));
            return qj(a, b, e)
        })
    };
    Vn = function(a, b, c, d, e, f, g, h) {
        var k = rj(),
            l;
        d = In(a, b, d, h);
        h = J(a, 74, function(m, p, r) {
            return f.defineSlot(a, b, m, p, r)
        });
        var n = {};
        h = (n._loaded_ = !0, n.cmd = [], n._vars_ = k._vars_, n.evalScripts = k.evalScripts, n.display = J(a, 95, function(m) {
            void cn(b, m, f)
        }), n.defineOutOfPageSlot = J(a, 73, function(m, p) {
            return (m = Im(a, b, f, {
                Id: p,
                adUnitPath: m
            })) ? m.j : null
        }), n.getVersion = J(a, 946, function() {
            return a.mb ? String(a.mb) : a.Ja
        }), n.pubads = J(a, 947, function() {
            return Bk(a, b, c, f)
        }), n.companionAds = J(a, 816, function() {
            null != l || (l = new Jn(a, b, c, g));
            return oj(a, b, l)
        }), n.setAdIframeTitle = J(a, 729, xn), n.getEventLog = J(a, 945, function() {
            return new Kn(a, b)
        }), n.sizeMapping = J(a, 90, function() {
            return new Ln(a, b)
        }), n.enableServices = J(a, 91, function() {
            for (var m = _.B(Mn), p = m.next(); !p.done; p = m.next()) p = p.value, p.m && b.info(Nn()), p.enable()
        }), n.destroySlots = J(a, 75, function(m) {
            return Dn(b, m, f)
        }), n.enums = ak(), n.defineSlot = h, n.defineUnit = h, n.getWindowsThatCanCommunicateWithHostpageLibrary = J(a, 955, function(m) {
            return On(m)
        }), n.disablePublisherConsole = J(a, 93, yj), n.onPubConsoleJsLoad = J(a, 731, zj), n.openConsole = J(a, 732, function(m) {
            Aj(a, void 0 === m ? "" : m)
        }), n.setConfig = J(a, 1034, function(m) {
            if (_.ka(m)) {
                var p = m.commerce,
                    r = m.pps;
                if (null === p) Ge(Pn(e, Qn, 33), 1);
                else if (void 0 !== p)
                    if (m = Pn(e, Qn, 33), _.ka(p)) {
                        var u = p.query,
                            v = p.categories,
                            x = p.productIds,
                            I = p.filter,
                            K = Ac(Rn(m, Sn, 1));
                        null === u ? Ge(K, 1) : gn(u) ? _.A(K, 1, u) : void 0 !== u && fn(b, p, "query", u);
                        null === v ? _.A(K, 2, Dc) : hn(v) ? _.jh(K, 2, v) : void 0 !== v && fn(b, p, "categories", v);
                        null === x ? _.A(K, 3, Dc) : hn(x) ? _.jh(K, 3, x) : void 0 !== x && fn(b, p, "productIds", x);
                        null === I ? Ge(K, 4) : gn(I) ? _.A(K, 4, I) : void 0 !== I && fn(b, p, "filter", I);
                        jf(K, 1) || Xk(K, 2).length ? _.Sg(m, 1, K) : O(b, Tn())
                    } else O(b, lj("googletag.setConfig.commerce", [p]));
                if (null === r) Ge(Pn(e, Qn, 33), 2);
                else if (void 0 !== r && (p = Pn(Pn(e, Qn, 33), Un, 2), "object" === typeof r && (0, D.J)(r).hasOwnProperty("taxonomies") ? m = !0 : (O(b, lj("googletag.setConfig.pps", [r])), m = !1), m))
                    if (m = r.taxonomies, void 0 === m) kn("taxonomies", m, b, r);
                    else if (null === m) Sc(p, 1);
                else if (ln(m, b, r))
                    for (r = _.B(_.t(Object, "entries").call(Object, m)), u = r.next(); !u.done; u = r.next()) {
                        u = _.B(u.value);
                        var M = u.next().value;
                        u = u.next().value;
                        v = p;
                        x = b;
                        K = m;
                        if (void 0 === M || null === M) kn("taxonomy", M, x, K);
                        else {
                            I = Number(M);
                            var S = I,
                                T = x,
                                Z = K;
                            (E = _.t(Object, "values").call(Object, Zj), _.t(E, "includes")).call(E, Number(S)) ? M = !0 : (kn("taxonomy", M, T, Z), M = !1);
                            M && void 0 !== u && (null === u ? nn(I, v) : (M = x, "object" === typeof u && (0, D.J)(u).hasOwnProperty("values") ? K = !0 : (kn("taxonomyData", u, M, K), K = !1), K && un(I, u, v, x)))
                        }
                    }
            } else O(b, lj("googletag.setConfig", [m]))
        }), n.apiReady = !0, n);
        d && (h.content = d);
        An(k, h)
    };
    Wn = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.t(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Yn = function(a, b) {
        var c = _.xe(Xn);
        Math.random() <= c && le(b, a)
    };
    eo = function(a, b, c) {
        var d = {};
        if (!c) return b.error(Zn("missing data-rendering attribute")), d;
        try {
            var e = $n(c);
            var f = Yd(ao, e)
        } catch (l) {}
        var g;
        (null == (g = f) ? 0 : wh(g, bo, 1)) ? (b = new co, b = _.z(b, 4, 1, 0), b = _.z(b, 2, 7, 0), a = _.z(b, 3, a.eb || a.Ja, ""), b = Me(f, bo, 1), a = _.Sg(a, 5, b), a = _.z(a, 6, !0, !1), d.Jf = a) : b.error(Zn("invalid data-rendering attribute"));
        var h;
        d.Bf = null == (h = f) ? void 0 : Ym(h, 2);
        var k;
        d.Zc = null == (k = f) ? void 0 : Ym(k, 3);
        return d
    };
    ho = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m;
        return _.gb(function(p) {
            c = Ij(b, "ai");
            if (!c || 0 === c.length) return p.return(w.Promise.resolve(b));
            d = fo();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return p.return(w.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
            } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals) return l = new _.ug, n = l.resolve, m = l.promise, go(d.webkit.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(r) {
                n(b.replace("?", "?" + r + "&"))
            }, function() {
                n(b)
            }, function(r, u) {
                return _.Yg(a, r, u)
            }), p.return(m);
            return p.return(w.Promise.resolve(b))
        })
    };
    io = function(a, b, c, d) {
        var e, f, g;
        return _.gb(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var n = [];
            for (m in l) gk(m, l[m], n);
            l = n.join("&");
            if (l) {
                n = -1;
                0 > n && (n = 0);
                var m = -1;
                if (0 > m || m > n) {
                    m = n;
                    var p = ""
                } else p = "".substring(m + 1, n);
                n = ["".slice(0, m), p, "".slice(n)];
                m = n[1];
                n[1] = l ? m ? m + "&" + l : l : m;
                l = n[0] + (n[1] ? "?" + n[1] : "") + n[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(ho(a, g))
        })
    };
    jo = function(a, b, c) {
        var d;
        if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
            if (c = c.gmaSdk.getViewSignals()) return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"), w.Promise.resolve(c)
        } else {
            var e, f;
            if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
                d = new _.ug;
                var g = d.resolve;
                d = d.promise;
                go(c.webkit.messageHandlers.getGmaViewSignals, {}, function(h) {
                    g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return _.Yg(a, h, k)
                });
                return d
            }
        }
        return w.Promise.resolve(b)
    };
    po = function(a, b) {
        var c = window;
        var d = void 0 === d ? pb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = fo(),
                g;
            null == (g = f ? new ko(function(k, l) {
                return _.Yg(a, k, l)
            }, function() {}) : void 0) || lo(g);
            var h = Wn(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.P(e, h);
            e.prototype.connectedCallback = function() {
                var k = eo(a, b, this.dataset.rendering),
                    l = k.Jf,
                    n = k.Bf;
                k = k.Zc;
                l && d(mo(window, l));
                n && jo(a, n, f).then(function(m) {
                    return void no(m)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Zc = k, this.addEventListener("click", this.j)) : O(b, oo(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && io(a, this, k, this.Zc).then(function(n) {
                    return void no(n)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    qo = function(a) {
        var b = {};
        a = _.B(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[y(c, 1)] = y(c, 2);
        return b
    };
    to = function(a, b, c) {
        return new ro(c, a, so, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    uo = function(a) {
        .001 > ie() && le({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    zo = function(a, b, c, d) {
        d = d.Pf;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? vo : wo)(a, b, c);
            case 1:
                return new xo(a, b, c);
            case 2:
                return new yo(a, b, c);
            default:
                Ra(e)
        }
    };
    Ao = function(a) {
        if (!Hd(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Go = function(a, b, c, d) {
        var e = Qh(a, document);
        e && Bg(e, window, d, !0);
        Bo(_.Ae($g), "5", (0, D.J)(y(c.R[a.getDomId()], 20)));
        d = a.dispatchEvent(Co, 801, {
            Fd: null,
            isBackfill: !1
        });
        if (_.Do(b, a) && !Zh(a, document)) {
            b = c.V;
            c = c.R[a.getDomId()];
            var f;
            (null != (f = F(c, 10)) ? f : F(b, 11)) && um(a, document, c, b)
        }
        _.G(Eo) ? d.then(function() {
            a.dispatchEvent(Fo, 825, {
                isEmpty: !0
            })
        }) : a.dispatchEvent(Fo, 825, {
            isEmpty: !0
        })
    };
    Ho = function(a, b) {
        var c = _.Dd("DIV");
        c.id = a;
        c.textContent = b;
        _.bi(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Jo = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Io(a, b)
    };
    Ko = function(a) {
        return ok(a, 1) ? ok(a, 3) && 0 !== (0, _.Ml)() ? (0, D.ta)(y(a, 1)) * (0, D.ta)(Ee(a, 3)) : y(a, 1) : null
    };
    Lo = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new Io(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    So = function(a, b) {
        for (var c = {}, d = _.B(Wc(a, Mo, 7)), e = d.next(); !e.done; e = d.next()) e = e.value, c[Ym(e, 1)] = JSON.parse(Ym(e, 2));
        if (d = Me(a, No, 6)) c["https://googleads.g.doubleclick.net"] = d.toJSON(), c["https://td.doubleclick.net"] = d.toJSON();
        d = {};
        e = _.B(Wc(a, Oo, 11));
        for (var f = e.next(); !f.done; f = e.next()) f = f.value, d[Ym(f, 1)] = ge(f, 2);
        f = {};
        Po(a, 18) && (f["https://googleads.g.doubleclick.net"] = Po(a, 18), f["https://td.doubleclick.net"] = Po(a, 18));
        var g;
        e = {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: Ym(a, 1),
            trustedScoringSignalsUrl: Ym(a, 2),
            interestGroupBuyers: Xk(a, 3),
            sellerExperimentGroupId: Po(a, 17),
            auctionSignals: JSON.parse(Ym(a, 4) || "{}"),
            sellerSignals: (null == (g = Me(a, Qo, 5)) ? void 0 : g.toJSON()) || [],
            sellerTimeout: ge(a, 15) || 50,
            perBuyerExperimentGroupIds: f,
            perBuyerSignals: c,
            perBuyerTimeouts: d
        };
        c = new Qo;
        "0" !== Mc(y(Rn(Rn(a, Qo, 5), Ro, 5), 2), "0") && (g = new Ro, d = Mc(y(Rn(Rn(a, Qo, 5), Ro, 5), 2), "0"), Kc(g), null != d && 0 !== +d ? Cc(g, 2, d) : Cc(g, 2, void 0, !1), _.Sg(c, 5, g));
        return {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: Ym(a, 1),
            sellerExperimentGroupId: Po(a, 17),
            sellerSignals: c.toJSON(),
            sellerTimeout: ge(a, 15) || 50,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [e].concat(_.Od(null != b ? b : []))
        }
    };
    Xo = function(a, b) {
        var c, d, e, f, g, h, k, l;
        return _.gb(function(n) {
            if (1 == n.j) return _.t(a, "startsWith").call(a, "urn:") && To.deprecatedURNToURL && To.deprecatedReplaceInURN ? hb(n, To.deprecatedURNToURL(a), 2) : n.return();
            c = n.m;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Uo)) ? f : []).forEach(function(m) {
                d[m] = e
            });
            g = b.Qe || "";
            (null != (h = c.match(Vo)) ? h : []).forEach(function(m) {
                d[m] = g
            });
            k = b.se || "";
            (null != (l = c.match(Wo)) ? l : []).forEach(function(m) {
                d[m] = k
            });
            return hb(n, To.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Zo = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = Yo(c, 18),
            f = Yo(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = Ym(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        Yo(c, 4) && (d += "&is_plog=1");
        (e = Ym(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : Yo(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        no(d)
    };
    Np = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v) {
        var x = new nf,
            I = uh(!0, window),
            K = h.V,
            M = h.R[d.getDomId()],
            S = new $o(a, window);
        H(x, S);
        var T = k.Te,
            Z = k.Xf,
            ba = k.Ne,
            ia = k.Ld,
            Xa = k.ue,
            Ba = k.Ye,
            ua = k.Qf,
            wa = k.Pe,
            Da = k.Ke,
            lb = k.mc,
            Kb = k.Rf,
            Vc = k.Xe,
            hf = k.gf,
            ot = k.Mf,
            ng = k.Uf,
            zi = k.Vf,
            El = k.Ue,
            Ai = k.uc,
            Bi = k.Ga,
            Fl = k.me,
            og = k.Yf;
        k = k.Zb;
        .01 > Math.random() && (u = new ap(a, og, u.fa, ua, ia), H(x, u));
        og = new bp;
        og.j(m);
        u = new cp(a, window.top, og);
        H(x, u);
        l = new dp(a, console, l, u.A);
        H(x, l);
        l = new ep(a, Dl(M), I.height, Da, T);
        H(x, l);
        T = new fp(a, d, Qh(d, n), d.getDomId(), Yh(d), n, Dl(M), g, e);
        H(x, T);
        Bi = new gp(a, Bi, Xa, Ba, ua);
        H(x, Bi);
        ua = new hp(a, K, M, window, Xa, ua);
        H(x, ua);
        ng = new ip(a, Me(K, jp, 5), ng);
        H(x, ng);
        Z = new kp(a, d.getAdUnitPath(), M, I.width, window, e, lb, Z, l.A, Bi.A, T.A);
        H(x, Z);
        lb = new lp(a, M, Fl);
        H(x, lb);
        e = new mp(a, g, m, e, Fl, lb.A, Z.Ga, Z.M, T.A);
        H(x, e);
        if (f || _.G(np)) {
            var Hb = new op(a, d, h, g, ia, e.F);
            H(x, Hb);
            v = new pp(a, v, e.F);
            H(x, v);
            Hb = new qp(a, Hb.l, v.A);
            H(x, Hb);
            Hb = Hb.A
        }
        v = new rp(a, d, K, M, Dl(M), n, g, T.A, ua.A, e.B, ba, Hb);
        H(x, v);
        f = new sp(a, v.A);
        H(x, f);
        m = new tp(a, d, I, g, f.A, ng.l, Hb);
        H(x, m);
        f = new up(a, window, T.A);
        H(x, f);
        zi = new vp(a, m.A, v.A, zi, ng.l, void 0, Hb);
        H(x, zi);
        I = new wp(a, n, d, M, I, ba, T.A, v.A, e.B, Z.mc, f.A, ia, Hb);
        H(x, I);
        Kb = new xp(a, K, M, e.Ga, ua.A, Xa, Kb);
        H(x, Kb);
        Ai = new yp(a, window, Ai, S.A, Hb);
        H(x, Ai);
        f = new zp(a, Dl(M), n);
        H(x, f);
        m = new Ap(a, window);
        H(x, m);
        r = new Bp(a, r, Dl(M), Da, wa, Hb);
        H(x, r);
        hf = new Cp(a, hf, Hb);
        H(x, hf);
        Ba = new Dp(a, d, g, h, p, window, e.Ga, ua.A, zi.A, T.A, v.A, e.B, ia, ba, Kb.A, Ba, Vc, ot, I.A, Ai.A, f.A, r.A, Fl, m.A, Hb);
        H(x, Ba);
        Vc = new Ep(a, window, d, Ba.o, og);
        H(x, Vc);
        Da = new Fp(a, g, Dl(M), d, window, Da, Ba.l, T.A, r.A);
        H(x, Da);
        h = new Gp(a, d, Dl(M), (0, D.J)(h.Ib), wa, Ba.l, T.A, u.A, r.A, ia);
        H(x, h);
        M = new Hp(a, d, Dl(M), p, window, Ba.l, T.A);
        H(x, M);
        n = new Ip(a, d, Ba.l, n, p);
        H(x, n);
        g = new Jp(a, km(g, d), window.top, Ba.l, S.A);
        H(x, g);
        d = new Kp(a, d, ba, Xa, ot, Ba.l, v.A, Ba.B);
        H(x, d);
        El = new Lp(a, window, El, Ba.l, v.A, T.A);
        H(x, El);
        H(x, new Mp(a, rj(), K, b, c, k));
        return x
    };
    Qp = function() {
        if (Ka()) {
            var a = Ma();
            var b = 0;
            a = Op(String(a)).split(".");
            for (var c = Op("11").split("."), d = Math.max(a.length, c.length), e = 0; 0 == b && e < d; e++) {
                var f = a[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    b = Pp(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Pp(0 == f[2].length, 0 == g[2].length) || Pp(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            b = 0 <= b
        } else b = Ha(Fa()), La(b), b = Ia() ? (b = b[2]) && b[1] || "" : "", "" === b ? b = NaN : (b = b.split("."), b = 0 === b.length ? NaN : Number(b[0])), b = 65 <= b;
        return b
    };
    Rp = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new Io(a, {
            rootMargin: b
        })
    };
    Sp = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = bb.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Od(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.gb(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.ug, g = b(f.resolve), h = ++e, hb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Jm(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    $p = function() {
        var a = new Tp;
        var b = (new Up).setCorrelator(ze(_.q));
        var c = _.Ae(Be).j().join();
        b = _.z(b, 5, c, "");
        b = _.z(b, 2, 1, 0);
        a = _.Sg(a, 1, b);
        b = new Vp;
        c = _.G(Wp);
        b = _.z(b, 7, c, !1);
        c = _.G(Xp);
        b = _.z(b, 8, c, !1);
        c = _.G(Yp);
        b = _.z(b, 9, c, !1);
        b = _.z(b, 10, !0, !1);
        c = _.G(Zp);
        b = _.z(b, 13, c, !1);
        b = _.z(b, 16, !0, !1);
        a = _.Sg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    bq = function() {
        var a = aq,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (le({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    eq = function() {
        var a = cq() || he() ? 1 : ie(),
            b = .001 > a,
            c = .001 > a;
        b ? (_.Ae(uk).H = !0, dq(31067358)) : .002 > a && dq(31067357);
        vk(23);
        return {
            bc: b,
            jf: 1E3,
            Hf: 1E-4 > a,
            hf: 1E4,
            ie: b,
            Jd: 1E3,
            Ch: c,
            ih: 1E3
        }
    };
    hq = function(a) {
        var b = bq();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = ze(window),
            e = window.document.URL,
            f = _.xe(fq);
        return _.t(Object, "assign").call(Object, {}, a, {
            Ja: b,
            eb: "",
            mb: c,
            pvsid: d,
            qb: new gq(f),
            Ee: e
        })
    };
    iq = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    jq = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    kq = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    lq = kq(this);
    mq = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    w = {};
    nq = {};
    _.t = function(a, b) {
        var c = nq[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    oq = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in w ? f = w : f = lq;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = mq && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? jq(w, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === nq[d] && (a = 1E9 * Math.random() >>> 0, nq[d] = mq ? lq.Symbol(d) : "$jscp$" + a + "$" + d), jq(f, nq[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    oq("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            jq(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    oq("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, w.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = lq[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && jq(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return pq(iq(this))
                }
            })
        }
        return a
    }, "es6");
    pq = function(a) {
        a = {
            next: a
        };
        a[_.t(w.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    Q = function(a) {
        return a.raw = a
    };
    _.B = function(a) {
        var b = "undefined" != typeof w.Symbol && _.t(w.Symbol, "iterator") && a[_.t(w.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: iq(a)
        }
    };
    qq = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.Od = function(a) {
        return a instanceof Array ? a : qq(_.B(a))
    };
    rq = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    sq = mq && "function" == typeof _.t(Object, "assign") ? _.t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) rq(d, e) && (a[e] = d[e])
        }
        return a
    };
    oq("Object.assign", function(a) {
        return a || sq
    }, "es6");
    var tq = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        uq = function() {
            function a() {
                function c() {}
                new c;
                _.t(w.Reflect, "construct").call(w.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (mq && "undefined" != typeof w.Reflect && _.t(w.Reflect, "construct")) {
                if (a()) return _.t(w.Reflect, "construct");
                var b = _.t(w.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.t(w.Reflect, "setPrototypeOf").call(w.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = tq(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        vq;
    if (mq && "function" == typeof _.t(Object, "setPrototypeOf")) vq = _.t(Object, "setPrototypeOf");
    else {
        var wq;
        a: {
            var xq = {
                    a: !0
                },
                yq = {};
            try {
                yq.__proto__ = xq;
                wq = yq.a;
                break a
            } catch (a) {}
            wq = !1
        }
        vq = wq ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    zq = vq;
    _.P = function(a, b) {
        a.prototype = tq(b.prototype);
        a.prototype.constructor = a;
        if (zq) zq(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Fh = b.prototype
    };
    Aq = function() {
        this.l = !1;
        this.I = null;
        this.m = void 0;
        this.j = 1;
        this.o = this.D = 0;
        this.C = null
    };
    Bq = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    Aq.prototype.H = function(a) {
        this.m = a
    };
    var Cq = function(a, b) {
        a.C = {
            Md: b,
            af: !0
        };
        a.j = a.D || a.o
    };
    Aq.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.o
    };
    hb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    jb = function(a, b) {
        a.j = b;
        a.D = 0
    };
    kb = function(a) {
        a.D = 0;
        var b = a.C.Md;
        a.C = null;
        return b
    };
    Dq = function(a) {
        this.j = new Aq;
        this.m = a
    };
    Gq = function(a, b) {
        Bq(a.j);
        var c = a.j.I;
        if (c) return Eq(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Fq(a)
    };
    Eq = function(a, b, c, d) {
        try {
            var e = b.call(a.j.I, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.I = null, Cq(a.j, g), Fq(a)
        }
        a.j.I = null;
        d.call(a.j, f);
        return Fq(a)
    };
    Fq = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, Cq(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.af) throw b.Md;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Hq = function(a) {
        this.next = function(b) {
            Bq(a.j);
            a.j.I ? b = Eq(a, a.j.I.next, b, a.j.H) : (a.j.H(b), b = Fq(a));
            return b
        };
        this.throw = function(b) {
            Bq(a.j);
            a.j.I ? b = Eq(a, a.j.I["throw"], b, a.j.H) : (Cq(a.j, b), b = Fq(a));
            return b
        };
        this.return = function(b) {
            return Gq(a, b)
        };
        this[_.t(w.Symbol, "iterator")] = function() {
            return this
        }
    };
    Iq = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new w.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : w.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.gb = function(a) {
        return Iq(new Hq(new Dq(a)))
    };
    bb = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    oq("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    oq("Reflect.construct", function() {
        return uq
    }, "es6");
    oq("Reflect.setPrototypeOf", function(a) {
        return a ? a : zq ? function(b, c) {
            try {
                return zq(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    oq("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.D(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = lq.setTimeout;
        b.prototype.D = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.I(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.I = function(g) {
            this.D(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.D = void 0;
            this.j = [];
            this.H = !1;
            var h = this.I();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.I = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.F),
                reject: g(this.C)
            }
        };
        e.prototype.F = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.wa(g) : this.l(g)
            }
        };
        e.prototype.wa = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.M(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.o(2, g)
        };
        e.prototype.l = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.D = h;
            2 === this.m && this.U();
            this.B()
        };
        e.prototype.U = function() {
            var g = this;
            d(function() {
                if (g.O()) {
                    var h = lq.console;
                    "undefined" !== typeof h && h.error(g.D)
                }
            }, 1)
        };
        e.prototype.O = function() {
            if (this.H) return !1;
            var g = lq.CustomEvent,
                h = lq.Event,
                k = lq.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = lq.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.D;
            return k(g)
        };
        e.prototype.B = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.I();
            g.qc(h.resolve, h.reject)
        };
        e.prototype.M = function(g, h) {
            var k = this.I();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(u) {
                    try {
                        l(p(u))
                    } catch (v) {
                        n(v)
                    }
                } : r
            }
            var l, n, m = new e(function(p, r) {
                l = p;
                n = r
            });
            this.qc(k(g, l), k(h, n));
            return m
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.qc = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.D);
                        break;
                    case 2:
                        h(l.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.H = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.B(g), n = l.next(); !n.done; n = l.next()) c(n.value).qc(h, k)
            })
        };
        e.all = function(g) {
            var h = _.B(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function m(u) {
                    return function(v) {
                        p[u] = v;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).qc(m(p.length - 1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    oq("Object.setPrototypeOf", function(a) {
        return a || zq
    }, "es6");
    oq("WeakMap", function(a) {
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
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.B(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!rq(g, d)) {
                var k = new b;
                jq(g, d, {
                    value: k
                })
            }
            if (!rq(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && rq(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && rq(g, d) && rq(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && rq(g, d) && rq(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    oq("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.B([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.t(k, "entries").call(k),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (m) {
                    return !1
                }
            }()) return a;
        var b = new w.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.B(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.sa ? l.sa.value = k : (l.sa = {
                next: this.j,
                Wa: this.j.Wa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.sa), this.j.Wa.next = l.sa, this.j.Wa = l.sa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.sa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.sa.Wa.next = h.sa.next, h.sa.next.Wa = h.sa.Wa, h.sa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Wa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).sa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).sa) && h.value
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
            for (var l = _.t(this, "entries").call(this), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[_.t(w.Symbol, "iterator")] = _.t(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.m[l];
                if (n && rq(h.m, l))
                    for (h = 0; h < n.length; h++) {
                        var m = n[h];
                        if (k !== k && m.key !== m.key || k === m.key) return {
                            id: l,
                            list: n,
                            index: h,
                            sa: m
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    sa: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return pq(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Wa;
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
                return h.Wa = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Jq = function(a, b) {
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
        e[_.t(w.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    oq("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Jq(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    oq("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Jq(this, function(b) {
                return b
            })
        }
    }, "es6");
    var Kq = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    oq("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Kq(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Lq = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                ne: f
            }
        }
        return {
            i: -1,
            ne: void 0
        }
    };
    oq("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Lq(this, b, c).ne
        }
    }, "es6");
    oq("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    oq("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    oq("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    oq("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof w.Symbol && _.t(w.Symbol, "iterator") && b[_.t(w.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    oq("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Jq(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    oq("Array.prototype.fill", function(a) {
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
    var Mq = function(a) {
        return a ? a : _.t(Array.prototype, "fill")
    };
    oq("Int8Array.prototype.fill", Mq, "es6");
    oq("Uint8Array.prototype.fill", Mq, "es6");
    oq("Uint8ClampedArray.prototype.fill", Mq, "es6");
    oq("Int16Array.prototype.fill", Mq, "es6");
    oq("Uint16Array.prototype.fill", Mq, "es6");
    oq("Int32Array.prototype.fill", Mq, "es6");
    oq("Uint32Array.prototype.fill", Mq, "es6");
    oq("Float32Array.prototype.fill", Mq, "es6");
    oq("Float64Array.prototype.fill", Mq, "es6");
    oq("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.B([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.t(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new w.Map;
            if (c) {
                c = _.B(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.t(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.t(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.t(b.prototype, "values");
        b.prototype[_.t(w.Symbol, "iterator")] = _.t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    oq("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) rq(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    oq("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Kq(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    oq("globalThis", function(a) {
        return a || lq
    }, "es_2020");
    oq("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            for (var d = [], e = 0; e < this.length; e++) {
                var f = b.call(c, this[e], e, this);
                Array.isArray(f) ? d.push.apply(d, f) : d.push(f)
            }
            return d
        }
    }, "es9");
    oq("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    oq("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    oq("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Kq(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    oq("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.P(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    oq("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.t(Array, "from").call(Array, b);
            return w.Promise.all(b.map(function(c) {
                return w.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new w.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    oq("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) rq(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    oq("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.t(w.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.t(w.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    oq("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Lq(this, b, c).i
        }
    }, "es6");
    oq("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return w.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return w.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    _.q = this || self;
    Yc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    ra = function(a) {
        var b = Yc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ka = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    la = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Nq) && a[Nq] || (a[Nq] = ++Oq)
    };
    Nq = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Oq = 0;
    Pq = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Qq = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.Rq = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Rq = Pq : _.Rq = Qq;
        return _.Rq.apply(null, arguments)
    };
    _.Sq = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    re = function() {
        return Date.now()
    };
    var Tq;
    var Xf = function(a, b) {
        this.j = a === Uq && b || "";
        this.m = Vq
    };
    Xf.prototype.Ta = !0;
    Xf.prototype.Na = function() {
        return this.j
    };
    var Yf = function(a) {
            return a instanceof Xf && a.constructor === Xf && a.m === Vq ? a.j : "type_error:Const"
        },
        Wq = function(a) {
            return new Xf(Uq, a)
        },
        Vq = {},
        Uq = {};
    var ob = Wq("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Xq, Yq, Rh, $q;
    Xq = function() {
        return !0
    };
    Yq = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Rh = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Zq = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    $q = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.q.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var ar, ca;
    ar = {
        passive: !0
    };
    ca = Rh(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.eb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, da(d)), !0) : !1
    };
    _.Sd = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, da(d)), !0) : !1
    };
    var cr;
    _.ea = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.br = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.rg = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Nc = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    cr = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Jg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var eg = {
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
    var yn = {},
        Ta = function(a, b) {
            this.j = b === yn ? a : "";
            this.Ta = !0
        };
    Ta.prototype.toString = function() {
        return this.j.toString()
    };
    Ta.prototype.Na = function() {
        return this.j.toString()
    };
    var $f = function(a, b) {
        this.j = b === dr ? a : ""
    };
    $f.prototype.toString = function() {
        return this.j + ""
    };
    $f.prototype.Ta = !0;
    $f.prototype.Na = function() {
        return this.j.toString()
    };
    var Va = function(a) {
            return a instanceof $f && a.constructor === $f ? a.j : "type_error:TrustedResourceUrl"
        },
        nb = function(a, b) {
            var c = Yf(a);
            if (!er.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(fr, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Xf ? Yf(d) : encodeURIComponent(String(d))
            });
            return Ld(a)
        },
        fr = /%{(\w+)}/g,
        er = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        gr = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        dr = {},
        Ld = function(a) {
            return new $f(a, dr)
        },
        hr = function(a, b, c) {
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
    var ir = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        Lj = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Op = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        dg = function(a) {
            if (!jr.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(kr, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(lr, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(mr, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(nr, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(or, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(pr, "&#0;"));
            return a
        },
        kr = /&/g,
        lr = /</g,
        mr = />/g,
        nr = /"/g,
        or = /'/g,
        pr = /\x00/g,
        jr = /[\x00&<>"']/,
        Pp = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Na = function(a, b) {
            this.j = b === qr ? a : ""
        },
        Oa, bg, ag, qr;
    Na.prototype.toString = function() {
        return this.j.toString()
    };
    Na.prototype.Ta = !0;
    Na.prototype.Na = function() {
        return this.j.toString()
    };
    Oa = function(a) {
        return a instanceof Na && a.constructor === Na ? a.j : "type_error:SafeUrl"
    };
    bg = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    ag = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    qr = {};
    _.cb = function(a) {
        return new Na(a, qr)
    };
    _.cg = _.cb("about:invalid#zClosurez");
    var hg = {},
        gg = function(a, b) {
            this.j = b === hg ? a : "";
            this.Ta = !0
        };
    gg.prototype.Na = function() {
        return this.j.toString()
    };
    gg.prototype.toString = function() {
        return this.j.toString()
    };
    var Ya = function(a) {
            return a instanceof gg && a.constructor === gg ? a.j : "type_error:SafeHtml"
        },
        rr = function(a) {
            return a instanceof gg ? a : new gg(dg("object" == typeof a && a.Ta ? a.Na() : String(a)), hg)
        },
        sr = function(a) {
            var b = rr(Tf),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = rr(e), c.push(Ya(e).toString()))
                };
            a.forEach(d);
            return new gg(c.join(Ya(b).toString()), hg)
        },
        fg = function(a) {
            return sr(Array.prototype.slice.call(arguments))
        },
        Vf = /^[a-zA-Z0-9-]+$/,
        Zf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Wf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Tf = new gg(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "", hg);
    var tr;
    try {
        new URL("s://g"), tr = !0
    } catch (a) {
        tr = !1
    }
    var Pa = tr;
    var ur = {
            Ag: 0,
            vg: 1,
            wg: 2,
            0: "HTML_FORMATTED_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        vr = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + ur[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.P(vr, Error);
    _.$a = function(a) {
        this.df = a
    };
    _.wr = [ab("data"), ab("http"), ab("https"), ab("mailto"), ab("ftp"), new _.$a(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var ib = function(a) {
        return new w.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var xr = {};
    var rb, qb = "undefined" !== typeof TextEncoder;
    var yr = function(a) {
        yr[" "](a);
        return a
    };
    yr[" "] = function() {};
    var zr = function(a, b) {
        try {
            return yr(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Ar, Cr, Dr, Er, Fr, Gr;
    Ar = Ga("Opera");
    _.Br = Ga("Trident") || Ga("MSIE");
    Cr = Ga("Edge");
    Dr = Ga("Gecko") && !(-1 != Fa().toLowerCase().indexOf("webkit") && !Ga("Edge")) && !(Ga("Trident") || Ga("MSIE")) && !Ga("Edge");
    Er = -1 != Fa().toLowerCase().indexOf("webkit") && !Ga("Edge");
    Fr = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Hr = "",
            Ir = function() {
                var a = Fa();
                if (Dr) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Cr) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Br) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Er) return /WebKit\/(\S+)/.exec(a);
                if (Ar) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ir && (Hr = Ir ? Ir[1] : "");
        if (_.Br) {
            var Jr = Fr();
            if (null != Jr && Jr > parseFloat(Hr)) {
                Gr = String(Jr);
                break a
            }
        }
        Gr = Hr
    }
    var Kr = Gr,
        Lr;
    if (_.q.document && _.Br) {
        var Mr = Fr();
        Lr = Mr ? Mr : parseInt(Kr, 10) || void 0
    } else Lr = void 0;
    var Nr = Lr;
    !Ga("Android") || Ja();
    Ja();
    Ka();
    var Or = {},
        Pr = null,
        Qr = Dr || Er || "function" == typeof _.q.btoa,
        oc = function(a, b) {
            void 0 === b && (b = 0);
            Rr();
            b = Or[b];
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
        Sr = function(a, b) {
            if (Qr && !b) a = _.q.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = oc(c, b)
            }
            return a
        },
        $n = function(a) {
            var b = "";
            Tr(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        Ur = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Tr(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Tr = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Pr[l];
                    if (null != n) return n;
                    if (!Lj(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Rr();
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
        Rr = function() {
            if (!Pr) {
                Pr = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Or[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Pr[f] && (Pr[f] = e)
                    }
                }
            }
        };
    var tb = "undefined" !== typeof Uint8Array,
        Xi, vb = {};
    var Vr, Mb = function(a, b) {
            wb(b);
            this.ra = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Nb = function() {
            return Vr || (Vr = new Mb(null, vb))
        },
        pc = function(a) {
            var b = a.ra;
            return null == b ? "" : "string" === typeof b ? b : a.ra = oc(b)
        };
    Mb.prototype.isEmpty = function() {
        return null == this.ra
    };
    var mc = function(a, b) {
            if (!a.ra || !b.ra || a.ra === b.ra) return a.ra === b.ra;
            if ("string" === typeof a.ra && "string" === typeof b.ra) {
                var c = a.ra,
                    d = b.ra;
                b.ra.length > a.ra.length && (d = a.ra, c = b.ra);
                if (0 !== c.lastIndexOf(d, 0)) return !1;
                for (b = d.length; b < c.length; b++)
                    if ("=" !== c[b]) return !1;
                return !0
            }
            c = Wi(a);
            b = Wi(b);
            if (c.length !== b.length) return !1;
            for (a = 0; a < c.length; a++)
                if (c[a] !== b[a]) return !1;
            return !0
        },
        Wi = function(a) {
            wb(vb);
            var b = a.ra;
            b = null == b || ub(b) ? b : "string" === typeof b ? Ur(b) : null;
            return null == b ? b : a.ra = b
        };
    var xb = "function" === typeof w.Symbol && "symbol" === typeof(0, w.Symbol)() ? (0, w.Symbol)() : void 0;
    var Wb = {},
        Wr, Dc, Xr = [];
    Bb(Xr, 23);
    Dc = Object.freeze(Xr);
    var Kc = function(a) {
            if (Db(a.ba)) throw Error("Cannot mutate an immutable Message");
        },
        Yr = function(a) {
            this.Qd = 0;
            this.yd = a
        };
    Yr.prototype.next = function() {
        return this.Qd < this.yd.length ? {
            done: !1,
            value: this.yd[this.Qd++]
        } : {
            done: !0,
            value: void 0
        }
    };
    Yr.prototype[_.t(w.Symbol, "iterator")] = function() {
        return this
    };
    var Qb;
    var nc = function(a, b, c, d) {
            d = void 0 === d ? bc : d;
            c = Ab(a);
            c |= 32;
            Bb(a, c);
            this.m = c;
            this.D = (this.I = b) ? $b : ac;
            this.l = d;
            this.j = b = new w.Map;
            for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
            this.size = b.size
        },
        Zr = function(a) {
            if (a.m & 2) throw Error("Cannot mutate an immutable Map");
        },
        ic = function(a, b) {
            return new nc(b, a.I, a.D, a.l)
        },
        qc = function(a, b) {
            b = void 0 === b ? cc : b;
            for (var c = $r(a), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = a.j.get(c[d]);
                c[d] = [b(e), b(f)]
            }
            return c
        },
        zc = function(a, b) {
            b = void 0 === b ? cc : b;
            var c = [];
            a = _.t(a.j, "entries").call(a.j);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    aa = nc.prototype;
    aa.clear = function() {
        Zr(this);
        this.j.clear();
        this.size = 0
    };
    aa.delete = function(a) {
        Zr(this);
        return this.j.delete(a) ? (this.size = this.j.size, !0) : !1
    };
    aa.entries = function() {
        for (var a = $r(this), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new Yr(a)
    };
    aa.keys = function() {
        var a = $r(this);
        return new Yr(a)
    };
    aa.values = function() {
        for (var a = $r(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new Yr(a)
    };
    aa.forEach = function(a, b) {
        for (var c = $r(this), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, this.get(e), e, this)
        }
    };
    aa.set = function(a, b) {
        Zr(this);
        var c = this.j;
        if (null == b) return c.delete(a), this;
        c.set(a, this.D(b, this.I, !1, this.C));
        this.size = c.size;
        return this
    };
    aa.get = function(a) {
        var b = this.j;
        if (b.has(a)) {
            var c = b.get(a),
                d = this.m,
                e = this.I;
            e && Array.isArray(c) && d & 16 && Fb(c);
            d = this.D(c, e, !!(d & 2), this.C);
            d !== c && b.set(a, d);
            return d
        }
    };
    aa.has = function(a) {
        return this.j.has(a)
    };
    var $r = function(a) {
        return _.t(Array, "from").call(Array, _.t(a.j, "keys").call(a.j)).sort(Yb)
    };
    nc.prototype[_.t(w.Symbol, "iterator")] = function() {
        return _.t(this, "entries").call(this)
    };
    var Bc, y, ok, wh, Vm, Ee, F, Vi, fe, Ic, Fc, Ge, bs, Qi, Ui, Ti, Pn, cs, as, Rn, Me, Wc, Vg, Sc, ds, bf, Yi, es, gs, Xk, Ym, Yo, ge, Po, hs, Sm, is, js, ks, jf;
    Bc = function(a) {
        var b = a.j + a.gb;
        return a.Da || (a.Da = a.ba[b] = {})
    };
    y = function(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.Da ? a.Da[b] : void 0 : c && a.Da && (c = a.Da[b], null != c) ? c : a.ba[b + a.gb]
    };
    _.A = function(a, b, c, d) {
        Kc(a);
        return Cc(a, b, c, d)
    };
    ok = function(a, b) {
        return null != y(a, b, !1)
    };
    wh = function(a, b, c) {
        return void 0 !== as(a, b, c, !1)
    };
    Vm = function(a, b) {
        return Ec(a, b, 0, !1, Db(a.ba))
    };
    Ee = function(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    };
    F = function(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    };
    Vi = function(a, b) {
        var c = y(a, b),
            d = Ob(c, !0);
        null != d && d !== c && Cc(a, b, d);
        return d
    };
    fe = function(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    };
    Fc = function(a, b, c, d) {
        if (null == c) c = Dc;
        else {
            var e = Ab(c);
            1 !== (e & 1) && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), Bb(c, e | 1))
        }
        return _.A(a, b, c, d)
    };
    _.jh = function(a, b, c) {
        if (null == c) a = _.A(a, b, Dc);
        else {
            var d = Ab(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (var e = 0; e < c.length; e++) c[e] = c[e];
                Bb(c, d | 5)
            }
            a = _.A(a, b, c)
        }
        return a
    };
    Ge = function(a, b) {
        return _.A(a, b, void 0, !1)
    };
    bs = function(a, b, c) {
        Kc(a);
        Ec(a, b, 2, !1, !1).push(c)
    };
    Qi = function(a, b, c, d) {
        Kc(a);
        (c = Ti(a, c)) && c !== b && null != d && Cc(a, c, void 0, !1);
        return Cc(a, b, d)
    };
    Ui = function(a, b, c) {
        return Ti(a, b) === c ? c : -1
    };
    Ti = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != y(a, e) && (0 !== c && Cc(a, c, void 0, !1), c = e)
        }
        return c
    };
    Pn = function(a, b, c) {
        Kc(a);
        var d = y(a, c);
        b = Zb(Xb(d, b, !0));
        d !== b && Cc(a, c, b);
        return b
    };
    cs = (0, w.Symbol)(void 0);
    as = function(a, b, c, d) {
        var e = y(a, c, d);
        b = Xb(e, b);
        b !== e && null != b && (Cc(a, c, b, d), yb(b.ba, Ab(a.ba) & 18));
        return b
    };
    Rn = function(a, b, c) {
        if (a = as(a, b, c, !1)) b = a;
        else if (a = b[cs]) b = a;
        else {
            a = new b;
            if (xr !== xr) throw Error("requires a valid immutable API token");
            Db(a.ba) || ((c = a.m) && dc(void 0, void 0, c.ba, void 0, void 0, a.ba) ? a = c : (c = Rc(a, !0), Eb(c.ba), a = a.m = c));
            b = b[cs] = a
        }
        return b
    };
    Me = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = as(a, b, c, d);
        if (null == b) return b;
        if (!Db(a.ba)) {
            var e = Zb(b);
            e !== b && (b = e, Cc(a, c, b, d))
        }
        return b
    };
    Wc = function(a, b, c, d) {
        var e = Db(a.ba);
        b = Lc(a, b, c, d, e, e);
        a = Ec(a, c, 3, d, e);
        if (!(e || Ab(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = Zb(c), c !== d && (b[e] = d, a[e] = b[e].ba);
            yb(a, 8)
        }
        return b
    };
    _.Sg = function(a, b, c) {
        Kc(a);
        null == c && (c = void 0);
        return Cc(a, b, c)
    };
    Vg = function(a, b, c, d) {
        Kc(a);
        null == d && (d = void 0);
        return Qi(a, b, c, d)
    };
    Sc = function(a, b, c, d) {
        Kc(a);
        if (null != c) {
            var e = Cb([]);
            for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].ba, f = f || Db(e[g]);
            a.Aa || (a.Aa = {});
            a.Aa[b] = c;
            c = e;
            f ? zb(c, 8) : yb(c, 8)
        } else a.Aa && (a.Aa[b] = void 0), e = Dc;
        return Cc(a, b, e, d)
    };
    ds = function(a, b, c, d) {
        Kc(a);
        var e = Lc(a, c, b, void 0, !1, !1);
        c = null != d ? d : new c;
        a = Ec(a, b, 2, void 0, !1);
        e.push(c);
        a.push(c.ba);
        Db(c.ba) && zb(a, 8);
        return c
    };
    bf = function(a, b, c, d) {
        ds(a, b, c, d);
        return a
    };
    Yi = function(a, b, c) {
        return Mc(y(a, b), void 0 === c ? 0 : c)
    };
    es = function() {
        var a = $h().j;
        return y(a, 26)
    };
    gs = function(a) {
        var b = fs;
        var c = void 0 === c ? 0 : c;
        return Yi(a, Ui(a, b, 3), c)
    };
    Xk = function(a, b) {
        return Gc(a, b, Vb, !1)
    };
    Ym = function(a, b) {
        return Mc(y(a, b), "")
    };
    Yo = function(a, b, c) {
        return Mc(F(a, b), void 0 === c ? !1 : c)
    };
    ge = function(a, b) {
        return Mc(y(a, b), 0)
    };
    Po = function(a, b) {
        return Mc(y(a, b), 0)
    };
    hs = function(a, b) {
        return Ym(a, Ui(a, b, 2))
    };
    Sm = function(a, b, c, d) {
        return Me(a, b, Ui(a, d, c))
    };
    is = function(a, b) {
        a = y(a, b);
        return null == a ? void 0 : a
    };
    js = function(a, b) {
        a = F(a, b);
        return null == a ? void 0 : a
    };
    ks = function(a, b) {
        a = y(a, b);
        return null == a ? void 0 : a
    };
    jf = function(a, b) {
        return null != y(a, b)
    };
    _.R = function(a, b, c) {
        null == a && (a = Qb);
        Qb = void 0;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            a = f ? [f] : [];
            var h = !0;
            Bb(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = yb(a, 0),
                l = k;
            if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
            if (e)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var n = a[a.length - 1];
                        if (Jb(n) && "g" in n) {
                            d = 0;
                            l |= 128;
                            delete n.g;
                            var m = !0,
                                p;
                            for (p in n) {
                                m = !1;
                                break
                            }
                            m && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && Bb(a, l)
        }
        this.gb = (f ? 0 : -1) - d;
        this.Aa = void 0;
        this.ba = a;
        a: {
            f = this.ba.length;d = f - 1;
            if (f && (f = this.ba[d], Jb(f))) {
                this.Da = f;
                this.j = d - this.gb;
                break a
            }
            void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.gb), this.Da = void 0) : this.j = Number.MAX_VALUE
        }
        if (!e && this.Da && "g" in this.Da) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !g && !0;
            e = this.j;
            var r;
            for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.gb, (d = a[g]) ? Tc(d, b) : a[g] = Dc) : (r || (r = Bc(this)), (d = r[g]) ? Tc(d, b) : r[g] = Dc)
        }
    };
    _.R.prototype.toJSON = function() {
        var a = this.ba;
        return Wr ? a : sc(a, uc, vc)
    };
    var ce = function(a) {
            Wr = !0;
            try {
                return JSON.stringify(a.toJSON(), Uc)
            } finally {
                Wr = !1
            }
        },
        Yd = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error(void 0);
            return Sb(a, Fb(b))
        },
        Ac = function(a) {
            var b = sc(a.ba, xc, Gb);
            Fb(b);
            b = Rb(a, b);
            Xc(b, a);
            return b
        },
        Zb = function(a) {
            if (Db(a.ba)) {
                var b = Rc(a, !1);
                b.m = a;
                a = b
            }
            return a
        };
    _.R.prototype.Wb = Wb;
    var $c = 0,
        ad = 0,
        cd = "function" === typeof BigInt;
    var ls = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        ns = function(a) {
            if (!a) return ms || (ms = new ls(0, 0));
            if (!/^\d+$/.test(a)) return null;
            dd(a);
            return new ls($c, ad)
        },
        ms, os = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        td = function(a) {
            if (!a) return ps || (ps = new os(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            dd(a);
            return new os($c, ad)
        },
        ps;
    var qs = function() {
        this.j = []
    };
    qs.prototype.length = function() {
        return this.j.length
    };
    qs.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var vd = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        ud = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        rs = function(a, b) {
            if (0 <= b) ud(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var ss = function() {
            this.D = [];
            this.m = 0;
            this.j = new qs
        },
        ts = function(a, b) {
            0 !== b.length && (a.D.push(b), a.m += b.length)
        },
        us = function(a, b) {
            ud(a.j, 8 * b + 2);
            b = a.j.end();
            ts(a, b);
            b.push(a.m);
            return b
        },
        vs = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        gd = function(a, b) {
            if (b = b.yb) {
                ts(a, a.j.end());
                for (var c = 0; c < b.length; c++) ts(a, Wi(b[c]) || Xi || (Xi = new Uint8Array(0)))
            }
        },
        ws = function(a, b, c) {
            ud(a.j, 8 * b + 2);
            ud(a.j, c.length);
            ts(a, a.j.end());
            ts(a, c)
        };
    var ld = (0, w.Symbol)(),
        jd = (0, w.Symbol)(),
        id = (0, w.Symbol)(),
        Xe = function(a, b) {
            var c = new ss;
            nd(a, c, md(b));
            ts(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.D;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.D = [a];
            return a
        },
        xs = sd(function(a, b, c) {
            if (5 !== a.j()) return !1;
            _.A(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = Ee(b, c);
            if (null != b) {
                ud(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? $c = ad = 0 : (ad = 0, $c = 2147483648) : isNaN(d) ? (ad = 0, $c = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (ad = 0, $c = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), ad = 0, $c = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, ad = 0, $c = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = $c;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        ys = sd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.B());
            return !0
        }, wd),
        zs = sd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.o());
            return !0
        }, wd),
        As = sd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.O());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && ("string" === typeof b && ns(b), null != b && (ud(a.j, 8 * c), "number" === typeof b ? (a = a.j, bd(b), vd(a, $c, ad)) : (c = ns(b), vd(a.j, c.m, c.j))))
        }),
        Bs = sd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && null != b && (ud(a.j, 8 * c), rs(a.j, b))
        }),
        Cs = sd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && (ud(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        Ds = sd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            _.A(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && ws(a, c, sb(b))
        }),
        Es = sd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            bs(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = Xk(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && ws(a, c, sb(e))
                }
        }),
        Fs = sd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Pn(b, d, c), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Me(b, d, c);
            null != b && (c = us(a, c), e(b, a), vs(a, c))
        }),
        Gs = sd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(ds(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Wc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = us(a, c);
                    e(b[d], a);
                    vs(a, f)
                }
        }),
        Hs = sd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && (b = parseInt(b, 10), ud(a.j, 8 * c), rs(a.j, b))
        });
    var D = {
        zg: function() {},
        oh: function() {
            return ""
        },
        tg: function() {}
    };
    D.gd = xd;
    var Is = xd(function(a) {
        return null !== a && void 0 !== a
    }, "exists");
    D.assert = function() {};
    D.ta = function(a) {
        return a
    };
    var yd = void 0;
    D.uh = zd;
    D.wh = Ad;
    D.kh = function() {};
    D.lh = function(a) {
        return a
    };
    D.be = Bd;
    D.yh = function(a, b) {
        Bd(a, b);
        return a
    };
    D.jh = function() {};
    D.J = function(a) {
        return a
    };
    D.vh = function(a, b) {
        zd(a, Is, b)
    };
    D.xh = function(a, b) {
        return Ad(a, Is, b)
    };
    D.nh = function(a, b) {
        return a(b)
    };
    D.functionName = function(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };
    D.qh = function(a) {
        Bd(!yd);
        yd = function() {
            var b = "function" === typeof a ? a() : a;
            yd = void 0;
            return b
        }
    };
    var co = function(a) {
        _.R.call(this, a)
    };
    _.P(co, _.R);
    var bo = function(a) {
        _.R.call(this, a)
    };
    _.P(bo, _.R);
    var Js = function(a) {
            this.j = a.m;
            this.m = a.D;
            this.I = a.I;
            this.Vb = a.Vb;
            this.G = a.G;
            this.Eb = a.Eb;
            this.Fc = a.Fc;
            this.Mc = a.Mc;
            this.Ec = a.Ec;
            this.D = a.j
        },
        Ks = function(a, b, c) {
            this.m = a;
            this.D = b;
            this.I = c;
            this.G = window;
            this.Eb = "env";
            this.Fc = "n";
            this.Mc = "0";
            this.Ec = "1";
            this.j = !0
        };
    Ks.prototype.build = function() {
        return new Js(this)
    };
    var mo = function(a, b) {
        var c = void 0 === Yo(b, 6) ? !0 : Yo(b, 6),
            d, e;
        a: switch (fe(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new Ks(Cd(fe(b, 2, 0)), Ym(b, 3), f);
        b = null != (e = null == (d = Me(b, bo, 5)) ? void 0 : Ym(d, 1)) ? e : "";
        f.Vb = b;
        f.j = c;
        f.G = a;
        return f.build()
    };
    var Vk = function(a) {
        _.R.call(this, a)
    };
    _.P(Vk, _.R);
    var Uk = function(a, b) {
            return _.A(a, 1, b)
        },
        Sk = function(a, b) {
            return _.A(a, 4, b)
        },
        Tk = function(a, b) {
            return _.A(a, 2, b)
        },
        Ls = [Vk, 1, Hs, 4, Cs, 2, Bs, 3, Ds];
    var cl = function(a) {
        _.R.call(this, a, -1, Ms)
    };
    _.P(cl, _.R);
    var bl = function(a, b) {
            return _.A(a, 1, b)
        },
        dl = function(a, b) {
            _.A(a, 2, b)
        },
        $k = function(a, b) {
            return bf(a, 3, il, b)
        },
        al = function(a, b) {
            return _.A(a, 4, b)
        };
    cl.prototype.Od = function() {
        return fe(this, 7, 0)
    };
    var il = function(a) {
        _.R.call(this, a, -1, Ns)
    };
    _.P(il, _.R);
    var ll = function(a, b) {
            _.jh(a, 4, b)
        },
        jl = function(a, b) {
            _.Sg(a, 6, b)
        },
        nl = function(a, b) {
            _.Sg(a, 7, b)
        },
        Os = function(a) {
            _.R.call(this, a)
        };
    _.P(Os, _.R);
    Os.prototype.getId = function() {
        return Ym(this, 1)
    };
    var kl = function(a) {
            var b = new Os;
            return _.A(b, 1, a)
        },
        Ps = function(a) {
            _.R.call(this, a)
        };
    _.P(Ps, _.R);
    Ps.prototype.getWidth = function() {
        return ge(this, 1)
    };
    var pl = function(a) {
        var b = new Ps;
        return _.A(b, 1, a)
    };
    Ps.prototype.getHeight = function() {
        return ge(this, 2)
    };
    var ol = function(a, b) {
            return _.A(a, 2, b)
        },
        Qs = function(a) {
            _.R.call(this, a)
        };
    _.P(Qs, _.R);
    var Ms = [3],
        Ns = [4],
        Rs = [cl, 1, Ds, 2, zs, 3, Gs, [il, 1, Ds, 2, zs, 8, zs, 3, Ds, 4, Es, 5, Hs, 6, Fs, [Os, 1, Ds], 7, Fs, [Ps, 1, Bs, 2, Bs], 9, Fs, [Qs, 1, zs, 2, Cs]], 4, Hs, 5, Fs, Ls, 6, Cs, 7, Hs];
    var Ss = function(a) {
        _.R.call(this, a)
    };
    _.P(Ss, _.R);
    var Ts = [Ss, 1, Hs, 2, Cs];
    var Vs = function(a) {
        _.R.call(this, a, -1, Us)
    };
    _.P(Vs, _.R);
    var Zk = function(a, b) {
            return ds(a, 2, cl, b)
        },
        gl = function(a, b) {
            _.Sg(a, 5, b)
        },
        Us = [2],
        Ws = [Vs, 1, Hs, 6, Ds, 2, Gs, Rs, 3, Hs, 4, Ds, 5, Fs, Ls, 9, Fs, Ts, 7, Cs, 8, Bs];
    var Ys = function(a) {
        _.R.call(this, a, -1, Xs)
    };
    _.P(Ys, _.R);
    var Zs = function(a) {
            var b = new Vs;
            b = _.A(b, 1, 1);
            return ds(a, 1, Vs, b)
        },
        Xs = [1],
        $s = [Ys, 1, Gs, Ws];
    var bt = function(a) {
        _.R.call(this, a, -1, at)
    };
    _.P(bt, _.R);
    var dt = function(a) {
        _.R.call(this, a, -1, ct)
    };
    _.P(dt, _.R);
    var et = function(a) {
        _.R.call(this, a)
    };
    _.P(et, _.R);
    var at = [1],
        ct = [1],
        fs = [2, 3];
    var ft = function(a) {
        _.R.call(this, a)
    };
    _.P(ft, _.R);
    ft.prototype.na = function() {
        return Ym(this, 1)
    };
    ft.prototype.D = function() {
        return hs(this, gt)
    };
    var gt = [2, 3];
    var gf = function(a) {
        _.R.call(this, a, -1, ht)
    };
    _.P(gf, _.R);
    gf.prototype.Ra = function() {
        return Ym(this, 1)
    };
    gf.prototype.Cc = function() {
        return jf(this, 1)
    };
    gf.prototype.Qb = function() {
        return Wc(this, ft, 2)
    };
    var ht = [2];
    var jt = function(a) {
        _.R.call(this, a, -1, it)
    };
    _.P(jt, _.R);
    jt.prototype.Ra = function() {
        return Ym(this, 1)
    };
    jt.prototype.Cc = function() {
        return jf(this, 1)
    };
    var it = [4];
    var kt = function(a) {
        _.R.call(this, a)
    };
    _.P(kt, _.R);
    var mt = function(a) {
        _.R.call(this, a, -1, lt)
    };
    _.P(mt, _.R);
    mt.prototype.Bc = function() {
        return Rn(this, kt, 2)
    };
    var lt = [1];
    var pt = function(a) {
        _.R.call(this, a, -1, nt)
    };
    _.P(pt, _.R);
    var qt = function(a) {
        _.R.call(this, a)
    };
    _.P(qt, _.R);
    qt.prototype.Ra = function() {
        return Ym(this, 1)
    };
    qt.prototype.Cc = function() {
        return jf(this, 1)
    };
    var nt = [1];
    var rt = function(a) {
        _.R.call(this, a)
    };
    _.P(rt, _.R);
    rt.prototype.getAdUnitPath = function() {
        return Ym(this, 1)
    };
    var st = function(a) {
        _.R.call(this, a)
    };
    _.P(st, _.R);
    var tt = [st, 1, ys];
    var Nm = function(a) {
        _.R.call(this, a)
    };
    _.P(Nm, _.R);
    Nm.prototype.getEscapedQemQueryId = function() {
        return Ym(this, 1)
    };
    var ut = function(a) {
        _.R.call(this, a)
    };
    _.P(ut, _.R);
    var vt = [Nm, 1, Ds, 2, Fs, tt, 3, Fs, [ut, 1, Hs, 2, zs]];
    var xt = function(a) {
        _.R.call(this, a, -1, wt)
    };
    _.P(xt, _.R);
    var Qm = function(a) {
        _.R.call(this, a)
    };
    _.P(Qm, _.R);
    var Tm = function(a) {
        _.R.call(this, a)
    };
    _.P(Tm, _.R);
    var wt = [1, 2],
        Rm = [1, 2];
    var Xm = function(a) {
        _.R.call(this, a)
    };
    _.P(Xm, _.R);
    Xm.prototype.getAdUnitPath = function() {
        return Ym(this, 2)
    };
    Xm.prototype.getWidth = function() {
        return ge(this, 3)
    };
    Xm.prototype.getHeight = function() {
        return ge(this, 4)
    };
    var zt = function(a) {
        _.R.call(this, a, -1, yt)
    };
    _.P(zt, _.R);
    var yt = [3];
    var At = function(a) {
        _.R.call(this, a)
    };
    _.P(At, _.R);
    var Bt = [5, 6, 7, 8];
    var Dt = function(a) {
        _.R.call(this, a, -1, Ct)
    };
    _.P(Dt, _.R);
    var Ct = [4, 5, 6];
    var Et = function(a) {
        _.R.call(this, a)
    };
    _.P(Et, _.R);
    Et.prototype.Rb = function() {
        return jf(this, 2)
    };
    var Gt = function(a) {
        _.R.call(this, a, -1, Ft)
    };
    _.P(Gt, _.R);
    var Ft = [13];
    var It = function(a) {
        _.R.call(this, a, -1, Ht)
    };
    _.P(It, _.R);
    var Ht = [13];
    var Re = function(a) {
        _.R.call(this, a, -1, Jt)
    };
    _.P(Re, _.R);
    var Kt = function(a) {
        _.R.call(this, a)
    };
    _.P(Kt, _.R);
    var Lt = function(a) {
        _.R.call(this, a)
    };
    _.P(Lt, _.R);
    var Mt = function(a) {
        _.R.call(this, a)
    };
    _.P(Mt, _.R);
    var We = function(a) {
        _.R.call(this, a)
    };
    _.P(We, _.R);
    We.prototype.na = function() {
        return y(this, 1)
    };
    var af = function(a) {
            var b = new We;
            return _.A(b, 1, a)
        },
        Ke = function(a, b) {
            return _.Sg(a, 10, b)
        },
        Ne = function(a) {
            _.R.call(this, a)
        };
    _.P(Ne, _.R);
    var Le = function(a, b) {
            return _.A(a, 1, b)
        },
        Jt = [1, 2],
        Nt = [Lt, 1, As, 2, As, 3, As],
        Ye = [Re, 1, Gs, [Kt, 5, Ds, 4, Ds, 2, Fs, Nt, 3, Fs, Nt, 6, Cs, 7, Fs, [Mt, 4, Hs, 5, Ds], 8, zs], 2, Gs, [We, 1, Ds, 2, Ds, 3, zs, 7, zs, 8, xs, 4, Bs, 5, Bs, 6, Bs, 9, Cs, 11, Cs, 10, Fs, [Ne, 1, Hs]]];
    var Ot = function(a) {
        _.R.call(this, a)
    };
    _.P(Ot, _.R);
    Ot.prototype.na = function() {
        return Ym(this, 1)
    };
    Ot.prototype.D = function() {
        return hs(this, Pt)
    };
    var Pt = [2, 3];
    var Rt = function(a) {
        _.R.call(this, a, -1, Qt)
    };
    _.P(Rt, _.R);
    Rt.prototype.Qb = function() {
        return Wc(this, Ot, 1)
    };
    var Qt = [1];
    var St = function(a) {
        _.R.call(this, a)
    };
    _.P(St, _.R);
    var Tt = function(a) {
        _.R.call(this, a)
    };
    _.P(Tt, _.R);
    Tt.prototype.Rb = function() {
        return jf(this, 1)
    };
    Tt.prototype.getVersion = function() {
        return y(this, 5)
    };
    var Ut = function(a) {
        _.R.call(this, a)
    };
    _.P(Ut, _.R);
    var Vt = function(a) {
        _.R.call(this, a)
    };
    _.P(Vt, _.R);
    var No = function(a) {
        _.R.call(this, a, -1, Wt)
    };
    _.P(No, _.R);
    No.prototype.getEscapedQemQueryId = function() {
        return Ym(this, 4)
    };
    var Wt = [2];
    var Mo = function(a) {
        _.R.call(this, a)
    };
    _.P(Mo, _.R);
    var Oo = function(a) {
        _.R.call(this, a)
    };
    _.P(Oo, _.R);
    var Qo = function(a) {
        _.R.call(this, a)
    };
    _.P(Qo, _.R);
    Qo.prototype.getEscapedQemQueryId = function() {
        return Ym(this, 2)
    };
    var Ro = function(a) {
        _.R.call(this, a)
    };
    _.P(Ro, _.R);
    var Yt = function(a) {
        _.R.call(this, a, -1, Xt)
    };
    _.P(Yt, _.R);
    Yt.prototype.getWidth = function() {
        return ge(this, 9)
    };
    Yt.prototype.getHeight = function() {
        return ge(this, 10)
    };
    var Xt = [3, 7, 11];
    var $t = function(a) {
        _.R.call(this, a, -1, Zt)
    };
    _.P($t, _.R);
    $t.prototype.getHeight = function() {
        return y(this, 6)
    };
    $t.prototype.getWidth = function() {
        return y(this, 7)
    };
    $t.prototype.getEscapedQemQueryId = function() {
        return y(this, 34)
    };
    var au = function(a) {
        _.R.call(this, a)
    };
    _.P(au, _.R);
    au.prototype.getHtml = function() {
        return Vi(this, 1)
    };
    var Zt = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
        bu = [4, 41],
        cu = [39, 48];
    var ao = function(a) {
        _.R.call(this, a)
    };
    _.P(ao, _.R);
    var eu = function(a) {
        _.R.call(this, a, -1, du)
    };
    _.P(eu, _.R);
    var du = [1, 2];
    var fu = window;
    var Vp = function(a) {
        _.R.call(this, a, -1, gu)
    };
    _.P(Vp, _.R);
    var gu = [15];
    var Up = function(a) {
        _.R.call(this, a)
    };
    _.P(Up, _.R);
    Up.prototype.getCorrelator = function() {
        return Yi(this, 1)
    };
    Up.prototype.setCorrelator = function(a) {
        return _.z(this, 1, a, 0)
    };
    var Tp = function(a) {
        _.R.call(this, a)
    };
    _.P(Tp, _.R);
    var hu = _.Br || Er;
    var iu = /^[\w+/_-]+[=]{0,2}$/,
        ju = function() {
            var a = _.q.document;
            return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && iu.test(a) ? a : "" : ""
        };
    _.Gh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Gh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Gh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Gh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Jh = function(a, b) {
        this.width = a;
        this.height = b
    };
    aa = _.Jh.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var ku, lu, mu, ou;
    ku = function(a) {
        return a = dg(a)
    };
    lu = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ re()).toString(36)
    };
    mu = 2147483648 * Math.random() | 0;
    _.nu = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    ou = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var ru, tu, su, wu, yu, Fd, Id, pu;
    ru = function(a) {
        return a ? new pu(_.qu(a)) : Tq || (Tq = new pu)
    };
    tu = function(a, b) {
        ya(b, function(c, d) {
            c && "object" == typeof c && c.Ta && (c = c.Na());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : su.hasOwnProperty(d) ? a.setAttribute(su[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    su = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.vu = function(a) {
        a = a.document;
        a = _.uu(a) ? a.documentElement : a.body;
        return new _.Jh(a.clientWidth, a.clientHeight)
    };
    wu = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Er && _.uu(a) ? a.documentElement : a.body || a.documentElement
    };
    _.xu = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    yu = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ra(f) || _.ka(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ka(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.br(g ? ha(f) : f, d)
            }
        }
    };
    _.uu = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.zu = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Au = function(a) {
        var b;
        if (hu && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ka(b) && 1 == b.nodeType ? b : null
    };
    Fd = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.qu = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    Id = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.xu(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    pu = function(a) {
        this.j = a || _.q.document || document
    };
    aa = pu.prototype;
    aa.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    aa.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    aa.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    aa.append = function(a, b) {
        yu(_.qu(a), a, arguments)
    };
    aa.qe = _.zu;
    var Bu = function() {
        return Ga("iPad") || Ga("Android") && !Ga("Mobile") || Ga("Silk")
    };
    var Du, gk, Eu, Ij;
    _.Cu = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    Du = function(a) {
        return a ? decodeURI(a) : a
    };
    gk = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) gk(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Eu = /#|$/;
    Ij = function(a, b) {
        var c = a.search(Eu);
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
    var Hd, Gd, Df, Fu, Ef, Gj, Sh, ie, cj, zh, he, je, cq, Hu, Iu, Th, Ju, Ku, Lu, Mu, Nu, Ou, Pu, Qu, Ru, ri, ti, si, Su, Tu, Vu, Wu, Xu, Yu, Zu, ze, $u, Om, Ck, av, mk, bv;
    Hd = function(a) {
        try {
            return !!a && null != a.location.href && zr(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Gd = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.q : d;
        c = (void 0 === c ? 0 : c) ? Fu(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Hd(c) || !a(c));) c = Fu(c)
    };
    Df = function() {
        var a = window;
        Gd(function(b) {
            a = b;
            return !1
        });
        return a
    };
    Fu = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Ef = function(a) {
        return Hd(a.top) ? a.top : null
    };
    Gj = function(a, b) {
        var c = _.Dd("SCRIPT", a);
        Wa(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Sh = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    ie = function() {
        if (!w.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            w.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.jk = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.Gu = function(a) {
        var b = [];
        _.jk(a, function(c) {
            b.push(c)
        });
        return b
    };
    cj = function(a, b) {
        return Aa(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    zh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    he = Rh(function() {
        return _.Jg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Hu) || 1E-4 > Math.random()
    });
    je = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    cq = Rh(function() {
        return Hu("MSIE")
    });
    Hu = function(a) {
        return -1 != Fa().indexOf(a)
    };
    Iu = /^([0-9.]+)px$/;
    Th = function(a) {
        return (a = Iu.exec(a)) ? +a[1] : null
    };
    Ju = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    Ku = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    Lu = {
        gg: "allow-forms",
        hg: "allow-modals",
        ig: "allow-orientation-lock",
        jg: "allow-pointer-lock",
        kg: "allow-popups",
        lg: "allow-popups-to-escape-sandbox",
        mg: "allow-presentation",
        ng: "allow-same-origin",
        og: "allow-scripts",
        pg: "allow-top-navigation",
        qg: "allow-top-navigation-by-user-activation"
    };
    Mu = Rh(function() {
        return _.Gu(Lu)
    });
    Nu = function(a) {
        var b = Mu();
        return a.length ? _.rg(b, function(c) {
            return !(0 <= _.ea(a, c))
        }) : b
    };
    Ou = function() {
        var a = _.Dd("IFRAME"),
            b = {};
        _.br(Mu(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Pu = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    Qu = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = Fu(a))) break
        }
        return null
    };
    Ru = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Dd("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Ml = Rh(function() {
        return !Bu() && (Ga("iPod") || Ga("iPhone") || Ga("Android") || Ga("IEMobile")) ? 2 : Bu() ? 1 : 0
    });
    ri = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.bi = function(a, b) {
        _.jk(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    ti = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    si = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Sh(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Su = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Nc(a, parseFloat)
    };
    Tu = {};
    _.Uu = (Tu["http://googleads.g.doubleclick.net"] = !0, Tu["http://pagead2.googlesyndication.com"] = !0, Tu["https://googleads.g.doubleclick.net"] = !0, Tu["https://pagead2.googlesyndication.com"] = !0, Tu);
    Vu = function(a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    };
    Wu = [];
    Xu = function() {
        var a = Wu;
        Wu = [];
        a = _.B(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    Yu = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    Zu = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    ze = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Zu(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    $u = function(a, b) {
        Jd(_.xu(_.qu(a)), a, b)
    };
    Om = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (Wu.push(b), 1 == Wu.length && (w.Promise ? w.Promise.resolve().then(Xu) : window.setImmediate ? setImmediate(Xu) : setTimeout(Xu, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Ck = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    av = function(a) {
        return new w.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    mk = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Dd = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    bv = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Hd(a) && (b = a);
        return b
    };
    _.cv = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.cv.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.cv.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.dv = function(a) {
        return new _.cv(a.top, a.right, a.bottom, a.left)
    };
    _.cv.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.cv.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.cv.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var ev = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        fv = function(a) {
            return new _.cv(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        gv = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new ev(c, e, d - c, a - e)
            }
            return null
        };
    ev.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ev.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ev.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var hv = function(a) {
        return (a = void 0 === a ? Kd() : a) ? Hd(a.master) ? a.master : null : null
    };
    var kv, Fg, Ih, mv, nv, Fh;
    _.jv = function(a, b, c) {
        if ("string" === typeof b)(b = _.iv(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.iv(c, d);
                f && (c.style[f] = e)
            }
    };
    kv = {};
    _.iv = function(a, b) {
        var c = kv[b];
        if (!c) {
            var d = _.nu(b);
            c = d;
            void 0 === a.style[d] && (d = (Er ? "Webkit" : Dr ? "Moz" : _.Br ? "ms" : null) + ou(d), void 0 !== a.style[d] && (c = d));
            kv[b] = c
        }
        return c
    };
    _.lv = function(a, b) {
        var c = _.qu(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Fg = function(a, b) {
        return _.lv(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Ih = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    mv = function(a) {
        if (_.Br && !(8 <= Number(Nr))) return a.offsetParent;
        var b = _.qu(a),
            c = Fg(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Fg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    nv = function(a) {
        var b = _.qu(a),
            c = new _.Gh(0, 0);
        var d = b ? _.qu(b) : document;
        d = !_.Br || 9 <= Number(Nr) || _.uu(ru(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Ih(a);
        d = ru(b).j;
        b = wu(d);
        d = d.parentWindow || d.defaultView;
        b = _.Br && d.pageYOffset != b.scrollTop ? new _.Gh(b.scrollLeft, b.scrollTop) : new _.Gh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Fh = function(a, b) {
        var c = new _.Gh(0, 0),
            d = _.xu(_.qu(a));
        if (!zr(d, "parent")) return c;
        do {
            var e = d == b ? nv(a) : _.ov(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.ov = function(a) {
        a = Ih(a);
        return new _.Gh(a.left, a.top)
    };
    _.pv = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Gg = function(a, b) {
        if ("none" != Fg(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Hg = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Er && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ih(a), new _.Jh(a.right - a.left, a.bottom - a.top)) : new _.Jh(b, c)
    };
    var ni = function(a) {
        a = hv(Kd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var qv = function(a, b) {
        if (w.globalThis.fetch) w.globalThis.fetch(a, {
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
    var rv = function(a) {
        _.R.call(this, a)
    };
    _.P(rv, _.R);
    var sv = function(a) {
        _.R.call(this, a)
    };
    _.P(sv, _.R);
    var Zg = function(a) {
        _.R.call(this, a)
    };
    _.P(Zg, _.R);
    var Ug = function(a) {
        _.R.call(this, a)
    };
    _.P(Ug, _.R);
    var Rg = function(a) {
        _.R.call(this, a)
    };
    _.P(Rg, _.R);
    var tv = function(a) {
        _.R.call(this, a)
    };
    _.P(tv, _.R);
    var Qg = function(a) {
        _.R.call(this, a, -1, uv)
    };
    _.P(Qg, _.R);
    Qg.prototype.getTagSessionCorrelator = function() {
        return Yi(this, 2)
    };
    var uv = [4],
        Wg = [6, 7, 8, 9, 11];
    var kh = function(a) {
        _.R.call(this, a, -1, vv)
    };
    _.P(kh, _.R);
    var vv = [3];
    var hh = function(a) {
        _.R.call(this, a, -1, wv)
    };
    _.P(hh, _.R);
    var wv = [4];
    var gh = function(a) {
        _.R.call(this, a, -1, xv)
    };
    _.P(gh, _.R);
    gh.prototype.getTagSessionCorrelator = function() {
        return Yi(this, 1)
    };
    var xv = [2];
    var fh = function(a) {
        _.R.call(this, a)
    };
    _.P(fh, _.R);
    var nh = [4];
    _.yv = function() {
        this.I = this.I;
        this.wa = this.wa
    };
    _.yv.prototype.I = !1;
    _.yv.prototype.Ca = function() {
        this.I || (this.I = !0, this.D())
    };
    _.Cm = function(a, b) {
        _.Jm(a, _.Sq(Rd, b))
    };
    _.Jm = function(a, b) {
        a.I ? b() : (a.wa || (a.wa = []), a.wa.push(b))
    };
    _.yv.prototype.D = function() {
        if (this.wa)
            for (; this.wa.length;) this.wa.shift()()
    };
    var zv = function(a, b, c, d, e) {
            this.l = a;
            this.C = b;
            this.H = c;
            this.D = d;
            this.I = e;
            this.j = [];
            this.m = null
        },
        Av = function(a) {
            null !== a.m && (clearTimeout(a.m), a.m = null);
            if (a.j.length) {
                var b = Nd(a.j);
                a.C(a.l + "?e=1", b);
                a.j = []
            }
        };
    zv.prototype.je = function() {
        var a = bb.apply(0, arguments),
            b = this;
        this.I && 65536 <= Nd(this.j.concat(a)).length && Av(this);
        this.j.push.apply(this.j, _.Od(a));
        this.j.length >= this.D && Av(this);
        this.j.length && null === this.m && (this.m = setTimeout(function() {
            Av(b)
        }, this.H))
    };
    var gq = function(a, b, c) {
        zv.call(this, "https://pagead2.googlesyndication.com/pagead/ping", qv, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!w.globalThis.fetch)
    };
    _.P(gq, zv);
    var U = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        Bv = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        Cv = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        Dv = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var Ev, Fv, Gv, Hv, oi, Iv, ml, Jv, Kv, Qk, Lv, Mv, Nv, Ov, Pv, Kk, Qv, Rv, Sv, Tv, Uv, Eo, Vv, Wv, Xv, Yv, Zv, $v, Xn, aw, bw, cw, dw, ew, fw, gw, hw, np, lm, iw, jw, kw, lw, mw, xj, Hl, nw, ow, pw, ah, qw, rw, sw, tw, uw, vw, ww, xw, Lm, yw, zw, Aw, fk, ck, En, Fn, Bw, Cw, Dw, Ew, Fw, Gw, Hw, Iw, fq, Jw, Kw, Lw, Mw, Nw, Ow, Pw, Qw, Rw, Sw, Tw, Uw, Vw, Ww, Xw, Ff, Yw, Zw, De, $w, ax, cf, Qe, ye, ff, Ve, bx, tf, Xp, Yp, cx, xl, Zp, Wp, ex, fx, gx, hx, ix, jx, Pl, Ni, lx;
    Ev = new U(1122, !0);
    Fv = new U(486713001);
    Gv = new Cv(3);
    Hv = new Dv(481);
    oi = new Bv(7, .1);
    Iv = new U(212);
    ml = new Bv(474069761);
    Jv = new Bv(455645877);
    Kv = new Bv(462420536);
    Qk = new U(476475256);
    Lv = new Bv(448338836, .01);
    Mv = new Bv(427198696);
    Nv = new Bv(438663674);
    Ov = new U(23);
    Pv = new U(369430);
    Kk = new U(485860314);
    Qv = new U(477812799);
    Rv = new Bv(408380992, .01);
    Sv = new Bv(377289019, 1E4);
    Tv = new Bv(488);
    Uv = new Bv(529, 20);
    Eo = new U(45385570);
    Vv = new Cv(10);
    Wv = new U(489217043);
    Xv = new Bv(428094087);
    Yv = new U(488999963);
    Zv = new U(485091276);
    $v = new U(492198798);
    Xn = new Bv(447000223, .01);
    aw = new Bv(434620574);
    bw = new U(474159377);
    cw = new U(360245597, !0);
    dw = new U(462165369);
    ew = new Bv(461613513);
    fw = new Bv(494, 1E4);
    gw = new Bv(471890184, .01);
    hw = new Bv(517, .01);
    np = new U(485209195);
    lm = new U(488463535);
    iw = new U(471855283);
    jw = new U(484113279);
    kw = new U(220);
    lw = new U(200);
    mw = new U(485597276);
    xj = new U(488720814);
    Hl = new Bv(492, .01);
    nw = new Bv(363650251);
    ow = new Bv(474872234);
    pw = new U(83);
    ah = new U(85);
    qw = new U(437061931);
    rw = new Dv(466086960);
    sw = new Bv(398776877, 6E4);
    tw = new U(437292966);
    uw = new Bv(374201269, 6E4);
    vw = new Bv(371364213, 6E4);
    ww = new Bv(376149757, .0025);
    xw = new U(453275889);
    Lm = new U(476447134, !0);
    yw = new U(422917270);
    zw = new U(377936516, !0);
    Aw = new Bv(24);
    fk = new Dv(1);
    ck = new Cv(2, "1-0-40");
    En = new U(427203966);
    Fn = new U(442109935);
    Bw = new U(486708758);
    Cw = new U(441529989);
    Dw = new U(428624799);
    Ew = new U(437308144);
    Fw = new Dv(489);
    Gw = new U(392065905);
    Hw = new Bv(360245595, 500);
    Iw = new U(424117738);
    fq = new Bv(397316938, 1E3);
    Jw = new U(444587044, !0);
    Kw = new U(440148284, !0);
    Lw = new U(444587045);
    Mw = new U(440148282, !0);
    Nw = new U(487608180);
    Ow = new U(399705355);
    Pw = new U(489509230);
    Qw = new U(480068022);
    Rw = new U(472976668);
    Sw = new U(486663050);
    Tw = new U(501);
    Uw = new U(484598396);
    Vw = new Dv(472572701);
    Ww = new U(439828594);
    Xw = new U(483962503);
    Ff = new U(1930);
    Yw = new U(453);
    Zw = new U(454);
    De = new Bv(360261971);
    $w = new Bv(1921, 72);
    ax = new Bv(1920, 12);
    cf = new Bv(426169222, 1E3);
    Qe = new Bv(1917, 300);
    ye = new Bv(1916, .001);
    ff = new Dv(471270390);
    Ve = new U(478498873);
    bx = new U(476437529);
    tf = new U(478009624);
    Xp = new U(77);
    Yp = new U(78);
    cx = new U(1961);
    xl = new U(309);
    Zp = new U(80);
    Wp = new U(76);
    _.dx = new U(1947, !0);
    ex = new U(84);
    fx = new U(1958);
    gx = new U(1973);
    hx = new U(188);
    ix = new U(1971, !0);
    jx = new U(1974);
    _.kx = new Bv(1972);
    Pl = new Bv(1158);
    Ni = new U(477209535);
    lx = new U(485990406);
    var mx = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.Dd("SCRIPT", g);
                h.async = !0;
                Wa(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? mx(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        nx = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            mx(ru(a), b, 0, !1, c, d)
        };
    za({
        Lg: 0,
        Kg: 1,
        Hg: 2,
        Cg: 3,
        Ig: 4,
        Dg: 5,
        Jg: 6,
        Fg: 7,
        Gg: 8,
        Bg: 9,
        Eg: 10
    }).map(function(a) {
        return Number(a)
    });
    za({
        Ng: 0,
        Og: 1,
        Mg: 2
    }).map(function(a) {
        return Number(a)
    });
    var ox = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Dd("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var le, no;
    _.px = function(a, b, c, d) {
        Td(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    le = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.jk(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        no(d, c)
    };
    no = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.px(c, a, void 0, b)
    };
    var qx = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        rx = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.yv.call(this);
            this.m = a;
            this.j = null;
            this.l = {};
            this.B = 0;
            this.o = b;
            this.H = c;
            this.C = null
        };
    _.P(rx, _.yv);
    rx.prototype.D = function() {
        this.l = {};
        this.C && (_.Sd(this.m, "message", this.C), delete this.C);
        delete this.l;
        delete this.m;
        delete this.j;
        _.yv.prototype.D.call(this)
    };
    var tx = function(a) {
        return "function" === typeof a.m.__tcfapi || null != sx(a)
    };
    rx.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.H
            },
            d = _.Zq(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = qx(c), c.internalBlockOnErrors = b.H, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            ux(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    rx.prototype.removeEventListener = function(a) {
        a && a.listenerId && ux(this, "removeEventListener", null, a.listenerId)
    };
    var vx = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        ux = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
            else if (sx(a)) {
                wx(a);
                var e = ++a.B;
                a.l[e] = c;
                a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        sx = function(a) {
            if (a.j) return a.j;
            a.j = Qu(a.m, "__tcfapiLocator");
            return a.j
        },
        wx = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.l[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.eb(a.m, "message", a.C))
        },
        xx = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = qx(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (le({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        yx = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return vx(a, c)
            })
        };
    var zx = function(a, b, c) {
            this.j = a;
            this.D = b;
            this.m = void 0 === c ? function() {} : c
        },
        Ax = function(a, b, c) {
            return new zx(a, b, c)
        };
    zx.prototype.start = function() {
        if (this.j === this.j.top) try {
            ox(this.j), Bx(this)
        } catch (a) {}
    };
    var Bx = function(a) {
        var b = nb(Wq("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.D,
            ers: 3
        });
        nx(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var Cx = w.Promise;
    var Dx = function(a) {
        this.D = a
    };
    Dx.prototype.m = function(a, b, c) {
        this.D.then(function(d) {
            d.m(a, b, c)
        })
    };
    Dx.prototype.j = function(a, b) {
        return this.D.then(function(c) {
            return c.j(a, b)
        })
    };
    var Ex = function(a) {
        this.data = a
    };
    var Fx = function(a) {
        this.D = a
    };
    Fx.prototype.m = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        Gx(d.port1, b);
        this.D.postMessage(a, [d.port2].concat(c))
    };
    Fx.prototype.j = function(a, b) {
        var c = this;
        return new Cx(function(d) {
            c.m(a, d, b)
        })
    };
    var Hx = function(a, b) {
            Gx(a, b);
            return new Fx(a)
        },
        Gx = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new Ex(c.data, Hx(c.ports[0])))
            })
        };
    var Li = function(a) {
            var b = a.Dc,
                c = void 0 === a.Ma ? "ZNWN1d" : a.Ma,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Hc ? void 0 : a.Hc;
            return Ix({
                destination: a.destination,
                Od: function() {
                    return b.contentWindow
                },
                sf: Jx(a.origin),
                Ma: c,
                onMessage: d,
                Hc: e
            })
        },
        Ix = function(a) {
            var b = a.destination,
                c = a.Od,
                d = a.sf,
                e = void 0 === a.vd ? void 0 : a.vd,
                f = a.Ma,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Hc ? void 0 : a.Hc,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new Dx(new Cx(function(l, n) {
                var m = function(p) {
                    if (p.source && p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", m, !1);
                            var r = d.join(", ");
                            n(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? r : "one of [" + r + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", m, !1), e && p.data.t !== e ? n(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(Hx(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", m, !1)
            }))
        },
        Jx = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var ih = (0, D.gd)(function(a) {
        return "string" === typeof a
    }, "string");
    var Kx = navigator,
        Lx = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Mx = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Lx(a.toLowerCase())
        },
        Nx = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Ox = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Px = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Dh = function(a) {
            return !!a && a.top == a
        },
        Qx = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Dh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var Rx = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var hi = function() {
        this.j = [];
        this.m = -1
    };
    hi.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    hi.prototype.get = function(a) {
        return !!this.j[a]
    };
    var ji = function(a) {
        -1 === a.m && (a.m = cr(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var Zd = function(a) {
        _.R.call(this, a, -1, Sx)
    };
    _.P(Zd, _.R);
    var $d = function(a, b) {
            bf(a, 1, ee, b)
        },
        ee = function(a) {
            _.R.call(this, a)
        };
    _.P(ee, _.R);
    var be = function(a) {
            var b = new ee;
            return _.z(b, 1, a, 0)
        },
        ae = function(a, b) {
            return _.z(a, 2, b, 0)
        },
        Sx = [1];
    var Tx = function(a, b, c, d) {
        _.yv.call(this);
        this.U = b;
        this.F = c;
        this.B = d;
        this.O = new w.Map;
        this.K = 0;
        this.o = new w.Map;
        this.H = new w.Map;
        this.l = new w.Map;
        this.C = void 0;
        this.m = a
    };
    _.P(Tx, _.yv);
    Tx.prototype.D = function() {
        delete this.j;
        this.O.clear();
        this.o.clear();
        this.H.clear();
        this.l.clear();
        this.C && (_.Sd((0, D.J)(this.m), "message", this.C), delete this.C);
        delete this.m;
        delete this.B;
        _.yv.prototype.D.call(this)
    };
    var Ux = function(a) {
            if (a.j) return a.j;
            a.F && a.F((0, D.J)(a.m)) ? a.j = a.m : a.j = Qu((0, D.J)(a.m), a.U);
            var b;
            return null != (b = a.j) ? b : null
        },
        Wx = function(a, b) {
            if (Ux(a))
                if (a.j === a.m) {
                    var c = a.O.get("getDataWithCallback");
                    c && c((0, D.J)(a.j), b)
                } else if ((c = a.o.get("getDataWithCallback")) && c.Td) {
                Vx(a);
                var d = ++a.K;
                a.H.set(d, c.rf);
                a.l.set(d, c.lf(b));
                a.j.postMessage(c.Td(b, d), "*")
            }
        },
        Vx = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = a.B ? a.B(b) : void 0;
                    if (c) {
                        var d = c.ae,
                            e = a.H.get(d);
                        if (e) {
                            a.H.delete(d);
                            var f = a.l.get(c.ae);
                            a.l.delete(d);
                            e(f, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.eb((0, D.J)(a.m), "message", a.C))
        };
    var Xx = function(a, b) {
            (0, D.J)(a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Bd({
                    Dd: null != c ? c : void 0,
                    Kd: d ? void 0 : 2
                })
            })
        },
        Yx = {
            lf: function(a) {
                return a.Bd
            },
            Td: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            rf: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    Dd: null != (c = b.returnValue) ? c : void 0,
                    Kd: b.success ? void 0 : 2
                })
            }
        },
        Zx = function(a) {
            _.yv.call(this);
            this.caller = new Tx(a, "__uspapiLocator", function(b) {
                return "function" === typeof b.__uspapi
            }, me);
            this.caller.O.set("getDataWithCallback", Xx);
            this.caller.o.set("getDataWithCallback", Yx)
        };
    _.P(Zx, _.yv);
    Zx.prototype.D = function() {
        this.caller.Ca();
        _.yv.prototype.D.call(this)
    };
    Zx.prototype.l = function() {
        return !!Ux(this.caller)
    };
    Zx.prototype.o = function(a) {
        var b = {};
        if (this.l()) {
            var c = _.Zq(function() {
                a(b)
            });
            Wx(this.caller, {
                Bd: function(d) {
                    d.Kd || (b = (0, D.J)(d.Dd));
                    c()
                }
            });
            setTimeout(c, 500)
        } else a(b)
    };
    var pe = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        by = function() {
            var a = $x;
            if (!_.q.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                kd: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            ay(a, "TESTCOOKIESENABLED");
            return !0
        };
    pe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Bh;
            d = c.Ff || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.kd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    pe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Op(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var ay = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            kd: 0,
            path: c,
            domain: d
        })
    };
    pe.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    pe.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Op(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) ay(this, b[a])
    };
    var $x = new pe("undefined" == typeof document ? null : document);
    var cy = null,
        dy = function() {
            if (null === cy) {
                cy = "";
                try {
                    var a = "";
                    try {
                        a = _.q.top.location.hash
                    } catch (c) {
                        a = _.q.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        cy = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return cy
        };
    var ey = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var ch = _.q.performance,
        fy = !!(ch && ch.mark && ch.measure && ch.clearMarks),
        dh = Rh(function() {
            var a;
            if (a = fy) a = dy(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        gy = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = dh() || (null != c ? c : Math.random() < a)
        },
        hy = function(a, b, c, d, e, f) {
            a.j && (b = new ey(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    gy.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new ey(a, b, _.te() || _.se());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ch && dh() && ch.mark(b);
        return a
    };
    gy.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.te() || _.se()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ch && dh() && ch.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var Bo = function(a, b, c) {
        var d = _.te();
        d && hy(a, b, 9, d, 0, c)
    };
    var Mk = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, Mk.prototype)
    };
    _.P(Mk, Error);
    Mk.prototype.name = "PublisherInputError";
    var iy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, iy.prototype)
    };
    _.P(iy, Error);
    iy.prototype.name = "ServerError";
    var jy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, jy.prototype)
    };
    _.P(jy, Error);
    jy.prototype.name = "NetworkError";
    var ky;
    ky = {
        Rg: 0,
        pe: 3,
        re: 4,
        Sg: 5
    };
    var ly = ky.pe,
        my = ky.re;
    _.Ae = function(a) {
        var b = "jb";
        if (a.jb && a.hasOwnProperty(b)) return a.jb;
        b = new a;
        return a.jb = b
    };
    var ny = function(a) {
            this.methodName = a
        },
        oy = new ny(1),
        py = new ny(16),
        qy = new ny(15),
        ry = new ny(2),
        sy = new ny(3),
        ty = new ny(5),
        uy = new ny(6),
        vy = new ny(7),
        wy = new ny(8),
        xy = new ny(14),
        yy = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Be = function() {
            this.m = function() {};
            this.I = function() {};
            this.D = function() {
                return []
            };
            this.j = function() {
                return []
            }
        },
        zy = function(a, b) {
            a.m = yy(oy, b, function() {});
            a.D = function(c) {
                return yy(ry, b, function() {
                    return []
                })(c, 2)
            };
            a.j = function() {
                return yy(sy, b, function() {
                    return []
                })(2)
            };
            a.I = function(c) {
                yy(py, b, function() {})(c, 2)
            }
        },
        dq = function(a) {
            _.Ae(Be).I(a)
        },
        vk = function(a) {
            return _.Ae(Be).D(a)
        };
    var Ay, bk, ef;
    Ay = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.D = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.I = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.G = function(a) {
        return _.Ae(Ay).m(a.j, a.defaultValue)
    };
    _.xe = function(a) {
        return _.Ae(Ay).D(a.j, a.defaultValue)
    };
    bk = function(a) {
        return _.Ae(Ay).I(a.j, a.defaultValue)
    };
    ef = function(a) {
        return _.Ae(Ay).C(a.j, a.defaultValue)
    };
    var By = function() {};
    By.j = function() {
        throw Error("Must be overridden");
    };
    var we = function() {
        this.j = 0
    };
    _.P(we, By);
    we.jb = void 0;
    we.j = function() {
        return we.jb ? we.jb : we.jb = new we
    };
    var Cy = function() {
            this.cache = {}
        },
        He = function() {
            Dy || (Ey = _.xe(ax), Fy = _.xe($w), Dy = new Cy);
            return Dy
        },
        df = function(a) {
            var b = y(a, 3);
            if (!b) return 3;
            if (void 0 === y(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * Fy ? 2 : a > b + 36E5 * Ey ? 1 : 0
        };
    Cy.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            sb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Ce(6, a, null == (d = g) ? void 0 : d.message);
            return {
                sb: null,
                success: !1
            }
        }
        if (!c) return {
            sb: null,
            success: !0
        };
        try {
            var e = Yd(We, c);
            this.cache[a] = e;
            return {
                sb: e,
                success: !0
            }
        } catch (g) {
            var f;
            Ce(5, a, null == (f = g) ? void 0 : f.message);
            return {
                sb: null,
                success: !1
            }
        }
    };
    Cy.prototype.set = function(a, b) {
        var c = (0, D.J)(a.na()),
            d = "_GESPSK-" + c;
        _.A(a, 3, Date.now());
        try {
            b.setItem(d, ce(a))
        } catch (f) {
            var e;
            Ce(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var Dy = null,
        Ey = 24,
        Fy = 72;
    var Ie = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var Gy = function(a) {
        _.yv.call(this);
        this.l = a;
        this.j = [];
        this.m = [];
        this.C = []
    };
    _.P(Gy, _.yv);
    var Iy = function(a, b, c) {
        a.m.push({
            lc: void 0 === c ? !1 : c,
            xb: b
        });
        _.G(iw) && Hy(b, a.l)
    };
    Gy.prototype.D = function() {
        this.j.length = 0;
        this.C.length = 0;
        this.m.length = 0;
        _.yv.prototype.D.call(this)
    };
    _.ug = function() {
        var a = this;
        this.promise = new w.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var Jy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, Jy.prototype);
        this.name = "InputError"
    };
    _.P(Jy, Error);
    var Ky = function() {
            var a = this;
            this.B = this.Ua = null;
            this.C = -1;
            this.D = new _.ug;
            this.m = !1;
            this.D.promise.then(function() {
                -1 !== a.C && (a.B = _.se() - a.C)
            }, function() {})
        },
        Ly = function() {
            Ky.apply(this, arguments);
            this.I = []
        };
    _.P(Ly, Ky);
    var Ny = function(a, b) {
            a.m || (a.m = !0, a.Ua = b, a.D.resolve(b), _.G(iw) && My(a))
        },
        Oy = function(a, b) {
            a.m = !0;
            a.l = b;
            a.D.reject(b);
            _.G(iw) && My(a)
        },
        My = function(a) {
            for (var b = _.B(a.I), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Ua);
            a.I = []
        },
        Hy = function(a, b) {
            _.G(iw) && a.I.push(b)
        };
    lq.Object.defineProperties(Ly.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D.promise
            }
        },
        rb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        H: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        }
    });
    var bp = function() {
        Ly.apply(this, arguments)
    };
    _.P(bp, Ly);
    bp.prototype.j = function(a) {
        Ny(this, a)
    };
    var Py = function(a, b) {
            Ny(a, null != b ? b : null)
        },
        Qy = function(a) {
            Ny(a, null)
        },
        Ry = function(a, b) {
            b.then(function(c) {
                a.j(c)
            })
        },
        Sy = function(a, b) {
            a.m || (a.m = !0, a.Ua = null, a.l = b, a.D.reject(b), _.G(iw) && My(a))
        },
        Ty = function(a) {
            Ky.call(this);
            this.ob = a
        };
    _.P(Ty, Ky);
    Ty.prototype.rb = function() {
        return this.ob.m
    };
    Ty.prototype.Rb = function() {
        return null !== this.ob.Ua
    };
    lq.Object.defineProperties(Ty.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.l
            }
        }
    });
    var Uy = function(a) {
        Ty.call(this, a);
        this.ob = a
    };
    _.P(Uy, Ty);
    lq.Object.defineProperties(Uy.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.Ua
            }
        }
    });
    var Vy = function() {
        Ty.apply(this, arguments)
    };
    _.P(Vy, Ty);
    lq.Object.defineProperties(Vy.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.Ua
            }
        }
    });
    var Wy = function() {
        Ty.apply(this, arguments)
    };
    _.P(Wy, Ty);
    lq.Object.defineProperties(Wy.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.Ua
            }
        }
    });
    var Xy = function() {
        Ly.apply(this, arguments)
    };
    _.P(Xy, Ly);
    Xy.prototype.notify = function() {
        Ny(this, null)
    };
    var Yy = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        Zy = function(a, b) {
            b = void 0 === b ? !1 : b;
            Ly.call(this);
            var c = this;
            this.o = a;
            this.j = 0;
            if (_.G(iw)) {
                a = {};
                for (var d = _.B(this.o), e = d.next(); !e.done; a = {
                        Mb: a.Mb
                    }, e = d.next()) a.Mb = e.value, Hy(a.Mb, function(f) {
                    return function(g) {
                        c.j += 1;
                        f.Mb.error ? Oy(c, f.Mb.error) : b || null !== g ? Ny(c, null != g ? g : null) : c.j === c.o.length && Ny(c, null)
                    }
                }(a))
            } else _.t(w.Promise, "any").call(w.Promise, a.map(function(f) {
                return f.promise.then(function(g) {
                    if (b || null != g) return g;
                    throw g;
                })
            })).then(function(f) {
                c.m = !0;
                c.Ua = f;
                c.D.resolve(f)
            }, function() {
                c.m = !0;
                c.Ua = null;
                c.D.resolve(null)
            })
        };
    _.P(Zy, Ly);
    var az = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.yv.call(this);
        var c = this;
        this.id = a;
        this.fa = b;
        this.ka = this.ja = this.ia = this.O = !1;
        this.Z = -1;
        this.C = new Gy(function() {
            $y(c)
        });
        _.Cm(this, this.C)
    };
    _.P(az, _.yv);
    az.prototype.start = function() {
        var a = this,
            b, c, d, e, f;
        return _.gb(function(g) {
            switch (g.j) {
                case 1:
                    if (a.O) return g.return();
                    a.O = !0;
                    g.D = 2;
                    b = a;
                    return hb(g, kf(a.C.m, a.fa), 4);
                case 4:
                    b.Z = g.m;
                    if (a.I) {
                        g.j = 5;
                        break
                    }
                    for (var h = 0, k = _.B(a.C.C), l = k.next(); !l.done; l = k.next()) {
                        if (!l.value.Rb()) throw Error("missing input: " + a.id + "/" + h);
                        ++h
                    }
                    c = _.B(a.C.j);
                    for (d = c.next(); !d.done; d = c.next()) e = d.value, e.C = _.se();
                    return hb(g, a.j(), 5);
                case 5:
                    jb(g, 0);
                    break;
                case 2:
                    f = kb(g);
                    if (a.I) return g.return();
                    f instanceof Jy ? a.H(f) : f instanceof Error && (a.U(f), a.m(f));
                    g.j = 0
            }
        })
    };
    var $y = function(a) {
            if (!a.O && a.ia) try {
                var b = a.C.m,
                    c = 0 < a.fa ? b.filter(function(g) {
                        return !g.lc
                    }) : b,
                    d = b.filter(function(g) {
                        return g.lc
                    }),
                    e, f = null == (e = _.t(b, "find").call(b, function(g) {
                        return void 0 !== g.xb.error
                    })) ? void 0 : e.xb.error;
                if (f) throw a.O = !0, f;
                if (!c.some(function(g) {
                        return !g.xb.rb
                    })) {
                    if (d.length && (a.ja || (a.ja = !0, setTimeout(function() {
                            a.ka = !0;
                            $y(a)
                        }, a.fa)), d.some(function(g) {
                            return !g.xb.rb
                        }) && !a.ka)) return;
                    a.O = !0;
                    a.j()
                }
            } catch (g) {
                a.I || (g instanceof Jy ? a.H(g) : g instanceof Error && (a.U(g), a.m(g)))
            }
        },
        V = function(a) {
            var b = new bp;
            a.C.j.push(b);
            return b
        },
        bz = function(a) {
            var b = new Xy;
            a.C.j.push(b);
            return b
        },
        W = function(a, b) {
            Iy(a.C, b);
            b = new Vy(b);
            a.C.C.push(b);
            return b
        },
        X = function(a, b) {
            Iy(a.C, b);
            return new Uy(b)
        },
        cz = function(a, b) {
            Iy(a.C, b, !0);
            return new Uy(b)
        },
        dz = function(a, b) {
            Iy(a.C, b)
        },
        ez = function(a, b) {
            b = new Zy(b);
            Iy(a.C, b);
            b = new Vy(b);
            a.C.C.push(b);
            return b
        };
    az.prototype.H = function() {};
    az.prototype.m = function(a) {
        if (this.C.j.length) {
            a = new Jy(a.message);
            for (var b = _.B(this.C.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.rb || Oy(c, a)
        }
    };
    var fz = function(a, b) {
        az.call(this, a);
        this.id = a;
        this.B = b
    };
    _.P(fz, az);
    fz.prototype.U = function(a) {
        this.B(this.id, a)
    };
    var pf = function(a, b, c) {
        fz.call(this, 1041, c);
        this.l = b;
        this.o = W(this, a)
    };
    _.P(pf, fz);
    pf.prototype.j = function() {
        var a = this.o.value;
        He().set(a, this.l) && jf(a, 2) && Ce(27, (0, D.J)(a.na()))
    };
    var uf = function(a, b) {
        fz.call(this, 1048, b);
        this.l = V(this);
        this.o = V(this);
        this.F = W(this, a)
    };
    _.P(uf, fz);
    uf.prototype.j = function() {
        var a = (0, D.J)(this.F.value),
            b = function(c) {
                var d = {};
                Ce(c, (0, D.J)(a.na()), null, (d.tic = String(Math.round((Date.now() - (0, D.J)(y(a, 3))) / 6E4)), d))
            };
        switch (df(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.j(a);
                break;
            case 2:
                b(26);
                this.l.j(a);
                break;
            case 3:
                Ce(9, (0, D.J)(a.na()));
                this.l.j(a);
                break;
            case 4:
                b(23), this.l.j(a)
        }
    };
    var Mf = function(a, b, c) {
        fz.call(this, 1049, c);
        this.l = b;
        dz(this, a)
    };
    _.P(Mf, fz);
    Mf.prototype.j = function() {
        for (var a = _.B(Pe(this.l)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = He().get(b, this.l).sb;
            if (c) {
                var d = df(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = He();
                    c = (0, D.J)(c.na());
                    try {
                        this.l.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Ce(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Ce(40, b)
                }
            }
        }
    };
    var yf = function(a, b, c, d) {
        fz.call(this, 658, d);
        this.collectorFunction = a;
        this.K = c;
        this.l = V(this);
        this.F = V(this);
        this.o = X(this, b)
    };
    _.P(yf, fz);
    yf.prototype.j = function() {
        var a = this;
        if (this.o.value) {
            var b = function(f) {
                    a.l.j({
                        id: (0, D.J)(f.na()),
                        collectorGeneratedData: y(f, 2)
                    })
                },
                c = this.o.value,
                d = (0, D.J)(c.na()),
                e = df(c);
            lf(c);
            switch (e) {
                case 0:
                    b(c);
                    break;
                case 1:
                    b(c);
                    this.F.j(c);
                    break;
                case 3:
                case 2:
                case 4:
                    _.A(c, 2, null), Je(d, c, this.collectorFunction, this.K).then(b)
            }
        } else Qy(this.l)
    };
    var of = function(a, b, c) {
        fz.call(this, 1027, c);
        this.rc = a;
        this.F = b;
        this.l = V(this);
        this.o = V(this)
    };
    _.P( of , fz); of .prototype.j = function() {
        var a = He().get(this.rc, this.F).sb;
        if (!a) {
            a = af(this.rc);
            var b = _.xe(De) || null;
            a = _.A(a, 8, b);
            a = _.A(a, 3, Date.now());
            this.o.j(Ke(a, Le(new Ne, 100)))
        }
        this.l.j(a)
    };
    var vf = function(a, b, c) {
        fz.call(this, 1043, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(vf, fz);
    vf.prototype.j = function() {
        var a = this.F.value;
        this.o && _.A(a, 8, (0, D.J)(Ee(a, 8)) - 1);
        this.l.j(a)
    };
    var rf = function(a, b, c) {
        fz.call(this, 1029, c);
        this.l = b;
        this.o = V(this);
        this.F = W(this, a)
    };
    _.P(rf, fz);
    rf.prototype.j = function() {
        var a = this.F.value,
            b = Date.now();
        if (this.l) {
            var c = (0, D.J)(Ee(a, 8)),
                d, e = null != (d = y(a, 7)) ? d : b;
            c < this.l && _.A(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
        }
        this.o.j(a)
    };
    var wf = function(a, b, c) {
        fz.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = V(this);
        this.o = W(this, b)
    };
    _.P(wf, fz);
    wf.prototype.j = function() {
        var a = this,
            b = this.o.value,
            c = (0, D.J)(b.na());
        Ce(18, c);
        try {
            var d = _.se();
            this.collectorFunction().then(function(e) {
                Ce(29, c, null, {
                    delta: String(_.se() - d)
                });
                a.l.j(_.A(b, 2, e))
            }).catch(function(e) {
                Ce(28, c, mf(e));
                a.l.j(Ke(b, Le(new Ne, 106)))
            })
        } catch (e) {
            Ce(1, c, mf(e)), this.l.j(Ke(b, Le(new Ne, 107)))
        }
    };
    var sf = function(a, b, c) {
        fz.call(this, 1030, c);
        this.F = b;
        this.l = V(this);
        this.o = V(this);
        this.K = W(this, a)
    };
    _.P(sf, fz);
    sf.prototype.j = function() {
        var a = this.K.value,
            b, c = null != (b = Ee(a, 8)) ? b : 0,
            d;
        b = null != (d = y(a, 7)) ? d : Date.now();
        1 > c && this.F ? (d = {}, Ce(22, (0, D.J)(a.na()), null, (d.t = String(b), d.cr = String(c), d.cs = String(df(a)), d)), this.o.j(Ke(a, Le(new Ne, 104)))) : this.l.j(a)
    };
    var zf = function(a, b, c, d) {
        fz.call(this, 662, d);
        this.o = a;
        this.l = c;
        this.F = W(this, b)
    };
    _.P(zf, fz);
    zf.prototype.j = function() {
        var a = this;
        Oe().then(function() {
            var b = (0, D.J)(a.F.value);
            Je((0, D.J)(b.na()), b, a.o, a.l)
        })
    };
    var qf = function(a, b, c) {
        fz.call(this, 1028, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(qf, fz);
    qf.prototype.j = function() {
        var a = this.F.value,
            b = (0, D.J)(a.na());
        this.o && (ok(a, 8) || (Ce(33, b), _.A(a, 8, this.o)), null == y(a, 7) && (Ce(34, b), _.A(a, 7, Math.round(Date.now() / 1E3 / 60))));
        null != y(a, 3) || Ce(35, b);
        this.l.j(a)
    };
    var xf = function(a, b, c, d) {
        fz.call(this, 1050, d);
        this.K = b;
        this.F = c;
        this.l = V(this);
        this.o = W(this, a)
    };
    _.P(xf, fz);
    xf.prototype.j = function() {
        var a = this.o.value,
            b = (0, D.J)(a.na()),
            c = y(a, 2);
        if (null == c) Ce(41, b), Ke(a, Le(new Ne, 111));
        else if ("string" === typeof c)
            if (!c.length) Ce(20, b);
            else {
                if (c.length > (/^(\d+)$/.test(b) ? this.F : this.K)) {
                    var d = {};
                    Ce(12, b, null, (d.sl = String(c.length), d));
                    b = Ke(a, Le(new Ne, 108));
                    Ge(b, 2)
                }
            }
        else Ce(21, b);
        this.l.j(a)
    };
    var nf = function() {
        _.yv.apply(this, arguments);
        this.j = []
    };
    _.P(nf, _.yv);
    var H = function(a, b) {
            _.Cm(a, b);
            a.j.push(b)
        },
        Af = function(a, b) {
            b = _.B(b);
            for (var c = b.next(); !c.done; c = b.next()) H(a, c.value)
        },
        Bf = function(a) {
            a = _.B(a.j);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, _.G(iw) ? (b.ia = !0, $y(b)) : b.start()
        };
    nf.prototype.D = function() {
        _.yv.prototype.D.call(this);
        this.j.length = 0
    };
    var gz = function(a, b, c, d) {
        fz.call(this, 1059, d);
        this.F = b;
        this.o = c;
        this.l = V(this);
        this.K = W(this, a)
    };
    _.P(gz, fz);
    gz.prototype.j = function() {
        var a = this.K.value,
            b = a.id,
            c = a.collectorFunction,
            d;
        a = (0, D.J)(null != (d = a.networkCode) ? d : b);
        b = {};
        Ce(42, a, null, (b.ea = String(Number(this.F)), b));
        Ry(this.l, Cf(a, c, this.o, this.B))
    };
    var hz = function(a, b) {
        fz.call(this, 1057, b);
        this.l = a;
        this.o = V(this);
        this.F = V(this)
    };
    _.P(hz, fz);
    hz.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) Ce(46, "UNKNOWN_COLLECTOR_ID"), iz(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, Ce(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Ce(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), iz(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (Ce(14, a), iz(this, a, 105)) : this.F.j(this.l)
            }
        else Ce(39, "UNKNOWN_COLLECTOR_ID"), iz(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var iz = function(a, b, c) {
        a.o.j(Ke(af(b), Le(new Ne, c)))
    };
    var Kf = function(a, b) {
        this.j = b;
        this.I = [];
        this.D = [];
        this.m = [];
        a = _.B(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    aa = Kf.prototype;
    aa.push = function(a) {
        a = new hz(a, this.Vc);
        var b = new pf(a.o, this.j, this.Vc),
            c = new gz(a.F, !1, this.j, this.Vc),
            d = new nf;
        Af(d, [a, b, c]);
        Bf(d);
        a = c.l.promise;
        this.I.push(a);
        b = _.B(this.D);
        for (c = b.next(); !c.done; c = b.next()) a.then(c.value)
    };
    aa.addOnSignalResolveCallback = function(a) {
        this.D.push(a);
        for (var b = _.B(this.I), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    aa.addErrorHandler = function(a) {
        this.m.push(a)
    };
    aa.clearAllCache = function() {
        var a = this.j;
        if (void 0 !== a)
            for (var b = _.B(_.t(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                if (c = c.value, _.t(c, "startsWith").call(c, "_GESPSK")) try {
                    a.removeItem(c)
                } catch (d) {}
        Dy = new Cy;
        Ce(43, "")
    };
    aa.Vc = function(a, b) {
        for (var c = _.B(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Jf = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    var Pf = function(a, b) {
        fz.call(this, 1036, b);
        this.l = V(this);
        this.o = W(this, a)
    };
    _.P(Pf, fz);
    Pf.prototype.j = function() {
        var a = this.o.value;
        0 !== df(a) && this.l.j(a)
    };
    var Qf = function(a, b, c) {
        fz.call(this, 1035, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(Qf, fz);
    Qf.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c = (0, D.J)(b.na()),
            d = this.o.toString(),
            e = {};
        Ce(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        Wa(f, this.o);
        var g = function() {
            var h = {};
            Ce(31, (0, D.J)(c), null, (h.url = d, h));
            a.l.j(Ke(b, Le(new Ne, 109)));
            _.Sd(f, "error", g)
        };
        document.head.appendChild(f);
        _.eb(f, "error", g)
    };
    var Lf = function(a) {
        fz.call(this, 1046, a);
        this.A = bz(this)
    };
    _.P(Lf, fz);
    Lf.prototype.j = function() {
        var a = this;
        Oe().then(function() {
            return a.A.notify()
        })
    };
    var Of = new w.Set;
    var jz = 0,
        kz = Ld(Yf(Wq("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var lz = function() {
            this.j = function() {}
        },
        mz = function() {
            var a = _.Ae(uk).o;
            _.Ae(lz).j(a)
        };
    var oz = function() {
            if (void 0 === b) {
                var a = void 0 === a ? _.q : a;
                var b = a.ggeac || (a.ggeac = {})
            }
            a = b;
            zy(_.Ae(Be), a);
            nz(b);
            _.Ae(lz).j = yy(xy, b);
            _.Ae(Ay).j()
        },
        nz = function(a) {
            var b = _.Ae(Ay);
            b.m = function(c, d) {
                return yy(ty, a, function() {
                    return !1
                })(c, d, 2)
            };
            b.D = function(c, d) {
                return yy(uy, a, function() {
                    return 0
                })(c, d, 2)
            };
            b.I = function(c, d) {
                return yy(vy, a, function() {
                    return ""
                })(c, d, 2)
            };
            b.C = function(c, d) {
                return yy(wy, a, function() {
                    return []
                })(c, d, 2)
            };
            b.j = function() {
                yy(qy, a)(2)
            }
        };
    var uh = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Jh(b.innerWidth, b.innerHeight)).round() : _.vu(b || window).round()
            } catch (d) {
                return new _.Jh(-12245933, -12245933)
            }
        },
        pz = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        hm = function(a, b) {
            b = void 0 === b ? _.q : b;
            a = a.scrollingElement || pz(a);
            return new _.Gh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Uh = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var qz = function(a) {
        _.R.call(this, a)
    };
    _.P(qz, _.R);
    var rz = function(a, b) {
            this.j = a;
            this.D = void 0 === b ? !1 : b;
            this.m = 0
        },
        tz = function(a, b) {
            if (0 === a.m) {
                if (sz(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    F(b, 5) && oe(c) && (new pe(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === qe("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        F(b, 5) && oe(d) && ay(new pe(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        sz = function(a, b, c) {
            return c ? qe(b, c, a.j) : null
        },
        uz = function(a, b, c, d) {
            if (d) {
                var e = y(c, 2) - Date.now() / 1E3;
                e = {
                    kd: a.D ? Math.max(e, 0) : e,
                    path: y(c, 3),
                    domain: y(c, 4),
                    Ff: !1
                };
                a = a.j;
                F(d, 5) && oe(a) && (new pe(a.document)).set(b, y(c, 1), e)
            }
        },
        vz = function(a, b, c) {
            if (c && qe(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.B(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, F(c, 5) && oe(f) && ay(new pe(f.document), b, "/", e.value)
            }
        };
    var wz = {},
        xz = (wz[3] = Ld(Yf(Wq("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), wz);
    ({})[3] = Ld(Yf(Wq("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var yz = function(a) {
            this.j = a;
            this.m = lu()
        },
        zz = function(a) {
            var b = {};
            _.br(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var Az = Q(["https://adservice.google.com/adsid/integrator.", ""]),
        Bz = Q(["https://adservice.google.ad/adsid/integrator.", ""]),
        Cz = Q(["https://adservice.google.ae/adsid/integrator.", ""]),
        Dz = Q(["https://adservice.google.com.af/adsid/integrator.", ""]),
        Ez = Q(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        Fz = Q(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        Gz = Q(["https://adservice.google.al/adsid/integrator.", ""]),
        Hz = Q(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        Iz = Q(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        Jz = Q(["https://adservice.google.as/adsid/integrator.", ""]),
        Kz = Q(["https://adservice.google.at/adsid/integrator.", ""]),
        Lz = Q(["https://adservice.google.com.au/adsid/integrator.", ""]),
        Mz = Q(["https://adservice.google.az/adsid/integrator.", ""]),
        Nz = Q(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        Oz = Q(["https://adservice.google.be/adsid/integrator.", ""]),
        Pz = Q(["https://adservice.google.bf/adsid/integrator.", ""]),
        Qz = Q(["https://adservice.google.bg/adsid/integrator.", ""]),
        Rz = Q(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        Sz = Q(["https://adservice.google.bi/adsid/integrator.", ""]),
        Tz = Q(["https://adservice.google.bj/adsid/integrator.", ""]),
        Uz = Q(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        Vz = Q(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        Wz = Q(["https://adservice.google.com.br/adsid/integrator.", ""]),
        Xz = Q(["https://adservice.google.bs/adsid/integrator.", ""]),
        Yz = Q(["https://adservice.google.bt/adsid/integrator.", ""]),
        Zz = Q(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        $z = Q(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        aA = Q(["https://adservice.google.ca/adsid/integrator.", ""]),
        bA = Q(["https://adservice.google.cd/adsid/integrator.", ""]),
        cA = Q(["https://adservice.google.cf/adsid/integrator.", ""]),
        dA = Q(["https://adservice.google.cg/adsid/integrator.", ""]),
        eA = Q(["https://adservice.google.ch/adsid/integrator.", ""]),
        fA = Q(["https://adservice.google.ci/adsid/integrator.", ""]),
        gA = Q(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        hA = Q(["https://adservice.google.cl/adsid/integrator.", ""]),
        iA = Q(["https://adservice.google.cm/adsid/integrator.", ""]),
        jA = Q(["https://adservice.google.com.co/adsid/integrator.", ""]),
        kA = Q(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        lA = Q(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        mA = Q(["https://adservice.google.cv/adsid/integrator.", ""]),
        nA = Q(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        oA = Q(["https://adservice.google.cz/adsid/integrator.", ""]),
        pA = Q(["https://adservice.google.de/adsid/integrator.", ""]),
        qA = Q(["https://adservice.google.dj/adsid/integrator.", ""]),
        rA = Q(["https://adservice.google.dk/adsid/integrator.", ""]),
        sA = Q(["https://adservice.google.dm/adsid/integrator.", ""]),
        tA = Q(["https://adservice.google.dz/adsid/integrator.", ""]),
        uA = Q(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        vA = Q(["https://adservice.google.ee/adsid/integrator.", ""]),
        wA = Q(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        xA = Q(["https://adservice.google.es/adsid/integrator.", ""]),
        yA = Q(["https://adservice.google.com.et/adsid/integrator.", ""]),
        zA = Q(["https://adservice.google.fi/adsid/integrator.", ""]),
        AA = Q(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        BA = Q(["https://adservice.google.fm/adsid/integrator.", ""]),
        CA = Q(["https://adservice.google.fr/adsid/integrator.", ""]),
        DA = Q(["https://adservice.google.ga/adsid/integrator.", ""]),
        EA = Q(["https://adservice.google.ge/adsid/integrator.", ""]),
        FA = Q(["https://adservice.google.gg/adsid/integrator.", ""]),
        GA = Q(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        HA = Q(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        IA = Q(["https://adservice.google.gl/adsid/integrator.", ""]),
        JA = Q(["https://adservice.google.gm/adsid/integrator.", ""]),
        KA = Q(["https://adservice.google.gr/adsid/integrator.", ""]),
        LA = Q(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        MA = Q(["https://adservice.google.gy/adsid/integrator.", ""]),
        NA = Q(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        OA = Q(["https://adservice.google.hn/adsid/integrator.", ""]),
        PA = Q(["https://adservice.google.hr/adsid/integrator.", ""]),
        QA = Q(["https://adservice.google.ht/adsid/integrator.", ""]),
        RA = Q(["https://adservice.google.hu/adsid/integrator.", ""]),
        SA = Q(["https://adservice.google.co.id/adsid/integrator.", ""]),
        TA = Q(["https://adservice.google.ie/adsid/integrator.", ""]),
        UA = Q(["https://adservice.google.co.il/adsid/integrator.", ""]),
        VA = Q(["https://adservice.google.im/adsid/integrator.", ""]),
        WA = Q(["https://adservice.google.co.in/adsid/integrator.", ""]),
        XA = Q(["https://adservice.google.iq/adsid/integrator.", ""]),
        YA = Q(["https://adservice.google.is/adsid/integrator.", ""]),
        ZA = Q(["https://adservice.google.it/adsid/integrator.", ""]),
        $A = Q(["https://adservice.google.je/adsid/integrator.", ""]),
        aB = Q(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        bB = Q(["https://adservice.google.jo/adsid/integrator.", ""]),
        cB = Q(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        dB = Q(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        eB = Q(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        fB = Q(["https://adservice.google.ki/adsid/integrator.", ""]),
        gB = Q(["https://adservice.google.kg/adsid/integrator.", ""]),
        hB = Q(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        iB = Q(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        jB = Q(["https://adservice.google.kz/adsid/integrator.", ""]),
        kB = Q(["https://adservice.google.la/adsid/integrator.", ""]),
        lB = Q(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        mB = Q(["https://adservice.google.li/adsid/integrator.", ""]),
        nB = Q(["https://adservice.google.lk/adsid/integrator.", ""]),
        oB = Q(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        pB = Q(["https://adservice.google.lt/adsid/integrator.", ""]),
        qB = Q(["https://adservice.google.lu/adsid/integrator.", ""]),
        rB = Q(["https://adservice.google.lv/adsid/integrator.", ""]),
        sB = Q(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        tB = Q(["https://adservice.google.md/adsid/integrator.", ""]),
        uB = Q(["https://adservice.google.me/adsid/integrator.", ""]),
        vB = Q(["https://adservice.google.mg/adsid/integrator.", ""]),
        wB = Q(["https://adservice.google.mk/adsid/integrator.", ""]),
        xB = Q(["https://adservice.google.ml/adsid/integrator.", ""]),
        yB = Q(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        zB = Q(["https://adservice.google.mn/adsid/integrator.", ""]),
        AB = Q(["https://adservice.google.ms/adsid/integrator.", ""]),
        BB = Q(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        CB = Q(["https://adservice.google.mu/adsid/integrator.", ""]),
        DB = Q(["https://adservice.google.mv/adsid/integrator.", ""]),
        EB = Q(["https://adservice.google.mw/adsid/integrator.", ""]),
        FB = Q(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        GB = Q(["https://adservice.google.com.my/adsid/integrator.", ""]),
        HB = Q(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        IB = Q(["https://adservice.google.com.na/adsid/integrator.", ""]),
        JB = Q(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        KB = Q(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        LB = Q(["https://adservice.google.ne/adsid/integrator.", ""]),
        MB = Q(["https://adservice.google.nl/adsid/integrator.", ""]),
        NB = Q(["https://adservice.google.no/adsid/integrator.", ""]),
        OB = Q(["https://adservice.google.com.np/adsid/integrator.", ""]),
        PB = Q(["https://adservice.google.nr/adsid/integrator.", ""]),
        QB = Q(["https://adservice.google.nu/adsid/integrator.", ""]),
        RB = Q(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        SB = Q(["https://adservice.google.com.om/adsid/integrator.", ""]),
        TB = Q(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        UB = Q(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        VB = Q(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        WB = Q(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        XB = Q(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        YB = Q(["https://adservice.google.pl/adsid/integrator.", ""]),
        ZB = Q(["https://adservice.google.pn/adsid/integrator.", ""]),
        $B = Q(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        aC = Q(["https://adservice.google.ps/adsid/integrator.", ""]),
        bC = Q(["https://adservice.google.pt/adsid/integrator.", ""]),
        cC = Q(["https://adservice.google.com.py/adsid/integrator.", ""]),
        dC = Q(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        eC = Q(["https://adservice.google.ro/adsid/integrator.", ""]),
        fC = Q(["https://adservice.google.rw/adsid/integrator.", ""]),
        gC = Q(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        hC = Q(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        iC = Q(["https://adservice.google.sc/adsid/integrator.", ""]),
        jC = Q(["https://adservice.google.se/adsid/integrator.", ""]),
        kC = Q(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        lC = Q(["https://adservice.google.sh/adsid/integrator.", ""]),
        mC = Q(["https://adservice.google.si/adsid/integrator.", ""]),
        nC = Q(["https://adservice.google.sk/adsid/integrator.", ""]),
        oC = Q(["https://adservice.google.sn/adsid/integrator.", ""]),
        pC = Q(["https://adservice.google.so/adsid/integrator.", ""]),
        qC = Q(["https://adservice.google.sm/adsid/integrator.", ""]),
        rC = Q(["https://adservice.google.sr/adsid/integrator.", ""]),
        sC = Q(["https://adservice.google.st/adsid/integrator.", ""]),
        tC = Q(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        uC = Q(["https://adservice.google.td/adsid/integrator.", ""]),
        vC = Q(["https://adservice.google.tg/adsid/integrator.", ""]),
        wC = Q(["https://adservice.google.co.th/adsid/integrator.", ""]),
        xC = Q(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        yC = Q(["https://adservice.google.tl/adsid/integrator.", ""]),
        zC = Q(["https://adservice.google.tm/adsid/integrator.", ""]),
        AC = Q(["https://adservice.google.tn/adsid/integrator.", ""]),
        BC = Q(["https://adservice.google.to/adsid/integrator.", ""]),
        CC = Q(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        DC = Q(["https://adservice.google.tt/adsid/integrator.", ""]),
        EC = Q(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        FC = Q(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        GC = Q(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        HC = Q(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        IC = Q(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        JC = Q(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        KC = Q(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        LC = Q(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        MC = Q(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        NC = Q(["https://adservice.google.vg/adsid/integrator.", ""]),
        OC = Q(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        PC = Q(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        QC = Q(["https://adservice.google.vu/adsid/integrator.", ""]),
        RC = Q(["https://adservice.google.ws/adsid/integrator.", ""]),
        SC = Q(["https://adservice.google.rs/adsid/integrator.", ""]),
        TC = Q(["https://adservice.google.co.za/adsid/integrator.", ""]),
        UC = Q(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        VC = Q(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        WC = Q(["https://adservice.google.cat/adsid/integrator.", ""]),
        XC = new w.Map([
            [".google.com", function(a) {
                return C(Az, a)
            }],
            [".google.ad", function(a) {
                return C(Bz, a)
            }],
            [".google.ae", function(a) {
                return C(Cz, a)
            }],
            [".google.com.af", function(a) {
                return C(Dz, a)
            }],
            [".google.com.ag", function(a) {
                return C(Ez, a)
            }],
            [".google.com.ai", function(a) {
                return C(Fz, a)
            }],
            [".google.al", function(a) {
                return C(Gz, a)
            }],
            [".google.co.ao", function(a) {
                return C(Hz, a)
            }],
            [".google.com.ar", function(a) {
                return C(Iz, a)
            }],
            [".google.as", function(a) {
                return C(Jz, a)
            }],
            [".google.at", function(a) {
                return C(Kz, a)
            }],
            [".google.com.au", function(a) {
                return C(Lz, a)
            }],
            [".google.az", function(a) {
                return C(Mz, a)
            }],
            [".google.com.bd", function(a) {
                return C(Nz, a)
            }],
            [".google.be", function(a) {
                return C(Oz, a)
            }],
            [".google.bf", function(a) {
                return C(Pz, a)
            }],
            [".google.bg", function(a) {
                return C(Qz, a)
            }],
            [".google.com.bh", function(a) {
                return C(Rz, a)
            }],
            [".google.bi", function(a) {
                return C(Sz, a)
            }],
            [".google.bj", function(a) {
                return C(Tz, a)
            }],
            [".google.com.bn", function(a) {
                return C(Uz, a)
            }],
            [".google.com.bo", function(a) {
                return C(Vz, a)
            }],
            [".google.com.br", function(a) {
                return C(Wz, a)
            }],
            [".google.bs", function(a) {
                return C(Xz, a)
            }],
            [".google.bt", function(a) {
                return C(Yz, a)
            }],
            [".google.co.bw", function(a) {
                return C(Zz, a)
            }],
            [".google.com.bz", function(a) {
                return C($z, a)
            }],
            [".google.ca", function(a) {
                return C(aA, a)
            }],
            [".google.cd", function(a) {
                return C(bA, a)
            }],
            [".google.cf", function(a) {
                return C(cA, a)
            }],
            [".google.cg", function(a) {
                return C(dA, a)
            }],
            [".google.ch", function(a) {
                return C(eA, a)
            }],
            [".google.ci", function(a) {
                return C(fA, a)
            }],
            [".google.co.ck", function(a) {
                return C(gA, a)
            }],
            [".google.cl", function(a) {
                return C(hA, a)
            }],
            [".google.cm", function(a) {
                return C(iA, a)
            }],
            [".google.com.co", function(a) {
                return C(jA, a)
            }],
            [".google.co.cr", function(a) {
                return C(kA, a)
            }],
            [".google.com.cu", function(a) {
                return C(lA, a)
            }],
            [".google.cv", function(a) {
                return C(mA, a)
            }],
            [".google.com.cy", function(a) {
                return C(nA, a)
            }],
            [".google.cz", function(a) {
                return C(oA, a)
            }],
            [".google.de", function(a) {
                return C(pA, a)
            }],
            [".google.dj", function(a) {
                return C(qA, a)
            }],
            [".google.dk", function(a) {
                return C(rA, a)
            }],
            [".google.dm", function(a) {
                return C(sA, a)
            }],
            [".google.dz", function(a) {
                return C(tA, a)
            }],
            [".google.com.ec", function(a) {
                return C(uA, a)
            }],
            [".google.ee", function(a) {
                return C(vA, a)
            }],
            [".google.com.eg", function(a) {
                return C(wA, a)
            }],
            [".google.es", function(a) {
                return C(xA, a)
            }],
            [".google.com.et", function(a) {
                return C(yA, a)
            }],
            [".google.fi", function(a) {
                return C(zA, a)
            }],
            [".google.com.fj", function(a) {
                return C(AA, a)
            }],
            [".google.fm", function(a) {
                return C(BA, a)
            }],
            [".google.fr", function(a) {
                return C(CA, a)
            }],
            [".google.ga", function(a) {
                return C(DA, a)
            }],
            [".google.ge", function(a) {
                return C(EA, a)
            }],
            [".google.gg", function(a) {
                return C(FA, a)
            }],
            [".google.com.gh", function(a) {
                return C(GA, a)
            }],
            [".google.com.gi", function(a) {
                return C(HA, a)
            }],
            [".google.gl", function(a) {
                return C(IA, a)
            }],
            [".google.gm", function(a) {
                return C(JA, a)
            }],
            [".google.gr", function(a) {
                return C(KA, a)
            }],
            [".google.com.gt", function(a) {
                return C(LA, a)
            }],
            [".google.gy", function(a) {
                return C(MA, a)
            }],
            [".google.com.hk", function(a) {
                return C(NA, a)
            }],
            [".google.hn", function(a) {
                return C(OA, a)
            }],
            [".google.hr", function(a) {
                return C(PA, a)
            }],
            [".google.ht", function(a) {
                return C(QA, a)
            }],
            [".google.hu", function(a) {
                return C(RA, a)
            }],
            [".google.co.id", function(a) {
                return C(SA, a)
            }],
            [".google.ie", function(a) {
                return C(TA, a)
            }],
            [".google.co.il", function(a) {
                return C(UA, a)
            }],
            [".google.im", function(a) {
                return C(VA, a)
            }],
            [".google.co.in", function(a) {
                return C(WA, a)
            }],
            [".google.iq", function(a) {
                return C(XA, a)
            }],
            [".google.is", function(a) {
                return C(YA, a)
            }],
            [".google.it", function(a) {
                return C(ZA, a)
            }],
            [".google.je", function(a) {
                return C($A, a)
            }],
            [".google.com.jm", function(a) {
                return C(aB, a)
            }],
            [".google.jo", function(a) {
                return C(bB, a)
            }],
            [".google.co.jp", function(a) {
                return C(cB, a)
            }],
            [".google.co.ke", function(a) {
                return C(dB, a)
            }],
            [".google.com.kh", function(a) {
                return C(eB, a)
            }],
            [".google.ki", function(a) {
                return C(fB, a)
            }],
            [".google.kg", function(a) {
                return C(gB, a)
            }],
            [".google.co.kr", function(a) {
                return C(hB, a)
            }],
            [".google.com.kw", function(a) {
                return C(iB, a)
            }],
            [".google.kz", function(a) {
                return C(jB, a)
            }],
            [".google.la", function(a) {
                return C(kB, a)
            }],
            [".google.com.lb", function(a) {
                return C(lB, a)
            }],
            [".google.li", function(a) {
                return C(mB, a)
            }],
            [".google.lk", function(a) {
                return C(nB, a)
            }],
            [".google.co.ls", function(a) {
                return C(oB, a)
            }],
            [".google.lt", function(a) {
                return C(pB, a)
            }],
            [".google.lu", function(a) {
                return C(qB, a)
            }],
            [".google.lv", function(a) {
                return C(rB, a)
            }],
            [".google.com.ly", function(a) {
                return C(sB, a)
            }],
            [".google.md", function(a) {
                return C(tB, a)
            }],
            [".google.me", function(a) {
                return C(uB, a)
            }],
            [".google.mg", function(a) {
                return C(vB, a)
            }],
            [".google.mk", function(a) {
                return C(wB, a)
            }],
            [".google.ml", function(a) {
                return C(xB, a)
            }],
            [".google.com.mm", function(a) {
                return C(yB, a)
            }],
            [".google.mn", function(a) {
                return C(zB, a)
            }],
            [".google.ms", function(a) {
                return C(AB, a)
            }],
            [".google.com.mt", function(a) {
                return C(BB, a)
            }],
            [".google.mu", function(a) {
                return C(CB, a)
            }],
            [".google.mv", function(a) {
                return C(DB, a)
            }],
            [".google.mw", function(a) {
                return C(EB, a)
            }],
            [".google.com.mx", function(a) {
                return C(FB, a)
            }],
            [".google.com.my", function(a) {
                return C(GB, a)
            }],
            [".google.co.mz", function(a) {
                return C(HB, a)
            }],
            [".google.com.na", function(a) {
                return C(IB, a)
            }],
            [".google.com.ng", function(a) {
                return C(JB, a)
            }],
            [".google.com.ni", function(a) {
                return C(KB, a)
            }],
            [".google.ne", function(a) {
                return C(LB, a)
            }],
            [".google.nl", function(a) {
                return C(MB, a)
            }],
            [".google.no", function(a) {
                return C(NB, a)
            }],
            [".google.com.np", function(a) {
                return C(OB, a)
            }],
            [".google.nr", function(a) {
                return C(PB, a)
            }],
            [".google.nu", function(a) {
                return C(QB, a)
            }],
            [".google.co.nz", function(a) {
                return C(RB, a)
            }],
            [".google.com.om", function(a) {
                return C(SB, a)
            }],
            [".google.com.pa", function(a) {
                return C(TB, a)
            }],
            [".google.com.pe", function(a) {
                return C(UB, a)
            }],
            [".google.com.pg", function(a) {
                return C(VB, a)
            }],
            [".google.com.ph", function(a) {
                return C(WB, a)
            }],
            [".google.com.pk", function(a) {
                return C(XB, a)
            }],
            [".google.pl", function(a) {
                return C(YB, a)
            }],
            [".google.pn", function(a) {
                return C(ZB, a)
            }],
            [".google.com.pr", function(a) {
                return C($B, a)
            }],
            [".google.ps", function(a) {
                return C(aC, a)
            }],
            [".google.pt", function(a) {
                return C(bC, a)
            }],
            [".google.com.py", function(a) {
                return C(cC, a)
            }],
            [".google.com.qa", function(a) {
                return C(dC, a)
            }],
            [".google.ro", function(a) {
                return C(eC, a)
            }],
            [".google.rw", function(a) {
                return C(fC, a)
            }],
            [".google.com.sa", function(a) {
                return C(gC, a)
            }],
            [".google.com.sb", function(a) {
                return C(hC, a)
            }],
            [".google.sc", function(a) {
                return C(iC, a)
            }],
            [".google.se", function(a) {
                return C(jC, a)
            }],
            [".google.com.sg", function(a) {
                return C(kC, a)
            }],
            [".google.sh", function(a) {
                return C(lC, a)
            }],
            [".google.si", function(a) {
                return C(mC, a)
            }],
            [".google.sk", function(a) {
                return C(nC, a)
            }],
            [".google.sn", function(a) {
                return C(oC, a)
            }],
            [".google.so", function(a) {
                return C(pC, a)
            }],
            [".google.sm", function(a) {
                return C(qC, a)
            }],
            [".google.sr", function(a) {
                return C(rC, a)
            }],
            [".google.st", function(a) {
                return C(sC, a)
            }],
            [".google.com.sv", function(a) {
                return C(tC, a)
            }],
            [".google.td", function(a) {
                return C(uC, a)
            }],
            [".google.tg", function(a) {
                return C(vC, a)
            }],
            [".google.co.th", function(a) {
                return C(wC, a)
            }],
            [".google.com.tj", function(a) {
                return C(xC, a)
            }],
            [".google.tl", function(a) {
                return C(yC, a)
            }],
            [".google.tm", function(a) {
                return C(zC, a)
            }],
            [".google.tn", function(a) {
                return C(AC, a)
            }],
            [".google.to", function(a) {
                return C(BC, a)
            }],
            [".google.com.tr", function(a) {
                return C(CC, a)
            }],
            [".google.tt", function(a) {
                return C(DC, a)
            }],
            [".google.com.tw", function(a) {
                return C(EC, a)
            }],
            [".google.co.tz", function(a) {
                return C(FC, a)
            }],
            [".google.com.ua", function(a) {
                return C(GC, a)
            }],
            [".google.co.ug", function(a) {
                return C(HC, a)
            }],
            [".google.co.uk", function(a) {
                return C(IC, a)
            }],
            [".google.com.uy", function(a) {
                return C(JC, a)
            }],
            [".google.co.uz", function(a) {
                return C(KC, a)
            }],
            [".google.com.vc", function(a) {
                return C(LC, a)
            }],
            [".google.co.ve", function(a) {
                return C(MC, a)
            }],
            [".google.vg", function(a) {
                return C(NC, a)
            }],
            [".google.co.vi", function(a) {
                return C(OC, a)
            }],
            [".google.com.vn", function(a) {
                return C(PC, a)
            }],
            [".google.vu", function(a) {
                return C(QC, a)
            }],
            [".google.ws", function(a) {
                return C(RC, a)
            }],
            [".google.rs", function(a) {
                return C(SC, a)
            }],
            [".google.co.za", function(a) {
                return C(TC, a)
            }],
            [".google.co.zm", function(a) {
                return C(UC, a)
            }],
            [".google.co.zw", function(a) {
                return C(VC, a)
            }],
            [".google.cat", function(a) {
                return C(WC, a)
            }]
        ].map(function(a) {
            var b = _.B(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var YC = function(a, b, c) {
        var d = _.Dd("LINK", a);
        try {
            d.rel = "preload";
            if (b instanceof $f) var e = Va(b).toString();
            else {
                if (b instanceof Na) var f = Oa(b);
                else {
                    if (b instanceof Na) var g = b;
                    else b = "object" == typeof b && b.Ta ? b.Na() : String(b), ag.test(b) || (b = "about:invalid#zClosurez"), g = _.cb(b);
                    f = Oa(g)
                }
                e = f
            }
            d.href = e
        } catch (h) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (h) {}
    };
    var Uf = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var kg = _.q,
        ZC = function(a) {
            var b = new w.Map([
                ["domain", _.q.location.hostname]
            ]);
            lg[3] >= re() && b.set("adsid", lg[1]);
            return Md(XC.get(a).js, b)
        },
        lg, $C, jg = function() {
            kg = _.q;
            lg = kg.googleToken = kg.googleToken || {};
            var a = re();
            lg[1] && lg[3] > a && 0 < lg[2] || (lg[1] = "", lg[2] = -1, lg[3] = -1, lg[4] = "", lg[6] = "");
            $C = kg.googleIMState = kg.googleIMState || {};
            XC.has($C[1]) || ($C[1] = ".google.com");
            Array.isArray($C[5]) || ($C[5] = []);
            "boolean" !== typeof $C[6] && ($C[6] = !1);
            Array.isArray($C[7]) || ($C[7] = []);
            "number" !== typeof $C[8] && ($C[8] = 0)
        },
        aD = function(a) {
            jg();
            XC.has(a) && ($C[1] = a)
        },
        mg = {
            fd: function() {
                return 0 < $C[8]
            },
            yf: function() {
                $C[8]++
            },
            zf: function() {
                0 < $C[8] && $C[8]--
            },
            Af: function() {
                $C[8] = 0
            },
            Eh: function() {
                return !1
            },
            Ac: function() {
                return $C[5]
            },
            zd: function(a) {
                try {
                    a()
                } catch (b) {
                    _.q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            de: function() {
                if (!mg.fd()) {
                    var a = _.q.document,
                        b = function(e) {
                            e = ZC(e);
                            a: {
                                try {
                                    var f = ju();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            YC(a, e.toString(), f);
                            f = _.Dd("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.q.processGoogleToken({}, 2)
                            };
                            Wa(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), mg.yf()
                            } catch (g) {}
                        },
                        c = $C[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.q.setTimeout(function() {
                        return _.q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        bD = function(a) {
            _.q.processGoogleToken = _.q.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                jg();
                1 == c ? mg.Af() : mg.zf();
                var k = kg.googleToken = kg.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !mg.fd() && (!(lg[3] >= re()) || "NT" == lg[1]);
                var n = !(lg[3] >= re()) && 0 != c;
                if (l || e || n) e = re(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.px(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, jg();
                if (l || !mg.fd()) {
                    c = mg.Ac();
                    for (b = 0; b < c.length; b++) mg.zd(c[b]);
                    c.length = 0
                }
            };
            pg(a)
        };
    var Io = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.H = b.rootMargin ? qg(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = _.Nc(this.H, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.B = sg(b.threshold);
            this.o = a;
            this.j = [];
            this.I = [];
            this.C = !1;
            this.m = null;
            this.D = $q(this.l, 100, this)
        },
        cD = function(a) {
            if (a.root) var b = tg(a.root);
            else {
                var c = _.vu(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = _.Nc(a.H, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        dD = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Jg(a.B, function(f) {
                return f < d != f < e
            })
        };
    Io.prototype.l = function() {
        var a = this,
            b = cD(this);
        _.br(this.j, function(c) {
            var d = c.target,
                e = tg(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                n = h - l,
                m = k - g;
            g = 0 <= n && 0 <= m ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: n,
                height: m
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            dD(a, c.sa, d) && a.I.push(d);
            c.sa = d
        });
        this.I.length && this.o(eD(this), this)
    };
    Io.prototype.observe = function(a) {
        _.Jg(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            sa: null
        }), this.l(), this.C || (this.C = !0, _.eb(_.q, "scroll", this.D), _.eb(_.q, "resize", this.D), _.q.MutationObserver && !this.m && (this.m = new MutationObserver(this.D), this.m.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    Io.prototype.unobserve = function(a) {
        this.j = _.rg(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    Io.prototype.disconnect = function() {
        this.C = !1;
        this.j.length = 0;
        _.Sd(_.q, "scroll", this.D);
        _.Sd(_.q, "resize", this.D);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var eD = function(a) {
        var b = [].concat(_.Od(a.I));
        a.I.length = 0;
        return b
    };
    var fD = function(a, b, c, d, e, f) {
        _.yv.call(this);
        this.Ma = a;
        this.status = 1;
        this.C = b;
        this.m = c;
        this.U = d;
        this.Ub = !!e;
        this.l = Math.random();
        this.H = {};
        this.j = null;
        this.B = (0, _.Rq)(this.F, this);
        this.o = f
    };
    _.P(fD, _.yv);
    fD.prototype.F = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.Ub && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ka(b) && (a = b.i, b.c === this.Ma && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, gD(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ka(b)) && this.H.hasOwnProperty(a)) this.H[a](b)
            }
        }
    };
    var gD = function(a) {
        var b = {};
        b.c = a.Ma;
        b.i = a.l;
        a.o && (b.e = a.o);
        a.C.postMessage(JSON.stringify(b), a.m)
    };
    fD.prototype.O = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && gD(this)
            } catch (a) {}
            window.setTimeout((0, _.Rq)(this.O, this), 50)
        }
    };
    fD.prototype.connect = function(a) {
        a && (this.j = a);
        _.eb(window, "message", this.B);
        this.U && this.O()
    };
    var hD = function(a, b, c) {
            a.H[b] = c
        },
        iD = function(a, b, c) {
            var d = {};
            d.c = a.Ma;
            d.i = a.l;
            d.s = b;
            d.p = c;
            try {
                a.C.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
    fD.prototype.D = function() {
        this.status = 3;
        _.Sd(window, "message", this.B);
        _.yv.prototype.D.call(this)
    };
    var jD = new w.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        kD = new w.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var lD = function(a) {
        _.R.call(this, a)
    };
    _.P(lD, _.R);
    var mD = function(a) {
        _.R.call(this, a)
    };
    _.P(mD, _.R);
    var nD = function(a) {
        _.R.call(this, a)
    };
    _.P(nD, _.R);
    var oD = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        pD = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        qD = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        rD = function(a, b) {
            if (3 == oD(b)) return !1;
            a();
            return !0
        },
        sD = function(a, b) {
            if (!rD(a, b)) {
                var c = !1,
                    d = pD(b),
                    e = function() {
                        !c && rD(a, b) && (c = !0, _.Sd(b, d, e))
                    };
                d && _.eb(b, d, e)
            }
        };
    var ko = function(a, b) {
            this.j = a;
            this.D = b;
            this.m = {}
        },
        lo = function(a) {
            fo() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, ar), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = fo(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.t(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, n;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (n = l.reportGmaTouchEvent) || n.postMessage(h)
                        }
                    } catch (m) {
                        a.D("paw_sigs", {
                            msg: "reportTouchError",
                            err: m instanceof Error ? m.message : "nonError"
                        })
                    }
                })()
            }, ar))
        },
        go = function(a, b, c, d, e) {
            var f = 200,
                g = Yn;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * ie())),
                k = 0,
                l = function(n) {
                    try {
                        var m = "object" === typeof n.data ? n.data : JSON.parse(n.data);
                        h === m.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), m.signal ? c(m.signal) : m.error && d(m.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == n.data ? "null" : 500 < n.data.length ? n.data.substring(0, 500) : n.data
                        })
                    }
                };
            window.addEventListener("message", function(n) {
                e(903, function() {
                    l(n)
                })()
            });
            a.postMessage(_.t(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        fo = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var uD, tD;
    uD = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new tD;
        this.sideRailProcessedFixedElements = new w.Set;
        this.sideRailAvailableSpace = new w.Map
    };
    _.Kl = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new w.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new w.Map)) : a.google_reactive_ads_global_state = new uD;
        return a.google_reactive_ads_global_state
    };
    tD = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var xD;
    _.vD = function(a) {
        this.j = _.Kl(a).floatingAdsStacking
    };
    _.wD = function(a) {
        a = _.Gu(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    xD = function(a) {
        var b = _.wD(a);
        _.br(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.yD = function(a) {
        this.m = a;
        this.j = null
    };
    _.zD = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            xD(b);
            a.j = c
        }
    };
    _.AD = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            xD(b);
            a.j = null
        }
    };
    var Ll, wl, zl;
    Ll = 728 * 1.38;
    _.Nl = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.BD = function(a) {
        var b = _.yl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    wl = function(a, b) {
        return (a = _.yl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    zl = function(a) {
        return (a = _.BD(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.yl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.CD = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var Ol = 90 * 1.38;
    var DD;
    _.ED = function(a, b) {
        if (!a.body) return null;
        var c = new DD;
        c.apply(a, b);
        return function() {
            _.jv(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.D,
                position: c.I,
                top: c.C
            });
            b.scrollTo(0, c.m)
        }
    };
    DD = function() {
        this.j = this.C = this.I = this.D = null;
        this.m = 0
    };
    DD.prototype.apply = function(a, b) {
        this.D = a.body.style.overflow;
        this.I = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.CD(b);
        _.jv(a.body, "top", -this.m + "px")
    };
    _.Bl = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Kg(a, b)
    };
    _.Al = function(a) {
        return !!a && 1 > a.length
    };
    var FD = function(a) {
        _.yv.call(this);
        this.j = a;
        this.m = null;
        this.H = {};
        this.B = 0;
        this.C = null
    };
    _.P(FD, _.yv);
    FD.prototype.D = function() {
        this.C && _.Sd(this.j, "message", this.C);
        _.yv.prototype.D.call(this)
    };
    FD.prototype.l = function() {
        var a;
        return "function" === typeof(null == (a = this.j) ? void 0 : a.__uspapi) || null != GD(this)
    };
    FD.prototype.o = function(a) {
        var b = {};
        if (this.l()) {
            var c = _.Zq(function() {
                return a(b)
            });
            HD(this, function(d, e) {
                e && (b = d);
                c()
            });
            setTimeout(c, 500)
        } else a(b)
    };
    var HD = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.j) ? void 0 : c.__uspapi) ? (a = a.j.__uspapi, a("getUSPData", 1, b)) : GD(a) && (ID(a), c = ++a.B, a.H[c] = b, a.m && (b = {}, a.m.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        GD = function(a) {
            if (a.m) return a.m;
            a.m = Qu(a.j, "__uspapiLocator");
            return a.m
        },
        ID = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.H) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.eb(a.j, "message", a.C))
        };
    var KD = function(a) {
        _.R.call(this, a, -1, JD)
    };
    _.P(KD, _.R);
    var JD = [1, 2];
    var LD = function(a) {
        _.R.call(this, a)
    };
    _.P(LD, _.R);
    var Bm = function(a) {
        _.yv.call(this);
        this.C = a;
        this.m = this.j = null;
        this.l = {};
        this.o = 0;
        this.H = !1
    };
    _.P(Bm, _.yv);
    var MD = function(a) {
            if (!a.H) {
                if (!a.j) {
                    var b = Qu(a.C, "googlefcPresent");
                    a.j = b ? b : null
                }
                a.H = !0
            }
            return !!a.j
        },
        OD = function(a) {
            return new w.Promise(function(b) {
                if (MD(a))
                    if (a.j === a.C) {
                        var c = a.j.googlefc || (a.j.googlefc = {});
                        c.__fci = c.__fci || [];
                        c.__fci.push("loaded", function(e) {
                            b(Yd(LD, e))
                        })
                    } else {
                        ND(a);
                        c = a.o++;
                        a.l[c] = b;
                        var d = {};
                        (0, D.J)(a.j).postMessage((d.__fciCall = {
                            command: "loaded",
                            callId: c
                        }, d), "*")
                    }
            })
        },
        ND = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = Yd(LD, b.data.__fciReturn);
                    (0, a.l[y(c, 1)])(c)
                } catch (d) {}
            }, _.eb(a.C, "message", a.m))
        };
    var PD = {},
        Og = (PD[23] = .001, PD[211] = !1, PD[253] = !1, PD[246] = [], PD[226] = [], PD[150] = "", PD[221] = /^true$/.test("false"), PD[36] = /^true$/.test("false"), PD[172] = null, PD[260] = void 0, PD[251] = null, PD),
        Ng = function() {
            this.j = !1
        };
    var Dj = function(a) {
            var b = void 0 === b ? ze(_.q) : b;
            this.id = a;
            this.m = Math.random() < _.Pg(23);
            this.j = {
                pvsid: String(b)
            }
        },
        QD = function(a) {
            a = Mg(a);
            var b;
            mh.set(a, (null != (b = mh.get(a)) ? b : 0) + 1)
        },
        lh = function() {
            return [].concat(_.Od(_.t(mh, "values").call(mh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        L = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        Fj = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (RD()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.px(window, SD(a) || "", void 0, _.G(qw))
        },
        SD = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.jk(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        TD = function(a) {
            var b = [].concat(_.Od(_.t(mh, "keys").call(mh)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? L(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), L(a, "nw_id", b.join()))
        },
        mi = function(a, b) {
            L(a, "vrg", String(b.mb || b.Ja));
            TD(a);
            L(a, "nslots", lh().toString());
            b = _.Ae(Be).j();
            b.length && L(a, "eid", b.join());
            L(a, "pub_url", document.URL)
        },
        gi = function(a, b, c) {
            c = void 0 === c ? _.Pg(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.Pg(23);
            Math.random() < c && (a = new Dj(a), b(a), Fj(a, 1))
        },
        mh = new w.Map,
        RD = Rh(function() {
            return !!Ku(_.q.location.href)
        });
    var $g = function() {
        gy.call(this, _.G(ah) || _.G(ex) ? 1 : 0, _.q);
        this.D = 0;
        var a = _.G(ah) || _.G(ex);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    };
    _.P($g, gy);
    _.UD = function(a) {
        this.context = a
    };
    var VD = {},
        tj = (VD.companion_ads = "companionAds", VD.content = "content", VD.publisher_ads = "pubads", VD);
    var oh = function(a) {
        _.R.call(this, a)
    };
    _.P(oh, _.R);
    oh.prototype.getWidth = function() {
        return y(this, 1)
    };
    var sh = function(a, b) {
        return _.A(a, 1, b)
    };
    oh.prototype.getHeight = function() {
        return y(this, 2)
    };
    var rh = function(a, b) {
            return _.A(a, 2, b)
        },
        Fk = function() {
            var a = new oh;
            return _.A(a, 3, !0)
        };
    var Qj = function(a) {
        _.R.call(this, a, -1, WD)
    };
    _.P(Qj, _.R);
    var Nj = function(a) {
            return y(a, 1)
        },
        Pj = function(a, b) {
            return _.A(a, 1, b)
        },
        Oj = function(a, b) {
            return _.jh(a, 2, b)
        },
        WD = [2];
    var jp = function(a) {
        _.R.call(this, a)
    };
    _.P(jp, _.R);
    var mn = function(a) {
        _.R.call(this, a, -1, XD)
    };
    _.P(mn, _.R);
    var sn = function(a, b) {
            return _.A(a, 1, b)
        },
        qn = function(a, b) {
            return _.jh(a, 2, b)
        },
        XD = [2];
    var Un = function(a) {
        _.R.call(this, a, -1, YD)
    };
    _.P(Un, _.R);
    var rn = function(a, b) {
            bf(a, 1, mn, b)
        },
        YD = [1];
    var Sn = function(a) {
        _.R.call(this, a, -1, ZD)
    };
    _.P(Sn, _.R);
    var ZD = [2, 3];
    var Qn = function(a) {
        _.R.call(this, a)
    };
    _.P(Qn, _.R);
    var $D = function(a) {
        _.R.call(this, a)
    };
    _.P($D, _.R);
    $D.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.A(this, 5, a)
    };
    $D.prototype.clearTagForChildDirectedTreatment = function() {
        return Ge(this, 5)
    };
    $D.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.A(this, 6, a)
    };
    var ik = function(a) {
        _.R.call(this, a)
    };
    _.P(ik, _.R);
    var bE = function(a) {
        _.R.call(this, a, -1, aE)
    };
    _.P(bE, _.R);
    bE.prototype.ua = function() {
        return Wc(this, Qj, 14)
    };
    bE.prototype.Sa = function() {
        return Me(this, ik, 18)
    };
    var cE = function(a) {
        return Me(a, $D, 25)
    };
    bE.prototype.getCorrelator = function() {
        return y(this, 26)
    };
    bE.prototype.setCorrelator = function(a) {
        return _.A(this, 26, a)
    };
    bE.prototype.Bc = function() {
        return Rn(this, Qn, 33)
    };
    var aE = [2, 3, 14];
    var Lh = function() {
        this.j = new w.Map
    };
    var dE = function() {
            this.m = {};
            this.j = new bE;
            this.D = new w.Map;
            this.j.setCorrelator(Zu());
            _.Pg(36) && _.A(this.j, 15, !0)
        },
        eE = function(a) {
            var b = $h(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.Ae(Lh),
                    e = ++_.Ae($g).D;
                d.j.set(c, e);
                _.A(a, 20, e);
                b.m[c] = a
            }
        },
        Mm = function(a, b) {
            return a.m[b]
        },
        $h = function() {
            return _.Ae(dE)
        };
    var fE = Rh(Oh);
    var vi = ["auto", "inherit", "100%"],
        wi = vi.concat(["none"]);
    var Vl = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        ti(a, function(e) {
            return d = ui(e, b, 10, 10)
        }, c);
        return d
    };
    var gE = function(a, b, c, d, e, f) {
            this.D = _.dv(a);
            this.m = _.dv(b);
            this.I = c;
            this.j = _.dv(d);
            this.C = e;
            this.l = f
        },
        hE = function(a) {
            return JSON.stringify({
                windowCoords_t: a.D.top,
                windowCoords_r: a.D.right,
                windowCoords_b: a.D.bottom,
                windowCoords_l: a.D.left,
                frameCoords_t: a.m.top,
                frameCoords_r: a.m.right,
                frameCoords_b: a.m.bottom,
                frameCoords_l: a.m.left,
                styleZIndex: a.I,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.C,
                yInView: a.l
            })
        },
        iE = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.cv(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = nv(a);
            d = _.Gg(_.Hg, a);
            var e = new ev(c.x, c.y, d.width, d.height);
            c = fv(e);
            d = String(Fg(a, "zIndex"));
            var f = new _.cv(0, Infinity, Infinity, 0);
            for (var g = ru(a), h = g.j.body, k = g.j.documentElement, l = wu(g.j); a = mv(a);)
                if (!(_.Br && 0 == a.clientWidth || Er && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Fg(a, "overflow")) {
                    var n = nv(a),
                        m = new _.Gh(a.clientLeft, a.clientTop);
                    n.x += m.x;
                    n.y += m.y;
                    f.top = Math.max(f.top, n.y);
                    f.right = Math.min(f.right, n.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                    f.left = Math.max(f.left, n.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.vu(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new ev(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? gv(e, f) : null;
            g = a = 0;
            l && !(new _.Jh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.cv(0, 0, 0, 0);
            if (h = f)(e = gv(e, f)) ? (k = fv(f), n = fv(e), h = n.right != k.left && k.right != n.left, k = n.bottom != k.top && k.bottom != n.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.cv(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new gE(b, c, d, l, a, g)
        };
    var jE = function(a) {
        this.I = a;
        this.C = null;
        this.O = this.status = 0;
        this.m = null;
        this.Ma = "sfchannel" + a
    };
    var kE = function(a) {
        this.j = a
    };
    var lE = function(a, b) {
        this.wc = a;
        this.xc = b;
        this.m = this.j = !1
    };
    var mE = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.D = b;
        this.I = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Ub = g;
        this.hostpageLibraryTokens = h;
        this.j = ""
    };
    var nE = function(a, b) {
        this.m = a;
        this.I = b
    };
    nE.prototype.j = function(a) {
        this.I && a && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var oE = function(a, b, c) {
        nE.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.P(oE, nE);
    oE.prototype.j = function() {
        return nE.prototype.j.call(this, {
            uid: this.m,
            version: this.version
        })
    };
    var pE = function(a, b, c, d) {
        nE.call(this, a, void 0 === d ? "" : d);
        this.C = b;
        this.D = c
    };
    _.P(pE, nE);
    pE.prototype.j = function() {
        return nE.prototype.j.call(this, {
            uid: this.m,
            initialWidth: this.C,
            initialHeight: this.D
        })
    };
    var qE = function(a, b, c) {
        nE.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.P(qE, nE);
    qE.prototype.j = function() {
        return nE.prototype.j.call(this, {
            uid: this.m,
            description: this.description
        })
    };
    var rE = function(a, b, c, d) {
        nE.call(this, a, void 0 === d ? "" : d);
        this.D = b;
        this.push = c
    };
    _.P(rE, nE);
    rE.prototype.j = function() {
        return nE.prototype.j.call(this, {
            uid: this.m,
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        })
    };
    var sE = function(a, b) {
        nE.call(this, a, void 0 === b ? "" : b)
    };
    _.P(sE, nE);
    sE.prototype.j = function() {
        return nE.prototype.j.call(this, {
            uid: this.m
        })
    };
    var tE = function(a, b, c) {
        nE.call(this, a, void 0 === c ? "" : c);
        this.C = b
    };
    _.P(tE, nE);
    tE.prototype.j = function() {
        var a = {
            uid: this.m,
            newGeometry: hE(this.C)
        };
        return nE.prototype.j.call(this, a)
    };
    var uE = function(a, b, c, d, e, f) {
        tE.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.D = d;
        this.push = e
    };
    _.P(uE, tE);
    uE.prototype.j = function() {
        var a = {
            uid: this.m,
            success: this.success,
            newGeometry: hE(this.C),
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        };
        this.I && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var vE = function(a, b, c, d) {
        nE.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.P(vE, nE);
    vE.prototype.j = function() {
        return nE.prototype.j.call(this, {
            uid: this.m,
            width: this.width,
            height: this.height
        })
    };
    var wE = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Gd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var xE = function() {
            this.j = []
        },
        zE = function(a, b, c, d, e) {
            a.j.push(new yE(b, c, d, e))
        },
        AE = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.D.style.removeProperty(c.j), c.D.style.setProperty(c.j, String(c.I), c.C)) : c.D.style[c.j] = c.I
            }
            a.j.length = 0
        },
        yE = function(a, b, c, d) {
            this.D = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.I = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var BE = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        CE = function() {
            var a = window,
                b = _.te(a);
            b && BE({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        DE = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.te(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && BE(_.t(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.te() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var IE = function(a) {
        jE.call(this, a.uniqueId);
        var b = this;
        this.H = a.rh;
        this.B = 1 === a.size;
        this.Z = new lE(a.permissions.wc && !this.B, a.permissions.xc && !this.B);
        this.l = a.pd;
        var c;
        this.ca = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.Y = "file:" == c ? "*" : c + "//" + d;
        this.ha = !!a.Ub;
        c = "//" + a.fe + (_.G(Ew) ? ".safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.K = a.fe ? c : "//tpc.googlesyndication.com";
        this.ka = a.Dc ? "*" : "https:" + this.K;
        this.fa = !!a.Fe;
        this.ia = EE(a);
        this.D = new xE;
        FE(this, a.pd, a.size);
        this.C = this.T = iE(a.pd);
        this.U = a.Ef || "1-0-40";
        var e;
        this.ja = null != (e = a.ye) ? e : "";
        GE(this, a);
        this.wa = DE(412, function() {
            return HE(b)
        }, a.Ia);
        this.F = -1;
        this.o = 0;
        var f = DE(415, function() {
            b.j && (b.j.name = "", a.Wd && a.Wd(), _.Sd(b.j, "load", f))
        }, a.Ia);
        _.eb(this.j, "load", f);
        this.hd = DE(413, this.hd, a.Ia);
        this.qd = DE(417, this.qd, a.Ia);
        this.td = DE(419, this.td, a.Ia);
        this.cd = DE(411, this.cd, a.Ia);
        this.bd = DE(409, this.bd, a.Ia);
        this.M = DE(410, this.M, a.Ia);
        this.ld = DE(416, this.ld, a.Ia);
        this.m = new fD(this.Ma, this.j.contentWindow, this.ka, !1);
        hD(this.m, "init_done", (0, _.Rq)(this.hd, this));
        hD(this.m, "register_done", (0, _.Rq)(this.qd, this));
        hD(this.m, "report_error", (0, _.Rq)(this.td, this));
        hD(this.m, "expand_request", (0, _.Rq)(this.cd, this));
        hD(this.m, "collapse_request", (0, _.Rq)(this.bd, this));
        hD(this.m, "creative_geometry_update", (0, _.Rq)(this.M, this));
        this.m.connect((0, _.Rq)(this.ld, this))
    };
    _.P(IE, jE);
    var FE = function(a, b, c) {
            a.B ? (b.style.width = _.pv("100%", !0), b.style.height = _.pv("auto", !0)) : (b.style.width = _.pv(c.width, !0), b.style.height = _.pv(c.height, !0))
        },
        GE = function(a, b) {
            var c = b.Dc,
                d = b.content,
                e = b.Sb,
                f = b.size,
                g = void 0 === b.Tb ? "3rd party ad content" : b.Tb,
                h = b.yc;
            b = b.Wc;
            var k = {
                shared: {
                    sf_ver: a.U,
                    ck_on: by() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.U + ";" + d.length + ";" + d;
            k = new mE(a.I, a.Y, a.T, a.Z, new kE(k), a.B, a.ha, a.ca);
            var l = {};
            l.uid = k.m;
            l.hostPeerName = k.D;
            l.initialGeometry = hE(k.I);
            var n = k.permissions;
            n = JSON.stringify({
                expandByOverlay: n.wc,
                expandByPush: n.xc,
                readCookie: n.j,
                writeCookie: n.m
            });
            l = (l.permissions = n, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.C, l.isDifferentSourceWindow = k.Ub, l.goog_safeframe_hlt = zz(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k = JSON.stringify(l);
            d += k;
            a.fa && f instanceof _.Jh && (k = _.xu(_.qu(a.l)), l = _.xu(_.qu(a.l)).location.protocol + a.K, jz || Gj(k.document, kz), jz++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + jz,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.B && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.xu(_.qu(a.l)), f = a.ja, d = a.K, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.U + "/html/container.html" + k), (k = wE(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.fa && (k = Ku(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.I, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.ia && (e.sandbox = a.ia);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, tu(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ea(c, e), h = _.Dd("IFRAME"), tu(h, c), a.j = h);
            a.B && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    aa = IE.prototype;
    aa.ld = function() {
        _.eb(window, "resize", this.wa);
        _.eb(window, "scroll", this.wa)
    };
    aa.hd = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !yi(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new oE(b.uid, b.version, b.sentinel);
            if (this.I !== c.m || this.U !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.H) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    aa.qd = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !yi(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.I !== (new pE(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).m) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    aa.td = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !yi(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new qE(b.uid, b.description, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d;
            null == (d = this.H) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.H) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    aa.cd = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.O) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !yi(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new rE(b.uid, new _.cv(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            if (!(0 <= c.D.top && 0 <= c.D.left && 0 <= c.D.bottom && 0 <= c.D.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.Z.xc || !c.push && this.Z.wc) {
                var e = c.D,
                    f = c.push,
                    g = this.C = iE(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) zE(this.D, h, "overflowX", "visible", "important"), zE(this.D, h, "overflowY", "visible", "important");
                    var k = fv(new ev(0, 0, this.C.m.getWidth(), this.C.m.getHeight()));
                    _.ka(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    zE(this.D, this.l, "position", "relative");
                    zE(this.D, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        zE(this.D, this.l, "width", l + "px");
                        var n = k.getHeight();
                        zE(this.D, this.l, "height", n + "px")
                    } else zE(this.D, this.j, "zIndex", "10000");
                    var m = k.getWidth();
                    zE(this.D, this.j, "width", m + "px");
                    var p = k.getHeight();
                    zE(this.D, this.j, "height", p + "px");
                    zE(this.D, this.j, "left", k.left + "px");
                    zE(this.D, this.j, "top", k.top + "px");
                    this.O = 2;
                    this.C = iE(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            iD(this.m, "expand_response", (new uE(this.I, a, this.C, c.D, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            var r;
            null == (r = this.H) || r.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    aa.bd = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.O) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !yi(b.uid)) throw Error("Cannot parse JSON message");
            if (this.I !== (new sE(b.uid, b.sentinel)).m) throw Error("Wrong source container");
            AE(this.D);
            this.O = 0;
            this.j && (this.C = iE(this.j));
            iD(this.m, "collapse_response", (new tE(this.I, this.C)).j())
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var HE = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.o) {
            case 0:
                JE(a);
                a.F = window.setTimeout((0, _.Rq)(a.P, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
        }
    };
    IE.prototype.M = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ka(b) || !yi(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new vE(b.uid, b.width, b.height, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.B) d !== this.j.height && (this.j.height = d, HE(this));
            else {
                var e;
                null == (e = this.H) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.H) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    IE.prototype.P = function() {
        if (1 == this.status || 2 == this.status) switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                JE(this), this.F = window.setTimeout((0, _.Rq)(this.P, this), 1E3), this.o = 1
        }
    };
    var JE = function(a) {
            a.C = iE(a.j);
            iD(a.m, "geometry_update", (new tE(a.I, a.C)).j())
        },
        EE = function(a) {
            var b = null;
            a.he && (b = a.he);
            return null == b ? null : b.join(" ")
        },
        KE = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        LE = ["allow-top-navigation"],
        ME = ["allow-same-origin"],
        NE = Nu([].concat(_.Od(KE), _.Od(LE)));
    Nu([].concat(_.Od(KE), _.Od(ME)));
    Nu([].concat(_.Od(KE), _.Od(LE), _.Od(ME)));
    var OE = Q(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        PE = {
            ef: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.cc) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.cc)) throw new RangeError("Invalid subdomain: " + a.cc);
                return a.Of ? Ld("https://" + a.cc + ".safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Ld("https://" + a.cc + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Dh: function(a) {
                return C(OE, a)
            }
        };
    var Ei = function(a, b) {
        try {
            pb(mo(a, b))
        } catch (c) {}
    };
    var QE = function(a) {
        _.R.call(this, a)
    };
    _.P(QE, _.R);
    var RE = [QE, 4, zs, 2, zs, 1, zs, 3, zs, 5, Cs];
    var SE = [.05, .1, .2, .5],
        TE = [0, .5, 1],
        UE = function(a) {
            a = Ef(a);
            if (!a) return -1;
            try {
                var b = pz(a.document);
                var c = new _.Jh(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Jh(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        VE = function(a, b) {
            return 0 >= a || 0 >= b ? [] : _.Nc(SE, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        XE = function(a) {
            this.C = a.G;
            this.D = a.Za;
            this.H = a.tb;
            this.m = null;
            this.I = a.Ia;
            this.j = WE(this);
            this.l = a.If || !1
        };
    XE.prototype.getSlotId = function() {
        return this.m
    };
    var ZE = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        YE(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.I && a.I(c)
                    }
                    a.j && a.j.unobserve(a.D)
                }
                a.m = b;
                a.j.observe(a.D)
            }
        },
        WE = function(a) {
            var b = a.D.offsetWidth * a.D.offsetHeight,
                c = UE(a.C);
            b = [].concat(_.Od(TE), _.Od(VE(c, b)));
            ma(b);
            return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function(d) {
                return $E(a, d)
            }, {
                threshold: b
            }) : new Io(function(d) {
                return $E(a, d)
            }, {
                threshold: b
            })
        },
        $E = function(a, b) {
            try {
                var c = UE(a.C);
                _.br(b, function(d) {
                    a.l && YE(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.I && a.I(d)
            }
        },
        YE = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new QE;
            c = _.A(g, 1, c);
            d = _.A(c, 2, d);
            e = _.A(d, 3, e);
            b = _.A(e, 4, b);
            f = _.A(b, 5, f);
            f = oc(Xe(f, RE), 4);
            hy(a.H, "1", 10, f, void 0, a.m)
        };
    var aF = function(a, b) {
            this.j = a;
            this.m = b
        },
        bF = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = Ru(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var Pi = function(a) {
        _.R.call(this, a)
    };
    _.P(Pi, _.R);
    var Ri = [1, 3];
    var Ud = {
        eh: 0,
        Zg: 1,
        Xg: 2,
        Yg: 3,
        bh: 5,
        ah: 7
    };
    var cF = Q(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Ji = C(cF);
    var dF = function() {
            this.id = "goog_" + mu++
        },
        eF = function(a) {
            _.yv.call(this);
            this.context = a;
            this.o = new w.Map
        };
    _.P(eF, _.yv);
    eF.prototype.D = function() {
        _.yv.prototype.D.call(this);
        this.o.clear()
    };
    var gF = function(a, b, c) {
            if (a.I) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.o.get(d)) ? void 0 : e.add(c)) ? f : new w.Set([c]);
            a.o.set(d, g);
            return function() {
                return void fF(a, b, c)
            }
        },
        hF = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new w.Promise(function(d) {
                var e = gF(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        fF = function(a, b, c) {
            var d;
            return !(null == (d = a.o.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    eF.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, n;
        return _.gb(function(m) {
            if (1 == m.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.o.get(e);
                if (null == (g = f) || !g.size) return m.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.B(f);
                n = l.next()
            }
            if (5 != m.j) {
                if (n.done) {
                    m.j = 0;
                    return
                }
                k.hc = n.value;
                return hb(m, 0, 5)
            }
            _.eh(d.context, b, function(p) {
                return function() {
                    d.o.has(e) && f.has(p.hc) && p.hc(h)
                }
            }(k), !0);
            k = {
                hc: k.hc
            };
            n = l.next();
            m.j = 2
        })
    };
    var iF = new dF,
        jF = new dF,
        Co = new dF,
        kF = new dF,
        Fo = new dF,
        lF = new dF,
        mF = new dF,
        so = new dF,
        nF = new dF,
        oF = new dF;
    var pF = function() {
        this.data = void 0;
        this.status = 0;
        this.j = []
    };
    pF.prototype.Ac = function() {
        return this.j
    };
    var qF, uF, xF, km, yF, tF, sF, rF, zF;
    qF = function() {
        this.j = new w.Map;
        this.l = 0;
        this.m = new w.Map;
        this.tc = null;
        this.C = this.I = this.o = this.D = 0;
        this.H = new pF
    };
    uF = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            pb: !0,
            od: "",
            ub: "",
            ee: 0,
            Sd: 0,
            md: [],
            nd: [],
            hb: !1
        }), _.Jm(b, function() {
            a.j.delete(b);
            rF(a, b)
        }), gF(b, jF, function(c) {
            c = c.detail;
            var d = (0, D.J)(a.j.get(b));
            d.od = y(c, 33) || "";
            d.hb = !0;
            sF(a, b, function() {
                return void(d.od = "")
            });
            tF(a, b, function() {
                return void(d.hb = !1)
            })
        }))
    };
    _.Do = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.pb) ? d : !1
    };
    _.vF = function(a, b) {
        if (a = a.j.get(b)) a.pb = !1
    };
    _.wF = function(a, b) {
        if (a = a.j.get(b)) a.pb = !0
    };
    xF = function(a, b) {
        if (!b.length) return [];
        var c = Mg(b[0].getAdUnitPath());
        b.every(function(g) {
            return Mg(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.B(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.B(e.value);
            e = f.next().value;
            (f = f.next().value.od) && Mg(e.getAdUnitPath()) === c && !_.t(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    km = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ub) ? d : ""
    };
    yF = function(a, b) {
        return (a = a.j.get(b)) ? a.ee - 1 : 0
    };
    tF = function(a, b, c) {
        (a = a.j.get(b)) && a.md.push(c)
    };
    sF = function(a, b, c) {
        (a = a.j.get(b)) && a.nd.push(c)
    };
    rF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.nd.slice(), a.nd.length = 0, a = _.B(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    zF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.md.slice(), a.md.length = 0, a = _.B(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    qF.prototype.hb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.hb) ? c : !1
    };
    var AF = function(a, b, c) {
        if (a = a.j.get(b)) a.rd = c
    };
    var BF = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Y = function(a, b, c) {
        az.call(this, b, c);
        this.context = a
    };
    _.P(Y, az);
    Y.prototype.U = function(a) {
        bh(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var CF = function(a, b, c, d, e) {
        var f = null,
            g = _.Yg(a.context, b, e);
        _.eb(c, d, g) && (f = function() {
            return _.Sd(c, d, g)
        }, _.Jm(a, f));
        return f
    };
    var DF = /(<head(\s+[^>]*)?>)/i,
        gp = function(a, b, c, d, e) {
            Y.call(this, a, 665);
            this.A = V(this);
            this.l = W(this, b);
            this.B = X(this, c);
            this.F = W(this, d);
            this.o = W(this, e)
        };
    _.P(gp, Y);
    gp.prototype.j = function() {
        var a;
        0 === this.l.value.kind && null != (a = this.B.value) && y(a, 1) ? (a = this.l.value.Ka, this.o.value || Ia() || (a = a.replace(DF, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.F.value && !this.o.value && (a = a.replace(DF, '$1<meta name="referrer" content="origin">')), this.A.j({
            kind: 0,
            Ka: a
        })) : this.A.j(this.l.value)
    };
    var Kp = function(a, b, c, d, e, f, g, h) {
        Y.call(this, a, 718);
        this.B = X(this, c);
        this.l = X(this, d);
        dz(this, e);
        this.F = W(this, f);
        this.o = W(this, g);
        this.M = W(this, h);
        this.K = hF(b, nF)
    };
    _.P(Kp, Y);
    Kp.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.gb(function(e) {
            if (1 == e.j) {
                var f = !a.M.value;
                if (null == a.l.value || "height" !== a.B.value || f) return e.return();
                b = a.F.value;
                c = a.o.value;
                EF(c, !1);
                _.jv(c, "min-width", "100%");
                _.jv(b, "min-width", "100%");
                return hb(e, a.K, 2)
            }
            if (a.I) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            EF(c, !0);
            e.j = 0
        })
    };
    var EF = function(a, b) {
        _.jv(a, "visibility", b ? "visible" : "hidden")
    };
    var fj = new w.Map,
        ej = new w.Map;
    var hj = function(a, b) {
        this.push = J(a, 76, b.push.bind(b))
    };
    var jj = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    jj.prototype.getMessageId = function() {
        return this.messageId
    };
    jj.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var FF = N(2),
        GF = N(3),
        HF = N(4),
        IF = N(5),
        JF = N(6),
        KF = N(12),
        LF = N(14),
        MF = N(16),
        NF = N(19),
        OF = N(20),
        an = N(23),
        bn = N(26),
        PF = N(28),
        QF = N(149),
        RF = N(30),
        SF = N(31),
        TF = N(34),
        UF = N(35),
        VF = N(36),
        Nn = N(38),
        WF = N(40),
        XF = N(48),
        YF = N(50),
        ZF = N(60),
        $F = N(63),
        aG = N(64),
        bG = N(66),
        cG = N(68),
        dG = N(69),
        eG = N(70),
        fG = N(71),
        gG = N(78),
        hG = N(80),
        iG = N(82),
        jG = N(84),
        kG = N(85),
        lG = N(87),
        Rj = N(88),
        mG = N(92),
        nG = N(93),
        oG = N(99),
        pG = N(103),
        qG = N(104),
        rG = N(105),
        sG = N(106),
        tG = N(107),
        uG = N(108),
        vG = N(113),
        wG = N(114),
        xG = N(115),
        yG = N(117),
        zG = N(118),
        AG = N(119),
        lk = N(121),
        BG = N(122),
        CG = N(123),
        Zn = N(125),
        DG = N(126),
        EG = N(127),
        Gn = N(144),
        tn = N(129),
        vn = N(132),
        FG = N(134),
        GG = N(135),
        HG = N(136),
        IG = N(137),
        JG = N(138),
        KG = N(139),
        LG = N(140),
        oo = N(142),
        MG = N(143),
        NG = N(145),
        OG = N(147),
        Tn = N(148);
    var PG = function(a, b, c) {
        var d = this;
        this.addEventListener = J(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, lj("Service.addEventListener", [e, f])), d;
            var g = mj(e);
            if (!g) return O(b, nG(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = J(a, 904, function(e, f) {
            var g = mj(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : O(b, lj("Service.removeEventListener", [e, f]))
        });
        this.getSlots = J(a, 573, function() {
            return c.j.map(function(e) {
                return (0, D.J)(e.j)
            })
        });
        this.getSlotIdMap = J(a, 574, function() {
            for (var e = {}, f = _.B(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = J(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = J(a, 575, function() {
            return c.getName()
        })
    };
    var nj = function(a, b, c) {
        PG.call(this, a, b, c);
        this.notifyUnfilledSlots = J(a, 69, function(d) {
            c.pb && QG(c, RG(c, d))
        });
        this.refreshAllSlots = J(a, 60, function() {
            c.pb && QG(c)
        });
        this.setVideoSession = J(a, 61, function(d, e, f) {
            c.M = e;
            c.Z = f;
            "number" === typeof d && (e = $h().j, _.A(e, 29, d))
        });
        this.getDisplayAdsCorrelator = J(a, 62, function(d) {
            return SG(c, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = J(a, 63, function() {
            var d = $h().j;
            d = y(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = J(a, 64, function(d) {
            var e = _.t(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            return !!e && TG(c, e)
        });
        this.onImplementationLoaded = J(a, 65, function() {
            c.C.info(XF("GPT CompanionAds"))
        });
        this.slotRenderEnded = J(a, 67, function(d, e, f) {
            var g = _.t(c.j, "find").call(c.j, function(h) {
                return h.j === d
            });
            return g && UG(c, g, e, f)
        });
        this.setRefreshUnfilledSlots = J(a, 59, function(d) {
            return c.setRefreshUnfilledSlots(d)
        })
    };
    _.P(nj, PG);
    var pj = function(a, b, c) {
        PG.call(this, a, b, c);
        this.setContent = J(a, 72, function(d) {
            var e = _.t(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            O(b, Gn(), e)
        })
    };
    _.P(pj, PG);
    var VG = Q(["https://console.googletagservices.com/pubconsole/loader.js"]),
        Hj = C(VG),
        Kj, Jj = !1,
        Cj = !1,
        Ej = !1;
    var Kn = function(a, b) {
        this.getAllEvents = J(a, 563, function() {
            return Cj ? WG(b).slice() : []
        });
        this.getEventsBySlot = J(a, 565, function(c) {
            return Cj ? XG(b, c).slice() : []
        });
        this.getEventsByLevel = J(a, 566, function(c) {
            return Cj ? YG(b, c).slice() : []
        })
    };
    var Uj = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = $h().j,
            h = (0, D.J)(Mm($h(), f.getDomId()));
        this.set = J(a, 83, function(k, l) {
            "page_url" === k && l && (k = [Oj(Pj(new Qj, k), [String(l)])], Sc(h, 3, k));
            return e
        });
        this.get = J(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, n;
            return null != (n = null == (l = (E = (0, D.J)(h.ua()), _.t(E, "find")).call(E, function(m) {
                return Nj(m) === k
            })) ? void 0 : Xk(l, 2)[0]) ? n : null
        });
        this.setClickUrl = J(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : O(b, lj("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = J(a, 81, function(k, l) {
            Sj(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = J(a, 85, function(k) {
            Tj(f, h, k, b);
            return e
        });
        this.display = J(a, 78, function() {
            ZG(d, f, Mh(g, $h().m))
        });
        this.setTagForChildDirectedTreatment = J(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = cE(g) || new $D;
                l.setTagForChildDirectedTreatment(k);
                _.Sg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = J(a, 567, function(k) {
            "boolean" === typeof k ? _.A(h, 12, k) : O(b, lj("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = J(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = cE(g) || new $D;
                l.setTagForUnderAgeOfConsent(k);
                _.Sg(g, 25, l)
            }
            return e
        })
    };
    var sl = function(a, b) {
        this.push = J(a, 932, function(c) {
            b.push(c)
        })
    };
    var jn = {
        Wg: 0,
        Tg: 1,
        Ug: 2,
        Vg: 3
    };
    var Xj = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        Zj = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        Yj = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var uk = function(a) {
            var b = this;
            a = void 0 === a ? $h().j : a;
            this.C = "";
            this.j = this.m = null;
            this.l = this.H = this.I = !1;
            this.D = function() {
                return !1
            };
            var c = {},
                d = {},
                e = {};
            this.o = (e[ly] = (c[13] = function() {
                return bb.apply(0, arguments).some(function(f) {
                    return 0 == b.C.lastIndexOf(f, 0)
                })
            }, c[12] = function() {
                return !!F(a, 6)
            }, c[15] = function(f) {
                return b.D(f)
            }, c[48] = function() {
                return !!b.m
            }, c[51] = function() {
                return b.I
            }, c[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (f) {
                    return !1
                }
            }, c[67] = function() {
                return b.H
            }, c[68] = function() {
                return b.l
            }, c), e[my] = (d[8] = function(f) {
                var g;
                return null != (g = ke(b.m, Number(f))) ? g : void 0
            }, d[10] = function(f) {
                return b.j ? zh(f + b.j) % 1E3 : void 0
            }, d), e)
        },
        $G = function(a, b) {
            b && !a.j && (a.j = _.t(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var yk = function(a, b, c) {
        eF.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.P(yk, eF);
    yk.prototype.getSlotId = function() {
        return this.slotId
    };
    var aH = "",
        ek = null,
        kk = _.Zq(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var Wd = function(a, b, c, d) {
        eF.call(this, a);
        this.adUnitPath = b;
        this.Za = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.P(Wd, eF);
    aa = Wd.prototype;
    aa.getId = function() {
        return this.id
    };
    aa.getAdUnitPath = function() {
        return this.adUnitPath
    };
    aa.getName = function() {
        return this.adUnitPath
    };
    aa.toString = function() {
        return this.getId()
    };
    aa.getDomId = function() {
        return this.Za
    };
    var bH = function(a, b) {
        a.j = b
    };
    var cH = new w.WeakMap,
        dH = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var qk = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/;
    (function(a, b) {
        b = void 0 === b ? dH : b;
        var c = la(a),
            d = function(e) {
                e = _.B(e);
                e.next();
                e = qq(e);
                return b(c, e)
            };
        return function() {
            var e = bb.apply(0, arguments),
                f = this || _.q,
                g = cH.get(f);
            g || (g = {}, cH.set(f, g));
            f = g;
            g = [this].concat(_.Od(e));
            e = d ? d(g) : g;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var h = _.B(g);
                g = h.next().value;
                h = qq(h);
                g = a.apply(g, h);
                f = f[e] = g
            }
            return f
        }
    })(function(a) {
        return (null == a ? 0 : a.src) ? qk.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
    });
    var eH = _.Zq(function() {
            return void Vu("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        fH = _.Zq(function() {
            return void Vu("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        gH = _.Zq(function() {
            return void Vu("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        hH = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    eH();
                    return !0
                },
                set: function() {
                    eH()
                },
                configurable: !0
            })
        },
        Ak = function(a, b, c, d) {
            PG.call(this, a, b, c);
            var e = this,
                f = $h().j,
                g = $h().m,
                h = !1;
            this.setTargeting = J(a, 1, function(k, l) {
                var n = null;
                "string" === typeof l ? n = [l] : Array.isArray(l) ? n = l : ra(l) && (n = _.t(Array, "from").call(Array, l));
                var m = "string" === typeof k && !Lj(k);
                n = n && xa(n);
                var p, r = null != (p = null == n ? void 0 : n.every(function(u) {
                    return "string" === typeof u
                })) ? p : !1;
                if (!m || !r) return O(b, lj("PubAdsService.setTargeting", [k, l])), e;
                l = n;
                m = (E = Wc(f, Qj, 2), _.t(E, "find")).call(E, function(u) {
                    return Nj(u) === k
                });
                if ("gpt-beta" === k) {
                    if (c.m) return O(b, sG(l.join())), e;
                    if (m) return O(b, tG(l.join())), e;
                    l = wk(l)
                }
                m ? Oj(m, l) : (m = Oj(Pj(new Qj, k), l), bf(f, 2, Qj, m));
                b.info(Rj(k, l.join(), c.getName()));
                return e
            });
            this.clearTargeting = J(a, 2, function(k) {
                if (void 0 === k) return Sc(f, 2), b.info(qG(c.getName())), e;
                if ("gpt-beta" === k) return O(b, uG(k)), e;
                var l = Wc(f, Qj, 2),
                    n = _.t(l, "findIndex").call(l, function(m) {
                        return Nj(m) === k
                    });
                if (0 > n) return O(b, jG(k, c.getName())), e;
                l.splice(n, 1);
                Sc(f, 2, l);
                b.info(iG(k, c.getName()));
                return e
            });
            this.getTargeting = J(a, 38, function(k) {
                if ("string" !== typeof k) return O(b, lj("PubAdsService.getTargeting", [k])), [];
                var l = (E = Wc(f, Qj, 2), _.t(E, "find")).call(E, function(n) {
                    return Nj(n) === k
                });
                return l ? Xk(l, 2).slice() : []
            });
            this.getTargetingKeys = J(a, 39, function() {
                return Wc(f, Qj, 2).map(function(k) {
                    return (0, D.J)(Nj(k))
                })
            });
            this.setCategoryExclusion = J(a, 3, function(k) {
                if ("string" !== typeof k || Lj(k)) return O(b, lj("PubAdsService.setCategoryExclusion", [k])), e;
                (E = Xk(f, 3), _.t(E, "includes")).call(E, k) || bs(f, 3, k);
                b.info(kG(k));
                return e
            });
            this.clearCategoryExclusions = J(a, 4, function() {
                _.A(f, 3, Dc);
                b.info(lG());
                return e
            });
            this.disableInitialLoad = J(a, 5, function() {
                _.A(f, 4, !0);
                h || (h = !0, hH())
            });
            this.enableSingleRequest = J(a, 6, function() {
                if (c.m && !F(f, 6)) return O(b, ZF("PubAdsService.enableSingleRequest")), !1;
                b.info($F("single request"));
                _.A(f, 6, !0);
                return !0
            });
            this.enableAsyncRendering = J(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = J(a, 8, function() {
                Vu("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = J(a, 485, function(k) {
                var l = new jp;
                _.A(l, 1, 800);
                _.A(l, 2, 400);
                _.A(l, 3, 3);
                if (_.ka(k)) {
                    var n = k.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.A(l, 1, n) : -1 === n && Ge(l, 1));
                    n = k.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.A(l, 2, n) : -1 === n && Ge(l, 2));
                    k = k.mobileScaling;
                    "number" === typeof k && (0 < k ? _.A(l, 3, k) : -1 === k && _.A(l, 3, 1))
                }
                _.Sg(f, 5, l)
            });
            this.setCentering = J(a, 9, function(k) {
                k = !!k;
                b.info(aG("centering", String(k)));
                _.A(f, 15, k)
            });
            this.definePassback = J(a, 10, function(k, l) {
                return (k = zk(a, b, c, k, l, d)) && k.Zd
            });
            this.refresh = J(a, 11, function() {
                var k = bb.apply(0, arguments),
                    l = _.B(k),
                    n = l.next().value;
                l = l.next().value;
                l = void 0 === l ? {} : l;
                n && !Array.isArray(n) || !_.ka(l) || l.changeCorrelator && "boolean" !== typeof l.changeCorrelator ? O(b, lj("PubAdsService.refresh", k)) : (l && !1 === l.changeCorrelator || f.setCorrelator(Zu()), n = n ? tk(n, c) : c.j, c.refresh(Mh(f, g), n) || O(b, lj("PubAdsService.refresh", k)))
            });
            this.enableVideoAds = J(a, 12, function() {
                _.A(f, 21, !0);
                iH(c, f)
            });
            this.setVideoContent = J(a, 13, function(k, l) {
                jH(c, k, l, f)
            });
            this.collapseEmptyDivs = J(a, 14, function(k) {
                k = void 0 === k ? !1 : k;
                _.A(f, 11, !0);
                k = !!k;
                _.A(f, 10, k);
                b.info(gG(String(k)));
                return !!F(f, 11)
            });
            this.clear = J(a, 15, function(k) {
                if (Array.isArray(k)) return kH(c, f, g, tk(k, c));
                if (void 0 === k) return kH(c, f, g, c.j);
                O(b, lj("PubAdsService.clear", [k]));
                return !1
            });
            this.setLocation = J(a, 16, function(k) {
                if ("string" !== typeof k) return O(b, lj("PubAdsService.setLocation", [k])), e;
                _.A(f, 8, k);
                return e
            });
            this.setCookieOptions = J(a, 17, function() {
                fH();
                return e
            });
            this.setTagForChildDirectedTreatment = J(a, 18, function(k) {
                gH();
                if (1 !== k && 0 !== k) return O(b, BG("PubadsService.setTagForChildDirectedTreatment", mk(k), "0,1")), e;
                var l = cE(f) || new $D;
                l.setTagForChildDirectedTreatment(k);
                _.Sg(f, 25, l);
                return e
            });
            this.clearTagForChildDirectedTreatment = J(a, 19, function() {
                gH();
                var k = cE(f);
                if (!k) return e;
                k.clearTagForChildDirectedTreatment();
                _.Sg(f, 25, k);
                return e
            });
            this.setPublisherProvidedId = J(a, 20, function(k) {
                k = String(k);
                b.info(aG("PPID", k));
                _.A(f, 16, k);
                return e
            });
            this.set = J(a, 21, function(k, l) {
                if ("string" !== typeof k || !k.length || void 0 === BF()[k] || "string" !== typeof l) return O(b, lj("PubAdsService.set", [k, l])), e;
                var n = (E = f.ua(), _.t(E, "find")).call(E, function(m) {
                    return Nj(m) === k
                });
                n ? Oj(n, [l]) : (n = Pj(new Qj, k), bs(n, 2, l), bf(f, 14, Qj, n));
                b.info(VF(k, String(l), c.getName()));
                return e
            });
            this.get = J(a, 22, function(k) {
                if ("string" !== typeof k) return O(b, lj("PubAdsService.get", [k])), null;
                var l = (E = f.ua(), _.t(E, "find")).call(E, function(n) {
                    return Nj(n) === k
                });
                return (l = l && Xk(l, 2)) ? l[0] : null
            });
            this.getAttributeKeys = J(a, 23, function() {
                return f.ua().map(function(k) {
                    return (0, D.J)(Nj(k))
                })
            });
            this.display = J(a, 24, function(k, l, n, m) {
                return void c.display(k, l, d, n, m)
            });
            this.updateCorrelator = J(a, 25, function() {
                Vu(sk("update"));
                O(b, xG());
                f.setCorrelator(Zu());
                return e
            });
            this.defineOutOfPagePassback = J(a, 35, function(k) {
                k = zk(a, b, c, k, [1, 1], d);
                if (!k) return null;
                _.A(k.Xa, 15, 1);
                return k.Zd
            });
            this.setForceSafeFrame = J(a, 36, function(k) {
                if ("boolean" !== typeof k) return O(b, lj("PubAdsService.setForceSafeFrame", [mk(k)])), e;
                _.A(f, 13, k);
                return e
            });
            this.setSafeFrameConfig = J(a, 37, function(k) {
                var l = nk(b, k);
                if (!l) return O(b, lj("PubAdsService.setSafeFrameConfig", [k])), e;
                _.Sg(f, 18, l);
                return e
            });
            this.setRequestNonPersonalizedAds = J(a, 445, function(k) {
                gH();
                if (0 !== k && 1 !== k) return O(b, BG("PubAdsService.setRequestNonPersonalizedAds", mk(k), "0,1")), e;
                var l = cE(f) || new $D;
                _.A(l, 8, !!k);
                _.Sg(f, 25, l);
                return e
            });
            this.setTagForUnderAgeOfConsent = J(a, 447, function(k) {
                k = void 0 === k ? 2 : k;
                gH();
                if (2 !== k && 0 !== k && 1 !== k) return O(b, BG("PubadsService.setTagForUnderAgeOfConsent", mk(k), "2,0,1")), e;
                var l = cE(f) || new $D;
                l.setTagForUnderAgeOfConsent(k);
                _.Sg(f, 25, l);
                return e
            });
            this.getCorrelator = J(a, 27, function() {
                return String(f.getCorrelator())
            });
            this.getTagSessionCorrelator = J(a, 631, function() {
                return ze(_.q)
            });
            this.getVideoContent = J(a, 30, function() {
                return lH(c, f)
            });
            this.getVersion = J(a, 568, function() {
                return a.mb ? String(a.mb) : a.Ja
            });
            this.forceExperiment = J(a, 569, function(k) {
                return void c.forceExperiment(k)
            });
            this.setCorrelator = J(a, 28, function(k) {
                Vu(sk("set"));
                O(b, wG());
                if (Dh(window)) return e;
                if (!("number" === typeof k && isFinite(k) && 0 == k % 1 && 0 < k)) return O(b, lj("PubadsService.setCorrelator", [mk(k)])), e;
                f.setCorrelator(k);
                _.A(f, 27, !0);
                return e
            });
            this.markAsAmp = J(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = J(a, 571, function() {
                return !!F(f, 6)
            });
            this.setImaContent = J(a, 328, function(k, l) {
                jf(f, 22) ? jH(c, k, l, f) : (_.A(f, 21, !0), iH(c, f), "string" === typeof k && _.A(f, 19, k), "string" === typeof l && _.A(f, 20, l))
            });
            this.getImaContent = J(a, 329, function() {
                return jf(f, 22) ? lH(c, f) : c.m ? {
                    vid: y(f, 19) || "",
                    cmsid: y(f, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = J(a, 572, function() {
                return !!F(f, 4)
            });
            this.setPrivacySettings = J(a, 648, function(k) {
                if (!_.ka(k)) return O(b, lj("PubAdsService.setPrivacySettings", [k])), e;
                var l = k.restrictDataProcessing,
                    n = k.childDirectedTreatment,
                    m = k.underAgeOfConsent,
                    p = k.limitedAds,
                    r = k.nonPersonalizedAds,
                    u = k.userOptedOutOfPersonalization,
                    v = k.trafficSource,
                    x, I = null != (x = cE(f)) ? x : new $D;
                "boolean" === typeof r ? _.A(I, 8, r) : void 0 !== r && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "nonPersonalizedAds", mk(r)));
                "boolean" === typeof u ? _.A(I, 13, u) : void 0 !== u && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "userOptedOutOfPersonalization", mk(u)));
                "boolean" === typeof l ? _.A(I, 1, l) : void 0 !== l && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "restrictDataProcessing", mk(l)));
                "boolean" === typeof p ? (l = rk(), p && !F(I, 9) && a.bc && (r = a.qb, u = Tg(a), x = new tv, x = _.z(x, 1, !0, !1), x = _.z(x, 2, l, !1), u = Vg(u, 11, Wg, x), Qd(r, u)), l ? _.A(I, 9, p) : p && O(b, OG())) : void 0 !== p && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "limitedAds", mk(p)));
                void 0 !== m && (null === m ? I.setTagForUnderAgeOfConsent(2) : !1 === m ? I.setTagForUnderAgeOfConsent(0) : !0 === m ? I.setTagForUnderAgeOfConsent(1) : O(b, lk("PubAdsService.setPrivacySettings", mk(k), "underAgeOfConsent", mk(m))));
                void 0 !== n && (null === n ? I.clearTagForChildDirectedTreatment() : !1 === n ? I.setTagForChildDirectedTreatment(0) : !0 === n ? I.setTagForChildDirectedTreatment(1) : O(b, lk("PubAdsService.setPrivacySettings", mk(k), "childDirectedTreatment", mk(n))));
                void 0 !== v && (null === v ? Ge(I, 10) : (E = _.t(Object, "values").call(Object, Yj), _.t(E, "includes")).call(E, v) ? _.A(I, 10, v) : O(b, lk("PubAdsService.setPrivacySettings", mk(k), "trafficSource", mk(v))));
                _.Sg(f, 25, I);
                return e
            })
        };
    _.P(Ak, PG);
    var xh = function(a) {
        _.R.call(this, a)
    };
    _.P(xh, _.R);
    var Ln = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.Yg(a, 88, function(f, g) {
            var h;
            if (h = Ek(f)) h = Dk(g) || Array.isArray(g) && g.every(Dk);
            h ? d.push([f, g]) : (e.push([f, g]), O(b, lj("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.Yg(a, 89, function() {
            if (e.length) return O(b, TF(mk(e))), null;
            qa(d);
            return d
        })
    };
    var mH = function(a, b) {
        this.getId = J(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = J(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = J(a, 595, function() {
            return b.getName()
        });
        this.toString = J(a, 596, function() {
            return b.toString()
        });
        this.getDomId = J(a, 597, function() {
            return b.getDomId()
        })
    };
    var qh = function(a) {
        _.R.call(this, a, -1, nH)
    };
    _.P(qh, _.R);
    var nH = [2];
    var pH = function(a) {
        _.R.call(this, a, -1, oH)
    };
    _.P(pH, _.R);
    pH.prototype.getAdUnitPath = function() {
        return y(this, 1)
    };
    pH.prototype.getDomId = function() {
        return y(this, 2)
    };
    var qH = function(a, b) {
        _.A(a, 2, b)
    };
    pH.prototype.ua = function() {
        return Wc(this, Qj, 3)
    };
    pH.prototype.getClickUrl = function() {
        return y(this, 7)
    };
    pH.prototype.setClickUrl = function(a) {
        return _.A(this, 7, a)
    };
    var Mj = function(a) {
        return Wc(a, Qj, 9)
    };
    pH.prototype.Sa = function() {
        return Me(this, ik, 13)
    };
    var Dl = function(a) {
            return fe(a, 15, 0)
        },
        rH = function(a) {
            a = Jc(a, y(a, 26), Db(a.ba));
            return null == a ? a : a
        },
        oH = [3, 4, 5, 6, 8, 9, 27];
    var sH = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        tH = function(a, b) {
            a.advertiserId = b
        },
        uH = function(a, b) {
            a.campaignId = b
        },
        vH = function(a, b) {
            a.yieldGroupIds = b
        },
        wH = function(a, b) {
            a.companyIds = b
        };
    var xH = function(a, b) {
        this.width = a;
        this.height = b
    };
    xH.prototype.getWidth = function() {
        return this.width
    };
    xH.prototype.getHeight = function() {
        return this.height
    };
    var Ok = function(a, b, c) {
        var d = this,
            e = (0, D.J)(Mm($h(), c.getDomId())),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Jm(c, function() {
            e = new pH;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        gF(c, Co, function(m) {
            var p = m.detail;
            m = p.Fd;
            p = p.isBackfill;
            m && (f = m, l = p)
        });
        this.set = J(a, 40, function(m, p) {
            if ("string" !== typeof m || "string" !== typeof p || void 0 === BF()[m]) return O(b, lj("Slot.set", [m, p]), c), d;
            var r = (E = e.ua(), _.t(E, "find")).call(E, function(u) {
                return Nj(u) === m
            });
            r ? Oj(r, [p]) : (r = Pj(new Qj, m), bs(r, 2, p), bf(e, 3, Qj, r));
            return d
        });
        this.get = J(a, 41, function(m) {
            if ("string" !== typeof m) return O(b, lj("Slot.get", [m]), c), null;
            var p = (E = e.ua(), _.t(E, "find")).call(E, function(r) {
                return Nj(r) === m
            });
            return (p = p && Xk(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = J(a, 42, function() {
            return e.ua().map(function(m) {
                return (0, D.J)(Nj(m))
            })
        });
        this.addService = J(a, 43, function(m) {
            m = fj.get(m);
            if (!m) return O(b, lj("Slot.addService", [m]), c), d;
            var p = m.getName();
            if ((E = Xk(e, 4), _.t(E, "includes")).call(E, p)) return b.info(KF(p, c.toString()), c), d;
            m.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = J(a, 44, function(m) {
            try {
                var p = e;
                if (!Array.isArray(m)) throw new Mk("Size mapping must be an array");
                var r = m.map(Nk);
                Sc(p, 6, r)
            } catch (u) {
                m = u, bh(a, 44, m), Vu("Incorrect usage of googletag.Slot defineSizeMapping: " + m.message)
            }
            return d
        });
        this.setClickUrl = J(a, 45, function(m) {
            if ("string" !== typeof m) return O(b, lj("Slot.setClickUrl", [m]), c), d;
            e.setClickUrl(m);
            return d
        });
        this.setCategoryExclusion = J(a, 46, function(m) {
            "string" !== typeof m || Lj(m) ? O(b, lj("Slot.setCategoryExclusion", [m]), c) : ((E = Xk(e, 8), _.t(E, "includes")).call(E, m) || bs(e, 8, m), b.info(LF(m), c));
            return d
        });
        this.clearCategoryExclusions = J(a, 47, function() {
            _.A(e, 8, Dc);
            b.info(MF(), c);
            return d
        });
        this.getCategoryExclusions = J(a, 48, function() {
            return Xk(e, 8).slice()
        });
        this.setTargeting = J(a, 49, function(m, p) {
            Sj(c, e, m, p, b);
            return d
        });
        this.updateTargetingFromMap = J(a, 649, function(m) {
            Tj(c, e, m, b);
            return d
        });
        this.clearTargeting = J(a, 50, function(m) {
            if (void 0 === m) return Sc(e, 9), b.info(NF(c.getAdUnitPath()), c), d;
            var p = Mj(e),
                r = _.t(p, "findIndex").call(p, function(u) {
                    return Nj(u) === m
                });
            if (0 > r) return O(b, jG(m, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            Sc(e, 9, p);
            b.info(pG(m, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = J(a, 51, function(m) {
            if ("string" !== typeof m) return O(b, lj("Slot.getTargeting", [m]), c), [];
            var p = (E = Mj(e), _.t(E, "find")).call(E, function(r) {
                return Nj(r) === m
            });
            return p ? Xk(p, 2).slice() : []
        });
        this.getTargetingKeys = J(a, 52, function() {
            return Mj(e).map(function(m) {
                return (0, D.J)(Nj(m))
            })
        });
        this.setCollapseEmptyDiv = J(a, 53, function(m, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof m || "boolean" !== typeof p) return O(b, lj("Slot.setCollapseEmptyDiv", [m, p]), c), d;
            _.A(e, 10, m);
            _.A(e, 11, m && p);
            p && !m && O(b, OF(c.toString()), c);
            return d
        });
        this.getAdUnitPath = J(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = J(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = J(a, 55, function(m) {
            if ("boolean" !== typeof m) return O(b, lj("Slot.setForceSafeFrame", [String(m)]), c), d;
            _.A(e, 12, m);
            return d
        });
        this.setSafeFrameConfig = J(a, 56, function(m) {
            var p = nk(b, m);
            if (!p) return b.error(lj("Slot.setSafeFrameConfig", [m]), c), d;
            _.Sg(e, 13, p);
            return d
        });
        gF(c, jF, function(m) {
            m = m.detail;
            if (F(m, 8)) g = null;
            else {
                g = new sH;
                var p = !!F(m, 9);
                g.isBackfill = p;
                var r = Gc(m, 15, Tb),
                    u = Gc(m, 16, Tb);
                r.length && u.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = u[0], p || (g.creativeId = r[0], g.lineItemId = u[0], (p = Gc(m, 22, Tb)) && p.length && (g.creativeTemplateId = p[0])));
                Gc(m, 17, Tb).length && tH(g, Gc(m, 17, Tb)[0]);
                Gc(m, 18, Tb).length && uH(g, Gc(m, 18, Tb)[0]);
                Gc(m, 19, Tb).length && vH(g, Gc(m, 19, Tb));
                Gc(m, 20, Tb).length && wH(g, Gc(m, 20, Tb));
                m = Gc(m, 45, Hc).map(function(v) {
                    return pc(v)
                });
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = J(a, 355, function() {
            return g
        });
        this.getName = J(a, 170, function() {
            b.error(MG());
            var m = new Dj("slot_get_name");
            mi(m, a);
            Fj(m);
            return c.getAdUnitPath()
        });
        var n = new mH(a, c);
        this.getSlotId = J(a, 579, function() {
            return n
        });
        this.getServices = J(a, 580, function() {
            return Xk(e, 4).map(function(m) {
                return uj(m)
            })
        });
        this.getSizes = J(a, 581, function(m, p) {
            var r, u;
            return null != (u = null == (r = th(e, m, p)) ? void 0 : r.map(function(v) {
                return F(v, 3) ? "fluid" : new xH(v.getWidth(), v.getHeight())
            })) ? u : null
        });
        this.getClickUrl = J(a, 582, function() {
            var m;
            return null != (m = e.getClickUrl()) ? m : ""
        });
        this.getTargetingMap = J(a, 583, function() {
            for (var m = {}, p = _.B(Mj(e)), r = p.next(); !r.done; r = p.next()) r = r.value, Nj(r) && (m[Nj(r)] = Xk(r, 2));
            return m
        });
        this.getOutOfPage = J(a, 584, function(m) {
            return "number" === typeof m ? Dl(e) === m : 0 !== Dl(e)
        });
        this.getCollapseEmptyDiv = J(a, 585, function() {
            return ok(e, 10) ? F(e, 10) : null
        });
        this.getDivStartsCollapsed = J(a, 586, function() {
            return ok(e, 11) ? F(e, 11) : null
        });
        gF(c, kF, function(m) {
            h = m.detail.Ae
        });
        this.getContentUrl = J(a, 587, function() {
            return h()
        });
        this.getFirstLook = J(a, 588, function() {
            Vu("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        gF(c, jF, function(m) {
            var p;
            k = null != (p = m.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = J(a, 591, function() {
            return k
        });
        this.getHtml = J(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = J(a, 1022, function(m) {
            var p = rH(e);
            if (void 0 !== m.componentAuction) {
                m = _.B(m.componentAuction);
                for (var r = m.next(); !r.done; r = m.next()) {
                    var u = r.value;
                    r = u.configKey;
                    u = u.auctionConfig;
                    "string" !== typeof r || Lj(r) || (null === u ? p.delete(r) : u && p.set(r, JSON.stringify(u)))
                }
            }
        })
    };
    var yH = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 975);
        this.o = b;
        this.l = c;
        this.B = d;
        this.pbjs = e;
        this.F = f;
        this.requestBidsConfig = g;
        this.A = new Xy
    };
    _.P(yH, Y);
    yH.prototype.j = function() {
        Wk(this.F, this.pbjs, this.o, this.l, this.B, this.requestBidsConfig);
        this.A.notify()
    };
    var zH = function(a, b, c) {
        Y.call(this, a, 937, _.xe(sw));
        this.window = c;
        this.o = V(this);
        this.l = V(this);
        this.M = V(this);
        this.K = V(this);
        this.B = V(this);
        this.F = V(this);
        this.P = cz(this, b)
    };
    _.P(zH, Y);
    zH.prototype.j = function() {
        if (this.window.top !== this.window) AH(this);
        else {
            var a = this.P.value;
            if (a) {
                var b = {},
                    c;
                if (null == (c = Me(a, kt, 2)) ? 0 : Yo(c, 2)) b["*"] = {
                    Gc: !0
                };
                c = new w.Set;
                for (var d = _.B(Wc(a, jt, 1)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = _.B([Ym(e, 2), e.Ra()].filter(function(r) {
                            return !!r
                        })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                        Gc: Yo(e, 3)
                    };
                    e = _.B(Vm(e, 4));
                    for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
                }
                this.o.j(b);
                this.l.j([].concat(_.Od(c)));
                var h, k;
                b = null == (h = Me(a, kt, 2)) ? void 0 : null == (k = Me(h, bt, 1)) ? void 0 : Wc(k, dt, 1);
                Py(this.M, (null == b ? 0 : b.length) ? b : null);
                var l;
                this.B.j(!(null == (l = Me(a, kt, 2)) || !Yo(l, 4)));
                var n;
                this.F.j(!(null == (n = Me(a, kt, 2)) || !Yo(n, 5)));
                var m, p;
                a = null == (m = Me(a, kt, 2)) ? void 0 : null == (p = Me(m, bt, 3)) ? void 0 : Wc(p, dt, 1);
                Py(this.K, (null == a ? 0 : a.length) ? a : null)
            } else AH(this)
        }
    };
    var AH = function(a) {
        a.o.j({});
        a.l.j([]);
        Qy(a.M);
        a.B.j(!1);
        a.F.j(!1);
        Qy(a.K)
    };
    zH.prototype.H = function(a) {
        this.m(a)
    };
    zH.prototype.m = function() {
        AH(this)
    };
    var BH = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        CH = function(a, b, c, d, e, f, g, h, k, l, n, m) {
            Y.call(this, a, 920);
            this.K = b;
            this.R = c;
            this.nb = d;
            this.B = V(this);
            this.F = V(this);
            this.l = V(this);
            this.M = [];
            this.o = new w.Map;
            this.ca = W(this, e);
            this.Y = new Wy(f);
            this.la = W(this, g);
            this.T = X(this, h);
            this.P = W(this, k);
            this.ma = W(this, l);
            this.ha = X(this, n);
            this.oa = X(this, m)
        };
    _.P(CH, Y);
    CH.prototype.j = function() {
        if (DH(this)) {
            var a = this.Y.value;
            a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.K.error(DG()), EH(this)) : (a = FH(this, a)) ? (this.l.j(a), this.B.j(this.o), this.F.j(this.M)) : EH(this) : EH(this)
        } else EH(this)
    };
    CH.prototype.H = function(a) {
        this.m(a)
    };
    CH.prototype.m = function(a) {
        this.K.error(EG(a.message));
        EH(this)
    };
    var EH = function(a) {
            a.l.j([]);
            Qy(a.B);
            Qy(a.F)
        },
        FH = function(a, b) {
            var c = (0, D.J)(b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.ca.value.map(function(g) {
                    var h = new Ys,
                        k = function(wa) {
                            return wa === g.getDomId() || wa === g.getAdUnitPath()
                        },
                        l, n = null != (l = GH.get(g)) ? l : 0,
                        m;
                    l = null != (m = d.filter(function(wa) {
                        var Da, lb, Kb;
                        return Number(null == (Da = wa.args) ? void 0 : Da.timestamp) > n && (null == (lb = wa.args) ? void 0 : null == (Kb = lb.adUnitCodes) ? void 0 : _.t(Kb, "find").call(Kb, k))
                    })) ? m : [];
                    if (!l.length) return a.M.push(g), h;
                    var p;
                    m = null == (p = l.reduce(function(wa, Da) {
                        return Number(Da.args.timestamp) > Number(wa.args.timestamp) ? Da : wa
                    })) ? void 0 : p.args;
                    if (!m) return h;
                    var r = void 0 === m.bidderRequests ? [] : m.bidderRequests;
                    p = void 0 === m.bidsReceived ? [] : m.bidsReceived;
                    var u = m.auctionId;
                    m = m.timestamp;
                    if (!u || null == m || !r.length) return h;
                    GH.has(g) || _.Jm(g, function() {
                        return GH.delete(g)
                    });
                    GH.set(g, m);
                    m = Zs(h);
                    Math.random() < _.xe(Mv) && b.version && BH.test(b.version) && _.A(m, 6, b.version);
                    _.Sg(m, 9, a.ha.value);
                    l = new w.Map;
                    var v = Rh(function() {
                            return ql(c, u)
                        }),
                        x = Mj(a.R[g.getDomId()]),
                        I = {};
                    r = _.B(r);
                    for (var K = r.next(); !K.done; I = {
                            Qc: I.Qc,
                            Sc: I.Sc
                        }, K = r.next()) {
                        var M = K.value;
                        I.Qc = M.bidderCode;
                        var S = M.bids;
                        K = M.timeout;
                        I.Sc = M.src;
                        M = M.auctionStart;
                        var T = {};
                        S = _.B(S);
                        for (var Z = S.next(); !Z.done; T = {
                                Kb: T.Kb
                            }, Z = S.next()) {
                            var ba = Z.value;
                            T.Kb = ba.bidId;
                            var ia = ba.transactionId;
                            Z = ba.adUnitCode;
                            var Xa = ba.getFloor;
                            ba = ba.mediaTypes;
                            if (T.Kb && k(Z)) {
                                e = !0;
                                fl(m, g, Z);
                                ia && (jf(m, 4) || _.A(m, 4, ia), a.o.has(ia) || a.o.set(ia, M));
                                ok(m, 8) || _.A(m, 8, K);
                                var Ba = _.t(p, "find").call(p, function(wa) {
                                    return function(Da) {
                                        return Da.requestId === wa.Kb
                                    }
                                }(T));
                                ia = Zk(m, function(wa) {
                                    return function() {
                                        var Da = bl(new cl, wa.Qc);
                                        switch (wa.Sc) {
                                            case "client":
                                                _.A(Da, 7, 1);
                                                break;
                                            case "s2s":
                                                _.A(Da, 7, 2)
                                        }
                                        return Da
                                    }
                                }(I)());
                                hl(m, ia, Z, a.T.value, a.P.value, a.ma.value, Xa);
                                Ba ? (al(ia, 1), "number" === typeof Ba.timeToRespond && dl(ia, Ba.timeToRespond), Z = Yk(Ba, l, x, ba), $k(ia, Z)) : (Z = v().get(T.Kb)) && !Z.Rd ? dl(al(ia, 2), Math.round(Z.latency)) : dl(al(ia, 3), K)
                            }
                        }
                    }
                    var ua;
                    (null == (ua = b.getConfig) ? 0 : ua.call(b).useBidCache) && el(m, g, u, x, l, b);
                    return h
                });
            return e ? f : []
        },
        DH = function(a) {
            var b = a.la.value,
                c;
            return !!a.oa.value || !(null == (c = b["*"]) || !c.Gc) || a.nb.split(",").some(function(d) {
                var e;
                return !(null == (e = b[d]) || !e.Gc)
            })
        },
        GH = new w.Map;
    var HH, IH = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 1019);
        this.R = g;
        this.l = new Wy(b);
        this.B = new Wy(c);
        this.F = new Wy(d);
        this.o = X(this, e);
        this.K = X(this, f)
    };
    _.P(IH, Y);
    IH.prototype.j = function() {
        JH(this);
        KH(this)
    };
    var KH = function(a) {
            if (!(Math.random() >= _.xe(Kv))) {
                var b = (a.K.value || []).filter(function(k) {
                    return Mj(a.R[k.getDomId()]).some(function(l) {
                        return "hb_pb" === y(l, 1)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Od(new w.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function(k) {
                        return k.code
                    })))) : _.t(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                    c = new Dj("haux");
                    L(c, "ius", b.map(function(k) {
                        return k.getAdUnitPath()
                    }).join("~"));
                    L(c, "dids", b.map(function(k) {
                        return k.getDomId()
                    }).join("~"));
                    L(c, "paucs", h.join("~"));
                    mi(c, a.context);
                    Fj(c, 1)
                }
            }
        },
        JH = function(a) {
            gi("ppc_hrc", function(b) {
                var c;
                null != HH || (HH = (0, D.ta)(null == (c = (E = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.t(E, "find")).call(E, function(g) {
                    return "1" === g.label
                })) ? void 0 : c.value));
                var d = ue("navigationStart", window);
                HH && L(b, "lt", HH);
                var e;
                L(b, "tids", [].concat(_.Od((null == (e = a.o.value) ? void 0 : _.t(e, "keys").call(e)) || [])).join());
                var f;
                L(b, "asts", [].concat(_.Od((null == (f = a.o.value) ? void 0 : _.t(f, "values").call(f)) || [])).map(function(g) {
                    return g - d
                }).join());
                a.B.value ? L(b, "ht", a.B.value - d) : a.F.value && L(b, "ht", 0);
                mi(b, a.context)
            }, a.o.value ? _.xe(Jv) : 0)
        };
    var ap = function(a, b, c, d, e) {
        Y.call(this, a, 982);
        this.A = bz(this);
        this.o = X(this, b);
        this.l = new Wy(c);
        this.F = W(this, d);
        this.B = W(this, e)
    };
    _.P(ap, Y);
    ap.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.B(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    Lb: b.Lb,
                    ic: b.ic
                }, d = c.next()) b.Lb = d.value, b.ic = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new Dj("hbm_brt");
                        mi(g, a.context);
                        L(g, "et", e.Lb);
                        L(g, "sf", a.F.value);
                        L(g, "qqid", a.B.value);
                        var h, k, l;
                        L(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                        Fj(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.Lb, b.ic), _.Jm(this, function(e) {
                return function() {
                    return void _.eh(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.Lb, e.ic))
                    }, !0)
                }
            }(b))
        }
        this.A.notify()
    };
    ap.prototype.m = function() {
        this.A.notify()
    };
    var LH = function(a, b, c, d, e, f) {
        Y.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        dz(this, b);
        dz(this, c)
    };
    _.P(LH, Y);
    LH.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var MH = function(a, b, c, d, e, f) {
        Y.call(this, a, 981);
        this.pbjs = b;
        this.o = c;
        this.l = d;
        this.B = e;
        this.requestBidsConfig = f;
        this.A = new Xy
    };
    _.P(MH, Y);
    MH.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.xe(Nv);
        if (this.B) {
            var d;
            null != (d = this.l) && _.A(d, 1, 1);
            var e;
            null != (e = this.l) && _.A(e, 2, !0)
        } else if (c) {
            var f;
            null != (f = this.l) && _.A(f, 1, 1);
            this.requestBidsConfig.timeout = c;
            var g, h, k;
            a = _.B(null != (k = null == (h = (g = this.pbjs).getConfig) ? void 0 : h.call(g).s2sConfig) ? k : []);
            for (g = a.next(); !g.done; g = a.next()) g.value.timeout = c;
            var l, n;
            null == (n = (l = this.pbjs).setConfig) || n.call(l, {
                bidderTimeout: c
            })
        }
        this.A.notify()
    };
    var NH = function(a, b, c, d, e, f, g, h) {
        _.yv.call(this);
        this.j = a;
        this.C = b;
        this.m = c;
        this.l = d;
        this.o = e;
        this.H = f;
        this.B = g;
        this.pbjs = h
    };
    _.P(NH, _.yv);
    NH.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new nf;
            _.Cm(this, d);
            var e = new MH(this.j, this.pbjs, this.o, this.H, this.B, a),
                f = new yH(this.j, this.C, this.m, this.l, this.pbjs, b, a);
            H(d, e);
            H(d, f);
            H(d, new LH(this.j, f.A, e.A, c, b, a));
            Bf(d)
        }
    };
    var OH = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 951);
        this.G = window;
        this.l = V(this);
        this.o = V(this);
        this.M = W(this, b);
        this.F = X(this, d);
        this.K = W(this, e);
        this.Y = W(this, f);
        this.B = X(this, g);
        this.P = X(this, h);
        this.T = W(this, k);
        dz(this, c)
    };
    _.P(OH, Y);
    OH.prototype.j = function() {
        var a = !!rj().pbjs_hooks;
        this.o.j(a);
        Py(this.l, a ? null : _.se());
        var b, c = null == (b = this.F.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.B.value) ? void 0 : d.size) || _.xe(Nv);
        d = this.M.value;
        var e, f = null != (e = rj().pbjs_hooks) ? e : [];
        e = new NH(this.context, this.F.value, this.K.value, this.Y.value, this.B.value, this.P.value, this.T.value, d);
        _.Cm(this, e);
        f = _.B(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) rj().pbjs_hooks = tl(this.context, e);
        !c && !b || a || rl(d, this.G)
    };
    var PH = {},
        ul = (PH[64] = FG, PH[134217728] = GG, PH[32768] = HG, PH[536870912] = IG, PH[8] = JG, PH[512] = KG, PH[1048576] = LG, PH[4194304] = NG, PH);
    var Gl = function(a) {
        return "22639388115" === Mg(a.getAdUnitPath())
    };
    var QH = null;
    var SH = function(a) {
        _.R.call(this, a, -1, RH)
    };
    _.P(SH, _.R);
    var RH = [1],
        TH = [SH, 1, Gs, vt];
    var VH = function(a) {
        _.R.call(this, a, -1, UH)
    };
    _.P(VH, _.R);
    var UH = [1, 2],
        WH = [VH, 1, Gs, vt, 2, Gs, TH];
    var im = 0,
        XH = new _.Gh(-9, -9);
    var nm = 0;
    var YH = new w.Set([function(a, b) {
            var c = a.da.N.V;
            b.set("pvsid", {
                value: a.ga.context.pvsid
            }).set("correlator", {
                value: y(c, 26)
            })
        }, function(a, b) {
            a = a.oe;
            var c = a.vb,
                d = a.wb;
            "wbn" === a.Yb && b.set("wbsu", {
                value: c
            }).set("callback", {
                value: d
            })
        }, function(a, b) {
            var c = a.da.N.V,
                d = a.qf;
            a = d.te;
            var e = d.xf;
            d = d.ff;
            _.G(lw) || (c = 0 === fe(c, 24, 0), b.set("adsid", {
                value: c ? a : null
            }).set("pucrd", {
                value: c ? e : null
            }).set("jar", {
                value: d
            }))
        }, function(a, b) {
            var c = a.da.N.V,
                d = a.Tf;
            a = d.Hb;
            d = d.Gb;
            var e = F(c, 21);
            b = b.set("hxva", {
                value: e ? 1 : null
            }).set("cmsid", {
                value: e ? y(c, 23) : null
            }).set("vid", {
                value: e ? y(c, 22) : null
            }).set("pod", {
                value: d
            }).set("ppos", {
                value: a
            });
            c = y(c, 29);
            b.set.call(b, "scor", {
                value: null == c ? void 0 : c
            })
        }, function(a, b) {
            var c = a.da,
                d = c.W,
                e = c.N.R;
            c = a.wf;
            var f = c.Se,
                g = c.Oe;
            b.set("eid", {
                value: a.ga.ed
            }).set("debug_experiment_id", {
                value: dy().split(",")
            }).set("expflags", {
                value: _.Pg(253) ? bk(Vv) || null : null
            }).set("pied", {
                value: function() {
                    if (!_.G(yw)) return null;
                    var h = new VH,
                        k = !1,
                        l = !1;
                    f && (k = !0, bf(h, 1, Nm, f));
                    var n = d.map(function(p) {
                        var r = new SH,
                            u;
                        p = null == (u = e[p.getDomId()]) ? void 0 : Wc(u, Nm, 27);
                        if (null == p || !p.length) return r;
                        l = k = !0;
                        u = _.B(p);
                        for (p = u.next(); !p.done; p = u.next()) bf(r, 1, Nm, p.value);
                        return r
                    });
                    l && Sc(h, 2, n);
                    n = _.B(g);
                    for (var m = n.next(); !m.done; m = n.next()) bf(h, 1, Nm, m.value), k = !0;
                    return k ? oc(Xe(h, WH), 3) : null
                }()
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.context;
            c = c.Ea;
            b.set("output", {
                value: a.oe.Yb
            }).set("gdfp_req", {
                value: 1
            }).set("vrg", {
                value: d.mb ? String(d.mb) : d.Ja
            }).set("ptt", {
                value: 17
            }).set("impl", {
                value: c ? "fifs" : "fif"
            })
        }, function(a, b) {
            a = a.da.N.V;
            b.set("co", {
                value: 0 !== fe(a, 24, 0) ? fe(a, 24, 0) : null,
                options: {
                    Ba: !0
                }
            })
        }, function(a, b) {
            var c = a.ga.aa;
            a = cE(a.da.N.V) || new $D;
            var d = fe(a, 6, 2);
            b.set("rdp", {
                value: F(a, 1) ? "1" : null
            }).set("ltd", {
                value: F(a, 9) ? "1" : null
            }).set("gdpr_consent", {
                value: ks(c, 2)
            }).set("gdpr", {
                value: ok(c, 3) ? F(c, 3) ? "1" : "0" : null,
                options: {
                    Ba: !0
                }
            }).set("addtl_consent", {
                value: ks(c, 4)
            }).set("tcfe", {
                value: is(c, 7)
            }).set("us_privacy", {
                value: ks(c, 1)
            }).set("npa", {
                value: F(c, 6) || F(a, 8) ? 1 : null
            }).set("puo", {
                value: _.G(xw) && F(a, 13) ? 1 : null
            }).set("tfua", {
                value: 2 !== d ? d : null,
                options: {
                    Ba: !0
                }
            }).set("tfcd", {
                value: ok(a, 5) ? y(a, 5) : null,
                options: {
                    Ba: !0
                }
            }).set("trt", {
                value: ok(a, 10) ? y(a, 10) : null,
                options: {
                    Ba: !0
                }
            }).set("tad", {
                value: ok(c, 8) ? F(c, 8) ? "1" : "0" : null,
                options: {
                    Ba: !0
                }
            })
        }, function(a, b) {
            var c = a.da,
                d = c.N,
                e = c.W,
                f = c.jd;
            c = a.ga;
            var g = c.G;
            a = c.L;
            c = c.Ea;
            var h = e.map(function(n) {
                    return d.R[n.getDomId()]
                }),
                k = [],
                l = e.map(function(n) {
                    return n.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                        if (!m) return "";
                        var p = _.t(k, "findIndex").call(k, function(r) {
                            return r === m
                        });
                        return 0 <= p ? p : k.push(m) - 1
                    }).join("/")
                });
            b.set("iu_parts", {
                value: k
            }).set("enc_prev_ius", {
                value: l
            }).set("prev_iu_szs", {
                value: h.map(function(n) {
                    return yh(n)
                })
            }).set("fluid", {
                value: function() {
                    var n = !1,
                        m = h.map(function(p) {
                            p = (E = vh(p), _.t(E, "includes")).call(E, "fluid");
                            n || (n = p);
                            return p ? "height" : "0"
                        });
                    return n ? m : null
                }()
            }).set("ifi", {
                value: function() {
                    var n = ni(g);
                    if (!f) {
                        n += 1;
                        var m = g,
                            p = e.length;
                        p = void 0 === p ? 1 : p;
                        m = hv(Kd(m)) || m;
                        m.google_unique_id = (m.google_unique_id || 0) + p
                    }
                    return n
                }()
            }).set("adks", {
                value: mm(e, a, c, d)
            }).set("didk", {
                value: _.G(Gw) ? Sl(e, function(n) {
                    return zh(n.getDomId())
                }, {
                    pa: "~"
                }) : null
            })
        }, function(a, b) {
            var c = a.da;
            a = c.W;
            c = c.N;
            var d = c.V,
                e = c.R;
            b.set("sfv", {
                value: aH ? aH : aH = dk()
            }).set("fsfs", {
                value: Sl(a, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : js(f, 12)) ? g : F(d, 13))
                }, {
                    Pb: 0
                })
            }).set("fsbs", {
                value: Sl(a, function(f) {
                    f = e[f.getDomId()].Sa();
                    var g = d.Sa(),
                        h;
                    return (null != (h = null == f ? void 0 : js(f, 3)) ? h : null == g ? 0 : F(g, 3)) ? 1 : 0
                }, {
                    Pb: 0
                })
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.L,
                e = c.G;
            a = a.da;
            c = a.W;
            var f = a.jd;
            b.set("ris", {
                value: Sl(c, function(g) {
                    var h, k;
                    g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.Sd) ? k : 0;
                    h = _.te(e);
                    return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
                }, {
                    pa: "~"
                })
            }).set("rcs", {
                value: Sl(c, function(g) {
                    if (!f) {
                        var h = void 0 === h ? _.q : h;
                        var k = d.j.get(g);
                        k && (k.Sd = _.te(h) || 0, k.ee++)
                    }
                    return yF(d, g)
                }, {
                    Pb: 0
                })
            })
        }, function(a, b) {
            var c = a.da;
            a = a.ga.Ea;
            c = c.N.R[c.W[0].getDomId()];
            b.set("click", {
                value: !a && c.getClickUrl() ? y(c, 7) : null
            })
        }, function(a, b, c) {
            var d = a.da,
                e = d.W,
                f = d.N.R;
            a = a.ga;
            var g = a.aa,
                h = a.G;
            c = void 0 === c ? function(k, l) {
                return ne(k, l)
            } : c;
            a = e.map(function(k) {
                return f[k.getDomId()]
            });
            b.set("ists", {
                value: Rl(a, function(k) {
                    return 0 !== Dl(k)
                }) || null
            }).set("fas", {
                value: Sl(a, function(k) {
                    return Jl(Dl(k))
                }, {
                    Pb: 0
                })
            }).set("itsi", {
                value: e.some(function(k) {
                    var l;
                    return !Gl(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : Dl(l))
                }) ? function() {
                    var k = c(g, h);
                    if (!k) return 1;
                    var l;
                    k = Math.max.apply(Math, _.Od(null != (l = _.Bl((0, D.J)(k), 604800)) ? l : []));
                    return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
                }() : null
            })
        }, function(a, b) {
            a = a.da;
            var c = a.N.R;
            a = a.W.map(function(d) {
                return c[d.getDomId()]
            });
            b.set("rbvs", {
                value: Rl(a, function(d) {
                    return 4 === Dl(d)
                }) || null
            })
        }, function(a, b) {
            var c = a.da,
                d = c.N,
                e = c.N.V,
                f = c.W;
            c = c.fb;
            var g = a.ga;
            a = g.isSecureContext;
            g = g.G;
            b = b.set("prev_scp", {
                value: am(f, d)
            });
            var h = b.set,
                k = d.V,
                l = d.R,
                n = new hi;
            n.set(0, 1 !== c);
            l = l[f[0].getDomId()];
            n.set(1, !!F(l, 17));
            n.set(2, gm(f, d));
            n.set(3, F(k, 27) || !1);
            n.set(4, 3 === c);
            d = ji(n);
            h.call(b, "eri", {
                value: d
            }).set("cust_params", {
                value: cm(e),
                options: {
                    pa: "&"
                }
            }).set("ppid", {
                value: 1 !== fe(e, 24, 0) && jf(e, 16) ? y(e, 16) : null,
                options: {
                    Ba: !0
                }
            }).set("gct", {
                value: Yl("google_preview", g)
            }).set("sc", {
                value: a ? 1 : 0,
                options: {
                    Ba: !0
                }
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.aa;
            c = c.za;
            a = a.da.N.V;
            var f = dm(a.ua());
            if (0 === fe(a, 24, 0)) {
                var g = sz(c, "__gads", e);
                a = "1" === sz(c, "__gpi_opt_out", e) ? "1" : null;
                b = b.set("cookie", {
                    value: g,
                    options: {
                        Ba: !0
                    }
                }).set("cookie_enabled", {
                    value: !g && tz(c, e) ? "1" : null
                });
                g = d.document;
                var h = g.domain;
                d = b.set.call(b, "cdm", {
                    value: (f || Eh(d)) === g.URL ? "" : h
                });
                f = d.set;
                e = (e = sz(c, "__gpi", e)) && !_.t(e, "includes").call(e, "&") ? e : null;
                f.call(d, "gpic", {
                    value: e
                }).set("gpico", {
                    value: a
                }).set("pdopt", {
                    value: a
                })
            }
        }, function(a, b) {
            a = a.ga.G;
            b.set("arp", {
                value: dj(a) ? 1 : null
            }).set("abxe", {
                value: Hd(a.top) || Pu(a.IntersectionObserver) ? 1 : null
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = dm(a.da.N.V.ua());
            b.set("dt", {
                value: (new Date).getTime()
            });
            if (!a) {
                try {
                    var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                } catch (e) {
                    d = null
                }
                b.set("lmt", {
                    value: d
                })
            }
            d = nm;
            c = ve(c);
            0 < c && d >= c && b.set("dlt", {
                value: c
            }).set("idt", {
                value: d - c
            })
        }, function(a, b) {
            var c = a.da,
                d = c.N,
                e = c.W,
                f = c.N;
            c = f.V;
            f = f.R;
            var g = a.ga;
            a = g.G;
            var h = g.Ea;
            g = uh(!0, a);
            for (var k = a.document, l = [], n = [], m = _.B(e), p = m.next(); !p.done; p = m.next()) {
                p = p.value;
                var r = f[p.getDomId()];
                p = Wh(p, r, k, Ch(c, r));
                r = void 0;
                var u = h ? null != (r = p) ? r : XH : p;
                u && (l.push(Math.round(u.x)), n.push(Math.round(u.y)))
            }
            g && (d.Ib = g);
            c = Dh(a) ? null : uh(!1, a);
            try {
                var v = a.top;
                var x = hm(v.document, v)
            } catch (I) {
                x = new _.Gh(-12245933, -12245933)
            }
            b.set("adxs", {
                value: l
            }).set("adys", {
                value: n
            }).set("biw", {
                value: g ? g.width : null
            }).set("bih", {
                value: g ? g.height : null
            }).set("isw", {
                value: g ? null == c ? void 0 : c.width : null
            }).set("ish", {
                value: g ? null == c ? void 0 : c.height : null
            }).set("scr_x", {
                value: Math.round(x.x),
                options: {
                    Ba: !0
                }
            }).set("scr_y", {
                value: Math.round(x.y),
                options: {
                    Ba: !0
                }
            }).set("btvi", {
                value: jm(e, a, d),
                options: {
                    Ba: !0,
                    pa: "|"
                }
            })
        }, function(a, b) {
            var c = a.ga.L;
            b.set("ucis", {
                value: a.da.W.map(function(d) {
                    d = (0, D.J)(c.j.get(d));
                    null != d.ec || (d.ec = window === window.top ? (++c.o).toString(36) : lu());
                    return d.ec
                }),
                options: {
                    pa: "|"
                }
            }).set("oid", {
                value: 2
            })
        }, function(a, b) {
            a = a.da;
            var c = a.W,
                d = a.N,
                e = d.R;
            a = new w.Map;
            d = _.B(d.V.ua());
            for (var f = d.next(); !f.done; f = d.next()) {
                var g = f.value;
                a.set((0, D.J)(Nj(g)), [Xk(g, 2)[0]])
            }
            for (d = 0; d < c.length; d++)
                if (g = e[c[d].getDomId()])
                    for (g = _.B(g.ua()), f = g.next(); !f.done; f = g.next()) {
                        var h = f.value;
                        f = (0, D.J)(Nj(h));
                        var k = a.get(f) || [];
                        h = Xk(h, 2)[0];
                        1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                        a.set(f, k)
                    }
            c = [];
            e = _.B(_.t(a, "keys").call(a));
            for (d = e.next(); !d.done; d = e.next()) g = d.value, d = BF()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
                return encodeURIComponent(l || "")
            }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
                value: g[0]
            }));
            c.length && (_.G(lm) ? b.set("sps", {
                value: c,
                options: {
                    pa: "|"
                }
            }) : b.set("sps", {
                value: c.join("|")
            }))
        }, function(a, b) {
            var c = a.da.N.V;
            a = a.ga.G;
            var d = _.Pg(251),
                e, f, g, h, k, l, n;
            var m = a;
            m = void 0 === m ? fu : m;
            try {
                var p = m.history.length
            } catch (lb) {
                p = 0
            }
            b = b.set("u_his", {
                value: p
            }).set("u_h", {
                value: null == (e = a.screen) ? void 0 : e.height
            }).set("u_w", {
                value: null == (f = a.screen) ? void 0 : f.width
            }).set("u_ah", {
                value: null == (g = a.screen) ? void 0 : g.availHeight
            }).set("u_aw", {
                value: null == (h = a.screen) ? void 0 : h.availWidth
            }).set("u_cd", {
                value: null == (k = a.screen) ? void 0 : k.colorDepth
            });
            e = b.set;
            f = a;
            f = void 0 === f ? _.q : f;
            f = f.devicePixelRatio;
            e = e.call(b, "u_sd", {
                value: "number" === typeof f ? +f.toFixed(3) : null
            }).set("u_tz", {
                value: -(new Date).getTimezoneOffset()
            });
            f = e.set;
            try {
                var r, u, v, x, I = null != (x = null == (r = a.external) ? void 0 : null == (u = r.getHostEnvironmentValue) ? void 0 : null == (v = u.bind(a.external)) ? void 0 : v("os-mode")) ? x : "",
                    K, M = Number(null == (K = JSON.parse(I)) ? void 0 : K["os-mode"]);
                var S = 0 <= M ? M + 1 : null
            } catch (lb) {
                S = null
            }
            S = f.call(e, "wsm", {
                value: S
            }).set("dmc", {
                value: null != (n = null == (l = a.navigator) ? void 0 : l.deviceMemory) ? n : null
            });
            l = S.set;
            (c = y(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + Sr('role:1 producer:12 loc:"' + c + '"')) : c = "";
            c = l.call(S, "uule", {
                value: c
            });
            l = c.set;
            n = a;
            n = void 0 === n ? _.q : n;
            S = new hi;
            n.SVGElement && n.document.createElementNS && S.set(0);
            r = Ou();
            r["allow-top-navigation-by-user-activation"] && S.set(1);
            r["allow-popups-to-escape-sandbox"] && S.set(2);
            n.crypto && n.crypto.subtle && S.set(3);
            n.TextDecoder && n.TextEncoder && S.set(4);
            n = ji(S);
            d = l.call(c, "bc", {
                value: n
            }).set("uach", {
                value: d ? Sr(d, 3) : null
            });
            c = d.set;
            if (_.Pg(221)) var T = null;
            else if (l = null == (T = a.navigator) ? void 0 : T.userActivation) {
                T = 0;
                if (null == l ? 0 : l.hasBeenActive) T |= 1;
                if (null == l ? 0 : l.isActive) T |= 2
            } else T = void 0;
            T = c.call(d, "uas", {
                value: T
            });
            d = T.set;
            a: {
                try {
                    var Z, ba, ia = null == (Z = a.performance) ? void 0 : null == (ba = Z.getEntriesByType("navigation")) ? void 0 : ba[0];
                    if (null == ia ? 0 : ia.type) {
                        var Xa;
                        var Ba = null != (Xa = jD.get(ia.type)) ? Xa : null;
                        break a
                    }
                } catch (lb) {}
                var ua, wa, Da;Ba = null != (Da = kD.get(null == (ua = a.performance) ? void 0 : null == (wa = ua.navigation) ? void 0 : wa.type)) ? Da : null
            }
            d.call(T, "nvt", {
                value: Ba
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.L,
                f = c.Ea;
            c = a.da;
            var g = c.W;
            c = c.N;
            var h = c.V,
                k = c.R;
            a = a.tf.Re;
            c = Zl("google_preview", d);
            var l = d.document,
                n = c ? em(l.URL) : l.URL;
            l = c ? em(l.referrer) : l.referrer;
            c = !1;
            if (f) f = dm(h.ua());
            else {
                var m;
                f = null != (m = dm(k[g[0].getDomId()].ua())) ? m : dm(h.ua())
            }
            if (null != f) {
                var p = n;
                Dh(d) || (l = "", c = !0)
            } else f = n;
            m = fm(d);
            b.set("nhd", {
                value: m || null
            }).set("url", {
                value: f
            }).set("loc", {
                value: null !== p && p !== f ? p : null
            }).set("ref", {
                value: l
            });
            if (m) {
                p = b.set;
                var r;
                var u, v;
                m = Hd(d.top) && (null == (u = d.top) ? void 0 : null == (v = u.location) ? void 0 : v.href);
                var x;
                u = null == (x = d.location) ? void 0 : x.ancestorOrigins;
                d = bj(d) || "";
                x = (null == u ? void 0 : u[u.length - 1]) || "";
                _.G(cx) ? (f = (v = x && Du(x.match(_.Cu)[3] || null) && Du(x.match(_.Cu)[3] || null) !== Du(d.match(_.Cu)[3] || null)) ? x : d || x, u = null != (r = null == u ? void 0 : u.length) ? r : 0, .001 > ie() && le({
                    uaoo: v ? "1" : "0",
                    ltw: m || "",
                    rtw: d,
                    aotw: x,
                    aol: String(u)
                }, "tpurl"), r = m || f || "") : r = m || d || x;
                r = r ? c ? Du(r.match(_.Cu)[3] || null) : r : null;
                p.call(b, "top", {
                    value: r
                }).set("etu", {
                    value: e.tc
                })
            }
            b.set("scar", {
                value: a
            })
        }, function(a, b) {
            a = a.ga.context.pvsid;
            b.set("rumc", {
                value: _.G(ex) || _.Ae($g).j ? a : null
            }).set("rume", {
                value: _.G(pw) ? 1 : null
            })
        }, function(a, b) {
            a = a.ga.G;
            var c = b.set;
            var d = bv(a);
            var e = Qx(a, a.google_ad_width, a.google_ad_height);
            var f = d.location.href;
            if (d == d.top) f = !0;
            else {
                var g = !1,
                    h = d.document;
                h && h.referrer && (f = h.referrer, d.parent == d.top && (g = !0));
                (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 == f.indexOf(d) && (g = !1, f = d);
                f = g
            }
            g = a.top == a ? 0 : Hd(a.top) ? 1 : 2;
            d = 4;
            e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
            f && (d |= 16);
            e = "" + d;
            if (a != a.top)
                for (f = a; f && f != f.top && Hd(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent);
            c.call(b, "frm", {
                value: e || null
            }).set("vis", {
                value: oD(a.document)
            })
        }, function(a, b) {
            var c = a.da.W;
            a = a.ga.G;
            for (var d = [], e = [], f = _.B(c), g = f.next(); !g.done; g = f.next()) {
                var h = void 0,
                    k = void 0,
                    l = void 0;
                var n = a;
                g = Qh(g.value);
                var m = Su((null == g ? void 0 : g.parentElement) && Sh(g.parentElement, n) || null);
                !m || 1 === m[0] && 1 === m[3] ? (m = null != (l = null == g ? void 0 : g.parentElement) ? l : null, l = null != (k = Kh(m)) ? k : new _.Jh(0, 0), Wl(l, m, n, 100), k = null != (h = Kh(g)) ? h : new _.Jh(0, 0), Wl(k, g, n, 1), -1 === l.height && (k.height = -1), n = l, k = h = k, h = n.width + "x" + n.height, n = k.width + "x" + k.height) : n = h = "-1x-1";
                d.push(h);
                e.push(n)
            }
            null == QH && (f = Qx(a, 500, 300), n = a.navigator, h = n.userAgent, k = n.platform, n = n.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1], g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1], h = !k && "Gecko" === n && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1), QH = h && !f);
            g = 0 !== (0, _.Ml)();
            f = uh(!0, a, g).width;
            h = [];
            n = [];
            k = [];
            null !== a && a != a.top && (l = uh(!1, a).width, (-12245933 === f || -12245933 === l || l < f) && k.push(8)); - 12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
            c = _.B(c);
            for (l = c.next(); !l.done; l = c.next()) {
                g = new hi;
                m = Qh(l.value);
                l = 0;
                var p = !1,
                    r = !1;
                if (m) {
                    for (var u = 0, v = m; v && 100 > u; u++, v = v.parentElement) {
                        var x = Sh(v, a);
                        if (x) {
                            var I = x,
                                K = I.display,
                                M = I.overflowX;
                            if ("visible" !== I.overflowY && (g.set(2), (I = Kh(v)) && (l = l ? Math.min(l, I.width) : I.width), g.get(9))) break;
                            Ul(x) && g.set(9);
                            "none" === K && g.set(7);
                            "IFRAME" === v.nodeName && (x = parseInt(x.width, 10), x < f && (g.set(8), l = l ? Math.min(x, l) : x));
                            r || (r = "scroll" === M || "auto" === M);
                            p || (p = "flex" === K)
                        } else g.set(3)
                    }
                    r && p && (m = m.getBoundingClientRect().left, (m > f || 0 > m) && g.set(11))
                } else g.set(1);
                m = _.B(k);
                for (p = m.next(); !p.done; p = m.next()) g.set(p.value);
                h.push(ji(g));
                n.push(l)
            }
            b.set("psz", {
                value: d,
                options: {
                    pa: "|"
                }
            }).set("msz", {
                value: e,
                options: {
                    pa: "|"
                }
            }).set("fws", {
                value: h
            }).set("ohw", {
                value: n
            }).set("ea", {
                value: QH ? null : "0",
                options: {
                    Ba: !0
                }
            })
        }, function(a, b) {
            var c = a.da,
                d = c.W,
                e = c.N.R,
                f = a.ga.G;
            _.G(Kk) || (a = d.map(function(g) {
                return e[g.getDomId()]
            }), c = a.some(function(g) {
                return wh(g, xh, 16)
            }), b.set("rtgs", {
                value: c ? a.map(function(g) {
                    return wh(g, xh, 16) ? vh(g).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("max_w", {
                value: c ? a.map(function(g) {
                    return pm(Me(g, xh, 16), f)
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("max_h", {
                value: c ? a.map(function(g) {
                    return qm(Me(g, xh, 16), f)
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("min_w", {
                value: c ? a.map(function(g) {
                    return rm(Me(g, xh, 16))
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("min_h", {
                value: c ? a.map(function(g) {
                    return sm(Me(g, xh, 16))
                }) : null,
                options: {
                    pa: "!"
                }
            }))
        }, function(a, b) {
            b.set("psts", {
                value: xF(a.ga.L, a.da.W)
            })
        }, function(a, b) {
            var c = a.ga;
            a = c.aa;
            c = c.G;
            var d;
            var e = c.document.domain,
                f = null != (d = F(a, 5) && oe(c) ? c.document.cookie : null) ? d : "",
                g = c.history.length,
                h = c.screen,
                k = c.document.referrer;
            if (Kd()) var l = window.gaGlobal || {};
            else {
                var n = Math.round((new Date).getTime() / 1E3),
                    m = c.google_analytics_domain_name;
                e = "undefined" == typeof m ? Mx("auto", e) : Mx(m, e);
                var p = -1 < f.indexOf("__utma=" + e + "."),
                    r = -1 < f.indexOf("__utmb=" + e);
                (d = (hv() || window).gaGlobal) || (d = {}, (hv() || window).gaGlobal = d);
                var u = !1;
                if (p) {
                    var v = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                    r ? d.sid = v[3] : d.sid || (d.sid = n + "");
                    d.vid = v[0] + "." + v[1];
                    d.from_cookie = !0
                } else {
                    d.sid || (d.sid = n + "");
                    if (!d.vid) {
                        u = !0;
                        r = Math.round(2147483647 * Math.random());
                        p = Kx.appName;
                        var x = Kx.version,
                            I = Kx.language ? Kx.language : Kx.browserLanguage,
                            K = Kx.platform,
                            M = Kx.userAgent;
                        try {
                            v = Kx.javaEnabled()
                        } catch (S) {
                            v = !1
                        }
                        v = [p, x, I, K, M, v ? 1 : 0].join("");
                        h ? v += h.width + "x" + h.height + h.colorDepth : _.q.java && _.q.java.awt && (h = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), v += h.screen.width + "x" + h.screen.height);
                        v = v + f + (k || "");
                        for (k = v.length; 0 < g;) v += g-- ^ k++;
                        d.vid = (r ^ Lx(v) & 2147483647) + "." + n
                    }
                    d.from_cookie || (d.from_cookie = !1)
                }
                if (!d.cid) {
                    b: for (n = 999, m && (m = 0 == m.indexOf(".") ? m.substr(1) : m, n = m.split(".").length), m = 999, f = f.split(";"), v = 0; v < f.length; v++)
                        if (k = Nx.exec(f[v]) || Ox.exec(f[v]) || Px.exec(f[v])) {
                            h = k[1] || 0;
                            if (h == n) {
                                l = k[2];
                                break b
                            }
                            h < m && (m = h, l = k[2])
                        }u && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
                }
                d.dh = e;
                d.hid || (d.hid = Math.round(2147483647 * Math.random()));
                l = d
            }
            e = l.sid;
            d = l.hid;
            u = l.from_cookie;
            f = l.cid;
            u && !F(a, 5) || b.set("ga_vid", {
                value: l.vid
            }).set("ga_sid", {
                value: e
            }).set("ga_hid", {
                value: d
            }).set("ga_fc", {
                value: u
            }).set("ga_cid", {
                value: f
            }).set("ga_wpids", {
                value: c.google_analytics_uacct
            })
        }, function(a, b) {
            a = a.ga;
            var c = a.G;
            a = a.context.pvsid;
            b = b.set("js", {
                value: _.G(Ov) ? Rx(c) : null
            });
            var d = b.set;
            if (_.G(Ov)) a: {
                var e = c;e = void 0 === e ? window : e;
                if (c = Rx(e)) {
                    var f = null;
                    try {
                        "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5", e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                    } catch (g) {
                        a = "3";
                        break a
                    }
                    a = "string" === typeof f ? f : "3"
                } else a = null
            }
            else a = null;
            d.call(b, "ms", {
                value: a
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = c.navigator;
            c = c.document;
            _.G(lx) || "runAdAuction" in a && "joinAdInterestGroup" in a && Sf("run-ad-auction", c) && b.set("td", {
                value: 1
            })
        }, function(a, b) {
            var c = a.Kf.Lf;
            Sf("browsing-topics", a.ga.G.document) && b.set("topics", {
                value: c instanceof Uint8Array ? oc(c, 3) : c
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G;
            c = c.aa;
            var e = a.da.W,
                f = a.Gf;
            a = f.vf;
            f = f.He;
            _.G(Zw) || b.set("a3p", {
                value: Ze(ne(c, d), Mg(e[0].getAdUnitPath()), a, f)
            })
        }, function(a, b) {
            b.set("cbidsp", {
                value: Sl(a.Xc.Yc, function(c) {
                    return oc(Xe(c, $s), 3)
                }, {
                    pa: "~"
                })
            })
        }, function(a, b) {
            a = a.da.N.V;
            wh(a.Bc(), Sn, 1) && (a = Rn(a.Bc(), Sn, 1), b.set("cmrv", {
                value: 1
            }).set("cmrq", {
                value: y(a, 1)
            }).set("cmrc", {
                value: Xk(a, 2),
                options: {
                    pa: ">"
                }
            }).set("cmrids", {
                value: Xk(a, 3),
                options: {
                    pa: "!"
                }
            }).set("cmrf", {
                value: y(a, 4)
            }))
        }, function(a, b) {
            var c = [];
            a = _.B(Wc(Rn(a.da.N.V.Bc(), Un, 2), mn, 1));
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, Xk(d, 2).length && c.push(fe(d, 1, 0) + "=" + Xk(d, 2).join("|"));
            b.set("pps", {
                value: c,
                options: {
                    pa: "~"
                }
            })
        }]),
        ZH = function(a) {
            this.m = a;
            this.D = [];
            this.j = "";
            this.I = new w.Set(ef(Fw));
            a = _.B(F(this.m.ga.aa, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.I.add(b.value)
        },
        bI = function(a) {
            if (0 === a.m.da.W.length) return "";
            for (var b = new w.Map, c = _.B(YH), d = c.next(); !d.done; d = c.next()) d = d.value, d(a.m, b);
            b = _.B(b);
            for (c = b.next(); !c.done; c = b.next()) d = _.B(c.value), c = d.next().value, d = d.next().value, $H(a, c, d.value, d.options);
            a.j = "https://" + (aI(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
            b = _.B(a.D);
            for (d = b.next(); !d.done; d = b.next()) {
                c = a;
                d = d.value;
                var e = d.value;
                var f = d.options,
                    g = void 0 === f.pa ? "," : f.pa;
                f = void 0 === f.Ba ? !1 : f.Ba;
                if (e = "object" !== typeof e ? null == e || !f && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(g)) : null) "?" !== c.j[c.j.length - 1] && (c.j += "&"), c.j += d.Xd + "=" + e
            }
            return a.j
        },
        aI = function(a) {
            var b = a.m;
            a = b.ga.aa;
            var c, d;
            b = null != (d = null == (c = cE(b.da.N.V)) ? void 0 : F(c, 9)) ? d : !1;
            c = F(a, 8);
            return b || c || !F(a, 5)
        },
        $H = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.D.some(function(e) {
                return b === e.Xd
            });
            a.I.has(b) || null == c || a.D.push({
                Xd: b,
                value: c,
                options: d
            })
        };
    var eI = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.j = new w.Map;
            this.m = new w.Map;
            this.tb = _.Ae($g);
            window.performance && Pu(window.performance.now) && (_.eb(window, "DOMContentLoaded", _.Yg(a, 334, function() {
                for (var f = _.B(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.B(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    cI(e, g, h) && e.j.delete(g)
                }
            })), gF(b, lF, function(f) {
                f = f.detail;
                var g = f.R;
                return void dI(e, (0, D.J)(dn(d, f.ud)), (0, D.J)(y(g, 20)))
            }), gF(b, mF, function(f) {
                f = f.detail;
                var g = f.R;
                f = (0, D.J)(dn(d, f.ud));
                g = (0, D.J)(y(g, 20));
                var h = e.m.get(f);
                null != h ? ZE(h, g) : dI(e, f, g)
            }))
        },
        dI = function(a, b, c) {
            cI(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Jm(b, function() {
                return a.j.delete(b)
            }))
        },
        cI = function(a, b, c) {
            var d = Qh(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new XE({
                G: window,
                tb: a.tb,
                Za: (0, D.ta)(d),
                Ia: function(e) {
                    return void bh(a.context, 336, e)
                },
                If: _.G(ex)
            });
            if (!d.j) return !1;
            ZE(d, c);
            a.m.set(b, d);
            tF(a.L, b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var fI = function(a) {
        this.m = a;
        this.D = this.j = 0
    };
    fI.prototype.push = function() {
        for (var a = _.B(bb.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(w.globalThis), this.j++)
            } catch (c) {
                this.D++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(RF(String(c)))
            }
        }
        this.m.info(SF(String(this.j), String(this.D)));
        return this.j
    };
    var gI = function(a, b) {
        Y.call(this, a, 931);
        this.B = V(this);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(gI, Y);
    gI.prototype.j = function() {
        var a = this.o.value,
            b = new w.Map;
        this.B.j(new w.Map);
        if (a) {
            var c;
            a = _.B(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = Wc(d, et, 1);
                c = 1 === fe(c[0], 1, 0) ? gs(c[0]) : hs(c[0], fs);
                d = Yi(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.l.j(b)
    };
    var hI = function(a, b) {
        Y.call(this, a, 981);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.P(hI, Y);
    hI.prototype.j = function() {
        var a = new w.Map,
            b, c = _.B(null != (b = this.B.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = Wc(b, et, 1);
            d = 1 === fe(d[0], 1, 0) ? gs(d[0]) : hs(d[0], fs);
            a.set(d, Yi(b, 2))
        }
        this.o.j(a);
        this.l.j(new Ss)
    };
    var iI = function(a, b, c, d, e) {
        Y.call(this, a, 980);
        this.A = new Xy;
        this.F = W(this, b);
        this.B = W(this, c);
        this.l = W(this, d);
        this.o = W(this, e)
    };
    _.P(iI, Y);
    iI.prototype.j = function() {
        (E = _.t(Object, "entries").call(Object, this.F.value), _.t(E, "find")).call(E, function(c) {
            var d = _.B(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.Gc)
        }) && (_.Ae(uk).l = !0);
        vk(25);
        for (var a = _.B([].concat(_.Od(this.B.value), _.Od(this.l.value), _.Od(this.o.value))), b = a.next(); !b.done; b = a.next()) dq(b.value);
        this.A.notify()
    };
    var jI = function(a, b) {
        Y.call(this, a, 892, _.xe(vw));
        this.B = V(this);
        this.F = V(this);
        this.o = V(this);
        this.l = V(this);
        this.Zb = V(this);
        this.K = cz(this, b)
    };
    _.P(jI, Y);
    jI.prototype.j = function() {
        var a = this.K.value;
        if (!a) throw Error("config timeout");
        var b;
        Py(this.B, null != (b = Me(a, mt, 3)) ? b : null);
        var c;
        Py(this.F, null != (c = Me(a, pt, 2)) ? c : null);
        this.o.j(Vm(a, 4));
        Py(this.l, Wc(a, gf, 6));
        Py(this.Zb, Wc(a, At, 5))
    };
    jI.prototype.H = function(a) {
        this.m(a)
    };
    jI.prototype.m = function(a) {
        Sy(this.B, a);
        Sy(this.F, a);
        this.o.j([]);
        this.l.j([]);
        this.Zb.j([])
    };
    var kI = [{
            name: "Interstitial",
            dd: 1
        }, {
            name: "TopAnchor",
            dd: 2
        }, {
            name: "BottomAnchor",
            dd: 3
        }],
        lI = function(a, b) {
            Y.call(this, a, 789);
            this.l = b;
            this.A = V(this)
        };
    _.P(lI, Y);
    lI.prototype.j = function() {
        var a = this;
        this.A.j(kI.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.dd;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new At;
            e = new rt;
            b = _.A(e, 2, b);
            c = _.A(b, 1, "/22639388115/example/" + c.toLowerCase());
            return Vg(d, 5, Bt, c)
        }))
    };
    var mI = function(a, b) {
            this.D = b;
            this.j = this.m = a
        },
        nI = function(a) {
            a.j = Math.min(a.D, 2 * a.j);
            a.m = Math.min(a.D, a.j)
        };
    var oI = function(a, b, c) {
        Y.call(this, a, 969);
        this.G = b;
        this.L = c;
        this.l = V(this)
    };
    _.P(oI, Y);
    oI.prototype.j = function() {
        var a = this;
        if (_.G(cw)) {
            var b = performance.now(),
                c = "",
                d, e = 1E3 * _.xe(aw),
                f = _.xe(fw),
                g = 1E3 * _.xe(ew),
                h = function() {
                    return void a.G.clearInterval(l)
                };
            _.Jm(this, h);
            var k = _.Yg(this.context, this.id, function() {
                var n, m, p, r, u;
                return _.gb(function(v) {
                    switch (v.j) {
                        case 1:
                            n = yg(a.G);
                            if (!n) {
                                h();
                                v.j = 2;
                                break
                            }
                            v.D = 3;
                            m = performance.now();
                            return hb(v, n, 5);
                        case 5:
                            c = null != (p = v.m) ? p : "0";
                            _.xe(gw) && (r = performance.now(), pI(a, r - m, r - b), b = m);
                            d && (d = void 0, l = a.G.setInterval(k, e));
                            c.length > f && (bh(a.context, a.id, new Mk("ML:" + c.length)), c = "0", h());
                            jb(v, 2);
                            break;
                        case 3:
                            u = kb(v), bh(a.context, a.id, u), c = "0", g ? (d ? nI(d) : (h(), d = new mI(g, e)), a.G.setTimeout(k, d.m)) : _.G(dw) || h();
                        case 2:
                            a.l.j(function() {
                                return c
                            }), v.j = 0
                    }
                })
            });
            var l = this.G.setInterval(k, e);
            k()
        } else this.l.j(function() {
            return ""
        })
    };
    oI.prototype.m = function() {
        this.l.j(function() {
            return ""
        })
    };
    var pI = function(a, b, c) {
        gi("gpt_paw_refresh", function(d) {
            mi(d, a.context);
            L(d, "prc", a.L.D);
            L(d, "sbms", b);
            L(d, "lams", c)
        }, _.xe(gw))
    };
    var qI = function(a, b, c) {
        c = void 0 === c ? yg : c;
        Y.call(this, a, 1063);
        this.G = b;
        this.o = c;
        this.l = V(this)
    };
    _.P(qI, Y);
    qI.prototype.j = function() {
        var a = this;
        if (_.G(cw) && zg(this.G)) {
            var b = null,
                c = 0,
                d = 1E3 * _.xe(aw),
                e = _.xe(fw),
                f = _.Yg(this.context, this.id, function() {
                    var h, k, l, n;
                    return _.gb(function(m) {
                        switch (m.j) {
                            case 1:
                                return h = a.o(a.G), k = "0", m.D = 2, hb(m, h, 4);
                            case 4:
                                k = null != (l = m.m) ? l : "0";
                                k.length > e && (bh(a.context, a.id, new Mk("ML:" + k.length)), k = "0");
                                jb(m, 3);
                                break;
                            case 2:
                                n = kb(m), bh(a.context, a.id, n);
                            case 3:
                                b = k, c = _.se(a.G) + d, m.j = 0
                        }
                    })
                });
            var g = (E = f(), _.t(E, "finally")).call(E, function() {
                g = void 0
            });
            this.l.j(function() {
                var h, k;
                return _.gb(function(l) {
                    if (1 == l.j) {
                        h = _.se(a.G) >= c;
                        k = null === b || "0" === b;
                        if (!h && !k) {
                            l.j = 2;
                            return
                        }
                        g || (g = (E = f(), _.t(E, "finally")).call(E, function() {
                            g = void 0
                        }));
                        return hb(l, g, 2)
                    }
                    return l.return((0, D.J)(b))
                })
            })
        } else this.l.j(function() {
            return w.Promise.resolve("")
        })
    };
    qI.prototype.m = function() {
        this.l.j(function() {
            return w.Promise.resolve("")
        })
    };
    var rI = function(a, b, c, d) {
        Y.call(this, a, 1016);
        this.A = V(this);
        this.o = X(this, b);
        this.l = X(this, c);
        this.B = ez(this, [b, d])
    };
    _.P(rI, Y);
    rI.prototype.j = function() {
        if (this.l.value) {
            var a = this.o.value || this.B.value;
            a && sI(this, a) ? this.A.j(a) : (Qy(this.A), tI(this, a))
        } else Qy(this.A)
    };
    rI.prototype.H = function(a) {
        this.m(a)
    };
    rI.prototype.m = function() {
        Qy(this.A)
    };
    var sI = function(a, b) {
            return Wc((0, D.J)(a.l.value), qt, 1).some(function(c) {
                return c.Ra() === b
            })
        },
        tI = function(a, b) {
            gi("pp_iris_failure", function(c) {
                L(c, "fnc", b);
                mi(c, a.context)
            }, _.xe(ww))
        };
    var uI = function(a, b) {
        Y.call(this, a, 1015);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(uI, Y);
    uI.prototype.j = function() {
        if (this.o.value) {
            var a = Wc(this.o.value, qt, 1);
            (null == a ? 0 : a.length) ? (a = Wc(this.o.value, qt, 1)[0], (E = [2, 3], _.t(E, "includes")).call(E, fe(a, 3, 0)) ? this.l.j(a.Ra()) : Qy(this.l)) : Qy(this.l)
        } else Qy(this.l)
    };
    uI.prototype.H = function(a) {
        this.m(a)
    };
    uI.prototype.m = function() {
        Qy(this.l)
    };
    var vI = function(a, b, c) {
        Y.call(this, a, 1017);
        this.G = c;
        this.A = bz(this);
        this.l = X(this, b)
    };
    _.P(vI, Y);
    vI.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = Ax(this.G, this.l.value, function(c) {
                if (!c) {
                    c = ru(b.j);
                    for (var d = _.B(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.qe(e.value)
                }
                a.A.notify()
            });
            b.start()
        } else this.A.notify()
    };
    vI.prototype.H = function(a) {
        this.m(a)
    };
    vI.prototype.m = function() {
        this.A.notify()
    };
    var wI = function(a, b) {
        Y.call(this, a, 1056);
        this.A = V(this);
        this.l = hF(b, lF)
    };
    _.P(wI, Y);
    wI.prototype.j = function() {
        var a = this;
        this.l.then(function(b) {
            b = Mg((0, D.J)(b.detail.R.getAdUnitPath()));
            a.A.j(b)
        })
    };
    wI.prototype.H = function(a) {
        this.m(a)
    };
    wI.prototype.m = function() {
        Qy(this.A)
    };
    var xI = function(a, b, c, d) {
        Y.call(this, a, 906, _.xe(uw));
        this.l = bz(this);
        if (b === b.top) {
            var e = new nf;
            _.Cm(this, e);
            var f = new uI(a, c);
            H(e, f);
            d = new wI(a, d);
            H(e, d);
            a = new rI(a, f.l, c, d.A);
            H(e, a);
            b = new vI(this.context, a.A, b);
            H(e, b);
            Iy(this.C, b.A, !0);
            Bf(e)
        } else this.l.notify()
    };
    _.P(xI, Y);
    xI.prototype.j = function() {
        this.l.notify()
    };
    xI.prototype.H = function(a) {
        this.m(a)
    };
    xI.prototype.m = function() {
        this.l.notify()
    };
    var yI = function(a, b) {
        Y.call(this, a, 1031);
        this.G = b
    };
    _.P(yI, Y);
    yI.prototype.j = function() {
        this.G === this.G.top && aj(this.G)
    };
    var zI = function(a) {
        Y.call(this, a, 891);
        this.l = V(this);
        var b = new bp;
        this.o = W(this, b);
        (a = _.Pg(260)) ? a(function(c, d) {
            if (d) Sy(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.rb || Sy(b, Error("malformed response"))
            }
        }): Sy(b, Error("missing input"))
    };
    _.P(zI, Y);
    zI.prototype.j = function() {
        this.l.j(new Dt(this.o.value))
    };
    var AI = function(a, b) {
        Y.call(this, a, 966);
        this.G = b;
        this.l = V(this)
    };
    _.P(AI, Y);
    AI.prototype.j = function() {
        var a = this,
            b = Ag(this.G);
        if (b) this.l.j(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.G, "_pbjsGlobals")) && !b.configurable) gi("pdpg_error", function(d) {
            mi(d, a.context)
        }, _.xe(Lv));
        else {
            var c = null;
            Object.defineProperty(this.G, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Ag(a.G)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    AI.prototype.m = function() {};
    var BI = function(a, b) {
        Y.call(this, a, 979);
        this.G = b;
        this.A = V(this)
    };
    _.P(BI, Y);
    BI.prototype.j = function() {
        var a = this,
            b = "function" !== typeof this.G.document.browsingTopics,
            c = !Sf("browsing-topics", this.G.document);
        b = b || c;
        !_.G(Kw) || !_.G(Qv) && b ? Qy(this.A) : Mi(this.G).then(function(d) {
            a.A.j(d)
        })
    };
    BI.prototype.m = function() {
        Qy(this.A)
    };
    var zm = function(a, b, c, d) {
        Y.call(this, a, 959);
        this.Ya = b;
        this.A = V(this);
        this.l = W(this, b);
        dz(this, c);
        dz(this, d)
    };
    _.P(zm, Y);
    zm.prototype.j = function() {
        this.A.j(this.l.value)
    };
    var ym = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 874);
        this.o = b;
        this.L = c;
        this.G = d;
        this.F = e;
        this.l = bz(this);
        dz(this, f);
        this.B = W(this, g)
    };
    _.P(ym, Y);
    ym.prototype.j = function() {
        var a = this,
            b = new rx(this.G, -1, _.G(ix));
        _.Cm(this, b);
        if (tx(b)) {
            var c = this.L.H,
                d = c.status,
                e = function(f) {
                    var g = a.B.value,
                        h, k, l;
                    if (l = !(null == (h = a.F) ? 0 : F(h, 9))) {
                        var n = void 0 === n ? !1 : n;
                        l = xx(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !n || "string" !== typeof f.tcString || !f.tcString.length ? !0 : vx(f, "1") : !1
                    }
                    h = _.A(g, 5, l);
                    l = !yx(f, ["3", "4"]);
                    h = _.A(h, 9, l);
                    h = _.A(h, 2, f.tcString);
                    l = null != (k = f.addtlConsent) ? k : "";
                    k = _.A(h, 4, l);
                    _.A(k, 7, f.internalErrorState);
                    null != f.gdprApplies && _.A(g, 3, f.gdprApplies);
                    _.G(Iw) && !yx(f, ["2", "7", "9", "10"]) && _.A(g, 8, !0);
                    a.l.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    c.data = void 0;
                    c.status = 1;
                    c.j.push(e);
                    this.o.info(zG());
                    b.addEventListener(function(f) {
                        xx(f) ? ("tcunavailable" === f.tcString ? a.o.info(AG("failed")) : a.o.info(AG("succeeded")), c.data = f, c.status = 2, c.Ac().forEach(function(g) {
                            g(f)
                        }), c.j = []) : (c.data = void 0, c.status = 1)
                    });
                    break;
                default:
                    throw Error("Impossible TCDataCacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var xm = function(a, b, c, d, e) {
        Y.call(this, a, 875);
        this.B = b;
        this.G = c;
        this.l = bz(this);
        dz(this, d);
        this.o = W(this, e)
    };
    _.P(xm, Y);
    xm.prototype.j = function() {
        var a = this,
            b = _.G(jx) ? new Zx(this.G) : new FD(this.G);
        _.Cm(this, b);
        if (b.l()) {
            var c = _.Yg(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && _.A(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.B.info(yG());
            b.o(c)
        } else this.l.notify()
    };
    var vm = function(a, b) {
        Y.call(this, a, 958);
        this.l = b;
        this.Ya = V(this)
    };
    _.P(vm, Y);
    vm.prototype.j = function() {
        var a = new qz,
            b, c = null == (b = this.l) ? void 0 : F(b, 9);
        _.A(a, 5, !c);
        this.Ya.j(a)
    };
    var wm = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Y.call(this, a, 960);
        this.G = b;
        this.o = d;
        this.l = W(this, c)
    };
    _.P(wm, Y);
    wm.prototype.j = function() {
        var a = this;
        _.eh(this.context, 894, function() {
            return void gi("cmpMet", function(b) {
                mi(b, a.context);
                var c = new rx(a.G);
                _.Cm(a, c);
                var d = _.G(jx) ? new Zx(a.G) : new FD(a.G);
                _.Cm(a, d);
                L(b, "fc", Number(a.l.value));
                L(b, "tcfv1", Number(!!a.G.gh));
                L(b, "tcfv2", Number(tx(c)));
                L(b, "usp", Number(d.l()));
                L(b, "ptt", 17)
            }, a.o)
        })
    };
    var CI = function(a, b) {
        Y.call(this, a, 1052);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.P(CI, Y);
    CI.prototype.j = function() {
        var a = this.B.value,
            b = new gf,
            c = new w.Map,
            d = new w.Set;
        a = _.B(null != a ? a : []);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = e.value;
            if (f.Cc()) {
                e = new w.Set;
                c.set(f.Ra().toString(), e);
                f = _.B((0, D.J)(f.Qb()));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = (0, D.J)(g.na());
                    e.add(h);
                    d.has(h) || bf(b, 2, ft, g);
                    d.add(h)
                }
            }
        }
        this.o.j(c);
        this.l.j(b)
    };
    var DI = function(a, b) {
        Y.call(this, a, 1040);
        this.l = V(this);
        this.o = V(this);
        this.B = X(this, b)
    };
    _.P(DI, Y);
    DI.prototype.j = function() {
        var a = this.B.value;
        a ? (Py(this.o, a instanceof gf ? a.Ra() : null), a = a.Qb(), this.l.j(a.map(function(b) {
            var c = b.D();
            return {
                rc: b.na(),
                url: c && (_.t(c, "startsWith").call(c, location.protocol) || _.t(c, "startsWith").call(c, "data:") && 40 >= c.length) ? Ld(c) : void 0
            }
        }))) : (Qy(this.o), this.l.j([]))
    };
    var dp = function(a, b, c, d) {
        Y.call(this, a, 813);
        this.B = b;
        this.l = V(this);
        this.F = X(this, c);
        this.o = X(this, d)
    };
    _.P(dp, Y);
    dp.prototype.j = function() {
        var a = this,
            b = this.F.value;
        if (!b || _.G(Yw)) this.l.j(!1);
        else {
            b = _.B(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.rc;
                (d = d.url) && _.Cm(this, Rf(c, d, this.o.value, function(e, f) {
                    bh(a.context, e, f);
                    var g, h;
                    null == (g = a.B) || null == (h = g.error) || h.call(g, f)
                }))
            }
            this.l.j(!0)
        }
    };
    var EI = function(a, b, c) {
        Y.call(this, a, 1045);
        this.l = c;
        this.o = W(this, b)
    };
    _.P(EI, Y);
    EI.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.context,
                c = this.l;
            if (a.Cc()) {
                var d = new nf,
                    e = new bp;
                e.j(a);
                a = new DI(b, e);
                H(d, a);
                b = new dp(b, console, a.l, c);
                H(d, b);
                Bf(d)
            }
        }
    };
    var Em = function(a, b, c) {
        Y.call(this, a, 879);
        this.o = b;
        this.l = V(this);
        _.Pg(260) && (this.B = W(this, c))
    };
    _.P(Em, Y);
    Em.prototype.j = function() {
        var a, b;
        (null != (b = null == (a = this.B) ? void 0 : a.value) ? b : MD(this.o)) ? (a = OD(this.o), Ry(this.l, a)) : Qy(this.l)
    };
    var Dm = function(a, b, c) {
        Y.call(this, a, 896);
        this.l = b;
        this.zb = V(this);
        c && dz(this, c)
    };
    _.P(Dm, Y);
    Dm.prototype.j = function() {
        this.zb.j(MD(this.l))
    };
    var FI = function(a, b) {
        Y.call(this, a, 1018);
        _.G(Yv) && (this.l = bz(this));
        this.o = X(this, b)
    };
    _.P(FI, Y);
    FI.prototype.j = function() {
        var a, b, c, d = _.B(null != (c = null == (a = this.o.value) ? void 0 : null == (b = Me(a, KD, 5)) ? void 0 : Vm(b, 1)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) dq(a.value);
        var e;
        null == (e = this.l) || e.notify()
    };
    var GI = function(a, b) {
        Y.call(this, a, 1070);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(GI, Y);
    GI.prototype.j = function() {
        var a, b = null == (a = this.o.value) ? void 0 : Me(a, KD, 5);
        if (b) {
            a = y(b, 3);
            var c = [];
            b = _.B(Gc(b, 2, Ub));
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = new Nm;
                var f = new st;
                e = _.A(f, 1, e);
                d = _.Sg(d, 2, e);
                a && (e = new ut, e = _.A(e, 1, 1), e = _.A(e, 2, a), _.Sg(d, 3, e));
                c.push(d)
            }
            this.l.j(c)
        } else this.l.j([])
    };
    var cp = function(a, b, c) {
        Y.call(this, a, 706);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.P(cp, Y);
    cp.prototype.j = function() {
        Py(this.A, ne(this.l.value, this.G))
    };
    var Km = new w.Map([
        [1, 5],
        [2, 2],
        [3, 3]
    ]);
    var Mp = function(a, b, c, d, e) {
        var f = bb.apply(5, arguments);
        Y.call(this, a, 912);
        this.googletag = b;
        this.V = c;
        this.K = d;
        this.F = e;
        this.l = V(this);
        this.o = V(this);
        this.B = [];
        f = _.B(f);
        for (var g = f.next(); !g.done; g = f.next()) this.B.push(W(this, g.value))
    };
    _.P(Mp, Y);
    Mp.prototype.j = function() {
        if (_.G(zw)) {
            for (var a = [], b = _.B(this.B), c = b.next(); !c.done; c = b.next()) {
                c = _.B(c.value.value);
                for (var d = c.next(); !d.done; d = c.next()) switch (d = d.value, Ti(d, Bt)) {
                    case 5:
                        var e = void 0,
                            f = void 0;
                        Pm(this.context, this.googletag, (0, D.J)(Sm(d, rt, 5, Bt)), null != (e = Me(d, Nm, 4)) ? e : null, null != (f = this.V) ? f : $h().j, this.K, this.F);
                        break;
                    case 6:
                        e = (0, D.J)(Sm(d, zt, 6, Bt));
                        if (f = wh(e, xt, 2)) f = (0, D.J)(Me(e, xt, 2)), f = Um(f) && Wm(f);
                        f && (f = void 0, Zm(this.googletag, (0, D.J)(Sm(d, zt, 6, Bt)), null != (f = this.V) ? f : $h().j, Me(d, Nm, 4)), (d = ge(e, 1)) && a.push(d));
                        break;
                    case 8:
                        wh(d, Nm, 4) && this.o.j((0, D.J)(Me(d, Nm, 4)))
                }
            }
            this.l.j(a)
        } else this.l.j([]);
        Qy(this.o)
    };
    Mp.prototype.H = function(a) {
        this.m(a)
    };
    Mp.prototype.m = function() {
        this.l.j([])
    };
    var HI = function(a, b, c, d) {
        Y.call(this, a, 890);
        this.B = b;
        this.o = c;
        this.l = X(this, d)
    };
    _.P(HI, Y);
    HI.prototype.j = function() {
        var a = this;
        If(this.B, this.l.value, function(b, c) {
            bh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var II = function(a, b, c, d) {
        _.yv.call(this);
        this.context = a;
        this.Db = b;
        this.oa = c;
        this.L = d;
        this.ka = new zI(this.context);
        this.m = new jI(this.context, this.ka.l);
        this.qa = this.m.o;
        this.M = this.m.l;
        this.j = new zH(this.context, this.m.B, window);
        this.l = new gI(this.context, this.j.M);
        this.H = new hI(this.context, this.j.K);
        var e;
        this.ja = new lI(this.context, null != (e = window.location.hash) ? e : "");
        this.C = new Mp(this.context, rj(), null, this.Db, this.oa, this.ja.A, this.m.Zb);
        this.Y = new AI(this.context, window);
        this.ca = new BI(this.context, window);
        this.ia = new iI(this.context, this.j.o, this.qa, this.j.l, this.C.l);
        this.K = this.l.l;
        this.U = this.j.B;
        this.ha = this.j.F;
        this.la = this.j.o;
        this.ib = this.j.l;
        this.Z = this.l.B;
        this.Ab = this.C.l;
        this.fa = this.Y.l;
        this.ma = this.H.o;
        this.P = this.H.l;
        this.bb = this.ca.A;
        this.T = this.ia.A;
        this.F = new OH(this.context, this.fa, this.T, this.K, this.U, this.Z, this.ma, this.P, this.ha);
        this.Bb = this.F.l;
        this.Cb = this.F.o;
        this.Ha = this.C.o;
        this.o = new bp;
        _.Cm(this, this.Y);
        _.Cm(this, this.ka);
        _.Cm(this, this.m);
        _.Cm(this, this.l);
        _.Cm(this, this.H);
        _.Cm(this, this.j);
        _.Cm(this, this.ja);
        _.Cm(this, this.C);
        _.Cm(this, this.ca);
        _.Cm(this, this.F);
        _.Cm(this, this.ia);
        _.G(bw) ? (this.O = new qI(this.context, window), _.Cm(this, this.O), this.Qa = this.O.l) : 0 < _.xe(aw) && (this.B = new oI(this.context, window, this.L), _.Cm(this, this.B), this.ya = this.B.l);
        _.Pg(260) || (this.qa.j([]), this.la.j({}), this.ib.j([]), Qy(this.K), this.U.j(!1), this.Z.j(new w.Map), Qy(this.ma), this.T.notify(), Qy(this.Ab), Qy(this.P), this.ha.j(!1), Qy(this.Ha), this.M.j([]), this.o.j([]), _.G(bw) ? Qy((0, D.J)(this.Qa)) : 0 < _.xe(aw) && Qy((0, D.J)(this.ya)));
        _.Pg(260) && _.G(Kw) || Qy(this.bb)
    };
    _.P(II, _.yv);
    var JI = function(a, b) {
        var c = new nf;
        _.Cm(a, c);
        H(c, a.Y);
        H(c, a.ka);
        H(c, a.m);
        H(c, a.j);
        H(c, a.l);
        H(c, a.ia);
        H(c, a.H);
        b = new xI(a.context, window, a.m.F, b);
        a.ab = b.l;
        H(c, b);
        H(c, a.ja);
        H(c, a.C);
        _.G(gx) && H(c, new yI(a.context, window));
        a.B && H(c, a.B);
        a.O && H(c, a.O);
        _.G(Kw) && H(c, a.ca);
        H(c, a.F);
        var d = Fm(a.context, a.ab);
        b = d.zb;
        var e = d.Nd;
        _.Cm(c, d.va);
        d = new FI(a.context, e);
        a.lb = d.l;
        H(c, d);
        _.G(Zv) ? (d = new GI(a.context, e), H(c, d), a.o = d.l) : a.o.j([]);
        _.G(Yw) || !_.G(tw) || rk() || (b = Am(a.context, a.oa, a.L, void 0, window, b, e).Ya, b = new cp(a.context, window, b), H(c, b), e = new HI(a.context, rj(), console, b.A), H(c, e), e = new CI(a.context, a.M), H(c, e), _.G(bx) && (a = new EI(a.context, e.l, b.A), H(c, a)));
        Bf(c)
    };
    var KI = ["Debug", "Info", "Warning", "Error", "Fatal"],
        LI = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    aa = LI.prototype;
    aa.getSlot = function() {
        return this.j
    };
    aa.getLevel = function() {
        return this.level
    };
    aa.getTimestamp = function() {
        return this.timestamp
    };
    aa.getMessage = function() {
        return this.message
    };
    aa.toString = function() {
        return this.timestamp.toTimeString() + ": " + KI[this.level] + ": " + this.message
    };
    var MI = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            }
        },
        NI = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var OI = function(a) {
            this.context = a;
            this.m = _.t(Array, "from").call(Array, {
                length: 1E3
            });
            this.D = this.I = this.j = 0;
            this.C = window
        },
        WG = function(a) {
            return [].concat(_.Od(a.m.slice(a.j)), _.Od(a.m.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        XG = function(a, b) {
            return WG(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        YG = function(a, b) {
            return WG(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    OI.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new LI(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.m[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.xe(Tv) && 100 > this.I;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = MI[k] || NI[k];
        g && f && (b = _.xe(Tv), gi("gpt_eventlog_messages", function(n) {
            ++e.I;
            mi(n, e.context);
            L(n, "level", a);
            L(n, "messageId", k);
            L(n, "args", h.join("|"));
            l || L(n, "noMsg", !0);
            var m = Error(),
                p;
            var r = null != (p = m.stack) ? p : "";
            m = m.message;
            try {
                -1 == r.indexOf(m) && (r = m + "\n" + r);
                for (var u; r != u;) u = r, r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var v = r.replace(RegExp("\n *", "g"), "\n")
            } catch (x) {
                v = m
            }
            L(n, "stack", v)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new Mk(b);
            d = this.D < _.xe(Uv) && f && _.q.console;
            if (this.C === top && d || _.t(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse"))(function(n) {
                var m, p, r, u;
                return void(2 === a ? null == (p = (m = _.q.console).warn) ? void 0 : p.call(m, n) : null == (u = (r = _.q.console).error) ? void 0 : u.call(r, n))
            })(b), this.D++
        }
        return c
    };
    OI.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    OI.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var wn = "3rd party ad content";
    var PI = function(a, b) {
            this.serviceName = b;
            this.slot = (0, D.J)(a.j)
        },
        QI = function(a, b) {
            PI.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.P(QI, PI);
    var RI = function() {
        PI.apply(this, arguments)
    };
    _.P(RI, PI);
    var SI = function(a, b, c) {
        PI.call(this, a, b);
        this.inViewPercentage = c
    };
    _.P(SI, PI);
    var TI = function() {
        PI.apply(this, arguments)
    };
    _.P(TI, PI);
    var UI = function() {
        PI.apply(this, arguments)
    };
    _.P(UI, PI);
    var VI = function() {
        PI.apply(this, arguments)
    };
    _.P(VI, PI);
    var WI = function() {
        PI.apply(this, arguments)
    };
    _.P(WI, PI);
    var XI = function(a, b, c, d) {
        PI.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.P(XI, PI);
    var YI = function(a, b, c) {
        PI.call(this, a, b);
        this.payload = c
    };
    _.P(YI, PI);
    var ZI = function() {
        PI.apply(this, arguments)
    };
    _.P(ZI, PI);
    var Mn = new w.Set,
        $I = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.q.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Mk("Reached Limit for addEventListener");
        }, 3E5),
        aJ = function(a, b, c) {
            eF.call(this, a);
            this.C = b;
            this.j = [];
            this.m = !1;
            this.F = 0;
            this.B = new w.Map;
            Mn.add(this);
            this.C.info(UF(this.getName()));
            this.l = null != c ? c : this
        };
    _.P(aJ, eF);
    aa = aJ.prototype;
    aa.enable = function() {
        this.m || (this.m = !0, vk(6), this.U())
    };
    aa.slotAdded = function(a, b) {
        this.j.push(a);
        var c = new UI(a, this.getName());
        this.l.dispatchEvent("slotAdded", 818, c);
        this.C.info(WF(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        bs(b, 4, a)
    };
    aa.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return fa(b.j, c)
        })
    };
    aa.addEventListener = function(a, b) {
        var c = this;
        if (this.F >= _.xe(Sv) && 0 < _.xe(Sv)) $I();
        else {
            var d;
            null != (d = this.B.get(a)) && d.has(b) || (this.B.has(a) || this.B.set(a, new w.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.C.error(mG(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, (0, D.J)(this.B.get(a)).set(b, d), gF(this.l, a, d), this.F++)
        }
    };
    aa.removeEventListener = function(a, b) {
        var c, d = null == (c = this.B.get(a)) ? void 0 : c.get(b);
        if (!d || !fF(this.l, a, d)) return !1;
        this.F--;
        return (0, D.J)(this.B.get(a)).delete(b)
    };
    var Bn = function(a) {
        for (var b = _.B(Mn), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var Jn = function(a, b, c, d) {
        aJ.call(this, a, b, d);
        this.H = c;
        this.ads = new w.Map;
        this.O = this.pb = !1;
        _.Ae(uk).I = !0
    };
    _.P(Jn, aJ);
    Jn.prototype.slotAdded = function(a, b) {
        var c = this;
        gF(a, jF, function(d) {
            F(d.detail, 11) && (bJ(c, a).uf = !0)
        });
        aJ.prototype.slotAdded.call(this, a, b)
    };
    Jn.prototype.U = function() {};
    Jn.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.pb = a)
    };
    var SG = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.O && gi("ima_sdk_v", function(c) {
                a.O = !0;
                L(c, "v", b)
            });
            return String(es())
        },
        QG = function(a, b) {
            var c = $h().j,
                d = $h().m;
            if (a.H.m) {
                var e = {
                    fb: 3
                };
                a.M && (e.Gb = a.M);
                a.Z && (e.Hb = a.Z);
                b = null != b ? b : a.j;
                c = Mh(c, d);
                d = e.Gb;
                var f = e.Hb;
                d && "number" !== typeof d || f && "number" !== typeof f || a.H.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.C.error(bG(b[0].getDomId()))
        },
        TG = function(a, b) {
            var c;
            return a.H.m && !(null == (c = a.ads.get(b)) || !c.uf)
        },
        RG = function(a, b) {
            return a.j.filter(function(c) {
                return _.t(b, "includes").call(b, c.toString())
            })
        };
    Jn.prototype.getName = function() {
        return "companion_ads"
    };
    Jn.prototype.K = function() {};
    var UG = function(a, b, c, d) {
            b = new QI(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.l.dispatchEvent("slotRenderEnded", 67, b)
        },
        bJ = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Jm(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var Hn = function(a, b, c) {
        aJ.call(this, a, b, c)
    };
    _.P(Hn, aJ);
    Hn.prototype.getName = function() {
        return "content"
    };
    Hn.prototype.U = function() {};
    Hn.prototype.K = function() {};
    var cJ = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        dJ = function(a, b) {
            if (!_.t(a.m, "includes").call(a.m, b) && (E = [1, 2, 3], _.t(E, "includes")).call(E, b)) {
                var c = xz[b];
                if (c) {
                    var d = b + "_hostpage_library";
                    if (c = Gj(document, c)) c.id = d
                }
                a.m.push(b);
                b = new yz(b);
                a.hostpageLibraryTokens.push(b);
                a = rj();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        eJ = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new w.Set;
            a.j[b].add(c)
        },
        fJ = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.t(c, "values").call(c)) ? d : [];
            return [].concat(_.Od(a))
        };
    var gJ = _.Zq(function() {
            Vu("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        iJ = function(a) {
            var b = this;
            this.L = a;
            this.j = new w.Map;
            this.W = new w.Set;
            _.Ae(uk).D = function(c) {
                return hJ(b, c)
            }
        };
    iJ.prototype.defineSlot = function(a, b, c, d, e) {
        a = xk(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.vc || b.error(lj("googletag.defineSlot", [c, d, e]));
        return null
    };
    var xk = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Za: f,
            Yd: void 0 === g ? !1 : g
        }) : {}
    };
    iJ.prototype.add = function(a, b, c, d, e) {
        var f = this,
            g = void 0 === e ? {} : e;
        e = g.Za;
        var h = void 0 === g.format ? 0 : g.format,
            k = void 0 === g.Yd ? !1 : g.Yd;
        g = void 0 === g.kb ? !1 : g.kb;
        var l;
        if (l = _.G(Fv)) try {
            l = !RegExp("^[\\p{L}\\p{N}_\\-,\\.!\\*<>():/]{1,100}$", "u").test(c)
        } catch (p) {
            l = !1
        }
        if (l) return b.error(QF(c)), {
            vc: !0
        };
        var n = Ql(h, g);
        if (n) return gi("gpt_pla_ns", function(p) {
            L(p, "iu", c);
            L(p, "f", null != h ? h : "");
            L(p, "nsr", n);
            mi(p, a)
        }), vl(b, n, h, c), {};
        k && gJ();
        k = this.j.get(c) || Number(k);
        d = jJ(this, a, b, c, k, d, e || "gpt_unit_" + c + "_" + k);
        b = d.Xa;
        var m = d.slotId;
        d = d.vc;
        if (!m) return {
            vc: d
        };
        this.j.set(c, k + 1);
        this.W.add(m);
        _.Jm(m, function() {
            return void f.W.delete(m)
        });
        QD(c);
        return {
            slotId: m,
            Xa: b
        }
    };
    var dn = function(a, b) {
            a = _.B(a.W);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        Cn = function(a) {
            a = _.B(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.Ca()
        },
        jJ = function(a, b, c, d, e, f, g) {
            var h = dn(a, g);
            if (h) return c.error(PF(g, d, h.getAdUnitPath())), {
                vc: !0
            };
            var k = new pH;
            qH(_.A(k, 1, d), g);
            f = Lk(f);
            h = f.La;
            Sc(k, 5, f.zc);
            null !== h && _.Sg(k, 16, h);
            eE(k);
            var l = new Wd(b, d, e, g);
            bH(l, Pk(b, c, l));
            _.Jm(l, function() {
                var n = $h(),
                    m = l.getDomId();
                delete n.m[m];
                n.D.delete(l);
                n = l.getAdUnitPath();
                n = Mg(n);
                var p;
                m = (null != (p = mh.get(n)) ? p : 0) - 1;
                0 >= m ? mh.delete(n) : mh.set(n, m);
                c.info(oG(l.toString()), l);
                (p = ej.get(l)) && fj.delete(p);
                ej.delete(l)
            });
            c.info(FF(l.toString()), l);
            gF(l, kF, function(n) {
                n = n.detail.Df;
                c.info(GF(l.getAdUnitPath()), l);
                hy(_.Ae($g), "7", 9, yF(a.L, l), 0, n)
            });
            gF(l, jF, function(n) {
                var m = n.detail;
                c.info(HF(l.getAdUnitPath()), l);
                var p;
                n = _.Ae($g);
                var r = y(k, 20);
                m = null != (p = m.getEscapedQemQueryId()) ? p : "";
                n.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + r] = m)
            });
            gF(l, Co, function() {
                return void c.info(IF(l.getAdUnitPath()), l)
            });
            gF(l, Fo, function() {
                return void c.info(JF(l.getAdUnitPath()), l)
            });
            return {
                Xa: k,
                slotId: l
            }
        },
        hJ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Od(a.W)).some(function(d) {
                return c.test(Mg(d.getAdUnitPath()))
            })
        },
        On = function(a) {
            return fJ(_.Ae(cJ), a).map(function(b) {
                var c;
                return null == (c = Zh(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        };
    var kJ = Q(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        lJ = Q(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        mJ = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        nJ = Q(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        oJ = new w.Map([
            [2, {
                pf: "page_level_ads"
            }]
        ]),
        pJ = function(a) {
            var b = void 0 === b ? oJ : b;
            this.context = a;
            this.j = b;
            this.m = new w.Map;
            this.loaded = new w.Set
        },
        rJ;
    pJ.prototype.load = function(a) {
        var b = _.qJ(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).pf;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.Pg(172)) && "pagead2.googlesyndication.com" === Du((c.src || "").match(_.Cu)[3] || null) ? this.context.eb ? C(mJ, this.context.eb, d) : C(nJ, d, this.context.Ja) : this.context.eb ? C(kJ, this.context.eb, d) : C(lJ, d, this.context.Ja);
            d = {};
            var e = _.xe(Aw),
                f = _.xe(Xv);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.t(Object, "keys").call(Object, d).length ? (c = gr.exec(Va(c).toString()), e = c[3] || "", d = Ld(c[1] + hr("?", c[2] || "", d) + hr("#", e))) : d = c;
            rJ(this, a);
            Gj(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.qJ = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.ug);
        return (0, D.J)(a.m.get(b))
    };
    rJ = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.Yg(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = (0, D.J)(a.j.get(c));
                f = (void 0 === f.Be ? [] : f.Be).map(function(g) {
                    return _.qJ(a, g).promise
                });
                w.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(rj(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var sJ = function() {
        this.resources = {}
    };
    var Fp = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.G = e;
        this.A = bz(this);
        this.l = X(this, f);
        this.o = W(this, g);
        this.F = W(this, h);
        this.B = X(this, k)
    };
    _.P(Fp, Y);
    Fp.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && this.l.Rb() && Yo(this.l.value, 12, !1)) {
            var b = (0, D.J)(this.B.value).Le,
                c = _.Do(this.L, this.slotId),
                d = this.F.value,
                e = this.o.value;
            _.bi(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (tJ) tJ.bg(e);
            else {
                tJ = new b(this.context, this.format, e, this.G, d, this.L, this.slotId);
                b = {};
                d = _.B(Wc(this.l.value, Et, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[y(f, 1)] = y(f, 2);
                tJ.cg(b);
                tJ.ab();
                sF(this.L, this.slotId, function() {
                    tJ && (tJ.Ca(), tJ = null);
                    c && _.wF(a.L, a.slotId)
                })
            }
            _.Jm(this, function() {
                return _.zu(e)
            })
        }
        this.A.notify()
    };
    var tJ = null;
    var Gp = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.T = d;
        this.l = X(this, e);
        this.F = W(this, f);
        this.P = W(this, g);
        this.K = X(this, h);
        this.M = X(this, k);
        this.B = W(this, l);
        this.o = hF(b, so, function(n) {
            n = n.detail;
            try {
                var m = JSON.parse(n.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (p) {
                return !1
            }
        })
    };
    _.P(Gp, Y);
    Gp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m;
        return _.gb(function(p) {
            if (1 == p.j) {
                b = _.xe(nw);
                c = a.l.value;
                if (!c || 5 !== a.format) return p.return();
                Math.random() < _.xe(ow) && w.Promise.race([a.o.then(function() {
                    return !1
                }), new w.Promise(function(r) {
                    CF(a, a.id, window, "pagehide", function(u) {
                        u && r(!0)
                    })
                })]).then(function(r) {
                    var u = new Dj("int_pm");
                    L(u, "ts", Date.now());
                    L(u, "flg", b);
                    L(u, "qem", a.B.value);
                    L(u, "ph", Number(r));
                    Fj(u, 1)
                });
                d = a.P.value;
                e = a.F.value;
                f = (0, D.J)(a.M.value);
                g = f.Ve;
                h = new _.UD(a.context);
                n = (null == (k = a.l.value) ? 0 : ok(k, 14)) ? 60 * (0, D.J)(null == (l = a.l.value) ? void 0 : y(l, 14)) : 604800;
                m = new g(window, e, d, h, a.T, qo(Wc(c, Et, 13)), Gl(a.slotId), function() {
                    return void a.Ca()
                }, n, a.K.value);
                _.Cm(a, m);
                switch (b) {
                    case 0:
                        m.fa();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return hb(p, a.o, 4);
                if (a.I) return p.return();
                m.fa(!0)
            }
            p.j = 0
        })
    };
    var uJ = function() {
        this.module = 2
    };
    uJ.prototype.toString = function() {
        return String(this.module)
    };
    _.vJ = new uJ;
    var Bp = function(a, b, c, d, e, f) {
        Y.call(this, a, 846);
        this.B = b;
        this.format = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e);
        f && dz(this, f)
    };
    _.P(Bp, Y);
    Bp.prototype.j = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !Yo(a, 12, !1));
        a = 5 === this.format && this.o.value;
        b || a ? Ry(this.A, this.B.load(_.vJ)) : Qy(this.A)
    };
    var wJ = function(a, b, c, d, e, f) {
        Y.call(this, a, 696);
        this.slotId = b;
        this.xa = c;
        dz(this, d);
        ez(this, [e, f])
    };
    _.P(wJ, Y);
    wJ.prototype.j = function() {
        this.xa.dispatchEvent("rewardedSlotClosed", 703, new ZI(this.slotId, "publisher_ads"))
    };
    var xJ = function(a, b, c, d, e) {
        Y.call(this, a, 694);
        this.slotId = b;
        this.xa = c;
        dz(this, d);
        this.l = X(this, e)
    };
    _.P(xJ, Y);
    xJ.prototype.j = function() {
        var a, b = null == (a = this.l.value) ? void 0 : a.payload;
        this.xa.dispatchEvent("rewardedSlotGranted", 702, new YI(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var yJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        zJ = function(a, b, c, d, e, f) {
            Y.call(this, a, 693);
            this.G = b;
            this.F = f;
            this.A = bz(this);
            this.l = W(this, c);
            this.o = W(this, d);
            dz(this, e);
            this.B = new _.vD(this.G)
        };
    _.P(zJ, Y);
    zJ.prototype.j = function() {
        var a = this;
        if (!this.F.rb) {
            var b = 0 === (0, _.Ml)() ? "rgba(1,1,1,0.5)" : "white";
            _.bi(this.o.value, _.t(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, yJ));
            _.Jm(this, _.ED(this.G.document, this.G));
            Id(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.G === this.G.top) {
                this.G.location.hash = "goog_rewarded";
                var c = new _.yD(this.B);
                _.zD(c);
                _.Jm(this, function() {
                    _.AD(c);
                    "goog_rewarded" === a.G.location.hash && (a.G.location.hash = "")
                })
            }
            this.A.notify()
        }
    };
    var AJ = function(a, b, c, d) {
        Y.call(this, a, 695);
        this.G = b;
        this.l = W(this, c);
        dz(this, d)
    };
    _.P(AJ, Y);
    AJ.prototype.j = function() {
        if (this.G === this.G.top) var a = (0, D.J)(Id(this.l.value)),
            b = CF(this, 503, this.G, "hashchange", function(c) {
                ir(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var BJ = function(a, b, c, d) {
        Y.call(this, a, 692);
        this.slotId = b;
        this.xa = c;
        this.A = bz(this);
        this.l = W(this, d)
    };
    _.P(BJ, Y);
    BJ.prototype.j = function() {
        var a = this.l.value,
            b = new _.ug,
            c = b.promise,
            d;
        this.xa.dispatchEvent("rewardedSlotReady", 701, new XI(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        Yy(this.A, c)
    };
    var CJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        DJ = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        EJ = function(a, b, c, d, e) {
            Y.call(this, a, 691);
            this.B = V(this);
            this.o = bz(this);
            this.F = W(this, c);
            this.l = ez(this, [d, e])
        };
    _.P(EJ, Y);
    EJ.prototype.j = function() {
        "ha_before_make_visible" === this.l.value.message ? this.o.notify() : (_.bi(this.F.value, _.t(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Ml)() ? DJ : CJ)), this.B.j(this.l.value))
    };
    var FJ = function() {
        Y.apply(this, arguments);
        this.value = this.promise = null;
        this.A = V(this)
    };
    _.P(FJ, Y);
    FJ.prototype.j = function() {
        var a = this;
        this.promise.then(function() {
            return void Py(a.A, a.value)
        })
    };
    var ro = function(a, b, c, d) {
        FJ.call(this, a, 1061);
        var e = this;
        this.promise = hF(b, c, function(f) {
            return null !== (e.value = d(f))
        })
    };
    _.P(ro, FJ);
    var Hp = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 688);
        if (4 === c) {
            this.va = new nf;
            _.Cm(this, this.va);
            c = to(b, "granted", a);
            H(this.va, c);
            var h = to(b, "prefetched", a);
            H(this.va, h);
            var k = to(b, "closed", a);
            H(this.va, k);
            a = to(b, "ha_before_make_visible", a);
            H(this.va, a);
            var l = new EJ(this.context, b, f, h.A, a.A);
            H(this.va, l);
            h = new BJ(this.context, b, d, l.B);
            H(this.va, h);
            g = new zJ(this.context, e, f, g, h.A, l.o);
            H(this.va, g);
            H(this.va, new AJ(this.context, e, f, g.A));
            H(this.va, new xJ(this.context, b, d, h.A, c.A));
            H(this.va, new wJ(this.context, b, d, h.A, k.A, a.A))
        }
    };
    _.P(Hp, Y);
    Hp.prototype.j = function() {
        var a;
        null == (a = this.va) || Bf(a)
    };
    var GJ = function(a, b, c) {
        _.yv.call(this);
        this.context = a;
        this.C = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.Me ? "fluid" : [b.width, b.height];
        this.Sb = Xh(a);
        this.Tb = wn
    };
    _.P(GJ, _.yv);
    GJ.prototype.render = function() {
        var a = this.C,
            b = this.m,
            c = b.slotId,
            d = b.N.R,
            e = b.X,
            f = b.size,
            g = b.Fb,
            h = b.Ge,
            k = b.isBackfill;
        b = b.ec;
        g && Bg(g, _.xu(e), null != h ? h : "", !1);
        Bo(_.Ae($g), "5", (0, D.J)(y(d[c.getDomId()], 20)));
        a = c.dispatchEvent(Co, 801, {
            Fd: 0 === a.kind ? a.Ka : "",
            isBackfill: k
        });
        d = this.H();
        b && d && d.setAttribute("data-google-container-id", b);
        _.G(Eo) ? a.then(function() {
            c.dispatchEvent(Fo, 825, {
                size: f,
                isEmpty: !1
            })
        }) : c.dispatchEvent(Fo, 825, {
            size: f,
            isEmpty: !1
        });
        return d
    };
    GJ.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.xa;
        b = b.N.R;
        c.dispatchEvent(nF, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new TI(c, "publisher_ads"));
        Bo(_.Ae($g), "6", (0, D.J)(y(b[c.getDomId()], 20)))
    };
    var HJ = function(a, b) {
        if (b) return null;
        a = a.C;
        a = 0 === a.kind ? a.Ka : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Lg(d, 2) : (c && Lg(d, 3), a = _.G(fx) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Lg(d, 1);
        return a
    };
    GJ.prototype.D = function() {
        _.yv.prototype.D.call(this);
        var a;
        null == (a = this.m.Fb) || a.removeAttribute("data-google-query-id")
    };
    GJ.prototype.o = function(a, b) {
        var c = this,
            d = IJ(this, function() {
                return void c.loaded((0, D.J)(d.j))
            }, a, b);
        _.Jm(this, function() {
            100 != d.status && (2 == d.O && (AE(d.D), d.O = 0), window.clearTimeout(d.F), d.F = -1, d.o = 3, d.m && (d.m.Ca(), d.m = null), _.Sd(window, "resize", d.wa), _.Sd(window, "scroll", d.wa), d.l && d.j && d.l == _.Au(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var IJ = function(a, b, c, d) {
        var e = a.m,
            f = e.ge,
            g = e.isBackfill,
            h = e.We,
            k = e.ec,
            l = e.yc,
            n = e.Wc,
            m = Array.isArray(a.j) ? new _.Jh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new IE({
            pd: e.Ed,
            Sb: a.Sb,
            Tb: a.Tb,
            content: HJ(a, d),
            size: m,
            Fe: !!h,
            Wd: b,
            he: null != f ? f : void 0,
            permissions: {
                wc: ok(c, 1) ? !!F(c, 1) : !g,
                xc: ok(c, 2) ? !!F(c, 2) : !1
            },
            Ub: !!rj().fifWin,
            Ef: aH ? aH : aH = dk(),
            ye: hk(),
            hostpageLibraryTokens: _.Ae(cJ).hostpageLibraryTokens,
            Ia: function(p, r) {
                return void bh(a.context, p, r)
            },
            uniqueId: (0, D.J)(k),
            fe: _.G(Dw) ? Oh() : fE(),
            yc: null != l ? l : void 0,
            Dc: null != d ? d : void 0,
            Wc: null != n ? n : void 0
        })
    };
    var vo = function() {
        GJ.apply(this, arguments)
    };
    _.P(vo, GJ);
    vo.prototype.H = function() {
        var a = this.m,
            b = a.N,
            c = b.V;
        a = b.R[a.slotId.getDomId()];
        b = new ik;
        c = pk([b, c.Sa(), null == a ? void 0 : a.Sa()]);
        c = GJ.prototype.o.call(this, c);
        return (0, D.J)(c.j)
    };
    vo.prototype.l = function() {
        return !1
    };
    var JJ = function() {
        GJ.apply(this, arguments)
    };
    _.P(JJ, GJ);
    var KJ = function(a, b) {
            var c = _.Dd(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Sb;
            c.name = a.Sb;
            c.title = a.Tb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        LJ = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.Yg(a.context, 774, function() {
                a.loaded(b);
                _.Sd(b, "load", c)
            });
            _.eb(b, "load", c);
            _.Jm(a, function() {
                return _.Sd(b, "load", c)
            });
            a.m.Ed.appendChild(b)
        };
    var wo = function() {
        JJ.apply(this, arguments)
    };
    _.P(wo, JJ);
    wo.prototype.H = function() {
        var a = this,
            b = this.m,
            c = b.ge;
        b = b.yc;
        var d = KJ(this);
        if (null == c ? 0 : c.length)
            if (_.Br) {
                c = _.B(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Od(c));
        b && (d.allow = b);
        LJ(this, d);
        _.eh(this.context, 653, function() {
            var f = new gg(a.C.Ka, hg);
            var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? uo(2) : (uo(3), f = _.G(fx) ? f : new gg("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>", hg));
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ia() && g.open("text/html", "replace");
            Za(g, f);
            var l, n, m;
            if (ir(null != (m = null == (l = d.contentWindow) ? void 0 : null == (n = l.location) ? void 0 : n.href) ? m : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    wo.prototype.l = function() {
        return !0
    };
    var yo = function() {
        JJ.apply(this, arguments)
    };
    _.P(yo, JJ);
    yo.prototype.H = function() {
        var a = KJ(this, !this.m.Nf);
        Ci(a, this.C.vd);
        LJ(this, a);
        return a
    };
    yo.prototype.l = function() {
        return !1
    };
    var xo = function() {
        JJ.apply(this, arguments)
    };
    _.P(xo, JJ);
    xo.prototype.H = function() {
        var a = this.C.url,
            b = this.m,
            c = b.N,
            d = c.V;
        b = c.R[b.slotId.getDomId()];
        d = pk([d.Sa(), null == b ? void 0 : b.Sa()]);
        var e = KJ(this);
        Ci(e, a);
        JJ.prototype.o.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            MJ(a)
        };
        e.addEventListener("load", f);
        $u(e, function() {
            return void MJ(a)
        });
        return e
    };
    var MJ = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.Dd("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    xo.prototype.l = function() {
        return !1
    };
    var Dp = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Z, ba, ia) {
        Y.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.N = d;
        this.xa = e;
        this.G = f;
        this.l = V(this);
        this.B = V(this);
        this.o = bz(this);
        this.K = W(this, g);
        this.qa = W(this, h);
        dz(this, k);
        this.ca = W(this, l);
        this.F = W(this, n);
        this.Y = W(this, m);
        dz(this, K);
        this.M = W(this, p);
        this.P = X(this, r);
        this.ya = X(this, u);
        this.T = W(this, v);
        this.oa = X(this, x);
        this.Ha = X(this, I);
        dz(this, M);
        this.ma = W(this, S);
        dz(this, T);
        ia && dz(this, ia);
        this.ha = X(this, Z);
        this.la = X(this, ba)
    };
    _.P(Dp, Y);
    Dp.prototype.j = function() {
        var a = this,
            b = this.K.value;
        if (0 === b.kind && null == b.Ka) throw new iy("invalid html");
        var c;
        b = zo(this.context, b, {
            X: document,
            slotId: this.slotId,
            L: this.L,
            N: this.N,
            xa: this.xa,
            size: this.Y.value,
            Fb: this.ca.value,
            Ed: this.F.value,
            Ge: this.M.value,
            Me: this.P.value,
            ge: this.ya.value,
            isBackfill: this.T.value,
            We: this.oa.value,
            ec: this.Ha.value,
            yc: this.ma.value,
            Nf: null == (c = this.ha.value) ? void 0 : Yo(c, 14),
            Wc: this.la.value
        }, {
            Pf: this.qa.value
        });
        _.Cm(this, b);
        var d = b.render();
        CF(this, this.id, this.G, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(so, 824, e)
        });
        this.o.notify();
        this.l.j(d);
        this.B.j(b.l())
    };
    var Jp = function(a, b, c, d, e) {
        Y.call(this, a, 863);
        this.l = c;
        this.ub = Number(b);
        this.o = W(this, d);
        this.B = W(this, e);
        this.F = NJ(this)
    };
    _.P(Jp, Y);
    var NJ = function(a) {
        return _.gb(function(b) {
            return b.return(new w.Promise(function(c) {
                try {
                    CF(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && Po(Yd(lD, d.data.payload), 1) === a.ub && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    Jp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.gb(function(h) {
            if (1 == h.j) return b = Ao(a.l), c = a.o.value, d = a.B.value, hb(h, a.F, 2);
            e = h.m;
            var k = a.l,
                l = Ao(k);
            var n = c.getBoundingClientRect();
            var m = Hd(k) ? Fh(c, k) : {
                x: 0,
                y: 0
            };
            k = m.x;
            m = m.y;
            n = new _.cv(m, k + n.right, m + n.bottom, k);
            k = new nD;
            k = _.A(k, 1, n.top);
            k = _.A(k, 3, n.bottom);
            k = _.A(k, 2, n.left);
            n = _.A(k, 4, n.right);
            k = new mD;
            k = _.A(k, 1, a.ub);
            k = _.A(k, 2, !d);
            n = _.Sg(k, 3, n);
            n = _.A(n, 4, b);
            f = _.A(n, 5, l);
            g = {
                type: "asmres",
                payload: ce(f)
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var wp = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
        Y.call(this, a, 699);
        this.X = b;
        this.slotId = c;
        this.l = d;
        this.Ib = e;
        this.A = bz(this);
        this.K = X(this, f);
        this.P = W(this, g);
        this.B = W(this, h);
        this.M = W(this, k);
        this.o = X(this, l);
        this.T = W(this, n);
        this.F = W(this, m);
        p && dz(this, p)
    };
    _.P(wp, Y);
    wp.prototype.j = function() {
        var a = this.P.value,
            b = this.B.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.K.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.T.value,
                f = this.F.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.X,
                        k = this.slotId,
                        l = this.l,
                        n = this.Ib;
                    var m = c.width,
                        p = c.height,
                        r = 0;
                    var u = 0;
                    var v = vh(l);
                    v = _.B(v);
                    for (var x = v.next(); !x.done; x = v.next()) {
                        var I = x.value;
                        Array.isArray(I) && (x = (0, D.ta)(I[0]), I = (0, D.ta)(I[1]), r < x && (r = x), u < I && (u = I))
                    }
                    u = [r, u];
                    r = u[0] < m;
                    p = u[1] < p;
                    if (r || p) {
                        u = m + "px";
                        v = {
                            "max-height": "none",
                            "max-width": u,
                            padding: "0px",
                            width: u
                        };
                        p && (v.height = "auto");
                        ci(b, a, v);
                        b = {};
                        r && (r = ai(e.width), m > r && (b.width = u, b["max-width"] = u));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (K in b)
                                if (Object.prototype.hasOwnProperty.call(b, K)) {
                                    var K = !1;
                                    break c
                                }
                            K = !0
                        }
                        K ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.bi(a, b), b = !0)
                    } else b = !1;
                    b: switch (u = c.width, K = h.defaultView || h.parentWindow || _.q, d) {
                        case 2:
                            a = di(a, K, u, e, n);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (n = Kh(e)) {
                                    x = n.width;
                                    n = Qh(k, K.document);
                                    m = (0, D.J)(Sh(n, K));
                                    p = m.position;
                                    I = ai(m.width) || 0;
                                    r = Sh(e, K);
                                    v = "rtl" === r.direction ? "Right" : "Left";
                                    n = v.toLowerCase();
                                    K = "absolute" === p ? 0 : ai(r["padding" + v]);
                                    r = ai(r["border" + v + "Width"]);
                                    u = Math.max(Math.round((x - Math.max(I, u)) / 2), 0);
                                    x = {};
                                    I = 0;
                                    var M = Su(m);
                                    M && (I = M[4] * ("Right" === v ? -1 : 1), v = M[3] || 1, 1 !== (M[0] || 1) || 1 !== v) && (M[0] = 1, M[3] = 1, x.transform = "matrix(" + M.join(",") + ")");
                                    v = 0;
                                    switch (p) {
                                        case "fixed":
                                            var S, T = null != (S = Number(Th(m.getPropertyValue(n)))) ? S : 0,
                                                Z;
                                            S = null != (Z = e.getBoundingClientRect().left) ? Z : 0;
                                            v = T - S;
                                            break;
                                        case "relative":
                                            v = null != (T = Number(Th(m.getPropertyValue(n)))) ? T : 0;
                                            break;
                                        case "absolute":
                                            x[n] = "0"
                                    }
                                    x["margin-" + n] = u - K - r - v - I + "px";
                                    _.bi(a, x);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (fi(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.X, h = this.slotId, k = this.l, S = this.Ib, l = c.width, Z = c.height, T = ai(e.height) || 0, Z >= T || "none" === e.display || "hidden" === e.visibility || !S || -12245933 === S.width || a.getBoundingClientRect().bottom <= S.height ? g = !1 : (S = {
                        height: Z + "px"
                    }, ci(b, a, S), _.bi(a, S), fi(d, g, h, k, 3, l, Z, "gpt_slotred", f), g = !0)
            }!g && _.G(Iv) && fi(this.context, this.X, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.A.notify()
    };
    var Ap = function(a, b) {
        Y.call(this, a, 1020);
        this.G = b;
        this.A = V(this)
    };
    _.P(Ap, Y);
    Ap.prototype.j = function() {
        var a = this.G;
        a = _.G(Ww) && void 0 !== a.credentialless && (_.G(Xw) || a.crossOriginIsolated);
        this.A.j(a)
    };
    var ep = function(a, b, c, d, e) {
        Y.call(this, a, 720);
        this.format = b;
        this.B = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e)
    };
    _.P(ep, Y);
    ep.prototype.j = function() {
        var a = this.o.value;
        if (null == a) Qy(this.A);
        else {
            var b = Math.round(.3 * this.B),
                c;
            2 !== this.format && 3 !== this.format || null == (c = this.l.value) || !Yo(c, 12, !1) || 0 >= b || a <= b ? this.A.j(a) : this.A.j(b)
        }
    };
    var pp = function(a, b, c) {
        Y.call(this, a, 1054);
        this.l = b;
        this.A = bz(this);
        this.o = W(this, c)
    };
    _.P(pp, Y);
    pp.prototype.j = function() {
        this.o.value || this.l();
        this.A.notify()
    };
    var rp = function(a, b, c, d, e, f, g, h, k, l, n, m) {
        Y.call(this, a, 674);
        this.slotId = b;
        this.V = c;
        this.o = d;
        this.X = f;
        this.L = g;
        this.A = V(this);
        this.F = 2 === e || 3 === e;
        this.l = W(this, h);
        this.M = W(this, k);
        this.K = X(this, l);
        this.B = X(this, n);
        m && dz(this, m)
    };
    _.P(rp, Y);
    rp.prototype.j = function() {
        var a = Ch(this.V, this.o),
            b = Ph(this.slotId, this.X) || Tl(this.l.value, Yh(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.F ? sF(this.L, this.slotId, function() {
            return void _.zu(b)
        }) : _.Jm(this, function() {
            return void _.zu(b)
        });
        a = OJ(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.A.j(b)
    };
    var OJ = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.K.value) ? void 0 : c.height;
        if (b && !a.B.value && d) {
            var e;
            c = (null != (e = F(a.o, 23)) ? e : F(a.V, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var $o = function(a, b) {
        Y.call(this, a, 859);
        this.G = b;
        this.A = V(this)
    };
    _.P($o, Y);
    $o.prototype.j = function() {
        this.A.j(!Hd(this.G.top))
    };
    var up = function(a, b, c) {
        Y.call(this, a, 698);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.P(up, Y);
    up.prototype.j = function() {
        Py(this.A, Sh(this.l.value, this.G))
    };
    var zp = function(a, b, c) {
        Y.call(this, a, 840);
        this.format = b;
        this.X = c;
        this.A = V(this)
    };
    _.P(zp, Y);
    zp.prototype.j = function() {
        var a = [],
            b = this.X;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (E = c.features(), _.t(E, "includes")).call(E, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.G(Ev) || a.push("autoplay");
        a.length ? this.A.j(a.join(";")) : this.A.j("")
    };
    var Ep = function(a, b, c, d, e) {
        Y.call(this, a, 934);
        this.G = b;
        this.slotId = c;
        dz(this, d);
        this.l = W(this, e)
    };
    _.P(Ep, Y);
    Ep.prototype.j = function() {
        var a = this;
        gF(this.slotId, so, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new Tt;
                    var h = _.A(g, 1, d ? "1" : "0");
                    var k = _.A(h, 2, 2147483647);
                    var l = _.A(k, 3, "/");
                    var n = _.A(l, 4, a.G.location.hostname);
                    var m = new rz(a.G);
                    uz(m, "__gpi_opt_out", n, f);
                    if (d || e) vz(m, "__gads", f), vz(m, "__gpi", f)
                }
            } catch (p) {}
        })
    };
    var op = function(a, b, c, d, e, f) {
        Y.call(this, a, 1053);
        this.slotId = b;
        this.N = c;
        this.L = d;
        this.l = V(this);
        this.o = W(this, e);
        this.B = W(this, f)
    };
    _.P(op, Y);
    op.prototype.j = function() {
        this.B.value ? (Go(this.slotId, this.L, this.N, this.o.value), this.l.j(!1)) : this.l.j(!0)
    };
    var Lp = function(a, b, c, d, e, f) {
        Y.call(this, a, 721);
        this.G = b;
        this.F = X(this, c);
        this.o = W(this, d);
        this.l = W(this, e);
        this.B = W(this, f)
    };
    _.P(Lp, Y);
    Lp.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c, d = null == b ? void 0 : null == (c = y(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = y(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.B.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                n = Ho(e.id + "_top", d),
                m = Ho(e.id + "_bottom", b);
            _.bi(m, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(n);
            f.appendChild(m);
            _.bi(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.bi(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.bi(f, {
                position: "relative",
                display: (null == (p = this.G.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            CF(this, 722, this.G, "orientationchange", function() {
                var r;
                (null == (r = a.G.screen.orientation) ? 0 : r.angle) ? _.bi(f, {
                    display: "none"
                }): _.bi(f, {
                    display: "block"
                })
            });
            _.Jm(this, function() {
                _.zu(n);
                _.zu(m);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var Ip = function(a, b, c, d, e, f) {
        f = void 0 === f ? Jo : f;
        Y.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.X = d;
        this.xa = e;
        this.K = f;
        this.F = !1;
        this.l = null;
        this.B = this.o = -1;
        this.P = _.Zq(function() {
            g.xa.dispatchEvent("impressionViewable", 715, new RI(g.slotId, "publisher_ads"))
        });
        this.T = $q(function() {
            g.xa.dispatchEvent("slotVisibilityChanged", 716, new SI(g.slotId, "publisher_ads", g.B))
        }, 200);
        this.M = W(this, c);
        var h = new Xy;
        hF(this.slotId, nF).then(function() {
            return void h.notify()
        });
        dz(this, h)
    };
    _.P(Ip, Y);
    Ip.prototype.j = function() {
        var a = this,
            b = this.K(_.Yg(this.context, this.id, function(c) {
                c = _.B(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.t(Number, "isFinite").call(Number, a.o) && PJ(a)
            }));
        b.observe(this.M.value);
        CF(this, this.id, this.X, "visibilitychange", function() {
            PJ(a)
        });
        _.Jm(this, function() {
            b.disconnect()
        })
    };
    var PJ = function(a) {
            var b = !qD(a.X);
            QJ(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.B ? 0 : -1 !== a.B || 0 !== b) a.B = b, a.T()
        },
        QJ = function(a, b) {
            a.F || (b ? null === a.l && (a.l = setTimeout(function() {
                qD(a.X) || (a.P(), a.F = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var RJ = Q(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""]),
        Cp = function(a, b, c) {
            Y.call(this, a, 1007);
            this.l = X(this, b);
            c && dz(this, c)
        };
    _.P(Cp, Y);
    Cp.prototype.j = function() {
        var a = this.l.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = db(RJ, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof $f) throw new vr("TrustedResourceUrl", 2);
            a = _.Qa(a);
            void 0 !== a && (b.src = a);
            for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length;) b.sandbox.remove(b.sandbox.item(0));
            for (var c = 0; c < a.length; c++) b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var ip = function(a, b, c) {
        Y.call(this, a, 666);
        this.o = b;
        this.l = V(this);
        this.B = X(this, c)
    };
    _.P(ip, Y);
    ip.prototype.j = function() {
        var a = new jp;
        if (this.B.Rb()) {
            var b = _.A(a, 2, this.B.value);
            _.A(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new jp;
            a = _.B(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, ok(c, 1) && _.A(b, 1, y(c, 1)), ok(c, 2) && _.A(b, 2, y(c, 2)), ok(c, 3) && _.A(b, 3, Ee(c, 3));
            a = b
        }
        b = this.l;
        a = ok(a, 2) ? ok(a, 3) && 0 !== (0, _.Ml)() ? (0, D.ta)(y(a, 2)) * (0, D.ta)(Ee(a, 3)) : y(a, 2) : null;
        Py(b, a)
    };
    var vp = function(a, b, c, d, e, f, g) {
        f = void 0 === f ? Lo : f;
        Y.call(this, a, 666);
        this.o = f;
        this.A = bz(this);
        dz(this, b);
        g && dz(this, g);
        this.l = W(this, c);
        this.F = X(this, d);
        this.B = X(this, e)
    };
    _.P(vp, Y);
    vp.prototype.j = function() {
        var a = this.B.value,
            b = this.F.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !Uh(c) ? this.A.notify() : SJ(this, a, b, c)
    };
    var SJ = function(a, b, c, d) {
        var e = a.o(b, _.Yg(a.context, 291, function(f, g) {
            f = _.B(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.A.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.A.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.Jm(a, function() {
            e.disconnect()
        })
    };
    var tp = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 664);
        this.slotId = b;
        this.Ib = c;
        this.L = d;
        this.A = bz(this);
        this.o = W(this, e);
        this.l = X(this, f);
        g && dz(this, g)
    };
    _.P(tp, Y);
    tp.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.Ml)() || 0 < c) {
            var d = document;
            b = pD(d);
            if (qD(d) && b && (0 < yF(this.L, this.slotId) || !TJ(this)) && b) {
                var e = CF(this, 324, d, b, function() {
                    qD(d) || (e && e(), a.A.notify())
                });
                if (e) return
            }
        }
        this.A.notify()
    };
    var TJ = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = hm(null == d ? void 0 : d.document, d).y,
                f = e + a.Ib.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var qp = function(a, b, c) {
        Y.call(this, a, 1055);
        this.A = bz(this);
        dz(this, c);
        this.l = W(this, b)
    };
    _.P(qp, Y);
    qp.prototype.j = function() {
        this.l.value && this.A.notify()
    };
    var hp = function(a, b, c, d, e, f) {
        Y.call(this, a, 669);
        this.V = b;
        this.R = c;
        this.G = d;
        this.A = V(this);
        this.o = X(this, e);
        this.l = W(this, f)
    };
    _.P(hp, Y);
    hp.prototype.j = function() {
        if (bk(Gv) || !_.G(Kk) && wh(this.R, xh, 16) && Zl("google_range_debug", this.G)) this.A.j(!0);
        else {
            var a, b = !(null == (a = this.o.value) || !y(a, 1)) && (F(this.R, 12) || F(this.V, 13)) || this.l.value;
            this.A.j(!!b)
        }
    };
    var xp = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 719);
        this.V = b;
        this.B = c;
        this.A = V(this);
        this.l = W(this, d);
        this.F = W(this, e);
        this.o = X(this, f);
        this.K = X(this, g)
    };
    _.P(xp, Y);
    xp.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.Ka)
                    if (this.F.value) UJ(this);
                    else {
                        if (a = this.o.value) a = Ou(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? Py(this.A, _.G(Bw) ? null : NE) : Qy(this.A)
                    }
                else Qy(this.A);
                break;
            case 1:
                UJ(this);
                break;
            case 2:
                Qy(this.A);
                break;
            default:
                Ra(a)
        }
    };
    var UJ = function(a) {
        var b = a.K.value,
            c = new ik;
        b = _.A(c, 3, b);
        F(pk([b, a.V.Sa(), a.B.Sa()]), 3) ? a.A.j(NE) : Qy(a.A)
    };
    var kp = function(a, b, c, d, e, f, g, h, k, l, n) {
        Y.call(this, a, 681);
        this.adUnitPath = b;
        this.ha = c;
        this.P = d;
        this.window = e;
        this.K = f;
        this.Ga = V(this);
        this.M = V(this);
        this.mc = V(this);
        this.l = bk(Gv).split(",");
        this.o = ef(Hv);
        this.La = Me(c, xh, 16);
        this.B = Yl("google_range_debug", this.window);
        this.T = X(this, g);
        this.la = X(this, h);
        this.Y = X(this, k);
        this.F = W(this, l);
        this.ca = W(this, n)
    };
    _.P(kp, Y);
    kp.prototype.j = function() {
        if (this.K) VJ(this);
        else {
            var a;
            if (a = !!(this.l.length || this.La && this.B)) {
                b: if (this.l.length) {
                    if (this.o.length && (a = this.adUnitPath.split("/"), !_.t(this.o, "includes").call(this.o, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? WJ(this) : null;
                if (b && a) {
                    b = this.ca.value;
                    var c, d, e = null != (d = null == (c = Kh(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.P : d && 0 < d ? d : c ? Math.min(e, this.P) : null) {
                        d = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        XJ(this, c, d, {
                            kind: 0,
                            Ka: YJ(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (!_.G(Kk) && this.La && this.B) {
                    a = pm(this.La, this.window);
                    b = qm(this.La, this.window);
                    e = rm(this.La);
                    c = sm(this.La);
                    switch (this.B) {
                        case "max":
                            d = a;
                            f = b;
                            break;
                        case "min":
                            d = e;
                            f = c;
                            break;
                        case "banner":
                            d = a;
                            f = 90 > b ? b : 90 < c ? c : 90;
                            break;
                        case "skyscraper":
                            d = 90 > a ? a : 90 < e ? e : 90;
                            f = b;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    XJ(this, d, f, {
                        kind: 0,
                        Ka: YJ(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else a = !1
            }
            a || VJ(this)
        }
    };
    var WJ = function(a) {
            a = vh(a.ha)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Jh(a[0], a[1]) : null
        },
        YJ = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        XJ = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.T.value : e;
            a.M.j(new _.Jh(b, c));
            a.Ga.j(d);
            Py(a.mc, e);
            f && _.jv(f, "opacity", .5)
        },
        VJ = function(a) {
            var b = a.la.value,
                c = a.Y.value;
            if (a.K) XJ(a, null != b ? b : 0, null != c ? c : 0, a.F.value);
            else {
                if (null == b) throw new Mk("Missing 'width'.");
                if (null == c) throw new Mk("Missing 'height'.");
                XJ(a, b, c, a.F.value)
            }
        };
    var fp = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 673);
        this.slotId = b;
        this.Fb = c;
        this.F = d;
        this.B = e;
        this.X = f;
        this.l = g;
        this.L = h;
        this.o = k;
        this.A = V(this)
    };
    _.P(fp, Y);
    fp.prototype.j = function() {
        var a = this,
            b, c;
        return _.gb(function(d) {
            if (1 == d.j) {
                if (a.Fb) {
                    ZJ(a, a.Fb);
                    a.A.j(a.Fb);
                    d.j = 0;
                    return
                }
                if (Bh(a.l)) {
                    a.A.j($J(a));
                    d.j = 0;
                    return
                }
                return hb(d, hF(a.slotId, iF), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.I) return d.return();
            ZJ(a, c);
            a.A.j(c);
            d.j = 0
        })
    };
    var $J = function(a) {
            var b = _.Dd("INS");
            b.id = a.F;
            _.bi(b, {
                display: "none"
            });
            a.X.documentElement.appendChild(b);
            var c = function() {
                return void _.zu(b)
            };
            2 === a.l || 3 === a.l ? sF(a.L, a.slotId, c) : _.Jm(a, c);
            return b
        },
        ZJ = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.B(_.t(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.B && _.zu(d);
                a.o || (b.style.display = "")
            }
        };
    var sp = function(a, b) {
        Y.call(this, a, 676);
        this.A = V(this);
        this.l = W(this, b)
    };
    _.P(sp, Y);
    sp.prototype.j = function() {
        var a = Hh(this.l.value);
        this.A.j(a)
    };
    var yp = function(a, b, c, d, e) {
        Y.call(this, a, 807);
        this.G = b;
        this.A = bz(this);
        this.l = X(this, c);
        this.o = W(this, d);
        e && dz(this, e)
    };
    _.P(yp, Y);
    yp.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = bv(this.G);
            bF(new aF(b, a)) || this.U(new Mk("Cannot create top window frame"))
        }
        this.A.notify()
    };
    var lp = function(a, b, c) {
        Y.call(this, a, 881);
        this.Xa = b;
        this.A = V(this);
        this.l = X(this, c)
    };
    _.P(lp, Y);
    lp.prototype.j = function() {
        if (_.G(Ow) || !this.l.value) Qy(this.A);
        else {
            for (var a = this.l.value, b = [], c = _.B((E = rH(this.Xa), _.t(E, "values")).call(E)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (e) {
                    bh(this.context, 1023, e)
                }
            }
            0 === b.length ? this.A.j(So(a)) : this.A.j(So(a, b))
        }
    };
    lp.prototype.m = function() {
        Qy(this.A)
    };
    var To = navigator,
        Uo = /(\$\{GDPR})/gi,
        Vo = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Wo = /(\$\{ADDTL_CONSENT})/gi;
    var aK = navigator,
        mp = function(a, b, c, d, e, f, g, h, k) {
            Y.call(this, a, 882);
            this.L = b;
            this.aa = c;
            this.ha = d;
            this.Ga = V(this);
            this.B = V(this);
            this.F = V(this);
            this.l = _.G(Qw);
            this.o = X(this, e);
            this.P = X(this, f);
            this.T = W(this, g);
            this.ca = W(this, h);
            this.Y = W(this, k)
        };
    _.P(mp, Y);
    var bK = function(a) {
        a.F.j(a.ha);
        a.Ga.j(a.T.value);
        a.B.j(a.ca.value)
    };
    mp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, u;
        return _.gb(function(v) {
            switch (v.j) {
                case 1:
                    b = "runAdAuction" in navigator && Sf("run-ad-auction", document);
                    if (_.G(Ow) || a.l && !b || !a.o.value || !a.P.value) return bK(a), v.return();
                    c = a.o.value.getWidth();
                    d = a.o.value.getHeight();
                    if (!c || !d) return bK(a), v.return();
                    e = Rn(a.o.value, Qo, 5);
                    a.K = e.getEscapedQemQueryId();
                    a.M = Ym(e, 6);
                    f = Yo(e, 9);
                    if (g = Yo(e, 10))
                        if (bK(a), Yo(e, 17)) return Zo(0, 0, e), v.return();
                    gi("pre_run_ad_auction_ping", function(x) {
                        mi(x, a.context);
                        var I;
                        L(x, "winner_qid", null != (I = a.K) ? I : "");
                        var K;
                        L(x, "xfpQid", null != (K = a.M) ? K : "");
                        L(x, "publisher_tag", "gpt")
                    }, 1);
                    h = performance.now();
                    k = ge(a.o.value, 8) || 1E3;
                    return hb(v, cK(a, a.P.value, e, k, h), 2);
                case 2:
                    l = v.m;
                    n = Math.round(performance.now() - h);
                    m = 3 === l;
                    p = 2 === l;
                    r = 1 === l;
                    u = a.l ? "string" === typeof l : l && !p && !r;
                    gi("run_ad_auction_stats", function(x) {
                        mi(x, a.context);
                        L(x, "duration_ms", n);
                        L(x, "applied_timeout_ms", k);
                        L(x, "timed_out", p ? 1 : 0);
                        a.l && L(x, "error", m ? 1 : 0);
                        L(x, "auction_skipped", r ? 1 : 0);
                        L(x, "auction_winner", u ? 1 : 0);
                        L(x, "thread_release_only", Yo(e, 15) ? 1 : 0);
                        var I;
                        L(x, "winner_qid", null != (I = a.K) ? I : "");
                        var K;
                        L(x, "xfpQid", null != (K = a.M) ? K : "");
                        L(x, "publisher_tag", "gpt")
                    }, 1);
                    if (!u) return Zo(n, p ? k : 0, e), g || bK(a), v.return();
                    if (g) {
                        if (!_.G(Pw)) {
                            v.j = 8;
                            break
                        }
                        return hb(v, aK.deprecatedURNToURL(l, !0), 8)
                    }
                    if (!f) {
                        v.j = 4;
                        break
                    }
                    if (!_.G(Pw)) {
                        v.j = 6;
                        break
                    }
                    return hb(v, aK.deprecatedURNToURL(l, !0), 6);
                case 6:
                    return bK(a), v.return();
                case 8:
                    return v.return();
                case 4:
                    return hb(v, Xo(l, {
                        gdprApplies: ok(a.aa, 3) ? F(a.aa, 3) ? "1" : "0" : null,
                        Qe: y(a.aa, 2),
                        se: y(a.aa, 4)
                    }), 10);
                case 10:
                    a.Y.value.style.display = "", a.Ga.j({
                        kind: 2,
                        vd: l
                    }), a.B.j(new _.Jh(c, d)), a.F.j(!1), v.j = 0
            }
        })
    };
    mp.prototype.m = function() {
        bK(this)
    };
    var cK = function(a, b, c, d, e) {
        var f, g, h, k, l, n, m, p, r;
        return _.gb(function(u) {
            if (1 == u.j) {
                f = ge(c, 14) || -1;
                if (0 < f && a.L.I >= f) return u.return(1);
                g = ge(c, 13) || -1;
                if (0 < g && a.L.C >= g) return u.return(1);
                ++a.L.I;
                ++a.L.C;
                h = function(v) {
                    gi("run_ad_auction_complete", function(x) {
                        mi(x, a.context);
                        L(x, "duration_ms", Math.round(performance.now() - e));
                        L(x, "applied_timeout_ms", d);
                        L(x, "auction_has_winner", !!v);
                        a.K && L(x, "winner_qid", a.K);
                        a.M && L(x, "xfpQid", a.M)
                    }, 1)
                };
                a.l && (b.signal = AbortSignal.timeout(d));
                p = Yo(c, 15) ? new w.Promise(function(v) {
                    setTimeout(function() {
                        v(null)
                    }, 0)
                }) : a.l ? null == (l = (k = aK).runAdAuction) ? void 0 : l.call(k, b).then(function(v) {
                    h(v);
                    return v
                }).catch(function(v) {
                    return v instanceof DOMException && "TimeoutError" === v.name ? 2 : 3
                }) : null == (m = (n = aK).runAdAuction) ? void 0 : m.call(n, b).then(function(v) {
                    h(v);
                    return v
                });
                return hb(u, a.l ? p : w.Promise.race([p, av(d)]), 2)
            }
            r = u.m;
            --a.L.I;
            return u.return(r)
        })
    };
    var dK = function(a, b) {
            this.context = a;
            this.L = b;
            this.j = new w.Map
        },
        eK = function(a, b) {
            if (b)
                if (_.G(mw)) {
                    if (a = a.L.j.get(b)) {
                        var c;
                        null == (c = a.rd) || c.Ca();
                        delete a.rd
                    }
                } else {
                    var d;
                    null == (d = a.j.get(b)) || d.Ca();
                    a.j.delete(b)
                }
        },
        fK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
            var u = document,
                v = window;
            e || f || _.G(np) || eK(a, d);
            var x = Np(a.context, b, c, d, e, f, g, h, k, l, u, n, m, p, r, function() {
                if (d)
                    if (_.G(mw)) {
                        var I;
                        var K = null == (I = a.L.j.get(d)) ? void 0 : I.rd;
                        null == K || K.Ca();
                        AF(a.L, d, x)
                    } else null == (K = a.j.get(d)) || K.Ca(), a.j.set(d, x)
            });
            f || _.G(np) || (_.G(mw) ? AF(a.L, d, x) : a.j.set(d, x));
            _.Jm(d, function() {
                return void eK(a, d)
            });
            v.top !== v && v.addEventListener("pagehide", function(I) {
                I.persisted || eK(a, d)
            });
            Bf(x)
        };
    var gK = function(a, b) {
        Y.call(this, a, 802);
        this.G = b;
        this.l = V(this)
    };
    _.P(gK, Y);
    gK.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.gb(function(f) {
            if (1 == f.j) {
                if (!_.G(cw)) return a.l.j(""), f.return();
                b = yg(a.G);
                if (!b) {
                    a.l.j("");
                    f.j = 0;
                    return
                }
                f.D = 3;
                return hb(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.xe(fw) && (bh(a.context, a.id, new Mk("ML:" + d.length)), d = "0"), a.l.j(d), jb(f, 0);
            e = kb(f);
            bh(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    gK.prototype.m = function() {
        this.l.j("")
    };
    var hK = function(a, b, c) {
        Y.call(this, a, 944);
        this.G = b;
        this.l = new rz(this.G);
        this.o = W(this, c)
    };
    _.P(hK, Y);
    hK.prototype.j = function() {
        var a = this.o.value;
        if (tz(this.l, a)) {
            var b = sz(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new Tt;
                b = _.A(c, 1, b);
                b = _.A(b, 2, 2147483647);
                b = _.A(b, 3, "/");
                b = _.A(b, 4, this.G.location.hostname);
                uz(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var iK = function(a, b, c, d) {
        d = void 0 === d ? Qp : d;
        Y.call(this, a, 883);
        this.B = b;
        this.F = d;
        this.l = bz(this);
        this.o = W(this, c)
    };
    _.P(iK, Y);
    iK.prototype.j = function() {
        !F(this.o.value, 5) || _.G(lw) ? this.l.notify() : (_.G(kw) || aD(this.B), this.F() ? Yy(this.l, new w.Promise(function(a) {
            return void bD(a)
        })) : (bD(null), this.l.notify()))
    };
    var jK = function(a, b, c, d, e) {
        Y.call(this, a, 884);
        this.za = b;
        this.l = c;
        this.o = V(this);
        this.F = X(this, d);
        this.B = W(this, e)
    };
    _.P(jK, Y);
    jK.prototype.j = function() {
        this.l.m = this.F.value;
        $G(this.l, sz(this.za, "__gads", this.B.value));
        vk(20);
        vk(2);
        this.o.j(_.Ae(Be).j())
    };
    var kK = function(a, b, c) {
        Y.call(this, a, 873);
        this.G = b;
        this.l = W(this, c)
    };
    _.P(kK, Y);
    kK.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.G;
        !rj()._pubconsole_disable_ && (b = qe("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || wj(a, c))
    };
    var lK = function(a, b, c, d) {
        Y.call(this, a, 1058);
        this.aa = b;
        this.l = X(this, c);
        dz(this, d)
    };
    _.P(lK, Y);
    lK.prototype.j = function() {
        if (this.l.value && F(this.aa, 5)) {
            var a = this.l.value;
            a({
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid
            })
        }
    };
    var mK = function(a, b, c) {
        Y.call(this, a, 798);
        this.A = V(this);
        this.l = X(this, b);
        this.o = W(this, c)
    };
    _.P(mK, Y);
    mK.prototype.j = function() {
        var a = this,
            b = new w.Map;
        if (this.l.value) {
            var c = this.l.value,
                d = c.ga.Ea,
                e = c.Xc.Yc;
            c = _.B(_.t(c.da.W, "entries").call(c.da.W));
            for (var f = c.next(); !f.done; f = c.next()) {
                var g = _.B(f.value);
                f = g.next().value;
                g = g.next().value;
                b.set(g, d ? nK(this, g, e[f]) : function() {
                    return a.o.value
                })
            }
        }
        this.A.j(b)
    };
    var nK = function(a, b, c) {
        return Rh(function() {
            var d = _.t(Object, "assign").call(Object, {}, a.l.value);
            d.da.jd = !0;
            d.da.W = [b];
            d.Xc.Yc = c ? [c] : [];
            return Xl(bI(new ZH(d))).url
        })
    };
    var oK = function(a, b, c, d, e, f) {
        f = void 0 === f ? Rp : f;
        Y.call(this, a, 886);
        this.W = b;
        this.L = c;
        this.l = d;
        this.X = e;
        this.o = f;
        this.A = bz(this)
    };
    _.P(oK, Y);
    oK.prototype.j = function() {
        var a = this,
            b, c;
        return _.gb(function(d) {
            if (1 == d.j) return 3 !== oD(a.X) ? (d.j = 2, d = void 0) : d = hb(d, new w.Promise(function(e) {
                return void sD(e, a.X)
            }), 2), d;
            if (4 != d.j) return b = a.l ? Ko(a.l) : null, null == b || (c = a.W.some(function(e) {
                return !Uh(Qh(e))
            })) ? (a.A.notify(), d.return()) : hb(d, pK(a, b), 4);
            a.A.notify();
            d.j = 0
        })
    };
    var pK = function(a, b) {
        return new w.Promise(function(c) {
            var d = a.o(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.Jm(a, function() {
                return void d.disconnect()
            });
            for (var e = {}, f = _.B(a.W), g = f.next(); !g.done; e = {
                    Nb: e.Nb
                }, g = f.next()) {
                g = g.value;
                e.Nb = Qh(g);
                if (!e.Nb) break;
                d.observe(e.Nb);
                tF(a.L, g, function(h) {
                    return function() {
                        return void d.unobserve(h.Nb)
                    }
                }(e))
            }
        })
    };
    var qK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        Y.call(this, a, 866);
        this.F = b;
        this.l = c;
        this.B = d;
        this.Yb = e;
        this.wb = f;
        this.vb = g;
        this.aa = h;
        this.X = k;
        this.A = bz(this);
        this.o = W(this, l);
        this.M = W(this, n);
        this.P = W(this, m);
        dz(this, p);
        this.K = W(this, r)
    };
    _.P(qK, Y);
    qK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p;
        return _.gb(function(r) {
            if (1 == r.j) {
                b = a.M.value;
                if (!b) return a.A.notify(), r.return();
                c = _.G(Uw) ? nb(a.P.value, {
                    uuid: a.vb
                }) : Di(a.vb);
                d = document.createElement("script");
                e = {
                    source: b,
                    credentials: a.K.value ? "include" : "omit",
                    resources: [c.toString()]
                };
                d.setAttribute("type", "webbundle");
                Ua(d, new Ta(JSON.stringify(e).replace(/</g, "\\x3c"), yn));
                a.X.head.appendChild(d);
                d.addEventListener("error", function(u) {
                    u = new jy(u.message || "Failed to load web bundle.");
                    a.l(u)
                });
                a.A.notify();
                f = _.G(Uw) ? a.T : a.Y;
                return hb(r, f.bind(a)(c), 2)
            }
            g = r.m;
            h = g.xd;
            k = g.Vd;
            delete rj()[a.wb.replace("googletag.", "")];
            if (h.length !== k.length) return a.l(new iy("Received " + h.length + " ad URLs but " + k.length + " metadatas")), r.return();
            e.resources = h.filter(function(u) {
                return u
            });
            e.resources.length ? (l = _.Dd("SCRIPT"), l.setAttribute("type", "webbundle"), Ua(l, new Ta(JSON.stringify(e).replace(/</g, "\\x3c"), yn)), a.X.head.removeChild(d), a.X.head.appendChild(l)) : a.X.head.removeChild(d);
            for (n = 0; n < h.length; n++) m = h[n], p = k[n], a.F(n, p, {
                kind: 1,
                url: m
            }, a.o.value, a.aa);
            a.B(h.length - 1, a.o.value, a.aa);
            r.j = 0
        })
    };
    var rK = function(a) {
        var b = rj(),
            c = a.wb.replace("googletag.", "");
        return new w.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        xd: f,
                        Vd: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    qK.prototype.T = function(a) {
        var b, c, d;
        return _.gb(function(e) {
            if (1 == e.j) return hb(e, fetch(a.toString()), 2);
            if (3 != e.j) return b = e.m, hb(e, b.text(), 3);
            c = e.m;
            d = Yd(eu, c);
            return e.return({
                xd: Xk(d, 1),
                Vd: Xk(d, 2)
            })
        })
    };
    qK.prototype.Y = function(a) {
        var b = this,
            c;
        return _.gb(function(d) {
            return 1 == d.j ? (c = document.createElement("script"), Wa(c, a), b.X.head.appendChild(c), hb(d, rK(b), 2)) : d.return(d.m)
        })
    };
    var sK = function(a, b, c, d, e, f, g) {
        Y.call(this, a, 810);
        this.B = b;
        this.Ea = c;
        this.N = d;
        this.o = e;
        this.G = f;
        this.aa = g;
        this.l = V(this)
    };
    _.P(sK, Y);
    sK.prototype.j = function() {
        var a = this,
            b = this.B;
        !this.Ea && 1 < this.B.length && (b = [b[0]]);
        b = b.filter(function(f) {
            if (f.I) return !1;
            var g = a.N.R[f.getDomId()],
                h;
            if (h = !(Gm(Dl(g)) && (E = ef(rw), _.t(E, "includes")).call(E, String(Dl(g))))) zl(a.G) && 4 === Dl(g) ? (O(a.o, vG("googletag.enums.OutOfPageFormat.REWARDED", String(f.getAdUnitPath()))), h = !0) : h = !1, h = !h;
            return h && !Il(a.context, a.o, f, g, a.G, a.aa)
        });
        30 < b.length && (O(this.o, rG("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        if (_.G(Sw))
            for (var c = {}, d = _.B(b), e = d.next(); !e.done; c = {
                    kc: c.kc
                }, e = d.next()) c.kc = e.value, _.Jm(c.kc, function(f) {
                return function() {
                    var g = _.t(b, "findIndex").call(b, function(h) {
                        return h === f.kc
                    }); - 1 < g && b.splice(g, 1)
                }
            }(c));
        this.l.j(b)
    };
    var tK = function(a, b, c, d) {
        Y.call(this, a, 1068);
        this.o = b;
        this.B = c;
        this.l = d;
        this.A = V(this)
    };
    _.P(tK, Y);
    tK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n;
        return _.gb(function(m) {
            switch (m.j) {
                case 1:
                    if (a.l) return hb(m, a.l.promise, 5);
                    f = a.A;
                    g = f.j;
                    return hb(m, null != (d = null == (b = a.o) ? void 0 : b.promise) ? d : null == (c = a.B) ? void 0 : c.promise.then(function(p) {
                        return p ? p() : ""
                    }), 4);
                case 4:
                    g.call(f, null != (e = m.m) ? e : "");
                    m.j = 0;
                    break;
                case 5:
                    h = m.m;
                    k = a.A;
                    l = k.j;
                    if (!h) {
                        n = "";
                        m.j = 6;
                        break
                    }
                    return hb(m, h(), 7);
                case 7:
                    n = m.m;
                case 6:
                    l.call(k, n), m.j = 0
            }
        })
    };
    tK.prototype.m = function() {
        this.A.j("")
    };
    var uK = function(a, b, c) {
        Y.call(this, a, 919);
        this.l = b;
        this.aa = c;
        this.A = V(this)
    };
    _.P(uK, Y);
    uK.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : F(a, 9)) && !!F(this.aa, 5);
        this.A.j(b)
    };
    var vK = function(a, b, c, d, e, f) {
        Y.call(this, a, 935);
        this.L = b;
        this.N = c;
        this.X = d;
        this.A = bz(this);
        this.l = W(this, e);
        dz(this, f)
    };
    _.P(vK, Y);
    vK.prototype.j = function() {
        var a = this.N,
            b = a.V;
        a = a.R;
        for (var c = _.B(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.X;
            tm(e, b) && !this.L.hb(d) && um(d, f, e, b)
        }
        this.A.notify()
    };
    var wK = function(a, b, c, d, e, f) {
        f = void 0 === f ? Fi : f;
        Y.call(this, a, 939);
        this.o = b;
        this.G = c;
        this.aa = d;
        this.l = f;
        dz(this, e)
    };
    _.P(wK, Y);
    wK.prototype.j = function() {
        var a = this.l,
            b = this.G,
            c = new co;
        var d = new bo;
        d = _.z(d, 1, String(this.o), "");
        c = _.Sg(c, 5, d);
        c = _.z(c, 4, 1, 0);
        c = _.z(c, 2, 2, 0);
        c = _.z(c, 3, this.context.eb || this.context.Ja, "");
        c = _.z(c, 6, F(this.aa, 5), !1);
        a.call(this, b, c)
    };
    var xK = function(a, b, c, d, e) {
        Y.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.A = bz(this);
        this.o = W(this, d);
        dz(this, e)
    };
    _.P(xK, Y);
    xK.prototype.j = function() {
        for (var a = _.B(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.R[b.value.getDomId()]) ? void 0 : Dl(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.vJ);
                    return
            }
        }
        this.A.notify()
    };
    var yK = function(a, b, c, d) {
        Y.call(this, a, 833);
        this.l = b;
        this.G = c;
        this.A = bz(this);
        dz(this, d)
    };
    _.P(yK, Y);
    yK.prototype.j = function() {
        if (!_.G(Cw)) {
            var a = this.l,
                b = this.G,
                c = _.G(Dw) ? Oh() : fE();
            c = {
                version: aH ? aH : aH = dk(),
                cc: c,
                Of: _.G(Ew)
            };
            c = PE.ef(c);
            var d = wE(b);
            c = d ? Md(c, new w.Map([
                ["n", String(d)]
            ])) : c;
            d = ef(fk);
            for (var e = new w.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = Md(c, e);
            var g;
            a.resources[c.toString()] || (null == (g = rj()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Dd("IFRAME"), a.src = Va(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.A.notify()
    };
    var zK = function(a, b, c, d) {
        Y.call(this, a, 928);
        this.requestId = b;
        this.A = bz(this);
        this.l = W(this, c);
        dz(this, d)
    };
    _.P(zK, Y);
    zK.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.bc) {
            var d = a.qb;
            a = Tg(a);
            var e = new rv;
            b = _.z(e, 2, b, 0);
            c = _.z(b, 1, c, 0);
            c = Vg(a, 7, Wg, c);
            Qd(d, c)
        }
        this.A.notify()
    };
    var AK = function(a, b, c, d) {
        Y.call(this, a, 867);
        this.xa = b;
        this.N = c;
        this.A = bz(this);
        this.l = W(this, d)
    };
    _.P(AK, Y);
    AK.prototype.j = function() {
        for (var a = _.B(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.B(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = y(this.N.R[b.getDomId()], 20);
            b.dispatchEvent(kF, 808, {
                Ae: c,
                Df: d
            });
            this.xa.dispatchEvent("slotRequested", 705, new VI(b, "publisher_ads"))
        }
        this.A.notify()
    };
    var BK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Z, ba, ia, Xa, Ba, ua, wa, Da) {
        Y.call(this, a, 785, _.xe(Hw));
        this.Ea = b;
        this.L = c;
        this.za = d;
        this.N = e;
        this.Yb = f;
        this.fb = g;
        this.Hb = h;
        this.Gb = k;
        this.ed = l;
        this.vb = n;
        this.wb = m;
        this.tb = p;
        this.aa = r;
        this.isSecureContext = u;
        this.G = v;
        this.M = x;
        this.uc = I;
        this.o = V(this);
        this.F = V(this);
        this.T = V(this);
        this.l = V(this);
        dz(this, Z);
        this.ma = cz(this, x);
        this.B = cz(this, I);
        this.P = W(this, K);
        this.ca = W(this, M);
        this.K = cz(this, S);
        this.ya = X(this, T);
        dz(this, Z);
        dz(this, ba);
        ia && (this.qa = W(this, ia));
        this.Y = new Wy(Xa);
        this.oa = X(this, Ba);
        this.ha = W(this, ua);
        wa && dz(this, wa);
        this.la = W(this, Da)
    };
    _.P(BK, Y);
    BK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I;
        return _.gb(function(K) {
            if (1 == K.j) {
                if (!a.P.value.length) return a.o.j(""), Qy(a.F), a.l.j([]), K.return();
                b = !_.G(lw);
                if (b) {
                    jg();
                    var M = lg[1]
                } else M = "";
                c = M;
                b ? (jg(), M = lg[4]) : M = "";
                d = M;
                b ? (jg(), M = lg[6]) : M = "";
                e = M;
                k = null != (h = null == (f = a.K) ? void 0 : f.value) ? h : null !== (null == (g = a.K) ? void 0 : g.value) || a.K.rb() ? null : 1;
                _.G(Nw) && _.G(Mw) && null !== k && (l = (0, D.J)(a.ya.value), le({
                    timeout: 1 === k ? "1" : "0",
                    sig: String(k),
                    e2e: String(performance.now() - l)
                }, "topics_e2e"));
                a.B.value && (a.L.tc = a.B.value);
                r = {
                    ga: {
                        G: a.G,
                        context: a.context,
                        L: a.L,
                        za: a.za,
                        aa: a.aa,
                        Ea: a.Ea,
                        ed: a.ed,
                        isSecureContext: a.isSecureContext
                    },
                    da: {
                        W: a.P.value,
                        N: a.N,
                        fb: a.fb,
                        jd: !1
                    },
                    Tf: {
                        Hb: a.Hb,
                        Gb: a.Gb
                    },
                    qf: {
                        te: c,
                        ff: d,
                        xf: e
                    },
                    tf: {
                        Re: null != (m = a.ma.value) ? m : "0"
                    },
                    oe: {
                        Yb: a.Yb,
                        vb: a.vb,
                        wb: a.wb
                    },
                    Xc: {
                        Yc: a.ca.value
                    },
                    Kf: {
                        Lf: k
                    },
                    Gf: {
                        th: null != (p = null == (n = a.qa) ? void 0 : n.value) ? p : null,
                        vf: a.Y.value,
                        He: a.ha.value
                    },
                    wf: {
                        Se: a.oa.value,
                        Oe: a.la.value
                    }
                };
                a.F.j(r);
                u = new ZH(r);
                v = Xl(bI(u));
                x = v.url;
                I = v.Cd;
                hy(a.tb, (9).toString(), 9, I);
                a.o.j(x);
                a.l.j(r.da.W.slice());
                a.T.j(aI(u) ? Wq("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : Wq("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"));
                return hb(K, a.M.promise, 2)
            }
            if (4 != K.j) {
                if (a.I) return K.return();
                gi("gpt_paw", function(S) {
                    mi(S, a.context);
                    var T;
                    L(S, "sig", null != (T = a.M.H) ? T : -1);
                    L(S, "req", a.Z);
                    L(S, "req_cnt", a.L.D);
                    var Z;
                    L(S, "dm", null != (Z = window.navigator.deviceMemory) ? Z : -1)
                }, _.xe(hw));
                a.B.value ? K = hb(K, a.uc.promise, 4) : (K.j = 0, K = void 0);
                return K
            }
            gi("gpt_etu", function(S) {
                mi(S, a.context);
                var T;
                L(S, "sig", null != (T = a.uc.H) ? T : -1);
                L(S, "req", a.Z)
            });
            K.j = 0
        })
    };
    var CK = function(a, b, c, d, e, f) {
        Y.call(this, a, 878);
        this.l = b;
        this.X = c;
        this.N = d;
        this.G = e;
        this.A = bz(this);
        dz(this, f)
    };
    _.P(CK, Y);
    CK.prototype.j = function() {
        for (var a = _.B(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Qh(b, this.X);
            if (!Ph(b, this.X) && c) {
                a: {
                    var d = c;
                    var e = this.N.R[b.getDomId()],
                        f = 0,
                        g = 0;e = _.B(vh(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.B(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Ul(Sh(d, this.G)) || !d.parentElement || Ul(Sh(d.parentElement, this.G))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.V;g = g.R[b.getDomId()];Tl(c, Yh(b), Ch(f, g), d)
            }
        }
        this.A.notify()
    };
    var DK = function(a, b, c) {
        Y.call(this, a, 1051);
        this.o = b;
        this.l = X(this, c)
    };
    _.P(DK, Y);
    DK.prototype.j = function() {
        var a = this;
        this.l.value && Nf(this.l.value, function(b, c) {
            bh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var EK = function(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.I = c;
            this.W = d;
            this.aa = e;
            this.D = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        GK = function(a, b) {
            if (b)
                if (1 !== a.state && 2 !== a.state) FK(a, new iy("state err: (" + ([a.state, a.j.length].join() + ")")));
                else {
                    a.j && (b = a.j + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.state) f.D = c, ++f.m, f.state = 2;
                        else {
                            try {
                                f.C(f.m, f.D, {
                                    kind: 0,
                                    Ka: Yu(c)
                                }, f.W, f.aa), f.D = ""
                            } catch (g) {}
                            f.state = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.j = b.substr(c)
                }
        },
        FK = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        },
        HK = function(a) {
            1 !== a.state || a.j ? FK(a, new iy("state err (" + ([a.state, a.j.length].join() + ")"))) : (a.state = 3, a.I(a.m, a.W, a.aa))
        };
    var IK = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, a, 788);
        this.K = b;
        this.M = c;
        this.F = d;
        this.aa = e;
        this.A = bz(this);
        this.B = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.T = W(this, f);
        this.Y = W(this, g);
        dz(this, h);
        this.P = W(this, k)
    };
    _.P(IK, Y);
    IK.prototype.j = function() {
        var a = this,
            b = this.Y.value;
        if (b) {
            var c = new EK(this.K, this.M, this.F, this.T.value, this.aa);
            this.l.open("GET", b);
            this.l.withCredentials = this.P.value;
            this.l.onreadystatechange = function() {
                JK(a, c, !1)
            };
            this.l.onload = function() {
                JK(a, c, !0)
            };
            this.l.onerror = function() {
                FK(c, new jy("XHR error"))
            };
            this.l.send()
        }
        this.A.notify()
    };
    var JK = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (FK(b, new jy("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.B);
                    d && GK(b, d);
                    a.B = a.l.responseText.length;
                    c && 4 === a.l.readyState && HK(b)
                }
        } catch (e) {
            FK(b, e)
        }
    };
    var KK = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, a, 1078);
        this.o = b;
        this.B = c;
        this.l = d;
        this.aa = e;
        this.A = bz(this);
        this.K = W(this, f);
        this.M = W(this, g);
        dz(this, h);
        this.F = W(this, k)
    };
    _.P(KK, Y);
    KK.prototype.j = function() {
        var a = this.M.value;
        a && LK(this, a);
        this.A.notify()
    };
    var LK = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r, u, v;
        _.gb(function(x) {
            switch (x.j) {
                case 1:
                    return c = new EK(a.o, a.B, a.l, a.K.value, a.aa), e = a.F.value ? "include" : "same-origin", x.D = 2, hb(x, fetch(b, {
                        credentials: e
                    }), 4);
                case 4:
                    d = x.m;
                    jb(x, 3);
                    break;
                case 2:
                    f = kb(x), FK(c, new jy("fetch error: " + (f instanceof Error ? f.message : void 0)));
                case 3:
                    if (!d) return x.return();
                    if (300 <= d.status) return FK(c, new jy("fetch_status-" + d.status)), x.return();
                    h = null == (g = d.body) ? void 0 : g.getReader();
                    if (!h) return x.return();
                    k = new TextDecoder;
                    l = !1;
                case 5:
                    if (l) {
                        x.j = 6;
                        break
                    }
                    p = void 0;
                    x.D = 7;
                    return hb(x, h.read(), 9);
                case 9:
                    r = x.m;
                    p = r.value;
                    l = r.done;
                    jb(x, 8);
                    break;
                case 7:
                    m = u = kb(x), l = !0;
                case 8:
                    n && (v = k.decode(n, {
                        stream: !l
                    }), GK(c, v));
                    n = p;
                    x.j = 5;
                    break;
                case 6:
                    m && FK(c, new jy("fetch read error: " + (m instanceof Error ? m.message : void 0))), HK(c), x.j = 0
            }
        })
    };
    var MK = function(a, b, c, d, e) {
        Y.call(this, a, 918);
        this.N = b;
        this.tb = c;
        this.A = bz(this);
        this.l = W(this, e);
        dz(this, d)
    };
    _.P(MK, Y);
    MK.prototype.j = function() {
        var a = this.l.value;
        a.length && Bo(this.tb, "3", (0, D.J)(y(this.N.R[a[0].getDomId()], 20)));
        this.A.notify()
    };
    var NK = function(a, b) {
        Y.call(this, a, 820);
        this.G = b;
        this.A = V(this)
    };
    _.P(NK, Y);
    NK.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.gb(function(f) {
            if (1 == f.j) return hb(f, Ii(a.G), 2);
            b = f.m;
            c = b.tc;
            d = b.status;
            c || gi("gpt_etu", function(g) {
                mi(g, a.context);
                L(g, "rsn", d)
            });
            a.A.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var OK = function(a, b, c, d, e, f) {
        Y.call(this, a, 978);
        this.l = b;
        this.aa = c;
        this.G = d;
        this.localStorage = e;
        this.A = V(this);
        this.o = V(this);
        this.B = X(this, f)
    };
    _.P(OK, Y);
    OK.prototype.j = function() {
        if (_.G(Mw) && this.B.value) {
            _.G(Nw) ? this.o.j(performance.now()) : Qy(this.o);
            var a, b, c, d, e, f;
            (null == (a = this.l) ? 0 : F(a, 8)) || _.G(xw) && (null == (b = this.l) ? 0 : F(b, 13)) || (null == (c = this.l) ? 0 : F(c, 1)) || 1 === (null == (d = this.l) ? void 0 : fe(d, 6, 2)) || 1 === (null == (e = this.l) ? void 0 : y(e, 5)) || (null == (f = this.l) ? 0 : F(f, 9)) || !F(this.aa, 5) || F(this.aa, 9) ? this.A.j(5) : (a = Si(this.B.value, this.G, _.G(Jw), _.G(Lw), new _.UD(this.context), this.localStorage), Ry(this.A, a))
        } else Qy(this.A), Qy(this.o)
    };
    OK.prototype.m = function() {
        Qy(this.A)
    };
    var QK = function(a, b, c) {
        Y.call(this, a, 804);
        this.l = c;
        this.F = [];
        this.B = {
            Te: PK(this, function(d) {
                return d.getHeight()
            }),
            Xf: PK(this, function(d) {
                return d.getWidth()
            }),
            Ze: PK(this, function(d) {
                return !!F(d, 8)
            }),
            Ne: PK(this, function(d) {
                return y(d, 10)
            }),
            Ld: PK(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            ue: PK(this, function(d) {
                return Me(d, St, 43)
            }),
            Ye: PK(this, function(d) {
                return !!F(d, 9)
            }),
            Qf: PK(this, function(d) {
                return !!F(d, 12)
            }),
            Pe: PK(this, function(d) {
                return Sm(d, It, 48, cu)
            }),
            Ke: PK(this, function(d) {
                return Sm(d, Gt, 39, cu)
            }),
            mc: PK(this, function(d) {
                return y(d, 36)
            }),
            Rf: PK(this, function(d) {
                return F(d, 13)
            }),
            Xe: PK(this, function(d) {
                return F(d, 3)
            }),
            Mf: PK(this, function(d) {
                return y(d, 49)
            }),
            Uf: PK(this, function(d) {
                return y(d, 29)
            }),
            Vf: PK(this, function(d) {
                return y(d, 30)
            }),
            Ue: PK(this, function(d) {
                return Me(d, Vt, 51)
            }),
            uc: PK(this, function(d) {
                return y(d, 61)
            }),
            Ga: V(this),
            me: PK(this, function(d) {
                return Me(d, Yt, 58)
            }),
            Yf: PK(this, function(d) {
                var e, f;
                return null != (f = null == (e = Me(d, Ut, 56)) ? void 0 : y(e, 1)) ? f : null
            }),
            Zb: PK(this, function(d) {
                return Wc(d, At, 62)
            }),
            gf: PK(this, function(d) {
                return Gc(d, 63, Ub)
            })
        };
        this.o = W(this, b)
    };
    _.P(QK, Y);
    var PK = function(a, b) {
        var c = V(a);
        a.F.push({
            A: c,
            Ie: b
        });
        return c
    };
    QK.prototype.j = function() {
        for (var a = _.B(this.F), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.Ie;
            Py(b.A, c(this.o.value))
        }
        if (Sm(this.o.value, au, 41, bu)) throw new iy("SecureFrame");
        if (0 === this.l.kind || 1 === this.l.kind && this.l.url) this.B.Ga.j(this.l);
        else {
            a = this.B.Ga;
            b = a.j;
            c = this.o.value;
            var d = Ui(c, bu, 4);
            b.call(a, {
                kind: 0,
                Ka: y(c, d) || ""
            })
        }
    };
    var RK = function(a, b, c) {
        Y.call(this, a, 822);
        this.slotId = b;
        this.l = bz(this);
        this.o = W(this, c)
    };
    _.P(RK, Y);
    RK.prototype.j = function() {
        for (var a = this, b = Vm(this.o.value, 23), c = _.Ae(cJ), d = _.B(b), e = d.next(); !e.done; e = d.next()) e = e.value, dJ(c, e), eJ(c, e, this.slotId);
        this.l.notify();
        b.length && gi("gpt_hp", function(f) {
            mi(f, a.context);
            L(f, "ls", b.join())
        }, _.xe(Rv))
    };
    var SK = function(a, b, c) {
        Y.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.A = V(this);
        this.o = V(this)
    };
    _.P(SK, Y);
    SK.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = cj(a, Xq);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new $t(a.slice());
        var c;
        b = _.B(null != (c = Vm(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, _.Ae(Be).m(c);
        vk(4);
        this.slotId.dispatchEvent(jF, 800, a);
        this.A.j(a);
        var d;
        Py(this.o, null != (d = Me(a, Rt, 54)) ? d : null)
    };
    var TK = function(a, b, c, d) {
        Y.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.l = bz(this);
        this.o = W(this, d)
    };
    _.P(TK, Y);
    TK.prototype.j = function() {
        var a = this;
        F(this.o.value, 11) && (_.vF(this.L, this.slotId), sF(this.L, this.slotId, function() {
            _.wF(a.L, a.slotId)
        }));
        this.l.notify()
    };
    var UK = function(a, b, c, d) {
        Y.call(this, a, 821);
        this.aa = b;
        this.za = c;
        this.l = bz(this);
        this.o = W(this, d)
    };
    _.P(UK, Y);
    UK.prototype.j = function() {
        if (F(this.aa, 5))
            for (var a = new w.Set, b = _.B(Wc(this.o.value, Tt, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = is(c, 5)) ? d : 1;
                a.has(e) || (uz(this.za, 2 === e ? "__gpi" : "__gads", c, this.aa), a.add(e))
            }
        this.l.notify()
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var VK = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        WK = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = VK[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var XK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Z) {
        Y.call(this, a, 973);
        this.oa = b;
        this.l = c;
        this.B = d;
        this.P = e;
        this.N = f;
        this.L = g;
        this.za = h;
        this.la = k;
        this.M = l;
        this.o = n;
        this.ac = m;
        this.F = p;
        this.ma = r;
        this.nb = u;
        this.isSecureContext = v;
        this.G = x;
        this.X = I;
        this.K = K;
        this.qa = T;
        this.ca = Z;
        this.T = new _.ug;
        this.ha = X(this, K);
        this.Y = W(this, M);
        this.ya = W(this, S);
        dz(this, p.T)
    };
    _.P(XK, Y);
    XK.prototype.j = function() {
        var a = this,
            b = new nf;
        _.Cm(this, b);
        var c = this.Y.value,
            d = cE(this.N.V);
        if (!_.G(Yw)) {
            var e = new HI(this.context, rj(), console, this.K);
            H(b, e)
        }
        H(b, new DK(this.context, console, this.K));
        e = new oK(this.context, this.B, this.L, Me(this.N.V, jp, 5), this.X);
        H(b, e);
        var f = new CK(this.context, this.B, this.X, this.N, this.G, e.A);
        H(b, f);
        var g = !!F(this.N.V, 6),
            h = new sK(this.context, this.B, g, this.N, this.l, this.G, c);
        H(b, h);
        var k = new NK(this.context, this.G);
        H(b, k);
        var l = this.F,
            n = l.fa,
            m = l.la,
            p = l.K,
            r = l.U,
            u = l.Z,
            v = l.Bb,
            x = l.Cb,
            I = l.ya,
            K = l.Qa;
        e = l.bb;
        var M = l.P,
            S = l.Xb,
            T = l.Ha,
            Z = l.M,
            ba = l.lb;
        l = l.o;
        var ia = this.ca;
        ia || (ia || _.xe(aw), ia = new tK(this.context, ia, I, K), H(b, ia), ia = ia.A);
        p = new CH(this.context, this.l, this.N.R, this.nb, h.l, n, m, p, r, u, M, T);
        H(b, p);
        H(b, new IH(this.context, n, v, x, p.B, p.F, this.N.R));
        _.G(Mw) ? (v = new OK(this.context, d, c, this.G, this.ha.value, e), H(b, v), r = v.A, u = v.o) : (r = new bp, Qy(r), u = new bp, Qy(u));
        v = window.isSecureContext && _.G(Tw) ? "wbn" : "ldjh";
        var Xa = ++this.L.D;
        m = x = null;
        "wbn" === v && (x = WK().toLowerCase(), m = "googletag.wbn" + Xa);
        M = this.ac;
        f = new BK(this.context, g, this.L, this.za, this.N, v, M.fb, M.Hb, M.Gb, this.ya.value, x, m, _.Ae($g), c, this.isSecureContext, this.G, ia, k.A, h.l, p.l, r, u, f.A, this.qa, S, n, T, Z, ba, l);
        H(b, f);
        g = new MK(this.context, this.N, _.Ae($g), f.o, _.G(Sw) ? f.l : h.l);
        H(b, g);
        d = new uK(this.context, d, c);
        H(b, d);
        k = _.Yg(this.context, 646, function(ua, wa, Da, lb, Kb) {
            var Vc = function() {
                return void YK(a, Kb, ua, wa, Da, lb)
            };
            ua && _.G(Pv) ? setTimeout(_.Yg(a.context, 646, Vc), 0) : Vc()
        });
        n = _.Yg(this.context, 647, function(ua, wa, Da) {
            a.T.resolve();
            var lb = function() {
                return void ZK(a, Xa, Da, wa, ua)
            };
            _.G(Pv) ? setTimeout(_.Yg(a.context, 646, lb), 0) : lb()
        });
        S = _.Yg(this.context, 289, function(ua) {
            ua = ua instanceof Error ? ua : Error();
            ua.message = ua.message || "strm_err";
            bh(a.context, 289, ua)
        });
        T = _.Yg(this.context, 1042, function(ua) {
            ua = ua instanceof Error ? ua : Error();
            ua.message = ua.message || "Unknown web bundle error.";
            bh(a.context, 1042, ua)
        });
        var Ba;
        "ldjh" === v ? _.G(Wv) && window.fetch ? Ba = new KK(this.context, k, S, n, c, _.G(Sw) ? f.l : h.l, f.o, g.A, d.A) : Ba = new IK(this.context, k, S, n, c, _.G(Sw) ? f.l : h.l, f.o, g.A, d.A) : Ba = new qK(this.context, k, T, n, v, (0, D.J)(m), (0, D.J)(x), c, this.X, _.G(Sw) ? f.l : h.l, f.o, f.T, g.A, d.A);
        H(b, Ba);
        d = new zK(this.context, Xa, _.G(Sw) ? f.l : h.l, Ba.A);
        H(b, d);
        d = new mK(this.context, f.F, f.o);
        H(b, d);
        d = new AK(this.context, this.o.ce, this.N, d.A);
        H(b, d);
        d = new yK(this.context, this.la, this.G, d.A);
        H(b, d);
        d = new xK(this.context, this.N, this.M, h.l, d.A);
        H(b, d);
        h = new vK(this.context, this.L, this.N, this.X, h.l, d.A);
        H(b, h);
        h = new wK(this.context, ze(this.G), this.G, c, Ba.A);
        H(b, h);
        _.G(Qv) && 1 === Xa && (c = new lK(this.context, c, e, Ba.A), H(b, c));
        Bf(b)
    };
    var YK = function(a, b, c, d, e, f) {
            var g, h;
            return _.gb(function(k) {
                if (1 == k.j) {
                    g = f[c];
                    if (!g || _.G(Sw) && g.I) return bh(a.context, 646, Error("missing slot")), k.return();
                    0 === c && (h = (0, D.J)(y(a.N.R[g.getDomId()], 20)), Bo(_.Ae($g), "4", h));
                    _.G(Rw) ? k = hb(k, a.T.promise, 3) : (k.j = 2, k = void 0);
                    return k
                }
                return 2 != k.j && g.I ? k.return() : hb(k, $K(a, g, d, e, b), 0)
            })
        },
        ZK = function(a, b, c, d, e) {
            var f, g, h;
            return _.gb(function(k) {
                switch (k.j) {
                    case 1:
                        var l = a.context,
                            n = e + 1,
                            m = d.length;
                        if (l.bc) {
                            var p = l.qb;
                            l = Tg(l);
                            var r = new sv;
                            r = _.z(r, 3, b, 0);
                            n = _.z(r, 1, n, 0);
                            m = _.z(n, 2, m, 0);
                            m = Vg(l, 8, Wg, m);
                            Qd(p, m)
                        }
                        f = e + 1;
                    case 2:
                        if (!(f < d.length)) {
                            k.j = 4;
                            break
                        }
                        if (!d[f]) {
                            k.j = 3;
                            break
                        }
                        p = new $t;
                        p = _.A(p, 8, !0);
                        g = ce(p);
                        h = '{"empty":' + g + "}";
                        return hb(k, YK(a, c, f, h, {
                            kind: 0,
                            Ka: ""
                        }, d), 3);
                    case 3:
                        ++f;
                        k.j = 2;
                        break;
                    case 4:
                        p = a.L, m = a.P, l = (0, D.J)(p.m.get(m)) - 1, 0 === l ? p.m.delete(m) : p.m.set(m, l), 0 === l && a.o.Pd.dispatchEvent(oF, 965, a.P), k.j = 0
                }
            })
        },
        $K = function(a, b, c, d, e) {
            var f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Z, ba, ia, Xa, Ba, ua;
            return _.gb(function(wa) {
                switch (wa.j) {
                    case 1:
                        return f = new nf, g = new SK(a.context, c, b), H(f, g), h = new DI(a.context, g.o), H(f, h), k = new UK(a.context, e, a.za, g.A), H(f, k), l = new RK(a.context, b, g.A), H(f, l), n = new TK(a.context, b, a.L, g.A), H(f, n), m = new QK(a.context, g.A, d), H(f, m), p = [k.l.promise, l.l.promise, n.l.promise], Bf(f), hb(wa, w.Promise.all(p), 2);
                    case 2:
                        if (b.I) return wa.return();
                        r = m;
                        v = u = r.B;
                        x = v.me;
                        I = v.Ze;
                        K = v.Ld;
                        return hb(wa, x.promise, 3);
                    case 3:
                        return M = wa.m, S = !!M, Z = null == (T = M) ? void 0 : Me(T, Qo, 5), hb(wa, I.promise, 4);
                    case 4:
                        return ba = wa.m, S && gi("gpt_td_init", function(Da) {
                            mi(Da, a.context);
                            var lb, Kb;
                            L(Da, "winner_qid", null != (Kb = null == (lb = Z) ? void 0 : lb.getEscapedQemQueryId()) ? Kb : "");
                            var Vc, hf;
                            L(Da, "xfpQid", null != (hf = null == (Vc = Z) ? void 0 : Ym(Vc, 6)) ? hf : "");
                            L(Da, "noFill", ba ? "1" : "0");
                            L(Da, "publisher_tag", "gpt")
                        }, 1), ia = D, Xa = ia.J, hb(wa, K.promise, 5);
                    case 5:
                        Ba = Xa.call(ia, wa.m), ((ua = Zl("google_norender")) || ba && !S) && !_.G(np) ? Go(b, a.L, a.N, Ba) : fK(a.ma, a.oa, a.l, b, ba || ua, S, a.L, a.N, u, h.l, e, a.o.ce, a.M, a.F), f.Ca(), wa.j = 0
                }
            })
        };
    var aL = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K) {
        Y.call(this, a, 885);
        this.Y = b;
        this.B = c;
        this.N = d;
        this.L = e;
        this.za = f;
        this.ac = g;
        this.P = h;
        this.M = k;
        this.l = l;
        this.F = n;
        this.o = m;
        this.T = p;
        this.isSecureContext = r;
        this.K = u;
        this.G = v;
        this.X = x;
        this.ca = W(this, I);
        dz(this, K)
    };
    _.P(aL, Y);
    aL.prototype.j = function() {
        var a = this.ca.value;
        if (a.length) {
            var b = this.L,
                c = this.l,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.B(a);
            for (b = a.next(); !b.done; b = a.next()) {
                d = b.value;
                b = void 0;
                c = d.nb;
                var e = d.W;
                d = new nf;
                _.Cm(this, d);
                var f = void 0;
                0 >= _.xe(aw) && (f = new gK(this.context, this.G), H(d, f));
                var g = Fm(this.context, this.o.ab),
                    h = g.zb,
                    k = g.Nd;
                _.Cm(d, g.va);
                h = Am(this.context, this.B, this.L, cE(this.N.V), this.G, h, k);
                g = h.Ya;
                _.Cm(d, h.va);
                h = new kK(this.context, this.G, g);
                H(d, h);
                h = new hK(this.context, this.G, g);
                H(d, h);
                h = new iK(this.context, _.Pg(150), g);
                H(d, h);
                k = new cp(this.context, this.G, g);
                H(d, k);
                var l = new jK(this.context, this.za, this.K, k.A, g);
                H(d, l);
                c = new XK(this.context, this.Y, this.B, e, this.l, this.N, this.L, this.za, this.P, this.M, this.F, this.ac, this.o, this.T, c, this.isSecureContext, this.G, this.X, k.A, g, l.o, h.l, null == (b = f) ? void 0 : b.l);
                H(d, c);
                Bf(d)
            }
        } else this.F.Pd.dispatchEvent(oF, 965, this.l)
    };
    var bL = new w.Map,
        cL = function(a, b, c, d) {
            d = void 0 === d ? bL : d;
            Y.call(this, a, 834);
            this.B = b;
            this.W = c;
            this.l = d;
            this.o = V(this);
            this.F = w.Promise.all(this.W.map(this.K, this))
        };
    _.P(cL, Y);
    cL.prototype.j = function() {
        var a = this,
            b;
        return _.gb(function(c) {
            if (1 == c.j) return hb(c, a.F, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.I
            }));
            c.j = 0
        })
    };
    cL.prototype.K = function(a) {
        var b = this,
            c, d;
        return _.gb(function(e) {
            if (1 == e.j) {
                if (a.I) return e.return(null);
                b.l.has(a) || (b.l.set(a, Sp(a)), _.Jm(a, function() {
                    return void b.l.delete(a)
                }));
                c = (0, D.J)(b.l.get(a));
                return hb(e, c(), 2)
            }
            d = e.m;
            if (b.I) return e.return(null);
            if (d) return e.return(a);
            O(b.B, CG(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var dL = function(a, b, c, d, e) {
        Y.call(this, a, 847);
        this.L = b;
        this.Ea = c;
        this.o = d;
        this.l = V(this);
        this.B = W(this, e)
    };
    _.P(dL, Y);
    dL.prototype.j = function() {
        var a = this.B.value;
        if (a.length) {
            for (var b = _.B(a), c = b.next(); !c.done; c = b.next()) zF(this.L, c.value);
            this.o ? this.l.j([]) : this.Ea ? (b = Mg(a[0].getAdUnitPath()), a = eL(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    nb: Mg(d.getAdUnitPath()),
                    W: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var eL = function(a, b) {
        var c = [];
        a = va(a, function(f) {
            return Mg(f.getAdUnitPath())
        });
        a = _.B(_.t(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.B(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                nb: d,
                W: e
            }) : c.push({
                nb: d,
                W: e
            })
        }
        return c
    };
    var fL = function(a, b, c) {
        Y.call(this, a, 845);
        this.R = b;
        this.l = V(this);
        this.o = V(this);
        this.B = W(this, c)
    };
    _.P(fL, Y);
    fL.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.R[d.getDomId()];
                return !!vh(d).length || wh(d, xh, 16)
            },
            c = this.B.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(Yq(b)))
    };
    var gL = function(a, b, c, d, e) {
        Y.call(this, a, 864);
        this.L = b;
        this.N = c;
        this.X = d;
        this.l = bz(this);
        this.o = W(this, e)
    };
    _.P(gL, Y);
    gL.prototype.j = function() {
        for (var a = _.B(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.Do(this.L, b)) {
                var c = this.N,
                    d = c.V;
                c = c.R[b.getDomId()];
                tm(c, d) && um(b, this.X, c, d);
                zF(this.L, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = F(c, 10)) ? f : F(d, 11)) && e && um(b, this.X, c, d)
            }
        this.l.notify()
    };
    var hL = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        _.yv.call(this);
        var u = this;
        this.context = a;
        this.F = b;
        this.C = c;
        this.L = d;
        this.za = e;
        this.xa = f;
        this.B = g;
        this.o = h;
        this.O = k;
        this.l = l;
        this.isSecureContext = n;
        this.H = m;
        this.X = p;
        this.G = r;
        this.j = new w.Map;
        this.m = new eF(a);
        _.Cm(this, this.m);
        gF(this.m, oF, function(v) {
            v = v.detail;
            var x = u.j.get(v);
            x && (u.j.delete(v), x.Ca())
        })
    };
    _.P(hL, _.yv);
    var iL = function(a, b, c, d) {
        var e = ++a.L.l;
        a.j.has(e);
        var f = new nf;
        a.j.set(e, f);
        b = new cL(a.context, a.C, b);
        H(f, b);
        var g = new fL(a.context, d.R, b.o);
        H(f, g);
        b = new dL(a.context, a.L, !!F(d.V, 6), Zl("google_nofetch"), g.l);
        H(f, b);
        g = new gL(a.context, a.L, d, document, g.o);
        H(f, g);
        a = new aL(a.context, a.F, a.C, d, a.L, a.za, c, a.B, a.o, e, {
            Pd: a.m,
            ce: a.xa
        }, a.l, a.O, a.isSecureContext, a.H, a.G, a.X, b.l, g.l);
        H(f, a);
        Bf(f)
    };
    var jL = function(a, b, c, d, e, f, g, h, k) {
        aJ.call(this, a, c, k);
        this.L = d;
        this.H = new w.Set;
        this.O = {};
        this.M = new dK(a, d);
        var l;
        this.Z = new hL(a, b, c, d, new rz(window, _.G($v)), null != (l = this.l) ? l : this, _.Ae(sJ), e, this.M, f, g, h, document, window);
        _.Cm(this, this.Z)
    };
    _.P(jL, aJ);
    jL.prototype.getName = function() {
        return "publisher_ads"
    };
    jL.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ka(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        this.enable();
        var h = xk(c, this.context, this.C, a, b, f),
            k = h.slotId;
        h = h.Xa;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            cn(this.C, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.C, lj("PubAdsService.display", [a, b, d]))
    };
    var ZG = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.R[b.getDomId()]) && _.A(e, 19, !0);
        e = {
            id: ku(b.getDomId())
        };
        Za(d, ig(e));
        Qh(b, d) ? (a.enable(), uF(a.L, b), kL(a, c, b)) : gi("gpt_pb_write", function(f) {
            mi(f, a.context)
        })
    };
    jL.prototype.slotAdded = function(a, b) {
        var c = this;
        F(b, 17) || this.m && uF(this.L, a);
        this.l.dispatchEvent(lF, 724, {
            ud: a.getDomId(),
            R: b
        });
        gF(a, Fo, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new QI(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.l.dispatchEvent("slotRenderEnded", 708, f)
        });
        gF(a, jF, function() {
            return void c.l.dispatchEvent("slotResponseReceived", 709, new WI(a, c.getName()))
        });
        aJ.prototype.slotAdded.call(this, a, b)
    };
    jL.prototype.K = function(a, b) {
        this.enable();
        this.m && uF(this.L, b);
        this.C.info(YF());
        var c = a.V,
            d = a.R,
            e = F(c, 6);
        if (e || !this.L.hb(b)) e && (e = Qh(b)) && b.dispatchEvent(iF, 778, e), F(c, 4) && (d = d[b.getDomId()], tm(d, c) && !this.L.hb(b) && um(b, document, d, c)), kL(this, a, b)
    };
    var kL = function(a, b, c) {
            var d = lL(a, b, c);
            mL(a, d, b, {
                fb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.O[b]) {
                c = _.B(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, mL(a, d.W, d.N, d.ac);
                delete a.O[b]
            }
        },
        lL = function(a, b, c) {
            var d = b.V;
            b = b.R;
            if (F(d, 4)) return [];
            var e;
            return !F(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : F(e, 17)) ? (a.H.add(c), _.Jm(c, function() {
                return void a.H.delete(c)
            }), [c]) : a.j.filter(function(f) {
                if (a.H.has(f)) return !1;
                a.H.add(f);
                _.Jm(f, function() {
                    return void a.H.delete(f)
                });
                return !0
            })
        },
        mL = function(a, b, c, d) {
            a.C.info(eG());
            if (nL(a, b, d, c) && 1 !== d.fb)
                for (b = _.B(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.l.dispatchEvent(mF, 725, {
                    ud: d,
                    R: c.R[d]
                })
        },
        nL = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.Do(a.L, e)) return !1;
                var f = d.R[e.getDomId()];
                5 !== Dl(f) && 4 !== Dl(f) || _.vF(a.L, e);
                return !0
            });
            if (!b.length) return null;
            iL(a.Z, b, c, d);
            return b
        };
    jL.prototype.refresh = function(a, b, c) {
        b = oL(this, b);
        if (!b.length) return !1;
        pL(this, a, b, null != c ? c : {
            fb: 2
        });
        return !0
    };
    var oL = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.I) return !0;
                O(a.C, hG(String(d)));
                return !1
            })
        },
        pL = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.m) {
                var h = {};
                e = _.B(c);
                for (f = e.next(); !f.done; h = {
                        Ob: h.Ob
                    }, f = e.next()) h.Ob = f.value, a.H.add(h.Ob), _.Jm(h.Ob, function(k) {
                    return function() {
                        return void a.H.delete(k.Ob)
                    }
                }(h));
                mL(a, c, b, d)
            } else c.length && F(b.V, 6) ? (O(a.C, dG(g), e), e = e.getAdUnitPath(), f = null != (h = a.O[e]) ? h : [], f.push({
                W: c,
                N: b,
                ac: d
            }), a.O[e] = f) : O(a.C, bG(g), e)
        };
    jL.prototype.U = function() {
        var a = this,
            b = $h().j;
        if (F(b, 6))
            for (var c = _.B(this.j), d = c.next(); !d.done; d = c.next()) this.m && uF(this.L, d.value);
        iH(this, b);
        gF(this.l, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.t(a.j, "find").call(a.j, function(g) {
                return f === g.j
            });
            qL(a, [e], $h().j, $h().m, a.L)
        });
        sj("pubadsReady", !0)
    };
    jL.prototype.destroySlots = function(a) {
        a = aJ.prototype.destroySlots.call(this, a);
        if (a.length && this.m) {
            var b = $h();
            rL(this, a, b.j, b.m)
        }
        return a
    };
    var kH = function(a, b, c, d) {
            if (!a.m) return O(a.C, cG(), d[0]), !1;
            var e = oL(a, d);
            if (!e.length) return O(a.C, lj("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.C.info(fG());
            rL(a, e, b, c);
            return !0
        },
        rL = function(a, b, c, d) {
            for (var e = _.B(b), f = e.next(); !f.done; f = e.next()) rF(a.L, f.value);
            qL(a, b, c, d, a.L)
        };
    jL.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Ae(Be).m(a)
    };
    var qL = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.B(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                eK(a.M, g);
                var h = d[g.getDomId()];
                tm(h, c) && um(g, f.document, h, c);
                zF(e, g)
            }
        },
        jH = function(a, b, c, d) {
            _.A(d, 21, !0);
            _.A(d, 22, String(null != b ? b : ""));
            _.A(d, 23, String(null != c ? c : ""));
            iH(a, d)
        },
        lH = function(a, b) {
            if (!a.m) return null;
            var c, d;
            return {
                vid: null != (c = y(b, 22)) ? c : "",
                cmsid: null != (d = y(b, 23)) ? d : ""
            }
        },
        iH = function(a, b) {
            F(b, 21) && a.m && _.A(b, 29, Zu())
        };
    var sL = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        tL = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var aq = "2022120601";
    (function(a, b, c) {
        var d = null != b ? b : {
            Ja: bq(),
            eb: "",
            qb: new gq(0),
            ie: !0,
            Jd: 1
        };
        try {
            var e = rj();
            (0, D.be)(!_.Ae(Ng).j);
            _.t(Object, "assign").call(Object, Og, e._vars_);
            e._vars_ = Og;
            if (e.evalScripts) e.evalScripts(), gi("gpt_evalscripts", function(ba) {
                L(ba, "vrg", String(bq()));
                L(ba, "pub_url", document.URL)
            }, .01);
            else {
                CE();
                sj("evalScripts", function() {
                    try {
                        zn()
                    } catch (Xa) {
                        bh(d, 297, Xa);
                        var ba, ia;
                        null == (ba = window.console) || null == (ia = ba.error) || ia.call(ba, Xa)
                    }
                });
                try {
                    oz()
                } catch (ba) {
                    bh(d, 408, ba)
                }
                om();
                try {
                    mz(), vk(13), vk(3)
                } catch (ba) {
                    bh(d, 408, ba)
                }
                var f = ef(Vw);
                f.length && Ed(f);
                var g = eq(),
                    h = null != b ? b : hq(g),
                    k = null != c ? c : new OI(h);
                Xg(h);
                var l = new qF,
                    n = new iJ(l),
                    m = new pJ(h),
                    p = new II(h, n, k, l),
                    r = Ju(),
                    u = _.Ae(uk);
                if (_.G(jw)) {
                    var v = new eF(h);
                    var x = new eF(h);
                    var I = new eF(h)
                }
                var K = new jL(h, n, k, l, m, p, r, u, v);
                if (_.G(ex)) {
                    var M;
                    new eI(h, null != (M = v) ? M : K, l, n)
                }
                if (_.Pg(260)) {
                    var S;
                    JI(p, null != (S = v) ? S : K)
                }
                var T = $h().j;
                Vn(h, k, K, a, T, n, x, I);
                var Z = _.Yg(h, 77, function() {
                    var ba = e.cmd;
                    if (!ba || Array.isArray(ba)) {
                        var ia = new fI(k);
                        e.cmd = ij(h, ia);
                        null != ba && ba.length && ia.push.apply(ia, ba)
                    }
                });
                e.fifWin && "complete" !== document.readyState ? _.eb(window, "load", function() {
                    return window.setTimeout(Z, 0)
                }) : Z();
                zn();
                if (_.G(ex) || _.Ae($g).j) $p(), Gj(document, _.G(hx) ? C(sL) : C(tL));
                po(h, k);
                Bj(h)
            }
        } catch (ba) {
            bh(d, 106, ba)
        }
    })(window);
}).call(this, {});