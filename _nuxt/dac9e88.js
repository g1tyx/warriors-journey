(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        132: function (t, e, n) {
            "use strict";
            n(37), n(1), n(3), n(103), n(122), n(16), n(2), n(17), n(22), n(61), n(46), n(10), n(4), n(62), n(67), n(48);
            var r = n(11);

            function o(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, f = !0,
                    l = !1;
                return {
                    s: function () {
                        n = n.call(t)
                    },
                    n: function () {
                        var t = n.next();
                        return f = t.done, t
                    },
                    e: function (t) {
                        l = !0, o = t
                    },
                    f: function () {
                        try {
                            f || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var f = window.requestIdleCallback || function (t) {
                    var e = Date.now();
                    return setTimeout((function () {
                        t({
                            didTimeout: !1,
                            timeRemaining: function () {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                l = window.cancelIdleCallback || function (t) {
                    clearTimeout(t)
                },
                h = window.IntersectionObserver && new window.IntersectionObserver((function (t) {
                    t.forEach((function (t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function () {
                    this.prefetch && !this.noPrefetch && (this.handleId = f(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function () {
                    l(this.handleId), this.__observed && (h.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function () {
                        h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), h.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function () {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function () {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function () {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (t) {
                            return t.components.default
                        })).filter((function (t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function () {
                        if (this.canPrefetch()) {
                            h.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function () {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        162: function (t, e, n) {
            "use strict";
            e.a = {}
        },
        165: function (t, e, n) {
            var r = n(312);

            function o() {
                return (o = r(regeneratorRuntime.mark((function t() {
                    var e, r, o;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(!1 in navigator)) {
                                    t.next = 2;
                                    break
                                }
                                throw new Error("serviceWorker is not supported in current browser!");
                            case 2:
                                return t.next = 4, n.e(16).then(n.bind(null, 331));
                            case 4:
                                return e = t.sent, r = e.Workbox, o = new r("./sw.js", {
                                    scope: "./warriors-journey"
                                }), t.next = 9, o.register();
                            case 9:
                                return t.abrupt("return", o);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            n(63), n(1), n(46), n(48), window.$workbox = function () {
                return o.apply(this, arguments)
            }().catch((function (t) {}))
        },
        214: function (t, e, n) {
            var content = n(289);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(85).default)("6ac3c623", content, !0, {
                sourceMap: !1
            })
        },
        215: function (t, e, n) {
            var content = n(291);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(85).default)("7e56e4e3", content, !0, {
                sourceMap: !1
            })
        },
        216: function (t, e, n) {
            var content = n(297);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(85).default)("56b15182", content, !0, {
                sourceMap: !1
            })
        },
        235: function (t) {
            t.exports = JSON.parse('{"title":"Warrior\'s Journey","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Warrior\'s Journey"},{"hid":"author","name":"author","content":"SixBytesUnder"},{"hid":"description","name":"description","content":"Incremental and idle game about one warrior\'s journey before destination"},{"hid":"theme-color","name":"theme-color","content":"#161F28"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Warrior\'s Journey"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Warrior\'s Journey"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Incremental and idle game about one warrior\'s journey before destination"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"../_nuxt/icons/icon_64x64.a98cfb.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"../_nuxt/icons/icon_512x512.a98cfb.png","sizes":"512x512"},{"rel":"manifest","href":"../_nuxt/manifest.1fb6b2d1.json","hid":"manifest"}],"htmlAttrs":{"lang":"en-GB"}}')
        },
        237: function (t, e, n) {
            "use strict";
            var r = n(32),
                o = (n(63), n(1), n(37), n(11)),
                c = n(9),
                f = window.__NUXT__;

            function l() {
                if (!this._hydrated) return this.$fetch()
            }

            function h() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = f.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e])
                }
            }

            function d() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function () {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function (t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function () {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function () {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = d.bind(this), Object(c.a)(this, "created", h), Object(c.a)(this, "beforeMount", l))
                }
            }
        },
        242: function (t, e, n) {
            n(243), t.exports = n(244)
        },
        244: function (t, e, n) {
            "use strict";
            n.r(e),
                function (t) {
                    n(17), n(61), n(4), n(62), n(67);
                    var e = n(40),
                        r = n(32),
                        o = (n(143), n(258), n(271), n(273), n(63), n(22), n(1), n(3), n(2), n(5), n(103), n(122), n(14), n(16), n(10), n(46), n(48), n(37), n(11)),
                        c = n(230),
                        f = n(162),
                        l = n(9),
                        h = n(55),
                        d = n(237),
                        m = n(132);

                    function v(t, e) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = function (t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return y(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                n && (t = n);
                                var i = 0,
                                    r = function () {};
                                return {
                                    s: r,
                                    n: function () {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function (t) {
                                        throw t
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, c = !0,
                            f = !1;
                        return {
                            s: function () {
                                n = n.call(t)
                            },
                            n: function () {
                                var t = n.next();
                                return c = t.done, t
                            },
                            e: function (t) {
                                f = !0, o = t
                            },
                            f: function () {
                                try {
                                    c || null == n.return || n.return()
                                } finally {
                                    if (f) throw o
                                }
                            }
                        }
                    }

                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.default.__nuxt__fetch__mixin__ || (o.default.mixin(d.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var x, w, _ = [],
                        j = window.__NUXT__ || {},
                        O = j.config || {};
                    O._app && (n.p = Object(l.v)(O._app.cdnURL, O._app.assetsPath)), Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var $ = o.default.config.errorHandler || console.error;

                    function k(t, e, n) {
                        for (var r = function (component) {
                                var t = function (component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(l.g)(n) : [], c = Math.max(t.length, o.length), f = [], h = function (i) {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function (t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function (t) {
                                    n[t] = e[t]
                                })), f.push(n)
                            }, i = 0; i < c; i++) h(i);
                        return f
                    }

                    function C(t, e, n) {
                        return E.apply(this, arguments)
                    }

                    function E() {
                        return (E = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, f, h, d = this;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(l.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(l.r)(e, (function (t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function (t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function (t) {
                                                return d._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, f = c.statusCode || c.status || c.response && c.response.status || 500, h = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: f,
                                            message: h
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function R(t, e) {
                        return j.serverRendered && e && Object(l.b)(t, e), t._Ctor = t, t
                    }

                    function S(t) {
                        return Object(l.d)(t, function () {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                var f;
                                return regeneratorRuntime.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return f = R(Object(l.s)(e), j.data ? j.data[c] : null), r.components[o] = f, t.abrupt("return", f);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e, n, r, o, c) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function P(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(l.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function (t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function (t) {
                                return "function" == typeof t ? t : ("function" != typeof f.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), f.a[t])
                            })), !c) return Object(l.o)(o, e)
                    }

                    function T(t, e, n) {
                        return A.apply(this, arguments)
                    }

                    function A() {
                        return A = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, f, d, m, y, w, j, O, $, C, E, R, S, T, A, D = this;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return !1, e === n ? (_ = [], !0) : (c = [], _ = Object(l.g)(n, c).map((function (t, i) {
                                            return Object(l.c)(n.matched[c[i]].path)(n.params)
                                        }))), f = !1, d = function (path) {
                                            n.path === path.path && D.$loading.finish && D.$loading.finish(), n.path !== path.path && D.$loading.pause && D.$loading.pause(), f || (f = !0, o(path))
                                        }, t.next = 8, Object(l.t)(x, {
                                            route: e,
                                            from: n,
                                            next: d.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(l.g)(e, m)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, P.call(this, y, x.context);
                                    case 15:
                                        if (!f) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return w = (h.a.options || h.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(h.a, x.context) : w);
                                    case 20:
                                        return j = t.sent, t.next = 23, P.call(this, y, x.context, j);
                                    case 23:
                                        if (!f) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 27:
                                        return y.forEach((function (t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions(k(y, e, n)), t.prev = 29, t.next = 32, P.call(this, y, x.context);
                                    case 32:
                                        if (!f) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!x.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 36:
                                        return "function" == typeof (O = y[0].options.layout) && (O = O(x.context)), t.next = 40, this.loadLayout(O);
                                    case 40:
                                        return O = t.sent, t.next = 43, P.call(this, y, x.context, O);
                                    case 43:
                                        if (!f) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!x.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 47:
                                        $ = !0, t.prev = 48, C = v(y), t.prev = 50, C.s();
                                    case 52:
                                        if ((E = C.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof (R = E.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, R.options.validate(x.context);
                                    case 58:
                                        if ($ = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), C.e(t.t0);
                                    case 68:
                                        return t.prev = 68, C.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 77:
                                        if ($) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 80:
                                        return t.next = 82, Promise.all(y.map(function () {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, f, h, d, v, y, w, p;
                                                return regeneratorRuntime.wrap((function (t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(l.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== _[i], D._routeChanged && o ? r._dataRefresh = !0 : D._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : D._queryChanged && (!0 === (f = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(f) ? r._dataRefresh = f.some((function (t) {
                                                                    return D._diffQuery[t]
                                                                })) : "function" == typeof f && (S || (S = Object(l.h)(e)), r._dataRefresh = f.apply(S[i], [e.query, n.query]))), D._hadError || !D._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return h = [], d = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = d && v ? 30 : 45, d && ((w = Object(l.q)(r.options.asyncData, x.context)).then((function (t) {
                                                                Object(l.b)(r, t), D.$loading.increase && D.$loading.increase(y)
                                                            })), h.push(w)), D.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function (t) {
                                                                D.$loading.increase && D.$loading.increase(y)
                                                            })), h.push(p)), t.abrupt("return", Promise.all(h));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function (e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        f || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (T = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, T));
                                    case 90:
                                        return _ = [], Object(l.k)(T), "function" == typeof (A = (h.a.options || h.a).layout) && (A = A(x.context)), t.next = 96, this.loadLayout(A);
                                    case 96:
                                        this.error(T), this.$nuxt.$emit("routeChanged", e, n, T), o();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), A.apply(this, arguments)
                    }

                    function D(t, n) {
                        Object(l.d)(t, (function (t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function L(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var n = e ? (h.a.options || h.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof n && (n = n(x.context)), this.setLayout(n)
                    }

                    function N(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function I(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(l.h)(t),
                                c = Object(l.g)(t),
                                f = !1;
                            o.default.nextTick((function () {
                                r.forEach((function (t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.default.set(t.$data, n, e[n]);
                                        f = !0
                                    }
                                })), f && window.$nuxt.$nextTick((function () {
                                    window.$nuxt.$emit("triggerScroll")
                                })), N(n)
                            }))
                        }
                    }

                    function M(t) {
                        window.onNuxtReadyCbs.forEach((function (e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function (e, n) {
                            o.default.nextTick((function () {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function U() {
                        return (U = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, r, c, f, h;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return x = e.app, w = e.router, n = new o.default(x), r = j.layout || "default", t.next = 6, n.loadLayout(r);
                                    case 6:
                                        return n.setLayout(r), c = function () {
                                            n.$mount("#__nuxt"), w.afterEach(D), w.afterEach(L.bind(n)), w.afterEach(I.bind(n)), o.default.nextTick((function () {
                                                M(n)
                                            }))
                                        }, t.next = 10, Promise.all(S(x.context.route));
                                    case 10:
                                        if (f = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), f.length && (n.setTransitions(k(f, w.currentRoute)), _ = w.currentRoute.matched.map((function (t) {
                                                return Object(l.c)(t.path)(w.currentRoute.params)
                                            }))), n.$loading = {}, j.error && n.error(j.error), w.beforeEach(C.bind(n)), w.beforeEach(T.bind(n)), !j.serverRendered || !Object(l.n)(j.routePath, n.context.route.path)) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.abrupt("return", c());
                                    case 19:
                                        return h = function () {
                                            D(w.currentRoute, w.currentRoute), L.call(n, w.currentRoute), N(n), c()
                                        }, t.next = 22, new Promise((function (t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 22:
                                        T.call(n, w.currentRoute, w.currentRoute, (function (path) {
                                            if (path) {
                                                var t = w.afterEach((function (e, n) {
                                                    t(), h()
                                                }));
                                                w.push(path, void 0, (function (t) {
                                                    t && $(t)
                                                }))
                                            } else h()
                                        }));
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(h.b)(null, j.config).then((function (t) {
                        return U.apply(this, arguments)
                    })).catch($)
                }.call(this, n(56))
        },
        288: function (t, e, n) {
            "use strict";
            n(214)
        },
        289: function (t, e, n) {
            var r = n(84)(!1);
            r.push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = r
        },
        290: function (t, e, n) {
            "use strict";
            n(215)
        },
        291: function (t, e, n) {
            var r = n(84)(!1);
            r.push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = r
        },
        296: function (t, e, n) {
            "use strict";
            n(216)
        },
        297: function (t, e, n) {
            var r = n(84)(!1);
            r.push([t.i, 'body,html{font-family:"Roboto",sans-serif;background-color:#161f28;color:#c7c7c7;font-size:.85em;letter-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}*,:after,:before{box-sizing:border-box;margin:0}', ""]), t.exports = r
        },
        55: function (t, e, n) {
            "use strict";
            n.d(e, "b", (function () {
                return St
            })), n.d(e, "a", (function () {
                return T
            }));
            var r = {};
            n.r(r), n.d(r, "Achievements", (function () {
                return H
            })), n.d(r, "Highscore", (function () {
                return J
            })), n.d(r, "Loading", (function () {
                return K
            })), n.d(r, "Shards", (function () {
                return W
            })), n.d(r, "Spoils", (function () {
                return X
            })), n.d(r, "Theend", (function () {
                return G
            }));
            n(5), n(4), n(2), n(6), n(3), n(7);
            var o = n(32),
                c = n(0),
                f = (n(63), n(22), n(16), n(1), n(10), n(20), n(11)),
                l = n(231),
                h = n(163),
                d = n.n(h),
                m = n(83),
                v = n.n(m),
                y = (n(46), n(48), n(164)),
                x = n(54),
                w = n(9);
            "scrollRestoration" in window.history && (Object(w.u)("manual"), window.addEventListener("beforeunload", (function () {
                Object(w.u)("auto")
            })), window.addEventListener("load", (function () {
                Object(w.u)("manual")
            })));

            function _(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function j(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _(Object(source), !0).forEach((function (e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var O = function () {};
            f.default.use(y.a);
            var $ = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function (t, e, n) {
                    var r = !1,
                        o = t !== e;
                    n ? r = n : o && function (t) {
                        var e = Object(w.g)(t);
                        if (1 === e.length) {
                            var n = e[0].options;
                            return !1 !== (void 0 === n ? {} : n).scrollToTop
                        }
                        return e.some((function (t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (r = {
                        x: 0,
                        y: 0
                    });
                    var c = window.$nuxt;
                    return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function () {
                        return c.$emit("triggerScroll")
                    })), new Promise((function (e) {
                        c.$once("triggerScroll", (function () {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/privacy-policy",
                    component: function () {
                        return Object(w.m)(n.e(11).then(n.bind(null, 890)))
                    },
                    name: "privacy-policy"
                }, {
                    path: "/terms-and-conditions",
                    component: function () {
                        return Object(w.m)(n.e(12).then(n.bind(null, 891)))
                    },
                    name: "terms-and-conditions"
                }, {
                    path: "/",
                    component: function () {
                        return Object(w.m)(Promise.all([n.e(0), n.e(15), n.e(10)]).then(n.bind(null, 889)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function k(t, e) {
                var base = e._app && e._app.basePath || $.base,
                    n = new y.a(j(j({}, $), {}, {
                        base: base
                    })),
                    r = n.push;
                n.push = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return r.call(this, t, e, n)
                };
                var o = n.resolve.bind(n);
                return n.resolve = function (t, e, n) {
                    return "string" == typeof t && (t = Object(x.c)(t)), o(t, e, n)
                }, n
            }
            var C = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function (t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, f = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, h = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && h++, n = n.$parent;
                        data.nuxtChildDepth = h;
                        var d = f[h] || l,
                            m = {};
                        E.forEach((function (t) {
                            void 0 !== d[t] && (m[t] = d[t])
                        }));
                        var v = {};
                        R.forEach((function (t) {
                            "function" == typeof d[t] && (v[t] = d[t].bind(c))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function (t) {
                                if (window.$nuxt.$nextTick((function () {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(c, t)
                            }, !1 === d.css) {
                            var x = v.leave;
                            (!x || x.length < 2) && (v.leave = function (t, e) {
                                x && x.call(c, t), c.$nextTick(e)
                            })
                        }
                        var w = o("routerView", data);
                        return r.keepAlive && (w = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [w])), o("transition", {
                            props: m,
                            on: v
                        }, [w])
                    }
                },
                E = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                R = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                S = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function () {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function () {
                            return this.error.message || "Error"
                        }
                    },
                    head: function () {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                P = (n(288), n(69)),
                T = Object(P.a)(S, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "__nuxt-error-page"
                    }, [n("div", {
                        staticClass: "error"
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {
                        staticClass: "description"
                    }, [void 0 === t.$route ? n("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "./"
                        }
                    }) : n("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "./"
                        }
                    }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
                }), [function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "logo"
                    }, [n("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Nuxt")])])
                }], !1, null, null, null).exports,
                A = n(34),
                D = (n(36), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: C,
                        NuxtError: T
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function (t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function () {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(A.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function () {
                        f.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function (t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "./"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
                            return e.displayingNuxtError = !1
                        })), t(T, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                L = (n(17), n(61), n(62), n(67), n(37), {
                    name: "NuxtLoading",
                    data: function () {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function () {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function () {
                        this.clear()
                    },
                    methods: {
                        clear: function () {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function () {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function (t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function () {
                            return this.percent
                        },
                        increase: function (t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function (t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function () {
                            return clearInterval(this._timer), this
                        },
                        resume: function () {
                            return this.startTimer(), this
                        },
                        finish: function () {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function () {
                            var t = this;
                            return this.clear(), setTimeout((function () {
                                t.show = !1, t.$nextTick((function () {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function (t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function () {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function (t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                N = (n(290), Object(P.a)(L, undefined, undefined, !1, null, null, null).exports),
                I = (n(292), n(294), {
                    name: "IndexPage"
                }),
                M = (n(296), Object(P.a)(I, (function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("nuxt")], 1)
                }), [], !1, null, null, null).exports);

            function U(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return B(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function () {
                        n = n.call(t)
                    },
                    n: function () {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function (t) {
                        f = !0, o = t
                    },
                    f: function () {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function B(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var z = {
                    _default: Object(w.s)(M)
                },
                F = {
                    render: function (t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function (t) {
                                        window.$nuxt.$nextTick((function () {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function () {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function () {
                        f.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function () {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function () {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function () {
                            return !this.isOnline
                        },
                        isFetching: function () {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function () {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function () {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(w.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map((function (e) {
                                                var p = [];
                                                if (e.$options.fetch && e.$options.fetch.length && p.push(Object(w.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                                else {
                                                    var n, r = U(Object(w.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (t) {
                                                        r.e(t)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return e.$options.asyncData && p.push(Object(w.q)(e.$options.asyncData, t.context).then((function (t) {
                                                    for (var n in t) f.default.set(e.$data, n, t[n])
                                                }))), Promise.all(p)
                                            })), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(w.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function () {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (T.options || T).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function (t) {
                            return t && z["_" + t] || (t = "default"), this.layoutName = t, this.layout = z["_" + t], this.layout
                        },
                        loadLayout: function (t) {
                            return t && z["_" + t] || (t = "default"), Promise.resolve(z["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: N
                    }
                },
                H = (n(103), n(122), function () {
                    return n.e(4).then(n.bind(null, 568)).then((function (t) {
                        return Q(t.default || t)
                    }))
                }),
                J = function () {
                    return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 569)).then((function (t) {
                        return Q(t.default || t)
                    }))
                },
                K = function () {
                    return n.e(6).then(n.bind(null, 566)).then((function (t) {
                        return Q(t.default || t)
                    }))
                },
                W = function () {
                    return n.e(7).then(n.bind(null, 678)).then((function (t) {
                        return Q(t.default || t)
                    }))
                },
                X = function () {
                    return n.e(8).then(n.bind(null, 565)).then((function (t) {
                        return Q(t.default || t)
                    }))
                },
                G = function () {
                    return n.e(9).then(n.bind(null, 567)).then((function (t) {
                        return Q(t.default || t)
                    }))
                };

            function Q(t) {
                if (!t || !t.functional) return t;
                var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
                return {
                    render: function (n) {
                        var r = {},
                            o = {};
                        for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                        return n(t, {
                            on: this.$listeners,
                            attrs: r,
                            props: o,
                            scopedSlots: this.$scopedSlots
                        }, this.$slots.default)
                    }
                }
            }
            for (var V in r) f.default.component(V, r[V]), f.default.component("Lazy" + V, r[V]);
            var Y = n(238);
            f.default.use(Y.a, {});
            n(105), n(14);
            var Z = "dataLayer",
                tt = "GTM-TL57X3";
            var et = function (t, e) {
                    var n = "GTM-TL57X3",
                        r = (t.$config && t.$config.gtm || {}).id,
                        o = function (t, e) {
                            return {
                                init: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt;
                                    !e[t] && window._gtm_inject && (window._gtm_inject(t), e[t] = !0)
                                },
                                push: function (t) {
                                    window[Z] || (window[Z] = []), window[Z].push(t)
                                }
                            }
                        }(0, Object(c.a)({}, n, !0));
                    r && r !== n && o.init(r), t.$gtm = o, e("gtm", t.$gtm)
                },
                nt = n(165),
                ot = n.n(nt),
                it = n(40);

            function at(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return st(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return st(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function () {
                        n = n.call(t)
                    },
                    n: function () {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function (t) {
                        f = !0, o = t
                    },
                    f: function () {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function st(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function ut(t, e, n) {
                return t.find((function (t) {
                    return n ? t[e] === n : t[e]
                }))
            }
            var meta = n(235),
                ct = function (t) {
                    ! function (t, e) {
                        if ("function" != typeof t)
                            for (var n in e) {
                                var r = e[n];
                                if (Array.isArray(r)) {
                                    t[n] = t[n] || [];
                                    var o, c = at(r);
                                    try {
                                        for (c.s(); !(o = c.n()).done;) {
                                            var f = o.value;
                                            f.hid && ut(t[n], "hid", f.hid) || f.name && ut(t[n], "name", f.name) || t[n].push(f)
                                        }
                                    } catch (t) {
                                        c.e(t)
                                    } finally {
                                        c.f()
                                    }
                                } else if ("object" === Object(it.a)(r))
                                    for (var l in t[n] = t[n] || {}, r) t[n][l] = r[l];
                                else void 0 === t[n] && (t[n] = r)
                            } else console.warn("Cannot merge meta. Avoid using head as a function!")
                    }(t.app.head, meta)
                },
                ft = function (t, e) {
                    return lt.apply(this, arguments)
                };

            function lt() {
                return (lt = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var r;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                r = {
                                    "64x64": "../_nuxt/icons/icon_64x64.a98cfb.png",
                                    "120x120": "../_nuxt/icons/icon_120x120.a98cfb.png",
                                    "144x144": "../_nuxt/icons/icon_144x144.a98cfb.png",
                                    "152x152": "../_nuxt/icons/icon_152x152.a98cfb.png",
                                    "192x192": "../_nuxt/icons/icon_192x192.a98cfb.png",
                                    "384x384": "../_nuxt/icons/icon_384x384.a98cfb.png",
                                    "512x512": "../_nuxt/icons/icon_512x512.a98cfb.png",
                                    ipad_1536x2048: "../_nuxt/icons/splash_ipad_1536x2048.a98cfb.png",
                                    ipadpro9_1536x2048: "../_nuxt/icons/splash_ipadpro9_1536x2048.a98cfb.png",
                                    ipadpro10_1668x2224: "../_nuxt/icons/splash_ipadpro10_1668x2224.a98cfb.png",
                                    ipadpro12_2048x2732: "../_nuxt/icons/splash_ipadpro12_2048x2732.a98cfb.png",
                                    iphonese_640x1136: "../_nuxt/icons/splash_iphonese_640x1136.a98cfb.png",
                                    iphone6_50x1334: "../_nuxt/icons/splash_iphone6_50x1334.a98cfb.png",
                                    iphoneplus_1080x1920: "../_nuxt/icons/splash_iphoneplus_1080x1920.a98cfb.png",
                                    iphonex_1125x2436: "../_nuxt/icons/splash_iphonex_1125x2436.a98cfb.png",
                                    iphonexr_828x1792: "../_nuxt/icons/splash_iphonexr_828x1792.a98cfb.png",
                                    iphonexsmax_1242x2688: "../_nuxt/icons/splash_iphonexsmax_1242x2688.a98cfb.png"
                                }, n("icon", (function (t) {
                                    return r[t + "x" + t] || ""
                                }));
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var pt = n(109),
                ht = n.n(pt),
                mt = n(236);

            function gt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function bt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? gt(Object(source), !0).forEach((function (e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : gt(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function vt(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return yt(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function () {
                        n = n.call(t)
                    },
                    n: function () {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function (t) {
                        f = !0, o = t
                    },
                    f: function () {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function yt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var xt = {
                    setBaseURL: function (t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function (t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = vt(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function (t) {
                        this.interceptors.request.use((function (e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function (t) {
                        this.interceptors.response.use((function (e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function (t) {
                        this.interceptors.request.use(void 0, (function (e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function (t) {
                        this.interceptors.response.use(void 0, (function (e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function (t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function (t) {
                        return Ot(Object(mt.a)(t, this.defaults))
                    }
                }, wt = function () {
                    var t = jt[_t];
                    xt["$" + t] = function () {
                        return this[t].apply(this, arguments).then((function (t) {
                            return t && t.data
                        }))
                    }
                }, _t = 0, jt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; _t < jt.length; _t++) wt();
            var Ot = function (t) {
                    var e = ht.a.create(t);
                    return e.CancelToken = ht.a.CancelToken, e.isCancel = ht.a.isCancel,
                        function (t) {
                            for (var e in xt) t[e] = xt[e].bind(t)
                        }(e), e.onRequest((function (t) {
                            t.headers = bt(bt({}, e.defaults.headers.common), t.headers)
                        })), $t(e), e
                },
                $t = function (t) {
                    var e = {
                            finish: function () {},
                            start: function () {},
                            fail: function () {},
                            set: function () {}
                        },
                        n = function () {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        r = 0;
                    t.onRequest((function (t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function (t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function (t) {
                        t && t.config && !1 === t.config.progress || (r--, ht.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                    }));
                    var o = function (t) {
                        if (r && t.total) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                kt = function (t, e) {
                    var n = t.$config && t.$config.axios || {},
                        r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/api";
                    var o = Ot({
                        baseURL: r,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = o, e("axios", o)
                };

            function Ct(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Et(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ct(Object(source), !0).forEach((function (e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ct(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            f.default.component(d.a.name, d.a), f.default.component(v.a.name, Et(Et({}, v.a), {}, {
                render: function (t, e) {
                    return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(t, e)
                }
            })), f.default.component(C.name, C), f.default.component("NChild", C), f.default.component(D.name, D), Object.defineProperty(f.default.prototype, "$nuxt", {
                get: function () {
                    var t = this.$root.$options.$nuxt;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), f.default.use(l.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var Rt = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };

            function St(t) {
                return Pt.apply(this, arguments)
            }

            function Pt() {
                return Pt = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, c, l, h, path, d, m = arguments;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return d = function (t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    c[t = "$" + t] = e, c.context[t] || (c.context[t] = e);
                                    var n = "__nuxt_" + t + "_installed__";
                                    f.default[n] || (f.default[n] = !0, f.default.use((function () {
                                        Object.prototype.hasOwnProperty.call(f.default.prototype, t) || Object.defineProperty(f.default.prototype, t, {
                                            get: function () {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, t.next = 4, k(0, n);
                            case 4:
                                return r = t.sent, c = Et({
                                    head: {
                                        htmlAttrs: {
                                            lang: "en"
                                        },
                                        bodyAttrs: {
                                            ondragstart: "return false;",
                                            ondrop: "return false;"
                                        },
                                        title: "Warrior's Journey",
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: "Incremental and idle game about one warrior's journey before destination"
                                        }, {
                                            name: "format-detection",
                                            content: "telephone=no"
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.ico"
                                        }, {
                                            rel: "preconnect",
                                            href: "https://fonts.gstatic.com"
                                        }, {
                                            rel: "stylesheet",
                                            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                                        }],
                                        script: [{
                                            src: "",
                                            async: !0,
                                            defer: !0,
                                            body: !0
                                        }, {
                                            hid: "gtm-script",
                                            innerHTML: "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-TL57X3')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"
                                        }],
                                        style: [],
                                        noscript: [{
                                            hid: "gtm-noscript",
                                            pbody: !0,
                                            innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TL57X3&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>'
                                        }],
                                        __dangerouslyDisableSanitizersByTagID: {
                                            "gtm-script": ["innerHTML"],
                                            "gtm-noscript": ["innerHTML"]
                                        }
                                    },
                                    router: r,
                                    nuxt: {
                                        defaultTransition: Rt,
                                        transitions: [Rt],
                                        setTransitions: function (t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function (t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, Rt, {
                                                    name: t
                                                }) : Object.assign({}, Rt, t) : Rt
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function (t) {
                                            t = t || null, c.context._errored = Boolean(t), t = t ? Object(w.p)(t) : null;
                                            var n = c.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, F), l = e ? e.next : function (t) {
                                    return c.router.push(t)
                                }, e ? h = r.resolve(e.url).route : (path = Object(w.f)(r.options.base, r.options.mode), h = r.resolve(path).route), t.next = 10, Object(w.t)(c, {
                                    route: h,
                                    next: l,
                                    error: c.nuxt.error.bind(c),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 10:
                                d("config", n), t.next = 15;
                                break;
                            case 15:
                                t.next = 18;
                                break;
                            case 18:
                                return t.next = 21, et(c.context, d);
                            case 21:
                                if ("function" != typeof ot.a) {
                                    t.next = 24;
                                    break
                                }
                                return t.next = 24, ot()(c.context, d);
                            case 24:
                                return t.next = 27, ct(c.context);
                            case 27:
                                return t.next = 30, ft(c.context, d);
                            case 30:
                                return t.next = 33, kt(c.context, d);
                            case 33:
                                return t.next = 36, new Promise((function (t, e) {
                                    if (!r.resolve(c.context.route.fullPath).route.matched.length) return t();
                                    r.replace(c.context.route.fullPath, t, (function (n) {
                                        if (!n._isRouter) return e(n);
                                        if (2 !== n.type) return t();
                                        var f = r.afterEach(function () {
                                            var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r) {
                                                return regeneratorRuntime.wrap((function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(w.j)(n);
                                                        case 3:
                                                            c.context.route = e.sent, c.context.params = n.params || {}, c.context.query = n.query || {}, f(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function (t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 36:
                                return t.abrupt("return", {
                                    app: c,
                                    router: r
                                });
                            case 37:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), Pt.apply(this, arguments)
            }
        },
        9: function (t, e, n) {
            "use strict";
            n.d(e, "k", (function () {
                return x
            })), n.d(e, "m", (function () {
                return w
            })), n.d(e, "l", (function () {
                return _
            })), n.d(e, "e", (function () {
                return j
            })), n.d(e, "b", (function () {
                return O
            })), n.d(e, "s", (function () {
                return $
            })), n.d(e, "g", (function () {
                return k
            })), n.d(e, "h", (function () {
                return C
            })), n.d(e, "d", (function () {
                return E
            })), n.d(e, "r", (function () {
                return R
            })), n.d(e, "j", (function () {
                return S
            })), n.d(e, "t", (function () {
                return T
            })), n.d(e, "o", (function () {
                return D
            })), n.d(e, "q", (function () {
                return L
            })), n.d(e, "f", (function () {
                return N
            })), n.d(e, "c", (function () {
                return I
            })), n.d(e, "i", (function () {
                return M
            })), n.d(e, "p", (function () {
                return U
            })), n.d(e, "a", (function () {
                return W
            })), n.d(e, "v", (function () {
                return X
            })), n.d(e, "n", (function () {
                return G
            })), n.d(e, "u", (function () {
                return Q
            }));
            n(61), n(4), n(62), n(67), n(6), n(3), n(7);
            var r = n(40),
                o = n(32),
                c = n(0),
                f = n(34),
                l = (n(63), n(1), n(2), n(241), n(22), n(14), n(16), n(5), n(46), n(48), n(17), n(10), n(20), n(206), n(156), n(79), n(36), n(18), n(281), n(103), n(122), n(11)),
                h = n(54);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? d(Object(source), !0).forEach((function (e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function v(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return y(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    f = !1;
                return {
                    s: function () {
                        n = n.call(t)
                    },
                    n: function () {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function (t) {
                        f = !0, o = t
                    },
                    f: function () {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (f) throw o
                        }
                    }
                }
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function x(t) {
                l.default.config.errorHandler && l.default.config.errorHandler(t)
            }

            function w(t) {
                return t.then((function (t) {
                    return t.default || t
                }))
            }

            function _(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function j(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = t.$children || [],
                    o = v(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && j(c, n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return n
            }

            function O(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function () {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function () {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function $(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = l.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function k(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function (t, r) {
                    return Object.keys(t[n]).map((function (o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function C(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return k(t, e, "instances")
            }

            function E(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function (t, n) {
                    return Object.keys(t.components).reduce((function (r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function R(t, e) {
                return Promise.all(E(t, function () {
                    var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        var f, l;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, n();
                                case 4:
                                    n = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (f = Date.now(), (!(l = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || l + 6e4 < f) && (window.sessionStorage.setItem("nuxt-reload", f), window.location.reload(!0))), t.t0;
                                case 11:
                                    return o.components[c] = n = $(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function (e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function S(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, R(e);
                            case 4:
                                return t.abrupt("return", m(m({}, e), {}, {
                                    meta: k(e).map((function (t, n) {
                                        return m(m({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function T(t, e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var o, c, l, d;
                    return regeneratorRuntime.wrap((function (t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    payload: n.payload,
                                    error: n.error,
                                    base: e.router.options.base,
                                    env: {}
                                }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function (t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var o = Object(r.a)(path);
                                        if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(h.d)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([S(n.route), S(n.from)]);
                            case 3:
                                o = t.sent, c = Object(f.a)(o, 2), l = c[0], d = c[1], n.route && (e.context.route = l), n.from && (e.context.from = d), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function D(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : L(t[0], e).then((function () {
                    return D(t.slice(1), e)
                }))
            }

            function L(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function (n) {
                    t(e, (function (t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function N(base, t) {
                if ("hash" === t) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var e = (path || "/") + window.location.search + window.location.hash;
                return Object(h.c)(e)
            }

            function I(t, e) {
                return function (t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", K(e)));
                    return function (e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? z : encodeURIComponent, c = 0; c < t.length; c++) {
                            var f = t[c];
                            if ("string" != typeof f) {
                                var l = data[f.name || "pathMatch"],
                                    h = void 0;
                                if (null == l) {
                                    if (f.optional) {
                                        f.partial && (path += f.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + f.name + '" to be defined')
                                }
                                if (Array.isArray(l)) {
                                    if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(l) + "`");
                                    if (0 === l.length) {
                                        if (f.optional) continue;
                                        throw new TypeError('Expected "' + f.name + '" to not be empty')
                                    }
                                    for (var d = 0; d < l.length; d++) {
                                        if (h = o(l[d]), !n[c].test(h)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(h) + "`");
                                        path += (0 === d ? f.prefix : f.delimiter) + h
                                    }
                                } else {
                                    if (h = f.asterisk ? F(l) : o(l), !n[c].test(h)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + h + '"');
                                    path += f.prefix + h
                                }
                            } else path += f
                        }
                        return path
                    }
                }(function (t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        f = e && e.delimiter || "/";
                    for (; null != (n = B.exec(t));) {
                        var l = n[0],
                            h = n[1],
                            d = n.index;
                        if (path += t.slice(c, d), c = d + l.length, h) path += h[1];
                        else {
                            var m = t[c],
                                v = n[2],
                                y = n[3],
                                x = n[4],
                                w = n[5],
                                _ = n[6],
                                j = n[7];
                            path && (r.push(path), path = "");
                            var O = null != v && null != m && m !== v,
                                $ = "+" === _ || "*" === _,
                                k = "?" === _ || "*" === _,
                                C = n[2] || f,
                                pattern = x || w;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: C,
                                optional: k,
                                repeat: $,
                                partial: O,
                                asterisk: Boolean(j),
                                pattern: pattern ? J(pattern) : j ? ".*" : "[^" + H(C) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function M(t, e) {
                var n = {},
                    r = m(m({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function U(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return m(m({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function (t) {
                window.onNuxtReadyCbs.push(t)
            };
            var B = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function z(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function (t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return z(t, !0)
            }

            function H(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function J(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function K(t) {
                return t && t.sensitive ? "" : "i"
            }

            function W(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
            var X = h.b,
                G = (h.e, h.a);

            function Q(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        }
    },
    [
        [242, 13, 3, 14]
    ]
]);