

! function (n) {
	var e = {};

	function t(s) {
		if (e[s]) return e[s].exports;
		var i = e[s] = {
			i: s,
			l: !1,
			exports: {}
		};
		return n[s].call(i.exports, i, i.exports, t), i.l = !0, i.exports
	}
	t.m = n, t.c = e, t.d = function (n, e, s) {
		t.o(n, e) || Object.defineProperty(n, e, {
			enumerable: !0,
			get: s
		})
	}, t.r = function (n) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(n, "__esModule", {
			value: !0
		})
	}, t.t = function (n, e) {
		if (1 & e && (n = t(n)), 8 & e) return n;
		if (4 & e && "object" == typeof n && n && n.__esModule) return n;
		var s = Object.create(null);
		if (t.r(s), Object.defineProperty(s, "default", {
				enumerable: !0,
				value: n
			}), 2 & e && "string" != typeof n)
			for (var i in n) t.d(s, i, function (e) {
				return n[e]
			}.bind(null, i));
		return s
	}, t.n = function (n) {
		var e = n && n.__esModule ? function () {
			return n.default
		} : function () {
			return n
		};
		return t.d(e, "a", e), e
	}, t.o = function (n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	}, t.p = "", t(t.s = 12)
}([function (n, e, t) {
	var s = t(5),
		i = t(7);
	"string" == typeof (i = i.__esModule ? i.default : i) && (i = [
		[n.i, i, ""]
	]);
	var a = {
			insert: "head",
			singleton: !1
		},
		r = (s(i, a), i.locals ? i.locals : {});
	n.exports = r
}, function (n, e, t) {
	var s = t(9);
	"string" == typeof s && (s = [
		[n.i, s, ""]
	]), s.locals && (n.exports = s.locals);
	(0, t(13).default)("4c17e5b9", s, !1, {})
}, function (n, e, t) {
	var s = t(5),
		i = t(11);
	"string" == typeof (i = i.__esModule ? i.default : i) && (i = [
		[n.i, i, ""]
	]);
	var a = {
			insert: "head",
			singleton: !1
		},
		r = (s(i, a), i.locals ? i.locals : {});
	n.exports = r
}, function (n, e, t) {
	"use strict";
	n.exports = function (n) {
		var e = [];
		return e.toString = function () {
			return this.map((function (e) {
				var t = function (n, e) {
					var t = n[1] || "",
						s = n[3];
					if (!s) return t;
					if (e && "function" == typeof btoa) {
						var i = (r = s, o = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(l, " */")),
							a = s.sources.map((function (n) {
								return "/*# sourceURL=".concat(s.sourceRoot || "").concat(n, " */")
							}));
						return [t].concat(a).concat([i]).join("\n")
					}
					var r, o, l;
					return [t].join("\n")
				}(e, n);
				return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
			})).join("")
		}, e.i = function (n, t, s) {
			"string" == typeof n && (n = [
				[null, n, ""]
			]);
			var i = {};
			if (s)
				for (var a = 0; a < this.length; a++) {
					var r = this[a][0];
					null != r && (i[r] = !0)
				}
			for (var o = 0; o < n.length; o++) {
				var l = [].concat(n[o]);
				s && i[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] = t), e.push(l))
			}
		}, e
	}
}, function (n, e, t) {
	"use strict";
	var s = "(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}",
		i = "[0-9a-fA-F]{1,4}",
		a = "\n(\n(?:".concat(i, ":){7}(?:").concat(i, "|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:").concat(i, ":){6}(?:").concat(s, "|:").concat(i, "|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:").concat(i, ":){5}(?::").concat(s, "|(:").concat(i, "){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:").concat(i, ":){4}(?:(:").concat(i, "){0,1}:").concat(s, "|(:").concat(i, "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:").concat(i, ":){3}(?:(:").concat(i, "){0,2}:").concat(s, "|(:").concat(i, "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:").concat(i, ":){2}(?:(:").concat(i, "){0,3}:").concat(s, "|(:").concat(i, "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:").concat(i, ":){1}(?:(:").concat(i, "){0,4}:").concat(s, "|(:").concat(i, "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::((?::").concat(i, "){0,5}:").concat(s, "|(?::").concat(i, "){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
		r = n.exports = function (n) {
			return n && n.exact ? new RegExp("(?:^".concat(s, "$)|(?:^").concat(a, "$)")) : new RegExp("(?:".concat(s, ")|(?:").concat(a, ")"), "g")
		};
	r.v4 = function (n) {
		return n && n.exact ? new RegExp("^".concat(s, "$")) : new RegExp(s, "g")
	}, r.v6 = function (n) {
		return n && n.exact ? new RegExp("^".concat(a, "$")) : new RegExp(a, "g")
	}
}, function (n, e, t) {
	"use strict";
	var s, i = function () {
			return void 0 === s && (s = Boolean(window && document && document.all && !window.atob)), s
		},
		a = function () {
			var n = {};
			return function (e) {
				if (void 0 === n[e]) {
					var t = document.querySelector(e);
					if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
						t = t.contentDocument.head
					} catch (n) {
						t = null
					}
					n[e] = t
				}
				return n[e]
			}
		}(),
		r = [];

	function o(n) {
		for (var e = -1, t = 0; t < r.length; t++)
			if (r[t].identifier === n) {
				e = t;
				break
			}
		return e
	}

	function l(n, e) {
		for (var t = {}, s = [], i = 0; i < n.length; i++) {
			var a = n[i],
				l = e.base ? a[0] + e.base : a[0],
				u = t[l] || 0,
				c = "".concat(l, " ").concat(u);
			t[l] = u + 1;
			var p = o(c),
				d = {
					css: a[1],
					media: a[2],
					sourceMap: a[3]
				}; - 1 !== p ? (r[p].references++, r[p].updater(d)) : r.push({
				identifier: c,
				updater: w(d, e),
				references: 1
			}), s.push(c)
		}
		return s
	}

	function u(n) {
		var e = document.createElement("style"),
			s = n.attributes || {};
		if (void 0 === s.nonce) {
			var i = t.nc;
			i && (s.nonce = i)
		}
		if (Object.keys(s).forEach((function (n) {
				e.setAttribute(n, s[n])
			})), "function" == typeof n.insert) n.insert(e);
		else {
			var r = a(n.insert || "head");
			if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
			r.appendChild(e)
		}
		return e
	}
	var c, p = (c = [], function (n, e) {
		return c[n] = e, c.filter(Boolean).join("\n")
	});

	function d(n, e, t, s) {
		var i = t ? "" : s.media ? "@media ".concat(s.media, " {").concat(s.css, "}") : s.css;
		if (n.styleSheet) n.styleSheet.cssText = p(e, i);
		else {
			var a = document.createTextNode(i),
				r = n.childNodes;
			r[e] && n.removeChild(r[e]), r.length ? n.insertBefore(a, r[e]) : n.appendChild(a)
		}
	}

	function h(n, e, t) {
		var s = t.css,
			i = t.media,
			a = t.sourceMap;
		if (i ? n.setAttribute("media", i) : n.removeAttribute("media"), a && btoa && (s += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleSheet) n.styleSheet.cssText = s;
		else {
			for (; n.firstChild;) n.removeChild(n.firstChild);
			n.appendChild(document.createTextNode(s))
		}
	}
	var f = null,
		g = 0;

	function w(n, e) {
		var t, s, i;
		if (e.singleton) {
			var a = g++;
			t = f || (f = u(e)), s = d.bind(null, t, a, !1), i = d.bind(null, t, a, !0)
		} else t = u(e), s = h.bind(null, t, e), i = function () {
			! function (n) {
				if (null === n.parentNode) return !1;
				n.parentNode.removeChild(n)
			}(t)
		};
		return s(n),
			function (e) {
				if (e) {
					if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
					s(n = e)
				} else i()
			}
	}
	n.exports = function (n, e) {
		(e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
		var t = l(n = n || [], e);
		return function (n) {
			if (n = n || [], "[object Array]" === Object.prototype.toString.call(n)) {
				for (var s = 0; s < t.length; s++) {
					var i = o(t[s]);
					r[i].references--
				}
				for (var a = l(n, e), u = 0; u < t.length; u++) {
					var c = o(t[u]);
					0 === r[c].references && (r[c].updater(), r.splice(c, 1))
				}
				t = a
			}
		}
	}
}, function (n, e, t) {
	"use strict";
	var s = t(0);
	t.n(s).a
}, function (n, e, t) {
	(e = t(3)(!1)).push([n.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Containers */\nform.kiwi-welcome-simple-form {\n    width: 70%;\n    padding: 20px;\n}\n@media (max-width: 1025px) {\nform.kiwi-welcome-simple-form {\n        width: 100%;\n}\n}\n@media (max-width: 850px) {\nform.kiwi-welcome-simple-form {\n        background: var(--brand-default-bg);\n        border-radius: 5px;\n        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n}\n}\n@media (max-width: 600px) {\nform.kiwi-welcome-simple-form {\n        max-width: 350px;\n}\n}\nform.kiwi-welcome-simple-form h2 {\n    margin: 0 0 40px 0;\n    padding: 0;\n    cursor: default;\n    font-weight: 600;\n    font-size: 2.2em;\n    text-align: center;\n    line-height: 1.2em;\n}\n.kiwi-welcome-simple-error {\n    text-align: center;\n    margin: 1em 0;\n    padding: 1em;\n}\n.kiwi-welcome-simple-error span {\n    display: block;\n    font-style: italic;\n}\n.kiwi-welcome-simple-input-container {\n    width: 100%;\n    height: auto;\n    position: relative;\n    margin: 0 0 20px 0;\n}\n.kiwi-welcome-simple-input-container:last-of-type {\n    margin: 20px 0 40px 0;\n}\n.kiwi-welcome-simple-age-sex {\n    height: auto;\n    position: relative;\n    margin: 0;\n    display: flex;\n}\n.kiwi-welcome-simple-age {\n    display: inline-block;\n    width: 50%;\n}\n.kiwi-welcome-simple-sex {\n    display: inline-block;\n    margin-left: 5px;\n    width: 50%;\n}\n.u-form .kiwi-welcome-simple-sex select {\n    border-radius: 5px;\n    color: var(--brand-input-fg);\n    background-color: var(--brand-default-bg);\n    font-size: inherit;\n    overflow: hidden;\n    padding: 14px 14px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n    width: 100%;\n}\n.u-form .kiwi-welcome-simple-sex select:focus {\n    outline: none;\n    border-color: var(--brand-primary);\n}\n.u-form .kiwi-welcome-simple-sex select option {\n    background-color: var(--brand-default-bg);\n}\n.kiwi-welcome-simple-form .u-submit {\n    width: 100%;\n    height: 50px;\n    font-size: 1.3em;\n}\n.kiwi-welcome-simple-start {\n    font-size: 1.1em;\n    cursor: pointer;\n}\n.kiwi-welcome-simple-start[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n}\n\n", ""]), n.exports = e
}, function (n, e, t) {
	"use strict";
	var s = t(1);
	t.n(s).a
}, function (n, e, t) {
	(e = t(3)(!1)).push([n.i, ".kiwi-sidebar.kiwi-sidebar-section-user {\n  right: 0;\n  width: 380px;\n}\n.kiwi-userbox {\n  box-sizing: border-box;\n  overflow-y: auto;\n  height: 100%;\n}\n.kiwi-userbox-selfprofile {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  padding: 1em;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n}\n.kiwi-userbox-header {\n  position: relative;\n  padding: 0.5em 1em;\n  overflow: hidden;\n}\n.kiwi-userbox-header-nick {\n  display: flex;\n}\n.kiwi-avatar-userbox .kiwi-avatar {\n  width: 40px;\n  height: 40px;\n}\n.kiwi-avatar-userbox .kiwi-awaystatusindicator {\n  width: 10px;\n  top: 4px;\n  height: 10px;\n}\n.kiwi-userbox-header h3 {\n  width: 100%;\n  padding: 0;\n  cursor: default;\n  display: inline-block;\n  line-height: 44px;\n}\n.kiwi-userbox-modestring {\n  font-weight: normal;\n  font-size: 0.8em;\n}\n.fa-user.kiwi-userbox-icon {\n  display: inline-block;\n  font-size: 2em;\n}\n.kiwi-userbox-usermask {\n  width: 100%;\n  opacity: 0.6;\n  cursor: default;\n}\n.kiwi-userbox-basicinfo {\n  width: 100%;\n  margin: 0;\n  display: block;\n  padding: 0.5em 1em;\n  box-sizing: border-box;\n}\n.kiwi-userbox-basicinfo-title,\n.kiwi-userbox-basicinfo-data {\n  display: block;\n  width: 100%;\n  cursor: default;\n  margin: 0;\n}\n.kiwi-userbox-basicinfo-title {\n  font-size: 1em;\n  line-height: 1em;\n  padding: 0;\n  text-align: left;\n  font-weight: 900;\n}\n.kiwi-userbox-basicinfo-data {\n  margin-bottom: 1em;\n  font-weight: normal;\n  font-weight: 100;\n  opacity: 1;\n}\n.kiwi-userbox-actions {\n  width: 100%;\n  padding: 1em;\n  text-align: center;\n  margin: 0;\n  box-sizing: border-box;\n}\n.kiwi-userbox-actions .kiwi-userbox-action {\n  display: inline-block;\n  border: 1px solid;\n  padding: 0.5em 1em;\n  cursor: pointer;\n  margin: 0 2px;\n  transition: all 0.3s;\n  border-radius: 3px;\n}\n.kiwi-userbox-actions label {\n  display: block;\n  cursor: pointer;\n}\n.kiwi-userbox-actions label span {\n  text-align: left;\n  width: auto;\n}\n.kiwi-userbox-opactions {\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n  margin: 0 0 1em 0;\n  border-top: 1px solid;\n  padding: 1em;\n}\n.kiwi-userbox-opactions label {\n  width: 100%;\n  font-size: 1.2em;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 0.7em;\n}\n.kiwi-userbox-opactions label select {\n  display: block;\n  clear: both;\n  padding: 10px;\n  border-radius: 0.25em;\n  box-shadow: none;\n  border: 1px solid;\n  width: 100%;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.kiwi-userbox-opaction {\n  width: 100%;\n  padding: 0 1em;\n  text-align: left;\n  border: none;\n  line-height: 2.2em;\n  font-size: 0.8em;\n}\n.kiwi-userbox-opaction i {\n  margin-right: 0.2em;\n  font-size: 1.2em;\n}\n.kiwi-userbox-actions a {\n  margin-right: 1em;\n}\n.kiwi-userbox-whois {\n  line-height: 1.4em;\n  padding: 1em;\n  width: 90%;\n  margin: 0 5% 20px 5%;\n  background: none;\n  box-sizing: border-box;\n  border-radius: 2px;\n}\n.kiwi-userbox-whois-line {\n  display: block;\n}\n.kiwi-userbox-ignoreuser {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.kiwi-userbox-ignoreuser span {\n  /* This fixes a vertical align issue between the checkbox and span */\n  float: right;\n}\n@media screen and (max-width: 769px) {\n.kiwi-container--sidebar-drawn .kiwi-sidebar-userbox {\n    width: 100%;\n}\n.kiwi-userbox {\n    left: 0;\n    right: 0;\n    bottom: 40px;\n    top: auto;\n    max-width: 100%;\n    border-width: 1px 0;\n}\n.kiwi-userbox .kiwi-userbox-header {\n    padding-left: 10px;\n}\n.kiwi-userbox .kiwi-userbox-header i {\n    display: none;\n}\n.kiwi-userbox .kiwi-userbox-basicinfo {\n    padding: 10px 10px;\n    margin-bottom: 20px;\n}\n.kiwi-userbox-actions {\n    padding: 0;\n    width: 100%;\n    box-sizing: border-box;\n}\n.kiwi-userbox-actions .kiwi-userbox-action {\n    width: 200px;\n    clear: both;\n    display: block;\n    margin: 0 auto 20px auto;\n}\n}\n", ""]), n.exports = e
}, function (n, e, t) {
	"use strict";
	var s = t(2);
	t.n(s).a
}, function (n, e, t) {
	(e = t(3)(!1)).push([n.i, "\n.plugin-asl-userbrowser-container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.plugin-asl-userbrowser-sexes {\n    display: inline-block;\n    font-weight: bold;\n    margin: 4px 4px 4px 10px;\n}\n.plugin-asl-userbrowser-sexes input,\n.plugin-asl-userbrowser-sexes label {\n    vertical-align: middle;\n    display: inline-block;\n}\n.plugin-asl-userbrowser-ages {\n    margin: 4px;\n}\n.plugin-asl-userbrowser-filter {\n    margin-left: 10px;\n    width: 100%;\n}\n.plugin-asl-userbrowser-filter input {\n    width: 300px;\n}\n.plugin-asl-userbrowser-filter i {\n    margin-left: 10px;\n}\n.plugin-asl-userbrowser-users {\n    height: 100%;\n    margin: 4px;\n    overflow-y: auto;\n}\n.plugin-asl-userbrowser-users-table {\n    width: 100%;\n    border-collapse: collapse;\n}\n.plugin-asl-userbrowser-users-table tr:nth-child(even) {\n    background: rgba(0, 0, 0, 0.1);\n}\n.plugin-asl-userbrowser-users-table td,\n.plugin-asl-userbrowser-users-table th {\n    padding: 0 4px;\n}\n.plugin-asl-userbrowser-users-nick {\n    font-weight: bold;\n    cursor: pointer;\n}\n.plugin-asl-userbrowser-users-age {\n    text-align: center;\n}\n", ""]), n.exports = e
}, function (n, e, t) {
	"use strict";
	t.r(e);
	var s = function () {
		var n = this,
			e = n.$createElement,
			t = n._self._c || e;
		return t("startup-layout", {
			ref: "layout",
			staticClass: "kiwi-welcome-simple",
			scopedSlots: n._u([n.startupOptions.altComponent ? {
				key: "connection",
				fn: function () {
					return [t(n.startupOptions.altComponent, {
						tag: "component",
						on: {
							close: n.onAltClose
						}
					})]
				},
				proxy: !0
			} : {
				key: "connection",
				fn: function () {
					return [t("form", {
						staticClass: "u-form u-form--big kiwi-welcome-simple-form",
						on: {
							submit: function (e) {
								return e.preventDefault(), n.formSubmit(e)
							}
						}
					}, [t("h2", {
						domProps: {
							innerHTML: n._s(n.greetingText)
						}
					}), n._v(" "), n.errorMessage ? t("div", {
						staticClass: "kiwi-welcome-simple-error"
					}, [n._v(n._s(n.errorMessage))]) : n.network && (n.network.last_error || n.network.state_error) ? t("div", {
						staticClass: "kiwi-welcome-simple-error"
					}, [!n.network.last_error && n.network.state_error ? t("span", [n._v("\n                    " + n._s(n.$t("network_noconnect")) + "\n                ")]) : n._e(), n._v(" "), t("span", [n._v("\n                    " + n._s(n.network.last_error || n.readableStateError(n.network.state_error)) + "\n                ")])]) : n._e(), n._v(" "), t("input-text", {
						directives: [{
							name: "focus",
							rawName: "v-focus",
							value: !n.nick || !n.show_password_box,
							expression: "!nick || !show_password_box"
						}],
						attrs: {
							label: n.$t("nick"),
							type: "text"
						},
						model: {
							value: n.nick,
							callback: function (e) {
								n.nick = e
							},
							expression: "nick"
						}
					}), n._v(" "), n.showPass && n.toggablePass ? t("div", {
						staticClass: "kiwi-welcome-simple-input-container"
					}, [t("label", {
						staticClass: "kiwi-welcome-simple-have-password"
					}, [t("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: n.show_password_box,
							expression: "show_password_box"
						}],
						attrs: {
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(n.show_password_box) ? n._i(n.show_password_box, null) > -1 : n.show_password_box
						},
						on: {
							change: function (e) {
								var t = n.show_password_box,
									s = e.target,
									i = !!s.checked;
								if (Array.isArray(t)) {
									var a = n._i(t, null);
									s.checked ? a < 0 && (n.show_password_box = t.concat([null])) : a > -1 && (n.show_password_box = t.slice(0, a).concat(t.slice(a + 1)))
								} else n.show_password_box = i
							}
						}
					}), n._v(" "), t("span", [n._v(" " + n._s(n.$t("password_have")) + " ")])])]) : n._e(), n._v(" "), !n.showPass || !n.show_password_box && n.toggablePass ? n._e() : t("div", {
						staticClass: "kiwi-welcome-simple-input-container"
					}, [t("input-text", {
						directives: [{
							name: "focus",
							rawName: "v-focus",
							value: n.nick || n.show_password_box,
							expression: "nick || show_password_box"
						}],
						attrs: {
							"show-plain-text": !0,
							label: n.$t("password"),
							type: "password"
						},
						model: {
							value: n.password,
							callback: function (e) {
								n.password = e
							},
							expression: "password"
						}
					})], 1), n._v(" "), t("div", {
						staticClass: "kiwi-welcome-simple-asl-container"
					}, [t("div", {
						staticClass: "kiwi-welcome-simple-age-sex"
					}, [t("input-text", {
						staticClass: "kiwi-welcome-simple-age",
						attrs: {
							label: n.$t("plugin-asl:age"),
							min: n.allowedAge.min,
							max: n.allowedAge.max,
							type: "number"
						},
						model: {
							value: n.age,
							callback: function (e) {
								n.age = e
							},
							expression: "age"
						}
					}), n._v(" "), t("div", {
						staticClass: "kiwi-welcome-simple-sex"
					}, [t("label", [n._v(n._s(n.$t("plugin-asl:sex")))]), n._v(" "), t("select", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: n.sex,
							expression: "sex"
						}],
						on: {
							change: function (e) {
								var t = Array.prototype.filter.call(e.target.options, (function (n) {
									return n.selected
								})).map((function (n) {
									return "_value" in n ? n._value : n.value
								}));
								n.sex = e.target.multiple ? t : t[0]
							}
						}
					}, [t("option", {
						attrs: {
							selected: "",
							disabled: ""
						},
						domProps: {
							value: null
						}
					}, [n._v("\n                                " + n._s(n.$t("plugin-asl:select")) + "\n                            ")]), n._v(" "), n._l(n.sexes, (function (e, s) {
						return t("option", {
							key: "sexes-" + s,
							style: {
								color: n.sexes[s].colour
							},
							domProps: {
								value: e.chars[0]
							}
						}, [n._v(n._s("_" === s[0] ? n.$t("plugin-asl:" + s.substr(1)) : s))])
					}))], 2)])], 1), n._v(" "), t("input-text", {
						attrs: {
							label: n.$t("plugin-asl:location")
						},
						model: {
							value: n.location,
							callback: function (e) {
								n.location = e
							},
							expression: "location"
						}
					}), n._v(" "), n.showRealname ? t("input-text", {
						attrs: {
							label: n.$t("whois_realname")
						},
						model: {
							value: n.realname,
							callback: function (e) {
								n.realname = e
							},
							expression: "realname"
						}
					}) : n._e()], 1), n._v(" "), n.showChannel ? t("div", {
						staticClass: "kiwi-welcome-simple-input-container"
					}, [t("input-text", {
						attrs: {
							label: n.$t("channel")
						},
						model: {
							value: n.channel,
							callback: function (e) {
								n.channel = e
							},
							expression: "channel"
						}
					})], 1) : n._e(), n._v(" "), t("captcha", {
						attrs: {
							network: n.network
						}
					}), n._v(" "), n.network && "disconnected" !== n.network.state ? t("button", {
						staticClass: "u-button u-button-primary u-submit kiwi-welcome-simple-start",
						attrs: {
							disabled: ""
						}
					}, [t("i", {
						staticClass: "fa fa-spin fa-spinner",
						attrs: {
							"aria-hidden": "true"
						}
					})]) : t("button", {
						staticClass: "u-button u-button-primary u-submit kiwi-welcome-simple-start",
						attrs: {
							disabled: !n.readyToStart,
							type: "submit"
						},
						domProps: {
							innerHTML: n._s(n.buttonText)
						}
					}), n._v(" "), t("div", {
						domProps: {
							innerHTML: n._s(n.footerText)
						}
					})], 1)]
				},
				proxy: !0
			}], null, !0)
		})
	};

	function i(n) {
		for (var e = kiwi.state.pluginASL.gecosTypes, t = 0; t < e.length; t++) {
			var s = n.match(e[t].regex);
			if (s) return {
				asl: {
					a: "*" === s[1] ? null : s[1],
					s: r(s[2]),
					l: "*" === s[4] ? null : s[4] || null
				},
				realname: s[6] ? s[6].trim() : ""
			}
		}
		return {
			asl: null,
			realname: n
		}
	}

	function a(n) {
		var e = n && n.s ? n.s : "",
			t = kiwi.state.getSetting("settings.plugin-asl.sexes"),
			s = kiwi.state.getSetting("settings.plugin-asl.fallbackColour");
		return t[e] ? t[e].colour : s
	}

	function r(n) {
		for (var e = kiwi.state.getSetting("settings.plugin-asl.sexes"), t = Object.keys(e), s = 0; s < t.length; s++) {
			var i = t[s];
			if (-1 !== e[i].chars.indexOf(n)) return i
		}
		return null
	}
	s._withStripped = !0;
	var o = kiwi.require("helpers/Misc"),
		l = kiwi.require("libs/Logger"),
		u = kiwi.require("libs/BouncerProvider"),
		c = kiwi.require("components/Captcha"),
		p = kiwi.require("components/startups/CommonLayout"),
		d = l.namespace("Welcome.vue"),
		h = {
			components: {
				Captcha: c,
				StartupLayout: p
			},
			data: function () {
				return {
					errorMessage: "",
					network: null,
					channel: "",
					nick: "",
					password: "",
					showChannel: !0,
					showPass: !0,
					toggablePass: !0,
					showNick: !0,
					show_password_box: !1,
					connectWithoutChannel: !1,
					showPlainText: !1,
					captchaReady: !1,
					ageInt: null,
					sex: "S",
					location: "",
					realname: "https://cuplu.eu"
				}
			},
			computed: {
				age: {
					get: function () {
						return this.ageInt
					},
					set: function (n) {
						this.ageInt = n && parseInt(n, 10) || null
					}
				},
				allowedAge: function () {
					return kiwi.state.getSetting("settings.plugin-asl.allowedAge")
				},
				sexes: function () {
					return kiwi.state.getSetting("settings.plugin-asl.sexes")
				},
				showRealname: function () {
					var n = this.$state.getSetting("settings.plugin-asl.showRealname"),
						e = this.$state.getSetting("settings.plugin-asl.gecosType");
					return n && 1 === e
				},
				startupOptions: function () {
					return this.$state.settings.startupOptions
				},
				greetingText: function () {
					var n = this.$state.settings.startupOptions.greetingText;
					return "string" == typeof n ? n : this.$t("start_greeting")
				},
				footerText: function () {
					var n = this.$state.settings.startupOptions.footerText;
					return "string" == typeof n ? n : ""
				},
				buttonText: function () {
					var n = this.$state.settings.startupOptions.buttonText;
					return "string" == typeof n ? n : this.$t("start_button")
				},
				readyToStart: function () {
					var n = !!this.nick;
					(this.age && (this.age < this.allowedAge.min || this.age > this.allowedAge.max) && (n = !1), this.connectWithoutChannel || this.channel || (n = !1), this.connectWithoutChannel) || o.extractBuffers(this.channel).forEach((function (e) {
						-1 === "#&".indexOf(e.name[0]) && (n = !1)
					}));
					this.toggablePass || this.password || (n = !1);
					var e = this.$state.setting("startupOptions.nick_format"),
						t = "";
					if (e) {
						var s = "",
							i = "";
						if ("/" === e[0]) {
							var a = e.lastIndexOf("/");
							s = e.substring(1, a), i = e.substr(a + 1)
						} else s = _.escapeRegExp(e), i = "i";
						try {
							t = new RegExp(s, i)
						} catch (n) {
							return d.error("Nick format error: " + n.message), !1
						}
					} else t = /^[a-z_\\[\]{}^`|][a-z0-9_\-\\[\]{}^`|]*$/i;
					return this.nick.match(t) || (n = !1), n
				}
			},
			created: function () {
				var n = this.startupOptions,
					e = this.connectOptions(),
					t = null;
				e.hostname.trim() && (t = this.$state.getNetworkFromAddress(e.hostname.trim())), o.queryStringVal("nick") ? this.nick = o.queryStringVal("nick") : t && t.connection.nick ? this.nick = t.connection.nick : this.nick = n.nick;
				var s = null;
				t && t.gecos && (s = i(t.gecos));
				var a, r, l = kiwi.state.getSetting("settings.plugin-asl.queryKeys");
				(o.queryStringVal(l.age) ? this.age = o.queryStringVal(l.age) : void 0 !== n.age ? this.age = n.age : s && s.asl && (this.age = s.asl.a), o.queryStringVal(l.sex) ? this.sex = o.queryStringVal(l.sex) : void 0 !== n.sex ? this.sex = n.sex : s && s.asl && (this.sex = (a = s.asl.s, (r = kiwi.state.getSetting("settings.plugin-asl.sexes"))[a] ? r[a].chars[0] : null)), o.queryStringVal(l.location) ? this.location = o.queryStringVal(l.location) : void 0 !== n.location ? this.location = n.location : s && s.asl && (this.location = s.asl.l), o.queryStringVal(l.realname) ? this.realname = o.queryStringVal(l.realname) : void 0 !== n.realname ? this.realname = n.realname : this.showRealname && s && s.realname && (this.realname = s.realname), this.nick = this.processNickRandomNumber(this.nick || ""), this.password = n.password || "", this.channel = decodeURIComponent(window.location.hash) || n.channel || "", this.showChannel = "boolean" != typeof n.showChannel || n.showChannel, this.showNick = "boolean" != typeof n.showNick || n.showNick, this.showPass = "boolean" != typeof n.showPassword || n.showPassword, this.toggablePass = "boolean" != typeof n.toggablePassword || n.toggablePassword, this.connectWithoutChannel = !!n.allowNoChannel, n.bouncer) && (this.toggablePass = !1, this.showPass = !0, this.showChannel = !1, this.connectWithoutChannel = !0, new u(this.$state).enable(e.hostname, e.port, e.tls, e.direct, e.direct_path));
				n.autoConnect && this.nick && (this.channel || this.connectWithoutChannel) && this.startUp()
			},
			methods: {
				buildGecos: function () {
					if (!this.age && !this.sex && !this.location) return "";
					var n = kiwi.state.getSetting("settings.plugin-asl.gecosType"),
						e = kiwi.state.pluginASL.gecosTypes[n - 1],
						t = e.build,
						s = [this.age || "*", this.sex || "*"];
					return this.location && s.push(this.location), t.replace("%asl", s.join(e.separator)).replace("%a", this.age || "*").replace("%s", this.sex || "*").replace("%l", this.location || "*").replace("%r", this.realname || "").trim()
				},
				onAltClose: function (n) {
					n.channel && (this.channel = n.channel), n.nick && (this.nick = n.nick), n.password && (this.password = n.password), n.error && (this.errorMessage = n.error), this.$state.settings.startupOptions.altComponent = null
				},
				readableStateError: function (n) {
					return o.networkErrorMessage(n)
				},
				formSubmit: function () {
					this.readyToStart && this.startUp()
				},
				startUp: function () {
					var n = this;
					this.errorMessage = "";
					var e = Object.assign({}, this.$state.settings.startupOptions),
						t = this.connectOptions(),
						s = _.trim(t.hostname),
						i = this.network || this.$state.getNetworkFromAddress(s),
						a = this.password;
					(i = i || this.$state.addNetwork("Network", this.nick, {
						server: s,
						port: t.port,
						tls: t.tls,
						password: a,
						encoding: _.trim(e.encoding),
						direct: t.direct,
						path: t.direct_path || "",
						gecos: e.gecos,
						username: e.username
					})).serverBuffer().clearMessages(), i.connection.nick = this.nick, e.bouncer ? (i.connection.password = "".concat(this.nick, ":").concat(a), i.password = "") : (i.connection.password = "", i.password = a);
					var r = this.buildGecos();
					r && (i.gecos = r), _.trim(e.encoding || "") && (i.connection.encoding = _.trim(e.encoding)), this.network = i;
					var l = !1;
					o.extractBuffers(this.channel).forEach((function (e) {
						var t = n.$state.addBuffer(i.id, e.name);
						t.enabled = !0, t && !l && (n.$state.setActiveBuffer(i.id, t.name), l = !0), e.key && (t.key = e.key)
					})), e.bouncer || l || this.$state.setActiveBuffer(i.id, i.serverBuffer().name), i.ircClient.connect();
					var u = function e() {
							n.$refs.layout && n.$refs.layout.close(), i.ircClient.off("registered", e), i.ircClient.off("close", c)
						},
						c = function n() {
							i.ircClient.off("registered", u), i.ircClient.off("close", n)
						};
					i.ircClient.once("registered", u), i.ircClient.once("close", c)
				},
				processNickRandomNumber: function (n) {
					var e = (n || "").replace(/\?/g, (function () {
						return Math.floor(100 * Math.random()).toString()
					}));
					return _.trim(e)
				},
				handleCaptcha: function (n) {
					this.captchaReady = n
				},
				connectOptions: function () {
					var n = Object.assign({}, this.$state.settings.startupOptions),
						e = o.connectionInfoFromConfig(n);
					return e.hostname = e.hostname || "default", !e.port && e.direct ? e.port = e.tls ? 443 : 80 : e.port || e.direct || (e.port = e.tls ? 6697 : 6667), e
				}
			}
		};
	t(6);

	function f(n, e, t, s, i, a, r, o) {
		var l, u = "function" == typeof n ? n.options : n;
		if (e && (u.render = e, u.staticRenderFns = t, u._compiled = !0), s && (u.functional = !0), a && (u._scopeId = "data-v-" + a), r ? (l = function (n) {
				(n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (n = __VUE_SSR_CONTEXT__), i && i.call(this, n), n && n._registeredComponents && n._registeredComponents.add(r)
			}, u._ssrRegister = l) : i && (l = o ? function () {
				i.call(this, this.$root.$options.shadowRoot)
			} : i), l)
			if (u.functional) {
				u._injectStyles = l;
				var c = u.render;
				u.render = function (n, e) {
					return l.call(e), c(n, e)
				}
			} else {
				var p = u.beforeCreate;
				u.beforeCreate = p ? [].concat(p, l) : [l]
			}
		return {
			exports: n,
			options: u
		}
	}
	var g = f(h, s, [], !1, null, null, null);
	g.options.__file = "src/components/CustomWelcome.vue";
	var w = g.exports,
		m = function () {
			var n = this,
				e = n.$createElement,
				t = n._self._c || e;
			return t("div", {
				staticClass: "kiwi-userbox"
			}, [n.isSelf ? t("span", {
				staticClass: "kiwi-userbox-selfprofile"
			}, [n._v("\n        " + n._s(n.$t("user_you")) + "\n    ")]) : n._e(), n._v(" "), t("div", {
				staticClass: "kiwi-userbox-header"
			}, [t("div", {
				staticClass: "kiwi-userbox-header-nick"
			}, [t("div", {
				staticClass: "kiwi-avatar-container kiwi-avatar-userbox"
			}, [t("avatar", {
				attrs: {
					network: n.network,
					user: n.user,
					size: "large"
				}
			}), n._v(" "), t("away-status-indicator", {
				attrs: {
					network: n.network,
					user: n.user
				}
			})], 1), n._v(" "), t("h3", [t("span", {
				style: {
					color: n.user.getColour()
				}
			}, [n._v(n._s(n.user.nick))]), n._v(" "), n.userMode ? t("span", {
				staticClass: "kiwi-userbox-modestring"
			}, [n._v("+" + n._s(n.userMode))]) : n._e()])]), n._v(" "), t("div", {
				staticClass: "kiwi-userbox-usermask"
			}, [n._v(n._s(n.user.nick) + "@" + n._s(n.user.host))])]), n._v(" "), t("div", {
				staticClass: "kiwi-userbox-basicinfo"
			}, [n.user.asl && n.singleLine ? t("div", [t("span", {
				staticClass: "kiwi-userbox-basicinfo-title"
			}, [n._v(n._s(n.$t("plugin-asl:info")))]), n._v(" "), t("span", {
				staticClass: "kiwi-userbox-basicinfo-data"
			}, [n._v(n._s(n.aslString))])]) : n.user.asl ? t("div", [n.user.asl.a ? t("div", [t("span", {
				staticClass: "kiwi-userbox-basicinfo-title"
			}, [n._v(n._s(n.$t("plugin-asl:age")))]), n._v(" "), t("span", {
				staticClass: "kiwi-userbox-basicinfo-data"
			}, [n._v(n._s(n.user.asl.a))])]) : n._e(), n._v(" "), n.user.asl.s ? t("div", [t("span", {
				staticClass: "kiwi-userbox-basicinfo-title"
			}, [n._v(n._s(n.$t("plugin-asl:sex")))]), n._v(" "), t("span", {
				staticClass: "kiwi-userbox-basicinfo-data"
			}, [n._v("\n                    " + n._s("_" === n.user.asl.s[0] ? n.$t("plugin-asl:" + n.user.asl.s.substr(1)) : n.user.asl.s) + "\n                ")])]) : n._e(), n._v(" "), n.user.asl.l ? t("div", [t("span", {
				staticClass: "kiwi-userbox-basicinfo-title"
			}, [n._v("\n                    " + n._s(n.$t("plugin-asl:location")) + "\n                ")]), n._v(" "), t("span", {
				staticClass: "kiwi-userbox-basicinfo-data"
			}, [n._v(n._s(n.user.asl.l))])]) : n._e()]) : n._e(), n._v(" "), n.user.aslRealname ? t("div", [t("span", {
				staticClass: "kiwi-userbox-basicinfo-title"
			}, [n._v(n._s(n.$t("whois_realname")) + ":")]), n._v(" "), t("span", {
				staticClass: "kiwi-userbox-basicinfo-data",
				domProps: {
					innerHTML: n._s(n.formattedRealname)
				}
			})]) : n._e()]), n._v(" "), t("p", {
				staticClass: "kiwi-userbox-actions"
			}, [n.isSelf || n.buffer.isQuery() ? n._e() : t("a", {
				staticClass: "kiwi-userbox-action",
				on: {
					click: n.openQuery
				}
			}, [t("i", {
				staticClass: "fa fa-comment-o",
				attrs: {
					"aria-hidden": "true"
				}
			}), n._v("\n            " + n._s(n.$t("send_a_message")) + "\n        ")]), n._v(" "), n.whoisRequested ? n._e() : t("a", {
				staticClass: "kiwi-userbox-action",
				on: {
					click: n.updateWhoisData
				}
			}, [t("i", {
				staticClass: "fa fa-question-circle",
				attrs: {
					"aria-hidden": "true"
				}
			}), n._v("\n            " + n._s(n.$t("more_information")) + "\n        ")])]), n._v(" "), n.isSelf ? n._e() : t("form", {
				staticClass: "u-form kiwi-userbox-ignoreuser"
			}, [t("label", [t("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: n.user.ignore,
					expression: "user.ignore"
				}],
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: Array.isArray(n.user.ignore) ? n._i(n.user.ignore, null) > -1 : n.user.ignore
				},
				on: {
					change: function (e) {
						var t = n.user.ignore,
							s = e.target,
							i = !!s.checked;
						if (Array.isArray(t)) {
							var a = n._i(t, null);
							s.checked ? a < 0 && n.$set(n.user, "ignore", t.concat([null])) : a > -1 && n.$set(n.user, "ignore", t.slice(0, a).concat(t.slice(a + 1)))
						} else n.$set(n.user, "ignore", i)
					}
				}
			}), n._v(" "), t("span", [n._v(" " + n._s(n.$t("ignore_user")) + " ")])])]), n._v(" "), n.whoisRequested ? t("div", {
				staticClass: "kiwi-userbox-whois",
				class: [n.whoisLoading ? "kiwi-userbox-whois--loading" : ""]
			}, [n.whoisLoading ? [t("i", {
				staticClass: "fa fa-spinner",
				attrs: {
					"aria-hidden": "true"
				}
			})] : [t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.user.away ? n.$t("whois_status") + ": " + n.user.away : n.$t("whois_status_available")) + "\n            ")]), n._v(" "), n.user.account ? t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.$t("user_account", {
				user: n.user.account
			})) + "\n            ")]) : n._e(), n._v(" "), t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.$t("user_realname", {
				realname: n.user.realname
			})) + "\n            ")]), n._v(" "), n.user.bot ? t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v(n._s(n.$t("user_bot")))]) : n._e(), n._v(" "), n.user.helpop ? t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.$t("user_help")) + "\n            ")]) : n._e(), n._v(" "), n.user.operator ? t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.$t("user_op")) + "\n            ")]) : n._e(), n._v(" "), n.user.server ? t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.$t("user_server", {
				server: n.user.server,
				info: n.user.server_info ? "(" + n.user.server_info + ")" : ""
			})) + "\n            ")]) : n._e(), n._v(" "), n.user.secure ? t("span", {
				staticClass: "kiwi-userbox-whois-line"
			}, [n._v("\n                " + n._s(n.$t("user_secure")) + "\n            ")]) : n._e(), n._v(" "), n.user.channels ? t("span", {
				staticClass: "kiwi-userbox-whois-line",
				domProps: {
					innerHTML: n._s(n.$t("user_channels", {
						channels: n.userChannels
					}))
				},
				on: {
					click: function (e) {
						return n.onChannelsClick(e)
					}
				}
			}) : n._e()]], 2) : n._e(), n._v(" "), n.buffer.isChannel() && n.areWeAnOp && !n.isSelf ? t("div", {
				staticClass: "kiwi-userbox-opactions"
			}, [t("form", {
				staticClass: "u-form",
				on: {
					submit: function (n) {
						n.preventDefault()
					}
				}
			}, [n.isUserOnBuffer ? t("label", [n._v("\n                " + n._s(n.$t("user_access")) + " "), t("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: n.userMode,
					expression: "userMode"
				}],
				on: {
					change: function (e) {
						var t = Array.prototype.filter.call(e.target.options, (function (n) {
							return n.selected
						})).map((function (n) {
							return "_value" in n ? n._value : n.value
						}));
						n.userMode = e.target.multiple ? t : t[0]
					}
				}
			}, [n._l(n.availableChannelModes, (function (e) {
				return t("option", {
					key: e.mode,
					domProps: {
						value: e.mode
					}
				}, [n._v("\n                        " + n._s(e.description) + "\n                    ")])
			})), n._v(" "), t("option", {
				attrs: {
					value: ""
				}
			}, [n._v(n._s(n.$t("user_normal")))])], 2)]) : n._e(), n._v(" "), n.isUserOnBuffer ? t("label", [t("button", {
				staticClass: "u-button u-button-secondary\n                           kiwi-userbox-opaction-kick kiwi-userbox-opaction",
				on: {
					click: n.kickUser
				}
			}, [t("i", {
				staticClass: "fa fa-sign-out",
				attrs: {
					"aria-hidden": "true"
				}
			}), n._v("\n                    " + n._s(n.$t("user_kick")) + "\n                ")])]) : n._e(), n._v(" "), t("label", [t("button", {
				staticClass: "u-button u-button-secondary\n                           kiwi-userbox-opaction-ban kiwi-userbox-opaction",
				on: {
					click: n.banUser
				}
			}, [t("i", {
				staticClass: "fa fa-ban",
				attrs: {
					"aria-hidden": "true"
				}
			}), n._v("\n                    " + n._s(n.$t("user_ban")) + "\n                ")])]), n._v(" "), n.isUserOnBuffer ? t("label", [t("button", {
				staticClass: "u-button u-button-secondary\n                           kiwi-userbox-opaction-kickban kiwi-userbox-opaction",
				on: {
					click: n.kickbanUser
				}
			}, [t("i", {
				staticClass: "fa fa-exclamation-triangle",
				attrs: {
					"aria-hidden": "true"
				}
			}), n._v("\n                    " + n._s(n.$t("user_kickban")) + "\n                ")])]) : n._e()])]) : n._e()])
		};
	m._withStripped = !0;
	var b = t(4),
		v = kiwi.require("helpers/TextFormatting"),
		k = kiwi.require("helpers/IrcdDiffs"),
		x = kiwi.require("libs/renderers/Html"),
		y = kiwi.require("libs/MessageParser"),
		C = {
			components: {
				AwayStatusIndicator: kiwi.require("components/AwayStatusIndicator"),
				Avatar: kiwi.require("components/Avatar")
			},
			props: ["buffer", "network", "user"],
			data: function () {
				return {
					whoisRequested: !1,
					whoisLoading: !1
				}
			},
			computed: {
				singleLine: function () {
					return kiwi.state.getSetting("settings.plugin-asl.singleLineUserbox")
				},
				aslString: function () {
					var n = kiwi.state.getSetting("settings.plugin-asl.singleLineString"),
						e = [];
					if (this.user.asl.a && e.push(n.age.replace("%a", this.user.asl.a)), this.user.asl.s) {
						var t = "_" === this.user.asl.s[0] ? v.t("plugin-asl:" + this.user.asl.s.substr(1)) : this.user.asl.s;
						e.push(n.sex.replace("%s", t))
					}
					return this.user.asl.l && e.push(n.location.replace("%l", this.user.asl.l)), e.join(n.separator)
				},
				availableChannelModes: function () {
					var n = [],
						e = this.network.ircClient.network.options.PREFIX,
						t = {
							q: "Owner",
							a: "Admin",
							o: "Operator",
							h: "Half-Operator",
							v: "Voice"
						};
					return k.isAChannelModeAdmin(this.network) || delete t.a, k.isQChannelModeOwner(this.network) || delete t.q, k.supportsHalfOp(this.network) || delete t.h, e.forEach((function (e) {
						var s = e.mode;
						t[s] && n.push({
							mode: s,
							description: t[s]
						})
					})), n
				},
				areWeAnOp: function () {
					return !!this.buffer && this.buffer.isUserAnOp(this.buffer.getNetwork().nick)
				},
				formattedRealname: function () {
					var n = y(this.user.aslRealname || "", {
						extras: !1
					});
					return x(n, !1)
				},
				isUserOnBuffer: function () {
					return !!this.buffer && !!this.user.buffers[this.buffer.id]
				},
				userMode: {
					get: function () {
						if (!this.buffer) return "";
						var n = this.user.buffers[this.buffer.id];
						if (!n) return "";
						var e = n.modes;
						return e.length > 0 ? e[0] : ""
					},
					set: function (n) {
						var e = this.network.ircClient,
							t = this.userMode,
							s = [],
							i = [];
						t && (s.push("-" + t), i.push(this.user.nick)), n && (s.push("+" + n), i.push(this.user.nick));
						var a = ["MODE", this.buffer.name, s.join("")].concat(i);
						e.raw(a)
					}
				},
				userChannels: function () {
					for (var n = this.user.channels.trim().split(" "), e = 0; e < n.length; e++) n[e] = v.linkifyChannels(n[e]);
					return n.join(" ")
				},
				isSelf: function () {
					return this.user === this.network.currentUser()
				}
			},
			watch: {
				user: function () {
					this.whoisRequested = !1, this.whoisLoading = !1
				}
			},
			methods: {
				userModeOnThisBuffer: function (n) {
					if (!this.buffer) return "";
					var e = n.buffers[this.buffer.id].modes;
					return e.length > 0 ? e[0] : ""
				},
				openQuery: function () {
					var n = this.$state.addBuffer(this.network.id, this.user.nick);
					this.$state.setActiveBuffer(this.network.id, n.name), this.$state.ui.is_narrow && this.$state.$emit("userbox.hide")
				},
				onChannelsClick: function (n) {
					var e = n.target.getAttribute("data-channel-name");
					if (e) {
						var t = this.buffer.getNetwork();
						this.$state.addBuffer(this.buffer.networkid, e), t.ircClient.join(e)
					}
				},
				updateWhoisData: function () {
					var n = this;
					this.whoisRequested = !0, this.whoisLoading = !0, this.network.ircClient.whois(this.user.nick, (function () {
						n.whoisLoading = !1
					}))
				},
				kickUser: function () {
					var n = this.$state.setting("buffers.default_kick_reason");
					this.network.ircClient.raw("KICK", this.buffer.name, this.user.nick, n)
				},
				createBanMask: function () {
					if (this.user.account) {
						var n = k.extbanAccount(this.network);
						if (n) return n + ":" + this.user.account;
						if (this.user.host.toLowerCase().indexOf(this.user.account.toLowerCase()) > -1) return "*!*@" + this.user.host
					}
					var e = new RegExp("(" + b.v4().source + "|" + b.v6().source + ")");
					if (e.test(this.user.host)) {
						var t = this.user.host.match(e)[0];
						if (t !== this.user.host) return "*!*@*" + t + "*"
					}
					var s = /^([a-f0-9]{8})$/i;
					if (s.test(this.user.username)) return "*!" + this.user.username.match(s)[0] + "@*";
					var i = this.$state.setting("buffers.default_ban_mask");
					return i = (i = (i = i.replace("%n", this.user.nick)).replace("%i", this.user.username)).replace("%h", this.user.host)
				},
				banUser: function () {
					if (this.user.username && this.user.host) {
						var n = this.createBanMask();
						this.network.ircClient.raw("MODE", this.buffer.name, "+b", n)
					}
				},
				kickbanUser: function () {
					if (this.user.username && this.user.host) {
						var n = this.createBanMask(),
							e = this.$state.setting("buffers.default_kick_reason");
						this.network.ircClient.raw("MODE", this.buffer.name, "+b", n), this.network.ircClient.raw("KICK", this.buffer.name, this.user.nick, e)
					}
				}
			}
		},
		S = (t(8), f(C, m, [], !1, null, null, null));
	S.options.__file = "src/components/CustomUserBox.vue";
	var $ = S.exports,
		A = function () {
			var n = this,
				e = n.$createElement,
				t = n._self._c || e;
			return t("div", {
				staticClass: "kiwi-header-option",
				class: [n.active ? "kiwi-header-option--active" : ""]
			}, [t("a", {
				on: {
					click: function (e) {
						return e.preventDefault(), n.toggleUserBrowser(e)
					}
				}
			}, [t("i", {
				staticClass: "fa",
				class: n.icon,
				attrs: {
					"aria-hidden": "true"
				}
			})])])
		};
	A._withStripped = !0;
	var L = function () {
		var n = this,
			e = n.$createElement,
			t = n._self._c || e;
		return t("div", {
			staticClass: "plugin-asl-userbrowser-container"
		}, [t("div", {
			staticClass: "u-form"
		}, [n._l(n.sexes, (function (e, s) {
			return t("div", {
				key: "sexes-" + s,
				staticClass: "plugin-asl-userbrowser-sexes"
			}, [t("input", {
				attrs: {
					id: "asl-" + s,
					type: "checkbox"
				},
				domProps: {
					checked: n.selectedSexes[s]
				},
				on: {
					change: function (e) {
						return n.toggleSex(e, s)
					}
				}
			}), n._v(" "), t("label", {
				style: {
					color: n.sexes[s].colour
				},
				attrs: {
					for: "asl-" + s
				}
			}, [n._v("\n                " + n._s("_" === s[0] ? n.$t("plugin-asl:" + s.substr(1)) : s) + "\n            ")])])
		})), n._v(" "), t("select", {
			directives: [{
				name: "model",
				rawName: "v-model",
				value: n.age,
				expression: "age"
			}],
			staticClass: "plugin-asl-userbrowser-ages",
			on: {
				change: [function (e) {
					var t = Array.prototype.filter.call(e.target.options, (function (n) {
						return n.selected
					})).map((function (n) {
						return "_value" in n ? n._value : n.value
					}));
					n.age = e.target.multiple ? t : t[0]
				}, function (e) {
					return n.updateSelectedAgeRange()
				}]
			}
		}, n._l(n.ageRanges, (function (e) {
			return t("option", {
				key: "agerange-" + e.value,
				domProps: {
					value: e.value
				}
			}, [n._v("\n                " + n._s("_" === e.name[0] ? n.$t("plugin-asl:" + e.name.substr(1)) : e.name) + "\n            ")])
		})), 0)], 2), n._v(" "), t("div", {
			staticClass: "plugin-asl-userbrowser-filter u-form"
		}, [t("input", {
			directives: [{
				name: "model",
				rawName: "v-model",
				value: n.filter,
				expression: "filter"
			}],
			staticClass: "u.input",
			attrs: {
				type: "text"
			},
			domProps: {
				value: n.filter
			},
			on: {
				change: function (e) {
					return n.updateUserFilter()
				},
				input: function (e) {
					e.target.composing || (n.filter = e.target.value)
				}
			}
		}), n._v(" "), "" !== n.filter ? t("i", {
			staticClass: "fa fa-undo",
			attrs: {
				"aria-hidden": "true"
			},
			on: {
				click: function (e) {
					n.filter = ""
				}
			}
		}) : n._e()]), n._v(" "), t("div", {
			staticClass: "plugin-asl-userbrowser-users"
		}, [t("table", {
			staticClass: "plugin-asl-userbrowser-users-table"
		}, [t("tr", [t("th", {
			staticStyle: {
				width: "35%",
				"text-align": "left"
			}
		}, [n._v(n._s(n.$t("nick")))]), n._v(" "), t("th", {
			staticStyle: {
				width: "15%"
			}
		}, [n._v(n._s(n.$t("plugin-asl:age")))]), n._v(" "), t("th", {
			staticStyle: {
				width: "50%",
				"text-align": "left"
			}
		}, [n._v(n._s(n.$t("plugin-asl:location")))])]), n._v(" "), n._l(n.filteredUsers, (function (e) {
			return t("tr", {
				key: "users-" + e.nick
			}, [t("td", {
				staticClass: "plugin-asl-userbrowser-users-nick",
				style: {
					color: e.colour
				},
				on: {
					click: function (t) {
						return t.stopPropagation(), n.openUserbox(e)
					}
				}
			}, [n._v(n._s(e.nick))]), n._v(" "), t("td", {
				staticClass: "plugin-asl-userbrowser-users-age"
			}, [n._v(n._s(e.asl.a || " "))]), n._v(" "), t("td", [n._v(n._s(e.asl.l || " "))])])
		}))], 2)])])
	};
	L._withStripped = !0;
	var R = {
			props: ["network", "buffer", "sidebarState"],
			data: function () {
				return {
					sexes: {},
					selectedSexes: {},
					ageRanges: [],
					age: "",
					filter: ""
				}
			},
			computed: {
				filteredUsers: function () {
					var n = this,
						e = this.buffer.users,
						t = this.filter.toLowerCase();
					return _.filter(e, (function (e) {
						if (!e.asl) return !1;
						if (e.nick === n.network.currentUser().nick) return !1;
						for (var s = Object.keys(n.sexes), i = 0; i < s.length; i++) {
							var a = s[i];
							if (e.asl.s === a && !n.selectedSexes[a]) return !1
						}
						if ("<" === n.age[0] && e.asl.a >= parseInt(n.age.slice(1), 10)) return !1;
						if (">" === n.age[0] && e.asl.a <= parseInt(n.age.slice(1), 10)) return !1;
						var r = n.age.split("-");
						return (2 !== r.length || !(e.asl.a < r[0] || e.asl.a > r[1])) && (-1 !== e.nick.toLowerCase().indexOf(t) || !(!e.asl.l || -1 === e.asl.l.toLowerCase().indexOf(t)))
					}))
				}
			},
			created: function () {
				this.sexes = kiwi.state.setting("plugin-asl.sexes"), this.ageRanges = kiwi.state.setting("plugin-asl.ageRanges"), this.age = kiwi.state.pluginASL.selectedAgeRange, this.selectedSexes = kiwi.state.pluginASL.selectedSexes, this.filter = kiwi.state.pluginASL.userFilter
			},
			beforeDestroy: function () {
				kiwi.state.$emit("plugin-asl.userbrowser.close")
			},
			methods: {
				openUserbox: function (n) {
					kiwi.state.$emit("userbox.show", n, {
						buffer: this.buffer
					})
				},
				toggleSex: function (n, e) {
					this.selectedSexes[e] = n.target.checked, kiwi.state.pluginASL.selectedSexes = this.selectedSexes
				},
				updateSelectedAgeRange: function () {
					kiwi.state.pluginASL.selectedAgeRange = this.age
				},
				updateUserFilter: function () {
					kiwi.state.pluginASL.userFilter = this.filter
				}
			}
		},
		O = (t(10), f(R, L, [], !1, null, null, null));
	O.options.__file = "src/components/UserBrowser.vue";
	var M = O.exports,
		T = f({
			data: function () {
				return {
					active: !1
				}
			},
			computed: {
				icon: function () {
					return kiwi.state.getSetting("settings.plugin-asl.userBrowserIcon")
				}
			},
			created: function () {
				var n = this;
				this.listen(this.$state, "plugin-asl.userbrowser.close", (function () {
					n.active = !1
				}))
			},
			methods: {
				toggleUserBrowser: function () {
					kiwi.showInSidebar(this.active ? null : M), this.active = !0
				}
			}
		}, A, [], !1, null, null, null);
	T.options.__file = "src/components/UserBrowserButton.vue";
	var U = T.exports;

	function P(n, e) {
		for (var t = 0; t < e.length; t++) {
			var s = e[t];
			s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(n, s.key, s)
		}
	}
	var E = function () {
		function n() {
			! function (n, e) {
				if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, n), this.fallbackLocale = null, this.localesPath = "", this.nameSpace = "", this.testKey = ""
		}
		var e, t, s;
		return e = n, (t = [{
			key: "init",
			value: function (n, e, t) {
				var s = this;
				this.localesPath = n, this.nameSpace = e, this.testKey = t, kiwi.i18n.on("languageChanged", (function (n) {
					kiwi.i18n.getResource(n, s.nameSpace, s.testKey) || s.loadLocale(n)
				})), "en-us" !== kiwi.i18n.language && this.loadLocale("en-us"), this.loadLocale(kiwi.i18n.language)
			}
		}, {
			key: "loadLocale",
			value: function (n) {
				var e = this,
					t = n.toLowerCase(),
					s = new XMLHttpRequest;
				s.onload = function (n) {
					200 === s.status ? e.applyLocale(t, JSON.parse(s.responseText)) : e.applyLocale(t, null)
				}, s.open("GET", this.localesPath + "/" + t + ".json"), s.send()
			}
		}, {
			key: "applyLocale",
			value: function (n, e) {
				this.fallbackLocale || "en-us" !== n || (this.fallbackLocale = e), kiwi.i18n.addResourceBundle(n, this.nameSpace, e || this.fallbackLocale)
			}
		}]) && P(e.prototype, t), s && P(e, s), n
	}();

	function N() {
		B("plugin-asl.localesPath", "static/plugins/plugin-asl/locales"), B("plugin-asl.gecosType", 1), B("plugin-asl.showRealname", !1), B("plugin-asl.showUserBrowser", !0), B("plugin-asl.userBrowserIcon", "fa-heart"), B("plugin-asl.fallbackColour", "default"), B("plugin-asl.singleLineUserbox", !1), B("plugin-asl.singleLineString", {
			age: "%a years",
			sex: "%s",
			location: "%l",
			separator: " "
		}), B("plugin-asl.allowedAge", {
			min: "18",
			max: "99"
		}), B("plugin-asl.ageRanges", [{
			name: "_all",
			value: "all"
		}, {
			name: "< 25",
			value: "<25"
		}, {
			name: "25 - 45",
			value: "25-46"
		}, {
			name: "> 45",
			value: ">45"
		}]), B("plugin-asl.sexes", {
			_male: {
				chars: "M",
				colour: "#00F"
			},
			_female: {
				chars: "F",
				colour: "#F00"
			},
			_other: {
				chars: "O",
				colour: "#000"
			}
		}), B("plugin-asl.queryKeys", {
			age: "age",
			sex: "sex",
			location: "location",
			realname: "realname"
		}), kiwi.state.pluginASL = {};
		var n = kiwi.state.getSetting("settings.plugin-asl.ageRanges");
		kiwi.state.pluginASL.selectedAgeRange = n[0].value;
		var e = kiwi.state.getSetting("settings.plugin-asl.sexes");
		kiwi.state.pluginASL.selectedSexes = {};
		for (var t = "", s = Object.keys(e), i = 0; i < s.length; i++) {
			var a = s[i];
			kiwi.state.pluginASL.selectedSexes[a] = !0, t += e[a].chars
		}
		kiwi.state.pluginASL.gecosTypes = [], kiwi.state.pluginASL.gecosTypes.push({
			regex: new RegExp("\\[(\\d+|\\*)\\/([" + t + "*])(\\/(.*?|\\*))?\\](\\s*(.+))?"),
			build: "[%asl] %r",
			separator: "/"
		}), kiwi.state.pluginASL.gecosTypes.push({
			regex: new RegExp("(\\d+)\\s+([" + t + "])(\\s+(.*))?"),
			build: "%asl",
			separator: " "
		}), kiwi.state.pluginASL.userFilter = ""
	}

	function B(n, e) {
		void 0 === kiwi.state.getSetting("settings." + n) && kiwi.state.setSetting("settings." + n, e)
	}
	kiwi.plugin("asl", (function (n) {
		N();
		var e = n.state.getSetting("settings.plugin-asl.localesPath");
		if ((new E).init(e, "plugin-asl", "age"), n.addStartup("plugin-asl", w), n.replaceModule("components/UserBox", $), n.state.getSetting("settings.plugin-asl.showUserBrowser")) {
			var t = new n.Vue(U);
			t.$mount(), n.addUi("header_channel", t.$el)
		}

		function s(e, t) {
			var s = n.state.getUser(e.id, t.nick) || n.state.addUser(e, t),
				r = i(t.realname);
			s.asl = r.asl, s.aslRealname = r.realname, s.colour = a(s.asl)
		}
		n.on("irc.join", (function (n, e) {
			n.gecos ? s(e, {
				nick: n.nick,
				username: n.ident,
				host: n.hostname,
				realname: n.gecos
			}) : e.ircClient.who(n.nick)
		})), n.on("irc.wholist", (function (n, e) {
			n.users.forEach((function (n) {
				s(e, {
					nick: n.nick,
					realname: n.real_name
				})
			}))
		}))
	}))
}, function (n, e, t) {
	"use strict";

	function s(n, e) {
		for (var t = [], s = {}, i = 0; i < e.length; i++) {
			var a = e[i],
				r = a[0],
				o = {
					id: n + ":" + i,
					css: a[1],
					media: a[2],
					sourceMap: a[3]
				};
			s[r] ? s[r].parts.push(o) : t.push(s[r] = {
				id: r,
				parts: [o]
			})
		}
		return t
	}
	t.r(e), t.d(e, "default", (function () {
		return h
	}));
	var i = "undefined" != typeof document;
	if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
	var a = {},
		r = i && (document.head || document.getElementsByTagName("head")[0]),
		o = null,
		l = 0,
		u = !1,
		c = function () {},
		p = null,
		d = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

	function h(n, e, t, i) {
		u = t, p = i || {};
		var r = s(n, e);
		return f(r),
			function (e) {
				for (var t = [], i = 0; i < r.length; i++) {
					var o = r[i];
					(l = a[o.id]).refs--, t.push(l)
				}
				e ? f(r = s(n, e)) : r = [];
				for (i = 0; i < t.length; i++) {
					var l;
					if (0 === (l = t[i]).refs) {
						for (var u = 0; u < l.parts.length; u++) l.parts[u]();
						delete a[l.id]
					}
				}
			}
	}

	function f(n) {
		for (var e = 0; e < n.length; e++) {
			var t = n[e],
				s = a[t.id];
			if (s) {
				s.refs++;
				for (var i = 0; i < s.parts.length; i++) s.parts[i](t.parts[i]);
				for (; i < t.parts.length; i++) s.parts.push(w(t.parts[i]));
				s.parts.length > t.parts.length && (s.parts.length = t.parts.length)
			} else {
				var r = [];
				for (i = 0; i < t.parts.length; i++) r.push(w(t.parts[i]));
				a[t.id] = {
					id: t.id,
					refs: 1,
					parts: r
				}
			}
		}
	}

	function g() {
		var n = document.createElement("style");
		return n.type = "text/css", r.appendChild(n), n
	}

	function w(n) {
		var e, t, s = document.querySelector('style[data-vue-ssr-id~="' + n.id + '"]');
		if (s) {
			if (u) return c;
			s.parentNode.removeChild(s)
		}
		if (d) {
			var i = l++;
			s = o || (o = g()), e = v.bind(null, s, i, !1), t = v.bind(null, s, i, !0)
		} else s = g(), e = k.bind(null, s), t = function () {
			s.parentNode.removeChild(s)
		};
		return e(n),
			function (s) {
				if (s) {
					if (s.css === n.css && s.media === n.media && s.sourceMap === n.sourceMap) return;
					e(n = s)
				} else t()
			}
	}
	var m, b = (m = [], function (n, e) {
		return m[n] = e, m.filter(Boolean).join("\n")
	});

	function v(n, e, t, s) {
		var i = t ? "" : s.css;
		if (n.styleSheet) n.styleSheet.cssText = b(e, i);
		else {
			var a = document.createTextNode(i),
				r = n.childNodes;
			r[e] && n.removeChild(r[e]), r.length ? n.insertBefore(a, r[e]) : n.appendChild(a)
		}
	}

	function k(n, e) {
		var t = e.css,
			s = e.media,
			i = e.sourceMap;
		if (s && n.setAttribute("media", s), p.ssrId && n.setAttribute("data-vue-ssr-id", e.id), i && (t += "\n/*# sourceURL=" + i.sources[0] + " */", t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), n.styleSheet) n.styleSheet.cssText = t;
		else {
			for (; n.firstChild;) n.removeChild(n.firstChild);
			n.appendChild(document.createTextNode(t))
		}
	}
}]);

