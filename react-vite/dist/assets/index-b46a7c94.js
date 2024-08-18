function Dd(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const l in r)
				if (l !== 'default' && !(l in e)) {
					const i = Object.getOwnPropertyDescriptor(r, l);
					i &&
						Object.defineProperty(
							e,
							l,
							i.get ? i : { enumerable: !0, get: () => r[l] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver((l) => {
		for (const i of l)
			if (i.type === 'childList')
				for (const o of i.addedNodes)
					o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const i = {};
		return (
			l.integrity && (i.integrity = l.integrity),
			l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: l.crossOrigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const i = n(l);
		fetch(l.href, i);
	}
})();
function Od(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Id = { exports: {} },
	Ji = {},
	Fd = { exports: {} },
	Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tl = Symbol.for('react.element'),
	km = Symbol.for('react.portal'),
	Pm = Symbol.for('react.fragment'),
	Nm = Symbol.for('react.strict_mode'),
	Tm = Symbol.for('react.profiler'),
	Lm = Symbol.for('react.provider'),
	Mm = Symbol.for('react.context'),
	Dm = Symbol.for('react.forward_ref'),
	Om = Symbol.for('react.suspense'),
	Im = Symbol.for('react.memo'),
	Fm = Symbol.for('react.lazy'),
	bu = Symbol.iterator;
function zm(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (bu && e[bu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var zd = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Ad = Object.assign,
	$d = {};
function Nr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = $d),
		(this.updater = n || zd);
}
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Nr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ud() {}
Ud.prototype = Nr.prototype;
function Ps(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = $d),
		(this.updater = n || zd);
}
var Ns = (Ps.prototype = new Ud());
Ns.constructor = Ps;
Ad(Ns, Nr.prototype);
Ns.isPureReactComponent = !0;
var Qu = Array.isArray,
	Vd = Object.prototype.hasOwnProperty,
	Ts = { current: null },
	Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hd(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			Vd.call(t, r) && !Bd.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
		l.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: Tl,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Ts.current,
	};
}
function Am(e, t) {
	return {
		$$typeof: Tl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Ls(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Tl;
}
function $m(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Ku = /\/+/g;
function Go(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? $m('' + e.key)
		: t.toString(36);
}
function si(e, t, n, r, l) {
	var i = typeof e;
	(i === 'undefined' || i === 'boolean') && (e = null);
	var o = !1;
	if (e === null) o = !0;
	else
		switch (i) {
			case 'string':
			case 'number':
				o = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case Tl:
					case km:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(l = l(o)),
			(e = r === '' ? '.' + Go(o, 0) : r),
			Qu(l)
				? ((n = ''),
				  e != null && (n = e.replace(Ku, '$&/') + '/'),
				  si(l, t, n, '', function (c) {
						return c;
				  }))
				: l != null &&
				  (Ls(l) &&
						(l = Am(
							l,
							n +
								(!l.key || (o && o.key === l.key)
									? ''
									: ('' + l.key).replace(Ku, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Qu(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var s = r + Go(i, a);
			o += si(i, t, n, s, l);
		}
	else if (((s = zm(e)), typeof s == 'function'))
		for (e = s.call(e), a = 0; !(i = e.next()).done; )
			(i = i.value), (s = r + Go(i, a++)), (o += si(i, t, n, s, l));
	else if (i === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return o;
}
function bl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		si(e, r, '', '', function (i) {
			return t.call(n, i, l++);
		}),
		r
	);
}
function Um(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var Ge = { current: null },
	ui = { transition: null },
	Vm = {
		ReactCurrentDispatcher: Ge,
		ReactCurrentBatchConfig: ui,
		ReactCurrentOwner: Ts,
	};
Y.Children = {
	map: bl,
	forEach: function (e, t, n) {
		bl(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			bl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			bl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Ls(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
Y.Component = Nr;
Y.Fragment = Pm;
Y.Profiler = Tm;
Y.PureComponent = Ps;
Y.StrictMode = Nm;
Y.Suspense = Om;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm;
Y.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Ad({}, e.props),
		l = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = Ts.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (s in t)
			Vd.call(t, s) &&
				!Bd.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		a = Array(s);
		for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
		r.children = a;
	}
	return { $$typeof: Tl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Y.createContext = function (e) {
	return (
		(e = {
			$$typeof: Mm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Lm, _context: e }),
		(e.Consumer = e)
	);
};
Y.createElement = Hd;
Y.createFactory = function (e) {
	var t = Hd.bind(null, e);
	return (t.type = e), t;
};
Y.createRef = function () {
	return { current: null };
};
Y.forwardRef = function (e) {
	return { $$typeof: Dm, render: e };
};
Y.isValidElement = Ls;
Y.lazy = function (e) {
	return { $$typeof: Fm, _payload: { _status: -1, _result: e }, _init: Um };
};
Y.memo = function (e, t) {
	return { $$typeof: Im, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
	var t = ui.transition;
	ui.transition = {};
	try {
		e();
	} finally {
		ui.transition = t;
	}
};
Y.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
Y.useCallback = function (e, t) {
	return Ge.current.useCallback(e, t);
};
Y.useContext = function (e) {
	return Ge.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
	return Ge.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
	return Ge.current.useEffect(e, t);
};
Y.useId = function () {
	return Ge.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
	return Ge.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
	return Ge.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
	return Ge.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
	return Ge.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
	return Ge.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
	return Ge.current.useRef(e);
};
Y.useState = function (e) {
	return Ge.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
	return Ge.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
	return Ge.current.useTransition();
};
Y.version = '18.2.0';
Fd.exports = Y;
var g = Fd.exports;
const Bt = Od(g),
	Bm = Dd({ __proto__: null, default: Bt }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hm = g,
	Wm = Symbol.for('react.element'),
	bm = Symbol.for('react.fragment'),
	Qm = Object.prototype.hasOwnProperty,
	Km = Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wd(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) Qm.call(t, r) && !Gm.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Wm,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Km.current,
	};
}
Ji.Fragment = bm;
Ji.jsx = Wd;
Ji.jsxs = Wd;
Id.exports = Ji;
var u = Id.exports,
	Na = {},
	bd = { exports: {} },
	at = {},
	Qd = { exports: {} },
	Kd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(O, H) {
		var M = O.length;
		O.push(H);
		e: for (; 0 < M; ) {
			var X = (M - 1) >>> 1,
				ne = O[X];
			if (0 < l(ne, H)) (O[X] = H), (O[M] = ne), (M = X);
			else break e;
		}
	}
	function n(O) {
		return O.length === 0 ? null : O[0];
	}
	function r(O) {
		if (O.length === 0) return null;
		var H = O[0],
			M = O.pop();
		if (M !== H) {
			O[0] = M;
			e: for (var X = 0, ne = O.length, ft = ne >>> 1; X < ft; ) {
				var De = 2 * (X + 1) - 1,
					xt = O[De],
					He = De + 1,
					Kn = O[He];
				if (0 > l(xt, M))
					He < ne && 0 > l(Kn, xt)
						? ((O[X] = Kn), (O[He] = M), (X = He))
						: ((O[X] = xt), (O[De] = M), (X = De));
				else if (He < ne && 0 > l(Kn, M)) (O[X] = Kn), (O[He] = M), (X = He);
				else break e;
			}
		}
		return H;
	}
	function l(O, H) {
		var M = O.sortIndex - H.sortIndex;
		return M !== 0 ? M : O.id - H.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var o = Date,
			a = o.now();
		e.unstable_now = function () {
			return o.now() - a;
		};
	}
	var s = [],
		c = [],
		f = 1,
		d = null,
		h = 3,
		C = !1,
		w = !1,
		E = !1,
		R = typeof setTimeout == 'function' ? setTimeout : null,
		m = typeof clearTimeout == 'function' ? clearTimeout : null,
		p = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(O) {
		for (var H = n(c); H !== null; ) {
			if (H.callback === null) r(c);
			else if (H.startTime <= O)
				r(c), (H.sortIndex = H.expirationTime), t(s, H);
			else break;
			H = n(c);
		}
	}
	function j(O) {
		if (((E = !1), v(O), !w))
			if (n(s) !== null) (w = !0), dt(N);
			else {
				var H = n(c);
				H !== null && ce(j, H.startTime - O);
			}
	}
	function N(O, H) {
		(w = !1), E && ((E = !1), m(T), (T = -1)), (C = !0);
		var M = h;
		try {
			for (
				v(H), d = n(s);
				d !== null && (!(d.expirationTime > H) || (O && !G()));

			) {
				var X = d.callback;
				if (typeof X == 'function') {
					(d.callback = null), (h = d.priorityLevel);
					var ne = X(d.expirationTime <= H);
					(H = e.unstable_now()),
						typeof ne == 'function' ? (d.callback = ne) : d === n(s) && r(s),
						v(H);
				} else r(s);
				d = n(s);
			}
			if (d !== null) var ft = !0;
			else {
				var De = n(c);
				De !== null && ce(j, De.startTime - H), (ft = !1);
			}
			return ft;
		} finally {
			(d = null), (h = M), (C = !1);
		}
	}
	var x = !1,
		P = null,
		T = -1,
		z = 5,
		I = -1;
	function G() {
		return !(e.unstable_now() - I < z);
	}
	function te() {
		if (P !== null) {
			var O = e.unstable_now();
			I = O;
			var H = !0;
			try {
				H = P(!0, O);
			} finally {
				H ? B() : ((x = !1), (P = null));
			}
		} else x = !1;
	}
	var B;
	if (typeof p == 'function')
		B = function () {
			p(te);
		};
	else if (typeof MessageChannel < 'u') {
		var Z = new MessageChannel(),
			Me = Z.port2;
		(Z.port1.onmessage = te),
			(B = function () {
				Me.postMessage(null);
			});
	} else
		B = function () {
			R(te, 0);
		};
	function dt(O) {
		(P = O), x || ((x = !0), B());
	}
	function ce(O, H) {
		T = R(function () {
			O(e.unstable_now());
		}, H);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (O) {
			O.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || C || ((w = !0), dt(N));
		}),
		(e.unstable_forceFrameRate = function (O) {
			0 > O || 125 < O
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (z = 0 < O ? Math.floor(1e3 / O) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return h;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (O) {
			switch (h) {
				case 1:
				case 2:
				case 3:
					var H = 3;
					break;
				default:
					H = h;
			}
			var M = h;
			h = H;
			try {
				return O();
			} finally {
				h = M;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (O, H) {
			switch (O) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					O = 3;
			}
			var M = h;
			h = O;
			try {
				return H();
			} finally {
				h = M;
			}
		}),
		(e.unstable_scheduleCallback = function (O, H, M) {
			var X = e.unstable_now();
			switch (
				(typeof M == 'object' && M !== null
					? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? X + M : X))
					: (M = X),
				O)
			) {
				case 1:
					var ne = -1;
					break;
				case 2:
					ne = 250;
					break;
				case 5:
					ne = 1073741823;
					break;
				case 4:
					ne = 1e4;
					break;
				default:
					ne = 5e3;
			}
			return (
				(ne = M + ne),
				(O = {
					id: f++,
					callback: H,
					priorityLevel: O,
					startTime: M,
					expirationTime: ne,
					sortIndex: -1,
				}),
				M > X
					? ((O.sortIndex = M),
					  t(c, O),
					  n(s) === null &&
							O === n(c) &&
							(E ? (m(T), (T = -1)) : (E = !0), ce(j, M - X)))
					: ((O.sortIndex = ne), t(s, O), w || C || ((w = !0), dt(N))),
				O
			);
		}),
		(e.unstable_shouldYield = G),
		(e.unstable_wrapCallback = function (O) {
			var H = h;
			return function () {
				var M = h;
				h = H;
				try {
					return O.apply(this, arguments);
				} finally {
					h = M;
				}
			};
		});
})(Kd);
Qd.exports = Kd;
var Ym = Qd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd = g,
	ot = Ym;
function L(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var Yd = new Set(),
	ul = {};
function bn(e, t) {
	wr(e, t), wr(e + 'Capture', t);
}
function wr(e, t) {
	for (ul[e] = t, e = 0; e < t.length; e++) Yd.add(t[e]);
}
var bt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Ta = Object.prototype.hasOwnProperty,
	Xm =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Gu = {},
	Yu = {};
function Jm(e) {
	return Ta.call(Yu, e)
		? !0
		: Ta.call(Gu, e)
		? !1
		: Xm.test(e)
		? (Yu[e] = !0)
		: ((Gu[e] = !0), !1);
}
function Zm(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function qm(e, t, n, r) {
	if (t === null || typeof t > 'u' || Zm(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function Ye(e, t, n, r, l, i, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = o);
}
var ze = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		ze[e] = new Ye(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	ze[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	ze[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	ze[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		ze[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	ze[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	ze[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	ze[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	ze[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ms = /[\-:]([a-z])/g;
function Ds(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ms, Ds);
		ze[t] = new Ye(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ms, Ds);
		ze[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Ms, Ds);
	ze[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	ze[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Ye(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	ze[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Os(e, t, n, r) {
	var l = ze.hasOwnProperty(t) ? ze[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(qm(t, n, l, r) && (n = null),
		r || l === null
			? Jm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Ql = Symbol.for('react.element'),
	er = Symbol.for('react.portal'),
	tr = Symbol.for('react.fragment'),
	Is = Symbol.for('react.strict_mode'),
	La = Symbol.for('react.profiler'),
	Xd = Symbol.for('react.provider'),
	Jd = Symbol.for('react.context'),
	Fs = Symbol.for('react.forward_ref'),
	Ma = Symbol.for('react.suspense'),
	Da = Symbol.for('react.suspense_list'),
	zs = Symbol.for('react.memo'),
	ln = Symbol.for('react.lazy'),
	Zd = Symbol.for('react.offscreen'),
	Xu = Symbol.iterator;
function Ar(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Xu && e[Xu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var we = Object.assign,
	Yo;
function Yr(e) {
	if (Yo === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Yo = (t && t[1]) || '';
		}
	return (
		`
` +
		Yo +
		e
	);
}
var Xo = !1;
function Jo(e, t) {
	if (!e || Xo) return '';
	Xo = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (c) {
					var r = c;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (c) {
					r = c;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (c) {
				r = c;
			}
			e();
		}
	} catch (c) {
		if (c && r && typeof c.stack == 'string') {
			for (
				var l = c.stack.split(`
`),
					i = r.stack.split(`
`),
					o = l.length - 1,
					a = i.length - 1;
				1 <= o && 0 <= a && l[o] !== i[a];

			)
				a--;
			for (; 1 <= o && 0 <= a; o--, a--)
				if (l[o] !== i[a]) {
					if (o !== 1 || a !== 1)
						do
							if ((o--, a--, 0 > a || l[o] !== i[a])) {
								var s =
									`
` + l[o].replace(' at new ', ' at ');
								return (
									e.displayName &&
										s.includes('<anonymous>') &&
										(s = s.replace('<anonymous>', e.displayName)),
									s
								);
							}
						while (1 <= o && 0 <= a);
					break;
				}
		}
	} finally {
		(Xo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Yr(e) : '';
}
function ev(e) {
	switch (e.tag) {
		case 5:
			return Yr(e.type);
		case 16:
			return Yr('Lazy');
		case 13:
			return Yr('Suspense');
		case 19:
			return Yr('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Jo(e.type, !1)), e;
		case 11:
			return (e = Jo(e.type.render, !1)), e;
		case 1:
			return (e = Jo(e.type, !0)), e;
		default:
			return '';
	}
}
function Oa(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case tr:
			return 'Fragment';
		case er:
			return 'Portal';
		case La:
			return 'Profiler';
		case Is:
			return 'StrictMode';
		case Ma:
			return 'Suspense';
		case Da:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Jd:
				return (e.displayName || 'Context') + '.Consumer';
			case Xd:
				return (e._context.displayName || 'Context') + '.Provider';
			case Fs:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case zs:
				return (
					(t = e.displayName || null), t !== null ? t : Oa(e.type) || 'Memo'
				);
			case ln:
				(t = e._payload), (e = e._init);
				try {
					return Oa(e(t));
				} catch {}
		}
	return null;
}
function tv(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return Oa(t);
		case 8:
			return t === Is ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function wn(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function qd(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function nv(e) {
	var t = qd(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var l = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (o) {
					(r = '' + o), i.call(this, o);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (o) {
					r = '' + o;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Kl(e) {
	e._valueTracker || (e._valueTracker = nv(e));
}
function ef(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = qd(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Si(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ia(e, t) {
	var n = t.checked;
	return we({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Ju(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = wn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function tf(e, t) {
	(t = t.checked), t != null && Os(e, 'checked', t, !1);
}
function Fa(e, t) {
	tf(e, t);
	var n = wn(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? za(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && za(e, t.type, wn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Zu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function za(e, t, n) {
	(t !== 'number' || Si(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Xr = Array.isArray;
function pr(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + wn(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function Aa(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
	return we({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function qu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(L(92));
			if (Xr(n)) {
				if (1 < n.length) throw Error(L(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: wn(n) };
}
function nf(e, t) {
	var n = wn(t.value),
		r = wn(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function ec(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function rf(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function $a(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? rf(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Gl,
	lf = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				Gl = Gl || document.createElement('div'),
					Gl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Gl.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function cl(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var el = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	rv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(el).forEach(function (e) {
	rv.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (el[t] = el[e]);
	});
});
function of(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (el.hasOwnProperty(e) && el[e])
		? ('' + t).trim()
		: t + 'px';
}
function af(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = of(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var lv = we(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
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
		wbr: !0,
	}
);
function Ua(e, t) {
	if (t) {
		if (lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(L(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(L(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(L(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(L(62));
	}
}
function Va(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var Ba = null;
function As(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Ha = null,
	hr = null,
	mr = null;
function tc(e) {
	if ((e = Dl(e))) {
		if (typeof Ha != 'function') throw Error(L(280));
		var t = e.stateNode;
		t && ((t = no(t)), Ha(e.stateNode, e.type, t));
	}
}
function sf(e) {
	hr ? (mr ? mr.push(e) : (mr = [e])) : (hr = e);
}
function uf() {
	if (hr) {
		var e = hr,
			t = mr;
		if (((mr = hr = null), tc(e), t)) for (e = 0; e < t.length; e++) tc(t[e]);
	}
}
function cf(e, t) {
	return e(t);
}
function df() {}
var Zo = !1;
function ff(e, t, n) {
	if (Zo) return e(t, n);
	Zo = !0;
	try {
		return cf(e, t, n);
	} finally {
		(Zo = !1), (hr !== null || mr !== null) && (df(), uf());
	}
}
function dl(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = no(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(L(231, t, typeof n));
	return n;
}
var Wa = !1;
if (bt)
	try {
		var $r = {};
		Object.defineProperty($r, 'passive', {
			get: function () {
				Wa = !0;
			},
		}),
			window.addEventListener('test', $r, $r),
			window.removeEventListener('test', $r, $r);
	} catch {
		Wa = !1;
	}
function iv(e, t, n, r, l, i, o, a, s) {
	var c = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, c);
	} catch (f) {
		this.onError(f);
	}
}
var tl = !1,
	Ei = null,
	ji = !1,
	ba = null,
	ov = {
		onError: function (e) {
			(tl = !0), (Ei = e);
		},
	};
function av(e, t, n, r, l, i, o, a, s) {
	(tl = !1), (Ei = null), iv.apply(ov, arguments);
}
function sv(e, t, n, r, l, i, o, a, s) {
	if ((av.apply(this, arguments), tl)) {
		if (tl) {
			var c = Ei;
			(tl = !1), (Ei = null);
		} else throw Error(L(198));
		ji || ((ji = !0), (ba = c));
	}
}
function Qn(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function pf(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function nc(e) {
	if (Qn(e) !== e) throw Error(L(188));
}
function uv(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Qn(e)), t === null)) throw Error(L(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var i = l.alternate;
		if (i === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === i.child) {
			for (i = l.child; i; ) {
				if (i === n) return nc(l), e;
				if (i === r) return nc(l), t;
				i = i.sibling;
			}
			throw Error(L(188));
		}
		if (n.return !== r.return) (n = l), (r = i);
		else {
			for (var o = !1, a = l.child; a; ) {
				if (a === n) {
					(o = !0), (n = l), (r = i);
					break;
				}
				if (a === r) {
					(o = !0), (r = l), (n = i);
					break;
				}
				a = a.sibling;
			}
			if (!o) {
				for (a = i.child; a; ) {
					if (a === n) {
						(o = !0), (n = i), (r = l);
						break;
					}
					if (a === r) {
						(o = !0), (r = i), (n = l);
						break;
					}
					a = a.sibling;
				}
				if (!o) throw Error(L(189));
			}
		}
		if (n.alternate !== r) throw Error(L(190));
	}
	if (n.tag !== 3) throw Error(L(188));
	return n.stateNode.current === n ? e : t;
}
function hf(e) {
	return (e = uv(e)), e !== null ? mf(e) : null;
}
function mf(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = mf(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var vf = ot.unstable_scheduleCallback,
	rc = ot.unstable_cancelCallback,
	cv = ot.unstable_shouldYield,
	dv = ot.unstable_requestPaint,
	Ce = ot.unstable_now,
	fv = ot.unstable_getCurrentPriorityLevel,
	$s = ot.unstable_ImmediatePriority,
	yf = ot.unstable_UserBlockingPriority,
	Ci = ot.unstable_NormalPriority,
	pv = ot.unstable_LowPriority,
	gf = ot.unstable_IdlePriority,
	Zi = null,
	Dt = null;
function hv(e) {
	if (Dt && typeof Dt.onCommitFiberRoot == 'function')
		try {
			Dt.onCommitFiberRoot(Zi, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Rt = Math.clz32 ? Math.clz32 : yv,
	mv = Math.log,
	vv = Math.LN2;
function yv(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((mv(e) / vv) | 0)) | 0;
}
var Yl = 64,
	Xl = 4194304;
function Jr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function _i(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~l;
		a !== 0 ? (r = Jr(a)) : ((i &= o), i !== 0 && (r = Jr(i)));
	} else (o = n & ~l), o !== 0 ? (r = Jr(o)) : i !== 0 && (r = Jr(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function gv(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function wv(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var o = 31 - Rt(i),
			a = 1 << o,
			s = l[o];
		s === -1
			? (!(a & n) || a & r) && (l[o] = gv(a, t))
			: s <= t && (e.expiredLanes |= a),
			(i &= ~a);
	}
}
function Qa(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function wf() {
	var e = Yl;
	return (Yl <<= 1), !(Yl & 4194240) && (Yl = 64), e;
}
function qo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Ll(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Rt(t)),
		(e[t] = n);
}
function xv(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - Rt(n),
			i = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
	}
}
function Us(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Rt(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var le = 0;
function xf(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sf,
	Vs,
	Ef,
	jf,
	Cf,
	Ka = !1,
	Jl = [],
	dn = null,
	fn = null,
	pn = null,
	fl = new Map(),
	pl = new Map(),
	an = [],
	Sv =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function lc(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			dn = null;
			break;
		case 'dragenter':
		case 'dragleave':
			fn = null;
			break;
		case 'mouseover':
		case 'mouseout':
			pn = null;
			break;
		case 'pointerover':
		case 'pointerout':
			fl.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			pl.delete(t.pointerId);
	}
}
function Ur(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [l],
		  }),
		  t !== null && ((t = Dl(t)), t !== null && Vs(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function Ev(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (dn = Ur(dn, e, t, n, r, l)), !0;
		case 'dragenter':
			return (fn = Ur(fn, e, t, n, r, l)), !0;
		case 'mouseover':
			return (pn = Ur(pn, e, t, n, r, l)), !0;
		case 'pointerover':
			var i = l.pointerId;
			return fl.set(i, Ur(fl.get(i) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(i = l.pointerId), pl.set(i, Ur(pl.get(i) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function _f(e) {
	var t = Mn(e.target);
	if (t !== null) {
		var n = Qn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = pf(n)), t !== null)) {
					(e.blockedOn = t),
						Cf(e.priority, function () {
							Ef(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function ci(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Ba = r), n.target.dispatchEvent(r), (Ba = null);
		} else return (t = Dl(n)), t !== null && Vs(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function ic(e, t, n) {
	ci(e) && n.delete(t);
}
function jv() {
	(Ka = !1),
		dn !== null && ci(dn) && (dn = null),
		fn !== null && ci(fn) && (fn = null),
		pn !== null && ci(pn) && (pn = null),
		fl.forEach(ic),
		pl.forEach(ic);
}
function Vr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Ka ||
			((Ka = !0),
			ot.unstable_scheduleCallback(ot.unstable_NormalPriority, jv)));
}
function hl(e) {
	function t(l) {
		return Vr(l, e);
	}
	if (0 < Jl.length) {
		Vr(Jl[0], e);
		for (var n = 1; n < Jl.length; n++) {
			var r = Jl[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		dn !== null && Vr(dn, e),
			fn !== null && Vr(fn, e),
			pn !== null && Vr(pn, e),
			fl.forEach(t),
			pl.forEach(t),
			n = 0;
		n < an.length;
		n++
	)
		(r = an[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < an.length && ((n = an[0]), n.blockedOn === null); )
		_f(n), n.blockedOn === null && an.shift();
}
var vr = Xt.ReactCurrentBatchConfig,
	Ri = !0;
function Cv(e, t, n, r) {
	var l = le,
		i = vr.transition;
	vr.transition = null;
	try {
		(le = 1), Bs(e, t, n, r);
	} finally {
		(le = l), (vr.transition = i);
	}
}
function _v(e, t, n, r) {
	var l = le,
		i = vr.transition;
	vr.transition = null;
	try {
		(le = 4), Bs(e, t, n, r);
	} finally {
		(le = l), (vr.transition = i);
	}
}
function Bs(e, t, n, r) {
	if (Ri) {
		var l = Ga(e, t, n, r);
		if (l === null) ua(e, t, r, ki, n), lc(e, r);
		else if (Ev(l, e, t, n, r)) r.stopPropagation();
		else if ((lc(e, r), t & 4 && -1 < Sv.indexOf(e))) {
			for (; l !== null; ) {
				var i = Dl(l);
				if (
					(i !== null && Sf(i),
					(i = Ga(e, t, n, r)),
					i === null && ua(e, t, r, ki, n),
					i === l)
				)
					break;
				l = i;
			}
			l !== null && r.stopPropagation();
		} else ua(e, t, r, null, n);
	}
}
var ki = null;
function Ga(e, t, n, r) {
	if (((ki = null), (e = As(r)), (e = Mn(e)), e !== null))
		if (((t = Qn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = pf(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (ki = e), null;
}
function Rf(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (fv()) {
				case $s:
					return 1;
				case yf:
					return 4;
				case Ci:
				case pv:
					return 16;
				case gf:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var un = null,
	Hs = null,
	di = null;
function kf() {
	if (di) return di;
	var e,
		t = Hs,
		n = t.length,
		r,
		l = 'value' in un ? un.value : un.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
	return (di = l.slice(e, 1 < r ? 1 - r : void 0));
}
function fi(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Zl() {
	return !0;
}
function oc() {
	return !1;
}
function st(e) {
	function t(n, r, l, i, o) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = o),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
			)
				? Zl
				: oc),
			(this.isPropagationStopped = oc),
			this
		);
	}
	return (
		we(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Zl));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Zl));
			},
			persist: function () {},
			isPersistent: Zl,
		}),
		t
	);
}
var Tr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ws = st(Tr),
	Ml = we({}, Tr, { view: 0, detail: 0 }),
	Rv = st(Ml),
	ea,
	ta,
	Br,
	qi = we({}, Ml, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: bs,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Br &&
						(Br && e.type === 'mousemove'
							? ((ea = e.screenX - Br.screenX), (ta = e.screenY - Br.screenY))
							: (ta = ea = 0),
						(Br = e)),
				  ea);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : ta;
		},
	}),
	ac = st(qi),
	kv = we({}, qi, { dataTransfer: 0 }),
	Pv = st(kv),
	Nv = we({}, Ml, { relatedTarget: 0 }),
	na = st(Nv),
	Tv = we({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Lv = st(Tv),
	Mv = we({}, Tr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Dv = st(Mv),
	Ov = we({}, Tr, { data: 0 }),
	sc = st(Ov),
	Iv = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Fv = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	zv = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Av(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = zv[e]) ? !!t[e] : !1;
}
function bs() {
	return Av;
}
var $v = we({}, Ml, {
		key: function (e) {
			if (e.key) {
				var t = Iv[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = fi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Fv[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: bs,
		charCode: function (e) {
			return e.type === 'keypress' ? fi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? fi(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Uv = st($v),
	Vv = we({}, qi, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	uc = st(Vv),
	Bv = we({}, Ml, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: bs,
	}),
	Hv = st(Bv),
	Wv = we({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	bv = st(Wv),
	Qv = we({}, qi, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Kv = st(Qv),
	Gv = [9, 13, 27, 32],
	Qs = bt && 'CompositionEvent' in window,
	nl = null;
bt && 'documentMode' in document && (nl = document.documentMode);
var Yv = bt && 'TextEvent' in window && !nl,
	Pf = bt && (!Qs || (nl && 8 < nl && 11 >= nl)),
	cc = String.fromCharCode(32),
	dc = !1;
function Nf(e, t) {
	switch (e) {
		case 'keyup':
			return Gv.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Tf(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var nr = !1;
function Xv(e, t) {
	switch (e) {
		case 'compositionend':
			return Tf(t);
		case 'keypress':
			return t.which !== 32 ? null : ((dc = !0), cc);
		case 'textInput':
			return (e = t.data), e === cc && dc ? null : e;
		default:
			return null;
	}
}
function Jv(e, t) {
	if (nr)
		return e === 'compositionend' || (!Qs && Nf(e, t))
			? ((e = kf()), (di = Hs = un = null), (nr = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return Pf && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Zv = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function fc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Zv[e.type] : t === 'textarea';
}
function Lf(e, t, n, r) {
	sf(r),
		(t = Pi(t, 'onChange')),
		0 < t.length &&
			((n = new Ws('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var rl = null,
	ml = null;
function qv(e) {
	Bf(e, 0);
}
function eo(e) {
	var t = ir(e);
	if (ef(t)) return e;
}
function ey(e, t) {
	if (e === 'change') return t;
}
var Mf = !1;
if (bt) {
	var ra;
	if (bt) {
		var la = 'oninput' in document;
		if (!la) {
			var pc = document.createElement('div');
			pc.setAttribute('oninput', 'return;'),
				(la = typeof pc.oninput == 'function');
		}
		ra = la;
	} else ra = !1;
	Mf = ra && (!document.documentMode || 9 < document.documentMode);
}
function hc() {
	rl && (rl.detachEvent('onpropertychange', Df), (ml = rl = null));
}
function Df(e) {
	if (e.propertyName === 'value' && eo(ml)) {
		var t = [];
		Lf(t, ml, e, As(e)), ff(qv, t);
	}
}
function ty(e, t, n) {
	e === 'focusin'
		? (hc(), (rl = t), (ml = n), rl.attachEvent('onpropertychange', Df))
		: e === 'focusout' && hc();
}
function ny(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return eo(ml);
}
function ry(e, t) {
	if (e === 'click') return eo(t);
}
function ly(e, t) {
	if (e === 'input' || e === 'change') return eo(t);
}
function iy(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pt = typeof Object.is == 'function' ? Object.is : iy;
function vl(e, t) {
	if (Pt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!Ta.call(t, l) || !Pt(e[l], t[l])) return !1;
	}
	return !0;
}
function mc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function vc(e, t) {
	var n = mc(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = mc(n);
	}
}
function Of(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Of(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function If() {
	for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Si(e.document);
	}
	return t;
}
function Ks(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function oy(e) {
	var t = If(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Of(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ks(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					i = Math.min(r.start, l);
				(r = r.end === void 0 ? i : Math.min(r.end, l)),
					!e.extend && i > r && ((l = r), (r = i), (i = l)),
					(l = vc(n, i));
				var o = vc(n, r);
				l &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var ay = bt && 'documentMode' in document && 11 >= document.documentMode,
	rr = null,
	Ya = null,
	ll = null,
	Xa = !1;
function yc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Xa ||
		rr == null ||
		rr !== Si(r) ||
		((r = rr),
		'selectionStart' in r && Ks(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(ll && vl(ll, r)) ||
			((ll = r),
			(r = Pi(Ya, 'onSelect')),
			0 < r.length &&
				((t = new Ws('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = rr))));
}
function ql(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var lr = {
		animationend: ql('Animation', 'AnimationEnd'),
		animationiteration: ql('Animation', 'AnimationIteration'),
		animationstart: ql('Animation', 'AnimationStart'),
		transitionend: ql('Transition', 'TransitionEnd'),
	},
	ia = {},
	Ff = {};
bt &&
	((Ff = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete lr.animationend.animation,
		delete lr.animationiteration.animation,
		delete lr.animationstart.animation),
	'TransitionEvent' in window || delete lr.transitionend.transition);
function to(e) {
	if (ia[e]) return ia[e];
	if (!lr[e]) return e;
	var t = lr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Ff) return (ia[e] = t[n]);
	return e;
}
var zf = to('animationend'),
	Af = to('animationiteration'),
	$f = to('animationstart'),
	Uf = to('transitionend'),
	Vf = new Map(),
	gc =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function En(e, t) {
	Vf.set(e, t), bn(t, [e]);
}
for (var oa = 0; oa < gc.length; oa++) {
	var aa = gc[oa],
		sy = aa.toLowerCase(),
		uy = aa[0].toUpperCase() + aa.slice(1);
	En(sy, 'on' + uy);
}
En(zf, 'onAnimationEnd');
En(Af, 'onAnimationIteration');
En($f, 'onAnimationStart');
En('dblclick', 'onDoubleClick');
En('focusin', 'onFocus');
En('focusout', 'onBlur');
En(Uf, 'onTransitionEnd');
wr('onMouseEnter', ['mouseout', 'mouseover']);
wr('onMouseLeave', ['mouseout', 'mouseover']);
wr('onPointerEnter', ['pointerout', 'pointerover']);
wr('onPointerLeave', ['pointerout', 'pointerover']);
bn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
bn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
bn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
bn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
bn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
bn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Zr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	cy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Zr));
function wc(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), sv(r, t, void 0, e), (e.currentTarget = null);
}
function Bf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var a = r[o],
						s = a.instance,
						c = a.currentTarget;
					if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
					wc(l, a, c), (i = s);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]),
						(s = a.instance),
						(c = a.currentTarget),
						(a = a.listener),
						s !== i && l.isPropagationStopped())
					)
						break e;
					wc(l, a, c), (i = s);
				}
		}
	}
	if (ji) throw ((e = ba), (ji = !1), (ba = null), e);
}
function fe(e, t) {
	var n = t[ts];
	n === void 0 && (n = t[ts] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Hf(t, e, 2, !1), n.add(r));
}
function sa(e, t, n) {
	var r = 0;
	t && (r |= 4), Hf(n, e, r, t);
}
var ei = '_reactListening' + Math.random().toString(36).slice(2);
function yl(e) {
	if (!e[ei]) {
		(e[ei] = !0),
			Yd.forEach(function (n) {
				n !== 'selectionchange' && (cy.has(n) || sa(n, !1, e), sa(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[ei] || ((t[ei] = !0), sa('selectionchange', !1, t));
	}
}
function Hf(e, t, n, r) {
	switch (Rf(t)) {
		case 1:
			var l = Cv;
			break;
		case 4:
			l = _v;
			break;
		default:
			l = Bs;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Wa ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1);
}
function ua(e, t, n, r, l) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var a = r.stateNode.containerInfo;
				if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var s = o.tag;
						if (
							(s === 3 || s === 4) &&
							((s = o.stateNode.containerInfo),
							s === l || (s.nodeType === 8 && s.parentNode === l))
						)
							return;
						o = o.return;
					}
				for (; a !== null; ) {
					if (((o = Mn(a)), o === null)) return;
					if (((s = o.tag), s === 5 || s === 6)) {
						r = i = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	ff(function () {
		var c = i,
			f = As(n),
			d = [];
		e: {
			var h = Vf.get(e);
			if (h !== void 0) {
				var C = Ws,
					w = e;
				switch (e) {
					case 'keypress':
						if (fi(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						C = Uv;
						break;
					case 'focusin':
						(w = 'focus'), (C = na);
						break;
					case 'focusout':
						(w = 'blur'), (C = na);
						break;
					case 'beforeblur':
					case 'afterblur':
						C = na;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						C = ac;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						C = Pv;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						C = Hv;
						break;
					case zf:
					case Af:
					case $f:
						C = Lv;
						break;
					case Uf:
						C = bv;
						break;
					case 'scroll':
						C = Rv;
						break;
					case 'wheel':
						C = Kv;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						C = Dv;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						C = uc;
				}
				var E = (t & 4) !== 0,
					R = !E && e === 'scroll',
					m = E ? (h !== null ? h + 'Capture' : null) : h;
				E = [];
				for (var p = c, v; p !== null; ) {
					v = p;
					var j = v.stateNode;
					if (
						(v.tag === 5 &&
							j !== null &&
							((v = j),
							m !== null && ((j = dl(p, m)), j != null && E.push(gl(p, j, v)))),
						R)
					)
						break;
					p = p.return;
				}
				0 < E.length &&
					((h = new C(h, w, null, n, f)), d.push({ event: h, listeners: E }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((h = e === 'mouseover' || e === 'pointerover'),
					(C = e === 'mouseout' || e === 'pointerout'),
					h &&
						n !== Ba &&
						(w = n.relatedTarget || n.fromElement) &&
						(Mn(w) || w[Qt]))
				)
					break e;
				if (
					(C || h) &&
					((h =
						f.window === f
							? f
							: (h = f.ownerDocument)
							? h.defaultView || h.parentWindow
							: window),
					C
						? ((w = n.relatedTarget || n.toElement),
						  (C = c),
						  (w = w ? Mn(w) : null),
						  w !== null &&
								((R = Qn(w)), w !== R || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((C = null), (w = c)),
					C !== w)
				) {
					if (
						((E = ac),
						(j = 'onMouseLeave'),
						(m = 'onMouseEnter'),
						(p = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((E = uc),
							(j = 'onPointerLeave'),
							(m = 'onPointerEnter'),
							(p = 'pointer')),
						(R = C == null ? h : ir(C)),
						(v = w == null ? h : ir(w)),
						(h = new E(j, p + 'leave', C, n, f)),
						(h.target = R),
						(h.relatedTarget = v),
						(j = null),
						Mn(f) === c &&
							((E = new E(m, p + 'enter', w, n, f)),
							(E.target = v),
							(E.relatedTarget = R),
							(j = E)),
						(R = j),
						C && w)
					)
						t: {
							for (E = C, m = w, p = 0, v = E; v; v = Zn(v)) p++;
							for (v = 0, j = m; j; j = Zn(j)) v++;
							for (; 0 < p - v; ) (E = Zn(E)), p--;
							for (; 0 < v - p; ) (m = Zn(m)), v--;
							for (; p--; ) {
								if (E === m || (m !== null && E === m.alternate)) break t;
								(E = Zn(E)), (m = Zn(m));
							}
							E = null;
						}
					else E = null;
					C !== null && xc(d, h, C, E, !1),
						w !== null && R !== null && xc(d, R, w, E, !0);
				}
			}
			e: {
				if (
					((h = c ? ir(c) : window),
					(C = h.nodeName && h.nodeName.toLowerCase()),
					C === 'select' || (C === 'input' && h.type === 'file'))
				)
					var N = ey;
				else if (fc(h))
					if (Mf) N = ly;
					else {
						N = ny;
						var x = ty;
					}
				else
					(C = h.nodeName) &&
						C.toLowerCase() === 'input' &&
						(h.type === 'checkbox' || h.type === 'radio') &&
						(N = ry);
				if (N && (N = N(e, c))) {
					Lf(d, N, n, f);
					break e;
				}
				x && x(e, h, c),
					e === 'focusout' &&
						(x = h._wrapperState) &&
						x.controlled &&
						h.type === 'number' &&
						za(h, 'number', h.value);
			}
			switch (((x = c ? ir(c) : window), e)) {
				case 'focusin':
					(fc(x) || x.contentEditable === 'true') &&
						((rr = x), (Ya = c), (ll = null));
					break;
				case 'focusout':
					ll = Ya = rr = null;
					break;
				case 'mousedown':
					Xa = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Xa = !1), yc(d, n, f);
					break;
				case 'selectionchange':
					if (ay) break;
				case 'keydown':
				case 'keyup':
					yc(d, n, f);
			}
			var P;
			if (Qs)
				e: {
					switch (e) {
						case 'compositionstart':
							var T = 'onCompositionStart';
							break e;
						case 'compositionend':
							T = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							T = 'onCompositionUpdate';
							break e;
					}
					T = void 0;
				}
			else
				nr
					? Nf(e, n) && (T = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
			T &&
				(Pf &&
					n.locale !== 'ko' &&
					(nr || T !== 'onCompositionStart'
						? T === 'onCompositionEnd' && nr && (P = kf())
						: ((un = f),
						  (Hs = 'value' in un ? un.value : un.textContent),
						  (nr = !0))),
				(x = Pi(c, T)),
				0 < x.length &&
					((T = new sc(T, e, null, n, f)),
					d.push({ event: T, listeners: x }),
					P ? (T.data = P) : ((P = Tf(n)), P !== null && (T.data = P)))),
				(P = Yv ? Xv(e, n) : Jv(e, n)) &&
					((c = Pi(c, 'onBeforeInput')),
					0 < c.length &&
						((f = new sc('onBeforeInput', 'beforeinput', null, n, f)),
						d.push({ event: f, listeners: c }),
						(f.data = P)));
		}
		Bf(d, t);
	});
}
function gl(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Pi(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 &&
			i !== null &&
			((l = i),
			(i = dl(e, n)),
			i != null && r.unshift(gl(e, i, l)),
			(i = dl(e, t)),
			i != null && r.push(gl(e, i, l))),
			(e = e.return);
	}
	return r;
}
function Zn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function xc(e, t, n, r, l) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			s = a.alternate,
			c = a.stateNode;
		if (s !== null && s === r) break;
		a.tag === 5 &&
			c !== null &&
			((a = c),
			l
				? ((s = dl(n, i)), s != null && o.unshift(gl(n, s, a)))
				: l || ((s = dl(n, i)), s != null && o.push(gl(n, s, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var dy = /\r\n?/g,
	fy = /\u0000|\uFFFD/g;
function Sc(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			dy,
			`
`
		)
		.replace(fy, '');
}
function ti(e, t, n) {
	if (((t = Sc(t)), Sc(e) !== t && n)) throw Error(L(425));
}
function Ni() {}
var Ja = null,
	Za = null;
function qa(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var es = typeof setTimeout == 'function' ? setTimeout : void 0,
	py = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Ec = typeof Promise == 'function' ? Promise : void 0,
	hy =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Ec < 'u'
			? function (e) {
					return Ec.resolve(null).then(e).catch(my);
			  }
			: es;
function my(e) {
	setTimeout(function () {
		throw e;
	});
}
function ca(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(l), hl(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	hl(t);
}
function hn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function jc(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Lr = Math.random().toString(36).slice(2),
	Mt = '__reactFiber$' + Lr,
	wl = '__reactProps$' + Lr,
	Qt = '__reactContainer$' + Lr,
	ts = '__reactEvents$' + Lr,
	vy = '__reactListeners$' + Lr,
	yy = '__reactHandles$' + Lr;
function Mn(e) {
	var t = e[Mt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Qt] || n[Mt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = jc(e); e !== null; ) {
					if ((n = e[Mt])) return n;
					e = jc(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Dl(e) {
	return (
		(e = e[Mt] || e[Qt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function ir(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(L(33));
}
function no(e) {
	return e[wl] || null;
}
var ns = [],
	or = -1;
function jn(e) {
	return { current: e };
}
function pe(e) {
	0 > or || ((e.current = ns[or]), (ns[or] = null), or--);
}
function de(e, t) {
	or++, (ns[or] = e.current), (e.current = t);
}
var xn = {},
	Be = jn(xn),
	Ze = jn(!1),
	$n = xn;
function xr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return xn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		i;
	for (i in n) l[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function qe(e) {
	return (e = e.childContextTypes), e != null;
}
function Ti() {
	pe(Ze), pe(Be);
}
function Cc(e, t, n) {
	if (Be.current !== xn) throw Error(L(168));
	de(Be, t), de(Ze, n);
}
function Wf(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(L(108, tv(e) || 'Unknown', l));
	return we({}, n, r);
}
function Li(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
		($n = Be.current),
		de(Be, e),
		de(Ze, Ze.current),
		!0
	);
}
function _c(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(L(169));
	n
		? ((e = Wf(e, t, $n)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  pe(Ze),
		  pe(Be),
		  de(Be, e))
		: pe(Ze),
		de(Ze, n);
}
var $t = null,
	ro = !1,
	da = !1;
function bf(e) {
	$t === null ? ($t = [e]) : $t.push(e);
}
function gy(e) {
	(ro = !0), bf(e);
}
function Cn() {
	if (!da && $t !== null) {
		da = !0;
		var e = 0,
			t = le;
		try {
			var n = $t;
			for (le = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			($t = null), (ro = !1);
		} catch (l) {
			throw ($t !== null && ($t = $t.slice(e + 1)), vf($s, Cn), l);
		} finally {
			(le = t), (da = !1);
		}
	}
	return null;
}
var ar = [],
	sr = 0,
	Mi = null,
	Di = 0,
	pt = [],
	ht = 0,
	Un = null,
	Ut = 1,
	Vt = '';
function Nn(e, t) {
	(ar[sr++] = Di), (ar[sr++] = Mi), (Mi = e), (Di = t);
}
function Qf(e, t, n) {
	(pt[ht++] = Ut), (pt[ht++] = Vt), (pt[ht++] = Un), (Un = e);
	var r = Ut;
	e = Vt;
	var l = 32 - Rt(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var i = 32 - Rt(t) + l;
	if (30 < i) {
		var o = l - (l % 5);
		(i = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(l -= o),
			(Ut = (1 << (32 - Rt(t) + l)) | (n << l) | r),
			(Vt = i + e);
	} else (Ut = (1 << i) | (n << l) | r), (Vt = e);
}
function Gs(e) {
	e.return !== null && (Nn(e, 1), Qf(e, 1, 0));
}
function Ys(e) {
	for (; e === Mi; )
		(Mi = ar[--sr]), (ar[sr] = null), (Di = ar[--sr]), (ar[sr] = null);
	for (; e === Un; )
		(Un = pt[--ht]),
			(pt[ht] = null),
			(Vt = pt[--ht]),
			(pt[ht] = null),
			(Ut = pt[--ht]),
			(pt[ht] = null);
}
var it = null,
	lt = null,
	me = !1,
	_t = null;
function Kf(e, t) {
	var n = mt(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (it = e), (lt = hn(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (it = e), (lt = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Un !== null ? { id: Ut, overflow: Vt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = mt(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (it = e),
					  (lt = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function rs(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ls(e) {
	if (me) {
		var t = lt;
		if (t) {
			var n = t;
			if (!Rc(e, t)) {
				if (rs(e)) throw Error(L(418));
				t = hn(n.nextSibling);
				var r = it;
				t && Rc(e, t)
					? Kf(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (me = !1), (it = e));
			}
		} else {
			if (rs(e)) throw Error(L(418));
			(e.flags = (e.flags & -4097) | 2), (me = !1), (it = e);
		}
	}
}
function kc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	it = e;
}
function ni(e) {
	if (e !== it) return !1;
	if (!me) return kc(e), (me = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !qa(e.type, e.memoizedProps))),
		t && (t = lt))
	) {
		if (rs(e)) throw (Gf(), Error(L(418)));
		for (; t; ) Kf(e, t), (t = hn(t.nextSibling));
	}
	if ((kc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(L(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							lt = hn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			lt = null;
		}
	} else lt = it ? hn(e.stateNode.nextSibling) : null;
	return !0;
}
function Gf() {
	for (var e = lt; e; ) e = hn(e.nextSibling);
}
function Sr() {
	(lt = it = null), (me = !1);
}
function Xs(e) {
	_t === null ? (_t = [e]) : _t.push(e);
}
var wy = Xt.ReactCurrentBatchConfig;
function Et(e, t) {
	if (e && e.defaultProps) {
		(t = we({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Oi = jn(null),
	Ii = null,
	ur = null,
	Js = null;
function Zs() {
	Js = ur = Ii = null;
}
function qs(e) {
	var t = Oi.current;
	pe(Oi), (e._currentValue = t);
}
function is(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function yr(e, t) {
	(Ii = e),
		(Js = ur = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Je = !0), (e.firstContext = null));
}
function yt(e) {
	var t = e._currentValue;
	if (Js !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
			if (Ii === null) throw Error(L(308));
			(ur = e), (Ii.dependencies = { lanes: 0, firstContext: e });
		} else ur = ur.next = e;
	return t;
}
var Dn = null;
function eu(e) {
	Dn === null ? (Dn = [e]) : Dn.push(e);
}
function Yf(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), eu(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Kt(e, r)
	);
}
function Kt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var on = !1;
function tu(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Xf(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Ht(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function mn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), J & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Kt(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), eu(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Kt(e, n)
	);
}
function pi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n);
	}
}
function Pc(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
			} while (n !== null);
			i === null ? (l = i = t) : (i = i.next = t);
		} else l = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function Fi(e, t, n, r) {
	var l = e.updateQueue;
	on = !1;
	var i = l.firstBaseUpdate,
		o = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var s = a,
			c = s.next;
		(s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
		var f = e.alternate;
		f !== null &&
			((f = f.updateQueue),
			(a = f.lastBaseUpdate),
			a !== o &&
				(a === null ? (f.firstBaseUpdate = c) : (a.next = c),
				(f.lastBaseUpdate = s)));
	}
	if (i !== null) {
		var d = l.baseState;
		(o = 0), (f = c = s = null), (a = i);
		do {
			var h = a.lane,
				C = a.eventTime;
			if ((r & h) === h) {
				f !== null &&
					(f = f.next =
						{
							eventTime: C,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var w = e,
						E = a;
					switch (((h = t), (C = n), E.tag)) {
						case 1:
							if (((w = E.payload), typeof w == 'function')) {
								d = w.call(C, d, h);
								break e;
							}
							d = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = E.payload),
								(h = typeof w == 'function' ? w.call(C, d, h) : w),
								h == null)
							)
								break e;
							d = we({}, d, h);
							break e;
						case 2:
							on = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(h = l.effects),
					h === null ? (l.effects = [a]) : h.push(a));
			} else
				(C = {
					eventTime: C,
					lane: h,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					f === null ? ((c = f = C), (s = d)) : (f = f.next = C),
					(o |= h);
			if (((a = a.next), a === null)) {
				if (((a = l.shared.pending), a === null)) break;
				(h = a),
					(a = h.next),
					(h.next = null),
					(l.lastBaseUpdate = h),
					(l.shared.pending = null);
			}
		} while (1);
		if (
			(f === null && (s = d),
			(l.baseState = s),
			(l.firstBaseUpdate = c),
			(l.lastBaseUpdate = f),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (o |= l.lane), (l = l.next);
			while (l !== t);
		} else i === null && (l.shared.lanes = 0);
		(Bn |= o), (e.lanes = o), (e.memoizedState = d);
	}
}
function Nc(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != 'function'))
					throw Error(L(191, l));
				l.call(r);
			}
		}
}
var Jf = new Gd.Component().refs;
function os(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : we({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Qn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ke(),
			l = yn(e),
			i = Ht(r, l);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = mn(e, i, l)),
			t !== null && (kt(t, e, l, r), pi(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ke(),
			l = yn(e),
			i = Ht(r, l);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = mn(e, i, l)),
			t !== null && (kt(t, e, l, r), pi(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Ke(),
			r = yn(e),
			l = Ht(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = mn(e, l, r)),
			t !== null && (kt(t, e, r, n), pi(t, e, r));
	},
};
function Tc(e, t, n, r, l, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !vl(n, r) || !vl(l, i)
			: !0
	);
}
function Zf(e, t, n) {
	var r = !1,
		l = xn,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = yt(i))
			: ((l = qe(t) ? $n : Be.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? xr(e, l) : xn)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = lo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Lc(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && lo.enqueueReplaceState(t, t.state, null);
}
function as(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = Jf), tu(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (l.context = yt(i))
		: ((i = qe(t) ? $n : Be.current), (l.context = xr(e, i))),
		(l.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (os(e, t, i, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && lo.enqueueReplaceState(l, l.state, null),
			Fi(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Hr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(L(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(L(147, e));
			var l = r,
				i = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (o) {
						var a = l.refs;
						a === Jf && (a = l.refs = {}),
							o === null ? delete a[i] : (a[i] = o);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != 'string') throw Error(L(284));
		if (!n._owner) throw Error(L(290, e));
	}
	return e;
}
function ri(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			L(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Mc(e) {
	var t = e._init;
	return t(e._payload);
}
function qf(e) {
	function t(m, p) {
		if (e) {
			var v = m.deletions;
			v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
		}
	}
	function n(m, p) {
		if (!e) return null;
		for (; p !== null; ) t(m, p), (p = p.sibling);
		return null;
	}
	function r(m, p) {
		for (m = new Map(); p !== null; )
			p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
		return m;
	}
	function l(m, p) {
		return (m = gn(m, p)), (m.index = 0), (m.sibling = null), m;
	}
	function i(m, p, v) {
		return (
			(m.index = v),
			e
				? ((v = m.alternate),
				  v !== null
						? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
						: ((m.flags |= 2), p))
				: ((m.flags |= 1048576), p)
		);
	}
	function o(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function a(m, p, v, j) {
		return p === null || p.tag !== 6
			? ((p = ga(v, m.mode, j)), (p.return = m), p)
			: ((p = l(p, v)), (p.return = m), p);
	}
	function s(m, p, v, j) {
		var N = v.type;
		return N === tr
			? f(m, p, v.props.children, j, v.key)
			: p !== null &&
			  (p.elementType === N ||
					(typeof N == 'object' &&
						N !== null &&
						N.$$typeof === ln &&
						Mc(N) === p.type))
			? ((j = l(p, v.props)), (j.ref = Hr(m, p, v)), (j.return = m), j)
			: ((j = wi(v.type, v.key, v.props, null, m.mode, j)),
			  (j.ref = Hr(m, p, v)),
			  (j.return = m),
			  j);
	}
	function c(m, p, v, j) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== v.containerInfo ||
			p.stateNode.implementation !== v.implementation
			? ((p = wa(v, m.mode, j)), (p.return = m), p)
			: ((p = l(p, v.children || [])), (p.return = m), p);
	}
	function f(m, p, v, j, N) {
		return p === null || p.tag !== 7
			? ((p = An(v, m.mode, j, N)), (p.return = m), p)
			: ((p = l(p, v)), (p.return = m), p);
	}
	function d(m, p, v) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (p = ga('' + p, m.mode, v)), (p.return = m), p;
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case Ql:
					return (
						(v = wi(p.type, p.key, p.props, null, m.mode, v)),
						(v.ref = Hr(m, null, p)),
						(v.return = m),
						v
					);
				case er:
					return (p = wa(p, m.mode, v)), (p.return = m), p;
				case ln:
					var j = p._init;
					return d(m, j(p._payload), v);
			}
			if (Xr(p) || Ar(p))
				return (p = An(p, m.mode, v, null)), (p.return = m), p;
			ri(m, p);
		}
		return null;
	}
	function h(m, p, v, j) {
		var N = p !== null ? p.key : null;
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return N !== null ? null : a(m, p, '' + v, j);
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Ql:
					return v.key === N ? s(m, p, v, j) : null;
				case er:
					return v.key === N ? c(m, p, v, j) : null;
				case ln:
					return (N = v._init), h(m, p, N(v._payload), j);
			}
			if (Xr(v) || Ar(v)) return N !== null ? null : f(m, p, v, j, null);
			ri(m, v);
		}
		return null;
	}
	function C(m, p, v, j, N) {
		if ((typeof j == 'string' && j !== '') || typeof j == 'number')
			return (m = m.get(v) || null), a(p, m, '' + j, N);
		if (typeof j == 'object' && j !== null) {
			switch (j.$$typeof) {
				case Ql:
					return (m = m.get(j.key === null ? v : j.key) || null), s(p, m, j, N);
				case er:
					return (m = m.get(j.key === null ? v : j.key) || null), c(p, m, j, N);
				case ln:
					var x = j._init;
					return C(m, p, v, x(j._payload), N);
			}
			if (Xr(j) || Ar(j)) return (m = m.get(v) || null), f(p, m, j, N, null);
			ri(p, j);
		}
		return null;
	}
	function w(m, p, v, j) {
		for (
			var N = null, x = null, P = p, T = (p = 0), z = null;
			P !== null && T < v.length;
			T++
		) {
			P.index > T ? ((z = P), (P = null)) : (z = P.sibling);
			var I = h(m, P, v[T], j);
			if (I === null) {
				P === null && (P = z);
				break;
			}
			e && P && I.alternate === null && t(m, P),
				(p = i(I, p, T)),
				x === null ? (N = I) : (x.sibling = I),
				(x = I),
				(P = z);
		}
		if (T === v.length) return n(m, P), me && Nn(m, T), N;
		if (P === null) {
			for (; T < v.length; T++)
				(P = d(m, v[T], j)),
					P !== null &&
						((p = i(P, p, T)), x === null ? (N = P) : (x.sibling = P), (x = P));
			return me && Nn(m, T), N;
		}
		for (P = r(m, P); T < v.length; T++)
			(z = C(P, m, T, v[T], j)),
				z !== null &&
					(e && z.alternate !== null && P.delete(z.key === null ? T : z.key),
					(p = i(z, p, T)),
					x === null ? (N = z) : (x.sibling = z),
					(x = z));
		return (
			e &&
				P.forEach(function (G) {
					return t(m, G);
				}),
			me && Nn(m, T),
			N
		);
	}
	function E(m, p, v, j) {
		var N = Ar(v);
		if (typeof N != 'function') throw Error(L(150));
		if (((v = N.call(v)), v == null)) throw Error(L(151));
		for (
			var x = (N = null), P = p, T = (p = 0), z = null, I = v.next();
			P !== null && !I.done;
			T++, I = v.next()
		) {
			P.index > T ? ((z = P), (P = null)) : (z = P.sibling);
			var G = h(m, P, I.value, j);
			if (G === null) {
				P === null && (P = z);
				break;
			}
			e && P && G.alternate === null && t(m, P),
				(p = i(G, p, T)),
				x === null ? (N = G) : (x.sibling = G),
				(x = G),
				(P = z);
		}
		if (I.done) return n(m, P), me && Nn(m, T), N;
		if (P === null) {
			for (; !I.done; T++, I = v.next())
				(I = d(m, I.value, j)),
					I !== null &&
						((p = i(I, p, T)), x === null ? (N = I) : (x.sibling = I), (x = I));
			return me && Nn(m, T), N;
		}
		for (P = r(m, P); !I.done; T++, I = v.next())
			(I = C(P, m, T, I.value, j)),
				I !== null &&
					(e && I.alternate !== null && P.delete(I.key === null ? T : I.key),
					(p = i(I, p, T)),
					x === null ? (N = I) : (x.sibling = I),
					(x = I));
		return (
			e &&
				P.forEach(function (te) {
					return t(m, te);
				}),
			me && Nn(m, T),
			N
		);
	}
	function R(m, p, v, j) {
		if (
			(typeof v == 'object' &&
				v !== null &&
				v.type === tr &&
				v.key === null &&
				(v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case Ql:
					e: {
						for (var N = v.key, x = p; x !== null; ) {
							if (x.key === N) {
								if (((N = v.type), N === tr)) {
									if (x.tag === 7) {
										n(m, x.sibling),
											(p = l(x, v.props.children)),
											(p.return = m),
											(m = p);
										break e;
									}
								} else if (
									x.elementType === N ||
									(typeof N == 'object' &&
										N !== null &&
										N.$$typeof === ln &&
										Mc(N) === x.type)
								) {
									n(m, x.sibling),
										(p = l(x, v.props)),
										(p.ref = Hr(m, x, v)),
										(p.return = m),
										(m = p);
									break e;
								}
								n(m, x);
								break;
							} else t(m, x);
							x = x.sibling;
						}
						v.type === tr
							? ((p = An(v.props.children, m.mode, j, v.key)),
							  (p.return = m),
							  (m = p))
							: ((j = wi(v.type, v.key, v.props, null, m.mode, j)),
							  (j.ref = Hr(m, p, v)),
							  (j.return = m),
							  (m = j));
					}
					return o(m);
				case er:
					e: {
						for (x = v.key; p !== null; ) {
							if (p.key === x)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === v.containerInfo &&
									p.stateNode.implementation === v.implementation
								) {
									n(m, p.sibling),
										(p = l(p, v.children || [])),
										(p.return = m),
										(m = p);
									break e;
								} else {
									n(m, p);
									break;
								}
							else t(m, p);
							p = p.sibling;
						}
						(p = wa(v, m.mode, j)), (p.return = m), (m = p);
					}
					return o(m);
				case ln:
					return (x = v._init), R(m, p, x(v._payload), j);
			}
			if (Xr(v)) return w(m, p, v, j);
			if (Ar(v)) return E(m, p, v, j);
			ri(m, v);
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
			  p !== null && p.tag === 6
					? (n(m, p.sibling), (p = l(p, v)), (p.return = m), (m = p))
					: (n(m, p), (p = ga(v, m.mode, j)), (p.return = m), (m = p)),
			  o(m))
			: n(m, p);
	}
	return R;
}
var Er = qf(!0),
	ep = qf(!1),
	Ol = {},
	Ot = jn(Ol),
	xl = jn(Ol),
	Sl = jn(Ol);
function On(e) {
	if (e === Ol) throw Error(L(174));
	return e;
}
function nu(e, t) {
	switch ((de(Sl, t), de(xl, e), de(Ot, Ol), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : $a(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = $a(t, e));
	}
	pe(Ot), de(Ot, t);
}
function jr() {
	pe(Ot), pe(xl), pe(Sl);
}
function tp(e) {
	On(Sl.current);
	var t = On(Ot.current),
		n = $a(t, e.type);
	t !== n && (de(xl, e), de(Ot, n));
}
function ru(e) {
	xl.current === e && (pe(Ot), pe(xl));
}
var ye = jn(0);
function zi(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var fa = [];
function lu() {
	for (var e = 0; e < fa.length; e++)
		fa[e]._workInProgressVersionPrimary = null;
	fa.length = 0;
}
var hi = Xt.ReactCurrentDispatcher,
	pa = Xt.ReactCurrentBatchConfig,
	Vn = 0,
	ge = null,
	ke = null,
	Ne = null,
	Ai = !1,
	il = !1,
	El = 0,
	xy = 0;
function Ae() {
	throw Error(L(321));
}
function iu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Pt(e[n], t[n])) return !1;
	return !0;
}
function ou(e, t, n, r, l, i) {
	if (
		((Vn = i),
		(ge = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(hi.current = e === null || e.memoizedState === null ? Cy : _y),
		(e = n(r, l)),
		il)
	) {
		i = 0;
		do {
			if (((il = !1), (El = 0), 25 <= i)) throw Error(L(301));
			(i += 1),
				(Ne = ke = null),
				(t.updateQueue = null),
				(hi.current = Ry),
				(e = n(r, l));
		} while (il);
	}
	if (
		((hi.current = $i),
		(t = ke !== null && ke.next !== null),
		(Vn = 0),
		(Ne = ke = ge = null),
		(Ai = !1),
		t)
	)
		throw Error(L(300));
	return e;
}
function au() {
	var e = El !== 0;
	return (El = 0), e;
}
function Lt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return Ne === null ? (ge.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function gt() {
	if (ke === null) {
		var e = ge.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ke.next;
	var t = Ne === null ? ge.memoizedState : Ne.next;
	if (t !== null) (Ne = t), (ke = e);
	else {
		if (e === null) throw Error(L(310));
		(ke = e),
			(e = {
				memoizedState: ke.memoizedState,
				baseState: ke.baseState,
				baseQueue: ke.baseQueue,
				queue: ke.queue,
				next: null,
			}),
			Ne === null ? (ge.memoizedState = Ne = e) : (Ne = Ne.next = e);
	}
	return Ne;
}
function jl(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function ha(e) {
	var t = gt(),
		n = t.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = e;
	var r = ke,
		l = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (l !== null) {
			var o = l.next;
			(l.next = i.next), (i.next = o);
		}
		(r.baseQueue = l = i), (n.pending = null);
	}
	if (l !== null) {
		(i = l.next), (r = r.baseState);
		var a = (o = null),
			s = null,
			c = i;
		do {
			var f = c.lane;
			if ((Vn & f) === f)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: c.action,
							hasEagerState: c.hasEagerState,
							eagerState: c.eagerState,
							next: null,
						}),
					(r = c.hasEagerState ? c.eagerState : e(r, c.action));
			else {
				var d = {
					lane: f,
					action: c.action,
					hasEagerState: c.hasEagerState,
					eagerState: c.eagerState,
					next: null,
				};
				s === null ? ((a = s = d), (o = r)) : (s = s.next = d),
					(ge.lanes |= f),
					(Bn |= f);
			}
			c = c.next;
		} while (c !== null && c !== i);
		s === null ? (o = r) : (s.next = a),
			Pt(r, t.memoizedState) || (Je = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (i = l.lane), (ge.lanes |= i), (Bn |= i), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ma(e) {
	var t = gt(),
		n = t.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		i = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var o = (l = l.next);
		do (i = e(i, o.action)), (o = o.next);
		while (o !== l);
		Pt(i, t.memoizedState) || (Je = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function np() {}
function rp(e, t) {
	var n = ge,
		r = gt(),
		l = t(),
		i = !Pt(r.memoizedState, l);
	if (
		(i && ((r.memoizedState = l), (Je = !0)),
		(r = r.queue),
		su(op.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (Ne !== null && Ne.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Cl(9, ip.bind(null, n, r, l, t), void 0, null),
			Te === null)
		)
			throw Error(L(349));
		Vn & 30 || lp(n, t, l);
	}
	return l;
}
function lp(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ge.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ge.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ip(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), ap(t) && sp(e);
}
function op(e, t, n) {
	return n(function () {
		ap(t) && sp(e);
	});
}
function ap(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Pt(e, n);
	} catch {
		return !0;
	}
}
function sp(e) {
	var t = Kt(e, 1);
	t !== null && kt(t, e, 1, -1);
}
function Dc(e) {
	var t = Lt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: jl,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = jy.bind(null, ge, e)),
		[t.memoizedState, e]
	);
}
function Cl(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ge.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ge.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function up() {
	return gt().memoizedState;
}
function mi(e, t, n, r) {
	var l = Lt();
	(ge.flags |= e),
		(l.memoizedState = Cl(1 | t, n, void 0, r === void 0 ? null : r));
}
function io(e, t, n, r) {
	var l = gt();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (ke !== null) {
		var o = ke.memoizedState;
		if (((i = o.destroy), r !== null && iu(r, o.deps))) {
			l.memoizedState = Cl(t, n, i, r);
			return;
		}
	}
	(ge.flags |= e), (l.memoizedState = Cl(1 | t, n, i, r));
}
function Oc(e, t) {
	return mi(8390656, 8, e, t);
}
function su(e, t) {
	return io(2048, 8, e, t);
}
function cp(e, t) {
	return io(4, 2, e, t);
}
function dp(e, t) {
	return io(4, 4, e, t);
}
function fp(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function pp(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), io(4, 4, fp.bind(null, t, e), n)
	);
}
function uu() {}
function hp(e, t) {
	var n = gt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && iu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function mp(e, t) {
	var n = gt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && iu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function vp(e, t, n) {
	return Vn & 21
		? (Pt(n, t) || ((n = wf()), (ge.lanes |= n), (Bn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n));
}
function Sy(e, t) {
	var n = le;
	(le = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = pa.transition;
	pa.transition = {};
	try {
		e(!1), t();
	} finally {
		(le = n), (pa.transition = r);
	}
}
function yp() {
	return gt().memoizedState;
}
function Ey(e, t, n) {
	var r = yn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		gp(e))
	)
		wp(t, n);
	else if (((n = Yf(e, t, n, r)), n !== null)) {
		var l = Ke();
		kt(n, e, r, l), xp(n, t, r);
	}
}
function jy(e, t, n) {
	var r = yn(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (gp(e)) wp(t, l);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var o = t.lastRenderedState,
					a = i(o, n);
				if (((l.hasEagerState = !0), (l.eagerState = a), Pt(a, o))) {
					var s = t.interleaved;
					s === null
						? ((l.next = l), eu(t))
						: ((l.next = s.next), (s.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Yf(e, t, l, r)),
			n !== null && ((l = Ke()), kt(n, e, r, l), xp(n, t, r));
	}
}
function gp(e) {
	var t = e.alternate;
	return e === ge || (t !== null && t === ge);
}
function wp(e, t) {
	il = Ai = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function xp(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n);
	}
}
var $i = {
		readContext: yt,
		useCallback: Ae,
		useContext: Ae,
		useEffect: Ae,
		useImperativeHandle: Ae,
		useInsertionEffect: Ae,
		useLayoutEffect: Ae,
		useMemo: Ae,
		useReducer: Ae,
		useRef: Ae,
		useState: Ae,
		useDebugValue: Ae,
		useDeferredValue: Ae,
		useTransition: Ae,
		useMutableSource: Ae,
		useSyncExternalStore: Ae,
		useId: Ae,
		unstable_isNewReconciler: !1,
	},
	Cy = {
		readContext: yt,
		useCallback: function (e, t) {
			return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: yt,
		useEffect: Oc,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				mi(4194308, 4, fp.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return mi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return mi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Lt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Lt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Ey.bind(null, ge, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Lt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Dc,
		useDebugValue: uu,
		useDeferredValue: function (e) {
			return (Lt().memoizedState = e);
		},
		useTransition: function () {
			var e = Dc(!1),
				t = e[0];
			return (e = Sy.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ge,
				l = Lt();
			if (me) {
				if (n === void 0) throw Error(L(407));
				n = n();
			} else {
				if (((n = t()), Te === null)) throw Error(L(349));
				Vn & 30 || lp(r, t, n);
			}
			l.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(l.queue = i),
				Oc(op.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				Cl(9, ip.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Lt(),
				t = Te.identifierPrefix;
			if (me) {
				var n = Vt,
					r = Ut;
				(n = (r & ~(1 << (32 - Rt(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = El++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = xy++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	_y = {
		readContext: yt,
		useCallback: hp,
		useContext: yt,
		useEffect: su,
		useImperativeHandle: pp,
		useInsertionEffect: cp,
		useLayoutEffect: dp,
		useMemo: mp,
		useReducer: ha,
		useRef: up,
		useState: function () {
			return ha(jl);
		},
		useDebugValue: uu,
		useDeferredValue: function (e) {
			var t = gt();
			return vp(t, ke.memoizedState, e);
		},
		useTransition: function () {
			var e = ha(jl)[0],
				t = gt().memoizedState;
			return [e, t];
		},
		useMutableSource: np,
		useSyncExternalStore: rp,
		useId: yp,
		unstable_isNewReconciler: !1,
	},
	Ry = {
		readContext: yt,
		useCallback: hp,
		useContext: yt,
		useEffect: su,
		useImperativeHandle: pp,
		useInsertionEffect: cp,
		useLayoutEffect: dp,
		useMemo: mp,
		useReducer: ma,
		useRef: up,
		useState: function () {
			return ma(jl);
		},
		useDebugValue: uu,
		useDeferredValue: function (e) {
			var t = gt();
			return ke === null ? (t.memoizedState = e) : vp(t, ke.memoizedState, e);
		},
		useTransition: function () {
			var e = ma(jl)[0],
				t = gt().memoizedState;
			return [e, t];
		},
		useMutableSource: np,
		useSyncExternalStore: rp,
		useId: yp,
		unstable_isNewReconciler: !1,
	};
function Cr(e, t) {
	try {
		var n = '',
			r = t;
		do (n += ev(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (i) {
		l =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function va(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ss(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var ky = typeof WeakMap == 'function' ? WeakMap : Map;
function Sp(e, t, n) {
	(n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Vi || ((Vi = !0), (gs = r)), ss(e, t);
		}),
		n
	);
}
function Ep(e, t, n) {
	(n = Ht(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				ss(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				ss(e, t),
					typeof r != 'function' &&
						(vn === null ? (vn = new Set([this])) : vn.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Ic(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new ky();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Vy.bind(null, e, t, n)), t.then(e, e));
}
function Fc(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function zc(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Ht(-1, 1)), (t.tag = 2), mn(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Py = Xt.ReactCurrentOwner,
	Je = !1;
function Qe(e, t, n, r) {
	t.child = e === null ? ep(t, null, n, r) : Er(t, e.child, n, r);
}
function Ac(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return (
		yr(t, l),
		(r = ou(e, t, n, r, i, l)),
		(n = au()),
		e !== null && !Je
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Gt(e, t, l))
			: (me && n && Gs(t), (t.flags |= 1), Qe(e, t, r, l), t.child)
	);
}
function $c(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!yu(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), jp(e, t, i, r, l))
			: ((e = wi(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & l))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : vl), n(o, r) && e.ref === t.ref)
		)
			return Gt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = gn(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function jp(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (vl(i, r) && e.ref === t.ref)
			if (((Je = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
				e.flags & 131072 && (Je = !0);
			else return (t.lanes = e.lanes), Gt(e, t, l);
	}
	return us(e, t, n, r, l);
}
function Cp(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				de(dr, nt),
				(nt |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					de(dr, nt),
					(nt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				de(dr, nt),
				(nt |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			de(dr, nt),
			(nt |= r);
	return Qe(e, t, l, n), t.child;
}
function _p(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function us(e, t, n, r, l) {
	var i = qe(n) ? $n : Be.current;
	return (
		(i = xr(t, i)),
		yr(t, l),
		(n = ou(e, t, n, r, i, l)),
		(r = au()),
		e !== null && !Je
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Gt(e, t, l))
			: (me && r && Gs(t), (t.flags |= 1), Qe(e, t, n, l), t.child)
	);
}
function Uc(e, t, n, r, l) {
	if (qe(n)) {
		var i = !0;
		Li(t);
	} else i = !1;
	if ((yr(t, l), t.stateNode === null))
		vi(e, t), Zf(t, n, r), as(t, n, r, l), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var s = o.context,
			c = n.contextType;
		typeof c == 'object' && c !== null
			? (c = yt(c))
			: ((c = qe(n) ? $n : Be.current), (c = xr(t, c)));
		var f = n.getDerivedStateFromProps,
			d =
				typeof f == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || s !== c) && Lc(t, o, r, c)),
			(on = !1);
		var h = t.memoizedState;
		(o.state = h),
			Fi(t, r, o, l),
			(s = t.memoizedState),
			a !== r || h !== s || Ze.current || on
				? (typeof f == 'function' && (os(t, n, f, r), (s = t.memoizedState)),
				  (a = on || Tc(t, n, a, r, h, s, c))
						? (d ||
								(typeof o.UNSAFE_componentWillMount != 'function' &&
									typeof o.componentWillMount != 'function') ||
								(typeof o.componentWillMount == 'function' &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount == 'function' &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (o.props = r),
				  (o.state = s),
				  (o.context = c),
				  (r = a))
				: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			Xf(e, t),
			(a = t.memoizedProps),
			(c = t.type === t.elementType ? a : Et(t.type, a)),
			(o.props = c),
			(d = t.pendingProps),
			(h = o.context),
			(s = n.contextType),
			typeof s == 'object' && s !== null
				? (s = yt(s))
				: ((s = qe(n) ? $n : Be.current), (s = xr(t, s)));
		var C = n.getDerivedStateFromProps;
		(f =
			typeof C == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== d || h !== s) && Lc(t, o, r, s)),
			(on = !1),
			(h = t.memoizedState),
			(o.state = h),
			Fi(t, r, o, l);
		var w = t.memoizedState;
		a !== d || h !== w || Ze.current || on
			? (typeof C == 'function' && (os(t, n, C, r), (w = t.memoizedState)),
			  (c = on || Tc(t, n, c, r, h, w, s) || !1)
					? (f ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, w, s),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, w, s)),
					  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = w)),
			  (o.props = r),
			  (o.state = w),
			  (o.context = s),
			  (r = c))
			: (typeof o.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return cs(e, t, n, r, i, l);
}
function cs(e, t, n, r, l, i) {
	_p(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return l && _c(t, n, !1), Gt(e, t, i);
	(r = t.stateNode), (Py.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = Er(t, e.child, null, i)), (t.child = Er(t, null, a, i)))
			: Qe(e, t, a, i),
		(t.memoizedState = r.state),
		l && _c(t, n, !0),
		t.child
	);
}
function Rp(e) {
	var t = e.stateNode;
	t.pendingContext
		? Cc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Cc(e, t.context, !1),
		nu(e, t.containerInfo);
}
function Vc(e, t, n, r, l) {
	return Sr(), Xs(l), (t.flags |= 256), Qe(e, t, n, r), t.child;
}
var ds = { dehydrated: null, treeContext: null, retryLane: 0 };
function fs(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function kp(e, t, n) {
	var r = t.pendingProps,
		l = ye.current,
		i = !1,
		o = (t.flags & 128) !== 0,
		a;
	if (
		((a = o) ||
			(a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		a
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		de(ye, l & 1),
		e === null)
	)
		return (
			ls(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (o = { mode: 'hidden', children: o }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = o))
								: (i = so(o, r, 0, null)),
						  (e = An(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = fs(n)),
						  (t.memoizedState = ds),
						  e)
						: cu(t, o))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return Ny(e, t, o, r, a, l, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
		var s = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = gn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (i = gn(a, i)) : ((i = An(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? fs(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = ds),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = gn(i, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function cu(e, t) {
	return (
		(t = so({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function li(e, t, n, r) {
	return (
		r !== null && Xs(r),
		Er(t, e.child, null, n),
		(e = cu(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Ny(e, t, n, r, l, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = va(Error(L(422)))), li(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (l = t.mode),
			  (r = so({ mode: 'visible', children: r.children }, l, 0, null)),
			  (i = An(i, l, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && Er(t, e.child, null, o),
			  (t.child.memoizedState = fs(o)),
			  (t.memoizedState = ds),
			  i);
	if (!(t.mode & 1)) return li(e, t, o, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (i = Error(L(419))), (r = va(i, r, void 0)), li(e, t, o, r);
	}
	if (((a = (o & e.childLanes) !== 0), Je || a)) {
		if (((r = Te), r !== null)) {
			switch (o & -o) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0;
			}
			(l = l & (r.suspendedLanes | o) ? 0 : l),
				l !== 0 &&
					l !== i.retryLane &&
					((i.retryLane = l), Kt(e, l), kt(r, e, l, -1));
		}
		return vu(), (r = va(Error(L(421)))), li(e, t, o, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = By.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (lt = hn(l.nextSibling)),
		  (it = t),
		  (me = !0),
		  (_t = null),
		  e !== null &&
				((pt[ht++] = Ut),
				(pt[ht++] = Vt),
				(pt[ht++] = Un),
				(Ut = e.id),
				(Vt = e.overflow),
				(Un = t)),
		  (t = cu(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Bc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), is(e.return, t, n);
}
function ya(e, t, n, r, l) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = l));
}
function Pp(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if ((Qe(e, t, r.children, n), (r = ye.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Bc(e, n, t);
				else if (e.tag === 19) Bc(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((de(ye, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case 'forwards':
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && zi(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					ya(t, !1, l, n, i);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && zi(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				ya(t, !0, n, null, i);
				break;
			case 'together':
				ya(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function vi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Bn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(L(153));
	if (t.child !== null) {
		for (
			e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Ty(e, t, n) {
	switch (t.tag) {
		case 3:
			Rp(t), Sr();
			break;
		case 5:
			tp(t);
			break;
		case 1:
			qe(t.type) && Li(t);
			break;
		case 4:
			nu(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			de(Oi, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (de(ye, ye.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? kp(e, t, n)
					: (de(ye, ye.current & 1),
					  (e = Gt(e, t, n)),
					  e !== null ? e.sibling : null);
			de(ye, ye.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Pp(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				de(ye, ye.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Cp(e, t, n);
	}
	return Gt(e, t, n);
}
var Np, ps, Tp, Lp;
Np = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
ps = function () {};
Tp = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), On(Ot.current);
		var i = null;
		switch (n) {
			case 'input':
				(l = Ia(e, l)), (r = Ia(e, r)), (i = []);
				break;
			case 'select':
				(l = we({}, l, { value: void 0 })),
					(r = we({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(l = Aa(e, l)), (r = Aa(e, r)), (i = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Ni);
		}
		Ua(n, r);
		var o;
		n = null;
		for (c in l)
			if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
				if (c === 'style') {
					var a = l[c];
					for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
				} else
					c !== 'dangerouslySetInnerHTML' &&
						c !== 'children' &&
						c !== 'suppressContentEditableWarning' &&
						c !== 'suppressHydrationWarning' &&
						c !== 'autoFocus' &&
						(ul.hasOwnProperty(c)
							? i || (i = [])
							: (i = i || []).push(c, null));
		for (c in r) {
			var s = r[c];
			if (
				((a = l != null ? l[c] : void 0),
				r.hasOwnProperty(c) && s !== a && (s != null || a != null))
			)
				if (c === 'style')
					if (a) {
						for (o in a)
							!a.hasOwnProperty(o) ||
								(s && s.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''));
						for (o in s)
							s.hasOwnProperty(o) &&
								a[o] !== s[o] &&
								(n || (n = {}), (n[o] = s[o]));
					} else n || (i || (i = []), i.push(c, n)), (n = s);
				else
					c === 'dangerouslySetInnerHTML'
						? ((s = s ? s.__html : void 0),
						  (a = a ? a.__html : void 0),
						  s != null && a !== s && (i = i || []).push(c, s))
						: c === 'children'
						? (typeof s != 'string' && typeof s != 'number') ||
						  (i = i || []).push(c, '' + s)
						: c !== 'suppressContentEditableWarning' &&
						  c !== 'suppressHydrationWarning' &&
						  (ul.hasOwnProperty(c)
								? (s != null && c === 'onScroll' && fe('scroll', e),
								  i || a === s || (i = []))
								: (i = i || []).push(c, s));
		}
		n && (i = i || []).push('style', n);
		var c = i;
		(t.updateQueue = c) && (t.flags |= 4);
	}
};
Lp = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Wr(e, t) {
	if (!me)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function $e(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling);
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags),
				(r |= l.flags),
				(l.return = e),
				(l = l.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ly(e, t, n) {
	var r = t.pendingProps;
	switch ((Ys(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return $e(t), null;
		case 1:
			return qe(t.type) && Ti(), $e(t), null;
		case 3:
			return (
				(r = t.stateNode),
				jr(),
				pe(Ze),
				pe(Be),
				lu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(ni(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), _t !== null && (Ss(_t), (_t = null)))),
				ps(e, t),
				$e(t),
				null
			);
		case 5:
			ru(t);
			var l = On(Sl.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Tp(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(L(166));
					return $e(t), null;
				}
				if (((e = On(Ot.current)), ni(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[Mt] = t), (r[wl] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							fe('cancel', r), fe('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							fe('load', r);
							break;
						case 'video':
						case 'audio':
							for (l = 0; l < Zr.length; l++) fe(Zr[l], r);
							break;
						case 'source':
							fe('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							fe('error', r), fe('load', r);
							break;
						case 'details':
							fe('toggle', r);
							break;
						case 'input':
							Ju(r, i), fe('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								fe('invalid', r);
							break;
						case 'textarea':
							qu(r, i), fe('invalid', r);
					}
					Ua(n, i), (l = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var a = i[o];
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (i.suppressHydrationWarning !== !0 &&
											ti(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (i.suppressHydrationWarning !== !0 &&
											ti(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: ul.hasOwnProperty(o) &&
								  a != null &&
								  o === 'onScroll' &&
								  fe('scroll', r);
						}
					switch (n) {
						case 'input':
							Kl(r), Zu(r, i, !0);
							break;
						case 'textarea':
							Kl(r), ec(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = Ni);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = rf(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = o.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === 'select' &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[Mt] = t),
						(e[wl] = r),
						Np(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Va(n, r)), n)) {
							case 'dialog':
								fe('cancel', e), fe('close', e), (l = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								fe('load', e), (l = r);
								break;
							case 'video':
							case 'audio':
								for (l = 0; l < Zr.length; l++) fe(Zr[l], e);
								l = r;
								break;
							case 'source':
								fe('error', e), (l = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								fe('error', e), fe('load', e), (l = r);
								break;
							case 'details':
								fe('toggle', e), (l = r);
								break;
							case 'input':
								Ju(e, r), (l = Ia(e, r)), fe('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = we({}, r, { value: void 0 })),
									fe('invalid', e);
								break;
							case 'textarea':
								qu(e, r), (l = Aa(e, r)), fe('invalid', e);
								break;
							default:
								l = r;
						}
						Ua(n, l), (a = l);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var s = a[i];
								i === 'style'
									? af(e, s)
									: i === 'dangerouslySetInnerHTML'
									? ((s = s ? s.__html : void 0), s != null && lf(e, s))
									: i === 'children'
									? typeof s == 'string'
										? (n !== 'textarea' || s !== '') && cl(e, s)
										: typeof s == 'number' && cl(e, '' + s)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (ul.hasOwnProperty(i)
											? s != null && i === 'onScroll' && fe('scroll', e)
											: s != null && Os(e, i, s, o));
							}
						switch (n) {
							case 'input':
								Kl(e), Zu(e, r, !1);
								break;
							case 'textarea':
								Kl(e), ec(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + wn(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? pr(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  pr(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = Ni);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return $e(t), null;
		case 6:
			if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(L(166));
				if (((n = On(Sl.current)), On(Ot.current), ni(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Mt] = t),
						(i = r.nodeValue !== n) && ((e = it), e !== null))
					)
						switch (e.tag) {
							case 3:
								ti(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									ti(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Mt] = t),
						(t.stateNode = r);
			}
			return $e(t), null;
		case 13:
			if (
				(pe(ye),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (me && lt !== null && t.mode & 1 && !(t.flags & 128))
					Gf(), Sr(), (t.flags |= 98560), (i = !1);
				else if (((i = ni(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(L(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(L(317));
						i[Mt] = t;
					} else
						Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					$e(t), (i = !1);
				} else _t !== null && (Ss(_t), (_t = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ye.current & 1 ? Pe === 0 && (Pe = 3) : vu())),
				  t.updateQueue !== null && (t.flags |= 4),
				  $e(t),
				  null);
		case 4:
			return (
				jr(), ps(e, t), e === null && yl(t.stateNode.containerInfo), $e(t), null
			);
		case 10:
			return qs(t.type._context), $e(t), null;
		case 17:
			return qe(t.type) && Ti(), $e(t), null;
		case 19:
			if ((pe(ye), (i = t.memoizedState), i === null)) return $e(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) Wr(i, !1);
				else {
					if (Pe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = zi(e)), o !== null)) {
								for (
									t.flags |= 128,
										Wr(i, !1),
										r = o.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(o = i.alternate),
										o === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = o.childLanes),
											  (i.lanes = o.lanes),
											  (i.child = o.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps = o.memoizedProps),
											  (i.memoizedState = o.memoizedState),
											  (i.updateQueue = o.updateQueue),
											  (i.type = o.type),
											  (e = o.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return de(ye, (ye.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						Ce() > _r &&
						((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = zi(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Wr(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !o.alternate && !me)
						)
							return $e(t), null;
					} else
						2 * Ce() - i.renderingStartTime > _r &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Wr(i, !1), (t.lanes = 4194304));
				i.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = i.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (i.last = o));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = Ce()),
				  (t.sibling = null),
				  (n = ye.current),
				  de(ye, r ? (n & 1) | 2 : n & 1),
				  t)
				: ($e(t), null);
		case 22:
		case 23:
			return (
				mu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? nt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: $e(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(L(156, t.tag));
}
function My(e, t) {
	switch ((Ys(t), t.tag)) {
		case 1:
			return (
				qe(t.type) && Ti(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				jr(),
				pe(Ze),
				pe(Be),
				lu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return ru(t), null;
		case 13:
			if (
				(pe(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(L(340));
				Sr();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return pe(ye), null;
		case 4:
			return jr(), null;
		case 10:
			return qs(t.type._context), null;
		case 22:
		case 23:
			return mu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var ii = !1,
	Ve = !1,
	Dy = typeof WeakSet == 'function' ? WeakSet : Set,
	A = null;
function cr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				Se(e, t, r);
			}
		else n.current = null;
}
function hs(e, t, n) {
	try {
		n();
	} catch (r) {
		Se(e, t, r);
	}
}
var Hc = !1;
function Oy(e, t) {
	if (((Ja = Ri), (e = If()), Ks(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var o = 0,
						a = -1,
						s = -1,
						c = 0,
						f = 0,
						d = e,
						h = null;
					t: for (;;) {
						for (
							var C;
							d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
								d !== i || (r !== 0 && d.nodeType !== 3) || (s = o + r),
								d.nodeType === 3 && (o += d.nodeValue.length),
								(C = d.firstChild) !== null;

						)
							(h = d), (d = C);
						for (;;) {
							if (d === e) break t;
							if (
								(h === n && ++c === l && (a = o),
								h === i && ++f === r && (s = o),
								(C = d.nextSibling) !== null)
							)
								break;
							(d = h), (h = d.parentNode);
						}
						d = C;
					}
					n = a === -1 || s === -1 ? null : { start: a, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Za = { focusedElem: e, selectionRange: n }, Ri = !1, A = t; A !== null; )
		if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (A = e);
		else
			for (; A !== null; ) {
				t = A;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var E = w.memoizedProps,
										R = w.memoizedState,
										m = t.stateNode,
										p = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? E : Et(t.type, E),
											R
										);
									m.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = '')
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(L(163));
						}
				} catch (j) {
					Se(t, t.return, j);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (A = e);
					break;
				}
				A = t.return;
			}
	return (w = Hc), (Hc = !1), w;
}
function ol(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				(l.destroy = void 0), i !== void 0 && hs(t, n, i);
			}
			l = l.next;
		} while (l !== r);
	}
}
function oo(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function ms(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Mp(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Mp(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Mt], delete t[wl], delete t[ts], delete t[vy], delete t[yy])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Dp(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Dp(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function vs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Ni));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), (e = e.sibling);
}
function ys(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ys(e, t, n), e = e.sibling; e !== null; ) ys(e, t, n), (e = e.sibling);
}
var Ie = null,
	jt = !1;
function nn(e, t, n) {
	for (n = n.child; n !== null; ) Op(e, t, n), (n = n.sibling);
}
function Op(e, t, n) {
	if (Dt && typeof Dt.onCommitFiberUnmount == 'function')
		try {
			Dt.onCommitFiberUnmount(Zi, n);
		} catch {}
	switch (n.tag) {
		case 5:
			Ve || cr(n, t);
		case 6:
			var r = Ie,
				l = jt;
			(Ie = null),
				nn(e, t, n),
				(Ie = r),
				(jt = l),
				Ie !== null &&
					(jt
						? ((e = Ie),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ie.removeChild(n.stateNode));
			break;
		case 18:
			Ie !== null &&
				(jt
					? ((e = Ie),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ca(e.parentNode, n)
							: e.nodeType === 1 && ca(e, n),
					  hl(e))
					: ca(Ie, n.stateNode));
			break;
		case 4:
			(r = Ie),
				(l = jt),
				(Ie = n.stateNode.containerInfo),
				(jt = !0),
				nn(e, t, n),
				(Ie = r),
				(jt = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!Ve &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var i = l,
						o = i.destroy;
					(i = i.tag),
						o !== void 0 && (i & 2 || i & 4) && hs(n, t, o),
						(l = l.next);
				} while (l !== r);
			}
			nn(e, t, n);
			break;
		case 1:
			if (
				!Ve &&
				(cr(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					Se(n, t, a);
				}
			nn(e, t, n);
			break;
		case 21:
			nn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((Ve = (r = Ve) || n.memoizedState !== null), nn(e, t, n), (Ve = r))
				: nn(e, t, n);
			break;
		default:
			nn(e, t, n);
	}
}
function bc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Dy()),
			t.forEach(function (r) {
				var l = Hy.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function St(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var i = e,
					o = t,
					a = o;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(Ie = a.stateNode), (jt = !1);
							break e;
						case 3:
							(Ie = a.stateNode.containerInfo), (jt = !0);
							break e;
						case 4:
							(Ie = a.stateNode.containerInfo), (jt = !0);
							break e;
					}
					a = a.return;
				}
				if (Ie === null) throw Error(L(160));
				Op(i, o, l), (Ie = null), (jt = !1);
				var s = l.alternate;
				s !== null && (s.return = null), (l.return = null);
			} catch (c) {
				Se(l, t, c);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Ip(t, e), (t = t.sibling);
}
function Ip(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((St(t, e), Tt(e), r & 4)) {
				try {
					ol(3, e, e.return), oo(3, e);
				} catch (E) {
					Se(e, e.return, E);
				}
				try {
					ol(5, e, e.return);
				} catch (E) {
					Se(e, e.return, E);
				}
			}
			break;
		case 1:
			St(t, e), Tt(e), r & 512 && n !== null && cr(n, n.return);
			break;
		case 5:
			if (
				(St(t, e),
				Tt(e),
				r & 512 && n !== null && cr(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					cl(l, '');
				} catch (E) {
					Se(e, e.return, E);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var i = e.memoizedProps,
					o = n !== null ? n.memoizedProps : i,
					a = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						a === 'input' && i.type === 'radio' && i.name != null && tf(l, i),
							Va(a, o);
						var c = Va(a, i);
						for (o = 0; o < s.length; o += 2) {
							var f = s[o],
								d = s[o + 1];
							f === 'style'
								? af(l, d)
								: f === 'dangerouslySetInnerHTML'
								? lf(l, d)
								: f === 'children'
								? cl(l, d)
								: Os(l, f, d, c);
						}
						switch (a) {
							case 'input':
								Fa(l, i);
								break;
							case 'textarea':
								nf(l, i);
								break;
							case 'select':
								var h = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!i.multiple;
								var C = i.value;
								C != null
									? pr(l, !!i.multiple, C, !1)
									: h !== !!i.multiple &&
									  (i.defaultValue != null
											? pr(l, !!i.multiple, i.defaultValue, !0)
											: pr(l, !!i.multiple, i.multiple ? [] : '', !1));
						}
						l[wl] = i;
					} catch (E) {
						Se(e, e.return, E);
					}
			}
			break;
		case 6:
			if ((St(t, e), Tt(e), r & 4)) {
				if (e.stateNode === null) throw Error(L(162));
				(l = e.stateNode), (i = e.memoizedProps);
				try {
					l.nodeValue = i;
				} catch (E) {
					Se(e, e.return, E);
				}
			}
			break;
		case 3:
			if (
				(St(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					hl(t.containerInfo);
				} catch (E) {
					Se(e, e.return, E);
				}
			break;
		case 4:
			St(t, e), Tt(e);
			break;
		case 13:
			St(t, e),
				Tt(e),
				(l = e.child),
				l.flags & 8192 &&
					((i = l.memoizedState !== null),
					(l.stateNode.isHidden = i),
					!i ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(pu = Ce())),
				r & 4 && bc(e);
			break;
		case 22:
			if (
				((f = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((Ve = (c = Ve) || f), St(t, e), (Ve = c)) : St(t, e),
				Tt(e),
				r & 8192)
			) {
				if (
					((c = e.memoizedState !== null),
					(e.stateNode.isHidden = c) && !f && e.mode & 1)
				)
					for (A = e, f = e.child; f !== null; ) {
						for (d = A = f; A !== null; ) {
							switch (((h = A), (C = h.child), h.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ol(4, h, h.return);
									break;
								case 1:
									cr(h, h.return);
									var w = h.stateNode;
									if (typeof w.componentWillUnmount == 'function') {
										(r = h), (n = h.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (E) {
											Se(r, n, E);
										}
									}
									break;
								case 5:
									cr(h, h.return);
									break;
								case 22:
									if (h.memoizedState !== null) {
										Kc(d);
										continue;
									}
							}
							C !== null ? ((C.return = h), (A = C)) : Kc(d);
						}
						f = f.sibling;
					}
				e: for (f = null, d = e; ; ) {
					if (d.tag === 5) {
						if (f === null) {
							f = d;
							try {
								(l = d.stateNode),
									c
										? ((i = l.style),
										  typeof i.setProperty == 'function'
												? i.setProperty('display', 'none', 'important')
												: (i.display = 'none'))
										: ((a = d.stateNode),
										  (s = d.memoizedProps.style),
										  (o =
												s != null && s.hasOwnProperty('display')
													? s.display
													: null),
										  (a.style.display = of('display', o)));
							} catch (E) {
								Se(e, e.return, E);
							}
						}
					} else if (d.tag === 6) {
						if (f === null)
							try {
								d.stateNode.nodeValue = c ? '' : d.memoizedProps;
							} catch (E) {
								Se(e, e.return, E);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						f === d && (f = null), (d = d.return);
					}
					f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			St(t, e), Tt(e), r & 4 && bc(e);
			break;
		case 21:
			break;
		default:
			St(t, e), Tt(e);
	}
}
function Tt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Dp(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(L(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (cl(l, ''), (r.flags &= -33));
					var i = Wc(e);
					ys(e, i, l);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = Wc(e);
					vs(e, a, o);
					break;
				default:
					throw Error(L(161));
			}
		} catch (s) {
			Se(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Iy(e, t, n) {
	(A = e), Fp(e);
}
function Fp(e, t, n) {
	for (var r = (e.mode & 1) !== 0; A !== null; ) {
		var l = A,
			i = l.child;
		if (l.tag === 22 && r) {
			var o = l.memoizedState !== null || ii;
			if (!o) {
				var a = l.alternate,
					s = (a !== null && a.memoizedState !== null) || Ve;
				a = ii;
				var c = Ve;
				if (((ii = o), (Ve = s) && !c))
					for (A = l; A !== null; )
						(o = A),
							(s = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Gc(l)
								: s !== null
								? ((s.return = o), (A = s))
								: Gc(l);
				for (; i !== null; ) (A = i), Fp(i), (i = i.sibling);
				(A = l), (ii = a), (Ve = c);
			}
			Qc(e);
		} else
			l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (A = i)) : Qc(e);
	}
}
function Qc(e) {
	for (; A !== null; ) {
		var t = A;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Ve || oo(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !Ve)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: Et(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var i = t.updateQueue;
							i !== null && Nc(t, i, r);
							break;
						case 3:
							var o = t.updateQueue;
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Nc(t, o, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var s = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										s.autoFocus && n.focus();
										break;
									case 'img':
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var c = t.alternate;
								if (c !== null) {
									var f = c.memoizedState;
									if (f !== null) {
										var d = f.dehydrated;
										d !== null && hl(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(L(163));
					}
				Ve || (t.flags & 512 && ms(t));
			} catch (h) {
				Se(t, t.return, h);
			}
		}
		if (t === e) {
			A = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (A = n);
			break;
		}
		A = t.return;
	}
}
function Kc(e) {
	for (; A !== null; ) {
		var t = A;
		if (t === e) {
			A = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (A = n);
			break;
		}
		A = t.return;
	}
}
function Gc(e) {
	for (; A !== null; ) {
		var t = A;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						oo(4, t);
					} catch (s) {
						Se(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							Se(t, l, s);
						}
					}
					var i = t.return;
					try {
						ms(t);
					} catch (s) {
						Se(t, i, s);
					}
					break;
				case 5:
					var o = t.return;
					try {
						ms(t);
					} catch (s) {
						Se(t, o, s);
					}
			}
		} catch (s) {
			Se(t, t.return, s);
		}
		if (t === e) {
			A = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (A = a);
			break;
		}
		A = t.return;
	}
}
var Fy = Math.ceil,
	Ui = Xt.ReactCurrentDispatcher,
	du = Xt.ReactCurrentOwner,
	vt = Xt.ReactCurrentBatchConfig,
	J = 0,
	Te = null,
	Re = null,
	Fe = 0,
	nt = 0,
	dr = jn(0),
	Pe = 0,
	_l = null,
	Bn = 0,
	ao = 0,
	fu = 0,
	al = null,
	Xe = null,
	pu = 0,
	_r = 1 / 0,
	At = null,
	Vi = !1,
	gs = null,
	vn = null,
	oi = !1,
	cn = null,
	Bi = 0,
	sl = 0,
	ws = null,
	yi = -1,
	gi = 0;
function Ke() {
	return J & 6 ? Ce() : yi !== -1 ? yi : (yi = Ce());
}
function yn(e) {
	return e.mode & 1
		? J & 2 && Fe !== 0
			? Fe & -Fe
			: wy.transition !== null
			? (gi === 0 && (gi = wf()), gi)
			: ((e = le),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rf(e.type))),
			  e)
		: 1;
}
function kt(e, t, n, r) {
	if (50 < sl) throw ((sl = 0), (ws = null), Error(L(185)));
	Ll(e, n, r),
		(!(J & 2) || e !== Te) &&
			(e === Te && (!(J & 2) && (ao |= n), Pe === 4 && sn(e, Fe)),
			et(e, r),
			n === 1 && J === 0 && !(t.mode & 1) && ((_r = Ce() + 500), ro && Cn()));
}
function et(e, t) {
	var n = e.callbackNode;
	wv(e, t);
	var r = _i(e, e === Te ? Fe : 0);
	if (r === 0)
		n !== null && rc(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && rc(n), t === 1))
			e.tag === 0 ? gy(Yc.bind(null, e)) : bf(Yc.bind(null, e)),
				hy(function () {
					!(J & 6) && Cn();
				}),
				(n = null);
		else {
			switch (xf(r)) {
				case 1:
					n = $s;
					break;
				case 4:
					n = yf;
					break;
				case 16:
					n = Ci;
					break;
				case 536870912:
					n = gf;
					break;
				default:
					n = Ci;
			}
			n = Wp(n, zp.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function zp(e, t) {
	if (((yi = -1), (gi = 0), J & 6)) throw Error(L(327));
	var n = e.callbackNode;
	if (gr() && e.callbackNode !== n) return null;
	var r = _i(e, e === Te ? Fe : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Hi(e, r);
	else {
		t = r;
		var l = J;
		J |= 2;
		var i = $p();
		(Te !== e || Fe !== t) && ((At = null), (_r = Ce() + 500), zn(e, t));
		do
			try {
				$y();
				break;
			} catch (a) {
				Ap(e, a);
			}
		while (1);
		Zs(),
			(Ui.current = i),
			(J = l),
			Re !== null ? (t = 0) : ((Te = null), (Fe = 0), (t = Pe));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = Qa(e)), l !== 0 && ((r = l), (t = xs(e, l)))), t === 1)
		)
			throw ((n = _l), zn(e, 0), sn(e, r), et(e, Ce()), n);
		if (t === 6) sn(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!zy(l) &&
					((t = Hi(e, r)),
					t === 2 && ((i = Qa(e)), i !== 0 && ((r = i), (t = xs(e, i)))),
					t === 1))
			)
				throw ((n = _l), zn(e, 0), sn(e, r), et(e, Ce()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(L(345));
				case 2:
					Tn(e, Xe, At);
					break;
				case 3:
					if (
						(sn(e, r), (r & 130023424) === r && ((t = pu + 500 - Ce()), 10 < t))
					) {
						if (_i(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Ke(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = es(Tn.bind(null, e, Xe, At), t);
						break;
					}
					Tn(e, Xe, At);
					break;
				case 4:
					if ((sn(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var o = 31 - Rt(r);
						(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
					}
					if (
						((r = l),
						(r = Ce() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Fy(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = es(Tn.bind(null, e, Xe, At), r);
						break;
					}
					Tn(e, Xe, At);
					break;
				case 5:
					Tn(e, Xe, At);
					break;
				default:
					throw Error(L(329));
			}
		}
	}
	return et(e, Ce()), e.callbackNode === n ? zp.bind(null, e) : null;
}
function xs(e, t) {
	var n = al;
	return (
		e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
		(e = Hi(e, t)),
		e !== 2 && ((t = Xe), (Xe = n), t !== null && Ss(t)),
		e
	);
}
function Ss(e) {
	Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function zy(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						i = l.getSnapshot;
					l = l.value;
					try {
						if (!Pt(i(), l)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function sn(e, t) {
	for (
		t &= ~fu,
			t &= ~ao,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Rt(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Yc(e) {
	if (J & 6) throw Error(L(327));
	gr();
	var t = _i(e, 0);
	if (!(t & 1)) return et(e, Ce()), null;
	var n = Hi(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Qa(e);
		r !== 0 && ((t = r), (n = xs(e, r)));
	}
	if (n === 1) throw ((n = _l), zn(e, 0), sn(e, t), et(e, Ce()), n);
	if (n === 6) throw Error(L(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Tn(e, Xe, At),
		et(e, Ce()),
		null
	);
}
function hu(e, t) {
	var n = J;
	J |= 1;
	try {
		return e(t);
	} finally {
		(J = n), J === 0 && ((_r = Ce() + 500), ro && Cn());
	}
}
function Hn(e) {
	cn !== null && cn.tag === 0 && !(J & 6) && gr();
	var t = J;
	J |= 1;
	var n = vt.transition,
		r = le;
	try {
		if (((vt.transition = null), (le = 1), e)) return e();
	} finally {
		(le = r), (vt.transition = n), (J = t), !(J & 6) && Cn();
	}
}
function mu() {
	(nt = dr.current), pe(dr);
}
function zn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), py(n)), Re !== null))
		for (n = Re.return; n !== null; ) {
			var r = n;
			switch ((Ys(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Ti();
					break;
				case 3:
					jr(), pe(Ze), pe(Be), lu();
					break;
				case 5:
					ru(r);
					break;
				case 4:
					jr();
					break;
				case 13:
					pe(ye);
					break;
				case 19:
					pe(ye);
					break;
				case 10:
					qs(r.type._context);
					break;
				case 22:
				case 23:
					mu();
			}
			n = n.return;
		}
	if (
		((Te = e),
		(Re = e = gn(e.current, null)),
		(Fe = nt = t),
		(Pe = 0),
		(_l = null),
		(fu = ao = Bn = 0),
		(Xe = al = null),
		Dn !== null)
	) {
		for (t = 0; t < Dn.length; t++)
			if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					i = n.pending;
				if (i !== null) {
					var o = i.next;
					(i.next = l), (r.next = o);
				}
				n.pending = r;
			}
		Dn = null;
	}
	return e;
}
function Ap(e, t) {
	do {
		var n = Re;
		try {
			if ((Zs(), (hi.current = $i), Ai)) {
				for (var r = ge.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				Ai = !1;
			}
			if (
				((Vn = 0),
				(Ne = ke = ge = null),
				(il = !1),
				(El = 0),
				(du.current = null),
				n === null || n.return === null)
			) {
				(Pe = 1), (_l = t), (Re = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					a = n,
					s = t;
				if (
					((t = Fe),
					(a.flags |= 32768),
					s !== null && typeof s == 'object' && typeof s.then == 'function')
				) {
					var c = s,
						f = a,
						d = f.tag;
					if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var h = f.alternate;
						h
							? ((f.updateQueue = h.updateQueue),
							  (f.memoizedState = h.memoizedState),
							  (f.lanes = h.lanes))
							: ((f.updateQueue = null), (f.memoizedState = null));
					}
					var C = Fc(o);
					if (C !== null) {
						(C.flags &= -257),
							zc(C, o, a, i, t),
							C.mode & 1 && Ic(i, c, t),
							(t = C),
							(s = c);
						var w = t.updateQueue;
						if (w === null) {
							var E = new Set();
							E.add(s), (t.updateQueue = E);
						} else w.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Ic(i, c, t), vu();
							break e;
						}
						s = Error(L(426));
					}
				} else if (me && a.mode & 1) {
					var R = Fc(o);
					if (R !== null) {
						!(R.flags & 65536) && (R.flags |= 256),
							zc(R, o, a, i, t),
							Xs(Cr(s, a));
						break e;
					}
				}
				(i = s = Cr(s, a)),
					Pe !== 4 && (Pe = 2),
					al === null ? (al = [i]) : al.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var m = Sp(i, s, t);
							Pc(i, m);
							break e;
						case 1:
							a = s;
							var p = i.type,
								v = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof p.getDerivedStateFromError == 'function' ||
									(v !== null &&
										typeof v.componentDidCatch == 'function' &&
										(vn === null || !vn.has(v))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var j = Ep(i, a, t);
								Pc(i, j);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Vp(n);
		} catch (N) {
			(t = N), Re === n && n !== null && (Re = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function $p() {
	var e = Ui.current;
	return (Ui.current = $i), e === null ? $i : e;
}
function vu() {
	(Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
		Te === null || (!(Bn & 268435455) && !(ao & 268435455)) || sn(Te, Fe);
}
function Hi(e, t) {
	var n = J;
	J |= 2;
	var r = $p();
	(Te !== e || Fe !== t) && ((At = null), zn(e, t));
	do
		try {
			Ay();
			break;
		} catch (l) {
			Ap(e, l);
		}
	while (1);
	if ((Zs(), (J = n), (Ui.current = r), Re !== null)) throw Error(L(261));
	return (Te = null), (Fe = 0), Pe;
}
function Ay() {
	for (; Re !== null; ) Up(Re);
}
function $y() {
	for (; Re !== null && !cv(); ) Up(Re);
}
function Up(e) {
	var t = Hp(e.alternate, e, nt);
	(e.memoizedProps = e.pendingProps),
		t === null ? Vp(e) : (Re = t),
		(du.current = null);
}
function Vp(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = My(n, t)), n !== null)) {
				(n.flags &= 32767), (Re = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Pe = 6), (Re = null);
				return;
			}
		} else if (((n = Ly(n, t, nt)), n !== null)) {
			Re = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Re = t;
			return;
		}
		Re = t = e;
	} while (t !== null);
	Pe === 0 && (Pe = 5);
}
function Tn(e, t, n) {
	var r = le,
		l = vt.transition;
	try {
		(vt.transition = null), (le = 1), Uy(e, t, n, r);
	} finally {
		(vt.transition = l), (le = r);
	}
	return null;
}
function Uy(e, t, n, r) {
	do gr();
	while (cn !== null);
	if (J & 6) throw Error(L(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(L(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(xv(e, i),
		e === Te && ((Re = Te = null), (Fe = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			oi ||
			((oi = !0),
			Wp(Ci, function () {
				return gr(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = vt.transition), (vt.transition = null);
		var o = le;
		le = 1;
		var a = J;
		(J |= 4),
			(du.current = null),
			Oy(e, n),
			Ip(n, e),
			oy(Za),
			(Ri = !!Ja),
			(Za = Ja = null),
			(e.current = n),
			Iy(n),
			dv(),
			(J = a),
			(le = o),
			(vt.transition = i);
	} else e.current = n;
	if (
		(oi && ((oi = !1), (cn = e), (Bi = l)),
		(i = e.pendingLanes),
		i === 0 && (vn = null),
		hv(n.stateNode),
		et(e, Ce()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (Vi) throw ((Vi = !1), (e = gs), (gs = null), e);
	return (
		Bi & 1 && e.tag !== 0 && gr(),
		(i = e.pendingLanes),
		i & 1 ? (e === ws ? sl++ : ((sl = 0), (ws = e))) : (sl = 0),
		Cn(),
		null
	);
}
function gr() {
	if (cn !== null) {
		var e = xf(Bi),
			t = vt.transition,
			n = le;
		try {
			if (((vt.transition = null), (le = 16 > e ? 16 : e), cn === null))
				var r = !1;
			else {
				if (((e = cn), (cn = null), (Bi = 0), J & 6)) throw Error(L(331));
				var l = J;
				for (J |= 4, A = e.current; A !== null; ) {
					var i = A,
						o = i.child;
					if (A.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var s = 0; s < a.length; s++) {
								var c = a[s];
								for (A = c; A !== null; ) {
									var f = A;
									switch (f.tag) {
										case 0:
										case 11:
										case 15:
											ol(8, f, i);
									}
									var d = f.child;
									if (d !== null) (d.return = f), (A = d);
									else
										for (; A !== null; ) {
											f = A;
											var h = f.sibling,
												C = f.return;
											if ((Mp(f), f === c)) {
												A = null;
												break;
											}
											if (h !== null) {
												(h.return = C), (A = h);
												break;
											}
											A = C;
										}
								}
							}
							var w = i.alternate;
							if (w !== null) {
								var E = w.child;
								if (E !== null) {
									w.child = null;
									do {
										var R = E.sibling;
										(E.sibling = null), (E = R);
									} while (E !== null);
								}
							}
							A = i;
						}
					}
					if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (A = o);
					else
						e: for (; A !== null; ) {
							if (((i = A), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										ol(9, i, i.return);
								}
							var m = i.sibling;
							if (m !== null) {
								(m.return = i.return), (A = m);
								break e;
							}
							A = i.return;
						}
				}
				var p = e.current;
				for (A = p; A !== null; ) {
					o = A;
					var v = o.child;
					if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (A = v);
					else
						e: for (o = p; A !== null; ) {
							if (((a = A), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											oo(9, a);
									}
								} catch (N) {
									Se(a, a.return, N);
								}
							if (a === o) {
								A = null;
								break e;
							}
							var j = a.sibling;
							if (j !== null) {
								(j.return = a.return), (A = j);
								break e;
							}
							A = a.return;
						}
				}
				if (
					((J = l), Cn(), Dt && typeof Dt.onPostCommitFiberRoot == 'function')
				)
					try {
						Dt.onPostCommitFiberRoot(Zi, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(le = n), (vt.transition = t);
		}
	}
	return !1;
}
function Xc(e, t, n) {
	(t = Cr(n, t)),
		(t = Sp(e, t, 1)),
		(e = mn(e, t, 1)),
		(t = Ke()),
		e !== null && (Ll(e, 1, t), et(e, t));
}
function Se(e, t, n) {
	if (e.tag === 3) Xc(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Xc(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(vn === null || !vn.has(r)))
				) {
					(e = Cr(n, e)),
						(e = Ep(t, e, 1)),
						(t = mn(t, e, 1)),
						(e = Ke()),
						t !== null && (Ll(t, 1, e), et(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Vy(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Ke()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Te === e &&
			(Fe & n) === n &&
			(Pe === 4 || (Pe === 3 && (Fe & 130023424) === Fe && 500 > Ce() - pu)
				? zn(e, 0)
				: (fu |= n)),
		et(e, t);
}
function Bp(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Xl), (Xl <<= 1), !(Xl & 130023424) && (Xl = 4194304))
			: (t = 1));
	var n = Ke();
	(e = Kt(e, t)), e !== null && (Ll(e, t, n), et(e, n));
}
function By(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Bp(e, n);
}
function Hy(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(L(314));
	}
	r !== null && r.delete(t), Bp(e, n);
}
var Hp;
Hp = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ze.current) Je = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Je = !1), Ty(e, t, n);
			Je = !!(e.flags & 131072);
		}
	else (Je = !1), me && t.flags & 1048576 && Qf(t, Di, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			vi(e, t), (e = t.pendingProps);
			var l = xr(t, Be.current);
			yr(t, n), (l = ou(null, t, r, e, l, n));
			var i = au();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  qe(r) ? ((i = !0), Li(t)) : (i = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  tu(t),
					  (l.updater = lo),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  as(t, r, e, n),
					  (t = cs(null, t, r, !0, i, n)))
					: ((t.tag = 0), me && i && Gs(t), Qe(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(vi(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = by(r)),
					(e = Et(r, e)),
					l)
				) {
					case 0:
						t = us(null, t, r, e, n);
						break e;
					case 1:
						t = Uc(null, t, r, e, n);
						break e;
					case 11:
						t = Ac(null, t, r, e, n);
						break e;
					case 14:
						t = $c(null, t, r, Et(r.type, e), n);
						break e;
				}
				throw Error(L(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Et(r, l)),
				us(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Et(r, l)),
				Uc(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((Rp(t), e === null)) throw Error(L(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(l = i.element),
					Xf(e, t),
					Fi(t, r, null, n);
				var o = t.memoizedState;
				if (((r = o.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(l = Cr(Error(L(423)), t)), (t = Vc(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = Cr(Error(L(424)), t)), (t = Vc(e, t, r, n, l));
						break e;
					} else
						for (
							lt = hn(t.stateNode.containerInfo.firstChild),
								it = t,
								me = !0,
								_t = null,
								n = ep(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Sr(), r === l)) {
						t = Gt(e, t, n);
						break e;
					}
					Qe(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				tp(t),
				e === null && ls(t),
				(r = t.type),
				(l = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = l.children),
				qa(r, l) ? (o = null) : i !== null && qa(r, i) && (t.flags |= 32),
				_p(e, t),
				Qe(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && ls(t), null;
		case 13:
			return kp(e, t, n);
		case 4:
			return (
				nu(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Er(t, null, r, n)) : Qe(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Et(r, l)),
				Ac(e, t, r, l, n)
			);
		case 7:
			return Qe(e, t, t.pendingProps, n), t.child;
		case 8:
			return Qe(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Qe(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(i = t.memoizedProps),
					(o = l.value),
					de(Oi, r._currentValue),
					(r._currentValue = o),
					i !== null)
				)
					if (Pt(i.value, o)) {
						if (i.children === l.children && !Ze.current) {
							t = Gt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var a = i.dependencies;
							if (a !== null) {
								o = i.child;
								for (var s = a.firstContext; s !== null; ) {
									if (s.context === r) {
										if (i.tag === 1) {
											(s = Ht(-1, n & -n)), (s.tag = 2);
											var c = i.updateQueue;
											if (c !== null) {
												c = c.shared;
												var f = c.pending;
												f === null
													? (s.next = s)
													: ((s.next = f.next), (f.next = s)),
													(c.pending = s);
											}
										}
										(i.lanes |= n),
											(s = i.alternate),
											s !== null && (s.lanes |= n),
											is(i.return, n, t),
											(a.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(L(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									is(o, n, t),
									(o = i.sibling);
							} else o = i.child;
							if (o !== null) o.return = i;
							else
								for (o = i; o !== null; ) {
									if (o === t) {
										o = null;
										break;
									}
									if (((i = o.sibling), i !== null)) {
										(i.return = o.return), (o = i);
										break;
									}
									o = o.return;
								}
							i = o;
						}
				Qe(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				yr(t, n),
				(l = yt(l)),
				(r = r(l)),
				(t.flags |= 1),
				Qe(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = Et(r, t.pendingProps)),
				(l = Et(r.type, l)),
				$c(e, t, r, l, n)
			);
		case 15:
			return jp(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Et(r, l)),
				vi(e, t),
				(t.tag = 1),
				qe(r) ? ((e = !0), Li(t)) : (e = !1),
				yr(t, n),
				Zf(t, r, l),
				as(t, r, l, n),
				cs(null, t, r, !0, e, n)
			);
		case 19:
			return Pp(e, t, n);
		case 22:
			return Cp(e, t, n);
	}
	throw Error(L(156, t.tag));
};
function Wp(e, t) {
	return vf(e, t);
}
function Wy(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function mt(e, t, n, r) {
	return new Wy(e, t, n, r);
}
function yu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function by(e) {
	if (typeof e == 'function') return yu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Fs)) return 11;
		if (e === zs) return 14;
	}
	return 2;
}
function gn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = mt(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function wi(e, t, n, r, l, i) {
	var o = 2;
	if (((r = e), typeof e == 'function')) yu(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case tr:
				return An(n.children, l, i, t);
			case Is:
				(o = 8), (l |= 8);
				break;
			case La:
				return (
					(e = mt(12, n, t, l | 2)), (e.elementType = La), (e.lanes = i), e
				);
			case Ma:
				return (e = mt(13, n, t, l)), (e.elementType = Ma), (e.lanes = i), e;
			case Da:
				return (e = mt(19, n, t, l)), (e.elementType = Da), (e.lanes = i), e;
			case Zd:
				return so(n, l, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Xd:
							o = 10;
							break e;
						case Jd:
							o = 9;
							break e;
						case Fs:
							o = 11;
							break e;
						case zs:
							o = 14;
							break e;
						case ln:
							(o = 16), (r = null);
							break e;
					}
				throw Error(L(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = mt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function An(e, t, n, r) {
	return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function so(e, t, n, r) {
	return (
		(e = mt(22, e, r, t)),
		(e.elementType = Zd),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function ga(e, t, n) {
	return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function wa(e, t, n) {
	return (
		(t = mt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Qy(e, t, n, r, l) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = qo(0)),
		(this.expirationTimes = qo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = qo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function gu(e, t, n, r, l, i, o, a, s) {
	return (
		(e = new Qy(e, t, n, a, s)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = mt(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		tu(i),
		e
	);
}
function Ky(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: er,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function bp(e) {
	if (!e) return xn;
	e = e._reactInternals;
	e: {
		if (Qn(e) !== e || e.tag !== 1) throw Error(L(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (qe(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(L(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (qe(n)) return Wf(e, n, t);
	}
	return t;
}
function Qp(e, t, n, r, l, i, o, a, s) {
	return (
		(e = gu(n, r, !0, e, l, i, o, a, s)),
		(e.context = bp(null)),
		(n = e.current),
		(r = Ke()),
		(l = yn(n)),
		(i = Ht(r, l)),
		(i.callback = t ?? null),
		mn(n, i, l),
		(e.current.lanes = l),
		Ll(e, l, r),
		et(e, r),
		e
	);
}
function uo(e, t, n, r) {
	var l = t.current,
		i = Ke(),
		o = yn(l);
	return (
		(n = bp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ht(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = mn(l, t, o)),
		e !== null && (kt(e, l, o, i), pi(e, l, o)),
		o
	);
}
function Wi(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Jc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function wu(e, t) {
	Jc(e, t), (e = e.alternate) && Jc(e, t);
}
function Gy() {
	return null;
}
var Kp =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function xu(e) {
	this._internalRoot = e;
}
co.prototype.render = xu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(L(409));
	uo(e, t, null, null);
};
co.prototype.unmount = xu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Hn(function () {
			uo(null, e, null, null);
		}),
			(t[Qt] = null);
	}
};
function co(e) {
	this._internalRoot = e;
}
co.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = jf();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++);
		an.splice(n, 0, e), n === 0 && _f(e);
	}
};
function Su(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Zc() {}
function Yy(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var c = Wi(o);
				i.call(c);
			};
		}
		var o = Qp(t, r, e, 0, null, !1, !1, '', Zc);
		return (
			(e._reactRootContainer = o),
			(e[Qt] = o.current),
			yl(e.nodeType === 8 ? e.parentNode : e),
			Hn(),
			o
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var c = Wi(s);
			a.call(c);
		};
	}
	var s = gu(e, 0, !1, null, null, !1, !1, '', Zc);
	return (
		(e._reactRootContainer = s),
		(e[Qt] = s.current),
		yl(e.nodeType === 8 ? e.parentNode : e),
		Hn(function () {
			uo(t, s, n, r);
		}),
		s
	);
}
function po(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var s = Wi(o);
				a.call(s);
			};
		}
		uo(t, o, e, l);
	} else o = Yy(n, t, e, l, r);
	return Wi(o);
}
Sf = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Jr(t.pendingLanes);
				n !== 0 &&
					(Us(t, n | 1), et(t, Ce()), !(J & 6) && ((_r = Ce() + 500), Cn()));
			}
			break;
		case 13:
			Hn(function () {
				var r = Kt(e, 1);
				if (r !== null) {
					var l = Ke();
					kt(r, e, 1, l);
				}
			}),
				wu(e, 1);
	}
};
Vs = function (e) {
	if (e.tag === 13) {
		var t = Kt(e, 134217728);
		if (t !== null) {
			var n = Ke();
			kt(t, e, 134217728, n);
		}
		wu(e, 134217728);
	}
};
Ef = function (e) {
	if (e.tag === 13) {
		var t = yn(e),
			n = Kt(e, t);
		if (n !== null) {
			var r = Ke();
			kt(n, e, t, r);
		}
		wu(e, t);
	}
};
jf = function () {
	return le;
};
Cf = function (e, t) {
	var n = le;
	try {
		return (le = e), t();
	} finally {
		le = n;
	}
};
Ha = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Fa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = no(r);
						if (!l) throw Error(L(90));
						ef(r), Fa(r, l);
					}
				}
			}
			break;
		case 'textarea':
			nf(e, n);
			break;
		case 'select':
			(t = n.value), t != null && pr(e, !!n.multiple, t, !1);
	}
};
cf = hu;
df = Hn;
var Xy = { usingClientEntryPoint: !1, Events: [Dl, ir, no, sf, uf, hu] },
	br = {
		findFiberByHostInstance: Mn,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Jy = {
		bundleType: br.bundleType,
		version: br.version,
		rendererPackageName: br.rendererPackageName,
		rendererConfig: br.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Xt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = hf(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: br.findFiberByHostInstance || Gy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!ai.isDisabled && ai.supportsFiber)
		try {
			(Zi = ai.inject(Jy)), (Dt = ai);
		} catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy;
at.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Su(t)) throw Error(L(200));
	return Ky(e, t, null, n);
};
at.createRoot = function (e, t) {
	if (!Su(e)) throw Error(L(299));
	var n = !1,
		r = '',
		l = Kp;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = gu(e, 1, !1, null, null, n, !1, r, l)),
		(e[Qt] = t.current),
		yl(e.nodeType === 8 ? e.parentNode : e),
		new xu(t)
	);
};
at.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(L(188))
			: ((e = Object.keys(e).join(',')), Error(L(268, e)));
	return (e = hf(t)), (e = e === null ? null : e.stateNode), e;
};
at.flushSync = function (e) {
	return Hn(e);
};
at.hydrate = function (e, t, n) {
	if (!fo(t)) throw Error(L(200));
	return po(null, e, t, !0, n);
};
at.hydrateRoot = function (e, t, n) {
	if (!Su(e)) throw Error(L(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		i = '',
		o = Kp;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = Qp(t, null, e, 1, n ?? null, l, !1, i, o)),
		(e[Qt] = t.current),
		yl(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new co(t);
};
at.render = function (e, t, n) {
	if (!fo(t)) throw Error(L(200));
	return po(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
	if (!fo(e)) throw Error(L(40));
	return e._reactRootContainer
		? (Hn(function () {
				po(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Qt] = null);
				});
		  }),
		  !0)
		: !1;
};
at.unstable_batchedUpdates = hu;
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!fo(n)) throw Error(L(200));
	if (e == null || e._reactInternals === void 0) throw Error(L(38));
	return po(e, t, n, !1, r);
};
at.version = '18.2.0-next-9e3b772b8-20220608';
function Gp() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp);
		} catch (e) {
			console.error(e);
		}
}
Gp(), (bd.exports = at);
var ho = bd.exports;
const Yp = Od(ho),
	Zy = Dd({ __proto__: null, default: Yp }, [ho]);
var qc = ho;
(Na.createRoot = qc.createRoot), (Na.hydrateRoot = qc.hydrateRoot);
var Xp = { exports: {} },
	Jp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rr = g;
function qy(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var eg = typeof Object.is == 'function' ? Object.is : qy,
	tg = Rr.useState,
	ng = Rr.useEffect,
	rg = Rr.useLayoutEffect,
	lg = Rr.useDebugValue;
function ig(e, t) {
	var n = t(),
		r = tg({ inst: { value: n, getSnapshot: t } }),
		l = r[0].inst,
		i = r[1];
	return (
		rg(
			function () {
				(l.value = n), (l.getSnapshot = t), xa(l) && i({ inst: l });
			},
			[e, n, t]
		),
		ng(
			function () {
				return (
					xa(l) && i({ inst: l }),
					e(function () {
						xa(l) && i({ inst: l });
					})
				);
			},
			[e]
		),
		lg(n),
		n
	);
}
function xa(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !eg(e, n);
	} catch {
		return !0;
	}
}
function og(e, t) {
	return t();
}
var ag =
	typeof window > 'u' ||
	typeof window.document > 'u' ||
	typeof window.document.createElement > 'u'
		? og
		: ig;
Jp.useSyncExternalStore =
	Rr.useSyncExternalStore !== void 0 ? Rr.useSyncExternalStore : ag;
Xp.exports = Jp;
var sg = Xp.exports,
	Zp = { exports: {} },
	qp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mo = g,
	ug = sg;
function cg(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dg = typeof Object.is == 'function' ? Object.is : cg,
	fg = ug.useSyncExternalStore,
	pg = mo.useRef,
	hg = mo.useEffect,
	mg = mo.useMemo,
	vg = mo.useDebugValue;
qp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
	var i = pg(null);
	if (i.current === null) {
		var o = { hasValue: !1, value: null };
		i.current = o;
	} else o = i.current;
	i = mg(
		function () {
			function s(C) {
				if (!c) {
					if (((c = !0), (f = C), (C = r(C)), l !== void 0 && o.hasValue)) {
						var w = o.value;
						if (l(w, C)) return (d = w);
					}
					return (d = C);
				}
				if (((w = d), dg(f, C))) return w;
				var E = r(C);
				return l !== void 0 && l(w, E) ? w : ((f = C), (d = E));
			}
			var c = !1,
				f,
				d,
				h = n === void 0 ? null : n;
			return [
				function () {
					return s(t());
				},
				h === null
					? void 0
					: function () {
							return s(h());
					  },
			];
		},
		[t, n, r, l]
	);
	var a = fg(e, i[0], i[1]);
	return (
		hg(
			function () {
				(o.hasValue = !0), (o.value = a);
			},
			[a]
		),
		vg(a),
		a
	);
};
Zp.exports = qp;
var yg = Zp.exports;
function gg(e) {
	e();
}
let eh = gg;
const wg = (e) => (eh = e),
	xg = () => eh,
	ed = Symbol.for('react-redux-context'),
	td = typeof globalThis < 'u' ? globalThis : {};
function Sg() {
	var e;
	if (!g.createContext) return {};
	const t = (e = td[ed]) != null ? e : (td[ed] = new Map());
	let n = t.get(g.createContext);
	return n || ((n = g.createContext(null)), t.set(g.createContext, n)), n;
}
const Sn = Sg();
function Eu(e = Sn) {
	return function () {
		return g.useContext(e);
	};
}
const th = Eu(),
	Eg = () => {
		throw new Error('uSES not initialized!');
	};
let nh = Eg;
const jg = (e) => {
		nh = e;
	},
	Cg = (e, t) => e === t;
function _g(e = Sn) {
	const t = e === Sn ? th : Eu(e);
	return function (r, l = {}) {
		const {
				equalityFn: i = Cg,
				stabilityCheck: o = void 0,
				noopCheck: a = void 0,
			} = typeof l == 'function' ? { equalityFn: l } : l,
			{
				store: s,
				subscription: c,
				getServerState: f,
				stabilityCheck: d,
				noopCheck: h,
			} = t();
		g.useRef(!0);
		const C = g.useCallback(
				{
					[r.name](E) {
						return r(E);
					},
				}[r.name],
				[r, d, o]
			),
			w = nh(c.addNestedSub, s.getState, f || s.getState, C, i);
		return g.useDebugValue(w), w;
	};
}
const ee = _g();
var rh = { exports: {} },
	ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Le = typeof Symbol == 'function' && Symbol.for,
	ju = Le ? Symbol.for('react.element') : 60103,
	Cu = Le ? Symbol.for('react.portal') : 60106,
	vo = Le ? Symbol.for('react.fragment') : 60107,
	yo = Le ? Symbol.for('react.strict_mode') : 60108,
	go = Le ? Symbol.for('react.profiler') : 60114,
	wo = Le ? Symbol.for('react.provider') : 60109,
	xo = Le ? Symbol.for('react.context') : 60110,
	_u = Le ? Symbol.for('react.async_mode') : 60111,
	So = Le ? Symbol.for('react.concurrent_mode') : 60111,
	Eo = Le ? Symbol.for('react.forward_ref') : 60112,
	jo = Le ? Symbol.for('react.suspense') : 60113,
	Rg = Le ? Symbol.for('react.suspense_list') : 60120,
	Co = Le ? Symbol.for('react.memo') : 60115,
	_o = Le ? Symbol.for('react.lazy') : 60116,
	kg = Le ? Symbol.for('react.block') : 60121,
	Pg = Le ? Symbol.for('react.fundamental') : 60117,
	Ng = Le ? Symbol.for('react.responder') : 60118,
	Tg = Le ? Symbol.for('react.scope') : 60119;
function ut(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case ju:
				switch (((e = e.type), e)) {
					case _u:
					case So:
					case vo:
					case go:
					case yo:
					case jo:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case xo:
							case Eo:
							case _o:
							case Co:
							case wo:
								return e;
							default:
								return t;
						}
				}
			case Cu:
				return t;
		}
	}
}
function lh(e) {
	return ut(e) === So;
}
ie.AsyncMode = _u;
ie.ConcurrentMode = So;
ie.ContextConsumer = xo;
ie.ContextProvider = wo;
ie.Element = ju;
ie.ForwardRef = Eo;
ie.Fragment = vo;
ie.Lazy = _o;
ie.Memo = Co;
ie.Portal = Cu;
ie.Profiler = go;
ie.StrictMode = yo;
ie.Suspense = jo;
ie.isAsyncMode = function (e) {
	return lh(e) || ut(e) === _u;
};
ie.isConcurrentMode = lh;
ie.isContextConsumer = function (e) {
	return ut(e) === xo;
};
ie.isContextProvider = function (e) {
	return ut(e) === wo;
};
ie.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === ju;
};
ie.isForwardRef = function (e) {
	return ut(e) === Eo;
};
ie.isFragment = function (e) {
	return ut(e) === vo;
};
ie.isLazy = function (e) {
	return ut(e) === _o;
};
ie.isMemo = function (e) {
	return ut(e) === Co;
};
ie.isPortal = function (e) {
	return ut(e) === Cu;
};
ie.isProfiler = function (e) {
	return ut(e) === go;
};
ie.isStrictMode = function (e) {
	return ut(e) === yo;
};
ie.isSuspense = function (e) {
	return ut(e) === jo;
};
ie.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === vo ||
		e === So ||
		e === go ||
		e === yo ||
		e === jo ||
		e === Rg ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === _o ||
				e.$$typeof === Co ||
				e.$$typeof === wo ||
				e.$$typeof === xo ||
				e.$$typeof === Eo ||
				e.$$typeof === Pg ||
				e.$$typeof === Ng ||
				e.$$typeof === Tg ||
				e.$$typeof === kg))
	);
};
ie.typeOf = ut;
rh.exports = ie;
var Lg = rh.exports,
	ih = Lg,
	Mg = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
	},
	Dg = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0,
	},
	oh = {};
oh[ih.ForwardRef] = Mg;
oh[ih.Memo] = Dg;
var se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ru = Symbol.for('react.element'),
	ku = Symbol.for('react.portal'),
	Ro = Symbol.for('react.fragment'),
	ko = Symbol.for('react.strict_mode'),
	Po = Symbol.for('react.profiler'),
	No = Symbol.for('react.provider'),
	To = Symbol.for('react.context'),
	Og = Symbol.for('react.server_context'),
	Lo = Symbol.for('react.forward_ref'),
	Mo = Symbol.for('react.suspense'),
	Do = Symbol.for('react.suspense_list'),
	Oo = Symbol.for('react.memo'),
	Io = Symbol.for('react.lazy'),
	Ig = Symbol.for('react.offscreen'),
	ah;
ah = Symbol.for('react.module.reference');
function wt(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case Ru:
				switch (((e = e.type), e)) {
					case Ro:
					case Po:
					case ko:
					case Mo:
					case Do:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Og:
							case To:
							case Lo:
							case Io:
							case Oo:
							case No:
								return e;
							default:
								return t;
						}
				}
			case ku:
				return t;
		}
	}
}
se.ContextConsumer = To;
se.ContextProvider = No;
se.Element = Ru;
se.ForwardRef = Lo;
se.Fragment = Ro;
se.Lazy = Io;
se.Memo = Oo;
se.Portal = ku;
se.Profiler = Po;
se.StrictMode = ko;
se.Suspense = Mo;
se.SuspenseList = Do;
se.isAsyncMode = function () {
	return !1;
};
se.isConcurrentMode = function () {
	return !1;
};
se.isContextConsumer = function (e) {
	return wt(e) === To;
};
se.isContextProvider = function (e) {
	return wt(e) === No;
};
se.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Ru;
};
se.isForwardRef = function (e) {
	return wt(e) === Lo;
};
se.isFragment = function (e) {
	return wt(e) === Ro;
};
se.isLazy = function (e) {
	return wt(e) === Io;
};
se.isMemo = function (e) {
	return wt(e) === Oo;
};
se.isPortal = function (e) {
	return wt(e) === ku;
};
se.isProfiler = function (e) {
	return wt(e) === Po;
};
se.isStrictMode = function (e) {
	return wt(e) === ko;
};
se.isSuspense = function (e) {
	return wt(e) === Mo;
};
se.isSuspenseList = function (e) {
	return wt(e) === Do;
};
se.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === Ro ||
		e === Po ||
		e === ko ||
		e === Mo ||
		e === Do ||
		e === Ig ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === Io ||
				e.$$typeof === Oo ||
				e.$$typeof === No ||
				e.$$typeof === To ||
				e.$$typeof === Lo ||
				e.$$typeof === ah ||
				e.getModuleId !== void 0))
	);
};
se.typeOf = wt;
function Fg() {
	const e = xg();
	let t = null,
		n = null;
	return {
		clear() {
			(t = null), (n = null);
		},
		notify() {
			e(() => {
				let r = t;
				for (; r; ) r.callback(), (r = r.next);
			});
		},
		get() {
			let r = [],
				l = t;
			for (; l; ) r.push(l), (l = l.next);
			return r;
		},
		subscribe(r) {
			let l = !0,
				i = (n = { callback: r, next: null, prev: n });
			return (
				i.prev ? (i.prev.next = i) : (t = i),
				function () {
					!l ||
						t === null ||
						((l = !1),
						i.next ? (i.next.prev = i.prev) : (n = i.prev),
						i.prev ? (i.prev.next = i.next) : (t = i.next));
				}
			);
		},
	};
}
const nd = { notify() {}, get: () => [] };
function zg(e, t) {
	let n,
		r = nd,
		l = 0,
		i = !1;
	function o(E) {
		f();
		const R = r.subscribe(E);
		let m = !1;
		return () => {
			m || ((m = !0), R(), d());
		};
	}
	function a() {
		r.notify();
	}
	function s() {
		w.onStateChange && w.onStateChange();
	}
	function c() {
		return i;
	}
	function f() {
		l++, n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Fg()));
	}
	function d() {
		l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = nd));
	}
	function h() {
		i || ((i = !0), f());
	}
	function C() {
		i && ((i = !1), d());
	}
	const w = {
		addNestedSub: o,
		notifyNestedSubs: a,
		handleChangeWrapper: s,
		isSubscribed: c,
		trySubscribe: h,
		tryUnsubscribe: C,
		getListeners: () => r,
	};
	return w;
}
const Ag =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	$g = Ag ? g.useLayoutEffect : g.useEffect;
function Ug({
	store: e,
	context: t,
	children: n,
	serverState: r,
	stabilityCheck: l = 'once',
	noopCheck: i = 'once',
}) {
	const o = g.useMemo(() => {
			const c = zg(e);
			return {
				store: e,
				subscription: c,
				getServerState: r ? () => r : void 0,
				stabilityCheck: l,
				noopCheck: i,
			};
		}, [e, r, l, i]),
		a = g.useMemo(() => e.getState(), [e]);
	$g(() => {
		const { subscription: c } = o;
		return (
			(c.onStateChange = c.notifyNestedSubs),
			c.trySubscribe(),
			a !== e.getState() && c.notifyNestedSubs(),
			() => {
				c.tryUnsubscribe(), (c.onStateChange = void 0);
			}
		);
	}, [o, a]);
	const s = t || Sn;
	return g.createElement(s.Provider, { value: o }, n);
}
function sh(e = Sn) {
	const t = e === Sn ? th : Eu(e);
	return function () {
		const { store: r } = t();
		return r;
	};
}
const Vg = sh();
function Bg(e = Sn) {
	const t = e === Sn ? Vg : sh(e);
	return function () {
		return t().dispatch;
	};
}
const Ee = Bg();
jg(yg.useSyncExternalStoreWithSelector);
wg(ho.unstable_batchedUpdates);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ve() {
	return (
		(ve = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		ve.apply(this, arguments)
	);
}
var je;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(je || (je = {}));
const rd = 'popstate';
function Hg(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: i, search: o, hash: a } = r.location;
		return Rl(
			'',
			{ pathname: i, search: o, hash: a },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		);
	}
	function n(r, l) {
		return typeof l == 'string' ? l : Wn(l);
	}
	return bg(t, n, null, e);
}
function b(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function kr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Wg() {
	return Math.random().toString(36).substr(2, 8);
}
function ld(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Rl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		ve(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Jt(t) : t,
			{ state: n, key: (t && t.key) || r || Wg() }
		)
	);
}
function Wn(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function Jt(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function bg(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: i = !1 } = r,
		o = l.history,
		a = je.Pop,
		s = null,
		c = f();
	c == null && ((c = 0), o.replaceState(ve({}, o.state, { idx: c }), ''));
	function f() {
		return (o.state || { idx: null }).idx;
	}
	function d() {
		a = je.Pop;
		let R = f(),
			m = R == null ? null : R - c;
		(c = R), s && s({ action: a, location: E.location, delta: m });
	}
	function h(R, m) {
		a = je.Push;
		let p = Rl(E.location, R, m);
		n && n(p, R), (c = f() + 1);
		let v = ld(p, c),
			j = E.createHref(p);
		try {
			o.pushState(v, '', j);
		} catch (N) {
			if (N instanceof DOMException && N.name === 'DataCloneError') throw N;
			l.location.assign(j);
		}
		i && s && s({ action: a, location: E.location, delta: 1 });
	}
	function C(R, m) {
		a = je.Replace;
		let p = Rl(E.location, R, m);
		n && n(p, R), (c = f());
		let v = ld(p, c),
			j = E.createHref(p);
		o.replaceState(v, '', j),
			i && s && s({ action: a, location: E.location, delta: 0 });
	}
	function w(R) {
		let m = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			p = typeof R == 'string' ? R : Wn(R);
		return (
			(p = p.replace(/ $/, '%20')),
			b(
				m,
				'No window.location.(origin|href) available to create URL for href: ' +
					p
			),
			new URL(p, m)
		);
	}
	let E = {
		get action() {
			return a;
		},
		get location() {
			return e(l, o);
		},
		listen(R) {
			if (s) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(rd, d),
				(s = R),
				() => {
					l.removeEventListener(rd, d), (s = null);
				}
			);
		},
		createHref(R) {
			return t(l, R);
		},
		createURL: w,
		encodeLocation(R) {
			let m = w(R);
			return { pathname: m.pathname, search: m.search, hash: m.hash };
		},
		push: h,
		replace: C,
		go(R) {
			return o.go(R);
		},
	};
	return E;
}
var ae;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(ae || (ae = {}));
const Qg = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'children',
]);
function Kg(e) {
	return e.index === !0;
}
function kl(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((l, i) => {
			let o = [...n, String(i)],
				a = typeof l.id == 'string' ? l.id : o.join('-');
			if (
				(b(
					l.index !== !0 || !l.children,
					'Cannot specify children on an index route'
				),
				b(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				Kg(l))
			) {
				let s = ve({}, l, t(l), { id: a });
				return (r[a] = s), s;
			} else {
				let s = ve({}, l, t(l), { id: a, children: void 0 });
				return (
					(r[a] = s), l.children && (s.children = kl(l.children, t, o, r)), s
				);
			}
		})
	);
}
function Ln(e, t, n) {
	return n === void 0 && (n = '/'), xi(e, t, n, !1);
}
function xi(e, t, n, r) {
	let l = typeof t == 'string' ? Jt(t) : t,
		i = Yt(l.pathname || '/', n);
	if (i == null) return null;
	let o = uh(e);
	Yg(o);
	let a = null;
	for (let s = 0; a == null && s < o.length; ++s) {
		let c = o0(i);
		a = l0(o[s], c, r);
	}
	return a;
}
function Gg(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function uh(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let l = (i, o, a) => {
		let s = {
			relativePath: a === void 0 ? i.path || '' : a,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: o,
			route: i,
		};
		s.relativePath.startsWith('/') &&
			(b(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let c = Wt([r, s.relativePath]),
			f = n.concat(s);
		i.children &&
			i.children.length > 0 &&
			(b(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + c + '".')
			),
			uh(i.children, t, f, c)),
			!(i.path == null && !i.index) &&
				t.push({ path: c, score: n0(c, i.index), routesMeta: f });
	};
	return (
		e.forEach((i, o) => {
			var a;
			if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
			else for (let s of ch(i.path)) l(i, o, s);
		}),
		t
	);
}
function ch(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [i, ''] : [i];
	let o = ch(r.join('/')),
		a = [];
	return (
		a.push(...o.map((s) => (s === '' ? i : [i, s].join('/')))),
		l && a.push(...o),
		a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
	);
}
function Yg(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: r0(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Xg = /^:[\w-]+$/,
	Jg = 3,
	Zg = 2,
	qg = 1,
	e0 = 10,
	t0 = -2,
	id = (e) => e === '*';
function n0(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(id) && (r += t0),
		t && (r += Zg),
		n
			.filter((l) => !id(l))
			.reduce((l, i) => l + (Xg.test(i) ? Jg : i === '' ? qg : e0), r)
	);
}
function r0(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function l0(e, t, n) {
	n === void 0 && (n = !1);
	let { routesMeta: r } = e,
		l = {},
		i = '/',
		o = [];
	for (let a = 0; a < r.length; ++a) {
		let s = r[a],
			c = a === r.length - 1,
			f = i === '/' ? t : t.slice(i.length) || '/',
			d = bi(
				{ path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
				f
			),
			h = s.route;
		if (
			(!d &&
				c &&
				n &&
				!r[r.length - 1].route.index &&
				(d = bi(
					{ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
					f
				)),
			!d)
		)
			return null;
		Object.assign(l, d.params),
			o.push({
				params: l,
				pathname: Wt([i, d.pathname]),
				pathnameBase: u0(Wt([i, d.pathnameBase])),
				route: h,
			}),
			d.pathnameBase !== '/' && (i = Wt([i, d.pathnameBase]));
	}
	return o;
}
function bi(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = i0(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let i = l[0],
		o = i.replace(/(.)\/+$/, '$1'),
		a = l.slice(1);
	return {
		params: r.reduce((c, f, d) => {
			let { paramName: h, isOptional: C } = f;
			if (h === '*') {
				let E = a[d] || '';
				o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, '$1');
			}
			const w = a[d];
			return (
				C && !w ? (c[h] = void 0) : (c[h] = (w || '').replace(/%2F/g, '/')), c
			);
		}, {}),
		pathname: i,
		pathnameBase: o,
		pattern: e,
	};
}
function i0(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		kr(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		);
	let r = [],
		l =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(o, a, s) => (
						r.push({ paramName: a, isOptional: s != null }),
						s ? '/?([^\\/]+)?' : '/([^\\/]+)'
					)
				);
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }),
			  (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (l += '\\/*$')
			: e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
		[new RegExp(l, t ? void 0 : 'i'), r]
	);
}
function o0(e) {
	try {
		return e
			.split('/')
			.map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/');
	} catch (t) {
		return (
			kr(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		);
	}
}
function Yt(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function a0(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? Jt(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : s0(n, t)) : t,
		search: c0(r),
		hash: d0(l),
	};
}
function s0(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((l) => {
			l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function Sa(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' +
			t +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function dh(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Fo(e, t) {
	let n = dh(e);
	return t
		? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function zo(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = Jt(e))
		: ((l = ve({}, e)),
		  b(
				!l.pathname || !l.pathname.includes('?'),
				Sa('?', 'pathname', 'search', l)
		  ),
		  b(
				!l.pathname || !l.pathname.includes('#'),
				Sa('#', 'pathname', 'hash', l)
		  ),
		  b(!l.search || !l.search.includes('#'), Sa('#', 'search', 'hash', l)));
	let i = e === '' || l.pathname === '',
		o = i ? '/' : l.pathname,
		a;
	if (o == null) a = n;
	else {
		let d = t.length - 1;
		if (!r && o.startsWith('..')) {
			let h = o.split('/');
			for (; h[0] === '..'; ) h.shift(), (d -= 1);
			l.pathname = h.join('/');
		}
		a = d >= 0 ? t[d] : '/';
	}
	let s = a0(l, a),
		c = o && o !== '/' && o.endsWith('/'),
		f = (i || o === '.') && n.endsWith('/');
	return !s.pathname.endsWith('/') && (c || f) && (s.pathname += '/'), s;
}
const Wt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	u0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	c0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	d0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Qi {
	constructor(t, n, r, l) {
		l === void 0 && (l = !1),
			(this.status = t),
			(this.statusText = n || ''),
			(this.internal = l),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function Ao(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const fh = ['post', 'put', 'patch', 'delete'],
	f0 = new Set(fh),
	p0 = ['get', ...fh],
	h0 = new Set(p0),
	m0 = new Set([301, 302, 303, 307, 308]),
	v0 = new Set([307, 308]),
	Ea = {
		state: 'idle',
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	y0 = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Qr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	Pu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	g0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	ph = 'remix-router-transitions';
function w0(e) {
	const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
		n =
			typeof t < 'u' &&
			typeof t.document < 'u' &&
			typeof t.document.createElement < 'u',
		r = !n;
	b(
		e.routes.length > 0,
		'You must provide a non-empty routes array to createRouter'
	);
	let l;
	if (e.mapRouteProperties) l = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let y = e.detectErrorBoundary;
		l = (S) => ({ hasErrorBoundary: y(S) });
	} else l = g0;
	let i = {},
		o = kl(e.routes, l, void 0, i),
		a,
		s = e.basename || '/',
		c = e.unstable_dataStrategy || C0,
		f = e.unstable_patchRoutesOnMiss,
		d = ve(
			{
				v7_fetcherPersist: !1,
				v7_normalizeFormMethod: !1,
				v7_partialHydration: !1,
				v7_prependBasename: !1,
				v7_relativeSplatPath: !1,
				v7_skipActionErrorRevalidation: !1,
			},
			e.future
		),
		h = null,
		C = new Set(),
		w = null,
		E = null,
		R = null,
		m = e.hydrationData != null,
		p = Ln(o, e.history.location, s),
		v = null;
	if (p == null && !f) {
		let y = be(404, { pathname: e.history.location.pathname }),
			{ matches: S, route: _ } = md(o);
		(p = S), (v = { [_.id]: y });
	}
	p &&
		!e.hydrationData &&
		Ul(p, o, e.history.location.pathname).active &&
		(p = null);
	let j;
	if (p)
		if (p.some((y) => y.route.lazy)) j = !1;
		else if (!p.some((y) => y.route.loader)) j = !0;
		else if (d.v7_partialHydration) {
			let y = e.hydrationData ? e.hydrationData.loaderData : null,
				S = e.hydrationData ? e.hydrationData.errors : null,
				_ = (k) =>
					k.route.loader
						? typeof k.route.loader == 'function' &&
						  k.route.loader.hydrate === !0
							? !1
							: (y && y[k.route.id] !== void 0) ||
							  (S && S[k.route.id] !== void 0)
						: !0;
			if (S) {
				let k = p.findIndex((F) => S[F.route.id] !== void 0);
				j = p.slice(0, k + 1).every(_);
			} else j = p.every(_);
		} else j = e.hydrationData != null;
	else if (((j = !1), (p = []), d.v7_partialHydration)) {
		let y = Ul(null, o, e.history.location.pathname);
		y.active && y.matches && (p = y.matches);
	}
	let N,
		x = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: p,
			initialized: j,
			navigation: Ea,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: 'idle',
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || v,
			fetchers: new Map(),
			blockers: new Map(),
		},
		P = je.Pop,
		T = !1,
		z,
		I = !1,
		G = new Map(),
		te = null,
		B = !1,
		Z = !1,
		Me = [],
		dt = new Set(),
		ce = new Map(),
		O = 0,
		H = -1,
		M = new Map(),
		X = new Set(),
		ne = new Map(),
		ft = new Map(),
		De = new Set(),
		xt = new Map(),
		He = new Map(),
		Kn = new Map(),
		Wo = !1;
	function cm() {
		if (
			((h = e.history.listen((y) => {
				let { action: S, location: _, delta: k } = y;
				if (Wo) {
					Wo = !1;
					return;
				}
				kr(
					He.size === 0 || k != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let F = Vu({
					currentLocation: x.location,
					nextLocation: _,
					historyAction: S,
				});
				if (F && k != null) {
					(Wo = !0),
						e.history.go(k * -1),
						Al(F, {
							state: 'blocked',
							location: _,
							proceed() {
								Al(F, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: _,
								}),
									e.history.go(k);
							},
							reset() {
								let $ = new Map(x.blockers);
								$.set(F, Qr), We({ blockers: $ });
							},
						});
					return;
				}
				return Pn(S, _);
			})),
			n)
		) {
			z0(t, G);
			let y = () => A0(t, G);
			t.addEventListener('pagehide', y),
				(te = () => t.removeEventListener('pagehide', y));
		}
		return x.initialized || Pn(je.Pop, x.location, { initialHydration: !0 }), N;
	}
	function dm() {
		h && h(),
			te && te(),
			C.clear(),
			z && z.abort(),
			x.fetchers.forEach((y, S) => zl(S)),
			x.blockers.forEach((y, S) => Uu(S));
	}
	function fm(y) {
		return C.add(y), () => C.delete(y);
	}
	function We(y, S) {
		S === void 0 && (S = {}), (x = ve({}, x, y));
		let _ = [],
			k = [];
		d.v7_fetcherPersist &&
			x.fetchers.forEach((F, $) => {
				F.state === 'idle' && (De.has($) ? k.push($) : _.push($));
			}),
			[...C].forEach((F) =>
				F(x, {
					deletedFetchers: k,
					unstable_viewTransitionOpts: S.viewTransitionOpts,
					unstable_flushSync: S.flushSync === !0,
				})
			),
			d.v7_fetcherPersist &&
				(_.forEach((F) => x.fetchers.delete(F)), k.forEach((F) => zl(F)));
	}
	function Gn(y, S, _) {
		var k, F;
		let { flushSync: $ } = _ === void 0 ? {} : _,
			W =
				x.actionData != null &&
				x.navigation.formMethod != null &&
				Ct(x.navigation.formMethod) &&
				x.navigation.state === 'loading' &&
				((k = y.state) == null ? void 0 : k._isRedirect) !== !0,
			D;
		S.actionData
			? Object.keys(S.actionData).length > 0
				? (D = S.actionData)
				: (D = null)
			: W
			? (D = x.actionData)
			: (D = null);
		let Q = S.loaderData
				? pd(x.loaderData, S.loaderData, S.matches || [], S.errors)
				: x.loaderData,
			U = x.blockers;
		U.size > 0 && ((U = new Map(U)), U.forEach((re, ue) => U.set(ue, Qr)));
		let V =
			T === !0 ||
			(x.navigation.formMethod != null &&
				Ct(x.navigation.formMethod) &&
				((F = y.state) == null ? void 0 : F._isRedirect) !== !0);
		a && ((o = a), (a = void 0)),
			B ||
				P === je.Pop ||
				(P === je.Push
					? e.history.push(y, y.state)
					: P === je.Replace && e.history.replace(y, y.state));
		let oe;
		if (P === je.Pop) {
			let re = G.get(x.location.pathname);
			re && re.has(y.pathname)
				? (oe = { currentLocation: x.location, nextLocation: y })
				: G.has(y.pathname) &&
				  (oe = { currentLocation: y, nextLocation: x.location });
		} else if (I) {
			let re = G.get(x.location.pathname);
			re
				? re.add(y.pathname)
				: ((re = new Set([y.pathname])), G.set(x.location.pathname, re)),
				(oe = { currentLocation: x.location, nextLocation: y });
		}
		We(
			ve({}, S, {
				actionData: D,
				loaderData: Q,
				historyAction: P,
				location: y,
				initialized: !0,
				navigation: Ea,
				revalidation: 'idle',
				restoreScrollPosition: Hu(y, S.matches || x.matches),
				preventScrollReset: V,
				blockers: U,
			}),
			{ viewTransitionOpts: oe, flushSync: $ === !0 }
		),
			(P = je.Pop),
			(T = !1),
			(I = !1),
			(B = !1),
			(Z = !1),
			(Me = []);
	}
	async function Du(y, S) {
		if (typeof y == 'number') {
			e.history.go(y);
			return;
		}
		let _ = Es(
				x.location,
				x.matches,
				s,
				d.v7_prependBasename,
				y,
				d.v7_relativeSplatPath,
				S == null ? void 0 : S.fromRouteId,
				S == null ? void 0 : S.relative
			),
			{
				path: k,
				submission: F,
				error: $,
			} = od(d.v7_normalizeFormMethod, !1, _, S),
			W = x.location,
			D = Rl(x.location, k, S && S.state);
		D = ve({}, D, e.history.encodeLocation(D));
		let Q = S && S.replace != null ? S.replace : void 0,
			U = je.Push;
		Q === !0
			? (U = je.Replace)
			: Q === !1 ||
			  (F != null &&
					Ct(F.formMethod) &&
					F.formAction === x.location.pathname + x.location.search &&
					(U = je.Replace));
		let V =
				S && 'preventScrollReset' in S ? S.preventScrollReset === !0 : void 0,
			oe = (S && S.unstable_flushSync) === !0,
			re = Vu({ currentLocation: W, nextLocation: D, historyAction: U });
		if (re) {
			Al(re, {
				state: 'blocked',
				location: D,
				proceed() {
					Al(re, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: D,
					}),
						Du(y, S);
				},
				reset() {
					let ue = new Map(x.blockers);
					ue.set(re, Qr), We({ blockers: ue });
				},
			});
			return;
		}
		return await Pn(U, D, {
			submission: F,
			pendingError: $,
			preventScrollReset: V,
			replace: S && S.replace,
			enableViewTransition: S && S.unstable_viewTransition,
			flushSync: oe,
		});
	}
	function pm() {
		if (
			(bo(),
			We({ revalidation: 'loading' }),
			x.navigation.state !== 'submitting')
		) {
			if (x.navigation.state === 'idle') {
				Pn(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			Pn(P || x.historyAction, x.navigation.location, {
				overrideNavigation: x.navigation,
			});
		}
	}
	async function Pn(y, S, _) {
		z && z.abort(),
			(z = null),
			(P = y),
			(B = (_ && _.startUninterruptedRevalidation) === !0),
			jm(x.location, x.matches),
			(T = (_ && _.preventScrollReset) === !0),
			(I = (_ && _.enableViewTransition) === !0);
		let k = a || o,
			F = _ && _.overrideNavigation,
			$ = Ln(k, S, s),
			W = (_ && _.flushSync) === !0,
			D = Ul($, k, S.pathname);
		if ((D.active && D.matches && ($ = D.matches), !$)) {
			let { error: q, notFoundMatches: Oe, route: _e } = Qo(S.pathname);
			Gn(
				S,
				{ matches: Oe, loaderData: {}, errors: { [_e.id]: q } },
				{ flushSync: W }
			);
			return;
		}
		if (
			x.initialized &&
			!Z &&
			T0(x.location, S) &&
			!(_ && _.submission && Ct(_.submission.formMethod))
		) {
			Gn(S, { matches: $ }, { flushSync: W });
			return;
		}
		z = new AbortController();
		let Q = qn(e.history, S, z.signal, _ && _.submission),
			U;
		if (_ && _.pendingError)
			U = [fr($).route.id, { type: ae.error, error: _.pendingError }];
		else if (_ && _.submission && Ct(_.submission.formMethod)) {
			let q = await hm(Q, S, _.submission, $, D.active, {
				replace: _.replace,
				flushSync: W,
			});
			if (q.shortCircuited) return;
			if (q.pendingActionResult) {
				let [Oe, _e] = q.pendingActionResult;
				if (rt(_e) && Ao(_e.error) && _e.error.status === 404) {
					(z = null),
						Gn(S, {
							matches: q.matches,
							loaderData: {},
							errors: { [Oe]: _e.error },
						});
					return;
				}
			}
			($ = q.matches || $),
				(U = q.pendingActionResult),
				(F = ja(S, _.submission)),
				(W = !1),
				(D.active = !1),
				(Q = qn(e.history, Q.url, Q.signal));
		}
		let {
			shortCircuited: V,
			matches: oe,
			loaderData: re,
			errors: ue,
		} = await mm(
			Q,
			S,
			$,
			D.active,
			F,
			_ && _.submission,
			_ && _.fetcherSubmission,
			_ && _.replace,
			_ && _.initialHydration === !0,
			W,
			U
		);
		V ||
			((z = null),
			Gn(S, ve({ matches: oe || $ }, hd(U), { loaderData: re, errors: ue })));
	}
	async function hm(y, S, _, k, F, $) {
		$ === void 0 && ($ = {}), bo();
		let W = I0(S, _);
		if ((We({ navigation: W }, { flushSync: $.flushSync === !0 }), F)) {
			let U = await Vl(k, S.pathname, y.signal);
			if (U.type === 'aborted') return { shortCircuited: !0 };
			if (U.type === 'error') {
				let { boundaryId: V, error: oe } = $l(S.pathname, U);
				return {
					matches: U.partialMatches,
					pendingActionResult: [V, { type: ae.error, error: oe }],
				};
			} else if (U.matches) k = U.matches;
			else {
				let { notFoundMatches: V, error: oe, route: re } = Qo(S.pathname);
				return {
					matches: V,
					pendingActionResult: [re.id, { type: ae.error, error: oe }],
				};
			}
		}
		let D,
			Q = qr(k, S);
		if (!Q.route.action && !Q.route.lazy)
			D = {
				type: ae.error,
				error: be(405, {
					method: y.method,
					pathname: S.pathname,
					routeId: Q.route.id,
				}),
			};
		else if (((D = (await Fr('action', y, [Q], k))[0]), y.signal.aborted))
			return { shortCircuited: !0 };
		if (Fn(D)) {
			let U;
			return (
				$ && $.replace != null
					? (U = $.replace)
					: (U =
							cd(D.response.headers.get('Location'), new URL(y.url), s) ===
							x.location.pathname + x.location.search),
				await Ir(y, D, { submission: _, replace: U }),
				{ shortCircuited: !0 }
			);
		}
		if (In(D)) throw be(400, { type: 'defer-action' });
		if (rt(D)) {
			let U = fr(k, Q.route.id);
			return (
				($ && $.replace) !== !0 && (P = je.Push),
				{ matches: k, pendingActionResult: [U.route.id, D] }
			);
		}
		return { matches: k, pendingActionResult: [Q.route.id, D] };
	}
	async function mm(y, S, _, k, F, $, W, D, Q, U, V) {
		let oe = F || ja(S, $),
			re = $ || W || wd(oe),
			ue = !B && (!d.v7_partialHydration || !Q);
		if (k) {
			if (ue) {
				let xe = Ou(V);
				We(ve({ navigation: oe }, xe !== void 0 ? { actionData: xe } : {}), {
					flushSync: U,
				});
			}
			let K = await Vl(_, S.pathname, y.signal);
			if (K.type === 'aborted') return { shortCircuited: !0 };
			if (K.type === 'error') {
				let { boundaryId: xe, error: tt } = $l(S.pathname, K);
				return {
					matches: K.partialMatches,
					loaderData: {},
					errors: { [xe]: tt },
				};
			} else if (K.matches) _ = K.matches;
			else {
				let { error: xe, notFoundMatches: tt, route: he } = Qo(S.pathname);
				return { matches: tt, loaderData: {}, errors: { [he.id]: xe } };
			}
		}
		let q = a || o,
			[Oe, _e] = ad(
				e.history,
				x,
				_,
				re,
				S,
				d.v7_partialHydration && Q === !0,
				d.v7_skipActionErrorRevalidation,
				Z,
				Me,
				dt,
				De,
				ne,
				X,
				q,
				s,
				V
			);
		if (
			(Ko(
				(K) =>
					!(_ && _.some((xe) => xe.route.id === K)) ||
					(Oe && Oe.some((xe) => xe.route.id === K))
			),
			(H = ++O),
			Oe.length === 0 && _e.length === 0)
		) {
			let K = Au();
			return (
				Gn(
					S,
					ve(
						{
							matches: _,
							loaderData: {},
							errors: V && rt(V[1]) ? { [V[0]]: V[1].error } : null,
						},
						hd(V),
						K ? { fetchers: new Map(x.fetchers) } : {}
					),
					{ flushSync: U }
				),
				{ shortCircuited: !0 }
			);
		}
		if (ue) {
			let K = {};
			if (!k) {
				K.navigation = oe;
				let xe = Ou(V);
				xe !== void 0 && (K.actionData = xe);
			}
			_e.length > 0 && (K.fetchers = vm(_e)), We(K, { flushSync: U });
		}
		_e.forEach((K) => {
			ce.has(K.key) && en(K.key), K.controller && ce.set(K.key, K.controller);
		});
		let zr = () => _e.forEach((K) => en(K.key));
		z && z.signal.addEventListener('abort', zr);
		let { loaderResults: tn, fetcherResults: Yn } = await Iu(
			x.matches,
			_,
			Oe,
			_e,
			y
		);
		if (y.signal.aborted) return { shortCircuited: !0 };
		z && z.signal.removeEventListener('abort', zr),
			_e.forEach((K) => ce.delete(K.key));
		let Xn = vd([...tn, ...Yn]);
		if (Xn) {
			if (Xn.idx >= Oe.length) {
				let K = _e[Xn.idx - Oe.length].key;
				X.add(K);
			}
			return await Ir(y, Xn.result, { replace: D }), { shortCircuited: !0 };
		}
		let { loaderData: Jn, errors: Nt } = fd(x, _, Oe, tn, V, _e, Yn, xt);
		xt.forEach((K, xe) => {
			K.subscribe((tt) => {
				(tt || K.done) && xt.delete(xe);
			});
		}),
			d.v7_partialHydration &&
				Q &&
				x.errors &&
				Object.entries(x.errors)
					.filter((K) => {
						let [xe] = K;
						return !Oe.some((tt) => tt.route.id === xe);
					})
					.forEach((K) => {
						let [xe, tt] = K;
						Nt = Object.assign(Nt || {}, { [xe]: tt });
					});
		let Bl = Au(),
			Hl = $u(H),
			Wl = Bl || Hl || _e.length > 0;
		return ve(
			{ matches: _, loaderData: Jn, errors: Nt },
			Wl ? { fetchers: new Map(x.fetchers) } : {}
		);
	}
	function Ou(y) {
		if (y && !rt(y[1])) return { [y[0]]: y[1].data };
		if (x.actionData)
			return Object.keys(x.actionData).length === 0 ? null : x.actionData;
	}
	function vm(y) {
		return (
			y.forEach((S) => {
				let _ = x.fetchers.get(S.key),
					k = Kr(void 0, _ ? _.data : void 0);
				x.fetchers.set(S.key, k);
			}),
			new Map(x.fetchers)
		);
	}
	function ym(y, S, _, k) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		ce.has(y) && en(y);
		let F = (k && k.unstable_flushSync) === !0,
			$ = a || o,
			W = Es(
				x.location,
				x.matches,
				s,
				d.v7_prependBasename,
				_,
				d.v7_relativeSplatPath,
				S,
				k == null ? void 0 : k.relative
			),
			D = Ln($, W, s),
			Q = Ul(D, $, W);
		if ((Q.active && Q.matches && (D = Q.matches), !D)) {
			Ft(y, S, be(404, { pathname: W }), { flushSync: F });
			return;
		}
		let {
			path: U,
			submission: V,
			error: oe,
		} = od(d.v7_normalizeFormMethod, !0, W, k);
		if (oe) {
			Ft(y, S, oe, { flushSync: F });
			return;
		}
		let re = qr(D, U);
		if (((T = (k && k.preventScrollReset) === !0), V && Ct(V.formMethod))) {
			gm(y, S, U, re, D, Q.active, F, V);
			return;
		}
		ne.set(y, { routeId: S, path: U }), wm(y, S, U, re, D, Q.active, F, V);
	}
	async function gm(y, S, _, k, F, $, W, D) {
		bo(), ne.delete(y);
		function Q(he) {
			if (!he.route.action && !he.route.lazy) {
				let zt = be(405, { method: D.formMethod, pathname: _, routeId: S });
				return Ft(y, S, zt, { flushSync: W }), !0;
			}
			return !1;
		}
		if (!$ && Q(k)) return;
		let U = x.fetchers.get(y);
		qt(y, F0(D, U), { flushSync: W });
		let V = new AbortController(),
			oe = qn(e.history, _, V.signal, D);
		if ($) {
			let he = await Vl(F, _, oe.signal);
			if (he.type === 'aborted') return;
			if (he.type === 'error') {
				let { error: zt } = $l(_, he);
				Ft(y, S, zt, { flushSync: W });
				return;
			} else if (he.matches) {
				if (((F = he.matches), (k = qr(F, _)), Q(k))) return;
			} else {
				Ft(y, S, be(404, { pathname: _ }), { flushSync: W });
				return;
			}
		}
		ce.set(y, V);
		let re = O,
			q = (await Fr('action', oe, [k], F))[0];
		if (oe.signal.aborted) {
			ce.get(y) === V && ce.delete(y);
			return;
		}
		if (d.v7_fetcherPersist && De.has(y)) {
			if (Fn(q) || rt(q)) {
				qt(y, rn(void 0));
				return;
			}
		} else {
			if (Fn(q))
				if ((ce.delete(y), H > re)) {
					qt(y, rn(void 0));
					return;
				} else
					return X.add(y), qt(y, Kr(D)), Ir(oe, q, { fetcherSubmission: D });
			if (rt(q)) {
				Ft(y, S, q.error);
				return;
			}
		}
		if (In(q)) throw be(400, { type: 'defer-action' });
		let Oe = x.navigation.location || x.location,
			_e = qn(e.history, Oe, V.signal),
			zr = a || o,
			tn =
				x.navigation.state !== 'idle'
					? Ln(zr, x.navigation.location, s)
					: x.matches;
		b(tn, "Didn't find any matches after fetcher action");
		let Yn = ++O;
		M.set(y, Yn);
		let Xn = Kr(D, q.data);
		x.fetchers.set(y, Xn);
		let [Jn, Nt] = ad(
			e.history,
			x,
			tn,
			D,
			Oe,
			!1,
			d.v7_skipActionErrorRevalidation,
			Z,
			Me,
			dt,
			De,
			ne,
			X,
			zr,
			s,
			[k.route.id, q]
		);
		Nt.filter((he) => he.key !== y).forEach((he) => {
			let zt = he.key,
				Wu = x.fetchers.get(zt),
				Rm = Kr(void 0, Wu ? Wu.data : void 0);
			x.fetchers.set(zt, Rm),
				ce.has(zt) && en(zt),
				he.controller && ce.set(zt, he.controller);
		}),
			We({ fetchers: new Map(x.fetchers) });
		let Bl = () => Nt.forEach((he) => en(he.key));
		V.signal.addEventListener('abort', Bl);
		let { loaderResults: Hl, fetcherResults: Wl } = await Iu(
			x.matches,
			tn,
			Jn,
			Nt,
			_e
		);
		if (V.signal.aborted) return;
		V.signal.removeEventListener('abort', Bl),
			M.delete(y),
			ce.delete(y),
			Nt.forEach((he) => ce.delete(he.key));
		let K = vd([...Hl, ...Wl]);
		if (K) {
			if (K.idx >= Jn.length) {
				let he = Nt[K.idx - Jn.length].key;
				X.add(he);
			}
			return Ir(_e, K.result);
		}
		let { loaderData: xe, errors: tt } = fd(
			x,
			x.matches,
			Jn,
			Hl,
			void 0,
			Nt,
			Wl,
			xt
		);
		if (x.fetchers.has(y)) {
			let he = rn(q.data);
			x.fetchers.set(y, he);
		}
		$u(Yn),
			x.navigation.state === 'loading' && Yn > H
				? (b(P, 'Expected pending action'),
				  z && z.abort(),
				  Gn(x.navigation.location, {
						matches: tn,
						loaderData: xe,
						errors: tt,
						fetchers: new Map(x.fetchers),
				  }))
				: (We({
						errors: tt,
						loaderData: pd(x.loaderData, xe, tn, tt),
						fetchers: new Map(x.fetchers),
				  }),
				  (Z = !1));
	}
	async function wm(y, S, _, k, F, $, W, D) {
		let Q = x.fetchers.get(y);
		qt(y, Kr(D, Q ? Q.data : void 0), { flushSync: W });
		let U = new AbortController(),
			V = qn(e.history, _, U.signal);
		if ($) {
			let q = await Vl(F, _, V.signal);
			if (q.type === 'aborted') return;
			if (q.type === 'error') {
				let { error: Oe } = $l(_, q);
				Ft(y, S, Oe, { flushSync: W });
				return;
			} else if (q.matches) (F = q.matches), (k = qr(F, _));
			else {
				Ft(y, S, be(404, { pathname: _ }), { flushSync: W });
				return;
			}
		}
		ce.set(y, U);
		let oe = O,
			ue = (await Fr('loader', V, [k], F))[0];
		if (
			(In(ue) && (ue = (await gh(ue, V.signal, !0)) || ue),
			ce.get(y) === U && ce.delete(y),
			!V.signal.aborted)
		) {
			if (De.has(y)) {
				qt(y, rn(void 0));
				return;
			}
			if (Fn(ue))
				if (H > oe) {
					qt(y, rn(void 0));
					return;
				} else {
					X.add(y), await Ir(V, ue);
					return;
				}
			if (rt(ue)) {
				Ft(y, S, ue.error);
				return;
			}
			b(!In(ue), 'Unhandled fetcher deferred data'), qt(y, rn(ue.data));
		}
	}
	async function Ir(y, S, _) {
		let {
			submission: k,
			fetcherSubmission: F,
			replace: $,
		} = _ === void 0 ? {} : _;
		S.response.headers.has('X-Remix-Revalidate') && (Z = !0);
		let W = S.response.headers.get('Location');
		b(W, 'Expected a Location header on the redirect Response'),
			(W = cd(W, new URL(y.url), s));
		let D = Rl(x.location, W, { _isRedirect: !0 });
		if (n) {
			let ue = !1;
			if (S.response.headers.has('X-Remix-Reload-Document')) ue = !0;
			else if (Pu.test(W)) {
				const q = e.history.createURL(W);
				ue = q.origin !== t.location.origin || Yt(q.pathname, s) == null;
			}
			if (ue) {
				$ ? t.location.replace(W) : t.location.assign(W);
				return;
			}
		}
		z = null;
		let Q =
				$ === !0 || S.response.headers.has('X-Remix-Replace')
					? je.Replace
					: je.Push,
			{ formMethod: U, formAction: V, formEncType: oe } = x.navigation;
		!k && !F && U && V && oe && (k = wd(x.navigation));
		let re = k || F;
		if (v0.has(S.response.status) && re && Ct(re.formMethod))
			await Pn(Q, D, {
				submission: ve({}, re, { formAction: W }),
				preventScrollReset: T,
			});
		else {
			let ue = ja(D, k);
			await Pn(Q, D, {
				overrideNavigation: ue,
				fetcherSubmission: F,
				preventScrollReset: T,
			});
		}
	}
	async function Fr(y, S, _, k) {
		try {
			let F = await _0(c, y, S, _, k, i, l);
			return await Promise.all(
				F.map(($, W) => {
					if (M0($)) {
						let D = $.result;
						return {
							type: ae.redirect,
							response: P0(D, S, _[W].route.id, k, s, d.v7_relativeSplatPath),
						};
					}
					return k0($);
				})
			);
		} catch (F) {
			return _.map(() => ({ type: ae.error, error: F }));
		}
	}
	async function Iu(y, S, _, k, F) {
		let [$, ...W] = await Promise.all([
			_.length ? Fr('loader', F, _, S) : [],
			...k.map((D) => {
				if (D.matches && D.match && D.controller) {
					let Q = qn(e.history, D.path, D.controller.signal);
					return Fr('loader', Q, [D.match], D.matches).then((U) => U[0]);
				} else
					return Promise.resolve({
						type: ae.error,
						error: be(404, { pathname: D.path }),
					});
			}),
		]);
		return (
			await Promise.all([
				gd(
					y,
					_,
					$,
					$.map(() => F.signal),
					!1,
					x.loaderData
				),
				gd(
					y,
					k.map((D) => D.match),
					W,
					k.map((D) => (D.controller ? D.controller.signal : null)),
					!0
				),
			]),
			{ loaderResults: $, fetcherResults: W }
		);
	}
	function bo() {
		(Z = !0),
			Me.push(...Ko()),
			ne.forEach((y, S) => {
				ce.has(S) && (dt.add(S), en(S));
			});
	}
	function qt(y, S, _) {
		_ === void 0 && (_ = {}),
			x.fetchers.set(y, S),
			We(
				{ fetchers: new Map(x.fetchers) },
				{ flushSync: (_ && _.flushSync) === !0 }
			);
	}
	function Ft(y, S, _, k) {
		k === void 0 && (k = {});
		let F = fr(x.matches, S);
		zl(y),
			We(
				{ errors: { [F.route.id]: _ }, fetchers: new Map(x.fetchers) },
				{ flushSync: (k && k.flushSync) === !0 }
			);
	}
	function Fu(y) {
		return (
			d.v7_fetcherPersist &&
				(ft.set(y, (ft.get(y) || 0) + 1), De.has(y) && De.delete(y)),
			x.fetchers.get(y) || y0
		);
	}
	function zl(y) {
		let S = x.fetchers.get(y);
		ce.has(y) && !(S && S.state === 'loading' && M.has(y)) && en(y),
			ne.delete(y),
			M.delete(y),
			X.delete(y),
			De.delete(y),
			dt.delete(y),
			x.fetchers.delete(y);
	}
	function xm(y) {
		if (d.v7_fetcherPersist) {
			let S = (ft.get(y) || 0) - 1;
			S <= 0 ? (ft.delete(y), De.add(y)) : ft.set(y, S);
		} else zl(y);
		We({ fetchers: new Map(x.fetchers) });
	}
	function en(y) {
		let S = ce.get(y);
		b(S, 'Expected fetch controller: ' + y), S.abort(), ce.delete(y);
	}
	function zu(y) {
		for (let S of y) {
			let _ = Fu(S),
				k = rn(_.data);
			x.fetchers.set(S, k);
		}
	}
	function Au() {
		let y = [],
			S = !1;
		for (let _ of X) {
			let k = x.fetchers.get(_);
			b(k, 'Expected fetcher: ' + _),
				k.state === 'loading' && (X.delete(_), y.push(_), (S = !0));
		}
		return zu(y), S;
	}
	function $u(y) {
		let S = [];
		for (let [_, k] of M)
			if (k < y) {
				let F = x.fetchers.get(_);
				b(F, 'Expected fetcher: ' + _),
					F.state === 'loading' && (en(_), M.delete(_), S.push(_));
			}
		return zu(S), S.length > 0;
	}
	function Sm(y, S) {
		let _ = x.blockers.get(y) || Qr;
		return He.get(y) !== S && He.set(y, S), _;
	}
	function Uu(y) {
		x.blockers.delete(y), He.delete(y);
	}
	function Al(y, S) {
		let _ = x.blockers.get(y) || Qr;
		b(
			(_.state === 'unblocked' && S.state === 'blocked') ||
				(_.state === 'blocked' && S.state === 'blocked') ||
				(_.state === 'blocked' && S.state === 'proceeding') ||
				(_.state === 'blocked' && S.state === 'unblocked') ||
				(_.state === 'proceeding' && S.state === 'unblocked'),
			'Invalid blocker state transition: ' + _.state + ' -> ' + S.state
		);
		let k = new Map(x.blockers);
		k.set(y, S), We({ blockers: k });
	}
	function Vu(y) {
		let { currentLocation: S, nextLocation: _, historyAction: k } = y;
		if (He.size === 0) return;
		He.size > 1 && kr(!1, 'A router only supports one blocker at a time');
		let F = Array.from(He.entries()),
			[$, W] = F[F.length - 1],
			D = x.blockers.get($);
		if (
			!(D && D.state === 'proceeding') &&
			W({ currentLocation: S, nextLocation: _, historyAction: k })
		)
			return $;
	}
	function Qo(y) {
		let S = be(404, { pathname: y }),
			_ = a || o,
			{ matches: k, route: F } = md(_);
		return Ko(), { notFoundMatches: k, route: F, error: S };
	}
	function $l(y, S) {
		return {
			boundaryId: fr(S.partialMatches).route.id,
			error: be(400, {
				type: 'route-discovery',
				pathname: y,
				message:
					S.error != null && 'message' in S.error ? S.error : String(S.error),
			}),
		};
	}
	function Ko(y) {
		let S = [];
		return (
			xt.forEach((_, k) => {
				(!y || y(k)) && (_.cancel(), S.push(k), xt.delete(k));
			}),
			S
		);
	}
	function Em(y, S, _) {
		if (((w = y), (R = S), (E = _ || null), !m && x.navigation === Ea)) {
			m = !0;
			let k = Hu(x.location, x.matches);
			k != null && We({ restoreScrollPosition: k });
		}
		return () => {
			(w = null), (R = null), (E = null);
		};
	}
	function Bu(y, S) {
		return (
			(E &&
				E(
					y,
					S.map((k) => Gg(k, x.loaderData))
				)) ||
			y.key
		);
	}
	function jm(y, S) {
		if (w && R) {
			let _ = Bu(y, S);
			w[_] = R();
		}
	}
	function Hu(y, S) {
		if (w) {
			let _ = Bu(y, S),
				k = w[_];
			if (typeof k == 'number') return k;
		}
		return null;
	}
	function Ul(y, S, _) {
		if (f)
			if (y) {
				let k = y[y.length - 1].route;
				if (k.path && (k.path === '*' || k.path.endsWith('/*')))
					return { active: !0, matches: xi(S, _, s, !0) };
			} else return { active: !0, matches: xi(S, _, s, !0) || [] };
		return { active: !1, matches: null };
	}
	async function Vl(y, S, _) {
		let k = y,
			F = k.length > 0 ? k[k.length - 1].route : null;
		for (;;) {
			let $ = a == null,
				W = a || o;
			try {
				await j0(f, S, k, W, i, l, Kn, _);
			} catch (V) {
				return { type: 'error', error: V, partialMatches: k };
			} finally {
				$ && (o = [...o]);
			}
			if (_.aborted) return { type: 'aborted' };
			let D = Ln(W, S, s),
				Q = !1;
			if (D) {
				let V = D[D.length - 1].route;
				if (V.index) return { type: 'success', matches: D };
				if (V.path && V.path.length > 0)
					if (V.path === '*') Q = !0;
					else return { type: 'success', matches: D };
			}
			let U = xi(W, S, s, !0);
			if (
				!U ||
				k.map((V) => V.route.id).join('-') ===
					U.map((V) => V.route.id).join('-')
			)
				return { type: 'success', matches: Q ? D : null };
			if (((k = U), (F = k[k.length - 1].route), F.path === '*'))
				return { type: 'success', matches: k };
		}
	}
	function Cm(y) {
		(i = {}), (a = kl(y, l, void 0, i));
	}
	function _m(y, S) {
		let _ = a == null;
		mh(y, S, a || o, i, l), _ && ((o = [...o]), We({}));
	}
	return (
		(N = {
			get basename() {
				return s;
			},
			get future() {
				return d;
			},
			get state() {
				return x;
			},
			get routes() {
				return o;
			},
			get window() {
				return t;
			},
			initialize: cm,
			subscribe: fm,
			enableScrollRestoration: Em,
			navigate: Du,
			fetch: ym,
			revalidate: pm,
			createHref: (y) => e.history.createHref(y),
			encodeLocation: (y) => e.history.encodeLocation(y),
			getFetcher: Fu,
			deleteFetcher: xm,
			dispose: dm,
			getBlocker: Sm,
			deleteBlocker: Uu,
			patchRoutes: _m,
			_internalFetchControllers: ce,
			_internalActiveDeferreds: xt,
			_internalSetRoutes: Cm,
		}),
		N
	);
}
function x0(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	);
}
function Es(e, t, n, r, l, i, o, a) {
	let s, c;
	if (o) {
		s = [];
		for (let d of t)
			if ((s.push(d), d.route.id === o)) {
				c = d;
				break;
			}
	} else (s = t), (c = t[t.length - 1]);
	let f = zo(l || '.', Fo(s, i), Yt(e.pathname, n) || e.pathname, a === 'path');
	return (
		l == null && ((f.search = e.search), (f.hash = e.hash)),
		(l == null || l === '' || l === '.') &&
			c &&
			c.route.index &&
			!Nu(f.search) &&
			(f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
		r &&
			n !== '/' &&
			(f.pathname = f.pathname === '/' ? n : Wt([n, f.pathname])),
		Wn(f)
	);
}
function od(e, t, n, r) {
	if (!r || !x0(r)) return { path: n };
	if (r.formMethod && !O0(r.formMethod))
		return { path: n, error: be(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: be(400, { type: 'invalid-body' }) }),
		i = r.formMethod || 'get',
		o = e ? i.toUpperCase() : i.toLowerCase(),
		a = vh(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!Ct(o)) return l();
			let h =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((C, w) => {
							let [E, R] = w;
							return (
								'' +
								C +
								E +
								'=' +
								R +
								`
`
							);
					  }, '')
					: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: o,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: h,
				},
			};
		} else if (r.formEncType === 'application/json') {
			if (!Ct(o)) return l();
			try {
				let h = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: h,
						text: void 0,
					},
				};
			} catch {
				return l();
			}
		}
	}
	b(
		typeof FormData == 'function',
		'FormData is not available in this environment'
	);
	let s, c;
	if (r.formData) (s = js(r.formData)), (c = r.formData);
	else if (r.body instanceof FormData) (s = js(r.body)), (c = r.body);
	else if (r.body instanceof URLSearchParams) (s = r.body), (c = dd(s));
	else if (r.body == null) (s = new URLSearchParams()), (c = new FormData());
	else
		try {
			(s = new URLSearchParams(r.body)), (c = dd(s));
		} catch {
			return l();
		}
	let f = {
		formMethod: o,
		formAction: a,
		formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
		formData: c,
		json: void 0,
		text: void 0,
	};
	if (Ct(f.formMethod)) return { path: n, submission: f };
	let d = Jt(n);
	return (
		t && d.search && Nu(d.search) && s.append('index', ''),
		(d.search = '?' + s),
		{ path: Wn(d), submission: f }
	);
}
function S0(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function ad(e, t, n, r, l, i, o, a, s, c, f, d, h, C, w, E) {
	let R = E ? (rt(E[1]) ? E[1].error : E[1].data) : void 0,
		m = e.createURL(t.location),
		p = e.createURL(l),
		v = E && rt(E[1]) ? E[0] : void 0,
		j = v ? S0(n, v) : n,
		N = E ? E[1].statusCode : void 0,
		x = o && N && N >= 400,
		P = j.filter((z, I) => {
			let { route: G } = z;
			if (G.lazy) return !0;
			if (G.loader == null) return !1;
			if (i)
				return typeof G.loader != 'function' || G.loader.hydrate
					? !0
					: t.loaderData[G.id] === void 0 &&
							(!t.errors || t.errors[G.id] === void 0);
			if (E0(t.loaderData, t.matches[I], z) || s.some((Z) => Z === z.route.id))
				return !0;
			let te = t.matches[I],
				B = z;
			return sd(
				z,
				ve(
					{
						currentUrl: m,
						currentParams: te.params,
						nextUrl: p,
						nextParams: B.params,
					},
					r,
					{
						actionResult: R,
						actionStatus: N,
						defaultShouldRevalidate: x
							? !1
							: a ||
							  m.pathname + m.search === p.pathname + p.search ||
							  m.search !== p.search ||
							  hh(te, B),
					}
				)
			);
		}),
		T = [];
	return (
		d.forEach((z, I) => {
			if (i || !n.some((Me) => Me.route.id === z.routeId) || f.has(I)) return;
			let G = Ln(C, z.path, w);
			if (!G) {
				T.push({
					key: I,
					routeId: z.routeId,
					path: z.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let te = t.fetchers.get(I),
				B = qr(G, z.path),
				Z = !1;
			h.has(I)
				? (Z = !1)
				: c.has(I)
				? (c.delete(I), (Z = !0))
				: te && te.state !== 'idle' && te.data === void 0
				? (Z = a)
				: (Z = sd(
						B,
						ve(
							{
								currentUrl: m,
								currentParams: t.matches[t.matches.length - 1].params,
								nextUrl: p,
								nextParams: n[n.length - 1].params,
							},
							r,
							{
								actionResult: R,
								actionStatus: N,
								defaultShouldRevalidate: x ? !1 : a,
							}
						)
				  )),
				Z &&
					T.push({
						key: I,
						routeId: z.routeId,
						path: z.path,
						matches: G,
						match: B,
						controller: new AbortController(),
					});
		}),
		[P, T]
	);
}
function E0(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function hh(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
	);
}
function sd(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == 'boolean') return n;
	}
	return t.defaultShouldRevalidate;
}
async function j0(e, t, n, r, l, i, o, a) {
	let s = [t, ...n.map((c) => c.route.id)].join('-');
	try {
		let c = o.get(s);
		c ||
			((c = e({
				path: t,
				matches: n,
				patch: (f, d) => {
					a.aborted || mh(f, d, r, l, i);
				},
			})),
			o.set(s, c)),
			c && L0(c) && (await c);
	} finally {
		o.delete(s);
	}
}
function mh(e, t, n, r, l) {
	if (e) {
		var i;
		let o = r[e];
		b(o, 'No route found to patch children into: routeId = ' + e);
		let a = kl(
			t,
			l,
			[
				e,
				'patch',
				String(((i = o.children) == null ? void 0 : i.length) || '0'),
			],
			r
		);
		o.children ? o.children.push(...a) : (o.children = a);
	} else {
		let o = kl(t, l, ['patch', String(n.length || '0')], r);
		n.push(...o);
	}
}
async function ud(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let l = n[e.id];
	b(l, 'No route found in manifest');
	let i = {};
	for (let o in r) {
		let s = l[o] !== void 0 && o !== 'hasErrorBoundary';
		kr(
			!s,
			'Route "' +
				l.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!s && !Qg.has(o) && (i[o] = r[o]);
	}
	Object.assign(l, i), Object.assign(l, ve({}, t(l), { lazy: void 0 }));
}
function C0(e) {
	return Promise.all(e.matches.map((t) => t.resolve()));
}
async function _0(e, t, n, r, l, i, o, a) {
	let s = r.reduce((d, h) => d.add(h.route.id), new Set()),
		c = new Set(),
		f = await e({
			matches: l.map((d) => {
				let h = s.has(d.route.id);
				return ve({}, d, {
					shouldLoad: h,
					resolve: (w) => (
						c.add(d.route.id),
						h
							? R0(t, n, d, i, o, w, a)
							: Promise.resolve({ type: ae.data, result: void 0 })
					),
				});
			}),
			request: n,
			params: l[0].params,
			context: a,
		});
	return (
		l.forEach((d) =>
			b(
				c.has(d.route.id),
				'`match.resolve()` was not called for route id "' +
					d.route.id +
					'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
			)
		),
		f.filter((d, h) => s.has(l[h].route.id))
	);
}
async function R0(e, t, n, r, l, i, o) {
	let a,
		s,
		c = (f) => {
			let d,
				h = new Promise((E, R) => (d = R));
			(s = () => d()), t.signal.addEventListener('abort', s);
			let C = (E) =>
					typeof f != 'function'
						? Promise.reject(
								new Error(
									'You cannot call the handler for a route which defines a boolean ' +
										('"' + e + '" [routeId: ' + n.route.id + ']')
								)
						  )
						: f(
								{ request: t, params: n.params, context: o },
								...(E !== void 0 ? [E] : [])
						  ),
				w;
			return (
				i
					? (w = i((E) => C(E)))
					: (w = (async () => {
							try {
								return { type: 'data', result: await C() };
							} catch (E) {
								return { type: 'error', result: E };
							}
					  })()),
				Promise.race([w, h])
			);
		};
	try {
		let f = n.route[e];
		if (n.route.lazy)
			if (f) {
				let d,
					[h] = await Promise.all([
						c(f).catch((C) => {
							d = C;
						}),
						ud(n.route, l, r),
					]);
				if (d !== void 0) throw d;
				a = h;
			} else if ((await ud(n.route, l, r), (f = n.route[e]), f)) a = await c(f);
			else if (e === 'action') {
				let d = new URL(t.url),
					h = d.pathname + d.search;
				throw be(405, { method: t.method, pathname: h, routeId: n.route.id });
			} else return { type: ae.data, result: void 0 };
		else if (f) a = await c(f);
		else {
			let d = new URL(t.url),
				h = d.pathname + d.search;
			throw be(404, { pathname: h });
		}
		b(
			a.result !== void 0,
			'You defined ' +
				(e === 'action' ? 'an action' : 'a loader') +
				' for route ' +
				('"' +
					n.route.id +
					'" but didn\'t return anything from your `' +
					e +
					'` ') +
				'function. Please return a value or `null`.'
		);
	} catch (f) {
		return { type: ae.error, result: f };
	} finally {
		s && t.signal.removeEventListener('abort', s);
	}
	return a;
}
async function k0(e) {
	let { result: t, type: n } = e;
	if (yh(t)) {
		let c;
		try {
			let f = t.headers.get('Content-Type');
			f && /\bapplication\/json\b/.test(f)
				? t.body == null
					? (c = null)
					: (c = await t.json())
				: (c = await t.text());
		} catch (f) {
			return { type: ae.error, error: f };
		}
		return n === ae.error
			? {
					type: ae.error,
					error: new Qi(t.status, t.statusText, c),
					statusCode: t.status,
					headers: t.headers,
			  }
			: { type: ae.data, data: c, statusCode: t.status, headers: t.headers };
	}
	if (n === ae.error) {
		if (yd(t)) {
			var r;
			if (t.data instanceof Error) {
				var l;
				return {
					type: ae.error,
					error: t.data,
					statusCode: (l = t.init) == null ? void 0 : l.status,
				};
			}
			t = new Qi(
				((r = t.init) == null ? void 0 : r.status) || 500,
				void 0,
				t.data
			);
		}
		return { type: ae.error, error: t, statusCode: Ao(t) ? t.status : void 0 };
	}
	if (D0(t)) {
		var i, o;
		return {
			type: ae.deferred,
			deferredData: t,
			statusCode: (i = t.init) == null ? void 0 : i.status,
			headers:
				((o = t.init) == null ? void 0 : o.headers) &&
				new Headers(t.init.headers),
		};
	}
	if (yd(t)) {
		var a, s;
		return {
			type: ae.data,
			data: t.data,
			statusCode: (a = t.init) == null ? void 0 : a.status,
			headers:
				(s = t.init) != null && s.headers
					? new Headers(t.init.headers)
					: void 0,
		};
	}
	return { type: ae.data, data: t };
}
function P0(e, t, n, r, l, i) {
	let o = e.headers.get('Location');
	if (
		(b(
			o,
			'Redirects returned/thrown from loaders/actions must have a Location header'
		),
		!Pu.test(o))
	) {
		let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
		(o = Es(new URL(t.url), a, l, !0, o, i)), e.headers.set('Location', o);
	}
	return e;
}
function cd(e, t, n) {
	if (Pu.test(e)) {
		let r = e,
			l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
			i = Yt(l.pathname, n) != null;
		if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
	}
	return e;
}
function qn(e, t, n, r) {
	let l = e.createURL(vh(t)).toString(),
		i = { signal: n };
	if (r && Ct(r.formMethod)) {
		let { formMethod: o, formEncType: a } = r;
		(i.method = o.toUpperCase()),
			a === 'application/json'
				? ((i.headers = new Headers({ 'Content-Type': a })),
				  (i.body = JSON.stringify(r.json)))
				: a === 'text/plain'
				? (i.body = r.text)
				: a === 'application/x-www-form-urlencoded' && r.formData
				? (i.body = js(r.formData))
				: (i.body = r.formData);
	}
	return new Request(l, i);
}
function js(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function dd(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function N0(e, t, n, r, l, i) {
	let o = {},
		a = null,
		s,
		c = !1,
		f = {},
		d = r && rt(r[1]) ? r[1].error : void 0;
	return (
		n.forEach((h, C) => {
			let w = t[C].route.id;
			if (
				(b(!Fn(h), 'Cannot handle redirect results in processLoaderData'),
				rt(h))
			) {
				let E = h.error;
				if ((d !== void 0 && ((E = d), (d = void 0)), (a = a || {}), i))
					a[w] = E;
				else {
					let R = fr(e, w);
					a[R.route.id] == null && (a[R.route.id] = E);
				}
				(o[w] = void 0),
					c || ((c = !0), (s = Ao(h.error) ? h.error.status : 500)),
					h.headers && (f[w] = h.headers);
			} else
				In(h)
					? (l.set(w, h.deferredData),
					  (o[w] = h.deferredData.data),
					  h.statusCode != null &&
							h.statusCode !== 200 &&
							!c &&
							(s = h.statusCode),
					  h.headers && (f[w] = h.headers))
					: ((o[w] = h.data),
					  h.statusCode && h.statusCode !== 200 && !c && (s = h.statusCode),
					  h.headers && (f[w] = h.headers));
		}),
		d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
		{ loaderData: o, errors: a, statusCode: s || 200, loaderHeaders: f }
	);
}
function fd(e, t, n, r, l, i, o, a) {
	let { loaderData: s, errors: c } = N0(t, n, r, l, a, !1);
	for (let f = 0; f < i.length; f++) {
		let { key: d, match: h, controller: C } = i[f];
		b(
			o !== void 0 && o[f] !== void 0,
			'Did not find corresponding fetcher result'
		);
		let w = o[f];
		if (!(C && C.signal.aborted))
			if (rt(w)) {
				let E = fr(e.matches, h == null ? void 0 : h.route.id);
				(c && c[E.route.id]) || (c = ve({}, c, { [E.route.id]: w.error })),
					e.fetchers.delete(d);
			} else if (Fn(w)) b(!1, 'Unhandled fetcher revalidation redirect');
			else if (In(w)) b(!1, 'Unhandled fetcher deferred data');
			else {
				let E = rn(w.data);
				e.fetchers.set(d, E);
			}
	}
	return { loaderData: s, errors: c };
}
function pd(e, t, n, r) {
	let l = ve({}, t);
	for (let i of n) {
		let o = i.route.id;
		if (
			(t.hasOwnProperty(o)
				? t[o] !== void 0 && (l[o] = t[o])
				: e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
			r && r.hasOwnProperty(o))
		)
			break;
	}
	return l;
}
function hd(e) {
	return e
		? rt(e[1])
			? { actionData: {} }
			: { actionData: { [e[0]]: e[1].data } }
		: {};
}
function fr(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function md(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find((n) => n.index || !n.path || n.path === '/') || {
					id: '__shim-error-route__',
			  };
	return {
		matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
		route: t,
	};
}
function be(e, t) {
	let {
			pathname: n,
			routeId: r,
			method: l,
			type: i,
			message: o,
		} = t === void 0 ? {} : t,
		a = 'Unknown Server Error',
		s = 'Unknown @remix-run/router error';
	return (
		e === 400
			? ((a = 'Bad Request'),
			  i === 'route-discovery'
					? (s =
							'Unable to match URL "' +
							n +
							'" - the `unstable_patchRoutesOnMiss()` ' +
							(`function threw the following error:
` +
								o))
					: l && n && r
					? (s =
							'You made a ' +
							l +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: i === 'defer-action'
					? (s = 'defer() is not supported in actions')
					: i === 'invalid-body' && (s = 'Unable to encode submission body'))
			: e === 403
			? ((a = 'Forbidden'),
			  (s = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((a = 'Not Found'), (s = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((a = 'Method Not Allowed'),
			  l && n && r
					? (s =
							'You made a ' +
							l.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: l && (s = 'Invalid request method "' + l.toUpperCase() + '"')),
		new Qi(e || 500, a, new Error(s), !0)
	);
}
function vd(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Fn(n)) return { result: n, idx: t };
	}
}
function vh(e) {
	let t = typeof e == 'string' ? Jt(e) : e;
	return Wn(ve({}, t, { hash: '' }));
}
function T0(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
		? t.hash !== ''
		: e.hash === t.hash
		? !0
		: t.hash !== '';
}
function L0(e) {
	return typeof e == 'object' && e != null && 'then' in e;
}
function M0(e) {
	return yh(e.result) && m0.has(e.result.status);
}
function In(e) {
	return e.type === ae.deferred;
}
function rt(e) {
	return e.type === ae.error;
}
function Fn(e) {
	return (e && e.type) === ae.redirect;
}
function yd(e) {
	return (
		typeof e == 'object' &&
		e != null &&
		'type' in e &&
		'data' in e &&
		'init' in e &&
		e.type === 'DataWithResponseInit'
	);
}
function D0(e) {
	let t = e;
	return (
		t &&
		typeof t == 'object' &&
		typeof t.data == 'object' &&
		typeof t.subscribe == 'function' &&
		typeof t.cancel == 'function' &&
		typeof t.resolveData == 'function'
	);
}
function yh(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	);
}
function O0(e) {
	return h0.has(e.toLowerCase());
}
function Ct(e) {
	return f0.has(e.toLowerCase());
}
async function gd(e, t, n, r, l, i) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			s = t[o];
		if (!s) continue;
		let c = e.find((d) => d.route.id === s.route.id),
			f = c != null && !hh(c, s) && (i && i[s.route.id]) !== void 0;
		if (In(a) && (l || f)) {
			let d = r[o];
			b(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await gh(a, d, l).then((h) => {
					h && (n[o] = h || n[o]);
				});
		}
	}
}
async function gh(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: ae.data, data: e.deferredData.unwrappedData };
			} catch (l) {
				return { type: ae.error, error: l };
			}
		return { type: ae.data, data: e.deferredData.data };
	}
}
function Nu(e) {
	return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function qr(e, t) {
	let n = typeof t == 'string' ? Jt(t).search : t.search;
	if (e[e.length - 1].route.index && Nu(n || '')) return e[e.length - 1];
	let r = dh(e);
	return r[r.length - 1];
}
function wd(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: l,
		formData: i,
		json: o,
	} = e;
	if (!(!t || !n || !r)) {
		if (l != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: l,
			};
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: i,
				json: void 0,
				text: void 0,
			};
		if (o !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: o,
				text: void 0,
			};
	}
}
function ja(e, t) {
	return t
		? {
				state: 'loading',
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: 'loading',
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function I0(e, t) {
	return {
		state: 'submitting',
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function Kr(e, t) {
	return e
		? {
				state: 'loading',
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
		  }
		: {
				state: 'loading',
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
		  };
}
function F0(e, t) {
	return {
		state: 'submitting',
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	};
}
function rn(e) {
	return {
		state: 'idle',
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	};
}
function z0(e, t) {
	try {
		let n = e.sessionStorage.getItem(ph);
		if (n) {
			let r = JSON.parse(n);
			for (let [l, i] of Object.entries(r || {}))
				i && Array.isArray(i) && t.set(l, new Set(i || []));
		}
	} catch {}
}
function A0(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, l] of t) n[r] = [...l];
		try {
			e.sessionStorage.setItem(ph, JSON.stringify(n));
		} catch (r) {
			kr(
				!1,
				'Failed to save applied view transitions in sessionStorage (' + r + ').'
			);
		}
	}
}
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pl() {
	return (
		(Pl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Pl.apply(this, arguments)
	);
}
const Il = g.createContext(null),
	Tu = g.createContext(null),
	Zt = g.createContext(null),
	$o = g.createContext(null),
	It = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	wh = g.createContext(null);
function $0(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	Mr() || b(!1);
	let { basename: r, navigator: l } = g.useContext(Zt),
		{ hash: i, pathname: o, search: a } = Uo(e, { relative: n }),
		s = o;
	return (
		r !== '/' && (s = o === '/' ? r : Wt([r, o])),
		l.createHref({ pathname: s, search: a, hash: i })
	);
}
function Mr() {
	return g.useContext($o) != null;
}
function Dr() {
	return Mr() || b(!1), g.useContext($o).location;
}
function xh(e) {
	g.useContext(Zt).static || g.useLayoutEffect(e);
}
function _n() {
	let { isDataRoute: e } = g.useContext(It);
	return e ? q0() : U0();
}
function U0() {
	Mr() || b(!1);
	let e = g.useContext(Il),
		{ basename: t, future: n, navigator: r } = g.useContext(Zt),
		{ matches: l } = g.useContext(It),
		{ pathname: i } = Dr(),
		o = JSON.stringify(Fo(l, n.v7_relativeSplatPath)),
		a = g.useRef(!1);
	return (
		xh(() => {
			a.current = !0;
		}),
		g.useCallback(
			function (c, f) {
				if ((f === void 0 && (f = {}), !a.current)) return;
				if (typeof c == 'number') {
					r.go(c);
					return;
				}
				let d = zo(c, JSON.parse(o), i, f.relative === 'path');
				e == null &&
					t !== '/' &&
					(d.pathname = d.pathname === '/' ? t : Wt([t, d.pathname])),
					(f.replace ? r.replace : r.push)(d, f.state, f);
			},
			[t, r, o, i, e]
		)
	);
}
const V0 = g.createContext(null);
function B0(e) {
	let t = g.useContext(It).outlet;
	return t && g.createElement(V0.Provider, { value: e }, t);
}
function Rn() {
	let { matches: e } = g.useContext(It),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Uo(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = g.useContext(Zt),
		{ matches: l } = g.useContext(It),
		{ pathname: i } = Dr(),
		o = JSON.stringify(Fo(l, r.v7_relativeSplatPath));
	return g.useMemo(() => zo(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function H0(e, t, n, r) {
	Mr() || b(!1);
	let { navigator: l } = g.useContext(Zt),
		{ matches: i } = g.useContext(It),
		o = i[i.length - 1],
		a = o ? o.params : {};
	o && o.pathname;
	let s = o ? o.pathnameBase : '/';
	o && o.route;
	let c = Dr(),
		f;
	if (t) {
		var d;
		let R = typeof t == 'string' ? Jt(t) : t;
		s === '/' || ((d = R.pathname) != null && d.startsWith(s)) || b(!1),
			(f = R);
	} else f = c;
	let h = f.pathname || '/',
		C = h;
	if (s !== '/') {
		let R = s.replace(/^\//, '').split('/');
		C = '/' + h.replace(/^\//, '').split('/').slice(R.length).join('/');
	}
	let w = Ln(e, { pathname: C }),
		E = G0(
			w &&
				w.map((R) =>
					Object.assign({}, R, {
						params: Object.assign({}, a, R.params),
						pathname: Wt([
							s,
							l.encodeLocation
								? l.encodeLocation(R.pathname).pathname
								: R.pathname,
						]),
						pathnameBase:
							R.pathnameBase === '/'
								? s
								: Wt([
										s,
										l.encodeLocation
											? l.encodeLocation(R.pathnameBase).pathname
											: R.pathnameBase,
								  ]),
					})
				),
			i,
			n,
			r
		);
	return t && E
		? g.createElement(
				$o.Provider,
				{
					value: {
						location: Pl(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							f
						),
						navigationType: je.Pop,
					},
				},
				E
		  )
		: E;
}
function W0() {
	let e = Z0(),
		t = Ao(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		i = null;
	return g.createElement(
		g.Fragment,
		null,
		g.createElement('h2', null, 'Unexpected Application Error!'),
		g.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? g.createElement('pre', { style: l }, n) : null,
		i
	);
}
const b0 = g.createElement(W0, null);
class Q0 extends g.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			'React Router caught the following error during render',
			t,
			n
		);
	}
	render() {
		return this.state.error !== void 0
			? g.createElement(
					It.Provider,
					{ value: this.props.routeContext },
					g.createElement(wh.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function K0(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = g.useContext(Il);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		g.createElement(It.Provider, { value: t }, r)
	);
}
function G0(e, t, n, r) {
	var l;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var i;
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if (
			(i = r) != null &&
			i.v7_partialHydration &&
			t.length === 0 &&
			!n.initialized &&
			n.matches.length > 0
		)
			e = n.matches;
		else return null;
	}
	let o = e,
		a = (l = n) == null ? void 0 : l.errors;
	if (a != null) {
		let f = o.findIndex(
			(d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
		);
		f >= 0 || b(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
	}
	let s = !1,
		c = -1;
	if (n && r && r.v7_partialHydration)
		for (let f = 0; f < o.length; f++) {
			let d = o[f];
			if (
				((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = f),
				d.route.id)
			) {
				let { loaderData: h, errors: C } = n,
					w =
						d.route.loader &&
						h[d.route.id] === void 0 &&
						(!C || C[d.route.id] === void 0);
				if (d.route.lazy || w) {
					(s = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
					break;
				}
			}
		}
	return o.reduceRight((f, d, h) => {
		let C,
			w = !1,
			E = null,
			R = null;
		n &&
			((C = a && d.route.id ? a[d.route.id] : void 0),
			(E = d.route.errorElement || b0),
			s &&
				(c < 0 && h === 0
					? (e1('route-fallback', !1), (w = !0), (R = null))
					: c === h &&
					  ((w = !0), (R = d.route.hydrateFallbackElement || null))));
		let m = t.concat(o.slice(0, h + 1)),
			p = () => {
				let v;
				return (
					C
						? (v = E)
						: w
						? (v = R)
						: d.route.Component
						? (v = g.createElement(d.route.Component, null))
						: d.route.element
						? (v = d.route.element)
						: (v = f),
					g.createElement(K0, {
						match: d,
						routeContext: { outlet: f, matches: m, isDataRoute: n != null },
						children: v,
					})
				);
			};
		return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
			? g.createElement(Q0, {
					location: n.location,
					revalidation: n.revalidation,
					component: E,
					error: C,
					children: p(),
					routeContext: { outlet: null, matches: m, isDataRoute: !0 },
			  })
			: p();
	}, null);
}
var Sh = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			e
		);
	})(Sh || {}),
	Ki = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseLoaderData = 'useLoaderData'),
			(e.UseActionData = 'useActionData'),
			(e.UseRouteError = 'useRouteError'),
			(e.UseNavigation = 'useNavigation'),
			(e.UseRouteLoaderData = 'useRouteLoaderData'),
			(e.UseMatches = 'useMatches'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			(e.UseRouteId = 'useRouteId'),
			e
		);
	})(Ki || {});
function Y0(e) {
	let t = g.useContext(Il);
	return t || b(!1), t;
}
function X0(e) {
	let t = g.useContext(Tu);
	return t || b(!1), t;
}
function J0(e) {
	let t = g.useContext(It);
	return t || b(!1), t;
}
function Eh(e) {
	let t = J0(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || b(!1), n.route.id;
}
function Z0() {
	var e;
	let t = g.useContext(wh),
		n = X0(Ki.UseRouteError),
		r = Eh(Ki.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function q0() {
	let { router: e } = Y0(Sh.UseNavigateStable),
		t = Eh(Ki.UseNavigateStable),
		n = g.useRef(!1);
	return (
		xh(() => {
			n.current = !0;
		}),
		g.useCallback(
			function (l, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof l == 'number'
							? e.navigate(l)
							: e.navigate(l, Pl({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
const xd = {};
function e1(e, t, n) {
	!t && !xd[e] && (xd[e] = !0);
}
function jh(e) {
	let { to: t, replace: n, state: r, relative: l } = e;
	Mr() || b(!1);
	let { future: i, static: o } = g.useContext(Zt),
		{ matches: a } = g.useContext(It),
		{ pathname: s } = Dr(),
		c = _n(),
		f = zo(t, Fo(a, i.v7_relativeSplatPath), s, l === 'path'),
		d = JSON.stringify(f);
	return (
		g.useEffect(
			() => c(JSON.parse(d), { replace: n, state: r, relative: l }),
			[c, d, l, n, r]
		),
		null
	);
}
function t1(e) {
	return B0(e.context);
}
function n1(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = je.Pop,
		navigator: i,
		static: o = !1,
		future: a,
	} = e;
	Mr() && b(!1);
	let s = t.replace(/^\/*/, '/'),
		c = g.useMemo(
			() => ({
				basename: s,
				navigator: i,
				static: o,
				future: Pl({ v7_relativeSplatPath: !1 }, a),
			}),
			[s, a, i, o]
		);
	typeof r == 'string' && (r = Jt(r));
	let {
			pathname: f = '/',
			search: d = '',
			hash: h = '',
			state: C = null,
			key: w = 'default',
		} = r,
		E = g.useMemo(() => {
			let R = Yt(f, s);
			return R == null
				? null
				: {
						location: { pathname: R, search: d, hash: h, state: C, key: w },
						navigationType: l,
				  };
		}, [s, f, d, h, C, w, l]);
	return E == null
		? null
		: g.createElement(
				Zt.Provider,
				{ value: c },
				g.createElement($o.Provider, { children: n, value: E })
		  );
}
new Promise(() => {});
function r1(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: g.createElement(e.Component),
				Component: void 0,
			}),
		e.HydrateFallback &&
			Object.assign(t, {
				hydrateFallbackElement: g.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: g.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pr() {
	return (
		(Pr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Pr.apply(this, arguments)
	);
}
function Ch(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		i;
	for (i = 0; i < r.length; i++)
		(l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function l1(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function i1(e, t) {
	return e.button === 0 && (!t || t === '_self') && !l1(e);
}
const o1 = [
		'onClick',
		'relative',
		'reloadDocument',
		'replace',
		'state',
		'target',
		'to',
		'preventScrollReset',
		'unstable_viewTransition',
	],
	a1 = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'unstable_viewTransition',
		'children',
	],
	s1 = '6';
try {
	window.__reactRouterVersion = s1;
} catch {}
function u1(e, t) {
	return w0({
		basename: t == null ? void 0 : t.basename,
		future: Pr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: Hg({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || c1(),
		routes: e,
		mapRouteProperties: r1,
		unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
		unstable_patchRoutesOnMiss:
			t == null ? void 0 : t.unstable_patchRoutesOnMiss,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function c1() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = Pr({}, t, { errors: d1(t.errors) })), t;
}
function d1(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === 'RouteErrorResponse')
			n[r] = new Qi(l.status, l.statusText, l.data, l.internal === !0);
		else if (l && l.__type === 'Error') {
			if (l.__subType) {
				let i = window[l.__subType];
				if (typeof i == 'function')
					try {
						let o = new i(l.message);
						(o.stack = ''), (n[r] = o);
					} catch {}
			}
			if (n[r] == null) {
				let i = new Error(l.message);
				(i.stack = ''), (n[r] = i);
			}
		} else n[r] = l;
	return n;
}
const _h = g.createContext({ isTransitioning: !1 }),
	f1 = g.createContext(new Map()),
	p1 = 'startTransition',
	Sd = Bm[p1],
	h1 = 'flushSync',
	Ed = Zy[h1];
function m1(e) {
	Sd ? Sd(e) : e();
}
function Gr(e) {
	Ed ? Ed(e) : e();
}
class v1 {
	constructor() {
		(this.status = 'pending'),
			(this.promise = new Promise((t, n) => {
				(this.resolve = (r) => {
					this.status === 'pending' && ((this.status = 'resolved'), t(r));
				}),
					(this.reject = (r) => {
						this.status === 'pending' && ((this.status = 'rejected'), n(r));
					});
			}));
	}
}
function y1(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, i] = g.useState(n.state),
		[o, a] = g.useState(),
		[s, c] = g.useState({ isTransitioning: !1 }),
		[f, d] = g.useState(),
		[h, C] = g.useState(),
		[w, E] = g.useState(),
		R = g.useRef(new Map()),
		{ v7_startTransition: m } = r || {},
		p = g.useCallback(
			(T) => {
				m ? m1(T) : T();
			},
			[m]
		),
		v = g.useCallback(
			(T, z) => {
				let {
					deletedFetchers: I,
					unstable_flushSync: G,
					unstable_viewTransitionOpts: te,
				} = z;
				I.forEach((Z) => R.current.delete(Z)),
					T.fetchers.forEach((Z, Me) => {
						Z.data !== void 0 && R.current.set(Me, Z.data);
					});
				let B =
					n.window == null ||
					n.window.document == null ||
					typeof n.window.document.startViewTransition != 'function';
				if (!te || B) {
					G ? Gr(() => i(T)) : p(() => i(T));
					return;
				}
				if (G) {
					Gr(() => {
						h && (f && f.resolve(), h.skipTransition()),
							c({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: te.currentLocation,
								nextLocation: te.nextLocation,
							});
					});
					let Z = n.window.document.startViewTransition(() => {
						Gr(() => i(T));
					});
					Z.finished.finally(() => {
						Gr(() => {
							d(void 0), C(void 0), a(void 0), c({ isTransitioning: !1 });
						});
					}),
						Gr(() => C(Z));
					return;
				}
				h
					? (f && f.resolve(),
					  h.skipTransition(),
					  E({
							state: T,
							currentLocation: te.currentLocation,
							nextLocation: te.nextLocation,
					  }))
					: (a(T),
					  c({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: te.currentLocation,
							nextLocation: te.nextLocation,
					  }));
			},
			[n.window, h, f, R, p]
		);
	g.useLayoutEffect(() => n.subscribe(v), [n, v]),
		g.useEffect(() => {
			s.isTransitioning && !s.flushSync && d(new v1());
		}, [s]),
		g.useEffect(() => {
			if (f && o && n.window) {
				let T = o,
					z = f.promise,
					I = n.window.document.startViewTransition(async () => {
						p(() => i(T)), await z;
					});
				I.finished.finally(() => {
					d(void 0), C(void 0), a(void 0), c({ isTransitioning: !1 });
				}),
					C(I);
			}
		}, [p, o, f, n.window]),
		g.useEffect(() => {
			f && o && l.location.key === o.location.key && f.resolve();
		}, [f, h, l.location, o]),
		g.useEffect(() => {
			!s.isTransitioning &&
				w &&
				(a(w.state),
				c({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: w.currentLocation,
					nextLocation: w.nextLocation,
				}),
				E(void 0));
		}, [s.isTransitioning, w]),
		g.useEffect(() => {}, []);
	let j = g.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (T) => n.navigate(T),
				push: (T, z, I) =>
					n.navigate(T, {
						state: z,
						preventScrollReset: I == null ? void 0 : I.preventScrollReset,
					}),
				replace: (T, z, I) =>
					n.navigate(T, {
						replace: !0,
						state: z,
						preventScrollReset: I == null ? void 0 : I.preventScrollReset,
					}),
			}),
			[n]
		),
		N = n.basename || '/',
		x = g.useMemo(
			() => ({ router: n, navigator: j, static: !1, basename: N }),
			[n, j, N]
		),
		P = g.useMemo(
			() => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
			[n.future.v7_relativeSplatPath]
		);
	return g.createElement(
		g.Fragment,
		null,
		g.createElement(
			Il.Provider,
			{ value: x },
			g.createElement(
				Tu.Provider,
				{ value: l },
				g.createElement(
					f1.Provider,
					{ value: R.current },
					g.createElement(
						_h.Provider,
						{ value: s },
						g.createElement(
							n1,
							{
								basename: N,
								location: l.location,
								navigationType: l.historyAction,
								navigator: j,
								future: P,
							},
							l.initialized || n.future.v7_partialHydration
								? g.createElement(g1, {
										routes: n.routes,
										future: n.future,
										state: l,
								  })
								: t
						)
					)
				)
			)
		),
		null
	);
}
const g1 = g.memo(w1);
function w1(e) {
	let { routes: t, future: n, state: r } = e;
	return H0(t, void 0, r, n);
}
const x1 =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	S1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Vo = g.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: i,
				replace: o,
				state: a,
				target: s,
				to: c,
				preventScrollReset: f,
				unstable_viewTransition: d,
			} = t,
			h = Ch(t, o1),
			{ basename: C } = g.useContext(Zt),
			w,
			E = !1;
		if (typeof c == 'string' && S1.test(c) && ((w = c), x1))
			try {
				let v = new URL(window.location.href),
					j = c.startsWith('//') ? new URL(v.protocol + c) : new URL(c),
					N = Yt(j.pathname, C);
				j.origin === v.origin && N != null
					? (c = N + j.search + j.hash)
					: (E = !0);
			} catch {}
		let R = $0(c, { relative: l }),
			m = C1(c, {
				replace: o,
				state: a,
				target: s,
				preventScrollReset: f,
				relative: l,
				unstable_viewTransition: d,
			});
		function p(v) {
			r && r(v), v.defaultPrevented || m(v);
		}
		return g.createElement(
			'a',
			Pr({}, h, { href: w || R, onClick: E || i ? r : p, ref: n, target: s })
		);
	}),
	E1 = g.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: l = !1,
				className: i = '',
				end: o = !1,
				style: a,
				to: s,
				unstable_viewTransition: c,
				children: f,
			} = t,
			d = Ch(t, a1),
			h = Uo(s, { relative: d.relative }),
			C = Dr(),
			w = g.useContext(Tu),
			{ navigator: E, basename: R } = g.useContext(Zt),
			m = w != null && _1(h) && c === !0,
			p = E.encodeLocation ? E.encodeLocation(h).pathname : h.pathname,
			v = C.pathname,
			j =
				w && w.navigation && w.navigation.location
					? w.navigation.location.pathname
					: null;
		l ||
			((v = v.toLowerCase()),
			(j = j ? j.toLowerCase() : null),
			(p = p.toLowerCase())),
			j && R && (j = Yt(j, R) || j);
		const N = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length;
		let x = v === p || (!o && v.startsWith(p) && v.charAt(N) === '/'),
			P =
				j != null &&
				(j === p || (!o && j.startsWith(p) && j.charAt(p.length) === '/')),
			T = { isActive: x, isPending: P, isTransitioning: m },
			z = x ? r : void 0,
			I;
		typeof i == 'function'
			? (I = i(T))
			: (I = [
					i,
					x ? 'active' : null,
					P ? 'pending' : null,
					m ? 'transitioning' : null,
			  ]
					.filter(Boolean)
					.join(' '));
		let G = typeof a == 'function' ? a(T) : a;
		return g.createElement(
			Vo,
			Pr({}, d, {
				'aria-current': z,
				className: I,
				ref: n,
				style: G,
				to: s,
				unstable_viewTransition: c,
			}),
			typeof f == 'function' ? f(T) : f
		);
	});
var Cs;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState');
})(Cs || (Cs = {}));
var jd;
(function (e) {
	(e.UseFetcher = 'useFetcher'),
		(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(jd || (jd = {}));
function j1(e) {
	let t = g.useContext(Il);
	return t || b(!1), t;
}
function C1(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: i,
			relative: o,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		s = _n(),
		c = Dr(),
		f = Uo(e, { relative: o });
	return g.useCallback(
		(d) => {
			if (i1(d, n)) {
				d.preventDefault();
				let h = r !== void 0 ? r : Wn(c) === Wn(f);
				s(e, {
					replace: h,
					state: l,
					preventScrollReset: i,
					relative: o,
					unstable_viewTransition: a,
				});
			}
		},
		[c, s, f, r, l, n, e, i, o, a]
	);
}
function _1(e, t) {
	t === void 0 && (t = {});
	let n = g.useContext(_h);
	n == null && b(!1);
	let { basename: r } = j1(Cs.useViewTransitionState),
		l = Uo(e, { relative: t.relative });
	if (!n.isTransitioning) return !1;
	let i = Yt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		o = Yt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return bi(l.pathname, o) != null || bi(l.pathname, i) != null;
}
function Nl(e) {
	'@babel/helpers - typeof';
	return (
		(Nl =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t;
				  }),
		Nl(e)
	);
}
function R1(e, t) {
	if (Nl(e) !== 'object' || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || 'default');
		if (Nl(r) !== 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
function k1(e) {
	var t = R1(e, 'string');
	return Nl(t) === 'symbol' ? t : String(t);
}
function P1(e, t, n) {
	return (
		(t = k1(t)),
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function Cd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (l) {
				return Object.getOwnPropertyDescriptor(e, l).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function _d(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Cd(Object(n), !0).forEach(function (r) {
					P1(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Cd(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function Ue(e) {
	return (
		'Minified Redux error #' +
		e +
		'; visit https://redux.js.org/Errors?code=' +
		e +
		' for the full message or use the non-minified dev environment for full errors. '
	);
}
var Rd = (function () {
		return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
	})(),
	Ca = function () {
		return Math.random().toString(36).substring(7).split('').join('.');
	},
	Gi = {
		INIT: '@@redux/INIT' + Ca(),
		REPLACE: '@@redux/REPLACE' + Ca(),
		PROBE_UNKNOWN_ACTION: function () {
			return '@@redux/PROBE_UNKNOWN_ACTION' + Ca();
		},
	};
function N1(e) {
	if (typeof e != 'object' || e === null) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null; )
		t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function Rh(e, t, n) {
	var r;
	if (
		(typeof t == 'function' && typeof n == 'function') ||
		(typeof n == 'function' && typeof arguments[3] == 'function')
	)
		throw new Error(Ue(0));
	if (
		(typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
		typeof n < 'u')
	) {
		if (typeof n != 'function') throw new Error(Ue(1));
		return n(Rh)(e, t);
	}
	if (typeof e != 'function') throw new Error(Ue(2));
	var l = e,
		i = t,
		o = [],
		a = o,
		s = !1;
	function c() {
		a === o && (a = o.slice());
	}
	function f() {
		if (s) throw new Error(Ue(3));
		return i;
	}
	function d(E) {
		if (typeof E != 'function') throw new Error(Ue(4));
		if (s) throw new Error(Ue(5));
		var R = !0;
		return (
			c(),
			a.push(E),
			function () {
				if (R) {
					if (s) throw new Error(Ue(6));
					(R = !1), c();
					var p = a.indexOf(E);
					a.splice(p, 1), (o = null);
				}
			}
		);
	}
	function h(E) {
		if (!N1(E)) throw new Error(Ue(7));
		if (typeof E.type > 'u') throw new Error(Ue(8));
		if (s) throw new Error(Ue(9));
		try {
			(s = !0), (i = l(i, E));
		} finally {
			s = !1;
		}
		for (var R = (o = a), m = 0; m < R.length; m++) {
			var p = R[m];
			p();
		}
		return E;
	}
	function C(E) {
		if (typeof E != 'function') throw new Error(Ue(10));
		(l = E), h({ type: Gi.REPLACE });
	}
	function w() {
		var E,
			R = d;
		return (
			(E = {
				subscribe: function (p) {
					if (typeof p != 'object' || p === null) throw new Error(Ue(11));
					function v() {
						p.next && p.next(f());
					}
					v();
					var j = R(v);
					return { unsubscribe: j };
				},
			}),
			(E[Rd] = function () {
				return this;
			}),
			E
		);
	}
	return (
		h({ type: Gi.INIT }),
		(r = { dispatch: h, subscribe: d, getState: f, replaceReducer: C }),
		(r[Rd] = w),
		r
	);
}
var T1 = Rh;
function L1(e) {
	Object.keys(e).forEach(function (t) {
		var n = e[t],
			r = n(void 0, { type: Gi.INIT });
		if (typeof r > 'u') throw new Error(Ue(12));
		if (typeof n(void 0, { type: Gi.PROBE_UNKNOWN_ACTION() }) > 'u')
			throw new Error(Ue(13));
	});
}
function M1(e) {
	for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
		var l = t[r];
		typeof e[l] == 'function' && (n[l] = e[l]);
	}
	var i = Object.keys(n),
		o;
	try {
		L1(n);
	} catch (a) {
		o = a;
	}
	return function (s, c) {
		if ((s === void 0 && (s = {}), o)) throw o;
		for (var f = !1, d = {}, h = 0; h < i.length; h++) {
			var C = i[h],
				w = n[C],
				E = s[C],
				R = w(E, c);
			if (typeof R > 'u') throw (c && c.type, new Error(Ue(14)));
			(d[C] = R), (f = f || R !== E);
		}
		return (f = f || i.length !== Object.keys(s).length), f ? d : s;
	};
}
function D1() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return t.length === 0
		? function (r) {
				return r;
		  }
		: t.length === 1
		? t[0]
		: t.reduce(function (r, l) {
				return function () {
					return r(l.apply(void 0, arguments));
				};
		  });
}
function O1() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return function (r) {
		return function () {
			var l = r.apply(void 0, arguments),
				i = function () {
					throw new Error(Ue(15));
				},
				o = {
					getState: l.getState,
					dispatch: function () {
						return i.apply(void 0, arguments);
					},
				},
				a = t.map(function (s) {
					return s(o);
				});
			return (
				(i = D1.apply(void 0, a)(l.dispatch)),
				_d(_d({}, l), {}, { dispatch: i })
			);
		};
	};
}
function kh(e) {
	var t = function (r) {
		var l = r.dispatch,
			i = r.getState;
		return function (o) {
			return function (a) {
				return typeof a == 'function' ? a(l, i, e) : o(a);
			};
		};
	};
	return t;
}
var Ph = kh();
Ph.withExtraArgument = kh;
const I1 = Ph,
	Nh = 'session/setUser',
	Th = 'session/removeUser',
	Lu = (e) => ({ type: Nh, payload: e }),
	F1 = () => ({ type: Th }),
	z1 = () => async (e) => {
		const t = await fetch('/api/auth/');
		if (t.ok) {
			const n = await t.json();
			if (n.errors) return;
			e(Lu(n));
		}
	},
	_s = (e) => async (t) => {
		const n = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e),
		});
		if (n.ok) {
			const r = await n.json();
			t(Lu(r));
		} else
			return n.status < 500
				? await n.json()
				: { server: 'Something went wrong. Please try again' };
	},
	Lh = (e) => async (t) => {
		try {
			const n = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(e),
			});
			if (n.ok) {
				const r = await n.json();
				return t(Lu(r)), {};
			} else return await n.json();
		} catch {
			return { error: 'Something went wrong. Please try again' };
		}
	},
	A1 = () => async (e) => {
		await fetch('/api/auth/logout'), e(F1());
	},
	$1 = { user: null };
function U1(e = $1, t) {
	switch (t.type) {
		case Nh:
			return { ...e, user: t.payload };
		case Th:
			return { ...e, user: null };
		default:
			return e;
	}
}
const Mh = 'menuItems/GET_MENU_ITEMS',
	Dh = 'menuItems/ADD_MENU_ITEMS',
	Oh = 'menuItems/DELETE_MENU_ITEM',
	V1 = 'menuItems/GET_EVERY_ITEM',
	B1 = (e) => ({ type: Mh, payload: e }),
	H1 = (e) => ({ type: Dh, payload: e }),
	W1 = (e) => ({ type: Oh, payload: e }),
	b1 = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}/menu-items`);
		if (n.ok) {
			const r = await n.json();
			t(B1(r));
		}
	},
	Q1 = (e, t) => async (n) => {
		try {
			const r = await fetch(`/api/restaurants/${e}/menu-items/new`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(t),
			});
			if (r.ok) {
				const l = await r.json();
				n(H1(l));
			} else {
				const l = await r.json();
				console.error('Error adding menu item:', l);
			}
		} catch (r) {
			console.error('Failed to add menu item:', r);
		}
	},
	K1 = (e) => async (t) => {
		try {
			const n = await fetch(`/api/menu-items/${e}`, { method: 'DELETE' });
			if (n.ok) t(W1(e));
			else {
				const r = await n.json();
				console.error('Error deleting menu item:', r);
			}
		} catch (n) {
			console.error('Failed to delete menu item:', n);
		}
	}; //!---------------------------------- INITIAL STATE
const G1 = { itemArr: [], allArr: [] }; //!---------------------------------- REDUCER
const Y1 = (e = G1, t) => {
		switch (t.type) {
			case V1:
				return { ...e, allArr: t.payload };
			case Mh:
				return { ...e, itemArr: t.payload };
			case Dh:
				return { ...e, itemArr: [...e.itemArr, t.payload] };
			case Oh:
				return { ...e, itemArr: e.itemArr.filter((n) => n.id !== t.payload) };
			default:
				return e;
		}
	},
	Ih = 'shoppingCart/GET_CART_ITEMS',
	Fh = 'cart/REMOVE_CART_ITEM',
	zh = 'cart/ADD_CART_ITEM',
	Ah = 'cart/CLEAR_CART_ITEMS',
	$h = 'cart/RESET_CART',
	X1 = (e) => ({ type: Ih, payload: e }),
	J1 = (e) => ({ type: Fh, payload: e }),
	Rs = (e) => ({ type: zh, payload: e }),
	Uh = () => ({ type: Ah }),
	Z1 = () => ({ type: $h }),
	_a = () => async (e, t) => {
		if (t().session.user) {
			const l = await fetch('/api/shopping-cart/current');
			if (l.ok) {
				const i = await l.json();
				e(X1(i));
			}
		} else e(Uh());
	},
	q1 = (e) => async (t, n) => {
		const l = n().shoppingCart.items.find((i) => i.id === e);
		if (l && l.item_quantity > 1) {
			const i = await fetch(`/api/shopping-cart/current/${e}/update`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ decrement: !0 }),
			});
			if (i.ok) {
				const o = await i.json();
				t(Rs(o));
			}
		} else
			(
				await fetch(`/api/shopping-cart/current/${e}/remove`, {
					method: 'DELETE',
				})
			).ok && t(J1(e));
	},
	Vh = (e) => async (t, n) => {
		const l = n().shoppingCart.items.find((i) => i.menu_item_id === e);
		if (l) {
			const i = await fetch(`/api/shopping-cart/current/${l.id}/update`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ decrement: !1 }),
			});
			if ((console.log('THIS IS THE RESPONSE FOR UPDATE ITEM!', i), i.ok)) {
				const o = await i.json();
				t(Rs(o));
			}
		} else {
			const i = await fetch('/api/shopping-cart/current/new', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ menu_item_id: e }),
			});
			if ((console.log('THIS IS THE RESPONSE FOR NEW ITEM!', i), i.ok)) {
				const o = await i.json();
				t(Rs(o));
			}
		}
	},
	ew = { items: [] },
	tw = (e = ew, t) => {
		switch (t.type) {
			case Ih:
				return { ...e, items: t.payload.cart_items };
			case Fh:
				return { ...e, items: e.items.filter((n) => n.id !== t.payload) };
			case zh:
				return e.items.find((r) => r.menu_item_id === t.payload.menu_item_id)
					? {
							...e,
							items: e.items.map((r) =>
								r.menu_item_id === t.payload.menu_item_id
									? { ...r, item_quantity: t.payload.item_quantity }
									: r
							),
					  }
					: { ...e, items: [...e.items, t.payload] };
			case Ah:
				return { ...e, items: [] };
			case $h:
				return { ...e, items: [] };
			default:
				return e;
		}
	},
	Bh = '/restaurants/categories/GET_ALL_CATEGORIES',
	Hh = '/restaurants/GET_RESTAURANTS',
	Wh = 'restaurants/GET_A_RESTAURANT',
	bh = '/restaurants/ADD_OR_UPDATE_RESTAURANT',
	Qh = '/restaurants/DELETE_RESTAURANT',
	Kh = 'restaurants/SET_SELECTED_CATEGORY';
function nw(e) {
	return { type: Bh, payload: e };
}
function rw(e) {
	return { type: Hh, payload: e };
}
function lw(e) {
	return { type: Wh, payload: e };
}
function Gh(e) {
	return { type: bh, payload: e };
}
function iw(e) {
	return { type: Qh, payload: e };
}
const Ra = (e) => ({ type: Kh, payload: e }),
	Yh = () => async (e) => {
		const t = await fetch('/api/restaurants/categories');
		if (t.ok) {
			const n = await t.json();
			return e(nw(n)), n;
		} else return 'Error';
	},
	Fl = () => async (e) => {
		const t = await fetch('/api/restaurants');
		if (t.ok) {
			const n = await t.json();
			return e(rw(n)), n;
		} else return 'Error: No Restaurants';
	},
	ow = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}`);
		if (n.ok) {
			const r = await n.json();
			return t(lw(r)), r;
		} else return 'Error: No Restaurants';
	},
	aw = (e, t) => async (n) => {
		const s = await (
			await fetch('/api/restaurants/new', {
				method: e,
				headers: { 'Content-Type': 'application/json' },
				body: t,
			})
		).json();
		return n(Gh(s)), s;
	},
	sw = (e, t, n) => async (r) => {
		const l = `/api/restaurants/current/${e}`,
			c = await (
				await fetch(l, {
					method: t,
					headers: { 'Content-Type': 'application/json' },
					body: n,
				})
			).json();
		return console.log('>>> data from flask UPDATE route:', c), r(Gh(c)), c;
	},
	uw = (e) => async (t) => {
		const n = `/api/restaurants/${e}`,
			i = await fetch(n, { method: 'DELETE' });
		if (i.ok) t(iw(e));
		else return { message: 'Error deleting restaurant' };
		return await i.json();
	},
	cw = {
		allCategories: [],
		AllRestaurants: {},
		selectedRestaurant: {},
		selectedCategory: null,
	},
	dw = (e = cw, t) => {
		switch (t.type) {
			case Bh:
				return { ...e, allCategories: t.payload };
			case Hh: {
				const n = { AllRestaurants: {} };
				return (
					t.payload.forEach((r) => {
						n.AllRestaurants[r.id] = r;
					}),
					{ ...e, ...n }
				);
			}
			case Wh:
				return { ...e, selectedRestaurant: t.payload };
			case bh: {
				const n = { ...e },
					r = t.payload;
				return (n.AllRestaurants[r.id] = r), n;
			}
			case Qh: {
				const n = { ...e },
					r = t.payload;
				return delete n.AllRestaurants[r], n;
			}
			case Kh:
				return { ...e, selectedCategory: t.payload };
			default:
				return e;
		}
	},
	Xh = 'reviewsList/GET_ALL_REVIEWS',
	Jh = 'reviewsList/GET_REVIEW_SUMMARY',
	Zh = 'reviewsList/CREATE_REVIEW',
	qh = 'reviewsList/DELETE_REVIEW',
	em = 'reviewsList/EDIT_REVIEW',
	tm = 'reviewsList/SINGLE_REVIEW',
	fw = (e) => ({ type: Xh, payload: e }),
	pw = (e) => ({ type: tm, payload: e }),
	hw = (e) => ({ type: Jh, payload: e }),
	mw = (e) => ({ type: Zh, payload: e }),
	vw = (e) => ({ type: em, payload: e }),
	yw = (e) => ({ type: qh, payload: e }),
	Or = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}/reviews`);
		if (n.ok) {
			const r = await n.json();
			t(fw(r));
		}
	},
	gw = (e) => async (t) => {
		const n = await fetch(`/api/reviews/${e}`);
		if (n.ok) {
			const r = await n.json();
			return t(pw(r)), r;
		} else
			throw (
				(console.error('Failed to fetch single review'),
				new Error('Failed to fetch review data'))
			);
	},
	ww = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}/totalreviews`);
		if (n.ok) {
			const r = await n.json();
			return t(hw(r)), r;
		}
	},
	xw = (e, t) => async (n) => {
		const r = await fetch(`/api/restaurants/${t}/reviews`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e),
		});
		if (r.ok) {
			const l = await r.json();
			return (
				n(mw(l)),
				console.log('>>>>>>>>>>>>>>>>>>>>>> data from FLASK route', l),
				l
			);
		}
	},
	Sw = (e, t) => async (n) => {
		const r = await fetch(`/api/reviews/${t}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e),
		});
		if (r.ok) {
			const l = await r.json();
			return n(vw(l)), l;
		}
	},
	Ew = (e) => async (t) => {
		(await fetch(`/api/reviews/${e}`, { method: 'DELETE' })).ok && t(yw(e));
	},
	jw = {
		reviewsListArr: [],
		singleReview: {},
		reviewSummary: {},
		createReview: {},
		editReview: {},
	},
	Cw = (e = jw, t) => {
		switch (t.type) {
			case Xh:
				return { ...e, reviewsListArr: t.payload };
			case tm:
				return { ...e, singleReview: t.payload };
			case Jh:
				return { ...e, reviewSummary: t.payload };
			case Zh:
				return { ...e, reviewsListArr: [...e.reviewsListArr, t.payload] };
			case em:
				return {
					...e,
					reviewsListArr: e.reviewsListArr.map((n) =>
						n.id === t.payload.id ? t.payload : n
					),
				};
			case qh:
				return {
					...e,
					reviewsListArr: e.reviewsListArr.filter((n) => n.id !== t.payload),
				};
			default:
				return e;
		}
	},
	nm = 'location/SAVE_LOCATION',
	_w = (e) => (console.log('INSIDE ACTION CREATOR'), { type: nm, location: e }),
	Rw = { state: '', city: '' },
	kw = (e = Rw, t) => {
		switch (t.type) {
			case nm:
				return (
					console.log('Reducer: Saving location', t.location),
					{ ...e, state: t.location.state, city: t.location.city }
				);
			default:
				return e;
		}
	},
	rm = 'menuItemRating/GET_ALL_RATINGS',
	Pw = 'menuItemRating/ADD_RATING',
	Nw = (e) => ({ type: rm, payload: e }),
	Tw = (e) => async (t) => {
		const n = await fetch(`/api/menu-items/${e}/ratings`);
		if (n.ok) {
			const r = await n.json();
			t(Nw(r));
		}
	},
	Lw = { getMenuItemRating: {}, createMenuItemRating: {} },
	Mw = (e = Lw, t) => {
		switch (t.type) {
			case rm:
				return { ...e, getMenuItemRating: t.payload };
			case Pw:
				return { ...e, createMenuItemRating: t.payload };
			default:
				return e;
		}
	},
	Dw = M1({
		session: U1,
		restaurants: dw,
		menuItems: Y1,
		shoppingCart: tw,
		reviewsList: Cw,
		location: kw,
		menuItemRating: Mw,
	});
let lm;
lm = O1(I1);
const Ow = (e) => T1(Dw, e, lm);
function Iw() {
	const e = _n(),
		t = Ee(),
		n = ee((f) => f.session.user),
		[r, l] = g.useState(''),
		[i, o] = g.useState(''),
		[a, s] = g.useState({});
	if (n) return u.jsx(jh, { to: '/', replace: !0 });
	const c = async (f) => {
		f.preventDefault();
		const d = await t(_s({ email: r, password: i }));
		d ? s(d) : e('/');
	};
	return u.jsxs(u.Fragment, {
		children: [
			u.jsx('h1', { children: 'Log In' }),
			a.length > 0 && a.map((f) => u.jsx('p', { children: f }, f)),
			u.jsxs('form', {
				onSubmit: c,
				children: [
					u.jsxs('label', {
						children: [
							'Email',
							u.jsx('input', {
								type: 'text',
								value: r,
								onChange: (f) => l(f.target.value),
								required: !0,
							}),
						],
					}),
					a.email && u.jsx('p', { children: a.email }),
					u.jsxs('label', {
						children: [
							'Password',
							u.jsx('input', {
								type: 'password',
								value: i,
								onChange: (f) => o(f.target.value),
								required: !0,
							}),
						],
					}),
					a.password && u.jsx('p', { children: a.password }),
					u.jsx('button', { type: 'submit', children: 'Log In' }),
				],
			}),
		],
	});
}
function Fw() {
	const e = Ee(),
		t = _n(),
		n = ee((w) => w.session.user),
		[r, l] = g.useState(''),
		[i, o] = g.useState(''),
		[a, s] = g.useState(''),
		[c, f] = g.useState(''),
		[d, h] = g.useState({});
	if (n) return u.jsx(jh, { to: '/', replace: !0 });
	const C = async (w) => {
		if ((w.preventDefault(), a !== c))
			return h({
				confirmPassword:
					'Confirm Password field must be the same as the Password field',
			});
		const E = await e(Lh({ email: r, username: i, password: a }));
		E ? h(E) : t('/');
	};
	return u.jsxs(u.Fragment, {
		children: [
			u.jsx('h1', { children: 'Sign Up' }),
			d.server && u.jsx('p', { children: d.server }),
			u.jsxs('form', {
				onSubmit: C,
				children: [
					u.jsxs('label', {
						children: [
							'Email',
							u.jsx('input', {
								type: 'text',
								value: r,
								onChange: (w) => l(w.target.value),
								required: !0,
							}),
						],
					}),
					d.email && u.jsx('p', { children: d.email }),
					u.jsxs('label', {
						children: [
							'Username',
							u.jsx('input', {
								type: 'text',
								value: i,
								onChange: (w) => o(w.target.value),
								required: !0,
							}),
						],
					}),
					d.username && u.jsx('p', { children: d.username }),
					u.jsxs('label', {
						children: [
							'Password',
							u.jsx('input', {
								type: 'password',
								value: a,
								onChange: (w) => s(w.target.value),
								required: !0,
							}),
						],
					}),
					d.password && u.jsx('p', { children: d.password }),
					u.jsxs('label', {
						children: [
							'Confirm Password',
							u.jsx('input', {
								type: 'password',
								value: c,
								onChange: (w) => f(w.target.value),
								required: !0,
							}),
						],
					}),
					d.confirmPassword && u.jsx('p', { children: d.confirmPassword }),
					u.jsx('button', { type: 'submit', children: 'Sign Up' }),
				],
			}),
		],
	});
}
const Mu = g.createContext();
function zw({ children: e }) {
	const t = g.useRef(),
		[n, r] = g.useState(null),
		[l, i] = g.useState(null),
		a = {
			modalRef: t,
			modalContent: n,
			setModalContent: r,
			setOnModalClose: i,
			closeModal: () => {
				r(null), typeof l == 'function' && (i(null), l());
			},
		};
	return u.jsxs(u.Fragment, {
		children: [
			u.jsx(Mu.Provider, { value: a, children: e }),
			u.jsx('div', { ref: t }),
		],
	});
}
function Aw() {
	const { modalRef: e, modalContent: t, closeModal: n } = g.useContext(Mu);
	return !e || !e.current || !t
		? null
		: Yp.createPortal(
				u.jsxs('div', {
					id: 'modal',
					children: [
						u.jsx('div', { id: 'modal-background', onClick: n }),
						u.jsx('div', { id: 'modal-content', children: t }),
					],
				}),
				e.current
		  );
}
const ct = () => g.useContext(Mu);
var im = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	kd = Bt.createContext && Bt.createContext(im),
	$w = ['attr', 'size', 'title'];
function Uw(e, t) {
	if (e == null) return {};
	var n = Vw(e, t),
		r,
		l;
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(e);
		for (l = 0; l < i.length; l++)
			(r = i[l]),
				!(t.indexOf(r) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(e, r) &&
					(n[r] = e[r]);
	}
	return n;
}
function Vw(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e)
		if (Object.prototype.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) >= 0) continue;
			n[r] = e[r];
		}
	return n;
}
function Yi() {
	return (
		(Yi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Yi.apply(this, arguments)
	);
}
function Pd(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (l) {
				return Object.getOwnPropertyDescriptor(e, l).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function Xi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Pd(Object(n), !0).forEach(function (r) {
					Bw(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Pd(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function Bw(e, t, n) {
	return (
		(t = Hw(t)),
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function Hw(e) {
	var t = Ww(e, 'string');
	return typeof t == 'symbol' ? t : t + '';
}
function Ww(e, t) {
	if (typeof e != 'object' || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || 'default');
		if (typeof r != 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
function om(e) {
	return (
		e &&
		e.map((t, n) =>
			Bt.createElement(t.tag, Xi({ key: n }, t.attr), om(t.child))
		)
	);
}
function kn(e) {
	return (t) =>
		Bt.createElement(bw, Yi({ attr: Xi({}, e.attr) }, t), om(e.child));
}
function bw(e) {
	var t = (n) => {
		var { attr: r, size: l, title: i } = e,
			o = Uw(e, $w),
			a = l || n.size || '1em',
			s;
		return (
			n.className && (s = n.className),
			e.className && (s = (s ? s + ' ' : '') + e.className),
			Bt.createElement(
				'svg',
				Yi(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					o,
					{
						className: s,
						style: Xi(Xi({ color: e.color || n.color }, n.style), e.style),
						height: a,
						width: a,
						xmlns: 'http://www.w3.org/2000/svg',
					}
				),
				i && Bt.createElement('title', null, i),
				e.children
			)
		);
	};
	return kd !== void 0
		? Bt.createElement(kd.Consumer, null, (n) => t(n))
		: t(im);
}
function ka(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 496 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
				},
				child: [],
			},
		],
	})(e);
}
function Pa(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 448 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
				},
				child: [],
			},
		],
	})(e);
}
function Qw(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 576 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z',
				},
				child: [],
			},
		],
	})(e);
}
function Kw(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 576 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z',
				},
				child: [],
			},
		],
	})(e);
}
function Bo(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 576 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
				},
				child: [],
			},
		],
	})(e);
}
function Gw(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 512 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z',
				},
				child: [],
			},
		],
	})(e);
}
function Yw(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 496 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z',
				},
				child: [],
			},
		],
	})(e);
}
function Ho(e) {
	return kn({
		tag: 'svg',
		attr: { viewBox: '0 0 576 512' },
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z',
				},
				child: [],
			},
		],
	})(e);
}
function Nd({
	modalComponent: e,
	itemText: t,
	onItemClick: n,
	onModalClose: r,
}) {
	const { setModalContent: l, setOnModalClose: i } = ct(),
		o = () => {
			r && i(r), l(e), typeof n == 'function' && n();
		};
	return u.jsx('li', { onClick: o, children: t });
}
function am() {
	const e = Ee(),
		[t, n] = g.useState(''),
		[r, l] = g.useState(''),
		[i, o] = g.useState({}),
		{ closeModal: a } = ct(),
		s = async (f) => {
			f.preventDefault();
			const d = await e(_s({ email: t, password: r }));
			d ? o(d) : a();
		},
		c = async (f) => {
			f.preventDefault();
			const d = await e(_s({ email: 'demo@aa.io', password: 'password' }));
			d ? o(d) : a();
		};
	return u.jsxs(u.Fragment, {
		children: [
			u.jsx('h1', { children: 'Log In' }),
			u.jsxs('form', {
				className: 'login-form-modal',
				onSubmit: s,
				children: [
					u.jsxs('label', {
						children: [
							'Email',
							u.jsx('input', {
								type: 'text',
								value: t,
								onChange: (f) => n(f.target.value),
								required: !0,
							}),
						],
					}),
					i.email && u.jsx('p', { children: i.email }),
					u.jsxs('label', {
						children: [
							'Password',
							u.jsx('input', {
								type: 'password',
								value: r,
								onChange: (f) => l(f.target.value),
								required: !0,
							}),
						],
					}),
					i.password && u.jsx('p', { children: i.password }),
					u.jsx('button', { type: 'submit', children: 'Log In' }),
					u.jsx('hr', {}),
					u.jsx('button', { onClick: c, children: 'Log In Demo User' }),
				],
			}),
		],
	});
}
function Xw() {
	const e = Ee(),
		[t, n] = g.useState(''),
		[r, l] = g.useState(''),
		[i, o] = g.useState(''),
		[a, s] = g.useState(''),
		[c, f] = g.useState(''),
		[d, h] = g.useState(''),
		[C, w] = g.useState(''),
		[E, R] = g.useState(''),
		[m, p] = g.useState(''),
		[v, j] = g.useState(''),
		[N, x] = g.useState(''),
		[P, T] = g.useState({}),
		[z, I] = g.useState(!1),
		{ closeModal: G } = ct();
	g.useEffect(() => {
		if (z) {
			const B = {};
			a &&
				(a.length < 6 || a.length > 20) &&
				(B.username = 'Username must be between 6 and 20 characters'),
				m &&
					(m.length !== 2 || m !== m.toUpperCase()) &&
					(B.state = 'State must be 2 characters and uppercase'),
				v && !/^\d{5}$/.test(v) && (B.zip = 'ZIP must be 5 digits'),
				N &&
					!/^\d{10}$/.test(N) &&
					(B.phone_number = 'Phone number must be 10 digits'),
				T(B);
		}
	}, [z, a, m, v, N]);
	const te = async (B) => {
		if ((B.preventDefault(), I(!0), c !== d)) {
			T((dt) => ({
				...dt,
				confirmPassword:
					'Confirm Password field must be the same as the Password field',
			}));
			return;
		}
		const Z = {
			first_name: t,
			last_name: r,
			email: i,
			username: a,
			password: c,
			address: C,
			city: E,
			state: m,
			zip: v,
			phone_number: N,
		};
		T({});
		const Me = await e(Lh(Z));
		Me.errors ? T(Me.errors) : Me.error ? T({ server: Me.error }) : G();
	};
	return u.jsxs('div', {
		className: 'signu',
		children: [
			u.jsx('h1', { children: 'Sign Up' }),
			P.server && u.jsx('p', { children: P.server }),
			u.jsxs('form', {
				onSubmit: te,
				className: 'signup-form-modal',
				children: [
					u.jsxs('label', {
						children: [
							'First Name',
							u.jsx('input', {
								type: 'text',
								value: t,
								onChange: (B) => n(B.target.value),
								required: !0,
							}),
							P.first_name && u.jsx('p', { children: P.first_name }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Last Name',
							u.jsx('input', {
								type: 'text',
								value: r,
								onChange: (B) => l(B.target.value),
								required: !0,
							}),
							P.last_name && u.jsx('p', { children: P.last_name }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Email',
							u.jsx('input', {
								type: 'text',
								value: i,
								onChange: (B) => o(B.target.value),
								required: !0,
							}),
							P.email && u.jsx('p', { children: P.email }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Username',
							u.jsx('input', {
								type: 'text',
								value: a,
								onChange: (B) => s(B.target.value),
								required: !0,
							}),
							P.username && u.jsx('p', { children: P.username }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Password',
							u.jsx('input', {
								type: 'password',
								value: c,
								onChange: (B) => f(B.target.value),
								required: !0,
							}),
							P.password && u.jsx('p', { children: P.password }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Confirm Password',
							u.jsx('input', {
								type: 'password',
								value: d,
								onChange: (B) => h(B.target.value),
								required: !0,
							}),
							P.confirmPassword && u.jsx('p', { children: P.confirmPassword }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Address',
							u.jsx('input', {
								type: 'text',
								value: C,
								onChange: (B) => w(B.target.value),
								required: !0,
							}),
							P.address && u.jsx('p', { children: P.address }),
						],
					}),
					u.jsxs('label', {
						children: [
							'City',
							u.jsx('input', {
								type: 'text',
								value: E,
								onChange: (B) => R(B.target.value),
								required: !0,
							}),
							P.city && u.jsx('p', { children: P.city }),
						],
					}),
					u.jsxs('label', {
						children: [
							'State',
							u.jsx('input', {
								type: 'text',
								value: m,
								onChange: (B) => p(B.target.value),
								required: !0,
							}),
							P.state && u.jsx('p', { children: P.state }),
						],
					}),
					u.jsxs('label', {
						children: [
							'ZIP',
							u.jsx('input', {
								type: 'text',
								value: v,
								onChange: (B) => j(B.target.value),
								required: !0,
							}),
							P.zip && u.jsx('p', { children: P.zip }),
						],
					}),
					u.jsxs('label', {
						children: [
							'Phone Number',
							u.jsx('input', {
								type: 'text',
								value: N,
								onChange: (B) => x(B.target.value),
								required: !0,
							}),
							P.phone_number && u.jsx('p', { children: P.phone_number }),
						],
					}),
					u.jsx('button', { type: 'submit', children: 'Sign Up' }),
				],
			}),
		],
	});
}
function Jw() {
	const e = _n(),
		t = Ee(),
		[n, r] = g.useState(!1),
		l = ee((f) => f.session.user),
		i = g.useRef(),
		o = (f) => {
			f.stopPropagation(), r(!n);
		};
	g.useEffect(() => {
		if (!n) return;
		const f = (d) => {
			i.current && !i.current.contains(d.target) && r(!1);
		};
		return (
			document.addEventListener('click', f),
			() => document.removeEventListener('click', f)
		);
	}, [n]);
	const a = () => r(!1),
		s = (f) => {
			f.preventDefault(), t(A1()), a();
		},
		c = () => {
			e('/restaurants/current');
		};
	return u.jsxs(u.Fragment, {
		children: [
			u.jsx('button', { onClick: o, children: u.jsx(Yw, {}) }),
			n &&
				u.jsx('ul', {
					className: 'profile-dropdown',
					ref: i,
					children: l
						? u.jsxs(u.Fragment, {
								children: [
									u.jsx('li', { children: l.username }),
									u.jsx('li', { children: l.email }),
									u.jsx('li', {
										onClick: () => c(),
										children: 'Your Restaurants',
									}),
									u.jsx('li', {
										children: u.jsx('button', {
											onClick: s,
											children: 'Log Out',
										}),
									}),
								],
						  })
						: u.jsxs(u.Fragment, {
								children: [
									u.jsx(Nd, {
										itemText: 'Log In',
										onItemClick: a,
										modalComponent: u.jsx(am, {}),
									}),
									u.jsx(Nd, {
										itemText: 'Sign Up',
										onItemClick: a,
										modalComponent: u.jsx(Xw, {}),
									}),
								],
						  }),
				}),
		],
	});
}
const Zw = ({ id: e }) => {
		const t = Ee(),
			{ closeModal: n } = ct(),
			[r, l] = g.useState(0),
			[i, o] = g.useState(0),
			[a, s] = g.useState(''),
			[c, f] = g.useState({});
		g.useEffect(() => {
			let R = {};
			r < 1 && (R.rating = "Stars can't be empty"),
				a.length < 20 &&
					(R.comments = 'Review must be at least 20 characters long'),
				f(R);
		}, [a.length, r]);
		const d = (R) => {
				o(R);
			},
			h = () => {
				o(0);
			},
			C = (R) => {
				l(R);
			},
			w = () =>
				[1, 2, 3, 4, 5].map((R) =>
					u.jsx(
						'div',
						{
							onMouseEnter: () => d(R),
							onMouseLeave: h,
							onClick: () => C(R),
							className: 'star',
							style: { cursor: 'pointer', display: 'inline-block' },
							children: R <= (i || r) ? u.jsx(Bo, {}) : u.jsx(Ho, {}),
						},
						R
					)
				),
			E = async (R) => {
				if ((R.preventDefault(), Object.values(c).length > 0))
					alert('Please fix the errors you have');
				else {
					let m = parseInt(e);
					t(xw({ rating: r, comments: a }, m))
						.then(n)
						.then(() => t(Or(m))),
						l(0),
						s(''),
						f({});
				}
			};
		return u.jsxs('form', {
			className: 'review-form',
			onSubmit: E,
			children: [
				u.jsx('h2', {
					className: 'review-title',
					children: 'How was your meal?',
				}),
				u.jsxs('label', {
					className: 'review-label',
					children: [
						'Review:',
						u.jsx('textarea', {
							placeholder: 'Leave your review here...',
							className: 'review-input long-text',
							value: a,
							onChange: (R) => s(R.target.value),
						}),
					],
				}),
				u.jsxs('label', {
					className: 'review-label',
					children: [
						'Stars:',
						u.jsx('div', {
							className: 'rating-input',
							children: u.jsx('div', {
								className: 'star-ratings-container',
								children: w(),
							}),
						}),
					],
				}),
				u.jsx('button', {
					id: 'submit-button',
					disabled: Object.values(c).length > 0,
					type: 'submit',
					children: 'Submit Your Review',
				}),
			],
		});
	},
	qw = () => {
		const e = Ee(),
			{ closeModal: t, setModalContent: n } = ct(),
			r = ee((s) => s.shoppingCart.items),
			l = ee((s) => s.session.user);
		g.useEffect(() => {
			l || e(Uh()), e(_a());
		}, [e, l]);
		const i = (s) => {
				e(Vh(s)).then(() => {
					e(_a());
				});
			},
			o = (s) => {
				e(q1(s)).then(() => {
					e(_a());
				});
			},
			a = () => {
				r.length === 0
					? (e(Z1()),
					  alert(
							'Your cart is empty. Please add items to your cart before purchasing.'
					  ))
					: (alert('Purchase feature in development'),
					  n(u.jsx(Zw, { id: r[0].restaurant_id })));
			};
		return u.jsxs('div', {
			className: 'shopping-cart-modal',
			children: [
				u.jsxs('div', {
					children: [
						u.jsx('h2', { children: 'Your Shopping Cart' }),
						u.jsx('button', { onClick: t, children: 'Close' }),
					],
				}),
				r.length > 0
					? u.jsx(u.Fragment, {
							children: u.jsx('div', {
								children: r.map((s) =>
									u.jsxs(
										'div',
										{
											className: 'cart-item',
											children: [
												u.jsxs('div', {
													className: 'cart-img-holder',
													children: [
														u.jsx('img', { src: s.image_url, alt: s.name }),
														u.jsxs('div', {
															children: [
																u.jsx('h3', { children: s.name }),
																u.jsx('p', { children: s.description }),
																u.jsxs('p', {
																	children: ['Price: $', s.price],
																}),
															],
														}),
													],
												}),
												u.jsxs('div', {
													className: 'cart-quantity',
													children: [
														u.jsx('p', {
															className: 'quantity',
															children: s.item_quantity,
														}),
														' ',
														u.jsxs('div', {
															className: 'quantity-btns',
															children: [
																u.jsx('button', {
																	onClick: () => i(s.menu_item_id),
																	children: '+',
																}),
																u.jsx('button', {
																	onClick: () => o(s.id),
																	children: '-',
																}),
															],
														}),
													],
												}),
											],
										},
										s.id
									)
								),
							}),
					  })
					: u.jsx('p', { children: 'Your cart is empty.' }),
				l && u.jsx('button', { onClick: a, children: 'Purchase' }),
			],
		});
	},
	ex = () => {
		const { setModalContent: e, setOnModalClose: t } = ct(),
			n = () => {
				e(u.jsx(qw, {})),
					t(() => () => console.log('Shopping Cart Modal Closed'));
			};
		return u.jsx('button', { onClick: n, children: u.jsx(Qw, {}) });
	};
function tx() {
	return u.jsxs('nav', {
		className: 'navbar',
		children: [
			u.jsx(E1, { className: 'logo', to: '/', children: 'DashDine' }),
			u.jsxs('div', {
				className: 'nav-btn-holder',
				children: [u.jsx(Jw, {}), u.jsx(ex, {})],
			}),
		],
	});
}
const nx = () =>
	u.jsx('div', {
		className: 'footer-component',
		children: u.jsxs('div', {
			className: 'footer-info-wrapper',
			children: [
				u.jsx('div', {
					className: 'footer-info-section',
					children: u.jsxs('ul', {
						className: 'footer-ul',
						children: [
							u.jsx('li', {
								children: u.jsxs('a', {
									href: 'https://github.com/dvidale',
									children: ["DeAndre's Github ", u.jsx(ka, {})],
								}),
							}),
							u.jsx('li', {
								children: u.jsxs('a', {
									href: 'https://www.linkedin.com/in/deandrevidale',
									children: ["DeAndre's LinkedIn ", u.jsx(Pa, {})],
								}),
							}),
						],
					}),
				}),
				u.jsx('div', {
					className: 'footer-info-section',
					children: u.jsxs('ul', {
						className: 'footer-ul',
						children: [
							u.jsx('li', {
								children: u.jsxs('a', {
									href: 'https://github.com/Haydengalyeanbiz',
									children: ["Hayden's Github ", u.jsx(ka, {})],
								}),
							}),
							u.jsx('li', {
								children: u.jsxs('a', {
									href: 'https://www.linkedin.com/in/hayden-galyean-42a518189/',
									children: ["Hayden's LinkedIn ", u.jsx(Pa, {})],
								}),
							}),
						],
					}),
				}),
				u.jsx('div', {
					className: 'footer-info-section',
					children: u.jsxs('ul', {
						className: 'footer-ul',
						children: [
							u.jsx('li', {
								children: u.jsxs('a', {
									href: 'https://github.com/fullstackneil',
									children: ["Neil's Github ", u.jsx(ka, {})],
								}),
							}),
							u.jsx('li', {
								children: u.jsxs('a', {
									href: 'https://www.linkedin.com/in/neil-kang/',
									children: ["Neil's LinkedIn ", u.jsx(Pa, {})],
								}),
							}),
						],
					}),
				}),
			],
		}),
	});
function rx() {
	const e = Ee(),
		[t, n] = g.useState(!1);
	return (
		g.useEffect(() => {
			e(z1()).then(() => n(!0));
		}, [e]),
		u.jsx('div', {
			className: 'layout',
			children: u.jsxs(zw, {
				children: [
					u.jsx(tx, {}),
					u.jsx('div', {
						className: 'container',
						children: t && u.jsx(t1, {}),
					}),
					u.jsx(nx, {}),
					u.jsx(Aw, {}),
				],
			}),
		})
	);
}
const lx = () => {
		const { id: e } = Rn(),
			t = Ee(),
			{ closeModal: n } = ct(),
			[r, l] = g.useState(''),
			[i, o] = g.useState(''),
			[a, s] = g.useState(''),
			[c, f] = g.useState(''),
			[d, h] = g.useState(''),
			C = (w) => {
				w.preventDefault();
				const E = {
					name: r,
					like_percentage: 0,
					price: parseFloat(i),
					image_url: c,
					description: a,
					quantity: parseInt(d),
				};
				t(Q1(e, E)).then(() => {
					n();
				});
			};
		return u.jsxs('form', {
			className: 'add-menu-item-form',
			onSubmit: C,
			children: [
				u.jsx('h2', { children: 'Add Menu Item' }),
				u.jsxs('label', {
					children: [
						'Name:',
						u.jsx('input', {
							type: 'text',
							value: r,
							onChange: (w) => l(w.target.value),
							required: !0,
							placeholder: 'Double Cheese Burger, Pepperoni pizza...',
						}),
					],
				}),
				u.jsxs('label', {
					children: [
						'Price:',
						u.jsx('input', {
							type: 'number',
							value: i,
							onChange: (w) => o(w.target.value),
							required: !0,
							placeholder: '10',
						}),
					],
				}),
				u.jsxs('label', {
					children: [
						'Description:',
						u.jsx('textarea', {
							value: a,
							onChange: (w) => s(w.target.value),
							required: !0,
							placeholder: 'Describe your dish or item',
						}),
					],
				}),
				u.jsxs('label', {
					children: [
						'Image URL:',
						u.jsx('input', {
							type: 'text',
							value: c,
							onChange: (w) => f(w.target.value),
							required: !0,
							placeholder: 'https://exampleurl.com',
						}),
					],
				}),
				u.jsxs('label', {
					children: [
						'Quantity:',
						u.jsx('input', {
							type: 'number',
							value: d,
							onChange: (w) => h(w.target.value),
							required: !0,
							placeholder: '10',
						}),
					],
				}),
				u.jsx('button', { type: 'submit', children: 'Add Menu Item' }),
			],
		});
	},
	ix = ({ restaurantId: e }) => {
		const { setModalContent: t, setOnModalClose: n } = ct(),
			r = () => {
				t(u.jsx(lx, { restaurantId: e })),
					n(() => () => console.log('Add Menu Item Modal Closed'));
			};
		return u.jsx('button', { onClick: r, children: 'Add Menu Item' });
	};
const ox = () => {
	const { id: e } = Rn(),
		t = Ee(),
		{ setModalContent: n } = ct(),
		r = ee((c) => c.menuItems.itemArr),
		l = ee((c) => c.session.user),
		i = ee((c) => c.restaurants.selectedRestaurant);
	g.useEffect(() => {
		t(ow(e)), t(b1(e));
	}, [t, e]);
	const o = l && l.id === i.owner_id,
		a = (c) => {
			l ? t(Vh(c)) : n(u.jsx(am, {}));
		},
		s = (c) => {
			t(K1(c));
		};
	return u.jsxs('div', {
		className: 'menu-holder',
		children: [
			u.jsx('h2', { children: 'The Menu' }),
			o && u.jsx(ix, {}),
			u.jsx('div', {
				className: 'menu-items-wrapper',
				children: r.map((c) =>
					u.jsxs(
						'div',
						{
							className: 'menu-item-structure',
							children: [
								o &&
									u.jsx('button', {
										className: 'delete-btn',
										onClick: () => s(c.id),
										children: 'delete',
									}),
								u.jsxs('div', {
									className: 'menu-item-details',
									children: [
										u.jsxs('div', {
											children: [
												u.jsx('h3', {
													className: 'item-title',
													children: c.name,
												}),
												u.jsxs('p', {
													className: 'item-details',
													children: [
														u.jsx(Gw, {}),
														' ',
														c.like_percentage,
														'%',
													],
												}),
											],
										}),
										u.jsxs('div', {
											children: [
												u.jsx('p', {
													className: 'item-details',
													children: c.description,
												}),
												u.jsxs('p', {
													className: 'item-details',
													children: ['Price: $', c.price],
												}),
											],
										}),
									],
								}),
								u.jsxs('div', {
									className: 'menu-item-img-holder',
									children: [
										u.jsx('img', {
											src: c.image_url,
											alt: 'food-item',
											className: 'menu-item-img',
										}),
										u.jsx('button', {
											className: 'add-to-cart-btn',
											onClick: () => a(c.id),
											children: '+',
										}),
									],
								}),
							],
						},
						c.id
					)
				),
			}),
		],
	});
};
function ax({ restaurant: e }) {
	const t = ee((o) => o.session.user),
		n = ee((o) => o.location),
		r = (t == null ? void 0 : t.city) || n.city,
		l = (t == null ? void 0 : t.state) || n.state,
		i = {
			width: '100%',
			height: '400px',
			backgroundImage: `url(${e.banner_img})`,
		};
	return u.jsx(u.Fragment, {
		children: u.jsxs('div', {
			id: 'header-container',
			children: [
				u.jsx('div', {
					className: 'banner-img-container',
					style: i,
					children: u.jsx('h1', {
						className: 'restaurant-title',
						children: e.name,
					}),
				}),
				u.jsxs('p', {
					children: [
						e.avg_rating,
						' •',
						' ',
						e.categories.join(' • '),
						u.jsx('br', {}),
						e.address,
						r && l ? `${r}, ${l}` : '',
					],
				}),
				u.jsx('p', { children: e.description }),
			],
		}),
	});
}
const sx = ({ restaurantId: e }) => {
	const t = Ee(),
		n = ee((c) => c.reviewsList.reviewSummary);
	g.useEffect(() => {
		t(ww(e)), t(Or(e));
	}, [t, e]);
	const r = (c) => Math.round(c * 2) / 2,
		l = n.total_reviews > 0;
	let i = 0,
		o = 0,
		a = !1,
		s = 0;
	if (l) {
		const c = Number(n.average_rating) || 0;
		(i = r(c)),
			(o = Math.min(5, Math.floor(i))),
			(a = i % 1 !== 0),
			(s = Math.max(0, 5 - o - (a ? 1 : 0)));
	} else s = 5;
	return u.jsx(u.Fragment, {
		children: u.jsxs('div', {
			children: [
				u.jsx('h2', { children: 'Ratings and Reviews' }),
				u.jsx('div', {
					children: l
						? u.jsxs(u.Fragment, {
								children: [
									u.jsx('h3', { children: n.average_rating }),
									[...Array(o)].map((c, f) => u.jsx(Bo, {}, f)),
									a && u.jsx(Kw, {}),
									[...Array(s)].map((c, f) => u.jsx(Ho, {}, f)),
									u.jsxs('p', { children: [n.total_reviews, ' Ratings'] }),
								],
						  })
						: u.jsx(u.Fragment, { children: u.jsx('h3', { children: 'New' }) }),
				}),
			],
		}),
	});
};
function ks({
	modalComponent: e,
	buttonText: t,
	onButtonClick: n,
	onModalClose: r,
}) {
	const { setModalContent: l, setOnModalClose: i } = ct(),
		o = () => {
			r && i(r), l(e), typeof n == 'function' && n();
		};
	return u.jsx('button', { onClick: o, children: t });
}
const ux = ({ reviewId: e }) => {
		const { closeModal: t } = ct(),
			{ restaurantId: n } = Rn(),
			r = Ee(),
			l = () => {
				r(Ew(e))
					.then(t)
					.then(() => r(Or(n)));
			};
		return u.jsxs('div', {
			className: 'delete-review-container',
			children: [
				u.jsx('h2', { className: 'header-text', children: 'Confirm Delete' }),
				u.jsx('p', {
					children: 'Are you sure you want to delete this review?',
				}),
				u.jsxs('div', {
					children: [
						u.jsx('button', {
							className: 'button',
							id: 'delete-review',
							onClick: l,
							children: 'Yes',
						}),
						u.jsx('button', {
							className: 'button',
							id: 'keep-review',
							onClick: t,
							children: 'No',
						}),
					],
				}),
			],
		});
	},
	cx = ({ reviewId: e }) => {
		const t = Ee(),
			{ closeModal: n } = ct(),
			{ restaurantId: r } = Rn(),
			[l, i] = g.useState(0),
			[o, a] = g.useState({ rating: 0, comments: '' }),
			[s, c] = g.useState(0),
			[f, d] = g.useState(!0),
			[h, C] = g.useState(null);
		g.useEffect(() => {
			(async () => {
				try {
					const j = await t(gw(e));
					a({ rating: j.rating, comments: j.comments }), i(j.rating), d(!1);
				} catch (j) {
					console.error('Error fetching review:', j),
						C('Failed to load review data.'),
						d(!1);
				}
			})();
		}, [t, e]);
		const w = ({ target: { name: j, value: N } }) =>
				a((x) => ({ ...x, [j]: N })),
			E = async (j) => {
				j.preventDefault();
				try {
					await t(Sw({ ...o, rating: l }, e)), n(), t(Or(r));
				} catch (N) {
					console.error('Error updating review:', N),
						C('Failed to update review.');
				}
			},
			R = (j) => {
				c(j);
			},
			m = () => {
				c(0);
			},
			p = (j) => {
				i(j), a((N) => ({ ...N, rating: j }));
			},
			v = () =>
				[1, 2, 3, 4, 5].map((j) =>
					u.jsx(
						'div',
						{
							onMouseEnter: () => R(j),
							onMouseLeave: m,
							onClick: () => p(j),
							className: 'star',
							style: { cursor: 'pointer', display: 'inline-block' },
							children: j <= (s || l) ? u.jsx(Bo, {}) : u.jsx(Ho, {}),
						},
						j
					)
				);
		return u.jsx('div', {
			children: f
				? u.jsx('p', { children: 'Loading...' })
				: u.jsxs('form', {
						className: 'edit-review-container',
						onSubmit: E,
						children: [
							u.jsx('h2', {
								className: 'edit-review-title',
								children: 'How was your meal?',
							}),
							h && u.jsx('p', { className: 'error-message', children: h }),
							u.jsxs('label', {
								className: 'edit-review-label',
								children: [
									'Comments:',
									u.jsx('textarea', {
										name: 'comments',
										placeholder: 'Enter your comments',
										className: 'review-input',
										id: 'long-text-box',
										value: o.comments,
										onChange: w,
									}),
								],
							}),
							u.jsxs('label', {
								className: 'edit-review-label',
								children: [
									'Stars:',
									u.jsx('div', {
										className: 'edit-rating-input',
										children: u.jsx('div', {
											className: 'edit-star-ratings-container',
											children: v(),
										}),
									}),
								],
							}),
							u.jsx('button', {
								id: 'update-button',
								type: 'submit',
								disabled: !o.comments || o.rating < 1 || f,
								children: 'Update Your Review',
							}),
						],
				  }),
		});
	},
	sm = ({ restaurant: e }) => {
		const t = Ee(),
			{ id: n } = Rn(),
			r = ee((o) => o.reviewsList.reviewsListArr),
			l = ee((o) => o.session.user);
		g.useEffect(() => {
			t(Or(n));
		}, [t, n]);
		const i = (o) => {
			const a = [];
			for (let s = 1; s <= 5; s++)
				s <= o ? a.push(u.jsx(Bo, {}, s)) : a.push(u.jsx(Ho, {}, s));
			return a;
		};
		return u.jsxs(u.Fragment, {
			children: [
				u.jsx('h2', { children: 'Rating and Reviews' }),
				r.length > 0
					? u.jsx(u.Fragment, {
							children: u.jsx('div', {
								children: u.jsx('div', {
									children: r
										.sort(
											(o, a) => new Date(a.created_at) - new Date(o.created_at)
										)
										.map((o) =>
											u.jsxs(
												'div',
												{
													children: [
														u.jsxs('p', {
															children: [
																o.user_first_name,
																' ',
																o.user_last_name,
															],
														}),
														u.jsx('p', { children: o.created_at }),
														u.jsx('div', { children: i(o.rating) }),
														u.jsx('p', { children: o.comments }),
														(l == null ? void 0 : l.id) === o.user_id &&
															u.jsxs(u.Fragment, {
																children: [
																	u.jsx(ks, {
																		id: 'delete-button',
																		buttonText: 'Delete',
																		modalComponent: u.jsx(ux, {
																			reviewId: o.id,
																		}),
																	}),
																	u.jsx(ks, {
																		id: 'update-button',
																		buttonText: 'Edit',
																		modalComponent: u.jsx(cx, {
																			reviewId: o.id,
																		}),
																	}),
																],
															}),
													],
												},
												o.id
											)
										),
								}),
							}),
					  })
					: u.jsxs(u.Fragment, {
							children: [
								u.jsx('p', { children: 'No reviews yet!' }),
								l &&
									e.owner_id !== l.id &&
									u.jsx('p', {
										children:
											' Be the first to place an order and you can leave a review!',
									}),
							],
					  }),
			],
		});
	};
function dx({ restaurant: e, city: t, state: n }) {
	return u.jsx(u.Fragment, {
		children: u.jsxs('div', {
			className: 'restaurant-info',
			children: [
				u.jsxs('div', {
					children: [
						'$',
						e.delivery_fee,
						' delivery fee ',
						' ',
						e.delivery_time,
						' min',
					],
				}),
				u.jsxs('div', {
					children: [e.address, u.jsx('br', {}), t && n ? `${t}, ${n}` : ''],
				}),
				u.jsxs('div', {
					children: [
						'Sun - Sat',
						u.jsx('br', {}),
						'Open:  ',
						e.open_time,
						u.jsx('br', {}),
						'Close: ',
						e.close_time,
					],
				}),
			],
		}),
	});
}
function um() {
	const e = Ee(),
		[t, n] = g.useState(''),
		[r, l] = g.useState(''),
		i = (o) => {
			o.preventDefault(), e(_w({ city: t, state: r }));
		};
	return u.jsxs('form', {
		onSubmit: i,
		className: 'location-form-body',
		children: [
			u.jsx('h2', {
				className: 'location-text',
				children: 'Enter your location',
			}),
			u.jsxs('div', {
				className: 'location-form-inputs',
				children: [
					u.jsxs('label', {
						className: 'location-text',
						children: [
							'City:',
							u.jsx('input', {
								type: 'text',
								value: t,
								onChange: (o) => n(o.target.value),
								placeholder: 'Enter your city',
								required: !0,
							}),
						],
					}),
					u.jsxs('label', {
						className: 'location-text',
						children: [
							'State:',
							u.jsx('input', {
								type: 'text',
								value: r,
								onChange: (o) => l(o.target.value),
								placeholder: 'Enter your state',
								required: !0,
							}),
						],
					}),
					u.jsx('button', {
						className: 'loaction-form-btn',
						type: 'submit',
						children: 'Submit',
					}),
				],
			}),
		],
	});
}
const fx = () => {
	const { id: e } = Rn(),
		t = Ee();
	let n = ee((a) => a.restaurants.AllRestaurants[e]);
	const r = ee((a) => a.session.user),
		l = ee((a) => a.location),
		i = (r == null ? void 0 : r.city) || l.city,
		o = (r == null ? void 0 : r.state) || l.state;
	return (
		g.useEffect(() => {
			t(Fl());
		}, [t]),
		u.jsx(u.Fragment, {
			children: n
				? u.jsxs(u.Fragment, {
						children: [
							u.jsx(ax, { restaurant: n }),
							!i || !o ? u.jsx(um, {}) : null,
							u.jsx(sx, { restaurantId: e }),
							u.jsx(dx, { restaurant: n, city: i, state: o }),
							u.jsx(ox, { id: e }),
							u.jsx(sm, { restaurant: n, id: e }),
						],
				  })
				: u.jsx(u.Fragment, {}),
		})
	);
};
function Td() {
	const e = Ee(),
		t = ee((l) => l.restaurants.allCategories),
		n = ee((l) => l.restaurants.selectedCategory);
	g.useEffect(() => {
		e(Yh());
	}, [e]);
	const r = (l) => {
		n === l.categ_name ? e(Ra(null)) : e(Ra(l.categ_name));
	};
	return u.jsxs('div', {
		className: 'category-section',
		children: [
			u.jsx('h2', { children: 'Explore by Category' }),
			t &&
				t.length > 0 &&
				u.jsxs('div', {
					className: 'category-wrapper',
					children: [
						t.map((l) =>
							u.jsxs(
								'div',
								{
									className: `category-structure ${
										n === l.categ_name ? 'selected' : ''
									}`,
									onClick: () => r(l),
									children: [
										u.jsx('img', { alt: l.categ_name, src: l.img_url }),
										u.jsx('p', { children: l.categ_name }),
									],
								},
								l.id
							)
						),
						u.jsx('div', {
							className: `category-structure ${n ? '' : 'selected'}`,
							onClick: () => e(Ra(null)),
							children: u.jsx('p', { children: 'All Categories' }),
						}),
					],
				}),
		],
	});
}
function Ld({ city: e, state: t }) {
	const n = Ee(),
		r = _n(),
		l = ee((s) => s.restaurants.AllRestaurants),
		i = ee((s) => s.restaurants.selectedCategory);
	g.useEffect(() => {
		n(Fl());
	}, [n]);
	let o = Object.values(l);
	i && (o = o.filter((s) => s.categories.includes(i)));
	const a = (s) => {
		r(`/restaurants/${s}`);
	};
	return u.jsx('div', {
		className: 'restaurant-list',
		children: o.map((s) =>
			u.jsxs(
				'div',
				{
					onClick: () => a(s.id),
					className: 'restaurant-tile',
					children: [
						u.jsx('img', {
							src: s.banner_img,
							alt: s.name,
							className: 'restaurant-image',
						}),
						u.jsxs('div', {
							className: 'restaurant-info',
							children: [
								u.jsx('h2', { children: s.name }),
								u.jsx('p', { children: s.avg_rating }),
								u.jsx('p', { children: s.categories.join(' • ') }),
								u.jsx('p', { children: s.description }),
								(e && t) || (s.city && s.state)
									? u.jsxs('div', {
											className: 'restaurant-address',
											children: [
												s.address,
												', ',
												e || s.city,
												',',
												' ',
												t || s.state,
											],
									  })
									: null,
							],
						}),
					],
				},
				s.id
			)
		),
	});
}
function px() {
	return u.jsxs('div', {
		children: [
			u.jsx('h1', { children: ' Food Delivery' }),
			u.jsxs('p', {
				children: [
					'Have your favorite ',
					' food delivered to your door with DashDine. Whether you want to order breakfast, lunch, dinner, or a snack.',
				],
			}),
			u.jsxs('p', { children: ['Find more restaurants nearby', '.'] }),
		],
	});
}
function hx() {
	const e = ee((l) => l.session.user),
		t = ee((l) => l.location),
		n = (e == null ? void 0 : e.city) || t.city,
		r = (e == null ? void 0 : e.state) || t.state;
	return u.jsx('div', {
		className: 'home-page',
		children:
			n && r
				? u.jsxs(u.Fragment, {
						children: [
							u.jsx(px, {}),
							u.jsx(Td, {}),
							u.jsx('hr', {}),
							u.jsx(Ld, { city: n, state: r }),
						],
				  })
				: u.jsxs(u.Fragment, {
						children: [
							u.jsx(um, {}),
							u.jsx(Td, {}),
							u.jsx('hr', {}),
							u.jsx(Ld, {}),
						],
				  }),
	});
}
const mx = () => {
	const e = Ee(),
		{ id: t } = Rn(),
		n = ee((r) => r.menuItemRating.getMenuItemRating);
	return (
		g.useEffect(() => {
			e(Tw(t));
		}, [e, t]),
		n
			? u.jsxs(u.Fragment, {
					children: [
						u.jsxs('div', {
							children: [
								'Percentage of Liked Votes: ',
								n.percentage_of_liked_votes,
								'%',
							],
						}),
						u.jsxs('div', {
							children: ['Number of Votes: ', n.number_of_votes],
						}),
					],
			  })
			: u.jsx('div', { children: 'Loading...' })
	);
};
function Md() {
	const { id: e } = Rn(),
		t = Ee(),
		n = _n(),
		r = ee((M) => M.restaurants.AllRestaurants[e]),
		l = r ? 'PUT' : 'POST',
		[i, o] = g.useState(''),
		[a, s] = g.useState(''),
		[c, f] = g.useState(''),
		[d, h] = g.useState(''),
		[C, w] = g.useState(''),
		[E, R] = g.useState(''),
		[m, p] = g.useState(''),
		[v, j] = g.useState([]),
		[N, x] = g.useState('10:00'),
		[P, T] = g.useState('22:00'),
		[z, I] = g.useState(''),
		[G, te] = g.useState(''),
		[B, Z] = g.useState('https://'),
		[Me, dt] = g.useState({});
	g.useEffect(() => {
		r &&
			(o(r.name),
			s(r.address),
			R(r.phone_number),
			p(r.description),
			j(r.categories),
			x(r.open_time),
			T(r.close_time),
			I(r.delivery_time),
			te(r.delivery_fee),
			Z(r.banner_img));
	}, [r]),
		g.useEffect(() => {
			const M = {};
			i.length < 2 && (M[i] = 'Name must have at least two characters'), dt(M);
		}, [i]),
		g.useEffect(() => {
			t(Yh()), t(Fl());
		}, [t]);
	const ce = ee((M) => M.restaurants.allCategories),
		O = ee((M) => M.session.user),
		H = (M) => {
			M.preventDefault();
			const X = {
				owner_id: O.id,
				name: i,
				address: a,
				phone_number: E,
				description: m,
				categories: v,
				open_time: N,
				close_time: P,
				delivery_time: z,
				delivery_fee: G,
				banner_img: B,
			};
			if (r) {
				const ne = r.id;
				t(sw(ne, l, JSON.stringify(X))), n(`/restaurants/${r.id}`);
			} else t(aw(l, JSON.stringify(X))), n('/restaurants/current');
		};
	return u.jsx(u.Fragment, {
		children: u.jsxs('div', {
			id: 'form-container',
			children: [
				u.jsxs('div', {
					children: [
						' ',
						u.jsxs(Vo, {
							to: '/restaurants/current',
							children: [
								' ',
								'<-- ',
								'Go back to Restaurant Management Portal',
							],
						}),
						' ',
					],
				}),
				u.jsx('h1', {
					children: r ? 'Update a Restaurant' : 'Submit a New Restaurant',
				}),
				u.jsxs('form', {
					onSubmit: H,
					method: l,
					children: [
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'name',
								children: [
									' Name',
									u.jsx('input', {
										type: 'text',
										id: 'name',
										name: 'name',
										value: i,
										onChange: (M) => o(M.target.value),
									}),
								],
							}),
						}),
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'address',
								children: [
									' Address',
									u.jsx('input', {
										type: 'text',
										id: 'address',
										name: 'address',
										value: a,
										onChange: (M) => s(M.target.value),
									}),
								],
							}),
						}),
						!r &&
							u.jsx('div', {
								children: u.jsxs('label', {
									htmlFor: 'city',
									children: [
										' City',
										u.jsx('input', {
											type: 'text',
											id: 'city',
											name: 'city',
											value: c,
											onChange: (M) => f(M.target.value),
										}),
									],
								}),
							}),
						!r &&
							u.jsx('div', {
								children: u.jsxs('label', {
									htmlFor: 'state',
									children: [
										' State',
										u.jsx('input', {
											type: 'text',
											id: 'state',
											name: 'state',
											value: d,
											onChange: (M) => h(M.target.value),
										}),
									],
								}),
							}),
						!r &&
							u.jsx('div', {
								children: u.jsxs('label', {
									htmlFor: 'zip',
									children: [
										' Zip',
										u.jsx('input', {
											type: 'text',
											id: 'zip',
											name: 'zip',
											value: C,
											onChange: (M) => w(M.target.value),
										}),
									],
								}),
							}),
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'phone',
								children: [
									' Phone',
									u.jsx('input', {
										type: 'text',
										id: 'phone_number',
										name: 'phone_number',
										value: E,
										onChange: (M) => R(M.target.value),
									}),
								],
							}),
						}),
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'description',
								children: [
									' Description',
									u.jsx('input', {
										type: 'text',
										id: 'description',
										name: 'description',
										value: m,
										onChange: (M) => p(M.target.value),
									}),
								],
							}),
						}),
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'categories',
								children: [
									'Categories (choose all that apply)',
									u.jsx('select', {
										name: 'categories',
										value: v,
										multiple: !0,
										onChange: (M) => {
											const ne = [...M.target.selectedOptions].map(
												(ft) => ft.value
											);
											j(ne);
										},
										children: ce.map((M) =>
											u.jsx(u.Fragment, {
												children: u.jsx(
													'option',
													{
														id: M.categ_name,
														name: M.categ_name,
														value: M.categ_name,
														children: M.categ_name,
													},
													M.id
												),
											})
										),
									}),
								],
							}),
						}),
						u.jsx('div', { children: 'Open and Closing Hours' }),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Monday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 'open_time',
											name: 'open_time',
											value: N,
											onChange: (M) => x(M.target.value),
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 'close_time',
										name: 'close_time',
										value: P,
										onChange: (M) => T(M.target.value),
									}),
								}),
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Tuesday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 't_open_time',
											name: 'open_time',
											defaultValue: N,
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 't_close_time',
										name: 'close_time',
										defaultValue: P,
									}),
								}),
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Wednesday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 'w_open_time',
											name: 'open_time',
											defaultValue: N,
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 'w_close_time',
										name: 'close_time',
										defaultValue: P,
									}),
								}),
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Thursday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 'th_open_time',
											name: 'open_time',
											defaultValue: N,
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 'th_close_time',
										name: 'close_time',
										defaultValue: P,
									}),
								}),
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Friday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 'f_open_time',
											name: 'open_time',
											defaultValue: N,
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 'f_close_time',
										name: 'close_time',
										value: P,
									}),
								}),
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Saturday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 's_open_time',
											name: 'open_time',
											defaultValue: N,
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 's_close_time',
										name: 'close_time',
										defaultValue: P,
									}),
								}),
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('label', {
									htmlFor: 'open_time',
									children: [
										' Sunday',
										u.jsx('input', {
											type: 'time',
											min: '00:00',
											max: '24:00',
											id: 'su_open_time',
											name: 'open_time',
											defaultValue: N,
										}),
									],
								}),
								u.jsx('label', {
									htmlFor: 'close_time',
									children: u.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '24:00',
										id: 'su_close_time',
										name: 'close_time',
										defaultValue: P,
									}),
								}),
							],
						}),
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'delivery_time',
								children: [
									' Delivery Time',
									u.jsx('input', {
										type: 'text',
										id: 'delivery_time',
										name: 'delivery_time',
										placeholder: 'ex. 35-50',
										value: z,
										onChange: (M) => I(M.target.value),
									}),
									' min',
								],
							}),
						}),
						u.jsxs('div', {
							children: [
								u.jsx('label', {
									htmlFor: 'delivery_fee',
									children: ' Delivery Fee $',
								}),
								u.jsxs('select', {
									name: 'delivery_fee',
									id: 'delivery_fee',
									value: G,
									onChange: (M) => te(M.target.value),
									children: [
										u.jsx('option', { value: 0, children: 'None' }),
										u.jsx('option', { value: 0.99, children: '0.99' }),
										u.jsx('option', { value: 1.99, children: '1.99' }),
										u.jsx('option', { value: 2.99, children: '2.99' }),
										u.jsx('option', { value: 3.99, children: '3.99' }),
										u.jsx('option', { value: 4.99, children: '4.99' }),
									],
								}),
							],
						}),
						u.jsx('div', {
							children: u.jsxs('label', {
								htmlFor: 'banner_img',
								children: [
									' Banner Image URL',
									u.jsx('input', {
										type: 'url',
										id: 'banner_img',
										name: 'banner_img',
										value: B,
										onChange: (M) => Z(M.target.value),
									}),
								],
							}),
						}),
						u.jsx('button', {
							type: 'submit',
							disabled: Object.keys(Me).length > 0,
							children: 'Submit',
						}),
					],
				}),
			],
		}),
	});
}
function vx({ restaurantId: e }) {
	const { closeModal: t } = ct(),
		n = Ee(),
		r = () => {
			n(uw(e))
				.then((l) => {
					alert(l.message);
				})
				.then(t)
				.then(() => n(Fl()))
				.then((l) => n(Or(l[0].id)));
		};
	return u.jsx(u.Fragment, {
		children: u.jsxs('div', {
			className: 'delete-restaurant-modal',
			children: [
				u.jsx('h2', {
					children: 'Are you sure you want to delete this restaurant?',
				}),
				u.jsx('button', { onClick: r, children: 'Yes (Delete Restaurant)' }),
				u.jsx('button', { onClick: t, children: 'No (Cancel Delete)' }),
			],
		}),
	});
}
function yx({ city: e, state: t }) {
	const n = Ee(),
		r = _n(),
		l = ee((a) => a.session.user),
		i = ee((a) => a.restaurants.AllRestaurants);
	g.useEffect(() => {
		n(Fl());
	}, [n]);
	const o = Object.values(i).filter((a) => a.owner_id === l.id);
	return u.jsx('div', {
		className: 'restaurant-list',
		children: o.map((a) =>
			u.jsxs(
				'div',
				{
					className: 'restaurant-tile',
					children: [
						u.jsx('img', {
							src: a.banner_img,
							alt: a.name,
							className: 'restaurant-image',
						}),
						u.jsxs('div', {
							className: 'restaurant-info',
							onClick: () => r(`/restaurants/${a.id}`),
							children: [
								u.jsx('h2', { children: a.name }),
								u.jsx('p', { children: a.avg_rating }),
								u.jsx('p', { children: a.categories.join(' • ') }),
								u.jsx('p', { children: a.description }),
								(e && t) || (a.city && a.state)
									? u.jsxs('div', {
											className: 'restaurant-address',
											children: [
												a.address,
												', ',
												e || a.city,
												',',
												' ',
												t || a.state,
											],
									  })
									: null,
							],
						}),
						u.jsxs('div', {
							children: [
								u.jsxs('button', {
									id: 'update-restaurant-button',
									children: [
										u.jsx(Vo, {
											to: `/restaurants/current/${a.id}`,
											children: 'Update',
										}),
										' ',
									],
								}),
								u.jsx(ks, {
									id: 'delete-restaurant-modal-button',
									buttonText: 'Delete',
									modalComponent: u.jsx(vx, { restaurantId: a.id }),
								}),
							],
						}),
					],
				},
				a.id
			)
		),
	});
}
function gx() {
	const e = ee((l) => l.session.user),
		t = ee((l) => l.location),
		n = (e == null ? void 0 : e.city) || t.city,
		r = (e == null ? void 0 : e.state) || t.state;
	return u.jsxs(u.Fragment, {
		children: [
			u.jsx('h1', { children: 'Restaurant Management' }),
			u.jsx('button', {
				id: 'create-restaurant-button',
				children: u.jsx(Vo, {
					to: '/restaurants/new',
					children: 'Submit a New Restaurant',
				}),
			}),
			u.jsx(yx, { city: n, state: r }),
		],
	});
}
const wx = u1([
	{
		element: u.jsx(rx, {}),
		children: [
			{ path: '/', element: u.jsx(hx, {}) },
			{ path: '/login', element: u.jsx(Iw, {}) },
			{ path: '/signup', element: u.jsx(Fw, {}) },
			{ path: '/restaurants/:id', element: u.jsx(fx, {}) },
			{ path: '/restaurants/new', element: u.jsx(Md, {}) },
			{ path: '/restaurants/current/:id', element: u.jsx(Md, {}) },
			{ path: '/restaurants/:id/reviews', element: u.jsx(sm, {}) },
			{ path: '/menu-items/:id/ratings', element: u.jsx(mx, {}) },
			{ path: '/restaurants/current', element: u.jsx(gx, {}) },
		],
	},
]);
const xx = Ow();
Na.createRoot(document.getElementById('root')).render(
	u.jsx(Bt.StrictMode, {
		children: u.jsx(Ug, { store: xx, children: u.jsx(y1, { router: wx }) }),
	})
);
