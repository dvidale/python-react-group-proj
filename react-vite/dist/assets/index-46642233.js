function Td(e, t) {
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
function Ld(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Md = { exports: {} },
	Xi = {},
	Dd = { exports: {} },
	X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pl = Symbol.for('react.element'),
	jm = Symbol.for('react.portal'),
	Cm = Symbol.for('react.fragment'),
	_m = Symbol.for('react.strict_mode'),
	Nm = Symbol.for('react.profiler'),
	km = Symbol.for('react.provider'),
	Rm = Symbol.for('react.context'),
	Pm = Symbol.for('react.forward_ref'),
	Tm = Symbol.for('react.suspense'),
	Lm = Symbol.for('react.memo'),
	Mm = Symbol.for('react.lazy'),
	Bu = Symbol.iterator;
function Dm(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Bu && e[Bu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Od = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Id = Object.assign,
	zd = {};
function Rr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = zd),
		(this.updater = n || Od);
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Rr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Fd() {}
Fd.prototype = Rr.prototype;
function _s(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = zd),
		(this.updater = n || Od);
}
var Ns = (_s.prototype = new Fd());
Ns.constructor = _s;
Id(Ns, Rr.prototype);
Ns.isPureReactComponent = !0;
var Vu = Array.isArray,
	$d = Object.prototype.hasOwnProperty,
	ks = { current: null },
	Ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ud(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (i = '' + t.key),
		t))
			$d.call(t, r) && !Ad.hasOwnProperty(r) && (l[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) l.children = n;
	else if (1 < a) {
		for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
		l.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
	return {
		$$typeof: Pl,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: ks.current,
	};
}
function Om(e, t) {
	return {
		$$typeof: Pl,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Rs(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Pl;
}
function Im(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Hu = /\/+/g;
function Go(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Im('' + e.key)
		: t.toString(36);
}
function ai(e, t, n, r, l) {
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
					case Pl:
					case jm:
						o = !0;
				}
		}
	if (o)
		return (
			(o = e),
			(l = l(o)),
			(e = r === '' ? '.' + Go(o, 0) : r),
			Vu(l)
				? ((n = ''),
				  e != null && (n = e.replace(Hu, '$&/') + '/'),
				  ai(l, t, n, '', function (c) {
						return c;
				  }))
				: l != null &&
				  (Rs(l) &&
						(l = Om(
							l,
							n +
								(!l.key || (o && o.key === l.key)
									? ''
									: ('' + l.key).replace(Hu, '$&/') + '/') +
								e
						)),
				  t.push(l)),
			1
		);
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Vu(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var u = r + Go(i, a);
			o += ai(i, t, n, u, l);
		}
	else if (((u = Dm(e)), typeof u == 'function'))
		for (e = u.call(e), a = 0; !(i = e.next()).done; )
			(i = i.value), (u = r + Go(i, a++)), (o += ai(i, t, n, u, l));
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
function Hl(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		ai(e, r, '', '', function (i) {
			return t.call(n, i, l++);
		}),
		r
	);
}
function zm(e) {
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
var Ye = { current: null },
	si = { transition: null },
	Fm = {
		ReactCurrentDispatcher: Ye,
		ReactCurrentBatchConfig: si,
		ReactCurrentOwner: ks,
	};
X.Children = {
	map: Hl,
	forEach: function (e, t, n) {
		Hl(
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
			Hl(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Hl(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Rs(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
X.Component = Rr;
X.Fragment = Cm;
X.Profiler = Nm;
X.PureComponent = _s;
X.StrictMode = _m;
X.Suspense = Tm;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
X.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Id({}, e.props),
		l = e.key,
		i = e.ref,
		o = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (o = ks.current)),
			t.key !== void 0 && (l = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (u in t)
			$d.call(t, u) &&
				!Ad.hasOwnProperty(u) &&
				(r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		a = Array(u);
		for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
		r.children = a;
	}
	return { $$typeof: Pl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
X.createContext = function (e) {
	return (
		(e = {
			$$typeof: Rm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: km, _context: e }),
		(e.Consumer = e)
	);
};
X.createElement = Ud;
X.createFactory = function (e) {
	var t = Ud.bind(null, e);
	return (t.type = e), t;
};
X.createRef = function () {
	return { current: null };
};
X.forwardRef = function (e) {
	return { $$typeof: Pm, render: e };
};
X.isValidElement = Rs;
X.lazy = function (e) {
	return { $$typeof: Mm, _payload: { _status: -1, _result: e }, _init: zm };
};
X.memo = function (e, t) {
	return { $$typeof: Lm, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
	var t = si.transition;
	si.transition = {};
	try {
		e();
	} finally {
		si.transition = t;
	}
};
X.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
X.useCallback = function (e, t) {
	return Ye.current.useCallback(e, t);
};
X.useContext = function (e) {
	return Ye.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
	return Ye.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
	return Ye.current.useEffect(e, t);
};
X.useId = function () {
	return Ye.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
	return Ye.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
	return Ye.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
	return Ye.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
	return Ye.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
	return Ye.current.useReducer(e, t, n);
};
X.useRef = function (e) {
	return Ye.current.useRef(e);
};
X.useState = function (e) {
	return Ye.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
	return Ye.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
	return Ye.current.useTransition();
};
X.version = '18.2.0';
Dd.exports = X;
var y = Dd.exports;
const Vt = Ld(y),
	$m = Td({ __proto__: null, default: Vt }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Am = y,
	Um = Symbol.for('react.element'),
	bm = Symbol.for('react.fragment'),
	Bm = Object.prototype.hasOwnProperty,
	Vm = Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function bd(e, t, n) {
	var r,
		l = {},
		i = null,
		o = null;
	n !== void 0 && (i = '' + n),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (o = t.ref);
	for (r in t) Bm.call(t, r) && !Hm.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Um,
		type: e,
		key: i,
		ref: o,
		props: l,
		_owner: Vm.current,
	};
}
Xi.Fragment = bm;
Xi.jsx = bd;
Xi.jsxs = bd;
Md.exports = Xi;
var s = Md.exports,
	Ra = {},
	Bd = { exports: {} },
	ut = {},
	Vd = { exports: {} },
	Hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(I, H) {
		var W = I.length;
		I.push(H);
		e: for (; 0 < W; ) {
			var J = (W - 1) >>> 1,
				fe = I[J];
			if (0 < l(fe, H)) (I[J] = H), (I[W] = fe), (W = J);
			else break e;
		}
	}
	function n(I) {
		return I.length === 0 ? null : I[0];
	}
	function r(I) {
		if (I.length === 0) return null;
		var H = I[0],
			W = I.pop();
		if (W !== H) {
			I[0] = W;
			e: for (var J = 0, fe = I.length, Pt = fe >>> 1; J < Pt; ) {
				var De = 2 * (J + 1) - 1,
					wt = I[De],
					He = De + 1,
					Qn = I[He];
				if (0 > l(wt, W))
					He < fe && 0 > l(Qn, wt)
						? ((I[J] = Qn), (I[He] = W), (J = He))
						: ((I[J] = wt), (I[De] = W), (J = De));
				else if (He < fe && 0 > l(Qn, W)) (I[J] = Qn), (I[He] = W), (J = He);
				else break e;
			}
		}
		return H;
	}
	function l(I, H) {
		var W = I.sortIndex - H.sortIndex;
		return W !== 0 ? W : I.id - H.id;
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
	var u = [],
		c = [],
		f = 1,
		d = null,
		m = 3,
		j = !1,
		x = !1,
		S = !1,
		N = typeof setTimeout == 'function' ? setTimeout : null,
		h = typeof clearTimeout == 'function' ? clearTimeout : null,
		p = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(I) {
		for (var H = n(c); H !== null; ) {
			if (H.callback === null) r(c);
			else if (H.startTime <= I)
				r(c), (H.sortIndex = H.expirationTime), t(u, H);
			else break;
			H = n(c);
		}
	}
	function C(I) {
		if (((S = !1), v(I), !x))
			if (n(u) !== null) (x = !0), Ve(P);
			else {
				var H = n(c);
				H !== null && ie(C, H.startTime - I);
			}
	}
	function P(I, H) {
		(x = !1), S && ((S = !1), h(T), (T = -1)), (j = !0);
		var W = m;
		try {
			for (
				v(H), d = n(u);
				d !== null && (!(d.expirationTime > H) || (I && !Y()));

			) {
				var J = d.callback;
				if (typeof J == 'function') {
					(d.callback = null), (m = d.priorityLevel);
					var fe = J(d.expirationTime <= H);
					(H = e.unstable_now()),
						typeof fe == 'function' ? (d.callback = fe) : d === n(u) && r(u),
						v(H);
				} else r(u);
				d = n(u);
			}
			if (d !== null) var Pt = !0;
			else {
				var De = n(c);
				De !== null && ie(C, De.startTime - H), (Pt = !1);
			}
			return Pt;
		} finally {
			(d = null), (m = W), (j = !1);
		}
	}
	var w = !1,
		R = null,
		T = -1,
		M = 5,
		O = -1;
	function Y() {
		return !(e.unstable_now() - O < M);
	}
	function le() {
		if (R !== null) {
			var I = e.unstable_now();
			O = I;
			var H = !0;
			try {
				H = R(!0, I);
			} finally {
				H ? $() : ((w = !1), (R = null));
			}
		} else w = !1;
	}
	var $;
	if (typeof p == 'function')
		$ = function () {
			p(le);
		};
	else if (typeof MessageChannel < 'u') {
		var A = new MessageChannel(),
			de = A.port2;
		(A.port1.onmessage = le),
			($ = function () {
				de.postMessage(null);
			});
	} else
		$ = function () {
			N(le, 0);
		};
	function Ve(I) {
		(R = I), w || ((w = !0), $());
	}
	function ie(I, H) {
		T = N(function () {
			I(e.unstable_now());
		}, H);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (I) {
			I.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			x || j || ((x = !0), Ve(P));
		}),
		(e.unstable_forceFrameRate = function (I) {
			0 > I || 125 < I
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (M = 0 < I ? Math.floor(1e3 / I) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return m;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (I) {
			switch (m) {
				case 1:
				case 2:
				case 3:
					var H = 3;
					break;
				default:
					H = m;
			}
			var W = m;
			m = H;
			try {
				return I();
			} finally {
				m = W;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (I, H) {
			switch (I) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					I = 3;
			}
			var W = m;
			m = I;
			try {
				return H();
			} finally {
				m = W;
			}
		}),
		(e.unstable_scheduleCallback = function (I, H, W) {
			var J = e.unstable_now();
			switch (
				(typeof W == 'object' && W !== null
					? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? J + W : J))
					: (W = J),
				I)
			) {
				case 1:
					var fe = -1;
					break;
				case 2:
					fe = 250;
					break;
				case 5:
					fe = 1073741823;
					break;
				case 4:
					fe = 1e4;
					break;
				default:
					fe = 5e3;
			}
			return (
				(fe = W + fe),
				(I = {
					id: f++,
					callback: H,
					priorityLevel: I,
					startTime: W,
					expirationTime: fe,
					sortIndex: -1,
				}),
				W > J
					? ((I.sortIndex = W),
					  t(c, I),
					  n(u) === null &&
							I === n(c) &&
							(S ? (h(T), (T = -1)) : (S = !0), ie(C, W - J)))
					: ((I.sortIndex = fe), t(u, I), x || j || ((x = !0), Ve(P))),
				I
			);
		}),
		(e.unstable_shouldYield = Y),
		(e.unstable_wrapCallback = function (I) {
			var H = m;
			return function () {
				var W = m;
				m = H;
				try {
					return I.apply(this, arguments);
				} finally {
					m = W;
				}
			};
		});
})(Hd);
Vd.exports = Hd;
var Wm = Vd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd = y,
	st = Wm;
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
var Qd = new Set(),
	sl = {};
function Hn(e, t) {
	yr(e, t), yr(e + 'Capture', t);
}
function yr(e, t) {
	for (sl[e] = t, e = 0; e < t.length; e++) Qd.add(t[e]);
}
var Qt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Pa = Object.prototype.hasOwnProperty,
	Qm =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Wu = {},
	Qu = {};
function Km(e) {
	return Pa.call(Qu, e)
		? !0
		: Pa.call(Wu, e)
		? !1
		: Qm.test(e)
		? (Qu[e] = !0)
		: ((Wu[e] = !0), !1);
}
function Gm(e, t, n, r) {
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
function Ym(e, t, n, r) {
	if (t === null || typeof t > 'u' || Gm(e, t, n, r)) return !0;
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
function Xe(e, t, n, r, l, i, o) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = o);
}
var Fe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		Fe[e] = new Xe(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	Fe[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	Fe[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	Fe[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		Fe[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	Fe[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	Fe[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	Fe[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	Fe[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ps = /[\-:]([a-z])/g;
function Ts(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ps, Ts);
		Fe[t] = new Xe(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ps, Ts);
		Fe[t] = new Xe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Ps, Ts);
	Fe[t] = new Xe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	Fe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Xe(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	Fe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ls(e, t, n, r) {
	var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Ym(t, n, l, r) && (n = null),
		r || l === null
			? Km(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var qt = Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Wl = Symbol.for('react.element'),
	Zn = Symbol.for('react.portal'),
	er = Symbol.for('react.fragment'),
	Ms = Symbol.for('react.strict_mode'),
	Ta = Symbol.for('react.profiler'),
	Kd = Symbol.for('react.provider'),
	Gd = Symbol.for('react.context'),
	Ds = Symbol.for('react.forward_ref'),
	La = Symbol.for('react.suspense'),
	Ma = Symbol.for('react.suspense_list'),
	Os = Symbol.for('react.memo'),
	on = Symbol.for('react.lazy'),
	Yd = Symbol.for('react.offscreen'),
	Ku = Symbol.iterator;
function Fr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Ku && e[Ku]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var xe = Object.assign,
	Yo;
function Gr(e) {
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
function qo(e, t) {
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
								var u =
									`
` + l[o].replace(' at new ', ' at ');
								return (
									e.displayName &&
										u.includes('<anonymous>') &&
										(u = u.replace('<anonymous>', e.displayName)),
									u
								);
							}
						while (1 <= o && 0 <= a);
					break;
				}
		}
	} finally {
		(Xo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Gr(e) : '';
}
function Xm(e) {
	switch (e.tag) {
		case 5:
			return Gr(e.type);
		case 16:
			return Gr('Lazy');
		case 13:
			return Gr('Suspense');
		case 19:
			return Gr('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = qo(e.type, !1)), e;
		case 11:
			return (e = qo(e.type.render, !1)), e;
		case 1:
			return (e = qo(e.type, !0)), e;
		default:
			return '';
	}
}
function Da(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case er:
			return 'Fragment';
		case Zn:
			return 'Portal';
		case Ta:
			return 'Profiler';
		case Ms:
			return 'StrictMode';
		case La:
			return 'Suspense';
		case Ma:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Gd:
				return (e.displayName || 'Context') + '.Consumer';
			case Kd:
				return (e._context.displayName || 'Context') + '.Provider';
			case Ds:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Os:
				return (
					(t = e.displayName || null), t !== null ? t : Da(e.type) || 'Memo'
				);
			case on:
				(t = e._payload), (e = e._init);
				try {
					return Da(e(t));
				} catch {}
		}
	return null;
}
function qm(e) {
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
			return Da(t);
		case 8:
			return t === Ms ? 'StrictMode' : 'Mode';
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
function xn(e) {
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
function Xd(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Jm(e) {
	var t = Xd(e) ? 'checked' : 'value',
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
function Ql(e) {
	e._valueTracker || (e._valueTracker = Jm(e));
}
function qd(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Xd(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function xi(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Oa(e, t) {
	var n = t.checked;
	return xe({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Gu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = xn(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function Jd(e, t) {
	(t = t.checked), t != null && Ls(e, 'checked', t, !1);
}
function Ia(e, t) {
	Jd(e, t);
	var n = xn(t.value),
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
		: t.hasOwnProperty('defaultValue') && za(e, t.type, xn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Yu(e, t, n) {
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
	(t !== 'number' || xi(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Yr = Array.isArray;
function fr(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + xn(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function Fa(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
	return xe({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function Xu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(L(92));
			if (Yr(n)) {
				if (1 < n.length) throw Error(L(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: xn(n) };
}
function Zd(e, t) {
	var n = xn(t.value),
		r = xn(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function qu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function ef(e) {
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
		? ef(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Kl,
	tf = (function (e) {
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
				Kl = Kl || document.createElement('div'),
					Kl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Kl.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function ul(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Zr = {
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
	Zm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Zr).forEach(function (e) {
	Zm.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zr[t] = Zr[e]);
	});
});
function nf(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Zr.hasOwnProperty(e) && Zr[e])
		? ('' + t).trim()
		: t + 'px';
}
function rf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				l = nf(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var ev = xe(
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
function Aa(e, t) {
	if (t) {
		if (ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ua(e, t) {
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
var ba = null;
function Is(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Ba = null,
	pr = null,
	hr = null;
function Ju(e) {
	if ((e = Ml(e))) {
		if (typeof Ba != 'function') throw Error(L(280));
		var t = e.stateNode;
		t && ((t = to(t)), Ba(e.stateNode, e.type, t));
	}
}
function lf(e) {
	pr ? (hr ? hr.push(e) : (hr = [e])) : (pr = e);
}
function of() {
	if (pr) {
		var e = pr,
			t = hr;
		if (((hr = pr = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
	}
}
function af(e, t) {
	return e(t);
}
function sf() {}
var Jo = !1;
function uf(e, t, n) {
	if (Jo) return e(t, n);
	Jo = !0;
	try {
		return af(e, t, n);
	} finally {
		(Jo = !1), (pr !== null || hr !== null) && (sf(), of());
	}
}
function cl(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = to(n);
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
var Va = !1;
if (Qt)
	try {
		var $r = {};
		Object.defineProperty($r, 'passive', {
			get: function () {
				Va = !0;
			},
		}),
			window.addEventListener('test', $r, $r),
			window.removeEventListener('test', $r, $r);
	} catch {
		Va = !1;
	}
function tv(e, t, n, r, l, i, o, a, u) {
	var c = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, c);
	} catch (f) {
		this.onError(f);
	}
}
var el = !1,
	Si = null,
	Ei = !1,
	Ha = null,
	nv = {
		onError: function (e) {
			(el = !0), (Si = e);
		},
	};
function rv(e, t, n, r, l, i, o, a, u) {
	(el = !1), (Si = null), tv.apply(nv, arguments);
}
function lv(e, t, n, r, l, i, o, a, u) {
	if ((rv.apply(this, arguments), el)) {
		if (el) {
			var c = Si;
			(el = !1), (Si = null);
		} else throw Error(L(198));
		Ei || ((Ei = !0), (Ha = c));
	}
}
function Wn(e) {
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
function cf(e) {
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
function Zu(e) {
	if (Wn(e) !== e) throw Error(L(188));
}
function iv(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Wn(e)), t === null)) throw Error(L(188));
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
				if (i === n) return Zu(l), e;
				if (i === r) return Zu(l), t;
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
function df(e) {
	return (e = iv(e)), e !== null ? ff(e) : null;
}
function ff(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = ff(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var pf = st.unstable_scheduleCallback,
	ec = st.unstable_cancelCallback,
	ov = st.unstable_shouldYield,
	av = st.unstable_requestPaint,
	_e = st.unstable_now,
	sv = st.unstable_getCurrentPriorityLevel,
	zs = st.unstable_ImmediatePriority,
	hf = st.unstable_UserBlockingPriority,
	ji = st.unstable_NormalPriority,
	uv = st.unstable_LowPriority,
	mf = st.unstable_IdlePriority,
	qi = null,
	Ot = null;
function cv(e) {
	if (Ot && typeof Ot.onCommitFiberRoot == 'function')
		try {
			Ot.onCommitFiberRoot(qi, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var _t = Math.clz32 ? Math.clz32 : pv,
	dv = Math.log,
	fv = Math.LN2;
function pv(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((dv(e) / fv) | 0)) | 0;
}
var Gl = 64,
	Yl = 4194304;
function Xr(e) {
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
function Ci(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		i = e.pingedLanes,
		o = n & 268435455;
	if (o !== 0) {
		var a = o & ~l;
		a !== 0 ? (r = Xr(a)) : ((i &= o), i !== 0 && (r = Xr(i)));
	} else (o = n & ~l), o !== 0 ? (r = Xr(o)) : i !== 0 && (r = Xr(i));
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
			(n = 31 - _t(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function hv(e, t) {
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
function mv(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var o = 31 - _t(i),
			a = 1 << o,
			u = l[o];
		u === -1
			? (!(a & n) || a & r) && (l[o] = hv(a, t))
			: u <= t && (e.expiredLanes |= a),
			(i &= ~a);
	}
}
function Wa(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function vf() {
	var e = Gl;
	return (Gl <<= 1), !(Gl & 4194240) && (Gl = 64), e;
}
function Zo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Tl(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - _t(t)),
		(e[t] = n);
}
function vv(e, t) {
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
		var l = 31 - _t(n),
			i = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
	}
}
function Fs(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - _t(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var te = 0;
function gf(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yf,
	$s,
	wf,
	xf,
	Sf,
	Qa = !1,
	Xl = [],
	fn = null,
	pn = null,
	hn = null,
	dl = new Map(),
	fl = new Map(),
	sn = [],
	gv =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function tc(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			fn = null;
			break;
		case 'dragenter':
		case 'dragleave':
			pn = null;
			break;
		case 'mouseover':
		case 'mouseout':
			hn = null;
			break;
		case 'pointerover':
		case 'pointerout':
			dl.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			fl.delete(t.pointerId);
	}
}
function Ar(e, t, n, r, l, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [l],
		  }),
		  t !== null && ((t = Ml(t)), t !== null && $s(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function yv(e, t, n, r, l) {
	switch (t) {
		case 'focusin':
			return (fn = Ar(fn, e, t, n, r, l)), !0;
		case 'dragenter':
			return (pn = Ar(pn, e, t, n, r, l)), !0;
		case 'mouseover':
			return (hn = Ar(hn, e, t, n, r, l)), !0;
		case 'pointerover':
			var i = l.pointerId;
			return dl.set(i, Ar(dl.get(i) || null, e, t, n, r, l)), !0;
		case 'gotpointercapture':
			return (
				(i = l.pointerId), fl.set(i, Ar(fl.get(i) || null, e, t, n, r, l)), !0
			);
	}
	return !1;
}
function Ef(e) {
	var t = Ln(e.target);
	if (t !== null) {
		var n = Wn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = cf(n)), t !== null)) {
					(e.blockedOn = t),
						Sf(e.priority, function () {
							wf(n);
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
function ui(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ba = r), n.target.dispatchEvent(r), (ba = null);
		} else return (t = Ml(n)), t !== null && $s(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function nc(e, t, n) {
	ui(e) && n.delete(t);
}
function wv() {
	(Qa = !1),
		fn !== null && ui(fn) && (fn = null),
		pn !== null && ui(pn) && (pn = null),
		hn !== null && ui(hn) && (hn = null),
		dl.forEach(nc),
		fl.forEach(nc);
}
function Ur(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Qa ||
			((Qa = !0),
			st.unstable_scheduleCallback(st.unstable_NormalPriority, wv)));
}
function pl(e) {
	function t(l) {
		return Ur(l, e);
	}
	if (0 < Xl.length) {
		Ur(Xl[0], e);
		for (var n = 1; n < Xl.length; n++) {
			var r = Xl[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		fn !== null && Ur(fn, e),
			pn !== null && Ur(pn, e),
			hn !== null && Ur(hn, e),
			dl.forEach(t),
			fl.forEach(t),
			n = 0;
		n < sn.length;
		n++
	)
		(r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
		Ef(n), n.blockedOn === null && sn.shift();
}
var mr = qt.ReactCurrentBatchConfig,
	_i = !0;
function xv(e, t, n, r) {
	var l = te,
		i = mr.transition;
	mr.transition = null;
	try {
		(te = 1), As(e, t, n, r);
	} finally {
		(te = l), (mr.transition = i);
	}
}
function Sv(e, t, n, r) {
	var l = te,
		i = mr.transition;
	mr.transition = null;
	try {
		(te = 4), As(e, t, n, r);
	} finally {
		(te = l), (mr.transition = i);
	}
}
function As(e, t, n, r) {
	if (_i) {
		var l = Ka(e, t, n, r);
		if (l === null) ua(e, t, r, Ni, n), tc(e, r);
		else if (yv(l, e, t, n, r)) r.stopPropagation();
		else if ((tc(e, r), t & 4 && -1 < gv.indexOf(e))) {
			for (; l !== null; ) {
				var i = Ml(l);
				if (
					(i !== null && yf(i),
					(i = Ka(e, t, n, r)),
					i === null && ua(e, t, r, Ni, n),
					i === l)
				)
					break;
				l = i;
			}
			l !== null && r.stopPropagation();
		} else ua(e, t, r, null, n);
	}
}
var Ni = null;
function Ka(e, t, n, r) {
	if (((Ni = null), (e = Is(r)), (e = Ln(e)), e !== null))
		if (((t = Wn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = cf(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Ni = e), null;
}
function jf(e) {
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
			switch (sv()) {
				case zs:
					return 1;
				case hf:
					return 4;
				case ji:
				case uv:
					return 16;
				case mf:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var cn = null,
	Us = null,
	ci = null;
function Cf() {
	if (ci) return ci;
	var e,
		t = Us,
		n = t.length,
		r,
		l = 'value' in cn ? cn.value : cn.textContent,
		i = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var o = n - e;
	for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
	return (ci = l.slice(e, 1 < r ? 1 - r : void 0));
}
function di(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function ql() {
	return !0;
}
function rc() {
	return !1;
}
function ct(e) {
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
				? ql
				: rc),
			(this.isPropagationStopped = rc),
			this
		);
	}
	return (
		xe(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = ql));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = ql));
			},
			persist: function () {},
			isPersistent: ql,
		}),
		t
	);
}
var Pr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	bs = ct(Pr),
	Ll = xe({}, Pr, { view: 0, detail: 0 }),
	Ev = ct(Ll),
	ea,
	ta,
	br,
	Ji = xe({}, Ll, {
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
		getModifierState: Bs,
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
				: (e !== br &&
						(br && e.type === 'mousemove'
							? ((ea = e.screenX - br.screenX), (ta = e.screenY - br.screenY))
							: (ta = ea = 0),
						(br = e)),
				  ea);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : ta;
		},
	}),
	lc = ct(Ji),
	jv = xe({}, Ji, { dataTransfer: 0 }),
	Cv = ct(jv),
	_v = xe({}, Ll, { relatedTarget: 0 }),
	na = ct(_v),
	Nv = xe({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	kv = ct(Nv),
	Rv = xe({}, Pr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Pv = ct(Rv),
	Tv = xe({}, Pr, { data: 0 }),
	ic = ct(Tv),
	Lv = {
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
	Mv = {
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
	Dv = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function Ov(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Dv[e]) ? !!t[e] : !1;
}
function Bs() {
	return Ov;
}
var Iv = xe({}, Ll, {
		key: function (e) {
			if (e.key) {
				var t = Lv[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = di(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Mv[e.keyCode] || 'Unidentified'
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
		getModifierState: Bs,
		charCode: function (e) {
			return e.type === 'keypress' ? di(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? di(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	zv = ct(Iv),
	Fv = xe({}, Ji, {
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
	oc = ct(Fv),
	$v = xe({}, Ll, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Bs,
	}),
	Av = ct($v),
	Uv = xe({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	bv = ct(Uv),
	Bv = xe({}, Ji, {
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
	Vv = ct(Bv),
	Hv = [9, 13, 27, 32],
	Vs = Qt && 'CompositionEvent' in window,
	tl = null;
Qt && 'documentMode' in document && (tl = document.documentMode);
var Wv = Qt && 'TextEvent' in window && !tl,
	_f = Qt && (!Vs || (tl && 8 < tl && 11 >= tl)),
	ac = String.fromCharCode(32),
	sc = !1;
function Nf(e, t) {
	switch (e) {
		case 'keyup':
			return Hv.indexOf(t.keyCode) !== -1;
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
function kf(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var tr = !1;
function Qv(e, t) {
	switch (e) {
		case 'compositionend':
			return kf(t);
		case 'keypress':
			return t.which !== 32 ? null : ((sc = !0), ac);
		case 'textInput':
			return (e = t.data), e === ac && sc ? null : e;
		default:
			return null;
	}
}
function Kv(e, t) {
	if (tr)
		return e === 'compositionend' || (!Vs && Nf(e, t))
			? ((e = Cf()), (ci = Us = cn = null), (tr = !1), e)
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
			return _f && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Gv = {
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
function uc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Gv[e.type] : t === 'textarea';
}
function Rf(e, t, n, r) {
	lf(r),
		(t = ki(t, 'onChange')),
		0 < t.length &&
			((n = new bs('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var nl = null,
	hl = null;
function Yv(e) {
	Af(e, 0);
}
function Zi(e) {
	var t = lr(e);
	if (qd(t)) return e;
}
function Xv(e, t) {
	if (e === 'change') return t;
}
var Pf = !1;
if (Qt) {
	var ra;
	if (Qt) {
		var la = 'oninput' in document;
		if (!la) {
			var cc = document.createElement('div');
			cc.setAttribute('oninput', 'return;'),
				(la = typeof cc.oninput == 'function');
		}
		ra = la;
	} else ra = !1;
	Pf = ra && (!document.documentMode || 9 < document.documentMode);
}
function dc() {
	nl && (nl.detachEvent('onpropertychange', Tf), (hl = nl = null));
}
function Tf(e) {
	if (e.propertyName === 'value' && Zi(hl)) {
		var t = [];
		Rf(t, hl, e, Is(e)), uf(Yv, t);
	}
}
function qv(e, t, n) {
	e === 'focusin'
		? (dc(), (nl = t), (hl = n), nl.attachEvent('onpropertychange', Tf))
		: e === 'focusout' && dc();
}
function Jv(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Zi(hl);
}
function Zv(e, t) {
	if (e === 'click') return Zi(t);
}
function eg(e, t) {
	if (e === 'input' || e === 'change') return Zi(t);
}
function tg(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == 'function' ? Object.is : tg;
function ml(e, t) {
	if (kt(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!Pa.call(t, l) || !kt(e[l], t[l])) return !1;
	}
	return !0;
}
function fc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function pc(e, t) {
	var n = fc(e);
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
		n = fc(n);
	}
}
function Lf(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Lf(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Mf() {
	for (var e = window, t = xi(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = xi(e.document);
	}
	return t;
}
function Hs(e) {
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
function ng(e) {
	var t = Mf(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Lf(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Hs(n)) {
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
					(l = pc(n, i));
				var o = pc(n, r);
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
var rg = Qt && 'documentMode' in document && 11 >= document.documentMode,
	nr = null,
	Ga = null,
	rl = null,
	Ya = !1;
function hc(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ya ||
		nr == null ||
		nr !== xi(r) ||
		((r = nr),
		'selectionStart' in r && Hs(r)
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
		(rl && ml(rl, r)) ||
			((rl = r),
			(r = ki(Ga, 'onSelect')),
			0 < r.length &&
				((t = new bs('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = nr))));
}
function Jl(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var rr = {
		animationend: Jl('Animation', 'AnimationEnd'),
		animationiteration: Jl('Animation', 'AnimationIteration'),
		animationstart: Jl('Animation', 'AnimationStart'),
		transitionend: Jl('Transition', 'TransitionEnd'),
	},
	ia = {},
	Df = {};
Qt &&
	((Df = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete rr.animationend.animation,
		delete rr.animationiteration.animation,
		delete rr.animationstart.animation),
	'TransitionEvent' in window || delete rr.transitionend.transition);
function eo(e) {
	if (ia[e]) return ia[e];
	if (!rr[e]) return e;
	var t = rr[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Df) return (ia[e] = t[n]);
	return e;
}
var Of = eo('animationend'),
	If = eo('animationiteration'),
	zf = eo('animationstart'),
	Ff = eo('transitionend'),
	$f = new Map(),
	mc =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function jn(e, t) {
	$f.set(e, t), Hn(t, [e]);
}
for (var oa = 0; oa < mc.length; oa++) {
	var aa = mc[oa],
		lg = aa.toLowerCase(),
		ig = aa[0].toUpperCase() + aa.slice(1);
	jn(lg, 'on' + ig);
}
jn(Of, 'onAnimationEnd');
jn(If, 'onAnimationIteration');
jn(zf, 'onAnimationStart');
jn('dblclick', 'onDoubleClick');
jn('focusin', 'onFocus');
jn('focusout', 'onBlur');
jn(Ff, 'onTransitionEnd');
yr('onMouseEnter', ['mouseout', 'mouseover']);
yr('onMouseLeave', ['mouseout', 'mouseover']);
yr('onPointerEnter', ['pointerout', 'pointerover']);
yr('onPointerLeave', ['pointerout', 'pointerover']);
Hn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Hn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
Hn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Hn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Hn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Hn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var qr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	og = new Set('cancel close invalid load scroll toggle'.split(' ').concat(qr));
function vc(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), lv(r, t, void 0, e), (e.currentTarget = null);
}
function Af(e, t) {
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
						u = a.instance,
						c = a.currentTarget;
					if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
					vc(l, a, c), (i = u);
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((a = r[o]),
						(u = a.instance),
						(c = a.currentTarget),
						(a = a.listener),
						u !== i && l.isPropagationStopped())
					)
						break e;
					vc(l, a, c), (i = u);
				}
		}
	}
	if (Ei) throw ((e = Ha), (Ei = !1), (Ha = null), e);
}
function pe(e, t) {
	var n = t[es];
	n === void 0 && (n = t[es] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Uf(t, e, 2, !1), n.add(r));
}
function sa(e, t, n) {
	var r = 0;
	t && (r |= 4), Uf(n, e, r, t);
}
var Zl = '_reactListening' + Math.random().toString(36).slice(2);
function vl(e) {
	if (!e[Zl]) {
		(e[Zl] = !0),
			Qd.forEach(function (n) {
				n !== 'selectionchange' && (og.has(n) || sa(n, !1, e), sa(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Zl] || ((t[Zl] = !0), sa('selectionchange', !1, t));
	}
}
function Uf(e, t, n, r) {
	switch (jf(t)) {
		case 1:
			var l = xv;
			break;
		case 4:
			l = Sv;
			break;
		default:
			l = As;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!Va ||
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
						var u = o.tag;
						if (
							(u === 3 || u === 4) &&
							((u = o.stateNode.containerInfo),
							u === l || (u.nodeType === 8 && u.parentNode === l))
						)
							return;
						o = o.return;
					}
				for (; a !== null; ) {
					if (((o = Ln(a)), o === null)) return;
					if (((u = o.tag), u === 5 || u === 6)) {
						r = i = o;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	uf(function () {
		var c = i,
			f = Is(n),
			d = [];
		e: {
			var m = $f.get(e);
			if (m !== void 0) {
				var j = bs,
					x = e;
				switch (e) {
					case 'keypress':
						if (di(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						j = zv;
						break;
					case 'focusin':
						(x = 'focus'), (j = na);
						break;
					case 'focusout':
						(x = 'blur'), (j = na);
						break;
					case 'beforeblur':
					case 'afterblur':
						j = na;
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
						j = lc;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						j = Cv;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						j = Av;
						break;
					case Of:
					case If:
					case zf:
						j = kv;
						break;
					case Ff:
						j = bv;
						break;
					case 'scroll':
						j = Ev;
						break;
					case 'wheel':
						j = Vv;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						j = Pv;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						j = oc;
				}
				var S = (t & 4) !== 0,
					N = !S && e === 'scroll',
					h = S ? (m !== null ? m + 'Capture' : null) : m;
				S = [];
				for (var p = c, v; p !== null; ) {
					v = p;
					var C = v.stateNode;
					if (
						(v.tag === 5 &&
							C !== null &&
							((v = C),
							h !== null && ((C = cl(p, h)), C != null && S.push(gl(p, C, v)))),
						N)
					)
						break;
					p = p.return;
				}
				0 < S.length &&
					((m = new j(m, x, null, n, f)), d.push({ event: m, listeners: S }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((m = e === 'mouseover' || e === 'pointerover'),
					(j = e === 'mouseout' || e === 'pointerout'),
					m &&
						n !== ba &&
						(x = n.relatedTarget || n.fromElement) &&
						(Ln(x) || x[Kt]))
				)
					break e;
				if (
					(j || m) &&
					((m =
						f.window === f
							? f
							: (m = f.ownerDocument)
							? m.defaultView || m.parentWindow
							: window),
					j
						? ((x = n.relatedTarget || n.toElement),
						  (j = c),
						  (x = x ? Ln(x) : null),
						  x !== null &&
								((N = Wn(x)), x !== N || (x.tag !== 5 && x.tag !== 6)) &&
								(x = null))
						: ((j = null), (x = c)),
					j !== x)
				) {
					if (
						((S = lc),
						(C = 'onMouseLeave'),
						(h = 'onMouseEnter'),
						(p = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((S = oc),
							(C = 'onPointerLeave'),
							(h = 'onPointerEnter'),
							(p = 'pointer')),
						(N = j == null ? m : lr(j)),
						(v = x == null ? m : lr(x)),
						(m = new S(C, p + 'leave', j, n, f)),
						(m.target = N),
						(m.relatedTarget = v),
						(C = null),
						Ln(f) === c &&
							((S = new S(h, p + 'enter', x, n, f)),
							(S.target = v),
							(S.relatedTarget = N),
							(C = S)),
						(N = C),
						j && x)
					)
						t: {
							for (S = j, h = x, p = 0, v = S; v; v = qn(v)) p++;
							for (v = 0, C = h; C; C = qn(C)) v++;
							for (; 0 < p - v; ) (S = qn(S)), p--;
							for (; 0 < v - p; ) (h = qn(h)), v--;
							for (; p--; ) {
								if (S === h || (h !== null && S === h.alternate)) break t;
								(S = qn(S)), (h = qn(h));
							}
							S = null;
						}
					else S = null;
					j !== null && gc(d, m, j, S, !1),
						x !== null && N !== null && gc(d, N, x, S, !0);
				}
			}
			e: {
				if (
					((m = c ? lr(c) : window),
					(j = m.nodeName && m.nodeName.toLowerCase()),
					j === 'select' || (j === 'input' && m.type === 'file'))
				)
					var P = Xv;
				else if (uc(m))
					if (Pf) P = eg;
					else {
						P = Jv;
						var w = qv;
					}
				else
					(j = m.nodeName) &&
						j.toLowerCase() === 'input' &&
						(m.type === 'checkbox' || m.type === 'radio') &&
						(P = Zv);
				if (P && (P = P(e, c))) {
					Rf(d, P, n, f);
					break e;
				}
				w && w(e, m, c),
					e === 'focusout' &&
						(w = m._wrapperState) &&
						w.controlled &&
						m.type === 'number' &&
						za(m, 'number', m.value);
			}
			switch (((w = c ? lr(c) : window), e)) {
				case 'focusin':
					(uc(w) || w.contentEditable === 'true') &&
						((nr = w), (Ga = c), (rl = null));
					break;
				case 'focusout':
					rl = Ga = nr = null;
					break;
				case 'mousedown':
					Ya = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Ya = !1), hc(d, n, f);
					break;
				case 'selectionchange':
					if (rg) break;
				case 'keydown':
				case 'keyup':
					hc(d, n, f);
			}
			var R;
			if (Vs)
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
				tr
					? Nf(e, n) && (T = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
			T &&
				(_f &&
					n.locale !== 'ko' &&
					(tr || T !== 'onCompositionStart'
						? T === 'onCompositionEnd' && tr && (R = Cf())
						: ((cn = f),
						  (Us = 'value' in cn ? cn.value : cn.textContent),
						  (tr = !0))),
				(w = ki(c, T)),
				0 < w.length &&
					((T = new ic(T, e, null, n, f)),
					d.push({ event: T, listeners: w }),
					R ? (T.data = R) : ((R = kf(n)), R !== null && (T.data = R)))),
				(R = Wv ? Qv(e, n) : Kv(e, n)) &&
					((c = ki(c, 'onBeforeInput')),
					0 < c.length &&
						((f = new ic('onBeforeInput', 'beforeinput', null, n, f)),
						d.push({ event: f, listeners: c }),
						(f.data = R)));
		}
		Af(d, t);
	});
}
function gl(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function ki(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var l = e,
			i = l.stateNode;
		l.tag === 5 &&
			i !== null &&
			((l = i),
			(i = cl(e, n)),
			i != null && r.unshift(gl(e, i, l)),
			(i = cl(e, t)),
			i != null && r.push(gl(e, i, l))),
			(e = e.return);
	}
	return r;
}
function qn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function gc(e, t, n, r, l) {
	for (var i = t._reactName, o = []; n !== null && n !== r; ) {
		var a = n,
			u = a.alternate,
			c = a.stateNode;
		if (u !== null && u === r) break;
		a.tag === 5 &&
			c !== null &&
			((a = c),
			l
				? ((u = cl(n, i)), u != null && o.unshift(gl(n, u, a)))
				: l || ((u = cl(n, i)), u != null && o.push(gl(n, u, a)))),
			(n = n.return);
	}
	o.length !== 0 && e.push({ event: t, listeners: o });
}
var ag = /\r\n?/g,
	sg = /\u0000|\uFFFD/g;
function yc(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			ag,
			`
`
		)
		.replace(sg, '');
}
function ei(e, t, n) {
	if (((t = yc(t)), yc(e) !== t && n)) throw Error(L(425));
}
function Ri() {}
var Xa = null,
	qa = null;
function Ja(e, t) {
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
var Za = typeof setTimeout == 'function' ? setTimeout : void 0,
	ug = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	wc = typeof Promise == 'function' ? Promise : void 0,
	cg =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof wc < 'u'
			? function (e) {
					return wc.resolve(null).then(e).catch(dg);
			  }
			: Za;
function dg(e) {
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
					e.removeChild(l), pl(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = l;
	} while (n);
	pl(t);
}
function mn(e) {
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
function xc(e) {
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
var Tr = Math.random().toString(36).slice(2),
	Dt = '__reactFiber$' + Tr,
	yl = '__reactProps$' + Tr,
	Kt = '__reactContainer$' + Tr,
	es = '__reactEvents$' + Tr,
	fg = '__reactListeners$' + Tr,
	pg = '__reactHandles$' + Tr;
function Ln(e) {
	var t = e[Dt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[Kt] || n[Dt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = xc(e); e !== null; ) {
					if ((n = e[Dt])) return n;
					e = xc(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Ml(e) {
	return (
		(e = e[Dt] || e[Kt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function lr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(L(33));
}
function to(e) {
	return e[yl] || null;
}
var ts = [],
	ir = -1;
function Cn(e) {
	return { current: e };
}
function he(e) {
	0 > ir || ((e.current = ts[ir]), (ts[ir] = null), ir--);
}
function ce(e, t) {
	ir++, (ts[ir] = e.current), (e.current = t);
}
var Sn = {},
	Be = Cn(Sn),
	et = Cn(!1),
	$n = Sn;
function wr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Sn;
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
function tt(e) {
	return (e = e.childContextTypes), e != null;
}
function Pi() {
	he(et), he(Be);
}
function Sc(e, t, n) {
	if (Be.current !== Sn) throw Error(L(168));
	ce(Be, t), ce(et, n);
}
function bf(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(L(108, qm(e) || 'Unknown', l));
	return xe({}, n, r);
}
function Ti(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
		($n = Be.current),
		ce(Be, e),
		ce(et, et.current),
		!0
	);
}
function Ec(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(L(169));
	n
		? ((e = bf(e, t, $n)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  he(et),
		  he(Be),
		  ce(Be, e))
		: he(et),
		ce(et, n);
}
var Ut = null,
	no = !1,
	da = !1;
function Bf(e) {
	Ut === null ? (Ut = [e]) : Ut.push(e);
}
function hg(e) {
	(no = !0), Bf(e);
}
function _n() {
	if (!da && Ut !== null) {
		da = !0;
		var e = 0,
			t = te;
		try {
			var n = Ut;
			for (te = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Ut = null), (no = !1);
		} catch (l) {
			throw (Ut !== null && (Ut = Ut.slice(e + 1)), pf(zs, _n), l);
		} finally {
			(te = t), (da = !1);
		}
	}
	return null;
}
var or = [],
	ar = 0,
	Li = null,
	Mi = 0,
	ft = [],
	pt = 0,
	An = null,
	bt = 1,
	Bt = '';
function Rn(e, t) {
	(or[ar++] = Mi), (or[ar++] = Li), (Li = e), (Mi = t);
}
function Vf(e, t, n) {
	(ft[pt++] = bt), (ft[pt++] = Bt), (ft[pt++] = An), (An = e);
	var r = bt;
	e = Bt;
	var l = 32 - _t(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var i = 32 - _t(t) + l;
	if (30 < i) {
		var o = l - (l % 5);
		(i = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(l -= o),
			(bt = (1 << (32 - _t(t) + l)) | (n << l) | r),
			(Bt = i + e);
	} else (bt = (1 << i) | (n << l) | r), (Bt = e);
}
function Ws(e) {
	e.return !== null && (Rn(e, 1), Vf(e, 1, 0));
}
function Qs(e) {
	for (; e === Li; )
		(Li = or[--ar]), (or[ar] = null), (Mi = or[--ar]), (or[ar] = null);
	for (; e === An; )
		(An = ft[--pt]),
			(ft[pt] = null),
			(Bt = ft[--pt]),
			(ft[pt] = null),
			(bt = ft[--pt]),
			(ft[pt] = null);
}
var at = null,
	ot = null,
	ve = !1,
	Ct = null;
function Hf(e, t) {
	var n = ht(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function jc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (at = e), (ot = mn(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (at = e), (ot = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = An !== null ? { id: bt, overflow: Bt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = ht(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (at = e),
					  (ot = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function ns(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rs(e) {
	if (ve) {
		var t = ot;
		if (t) {
			var n = t;
			if (!jc(e, t)) {
				if (ns(e)) throw Error(L(418));
				t = mn(n.nextSibling);
				var r = at;
				t && jc(e, t)
					? Hf(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (ve = !1), (at = e));
			}
		} else {
			if (ns(e)) throw Error(L(418));
			(e.flags = (e.flags & -4097) | 2), (ve = !1), (at = e);
		}
	}
}
function Cc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	at = e;
}
function ti(e) {
	if (e !== at) return !1;
	if (!ve) return Cc(e), (ve = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !Ja(e.type, e.memoizedProps))),
		t && (t = ot))
	) {
		if (ns(e)) throw (Wf(), Error(L(418)));
		for (; t; ) Hf(e, t), (t = mn(t.nextSibling));
	}
	if ((Cc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(L(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							ot = mn(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ot = null;
		}
	} else ot = at ? mn(e.stateNode.nextSibling) : null;
	return !0;
}
function Wf() {
	for (var e = ot; e; ) e = mn(e.nextSibling);
}
function xr() {
	(ot = at = null), (ve = !1);
}
function Ks(e) {
	Ct === null ? (Ct = [e]) : Ct.push(e);
}
var mg = qt.ReactCurrentBatchConfig;
function St(e, t) {
	if (e && e.defaultProps) {
		(t = xe({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Di = Cn(null),
	Oi = null,
	sr = null,
	Gs = null;
function Ys() {
	Gs = sr = Oi = null;
}
function Xs(e) {
	var t = Di.current;
	he(Di), (e._currentValue = t);
}
function ls(e, t, n) {
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
function vr(e, t) {
	(Oi = e),
		(Gs = sr = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function vt(e) {
	var t = e._currentValue;
	if (Gs !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
			if (Oi === null) throw Error(L(308));
			(sr = e), (Oi.dependencies = { lanes: 0, firstContext: e });
		} else sr = sr.next = e;
	return t;
}
var Mn = null;
function qs(e) {
	Mn === null ? (Mn = [e]) : Mn.push(e);
}
function Qf(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), qs(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		Gt(e, r)
	);
}
function Gt(e, t) {
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
var an = !1;
function Js(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Kf(e, t) {
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
function vn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), q & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			Gt(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), qs(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		Gt(e, n)
	);
}
function fi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
	}
}
function _c(e, t) {
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
function Ii(e, t, n, r) {
	var l = e.updateQueue;
	an = !1;
	var i = l.firstBaseUpdate,
		o = l.lastBaseUpdate,
		a = l.shared.pending;
	if (a !== null) {
		l.shared.pending = null;
		var u = a,
			c = u.next;
		(u.next = null), o === null ? (i = c) : (o.next = c), (o = u);
		var f = e.alternate;
		f !== null &&
			((f = f.updateQueue),
			(a = f.lastBaseUpdate),
			a !== o &&
				(a === null ? (f.firstBaseUpdate = c) : (a.next = c),
				(f.lastBaseUpdate = u)));
	}
	if (i !== null) {
		var d = l.baseState;
		(o = 0), (f = c = u = null), (a = i);
		do {
			var m = a.lane,
				j = a.eventTime;
			if ((r & m) === m) {
				f !== null &&
					(f = f.next =
						{
							eventTime: j,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var x = e,
						S = a;
					switch (((m = t), (j = n), S.tag)) {
						case 1:
							if (((x = S.payload), typeof x == 'function')) {
								d = x.call(j, d, m);
								break e;
							}
							d = x;
							break e;
						case 3:
							x.flags = (x.flags & -65537) | 128;
						case 0:
							if (
								((x = S.payload),
								(m = typeof x == 'function' ? x.call(j, d, m) : x),
								m == null)
							)
								break e;
							d = xe({}, d, m);
							break e;
						case 2:
							an = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(m = l.effects),
					m === null ? (l.effects = [a]) : m.push(a));
			} else
				(j = {
					eventTime: j,
					lane: m,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					f === null ? ((c = f = j), (u = d)) : (f = f.next = j),
					(o |= m);
			if (((a = a.next), a === null)) {
				if (((a = l.shared.pending), a === null)) break;
				(m = a),
					(a = m.next),
					(m.next = null),
					(l.lastBaseUpdate = m),
					(l.shared.pending = null);
			}
		} while (1);
		if (
			(f === null && (u = d),
			(l.baseState = u),
			(l.firstBaseUpdate = c),
			(l.lastBaseUpdate = f),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (o |= l.lane), (l = l.next);
			while (l !== t);
		} else i === null && (l.shared.lanes = 0);
		(bn |= o), (e.lanes = o), (e.memoizedState = d);
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
var Gf = new Wd.Component().refs;
function is(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : xe({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ro = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Wn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ge(),
			l = yn(e),
			i = Ht(r, l);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = vn(e, i, l)),
			t !== null && (Nt(t, e, l, r), fi(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = Ge(),
			l = yn(e),
			i = Ht(r, l);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = vn(e, i, l)),
			t !== null && (Nt(t, e, l, r), fi(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = Ge(),
			r = yn(e),
			l = Ht(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = vn(e, l, r)),
			t !== null && (Nt(t, e, r, n), fi(t, e, r));
	},
};
function kc(e, t, n, r, l, i, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, i, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !ml(n, r) || !ml(l, i)
			: !0
	);
}
function Yf(e, t, n) {
	var r = !1,
		l = Sn,
		i = t.contextType;
	return (
		typeof i == 'object' && i !== null
			? (i = vt(i))
			: ((l = tt(t) ? $n : Be.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? wr(e, l) : Sn)),
		(t = new t(n, i)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = ro),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Rc(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function os(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = Gf), Js(e);
	var i = t.contextType;
	typeof i == 'object' && i !== null
		? (l.context = vt(i))
		: ((i = tt(t) ? $n : Be.current), (l.context = wr(e, i))),
		(l.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == 'function' && (is(e, t, i, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof l.getSnapshotBeforeUpdate == 'function' ||
			(typeof l.UNSAFE_componentWillMount != 'function' &&
				typeof l.componentWillMount != 'function') ||
			((t = l.state),
			typeof l.componentWillMount == 'function' && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == 'function' &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && ro.enqueueReplaceState(l, l.state, null),
			Ii(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Br(e, t, n) {
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
						a === Gf && (a = l.refs = {}),
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
function ni(e, t) {
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
function Pc(e) {
	var t = e._init;
	return t(e._payload);
}
function Xf(e) {
	function t(h, p) {
		if (e) {
			var v = h.deletions;
			v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
		}
	}
	function n(h, p) {
		if (!e) return null;
		for (; p !== null; ) t(h, p), (p = p.sibling);
		return null;
	}
	function r(h, p) {
		for (h = new Map(); p !== null; )
			p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
		return h;
	}
	function l(h, p) {
		return (h = wn(h, p)), (h.index = 0), (h.sibling = null), h;
	}
	function i(h, p, v) {
		return (
			(h.index = v),
			e
				? ((v = h.alternate),
				  v !== null
						? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
						: ((h.flags |= 2), p))
				: ((h.flags |= 1048576), p)
		);
	}
	function o(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function a(h, p, v, C) {
		return p === null || p.tag !== 6
			? ((p = ya(v, h.mode, C)), (p.return = h), p)
			: ((p = l(p, v)), (p.return = h), p);
	}
	function u(h, p, v, C) {
		var P = v.type;
		return P === er
			? f(h, p, v.props.children, C, v.key)
			: p !== null &&
			  (p.elementType === P ||
					(typeof P == 'object' &&
						P !== null &&
						P.$$typeof === on &&
						Pc(P) === p.type))
			? ((C = l(p, v.props)), (C.ref = Br(h, p, v)), (C.return = h), C)
			: ((C = yi(v.type, v.key, v.props, null, h.mode, C)),
			  (C.ref = Br(h, p, v)),
			  (C.return = h),
			  C);
	}
	function c(h, p, v, C) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== v.containerInfo ||
			p.stateNode.implementation !== v.implementation
			? ((p = wa(v, h.mode, C)), (p.return = h), p)
			: ((p = l(p, v.children || [])), (p.return = h), p);
	}
	function f(h, p, v, C, P) {
		return p === null || p.tag !== 7
			? ((p = Fn(v, h.mode, C, P)), (p.return = h), p)
			: ((p = l(p, v)), (p.return = h), p);
	}
	function d(h, p, v) {
		if ((typeof p == 'string' && p !== '') || typeof p == 'number')
			return (p = ya('' + p, h.mode, v)), (p.return = h), p;
		if (typeof p == 'object' && p !== null) {
			switch (p.$$typeof) {
				case Wl:
					return (
						(v = yi(p.type, p.key, p.props, null, h.mode, v)),
						(v.ref = Br(h, null, p)),
						(v.return = h),
						v
					);
				case Zn:
					return (p = wa(p, h.mode, v)), (p.return = h), p;
				case on:
					var C = p._init;
					return d(h, C(p._payload), v);
			}
			if (Yr(p) || Fr(p))
				return (p = Fn(p, h.mode, v, null)), (p.return = h), p;
			ni(h, p);
		}
		return null;
	}
	function m(h, p, v, C) {
		var P = p !== null ? p.key : null;
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return P !== null ? null : a(h, p, '' + v, C);
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Wl:
					return v.key === P ? u(h, p, v, C) : null;
				case Zn:
					return v.key === P ? c(h, p, v, C) : null;
				case on:
					return (P = v._init), m(h, p, P(v._payload), C);
			}
			if (Yr(v) || Fr(v)) return P !== null ? null : f(h, p, v, C, null);
			ni(h, v);
		}
		return null;
	}
	function j(h, p, v, C, P) {
		if ((typeof C == 'string' && C !== '') || typeof C == 'number')
			return (h = h.get(v) || null), a(p, h, '' + C, P);
		if (typeof C == 'object' && C !== null) {
			switch (C.$$typeof) {
				case Wl:
					return (h = h.get(C.key === null ? v : C.key) || null), u(p, h, C, P);
				case Zn:
					return (h = h.get(C.key === null ? v : C.key) || null), c(p, h, C, P);
				case on:
					var w = C._init;
					return j(h, p, v, w(C._payload), P);
			}
			if (Yr(C) || Fr(C)) return (h = h.get(v) || null), f(p, h, C, P, null);
			ni(p, C);
		}
		return null;
	}
	function x(h, p, v, C) {
		for (
			var P = null, w = null, R = p, T = (p = 0), M = null;
			R !== null && T < v.length;
			T++
		) {
			R.index > T ? ((M = R), (R = null)) : (M = R.sibling);
			var O = m(h, R, v[T], C);
			if (O === null) {
				R === null && (R = M);
				break;
			}
			e && R && O.alternate === null && t(h, R),
				(p = i(O, p, T)),
				w === null ? (P = O) : (w.sibling = O),
				(w = O),
				(R = M);
		}
		if (T === v.length) return n(h, R), ve && Rn(h, T), P;
		if (R === null) {
			for (; T < v.length; T++)
				(R = d(h, v[T], C)),
					R !== null &&
						((p = i(R, p, T)), w === null ? (P = R) : (w.sibling = R), (w = R));
			return ve && Rn(h, T), P;
		}
		for (R = r(h, R); T < v.length; T++)
			(M = j(R, h, T, v[T], C)),
				M !== null &&
					(e && M.alternate !== null && R.delete(M.key === null ? T : M.key),
					(p = i(M, p, T)),
					w === null ? (P = M) : (w.sibling = M),
					(w = M));
		return (
			e &&
				R.forEach(function (Y) {
					return t(h, Y);
				}),
			ve && Rn(h, T),
			P
		);
	}
	function S(h, p, v, C) {
		var P = Fr(v);
		if (typeof P != 'function') throw Error(L(150));
		if (((v = P.call(v)), v == null)) throw Error(L(151));
		for (
			var w = (P = null), R = p, T = (p = 0), M = null, O = v.next();
			R !== null && !O.done;
			T++, O = v.next()
		) {
			R.index > T ? ((M = R), (R = null)) : (M = R.sibling);
			var Y = m(h, R, O.value, C);
			if (Y === null) {
				R === null && (R = M);
				break;
			}
			e && R && Y.alternate === null && t(h, R),
				(p = i(Y, p, T)),
				w === null ? (P = Y) : (w.sibling = Y),
				(w = Y),
				(R = M);
		}
		if (O.done) return n(h, R), ve && Rn(h, T), P;
		if (R === null) {
			for (; !O.done; T++, O = v.next())
				(O = d(h, O.value, C)),
					O !== null &&
						((p = i(O, p, T)), w === null ? (P = O) : (w.sibling = O), (w = O));
			return ve && Rn(h, T), P;
		}
		for (R = r(h, R); !O.done; T++, O = v.next())
			(O = j(R, h, T, O.value, C)),
				O !== null &&
					(e && O.alternate !== null && R.delete(O.key === null ? T : O.key),
					(p = i(O, p, T)),
					w === null ? (P = O) : (w.sibling = O),
					(w = O));
		return (
			e &&
				R.forEach(function (le) {
					return t(h, le);
				}),
			ve && Rn(h, T),
			P
		);
	}
	function N(h, p, v, C) {
		if (
			(typeof v == 'object' &&
				v !== null &&
				v.type === er &&
				v.key === null &&
				(v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case Wl:
					e: {
						for (var P = v.key, w = p; w !== null; ) {
							if (w.key === P) {
								if (((P = v.type), P === er)) {
									if (w.tag === 7) {
										n(h, w.sibling),
											(p = l(w, v.props.children)),
											(p.return = h),
											(h = p);
										break e;
									}
								} else if (
									w.elementType === P ||
									(typeof P == 'object' &&
										P !== null &&
										P.$$typeof === on &&
										Pc(P) === w.type)
								) {
									n(h, w.sibling),
										(p = l(w, v.props)),
										(p.ref = Br(h, w, v)),
										(p.return = h),
										(h = p);
									break e;
								}
								n(h, w);
								break;
							} else t(h, w);
							w = w.sibling;
						}
						v.type === er
							? ((p = Fn(v.props.children, h.mode, C, v.key)),
							  (p.return = h),
							  (h = p))
							: ((C = yi(v.type, v.key, v.props, null, h.mode, C)),
							  (C.ref = Br(h, p, v)),
							  (C.return = h),
							  (h = C));
					}
					return o(h);
				case Zn:
					e: {
						for (w = v.key; p !== null; ) {
							if (p.key === w)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === v.containerInfo &&
									p.stateNode.implementation === v.implementation
								) {
									n(h, p.sibling),
										(p = l(p, v.children || [])),
										(p.return = h),
										(h = p);
									break e;
								} else {
									n(h, p);
									break;
								}
							else t(h, p);
							p = p.sibling;
						}
						(p = wa(v, h.mode, C)), (p.return = h), (h = p);
					}
					return o(h);
				case on:
					return (w = v._init), N(h, p, w(v._payload), C);
			}
			if (Yr(v)) return x(h, p, v, C);
			if (Fr(v)) return S(h, p, v, C);
			ni(h, v);
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
			  p !== null && p.tag === 6
					? (n(h, p.sibling), (p = l(p, v)), (p.return = h), (h = p))
					: (n(h, p), (p = ya(v, h.mode, C)), (p.return = h), (h = p)),
			  o(h))
			: n(h, p);
	}
	return N;
}
var Sr = Xf(!0),
	qf = Xf(!1),
	Dl = {},
	It = Cn(Dl),
	wl = Cn(Dl),
	xl = Cn(Dl);
function Dn(e) {
	if (e === Dl) throw Error(L(174));
	return e;
}
function Zs(e, t) {
	switch ((ce(xl, t), ce(wl, e), ce(It, Dl), (e = t.nodeType), e)) {
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
	he(It), ce(It, t);
}
function Er() {
	he(It), he(wl), he(xl);
}
function Jf(e) {
	Dn(xl.current);
	var t = Dn(It.current),
		n = $a(t, e.type);
	t !== n && (ce(wl, e), ce(It, n));
}
function eu(e) {
	wl.current === e && (he(It), he(wl));
}
var ye = Cn(0);
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
function tu() {
	for (var e = 0; e < fa.length; e++)
		fa[e]._workInProgressVersionPrimary = null;
	fa.length = 0;
}
var pi = qt.ReactCurrentDispatcher,
	pa = qt.ReactCurrentBatchConfig,
	Un = 0,
	we = null,
	Re = null,
	Te = null,
	Fi = !1,
	ll = !1,
	Sl = 0,
	vg = 0;
function $e() {
	throw Error(L(321));
}
function nu(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!kt(e[n], t[n])) return !1;
	return !0;
}
function ru(e, t, n, r, l, i) {
	if (
		((Un = i),
		(we = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(pi.current = e === null || e.memoizedState === null ? xg : Sg),
		(e = n(r, l)),
		ll)
	) {
		i = 0;
		do {
			if (((ll = !1), (Sl = 0), 25 <= i)) throw Error(L(301));
			(i += 1),
				(Te = Re = null),
				(t.updateQueue = null),
				(pi.current = Eg),
				(e = n(r, l));
		} while (ll);
	}
	if (
		((pi.current = $i),
		(t = Re !== null && Re.next !== null),
		(Un = 0),
		(Te = Re = we = null),
		(Fi = !1),
		t)
	)
		throw Error(L(300));
	return e;
}
function lu() {
	var e = Sl !== 0;
	return (Sl = 0), e;
}
function Mt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return Te === null ? (we.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function gt() {
	if (Re === null) {
		var e = we.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Re.next;
	var t = Te === null ? we.memoizedState : Te.next;
	if (t !== null) (Te = t), (Re = e);
	else {
		if (e === null) throw Error(L(310));
		(Re = e),
			(e = {
				memoizedState: Re.memoizedState,
				baseState: Re.baseState,
				baseQueue: Re.baseQueue,
				queue: Re.queue,
				next: null,
			}),
			Te === null ? (we.memoizedState = Te = e) : (Te = Te.next = e);
	}
	return Te;
}
function El(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function ha(e) {
	var t = gt(),
		n = t.queue;
	if (n === null) throw Error(L(311));
	n.lastRenderedReducer = e;
	var r = Re,
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
			u = null,
			c = i;
		do {
			var f = c.lane;
			if ((Un & f) === f)
				u !== null &&
					(u = u.next =
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
				u === null ? ((a = u = d), (o = r)) : (u = u.next = d),
					(we.lanes |= f),
					(bn |= f);
			}
			c = c.next;
		} while (c !== null && c !== i);
		u === null ? (o = r) : (u.next = a),
			kt(r, t.memoizedState) || (Ze = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (i = l.lane), (we.lanes |= i), (bn |= i), (l = l.next);
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
		kt(i, t.memoizedState) || (Ze = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function Zf() {}
function ep(e, t) {
	var n = we,
		r = gt(),
		l = t(),
		i = !kt(r.memoizedState, l);
	if (
		(i && ((r.memoizedState = l), (Ze = !0)),
		(r = r.queue),
		iu(rp.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (Te !== null && Te.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			jl(9, np.bind(null, n, r, l, t), void 0, null),
			Le === null)
		)
			throw Error(L(349));
		Un & 30 || tp(n, t, l);
	}
	return l;
}
function tp(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = we.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (we.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function np(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), lp(t) && ip(e);
}
function rp(e, t, n) {
	return n(function () {
		lp(t) && ip(e);
	});
}
function lp(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !kt(e, n);
	} catch {
		return !0;
	}
}
function ip(e) {
	var t = Gt(e, 1);
	t !== null && Nt(t, e, 1, -1);
}
function Tc(e) {
	var t = Mt();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: El,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = wg.bind(null, we, e)),
		[t.memoizedState, e]
	);
}
function jl(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = we.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (we.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function op() {
	return gt().memoizedState;
}
function hi(e, t, n, r) {
	var l = Mt();
	(we.flags |= e),
		(l.memoizedState = jl(1 | t, n, void 0, r === void 0 ? null : r));
}
function lo(e, t, n, r) {
	var l = gt();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (Re !== null) {
		var o = Re.memoizedState;
		if (((i = o.destroy), r !== null && nu(r, o.deps))) {
			l.memoizedState = jl(t, n, i, r);
			return;
		}
	}
	(we.flags |= e), (l.memoizedState = jl(1 | t, n, i, r));
}
function Lc(e, t) {
	return hi(8390656, 8, e, t);
}
function iu(e, t) {
	return lo(2048, 8, e, t);
}
function ap(e, t) {
	return lo(4, 2, e, t);
}
function sp(e, t) {
	return lo(4, 4, e, t);
}
function up(e, t) {
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
function cp(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), lo(4, 4, up.bind(null, t, e), n)
	);
}
function ou() {}
function dp(e, t) {
	var n = gt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && nu(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function fp(e, t) {
	var n = gt();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && nu(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function pp(e, t, n) {
	return Un & 21
		? (kt(n, t) || ((n = vf()), (we.lanes |= n), (bn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function gg(e, t) {
	var n = te;
	(te = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = pa.transition;
	pa.transition = {};
	try {
		e(!1), t();
	} finally {
		(te = n), (pa.transition = r);
	}
}
function hp() {
	return gt().memoizedState;
}
function yg(e, t, n) {
	var r = yn(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		mp(e))
	)
		vp(t, n);
	else if (((n = Qf(e, t, n, r)), n !== null)) {
		var l = Ge();
		Nt(n, e, r, l), gp(n, t, r);
	}
}
function wg(e, t, n) {
	var r = yn(e),
		l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (mp(e)) vp(t, l);
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
				if (((l.hasEagerState = !0), (l.eagerState = a), kt(a, o))) {
					var u = t.interleaved;
					u === null
						? ((l.next = l), qs(t))
						: ((l.next = u.next), (u.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = Qf(e, t, l, r)),
			n !== null && ((l = Ge()), Nt(n, e, r, l), gp(n, t, r));
	}
}
function mp(e) {
	var t = e.alternate;
	return e === we || (t !== null && t === we);
}
function vp(e, t) {
	ll = Fi = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function gp(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
	}
}
var $i = {
		readContext: vt,
		useCallback: $e,
		useContext: $e,
		useEffect: $e,
		useImperativeHandle: $e,
		useInsertionEffect: $e,
		useLayoutEffect: $e,
		useMemo: $e,
		useReducer: $e,
		useRef: $e,
		useState: $e,
		useDebugValue: $e,
		useDeferredValue: $e,
		useTransition: $e,
		useMutableSource: $e,
		useSyncExternalStore: $e,
		useId: $e,
		unstable_isNewReconciler: !1,
	},
	xg = {
		readContext: vt,
		useCallback: function (e, t) {
			return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: vt,
		useEffect: Lc,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				hi(4194308, 4, up.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return hi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return hi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Mt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Mt();
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
				(e = e.dispatch = yg.bind(null, we, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Mt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Tc,
		useDebugValue: ou,
		useDeferredValue: function (e) {
			return (Mt().memoizedState = e);
		},
		useTransition: function () {
			var e = Tc(!1),
				t = e[0];
			return (e = gg.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = we,
				l = Mt();
			if (ve) {
				if (n === void 0) throw Error(L(407));
				n = n();
			} else {
				if (((n = t()), Le === null)) throw Error(L(349));
				Un & 30 || tp(r, t, n);
			}
			l.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(l.queue = i),
				Lc(rp.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				jl(9, np.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Mt(),
				t = Le.identifierPrefix;
			if (ve) {
				var n = Bt,
					r = bt;
				(n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Sl++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = vg++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Sg = {
		readContext: vt,
		useCallback: dp,
		useContext: vt,
		useEffect: iu,
		useImperativeHandle: cp,
		useInsertionEffect: ap,
		useLayoutEffect: sp,
		useMemo: fp,
		useReducer: ha,
		useRef: op,
		useState: function () {
			return ha(El);
		},
		useDebugValue: ou,
		useDeferredValue: function (e) {
			var t = gt();
			return pp(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = ha(El)[0],
				t = gt().memoizedState;
			return [e, t];
		},
		useMutableSource: Zf,
		useSyncExternalStore: ep,
		useId: hp,
		unstable_isNewReconciler: !1,
	},
	Eg = {
		readContext: vt,
		useCallback: dp,
		useContext: vt,
		useEffect: iu,
		useImperativeHandle: cp,
		useInsertionEffect: ap,
		useLayoutEffect: sp,
		useMemo: fp,
		useReducer: ma,
		useRef: op,
		useState: function () {
			return ma(El);
		},
		useDebugValue: ou,
		useDeferredValue: function (e) {
			var t = gt();
			return Re === null ? (t.memoizedState = e) : pp(t, Re.memoizedState, e);
		},
		useTransition: function () {
			var e = ma(El)[0],
				t = gt().memoizedState;
			return [e, t];
		},
		useMutableSource: Zf,
		useSyncExternalStore: ep,
		useId: hp,
		unstable_isNewReconciler: !1,
	};
function jr(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Xm(r)), (r = r.return);
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
function as(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var jg = typeof WeakMap == 'function' ? WeakMap : Map;
function yp(e, t, n) {
	(n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Ui || ((Ui = !0), (gs = r)), as(e, t);
		}),
		n
	);
}
function wp(e, t, n) {
	(n = Ht(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				as(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == 'function' &&
			(n.callback = function () {
				as(e, t),
					typeof r != 'function' &&
						(gn === null ? (gn = new Set([this])) : gn.add(this));
				var o = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				});
			}),
		n
	);
}
function Mc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new jg();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Fg.bind(null, e, t, n)), t.then(e, e));
}
function Dc(e) {
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
function Oc(e, t, n, r, l) {
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
							: ((t = Ht(-1, 1)), (t.tag = 2), vn(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Cg = qt.ReactCurrentOwner,
	Ze = !1;
function Ke(e, t, n, r) {
	t.child = e === null ? qf(t, null, n, r) : Sr(t, e.child, n, r);
}
function Ic(e, t, n, r, l) {
	n = n.render;
	var i = t.ref;
	return (
		vr(t, l),
		(r = ru(e, t, n, r, i, l)),
		(n = lu()),
		e !== null && !Ze
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Yt(e, t, l))
			: (ve && n && Ws(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
	);
}
function zc(e, t, n, r, l) {
	if (e === null) {
		var i = n.type;
		return typeof i == 'function' &&
			!hu(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), xp(e, t, i, r, l))
			: ((e = yi(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & l))) {
		var o = i.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : ml), n(o, r) && e.ref === t.ref)
		)
			return Yt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = wn(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function xp(e, t, n, r, l) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (ml(i, r) && e.ref === t.ref)
			if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
				e.flags & 131072 && (Ze = !0);
			else return (t.lanes = e.lanes), Yt(e, t, l);
	}
	return ss(e, t, n, r, l);
}
function Sp(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				ce(cr, lt),
				(lt |= n);
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
					ce(cr, lt),
					(lt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = i !== null ? i.baseLanes : n),
				ce(cr, lt),
				(lt |= r);
		}
	else
		i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
			ce(cr, lt),
			(lt |= r);
	return Ke(e, t, l, n), t.child;
}
function Ep(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function ss(e, t, n, r, l) {
	var i = tt(n) ? $n : Be.current;
	return (
		(i = wr(t, i)),
		vr(t, l),
		(n = ru(e, t, n, r, i, l)),
		(r = lu()),
		e !== null && !Ze
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  Yt(e, t, l))
			: (ve && r && Ws(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
	);
}
function Fc(e, t, n, r, l) {
	if (tt(n)) {
		var i = !0;
		Ti(t);
	} else i = !1;
	if ((vr(t, l), t.stateNode === null))
		mi(e, t), Yf(t, n, r), os(t, n, r, l), (r = !0);
	else if (e === null) {
		var o = t.stateNode,
			a = t.memoizedProps;
		o.props = a;
		var u = o.context,
			c = n.contextType;
		typeof c == 'object' && c !== null
			? (c = vt(c))
			: ((c = tt(n) ? $n : Be.current), (c = wr(t, c)));
		var f = n.getDerivedStateFromProps,
			d =
				typeof f == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== r || u !== c) && Rc(t, o, r, c)),
			(an = !1);
		var m = t.memoizedState;
		(o.state = m),
			Ii(t, r, o, l),
			(u = t.memoizedState),
			a !== r || m !== u || et.current || an
				? (typeof f == 'function' && (is(t, n, f, r), (u = t.memoizedState)),
				  (a = an || kc(t, n, a, r, m, u, c))
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
						  (t.memoizedState = u)),
				  (o.props = r),
				  (o.state = u),
				  (o.context = c),
				  (r = a))
				: (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(o = t.stateNode),
			Kf(e, t),
			(a = t.memoizedProps),
			(c = t.type === t.elementType ? a : St(t.type, a)),
			(o.props = c),
			(d = t.pendingProps),
			(m = o.context),
			(u = n.contextType),
			typeof u == 'object' && u !== null
				? (u = vt(u))
				: ((u = tt(n) ? $n : Be.current), (u = wr(t, u)));
		var j = n.getDerivedStateFromProps;
		(f =
			typeof j == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((a !== d || m !== u) && Rc(t, o, r, u)),
			(an = !1),
			(m = t.memoizedState),
			(o.state = m),
			Ii(t, r, o, l);
		var x = t.memoizedState;
		a !== d || m !== x || et.current || an
			? (typeof j == 'function' && (is(t, n, j, r), (x = t.memoizedState)),
			  (c = an || kc(t, n, c, r, m, x, u) || !1)
					? (f ||
							(typeof o.UNSAFE_componentWillUpdate != 'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, x, u),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, x, u)),
					  typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && m === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = x)),
			  (o.props = r),
			  (o.state = x),
			  (o.context = u),
			  (r = c))
			: (typeof o.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && m === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return us(e, t, n, r, i, l);
}
function us(e, t, n, r, l, i) {
	Ep(e, t);
	var o = (t.flags & 128) !== 0;
	if (!r && !o) return l && Ec(t, n, !1), Yt(e, t, i);
	(r = t.stateNode), (Cg.current = t);
	var a =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = Sr(t, e.child, null, i)), (t.child = Sr(t, null, a, i)))
			: Ke(e, t, a, i),
		(t.memoizedState = r.state),
		l && Ec(t, n, !0),
		t.child
	);
}
function jp(e) {
	var t = e.stateNode;
	t.pendingContext
		? Sc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Sc(e, t.context, !1),
		Zs(e, t.containerInfo);
}
function $c(e, t, n, r, l) {
	return xr(), Ks(l), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var cs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ds(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Cp(e, t, n) {
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
		ce(ye, l & 1),
		e === null)
	)
		return (
			rs(t),
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
								: (i = ao(o, r, 0, null)),
						  (e = Fn(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = ds(n)),
						  (t.memoizedState = cs),
						  e)
						: au(t, o))
		);
	if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
		return _g(e, t, o, r, a, l, n);
	if (i) {
		(i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
		var u = { mode: 'hidden', children: r.children };
		return (
			!(o & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = wn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
			a !== null ? (i = wn(a, i)) : ((i = Fn(i, o, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? ds(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(i.memoizedState = o),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = cs),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = wn(i, { mode: 'visible', children: r.children })),
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
function au(e, t) {
	return (
		(t = ao({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ri(e, t, n, r) {
	return (
		r !== null && Ks(r),
		Sr(t, e.child, null, n),
		(e = au(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function _g(e, t, n, r, l, i, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = va(Error(L(422)))), ri(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (l = t.mode),
			  (r = ao({ mode: 'visible', children: r.children }, l, 0, null)),
			  (i = Fn(i, l, o, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && Sr(t, e.child, null, o),
			  (t.child.memoizedState = ds(o)),
			  (t.memoizedState = cs),
			  i);
	if (!(t.mode & 1)) return ri(e, t, o, null);
	if (l.data === '$!') {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (i = Error(L(419))), (r = va(i, r, void 0)), ri(e, t, o, r);
	}
	if (((a = (o & e.childLanes) !== 0), Ze || a)) {
		if (((r = Le), r !== null)) {
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
					((i.retryLane = l), Gt(e, l), Nt(r, e, l, -1));
		}
		return pu(), (r = va(Error(L(421)))), ri(e, t, o, r);
	}
	return l.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = $g.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  (ot = mn(l.nextSibling)),
		  (at = t),
		  (ve = !0),
		  (Ct = null),
		  e !== null &&
				((ft[pt++] = bt),
				(ft[pt++] = Bt),
				(ft[pt++] = An),
				(bt = e.id),
				(Bt = e.overflow),
				(An = t)),
		  (t = au(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Ac(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ls(e.return, t, n);
}
function ga(e, t, n, r, l) {
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
function _p(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		i = r.tail;
	if ((Ke(e, t, r.children, n), (r = ye.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Ac(e, n, t);
				else if (e.tag === 19) Ac(e, n, t);
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
	if ((ce(ye, r), !(t.mode & 1))) t.memoizedState = null;
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
					ga(t, !1, l, n, i);
				break;
			case 'backwards':
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && zi(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				ga(t, !0, n, null, i);
				break;
			case 'together':
				ga(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function mi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(bn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(L(153));
	if (t.child !== null) {
		for (
			e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = wn(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Ng(e, t, n) {
	switch (t.tag) {
		case 3:
			jp(t), xr();
			break;
		case 5:
			Jf(t);
			break;
		case 1:
			tt(t.type) && Ti(t);
			break;
		case 4:
			Zs(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			ce(Di, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (ce(ye, ye.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Cp(e, t, n)
					: (ce(ye, ye.current & 1),
					  (e = Yt(e, t, n)),
					  e !== null ? e.sibling : null);
			ce(ye, ye.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return _p(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
				ce(ye, ye.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Sp(e, t, n);
	}
	return Yt(e, t, n);
}
var Np, fs, kp, Rp;
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
fs = function () {};
kp = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), Dn(It.current);
		var i = null;
		switch (n) {
			case 'input':
				(l = Oa(e, l)), (r = Oa(e, r)), (i = []);
				break;
			case 'select':
				(l = xe({}, l, { value: void 0 })),
					(r = xe({}, r, { value: void 0 })),
					(i = []);
				break;
			case 'textarea':
				(l = Fa(e, l)), (r = Fa(e, r)), (i = []);
				break;
			default:
				typeof l.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Ri);
		}
		Aa(n, r);
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
						(sl.hasOwnProperty(c)
							? i || (i = [])
							: (i = i || []).push(c, null));
		for (c in r) {
			var u = r[c];
			if (
				((a = l != null ? l[c] : void 0),
				r.hasOwnProperty(c) && u !== a && (u != null || a != null))
			)
				if (c === 'style')
					if (a) {
						for (o in a)
							!a.hasOwnProperty(o) ||
								(u && u.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''));
						for (o in u)
							u.hasOwnProperty(o) &&
								a[o] !== u[o] &&
								(n || (n = {}), (n[o] = u[o]));
					} else n || (i || (i = []), i.push(c, n)), (n = u);
				else
					c === 'dangerouslySetInnerHTML'
						? ((u = u ? u.__html : void 0),
						  (a = a ? a.__html : void 0),
						  u != null && a !== u && (i = i || []).push(c, u))
						: c === 'children'
						? (typeof u != 'string' && typeof u != 'number') ||
						  (i = i || []).push(c, '' + u)
						: c !== 'suppressContentEditableWarning' &&
						  c !== 'suppressHydrationWarning' &&
						  (sl.hasOwnProperty(c)
								? (u != null && c === 'onScroll' && pe('scroll', e),
								  i || a === u || (i = []))
								: (i = i || []).push(c, u));
		}
		n && (i = i || []).push('style', n);
		var c = i;
		(t.updateQueue = c) && (t.flags |= 4);
	}
};
Rp = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Vr(e, t) {
	if (!ve)
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
function Ae(e) {
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
function kg(e, t, n) {
	var r = t.pendingProps;
	switch ((Qs(t), t.tag)) {
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
			return Ae(t), null;
		case 1:
			return tt(t.type) && Pi(), Ae(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Er(),
				he(et),
				he(Be),
				tu(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(ti(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ct !== null && (xs(Ct), (Ct = null)))),
				fs(e, t),
				Ae(t),
				null
			);
		case 5:
			eu(t);
			var l = Dn(xl.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				kp(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(L(166));
					return Ae(t), null;
				}
				if (((e = Dn(It.current)), ti(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (((r[Dt] = t), (r[yl] = i), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							pe('cancel', r), pe('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							pe('load', r);
							break;
						case 'video':
						case 'audio':
							for (l = 0; l < qr.length; l++) pe(qr[l], r);
							break;
						case 'source':
							pe('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							pe('error', r), pe('load', r);
							break;
						case 'details':
							pe('toggle', r);
							break;
						case 'input':
							Gu(r, i), pe('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								pe('invalid', r);
							break;
						case 'textarea':
							Xu(r, i), pe('invalid', r);
					}
					Aa(n, i), (l = null);
					for (var o in i)
						if (i.hasOwnProperty(o)) {
							var a = i[o];
							o === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
									  (i.suppressHydrationWarning !== !0 &&
											ei(r.textContent, a, e),
									  (l = ['children', a]))
									: typeof a == 'number' &&
									  r.textContent !== '' + a &&
									  (i.suppressHydrationWarning !== !0 &&
											ei(r.textContent, a, e),
									  (l = ['children', '' + a]))
								: sl.hasOwnProperty(o) &&
								  a != null &&
								  o === 'onScroll' &&
								  pe('scroll', r);
						}
					switch (n) {
						case 'input':
							Ql(r), Yu(r, i, !0);
							break;
						case 'textarea':
							Ql(r), qu(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof i.onClick == 'function' && (r.onclick = Ri);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(o = l.nodeType === 9 ? l : l.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = ef(n)),
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
						(e[Dt] = t),
						(e[yl] = r),
						Np(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((o = Ua(n, r)), n)) {
							case 'dialog':
								pe('cancel', e), pe('close', e), (l = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								pe('load', e), (l = r);
								break;
							case 'video':
							case 'audio':
								for (l = 0; l < qr.length; l++) pe(qr[l], e);
								l = r;
								break;
							case 'source':
								pe('error', e), (l = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								pe('error', e), pe('load', e), (l = r);
								break;
							case 'details':
								pe('toggle', e), (l = r);
								break;
							case 'input':
								Gu(e, r), (l = Oa(e, r)), pe('invalid', e);
								break;
							case 'option':
								l = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(l = xe({}, r, { value: void 0 })),
									pe('invalid', e);
								break;
							case 'textarea':
								Xu(e, r), (l = Fa(e, r)), pe('invalid', e);
								break;
							default:
								l = r;
						}
						Aa(n, l), (a = l);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var u = a[i];
								i === 'style'
									? rf(e, u)
									: i === 'dangerouslySetInnerHTML'
									? ((u = u ? u.__html : void 0), u != null && tf(e, u))
									: i === 'children'
									? typeof u == 'string'
										? (n !== 'textarea' || u !== '') && ul(e, u)
										: typeof u == 'number' && ul(e, '' + u)
									: i !== 'suppressContentEditableWarning' &&
									  i !== 'suppressHydrationWarning' &&
									  i !== 'autoFocus' &&
									  (sl.hasOwnProperty(i)
											? u != null && i === 'onScroll' && pe('scroll', e)
											: u != null && Ls(e, i, u, o));
							}
						switch (n) {
							case 'input':
								Ql(e), Yu(e, r, !1);
								break;
							case 'textarea':
								Ql(e), qu(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + xn(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? fr(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  fr(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof l.onClick == 'function' && (e.onclick = Ri);
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
			return Ae(t), null;
		case 6:
			if (e && t.stateNode != null) Rp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(L(166));
				if (((n = Dn(xl.current)), Dn(It.current), ti(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Dt] = t),
						(i = r.nodeValue !== n) && ((e = at), e !== null))
					)
						switch (e.tag) {
							case 3:
								ei(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									ei(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Dt] = t),
						(t.stateNode = r);
			}
			return Ae(t), null;
		case 13:
			if (
				(he(ye),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (ve && ot !== null && t.mode & 1 && !(t.flags & 128))
					Wf(), xr(), (t.flags |= 98560), (i = !1);
				else if (((i = ti(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(L(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(L(317));
						i[Dt] = t;
					} else
						xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					Ae(t), (i = !1);
				} else Ct !== null && (xs(Ct), (Ct = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ye.current & 1 ? Pe === 0 && (Pe = 3) : pu())),
				  t.updateQueue !== null && (t.flags |= 4),
				  Ae(t),
				  null);
		case 4:
			return (
				Er(), fs(e, t), e === null && vl(t.stateNode.containerInfo), Ae(t), null
			);
		case 10:
			return Xs(t.type._context), Ae(t), null;
		case 17:
			return tt(t.type) && Pi(), Ae(t), null;
		case 19:
			if ((he(ye), (i = t.memoizedState), i === null)) return Ae(t), null;
			if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
				if (r) Vr(i, !1);
				else {
					if (Pe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = zi(e)), o !== null)) {
								for (
									t.flags |= 128,
										Vr(i, !1),
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
								return ce(ye, (ye.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						_e() > Cr &&
						((t.flags |= 128), (r = !0), Vr(i, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = zi(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Vr(i, !0),
							i.tail === null && i.tailMode === 'hidden' && !o.alternate && !ve)
						)
							return Ae(t), null;
					} else
						2 * _e() - i.renderingStartTime > Cr &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Vr(i, !1), (t.lanes = 4194304));
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
				  (i.renderingStartTime = _e()),
				  (t.sibling = null),
				  (n = ye.current),
				  ce(ye, r ? (n & 1) | 2 : n & 1),
				  t)
				: (Ae(t), null);
		case 22:
		case 23:
			return (
				fu(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? lt & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: Ae(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(L(156, t.tag));
}
function Rg(e, t) {
	switch ((Qs(t), t.tag)) {
		case 1:
			return (
				tt(t.type) && Pi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Er(),
				he(et),
				he(Be),
				tu(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return eu(t), null;
		case 13:
			if (
				(he(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(L(340));
				xr();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return he(ye), null;
		case 4:
			return Er(), null;
		case 10:
			return Xs(t.type._context), null;
		case 22:
		case 23:
			return fu(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var li = !1,
	be = !1,
	Pg = typeof WeakSet == 'function' ? WeakSet : Set,
	F = null;
function ur(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				Ee(e, t, r);
			}
		else n.current = null;
}
function ps(e, t, n) {
	try {
		n();
	} catch (r) {
		Ee(e, t, r);
	}
}
var Uc = !1;
function Tg(e, t) {
	if (((Xa = _i), (e = Mf()), Hs(e))) {
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
						u = -1,
						c = 0,
						f = 0,
						d = e,
						m = null;
					t: for (;;) {
						for (
							var j;
							d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
								d !== i || (r !== 0 && d.nodeType !== 3) || (u = o + r),
								d.nodeType === 3 && (o += d.nodeValue.length),
								(j = d.firstChild) !== null;

						)
							(m = d), (d = j);
						for (;;) {
							if (d === e) break t;
							if (
								(m === n && ++c === l && (a = o),
								m === i && ++f === r && (u = o),
								(j = d.nextSibling) !== null)
							)
								break;
							(d = m), (m = d.parentNode);
						}
						d = j;
					}
					n = a === -1 || u === -1 ? null : { start: a, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (qa = { focusedElem: e, selectionRange: n }, _i = !1, F = t; F !== null; )
		if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (F = e);
		else
			for (; F !== null; ) {
				t = F;
				try {
					var x = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (x !== null) {
									var S = x.memoizedProps,
										N = x.memoizedState,
										h = t.stateNode,
										p = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? S : St(t.type, S),
											N
										);
									h.__reactInternalSnapshotBeforeUpdate = p;
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
				} catch (C) {
					Ee(t, t.return, C);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (F = e);
					break;
				}
				F = t.return;
			}
	return (x = Uc), (Uc = !1), x;
}
function il(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var i = l.destroy;
				(l.destroy = void 0), i !== void 0 && ps(t, n, i);
			}
			l = l.next;
		} while (l !== r);
	}
}
function io(e, t) {
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
function hs(e) {
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
function Pp(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Pp(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Dt], delete t[yl], delete t[es], delete t[fg], delete t[pg])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Tp(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Tp(e.return)) return null;
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
function ms(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = Ri));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ms(e, t, n), e = e.sibling; e !== null; ) ms(e, t, n), (e = e.sibling);
}
function vs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), (e = e.sibling);
}
var Ie = null,
	Et = !1;
function rn(e, t, n) {
	for (n = n.child; n !== null; ) Lp(e, t, n), (n = n.sibling);
}
function Lp(e, t, n) {
	if (Ot && typeof Ot.onCommitFiberUnmount == 'function')
		try {
			Ot.onCommitFiberUnmount(qi, n);
		} catch {}
	switch (n.tag) {
		case 5:
			be || ur(n, t);
		case 6:
			var r = Ie,
				l = Et;
			(Ie = null),
				rn(e, t, n),
				(Ie = r),
				(Et = l),
				Ie !== null &&
					(Et
						? ((e = Ie),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: Ie.removeChild(n.stateNode));
			break;
		case 18:
			Ie !== null &&
				(Et
					? ((e = Ie),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ca(e.parentNode, n)
							: e.nodeType === 1 && ca(e, n),
					  pl(e))
					: ca(Ie, n.stateNode));
			break;
		case 4:
			(r = Ie),
				(l = Et),
				(Ie = n.stateNode.containerInfo),
				(Et = !0),
				rn(e, t, n),
				(Ie = r),
				(Et = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!be &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var i = l,
						o = i.destroy;
					(i = i.tag),
						o !== void 0 && (i & 2 || i & 4) && ps(n, t, o),
						(l = l.next);
				} while (l !== r);
			}
			rn(e, t, n);
			break;
		case 1:
			if (
				!be &&
				(ur(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					Ee(n, t, a);
				}
			rn(e, t, n);
			break;
		case 21:
			rn(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((be = (r = be) || n.memoizedState !== null), rn(e, t, n), (be = r))
				: rn(e, t, n);
			break;
		default:
			rn(e, t, n);
	}
}
function Bc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Pg()),
			t.forEach(function (r) {
				var l = Ag.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function xt(e, t) {
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
							(Ie = a.stateNode), (Et = !1);
							break e;
						case 3:
							(Ie = a.stateNode.containerInfo), (Et = !0);
							break e;
						case 4:
							(Ie = a.stateNode.containerInfo), (Et = !0);
							break e;
					}
					a = a.return;
				}
				if (Ie === null) throw Error(L(160));
				Lp(i, o, l), (Ie = null), (Et = !1);
				var u = l.alternate;
				u !== null && (u.return = null), (l.return = null);
			} catch (c) {
				Ee(l, t, c);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Mp(t, e), (t = t.sibling);
}
function Mp(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((xt(t, e), Lt(e), r & 4)) {
				try {
					il(3, e, e.return), io(3, e);
				} catch (S) {
					Ee(e, e.return, S);
				}
				try {
					il(5, e, e.return);
				} catch (S) {
					Ee(e, e.return, S);
				}
			}
			break;
		case 1:
			xt(t, e), Lt(e), r & 512 && n !== null && ur(n, n.return);
			break;
		case 5:
			if (
				(xt(t, e),
				Lt(e),
				r & 512 && n !== null && ur(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					ul(l, '');
				} catch (S) {
					Ee(e, e.return, S);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var i = e.memoizedProps,
					o = n !== null ? n.memoizedProps : i,
					a = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						a === 'input' && i.type === 'radio' && i.name != null && Jd(l, i),
							Ua(a, o);
						var c = Ua(a, i);
						for (o = 0; o < u.length; o += 2) {
							var f = u[o],
								d = u[o + 1];
							f === 'style'
								? rf(l, d)
								: f === 'dangerouslySetInnerHTML'
								? tf(l, d)
								: f === 'children'
								? ul(l, d)
								: Ls(l, f, d, c);
						}
						switch (a) {
							case 'input':
								Ia(l, i);
								break;
							case 'textarea':
								Zd(l, i);
								break;
							case 'select':
								var m = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!i.multiple;
								var j = i.value;
								j != null
									? fr(l, !!i.multiple, j, !1)
									: m !== !!i.multiple &&
									  (i.defaultValue != null
											? fr(l, !!i.multiple, i.defaultValue, !0)
											: fr(l, !!i.multiple, i.multiple ? [] : '', !1));
						}
						l[yl] = i;
					} catch (S) {
						Ee(e, e.return, S);
					}
			}
			break;
		case 6:
			if ((xt(t, e), Lt(e), r & 4)) {
				if (e.stateNode === null) throw Error(L(162));
				(l = e.stateNode), (i = e.memoizedProps);
				try {
					l.nodeValue = i;
				} catch (S) {
					Ee(e, e.return, S);
				}
			}
			break;
		case 3:
			if (
				(xt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					pl(t.containerInfo);
				} catch (S) {
					Ee(e, e.return, S);
				}
			break;
		case 4:
			xt(t, e), Lt(e);
			break;
		case 13:
			xt(t, e),
				Lt(e),
				(l = e.child),
				l.flags & 8192 &&
					((i = l.memoizedState !== null),
					(l.stateNode.isHidden = i),
					!i ||
						(l.alternate !== null && l.alternate.memoizedState !== null) ||
						(cu = _e())),
				r & 4 && Bc(e);
			break;
		case 22:
			if (
				((f = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((be = (c = be) || f), xt(t, e), (be = c)) : xt(t, e),
				Lt(e),
				r & 8192)
			) {
				if (
					((c = e.memoizedState !== null),
					(e.stateNode.isHidden = c) && !f && e.mode & 1)
				)
					for (F = e, f = e.child; f !== null; ) {
						for (d = F = f; F !== null; ) {
							switch (((m = F), (j = m.child), m.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									il(4, m, m.return);
									break;
								case 1:
									ur(m, m.return);
									var x = m.stateNode;
									if (typeof x.componentWillUnmount == 'function') {
										(r = m), (n = m.return);
										try {
											(t = r),
												(x.props = t.memoizedProps),
												(x.state = t.memoizedState),
												x.componentWillUnmount();
										} catch (S) {
											Ee(r, n, S);
										}
									}
									break;
								case 5:
									ur(m, m.return);
									break;
								case 22:
									if (m.memoizedState !== null) {
										Hc(d);
										continue;
									}
							}
							j !== null ? ((j.return = m), (F = j)) : Hc(d);
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
										  (u = d.memoizedProps.style),
										  (o =
												u != null && u.hasOwnProperty('display')
													? u.display
													: null),
										  (a.style.display = nf('display', o)));
							} catch (S) {
								Ee(e, e.return, S);
							}
						}
					} else if (d.tag === 6) {
						if (f === null)
							try {
								d.stateNode.nodeValue = c ? '' : d.memoizedProps;
							} catch (S) {
								Ee(e, e.return, S);
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
			xt(t, e), Lt(e), r & 4 && Bc(e);
			break;
		case 21:
			break;
		default:
			xt(t, e), Lt(e);
	}
}
function Lt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Tp(n)) {
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
					r.flags & 32 && (ul(l, ''), (r.flags &= -33));
					var i = bc(e);
					vs(e, i, l);
					break;
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						a = bc(e);
					ms(e, a, o);
					break;
				default:
					throw Error(L(161));
			}
		} catch (u) {
			Ee(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Lg(e, t, n) {
	(F = e), Dp(e);
}
function Dp(e, t, n) {
	for (var r = (e.mode & 1) !== 0; F !== null; ) {
		var l = F,
			i = l.child;
		if (l.tag === 22 && r) {
			var o = l.memoizedState !== null || li;
			if (!o) {
				var a = l.alternate,
					u = (a !== null && a.memoizedState !== null) || be;
				a = li;
				var c = be;
				if (((li = o), (be = u) && !c))
					for (F = l; F !== null; )
						(o = F),
							(u = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Wc(l)
								: u !== null
								? ((u.return = o), (F = u))
								: Wc(l);
				for (; i !== null; ) (F = i), Dp(i), (i = i.sibling);
				(F = l), (li = a), (be = c);
			}
			Vc(e);
		} else
			l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (F = i)) : Vc(e);
	}
}
function Vc(e) {
	for (; F !== null; ) {
		var t = F;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							be || io(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !be)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: St(t.type, n.memoizedProps);
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
								var u = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										u.autoFocus && n.focus();
										break;
									case 'img':
										u.src && (n.src = u.src);
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
										d !== null && pl(d);
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
				be || (t.flags & 512 && hs(t));
			} catch (m) {
				Ee(t, t.return, m);
			}
		}
		if (t === e) {
			F = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (F = n);
			break;
		}
		F = t.return;
	}
}
function Hc(e) {
	for (; F !== null; ) {
		var t = F;
		if (t === e) {
			F = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (F = n);
			break;
		}
		F = t.return;
	}
}
function Wc(e) {
	for (; F !== null; ) {
		var t = F;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						io(4, t);
					} catch (u) {
						Ee(t, n, u);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (u) {
							Ee(t, l, u);
						}
					}
					var i = t.return;
					try {
						hs(t);
					} catch (u) {
						Ee(t, i, u);
					}
					break;
				case 5:
					var o = t.return;
					try {
						hs(t);
					} catch (u) {
						Ee(t, o, u);
					}
			}
		} catch (u) {
			Ee(t, t.return, u);
		}
		if (t === e) {
			F = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (F = a);
			break;
		}
		F = t.return;
	}
}
var Mg = Math.ceil,
	Ai = qt.ReactCurrentDispatcher,
	su = qt.ReactCurrentOwner,
	mt = qt.ReactCurrentBatchConfig,
	q = 0,
	Le = null,
	ke = null,
	ze = 0,
	lt = 0,
	cr = Cn(0),
	Pe = 0,
	Cl = null,
	bn = 0,
	oo = 0,
	uu = 0,
	ol = null,
	Je = null,
	cu = 0,
	Cr = 1 / 0,
	At = null,
	Ui = !1,
	gs = null,
	gn = null,
	ii = !1,
	dn = null,
	bi = 0,
	al = 0,
	ys = null,
	vi = -1,
	gi = 0;
function Ge() {
	return q & 6 ? _e() : vi !== -1 ? vi : (vi = _e());
}
function yn(e) {
	return e.mode & 1
		? q & 2 && ze !== 0
			? ze & -ze
			: mg.transition !== null
			? (gi === 0 && (gi = vf()), gi)
			: ((e = te),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jf(e.type))),
			  e)
		: 1;
}
function Nt(e, t, n, r) {
	if (50 < al) throw ((al = 0), (ys = null), Error(L(185)));
	Tl(e, n, r),
		(!(q & 2) || e !== Le) &&
			(e === Le && (!(q & 2) && (oo |= n), Pe === 4 && un(e, ze)),
			nt(e, r),
			n === 1 && q === 0 && !(t.mode & 1) && ((Cr = _e() + 500), no && _n()));
}
function nt(e, t) {
	var n = e.callbackNode;
	mv(e, t);
	var r = Ci(e, e === Le ? ze : 0);
	if (r === 0)
		n !== null && ec(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ec(n), t === 1))
			e.tag === 0 ? hg(Qc.bind(null, e)) : Bf(Qc.bind(null, e)),
				cg(function () {
					!(q & 6) && _n();
				}),
				(n = null);
		else {
			switch (gf(r)) {
				case 1:
					n = zs;
					break;
				case 4:
					n = hf;
					break;
				case 16:
					n = ji;
					break;
				case 536870912:
					n = mf;
					break;
				default:
					n = ji;
			}
			n = bp(n, Op.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Op(e, t) {
	if (((vi = -1), (gi = 0), q & 6)) throw Error(L(327));
	var n = e.callbackNode;
	if (gr() && e.callbackNode !== n) return null;
	var r = Ci(e, e === Le ? ze : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
	else {
		t = r;
		var l = q;
		q |= 2;
		var i = zp();
		(Le !== e || ze !== t) && ((At = null), (Cr = _e() + 500), zn(e, t));
		do
			try {
				Ig();
				break;
			} catch (a) {
				Ip(e, a);
			}
		while (1);
		Ys(),
			(Ai.current = i),
			(q = l),
			ke !== null ? (t = 0) : ((Le = null), (ze = 0), (t = Pe));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = Wa(e)), l !== 0 && ((r = l), (t = ws(e, l)))), t === 1)
		)
			throw ((n = Cl), zn(e, 0), un(e, r), nt(e, _e()), n);
		if (t === 6) un(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Dg(l) &&
					((t = Bi(e, r)),
					t === 2 && ((i = Wa(e)), i !== 0 && ((r = i), (t = ws(e, i)))),
					t === 1))
			)
				throw ((n = Cl), zn(e, 0), un(e, r), nt(e, _e()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(L(345));
				case 2:
					Pn(e, Je, At);
					break;
				case 3:
					if (
						(un(e, r), (r & 130023424) === r && ((t = cu + 500 - _e()), 10 < t))
					) {
						if (Ci(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							Ge(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = Za(Pn.bind(null, e, Je, At), t);
						break;
					}
					Pn(e, Je, At);
					break;
				case 4:
					if ((un(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var o = 31 - _t(r);
						(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
					}
					if (
						((r = l),
						(r = _e() - r),
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
								: 1960 * Mg(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Za(Pn.bind(null, e, Je, At), r);
						break;
					}
					Pn(e, Je, At);
					break;
				case 5:
					Pn(e, Je, At);
					break;
				default:
					throw Error(L(329));
			}
		}
	}
	return nt(e, _e()), e.callbackNode === n ? Op.bind(null, e) : null;
}
function ws(e, t) {
	var n = ol;
	return (
		e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
		(e = Bi(e, t)),
		e !== 2 && ((t = Je), (Je = n), t !== null && xs(t)),
		e
	);
}
function xs(e) {
	Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function Dg(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						i = l.getSnapshot;
					l = l.value;
					try {
						if (!kt(i(), l)) return !1;
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
function un(e, t) {
	for (
		t &= ~uu,
			t &= ~oo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - _t(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Qc(e) {
	if (q & 6) throw Error(L(327));
	gr();
	var t = Ci(e, 0);
	if (!(t & 1)) return nt(e, _e()), null;
	var n = Bi(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Wa(e);
		r !== 0 && ((t = r), (n = ws(e, r)));
	}
	if (n === 1) throw ((n = Cl), zn(e, 0), un(e, t), nt(e, _e()), n);
	if (n === 6) throw Error(L(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Pn(e, Je, At),
		nt(e, _e()),
		null
	);
}
function du(e, t) {
	var n = q;
	q |= 1;
	try {
		return e(t);
	} finally {
		(q = n), q === 0 && ((Cr = _e() + 500), no && _n());
	}
}
function Bn(e) {
	dn !== null && dn.tag === 0 && !(q & 6) && gr();
	var t = q;
	q |= 1;
	var n = mt.transition,
		r = te;
	try {
		if (((mt.transition = null), (te = 1), e)) return e();
	} finally {
		(te = r), (mt.transition = n), (q = t), !(q & 6) && _n();
	}
}
function fu() {
	(lt = cr.current), he(cr);
}
function zn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), ug(n)), ke !== null))
		for (n = ke.return; n !== null; ) {
			var r = n;
			switch ((Qs(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Pi();
					break;
				case 3:
					Er(), he(et), he(Be), tu();
					break;
				case 5:
					eu(r);
					break;
				case 4:
					Er();
					break;
				case 13:
					he(ye);
					break;
				case 19:
					he(ye);
					break;
				case 10:
					Xs(r.type._context);
					break;
				case 22:
				case 23:
					fu();
			}
			n = n.return;
		}
	if (
		((Le = e),
		(ke = e = wn(e.current, null)),
		(ze = lt = t),
		(Pe = 0),
		(Cl = null),
		(uu = oo = bn = 0),
		(Je = ol = null),
		Mn !== null)
	) {
		for (t = 0; t < Mn.length; t++)
			if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					i = n.pending;
				if (i !== null) {
					var o = i.next;
					(i.next = l), (r.next = o);
				}
				n.pending = r;
			}
		Mn = null;
	}
	return e;
}
function Ip(e, t) {
	do {
		var n = ke;
		try {
			if ((Ys(), (pi.current = $i), Fi)) {
				for (var r = we.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				Fi = !1;
			}
			if (
				((Un = 0),
				(Te = Re = we = null),
				(ll = !1),
				(Sl = 0),
				(su.current = null),
				n === null || n.return === null)
			) {
				(Pe = 1), (Cl = t), (ke = null);
				break;
			}
			e: {
				var i = e,
					o = n.return,
					a = n,
					u = t;
				if (
					((t = ze),
					(a.flags |= 32768),
					u !== null && typeof u == 'object' && typeof u.then == 'function')
				) {
					var c = u,
						f = a,
						d = f.tag;
					if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var m = f.alternate;
						m
							? ((f.updateQueue = m.updateQueue),
							  (f.memoizedState = m.memoizedState),
							  (f.lanes = m.lanes))
							: ((f.updateQueue = null), (f.memoizedState = null));
					}
					var j = Dc(o);
					if (j !== null) {
						(j.flags &= -257),
							Oc(j, o, a, i, t),
							j.mode & 1 && Mc(i, c, t),
							(t = j),
							(u = c);
						var x = t.updateQueue;
						if (x === null) {
							var S = new Set();
							S.add(u), (t.updateQueue = S);
						} else x.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							Mc(i, c, t), pu();
							break e;
						}
						u = Error(L(426));
					}
				} else if (ve && a.mode & 1) {
					var N = Dc(o);
					if (N !== null) {
						!(N.flags & 65536) && (N.flags |= 256),
							Oc(N, o, a, i, t),
							Ks(jr(u, a));
						break e;
					}
				}
				(i = u = jr(u, a)),
					Pe !== 4 && (Pe = 2),
					ol === null ? (ol = [i]) : ol.push(i),
					(i = o);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var h = yp(i, u, t);
							_c(i, h);
							break e;
						case 1:
							a = u;
							var p = i.type,
								v = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof p.getDerivedStateFromError == 'function' ||
									(v !== null &&
										typeof v.componentDidCatch == 'function' &&
										(gn === null || !gn.has(v))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var C = wp(i, a, t);
								_c(i, C);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			$p(n);
		} catch (P) {
			(t = P), ke === n && n !== null && (ke = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function zp() {
	var e = Ai.current;
	return (Ai.current = $i), e === null ? $i : e;
}
function pu() {
	(Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
		Le === null || (!(bn & 268435455) && !(oo & 268435455)) || un(Le, ze);
}
function Bi(e, t) {
	var n = q;
	q |= 2;
	var r = zp();
	(Le !== e || ze !== t) && ((At = null), zn(e, t));
	do
		try {
			Og();
			break;
		} catch (l) {
			Ip(e, l);
		}
	while (1);
	if ((Ys(), (q = n), (Ai.current = r), ke !== null)) throw Error(L(261));
	return (Le = null), (ze = 0), Pe;
}
function Og() {
	for (; ke !== null; ) Fp(ke);
}
function Ig() {
	for (; ke !== null && !ov(); ) Fp(ke);
}
function Fp(e) {
	var t = Up(e.alternate, e, lt);
	(e.memoizedProps = e.pendingProps),
		t === null ? $p(e) : (ke = t),
		(su.current = null);
}
function $p(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Rg(n, t)), n !== null)) {
				(n.flags &= 32767), (ke = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Pe = 6), (ke = null);
				return;
			}
		} else if (((n = kg(n, t, lt)), n !== null)) {
			ke = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			ke = t;
			return;
		}
		ke = t = e;
	} while (t !== null);
	Pe === 0 && (Pe = 5);
}
function Pn(e, t, n) {
	var r = te,
		l = mt.transition;
	try {
		(mt.transition = null), (te = 1), zg(e, t, n, r);
	} finally {
		(mt.transition = l), (te = r);
	}
	return null;
}
function zg(e, t, n, r) {
	do gr();
	while (dn !== null);
	if (q & 6) throw Error(L(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(L(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(vv(e, i),
		e === Le && ((ke = Le = null), (ze = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ii ||
			((ii = !0),
			bp(ji, function () {
				return gr(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = mt.transition), (mt.transition = null);
		var o = te;
		te = 1;
		var a = q;
		(q |= 4),
			(su.current = null),
			Tg(e, n),
			Mp(n, e),
			ng(qa),
			(_i = !!Xa),
			(qa = Xa = null),
			(e.current = n),
			Lg(n),
			av(),
			(q = a),
			(te = o),
			(mt.transition = i);
	} else e.current = n;
	if (
		(ii && ((ii = !1), (dn = e), (bi = l)),
		(i = e.pendingLanes),
		i === 0 && (gn = null),
		cv(n.stateNode),
		nt(e, _e()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
	if (Ui) throw ((Ui = !1), (e = gs), (gs = null), e);
	return (
		bi & 1 && e.tag !== 0 && gr(),
		(i = e.pendingLanes),
		i & 1 ? (e === ys ? al++ : ((al = 0), (ys = e))) : (al = 0),
		_n(),
		null
	);
}
function gr() {
	if (dn !== null) {
		var e = gf(bi),
			t = mt.transition,
			n = te;
		try {
			if (((mt.transition = null), (te = 16 > e ? 16 : e), dn === null))
				var r = !1;
			else {
				if (((e = dn), (dn = null), (bi = 0), q & 6)) throw Error(L(331));
				var l = q;
				for (q |= 4, F = e.current; F !== null; ) {
					var i = F,
						o = i.child;
					if (F.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var u = 0; u < a.length; u++) {
								var c = a[u];
								for (F = c; F !== null; ) {
									var f = F;
									switch (f.tag) {
										case 0:
										case 11:
										case 15:
											il(8, f, i);
									}
									var d = f.child;
									if (d !== null) (d.return = f), (F = d);
									else
										for (; F !== null; ) {
											f = F;
											var m = f.sibling,
												j = f.return;
											if ((Pp(f), f === c)) {
												F = null;
												break;
											}
											if (m !== null) {
												(m.return = j), (F = m);
												break;
											}
											F = j;
										}
								}
							}
							var x = i.alternate;
							if (x !== null) {
								var S = x.child;
								if (S !== null) {
									x.child = null;
									do {
										var N = S.sibling;
										(S.sibling = null), (S = N);
									} while (S !== null);
								}
							}
							F = i;
						}
					}
					if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (F = o);
					else
						e: for (; F !== null; ) {
							if (((i = F), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										il(9, i, i.return);
								}
							var h = i.sibling;
							if (h !== null) {
								(h.return = i.return), (F = h);
								break e;
							}
							F = i.return;
						}
				}
				var p = e.current;
				for (F = p; F !== null; ) {
					o = F;
					var v = o.child;
					if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (F = v);
					else
						e: for (o = p; F !== null; ) {
							if (((a = F), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											io(9, a);
									}
								} catch (P) {
									Ee(a, a.return, P);
								}
							if (a === o) {
								F = null;
								break e;
							}
							var C = a.sibling;
							if (C !== null) {
								(C.return = a.return), (F = C);
								break e;
							}
							F = a.return;
						}
				}
				if (
					((q = l), _n(), Ot && typeof Ot.onPostCommitFiberRoot == 'function')
				)
					try {
						Ot.onPostCommitFiberRoot(qi, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(te = n), (mt.transition = t);
		}
	}
	return !1;
}
function Kc(e, t, n) {
	(t = jr(n, t)),
		(t = yp(e, t, 1)),
		(e = vn(e, t, 1)),
		(t = Ge()),
		e !== null && (Tl(e, 1, t), nt(e, t));
}
function Ee(e, t, n) {
	if (e.tag === 3) Kc(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Kc(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(gn === null || !gn.has(r)))
				) {
					(e = jr(n, e)),
						(e = wp(t, e, 1)),
						(t = vn(t, e, 1)),
						(e = Ge()),
						t !== null && (Tl(t, 1, e), nt(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Fg(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Ge()),
		(e.pingedLanes |= e.suspendedLanes & n),
		Le === e &&
			(ze & n) === n &&
			(Pe === 4 || (Pe === 3 && (ze & 130023424) === ze && 500 > _e() - cu)
				? zn(e, 0)
				: (uu |= n)),
		nt(e, t);
}
function Ap(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Yl), (Yl <<= 1), !(Yl & 130023424) && (Yl = 4194304))
			: (t = 1));
	var n = Ge();
	(e = Gt(e, t)), e !== null && (Tl(e, t, n), nt(e, n));
}
function $g(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Ap(e, n);
}
function Ag(e, t) {
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
	r !== null && r.delete(t), Ap(e, n);
}
var Up;
Up = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), Ng(e, t, n);
			Ze = !!(e.flags & 131072);
		}
	else (Ze = !1), ve && t.flags & 1048576 && Vf(t, Mi, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			mi(e, t), (e = t.pendingProps);
			var l = wr(t, Be.current);
			vr(t, n), (l = ru(null, t, r, e, l, n));
			var i = lu();
			return (
				(t.flags |= 1),
				typeof l == 'object' &&
				l !== null &&
				typeof l.render == 'function' &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  tt(r) ? ((i = !0), Ti(t)) : (i = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0 ? l.state : null),
					  Js(t),
					  (l.updater = ro),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  os(t, r, e, n),
					  (t = us(null, t, r, !0, i, n)))
					: ((t.tag = 0), ve && i && Ws(t), Ke(null, t, l, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(mi(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = bg(r)),
					(e = St(r, e)),
					l)
				) {
					case 0:
						t = ss(null, t, r, e, n);
						break e;
					case 1:
						t = Fc(null, t, r, e, n);
						break e;
					case 11:
						t = Ic(null, t, r, e, n);
						break e;
					case 14:
						t = zc(null, t, r, St(r.type, e), n);
						break e;
				}
				throw Error(L(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : St(r, l)),
				ss(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : St(r, l)),
				Fc(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((jp(t), e === null)) throw Error(L(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(l = i.element),
					Kf(e, t),
					Ii(t, r, null, n);
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
						(l = jr(Error(L(423)), t)), (t = $c(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = jr(Error(L(424)), t)), (t = $c(e, t, r, n, l));
						break e;
					} else
						for (
							ot = mn(t.stateNode.containerInfo.firstChild),
								at = t,
								ve = !0,
								Ct = null,
								n = qf(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((xr(), r === l)) {
						t = Yt(e, t, n);
						break e;
					}
					Ke(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Jf(t),
				e === null && rs(t),
				(r = t.type),
				(l = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(o = l.children),
				Ja(r, l) ? (o = null) : i !== null && Ja(r, i) && (t.flags |= 32),
				Ep(e, t),
				Ke(e, t, o, n),
				t.child
			);
		case 6:
			return e === null && rs(t), null;
		case 13:
			return Cp(e, t, n);
		case 4:
			return (
				Zs(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Sr(t, null, r, n)) : Ke(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : St(r, l)),
				Ic(e, t, r, l, n)
			);
		case 7:
			return Ke(e, t, t.pendingProps, n), t.child;
		case 8:
			return Ke(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Ke(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(i = t.memoizedProps),
					(o = l.value),
					ce(Di, r._currentValue),
					(r._currentValue = o),
					i !== null)
				)
					if (kt(i.value, o)) {
						if (i.children === l.children && !et.current) {
							t = Yt(e, t, n);
							break e;
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null; ) {
							var a = i.dependencies;
							if (a !== null) {
								o = i.child;
								for (var u = a.firstContext; u !== null; ) {
									if (u.context === r) {
										if (i.tag === 1) {
											(u = Ht(-1, n & -n)), (u.tag = 2);
											var c = i.updateQueue;
											if (c !== null) {
												c = c.shared;
												var f = c.pending;
												f === null
													? (u.next = u)
													: ((u.next = f.next), (f.next = u)),
													(c.pending = u);
											}
										}
										(i.lanes |= n),
											(u = i.alternate),
											u !== null && (u.lanes |= n),
											ls(i.return, n, t),
											(a.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (i.tag === 10) o = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((o = i.return), o === null)) throw Error(L(341));
								(o.lanes |= n),
									(a = o.alternate),
									a !== null && (a.lanes |= n),
									ls(o, n, t),
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
				Ke(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				vr(t, n),
				(l = vt(l)),
				(r = r(l)),
				(t.flags |= 1),
				Ke(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = St(r, t.pendingProps)),
				(l = St(r.type, l)),
				zc(e, t, r, l, n)
			);
		case 15:
			return xp(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : St(r, l)),
				mi(e, t),
				(t.tag = 1),
				tt(r) ? ((e = !0), Ti(t)) : (e = !1),
				vr(t, n),
				Yf(t, r, l),
				os(t, r, l, n),
				us(null, t, r, !0, e, n)
			);
		case 19:
			return _p(e, t, n);
		case 22:
			return Sp(e, t, n);
	}
	throw Error(L(156, t.tag));
};
function bp(e, t) {
	return pf(e, t);
}
function Ug(e, t, n, r) {
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
function ht(e, t, n, r) {
	return new Ug(e, t, n, r);
}
function hu(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bg(e) {
	if (typeof e == 'function') return hu(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Ds)) return 11;
		if (e === Os) return 14;
	}
	return 2;
}
function wn(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = ht(e.tag, t, e.key, e.mode)),
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
function yi(e, t, n, r, l, i) {
	var o = 2;
	if (((r = e), typeof e == 'function')) hu(e) && (o = 1);
	else if (typeof e == 'string') o = 5;
	else
		e: switch (e) {
			case er:
				return Fn(n.children, l, i, t);
			case Ms:
				(o = 8), (l |= 8);
				break;
			case Ta:
				return (
					(e = ht(12, n, t, l | 2)), (e.elementType = Ta), (e.lanes = i), e
				);
			case La:
				return (e = ht(13, n, t, l)), (e.elementType = La), (e.lanes = i), e;
			case Ma:
				return (e = ht(19, n, t, l)), (e.elementType = Ma), (e.lanes = i), e;
			case Yd:
				return ao(n, l, i, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Kd:
							o = 10;
							break e;
						case Gd:
							o = 9;
							break e;
						case Ds:
							o = 11;
							break e;
						case Os:
							o = 14;
							break e;
						case on:
							(o = 16), (r = null);
							break e;
					}
				throw Error(L(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = ht(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
	);
}
function Fn(e, t, n, r) {
	return (e = ht(7, e, r, t)), (e.lanes = n), e;
}
function ao(e, t, n, r) {
	return (
		(e = ht(22, e, r, t)),
		(e.elementType = Yd),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function ya(e, t, n) {
	return (e = ht(6, e, null, t)), (e.lanes = n), e;
}
function wa(e, t, n) {
	return (
		(t = ht(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Bg(e, t, n, r, l) {
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
		(this.eventTimes = Zo(0)),
		(this.expirationTimes = Zo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Zo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function mu(e, t, n, r, l, i, o, a, u) {
	return (
		(e = new Bg(e, t, n, a, u)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = ht(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Js(i),
		e
	);
}
function Vg(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Zn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Bp(e) {
	if (!e) return Sn;
	e = e._reactInternals;
	e: {
		if (Wn(e) !== e || e.tag !== 1) throw Error(L(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (tt(t.type)) {
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
		if (tt(n)) return bf(e, n, t);
	}
	return t;
}
function Vp(e, t, n, r, l, i, o, a, u) {
	return (
		(e = mu(n, r, !0, e, l, i, o, a, u)),
		(e.context = Bp(null)),
		(n = e.current),
		(r = Ge()),
		(l = yn(n)),
		(i = Ht(r, l)),
		(i.callback = t ?? null),
		vn(n, i, l),
		(e.current.lanes = l),
		Tl(e, l, r),
		nt(e, r),
		e
	);
}
function so(e, t, n, r) {
	var l = t.current,
		i = Ge(),
		o = yn(l);
	return (
		(n = Bp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ht(i, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = vn(l, t, o)),
		e !== null && (Nt(e, l, o, i), fi(e, l, o)),
		o
	);
}
function Vi(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Gc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function vu(e, t) {
	Gc(e, t), (e = e.alternate) && Gc(e, t);
}
function Hg() {
	return null;
}
var Hp =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function gu(e) {
	this._internalRoot = e;
}
uo.prototype.render = gu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(L(409));
	so(e, t, null, null);
};
uo.prototype.unmount = gu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Bn(function () {
			so(null, e, null, null);
		}),
			(t[Kt] = null);
	}
};
function uo(e) {
	this._internalRoot = e;
}
uo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = xf();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
		sn.splice(n, 0, e), n === 0 && Ef(e);
	}
};
function yu(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function co(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Yc() {}
function Wg(e, t, n, r, l) {
	if (l) {
		if (typeof r == 'function') {
			var i = r;
			r = function () {
				var c = Vi(o);
				i.call(c);
			};
		}
		var o = Vp(t, r, e, 0, null, !1, !1, '', Yc);
		return (
			(e._reactRootContainer = o),
			(e[Kt] = o.current),
			vl(e.nodeType === 8 ? e.parentNode : e),
			Bn(),
			o
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var c = Vi(u);
			a.call(c);
		};
	}
	var u = mu(e, 0, !1, null, null, !1, !1, '', Yc);
	return (
		(e._reactRootContainer = u),
		(e[Kt] = u.current),
		vl(e.nodeType === 8 ? e.parentNode : e),
		Bn(function () {
			so(t, u, n, r);
		}),
		u
	);
}
function fo(e, t, n, r, l) {
	var i = n._reactRootContainer;
	if (i) {
		var o = i;
		if (typeof l == 'function') {
			var a = l;
			l = function () {
				var u = Vi(o);
				a.call(u);
			};
		}
		so(t, o, e, l);
	} else o = Wg(n, t, e, l, r);
	return Vi(o);
}
yf = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Xr(t.pendingLanes);
				n !== 0 &&
					(Fs(t, n | 1), nt(t, _e()), !(q & 6) && ((Cr = _e() + 500), _n()));
			}
			break;
		case 13:
			Bn(function () {
				var r = Gt(e, 1);
				if (r !== null) {
					var l = Ge();
					Nt(r, e, 1, l);
				}
			}),
				vu(e, 1);
	}
};
$s = function (e) {
	if (e.tag === 13) {
		var t = Gt(e, 134217728);
		if (t !== null) {
			var n = Ge();
			Nt(t, e, 134217728, n);
		}
		vu(e, 134217728);
	}
};
wf = function (e) {
	if (e.tag === 13) {
		var t = yn(e),
			n = Gt(e, t);
		if (n !== null) {
			var r = Ge();
			Nt(n, e, t, r);
		}
		vu(e, t);
	}
};
xf = function () {
	return te;
};
Sf = function (e, t) {
	var n = te;
	try {
		return (te = e), t();
	} finally {
		te = n;
	}
};
Ba = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Ia(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
						var l = to(r);
						if (!l) throw Error(L(90));
						qd(r), Ia(r, l);
					}
				}
			}
			break;
		case 'textarea':
			Zd(e, n);
			break;
		case 'select':
			(t = n.value), t != null && fr(e, !!n.multiple, t, !1);
	}
};
af = du;
sf = Bn;
var Qg = { usingClientEntryPoint: !1, Events: [Ml, lr, to, lf, of, du] },
	Hr = {
		findFiberByHostInstance: Ln,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Kg = {
		bundleType: Hr.bundleType,
		version: Hr.version,
		rendererPackageName: Hr.rendererPackageName,
		rendererConfig: Hr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: qt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = df(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Hr.findFiberByHostInstance || Hg,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!oi.isDisabled && oi.supportsFiber)
		try {
			(qi = oi.inject(Kg)), (Ot = oi);
		} catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg;
ut.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!yu(t)) throw Error(L(200));
	return Vg(e, t, null, n);
};
ut.createRoot = function (e, t) {
	if (!yu(e)) throw Error(L(299));
	var n = !1,
		r = '',
		l = Hp;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = mu(e, 1, !1, null, null, n, !1, r, l)),
		(e[Kt] = t.current),
		vl(e.nodeType === 8 ? e.parentNode : e),
		new gu(t)
	);
};
ut.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(L(188))
			: ((e = Object.keys(e).join(',')), Error(L(268, e)));
	return (e = df(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
	return Bn(e);
};
ut.hydrate = function (e, t, n) {
	if (!co(t)) throw Error(L(200));
	return fo(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
	if (!yu(e)) throw Error(L(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		i = '',
		o = Hp;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = Vp(t, null, e, 1, n ?? null, l, !1, i, o)),
		(e[Kt] = t.current),
		vl(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new uo(t);
};
ut.render = function (e, t, n) {
	if (!co(t)) throw Error(L(200));
	return fo(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
	if (!co(e)) throw Error(L(40));
	return e._reactRootContainer
		? (Bn(function () {
				fo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Kt] = null);
				});
		  }),
		  !0)
		: !1;
};
ut.unstable_batchedUpdates = du;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!co(n)) throw Error(L(200));
	if (e == null || e._reactInternals === void 0) throw Error(L(38));
	return fo(e, t, n, !1, r);
};
ut.version = '18.2.0-next-9e3b772b8-20220608';
function Wp() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wp);
		} catch (e) {
			console.error(e);
		}
}
Wp(), (Bd.exports = ut);
var po = Bd.exports;
const Qp = Ld(po),
	Gg = Td({ __proto__: null, default: Qp }, [po]);
var Xc = po;
(Ra.createRoot = Xc.createRoot), (Ra.hydrateRoot = Xc.hydrateRoot);
var Kp = { exports: {} },
	Gp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = y;
function Yg(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xg = typeof Object.is == 'function' ? Object.is : Yg,
	qg = _r.useState,
	Jg = _r.useEffect,
	Zg = _r.useLayoutEffect,
	ey = _r.useDebugValue;
function ty(e, t) {
	var n = t(),
		r = qg({ inst: { value: n, getSnapshot: t } }),
		l = r[0].inst,
		i = r[1];
	return (
		Zg(
			function () {
				(l.value = n), (l.getSnapshot = t), xa(l) && i({ inst: l });
			},
			[e, n, t]
		),
		Jg(
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
		ey(n),
		n
	);
}
function xa(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Xg(e, n);
	} catch {
		return !0;
	}
}
function ny(e, t) {
	return t();
}
var ry =
	typeof window > 'u' ||
	typeof window.document > 'u' ||
	typeof window.document.createElement > 'u'
		? ny
		: ty;
Gp.useSyncExternalStore =
	_r.useSyncExternalStore !== void 0 ? _r.useSyncExternalStore : ry;
Kp.exports = Gp;
var ly = Kp.exports,
	Yp = { exports: {} },
	Xp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ho = y,
	iy = ly;
function oy(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ay = typeof Object.is == 'function' ? Object.is : oy,
	sy = iy.useSyncExternalStore,
	uy = ho.useRef,
	cy = ho.useEffect,
	dy = ho.useMemo,
	fy = ho.useDebugValue;
Xp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
	var i = uy(null);
	if (i.current === null) {
		var o = { hasValue: !1, value: null };
		i.current = o;
	} else o = i.current;
	i = dy(
		function () {
			function u(j) {
				if (!c) {
					if (((c = !0), (f = j), (j = r(j)), l !== void 0 && o.hasValue)) {
						var x = o.value;
						if (l(x, j)) return (d = x);
					}
					return (d = j);
				}
				if (((x = d), ay(f, j))) return x;
				var S = r(j);
				return l !== void 0 && l(x, S) ? x : ((f = j), (d = S));
			}
			var c = !1,
				f,
				d,
				m = n === void 0 ? null : n;
			return [
				function () {
					return u(t());
				},
				m === null
					? void 0
					: function () {
							return u(m());
					  },
			];
		},
		[t, n, r, l]
	);
	var a = sy(e, i[0], i[1]);
	return (
		cy(
			function () {
				(o.hasValue = !0), (o.value = a);
			},
			[a]
		),
		fy(a),
		a
	);
};
Yp.exports = Xp;
var py = Yp.exports;
function hy(e) {
	e();
}
let qp = hy;
const my = (e) => (qp = e),
	vy = () => qp,
	qc = Symbol.for('react-redux-context'),
	Jc = typeof globalThis < 'u' ? globalThis : {};
function gy() {
	var e;
	if (!y.createContext) return {};
	const t = (e = Jc[qc]) != null ? e : (Jc[qc] = new Map());
	let n = t.get(y.createContext);
	return n || ((n = y.createContext(null)), t.set(y.createContext, n)), n;
}
const En = gy();
function wu(e = En) {
	return function () {
		return y.useContext(e);
	};
}
const Jp = wu(),
	yy = () => {
		throw new Error('uSES not initialized!');
	};
let Zp = yy;
const wy = (e) => {
		Zp = e;
	},
	xy = (e, t) => e === t;
function Sy(e = En) {
	const t = e === En ? Jp : wu(e);
	return function (r, l = {}) {
		const {
				equalityFn: i = xy,
				stabilityCheck: o = void 0,
				noopCheck: a = void 0,
			} = typeof l == 'function' ? { equalityFn: l } : l,
			{
				store: u,
				subscription: c,
				getServerState: f,
				stabilityCheck: d,
				noopCheck: m,
			} = t();
		y.useRef(!0);
		const j = y.useCallback(
				{
					[r.name](S) {
						return r(S);
					},
				}[r.name],
				[r, d, o]
			),
			x = Zp(c.addNestedSub, u.getState, f || u.getState, j, i);
		return y.useDebugValue(x), x;
	};
}
const ne = Sy();
var eh = { exports: {} },
	re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Me = typeof Symbol == 'function' && Symbol.for,
	xu = Me ? Symbol.for('react.element') : 60103,
	Su = Me ? Symbol.for('react.portal') : 60106,
	mo = Me ? Symbol.for('react.fragment') : 60107,
	vo = Me ? Symbol.for('react.strict_mode') : 60108,
	go = Me ? Symbol.for('react.profiler') : 60114,
	yo = Me ? Symbol.for('react.provider') : 60109,
	wo = Me ? Symbol.for('react.context') : 60110,
	Eu = Me ? Symbol.for('react.async_mode') : 60111,
	xo = Me ? Symbol.for('react.concurrent_mode') : 60111,
	So = Me ? Symbol.for('react.forward_ref') : 60112,
	Eo = Me ? Symbol.for('react.suspense') : 60113,
	Ey = Me ? Symbol.for('react.suspense_list') : 60120,
	jo = Me ? Symbol.for('react.memo') : 60115,
	Co = Me ? Symbol.for('react.lazy') : 60116,
	jy = Me ? Symbol.for('react.block') : 60121,
	Cy = Me ? Symbol.for('react.fundamental') : 60117,
	_y = Me ? Symbol.for('react.responder') : 60118,
	Ny = Me ? Symbol.for('react.scope') : 60119;
function dt(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case xu:
				switch (((e = e.type), e)) {
					case Eu:
					case xo:
					case mo:
					case go:
					case vo:
					case Eo:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case wo:
							case So:
							case Co:
							case jo:
							case yo:
								return e;
							default:
								return t;
						}
				}
			case Su:
				return t;
		}
	}
}
function th(e) {
	return dt(e) === xo;
}
re.AsyncMode = Eu;
re.ConcurrentMode = xo;
re.ContextConsumer = wo;
re.ContextProvider = yo;
re.Element = xu;
re.ForwardRef = So;
re.Fragment = mo;
re.Lazy = Co;
re.Memo = jo;
re.Portal = Su;
re.Profiler = go;
re.StrictMode = vo;
re.Suspense = Eo;
re.isAsyncMode = function (e) {
	return th(e) || dt(e) === Eu;
};
re.isConcurrentMode = th;
re.isContextConsumer = function (e) {
	return dt(e) === wo;
};
re.isContextProvider = function (e) {
	return dt(e) === yo;
};
re.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === xu;
};
re.isForwardRef = function (e) {
	return dt(e) === So;
};
re.isFragment = function (e) {
	return dt(e) === mo;
};
re.isLazy = function (e) {
	return dt(e) === Co;
};
re.isMemo = function (e) {
	return dt(e) === jo;
};
re.isPortal = function (e) {
	return dt(e) === Su;
};
re.isProfiler = function (e) {
	return dt(e) === go;
};
re.isStrictMode = function (e) {
	return dt(e) === vo;
};
re.isSuspense = function (e) {
	return dt(e) === Eo;
};
re.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === mo ||
		e === xo ||
		e === go ||
		e === vo ||
		e === Eo ||
		e === Ey ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === Co ||
				e.$$typeof === jo ||
				e.$$typeof === yo ||
				e.$$typeof === wo ||
				e.$$typeof === So ||
				e.$$typeof === Cy ||
				e.$$typeof === _y ||
				e.$$typeof === Ny ||
				e.$$typeof === jy))
	);
};
re.typeOf = dt;
eh.exports = re;
var ky = eh.exports,
	nh = ky,
	Ry = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
	},
	Py = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0,
	},
	rh = {};
rh[nh.ForwardRef] = Ry;
rh[nh.Memo] = Py;
var se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ju = Symbol.for('react.element'),
	Cu = Symbol.for('react.portal'),
	_o = Symbol.for('react.fragment'),
	No = Symbol.for('react.strict_mode'),
	ko = Symbol.for('react.profiler'),
	Ro = Symbol.for('react.provider'),
	Po = Symbol.for('react.context'),
	Ty = Symbol.for('react.server_context'),
	To = Symbol.for('react.forward_ref'),
	Lo = Symbol.for('react.suspense'),
	Mo = Symbol.for('react.suspense_list'),
	Do = Symbol.for('react.memo'),
	Oo = Symbol.for('react.lazy'),
	Ly = Symbol.for('react.offscreen'),
	lh;
lh = Symbol.for('react.module.reference');
function yt(e) {
	if (typeof e == 'object' && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case ju:
				switch (((e = e.type), e)) {
					case _o:
					case ko:
					case No:
					case Lo:
					case Mo:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Ty:
							case Po:
							case To:
							case Oo:
							case Do:
							case Ro:
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
se.ContextConsumer = Po;
se.ContextProvider = Ro;
se.Element = ju;
se.ForwardRef = To;
se.Fragment = _o;
se.Lazy = Oo;
se.Memo = Do;
se.Portal = Cu;
se.Profiler = ko;
se.StrictMode = No;
se.Suspense = Lo;
se.SuspenseList = Mo;
se.isAsyncMode = function () {
	return !1;
};
se.isConcurrentMode = function () {
	return !1;
};
se.isContextConsumer = function (e) {
	return yt(e) === Po;
};
se.isContextProvider = function (e) {
	return yt(e) === Ro;
};
se.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === ju;
};
se.isForwardRef = function (e) {
	return yt(e) === To;
};
se.isFragment = function (e) {
	return yt(e) === _o;
};
se.isLazy = function (e) {
	return yt(e) === Oo;
};
se.isMemo = function (e) {
	return yt(e) === Do;
};
se.isPortal = function (e) {
	return yt(e) === Cu;
};
se.isProfiler = function (e) {
	return yt(e) === ko;
};
se.isStrictMode = function (e) {
	return yt(e) === No;
};
se.isSuspense = function (e) {
	return yt(e) === Lo;
};
se.isSuspenseList = function (e) {
	return yt(e) === Mo;
};
se.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === _o ||
		e === ko ||
		e === No ||
		e === Lo ||
		e === Mo ||
		e === Ly ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === Oo ||
				e.$$typeof === Do ||
				e.$$typeof === Ro ||
				e.$$typeof === Po ||
				e.$$typeof === To ||
				e.$$typeof === lh ||
				e.getModuleId !== void 0))
	);
};
se.typeOf = yt;
function My() {
	const e = vy();
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
const Zc = { notify() {}, get: () => [] };
function Dy(e, t) {
	let n,
		r = Zc,
		l = 0,
		i = !1;
	function o(S) {
		f();
		const N = r.subscribe(S);
		let h = !1;
		return () => {
			h || ((h = !0), N(), d());
		};
	}
	function a() {
		r.notify();
	}
	function u() {
		x.onStateChange && x.onStateChange();
	}
	function c() {
		return i;
	}
	function f() {
		l++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = My()));
	}
	function d() {
		l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Zc));
	}
	function m() {
		i || ((i = !0), f());
	}
	function j() {
		i && ((i = !1), d());
	}
	const x = {
		addNestedSub: o,
		notifyNestedSubs: a,
		handleChangeWrapper: u,
		isSubscribed: c,
		trySubscribe: m,
		tryUnsubscribe: j,
		getListeners: () => r,
	};
	return x;
}
const Oy =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	Iy = Oy ? y.useLayoutEffect : y.useEffect;
function zy({
	store: e,
	context: t,
	children: n,
	serverState: r,
	stabilityCheck: l = 'once',
	noopCheck: i = 'once',
}) {
	const o = y.useMemo(() => {
			const c = Dy(e);
			return {
				store: e,
				subscription: c,
				getServerState: r ? () => r : void 0,
				stabilityCheck: l,
				noopCheck: i,
			};
		}, [e, r, l, i]),
		a = y.useMemo(() => e.getState(), [e]);
	Iy(() => {
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
	const u = t || En;
	return y.createElement(u.Provider, { value: o }, n);
}
function ih(e = En) {
	const t = e === En ? Jp : wu(e);
	return function () {
		const { store: r } = t();
		return r;
	};
}
const Fy = ih();
function $y(e = En) {
	const t = e === En ? Fy : ih(e);
	return function () {
		return t().dispatch;
	};
}
const je = $y();
wy(py.useSyncExternalStoreWithSelector);
my(po.unstable_batchedUpdates);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ge() {
	return (
		(ge = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		ge.apply(this, arguments)
	);
}
var Ce;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Ce || (Ce = {}));
const ed = 'popstate';
function Ay(e) {
	e === void 0 && (e = {});
	function t(r, l) {
		let { pathname: i, search: o, hash: a } = r.location;
		return _l(
			'',
			{ pathname: i, search: o, hash: a },
			(l.state && l.state.usr) || null,
			(l.state && l.state.key) || 'default'
		);
	}
	function n(r, l) {
		return typeof l == 'string' ? l : Vn(l);
	}
	return by(t, n, null, e);
}
function Q(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Nr(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Uy() {
	return Math.random().toString(36).substr(2, 8);
}
function td(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function _l(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		ge(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Jt(t) : t,
			{ state: n, key: (t && t.key) || r || Uy() }
		)
	);
}
function Vn(e) {
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
function by(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: l = document.defaultView, v5Compat: i = !1 } = r,
		o = l.history,
		a = Ce.Pop,
		u = null,
		c = f();
	c == null && ((c = 0), o.replaceState(ge({}, o.state, { idx: c }), ''));
	function f() {
		return (o.state || { idx: null }).idx;
	}
	function d() {
		a = Ce.Pop;
		let N = f(),
			h = N == null ? null : N - c;
		(c = N), u && u({ action: a, location: S.location, delta: h });
	}
	function m(N, h) {
		a = Ce.Push;
		let p = _l(S.location, N, h);
		n && n(p, N), (c = f() + 1);
		let v = td(p, c),
			C = S.createHref(p);
		try {
			o.pushState(v, '', C);
		} catch (P) {
			if (P instanceof DOMException && P.name === 'DataCloneError') throw P;
			l.location.assign(C);
		}
		i && u && u({ action: a, location: S.location, delta: 1 });
	}
	function j(N, h) {
		a = Ce.Replace;
		let p = _l(S.location, N, h);
		n && n(p, N), (c = f());
		let v = td(p, c),
			C = S.createHref(p);
		o.replaceState(v, '', C),
			i && u && u({ action: a, location: S.location, delta: 0 });
	}
	function x(N) {
		let h = l.location.origin !== 'null' ? l.location.origin : l.location.href,
			p = typeof N == 'string' ? N : Vn(N);
		return (
			(p = p.replace(/ $/, '%20')),
			Q(
				h,
				'No window.location.(origin|href) available to create URL for href: ' +
					p
			),
			new URL(p, h)
		);
	}
	let S = {
		get action() {
			return a;
		},
		get location() {
			return e(l, o);
		},
		listen(N) {
			if (u) throw new Error('A history only accepts one active listener');
			return (
				l.addEventListener(ed, d),
				(u = N),
				() => {
					l.removeEventListener(ed, d), (u = null);
				}
			);
		},
		createHref(N) {
			return t(l, N);
		},
		createURL: x,
		encodeLocation(N) {
			let h = x(N);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: m,
		replace: j,
		go(N) {
			return o.go(N);
		},
	};
	return S;
}
var ae;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(ae || (ae = {}));
const By = new Set([
	'lazy',
	'caseSensitive',
	'path',
	'id',
	'index',
	'children',
]);
function Vy(e) {
	return e.index === !0;
}
function Nl(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((l, i) => {
			let o = [...n, String(i)],
				a = typeof l.id == 'string' ? l.id : o.join('-');
			if (
				(Q(
					l.index !== !0 || !l.children,
					'Cannot specify children on an index route'
				),
				Q(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				Vy(l))
			) {
				let u = ge({}, l, t(l), { id: a });
				return (r[a] = u), u;
			} else {
				let u = ge({}, l, t(l), { id: a, children: void 0 });
				return (
					(r[a] = u), l.children && (u.children = Nl(l.children, t, o, r)), u
				);
			}
		})
	);
}
function Tn(e, t, n) {
	return n === void 0 && (n = '/'), wi(e, t, n, !1);
}
function wi(e, t, n, r) {
	let l = typeof t == 'string' ? Jt(t) : t,
		i = Xt(l.pathname || '/', n);
	if (i == null) return null;
	let o = oh(e);
	Wy(o);
	let a = null;
	for (let u = 0; a == null && u < o.length; ++u) {
		let c = n0(i);
		a = e0(o[u], c, r);
	}
	return a;
}
function Hy(e, t) {
	let { route: n, pathname: r, params: l } = e;
	return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function oh(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let l = (i, o, a) => {
		let u = {
			relativePath: a === void 0 ? i.path || '' : a,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: o,
			route: i,
		};
		u.relativePath.startsWith('/') &&
			(Q(
				u.relativePath.startsWith(r),
				'Absolute route path "' +
					u.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(u.relativePath = u.relativePath.slice(r.length)));
		let c = Wt([r, u.relativePath]),
			f = n.concat(u);
		i.children &&
			i.children.length > 0 &&
			(Q(
				i.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + c + '".')
			),
			oh(i.children, t, f, c)),
			!(i.path == null && !i.index) &&
				t.push({ path: c, score: Jy(c, i.index), routesMeta: f });
	};
	return (
		e.forEach((i, o) => {
			var a;
			if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
			else for (let u of ah(i.path)) l(i, o, u);
		}),
		t
	);
}
function ah(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		l = n.endsWith('?'),
		i = n.replace(/\?$/, '');
	if (r.length === 0) return l ? [i, ''] : [i];
	let o = ah(r.join('/')),
		a = [];
	return (
		a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
		l && a.push(...o),
		a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
	);
}
function Wy(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Zy(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Qy = /^:[\w-]+$/,
	Ky = 3,
	Gy = 2,
	Yy = 1,
	Xy = 10,
	qy = -2,
	nd = (e) => e === '*';
function Jy(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(nd) && (r += qy),
		t && (r += Gy),
		n
			.filter((l) => !nd(l))
			.reduce((l, i) => l + (Qy.test(i) ? Ky : i === '' ? Yy : Xy), r)
	);
}
function Zy(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function e0(e, t, n) {
	n === void 0 && (n = !1);
	let { routesMeta: r } = e,
		l = {},
		i = '/',
		o = [];
	for (let a = 0; a < r.length; ++a) {
		let u = r[a],
			c = a === r.length - 1,
			f = i === '/' ? t : t.slice(i.length) || '/',
			d = Hi(
				{ path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
				f
			),
			m = u.route;
		if (
			(!d &&
				c &&
				n &&
				!r[r.length - 1].route.index &&
				(d = Hi(
					{ path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
					f
				)),
			!d)
		)
			return null;
		Object.assign(l, d.params),
			o.push({
				params: l,
				pathname: Wt([i, d.pathname]),
				pathnameBase: i0(Wt([i, d.pathnameBase])),
				route: m,
			}),
			d.pathnameBase !== '/' && (i = Wt([i, d.pathnameBase]));
	}
	return o;
}
function Hi(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = t0(e.path, e.caseSensitive, e.end),
		l = t.match(n);
	if (!l) return null;
	let i = l[0],
		o = i.replace(/(.)\/+$/, '$1'),
		a = l.slice(1);
	return {
		params: r.reduce((c, f, d) => {
			let { paramName: m, isOptional: j } = f;
			if (m === '*') {
				let S = a[d] || '';
				o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, '$1');
			}
			const x = a[d];
			return (
				j && !x ? (c[m] = void 0) : (c[m] = (x || '').replace(/%2F/g, '/')), c
			);
		}, {}),
		pathname: i,
		pathnameBase: o,
		pattern: e,
	};
}
function t0(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Nr(
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
					(o, a, u) => (
						r.push({ paramName: a, isOptional: u != null }),
						u ? '/?([^\\/]+)?' : '/([^\\/]+)'
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
function n0(e) {
	try {
		return e
			.split('/')
			.map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/');
	} catch (t) {
		return (
			Nr(
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
function Xt(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function r0(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: l = '',
	} = typeof e == 'string' ? Jt(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : l0(n, t)) : t,
		search: o0(r),
		hash: a0(l),
	};
}
function l0(e, t) {
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
function sh(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Io(e, t) {
	let n = sh(e);
	return t
		? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function zo(e, t, n, r) {
	r === void 0 && (r = !1);
	let l;
	typeof e == 'string'
		? (l = Jt(e))
		: ((l = ge({}, e)),
		  Q(
				!l.pathname || !l.pathname.includes('?'),
				Sa('?', 'pathname', 'search', l)
		  ),
		  Q(
				!l.pathname || !l.pathname.includes('#'),
				Sa('#', 'pathname', 'hash', l)
		  ),
		  Q(!l.search || !l.search.includes('#'), Sa('#', 'search', 'hash', l)));
	let i = e === '' || l.pathname === '',
		o = i ? '/' : l.pathname,
		a;
	if (o == null) a = n;
	else {
		let d = t.length - 1;
		if (!r && o.startsWith('..')) {
			let m = o.split('/');
			for (; m[0] === '..'; ) m.shift(), (d -= 1);
			l.pathname = m.join('/');
		}
		a = d >= 0 ? t[d] : '/';
	}
	let u = r0(l, a),
		c = o && o !== '/' && o.endsWith('/'),
		f = (i || o === '.') && n.endsWith('/');
	return !u.pathname.endsWith('/') && (c || f) && (u.pathname += '/'), u;
}
const Wt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	i0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	o0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	a0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Wi {
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
function Fo(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const uh = ['post', 'put', 'patch', 'delete'],
	s0 = new Set(uh),
	u0 = ['get', ...uh],
	c0 = new Set(u0),
	d0 = new Set([301, 302, 303, 307, 308]),
	f0 = new Set([307, 308]),
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
	p0 = {
		state: 'idle',
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Wr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
	_u = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	h0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	ch = 'remix-router-transitions';
function m0(e) {
	const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
		n =
			typeof t < 'u' &&
			typeof t.document < 'u' &&
			typeof t.document.createElement < 'u',
		r = !n;
	Q(
		e.routes.length > 0,
		'You must provide a non-empty routes array to createRouter'
	);
	let l;
	if (e.mapRouteProperties) l = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let g = e.detectErrorBoundary;
		l = (E) => ({ hasErrorBoundary: g(E) });
	} else l = h0;
	let i = {},
		o = Nl(e.routes, l, void 0, i),
		a,
		u = e.basename || '/',
		c = e.unstable_dataStrategy || x0,
		f = e.unstable_patchRoutesOnMiss,
		d = ge(
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
		m = null,
		j = new Set(),
		x = null,
		S = null,
		N = null,
		h = e.hydrationData != null,
		p = Tn(o, e.history.location, u),
		v = null;
	if (p == null && !f) {
		let g = Qe(404, { pathname: e.history.location.pathname }),
			{ matches: E, route: _ } = fd(o);
		(p = E), (v = { [_.id]: g });
	}
	p &&
		!e.hydrationData &&
		Al(p, o, e.history.location.pathname).active &&
		(p = null);
	let C;
	if (p)
		if (p.some((g) => g.route.lazy)) C = !1;
		else if (!p.some((g) => g.route.loader)) C = !0;
		else if (d.v7_partialHydration) {
			let g = e.hydrationData ? e.hydrationData.loaderData : null,
				E = e.hydrationData ? e.hydrationData.errors : null,
				_ = (k) =>
					k.route.loader
						? typeof k.route.loader == 'function' &&
						  k.route.loader.hydrate === !0
							? !1
							: (g && g[k.route.id] !== void 0) ||
							  (E && E[k.route.id] !== void 0)
						: !0;
			if (E) {
				let k = p.findIndex((z) => E[z.route.id] !== void 0);
				C = p.slice(0, k + 1).every(_);
			} else C = p.every(_);
		} else C = e.hydrationData != null;
	else if (((C = !1), (p = []), d.v7_partialHydration)) {
		let g = Al(null, o, e.history.location.pathname);
		g.active && g.matches && (p = g.matches);
	}
	let P,
		w = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: p,
			initialized: C,
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
		R = Ce.Pop,
		T = !1,
		M,
		O = !1,
		Y = new Map(),
		le = null,
		$ = !1,
		A = !1,
		de = [],
		Ve = new Set(),
		ie = new Map(),
		I = 0,
		H = -1,
		W = new Map(),
		J = new Set(),
		fe = new Map(),
		Pt = new Map(),
		De = new Set(),
		wt = new Map(),
		He = new Map(),
		Qn = new Map(),
		Ho = !1;
	function om() {
		if (
			((m = e.history.listen((g) => {
				let { action: E, location: _, delta: k } = g;
				if (Ho) {
					Ho = !1;
					return;
				}
				Nr(
					He.size === 0 || k != null,
					'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
				);
				let z = $u({
					currentLocation: w.location,
					nextLocation: _,
					historyAction: E,
				});
				if (z && k != null) {
					(Ho = !0),
						e.history.go(k * -1),
						Fl(z, {
							state: 'blocked',
							location: _,
							proceed() {
								Fl(z, {
									state: 'proceeding',
									proceed: void 0,
									reset: void 0,
									location: _,
								}),
									e.history.go(k);
							},
							reset() {
								let U = new Map(w.blockers);
								U.set(z, Wr), We({ blockers: U });
							},
						});
					return;
				}
				return kn(E, _);
			})),
			n)
		) {
			D0(t, Y);
			let g = () => O0(t, Y);
			t.addEventListener('pagehide', g),
				(le = () => t.removeEventListener('pagehide', g));
		}
		return w.initialized || kn(Ce.Pop, w.location, { initialHydration: !0 }), P;
	}
	function am() {
		m && m(),
			le && le(),
			j.clear(),
			M && M.abort(),
			w.fetchers.forEach((g, E) => zl(E)),
			w.blockers.forEach((g, E) => Fu(E));
	}
	function sm(g) {
		return j.add(g), () => j.delete(g);
	}
	function We(g, E) {
		E === void 0 && (E = {}), (w = ge({}, w, g));
		let _ = [],
			k = [];
		d.v7_fetcherPersist &&
			w.fetchers.forEach((z, U) => {
				z.state === 'idle' && (De.has(U) ? k.push(U) : _.push(U));
			}),
			[...j].forEach((z) =>
				z(w, {
					deletedFetchers: k,
					unstable_viewTransitionOpts: E.viewTransitionOpts,
					unstable_flushSync: E.flushSync === !0,
				})
			),
			d.v7_fetcherPersist &&
				(_.forEach((z) => w.fetchers.delete(z)), k.forEach((z) => zl(z)));
	}
	function Kn(g, E, _) {
		var k, z;
		let { flushSync: U } = _ === void 0 ? {} : _,
			V =
				w.actionData != null &&
				w.navigation.formMethod != null &&
				jt(w.navigation.formMethod) &&
				w.navigation.state === 'loading' &&
				((k = g.state) == null ? void 0 : k._isRedirect) !== !0,
			D;
		E.actionData
			? Object.keys(E.actionData).length > 0
				? (D = E.actionData)
				: (D = null)
			: V
			? (D = w.actionData)
			: (D = null);
		let K = E.loaderData
				? cd(w.loaderData, E.loaderData, E.matches || [], E.errors)
				: w.loaderData,
			b = w.blockers;
		b.size > 0 && ((b = new Map(b)), b.forEach((ee, ue) => b.set(ue, Wr)));
		let B =
			T === !0 ||
			(w.navigation.formMethod != null &&
				jt(w.navigation.formMethod) &&
				((z = g.state) == null ? void 0 : z._isRedirect) !== !0);
		a && ((o = a), (a = void 0)),
			$ ||
				R === Ce.Pop ||
				(R === Ce.Push
					? e.history.push(g, g.state)
					: R === Ce.Replace && e.history.replace(g, g.state));
		let oe;
		if (R === Ce.Pop) {
			let ee = Y.get(w.location.pathname);
			ee && ee.has(g.pathname)
				? (oe = { currentLocation: w.location, nextLocation: g })
				: Y.has(g.pathname) &&
				  (oe = { currentLocation: g, nextLocation: w.location });
		} else if (O) {
			let ee = Y.get(w.location.pathname);
			ee
				? ee.add(g.pathname)
				: ((ee = new Set([g.pathname])), Y.set(w.location.pathname, ee)),
				(oe = { currentLocation: w.location, nextLocation: g });
		}
		We(
			ge({}, E, {
				actionData: D,
				loaderData: K,
				historyAction: R,
				location: g,
				initialized: !0,
				navigation: Ea,
				revalidation: 'idle',
				restoreScrollPosition: Uu(g, E.matches || w.matches),
				preventScrollReset: B,
				blockers: b,
			}),
			{ viewTransitionOpts: oe, flushSync: U === !0 }
		),
			(R = Ce.Pop),
			(T = !1),
			(O = !1),
			($ = !1),
			(A = !1),
			(de = []);
	}
	async function Tu(g, E) {
		if (typeof g == 'number') {
			e.history.go(g);
			return;
		}
		let _ = Ss(
				w.location,
				w.matches,
				u,
				d.v7_prependBasename,
				g,
				d.v7_relativeSplatPath,
				E == null ? void 0 : E.fromRouteId,
				E == null ? void 0 : E.relative
			),
			{
				path: k,
				submission: z,
				error: U,
			} = rd(d.v7_normalizeFormMethod, !1, _, E),
			V = w.location,
			D = _l(w.location, k, E && E.state);
		D = ge({}, D, e.history.encodeLocation(D));
		let K = E && E.replace != null ? E.replace : void 0,
			b = Ce.Push;
		K === !0
			? (b = Ce.Replace)
			: K === !1 ||
			  (z != null &&
					jt(z.formMethod) &&
					z.formAction === w.location.pathname + w.location.search &&
					(b = Ce.Replace));
		let B =
				E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
			oe = (E && E.unstable_flushSync) === !0,
			ee = $u({ currentLocation: V, nextLocation: D, historyAction: b });
		if (ee) {
			Fl(ee, {
				state: 'blocked',
				location: D,
				proceed() {
					Fl(ee, {
						state: 'proceeding',
						proceed: void 0,
						reset: void 0,
						location: D,
					}),
						Tu(g, E);
				},
				reset() {
					let ue = new Map(w.blockers);
					ue.set(ee, Wr), We({ blockers: ue });
				},
			});
			return;
		}
		return await kn(b, D, {
			submission: z,
			pendingError: U,
			preventScrollReset: B,
			replace: E && E.replace,
			enableViewTransition: E && E.unstable_viewTransition,
			flushSync: oe,
		});
	}
	function um() {
		if (
			(Wo(),
			We({ revalidation: 'loading' }),
			w.navigation.state !== 'submitting')
		) {
			if (w.navigation.state === 'idle') {
				kn(w.historyAction, w.location, { startUninterruptedRevalidation: !0 });
				return;
			}
			kn(R || w.historyAction, w.navigation.location, {
				overrideNavigation: w.navigation,
			});
		}
	}
	async function kn(g, E, _) {
		M && M.abort(),
			(M = null),
			(R = g),
			($ = (_ && _.startUninterruptedRevalidation) === !0),
			wm(w.location, w.matches),
			(T = (_ && _.preventScrollReset) === !0),
			(O = (_ && _.enableViewTransition) === !0);
		let k = a || o,
			z = _ && _.overrideNavigation,
			U = Tn(k, E, u),
			V = (_ && _.flushSync) === !0,
			D = Al(U, k, E.pathname);
		if ((D.active && D.matches && (U = D.matches), !U)) {
			let { error: Z, notFoundMatches: Oe, route: Ne } = Qo(E.pathname);
			Kn(
				E,
				{ matches: Oe, loaderData: {}, errors: { [Ne.id]: Z } },
				{ flushSync: V }
			);
			return;
		}
		if (
			w.initialized &&
			!A &&
			N0(w.location, E) &&
			!(_ && _.submission && jt(_.submission.formMethod))
		) {
			Kn(E, { matches: U }, { flushSync: V });
			return;
		}
		M = new AbortController();
		let K = Jn(e.history, E, M.signal, _ && _.submission),
			b;
		if (_ && _.pendingError)
			b = [dr(U).route.id, { type: ae.error, error: _.pendingError }];
		else if (_ && _.submission && jt(_.submission.formMethod)) {
			let Z = await cm(K, E, _.submission, U, D.active, {
				replace: _.replace,
				flushSync: V,
			});
			if (Z.shortCircuited) return;
			if (Z.pendingActionResult) {
				let [Oe, Ne] = Z.pendingActionResult;
				if (it(Ne) && Fo(Ne.error) && Ne.error.status === 404) {
					(M = null),
						Kn(E, {
							matches: Z.matches,
							loaderData: {},
							errors: { [Oe]: Ne.error },
						});
					return;
				}
			}
			(U = Z.matches || U),
				(b = Z.pendingActionResult),
				(z = ja(E, _.submission)),
				(V = !1),
				(D.active = !1),
				(K = Jn(e.history, K.url, K.signal));
		}
		let {
			shortCircuited: B,
			matches: oe,
			loaderData: ee,
			errors: ue,
		} = await dm(
			K,
			E,
			U,
			D.active,
			z,
			_ && _.submission,
			_ && _.fetcherSubmission,
			_ && _.replace,
			_ && _.initialHydration === !0,
			V,
			b
		);
		B ||
			((M = null),
			Kn(E, ge({ matches: oe || U }, dd(b), { loaderData: ee, errors: ue })));
	}
	async function cm(g, E, _, k, z, U) {
		U === void 0 && (U = {}), Wo();
		let V = L0(E, _);
		if ((We({ navigation: V }, { flushSync: U.flushSync === !0 }), z)) {
			let b = await Ul(k, E.pathname, g.signal);
			if (b.type === 'aborted') return { shortCircuited: !0 };
			if (b.type === 'error') {
				let { boundaryId: B, error: oe } = $l(E.pathname, b);
				return {
					matches: b.partialMatches,
					pendingActionResult: [B, { type: ae.error, error: oe }],
				};
			} else if (b.matches) k = b.matches;
			else {
				let { notFoundMatches: B, error: oe, route: ee } = Qo(E.pathname);
				return {
					matches: B,
					pendingActionResult: [ee.id, { type: ae.error, error: oe }],
				};
			}
		}
		let D,
			K = Jr(k, E);
		if (!K.route.action && !K.route.lazy)
			D = {
				type: ae.error,
				error: Qe(405, {
					method: g.method,
					pathname: E.pathname,
					routeId: K.route.id,
				}),
			};
		else if (((D = (await Ir('action', g, [K], k))[0]), g.signal.aborted))
			return { shortCircuited: !0 };
		if (In(D)) {
			let b;
			return (
				U && U.replace != null
					? (b = U.replace)
					: (b =
							ad(D.response.headers.get('Location'), new URL(g.url), u) ===
							w.location.pathname + w.location.search),
				await Or(g, D, { submission: _, replace: b }),
				{ shortCircuited: !0 }
			);
		}
		if (On(D)) throw Qe(400, { type: 'defer-action' });
		if (it(D)) {
			let b = dr(k, K.route.id);
			return (
				(U && U.replace) !== !0 && (R = Ce.Push),
				{ matches: k, pendingActionResult: [b.route.id, D] }
			);
		}
		return { matches: k, pendingActionResult: [K.route.id, D] };
	}
	async function dm(g, E, _, k, z, U, V, D, K, b, B) {
		let oe = z || ja(E, U),
			ee = U || V || vd(oe),
			ue = !$ && (!d.v7_partialHydration || !K);
		if (k) {
			if (ue) {
				let Se = Lu(B);
				We(ge({ navigation: oe }, Se !== void 0 ? { actionData: Se } : {}), {
					flushSync: b,
				});
			}
			let G = await Ul(_, E.pathname, g.signal);
			if (G.type === 'aborted') return { shortCircuited: !0 };
			if (G.type === 'error') {
				let { boundaryId: Se, error: rt } = $l(E.pathname, G);
				return {
					matches: G.partialMatches,
					loaderData: {},
					errors: { [Se]: rt },
				};
			} else if (G.matches) _ = G.matches;
			else {
				let { error: Se, notFoundMatches: rt, route: me } = Qo(E.pathname);
				return { matches: rt, loaderData: {}, errors: { [me.id]: Se } };
			}
		}
		let Z = a || o,
			[Oe, Ne] = ld(
				e.history,
				w,
				_,
				ee,
				E,
				d.v7_partialHydration && K === !0,
				d.v7_skipActionErrorRevalidation,
				A,
				de,
				Ve,
				De,
				fe,
				J,
				Z,
				u,
				B
			);
		if (
			(Ko(
				(G) =>
					!(_ && _.some((Se) => Se.route.id === G)) ||
					(Oe && Oe.some((Se) => Se.route.id === G))
			),
			(H = ++I),
			Oe.length === 0 && Ne.length === 0)
		) {
			let G = Iu();
			return (
				Kn(
					E,
					ge(
						{
							matches: _,
							loaderData: {},
							errors: B && it(B[1]) ? { [B[0]]: B[1].error } : null,
						},
						dd(B),
						G ? { fetchers: new Map(w.fetchers) } : {}
					),
					{ flushSync: b }
				),
				{ shortCircuited: !0 }
			);
		}
		if (ue) {
			let G = {};
			if (!k) {
				G.navigation = oe;
				let Se = Lu(B);
				Se !== void 0 && (G.actionData = Se);
			}
			Ne.length > 0 && (G.fetchers = fm(Ne)), We(G, { flushSync: b });
		}
		Ne.forEach((G) => {
			ie.has(G.key) && tn(G.key), G.controller && ie.set(G.key, G.controller);
		});
		let zr = () => Ne.forEach((G) => tn(G.key));
		M && M.signal.addEventListener('abort', zr);
		let { loaderResults: nn, fetcherResults: Gn } = await Mu(
			w.matches,
			_,
			Oe,
			Ne,
			g
		);
		if (g.signal.aborted) return { shortCircuited: !0 };
		M && M.signal.removeEventListener('abort', zr),
			Ne.forEach((G) => ie.delete(G.key));
		let Yn = pd([...nn, ...Gn]);
		if (Yn) {
			if (Yn.idx >= Oe.length) {
				let G = Ne[Yn.idx - Oe.length].key;
				J.add(G);
			}
			return await Or(g, Yn.result, { replace: D }), { shortCircuited: !0 };
		}
		let { loaderData: Xn, errors: Tt } = ud(w, _, Oe, nn, B, Ne, Gn, wt);
		wt.forEach((G, Se) => {
			G.subscribe((rt) => {
				(rt || G.done) && wt.delete(Se);
			});
		}),
			d.v7_partialHydration &&
				K &&
				w.errors &&
				Object.entries(w.errors)
					.filter((G) => {
						let [Se] = G;
						return !Oe.some((rt) => rt.route.id === Se);
					})
					.forEach((G) => {
						let [Se, rt] = G;
						Tt = Object.assign(Tt || {}, { [Se]: rt });
					});
		let bl = Iu(),
			Bl = zu(H),
			Vl = bl || Bl || Ne.length > 0;
		return ge(
			{ matches: _, loaderData: Xn, errors: Tt },
			Vl ? { fetchers: new Map(w.fetchers) } : {}
		);
	}
	function Lu(g) {
		if (g && !it(g[1])) return { [g[0]]: g[1].data };
		if (w.actionData)
			return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function fm(g) {
		return (
			g.forEach((E) => {
				let _ = w.fetchers.get(E.key),
					k = Qr(void 0, _ ? _.data : void 0);
				w.fetchers.set(E.key, k);
			}),
			new Map(w.fetchers)
		);
	}
	function pm(g, E, _, k) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		ie.has(g) && tn(g);
		let z = (k && k.unstable_flushSync) === !0,
			U = a || o,
			V = Ss(
				w.location,
				w.matches,
				u,
				d.v7_prependBasename,
				_,
				d.v7_relativeSplatPath,
				E,
				k == null ? void 0 : k.relative
			),
			D = Tn(U, V, u),
			K = Al(D, U, V);
		if ((K.active && K.matches && (D = K.matches), !D)) {
			Ft(g, E, Qe(404, { pathname: V }), { flushSync: z });
			return;
		}
		let {
			path: b,
			submission: B,
			error: oe,
		} = rd(d.v7_normalizeFormMethod, !0, V, k);
		if (oe) {
			Ft(g, E, oe, { flushSync: z });
			return;
		}
		let ee = Jr(D, b);
		if (((T = (k && k.preventScrollReset) === !0), B && jt(B.formMethod))) {
			hm(g, E, b, ee, D, K.active, z, B);
			return;
		}
		fe.set(g, { routeId: E, path: b }), mm(g, E, b, ee, D, K.active, z, B);
	}
	async function hm(g, E, _, k, z, U, V, D) {
		Wo(), fe.delete(g);
		function K(me) {
			if (!me.route.action && !me.route.lazy) {
				let $t = Qe(405, { method: D.formMethod, pathname: _, routeId: E });
				return Ft(g, E, $t, { flushSync: V }), !0;
			}
			return !1;
		}
		if (!U && K(k)) return;
		let b = w.fetchers.get(g);
		en(g, M0(D, b), { flushSync: V });
		let B = new AbortController(),
			oe = Jn(e.history, _, B.signal, D);
		if (U) {
			let me = await Ul(z, _, oe.signal);
			if (me.type === 'aborted') return;
			if (me.type === 'error') {
				let { error: $t } = $l(_, me);
				Ft(g, E, $t, { flushSync: V });
				return;
			} else if (me.matches) {
				if (((z = me.matches), (k = Jr(z, _)), K(k))) return;
			} else {
				Ft(g, E, Qe(404, { pathname: _ }), { flushSync: V });
				return;
			}
		}
		ie.set(g, B);
		let ee = I,
			Z = (await Ir('action', oe, [k], z))[0];
		if (oe.signal.aborted) {
			ie.get(g) === B && ie.delete(g);
			return;
		}
		if (d.v7_fetcherPersist && De.has(g)) {
			if (In(Z) || it(Z)) {
				en(g, ln(void 0));
				return;
			}
		} else {
			if (In(Z))
				if ((ie.delete(g), H > ee)) {
					en(g, ln(void 0));
					return;
				} else
					return J.add(g), en(g, Qr(D)), Or(oe, Z, { fetcherSubmission: D });
			if (it(Z)) {
				Ft(g, E, Z.error);
				return;
			}
		}
		if (On(Z)) throw Qe(400, { type: 'defer-action' });
		let Oe = w.navigation.location || w.location,
			Ne = Jn(e.history, Oe, B.signal),
			zr = a || o,
			nn =
				w.navigation.state !== 'idle'
					? Tn(zr, w.navigation.location, u)
					: w.matches;
		Q(nn, "Didn't find any matches after fetcher action");
		let Gn = ++I;
		W.set(g, Gn);
		let Yn = Qr(D, Z.data);
		w.fetchers.set(g, Yn);
		let [Xn, Tt] = ld(
			e.history,
			w,
			nn,
			D,
			Oe,
			!1,
			d.v7_skipActionErrorRevalidation,
			A,
			de,
			Ve,
			De,
			fe,
			J,
			zr,
			u,
			[k.route.id, Z]
		);
		Tt.filter((me) => me.key !== g).forEach((me) => {
			let $t = me.key,
				bu = w.fetchers.get($t),
				Em = Qr(void 0, bu ? bu.data : void 0);
			w.fetchers.set($t, Em),
				ie.has($t) && tn($t),
				me.controller && ie.set($t, me.controller);
		}),
			We({ fetchers: new Map(w.fetchers) });
		let bl = () => Tt.forEach((me) => tn(me.key));
		B.signal.addEventListener('abort', bl);
		let { loaderResults: Bl, fetcherResults: Vl } = await Mu(
			w.matches,
			nn,
			Xn,
			Tt,
			Ne
		);
		if (B.signal.aborted) return;
		B.signal.removeEventListener('abort', bl),
			W.delete(g),
			ie.delete(g),
			Tt.forEach((me) => ie.delete(me.key));
		let G = pd([...Bl, ...Vl]);
		if (G) {
			if (G.idx >= Xn.length) {
				let me = Tt[G.idx - Xn.length].key;
				J.add(me);
			}
			return Or(Ne, G.result);
		}
		let { loaderData: Se, errors: rt } = ud(
			w,
			w.matches,
			Xn,
			Bl,
			void 0,
			Tt,
			Vl,
			wt
		);
		if (w.fetchers.has(g)) {
			let me = ln(Z.data);
			w.fetchers.set(g, me);
		}
		zu(Gn),
			w.navigation.state === 'loading' && Gn > H
				? (Q(R, 'Expected pending action'),
				  M && M.abort(),
				  Kn(w.navigation.location, {
						matches: nn,
						loaderData: Se,
						errors: rt,
						fetchers: new Map(w.fetchers),
				  }))
				: (We({
						errors: rt,
						loaderData: cd(w.loaderData, Se, nn, rt),
						fetchers: new Map(w.fetchers),
				  }),
				  (A = !1));
	}
	async function mm(g, E, _, k, z, U, V, D) {
		let K = w.fetchers.get(g);
		en(g, Qr(D, K ? K.data : void 0), { flushSync: V });
		let b = new AbortController(),
			B = Jn(e.history, _, b.signal);
		if (U) {
			let Z = await Ul(z, _, B.signal);
			if (Z.type === 'aborted') return;
			if (Z.type === 'error') {
				let { error: Oe } = $l(_, Z);
				Ft(g, E, Oe, { flushSync: V });
				return;
			} else if (Z.matches) (z = Z.matches), (k = Jr(z, _));
			else {
				Ft(g, E, Qe(404, { pathname: _ }), { flushSync: V });
				return;
			}
		}
		ie.set(g, b);
		let oe = I,
			ue = (await Ir('loader', B, [k], z))[0];
		if (
			(On(ue) && (ue = (await mh(ue, B.signal, !0)) || ue),
			ie.get(g) === b && ie.delete(g),
			!B.signal.aborted)
		) {
			if (De.has(g)) {
				en(g, ln(void 0));
				return;
			}
			if (In(ue))
				if (H > oe) {
					en(g, ln(void 0));
					return;
				} else {
					J.add(g), await Or(B, ue);
					return;
				}
			if (it(ue)) {
				Ft(g, E, ue.error);
				return;
			}
			Q(!On(ue), 'Unhandled fetcher deferred data'), en(g, ln(ue.data));
		}
	}
	async function Or(g, E, _) {
		let {
			submission: k,
			fetcherSubmission: z,
			replace: U,
		} = _ === void 0 ? {} : _;
		E.response.headers.has('X-Remix-Revalidate') && (A = !0);
		let V = E.response.headers.get('Location');
		Q(V, 'Expected a Location header on the redirect Response'),
			(V = ad(V, new URL(g.url), u));
		let D = _l(w.location, V, { _isRedirect: !0 });
		if (n) {
			let ue = !1;
			if (E.response.headers.has('X-Remix-Reload-Document')) ue = !0;
			else if (_u.test(V)) {
				const Z = e.history.createURL(V);
				ue = Z.origin !== t.location.origin || Xt(Z.pathname, u) == null;
			}
			if (ue) {
				U ? t.location.replace(V) : t.location.assign(V);
				return;
			}
		}
		M = null;
		let K =
				U === !0 || E.response.headers.has('X-Remix-Replace')
					? Ce.Replace
					: Ce.Push,
			{ formMethod: b, formAction: B, formEncType: oe } = w.navigation;
		!k && !z && b && B && oe && (k = vd(w.navigation));
		let ee = k || z;
		if (f0.has(E.response.status) && ee && jt(ee.formMethod))
			await kn(K, D, {
				submission: ge({}, ee, { formAction: V }),
				preventScrollReset: T,
			});
		else {
			let ue = ja(D, k);
			await kn(K, D, {
				overrideNavigation: ue,
				fetcherSubmission: z,
				preventScrollReset: T,
			});
		}
	}
	async function Ir(g, E, _, k) {
		try {
			let z = await S0(c, g, E, _, k, i, l);
			return await Promise.all(
				z.map((U, V) => {
					if (R0(U)) {
						let D = U.result;
						return {
							type: ae.redirect,
							response: C0(D, E, _[V].route.id, k, u, d.v7_relativeSplatPath),
						};
					}
					return j0(U);
				})
			);
		} catch (z) {
			return _.map(() => ({ type: ae.error, error: z }));
		}
	}
	async function Mu(g, E, _, k, z) {
		let [U, ...V] = await Promise.all([
			_.length ? Ir('loader', z, _, E) : [],
			...k.map((D) => {
				if (D.matches && D.match && D.controller) {
					let K = Jn(e.history, D.path, D.controller.signal);
					return Ir('loader', K, [D.match], D.matches).then((b) => b[0]);
				} else
					return Promise.resolve({
						type: ae.error,
						error: Qe(404, { pathname: D.path }),
					});
			}),
		]);
		return (
			await Promise.all([
				md(
					g,
					_,
					U,
					U.map(() => z.signal),
					!1,
					w.loaderData
				),
				md(
					g,
					k.map((D) => D.match),
					V,
					k.map((D) => (D.controller ? D.controller.signal : null)),
					!0
				),
			]),
			{ loaderResults: U, fetcherResults: V }
		);
	}
	function Wo() {
		(A = !0),
			de.push(...Ko()),
			fe.forEach((g, E) => {
				ie.has(E) && (Ve.add(E), tn(E));
			});
	}
	function en(g, E, _) {
		_ === void 0 && (_ = {}),
			w.fetchers.set(g, E),
			We(
				{ fetchers: new Map(w.fetchers) },
				{ flushSync: (_ && _.flushSync) === !0 }
			);
	}
	function Ft(g, E, _, k) {
		k === void 0 && (k = {});
		let z = dr(w.matches, E);
		zl(g),
			We(
				{ errors: { [z.route.id]: _ }, fetchers: new Map(w.fetchers) },
				{ flushSync: (k && k.flushSync) === !0 }
			);
	}
	function Du(g) {
		return (
			d.v7_fetcherPersist &&
				(Pt.set(g, (Pt.get(g) || 0) + 1), De.has(g) && De.delete(g)),
			w.fetchers.get(g) || p0
		);
	}
	function zl(g) {
		let E = w.fetchers.get(g);
		ie.has(g) && !(E && E.state === 'loading' && W.has(g)) && tn(g),
			fe.delete(g),
			W.delete(g),
			J.delete(g),
			De.delete(g),
			Ve.delete(g),
			w.fetchers.delete(g);
	}
	function vm(g) {
		if (d.v7_fetcherPersist) {
			let E = (Pt.get(g) || 0) - 1;
			E <= 0 ? (Pt.delete(g), De.add(g)) : Pt.set(g, E);
		} else zl(g);
		We({ fetchers: new Map(w.fetchers) });
	}
	function tn(g) {
		let E = ie.get(g);
		Q(E, 'Expected fetch controller: ' + g), E.abort(), ie.delete(g);
	}
	function Ou(g) {
		for (let E of g) {
			let _ = Du(E),
				k = ln(_.data);
			w.fetchers.set(E, k);
		}
	}
	function Iu() {
		let g = [],
			E = !1;
		for (let _ of J) {
			let k = w.fetchers.get(_);
			Q(k, 'Expected fetcher: ' + _),
				k.state === 'loading' && (J.delete(_), g.push(_), (E = !0));
		}
		return Ou(g), E;
	}
	function zu(g) {
		let E = [];
		for (let [_, k] of W)
			if (k < g) {
				let z = w.fetchers.get(_);
				Q(z, 'Expected fetcher: ' + _),
					z.state === 'loading' && (tn(_), W.delete(_), E.push(_));
			}
		return Ou(E), E.length > 0;
	}
	function gm(g, E) {
		let _ = w.blockers.get(g) || Wr;
		return He.get(g) !== E && He.set(g, E), _;
	}
	function Fu(g) {
		w.blockers.delete(g), He.delete(g);
	}
	function Fl(g, E) {
		let _ = w.blockers.get(g) || Wr;
		Q(
			(_.state === 'unblocked' && E.state === 'blocked') ||
				(_.state === 'blocked' && E.state === 'blocked') ||
				(_.state === 'blocked' && E.state === 'proceeding') ||
				(_.state === 'blocked' && E.state === 'unblocked') ||
				(_.state === 'proceeding' && E.state === 'unblocked'),
			'Invalid blocker state transition: ' + _.state + ' -> ' + E.state
		);
		let k = new Map(w.blockers);
		k.set(g, E), We({ blockers: k });
	}
	function $u(g) {
		let { currentLocation: E, nextLocation: _, historyAction: k } = g;
		if (He.size === 0) return;
		He.size > 1 && Nr(!1, 'A router only supports one blocker at a time');
		let z = Array.from(He.entries()),
			[U, V] = z[z.length - 1],
			D = w.blockers.get(U);
		if (
			!(D && D.state === 'proceeding') &&
			V({ currentLocation: E, nextLocation: _, historyAction: k })
		)
			return U;
	}
	function Qo(g) {
		let E = Qe(404, { pathname: g }),
			_ = a || o,
			{ matches: k, route: z } = fd(_);
		return Ko(), { notFoundMatches: k, route: z, error: E };
	}
	function $l(g, E) {
		return {
			boundaryId: dr(E.partialMatches).route.id,
			error: Qe(400, {
				type: 'route-discovery',
				pathname: g,
				message:
					E.error != null && 'message' in E.error ? E.error : String(E.error),
			}),
		};
	}
	function Ko(g) {
		let E = [];
		return (
			wt.forEach((_, k) => {
				(!g || g(k)) && (_.cancel(), E.push(k), wt.delete(k));
			}),
			E
		);
	}
	function ym(g, E, _) {
		if (((x = g), (N = E), (S = _ || null), !h && w.navigation === Ea)) {
			h = !0;
			let k = Uu(w.location, w.matches);
			k != null && We({ restoreScrollPosition: k });
		}
		return () => {
			(x = null), (N = null), (S = null);
		};
	}
	function Au(g, E) {
		return (
			(S &&
				S(
					g,
					E.map((k) => Hy(k, w.loaderData))
				)) ||
			g.key
		);
	}
	function wm(g, E) {
		if (x && N) {
			let _ = Au(g, E);
			x[_] = N();
		}
	}
	function Uu(g, E) {
		if (x) {
			let _ = Au(g, E),
				k = x[_];
			if (typeof k == 'number') return k;
		}
		return null;
	}
	function Al(g, E, _) {
		if (f)
			if (g) {
				let k = g[g.length - 1].route;
				if (k.path && (k.path === '*' || k.path.endsWith('/*')))
					return { active: !0, matches: wi(E, _, u, !0) };
			} else return { active: !0, matches: wi(E, _, u, !0) || [] };
		return { active: !1, matches: null };
	}
	async function Ul(g, E, _) {
		let k = g,
			z = k.length > 0 ? k[k.length - 1].route : null;
		for (;;) {
			let U = a == null,
				V = a || o;
			try {
				await w0(f, E, k, V, i, l, Qn, _);
			} catch (B) {
				return { type: 'error', error: B, partialMatches: k };
			} finally {
				U && (o = [...o]);
			}
			if (_.aborted) return { type: 'aborted' };
			let D = Tn(V, E, u),
				K = !1;
			if (D) {
				let B = D[D.length - 1].route;
				if (B.index) return { type: 'success', matches: D };
				if (B.path && B.path.length > 0)
					if (B.path === '*') K = !0;
					else return { type: 'success', matches: D };
			}
			let b = wi(V, E, u, !0);
			if (
				!b ||
				k.map((B) => B.route.id).join('-') ===
					b.map((B) => B.route.id).join('-')
			)
				return { type: 'success', matches: K ? D : null };
			if (((k = b), (z = k[k.length - 1].route), z.path === '*'))
				return { type: 'success', matches: k };
		}
	}
	function xm(g) {
		(i = {}), (a = Nl(g, l, void 0, i));
	}
	function Sm(g, E) {
		let _ = a == null;
		fh(g, E, a || o, i, l), _ && ((o = [...o]), We({}));
	}
	return (
		(P = {
			get basename() {
				return u;
			},
			get future() {
				return d;
			},
			get state() {
				return w;
			},
			get routes() {
				return o;
			},
			get window() {
				return t;
			},
			initialize: om,
			subscribe: sm,
			enableScrollRestoration: ym,
			navigate: Tu,
			fetch: pm,
			revalidate: um,
			createHref: (g) => e.history.createHref(g),
			encodeLocation: (g) => e.history.encodeLocation(g),
			getFetcher: Du,
			deleteFetcher: vm,
			dispose: am,
			getBlocker: gm,
			deleteBlocker: Fu,
			patchRoutes: Sm,
			_internalFetchControllers: ie,
			_internalActiveDeferreds: wt,
			_internalSetRoutes: xm,
		}),
		P
	);
}
function v0(e) {
	return (
		e != null &&
		(('formData' in e && e.formData != null) ||
			('body' in e && e.body !== void 0))
	);
}
function Ss(e, t, n, r, l, i, o, a) {
	let u, c;
	if (o) {
		u = [];
		for (let d of t)
			if ((u.push(d), d.route.id === o)) {
				c = d;
				break;
			}
	} else (u = t), (c = t[t.length - 1]);
	let f = zo(l || '.', Io(u, i), Xt(e.pathname, n) || e.pathname, a === 'path');
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
		Vn(f)
	);
}
function rd(e, t, n, r) {
	if (!r || !v0(r)) return { path: n };
	if (r.formMethod && !T0(r.formMethod))
		return { path: n, error: Qe(405, { method: r.formMethod }) };
	let l = () => ({ path: n, error: Qe(400, { type: 'invalid-body' }) }),
		i = r.formMethod || 'get',
		o = e ? i.toUpperCase() : i.toLowerCase(),
		a = ph(n);
	if (r.body !== void 0) {
		if (r.formEncType === 'text/plain') {
			if (!jt(o)) return l();
			let m =
				typeof r.body == 'string'
					? r.body
					: r.body instanceof FormData || r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((j, x) => {
							let [S, N] = x;
							return (
								'' +
								j +
								S +
								'=' +
								N +
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
					text: m,
				},
			};
		} else if (r.formEncType === 'application/json') {
			if (!jt(o)) return l();
			try {
				let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: o,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: m,
						text: void 0,
					},
				};
			} catch {
				return l();
			}
		}
	}
	Q(
		typeof FormData == 'function',
		'FormData is not available in this environment'
	);
	let u, c;
	if (r.formData) (u = Es(r.formData)), (c = r.formData);
	else if (r.body instanceof FormData) (u = Es(r.body)), (c = r.body);
	else if (r.body instanceof URLSearchParams) (u = r.body), (c = sd(u));
	else if (r.body == null) (u = new URLSearchParams()), (c = new FormData());
	else
		try {
			(u = new URLSearchParams(r.body)), (c = sd(u));
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
	if (jt(f.formMethod)) return { path: n, submission: f };
	let d = Jt(n);
	return (
		t && d.search && Nu(d.search) && u.append('index', ''),
		(d.search = '?' + u),
		{ path: Vn(d), submission: f }
	);
}
function g0(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((l) => l.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function ld(e, t, n, r, l, i, o, a, u, c, f, d, m, j, x, S) {
	let N = S ? (it(S[1]) ? S[1].error : S[1].data) : void 0,
		h = e.createURL(t.location),
		p = e.createURL(l),
		v = S && it(S[1]) ? S[0] : void 0,
		C = v ? g0(n, v) : n,
		P = S ? S[1].statusCode : void 0,
		w = o && P && P >= 400,
		R = C.filter((M, O) => {
			let { route: Y } = M;
			if (Y.lazy) return !0;
			if (Y.loader == null) return !1;
			if (i)
				return typeof Y.loader != 'function' || Y.loader.hydrate
					? !0
					: t.loaderData[Y.id] === void 0 &&
							(!t.errors || t.errors[Y.id] === void 0);
			if (y0(t.loaderData, t.matches[O], M) || u.some((A) => A === M.route.id))
				return !0;
			let le = t.matches[O],
				$ = M;
			return id(
				M,
				ge(
					{
						currentUrl: h,
						currentParams: le.params,
						nextUrl: p,
						nextParams: $.params,
					},
					r,
					{
						actionResult: N,
						actionStatus: P,
						defaultShouldRevalidate: w
							? !1
							: a ||
							  h.pathname + h.search === p.pathname + p.search ||
							  h.search !== p.search ||
							  dh(le, $),
					}
				)
			);
		}),
		T = [];
	return (
		d.forEach((M, O) => {
			if (i || !n.some((de) => de.route.id === M.routeId) || f.has(O)) return;
			let Y = Tn(j, M.path, x);
			if (!Y) {
				T.push({
					key: O,
					routeId: M.routeId,
					path: M.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let le = t.fetchers.get(O),
				$ = Jr(Y, M.path),
				A = !1;
			m.has(O)
				? (A = !1)
				: c.has(O)
				? (c.delete(O), (A = !0))
				: le && le.state !== 'idle' && le.data === void 0
				? (A = a)
				: (A = id(
						$,
						ge(
							{
								currentUrl: h,
								currentParams: t.matches[t.matches.length - 1].params,
								nextUrl: p,
								nextParams: n[n.length - 1].params,
							},
							r,
							{
								actionResult: N,
								actionStatus: P,
								defaultShouldRevalidate: w ? !1 : a,
							}
						)
				  )),
				A &&
					T.push({
						key: O,
						routeId: M.routeId,
						path: M.path,
						matches: Y,
						match: $,
						controller: new AbortController(),
					});
		}),
		[R, T]
	);
}
function y0(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		l = e[n.route.id] === void 0;
	return r || l;
}
function dh(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
	);
}
function id(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == 'boolean') return n;
	}
	return t.defaultShouldRevalidate;
}
async function w0(e, t, n, r, l, i, o, a) {
	let u = [t, ...n.map((c) => c.route.id)].join('-');
	try {
		let c = o.get(u);
		c ||
			((c = e({
				path: t,
				matches: n,
				patch: (f, d) => {
					a.aborted || fh(f, d, r, l, i);
				},
			})),
			o.set(u, c)),
			c && k0(c) && (await c);
	} finally {
		o.delete(u);
	}
}
function fh(e, t, n, r, l) {
	if (e) {
		var i;
		let o = r[e];
		Q(o, 'No route found to patch children into: routeId = ' + e);
		let a = Nl(
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
		let o = Nl(t, l, ['patch', String(n.length || '0')], r);
		n.push(...o);
	}
}
async function od(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let l = n[e.id];
	Q(l, 'No route found in manifest');
	let i = {};
	for (let o in r) {
		let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
		Nr(
			!u,
			'Route "' +
				l.id +
				'" has a static property "' +
				o +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + o + '" will be ignored.')
		),
			!u && !By.has(o) && (i[o] = r[o]);
	}
	Object.assign(l, i), Object.assign(l, ge({}, t(l), { lazy: void 0 }));
}
function x0(e) {
	return Promise.all(e.matches.map((t) => t.resolve()));
}
async function S0(e, t, n, r, l, i, o, a) {
	let u = r.reduce((d, m) => d.add(m.route.id), new Set()),
		c = new Set(),
		f = await e({
			matches: l.map((d) => {
				let m = u.has(d.route.id);
				return ge({}, d, {
					shouldLoad: m,
					resolve: (x) => (
						c.add(d.route.id),
						m
							? E0(t, n, d, i, o, x, a)
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
			Q(
				c.has(d.route.id),
				'`match.resolve()` was not called for route id "' +
					d.route.id +
					'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
			)
		),
		f.filter((d, m) => u.has(l[m].route.id))
	);
}
async function E0(e, t, n, r, l, i, o) {
	let a,
		u,
		c = (f) => {
			let d,
				m = new Promise((S, N) => (d = N));
			(u = () => d()), t.signal.addEventListener('abort', u);
			let j = (S) =>
					typeof f != 'function'
						? Promise.reject(
								new Error(
									'You cannot call the handler for a route which defines a boolean ' +
										('"' + e + '" [routeId: ' + n.route.id + ']')
								)
						  )
						: f(
								{ request: t, params: n.params, context: o },
								...(S !== void 0 ? [S] : [])
						  ),
				x;
			return (
				i
					? (x = i((S) => j(S)))
					: (x = (async () => {
							try {
								return { type: 'data', result: await j() };
							} catch (S) {
								return { type: 'error', result: S };
							}
					  })()),
				Promise.race([x, m])
			);
		};
	try {
		let f = n.route[e];
		if (n.route.lazy)
			if (f) {
				let d,
					[m] = await Promise.all([
						c(f).catch((j) => {
							d = j;
						}),
						od(n.route, l, r),
					]);
				if (d !== void 0) throw d;
				a = m;
			} else if ((await od(n.route, l, r), (f = n.route[e]), f)) a = await c(f);
			else if (e === 'action') {
				let d = new URL(t.url),
					m = d.pathname + d.search;
				throw Qe(405, { method: t.method, pathname: m, routeId: n.route.id });
			} else return { type: ae.data, result: void 0 };
		else if (f) a = await c(f);
		else {
			let d = new URL(t.url),
				m = d.pathname + d.search;
			throw Qe(404, { pathname: m });
		}
		Q(
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
		u && t.signal.removeEventListener('abort', u);
	}
	return a;
}
async function j0(e) {
	let { result: t, type: n } = e;
	if (hh(t)) {
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
					error: new Wi(t.status, t.statusText, c),
					statusCode: t.status,
					headers: t.headers,
			  }
			: { type: ae.data, data: c, statusCode: t.status, headers: t.headers };
	}
	if (n === ae.error) {
		if (hd(t)) {
			var r;
			if (t.data instanceof Error) {
				var l;
				return {
					type: ae.error,
					error: t.data,
					statusCode: (l = t.init) == null ? void 0 : l.status,
				};
			}
			t = new Wi(
				((r = t.init) == null ? void 0 : r.status) || 500,
				void 0,
				t.data
			);
		}
		return { type: ae.error, error: t, statusCode: Fo(t) ? t.status : void 0 };
	}
	if (P0(t)) {
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
	if (hd(t)) {
		var a, u;
		return {
			type: ae.data,
			data: t.data,
			statusCode: (a = t.init) == null ? void 0 : a.status,
			headers:
				(u = t.init) != null && u.headers
					? new Headers(t.init.headers)
					: void 0,
		};
	}
	return { type: ae.data, data: t };
}
function C0(e, t, n, r, l, i) {
	let o = e.headers.get('Location');
	if (
		(Q(
			o,
			'Redirects returned/thrown from loaders/actions must have a Location header'
		),
		!_u.test(o))
	) {
		let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
		(o = Ss(new URL(t.url), a, l, !0, o, i)), e.headers.set('Location', o);
	}
	return e;
}
function ad(e, t, n) {
	if (_u.test(e)) {
		let r = e,
			l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
			i = Xt(l.pathname, n) != null;
		if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
	}
	return e;
}
function Jn(e, t, n, r) {
	let l = e.createURL(ph(t)).toString(),
		i = { signal: n };
	if (r && jt(r.formMethod)) {
		let { formMethod: o, formEncType: a } = r;
		(i.method = o.toUpperCase()),
			a === 'application/json'
				? ((i.headers = new Headers({ 'Content-Type': a })),
				  (i.body = JSON.stringify(r.json)))
				: a === 'text/plain'
				? (i.body = r.text)
				: a === 'application/x-www-form-urlencoded' && r.formData
				? (i.body = Es(r.formData))
				: (i.body = r.formData);
	}
	return new Request(l, i);
}
function Es(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == 'string' ? r : r.name);
	return t;
}
function sd(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function _0(e, t, n, r, l, i) {
	let o = {},
		a = null,
		u,
		c = !1,
		f = {},
		d = r && it(r[1]) ? r[1].error : void 0;
	return (
		n.forEach((m, j) => {
			let x = t[j].route.id;
			if (
				(Q(!In(m), 'Cannot handle redirect results in processLoaderData'),
				it(m))
			) {
				let S = m.error;
				if ((d !== void 0 && ((S = d), (d = void 0)), (a = a || {}), i))
					a[x] = S;
				else {
					let N = dr(e, x);
					a[N.route.id] == null && (a[N.route.id] = S);
				}
				(o[x] = void 0),
					c || ((c = !0), (u = Fo(m.error) ? m.error.status : 500)),
					m.headers && (f[x] = m.headers);
			} else
				On(m)
					? (l.set(x, m.deferredData),
					  (o[x] = m.deferredData.data),
					  m.statusCode != null &&
							m.statusCode !== 200 &&
							!c &&
							(u = m.statusCode),
					  m.headers && (f[x] = m.headers))
					: ((o[x] = m.data),
					  m.statusCode && m.statusCode !== 200 && !c && (u = m.statusCode),
					  m.headers && (f[x] = m.headers));
		}),
		d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
		{ loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: f }
	);
}
function ud(e, t, n, r, l, i, o, a) {
	let { loaderData: u, errors: c } = _0(t, n, r, l, a, !1);
	for (let f = 0; f < i.length; f++) {
		let { key: d, match: m, controller: j } = i[f];
		Q(
			o !== void 0 && o[f] !== void 0,
			'Did not find corresponding fetcher result'
		);
		let x = o[f];
		if (!(j && j.signal.aborted))
			if (it(x)) {
				let S = dr(e.matches, m == null ? void 0 : m.route.id);
				(c && c[S.route.id]) || (c = ge({}, c, { [S.route.id]: x.error })),
					e.fetchers.delete(d);
			} else if (In(x)) Q(!1, 'Unhandled fetcher revalidation redirect');
			else if (On(x)) Q(!1, 'Unhandled fetcher deferred data');
			else {
				let S = ln(x.data);
				e.fetchers.set(d, S);
			}
	}
	return { loaderData: u, errors: c };
}
function cd(e, t, n, r) {
	let l = ge({}, t);
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
function dd(e) {
	return e
		? it(e[1])
			? { actionData: {} }
			: { actionData: { [e[0]]: e[1].data } }
		: {};
}
function dr(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function fd(e) {
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
function Qe(e, t) {
	let {
			pathname: n,
			routeId: r,
			method: l,
			type: i,
			message: o,
		} = t === void 0 ? {} : t,
		a = 'Unknown Server Error',
		u = 'Unknown @remix-run/router error';
	return (
		e === 400
			? ((a = 'Bad Request'),
			  i === 'route-discovery'
					? (u =
							'Unable to match URL "' +
							n +
							'" - the `unstable_patchRoutesOnMiss()` ' +
							(`function threw the following error:
` +
								o))
					: l && n && r
					? (u =
							'You made a ' +
							l +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: i === 'defer-action'
					? (u = 'defer() is not supported in actions')
					: i === 'invalid-body' && (u = 'Unable to encode submission body'))
			: e === 403
			? ((a = 'Forbidden'),
			  (u = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((a = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((a = 'Method Not Allowed'),
			  l && n && r
					? (u =
							'You made a ' +
							l.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' + r + '", ') +
							'so there is no way to handle the request.')
					: l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
		new Wi(e || 500, a, new Error(u), !0)
	);
}
function pd(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (In(n)) return { result: n, idx: t };
	}
}
function ph(e) {
	let t = typeof e == 'string' ? Jt(e) : e;
	return Vn(ge({}, t, { hash: '' }));
}
function N0(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ''
		? t.hash !== ''
		: e.hash === t.hash
		? !0
		: t.hash !== '';
}
function k0(e) {
	return typeof e == 'object' && e != null && 'then' in e;
}
function R0(e) {
	return hh(e.result) && d0.has(e.result.status);
}
function On(e) {
	return e.type === ae.deferred;
}
function it(e) {
	return e.type === ae.error;
}
function In(e) {
	return (e && e.type) === ae.redirect;
}
function hd(e) {
	return (
		typeof e == 'object' &&
		e != null &&
		'type' in e &&
		'data' in e &&
		'init' in e &&
		e.type === 'DataWithResponseInit'
	);
}
function P0(e) {
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
function hh(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.headers == 'object' &&
		typeof e.body < 'u'
	);
}
function T0(e) {
	return c0.has(e.toLowerCase());
}
function jt(e) {
	return s0.has(e.toLowerCase());
}
async function md(e, t, n, r, l, i) {
	for (let o = 0; o < n.length; o++) {
		let a = n[o],
			u = t[o];
		if (!u) continue;
		let c = e.find((d) => d.route.id === u.route.id),
			f = c != null && !dh(c, u) && (i && i[u.route.id]) !== void 0;
		if (On(a) && (l || f)) {
			let d = r[o];
			Q(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
				await mh(a, d, l).then((m) => {
					m && (n[o] = m || n[o]);
				});
		}
	}
}
async function mh(e, t, n) {
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
function Jr(e, t) {
	let n = typeof t == 'string' ? Jt(t).search : t.search;
	if (e[e.length - 1].route.index && Nu(n || '')) return e[e.length - 1];
	let r = sh(e);
	return r[r.length - 1];
}
function vd(e) {
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
function L0(e, t) {
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
function Qr(e, t) {
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
function M0(e, t) {
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
function ln(e) {
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
function D0(e, t) {
	try {
		let n = e.sessionStorage.getItem(ch);
		if (n) {
			let r = JSON.parse(n);
			for (let [l, i] of Object.entries(r || {}))
				i && Array.isArray(i) && t.set(l, new Set(i || []));
		}
	} catch {}
}
function O0(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, l] of t) n[r] = [...l];
		try {
			e.sessionStorage.setItem(ch, JSON.stringify(n));
		} catch (r) {
			Nr(
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
 */ function kl() {
	return (
		(kl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		kl.apply(this, arguments)
	);
}
const Ol = y.createContext(null),
	ku = y.createContext(null),
	Zt = y.createContext(null),
	$o = y.createContext(null),
	zt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	vh = y.createContext(null);
function I0(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	Lr() || Q(!1);
	let { basename: r, navigator: l } = y.useContext(Zt),
		{ hash: i, pathname: o, search: a } = Ao(e, { relative: n }),
		u = o;
	return (
		r !== '/' && (u = o === '/' ? r : Wt([r, o])),
		l.createHref({ pathname: u, search: a, hash: i })
	);
}
function Lr() {
	return y.useContext($o) != null;
}
function Mr() {
	return Lr() || Q(!1), y.useContext($o).location;
}
function gh(e) {
	y.useContext(Zt).static || y.useLayoutEffect(e);
}
function Rt() {
	let { isDataRoute: e } = y.useContext(zt);
	return e ? Y0() : z0();
}
function z0() {
	Lr() || Q(!1);
	let e = y.useContext(Ol),
		{ basename: t, future: n, navigator: r } = y.useContext(Zt),
		{ matches: l } = y.useContext(zt),
		{ pathname: i } = Mr(),
		o = JSON.stringify(Io(l, n.v7_relativeSplatPath)),
		a = y.useRef(!1);
	return (
		gh(() => {
			a.current = !0;
		}),
		y.useCallback(
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
const F0 = y.createContext(null);
function $0(e) {
	let t = y.useContext(zt).outlet;
	return t && y.createElement(F0.Provider, { value: e }, t);
}
function Dr() {
	let { matches: e } = y.useContext(zt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Ao(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = y.useContext(Zt),
		{ matches: l } = y.useContext(zt),
		{ pathname: i } = Mr(),
		o = JSON.stringify(Io(l, r.v7_relativeSplatPath));
	return y.useMemo(() => zo(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function A0(e, t, n, r) {
	Lr() || Q(!1);
	let { navigator: l } = y.useContext(Zt),
		{ matches: i } = y.useContext(zt),
		o = i[i.length - 1],
		a = o ? o.params : {};
	o && o.pathname;
	let u = o ? o.pathnameBase : '/';
	o && o.route;
	let c = Mr(),
		f;
	if (t) {
		var d;
		let N = typeof t == 'string' ? Jt(t) : t;
		u === '/' || ((d = N.pathname) != null && d.startsWith(u)) || Q(!1),
			(f = N);
	} else f = c;
	let m = f.pathname || '/',
		j = m;
	if (u !== '/') {
		let N = u.replace(/^\//, '').split('/');
		j = '/' + m.replace(/^\//, '').split('/').slice(N.length).join('/');
	}
	let x = Tn(e, { pathname: j }),
		S = H0(
			x &&
				x.map((N) =>
					Object.assign({}, N, {
						params: Object.assign({}, a, N.params),
						pathname: Wt([
							u,
							l.encodeLocation
								? l.encodeLocation(N.pathname).pathname
								: N.pathname,
						]),
						pathnameBase:
							N.pathnameBase === '/'
								? u
								: Wt([
										u,
										l.encodeLocation
											? l.encodeLocation(N.pathnameBase).pathname
											: N.pathnameBase,
								  ]),
					})
				),
			i,
			n,
			r
		);
	return t && S
		? y.createElement(
				$o.Provider,
				{
					value: {
						location: kl(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							f
						),
						navigationType: Ce.Pop,
					},
				},
				S
		  )
		: S;
}
function U0() {
	let e = G0(),
		t = Fo(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		i = null;
	return y.createElement(
		y.Fragment,
		null,
		y.createElement('h2', null, 'Unexpected Application Error!'),
		y.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? y.createElement('pre', { style: l }, n) : null,
		i
	);
}
const b0 = y.createElement(U0, null);
class B0 extends y.Component {
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
			? y.createElement(
					zt.Provider,
					{ value: this.props.routeContext },
					y.createElement(vh.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function V0(e) {
	let { routeContext: t, match: n, children: r } = e,
		l = y.useContext(Ol);
	return (
		l &&
			l.static &&
			l.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(l.staticContext._deepestRenderedBoundaryId = n.route.id),
		y.createElement(zt.Provider, { value: t }, r)
	);
}
function H0(e, t, n, r) {
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
		f >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
	}
	let u = !1,
		c = -1;
	if (n && r && r.v7_partialHydration)
		for (let f = 0; f < o.length; f++) {
			let d = o[f];
			if (
				((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = f),
				d.route.id)
			) {
				let { loaderData: m, errors: j } = n,
					x =
						d.route.loader &&
						m[d.route.id] === void 0 &&
						(!j || j[d.route.id] === void 0);
				if (d.route.lazy || x) {
					(u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
					break;
				}
			}
		}
	return o.reduceRight((f, d, m) => {
		let j,
			x = !1,
			S = null,
			N = null;
		n &&
			((j = a && d.route.id ? a[d.route.id] : void 0),
			(S = d.route.errorElement || b0),
			u &&
				(c < 0 && m === 0
					? (X0('route-fallback', !1), (x = !0), (N = null))
					: c === m &&
					  ((x = !0), (N = d.route.hydrateFallbackElement || null))));
		let h = t.concat(o.slice(0, m + 1)),
			p = () => {
				let v;
				return (
					j
						? (v = S)
						: x
						? (v = N)
						: d.route.Component
						? (v = y.createElement(d.route.Component, null))
						: d.route.element
						? (v = d.route.element)
						: (v = f),
					y.createElement(V0, {
						match: d,
						routeContext: { outlet: f, matches: h, isDataRoute: n != null },
						children: v,
					})
				);
			};
		return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
			? y.createElement(B0, {
					location: n.location,
					revalidation: n.revalidation,
					component: S,
					error: j,
					children: p(),
					routeContext: { outlet: null, matches: h, isDataRoute: !0 },
			  })
			: p();
	}, null);
}
var yh = (function (e) {
		return (
			(e.UseBlocker = 'useBlocker'),
			(e.UseRevalidator = 'useRevalidator'),
			(e.UseNavigateStable = 'useNavigate'),
			e
		);
	})(yh || {}),
	Qi = (function (e) {
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
	})(Qi || {});
function W0(e) {
	let t = y.useContext(Ol);
	return t || Q(!1), t;
}
function Q0(e) {
	let t = y.useContext(ku);
	return t || Q(!1), t;
}
function K0(e) {
	let t = y.useContext(zt);
	return t || Q(!1), t;
}
function wh(e) {
	let t = K0(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || Q(!1), n.route.id;
}
function G0() {
	var e;
	let t = y.useContext(vh),
		n = Q0(Qi.UseRouteError),
		r = wh(Qi.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Y0() {
	let { router: e } = W0(yh.UseNavigateStable),
		t = wh(Qi.UseNavigateStable),
		n = y.useRef(!1);
	return (
		gh(() => {
			n.current = !0;
		}),
		y.useCallback(
			function (l, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof l == 'number'
							? e.navigate(l)
							: e.navigate(l, kl({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
const gd = {};
function X0(e, t, n) {
	!t && !gd[e] && (gd[e] = !0);
}
function xh(e) {
	let { to: t, replace: n, state: r, relative: l } = e;
	Lr() || Q(!1);
	let { future: i, static: o } = y.useContext(Zt),
		{ matches: a } = y.useContext(zt),
		{ pathname: u } = Mr(),
		c = Rt(),
		f = zo(t, Io(a, i.v7_relativeSplatPath), u, l === 'path'),
		d = JSON.stringify(f);
	return (
		y.useEffect(
			() => c(JSON.parse(d), { replace: n, state: r, relative: l }),
			[c, d, l, n, r]
		),
		null
	);
}
function q0(e) {
	return $0(e.context);
}
function J0(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: l = Ce.Pop,
		navigator: i,
		static: o = !1,
		future: a,
	} = e;
	Lr() && Q(!1);
	let u = t.replace(/^\/*/, '/'),
		c = y.useMemo(
			() => ({
				basename: u,
				navigator: i,
				static: o,
				future: kl({ v7_relativeSplatPath: !1 }, a),
			}),
			[u, a, i, o]
		);
	typeof r == 'string' && (r = Jt(r));
	let {
			pathname: f = '/',
			search: d = '',
			hash: m = '',
			state: j = null,
			key: x = 'default',
		} = r,
		S = y.useMemo(() => {
			let N = Xt(f, u);
			return N == null
				? null
				: {
						location: { pathname: N, search: d, hash: m, state: j, key: x },
						navigationType: l,
				  };
		}, [u, f, d, m, j, x, l]);
	return S == null
		? null
		: y.createElement(
				Zt.Provider,
				{ value: c },
				y.createElement($o.Provider, { children: n, value: S })
		  );
}
new Promise(() => {});
function Z0(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: y.createElement(e.Component),
				Component: void 0,
			}),
		e.HydrateFallback &&
			Object.assign(t, {
				hydrateFallbackElement: y.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: y.createElement(e.ErrorBoundary),
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
 */ function kr() {
	return (
		(kr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		kr.apply(this, arguments)
	);
}
function Sh(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		i;
	for (i = 0; i < r.length; i++)
		(l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function e1(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function t1(e, t) {
	return e.button === 0 && (!t || t === '_self') && !e1(e);
}
const n1 = [
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
	r1 = [
		'aria-current',
		'caseSensitive',
		'className',
		'end',
		'style',
		'to',
		'unstable_viewTransition',
		'children',
	],
	l1 = '6';
try {
	window.__reactRouterVersion = l1;
} catch {}
function i1(e, t) {
	return m0({
		basename: t == null ? void 0 : t.basename,
		future: kr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
		history: Ay({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || o1(),
		routes: e,
		mapRouteProperties: Z0,
		unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
		unstable_patchRoutesOnMiss:
			t == null ? void 0 : t.unstable_patchRoutesOnMiss,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function o1() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = kr({}, t, { errors: a1(t.errors) })), t;
}
function a1(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, l] of t)
		if (l && l.__type === 'RouteErrorResponse')
			n[r] = new Wi(l.status, l.statusText, l.data, l.internal === !0);
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
const Eh = y.createContext({ isTransitioning: !1 }),
	s1 = y.createContext(new Map()),
	u1 = 'startTransition',
	yd = $m[u1],
	c1 = 'flushSync',
	wd = Gg[c1];
function d1(e) {
	yd ? yd(e) : e();
}
function Kr(e) {
	wd ? wd(e) : e();
}
class f1 {
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
function p1(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[l, i] = y.useState(n.state),
		[o, a] = y.useState(),
		[u, c] = y.useState({ isTransitioning: !1 }),
		[f, d] = y.useState(),
		[m, j] = y.useState(),
		[x, S] = y.useState(),
		N = y.useRef(new Map()),
		{ v7_startTransition: h } = r || {},
		p = y.useCallback(
			(T) => {
				h ? d1(T) : T();
			},
			[h]
		),
		v = y.useCallback(
			(T, M) => {
				let {
					deletedFetchers: O,
					unstable_flushSync: Y,
					unstable_viewTransitionOpts: le,
				} = M;
				O.forEach((A) => N.current.delete(A)),
					T.fetchers.forEach((A, de) => {
						A.data !== void 0 && N.current.set(de, A.data);
					});
				let $ =
					n.window == null ||
					n.window.document == null ||
					typeof n.window.document.startViewTransition != 'function';
				if (!le || $) {
					Y ? Kr(() => i(T)) : p(() => i(T));
					return;
				}
				if (Y) {
					Kr(() => {
						m && (f && f.resolve(), m.skipTransition()),
							c({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: le.currentLocation,
								nextLocation: le.nextLocation,
							});
					});
					let A = n.window.document.startViewTransition(() => {
						Kr(() => i(T));
					});
					A.finished.finally(() => {
						Kr(() => {
							d(void 0), j(void 0), a(void 0), c({ isTransitioning: !1 });
						});
					}),
						Kr(() => j(A));
					return;
				}
				m
					? (f && f.resolve(),
					  m.skipTransition(),
					  S({
							state: T,
							currentLocation: le.currentLocation,
							nextLocation: le.nextLocation,
					  }))
					: (a(T),
					  c({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: le.currentLocation,
							nextLocation: le.nextLocation,
					  }));
			},
			[n.window, m, f, N, p]
		);
	y.useLayoutEffect(() => n.subscribe(v), [n, v]),
		y.useEffect(() => {
			u.isTransitioning && !u.flushSync && d(new f1());
		}, [u]),
		y.useEffect(() => {
			if (f && o && n.window) {
				let T = o,
					M = f.promise,
					O = n.window.document.startViewTransition(async () => {
						p(() => i(T)), await M;
					});
				O.finished.finally(() => {
					d(void 0), j(void 0), a(void 0), c({ isTransitioning: !1 });
				}),
					j(O);
			}
		}, [p, o, f, n.window]),
		y.useEffect(() => {
			f && o && l.location.key === o.location.key && f.resolve();
		}, [f, m, l.location, o]),
		y.useEffect(() => {
			!u.isTransitioning &&
				x &&
				(a(x.state),
				c({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: x.currentLocation,
					nextLocation: x.nextLocation,
				}),
				S(void 0));
		}, [u.isTransitioning, x]),
		y.useEffect(() => {}, []);
	let C = y.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (T) => n.navigate(T),
				push: (T, M, O) =>
					n.navigate(T, {
						state: M,
						preventScrollReset: O == null ? void 0 : O.preventScrollReset,
					}),
				replace: (T, M, O) =>
					n.navigate(T, {
						replace: !0,
						state: M,
						preventScrollReset: O == null ? void 0 : O.preventScrollReset,
					}),
			}),
			[n]
		),
		P = n.basename || '/',
		w = y.useMemo(
			() => ({ router: n, navigator: C, static: !1, basename: P }),
			[n, C, P]
		),
		R = y.useMemo(
			() => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
			[n.future.v7_relativeSplatPath]
		);
	return y.createElement(
		y.Fragment,
		null,
		y.createElement(
			Ol.Provider,
			{ value: w },
			y.createElement(
				ku.Provider,
				{ value: l },
				y.createElement(
					s1.Provider,
					{ value: N.current },
					y.createElement(
						Eh.Provider,
						{ value: u },
						y.createElement(
							J0,
							{
								basename: P,
								location: l.location,
								navigationType: l.historyAction,
								navigator: C,
								future: R,
							},
							l.initialized || n.future.v7_partialHydration
								? y.createElement(h1, {
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
const h1 = y.memo(m1);
function m1(e) {
	let { routes: t, future: n, state: r } = e;
	return A0(t, void 0, r, n);
}
const v1 =
		typeof window < 'u' &&
		typeof window.document < 'u' &&
		typeof window.document.createElement < 'u',
	g1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	y1 = y.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: l,
				reloadDocument: i,
				replace: o,
				state: a,
				target: u,
				to: c,
				preventScrollReset: f,
				unstable_viewTransition: d,
			} = t,
			m = Sh(t, n1),
			{ basename: j } = y.useContext(Zt),
			x,
			S = !1;
		if (typeof c == 'string' && g1.test(c) && ((x = c), v1))
			try {
				let v = new URL(window.location.href),
					C = c.startsWith('//') ? new URL(v.protocol + c) : new URL(c),
					P = Xt(C.pathname, j);
				C.origin === v.origin && P != null
					? (c = P + C.search + C.hash)
					: (S = !0);
			} catch {}
		let N = I0(c, { relative: l }),
			h = S1(c, {
				replace: o,
				state: a,
				target: u,
				preventScrollReset: f,
				relative: l,
				unstable_viewTransition: d,
			});
		function p(v) {
			r && r(v), v.defaultPrevented || h(v);
		}
		return y.createElement(
			'a',
			kr({}, m, { href: x || N, onClick: S || i ? r : p, ref: n, target: u })
		);
	}),
	w1 = y.forwardRef(function (t, n) {
		let {
				'aria-current': r = 'page',
				caseSensitive: l = !1,
				className: i = '',
				end: o = !1,
				style: a,
				to: u,
				unstable_viewTransition: c,
				children: f,
			} = t,
			d = Sh(t, r1),
			m = Ao(u, { relative: d.relative }),
			j = Mr(),
			x = y.useContext(ku),
			{ navigator: S, basename: N } = y.useContext(Zt),
			h = x != null && E1(m) && c === !0,
			p = S.encodeLocation ? S.encodeLocation(m).pathname : m.pathname,
			v = j.pathname,
			C =
				x && x.navigation && x.navigation.location
					? x.navigation.location.pathname
					: null;
		l ||
			((v = v.toLowerCase()),
			(C = C ? C.toLowerCase() : null),
			(p = p.toLowerCase())),
			C && N && (C = Xt(C, N) || C);
		const P = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length;
		let w = v === p || (!o && v.startsWith(p) && v.charAt(P) === '/'),
			R =
				C != null &&
				(C === p || (!o && C.startsWith(p) && C.charAt(p.length) === '/')),
			T = { isActive: w, isPending: R, isTransitioning: h },
			M = w ? r : void 0,
			O;
		typeof i == 'function'
			? (O = i(T))
			: (O = [
					i,
					w ? 'active' : null,
					R ? 'pending' : null,
					h ? 'transitioning' : null,
			  ]
					.filter(Boolean)
					.join(' '));
		let Y = typeof a == 'function' ? a(T) : a;
		return y.createElement(
			y1,
			kr({}, d, {
				'aria-current': M,
				className: O,
				ref: n,
				style: Y,
				to: u,
				unstable_viewTransition: c,
			}),
			typeof f == 'function' ? f(T) : f
		);
	});
var js;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState');
})(js || (js = {}));
var xd;
(function (e) {
	(e.UseFetcher = 'useFetcher'),
		(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(xd || (xd = {}));
function x1(e) {
	let t = y.useContext(Ol);
	return t || Q(!1), t;
}
function S1(e, t) {
	let {
			target: n,
			replace: r,
			state: l,
			preventScrollReset: i,
			relative: o,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		u = Rt(),
		c = Mr(),
		f = Ao(e, { relative: o });
	return y.useCallback(
		(d) => {
			if (t1(d, n)) {
				d.preventDefault();
				let m = r !== void 0 ? r : Vn(c) === Vn(f);
				u(e, {
					replace: m,
					state: l,
					preventScrollReset: i,
					relative: o,
					unstable_viewTransition: a,
				});
			}
		},
		[c, u, f, r, l, n, e, i, o, a]
	);
}
function E1(e, t) {
	t === void 0 && (t = {});
	let n = y.useContext(Eh);
	n == null && Q(!1);
	let { basename: r } = x1(js.useViewTransitionState),
		l = Ao(e, { relative: t.relative });
	if (!n.isTransitioning) return !1;
	let i = Xt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		o = Xt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return Hi(l.pathname, o) != null || Hi(l.pathname, i) != null;
}
function Rl(e) {
	'@babel/helpers - typeof';
	return (
		(Rl =
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
		Rl(e)
	);
}
function j1(e, t) {
	if (Rl(e) !== 'object' || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || 'default');
		if (Rl(r) !== 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
function C1(e) {
	var t = j1(e, 'string');
	return Rl(t) === 'symbol' ? t : String(t);
}
function _1(e, t, n) {
	return (
		(t = C1(t)),
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
function Sd(e, t) {
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
function Ed(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Sd(Object(n), !0).forEach(function (r) {
					_1(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Sd(Object(n)).forEach(function (r) {
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
var jd = (function () {
		return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
	})(),
	Ca = function () {
		return Math.random().toString(36).substring(7).split('').join('.');
	},
	Ki = {
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
function jh(e, t, n) {
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
		return n(jh)(e, t);
	}
	if (typeof e != 'function') throw new Error(Ue(2));
	var l = e,
		i = t,
		o = [],
		a = o,
		u = !1;
	function c() {
		a === o && (a = o.slice());
	}
	function f() {
		if (u) throw new Error(Ue(3));
		return i;
	}
	function d(S) {
		if (typeof S != 'function') throw new Error(Ue(4));
		if (u) throw new Error(Ue(5));
		var N = !0;
		return (
			c(),
			a.push(S),
			function () {
				if (N) {
					if (u) throw new Error(Ue(6));
					(N = !1), c();
					var p = a.indexOf(S);
					a.splice(p, 1), (o = null);
				}
			}
		);
	}
	function m(S) {
		if (!N1(S)) throw new Error(Ue(7));
		if (typeof S.type > 'u') throw new Error(Ue(8));
		if (u) throw new Error(Ue(9));
		try {
			(u = !0), (i = l(i, S));
		} finally {
			u = !1;
		}
		for (var N = (o = a), h = 0; h < N.length; h++) {
			var p = N[h];
			p();
		}
		return S;
	}
	function j(S) {
		if (typeof S != 'function') throw new Error(Ue(10));
		(l = S), m({ type: Ki.REPLACE });
	}
	function x() {
		var S,
			N = d;
		return (
			(S = {
				subscribe: function (p) {
					if (typeof p != 'object' || p === null) throw new Error(Ue(11));
					function v() {
						p.next && p.next(f());
					}
					v();
					var C = N(v);
					return { unsubscribe: C };
				},
			}),
			(S[jd] = function () {
				return this;
			}),
			S
		);
	}
	return (
		m({ type: Ki.INIT }),
		(r = { dispatch: m, subscribe: d, getState: f, replaceReducer: j }),
		(r[jd] = x),
		r
	);
}
var k1 = jh;
function R1(e) {
	Object.keys(e).forEach(function (t) {
		var n = e[t],
			r = n(void 0, { type: Ki.INIT });
		if (typeof r > 'u') throw new Error(Ue(12));
		if (typeof n(void 0, { type: Ki.PROBE_UNKNOWN_ACTION() }) > 'u')
			throw new Error(Ue(13));
	});
}
function P1(e) {
	for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
		var l = t[r];
		typeof e[l] == 'function' && (n[l] = e[l]);
	}
	var i = Object.keys(n),
		o;
	try {
		R1(n);
	} catch (a) {
		o = a;
	}
	return function (u, c) {
		if ((u === void 0 && (u = {}), o)) throw o;
		for (var f = !1, d = {}, m = 0; m < i.length; m++) {
			var j = i[m],
				x = n[j],
				S = u[j],
				N = x(S, c);
			if (typeof N > 'u') throw (c && c.type, new Error(Ue(14)));
			(d[j] = N), (f = f || N !== S);
		}
		return (f = f || i.length !== Object.keys(u).length), f ? d : u;
	};
}
function T1() {
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
function L1() {
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
				a = t.map(function (u) {
					return u(o);
				});
			return (
				(i = T1.apply(void 0, a)(l.dispatch)),
				Ed(Ed({}, l), {}, { dispatch: i })
			);
		};
	};
}
function Ch(e) {
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
var _h = Ch();
_h.withExtraArgument = Ch;
const M1 = _h,
	Nh = 'session/setUser',
	kh = 'session/removeUser',
	Ru = (e) => ({ type: Nh, payload: e }),
	D1 = () => ({ type: kh }),
	O1 = () => async (e) => {
		const t = await fetch('/api/auth/');
		if (t.ok) {
			const n = await t.json();
			if (n.errors) return;
			e(Ru(n));
		}
	},
	Cs = (e) => async (t) => {
		const n = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e),
		});
		if (n.ok) {
			const r = await n.json();
			t(Ru(r));
		} else
			return n.status < 500
				? await n.json()
				: { server: 'Something went wrong. Please try again' };
	},
	Rh = (e) => async (t) => {
		try {
			const n = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(e),
			});
			if (n.ok) {
				const r = await n.json();
				return t(Ru(r)), {};
			} else return await n.json();
		} catch {
			return { error: 'Something went wrong. Please try again' };
		}
	},
	I1 = () => async (e) => {
		await fetch('/api/auth/logout'), e(D1());
	},
	z1 = { user: null };
function F1(e = z1, t) {
	switch (t.type) {
		case Nh:
			return { ...e, user: t.payload };
		case kh:
			return { ...e, user: null };
		default:
			return e;
	}
}
const Ph = 'menuItems/GET_MENU_ITEMS',
	Th = 'menuItems/ADD_MENU_ITEMS',
	Lh = 'menuItems/DELETE_MENU_ITEM',
	$1 = 'menuItems/GET_EVERY_ITEM',
	A1 = (e) => ({ type: Ph, payload: e }),
	U1 = (e) => ({ type: Th, payload: e }),
	b1 = (e) => ({ type: Lh, payload: e }),
	B1 = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}/menu-items`);
		if (n.ok) {
			const r = await n.json();
			t(A1(r));
		}
	},
	V1 = (e, t) => async (n) => {
		try {
			const r = await fetch(`/api/restaurants/${e}/menu-items/new`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(t),
			});
			if (r.ok) {
				const l = await r.json();
				n(U1(l));
			} else {
				const l = await r.json();
				console.error('Error adding menu item:', l);
			}
		} catch (r) {
			console.error('Failed to add menu item:', r);
		}
	},
	H1 = (e) => async (t) => {
		try {
			const n = await fetch(`/api/menu-items/${e}`, { method: 'DELETE' });
			if (n.ok) console.log('Delete successful:', e), t(b1(e));
			else {
				const r = await n.json();
				console.error('Error deleting menu item:', r);
			}
		} catch (n) {
			console.error('Failed to delete menu item:', n);
		}
	}; //!---------------------------------- INITIAL STATE
const W1 = { itemArr: [], allArr: [] }; //!---------------------------------- REDUCER
const Q1 = (e = W1, t) => {
		switch (t.type) {
			case $1:
				return { ...e, allArr: t.payload };
			case Ph:
				return { ...e, itemArr: t.payload };
			case Th:
				return { ...e, itemArr: [...e.itemArr, t.payload] };
			case Lh:
				return { ...e, itemArr: e.itemArr.filter((n) => n.id !== t.payload) };
			default:
				return e;
		}
	},
	K1 = 'shoppingCart/GET_CART_ITEMS',
	Mh = 'cart/REMOVE_CART_ITEM',
	Dh = 'cart/ADD_CART_ITEM',
	Oh = 'cart/CLEAR_CART_ITEMS',
	G1 = 'cart/RESET_CART',
	Y1 = (e) => ({ type: Mh, payload: e }),
	Ih = (e) => ({ type: Dh, payload: e }),
	zh = () => ({ type: Oh });
function X1(e, t, n = 2) {
	const r = new Date();
	r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
	const l = `expires=${r.toUTCString()}`;
	document.cookie = `${e}=${encodeURIComponent(t)};${l};path=/`;
}
function q1(e) {
	const t = `${e}=`,
		n = document.cookie.split(';');
	for (let r = 0; r < n.length; r++) {
		let l = n[r].trim();
		if (l.indexOf(t) === 0)
			return decodeURIComponent(l.substring(t.length, l.length));
	}
	return null;
}
const J1 = { items: JSON.parse(q1('DashDineCart') || '[]') },
	Z1 = (e = J1, t) => {
		let n;
		switch (t.type) {
			case K1:
				n = { ...e, items: t.payload };
				break;
			case Mh:
				n = { ...e, items: e.items.filter((r) => r.id !== t.payload) };
				break;
			case Dh:
				{
					if (
						(console.log('Payload received in reducer:', t.payload),
						!t.payload || !t.payload.id)
					)
						return console.error('Invalid payload:', t.payload), e;
					e.items.find((l) => l.menu_item_id === t.payload.id)
						? (n = {
								...e,
								items: e.items.map((l) =>
									l.menu_item_id === t.payload.id
										? { ...l, item_quantity: l.item_quantity + 1 }
										: l
								),
						  })
						: (n = {
								...e,
								items: [
									...e.items,
									{
										...t.payload,
										item_quantity: 1,
										menu_item_id: t.payload.id,
									},
								],
						  });
				}
				break;
			case Oh:
				n = { ...e, items: [] };
				break;
			case G1:
				n = { ...e, items: [] };
				break;
			default:
				return e;
		}
		return X1('DashDineCart', JSON.stringify(n.items)), n;
	},
	Fh = '/restaurants/categories/GET_ALL_CATEGORIES',
	$h = '/restaurants/GET_RESTAURANTS',
	Ah = 'restaurants/GET_A_RESTAURANT',
	Uh = '/restaurants/ADD_OR_UPDATE_RESTAURANT',
	bh = '/restaurants/DELETE_RESTAURANT',
	Bh = 'restaurants/SET_SELECTED_CATEGORY';
function ew(e) {
	return { type: Fh, payload: e };
}
function tw(e) {
	return { type: $h, payload: e };
}
function nw(e) {
	return { type: Ah, payload: e };
}
function Vh(e) {
	return { type: Uh, payload: e };
}
function rw(e) {
	return { type: bh, payload: e };
}
const _a = (e) => ({ type: Bh, payload: e }),
	Hh = () => async (e) => {
		const t = await fetch('/api/restaurants/categories');
		if (t.ok) {
			const n = await t.json();
			return e(ew(n)), n;
		} else return 'Error';
	},
	Il = () => async (e) => {
		const t = await fetch('/api/restaurants');
		if (t.ok) {
			const n = await t.json();
			return e(tw(n)), n;
		} else return 'Error: No Restaurants';
	},
	lw = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}`);
		if (n.ok) {
			const r = await n.json();
			return t(nw(r)), r;
		} else return 'Error: No Restaurants';
	},
	iw = (e, t) => async (n) => {
		const u = await (
			await fetch('/api/restaurants/new', {
				method: e,
				headers: { 'Content-Type': 'application/json' },
				body: t,
			})
		).json();
		return n(Vh(u)), u;
	},
	ow = (e, t, n) => async (r) => {
		const l = `/api/restaurants/current/${e}`,
			c = await (
				await fetch(l, {
					method: t,
					headers: { 'Content-Type': 'application/json' },
					body: n,
				})
			).json();
		return console.log('>>> data from flask UPDATE route:', c), r(Vh(c)), c;
	},
	aw = (e) => async (t) => {
		const n = `/api/restaurants/${e}`,
			i = await fetch(n, { method: 'DELETE' });
		if (i.ok) t(rw(e));
		else return { message: 'Error deleting restaurant' };
		return await i.json();
	},
	sw = {
		allCategories: [],
		AllRestaurants: {},
		selectedRestaurant: {},
		selectedCategory: null,
	},
	uw = (e = sw, t) => {
		switch (t.type) {
			case Fh:
				return { ...e, allCategories: t.payload };
			case $h: {
				const n = { AllRestaurants: {} };
				return (
					t.payload.forEach((r) => {
						n.AllRestaurants[r.id] = r;
					}),
					{ ...e, ...n }
				);
			}
			case Ah:
				return { ...e, selectedRestaurant: t.payload };
			case Uh: {
				const n = { ...e },
					r = t.payload;
				return (n.AllRestaurants[r.id] = r), n;
			}
			case bh: {
				const n = { ...e },
					r = t.payload;
				return delete n.AllRestaurants[r], n;
			}
			case Bh:
				return { ...e, selectedCategory: t.payload };
			default:
				return e;
		}
	},
	Wh = '/reviews/GET_ALL_DB_REVIEWS',
	Qh = 'reviewsList/GET_ALL_REVIEWS',
	Kh = 'reviewsList/GET_REVIEW_SUMMARY',
	Gh = 'reviewsList/CREATE_REVIEW',
	Yh = 'reviewsList/DELETE_REVIEW',
	Xh = 'reviewsList/EDIT_REVIEW',
	qh = 'reviewsList/SINGLE_REVIEW',
	cw = (e) => ({ type: Wh, payload: e }),
	dw = (e) => ({ type: Qh, payload: e }),
	fw = (e) => ({ type: qh, payload: e }),
	pw = (e) => ({ type: Kh, payload: e }),
	hw = (e) => ({ type: Gh, payload: e }),
	mw = (e) => ({ type: Xh, payload: e }),
	vw = (e) => ({ type: Yh, payload: e }),
	Uo = () => async (e) => {
		const t = await fetch('/api/reviews');
		if (t.ok) {
			const n = await t.json();
			e(cw(n));
		}
	},
	Jh = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}/reviews`);
		if (n.ok) {
			const r = await n.json();
			t(dw(r));
		}
	},
	gw = (e) => async (t) => {
		const n = await fetch(`/api/reviews/${e}`);
		if (n.ok) {
			const r = await n.json();
			return t(fw(r)), r;
		} else
			throw (
				(console.error('Failed to fetch single review'),
				new Error('Failed to fetch review data'))
			);
	},
	bo = (e) => async (t) => {
		const n = await fetch(`/api/restaurants/${e}/totalreviews`);
		if (n.ok) {
			const r = await n.json();
			return t(pw(r)), r;
		}
	},
	yw = (e, t) => async (n) => {
		const r = await fetch(`/api/restaurants/${t}/reviews`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e),
		});
		if (r.ok) {
			const l = await r.json();
			return (
				n(hw(l)),
				console.log('>>>>>>>>>>>>>>>>>>>>>> data from FLASK route', l),
				l
			);
		}
	},
	ww = (e, t) => async (n) => {
		const r = await fetch(`/api/reviews/${t}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e),
		});
		if (r.ok) {
			const l = await r.json();
			return n(mw(l)), l;
		}
	},
	xw = (e) => async (t) => {
		(await fetch(`/api/reviews/${e}`, { method: 'DELETE' })).ok && t(vw(e));
	},
	Sw = {
		allReviews: [],
		reviewsListArr: [],
		singleReview: {},
		reviewSummary: {},
		createReview: {},
		editReview: {},
	},
	Ew = (e = Sw, t) => {
		switch (t.type) {
			case Wh:
				return { ...e, allReviews: t.payload };
			case Qh:
				return { ...e, reviewsListArr: t.payload };
			case qh:
				return { ...e, singleReview: t.payload };
			case Kh:
				return { ...e, reviewSummary: t.payload };
			case Gh:
				return { ...e, reviewsListArr: [...e.reviewsListArr, t.payload] };
			case Xh:
				return {
					...e,
					reviewsListArr: e.reviewsListArr.map((n) =>
						n.id === t.payload.id ? t.payload : n
					),
				};
			case Yh: {
				const n = { ...e };
				return delete e.allReviews.find((r) => r.id === t.payload), n;
			}
			default:
				return e;
		}
	},
	Zh = 'location/SAVE_LOCATION',
	jw = (e) => (console.log('INSIDE ACTION CREATOR'), { type: Zh, location: e }),
	Cw = { state: '', city: '' },
	_w = (e = Cw, t) => {
		switch (t.type) {
			case Zh:
				return (
					console.log('Reducer: Saving location', t.location),
					{ ...e, state: t.location.state, city: t.location.city }
				);
			default:
				return e;
		}
	},
	em = 'menuItemRating/GET_ALL_RATINGS',
	Nw = 'menuItemRating/ADD_RATING',
	kw = (e) => ({ type: em, payload: e }),
	Rw = (e) => async (t) => {
		const n = await fetch(`/api/menu-items/${e}/ratings`);
		if (n.ok) {
			const r = await n.json();
			t(kw(r));
		}
	},
	Pw = { getMenuItemRating: {}, createMenuItemRating: {} },
	Tw = (e = Pw, t) => {
		switch (t.type) {
			case em:
				return { ...e, getMenuItemRating: t.payload };
			case Nw:
				return { ...e, createMenuItemRating: t.payload };
			default:
				return e;
		}
	},
	Lw = P1({
		session: F1,
		restaurants: uw,
		menuItems: Q1,
		shoppingCart: Z1,
		reviewsList: Ew,
		location: _w,
		menuItemRating: Tw,
	});
let tm;
tm = L1(M1);
const Mw = (e) => k1(Lw, e, tm);
function Dw() {
	const e = Rt(),
		t = je(),
		n = ne((f) => f.session.user),
		[r, l] = y.useState(''),
		[i, o] = y.useState(''),
		[a, u] = y.useState({});
	if (n) return s.jsx(xh, { to: '/', replace: !0 });
	const c = async (f) => {
		f.preventDefault();
		const d = await t(Cs({ email: r, password: i }));
		d ? u(d) : e('/');
	};
	return s.jsxs(s.Fragment, {
		children: [
			s.jsx('h1', { children: 'Log In' }),
			a.length > 0 && a.map((f) => s.jsx('p', { children: f }, f)),
			s.jsxs('form', {
				onSubmit: c,
				children: [
					s.jsxs('label', {
						children: [
							'Email',
							s.jsx('input', {
								type: 'text',
								value: r,
								onChange: (f) => l(f.target.value),
								required: !0,
							}),
						],
					}),
					a.email && s.jsx('p', { children: a.email }),
					s.jsxs('label', {
						children: [
							'Password',
							s.jsx('input', {
								type: 'password',
								value: i,
								onChange: (f) => o(f.target.value),
								required: !0,
							}),
						],
					}),
					a.password && s.jsx('p', { children: a.password }),
					s.jsx('button', { type: 'submit', children: 'Log In' }),
				],
			}),
		],
	});
}
function Ow() {
	const e = je(),
		t = Rt(),
		n = ne((x) => x.session.user),
		[r, l] = y.useState(''),
		[i, o] = y.useState(''),
		[a, u] = y.useState(''),
		[c, f] = y.useState(''),
		[d, m] = y.useState({});
	if (n) return s.jsx(xh, { to: '/', replace: !0 });
	const j = async (x) => {
		if ((x.preventDefault(), a !== c))
			return m({
				confirmPassword:
					'Confirm Password field must be the same as the Password field',
			});
		const S = await e(Rh({ email: r, username: i, password: a }));
		S ? m(S) : t('/');
	};
	return s.jsxs(s.Fragment, {
		children: [
			s.jsx('h1', { children: 'Sign Up' }),
			d.server && s.jsx('p', { children: d.server }),
			s.jsxs('form', {
				onSubmit: j,
				children: [
					s.jsxs('label', {
						children: [
							'Email',
							s.jsx('input', {
								type: 'text',
								value: r,
								onChange: (x) => l(x.target.value),
								required: !0,
							}),
						],
					}),
					d.email && s.jsx('p', { children: d.email }),
					s.jsxs('label', {
						children: [
							'Username',
							s.jsx('input', {
								type: 'text',
								value: i,
								onChange: (x) => o(x.target.value),
								required: !0,
							}),
						],
					}),
					d.username && s.jsx('p', { children: d.username }),
					s.jsxs('label', {
						children: [
							'Password',
							s.jsx('input', {
								type: 'password',
								value: a,
								onChange: (x) => u(x.target.value),
								required: !0,
							}),
						],
					}),
					d.password && s.jsx('p', { children: d.password }),
					s.jsxs('label', {
						children: [
							'Confirm Password',
							s.jsx('input', {
								type: 'password',
								value: c,
								onChange: (x) => f(x.target.value),
								required: !0,
							}),
						],
					}),
					d.confirmPassword && s.jsx('p', { children: d.confirmPassword }),
					s.jsx('button', { type: 'submit', children: 'Sign Up' }),
				],
			}),
		],
	});
}
const Pu = y.createContext();
function Iw({ children: e }) {
	const t = y.useRef(),
		[n, r] = y.useState(null),
		[l, i] = y.useState(null),
		a = {
			modalRef: t,
			modalContent: n,
			setModalContent: r,
			setOnModalClose: i,
			closeModal: () => {
				r(null), typeof l == 'function' && (i(null), l());
			},
		};
	return s.jsxs(s.Fragment, {
		children: [
			s.jsx(Pu.Provider, { value: a, children: e }),
			s.jsx('div', { ref: t }),
		],
	});
}
function zw() {
	const { modalRef: e, modalContent: t, closeModal: n } = y.useContext(Pu);
	return !e || !e.current || !t
		? null
		: Qp.createPortal(
				s.jsxs('div', {
					id: 'modal',
					children: [
						s.jsx('div', { id: 'modal-background', onClick: n }),
						s.jsx('div', { id: 'modal-content', children: t }),
					],
				}),
				e.current
		  );
}
const qe = () => y.useContext(Pu);
var nm = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	Cd = Vt.createContext && Vt.createContext(nm),
	Fw = ['attr', 'size', 'title'];
function $w(e, t) {
	if (e == null) return {};
	var n = Aw(e, t),
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
function Aw(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		l,
		i;
	for (i = 0; i < r.length; i++)
		(l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
	return n;
}
function Gi() {
	return (
		(Gi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Gi.apply(this, arguments)
	);
}
function _d(e, t) {
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
function Yi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? _d(Object(n), !0).forEach(function (r) {
					Uw(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: _d(Object(n)).forEach(function (r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
			  });
	}
	return e;
}
function Uw(e, t, n) {
	return (
		(t = bw(t)),
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
function bw(e) {
	var t = Bw(e, 'string');
	return typeof t == 'symbol' ? t : String(t);
}
function Bw(e, t) {
	if (typeof e != 'object' || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || 'default');
		if (typeof r != 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
function rm(e) {
	return (
		e &&
		e.map((t, n) =>
			Vt.createElement(t.tag, Yi({ key: n }, t.attr), rm(t.child))
		)
	);
}
function Nn(e) {
	return (t) =>
		Vt.createElement(Vw, Gi({ attr: Yi({}, e.attr) }, t), rm(e.child));
}
function Vw(e) {
	var t = (n) => {
		var { attr: r, size: l, title: i } = e,
			o = $w(e, Fw),
			a = l || n.size || '1em',
			u;
		return (
			n.className && (u = n.className),
			e.className && (u = (u ? u + ' ' : '') + e.className),
			Vt.createElement(
				'svg',
				Gi(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					o,
					{
						className: u,
						style: Yi(Yi({ color: e.color || n.color }, n.style), e.style),
						height: a,
						width: a,
						xmlns: 'http://www.w3.org/2000/svg',
					}
				),
				i && Vt.createElement('title', null, i),
				e.children
			)
		);
	};
	return Cd !== void 0
		? Vt.createElement(Cd.Consumer, null, (n) => t(n))
		: t(nm);
}
function Na(e) {
	return Nn({
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
function ka(e) {
	return Nn({
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
function Hw(e) {
	return Nn({
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
function Ww(e) {
	return Nn({
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
	return Nn({
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
function Qw(e) {
	return Nn({
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
function Kw(e) {
	return Nn({
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
function Vo(e) {
	return Nn({
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
	const { setModalContent: l, setOnModalClose: i } = qe(),
		o = () => {
			r && i(r), l(e), typeof n == 'function' && n();
		};
	return s.jsx('li', { onClick: o, children: t });
}
function lm() {
	const e = je(),
		[t, n] = y.useState(''),
		[r, l] = y.useState(''),
		[i, o] = y.useState({}),
		{ closeModal: a } = qe(),
		u = async (f) => {
			f.preventDefault();
			const d = await e(Cs({ email: t, password: r }));
			d ? o(d) : a();
		},
		c = async (f) => {
			f.preventDefault();
			const d = await e(Cs({ email: 'demo@aa.io', password: 'password' }));
			d ? o(d) : a();
		};
	return s.jsxs(s.Fragment, {
		children: [
			s.jsx('h1', { className: 'login-title', children: 'Log In' }),
			s.jsxs('form', {
				className: 'login-form-modal',
				onSubmit: u,
				children: [
					s.jsxs('label', {
						className: 'login-label',
						children: [
							'Email',
							s.jsx('input', {
								className: 'login-input',
								type: 'text',
								value: t,
								onChange: (f) => n(f.target.value),
								required: !0,
							}),
						],
					}),
					i.email && s.jsx('p', { children: i.email }),
					s.jsxs('label', {
						className: 'login-label',
						children: [
							'Password',
							s.jsx('input', {
								className: 'login-input',
								type: 'password',
								value: r,
								onChange: (f) => l(f.target.value),
								required: !0,
							}),
						],
					}),
					i.password && s.jsx('p', { children: i.password }),
					s.jsx('button', {
						className: 'login-btn',
						type: 'submit',
						children: 'Log In',
					}),
					s.jsx('hr', {}),
					s.jsx('button', {
						className: 'login-btn',
						onClick: c,
						children: 'Log In Demo User',
					}),
				],
			}),
		],
	});
}
function Gw() {
	const e = je(),
		[t, n] = y.useState(''),
		[r, l] = y.useState(''),
		[i, o] = y.useState(''),
		[a, u] = y.useState(''),
		[c, f] = y.useState(''),
		[d, m] = y.useState(''),
		[j, x] = y.useState(''),
		[S, N] = y.useState(''),
		[h, p] = y.useState(''),
		[v, C] = y.useState(''),
		[P, w] = y.useState(''),
		[R, T] = y.useState({}),
		[M, O] = y.useState(!1),
		{ closeModal: Y } = qe();
	y.useEffect(() => {
		if (M) {
			const $ = {};
			t &&
				(t.length < 2 || t.length > 30) &&
				($.first_name = 'First name must be between 2 and 30 characters'),
				r &&
					(r.length < 2 || r.length > 30) &&
					($.last_name = 'Last name must be between 2 and 30 characters'),
				a &&
					(a.length < 6 || a.length > 20) &&
					($.username = 'Username must be between 6 and 20 characters'),
				h &&
					(h.length !== 2 || h !== h.toUpperCase()) &&
					($.state = 'State must be 2 characters and uppercase'),
				v && !/^\d{5}$/.test(v) && ($.zip = 'ZIP must be 5 digits'),
				P &&
					!/^\d{10}$/.test(P) &&
					($.phone_number = 'Phone number must be 10 digits'),
				t || ($.first_name = 'First Name is required'),
				r || ($.last_name = 'Last Name is required'),
				i || ($.email = 'Email is required'),
				a || ($.username = 'Username is required'),
				c || ($.password = 'Password is required'),
				d || ($.confirmPassword = 'Confirm Password is required'),
				j || ($.address = 'Address is required'),
				S || ($.city = 'City is required'),
				h || ($.state = 'State is required'),
				v || ($.zip = 'ZIP is required'),
				P || ($.phone_number = 'Phone Number is required'),
				T($);
		}
	}, [M, t, r, i, a, c, d, j, S, h, v, P]);
	const le = async ($) => {
		if (($.preventDefault(), O(!0), c !== d)) {
			T((Ve) => ({
				...Ve,
				confirmPassword:
					'Confirm Password field must be the same as the Password field',
			}));
			return;
		}
		T({});
		const de = await e(
			Rh({
				first_name: t,
				last_name: r,
				email: i,
				username: a,
				password: c,
				address: j,
				city: S,
				state: h,
				zip: v,
				phone_number: P,
			})
		);
		de.errors ? T(de.errors) : de.error ? T({ server: de.error }) : Y();
	};
	return s.jsxs('div', {
		className: 'signup',
		children: [
			s.jsx('h1', { className: 'signup-title', children: 'Sign Up' }),
			R.server && s.jsx('p', { children: R.server }),
			s.jsxs('form', {
				onSubmit: le,
				className: 'signup-form-modal',
				children: [
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'First Name',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: t,
								onChange: ($) => n($.target.value),
								required: !0,
							}),
							R.first_name && s.jsx('p', { children: R.first_name }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Username',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: a,
								onChange: ($) => u($.target.value),
								required: !0,
							}),
							R.username && s.jsx('p', { children: R.username }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Last Name',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: r,
								onChange: ($) => l($.target.value),
								required: !0,
							}),
							R.last_name && s.jsx('p', { children: R.last_name }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Password',
							s.jsx('input', {
								className: 'signup-input',
								type: 'password',
								value: c,
								onChange: ($) => f($.target.value),
								required: !0,
							}),
							R.password && s.jsx('p', { children: R.password }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Email',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: i,
								onChange: ($) => o($.target.value),
								required: !0,
							}),
							R.email && s.jsx('p', { children: R.email }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Confirm Password',
							s.jsx('input', {
								className: 'signup-input',
								type: 'password',
								value: d,
								onChange: ($) => m($.target.value),
								required: !0,
							}),
							R.confirmPassword && s.jsx('p', { children: R.confirmPassword }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Address',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: j,
								onChange: ($) => x($.target.value),
								required: !0,
							}),
							R.address && s.jsx('p', { children: R.address }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'City',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: S,
								onChange: ($) => N($.target.value),
								required: !0,
							}),
							R.city && s.jsx('p', { children: R.city }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'State',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: h,
								onChange: ($) => p($.target.value),
								required: !0,
							}),
							R.state && s.jsx('p', { children: R.state }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'ZIP',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: v,
								onChange: ($) => C($.target.value),
								required: !0,
							}),
							R.zip && s.jsx('p', { children: R.zip }),
						],
					}),
					s.jsxs('label', {
						className: 'signup-label',
						children: [
							'Phone Number',
							s.jsx('input', {
								className: 'signup-input',
								type: 'text',
								value: P,
								onChange: ($) => w($.target.value),
								required: !0,
							}),
							R.phone_number && s.jsx('p', { children: R.phone_number }),
						],
					}),
					s.jsx('button', { type: 'submit', children: 'Sign Up' }),
				],
			}),
		],
	});
}
function Yw() {
	const e = Rt(),
		t = je(),
		[n, r] = y.useState(!1),
		l = ne((f) => f.session.user),
		i = y.useRef(),
		o = (f) => {
			f.stopPropagation(), r(!n);
		};
	y.useEffect(() => {
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
		u = (f) => {
			f.preventDefault(), t(zh()), t(I1()), a();
		},
		c = () => {
			e('/restaurants/current');
		};
	return s.jsxs(s.Fragment, {
		children: [
			s.jsx('button', { onClick: o, children: s.jsx(Kw, {}) }),
			n &&
				s.jsx('ul', {
					className: 'profile-dropdown',
					ref: i,
					children: l
						? s.jsxs(s.Fragment, {
								children: [
									s.jsx('li', {
										className: 'profile-text',
										children: l.username,
									}),
									s.jsx('li', { className: 'profile-text', children: l.email }),
									s.jsx('li', {
										onClick: () => c(),
										children: s.jsx('button', {
											className: 'profile-text-btn',
											children: 'Your Restaurants',
										}),
									}),
									s.jsx('li', {
										children: s.jsx('button', {
											className: 'profile-text-btn',
											onClick: u,
											children: 'Log Out',
										}),
									}),
								],
						  })
						: s.jsxs(s.Fragment, {
								children: [
									s.jsx(Nd, {
										itemText: 'Log In',
										onItemClick: a,
										modalComponent: s.jsx(lm, {}),
									}),
									s.jsx(Nd, {
										itemText: 'Sign Up',
										onItemClick: a,
										modalComponent: s.jsx(Gw, {}),
									}),
								],
						  }),
				}),
		],
	});
}
const Xw = () => {
		const { closeModal: e } = qe();
		return s.jsxs('div', {
			className: 'thank-you-modal',
			children: [
				s.jsx('h2', { children: 'Thank You for Your Purchase!' }),
				s.jsx('p', { children: 'We appreciate your business.' }),
				s.jsx('button', { onClick: e, children: 'Close' }),
			],
		});
	},
	qw = () => {
		const e = je(),
			{ closeModal: t, setModalContent: n } = qe(),
			r = ne((c) => c.shoppingCart.items),
			l = ne((c) => c.session.user),
			i = r.reduce((c, f) => c + f.price * f.item_quantity, 0),
			o = (c) => {
				e(Ih(c));
			},
			a = (c) => {
				e(Y1(c));
			},
			u = () => {
				r.length === 0
					? alert(
							'Your cart is empty. Please add items to your cart before purchasing.'
					  )
					: (n(s.jsx(Xw, {})), e(zh()));
			};
		return s.jsxs('div', {
			className: 'shopping-cart-modal',
			children: [
				s.jsxs('div', {
					className: 'shop-header',
					children: [
						s.jsx('h2', { children: 'Your Shopping Cart' }),
						s.jsx('button', {
							className: 'close-shop-btn',
							onClick: t,
							children: 'x',
						}),
					],
				}),
				r.length > 0
					? s.jsxs(s.Fragment, {
							children: [
								s.jsxs('div', {
									children: [
										r.map((c) =>
											s.jsxs(
												'div',
												{
													className: 'cart-item',
													children: [
														s.jsxs('div', {
															className: 'cart-img-holder',
															children: [
																s.jsx('img', { src: c.image_url, alt: c.name }),
																s.jsxs('div', {
																	children: [
																		s.jsx('h3', { children: c.name }),
																		s.jsx('p', {
																			className: 'shop-desc',
																			children: c.description,
																		}),
																		s.jsxs('p', {
																			className: 'shop-price',
																			children: ['Price: $', c.price],
																		}),
																	],
																}),
															],
														}),
														s.jsxs('div', {
															className: 'cart-quantity',
															children: [
																s.jsxs('p', {
																	className: 'quantity',
																	children: ['Qty: ', c.item_quantity],
																}),
																' ',
																s.jsxs('div', {
																	className: 'quantity-btns',
																	children: [
																		s.jsx('button', {
																			className: 'shop-add-btn',
																			onClick: () => o(c),
																			children: '+',
																		}),
																		s.jsx('button', {
																			className: 'shop-delete-btn',
																			onClick: () => a(c.id),
																			children: 'Delete',
																		}),
																	],
																}),
															],
														}),
													],
												},
												c.id
											)
										),
										s.jsx('hr', {}),
									],
								}),
								s.jsxs('div', {
									className: 'total-price',
									children: [
										s.jsxs('h3', { children: ['Total: $', i.toFixed(2)] }),
										' ',
									],
								}),
							],
					  })
					: s.jsx('p', { children: 'Your cart is empty.' }),
				l &&
					r.length > 0 &&
					s.jsx('button', {
						className: 'shop-purchase-btn',
						onClick: u,
						children: 'Purchase',
					}),
			],
		});
	},
	Jw = () => {
		const { setModalContent: e, setOnModalClose: t } = qe(),
			n = () => {
				e(s.jsx(qw, {})),
					t(() => () => console.log('Shopping Cart Modal Closed'));
			};
		return s.jsx('button', { onClick: n, children: s.jsx(Hw, {}) });
	};
function Zw() {
	return s.jsxs('nav', {
		className: 'navbar',
		children: [
			s.jsx(w1, { className: 'logo', to: '/', children: 'DashDine' }),
			s.jsxs('div', {
				className: 'nav-btn-holder',
				children: [s.jsx(Yw, {}), s.jsx(Jw, {})],
			}),
		],
	});
}
const ex = () =>
	s.jsx('div', {
		className: 'footer-component',
		children: s.jsxs('div', {
			className: 'footer-info-wrapper',
			children: [
				s.jsx('div', {
					className: 'footer-info-section',
					children: s.jsxs('ul', {
						className: 'footer-ul',
						children: [
							s.jsx('li', {
								children: s.jsxs('a', {
									href: 'https://github.com/dvidale',
									children: ["DeAndre's Github ", s.jsx(Na, {})],
								}),
							}),
							s.jsx('li', {
								children: s.jsxs('a', {
									href: 'https://www.linkedin.com/in/deandrevidale',
									children: ["DeAndre's Github ", s.jsx(ka, {})],
								}),
							}),
						],
					}),
				}),
				s.jsx('div', {
					className: 'footer-info-section',
					children: s.jsxs('ul', {
						className: 'footer-ul',
						children: [
							s.jsx('li', {
								children: s.jsxs('a', {
									href: 'https://github.com/Haydengalyeanbiz',
									children: ["Hayden's Github ", s.jsx(Na, {})],
								}),
							}),
							s.jsx('li', {
								children: s.jsxs('a', {
									href: 'https://www.linkedin.com/in/hayden-galyean-42a518189/',
									children: ["Hayden's LinkedIn ", s.jsx(ka, {})],
								}),
							}),
						],
					}),
				}),
				s.jsx('div', {
					className: 'footer-info-section',
					children: s.jsxs('ul', {
						className: 'footer-ul',
						children: [
							s.jsx('li', {
								children: s.jsxs('a', {
									href: 'https://github.com/fullstackneil',
									children: ["Neil's Github ", s.jsx(Na, {})],
								}),
							}),
							s.jsx('li', {
								children: s.jsxs('a', {
									href: 'https://www.linkedin.com/in/neil-kang/',
									children: ["Neil's LinkedIn ", s.jsx(ka, {})],
								}),
							}),
						],
					}),
				}),
			],
		}),
	});
function tx() {
	const e = je(),
		[t, n] = y.useState(!1);
	return (
		y.useEffect(() => {
			e(O1()).then(() => n(!0));
		}, [e]),
		s.jsx('div', {
			className: 'layout',
			children: s.jsxs(Iw, {
				children: [
					s.jsx(Zw, {}),
					s.jsx('div', {
						className: 'container',
						children: t && s.jsx(q0, {}),
					}),
					s.jsx(ex, {}),
					s.jsx(zw, {}),
				],
			}),
		})
	);
}
const nx = ({ onConfirm: e }) => {
	const { closeModal: t } = qe(),
		n = (r) => {
			r.target === r.currentTarget && t();
		};
	return s.jsx('div', {
		className: 'delete-confirmation-modal',
		onClick: n,
		children: s.jsxs('div', {
			className: 'delete-confirmation-modal-content',
			children: [
				s.jsxs('div', {
					className: 'delete-confirmation-modal-header',
					children: [
						s.jsx('h2', { children: 'Confirm Deletion' }),
						s.jsx('button', {
							className: 'close-btn',
							onClick: t,
							children: '×',
						}),
					],
				}),
				s.jsx('div', {
					className: 'delete-confirmation-modal-body',
					children: s.jsx('p', {
						children: 'Are you sure you want to delete this item?',
					}),
				}),
				s.jsxs('div', {
					className: 'delete-confirmation-modal-footer',
					children: [
						s.jsx('button', {
							className: 'cancel-btn',
							onClick: t,
							children: 'Cancel',
						}),
						s.jsx('button', {
							className: 'confirm-btn',
							onClick: e,
							children: 'Confirm',
						}),
					],
				}),
			],
		}),
	});
};
const rx = () => {
	const { id: e } = Dr(),
		t = je(),
		{ closeModal: n } = qe(),
		[r, l] = y.useState(''),
		[i, o] = y.useState(''),
		[a, u] = y.useState(''),
		[c, f] = y.useState(''),
		[d, m] = y.useState(''),
		[j, x] = y.useState({}),
		S = () => {
			const h = {};
			return (
				r || (h.name = 'Name is required'),
				(!i || i <= 0 || !Number.isInteger(Number(i))) &&
					(h.price = 'Price must be a positive integer'),
				a || (h.description = 'Description is required'),
				c || (h.imageUrl = 'Image URL is required'),
				(!d || d <= 0 || !Number.isInteger(Number(d))) &&
					(h.quantity = 'Quantity must be a positive integer'),
				h
			);
		},
		N = (h) => {
			h.preventDefault();
			const p = S();
			if ((console.log('Validation Errors:', p), Object.keys(p).length === 0)) {
				const v = {
					name: r,
					like_percentage: 0,
					price: parseFloat(i),
					image_url: c,
					description: a,
					quantity: parseInt(d),
				};
				t(V1(e, v)).then(() => {
					n();
				});
			} else x(p);
		};
	return s.jsxs('form', {
		className: 'add-menu-item-form',
		onSubmit: N,
		children: [
			s.jsx('h2', { children: 'Add Menu Item' }),
			s.jsxs('label', {
				children: [
					'Name:',
					s.jsx('input', {
						type: 'text',
						value: r,
						onChange: (h) => l(h.target.value),
						placeholder: 'Double Cheese Burger, Pepperoni pizza...',
					}),
					j.name && s.jsx('p', { className: 'error', children: j.name }),
				],
			}),
			s.jsxs('label', {
				children: [
					'Price:',
					s.jsx('input', {
						type: 'number',
						value: i,
						onChange: (h) => o(h.target.value),
						placeholder: '10',
					}),
					j.price && s.jsx('p', { className: 'error', children: j.price }),
				],
			}),
			s.jsxs('label', {
				children: [
					'Description:',
					s.jsx('textarea', {
						value: a,
						onChange: (h) => u(h.target.value),
						placeholder: 'Describe your dish or item',
					}),
					j.description &&
						s.jsx('p', { className: 'error', children: j.description }),
				],
			}),
			s.jsxs('label', {
				children: [
					'Image URL:',
					s.jsx('input', {
						type: 'text',
						value: c,
						onChange: (h) => f(h.target.value),
						placeholder: 'https://exampleurl.com',
					}),
					j.imageUrl &&
						s.jsx('p', { className: 'error', children: j.imageUrl }),
				],
			}),
			s.jsxs('label', {
				children: [
					'Quantity:',
					s.jsx('input', {
						type: 'number',
						value: d,
						onChange: (h) => m(h.target.value),
						placeholder: '10',
					}),
					j.quantity &&
						s.jsx('p', { className: 'error', children: j.quantity }),
				],
			}),
			s.jsx('button', { type: 'submit', children: 'Add Menu Item' }),
		],
	});
};
const lx = () => {
	const { id: e } = Dr(),
		t = je(),
		{ setModalContent: n, closeModal: r } = qe(),
		l = ne((d) => d.menuItems.itemArr),
		i = ne((d) => d.session.user),
		o = ne((d) => d.restaurants.selectedRestaurant);
	y.useEffect(() => {
		t(lw(e)), t(B1(e));
	}, [t, e]);
	const a = i && i.id === o.owner_id,
		u = (d) => {
			i ? t(Ih(d)) : n(s.jsx(lm, {}));
		},
		c = (d) => {
			t(H1(d)), r();
		},
		f = (d) => {
			n(
				s.jsx(nx, {
					onConfirm: () => c(d),
					onCancel: () => console.log('Delete canceled'),
				})
			);
		};
	return s.jsxs('div', {
		className: 'menu-holder',
		children: [
			s.jsx('h2', { children: 'The Menu' }),
			a &&
				s.jsx('button', {
					className: 'add-menu-item-btn',
					onClick: () => n(s.jsx(rx, {})),
					children: 'Add Menu Item',
				}),
			s.jsx('div', {
				className: 'menu-items-wrapper',
				children: l.map((d) =>
					s.jsxs(
						'div',
						{
							className: 'menu-item-structure',
							children: [
								a &&
									s.jsx('button', {
										className: 'delete-menu-item-btn',
										onClick: () => f(d.id),
										children: 'Delete',
									}),
								s.jsxs('div', {
									className: 'menu-item-details',
									children: [
										s.jsxs('div', {
											children: [
												s.jsx('h3', {
													className: 'item-title',
													children: d.name,
												}),
												s.jsxs('p', {
													className: 'item-details',
													children: [
														s.jsx(Qw, {}),
														' ',
														d.like_percentage,
														'%',
													],
												}),
											],
										}),
										s.jsxs('div', {
											className: 'bottom-info',
											children: [
												s.jsx('p', {
													className: 'item-details description',
													children: d.description,
												}),
												s.jsxs('p', {
													className: 'item-details-price',
													children: ['Price: $', d.price],
												}),
											],
										}),
									],
								}),
								s.jsxs('div', {
									className: 'menu-item-img-holder',
									children: [
										s.jsx('img', {
											src: d.image_url,
											alt: 'food-item',
											className: 'menu-item-img',
										}),
										' ',
										!a &&
											s.jsx('button', {
												className: 'add-to-cart-btn',
												onClick: () => u(d),
												children: '+',
											}),
									],
								}),
							],
						},
						d.id
					)
				),
			}),
		],
	});
};
function ix({ restaurant: e }) {
	const t = {
		width: '100%',
		backgroundImage: `url(${e.banner_img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		position: 'relative',
	};
	return s.jsx('div', {
		id: 'header-container',
		children: s.jsxs('div', {
			className: 'banner-img-container',
			style: t,
			children: [s.jsx('div', { className: 'dark-overlay' }), ' '],
		}),
	});
}
const ox = () => {
	const e = je(),
		t = ne((c) => c.reviewsList.reviewSummary),
		n = ne((c) => c.restaurants.selectedRestaurant.id);
	console.log('this is the ID', n),
		y.useEffect(() => {
			n && (e(bo(n)), e(Jh(n)));
		}, [e, n, t.total_reviews]);
	const r = (c) => Math.round(c * 2) / 2,
		l = t && t.total_reviews > 0;
	let i = 0,
		o = 0,
		a = !1,
		u = 0;
	if (l) {
		const c = Number(t.average_rating) || 0;
		(i = r(c)),
			(o = Math.min(5, Math.floor(i))),
			(a = i % 1 !== 0),
			(u = Math.max(0, 5 - o - (a ? 1 : 0)));
	} else u = 5;
	return s.jsx(s.Fragment, {
		children: s.jsxs('div', {
			className: 'restaurant-page-header-review',
			children: [
				s.jsx('h2', { className: 'res-header-title', children: 'Reviews' }),
				s.jsx('div', {
					children: l
						? s.jsxs('div', {
								className: 'header-review-structure',
								children: [
									s.jsxs('div', {
										className: 'header-stars',
										children: [
											s.jsx('h3', {
												className: 'res-header-title',
												children:
													t.average_rating.toFixed(1) > 0
														? t.average_rating.toFixed(1)
														: 'New',
											}),
											s.jsxs('div', {
												children: [
													[...Array(o)].map((c, f) => s.jsx(Bo, {}, f)),
													a && s.jsx(Ww, {}),
													[...Array(u)].map((c, f) => s.jsx(Vo, {}, f)),
												],
											}),
										],
									}),
									s.jsxs('p', {
										className: 'res-header-title',
										children: [
											t.total_reviews,
											' ',
											t.total_reviews > 1 ? 'Reviews' : 'Review',
										],
									}),
								],
						  })
						: s.jsx(s.Fragment, { children: s.jsx('h3', { children: 'New' }) }),
				}),
			],
		}),
	});
};
const ax = ({ reviewId: e, restaurantId: t }) => {
	const { closeModal: n } = qe(),
		r = je(),
		l = () => {
			r(xw(e))
				.then(n)
				.then(() => r(Uo()))
				.then(() => r(bo(t)));
		};
	return s.jsxs('div', {
		className: 'delete-review-container',
		children: [
			s.jsx('h2', { className: 'header-title', children: 'Confirm Delete' }),
			s.jsx('p', {
				className: 'header-message',
				children: 'Are you sure you want to delete this review?',
			}),
			s.jsxs('div', {
				className: 'button-container',
				children: [
					s.jsx('button', {
						className: 'button-content',
						id: 'delete-review',
						onClick: l,
						children: 'Yes',
					}),
					s.jsx('button', {
						className: 'button-content',
						id: 'keep-review',
						onClick: n,
						children: 'No',
					}),
				],
			}),
		],
	});
};
const sx = ({ reviewId: e }) => {
	const t = je(),
		{ closeModal: n } = qe(),
		{ restaurantId: r } = Dr(),
		[l, i] = y.useState(0),
		[o, a] = y.useState({ rating: 0, comments: '' }),
		[u, c] = y.useState(0),
		[f, d] = y.useState(!0),
		[m, j] = y.useState(null);
	y.useEffect(() => {
		(async () => {
			try {
				const C = await t(gw(e));
				a({ rating: C.rating, comments: C.comments }), i(C.rating), d(!1);
			} catch (C) {
				console.error('Error fetching review:', C),
					j('Failed to load review data.'),
					d(!1);
			}
		})();
	}, [t, e]);
	const x = ({ target: { name: C, value: P } }) => a((w) => ({ ...w, [C]: P })),
		S = async (C) => {
			C.preventDefault();
			try {
				t(ww({ ...o, rating: l }, e)), n(), t(Uo(r));
			} catch (P) {
				console.error('Error updating review:', P),
					j('Failed to update review.');
			}
		},
		N = (C) => {
			c(C);
		},
		h = () => {
			c(0);
		},
		p = (C) => {
			i(C), a((P) => ({ ...P, rating: C }));
		},
		v = () =>
			[1, 2, 3, 4, 5].map((C) =>
				s.jsx(
					'div',
					{
						onMouseEnter: () => N(C),
						onMouseLeave: h,
						onClick: () => p(C),
						className: 'star',
						style: { cursor: 'pointer', display: 'inline-block' },
						children: C <= (u || l) ? s.jsx(Bo, {}) : s.jsx(Vo, {}),
					},
					C
				)
			);
	return s.jsx('div', {
		children: f
			? s.jsx('p', { children: 'Loading...' })
			: s.jsxs('form', {
					className: 'edit-review-container',
					onSubmit: S,
					children: [
						s.jsx('h2', {
							className: 'edit-review-title',
							children: 'How was your meal?',
						}),
						m && s.jsx('p', { className: 'error-message', children: m }),
						s.jsx('label', {
							className: 'edit-review-label',
							children: s.jsx('textarea', {
								name: 'comments',
								placeholder: 'Enter your comments',
								className: 'review-input',
								id: 'long-text-box',
								value: o.comments,
								onChange: x,
							}),
						}),
						s.jsx('label', {
							className: 'edit-review-label',
							children: s.jsx('div', {
								className: 'edit-rating-input',
								children: s.jsx('div', {
									className: 'edit-star-ratings-container',
									children: v(),
								}),
							}),
						}),
						s.jsx('button', {
							id: 'update-button',
							type: 'submit',
							disabled: !o.comments || o.rating < 1 || f,
							children: 'Update Your Review',
						}),
					],
			  }),
	});
};
const ux = ({ id: e }) => {
	const t = je(),
		{ closeModal: n } = qe(),
		[r, l] = y.useState(0),
		[i, o] = y.useState(0),
		[a, u] = y.useState(''),
		[c, f] = y.useState({});
	y.useEffect(() => {
		let N = {};
		r < 1 && (N.rating = "Stars can't be empty"), f(N);
	}, [r]);
	const d = (N) => {
			o(N);
		},
		m = () => {
			o(0);
		},
		j = (N) => {
			l(N);
		},
		x = () =>
			[1, 2, 3, 4, 5].map((N) =>
				s.jsx(
					'div',
					{
						onMouseEnter: () => d(N),
						onMouseLeave: m,
						onClick: () => j(N),
						className: 'star',
						style: { cursor: 'pointer', display: 'inline-block' },
						children: N <= (i || r) ? s.jsx(Bo, {}) : s.jsx(Vo, {}),
					},
					N
				)
			),
		S = async (N) => {
			if ((N.preventDefault(), Object.values(c).length > 0))
				alert('Please fix the errors you have');
			else {
				let h = parseInt(e);
				t(yw({ rating: r, comments: a }, h))
					.then(n)
					.then(() => t(Uo()))
					.then(() => t(bo(h))),
					l(0),
					u(''),
					f({});
			}
		};
	return s.jsxs('form', {
		className: 'review-form',
		onSubmit: S,
		children: [
			s.jsx('h2', {
				className: 'review-title',
				children: 'How was your meal?',
			}),
			s.jsx('label', {
				className: 'review-label',
				children: s.jsx('textarea', {
					placeholder: 'Leave your review here...',
					className: 'review-input long-text',
					value: a,
					onChange: (N) => u(N.target.value),
				}),
			}),
			s.jsx('label', {
				className: 'review-label',
				children: s.jsx('div', {
					className: 'rating-input',
					children: s.jsx('div', {
						className: 'star-ratings-container',
						children: x(),
					}),
				}),
			}),
			s.jsx('button', {
				id: 'submit-button',
				disabled: Object.values(c).length > 0,
				type: 'submit',
				children: 'Submit Your Review',
			}),
		],
	});
};
const im = ({ restaurant: e }) => {
	const t = je(),
		n = ne((a) => a.reviewsList.allReviews),
		r = ne((a) => a.session.user),
		{ setModalContent: l } = qe();
	y.useEffect(() => {
		t(Uo());
	}, [t]);
	const i = (a) => {
			const u = [];
			for (let c = 1; c <= 5; c++)
				c <= a ? u.push(s.jsx(Bo, {}, c)) : u.push(s.jsx(Vo, {}, c));
			return u;
		},
		o = n.filter((a) => a.restaurant_id === e.id);
	return s.jsxs('div', {
		className: 'review-list-wrapper',
		children: [
			s.jsx('h2', {
				className: 'review-list-header',
				children: 'Rating and Reviews',
			}),
			o.length === 0 &&
				s.jsxs(s.Fragment, {
					children: [
						s.jsx('p', { children: 'No reviews yet!' }),
						r &&
							e.owner_id !== r.id &&
							s.jsx(s.Fragment, {
								children: s.jsx('p', {
									children: 'Be the first to leave a review!',
								}),
							}),
					],
				}),
			r &&
				r.id !== e.owner_id &&
				s.jsx('button', {
					className: 'create-review-button',
					onClick: () => l(s.jsx(ux, { id: e.id })),
					children: 'Leave a Review',
				}),
			o.length > 0 &&
				s.jsx('div', {
					className: 'review-list-grid',
					children: o
						.sort((a, u) => new Date(u.created_at) - new Date(a.created_at))
						.map((a) =>
							s.jsxs(
								'div',
								{
									className: 'review-structure',
									children: [
										s.jsxs('h3', {
											className: 'review-info-text',
											children: [a.user_first_name, ' ', a.user_last_name],
										}),
										s.jsx('p', {
											className: 'review-info-text',
											children: a.created_at,
										}),
										s.jsx('div', {
											className: 'review-stars',
											children: i(a.rating),
										}),
										s.jsx('p', {
											className: 'review-info-text',
											children: a.comments,
										}),
										(r == null ? void 0 : r.id) === a.user_id &&
											s.jsxs(s.Fragment, {
												children: [
													s.jsx('button', {
														className: 'delete-button',
														onClick: () =>
															l(
																s.jsx(ax, {
																	reviewId: a.id,
																	restaurantId: e.id,
																})
															),
														children: 'Delete',
													}),
													s.jsx('button', {
														className: 'update-button',
														onClick: () => l(s.jsx(sx, { reviewId: a.id })),
														children: ' Edit',
													}),
												],
											}),
									],
								},
								a.id
							)
						),
				}),
		],
	});
};
function cx({ restaurant: e, city: t, state: n }) {
	const l = +e.close_time.split(':')[0] - 12;
	return s.jsxs('div', {
		className: 'restaurant-info',
		children: [
			s.jsx('div', {
				className: 'delivery-fee',
				children: s.jsxs('h3', {
					className: 'delivery-fee-text',
					children: [
						'$',
						e.delivery_fee,
						' delivery fee ',
						e.delivery_time,
						' min',
					],
				}),
			}),
			s.jsx('div', {
				className: 'res-address',
				children: s.jsxs('h3', {
					className: 'delivery-fee-text-p',
					children: [e.address, ' ', t && n ? `${t}, ${n}` : ''],
				}),
			}),
			s.jsxs('div', {
				className: 'res-schedule',
				children: [
					s.jsx('h3', {
						className: 'delivery-fee-text-p',
						children: 'Sun - Sat',
					}),
					s.jsx('br', {}),
					s.jsxs('h3', {
						className: 'delivery-fee-text-p',
						children: ['Open: ', e.open_time],
					}),
					s.jsx('br', {}),
					s.jsxs('h3', {
						className: 'delivery-fee-text-p',
						children: ['Close: ', l, ':00'],
					}),
				],
			}),
		],
	});
}
function dx({ restaurant: e, city: t, state: n }) {
	return s.jsxs('div', {
		className: 'header-text',
		children: [
			s.jsx('h1', { className: 'header-h1-title', children: e.name }),
			s.jsxs('div', {
				children: [
					s.jsxs('p', {
						children: [
							e.categories.join(' • '),
							s.jsx('br', {}),
							e.address,
							s.jsx('br', {}),
							t && n ? `${t}, ${n}` : '',
						],
					}),
					s.jsx('p', { className: 'rest-page-desc', children: e.description }),
				],
			}),
		],
	});
}
const fx = () => {
	const { id: e } = Dr(),
		t = je(),
		n = Rt(),
		r = ne((u) => u.session.user),
		l = ne((u) => u.location),
		i = ne((u) => u.restaurants.AllRestaurants[e]),
		o = (r == null ? void 0 : r.city) || l.city,
		a = (r == null ? void 0 : r.state) || l.state;
	return (
		y.useEffect(() => {
			t(Il()), t(bo(e));
		}, [t, e]),
		s.jsx(s.Fragment, {
			children: i
				? s.jsxs('div', {
						className: 'res-page-structure',
						children: [
							r &&
								r.id === i.owner_id &&
								s.jsx('div', {
									className: 'res-management-button-container',
									children: s.jsx('button', {
										id: 'res-page-delete-button',
										className: 'res-page-man-btn',
										onClick: () => n('/restaurants/current'),
										children: 'Manage Your Restaurant',
									}),
								}),
							s.jsx(ix, { restaurant: i }),
							s.jsxs('div', {
								className: 'res-page-info-structure',
								children: [
									s.jsx('div', {
										className: 'rest-info-box',
										children: s.jsx(dx, { restaurant: i, city: o, state: a }),
									}),
									s.jsx('div', {
										className: 'rest-review-box',
										children: s.jsx(ox, { restaurantId: e }),
									}),
									s.jsx('div', {
										className: 'rest-delivery-box',
										children: s.jsx(cx, { restaurant: i, city: o, state: a }),
									}),
								],
							}),
							s.jsx(lx, {}),
							s.jsx(im, { restaurant: i }),
						],
				  })
				: s.jsx('p', { children: 'Loading...' }),
		})
	);
};
function kd() {
	const e = je(),
		t = ne((l) => l.restaurants.allCategories),
		n = ne((l) => l.restaurants.selectedCategory);
	y.useEffect(() => {
		e(Hh());
	}, [e]);
	const r = (l) => {
		n === l.categ_name ? e(_a(null)) : e(_a(l.categ_name));
	};
	return s.jsxs('div', {
		className: 'category-section',
		children: [
			s.jsx('h2', {
				className: 'category-title',
				children: 'Explore by Category',
			}),
			t &&
				t.length > 0 &&
				s.jsxs('div', {
					className: 'category-wrapper',
					children: [
						t.map((l) =>
							s.jsxs(
								'div',
								{
									className: `category-structure ${
										n === l.categ_name ? 'selected' : ''
									}`,
									onClick: () => r(l),
									children: [
										s.jsx('div', {
											className: 'categ-image-div',
											children: s.jsx('img', {
												className: 'categ-image',
												alt: l.categ_name,
												src: l.img_url,
											}),
										}),
										s.jsx('p', {
											className: 'cat-text',
											children: l.categ_name,
										}),
									],
								},
								l.id
							)
						),
						s.jsx('div', {
							className: `category-structure ${n ? '' : 'selected'}`,
							onClick: () => e(_a(null)),
							children: s.jsx('p', {
								className: 'cat-text',
								children: 'All Categories',
							}),
						}),
					],
				}),
		],
	});
}
function Rd({ city: e, state: t }) {
	const n = je(),
		r = Rt(),
		l = ne((a) => a.restaurants.AllRestaurants),
		i = ne((a) => a.restaurants.selectedCategory);
	y.useEffect(() => {
		n(Il());
	}, [n]);
	let o = Object.values(l);
	return (
		i && (o = o.filter((a) => a.categories.includes(i))),
		s.jsx('div', {
			className: 'restaurant-list',
			children: o.map((a) =>
				s.jsxs(
					'div',
					{
						onClick: () => r(`/restaurants/${a.id}`),
						className: 'restaurant-tile-shape',
						children: [
							s.jsx('div', {
								className: 'restaurant-image-div',
								children: s.jsx('img', {
									src: a.banner_img,
									alt: a.name,
									className: 'restaurant-image',
								}),
							}),
							s.jsxs('div', {
								className: 'restaurant-info-text',
								children: [
									s.jsx('h2', { children: a.name }),
									s.jsx('p', {
										children:
											a.average_rating.toFixed(1) > 0
												? a.average_rating.toFixed(1)
												: 'New',
									}),
									s.jsx('p', { children: a.categories.join(' • ') }),
									s.jsx('p', {
										className: 'all-rest-page-desc',
										children: a.description,
									}),
									(e && t) || (a.city && a.state)
										? s.jsxs('p', {
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
						],
					},
					a.id
				)
			),
		})
	);
}
function px({ city: e }) {
	return s.jsxs('div', {
		className: 'header-box',
		children: [
			s.jsxs('h1', {
				children: [
					' Food Delivery',
					e && s.jsxs('h1', { children: ['in ', e] }),
				],
			}),
			s.jsxs('div', {
				children: [
					s.jsxs('p', {
						children: [
							'Have your favorite food ',
							e && s.jsxs('span', { children: ['in ', e, ' '] }),
							'delivered to your door with DashDine. Whether you want to order breakfast, lunch, dinner, or a snack.',
						],
					}),
					s.jsx('br', {}),
					s.jsxs('p', {
						children: [
							'Find more restaurants nearby',
							e && s.jsxs('span', { children: [' in ', e, ' '] }),
							'.',
						],
					}),
				],
			}),
		],
	});
}
function hx() {
	const e = je(),
		[t, n] = y.useState(''),
		[r, l] = y.useState(''),
		i = (o) => {
			o.preventDefault(), e(jw({ city: t, state: r }));
		};
	return s.jsxs('form', {
		onSubmit: i,
		className: 'location-form-body',
		children: [
			s.jsx('h2', {
				className: 'location-text',
				children: 'Enter your location',
			}),
			s.jsxs('div', {
				className: 'location-form-inputs',
				children: [
					s.jsxs('label', {
						className: 'location-text',
						children: [
							'City:',
							s.jsx('input', {
								type: 'text',
								value: t,
								onChange: (o) => n(o.target.value),
								placeholder: 'Enter your city',
								required: !0,
							}),
						],
					}),
					s.jsxs('label', {
						className: 'location-text',
						children: [
							'State:',
							s.jsx('input', {
								type: 'text',
								value: r,
								onChange: (o) => l(o.target.value),
								placeholder: 'Enter your state',
								required: !0,
							}),
						],
					}),
					s.jsx('button', {
						className: 'loaction-form-btn',
						type: 'submit',
						children: 'Submit',
					}),
				],
			}),
		],
	});
}
function mx() {
	const e = ne((l) => l.session.user),
		t = ne((l) => l.location),
		n = (e == null ? void 0 : e.city) || t.city,
		r = (e == null ? void 0 : e.state) || t.state;
	return s.jsx('div', {
		className: 'home-page',
		children:
			n && r
				? s.jsxs(s.Fragment, {
						children: [
							s.jsx(px, { city: n, state: r }),
							s.jsxs('div', {
								children: [
									s.jsx(kd, {}),
									s.jsx('hr', {}),
									s.jsx(Rd, { city: n, state: r }),
								],
							}),
						],
				  })
				: s.jsxs(s.Fragment, {
						children: [
							s.jsx(hx, {}),
							s.jsx(kd, {}),
							s.jsx('hr', {}),
							s.jsx(Rd, {}),
						],
				  }),
	});
}
const vx = () => {
	const e = je(),
		{ id: t } = Dr(),
		n = ne((r) => r.menuItemRating.getMenuItemRating);
	return (
		y.useEffect(() => {
			e(Rw(t));
		}, [e, t]),
		n
			? s.jsxs(s.Fragment, {
					children: [
						s.jsxs('div', {
							children: [
								'Percentage of Liked Votes: ',
								n.percentage_of_liked_votes,
								'%',
							],
						}),
						s.jsxs('div', {
							children: ['Number of Votes: ', n.number_of_votes],
						}),
					],
			  })
			: s.jsx('div', { children: 'Loading...' })
	);
};
function Pd() {
	const { id: e } = Dr(),
		t = je(),
		n = Rt(),
		r = ne((A) => A.restaurants.AllRestaurants[e]),
		l = r ? 'PUT' : 'POST',
		[i, o] = y.useState(''),
		[a, u] = y.useState(''),
		[c, f] = y.useState(''),
		[d, m] = y.useState(''),
		[j, x] = y.useState([]),
		[S, N] = y.useState('10:00'),
		[h, p] = y.useState('22:00'),
		[v, C] = y.useState('10-25'),
		[P, w] = y.useState('0.99'),
		[R, T] = y.useState('https://'),
		[M, O] = y.useState({});
	y.useEffect(() => {
		r &&
			(o(r.name),
			u(r.address),
			f(r.phone_number),
			m(r.description),
			x(r.categories),
			N(r.open_time),
			p(r.close_time),
			C(r.delivery_time),
			w(r.delivery_fee),
			T(r.banner_img));
	}, [r]),
		y.useEffect(() => {
			O({});
		}, [i, a, c, d, j, R]),
		y.useEffect(() => {
			t(Hh()), t(Il());
		}, [t]);
	const Y = ne((A) => A.restaurants.allCategories),
		le = ne((A) => A.session.user),
		$ = (A) => {
			A.preventDefault();
			const de = {};
			if (
				(i.length < 2 && (de.name = 'Name must have at least two characters'),
				a.length < 4 &&
					(de.address = 'Street address must be at least 4 characters'),
				/^\d{10}$/.test(c) ||
					(de.phone_number = 'Phone number must be 10 digits'),
				d.length < 20 &&
					(de.description = 'Description must be at least 20 characters'),
				j.length === 0 && (de.categories = 'At least 1 category is required'),
				R.length > 0 &&
					!(R.endsWith('jpeg') || R.endsWith('jpg') || R.endsWith('png')) &&
					(de.banner_img = 'Image URL must end in .png, .jpg, or .jpeg'),
				O(de),
				Object.keys(de).length === 0)
			) {
				const Ve = {
					owner_id: le.id,
					name: i,
					address: a,
					phone_number: c,
					description: d,
					categories: j,
					open_time: S,
					close_time: h,
					delivery_time: v,
					delivery_fee: P,
					banner_img: R,
				};
				if (r) {
					const ie = r.id;
					t(ow(ie, l, JSON.stringify(Ve))), n(`/restaurants/${r.id}`);
				} else t(iw(l, JSON.stringify(Ve))), n('/restaurants/current');
			}
		};
	return s.jsx(s.Fragment, {
		children: s.jsxs('div', {
			id: 'form-container',
			children: [
				s.jsxs('div', {
					children: [
						' ',
						s.jsx('button', {
							id: 'back-to-res-portal-btn',
							className: 'res-page-man-btn',
							onClick: () => n('/restaurants/current'),
							children: ' Back to Management Portal ',
						}),
						' ',
					],
				}),
				s.jsx('h1', {
					children: r ? 'Update a Restaurant' : 'Submit a New Restaurant',
				}),
				s.jsxs('form', {
					onSubmit: $,
					children: [
						s.jsx('div', {
							children: s.jsxs('label', {
								htmlFor: 'name',
								children: [
									' ',
									s.jsx('h3', { children: 'Name' }),
									s.jsx('input', {
										className: 'text-field',
										type: 'text',
										id: 'name',
										name: 'name',
										placeholder: 'Name',
										value: i,
										onChange: (A) => o(A.target.value),
									}),
									M.name &&
										s.jsx('p', { className: 'errors', children: M.name }),
								],
							}),
						}),
						s.jsx('div', {
							children: s.jsxs('label', {
								htmlFor: 'address',
								children: [
									' ',
									s.jsx('h3', { children: 'Street Address' }),
									s.jsx('input', {
										className: 'text-field',
										type: 'text',
										id: 'address',
										name: 'address',
										placeholder: 'Address',
										value: a,
										onChange: (A) => u(A.target.value),
									}),
									M.address &&
										s.jsx('p', { className: 'errors', children: M.address }),
								],
							}),
						}),
						s.jsxs('div', {
							children: [
								s.jsxs('label', {
									htmlFor: 'phone',
									children: [
										' ',
										s.jsx('h3', { children: 'Phone' }),
										s.jsx('input', {
											className: 'half-size-text-field',
											type: 'text',
											inputMode: 'numeric',
											id: 'phone_number',
											name: 'phone_number',
											value: c,
											placeholder: 'Phone',
											maxLength: 10,
											onChange: (A) => f(A.target.value),
										}),
										'Ex. 1234567890',
									],
								}),
								M.phone_number &&
									s.jsx('p', { className: 'errors', children: M.phone_number }),
							],
						}),
						s.jsxs('div', {
							children: [
								s.jsxs('label', {
									htmlFor: 'description',
									children: [
										' ',
										s.jsx('h3', { children: 'Description' }),
										s.jsx('textarea', {
											id: 'description',
											name: 'description',
											maxLength: 70,
											value: d,
											placeholder: 'Description',
											onChange: (A) => m(A.target.value),
										}),
									],
								}),
								M.description &&
									s.jsx('p', { className: 'errors', children: M.description }),
							],
						}),
						s.jsx('div', {
							children: s.jsxs('label', {
								htmlFor: 'categories',
								children: [
									s.jsxs('div', {
										children: [
											s.jsx('h2', { children: 'Categories  ' }),
											' ',
											M.categories &&
												s.jsx('p', {
													className: 'errors',
													children: M.categories,
												}),
											s.jsx('h3', {
												children: '( ⊞/⌘ + Click  to select multiple) ',
											}),
										],
									}),
									s.jsx('select', {
										name: 'categories',
										value: j,
										multiple: !0,
										onChange: (A) => {
											const Ve = [...A.target.selectedOptions].map(
												(ie) => ie.value
											);
											x(Ve);
										},
										children: Y.map((A) =>
											s.jsx(s.Fragment, {
												children: s.jsx(
													'option',
													{
														id: A.categ_name,
														name: A.categ_name,
														value: A.categ_name,
														children: A.categ_name,
													},
													A.id
												),
											})
										),
									}),
								],
							}),
						}),
						s.jsx('div', {
							children: s.jsx('h2', {
								className: 'hours-heading',
								children: 'Hours  ',
							}),
						}),
						s.jsx('h3', { children: ' Sunday - Saturday  ' }),
						s.jsxs('div', {
							className: 'time-fields',
							children: [
								s.jsx('label', {
									htmlFor: 'open_time',
									children: s.jsx('input', {
										type: 'time',
										min: '00:00',
										max: '12:00',
										id: 'open_time',
										name: 'open_time',
										value: S,
										onChange: (A) => N(A.target.value),
									}),
								}),
								s.jsx('label', {
									htmlFor: 'close_time',
									children: s.jsx('input', {
										type: 'time',
										min: '12:00',
										max: '24:00',
										id: 'close_time',
										name: 'close_time',
										value: h,
										onChange: (A) => p(A.target.value),
									}),
								}),
							],
						}),
						s.jsxs('div', {
							className: 'delivery-time',
							children: [
								s.jsxs('label', {
									htmlFor: 'delivery_time',
									children: [s.jsx('h3', { children: 'Delivery Time' }), '  '],
								}),
								s.jsxs('select', {
									name: 'delivery_fee',
									id: 'delivery_fee',
									value: v,
									onChange: (A) => C(A.target.value),
									children: [
										s.jsx('option', { value: '10-25', children: '10 - 25' }),
										s.jsx('option', { value: '25-45', children: '25 - 45' }),
										s.jsx('option', { value: '45-60', children: '45 - 60' }),
									],
								}),
								s.jsx('h3', { children: 'min  ' }),
							],
						}),
						s.jsxs('div', {
							className: 'delivery-time',
							children: [
								s.jsxs('label', {
									htmlFor: 'delivery_fee',
									children: [
										' ',
										s.jsx('h3', { children: 'Delivery Fee $  ' }),
									],
								}),
								s.jsxs('select', {
									name: 'delivery_fee',
									id: 'delivery_fee',
									value: P,
									onChange: (A) => w(A.target.value),
									children: [
										s.jsx('option', { value: 0.99, children: '0.99' }),
										s.jsx('option', { value: 1.99, children: '1.99' }),
										s.jsx('option', { value: 2.99, children: '2.99' }),
										s.jsx('option', { value: 3.99, children: '3.99' }),
										s.jsx('option', { value: 4.99, children: '4.99' }),
									],
								}),
							],
						}),
						s.jsxs('div', {
							className: 'banner-img-field',
							children: [
								s.jsxs('label', {
									htmlFor: 'banner_img',
									children: [
										' ',
										s.jsx('h3', {
											className: 'banner-img-heading',
											children: ' Banner Image URL ',
										}),
										s.jsx('input', {
											type: 'url',
											id: 'banner_img',
											name: 'banner_img',
											value: R,
											onChange: (A) => T(A.target.value),
										}),
									],
								}),
								M.banner_img &&
									s.jsx('p', { className: 'errors', children: M.banner_img }),
							],
						}),
						s.jsx('div', {
							className: 'res-form-submit-btn',
							children: s.jsxs('button', {
								className: 'res-page-man-btn',
								type: 'submit',
								disabled: Object.keys(M).length > 0,
								children: [r ? 'Update' : 'Submit', ' Your Restaurant'],
							}),
						}),
					],
				}),
			],
		}),
	});
}
function gx({ restaurantId: e }) {
	const { closeModal: t } = qe(),
		n = je(),
		r = Rt(),
		l = () => {
			n(aw(e))
				.then((i) => {
					alert(i.message);
				})
				.then(t)
				.then(() => r('/restaurants/current'))
				.then(() => n(Il()))
				.then((i) => n(Jh(i[0].id)));
		};
	return s.jsx(s.Fragment, {
		children: s.jsxs('div', {
			className: 'delete-restaurant-modal',
			children: [
				s.jsxs('h2', {
					children: [
						'Are you sure you want to',
						s.jsx('br', {}),
						' delete this restaurant?',
					],
				}),
				s.jsxs('div', {
					children: [
						s.jsx('button', {
							className: 'owner-delete-btn',
							onClick: l,
							children: 'Yes (Delete Restaurant)',
						}),
						s.jsx('button', {
							className: 'cancel-delete-btn',
							onClick: t,
							children: 'No (Cancel Delete)',
						}),
					],
				}),
			],
		}),
	});
}
function yx({ city: e, state: t }) {
	const n = je(),
		r = Rt(),
		{ setModalContent: l } = qe(),
		i = ne((c) => c.session.user);
	i || r('/');
	const o = ne((c) => c.restaurants.AllRestaurants);
	y.useEffect(() => {
		n(Il());
	}, [n]);
	const a = Object.values(o).filter((c) => c.owner_id === i.id),
		u = (c) => {
			l(s.jsx(gx, { restaurantId: c }));
		};
	return s.jsx('div', {
		className: 'owned-restaurant-list',
		children: a.map((c) =>
			s.jsxs(
				'div',
				{
					className: 'owned-restaurant-tile-shape',
					children: [
						s.jsx('div', {
							className: 'owned-restaurant-image-div',
							onClick: () => r(`/restaurants/${c.id}`),
							children: s.jsx('img', {
								src: c.banner_img,
								alt: c.name,
								className: 'owned-restaurant-image',
							}),
						}),
						s.jsxs('div', {
							className: 'owned-restaurant-info',
							onClick: () => r(`/restaurants/${c.id}`),
							children: [
								s.jsx('h2', { className: 'owner-rest-name', children: c.name }),
								s.jsx('p', {
									children:
										c.average_rating.toFixed(1) > 0
											? c.average_rating.toFixed(1)
											: 'New',
								}),
								s.jsx('p', { children: c.categories.join(' • ') }),
								s.jsx('p', {
									className: 'owned-rest-desc',
									children: c.description,
								}),
								(e && t) || (c.city && c.state)
									? s.jsxs('div', {
											className: 'restaurant-address',
											children: [
												c.address,
												', ',
												e || c.city,
												',',
												' ',
												t || c.state,
											],
									  })
									: null,
							],
						}),
						s.jsxs('div', {
							className: 'up-del-btn-holder',
							children: [
								s.jsx('button', {
									id: 'update-restaurant-button',
									className: 'create-update-btn',
									onClick: () => r(`/restaurants/current/${c.id}`),
									children: 'Update',
								}),
								s.jsx('button', {
									className: 'owner-delete-btn',
									onClick: () => u(c.id),
									children: 'Delete',
								}),
							],
						}),
					],
				},
				c.id
			)
		),
	});
}
function wx() {
	const e = Rt(),
		t = ne((o) => o.session.user),
		n = ne((o) => o.location),
		r = (t == null ? void 0 : t.city) || n.city,
		l = (t == null ? void 0 : t.state) || n.state,
		i = () => {
			e('/restaurants/new');
		};
	return s.jsxs('div', {
		className: 'rest-management-holder',
		children: [
			s.jsx('h1', {
				className: 'manage-title',
				children: 'Restaurant Management',
			}),
			s.jsx('button', {
				id: 'create-restaurant-button',
				className: 'create-update-btn',
				onClick: () => i(),
				children: 'Submit a New Restaurant',
			}),
			s.jsx(yx, { city: r, state: l }),
		],
	});
}
const xx = i1([
	{
		element: s.jsx(tx, {}),
		children: [
			{ path: '/', element: s.jsx(mx, {}) },
			{ path: '/login', element: s.jsx(Dw, {}) },
			{ path: '/signup', element: s.jsx(Ow, {}) },
			{ path: '/restaurants/:id', element: s.jsx(fx, {}) },
			{ path: '/restaurants/new', element: s.jsx(Pd, {}) },
			{ path: '/restaurants/current/:id', element: s.jsx(Pd, {}) },
			{ path: '/restaurants/:id/reviews', element: s.jsx(im, {}) },
			{ path: '/menu-items/:id/ratings', element: s.jsx(vx, {}) },
			{ path: '/restaurants/current', element: s.jsx(wx, {}) },
		],
	},
]);
const Sx = Mw();
Ra.createRoot(document.getElementById('root')).render(
	s.jsx(Vt.StrictMode, {
		children: s.jsx(zy, { store: Sx, children: s.jsx(p1, { router: xx }) }),
	})
);
