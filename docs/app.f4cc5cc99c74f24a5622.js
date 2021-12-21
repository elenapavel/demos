/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Flamingo_Button)
});

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
  return /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: link,
    className: !ghost ? small ? Button_style.button_small : Button_style.button : ''
  }, text || children);
};

/* harmony default export */ const Flamingo_Button = (Button);

/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
var isProduction = "production" === 'production';
var base = isProduction ? '/demos/' : '/';

/***/ }),

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home)
});

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
var Button = __webpack_require__(489);
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



var Column = function Column(_ref) {
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
  return /*#__PURE__*/react.createElement("b", {
    className: "".concat(classes, " ").concat(hover === 'border' ? Flamingo_Column_style.hover_b : hover === 'background' ? Flamingo_Column_style.hover_bg : '')
  }, icon && /*#__PURE__*/react.createElement("i", {
    className: "".concat(icon, " icon-green mb-default")
  }), heading && /*#__PURE__*/react.createElement("h3", {
    className: "mb-default"
  }, heading), hasSeparator && /*#__PURE__*/react.createElement("b", {
    className: "separator"
  }), description && /*#__PURE__*/react.createElement("p", null, description));
};

/* harmony default export */ const Flamingo_Column = (Column);
;// CONCATENATED MODULE: ./src/pages/Flamingo/Home/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var FlamingoHome = function FlamingoHome(_ref) {
  var _ref$header = _ref.header,
      header = _ref$header === void 0 ? {} : _ref$header,
      _ref$sections = _ref.sections,
      sections = _ref$sections === void 0 ? [] : _ref$sections;
  return /*#__PURE__*/react.createElement("b", {
    className: Home_style.home
  }, /*#__PURE__*/react.createElement("b", {
    className: Home_style.header,
    style: {
      backgroundImage: "url(".concat(header.image, ")")
    }
  }, /*#__PURE__*/react.createElement("b", {
    className: "container mb-l"
  }, /*#__PURE__*/react.createElement("b", {
    className: "width-50"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-m"
  }, header.description), /*#__PURE__*/react.createElement("h1", {
    className: "mb-m"
  }, header.heading), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    link: header.action.link,
    text: header.action.text
  }))), /*#__PURE__*/react.createElement("b", {
    className: "container"
  }, /*#__PURE__*/react.createElement("b", {
    className: "columns-3"
  }, header.columns.map(function (column, index) {
    return /*#__PURE__*/react.createElement("b", {
      className: "column",
      key: index
    }, /*#__PURE__*/react.createElement(Flamingo_Column, _extends({}, column, {
      classes: "bg-grey p-m",
      hasSeparator: true,
      hover: "border"
    })));
  })))), sections.map(function (section, index) {
    return /*#__PURE__*/react.createElement("b", {
      className: "".concat(index % 2 ? 'bg-grey' : 'bg-blue', " section"),
      key: index
    }, /*#__PURE__*/react.createElement("b", {
      className: "container mb-l"
    }, /*#__PURE__*/react.createElement("b", {
      className: section.action ? 'flex-between' : ''
    }, /*#__PURE__*/react.createElement("b", {
      className: ""
    }, /*#__PURE__*/react.createElement("h2", {
      className: "mb-default"
    }, /*#__PURE__*/react.createElement("i", {
      className: "separator"
    }), section.heading), /*#__PURE__*/react.createElement("h5", null, section.description)), section.action && /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
      text: section.action.text,
      link: section.action.link
    })))), /*#__PURE__*/react.createElement("b", {
      className: section.isContainer ? 'container' : ''
    }, section.hasDefaultColumns ? /*#__PURE__*/react.createElement("b", {
      className: "columns-3"
    }, section.columns.map(function (column, key) {
      return /*#__PURE__*/react.createElement("b", {
        className: "column"
      }, /*#__PURE__*/react.createElement(Flamingo_Column, _extends({}, column, {
        classes: "bg-grey p-m",
        hover: "background",
        key: key
      })));
    })) : section.columnsType === 'works' ? /*#__PURE__*/react.createElement("b", {
      className: Home_style.work
    }, section.columns.map(function (column, key) {
      return /*#__PURE__*/react.createElement("b", {
        className: Home_style.work
      }, /*#__PURE__*/react.createElement(Flamingo_Column, _extends({}, column, {
        type: "work"
      })));
    })) : null));
  }));
};

/* harmony default export */ const Home = (FlamingoHome);

/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);


var Services = function Services() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "services");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js + 3 modules
var react_router_dom = __webpack_require__(879);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(61);
;// CONCATENATED MODULE: ./src/pages/Home/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style = ({});
;// CONCATENATED MODULE: ./src/pages/Home/index.js





var Home = function Home() {
  return /*#__PURE__*/react.createElement("b", null, "home", /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "".concat(constants/* base */.u, "flamingo/")
  }, "Flamingo"));
};

/* harmony default export */ const pages_Home = (Home);

/***/ }),

/***/ 370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".AcQ6n9LvF_j1gBjd9NaZ h5{color:var(--white)}.I3qTeO7guYYMpo5_OAOL{font-size:var(--size-l);margin-right:var(--space-default)}.PhQrgDjxgUzd2eALvAFL{flex-grow:1}.AcQ6n9LvF_j1gBjd9NaZ .PhQrgDjxgUzd2eALvAFL:first-child{flex-grow:3}.AcQ6n9LvF_j1gBjd9NaZ .lLY0zKpVUpeyiw6Wh2Dz{display:flex}.wLPVUDj9e4qBpYUbluvF a{margin-left:var(--space-m);text-transform:uppercase}.R7JQTy_qlciM5mroAxUK a{font-size:var(--size-l);margin:0 calc(var(--space-default)/2);transition:all .2s ease-in-out}.R7JQTy_qlciM5mroAxUK a:hover{color:var(--teal)}.kan7yCaEFAKbBt44eaCt img{width:100px}", "",{"version":3,"sources":["webpack://./src/components/Flamingo/Footer/style.scss"],"names":[],"mappings":"AAAA,yBACC,kBAAA,CAED,sBACC,uBAAA,CACA,iCAAA,CAED,sBACC,WAAA,CAED,wDACC,WAAA,CAED,4CACC,YAAA,CAED,wBACC,0BAAA,CACA,wBAAA,CAED,wBAEC,uBAAA,CADA,qCAAA,CAEA,8BAAA,CAEA,8BACC,iBAAA,CAGF,0BACC,WAAA","sourcesContent":[".footer h5 {\n\tcolor: var(--white);\n}\n.icon_white {\n\tfont-size: var(--size-l);\n\tmargin-right: var(--space-default);\n}\n.menu {\n\tflex-grow: 1;\n}\n.footer .menu:first-child {\n\tflex-grow: 3;\n}\n.footer .menus {\n\tdisplay: flex;\n}\n.copyright a {\n\tmargin-left: var(--space-m);\n\ttext-transform: uppercase;\n}\n.social_media_small a {\n\tmargin: 0 calc(var(--space-default) / 2);\n\tfont-size: var(--size-l);\n\ttransition: all 0.2s ease-in-out;\n\n\t&:hover {\n\t\tcolor: var(--teal);\n\t}\n}\n.logo img {\n\twidth: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "AcQ6n9LvF_j1gBjd9NaZ",
	"icon_white": "I3qTeO7guYYMpo5_OAOL",
	"menu": "PhQrgDjxgUzd2eALvAFL",
	"menus": "lLY0zKpVUpeyiw6Wh2Dz",
	"copyright": "wLPVUDj9e4qBpYUbluvF",
	"social_media_small": "R7JQTy_qlciM5mroAxUK",
	"logo": "kan7yCaEFAKbBt44eaCt"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".AvFYd1YrkRSTqXcNWxza a{font-size:var(--size-xl);margin:0 var(--space-default);transition:all .2s ease-in-out}.AvFYd1YrkRSTqXcNWxza a:hover{color:var(--teal)}", "",{"version":3,"sources":["webpack://./src/components/Flamingo/Inquiry/style.scss"],"names":[],"mappings":"AAAA,wBAEC,wBAAA,CADA,6BAAA,CAEA,8BAAA,CAEA,8BACC,iBAAA","sourcesContent":[".social_media a {\n\tmargin: 0 var(--space-default);\n\tfont-size: var(--size-xl);\n\ttransition: all 0.2s ease-in-out;\n\n\t&:hover {\n\t\tcolor: var(--teal);\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"social_media": "AvFYd1YrkRSTqXcNWxza"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".H_my1ITW7HJA5orx7mAN{align-items:center;background-color:var(--black);display:flex;justify-content:space-between;left:0;padding:var(--space-default) var(--space-m);position:fixed;right:0;top:0}.zzB_qT1M_nSmn1Lblw_Q img{width:150px}.jRWslgH3IkRK4IkPWySQ{align-items:center;display:flex}.B5qsAEVfjpKNafrgcVKA{font-family:var(--family-accent);font-weight:800;padding:var(--padding);position:relative;text-transform:uppercase}.B5qsAEVfjpKNafrgcVKA:before{border-bottom:4px solid var(--teal);bottom:-2px;content:\"\";left:0;opacity:0;position:absolute;right:0;transition:var(--transition);transition-property:opacity;width:100%}.B5qsAEVfjpKNafrgcVKA:hover:before{opacity:1}.eHwb_fRRWv9dV82rhQVH{}.eHwb_fRRWv9dV82rhQVH:before{opacity:1}.UdyUyrl3nthYVZqYVm2f{cursor:pointer;padding:var(--space-default);transition:var(--transition);transition-property:color}.UdyUyrl3nthYVZqYVm2f:hover{color:var(--teal)}", "",{"version":3,"sources":["webpack://./src/components/Flamingo/Navigation/style.scss"],"names":[],"mappings":"AAAA,sBAQC,kBAAA,CAHA,6BAAA,CAEA,YAAA,CAEA,6BAAA,CALA,MAAA,CAEA,2CAAA,CALA,cAAA,CAEA,OAAA,CADA,KAOA,CAGD,0BACC,WAAA,CAGD,sBAEC,kBAAA,CADA,YACA,CAGD,sBAGC,gCAAA,CACA,eAAA,CAFA,sBAAA,CAGA,iBAAA,CAJA,wBAIA,CAEA,6BAOC,mCAAA,CAFA,WAAA,CAJA,UAAA,CAEA,MAAA,CAKA,SAAA,CANA,iBAAA,CAEA,OAAA,CAKA,4BAAA,CACA,2BAAA,CAJA,UAIA,CAGD,mCACC,SAAA,CAIF,sBACC,CAEA,6BACC,SAAA,CAIF,sBAIC,cAAA,CAHA,4BAAA,CACA,4BAAA,CACA,yBACA,CAEA,4BACC,iBAAA","sourcesContent":[".navigation {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\tbackground-color: var(--black);\n\tpadding: var(--space-default) var(--space-m);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.logo img {\n\twidth: 150px;\n}\n\n.menu {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.menu_item {\n\ttext-transform: uppercase;\n\tpadding: var(--padding);\n\tfont-family: var(--family-accent);\n\tfont-weight: 800;\n\tposition: relative;\n\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: -2px;\n\t\twidth: 100%;\n\t\tborder-bottom: 4px solid var(--teal);\n\t\topacity: 0;\n\t\ttransition: var(--transition);\n\t\ttransition-property: opacity;\n\t}\n\n\t&:hover:before {\n\t\topacity: 1;\n\t}\n}\n\n.menu_item_active {\n\tcomposes: menu_item;\n\n\t&:before {\n\t\topacity: 1;\n\t}\n}\n\n.search_icon {\n\tpadding: var(--space-default);\n\ttransition: var(--transition);\n\ttransition-property: color;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: var(--teal);\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navigation": "H_my1ITW7HJA5orx7mAN",
	"logo": "zzB_qT1M_nSmn1Lblw_Q",
	"menu": "jRWslgH3IkRK4IkPWySQ",
	"menu_item": "B5qsAEVfjpKNafrgcVKA",
	"menu_item_active": "eHwb_fRRWv9dV82rhQVH B5qsAEVfjpKNafrgcVKA",
	"search_icon": "UdyUyrl3nthYVZqYVm2f"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".C41Ue58HUocgNvfqmwDS{align-items:center;background-color:var(--overlay);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0}.Lcx0EwuEpsc46i2k1T5d{cursor:pointer;font-size:var(--size-xl);line-height:1;padding:var(--space-default);position:absolute;right:var(--space-m);top:var(--space-default);transition:var(--transition);transition-property:color}.Lcx0EwuEpsc46i2k1T5d:hover{color:var(--teal)}.SRAMpZsjtFmDYEqPy9dv{flex-grow:1;max-width:600px;position:relative}.C41Ue58HUocgNvfqmwDS input{background-color:transparent;border:0;border-bottom:1px solid var(--white);font-size:var(--size-l);padding:var(--space-default) calc(var(--space-default) + var(--space-m)) var(--space-default) var(--space-default);transition:var(--transition);transition-property:border-color;width:100%}.C41Ue58HUocgNvfqmwDS input:focus{border:0;border-bottom:1px solid var(--teal)}.C41Ue58HUocgNvfqmwDS input.c2k9fUrSgncWsIJGSzhH{outline:none}.C41Ue58HUocgNvfqmwDS input:focus-visible{outline:none}.q2rczy2QTqDrQumHlulg{bottom:var(--space-default);cursor:pointer;font-size:var(--size-l);position:absolute;right:var(--space-default);transition:var(--transition);transition-property:color}.q2rczy2QTqDrQumHlulg:hover{color:var(--teal)}", "",{"version":3,"sources":["webpack://./src/components/Flamingo/SearchModal/style.scss"],"names":[],"mappings":"AAAA,sBASC,kBAAA,CAHA,+BAAA,CAHA,QAAA,CAIA,YAAA,CACA,sBAAA,CAJA,MAAA,CAHA,cAAA,CAIA,OAAA,CAHA,KAOA,CAGD,sBAOC,cAAA,CAFA,wBAAA,CACA,aAAA,CAFA,4BAAA,CAHA,iBAAA,CAEA,oBAAA,CADA,wBAAA,CAMA,4BAAA,CACA,yBAAA,CAEA,4BACC,iBAAA,CAIF,sBAEC,WAAA,CADA,eAAA,CAEA,iBAAA,CAGD,4BASC,4BAAA,CAFA,QAAA,CACA,oCAAA,CANA,uBAAA,CAIA,kHAAA,CAKA,4BAAA,CACA,gCAAA,CAXA,UAWA,CAEA,kCACC,QAAA,CACA,mCAAA,CAED,iDACC,YAAA,CADD,0CACC,YAAA,CAIF,sBAIC,2BAAA,CAGA,cAAA,CALA,uBAAA,CADA,iBAAA,CAEA,0BAAA,CAEA,4BAAA,CACA,yBACA,CAEA,4BACC,iBAAA","sourcesContent":[".search {\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground-color: var(--overlay);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close {\n\tposition: absolute;\n\ttop: var(--space-default);\n\tright: var(--space-m);\n\tpadding: var(--space-default);\n\tfont-size: var(--size-xl);\n\tline-height: 1;\n\tcursor: pointer;\n\ttransition: var(--transition);\n\ttransition-property: color;\n\n\t&:hover {\n\t\tcolor: var(--teal);\n\t}\n}\n\n.search_input {\n\tmax-width: 600px;\n\tflex-grow: 1;\n\tposition: relative;\n}\n\n.search input {\n\twidth: 100%;\n\tfont-size: var(--size-l);\n\tpadding-top: var(--space-default);\n\tpadding-bottom: var(--space-default);\n\tpadding-left: var(--space-default);\n\tpadding-right: calc(var(--space-default) + var(--space-m));\n\tborder: 0 none;\n\tborder-bottom: 1px solid var(--white);\n\tbackground-color: transparent;\n\n\ttransition: var(--transition);\n\ttransition-property: border-color;\n\n\t&:focus {\n\t\tborder: 0 none;\n\t\tborder-bottom: 1px solid var(--teal);\n\t}\n\t&:focus-visible {\n\t\toutline: none;\n\t}\n}\n\n.search_icon {\n\tposition: absolute;\n\tfont-size: var(--size-l);\n\tright: var(--space-default);\n\tbottom: var(--space-default);\n\ttransition: var(--transition);\n\ttransition-property: color;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: var(--teal);\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"search": "C41Ue58HUocgNvfqmwDS",
	"close": "Lcx0EwuEpsc46i2k1T5d",
	"search_input": "SRAMpZsjtFmDYEqPy9dv",
	"focus-visible": "c2k9fUrSgncWsIJGSzhH",
	"search_icon": "q2rczy2QTqDrQumHlulg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";
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

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),m=__webpack_require__(418),r=__webpack_require__(840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VK": () => (/* binding */ BrowserRouter),
  "rU": () => (/* binding */ Link),
  "j3": () => (/* reexport */ Outlet),
  "bS": () => (/* reexport */ useMatch),
  "WU": () => (/* reexport */ react_router_useResolvedPath),
  "V$": () => (/* reexport */ useRoutes)
});

// UNUSED EXPORTS: HashRouter, MemoryRouter, NavLink, Navigate, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createRoutesFromChildren, createSearchParams, generatePath, matchPath, matchRoutes, renderMatches, resolvePath, unstable_HistoryRouter, useHref, useInRouterContext, useLinkClickHandler, useLocation, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useSearchParams

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
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C= false?0:function(b){return b};function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(e){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(e){return e!==h})}},call:function(h){b.forEach(function(e){return e&&e(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname;h=void 0===h?"/":h;var e=b.search;e=void 0===e?"":e;b=b.hash;b=void 0===b?"":b;e&&"?"!==e&&(h+="?"===e.charAt(0)?e:"?"+e);b&&"#"!==b&&(h+="#"===b.charAt(0)?b:"#"+b);return h}
function J(b){var h={};if(b){var e=b.indexOf("#");0<=e&&(h.hash=b.substr(e),b=b.substr(0,e));e=b.indexOf("?");0<=e&&(h.search=b.substr(e),b=b.substr(0,e));b&&(h.pathname=b)}return h}
function createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function e(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C(extends_extends({pathname:q.pathname,hash:"",search:""},"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function f(){A(c,a)}var l=r.Push,k=x(c,
a);if(!g.length||(g.call({action:l,location:k,retry:f}),!1)){var n=[{usr:k.state,key:k.key,idx:v+1},e(k)];k=n[0];n=n[1];try{m.pushState(k,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function f(){y(c,a)}var l=r.Replace,k=x(c,a);g.length&&(g.call({action:l,location:k,retry:f}),1)||(k=[{usr:k.state,key:k.key,idx:v},e(k)],m.replaceState(k[0],"",k[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",
function(){if(u)g.call(u),u=null;else{var c=r.Pop,a=h(),f=a[0];a=a[1];if(g.length)if(null!=f){var l=v-f;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else false?0:
void 0;else z(c)}});var t=r.Pop;b=h();var v=b[0],q=b[1],d=F(),g=F();null==v&&(v=0,m.replaceState(extends_extends({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:e,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=g.push(c);1===g.length&&p.addEventListener("beforeunload",E);return function(){a();g.length||p.removeEventListener("beforeunload",E)}}}};
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


const NavigationContext = /*#__PURE__*/(0,react.createContext)(null);

if (false) {}

const LocationContext = /*#__PURE__*/(0,react.createContext)(null);

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
    navigationType = r.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0,react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = J(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0,react.useMemo)(() => {
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

  return /*#__PURE__*/(0,react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/(0,react.createElement)(LocationContext.Provider, {
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

function useHref(to) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0,react.useContext)(NavigationContext);
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
  return (0,react.useContext)(LocationContext) != null;
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
  return (0,react.useContext)(LocationContext).location;
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
  return (0,react.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);
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
  } = (0,react.useContext)(NavigationContext);
  let {
    matches
  } = (0,react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = react_router_useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0,react.useCallback)(function (to, options) {
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
const OutletContext = /*#__PURE__*/(0,react.createContext)(null);
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
  let outlet = (0,react.useContext)(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/(0,react.createElement)(OutletContext.Provider, {
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
  } = (0,react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = react_router_useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return (0,react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
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
  } = (0,react.useContext)(RouteContext);
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

    let parsedLocationArg = typeof locationArg === "string" ? J(locationArg) : locationArg;
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

  let location = typeof locationArg === "string" ? J(locationArg) : locationArg;
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
const splatPenalty = -2;

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
    return /*#__PURE__*/(0,react.createElement)(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/(0,react.createElement)(Outlet, null),
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
  } = typeof to === "string" ? J(to) : to;
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
  let to = typeof toArg === "string" ? J(toArg) : toArg;
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
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J(to).pathname : to.pathname;
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

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
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
  let historyRef = (0,react.useRef)();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react.useState)({
    action: history.action,
    location: history.location
  });
  (0,react.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react.createElement)(react_router_Router, {
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
const Link = /*#__PURE__*/(0,react.forwardRef)(function LinkWithRef(_ref4, ref) {
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
    (0,react.createElement)("a", react_router_dom_extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

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
  let navigate = react_router_useNavigate();
  let location = react_router_useLocation();
  let path = react_router_useResolvedPath(to);
  return (0,react.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || I(location) === I(path);
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

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ }),

/***/ 933:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f4cc5cc99c74f24a5622")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "demos:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/demos/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdemos"] = self["webpackChunkdemos"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js + 3 modules
var react_router_dom = __webpack_require__(879);
// EXTERNAL MODULE: ./src/pages/Home/index.js + 1 modules
var Home = __webpack_require__(517);
// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(933);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(61);
;// CONCATENATED MODULE: ./src/constants/flamingo.js
var isProduction = "production" === 'production';

var base = isProduction ? "".concat(constants/* base */.u, "flamingo/") : '/flamingo/';
var PUBLIC_URL = isProduction ? "".concat(constants/* base */.u, "/static/flamingo") : '/flamingo';
// EXTERNAL MODULE: ./src/components/Flamingo/Button/index.js + 1 modules
var Button = __webpack_require__(489);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/components/Flamingo/SearchModal/style.scss
var style = __webpack_require__(277);
;// CONCATENATED MODULE: ./src/components/Flamingo/SearchModal/style.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const SearchModal_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Flamingo/SearchModal/index.js



var Search = function Search(_ref) {
  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$onSearch = _ref.onSearch,
      onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch;
  var inputRef = /*#__PURE__*/(0,react.createRef)();
  return /*#__PURE__*/react.createElement("b", {
    className: SearchModal_style.search
  }, /*#__PURE__*/react.createElement("b", {
    className: SearchModal_style.close
  }, /*#__PURE__*/react.createElement("i", {
    className: "far fa-times-circle",
    onClick: function onClick() {
      return onClose();
    }
  })), /*#__PURE__*/react.createElement("b", {
    className: SearchModal_style.search_input
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    ref: inputRef
  }), /*#__PURE__*/react.createElement("i", {
    className: "fas fa-search ".concat(SearchModal_style.search_icon),
    onClick: function onClick() {
      return onSearch(inputRef.current.value);
    }
  })));
};

/* harmony default export */ const SearchModal = (Search);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/components/Flamingo/Navigation/style.scss
var Navigation_style = __webpack_require__(394);
;// CONCATENATED MODULE: ./src/components/Flamingo/Navigation/style.scss

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(Navigation_style/* default */.Z, style_options);




       /* harmony default export */ const Flamingo_Navigation_style = (Navigation_style/* default */.Z && Navigation_style/* default.locals */.Z.locals ? Navigation_style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Flamingo/Navigation/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Navigation = function Navigation(_ref) {
  var _ref$logo = _ref.logo,
      logo = _ref$logo === void 0 ? null : _ref$logo,
      _ref$menu = _ref.menu,
      menu = _ref$menu === void 0 ? [] : _ref$menu,
      _ref$hideSearch = _ref.hideSearch,
      hideSearch = _ref$hideSearch === void 0 ? false : _ref$hideSearch;

  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSearchOn = _useState2[0],
      onChangeSearchVisibility = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchTerm = _useState4[0],
      onChangeSearchTerm = _useState4[1];

  var saveSearchTerm = function saveSearchTerm(term) {
    console.log(term);
    onChangeSearchTerm(term);
    onChangeSearchVisibility(false);
  };

  return /*#__PURE__*/react.createElement("b", {
    className: Flamingo_Navigation_style.navigation
  }, logo && /*#__PURE__*/react.createElement("b", {
    className: Flamingo_Navigation_style.logo
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: logo.route
  }, /*#__PURE__*/react.createElement("img", {
    src: logo.image,
    alt: "logo"
  }))), /*#__PURE__*/react.createElement("b", {
    className: "flex"
  }, menu.length && /*#__PURE__*/react.createElement("b", {
    className: Flamingo_Navigation_style.menu
  }, menu.map(function (item, index) {
    var resolved = (0,react_router_dom/* useResolvedPath */.WU)(item.route);
    var match = (0,react_router_dom/* useMatch */.bS)({
      path: resolved.pathname,
      end: true
    });
    return item.isButton ? /*#__PURE__*/react.createElement(Button/* default */.Z, {
      key: index,
      link: item.route,
      text: item.name
    }) : /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
      key: index,
      to: item.route,
      className: match ? Flamingo_Navigation_style.menu_item_active : Flamingo_Navigation_style.menu_item
    }, item.name);
  })), !hideSearch && /*#__PURE__*/react.createElement("b", {
    className: Flamingo_Navigation_style.search
  }, /*#__PURE__*/react.createElement("i", {
    onClick: function onClick() {
      return onChangeSearchVisibility(true);
    },
    className: Flamingo_Navigation_style.search_icon
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-search"
  })), isSearchOn && /*#__PURE__*/react.createElement(SearchModal, {
    onClose: function onClose() {
      return onChangeSearchVisibility(false);
    },
    onSearch: function onSearch(val) {
      return saveSearchTerm(val);
    }
  }))));
};

/* harmony default export */ const Flamingo_Navigation = (Navigation);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/components/Flamingo/Inquiry/style.scss
var Inquiry_style = __webpack_require__(526);
;// CONCATENATED MODULE: ./src/components/Flamingo/Inquiry/style.scss

      
      
      
      
      
      
      
      
      

var Inquiry_style_options = {};

Inquiry_style_options.styleTagTransform = (styleTagTransform_default());
Inquiry_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      Inquiry_style_options.insert = insertBySelector_default().bind(null, "head");
    
Inquiry_style_options.domAPI = (styleDomAPI_default());
Inquiry_style_options.insertStyleElement = (insertStyleElement_default());

var Inquiry_style_update = injectStylesIntoStyleTag_default()(Inquiry_style/* default */.Z, Inquiry_style_options);




       /* harmony default export */ const Flamingo_Inquiry_style = (Inquiry_style/* default */.Z && Inquiry_style/* default.locals */.Z.locals ? Inquiry_style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Flamingo/Inquiry/index.js




var Inquiry = function Inquiry(_ref) {
  var _ref$socialMedia = _ref.socialMedia,
      socialMedia = _ref$socialMedia === void 0 ? [] : _ref$socialMedia,
      _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? '' : _ref$heading,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? '' : _ref$image,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? {} : _ref$action;
  return /*#__PURE__*/react.createElement("div", {
    className: "section text-center bg-cover bg-fixed",
    style: {
      backgroundImage: image && "url(".concat(image, ")")
    }
  }, socialMedia && /*#__PURE__*/react.createElement("div", {
    className: "".concat(Flamingo_Inquiry_style.social_media, " mb-m")
  }, socialMedia.map(function (item, index) {
    return /*#__PURE__*/react.createElement("a", {
      href: item.link,
      key: index
    }, /*#__PURE__*/react.createElement("i", {
      className: item.icon
    }));
  })), /*#__PURE__*/react.createElement("h2", {
    className: "mb-m"
  }, heading), action && action.text && /*#__PURE__*/react.createElement(Button/* default */.Z, {
    text: action.text,
    link: action.link
  }));
};

/* harmony default export */ const Flamingo_Inquiry = (Inquiry);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/components/Flamingo/Footer/style.scss
var Footer_style = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/components/Flamingo/Footer/style.scss

      
      
      
      
      
      
      
      
      

var Footer_style_options = {};

Footer_style_options.styleTagTransform = (styleTagTransform_default());
Footer_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      Footer_style_options.insert = insertBySelector_default().bind(null, "head");
    
Footer_style_options.domAPI = (styleDomAPI_default());
Footer_style_options.insertStyleElement = (insertStyleElement_default());

var Footer_style_update = injectStylesIntoStyleTag_default()(Footer_style/* default */.Z, Footer_style_options);




       /* harmony default export */ const Flamingo_Footer_style = (Footer_style/* default */.Z && Footer_style/* default.locals */.Z.locals ? Footer_style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Flamingo/Footer/index.js







var Footer = function Footer(_ref) {
  var _ref$inquiry = _ref.inquiry,
      inquiry = _ref$inquiry === void 0 ? {} : _ref$inquiry,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$copyright = _ref.copyright,
      copyright = _ref$copyright === void 0 ? {} : _ref$copyright;
  return /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.footer
  }, inquiry && /*#__PURE__*/react.createElement(Flamingo_Inquiry, inquiry), columns.length && /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section bb-white"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.menus
  }, /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.menu
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(Flamingo_Footer_style.logo, " mb-default")
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: base
  }, /*#__PURE__*/react.createElement("img", {
    src: "".concat(PUBLIC_URL, "/logo.png")
  }))), /*#__PURE__*/react.createElement("p", null, "We are more than a digital agency"), /*#__PURE__*/react.createElement("div", {
    className: "separator"
  })), /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.menu
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-default"
  }, "Contact Us"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "tel:0727729068",
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-phone-volume ".concat(Flamingo_Footer_style.icon_white)
  }), "0727729068")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "mailto:mocanu.alexandru20@yahoo.ro",
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: "far fa-envelope ".concat(Flamingo_Footer_style.icon_white)
  }), "mocanu.alexandru20@yahoo.ro")), /*#__PURE__*/react.createElement("div", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-map-marker-alt ".concat(Flamingo_Footer_style.icon_white)
  }), "Constantza, Romania"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("i", {
    className: "far fa-calendar-alt ".concat(Flamingo_Footer_style.icon_white)
  }), "Monday to Friday")), /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.menu
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-default"
  }, "Our Services"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Link nb.1")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Link nb.2")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Link nb.3")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Link nb.4"))), /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.menu
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-default"
  }, "About Us"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "About")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Blog")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Contact us 1")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "mb-default"
  }, "Contact us 2")))))), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue py-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(Flamingo_Footer_style.copyright, " mb-default flex")
  }, /*#__PURE__*/react.createElement("p", null, "Copyright 2020 All rights reserved"), /*#__PURE__*/react.createElement("a", {
    href: "#"
  }, "Privacy Policy"), /*#__PURE__*/react.createElement("a", {
    href: "#"
  }, "Terms of Use")), /*#__PURE__*/react.createElement("div", {
    className: "flex-between"
  }, /*#__PURE__*/react.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."), /*#__PURE__*/react.createElement("div", {
    className: Flamingo_Footer_style.social_media_small
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://facebook.com"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fab fa-facebook"
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://twitter.com"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://instagram.com"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fab fa-instagram"
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://youtube.com"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fab fa-youtube"
  })))))));
};

/* harmony default export */ const Flamingo_Footer = (Footer);
// EXTERNAL MODULE: ./src/pages/Flamingo/Home/index.js + 3 modules
var Flamingo_Home = __webpack_require__(242);
// EXTERNAL MODULE: ./src/pages/Flamingo/Services/index.js
var Services = __webpack_require__(435);
;// CONCATENATED MODULE: ./src/pages/Flamingo/db/home.js

/* harmony default export */ const home = ({
  header: {
    image: "".concat(PUBLIC_URL, "/home.jpeg"),
    heading: 'We are digital agency.',
    description: 'CREATIVE MIND, CREATIVE WORKS.',
    action: {
      text: 'getting started'
    },
    columns: [{
      icon: 'fas fa-paper-plane',
      heading: 'Future Concept.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-brain',
      heading: 'The Big Ideas.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-lightbulb',
      heading: 'Creative Solutions.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }]
  },
  sections: [{
    heading: 'Services.',
    description: 'our services for clients',
    isContainer: true,
    hasDefaultColumns: true,
    columns: [{
      icon: 'far fa-chart-bar',
      heading: 'Digital Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-pencil-alt',
      heading: 'UX Designs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-user-friends',
      heading: 'UI Designs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-globe',
      heading: 'Social Media',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'far fa-bookmark',
      heading: 'Design Concept',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-chart-area',
      heading: 'Media Pairing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }]
  }, {
    heading: 'Works.',
    description: "things we've made",
    action: {
      text: 'view all'
    },
    columnsType: 'works',
    columns: [{
      icon: 'far fa-chart-bar',
      heading: 'Digital Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-pencil-alt',
      heading: 'UX Designs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-user-friends',
      heading: 'UI Designs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-globe',
      heading: 'Social Media',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'far fa-bookmark',
      heading: 'Design Concept',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }, {
      icon: 'fas fa-chart-area',
      heading: 'Media Pairing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
    }]
  }]
});
;// CONCATENATED MODULE: ./src/pages/Flamingo/db/data.js
var _copyright;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var socialMedia = [{
  link: 'https://facebook.com',
  icon: 'fab fa-facebook'
}, {
  link: 'https://twitter.com',
  icon: 'fab fa-twitter'
}, {
  link: 'https://instagram.com',
  icon: 'fab fa-instagram'
}, {
  link: 'https://youtube.com',
  icon: 'fab fa-youtube'
}];
var inquiry = {
  image: PUBLIC_URL + '/background-footer.jpg',
  socialMedia: socialMedia,
  heading: 'Have any project in mind?',
  action: {
    text: 'make inquiry'
  }
};
var pages = {
  home: home
};
/* harmony default export */ const data = ({
  logo: {
    image: "".concat(PUBLIC_URL, "/logo.png"),
    route: base
  },
  menu: [{
    name: 'home',
    route: base
  }, {
    name: 'services',
    route: "".concat(base, "services/")
  }, {
    name: 'works',
    route: "".concat(base, "works/")
  }, {
    name: 'about',
    route: "".concat(base, "about/")
  }, {
    name: 'blog',
    route: "".concat(base, "blog/")
  }, {
    name: 'contact us',
    route: "".concat(base, "contact-us/"),
    isButton: true
  }],
  footer: {
    inquiry: inquiry,
    columns: [{
      logo: {
        image: "".concat(PUBLIC_URL, "/logo.png"),
        route: base
      },
      description: 'We are more than a digital agency'
    }, {
      menuName: 'Contact Us',
      items: [{
        link: 'tel:0727729068',
        text: '0727729068',
        icon: 'fas fa-phone-volume'
      }, {
        link: 'mailto:mocanu.alexandru20@yahoo.ro',
        text: 'mocanu.alexandru20@yahoo.ro',
        icon: 'far fa-envelope'
      }, {
        text: 'Constantza, Romania',
        icon: 'fas fa-map-marker-alt'
      }, {
        text: 'Monday to Friday',
        icon: 'far fa-calendar-alt'
      }]
    }, {
      menuName: 'Our Services',
      items: [{
        route: base,
        text: 'Link nb.1'
      }, {
        route: base,
        text: 'Link nb.2'
      }, {
        route: base,
        text: 'Link nb.3'
      }, {
        route: base,
        text: 'Link nb.4'
      }]
    }, {
      menuName: 'About Us',
      items: [{
        route: base + 'about',
        text: 'About'
      }, {
        route: base + 'blog',
        text: 'Blog'
      }, {
        route: base + 'works',
        text: 'Works'
      }, {
        route: base + 'contact-us',
        text: 'Contact us'
      }]
    }],
    copyright: (_copyright = {
      text: 'Copyright 2020 All rights reserved',
      privacy: {
        route: base + 'privacy',
        text: 'Privacy Policy'
      }
    }, _defineProperty(_copyright, "privacy", {
      route: base + 'terms',
      text: 'Terms of Use'
    }), _defineProperty(_copyright, "description", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'), _defineProperty(_copyright, "socialMedia", socialMedia), _copyright)
  }
});
;// CONCATENATED MODULE: ./src/pages/Flamingo/index.js









var routes = [{
  index: true,
  element: /*#__PURE__*/react.createElement(Flamingo_Home/* default */.Z, pages.home)
}, {
  path: "services/",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "works/",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "about/",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "blog/",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "contact-us/",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}];

var Flamingo = function Flamingo() {
  (0,react.useEffect)(function () {
    webfontloader_default().load({
      google: {
        families: ['Poppins:400,800', 'Roboto:400']
      }
    });
    __webpack_require__.e(/* import() */ 377).then(__webpack_require__.bind(__webpack_require__, 377));
  }, []);
  return /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(Flamingo_Navigation, {
    logo: data.logo,
    menu: data.menu
  }), /*#__PURE__*/react.createElement(react_router_dom/* Outlet */.j3, null), /*#__PURE__*/react.createElement(Flamingo_Footer, data.footer));
};

/* harmony default export */ const pages_Flamingo = (Flamingo);
;// CONCATENATED MODULE: ./src/pages/Routes.js





var Routes_routes = [{
  path: constants/* base */.u,
  element: /*#__PURE__*/react.createElement(Home/* default */.Z, null)
}, {
  path: "".concat(constants/* base */.u, "flamingo/"),
  element: /*#__PURE__*/react.createElement(pages_Flamingo, null),
  children: routes
}];

var Routes = function Routes() {
  return (0,react_router_dom/* useRoutes */.V$)(Routes_routes);
};

/* harmony default export */ const pages_Routes = (Routes);
;// CONCATENATED MODULE: ./src/defaults.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const defaults = ({});
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(pages_Routes, null)), document.getElementById('root'));
})();

__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUMsSUFERCxlQUVDLG9CQUFDLCtCQUFELE9BRkQsZUFHQyxvQkFBQyxlQUFELEVBQVl5QyxXQUFaLENBSEQsQ0FERDtBQU9BLENBbEJEOztBQW9CQSxxREFBZUcsUUFBZjs7QUMxREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1GLGFBQU0sR0FBRyxDQUNkO0FBQ0MxQixFQUFBQSxJQUFJLEVBQUVoRSxxQkFEUDtBQUVDMkYsRUFBQUEsT0FBTyxlQUFFLG9CQUFDLG1CQUFEO0FBRlYsQ0FEYyxFQUtkO0FBQ0MzQixFQUFBQSxJQUFJLFlBQUtoRSxxQkFBTCxjQURMO0FBRUMyRixFQUFBQSxPQUFPLGVBQUUsb0JBQUMsY0FBRCxPQUZWO0FBR0NsRyxFQUFBQSxRQUFRLEVBQUV3RyxNQUFjQTtBQUh6QixDQUxjLENBQWY7O0FBWUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUFNRixzQ0FBUyxDQUFDTixhQUFELENBQWY7QUFBQSxDQUFmOztBQUVBLG1EQUFlUSxNQUFmOztBQ3RCQTtBQUNBLCtDQUFlLEVBQUU7O0FDRGpCO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQUMsZ0JBQUEsZUFDQyxvQkFBQyxzQ0FBRCxxQkFDQyxvQkFBQyxZQUFELE9BREQsQ0FERCxFQUlDRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9CdXR0b24vc3R5bGUuc2Nzcz84MTE4Iiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9Ib21lL3N0eWxlLnNjc3M/ODMyYiIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0NvbHVtbi9zdHlsZS5zY3NzPzk2M2EiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Db2x1bW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvcGFnZXMvRmxhbWluZ28vSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9TZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9Ib21lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQnV0dG9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Db2x1bW4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vSW5xdWlyeS9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vTmF2aWdhdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vU2VhcmNoTW9kYWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9Ib21lL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy93ZWJmb250bG9hZGVyL3dlYmZvbnRsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9TZWFyY2hNb2RhbC9zdHlsZS5zY3NzP2Y0NjgiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9TZWFyY2hNb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL05hdmlnYXRpb24vc3R5bGUuc2Nzcz8wNTgwIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vTmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0lucXVpcnkvc3R5bGUuc2Nzcz9jMWU5Iiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vSW5xdWlyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvb3Rlci9zdHlsZS5zY3NzPzVhNGUiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIvaG9tZS5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9kYi9kYXRhLmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL3BhZ2VzL1JvdXRlcy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9kZWZhdWx0cy5jc3M/MjYwZCIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgQnV0dG9uID0gKHtcblx0dGV4dCA9ICcnLFxuXHRsaW5rID0gJycsXG5cdHNtYWxsID0gZmFsc2UsXG5cdGdob3N0ID0gZmFsc2UsXG5cdGNoaWxkcmVuLFxufSkgPT4gKFxuXHQ8TGlua1xuXHRcdHRvPXtsaW5rfVxuXHRcdGNsYXNzTmFtZT17IWdob3N0ID8gKHNtYWxsID8gJC5idXR0b25fc21hbGwgOiAkLmJ1dHRvbikgOiAnJ31cblx0PlxuXHRcdHt0ZXh0IHx8IGNoaWxkcmVufVxuXHQ8L0xpbms+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/ICcvZGVtb3MvJyA6ICcvJztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgQ29sdW1uID0gKHtcblx0aWNvbiA9IG51bGwsXG5cdGhlYWRpbmcgPSBudWxsLFxuXHRkZXNjcmlwdGlvbiA9IG51bGwsXG5cdGNsYXNzZXMgPSAnJyxcblx0aGFzU2VwYXJhdG9yID0gZmFsc2UsXG5cdGhvdmVyID0gbnVsbCxcblx0dHlwZSA9IG51bGwsXG59KSA9PiAoXG5cdDxiXG5cdFx0Y2xhc3NOYW1lPXtgJHtjbGFzc2VzfSAke1xuXHRcdFx0aG92ZXIgPT09ICdib3JkZXInXG5cdFx0XHRcdD8gJC5ob3Zlcl9iXG5cdFx0XHRcdDogaG92ZXIgPT09ICdiYWNrZ3JvdW5kJ1xuXHRcdFx0XHQ/ICQuaG92ZXJfYmdcblx0XHRcdFx0OiAnJ1xuXHRcdH1gfVxuXHQ+XG5cdFx0e2ljb24gJiYgPGkgY2xhc3NOYW1lPXtgJHtpY29ufSBpY29uLWdyZWVuIG1iLWRlZmF1bHRgfT48L2k+fVxuXHRcdHtoZWFkaW5nICYmIDxoMyBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e2hlYWRpbmd9PC9oMz59XG5cdFx0e2hhc1NlcGFyYXRvciAmJiA8YiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIiAvPn1cblx0XHR7ZGVzY3JpcHRpb24gJiYgPHA+e2Rlc2NyaXB0aW9ufTwvcD59XG5cdDwvYj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnfmMvRmxhbWluZ28vQnV0dG9uJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnfmMvRmxhbWluZ28vQ29sdW1uJztcblxuY29uc3QgRmxhbWluZ29Ib21lID0gKHsgaGVhZGVyID0ge30sIHNlY3Rpb25zID0gW10gfSkgPT4gKFxuXHQ8YiBjbGFzc05hbWU9eyQuaG9tZX0+XG5cdFx0PGJcblx0XHRcdGNsYXNzTmFtZT17JC5oZWFkZXJ9XG5cdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtoZWFkZXIuaW1hZ2V9KWAgfX1cblx0XHQ+XG5cdFx0XHQ8YiBjbGFzc05hbWU9XCJjb250YWluZXIgbWItbFwiPlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJ3aWR0aC01MFwiPlxuXHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1tXCI+e2hlYWRlci5kZXNjcmlwdGlvbn08L2g1PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtYi1tXCI+e2hlYWRlci5oZWFkaW5nfTwvaDE+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0bGluaz17aGVhZGVyLmFjdGlvbi5saW5rfVxuXHRcdFx0XHRcdFx0dGV4dD17aGVhZGVyLmFjdGlvbi50ZXh0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb2x1bW5zLTNcIj5cblx0XHRcdFx0XHR7aGVhZGVyLmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb2x1bW5cIiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0PENvbHVtblxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW59XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz1cImJnLWdyZXkgcC1tXCJcblx0XHRcdFx0XHRcdFx0XHRoYXNTZXBhcmF0b3Jcblx0XHRcdFx0XHRcdFx0XHRob3Zlcj1cImJvcmRlclwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHQ8L2I+XG5cdFx0e3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcblx0XHRcdDxiXG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7aW5kZXggJSAyID8gJ2JnLWdyZXknIDogJ2JnLWJsdWUnfSBzZWN0aW9uYH1cblx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdD5cblx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLWxcIj5cblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9e3NlY3Rpb24uYWN0aW9uID8gJ2ZsZXgtYmV0d2VlbicgOiAnJ30+XG5cdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0e3NlY3Rpb24uaGVhZGluZ31cblx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0PGg1PntzZWN0aW9uLmRlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0XHR7c2VjdGlvbi5hY3Rpb24gJiYgKFxuXHRcdFx0XHRcdFx0XHQ8Yj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtzZWN0aW9uLmFjdGlvbi50ZXh0fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGluaz17c2VjdGlvbi5hY3Rpb24ubGlua31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0PC9iPlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9e3NlY3Rpb24uaXNDb250YWluZXIgPyAnY29udGFpbmVyJyA6ICcnfT5cblx0XHRcdFx0XHR7c2VjdGlvbi5oYXNEZWZhdWx0Q29sdW1ucyA/IChcblx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbi5jb2x1bW5zLm1hcCgoY29sdW1uLCBrZXkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb2x1bW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmNvbHVtbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz1cImJnLWdyZXkgcC1tXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aG92ZXI9XCJiYWNrZ3JvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0KSA6IHNlY3Rpb24uY29sdW1uc1R5cGUgPT09ICd3b3JrcycgPyAoXG5cdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9eyQud29ya30+XG5cdFx0XHRcdFx0XHRcdHtzZWN0aW9uLmNvbHVtbnMubWFwKChjb2x1bW4sIGtleSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17JC53b3JrfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb2x1bW4gey4uLmNvbHVtbn0gdHlwZT1cIndvcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHQpKX1cblx0PC9iPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmxhbWluZ29Ib21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiA8Yj5zZXJ2aWNlczwvYj47XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG5cdDxiPlxuXHRcdGhvbWVcblx0XHQ8TGluayB0bz17YCR7YmFzZX1mbGFtaW5nby9gfT5GbGFtaW5nbzwvTGluaz5cblx0PC9iPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwYW1rdzl3alpVM1o4bk93OFZGe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjJweCBzb2xpZCB2YXIoLS10ZWFsKTtib3JkZXItcmFkaXVzOnZhcigtLXJhZGl1cyk7Y29sb3I6I2ZmZjtmb250LWZhbWlseTp2YXIoLS1mYW1pbHktYWNjZW50KTtmb250LXdlaWdodDo2MDA7cGFkZGluZzp2YXIoLS1wYWRkaW5nKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsY29sb3J9LmFwYW1rdzl3alpVM1o4bk93OFZGOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGVhbCk7Y29sb3I6dmFyKC0tZ3JleSl9LkhWY190cDQ4ajNtNENrbnZlS25Ne3BhZGRpbmc6dmFyKC0tcGFkZGluZy1zbWFsbCk7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9CdXR0b24vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFLQyw0QkFBQSxDQUpBLDRCQUFBLENBU0EsMkJBQUEsQ0FOQSxVQUFBLENBSUEsZ0NBQUEsQ0FDQSxlQUFBLENBUEEsc0JBQUEsQ0FDQSx3QkFBQSxDQUdBLDRCQUFBLENBQ0EsMENBR0EsQ0FFQSw0QkFDQyw0QkFBQSxDQUNBLGlCQUFBLENBSUYsc0JBRUMsNEJBQUEsQ0FDQSx5QkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnV0dG9uIHtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZmFtaWx5LWFjY2VudCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwpO1xcblxcdFxcdGNvbG9yOiB2YXIoLS1ncmV5KTtcXG5cXHR9XFxufVxcblxcbi5idXR0b25fc21hbGwge1xcblxcdGNvbXBvc2VzOiBidXR0b247XFxuXFx0cGFkZGluZzogdmFyKC0tcGFkZGluZy1zbWFsbCk7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJ1dHRvblwiOiBcImFwYW1rdzl3alpVM1o4bk93OFZGXCIsXG5cdFwiYnV0dG9uX3NtYWxsXCI6IFwiSFZjX3RwNDhqM200Q2tudmVLbk0gYXBhbWt3OXdqWlUzWjhuT3c4VkZcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaktoOUFnVGcybWE1c3VfemJSSVh7Ym9yZGVyOjNweCBzb2xpZCB0cmFuc3BhcmVudDt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Ym9yZGVyLWNvbG9yfS5qS2g5QWdUZzJtYTVzdV96YlJJWDpob3Zlcntib3JkZXItY29sb3I6dmFyKC0tdGVhbCl9LmQ3dGFsODA0aDlPZTQ3Z3VvcHNye2JvcmRlci1ib3R0b206NHB4IHNvbGlkIHZhcigtLXdoaXRlKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcn0uZDd0YWw4MDRoOU9lNDdndW9wc3IgKnt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3J9LmQ3dGFsODA0aDlPZTQ3Z3VvcHNyOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGVhbCl9LmQ3dGFsODA0aDlPZTQ3Z3VvcHNyOmhvdmVyICp7Y29sb3I6dmFyKC0tZ3JleSl9LnM5TmpURENhbzZaYmhkTUJ2MzlMe2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtc2l6ZTpjb3Zlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Db2x1bW4vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFHQyw0QkFBQSxDQUZBLDRCQUFBLENBQ0EsZ0NBQ0EsQ0FFQSw0QkFDQyx3QkFBQSxDQUlGLHNCQUdDLG9DQUFBLENBRkEsNEJBQUEsQ0FDQSxvQ0FDQSxDQUVBLHdCQUNDLDRCQUFBLENBQ0EseUJBQUEsQ0FHRCw0QkFDQyw0QkFBQSxDQUVBLDhCQUNDLGlCQUFBLENBS0gsc0JBQ0MsdUJBQUEsQ0FDQSxxQkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG92ZXJfYiB7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGJvcmRlci1jb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG5cXG4uaG92ZXJfYmcge1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXG5cXHQqIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHRcXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcXG5cXHR9XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuXFxuXFx0XFx0KiB7XFxuXFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi53b3JrIHtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG92ZXJfYlwiOiBcImpLaDlBZ1RnMm1hNXN1X3piUklYXCIsXG5cdFwiaG92ZXJfYmdcIjogXCJkN3RhbDgwNGg5T2U0N2d1b3BzclwiLFxuXHRcIndvcmtcIjogXCJzOU5qVERDYW82WmJoZE1CdjM5TFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BY1E2bjlMdkZfajFnQmpkOU5hWiBoNXtjb2xvcjp2YXIoLS13aGl0ZSl9LkkzcVRlTzdndVlZTXBvNV9PQU9Me2ZvbnQtc2l6ZTp2YXIoLS1zaXplLWwpO21hcmdpbi1yaWdodDp2YXIoLS1zcGFjZS1kZWZhdWx0KX0uUGhRcmdEanhnVXpkMmVBTHZBRkx7ZmxleC1ncm93OjF9LkFjUTZuOUx2Rl9qMWdCamQ5TmFaIC5QaFFyZ0RqeGdVemQyZUFMdkFGTDpmaXJzdC1jaGlsZHtmbGV4LWdyb3c6M30uQWNRNm45THZGX2oxZ0JqZDlOYVogLmxMWTB6S3BWVXBleWl3NldoMkR6e2Rpc3BsYXk6ZmxleH0ud0xQVlVEajllNHFCcFlVYmx1dkYgYXttYXJnaW4tbGVmdDp2YXIoLS1zcGFjZS1tKTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LlI3SlFUeV9xbGNpTTVtcm9BeFVLIGF7Zm9udC1zaXplOnZhcigtLXNpemUtbCk7bWFyZ2luOjAgY2FsYyh2YXIoLS1zcGFjZS1kZWZhdWx0KS8yKTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXR9LlI3SlFUeV9xbGNpTTVtcm9BeFVLIGE6aG92ZXJ7Y29sb3I6dmFyKC0tdGVhbCl9Lmthbjd5Q2FFRkFLYkJ0NDRlYUN0IGltZ3t3aWR0aDoxMDBweH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Gb290ZXIvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFDQyxrQkFBQSxDQUVELHNCQUNDLHVCQUFBLENBQ0EsaUNBQUEsQ0FFRCxzQkFDQyxXQUFBLENBRUQsd0RBQ0MsV0FBQSxDQUVELDRDQUNDLFlBQUEsQ0FFRCx3QkFDQywwQkFBQSxDQUNBLHdCQUFBLENBRUQsd0JBRUMsdUJBQUEsQ0FEQSxxQ0FBQSxDQUVBLDhCQUFBLENBRUEsOEJBQ0MsaUJBQUEsQ0FHRiwwQkFDQyxXQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIgaDUge1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcbi5pY29uX3doaXRlIHtcXG5cXHRmb250LXNpemU6IHZhcigtLXNpemUtbCk7XFxuXFx0bWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG59XFxuLm1lbnUge1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuLmZvb3RlciAubWVudTpmaXJzdC1jaGlsZCB7XFxuXFx0ZmxleC1ncm93OiAzO1xcbn1cXG4uZm9vdGVyIC5tZW51cyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmNvcHlyaWdodCBhIHtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2UtbSk7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnNvY2lhbF9tZWRpYV9zbWFsbCBhIHtcXG5cXHRtYXJnaW46IDAgY2FsYyh2YXIoLS1zcGFjZS1kZWZhdWx0KSAvIDIpO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS1sKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG4ubG9nbyBpbWcge1xcblxcdHdpZHRoOiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiQWNRNm45THZGX2oxZ0JqZDlOYVpcIixcblx0XCJpY29uX3doaXRlXCI6IFwiSTNxVGVPN2d1WVlNcG81X09BT0xcIixcblx0XCJtZW51XCI6IFwiUGhRcmdEanhnVXpkMmVBTHZBRkxcIixcblx0XCJtZW51c1wiOiBcImxMWTB6S3BWVXBleWl3NldoMkR6XCIsXG5cdFwiY29weXJpZ2h0XCI6IFwid0xQVlVEajllNHFCcFlVYmx1dkZcIixcblx0XCJzb2NpYWxfbWVkaWFfc21hbGxcIjogXCJSN0pRVHlfcWxjaU01bXJvQXhVS1wiLFxuXHRcImxvZ29cIjogXCJrYW43eUNhRUZBS2JCdDQ0ZWFDdFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BdkZZZDFZcmtSU1RxWGNOV3h6YSBhe2ZvbnQtc2l6ZTp2YXIoLS1zaXplLXhsKTttYXJnaW46MCB2YXIoLS1zcGFjZS1kZWZhdWx0KTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXR9LkF2RllkMVlya1JTVHFYY05XeHphIGE6aG92ZXJ7Y29sb3I6dmFyKC0tdGVhbCl9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vSW5xdWlyeS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUVDLHdCQUFBLENBREEsNkJBQUEsQ0FFQSw4QkFBQSxDQUVBLDhCQUNDLGlCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zb2NpYWxfbWVkaWEgYSB7XFxuXFx0bWFyZ2luOiAwIHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS14bCk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRlYWwpO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic29jaWFsX21lZGlhXCI6IFwiQXZGWWQxWXJrUlNUcVhjTld4emFcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSF9teTFJVFc3SEpBNW9yeDdtQU57YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2spO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtsZWZ0OjA7cGFkZGluZzp2YXIoLS1zcGFjZS1kZWZhdWx0KSB2YXIoLS1zcGFjZS1tKTtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3RvcDowfS56ekJfcVQxTV9uU21uMUxibHdfUSBpbWd7d2lkdGg6MTUwcHh9LmpSV3NsZ0gzSWtSSzRJa1BXeVNRe2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXh9LkI1cXNBRVZmanBLTmFmcmdjVktBe2ZvbnQtZmFtaWx5OnZhcigtLWZhbWlseS1hY2NlbnQpO2ZvbnQtd2VpZ2h0OjgwMDtwYWRkaW5nOnZhcigtLXBhZGRpbmcpO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uQjVxc0FFVmZqcEtOYWZyZ2NWS0E6YmVmb3Jle2JvcmRlci1ib3R0b206NHB4IHNvbGlkIHZhcigtLXRlYWwpO2JvdHRvbTotMnB4O2NvbnRlbnQ6XFxcIlxcXCI7bGVmdDowO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O3dpZHRoOjEwMCV9LkI1cXNBRVZmanBLTmFmcmdjVktBOmhvdmVyOmJlZm9yZXtvcGFjaXR5OjF9LmVId2JfZlJSV3Y5ZFY4MnJoUVZIe30uZUh3Yl9mUlJXdjlkVjgycmhRVkg6YmVmb3Jle29wYWNpdHk6MX0uVWR5VXlybDNudGhZVlpxWVZtMmZ7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzp2YXIoLS1zcGFjZS1kZWZhdWx0KTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3J9LlVkeVV5cmwzbnRoWVZacVlWbTJmOmhvdmVye2NvbG9yOnZhcigtLXRlYWwpfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL05hdmlnYXRpb24vc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFRQyxrQkFBQSxDQUhBLDZCQUFBLENBRUEsWUFBQSxDQUVBLDZCQUFBLENBTEEsTUFBQSxDQUVBLDJDQUFBLENBTEEsY0FBQSxDQUVBLE9BQUEsQ0FEQSxLQU9BLENBR0QsMEJBQ0MsV0FBQSxDQUdELHNCQUVDLGtCQUFBLENBREEsWUFDQSxDQUdELHNCQUdDLGdDQUFBLENBQ0EsZUFBQSxDQUZBLHNCQUFBLENBR0EsaUJBQUEsQ0FKQSx3QkFJQSxDQUVBLDZCQU9DLG1DQUFBLENBRkEsV0FBQSxDQUpBLFVBQUEsQ0FFQSxNQUFBLENBS0EsU0FBQSxDQU5BLGlCQUFBLENBRUEsT0FBQSxDQUtBLDRCQUFBLENBQ0EsMkJBQUEsQ0FKQSxVQUlBLENBR0QsbUNBQ0MsU0FBQSxDQUlGLHNCQUNDLENBRUEsNkJBQ0MsU0FBQSxDQUlGLHNCQUlDLGNBQUEsQ0FIQSw0QkFBQSxDQUNBLDRCQUFBLENBQ0EseUJBQ0EsQ0FFQSw0QkFDQyxpQkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2aWdhdGlvbiB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1zcGFjZS1kZWZhdWx0KSB2YXIoLS1zcGFjZS1tKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcblxcdHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLm1lbnUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfaXRlbSB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZmFtaWx5LWFjY2VudCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFx0JjpiZWZvcmUge1xcblxcdFxcdGNvbnRlbnQ6ICcnO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGJvdHRvbTogLTJweDtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tdGVhbCk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHRcXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcblxcdH1cXG5cXG5cXHQmOmhvdmVyOmJlZm9yZSB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbi5tZW51X2l0ZW1fYWN0aXZlIHtcXG5cXHRjb21wb3NlczogbWVudV9pdGVtO1xcblxcblxcdCY6YmVmb3JlIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuLnNlYXJjaF9pY29uIHtcXG5cXHRwYWRkaW5nOiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRlYWwpO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibmF2aWdhdGlvblwiOiBcIkhfbXkxSVRXN0hKQTVvcng3bUFOXCIsXG5cdFwibG9nb1wiOiBcInp6Ql9xVDFNX25TbW4xTGJsd19RXCIsXG5cdFwibWVudVwiOiBcImpSV3NsZ0gzSWtSSzRJa1BXeVNRXCIsXG5cdFwibWVudV9pdGVtXCI6IFwiQjVxc0FFVmZqcEtOYWZyZ2NWS0FcIixcblx0XCJtZW51X2l0ZW1fYWN0aXZlXCI6IFwiZUh3Yl9mUlJXdjlkVjgycmhRVkggQjVxc0FFVmZqcEtOYWZyZ2NWS0FcIixcblx0XCJzZWFyY2hfaWNvblwiOiBcIlVkeVV5cmwzbnRoWVZacVlWbTJmXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkM0MVVlNThIVW9jZ052ZnFtd0RTe2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW92ZXJsYXkpO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2xlZnQ6MDtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3RvcDowfS5MY3gwRXd1RXBzYzQ2aTJrMVQ1ZHtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6dmFyKC0tc2l6ZS14bCk7bGluZS1oZWlnaHQ6MTtwYWRkaW5nOnZhcigtLXNwYWNlLWRlZmF1bHQpO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OnZhcigtLXNwYWNlLW0pO3RvcDp2YXIoLS1zcGFjZS1kZWZhdWx0KTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3J9LkxjeDBFd3VFcHNjNDZpMmsxVDVkOmhvdmVye2NvbG9yOnZhcigtLXRlYWwpfS5TUkFNcFpzanRGbURZRXFQeTlkdntmbGV4LWdyb3c6MTttYXgtd2lkdGg6NjAwcHg7cG9zaXRpb246cmVsYXRpdmV9LkM0MVVlNThIVW9jZ052ZnFtd0RTIGlucHV0e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0td2hpdGUpO2ZvbnQtc2l6ZTp2YXIoLS1zaXplLWwpO3BhZGRpbmc6dmFyKC0tc3BhY2UtZGVmYXVsdCkgY2FsYyh2YXIoLS1zcGFjZS1kZWZhdWx0KSArIHZhcigtLXNwYWNlLW0pKSB2YXIoLS1zcGFjZS1kZWZhdWx0KSB2YXIoLS1zcGFjZS1kZWZhdWx0KTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Ym9yZGVyLWNvbG9yO3dpZHRoOjEwMCV9LkM0MVVlNThIVW9jZ052ZnFtd0RTIGlucHV0OmZvY3Vze2JvcmRlcjowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXRlYWwpfS5DNDFVZTU4SFVvY2dOdmZxbXdEUyBpbnB1dC5jMms5ZlVyU2duY1dzSUpHU3poSHtvdXRsaW5lOm5vbmV9LkM0MVVlNThIVW9jZ052ZnFtd0RTIGlucHV0OmZvY3VzLXZpc2libGV7b3V0bGluZTpub25lfS5xMnJjenkyUVRxRHJRdW1IbHVsZ3tib3R0b206dmFyKC0tc3BhY2UtZGVmYXVsdCk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOnZhcigtLXNpemUtbCk7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tc3BhY2UtZGVmYXVsdCk7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OmNvbG9yfS5xMnJjenkyUVRxRHJRdW1IbHVsZzpob3Zlcntjb2xvcjp2YXIoLS10ZWFsKX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9TZWFyY2hNb2RhbC9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQVNDLGtCQUFBLENBSEEsK0JBQUEsQ0FIQSxRQUFBLENBSUEsWUFBQSxDQUNBLHNCQUFBLENBSkEsTUFBQSxDQUhBLGNBQUEsQ0FJQSxPQUFBLENBSEEsS0FPQSxDQUdELHNCQU9DLGNBQUEsQ0FGQSx3QkFBQSxDQUNBLGFBQUEsQ0FGQSw0QkFBQSxDQUhBLGlCQUFBLENBRUEsb0JBQUEsQ0FEQSx3QkFBQSxDQU1BLDRCQUFBLENBQ0EseUJBQUEsQ0FFQSw0QkFDQyxpQkFBQSxDQUlGLHNCQUVDLFdBQUEsQ0FEQSxlQUFBLENBRUEsaUJBQUEsQ0FHRCw0QkFTQyw0QkFBQSxDQUZBLFFBQUEsQ0FDQSxvQ0FBQSxDQU5BLHVCQUFBLENBSUEsa0hBQUEsQ0FLQSw0QkFBQSxDQUNBLGdDQUFBLENBWEEsVUFXQSxDQUVBLGtDQUNDLFFBQUEsQ0FDQSxtQ0FBQSxDQUVELGlEQUNDLFlBQUEsQ0FERCwwQ0FDQyxZQUFBLENBSUYsc0JBSUMsMkJBQUEsQ0FHQSxjQUFBLENBTEEsdUJBQUEsQ0FEQSxpQkFBQSxDQUVBLDBCQUFBLENBRUEsNEJBQUEsQ0FDQSx5QkFDQSxDQUVBLDRCQUNDLGlCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWFyY2gge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2Uge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcblxcdHJpZ2h0OiB2YXIoLS1zcGFjZS1tKTtcXG5cXHRwYWRkaW5nOiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG5cXHRmb250LXNpemU6IHZhcigtLXNpemUteGwpO1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG5cXG4uc2VhcmNoX2lucHV0IHtcXG5cXHRtYXgtd2lkdGg6IDYwMHB4O1xcblxcdGZsZXgtZ3JvdzogMTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS1sKTtcXG5cXHRwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtZGVmYXVsdCk7XFxuXFx0cGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcblxcdHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UtZGVmYXVsdCk7XFxuXFx0cGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1zcGFjZS1kZWZhdWx0KSArIHZhcigtLXNwYWNlLW0pKTtcXG5cXHRib3JkZXI6IDAgbm9uZTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvcjtcXG5cXG5cXHQmOmZvY3VzIHtcXG5cXHRcXHRib3JkZXI6IDAgbm9uZTtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGVhbCk7XFxuXFx0fVxcblxcdCY6Zm9jdXMtdmlzaWJsZSB7XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHR9XFxufVxcblxcbi5zZWFyY2hfaWNvbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS1sKTtcXG5cXHRyaWdodDogdmFyKC0tc3BhY2UtZGVmYXVsdCk7XFxuXFx0Ym90dG9tOiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXRlYWwpO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2VhcmNoXCI6IFwiQzQxVWU1OEhVb2NnTnZmcW13RFNcIixcblx0XCJjbG9zZVwiOiBcIkxjeDBFd3VFcHNjNDZpMmsxVDVkXCIsXG5cdFwic2VhcmNoX2lucHV0XCI6IFwiU1JBTXBac2p0Rm1EWUVxUHk5ZHZcIixcblx0XCJmb2N1cy12aXNpYmxlXCI6IFwiYzJrOWZVclNnbmNXc0lKR1N6aEhcIixcblx0XCJzZWFyY2hfaWNvblwiOiBcInEycmN6eTJRVHFEclF1bUhsdWxnXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5QX0ZIX2NBUTE4VGZMdEdQcmlKe2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtwYWRkaW5nOmNhbGModmFyKC0tc3BhY2UtbCkqMikgMCB2YXIoLS1zcGFjZS1sKX0uTnZOeXltU1A5aXRhUzczaFVNM3d7ZGlzcGxheTpmbGV4O2hlaWdodDo1MDBweH0ub1djRzBzUzhmMExKU0g1RzZZQ2d7ZmxleC1ncm93OjE7aGVpZ2h0OjEwMCU7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgtZ3Jvd30ub1djRzBzUzhmMExKU0g1RzZZQ2c6aG92ZXJ7ZmxleC1ncm93OjN9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL0hvbWUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFFQyx1QkFBQSxDQUNBLHFCQUFBLENBRkEsK0NBRUEsQ0FHRCxzQkFDQyxZQUFBLENBQ0EsWUFBQSxDQUdELHNCQUNDLFdBQUEsQ0FDQSxXQUFBLENBRUEsNEJBQUEsQ0FDQSw2QkFBQSxDQUVBLDRCQUNDLFdBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuXFx0cGFkZGluZzogY2FsYyh2YXIoLS1zcGFjZS1sKSAqIDIpIDAgdmFyKC0tc3BhY2UtbCk7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi53b3JrcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4ud29yayB7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBmbGV4LWdyb3c7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0ZmxleC1ncm93OiAzO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiblBfRkhfY0FRMThUZkx0R1ByaUpcIixcblx0XCJ3b3Jrc1wiOiBcIk52Tnl5bVNQOWl0YVM3M2hVTTN3XCIsXG5cdFwid29ya1wiOiBcIm9XY0cwc1M4ZjBMSlNINUc2WUNnXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbT1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxyPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24geShhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1pZighYWEpdGhyb3cgRXJyb3IoeSgyMjcpKTt2YXIgYmE9bmV3IFNldCxjYT17fTtmdW5jdGlvbiBkYShhLGIpe2VhKGEsYik7ZWEoYStcIkNhcHR1cmVcIixiKX1cbmZ1bmN0aW9uIGVhKGEsYil7Y2FbYV09Yjtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWJhLmFkZChiW2FdKX1cbnZhciBmYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksaGE9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLGlhPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG5qYT17fSxrYT17fTtmdW5jdGlvbiBsYShhKXtpZihpYS5jYWxsKGthLGEpKXJldHVybiEwO2lmKGlhLmNhbGwoamEsYSkpcmV0dXJuITE7aWYoaGEudGVzdChhKSlyZXR1cm4ga2FbYV09ITA7amFbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gbWEoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBuYShhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxtYShhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIEIoYSxiLGMsZCxlLGYsZyl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWY7dGhpcy5yZW1vdmVFbXB0eVN0cmluZz1nfXZhciBEPXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMCwhMSxhLG51bGwsITEsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO0RbYl09bmV3IEIoYiwxLCExLGFbMV0sbnVsbCwhMSwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMiwhMSxhLG51bGwsITEsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZGlzYWJsZVJlbW90ZVBsYXliYWNrIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITAsYSxudWxsLCExLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDQsITEsYSxudWxsLCExLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNiwhMSxhLG51bGwsITEsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTt2YXIgb2E9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBwYShhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxcbnBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLG51bGwsITEsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EscGEpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EscGEpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbkQueGxpbmtIcmVmPW5ldyBCKFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCwhMSk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCwhMCl9KTtcbmZ1bmN0aW9uIHFhKGEsYixjLGQpe3ZhciBlPUQuaGFzT3duUHJvcGVydHkoYik/RFtiXTpudWxsO3ZhciBmPW51bGwhPT1lPzA9PT1lLnR5cGU6ZD8hMTohKDI8Yi5sZW5ndGgpfHxcIm9cIiE9PWJbMF0mJlwiT1wiIT09YlswXXx8XCJuXCIhPT1iWzFdJiZcIk5cIiE9PWJbMV0/ITE6ITA7Znx8KG5hKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9sYShiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSkpfVxudmFyIHJhPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELHNhPTYwMTAzLHRhPTYwMTA2LHVhPTYwMTA3LHdhPTYwMTA4LHhhPTYwMTE0LHlhPTYwMTA5LHphPTYwMTEwLEFhPTYwMTEyLEJhPTYwMTEzLENhPTYwMTIwLERhPTYwMTE1LEVhPTYwMTE2LEZhPTYwMTIxLEdhPTYwMTI4LEhhPTYwMTI5LElhPTYwMTMwLEphPTYwMTMxO1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIEU9U3ltYm9sLmZvcjtzYT1FKFwicmVhY3QuZWxlbWVudFwiKTt0YT1FKFwicmVhY3QucG9ydGFsXCIpO3VhPUUoXCJyZWFjdC5mcmFnbWVudFwiKTt3YT1FKFwicmVhY3Quc3RyaWN0X21vZGVcIik7eGE9RShcInJlYWN0LnByb2ZpbGVyXCIpO3lhPUUoXCJyZWFjdC5wcm92aWRlclwiKTt6YT1FKFwicmVhY3QuY29udGV4dFwiKTtBYT1FKFwicmVhY3QuZm9yd2FyZF9yZWZcIik7QmE9RShcInJlYWN0LnN1c3BlbnNlXCIpO0NhPUUoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO0RhPUUoXCJyZWFjdC5tZW1vXCIpO0VhPUUoXCJyZWFjdC5sYXp5XCIpO0ZhPUUoXCJyZWFjdC5ibG9ja1wiKTtFKFwicmVhY3Quc2NvcGVcIik7R2E9RShcInJlYWN0Lm9wYXF1ZS5pZFwiKTtIYT1FKFwicmVhY3QuZGVidWdfdHJhY2VfbW9kZVwiKTtJYT1FKFwicmVhY3Qub2Zmc2NyZWVuXCIpO0phPUUoXCJyZWFjdC5sZWdhY3lfaGlkZGVuXCIpfVxudmFyIEthPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBMYShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9S2EmJmFbS2FdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9dmFyIE1hO2Z1bmN0aW9uIE5hKGEpe2lmKHZvaWQgMD09PU1hKXRyeXt0aHJvdyBFcnJvcigpO31jYXRjaChjKXt2YXIgYj1jLnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO01hPWImJmJbMV18fFwiXCJ9cmV0dXJuXCJcXG5cIitNYSthfXZhciBPYT0hMTtcbmZ1bmN0aW9uIFBhKGEsYil7aWYoIWF8fE9hKXJldHVyblwiXCI7T2E9ITA7dmFyIGM9RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9dm9pZCAwO3RyeXtpZihiKWlmKGI9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO30sT2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwicHJvcHNcIix7c2V0OmZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9fSksXCJvYmplY3RcIj09PXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0LmNvbnN0cnVjdCl7dHJ5e1JlZmxlY3QuY29uc3RydWN0KGIsW10pfWNhdGNoKGspe3ZhciBkPWt9UmVmbGVjdC5jb25zdHJ1Y3QoYSxbXSxiKX1lbHNle3RyeXtiLmNhbGwoKX1jYXRjaChrKXtkPWt9YS5jYWxsKGIucHJvdG90eXBlKX1lbHNle3RyeXt0aHJvdyBFcnJvcigpO31jYXRjaChrKXtkPWt9YSgpfX1jYXRjaChrKXtpZihrJiZkJiZcInN0cmluZ1wiPT09dHlwZW9mIGsuc3RhY2spe2Zvcih2YXIgZT1rLnN0YWNrLnNwbGl0KFwiXFxuXCIpLFxuZj1kLnN0YWNrLnNwbGl0KFwiXFxuXCIpLGc9ZS5sZW5ndGgtMSxoPWYubGVuZ3RoLTE7MTw9ZyYmMDw9aCYmZVtnXSE9PWZbaF07KWgtLTtmb3IoOzE8PWcmJjA8PWg7Zy0tLGgtLSlpZihlW2ddIT09ZltoXSl7aWYoMSE9PWd8fDEhPT1oKXtkbyBpZihnLS0saC0tLDA+aHx8ZVtnXSE9PWZbaF0pcmV0dXJuXCJcXG5cIitlW2ddLnJlcGxhY2UoXCIgYXQgbmV3IFwiLFwiIGF0IFwiKTt3aGlsZSgxPD1nJiYwPD1oKX1icmVha319fWZpbmFsbHl7T2E9ITEsRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9Y31yZXR1cm4oYT1hP2EuZGlzcGxheU5hbWV8fGEubmFtZTpcIlwiKT9OYShhKTpcIlwifVxuZnVuY3Rpb24gUWEoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDU6cmV0dXJuIE5hKGEudHlwZSk7Y2FzZSAxNjpyZXR1cm4gTmEoXCJMYXp5XCIpO2Nhc2UgMTM6cmV0dXJuIE5hKFwiU3VzcGVuc2VcIik7Y2FzZSAxOTpyZXR1cm4gTmEoXCJTdXNwZW5zZUxpc3RcIik7Y2FzZSAwOmNhc2UgMjpjYXNlIDE1OnJldHVybiBhPVBhKGEudHlwZSwhMSksYTtjYXNlIDExOnJldHVybiBhPVBhKGEudHlwZS5yZW5kZXIsITEpLGE7Y2FzZSAyMjpyZXR1cm4gYT1QYShhLnR5cGUuX3JlbmRlciwhMSksYTtjYXNlIDE6cmV0dXJuIGE9UGEoYS50eXBlLCEwKSxhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBSYShhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIHVhOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIHRhOnJldHVyblwiUG9ydGFsXCI7Y2FzZSB4YTpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSB3YTpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIEJhOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIENhOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHphOnJldHVybihhLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIHlhOnJldHVybihhLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIEFhOnZhciBiPWEucmVuZGVyO2I9Yi5kaXNwbGF5TmFtZXx8Yi5uYW1lfHxcIlwiO1xucmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcIilcIjpcIkZvcndhcmRSZWZcIik7Y2FzZSBEYTpyZXR1cm4gUmEoYS50eXBlKTtjYXNlIEZhOnJldHVybiBSYShhLl9yZW5kZXIpO2Nhc2UgRWE6Yj1hLl9wYXlsb2FkO2E9YS5faW5pdDt0cnl7cmV0dXJuIFJhKGEoYikpfWNhdGNoKGMpe319cmV0dXJuIG51bGx9ZnVuY3Rpb24gU2EoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJ1bmRlZmluZWRcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fWZ1bmN0aW9uIFRhKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBVYShhKXt2YXIgYj1UYShhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gVmEoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVVhKGEpKX1mdW5jdGlvbiBXYShhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9VGEoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX1mdW5jdGlvbiBYYShhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19XG5mdW5jdGlvbiBZYShhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbSh7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9U2EobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiAkYShhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnFhKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiBhYihhLGIpeyRhKGEsYik7dmFyIGM9U2EoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/YmIoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmYmIoYSxiLnR5cGUsU2EoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBjYihhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSEhYS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkO1wiXCIhPT1jJiYoYS5uYW1lPWMpfVxuZnVuY3Rpb24gYmIoYSxiLGMpe2lmKFwibnVtYmVyXCIhPT1ifHxYYShhLm93bmVyRG9jdW1lbnQpIT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9ZnVuY3Rpb24gZGIoYSl7dmFyIGI9XCJcIjthYS5DaGlsZHJlbi5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7bnVsbCE9YSYmKGIrPWEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZWIoYSxiKXthPW0oe2NoaWxkcmVuOnZvaWQgMH0sYik7aWYoYj1kYihiLmNoaWxkcmVuKSlhLmNoaWxkcmVuPWI7cmV0dXJuIGF9XG5mdW5jdGlvbiBmYihhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrU2EoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIGdiKGEsYil7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl0aHJvdyBFcnJvcih5KDkxKSk7cmV0dXJuIG0oe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gaGIoYSxiKXt2YXIgYz1iLnZhbHVlO2lmKG51bGw9PWMpe2M9Yi5jaGlsZHJlbjtiPWIuZGVmYXVsdFZhbHVlO2lmKG51bGwhPWMpe2lmKG51bGwhPWIpdGhyb3cgRXJyb3IoeSg5MikpO2lmKEFycmF5LmlzQXJyYXkoYykpe2lmKCEoMT49Yy5sZW5ndGgpKXRocm93IEVycm9yKHkoOTMpKTtjPWNbMF19Yj1jfW51bGw9PWImJihiPVwiXCIpO2M9Yn1hLl93cmFwcGVyU3RhdGU9e2luaXRpYWxWYWx1ZTpTYShjKX19XG5mdW5jdGlvbiBpYihhLGIpe3ZhciBjPVNhKGIudmFsdWUpLGQ9U2EoYi5kZWZhdWx0VmFsdWUpO251bGwhPWMmJihjPVwiXCIrYyxjIT09YS52YWx1ZSYmKGEudmFsdWU9YyksbnVsbD09Yi5kZWZhdWx0VmFsdWUmJmEuZGVmYXVsdFZhbHVlIT09YyYmKGEuZGVmYXVsdFZhbHVlPWMpKTtudWxsIT1kJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitkKX1mdW5jdGlvbiBqYihhKXt2YXIgYj1hLnRleHRDb250ZW50O2I9PT1hLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlJiZcIlwiIT09YiYmbnVsbCE9PWImJihhLnZhbHVlPWIpfXZhciBrYj17aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixtYXRobWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsc3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn07XG5mdW5jdGlvbiBsYihhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fWZ1bmN0aW9uIG1iKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9sYihiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBuYixvYj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoYS5uYW1lc3BhY2VVUkkhPT1rYi5zdmd8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXtuYj1uYnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuYi5pbm5lckhUTUw9XCI8c3ZnPlwiK2IudmFsdWVPZigpLnRvU3RyaW5nKCkrXCI8L3N2Zz5cIjtmb3IoYj1uYi5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBwYihhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHFiPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHJiPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhxYikuZm9yRWFjaChmdW5jdGlvbihhKXtyYi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3FiW2JdPXFiW2FdfSl9KTtmdW5jdGlvbiBzYihhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8cWIuaGFzT3duUHJvcGVydHkoYSkmJnFiW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIHRiKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXNiKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHViPW0oe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiB2YihhLGIpe2lmKGIpe2lmKHViW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IoeSgxMzcsYSkpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgRXJyb3IoeSg2MCkpO2lmKCEoXCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IoeSg2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgRXJyb3IoeSg2MikpO319XG5mdW5jdGlvbiB3YihhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19ZnVuY3Rpb24geGIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfXZhciB5Yj1udWxsLHpiPW51bGwsQWI9bnVsbDtcbmZ1bmN0aW9uIEJiKGEpe2lmKGE9Q2IoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5Yil0aHJvdyBFcnJvcih5KDI4MCkpO3ZhciBiPWEuc3RhdGVOb2RlO2ImJihiPURiKGIpLHliKGEuc3RhdGVOb2RlLGEudHlwZSxiKSl9fWZ1bmN0aW9uIEViKGEpe3piP0FiP0FiLnB1c2goYSk6QWI9W2FdOnpiPWF9ZnVuY3Rpb24gRmIoKXtpZih6Yil7dmFyIGE9emIsYj1BYjtBYj16Yj1udWxsO0JiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylCYihiW2FdKX19ZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYihhLGIsYyxkLGUpe3JldHVybiBhKGIsYyxkLGUpfWZ1bmN0aW9uIEliKCl7fXZhciBKYj1HYixLYj0hMSxMYj0hMTtmdW5jdGlvbiBNYigpe2lmKG51bGwhPT16Ynx8bnVsbCE9PUFiKUliKCksRmIoKX1cbmZ1bmN0aW9uIE5iKGEsYixjKXtpZihMYilyZXR1cm4gYShiLGMpO0xiPSEwO3RyeXtyZXR1cm4gSmIoYSxiLGMpfWZpbmFsbHl7TGI9ITEsTWIoKX19XG5mdW5jdGlvbiBPYihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKG51bGw9PT1jKXJldHVybiBudWxsO3ZhciBkPURiKGMpO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjpjYXNlIFwib25Nb3VzZUVudGVyXCI6KGQ9IWQuZGlzYWJsZWQpfHwoYT1hLnR5cGUsZD0hKFwiYnV0dG9uXCI9PT1hfHxcImlucHV0XCI9PT1hfHxcInNlbGVjdFwiPT09YXx8XCJ0ZXh0YXJlYVwiPT09YSkpO2E9IWQ7YnJlYWsgYTtkZWZhdWx0OmE9ITF9aWYoYSlyZXR1cm4gbnVsbDtpZihjJiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBjKXRocm93IEVycm9yKHkoMjMxLGIsdHlwZW9mIGMpKTtyZXR1cm4gY312YXIgUGI9ITE7aWYoZmEpdHJ5e3ZhciBRYj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoUWIsXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe1BiPSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLFFiLFFiKTt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYil9Y2F0Y2goYSl7UGI9ITF9ZnVuY3Rpb24gUmIoYSxiLGMsZCxlLGYsZyxoLGspe3ZhciBsPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTt0cnl7Yi5hcHBseShjLGwpfWNhdGNoKG4pe3RoaXMub25FcnJvcihuKX19dmFyIFNiPSExLFRiPW51bGwsVWI9ITEsVmI9bnVsbCxXYj17b25FcnJvcjpmdW5jdGlvbihhKXtTYj0hMDtUYj1hfX07ZnVuY3Rpb24gWGIoYSxiLGMsZCxlLGYsZyxoLGspe1NiPSExO1RiPW51bGw7UmIuYXBwbHkoV2IsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIFliKGEsYixjLGQsZSxmLGcsaCxrKXtYYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYoU2Ipe2lmKFNiKXt2YXIgbD1UYjtTYj0hMTtUYj1udWxsfWVsc2UgdGhyb3cgRXJyb3IoeSgxOTgpKTtVYnx8KFViPSEwLFZiPWwpfX1mdW5jdGlvbiBaYihhKXt2YXIgYj1hLGM9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7YT1iO2RvIGI9YSwwIT09KGIuZmxhZ3MmMTAyNikmJihjPWIucmV0dXJuKSxhPWIucmV0dXJuO3doaWxlKGEpfXJldHVybiAzPT09Yi50YWc/YzpudWxsfWZ1bmN0aW9uICRiKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09YiYmKGE9YS5hbHRlcm5hdGUsbnVsbCE9PWEmJihiPWEubWVtb2l6ZWRTdGF0ZSkpO2lmKG51bGwhPT1iKXJldHVybiBiLmRlaHlkcmF0ZWR9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYWMoYSl7aWYoWmIoYSkhPT1hKXRocm93IEVycm9yKHkoMTg4KSk7fVxuZnVuY3Rpb24gYmMoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpe2I9WmIoYSk7aWYobnVsbD09PWIpdGhyb3cgRXJyb3IoeSgxODgpKTtyZXR1cm4gYiE9PWE/bnVsbDphfWZvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybjtpZihudWxsPT09ZSlicmVhazt2YXIgZj1lLmFsdGVybmF0ZTtpZihudWxsPT09Zil7ZD1lLnJldHVybjtpZihudWxsIT09ZCl7Yz1kO2NvbnRpbnVlfWJyZWFrfWlmKGUuY2hpbGQ9PT1mLmNoaWxkKXtmb3IoZj1lLmNoaWxkO2Y7KXtpZihmPT09YylyZXR1cm4gYWMoZSksYTtpZihmPT09ZClyZXR1cm4gYWMoZSksYjtmPWYuc2libGluZ310aHJvdyBFcnJvcih5KDE4OCkpO31pZihjLnJldHVybiE9PWQucmV0dXJuKWM9ZSxkPWY7ZWxzZXtmb3IodmFyIGc9ITEsaD1lLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWU7ZD1mO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZTtjPWY7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpe2ZvcihoPWYuY2hpbGQ7aDspe2lmKGg9PT1cbmMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXRocm93IEVycm9yKHkoMTg5KSk7fX1pZihjLmFsdGVybmF0ZSE9PWQpdGhyb3cgRXJyb3IoeSgxOTApKTt9aWYoMyE9PWMudGFnKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGMuc3RhdGVOb2RlLmN1cnJlbnQ9PT1jP2E6Yn1mdW5jdGlvbiBjYyhhKXthPWJjKGEpO2lmKCFhKXJldHVybiBudWxsO2Zvcih2YXIgYj1hOzspe2lmKDU9PT1iLnRhZ3x8Nj09PWIudGFnKXJldHVybiBiO2lmKGIuY2hpbGQpYi5jaGlsZC5yZXR1cm49YixiPWIuY2hpbGQ7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoOyFiLnNpYmxpbmc7KXtpZighYi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gZGMoYSxiKXtmb3IodmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWI7KXtpZihiPT09YXx8Yj09PWMpcmV0dXJuITA7Yj1iLnJldHVybn1yZXR1cm4hMX12YXIgZWMsZmMsZ2MsaGMsaWM9ITEsamM9W10sa2M9bnVsbCxsYz1udWxsLG1jPW51bGwsbmM9bmV3IE1hcCxvYz1uZXcgTWFwLHBjPVtdLHFjPVwibW91c2Vkb3duIG1vdXNldXAgdG91Y2hjYW5jZWwgdG91Y2hlbmQgdG91Y2hzdGFydCBhdXhjbGljayBkYmxjbGljayBwb2ludGVyY2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJ1cCBkcmFnZW5kIGRyYWdzdGFydCBkcm9wIGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBpbnB1dCB0ZXh0SW5wdXQgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIHJjKGEsYixjLGQsZSl7cmV0dXJue2Jsb2NrZWRPbjphLGRvbUV2ZW50TmFtZTpiLGV2ZW50U3lzdGVtRmxhZ3M6Y3wxNixuYXRpdmVFdmVudDplLHRhcmdldENvbnRhaW5lcnM6W2RdfX1mdW5jdGlvbiBzYyhhLGIpe3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmNhc2UgXCJmb2N1c291dFwiOmtjPW51bGw7YnJlYWs7Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnbGVhdmVcIjpsYz1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwibW91c2VvdXRcIjptYz1udWxsO2JyZWFrO2Nhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVyb3V0XCI6bmMuZGVsZXRlKGIucG9pbnRlcklkKTticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6b2MuZGVsZXRlKGIucG9pbnRlcklkKX19XG5mdW5jdGlvbiB0YyhhLGIsYyxkLGUsZil7aWYobnVsbD09PWF8fGEubmF0aXZlRXZlbnQhPT1mKXJldHVybiBhPXJjKGIsYyxkLGUsZiksbnVsbCE9PWImJihiPUNiKGIpLG51bGwhPT1iJiZmYyhiKSksYTthLmV2ZW50U3lzdGVtRmxhZ3N8PWQ7Yj1hLnRhcmdldENvbnRhaW5lcnM7bnVsbCE9PWUmJi0xPT09Yi5pbmRleE9mKGUpJiZiLnB1c2goZSk7cmV0dXJuIGF9XG5mdW5jdGlvbiB1YyhhLGIsYyxkLGUpe3N3aXRjaChiKXtjYXNlIFwiZm9jdXNpblwiOnJldHVybiBrYz10YyhrYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJkcmFnZW50ZXJcIjpyZXR1cm4gbGM9dGMobGMsYSxiLGMsZCxlKSwhMDtjYXNlIFwibW91c2VvdmVyXCI6cmV0dXJuIG1jPXRjKG1jLGEsYixjLGQsZSksITA7Y2FzZSBcInBvaW50ZXJvdmVyXCI6dmFyIGY9ZS5wb2ludGVySWQ7bmMuc2V0KGYsdGMobmMuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpO3JldHVybiEwO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOnJldHVybiBmPWUucG9pbnRlcklkLG9jLnNldChmLHRjKG9jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKSwhMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIHZjKGEpe3ZhciBiPXdjKGEudGFyZ2V0KTtpZihudWxsIT09Yil7dmFyIGM9WmIoYik7aWYobnVsbCE9PWMpaWYoYj1jLnRhZywxMz09PWIpe2lmKGI9JGIoYyksbnVsbCE9PWIpe2EuYmxvY2tlZE9uPWI7aGMoYS5sYW5lUHJpb3JpdHksZnVuY3Rpb24oKXtyLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShhLnByaW9yaXR5LGZ1bmN0aW9uKCl7Z2MoYyl9KX0pO3JldHVybn19ZWxzZSBpZigzPT09YiYmYy5zdGF0ZU5vZGUuaHlkcmF0ZSl7YS5ibG9ja2VkT249Mz09PWMudGFnP2Muc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtyZXR1cm59fWEuYmxvY2tlZE9uPW51bGx9XG5mdW5jdGlvbiB4YyhhKXtpZihudWxsIT09YS5ibG9ja2VkT24pcmV0dXJuITE7Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9eWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbCE9PWMpcmV0dXJuIGI9Q2IoYyksbnVsbCE9PWImJmZjKGIpLGEuYmxvY2tlZE9uPWMsITE7Yi5zaGlmdCgpfXJldHVybiEwfWZ1bmN0aW9uIHpjKGEsYixjKXt4YyhhKSYmYy5kZWxldGUoYil9XG5mdW5jdGlvbiBBYygpe2ZvcihpYz0hMTswPGpjLmxlbmd0aDspe3ZhciBhPWpjWzBdO2lmKG51bGwhPT1hLmJsb2NrZWRPbil7YT1DYihhLmJsb2NrZWRPbik7bnVsbCE9PWEmJmVjKGEpO2JyZWFrfWZvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXthLmJsb2NrZWRPbj1jO2JyZWFrfWIuc2hpZnQoKX1udWxsPT09YS5ibG9ja2VkT24mJmpjLnNoaWZ0KCl9bnVsbCE9PWtjJiZ4YyhrYykmJihrYz1udWxsKTtudWxsIT09bGMmJnhjKGxjKSYmKGxjPW51bGwpO251bGwhPT1tYyYmeGMobWMpJiYobWM9bnVsbCk7bmMuZm9yRWFjaCh6Yyk7b2MuZm9yRWFjaCh6Yyl9XG5mdW5jdGlvbiBCYyhhLGIpe2EuYmxvY2tlZE9uPT09YiYmKGEuYmxvY2tlZE9uPW51bGwsaWN8fChpYz0hMCxyLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxBYykpKX1cbmZ1bmN0aW9uIENjKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIEJjKGIsYSl9aWYoMDxqYy5sZW5ndGgpe0JjKGpjWzBdLGEpO2Zvcih2YXIgYz0xO2M8amMubGVuZ3RoO2MrKyl7dmFyIGQ9amNbY107ZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCl9fW51bGwhPT1rYyYmQmMoa2MsYSk7bnVsbCE9PWxjJiZCYyhsYyxhKTtudWxsIT09bWMmJkJjKG1jLGEpO25jLmZvckVhY2goYik7b2MuZm9yRWFjaChiKTtmb3IoYz0wO2M8cGMubGVuZ3RoO2MrKylkPXBjW2NdLGQuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpO2Zvcig7MDxwYy5sZW5ndGgmJihjPXBjWzBdLG51bGw9PT1jLmJsb2NrZWRPbik7KXZjKGMpLG51bGw9PT1jLmJsb2NrZWRPbiYmcGMuc2hpZnQoKX1cbmZ1bmN0aW9uIERjKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIEVjPXthbmltYXRpb25lbmQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpEYyhcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LEZjPXt9LEdjPXt9O1xuZmEmJihHYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBFYy5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBFYy5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBFYy5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBFYy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIEhjKGEpe2lmKEZjW2FdKXJldHVybiBGY1thXTtpZighRWNbYV0pcmV0dXJuIGE7dmFyIGI9RWNbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gR2MpcmV0dXJuIEZjW2FdPWJbY107cmV0dXJuIGF9XG52YXIgSWM9SGMoXCJhbmltYXRpb25lbmRcIiksSmM9SGMoXCJhbmltYXRpb25pdGVyYXRpb25cIiksS2M9SGMoXCJhbmltYXRpb25zdGFydFwiKSxMYz1IYyhcInRyYW5zaXRpb25lbmRcIiksTWM9bmV3IE1hcCxOYz1uZXcgTWFwLE9jPVtcImFib3J0XCIsXCJhYm9ydFwiLEljLFwiYW5pbWF0aW9uRW5kXCIsSmMsXCJhbmltYXRpb25JdGVyYXRpb25cIixLYyxcImFuaW1hdGlvblN0YXJ0XCIsXCJjYW5wbGF5XCIsXCJjYW5QbGF5XCIsXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIixcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiLFwiZW1wdGllZFwiLFwiZW1wdGllZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmNyeXB0ZWRcIixcImVuZGVkXCIsXCJlbmRlZFwiLFwiZXJyb3JcIixcImVycm9yXCIsXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIixcImxvYWRcIixcImxvYWRcIixcImxvYWRlZGRhdGFcIixcImxvYWRlZERhdGFcIixcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiLFwibG9hZHN0YXJ0XCIsXCJsb2FkU3RhcnRcIixcblwibG9zdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0UG9pbnRlckNhcHR1cmVcIixcInBsYXlpbmdcIixcInBsYXlpbmdcIixcInByb2dyZXNzXCIsXCJwcm9ncmVzc1wiLFwic2Vla2luZ1wiLFwic2Vla2luZ1wiLFwic3RhbGxlZFwiLFwic3RhbGxlZFwiLFwic3VzcGVuZFwiLFwic3VzcGVuZFwiLFwidGltZXVwZGF0ZVwiLFwidGltZVVwZGF0ZVwiLExjLFwidHJhbnNpdGlvbkVuZFwiLFwid2FpdGluZ1wiLFwid2FpdGluZ1wiXTtmdW5jdGlvbiBQYyhhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7Yys9Mil7dmFyIGQ9YVtjXSxlPWFbYysxXTtlPVwib25cIisoZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSkpO05jLnNldChkLGIpO01jLnNldChkLGUpO2RhKGUsW2RdKX19dmFyIFFjPXIudW5zdGFibGVfbm93O1FjKCk7dmFyIEY9ODtcbmZ1bmN0aW9uIFJjKGEpe2lmKDAhPT0oMSZhKSlyZXR1cm4gRj0xNSwxO2lmKDAhPT0oMiZhKSlyZXR1cm4gRj0xNCwyO2lmKDAhPT0oNCZhKSlyZXR1cm4gRj0xMyw0O3ZhciBiPTI0JmE7aWYoMCE9PWIpcmV0dXJuIEY9MTIsYjtpZigwIT09KGEmMzIpKXJldHVybiBGPTExLDMyO2I9MTkyJmE7aWYoMCE9PWIpcmV0dXJuIEY9MTAsYjtpZigwIT09KGEmMjU2KSlyZXR1cm4gRj05LDI1NjtiPTM1ODQmYTtpZigwIT09YilyZXR1cm4gRj04LGI7aWYoMCE9PShhJjQwOTYpKXJldHVybiBGPTcsNDA5NjtiPTQxODYxMTImYTtpZigwIT09YilyZXR1cm4gRj02LGI7Yj02MjkxNDU2MCZhO2lmKDAhPT1iKXJldHVybiBGPTUsYjtpZihhJjY3MTA4ODY0KXJldHVybiBGPTQsNjcxMDg4NjQ7aWYoMCE9PShhJjEzNDIxNzcyOCkpcmV0dXJuIEY9MywxMzQyMTc3Mjg7Yj04MDUzMDYzNjgmYTtpZigwIT09YilyZXR1cm4gRj0yLGI7aWYoMCE9PSgxMDczNzQxODI0JmEpKXJldHVybiBGPTEsMTA3Mzc0MTgyNDtcbkY9ODtyZXR1cm4gYX1mdW5jdGlvbiBTYyhhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gMTU7Y2FzZSA5ODpyZXR1cm4gMTA7Y2FzZSA5NzpjYXNlIDk2OnJldHVybiA4O2Nhc2UgOTU6cmV0dXJuIDI7ZGVmYXVsdDpyZXR1cm4gMH19ZnVuY3Rpb24gVGMoYSl7c3dpdGNoKGEpe2Nhc2UgMTU6Y2FzZSAxNDpyZXR1cm4gOTk7Y2FzZSAxMzpjYXNlIDEyOmNhc2UgMTE6Y2FzZSAxMDpyZXR1cm4gOTg7Y2FzZSA5OmNhc2UgODpjYXNlIDc6Y2FzZSA2OmNhc2UgNDpjYXNlIDU6cmV0dXJuIDk3O2Nhc2UgMzpjYXNlIDI6Y2FzZSAxOnJldHVybiA5NTtjYXNlIDA6cmV0dXJuIDkwO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzNTgsYSkpO319XG5mdW5jdGlvbiBVYyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzO2lmKDA9PT1jKXJldHVybiBGPTA7dmFyIGQ9MCxlPTAsZj1hLmV4cGlyZWRMYW5lcyxnPWEuc3VzcGVuZGVkTGFuZXMsaD1hLnBpbmdlZExhbmVzO2lmKDAhPT1mKWQ9ZixlPUY9MTU7ZWxzZSBpZihmPWMmMTM0MjE3NzI3LDAhPT1mKXt2YXIgaz1mJn5nOzAhPT1rPyhkPVJjKGspLGU9Rik6KGgmPWYsMCE9PWgmJihkPVJjKGgpLGU9RikpfWVsc2UgZj1jJn5nLDAhPT1mPyhkPVJjKGYpLGU9Rik6MCE9PWgmJihkPVJjKGgpLGU9Rik7aWYoMD09PWQpcmV0dXJuIDA7ZD0zMS1WYyhkKTtkPWMmKCgwPmQ/MDoxPDxkKTw8MSktMTtpZigwIT09YiYmYiE9PWQmJjA9PT0oYiZnKSl7UmMoYik7aWYoZTw9RilyZXR1cm4gYjtGPWV9Yj1hLmVudGFuZ2xlZExhbmVzO2lmKDAhPT1iKWZvcihhPWEuZW50YW5nbGVtZW50cyxiJj1kOzA8YjspYz0zMS1WYyhiKSxlPTE8PGMsZHw9YVtjXSxiJj1+ZTtyZXR1cm4gZH1cbmZ1bmN0aW9uIFdjKGEpe2E9YS5wZW5kaW5nTGFuZXMmLTEwNzM3NDE4MjU7cmV0dXJuIDAhPT1hP2E6YSYxMDczNzQxODI0PzEwNzM3NDE4MjQ6MH1mdW5jdGlvbiBYYyhhLGIpe3N3aXRjaChhKXtjYXNlIDE1OnJldHVybiAxO2Nhc2UgMTQ6cmV0dXJuIDI7Y2FzZSAxMjpyZXR1cm4gYT1ZYygyNCZ+YiksMD09PWE/WGMoMTAsYik6YTtjYXNlIDEwOnJldHVybiBhPVljKDE5MiZ+YiksMD09PWE/WGMoOCxiKTphO2Nhc2UgODpyZXR1cm4gYT1ZYygzNTg0Jn5iKSwwPT09YSYmKGE9WWMoNDE4NjExMiZ+YiksMD09PWEmJihhPTUxMikpLGE7Y2FzZSAyOnJldHVybiBiPVljKDgwNTMwNjM2OCZ+YiksMD09PWImJihiPTI2ODQzNTQ1NiksYn10aHJvdyBFcnJvcih5KDM1OCxhKSk7fWZ1bmN0aW9uIFljKGEpe3JldHVybiBhJi1hfWZ1bmN0aW9uIFpjKGEpe2Zvcih2YXIgYj1bXSxjPTA7MzE+YztjKyspYi5wdXNoKGEpO3JldHVybiBifVxuZnVuY3Rpb24gJGMoYSxiLGMpe2EucGVuZGluZ0xhbmVzfD1iO3ZhciBkPWItMTthLnN1c3BlbmRlZExhbmVzJj1kO2EucGluZ2VkTGFuZXMmPWQ7YT1hLmV2ZW50VGltZXM7Yj0zMS1WYyhiKTthW2JdPWN9dmFyIFZjPU1hdGguY2x6MzI/TWF0aC5jbHozMjphZCxiZD1NYXRoLmxvZyxjZD1NYXRoLkxOMjtmdW5jdGlvbiBhZChhKXtyZXR1cm4gMD09PWE/MzI6MzEtKGJkKGEpL2NkfDApfDB9dmFyIGRkPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksZWQ9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksZmQ9ITA7ZnVuY3Rpb24gZ2QoYSxiLGMsZCl7S2J8fEliKCk7dmFyIGU9aGQsZj1LYjtLYj0hMDt0cnl7SGIoZSxhLGIsYyxkKX1maW5hbGx5eyhLYj1mKXx8TWIoKX19ZnVuY3Rpb24gaWQoYSxiLGMsZCl7ZWQoZGQsaGQuYmluZChudWxsLGEsYixjLGQpKX1cbmZ1bmN0aW9uIGhkKGEsYixjLGQpe2lmKGZkKXt2YXIgZTtpZigoZT0wPT09KGImNCkpJiYwPGpjLmxlbmd0aCYmLTE8cWMuaW5kZXhPZihhKSlhPXJjKG51bGwsYSxiLGMsZCksamMucHVzaChhKTtlbHNle3ZhciBmPXljKGEsYixjLGQpO2lmKG51bGw9PT1mKWUmJnNjKGEsZCk7ZWxzZXtpZihlKXtpZigtMTxxYy5pbmRleE9mKGEpKXthPXJjKGYsYSxiLGMsZCk7amMucHVzaChhKTtyZXR1cm59aWYodWMoZixhLGIsYyxkKSlyZXR1cm47c2MoYSxkKX1qZChhLGIsZCxudWxsLGMpfX19fVxuZnVuY3Rpb24geWMoYSxiLGMsZCl7dmFyIGU9eGIoZCk7ZT13YyhlKTtpZihudWxsIT09ZSl7dmFyIGY9WmIoZSk7aWYobnVsbD09PWYpZT1udWxsO2Vsc2V7dmFyIGc9Zi50YWc7aWYoMTM9PT1nKXtlPSRiKGYpO2lmKG51bGwhPT1lKXJldHVybiBlO2U9bnVsbH1lbHNlIGlmKDM9PT1nKXtpZihmLnN0YXRlTm9kZS5oeWRyYXRlKXJldHVybiAzPT09Zi50YWc/Zi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO2U9bnVsbH1lbHNlIGYhPT1lJiYoZT1udWxsKX19amQoYSxiLGQsZSxjKTtyZXR1cm4gbnVsbH12YXIga2Q9bnVsbCxsZD1udWxsLG1kPW51bGw7XG5mdW5jdGlvbiBuZCgpe2lmKG1kKXJldHVybiBtZDt2YXIgYSxiPWxkLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIG1kPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9ZnVuY3Rpb24gb2QoYSl7dmFyIGI9YS5rZXlDb2RlO1wiY2hhckNvZGVcImluIGE/KGE9YS5jaGFyQ29kZSwwPT09YSYmMTM9PT1iJiYoYT0xMykpOmE9YjsxMD09PWEmJihhPTEzKTtyZXR1cm4gMzI8PWF8fDEzPT09YT9hOjB9ZnVuY3Rpb24gcGQoKXtyZXR1cm4hMH1mdW5jdGlvbiBxZCgpe3JldHVybiExfVxuZnVuY3Rpb24gcmQoYSl7ZnVuY3Rpb24gYihiLGQsZSxmLGcpe3RoaXMuX3JlYWN0TmFtZT1iO3RoaXMuX3RhcmdldEluc3Q9ZTt0aGlzLnR5cGU9ZDt0aGlzLm5hdGl2ZUV2ZW50PWY7dGhpcy50YXJnZXQ9Zzt0aGlzLmN1cnJlbnRUYXJnZXQ9bnVsbDtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYj1hW2NdLHRoaXNbY109Yj9iKGYpOmZbY10pO3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPShudWxsIT1mLmRlZmF1bHRQcmV2ZW50ZWQ/Zi5kZWZhdWx0UHJldmVudGVkOiExPT09Zi5yZXR1cm5WYWx1ZSk/cGQ6cWQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1xZDtyZXR1cm4gdGhpc31tKGIucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiZcbihhLnJldHVyblZhbHVlPSExKSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1wZCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEuc3RvcFByb3BhZ2F0aW9uP2Euc3RvcFByb3BhZ2F0aW9uKCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5jYW5jZWxCdWJibGUmJihhLmNhbmNlbEJ1YmJsZT0hMCksdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1wZCl9LHBlcnNpc3Q6ZnVuY3Rpb24oKXt9LGlzUGVyc2lzdGVudDpwZH0pO3JldHVybiBifVxudmFyIHNkPXtldmVudFBoYXNlOjAsYnViYmxlczowLGNhbmNlbGFibGU6MCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOjAsaXNUcnVzdGVkOjB9LHRkPXJkKHNkKSx1ZD1tKHt9LHNkLHt2aWV3OjAsZGV0YWlsOjB9KSx2ZD1yZCh1ZCksd2QseGQseWQsQWQ9bSh7fSx1ZCx7c2NyZWVuWDowLHNjcmVlblk6MCxjbGllbnRYOjAsY2xpZW50WTowLHBhZ2VYOjAscGFnZVk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxidXR0b246MCxidXR0b25zOjAscmVsYXRlZFRhcmdldDpmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YS5yZWxhdGVkVGFyZ2V0P2EuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudDphLnJlbGF0ZWRUYXJnZXR9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW5cbmEpcmV0dXJuIGEubW92ZW1lbnRYO2EhPT15ZCYmKHlkJiZcIm1vdXNlbW92ZVwiPT09YS50eXBlPyh3ZD1hLnNjcmVlblgteWQuc2NyZWVuWCx4ZD1hLnNjcmVlblkteWQuc2NyZWVuWSk6eGQ9d2Q9MCx5ZD1hKTtyZXR1cm4gd2R9LG1vdmVtZW50WTpmdW5jdGlvbihhKXtyZXR1cm5cIm1vdmVtZW50WVwiaW4gYT9hLm1vdmVtZW50WTp4ZH19KSxCZD1yZChBZCksQ2Q9bSh7fSxBZCx7ZGF0YVRyYW5zZmVyOjB9KSxEZD1yZChDZCksRWQ9bSh7fSx1ZCx7cmVsYXRlZFRhcmdldDowfSksRmQ9cmQoRWQpLEdkPW0oe30sc2Qse2FuaW1hdGlvbk5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLEhkPXJkKEdkKSxJZD1tKHt9LHNkLHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksSmQ9cmQoSWQpLEtkPW0oe30sc2Qse2RhdGE6MH0pLExkPXJkKEtkKSxNZD17RXNjOlwiRXNjYXBlXCIsXG5TcGFjZWJhcjpcIiBcIixMZWZ0OlwiQXJyb3dMZWZ0XCIsVXA6XCJBcnJvd1VwXCIsUmlnaHQ6XCJBcnJvd1JpZ2h0XCIsRG93bjpcIkFycm93RG93blwiLERlbDpcIkRlbGV0ZVwiLFdpbjpcIk9TXCIsTWVudTpcIkNvbnRleHRNZW51XCIsQXBwczpcIkNvbnRleHRNZW51XCIsU2Nyb2xsOlwiU2Nyb2xsTG9ja1wiLE1velByaW50YWJsZUtleTpcIlVuaWRlbnRpZmllZFwifSxOZD17ODpcIkJhY2tzcGFjZVwiLDk6XCJUYWJcIiwxMjpcIkNsZWFyXCIsMTM6XCJFbnRlclwiLDE2OlwiU2hpZnRcIiwxNzpcIkNvbnRyb2xcIiwxODpcIkFsdFwiLDE5OlwiUGF1c2VcIiwyMDpcIkNhcHNMb2NrXCIsMjc6XCJFc2NhcGVcIiwzMjpcIiBcIiwzMzpcIlBhZ2VVcFwiLDM0OlwiUGFnZURvd25cIiwzNTpcIkVuZFwiLDM2OlwiSG9tZVwiLDM3OlwiQXJyb3dMZWZ0XCIsMzg6XCJBcnJvd1VwXCIsMzk6XCJBcnJvd1JpZ2h0XCIsNDA6XCJBcnJvd0Rvd25cIiw0NTpcIkluc2VydFwiLDQ2OlwiRGVsZXRlXCIsMTEyOlwiRjFcIiwxMTM6XCJGMlwiLDExNDpcIkYzXCIsMTE1OlwiRjRcIiwxMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIixcbjExOTpcIkY4XCIsMTIwOlwiRjlcIiwxMjE6XCJGMTBcIiwxMjI6XCJGMTFcIiwxMjM6XCJGMTJcIiwxNDQ6XCJOdW1Mb2NrXCIsMTQ1OlwiU2Nyb2xsTG9ja1wiLDIyNDpcIk1ldGFcIn0sT2Q9e0FsdDpcImFsdEtleVwiLENvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFBkKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9T2RbYV0pPyEhYlthXTohMX1mdW5jdGlvbiB6ZCgpe3JldHVybiBQZH1cbnZhciBRZD1tKHt9LHVkLHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPU1kW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPW9kKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9OZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGNvZGU6MCxsb2NhdGlvbjowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxyZXBlYXQ6MCxsb2NhbGU6MCxnZXRNb2RpZmllclN0YXRlOnpkLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT9vZChhKTowfSxrZXlDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9LHdoaWNoOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP29kKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSksUmQ9cmQoUWQpLFNkPW0oe30sQWQse3BvaW50ZXJJZDowLHdpZHRoOjAsaGVpZ2h0OjAscHJlc3N1cmU6MCx0YW5nZW50aWFsUHJlc3N1cmU6MCx0aWx0WDowLHRpbHRZOjAsdHdpc3Q6MCxwb2ludGVyVHlwZTowLGlzUHJpbWFyeTowfSksVGQ9cmQoU2QpLFVkPW0oe30sdWQse3RvdWNoZXM6MCx0YXJnZXRUb3VjaGVzOjAsY2hhbmdlZFRvdWNoZXM6MCxhbHRLZXk6MCxtZXRhS2V5OjAsY3RybEtleTowLHNoaWZ0S2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZH0pLFZkPXJkKFVkKSxXZD1tKHt9LHNkLHtwcm9wZXJ0eU5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLFhkPXJkKFdkKSxZZD1tKHt9LEFkLHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW4gYT8tYS53aGVlbERlbHRhWDowfSxcbmRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjowLGRlbHRhTW9kZTowfSksWmQ9cmQoWWQpLCRkPVs5LDEzLDI3LDMyXSxhZT1mYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csYmU9bnVsbDtmYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYoYmU9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTt2YXIgY2U9ZmEmJlwiVGV4dEV2ZW50XCJpbiB3aW5kb3cmJiFiZSxkZT1mYSYmKCFhZXx8YmUmJjg8YmUmJjExPj1iZSksZWU9U3RyaW5nLmZyb21DaGFyQ29kZSgzMiksZmU9ITE7XG5mdW5jdGlvbiBnZShhLGIpe3N3aXRjaChhKXtjYXNlIFwia2V5dXBcIjpyZXR1cm4tMSE9PSRkLmluZGV4T2YoYi5rZXlDb2RlKTtjYXNlIFwia2V5ZG93blwiOnJldHVybiAyMjkhPT1iLmtleUNvZGU7Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJmb2N1c291dFwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIGhlKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIGllPSExO2Z1bmN0aW9uIGplKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBoZShiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7ZmU9ITA7cmV0dXJuIGVlO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PWVlJiZmZT9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBrZShhLGIpe2lmKGllKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFhZSYmZ2UoYSxiKT8oYT1uZCgpLG1kPWxkPWtkPW51bGwsaWU9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGRlJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBsZT17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBtZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIWxlW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1mdW5jdGlvbiBuZShhLGIsYyxkKXtFYihkKTtiPW9lKGIsXCJvbkNoYW5nZVwiKTswPGIubGVuZ3RoJiYoYz1uZXcgdGQoXCJvbkNoYW5nZVwiLFwiY2hhbmdlXCIsbnVsbCxjLGQpLGEucHVzaCh7ZXZlbnQ6YyxsaXN0ZW5lcnM6Yn0pKX12YXIgcGU9bnVsbCxxZT1udWxsO2Z1bmN0aW9uIHJlKGEpe3NlKGEsMCl9ZnVuY3Rpb24gdGUoYSl7dmFyIGI9dWUoYSk7aWYoV2EoYikpcmV0dXJuIGF9XG5mdW5jdGlvbiB2ZShhLGIpe2lmKFwiY2hhbmdlXCI9PT1hKXJldHVybiBifXZhciB3ZT0hMTtpZihmYSl7dmFyIHhlO2lmKGZhKXt2YXIgeWU9XCJvbmlucHV0XCJpbiBkb2N1bWVudDtpZigheWUpe3ZhciB6ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3plLnNldEF0dHJpYnV0ZShcIm9uaW5wdXRcIixcInJldHVybjtcIik7eWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHplLm9uaW5wdXR9eGU9eWV9ZWxzZSB4ZT0hMTt3ZT14ZSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKX1mdW5jdGlvbiBBZSgpe3BlJiYocGUuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpLHFlPXBlPW51bGwpfWZ1bmN0aW9uIEJlKGEpe2lmKFwidmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZ0ZShxZSkpe3ZhciBiPVtdO25lKGIscWUsYSx4YihhKSk7YT1yZTtpZihLYilhKGIpO2Vsc2V7S2I9ITA7dHJ5e0diKGEsYil9ZmluYWxseXtLYj0hMSxNYigpfX19fVxuZnVuY3Rpb24gQ2UoYSxiLGMpe1wiZm9jdXNpblwiPT09YT8oQWUoKSxwZT1iLHFlPWMscGUuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpKTpcImZvY3Vzb3V0XCI9PT1hJiZBZSgpfWZ1bmN0aW9uIERlKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIHRlKHFlKX1mdW5jdGlvbiBFZShhLGIpe2lmKFwiY2xpY2tcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEZlKGEsYil7aWYoXCJpbnB1dFwiPT09YXx8XCJjaGFuZ2VcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEdlKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgSGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6R2UsSWU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIEplKGEsYil7aWYoSGUoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKCFJZS5jYWxsKGIsY1tkXSl8fCFIZShhW2NbZF1dLGJbY1tkXV0pKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEtlKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIExlKGEsYil7dmFyIGM9S2UoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9S2UoYyl9fWZ1bmN0aW9uIE1lKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TWUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTmUoKXtmb3IodmFyIGE9d2luZG93LGI9WGEoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGEoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gT2UoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbnZhciBQZT1mYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFFlPW51bGwsUmU9bnVsbCxTZT1udWxsLFRlPSExO1xuZnVuY3Rpb24gVWUoYSxiLGMpe3ZhciBkPWMud2luZG93PT09Yz9jLmRvY3VtZW50Ojk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50O1RlfHxudWxsPT1RZXx8UWUhPT1YYShkKXx8KGQ9UWUsXCJzZWxlY3Rpb25TdGFydFwiaW4gZCYmT2UoZCk/ZD17c3RhcnQ6ZC5zZWxlY3Rpb25TdGFydCxlbmQ6ZC5zZWxlY3Rpb25FbmR9OihkPShkLm93bmVyRG9jdW1lbnQmJmQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxkPXthbmNob3JOb2RlOmQuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6ZC5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmQuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmQuZm9jdXNPZmZzZXR9KSxTZSYmSmUoU2UsZCl8fChTZT1kLGQ9b2UoUmUsXCJvblNlbGVjdFwiKSwwPGQubGVuZ3RoJiYoYj1uZXcgdGQoXCJvblNlbGVjdFwiLFwic2VsZWN0XCIsbnVsbCxiLGMpLGEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6ZH0pLGIudGFyZ2V0PVFlKSkpfVxuUGMoXCJjYW5jZWwgY2FuY2VsIGNsaWNrIGNsaWNrIGNsb3NlIGNsb3NlIGNvbnRleHRtZW51IGNvbnRleHRNZW51IGNvcHkgY29weSBjdXQgY3V0IGF1eGNsaWNrIGF1eENsaWNrIGRibGNsaWNrIGRvdWJsZUNsaWNrIGRyYWdlbmQgZHJhZ0VuZCBkcmFnc3RhcnQgZHJhZ1N0YXJ0IGRyb3AgZHJvcCBmb2N1c2luIGZvY3VzIGZvY3Vzb3V0IGJsdXIgaW5wdXQgaW5wdXQgaW52YWxpZCBpbnZhbGlkIGtleWRvd24ga2V5RG93biBrZXlwcmVzcyBrZXlQcmVzcyBrZXl1cCBrZXlVcCBtb3VzZWRvd24gbW91c2VEb3duIG1vdXNldXAgbW91c2VVcCBwYXN0ZSBwYXN0ZSBwYXVzZSBwYXVzZSBwbGF5IHBsYXkgcG9pbnRlcmNhbmNlbCBwb2ludGVyQ2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJEb3duIHBvaW50ZXJ1cCBwb2ludGVyVXAgcmF0ZWNoYW5nZSByYXRlQ2hhbmdlIHJlc2V0IHJlc2V0IHNlZWtlZCBzZWVrZWQgc3VibWl0IHN1Ym1pdCB0b3VjaGNhbmNlbCB0b3VjaENhbmNlbCB0b3VjaGVuZCB0b3VjaEVuZCB0b3VjaHN0YXJ0IHRvdWNoU3RhcnQgdm9sdW1lY2hhbmdlIHZvbHVtZUNoYW5nZVwiLnNwbGl0KFwiIFwiKSxcbjApO1BjKFwiZHJhZyBkcmFnIGRyYWdlbnRlciBkcmFnRW50ZXIgZHJhZ2V4aXQgZHJhZ0V4aXQgZHJhZ2xlYXZlIGRyYWdMZWF2ZSBkcmFnb3ZlciBkcmFnT3ZlciBtb3VzZW1vdmUgbW91c2VNb3ZlIG1vdXNlb3V0IG1vdXNlT3V0IG1vdXNlb3ZlciBtb3VzZU92ZXIgcG9pbnRlcm1vdmUgcG9pbnRlck1vdmUgcG9pbnRlcm91dCBwb2ludGVyT3V0IHBvaW50ZXJvdmVyIHBvaW50ZXJPdmVyIHNjcm9sbCBzY3JvbGwgdG9nZ2xlIHRvZ2dsZSB0b3VjaG1vdmUgdG91Y2hNb3ZlIHdoZWVsIHdoZWVsXCIuc3BsaXQoXCIgXCIpLDEpO1BjKE9jLDIpO2Zvcih2YXIgVmU9XCJjaGFuZ2Ugc2VsZWN0aW9uY2hhbmdlIHRleHRJbnB1dCBjb21wb3NpdGlvbnN0YXJ0IGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9udXBkYXRlXCIuc3BsaXQoXCIgXCIpLFdlPTA7V2U8VmUubGVuZ3RoO1dlKyspTmMuc2V0KFZlW1dlXSwwKTtlYShcIm9uTW91c2VFbnRlclwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO1xuZWEoXCJvbk1vdXNlTGVhdmVcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtlYShcIm9uUG9pbnRlckVudGVyXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2VhKFwib25Qb2ludGVyTGVhdmVcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZGEoXCJvbkNoYW5nZVwiLFwiY2hhbmdlIGNsaWNrIGZvY3VzaW4gZm9jdXNvdXQgaW5wdXQga2V5ZG93biBrZXl1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25TZWxlY3RcIixcImZvY3Vzb3V0IGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXNpbiBrZXlkb3duIGtleXVwIG1vdXNlZG93biBtb3VzZXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkJlZm9yZUlucHV0XCIsW1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdKTtkYShcIm9uQ29tcG9zaXRpb25FbmRcIixcImNvbXBvc2l0aW9uZW5kIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtcbmRhKFwib25Db21wb3NpdGlvblN0YXJ0XCIsXCJjb21wb3NpdGlvbnN0YXJ0IGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixcImNvbXBvc2l0aW9udXBkYXRlIGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTt2YXIgWGU9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLFllPW5ldyBTZXQoXCJjYW5jZWwgY2xvc2UgaW52YWxpZCBsb2FkIHNjcm9sbCB0b2dnbGVcIi5zcGxpdChcIiBcIikuY29uY2F0KFhlKSk7XG5mdW5jdGlvbiBaZShhLGIsYyl7dmFyIGQ9YS50eXBlfHxcInVua25vd24tZXZlbnRcIjthLmN1cnJlbnRUYXJnZXQ9YztZYihkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfVxuZnVuY3Rpb24gc2UoYSxiKXtiPTAhPT0oYiY0KTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuZXZlbnQ7ZD1kLmxpc3RlbmVyczthOnt2YXIgZj12b2lkIDA7aWYoYilmb3IodmFyIGc9ZC5sZW5ndGgtMTswPD1nO2ctLSl7dmFyIGg9ZFtnXSxrPWguaW5zdGFuY2UsbD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfWVsc2UgZm9yKGc9MDtnPGQubGVuZ3RoO2crKyl7aD1kW2ddO2s9aC5pbnN0YW5jZTtsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO1plKGUsaCxsKTtmPWt9fX1pZihVYil0aHJvdyBhPVZiLFViPSExLFZiPW51bGwsYTt9XG5mdW5jdGlvbiBHKGEsYil7dmFyIGM9JGUoYiksZD1hK1wiX19idWJibGVcIjtjLmhhcyhkKXx8KGFmKGIsYSwyLCExKSxjLmFkZChkKSl9dmFyIGJmPVwiX3JlYWN0TGlzdGVuaW5nXCIrTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7ZnVuY3Rpb24gY2YoYSl7YVtiZl18fChhW2JmXT0hMCxiYS5mb3JFYWNoKGZ1bmN0aW9uKGIpe1llLmhhcyhiKXx8ZGYoYiwhMSxhLG51bGwpO2RmKGIsITAsYSxudWxsKX0pKX1cbmZ1bmN0aW9uIGRmKGEsYixjLGQpe3ZhciBlPTQ8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTowLGY9YztcInNlbGVjdGlvbmNoYW5nZVwiPT09YSYmOSE9PWMubm9kZVR5cGUmJihmPWMub3duZXJEb2N1bWVudCk7aWYobnVsbCE9PWQmJiFiJiZZZS5oYXMoYSkpe2lmKFwic2Nyb2xsXCIhPT1hKXJldHVybjtlfD0yO2Y9ZH12YXIgZz0kZShmKSxoPWErXCJfX1wiKyhiP1wiY2FwdHVyZVwiOlwiYnViYmxlXCIpO2cuaGFzKGgpfHwoYiYmKGV8PTQpLGFmKGYsYSxlLGIpLGcuYWRkKGgpKX1cbmZ1bmN0aW9uIGFmKGEsYixjLGQpe3ZhciBlPU5jLmdldChiKTtzd2l0Y2godm9pZCAwPT09ZT8yOmUpe2Nhc2UgMDplPWdkO2JyZWFrO2Nhc2UgMTplPWlkO2JyZWFrO2RlZmF1bHQ6ZT1oZH1jPWUuYmluZChudWxsLGIsYyxhKTtlPXZvaWQgMDshUGJ8fFwidG91Y2hzdGFydFwiIT09YiYmXCJ0b3VjaG1vdmVcIiE9PWImJlwid2hlZWxcIiE9PWJ8fChlPSEwKTtkP3ZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7Y2FwdHVyZTohMCxwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCEwKTp2b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse3Bhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfVxuZnVuY3Rpb24gamQoYSxiLGMsZCxlKXt2YXIgZj1kO2lmKDA9PT0oYiYxKSYmMD09PShiJjIpJiZudWxsIT09ZClhOmZvcig7Oyl7aWYobnVsbD09PWQpcmV0dXJuO3ZhciBnPWQudGFnO2lmKDM9PT1nfHw0PT09Zyl7dmFyIGg9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZihoPT09ZXx8OD09PWgubm9kZVR5cGUmJmgucGFyZW50Tm9kZT09PWUpYnJlYWs7aWYoND09PWcpZm9yKGc9ZC5yZXR1cm47bnVsbCE9PWc7KXt2YXIgaz1nLnRhZztpZigzPT09a3x8ND09PWspaWYoaz1nLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGs9PT1lfHw4PT09ay5ub2RlVHlwZSYmay5wYXJlbnROb2RlPT09ZSlyZXR1cm47Zz1nLnJldHVybn1mb3IoO251bGwhPT1oOyl7Zz13YyhoKTtpZihudWxsPT09ZylyZXR1cm47az1nLnRhZztpZig1PT09a3x8Nj09PWspe2Q9Zj1nO2NvbnRpbnVlIGF9aD1oLnBhcmVudE5vZGV9fWQ9ZC5yZXR1cm59TmIoZnVuY3Rpb24oKXt2YXIgZD1mLGU9eGIoYyksZz1bXTtcbmE6e3ZhciBoPU1jLmdldChhKTtpZih2b2lkIDAhPT1oKXt2YXIgaz10ZCx4PWE7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1vZChjKSlicmVhayBhO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6az1SZDticmVhaztjYXNlIFwiZm9jdXNpblwiOng9XCJmb2N1c1wiO2s9RmQ7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6eD1cImJsdXJcIjtrPUZkO2JyZWFrO2Nhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOms9RmQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKWJyZWFrIGE7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjprPUJkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOms9XG5EZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjprPVZkO2JyZWFrO2Nhc2UgSWM6Y2FzZSBKYzpjYXNlIEtjOms9SGQ7YnJlYWs7Y2FzZSBMYzprPVhkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjprPXZkO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOms9WmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6az1KZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjprPVRkfXZhciB3PTAhPT0oYiY0KSx6PSF3JiZcInNjcm9sbFwiPT09YSx1PXc/bnVsbCE9PWg/aCtcIkNhcHR1cmVcIjpudWxsOmg7dz1bXTtmb3IodmFyIHQ9ZCxxO251bGwhPT1cbnQ7KXtxPXQ7dmFyIHY9cS5zdGF0ZU5vZGU7NT09PXEudGFnJiZudWxsIT09diYmKHE9dixudWxsIT09dSYmKHY9T2IodCx1KSxudWxsIT12JiZ3LnB1c2goZWYodCx2LHEpKSkpO2lmKHopYnJlYWs7dD10LnJldHVybn0wPHcubGVuZ3RoJiYoaD1uZXcgayhoLHgsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6aCxsaXN0ZW5lcnM6d30pKX19aWYoMD09PShiJjcpKXthOntoPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hO2s9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGgmJjA9PT0oYiYxNikmJih4PWMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCkmJih3Yyh4KXx8eFtmZl0pKWJyZWFrIGE7aWYoa3x8aCl7aD1lLndpbmRvdz09PWU/ZTooaD1lLm93bmVyRG9jdW1lbnQpP2guZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93OndpbmRvdztpZihrKXtpZih4PWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQsaz1kLHg9eD93Yyh4KTpudWxsLG51bGwhPT1cbngmJih6PVpiKHgpLHghPT16fHw1IT09eC50YWcmJjYhPT14LnRhZykpeD1udWxsfWVsc2Ugaz1udWxsLHg9ZDtpZihrIT09eCl7dz1CZDt2PVwib25Nb3VzZUxlYXZlXCI7dT1cIm9uTW91c2VFbnRlclwiO3Q9XCJtb3VzZVwiO2lmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSl3PVRkLHY9XCJvblBvaW50ZXJMZWF2ZVwiLHU9XCJvblBvaW50ZXJFbnRlclwiLHQ9XCJwb2ludGVyXCI7ej1udWxsPT1rP2g6dWUoayk7cT1udWxsPT14P2g6dWUoeCk7aD1uZXcgdyh2LHQrXCJsZWF2ZVwiLGssYyxlKTtoLnRhcmdldD16O2gucmVsYXRlZFRhcmdldD1xO3Y9bnVsbDt3YyhlKT09PWQmJih3PW5ldyB3KHUsdCtcImVudGVyXCIseCxjLGUpLHcudGFyZ2V0PXEsdy5yZWxhdGVkVGFyZ2V0PXosdj13KTt6PXY7aWYoayYmeCliOnt3PWs7dT14O3Q9MDtmb3IocT13O3E7cT1nZihxKSl0Kys7cT0wO2Zvcih2PXU7djt2PWdmKHYpKXErKztmb3IoOzA8dC1xOyl3PWdmKHcpLHQtLTtmb3IoOzA8cS10Oyl1PVxuZ2YodSkscS0tO2Zvcig7dC0tOyl7aWYodz09PXV8fG51bGwhPT11JiZ3PT09dS5hbHRlcm5hdGUpYnJlYWsgYjt3PWdmKHcpO3U9Z2YodSl9dz1udWxsfWVsc2Ugdz1udWxsO251bGwhPT1rJiZoZihnLGgsayx3LCExKTtudWxsIT09eCYmbnVsbCE9PXomJmhmKGcseix4LHcsITApfX19YTp7aD1kP3VlKGQpOndpbmRvdztrPWgubm9kZU5hbWUmJmgubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZihcInNlbGVjdFwiPT09a3x8XCJpbnB1dFwiPT09ayYmXCJmaWxlXCI9PT1oLnR5cGUpdmFyIEo9dmU7ZWxzZSBpZihtZShoKSlpZih3ZSlKPUZlO2Vsc2V7Sj1EZTt2YXIgSz1DZX1lbHNlKGs9aC5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWsudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWgudHlwZXx8XCJyYWRpb1wiPT09aC50eXBlKSYmKEo9RWUpO2lmKEomJihKPUooYSxkKSkpe25lKGcsSixjLGUpO2JyZWFrIGF9SyYmSyhhLGgsZCk7XCJmb2N1c291dFwiPT09YSYmKEs9aC5fd3JhcHBlclN0YXRlKSYmXG5LLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1oLnR5cGUmJmJiKGgsXCJudW1iZXJcIixoLnZhbHVlKX1LPWQ/dWUoZCk6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmlmKG1lKEspfHxcInRydWVcIj09PUsuY29udGVudEVkaXRhYmxlKVFlPUssUmU9ZCxTZT1udWxsO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOlNlPVJlPVFlPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOlRlPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpUZT0hMTtVZShnLGMsZSk7YnJlYWs7Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmlmKFBlKWJyZWFrO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6VWUoZyxjLGUpfXZhciBRO2lmKGFlKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOnZhciBMPVwib25Db21wb3NpdGlvblN0YXJ0XCI7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpMPVwib25Db21wb3NpdGlvbkVuZFwiO2JyZWFrIGI7XG5jYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjpMPVwib25Db21wb3NpdGlvblVwZGF0ZVwiO2JyZWFrIGJ9TD12b2lkIDB9ZWxzZSBpZT9nZShhLGMpJiYoTD1cIm9uQ29tcG9zaXRpb25FbmRcIik6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihMPVwib25Db21wb3NpdGlvblN0YXJ0XCIpO0wmJihkZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihpZXx8XCJvbkNvbXBvc2l0aW9uU3RhcnRcIiE9PUw/XCJvbkNvbXBvc2l0aW9uRW5kXCI9PT1MJiZpZSYmKFE9bmQoKSk6KGtkPWUsbGQ9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsaWU9ITApKSxLPW9lKGQsTCksMDxLLmxlbmd0aCYmKEw9bmV3IExkKEwsYSxudWxsLGMsZSksZy5wdXNoKHtldmVudDpMLGxpc3RlbmVyczpLfSksUT9MLmRhdGE9UTooUT1oZShjKSxudWxsIT09USYmKEwuZGF0YT1RKSkpKTtpZihRPWNlP2plKGEsYyk6a2UoYSxjKSlkPW9lKGQsXCJvbkJlZm9yZUlucHV0XCIpLDA8ZC5sZW5ndGgmJihlPW5ldyBMZChcIm9uQmVmb3JlSW5wdXRcIixcblwiYmVmb3JlaW5wdXRcIixudWxsLGMsZSksZy5wdXNoKHtldmVudDplLGxpc3RlbmVyczpkfSksZS5kYXRhPVEpfXNlKGcsYil9KX1mdW5jdGlvbiBlZihhLGIsYyl7cmV0dXJue2luc3RhbmNlOmEsbGlzdGVuZXI6YixjdXJyZW50VGFyZ2V0OmN9fWZ1bmN0aW9uIG9lKGEsYil7Zm9yKHZhciBjPWIrXCJDYXB0dXJlXCIsZD1bXTtudWxsIT09YTspe3ZhciBlPWEsZj1lLnN0YXRlTm9kZTs1PT09ZS50YWcmJm51bGwhPT1mJiYoZT1mLGY9T2IoYSxjKSxudWxsIT1mJiZkLnVuc2hpZnQoZWYoYSxmLGUpKSxmPU9iKGEsYiksbnVsbCE9ZiYmZC5wdXNoKGVmKGEsZixlKSkpO2E9YS5yZXR1cm59cmV0dXJuIGR9ZnVuY3Rpb24gZ2YoYSl7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7ZG8gYT1hLnJldHVybjt3aGlsZShhJiY1IT09YS50YWcpO3JldHVybiBhP2E6bnVsbH1cbmZ1bmN0aW9uIGhmKGEsYixjLGQsZSl7Zm9yKHZhciBmPWIuX3JlYWN0TmFtZSxnPVtdO251bGwhPT1jJiZjIT09ZDspe3ZhciBoPWMsaz1oLmFsdGVybmF0ZSxsPWguc3RhdGVOb2RlO2lmKG51bGwhPT1rJiZrPT09ZClicmVhazs1PT09aC50YWcmJm51bGwhPT1sJiYoaD1sLGU/KGs9T2IoYyxmKSxudWxsIT1rJiZnLnVuc2hpZnQoZWYoYyxrLGgpKSk6ZXx8KGs9T2IoYyxmKSxudWxsIT1rJiZnLnB1c2goZWYoYyxrLGgpKSkpO2M9Yy5yZXR1cm59MCE9PWcubGVuZ3RoJiZhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmd9KX1mdW5jdGlvbiBqZigpe312YXIga2Y9bnVsbCxsZj1udWxsO2Z1bmN0aW9uIG1mKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1cbmZ1bmN0aW9uIG5mKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJvcHRpb25cIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH12YXIgb2Y9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAscGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwO2Z1bmN0aW9uIHFmKGEpezE9PT1hLm5vZGVUeXBlP2EudGV4dENvbnRlbnQ9XCJcIjo5PT09YS5ub2RlVHlwZSYmKGE9YS5ib2R5LG51bGwhPWEmJihhLnRleHRDb250ZW50PVwiXCIpKX1cbmZ1bmN0aW9uIHJmKGEpe2Zvcig7bnVsbCE9YTthPWEubmV4dFNpYmxpbmcpe3ZhciBiPWEubm9kZVR5cGU7aWYoMT09PWJ8fDM9PT1iKWJyZWFrfXJldHVybiBhfWZ1bmN0aW9uIHNmKGEpe2E9YS5wcmV2aW91c1NpYmxpbmc7Zm9yKHZhciBiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIkXCI9PT1jfHxcIiQhXCI9PT1jfHxcIiQ/XCI9PT1jKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZVwiLyRcIj09PWMmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciB0Zj0wO2Z1bmN0aW9uIHVmKGEpe3JldHVybnskJHR5cGVvZjpHYSx0b1N0cmluZzphLHZhbHVlT2Y6YX19dmFyIHZmPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLHdmPVwiX19yZWFjdEZpYmVyJFwiK3ZmLHhmPVwiX19yZWFjdFByb3BzJFwiK3ZmLGZmPVwiX19yZWFjdENvbnRhaW5lciRcIit2Zix5Zj1cIl9fcmVhY3RFdmVudHMkXCIrdmY7XG5mdW5jdGlvbiB3YyhhKXt2YXIgYj1hW3dmXTtpZihiKXJldHVybiBiO2Zvcih2YXIgYz1hLnBhcmVudE5vZGU7Yzspe2lmKGI9Y1tmZl18fGNbd2ZdKXtjPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1iLmNoaWxkfHxudWxsIT09YyYmbnVsbCE9PWMuY2hpbGQpZm9yKGE9c2YoYSk7bnVsbCE9PWE7KXtpZihjPWFbd2ZdKXJldHVybiBjO2E9c2YoYSl9cmV0dXJuIGJ9YT1jO2M9YS5wYXJlbnROb2RlfXJldHVybiBudWxsfWZ1bmN0aW9uIENiKGEpe2E9YVt3Zl18fGFbZmZdO3JldHVybiFhfHw1IT09YS50YWcmJjYhPT1hLnRhZyYmMTMhPT1hLnRhZyYmMyE9PWEudGFnP251bGw6YX1mdW5jdGlvbiB1ZShhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYS5zdGF0ZU5vZGU7dGhyb3cgRXJyb3IoeSgzMykpO31mdW5jdGlvbiBEYihhKXtyZXR1cm4gYVt4Zl18fG51bGx9XG5mdW5jdGlvbiAkZShhKXt2YXIgYj1hW3lmXTt2b2lkIDA9PT1iJiYoYj1hW3lmXT1uZXcgU2V0KTtyZXR1cm4gYn12YXIgemY9W10sQWY9LTE7ZnVuY3Rpb24gQmYoYSl7cmV0dXJue2N1cnJlbnQ6YX19ZnVuY3Rpb24gSChhKXswPkFmfHwoYS5jdXJyZW50PXpmW0FmXSx6ZltBZl09bnVsbCxBZi0tKX1mdW5jdGlvbiBJKGEsYil7QWYrKzt6ZltBZl09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBDZj17fSxNPUJmKENmKSxOPUJmKCExKSxEZj1DZjtcbmZ1bmN0aW9uIEVmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gQ2Y7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gRmYoYSl7YT1hLmNoaWxkQ29udGV4dFR5cGVzO3JldHVybiBudWxsIT09YSYmdm9pZCAwIT09YX1mdW5jdGlvbiBHZigpe0goTik7SChNKX1mdW5jdGlvbiBIZihhLGIsYyl7aWYoTS5jdXJyZW50IT09Q2YpdGhyb3cgRXJyb3IoeSgxNjgpKTtJKE0sYik7SShOLGMpfVxuZnVuY3Rpb24gSWYoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2E9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWlmKCEoZSBpbiBhKSl0aHJvdyBFcnJvcih5KDEwOCxSYShiKXx8XCJVbmtub3duXCIsZSkpO3JldHVybiBtKHt9LGMsZCl9ZnVuY3Rpb24gSmYoYSl7YT0oYT1hLnN0YXRlTm9kZSkmJmEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHR8fENmO0RmPU0uY3VycmVudDtJKE0sYSk7SShOLE4uY3VycmVudCk7cmV0dXJuITB9ZnVuY3Rpb24gS2YoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2lmKCFkKXRocm93IEVycm9yKHkoMTY5KSk7Yz8oYT1JZihhLGIsRGYpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YSxIKE4pLEgoTSksSShNLGEpKTpIKE4pO0koTixjKX1cbnZhciBMZj1udWxsLE1mPW51bGwsTmY9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksT2Y9ci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrLFBmPXIudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2ssUWY9ci51bnN0YWJsZV9zaG91bGRZaWVsZCxSZj1yLnVuc3RhYmxlX3JlcXVlc3RQYWludCxTZj1yLnVuc3RhYmxlX25vdyxUZj1yLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsLFVmPXIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksVmY9ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxXZj1yLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LFhmPXIudW5zdGFibGVfTG93UHJpb3JpdHksWWY9ci51bnN0YWJsZV9JZGxlUHJpb3JpdHksWmY9e30sJGY9dm9pZCAwIT09UmY/UmY6ZnVuY3Rpb24oKXt9LGFnPW51bGwsYmc9bnVsbCxjZz0hMSxkZz1TZigpLE89MUU0PmRnP1NmOmZ1bmN0aW9uKCl7cmV0dXJuIFNmKCktZGd9O1xuZnVuY3Rpb24gZWcoKXtzd2l0Y2goVGYoKSl7Y2FzZSBVZjpyZXR1cm4gOTk7Y2FzZSBWZjpyZXR1cm4gOTg7Y2FzZSBXZjpyZXR1cm4gOTc7Y2FzZSBYZjpyZXR1cm4gOTY7Y2FzZSBZZjpyZXR1cm4gOTU7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMzMikpO319ZnVuY3Rpb24gZmcoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIFVmO2Nhc2UgOTg6cmV0dXJuIFZmO2Nhc2UgOTc6cmV0dXJuIFdmO2Nhc2UgOTY6cmV0dXJuIFhmO2Nhc2UgOTU6cmV0dXJuIFlmO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGdnKGEsYil7YT1mZyhhKTtyZXR1cm4gTmYoYSxiKX1mdW5jdGlvbiBoZyhhLGIsYyl7YT1mZyhhKTtyZXR1cm4gT2YoYSxiLGMpfWZ1bmN0aW9uIGlnKCl7aWYobnVsbCE9PWJnKXt2YXIgYT1iZztiZz1udWxsO1BmKGEpfWpnKCl9XG5mdW5jdGlvbiBqZygpe2lmKCFjZyYmbnVsbCE9PWFnKXtjZz0hMDt2YXIgYT0wO3RyeXt2YXIgYj1hZztnZyg5OSxmdW5jdGlvbigpe2Zvcig7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07ZG8gYz1jKCEwKTt3aGlsZShudWxsIT09Yyl9fSk7YWc9bnVsbH1jYXRjaChjKXt0aHJvdyBudWxsIT09YWcmJihhZz1hZy5zbGljZShhKzEpKSxPZihVZixpZyksYzt9ZmluYWxseXtjZz0hMX19fXZhciBrZz1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZztmdW5jdGlvbiBsZyhhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPW0oe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKTtyZXR1cm4gYn1yZXR1cm4gYn12YXIgbWc9QmYobnVsbCksbmc9bnVsbCxvZz1udWxsLHBnPW51bGw7ZnVuY3Rpb24gcWcoKXtwZz1vZz1uZz1udWxsfVxuZnVuY3Rpb24gcmcoYSl7dmFyIGI9bWcuY3VycmVudDtIKG1nKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHNnKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKChhLmNoaWxkTGFuZXMmYik9PT1iKWlmKG51bGw9PT1jfHwoYy5jaGlsZExhbmVzJmIpPT09YilicmVhaztlbHNlIGMuY2hpbGRMYW5lc3w9YjtlbHNlIGEuY2hpbGRMYW5lc3w9YixudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9Yik7YT1hLnJldHVybn19ZnVuY3Rpb24gdGcoYSxiKXtuZz1hO3BnPW9nPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoMCE9PShhLmxhbmVzJmIpJiYodWc9ITApLGEuZmlyc3RDb250ZXh0PW51bGwpfVxuZnVuY3Rpb24gdmcoYSxiKXtpZihwZyE9PWEmJiExIT09YiYmMCE9PWIpe2lmKFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MTA3Mzc0MTgyMz09PWIpcGc9YSxiPTEwNzM3NDE4MjM7Yj17Y29udGV4dDphLG9ic2VydmVkQml0czpiLG5leHQ6bnVsbH07aWYobnVsbD09PW9nKXtpZihudWxsPT09bmcpdGhyb3cgRXJyb3IoeSgzMDgpKTtvZz1iO25nLmRlcGVuZGVuY2llcz17bGFuZXM6MCxmaXJzdENvbnRleHQ6YixyZXNwb25kZXJzOm51bGx9fWVsc2Ugb2c9b2cubmV4dD1ifXJldHVybiBhLl9jdXJyZW50VmFsdWV9dmFyIHdnPSExO2Z1bmN0aW9uIHhnKGEpe2EudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLm1lbW9pemVkU3RhdGUsZmlyc3RCYXNlVXBkYXRlOm51bGwsbGFzdEJhc2VVcGRhdGU6bnVsbCxzaGFyZWQ6e3BlbmRpbmc6bnVsbH0sZWZmZWN0czpudWxsfX1cbmZ1bmN0aW9uIHlnKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9PT1hJiYoYi51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTphLmZpcnN0QmFzZVVwZGF0ZSxsYXN0QmFzZVVwZGF0ZTphLmxhc3RCYXNlVXBkYXRlLHNoYXJlZDphLnNoYXJlZCxlZmZlY3RzOmEuZWZmZWN0c30pfWZ1bmN0aW9uIHpnKGEsYil7cmV0dXJue2V2ZW50VGltZTphLGxhbmU6Yix0YWc6MCxwYXlsb2FkOm51bGwsY2FsbGJhY2s6bnVsbCxuZXh0Om51bGx9fWZ1bmN0aW9uIEFnKGEsYil7YT1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1hKXthPWEuc2hhcmVkO3ZhciBjPWEucGVuZGluZztudWxsPT09Yz9iLm5leHQ9YjooYi5uZXh0PWMubmV4dCxjLm5leHQ9Yik7YS5wZW5kaW5nPWJ9fVxuZnVuY3Rpb24gQmcoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlLGQ9YS5hbHRlcm5hdGU7aWYobnVsbCE9PWQmJihkPWQudXBkYXRlUXVldWUsYz09PWQpKXt2YXIgZT1udWxsLGY9bnVsbDtjPWMuZmlyc3RCYXNlVXBkYXRlO2lmKG51bGwhPT1jKXtkb3t2YXIgZz17ZXZlbnRUaW1lOmMuZXZlbnRUaW1lLGxhbmU6Yy5sYW5lLHRhZzpjLnRhZyxwYXlsb2FkOmMucGF5bG9hZCxjYWxsYmFjazpjLmNhbGxiYWNrLG5leHQ6bnVsbH07bnVsbD09PWY/ZT1mPWc6Zj1mLm5leHQ9ZztjPWMubmV4dH13aGlsZShudWxsIT09Yyk7bnVsbD09PWY/ZT1mPWI6Zj1mLm5leHQ9Yn1lbHNlIGU9Zj1iO2M9e2Jhc2VTdGF0ZTpkLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6ZSxsYXN0QmFzZVVwZGF0ZTpmLHNoYXJlZDpkLnNoYXJlZCxlZmZlY3RzOmQuZWZmZWN0c307YS51cGRhdGVRdWV1ZT1jO3JldHVybn1hPWMubGFzdEJhc2VVcGRhdGU7bnVsbD09PWE/Yy5maXJzdEJhc2VVcGRhdGU9YjphLm5leHQ9XG5iO2MubGFzdEJhc2VVcGRhdGU9Yn1cbmZ1bmN0aW9uIENnKGEsYixjLGQpe3ZhciBlPWEudXBkYXRlUXVldWU7d2c9ITE7dmFyIGY9ZS5maXJzdEJhc2VVcGRhdGUsZz1lLmxhc3RCYXNlVXBkYXRlLGg9ZS5zaGFyZWQucGVuZGluZztpZihudWxsIT09aCl7ZS5zaGFyZWQucGVuZGluZz1udWxsO3ZhciBrPWgsbD1rLm5leHQ7ay5uZXh0PW51bGw7bnVsbD09PWc/Zj1sOmcubmV4dD1sO2c9azt2YXIgbj1hLmFsdGVybmF0ZTtpZihudWxsIT09bil7bj1uLnVwZGF0ZVF1ZXVlO3ZhciBBPW4ubGFzdEJhc2VVcGRhdGU7QSE9PWcmJihudWxsPT09QT9uLmZpcnN0QmFzZVVwZGF0ZT1sOkEubmV4dD1sLG4ubGFzdEJhc2VVcGRhdGU9ayl9fWlmKG51bGwhPT1mKXtBPWUuYmFzZVN0YXRlO2c9MDtuPWw9az1udWxsO2Rve2g9Zi5sYW5lO3ZhciBwPWYuZXZlbnRUaW1lO2lmKChkJmgpPT09aCl7bnVsbCE9PW4mJihuPW4ubmV4dD17ZXZlbnRUaW1lOnAsbGFuZTowLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLFxubmV4dDpudWxsfSk7YTp7dmFyIEM9YSx4PWY7aD1iO3A9Yztzd2l0Y2goeC50YWcpe2Nhc2UgMTpDPXgucGF5bG9hZDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyl7QT1DLmNhbGwocCxBLGgpO2JyZWFrIGF9QT1DO2JyZWFrIGE7Y2FzZSAzOkMuZmxhZ3M9Qy5mbGFncyYtNDA5N3w2NDtjYXNlIDA6Qz14LnBheWxvYWQ7aD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgQz9DLmNhbGwocCxBLGgpOkM7aWYobnVsbD09PWh8fHZvaWQgMD09PWgpYnJlYWsgYTtBPW0oe30sQSxoKTticmVhayBhO2Nhc2UgMjp3Zz0hMH19bnVsbCE9PWYuY2FsbGJhY2smJihhLmZsYWdzfD0zMixoPWUuZWZmZWN0cyxudWxsPT09aD9lLmVmZmVjdHM9W2ZdOmgucHVzaChmKSl9ZWxzZSBwPXtldmVudFRpbWU6cCxsYW5lOmgsdGFnOmYudGFnLHBheWxvYWQ6Zi5wYXlsb2FkLGNhbGxiYWNrOmYuY2FsbGJhY2ssbmV4dDpudWxsfSxudWxsPT09bj8obD1uPXAsaz1BKTpuPW4ubmV4dD1wLGd8PWg7Zj1mLm5leHQ7aWYobnVsbD09PVxuZilpZihoPWUuc2hhcmVkLnBlbmRpbmcsbnVsbD09PWgpYnJlYWs7ZWxzZSBmPWgubmV4dCxoLm5leHQ9bnVsbCxlLmxhc3RCYXNlVXBkYXRlPWgsZS5zaGFyZWQucGVuZGluZz1udWxsfXdoaWxlKDEpO251bGw9PT1uJiYoaz1BKTtlLmJhc2VTdGF0ZT1rO2UuZmlyc3RCYXNlVXBkYXRlPWw7ZS5sYXN0QmFzZVVwZGF0ZT1uO0RnfD1nO2EubGFuZXM9ZzthLm1lbW9pemVkU3RhdGU9QX19ZnVuY3Rpb24gRWcoYSxiLGMpe2E9Yi5lZmZlY3RzO2IuZWZmZWN0cz1udWxsO2lmKG51bGwhPT1hKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBkPWFbYl0sZT1kLmNhbGxiYWNrO2lmKG51bGwhPT1lKXtkLmNhbGxiYWNrPW51bGw7ZD1jO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlKXRocm93IEVycm9yKHkoMTkxLGUpKTtlLmNhbGwoZCl9fX12YXIgRmc9KG5ldyBhYS5Db21wb25lbnQpLnJlZnM7XG5mdW5jdGlvbiBHZyhhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6bSh7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jOzA9PT1hLmxhbmVzJiYoYS51cGRhdGVRdWV1ZS5iYXNlU3RhdGU9Yyl9XG52YXIgS2c9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFscyk/WmIoYSk9PT1hOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9emcoZCxlKTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9emcoZCxlKTtmLnRhZz0xO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtBZyhhLGYpO0pnKGEsZSxkKX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKGEsYil7YT1hLl9yZWFjdEludGVybmFsczt2YXIgYz1IZygpLGQ9SWcoYSksZT16ZyhjLGQpO2UudGFnPTI7dm9pZCAwIT09YiYmbnVsbCE9PWImJihlLmNhbGxiYWNrPVxuYik7QWcoYSxlKTtKZyhhLGQsYyl9fTtmdW5jdGlvbiBMZyhhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFKZShjLGQpfHwhSmUoZSxmKTohMH1cbmZ1bmN0aW9uIE1nKGEsYixjKXt2YXIgZD0hMSxlPUNmO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPXZnKGYpOihlPUZmKGIpP0RmOk0uY3VycmVudCxkPWIuY29udGV4dFR5cGVzLGY9KGQ9bnVsbCE9PWQmJnZvaWQgMCE9PWQpP0VmKGEsZSk6Q2YpO2I9bmV3IGIoYyxmKTthLm1lbW9pemVkU3RhdGU9bnVsbCE9PWIuc3RhdGUmJnZvaWQgMCE9PWIuc3RhdGU/Yi5zdGF0ZTpudWxsO2IudXBkYXRlcj1LZzthLnN0YXRlTm9kZT1iO2IuX3JlYWN0SW50ZXJuYWxzPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIE5nKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZLZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIE9nKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9Rmc7eGcoYSk7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD12ZyhmKTooZj1GZihiKT9EZjpNLmN1cnJlbnQsZS5jb250ZXh0PUVmKGEsZikpO0NnKGEsYyxlLGQpO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihHZyhhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50fHxcbihiPWUuc3RhdGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZLZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxDZyhhLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmZsYWdzfD00KX12YXIgUGc9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIFFnKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjtpZihjKXtpZigxIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgzMDkpKTt2YXIgZD1jLnN0YXRlTm9kZX1pZighZCl0aHJvdyBFcnJvcih5KDE0NyxhKSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1GZyYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyBFcnJvcih5KDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyBFcnJvcih5KDI5MCxhKSk7fXJldHVybiBhfVxuZnVuY3Rpb24gUmcoYSxiKXtpZihcInRleHRhcmVhXCIhPT1hLnR5cGUpdGhyb3cgRXJyb3IoeSgzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmIpKTt9XG5mdW5jdGlvbiBTZyhhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5sYXN0RWZmZWN0O251bGwhPT1kPyhkLm5leHRFZmZlY3Q9YyxiLmxhc3RFZmZlY3Q9Yyk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YztjLm5leHRFZmZlY3Q9bnVsbDtjLmZsYWdzPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXthPVRnKGEsYik7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYztkPWIuYWx0ZXJuYXRlO2lmKG51bGwhPT1kKXJldHVybiBkPWQuaW5kZXgsZDxjPyhiLmZsYWdzPTIsXG5jKTpkO2IuZmxhZ3M9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZmxhZ3M9Mik7cmV0dXJuIGJ9ZnVuY3Rpb24gaChhLGIsYyxkKXtpZihudWxsPT09Ynx8NiE9PWIudGFnKXJldHVybiBiPVVnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIuZWxlbWVudFR5cGU9PT1jLnR5cGUpcmV0dXJuIGQ9ZShiLGMucHJvcHMpLGQucmVmPVFnKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1WZyhjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1RZyhhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09Yy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj1cbldnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBuKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1YZyhjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIEEoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPVVnKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBjPVZnKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLGMucmVmPVFnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSB0YTpyZXR1cm4gYj1XZyhiLGEubW9kZSxjKSxiLnJldHVybj1hLGJ9aWYoUGcoYil8fExhKGIpKXJldHVybiBiPVhnKGIsXG5hLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7UmcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBwKGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6aChhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBjLmtleT09PWU/Yy50eXBlPT09dWE/bihhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGUpOmsoYSxiLGMsZCk6bnVsbDtjYXNlIHRhOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsfWlmKFBnKGMpfHxMYShjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDpuKGEsYixjLGQsbnVsbCk7UmcoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDKGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9YS5nZXQoYyl8fFxubnVsbCxoKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGQudHlwZT09PXVhP24oYixhLGQucHJvcHMuY2hpbGRyZW4sZSxkLmtleSk6ayhiLGEsZCxlKTtjYXNlIHRhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpfWlmKFBnKGQpfHxMYShkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxuKGIsYSxkLGUsbnVsbCk7UmcoYixkKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB4KGUsZyxoLGspe2Zvcih2YXIgbD1udWxsLHQ9bnVsbCx1PWcsej1nPTAscT1udWxsO251bGwhPT11JiZ6PGgubGVuZ3RoO3orKyl7dS5pbmRleD56PyhxPXUsdT1udWxsKTpxPXUuc2libGluZzt2YXIgbj1wKGUsdSxoW3pdLGspO2lmKG51bGw9PT1uKXtudWxsPT09dSYmKHU9cSk7YnJlYWt9YSYmdSYmbnVsbD09PVxubi5hbHRlcm5hdGUmJmIoZSx1KTtnPWYobixnLHopO251bGw9PT10P2w9bjp0LnNpYmxpbmc9bjt0PW47dT1xfWlmKHo9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7ejxoLmxlbmd0aDt6KyspdT1BKGUsaFt6XSxrKSxudWxsIT09dSYmKGc9Zih1LGcseiksbnVsbD09PXQ/bD11OnQuc2libGluZz11LHQ9dSk7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpO3o8aC5sZW5ndGg7eisrKXE9Qyh1LGUseixoW3pdLGspLG51bGwhPT1xJiYoYSYmbnVsbCE9PXEuYWx0ZXJuYXRlJiZ1LmRlbGV0ZShudWxsPT09cS5rZXk/ejpxLmtleSksZz1mKHEsZyx6KSxudWxsPT09dD9sPXE6dC5zaWJsaW5nPXEsdD1xKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfWZ1bmN0aW9uIHcoZSxnLGgsayl7dmFyIGw9TGEoaCk7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGwpdGhyb3cgRXJyb3IoeSgxNTApKTtoPWwuY2FsbChoKTtpZihudWxsPT1cbmgpdGhyb3cgRXJyb3IoeSgxNTEpKTtmb3IodmFyIHQ9bD1udWxsLHU9Zyx6PWc9MCxxPW51bGwsbj1oLm5leHQoKTtudWxsIT09dSYmIW4uZG9uZTt6Kyssbj1oLm5leHQoKSl7dS5pbmRleD56PyhxPXUsdT1udWxsKTpxPXUuc2libGluZzt2YXIgdz1wKGUsdSxuLnZhbHVlLGspO2lmKG51bGw9PT13KXtudWxsPT09dSYmKHU9cSk7YnJlYWt9YSYmdSYmbnVsbD09PXcuYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKHcsZyx6KTtudWxsPT09dD9sPXc6dC5zaWJsaW5nPXc7dD13O3U9cX1pZihuLmRvbmUpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoOyFuLmRvbmU7eisrLG49aC5uZXh0KCkpbj1BKGUsbi52YWx1ZSxrKSxudWxsIT09biYmKGc9ZihuLGcseiksbnVsbD09PXQ/bD1uOnQuc2libGluZz1uLHQ9bik7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpOyFuLmRvbmU7eisrLG49aC5uZXh0KCkpbj1DKHUsZSx6LG4udmFsdWUsayksbnVsbCE9PW4mJihhJiZudWxsIT09bi5hbHRlcm5hdGUmJlxudS5kZWxldGUobnVsbD09PW4ua2V5P3o6bi5rZXkpLGc9ZihuLGcseiksbnVsbD09PXQ/bD1uOnQuc2libGluZz1uLHQ9bik7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1yZXR1cm4gZnVuY3Rpb24oYSxkLGYsaCl7dmFyIGs9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09dWEmJm51bGw9PT1mLmtleTtrJiYoZj1mLnByb3BzLmNoaWxkcmVuKTt2YXIgbD1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mO2lmKGwpc3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2Ugc2E6YTp7bD1mLmtleTtmb3Ioaz1kO251bGwhPT1rOyl7aWYoay5rZXk9PT1sKXtzd2l0Y2goay50YWcpe2Nhc2UgNzppZihmLnR5cGU9PT11YSl7YyhhLGsuc2libGluZyk7ZD1lKGssZi5wcm9wcy5jaGlsZHJlbik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1icmVhaztkZWZhdWx0OmlmKGsuZWxlbWVudFR5cGU9PT1mLnR5cGUpe2MoYSxrLnNpYmxpbmcpO1xuZD1lKGssZi5wcm9wcyk7ZC5yZWY9UWcoYSxrLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9fWMoYSxrKTticmVha31lbHNlIGIoYSxrKTtrPWsuc2libGluZ31mLnR5cGU9PT11YT8oZD1YZyhmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9VmcoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9UWcoYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIHRhOmE6e2ZvcihrPWYua2V5O251bGwhPT1kOyl7aWYoZC5rZXk9PT1rKWlmKDQ9PT1kLnRhZyYmZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbz09PWYuY29udGFpbmVySW5mbyYmZC5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb249PT1mLmltcGxlbWVudGF0aW9uKXtjKGEsZC5zaWJsaW5nKTtkPWUoZCxmLmNoaWxkcmVufHxbXSk7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPVxuV2coZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSl9aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBmfHxcIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYpLGQucmV0dXJuPWEsYT1kKTooYyhhLGQpLGQ9VWcoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSk7aWYoUGcoZikpcmV0dXJuIHgoYSxkLGYsaCk7aWYoTGEoZikpcmV0dXJuIHcoYSxkLGYsaCk7bCYmUmcoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMjI6Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp0aHJvdyBFcnJvcih5KDE1MixSYShhLnR5cGUpfHxcIkNvbXBvbmVudFwiKSk7fXJldHVybiBjKGEsZCl9fXZhciBZZz1TZyghMCksWmc9U2coITEpLCRnPXt9LGFoPUJmKCRnKSxiaD1CZigkZyksY2g9QmYoJGcpO1xuZnVuY3Rpb24gZGgoYSl7aWYoYT09PSRnKXRocm93IEVycm9yKHkoMTc0KSk7cmV0dXJuIGF9ZnVuY3Rpb24gZWgoYSxiKXtJKGNoLGIpO0koYmgsYSk7SShhaCwkZyk7YT1iLm5vZGVUeXBlO3N3aXRjaChhKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTptYihudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6YT04PT09YT9iLnBhcmVudE5vZGU6YixiPWEubmFtZXNwYWNlVVJJfHxudWxsLGE9YS50YWdOYW1lLGI9bWIoYixhKX1IKGFoKTtJKGFoLGIpfWZ1bmN0aW9uIGZoKCl7SChhaCk7SChiaCk7SChjaCl9ZnVuY3Rpb24gZ2goYSl7ZGgoY2guY3VycmVudCk7dmFyIGI9ZGgoYWguY3VycmVudCk7dmFyIGM9bWIoYixhLnR5cGUpO2IhPT1jJiYoSShiaCxhKSxJKGFoLGMpKX1mdW5jdGlvbiBoaChhKXtiaC5jdXJyZW50PT09YSYmKEgoYWgpLEgoYmgpKX12YXIgUD1CZigwKTtcbmZ1bmN0aW9uIGloKGEpe2Zvcih2YXIgYj1hO251bGwhPT1iOyl7aWYoMTM9PT1iLnRhZyl7dmFyIGM9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbD09PWN8fFwiJD9cIj09PWMuZGF0YXx8XCIkIVwiPT09Yy5kYXRhKSlyZXR1cm4gYn1lbHNlIGlmKDE5PT09Yi50YWcmJnZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5yZXZlYWxPcmRlcil7aWYoMCE9PShiLmZsYWdzJjY0KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9dmFyIGpoPW51bGwsa2g9bnVsbCxsaD0hMTtcbmZ1bmN0aW9uIG1oKGEsYil7dmFyIGM9bmgoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZmxhZ3M9ODtudWxsIT09YS5sYXN0RWZmZWN0PyhhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGEubGFzdEVmZmVjdD1jKTphLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1jfWZ1bmN0aW9uIG9oKGEsYil7c3dpdGNoKGEudGFnKXtjYXNlIDU6dmFyIGM9YS50eXBlO2I9MSE9PWIubm9kZVR5cGV8fGMudG9Mb3dlckNhc2UoKSE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9udWxsOmI7cmV0dXJuIG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDY6cmV0dXJuIGI9XCJcIj09PWEucGVuZGluZ1Byb3BzfHwzIT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgMTM6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBwaChhKXtpZihsaCl7dmFyIGI9a2g7aWYoYil7dmFyIGM9YjtpZighb2goYSxiKSl7Yj1yZihjLm5leHRTaWJsaW5nKTtpZighYnx8IW9oKGEsYikpe2EuZmxhZ3M9YS5mbGFncyYtMTAyNXwyO2xoPSExO2poPWE7cmV0dXJufW1oKGpoLGMpfWpoPWE7a2g9cmYoYi5maXJzdENoaWxkKX1lbHNlIGEuZmxhZ3M9YS5mbGFncyYtMTAyNXwyLGxoPSExLGpoPWF9fWZ1bmN0aW9uIHFoKGEpe2ZvcihhPWEucmV0dXJuO251bGwhPT1hJiY1IT09YS50YWcmJjMhPT1hLnRhZyYmMTMhPT1hLnRhZzspYT1hLnJldHVybjtqaD1hfVxuZnVuY3Rpb24gcmgoYSl7aWYoYSE9PWpoKXJldHVybiExO2lmKCFsaClyZXR1cm4gcWgoYSksbGg9ITAsITE7dmFyIGI9YS50eXBlO2lmKDUhPT1hLnRhZ3x8XCJoZWFkXCIhPT1iJiZcImJvZHlcIiE9PWImJiFuZihiLGEubWVtb2l6ZWRQcm9wcykpZm9yKGI9a2g7YjspbWgoYSxiKSxiPXJmKGIubmV4dFNpYmxpbmcpO3FoKGEpO2lmKDEzPT09YS50YWcpe2E9YS5tZW1vaXplZFN0YXRlO2E9bnVsbCE9PWE/YS5kZWh5ZHJhdGVkOm51bGw7aWYoIWEpdGhyb3cgRXJyb3IoeSgzMTcpKTthOnthPWEubmV4dFNpYmxpbmc7Zm9yKGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIi8kXCI9PT1jKXtpZigwPT09Yil7a2g9cmYoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZVwiJFwiIT09YyYmXCIkIVwiIT09YyYmXCIkP1wiIT09Y3x8YisrfWE9YS5uZXh0U2libGluZ31raD1udWxsfX1lbHNlIGtoPWpoP3JmKGEuc3RhdGVOb2RlLm5leHRTaWJsaW5nKTpudWxsO3JldHVybiEwfVxuZnVuY3Rpb24gc2goKXtraD1qaD1udWxsO2xoPSExfXZhciB0aD1bXTtmdW5jdGlvbiB1aCgpe2Zvcih2YXIgYT0wO2E8dGgubGVuZ3RoO2ErKyl0aFthXS5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1udWxsO3RoLmxlbmd0aD0wfXZhciB2aD1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHdoPXJhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLHhoPTAsUj1udWxsLFM9bnVsbCxUPW51bGwseWg9ITEsemg9ITE7ZnVuY3Rpb24gQWgoKXt0aHJvdyBFcnJvcih5KDMyMSkpO31mdW5jdGlvbiBCaChhLGIpe2lmKG51bGw9PT1iKXJldHVybiExO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGgmJmM8YS5sZW5ndGg7YysrKWlmKCFIZShhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfVxuZnVuY3Rpb24gQ2goYSxiLGMsZCxlLGYpe3hoPWY7Uj1iO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtiLmxhbmVzPTA7dmguY3VycmVudD1udWxsPT09YXx8bnVsbD09PWEubWVtb2l6ZWRTdGF0ZT9EaDpFaDthPWMoZCxlKTtpZih6aCl7Zj0wO2Rve3poPSExO2lmKCEoMjU+ZikpdGhyb3cgRXJyb3IoeSgzMDEpKTtmKz0xO1Q9Uz1udWxsO2IudXBkYXRlUXVldWU9bnVsbDt2aC5jdXJyZW50PUZoO2E9YyhkLGUpfXdoaWxlKHpoKX12aC5jdXJyZW50PUdoO2I9bnVsbCE9PVMmJm51bGwhPT1TLm5leHQ7eGg9MDtUPVM9Uj1udWxsO3loPSExO2lmKGIpdGhyb3cgRXJyb3IoeSgzMDApKTtyZXR1cm4gYX1mdW5jdGlvbiBIaCgpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwsYmFzZVF1ZXVlOm51bGwscXVldWU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZT1UPWE6VD1ULm5leHQ9YTtyZXR1cm4gVH1cbmZ1bmN0aW9uIEloKCl7aWYobnVsbD09PVMpe3ZhciBhPVIuYWx0ZXJuYXRlO2E9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGx9ZWxzZSBhPVMubmV4dDt2YXIgYj1udWxsPT09VD9SLm1lbW9pemVkU3RhdGU6VC5uZXh0O2lmKG51bGwhPT1iKVQ9YixTPWE7ZWxzZXtpZihudWxsPT09YSl0aHJvdyBFcnJvcih5KDMxMCkpO1M9YTthPXttZW1vaXplZFN0YXRlOlMubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6Uy5iYXNlU3RhdGUsYmFzZVF1ZXVlOlMuYmFzZVF1ZXVlLHF1ZXVlOlMucXVldWUsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWF9cmV0dXJuIFR9ZnVuY3Rpb24gSmgoYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBLaChhKXt2YXIgYj1JaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih5KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPVMsZT1kLmJhc2VRdWV1ZSxmPWMucGVuZGluZztpZihudWxsIT09Zil7aWYobnVsbCE9PWUpe3ZhciBnPWUubmV4dDtlLm5leHQ9Zi5uZXh0O2YubmV4dD1nfWQuYmFzZVF1ZXVlPWU9ZjtjLnBlbmRpbmc9bnVsbH1pZihudWxsIT09ZSl7ZT1lLm5leHQ7ZD1kLmJhc2VTdGF0ZTt2YXIgaD1nPWY9bnVsbCxrPWU7ZG97dmFyIGw9ay5sYW5lO2lmKCh4aCZsKT09PWwpbnVsbCE9PWgmJihoPWgubmV4dD17bGFuZTowLGFjdGlvbjprLmFjdGlvbixlYWdlclJlZHVjZXI6ay5lYWdlclJlZHVjZXIsZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfSksZD1rLmVhZ2VyUmVkdWNlcj09PWE/ay5lYWdlclN0YXRlOmEoZCxrLmFjdGlvbik7ZWxzZXt2YXIgbj17bGFuZTpsLGFjdGlvbjprLmFjdGlvbixlYWdlclJlZHVjZXI6ay5lYWdlclJlZHVjZXIsXG5lYWdlclN0YXRlOmsuZWFnZXJTdGF0ZSxuZXh0Om51bGx9O251bGw9PT1oPyhnPWg9bixmPWQpOmg9aC5uZXh0PW47Ui5sYW5lc3w9bDtEZ3w9bH1rPWsubmV4dH13aGlsZShudWxsIT09ayYmayE9PWUpO251bGw9PT1oP2Y9ZDpoLm5leHQ9ZztIZShkLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWQ7Yi5iYXNlU3RhdGU9ZjtiLmJhc2VRdWV1ZT1oO2MubGFzdFJlbmRlcmVkU3RhdGU9ZH1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gTGgoYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1jLmRpc3BhdGNoLGU9Yy5wZW5kaW5nLGY9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1lKXtjLnBlbmRpbmc9bnVsbDt2YXIgZz1lPWUubmV4dDtkbyBmPWEoZixnLmFjdGlvbiksZz1nLm5leHQ7d2hpbGUoZyE9PWUpO0hlKGYsYi5tZW1vaXplZFN0YXRlKXx8KHVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtudWxsPT09Yi5iYXNlUXVldWUmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2YsZF19XG5mdW5jdGlvbiBNaChhLGIsYyl7dmFyIGQ9Yi5fZ2V0VmVyc2lvbjtkPWQoYi5fc291cmNlKTt2YXIgZT1iLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5O2lmKG51bGwhPT1lKWE9ZT09PWQ7ZWxzZSBpZihhPWEubXV0YWJsZVJlYWRMYW5lcyxhPSh4aCZhKT09PWEpYi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1kLHRoLnB1c2goYik7aWYoYSlyZXR1cm4gYyhiLl9zb3VyY2UpO3RoLnB1c2goYik7dGhyb3cgRXJyb3IoeSgzNTApKTt9XG5mdW5jdGlvbiBOaChhLGIsYyxkKXt2YXIgZT1VO2lmKG51bGw9PT1lKXRocm93IEVycm9yKHkoMzQ5KSk7dmFyIGY9Yi5fZ2V0VmVyc2lvbixnPWYoYi5fc291cmNlKSxoPXZoLmN1cnJlbnQsaz1oLnVzZVN0YXRlKGZ1bmN0aW9uKCl7cmV0dXJuIE1oKGUsYixjKX0pLGw9a1sxXSxuPWtbMF07az1UO3ZhciBBPWEubWVtb2l6ZWRTdGF0ZSxwPUEucmVmcyxDPXAuZ2V0U25hcHNob3QseD1BLnNvdXJjZTtBPUEuc3Vic2NyaWJlO3ZhciB3PVI7YS5tZW1vaXplZFN0YXRlPXtyZWZzOnAsc291cmNlOmIsc3Vic2NyaWJlOmR9O2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cC5nZXRTbmFwc2hvdD1jO3Auc2V0U25hcHNob3Q9bDt2YXIgYT1mKGIuX3NvdXJjZSk7aWYoIUhlKGcsYSkpe2E9YyhiLl9zb3VyY2UpO0hlKG4sYSl8fChsKGEpLGE9SWcodyksZS5tdXRhYmxlUmVhZExhbmVzfD1hJmUucGVuZGluZ0xhbmVzKTthPWUubXV0YWJsZVJlYWRMYW5lcztlLmVudGFuZ2xlZExhbmVzfD1hO2Zvcih2YXIgZD1cbmUuZW50YW5nbGVtZW50cyxoPWE7MDxoOyl7dmFyIGs9MzEtVmMoaCksdj0xPDxrO2Rba118PWE7aCY9fnZ9fX0sW2MsYixkXSk7aC51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4gZChiLl9zb3VyY2UsZnVuY3Rpb24oKXt2YXIgYT1wLmdldFNuYXBzaG90LGM9cC5zZXRTbmFwc2hvdDt0cnl7YyhhKGIuX3NvdXJjZSkpO3ZhciBkPUlnKHcpO2UubXV0YWJsZVJlYWRMYW5lc3w9ZCZlLnBlbmRpbmdMYW5lc31jYXRjaChxKXtjKGZ1bmN0aW9uKCl7dGhyb3cgcTt9KX19KX0sW2IsZF0pO0hlKEMsYykmJkhlKHgsYikmJkhlKEEsZCl8fChhPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOm59LGEuZGlzcGF0Y2g9bD1PaC5iaW5kKG51bGwsUixhKSxrLnF1ZXVlPWEsay5iYXNlUXVldWU9bnVsbCxuPU1oKGUsYixjKSxrLm1lbW9pemVkU3RhdGU9ay5iYXNlU3RhdGU9bik7cmV0dXJuIG59XG5mdW5jdGlvbiBQaChhLGIsYyl7dmFyIGQ9SWgoKTtyZXR1cm4gTmgoZCxhLGIsYyl9ZnVuY3Rpb24gUWgoYSl7dmFyIGI9SGgoKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmKGE9YSgpKTtiLm1lbW9pemVkU3RhdGU9Yi5iYXNlU3RhdGU9YTthPWIucXVldWU9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6SmgsbGFzdFJlbmRlcmVkU3RhdGU6YX07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19XG5mdW5jdGlvbiBSaChhLGIsYyxkKXthPXt0YWc6YSxjcmVhdGU6YixkZXN0cm95OmMsZGVwczpkLG5leHQ6bnVsbH07Yj1SLnVwZGF0ZVF1ZXVlO251bGw9PT1iPyhiPXtsYXN0RWZmZWN0Om51bGx9LFIudXBkYXRlUXVldWU9YixiLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihjPWIubGFzdEVmZmVjdCxudWxsPT09Yz9iLmxhc3RFZmZlY3Q9YS5uZXh0PWE6KGQ9Yy5uZXh0LGMubmV4dD1hLGEubmV4dD1kLGIubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9ZnVuY3Rpb24gU2goYSl7dmFyIGI9SGgoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX1mdW5jdGlvbiBUaCgpe3JldHVybiBJaCgpLm1lbW9pemVkU3RhdGV9ZnVuY3Rpb24gVWgoYSxiLGMsZCl7dmFyIGU9SGgoKTtSLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1SaCgxfGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gVmgoYSxiLGMsZCl7dmFyIGU9SWgoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Uyl7dmFyIGc9Uy5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZCaChkLGcuZGVwcykpe1JoKGIsYyxmLGQpO3JldHVybn19Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsZixkKX1mdW5jdGlvbiBXaChhLGIpe3JldHVybiBVaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFhoKGEsYil7cmV0dXJuIFZoKDUxNiw0LGEsYil9ZnVuY3Rpb24gWWgoYSxiKXtyZXR1cm4gVmgoNCwyLGEsYil9ZnVuY3Rpb24gWmgoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYT1hKCksYihhKSxmdW5jdGlvbigpe2IobnVsbCl9O2lmKG51bGwhPT1iJiZ2b2lkIDAhPT1iKXJldHVybiBhPWEoKSxiLmN1cnJlbnQ9YSxmdW5jdGlvbigpe2IuY3VycmVudD1udWxsfX1cbmZ1bmN0aW9uICRoKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gVmgoNCwyLFpoLmJpbmQobnVsbCxiLGEpLGMpfWZ1bmN0aW9uIGFpKCl7fWZ1bmN0aW9uIGJpKGEsYil7dmFyIGM9SWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkJoKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfWZ1bmN0aW9uIGNpKGEsYil7dmFyIGM9SWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkJoKGIsZFsxXSkpcmV0dXJuIGRbMF07YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfVxuZnVuY3Rpb24gZGkoYSxiKXt2YXIgYz1lZygpO2dnKDk4PmM/OTg6YyxmdW5jdGlvbigpe2EoITApfSk7Z2coOTc8Yz85NzpjLGZ1bmN0aW9uKCl7dmFyIGM9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2EoITEpLGIoKX1maW5hbGx5e3doLnRyYW5zaXRpb249Y319KX1cbmZ1bmN0aW9uIE9oKGEsYixjKXt2YXIgZD1IZygpLGU9SWcoYSksZj17bGFuZTplLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LGc9Yi5wZW5kaW5nO251bGw9PT1nP2YubmV4dD1mOihmLm5leHQ9Zy5uZXh0LGcubmV4dD1mKTtiLnBlbmRpbmc9ZjtnPWEuYWx0ZXJuYXRlO2lmKGE9PT1SfHxudWxsIT09ZyYmZz09PVIpemg9eWg9ITA7ZWxzZXtpZigwPT09YS5sYW5lcyYmKG51bGw9PT1nfHwwPT09Zy5sYW5lcykmJihnPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZykpdHJ5e3ZhciBoPWIubGFzdFJlbmRlcmVkU3RhdGUsaz1nKGgsYyk7Zi5lYWdlclJlZHVjZXI9ZztmLmVhZ2VyU3RhdGU9aztpZihIZShrLGgpKXJldHVybn1jYXRjaChsKXt9ZmluYWxseXt9SmcoYSxlLGQpfX1cbnZhciBHaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6QWgsdXNlQ29udGV4dDpBaCx1c2VFZmZlY3Q6QWgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpBaCx1c2VMYXlvdXRFZmZlY3Q6QWgsdXNlTWVtbzpBaCx1c2VSZWR1Y2VyOkFoLHVzZVJlZjpBaCx1c2VTdGF0ZTpBaCx1c2VEZWJ1Z1ZhbHVlOkFoLHVzZURlZmVycmVkVmFsdWU6QWgsdXNlVHJhbnNpdGlvbjpBaCx1c2VNdXRhYmxlU291cmNlOkFoLHVzZU9wYXF1ZUlkZW50aWZpZXI6QWgsdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxEaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtIaCgpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpXaCx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gVWgoNCwyLFpoLmJpbmQobnVsbCxcbmIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBVaCg0LDIsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPUhoKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUhoKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPWQucXVldWU9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6YSxsYXN0UmVuZGVyZWRTdGF0ZTpifTthPWEuZGlzcGF0Y2g9T2guYmluZChudWxsLFIsYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOlNoLHVzZVN0YXRlOlFoLHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1RaChhKSxjPWJbMF0sZD1iWzFdO1doKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjtcbndoLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1RaCghMSksYj1hWzBdO2E9ZGkuYmluZChudWxsLGFbMV0pO1NoKGEpO3JldHVyblthLGJdfSx1c2VNdXRhYmxlU291cmNlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2QubWVtb2l6ZWRTdGF0ZT17cmVmczp7Z2V0U25hcHNob3Q6YixzZXRTbmFwc2hvdDpudWxsfSxzb3VyY2U6YSxzdWJzY3JpYmU6Y307cmV0dXJuIE5oKGQsYSxiLGMpfSx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7aWYobGgpe3ZhciBhPSExLGI9dWYoZnVuY3Rpb24oKXthfHwoYT0hMCxjKFwicjpcIisodGYrKykudG9TdHJpbmcoMzYpKSk7dGhyb3cgRXJyb3IoeSgzNTUpKTt9KSxjPVFoKGIpWzFdOzA9PT0oUi5tb2RlJjIpJiYoUi5mbGFnc3w9NTE2LFJoKDUsZnVuY3Rpb24oKXtjKFwicjpcIisodGYrKykudG9TdHJpbmcoMzYpKX0sXG52b2lkIDAsbnVsbCkpO3JldHVybiBifWI9XCJyOlwiKyh0ZisrKS50b1N0cmluZygzNik7UWgoYik7cmV0dXJuIGJ9LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRWg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6JGgsdXNlTGF5b3V0RWZmZWN0OlloLHVzZU1lbW86Y2ksdXNlUmVkdWNlcjpLaCx1c2VSZWY6VGgsdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gS2goSmgpfSx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9S2goSmgpLGM9YlswXSxkPWJbMV07WGgoZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1LaChKaClbMF07cmV0dXJuW1RoKCkuY3VycmVudCxcbmFdfSx1c2VNdXRhYmxlU291cmNlOlBoLHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtyZXR1cm4gS2goSmgpWzBdfSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEZoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6TGgsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIExoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUxoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9TGgoSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIExoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxlaT1yYS5SZWFjdEN1cnJlbnRPd25lcix1Zz0hMTtmdW5jdGlvbiBmaShhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP1pnKGIsbnVsbCxjLGQpOllnKGIsYS5jaGlsZCxjLGQpfWZ1bmN0aW9uIGdpKGEsYixjLGQsZSl7Yz1jLnJlbmRlcjt2YXIgZj1iLnJlZjt0ZyhiLGUpO2Q9Q2goYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhdWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tNTE3LGEubGFuZXMmPX5lLGhpKGEsYixlKTtiLmZsYWdzfD0xO2ZpKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaWkoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hKXt2YXIgZz1jLnR5cGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJiFqaShnKSYmdm9pZCAwPT09Zy5kZWZhdWx0UHJvcHMmJm51bGw9PT1jLmNvbXBhcmUmJnZvaWQgMD09PWMuZGVmYXVsdFByb3BzKXJldHVybiBiLnRhZz0xNSxiLnR5cGU9ZyxraShhLGIsZyxkLGUsZik7YT1WZyhjLnR5cGUsbnVsbCxkLGIsYi5tb2RlLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1nPWEuY2hpbGQ7aWYoMD09PShlJmYpJiYoZT1nLm1lbW9pemVkUHJvcHMsYz1jLmNvbXBhcmUsYz1udWxsIT09Yz9jOkplLGMoZSxkKSYmYS5yZWY9PT1iLnJlZikpcmV0dXJuIGhpKGEsYixmKTtiLmZsYWdzfD0xO2E9VGcoZyxkKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9XG5mdW5jdGlvbiBraShhLGIsYyxkLGUsZil7aWYobnVsbCE9PWEmJkplKGEubWVtb2l6ZWRQcm9wcyxkKSYmYS5yZWY9PT1iLnJlZilpZih1Zz0hMSwwIT09KGYmZSkpMCE9PShhLmZsYWdzJjE2Mzg0KSYmKHVnPSEwKTtlbHNlIHJldHVybiBiLmxhbmVzPWEubGFuZXMsaGkoYSxiLGYpO3JldHVybiBsaShhLGIsYyxkLGYpfVxuZnVuY3Rpb24gbWkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5jaGlsZHJlbixmPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO2lmKFwiaGlkZGVuXCI9PT1kLm1vZGV8fFwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIj09PWQubW9kZSlpZigwPT09KGIubW9kZSY0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLGMpO2Vsc2UgaWYoMCE9PShjJjEwNzM3NDE4MjQpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjB9LG5pKGIsbnVsbCE9PWY/Zi5iYXNlTGFuZXM6Yyk7ZWxzZSByZXR1cm4gYT1udWxsIT09Zj9mLmJhc2VMYW5lc3xjOmMsYi5sYW5lcz1iLmNoaWxkTGFuZXM9MTA3Mzc0MTgyNCxiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczphfSxuaShiLGEpLG51bGw7ZWxzZSBudWxsIT09Zj8oZD1mLmJhc2VMYW5lc3xjLGIubWVtb2l6ZWRTdGF0ZT1udWxsKTpkPWMsbmkoYixkKTtmaShhLGIsZSxjKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIG9pKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZmxhZ3N8PTEyOH1mdW5jdGlvbiBsaShhLGIsYyxkLGUpe3ZhciBmPUZmKGMpP0RmOk0uY3VycmVudDtmPUVmKGIsZik7dGcoYixlKTtjPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIHBpKGEsYixjLGQsZSl7aWYoRmYoYykpe3ZhciBmPSEwO0pmKGIpfWVsc2UgZj0hMTt0ZyhiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSludWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKSxNZyhiLGMsZCksT2coYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGs9Zy5jb250ZXh0LGw9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGwmJm51bGwhPT1sP2w9dmcobCk6KGw9RmYoYyk/RGY6TS5jdXJyZW50LGw9RWYoYixsKSk7dmFyIG49Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygbnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7QXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlxuXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1kfHxrIT09bCkmJk5nKGIsZyxkLGwpO3dnPSExO3ZhciBwPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXA7Q2coYixkLGcsZSk7az1iLm1lbW9pemVkU3RhdGU7aCE9PWR8fHAhPT1rfHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbiYmKEdnKGIsYyxuLGQpLGs9Yi5tZW1vaXplZFN0YXRlKSwoaD13Z3x8TGcoYixjLGgsZCxwLGssbCkpPyhBfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnQmJmcuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PVxudHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGcucHJvcHM9ZCxnLnN0YXRlPWssZy5jb250ZXh0PWwsZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSxkPSExKX1lbHNle2c9Yi5zdGF0ZU5vZGU7eWcoYSxiKTtoPWIubWVtb2l6ZWRQcm9wcztsPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpsZyhiLnR5cGUsaCk7Zy5wcm9wcz1sO0E9Yi5wZW5kaW5nUHJvcHM7cD1nLmNvbnRleHQ7az1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az12ZyhrKTooaz1GZihjKT9EZjpNLmN1cnJlbnQsaz1FZihiLGspKTt2YXIgQz1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczsobj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgQ3x8XG5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PUF8fHAhPT1rKSYmTmcoYixnLGQsayk7d2c9ITE7cD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO3ZhciB4PWIubWVtb2l6ZWRTdGF0ZTtoIT09QXx8cCE9PXh8fE4uY3VycmVudHx8d2c/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBDJiYoR2coYixjLEMsZCkseD1iLm1lbW9pemVkU3RhdGUpLChsPXdnfHxMZyhiLGMsbCxkLHAseCxrKSk/KG58fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsXG54LGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQseCxrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmZsYWdzfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0yNTYpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT14KSxnLnByb3BzPWQsZy5zdGF0ZT14LGcuY29udGV4dD1rLGQ9bCk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8XG5oPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0yNTYpLGQ9ITEpfXJldHVybiBxaShhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBxaShhLGIsYyxkLGUsZil7b2koYSxiKTt2YXIgZz0wIT09KGIuZmxhZ3MmNjQpO2lmKCFkJiYhZylyZXR1cm4gZSYmS2YoYixjLCExKSxoaShhLGIsZik7ZD1iLnN0YXRlTm9kZTtlaS5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmZsYWdzfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPVlnKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9WWcoYixudWxsLGgsZikpOmZpKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJktmKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gcmkoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9IZihhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZIZihhLGIuY29udGV4dCwhMSk7ZWgoYSxiLmNvbnRhaW5lckluZm8pfVxudmFyIHNpPXtkZWh5ZHJhdGVkOm51bGwscmV0cnlMYW5lOjB9O1xuZnVuY3Rpb24gdGkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9UC5jdXJyZW50LGY9ITEsZzsoZz0wIT09KGIuZmxhZ3MmNjQpKXx8KGc9bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGU/ITE6MCE9PShlJjIpKTtnPyhmPSEwLGIuZmxhZ3MmPS02NSk6bnVsbCE9PWEmJm51bGw9PT1hLm1lbW9pemVkU3RhdGV8fHZvaWQgMD09PWQuZmFsbGJhY2t8fCEwPT09ZC51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8KGV8PTEpO0koUCxlJjEpO2lmKG51bGw9PT1hKXt2b2lkIDAhPT1kLmZhbGxiYWNrJiZwaChiKTthPWQuY2hpbGRyZW47ZT1kLmZhbGxiYWNrO2lmKGYpcmV0dXJuIGE9dWkoYixhLGUsYyksYi5jaGlsZC5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6Y30sYi5tZW1vaXplZFN0YXRlPXNpLGE7aWYoXCJudW1iZXJcIj09PXR5cGVvZiBkLnVuc3RhYmxlX2V4cGVjdGVkTG9hZFRpbWUpcmV0dXJuIGE9dWkoYixhLGUsYyksYi5jaGlsZC5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6Y30sXG5iLm1lbW9pemVkU3RhdGU9c2ksYi5sYW5lcz0zMzU1NDQzMixhO2M9dmkoe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46YX0sYi5tb2RlLGMsbnVsbCk7Yy5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1jfWlmKG51bGwhPT1hLm1lbW9pemVkU3RhdGUpe2lmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306e2Jhc2VMYW5lczplLmJhc2VMYW5lc3xjfSxmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jLGIubWVtb2l6ZWRTdGF0ZT1zaSxkO2M9eGkoYSxiLGQuY2hpbGRyZW4sYyk7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGN9aWYoZilyZXR1cm4gZD13aShhLGIsZC5jaGlsZHJlbixkLmZhbGxiYWNrLGMpLGY9Yi5jaGlsZCxlPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZSxmLm1lbW9pemVkU3RhdGU9bnVsbD09PWU/e2Jhc2VMYW5lczpjfTpcbntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWZ1bmN0aW9uIHVpKGEsYixjLGQpe3ZhciBlPWEubW9kZSxmPWEuY2hpbGQ7Yj17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmJ9OzA9PT0oZSYyKSYmbnVsbCE9PWY/KGYuY2hpbGRMYW5lcz0wLGYucGVuZGluZ1Byb3BzPWIpOmY9dmkoYixlLDAsbnVsbCk7Yz1YZyhjLGUsZCxudWxsKTtmLnJldHVybj1hO2MucmV0dXJuPWE7Zi5zaWJsaW5nPWM7YS5jaGlsZD1mO3JldHVybiBjfVxuZnVuY3Rpb24geGkoYSxiLGMsZCl7dmFyIGU9YS5jaGlsZDthPWUuc2libGluZztjPVRnKGUse21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46Y30pOzA9PT0oYi5tb2RlJjIpJiYoYy5sYW5lcz1kKTtjLnJldHVybj1iO2Muc2libGluZz1udWxsO251bGwhPT1hJiYoYS5uZXh0RWZmZWN0PW51bGwsYS5mbGFncz04LGIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWEpO3JldHVybiBiLmNoaWxkPWN9XG5mdW5jdGlvbiB3aShhLGIsYyxkLGUpe3ZhciBmPWIubW9kZSxnPWEuY2hpbGQ7YT1nLnNpYmxpbmc7dmFyIGg9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpjfTswPT09KGYmMikmJmIuY2hpbGQhPT1nPyhjPWIuY2hpbGQsYy5jaGlsZExhbmVzPTAsYy5wZW5kaW5nUHJvcHM9aCxnPWMubGFzdEVmZmVjdCxudWxsIT09Zz8oYi5maXJzdEVmZmVjdD1jLmZpcnN0RWZmZWN0LGIubGFzdEVmZmVjdD1nLGcubmV4dEVmZmVjdD1udWxsKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsKTpjPVRnKGcsaCk7bnVsbCE9PWE/ZD1UZyhhLGQpOihkPVhnKGQsZixlLG51bGwpLGQuZmxhZ3N8PTIpO2QucmV0dXJuPWI7Yy5yZXR1cm49YjtjLnNpYmxpbmc9ZDtiLmNoaWxkPWM7cmV0dXJuIGR9ZnVuY3Rpb24geWkoYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7c2coYS5yZXR1cm4sYil9XG5mdW5jdGlvbiB6aShhLGIsYyxkLGUsZil7dmFyIGc9YS5tZW1vaXplZFN0YXRlO251bGw9PT1nP2EubWVtb2l6ZWRTdGF0ZT17aXNCYWNrd2FyZHM6YixyZW5kZXJpbmc6bnVsbCxyZW5kZXJpbmdTdGFydFRpbWU6MCxsYXN0OmQsdGFpbDpjLHRhaWxNb2RlOmUsbGFzdEVmZmVjdDpmfTooZy5pc0JhY2t3YXJkcz1iLGcucmVuZGVyaW5nPW51bGwsZy5yZW5kZXJpbmdTdGFydFRpbWU9MCxnLmxhc3Q9ZCxnLnRhaWw9YyxnLnRhaWxNb2RlPWUsZy5sYXN0RWZmZWN0PWYpfVxuZnVuY3Rpb24gQWkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5yZXZlYWxPcmRlcixmPWQudGFpbDtmaShhLGIsZC5jaGlsZHJlbixjKTtkPVAuY3VycmVudDtpZigwIT09KGQmMikpZD1kJjF8MixiLmZsYWdzfD02NDtlbHNle2lmKG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmNjQpKWE6Zm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2lmKDEzPT09YS50YWcpbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmeWkoYSxjKTtlbHNlIGlmKDE5PT09YS50YWcpeWkoYSxjKTtlbHNlIGlmKG51bGwhPT1hLmNoaWxkKXthLmNoaWxkLnJldHVybj1hO2E9YS5jaGlsZDtjb250aW51ZX1pZihhPT09YilicmVhayBhO2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8YS5yZXR1cm49PT1iKWJyZWFrIGE7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2E9YS5zaWJsaW5nfWQmPTF9SShQLGQpO2lmKDA9PT0oYi5tb2RlJjIpKWIubWVtb2l6ZWRTdGF0ZT1cbm51bGw7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcImZvcndhcmRzXCI6Yz1iLmNoaWxkO2ZvcihlPW51bGw7bnVsbCE9PWM7KWE9Yy5hbHRlcm5hdGUsbnVsbCE9PWEmJm51bGw9PT1paChhKSYmKGU9YyksYz1jLnNpYmxpbmc7Yz1lO251bGw9PT1jPyhlPWIuY2hpbGQsYi5jaGlsZD1udWxsKTooZT1jLnNpYmxpbmcsYy5zaWJsaW5nPW51bGwpO3ppKGIsITEsZSxjLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7YT1lLmFsdGVybmF0ZTtpZihudWxsIT09YSYmbnVsbD09PWloKGEpKXtiLmNoaWxkPWU7YnJlYWt9YT1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9YX16aShiLCEwLGMsbnVsbCxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6emkoYiwhMSxudWxsLG51bGwsdm9pZCAwLGIubGFzdEVmZmVjdCk7YnJlYWs7ZGVmYXVsdDpiLm1lbW9pemVkU3RhdGU9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGhpKGEsYixjKXtudWxsIT09YSYmKGIuZGVwZW5kZW5jaWVzPWEuZGVwZW5kZW5jaWVzKTtEZ3w9Yi5sYW5lcztpZigwIT09KGMmYi5jaGlsZExhbmVzKSl7aWYobnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkKXRocm93IEVycm9yKHkoMTUzKSk7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPVRnKGEsYS5wZW5kaW5nUHJvcHMpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1UZyhhLGEucGVuZGluZ1Byb3BzKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfXJldHVybiBudWxsfXZhciBCaSxDaSxEaSxFaTtcbkJpPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtDaT1mdW5jdGlvbigpe307XG5EaT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLm1lbW9pemVkUHJvcHM7aWYoZSE9PWQpe2E9Yi5zdGF0ZU5vZGU7ZGgoYWguY3VycmVudCk7dmFyIGY9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6ZT1ZYShhLGUpO2Q9WWEoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWViKGEsZSk7ZD1lYihhLGQpO2Y9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmU9bSh7fSxlLHt2YWx1ZTp2b2lkIDB9KTtkPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7Zj1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjplPWdiKGEsZSk7ZD1nYihhLGQpO2Y9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoYS5vbmNsaWNrPWpmKX12YihjLGQpO3ZhciBnO2M9bnVsbDtmb3IobCBpbiBlKWlmKCFkLmhhc093blByb3BlcnR5KGwpJiZlLmhhc093blByb3BlcnR5KGwpJiZudWxsIT1lW2xdKWlmKFwic3R5bGVcIj09PVxubCl7dmFyIGg9ZVtsXTtmb3IoZyBpbiBoKWguaGFzT3duUHJvcGVydHkoZykmJihjfHwoYz17fSksY1tnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmXCJjaGlsZHJlblwiIT09bCYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiZcImF1dG9Gb2N1c1wiIT09bCYmKGNhLmhhc093blByb3BlcnR5KGwpP2Z8fChmPVtdKTooZj1mfHxbXSkucHVzaChsLG51bGwpKTtmb3IobCBpbiBkKXt2YXIgaz1kW2xdO2g9bnVsbCE9ZT9lW2xdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGwpJiZrIT09aCYmKG51bGwhPWt8fG51bGwhPWgpKWlmKFwic3R5bGVcIj09PWwpaWYoaCl7Zm9yKGcgaW4gaCkhaC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGN8fChjPXt9KSxjW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmaFtnXSE9PWtbZ10mJihjfHxcbihjPXt9KSxjW2ddPWtbZ10pfWVsc2UgY3x8KGZ8fChmPVtdKSxmLnB1c2gobCxjKSksYz1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1sPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGg9aD9oLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmaCE9PWsmJihmPWZ8fFtdKS5wdXNoKGwsaykpOlwiY2hpbGRyZW5cIj09PWw/XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChmPWZ8fFtdKS5wdXNoKGwsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT8obnVsbCE9ayYmXCJvblNjcm9sbFwiPT09bCYmRyhcInNjcm9sbFwiLGEpLGZ8fGg9PT1rfHwoZj1bXSkpOlwib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWsmJmsuJCR0eXBlb2Y9PT1HYT9rLnRvU3RyaW5nKCk6KGY9Znx8W10pLnB1c2gobCxrKSl9YyYmKGY9Znx8W10pLnB1c2goXCJzdHlsZVwiLFxuYyk7dmFyIGw9ZjtpZihiLnVwZGF0ZVF1ZXVlPWwpYi5mbGFnc3w9NH19O0VpPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiYoYi5mbGFnc3w9NCl9O2Z1bmN0aW9uIEZpKGEsYil7aWYoIWxoKXN3aXRjaChhLnRhaWxNb2RlKXtjYXNlIFwiaGlkZGVuXCI6Yj1hLnRhaWw7Zm9yKHZhciBjPW51bGw7bnVsbCE9PWI7KW51bGwhPT1iLmFsdGVybmF0ZSYmKGM9YiksYj1iLnNpYmxpbmc7bnVsbD09PWM/YS50YWlsPW51bGw6Yy5zaWJsaW5nPW51bGw7YnJlYWs7Y2FzZSBcImNvbGxhcHNlZFwiOmM9YS50YWlsO2Zvcih2YXIgZD1udWxsO251bGwhPT1jOyludWxsIT09Yy5hbHRlcm5hdGUmJihkPWMpLGM9Yy5zaWJsaW5nO251bGw9PT1kP2J8fG51bGw9PT1hLnRhaWw/YS50YWlsPW51bGw6YS50YWlsLnNpYmxpbmc9bnVsbDpkLnNpYmxpbmc9bnVsbH19XG5mdW5jdGlvbiBHaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6Y2FzZSAxNjpjYXNlIDE1OmNhc2UgMDpjYXNlIDExOmNhc2UgNzpjYXNlIDg6Y2FzZSAxMjpjYXNlIDk6Y2FzZSAxNDpyZXR1cm4gbnVsbDtjYXNlIDE6cmV0dXJuIEZmKGIudHlwZSkmJkdmKCksbnVsbDtjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTtkPWIuc3RhdGVOb2RlO2QucGVuZGluZ0NvbnRleHQmJihkLmNvbnRleHQ9ZC5wZW5kaW5nQ29udGV4dCxkLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1hfHxudWxsPT09YS5jaGlsZClyaChiKT9iLmZsYWdzfD00OmQuaHlkcmF0ZXx8KGIuZmxhZ3N8PTI1Nik7Q2koYik7cmV0dXJuIG51bGw7Y2FzZSA1OmhoKGIpO3ZhciBlPWRoKGNoLmN1cnJlbnQpO2M9Yi50eXBlO2lmKG51bGwhPT1hJiZudWxsIT1iLnN0YXRlTm9kZSlEaShhLGIsYyxkLGUpLGEucmVmIT09Yi5yZWYmJihiLmZsYWdzfD0xMjgpO2Vsc2V7aWYoIWQpe2lmKG51bGw9PT1cbmIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTY2KSk7cmV0dXJuIG51bGx9YT1kaChhaC5jdXJyZW50KTtpZihyaChiKSl7ZD1iLnN0YXRlTm9kZTtjPWIudHlwZTt2YXIgZj1iLm1lbW9pemVkUHJvcHM7ZFt3Zl09YjtkW3hmXT1mO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RyhcImNhbmNlbFwiLGQpO0coXCJjbG9zZVwiLGQpO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoYT0wO2E8WGUubGVuZ3RoO2ErKylHKFhlW2FdLGQpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixkKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixkKTtHKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RyhcInRvZ2dsZVwiLGQpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGQsZik7RyhcImludmFsaWRcIixkKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZC5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhZi5tdWx0aXBsZX07RyhcImludmFsaWRcIixkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihkLGYpLEcoXCJpbnZhbGlkXCIsZCl9dmIoYyxmKTthPW51bGw7Zm9yKHZhciBnIGluIGYpZi5oYXNPd25Qcm9wZXJ0eShnKSYmKGU9ZltnXSxcImNoaWxkcmVuXCI9PT1nP1wic3RyaW5nXCI9PT10eXBlb2YgZT9kLnRleHRDb250ZW50IT09ZSYmKGE9W1wiY2hpbGRyZW5cIixlXSk6XCJudW1iZXJcIj09PXR5cGVvZiBlJiZkLnRleHRDb250ZW50IT09XCJcIitlJiYoYT1bXCJjaGlsZHJlblwiLFwiXCIrZV0pOmNhLmhhc093blByb3BlcnR5KGcpJiZudWxsIT1lJiZcIm9uU2Nyb2xsXCI9PT1nJiZHKFwic2Nyb2xsXCIsZCkpO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShkKTtjYihkLGYsITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGQpO2piKGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5vbkNsaWNrJiYoZC5vbmNsaWNrPVxuamYpfWQ9YTtiLnVwZGF0ZVF1ZXVlPWQ7bnVsbCE9PWQmJihiLmZsYWdzfD00KX1lbHNle2c9OT09PWUubm9kZVR5cGU/ZTplLm93bmVyRG9jdW1lbnQ7YT09PWtiLmh0bWwmJihhPWxiKGMpKTthPT09a2IuaHRtbD9cInNjcmlwdFwiPT09Yz8oYT1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYS5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixhPWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKSk6XCJzdHJpbmdcIj09PXR5cGVvZiBkLmlzP2E9Zy5jcmVhdGVFbGVtZW50KGMse2lzOmQuaXN9KTooYT1nLmNyZWF0ZUVsZW1lbnQoYyksXCJzZWxlY3RcIj09PWMmJihnPWEsZC5tdWx0aXBsZT9nLm11bHRpcGxlPSEwOmQuc2l6ZSYmKGcuc2l6ZT1kLnNpemUpKSk6YT1nLmNyZWF0ZUVsZW1lbnROUyhhLGMpO2Fbd2ZdPWI7YVt4Zl09ZDtCaShhLGIsITEsITEpO2Iuc3RhdGVOb2RlPWE7Zz13YihjLGQpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RyhcImNhbmNlbFwiLGEpO0coXCJjbG9zZVwiLGEpO1xuZT1kO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPFhlLmxlbmd0aDtlKyspRyhYZVtlXSxhKTtlPWQ7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpHKFwiZXJyb3JcIixhKTtHKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoYSxkKTtlPVlhKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZC5tdWx0aXBsZX07ZT1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoYSxkKTtlPVxuZ2IoYSxkKTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2RlZmF1bHQ6ZT1kfXZiKGMsZSk7dmFyIGg9ZTtmb3IoZiBpbiBoKWlmKGguaGFzT3duUHJvcGVydHkoZikpe3ZhciBrPWhbZl07XCJzdHlsZVwiPT09Zj90YihhLGspOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWY/KGs9az9rLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmb2IoYSxrKSk6XCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGs/KFwidGV4dGFyZWFcIiE9PWN8fFwiXCIhPT1rKSYmcGIoYSxrKTpcIm51bWJlclwiPT09dHlwZW9mIGsmJnBiKGEsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09ZiYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWYmJlwiYXV0b0ZvY3VzXCIhPT1mJiYoY2EuaGFzT3duUHJvcGVydHkoZik/bnVsbCE9ayYmXCJvblNjcm9sbFwiPT09ZiYmRyhcInNjcm9sbFwiLGEpOm51bGwhPWsmJnFhKGEsZixrLGcpKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoYSk7Y2IoYSxkLCExKTtcbmJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGEpO2piKGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1kLnZhbHVlJiZhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIitTYShkLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEubXVsdGlwbGU9ISFkLm11bHRpcGxlO2Y9ZC52YWx1ZTtudWxsIT1mP2ZiKGEsISFkLm11bHRpcGxlLGYsITEpOm51bGwhPWQuZGVmYXVsdFZhbHVlJiZmYihhLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5vbkNsaWNrJiYoYS5vbmNsaWNrPWpmKX1tZihjLGQpJiYoYi5mbGFnc3w9NCl9bnVsbCE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KX1yZXR1cm4gbnVsbDtjYXNlIDY6aWYoYSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRWkoYSxiLGEubWVtb2l6ZWRQcm9wcyxkKTtlbHNle2lmKFwic3RyaW5nXCIhPT10eXBlb2YgZCYmbnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTY2KSk7XG5jPWRoKGNoLmN1cnJlbnQpO2RoKGFoLmN1cnJlbnQpO3JoKGIpPyhkPWIuc3RhdGVOb2RlLGM9Yi5tZW1vaXplZFByb3BzLGRbd2ZdPWIsZC5ub2RlVmFsdWUhPT1jJiYoYi5mbGFnc3w9NCkpOihkPSg5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZCksZFt3Zl09YixiLnN0YXRlTm9kZT1kKX1yZXR1cm4gbnVsbDtjYXNlIDEzOkgoUCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYoMCE9PShiLmZsYWdzJjY0KSlyZXR1cm4gYi5sYW5lcz1jLGI7ZD1udWxsIT09ZDtjPSExO251bGw9PT1hP3ZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5mYWxsYmFjayYmcmgoYik6Yz1udWxsIT09YS5tZW1vaXplZFN0YXRlO2lmKGQmJiFjJiYwIT09KGIubW9kZSYyKSlpZihudWxsPT09YSYmITAhPT1iLm1lbW9pemVkUHJvcHMudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fDAhPT0oUC5jdXJyZW50JjEpKTA9PT1WJiYoVj0zKTtlbHNle2lmKDA9PT1WfHwzPT09VilWPVxuNDtudWxsPT09VXx8MD09PShEZyYxMzQyMTc3MjcpJiYwPT09KEhpJjEzNDIxNzcyNyl8fElpKFUsVyl9aWYoZHx8YyliLmZsYWdzfD00O3JldHVybiBudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxDaShiKSxudWxsPT09YSYmY2YoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksbnVsbDtjYXNlIDEwOnJldHVybiByZyhiKSxudWxsO2Nhc2UgMTc6cmV0dXJuIEZmKGIudHlwZSkmJkdmKCksbnVsbDtjYXNlIDE5OkgoUCk7ZD1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Zj0wIT09KGIuZmxhZ3MmNjQpO2c9ZC5yZW5kZXJpbmc7aWYobnVsbD09PWcpaWYoZilGaShkLCExKTtlbHNle2lmKDAhPT1WfHxudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7Zz1paChhKTtpZihudWxsIT09Zyl7Yi5mbGFnc3w9NjQ7RmkoZCwhMSk7Zj1nLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiYoYi51cGRhdGVRdWV1ZT1mLGIuZmxhZ3N8PTQpO1xubnVsbD09PWQubGFzdEVmZmVjdCYmKGIuZmlyc3RFZmZlY3Q9bnVsbCk7Yi5sYXN0RWZmZWN0PWQubGFzdEVmZmVjdDtkPWM7Zm9yKGM9Yi5jaGlsZDtudWxsIT09YzspZj1jLGE9ZCxmLmZsYWdzJj0yLGYubmV4dEVmZmVjdD1udWxsLGYuZmlyc3RFZmZlY3Q9bnVsbCxmLmxhc3RFZmZlY3Q9bnVsbCxnPWYuYWx0ZXJuYXRlLG51bGw9PT1nPyhmLmNoaWxkTGFuZXM9MCxmLmxhbmVzPWEsZi5jaGlsZD1udWxsLGYubWVtb2l6ZWRQcm9wcz1udWxsLGYubWVtb2l6ZWRTdGF0ZT1udWxsLGYudXBkYXRlUXVldWU9bnVsbCxmLmRlcGVuZGVuY2llcz1udWxsLGYuc3RhdGVOb2RlPW51bGwpOihmLmNoaWxkTGFuZXM9Zy5jaGlsZExhbmVzLGYubGFuZXM9Zy5sYW5lcyxmLmNoaWxkPWcuY2hpbGQsZi5tZW1vaXplZFByb3BzPWcubWVtb2l6ZWRQcm9wcyxmLm1lbW9pemVkU3RhdGU9Zy5tZW1vaXplZFN0YXRlLGYudXBkYXRlUXVldWU9Zy51cGRhdGVRdWV1ZSxmLnR5cGU9Zy50eXBlLGE9Zy5kZXBlbmRlbmNpZXMsXG5mLmRlcGVuZGVuY2llcz1udWxsPT09YT9udWxsOntsYW5lczphLmxhbmVzLGZpcnN0Q29udGV4dDphLmZpcnN0Q29udGV4dH0pLGM9Yy5zaWJsaW5nO0koUCxQLmN1cnJlbnQmMXwyKTtyZXR1cm4gYi5jaGlsZH1hPWEuc2libGluZ31udWxsIT09ZC50YWlsJiZPKCk+SmkmJihiLmZsYWdzfD02NCxmPSEwLEZpKGQsITEpLGIubGFuZXM9MzM1NTQ0MzIpfWVsc2V7aWYoIWYpaWYoYT1paChnKSxudWxsIT09YSl7aWYoYi5mbGFnc3w9NjQsZj0hMCxjPWEudXBkYXRlUXVldWUsbnVsbCE9PWMmJihiLnVwZGF0ZVF1ZXVlPWMsYi5mbGFnc3w9NCksRmkoZCwhMCksbnVsbD09PWQudGFpbCYmXCJoaWRkZW5cIj09PWQudGFpbE1vZGUmJiFnLmFsdGVybmF0ZSYmIWxoKXJldHVybiBiPWIubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3QsbnVsbCE9PWImJihiLm5leHRFZmZlY3Q9bnVsbCksbnVsbH1lbHNlIDIqTygpLWQucmVuZGVyaW5nU3RhcnRUaW1lPkppJiYxMDczNzQxODI0IT09YyYmKGIuZmxhZ3N8PVxuNjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKTtkLmlzQmFja3dhcmRzPyhnLnNpYmxpbmc9Yi5jaGlsZCxiLmNoaWxkPWcpOihjPWQubGFzdCxudWxsIT09Yz9jLnNpYmxpbmc9ZzpiLmNoaWxkPWcsZC5sYXN0PWcpfXJldHVybiBudWxsIT09ZC50YWlsPyhjPWQudGFpbCxkLnJlbmRlcmluZz1jLGQudGFpbD1jLnNpYmxpbmcsZC5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdCxkLnJlbmRlcmluZ1N0YXJ0VGltZT1PKCksYy5zaWJsaW5nPW51bGwsYj1QLmN1cnJlbnQsSShQLGY/YiYxfDI6YiYxKSxjKTpudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gS2koKSxudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSE9PShudWxsIT09Yi5tZW1vaXplZFN0YXRlKSYmXCJ1bnN0YWJsZS1kZWZlci13aXRob3V0LWhpZGluZ1wiIT09ZC5tb2RlJiYoYi5mbGFnc3w9NCksbnVsbH10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO31cbmZ1bmN0aW9uIExpKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAxOkZmKGEudHlwZSkmJkdmKCk7dmFyIGI9YS5mbGFncztyZXR1cm4gYiY0MDk2PyhhLmZsYWdzPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTtiPWEuZmxhZ3M7aWYoMCE9PShiJjY0KSl0aHJvdyBFcnJvcih5KDI4NSkpO2EuZmxhZ3M9YiYtNDA5N3w2NDtyZXR1cm4gYTtjYXNlIDU6cmV0dXJuIGhoKGEpLG51bGw7Y2FzZSAxMzpyZXR1cm4gSChQKSxiPWEuZmxhZ3MsYiY0MDk2PyhhLmZsYWdzPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDE5OnJldHVybiBIKFApLG51bGw7Y2FzZSA0OnJldHVybiBmaCgpLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYSksbnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIE1pKGEsYil7dHJ5e3ZhciBjPVwiXCIsZD1iO2RvIGMrPVFhKGQpLGQ9ZC5yZXR1cm47d2hpbGUoZCk7dmFyIGU9Y31jYXRjaChmKXtlPVwiXFxuRXJyb3IgZ2VuZXJhdGluZyBzdGFjazogXCIrZi5tZXNzYWdlK1wiXFxuXCIrZi5zdGFja31yZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazplfX1mdW5jdGlvbiBOaShhLGIpe3RyeXtjb25zb2xlLmVycm9yKGIudmFsdWUpfWNhdGNoKGMpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBjO30pfX12YXIgT2k9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7ZnVuY3Rpb24gUGkoYSxiLGMpe2M9emcoLTEsYyk7Yy50YWc9MztjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7UWl8fChRaT0hMCxSaT1kKTtOaShhLGIpfTtyZXR1cm4gY31cbmZ1bmN0aW9uIFNpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtOaShhLGIpO3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09VGk/VGk9bmV3IFNldChbdGhpc10pOlRpLmFkZCh0aGlzKSxOaShhLGIpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY312YXIgVWk9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtTZXQ/V2Vha1NldDpTZXQ7XG5mdW5jdGlvbiBWaShhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09YilpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYil0cnl7YihudWxsKX1jYXRjaChjKXtXaShhLGMpfWVsc2UgYi5jdXJyZW50PW51bGx9ZnVuY3Rpb24gWGkoYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6Y2FzZSAyMjpyZXR1cm47Y2FzZSAxOmlmKGIuZmxhZ3MmMjU2JiZudWxsIT09YSl7dmFyIGM9YS5tZW1vaXplZFByb3BzLGQ9YS5tZW1vaXplZFN0YXRlO2E9Yi5zdGF0ZU5vZGU7Yj1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGIuZWxlbWVudFR5cGU9PT1iLnR5cGU/YzpsZyhiLnR5cGUsYyksZCk7YS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1ifXJldHVybjtjYXNlIDM6Yi5mbGFncyYyNTYmJnFmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO3JldHVybjtjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OnJldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31cbmZ1bmN0aW9uIFlpKGEsYixjKXtzd2l0Y2goYy50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6Y2FzZSAyMjpiPWMudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7YT1iPWIubmV4dDtkb3tpZigzPT09KGEudGFnJjMpKXt2YXIgZD1hLmNyZWF0ZTthLmRlc3Ryb3k9ZCgpfWE9YS5uZXh0fXdoaWxlKGEhPT1iKX1iPWMudXBkYXRlUXVldWU7Yj1udWxsIT09Yj9iLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yil7YT1iPWIubmV4dDtkb3t2YXIgZT1hO2Q9ZS5uZXh0O2U9ZS50YWc7MCE9PShlJjQpJiYwIT09KGUmMSkmJihaaShjLGEpLCRpKGMsYSkpO2E9ZH13aGlsZShhIT09Yil9cmV0dXJuO2Nhc2UgMTphPWMuc3RhdGVOb2RlO2MuZmxhZ3MmNCYmKG51bGw9PT1iP2EuY29tcG9uZW50RGlkTW91bnQoKTooZD1jLmVsZW1lbnRUeXBlPT09Yy50eXBlP2IubWVtb2l6ZWRQcm9wczpsZyhjLnR5cGUsYi5tZW1vaXplZFByb3BzKSxhLmNvbXBvbmVudERpZFVwZGF0ZShkLFxuYi5tZW1vaXplZFN0YXRlLGEuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpKSk7Yj1jLnVwZGF0ZVF1ZXVlO251bGwhPT1iJiZFZyhjLGIsYSk7cmV0dXJuO2Nhc2UgMzpiPWMudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2E9bnVsbDtpZihudWxsIT09Yy5jaGlsZClzd2l0Y2goYy5jaGlsZC50YWcpe2Nhc2UgNTphPWMuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTphPWMuY2hpbGQuc3RhdGVOb2RlfUVnKGMsYixhKX1yZXR1cm47Y2FzZSA1OmE9Yy5zdGF0ZU5vZGU7bnVsbD09PWImJmMuZmxhZ3MmNCYmbWYoYy50eXBlLGMubWVtb2l6ZWRQcm9wcykmJmEuZm9jdXMoKTtyZXR1cm47Y2FzZSA2OnJldHVybjtjYXNlIDQ6cmV0dXJuO2Nhc2UgMTI6cmV0dXJuO2Nhc2UgMTM6bnVsbD09PWMubWVtb2l6ZWRTdGF0ZSYmKGM9Yy5hbHRlcm5hdGUsbnVsbCE9PWMmJihjPWMubWVtb2l6ZWRTdGF0ZSxudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGwhPT1jJiZDYyhjKSkpKTtcbnJldHVybjtjYXNlIDE5OmNhc2UgMTc6Y2FzZSAyMDpjYXNlIDIxOmNhc2UgMjM6Y2FzZSAyNDpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBhaihhLGIpe2Zvcih2YXIgYz1hOzspe2lmKDU9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoYilkPWQuc3R5bGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuc2V0UHJvcGVydHk/ZC5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIixcImltcG9ydGFudFwiKTpkLmRpc3BsYXk9XCJub25lXCI7ZWxzZXtkPWMuc3RhdGVOb2RlO3ZhciBlPWMubWVtb2l6ZWRQcm9wcy5zdHlsZTtlPXZvaWQgMCE9PWUmJm51bGwhPT1lJiZlLmhhc093blByb3BlcnR5KFwiZGlzcGxheVwiKT9lLmRpc3BsYXk6bnVsbDtkLnN0eWxlLmRpc3BsYXk9c2IoXCJkaXNwbGF5XCIsZSl9fWVsc2UgaWYoNj09PWMudGFnKWMuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iP1wiXCI6Yy5tZW1vaXplZFByb3BzO2Vsc2UgaWYoKDIzIT09Yy50YWcmJjI0IT09Yy50YWd8fG51bGw9PT1jLm1lbW9pemVkU3RhdGV8fGM9PT1hKSYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1cbmEpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWEpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBiaihhLGIpe2lmKE1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgTWYub25Db21taXRGaWJlclVubW91bnQpdHJ5e01mLm9uQ29tbWl0RmliZXJVbm1vdW50KExmLGIpfWNhdGNoKGYpe31zd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOmE9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YSYmKGE9YS5sYXN0RWZmZWN0LG51bGwhPT1hKSl7dmFyIGM9YT1hLm5leHQ7ZG97dmFyIGQ9YyxlPWQuZGVzdHJveTtkPWQudGFnO2lmKHZvaWQgMCE9PWUpaWYoMCE9PShkJjQpKVppKGIsYyk7ZWxzZXtkPWI7dHJ5e2UoKX1jYXRjaChmKXtXaShkLGYpfX1jPWMubmV4dH13aGlsZShjIT09YSl9YnJlYWs7Y2FzZSAxOlZpKGIpO2E9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2EucHJvcHM9Yi5tZW1vaXplZFByb3BzLGEuc3RhdGU9Yi5tZW1vaXplZFN0YXRlLGEuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChmKXtXaShiLFxuZil9YnJlYWs7Y2FzZSA1OlZpKGIpO2JyZWFrO2Nhc2UgNDpjaihhLGIpfX1mdW5jdGlvbiBkaihhKXthLmFsdGVybmF0ZT1udWxsO2EuY2hpbGQ9bnVsbDthLmRlcGVuZGVuY2llcz1udWxsO2EuZmlyc3RFZmZlY3Q9bnVsbDthLmxhc3RFZmZlY3Q9bnVsbDthLm1lbW9pemVkUHJvcHM9bnVsbDthLm1lbW9pemVkU3RhdGU9bnVsbDthLnBlbmRpbmdQcm9wcz1udWxsO2EucmV0dXJuPW51bGw7YS51cGRhdGVRdWV1ZT1udWxsfWZ1bmN0aW9uIGVqKGEpe3JldHVybiA1PT09YS50YWd8fDM9PT1hLnRhZ3x8ND09PWEudGFnfVxuZnVuY3Rpb24gZmooYSl7YTp7Zm9yKHZhciBiPWEucmV0dXJuO251bGwhPT1iOyl7aWYoZWooYikpYnJlYWsgYTtiPWIucmV0dXJufXRocm93IEVycm9yKHkoMTYwKSk7fXZhciBjPWI7Yj1jLnN0YXRlTm9kZTtzd2l0Y2goYy50YWcpe2Nhc2UgNTp2YXIgZD0hMTticmVhaztjYXNlIDM6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztjYXNlIDQ6Yj1iLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHkoMTYxKSk7fWMuZmxhZ3MmMTYmJihwYihiLFwiXCIpLGMuZmxhZ3MmPS0xNyk7YTpiOmZvcihjPWE7Oyl7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxlaihjLnJldHVybikpe2M9bnVsbDticmVhayBhfWM9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtmb3IoYz1jLnNpYmxpbmc7NSE9PWMudGFnJiY2IT09Yy50YWcmJjE4IT09Yy50YWc7KXtpZihjLmZsYWdzJjIpY29udGludWUgYjtpZihudWxsPT09XG5jLmNoaWxkfHw0PT09Yy50YWcpY29udGludWUgYjtlbHNlIGMuY2hpbGQucmV0dXJuPWMsYz1jLmNoaWxkfWlmKCEoYy5mbGFncyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1kP2dqKGEsYyxiKTpoaihhLGMsYil9XG5mdW5jdGlvbiBnaihhLGIsYyl7dmFyIGQ9YS50YWcsZT01PT09ZHx8Nj09PWQ7aWYoZSlhPWU/YS5zdGF0ZU5vZGU6YS5zdGF0ZU5vZGUuaW5zdGFuY2UsYj84PT09Yy5ub2RlVHlwZT9jLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsYik6Yy5pbnNlcnRCZWZvcmUoYSxiKTooOD09PWMubm9kZVR5cGU/KGI9Yy5wYXJlbnROb2RlLGIuaW5zZXJ0QmVmb3JlKGEsYykpOihiPWMsYi5hcHBlbmRDaGlsZChhKSksYz1jLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWMmJnZvaWQgMCE9PWN8fG51bGwhPT1iLm9uY2xpY2t8fChiLm9uY2xpY2s9amYpKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoZ2ooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOylnaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBoaihhLGIsYyl7dmFyIGQ9YS50YWcsZT01PT09ZHx8Nj09PWQ7aWYoZSlhPWU/YS5zdGF0ZU5vZGU6YS5zdGF0ZU5vZGUuaW5zdGFuY2UsYj9jLmluc2VydEJlZm9yZShhLGIpOmMuYXBwZW5kQ2hpbGQoYSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGhqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspaGooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gY2ooYSxiKXtmb3IodmFyIGM9YixkPSExLGUsZjs7KXtpZighZCl7ZD1jLnJldHVybjthOmZvcig7Oyl7aWYobnVsbD09PWQpdGhyb3cgRXJyb3IoeSgxNjApKTtlPWQuc3RhdGVOb2RlO3N3aXRjaChkLnRhZyl7Y2FzZSA1OmY9ITE7YnJlYWsgYTtjYXNlIDM6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhO2Nhc2UgNDplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGF9ZD1kLnJldHVybn1kPSEwfWlmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKXthOmZvcih2YXIgZz1hLGg9YyxrPWg7OylpZihiaihnLGspLG51bGwhPT1rLmNoaWxkJiY0IT09ay50YWcpay5jaGlsZC5yZXR1cm49ayxrPWsuY2hpbGQ7ZWxzZXtpZihrPT09aClicmVhayBhO2Zvcig7bnVsbD09PWsuc2libGluZzspe2lmKG51bGw9PT1rLnJldHVybnx8ay5yZXR1cm49PT1oKWJyZWFrIGE7az1rLnJldHVybn1rLnNpYmxpbmcucmV0dXJuPWsucmV0dXJuO2s9ay5zaWJsaW5nfWY/KGc9ZSxoPWMuc3RhdGVOb2RlLFxuOD09PWcubm9kZVR5cGU/Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGgpOmcucmVtb3ZlQ2hpbGQoaCkpOmUucmVtb3ZlQ2hpbGQoYy5zdGF0ZU5vZGUpfWVsc2UgaWYoND09PWMudGFnKXtpZihudWxsIT09Yy5jaGlsZCl7ZT1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Y9ITA7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYoYmooYSxjKSxudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm47ND09PWMudGFnJiYoZD0hMSl9Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiBpaihhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNhc2UgMjI6dmFyIGM9Yi51cGRhdGVRdWV1ZTtjPW51bGwhPT1jP2MubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1jKXt2YXIgZD1jPWMubmV4dDtkbyAzPT09KGQudGFnJjMpJiYoYT1kLmRlc3Ryb3ksZC5kZXN0cm95PXZvaWQgMCx2b2lkIDAhPT1hJiZhKCkpLGQ9ZC5uZXh0O3doaWxlKGQhPT1jKX1yZXR1cm47Y2FzZSAxOnJldHVybjtjYXNlIDU6Yz1iLnN0YXRlTm9kZTtpZihudWxsIT1jKXtkPWIubWVtb2l6ZWRQcm9wczt2YXIgZT1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6ZDthPWIudHlwZTt2YXIgZj1iLnVwZGF0ZVF1ZXVlO2IudXBkYXRlUXVldWU9bnVsbDtpZihudWxsIT09Zil7Y1t4Zl09ZDtcImlucHV0XCI9PT1hJiZcInJhZGlvXCI9PT1kLnR5cGUmJm51bGwhPWQubmFtZSYmJGEoYyxkKTt3YihhLGUpO2I9d2IoYSxkKTtmb3IoZT0wO2U8Zi5sZW5ndGg7ZSs9XG4yKXt2YXIgZz1mW2VdLGg9ZltlKzFdO1wic3R5bGVcIj09PWc/dGIoYyxoKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1nP29iKGMsaCk6XCJjaGlsZHJlblwiPT09Zz9wYihjLGgpOnFhKGMsZyxoLGIpfXN3aXRjaChhKXtjYXNlIFwiaW5wdXRcIjphYihjLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGMsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmE9Yy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlLGMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZT0hIWQubXVsdGlwbGUsZj1kLnZhbHVlLG51bGwhPWY/ZmIoYywhIWQubXVsdGlwbGUsZiwhMSk6YSE9PSEhZC5tdWx0aXBsZSYmKG51bGwhPWQuZGVmYXVsdFZhbHVlP2ZiKGMsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLCEwKTpmYihjLCEhZC5tdWx0aXBsZSxkLm11bHRpcGxlP1tdOlwiXCIsITEpKX19fXJldHVybjtjYXNlIDY6aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHkoMTYyKSk7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPVxuYi5tZW1vaXplZFByb3BzO3JldHVybjtjYXNlIDM6Yz1iLnN0YXRlTm9kZTtjLmh5ZHJhdGUmJihjLmh5ZHJhdGU9ITEsQ2MoYy5jb250YWluZXJJbmZvKSk7cmV0dXJuO2Nhc2UgMTI6cmV0dXJuO2Nhc2UgMTM6bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSYmKGpqPU8oKSxhaihiLmNoaWxkLCEwKSk7a2ooYik7cmV0dXJuO2Nhc2UgMTk6a2ooYik7cmV0dXJuO2Nhc2UgMTc6cmV0dXJuO2Nhc2UgMjM6Y2FzZSAyNDphaihiLG51bGwhPT1iLm1lbW9pemVkU3RhdGUpO3JldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31mdW5jdGlvbiBraihhKXt2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbD09PWMmJihjPWEuc3RhdGVOb2RlPW5ldyBVaSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPWxqLmJpbmQobnVsbCxhLGIpO2MuaGFzKGIpfHwoYy5hZGQoYiksYi50aGVuKGQsZCkpfSl9fVxuZnVuY3Rpb24gbWooYSxiKXtyZXR1cm4gbnVsbCE9PWEmJihhPWEubWVtb2l6ZWRTdGF0ZSxudWxsPT09YXx8bnVsbCE9PWEuZGVoeWRyYXRlZCk/KGI9Yi5tZW1vaXplZFN0YXRlLG51bGwhPT1iJiZudWxsPT09Yi5kZWh5ZHJhdGVkKTohMX12YXIgbmo9TWF0aC5jZWlsLG9qPXJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIscGo9cmEuUmVhY3RDdXJyZW50T3duZXIsWD0wLFU9bnVsbCxZPW51bGwsVz0wLHFqPTAscmo9QmYoMCksVj0wLHNqPW51bGwsdGo9MCxEZz0wLEhpPTAsdWo9MCx2aj1udWxsLGpqPTAsSmk9SW5maW5pdHk7ZnVuY3Rpb24gd2ooKXtKaT1PKCkrNTAwfXZhciBaPW51bGwsUWk9ITEsUmk9bnVsbCxUaT1udWxsLHhqPSExLHlqPW51bGwsemo9OTAsQWo9W10sQmo9W10sQ2o9bnVsbCxEaj0wLEVqPW51bGwsRmo9LTEsR2o9MCxIaj0wLElqPW51bGwsSmo9ITE7ZnVuY3Rpb24gSGcoKXtyZXR1cm4gMCE9PShYJjQ4KT9PKCk6LTEhPT1Gaj9GajpGaj1PKCl9XG5mdW5jdGlvbiBJZyhhKXthPWEubW9kZTtpZigwPT09KGEmMikpcmV0dXJuIDE7aWYoMD09PShhJjQpKXJldHVybiA5OT09PWVnKCk/MToyOzA9PT1HaiYmKEdqPXRqKTtpZigwIT09a2cudHJhbnNpdGlvbil7MCE9PUhqJiYoSGo9bnVsbCE9PXZqP3ZqLnBlbmRpbmdMYW5lczowKTthPUdqO3ZhciBiPTQxODYxMTImfkhqO2ImPS1iOzA9PT1iJiYoYT00MTg2MTEyJn5hLGI9YSYtYSwwPT09YiYmKGI9ODE5MikpO3JldHVybiBifWE9ZWcoKTswIT09KFgmNCkmJjk4PT09YT9hPVhjKDEyLEdqKTooYT1TYyhhKSxhPVhjKGEsR2opKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIEpnKGEsYixjKXtpZig1MDxEail0aHJvdyBEaj0wLEVqPW51bGwsRXJyb3IoeSgxODUpKTthPUtqKGEsYik7aWYobnVsbD09PWEpcmV0dXJuIG51bGw7JGMoYSxiLGMpO2E9PT1VJiYoSGl8PWIsND09PVYmJklpKGEsVykpO3ZhciBkPWVnKCk7MT09PWI/MCE9PShYJjgpJiYwPT09KFgmNDgpP0xqKGEpOihNaihhLGMpLDA9PT1YJiYod2ooKSxpZygpKSk6KDA9PT0oWCY0KXx8OTghPT1kJiY5OSE9PWR8fChudWxsPT09Q2o/Q2o9bmV3IFNldChbYV0pOkNqLmFkZChhKSksTWooYSxjKSk7dmo9YX1mdW5jdGlvbiBLaihhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtjPWE7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWE7KWEuY2hpbGRMYW5lc3w9YixjPWEuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKSxjPWEsYT1hLnJldHVybjtyZXR1cm4gMz09PWMudGFnP2Muc3RhdGVOb2RlOm51bGx9XG5mdW5jdGlvbiBNaihhLGIpe2Zvcih2YXIgYz1hLmNhbGxiYWNrTm9kZSxkPWEuc3VzcGVuZGVkTGFuZXMsZT1hLnBpbmdlZExhbmVzLGY9YS5leHBpcmF0aW9uVGltZXMsZz1hLnBlbmRpbmdMYW5lczswPGc7KXt2YXIgaD0zMS1WYyhnKSxrPTE8PGgsbD1mW2hdO2lmKC0xPT09bCl7aWYoMD09PShrJmQpfHwwIT09KGsmZSkpe2w9YjtSYyhrKTt2YXIgbj1GO2ZbaF09MTA8PW4/bCsyNTA6Njw9bj9sKzVFMzotMX19ZWxzZSBsPD1iJiYoYS5leHBpcmVkTGFuZXN8PWspO2cmPX5rfWQ9VWMoYSxhPT09VT9XOjApO2I9RjtpZigwPT09ZCludWxsIT09YyYmKGMhPT1aZiYmUGYoYyksYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrUHJpb3JpdHk9MCk7ZWxzZXtpZihudWxsIT09Yyl7aWYoYS5jYWxsYmFja1ByaW9yaXR5PT09YilyZXR1cm47YyE9PVpmJiZQZihjKX0xNT09PWI/KGM9TGouYmluZChudWxsLGEpLG51bGw9PT1hZz8oYWc9W2NdLGJnPU9mKFVmLGpnKSk6YWcucHVzaChjKSxcbmM9WmYpOjE0PT09Yj9jPWhnKDk5LExqLmJpbmQobnVsbCxhKSk6KGM9VGMoYiksYz1oZyhjLE5qLmJpbmQobnVsbCxhKSkpO2EuY2FsbGJhY2tQcmlvcml0eT1iO2EuY2FsbGJhY2tOb2RlPWN9fVxuZnVuY3Rpb24gTmooYSl7Rmo9LTE7SGo9R2o9MDtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7dmFyIGI9YS5jYWxsYmFja05vZGU7aWYoT2ooKSYmYS5jYWxsYmFja05vZGUhPT1iKXJldHVybiBudWxsO3ZhciBjPVVjKGEsYT09PVU/VzowKTtpZigwPT09YylyZXR1cm4gbnVsbDt2YXIgZD1jO3ZhciBlPVg7WHw9MTY7dmFyIGY9UGooKTtpZihVIT09YXx8VyE9PWQpd2ooKSxRaihhLGQpO2RvIHRyeXtSaigpO2JyZWFrfWNhdGNoKGgpe1NqKGEsaCl9d2hpbGUoMSk7cWcoKTtvai5jdXJyZW50PWY7WD1lO251bGwhPT1ZP2Q9MDooVT1udWxsLFc9MCxkPVYpO2lmKDAhPT0odGomSGkpKVFqKGEsMCk7ZWxzZSBpZigwIT09ZCl7Mj09PWQmJihYfD02NCxhLmh5ZHJhdGUmJihhLmh5ZHJhdGU9ITEscWYoYS5jb250YWluZXJJbmZvKSksYz1XYyhhKSwwIT09YyYmKGQ9VGooYSxjKSkpO2lmKDE9PT1kKXRocm93IGI9c2osUWooYSwwKSxJaShhLGMpLE1qKGEsTygpKSxiO2EuZmluaXNoZWRXb3JrPVxuYS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9Yztzd2l0Y2goZCl7Y2FzZSAwOmNhc2UgMTp0aHJvdyBFcnJvcih5KDM0NSkpO2Nhc2UgMjpVaihhKTticmVhaztjYXNlIDM6SWkoYSxjKTtpZigoYyY2MjkxNDU2MCk9PT1jJiYoZD1qais1MDAtTygpLDEwPGQpKXtpZigwIT09VWMoYSwwKSlicmVhaztlPWEuc3VzcGVuZGVkTGFuZXM7aWYoKGUmYykhPT1jKXtIZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmZTticmVha31hLnRpbWVvdXRIYW5kbGU9b2YoVWouYmluZChudWxsLGEpLGQpO2JyZWFrfVVqKGEpO2JyZWFrO2Nhc2UgNDpJaShhLGMpO2lmKChjJjQxODYxMTIpPT09YylicmVhaztkPWEuZXZlbnRUaW1lcztmb3IoZT0tMTswPGM7KXt2YXIgZz0zMS1WYyhjKTtmPTE8PGc7Zz1kW2ddO2c+ZSYmKGU9Zyk7YyY9fmZ9Yz1lO2M9TygpLWM7Yz0oMTIwPmM/MTIwOjQ4MD5jPzQ4MDoxMDgwPmM/MTA4MDoxOTIwPmM/MTkyMDozRTM+Yz8zRTM6NDMyMD5cbmM/NDMyMDoxOTYwKm5qKGMvMTk2MCkpLWM7aWYoMTA8Yyl7YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxjKTticmVha31VaihhKTticmVhaztjYXNlIDU6VWooYSk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMyOSkpO319TWooYSxPKCkpO3JldHVybiBhLmNhbGxiYWNrTm9kZT09PWI/TmouYmluZChudWxsLGEpOm51bGx9ZnVuY3Rpb24gSWkoYSxiKXtiJj1+dWo7YiY9fkhpO2Euc3VzcGVuZGVkTGFuZXN8PWI7YS5waW5nZWRMYW5lcyY9fmI7Zm9yKGE9YS5leHBpcmF0aW9uVGltZXM7MDxiOyl7dmFyIGM9MzEtVmMoYiksZD0xPDxjO2FbY109LTE7YiY9fmR9fVxuZnVuY3Rpb24gTGooYSl7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO09qKCk7aWYoYT09PVUmJjAhPT0oYS5leHBpcmVkTGFuZXMmVykpe3ZhciBiPVc7dmFyIGM9VGooYSxiKTswIT09KHRqJkhpKSYmKGI9VWMoYSxiKSxjPVRqKGEsYikpfWVsc2UgYj1VYyhhLDApLGM9VGooYSxiKTswIT09YS50YWcmJjI9PT1jJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGI9V2MoYSksMCE9PWImJihjPVRqKGEsYikpKTtpZigxPT09Yyl0aHJvdyBjPXNqLFFqKGEsMCksSWkoYSxiKSxNaihhLE8oKSksYzthLmZpbmlzaGVkV29yaz1hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1iO1VqKGEpO01qKGEsTygpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFZqKCl7aWYobnVsbCE9PUNqKXt2YXIgYT1DajtDaj1udWxsO2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmV4cGlyZWRMYW5lc3w9MjQmYS5wZW5kaW5nTGFuZXM7TWooYSxPKCkpfSl9aWcoKX1mdW5jdGlvbiBXaihhLGIpe3ZhciBjPVg7WHw9MTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX1mdW5jdGlvbiBYaihhLGIpe3ZhciBjPVg7WCY9LTI7WHw9ODt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX1mdW5jdGlvbiBuaShhLGIpe0kocmoscWopO3FqfD1iO3RqfD1ifWZ1bmN0aW9uIEtpKCl7cWo9cmouY3VycmVudDtIKHJqKX1cbmZ1bmN0aW9uIFFqKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLHBmKGMpKTtpZihudWxsIT09WSlmb3IoYz1ZLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7c3dpdGNoKGQudGFnKXtjYXNlIDE6ZD1kLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWQmJnZvaWQgMCE9PWQmJkdmKCk7YnJlYWs7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7YnJlYWs7Y2FzZSA1OmhoKGQpO2JyZWFrO2Nhc2UgNDpmaCgpO2JyZWFrO2Nhc2UgMTM6SChQKTticmVhaztjYXNlIDE5OkgoUCk7YnJlYWs7Y2FzZSAxMDpyZyhkKTticmVhaztjYXNlIDIzOmNhc2UgMjQ6S2koKX1jPWMucmV0dXJufVU9YTtZPVRnKGEuY3VycmVudCxudWxsKTtXPXFqPXRqPWI7Vj0wO3NqPW51bGw7dWo9SGk9RGc9MH1cbmZ1bmN0aW9uIFNqKGEsYil7ZG97dmFyIGM9WTt0cnl7cWcoKTt2aC5jdXJyZW50PUdoO2lmKHloKXtmb3IodmFyIGQ9Ui5tZW1vaXplZFN0YXRlO251bGwhPT1kOyl7dmFyIGU9ZC5xdWV1ZTtudWxsIT09ZSYmKGUucGVuZGluZz1udWxsKTtkPWQubmV4dH15aD0hMX14aD0wO1Q9Uz1SPW51bGw7emg9ITE7cGouY3VycmVudD1udWxsO2lmKG51bGw9PT1jfHxudWxsPT09Yy5yZXR1cm4pe1Y9MTtzaj1iO1k9bnVsbDticmVha31hOnt2YXIgZj1hLGc9Yy5yZXR1cm4saD1jLGs9YjtiPVc7aC5mbGFnc3w9MjA0ODtoLmZpcnN0RWZmZWN0PWgubGFzdEVmZmVjdD1udWxsO2lmKG51bGwhPT1rJiZcIm9iamVjdFwiPT09dHlwZW9mIGsmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBrLnRoZW4pe3ZhciBsPWs7aWYoMD09PShoLm1vZGUmMikpe3ZhciBuPWguYWx0ZXJuYXRlO24/KGgudXBkYXRlUXVldWU9bi51cGRhdGVRdWV1ZSxoLm1lbW9pemVkU3RhdGU9bi5tZW1vaXplZFN0YXRlLGgubGFuZXM9bi5sYW5lcyk6XG4oaC51cGRhdGVRdWV1ZT1udWxsLGgubWVtb2l6ZWRTdGF0ZT1udWxsKX12YXIgQT0wIT09KFAuY3VycmVudCYxKSxwPWc7ZG97dmFyIEM7aWYoQz0xMz09PXAudGFnKXt2YXIgeD1wLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PXgpQz1udWxsIT09eC5kZWh5ZHJhdGVkPyEwOiExO2Vsc2V7dmFyIHc9cC5tZW1vaXplZFByb3BzO0M9dm9pZCAwPT09dy5mYWxsYmFjaz8hMTohMCE9PXcudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2s/ITA6QT8hMTohMH19aWYoQyl7dmFyIHo9cC51cGRhdGVRdWV1ZTtpZihudWxsPT09eil7dmFyIHU9bmV3IFNldDt1LmFkZChsKTtwLnVwZGF0ZVF1ZXVlPXV9ZWxzZSB6LmFkZChsKTtpZigwPT09KHAubW9kZSYyKSl7cC5mbGFnc3w9NjQ7aC5mbGFnc3w9MTYzODQ7aC5mbGFncyY9LTI5ODE7aWYoMT09PWgudGFnKWlmKG51bGw9PT1oLmFsdGVybmF0ZSloLnRhZz0xNztlbHNle3ZhciB0PXpnKC0xLDEpO3QudGFnPTI7QWcoaCx0KX1oLmxhbmVzfD0xO2JyZWFrIGF9az1cbnZvaWQgMDtoPWI7dmFyIHE9Zi5waW5nQ2FjaGU7bnVsbD09PXE/KHE9Zi5waW5nQ2FjaGU9bmV3IE9pLGs9bmV3IFNldCxxLnNldChsLGspKTooaz1xLmdldChsKSx2b2lkIDA9PT1rJiYoaz1uZXcgU2V0LHEuc2V0KGwsaykpKTtpZighay5oYXMoaCkpe2suYWRkKGgpO3ZhciB2PVlqLmJpbmQobnVsbCxmLGwsaCk7bC50aGVuKHYsdil9cC5mbGFnc3w9NDA5NjtwLmxhbmVzPWI7YnJlYWsgYX1wPXAucmV0dXJufXdoaWxlKG51bGwhPT1wKTtrPUVycm9yKChSYShoLnR5cGUpfHxcIkEgUmVhY3QgY29tcG9uZW50XCIpK1wiIHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIpfTUhPT1WJiYoVj0yKTtrPU1pKGssaCk7cD1cbmc7ZG97c3dpdGNoKHAudGFnKXtjYXNlIDM6Zj1rO3AuZmxhZ3N8PTQwOTY7YiY9LWI7cC5sYW5lc3w9Yjt2YXIgSj1QaShwLGYsYik7QmcocCxKKTticmVhayBhO2Nhc2UgMTpmPWs7dmFyIEs9cC50eXBlLFE9cC5zdGF0ZU5vZGU7aWYoMD09PShwLmZsYWdzJjY0KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBLLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PVEmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBRLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKFEpKSkpe3AuZmxhZ3N8PTQwOTY7YiY9LWI7cC5sYW5lc3w9Yjt2YXIgTD1TaShwLGYsYik7QmcocCxMKTticmVhayBhfX1wPXAucmV0dXJufXdoaWxlKG51bGwhPT1wKX1aaihjKX1jYXRjaCh2YSl7Yj12YTtZPT09YyYmbnVsbCE9PWMmJihZPWM9Yy5yZXR1cm4pO2NvbnRpbnVlfWJyZWFrfXdoaWxlKDEpfVxuZnVuY3Rpb24gUGooKXt2YXIgYT1vai5jdXJyZW50O29qLmN1cnJlbnQ9R2g7cmV0dXJuIG51bGw9PT1hP0doOmF9ZnVuY3Rpb24gVGooYSxiKXt2YXIgYz1YO1h8PTE2O3ZhciBkPVBqKCk7VT09PWEmJlc9PT1ifHxRaihhLGIpO2RvIHRyeXthaygpO2JyZWFrfWNhdGNoKGUpe1NqKGEsZSl9d2hpbGUoMSk7cWcoKTtYPWM7b2ouY3VycmVudD1kO2lmKG51bGwhPT1ZKXRocm93IEVycm9yKHkoMjYxKSk7VT1udWxsO1c9MDtyZXR1cm4gVn1mdW5jdGlvbiBhaygpe2Zvcig7bnVsbCE9PVk7KWJrKFkpfWZ1bmN0aW9uIFJqKCl7Zm9yKDtudWxsIT09WSYmIVFmKCk7KWJrKFkpfWZ1bmN0aW9uIGJrKGEpe3ZhciBiPWNrKGEuYWx0ZXJuYXRlLGEscWopO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09Yj9aaihhKTpZPWI7cGouY3VycmVudD1udWxsfVxuZnVuY3Rpb24gWmooYSl7dmFyIGI9YTtkb3t2YXIgYz1iLmFsdGVybmF0ZTthPWIucmV0dXJuO2lmKDA9PT0oYi5mbGFncyYyMDQ4KSl7Yz1HaShjLGIscWopO2lmKG51bGwhPT1jKXtZPWM7cmV0dXJufWM9YjtpZigyNCE9PWMudGFnJiYyMyE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHwwIT09KHFqJjEwNzM3NDE4MjQpfHwwPT09KGMubW9kZSY0KSl7Zm9yKHZhciBkPTAsZT1jLmNoaWxkO251bGwhPT1lOylkfD1lLmxhbmVzfGUuY2hpbGRMYW5lcyxlPWUuc2libGluZztjLmNoaWxkTGFuZXM9ZH1udWxsIT09YSYmMD09PShhLmZsYWdzJjIwNDgpJiYobnVsbD09PWEuZmlyc3RFZmZlY3QmJihhLmZpcnN0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLG51bGwhPT1iLmxhc3RFZmZlY3QmJihudWxsIT09YS5sYXN0RWZmZWN0JiYoYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9Yi5maXJzdEVmZmVjdCksYS5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdCksMTxiLmZsYWdzJiYobnVsbCE9PVxuYS5sYXN0RWZmZWN0P2EubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWI6YS5maXJzdEVmZmVjdD1iLGEubGFzdEVmZmVjdD1iKSl9ZWxzZXtjPUxpKGIpO2lmKG51bGwhPT1jKXtjLmZsYWdzJj0yMDQ3O1k9YztyZXR1cm59bnVsbCE9PWEmJihhLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1udWxsLGEuZmxhZ3N8PTIwNDgpfWI9Yi5zaWJsaW5nO2lmKG51bGwhPT1iKXtZPWI7cmV0dXJufVk9Yj1hfXdoaWxlKG51bGwhPT1iKTswPT09ViYmKFY9NSl9ZnVuY3Rpb24gVWooYSl7dmFyIGI9ZWcoKTtnZyg5OSxkay5iaW5kKG51bGwsYSxiKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBkayhhLGIpe2RvIE9qKCk7d2hpbGUobnVsbCE9PXlqKTtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7dmFyIGM9YS5maW5pc2hlZFdvcms7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDtpZihjPT09YS5jdXJyZW50KXRocm93IEVycm9yKHkoMTc3KSk7YS5jYWxsYmFja05vZGU9bnVsbDt2YXIgZD1jLmxhbmVzfGMuY2hpbGRMYW5lcyxlPWQsZj1hLnBlbmRpbmdMYW5lcyZ+ZTthLnBlbmRpbmdMYW5lcz1lO2Euc3VzcGVuZGVkTGFuZXM9MDthLnBpbmdlZExhbmVzPTA7YS5leHBpcmVkTGFuZXMmPWU7YS5tdXRhYmxlUmVhZExhbmVzJj1lO2EuZW50YW5nbGVkTGFuZXMmPWU7ZT1hLmVudGFuZ2xlbWVudHM7Zm9yKHZhciBnPWEuZXZlbnRUaW1lcyxoPWEuZXhwaXJhdGlvblRpbWVzOzA8Zjspe3ZhciBrPTMxLVZjKGYpLGw9MTw8aztlW2tdPTA7Z1trXT0tMTtoW2tdPS0xO2YmPX5sfW51bGwhPT1cbkNqJiYwPT09KGQmMjQpJiZDai5oYXMoYSkmJkNqLmRlbGV0ZShhKTthPT09VSYmKFk9VT1udWxsLFc9MCk7MTxjLmZsYWdzP251bGwhPT1jLmxhc3RFZmZlY3Q/KGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsZD1jLmZpcnN0RWZmZWN0KTpkPWM6ZD1jLmZpcnN0RWZmZWN0O2lmKG51bGwhPT1kKXtlPVg7WHw9MzI7cGouY3VycmVudD1udWxsO2tmPWZkO2c9TmUoKTtpZihPZShnKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gZyloPXtzdGFydDpnLnNlbGVjdGlvblN0YXJ0LGVuZDpnLnNlbGVjdGlvbkVuZH07ZWxzZSBhOmlmKGg9KGg9Zy5vd25lckRvY3VtZW50KSYmaC5kZWZhdWx0Vmlld3x8d2luZG93LChsPWguZ2V0U2VsZWN0aW9uJiZoLmdldFNlbGVjdGlvbigpKSYmMCE9PWwucmFuZ2VDb3VudCl7aD1sLmFuY2hvck5vZGU7Zj1sLmFuY2hvck9mZnNldDtrPWwuZm9jdXNOb2RlO2w9bC5mb2N1c09mZnNldDt0cnl7aC5ub2RlVHlwZSxrLm5vZGVUeXBlfWNhdGNoKHZhKXtoPW51bGw7XG5icmVhayBhfXZhciBuPTAsQT0tMSxwPS0xLEM9MCx4PTAsdz1nLHo9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB1Ozspe3chPT1ofHwwIT09ZiYmMyE9PXcubm9kZVR5cGV8fChBPW4rZik7dyE9PWt8fDAhPT1sJiYzIT09dy5ub2RlVHlwZXx8KHA9bitsKTszPT09dy5ub2RlVHlwZSYmKG4rPXcubm9kZVZhbHVlLmxlbmd0aCk7aWYobnVsbD09PSh1PXcuZmlyc3RDaGlsZCkpYnJlYWs7ej13O3c9dX1mb3IoOzspe2lmKHc9PT1nKWJyZWFrIGI7ej09PWgmJisrQz09PWYmJihBPW4pO3o9PT1rJiYrK3g9PT1sJiYocD1uKTtpZihudWxsIT09KHU9dy5uZXh0U2libGluZykpYnJlYWs7dz16O3o9dy5wYXJlbnROb2RlfXc9dX1oPS0xPT09QXx8LTE9PT1wP251bGw6e3N0YXJ0OkEsZW5kOnB9fWVsc2UgaD1udWxsO2g9aHx8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgaD1udWxsO2xmPXtmb2N1c2VkRWxlbTpnLHNlbGVjdGlvblJhbmdlOmh9O2ZkPSExO0lqPW51bGw7Smo9ITE7Wj1kO2RvIHRyeXtlaygpfWNhdGNoKHZhKXtpZihudWxsPT09XG5aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO0lqPW51bGw7Wj1kO2RvIHRyeXtmb3IoZz1hO251bGwhPT1aOyl7dmFyIHQ9Wi5mbGFnczt0JjE2JiZwYihaLnN0YXRlTm9kZSxcIlwiKTtpZih0JjEyOCl7dmFyIHE9Wi5hbHRlcm5hdGU7aWYobnVsbCE9PXEpe3ZhciB2PXEucmVmO251bGwhPT12JiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHY/dihudWxsKTp2LmN1cnJlbnQ9bnVsbCl9fXN3aXRjaCh0JjEwMzgpe2Nhc2UgMjpmaihaKTtaLmZsYWdzJj0tMzticmVhaztjYXNlIDY6ZmooWik7Wi5mbGFncyY9LTM7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSAxMDI0OlouZmxhZ3MmPS0xMDI1O2JyZWFrO2Nhc2UgMTAyODpaLmZsYWdzJj0tMTAyNTtpaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDQ6aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA4Omg9WjtjaihnLGgpO3ZhciBKPWguYWx0ZXJuYXRlO2RqKGgpO251bGwhPT1cbkomJmRqKEopfVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7dj1sZjtxPU5lKCk7dD12LmZvY3VzZWRFbGVtO2c9di5zZWxlY3Rpb25SYW5nZTtpZihxIT09dCYmdCYmdC5vd25lckRvY3VtZW50JiZNZSh0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHQpKXtudWxsIT09ZyYmT2UodCkmJihxPWcuc3RhcnQsdj1nLmVuZCx2b2lkIDA9PT12JiYodj1xKSxcInNlbGVjdGlvblN0YXJ0XCJpbiB0Pyh0LnNlbGVjdGlvblN0YXJ0PXEsdC5zZWxlY3Rpb25FbmQ9TWF0aC5taW4odix0LnZhbHVlLmxlbmd0aCkpOih2PShxPXQub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZxLmRlZmF1bHRWaWV3fHx3aW5kb3csdi5nZXRTZWxlY3Rpb24mJih2PXYuZ2V0U2VsZWN0aW9uKCksaD10LnRleHRDb250ZW50Lmxlbmd0aCxKPU1hdGgubWluKGcuc3RhcnQsaCksZz12b2lkIDA9PT1cbmcuZW5kP0o6TWF0aC5taW4oZy5lbmQsaCksIXYuZXh0ZW5kJiZKPmcmJihoPWcsZz1KLEo9aCksaD1MZSh0LEopLGY9TGUodCxnKSxoJiZmJiYoMSE9PXYucmFuZ2VDb3VudHx8di5hbmNob3JOb2RlIT09aC5ub2RlfHx2LmFuY2hvck9mZnNldCE9PWgub2Zmc2V0fHx2LmZvY3VzTm9kZSE9PWYubm9kZXx8di5mb2N1c09mZnNldCE9PWYub2Zmc2V0KSYmKHE9cS5jcmVhdGVSYW5nZSgpLHEuc2V0U3RhcnQoaC5ub2RlLGgub2Zmc2V0KSx2LnJlbW92ZUFsbFJhbmdlcygpLEo+Zz8odi5hZGRSYW5nZShxKSx2LmV4dGVuZChmLm5vZGUsZi5vZmZzZXQpKToocS5zZXRFbmQoZi5ub2RlLGYub2Zmc2V0KSx2LmFkZFJhbmdlKHEpKSkpKSk7cT1bXTtmb3Iodj10O3Y9di5wYXJlbnROb2RlOykxPT09di5ub2RlVHlwZSYmcS5wdXNoKHtlbGVtZW50OnYsbGVmdDp2LnNjcm9sbExlZnQsdG9wOnYuc2Nyb2xsVG9wfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIHQuZm9jdXMmJnQuZm9jdXMoKTtmb3IodD1cbjA7dDxxLmxlbmd0aDt0Kyspdj1xW3RdLHYuZWxlbWVudC5zY3JvbGxMZWZ0PXYubGVmdCx2LmVsZW1lbnQuc2Nyb2xsVG9wPXYudG9wfWZkPSEha2Y7bGY9a2Y9bnVsbDthLmN1cnJlbnQ9YztaPWQ7ZG8gdHJ5e2Zvcih0PWE7bnVsbCE9PVo7KXt2YXIgSz1aLmZsYWdzO0smMzYmJllpKHQsWi5hbHRlcm5hdGUsWik7aWYoSyYxMjgpe3E9dm9pZCAwO3ZhciBRPVoucmVmO2lmKG51bGwhPT1RKXt2YXIgTD1aLnN0YXRlTm9kZTtzd2l0Y2goWi50YWcpe2Nhc2UgNTpxPUw7YnJlYWs7ZGVmYXVsdDpxPUx9XCJmdW5jdGlvblwiPT09dHlwZW9mIFE/UShxKTpRLmN1cnJlbnQ9cX19Wj1aLm5leHRFZmZlY3R9fWNhdGNoKHZhKXtpZihudWxsPT09Wil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtaPW51bGw7JGYoKTtYPWV9ZWxzZSBhLmN1cnJlbnQ9YztpZih4ail4aj0hMSx5aj1hLHpqPWI7ZWxzZSBmb3IoWj1kO251bGwhPT1aOyliPVxuWi5uZXh0RWZmZWN0LFoubmV4dEVmZmVjdD1udWxsLFouZmxhZ3MmOCYmKEs9WixLLnNpYmxpbmc9bnVsbCxLLnN0YXRlTm9kZT1udWxsKSxaPWI7ZD1hLnBlbmRpbmdMYW5lczswPT09ZCYmKFRpPW51bGwpOzE9PT1kP2E9PT1Faj9EaisrOihEaj0wLEVqPWEpOkRqPTA7Yz1jLnN0YXRlTm9kZTtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJSb290KXRyeXtNZi5vbkNvbW1pdEZpYmVyUm9vdChMZixjLHZvaWQgMCw2ND09PShjLmN1cnJlbnQuZmxhZ3MmNjQpKX1jYXRjaCh2YSl7fU1qKGEsTygpKTtpZihRaSl0aHJvdyBRaT0hMSxhPVJpLFJpPW51bGwsYTtpZigwIT09KFgmOCkpcmV0dXJuIG51bGw7aWcoKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGVrKCl7Zm9yKDtudWxsIT09Wjspe3ZhciBhPVouYWx0ZXJuYXRlO0pqfHxudWxsPT09SWp8fCgwIT09KFouZmxhZ3MmOCk/ZGMoWixJaikmJihKaj0hMCk6MTM9PT1aLnRhZyYmbWooYSxaKSYmZGMoWixJaikmJihKaj0hMCkpO3ZhciBiPVouZmxhZ3M7MCE9PShiJjI1NikmJlhpKGEsWik7MD09PShiJjUxMil8fHhqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpO1o9Wi5uZXh0RWZmZWN0fX1mdW5jdGlvbiBPaigpe2lmKDkwIT09emope3ZhciBhPTk3PHpqPzk3OnpqO3pqPTkwO3JldHVybiBnZyhhLGZrKX1yZXR1cm4hMX1mdW5jdGlvbiAkaShhLGIpe0FqLnB1c2goYixhKTt4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKX1mdW5jdGlvbiBaaShhLGIpe0JqLnB1c2goYixhKTt4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKX1cbmZ1bmN0aW9uIGZrKCl7aWYobnVsbD09PXlqKXJldHVybiExO3ZhciBhPXlqO3lqPW51bGw7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMzMSkpO3ZhciBiPVg7WHw9MzI7dmFyIGM9Qmo7Qmo9W107Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKz0yKXt2YXIgZT1jW2RdLGY9Y1tkKzFdLGc9ZS5kZXN0cm95O2UuZGVzdHJveT12b2lkIDA7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcpdHJ5e2coKX1jYXRjaChrKXtpZihudWxsPT09Zil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKGYsayl9fWM9QWo7QWo9W107Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrPTIpe2U9Y1tkXTtmPWNbZCsxXTt0cnl7dmFyIGg9ZS5jcmVhdGU7ZS5kZXN0cm95PWgoKX1jYXRjaChrKXtpZihudWxsPT09Zil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKGYsayl9fWZvcihoPWEuY3VycmVudC5maXJzdEVmZmVjdDtudWxsIT09aDspYT1oLm5leHRFZmZlY3QsaC5uZXh0RWZmZWN0PW51bGwsaC5mbGFncyY4JiYoaC5zaWJsaW5nPVxubnVsbCxoLnN0YXRlTm9kZT1udWxsKSxoPWE7WD1iO2lnKCk7cmV0dXJuITB9ZnVuY3Rpb24gZ2soYSxiLGMpe2I9TWkoYyxiKTtiPVBpKGEsYiwxKTtBZyhhLGIpO2I9SGcoKTthPUtqKGEsMSk7bnVsbCE9PWEmJigkYyhhLDEsYiksTWooYSxiKSl9XG5mdW5jdGlvbiBXaShhLGIpe2lmKDM9PT1hLnRhZylnayhhLGEsYik7ZWxzZSBmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtpZigzPT09Yy50YWcpe2drKGMsYSxiKTticmVha31lbHNlIGlmKDE9PT1jLnRhZyl7dmFyIGQ9Yy5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKGQpKSl7YT1NaShiLGEpO3ZhciBlPVNpKGMsYSwxKTtBZyhjLGUpO2U9SGcoKTtjPUtqKGMsMSk7aWYobnVsbCE9PWMpJGMoYywxLGUpLE1qKGMsZSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpdHJ5e2QuY29tcG9uZW50RGlkQ2F0Y2goYixhKX1jYXRjaChmKXt9YnJlYWt9fWM9Yy5yZXR1cm59fVxuZnVuY3Rpb24gWWooYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtiPUhnKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZjO1U9PT1hJiYoVyZjKT09PWMmJig0PT09Vnx8Mz09PVYmJihXJjYyOTE0NTYwKT09PVcmJjUwMD5PKCktamo/UWooYSwwKTp1anw9Yyk7TWooYSxiKX1mdW5jdGlvbiBsaihhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO251bGwhPT1jJiZjLmRlbGV0ZShiKTtiPTA7MD09PWImJihiPWEubW9kZSwwPT09KGImMik/Yj0xOjA9PT0oYiY0KT9iPTk5PT09ZWcoKT8xOjI6KDA9PT1HaiYmKEdqPXRqKSxiPVljKDYyOTE0NTYwJn5HaiksMD09PWImJihiPTQxOTQzMDQpKSk7Yz1IZygpO2E9S2ooYSxiKTtudWxsIT09YSYmKCRjKGEsYixjKSxNaihhLGMpKX12YXIgY2s7XG5jaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yi5sYW5lcztpZihudWxsIT09YSlpZihhLm1lbW9pemVkUHJvcHMhPT1iLnBlbmRpbmdQcm9wc3x8Ti5jdXJyZW50KXVnPSEwO2Vsc2UgaWYoMCE9PShjJmQpKXVnPTAhPT0oYS5mbGFncyYxNjM4NCk/ITA6ITE7ZWxzZXt1Zz0hMTtzd2l0Y2goYi50YWcpe2Nhc2UgMzpyaShiKTtzaCgpO2JyZWFrO2Nhc2UgNTpnaChiKTticmVhaztjYXNlIDE6RmYoYi50eXBlKSYmSmYoYik7YnJlYWs7Y2FzZSA0OmVoKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDpkPWIubWVtb2l6ZWRQcm9wcy52YWx1ZTt2YXIgZT1iLnR5cGUuX2NvbnRleHQ7SShtZyxlLl9jdXJyZW50VmFsdWUpO2UuX2N1cnJlbnRWYWx1ZT1kO2JyZWFrO2Nhc2UgMTM6aWYobnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSl7aWYoMCE9PShjJmIuY2hpbGQuY2hpbGRMYW5lcykpcmV0dXJuIHRpKGEsYixjKTtJKFAsUC5jdXJyZW50JjEpO2I9aGkoYSxiLGMpO3JldHVybiBudWxsIT09XG5iP2Iuc2libGluZzpudWxsfUkoUCxQLmN1cnJlbnQmMSk7YnJlYWs7Y2FzZSAxOTpkPTAhPT0oYyZiLmNoaWxkTGFuZXMpO2lmKDAhPT0oYS5mbGFncyY2NCkpe2lmKGQpcmV0dXJuIEFpKGEsYixjKTtiLmZsYWdzfD02NH1lPWIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZSYmKGUucmVuZGVyaW5nPW51bGwsZS50YWlsPW51bGwsZS5sYXN0RWZmZWN0PW51bGwpO0koUCxQLmN1cnJlbnQpO2lmKGQpYnJlYWs7ZWxzZSByZXR1cm4gbnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIGIubGFuZXM9MCxtaShhLGIsYyl9cmV0dXJuIGhpKGEsYixjKX1lbHNlIHVnPSExO2IubGFuZXM9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjpkPWIudHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTthPWIucGVuZGluZ1Byb3BzO2U9RWYoYixNLmN1cnJlbnQpO3RnKGIsYyk7ZT1DaChudWxsLGIsZCxhLGUsYyk7Yi5mbGFnc3w9MTtpZihcIm9iamVjdFwiPT09XG50eXBlb2YgZSYmbnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZil7Yi50YWc9MTtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYoRmYoZCkpe3ZhciBmPSEwO0pmKGIpfWVsc2UgZj0hMTtiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsO3hnKGIpO3ZhciBnPWQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiZHZyhiLGQsZyxhKTtlLnVwZGF0ZXI9S2c7Yi5zdGF0ZU5vZGU9ZTtlLl9yZWFjdEludGVybmFscz1iO09nKGIsZCxhLGMpO2I9cWkobnVsbCxiLGQsITAsZixjKX1lbHNlIGIudGFnPTAsZmkobnVsbCxiLGUsYyksYj1iLmNoaWxkO3JldHVybiBiO2Nhc2UgMTY6ZT1iLmVsZW1lbnRUeXBlO2E6e251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpO1xuYT1iLnBlbmRpbmdQcm9wcztmPWUuX2luaXQ7ZT1mKGUuX3BheWxvYWQpO2IudHlwZT1lO2Y9Yi50YWc9aGsoZSk7YT1sZyhlLGEpO3N3aXRjaChmKXtjYXNlIDA6Yj1saShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxOmI9cGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTE6Yj1naShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxNDpiPWlpKG51bGwsYixlLGxnKGUudHlwZSxhKSxkLGMpO2JyZWFrIGF9dGhyb3cgRXJyb3IoeSgzMDYsZSxcIlwiKSk7fXJldHVybiBiO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxsaShhLGIsZCxlLGMpO2Nhc2UgMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxwaShhLGIsZCxlLGMpO2Nhc2UgMzpyaShiKTtkPWIudXBkYXRlUXVldWU7aWYobnVsbD09PWF8fG51bGw9PT1kKXRocm93IEVycm9yKHkoMjgyKSk7XG5kPWIucGVuZGluZ1Byb3BzO2U9Yi5tZW1vaXplZFN0YXRlO2U9bnVsbCE9PWU/ZS5lbGVtZW50Om51bGw7eWcoYSxiKTtDZyhiLGQsbnVsbCxjKTtkPWIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50O2lmKGQ9PT1lKXNoKCksYj1oaShhLGIsYyk7ZWxzZXtlPWIuc3RhdGVOb2RlO2lmKGY9ZS5oeWRyYXRlKWtoPXJmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8uZmlyc3RDaGlsZCksamg9YixmPWxoPSEwO2lmKGYpe2E9ZS5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhO2lmKG51bGwhPWEpZm9yKGU9MDtlPGEubGVuZ3RoO2UrPTIpZj1hW2VdLGYuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9YVtlKzFdLHRoLnB1c2goZik7Yz1aZyhiLG51bGwsZCxjKTtmb3IoYi5jaGlsZD1jO2M7KWMuZmxhZ3M9Yy5mbGFncyYtM3wxMDI0LGM9Yy5zaWJsaW5nfWVsc2UgZmkoYSxiLGQsYyksc2goKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBnaChiKSxudWxsPT09YSYmXG5waChiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsZz1lLmNoaWxkcmVuLG5mKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZuZihkLGYpJiYoYi5mbGFnc3w9MTYpLG9pKGEsYiksZmkoYSxiLGcsYyksYi5jaGlsZDtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZwaChiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIHRpKGEsYixjKTtjYXNlIDQ6cmV0dXJuIGVoKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPVlnKGIsbnVsbCxkLGMpOmZpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxnaShhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLGMpLGIuY2hpbGQ7Y2FzZSA4OnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sXG5jKSxiLmNoaWxkO2Nhc2UgMTI6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7ZT1iLnBlbmRpbmdQcm9wcztnPWIubWVtb2l6ZWRQcm9wcztmPWUudmFsdWU7dmFyIGg9Yi50eXBlLl9jb250ZXh0O0kobWcsaC5fY3VycmVudFZhbHVlKTtoLl9jdXJyZW50VmFsdWU9ZjtpZihudWxsIT09ZylpZihoPWcudmFsdWUsZj1IZShoLGYpPzA6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLl9jYWxjdWxhdGVDaGFuZ2VkQml0cz9kLl9jYWxjdWxhdGVDaGFuZ2VkQml0cyhoLGYpOjEwNzM3NDE4MjMpfDAsMD09PWYpe2lmKGcuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhTi5jdXJyZW50KXtiPWhpKGEsYixjKTticmVhayBhfX1lbHNlIGZvcihoPWIuY2hpbGQsbnVsbCE9PWgmJihoLnJldHVybj1iKTtudWxsIT09aDspe3ZhciBrPWguZGVwZW5kZW5jaWVzO2lmKG51bGwhPT1rKXtnPWguY2hpbGQ7Zm9yKHZhciBsPVxuay5maXJzdENvbnRleHQ7bnVsbCE9PWw7KXtpZihsLmNvbnRleHQ9PT1kJiYwIT09KGwub2JzZXJ2ZWRCaXRzJmYpKXsxPT09aC50YWcmJihsPXpnKC0xLGMmLWMpLGwudGFnPTIsQWcoaCxsKSk7aC5sYW5lc3w9YztsPWguYWx0ZXJuYXRlO251bGwhPT1sJiYobC5sYW5lc3w9Yyk7c2coaC5yZXR1cm4sYyk7ay5sYW5lc3w9YzticmVha31sPWwubmV4dH19ZWxzZSBnPTEwPT09aC50YWc/aC50eXBlPT09Yi50eXBlP251bGw6aC5jaGlsZDpoLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWg7ZWxzZSBmb3IoZz1oO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31oPWcuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Zy5yZXR1cm47Zz1oO2JyZWFrfWc9Zy5yZXR1cm59aD1nfWZpKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGY9Yi5wZW5kaW5nUHJvcHMsZD1mLmNoaWxkcmVuLHRnKGIsYyksZT12ZyhlLFxuZi51bnN0YWJsZV9vYnNlcnZlZEJpdHMpLGQ9ZChlKSxiLmZsYWdzfD0xLGZpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZT1iLnR5cGUsZj1sZyhlLGIucGVuZGluZ1Byb3BzKSxmPWxnKGUudHlwZSxmKSxpaShhLGIsZSxmLGQsYyk7Y2FzZSAxNTpyZXR1cm4ga2koYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxkLGMpO2Nhc2UgMTc6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksYi50YWc9MSxGZihkKT8oYT0hMCxKZihiKSk6YT0hMSx0ZyhiLGMpLE1nKGIsZCxlKSxPZyhiLGQsZSxjKSxxaShudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIEFpKGEsYixjKTtjYXNlIDIzOnJldHVybiBtaShhLGIsYyk7Y2FzZSAyNDpyZXR1cm4gbWkoYSxiLGMpfXRocm93IEVycm9yKHkoMTU2LGIudGFnKSk7XG59O2Z1bmN0aW9uIGlrKGEsYixjLGQpe3RoaXMudGFnPWE7dGhpcy5rZXk9Yzt0aGlzLnNpYmxpbmc9dGhpcy5jaGlsZD10aGlzLnJldHVybj10aGlzLnN0YXRlTm9kZT10aGlzLnR5cGU9dGhpcy5lbGVtZW50VHlwZT1udWxsO3RoaXMuaW5kZXg9MDt0aGlzLnJlZj1udWxsO3RoaXMucGVuZGluZ1Byb3BzPWI7dGhpcy5kZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5mbGFncz0wO3RoaXMubGFzdEVmZmVjdD10aGlzLmZpcnN0RWZmZWN0PXRoaXMubmV4dEVmZmVjdD1udWxsO3RoaXMuY2hpbGRMYW5lcz10aGlzLmxhbmVzPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBuaChhLGIsYyxkKXtyZXR1cm4gbmV3IGlrKGEsYixjLGQpfWZ1bmN0aW9uIGppKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9XG5mdW5jdGlvbiBoayhhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gamkoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PUFhKXJldHVybiAxMTtpZihhPT09RGEpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gVGcoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1uaChhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLnR5cGU9YS50eXBlLGMuZmxhZ3M9MCxjLm5leHRFZmZlY3Q9bnVsbCxjLmZpcnN0RWZmZWN0PW51bGwsYy5sYXN0RWZmZWN0PW51bGwpO2MuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXM7Yy5sYW5lcz1hLmxhbmVzO2MuY2hpbGQ9YS5jaGlsZDtjLm1lbW9pemVkUHJvcHM9YS5tZW1vaXplZFByb3BzO2MubWVtb2l6ZWRTdGF0ZT1hLm1lbW9pemVkU3RhdGU7Yy51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlO2I9YS5kZXBlbmRlbmNpZXM7Yy5kZXBlbmRlbmNpZXM9bnVsbD09PWI/bnVsbDp7bGFuZXM6Yi5sYW5lcyxmaXJzdENvbnRleHQ6Yi5maXJzdENvbnRleHR9O1xuYy5zaWJsaW5nPWEuc2libGluZztjLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBWZyhhLGIsYyxkLGUsZil7dmFyIGc9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpamkoYSkmJihnPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWc9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgdWE6cmV0dXJuIFhnKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgSGE6Zz04O2V8PTE2O2JyZWFrO2Nhc2Ugd2E6Zz04O2V8PTE7YnJlYWs7Y2FzZSB4YTpyZXR1cm4gYT1uaCgxMixjLGIsZXw4KSxhLmVsZW1lbnRUeXBlPXhhLGEudHlwZT14YSxhLmxhbmVzPWYsYTtjYXNlIEJhOnJldHVybiBhPW5oKDEzLGMsYixlKSxhLnR5cGU9QmEsYS5lbGVtZW50VHlwZT1CYSxhLmxhbmVzPWYsYTtjYXNlIENhOnJldHVybiBhPW5oKDE5LGMsYixlKSxhLmVsZW1lbnRUeXBlPUNhLGEubGFuZXM9ZixhO2Nhc2UgSWE6cmV0dXJuIHZpKGMsZSxmLGIpO2Nhc2UgSmE6cmV0dXJuIGE9bmgoMjQsYyxiLGUpLGEuZWxlbWVudFR5cGU9SmEsYS5sYW5lcz1mLGE7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09XG50eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgeWE6Zz0xMDticmVhayBhO2Nhc2UgemE6Zz05O2JyZWFrIGE7Y2FzZSBBYTpnPTExO2JyZWFrIGE7Y2FzZSBEYTpnPTE0O2JyZWFrIGE7Y2FzZSBFYTpnPTE2O2Q9bnVsbDticmVhayBhO2Nhc2UgRmE6Zz0yMjticmVhayBhfXRocm93IEVycm9yKHkoMTMwLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKSk7fWI9bmgoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IubGFuZXM9ZjtyZXR1cm4gYn1mdW5jdGlvbiBYZyhhLGIsYyxkKXthPW5oKDcsYSxkLGIpO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiB2aShhLGIsYyxkKXthPW5oKDIzLGEsZCxiKTthLmVsZW1lbnRUeXBlPUlhO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiBVZyhhLGIsYyl7YT1uaCg2LGEsbnVsbCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiBXZyhhLGIsYyl7Yj1uaCg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5sYW5lcz1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGprKGEsYixjKXt0aGlzLnRhZz1iO3RoaXMuY29udGFpbmVySW5mbz1hO3RoaXMuZmluaXNoZWRXb3JrPXRoaXMucGluZ0NhY2hlPXRoaXMuY3VycmVudD10aGlzLnBlbmRpbmdDaGlsZHJlbj1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuaHlkcmF0ZT1jO3RoaXMuY2FsbGJhY2tOb2RlPW51bGw7dGhpcy5jYWxsYmFja1ByaW9yaXR5PTA7dGhpcy5ldmVudFRpbWVzPVpjKDApO3RoaXMuZXhwaXJhdGlvblRpbWVzPVpjKC0xKTt0aGlzLmVudGFuZ2xlZExhbmVzPXRoaXMuZmluaXNoZWRMYW5lcz10aGlzLm11dGFibGVSZWFkTGFuZXM9dGhpcy5leHBpcmVkTGFuZXM9dGhpcy5waW5nZWRMYW5lcz10aGlzLnN1c3BlbmRlZExhbmVzPXRoaXMucGVuZGluZ0xhbmVzPTA7dGhpcy5lbnRhbmdsZW1lbnRzPVpjKDApO3RoaXMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1udWxsfVxuZnVuY3Rpb24ga2soYSxiLGMpe3ZhciBkPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybnskJHR5cGVvZjp0YSxrZXk6bnVsbD09ZD9udWxsOlwiXCIrZCxjaGlsZHJlbjphLGNvbnRhaW5lckluZm86YixpbXBsZW1lbnRhdGlvbjpjfX1cbmZ1bmN0aW9uIGxrKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPUhnKCksZz1JZyhlKTthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbHM7Yjp7aWYoWmIoYykhPT1jfHwxIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgxNzApKTt2YXIgaD1jO2Rve3N3aXRjaChoLnRhZyl7Y2FzZSAzOmg9aC5zdGF0ZU5vZGUuY29udGV4dDticmVhayBiO2Nhc2UgMTppZihGZihoLnR5cGUpKXtoPWguc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWg9aC5yZXR1cm59d2hpbGUobnVsbCE9PWgpO3Rocm93IEVycm9yKHkoMTcxKSk7fWlmKDE9PT1jLnRhZyl7dmFyIGs9Yy50eXBlO2lmKEZmKGspKXtjPUlmKGMsayxoKTticmVhayBhfX1jPWh9ZWxzZSBjPUNmO251bGw9PT1iLmNvbnRleHQ/Yi5jb250ZXh0PWM6Yi5wZW5kaW5nQ29udGV4dD1jO2I9emcoZixnKTtiLnBheWxvYWQ9e2VsZW1lbnQ6YX07ZD12b2lkIDA9PT1kP251bGw6ZDtudWxsIT09XG5kJiYoYi5jYWxsYmFjaz1kKTtBZyhlLGIpO0pnKGUsZyxmKTtyZXR1cm4gZ31mdW5jdGlvbiBtayhhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIG5rKGEsYil7YT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe3ZhciBjPWEucmV0cnlMYW5lO2EucmV0cnlMYW5lPTAhPT1jJiZjPGI/YzpifX1mdW5jdGlvbiBvayhhLGIpe25rKGEsYik7KGE9YS5hbHRlcm5hdGUpJiZuayhhLGIpfWZ1bmN0aW9uIHBrKCl7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBxayhhLGIsYyl7dmFyIGQ9bnVsbCE9YyYmbnVsbCE9Yy5oeWRyYXRpb25PcHRpb25zJiZjLmh5ZHJhdGlvbk9wdGlvbnMubXV0YWJsZVNvdXJjZXN8fG51bGw7Yz1uZXcgamsoYSxiLG51bGwhPWMmJiEwPT09Yy5oeWRyYXRlKTtiPW5oKDMsbnVsbCxudWxsLDI9PT1iPzc6MT09PWI/MzowKTtjLmN1cnJlbnQ9YjtiLnN0YXRlTm9kZT1jO3hnKGIpO2FbZmZdPWMuY3VycmVudDtjZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7aWYoZClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKXtiPWRbYV07dmFyIGU9Yi5fZ2V0VmVyc2lvbjtlPWUoYi5fc291cmNlKTtudWxsPT1jLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE/Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPVtiLGVdOmMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YS5wdXNoKGIsZSl9dGhpcy5faW50ZXJuYWxSb290PWN9XG5xay5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe2xrKGEsdGhpcy5faW50ZXJuYWxSb290LG51bGwsbnVsbCl9O3FrLnByb3RvdHlwZS51bm1vdW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5faW50ZXJuYWxSb290LGI9YS5jb250YWluZXJJbmZvO2xrKG51bGwsYSxudWxsLGZ1bmN0aW9uKCl7YltmZl09bnVsbH0pfTtmdW5jdGlvbiByayhhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9XG5mdW5jdGlvbiBzayhhLGIpe2J8fChiPWE/OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YS5maXJzdENoaWxkOm51bGwsYj0hKCFifHwxIT09Yi5ub2RlVHlwZXx8IWIuaGFzQXR0cmlidXRlKFwiZGF0YS1yZWFjdHJvb3RcIikpKTtpZighYilmb3IodmFyIGM7Yz1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChjKTtyZXR1cm4gbmV3IHFrKGEsMCxiP3toeWRyYXRlOiEwfTp2b2lkIDApfVxuZnVuY3Rpb24gdGsoYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXI7aWYoZil7dmFyIGc9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1tayhnKTtoLmNhbGwoYSl9fWxrKGIsZyxhLGUpfWVsc2V7Zj1jLl9yZWFjdFJvb3RDb250YWluZXI9c2soYyxkKTtnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGs9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7ay5jYWxsKGEpfX1YaihmdW5jdGlvbigpe2xrKGIsZyxhLGUpfSl9cmV0dXJuIG1rKGcpfWVjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCk7SmcoYSw0LGIpO29rKGEsNCl9fTtmYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNjcxMDg4NjQsYik7b2soYSw2NzEwODg2NCl9fTtcbmdjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCksYz1JZyhhKTtKZyhhLGMsYik7b2soYSxjKX19O2hjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIoKX07XG55Yj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOmFiKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1EYihkKTtpZighZSl0aHJvdyBFcnJvcih5KDkwKSk7V2EoZCk7YWIoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZmYihhLCEhYy5tdWx0aXBsZSxiLCExKX19O0diPVdqO1xuSGI9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1YO1h8PTQ7dHJ5e3JldHVybiBnZyg5OCxhLmJpbmQobnVsbCxiLGMsZCxlKSl9ZmluYWxseXtYPWYsMD09PVgmJih3aigpLGlnKCkpfX07SWI9ZnVuY3Rpb24oKXswPT09KFgmNDkpJiYoVmooKSxPaigpKX07SmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1YO1h8PTI7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19O2Z1bmN0aW9uIHVrKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIGtrKGEsYixudWxsLGMpfXZhciB2az17RXZlbnRzOltDYix1ZSxEYixFYixGYixPaix7Y3VycmVudDohMX1dfSx3az17ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6d2MsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNy4wLjJcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9O1xudmFyIHhrPXtidW5kbGVUeXBlOndrLmJ1bmRsZVR5cGUsdmVyc2lvbjp3ay52ZXJzaW9uLHJlbmRlcmVyUGFja2FnZU5hbWU6d2sucmVuZGVyZXJQYWNrYWdlTmFtZSxyZW5kZXJlckNvbmZpZzp3ay5yZW5kZXJlckNvbmZpZyxvdmVycmlkZUhvb2tTdGF0ZTpudWxsLG92ZXJyaWRlSG9va1N0YXRlRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlSG9va1N0YXRlUmVuYW1lUGF0aDpudWxsLG92ZXJyaWRlUHJvcHM6bnVsbCxvdmVycmlkZVByb3BzRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlUHJvcHNSZW5hbWVQYXRoOm51bGwsc2V0U3VzcGVuc2VIYW5kbGVyOm51bGwsc2NoZWR1bGVVcGRhdGU6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjpyYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9Y2MoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndrLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlfHxcbnBrLGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGx9O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXt2YXIgeWs9X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKCF5ay5pc0Rpc2FibGVkJiZ5ay5zdXBwb3J0c0ZpYmVyKXRyeXtMZj15ay5pbmplY3QoeGspLE1mPXlrfWNhdGNoKGEpe319ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD12aztleHBvcnRzLmNyZWF0ZVBvcnRhbD11aztcbmV4cG9ydHMuZmluZERPTU5vZGU9ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFscztpZih2b2lkIDA9PT1iKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5yZW5kZXIpdGhyb3cgRXJyb3IoeSgxODgpKTt0aHJvdyBFcnJvcih5KDI2OCxPYmplY3Qua2V5cyhhKSkpO31hPWNjKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX07ZXhwb3J0cy5mbHVzaFN5bmM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1YO2lmKDAhPT0oYyY0OCkpcmV0dXJuIGEoYik7WHw9MTt0cnl7aWYoYSlyZXR1cm4gZ2coOTksYS5iaW5kKG51bGwsYikpfWZpbmFsbHl7WD1jLGlnKCl9fTtleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMCxjKX07XG5leHBvcnRzLnJlbmRlcj1mdW5jdGlvbihhLGIsYyl7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIHRrKG51bGwsYSxiLCExLGMpfTtleHBvcnRzLnVubW91bnRDb21wb25lbnRBdE5vZGU9ZnVuY3Rpb24oYSl7aWYoIXJrKGEpKXRocm93IEVycm9yKHkoNDApKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhYaihmdW5jdGlvbigpe3RrKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGw7YVtmZl09bnVsbH0pfSksITApOiExfTtleHBvcnRzLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzPVdqO2V4cG9ydHMudW5zdGFibGVfY3JlYXRlUG9ydGFsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHVrKGEsYiwyPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCl9O1xuZXhwb3J0cy51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyxkKXtpZighcmsoYykpdGhyb3cgRXJyb3IoeSgyMDApKTtpZihudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFscyl0aHJvdyBFcnJvcih5KDM4KSk7cmV0dXJuIHRrKGEsYixjLCExLGQpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20nQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7dmFyIHIsQj1yfHwocj17fSk7Qi5Qb3A9XCJQT1BcIjtCLlB1c2g9XCJQVVNIXCI7Qi5SZXBsYWNlPVwiUkVQTEFDRVwiO3ZhciBDPVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ZnVuY3Rpb24oYil7cmV0dXJuIE9iamVjdC5mcmVlemUoYil9OmZ1bmN0aW9uKGIpe3JldHVybiBifTtmdW5jdGlvbiBEKGIsaCl7aWYoIWIpe1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmY29uc29sZS53YXJuKGgpO3RyeXt0aHJvdyBFcnJvcihoKTt9Y2F0Y2goZSl7fX19ZnVuY3Rpb24gRShiKXtiLnByZXZlbnREZWZhdWx0KCk7Yi5yZXR1cm5WYWx1ZT1cIlwifVxuZnVuY3Rpb24gRigpe3ZhciBiPVtdO3JldHVybntnZXQgbGVuZ3RoKCl7cmV0dXJuIGIubGVuZ3RofSxwdXNoOmZ1bmN0aW9uKGgpe2IucHVzaChoKTtyZXR1cm4gZnVuY3Rpb24oKXtiPWIuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlIT09aH0pfX0sY2FsbDpmdW5jdGlvbihoKXtiLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUoaCl9KX19fWZ1bmN0aW9uIEgoKXtyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsOCl9ZnVuY3Rpb24gSShiKXt2YXIgaD1iLnBhdGhuYW1lO2g9dm9pZCAwPT09aD9cIi9cIjpoO3ZhciBlPWIuc2VhcmNoO2U9dm9pZCAwPT09ZT9cIlwiOmU7Yj1iLmhhc2g7Yj12b2lkIDA9PT1iP1wiXCI6YjtlJiZcIj9cIiE9PWUmJihoKz1cIj9cIj09PWUuY2hhckF0KDApP2U6XCI/XCIrZSk7YiYmXCIjXCIhPT1iJiYoaCs9XCIjXCI9PT1iLmNoYXJBdCgwKT9iOlwiI1wiK2IpO3JldHVybiBofVxuZnVuY3Rpb24gSihiKXt2YXIgaD17fTtpZihiKXt2YXIgZT1iLmluZGV4T2YoXCIjXCIpOzA8PWUmJihoLmhhc2g9Yi5zdWJzdHIoZSksYj1iLnN1YnN0cigwLGUpKTtlPWIuaW5kZXhPZihcIj9cIik7MDw9ZSYmKGguc2VhcmNoPWIuc3Vic3RyKGUpLGI9Yi5zdWJzdHIoMCxlKSk7YiYmKGgucGF0aG5hbWU9Yil9cmV0dXJuIGh9XG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShiKXtmdW5jdGlvbiBoKCl7dmFyIGM9cC5sb2NhdGlvbixhPW0uc3RhdGV8fHt9O3JldHVyblthLmlkeCxDKHtwYXRobmFtZTpjLnBhdGhuYW1lLHNlYXJjaDpjLnNlYXJjaCxoYXNoOmMuaGFzaCxzdGF0ZTphLnVzcnx8bnVsbCxrZXk6YS5rZXl8fFwiZGVmYXVsdFwifSldfWZ1bmN0aW9uIGUoYyl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBjP2M6SShjKX1mdW5jdGlvbiB4KGMsYSl7dm9pZCAwPT09YSYmKGE9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe3BhdGhuYW1lOnEucGF0aG5hbWUsaGFzaDpcIlwiLHNlYXJjaDpcIlwifSxcInN0cmluZ1wiPT09dHlwZW9mIGM/SihjKTpjLHtzdGF0ZTphLGtleTpIKCl9KSl9ZnVuY3Rpb24geihjKXt0PWM7Yz1oKCk7dj1jWzBdO3E9Y1sxXTtkLmNhbGwoe2FjdGlvbjp0LGxvY2F0aW9uOnF9KX1mdW5jdGlvbiBBKGMsYSl7ZnVuY3Rpb24gZigpe0EoYyxhKX12YXIgbD1yLlB1c2gsaz14KGMsXG5hKTtpZighZy5sZW5ndGh8fChnLmNhbGwoe2FjdGlvbjpsLGxvY2F0aW9uOmsscmV0cnk6Zn0pLCExKSl7dmFyIG49W3t1c3I6ay5zdGF0ZSxrZXk6ay5rZXksaWR4OnYrMX0sZShrKV07az1uWzBdO249blsxXTt0cnl7bS5wdXNoU3RhdGUoayxcIlwiLG4pfWNhdGNoKEcpe3AubG9jYXRpb24uYXNzaWduKG4pfXoobCl9fWZ1bmN0aW9uIHkoYyxhKXtmdW5jdGlvbiBmKCl7eShjLGEpfXZhciBsPXIuUmVwbGFjZSxrPXgoYyxhKTtnLmxlbmd0aCYmKGcuY2FsbCh7YWN0aW9uOmwsbG9jYXRpb246ayxyZXRyeTpmfSksMSl8fChrPVt7dXNyOmsuc3RhdGUsa2V5Omsua2V5LGlkeDp2fSxlKGspXSxtLnJlcGxhY2VTdGF0ZShrWzBdLFwiXCIsa1sxXSkseihsKSl9ZnVuY3Rpb24gdyhjKXttLmdvKGMpfXZvaWQgMD09PWImJihiPXt9KTtiPWIud2luZG93O3ZhciBwPXZvaWQgMD09PWI/ZG9jdW1lbnQuZGVmYXVsdFZpZXc6YixtPXAuaGlzdG9yeSx1PW51bGw7cC5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixcbmZ1bmN0aW9uKCl7aWYodSlnLmNhbGwodSksdT1udWxsO2Vsc2V7dmFyIGM9ci5Qb3AsYT1oKCksZj1hWzBdO2E9YVsxXTtpZihnLmxlbmd0aClpZihudWxsIT1mKXt2YXIgbD12LWY7bCYmKHU9e2FjdGlvbjpjLGxvY2F0aW9uOmEscmV0cnk6ZnVuY3Rpb24oKXt3KC0xKmwpfX0sdyhsKSl9ZWxzZVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RCghMSxcIllvdSBhcmUgdHJ5aW5nIHRvIGJsb2NrIGEgUE9QIG5hdmlnYXRpb24gdG8gYSBsb2NhdGlvbiB0aGF0IHdhcyBub3QgY3JlYXRlZCBieSB0aGUgaGlzdG9yeSBsaWJyYXJ5LiBUaGUgYmxvY2sgd2lsbCBmYWlsIHNpbGVudGx5IGluIHByb2R1Y3Rpb24sIGJ1dCBpbiBnZW5lcmFsIHlvdSBzaG91bGQgZG8gYWxsIG5hdmlnYXRpb24gd2l0aCB0aGUgaGlzdG9yeSBsaWJyYXJ5IChpbnN0ZWFkIG9mIHVzaW5nIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSBkaXJlY3RseSkgdG8gYXZvaWQgdGhpcyBzaXR1YXRpb24uXCIpOlxudm9pZCAwO2Vsc2UgeihjKX19KTt2YXIgdD1yLlBvcDtiPWgoKTt2YXIgdj1iWzBdLHE9YlsxXSxkPUYoKSxnPUYoKTtudWxsPT12JiYodj0wLG0ucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LG0uc3RhdGUse2lkeDp2fSksXCJcIikpO3JldHVybntnZXQgYWN0aW9uKCl7cmV0dXJuIHR9LGdldCBsb2NhdGlvbigpe3JldHVybiBxfSxjcmVhdGVIcmVmOmUscHVzaDpBLHJlcGxhY2U6eSxnbzp3LGJhY2s6ZnVuY3Rpb24oKXt3KC0xKX0sZm9yd2FyZDpmdW5jdGlvbigpe3coMSl9LGxpc3RlbjpmdW5jdGlvbihjKXtyZXR1cm4gZC5wdXNoKGMpfSxibG9jazpmdW5jdGlvbihjKXt2YXIgYT1nLnB1c2goYyk7MT09PWcubGVuZ3RoJiZwLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIixFKTtyZXR1cm4gZnVuY3Rpb24oKXthKCk7Zy5sZW5ndGh8fHAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpfX19fTtcbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoKXt2YXIgYT1KKG0ubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLGY9YS5wYXRobmFtZSxsPWEuc2VhcmNoO2E9YS5oYXNoO3ZhciBrPXUuc3RhdGV8fHt9O3JldHVybltrLmlkeCxDKHtwYXRobmFtZTp2b2lkIDA9PT1mP1wiL1wiOmYsc2VhcmNoOnZvaWQgMD09PWw/XCJcIjpsLGhhc2g6dm9pZCAwPT09YT9cIlwiOmEsc3RhdGU6ay51c3J8fG51bGwsa2V5Omsua2V5fHxcImRlZmF1bHRcIn0pXX1mdW5jdGlvbiBlKCl7aWYodCljLmNhbGwodCksdD1udWxsO2Vsc2V7dmFyIGE9ci5Qb3AsZj1oKCksbD1mWzBdO2Y9ZlsxXTtpZihjLmxlbmd0aClpZihudWxsIT1sKXt2YXIgaz1xLWw7ayYmKHQ9e2FjdGlvbjphLGxvY2F0aW9uOmYscmV0cnk6ZnVuY3Rpb24oKXtwKC0xKmspfX0scChrKSl9ZWxzZVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RCghMSxcIllvdSBhcmUgdHJ5aW5nIHRvIGJsb2NrIGEgUE9QIG5hdmlnYXRpb24gdG8gYSBsb2NhdGlvbiB0aGF0IHdhcyBub3QgY3JlYXRlZCBieSB0aGUgaGlzdG9yeSBsaWJyYXJ5LiBUaGUgYmxvY2sgd2lsbCBmYWlsIHNpbGVudGx5IGluIHByb2R1Y3Rpb24sIGJ1dCBpbiBnZW5lcmFsIHlvdSBzaG91bGQgZG8gYWxsIG5hdmlnYXRpb24gd2l0aCB0aGUgaGlzdG9yeSBsaWJyYXJ5IChpbnN0ZWFkIG9mIHVzaW5nIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSBkaXJlY3RseSkgdG8gYXZvaWQgdGhpcyBzaXR1YXRpb24uXCIpOlxudm9pZCAwO2Vsc2UgQShhKX19ZnVuY3Rpb24geChhKXt2YXIgZj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKSxsPVwiXCI7ZiYmZi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpJiYoZj1tLmxvY2F0aW9uLmhyZWYsbD1mLmluZGV4T2YoXCIjXCIpLGw9LTE9PT1sP2Y6Zi5zbGljZSgwLGwpKTtyZXR1cm4gbCtcIiNcIisoXCJzdHJpbmdcIj09PXR5cGVvZiBhP2E6SShhKSl9ZnVuY3Rpb24geihhLGYpe3ZvaWQgMD09PWYmJihmPW51bGwpO3JldHVybiBDKF9leHRlbmRzKHtwYXRobmFtZTpkLnBhdGhuYW1lLGhhc2g6XCJcIixzZWFyY2g6XCJcIn0sXCJzdHJpbmdcIj09PXR5cGVvZiBhP0ooYSk6YSx7c3RhdGU6ZixrZXk6SCgpfSkpfWZ1bmN0aW9uIEEoYSl7dj1hO2E9aCgpO3E9YVswXTtkPWFbMV07Zy5jYWxsKHthY3Rpb246dixsb2NhdGlvbjpkfSl9ZnVuY3Rpb24geShhLGYpe2Z1bmN0aW9uIGwoKXt5KGEsZil9dmFyIGs9ci5QdXNoLG49eihhLGYpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/XG5EKFwiL1wiPT09bi5wYXRobmFtZS5jaGFyQXQoMCksXCJSZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gaGFzaCBoaXN0b3J5LnB1c2goXCIrSlNPTi5zdHJpbmdpZnkoYSkrXCIpXCIpOnZvaWQgMDtpZighYy5sZW5ndGh8fChjLmNhbGwoe2FjdGlvbjprLGxvY2F0aW9uOm4scmV0cnk6bH0pLCExKSl7dmFyIEc9W3t1c3I6bi5zdGF0ZSxrZXk6bi5rZXksaWR4OnErMX0seChuKV07bj1HWzBdO0c9R1sxXTt0cnl7dS5wdXNoU3RhdGUobixcIlwiLEcpfWNhdGNoKEspe20ubG9jYXRpb24uYXNzaWduKEcpfUEoayl9fWZ1bmN0aW9uIHcoYSxmKXtmdW5jdGlvbiBsKCl7dyhhLGYpfXZhciBrPXIuUmVwbGFjZSxuPXooYSxmKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT1uLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucmVwbGFjZShcIitKU09OLnN0cmluZ2lmeShhKStcblwiKVwiKTp2b2lkIDA7Yy5sZW5ndGgmJihjLmNhbGwoe2FjdGlvbjprLGxvY2F0aW9uOm4scmV0cnk6bH0pLDEpfHwobj1be3VzcjpuLnN0YXRlLGtleTpuLmtleSxpZHg6cX0seChuKV0sdS5yZXBsYWNlU3RhdGUoblswXSxcIlwiLG5bMV0pLEEoaykpfWZ1bmN0aW9uIHAoYSl7dS5nbyhhKX12b2lkIDA9PT1iJiYoYj17fSk7Yj1iLndpbmRvdzt2YXIgbT12b2lkIDA9PT1iP2RvY3VtZW50LmRlZmF1bHRWaWV3OmIsdT1tLmhpc3RvcnksdD1udWxsO20uYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsZSk7bS5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGE9aCgpWzFdO0koYSkhPT1JKGQpJiZlKCl9KTt2YXIgdj1yLlBvcDtiPWgoKTt2YXIgcT1iWzBdLGQ9YlsxXSxnPUYoKSxjPUYoKTtudWxsPT1xJiYocT0wLHUucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LHUuc3RhdGUse2lkeDpxfSksXCJcIikpO3JldHVybntnZXQgYWN0aW9uKCl7cmV0dXJuIHZ9LGdldCBsb2NhdGlvbigpe3JldHVybiBkfSxcbmNyZWF0ZUhyZWY6eCxwdXNoOnkscmVwbGFjZTp3LGdvOnAsYmFjazpmdW5jdGlvbigpe3AoLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7cCgxKX0sbGlzdGVuOmZ1bmN0aW9uKGEpe3JldHVybiBnLnB1c2goYSl9LGJsb2NrOmZ1bmN0aW9uKGEpe3ZhciBmPWMucHVzaChhKTsxPT09Yy5sZW5ndGgmJm0uYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpO3JldHVybiBmdW5jdGlvbigpe2YoKTtjLmxlbmd0aHx8bS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSl9fX19O1xuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShiKXtmdW5jdGlvbiBoKGQsZyl7dm9pZCAwPT09ZyYmKGc9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe3BhdGhuYW1lOnQucGF0aG5hbWUsc2VhcmNoOlwiXCIsaGFzaDpcIlwifSxcInN0cmluZ1wiPT09dHlwZW9mIGQ/SihkKTpkLHtzdGF0ZTpnLGtleTpIKCl9KSl9ZnVuY3Rpb24gZShkLGcsYyl7cmV0dXJuIXEubGVuZ3RofHwocS5jYWxsKHthY3Rpb246ZCxsb2NhdGlvbjpnLHJldHJ5OmN9KSwhMSl9ZnVuY3Rpb24geChkLGcpe3U9ZDt0PWc7di5jYWxsKHthY3Rpb246dSxsb2NhdGlvbjp0fSl9ZnVuY3Rpb24geihkLGcpe3ZhciBjPXIuUHVzaCxhPWgoZCxnKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT10LnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeS5wdXNoKFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTpcbnZvaWQgMDtlKGMsYSxmdW5jdGlvbigpe3ooZCxnKX0pJiYobSs9MSxwLnNwbGljZShtLHAubGVuZ3RoLGEpLHgoYyxhKSl9ZnVuY3Rpb24gQShkLGcpe3ZhciBjPXIuUmVwbGFjZSxhPWgoZCxnKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT10LnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeS5yZXBsYWNlKFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTp2b2lkIDA7ZShjLGEsZnVuY3Rpb24oKXtBKGQsZyl9KSYmKHBbbV09YSx4KGMsYSkpfWZ1bmN0aW9uIHkoZCl7dmFyIGc9TWF0aC5taW4oTWF0aC5tYXgobStkLDApLHAubGVuZ3RoLTEpLGM9ci5Qb3AsYT1wW2ddO2UoYyxhLGZ1bmN0aW9uKCl7eShkKX0pJiYobT1nLHgoYyxhKSl9dm9pZCAwPT09YiYmKGI9e30pO3ZhciB3PWI7Yj13LmluaXRpYWxFbnRyaWVzO3c9dy5pbml0aWFsSW5kZXg7dmFyIHA9KHZvaWQgMD09PVxuYj9bXCIvXCJdOmIpLm1hcChmdW5jdGlvbihkKXt2YXIgZz1DKF9leHRlbmRzKHtwYXRobmFtZTpcIi9cIixzZWFyY2g6XCJcIixoYXNoOlwiXCIsc3RhdGU6bnVsbCxrZXk6SCgpfSxcInN0cmluZ1wiPT09dHlwZW9mIGQ/SihkKTpkKSk7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKFwiL1wiPT09Zy5wYXRobmFtZS5jaGFyQXQoMCksXCJSZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gY3JlYXRlTWVtb3J5SGlzdG9yeSh7IGluaXRpYWxFbnRyaWVzIH0pIChpbnZhbGlkIGVudHJ5OiBcIitKU09OLnN0cmluZ2lmeShkKStcIilcIik6dm9pZCAwO3JldHVybiBnfSksbT1NYXRoLm1pbihNYXRoLm1heChudWxsPT13P3AubGVuZ3RoLTE6dywwKSxwLmxlbmd0aC0xKSx1PXIuUG9wLHQ9cFttXSx2PUYoKSxxPUYoKTtyZXR1cm57Z2V0IGluZGV4KCl7cmV0dXJuIG19LGdldCBhY3Rpb24oKXtyZXR1cm4gdX0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIHR9LGNyZWF0ZUhyZWY6ZnVuY3Rpb24oZCl7cmV0dXJuXCJzdHJpbmdcIj09PVxudHlwZW9mIGQ/ZDpJKGQpfSxwdXNoOnoscmVwbGFjZTpBLGdvOnksYmFjazpmdW5jdGlvbigpe3koLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7eSgxKX0sbGlzdGVuOmZ1bmN0aW9uKGQpe3JldHVybiB2LnB1c2goZCl9LGJsb2NrOmZ1bmN0aW9uKGQpe3JldHVybiBxLnB1c2goZCl9fX07ZXhwb3J0e3IgYXMgQWN0aW9uLGNyZWF0ZUJyb3dzZXJIaXN0b3J5LGNyZWF0ZUhhc2hIaXN0b3J5LGNyZWF0ZU1lbW9yeUhpc3RvcnksSSBhcyBjcmVhdGVQYXRoLEogYXMgcGFyc2VQYXRofVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvKipcbiAqIFJlYWN0IFJvdXRlciB2Ni4yLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCBjcmVhdGVFbGVtZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCBDaGlsZHJlbiwgaXNWYWxpZEVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSwgQWN0aW9uLCBwYXJzZVBhdGggfSBmcm9tICdoaXN0b3J5JztcblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kKSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IFJvdXRlciFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBtZXNzYWdlKSA6IHZvaWQgMDtcbiAgfVxufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT05URVhUXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQSBOYXZpZ2F0b3IgaXMgYSBcImxvY2F0aW9uIGNoYW5nZXJcIjsgaXQncyBob3cgeW91IGdldCB0byBkaWZmZXJlbnQgbG9jYXRpb25zLlxuICpcbiAqIEV2ZXJ5IGhpc3RvcnkgaW5zdGFuY2UgY29uZm9ybXMgdG8gdGhlIE5hdmlnYXRvciBpbnRlcmZhY2UsIGJ1dCB0aGVcbiAqIGRpc3RpbmN0aW9uIGlzIHVzZWZ1bCBwcmltYXJpbHkgd2hlbiBpdCBjb21lcyB0byB0aGUgbG93LWxldmVsIDxSb3V0ZXI+IEFQSVxuICogd2hlcmUgYm90aCB0aGUgbG9jYXRpb24gYW5kIGEgbmF2aWdhdG9yIG11c3QgYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBpbiBvcmRlclxuICogdG8gYXZvaWQgXCJ0ZWFyaW5nXCIgdGhhdCBtYXkgb2NjdXIgaW4gYSBzdXNwZW5zZS1lbmFibGVkIGFwcCBpZiB0aGUgYWN0aW9uXG4gKiBhbmQvb3IgbG9jYXRpb24gd2VyZSB0byBiZSByZWFkIGRpcmVjdGx5IGZyb20gdGhlIGhpc3RvcnkgaW5zdGFuY2UuXG4gKi9cblxuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdmlnYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJOYXZpZ2F0aW9uXCI7XG59XG5cbmNvbnN0IExvY2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExvY2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTG9jYXRpb25cIjtcbn1cblxuY29uc3QgUm91dGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoe1xuICBvdXRsZXQ6IG51bGwsXG4gIG1hdGNoZXM6IFtdXG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJvdXRlXCI7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjbWVtb3J5cm91dGVyXG4gKi9cbmZ1bmN0aW9uIE1lbW9yeVJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgaW5pdGlhbEVudHJpZXMsXG4gICAgaW5pdGlhbEluZGV4XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IHVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogTm90ZTogVGhpcyBBUEkgaXMgbW9zdGx5IHVzZWZ1bCBpbiBSZWFjdC5Db21wb25lbnQgc3ViY2xhc3NlcyB0aGF0IGFyZSBub3RcbiAqIGFibGUgdG8gdXNlIGhvb2tzLiBJbiBmdW5jdGlvbmFsIGNvbXBvbmVudHMsIHdlIHJlY29tbWVuZCB5b3UgdXNlIHRoZVxuICogYHVzZU5hdmlnYXRlYCBob29rIGluc3RlYWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNuYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiBOYXZpZ2F0ZShfcmVmMikge1xuICBsZXQge1xuICAgIHRvLFxuICAgIHJlcGxhY2UsXG4gICAgc3RhdGVcbiAgfSA9IF9yZWYyO1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mXG4gIC8vIHRoZSByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwiPE5hdmlnYXRlPiBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpLnN0YXRpYywgXCI8TmF2aWdhdGU+IG11c3Qgbm90IGJlIHVzZWQgb24gdGhlIGluaXRpYWwgcmVuZGVyIGluIGEgPFN0YXRpY1JvdXRlcj4uIFwiICsgXCJUaGlzIGlzIGEgbm8tb3AsIGJ1dCB5b3Ugc2hvdWxkIG1vZGlmeSB5b3VyIGNvZGUgc28gdGhlIDxOYXZpZ2F0ZT4gaXMgXCIgKyBcIm9ubHkgZXZlciByZW5kZXJlZCBpbiByZXNwb25zZSB0byBzb21lIHVzZXIgaW50ZXJhY3Rpb24gb3Igc3RhdGUgY2hhbmdlLlwiKSA6IHZvaWQgMDtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0ZSh0bywge1xuICAgICAgcmVwbGFjZSxcbiAgICAgIHN0YXRlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI291dGxldFxuICovXG5mdW5jdGlvbiBPdXRsZXQocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU91dGxldChwcm9wcy5jb250ZXh0KTtcbn1cblxuLyoqXG4gKiBEZWNsYXJlcyBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IGEgY2VydGFpbiBVUkwgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3JvdXRlXG4gKi9cbmZ1bmN0aW9uIFJvdXRlKF9wcm9wcykge1xuICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkEgPFJvdXRlPiBpcyBvbmx5IGV2ZXIgdG8gYmUgdXNlZCBhcyB0aGUgY2hpbGQgb2YgPFJvdXRlcz4gZWxlbWVudCwgXCIgKyBcIm5ldmVyIHJlbmRlcmVkIGRpcmVjdGx5LiBQbGVhc2Ugd3JhcCB5b3VyIDxSb3V0ZT4gaW4gYSA8Um91dGVzPi5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBsb2NhdGlvbiBjb250ZXh0IGZvciB0aGUgcmVzdCBvZiB0aGUgYXBwLlxuICpcbiAqIE5vdGU6IFlvdSB1c3VhbGx5IHdvbid0IHJlbmRlciBhIDxSb3V0ZXI+IGRpcmVjdGx5LiBJbnN0ZWFkLCB5b3UnbGwgcmVuZGVyIGFcbiAqIHJvdXRlciB0aGF0IGlzIG1vcmUgc3BlY2lmaWMgdG8geW91ciBlbnZpcm9ubWVudCBzdWNoIGFzIGEgPEJyb3dzZXJSb3V0ZXI+XG4gKiBpbiB3ZWIgYnJvd3NlcnMgb3IgYSA8U3RhdGljUm91dGVyPiBmb3Igc2VydmVyIHJlbmRlcmluZy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3JvdXRlclxuICovXG5mdW5jdGlvbiBSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWVQcm9wID0gXCIvXCIsXG4gICAgY2hpbGRyZW4gPSBudWxsLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblByb3AsXG4gICAgbmF2aWdhdGlvblR5cGUgPSBBY3Rpb24uUG9wLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3AgPSBmYWxzZVxuICB9ID0gX3JlZjM7XG4gICEhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCByZW5kZXIgYSA8Um91dGVyPiBpbnNpZGUgYW5vdGhlciA8Um91dGVyPi5cIiArIFwiIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBiYXNlbmFtZSA9IG5vcm1hbGl6ZVBhdGhuYW1lKGJhc2VuYW1lUHJvcCk7XG4gIGxldCBuYXZpZ2F0aW9uQ29udGV4dCA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBzdGF0aWNQcm9wXG4gIH0pLCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgc3RhdGljUHJvcF0pO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb25Qcm9wID09PSBcInN0cmluZ1wiKSB7XG4gICAgbG9jYXRpb25Qcm9wID0gcGFyc2VQYXRoKGxvY2F0aW9uUHJvcCk7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lID0gXCIvXCIsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIixcbiAgICBzdGF0ZSA9IG51bGwsXG4gICAga2V5ID0gXCJkZWZhdWx0XCJcbiAgfSA9IGxvY2F0aW9uUHJvcDtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICBpZiAodHJhaWxpbmdQYXRobmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF0aG5hbWU6IHRyYWlsaW5nUGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoLFxuICAgICAgc3RhdGUsXG4gICAgICBrZXlcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXldKTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhsb2NhdGlvbiAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG5hdmlnYXRpb25Db250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB2YWx1ZToge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBuYXZpZ2F0aW9uVHlwZVxuICAgIH1cbiAgfSkpO1xufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIG5lc3RlZCB0cmVlIG9mIDxSb3V0ZT4gZWxlbWVudHMgdGhhdCByZW5kZXJzIHRoZSBicmFuY2hcbiAqIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcm91dGVzXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcyhfcmVmNCkge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uXG4gIH0gPSBfcmVmNDtcbiAgcmV0dXJuIHVzZVJvdXRlcyhjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pLCBsb2NhdGlvbik7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEhPT0tTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVsbCBocmVmIGZvciB0aGUgZ2l2ZW4gXCJ0b1wiIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYnVpbGRpbmdcbiAqIGN1c3RvbSBsaW5rcyB0aGF0IGFyZSBhbHNvIGFjY2Vzc2libGUgYW5kIHByZXNlcnZlIHJpZ2h0LWNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlaHJlZlxuICovXG5cbmZ1bmN0aW9uIHVzZUhyZWYodG8pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSB1c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBoYXNoLFxuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFxuICB9ID0gdXNlUmVzb2x2ZWRQYXRoKHRvKTtcbiAgbGV0IGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWU7XG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIGxldCB0b1BhdGhuYW1lID0gZ2V0VG9QYXRobmFtZSh0byk7XG4gICAgbGV0IGVuZHNXaXRoU2xhc2ggPSB0b1BhdGhuYW1lICE9IG51bGwgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7XG4gICAgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSArIChlbmRzV2l0aFNsYXNoID8gXCIvXCIgOiBcIlwiKSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLmNyZWF0ZUhyZWYoe1xuICAgIHBhdGhuYW1lOiBqb2luZWRQYXRobmFtZSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaFxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBhIDxSb3V0ZXI+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlaW5yb3V0ZXJjb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlSW5Sb3V0ZXJDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9jYXRpb24gb2JqZWN0LCB3aGljaCByZXByZXNlbnRzIHRoZSBjdXJyZW50IFVSTCBpbiB3ZWJcbiAqIGJyb3dzZXJzLlxuICpcbiAqIE5vdGU6IElmIHlvdSdyZSB1c2luZyB0aGlzIGl0IG1heSBtZWFuIHlvdSdyZSBkb2luZyBzb21lIG9mIHlvdXIgb3duXG4gKiBcInJvdXRpbmdcIiBpbiB5b3VyIGFwcCwgYW5kIHdlJ2QgbGlrZSB0byBrbm93IHdoYXQgeW91ciB1c2UgY2FzZSBpcy4gV2UgbWF5XG4gKiBiZSBhYmxlIHRvIHByb3ZpZGUgc29tZXRoaW5nIGhpZ2hlci1sZXZlbCB0byBiZXR0ZXIgc3VpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlbG9jYXRpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUxvY2F0aW9uKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gdXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VuYXZpZ2F0aW9udHlwZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uVHlwZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KS5uYXZpZ2F0aW9uVHlwZTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBVUkwgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUgbWF0Y2hlcyB0aGUgY3VycmVudCBVUkwuXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY29tcG9uZW50cyB0aGF0IG5lZWQgdG8ga25vdyBcImFjdGl2ZVwiIHN0YXRlLCBlLmcuXG4gKiA8TmF2TGluaz4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VtYXRjaFxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoKHBhdHRlcm4pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIHBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpLCBbcGF0aG5hbWUsIHBhdHRlcm5dKTtcbn1cbi8qKlxuICogVGhlIGludGVyZmFjZSBmb3IgdGhlIG5hdmlnYXRlKCkgZnVuY3Rpb24gcmV0dXJuZWQgZnJvbSB1c2VOYXZpZ2F0ZSgpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBpbXBlcmF0aXZlIG1ldGhvZCBmb3IgY2hhbmdpbmcgdGhlIGxvY2F0aW9uLiBVc2VkIGJ5IDxMaW5rPnMsIGJ1dFxuICogbWF5IGFsc28gYmUgdXNlZCBieSBvdGhlciBlbGVtZW50cyB0byBjaGFuZ2UgdGhlIGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VOYXZpZ2F0ZSgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IHVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KG1hdGNoZXMubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICBsZXQgYWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhhY3RpdmVSZWYuY3VycmVudCwgXCJZb3Ugc2hvdWxkIGNhbGwgbmF2aWdhdGUoKSBpbiBhIFJlYWN0LnVzZUVmZmVjdCgpLCBub3Qgd2hlbiBcIiArIFwieW91ciBjb21wb25lbnQgaXMgZmlyc3QgcmVuZGVyZWQuXCIpIDogdm9pZCAwO1xuICAgIGlmICghYWN0aXZlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIG5hdmlnYXRvci5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSk7XG5cbiAgICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgICBwYXRoLnBhdGhuYW1lID0gam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICAgIH1cblxuICAgICghIW9wdGlvbnMucmVwbGFjZSA/IG5hdmlnYXRvci5yZXBsYWNlIDogbmF2aWdhdG9yLnB1c2gpKHBhdGgsIG9wdGlvbnMuc3RhdGUpO1xuICB9LCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lXSk7XG4gIHJldHVybiBuYXZpZ2F0ZTtcbn1cbmNvbnN0IE91dGxldENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxuICogUmV0dXJucyB0aGUgY29udGV4dCAoaWYgcHJvdmlkZWQpIGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS5cbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlb3V0bGV0Y29udGV4dFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldENvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KE91dGxldENvbnRleHQpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS4gVXNlZCBpbnRlcm5hbGx5IGJ5IDxPdXRsZXQ+IHRvIHJlbmRlciBjaGlsZCByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VvdXRsZXRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXQoY29udGV4dCkge1xuICBsZXQgb3V0bGV0ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpLm91dGxldDtcblxuICBpZiAob3V0bGV0KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE91dGxldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb250ZXh0XG4gICAgfSwgb3V0bGV0KTtcbiAgfVxuXG4gIHJldHVybiBvdXRsZXQ7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyBvZiB0aGUgZHluYW1pYyBwYXJhbXMgZnJvbSB0aGUgY3VycmVudFxuICogVVJMIHRoYXQgd2VyZSBtYXRjaGVkIGJ5IHRoZSByb3V0ZSBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlcGFyYW1zXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhdGhuYW1lIG9mIHRoZSBnaXZlbiBgdG9gIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VyZXNvbHZlZHBhdGhcbiAqL1xuXG5mdW5jdGlvbiB1c2VSZXNvbHZlZFBhdGgodG8pIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShtYXRjaGVzLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUpLCBbdG8sIHJvdXRlUGF0aG5hbWVzSnNvbiwgbG9jYXRpb25QYXRobmFtZV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9mIHRoZSByb3V0ZSB0aGF0IG1hdGNoZWQgdGhlIGN1cnJlbnQgbG9jYXRpb24sIHByZXBhcmVkXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHQgdG8gcmVuZGVyIHRoZSByZW1haW5kZXIgb2YgdGhlIHJvdXRlIHRyZWUuIFJvdXRlXG4gKiBlbGVtZW50cyBpbiB0aGUgdHJlZSBtdXN0IHJlbmRlciBhbiA8T3V0bGV0PiB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZXJvdXRlc1xuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VSb3V0ZXMoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgbWF0Y2hlczogcGFyZW50TWF0Y2hlc1xuICB9ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IHBhcmVudE1hdGNoZXNbcGFyZW50TWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgbGV0IHBhcmVudFBhcmFtcyA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xuICBsZXQgcGFyZW50UGF0aG5hbWUgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50UGF0aG5hbWVCYXNlID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWVCYXNlIDogXCIvXCI7XG4gIGxldCBwYXJlbnRSb3V0ZSA9IHJvdXRlTWF0Y2ggJiYgcm91dGVNYXRjaC5yb3V0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gWW91IHdvbid0IGdldCBhIHdhcm5pbmcgYWJvdXQgMiBkaWZmZXJlbnQgPFJvdXRlcz4gdW5kZXIgYSA8Um91dGU+XG4gICAgLy8gd2l0aG91dCBhIHRyYWlsaW5nICosIGJ1dCB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgd2FybmluZyBhbnl3YXkgc2luY2Ugd2VcbiAgICAvLyBjYW5ub3QgZXZlbiBnaXZlIHRoZSB3YXJuaW5nIHVubGVzcyB0aGV5IGxhbmQgYXQgdGhlIHBhcmVudCByb3V0ZS5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyA8Um91dGVzPlxuICAgIC8vICAgey8qIFRoaXMgcm91dGUgcGF0aCBNVVNUIGVuZCB3aXRoIC8qIGJlY2F1c2Ugb3RoZXJ3aXNlXG4gICAgLy8gICAgICAgaXQgd2lsbCBuZXZlciBtYXRjaCAvYmxvZy9wb3N0LzEyMyAqL31cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZ1wiIGVsZW1lbnQ9ezxCbG9nIC8+fSAvPlxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nL2ZlZWRcIiBlbGVtZW50PXs8QmxvZ0ZlZWQgLz59IC8+XG4gICAgLy8gPC9Sb3V0ZXM+XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBCbG9nKCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPFJvdXRlcz5cbiAgICAvLyAgICAgICA8Um91dGUgcGF0aD1cInBvc3QvOmlkXCIgZWxlbWVudD17PFBvc3QgLz59IC8+XG4gICAgLy8gICAgIDwvUm91dGVzPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gICAgbGV0IHBhcmVudFBhdGggPSBwYXJlbnRSb3V0ZSAmJiBwYXJlbnRSb3V0ZS5wYXRoIHx8IFwiXCI7XG4gICAgd2FybmluZ09uY2UocGFyZW50UGF0aG5hbWUsICFwYXJlbnRSb3V0ZSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSwgXCJZb3UgcmVuZGVyZWQgZGVzY2VuZGFudCA8Um91dGVzPiAob3IgY2FsbGVkIGB1c2VSb3V0ZXMoKWApIGF0IFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aG5hbWUgKyBcIlxcXCIgKHVuZGVyIDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+KSBidXQgdGhlIFwiKSArIFwicGFyZW50IHJvdXRlIHBhdGggaGFzIG5vIHRyYWlsaW5nIFxcXCIqXFxcIi4gVGhpcyBtZWFucyBpZiB5b3UgbmF2aWdhdGUgXCIgKyBcImRlZXBlciwgdGhlIHBhcmVudCB3b24ndCBtYXRjaCBhbnltb3JlIGFuZCB0aGVyZWZvcmUgdGhlIGNoaWxkIFwiICsgXCJyb3V0ZXMgd2lsbCBuZXZlciByZW5kZXIuXFxuXFxuXCIgKyAoXCJQbGVhc2UgY2hhbmdlIHRoZSBwYXJlbnQgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4gdG8gPFJvdXRlIFwiKSArIChcInBhdGg9XFxcIlwiICsgKHBhcmVudFBhdGggPT09IFwiL1wiID8gXCIqXCIgOiBwYXJlbnRQYXRoICsgXCIvKlwiKSArIFwiXFxcIj4uXCIpKTtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbkFyZykge1xuICAgIHZhciBfcGFyc2VkTG9jYXRpb25BcmckcGE7XG5cbiAgICBsZXQgcGFyc2VkTG9jYXRpb25BcmcgPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gICAgIShwYXJlbnRQYXRobmFtZUJhc2UgPT09IFwiL1wiIHx8ICgoX3BhcnNlZExvY2F0aW9uQXJnJHBhID0gcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUpID09IG51bGwgPyB2b2lkIDAgOiBfcGFyc2VkTG9jYXRpb25BcmckcGEuc3RhcnRzV2l0aChwYXJlbnRQYXRobmFtZUJhc2UpKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiV2hlbiBvdmVycmlkaW5nIHRoZSBsb2NhdGlvbiB1c2luZyBgPFJvdXRlcyBsb2NhdGlvbj5gIG9yIGB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbilgLCBcIiArIFwidGhlIGxvY2F0aW9uIHBhdGhuYW1lIG11c3QgYmVnaW4gd2l0aCB0aGUgcG9ydGlvbiBvZiB0aGUgVVJMIHBhdGhuYW1lIHRoYXQgd2FzIFwiICsgKFwibWF0Y2hlZCBieSBhbGwgcGFyZW50IHJvdXRlcy4gVGhlIGN1cnJlbnQgcGF0aG5hbWUgYmFzZSBpcyBcXFwiXCIgKyBwYXJlbnRQYXRobmFtZUJhc2UgKyBcIlxcXCIgXCIpICsgKFwiYnV0IHBhdGhuYW1lIFxcXCJcIiArIHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lICsgXCJcXFwiIHdhcyBnaXZlbiBpbiB0aGUgYGxvY2F0aW9uYCBwcm9wLlwiKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxvY2F0aW9uID0gcGFyc2VkTG9jYXRpb25Bcmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbkZyb21Db250ZXh0O1xuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKHBhcmVudFBhdGhuYW1lQmFzZS5sZW5ndGgpIHx8IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwYXJlbnRSb3V0ZSB8fCBtYXRjaGVzICE9IG51bGwsIFwiTm8gcm91dGVzIG1hdGNoZWQgbG9jYXRpb24gXFxcIlwiICsgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoICsgXCJcXFwiIFwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKG1hdGNoZXMgPT0gbnVsbCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgZG9lcyBub3QgaGF2ZSBhbiBlbGVtZW50LiBcIiArIFwiVGhpcyBtZWFucyBpdCB3aWxsIHJlbmRlciBhbiA8T3V0bGV0IC8+IHdpdGggYSBudWxsIHZhbHVlIGJ5IGRlZmF1bHQgcmVzdWx0aW5nIGluIGFuIFxcXCJlbXB0eVxcXCIgcGFnZS5cIikgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyAmJiBtYXRjaGVzLm1hcChtYXRjaCA9PiBPYmplY3QuYXNzaWduKHt9LCBtYXRjaCwge1xuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50UGFyYW1zLCBtYXRjaC5wYXJhbXMpLFxuICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICBwYXRobmFtZUJhc2U6IG1hdGNoLnBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXJlbnRQYXRobmFtZUJhc2UgOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSlcbiAgfSkpLCBwYXJlbnRNYXRjaGVzKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVVRJTFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcm91dGUgY29uZmlnIGZyb20gYSBSZWFjdCBcImNoaWxkcmVuXCIgb2JqZWN0LCB3aGljaCBpcyB1c3VhbGx5XG4gKiBlaXRoZXIgYSBgPFJvdXRlPmAgZWxlbWVudCBvciBhbiBhcnJheSBvZiB0aGVtLiBVc2VkIGludGVybmFsbHkgYnlcbiAqIGA8Um91dGVzPmAgdG8gY3JlYXRlIGEgcm91dGUgY29uZmlnIGZyb20gaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjY3JlYXRlcm91dGVzZnJvbWNoaWxkcmVuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGxldCByb3V0ZXMgPSBbXTtcbiAgQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZWxlbWVudCA9PiB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL2lzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAvLyBJZ25vcmUgbm9uLWVsZW1lbnRzLiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gbW9yZSBlYXNpbHkgaW5saW5lXG4gICAgICAvLyBjb25kaXRpb25hbHMgaW4gdGhlaXIgcm91dGUgY29uZmlnLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IEZyYWdtZW50KSB7XG4gICAgICAvLyBUcmFuc3BhcmVudGx5IHN1cHBvcnQgUmVhY3QuRnJhZ21lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgIHJvdXRlcy5wdXNoLmFwcGx5KHJvdXRlcywgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIltcIiArICh0eXBlb2YgZWxlbWVudC50eXBlID09PSBcInN0cmluZ1wiID8gZWxlbWVudC50eXBlIDogZWxlbWVudC50eXBlLm5hbWUpICsgXCJdIGlzIG5vdCBhIDxSb3V0ZT4gY29tcG9uZW50LiBBbGwgY29tcG9uZW50IGNoaWxkcmVuIG9mIDxSb3V0ZXM+IG11c3QgYmUgYSA8Um91dGU+IG9yIDxSZWFjdC5GcmFnbWVudD5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxldCByb3V0ZSA9IHtcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIGluZGV4OiBlbGVtZW50LnByb3BzLmluZGV4LFxuICAgICAgcGF0aDogZWxlbWVudC5wcm9wcy5wYXRoXG4gICAgfTtcblxuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByb3V0ZXMucHVzaChyb3V0ZSk7XG4gIH0pO1xuICByZXR1cm4gcm91dGVzO1xufVxuLyoqXG4gKiBUaGUgcGFyYW1ldGVycyB0aGF0IHdlcmUgcGFyc2VkIGZyb20gdGhlIFVSTCBwYXRoLlxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjZ2VuZXJhdGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChwYXRoLCBwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gcGF0aC5yZXBsYWNlKC86KFxcdyspL2csIChfLCBrZXkpID0+IHtcbiAgICAhKHBhcmFtc1trZXldICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIk1pc3NpbmcgXFxcIjpcIiArIGtleSArIFwiXFxcIiBwYXJhbVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIHBhcmFtc1trZXldO1xuICB9KS5yZXBsYWNlKC9cXC8qXFwqJC8sIF8gPT4gcGFyYW1zW1wiKlwiXSA9PSBudWxsID8gXCJcIiA6IHBhcmFtc1tcIipcIl0ucmVwbGFjZSgvXlxcLyovLCBcIi9cIikpO1xufVxuLyoqXG4gKiBBIFJvdXRlTWF0Y2ggY29udGFpbnMgaW5mbyBhYm91dCBob3cgYSByb3V0ZSBtYXRjaGVkIGEgVVJMLlxuICovXG5cbi8qKlxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gcm91dGVzIHRvIGEgbG9jYXRpb24gYW5kIHJldHVybnMgdGhlIG1hdGNoIGRhdGEuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNtYXRjaHJvdXRlc1xuICovXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gIGxldCBwYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCIsIGJhc2VuYW1lKTtcblxuICBpZiAocGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgbWF0Y2hlcyA9PSBudWxsICYmIGkgPCBicmFuY2hlcy5sZW5ndGg7ICsraSkge1xuICAgIG1hdGNoZXMgPSBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaGVzW2ldLCBwYXRobmFtZSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZmxhdHRlblJvdXRlcyhyb3V0ZXMsIGJyYW5jaGVzLCBwYXJlbnRzTWV0YSwgcGFyZW50UGF0aCkge1xuICBpZiAoYnJhbmNoZXMgPT09IHZvaWQgMCkge1xuICAgIGJyYW5jaGVzID0gW107XG4gIH1cblxuICBpZiAocGFyZW50c01ldGEgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudHNNZXRhID0gW107XG4gIH1cblxuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFwiXCI7XG4gIH1cblxuICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgbGV0IG1ldGEgPSB7XG4gICAgICByZWxhdGl2ZVBhdGg6IHJvdXRlLnBhdGggfHwgXCJcIixcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09IHRydWUsXG4gICAgICBjaGlsZHJlbkluZGV4OiBpbmRleCxcbiAgICAgIHJvdXRlXG4gICAgfTtcblxuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgIW1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgocGFyZW50UGF0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiQWJzb2x1dGUgcm91dGUgcGF0aCBcXFwiXCIgKyBtZXRhLnJlbGF0aXZlUGF0aCArIFwiXFxcIiBuZXN0ZWQgdW5kZXIgcGF0aCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIFwiKSArIFwibXVzdCBzdGFydCB3aXRoIHRoZSBjb21iaW5lZCBwYXRoIG9mIGFsbCBpdHMgcGFyZW50IHJvdXRlcy5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgbWV0YS5yZWxhdGl2ZVBhdGggPSBtZXRhLnJlbGF0aXZlUGF0aC5zbGljZShwYXJlbnRQYXRoLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSBqb2luUGF0aHMoW3BhcmVudFBhdGgsIG1ldGEucmVsYXRpdmVQYXRoXSk7XG4gICAgbGV0IHJvdXRlc01ldGEgPSBwYXJlbnRzTWV0YS5jb25jYXQobWV0YSk7IC8vIEFkZCB0aGUgY2hpbGRyZW4gYmVmb3JlIGFkZGluZyB0aGlzIHJvdXRlIHRvIHRoZSBhcnJheSBzbyB3ZSB0cmF2ZXJzZSB0aGVcbiAgICAvLyByb3V0ZSB0cmVlIGRlcHRoLWZpcnN0IGFuZCBjaGlsZCByb3V0ZXMgYXBwZWFyIGJlZm9yZSB0aGVpciBwYXJlbnRzIGluXG4gICAgLy8gdGhlIFwiZmxhdHRlbmVkXCIgdmVyc2lvbi5cblxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAhKHJvdXRlLmluZGV4ICE9PSB0cnVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJJbmRleCByb3V0ZXMgbXVzdCBub3QgaGF2ZSBjaGlsZCByb3V0ZXMuIFBsZWFzZSByZW1vdmUgXCIgKyAoXCJhbGwgY2hpbGQgcm91dGVzIGZyb20gcm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiLlwiKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgZmxhdHRlblJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgYnJhbmNoZXMsIHJvdXRlc01ldGEsIHBhdGgpO1xuICAgIH0gLy8gUm91dGVzIHdpdGhvdXQgYSBwYXRoIHNob3VsZG4ndCBldmVyIG1hdGNoIGJ5IHRoZW1zZWx2ZXMgdW5sZXNzIHRoZXkgYXJlXG4gICAgLy8gaW5kZXggcm91dGVzLCBzbyBkb24ndCBhZGQgdGhlbSB0byB0aGUgbGlzdCBvZiBwb3NzaWJsZSBicmFuY2hlcy5cblxuXG4gICAgaWYgKHJvdXRlLnBhdGggPT0gbnVsbCAmJiAhcm91dGUuaW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBicmFuY2hlcy5wdXNoKHtcbiAgICAgIHBhdGgsXG4gICAgICBzY29yZTogY29tcHV0ZVNjb3JlKHBhdGgsIHJvdXRlLmluZGV4KSxcbiAgICAgIHJvdXRlc01ldGFcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBicmFuY2hlcztcbn1cblxuZnVuY3Rpb24gcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpIHtcbiAgYnJhbmNoZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAhPT0gYi5zY29yZSA/IGIuc2NvcmUgLSBhLnNjb3JlIC8vIEhpZ2hlciBzY29yZSBmaXJzdFxuICA6IGNvbXBhcmVJbmRleGVzKGEucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpLCBiLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSkpO1xufVxuXG5jb25zdCBwYXJhbVJlID0gL146XFx3KyQvO1xuY29uc3QgZHluYW1pY1NlZ21lbnRWYWx1ZSA9IDM7XG5jb25zdCBpbmRleFJvdXRlVmFsdWUgPSAyO1xuY29uc3QgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xuY29uc3Qgc3RhdGljU2VnbWVudFZhbHVlID0gMTA7XG5jb25zdCBzcGxhdFBlbmFsdHkgPSAtMjtcblxuY29uc3QgaXNTcGxhdCA9IHMgPT4gcyA9PT0gXCIqXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShwYXRoLCBpbmRleCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgbGV0IGluaXRpYWxTY29yZSA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICBpZiAoc2VnbWVudHMuc29tZShpc1NwbGF0KSkge1xuICAgIGluaXRpYWxTY29yZSArPSBzcGxhdFBlbmFsdHk7XG4gIH1cblxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzLmZpbHRlcihzID0+ICFpc1NwbGF0KHMpKS5yZWR1Y2UoKHNjb3JlLCBzZWdtZW50KSA9PiBzY29yZSArIChwYXJhbVJlLnRlc3Qoc2VnbWVudCkgPyBkeW5hbWljU2VnbWVudFZhbHVlIDogc2VnbWVudCA9PT0gXCJcIiA/IGVtcHR5U2VnbWVudFZhbHVlIDogc3RhdGljU2VnbWVudFZhbHVlKSwgaW5pdGlhbFNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUluZGV4ZXMoYSwgYikge1xuICBsZXQgc2libGluZ3MgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5zbGljZSgwLCAtMSkuZXZlcnkoKG4sIGkpID0+IG4gPT09IGJbaV0pO1xuICByZXR1cm4gc2libGluZ3MgPyAvLyBJZiB0d28gcm91dGVzIGFyZSBzaWJsaW5ncywgd2Ugc2hvdWxkIHRyeSB0byBtYXRjaCB0aGUgZWFybGllciBzaWJsaW5nXG4gIC8vIGZpcnN0LiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gaGF2ZSBmaW5lLWdyYWluZWQgY29udHJvbCBvdmVyIHRoZSBtYXRjaGluZ1xuICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgLy8gd2FudCB0aGVtIHRyaWVkLlxuICBhW2EubGVuZ3RoIC0gMV0gLSBiW2IubGVuZ3RoIC0gMV0gOiAvLyBPdGhlcndpc2UsIGl0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgdG8gcmFuayBub24tc2libGluZ3MgYnkgaW5kZXgsXG4gIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAwO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaCwgcGF0aG5hbWUpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXNNZXRhXG4gIH0gPSBicmFuY2g7XG4gIGxldCBtYXRjaGVkUGFyYW1zID0ge307XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBcIi9cIjtcbiAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlc01ldGEubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbWV0YSA9IHJvdXRlc01ldGFbaV07XG4gICAgbGV0IGVuZCA9IGkgPT09IHJvdXRlc01ldGEubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkUGF0aG5hbWUgPT09IFwiL1wiID8gcGF0aG5hbWUgOiBwYXRobmFtZS5zbGljZShtYXRjaGVkUGF0aG5hbWUubGVuZ3RoKSB8fCBcIi9cIjtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbmRcbiAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gICAgT2JqZWN0LmFzc2lnbihtYXRjaGVkUGFyYW1zLCBtYXRjaC5wYXJhbXMpO1xuICAgIGxldCByb3V0ZSA9IG1ldGEucm91dGU7XG4gICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgIHBhcmFtczogbWF0Y2hlZFBhcmFtcyxcbiAgICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICAgIHBhdGhuYW1lQmFzZTogam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lQmFzZV0pLFxuICAgICAgcm91dGVcbiAgICB9KTtcblxuICAgIGlmIChtYXRjaC5wYXRobmFtZUJhc2UgIT09IFwiL1wiKSB7XG4gICAgICBtYXRjaGVkUGF0aG5hbWUgPSBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG4vKipcbiAqIFJlbmRlcnMgdGhlIHJlc3VsdCBvZiBgbWF0Y2hSb3V0ZXMoKWAgaW50byBhIFJlYWN0IGVsZW1lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzKSB7XG4gIGlmIChwYXJlbnRNYXRjaGVzID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRNYXRjaGVzID0gW107XG4gIH1cblxuICBpZiAobWF0Y2hlcyA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIG1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgY2hpbGRyZW46IG1hdGNoLnJvdXRlLmVsZW1lbnQgIT09IHVuZGVmaW5lZCA/IG1hdGNoLnJvdXRlLmVsZW1lbnQgOiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChPdXRsZXQsIG51bGwpLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb3V0bGV0LFxuICAgICAgICBtYXRjaGVzOiBwYXJlbnRNYXRjaGVzLmNvbmNhdChtYXRjaGVzLnNsaWNlKDAsIGluZGV4ICsgMSkpXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIG51bGwpO1xufVxuLyoqXG4gKiBBIFBhdGhQYXR0ZXJuIGlzIHVzZWQgdG8gbWF0Y2ggb24gc29tZSBwb3J0aW9uIG9mIGEgVVJMIHBhdGhuYW1lLlxuICovXG5cblxuLyoqXG4gKiBQZXJmb3JtcyBwYXR0ZXJuIG1hdGNoaW5nIG9uIGEgVVJMIHBhdGhuYW1lIGFuZCByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0XG4gKiB0aGUgbWF0Y2guXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNtYXRjaHBhdGhcbiAqL1xuZnVuY3Rpb24gbWF0Y2hQYXRoKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHBhdHRlcm4gPSB7XG4gICAgICBwYXRoOiBwYXR0ZXJuLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICBlbmQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgbGV0IFttYXRjaGVyLCBwYXJhbU5hbWVzXSA9IGNvbXBpbGVQYXRoKHBhdHRlcm4ucGF0aCwgcGF0dGVybi5jYXNlU2Vuc2l0aXZlLCBwYXR0ZXJuLmVuZCk7XG4gIGxldCBtYXRjaCA9IHBhdGhuYW1lLm1hdGNoKG1hdGNoZXIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IG1hdGNoWzBdO1xuICBsZXQgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnJlcGxhY2UoLyguKVxcLyskLywgXCIkMVwiKTtcbiAgbGV0IGNhcHR1cmVHcm91cHMgPSBtYXRjaC5zbGljZSgxKTtcbiAgbGV0IHBhcmFtcyA9IHBhcmFtTmFtZXMucmVkdWNlKChtZW1vLCBwYXJhbU5hbWUsIGluZGV4KSA9PiB7XG4gICAgLy8gV2UgbmVlZCB0byBjb21wdXRlIHRoZSBwYXRobmFtZUJhc2UgaGVyZSB1c2luZyB0aGUgcmF3IHNwbGF0IHZhbHVlXG4gICAgLy8gaW5zdGVhZCBvZiB1c2luZyBwYXJhbXNbXCIqXCJdIGxhdGVyIGJlY2F1c2UgaXQgd2lsbCBiZSBkZWNvZGVkIHRoZW5cbiAgICBpZiAocGFyYW1OYW1lID09PSBcIipcIikge1xuICAgICAgbGV0IHNwbGF0VmFsdWUgPSBjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiO1xuICAgICAgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnNsaWNlKDAsIG1hdGNoZWRQYXRobmFtZS5sZW5ndGggLSBzcGxhdFZhbHVlLmxlbmd0aCkucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICAgIH1cblxuICAgIG1lbW9bcGFyYW1OYW1lXSA9IHNhZmVseURlY29kZVVSSUNvbXBvbmVudChjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiLCBwYXJhbU5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xuICB9LCB7fSk7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHBhdGhuYW1lOiBtYXRjaGVkUGF0aG5hbWUsXG4gICAgcGF0aG5hbWVCYXNlLFxuICAgIHBhdHRlcm5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVBhdGgocGF0aCwgY2FzZVNlbnNpdGl2ZSwgZW5kKSB7XG4gIGlmIChjYXNlU2Vuc2l0aXZlID09PSB2b2lkIDApIHtcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoZW5kID09PSB2b2lkIDApIHtcbiAgICBlbmQgPSB0cnVlO1xuICB9XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwYXRoID09PSBcIipcIiB8fCAhcGF0aC5lbmRzV2l0aChcIipcIikgfHwgcGF0aC5lbmRzV2l0aChcIi8qXCIpLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSkgOiB2b2lkIDA7XG4gIGxldCBwYXJhbU5hbWVzID0gW107XG4gIGxldCByZWdleHBTb3VyY2UgPSBcIl5cIiArIHBhdGgucmVwbGFjZSgvXFwvKlxcKj8kLywgXCJcIikgLy8gSWdub3JlIHRyYWlsaW5nIC8gYW5kIC8qLCB3ZSdsbCBoYW5kbGUgaXQgYmVsb3dcbiAgLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpIC8vIE1ha2Ugc3VyZSBpdCBoYXMgYSBsZWFkaW5nIC9cbiAgLnJlcGxhY2UoL1tcXFxcLiorXiQ/e318KClbXFxdXS9nLCBcIlxcXFwkJlwiKSAvLyBFc2NhcGUgc3BlY2lhbCByZWdleCBjaGFyc1xuICAucmVwbGFjZSgvOihcXHcrKS9nLCAoXywgcGFyYW1OYW1lKSA9PiB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIFwiKFteXFxcXC9dKylcIjtcbiAgfSk7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpKSB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKFwiKlwiKTtcbiAgICByZWdleHBTb3VyY2UgKz0gcGF0aCA9PT0gXCIqXCIgfHwgcGF0aCA9PT0gXCIvKlwiID8gXCIoLiopJFwiIC8vIEFscmVhZHkgbWF0Y2hlZCB0aGUgaW5pdGlhbCAvLCBqdXN0IG1hdGNoIHRoZSByZXN0XG4gICAgOiBcIig/OlxcXFwvKC4rKXxcXFxcLyopJFwiOyAvLyBEb24ndCBpbmNsdWRlIHRoZSAvIGluIHBhcmFtc1tcIipcIl1cbiAgfSBlbHNlIHtcbiAgICByZWdleHBTb3VyY2UgKz0gZW5kID8gXCJcXFxcLyokXCIgLy8gV2hlbiBtYXRjaGluZyB0byB0aGUgZW5kLCBpZ25vcmUgdHJhaWxpbmcgc2xhc2hlc1xuICAgIDogLy8gT3RoZXJ3aXNlLCBtYXRjaCBhIHdvcmQgYm91bmRhcnkgb3IgYSBwcm9jZWVkaW5nIC8uIFRoZSB3b3JkIGJvdW5kYXJ5IHJlc3RyaWN0c1xuICAgIC8vIHBhcmVudCByb3V0ZXMgdG8gbWF0Y2hpbmcgb25seSB0aGVpciBvd24gd29yZHMgYW5kIG5vdGhpbmcgbW9yZSwgZS5nLiBwYXJlbnRcbiAgICAvLyByb3V0ZSBcIi9ob21lXCIgc2hvdWxkIG5vdCBtYXRjaCBcIi9ob21lMlwiLlxuICAgIFwiKD86XFxcXGJ8XFxcXC98JClcIjtcbiAgfVxuXG4gIGxldCBtYXRjaGVyID0gbmV3IFJlZ0V4cChyZWdleHBTb3VyY2UsIGNhc2VTZW5zaXRpdmUgPyB1bmRlZmluZWQgOiBcImlcIik7XG4gIHJldHVybiBbbWF0Y2hlciwgcGFyYW1OYW1lc107XG59XG5cbmZ1bmN0aW9uIHNhZmVseURlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSwgcGFyYW1OYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJUaGUgdmFsdWUgZm9yIHRoZSBVUkwgcGFyYW0gXFxcIlwiICsgcGFyYW1OYW1lICsgXCJcXFwiIHdpbGwgbm90IGJlIGRlY29kZWQgYmVjYXVzZVwiICsgKFwiIHRoZSBzdHJpbmcgXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgaXMgYSBtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHlcIikgKyAoXCIgZHVlIHRvIGEgYmFkIHBlcmNlbnQgZW5jb2RpbmcgKFwiICsgZXJyb3IgKyBcIikuXCIpKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyBhIHJlc29sdmVkIHBhdGggb2JqZWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBwYXRobmFtZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3Jlc29sdmVwYXRoXG4gKi9cblxuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCh0bywgZnJvbVBhdGhuYW1lKSB7XG4gIGlmIChmcm9tUGF0aG5hbWUgPT09IHZvaWQgMCkge1xuICAgIGZyb21QYXRobmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZTogdG9QYXRobmFtZSxcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gIGxldCBwYXRobmFtZSA9IHRvUGF0aG5hbWUgPyB0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvXCIpID8gdG9QYXRobmFtZSA6IHJlc29sdmVQYXRobmFtZSh0b1BhdGhuYW1lLCBmcm9tUGF0aG5hbWUpIDogZnJvbVBhdGhuYW1lO1xuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaDogbm9ybWFsaXplU2VhcmNoKHNlYXJjaCksXG4gICAgaGFzaDogbm9ybWFsaXplSGFzaChoYXNoKVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUocmVsYXRpdmVQYXRoLCBmcm9tUGF0aG5hbWUpIHtcbiAgbGV0IHNlZ21lbnRzID0gZnJvbVBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICBsZXQgcmVsYXRpdmVTZWdtZW50cyA9IHJlbGF0aXZlUGF0aC5zcGxpdChcIi9cIik7XG4gIHJlbGF0aXZlU2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICBpZiAoc2VnbWVudCA9PT0gXCIuLlwiKSB7XG4gICAgICAvLyBLZWVwIHRoZSByb290IFwiXCIgc2VnbWVudCBzbyB0aGUgcGF0aG5hbWUgc3RhcnRzIGF0IC9cbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSBzZWdtZW50cy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09IFwiLlwiKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWdtZW50cy5sZW5ndGggPiAxID8gc2VnbWVudHMuam9pbihcIi9cIikgOiBcIi9cIjtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvKHRvQXJnLCByb3V0ZVBhdGhuYW1lcywgbG9jYXRpb25QYXRobmFtZSkge1xuICBsZXQgdG8gPSB0eXBlb2YgdG9BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG9BcmcpIDogdG9Bcmc7XG4gIGxldCB0b1BhdGhuYW1lID0gdG9BcmcgPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHRvLnBhdGhuYW1lOyAvLyBJZiBhIHBhdGhuYW1lIGlzIGV4cGxpY2l0bHkgcHJvdmlkZWQgaW4gYHRvYCwgaXQgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAvLyByb3V0ZSBjb250ZXh0LiBUaGlzIGlzIGV4cGxhaW5lZCBpbiBgTm90ZSBvbiBgPExpbmsgdG8+YCB2YWx1ZXNgIGluIG91clxuICAvLyBtaWdyYXRpb24gZ3VpZGUgZnJvbSB2NSBhcyBhIG1lYW5zIG9mIGRpc2FtYmlndWF0aW9uIGJldHdlZW4gYHRvYCB2YWx1ZXNcbiAgLy8gdGhhdCBiZWdpbiB3aXRoIGAvYCBhbmQgdGhvc2UgdGhhdCBkbyBub3QuIEhvd2V2ZXIsIHRoaXMgaXMgcHJvYmxlbWF0aWMgZm9yXG4gIC8vIGB0b2AgdmFsdWVzIHRoYXQgZG8gbm90IHByb3ZpZGUgYSBwYXRobmFtZS4gYHRvYCBjYW4gc2ltcGx5IGJlIGEgc2VhcmNoIG9yXG4gIC8vIGhhc2ggc3RyaW5nLCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBhc3N1bWUgdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyByZWxhdGl2ZVxuICAvLyB0byB0aGUgY3VycmVudCBsb2NhdGlvbidzIHBhdGhuYW1lIGFuZCAqbm90KiB0aGUgcm91dGUgcGF0aG5hbWUuXG5cbiAgbGV0IGZyb207XG5cbiAgaWYgKHRvUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIGZyb20gPSBsb2NhdGlvblBhdGhuYW1lO1xuICB9IGVsc2Uge1xuICAgIGxldCByb3V0ZVBhdGhuYW1lSW5kZXggPSByb3V0ZVBhdGhuYW1lcy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi4uXCIpKSB7XG4gICAgICBsZXQgdG9TZWdtZW50cyA9IHRvUGF0aG5hbWUuc3BsaXQoXCIvXCIpOyAvLyBFYWNoIGxlYWRpbmcgLi4gc2VnbWVudCBtZWFucyBcImdvIHVwIG9uZSByb3V0ZVwiIGluc3RlYWQgb2YgXCJnbyB1cCBvbmVcbiAgICAgIC8vIFVSTCBzZWdtZW50XCIuICBUaGlzIGlzIGEga2V5IGRpZmZlcmVuY2UgZnJvbSBob3cgPGEgaHJlZj4gd29ya3MgYW5kIGFcbiAgICAgIC8vIG1ham9yIHJlYXNvbiB3ZSBjYWxsIHRoaXMgYSBcInRvXCIgdmFsdWUgaW5zdGVhZCBvZiBhIFwiaHJlZlwiLlxuXG4gICAgICB3aGlsZSAodG9TZWdtZW50c1swXSA9PT0gXCIuLlwiKSB7XG4gICAgICAgIHRvU2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgcm91dGVQYXRobmFtZUluZGV4IC09IDE7XG4gICAgICB9XG5cbiAgICAgIHRvLnBhdGhuYW1lID0gdG9TZWdtZW50cy5qb2luKFwiL1wiKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBtb3JlIFwiLi5cIiBzZWdtZW50cyB0aGFuIHBhcmVudCByb3V0ZXMsIHJlc29sdmUgcmVsYXRpdmUgdG9cbiAgICAvLyB0aGUgcm9vdCAvIFVSTC5cblxuXG4gICAgZnJvbSA9IHJvdXRlUGF0aG5hbWVJbmRleCA+PSAwID8gcm91dGVQYXRobmFtZXNbcm91dGVQYXRobmFtZUluZGV4XSA6IFwiL1wiO1xuICB9XG5cbiAgbGV0IHBhdGggPSByZXNvbHZlUGF0aCh0bywgZnJvbSk7IC8vIEVuc3VyZSB0aGUgcGF0aG5hbWUgaGFzIGEgdHJhaWxpbmcgc2xhc2ggaWYgdGhlIG9yaWdpbmFsIHRvIHZhbHVlIGhhZCBvbmUuXG5cbiAgaWYgKHRvUGF0aG5hbWUgJiYgdG9QYXRobmFtZSAhPT0gXCIvXCIgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIikgJiYgIXBhdGgucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgcGF0aC5wYXRobmFtZSArPSBcIi9cIjtcbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRUb1BhdGhuYW1lKHRvKSB7XG4gIC8vIEVtcHR5IHN0cmluZ3Mgc2hvdWxkIGJlIHRyZWF0ZWQgdGhlIHNhbWUgYXMgLyBwYXRoc1xuICByZXR1cm4gdG8gPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykucGF0aG5hbWUgOiB0by5wYXRobmFtZTtcbn1cblxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRobmFtZSwgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSBcIi9cIikgcmV0dXJuIHBhdGhuYW1lO1xuXG4gIGlmICghcGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGJhc2VuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbmV4dENoYXIgPSBwYXRobmFtZS5jaGFyQXQoYmFzZW5hbWUubGVuZ3RoKTtcblxuICBpZiAobmV4dENoYXIgJiYgbmV4dENoYXIgIT09IFwiL1wiKSB7XG4gICAgLy8gcGF0aG5hbWUgZG9lcyBub3Qgc3RhcnQgd2l0aCBiYXNlbmFtZS9cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXRobmFtZS5zbGljZShiYXNlbmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xufVxuXG5jb25zdCBqb2luUGF0aHMgPSBwYXRocyA9PiBwYXRocy5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8rL2csIFwiL1wiKTtcblxuY29uc3Qgbm9ybWFsaXplUGF0aG5hbWUgPSBwYXRobmFtZSA9PiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuXG5jb25zdCBub3JtYWxpemVTZWFyY2ggPSBzZWFyY2ggPT4gIXNlYXJjaCB8fCBzZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IHNlYXJjaC5zdGFydHNXaXRoKFwiP1wiKSA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuXG5jb25zdCBub3JtYWxpemVIYXNoID0gaGFzaCA9PiAhaGFzaCB8fCBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaCA6IFwiI1wiICsgaGFzaDsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgeyBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlcywgTG9jYXRpb25Db250ZXh0IGFzIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIE5hdmlnYXRpb25Db250ZXh0IGFzIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgUm91dGVDb250ZXh0IGFzIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCByZW5kZXJNYXRjaGVzLCByZXNvbHZlUGF0aCwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUm91dGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIERPTSB2Ni4yLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlUGF0aCB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VIcmVmLCB1c2VMb2NhdGlvbiwgdXNlUmVzb2x2ZWRQYXRoLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgeyBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlcywgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBVTlNBRkVfUm91dGVDb250ZXh0LCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4sIGdlbmVyYXRlUGF0aCwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcmVuZGVyTWF0Y2hlcywgcmVzb2x2ZVBhdGgsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJvbkNsaWNrXCIsIFwicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwic3RhdGVcIiwgXCJ0YXJnZXRcIiwgXCJ0b1wiXSxcbiAgICAgIF9leGNsdWRlZDIgPSBbXCJhcmlhLWN1cnJlbnRcIiwgXCJjYXNlU2Vuc2l0aXZlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZW5kXCIsIFwic3R5bGVcIiwgXCJ0b1wiLCBcImNoaWxkcmVuXCJdO1xuXG5mdW5jdGlvbiB3YXJuaW5nKGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIGNvbnNvbGUud2FybihtZXNzYWdlKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCBSb3V0ZXIhXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBlcnJvciBpcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICovXG5mdW5jdGlvbiBCcm93c2VyUm91dGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWY7XG4gIGxldCBoaXN0b3J5UmVmID0gdXNlUmVmKCk7XG5cbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnkoe1xuICAgICAgd2luZG93XG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFN0b3JlcyB0aGUgbG9jYXRpb24gaW4gdGhlIGhhc2hcbiAqIHBvcnRpb24gb2YgdGhlIFVSTCBzbyBpdCBpcyBub3Qgc2VudCB0byB0aGUgc2VydmVyLlxuICovXG5mdW5jdGlvbiBIYXNoUm91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSB1c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3dcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYDxSb3V0ZXI+YCB0aGF0IGFjY2VwdHMgYSBwcmUtaW5zdGFudGlhdGVkIGhpc3Rvcnkgb2JqZWN0LiBJdCdzIGltcG9ydGFudFxuICogdG8gbm90ZSB0aGF0IHVzaW5nIHlvdXIgb3duIGhpc3Rvcnkgb2JqZWN0IGlzIGhpZ2hseSBkaXNjb3VyYWdlZCBhbmQgbWF5IGFkZFxuICogdHdvIHZlcnNpb25zIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdG8geW91ciBidW5kbGVzIHVubGVzcyB5b3UgdXNlIHRoZSBzYW1lXG4gKiB2ZXJzaW9uIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdGhhdCBSZWFjdCBSb3V0ZXIgdXNlcyBpbnRlcm5hbGx5LlxuICovXG5mdW5jdGlvbiBIaXN0b3J5Um91dGVyKF9yZWYzKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgaGlzdG9yeVxuICB9ID0gX3JlZjM7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIaXN0b3J5Um91dGVyLmRpc3BsYXlOYW1lID0gXCJ1bnN0YWJsZV9IaXN0b3J5Um91dGVyXCI7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5jb25zdCBMaW5rID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gTGlua1dpdGhSZWYoX3JlZjQsIHJlZikge1xuICBsZXQge1xuICAgIG9uQ2xpY2ssXG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSA9IGZhbHNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldCxcbiAgICB0b1xuICB9ID0gX3JlZjQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjQsIF9leGNsdWRlZCk7XG5cbiAgbGV0IGhyZWYgPSB1c2VIcmVmKHRvKTtcbiAgbGV0IGludGVybmFsT25DbGljayA9IHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIHtcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldFxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAhcmVsb2FkRG9jdW1lbnQpIHtcbiAgICAgIGludGVybmFsT25DbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBocmVmOiBocmVmLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICByZWY6IHJlZixcbiAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgfSkpXG4gICk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBMaW5rLmRpc3BsYXlOYW1lID0gXCJMaW5rXCI7XG59XG5cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cbmNvbnN0IE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZMaW5rV2l0aFJlZihfcmVmNSwgcmVmKSB7XG4gIGxldCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRQcm9wID0gXCJwYWdlXCIsXG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCA9IFwiXCIsXG4gICAgZW5kID0gZmFsc2UsXG4gICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICB0byxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIF9leGNsdWRlZDIpO1xuXG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvKTtcbiAgbGV0IGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgbGV0IHRvUGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lO1xuXG4gIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgIGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgdG9QYXRobmFtZSA9IHRvUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGxldCBpc0FjdGl2ZSA9IGxvY2F0aW9uUGF0aG5hbWUgPT09IHRvUGF0aG5hbWUgfHwgIWVuZCAmJiBsb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIjtcbiAgbGV0IGFyaWFDdXJyZW50ID0gaXNBY3RpdmUgPyBhcmlhQ3VycmVudFByb3AgOiB1bmRlZmluZWQ7XG4gIGxldCBjbGFzc05hbWU7XG5cbiAgaWYgKHR5cGVvZiBjbGFzc05hbWVQcm9wID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVQcm9wKHtcbiAgICAgIGlzQWN0aXZlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIGNsYXNzTmFtZSBwcm9wIGlzIG5vdCBhIGZ1bmN0aW9uLCB3ZSB1c2UgYSBkZWZhdWx0IGBhY3RpdmVgXG4gICAgLy8gY2xhc3MgZm9yIDxOYXZMaW5rIC8+cyB0aGF0IGFyZSBhY3RpdmUuIEluIHY1IGBhY3RpdmVgIHdhcyB0aGUgZGVmYXVsdFxuICAgIC8vIHZhbHVlIGZvciBgYWN0aXZlQ2xhc3NOYW1lYCwgYnV0IHdlIGFyZSByZW1vdmluZyB0aGF0IEFQSSBhbmQgY2FuIHN0aWxsXG4gICAgLy8gdXNlIHRoZSBvbGQgZGVmYXVsdCBiZWhhdmlvciBmb3IgYSBjbGVhbmVyIHVwZ3JhZGUgcGF0aCBhbmQga2VlcCB0aGVcbiAgICAvLyBzaW1wbGUgc3R5bGluZyBydWxlcyB3b3JraW5nIGFzIHRoZXkgY3VycmVudGx5IGRvLlxuICAgIGNsYXNzTmFtZSA9IFtjbGFzc05hbWVQcm9wLCBpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBudWxsXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH1cblxuICBsZXQgc3R5bGUgPSB0eXBlb2Ygc3R5bGVQcm9wID09PSBcImZ1bmN0aW9uXCIgPyBzdHlsZVByb3Aoe1xuICAgIGlzQWN0aXZlXG4gIH0pIDogc3R5bGVQcm9wO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTGluaywgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudCxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICByZWY6IHJlZixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgdG86IHRvXG4gIH0pLCB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKHtcbiAgICBpc0FjdGl2ZVxuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEhPT0tTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWNrIGJlaGF2aW9yIGZvciByb3V0ZXIgYDxMaW5rPmAgY29tcG9uZW50cy4gVGhpcyBpcyB1c2VmdWwgaWZcbiAqIHlvdSBuZWVkIHRvIGNyZWF0ZSBjdXN0b20gYDxMaW5rPmAgY29tcG9uZW50cyB3aXRoIHRoZSBzYW1lIGNsaWNrIGJlaGF2aW9yIHdlXG4gKiB1c2UgaW4gb3VyIGV4cG9ydGVkIGA8TGluaz5gLlxuICovXG5cblxuZnVuY3Rpb24gdXNlTGlua0NsaWNrSGFuZGxlcih0bywgX3RlbXApIHtcbiAgbGV0IHtcbiAgICB0YXJnZXQsXG4gICAgcmVwbGFjZTogcmVwbGFjZVByb3AsXG4gICAgc3RhdGVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0byk7XG4gIHJldHVybiB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAgICF0YXJnZXQgfHwgdGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIExldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gSWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIElmIHRoZSBVUkwgaGFzbid0IGNoYW5nZWQsIGEgcmVndWxhciA8YT4gd2lsbCBkbyBhIHJlcGxhY2UgaW5zdGVhZCBvZlxuICAgICAgLy8gYSBwdXNoLCBzbyBkbyB0aGUgc2FtZSBoZXJlLlxuXG4gICAgICBsZXQgcmVwbGFjZSA9ICEhcmVwbGFjZVByb3AgfHwgY3JlYXRlUGF0aChsb2NhdGlvbikgPT09IGNyZWF0ZVBhdGgocGF0aCk7XG4gICAgICBuYXZpZ2F0ZSh0bywge1xuICAgICAgICByZXBsYWNlLFxuICAgICAgICBzdGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbG9jYXRpb24sIG5hdmlnYXRlLCBwYXRoLCByZXBsYWNlUHJvcCwgc3RhdGUsIHRhcmdldCwgdG9dKTtcbn1cbi8qKlxuICogQSBjb252ZW5pZW50IHdyYXBwZXIgZm9yIHJlYWRpbmcgYW5kIHdyaXRpbmcgc2VhcmNoIHBhcmFtZXRlcnMgdmlhIHRoZVxuICogVVJMU2VhcmNoUGFyYW1zIGludGVyZmFjZS5cbiAqL1xuXG5mdW5jdGlvbiB1c2VTZWFyY2hQYXJhbXMoZGVmYXVsdEluaXQpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSBcInVuZGVmaW5lZFwiLCBcIllvdSBjYW5ub3QgdXNlIHRoZSBgdXNlU2VhcmNoUGFyYW1zYCBob29rIGluIGEgYnJvd3NlciB0aGF0IGRvZXMgbm90IFwiICsgXCJzdXBwb3J0IHRoZSBVUkxTZWFyY2hQYXJhbXMgQVBJLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IEludGVybmV0IFwiICsgXCJFeHBsb3JlciAxMSwgd2UgcmVjb21tZW5kIHlvdSBsb2FkIGEgcG9seWZpbGwgc3VjaCBhcyBcIiArIFwiaHR0cHM6Ly9naXRodWIuY29tL3VuZ2FwL3VybC1zZWFyY2gtcGFyYW1zXFxuXFxuXCIgKyBcIklmIHlvdSdyZSB1bnN1cmUgaG93IHRvIGxvYWQgcG9seWZpbGxzLCB3ZSByZWNvbW1lbmQgeW91IGNoZWNrIG91dCBcIiArIFwiaHR0cHM6Ly9wb2x5ZmlsbC5pby92My8gd2hpY2ggcHJvdmlkZXMgc29tZSByZWNvbW1lbmRhdGlvbnMgYWJvdXQgaG93IFwiICsgXCJ0byBsb2FkIHBvbHlmaWxscyBvbmx5IGZvciB1c2VycyB0aGF0IG5lZWQgdGhlbSwgaW5zdGVhZCBvZiBmb3IgZXZlcnkgXCIgKyBcInVzZXIuXCIpIDogdm9pZCAwO1xuICBsZXQgZGVmYXVsdFNlYXJjaFBhcmFtc1JlZiA9IHVzZVJlZihjcmVhdGVTZWFyY2hQYXJhbXMoZGVmYXVsdEluaXQpKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcblxuICAgIGZvciAobGV0IGtleSBvZiBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQua2V5cygpKSB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQuZ2V0QWxsKGtleSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbiAgfSwgW2xvY2F0aW9uLnNlYXJjaF0pO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgc2V0U2VhcmNoUGFyYW1zID0gdXNlQ2FsbGJhY2soKG5leHRJbml0LCBuYXZpZ2F0ZU9wdGlvbnMpID0+IHtcbiAgICBuYXZpZ2F0ZShcIj9cIiArIGNyZWF0ZVNlYXJjaFBhcmFtcyhuZXh0SW5pdCksIG5hdmlnYXRlT3B0aW9ucyk7XG4gIH0sIFtuYXZpZ2F0ZV0pO1xuICByZXR1cm4gW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCB1c2luZyB0aGUgZ2l2ZW4gaW5pdGlhbGl6ZXIuXG4gKlxuICogVGhpcyBpcyBpZGVudGljYWwgdG8gYG5ldyBVUkxTZWFyY2hQYXJhbXMoaW5pdClgIGV4Y2VwdCBpdCBhbHNvXG4gKiBzdXBwb3J0cyBhcnJheXMgYXMgdmFsdWVzIGluIHRoZSBvYmplY3QgZm9ybSBvZiB0aGUgaW5pdGlhbGl6ZXJcbiAqIGluc3RlYWQgb2YganVzdCBzdHJpbmdzLiBUaGlzIGlzIGNvbnZlbmllbnQgd2hlbiB5b3UgbmVlZCBtdWx0aXBsZVxuICogdmFsdWVzIGZvciBhIGdpdmVuIGtleSwgYnV0IGRvbid0IHdhbnQgdG8gdXNlIGFuIGFycmF5IGluaXRpYWxpemVyLlxuICpcbiAqIEZvciBleGFtcGxlLCBpbnN0ZWFkIG9mOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICogICAgIFsnc29ydCcsICduYW1lJ10sXG4gKiAgICAgWydzb3J0JywgJ3ByaWNlJ11cbiAqICAgXSk7XG4gKlxuICogeW91IGNhbiBkbzpcbiAqXG4gKiAgIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMoe1xuICogICAgIHNvcnQ6IFsnbmFtZScsICdwcmljZSddXG4gKiAgIH0pO1xuICovXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hQYXJhbXMoaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IFwiXCI7XG4gIH1cblxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh0eXBlb2YgaW5pdCA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KGluaXQpIHx8IGluaXQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgPyBpbml0IDogT2JqZWN0LmtleXMoaW5pdCkucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBpbml0W2tleV07XG4gICAgcmV0dXJuIG1lbW8uY29uY2F0KEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKHYgPT4gW2tleSwgdl0pIDogW1trZXksIHZhbHVlXV0pO1xuICB9LCBbXSkpO1xufVxuXG5leHBvcnQgeyBCcm93c2VyUm91dGVyLCBIYXNoUm91dGVyLCBMaW5rLCBOYXZMaW5rLCBjcmVhdGVTZWFyY2hQYXJhbXMsIEhpc3RvcnlSb3V0ZXIgYXMgdW5zdGFibGVfSGlzdG9yeVJvdXRlciwgdXNlTGlua0NsaWNrSGFuZGxlciwgdXNlU2VhcmNoUGFyYW1zIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj02MDEwMyxwPTYwMTA2O2V4cG9ydHMuRnJhZ21lbnQ9NjAxMDc7ZXhwb3J0cy5TdHJpY3RNb2RlPTYwMTA4O2V4cG9ydHMuUHJvZmlsZXI9NjAxMTQ7dmFyIHE9NjAxMDkscj02MDExMCx0PTYwMTEyO2V4cG9ydHMuU3VzcGVuc2U9NjAxMTM7dmFyIHU9NjAxMTUsdj02MDExNjtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciB3PVN5bWJvbC5mb3I7bj13KFwicmVhY3QuZWxlbWVudFwiKTtwPXcoXCJyZWFjdC5wb3J0YWxcIik7ZXhwb3J0cy5GcmFnbWVudD13KFwicmVhY3QuZnJhZ21lbnRcIik7ZXhwb3J0cy5TdHJpY3RNb2RlPXcoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtleHBvcnRzLlByb2ZpbGVyPXcoXCJyZWFjdC5wcm9maWxlclwiKTtxPXcoXCJyZWFjdC5wcm92aWRlclwiKTtyPXcoXCJyZWFjdC5jb250ZXh0XCIpO3Q9dyhcInJlYWN0LmZvcndhcmRfcmVmXCIpO2V4cG9ydHMuU3VzcGVuc2U9dyhcInJlYWN0LnN1c3BlbnNlXCIpO3U9dyhcInJlYWN0Lm1lbW9cIik7dj13KFwicmVhY3QubGF6eVwiKX12YXIgeD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiB5KGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT14JiZhW3hdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9ZnVuY3Rpb24geihhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBBPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxCPXt9O2Z1bmN0aW9uIEMoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX1DLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0MucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcih6KDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtDLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEQoKXt9RC5wcm90b3R5cGU9Qy5wcm90b3R5cGU7ZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfXZhciBGPUUucHJvdG90eXBlPW5ldyBEO0YuY29uc3RydWN0b3I9RTtsKEYsQy5wcm90b3R5cGUpO0YuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEc9e2N1cnJlbnQ6bnVsbH0sSD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEk9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIEooYSxiLGMpe3ZhciBlLGQ9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSC5jYWxsKGIsZSkmJiFJLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWRbZV0mJihkW2VdPWdbZV0pO3JldHVybnskJHR5cGVvZjpuLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpkLF9vd25lcjpHLmN1cnJlbnR9fVxuZnVuY3Rpb24gSyhhLGIpe3JldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTChhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bn1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE09L1xcLysvZztmdW5jdGlvbiBOKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gTyhhLGIsYyxlLGQpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBuOmNhc2UgcDpoPSEwfX1pZihoKXJldHVybiBoPWEsZD1kKGgpLGE9XCJcIj09PWU/XCIuXCIrTihoLDApOmUsQXJyYXkuaXNBcnJheShkKT8oYz1cIlwiLG51bGwhPWEmJihjPWEucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSxPKGQsYixjLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9ZCYmKEwoZCkmJihkPUsoZCxjKyghZC5rZXl8fGgmJmgua2V5PT09ZC5rZXk/XCJcIjooXCJcIitkLmtleSkucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGQpKSwxO2g9MDtlPVwiXCI9PT1lP1wiLlwiOmUrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGc9XG4wO2c8YS5sZW5ndGg7ZysrKXtrPWFbZ107dmFyIGY9ZStOKGssZyk7aCs9TyhrLGIsYyxmLGQpfWVsc2UgaWYoZj15KGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1lK04oayxnKyspLGgrPU8oayxiLGMsZixkKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9XCJcIithLEVycm9yKHooMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO3JldHVybiBofWZ1bmN0aW9uIFAoYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W10sZD0wO08oYSxlLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGMsYSxkKyspfSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBRKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7YS5fc3RhdHVzPTA7YS5fcmVzdWx0PWI7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQ7dGhyb3cgYS5fcmVzdWx0O312YXIgUj17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBTKCl7dmFyIGE9Ui5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKHooMzIxKSk7cmV0dXJuIGF9dmFyIFQ9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UixSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7dHJhbnNpdGlvbjowfSxSZWFjdEN1cnJlbnRPd25lcjpHLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bH07XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6UCxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtQKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYyl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UChhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTChhKSl0aHJvdyBFcnJvcih6KDE0MykpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9QztleHBvcnRzLlB1cmVDb21wb25lbnQ9RTtleHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVQ7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoeigyNjcsYSkpO3ZhciBlPWwoe30sYS5wcm9wcyksZD1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Ry5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGQ9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilILmNhbGwoYixmKSYmIUkuaGFzT3duUHJvcGVydHkoZikmJihlW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO2Zvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsXG5rZXk6ZCxyZWY6ayxwcm9wczplLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6cixfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6YixfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnEsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PUo7ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtleHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnQscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PUw7XG5leHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYsX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpRfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMjAuMlxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZixnLGgsaztpZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19XG5pZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgdD1udWxsLHU9bnVsbCx3PWZ1bmN0aW9uKCl7aWYobnVsbCE9PXQpdHJ5e3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dCghMCxhKTt0PW51bGx9Y2F0Y2goYil7dGhyb3cgc2V0VGltZW91dCh3LDApLGI7fX07Zj1mdW5jdGlvbihhKXtudWxsIT09dD9zZXRUaW1lb3V0KGYsMCxhKToodD1hLHNldFRpbWVvdXQodywwKSl9O2c9ZnVuY3Rpb24oYSxiKXt1PXNldFRpbWVvdXQoYSxiKX07aD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KX07ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiExfTtrPWV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oKXt9fWVsc2V7dmFyIHg9d2luZG93LnNldFRpbWVvdXQseT13aW5kb3cuY2xlYXJUaW1lb3V0O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSl7dmFyIHo9XG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgeiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIil9dmFyIEE9ITEsQj1udWxsLEM9LTEsRD01LEU9MDtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCk+PVxuRX07az1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6RD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07dmFyIEY9bmV3IE1lc3NhZ2VDaGFubmVsLEc9Ri5wb3J0MjtGLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKG51bGwhPT1CKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO0U9YStEO3RyeXtCKCEwLGEpP0cucG9zdE1lc3NhZ2UobnVsbCk6KEE9ITEsQj1udWxsKX1jYXRjaChiKXt0aHJvdyBHLnBvc3RNZXNzYWdlKG51bGwpLGI7fX1lbHNlIEE9ITF9O2Y9ZnVuY3Rpb24oYSl7Qj1hO0F8fChBPSEwLEcucG9zdE1lc3NhZ2UobnVsbCkpfTtnPWZ1bmN0aW9uKGEsYil7Qz1cbngoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07aD1mdW5jdGlvbigpe3koQyk7Qz0tMX19ZnVuY3Rpb24gSChhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7Oyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYodm9pZCAwIT09ZSYmMDxJKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBKKGEpe2E9YVswXTtyZXR1cm4gdm9pZCAwPT09YT9udWxsOmF9XG5mdW5jdGlvbiBLKGEpe3ZhciBiPWFbMF07aWYodm9pZCAwIT09Yil7dmFyIGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7KXt2YXIgbT0yKihkKzEpLTEsbj1hW21dLHY9bSsxLHI9YVt2XTtpZih2b2lkIDAhPT1uJiYwPkkobixjKSl2b2lkIDAhPT1yJiYwPkkocixuKT8oYVtkXT1yLGFbdl09YyxkPXYpOihhW2RdPW4sYVttXT1jLGQ9bSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYwPkkocixjKSlhW2RdPXIsYVt2XT1jLGQ9djtlbHNlIGJyZWFrIGF9fXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIEkoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9dmFyIEw9W10sTT1bXSxOPTEsTz1udWxsLFA9MyxRPSExLFI9ITEsUz0hMTtcbmZ1bmN0aW9uIFQoYSl7Zm9yKHZhciBiPUooTSk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylLKE0pO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpSyhNKSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLEgoTCxiKTtlbHNlIGJyZWFrO2I9SihNKX19ZnVuY3Rpb24gVShhKXtTPSExO1QoYSk7aWYoIVIpaWYobnVsbCE9PUooTCkpUj0hMCxmKFYpO2Vsc2V7dmFyIGI9SihNKTtudWxsIT09YiYmZyhVLGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIFYoYSxiKXtSPSExO1MmJihTPSExLGgoKSk7UT0hMDt2YXIgYz1QO3RyeXtUKGIpO2ZvcihPPUooTCk7bnVsbCE9PU8mJighKE8uZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCkpOyl7dmFyIGQ9Ty5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7Ty5jYWxsYmFjaz1udWxsO1A9Ty5wcmlvcml0eUxldmVsO3ZhciBlPWQoTy5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP08uY2FsbGJhY2s9ZTpPPT09SihMKSYmSyhMKTtUKGIpfWVsc2UgSyhMKTtPPUooTCl9aWYobnVsbCE9PU8pdmFyIG09ITA7ZWxzZXt2YXIgbj1KKE0pO251bGwhPT1uJiZnKFUsbi5zdGFydFRpbWUtYik7bT0hMX1yZXR1cm4gbX1maW5hbGx5e089bnVsbCxQPWMsUT0hMX19dmFyIFc9aztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O1xuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtSfHxRfHwoUj0hMCxmKFYpKX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBQfTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIEooTCl9O1xuZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChQKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1QfXZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7UD1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9VztleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVA7UD1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7UD1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yz8oYz1jLmRlbGF5LGM9XCJudW1iZXJcIj09PXR5cGVvZiBjJiYwPGM/ZCtjOmQpOmM9ZDtzd2l0Y2goYSl7Y2FzZSAxOnZhciBlPS0xO2JyZWFrO2Nhc2UgMjplPTI1MDticmVhaztjYXNlIDU6ZT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgNDplPTFFNDticmVhaztkZWZhdWx0OmU9NUUzfWU9YytlO2E9e2lkOk4rKyxjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6YyxleHBpcmF0aW9uVGltZTplLHNvcnRJbmRleDotMX07Yz5kPyhhLnNvcnRJbmRleD1jLEgoTSxhKSxudWxsPT09SihMKSYmYT09PUooTSkmJihTP2goKTpTPSEwLGcoVSxjLWQpKSk6KGEuc29ydEluZGV4PWUsSChMLGEpLFJ8fFF8fChSPSEwLGYoVikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1QO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtQPWN9fX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFdlYiBGb250IExvYWRlciB2MS42LjI4IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubz1ifHxhO3RoaXMuYz10aGlzLm8uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEuby5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfWZ1bmN0aW9uIHooYSxiLGMpe2Z1bmN0aW9uIGQoKXttJiZlJiZmJiYobShnKSxtPW51bGwpfWI9dChhLFwibGlua1wiLHtyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpiLG1lZGlhOlwiYWxsXCJ9KTt2YXIgZT0hMSxmPSEwLGc9bnVsbCxtPWN8fG51bGw7ZGE/KGIub25sb2FkPWZ1bmN0aW9uKCl7ZT0hMDtkKCl9LGIub25lcnJvcj1mdW5jdGlvbigpe2U9ITA7Zz1FcnJvcihcIlN0eWxlc2hlZXQgZmFpbGVkIHRvIGxvYWRcIik7ZCgpfSk6c2V0VGltZW91dChmdW5jdGlvbigpe2U9ITA7ZCgpfSwwKTt1KGEsXCJoZWFkXCIsYil9XG5mdW5jdGlvbiBBKGEsYixjLGQpe3ZhciBlPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZSl7dmFyIGY9dChhLFwic2NyaXB0XCIse3NyYzpifSksZz0hMTtmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2d8fHRoaXMucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9dGhpcy5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPXRoaXMucmVhZHlTdGF0ZXx8KGc9ITAsYyYmYyhudWxsKSxmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiSEVBRFwiPT1mLnBhcmVudE5vZGUudGFnTmFtZSYmZS5yZW1vdmVDaGlsZChmKSl9O2UuYXBwZW5kQ2hpbGQoZik7c2V0VGltZW91dChmdW5jdGlvbigpe2d8fChnPSEwLGMmJmMoRXJyb3IoXCJTY3JpcHQgbG9hZCB0aW1lb3V0XCIpKSl9LGR8fDVFMyk7cmV0dXJuIGZ9cmV0dXJuIG51bGx9O2Z1bmN0aW9uIEIoKXt0aGlzLmE9MDt0aGlzLmM9bnVsbH1mdW5jdGlvbiBDKGEpe2EuYSsrO3JldHVybiBmdW5jdGlvbigpe2EuYS0tO0QoYSl9fWZ1bmN0aW9uIEUoYSxiKXthLmM9YjtEKGEpfWZ1bmN0aW9uIEQoYSl7MD09YS5hJiZhLmMmJihhLmMoKSxhLmM9bnVsbCl9O2Z1bmN0aW9uIEYoYSl7dGhpcy5hPWF8fFwiLVwifUYucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIucHVzaChhcmd1bWVudHNbY10ucmVwbGFjZSgvW1xcV19dKy9nLFwiXCIpLnRvTG93ZXJDYXNlKCkpO3JldHVybiBiLmpvaW4odGhpcy5hKX07ZnVuY3Rpb24gRyhhLGIpe3RoaXMuYz1hO3RoaXMuZj00O3RoaXMuYT1cIm5cIjt2YXIgYz0oYnx8XCJuNFwiKS5tYXRjaCgvXihbbmlvXSkoWzEtOV0pJC9pKTtjJiYodGhpcy5hPWNbMV0sdGhpcy5mPXBhcnNlSW50KGNbMl0sMTApKX1mdW5jdGlvbiBmYShhKXtyZXR1cm4gSChhKStcIiBcIisoYS5mK1wiMDBcIikrXCIgMzAwcHggXCIrSShhLmMpfWZ1bmN0aW9uIEkoYSl7dmFyIGI9W107YT1hLnNwbGl0KC8sXFxzKi8pO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLnJlcGxhY2UoL1snXCJdL2csXCJcIik7LTEhPWQuaW5kZXhPZihcIiBcIil8fC9eXFxkLy50ZXN0KGQpP2IucHVzaChcIidcIitkK1wiJ1wiKTpiLnB1c2goZCl9cmV0dXJuIGIuam9pbihcIixcIil9ZnVuY3Rpb24gSihhKXtyZXR1cm4gYS5hK2EuZn1mdW5jdGlvbiBIKGEpe3ZhciBiPVwibm9ybWFsXCI7XCJvXCI9PT1hLmE/Yj1cIm9ibGlxdWVcIjpcImlcIj09PWEuYSYmKGI9XCJpdGFsaWNcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBnYShhKXt2YXIgYj00LGM9XCJuXCIsZD1udWxsO2EmJigoZD1hLm1hdGNoKC8obm9ybWFsfG9ibGlxdWV8aXRhbGljKS9pKSkmJmRbMV0mJihjPWRbMV0uc3Vic3RyKDAsMSkudG9Mb3dlckNhc2UoKSksKGQ9YS5tYXRjaCgvKFsxLTldMDB8bm9ybWFsfGJvbGQpL2kpKSYmZFsxXSYmKC9ib2xkL2kudGVzdChkWzFdKT9iPTc6L1sxLTldMDAvLnRlc3QoZFsxXSkmJihiPXBhcnNlSW50KGRbMV0uc3Vic3RyKDAsMSksMTApKSkpO3JldHVybiBjK2J9O2Z1bmN0aW9uIGhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWEuby5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dGhpcy5oPWI7dGhpcy5hPW5ldyBGKFwiLVwiKTt0aGlzLmo9ITEhPT1iLmV2ZW50czt0aGlzLmc9ITEhPT1iLmNsYXNzZXN9ZnVuY3Rpb24gaWEoYSl7YS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV0pO0soYSxcImxvYWRpbmdcIil9ZnVuY3Rpb24gTChhKXtpZihhLmcpe3ZhciBiPXkoYS5mLGEuYS5jKFwid2ZcIixcImFjdGl2ZVwiKSksYz1bXSxkPVthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXTtifHxjLnB1c2goYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIikpO3coYS5mLGMsZCl9SyhhLFwiaW5hY3RpdmVcIil9ZnVuY3Rpb24gSyhhLGIsYyl7aWYoYS5qJiZhLmhbYl0paWYoYylhLmhbYl0oYy5jLEooYykpO2Vsc2UgYS5oW2JdKCl9O2Z1bmN0aW9uIGphKCl7dGhpcy5jPXt9fWZ1bmN0aW9uIGthKGEsYixjKXt2YXIgZD1bXSxlO2ZvcihlIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIGY9YS5jW2VdO2YmJmQucHVzaChmKGJbZV0sYykpfXJldHVybiBkfTtmdW5jdGlvbiBNKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPXQodGhpcy5jLFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9LHRoaXMuZil9ZnVuY3Rpb24gTihhKXt1KGEuYyxcImJvZHlcIixhLmEpfWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O2xlZnQ6LTk5OTlweDtmb250LXNpemU6MzAwcHg7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztsaW5lLWhlaWdodDpub3JtYWw7bWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtdmFyaWFudDpub3JtYWw7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OlwiK0koYS5jKStcIjtcIisoXCJmb250LXN0eWxlOlwiK0goYSkrXCI7Zm9udC13ZWlnaHQ6XCIrKGEuZitcIjAwXCIpK1wiO1wiKX07ZnVuY3Rpb24gUChhLGIsYyxkLGUsZil7dGhpcy5nPWE7dGhpcy5qPWI7dGhpcy5hPWQ7dGhpcy5jPWM7dGhpcy5mPWV8fDNFMzt0aGlzLmg9Znx8dm9pZCAwfVAucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jLm8uZG9jdW1lbnQsYj10aGlzLGM9cSgpLGQ9bmV3IFByb21pc2UoZnVuY3Rpb24oZCxlKXtmdW5jdGlvbiBmKCl7cSgpLWM+PWIuZj9lKCk6YS5mb250cy5sb2FkKGZhKGIuYSksYi5oKS50aGVuKGZ1bmN0aW9uKGEpezE8PWEubGVuZ3RoP2QoKTpzZXRUaW1lb3V0KGYsMjUpfSxmdW5jdGlvbigpe2UoKX0pfWYoKX0pLGU9bnVsbCxmPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsZCl7ZT1zZXRUaW1lb3V0KGQsYi5mKX0pO1Byb21pc2UucmFjZShbZixkXSkudGhlbihmdW5jdGlvbigpe2UmJihjbGVhclRpbWVvdXQoZSksZT1udWxsKTtiLmcoYi5hKX0sZnVuY3Rpb24oKXtiLmooYi5hKX0pfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmLGcpe3RoaXMudj1hO3RoaXMuQj1iO3RoaXMuYz1jO3RoaXMuYT1kO3RoaXMucz1nfHxcIkJFU2Jzd3lcIjt0aGlzLmY9e307dGhpcy53PWV8fDNFMzt0aGlzLnU9Znx8bnVsbDt0aGlzLm09dGhpcy5qPXRoaXMuaD10aGlzLmc9bnVsbDt0aGlzLmc9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5oPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMuaj1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLm09bmV3IE0odGhpcy5jLHRoaXMucyk7YT1uZXcgRyh0aGlzLmEuYytcIixzZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuZy5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKHRoaXMuYS5jK1wiLHNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmguYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5qLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcoXCJzYW5zLXNlcmlmXCIsSih0aGlzLmEpKTthPVxuTyhhKTt0aGlzLm0uYS5zdHlsZS5jc3NUZXh0PWE7Tih0aGlzLmcpO04odGhpcy5oKTtOKHRoaXMuaik7Tih0aGlzLm0pfXZhciBSPXtEOlwic2VyaWZcIixDOlwic2Fucy1zZXJpZlwifSxTPW51bGw7ZnVuY3Rpb24gVCgpe2lmKG51bGw9PT1TKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7Uz0hIWEmJig1MzY+cGFyc2VJbnQoYVsxXSwxMCl8fDUzNj09PXBhcnNlSW50KGFbMV0sMTApJiYxMT49cGFyc2VJbnQoYVsyXSwxMCkpfXJldHVybiBTfVEucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5mLnNlcmlmPXRoaXMuai5hLm9mZnNldFdpZHRoO3RoaXMuZltcInNhbnMtc2VyaWZcIl09dGhpcy5tLmEub2Zmc2V0V2lkdGg7dGhpcy5BPXEoKTtVKHRoaXMpfTtcbmZ1bmN0aW9uIGxhKGEsYixjKXtmb3IodmFyIGQgaW4gUilpZihSLmhhc093blByb3BlcnR5KGQpJiZiPT09YS5mW1JbZF1dJiZjPT09YS5mW1JbZF1dKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFUoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VCgpJiZsYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1QoKSYmbGEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bWEoYSk6VihhLGEudil9ZnVuY3Rpb24gbWEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7VSh0aGlzKX0sYSksNTApfWZ1bmN0aW9uIFYoYSxiKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXt2KHRoaXMuZy5hKTt2KHRoaXMuaC5hKTt2KHRoaXMuai5hKTt2KHRoaXMubS5hKTtiKHRoaXMuYSl9LGEpLDApfTtmdW5jdGlvbiBXKGEsYixjKXt0aGlzLmM9YTt0aGlzLmE9Yjt0aGlzLmY9MDt0aGlzLm09dGhpcy5qPSExO3RoaXMucz1jfXZhciBYPW51bGw7Vy5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7Yi5nJiZ3KGIuZixbYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIildLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIiksYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKV0pO0soYixcImZvbnRhY3RpdmVcIixhKTt0aGlzLm09ITA7bmEodGhpcyl9O1xuVy5wcm90b3R5cGUuaD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmE7aWYoYi5nKXt2YXIgYz15KGIuZixiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKSksZD1bXSxlPVtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildO2N8fGQucHVzaChiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpKTt3KGIuZixkLGUpfUsoYixcImZvbnRpbmFjdGl2ZVwiLGEpO25hKHRoaXMpfTtmdW5jdGlvbiBuYShhKXswPT0tLWEuZiYmYS5qJiYoYS5tPyhhPWEuYSxhLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJhY3RpdmVcIildLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpLGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpXSksSyhhLFwiYWN0aXZlXCIpKTpMKGEuYSkpfTtmdW5jdGlvbiBvYShhKXt0aGlzLmo9YTt0aGlzLmE9bmV3IGphO3RoaXMuaD0wO3RoaXMuZj10aGlzLmc9ITB9b2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dGhpcy5jPW5ldyBjYSh0aGlzLmosYS5jb250ZXh0fHx0aGlzLmopO3RoaXMuZz0hMSE9PWEuZXZlbnRzO3RoaXMuZj0hMSE9PWEuY2xhc3NlcztwYSh0aGlzLG5ldyBoYSh0aGlzLmMsYSksYSl9O1xuZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXt2YXIgZj0wPT0tLWEuaDsoYS5mfHxhLmcpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGE9ZXx8bnVsbCxtPWR8fG51bGx8fHt9O2lmKDA9PT1jLmxlbmd0aCYmZilMKGIuYSk7ZWxzZXtiLmYrPWMubGVuZ3RoO2YmJihiLmo9Zik7dmFyIGgsbD1bXTtmb3IoaD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgaz1jW2hdLG49bVtrLmNdLHI9Yi5hLHg9aztyLmcmJncoci5mLFtyLmEuYyhcIndmXCIseC5jLEooeCkudG9TdHJpbmcoKSxcImxvYWRpbmdcIildKTtLKHIsXCJmb250bG9hZGluZ1wiLHgpO3I9bnVsbDtpZihudWxsPT09WClpZih3aW5kb3cuRm9udEZhY2Upe3ZhciB4PS9HZWNrby4qRmlyZWZveFxcLyhcXGQrKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkseGE9L09TIFguKlZlcnNpb25cXC8xMFxcLi4qU2FmYXJpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yKTtcblg9eD80MjxwYXJzZUludCh4WzFdLDEwKTp4YT8hMTohMH1lbHNlIFg9ITE7WD9yPW5ldyBQKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxrLGIucyxuKTpyPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxrLGIucyxhLG4pO2wucHVzaChyKX1mb3IoaD0wO2g8bC5sZW5ndGg7aCsrKWxbaF0uc3RhcnQoKX19LDApfWZ1bmN0aW9uIHBhKGEsYixjKXt2YXIgZD1bXSxlPWMudGltZW91dDtpYShiKTt2YXIgZD1rYShhLmEsYyxhLmMpLGY9bmV3IFcoYS5jLGIsZSk7YS5oPWQubGVuZ3RoO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKWRbYl0ubG9hZChmdW5jdGlvbihiLGQsYyl7cWEoYSxmLGIsZCxjKX0pfTtmdW5jdGlvbiByYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifVxucmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe2lmKGZbXCJfX210aV9mbnRMc3RcIitkXSl7dmFyIGM9ZltcIl9fbXRpX2ZudExzdFwiK2RdKCksZT1bXSxoO2lmKGMpZm9yKHZhciBsPTA7bDxjLmxlbmd0aDtsKyspe3ZhciBrPWNbbF0uZm9udGZhbWlseTt2b2lkIDAhPWNbbF0uZm9udFN0eWxlJiZ2b2lkIDAhPWNbbF0uZm9udFdlaWdodD8oaD1jW2xdLmZvbnRTdHlsZStjW2xdLmZvbnRXZWlnaHQsZS5wdXNoKG5ldyBHKGssaCkpKTplLnB1c2gobmV3IEcoaykpfWEoZSl9ZWxzZSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YigpfSw1MCl9dmFyIGM9dGhpcyxkPWMuYS5wcm9qZWN0SWQsZT1jLmEudmVyc2lvbjtpZihkKXt2YXIgZj1jLmMubztBKHRoaXMuYywoYy5hLmFwaXx8XCJodHRwczovL2Zhc3QuZm9udHMubmV0L2pzYXBpXCIpK1wiL1wiK2QrXCIuanNcIisoZT9cIj92PVwiK2U6XCJcIiksZnVuY3Rpb24oZSl7ZT9hKFtdKTooZltcIl9fTW9ub3R5cGVDb25maWd1cmF0aW9uX19cIitcbmRdPWZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0sYigpKX0pLmlkPVwiX19Nb25vdHlwZUFQSVNjcmlwdF9fXCIrZH1lbHNlIGEoW10pfTtmdW5jdGlvbiBzYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmEudXJsc3x8W10sZT10aGlzLmEuZmFtaWxpZXN8fFtdLGY9dGhpcy5hLnRlc3RTdHJpbmdzfHx7fSxnPW5ldyBCO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKXoodGhpcy5jLGRbYl0sQyhnKSk7dmFyIG09W107Yj0wO2ZvcihjPWUubGVuZ3RoO2I8YztiKyspaWYoZD1lW2JdLnNwbGl0KFwiOlwiKSxkWzFdKWZvcih2YXIgaD1kWzFdLnNwbGl0KFwiLFwiKSxsPTA7bDxoLmxlbmd0aDtsKz0xKW0ucHVzaChuZXcgRyhkWzBdLGhbbF0pKTtlbHNlIG0ucHVzaChuZXcgRyhkWzBdKSk7RShnLGZ1bmN0aW9uKCl7YShtLGYpfSl9O2Z1bmN0aW9uIHRhKGEsYil7YT90aGlzLmM9YTp0aGlzLmM9dWE7dGhpcy5hPVtdO3RoaXMuZj1bXTt0aGlzLmc9Ynx8XCJcIn12YXIgdWE9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzc1wiO2Z1bmN0aW9uIHZhKGEsYil7Zm9yKHZhciBjPWIubGVuZ3RoLGQ9MDtkPGM7ZCsrKXt2YXIgZT1iW2RdLnNwbGl0KFwiOlwiKTszPT1lLmxlbmd0aCYmYS5mLnB1c2goZS5wb3AoKSk7dmFyIGY9XCJcIjsyPT1lLmxlbmd0aCYmXCJcIiE9ZVsxXSYmKGY9XCI6XCIpO2EuYS5wdXNoKGUuam9pbihmKSl9fVxuZnVuY3Rpb24gd2EoYSl7aWYoMD09YS5hLmxlbmd0aCl0aHJvdyBFcnJvcihcIk5vIGZvbnRzIHRvIGxvYWQhXCIpO2lmKC0xIT1hLmMuaW5kZXhPZihcImtpdD1cIikpcmV0dXJuIGEuYztmb3IodmFyIGI9YS5hLmxlbmd0aCxjPVtdLGQ9MDtkPGI7ZCsrKWMucHVzaChhLmFbZF0ucmVwbGFjZSgvIC9nLFwiK1wiKSk7Yj1hLmMrXCI/ZmFtaWx5PVwiK2Muam9pbihcIiU3Q1wiKTswPGEuZi5sZW5ndGgmJihiKz1cIiZzdWJzZXQ9XCIrYS5mLmpvaW4oXCIsXCIpKTswPGEuZy5sZW5ndGgmJihiKz1cIiZ0ZXh0PVwiK2VuY29kZVVSSUNvbXBvbmVudChhLmcpKTtyZXR1cm4gYn07ZnVuY3Rpb24geWEoYSl7dGhpcy5mPWE7dGhpcy5hPVtdO3RoaXMuYz17fX1cbnZhciB6YT17bGF0aW46XCJCRVNic3d5XCIsXCJsYXRpbi1leHRcIjpcIlxcdTAwZTdcXHUwMGY2XFx1MDBmY1xcdTAxMWZcXHUwMTVmXCIsY3lyaWxsaWM6XCJcXHUwNDM5XFx1MDQ0ZlxcdTA0MTZcIixncmVlazpcIlxcdTAzYjFcXHUwM2IyXFx1MDNhM1wiLGtobWVyOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCIsSGFudW1hbjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwifSxBYT17dGhpbjpcIjFcIixleHRyYWxpZ2h0OlwiMlwiLFwiZXh0cmEtbGlnaHRcIjpcIjJcIix1bHRyYWxpZ2h0OlwiMlwiLFwidWx0cmEtbGlnaHRcIjpcIjJcIixsaWdodDpcIjNcIixyZWd1bGFyOlwiNFwiLGJvb2s6XCI0XCIsbWVkaXVtOlwiNVwiLFwic2VtaS1ib2xkXCI6XCI2XCIsc2VtaWJvbGQ6XCI2XCIsXCJkZW1pLWJvbGRcIjpcIjZcIixkZW1pYm9sZDpcIjZcIixib2xkOlwiN1wiLFwiZXh0cmEtYm9sZFwiOlwiOFwiLGV4dHJhYm9sZDpcIjhcIixcInVsdHJhLWJvbGRcIjpcIjhcIix1bHRyYWJvbGQ6XCI4XCIsYmxhY2s6XCI5XCIsaGVhdnk6XCI5XCIsbDpcIjNcIixyOlwiNFwiLGI6XCI3XCJ9LEJhPXtpOlwiaVwiLGl0YWxpYzpcImlcIixuOlwiblwiLG5vcm1hbDpcIm5cIn0sXG5DYT0vXih0aGlufCg/Oig/OmV4dHJhfHVsdHJhKS0/KT9saWdodHxyZWd1bGFyfGJvb2t8bWVkaXVtfCg/Oig/OnNlbWl8ZGVtaXxleHRyYXx1bHRyYSktPyk/Ym9sZHxibGFja3xoZWF2eXxsfHJ8YnxbMS05XTAwKT8obnxpfG5vcm1hbHxpdGFsaWMpPyQvO1xuZnVuY3Rpb24gRGEoYSl7Zm9yKHZhciBiPWEuZi5sZW5ndGgsYz0wO2M8YjtjKyspe3ZhciBkPWEuZltjXS5zcGxpdChcIjpcIiksZT1kWzBdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxmPVtcIm40XCJdO2lmKDI8PWQubGVuZ3RoKXt2YXIgZzt2YXIgbT1kWzFdO2c9W107aWYobSlmb3IodmFyIG09bS5zcGxpdChcIixcIiksaD1tLmxlbmd0aCxsPTA7bDxoO2wrKyl7dmFyIGs7az1tW2xdO2lmKGsubWF0Y2goL15bXFx3LV0rJC8pKXt2YXIgbj1DYS5leGVjKGsudG9Mb3dlckNhc2UoKSk7aWYobnVsbD09bilrPVwiXCI7ZWxzZXtrPW5bMl07az1udWxsPT1rfHxcIlwiPT1rP1wiblwiOkJhW2tdO249blsxXTtpZihudWxsPT1ufHxcIlwiPT1uKW49XCI0XCI7ZWxzZSB2YXIgcj1BYVtuXSxuPXI/cjppc05hTihuKT9cIjRcIjpuLnN1YnN0cigwLDEpO2s9W2ssbl0uam9pbihcIlwiKX19ZWxzZSBrPVwiXCI7ayYmZy5wdXNoKGspfTA8Zy5sZW5ndGgmJihmPWcpOzM9PWQubGVuZ3RoJiYoZD1kWzJdLGc9W10sZD1kP2Quc3BsaXQoXCIsXCIpOlxuZywwPGQubGVuZ3RoJiYoZD16YVtkWzBdXSkmJihhLmNbZV09ZCkpfWEuY1tlXXx8KGQ9emFbZV0pJiYoYS5jW2VdPWQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKz0xKWEuYS5wdXNoKG5ldyBHKGUsZltkXSkpfX07ZnVuY3Rpb24gRWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn12YXIgRmE9e0FyaW1vOiEwLENvdXNpbmU6ITAsVGlub3M6ITB9O0VhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBCLGM9dGhpcy5jLGQ9bmV3IHRhKHRoaXMuYS5hcGksdGhpcy5hLnRleHQpLGU9dGhpcy5hLmZhbWlsaWVzO3ZhKGQsZSk7dmFyIGY9bmV3IHlhKGUpO0RhKGYpO3ooYyx3YShkKSxDKGIpKTtFKGIsZnVuY3Rpb24oKXthKGYuYSxmLmMsRmEpfSl9O2Z1bmN0aW9uIEdhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9R2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLmlkLGM9dGhpcy5jLm87Yj9BKHRoaXMuYywodGhpcy5hLmFwaXx8XCJodHRwczovL3VzZS50eXBla2l0Lm5ldFwiKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7aWYoYilhKFtdKTtlbHNlIGlmKGMuVHlwZWtpdCYmYy5UeXBla2l0LmNvbmZpZyYmYy5UeXBla2l0LmNvbmZpZy5mbil7Yj1jLlR5cGVraXQuY29uZmlnLmZuO2Zvcih2YXIgZT1bXSxmPTA7ZjxiLmxlbmd0aDtmKz0yKWZvcih2YXIgZz1iW2ZdLG09YltmKzFdLGg9MDtoPG0ubGVuZ3RoO2grKyllLnB1c2gobmV3IEcoZyxtW2hdKSk7dHJ5e2MuVHlwZWtpdC5sb2FkKHtldmVudHM6ITEsY2xhc3NlczohMSxhc3luYzohMH0pfWNhdGNoKGwpe31hKGUpfX0sMkUzKTphKFtdKX07ZnVuY3Rpb24gSGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9W119SGEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5mLmlkLGM9dGhpcy5jLm8sZD10aGlzO2I/KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX3x8KGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfXz17fSksYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fW2JdPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBnPTAsbT1jLmZvbnRzLmxlbmd0aDtnPG07KytnKXt2YXIgaD1jLmZvbnRzW2ddO2QuYS5wdXNoKG5ldyBHKGgubmFtZSxnYShcImZvbnQtd2VpZ2h0OlwiK2gud2VpZ2h0K1wiO2ZvbnQtc3R5bGU6XCIraC5zdHlsZSkpKX1hKGQuYSl9LEEodGhpcy5jLCh0aGlzLmYuYXBpfHxcImh0dHBzOi8vZi5mb250ZGVjay5jb20vcy9jc3MvanMvXCIpK2VhKHRoaXMuYykrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2ImJmEoW10pfSkpOmEoW10pfTt2YXIgWT1uZXcgb2Eod2luZG93KTtZLmEuYy5jdXN0b209ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHNhKGIsYSl9O1kuYS5jLmZvbnRkZWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBIYShiLGEpfTtZLmEuYy5tb25vdHlwZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgcmEoYixhKX07WS5hLmMudHlwZWtpdD1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgR2EoYixhKX07WS5hLmMuZ29vZ2xlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBFYShiLGEpfTt2YXIgWj17bG9hZDpwKFkubG9hZCxZKX07XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gWn0pOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1aOih3aW5kb3cuV2ViRm9udD1aLHdpbmRvdy5XZWJGb250Q29uZmlnJiZZLmxvYWQod2luZG93LldlYkZvbnRDb25maWcpKTt9KCkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY0Y2M1Y2M5OWM3NGYyNGE1NjIyXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImRlbW9zOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGVtb3MvXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE0MzogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2RlbW9zXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2RlbW9zXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWZsYW1pbmdvL2AgOiAnL2ZsYW1pbmdvLyc7XG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfVVJMID0gaXNQcm9kdWN0aW9uXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy9mbGFtaW5nb2Bcblx0OiAnL2ZsYW1pbmdvJztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBTZWFyY2ggPSAoeyBvbkNsb3NlID0gKCkgPT4ge30sIG9uU2VhcmNoID0gKCkgPT4ge30gfSkgPT4ge1xuXHRjb25zdCBpbnB1dFJlZiA9IGNyZWF0ZVJlZigpO1xuXG5cdHJldHVybiAoXG5cdFx0PGIgY2xhc3NOYW1lPXskLnNlYXJjaH0+XG5cdFx0XHQ8YiBjbGFzc05hbWU9eyQuY2xvc2V9PlxuXHRcdFx0XHQ8aVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoKX1cblx0XHRcdFx0PjwvaT5cblx0XHRcdDwvYj5cblx0XHRcdDxiIGNsYXNzTmFtZT17JC5zZWFyY2hfaW5wdXR9PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e2lucHV0UmVmfSAvPlxuXHRcdFx0XHQ8aVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhcyBmYS1zZWFyY2ggJHskLnNlYXJjaF9pY29ufWB9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25TZWFyY2goaW5wdXRSZWYuY3VycmVudC52YWx1ZSl9XG5cdFx0XHRcdD48L2k+XG5cdFx0XHQ8L2I+XG5cdFx0PC9iPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU1hdGNoLCB1c2VSZXNvbHZlZFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICd+Yy9GbGFtaW5nby9CdXR0b24nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+Yy9GbGFtaW5nby9TZWFyY2hNb2RhbCc7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBsb2dvID0gbnVsbCwgbWVudSA9IFtdLCBoaWRlU2VhcmNoID0gZmFsc2UgfSkgPT4ge1xuXHRjb25zdCBbaXNTZWFyY2hPbiwgb25DaGFuZ2VTZWFyY2hWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NlYXJjaFRlcm0sIG9uQ2hhbmdlU2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3Qgc2F2ZVNlYXJjaFRlcm0gPSB0ZXJtID0+IHtcblx0XHRjb25zb2xlLmxvZyh0ZXJtKTtcblx0XHRvbkNoYW5nZVNlYXJjaFRlcm0odGVybSk7XG5cdFx0b25DaGFuZ2VTZWFyY2hWaXNpYmlsaXR5KGZhbHNlKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxiIGNsYXNzTmFtZT17JC5uYXZpZ2F0aW9ufT5cblx0XHRcdHtsb2dvICYmIChcblx0XHRcdFx0PGIgY2xhc3NOYW1lPXskLmxvZ299PlxuXHRcdFx0XHRcdDxMaW5rIHRvPXtsb2dvLnJvdXRlfT5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtsb2dvLmltYWdlfSBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvYj5cblx0XHRcdCl9XG5cdFx0XHQ8YiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdHttZW51Lmxlbmd0aCAmJiAoXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPXskLm1lbnV9PlxuXHRcdFx0XHRcdFx0e21lbnUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgcmVzb2x2ZWQgPSB1c2VSZXNvbHZlZFBhdGgoaXRlbS5yb3V0ZSk7XG5cdFx0XHRcdFx0XHRcdGxldCBtYXRjaCA9IHVzZU1hdGNoKHtcblx0XHRcdFx0XHRcdFx0XHRwYXRoOiByZXNvbHZlZC5wYXRobmFtZSxcblx0XHRcdFx0XHRcdFx0XHRlbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlzQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rPXtpdGVtLnJvdXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17aXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHR0bz17aXRlbS5yb3V0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hdGNoID8gJC5tZW51X2l0ZW1fYWN0aXZlIDogJC5tZW51X2l0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFoaWRlU2VhcmNoICYmIChcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9eyQuc2VhcmNofT5cblx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlU2VhcmNoVmlzaWJpbGl0eSh0cnVlKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXskLnNlYXJjaF9pY29ufVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9pPlxuXG5cdFx0XHRcdFx0XHR7aXNTZWFyY2hPbiAmJiAoXG5cdFx0XHRcdFx0XHRcdDxTZWFyY2hcblx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBvbkNoYW5nZVNlYXJjaFZpc2liaWxpdHkoZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdG9uU2VhcmNoPXt2YWwgPT4gc2F2ZVNlYXJjaFRlcm0odmFsKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9iPlxuXHRcdDwvYj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnfmMvRmxhbWluZ28vQnV0dG9uJztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgSW5xdWlyeSA9ICh7XG5cdHNvY2lhbE1lZGlhID0gW10sXG5cdGhlYWRpbmcgPSAnJyxcblx0aW1hZ2UgPSAnJyxcblx0YWN0aW9uID0ge30sXG59KSA9PiAoXG5cdDxkaXZcblx0XHRjbGFzc05hbWU9XCJzZWN0aW9uIHRleHQtY2VudGVyIGJnLWNvdmVyIGJnLWZpeGVkXCJcblx0XHRzdHlsZT17e1xuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBpbWFnZSAmJiBgdXJsKCR7aW1hZ2V9KWAsXG5cdFx0fX1cblx0PlxuXHRcdHtzb2NpYWxNZWRpYSAmJiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5zb2NpYWxfbWVkaWF9IG1iLW1gfT5cblx0XHRcdFx0e3NvY2lhbE1lZGlhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8YSBocmVmPXtpdGVtLmxpbmt9IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0XHQ8aDIgY2xhc3NOYW1lPVwibWItbVwiPntoZWFkaW5nfTwvaDI+XG5cdFx0e2FjdGlvbiAmJiBhY3Rpb24udGV4dCAmJiAoXG5cdFx0XHQ8QnV0dG9uIHRleHQ9e2FjdGlvbi50ZXh0fSBsaW5rPXthY3Rpb24ubGlua30gLz5cblx0XHQpfVxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IElucXVpcnk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IElucXVpcnkgZnJvbSAnfmMvRmxhbWluZ28vSW5xdWlyeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ35jL0ZsYW1pbmdvL0J1dHRvbic7XG5pbXBvcnQgeyBiYXNlLCBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoeyBpbnF1aXJ5ID0ge30sIGNvbHVtbnMgPSBbXSwgY29weXJpZ2h0ID0ge30gfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17JC5mb290ZXJ9PlxuXHRcdHtpbnF1aXJ5ICYmIDxJbnF1aXJ5IHsuLi5pbnF1aXJ5fSAvPn1cblx0XHR7Y29sdW1ucy5sZW5ndGggJiYgKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb24gYmItd2hpdGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51c30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51fT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQubG9nb30gbWItZGVmYXVsdGB9PlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPXtiYXNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtgJHtQVUJMSUNfVVJMfS9sb2dvLnBuZ2B9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHA+V2UgYXJlIG1vcmUgdGhhbiBhIGRpZ2l0YWwgYWdlbmN5PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51fT5cblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5Db250YWN0IFVzPC9oNT5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjA3Mjc3MjkwNjhcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtcGhvbmUtdm9sdW1lICR7JC5pY29uX3doaXRlfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0MDcyNzcyOTA2OFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJtYWlsdG86bW9jYW51LmFsZXhhbmRydTIwQHlhaG9vLnJvXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhciBmYS1lbnZlbG9wZSAkeyQuaWNvbl93aGl0ZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdG1vY2FudS5hbGV4YW5kcnUyMEB5YWhvby5yb1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtbWFwLW1hcmtlci1hbHQgJHskLmljb25fd2hpdGV9YH1cblx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdENvbnN0YW50emEsIFJvbWFuaWFcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGlcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhciBmYS1jYWxlbmRhci1hbHQgJHskLmljb25fd2hpdGV9YH1cblx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdE1vbmRheSB0byBGcmlkYXlcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLm1lbnV9PlxuXHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPk91ciBTZXJ2aWNlczwvaDU+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRMaW5rIG5iLjFcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0TGluayBuYi4yXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdExpbmsgbmIuM1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRMaW5rIG5iLjRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51fT5cblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5BYm91dCBVczwvaDU+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRBYm91dFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRCbG9nXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3QgdXMgMVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0IHVzIDJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgcHktbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29weXJpZ2h0fSBtYi1kZWZhdWx0IGZsZXhgfT5cblx0XHRcdFx0XHQ8cD5Db3B5cmlnaHQgMjAyMCBBbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5UZXJtcyBvZiBVc2U8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYmV0d2VlblwiPlxuXHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cblx0XHRcdFx0XHRcdFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXJcblx0XHRcdFx0XHRcdGRhcGlidXMgbGVvLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5zb2NpYWxfbWVkaWFfc21hbGx9PlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9va1wiPjwvaT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8veW91dHViZS5jb21cIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFiIGZhLXlvdXR1YmVcIj48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgYmFzZSwgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRoZWFkZXI6IHtcblx0XHRpbWFnZTogYCR7UFVCTElDX1VSTH0vaG9tZS5qcGVnYCxcblx0XHRoZWFkaW5nOiAnV2UgYXJlIGRpZ2l0YWwgYWdlbmN5LicsXG5cdFx0ZGVzY3JpcHRpb246ICdDUkVBVElWRSBNSU5ELCBDUkVBVElWRSBXT1JLUy4nLFxuXHRcdGFjdGlvbjoge1xuXHRcdFx0dGV4dDogJ2dldHRpbmcgc3RhcnRlZCcsXG5cdFx0fSxcblx0XHRjb2x1bW5zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYXMgZmEtcGFwZXItcGxhbmUnLFxuXHRcdFx0XHRoZWFkaW5nOiAnRnV0dXJlIENvbmNlcHQuJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmFzIGZhLWJyYWluJyxcblx0XHRcdFx0aGVhZGluZzogJ1RoZSBCaWcgSWRlYXMuJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmFzIGZhLWxpZ2h0YnVsYicsXG5cdFx0XHRcdGhlYWRpbmc6ICdDcmVhdGl2ZSBTb2x1dGlvbnMuJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHNlY3Rpb25zOiBbXG5cdFx0e1xuXHRcdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXG5cdFx0XHRkZXNjcmlwdGlvbjogJ291ciBzZXJ2aWNlcyBmb3IgY2xpZW50cycsXG5cdFx0XHRpc0NvbnRhaW5lcjogdHJ1ZSxcblx0XHRcdGhhc0RlZmF1bHRDb2x1bW5zOiB0cnVlLFxuXHRcdFx0Y29sdW1uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1jaGFydC1iYXInLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdEaWdpdGFsIFN0cmF0ZWd5Jyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1wZW5jaWwtYWx0Jyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVVggRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtdXNlci1mcmllbmRzJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVUkgRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtZ2xvYmUnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdTb2NpYWwgTWVkaWEnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWJvb2ttYXJrJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnRGVzaWduIENvbmNlcHQnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLWNoYXJ0LWFyZWEnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdNZWRpYSBQYWlyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGhlYWRpbmc6ICdXb3Jrcy4nLFxuXHRcdFx0ZGVzY3JpcHRpb246IFwidGhpbmdzIHdlJ3ZlIG1hZGVcIixcblx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHR0ZXh0OiAndmlldyBhbGwnLFxuXHRcdFx0fSxcblx0XHRcdGNvbHVtbnNUeXBlOiAnd29ya3MnLFxuXHRcdFx0Y29sdW1uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1jaGFydC1iYXInLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdEaWdpdGFsIFN0cmF0ZWd5Jyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1wZW5jaWwtYWx0Jyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVVggRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtdXNlci1mcmllbmRzJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVUkgRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtZ2xvYmUnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdTb2NpYWwgTWVkaWEnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWJvb2ttYXJrJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnRGVzaWduIENvbmNlcHQnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLWNoYXJ0LWFyZWEnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdNZWRpYSBQYWlyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxufTtcbiIsImltcG9ydCB7IGJhc2UsIFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XG5cbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxNZWRpYSA9IFtcblx0e1xuXHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXG5cdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vaycsXG5cdH0sXG5cdHtcblx0XHRsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbScsXG5cdFx0aWNvbjogJ2ZhYiBmYS10d2l0dGVyJyxcblx0fSxcblx0e1xuXHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxuXHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcblx0fSxcblx0e1xuXHRcdGxpbms6ICdodHRwczovL3lvdXR1YmUuY29tJyxcblx0XHRpY29uOiAnZmFiIGZhLXlvdXR1YmUnLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGlucXVpcnkgPSB7XG5cdGltYWdlOiBQVUJMSUNfVVJMICsgJy9iYWNrZ3JvdW5kLWZvb3Rlci5qcGcnLFxuXHRzb2NpYWxNZWRpYSxcblx0aGVhZGluZzogJ0hhdmUgYW55IHByb2plY3QgaW4gbWluZD8nLFxuXHRhY3Rpb246IHtcblx0XHR0ZXh0OiAnbWFrZSBpbnF1aXJ5Jyxcblx0fSxcbn07XG5cbmV4cG9ydCBjb25zdCBwYWdlcyA9IHtcblx0aG9tZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bG9nbzoge1xuXHRcdGltYWdlOiBgJHtQVUJMSUNfVVJMfS9sb2dvLnBuZ2AsXG5cdFx0cm91dGU6IGJhc2UsXG5cdH0sXG5cdG1lbnU6IFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnaG9tZScsXG5cdFx0XHRyb3V0ZTogYmFzZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdzZXJ2aWNlcycsXG5cdFx0XHRyb3V0ZTogYCR7YmFzZX1zZXJ2aWNlcy9gLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3dvcmtzJyxcblx0XHRcdHJvdXRlOiBgJHtiYXNlfXdvcmtzL2AsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnYWJvdXQnLFxuXHRcdFx0cm91dGU6IGAke2Jhc2V9YWJvdXQvYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdibG9nJyxcblx0XHRcdHJvdXRlOiBgJHtiYXNlfWJsb2cvYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjb250YWN0IHVzJyxcblx0XHRcdHJvdXRlOiBgJHtiYXNlfWNvbnRhY3QtdXMvYCxcblx0XHRcdGlzQnV0dG9uOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG5cdGZvb3Rlcjoge1xuXHRcdGlucXVpcnksXG5cdFx0Y29sdW1uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRsb2dvOiB7XG5cdFx0XHRcdFx0aW1hZ2U6IGAke1BVQkxJQ19VUkx9L2xvZ28ucG5nYCxcblx0XHRcdFx0XHRyb3V0ZTogYmFzZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdXZSBhcmUgbW9yZSB0aGFuIGEgZGlnaXRhbCBhZ2VuY3knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWVudU5hbWU6ICdDb250YWN0IFVzJyxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsaW5rOiAndGVsOjA3Mjc3MjkwNjgnLFxuXHRcdFx0XHRcdFx0dGV4dDogJzA3Mjc3MjkwNjgnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1waG9uZS12b2x1bWUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGluazogJ21haWx0bzptb2NhbnUuYWxleGFuZHJ1MjBAeWFob28ucm8nLFxuXHRcdFx0XHRcdFx0dGV4dDogJ21vY2FudS5hbGV4YW5kcnUyMEB5YWhvby5ybycsXG5cdFx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWVudmVsb3BlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6ICdDb25zdGFudHphLCBSb21hbmlhJyxcblx0XHRcdFx0XHRcdGljb246ICdmYXMgZmEtbWFwLW1hcmtlci1hbHQnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogJ01vbmRheSB0byBGcmlkYXknLFxuXHRcdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1jYWxlbmRhci1hbHQnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtZW51TmFtZTogJ091ciBTZXJ2aWNlcycsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cm91dGU6IGJhc2UsXG5cdFx0XHRcdFx0XHR0ZXh0OiAnTGluayBuYi4xJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlLFxuXHRcdFx0XHRcdFx0dGV4dDogJ0xpbmsgbmIuMicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3V0ZTogYmFzZSxcblx0XHRcdFx0XHRcdHRleHQ6ICdMaW5rIG5iLjMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cm91dGU6IGJhc2UsXG5cdFx0XHRcdFx0XHR0ZXh0OiAnTGluayBuYi40Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWVudU5hbWU6ICdBYm91dCBVcycsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cm91dGU6IGJhc2UgKyAnYWJvdXQnLFxuXHRcdFx0XHRcdFx0dGV4dDogJ0Fib3V0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlICsgJ2Jsb2cnLFxuXHRcdFx0XHRcdFx0dGV4dDogJ0Jsb2cnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cm91dGU6IGJhc2UgKyAnd29ya3MnLFxuXHRcdFx0XHRcdFx0dGV4dDogJ1dvcmtzJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlICsgJ2NvbnRhY3QtdXMnLFxuXHRcdFx0XHRcdFx0dGV4dDogJ0NvbnRhY3QgdXMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0Y29weXJpZ2h0OiB7XG5cdFx0XHR0ZXh0OiAnQ29weXJpZ2h0IDIwMjAgQWxsIHJpZ2h0cyByZXNlcnZlZCcsXG5cdFx0XHRwcml2YWN5OiB7XG5cdFx0XHRcdHJvdXRlOiBiYXNlICsgJ3ByaXZhY3knLFxuXHRcdFx0XHR0ZXh0OiAnUHJpdmFjeSBQb2xpY3knLFxuXHRcdFx0fSxcblx0XHRcdHByaXZhY3k6IHtcblx0XHRcdFx0cm91dGU6IGJhc2UgKyAndGVybXMnLFxuXHRcdFx0XHR0ZXh0OiAnVGVybXMgb2YgVXNlJyxcblx0XHRcdH0sXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXIgZGFwaWJ1cyBsZW8uJyxcblx0XHRcdHNvY2lhbE1lZGlhLFxuXHRcdH0sXG5cdH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xuXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnfmMvRmxhbWluZ28vTmF2aWdhdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ35jL0ZsYW1pbmdvL0Zvb3Rlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vU2VydmljZXMnO1xuXG5pbXBvcnQgZGF0YSwgeyBwYWdlcyB9IGZyb20gJy4vZGIvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgaW5kZXg6IHRydWUsIGVsZW1lbnQ6IDxIb21lIHsuLi5wYWdlcy5ob21lfSAvPiB9LFxuXHR7XG5cdFx0cGF0aDogYHNlcnZpY2VzL2AsXG5cdFx0ZWxlbWVudDogPFNlcnZpY2VzIC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogYHdvcmtzL2AsXG5cdFx0ZWxlbWVudDogPFNlcnZpY2VzIC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogYGFib3V0L2AsXG5cdFx0ZWxlbWVudDogPFNlcnZpY2VzIC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogYGJsb2cvYCxcblx0XHRlbGVtZW50OiA8U2VydmljZXMgLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiBgY29udGFjdC11cy9gLFxuXHRcdGVsZW1lbnQ6IDxTZXJ2aWNlcyAvPixcblx0fSxcbl07XG5cbmNvbnN0IEZsYW1pbmdvID0gKCkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFdlYkZvbnQubG9hZCh7XG5cdFx0XHRnb29nbGU6IHtcblx0XHRcdFx0ZmFtaWxpZXM6IFsnUG9wcGluczo0MDAsODAwJywgJ1JvYm90bzo0MDAnXSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRpbXBvcnQoJy4vc3R5bGUuc2NzcycpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8Yj5cblx0XHRcdDxOYXZpZ2F0aW9uIGxvZ289e2RhdGEubG9nb30gbWVudT17ZGF0YS5tZW51fSAvPlxuXHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PEZvb3RlciB7Li4uZGF0YS5mb290ZXJ9IC8+XG5cdFx0PC9iPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxhbWluZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVzLCBPdXRsZXQgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnfi9wYWdlcy9Ib21lJztcbmltcG9ydCBGbGFtaW5nbywgeyByb3V0ZXMgYXMgZmxhbWluZ29Sb3V0ZXMgfSBmcm9tICd+L3BhZ2VzL0ZsYW1pbmdvJztcblxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzJztcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7XG5cdFx0cGF0aDogYmFzZSxcblx0XHRlbGVtZW50OiA8SG9tZSAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6IGAke2Jhc2V9ZmxhbWluZ28vYCxcblx0XHRlbGVtZW50OiA8RmxhbWluZ28gLz4sXG5cdFx0Y2hpbGRyZW46IGZsYW1pbmdvUm91dGVzLFxuXHR9LFxuXTtcblxuY29uc3QgUm91dGVzID0gKCkgPT4gdXNlUm91dGVzKHJvdXRlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge307IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgUm91dGVzIGZyb20gJ34vcGFnZXMvUm91dGVzJztcblxuaW1wb3J0ICcuL2RlZmF1bHRzLmNzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PEJyb3dzZXJSb3V0ZXI+XG5cdFx0PFJvdXRlcyAvPlxuXHQ8L0Jyb3dzZXJSb3V0ZXI+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIiQiLCJCdXR0b24iLCJ0ZXh0IiwibGluayIsInNtYWxsIiwiZ2hvc3QiLCJjaGlsZHJlbiIsImJ1dHRvbl9zbWFsbCIsImJ1dHRvbiIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImJhc2UiLCJDb2x1bW4iLCJpY29uIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiY2xhc3NlcyIsImhhc1NlcGFyYXRvciIsImhvdmVyIiwidHlwZSIsImhvdmVyX2IiLCJob3Zlcl9iZyIsIkZsYW1pbmdvSG9tZSIsImhlYWRlciIsInNlY3Rpb25zIiwiaG9tZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwiYWN0aW9uIiwiY29sdW1ucyIsIm1hcCIsImNvbHVtbiIsImluZGV4Iiwic2VjdGlvbiIsImlzQ29udGFpbmVyIiwiaGFzRGVmYXVsdENvbHVtbnMiLCJrZXkiLCJjb2x1bW5zVHlwZSIsIndvcmsiLCJTZXJ2aWNlcyIsIkhvbWUiLCJwcm9qZWN0QmFzZSIsIlBVQkxJQ19VUkwiLCJjcmVhdGVSZWYiLCJTZWFyY2giLCJvbkNsb3NlIiwib25TZWFyY2giLCJpbnB1dFJlZiIsInNlYXJjaCIsImNsb3NlIiwic2VhcmNoX2lucHV0Iiwic2VhcmNoX2ljb24iLCJjdXJyZW50IiwidmFsdWUiLCJ1c2VTdGF0ZSIsInVzZU1hdGNoIiwidXNlUmVzb2x2ZWRQYXRoIiwiTmF2aWdhdGlvbiIsImxvZ28iLCJtZW51IiwiaGlkZVNlYXJjaCIsImlzU2VhcmNoT24iLCJvbkNoYW5nZVNlYXJjaFZpc2liaWxpdHkiLCJzZWFyY2hUZXJtIiwib25DaGFuZ2VTZWFyY2hUZXJtIiwic2F2ZVNlYXJjaFRlcm0iLCJ0ZXJtIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRpb24iLCJyb3V0ZSIsImxlbmd0aCIsIml0ZW0iLCJyZXNvbHZlZCIsIm1hdGNoIiwicGF0aCIsInBhdGhuYW1lIiwiZW5kIiwiaXNCdXR0b24iLCJuYW1lIiwibWVudV9pdGVtX2FjdGl2ZSIsIm1lbnVfaXRlbSIsInZhbCIsIklucXVpcnkiLCJzb2NpYWxNZWRpYSIsInNvY2lhbF9tZWRpYSIsIkZvb3RlciIsImlucXVpcnkiLCJjb3B5cmlnaHQiLCJmb290ZXIiLCJtZW51cyIsImljb25fd2hpdGUiLCJzb2NpYWxfbWVkaWFfc21hbGwiLCJwYWdlcyIsIm1lbnVOYW1lIiwiaXRlbXMiLCJwcml2YWN5IiwidXNlRWZmZWN0IiwiV2ViRm9udCIsIk91dGxldCIsImRhdGEiLCJyb3V0ZXMiLCJlbGVtZW50IiwiRmxhbWluZ28iLCJsb2FkIiwiZ29vZ2xlIiwiZmFtaWxpZXMiLCJ1c2VSb3V0ZXMiLCJmbGFtaW5nb1JvdXRlcyIsIlJvdXRlcyIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9