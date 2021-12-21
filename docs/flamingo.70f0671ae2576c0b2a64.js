/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 489:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js + 3 modules
var react_router_dom = __webpack_require__(879);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/components/Flamingo/Button/style.scss
var style = __webpack_require__(370);
;// CONCATENATED MODULE: ./src/components/Flamingo/Button/style.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const Button_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Flamingo/Button/index.js




var Button = function Button(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? '' : _ref$link,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$ghost = _ref.ghost,
      ghost = _ref$ghost === void 0 ? false : _ref$ghost,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Link, {
    to: link,
    className: !ghost ? small ? $.button_small : $.button : ''
  }, text || children);
};

/* harmony default export */ const Flamingo_Button = ((/* unused pure expression or super */ null && (Button)));

/***/ }),

/***/ 370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".apamkw9wjZU3Z8nOw8VF{background-color:transparent;border:2px solid var(--teal);border-radius:var(--radius);color:#fff;font-family:var(--family-accent);font-weight:600;padding:var(--padding);text-transform:uppercase;transition:var(--transition);transition-property:background-color,color}.apamkw9wjZU3Z8nOw8VF:hover{background-color:var(--teal);color:var(--grey)}.HVc_tp48j3m4CknveKnM{padding:var(--padding-small);text-transform:capitalize}", "",{"version":3,"sources":["webpack://./src/components/Flamingo/Button/style.scss"],"names":[],"mappings":"AAAA,sBAKC,4BAAA,CAJA,4BAAA,CASA,2BAAA,CANA,UAAA,CAIA,gCAAA,CACA,eAAA,CAPA,sBAAA,CACA,wBAAA,CAGA,4BAAA,CACA,0CAGA,CAEA,4BACC,4BAAA,CACA,iBAAA,CAIF,sBAEC,4BAAA,CACA,yBAAA","sourcesContent":[".button {\n\tborder: 2px solid var(--teal);\n\tpadding: var(--padding);\n\ttext-transform: uppercase;\n\tcolor: white;\n\tbackground-color: transparent;\n\ttransition: var(--transition);\n\ttransition-property: background-color, color;\n\tfont-family: var(--family-accent);\n\tfont-weight: 600;\n\tborder-radius: var(--radius);\n\n\t&:hover {\n\t\tbackground-color: var(--teal);\n\t\tcolor: var(--grey);\n\t}\n}\n\n.button_small {\n\tcomposes: button;\n\tpadding: var(--padding-small);\n\ttext-transform: capitalize;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button": "apamkw9wjZU3Z8nOw8VF",
	"button_small": "HVc_tp48j3m4CknveKnM apamkw9wjZU3Z8nOw8VF"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jKh9AgTg2ma5su_zbRIX{border:3px solid transparent;transition:var(--transition);transition-property:border-color}.jKh9AgTg2ma5su_zbRIX:hover{border-color:var(--teal)}.d7tal804h9Oe47guopsr{border-bottom:4px solid var(--white);transition:var(--transition);transition-property:background-color}.d7tal804h9Oe47guopsr *{transition:var(--transition);transition-property:color}.d7tal804h9Oe47guopsr:hover{background-color:var(--teal)}.d7tal804h9Oe47guopsr:hover *{color:var(--grey)}.s9NjTDCao6ZbhdMBv39L{background-position:50%;background-size:cover}", "",{"version":3,"sources":["webpack://./src/components/Flamingo/Column/style.scss"],"names":[],"mappings":"AAAA,sBAGC,4BAAA,CAFA,4BAAA,CACA,gCACA,CAEA,4BACC,wBAAA,CAIF,sBAGC,oCAAA,CAFA,4BAAA,CACA,oCACA,CAEA,wBACC,4BAAA,CACA,yBAAA,CAGD,4BACC,4BAAA,CAEA,8BACC,iBAAA,CAKH,sBACC,uBAAA,CACA,qBAAA","sourcesContent":[".hover_b {\n\ttransition: var(--transition);\n\ttransition-property: border-color;\n\tborder: 3px solid transparent;\n\n\t&:hover {\n\t\tborder-color: var(--teal);\n\t}\n}\n\n.hover_bg {\n\ttransition: var(--transition);\n\ttransition-property: background-color;\n\tborder-bottom: 4px solid var(--white);\n\n\t* {\n\t\ttransition: var(--transition);\n\t\ttransition-property: color;\n\t}\n\n\t&:hover {\n\t\tbackground-color: var(--teal);\n\n\t\t* {\n\t\t\tcolor: var(--grey);\n\t\t}\n\t}\n}\n\n.work {\n\tbackground-position: center;\n\tbackground-size: cover;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hover_b": "jKh9AgTg2ma5su_zbRIX",
	"hover_bg": "d7tal804h9Oe47guopsr",
	"work": "s9NjTDCao6ZbhdMBv39L"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nP_FH_cAQ18TfLtGPriJ{background-position:50%;background-size:cover;padding:calc(var(--space-l)*2) 0 var(--space-l)}.NvNyymSP9itaS73hUM3w{display:flex;height:500px}.oWcG0sS8f0LJSH5G6YCg{flex-grow:1;height:100%;transition:var(--transition);transition-property:flex-grow}.oWcG0sS8f0LJSH5G6YCg:hover{flex-grow:3}", "",{"version":3,"sources":["webpack://./src/pages/Flamingo/Home/style.scss"],"names":[],"mappings":"AAAA,sBAEC,uBAAA,CACA,qBAAA,CAFA,+CAEA,CAGD,sBACC,YAAA,CACA,YAAA,CAGD,sBACC,WAAA,CACA,WAAA,CAEA,4BAAA,CACA,6BAAA,CAEA,4BACC,WAAA","sourcesContent":[".header {\n\tpadding: calc(var(--space-l) * 2) 0 var(--space-l);\n\tbackground-position: center;\n\tbackground-size: cover;\n}\n\n.works {\n\tdisplay: flex;\n\theight: 500px;\n}\n\n.work {\n\tflex-grow: 1;\n\theight: 100%;\n\n\ttransition: var(--transition);\n\ttransition-property: flex-grow;\n\n\t&:hover {\n\t\tflex-grow: 3;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "nP_FH_cAQ18TfLtGPriJ",
	"works": "NvNyymSP9itaS73hUM3w",
	"work": "oWcG0sS8f0LJSH5G6YCg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 418:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
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


/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate, Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createRoutesFromChildren, createSearchParams, generatePath, matchPath, matchRoutes, renderMatches, resolvePath, unstable_HistoryRouter, useHref, useInRouterContext, useLinkClickHandler, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
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

  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/history/index.js
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C=(/* unused pure expression or super */ null && ( false?0:function(b){return b}));function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(e){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(e){return e!==h})}},call:function(h){b.forEach(function(e){return e&&e(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname;h=void 0===h?"/":h;var e=b.search;e=void 0===e?"":e;b=b.hash;b=void 0===b?"":b;e&&"?"!==e&&(h+="?"===e.charAt(0)?e:"?"+e);b&&"#"!==b&&(h+="#"===b.charAt(0)?b:"#"+b);return h}
function J(b){var h={};if(b){var e=b.indexOf("#");0<=e&&(h.hash=b.substr(e),b=b.substr(0,e));e=b.indexOf("?");0<=e&&(h.search=b.substr(e),b=b.substr(0,e));b&&(h.pathname=b)}return h}
function history_createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function e(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C(_extends({pathname:q.pathname,hash:"",search:""},"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function f(){A(c,a)}var l=r.Push,k=x(c,
a);if(!g.length||(g.call({action:l,location:k,retry:f}),!1)){var n=[{usr:k.state,key:k.key,idx:v+1},e(k)];k=n[0];n=n[1];try{m.pushState(k,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function f(){y(c,a)}var l=r.Replace,k=x(c,a);g.length&&(g.call({action:l,location:k,retry:f}),1)||(k=[{usr:k.state,key:k.key,idx:v},e(k)],m.replaceState(k[0],"",k[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",
function(){if(u)g.call(u),u=null;else{var c=r.Pop,a=h(),f=a[0];a=a[1];if(g.length)if(null!=f){var l=v-f;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else false?0:
void 0;else z(c)}});var t=r.Pop;b=h();var v=b[0],q=b[1],d=F(),g=F();null==v&&(v=0,m.replaceState(_extends({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:e,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=g.push(c);1===g.length&&p.addEventListener("beforeunload",E);return function(){a();g.length||p.removeEventListener("beforeunload",E)}}}};
function history_createHashHistory(b){function h(){var a=J(m.location.hash.substr(1)),f=a.pathname,l=a.search;a=a.hash;var k=u.state||{};return[k.idx,C({pathname:void 0===f?"/":f,search:void 0===l?"":l,hash:void 0===a?"":a,state:k.usr||null,key:k.key||"default"})]}function e(){if(t)c.call(t),t=null;else{var a=r.Pop,f=h(),l=f[0];f=f[1];if(c.length)if(null!=l){var k=q-l;k&&(t={action:a,location:f,retry:function(){p(-1*k)}},p(k))}else false?0:
void 0;else A(a)}}function x(a){var f=document.querySelector("base"),l="";f&&f.getAttribute("href")&&(f=m.location.href,l=f.indexOf("#"),l=-1===l?f:f.slice(0,l));return l+"#"+("string"===typeof a?a:I(a))}function z(a,f){void 0===f&&(f=null);return C(_extends({pathname:d.pathname,hash:"",search:""},"string"===typeof a?J(a):a,{state:f,key:H()}))}function A(a){v=a;a=h();q=a[0];d=a[1];g.call({action:v,location:d})}function y(a,f){function l(){y(a,f)}var k=r.Push,n=z(a,f); false?
0:void 0;if(!c.length||(c.call({action:k,location:n,retry:l}),!1)){var G=[{usr:n.state,key:n.key,idx:q+1},x(n)];n=G[0];G=G[1];try{u.pushState(n,"",G)}catch(K){m.location.assign(G)}A(k)}}function w(a,f){function l(){w(a,f)}var k=r.Replace,n=z(a,f); false?0:void 0;c.length&&(c.call({action:k,location:n,retry:l}),1)||(n=[{usr:n.state,key:n.key,idx:q},x(n)],u.replaceState(n[0],"",n[1]),A(k))}function p(a){u.go(a)}void 0===b&&(b={});b=b.window;var m=void 0===b?document.defaultView:b,u=m.history,t=null;m.addEventListener("popstate",e);m.addEventListener("hashchange",function(){var a=h()[1];I(a)!==I(d)&&e()});var v=r.Pop;b=h();var q=b[0],d=b[1],g=F(),c=F();null==q&&(q=0,u.replaceState(_extends({},u.state,{idx:q}),""));return{get action(){return v},get location(){return d},
createHref:x,push:y,replace:w,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(a){return g.push(a)},block:function(a){var f=c.push(a);1===c.length&&m.addEventListener("beforeunload",E);return function(){f();c.length||m.removeEventListener("beforeunload",E)}}}};
function history_createMemoryHistory(b){function h(d,g){void 0===g&&(g=null);return C(_extends({pathname:t.pathname,search:"",hash:""},"string"===typeof d?J(d):d,{state:g,key:H()}))}function e(d,g,c){return!q.length||(q.call({action:d,location:g,retry:c}),!1)}function x(d,g){u=d;t=g;v.call({action:u,location:t})}function z(d,g){var c=r.Push,a=h(d,g); false?0:
void 0;e(c,a,function(){z(d,g)})&&(m+=1,p.splice(m,p.length,a),x(c,a))}function A(d,g){var c=r.Replace,a=h(d,g); false?0:void 0;e(c,a,function(){A(d,g)})&&(p[m]=a,x(c,a))}function y(d){var g=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[g];e(c,a,function(){y(d)})&&(m=g,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===
b?["/"]:b).map(function(d){var g=C(_extends({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d)); false?0:void 0;return g}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"===
typeof d?d:I(d)},push:z,replace:A,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}};
//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/react-router/index.js
/**
 * React Router v6.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */



function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     false ? 0 : void 0;
  }
} ///////////////////////////////////////////////////////////////////////////////
// CONTEXT
///////////////////////////////////////////////////////////////////////////////

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */


const NavigationContext = /*#__PURE__*/(/* unused pure expression or super */ null && (createContext(null)));

if (false) {}

const LocationContext = /*#__PURE__*/(/* unused pure expression or super */ null && (createContext(null)));

if (false) {}

const RouteContext = /*#__PURE__*/(0,react.createContext)({
  outlet: null,
  matches: []
});

if (false) {} ///////////////////////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////////////////////


/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = useRef();

  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex
    });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(react_router_Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
   false ? 0 : void 0;
  let navigate = react_router_useNavigate();
  useEffect(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
    false ? 0 : invariant(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function react_router_Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   false ? 0 : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/createElement(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// HOOKS
///////////////////////////////////////////////////////////////////////////////

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function react_router_useHref(to) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = react_router_useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function react_router_useLocation() {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  return useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */
function useNavigationType() {
  return useContext(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    pathname
  } = react_router_useLocation();
  return useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function react_router_useNavigate() {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = useContext(NavigationContext);
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = react_router_useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = useRef(false);
  useEffect(() => {
    activeRef.current = true;
  });
  let navigate = useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? 0 : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/(/* unused pure expression or super */ null && (createContext(null)));
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */

function useOutletContext() {
  return useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet(context) {
  let outlet = useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */

function useParams() {
  let {
    matches
  } = useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function react_router_useResolvedPath(to) {
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = react_router_useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (false) {}

  let locationFromContext = react_router_useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (false) {}

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  Children.forEach(children, element => {
    if (! /*#__PURE__*/isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ?  false ? 0 : invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * The parameters that were parsed from the URL path.
 */

/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ?  false ? 0 : invariant(false) : void 0;
    return params[key];
  }).replace(/\/*\*$/, _ => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ?  false ? 0 : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ?  false ? 0 : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = (/* unused pure expression or super */ null && (-2));

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */


function renderMatches(matches) {
  return _renderMatches(matches);
}

function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/createElement(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/createElement(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

   false ? 0 : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    "(?:\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     false ? 0 : void 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}

function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/react-router-dom/index.js
/**
 * React Router DOM v6.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function react_router_dom_extends() {
  react_router_dom_extends = Object.assign || function (target) {
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

  return react_router_dom_extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
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

const _excluded = (/* unused pure expression or super */ null && (["onClick", "reloadDocument", "replace", "state", "target", "to"])),
      _excluded2 = (/* unused pure expression or super */ null && (["aria-current", "caseSensitive", "className", "end", "style", "to", "children"]));

function react_router_dom_warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = useRef();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = useRef();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    createElement("a", react_router_dom_extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
})));

if (false) {}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/createElement(Link, react_router_dom_extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return useCallback(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? 0 : void 0;
  let defaultSearchParamsRef = useRef(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = useMemo(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = useNavigate();
  let setSearchParams = useCallback((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;__webpack_unused_export__=60107;__webpack_unused_export__=60108;__webpack_unused_export__=60114;var q=60109,r=60110,t=60112;__webpack_unused_export__=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");__webpack_unused_export__=w("react.fragment");__webpack_unused_export__=w("react.strict_mode");__webpack_unused_export__=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");__webpack_unused_export__=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
__webpack_unused_export__={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};__webpack_unused_export__=C;__webpack_unused_export__=E;__webpack_unused_export__=T;
__webpack_unused_export__=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};__webpack_unused_export__=J;__webpack_unused_export__=function(a){var b=J.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};__webpack_unused_export__=function(a){return{$$typeof:t,render:a}};__webpack_unused_export__=L;
__webpack_unused_export__=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};__webpack_unused_export__=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a,b){return S().useCallback(a,b)};__webpack_unused_export__=function(a,b){return S().useContext(a,b)};__webpack_unused_export__=function(){};__webpack_unused_export__=function(a,b){return S().useEffect(a,b)};__webpack_unused_export__=function(a,b,c){return S().useImperativeHandle(a,b,c)};
__webpack_unused_export__=function(a,b){return S().useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return S().useMemo(a,b)};__webpack_unused_export__=function(a,b,c){return S().useReducer(a,b,c)};__webpack_unused_export__=function(a){return S().useRef(a)};__webpack_unused_export__=function(a){return S().useState(a)};__webpack_unused_export__="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/pages/Flamingo/Home/style.scss
var style = __webpack_require__(875);
;// CONCATENATED MODULE: ./src/pages/Flamingo/Home/style.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const Home_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/components/Flamingo/Button/index.js + 1 modules
var Flamingo_Button = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/components/Flamingo/Column/style.scss
var Column_style = __webpack_require__(427);
;// CONCATENATED MODULE: ./src/components/Flamingo/Column/style.scss

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(Column_style/* default */.Z, style_options);




       /* harmony default export */ const Flamingo_Column_style = (Column_style/* default */.Z && Column_style/* default.locals */.Z.locals ? Column_style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Flamingo/Column/index.js



var Column_Column = function Column(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? null : _ref$heading,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? null : _ref$description,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$hasSeparator = _ref.hasSeparator,
      hasSeparator = _ref$hasSeparator === void 0 ? false : _ref$hasSeparator,
      _ref$hover = _ref.hover,
      hover = _ref$hover === void 0 ? null : _ref$hover,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? null : _ref$type;
  return /*#__PURE__*/React.createElement("b", {
    className: "".concat(classes, " ").concat(hover === 'border' ? $.hover_b : hover === 'background' ? $.hover_bg : '')
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: "".concat(icon, " icon-green mb-default")
  }), heading && /*#__PURE__*/React.createElement("h3", {
    className: "mb-default"
  }, heading), hasSeparator && /*#__PURE__*/React.createElement("b", {
    className: "separator"
  }), description && /*#__PURE__*/React.createElement("p", null, description));
};

/* harmony default export */ const Flamingo_Column = ((/* unused pure expression or super */ null && (Column_Column)));
;// CONCATENATED MODULE: ./src/pages/Flamingo/Home/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var FlamingoHome = function FlamingoHome(_ref) {
  var _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$sections = _ref.sections,
      sections = _ref$sections === void 0 ? [] : _ref$sections;
  return /*#__PURE__*/React.createElement("b", {
    className: $.home
  }, /*#__PURE__*/React.createElement("b", {
    className: $.header,
    style: {
      backgroundImage: "url(".concat(header.image, ")")
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "container mb-l"
  }, /*#__PURE__*/React.createElement("b", {
    className: "width-50"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-m"
  }, header.description), /*#__PURE__*/React.createElement("h1", {
    className: "mb-m"
  }, header.heading), /*#__PURE__*/React.createElement(Button, {
    link: header.action.link,
    text: header.action.text
  }))), /*#__PURE__*/React.createElement("b", {
    className: "container"
  }, /*#__PURE__*/React.createElement("b", {
    className: "columns-3"
  }, header.columns.map(function (column, index) {
    return /*#__PURE__*/React.createElement("b", {
      className: "column",
      key: index
    }, /*#__PURE__*/React.createElement(Column, _extends({}, column, {
      classes: "bg-grey p-m",
      hasSeparator: true,
      hover: "border"
    })));
  })))), sections.map(function (section, index) {
    return /*#__PURE__*/React.createElement("b", {
      className: "".concat(index % 2 ? 'bg-grey' : 'bg-blue', " section"),
      key: index
    }, /*#__PURE__*/React.createElement("b", {
      className: "container mb-l"
    }, /*#__PURE__*/React.createElement("b", {
      className: section.action ? 'flex-between' : ''
    }, /*#__PURE__*/React.createElement("b", {
      className: ""
    }, /*#__PURE__*/React.createElement("h2", {
      className: "mb-default"
    }, /*#__PURE__*/React.createElement("i", {
      className: "separator"
    }), section.heading), /*#__PURE__*/React.createElement("h5", null, section.description)), section.action && /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(Button, {
      text: section.action.text,
      link: section.action.link
    })))), /*#__PURE__*/React.createElement("b", {
      className: section.isContainer ? 'container' : ''
    }, section.hasDefaultColumns ? /*#__PURE__*/React.createElement("b", {
      className: "columns-3"
    }, section.columns.map(function (column, key) {
      return /*#__PURE__*/React.createElement("b", {
        className: "column"
      }, /*#__PURE__*/React.createElement(Column, _extends({}, column, {
        classes: "bg-grey p-m",
        hover: "background",
        key: key
      })));
    })) : section.columnsType === 'works' ? /*#__PURE__*/React.createElement("b", {
      className: $.work
    }, section.columns.map(function (column, key) {
      return /*#__PURE__*/React.createElement("b", {
        className: $.work
      }, /*#__PURE__*/React.createElement(Column, _extends({}, column, {
        type: "work"
      })));
    })) : null));
  }));
};

/* harmony default export */ const Home = ((/* unused pure expression or super */ null && (FlamingoHome)));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQ0wsTUFBUixDQUFldkIsSUFEdEI7QUFFQyxVQUFJLEVBQUU0QixPQUFPLENBQUNMLE1BQVIsQ0FBZXRCO0FBRnRCLE1BREQsQ0FURixDQURELENBSkQsZUF1QkM7QUFBRyxlQUFTLEVBQUUyQixPQUFPLENBQUNDLFdBQVIsR0FBc0IsV0FBdEIsR0FBb0M7QUFBbEQsT0FDRUQsT0FBTyxDQUFDRSxpQkFBUixnQkFDQTtBQUFHLGVBQVMsRUFBQztBQUFiLE9BQ0VGLE9BQU8sQ0FBQ0osT0FBUixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFTSyxHQUFUO0FBQUEsMEJBQ3BCO0FBQUcsaUJBQVMsRUFBQztBQUFiLHNCQUNDLG9CQUFDLE1BQUQsZUFDS0wsTUFETDtBQUVDLGVBQU8sRUFBQyxhQUZUO0FBR0MsYUFBSyxFQUFDLFlBSFA7QUFJQyxXQUFHLEVBQUVLO0FBSk4sU0FERCxDQURvQjtBQUFBLEtBQXBCLENBREYsQ0FEQSxHQWFHSCxPQUFPLENBQUNJLFdBQVIsS0FBd0IsT0FBeEIsZ0JBQ0g7QUFBRyxlQUFTLEVBQUVsQyxDQUFDLENBQUNtQztBQUFoQixPQUNFTCxPQUFPLENBQUNKLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLE1BQUQsRUFBU0ssR0FBVDtBQUFBLDBCQUNwQjtBQUFHLGlCQUFTLEVBQUVqQyxDQUFDLENBQUNtQztBQUFoQixzQkFDQyxvQkFBQyxNQUFELGVBQVlQLE1BQVo7QUFBb0IsWUFBSSxFQUFDO0FBQXpCLFNBREQsQ0FEb0I7QUFBQSxLQUFwQixDQURGLENBREcsR0FRQSxJQXRCTCxDQXZCRCxDQURhO0FBQUEsR0FBYixDQTlCRixDQURvQjtBQUFBLENBQXJCOztBQW9GQSwyQ0FBZVQsZ0RBQUFBLFlBQWYsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQnV0dG9uL3N0eWxlLnNjc3M/ODExOCIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0J1dHRvbi9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQ29sdW1uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvcGFnZXMvRmxhbWluZ28vSG9tZS9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RlbW9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlbW9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlbW9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlbW9zLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL0hvbWUvc3R5bGUuc2Nzcz84MzJiIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQ29sdW1uL3N0eWxlLnNjc3M/OTYzYSIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0NvbHVtbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9Ib21lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBCdXR0b24gPSAoe1xuXHR0ZXh0ID0gJycsXG5cdGxpbmsgPSAnJyxcblx0c21hbGwgPSBmYWxzZSxcblx0Z2hvc3QgPSBmYWxzZSxcblx0Y2hpbGRyZW4sXG59KSA9PiAoXG5cdDxMaW5rXG5cdFx0dG89e2xpbmt9XG5cdFx0Y2xhc3NOYW1lPXshZ2hvc3QgPyAoc21hbGwgPyAkLmJ1dHRvbl9zbWFsbCA6ICQuYnV0dG9uKSA6ICcnfVxuXHQ+XG5cdFx0e3RleHQgfHwgY2hpbGRyZW59XG5cdDwvTGluaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwYW1rdzl3alpVM1o4bk93OFZGe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjJweCBzb2xpZCB2YXIoLS10ZWFsKTtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6I2ZmZjtmb250LWZhbWlseTp2YXIoLS1mYW1pbHktYWNjZW50KTtmb250LXdlaWdodDo2MDA7cGFkZGluZzp2YXIoLS1wYWRkaW5nKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsY29sb3J9LmFwYW1rdzl3alpVM1o4bk93OFZGOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGVhbCk7Y29sb3I6dmFyKC0tZ3JleSl9LkhWY190cDQ4ajNtNENrbnZlS25Ne3BhZGRpbmc6dmFyKC0tcGFkZGluZy1zbWFsbCk7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9CdXR0b24vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFLQyw0QkFBQSxDQUpBLDRCQUFBLENBU0EsMkJBQUEsQ0FOQSxVQUFBLENBSUEsZ0NBQUEsQ0FDQSxlQUFBLENBUEEsc0JBQUEsQ0FDQSx3QkFBQSxDQUdBLDRCQUFBLENBQ0EsMENBR0EsQ0FFQSw0QkFDQyw0QkFBQSxDQUNBLGlCQUFBLENBSUYsc0JBRUMsNEJBQUEsQ0FDQSx5QkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnV0dG9uIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZmFtaWx5LWFjY2VudCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwpO1xcblxcdFxcdGNvbG9yOiB2YXIoLS1ncmV5KTtcXG5cXHR9XFxufVxcblxcbi5idXR0b25fc21hbGwge1xcblxcdGNvbXBvc2VzOiBidXR0b247XFxuXFx0cGFkZGluZzogdmFyKC0tcGFkZGluZy1zbWFsbCk7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJ1dHRvblwiOiBcImFwYW1rdzl3alpVM1o4bk93OFZGXCIsXG5cdFwiYnV0dG9uX3NtYWxsXCI6IFwiSFZjX3RwNDhqM200Q2tudmVLbk0gYXBhbWt3OXdqWlUzWjhuT3c4VkZcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaktoOUFnVGcybWE1c3VfemJSSVh7Ym9yZGVyOjNweCBzb2xpZCB0cmFuc3BhcmVudDt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Ym9yZGVyLWNvbG9yfS5qS2g5QWdUZzJtYTVzdV96YlJJWDpob3Zlcntib3JkZXItY29sb3I6dmFyKC0tdGVhbCl9LmQ3dGFsODA0aDlPZTQ3Z3VvcHNye2JvcmRlci1ib3R0b206NHB4IHNvbGlkIHZhcigtLXdoaXRlKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcn0uZDd0YWw4MDRoOU9lNDdndW9wc3IgKnt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3J9LmQ3dGFsODA0aDlPZTQ3Z3VvcHNyOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGVhbCl9LmQ3dGFsODA0aDlPZTQ3Z3VvcHNyOmhvdmVyICp7Y29sb3I6dmFyKC0tZ3JleSl9LnM5TmpURENhbzZaYmhkTUJ2MzlMe2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtc2l6ZTpjb3Zlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Db2x1bW4vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFHQyw0QkFBQSxDQUZBLDRCQUFBLENBQ0EsZ0NBQ0EsQ0FFQSw0QkFDQyx3QkFBQSxDQUlGLHNCQUdDLG9DQUFBLENBRkEsNEJBQUEsQ0FDQSxvQ0FDQSxDQUVBLHdCQUNDLDRCQUFBLENBQ0EseUJBQUEsQ0FHRCw0QkFDQyw0QkFBQSxDQUVBLDhCQUNDLGlCQUFBLENBS0gsc0JBQ0MsdUJBQUEsQ0FDQSxxQkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG92ZXJfYiB7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJvcmRlci1jb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG5cXG4uaG92ZXJfYmcge1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXG5cXHQqIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHRcXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcXG5cXHR9XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuXFxuXFx0XFx0KiB7XFxuXFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi53b3JrIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG92ZXJfYlwiOiBcImpLaDlBZ1RnMm1hNXN1X3piUklYXCIsXG5cdFwiaG92ZXJfYmdcIjogXCJkN3RhbDgwNGg5T2U0N2d1b3BzclwiLFxuXHRcIndvcmtcIjogXCJzOU5qVERDYW82WmJoZE1CdjM5TFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uUF9GSF9jQVExOFRmTHRHUHJpSntiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7cGFkZGluZzpjYWxjKHZhcigtLXNwYWNlLWwpKjIpIDAgdmFyKC0tc3BhY2UtbCl9Lk52Tnl5bVNQOWl0YVM3M2hVTTN3e2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NTAwcHh9Lm9XY0cwc1M4ZjBMSlNINUc2WUNne2ZsZXgtZ3JvdzoxO2hlaWdodDoxMDAlO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmbGV4LWdyb3d9Lm9XY0cwc1M4ZjBMSlNINUc2WUNnOmhvdmVye2ZsZXgtZ3JvdzozfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9GbGFtaW5nby9Ib21lL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBRUMsdUJBQUEsQ0FDQSxxQkFBQSxDQUZBLCtDQUVBLENBR0Qsc0JBQ0MsWUFBQSxDQUNBLFlBQUEsQ0FHRCxzQkFDQyxXQUFBLENBQ0EsV0FBQSxDQUVBLDRCQUFBLENBQ0EsNkJBQUEsQ0FFQSw0QkFDQyxXQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcblxcdHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2UtbCkgKiAyKSAwIHZhcigtLXNwYWNlLWwpO1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ud29ya3Mge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLndvcmsge1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogZmxleC1ncm93O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGZsZXgtZ3JvdzogMztcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIm5QX0ZIX2NBUTE4VGZMdEdQcmlKXCIsXG5cdFwid29ya3NcIjogXCJOdk55eW1TUDlpdGFTNzNoVU0zd1wiLFxuXHRcIndvcmtcIjogXCJvV2NHMHNTOGYwTEpTSDVHNllDZ1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJzt2YXIgcixCPXJ8fChyPXt9KTtCLlBvcD1cIlBPUFwiO0IuUHVzaD1cIlBVU0hcIjtCLlJlcGxhY2U9XCJSRVBMQUNFXCI7dmFyIEM9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9mdW5jdGlvbihiKXtyZXR1cm4gT2JqZWN0LmZyZWV6ZShiKX06ZnVuY3Rpb24oYil7cmV0dXJuIGJ9O2Z1bmN0aW9uIEQoYixoKXtpZighYil7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiZjb25zb2xlLndhcm4oaCk7dHJ5e3Rocm93IEVycm9yKGgpO31jYXRjaChlKXt9fX1mdW5jdGlvbiBFKGIpe2IucHJldmVudERlZmF1bHQoKTtiLnJldHVyblZhbHVlPVwiXCJ9XG5mdW5jdGlvbiBGKCl7dmFyIGI9W107cmV0dXJue2dldCBsZW5ndGgoKXtyZXR1cm4gYi5sZW5ndGh9LHB1c2g6ZnVuY3Rpb24oaCl7Yi5wdXNoKGgpO3JldHVybiBmdW5jdGlvbigpe2I9Yi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1ofSl9fSxjYWxsOmZ1bmN0aW9uKGgpe2IuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZSYmZShoKX0pfX19ZnVuY3Rpb24gSCgpe3JldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiw4KX1mdW5jdGlvbiBJKGIpe3ZhciBoPWIucGF0aG5hbWU7aD12b2lkIDA9PT1oP1wiL1wiOmg7dmFyIGU9Yi5zZWFyY2g7ZT12b2lkIDA9PT1lP1wiXCI6ZTtiPWIuaGFzaDtiPXZvaWQgMD09PWI/XCJcIjpiO2UmJlwiP1wiIT09ZSYmKGgrPVwiP1wiPT09ZS5jaGFyQXQoMCk/ZTpcIj9cIitlKTtiJiZcIiNcIiE9PWImJihoKz1cIiNcIj09PWIuY2hhckF0KDApP2I6XCIjXCIrYik7cmV0dXJuIGh9XG5mdW5jdGlvbiBKKGIpe3ZhciBoPXt9O2lmKGIpe3ZhciBlPWIuaW5kZXhPZihcIiNcIik7MDw9ZSYmKGguaGFzaD1iLnN1YnN0cihlKSxiPWIuc3Vic3RyKDAsZSkpO2U9Yi5pbmRleE9mKFwiP1wiKTswPD1lJiYoaC5zZWFyY2g9Yi5zdWJzdHIoZSksYj1iLnN1YnN0cigwLGUpKTtiJiYoaC5wYXRobmFtZT1iKX1yZXR1cm4gaH1cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoKXt2YXIgYz1wLmxvY2F0aW9uLGE9bS5zdGF0ZXx8e307cmV0dXJuW2EuaWR4LEMoe3BhdGhuYW1lOmMucGF0aG5hbWUsc2VhcmNoOmMuc2VhcmNoLGhhc2g6Yy5oYXNoLHN0YXRlOmEudXNyfHxudWxsLGtleTphLmtleXx8XCJkZWZhdWx0XCJ9KV19ZnVuY3Rpb24gZShjKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGM/YzpJKGMpfWZ1bmN0aW9uIHgoYyxhKXt2b2lkIDA9PT1hJiYoYT1udWxsKTtyZXR1cm4gQyhfZXh0ZW5kcyh7cGF0aG5hbWU6cS5wYXRobmFtZSxoYXNoOlwiXCIsc2VhcmNoOlwiXCJ9LFwic3RyaW5nXCI9PT10eXBlb2YgYz9KKGMpOmMse3N0YXRlOmEsa2V5OkgoKX0pKX1mdW5jdGlvbiB6KGMpe3Q9YztjPWgoKTt2PWNbMF07cT1jWzFdO2QuY2FsbCh7YWN0aW9uOnQsbG9jYXRpb246cX0pfWZ1bmN0aW9uIEEoYyxhKXtmdW5jdGlvbiBmKCl7QShjLGEpfXZhciBsPXIuUHVzaCxrPXgoYyxcbmEpO2lmKCFnLmxlbmd0aHx8KGcuY2FsbCh7YWN0aW9uOmwsbG9jYXRpb246ayxyZXRyeTpmfSksITEpKXt2YXIgbj1be3VzcjprLnN0YXRlLGtleTprLmtleSxpZHg6disxfSxlKGspXTtrPW5bMF07bj1uWzFdO3RyeXttLnB1c2hTdGF0ZShrLFwiXCIsbil9Y2F0Y2goRyl7cC5sb2NhdGlvbi5hc3NpZ24obil9eihsKX19ZnVuY3Rpb24geShjLGEpe2Z1bmN0aW9uIGYoKXt5KGMsYSl9dmFyIGw9ci5SZXBsYWNlLGs9eChjLGEpO2cubGVuZ3RoJiYoZy5jYWxsKHthY3Rpb246bCxsb2NhdGlvbjprLHJldHJ5OmZ9KSwxKXx8KGs9W3t1c3I6ay5zdGF0ZSxrZXk6ay5rZXksaWR4OnZ9LGUoayldLG0ucmVwbGFjZVN0YXRlKGtbMF0sXCJcIixrWzFdKSx6KGwpKX1mdW5jdGlvbiB3KGMpe20uZ28oYyl9dm9pZCAwPT09YiYmKGI9e30pO2I9Yi53aW5kb3c7dmFyIHA9dm9pZCAwPT09Yj9kb2N1bWVudC5kZWZhdWx0VmlldzpiLG09cC5oaXN0b3J5LHU9bnVsbDtwLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLFxuZnVuY3Rpb24oKXtpZih1KWcuY2FsbCh1KSx1PW51bGw7ZWxzZXt2YXIgYz1yLlBvcCxhPWgoKSxmPWFbMF07YT1hWzFdO2lmKGcubGVuZ3RoKWlmKG51bGwhPWYpe3ZhciBsPXYtZjtsJiYodT17YWN0aW9uOmMsbG9jYXRpb246YSxyZXRyeTpmdW5jdGlvbigpe3coLTEqbCl9fSx3KGwpKX1lbHNlXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKCExLFwiWW91IGFyZSB0cnlpbmcgdG8gYmxvY2sgYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIHRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoZSBoaXN0b3J5IGxpYnJhcnkuIFRoZSBibG9jayB3aWxsIGZhaWwgc2lsZW50bHkgaW4gcHJvZHVjdGlvbiwgYnV0IGluIGdlbmVyYWwgeW91IHNob3VsZCBkbyBhbGwgbmF2aWdhdGlvbiB3aXRoIHRoZSBoaXN0b3J5IGxpYnJhcnkgKGluc3RlYWQgb2YgdXNpbmcgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGRpcmVjdGx5KSB0byBhdm9pZCB0aGlzIHNpdHVhdGlvbi5cIik6XG52b2lkIDA7ZWxzZSB6KGMpfX0pO3ZhciB0PXIuUG9wO2I9aCgpO3ZhciB2PWJbMF0scT1iWzFdLGQ9RigpLGc9RigpO251bGw9PXYmJih2PTAsbS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sbS5zdGF0ZSx7aWR4OnZ9KSxcIlwiKSk7cmV0dXJue2dldCBhY3Rpb24oKXtyZXR1cm4gdH0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIHF9LGNyZWF0ZUhyZWY6ZSxwdXNoOkEscmVwbGFjZTp5LGdvOncsYmFjazpmdW5jdGlvbigpe3coLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7dygxKX0sbGlzdGVuOmZ1bmN0aW9uKGMpe3JldHVybiBkLnB1c2goYyl9LGJsb2NrOmZ1bmN0aW9uKGMpe3ZhciBhPWcucHVzaChjKTsxPT09Zy5sZW5ndGgmJnAuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpO3JldHVybiBmdW5jdGlvbigpe2EoKTtnLmxlbmd0aHx8cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSl9fX19O1xuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoYil7ZnVuY3Rpb24gaCgpe3ZhciBhPUoobS5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSksZj1hLnBhdGhuYW1lLGw9YS5zZWFyY2g7YT1hLmhhc2g7dmFyIGs9dS5zdGF0ZXx8e307cmV0dXJuW2suaWR4LEMoe3BhdGhuYW1lOnZvaWQgMD09PWY/XCIvXCI6ZixzZWFyY2g6dm9pZCAwPT09bD9cIlwiOmwsaGFzaDp2b2lkIDA9PT1hP1wiXCI6YSxzdGF0ZTprLnVzcnx8bnVsbCxrZXk6ay5rZXl8fFwiZGVmYXVsdFwifSldfWZ1bmN0aW9uIGUoKXtpZih0KWMuY2FsbCh0KSx0PW51bGw7ZWxzZXt2YXIgYT1yLlBvcCxmPWgoKSxsPWZbMF07Zj1mWzFdO2lmKGMubGVuZ3RoKWlmKG51bGwhPWwpe3ZhciBrPXEtbDtrJiYodD17YWN0aW9uOmEsbG9jYXRpb246ZixyZXRyeTpmdW5jdGlvbigpe3AoLTEqayl9fSxwKGspKX1lbHNlXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKCExLFwiWW91IGFyZSB0cnlpbmcgdG8gYmxvY2sgYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIHRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoZSBoaXN0b3J5IGxpYnJhcnkuIFRoZSBibG9jayB3aWxsIGZhaWwgc2lsZW50bHkgaW4gcHJvZHVjdGlvbiwgYnV0IGluIGdlbmVyYWwgeW91IHNob3VsZCBkbyBhbGwgbmF2aWdhdGlvbiB3aXRoIHRoZSBoaXN0b3J5IGxpYnJhcnkgKGluc3RlYWQgb2YgdXNpbmcgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGRpcmVjdGx5KSB0byBhdm9pZCB0aGlzIHNpdHVhdGlvbi5cIik6XG52b2lkIDA7ZWxzZSBBKGEpfX1mdW5jdGlvbiB4KGEpe3ZhciBmPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpLGw9XCJcIjtmJiZmLmdldEF0dHJpYnV0ZShcImhyZWZcIikmJihmPW0ubG9jYXRpb24uaHJlZixsPWYuaW5kZXhPZihcIiNcIiksbD0tMT09PWw/ZjpmLnNsaWNlKDAsbCkpO3JldHVybiBsK1wiI1wiKyhcInN0cmluZ1wiPT09dHlwZW9mIGE/YTpJKGEpKX1mdW5jdGlvbiB6KGEsZil7dm9pZCAwPT09ZiYmKGY9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe3BhdGhuYW1lOmQucGF0aG5hbWUsaGFzaDpcIlwiLHNlYXJjaDpcIlwifSxcInN0cmluZ1wiPT09dHlwZW9mIGE/SihhKTphLHtzdGF0ZTpmLGtleTpIKCl9KSl9ZnVuY3Rpb24gQShhKXt2PWE7YT1oKCk7cT1hWzBdO2Q9YVsxXTtnLmNhbGwoe2FjdGlvbjp2LGxvY2F0aW9uOmR9KX1mdW5jdGlvbiB5KGEsZil7ZnVuY3Rpb24gbCgpe3koYSxmKX12YXIgaz1yLlB1c2gsbj16KGEsZik7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9cbkQoXCIvXCI9PT1uLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucHVzaChcIitKU09OLnN0cmluZ2lmeShhKStcIilcIik6dm9pZCAwO2lmKCFjLmxlbmd0aHx8KGMuY2FsbCh7YWN0aW9uOmssbG9jYXRpb246bixyZXRyeTpsfSksITEpKXt2YXIgRz1be3VzcjpuLnN0YXRlLGtleTpuLmtleSxpZHg6cSsxfSx4KG4pXTtuPUdbMF07Rz1HWzFdO3RyeXt1LnB1c2hTdGF0ZShuLFwiXCIsRyl9Y2F0Y2goSyl7bS5sb2NhdGlvbi5hc3NpZ24oRyl9QShrKX19ZnVuY3Rpb24gdyhhLGYpe2Z1bmN0aW9uIGwoKXt3KGEsZil9dmFyIGs9ci5SZXBsYWNlLG49eihhLGYpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PW4ucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGhhc2ggaGlzdG9yeS5yZXBsYWNlKFwiK0pTT04uc3RyaW5naWZ5KGEpK1xuXCIpXCIpOnZvaWQgMDtjLmxlbmd0aCYmKGMuY2FsbCh7YWN0aW9uOmssbG9jYXRpb246bixyZXRyeTpsfSksMSl8fChuPVt7dXNyOm4uc3RhdGUsa2V5Om4ua2V5LGlkeDpxfSx4KG4pXSx1LnJlcGxhY2VTdGF0ZShuWzBdLFwiXCIsblsxXSksQShrKSl9ZnVuY3Rpb24gcChhKXt1LmdvKGEpfXZvaWQgMD09PWImJihiPXt9KTtiPWIud2luZG93O3ZhciBtPXZvaWQgMD09PWI/ZG9jdW1lbnQuZGVmYXVsdFZpZXc6Yix1PW0uaGlzdG9yeSx0PW51bGw7bS5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixlKTttLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYT1oKClbMV07SShhKSE9PUkoZCkmJmUoKX0pO3ZhciB2PXIuUG9wO2I9aCgpO3ZhciBxPWJbMF0sZD1iWzFdLGc9RigpLGM9RigpO251bGw9PXEmJihxPTAsdS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sdS5zdGF0ZSx7aWR4OnF9KSxcIlwiKSk7cmV0dXJue2dldCBhY3Rpb24oKXtyZXR1cm4gdn0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIGR9LFxuY3JlYXRlSHJlZjp4LHB1c2g6eSxyZXBsYWNlOncsZ286cCxiYWNrOmZ1bmN0aW9uKCl7cCgtMSl9LGZvcndhcmQ6ZnVuY3Rpb24oKXtwKDEpfSxsaXN0ZW46ZnVuY3Rpb24oYSl7cmV0dXJuIGcucHVzaChhKX0sYmxvY2s6ZnVuY3Rpb24oYSl7dmFyIGY9Yy5wdXNoKGEpOzE9PT1jLmxlbmd0aCYmbS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSk7cmV0dXJuIGZ1bmN0aW9uKCl7ZigpO2MubGVuZ3RofHxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIixFKX19fX07XG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoZCxnKXt2b2lkIDA9PT1nJiYoZz1udWxsKTtyZXR1cm4gQyhfZXh0ZW5kcyh7cGF0aG5hbWU6dC5wYXRobmFtZSxzZWFyY2g6XCJcIixoYXNoOlwiXCJ9LFwic3RyaW5nXCI9PT10eXBlb2YgZD9KKGQpOmQse3N0YXRlOmcsa2V5OkgoKX0pKX1mdW5jdGlvbiBlKGQsZyxjKXtyZXR1cm4hcS5sZW5ndGh8fChxLmNhbGwoe2FjdGlvbjpkLGxvY2F0aW9uOmcscmV0cnk6Y30pLCExKX1mdW5jdGlvbiB4KGQsZyl7dT1kO3Q9Zzt2LmNhbGwoe2FjdGlvbjp1LGxvY2F0aW9uOnR9KX1mdW5jdGlvbiB6KGQsZyl7dmFyIGM9ci5QdXNoLGE9aChkLGcpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PXQucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5LnB1c2goXCIrSlNPTi5zdHJpbmdpZnkoZCkrXCIpXCIpOlxudm9pZCAwO2UoYyxhLGZ1bmN0aW9uKCl7eihkLGcpfSkmJihtKz0xLHAuc3BsaWNlKG0scC5sZW5ndGgsYSkseChjLGEpKX1mdW5jdGlvbiBBKGQsZyl7dmFyIGM9ci5SZXBsYWNlLGE9aChkLGcpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PXQucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5LnJlcGxhY2UoXCIrSlNPTi5zdHJpbmdpZnkoZCkrXCIpXCIpOnZvaWQgMDtlKGMsYSxmdW5jdGlvbigpe0EoZCxnKX0pJiYocFttXT1hLHgoYyxhKSl9ZnVuY3Rpb24geShkKXt2YXIgZz1NYXRoLm1pbihNYXRoLm1heChtK2QsMCkscC5sZW5ndGgtMSksYz1yLlBvcCxhPXBbZ107ZShjLGEsZnVuY3Rpb24oKXt5KGQpfSkmJihtPWcseChjLGEpKX12b2lkIDA9PT1iJiYoYj17fSk7dmFyIHc9YjtiPXcuaW5pdGlhbEVudHJpZXM7dz13LmluaXRpYWxJbmRleDt2YXIgcD0odm9pZCAwPT09XG5iP1tcIi9cIl06YikubWFwKGZ1bmN0aW9uKGQpe3ZhciBnPUMoX2V4dGVuZHMoe3BhdGhuYW1lOlwiL1wiLHNlYXJjaDpcIlwiLGhhc2g6XCJcIixzdGF0ZTpudWxsLGtleTpIKCl9LFwic3RyaW5nXCI9PT10eXBlb2YgZD9KKGQpOmQpKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT1nLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXMgfSkgKGludmFsaWQgZW50cnk6IFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTp2b2lkIDA7cmV0dXJuIGd9KSxtPU1hdGgubWluKE1hdGgubWF4KG51bGw9PXc/cC5sZW5ndGgtMTp3LDApLHAubGVuZ3RoLTEpLHU9ci5Qb3AsdD1wW21dLHY9RigpLHE9RigpO3JldHVybntnZXQgaW5kZXgoKXtyZXR1cm4gbX0sZ2V0IGFjdGlvbigpe3JldHVybiB1fSxnZXQgbG9jYXRpb24oKXtyZXR1cm4gdH0sY3JlYXRlSHJlZjpmdW5jdGlvbihkKXtyZXR1cm5cInN0cmluZ1wiPT09XG50eXBlb2YgZD9kOkkoZCl9LHB1c2g6eixyZXBsYWNlOkEsZ286eSxiYWNrOmZ1bmN0aW9uKCl7eSgtMSl9LGZvcndhcmQ6ZnVuY3Rpb24oKXt5KDEpfSxsaXN0ZW46ZnVuY3Rpb24oZCl7cmV0dXJuIHYucHVzaChkKX0sYmxvY2s6ZnVuY3Rpb24oZCl7cmV0dXJuIHEucHVzaChkKX19fTtleHBvcnR7ciBhcyBBY3Rpb24sY3JlYXRlQnJvd3Nlckhpc3RvcnksY3JlYXRlSGFzaEhpc3RvcnksY3JlYXRlTWVtb3J5SGlzdG9yeSxJIGFzIGNyZWF0ZVBhdGgsSiBhcyBwYXJzZVBhdGh9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjIuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIGNyZWF0ZUVsZW1lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIENoaWxkcmVuLCBpc1ZhbGlkRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5LCBBY3Rpb24sIHBhcnNlUGF0aCB9IGZyb20gJ2hpc3RvcnknO1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gd2FybmluZyhjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgUm91dGVyIVxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28geW91IGNhbiBtb3JlIGVhc2lseVxuICAgICAgLy8gZmluZCB0aGUgc291cmNlIGZvciBhIHdhcm5pbmcgdGhhdCBhcHBlYXJzIGluIHRoZSBjb25zb2xlIGJ5XG4gICAgICAvLyBlbmFibGluZyBcInBhdXNlIG9uIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIEphdmFTY3JpcHQgZGVidWdnZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuY29uc3QgYWxyZWFkeVdhcm5lZCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuaW5nT25jZShrZXksIGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kICYmICFhbHJlYWR5V2FybmVkW2tleV0pIHtcbiAgICBhbHJlYWR5V2FybmVkW2tleV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIG1lc3NhZ2UpIDogdm9pZCAwO1xuICB9XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTlRFWFRcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBBIE5hdmlnYXRvciBpcyBhIFwibG9jYXRpb24gY2hhbmdlclwiOyBpdCdzIGhvdyB5b3UgZ2V0IHRvIGRpZmZlcmVudCBsb2NhdGlvbnMuXG4gKlxuICogRXZlcnkgaGlzdG9yeSBpbnN0YW5jZSBjb25mb3JtcyB0byB0aGUgTmF2aWdhdG9yIGludGVyZmFjZSwgYnV0IHRoZVxuICogZGlzdGluY3Rpb24gaXMgdXNlZnVsIHByaW1hcmlseSB3aGVuIGl0IGNvbWVzIHRvIHRoZSBsb3ctbGV2ZWwgPFJvdXRlcj4gQVBJXG4gKiB3aGVyZSBib3RoIHRoZSBsb2NhdGlvbiBhbmQgYSBuYXZpZ2F0b3IgbXVzdCBiZSBwcm92aWRlZCBzZXBhcmF0ZWx5IGluIG9yZGVyXG4gKiB0byBhdm9pZCBcInRlYXJpbmdcIiB0aGF0IG1heSBvY2N1ciBpbiBhIHN1c3BlbnNlLWVuYWJsZWQgYXBwIGlmIHRoZSBhY3Rpb25cbiAqIGFuZC9vciBsb2NhdGlvbiB3ZXJlIHRvIGJlIHJlYWQgZGlyZWN0bHkgZnJvbSB0aGUgaGlzdG9yeSBpbnN0YW5jZS5cbiAqL1xuXG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2aWdhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk5hdmlnYXRpb25cIjtcbn1cblxuY29uc3QgTG9jYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xufVxuXG5jb25zdCBSb3V0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7XG4gIG91dGxldDogbnVsbCxcbiAgbWF0Y2hlczogW11cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVcIjtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8qKlxuICogQSA8Um91dGVyPiB0aGF0IHN0b3JlcyBhbGwgZW50cmllcyBpbiBtZW1vcnkuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNtZW1vcnlyb3V0ZXJcbiAqL1xuZnVuY3Rpb24gTWVtb3J5Um91dGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXhcbiAgfSA9IF9yZWY7XG4gIGxldCBoaXN0b3J5UmVmID0gdXNlUmVmKCk7XG5cbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBOb3RlOiBUaGlzIEFQSSBpcyBtb3N0bHkgdXNlZnVsIGluIFJlYWN0LkNvbXBvbmVudCBzdWJjbGFzc2VzIHRoYXQgYXJlIG5vdFxuICogYWJsZSB0byB1c2UgaG9va3MuIEluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgdGhlXG4gKiBgdXNlTmF2aWdhdGVgIGhvb2sgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI25hdmlnYXRlXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRlKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgdG8sXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZVxuICB9ID0gX3JlZjI7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgLy8gdGhlIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCI8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCkuc3RhdGljLCBcIjxOYXZpZ2F0ZT4gbXVzdCBub3QgYmUgdXNlZCBvbiB0aGUgaW5pdGlhbCByZW5kZXIgaW4gYSA8U3RhdGljUm91dGVyPi4gXCIgKyBcIlRoaXMgaXMgYSBuby1vcCwgYnV0IHlvdSBzaG91bGQgbW9kaWZ5IHlvdXIgY29kZSBzbyB0aGUgPE5hdmlnYXRlPiBpcyBcIiArIFwib25seSBldmVyIHJlbmRlcmVkIGluIHJlc3BvbnNlIHRvIHNvbWUgdXNlciBpbnRlcmFjdGlvbiBvciBzdGF0ZSBjaGFuZ2UuXCIpIDogdm9pZCAwO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICByZXBsYWNlLFxuICAgICAgc3RhdGVcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNoaWxkIHJvdXRlJ3MgZWxlbWVudCwgaWYgdGhlcmUgaXMgb25lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYXQgYSBjZXJ0YWluIFVSTCBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcm91dGVcbiAqL1xuZnVuY3Rpb24gUm91dGUoX3Byb3BzKSB7XG4gICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiQSA8Um91dGU+IGlzIG9ubHkgZXZlciB0byBiZSB1c2VkIGFzIHRoZSBjaGlsZCBvZiA8Um91dGVzPiBlbGVtZW50LCBcIiArIFwibmV2ZXIgcmVuZGVyZWQgZGlyZWN0bHkuIFBsZWFzZSB3cmFwIHlvdXIgPFJvdXRlPiBpbiBhIDxSb3V0ZXM+LlwiKSA6IGludmFyaWFudChmYWxzZSkgO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGxvY2F0aW9uIGNvbnRleHQgZm9yIHRoZSByZXN0IG9mIHRoZSBhcHAuXG4gKlxuICogTm90ZTogWW91IHVzdWFsbHkgd29uJ3QgcmVuZGVyIGEgPFJvdXRlcj4gZGlyZWN0bHkuIEluc3RlYWQsIHlvdSdsbCByZW5kZXIgYVxuICogcm91dGVyIHRoYXQgaXMgbW9yZSBzcGVjaWZpYyB0byB5b3VyIGVudmlyb25tZW50IHN1Y2ggYXMgYSA8QnJvd3NlclJvdXRlcj5cbiAqIGluIHdlYiBicm93c2VycyBvciBhIDxTdGF0aWNSb3V0ZXI+IGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcm91dGVyXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcihfcmVmMykge1xuICBsZXQge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgICBjaGlsZHJlbiA9IG51bGwsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uUHJvcCxcbiAgICBuYXZpZ2F0aW9uVHlwZSA9IEFjdGlvbi5Qb3AsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlXG4gIH0gPSBfcmVmMztcbiAgISF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgY2Fubm90IHJlbmRlciBhIDxSb3V0ZXI+IGluc2lkZSBhbm90aGVyIDxSb3V0ZXI+LlwiICsgXCIgWW91IHNob3VsZCBuZXZlciBoYXZlIG1vcmUgdGhhbiBvbmUgaW4geW91ciBhcHAuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IGJhc2VuYW1lID0gbm9ybWFsaXplUGF0aG5hbWUoYmFzZW5hbWVQcm9wKTtcbiAgbGV0IG5hdmlnYXRpb25Db250ZXh0ID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3BcbiAgfSksIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCBzdGF0aWNQcm9wXSk7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsb2NhdGlvblByb3AgPSBwYXJzZVBhdGgobG9jYXRpb25Qcm9wKTtcbiAgfVxuXG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiLFxuICAgIHN0YXRlID0gbnVsbCxcbiAgICBrZXkgPSBcImRlZmF1bHRcIlxuICB9ID0gbG9jYXRpb25Qcm9wO1xuICBsZXQgbG9jYXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJhaWxpbmdQYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKTtcblxuICAgIGlmICh0cmFpbGluZ1BhdGhuYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2gsXG4gICAgICBzdGF0ZSxcbiAgICAgIGtleVxuICAgIH07XG4gIH0sIFtiYXNlbmFtZSwgcGF0aG5hbWUsIHNlYXJjaCwgaGFzaCwgc3RhdGUsIGtleV0pO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGxvY2F0aW9uICE9IG51bGwsIFwiPFJvdXRlciBiYXNlbmFtZT1cXFwiXCIgKyBiYXNlbmFtZSArIFwiXFxcIj4gaXMgbm90IGFibGUgdG8gbWF0Y2ggdGhlIFVSTCBcIiArIChcIlxcXCJcIiArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCArIFwiXFxcIiBiZWNhdXNlIGl0IGRvZXMgbm90IHN0YXJ0IHdpdGggdGhlIFwiKSArIFwiYmFzZW5hbWUsIHNvIHRoZSA8Um91dGVyPiB3b24ndCByZW5kZXIgYW55dGhpbmcuXCIpIDogdm9pZCAwO1xuXG4gIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbmF2aWdhdGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHZhbHVlOiB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIG5hdmlnYXRpb25UeXBlXG4gICAgfVxuICB9KSk7XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgbmVzdGVkIHRyZWUgb2YgPFJvdXRlPiBlbGVtZW50cyB0aGF0IHJlbmRlcnMgdGhlIGJyYW5jaFxuICogdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNyb3V0ZXNcbiAqL1xuZnVuY3Rpb24gUm91dGVzKF9yZWY0KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgbG9jYXRpb25cbiAgfSA9IF9yZWY0O1xuICByZXR1cm4gdXNlUm91dGVzKGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiksIGxvY2F0aW9uKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSE9PS1Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmdWxsIGhyZWYgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUuIFRoaXMgaXMgdXNlZnVsIGZvciBidWlsZGluZ1xuICogY3VzdG9tIGxpbmtzIHRoYXQgYXJlIGFsc28gYWNjZXNzaWJsZSBhbmQgcHJlc2VydmUgcmlnaHQtY2xpY2sgYmVoYXZpb3IuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VocmVmXG4gKi9cblxuZnVuY3Rpb24gdXNlSHJlZih0bykge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlSHJlZigpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IHVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIGhhc2gsXG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoXG4gIH0gPSB1c2VSZXNvbHZlZFBhdGgodG8pO1xuICBsZXQgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZTtcblxuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgbGV0IHRvUGF0aG5hbWUgPSBnZXRUb1BhdGhuYW1lKHRvKTtcbiAgICBsZXQgZW5kc1dpdGhTbGFzaCA9IHRvUGF0aG5hbWUgIT0gbnVsbCAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcbiAgICBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lICsgKGVuZHNXaXRoU2xhc2ggPyBcIi9cIiA6IFwiXCIpIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aG5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IuY3JlYXRlSHJlZih7XG4gICAgcGF0aG5hbWU6IGpvaW5lZFBhdGhuYW1lLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlcj4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VpbnJvdXRlcmNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VJblJvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkgIT0gbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2Vsb2NhdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUxvY2F0aW9uKCkge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiB1c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubG9jYXRpb247XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIGFjdGlvbiB3aGljaCBkZXNjcmliZXMgaG93IHRoZSByb3V0ZXIgY2FtZSB0b1xuICogdGhlIGN1cnJlbnQgbG9jYXRpb24sIGVpdGhlciBieSBhIHBvcCwgcHVzaCwgb3IgcmVwbGFjZSBvbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZW5hdmlnYXRpb250eXBlXG4gKi9cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIFVSTCBmb3IgdGhlIGdpdmVuIFwidG9cIiB2YWx1ZSBtYXRjaGVzIHRoZSBjdXJyZW50IFVSTC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IFwiYWN0aXZlXCIgc3RhdGUsIGUuZy5cbiAqIDxOYXZMaW5rPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZW1hdGNoXG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2gocGF0dGVybikge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTWF0Y2goKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgcGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgbmF2aWdhdGUoKSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHVzZU5hdmlnYXRlKCkuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgPExpbms+cywgYnV0XG4gKiBtYXkgYWxzbyBiZSB1c2VkIGJ5IG90aGVyIGVsZW1lbnRzIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VuYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZSgpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU5hdmlnYXRlKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gdXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkobWF0Y2hlcy5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSk7XG4gIGxldCBhY3RpdmVSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGl2ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0bywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIikgOiB2b2lkIDA7XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbmF2aWdhdG9yLmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lKTtcblxuICAgIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICAgIHBhdGgucGF0aG5hbWUgPSBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgfVxuXG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWVdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VvdXRsZXRjb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlT3V0bGV0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoT3V0bGV0Q29udGV4dCk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LiBVc2VkIGludGVybmFsbHkgYnkgPE91dGxldD4gdG8gcmVuZGVyIGNoaWxkIHJvdXRlcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZW91dGxldFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuXG4gIGlmIChvdXRsZXQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoT3V0bGV0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBvdXRsZXQpO1xuICB9XG5cbiAgcmV0dXJuIG91dGxldDtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIG9mIHRoZSBkeW5hbWljIHBhcmFtcyBmcm9tIHRoZSBjdXJyZW50XG4gKiBVUkwgdGhhdCB3ZXJlIG1hdGNoZWQgYnkgdGhlIHJvdXRlIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VwYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xufVxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGF0aG5hbWUgb2YgdGhlIGdpdmVuIGB0b2AgdmFsdWUgYWdhaW5zdCB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZXJlc29sdmVkcGF0aFxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bykge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KG1hdGNoZXMubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSksIFt0bywgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgb2YgdGhlIHJvdXRlIHRoYXQgbWF0Y2hlZCB0aGUgY3VycmVudCBsb2NhdGlvbiwgcHJlcGFyZWRcbiAqIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dCB0byByZW5kZXIgdGhlIHJlbWFpbmRlciBvZiB0aGUgcm91dGUgdHJlZS4gUm91dGVcbiAqIGVsZW1lbnRzIGluIHRoZSB0cmVlIG11c3QgcmVuZGVyIGFuIDxPdXRsZXQ+IHRvIHJlbmRlciB0aGVpciBjaGlsZCByb3V0ZSdzXG4gKiBlbGVtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlcm91dGVzXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBtYXRjaGVzOiBwYXJlbnRNYXRjaGVzXG4gIH0gPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCByb3V0ZU1hdGNoID0gcGFyZW50TWF0Y2hlc1twYXJlbnRNYXRjaGVzLmxlbmd0aCAtIDFdO1xuICBsZXQgcGFyZW50UGFyYW1zID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGFyYW1zIDoge307XG4gIGxldCBwYXJlbnRQYXRobmFtZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lIDogXCIvXCI7XG4gIGxldCBwYXJlbnRQYXRobmFtZUJhc2UgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZUJhc2UgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFJvdXRlID0gcm91dGVNYXRjaCAmJiByb3V0ZU1hdGNoLnJvdXRlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBZb3Ugd29uJ3QgZ2V0IGEgd2FybmluZyBhYm91dCAyIGRpZmZlcmVudCA8Um91dGVzPiB1bmRlciBhIDxSb3V0ZT5cbiAgICAvLyB3aXRob3V0IGEgdHJhaWxpbmcgKiwgYnV0IHRoaXMgaXMgYSBiZXN0LWVmZm9ydCB3YXJuaW5nIGFueXdheSBzaW5jZSB3ZVxuICAgIC8vIGNhbm5vdCBldmVuIGdpdmUgdGhlIHdhcm5pbmcgdW5sZXNzIHRoZXkgbGFuZCBhdCB0aGUgcGFyZW50IHJvdXRlLlxuICAgIC8vXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvL1xuICAgIC8vIDxSb3V0ZXM+XG4gICAgLy8gICB7LyogVGhpcyByb3V0ZSBwYXRoIE1VU1QgZW5kIHdpdGggLyogYmVjYXVzZSBvdGhlcndpc2VcbiAgICAvLyAgICAgICBpdCB3aWxsIG5ldmVyIG1hdGNoIC9ibG9nL3Bvc3QvMTIzICovfVxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nXCIgZWxlbWVudD17PEJsb2cgLz59IC8+XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2cvZmVlZFwiIGVsZW1lbnQ9ezxCbG9nRmVlZCAvPn0gLz5cbiAgICAvLyA8L1JvdXRlcz5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIEJsb2coKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Um91dGVzPlxuICAgIC8vICAgICAgIDxSb3V0ZSBwYXRoPVwicG9zdC86aWRcIiBlbGVtZW50PXs8UG9zdCAvPn0gLz5cbiAgICAvLyAgICAgPC9Sb3V0ZXM+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgICBsZXQgcGFyZW50UGF0aCA9IHBhcmVudFJvdXRlICYmIHBhcmVudFJvdXRlLnBhdGggfHwgXCJcIjtcbiAgICB3YXJuaW5nT25jZShwYXJlbnRQYXRobmFtZSwgIXBhcmVudFJvdXRlIHx8IHBhcmVudFBhdGguZW5kc1dpdGgoXCIqXCIpLCBcIllvdSByZW5kZXJlZCBkZXNjZW5kYW50IDxSb3V0ZXM+IChvciBjYWxsZWQgYHVzZVJvdXRlcygpYCkgYXQgXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRobmFtZSArIFwiXFxcIiAodW5kZXIgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4pIGJ1dCB0aGUgXCIpICsgXCJwYXJlbnQgcm91dGUgcGF0aCBoYXMgbm8gdHJhaWxpbmcgXFxcIipcXFwiLiBUaGlzIG1lYW5zIGlmIHlvdSBuYXZpZ2F0ZSBcIiArIFwiZGVlcGVyLCB0aGUgcGFyZW50IHdvbid0IG1hdGNoIGFueW1vcmUgYW5kIHRoZXJlZm9yZSB0aGUgY2hpbGQgXCIgKyBcInJvdXRlcyB3aWxsIG5ldmVyIHJlbmRlci5cXG5cXG5cIiArIChcIlBsZWFzZSBjaGFuZ2UgdGhlIHBhcmVudCA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPiB0byA8Um91dGUgXCIpICsgKFwicGF0aD1cXFwiXCIgKyAocGFyZW50UGF0aCA9PT0gXCIvXCIgPyBcIipcIiA6IHBhcmVudFBhdGggKyBcIi8qXCIpICsgXCJcXFwiPi5cIikpO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uRnJvbUNvbnRleHQgPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbG9jYXRpb247XG5cbiAgaWYgKGxvY2F0aW9uQXJnKSB7XG4gICAgdmFyIF9wYXJzZWRMb2NhdGlvbkFyZyRwYTtcblxuICAgIGxldCBwYXJzZWRMb2NhdGlvbkFyZyA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgICAhKHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgfHwgKChfcGFyc2VkTG9jYXRpb25BcmckcGEgPSBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wYXJzZWRMb2NhdGlvbkFyZyRwYS5zdGFydHNXaXRoKHBhcmVudFBhdGhuYW1lQmFzZSkpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJXaGVuIG92ZXJyaWRpbmcgdGhlIGxvY2F0aW9uIHVzaW5nIGA8Um91dGVzIGxvY2F0aW9uPmAgb3IgYHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKWAsIFwiICsgXCJ0aGUgbG9jYXRpb24gcGF0aG5hbWUgbXVzdCBiZWdpbiB3aXRoIHRoZSBwb3J0aW9uIG9mIHRoZSBVUkwgcGF0aG5hbWUgdGhhdCB3YXMgXCIgKyAoXCJtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFxcXCJcIiArIHBhcmVudFBhdGhuYW1lQmFzZSArIFwiXFxcIiBcIikgKyAoXCJidXQgcGF0aG5hbWUgXFxcIlwiICsgcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUgKyBcIlxcXCIgd2FzIGdpdmVuIGluIHRoZSBgbG9jYXRpb25gIHByb3AuXCIpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbG9jYXRpb24gPSBwYXJzZWRMb2NhdGlvbkFyZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbUNvbnRleHQ7XG4gIH1cblxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UocGFyZW50UGF0aG5hbWVCYXNlLmxlbmd0aCkgfHwgXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB7XG4gICAgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHBhcmVudFJvdXRlIHx8IG1hdGNoZXMgIT0gbnVsbCwgXCJObyByb3V0ZXMgbWF0Y2hlZCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQsIFwiTWF0Y2hlZCBsZWFmIHJvdXRlIGF0IGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBkb2VzIG5vdCBoYXZlIGFuIGVsZW1lbnQuIFwiICsgXCJUaGlzIG1lYW5zIGl0IHdpbGwgcmVuZGVyIGFuIDxPdXRsZXQgLz4gd2l0aCBhIG51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzICYmIG1hdGNoZXMubWFwKG1hdGNoID0+IE9iamVjdC5hc3NpZ24oe30sIG1hdGNoLCB7XG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMsIG1hdGNoLnBhcmFtcyksXG4gICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICB9KSksIHBhcmVudE1hdGNoZXMpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVVElMU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZSBjb25maWcgZnJvbSBhIFJlYWN0IFwiY2hpbGRyZW5cIiBvYmplY3QsIHdoaWNoIGlzIHVzdWFsbHlcbiAqIGVpdGhlciBhIGA8Um91dGU+YCBlbGVtZW50IG9yIGFuIGFycmF5IG9mIHRoZW0uIFVzZWQgaW50ZXJuYWxseSBieVxuICogYDxSb3V0ZXM+YCB0byBjcmVhdGUgYSByb3V0ZSBjb25maWcgZnJvbSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNjcmVhdGVyb3V0ZXNmcm9tY2hpbGRyZW5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgbGV0IHJvdXRlcyA9IFtdO1xuICBDaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBlbGVtZW50ID0+IHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIElnbm9yZSBub24tZWxlbWVudHMuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBtb3JlIGVhc2lseSBpbmxpbmVcbiAgICAgIC8vIGNvbmRpdGlvbmFscyBpbiB0aGVpciByb3V0ZSBjb25maWcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICEoZWxlbWVudC50eXBlID09PSBSb3V0ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiW1wiICsgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZSkgKyBcIl0gaXMgbm90IGEgPFJvdXRlPiBjb21wb25lbnQuIEFsbCBjb21wb25lbnQgY2hpbGRyZW4gb2YgPFJvdXRlcz4gbXVzdCBiZSBhIDxSb3V0ZT4gb3IgPFJlYWN0LkZyYWdtZW50PlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbGV0IHJvdXRlID0ge1xuICAgICAgY2FzZVNlbnNpdGl2ZTogZWxlbWVudC5wcm9wcy5jYXNlU2Vuc2l0aXZlLFxuICAgICAgZWxlbWVudDogZWxlbWVudC5wcm9wcy5lbGVtZW50LFxuICAgICAgaW5kZXg6IGVsZW1lbnQucHJvcHMuaW5kZXgsXG4gICAgICBwYXRoOiBlbGVtZW50LnByb3BzLnBhdGhcbiAgICB9O1xuXG4gICAgaWYgKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXM7XG59XG4vKipcbiAqIFRoZSBwYXJhbWV0ZXJzIHRoYXQgd2VyZSBwYXJzZWQgZnJvbSB0aGUgVVJMIHBhdGguXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNnZW5lcmF0ZXBhdGhcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKHBhdGgsIHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBwYXRoLnJlcGxhY2UoLzooXFx3KykvZywgKF8sIGtleSkgPT4ge1xuICAgICEocGFyYW1zW2tleV0gIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiTWlzc2luZyBcXFwiOlwiICsga2V5ICsgXCJcXFwiIHBhcmFtXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gcGFyYW1zW2tleV07XG4gIH0pLnJlcGxhY2UoL1xcLypcXCokLywgXyA9PiBwYXJhbXNbXCIqXCJdID09IG51bGwgPyBcIlwiIDogcGFyYW1zW1wiKlwiXS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKSk7XG59XG4vKipcbiAqIEEgUm91dGVNYXRjaCBjb250YWlucyBpbmZvIGFib3V0IGhvdyBhIHJvdXRlIG1hdGNoZWQgYSBVUkwuXG4gKi9cblxuLyoqXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiByb3V0ZXMgdG8gYSBsb2NhdGlvbiBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI21hdGNocm91dGVzXG4gKi9cbmZ1bmN0aW9uIG1hdGNoUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcsIGJhc2VuYW1lKSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZW5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbiA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgbGV0IHBhdGhuYW1lID0gc3RyaXBCYXNlbmFtZShsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIiwgYmFzZW5hbWUpO1xuXG4gIGlmIChwYXRobmFtZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgYnJhbmNoZXMgPSBmbGF0dGVuUm91dGVzKHJvdXRlcyk7XG4gIHJhbmtSb3V0ZUJyYW5jaGVzKGJyYW5jaGVzKTtcbiAgbGV0IG1hdGNoZXMgPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwOyBtYXRjaGVzID09IG51bGwgJiYgaSA8IGJyYW5jaGVzLmxlbmd0aDsgKytpKSB7XG4gICAgbWF0Y2hlcyA9IG1hdGNoUm91dGVCcmFuY2goYnJhbmNoZXNbaV0sIHBhdGhuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuUm91dGVzKHJvdXRlcywgYnJhbmNoZXMsIHBhcmVudHNNZXRhLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChicmFuY2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgYnJhbmNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRzTWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50c01ldGEgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gXCJcIjtcbiAgfVxuXG4gIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICBsZXQgbWV0YSA9IHtcbiAgICAgIHJlbGF0aXZlUGF0aDogcm91dGUucGF0aCB8fCBcIlwiLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogcm91dGUuY2FzZVNlbnNpdGl2ZSA9PT0gdHJ1ZSxcbiAgICAgIGNoaWxkcmVuSW5kZXg6IGluZGV4LFxuICAgICAgcm91dGVcbiAgICB9O1xuXG4gICAgaWYgKG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAhbWV0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChwYXJlbnRQYXRoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJBYnNvbHV0ZSByb3V0ZSBwYXRoIFxcXCJcIiArIG1ldGEucmVsYXRpdmVQYXRoICsgXCJcXFwiIG5lc3RlZCB1bmRlciBwYXRoIFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIiBpcyBub3QgdmFsaWQuIEFuIGFic29sdXRlIGNoaWxkIHJvdXRlIHBhdGggXCIpICsgXCJtdXN0IHN0YXJ0IHdpdGggdGhlIGNvbWJpbmVkIHBhdGggb2YgYWxsIGl0cyBwYXJlbnQgcm91dGVzLlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBtZXRhLnJlbGF0aXZlUGF0aCA9IG1ldGEucmVsYXRpdmVQYXRoLnNsaWNlKHBhcmVudFBhdGgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGpvaW5QYXRocyhbcGFyZW50UGF0aCwgbWV0YS5yZWxhdGl2ZVBhdGhdKTtcbiAgICBsZXQgcm91dGVzTWV0YSA9IHBhcmVudHNNZXRhLmNvbmNhdChtZXRhKTsgLy8gQWRkIHRoZSBjaGlsZHJlbiBiZWZvcmUgYWRkaW5nIHRoaXMgcm91dGUgdG8gdGhlIGFycmF5IHNvIHdlIHRyYXZlcnNlIHRoZVxuICAgIC8vIHJvdXRlIHRyZWUgZGVwdGgtZmlyc3QgYW5kIGNoaWxkIHJvdXRlcyBhcHBlYXIgYmVmb3JlIHRoZWlyIHBhcmVudHMgaW5cbiAgICAvLyB0aGUgXCJmbGF0dGVuZWRcIiB2ZXJzaW9uLlxuXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICEocm91dGUuaW5kZXggIT09IHRydWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkluZGV4IHJvdXRlcyBtdXN0IG5vdCBoYXZlIGNoaWxkIHJvdXRlcy4gUGxlYXNlIHJlbW92ZSBcIiArIChcImFsbCBjaGlsZCByb3V0ZXMgZnJvbSByb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIuXCIpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBmbGF0dGVuUm91dGVzKHJvdXRlLmNoaWxkcmVuLCBicmFuY2hlcywgcm91dGVzTWV0YSwgcGF0aCk7XG4gICAgfSAvLyBSb3V0ZXMgd2l0aG91dCBhIHBhdGggc2hvdWxkbid0IGV2ZXIgbWF0Y2ggYnkgdGhlbXNlbHZlcyB1bmxlc3MgdGhleSBhcmVcbiAgICAvLyBpbmRleCByb3V0ZXMsIHNvIGRvbid0IGFkZCB0aGVtIHRvIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGJyYW5jaGVzLlxuXG5cbiAgICBpZiAocm91dGUucGF0aCA9PSBudWxsICYmICFyb3V0ZS5pbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJyYW5jaGVzLnB1c2goe1xuICAgICAgcGF0aCxcbiAgICAgIHNjb3JlOiBjb21wdXRlU2NvcmUocGF0aCwgcm91dGUuaW5kZXgpLFxuICAgICAgcm91dGVzTWV0YVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGJyYW5jaGVzO1xufVxuXG5mdW5jdGlvbiByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcykge1xuICBicmFuY2hlcy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlICE9PSBiLnNjb3JlID8gYi5zY29yZSAtIGEuc2NvcmUgLy8gSGlnaGVyIHNjb3JlIGZpcnN0XG4gIDogY29tcGFyZUluZGV4ZXMoYS5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCksIGIucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpKSk7XG59XG5cbmNvbnN0IHBhcmFtUmUgPSAvXjpcXHcrJC87XG5jb25zdCBkeW5hbWljU2VnbWVudFZhbHVlID0gMztcbmNvbnN0IGluZGV4Um91dGVWYWx1ZSA9IDI7XG5jb25zdCBlbXB0eVNlZ21lbnRWYWx1ZSA9IDE7XG5jb25zdCBzdGF0aWNTZWdtZW50VmFsdWUgPSAxMDtcbmNvbnN0IHNwbGF0UGVuYWx0eSA9IC0yO1xuXG5jb25zdCBpc1NwbGF0ID0gcyA9PiBzID09PSBcIipcIjtcblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKHBhdGgsIGluZGV4KSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBsZXQgaW5pdGlhbFNjb3JlID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gIGlmIChzZWdtZW50cy5zb21lKGlzU3BsYXQpKSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IHNwbGF0UGVuYWx0eTtcbiAgfVxuXG4gIGlmIChpbmRleCkge1xuICAgIGluaXRpYWxTY29yZSArPSBpbmRleFJvdXRlVmFsdWU7XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHMuZmlsdGVyKHMgPT4gIWlzU3BsYXQocykpLnJlZHVjZSgoc2NvcmUsIHNlZ21lbnQpID0+IHNjb3JlICsgKHBhcmFtUmUudGVzdChzZWdtZW50KSA/IGR5bmFtaWNTZWdtZW50VmFsdWUgOiBzZWdtZW50ID09PSBcIlwiID8gZW1wdHlTZWdtZW50VmFsdWUgOiBzdGF0aWNTZWdtZW50VmFsdWUpLCBpbml0aWFsU2NvcmUpO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlSW5kZXhlcyhhLCBiKSB7XG4gIGxldCBzaWJsaW5ncyA9IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLnNsaWNlKDAsIC0xKS5ldmVyeSgobiwgaSkgPT4gbiA9PT0gYltpXSk7XG4gIHJldHVybiBzaWJsaW5ncyA/IC8vIElmIHR3byByb3V0ZXMgYXJlIHNpYmxpbmdzLCB3ZSBzaG91bGQgdHJ5IHRvIG1hdGNoIHRoZSBlYXJsaWVyIHNpYmxpbmdcbiAgLy8gZmlyc3QuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBoYXZlIGZpbmUtZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIG1hdGNoaW5nXG4gIC8vIGJlaGF2aW9yIGJ5IHNpbXBseSBwdXR0aW5nIHJvdXRlcyB3aXRoIGlkZW50aWNhbCBwYXRocyBpbiB0aGUgb3JkZXIgdGhleVxuICAvLyB3YW50IHRoZW0gdHJpZWQuXG4gIGFbYS5sZW5ndGggLSAxXSAtIGJbYi5sZW5ndGggLSAxXSA6IC8vIE90aGVyd2lzZSwgaXQgZG9lc24ndCByZWFsbHkgbWFrZSBzZW5zZSB0byByYW5rIG5vbi1zaWJsaW5ncyBieSBpbmRleCxcbiAgLy8gc28gdGhleSBzb3J0IGVxdWFsbHkuXG4gIDA7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGVCcmFuY2goYnJhbmNoLCBwYXRobmFtZSkge1xuICBsZXQge1xuICAgIHJvdXRlc01ldGFcbiAgfSA9IGJyYW5jaDtcbiAgbGV0IG1hdGNoZWRQYXJhbXMgPSB7fTtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzTWV0YS5sZW5ndGg7ICsraSkge1xuICAgIGxldCBtZXRhID0gcm91dGVzTWV0YVtpXTtcbiAgICBsZXQgZW5kID0gaSA9PT0gcm91dGVzTWV0YS5sZW5ndGggLSAxO1xuICAgIGxldCByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWRQYXRobmFtZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKG1hdGNoZWRQYXRobmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoUGF0aCh7XG4gICAgICBwYXRoOiBtZXRhLnJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IG1ldGEuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVuZFxuICAgIH0sIHJlbWFpbmluZ1BhdGhuYW1lKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgICBPYmplY3QuYXNzaWduKG1hdGNoZWRQYXJhbXMsIG1hdGNoLnBhcmFtcyk7XG4gICAgbGV0IHJvdXRlID0gbWV0YS5yb3V0ZTtcbiAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgcGFyYW1zOiBtYXRjaGVkUGFyYW1zLFxuICAgICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZV0pLFxuICAgICAgcGF0aG5hbWVCYXNlOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSksXG4gICAgICByb3V0ZVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IG9mIGBtYXRjaFJvdXRlcygpYCBpbnRvIGEgUmVhY3QgZWxlbWVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbmRlck1hdGNoZXMobWF0Y2hlcykge1xuICByZXR1cm4gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyk7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMsIHBhcmVudE1hdGNoZXMpIHtcbiAgaWYgKHBhcmVudE1hdGNoZXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzID09IG51bGwpIHJldHVybiBudWxsO1xuICByZXR1cm4gbWF0Y2hlcy5yZWR1Y2VSaWdodCgob3V0bGV0LCBtYXRjaCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICBjaGlsZHJlbjogbWF0Y2gucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkID8gbWF0Y2gucm91dGUuZWxlbWVudCA6IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE91dGxldCwgbnVsbCksXG4gICAgICB2YWx1ZToge1xuICAgICAgICBvdXRsZXQsXG4gICAgICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXMuY29uY2F0KG1hdGNoZXMuc2xpY2UoMCwgaW5kZXggKyAxKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEEgUGF0aFBhdHRlcm4gaXMgdXNlZCB0byBtYXRjaCBvbiBzb21lIHBvcnRpb24gb2YgYSBVUkwgcGF0aG5hbWUuXG4gKi9cblxuXG4vKipcbiAqIFBlcmZvcm1zIHBhdHRlcm4gbWF0Y2hpbmcgb24gYSBVUkwgcGF0aG5hbWUgYW5kIHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXRcbiAqIHRoZSBtYXRjaC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI21hdGNocGF0aFxuICovXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XG4gICAgcGF0dGVybiA9IHtcbiAgICAgIHBhdGg6IHBhdHRlcm4sXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIGVuZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBsZXQgW21hdGNoZXIsIHBhcmFtTmFtZXNdID0gY29tcGlsZVBhdGgocGF0dGVybi5wYXRoLCBwYXR0ZXJuLmNhc2VTZW5zaXRpdmUsIHBhdHRlcm4uZW5kKTtcbiAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobWF0Y2hlcik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gbWF0Y2hbMF07XG4gIGxldCBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICBsZXQgY2FwdHVyZUdyb3VwcyA9IG1hdGNoLnNsaWNlKDEpO1xuICBsZXQgcGFyYW1zID0gcGFyYW1OYW1lcy5yZWR1Y2UoKG1lbW8sIHBhcmFtTmFtZSwgaW5kZXgpID0+IHtcbiAgICAvLyBXZSBuZWVkIHRvIGNvbXB1dGUgdGhlIHBhdGhuYW1lQmFzZSBoZXJlIHVzaW5nIHRoZSByYXcgc3BsYXQgdmFsdWVcbiAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nIHBhcmFtc1tcIipcIl0gbGF0ZXIgYmVjYXVzZSBpdCB3aWxsIGJlIGRlY29kZWQgdGhlblxuICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICBsZXQgc3BsYXRWYWx1ZSA9IGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCI7XG4gICAgICBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUuc2xpY2UoMCwgbWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCAtIHNwbGF0VmFsdWUubGVuZ3RoKS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gICAgfVxuXG4gICAgbWVtb1twYXJhbU5hbWVdID0gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCIsIHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcGF0aG5hbWU6IG1hdGNoZWRQYXRobmFtZSxcbiAgICBwYXRobmFtZUJhc2UsXG4gICAgcGF0dGVyblxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21waWxlUGF0aChwYXRoLCBjYXNlU2Vuc2l0aXZlLCBlbmQpIHtcbiAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IHZvaWQgMCkge1xuICAgIGVuZCA9IHRydWU7XG4gIH1cblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHBhdGggPT09IFwiKlwiIHx8ICFwYXRoLmVuZHNXaXRoKFwiKlwiKSB8fCBwYXRoLmVuZHNXaXRoKFwiLypcIiksIFwiUm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3ZXJlIFwiICsgKFwiXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIiBiZWNhdXNlIHRoZSBgKmAgY2hhcmFjdGVyIG11c3QgXCIpICsgXCJhbHdheXMgZm9sbG93IGEgYC9gIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgXCIgKyAoXCJwbGVhc2UgY2hhbmdlIHRoZSByb3V0ZSBwYXRoIHRvIFxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIuXCIpKSA6IHZvaWQgMDtcbiAgbGV0IHBhcmFtTmFtZXMgPSBbXTtcbiAgbGV0IHJlZ2V4cFNvdXJjZSA9IFwiXlwiICsgcGF0aC5yZXBsYWNlKC9cXC8qXFwqPyQvLCBcIlwiKSAvLyBJZ25vcmUgdHJhaWxpbmcgLyBhbmQgLyosIHdlJ2xsIGhhbmRsZSBpdCBiZWxvd1xuICAucmVwbGFjZSgvXlxcLyovLCBcIi9cIikgLy8gTWFrZSBzdXJlIGl0IGhhcyBhIGxlYWRpbmcgL1xuICAucmVwbGFjZSgvW1xcXFwuKiteJD97fXwoKVtcXF1dL2csIFwiXFxcXCQmXCIpIC8vIEVzY2FwZSBzcGVjaWFsIHJlZ2V4IGNoYXJzXG4gIC5yZXBsYWNlKC86KFxcdyspL2csIChfLCBwYXJhbU5hbWUpID0+IHtcbiAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICByZXR1cm4gXCIoW15cXFxcL10rKVwiO1xuICB9KTtcblxuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goXCIqXCIpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBwYXRoID09PSBcIipcIiB8fCBwYXRoID09PSBcIi8qXCIgPyBcIiguKikkXCIgLy8gQWxyZWFkeSBtYXRjaGVkIHRoZSBpbml0aWFsIC8sIGp1c3QgbWF0Y2ggdGhlIHJlc3RcbiAgICA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7IC8vIERvbid0IGluY2x1ZGUgdGhlIC8gaW4gcGFyYW1zW1wiKlwiXVxuICB9IGVsc2Uge1xuICAgIHJlZ2V4cFNvdXJjZSArPSBlbmQgPyBcIlxcXFwvKiRcIiAvLyBXaGVuIG1hdGNoaW5nIHRvIHRoZSBlbmQsIGlnbm9yZSB0cmFpbGluZyBzbGFzaGVzXG4gICAgOiAvLyBPdGhlcndpc2UsIG1hdGNoIGEgd29yZCBib3VuZGFyeSBvciBhIHByb2NlZWRpbmcgLy4gVGhlIHdvcmQgYm91bmRhcnkgcmVzdHJpY3RzXG4gICAgLy8gcGFyZW50IHJvdXRlcyB0byBtYXRjaGluZyBvbmx5IHRoZWlyIG93biB3b3JkcyBhbmQgbm90aGluZyBtb3JlLCBlLmcuIHBhcmVudFxuICAgIC8vIHJvdXRlIFwiL2hvbWVcIiBzaG91bGQgbm90IG1hdGNoIFwiL2hvbWUyXCIuXG4gICAgXCIoPzpcXFxcYnxcXFxcL3wkKVwiO1xuICB9XG5cbiAgbGV0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKHJlZ2V4cFNvdXJjZSwgY2FzZVNlbnNpdGl2ZSA/IHVuZGVmaW5lZCA6IFwiaVwiKTtcbiAgcmV0dXJuIFttYXRjaGVyLCBwYXJhbU5hbWVzXTtcbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLCBwYXJhbU5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIlRoZSB2YWx1ZSBmb3IgdGhlIFVSTCBwYXJhbSBcXFwiXCIgKyBwYXJhbU5hbWUgKyBcIlxcXCIgd2lsbCBub3QgYmUgZGVjb2RlZCBiZWNhdXNlXCIgKyAoXCIgdGhlIHN0cmluZyBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBpcyBhIG1hbGZvcm1lZCBVUkwgc2VnbWVudC4gVGhpcyBpcyBwcm9iYWJseVwiKSArIChcIiBkdWUgdG8gYSBiYWQgcGVyY2VudCBlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpIDogdm9pZCAwO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzb2x2ZWQgcGF0aCBvYmplY3QgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIHBhdGhuYW1lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcmVzb2x2ZXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoKHRvLCBmcm9tUGF0aG5hbWUpIHtcbiAgaWYgKGZyb21QYXRobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgZnJvbVBhdGhuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lOiB0b1BhdGhuYW1lLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgbGV0IHBhdGhuYW1lID0gdG9QYXRobmFtZSA/IHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgPyB0b1BhdGhuYW1lIDogcmVzb2x2ZVBhdGhuYW1lKHRvUGF0aG5hbWUsIGZyb21QYXRobmFtZSkgOiBmcm9tUGF0aG5hbWU7XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBub3JtYWxpemVTZWFyY2goc2VhcmNoKSxcbiAgICBoYXNoOiBub3JtYWxpemVIYXNoKGhhc2gpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZShyZWxhdGl2ZVBhdGgsIGZyb21QYXRobmFtZSkge1xuICBsZXQgc2VnbWVudHMgPSBmcm9tUGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIGxldCByZWxhdGl2ZVNlZ21lbnRzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgcmVsYXRpdmVTZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgIGlmIChzZWdtZW50ID09PSBcIi4uXCIpIHtcbiAgICAgIC8vIEtlZXAgdGhlIHJvb3QgXCJcIiBzZWdtZW50IHNvIHRoZSBwYXRobmFtZSBzdGFydHMgYXQgL1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHNlZ21lbnRzLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gXCIuXCIpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBzZWdtZW50cy5qb2luKFwiL1wiKSA6IFwiL1wiO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVG8odG9BcmcsIHJvdXRlUGF0aG5hbWVzLCBsb2NhdGlvblBhdGhuYW1lKSB7XG4gIGxldCB0byA9IHR5cGVvZiB0b0FyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0b0FyZykgOiB0b0FyZztcbiAgbGV0IHRvUGF0aG5hbWUgPSB0b0FyZyA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdG8ucGF0aG5hbWU7IC8vIElmIGEgcGF0aG5hbWUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBgdG9gLCBpdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlXG4gIC8vIHJvdXRlIGNvbnRleHQuIFRoaXMgaXMgZXhwbGFpbmVkIGluIGBOb3RlIG9uIGA8TGluayB0bz5gIHZhbHVlc2AgaW4gb3VyXG4gIC8vIG1pZ3JhdGlvbiBndWlkZSBmcm9tIHY1IGFzIGEgbWVhbnMgb2YgZGlzYW1iaWd1YXRpb24gYmV0d2VlbiBgdG9gIHZhbHVlc1xuICAvLyB0aGF0IGJlZ2luIHdpdGggYC9gIGFuZCB0aG9zZSB0aGF0IGRvIG5vdC4gSG93ZXZlciwgdGhpcyBpcyBwcm9ibGVtYXRpYyBmb3JcbiAgLy8gYHRvYCB2YWx1ZXMgdGhhdCBkbyBub3QgcHJvdmlkZSBhIHBhdGhuYW1lLiBgdG9gIGNhbiBzaW1wbHkgYmUgYSBzZWFyY2ggb3JcbiAgLy8gaGFzaCBzdHJpbmcsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGFzc3VtZSB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIHJlbGF0aXZlXG4gIC8vIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uJ3MgcGF0aG5hbWUgYW5kICpub3QqIHRoZSByb3V0ZSBwYXRobmFtZS5cblxuICBsZXQgZnJvbTtcblxuICBpZiAodG9QYXRobmFtZSA9PSBudWxsKSB7XG4gICAgZnJvbSA9IGxvY2F0aW9uUGF0aG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJvdXRlUGF0aG5hbWVJbmRleCA9IHJvdXRlUGF0aG5hbWVzLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAodG9QYXRobmFtZS5zdGFydHNXaXRoKFwiLi5cIikpIHtcbiAgICAgIGxldCB0b1NlZ21lbnRzID0gdG9QYXRobmFtZS5zcGxpdChcIi9cIik7IC8vIEVhY2ggbGVhZGluZyAuLiBzZWdtZW50IG1lYW5zIFwiZ28gdXAgb25lIHJvdXRlXCIgaW5zdGVhZCBvZiBcImdvIHVwIG9uZVxuICAgICAgLy8gVVJMIHNlZ21lbnRcIi4gIFRoaXMgaXMgYSBrZXkgZGlmZmVyZW5jZSBmcm9tIGhvdyA8YSBocmVmPiB3b3JrcyBhbmQgYVxuICAgICAgLy8gbWFqb3IgcmVhc29uIHdlIGNhbGwgdGhpcyBhIFwidG9cIiB2YWx1ZSBpbnN0ZWFkIG9mIGEgXCJocmVmXCIuXG5cbiAgICAgIHdoaWxlICh0b1NlZ21lbnRzWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgdG9TZWdtZW50cy5zaGlmdCgpO1xuICAgICAgICByb3V0ZVBhdGhuYW1lSW5kZXggLT0gMTtcbiAgICAgIH1cblxuICAgICAgdG8ucGF0aG5hbWUgPSB0b1NlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgIH0gLy8gSWYgdGhlcmUgYXJlIG1vcmUgXCIuLlwiIHNlZ21lbnRzIHRoYW4gcGFyZW50IHJvdXRlcywgcmVzb2x2ZSByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSByb290IC8gVVJMLlxuXG5cbiAgICBmcm9tID0gcm91dGVQYXRobmFtZUluZGV4ID49IDAgPyByb3V0ZVBhdGhuYW1lc1tyb3V0ZVBhdGhuYW1lSW5kZXhdIDogXCIvXCI7XG4gIH1cblxuICBsZXQgcGF0aCA9IHJlc29sdmVQYXRoKHRvLCBmcm9tKTsgLy8gRW5zdXJlIHRoZSBwYXRobmFtZSBoYXMgYSB0cmFpbGluZyBzbGFzaCBpZiB0aGUgb3JpZ2luYWwgdG8gdmFsdWUgaGFkIG9uZS5cblxuICBpZiAodG9QYXRobmFtZSAmJiB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSAmJiAhcGF0aC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikpIHtcbiAgICBwYXRoLnBhdGhuYW1lICs9IFwiL1wiO1xuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFRvUGF0aG5hbWUodG8pIHtcbiAgLy8gRW1wdHkgc3RyaW5ncyBzaG91bGQgYmUgdHJlYXRlZCB0aGUgc2FtZSBhcyAvIHBhdGhzXG4gIHJldHVybiB0byA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKS5wYXRobmFtZSA6IHRvLnBhdGhuYW1lO1xufVxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSByZXR1cm4gcGF0aG5hbWU7XG5cbiAgaWYgKCFwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYmFzZW5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBuZXh0Q2hhciA9IHBhdGhuYW1lLmNoYXJBdChiYXNlbmFtZS5sZW5ndGgpO1xuXG4gIGlmIChuZXh0Q2hhciAmJiBuZXh0Q2hhciAhPT0gXCIvXCIpIHtcbiAgICAvLyBwYXRobmFtZSBkb2VzIG5vdCBzdGFydCB3aXRoIGJhc2VuYW1lL1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhuYW1lLnNsaWNlKGJhc2VuYW1lLmxlbmd0aCkgfHwgXCIvXCI7XG59XG5cbmNvbnN0IGpvaW5QYXRocyA9IHBhdGhzID0+IHBhdGhzLmpvaW4oXCIvXCIpLnJlcGxhY2UoL1xcL1xcLysvZywgXCIvXCIpO1xuXG5jb25zdCBub3JtYWxpemVQYXRobmFtZSA9IHBhdGhuYW1lID0+IHBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikucmVwbGFjZSgvXlxcLyovLCBcIi9cIik7XG5cbmNvbnN0IG5vcm1hbGl6ZVNlYXJjaCA9IHNlYXJjaCA9PiAhc2VhcmNoIHx8IHNlYXJjaCA9PT0gXCI/XCIgPyBcIlwiIDogc2VhcmNoLnN0YXJ0c1dpdGgoXCI/XCIpID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG5cbmNvbnN0IG5vcm1hbGl6ZUhhc2ggPSBoYXNoID0+ICFoYXNoIHx8IGhhc2ggPT09IFwiI1wiID8gXCJcIiA6IGhhc2guc3RhcnRzV2l0aChcIiNcIikgPyBoYXNoIDogXCIjXCIgKyBoYXNoOyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVzLCBMb2NhdGlvbkNvbnRleHQgYXMgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgTmF2aWdhdGlvbkNvbnRleHQgYXMgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBSb3V0ZUNvbnRleHQgYXMgVU5TQUZFX1JvdXRlQ29udGV4dCwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLCBnZW5lcmF0ZVBhdGgsIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIHJlbmRlck1hdGNoZXMsIHJlc29sdmVQYXRoLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBSZWFjdCBSb3V0ZXIgRE9NIHY2LjIuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVQYXRoIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZUhyZWYsIHVzZUxvY2F0aW9uLCB1c2VSZXNvbHZlZFBhdGgsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVzLCBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCByZW5kZXJNYXRjaGVzLCByZXNvbHZlUGF0aCwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmNvbnN0IF9leGNsdWRlZCA9IFtcIm9uQ2xpY2tcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcImFyaWEtY3VycmVudFwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJlbmRcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiY2hpbGRyZW5cIl07XG5cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IFJvdXRlciFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gUHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKi9cbmZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoX3JlZikge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHdpbmRvd1xuICB9ID0gX3JlZjtcbiAgbGV0IGhpc3RvcnlSZWYgPSB1c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3dcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gU3RvcmVzIHRoZSBsb2NhdGlvbiBpbiB0aGUgaGFzaFxuICogcG9ydGlvbiBvZiB0aGUgVVJMIHNvIGl0IGlzIG5vdCBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gKi9cbmZ1bmN0aW9uIEhhc2hSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IHVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUhhc2hIaXN0b3J5KHtcbiAgICAgIHdpbmRvd1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQSBgPFJvdXRlcj5gIHRoYXQgYWNjZXB0cyBhIHByZS1pbnN0YW50aWF0ZWQgaGlzdG9yeSBvYmplY3QuIEl0J3MgaW1wb3J0YW50XG4gKiB0byBub3RlIHRoYXQgdXNpbmcgeW91ciBvd24gaGlzdG9yeSBvYmplY3QgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkIGFuZCBtYXkgYWRkXG4gKiB0d28gdmVyc2lvbnMgb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0byB5b3VyIGJ1bmRsZXMgdW5sZXNzIHlvdSB1c2UgdGhlIHNhbWVcbiAqIHZlcnNpb24gb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0aGF0IFJlYWN0IFJvdXRlciB1c2VzIGludGVybmFsbHkuXG4gKi9cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmMztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhpc3RvcnlSb3V0ZXIuZGlzcGxheU5hbWUgPSBcInVuc3RhYmxlX0hpc3RvcnlSb3V0ZXJcIjtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cbmNvbnN0IExpbmsgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rV2l0aFJlZihfcmVmNCwgcmVmKSB7XG4gIGxldCB7XG4gICAgb25DbGljayxcbiAgICByZWxvYWREb2N1bWVudCxcbiAgICByZXBsYWNlID0gZmFsc2UsXG4gICAgc3RhdGUsXG4gICAgdGFyZ2V0LFxuICAgIHRvXG4gIH0gPSBfcmVmNCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcblxuICBsZXQgaHJlZiA9IHVzZUhyZWYodG8pO1xuICBsZXQgaW50ZXJuYWxPbkNsaWNrID0gdXNlTGlua0NsaWNrSGFuZGxlcih0bywge1xuICAgIHJlcGxhY2UsXG4gICAgc3RhdGUsXG4gICAgdGFyZ2V0XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmICFyZWxvYWREb2N1bWVudCkge1xuICAgICAgaW50ZXJuYWxPbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50XG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIHJlZjogcmVmLFxuICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICB9KSlcbiAgKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcbn1cblxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuY29uc3QgTmF2TGluayA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkxpbmtXaXRoUmVmKF9yZWY1LCByZWYpIHtcbiAgbGV0IHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFByb3AgPSBcInBhZ2VcIixcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wID0gXCJcIixcbiAgICBlbmQgPSBmYWxzZSxcbiAgICBzdHlsZTogc3R5bGVQcm9wLFxuICAgIHRvLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmNSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgX2V4Y2x1ZGVkMik7XG5cbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8pO1xuICBsZXQgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICBsZXQgdG9QYXRobmFtZSA9IHBhdGgucGF0aG5hbWU7XG5cbiAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XG4gICAgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB0b1BhdGhuYW1lID0gdG9QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgbGV0IGlzQWN0aXZlID0gbG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIGxvY2F0aW9uUGF0aG5hbWUuc3RhcnRzV2l0aCh0b1BhdGhuYW1lKSAmJiBsb2NhdGlvblBhdGhuYW1lLmNoYXJBdCh0b1BhdGhuYW1lLmxlbmd0aCkgPT09IFwiL1wiO1xuICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHVuZGVmaW5lZDtcbiAgbGV0IGNsYXNzTmFtZTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGxdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIGxldCBzdHlsZSA9IHR5cGVvZiBzdHlsZVByb3AgPT09IFwiZnVuY3Rpb25cIiA/IHN0eWxlUHJvcCh7XG4gICAgaXNBY3RpdmVcbiAgfSkgOiBzdHlsZVByb3A7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB0bzogdG9cbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oe1xuICAgIGlzQWN0aXZlXG4gIH0pIDogY2hpbGRyZW4pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSE9PS1Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpY2sgYmVoYXZpb3IgZm9yIHJvdXRlciBgPExpbms+YCBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bCBpZlxuICogeW91IG5lZWQgdG8gY3JlYXRlIGN1c3RvbSBgPExpbms+YCBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgY2xpY2sgYmVoYXZpb3Igd2VcbiAqIHVzZSBpbiBvdXIgZXhwb3J0ZWQgYDxMaW5rPmAuXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHRhcmdldCxcbiAgICByZXBsYWNlOiByZXBsYWNlUHJvcCxcbiAgICBzdGF0ZVxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gSWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgIXRhcmdldCB8fCB0YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gTGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gSWYgdGhlIFVSTCBoYXNuJ3QgY2hhbmdlZCwgYSByZWd1bGFyIDxhPiB3aWxsIGRvIGEgcmVwbGFjZSBpbnN0ZWFkIG9mXG4gICAgICAvLyBhIHB1c2gsIHNvIGRvIHRoZSBzYW1lIGhlcmUuXG5cbiAgICAgIGxldCByZXBsYWNlID0gISFyZXBsYWNlUHJvcCB8fCBjcmVhdGVQYXRoKGxvY2F0aW9uKSA9PT0gY3JlYXRlUGF0aChwYXRoKTtcbiAgICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHN0YXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHBhdGgsIHJlcGxhY2VQcm9wLCBzdGF0ZSwgdGFyZ2V0LCB0b10pO1xufVxuLyoqXG4gKiBBIGNvbnZlbmllbnQgd3JhcHBlciBmb3IgcmVhZGluZyBhbmQgd3JpdGluZyBzZWFyY2ggcGFyYW1ldGVycyB2aWEgdGhlXG4gKiBVUkxTZWFyY2hQYXJhbXMgaW50ZXJmYWNlLlxuICovXG5cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIsIFwiWW91IGNhbm5vdCB1c2UgdGhlIGB1c2VTZWFyY2hQYXJhbXNgIGhvb2sgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3QgXCIgKyBcInN1cHBvcnQgdGhlIFVSTFNlYXJjaFBhcmFtcyBBUEkuIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgSW50ZXJuZXQgXCIgKyBcIkV4cGxvcmVyIDExLCB3ZSByZWNvbW1lbmQgeW91IGxvYWQgYSBwb2x5ZmlsbCBzdWNoIGFzIFwiICsgXCJodHRwczovL2dpdGh1Yi5jb20vdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXNcXG5cXG5cIiArIFwiSWYgeW91J3JlIHVuc3VyZSBob3cgdG8gbG9hZCBwb2x5ZmlsbHMsIHdlIHJlY29tbWVuZCB5b3UgY2hlY2sgb3V0IFwiICsgXCJodHRwczovL3BvbHlmaWxsLmlvL3YzLyB3aGljaCBwcm92aWRlcyBzb21lIHJlY29tbWVuZGF0aW9ucyBhYm91dCBob3cgXCIgKyBcInRvIGxvYWQgcG9seWZpbGxzIG9ubHkgZm9yIHVzZXJzIHRoYXQgbmVlZCB0aGVtLCBpbnN0ZWFkIG9mIGZvciBldmVyeSBcIiArIFwidXNlci5cIikgOiB2b2lkIDA7XG4gIGxldCBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmID0gdXNlUmVmKGNyZWF0ZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgc2VhcmNoUGFyYW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudC5rZXlzKCkpIHtcbiAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcyhrZXkpKSB7XG4gICAgICAgIGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudC5nZXRBbGwoa2V5KS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VhcmNoUGFyYW1zO1xuICB9LCBbbG9jYXRpb24uc2VhcmNoXSk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBzZXRTZWFyY2hQYXJhbXMgPSB1c2VDYWxsYmFjaygobmV4dEluaXQsIG5hdmlnYXRlT3B0aW9ucykgPT4ge1xuICAgIG5hdmlnYXRlKFwiP1wiICsgY3JlYXRlU2VhcmNoUGFyYW1zKG5leHRJbml0KSwgbmF2aWdhdGVPcHRpb25zKTtcbiAgfSwgW25hdmlnYXRlXSk7XG4gIHJldHVybiBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFBhcmFtcyhpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHR5cGVvZiBpbml0ID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoaW5pdCkgfHwgaW5pdCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyA/IGluaXQgOiBPYmplY3Qua2V5cyhpbml0KS5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGluaXRba2V5XTtcbiAgICByZXR1cm4gbWVtby5jb25jYXQoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAodiA9PiBba2V5LCB2XSkgOiBbW2tleSwgdmFsdWVdXSk7XG4gIH0sIFtdKSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmssIGNyZWF0ZVNlYXJjaFBhcmFtcywgSGlzdG9yeVJvdXRlciBhcyB1bnN0YWJsZV9IaXN0b3J5Um91dGVyLCB1c2VMaW5rQ2xpY2tIYW5kbGVyLCB1c2VTZWFyY2hQYXJhbXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBDb2x1bW4gPSAoe1xuXHRpY29uID0gbnVsbCxcblx0aGVhZGluZyA9IG51bGwsXG5cdGRlc2NyaXB0aW9uID0gbnVsbCxcblx0Y2xhc3NlcyA9ICcnLFxuXHRoYXNTZXBhcmF0b3IgPSBmYWxzZSxcblx0aG92ZXIgPSBudWxsLFxuXHR0eXBlID0gbnVsbCxcbn0pID0+IChcblx0PGJcblx0XHRjbGFzc05hbWU9e2Ake2NsYXNzZXN9ICR7XG5cdFx0XHRob3ZlciA9PT0gJ2JvcmRlcidcblx0XHRcdFx0PyAkLmhvdmVyX2Jcblx0XHRcdFx0OiBob3ZlciA9PT0gJ2JhY2tncm91bmQnXG5cdFx0XHRcdD8gJC5ob3Zlcl9iZ1xuXHRcdFx0XHQ6ICcnXG5cdFx0fWB9XG5cdD5cblx0XHR7aWNvbiAmJiA8aSBjbGFzc05hbWU9e2Ake2ljb259IGljb24tZ3JlZW4gbWItZGVmYXVsdGB9PjwvaT59XG5cdFx0e2hlYWRpbmcgJiYgPGgzIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57aGVhZGluZ308L2gzPn1cblx0XHR7aGFzU2VwYXJhdG9yICYmIDxiIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiIC8+fVxuXHRcdHtkZXNjcmlwdGlvbiAmJiA8cD57ZGVzY3JpcHRpb259PC9wPn1cblx0PC9iPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICd+Yy9GbGFtaW5nby9CdXR0b24nO1xuaW1wb3J0IENvbHVtbiBmcm9tICd+Yy9GbGFtaW5nby9Db2x1bW4nO1xuXG5jb25zdCBGbGFtaW5nb0hvbWUgPSAoeyBoZWFkZXIgPSB7fSwgc2VjdGlvbnMgPSBbXSB9KSA9PiAoXG5cdDxiIGNsYXNzTmFtZT17JC5ob21lfT5cblx0XHQ8YlxuXHRcdFx0Y2xhc3NOYW1lPXskLmhlYWRlcn1cblx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2hlYWRlci5pbWFnZX0pYCB9fVxuXHRcdD5cblx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi1sXCI+XG5cdFx0XHRcdDxiIGNsYXNzTmFtZT1cIndpZHRoLTUwXCI+XG5cdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1iLW1cIj57aGVhZGVyLmRlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1iLW1cIj57aGVhZGVyLmhlYWRpbmd9PC9oMT5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRsaW5rPXtoZWFkZXIuYWN0aW9uLmxpbmt9XG5cdFx0XHRcdFx0XHR0ZXh0PXtoZWFkZXIuYWN0aW9uLnRleHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9iPlxuXHRcdFx0PC9iPlxuXHRcdFx0PGIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxuXHRcdFx0XHRcdHtoZWFkZXIuY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbHVtblwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHQ8Q29sdW1uXG5cdFx0XHRcdFx0XHRcdFx0ey4uLmNvbHVtbn1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPVwiYmctZ3JleSBwLW1cIlxuXHRcdFx0XHRcdFx0XHRcdGhhc1NlcGFyYXRvclxuXHRcdFx0XHRcdFx0XHRcdGhvdmVyPVwiYm9yZGVyXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9iPlxuXHRcdFx0PC9iPlxuXHRcdDwvYj5cblx0XHR7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxuXHRcdFx0PGJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtpbmRleCAlIDIgPyAnYmctZ3JleScgOiAnYmctYmx1ZSd9IHNlY3Rpb25gfVxuXHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0PlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb250YWluZXIgbWItbFwiPlxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17c2VjdGlvbi5hY3Rpb24gPyAnZmxleC1iZXR3ZWVuJyA6ICcnfT5cblx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHR7c2VjdGlvbi5oZWFkaW5nfVxuXHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8aDU+e3NlY3Rpb24uZGVzY3JpcHRpb259PC9oNT5cblx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdHtzZWN0aW9uLmFjdGlvbiAmJiAoXG5cdFx0XHRcdFx0XHRcdDxiPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9e3NlY3Rpb24uYWN0aW9uLnRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rPXtzZWN0aW9uLmFjdGlvbi5saW5rfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHQ8L2I+XG5cdFx0XHRcdDxiIGNsYXNzTmFtZT17c2VjdGlvbi5pc0NvbnRhaW5lciA/ICdjb250YWluZXInIDogJyd9PlxuXHRcdFx0XHRcdHtzZWN0aW9uLmhhc0RlZmF1bHRDb2x1bW5zID8gKFxuXHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiY29sdW1ucy0zXCI+XG5cdFx0XHRcdFx0XHRcdHtzZWN0aW9uLmNvbHVtbnMubWFwKChjb2x1bW4sIGtleSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbHVtblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uY29sdW1ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPVwiYmctZ3JleSBwLW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRob3Zlcj1cImJhY2tncm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHQpIDogc2VjdGlvbi5jb2x1bW5zVHlwZSA9PT0gJ3dvcmtzJyA/IChcblx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17JC53b3JrfT5cblx0XHRcdFx0XHRcdFx0e3NlY3Rpb24uY29sdW1ucy5tYXAoKGNvbHVtbiwga2V5KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPXskLndvcmt9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbHVtbiB7Li4uY29sdW1ufSB0eXBlPVwid29ya1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PC9iPlxuXHRcdFx0PC9iPlxuXHRcdCkpfVxuXHQ8L2I+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGbGFtaW5nb0hvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiJCIsIkJ1dHRvbiIsInRleHQiLCJsaW5rIiwic21hbGwiLCJnaG9zdCIsImNoaWxkcmVuIiwiYnV0dG9uX3NtYWxsIiwiYnV0dG9uIiwiQ29sdW1uIiwiaWNvbiIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiIsImNsYXNzZXMiLCJoYXNTZXBhcmF0b3IiLCJob3ZlciIsInR5cGUiLCJob3Zlcl9iIiwiaG92ZXJfYmciLCJGbGFtaW5nb0hvbWUiLCJoZWFkZXIiLCJzZWN0aW9ucyIsImhvbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsImFjdGlvbiIsImNvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJpbmRleCIsInNlY3Rpb24iLCJpc0NvbnRhaW5lciIsImhhc0RlZmF1bHRDb2x1bW5zIiwia2V5IiwiY29sdW1uc1R5cGUiLCJ3b3JrIl0sInNvdXJjZVJvb3QiOiIifQ==