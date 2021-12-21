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
    to: "".concat(constants/* base */.u, "flamingo")
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
/******/ 		__webpack_require__.h = () => ("21f4f8a4a8fc56796157")
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
/******/ 			143: 0,
/******/ 			965: 0,
/******/ 			245: 0
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
    route: "".concat(base, "services")
  }, {
    name: 'works',
    route: "".concat(base, "works")
  }, {
    name: 'about',
    route: "".concat(base, "about")
  }, {
    name: 'blog',
    route: "".concat(base, "blog")
  }, {
    name: 'contact us',
    route: "".concat(base, "contact-us"),
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
  path: "services",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "works",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "about",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "blog",
  element: /*#__PURE__*/react.createElement(Services/* default */.Z, null)
}, {
  path: "contact-us",
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
  path: "".concat(constants/* base */.u, "flamingo"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTekM7QUFBNUMsSUFERCxlQUVDLG9CQUFDLCtCQUFELE9BRkQsZUFHQyxvQkFBQyxlQUFELEVBQVl5QyxXQUFaLENBSEQsQ0FERDtBQU9BLENBbEJEOztBQW9CQSxxREFBZUcsUUFBZjs7QUMxREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLElBQU1GLGFBQU0sR0FBRyxDQUNkO0FBQ0MxQixFQUFBQSxJQUFJLEVBQUVoRSxxQkFEUDtBQUVDMkYsRUFBQUEsT0FBTyxlQUFFLG9CQUFDLG1CQUFEO0FBRlYsQ0FEYyxFQUtkO0FBQ0MzQixFQUFBQSxJQUFJLFlBQUtoRSxxQkFBTCxhQURMO0FBRUMyRixFQUFBQSxPQUFPLGVBQUUsb0JBQUMsY0FBRCxPQUZWO0FBR0NsRyxFQUFBQSxRQUFRLEVBQUV3RyxNQUFjQTtBQUh6QixDQUxjLENBQWY7O0FBWUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUFNRixzQ0FBUyxDQUFDTixhQUFELENBQWY7QUFBQSxDQUFmOztBQUVBLG1EQUFlUSxNQUFmOztBQ3RCQTtBQUNBLCtDQUFlLEVBQUU7O0FDRGpCO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQUMsZ0JBQUEsZUFDQyxvQkFBQyxzQ0FBRCxxQkFDQyxvQkFBQyxZQUFELE9BREQsQ0FERCxFQUlDRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9CdXR0b24vc3R5bGUuc2Nzcz84MTE4Iiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9Ib21lL3N0eWxlLnNjc3M/ODMyYiIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0NvbHVtbi9zdHlsZS5zY3NzPzk2M2EiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Db2x1bW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvcGFnZXMvRmxhbWluZ28vSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9TZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9Ib21lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQnV0dG9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Db2x1bW4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvb3Rlci9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vSW5xdWlyeS9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vTmF2aWdhdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vU2VhcmNoTW9kYWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9Ib21lL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL25vZGVfbW9kdWxlcy93ZWJmb250bG9hZGVyL3dlYmZvbnRsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZGVtb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kZW1vcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9TZWFyY2hNb2RhbC9zdHlsZS5zY3NzP2Y0NjgiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9TZWFyY2hNb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL05hdmlnYXRpb24vc3R5bGUuc2Nzcz8wNTgwIiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vTmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0lucXVpcnkvc3R5bGUuc2Nzcz9jMWU5Iiwid2VicGFjazovL2RlbW9zLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vSW5xdWlyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvb3Rlci9zdHlsZS5zY3NzPzVhNGUiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtb3MvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIvaG9tZS5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9wYWdlcy9GbGFtaW5nby9kYi9kYXRhLmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL2luZGV4LmpzIiwid2VicGFjazovL2RlbW9zLy4vc3JjL3BhZ2VzL1JvdXRlcy5qcyIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9kZWZhdWx0cy5jc3M/MjYwZCIsIndlYnBhY2s6Ly9kZW1vcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgQnV0dG9uID0gKHtcblx0dGV4dCA9ICcnLFxuXHRsaW5rID0gJycsXG5cdHNtYWxsID0gZmFsc2UsXG5cdGdob3N0ID0gZmFsc2UsXG5cdGNoaWxkcmVuLFxufSkgPT4gKFxuXHQ8TGlua1xuXHRcdHRvPXtsaW5rfVxuXHRcdGNsYXNzTmFtZT17IWdob3N0ID8gKHNtYWxsID8gJC5idXR0b25fc21hbGwgOiAkLmJ1dHRvbikgOiAnJ31cblx0PlxuXHRcdHt0ZXh0IHx8IGNoaWxkcmVufVxuXHQ8L0xpbms+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/ICcvZGVtb3MvJyA6ICcvJztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgQ29sdW1uID0gKHtcblx0aWNvbiA9IG51bGwsXG5cdGhlYWRpbmcgPSBudWxsLFxuXHRkZXNjcmlwdGlvbiA9IG51bGwsXG5cdGNsYXNzZXMgPSAnJyxcblx0aGFzU2VwYXJhdG9yID0gZmFsc2UsXG5cdGhvdmVyID0gbnVsbCxcblx0dHlwZSA9IG51bGwsXG59KSA9PiAoXG5cdDxiXG5cdFx0Y2xhc3NOYW1lPXtgJHtjbGFzc2VzfSAke1xuXHRcdFx0aG92ZXIgPT09ICdib3JkZXInXG5cdFx0XHRcdD8gJC5ob3Zlcl9iXG5cdFx0XHRcdDogaG92ZXIgPT09ICdiYWNrZ3JvdW5kJ1xuXHRcdFx0XHQ/ICQuaG92ZXJfYmdcblx0XHRcdFx0OiAnJ1xuXHRcdH1gfVxuXHQ+XG5cdFx0e2ljb24gJiYgPGkgY2xhc3NOYW1lPXtgJHtpY29ufSBpY29uLWdyZWVuIG1iLWRlZmF1bHRgfT48L2k+fVxuXHRcdHtoZWFkaW5nICYmIDxoMyBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e2hlYWRpbmd9PC9oMz59XG5cdFx0e2hhc1NlcGFyYXRvciAmJiA8YiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIiAvPn1cblx0XHR7ZGVzY3JpcHRpb24gJiYgPHA+e2Rlc2NyaXB0aW9ufTwvcD59XG5cdDwvYj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnfmMvRmxhbWluZ28vQnV0dG9uJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnfmMvRmxhbWluZ28vQ29sdW1uJztcblxuY29uc3QgRmxhbWluZ29Ib21lID0gKHsgaGVhZGVyID0ge30sIHNlY3Rpb25zID0gW10gfSkgPT4gKFxuXHQ8YiBjbGFzc05hbWU9eyQuaG9tZX0+XG5cdFx0PGJcblx0XHRcdGNsYXNzTmFtZT17JC5oZWFkZXJ9XG5cdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtoZWFkZXIuaW1hZ2V9KWAgfX1cblx0XHQ+XG5cdFx0XHQ8YiBjbGFzc05hbWU9XCJjb250YWluZXIgbWItbFwiPlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJ3aWR0aC01MFwiPlxuXHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1tXCI+e2hlYWRlci5kZXNjcmlwdGlvbn08L2g1PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtYi1tXCI+e2hlYWRlci5oZWFkaW5nfTwvaDE+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0bGluaz17aGVhZGVyLmFjdGlvbi5saW5rfVxuXHRcdFx0XHRcdFx0dGV4dD17aGVhZGVyLmFjdGlvbi50ZXh0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb2x1bW5zLTNcIj5cblx0XHRcdFx0XHR7aGVhZGVyLmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb2x1bW5cIiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0PENvbHVtblxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW59XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz1cImJnLWdyZXkgcC1tXCJcblx0XHRcdFx0XHRcdFx0XHRoYXNTZXBhcmF0b3Jcblx0XHRcdFx0XHRcdFx0XHRob3Zlcj1cImJvcmRlclwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHQ8L2I+XG5cdFx0e3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcblx0XHRcdDxiXG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7aW5kZXggJSAyID8gJ2JnLWdyZXknIDogJ2JnLWJsdWUnfSBzZWN0aW9uYH1cblx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdD5cblx0XHRcdFx0PGIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLWxcIj5cblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9e3NlY3Rpb24uYWN0aW9uID8gJ2ZsZXgtYmV0d2VlbicgOiAnJ30+XG5cdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0e3NlY3Rpb24uaGVhZGluZ31cblx0XHRcdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHRcdFx0PGg1PntzZWN0aW9uLmRlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0XHR7c2VjdGlvbi5hY3Rpb24gJiYgKFxuXHRcdFx0XHRcdFx0XHQ8Yj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtzZWN0aW9uLmFjdGlvbi50ZXh0fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGluaz17c2VjdGlvbi5hY3Rpb24ubGlua31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0PC9iPlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9e3NlY3Rpb24uaXNDb250YWluZXIgPyAnY29udGFpbmVyJyA6ICcnfT5cblx0XHRcdFx0XHR7c2VjdGlvbi5oYXNEZWZhdWx0Q29sdW1ucyA/IChcblx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbi5jb2x1bW5zLm1hcCgoY29sdW1uLCBrZXkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb2x1bW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmNvbHVtbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz1cImJnLWdyZXkgcC1tXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aG92ZXI9XCJiYWNrZ3JvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0KSA6IHNlY3Rpb24uY29sdW1uc1R5cGUgPT09ICd3b3JrcycgPyAoXG5cdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9eyQud29ya30+XG5cdFx0XHRcdFx0XHRcdHtzZWN0aW9uLmNvbHVtbnMubWFwKChjb2x1bW4sIGtleSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17JC53b3JrfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb2x1bW4gey4uLmNvbHVtbn0gdHlwZT1cIndvcmtcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdDwvYj5cblx0XHRcdDwvYj5cblx0XHQpKX1cblx0PC9iPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmxhbWluZ29Ib21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiA8Yj5zZXJ2aWNlczwvYj47XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG5cdDxiPlxuXHRcdGhvbWVcblx0XHQ8TGluayB0bz17YCR7YmFzZX1mbGFtaW5nb2B9PkZsYW1pbmdvPC9MaW5rPlxuXHQ8L2I+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXBhbWt3OXdqWlUzWjhuT3c4VkZ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MnB4IHNvbGlkIHZhcigtLXRlYWwpO2JvcmRlci1yYWRpdXM6dmFyKC0tcmFkaXVzKTtjb2xvcjojZmZmO2ZvbnQtZmFtaWx5OnZhcigtLWZhbWlseS1hY2NlbnQpO2ZvbnQtd2VpZ2h0OjYwMDtwYWRkaW5nOnZhcigtLXBhZGRpbmcpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcixjb2xvcn0uYXBhbWt3OXdqWlUzWjhuT3c4VkY6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10ZWFsKTtjb2xvcjp2YXIoLS1ncmV5KX0uSFZjX3RwNDhqM200Q2tudmVLbk17cGFkZGluZzp2YXIoLS1wYWRkaW5nLXNtYWxsKTt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0J1dHRvbi9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUtDLDRCQUFBLENBSkEsNEJBQUEsQ0FTQSwyQkFBQSxDQU5BLFVBQUEsQ0FJQSxnQ0FBQSxDQUNBLGVBQUEsQ0FQQSxzQkFBQSxDQUNBLHdCQUFBLENBR0EsNEJBQUEsQ0FDQSwwQ0FHQSxDQUVBLDRCQUNDLDRCQUFBLENBQ0EsaUJBQUEsQ0FJRixzQkFFQyw0QkFBQSxDQUNBLHlCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idXR0b24ge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlYWwpO1xcblxcdHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mYW1pbHktYWNjZW50KTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0XFx0Y29sb3I6IHZhcigtLWdyZXkpO1xcblxcdH1cXG59XFxuXFxuLmJ1dHRvbl9zbWFsbCB7XFxuXFx0Y29tcG9zZXM6IGJ1dHRvbjtcXG5cXHRwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLXNtYWxsKTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYXBhbWt3OXdqWlUzWjhuT3c4VkZcIixcblx0XCJidXR0b25fc21hbGxcIjogXCJIVmNfdHA0OGozbTRDa252ZUtuTSBhcGFta3c5d2paVTNaOG5PdzhWRlwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qS2g5QWdUZzJtYTVzdV96YlJJWHtib3JkZXI6M3B4IHNvbGlkIHRyYW5zcGFyZW50O3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3JkZXItY29sb3J9LmpLaDlBZ1RnMm1hNXN1X3piUklYOmhvdmVye2JvcmRlci1jb2xvcjp2YXIoLS10ZWFsKX0uZDd0YWw4MDRoOU9lNDdndW9wc3J7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgdmFyKC0td2hpdGUpO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yfS5kN3RhbDgwNGg5T2U0N2d1b3BzciAqe3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpjb2xvcn0uZDd0YWw4MDRoOU9lNDdndW9wc3I6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10ZWFsKX0uZDd0YWw4MDRoOU9lNDdndW9wc3I6aG92ZXIgKntjb2xvcjp2YXIoLS1ncmV5KX0uczlOalREQ2FvNlpiaGRNQnYzOUx7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1zaXplOmNvdmVyfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0NvbHVtbi9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUdDLDRCQUFBLENBRkEsNEJBQUEsQ0FDQSxnQ0FDQSxDQUVBLDRCQUNDLHdCQUFBLENBSUYsc0JBR0Msb0NBQUEsQ0FGQSw0QkFBQSxDQUNBLG9DQUNBLENBRUEsd0JBQ0MsNEJBQUEsQ0FDQSx5QkFBQSxDQUdELDRCQUNDLDRCQUFBLENBRUEsOEJBQ0MsaUJBQUEsQ0FLSCxzQkFDQyx1QkFBQSxDQUNBLHFCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob3Zlcl9iIHtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItY29sb3I7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFxuXFx0Jjpob3ZlciB7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS10ZWFsKTtcXG5cXHR9XFxufVxcblxcbi5ob3Zlcl9iZyB7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcXG5cXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcblxcdCoge1xcblxcdFxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdFxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xcblxcdH1cXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsKTtcXG5cXG5cXHRcXHQqIHtcXG5cXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JleSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLndvcmsge1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJob3Zlcl9iXCI6IFwiaktoOUFnVGcybWE1c3VfemJSSVhcIixcblx0XCJob3Zlcl9iZ1wiOiBcImQ3dGFsODA0aDlPZTQ3Z3VvcHNyXCIsXG5cdFwid29ya1wiOiBcInM5TmpURENhbzZaYmhkTUJ2MzlMXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFjUTZuOUx2Rl9qMWdCamQ5TmFaIGg1e2NvbG9yOnZhcigtLXdoaXRlKX0uSTNxVGVPN2d1WVlNcG81X09BT0x7Zm9udC1zaXplOnZhcigtLXNpemUtbCk7bWFyZ2luLXJpZ2h0OnZhcigtLXNwYWNlLWRlZmF1bHQpfS5QaFFyZ0RqeGdVemQyZUFMdkFGTHtmbGV4LWdyb3c6MX0uQWNRNm45THZGX2oxZ0JqZDlOYVogLlBoUXJnRGp4Z1V6ZDJlQUx2QUZMOmZpcnN0LWNoaWxke2ZsZXgtZ3JvdzozfS5BY1E2bjlMdkZfajFnQmpkOU5hWiAubExZMHpLcFZVcGV5aXc2V2gyRHp7ZGlzcGxheTpmbGV4fS53TFBWVURqOWU0cUJwWVVibHV2RiBhe21hcmdpbi1sZWZ0OnZhcigtLXNwYWNlLW0pO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uUjdKUVR5X3FsY2lNNW1yb0F4VUsgYXtmb250LXNpemU6dmFyKC0tc2l6ZS1sKTttYXJnaW46MCBjYWxjKHZhcigtLXNwYWNlLWRlZmF1bHQpLzIpO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dH0uUjdKUVR5X3FsY2lNNW1yb0F4VUsgYTpob3Zlcntjb2xvcjp2YXIoLS10ZWFsKX0ua2FuN3lDYUVGQUtiQnQ0NGVhQ3QgaW1ne3dpZHRoOjEwMHB4fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvb3Rlci9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUNDLGtCQUFBLENBRUQsc0JBQ0MsdUJBQUEsQ0FDQSxpQ0FBQSxDQUVELHNCQUNDLFdBQUEsQ0FFRCx3REFDQyxXQUFBLENBRUQsNENBQ0MsWUFBQSxDQUVELHdCQUNDLDBCQUFBLENBQ0Esd0JBQUEsQ0FFRCx3QkFFQyx1QkFBQSxDQURBLHFDQUFBLENBRUEsOEJBQUEsQ0FFQSw4QkFDQyxpQkFBQSxDQUdGLDBCQUNDLFdBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciBoNSB7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmljb25fd2hpdGUge1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS1sKTtcXG5cXHRtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcbn1cXG4ubWVudSB7XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG4uZm9vdGVyIC5tZW51OmZpcnN0LWNoaWxkIHtcXG5cXHRmbGV4LWdyb3c6IDM7XFxufVxcbi5mb290ZXIgLm1lbnVzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29weXJpZ2h0IGEge1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjZS1tKTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uc29jaWFsX21lZGlhX3NtYWxsIGEge1xcblxcdG1hcmdpbjogMCBjYWxjKHZhcigtLXNwYWNlLWRlZmF1bHQpIC8gMik7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zaXplLWwpO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS10ZWFsKTtcXG5cXHR9XFxufVxcbi5sb2dvIGltZyB7XFxuXFx0d2lkdGg6IDEwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogXCJBY1E2bjlMdkZfajFnQmpkOU5hWlwiLFxuXHRcImljb25fd2hpdGVcIjogXCJJM3FUZU83Z3VZWU1wbzVfT0FPTFwiLFxuXHRcIm1lbnVcIjogXCJQaFFyZ0RqeGdVemQyZUFMdkFGTFwiLFxuXHRcIm1lbnVzXCI6IFwibExZMHpLcFZVcGV5aXc2V2gyRHpcIixcblx0XCJjb3B5cmlnaHRcIjogXCJ3TFBWVURqOWU0cUJwWVVibHV2RlwiLFxuXHRcInNvY2lhbF9tZWRpYV9zbWFsbFwiOiBcIlI3SlFUeV9xbGNpTTVtcm9BeFVLXCIsXG5cdFwibG9nb1wiOiBcImthbjd5Q2FFRkFLYkJ0NDRlYUN0XCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkF2RllkMVlya1JTVHFYY05XeHphIGF7Zm9udC1zaXplOnZhcigtLXNpemUteGwpO21hcmdpbjowIHZhcigtLXNwYWNlLWRlZmF1bHQpO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dH0uQXZGWWQxWXJrUlNUcVhjTld4emEgYTpob3Zlcntjb2xvcjp2YXIoLS10ZWFsKX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9JbnF1aXJ5L3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0JBRUMsd0JBQUEsQ0FEQSw2QkFBQSxDQUVBLDhCQUFBLENBRUEsOEJBQ0MsaUJBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvY2lhbF9tZWRpYSBhIHtcXG5cXHRtYXJnaW46IDAgdmFyKC0tc3BhY2UtZGVmYXVsdCk7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zaXplLXhsKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzb2NpYWxfbWVkaWFcIjogXCJBdkZZZDFZcmtSU1RxWGNOV3h6YVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5IX215MUlUVzdISkE1b3J4N21BTnthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjayk7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2xlZnQ6MDtwYWRkaW5nOnZhcigtLXNwYWNlLWRlZmF1bHQpIHZhcigtLXNwYWNlLW0pO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7dG9wOjB9Lnp6Ql9xVDFNX25TbW4xTGJsd19RIGltZ3t3aWR0aDoxNTBweH0ualJXc2xnSDNJa1JLNElrUFd5U1F7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleH0uQjVxc0FFVmZqcEtOYWZyZ2NWS0F7Zm9udC1mYW1pbHk6dmFyKC0tZmFtaWx5LWFjY2VudCk7Zm9udC13ZWlnaHQ6ODAwO3BhZGRpbmc6dmFyKC0tcGFkZGluZyk7cG9zaXRpb246cmVsYXRpdmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5CNXFzQUVWZmpwS05hZnJnY1ZLQTpiZWZvcmV7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgdmFyKC0tdGVhbCk7Ym90dG9tOi0ycHg7Y29udGVudDpcXFwiXFxcIjtsZWZ0OjA7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7d2lkdGg6MTAwJX0uQjVxc0FFVmZqcEtOYWZyZ2NWS0E6aG92ZXI6YmVmb3Jle29wYWNpdHk6MX0uZUh3Yl9mUlJXdjlkVjgycmhRVkh7fS5lSHdiX2ZSUld2OWRWODJyaFFWSDpiZWZvcmV7b3BhY2l0eToxfS5VZHlVeXJsM250aFlWWnFZVm0yZntjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOnZhcigtLXNwYWNlLWRlZmF1bHQpO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpjb2xvcn0uVWR5VXlybDNudGhZVlpxWVZtMmY6aG92ZXJ7Y29sb3I6dmFyKC0tdGVhbCl9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vTmF2aWdhdGlvbi9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQVFDLGtCQUFBLENBSEEsNkJBQUEsQ0FFQSxZQUFBLENBRUEsNkJBQUEsQ0FMQSxNQUFBLENBRUEsMkNBQUEsQ0FMQSxjQUFBLENBRUEsT0FBQSxDQURBLEtBT0EsQ0FHRCwwQkFDQyxXQUFBLENBR0Qsc0JBRUMsa0JBQUEsQ0FEQSxZQUNBLENBR0Qsc0JBR0MsZ0NBQUEsQ0FDQSxlQUFBLENBRkEsc0JBQUEsQ0FHQSxpQkFBQSxDQUpBLHdCQUlBLENBRUEsNkJBT0MsbUNBQUEsQ0FGQSxXQUFBLENBSkEsVUFBQSxDQUVBLE1BQUEsQ0FLQSxTQUFBLENBTkEsaUJBQUEsQ0FFQSxPQUFBLENBS0EsNEJBQUEsQ0FDQSwyQkFBQSxDQUpBLFVBSUEsQ0FHRCxtQ0FDQyxTQUFBLENBSUYsc0JBQ0MsQ0FFQSw2QkFDQyxTQUFBLENBSUYsc0JBSUMsY0FBQSxDQUhBLDRCQUFBLENBQ0EsNEJBQUEsQ0FDQSx5QkFDQSxDQUVBLDRCQUNDLGlCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXZpZ2F0aW9uIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdHBhZGRpbmc6IHZhcigtLXNwYWNlLWRlZmF1bHQpIHZhcigtLXNwYWNlLW0pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2dvIGltZyB7XFxuXFx0d2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9pdGVtIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mYW1pbHktYWNjZW50KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXHQmOmJlZm9yZSB7XFxuXFx0XFx0Y29udGVudDogJyc7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0Ym90dG9tOiAtMnB4O1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdFxcdHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxuXFx0fVxcblxcblxcdCY6aG92ZXI6YmVmb3JlIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuLm1lbnVfaXRlbV9hY3RpdmUge1xcblxcdGNvbXBvc2VzOiBtZW51X2l0ZW07XFxuXFxuXFx0JjpiZWZvcmUge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG4uc2VhcmNoX2ljb24ge1xcblxcdHBhZGRpbmc6IHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJuYXZpZ2F0aW9uXCI6IFwiSF9teTFJVFc3SEpBNW9yeDdtQU5cIixcblx0XCJsb2dvXCI6IFwienpCX3FUMU1fblNtbjFMYmx3X1FcIixcblx0XCJtZW51XCI6IFwialJXc2xnSDNJa1JLNElrUFd5U1FcIixcblx0XCJtZW51X2l0ZW1cIjogXCJCNXFzQUVWZmpwS05hZnJnY1ZLQVwiLFxuXHRcIm1lbnVfaXRlbV9hY3RpdmVcIjogXCJlSHdiX2ZSUld2OWRWODJyaFFWSCBCNXFzQUVWZmpwS05hZnJnY1ZLQVwiLFxuXHRcInNlYXJjaF9pY29uXCI6IFwiVWR5VXlybDNudGhZVlpxWVZtMmZcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQzQxVWU1OEhVb2NnTnZmcW13RFN7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tb3ZlcmxheSk7Ym90dG9tOjA7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bGVmdDowO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7dG9wOjB9LkxjeDBFd3VFcHNjNDZpMmsxVDVke2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTp2YXIoLS1zaXplLXhsKTtsaW5lLWhlaWdodDoxO3BhZGRpbmc6dmFyKC0tc3BhY2UtZGVmYXVsdCk7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tc3BhY2UtbSk7dG9wOnZhcigtLXNwYWNlLWRlZmF1bHQpO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpjb2xvcn0uTGN4MEV3dUVwc2M0NmkyazFUNWQ6aG92ZXJ7Y29sb3I6dmFyKC0tdGVhbCl9LlNSQU1wWnNqdEZtRFlFcVB5OWR2e2ZsZXgtZ3JvdzoxO21heC13aWR0aDo2MDBweDtwb3NpdGlvbjpyZWxhdGl2ZX0uQzQxVWU1OEhVb2NnTnZmcW13RFMgaW5wdXR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS13aGl0ZSk7Zm9udC1zaXplOnZhcigtLXNpemUtbCk7cGFkZGluZzp2YXIoLS1zcGFjZS1kZWZhdWx0KSBjYWxjKHZhcigtLXNwYWNlLWRlZmF1bHQpICsgdmFyKC0tc3BhY2UtbSkpIHZhcigtLXNwYWNlLWRlZmF1bHQpIHZhcigtLXNwYWNlLWRlZmF1bHQpO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTpib3JkZXItY29sb3I7d2lkdGg6MTAwJX0uQzQxVWU1OEhVb2NnTnZmcW13RFMgaW5wdXQ6Zm9jdXN7Ym9yZGVyOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGVhbCl9LkM0MVVlNThIVW9jZ052ZnFtd0RTIGlucHV0LmMyazlmVXJTZ25jV3NJSkdTemhIe291dGxpbmU6bm9uZX0uQzQxVWU1OEhVb2NnTnZmcW13RFMgaW5wdXQ6Zm9jdXMtdmlzaWJsZXtvdXRsaW5lOm5vbmV9LnEycmN6eTJRVHFEclF1bUhsdWxne2JvdHRvbTp2YXIoLS1zcGFjZS1kZWZhdWx0KTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6dmFyKC0tc2l6ZS1sKTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDp2YXIoLS1zcGFjZS1kZWZhdWx0KTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3J9LnEycmN6eTJRVHFEclF1bUhsdWxnOmhvdmVye2NvbG9yOnZhcigtLXRlYWwpfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL1NlYXJjaE1vZGFsL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBU0Msa0JBQUEsQ0FIQSwrQkFBQSxDQUhBLFFBQUEsQ0FJQSxZQUFBLENBQ0Esc0JBQUEsQ0FKQSxNQUFBLENBSEEsY0FBQSxDQUlBLE9BQUEsQ0FIQSxLQU9BLENBR0Qsc0JBT0MsY0FBQSxDQUZBLHdCQUFBLENBQ0EsYUFBQSxDQUZBLDRCQUFBLENBSEEsaUJBQUEsQ0FFQSxvQkFBQSxDQURBLHdCQUFBLENBTUEsNEJBQUEsQ0FDQSx5QkFBQSxDQUVBLDRCQUNDLGlCQUFBLENBSUYsc0JBRUMsV0FBQSxDQURBLGVBQUEsQ0FFQSxpQkFBQSxDQUdELDRCQVNDLDRCQUFBLENBRkEsUUFBQSxDQUNBLG9DQUFBLENBTkEsdUJBQUEsQ0FJQSxrSEFBQSxDQUtBLDRCQUFBLENBQ0EsZ0NBQUEsQ0FYQSxVQVdBLENBRUEsa0NBQ0MsUUFBQSxDQUNBLG1DQUFBLENBRUQsaURBQ0MsWUFBQSxDQURELDBDQUNDLFlBQUEsQ0FJRixzQkFJQywyQkFBQSxDQUdBLGNBQUEsQ0FMQSx1QkFBQSxDQURBLGlCQUFBLENBRUEsMEJBQUEsQ0FFQSw0QkFBQSxDQUNBLHlCQUNBLENBRUEsNEJBQ0MsaUJBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlYXJjaCB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogdmFyKC0tc3BhY2UtZGVmYXVsdCk7XFxuXFx0cmlnaHQ6IHZhcigtLXNwYWNlLW0pO1xcblxcdHBhZGRpbmc6IHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS14bCk7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xcblxcblxcdCY6aG92ZXIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS10ZWFsKTtcXG5cXHR9XFxufVxcblxcbi5zZWFyY2hfaW5wdXQge1xcblxcdG1heC13aWR0aDogNjAwcHg7XFxuXFx0ZmxleC1ncm93OiAxO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zaXplLWwpO1xcblxcdHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2UtZGVmYXVsdCk7XFxuXFx0cGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNlLWRlZmF1bHQpICsgdmFyKC0tc3BhY2UtbSkpO1xcblxcdGJvcmRlcjogMCBub25lO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLWNvbG9yO1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdGJvcmRlcjogMCBub25lO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG5cXHR9XFxuXFx0Jjpmb2N1cy12aXNpYmxlIHtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdH1cXG59XFxuXFxuLnNlYXJjaF9pY29uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zaXplLWwpO1xcblxcdHJpZ2h0OiB2YXIoLS1zcGFjZS1kZWZhdWx0KTtcXG5cXHRib3R0b206IHZhcigtLXNwYWNlLWRlZmF1bHQpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0tdGVhbCk7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWFyY2hcIjogXCJDNDFVZTU4SFVvY2dOdmZxbXdEU1wiLFxuXHRcImNsb3NlXCI6IFwiTGN4MEV3dUVwc2M0NmkyazFUNWRcIixcblx0XCJzZWFyY2hfaW5wdXRcIjogXCJTUkFNcFpzanRGbURZRXFQeTlkdlwiLFxuXHRcImZvY3VzLXZpc2libGVcIjogXCJjMms5ZlVyU2duY1dzSUpHU3poSFwiLFxuXHRcInNlYXJjaF9pY29uXCI6IFwicTJyY3p5MlFUcURyUXVtSGx1bGdcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIublBfRkhfY0FRMThUZkx0R1ByaUp7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1zaXplOmNvdmVyO3BhZGRpbmc6Y2FsYyh2YXIoLS1zcGFjZS1sKSoyKSAwIHZhcigtLXNwYWNlLWwpfS5Odk55eW1TUDlpdGFTNzNoVU0zd3tkaXNwbGF5OmZsZXg7aGVpZ2h0OjUwMHB4fS5vV2NHMHNTOGYwTEpTSDVHNllDZ3tmbGV4LWdyb3c6MTtoZWlnaHQ6MTAwJTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6ZmxleC1ncm93fS5vV2NHMHNTOGYwTEpTSDVHNllDZzpob3ZlcntmbGV4LWdyb3c6M31cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvRmxhbWluZ28vSG9tZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUVDLHVCQUFBLENBQ0EscUJBQUEsQ0FGQSwrQ0FFQSxDQUdELHNCQUNDLFlBQUEsQ0FDQSxZQUFBLENBR0Qsc0JBQ0MsV0FBQSxDQUNBLFdBQUEsQ0FFQSw0QkFBQSxDQUNBLDZCQUFBLENBRUEsNEJBQ0MsV0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG5cXHRwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNlLWwpICogMikgMCB2YXIoLS1zcGFjZS1sKTtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLndvcmtzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNTAwcHg7XFxufVxcblxcbi53b3JrIHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdHRyYW5zaXRpb24tcHJvcGVydHk6IGZsZXgtZ3JvdztcXG5cXG5cXHQmOmhvdmVyIHtcXG5cXHRcXHRmbGV4LWdyb3c6IDM7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJuUF9GSF9jQVExOFRmTHRHUHJpSlwiLFxuXHRcIndvcmtzXCI6IFwiTnZOeXltU1A5aXRhUzczaFVNM3dcIixcblx0XCJ3b3JrXCI6IFwib1djRzBzUzhmMExKU0g1RzZZQ2dcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxtPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLHI9cmVxdWlyZShcInNjaGVkdWxlclwiKTtmdW5jdGlvbiB5KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifWlmKCFhYSl0aHJvdyBFcnJvcih5KDIyNykpO3ZhciBiYT1uZXcgU2V0LGNhPXt9O2Z1bmN0aW9uIGRhKGEsYil7ZWEoYSxiKTtlYShhK1wiQ2FwdHVyZVwiLGIpfVxuZnVuY3Rpb24gZWEoYSxiKXtjYVthXT1iO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspYmEuYWRkKGJbYV0pfVxudmFyIGZhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KSxoYT0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8saWE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbmphPXt9LGthPXt9O2Z1bmN0aW9uIGxhKGEpe2lmKGlhLmNhbGwoa2EsYSkpcmV0dXJuITA7aWYoaWEuY2FsbChqYSxhKSlyZXR1cm4hMTtpZihoYS50ZXN0KGEpKXJldHVybiBrYVthXT0hMDtqYVthXT0hMDtyZXR1cm4hMX1mdW5jdGlvbiBtYShhLGIsYyxkKXtpZihudWxsIT09YyYmMD09PWMudHlwZSlyZXR1cm4hMTtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJmdW5jdGlvblwiOmNhc2UgXCJzeW1ib2xcIjpyZXR1cm4hMDtjYXNlIFwiYm9vbGVhblwiOmlmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpcmV0dXJuIWMuYWNjZXB0c0Jvb2xlYW5zO2E9YS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsNSk7cmV0dXJuXCJkYXRhLVwiIT09YSYmXCJhcmlhLVwiIT09YTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIG5hKGEsYixjLGQpe2lmKG51bGw9PT1ifHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fG1hKGEsYixjLGQpKXJldHVybiEwO2lmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpc3dpdGNoKGMudHlwZSl7Y2FzZSAzOnJldHVybiFiO2Nhc2UgNDpyZXR1cm4hMT09PWI7Y2FzZSA1OnJldHVybiBpc05hTihiKTtjYXNlIDY6cmV0dXJuIGlzTmFOKGIpfHwxPmJ9cmV0dXJuITF9ZnVuY3Rpb24gQihhLGIsYyxkLGUsZixnKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1iO3RoaXMuc2FuaXRpemVVUkw9Zjt0aGlzLnJlbW92ZUVtcHR5U3RyaW5nPWd9dmFyIEQ9e307XG5cImNoaWxkcmVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGRlZmF1bHRWYWx1ZSBkZWZhdWx0Q2hlY2tlZCBpbm5lckhUTUwgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBzdHlsZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwwLCExLGEsbnVsbCwhMSwhMSl9KTtbW1wiYWNjZXB0Q2hhcnNldFwiLFwiYWNjZXB0LWNoYXJzZXRcIl0sW1wiY2xhc3NOYW1lXCIsXCJjbGFzc1wiXSxbXCJodG1sRm9yXCIsXCJmb3JcIl0sW1wiaHR0cEVxdWl2XCIsXCJodHRwLWVxdWl2XCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWFbMF07RFtiXT1uZXcgQihiLDEsITEsYVsxXSxudWxsLCExLCExKX0pO1tcImNvbnRlbnRFZGl0YWJsZVwiLFwiZHJhZ2dhYmxlXCIsXCJzcGVsbENoZWNrXCIsXCJ2YWx1ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwyLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiYXV0b1JldmVyc2VcIixcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcImZvY3VzYWJsZVwiLFwicHJlc2VydmVBbHBoYVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwyLCExLGEsbnVsbCwhMSwhMSl9KTtcImFsbG93RnVsbFNjcmVlbiBhc3luYyBhdXRvRm9jdXMgYXV0b1BsYXkgY29udHJvbHMgZGVmYXVsdCBkZWZlciBkaXNhYmxlZCBkaXNhYmxlUGljdHVyZUluUGljdHVyZSBkaXNhYmxlUmVtb3RlUGxheWJhY2sgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImNoZWNrZWRcIixcIm11bHRpcGxlXCIsXCJtdXRlZFwiLFwic2VsZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMywhMCxhLG51bGwsITEsITEpfSk7W1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNCwhMSxhLG51bGwsITEsITEpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw2LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO3ZhciBvYT0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHBhKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLFxucGEpO0RbYl09bmV3IEIoYiwxLCExLGEsbnVsbCwhMSwhMSl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpyb2xlIHhsaW5rOnNob3cgeGxpbms6dGl0bGUgeGxpbms6dHlwZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxwYSk7RFtiXT1uZXcgQihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMSwhMSl9KTtbXCJ4bWw6YmFzZVwiLFwieG1sOmxhbmdcIixcInhtbDpzcGFjZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShvYSxwYSk7RFtiXT1uZXcgQihiLDEsITEsYSxcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLCExLCExKX0pO1tcInRhYkluZGV4XCIsXCJjcm9zc09yaWdpblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuRC54bGlua0hyZWY9bmV3IEIoXCJ4bGlua0hyZWZcIiwxLCExLFwieGxpbms6aHJlZlwiLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCEwLCExKTtbXCJzcmNcIixcImhyZWZcIixcImFjdGlvblwiLFwiZm9ybUFjdGlvblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwxLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCEwLCEwKX0pO1xuZnVuY3Rpb24gcWEoYSxiLGMsZCl7dmFyIGU9RC5oYXNPd25Qcm9wZXJ0eShiKT9EW2JdOm51bGw7dmFyIGY9bnVsbCE9PWU/MD09PWUudHlwZTpkPyExOiEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXT8hMTohMDtmfHwobmEoYixjLGUsZCkmJihjPW51bGwpLGR8fG51bGw9PT1lP2xhKGIpJiYobnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6YS5zZXRBdHRyaWJ1dGUoYixcIlwiK2MpKTplLm11c3RVc2VQcm9wZXJ0eT9hW2UucHJvcGVydHlOYW1lXT1udWxsPT09Yz8zPT09ZS50eXBlPyExOlwiXCI6YzooYj1lLmF0dHJpYnV0ZU5hbWUsZD1lLmF0dHJpYnV0ZU5hbWVzcGFjZSxudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTooZT1lLnR5cGUsYz0zPT09ZXx8ND09PWUmJiEwPT09Yz9cIlwiOlwiXCIrYyxkP2Euc2V0QXR0cmlidXRlTlMoZCxiLGMpOmEuc2V0QXR0cmlidXRlKGIsYykpKSl9XG52YXIgcmE9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsc2E9NjAxMDMsdGE9NjAxMDYsdWE9NjAxMDcsd2E9NjAxMDgseGE9NjAxMTQseWE9NjAxMDksemE9NjAxMTAsQWE9NjAxMTIsQmE9NjAxMTMsQ2E9NjAxMjAsRGE9NjAxMTUsRWE9NjAxMTYsRmE9NjAxMjEsR2E9NjAxMjgsSGE9NjAxMjksSWE9NjAxMzAsSmE9NjAxMzE7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgRT1TeW1ib2wuZm9yO3NhPUUoXCJyZWFjdC5lbGVtZW50XCIpO3RhPUUoXCJyZWFjdC5wb3J0YWxcIik7dWE9RShcInJlYWN0LmZyYWdtZW50XCIpO3dhPUUoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTt4YT1FKFwicmVhY3QucHJvZmlsZXJcIik7eWE9RShcInJlYWN0LnByb3ZpZGVyXCIpO3phPUUoXCJyZWFjdC5jb250ZXh0XCIpO0FhPUUoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtCYT1FKFwicmVhY3Quc3VzcGVuc2VcIik7Q2E9RShcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik7RGE9RShcInJlYWN0Lm1lbW9cIik7RWE9RShcInJlYWN0LmxhenlcIik7RmE9RShcInJlYWN0LmJsb2NrXCIpO0UoXCJyZWFjdC5zY29wZVwiKTtHYT1FKFwicmVhY3Qub3BhcXVlLmlkXCIpO0hhPUUoXCJyZWFjdC5kZWJ1Z190cmFjZV9tb2RlXCIpO0lhPUUoXCJyZWFjdC5vZmZzY3JlZW5cIik7SmE9RShcInJlYWN0LmxlZ2FjeV9oaWRkZW5cIil9XG52YXIgS2E9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIExhKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1LYSYmYVtLYV18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH12YXIgTWE7ZnVuY3Rpb24gTmEoYSl7aWYodm9pZCAwPT09TWEpdHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGMpe3ZhciBiPWMuc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7TWE9YiYmYlsxXXx8XCJcIn1yZXR1cm5cIlxcblwiK01hK2F9dmFyIE9hPSExO1xuZnVuY3Rpb24gUGEoYSxiKXtpZighYXx8T2EpcmV0dXJuXCJcIjtPYT0hMDt2YXIgYz1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT12b2lkIDA7dHJ5e2lmKGIpaWYoYj1mdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJwcm9wc1wiLHtzZXQ6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO319KSxcIm9iamVjdFwiPT09dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuY29uc3RydWN0KXt0cnl7UmVmbGVjdC5jb25zdHJ1Y3QoYixbXSl9Y2F0Y2goayl7dmFyIGQ9a31SZWZsZWN0LmNvbnN0cnVjdChhLFtdLGIpfWVsc2V7dHJ5e2IuY2FsbCgpfWNhdGNoKGspe2Q9a31hLmNhbGwoYi5wcm90b3R5cGUpfWVsc2V7dHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGspe2Q9a31hKCl9fWNhdGNoKGspe2lmKGsmJmQmJlwic3RyaW5nXCI9PT10eXBlb2Ygay5zdGFjayl7Zm9yKHZhciBlPWsuc3RhY2suc3BsaXQoXCJcXG5cIiksXG5mPWQuc3RhY2suc3BsaXQoXCJcXG5cIiksZz1lLmxlbmd0aC0xLGg9Zi5sZW5ndGgtMTsxPD1nJiYwPD1oJiZlW2ddIT09ZltoXTspaC0tO2Zvcig7MTw9ZyYmMDw9aDtnLS0saC0tKWlmKGVbZ10hPT1mW2hdKXtpZigxIT09Z3x8MSE9PWgpe2RvIGlmKGctLSxoLS0sMD5ofHxlW2ddIT09ZltoXSlyZXR1cm5cIlxcblwiK2VbZ10ucmVwbGFjZShcIiBhdCBuZXcgXCIsXCIgYXQgXCIpO3doaWxlKDE8PWcmJjA8PWgpfWJyZWFrfX19ZmluYWxseXtPYT0hMSxFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT1jfXJldHVybihhPWE/YS5kaXNwbGF5TmFtZXx8YS5uYW1lOlwiXCIpP05hKGEpOlwiXCJ9XG5mdW5jdGlvbiBRYShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTpyZXR1cm4gTmEoYS50eXBlKTtjYXNlIDE2OnJldHVybiBOYShcIkxhenlcIik7Y2FzZSAxMzpyZXR1cm4gTmEoXCJTdXNwZW5zZVwiKTtjYXNlIDE5OnJldHVybiBOYShcIlN1c3BlbnNlTGlzdFwiKTtjYXNlIDA6Y2FzZSAyOmNhc2UgMTU6cmV0dXJuIGE9UGEoYS50eXBlLCExKSxhO2Nhc2UgMTE6cmV0dXJuIGE9UGEoYS50eXBlLnJlbmRlciwhMSksYTtjYXNlIDIyOnJldHVybiBhPVBhKGEudHlwZS5fcmVuZGVyLCExKSxhO2Nhc2UgMTpyZXR1cm4gYT1QYShhLnR5cGUsITApLGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1cbmZ1bmN0aW9uIFJhKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGEuZGlzcGxheU5hbWV8fGEubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIGE7c3dpdGNoKGEpe2Nhc2UgdWE6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgdGE6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIHhhOnJldHVyblwiUHJvZmlsZXJcIjtjYXNlIHdhOnJldHVyblwiU3RyaWN0TW9kZVwiO2Nhc2UgQmE6cmV0dXJuXCJTdXNwZW5zZVwiO2Nhc2UgQ2E6cmV0dXJuXCJTdXNwZW5zZUxpc3RcIn1pZihcIm9iamVjdFwiPT09dHlwZW9mIGEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgemE6cmV0dXJuKGEuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Db25zdW1lclwiO2Nhc2UgeWE6cmV0dXJuKGEuX2NvbnRleHQuZGlzcGxheU5hbWV8fFwiQ29udGV4dFwiKStcIi5Qcm92aWRlclwiO2Nhc2UgQWE6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7XG5yZXR1cm4gYS5kaXNwbGF5TmFtZXx8KFwiXCIhPT1iP1wiRm9yd2FyZFJlZihcIitiK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtjYXNlIERhOnJldHVybiBSYShhLnR5cGUpO2Nhc2UgRmE6cmV0dXJuIFJhKGEuX3JlbmRlcik7Y2FzZSBFYTpiPWEuX3BheWxvYWQ7YT1hLl9pbml0O3RyeXtyZXR1cm4gUmEoYShiKSl9Y2F0Y2goYyl7fX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBTYShhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19ZnVuY3Rpb24gVGEoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFVhKGEpe3ZhciBiPVRhKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBWYShhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VWEoYSkpfWZ1bmN0aW9uIFdhKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1UYShhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfWZ1bmN0aW9uIFhhKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1cbmZ1bmN0aW9uIFlhKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBtKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1mdW5jdGlvbiBaYShhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1TYShudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uICRhKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmcWEoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIGFiKGEsYil7JGEoYSxiKTt2YXIgYz1TYShiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9iYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZiYihhLGIudHlwZSxTYShiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIGNiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBiYihhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fFhhKGEub3duZXJEb2N1bWVudCkhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX1mdW5jdGlvbiBkYihhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBlYihhLGIpe2E9bSh7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPWRiKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1cbmZ1bmN0aW9uIGZiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitTYShjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZ2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHkoOTEpKTtyZXR1cm4gbSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBoYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmNoaWxkcmVuO2I9Yi5kZWZhdWx0VmFsdWU7aWYobnVsbCE9Yyl7aWYobnVsbCE9Yil0aHJvdyBFcnJvcih5KDkyKSk7aWYoQXJyYXkuaXNBcnJheShjKSl7aWYoISgxPj1jLmxlbmd0aCkpdGhyb3cgRXJyb3IoeSg5MykpO2M9Y1swXX1iPWN9bnVsbD09YiYmKGI9XCJcIik7Yz1ifWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOlNhKGMpfX1cbmZ1bmN0aW9uIGliKGEsYil7dmFyIGM9U2EoYi52YWx1ZSksZD1TYShiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGpiKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJlwiXCIhPT1iJiZudWxsIT09YiYmKGEudmFsdWU9Yil9dmFyIGtiPXtodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLG1hdGhtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIixzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifTtcbmZ1bmN0aW9uIGxiKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19ZnVuY3Rpb24gbWIoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP2xiKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIG5iLG9iPWZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgTVNBcHAmJk1TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uP2Z1bmN0aW9uKGIsYyxkLGUpe01TQXBwLmV4ZWNVbnNhZmVMb2NhbEZ1bmN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX06YX0oZnVuY3Rpb24oYSxiKXtpZihhLm5hbWVzcGFjZVVSSSE9PWtiLnN2Z3x8XCJpbm5lckhUTUxcImluIGEpYS5pbm5lckhUTUw9YjtlbHNle25iPW5ifHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO25iLmlubmVySFRNTD1cIjxzdmc+XCIrYi52YWx1ZU9mKCkudG9TdHJpbmcoKStcIjwvc3ZnPlwiO2ZvcihiPW5iLmZpcnN0Q2hpbGQ7YS5maXJzdENoaWxkOylhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYi5maXJzdENoaWxkKX19KTtcbmZ1bmN0aW9uIHBiKGEsYil7aWYoYil7dmFyIGM9YS5maXJzdENoaWxkO2lmKGMmJmM9PT1hLmxhc3RDaGlsZCYmMz09PWMubm9kZVR5cGUpe2Mubm9kZVZhbHVlPWI7cmV0dXJufX1hLnRleHRDb250ZW50PWJ9XG52YXIgcWI9e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGJvcmRlckltYWdlT3V0c2V0OiEwLGJvcmRlckltYWdlU2xpY2U6ITAsYm9yZGVySW1hZ2VXaWR0aDohMCxib3hGbGV4OiEwLGJveEZsZXhHcm91cDohMCxib3hPcmRpbmFsR3JvdXA6ITAsY29sdW1uQ291bnQ6ITAsY29sdW1uczohMCxmbGV4OiEwLGZsZXhHcm93OiEwLGZsZXhQb3NpdGl2ZTohMCxmbGV4U2hyaW5rOiEwLGZsZXhOZWdhdGl2ZTohMCxmbGV4T3JkZXI6ITAsZ3JpZEFyZWE6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTcGFuOiEwLGdyaWRSb3dTdGFydDohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblNwYW46ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGZvbnRXZWlnaHQ6ITAsbGluZUNsYW1wOiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHRhYlNpemU6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwLGZpbGxPcGFjaXR5OiEwLFxuZmxvb2RPcGFjaXR5OiEwLHN0b3BPcGFjaXR5OiEwLHN0cm9rZURhc2hhcnJheTohMCxzdHJva2VEYXNob2Zmc2V0OiEwLHN0cm9rZU1pdGVybGltaXQ6ITAsc3Ryb2tlT3BhY2l0eTohMCxzdHJva2VXaWR0aDohMH0scmI9W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdO09iamVjdC5rZXlzKHFiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JiLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHJpbmcoMSk7cWJbYl09cWJbYV19KX0pO2Z1bmN0aW9uIHNiKGEsYixjKXtyZXR1cm4gbnVsbD09Ynx8XCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJcIj09PWI/XCJcIjpjfHxcIm51bWJlclwiIT09dHlwZW9mIGJ8fDA9PT1ifHxxYi5oYXNPd25Qcm9wZXJ0eShhKSYmcWJbYV0/KFwiXCIrYikudHJpbSgpOmIrXCJweFwifVxuZnVuY3Rpb24gdGIoYSxiKXthPWEuc3R5bGU7Zm9yKHZhciBjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9MD09PWMuaW5kZXhPZihcIi0tXCIpLGU9c2IoYyxiW2NdLGQpO1wiZmxvYXRcIj09PWMmJihjPVwiY3NzRmxvYXRcIik7ZD9hLnNldFByb3BlcnR5KGMsZSk6YVtjXT1lfX12YXIgdWI9bSh7bWVudWl0ZW06ITB9LHthcmVhOiEwLGJhc2U6ITAsYnI6ITAsY29sOiEwLGVtYmVkOiEwLGhyOiEwLGltZzohMCxpbnB1dDohMCxrZXlnZW46ITAsbGluazohMCxtZXRhOiEwLHBhcmFtOiEwLHNvdXJjZTohMCx0cmFjazohMCx3YnI6ITB9KTtcbmZ1bmN0aW9uIHZiKGEsYil7aWYoYil7aWYodWJbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih5KDEzNyxhKSk7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl7aWYobnVsbCE9Yi5jaGlsZHJlbil0aHJvdyBFcnJvcih5KDYwKSk7aWYoIShcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih5KDYxKSk7fWlmKG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZSl0aHJvdyBFcnJvcih5KDYyKSk7fX1cbmZ1bmN0aW9uIHdiKGEsYil7aWYoLTE9PT1hLmluZGV4T2YoXCItXCIpKXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYi5pcztzd2l0Y2goYSl7Y2FzZSBcImFubm90YXRpb24teG1sXCI6Y2FzZSBcImNvbG9yLXByb2ZpbGVcIjpjYXNlIFwiZm9udC1mYWNlXCI6Y2FzZSBcImZvbnQtZmFjZS1zcmNcIjpjYXNlIFwiZm9udC1mYWNlLXVyaVwiOmNhc2UgXCJmb250LWZhY2UtZm9ybWF0XCI6Y2FzZSBcImZvbnQtZmFjZS1uYW1lXCI6Y2FzZSBcIm1pc3NpbmctZ2x5cGhcIjpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX1mdW5jdGlvbiB4YihhKXthPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnR8fHdpbmRvdzthLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50JiYoYT1hLmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50KTtyZXR1cm4gMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmF9dmFyIHliPW51bGwsemI9bnVsbCxBYj1udWxsO1xuZnVuY3Rpb24gQmIoYSl7aWYoYT1DYihhKSl7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHliKXRocm93IEVycm9yKHkoMjgwKSk7dmFyIGI9YS5zdGF0ZU5vZGU7YiYmKGI9RGIoYikseWIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpKX19ZnVuY3Rpb24gRWIoYSl7emI/QWI/QWIucHVzaChhKTpBYj1bYV06emI9YX1mdW5jdGlvbiBGYigpe2lmKHpiKXt2YXIgYT16YixiPUFiO0FiPXpiPW51bGw7QmIoYSk7aWYoYilmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKUJiKGJbYV0pfX1mdW5jdGlvbiBHYihhLGIpe3JldHVybiBhKGIpfWZ1bmN0aW9uIEhiKGEsYixjLGQsZSl7cmV0dXJuIGEoYixjLGQsZSl9ZnVuY3Rpb24gSWIoKXt9dmFyIEpiPUdiLEtiPSExLExiPSExO2Z1bmN0aW9uIE1iKCl7aWYobnVsbCE9PXpifHxudWxsIT09QWIpSWIoKSxGYigpfVxuZnVuY3Rpb24gTmIoYSxiLGMpe2lmKExiKXJldHVybiBhKGIsYyk7TGI9ITA7dHJ5e3JldHVybiBKYihhLGIsYyl9ZmluYWxseXtMYj0hMSxNYigpfX1cbmZ1bmN0aW9uIE9iKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9RGIoYyk7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRW50ZXJcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2lmKGMmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGMpdGhyb3cgRXJyb3IoeSgyMzEsYix0eXBlb2YgYykpO3JldHVybiBjfXZhciBQYj0hMTtpZihmYSl0cnl7dmFyIFFiPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShRYixcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7UGI9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLFFiLFFiKX1jYXRjaChhKXtQYj0hMX1mdW5jdGlvbiBSYihhLGIsYyxkLGUsZixnLGgsayl7dmFyIGw9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsbCl9Y2F0Y2gobil7dGhpcy5vbkVycm9yKG4pfX12YXIgU2I9ITEsVGI9bnVsbCxVYj0hMSxWYj1udWxsLFdiPXtvbkVycm9yOmZ1bmN0aW9uKGEpe1NiPSEwO1RiPWF9fTtmdW5jdGlvbiBYYihhLGIsYyxkLGUsZixnLGgsayl7U2I9ITE7VGI9bnVsbDtSYi5hcHBseShXYixhcmd1bWVudHMpfVxuZnVuY3Rpb24gWWIoYSxiLGMsZCxlLGYsZyxoLGspe1hiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihTYil7aWYoU2Ipe3ZhciBsPVRiO1NiPSExO1RiPW51bGx9ZWxzZSB0aHJvdyBFcnJvcih5KDE5OCkpO1VifHwoVWI9ITAsVmI9bCl9fWZ1bmN0aW9uIFpiKGEpe3ZhciBiPWEsYz1hO2lmKGEuYWx0ZXJuYXRlKWZvcig7Yi5yZXR1cm47KWI9Yi5yZXR1cm47ZWxzZXthPWI7ZG8gYj1hLDAhPT0oYi5mbGFncyYxMDI2KSYmKGM9Yi5yZXR1cm4pLGE9Yi5yZXR1cm47d2hpbGUoYSl9cmV0dXJuIDM9PT1iLnRhZz9jOm51bGx9ZnVuY3Rpb24gJGIoYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9YS5tZW1vaXplZFN0YXRlO251bGw9PT1iJiYoYT1hLmFsdGVybmF0ZSxudWxsIT09YSYmKGI9YS5tZW1vaXplZFN0YXRlKSk7aWYobnVsbCE9PWIpcmV0dXJuIGIuZGVoeWRyYXRlZH1yZXR1cm4gbnVsbH1mdW5jdGlvbiBhYyhhKXtpZihaYihhKSE9PWEpdGhyb3cgRXJyb3IoeSgxODgpKTt9XG5mdW5jdGlvbiBiYyhhKXt2YXIgYj1hLmFsdGVybmF0ZTtpZighYil7Yj1aYihhKTtpZihudWxsPT09Yil0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBiIT09YT9udWxsOmF9Zm9yKHZhciBjPWEsZD1iOzspe3ZhciBlPWMucmV0dXJuO2lmKG51bGw9PT1lKWJyZWFrO3ZhciBmPWUuYWx0ZXJuYXRlO2lmKG51bGw9PT1mKXtkPWUucmV0dXJuO2lmKG51bGwhPT1kKXtjPWQ7Y29udGludWV9YnJlYWt9aWYoZS5jaGlsZD09PWYuY2hpbGQpe2ZvcihmPWUuY2hpbGQ7Zjspe2lmKGY9PT1jKXJldHVybiBhYyhlKSxhO2lmKGY9PT1kKXJldHVybiBhYyhlKSxiO2Y9Zi5zaWJsaW5nfXRocm93IEVycm9yKHkoMTg4KSk7fWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2Zvcih2YXIgZz0hMSxoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PVxuYyl7Zz0hMDtjPWY7ZD1lO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZjtjPWU7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpdGhyb3cgRXJyb3IoeSgxODkpKTt9fWlmKGMuYWx0ZXJuYXRlIT09ZCl0aHJvdyBFcnJvcih5KDE5MCkpO31pZigzIT09Yy50YWcpdGhyb3cgRXJyb3IoeSgxODgpKTtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIGNjKGEpe2E9YmMoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNT09PWIudGFnfHw2PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBkYyhhLGIpe2Zvcih2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09Yjspe2lmKGI9PT1hfHxiPT09YylyZXR1cm4hMDtiPWIucmV0dXJufXJldHVybiExfXZhciBlYyxmYyxnYyxoYyxpYz0hMSxqYz1bXSxrYz1udWxsLGxjPW51bGwsbWM9bnVsbCxuYz1uZXcgTWFwLG9jPW5ldyBNYXAscGM9W10scWM9XCJtb3VzZWRvd24gbW91c2V1cCB0b3VjaGNhbmNlbCB0b3VjaGVuZCB0b3VjaHN0YXJ0IGF1eGNsaWNrIGRibGNsaWNrIHBvaW50ZXJjYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlcnVwIGRyYWdlbmQgZHJhZ3N0YXJ0IGRyb3AgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGlucHV0IHRleHRJbnB1dCBjb3B5IGN1dCBwYXN0ZSBjbGljayBjaGFuZ2UgY29udGV4dG1lbnUgcmVzZXQgc3VibWl0XCIuc3BsaXQoXCIgXCIpO1xuZnVuY3Rpb24gcmMoYSxiLGMsZCxlKXtyZXR1cm57YmxvY2tlZE9uOmEsZG9tRXZlbnROYW1lOmIsZXZlbnRTeXN0ZW1GbGFnczpjfDE2LG5hdGl2ZUV2ZW50OmUsdGFyZ2V0Q29udGFpbmVyczpbZF19fWZ1bmN0aW9uIHNjKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6a2M9bnVsbDticmVhaztjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmxjPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJtb3VzZW91dFwiOm1jPW51bGw7YnJlYWs7Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpuYy5kZWxldGUoYi5wb2ludGVySWQpO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpvYy5kZWxldGUoYi5wb2ludGVySWQpfX1cbmZ1bmN0aW9uIHRjKGEsYixjLGQsZSxmKXtpZihudWxsPT09YXx8YS5uYXRpdmVFdmVudCE9PWYpcmV0dXJuIGE9cmMoYixjLGQsZSxmKSxudWxsIT09YiYmKGI9Q2IoYiksbnVsbCE9PWImJmZjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtiPWEudGFyZ2V0Q29udGFpbmVycztudWxsIT09ZSYmLTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIHVjKGEsYixjLGQsZSl7c3dpdGNoKGIpe2Nhc2UgXCJmb2N1c2luXCI6cmV0dXJuIGtjPXRjKGtjLGEsYixjLGQsZSksITA7Y2FzZSBcImRyYWdlbnRlclwiOnJldHVybiBsYz10YyhsYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJtb3VzZW92ZXJcIjpyZXR1cm4gbWM9dGMobWMsYSxiLGMsZCxlKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZj1lLnBvaW50ZXJJZDtuYy5zZXQoZix0YyhuYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSk7cmV0dXJuITA7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6cmV0dXJuIGY9ZS5wb2ludGVySWQsb2Muc2V0KGYsdGMob2MuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gdmMoYSl7dmFyIGI9d2MoYS50YXJnZXQpO2lmKG51bGwhPT1iKXt2YXIgYz1aYihiKTtpZihudWxsIT09YylpZihiPWMudGFnLDEzPT09Yil7aWYoYj0kYihjKSxudWxsIT09Yil7YS5ibG9ja2VkT249YjtoYyhhLmxhbmVQcmlvcml0eSxmdW5jdGlvbigpe3IudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KGEucHJpb3JpdHksZnVuY3Rpb24oKXtnYyhjKX0pfSk7cmV0dXJufX1lbHNlIGlmKDM9PT1iJiZjLnN0YXRlTm9kZS5oeWRyYXRlKXthLmJsb2NrZWRPbj0zPT09Yy50YWc/Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO3JldHVybn19YS5ibG9ja2VkT249bnVsbH1cbmZ1bmN0aW9uIHhjKGEpe2lmKG51bGwhPT1hLmJsb2NrZWRPbilyZXR1cm4hMTtmb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09YylyZXR1cm4gYj1DYihjKSxudWxsIT09YiYmZmMoYiksYS5ibG9ja2VkT249YywhMTtiLnNoaWZ0KCl9cmV0dXJuITB9ZnVuY3Rpb24gemMoYSxiLGMpe3hjKGEpJiZjLmRlbGV0ZShiKX1cbmZ1bmN0aW9uIEFjKCl7Zm9yKGljPSExOzA8amMubGVuZ3RoOyl7dmFyIGE9amNbMF07aWYobnVsbCE9PWEuYmxvY2tlZE9uKXthPUNiKGEuYmxvY2tlZE9uKTtudWxsIT09YSYmZWMoYSk7YnJlYWt9Zm9yKHZhciBiPWEudGFyZ2V0Q29udGFpbmVyczswPGIubGVuZ3RoOyl7dmFyIGM9eWMoYS5kb21FdmVudE5hbWUsYS5ldmVudFN5c3RlbUZsYWdzLGJbMF0sYS5uYXRpdmVFdmVudCk7aWYobnVsbCE9PWMpe2EuYmxvY2tlZE9uPWM7YnJlYWt9Yi5zaGlmdCgpfW51bGw9PT1hLmJsb2NrZWRPbiYmamMuc2hpZnQoKX1udWxsIT09a2MmJnhjKGtjKSYmKGtjPW51bGwpO251bGwhPT1sYyYmeGMobGMpJiYobGM9bnVsbCk7bnVsbCE9PW1jJiZ4YyhtYykmJihtYz1udWxsKTtuYy5mb3JFYWNoKHpjKTtvYy5mb3JFYWNoKHpjKX1cbmZ1bmN0aW9uIEJjKGEsYil7YS5ibG9ja2VkT249PT1iJiYoYS5ibG9ja2VkT249bnVsbCxpY3x8KGljPSEwLHIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhyLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LEFjKSkpfVxuZnVuY3Rpb24gQ2MoYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gQmMoYixhKX1pZigwPGpjLmxlbmd0aCl7QmMoamNbMF0sYSk7Zm9yKHZhciBjPTE7YzxqYy5sZW5ndGg7YysrKXt2YXIgZD1qY1tjXTtkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKX19bnVsbCE9PWtjJiZCYyhrYyxhKTtudWxsIT09bGMmJkJjKGxjLGEpO251bGwhPT1tYyYmQmMobWMsYSk7bmMuZm9yRWFjaChiKTtvYy5mb3JFYWNoKGIpO2ZvcihjPTA7YzxwYy5sZW5ndGg7YysrKWQ9cGNbY10sZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCk7Zm9yKDswPHBjLmxlbmd0aCYmKGM9cGNbMF0sbnVsbD09PWMuYmxvY2tlZE9uKTspdmMoYyksbnVsbD09PWMuYmxvY2tlZE9uJiZwYy5zaGlmdCgpfVxuZnVuY3Rpb24gRGMoYSxiKXt2YXIgYz17fTtjW2EudG9Mb3dlckNhc2UoKV09Yi50b0xvd2VyQ2FzZSgpO2NbXCJXZWJraXRcIithXT1cIndlYmtpdFwiK2I7Y1tcIk1velwiK2FdPVwibW96XCIrYjtyZXR1cm4gY312YXIgRWM9e2FuaW1hdGlvbmVuZDpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uRW5kXCIpLGFuaW1hdGlvbml0ZXJhdGlvbjpEYyhcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uSXRlcmF0aW9uXCIpLGFuaW1hdGlvbnN0YXJ0OkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25TdGFydFwiKSx0cmFuc2l0aW9uZW5kOkRjKFwiVHJhbnNpdGlvblwiLFwiVHJhbnNpdGlvbkVuZFwiKX0sRmM9e30sR2M9e307XG5mYSYmKEdjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJBbmltYXRpb25FdmVudFwiaW4gd2luZG93fHwoZGVsZXRlIEVjLmFuaW1hdGlvbmVuZC5hbmltYXRpb24sZGVsZXRlIEVjLmFuaW1hdGlvbml0ZXJhdGlvbi5hbmltYXRpb24sZGVsZXRlIEVjLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbiksXCJUcmFuc2l0aW9uRXZlbnRcImluIHdpbmRvd3x8ZGVsZXRlIEVjLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbik7ZnVuY3Rpb24gSGMoYSl7aWYoRmNbYV0pcmV0dXJuIEZjW2FdO2lmKCFFY1thXSlyZXR1cm4gYTt2YXIgYj1FY1thXSxjO2ZvcihjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSYmYyBpbiBHYylyZXR1cm4gRmNbYV09YltjXTtyZXR1cm4gYX1cbnZhciBJYz1IYyhcImFuaW1hdGlvbmVuZFwiKSxKYz1IYyhcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxLYz1IYyhcImFuaW1hdGlvbnN0YXJ0XCIpLExjPUhjKFwidHJhbnNpdGlvbmVuZFwiKSxNYz1uZXcgTWFwLE5jPW5ldyBNYXAsT2M9W1wiYWJvcnRcIixcImFib3J0XCIsSWMsXCJhbmltYXRpb25FbmRcIixKYyxcImFuaW1hdGlvbkl0ZXJhdGlvblwiLEtjLFwiYW5pbWF0aW9uU3RhcnRcIixcImNhbnBsYXlcIixcImNhblBsYXlcIixcImNhbnBsYXl0aHJvdWdoXCIsXCJjYW5QbGF5VGhyb3VnaFwiLFwiZHVyYXRpb25jaGFuZ2VcIixcImR1cmF0aW9uQ2hhbmdlXCIsXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCIsXCJlbmNyeXB0ZWRcIixcImVuY3J5cHRlZFwiLFwiZW5kZWRcIixcImVuZGVkXCIsXCJlcnJvclwiLFwiZXJyb3JcIixcImdvdHBvaW50ZXJjYXB0dXJlXCIsXCJnb3RQb2ludGVyQ2FwdHVyZVwiLFwibG9hZFwiLFwibG9hZFwiLFwibG9hZGVkZGF0YVwiLFwibG9hZGVkRGF0YVwiLFwibG9hZGVkbWV0YWRhdGFcIixcImxvYWRlZE1ldGFkYXRhXCIsXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiLFxuXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiLFwicGxheWluZ1wiLFwicGxheWluZ1wiLFwicHJvZ3Jlc3NcIixcInByb2dyZXNzXCIsXCJzZWVraW5nXCIsXCJzZWVraW5nXCIsXCJzdGFsbGVkXCIsXCJzdGFsbGVkXCIsXCJzdXNwZW5kXCIsXCJzdXNwZW5kXCIsXCJ0aW1ldXBkYXRlXCIsXCJ0aW1lVXBkYXRlXCIsTGMsXCJ0cmFuc2l0aW9uRW5kXCIsXCJ3YWl0aW5nXCIsXCJ3YWl0aW5nXCJdO2Z1bmN0aW9uIFBjKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKz0yKXt2YXIgZD1hW2NdLGU9YVtjKzFdO2U9XCJvblwiKyhlWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSk7TmMuc2V0KGQsYik7TWMuc2V0KGQsZSk7ZGEoZSxbZF0pfX12YXIgUWM9ci51bnN0YWJsZV9ub3c7UWMoKTt2YXIgRj04O1xuZnVuY3Rpb24gUmMoYSl7aWYoMCE9PSgxJmEpKXJldHVybiBGPTE1LDE7aWYoMCE9PSgyJmEpKXJldHVybiBGPTE0LDI7aWYoMCE9PSg0JmEpKXJldHVybiBGPTEzLDQ7dmFyIGI9MjQmYTtpZigwIT09YilyZXR1cm4gRj0xMixiO2lmKDAhPT0oYSYzMikpcmV0dXJuIEY9MTEsMzI7Yj0xOTImYTtpZigwIT09YilyZXR1cm4gRj0xMCxiO2lmKDAhPT0oYSYyNTYpKXJldHVybiBGPTksMjU2O2I9MzU4NCZhO2lmKDAhPT1iKXJldHVybiBGPTgsYjtpZigwIT09KGEmNDA5NikpcmV0dXJuIEY9Nyw0MDk2O2I9NDE4NjExMiZhO2lmKDAhPT1iKXJldHVybiBGPTYsYjtiPTYyOTE0NTYwJmE7aWYoMCE9PWIpcmV0dXJuIEY9NSxiO2lmKGEmNjcxMDg4NjQpcmV0dXJuIEY9NCw2NzEwODg2NDtpZigwIT09KGEmMTM0MjE3NzI4KSlyZXR1cm4gRj0zLDEzNDIxNzcyODtiPTgwNTMwNjM2OCZhO2lmKDAhPT1iKXJldHVybiBGPTIsYjtpZigwIT09KDEwNzM3NDE4MjQmYSkpcmV0dXJuIEY9MSwxMDczNzQxODI0O1xuRj04O3JldHVybiBhfWZ1bmN0aW9uIFNjKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiAxNTtjYXNlIDk4OnJldHVybiAxMDtjYXNlIDk3OmNhc2UgOTY6cmV0dXJuIDg7Y2FzZSA5NTpyZXR1cm4gMjtkZWZhdWx0OnJldHVybiAwfX1mdW5jdGlvbiBUYyhhKXtzd2l0Y2goYSl7Y2FzZSAxNTpjYXNlIDE0OnJldHVybiA5OTtjYXNlIDEzOmNhc2UgMTI6Y2FzZSAxMTpjYXNlIDEwOnJldHVybiA5ODtjYXNlIDk6Y2FzZSA4OmNhc2UgNzpjYXNlIDY6Y2FzZSA0OmNhc2UgNTpyZXR1cm4gOTc7Y2FzZSAzOmNhc2UgMjpjYXNlIDE6cmV0dXJuIDk1O2Nhc2UgMDpyZXR1cm4gOTA7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDM1OCxhKSk7fX1cbmZ1bmN0aW9uIFVjKGEsYil7dmFyIGM9YS5wZW5kaW5nTGFuZXM7aWYoMD09PWMpcmV0dXJuIEY9MDt2YXIgZD0wLGU9MCxmPWEuZXhwaXJlZExhbmVzLGc9YS5zdXNwZW5kZWRMYW5lcyxoPWEucGluZ2VkTGFuZXM7aWYoMCE9PWYpZD1mLGU9Rj0xNTtlbHNlIGlmKGY9YyYxMzQyMTc3MjcsMCE9PWYpe3ZhciBrPWYmfmc7MCE9PWs/KGQ9UmMoayksZT1GKTooaCY9ZiwwIT09aCYmKGQ9UmMoaCksZT1GKSl9ZWxzZSBmPWMmfmcsMCE9PWY/KGQ9UmMoZiksZT1GKTowIT09aCYmKGQ9UmMoaCksZT1GKTtpZigwPT09ZClyZXR1cm4gMDtkPTMxLVZjKGQpO2Q9YyYoKDA+ZD8wOjE8PGQpPDwxKS0xO2lmKDAhPT1iJiZiIT09ZCYmMD09PShiJmcpKXtSYyhiKTtpZihlPD1GKXJldHVybiBiO0Y9ZX1iPWEuZW50YW5nbGVkTGFuZXM7aWYoMCE9PWIpZm9yKGE9YS5lbnRhbmdsZW1lbnRzLGImPWQ7MDxiOyljPTMxLVZjKGIpLGU9MTw8YyxkfD1hW2NdLGImPX5lO3JldHVybiBkfVxuZnVuY3Rpb24gV2MoYSl7YT1hLnBlbmRpbmdMYW5lcyYtMTA3Mzc0MTgyNTtyZXR1cm4gMCE9PWE/YTphJjEwNzM3NDE4MjQ/MTA3Mzc0MTgyNDowfWZ1bmN0aW9uIFhjKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTU6cmV0dXJuIDE7Y2FzZSAxNDpyZXR1cm4gMjtjYXNlIDEyOnJldHVybiBhPVljKDI0Jn5iKSwwPT09YT9YYygxMCxiKTphO2Nhc2UgMTA6cmV0dXJuIGE9WWMoMTkyJn5iKSwwPT09YT9YYyg4LGIpOmE7Y2FzZSA4OnJldHVybiBhPVljKDM1ODQmfmIpLDA9PT1hJiYoYT1ZYyg0MTg2MTEyJn5iKSwwPT09YSYmKGE9NTEyKSksYTtjYXNlIDI6cmV0dXJuIGI9WWMoODA1MzA2MzY4Jn5iKSwwPT09YiYmKGI9MjY4NDM1NDU2KSxifXRocm93IEVycm9yKHkoMzU4LGEpKTt9ZnVuY3Rpb24gWWMoYSl7cmV0dXJuIGEmLWF9ZnVuY3Rpb24gWmMoYSl7Zm9yKHZhciBiPVtdLGM9MDszMT5jO2MrKyliLnB1c2goYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiAkYyhhLGIsYyl7YS5wZW5kaW5nTGFuZXN8PWI7dmFyIGQ9Yi0xO2Euc3VzcGVuZGVkTGFuZXMmPWQ7YS5waW5nZWRMYW5lcyY9ZDthPWEuZXZlbnRUaW1lcztiPTMxLVZjKGIpO2FbYl09Y312YXIgVmM9TWF0aC5jbHozMj9NYXRoLmNsejMyOmFkLGJkPU1hdGgubG9nLGNkPU1hdGguTE4yO2Z1bmN0aW9uIGFkKGEpe3JldHVybiAwPT09YT8zMjozMS0oYmQoYSkvY2R8MCl8MH12YXIgZGQ9ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxlZD1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxmZD0hMDtmdW5jdGlvbiBnZChhLGIsYyxkKXtLYnx8SWIoKTt2YXIgZT1oZCxmPUtiO0tiPSEwO3RyeXtIYihlLGEsYixjLGQpfWZpbmFsbHl7KEtiPWYpfHxNYigpfX1mdW5jdGlvbiBpZChhLGIsYyxkKXtlZChkZCxoZC5iaW5kKG51bGwsYSxiLGMsZCkpfVxuZnVuY3Rpb24gaGQoYSxiLGMsZCl7aWYoZmQpe3ZhciBlO2lmKChlPTA9PT0oYiY0KSkmJjA8amMubGVuZ3RoJiYtMTxxYy5pbmRleE9mKGEpKWE9cmMobnVsbCxhLGIsYyxkKSxqYy5wdXNoKGEpO2Vsc2V7dmFyIGY9eWMoYSxiLGMsZCk7aWYobnVsbD09PWYpZSYmc2MoYSxkKTtlbHNle2lmKGUpe2lmKC0xPHFjLmluZGV4T2YoYSkpe2E9cmMoZixhLGIsYyxkKTtqYy5wdXNoKGEpO3JldHVybn1pZih1YyhmLGEsYixjLGQpKXJldHVybjtzYyhhLGQpfWpkKGEsYixkLG51bGwsYyl9fX19XG5mdW5jdGlvbiB5YyhhLGIsYyxkKXt2YXIgZT14YihkKTtlPXdjKGUpO2lmKG51bGwhPT1lKXt2YXIgZj1aYihlKTtpZihudWxsPT09ZillPW51bGw7ZWxzZXt2YXIgZz1mLnRhZztpZigxMz09PWcpe2U9JGIoZik7aWYobnVsbCE9PWUpcmV0dXJuIGU7ZT1udWxsfWVsc2UgaWYoMz09PWcpe2lmKGYuc3RhdGVOb2RlLmh5ZHJhdGUpcmV0dXJuIDM9PT1mLnRhZz9mLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7ZT1udWxsfWVsc2UgZiE9PWUmJihlPW51bGwpfX1qZChhLGIsZCxlLGMpO3JldHVybiBudWxsfXZhciBrZD1udWxsLGxkPW51bGwsbWQ9bnVsbDtcbmZ1bmN0aW9uIG5kKCl7aWYobWQpcmV0dXJuIG1kO3ZhciBhLGI9bGQsYz1iLmxlbmd0aCxkLGU9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsZj1lLmxlbmd0aDtmb3IoYT0wO2E8YyYmYlthXT09PWVbYV07YSsrKTt2YXIgZz1jLWE7Zm9yKGQ9MTtkPD1nJiZiW2MtZF09PT1lW2YtZF07ZCsrKTtyZXR1cm4gbWQ9ZS5zbGljZShhLDE8ZD8xLWQ6dm9pZCAwKX1mdW5jdGlvbiBvZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1mdW5jdGlvbiBwZCgpe3JldHVybiEwfWZ1bmN0aW9uIHFkKCl7cmV0dXJuITF9XG5mdW5jdGlvbiByZChhKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dGhpcy5fcmVhY3ROYW1lPWI7dGhpcy5fdGFyZ2V0SW5zdD1lO3RoaXMudHlwZT1kO3RoaXMubmF0aXZlRXZlbnQ9Zjt0aGlzLnRhcmdldD1nO3RoaXMuY3VycmVudFRhcmdldD1udWxsO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiPWFbY10sdGhpc1tjXT1iP2IoZik6ZltjXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWYuZGVmYXVsdFByZXZlbnRlZD9mLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1mLnJldHVyblZhbHVlKT9wZDpxZDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXFkO3JldHVybiB0aGlzfW0oYi5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJlxuKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBkKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBkKX0scGVyc2lzdDpmdW5jdGlvbigpe30saXNQZXJzaXN0ZW50OnBkfSk7cmV0dXJuIGJ9XG52YXIgc2Q9e2V2ZW50UGhhc2U6MCxidWJibGVzOjAsY2FuY2VsYWJsZTowLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6MCxpc1RydXN0ZWQ6MH0sdGQ9cmQoc2QpLHVkPW0oe30sc2Qse3ZpZXc6MCxkZXRhaWw6MH0pLHZkPXJkKHVkKSx3ZCx4ZCx5ZCxBZD1tKHt9LHVkLHtzY3JlZW5YOjAsc2NyZWVuWTowLGNsaWVudFg6MCxjbGllbnRZOjAscGFnZVg6MCxwYWdlWTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkLGJ1dHRvbjowLGJ1dHRvbnM6MCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hLnJlbGF0ZWRUYXJnZXQ/YS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50OmEucmVsYXRlZFRhcmdldH0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpblxuYSlyZXR1cm4gYS5tb3ZlbWVudFg7YSE9PXlkJiYoeWQmJlwibW91c2Vtb3ZlXCI9PT1hLnR5cGU/KHdkPWEuc2NyZWVuWC15ZC5zY3JlZW5YLHhkPWEuc2NyZWVuWS15ZC5zY3JlZW5ZKTp4ZD13ZD0wLHlkPWEpO3JldHVybiB3ZH0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe3JldHVyblwibW92ZW1lbnRZXCJpbiBhP2EubW92ZW1lbnRZOnhkfX0pLEJkPXJkKEFkKSxDZD1tKHt9LEFkLHtkYXRhVHJhbnNmZXI6MH0pLERkPXJkKENkKSxFZD1tKHt9LHVkLHtyZWxhdGVkVGFyZ2V0OjB9KSxGZD1yZChFZCksR2Q9bSh7fSxzZCx7YW5pbWF0aW9uTmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksSGQ9cmQoR2QpLElkPW0oe30sc2Qse2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxKZD1yZChJZCksS2Q9bSh7fSxzZCx7ZGF0YTowfSksTGQ9cmQoS2QpLE1kPXtFc2M6XCJFc2NhcGVcIixcblNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LE5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLDExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLFxuMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxPZD17QWx0OlwiYWx0S2V5XCIsQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gUGQoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1PZFthXSk/ISFiW2FdOiExfWZ1bmN0aW9uIHpkKCl7cmV0dXJuIFBkfVxudmFyIFFkPW0oe30sdWQse2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9TWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9b2QoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP05kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sY29kZTowLGxvY2F0aW9uOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLHJlcGVhdDowLGxvY2FsZTowLGdldE1vZGlmaWVyU3RhdGU6emQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP29kKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/b2QoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxSZD1yZChRZCksU2Q9bSh7fSxBZCx7cG9pbnRlcklkOjAsd2lkdGg6MCxoZWlnaHQ6MCxwcmVzc3VyZTowLHRhbmdlbnRpYWxQcmVzc3VyZTowLHRpbHRYOjAsdGlsdFk6MCx0d2lzdDowLHBvaW50ZXJUeXBlOjAsaXNQcmltYXJ5OjB9KSxUZD1yZChTZCksVWQ9bSh7fSx1ZCx7dG91Y2hlczowLHRhcmdldFRvdWNoZXM6MCxjaGFuZ2VkVG91Y2hlczowLGFsdEtleTowLG1ldGFLZXk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkfSksVmQ9cmQoVWQpLFdkPW0oe30sc2Qse3Byb3BlcnR5TmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksWGQ9cmQoV2QpLFlkPW0oe30sQWQse2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LFxuZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOjAsZGVsdGFNb2RlOjB9KSxaZD1yZChZZCksJGQ9WzksMTMsMjcsMzJdLGFlPWZhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxiZT1udWxsO2ZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihiZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO3ZhciBjZT1mYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIWJlLGRlPWZhJiYoIWFlfHxiZSYmODxiZSYmMTE+PWJlKSxlZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxmZT0hMTtcbmZ1bmN0aW9uIGdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09JGQuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImZvY3Vzb3V0XCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gaGUoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgaWU9ITE7ZnVuY3Rpb24gamUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGhlKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDtmZT0hMDtyZXR1cm4gZWU7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09ZWUmJmZlP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIGtlKGEsYil7aWYoaWUpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IWFlJiZnZShhLGIpPyhhPW5kKCksbWQ9bGQ9a2Q9bnVsbCxpZT0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gZGUmJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIGxlPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIG1lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhbGVbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfWZ1bmN0aW9uIG5lKGEsYixjLGQpe0ViKGQpO2I9b2UoYixcIm9uQ2hhbmdlXCIpOzA8Yi5sZW5ndGgmJihjPW5ldyB0ZChcIm9uQ2hhbmdlXCIsXCJjaGFuZ2VcIixudWxsLGMsZCksYS5wdXNoKHtldmVudDpjLGxpc3RlbmVyczpifSkpfXZhciBwZT1udWxsLHFlPW51bGw7ZnVuY3Rpb24gcmUoYSl7c2UoYSwwKX1mdW5jdGlvbiB0ZShhKXt2YXIgYj11ZShhKTtpZihXYShiKSlyZXR1cm4gYX1cbmZ1bmN0aW9uIHZlKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIHdlPSExO2lmKGZhKXt2YXIgeGU7aWYoZmEpe3ZhciB5ZT1cIm9uaW5wdXRcImluIGRvY3VtZW50O2lmKCF5ZSl7dmFyIHplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7emUuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLFwicmV0dXJuO1wiKTt5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgemUub25pbnB1dH14ZT15ZX1lbHNlIHhlPSExO3dlPXhlJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpfWZ1bmN0aW9uIEFlKCl7cGUmJihwZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkscWU9cGU9bnVsbCl9ZnVuY3Rpb24gQmUoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnRlKHFlKSl7dmFyIGI9W107bmUoYixxZSxhLHhiKGEpKTthPXJlO2lmKEtiKWEoYik7ZWxzZXtLYj0hMDt0cnl7R2IoYSxiKX1maW5hbGx5e0tiPSExLE1iKCl9fX19XG5mdW5jdGlvbiBDZShhLGIsYyl7XCJmb2N1c2luXCI9PT1hPyhBZSgpLHBlPWIscWU9YyxwZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkpOlwiZm9jdXNvdXRcIj09PWEmJkFlKCl9ZnVuY3Rpb24gRGUoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gdGUocWUpfWZ1bmN0aW9uIEVlKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gRmUoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gR2UoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBIZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpHZSxJZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gSmUoYSxiKXtpZihIZShhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIUllLmNhbGwoYixjW2RdKXx8IUhlKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gS2UoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gTGUoYSxiKXt2YXIgYz1LZShhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1LZShjKX19ZnVuY3Rpb24gTWUoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9NZShhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBOZSgpe2Zvcih2YXIgYT13aW5kb3csYj1YYSgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e3ZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYi5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWZ9Y2F0Y2goZCl7Yz0hMX1pZihjKWE9Yi5jb250ZW50V2luZG93O2Vsc2UgYnJlYWs7Yj1YYShhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBPZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxudmFyIFBlPWZhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsUWU9bnVsbCxSZT1udWxsLFNlPW51bGwsVGU9ITE7XG5mdW5jdGlvbiBVZShhLGIsYyl7dmFyIGQ9Yy53aW5kb3c9PT1jP2MuZG9jdW1lbnQ6OT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQ7VGV8fG51bGw9PVFlfHxRZSE9PVhhKGQpfHwoZD1RZSxcInNlbGVjdGlvblN0YXJ0XCJpbiBkJiZPZShkKT9kPXtzdGFydDpkLnNlbGVjdGlvblN0YXJ0LGVuZDpkLnNlbGVjdGlvbkVuZH06KGQ9KGQub3duZXJEb2N1bWVudCYmZC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGQ9e2FuY2hvck5vZGU6ZC5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpkLmFuY2hvck9mZnNldCxmb2N1c05vZGU6ZC5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6ZC5mb2N1c09mZnNldH0pLFNlJiZKZShTZSxkKXx8KFNlPWQsZD1vZShSZSxcIm9uU2VsZWN0XCIpLDA8ZC5sZW5ndGgmJihiPW5ldyB0ZChcIm9uU2VsZWN0XCIsXCJzZWxlY3RcIixudWxsLGIsYyksYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpkfSksYi50YXJnZXQ9UWUpKSl9XG5QYyhcImNhbmNlbCBjYW5jZWwgY2xpY2sgY2xpY2sgY2xvc2UgY2xvc2UgY29udGV4dG1lbnUgY29udGV4dE1lbnUgY29weSBjb3B5IGN1dCBjdXQgYXV4Y2xpY2sgYXV4Q2xpY2sgZGJsY2xpY2sgZG91YmxlQ2xpY2sgZHJhZ2VuZCBkcmFnRW5kIGRyYWdzdGFydCBkcmFnU3RhcnQgZHJvcCBkcm9wIGZvY3VzaW4gZm9jdXMgZm9jdXNvdXQgYmx1ciBpbnB1dCBpbnB1dCBpbnZhbGlkIGludmFsaWQga2V5ZG93biBrZXlEb3duIGtleXByZXNzIGtleVByZXNzIGtleXVwIGtleVVwIG1vdXNlZG93biBtb3VzZURvd24gbW91c2V1cCBtb3VzZVVwIHBhc3RlIHBhc3RlIHBhdXNlIHBhdXNlIHBsYXkgcGxheSBwb2ludGVyY2FuY2VsIHBvaW50ZXJDYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlckRvd24gcG9pbnRlcnVwIHBvaW50ZXJVcCByYXRlY2hhbmdlIHJhdGVDaGFuZ2UgcmVzZXQgcmVzZXQgc2Vla2VkIHNlZWtlZCBzdWJtaXQgc3VibWl0IHRvdWNoY2FuY2VsIHRvdWNoQ2FuY2VsIHRvdWNoZW5kIHRvdWNoRW5kIHRvdWNoc3RhcnQgdG91Y2hTdGFydCB2b2x1bWVjaGFuZ2Ugdm9sdW1lQ2hhbmdlXCIuc3BsaXQoXCIgXCIpLFxuMCk7UGMoXCJkcmFnIGRyYWcgZHJhZ2VudGVyIGRyYWdFbnRlciBkcmFnZXhpdCBkcmFnRXhpdCBkcmFnbGVhdmUgZHJhZ0xlYXZlIGRyYWdvdmVyIGRyYWdPdmVyIG1vdXNlbW92ZSBtb3VzZU1vdmUgbW91c2VvdXQgbW91c2VPdXQgbW91c2VvdmVyIG1vdXNlT3ZlciBwb2ludGVybW92ZSBwb2ludGVyTW92ZSBwb2ludGVyb3V0IHBvaW50ZXJPdXQgcG9pbnRlcm92ZXIgcG9pbnRlck92ZXIgc2Nyb2xsIHNjcm9sbCB0b2dnbGUgdG9nZ2xlIHRvdWNobW92ZSB0b3VjaE1vdmUgd2hlZWwgd2hlZWxcIi5zcGxpdChcIiBcIiksMSk7UGMoT2MsMik7Zm9yKHZhciBWZT1cImNoYW5nZSBzZWxlY3Rpb25jaGFuZ2UgdGV4dElucHV0IGNvbXBvc2l0aW9uc3RhcnQgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb251cGRhdGVcIi5zcGxpdChcIiBcIiksV2U9MDtXZTxWZS5sZW5ndGg7V2UrKylOYy5zZXQoVmVbV2VdLDApO2VhKFwib25Nb3VzZUVudGVyXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7XG5lYShcIm9uTW91c2VMZWF2ZVwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2VhKFwib25Qb2ludGVyRW50ZXJcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJMZWF2ZVwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtkYShcIm9uQ2hhbmdlXCIsXCJjaGFuZ2UgY2xpY2sgZm9jdXNpbiBmb2N1c291dCBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvblNlbGVjdFwiLFwiZm9jdXNvdXQgY29udGV4dG1lbnUgZHJhZ2VuZCBmb2N1c2luIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uQmVmb3JlSW5wdXRcIixbXCJjb21wb3NpdGlvbmVuZFwiLFwia2V5cHJlc3NcIixcInRleHRJbnB1dFwiLFwicGFzdGVcIl0pO2RhKFwib25Db21wb3NpdGlvbkVuZFwiLFwiY29tcG9zaXRpb25lbmQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO1xuZGEoXCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcImNvbXBvc2l0aW9uc3RhcnQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO2RhKFwib25Db21wb3NpdGlvblVwZGF0ZVwiLFwiY29tcG9zaXRpb251cGRhdGUgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO3ZhciBYZT1cImFib3J0IGNhbnBsYXkgY2FucGxheXRocm91Z2ggZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2Ugc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksWWU9bmV3IFNldChcImNhbmNlbCBjbG9zZSBpbnZhbGlkIGxvYWQgc2Nyb2xsIHRvZ2dsZVwiLnNwbGl0KFwiIFwiKS5jb25jYXQoWGUpKTtcbmZ1bmN0aW9uIFplKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD1jO1liKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9XG5mdW5jdGlvbiBzZShhLGIpe2I9MCE9PShiJjQpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5ldmVudDtkPWQubGlzdGVuZXJzO2E6e3ZhciBmPXZvaWQgMDtpZihiKWZvcih2YXIgZz1kLmxlbmd0aC0xOzA8PWc7Zy0tKXt2YXIgaD1kW2ddLGs9aC5pbnN0YW5jZSxsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO1plKGUsaCxsKTtmPWt9ZWxzZSBmb3IoZz0wO2c8ZC5sZW5ndGg7ZysrKXtoPWRbZ107az1oLmluc3RhbmNlO2w9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a319fWlmKFViKXRocm93IGE9VmIsVWI9ITEsVmI9bnVsbCxhO31cbmZ1bmN0aW9uIEcoYSxiKXt2YXIgYz0kZShiKSxkPWErXCJfX2J1YmJsZVwiO2MuaGFzKGQpfHwoYWYoYixhLDIsITEpLGMuYWRkKGQpKX12YXIgYmY9XCJfcmVhY3RMaXN0ZW5pbmdcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtmdW5jdGlvbiBjZihhKXthW2JmXXx8KGFbYmZdPSEwLGJhLmZvckVhY2goZnVuY3Rpb24oYil7WWUuaGFzKGIpfHxkZihiLCExLGEsbnVsbCk7ZGYoYiwhMCxhLG51bGwpfSkpfVxuZnVuY3Rpb24gZGYoYSxiLGMsZCl7dmFyIGU9NDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOjAsZj1jO1wic2VsZWN0aW9uY2hhbmdlXCI9PT1hJiY5IT09Yy5ub2RlVHlwZSYmKGY9Yy5vd25lckRvY3VtZW50KTtpZihudWxsIT09ZCYmIWImJlllLmhhcyhhKSl7aWYoXCJzY3JvbGxcIiE9PWEpcmV0dXJuO2V8PTI7Zj1kfXZhciBnPSRlKGYpLGg9YStcIl9fXCIrKGI/XCJjYXB0dXJlXCI6XCJidWJibGVcIik7Zy5oYXMoaCl8fChiJiYoZXw9NCksYWYoZixhLGUsYiksZy5hZGQoaCkpfVxuZnVuY3Rpb24gYWYoYSxiLGMsZCl7dmFyIGU9TmMuZ2V0KGIpO3N3aXRjaCh2b2lkIDA9PT1lPzI6ZSl7Y2FzZSAwOmU9Z2Q7YnJlYWs7Y2FzZSAxOmU9aWQ7YnJlYWs7ZGVmYXVsdDplPWhkfWM9ZS5iaW5kKG51bGwsYixjLGEpO2U9dm9pZCAwOyFQYnx8XCJ0b3VjaHN0YXJ0XCIhPT1iJiZcInRvdWNobW92ZVwiIT09YiYmXCJ3aGVlbFwiIT09Ynx8KGU9ITApO2Q/dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtjYXB0dXJlOiEwLHBhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITApOnZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7cGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9XG5mdW5jdGlvbiBqZChhLGIsYyxkLGUpe3ZhciBmPWQ7aWYoMD09PShiJjEpJiYwPT09KGImMikmJm51bGwhPT1kKWE6Zm9yKDs7KXtpZihudWxsPT09ZClyZXR1cm47dmFyIGc9ZC50YWc7aWYoMz09PWd8fDQ9PT1nKXt2YXIgaD1kLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2lmKGg9PT1lfHw4PT09aC5ub2RlVHlwZSYmaC5wYXJlbnROb2RlPT09ZSlicmVhaztpZig0PT09Zylmb3IoZz1kLnJldHVybjtudWxsIT09Zzspe3ZhciBrPWcudGFnO2lmKDM9PT1rfHw0PT09aylpZihrPWcuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8saz09PWV8fDg9PT1rLm5vZGVUeXBlJiZrLnBhcmVudE5vZGU9PT1lKXJldHVybjtnPWcucmV0dXJufWZvcig7bnVsbCE9PWg7KXtnPXdjKGgpO2lmKG51bGw9PT1nKXJldHVybjtrPWcudGFnO2lmKDU9PT1rfHw2PT09ayl7ZD1mPWc7Y29udGludWUgYX1oPWgucGFyZW50Tm9kZX19ZD1kLnJldHVybn1OYihmdW5jdGlvbigpe3ZhciBkPWYsZT14YihjKSxnPVtdO1xuYTp7dmFyIGg9TWMuZ2V0KGEpO2lmKHZvaWQgMCE9PWgpe3ZhciBrPXRkLHg9YTtzd2l0Y2goYSl7Y2FzZSBcImtleXByZXNzXCI6aWYoMD09PW9kKGMpKWJyZWFrIGE7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjprPVJkO2JyZWFrO2Nhc2UgXCJmb2N1c2luXCI6eD1cImZvY3VzXCI7az1GZDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjp4PVwiYmx1clwiO2s9RmQ7YnJlYWs7Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6az1GZDticmVhaztjYXNlIFwiY2xpY2tcIjppZigyPT09Yy5idXR0b24pYnJlYWsgYTtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOms9QmQ7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6az1cbkRkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOms9VmQ7YnJlYWs7Y2FzZSBJYzpjYXNlIEpjOmNhc2UgS2M6az1IZDticmVhaztjYXNlIExjOms9WGQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOms9dmQ7YnJlYWs7Y2FzZSBcIndoZWVsXCI6az1aZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjprPUpkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOms9VGR9dmFyIHc9MCE9PShiJjQpLHo9IXcmJlwic2Nyb2xsXCI9PT1hLHU9dz9udWxsIT09aD9oK1wiQ2FwdHVyZVwiOm51bGw6aDt3PVtdO2Zvcih2YXIgdD1kLHE7bnVsbCE9PVxudDspe3E9dDt2YXIgdj1xLnN0YXRlTm9kZTs1PT09cS50YWcmJm51bGwhPT12JiYocT12LG51bGwhPT11JiYodj1PYih0LHUpLG51bGwhPXYmJncucHVzaChlZih0LHYscSkpKSk7aWYoeilicmVhazt0PXQucmV0dXJufTA8dy5sZW5ndGgmJihoPW5ldyBrKGgseCxudWxsLGMsZSksZy5wdXNoKHtldmVudDpoLGxpc3RlbmVyczp3fSkpfX1pZigwPT09KGImNykpe2E6e2g9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWE7az1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoaCYmMD09PShiJjE2KSYmKHg9Yy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KSYmKHdjKHgpfHx4W2ZmXSkpYnJlYWsgYTtpZihrfHxoKXtoPWUud2luZG93PT09ZT9lOihoPWUub3duZXJEb2N1bWVudCk/aC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3c6d2luZG93O2lmKGspe2lmKHg9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCxrPWQseD14P3djKHgpOm51bGwsbnVsbCE9PVxueCYmKHo9WmIoeCkseCE9PXp8fDUhPT14LnRhZyYmNiE9PXgudGFnKSl4PW51bGx9ZWxzZSBrPW51bGwseD1kO2lmKGshPT14KXt3PUJkO3Y9XCJvbk1vdXNlTGVhdmVcIjt1PVwib25Nb3VzZUVudGVyXCI7dD1cIm1vdXNlXCI7aWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKXc9VGQsdj1cIm9uUG9pbnRlckxlYXZlXCIsdT1cIm9uUG9pbnRlckVudGVyXCIsdD1cInBvaW50ZXJcIjt6PW51bGw9PWs/aDp1ZShrKTtxPW51bGw9PXg/aDp1ZSh4KTtoPW5ldyB3KHYsdCtcImxlYXZlXCIsayxjLGUpO2gudGFyZ2V0PXo7aC5yZWxhdGVkVGFyZ2V0PXE7dj1udWxsO3djKGUpPT09ZCYmKHc9bmV3IHcodSx0K1wiZW50ZXJcIix4LGMsZSksdy50YXJnZXQ9cSx3LnJlbGF0ZWRUYXJnZXQ9eix2PXcpO3o9djtpZihrJiZ4KWI6e3c9azt1PXg7dD0wO2ZvcihxPXc7cTtxPWdmKHEpKXQrKztxPTA7Zm9yKHY9dTt2O3Y9Z2YodikpcSsrO2Zvcig7MDx0LXE7KXc9Z2YodyksdC0tO2Zvcig7MDxxLXQ7KXU9XG5nZih1KSxxLS07Zm9yKDt0LS07KXtpZih3PT09dXx8bnVsbCE9PXUmJnc9PT11LmFsdGVybmF0ZSlicmVhayBiO3c9Z2Yodyk7dT1nZih1KX13PW51bGx9ZWxzZSB3PW51bGw7bnVsbCE9PWsmJmhmKGcsaCxrLHcsITEpO251bGwhPT14JiZudWxsIT09eiYmaGYoZyx6LHgsdywhMCl9fX1hOntoPWQ/dWUoZCk6d2luZG93O2s9aC5ub2RlTmFtZSYmaC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwic2VsZWN0XCI9PT1rfHxcImlucHV0XCI9PT1rJiZcImZpbGVcIj09PWgudHlwZSl2YXIgSj12ZTtlbHNlIGlmKG1lKGgpKWlmKHdlKUo9RmU7ZWxzZXtKPURlO3ZhciBLPUNlfWVsc2Uoaz1oLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09ay50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09aC50eXBlfHxcInJhZGlvXCI9PT1oLnR5cGUpJiYoSj1FZSk7aWYoSiYmKEo9SihhLGQpKSl7bmUoZyxKLGMsZSk7YnJlYWsgYX1LJiZLKGEsaCxkKTtcImZvY3Vzb3V0XCI9PT1hJiYoSz1oLl93cmFwcGVyU3RhdGUpJiZcbksuY29udHJvbGxlZCYmXCJudW1iZXJcIj09PWgudHlwZSYmYmIoaCxcIm51bWJlclwiLGgudmFsdWUpfUs9ZD91ZShkKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6aWYobWUoSyl8fFwidHJ1ZVwiPT09Sy5jb250ZW50RWRpdGFibGUpUWU9SyxSZT1kLFNlPW51bGw7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6U2U9UmU9UWU9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6VGU9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOlRlPSExO1VlKGcsYyxlKTticmVhaztjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoUGUpYnJlYWs7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjpVZShnLGMsZSl9dmFyIFE7aWYoYWUpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6dmFyIEw9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIjticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOkw9XCJvbkNvbXBvc2l0aW9uRW5kXCI7YnJlYWsgYjtcbmNhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOkw9XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCI7YnJlYWsgYn1MPXZvaWQgMH1lbHNlIGllP2dlKGEsYykmJihMPVwib25Db21wb3NpdGlvbkVuZFwiKTpcImtleWRvd25cIj09PWEmJjIyOT09PWMua2V5Q29kZSYmKEw9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIik7TCYmKGRlJiZcImtvXCIhPT1jLmxvY2FsZSYmKGllfHxcIm9uQ29tcG9zaXRpb25TdGFydFwiIT09TD9cIm9uQ29tcG9zaXRpb25FbmRcIj09PUwmJmllJiYoUT1uZCgpKTooa2Q9ZSxsZD1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxpZT0hMCkpLEs9b2UoZCxMKSwwPEsubGVuZ3RoJiYoTD1uZXcgTGQoTCxhLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OkwsbGlzdGVuZXJzOkt9KSxRP0wuZGF0YT1ROihRPWhlKGMpLG51bGwhPT1RJiYoTC5kYXRhPVEpKSkpO2lmKFE9Y2U/amUoYSxjKTprZShhLGMpKWQ9b2UoZCxcIm9uQmVmb3JlSW5wdXRcIiksMDxkLmxlbmd0aCYmKGU9bmV3IExkKFwib25CZWZvcmVJbnB1dFwiLFxuXCJiZWZvcmVpbnB1dFwiLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmUsbGlzdGVuZXJzOmR9KSxlLmRhdGE9USl9c2UoZyxiKX0pfWZ1bmN0aW9uIGVmKGEsYixjKXtyZXR1cm57aW5zdGFuY2U6YSxsaXN0ZW5lcjpiLGN1cnJlbnRUYXJnZXQ6Y319ZnVuY3Rpb24gb2UoYSxiKXtmb3IodmFyIGM9YitcIkNhcHR1cmVcIixkPVtdO251bGwhPT1hOyl7dmFyIGU9YSxmPWUuc3RhdGVOb2RlOzU9PT1lLnRhZyYmbnVsbCE9PWYmJihlPWYsZj1PYihhLGMpLG51bGwhPWYmJmQudW5zaGlmdChlZihhLGYsZSkpLGY9T2IoYSxiKSxudWxsIT1mJiZkLnB1c2goZWYoYSxmLGUpKSk7YT1hLnJldHVybn1yZXR1cm4gZH1mdW5jdGlvbiBnZihhKXtpZihudWxsPT09YSlyZXR1cm4gbnVsbDtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfVxuZnVuY3Rpb24gaGYoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yi5fcmVhY3ROYW1lLGc9W107bnVsbCE9PWMmJmMhPT1kOyl7dmFyIGg9YyxrPWguYWx0ZXJuYXRlLGw9aC5zdGF0ZU5vZGU7aWYobnVsbCE9PWsmJms9PT1kKWJyZWFrOzU9PT1oLnRhZyYmbnVsbCE9PWwmJihoPWwsZT8oaz1PYihjLGYpLG51bGwhPWsmJmcudW5zaGlmdChlZihjLGssaCkpKTplfHwoaz1PYihjLGYpLG51bGwhPWsmJmcucHVzaChlZihjLGssaCkpKSk7Yz1jLnJldHVybn0wIT09Zy5sZW5ndGgmJmEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6Z30pfWZ1bmN0aW9uIGpmKCl7fXZhciBrZj1udWxsLGxmPW51bGw7ZnVuY3Rpb24gbWYoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4hIWIuYXV0b0ZvY3VzfXJldHVybiExfVxuZnVuY3Rpb24gbmYoYSxiKXtyZXR1cm5cInRleHRhcmVhXCI9PT1hfHxcIm9wdGlvblwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfXZhciBvZj1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCxwZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDA7ZnVuY3Rpb24gcWYoYSl7MT09PWEubm9kZVR5cGU/YS50ZXh0Q29udGVudD1cIlwiOjk9PT1hLm5vZGVUeXBlJiYoYT1hLmJvZHksbnVsbCE9YSYmKGEudGV4dENvbnRlbnQ9XCJcIikpfVxuZnVuY3Rpb24gcmYoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWt9cmV0dXJuIGF9ZnVuY3Rpb24gc2YoYSl7YT1hLnByZXZpb3VzU2libGluZztmb3IodmFyIGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIiRcIj09PWN8fFwiJCFcIj09PWN8fFwiJD9cIj09PWMpe2lmKDA9PT1iKXJldHVybiBhO2ItLX1lbHNlXCIvJFwiPT09YyYmYisrfWE9YS5wcmV2aW91c1NpYmxpbmd9cmV0dXJuIG51bGx9dmFyIHRmPTA7ZnVuY3Rpb24gdWYoYSl7cmV0dXJueyQkdHlwZW9mOkdhLHRvU3RyaW5nOmEsdmFsdWVPZjphfX12YXIgdmY9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksd2Y9XCJfX3JlYWN0RmliZXIkXCIrdmYseGY9XCJfX3JlYWN0UHJvcHMkXCIrdmYsZmY9XCJfX3JlYWN0Q29udGFpbmVyJFwiK3ZmLHlmPVwiX19yZWFjdEV2ZW50cyRcIit2ZjtcbmZ1bmN0aW9uIHdjKGEpe3ZhciBiPWFbd2ZdO2lmKGIpcmV0dXJuIGI7Zm9yKHZhciBjPWEucGFyZW50Tm9kZTtjOyl7aWYoYj1jW2ZmXXx8Y1t3Zl0pe2M9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWIuY2hpbGR8fG51bGwhPT1jJiZudWxsIT09Yy5jaGlsZClmb3IoYT1zZihhKTtudWxsIT09YTspe2lmKGM9YVt3Zl0pcmV0dXJuIGM7YT1zZihhKX1yZXR1cm4gYn1hPWM7Yz1hLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQ2IoYSl7YT1hW3dmXXx8YVtmZl07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnJiYxMyE9PWEudGFnJiYzIT09YS50YWc/bnVsbDphfWZ1bmN0aW9uIHVlKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt0aHJvdyBFcnJvcih5KDMzKSk7fWZ1bmN0aW9uIERiKGEpe3JldHVybiBhW3hmXXx8bnVsbH1cbmZ1bmN0aW9uICRlKGEpe3ZhciBiPWFbeWZdO3ZvaWQgMD09PWImJihiPWFbeWZdPW5ldyBTZXQpO3JldHVybiBifXZhciB6Zj1bXSxBZj0tMTtmdW5jdGlvbiBCZihhKXtyZXR1cm57Y3VycmVudDphfX1mdW5jdGlvbiBIKGEpezA+QWZ8fChhLmN1cnJlbnQ9emZbQWZdLHpmW0FmXT1udWxsLEFmLS0pfWZ1bmN0aW9uIEkoYSxiKXtBZisrO3pmW0FmXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIENmPXt9LE09QmYoQ2YpLE49QmYoITEpLERmPUNmO1xuZnVuY3Rpb24gRWYoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBDZjt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1mdW5jdGlvbiBGZihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uIEdmKCl7SChOKTtIKE0pfWZ1bmN0aW9uIEhmKGEsYixjKXtpZihNLmN1cnJlbnQhPT1DZil0aHJvdyBFcnJvcih5KDE2OCkpO0koTSxiKTtJKE4sYyl9XG5mdW5jdGlvbiBJZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7YT1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpaWYoIShlIGluIGEpKXRocm93IEVycm9yKHkoMTA4LFJhKGIpfHxcIlVua25vd25cIixlKSk7cmV0dXJuIG0oe30sYyxkKX1mdW5jdGlvbiBKZihhKXthPShhPWEuc3RhdGVOb2RlKSYmYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8Q2Y7RGY9TS5jdXJyZW50O0koTSxhKTtJKE4sTi5jdXJyZW50KTtyZXR1cm4hMH1mdW5jdGlvbiBLZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoIWQpdGhyb3cgRXJyb3IoeSgxNjkpKTtjPyhhPUlmKGEsYixEZiksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1hLEgoTiksSChNKSxJKE0sYSkpOkgoTik7SShOLGMpfVxudmFyIExmPW51bGwsTWY9bnVsbCxOZj1yLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxPZj1yLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssUGY9ci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxRZj1yLnVuc3RhYmxlX3Nob3VsZFlpZWxkLFJmPXIudW5zdGFibGVfcmVxdWVzdFBhaW50LFNmPXIudW5zdGFibGVfbm93LFRmPXIudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsVWY9ci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxWZj1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LFdmPXIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksWGY9ci51bnN0YWJsZV9Mb3dQcmlvcml0eSxZZj1yLnVuc3RhYmxlX0lkbGVQcmlvcml0eSxaZj17fSwkZj12b2lkIDAhPT1SZj9SZjpmdW5jdGlvbigpe30sYWc9bnVsbCxiZz1udWxsLGNnPSExLGRnPVNmKCksTz0xRTQ+ZGc/U2Y6ZnVuY3Rpb24oKXtyZXR1cm4gU2YoKS1kZ307XG5mdW5jdGlvbiBlZygpe3N3aXRjaChUZigpKXtjYXNlIFVmOnJldHVybiA5OTtjYXNlIFZmOnJldHVybiA5ODtjYXNlIFdmOnJldHVybiA5NztjYXNlIFhmOnJldHVybiA5NjtjYXNlIFlmOnJldHVybiA5NTtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBmZyhhKXtzd2l0Y2goYSl7Y2FzZSA5OTpyZXR1cm4gVWY7Y2FzZSA5ODpyZXR1cm4gVmY7Y2FzZSA5NzpyZXR1cm4gV2Y7Y2FzZSA5NjpyZXR1cm4gWGY7Y2FzZSA5NTpyZXR1cm4gWWY7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDMzMikpO319ZnVuY3Rpb24gZ2coYSxiKXthPWZnKGEpO3JldHVybiBOZihhLGIpfWZ1bmN0aW9uIGhnKGEsYixjKXthPWZnKGEpO3JldHVybiBPZihhLGIsYyl9ZnVuY3Rpb24gaWcoKXtpZihudWxsIT09Ymcpe3ZhciBhPWJnO2JnPW51bGw7UGYoYSl9amcoKX1cbmZ1bmN0aW9uIGpnKCl7aWYoIWNnJiZudWxsIT09YWcpe2NnPSEwO3ZhciBhPTA7dHJ5e3ZhciBiPWFnO2dnKDk5LGZ1bmN0aW9uKCl7Zm9yKDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTtkbyBjPWMoITApO3doaWxlKG51bGwhPT1jKX19KTthZz1udWxsfWNhdGNoKGMpe3Rocm93IG51bGwhPT1hZyYmKGFnPWFnLnNsaWNlKGErMSkpLE9mKFVmLGlnKSxjO31maW5hbGx5e2NnPSExfX19dmFyIGtnPXJhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnO2Z1bmN0aW9uIGxnKGEsYil7aWYoYSYmYS5kZWZhdWx0UHJvcHMpe2I9bSh7fSxiKTthPWEuZGVmYXVsdFByb3BzO2Zvcih2YXIgYyBpbiBhKXZvaWQgMD09PWJbY10mJihiW2NdPWFbY10pO3JldHVybiBifXJldHVybiBifXZhciBtZz1CZihudWxsKSxuZz1udWxsLG9nPW51bGwscGc9bnVsbDtmdW5jdGlvbiBxZygpe3BnPW9nPW5nPW51bGx9XG5mdW5jdGlvbiByZyhhKXt2YXIgYj1tZy5jdXJyZW50O0gobWcpO2EudHlwZS5fY29udGV4dC5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gc2coYSxiKXtmb3IoO251bGwhPT1hOyl7dmFyIGM9YS5hbHRlcm5hdGU7aWYoKGEuY2hpbGRMYW5lcyZiKT09PWIpaWYobnVsbD09PWN8fChjLmNoaWxkTGFuZXMmYik9PT1iKWJyZWFrO2Vsc2UgYy5jaGlsZExhbmVzfD1iO2Vsc2UgYS5jaGlsZExhbmVzfD1iLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKTthPWEucmV0dXJufX1mdW5jdGlvbiB0ZyhhLGIpe25nPWE7cGc9b2c9bnVsbDthPWEuZGVwZW5kZW5jaWVzO251bGwhPT1hJiZudWxsIT09YS5maXJzdENvbnRleHQmJigwIT09KGEubGFuZXMmYikmJih1Zz0hMCksYS5maXJzdENvbnRleHQ9bnVsbCl9XG5mdW5jdGlvbiB2ZyhhLGIpe2lmKHBnIT09YSYmITEhPT1iJiYwIT09Yil7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBifHwxMDczNzQxODIzPT09YilwZz1hLGI9MTA3Mzc0MTgyMztiPXtjb250ZXh0OmEsb2JzZXJ2ZWRCaXRzOmIsbmV4dDpudWxsfTtpZihudWxsPT09b2cpe2lmKG51bGw9PT1uZyl0aHJvdyBFcnJvcih5KDMwOCkpO29nPWI7bmcuZGVwZW5kZW5jaWVzPXtsYW5lczowLGZpcnN0Q29udGV4dDpiLHJlc3BvbmRlcnM6bnVsbH19ZWxzZSBvZz1vZy5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgd2c9ITE7ZnVuY3Rpb24geGcoYSl7YS51cGRhdGVRdWV1ZT17YmFzZVN0YXRlOmEubWVtb2l6ZWRTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6bnVsbCxsYXN0QmFzZVVwZGF0ZTpudWxsLHNoYXJlZDp7cGVuZGluZzpudWxsfSxlZmZlY3RzOm51bGx9fVxuZnVuY3Rpb24geWcoYSxiKXthPWEudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT09PWEmJihiLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmEuZmlyc3RCYXNlVXBkYXRlLGxhc3RCYXNlVXBkYXRlOmEubGFzdEJhc2VVcGRhdGUsc2hhcmVkOmEuc2hhcmVkLGVmZmVjdHM6YS5lZmZlY3RzfSl9ZnVuY3Rpb24gemcoYSxiKXtyZXR1cm57ZXZlbnRUaW1lOmEsbGFuZTpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbH19ZnVuY3Rpb24gQWcoYSxiKXthPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWEpe2E9YS5zaGFyZWQ7dmFyIGM9YS5wZW5kaW5nO251bGw9PT1jP2IubmV4dD1iOihiLm5leHQ9Yy5uZXh0LGMubmV4dD1iKTthLnBlbmRpbmc9Yn19XG5mdW5jdGlvbiBCZyhhLGIpe3ZhciBjPWEudXBkYXRlUXVldWUsZD1hLmFsdGVybmF0ZTtpZihudWxsIT09ZCYmKGQ9ZC51cGRhdGVRdWV1ZSxjPT09ZCkpe3ZhciBlPW51bGwsZj1udWxsO2M9Yy5maXJzdEJhc2VVcGRhdGU7aWYobnVsbCE9PWMpe2Rve3ZhciBnPXtldmVudFRpbWU6Yy5ldmVudFRpbWUsbGFuZTpjLmxhbmUsdGFnOmMudGFnLHBheWxvYWQ6Yy5wYXlsb2FkLGNhbGxiYWNrOmMuY2FsbGJhY2ssbmV4dDpudWxsfTtudWxsPT09Zj9lPWY9ZzpmPWYubmV4dD1nO2M9Yy5uZXh0fXdoaWxlKG51bGwhPT1jKTtudWxsPT09Zj9lPWY9YjpmPWYubmV4dD1ifWVsc2UgZT1mPWI7Yz17YmFzZVN0YXRlOmQuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTplLGxhc3RCYXNlVXBkYXRlOmYsc2hhcmVkOmQuc2hhcmVkLGVmZmVjdHM6ZC5lZmZlY3RzfTthLnVwZGF0ZVF1ZXVlPWM7cmV0dXJufWE9Yy5sYXN0QmFzZVVwZGF0ZTtudWxsPT09YT9jLmZpcnN0QmFzZVVwZGF0ZT1iOmEubmV4dD1cbmI7Yy5sYXN0QmFzZVVwZGF0ZT1ifVxuZnVuY3Rpb24gQ2coYSxiLGMsZCl7dmFyIGU9YS51cGRhdGVRdWV1ZTt3Zz0hMTt2YXIgZj1lLmZpcnN0QmFzZVVwZGF0ZSxnPWUubGFzdEJhc2VVcGRhdGUsaD1lLnNoYXJlZC5wZW5kaW5nO2lmKG51bGwhPT1oKXtlLnNoYXJlZC5wZW5kaW5nPW51bGw7dmFyIGs9aCxsPWsubmV4dDtrLm5leHQ9bnVsbDtudWxsPT09Zz9mPWw6Zy5uZXh0PWw7Zz1rO3ZhciBuPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1uKXtuPW4udXBkYXRlUXVldWU7dmFyIEE9bi5sYXN0QmFzZVVwZGF0ZTtBIT09ZyYmKG51bGw9PT1BP24uZmlyc3RCYXNlVXBkYXRlPWw6QS5uZXh0PWwsbi5sYXN0QmFzZVVwZGF0ZT1rKX19aWYobnVsbCE9PWYpe0E9ZS5iYXNlU3RhdGU7Zz0wO249bD1rPW51bGw7ZG97aD1mLmxhbmU7dmFyIHA9Zi5ldmVudFRpbWU7aWYoKGQmaCk9PT1oKXtudWxsIT09biYmKG49bi5uZXh0PXtldmVudFRpbWU6cCxsYW5lOjAsdGFnOmYudGFnLHBheWxvYWQ6Zi5wYXlsb2FkLGNhbGxiYWNrOmYuY2FsbGJhY2ssXG5uZXh0Om51bGx9KTthOnt2YXIgQz1hLHg9ZjtoPWI7cD1jO3N3aXRjaCh4LnRhZyl7Y2FzZSAxOkM9eC5wYXlsb2FkO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBDKXtBPUMuY2FsbChwLEEsaCk7YnJlYWsgYX1BPUM7YnJlYWsgYTtjYXNlIDM6Qy5mbGFncz1DLmZsYWdzJi00MDk3fDY0O2Nhc2UgMDpDPXgucGF5bG9hZDtoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBDP0MuY2FsbChwLEEsaCk6QztpZihudWxsPT09aHx8dm9pZCAwPT09aClicmVhayBhO0E9bSh7fSxBLGgpO2JyZWFrIGE7Y2FzZSAyOndnPSEwfX1udWxsIT09Zi5jYWxsYmFjayYmKGEuZmxhZ3N8PTMyLGg9ZS5lZmZlY3RzLG51bGw9PT1oP2UuZWZmZWN0cz1bZl06aC5wdXNoKGYpKX1lbHNlIHA9e2V2ZW50VGltZTpwLGxhbmU6aCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxuZXh0Om51bGx9LG51bGw9PT1uPyhsPW49cCxrPUEpOm49bi5uZXh0PXAsZ3w9aDtmPWYubmV4dDtpZihudWxsPT09XG5mKWlmKGg9ZS5zaGFyZWQucGVuZGluZyxudWxsPT09aClicmVhaztlbHNlIGY9aC5uZXh0LGgubmV4dD1udWxsLGUubGFzdEJhc2VVcGRhdGU9aCxlLnNoYXJlZC5wZW5kaW5nPW51bGx9d2hpbGUoMSk7bnVsbD09PW4mJihrPUEpO2UuYmFzZVN0YXRlPWs7ZS5maXJzdEJhc2VVcGRhdGU9bDtlLmxhc3RCYXNlVXBkYXRlPW47RGd8PWc7YS5sYW5lcz1nO2EubWVtb2l6ZWRTdGF0ZT1BfX1mdW5jdGlvbiBFZyhhLGIsYyl7YT1iLmVmZmVjdHM7Yi5lZmZlY3RzPW51bGw7aWYobnVsbCE9PWEpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGQ9YVtiXSxlPWQuY2FsbGJhY2s7aWYobnVsbCE9PWUpe2QuY2FsbGJhY2s9bnVsbDtkPWM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGUpdGhyb3cgRXJyb3IoeSgxOTEsZSkpO2UuY2FsbChkKX19fXZhciBGZz0obmV3IGFhLkNvbXBvbmVudCkucmVmcztcbmZ1bmN0aW9uIEdnKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjptKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7MD09PWEubGFuZXMmJihhLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1jKX1cbnZhciBLZz17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxzKT9aYihhKT09PWE6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1IZygpLGU9SWcoYSksZj16ZyhkLGUpO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtBZyhhLGYpO0pnKGEsZSxkKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1IZygpLGU9SWcoYSksZj16ZyhkLGUpO2YudGFnPTE7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBjPUhnKCksZD1JZyhhKSxlPXpnKGMsZCk7ZS50YWc9Mjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGUuY2FsbGJhY2s9XG5iKTtBZyhhLGUpO0pnKGEsZCxjKX19O2Z1bmN0aW9uIExnKGEsYixjLGQsZSxmLGcpe2E9YS5zdGF0ZU5vZGU7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuc2hvdWxkQ29tcG9uZW50VXBkYXRlP2Euc2hvdWxkQ29tcG9uZW50VXBkYXRlKGQsZixnKTpiLnByb3RvdHlwZSYmYi5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQ/IUplKGMsZCl8fCFKZShlLGYpOiEwfVxuZnVuY3Rpb24gTWcoYSxiLGMpe3ZhciBkPSExLGU9Q2Y7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2Y9dmcoZik6KGU9RmYoYik/RGY6TS5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/RWYoYSxlKTpDZik7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPUtnO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbHM9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gTmcoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJktnLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24gT2coYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz1GZzt4ZyhhKTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PXZnKGYpOihmPUZmKGIpP0RmOk0uY3VycmVudCxlLmNvbnRleHQ9RWYoYSxmKSk7Q2coYSxjLGUsZCk7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKEdnKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fFxuKGI9ZS5zdGF0ZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJktnLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLENnKGEsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZmxhZ3N8PTQpfXZhciBQZz1BcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gUWcoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDMwOSkpO3ZhciBkPWMuc3RhdGVOb2RlfWlmKCFkKXRocm93IEVycm9yKHkoMTQ3LGEpKTt2YXIgZT1cIlwiK2E7aWYobnVsbCE9PWImJm51bGwhPT1iLnJlZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIucmVmJiZiLnJlZi5fc3RyaW5nUmVmPT09ZSlyZXR1cm4gYi5yZWY7Yj1mdW5jdGlvbihhKXt2YXIgYj1kLnJlZnM7Yj09PUZnJiYoYj1kLnJlZnM9e30pO251bGw9PT1hP2RlbGV0ZSBiW2VdOmJbZV09YX07Yi5fc3RyaW5nUmVmPWU7cmV0dXJuIGJ9aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhKXRocm93IEVycm9yKHkoMjg0KSk7aWYoIWMuX293bmVyKXRocm93IEVycm9yKHkoMjkwLGEpKTt9cmV0dXJuIGF9XG5mdW5jdGlvbiBSZyhhLGIpe2lmKFwidGV4dGFyZWFcIiE9PWEudHlwZSl0aHJvdyBFcnJvcih5KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO31cbmZ1bmN0aW9uIFNnKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZmxhZ3M9OH19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIpe2E9VGcoYSxiKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZmxhZ3M9MixcbmMpOmQ7Yi5mbGFncz0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmbnVsbD09PWIuYWx0ZXJuYXRlJiYoYi5mbGFncz0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9VWcoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gayhhLGIsYyxkKXtpZihudWxsIT09YiYmYi5lbGVtZW50VHlwZT09PWMudHlwZSlyZXR1cm4gZD1lKGIsYy5wcm9wcyksZC5yZWY9UWcoYSxiLGMpLGQucmV0dXJuPWEsZDtkPVZnKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPVFnKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPVxuV2coYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG4oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPVhnKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gQShhLGIsYyl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9VWcoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGM9VmcoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksYy5yZWY9UWcoYSxudWxsLGIpLGMucmV0dXJuPWEsYztjYXNlIHRhOnJldHVybiBiPVdnKGIsYS5tb2RlLGMpLGIucmV0dXJuPWEsYn1pZihQZyhiKXx8TGEoYikpcmV0dXJuIGI9WGcoYixcbmEubW9kZSxjLG51bGwpLGIucmV0dXJuPWEsYjtSZyhhLGIpfXJldHVybiBudWxsfWZ1bmN0aW9uIHAoYSxiLGMsZCl7dmFyIGU9bnVsbCE9PWI/Yi5rZXk6bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2Ugc2E6cmV0dXJuIGMua2V5PT09ZT9jLnR5cGU9PT11YT9uKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsZSk6ayhhLGIsYyxkKTpudWxsO2Nhc2UgdGE6cmV0dXJuIGMua2V5PT09ZT9sKGEsYixjLGQpOm51bGx9aWYoUGcoYyl8fExhKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm4oYSxiLGMsZCxudWxsKTtSZyhhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIEMoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGR8fFwibnVtYmVyXCI9PT10eXBlb2YgZClyZXR1cm4gYT1hLmdldChjKXx8XG5udWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsZC50eXBlPT09dWE/bihiLGEsZC5wcm9wcy5jaGlsZHJlbixlLGQua2V5KTprKGIsYSxkLGUpO2Nhc2UgdGE6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGwoYixhLGQsZSl9aWYoUGcoZCl8fExhKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG4oYixhLGQsZSxudWxsKTtSZyhiLGQpfXJldHVybiBudWxsfWZ1bmN0aW9uIHgoZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsdD1udWxsLHU9Zyx6PWc9MCxxPW51bGw7bnVsbCE9PXUmJno8aC5sZW5ndGg7eisrKXt1LmluZGV4Pno/KHE9dSx1PW51bGwpOnE9dS5zaWJsaW5nO3ZhciBuPXAoZSx1LGhbel0sayk7aWYobnVsbD09PW4pe251bGw9PT11JiYodT1xKTticmVha31hJiZ1JiZudWxsPT09XG5uLmFsdGVybmF0ZSYmYihlLHUpO2c9ZihuLGcseik7bnVsbD09PXQ/bD1uOnQuc2libGluZz1uO3Q9bjt1PXF9aWYoej09PWgubGVuZ3RoKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDt6PGgubGVuZ3RoO3orKyl1PUEoZSxoW3pdLGspLG51bGwhPT11JiYoZz1mKHUsZyx6KSxudWxsPT09dD9sPXU6dC5zaWJsaW5nPXUsdD11KTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7ejxoLmxlbmd0aDt6KyspcT1DKHUsZSx6LGhbel0sayksbnVsbCE9PXEmJihhJiZudWxsIT09cS5hbHRlcm5hdGUmJnUuZGVsZXRlKG51bGw9PT1xLmtleT96OnEua2V5KSxnPWYocSxnLHopLG51bGw9PT10P2w9cTp0LnNpYmxpbmc9cSx0PXEpO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9ZnVuY3Rpb24gdyhlLGcsaCxrKXt2YXIgbD1MYShoKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgbCl0aHJvdyBFcnJvcih5KDE1MCkpO2g9bC5jYWxsKGgpO2lmKG51bGw9PVxuaCl0aHJvdyBFcnJvcih5KDE1MSkpO2Zvcih2YXIgdD1sPW51bGwsdT1nLHo9Zz0wLHE9bnVsbCxuPWgubmV4dCgpO251bGwhPT11JiYhbi5kb25lO3orKyxuPWgubmV4dCgpKXt1LmluZGV4Pno/KHE9dSx1PW51bGwpOnE9dS5zaWJsaW5nO3ZhciB3PXAoZSx1LG4udmFsdWUsayk7aWYobnVsbD09PXcpe251bGw9PT11JiYodT1xKTticmVha31hJiZ1JiZudWxsPT09dy5hbHRlcm5hdGUmJmIoZSx1KTtnPWYodyxnLHopO251bGw9PT10P2w9dzp0LnNpYmxpbmc9dzt0PXc7dT1xfWlmKG4uZG9uZSlyZXR1cm4gYyhlLHUpLGw7aWYobnVsbD09PXUpe2Zvcig7IW4uZG9uZTt6Kyssbj1oLm5leHQoKSluPUEoZSxuLnZhbHVlLGspLG51bGwhPT1uJiYoZz1mKG4sZyx6KSxudWxsPT09dD9sPW46dC5zaWJsaW5nPW4sdD1uKTtyZXR1cm4gbH1mb3IodT1kKGUsdSk7IW4uZG9uZTt6Kyssbj1oLm5leHQoKSluPUModSxlLHosbi52YWx1ZSxrKSxudWxsIT09biYmKGEmJm51bGwhPT1uLmFsdGVybmF0ZSYmXG51LmRlbGV0ZShudWxsPT09bi5rZXk/ejpuLmtleSksZz1mKG4sZyx6KSxudWxsPT09dD9sPW46dC5zaWJsaW5nPW4sdD1uKTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfXJldHVybiBmdW5jdGlvbihhLGQsZixoKXt2YXIgaz1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT11YSYmbnVsbD09PWYua2V5O2smJihmPWYucHJvcHMuY2hpbGRyZW4pO3ZhciBsPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY7aWYobClzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSBzYTphOntsPWYua2V5O2ZvcihrPWQ7bnVsbCE9PWs7KXtpZihrLmtleT09PWwpe3N3aXRjaChrLnRhZyl7Y2FzZSA3OmlmKGYudHlwZT09PXVhKXtjKGEsay5zaWJsaW5nKTtkPWUoayxmLnByb3BzLmNoaWxkcmVuKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWJyZWFrO2RlZmF1bHQ6aWYoay5lbGVtZW50VHlwZT09PWYudHlwZSl7YyhhLGsuc2libGluZyk7XG5kPWUoayxmLnByb3BzKTtkLnJlZj1RZyhhLGssZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX19YyhhLGspO2JyZWFrfWVsc2UgYihhLGspO2s9ay5zaWJsaW5nfWYudHlwZT09PXVhPyhkPVhnKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1WZyhmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1RZyhhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2UgdGE6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9XG5XZyhmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKX1pZihcInN0cmluZ1wiPT09dHlwZW9mIGZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZiksZC5yZXR1cm49YSxhPWQpOihjKGEsZCksZD1VZyhmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKTtpZihQZyhmKSlyZXR1cm4geChhLGQsZixoKTtpZihMYShmKSlyZXR1cm4gdyhhLGQsZixoKTtsJiZSZyhhLGYpO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgZiYmIWspc3dpdGNoKGEudGFnKXtjYXNlIDE6Y2FzZSAyMjpjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRocm93IEVycm9yKHkoMTUyLFJhKGEudHlwZSl8fFwiQ29tcG9uZW50XCIpKTt9cmV0dXJuIGMoYSxkKX19dmFyIFlnPVNnKCEwKSxaZz1TZyghMSksJGc9e30sYWg9QmYoJGcpLGJoPUJmKCRnKSxjaD1CZigkZyk7XG5mdW5jdGlvbiBkaChhKXtpZihhPT09JGcpdGhyb3cgRXJyb3IoeSgxNzQpKTtyZXR1cm4gYX1mdW5jdGlvbiBlaChhLGIpe0koY2gsYik7SShiaCxhKTtJKGFoLCRnKTthPWIubm9kZVR5cGU7c3dpdGNoKGEpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOm1iKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDphPTg9PT1hP2IucGFyZW50Tm9kZTpiLGI9YS5uYW1lc3BhY2VVUkl8fG51bGwsYT1hLnRhZ05hbWUsYj1tYihiLGEpfUgoYWgpO0koYWgsYil9ZnVuY3Rpb24gZmgoKXtIKGFoKTtIKGJoKTtIKGNoKX1mdW5jdGlvbiBnaChhKXtkaChjaC5jdXJyZW50KTt2YXIgYj1kaChhaC5jdXJyZW50KTt2YXIgYz1tYihiLGEudHlwZSk7YiE9PWMmJihJKGJoLGEpLEkoYWgsYykpfWZ1bmN0aW9uIGhoKGEpe2JoLmN1cnJlbnQ9PT1hJiYoSChhaCksSChiaCkpfXZhciBQPUJmKDApO1xuZnVuY3Rpb24gaWgoYSl7Zm9yKHZhciBiPWE7bnVsbCE9PWI7KXtpZigxMz09PWIudGFnKXt2YXIgYz1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsPT09Y3x8XCIkP1wiPT09Yy5kYXRhfHxcIiQhXCI9PT1jLmRhdGEpKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZmxhZ3MmNjQpKXJldHVybiBifWVsc2UgaWYobnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ31yZXR1cm4gbnVsbH12YXIgamg9bnVsbCxraD1udWxsLGxoPSExO1xuZnVuY3Rpb24gbWgoYSxiKXt2YXIgYz1uaCg1LG51bGwsbnVsbCwwKTtjLmVsZW1lbnRUeXBlPVwiREVMRVRFRFwiO2MudHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yy5mbGFncz04O251bGwhPT1hLmxhc3RFZmZlY3Q/KGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsYS5sYXN0RWZmZWN0PWMpOmEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PWN9ZnVuY3Rpb24gb2goYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSAxMzpyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHBoKGEpe2lmKGxoKXt2YXIgYj1raDtpZihiKXt2YXIgYz1iO2lmKCFvaChhLGIpKXtiPXJmKGMubmV4dFNpYmxpbmcpO2lmKCFifHwhb2goYSxiKSl7YS5mbGFncz1hLmZsYWdzJi0xMDI1fDI7bGg9ITE7amg9YTtyZXR1cm59bWgoamgsYyl9amg9YTtraD1yZihiLmZpcnN0Q2hpbGQpfWVsc2UgYS5mbGFncz1hLmZsYWdzJi0xMDI1fDIsbGg9ITEsamg9YX19ZnVuY3Rpb24gcWgoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxMyE9PWEudGFnOylhPWEucmV0dXJuO2poPWF9XG5mdW5jdGlvbiByaChhKXtpZihhIT09amgpcmV0dXJuITE7aWYoIWxoKXJldHVybiBxaChhKSxsaD0hMCwhMTt2YXIgYj1hLnR5cGU7aWYoNSE9PWEudGFnfHxcImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIW5mKGIsYS5tZW1vaXplZFByb3BzKSlmb3IoYj1raDtiOyltaChhLGIpLGI9cmYoYi5uZXh0U2libGluZyk7cWgoYSk7aWYoMTM9PT1hLnRhZyl7YT1hLm1lbW9pemVkU3RhdGU7YT1udWxsIT09YT9hLmRlaHlkcmF0ZWQ6bnVsbDtpZighYSl0aHJvdyBFcnJvcih5KDMxNykpO2E6e2E9YS5uZXh0U2libGluZztmb3IoYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiLyRcIj09PWMpe2lmKDA9PT1iKXtraD1yZihhLm5leHRTaWJsaW5nKTticmVhayBhfWItLX1lbHNlXCIkXCIhPT1jJiZcIiQhXCIhPT1jJiZcIiQ/XCIhPT1jfHxiKyt9YT1hLm5leHRTaWJsaW5nfWtoPW51bGx9fWVsc2Uga2g9amg/cmYoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9XG5mdW5jdGlvbiBzaCgpe2toPWpoPW51bGw7bGg9ITF9dmFyIHRoPVtdO2Z1bmN0aW9uIHVoKCl7Zm9yKHZhciBhPTA7YTx0aC5sZW5ndGg7YSsrKXRoW2FdLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PW51bGw7dGgubGVuZ3RoPTB9dmFyIHZoPXJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsd2g9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcseGg9MCxSPW51bGwsUz1udWxsLFQ9bnVsbCx5aD0hMSx6aD0hMTtmdW5jdGlvbiBBaCgpe3Rocm93IEVycm9yKHkoMzIxKSk7fWZ1bmN0aW9uIEJoKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIUhlKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBDaChhLGIsYyxkLGUsZil7eGg9ZjtSPWI7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2IubGFuZXM9MDt2aC5jdXJyZW50PW51bGw9PT1hfHxudWxsPT09YS5tZW1vaXplZFN0YXRlP0RoOkVoO2E9YyhkLGUpO2lmKHpoKXtmPTA7ZG97emg9ITE7aWYoISgyNT5mKSl0aHJvdyBFcnJvcih5KDMwMSkpO2YrPTE7VD1TPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO3ZoLmN1cnJlbnQ9Rmg7YT1jKGQsZSl9d2hpbGUoemgpfXZoLmN1cnJlbnQ9R2g7Yj1udWxsIT09UyYmbnVsbCE9PVMubmV4dDt4aD0wO1Q9Uz1SPW51bGw7eWg9ITE7aWYoYil0aHJvdyBFcnJvcih5KDMwMCkpO3JldHVybiBhfWZ1bmN0aW9uIEhoKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxiYXNlUXVldWU6bnVsbCxxdWV1ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hO3JldHVybiBUfVxuZnVuY3Rpb24gSWgoKXtpZihudWxsPT09Uyl7dmFyIGE9Ui5hbHRlcm5hdGU7YT1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbH1lbHNlIGE9Uy5uZXh0O3ZhciBiPW51bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZTpULm5leHQ7aWYobnVsbCE9PWIpVD1iLFM9YTtlbHNle2lmKG51bGw9PT1hKXRocm93IEVycm9yKHkoMzEwKSk7Uz1hO2E9e21lbW9pemVkU3RhdGU6Uy5tZW1vaXplZFN0YXRlLGJhc2VTdGF0ZTpTLmJhc2VTdGF0ZSxiYXNlUXVldWU6Uy5iYXNlUXVldWUscXVldWU6Uy5xdWV1ZSxuZXh0Om51bGx9O251bGw9PT1UP1IubWVtb2l6ZWRTdGF0ZT1UPWE6VD1ULm5leHQ9YX1yZXR1cm4gVH1mdW5jdGlvbiBKaChhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIEtoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9UyxlPWQuYmFzZVF1ZXVlLGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXtpZihudWxsIT09ZSl7dmFyIGc9ZS5uZXh0O2UubmV4dD1mLm5leHQ7Zi5uZXh0PWd9ZC5iYXNlUXVldWU9ZT1mO2MucGVuZGluZz1udWxsfWlmKG51bGwhPT1lKXtlPWUubmV4dDtkPWQuYmFzZVN0YXRlO3ZhciBoPWc9Zj1udWxsLGs9ZTtkb3t2YXIgbD1rLmxhbmU7aWYoKHhoJmwpPT09bCludWxsIT09aCYmKGg9aC5uZXh0PXtsYW5lOjAsYWN0aW9uOmsuYWN0aW9uLGVhZ2VyUmVkdWNlcjprLmVhZ2VyUmVkdWNlcixlYWdlclN0YXRlOmsuZWFnZXJTdGF0ZSxuZXh0Om51bGx9KSxkPWsuZWFnZXJSZWR1Y2VyPT09YT9rLmVhZ2VyU3RhdGU6YShkLGsuYWN0aW9uKTtlbHNle3ZhciBuPXtsYW5lOmwsYWN0aW9uOmsuYWN0aW9uLGVhZ2VyUmVkdWNlcjprLmVhZ2VyUmVkdWNlcixcbmVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH07bnVsbD09PWg/KGc9aD1uLGY9ZCk6aD1oLm5leHQ9bjtSLmxhbmVzfD1sO0RnfD1sfWs9ay5uZXh0fXdoaWxlKG51bGwhPT1rJiZrIT09ZSk7bnVsbD09PWg/Zj1kOmgubmV4dD1nO0hlKGQsYi5tZW1vaXplZFN0YXRlKXx8KHVnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZDtiLmJhc2VTdGF0ZT1mO2IuYmFzZVF1ZXVlPWg7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1kfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBMaChhKXt2YXIgYj1JaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih5KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPWMuZGlzcGF0Y2gsZT1jLnBlbmRpbmcsZj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUpe2MucGVuZGluZz1udWxsO3ZhciBnPWU9ZS5uZXh0O2RvIGY9YShmLGcuYWN0aW9uKSxnPWcubmV4dDt3aGlsZShnIT09ZSk7SGUoZixiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO251bGw9PT1iLmJhc2VRdWV1ZSYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bZixkXX1cbmZ1bmN0aW9uIE1oKGEsYixjKXt2YXIgZD1iLl9nZXRWZXJzaW9uO2Q9ZChiLl9zb3VyY2UpO3ZhciBlPWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk7aWYobnVsbCE9PWUpYT1lPT09ZDtlbHNlIGlmKGE9YS5tdXRhYmxlUmVhZExhbmVzLGE9KHhoJmEpPT09YSliLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWQsdGgucHVzaChiKTtpZihhKXJldHVybiBjKGIuX3NvdXJjZSk7dGgucHVzaChiKTt0aHJvdyBFcnJvcih5KDM1MCkpO31cbmZ1bmN0aW9uIE5oKGEsYixjLGQpe3ZhciBlPVU7aWYobnVsbD09PWUpdGhyb3cgRXJyb3IoeSgzNDkpKTt2YXIgZj1iLl9nZXRWZXJzaW9uLGc9ZihiLl9zb3VyY2UpLGg9dmguY3VycmVudCxrPWgudXNlU3RhdGUoZnVuY3Rpb24oKXtyZXR1cm4gTWgoZSxiLGMpfSksbD1rWzFdLG49a1swXTtrPVQ7dmFyIEE9YS5tZW1vaXplZFN0YXRlLHA9QS5yZWZzLEM9cC5nZXRTbmFwc2hvdCx4PUEuc291cmNlO0E9QS5zdWJzY3JpYmU7dmFyIHc9UjthLm1lbW9pemVkU3RhdGU9e3JlZnM6cCxzb3VyY2U6YixzdWJzY3JpYmU6ZH07aC51c2VFZmZlY3QoZnVuY3Rpb24oKXtwLmdldFNuYXBzaG90PWM7cC5zZXRTbmFwc2hvdD1sO3ZhciBhPWYoYi5fc291cmNlKTtpZighSGUoZyxhKSl7YT1jKGIuX3NvdXJjZSk7SGUobixhKXx8KGwoYSksYT1JZyh3KSxlLm11dGFibGVSZWFkTGFuZXN8PWEmZS5wZW5kaW5nTGFuZXMpO2E9ZS5tdXRhYmxlUmVhZExhbmVzO2UuZW50YW5nbGVkTGFuZXN8PWE7Zm9yKHZhciBkPVxuZS5lbnRhbmdsZW1lbnRzLGg9YTswPGg7KXt2YXIgaz0zMS1WYyhoKSx2PTE8PGs7ZFtrXXw9YTtoJj1+dn19fSxbYyxiLGRdKTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3JldHVybiBkKGIuX3NvdXJjZSxmdW5jdGlvbigpe3ZhciBhPXAuZ2V0U25hcHNob3QsYz1wLnNldFNuYXBzaG90O3RyeXtjKGEoYi5fc291cmNlKSk7dmFyIGQ9SWcodyk7ZS5tdXRhYmxlUmVhZExhbmVzfD1kJmUucGVuZGluZ0xhbmVzfWNhdGNoKHEpe2MoZnVuY3Rpb24oKXt0aHJvdyBxO30pfX0pfSxbYixkXSk7SGUoQyxjKSYmSGUoeCxiKSYmSGUoQSxkKXx8KGE9e3BlbmRpbmc6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6SmgsbGFzdFJlbmRlcmVkU3RhdGU6bn0sYS5kaXNwYXRjaD1sPU9oLmJpbmQobnVsbCxSLGEpLGsucXVldWU9YSxrLmJhc2VRdWV1ZT1udWxsLG49TWgoZSxiLGMpLGsubWVtb2l6ZWRTdGF0ZT1rLmJhc2VTdGF0ZT1uKTtyZXR1cm4gbn1cbmZ1bmN0aW9uIFBoKGEsYixjKXt2YXIgZD1JaCgpO3JldHVybiBOaChkLGEsYixjKX1mdW5jdGlvbiBRaChhKXt2YXIgYj1IaCgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9Yi5xdWV1ZT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9T2guYmluZChudWxsLFIsYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX1cbmZ1bmN0aW9uIFJoKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtiPVIudXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbH0sUi51cGRhdGVRdWV1ZT1iLGIubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGM9Yi5sYXN0RWZmZWN0LG51bGw9PT1jP2IubGFzdEVmZmVjdD1hLm5leHQ9YTooZD1jLm5leHQsYy5uZXh0PWEsYS5uZXh0PWQsYi5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBTaChhKXt2YXIgYj1IaCgpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfWZ1bmN0aW9uIFRoKCl7cmV0dXJuIEloKCkubWVtb2l6ZWRTdGF0ZX1mdW5jdGlvbiBVaChhLGIsYyxkKXt2YXIgZT1IaCgpO1IuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiBWaChhLGIsYyxkKXt2YXIgZT1JaCgpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1TKXt2YXIgZz1TLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJkJoKGQsZy5kZXBzKSl7UmgoYixjLGYsZCk7cmV0dXJufX1SLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1SaCgxfGIsYyxmLGQpfWZ1bmN0aW9uIFdoKGEsYil7cmV0dXJuIFVoKDUxNiw0LGEsYil9ZnVuY3Rpb24gWGgoYSxiKXtyZXR1cm4gVmgoNTE2LDQsYSxiKX1mdW5jdGlvbiBZaChhLGIpe3JldHVybiBWaCg0LDIsYSxiKX1mdW5jdGlvbiBaaChhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fVxuZnVuY3Rpb24gJGgoYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBWaCg0LDIsWmguYmluZChudWxsLGIsYSksYyl9ZnVuY3Rpb24gYWkoKXt9ZnVuY3Rpb24gYmkoYSxiKXt2YXIgYz1JaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmQmgoYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9ZnVuY3Rpb24gY2koYSxiKXt2YXIgYz1JaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmQmgoYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9XG5mdW5jdGlvbiBkaShhLGIpe3ZhciBjPWVnKCk7Z2coOTg+Yz85ODpjLGZ1bmN0aW9uKCl7YSghMCl9KTtnZyg5NzxjPzk3OmMsZnVuY3Rpb24oKXt2YXIgYz13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7YSghMSksYigpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1jfX0pfVxuZnVuY3Rpb24gT2goYSxiLGMpe3ZhciBkPUhnKCksZT1JZyhhKSxmPXtsYW5lOmUsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sZz1iLnBlbmRpbmc7bnVsbD09PWc/Zi5uZXh0PWY6KGYubmV4dD1nLm5leHQsZy5uZXh0PWYpO2IucGVuZGluZz1mO2c9YS5hbHRlcm5hdGU7aWYoYT09PVJ8fG51bGwhPT1nJiZnPT09Uil6aD15aD0hMDtlbHNle2lmKDA9PT1hLmxhbmVzJiYobnVsbD09PWd8fDA9PT1nLmxhbmVzKSYmKGc9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1nKSl0cnl7dmFyIGg9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxrPWcoaCxjKTtmLmVhZ2VyUmVkdWNlcj1nO2YuZWFnZXJTdGF0ZT1rO2lmKEhlKGssaCkpcmV0dXJufWNhdGNoKGwpe31maW5hbGx5e31KZyhhLGUsZCl9fVxudmFyIEdoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpBaCx1c2VDb250ZXh0OkFoLHVzZUVmZmVjdDpBaCx1c2VJbXBlcmF0aXZlSGFuZGxlOkFoLHVzZUxheW91dEVmZmVjdDpBaCx1c2VNZW1vOkFoLHVzZVJlZHVjZXI6QWgsdXNlUmVmOkFoLHVzZVN0YXRlOkFoLHVzZURlYnVnVmFsdWU6QWgsdXNlRGVmZXJyZWRWYWx1ZTpBaCx1c2VUcmFuc2l0aW9uOkFoLHVzZU11dGFibGVTb3VyY2U6QWgsdXNlT3BhcXVlSWRlbnRpZmllcjpBaCx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LERoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe0hoKCkubWVtb2l6ZWRTdGF0ZT1bYSx2b2lkIDA9PT1iP251bGw6Yl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OldoLHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBVaCg0LDIsWmguYmluZChudWxsLFxuYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFVoKDQsMixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9SGgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9ZC5xdWV1ZT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6U2gsdXNlU3RhdGU6UWgsdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPVFoKGEpLGM9YlswXSxkPWJbMV07V2goZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO1xud2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPVFoKCExKSxiPWFbMF07YT1kaS5iaW5kKG51bGwsYVsxXSk7U2goYSk7cmV0dXJuW2EsYl19LHVzZU11dGFibGVTb3VyY2U6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPUhoKCk7ZC5tZW1vaXplZFN0YXRlPXtyZWZzOntnZXRTbmFwc2hvdDpiLHNldFNuYXBzaG90Om51bGx9LHNvdXJjZTphLHN1YnNjcmliZTpjfTtyZXR1cm4gTmgoZCxhLGIsYyl9LHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtpZihsaCl7dmFyIGE9ITEsYj11ZihmdW5jdGlvbigpe2F8fChhPSEwLGMoXCJyOlwiKyh0ZisrKS50b1N0cmluZygzNikpKTt0aHJvdyBFcnJvcih5KDM1NSkpO30pLGM9UWgoYilbMV07MD09PShSLm1vZGUmMikmJihSLmZsYWdzfD01MTYsUmgoNSxmdW5jdGlvbigpe2MoXCJyOlwiKyh0ZisrKS50b1N0cmluZygzNikpfSxcbnZvaWQgMCxudWxsKSk7cmV0dXJuIGJ9Yj1cInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KTtRaChiKTtyZXR1cm4gYn0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxFaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOktoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBLaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1LaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUtoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBLaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRmg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6dmcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6JGgsdXNlTGF5b3V0RWZmZWN0OlloLHVzZU1lbW86Y2ksdXNlUmVkdWNlcjpMaCx1c2VSZWY6VGgsdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gTGgoSmgpfSx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9TGgoSmgpLGM9YlswXSxkPWJbMV07WGgoZnVuY3Rpb24oKXt2YXIgYj13aC50cmFuc2l0aW9uO3doLnRyYW5zaXRpb249MTt0cnl7ZChhKX1maW5hbGx5e3doLnRyYW5zaXRpb249Yn19LFthXSk7cmV0dXJuIGN9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1MaChKaClbMF07cmV0dXJuW1RoKCkuY3VycmVudCxcbmFdfSx1c2VNdXRhYmxlU291cmNlOlBoLHVzZU9wYXF1ZUlkZW50aWZpZXI6ZnVuY3Rpb24oKXtyZXR1cm4gTGgoSmgpWzBdfSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LGVpPXJhLlJlYWN0Q3VycmVudE93bmVyLHVnPSExO2Z1bmN0aW9uIGZpKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/WmcoYixudWxsLGMsZCk6WWcoYixhLmNoaWxkLGMsZCl9ZnVuY3Rpb24gZ2koYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO3RnKGIsZSk7ZD1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBpaShhLGIsYyxkLGUsZil7aWYobnVsbD09PWEpe3ZhciBnPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmIWppKGcpJiZ2b2lkIDA9PT1nLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1nLGtpKGEsYixnLGQsZSxmKTthPVZnKGMudHlwZSxudWxsLGQsYixiLm1vZGUsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWc9YS5jaGlsZDtpZigwPT09KGUmZikmJihlPWcubWVtb2l6ZWRQcm9wcyxjPWMuY29tcGFyZSxjPW51bGwhPT1jP2M6SmUsYyhlLGQpJiZhLnJlZj09PWIucmVmKSlyZXR1cm4gaGkoYSxiLGYpO2IuZmxhZ3N8PTE7YT1UZyhnLGQpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIGtpKGEsYixjLGQsZSxmKXtpZihudWxsIT09YSYmSmUoYS5tZW1vaXplZFByb3BzLGQpJiZhLnJlZj09PWIucmVmKWlmKHVnPSExLDAhPT0oZiZlKSkwIT09KGEuZmxhZ3MmMTYzODQpJiYodWc9ITApO2Vsc2UgcmV0dXJuIGIubGFuZXM9YS5sYW5lcyxoaShhLGIsZik7cmV0dXJuIGxpKGEsYixjLGQsZil9XG5mdW5jdGlvbiBtaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLmNoaWxkcmVuLGY9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7aWYoXCJoaWRkZW5cIj09PWQubW9kZXx8XCJ1bnN0YWJsZS1kZWZlci13aXRob3V0LWhpZGluZ1wiPT09ZC5tb2RlKWlmKDA9PT0oYi5tb2RlJjQpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjB9LG5pKGIsYyk7ZWxzZSBpZigwIT09KGMmMTA3Mzc0MTgyNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixudWxsIT09Zj9mLmJhc2VMYW5lczpjKTtlbHNlIHJldHVybiBhPW51bGwhPT1mP2YuYmFzZUxhbmVzfGM6YyxiLmxhbmVzPWIuY2hpbGRMYW5lcz0xMDczNzQxODI0LGIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmF9LG5pKGIsYSksbnVsbDtlbHNlIG51bGwhPT1mPyhkPWYuYmFzZUxhbmVzfGMsYi5tZW1vaXplZFN0YXRlPW51bGwpOmQ9YyxuaShiLGQpO2ZpKGEsYixlLGMpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gb2koYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5mbGFnc3w9MTI4fWZ1bmN0aW9uIGxpKGEsYixjLGQsZSl7dmFyIGY9RmYoYyk/RGY6TS5jdXJyZW50O2Y9RWYoYixmKTt0ZyhiLGUpO2M9Q2goYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhdWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tNTE3LGEubGFuZXMmPX5lLGhpKGEsYixlKTtiLmZsYWdzfD0xO2ZpKGEsYixjLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gcGkoYSxiLGMsZCxlKXtpZihGZihjKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO3RnKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKW51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLE1nKGIsYyxkKSxPZyhiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgaz1nLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD12ZyhsKToobD1GZihjKT9EZjpNLmN1cnJlbnQsbD1FZihiLGwpKTt2YXIgbj1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBufHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtBfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGshPT1sKSYmTmcoYixnLGQsbCk7d2c9ITE7dmFyIHA9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTtrPWIubWVtb2l6ZWRTdGF0ZTtoIT09ZHx8cCE9PWt8fE4uY3VycmVudHx8d2c/KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuJiYoR2coYixjLG4sZCksaz1iLm1lbW9pemVkU3RhdGUpLChoPXdnfHxMZyhiLGMsaCxkLHAsayxsKSk/KEF8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudHx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxNb3VudCYmZy5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSksXCJmdW5jdGlvblwiPT09XG50eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9ayksZy5wcm9wcz1kLGcuc3RhdGU9ayxnLmNvbnRleHQ9bCxkPWgpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGQ9ITEpfWVsc2V7Zz1iLnN0YXRlTm9kZTt5ZyhhLGIpO2g9Yi5tZW1vaXplZFByb3BzO2w9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOmxnKGIudHlwZSxoKTtnLnByb3BzPWw7QT1iLnBlbmRpbmdQcm9wcztwPWcuY29udGV4dDtrPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09az9rPXZnKGspOihrPUZmKGMpP0RmOk0uY3VycmVudCxrPUVmKGIsaykpO3ZhciBDPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOyhuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBDfHxcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09QXx8cCE9PWspJiZOZyhiLGcsZCxrKTt3Zz0hMTtwPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXA7Q2coYixkLGcsZSk7dmFyIHg9Yi5tZW1vaXplZFN0YXRlO2ghPT1BfHxwIT09eHx8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIEMmJihHZyhiLGMsQyxkKSx4PWIubWVtb2l6ZWRTdGF0ZSksKGw9d2d8fExnKGIsYyxsLGQscCx4LGspKT8obnx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCxcbngsayksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCx4LGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZmxhZ3N8PTI1NikpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTI1NiksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPXgpLGcucHJvcHM9ZCxnLnN0YXRlPXgsZy5jb250ZXh0PWssZD1sKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxcbmg9PT1hLm1lbW9pemVkUHJvcHMmJnA9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTI1NiksZD0hMSl9cmV0dXJuIHFpKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIHFpKGEsYixjLGQsZSxmKXtvaShhLGIpO3ZhciBnPTAhPT0oYi5mbGFncyY2NCk7aWYoIWQmJiFnKXJldHVybiBlJiZLZihiLGMsITEpLGhpKGEsYixmKTtkPWIuc3RhdGVOb2RlO2VpLmN1cnJlbnQ9Yjt2YXIgaD1nJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZmxhZ3N8PTE7bnVsbCE9PWEmJmc/KGIuY2hpbGQ9WWcoYixhLmNoaWxkLG51bGwsZiksYi5jaGlsZD1ZZyhiLG51bGwsaCxmKSk6ZmkoYSxiLGgsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmS2YoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiByaShhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P0hmKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJkhmKGEsYi5jb250ZXh0LCExKTtlaChhLGIuY29udGFpbmVySW5mbyl9XG52YXIgc2k9e2RlaHlkcmF0ZWQ6bnVsbCxyZXRyeUxhbmU6MH07XG5mdW5jdGlvbiB0aShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1QLmN1cnJlbnQsZj0hMSxnOyhnPTAhPT0oYi5mbGFncyY2NCkpfHwoZz1udWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZT8hMTowIT09KGUmMikpO2c/KGY9ITAsYi5mbGFncyY9LTY1KTpudWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZXx8dm9pZCAwPT09ZC5mYWxsYmFja3x8ITA9PT1kLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwoZXw9MSk7SShQLGUmMSk7aWYobnVsbD09PWEpe3ZvaWQgMCE9PWQuZmFsbGJhY2smJnBoKGIpO2E9ZC5jaGlsZHJlbjtlPWQuZmFsbGJhY2s7aWYoZilyZXR1cm4gYT11aShiLGEsZSxjKSxiLmNoaWxkLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczpjfSxiLm1lbW9pemVkU3RhdGU9c2ksYTtpZihcIm51bWJlclwiPT09dHlwZW9mIGQudW5zdGFibGVfZXhwZWN0ZWRMb2FkVGltZSlyZXR1cm4gYT11aShiLGEsZSxjKSxiLmNoaWxkLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczpjfSxcbmIubWVtb2l6ZWRTdGF0ZT1zaSxiLmxhbmVzPTMzNTU0NDMyLGE7Yz12aSh7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjphfSxiLm1vZGUsYyxudWxsKTtjLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWN9aWYobnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSl7aWYoZilyZXR1cm4gZD13aShhLGIsZC5jaGlsZHJlbixkLmZhbGxiYWNrLGMpLGY9Yi5jaGlsZCxlPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZSxmLm1lbW9pemVkU3RhdGU9bnVsbD09PWU/e2Jhc2VMYW5lczpjfTp7YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31pZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9Olxue2Jhc2VMYW5lczplLmJhc2VMYW5lc3xjfSxmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jLGIubWVtb2l6ZWRTdGF0ZT1zaSxkO2M9eGkoYSxiLGQuY2hpbGRyZW4sYyk7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGN9ZnVuY3Rpb24gdWkoYSxiLGMsZCl7dmFyIGU9YS5tb2RlLGY9YS5jaGlsZDtiPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Yn07MD09PShlJjIpJiZudWxsIT09Zj8oZi5jaGlsZExhbmVzPTAsZi5wZW5kaW5nUHJvcHM9Yik6Zj12aShiLGUsMCxudWxsKTtjPVhnKGMsZSxkLG51bGwpO2YucmV0dXJuPWE7Yy5yZXR1cm49YTtmLnNpYmxpbmc9YzthLmNoaWxkPWY7cmV0dXJuIGN9XG5mdW5jdGlvbiB4aShhLGIsYyxkKXt2YXIgZT1hLmNoaWxkO2E9ZS5zaWJsaW5nO2M9VGcoZSx7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpjfSk7MD09PShiLm1vZGUmMikmJihjLmxhbmVzPWQpO2MucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGw7bnVsbCE9PWEmJihhLm5leHRFZmZlY3Q9bnVsbCxhLmZsYWdzPTgsYi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YSk7cmV0dXJuIGIuY2hpbGQ9Y31cbmZ1bmN0aW9uIHdpKGEsYixjLGQsZSl7dmFyIGY9Yi5tb2RlLGc9YS5jaGlsZDthPWcuc2libGluZzt2YXIgaD17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmN9OzA9PT0oZiYyKSYmYi5jaGlsZCE9PWc/KGM9Yi5jaGlsZCxjLmNoaWxkTGFuZXM9MCxjLnBlbmRpbmdQcm9wcz1oLGc9Yy5sYXN0RWZmZWN0LG51bGwhPT1nPyhiLmZpcnN0RWZmZWN0PWMuZmlyc3RFZmZlY3QsYi5sYXN0RWZmZWN0PWcsZy5uZXh0RWZmZWN0PW51bGwpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PW51bGwpOmM9VGcoZyxoKTtudWxsIT09YT9kPVRnKGEsZCk6KGQ9WGcoZCxmLGUsbnVsbCksZC5mbGFnc3w9Mik7ZC5yZXR1cm49YjtjLnJldHVybj1iO2Muc2libGluZz1kO2IuY2hpbGQ9YztyZXR1cm4gZH1mdW5jdGlvbiB5aShhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtzZyhhLnJldHVybixiKX1cbmZ1bmN0aW9uIHppKGEsYixjLGQsZSxmKXt2YXIgZz1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWc/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLHJlbmRlcmluZ1N0YXJ0VGltZTowLGxhc3Q6ZCx0YWlsOmMsdGFpbE1vZGU6ZSxsYXN0RWZmZWN0OmZ9OihnLmlzQmFja3dhcmRzPWIsZy5yZW5kZXJpbmc9bnVsbCxnLnJlbmRlcmluZ1N0YXJ0VGltZT0wLGcubGFzdD1kLGcudGFpbD1jLGcudGFpbE1vZGU9ZSxnLmxhc3RFZmZlY3Q9Zil9XG5mdW5jdGlvbiBBaShhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLnJldmVhbE9yZGVyLGY9ZC50YWlsO2ZpKGEsYixkLmNoaWxkcmVuLGMpO2Q9UC5jdXJyZW50O2lmKDAhPT0oZCYyKSlkPWQmMXwyLGIuZmxhZ3N8PTY0O2Vsc2V7aWYobnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpYTpmb3IoYT1iLmNoaWxkO251bGwhPT1hOyl7aWYoMTM9PT1hLnRhZyludWxsIT09YS5tZW1vaXplZFN0YXRlJiZ5aShhLGMpO2Vsc2UgaWYoMTk9PT1hLnRhZyl5aShhLGMpO2Vsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1iKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxhLnJldHVybj09PWIpYnJlYWsgYTthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47YT1hLnNpYmxpbmd9ZCY9MX1JKFAsZCk7aWYoMD09PShiLm1vZGUmMikpYi5tZW1vaXplZFN0YXRlPVxubnVsbDtlbHNlIHN3aXRjaChlKXtjYXNlIFwiZm9yd2FyZHNcIjpjPWIuY2hpbGQ7Zm9yKGU9bnVsbDtudWxsIT09YzspYT1jLmFsdGVybmF0ZSxudWxsIT09YSYmbnVsbD09PWloKGEpJiYoZT1jKSxjPWMuc2libGluZztjPWU7bnVsbD09PWM/KGU9Yi5jaGlsZCxiLmNoaWxkPW51bGwpOihlPWMuc2libGluZyxjLnNpYmxpbmc9bnVsbCk7emkoYiwhMSxlLGMsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJiYWNrd2FyZHNcIjpjPW51bGw7ZT1iLmNoaWxkO2ZvcihiLmNoaWxkPW51bGw7bnVsbCE9PWU7KXthPWUuYWx0ZXJuYXRlO2lmKG51bGwhPT1hJiZudWxsPT09aWgoYSkpe2IuY2hpbGQ9ZTticmVha31hPWUuc2libGluZztlLnNpYmxpbmc9YztjPWU7ZT1hfXppKGIsITAsYyxudWxsLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwidG9nZXRoZXJcIjp6aShiLCExLG51bGwsbnVsbCx2b2lkIDAsYi5sYXN0RWZmZWN0KTticmVhaztkZWZhdWx0OmIubWVtb2l6ZWRTdGF0ZT1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaGkoYSxiLGMpe251bGwhPT1hJiYoYi5kZXBlbmRlbmNpZXM9YS5kZXBlbmRlbmNpZXMpO0RnfD1iLmxhbmVzO2lmKDAhPT0oYyZiLmNoaWxkTGFuZXMpKXtpZihudWxsIT09YSYmYi5jaGlsZCE9PWEuY2hpbGQpdGhyb3cgRXJyb3IoeSgxNTMpKTtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9VGcoYSxhLnBlbmRpbmdQcm9wcyk7Yi5jaGlsZD1jO2ZvcihjLnJldHVybj1iO251bGwhPT1hLnNpYmxpbmc7KWE9YS5zaWJsaW5nLGM9Yy5zaWJsaW5nPVRnKGEsYS5wZW5kaW5nUHJvcHMpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9cmV0dXJuIG51bGx9dmFyIEJpLENpLERpLEVpO1xuQmk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O0NpPWZ1bmN0aW9uKCl7fTtcbkRpPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEubWVtb2l6ZWRQcm9wcztpZihlIT09ZCl7YT1iLnN0YXRlTm9kZTtkaChhaC5jdXJyZW50KTt2YXIgZj1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjplPVlhKGEsZSk7ZD1ZYShhLGQpO2Y9W107YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxlKTtkPWViKGEsZCk7Zj1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6ZT1tKHt9LGUse3ZhbHVlOnZvaWQgMH0pO2Q9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtmPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmU9Z2IoYSxlKTtkPWdiKGEsZCk7Zj1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihhLm9uY2xpY2s9amYpfXZiKGMsZCk7dmFyIGc7Yz1udWxsO2ZvcihsIGluIGUpaWYoIWQuaGFzT3duUHJvcGVydHkobCkmJmUuaGFzT3duUHJvcGVydHkobCkmJm51bGwhPWVbbF0paWYoXCJzdHlsZVwiPT09XG5sKXt2YXIgaD1lW2xdO2ZvcihnIGluIGgpaC5oYXNPd25Qcm9wZXJ0eShnKSYmKGN8fChjPXt9KSxjW2ddPVwiXCIpfWVsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sJiZcImNoaWxkcmVuXCIhPT1sJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJlwiYXV0b0ZvY3VzXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/Znx8KGY9W10pOihmPWZ8fFtdKS5wdXNoKGwsbnVsbCkpO2ZvcihsIGluIGQpe3ZhciBrPWRbbF07aD1udWxsIT1lP2VbbF06dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkobCkmJmshPT1oJiYobnVsbCE9a3x8bnVsbCE9aCkpaWYoXCJzdHlsZVwiPT09bClpZihoKXtmb3IoZyBpbiBoKSFoLmhhc093blByb3BlcnR5KGcpfHxrJiZrLmhhc093blByb3BlcnR5KGcpfHwoY3x8KGM9e30pLGNbZ109XCJcIik7Zm9yKGcgaW4gaylrLmhhc093blByb3BlcnR5KGcpJiZoW2ddIT09a1tnXSYmKGN8fFxuKGM9e30pLGNbZ109a1tnXSl9ZWxzZSBjfHwoZnx8KGY9W10pLGYucHVzaChsLGMpKSxjPWs7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWw/KGs9az9rLl9faHRtbDp2b2lkIDAsaD1oP2guX19odG1sOnZvaWQgMCxudWxsIT1rJiZoIT09ayYmKGY9Znx8W10pLnB1c2gobCxrKSk6XCJjaGlsZHJlblwiPT09bD9cInN0cmluZ1wiIT09dHlwZW9mIGsmJlwibnVtYmVyXCIhPT10eXBlb2Yga3x8KGY9Znx8W10pLnB1c2gobCxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmKGNhLmhhc093blByb3BlcnR5KGwpPyhudWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1sJiZHKFwic2Nyb2xsXCIsYSksZnx8aD09PWt8fChmPVtdKSk6XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09ayYmay4kJHR5cGVvZj09PUdhP2sudG9TdHJpbmcoKTooZj1mfHxbXSkucHVzaChsLGspKX1jJiYoZj1mfHxbXSkucHVzaChcInN0eWxlXCIsXG5jKTt2YXIgbD1mO2lmKGIudXBkYXRlUXVldWU9bCliLmZsYWdzfD00fX07RWk9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJihiLmZsYWdzfD00KX07ZnVuY3Rpb24gRmkoYSxiKXtpZighbGgpc3dpdGNoKGEudGFpbE1vZGUpe2Nhc2UgXCJoaWRkZW5cIjpiPWEudGFpbDtmb3IodmFyIGM9bnVsbDtudWxsIT09YjspbnVsbCE9PWIuYWx0ZXJuYXRlJiYoYz1iKSxiPWIuc2libGluZztudWxsPT09Yz9hLnRhaWw9bnVsbDpjLnNpYmxpbmc9bnVsbDticmVhaztjYXNlIFwiY29sbGFwc2VkXCI6Yz1hLnRhaWw7Zm9yKHZhciBkPW51bGw7bnVsbCE9PWM7KW51bGwhPT1jLmFsdGVybmF0ZSYmKGQ9YyksYz1jLnNpYmxpbmc7bnVsbD09PWQ/Ynx8bnVsbD09PWEudGFpbD9hLnRhaWw9bnVsbDphLnRhaWwuc2libGluZz1udWxsOmQuc2libGluZz1udWxsfX1cbmZ1bmN0aW9uIEdpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcztzd2l0Y2goYi50YWcpe2Nhc2UgMjpjYXNlIDE2OmNhc2UgMTU6Y2FzZSAwOmNhc2UgMTE6Y2FzZSA3OmNhc2UgODpjYXNlIDEyOmNhc2UgOTpjYXNlIDE0OnJldHVybiBudWxsO2Nhc2UgMTpyZXR1cm4gRmYoYi50eXBlKSYmR2YoKSxudWxsO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2Q9Yi5zdGF0ZU5vZGU7ZC5wZW5kaW5nQ29udGV4dCYmKGQuY29udGV4dD1kLnBlbmRpbmdDb250ZXh0LGQucGVuZGluZ0NvbnRleHQ9bnVsbCk7aWYobnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKXJoKGIpP2IuZmxhZ3N8PTQ6ZC5oeWRyYXRlfHwoYi5mbGFnc3w9MjU2KTtDaShiKTtyZXR1cm4gbnVsbDtjYXNlIDU6aGgoYik7dmFyIGU9ZGgoY2guY3VycmVudCk7Yz1iLnR5cGU7aWYobnVsbCE9PWEmJm51bGwhPWIuc3RhdGVOb2RlKURpKGEsYixjLGQsZSksYS5yZWYhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCk7ZWxzZXtpZighZCl7aWYobnVsbD09PVxuYi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjYpKTtyZXR1cm4gbnVsbH1hPWRoKGFoLmN1cnJlbnQpO2lmKHJoKGIpKXtkPWIuc3RhdGVOb2RlO2M9Yi50eXBlO3ZhciBmPWIubWVtb2l6ZWRQcm9wcztkW3dmXT1iO2RbeGZdPWY7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpHKFwiY2FuY2VsXCIsZCk7RyhcImNsb3NlXCIsZCk7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpHKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihhPTA7YTxYZS5sZW5ndGg7YSsrKUcoWGVbYV0sZCk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkcoXCJlcnJvclwiLGQpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGQpO0coXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsZCk7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoZCxmKTtHKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpkLl93cmFwcGVyU3RhdGU9XG57d2FzTXVsdGlwbGU6ISFmLm11bHRpcGxlfTtHKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGQsZiksRyhcImludmFsaWRcIixkKX12YihjLGYpO2E9bnVsbDtmb3IodmFyIGcgaW4gZilmLmhhc093blByb3BlcnR5KGcpJiYoZT1mW2ddLFwiY2hpbGRyZW5cIj09PWc/XCJzdHJpbmdcIj09PXR5cGVvZiBlP2QudGV4dENvbnRlbnQhPT1lJiYoYT1bXCJjaGlsZHJlblwiLGVdKTpcIm51bWJlclwiPT09dHlwZW9mIGUmJmQudGV4dENvbnRlbnQhPT1cIlwiK2UmJihhPVtcImNoaWxkcmVuXCIsXCJcIitlXSk6Y2EuaGFzT3duUHJvcGVydHkoZykmJm51bGwhPWUmJlwib25TY3JvbGxcIj09PWcmJkcoXCJzY3JvbGxcIixkKSk7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGQpO2NiKGQsZiwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoZCk7amIoZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJvcHRpb25cIjpicmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLm9uQ2xpY2smJihkLm9uY2xpY2s9XG5qZil9ZD1hO2IudXBkYXRlUXVldWU9ZDtudWxsIT09ZCYmKGIuZmxhZ3N8PTQpfWVsc2V7Zz05PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudDthPT09a2IuaHRtbCYmKGE9bGIoYykpO2E9PT1rYi5odG1sP1wic2NyaXB0XCI9PT1jPyhhPWcuY3JlYXRlRWxlbWVudChcImRpdlwiKSxhLmlubmVySFRNTD1cIjxzY3JpcHQ+XFx4M2Mvc2NyaXB0PlwiLGE9YS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpKTpcInN0cmluZ1wiPT09dHlwZW9mIGQuaXM/YT1nLmNyZWF0ZUVsZW1lbnQoYyx7aXM6ZC5pc30pOihhPWcuY3JlYXRlRWxlbWVudChjKSxcInNlbGVjdFwiPT09YyYmKGc9YSxkLm11bHRpcGxlP2cubXVsdGlwbGU9ITA6ZC5zaXplJiYoZy5zaXplPWQuc2l6ZSkpKTphPWcuY3JlYXRlRWxlbWVudE5TKGEsYyk7YVt3Zl09YjthW3hmXT1kO0JpKGEsYiwhMSwhMSk7Yi5zdGF0ZU5vZGU9YTtnPXdiKGMsZCk7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpHKFwiY2FuY2VsXCIsYSk7RyhcImNsb3NlXCIsYSk7XG5lPWQ7YnJlYWs7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwiZW1iZWRcIjpHKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZT0wO2U8WGUubGVuZ3RoO2UrKylHKFhlW2VdLGEpO2U9ZDticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkcoXCJlcnJvclwiLGEpO0coXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RyhcInRvZ2dsZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW5wdXRcIjpaYShhLGQpO2U9WWEoYSxkKTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWViKGEsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFkLm11bHRpcGxlfTtlPW0oe30sZCx7dmFsdWU6dm9pZCAwfSk7RyhcImludmFsaWRcIixhKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihhLGQpO2U9XG5nYihhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7ZGVmYXVsdDplPWR9dmIoYyxlKTt2YXIgaD1lO2ZvcihmIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShmKSl7dmFyIGs9aFtmXTtcInN0eWxlXCI9PT1mP3RiKGEsayk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zj8oaz1rP2suX19odG1sOnZvaWQgMCxudWxsIT1rJiZvYihhLGspKTpcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2Ygaz8oXCJ0ZXh0YXJlYVwiIT09Y3x8XCJcIiE9PWspJiZwYihhLGspOlwibnVtYmVyXCI9PT10eXBlb2YgayYmcGIoYSxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1mJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09ZiYmXCJhdXRvRm9jdXNcIiE9PWYmJihjYS5oYXNPd25Qcm9wZXJ0eShmKT9udWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1mJiZHKFwic2Nyb2xsXCIsYSk6bnVsbCE9ayYmcWEoYSxmLGssZykpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShhKTtjYihhLGQsITEpO1xuYnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoYSk7amIoYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWQudmFsdWUmJmEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK1NhKGQudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5tdWx0aXBsZT0hIWQubXVsdGlwbGU7Zj1kLnZhbHVlO251bGwhPWY/ZmIoYSwhIWQubXVsdGlwbGUsZiwhMSk6bnVsbCE9ZC5kZWZhdWx0VmFsdWUmJmZiKGEsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLCEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLm9uQ2xpY2smJihhLm9uY2xpY2s9amYpfW1mKGMsZCkmJihiLmZsYWdzfD00KX1udWxsIT09Yi5yZWYmJihiLmZsYWdzfD0xMjgpfXJldHVybiBudWxsO2Nhc2UgNjppZihhJiZudWxsIT1iLnN0YXRlTm9kZSlFaShhLGIsYS5tZW1vaXplZFByb3BzLGQpO2Vsc2V7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBkJiZudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjYpKTtcbmM9ZGgoY2guY3VycmVudCk7ZGgoYWguY3VycmVudCk7cmgoYik/KGQ9Yi5zdGF0ZU5vZGUsYz1iLm1lbW9pemVkUHJvcHMsZFt3Zl09YixkLm5vZGVWYWx1ZSE9PWMmJihiLmZsYWdzfD00KSk6KGQ9KDk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShkKSxkW3dmXT1iLGIuc3RhdGVOb2RlPWQpfXJldHVybiBudWxsO2Nhc2UgMTM6SChQKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZigwIT09KGIuZmxhZ3MmNjQpKXJldHVybiBiLmxhbmVzPWMsYjtkPW51bGwhPT1kO2M9ITE7bnVsbD09PWE/dm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLmZhbGxiYWNrJiZyaChiKTpjPW51bGwhPT1hLm1lbW9pemVkU3RhdGU7aWYoZCYmIWMmJjAhPT0oYi5tb2RlJjIpKWlmKG51bGw9PT1hJiYhMCE9PWIubWVtb2l6ZWRQcm9wcy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFja3x8MCE9PShQLmN1cnJlbnQmMSkpMD09PVYmJihWPTMpO2Vsc2V7aWYoMD09PVZ8fDM9PT1WKVY9XG40O251bGw9PT1VfHwwPT09KERnJjEzNDIxNzcyNykmJjA9PT0oSGkmMTM0MjE3NzI3KXx8SWkoVSxXKX1pZihkfHxjKWIuZmxhZ3N8PTQ7cmV0dXJuIG51bGw7Y2FzZSA0OnJldHVybiBmaCgpLENpKGIpLG51bGw9PT1hJiZjZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGIpLG51bGw7Y2FzZSAxNzpyZXR1cm4gRmYoYi50eXBlKSYmR2YoKSxudWxsO2Nhc2UgMTk6SChQKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtmPTAhPT0oYi5mbGFncyY2NCk7Zz1kLnJlbmRlcmluZztpZihudWxsPT09ZylpZihmKUZpKGQsITEpO2Vsc2V7aWYoMCE9PVZ8fG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmNjQpKWZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtnPWloKGEpO2lmKG51bGwhPT1nKXtiLmZsYWdzfD02NDtGaShkLCExKTtmPWcudXBkYXRlUXVldWU7bnVsbCE9PWYmJihiLnVwZGF0ZVF1ZXVlPWYsYi5mbGFnc3w9NCk7XG5udWxsPT09ZC5sYXN0RWZmZWN0JiYoYi5maXJzdEVmZmVjdD1udWxsKTtiLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0O2Q9Yztmb3IoYz1iLmNoaWxkO251bGwhPT1jOylmPWMsYT1kLGYuZmxhZ3MmPTIsZi5uZXh0RWZmZWN0PW51bGwsZi5maXJzdEVmZmVjdD1udWxsLGYubGFzdEVmZmVjdD1udWxsLGc9Zi5hbHRlcm5hdGUsbnVsbD09PWc/KGYuY2hpbGRMYW5lcz0wLGYubGFuZXM9YSxmLmNoaWxkPW51bGwsZi5tZW1vaXplZFByb3BzPW51bGwsZi5tZW1vaXplZFN0YXRlPW51bGwsZi51cGRhdGVRdWV1ZT1udWxsLGYuZGVwZW5kZW5jaWVzPW51bGwsZi5zdGF0ZU5vZGU9bnVsbCk6KGYuY2hpbGRMYW5lcz1nLmNoaWxkTGFuZXMsZi5sYW5lcz1nLmxhbmVzLGYuY2hpbGQ9Zy5jaGlsZCxmLm1lbW9pemVkUHJvcHM9Zy5tZW1vaXplZFByb3BzLGYubWVtb2l6ZWRTdGF0ZT1nLm1lbW9pemVkU3RhdGUsZi51cGRhdGVRdWV1ZT1nLnVwZGF0ZVF1ZXVlLGYudHlwZT1nLnR5cGUsYT1nLmRlcGVuZGVuY2llcyxcbmYuZGVwZW5kZW5jaWVzPW51bGw9PT1hP251bGw6e2xhbmVzOmEubGFuZXMsZmlyc3RDb250ZXh0OmEuZmlyc3RDb250ZXh0fSksYz1jLnNpYmxpbmc7SShQLFAuY3VycmVudCYxfDIpO3JldHVybiBiLmNoaWxkfWE9YS5zaWJsaW5nfW51bGwhPT1kLnRhaWwmJk8oKT5KaSYmKGIuZmxhZ3N8PTY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMil9ZWxzZXtpZighZilpZihhPWloKGcpLG51bGwhPT1hKXtpZihiLmZsYWdzfD02NCxmPSEwLGM9YS51cGRhdGVRdWV1ZSxudWxsIT09YyYmKGIudXBkYXRlUXVldWU9YyxiLmZsYWdzfD00KSxGaShkLCEwKSxudWxsPT09ZC50YWlsJiZcImhpZGRlblwiPT09ZC50YWlsTW9kZSYmIWcuYWx0ZXJuYXRlJiYhbGgpcmV0dXJuIGI9Yi5sYXN0RWZmZWN0PWQubGFzdEVmZmVjdCxudWxsIT09YiYmKGIubmV4dEVmZmVjdD1udWxsKSxudWxsfWVsc2UgMipPKCktZC5yZW5kZXJpbmdTdGFydFRpbWU+SmkmJjEwNzM3NDE4MjQhPT1jJiYoYi5mbGFnc3w9XG42NCxmPSEwLEZpKGQsITEpLGIubGFuZXM9MzM1NTQ0MzIpO2QuaXNCYWNrd2FyZHM/KGcuc2libGluZz1iLmNoaWxkLGIuY2hpbGQ9Zyk6KGM9ZC5sYXN0LG51bGwhPT1jP2Muc2libGluZz1nOmIuY2hpbGQ9ZyxkLmxhc3Q9Zyl9cmV0dXJuIG51bGwhPT1kLnRhaWw/KGM9ZC50YWlsLGQucmVuZGVyaW5nPWMsZC50YWlsPWMuc2libGluZyxkLmxhc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0LGQucmVuZGVyaW5nU3RhcnRUaW1lPU8oKSxjLnNpYmxpbmc9bnVsbCxiPVAuY3VycmVudCxJKFAsZj9iJjF8MjpiJjEpLGMpOm51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGwhPT1hJiZudWxsIT09YS5tZW1vaXplZFN0YXRlIT09KG51bGwhPT1iLm1lbW9pemVkU3RhdGUpJiZcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCIhPT1kLm1vZGUmJihiLmZsYWdzfD00KSxudWxsfXRocm93IEVycm9yKHkoMTU2LGIudGFnKSk7fVxuZnVuY3Rpb24gTGkoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDE6RmYoYS50eXBlKSYmR2YoKTt2YXIgYj1hLmZsYWdzO3JldHVybiBiJjQwOTY/KGEuZmxhZ3M9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2I9YS5mbGFncztpZigwIT09KGImNjQpKXRocm93IEVycm9yKHkoMjg1KSk7YS5mbGFncz1iJi00MDk3fDY0O3JldHVybiBhO2Nhc2UgNTpyZXR1cm4gaGgoYSksbnVsbDtjYXNlIDEzOnJldHVybiBIKFApLGI9YS5mbGFncyxiJjQwOTY/KGEuZmxhZ3M9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMTk6cmV0dXJuIEgoUCksbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksbnVsbDtjYXNlIDEwOnJldHVybiByZyhhKSxudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gS2koKSxudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24gTWkoYSxiKXt0cnl7dmFyIGM9XCJcIixkPWI7ZG8gYys9UWEoZCksZD1kLnJldHVybjt3aGlsZShkKTt2YXIgZT1jfWNhdGNoKGYpe2U9XCJcXG5FcnJvciBnZW5lcmF0aW5nIHN0YWNrOiBcIitmLm1lc3NhZ2UrXCJcXG5cIitmLnN0YWNrfXJldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmV9fWZ1bmN0aW9uIE5pKGEsYil7dHJ5e2NvbnNvbGUuZXJyb3IoYi52YWx1ZSl9Y2F0Y2goYyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGM7fSl9fXZhciBPaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBQaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO2MucGF5bG9hZD17ZWxlbWVudDpudWxsfTt2YXIgZD1iLnZhbHVlO2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtRaXx8KFFpPSEwLFJpPWQpO05pKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gU2koYSxiLGMpe2M9emcoLTEsYyk7Yy50YWc9Mzt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe05pKGEsYik7cmV0dXJuIGQoZSl9fXZhciBmPWEuc3RhdGVOb2RlO251bGwhPT1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5jb21wb25lbnREaWRDYXRjaCYmKGMuY2FsbGJhY2s9ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT1UaT9UaT1uZXcgU2V0KFt0aGlzXSk6VGkuYWRkKHRoaXMpLE5pKGEsYikpO3ZhciBjPWIuc3RhY2s7dGhpcy5jb21wb25lbnREaWRDYXRjaChiLnZhbHVlLHtjb21wb25lbnRTdGFjazpudWxsIT09Yz9jOlwiXCJ9KX0pO3JldHVybiBjfXZhciBVaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldDtcbmZ1bmN0aW9uIFZpKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe1dpKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1mdW5jdGlvbiBYaShhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpjYXNlIDIyOnJldHVybjtjYXNlIDE6aWYoYi5mbGFncyYyNTYmJm51bGwhPT1hKXt2YXIgYz1hLm1lbW9pemVkUHJvcHMsZD1hLm1lbW9pemVkU3RhdGU7YT1iLnN0YXRlTm9kZTtiPWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT9jOmxnKGIudHlwZSxjKSxkKTthLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlPWJ9cmV0dXJuO2Nhc2UgMzpiLmZsYWdzJjI1NiYmcWYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7cmV0dXJuO2Nhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gWWkoYSxiLGMpe3N3aXRjaChjLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpjYXNlIDIyOmI9Yy51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXthPWI9Yi5uZXh0O2Rve2lmKDM9PT0oYS50YWcmMykpe3ZhciBkPWEuY3JlYXRlO2EuZGVzdHJveT1kKCl9YT1hLm5leHR9d2hpbGUoYSE9PWIpfWI9Yy51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXthPWI9Yi5uZXh0O2Rve3ZhciBlPWE7ZD1lLm5leHQ7ZT1lLnRhZzswIT09KGUmNCkmJjAhPT0oZSYxKSYmKFppKGMsYSksJGkoYyxhKSk7YT1kfXdoaWxlKGEhPT1iKX1yZXR1cm47Y2FzZSAxOmE9Yy5zdGF0ZU5vZGU7Yy5mbGFncyY0JiYobnVsbD09PWI/YS5jb21wb25lbnREaWRNb3VudCgpOihkPWMuZWxlbWVudFR5cGU9PT1jLnR5cGU/Yi5tZW1vaXplZFByb3BzOmxnKGMudHlwZSxiLm1lbW9pemVkUHJvcHMpLGEuY29tcG9uZW50RGlkVXBkYXRlKGQsXG5iLm1lbW9pemVkU3RhdGUsYS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSkpKTtiPWMudXBkYXRlUXVldWU7bnVsbCE9PWImJkVnKGMsYixhKTtyZXR1cm47Y2FzZSAzOmI9Yy51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YT1udWxsO2lmKG51bGwhPT1jLmNoaWxkKXN3aXRjaChjLmNoaWxkLnRhZyl7Y2FzZSA1OmE9Yy5jaGlsZC5zdGF0ZU5vZGU7YnJlYWs7Y2FzZSAxOmE9Yy5jaGlsZC5zdGF0ZU5vZGV9RWcoYyxiLGEpfXJldHVybjtjYXNlIDU6YT1jLnN0YXRlTm9kZTtudWxsPT09YiYmYy5mbGFncyY0JiZtZihjLnR5cGUsYy5tZW1vaXplZFByb3BzKSYmYS5mb2N1cygpO3JldHVybjtjYXNlIDY6cmV0dXJuO2Nhc2UgNDpyZXR1cm47Y2FzZSAxMjpyZXR1cm47Y2FzZSAxMzpudWxsPT09Yy5tZW1vaXplZFN0YXRlJiYoYz1jLmFsdGVybmF0ZSxudWxsIT09YyYmKGM9Yy5tZW1vaXplZFN0YXRlLG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbCE9PWMmJkNjKGMpKSkpO1xucmV0dXJuO2Nhc2UgMTk6Y2FzZSAxNzpjYXNlIDIwOmNhc2UgMjE6Y2FzZSAyMzpjYXNlIDI0OnJldHVybn10aHJvdyBFcnJvcih5KDE2MykpO31cbmZ1bmN0aW9uIGFqKGEsYil7Zm9yKHZhciBjPWE7Oyl7aWYoNT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihiKWQ9ZC5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5zZXRQcm9wZXJ0eT9kLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmQuZGlzcGxheT1cIm5vbmVcIjtlbHNle2Q9Yy5zdGF0ZU5vZGU7dmFyIGU9Yy5tZW1vaXplZFByb3BzLnN0eWxlO2U9dm9pZCAwIT09ZSYmbnVsbCE9PWUmJmUuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2UuZGlzcGxheTpudWxsO2Quc3R5bGUuZGlzcGxheT1zYihcImRpc3BsYXlcIixlKX19ZWxzZSBpZig2PT09Yy50YWcpYy5zdGF0ZU5vZGUubm9kZVZhbHVlPWI/XCJcIjpjLm1lbW9pemVkUHJvcHM7ZWxzZSBpZigoMjMhPT1jLnRhZyYmMjQhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8Yz09PWEpJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PVxuYSlicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YSlyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIGJqKGEsYil7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyVW5tb3VudCl0cnl7TWYub25Db21taXRGaWJlclVubW91bnQoTGYsYil9Y2F0Y2goZil7fXN3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmNhc2UgMjI6YT1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1hJiYoYT1hLmxhc3RFZmZlY3QsbnVsbCE9PWEpKXt2YXIgYz1hPWEubmV4dDtkb3t2YXIgZD1jLGU9ZC5kZXN0cm95O2Q9ZC50YWc7aWYodm9pZCAwIT09ZSlpZigwIT09KGQmNCkpWmkoYixjKTtlbHNle2Q9Yjt0cnl7ZSgpfWNhdGNoKGYpe1dpKGQsZil9fWM9Yy5uZXh0fXdoaWxlKGMhPT1hKX1icmVhaztjYXNlIDE6VmkoYik7YT1iLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7YS5wcm9wcz1iLm1lbW9pemVkUHJvcHMsYS5zdGF0ZT1iLm1lbW9pemVkU3RhdGUsYS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGYpe1dpKGIsXG5mKX1icmVhaztjYXNlIDU6VmkoYik7YnJlYWs7Y2FzZSA0OmNqKGEsYil9fWZ1bmN0aW9uIGRqKGEpe2EuYWx0ZXJuYXRlPW51bGw7YS5jaGlsZD1udWxsO2EuZGVwZW5kZW5jaWVzPW51bGw7YS5maXJzdEVmZmVjdD1udWxsO2EubGFzdEVmZmVjdD1udWxsO2EubWVtb2l6ZWRQcm9wcz1udWxsO2EubWVtb2l6ZWRTdGF0ZT1udWxsO2EucGVuZGluZ1Byb3BzPW51bGw7YS5yZXR1cm49bnVsbDthLnVwZGF0ZVF1ZXVlPW51bGx9ZnVuY3Rpb24gZWooYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiBmaihhKXthOntmb3IodmFyIGI9YS5yZXR1cm47bnVsbCE9PWI7KXtpZihlaihiKSlicmVhayBhO2I9Yi5yZXR1cm59dGhyb3cgRXJyb3IoeSgxNjApKTt9dmFyIGM9YjtiPWMuc3RhdGVOb2RlO3N3aXRjaChjLnRhZyl7Y2FzZSA1OnZhciBkPSExO2JyZWFrO2Nhc2UgMzpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgxNjEpKTt9Yy5mbGFncyYxNiYmKHBiKGIsXCJcIiksYy5mbGFncyY9LTE3KTthOmI6Zm9yKGM9YTs7KXtmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGVqKGMucmV0dXJuKSl7Yz1udWxsO2JyZWFrIGF9Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2ZvcihjPWMuc2libGluZzs1IT09Yy50YWcmJjYhPT1jLnRhZyYmMTghPT1jLnRhZzspe2lmKGMuZmxhZ3MmMiljb250aW51ZSBiO2lmKG51bGw9PT1cbmMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmZsYWdzJjIpKXtjPWMuc3RhdGVOb2RlO2JyZWFrIGF9fWQ/Z2ooYSxjLGIpOmhqKGEsYyxiKX1cbmZ1bmN0aW9uIGdqKGEsYixjKXt2YXIgZD1hLnRhZyxlPTU9PT1kfHw2PT09ZDtpZihlKWE9ZT9hLnN0YXRlTm9kZTphLnN0YXRlTm9kZS5pbnN0YW5jZSxiPzg9PT1jLm5vZGVUeXBlP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxiKTpjLmluc2VydEJlZm9yZShhLGIpOig4PT09Yy5ub2RlVHlwZT8oYj1jLnBhcmVudE5vZGUsYi5pbnNlcnRCZWZvcmUoYSxjKSk6KGI9YyxiLmFwcGVuZENoaWxkKGEpKSxjPWMuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09YyYmdm9pZCAwIT09Y3x8bnVsbCE9PWIub25jbGlja3x8KGIub25jbGljaz1qZikpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihnaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWdqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGhqKGEsYixjKXt2YXIgZD1hLnRhZyxlPTU9PT1kfHw2PT09ZDtpZihlKWE9ZT9hLnN0YXRlTm9kZTphLnN0YXRlTm9kZS5pbnN0YW5jZSxiP2MuaW5zZXJ0QmVmb3JlKGEsYik6Yy5hcHBlbmRDaGlsZChhKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoaGooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOyloaihhLGIsYyksYT1hLnNpYmxpbmd9XG5mdW5jdGlvbiBjaihhLGIpe2Zvcih2YXIgYz1iLGQ9ITEsZSxmOzspe2lmKCFkKXtkPWMucmV0dXJuO2E6Zm9yKDs7KXtpZihudWxsPT09ZCl0aHJvdyBFcnJvcih5KDE2MCkpO2U9ZC5zdGF0ZU5vZGU7c3dpdGNoKGQudGFnKXtjYXNlIDU6Zj0hMTticmVhayBhO2Nhc2UgMzplPWUuY29udGFpbmVySW5mbztmPSEwO2JyZWFrIGE7Y2FzZSA0OmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYX1kPWQucmV0dXJufWQ9ITB9aWYoNT09PWMudGFnfHw2PT09Yy50YWcpe2E6Zm9yKHZhciBnPWEsaD1jLGs9aDs7KWlmKGJqKGcsayksbnVsbCE9PWsuY2hpbGQmJjQhPT1rLnRhZylrLmNoaWxkLnJldHVybj1rLGs9ay5jaGlsZDtlbHNle2lmKGs9PT1oKWJyZWFrIGE7Zm9yKDtudWxsPT09ay5zaWJsaW5nOyl7aWYobnVsbD09PWsucmV0dXJufHxrLnJldHVybj09PWgpYnJlYWsgYTtrPWsucmV0dXJufWsuc2libGluZy5yZXR1cm49ay5yZXR1cm47az1rLnNpYmxpbmd9Zj8oZz1lLGg9Yy5zdGF0ZU5vZGUsXG44PT09Zy5ub2RlVHlwZT9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaCk6Zy5yZW1vdmVDaGlsZChoKSk6ZS5yZW1vdmVDaGlsZChjLnN0YXRlTm9kZSl9ZWxzZSBpZig0PT09Yy50YWcpe2lmKG51bGwhPT1jLmNoaWxkKXtlPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87Zj0hMDtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX19ZWxzZSBpZihiaihhLGMpLG51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybjs0PT09Yy50YWcmJihkPSExKX1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX1cbmZ1bmN0aW9uIGlqKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjp2YXIgYz1iLnVwZGF0ZVF1ZXVlO2M9bnVsbCE9PWM/Yy5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWMpe3ZhciBkPWM9Yy5uZXh0O2RvIDM9PT0oZC50YWcmMykmJihhPWQuZGVzdHJveSxkLmRlc3Ryb3k9dm9pZCAwLHZvaWQgMCE9PWEmJmEoKSksZD1kLm5leHQ7d2hpbGUoZCE9PWMpfXJldHVybjtjYXNlIDE6cmV0dXJuO2Nhc2UgNTpjPWIuc3RhdGVOb2RlO2lmKG51bGwhPWMpe2Q9Yi5tZW1vaXplZFByb3BzO3ZhciBlPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpkO2E9Yi50eXBlO3ZhciBmPWIudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKG51bGwhPT1mKXtjW3hmXT1kO1wiaW5wdXRcIj09PWEmJlwicmFkaW9cIj09PWQudHlwZSYmbnVsbCE9ZC5uYW1lJiYkYShjLGQpO3diKGEsZSk7Yj13YihhLGQpO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKz1cbjIpe3ZhciBnPWZbZV0saD1mW2UrMV07XCJzdHlsZVwiPT09Zz90YihjLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/b2IoYyxoKTpcImNoaWxkcmVuXCI9PT1nP3BiKGMsaCk6cWEoYyxnLGgsYil9c3dpdGNoKGEpe2Nhc2UgXCJpbnB1dFwiOmFiKGMsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYyxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YT1jLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGUsYy5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZC5tdWx0aXBsZSxmPWQudmFsdWUsbnVsbCE9Zj9mYihjLCEhZC5tdWx0aXBsZSxmLCExKTphIT09ISFkLm11bHRpcGxlJiYobnVsbCE9ZC5kZWZhdWx0VmFsdWU/ZmIoYywhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApOmZiKGMsISFkLm11bHRpcGxlLGQubXVsdGlwbGU/W106XCJcIiwhMSkpfX19cmV0dXJuO2Nhc2UgNjppZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IoeSgxNjIpKTtiLnN0YXRlTm9kZS5ub2RlVmFsdWU9XG5iLm1lbW9pemVkUHJvcHM7cmV0dXJuO2Nhc2UgMzpjPWIuc3RhdGVOb2RlO2MuaHlkcmF0ZSYmKGMuaHlkcmF0ZT0hMSxDYyhjLmNvbnRhaW5lckluZm8pKTtyZXR1cm47Y2FzZSAxMjpyZXR1cm47Y2FzZSAxMzpudWxsIT09Yi5tZW1vaXplZFN0YXRlJiYoamo9TygpLGFqKGIuY2hpbGQsITApKTtraihiKTtyZXR1cm47Y2FzZSAxOTpraihiKTtyZXR1cm47Y2FzZSAxNzpyZXR1cm47Y2FzZSAyMzpjYXNlIDI0OmFqKGIsbnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSk7cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fWZ1bmN0aW9uIGtqKGEpe3ZhciBiPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2EudXBkYXRlUXVldWU9bnVsbDt2YXIgYz1hLnN0YXRlTm9kZTtudWxsPT09YyYmKGM9YS5zdGF0ZU5vZGU9bmV3IFVpKTtiLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9bGouYmluZChudWxsLGEsYik7Yy5oYXMoYil8fChjLmFkZChiKSxiLnRoZW4oZCxkKSl9KX19XG5mdW5jdGlvbiBtaihhLGIpe3JldHVybiBudWxsIT09YSYmKGE9YS5tZW1vaXplZFN0YXRlLG51bGw9PT1hfHxudWxsIT09YS5kZWh5ZHJhdGVkKT8oYj1iLm1lbW9pemVkU3RhdGUsbnVsbCE9PWImJm51bGw9PT1iLmRlaHlkcmF0ZWQpOiExfXZhciBuaj1NYXRoLmNlaWwsb2o9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixwaj1yYS5SZWFjdEN1cnJlbnRPd25lcixYPTAsVT1udWxsLFk9bnVsbCxXPTAscWo9MCxyaj1CZigwKSxWPTAsc2o9bnVsbCx0aj0wLERnPTAsSGk9MCx1aj0wLHZqPW51bGwsamo9MCxKaT1JbmZpbml0eTtmdW5jdGlvbiB3aigpe0ppPU8oKSs1MDB9dmFyIFo9bnVsbCxRaT0hMSxSaT1udWxsLFRpPW51bGwseGo9ITEseWo9bnVsbCx6aj05MCxBaj1bXSxCaj1bXSxDaj1udWxsLERqPTAsRWo9bnVsbCxGaj0tMSxHaj0wLEhqPTAsSWo9bnVsbCxKaj0hMTtmdW5jdGlvbiBIZygpe3JldHVybiAwIT09KFgmNDgpP08oKTotMSE9PUZqP0ZqOkZqPU8oKX1cbmZ1bmN0aW9uIElnKGEpe2E9YS5tb2RlO2lmKDA9PT0oYSYyKSlyZXR1cm4gMTtpZigwPT09KGEmNCkpcmV0dXJuIDk5PT09ZWcoKT8xOjI7MD09PUdqJiYoR2o9dGopO2lmKDAhPT1rZy50cmFuc2l0aW9uKXswIT09SGomJihIaj1udWxsIT09dmo/dmoucGVuZGluZ0xhbmVzOjApO2E9R2o7dmFyIGI9NDE4NjExMiZ+SGo7YiY9LWI7MD09PWImJihhPTQxODYxMTImfmEsYj1hJi1hLDA9PT1iJiYoYj04MTkyKSk7cmV0dXJuIGJ9YT1lZygpOzAhPT0oWCY0KSYmOTg9PT1hP2E9WGMoMTIsR2opOihhPVNjKGEpLGE9WGMoYSxHaikpO3JldHVybiBhfVxuZnVuY3Rpb24gSmcoYSxiLGMpe2lmKDUwPERqKXRocm93IERqPTAsRWo9bnVsbCxFcnJvcih5KDE4NSkpO2E9S2ooYSxiKTtpZihudWxsPT09YSlyZXR1cm4gbnVsbDskYyhhLGIsYyk7YT09PVUmJihIaXw9Yiw0PT09ViYmSWkoYSxXKSk7dmFyIGQ9ZWcoKTsxPT09Yj8wIT09KFgmOCkmJjA9PT0oWCY0OCk/TGooYSk6KE1qKGEsYyksMD09PVgmJih3aigpLGlnKCkpKTooMD09PShYJjQpfHw5OCE9PWQmJjk5IT09ZHx8KG51bGw9PT1Daj9Daj1uZXcgU2V0KFthXSk6Q2ouYWRkKGEpKSxNaihhLGMpKTt2aj1hfWZ1bmN0aW9uIEtqKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO2M9YTtmb3IoYT1hLnJldHVybjtudWxsIT09YTspYS5jaGlsZExhbmVzfD1iLGM9YS5hbHRlcm5hdGUsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpLGM9YSxhPWEucmV0dXJuO3JldHVybiAzPT09Yy50YWc/Yy5zdGF0ZU5vZGU6bnVsbH1cbmZ1bmN0aW9uIE1qKGEsYil7Zm9yKHZhciBjPWEuY2FsbGJhY2tOb2RlLGQ9YS5zdXNwZW5kZWRMYW5lcyxlPWEucGluZ2VkTGFuZXMsZj1hLmV4cGlyYXRpb25UaW1lcyxnPWEucGVuZGluZ0xhbmVzOzA8Zzspe3ZhciBoPTMxLVZjKGcpLGs9MTw8aCxsPWZbaF07aWYoLTE9PT1sKXtpZigwPT09KGsmZCl8fDAhPT0oayZlKSl7bD1iO1JjKGspO3ZhciBuPUY7ZltoXT0xMDw9bj9sKzI1MDo2PD1uP2wrNUUzOi0xfX1lbHNlIGw8PWImJihhLmV4cGlyZWRMYW5lc3w9ayk7ZyY9fmt9ZD1VYyhhLGE9PT1VP1c6MCk7Yj1GO2lmKDA9PT1kKW51bGwhPT1jJiYoYyE9PVpmJiZQZihjKSxhLmNhbGxiYWNrTm9kZT1udWxsLGEuY2FsbGJhY2tQcmlvcml0eT0wKTtlbHNle2lmKG51bGwhPT1jKXtpZihhLmNhbGxiYWNrUHJpb3JpdHk9PT1iKXJldHVybjtjIT09WmYmJlBmKGMpfTE1PT09Yj8oYz1Mai5iaW5kKG51bGwsYSksbnVsbD09PWFnPyhhZz1bY10sYmc9T2YoVWYsamcpKTphZy5wdXNoKGMpLFxuYz1aZik6MTQ9PT1iP2M9aGcoOTksTGouYmluZChudWxsLGEpKTooYz1UYyhiKSxjPWhnKGMsTmouYmluZChudWxsLGEpKSk7YS5jYWxsYmFja1ByaW9yaXR5PWI7YS5jYWxsYmFja05vZGU9Y319XG5mdW5jdGlvbiBOaihhKXtGaj0tMTtIaj1Haj0wO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTt2YXIgYj1hLmNhbGxiYWNrTm9kZTtpZihPaigpJiZhLmNhbGxiYWNrTm9kZSE9PWIpcmV0dXJuIG51bGw7dmFyIGM9VWMoYSxhPT09VT9XOjApO2lmKDA9PT1jKXJldHVybiBudWxsO3ZhciBkPWM7dmFyIGU9WDtYfD0xNjt2YXIgZj1QaigpO2lmKFUhPT1hfHxXIT09ZCl3aigpLFFqKGEsZCk7ZG8gdHJ5e1JqKCk7YnJlYWt9Y2F0Y2goaCl7U2ooYSxoKX13aGlsZSgxKTtxZygpO29qLmN1cnJlbnQ9ZjtYPWU7bnVsbCE9PVk/ZD0wOihVPW51bGwsVz0wLGQ9Vik7aWYoMCE9PSh0aiZIaSkpUWooYSwwKTtlbHNlIGlmKDAhPT1kKXsyPT09ZCYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxjPVdjKGEpLDAhPT1jJiYoZD1UaihhLGMpKSk7aWYoMT09PWQpdGhyb3cgYj1zaixRaihhLDApLElpKGEsYyksTWooYSxPKCkpLGI7YS5maW5pc2hlZFdvcms9XG5hLmN1cnJlbnQuYWx0ZXJuYXRlO2EuZmluaXNoZWRMYW5lcz1jO3N3aXRjaChkKXtjYXNlIDA6Y2FzZSAxOnRocm93IEVycm9yKHkoMzQ1KSk7Y2FzZSAyOlVqKGEpO2JyZWFrO2Nhc2UgMzpJaShhLGMpO2lmKChjJjYyOTE0NTYwKT09PWMmJihkPWpqKzUwMC1PKCksMTA8ZCkpe2lmKDAhPT1VYyhhLDApKWJyZWFrO2U9YS5zdXNwZW5kZWRMYW5lcztpZigoZSZjKSE9PWMpe0hnKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZlO2JyZWFrfWEudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksZCk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA0OklpKGEsYyk7aWYoKGMmNDE4NjExMik9PT1jKWJyZWFrO2Q9YS5ldmVudFRpbWVzO2ZvcihlPS0xOzA8Yzspe3ZhciBnPTMxLVZjKGMpO2Y9MTw8ZztnPWRbZ107Zz5lJiYoZT1nKTtjJj1+Zn1jPWU7Yz1PKCktYztjPSgxMjA+Yz8xMjA6NDgwPmM/NDgwOjEwODA+Yz8xMDgwOjE5MjA+Yz8xOTIwOjNFMz5jPzNFMzo0MzIwPlxuYz80MzIwOjE5NjAqbmooYy8xOTYwKSktYztpZigxMDxjKXthLnRpbWVvdXRIYW5kbGU9b2YoVWouYmluZChudWxsLGEpLGMpO2JyZWFrfVVqKGEpO2JyZWFrO2Nhc2UgNTpVaihhKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHkoMzI5KSk7fX1NaihhLE8oKSk7cmV0dXJuIGEuY2FsbGJhY2tOb2RlPT09Yj9Oai5iaW5kKG51bGwsYSk6bnVsbH1mdW5jdGlvbiBJaShhLGIpe2ImPX51ajtiJj1+SGk7YS5zdXNwZW5kZWRMYW5lc3w9YjthLnBpbmdlZExhbmVzJj1+Yjtmb3IoYT1hLmV4cGlyYXRpb25UaW1lczswPGI7KXt2YXIgYz0zMS1WYyhiKSxkPTE8PGM7YVtjXT0tMTtiJj1+ZH19XG5mdW5jdGlvbiBMaihhKXtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzI3KSk7T2ooKTtpZihhPT09VSYmMCE9PShhLmV4cGlyZWRMYW5lcyZXKSl7dmFyIGI9Vzt2YXIgYz1UaihhLGIpOzAhPT0odGomSGkpJiYoYj1VYyhhLGIpLGM9VGooYSxiKSl9ZWxzZSBiPVVjKGEsMCksYz1UaihhLGIpOzAhPT1hLnRhZyYmMj09PWMmJihYfD02NCxhLmh5ZHJhdGUmJihhLmh5ZHJhdGU9ITEscWYoYS5jb250YWluZXJJbmZvKSksYj1XYyhhKSwwIT09YiYmKGM9VGooYSxiKSkpO2lmKDE9PT1jKXRocm93IGM9c2osUWooYSwwKSxJaShhLGIpLE1qKGEsTygpKSxjO2EuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWI7VWooYSk7TWooYSxPKCkpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gVmooKXtpZihudWxsIT09Q2ope3ZhciBhPUNqO0NqPW51bGw7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZXhwaXJlZExhbmVzfD0yNCZhLnBlbmRpbmdMYW5lcztNaihhLE8oKSl9KX1pZygpfWZ1bmN0aW9uIFdqKGEsYil7dmFyIGM9WDtYfD0xO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fWZ1bmN0aW9uIFhqKGEsYil7dmFyIGM9WDtYJj0tMjtYfD04O3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fWZ1bmN0aW9uIG5pKGEsYil7SShyaixxaik7cWp8PWI7dGp8PWJ9ZnVuY3Rpb24gS2koKXtxaj1yai5jdXJyZW50O0gocmopfVxuZnVuY3Rpb24gUWooYSxiKXthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO3ZhciBjPWEudGltZW91dEhhbmRsZTstMSE9PWMmJihhLnRpbWVvdXRIYW5kbGU9LTEscGYoYykpO2lmKG51bGwhPT1ZKWZvcihjPVkucmV0dXJuO251bGwhPT1jOyl7dmFyIGQ9Yztzd2l0Y2goZC50YWcpe2Nhc2UgMTpkPWQudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09ZCYmdm9pZCAwIT09ZCYmR2YoKTticmVhaztjYXNlIDM6ZmgoKTtIKE4pO0goTSk7dWgoKTticmVhaztjYXNlIDU6aGgoZCk7YnJlYWs7Y2FzZSA0OmZoKCk7YnJlYWs7Y2FzZSAxMzpIKFApO2JyZWFrO2Nhc2UgMTk6SChQKTticmVhaztjYXNlIDEwOnJnKGQpO2JyZWFrO2Nhc2UgMjM6Y2FzZSAyNDpLaSgpfWM9Yy5yZXR1cm59VT1hO1k9VGcoYS5jdXJyZW50LG51bGwpO1c9cWo9dGo9YjtWPTA7c2o9bnVsbDt1aj1IaT1EZz0wfVxuZnVuY3Rpb24gU2ooYSxiKXtkb3t2YXIgYz1ZO3RyeXtxZygpO3ZoLmN1cnJlbnQ9R2g7aWYoeWgpe2Zvcih2YXIgZD1SLm1lbW9pemVkU3RhdGU7bnVsbCE9PWQ7KXt2YXIgZT1kLnF1ZXVlO251bGwhPT1lJiYoZS5wZW5kaW5nPW51bGwpO2Q9ZC5uZXh0fXloPSExfXhoPTA7VD1TPVI9bnVsbDt6aD0hMTtwai5jdXJyZW50PW51bGw7aWYobnVsbD09PWN8fG51bGw9PT1jLnJldHVybil7Vj0xO3NqPWI7WT1udWxsO2JyZWFrfWE6e3ZhciBmPWEsZz1jLnJldHVybixoPWMsaz1iO2I9VztoLmZsYWdzfD0yMDQ4O2guZmlyc3RFZmZlY3Q9aC5sYXN0RWZmZWN0PW51bGw7aWYobnVsbCE9PWsmJlwib2JqZWN0XCI9PT10eXBlb2YgayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGsudGhlbil7dmFyIGw9aztpZigwPT09KGgubW9kZSYyKSl7dmFyIG49aC5hbHRlcm5hdGU7bj8oaC51cGRhdGVRdWV1ZT1uLnVwZGF0ZVF1ZXVlLGgubWVtb2l6ZWRTdGF0ZT1uLm1lbW9pemVkU3RhdGUsaC5sYW5lcz1uLmxhbmVzKTpcbihoLnVwZGF0ZVF1ZXVlPW51bGwsaC5tZW1vaXplZFN0YXRlPW51bGwpfXZhciBBPTAhPT0oUC5jdXJyZW50JjEpLHA9Zztkb3t2YXIgQztpZihDPTEzPT09cC50YWcpe3ZhciB4PXAubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09eClDPW51bGwhPT14LmRlaHlkcmF0ZWQ/ITA6ITE7ZWxzZXt2YXIgdz1wLm1lbW9pemVkUHJvcHM7Qz12b2lkIDA9PT13LmZhbGxiYWNrPyExOiEwIT09dy51bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjaz8hMDpBPyExOiEwfX1pZihDKXt2YXIgej1wLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT16KXt2YXIgdT1uZXcgU2V0O3UuYWRkKGwpO3AudXBkYXRlUXVldWU9dX1lbHNlIHouYWRkKGwpO2lmKDA9PT0ocC5tb2RlJjIpKXtwLmZsYWdzfD02NDtoLmZsYWdzfD0xNjM4NDtoLmZsYWdzJj0tMjk4MTtpZigxPT09aC50YWcpaWYobnVsbD09PWguYWx0ZXJuYXRlKWgudGFnPTE3O2Vsc2V7dmFyIHQ9emcoLTEsMSk7dC50YWc9MjtBZyhoLHQpfWgubGFuZXN8PTE7YnJlYWsgYX1rPVxudm9pZCAwO2g9Yjt2YXIgcT1mLnBpbmdDYWNoZTtudWxsPT09cT8ocT1mLnBpbmdDYWNoZT1uZXcgT2ksaz1uZXcgU2V0LHEuc2V0KGwsaykpOihrPXEuZ2V0KGwpLHZvaWQgMD09PWsmJihrPW5ldyBTZXQscS5zZXQobCxrKSkpO2lmKCFrLmhhcyhoKSl7ay5hZGQoaCk7dmFyIHY9WWouYmluZChudWxsLGYsbCxoKTtsLnRoZW4odix2KX1wLmZsYWdzfD00MDk2O3AubGFuZXM9YjticmVhayBhfXA9cC5yZXR1cm59d2hpbGUobnVsbCE9PXApO2s9RXJyb3IoKFJhKGgudHlwZSl8fFwiQSBSZWFjdCBjb21wb25lbnRcIikrXCIgc3VzcGVuZGVkIHdoaWxlIHJlbmRlcmluZywgYnV0IG5vIGZhbGxiYWNrIFVJIHdhcyBzcGVjaWZpZWQuXFxuXFxuQWRkIGEgPFN1c3BlbnNlIGZhbGxiYWNrPS4uLj4gY29tcG9uZW50IGhpZ2hlciBpbiB0aGUgdHJlZSB0byBwcm92aWRlIGEgbG9hZGluZyBpbmRpY2F0b3Igb3IgcGxhY2Vob2xkZXIgdG8gZGlzcGxheS5cIil9NSE9PVYmJihWPTIpO2s9TWkoayxoKTtwPVxuZztkb3tzd2l0Y2gocC50YWcpe2Nhc2UgMzpmPWs7cC5mbGFnc3w9NDA5NjtiJj0tYjtwLmxhbmVzfD1iO3ZhciBKPVBpKHAsZixiKTtCZyhwLEopO2JyZWFrIGE7Y2FzZSAxOmY9azt2YXIgSz1wLnR5cGUsUT1wLnN0YXRlTm9kZTtpZigwPT09KHAuZmxhZ3MmNjQpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEsuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09USYmXCJmdW5jdGlvblwiPT09dHlwZW9mIFEuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoUSkpKSl7cC5mbGFnc3w9NDA5NjtiJj0tYjtwLmxhbmVzfD1iO3ZhciBMPVNpKHAsZixiKTtCZyhwLEwpO2JyZWFrIGF9fXA9cC5yZXR1cm59d2hpbGUobnVsbCE9PXApfVpqKGMpfWNhdGNoKHZhKXtiPXZhO1k9PT1jJiZudWxsIT09YyYmKFk9Yz1jLnJldHVybik7Y29udGludWV9YnJlYWt9d2hpbGUoMSl9XG5mdW5jdGlvbiBQaigpe3ZhciBhPW9qLmN1cnJlbnQ7b2ouY3VycmVudD1HaDtyZXR1cm4gbnVsbD09PWE/R2g6YX1mdW5jdGlvbiBUaihhLGIpe3ZhciBjPVg7WHw9MTY7dmFyIGQ9UGooKTtVPT09YSYmVz09PWJ8fFFqKGEsYik7ZG8gdHJ5e2FrKCk7YnJlYWt9Y2F0Y2goZSl7U2ooYSxlKX13aGlsZSgxKTtxZygpO1g9Yztvai5jdXJyZW50PWQ7aWYobnVsbCE9PVkpdGhyb3cgRXJyb3IoeSgyNjEpKTtVPW51bGw7Vz0wO3JldHVybiBWfWZ1bmN0aW9uIGFrKCl7Zm9yKDtudWxsIT09WTspYmsoWSl9ZnVuY3Rpb24gUmooKXtmb3IoO251bGwhPT1ZJiYhUWYoKTspYmsoWSl9ZnVuY3Rpb24gYmsoYSl7dmFyIGI9Y2soYS5hbHRlcm5hdGUsYSxxaik7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iP1pqKGEpOlk9Yjtwai5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiBaaihhKXt2YXIgYj1hO2Rve3ZhciBjPWIuYWx0ZXJuYXRlO2E9Yi5yZXR1cm47aWYoMD09PShiLmZsYWdzJjIwNDgpKXtjPUdpKGMsYixxaik7aWYobnVsbCE9PWMpe1k9YztyZXR1cm59Yz1iO2lmKDI0IT09Yy50YWcmJjIzIT09Yy50YWd8fG51bGw9PT1jLm1lbW9pemVkU3RhdGV8fDAhPT0ocWomMTA3Mzc0MTgyNCl8fDA9PT0oYy5tb2RlJjQpKXtmb3IodmFyIGQ9MCxlPWMuY2hpbGQ7bnVsbCE9PWU7KWR8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGU9ZS5zaWJsaW5nO2MuY2hpbGRMYW5lcz1kfW51bGwhPT1hJiYwPT09KGEuZmxhZ3MmMjA0OCkmJihudWxsPT09YS5maXJzdEVmZmVjdCYmKGEuZmlyc3RFZmZlY3Q9Yi5maXJzdEVmZmVjdCksbnVsbCE9PWIubGFzdEVmZmVjdCYmKG51bGwhPT1hLmxhc3RFZmZlY3QmJihhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxhLmxhc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0KSwxPGIuZmxhZ3MmJihudWxsIT09XG5hLmxhc3RFZmZlY3Q/YS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YjphLmZpcnN0RWZmZWN0PWIsYS5sYXN0RWZmZWN0PWIpKX1lbHNle2M9TGkoYik7aWYobnVsbCE9PWMpe2MuZmxhZ3MmPTIwNDc7WT1jO3JldHVybn1udWxsIT09YSYmKGEuZmlyc3RFZmZlY3Q9YS5sYXN0RWZmZWN0PW51bGwsYS5mbGFnc3w9MjA0OCl9Yj1iLnNpYmxpbmc7aWYobnVsbCE9PWIpe1k9YjtyZXR1cm59WT1iPWF9d2hpbGUobnVsbCE9PWIpOzA9PT1WJiYoVj01KX1mdW5jdGlvbiBVaihhKXt2YXIgYj1lZygpO2dnKDk5LGRrLmJpbmQobnVsbCxhLGIpKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRrKGEsYil7ZG8gT2ooKTt3aGlsZShudWxsIT09eWopO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTt2YXIgYz1hLmZpbmlzaGVkV29yaztpZihudWxsPT09YylyZXR1cm4gbnVsbDthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO2lmKGM9PT1hLmN1cnJlbnQpdGhyb3cgRXJyb3IoeSgxNzcpKTthLmNhbGxiYWNrTm9kZT1udWxsO3ZhciBkPWMubGFuZXN8Yy5jaGlsZExhbmVzLGU9ZCxmPWEucGVuZGluZ0xhbmVzJn5lO2EucGVuZGluZ0xhbmVzPWU7YS5zdXNwZW5kZWRMYW5lcz0wO2EucGluZ2VkTGFuZXM9MDthLmV4cGlyZWRMYW5lcyY9ZTthLm11dGFibGVSZWFkTGFuZXMmPWU7YS5lbnRhbmdsZWRMYW5lcyY9ZTtlPWEuZW50YW5nbGVtZW50cztmb3IodmFyIGc9YS5ldmVudFRpbWVzLGg9YS5leHBpcmF0aW9uVGltZXM7MDxmOyl7dmFyIGs9MzEtVmMoZiksbD0xPDxrO2Vba109MDtnW2tdPS0xO2hba109LTE7ZiY9fmx9bnVsbCE9PVxuQ2omJjA9PT0oZCYyNCkmJkNqLmhhcyhhKSYmQ2ouZGVsZXRlKGEpO2E9PT1VJiYoWT1VPW51bGwsVz0wKTsxPGMuZmxhZ3M/bnVsbCE9PWMubGFzdEVmZmVjdD8oYy5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxkPWMuZmlyc3RFZmZlY3QpOmQ9YzpkPWMuZmlyc3RFZmZlY3Q7aWYobnVsbCE9PWQpe2U9WDtYfD0zMjtwai5jdXJyZW50PW51bGw7a2Y9ZmQ7Zz1OZSgpO2lmKE9lKGcpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBnKWg9e3N0YXJ0Omcuc2VsZWN0aW9uU3RhcnQsZW5kOmcuc2VsZWN0aW9uRW5kfTtlbHNlIGE6aWYoaD0oaD1nLm93bmVyRG9jdW1lbnQpJiZoLmRlZmF1bHRWaWV3fHx3aW5kb3csKGw9aC5nZXRTZWxlY3Rpb24mJmguZ2V0U2VsZWN0aW9uKCkpJiYwIT09bC5yYW5nZUNvdW50KXtoPWwuYW5jaG9yTm9kZTtmPWwuYW5jaG9yT2Zmc2V0O2s9bC5mb2N1c05vZGU7bD1sLmZvY3VzT2Zmc2V0O3RyeXtoLm5vZGVUeXBlLGsubm9kZVR5cGV9Y2F0Y2godmEpe2g9bnVsbDtcbmJyZWFrIGF9dmFyIG49MCxBPS0xLHA9LTEsQz0wLHg9MCx3PWcsej1udWxsO2I6Zm9yKDs7KXtmb3IodmFyIHU7Oyl7dyE9PWh8fDAhPT1mJiYzIT09dy5ub2RlVHlwZXx8KEE9bitmKTt3IT09a3x8MCE9PWwmJjMhPT13Lm5vZGVUeXBlfHwocD1uK2wpOzM9PT13Lm5vZGVUeXBlJiYobis9dy5ub2RlVmFsdWUubGVuZ3RoKTtpZihudWxsPT09KHU9dy5maXJzdENoaWxkKSlicmVhazt6PXc7dz11fWZvcig7Oyl7aWYodz09PWcpYnJlYWsgYjt6PT09aCYmKytDPT09ZiYmKEE9bik7ej09PWsmJisreD09PWwmJihwPW4pO2lmKG51bGwhPT0odT13Lm5leHRTaWJsaW5nKSlicmVhazt3PXo7ej13LnBhcmVudE5vZGV9dz11fWg9LTE9PT1BfHwtMT09PXA/bnVsbDp7c3RhcnQ6QSxlbmQ6cH19ZWxzZSBoPW51bGw7aD1ofHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBoPW51bGw7bGY9e2ZvY3VzZWRFbGVtOmcsc2VsZWN0aW9uUmFuZ2U6aH07ZmQ9ITE7SWo9bnVsbDtKaj0hMTtaPWQ7ZG8gdHJ5e2VrKCl9Y2F0Y2godmEpe2lmKG51bGw9PT1cblopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7SWo9bnVsbDtaPWQ7ZG8gdHJ5e2ZvcihnPWE7bnVsbCE9PVo7KXt2YXIgdD1aLmZsYWdzO3QmMTYmJnBiKFouc3RhdGVOb2RlLFwiXCIpO2lmKHQmMTI4KXt2YXIgcT1aLmFsdGVybmF0ZTtpZihudWxsIT09cSl7dmFyIHY9cS5yZWY7bnVsbCE9PXYmJihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygdj92KG51bGwpOnYuY3VycmVudD1udWxsKX19c3dpdGNoKHQmMTAzOCl7Y2FzZSAyOmZqKFopO1ouZmxhZ3MmPS0zO2JyZWFrO2Nhc2UgNjpmaihaKTtaLmZsYWdzJj0tMztpaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDEwMjQ6Wi5mbGFncyY9LTEwMjU7YnJlYWs7Y2FzZSAxMDI4OlouZmxhZ3MmPS0xMDI1O2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgNDppaihaLmFsdGVybmF0ZSxaKTticmVhaztjYXNlIDg6aD1aO2NqKGcsaCk7dmFyIEo9aC5hbHRlcm5hdGU7ZGooaCk7bnVsbCE9PVxuSiYmZGooSil9Wj1aLm5leHRFZmZlY3R9fWNhdGNoKHZhKXtpZihudWxsPT09Wil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTt2PWxmO3E9TmUoKTt0PXYuZm9jdXNlZEVsZW07Zz12LnNlbGVjdGlvblJhbmdlO2lmKHEhPT10JiZ0JiZ0Lm93bmVyRG9jdW1lbnQmJk1lKHQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdCkpe251bGwhPT1nJiZPZSh0KSYmKHE9Zy5zdGFydCx2PWcuZW5kLHZvaWQgMD09PXYmJih2PXEpLFwic2VsZWN0aW9uU3RhcnRcImluIHQ/KHQuc2VsZWN0aW9uU3RhcnQ9cSx0LnNlbGVjdGlvbkVuZD1NYXRoLm1pbih2LHQudmFsdWUubGVuZ3RoKSk6KHY9KHE9dC5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJnEuZGVmYXVsdFZpZXd8fHdpbmRvdyx2LmdldFNlbGVjdGlvbiYmKHY9di5nZXRTZWxlY3Rpb24oKSxoPXQudGV4dENvbnRlbnQubGVuZ3RoLEo9TWF0aC5taW4oZy5zdGFydCxoKSxnPXZvaWQgMD09PVxuZy5lbmQ/SjpNYXRoLm1pbihnLmVuZCxoKSwhdi5leHRlbmQmJko+ZyYmKGg9ZyxnPUosSj1oKSxoPUxlKHQsSiksZj1MZSh0LGcpLGgmJmYmJigxIT09di5yYW5nZUNvdW50fHx2LmFuY2hvck5vZGUhPT1oLm5vZGV8fHYuYW5jaG9yT2Zmc2V0IT09aC5vZmZzZXR8fHYuZm9jdXNOb2RlIT09Zi5ub2RlfHx2LmZvY3VzT2Zmc2V0IT09Zi5vZmZzZXQpJiYocT1xLmNyZWF0ZVJhbmdlKCkscS5zZXRTdGFydChoLm5vZGUsaC5vZmZzZXQpLHYucmVtb3ZlQWxsUmFuZ2VzKCksSj5nPyh2LmFkZFJhbmdlKHEpLHYuZXh0ZW5kKGYubm9kZSxmLm9mZnNldCkpOihxLnNldEVuZChmLm5vZGUsZi5vZmZzZXQpLHYuYWRkUmFuZ2UocSkpKSkpKTtxPVtdO2Zvcih2PXQ7dj12LnBhcmVudE5vZGU7KTE9PT12Lm5vZGVUeXBlJiZxLnB1c2goe2VsZW1lbnQ6dixsZWZ0OnYuc2Nyb2xsTGVmdCx0b3A6di5zY3JvbGxUb3B9KTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgdC5mb2N1cyYmdC5mb2N1cygpO2Zvcih0PVxuMDt0PHEubGVuZ3RoO3QrKyl2PXFbdF0sdi5lbGVtZW50LnNjcm9sbExlZnQ9di5sZWZ0LHYuZWxlbWVudC5zY3JvbGxUb3A9di50b3B9ZmQ9ISFrZjtsZj1rZj1udWxsO2EuY3VycmVudD1jO1o9ZDtkbyB0cnl7Zm9yKHQ9YTtudWxsIT09Wjspe3ZhciBLPVouZmxhZ3M7SyYzNiYmWWkodCxaLmFsdGVybmF0ZSxaKTtpZihLJjEyOCl7cT12b2lkIDA7dmFyIFE9Wi5yZWY7aWYobnVsbCE9PVEpe3ZhciBMPVouc3RhdGVOb2RlO3N3aXRjaChaLnRhZyl7Y2FzZSA1OnE9TDticmVhaztkZWZhdWx0OnE9TH1cImZ1bmN0aW9uXCI9PT10eXBlb2YgUT9RKHEpOlEuY3VycmVudD1xfX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO1o9bnVsbDskZigpO1g9ZX1lbHNlIGEuY3VycmVudD1jO2lmKHhqKXhqPSExLHlqPWEsemo9YjtlbHNlIGZvcihaPWQ7bnVsbCE9PVo7KWI9XG5aLm5leHRFZmZlY3QsWi5uZXh0RWZmZWN0PW51bGwsWi5mbGFncyY4JiYoSz1aLEsuc2libGluZz1udWxsLEsuc3RhdGVOb2RlPW51bGwpLFo9YjtkPWEucGVuZGluZ0xhbmVzOzA9PT1kJiYoVGk9bnVsbCk7MT09PWQ/YT09PUVqP0RqKys6KERqPTAsRWo9YSk6RGo9MDtjPWMuc3RhdGVOb2RlO2lmKE1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgTWYub25Db21taXRGaWJlclJvb3QpdHJ5e01mLm9uQ29tbWl0RmliZXJSb290KExmLGMsdm9pZCAwLDY0PT09KGMuY3VycmVudC5mbGFncyY2NCkpfWNhdGNoKHZhKXt9TWooYSxPKCkpO2lmKFFpKXRocm93IFFpPSExLGE9UmksUmk9bnVsbCxhO2lmKDAhPT0oWCY4KSlyZXR1cm4gbnVsbDtpZygpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZWsoKXtmb3IoO251bGwhPT1aOyl7dmFyIGE9Wi5hbHRlcm5hdGU7Smp8fG51bGw9PT1Janx8KDAhPT0oWi5mbGFncyY4KT9kYyhaLElqKSYmKEpqPSEwKToxMz09PVoudGFnJiZtaihhLFopJiZkYyhaLElqKSYmKEpqPSEwKSk7dmFyIGI9Wi5mbGFnczswIT09KGImMjU2KSYmWGkoYSxaKTswPT09KGImNTEyKXx8eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSk7Wj1aLm5leHRFZmZlY3R9fWZ1bmN0aW9uIE9qKCl7aWYoOTAhPT16ail7dmFyIGE9OTc8emo/OTc6emo7emo9OTA7cmV0dXJuIGdnKGEsZmspfXJldHVybiExfWZ1bmN0aW9uICRpKGEsYil7QWoucHVzaChiLGEpO3hqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpfWZ1bmN0aW9uIFppKGEsYil7QmoucHVzaChiLGEpO3hqfHwoeGo9ITAsaGcoOTcsZnVuY3Rpb24oKXtPaigpO3JldHVybiBudWxsfSkpfVxuZnVuY3Rpb24gZmsoKXtpZihudWxsPT09eWopcmV0dXJuITE7dmFyIGE9eWo7eWo9bnVsbDtpZigwIT09KFgmNDgpKXRocm93IEVycm9yKHkoMzMxKSk7dmFyIGI9WDtYfD0zMjt2YXIgYz1CajtCaj1bXTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrPTIpe3ZhciBlPWNbZF0sZj1jW2QrMV0sZz1lLmRlc3Ryb3k7ZS5kZXN0cm95PXZvaWQgMDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyl0cnl7ZygpfWNhdGNoKGspe2lmKG51bGw9PT1mKXRocm93IEVycm9yKHkoMzMwKSk7V2koZixrKX19Yz1BajtBaj1bXTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7ZT1jW2RdO2Y9Y1tkKzFdO3RyeXt2YXIgaD1lLmNyZWF0ZTtlLmRlc3Ryb3k9aCgpfWNhdGNoKGspe2lmKG51bGw9PT1mKXRocm93IEVycm9yKHkoMzMwKSk7V2koZixrKX19Zm9yKGg9YS5jdXJyZW50LmZpcnN0RWZmZWN0O251bGwhPT1oOylhPWgubmV4dEVmZmVjdCxoLm5leHRFZmZlY3Q9bnVsbCxoLmZsYWdzJjgmJihoLnNpYmxpbmc9XG5udWxsLGguc3RhdGVOb2RlPW51bGwpLGg9YTtYPWI7aWcoKTtyZXR1cm4hMH1mdW5jdGlvbiBnayhhLGIsYyl7Yj1NaShjLGIpO2I9UGkoYSxiLDEpO0FnKGEsYik7Yj1IZygpO2E9S2ooYSwxKTtudWxsIT09YSYmKCRjKGEsMSxiKSxNaihhLGIpKX1cbmZ1bmN0aW9uIFdpKGEsYil7aWYoMz09PWEudGFnKWdrKGEsYSxiKTtlbHNlIGZvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKDM9PT1jLnRhZyl7Z2soYyxhLGIpO2JyZWFrfWVsc2UgaWYoMT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXthPU1pKGIsYSk7dmFyIGU9U2koYyxhLDEpO0FnKGMsZSk7ZT1IZygpO2M9S2ooYywxKTtpZihudWxsIT09YykkYyhjLDEsZSksTWooYyxlKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVRpfHwhVGkuaGFzKGQpKSl0cnl7ZC5jb21wb25lbnREaWRDYXRjaChiLGEpfWNhdGNoKGYpe31icmVha319Yz1jLnJldHVybn19XG5mdW5jdGlvbiBZaihhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2I9SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmM7VT09PWEmJihXJmMpPT09YyYmKDQ9PT1WfHwzPT09ViYmKFcmNjI5MTQ1NjApPT09VyYmNTAwPk8oKS1qaj9RaihhLDApOnVqfD1jKTtNaihhLGIpfWZ1bmN0aW9uIGxqKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2I9MDswPT09YiYmKGI9YS5tb2RlLDA9PT0oYiYyKT9iPTE6MD09PShiJjQpP2I9OTk9PT1lZygpPzE6MjooMD09PUdqJiYoR2o9dGopLGI9WWMoNjI5MTQ1NjAmfkdqKSwwPT09YiYmKGI9NDE5NDMwNCkpKTtjPUhnKCk7YT1LaihhLGIpO251bGwhPT1hJiYoJGMoYSxiLGMpLE1qKGEsYykpfXZhciBjaztcbmNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iLmxhbmVzO2lmKG51bGwhPT1hKWlmKGEubWVtb2l6ZWRQcm9wcyE9PWIucGVuZGluZ1Byb3BzfHxOLmN1cnJlbnQpdWc9ITA7ZWxzZSBpZigwIT09KGMmZCkpdWc9MCE9PShhLmZsYWdzJjE2Mzg0KT8hMDohMTtlbHNle3VnPSExO3N3aXRjaChiLnRhZyl7Y2FzZSAzOnJpKGIpO3NoKCk7YnJlYWs7Y2FzZSA1OmdoKGIpO2JyZWFrO2Nhc2UgMTpGZihiLnR5cGUpJiZKZihiKTticmVhaztjYXNlIDQ6ZWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOmQ9Yi5tZW1vaXplZFByb3BzLnZhbHVlO3ZhciBlPWIudHlwZS5fY29udGV4dDtJKG1nLGUuX2N1cnJlbnRWYWx1ZSk7ZS5fY3VycmVudFZhbHVlPWQ7YnJlYWs7Y2FzZSAxMzppZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXtpZigwIT09KGMmYi5jaGlsZC5jaGlsZExhbmVzKSlyZXR1cm4gdGkoYSxiLGMpO0koUCxQLmN1cnJlbnQmMSk7Yj1oaShhLGIsYyk7cmV0dXJuIG51bGwhPT1cbmI/Yi5zaWJsaW5nOm51bGx9SShQLFAuY3VycmVudCYxKTticmVhaztjYXNlIDE5OmQ9MCE9PShjJmIuY2hpbGRMYW5lcyk7aWYoMCE9PShhLmZsYWdzJjY0KSl7aWYoZClyZXR1cm4gQWkoYSxiLGMpO2IuZmxhZ3N8PTY0fWU9Yi5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoZS5yZW5kZXJpbmc9bnVsbCxlLnRhaWw9bnVsbCxlLmxhc3RFZmZlY3Q9bnVsbCk7SShQLFAuY3VycmVudCk7aWYoZClicmVhaztlbHNlIHJldHVybiBudWxsO2Nhc2UgMjM6Y2FzZSAyNDpyZXR1cm4gYi5sYW5lcz0wLG1pKGEsYixjKX1yZXR1cm4gaGkoYSxiLGMpfWVsc2UgdWc9ITE7Yi5sYW5lcz0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmQ9Yi50eXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7ZT1FZihiLE0uY3VycmVudCk7dGcoYixjKTtlPUNoKG51bGwsYixkLGEsZSxjKTtiLmZsYWdzfD0xO2lmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mKXtiLnRhZz0xO2IubWVtb2l6ZWRTdGF0ZT1udWxsO2IudXBkYXRlUXVldWU9bnVsbDtpZihGZihkKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO2IubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGw7eGcoYik7dmFyIGc9ZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJkdnKGIsZCxnLGEpO2UudXBkYXRlcj1LZztiLnN0YXRlTm9kZT1lO2UuX3JlYWN0SW50ZXJuYWxzPWI7T2coYixkLGEsYyk7Yj1xaShudWxsLGIsZCwhMCxmLGMpfWVsc2UgYi50YWc9MCxmaShudWxsLGIsZSxjKSxiPWIuY2hpbGQ7cmV0dXJuIGI7Y2FzZSAxNjplPWIuZWxlbWVudFR5cGU7YTp7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7XG5hPWIucGVuZGluZ1Byb3BzO2Y9ZS5faW5pdDtlPWYoZS5fcGF5bG9hZCk7Yi50eXBlPWU7Zj1iLnRhZz1oayhlKTthPWxnKGUsYSk7c3dpdGNoKGYpe2Nhc2UgMDpiPWxpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDE6Yj1waShudWxsLGIsZSxhLGMpO2JyZWFrIGE7Y2FzZSAxMTpiPWdpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDE0OmI9aWkobnVsbCxiLGUsbGcoZS50eXBlLGEpLGQsYyk7YnJlYWsgYX10aHJvdyBFcnJvcih5KDMwNixlLFwiXCIpKTt9cmV0dXJuIGI7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLGxpKGEsYixkLGUsYyk7Y2FzZSAxOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLHBpKGEsYixkLGUsYyk7Y2FzZSAzOnJpKGIpO2Q9Yi51cGRhdGVRdWV1ZTtpZihudWxsPT09YXx8bnVsbD09PWQpdGhyb3cgRXJyb3IoeSgyODIpKTtcbmQ9Yi5wZW5kaW5nUHJvcHM7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6bnVsbDt5ZyhhLGIpO0NnKGIsZCxudWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpc2goKSxiPWhpKGEsYixjKTtlbHNle2U9Yi5zdGF0ZU5vZGU7aWYoZj1lLmh5ZHJhdGUpa2g9cmYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mby5maXJzdENoaWxkKSxqaD1iLGY9bGg9ITA7aWYoZil7YT1lLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE7aWYobnVsbCE9YSlmb3IoZT0wO2U8YS5sZW5ndGg7ZSs9MilmPWFbZV0sZi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeT1hW2UrMV0sdGgucHVzaChmKTtjPVpnKGIsbnVsbCxkLGMpO2ZvcihiLmNoaWxkPWM7YzspYy5mbGFncz1jLmZsYWdzJi0zfDEwMjQsYz1jLnNpYmxpbmd9ZWxzZSBmaShhLGIsZCxjKSxzaCgpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIGdoKGIpLG51bGw9PT1hJiZcbnBoKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxnPWUuY2hpbGRyZW4sbmYoZCxlKT9nPW51bGw6bnVsbCE9PWYmJm5mKGQsZikmJihiLmZsYWdzfD0xNiksb2koYSxiKSxmaShhLGIsZyxjKSxiLmNoaWxkO2Nhc2UgNjpyZXR1cm4gbnVsbD09PWEmJnBoKGIpLG51bGw7Y2FzZSAxMzpyZXR1cm4gdGkoYSxiLGMpO2Nhc2UgNDpyZXR1cm4gZWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxkPWIucGVuZGluZ1Byb3BzLG51bGw9PT1hP2IuY2hpbGQ9WWcoYixudWxsLGQsYyk6ZmkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLGdpKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMsYyksYi5jaGlsZDtjYXNlIDg6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixcbmMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2c9Yi5tZW1vaXplZFByb3BzO2Y9ZS52YWx1ZTt2YXIgaD1iLnR5cGUuX2NvbnRleHQ7SShtZyxoLl9jdXJyZW50VmFsdWUpO2guX2N1cnJlbnRWYWx1ZT1mO2lmKG51bGwhPT1nKWlmKGg9Zy52YWx1ZSxmPUhlKGgsZik/MDooXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzP2QuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzKGgsZik6MTA3Mzc0MTgyMyl8MCwwPT09Zil7aWYoZy5jaGlsZHJlbj09PWUuY2hpbGRyZW4mJiFOLmN1cnJlbnQpe2I9aGkoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGg9Yi5jaGlsZCxudWxsIT09aCYmKGgucmV0dXJuPWIpO251bGwhPT1oOyl7dmFyIGs9aC5kZXBlbmRlbmNpZXM7aWYobnVsbCE9PWspe2c9aC5jaGlsZDtmb3IodmFyIGw9XG5rLmZpcnN0Q29udGV4dDtudWxsIT09bDspe2lmKGwuY29udGV4dD09PWQmJjAhPT0obC5vYnNlcnZlZEJpdHMmZikpezE9PT1oLnRhZyYmKGw9emcoLTEsYyYtYyksbC50YWc9MixBZyhoLGwpKTtoLmxhbmVzfD1jO2w9aC5hbHRlcm5hdGU7bnVsbCE9PWwmJihsLmxhbmVzfD1jKTtzZyhoLnJldHVybixjKTtrLmxhbmVzfD1jO2JyZWFrfWw9bC5uZXh0fX1lbHNlIGc9MTA9PT1oLnRhZz9oLnR5cGU9PT1iLnR5cGU/bnVsbDpoLmNoaWxkOmguY2hpbGQ7aWYobnVsbCE9PWcpZy5yZXR1cm49aDtlbHNlIGZvcihnPWg7bnVsbCE9PWc7KXtpZihnPT09Yil7Zz1udWxsO2JyZWFrfWg9Zy5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1nLnJldHVybjtnPWg7YnJlYWt9Zz1nLnJldHVybn1oPWd9ZmkoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZj1iLnBlbmRpbmdQcm9wcyxkPWYuY2hpbGRyZW4sdGcoYixjKSxlPXZnKGUsXG5mLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZmxhZ3N8PTEsZmkoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDE0OnJldHVybiBlPWIudHlwZSxmPWxnKGUsYi5wZW5kaW5nUHJvcHMpLGY9bGcoZS50eXBlLGYpLGlpKGEsYixlLGYsZCxjKTtjYXNlIDE1OnJldHVybiBraShhLGIsYi50eXBlLGIucGVuZGluZ1Byb3BzLGQsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6bGcoZCxlKSxudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKSxiLnRhZz0xLEZmKGQpPyhhPSEwLEpmKGIpKTphPSExLHRnKGIsYyksTWcoYixkLGUpLE9nKGIsZCxlLGMpLHFpKG51bGwsYixkLCEwLGEsYyk7Y2FzZSAxOTpyZXR1cm4gQWkoYSxiLGMpO2Nhc2UgMjM6cmV0dXJuIG1pKGEsYixjKTtjYXNlIDI0OnJldHVybiBtaShhLGIsYyl9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTtcbn07ZnVuY3Rpb24gaWsoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLmZsYWdzPTA7dGhpcy5sYXN0RWZmZWN0PXRoaXMuZmlyc3RFZmZlY3Q9dGhpcy5uZXh0RWZmZWN0PW51bGw7dGhpcy5jaGlsZExhbmVzPXRoaXMubGFuZXM9MDt0aGlzLmFsdGVybmF0ZT1udWxsfWZ1bmN0aW9uIG5oKGEsYixjLGQpe3JldHVybiBuZXcgaWsoYSxiLGMsZCl9ZnVuY3Rpb24gamkoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1cbmZ1bmN0aW9uIGhrKGEpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBqaShhKT8xOjA7aWYodm9pZCAwIT09YSYmbnVsbCE9PWEpe2E9YS4kJHR5cGVvZjtpZihhPT09QWEpcmV0dXJuIDExO2lmKGE9PT1EYSlyZXR1cm4gMTR9cmV0dXJuIDJ9XG5mdW5jdGlvbiBUZyhhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO251bGw9PT1jPyhjPW5oKGEudGFnLGIsYS5rZXksYS5tb2RlKSxjLmVsZW1lbnRUeXBlPWEuZWxlbWVudFR5cGUsYy50eXBlPWEudHlwZSxjLnN0YXRlTm9kZT1hLnN0YXRlTm9kZSxjLmFsdGVybmF0ZT1hLGEuYWx0ZXJuYXRlPWMpOihjLnBlbmRpbmdQcm9wcz1iLGMudHlwZT1hLnR5cGUsYy5mbGFncz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcztjLmxhbmVzPWEubGFuZXM7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntsYW5lczpiLmxhbmVzLGZpcnN0Q29udGV4dDpiLmZpcnN0Q29udGV4dH07XG5jLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIFZnKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlqaShhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm4gWGcoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSBIYTpnPTg7ZXw9MTY7YnJlYWs7Y2FzZSB3YTpnPTg7ZXw9MTticmVhaztjYXNlIHhhOnJldHVybiBhPW5oKDEyLGMsYixlfDgpLGEuZWxlbWVudFR5cGU9eGEsYS50eXBlPXhhLGEubGFuZXM9ZixhO2Nhc2UgQmE6cmV0dXJuIGE9bmgoMTMsYyxiLGUpLGEudHlwZT1CYSxhLmVsZW1lbnRUeXBlPUJhLGEubGFuZXM9ZixhO2Nhc2UgQ2E6cmV0dXJuIGE9bmgoMTksYyxiLGUpLGEuZWxlbWVudFR5cGU9Q2EsYS5sYW5lcz1mLGE7Y2FzZSBJYTpyZXR1cm4gdmkoYyxlLGYsYik7Y2FzZSBKYTpyZXR1cm4gYT1uaCgyNCxjLGIsZSksYS5lbGVtZW50VHlwZT1KYSxhLmxhbmVzPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBhJiZudWxsIT09YSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB5YTpnPTEwO2JyZWFrIGE7Y2FzZSB6YTpnPTk7YnJlYWsgYTtjYXNlIEFhOmc9MTE7YnJlYWsgYTtjYXNlIERhOmc9MTQ7YnJlYWsgYTtjYXNlIEVhOmc9MTY7ZD1udWxsO2JyZWFrIGE7Y2FzZSBGYTpnPTIyO2JyZWFrIGF9dGhyb3cgRXJyb3IoeSgxMzAsbnVsbD09YT9hOnR5cGVvZiBhLFwiXCIpKTt9Yj1uaChnLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5sYW5lcz1mO3JldHVybiBifWZ1bmN0aW9uIFhnKGEsYixjLGQpe2E9bmgoNyxhLGQsYik7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIHZpKGEsYixjLGQpe2E9bmgoMjMsYSxkLGIpO2EuZWxlbWVudFR5cGU9SWE7YS5sYW5lcz1jO3JldHVybiBhfWZ1bmN0aW9uIFVnKGEsYixjKXthPW5oKDYsYSxudWxsLGIpO2EubGFuZXM9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIFdnKGEsYixjKXtiPW5oKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmxhbmVzPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gamsoYSxiLGMpe3RoaXMudGFnPWI7dGhpcy5jb250YWluZXJJbmZvPWE7dGhpcy5maW5pc2hlZFdvcms9dGhpcy5waW5nQ2FjaGU9dGhpcy5jdXJyZW50PXRoaXMucGVuZGluZ0NoaWxkcmVuPW51bGw7dGhpcy50aW1lb3V0SGFuZGxlPS0xO3RoaXMucGVuZGluZ0NvbnRleHQ9dGhpcy5jb250ZXh0PW51bGw7dGhpcy5oeWRyYXRlPWM7dGhpcy5jYWxsYmFja05vZGU9bnVsbDt0aGlzLmNhbGxiYWNrUHJpb3JpdHk9MDt0aGlzLmV2ZW50VGltZXM9WmMoMCk7dGhpcy5leHBpcmF0aW9uVGltZXM9WmMoLTEpO3RoaXMuZW50YW5nbGVkTGFuZXM9dGhpcy5maW5pc2hlZExhbmVzPXRoaXMubXV0YWJsZVJlYWRMYW5lcz10aGlzLmV4cGlyZWRMYW5lcz10aGlzLnBpbmdlZExhbmVzPXRoaXMuc3VzcGVuZGVkTGFuZXM9dGhpcy5wZW5kaW5nTGFuZXM9MDt0aGlzLmVudGFuZ2xlbWVudHM9WmMoMCk7dGhpcy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhPW51bGx9XG5mdW5jdGlvbiBrayhhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOnRhLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuZnVuY3Rpb24gbGsoYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9SGcoKSxnPUlnKGUpO2E6aWYoYyl7Yz1jLl9yZWFjdEludGVybmFscztiOntpZihaYihjKSE9PWN8fDEhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE3MCkpO3ZhciBoPWM7ZG97c3dpdGNoKGgudGFnKXtjYXNlIDM6aD1oLnN0YXRlTm9kZS5jb250ZXh0O2JyZWFrIGI7Y2FzZSAxOmlmKEZmKGgudHlwZSkpe2g9aC5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYn19aD1oLnJldHVybn13aGlsZShudWxsIT09aCk7dGhyb3cgRXJyb3IoeSgxNzEpKTt9aWYoMT09PWMudGFnKXt2YXIgaz1jLnR5cGU7aWYoRmYoaykpe2M9SWYoYyxrLGgpO2JyZWFrIGF9fWM9aH1lbHNlIGM9Q2Y7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj16ZyhmLGcpO2IucGF5bG9hZD17ZWxlbWVudDphfTtkPXZvaWQgMD09PWQ/bnVsbDpkO251bGwhPT1cbmQmJihiLmNhbGxiYWNrPWQpO0FnKGUsYik7SmcoZSxnLGYpO3JldHVybiBnfWZ1bmN0aW9uIG1rKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA1OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19ZnVuY3Rpb24gbmsoYSxiKXthPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmbnVsbCE9PWEuZGVoeWRyYXRlZCl7dmFyIGM9YS5yZXRyeUxhbmU7YS5yZXRyeUxhbmU9MCE9PWMmJmM8Yj9jOmJ9fWZ1bmN0aW9uIG9rKGEsYil7bmsoYSxiKTsoYT1hLmFsdGVybmF0ZSkmJm5rKGEsYil9ZnVuY3Rpb24gcGsoKXtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIHFrKGEsYixjKXt2YXIgZD1udWxsIT1jJiZudWxsIT1jLmh5ZHJhdGlvbk9wdGlvbnMmJmMuaHlkcmF0aW9uT3B0aW9ucy5tdXRhYmxlU291cmNlc3x8bnVsbDtjPW5ldyBqayhhLGIsbnVsbCE9YyYmITA9PT1jLmh5ZHJhdGUpO2I9bmgoMyxudWxsLG51bGwsMj09PWI/NzoxPT09Yj8zOjApO2MuY3VycmVudD1iO2Iuc3RhdGVOb2RlPWM7eGcoYik7YVtmZl09Yy5jdXJyZW50O2NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtpZihkKWZvcihhPTA7YTxkLmxlbmd0aDthKyspe2I9ZFthXTt2YXIgZT1iLl9nZXRWZXJzaW9uO2U9ZShiLl9zb3VyY2UpO251bGw9PWMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT9jLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9W2IsZV06Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhLnB1c2goYixlKX10aGlzLl9pbnRlcm5hbFJvb3Q9Y31cbnFrLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSl7bGsoYSx0aGlzLl9pbnRlcm5hbFJvb3QsbnVsbCxudWxsKX07cWsucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9pbnRlcm5hbFJvb3QsYj1hLmNvbnRhaW5lckluZm87bGsobnVsbCxhLG51bGwsZnVuY3Rpb24oKXtiW2ZmXT1udWxsfSl9O2Z1bmN0aW9uIHJrKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlJiYoOCE9PWEubm9kZVR5cGV8fFwiIHJlYWN0LW1vdW50LXBvaW50LXVuc3RhYmxlIFwiIT09YS5ub2RlVmFsdWUpKX1cbmZ1bmN0aW9uIHNrKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgcWsoYSwwLGI/e2h5ZHJhdGU6ITB9OnZvaWQgMCl9XG5mdW5jdGlvbiB0ayhhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXt2YXIgZz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2guY2FsbChhKX19bGsoYixnLGEsZSl9ZWxzZXtmPWMuX3JlYWN0Um9vdENvbnRhaW5lcj1zayhjLGQpO2c9Zi5faW50ZXJuYWxSb290O2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1tayhnKTtrLmNhbGwoYSl9fVhqKGZ1bmN0aW9uKCl7bGsoYixnLGEsZSl9KX1yZXR1cm4gbWsoZyl9ZWM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDQsYik7b2soYSw0KX19O2ZjPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPUhnKCk7SmcoYSw2NzEwODg2NCxiKTtvayhhLDY3MTA4ODY0KX19O1xuZ2M9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKSxjPUlnKGEpO0pnKGEsYyxiKTtvayhhLGMpfX07aGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYigpfTtcbnliPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYil7Y2FzZSBcImlucHV0XCI6YWIoYSxjKTtiPWMubmFtZTtpZihcInJhZGlvXCI9PT1jLnR5cGUmJm51bGwhPWIpe2ZvcihjPWE7Yy5wYXJlbnROb2RlOyljPWMucGFyZW50Tm9kZTtjPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIrSlNPTi5zdHJpbmdpZnkoXCJcIitiKSsnXVt0eXBlPVwicmFkaW9cIl0nKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdO2lmKGQhPT1hJiZkLmZvcm09PT1hLmZvcm0pe3ZhciBlPURiKGQpO2lmKCFlKXRocm93IEVycm9yKHkoOTApKTtXYShkKTthYihkLGUpfX19YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoYSxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLnZhbHVlLG51bGwhPWImJmZiKGEsISFjLm11bHRpcGxlLGIsITEpfX07R2I9V2o7XG5IYj1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVg7WHw9NDt0cnl7cmV0dXJuIGdnKDk4LGEuYmluZChudWxsLGIsYyxkLGUpKX1maW5hbGx5e1g9ZiwwPT09WCYmKHdqKCksaWcoKSl9fTtJYj1mdW5jdGlvbigpezA9PT0oWCY0OSkmJihWaigpLE9qKCkpfTtKYj1mdW5jdGlvbihhLGIpe3ZhciBjPVg7WHw9Mjt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtYPWMsMD09PVgmJih3aigpLGlnKCkpfX07ZnVuY3Rpb24gdWsoYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4ga2soYSxiLG51bGwsYyl9dmFyIHZrPXtFdmVudHM6W0NiLHVlLERiLEViLEZiLE9qLHtjdXJyZW50OiExfV19LHdrPXtmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3YyxidW5kbGVUeXBlOjAsdmVyc2lvbjpcIjE3LjAuMlwiLHJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn07XG52YXIgeGs9e2J1bmRsZVR5cGU6d2suYnVuZGxlVHlwZSx2ZXJzaW9uOndrLnZlcnNpb24scmVuZGVyZXJQYWNrYWdlTmFtZTp3ay5yZW5kZXJlclBhY2thZ2VOYW1lLHJlbmRlcmVyQ29uZmlnOndrLnJlbmRlcmVyQ29uZmlnLG92ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVSZW5hbWVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLG92ZXJyaWRlUHJvcHNEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wc1JlbmFtZVBhdGg6bnVsbCxzZXRTdXNwZW5zZUhhbmRsZXI6bnVsbCxzY2hlZHVsZVVwZGF0ZTpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOnJhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1jYyhhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6d2suZmluZEZpYmVyQnlIb3N0SW5zdGFuY2V8fFxucGssZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoOm51bGwsc2NoZWR1bGVSZWZyZXNoOm51bGwsc2NoZWR1bGVSb290Om51bGwsc2V0UmVmcmVzaEhhbmRsZXI6bnVsbCxnZXRDdXJyZW50RmliZXI6bnVsbH07aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pe3ZhciB5az1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoIXlrLmlzRGlzYWJsZWQmJnlrLnN1cHBvcnRzRmliZXIpdHJ5e0xmPXlrLmluamVjdCh4ayksTWY9eWt9Y2F0Y2goYSl7fX1leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPXZrO2V4cG9ydHMuY3JlYXRlUG9ydGFsPXVrO1xuZXhwb3J0cy5maW5kRE9NTm9kZT1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxzO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyBFcnJvcih5KDE4OCkpO3Rocm93IEVycm9yKHkoMjY4LE9iamVjdC5rZXlzKGEpKSk7fWE9Y2MoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfTtleHBvcnRzLmZsdXNoU3luYz1mdW5jdGlvbihhLGIpe3ZhciBjPVg7aWYoMCE9PShjJjQ4KSlyZXR1cm4gYShiKTtYfD0xO3RyeXtpZihhKXJldHVybiBnZyg5OSxhLmJpbmQobnVsbCxiKSl9ZmluYWxseXtYPWMsaWcoKX19O2V4cG9ydHMuaHlkcmF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIXJrKGIpKXRocm93IEVycm9yKHkoMjAwKSk7cmV0dXJuIHRrKG51bGwsYSxiLCEwLGMpfTtcbmV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITEsYyl9O2V4cG9ydHMudW5tb3VudENvbXBvbmVudEF0Tm9kZT1mdW5jdGlvbihhKXtpZighcmsoYSkpdGhyb3cgRXJyb3IoeSg0MCkpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KFhqKGZ1bmN0aW9uKCl7dGsobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbDthW2ZmXT1udWxsfSl9KSwhMCk6ITF9O2V4cG9ydHMudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM9V2o7ZXhwb3J0cy51bnN0YWJsZV9jcmVhdGVQb3J0YWw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdWsoYSxiLDI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsKX07XG5leHBvcnRzLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyPWZ1bmN0aW9uKGEsYixjLGQpe2lmKCFyayhjKSl0aHJvdyBFcnJvcih5KDIwMCkpO2lmKG51bGw9PWF8fHZvaWQgMD09PWEuX3JlYWN0SW50ZXJuYWxzKXRocm93IEVycm9yKHkoMzgpKTtyZXR1cm4gdGsoYSxiLGMsITEsZCl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjaGVja0RDRSgpIHtcbiAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuICBpZiAoXG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYnJhbmNoIGlzIHVucmVhY2hhYmxlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZFxuICAgIC8vIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgY29uZGl0aW9uIGlzIHRydWUgb25seSBpbiBkZXZlbG9wbWVudC5cbiAgICAvLyBUaGVyZWZvcmUgaWYgdGhlIGJyYW5jaCBpcyBzdGlsbCBoZXJlLCBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2Fzbid0XG4gICAgLy8gcHJvcGVybHkgYXBwbGllZC5cbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlIG1lc3NhZ2UuIFJlYWN0IERldlRvb2xzIHJlbGllcyBvbiBpdC4gQWxzbyBtYWtlIHN1cmVcbiAgICAvLyB0aGlzIG1lc3NhZ2UgZG9lc24ndCBvY2N1ciBlbHNld2hlcmUgaW4gdGhpcyBmdW5jdGlvbiwgb3IgaXQgd2lsbCBjYXVzZVxuICAgIC8vIGEgZmFsc2UgcG9zaXRpdmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdeX14nKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBjb2RlIGFib3ZlIGhhcyBiZWVuIGRlYWQgY29kZSBlbGltaW5hdGVkIChEQ0UnZCkuXG4gICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFKGNoZWNrRENFKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRGV2VG9vbHMgc2hvdWxkbid0IGNyYXNoIFJlYWN0LCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBXZSBzaG91bGQgc3RpbGwgcmVwb3J0IGluIGNhc2Ugd2UgYnJlYWsgdGhpcyBjb2RlLlxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBEQ0UgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgUmVhY3RET00gYnVuZGxlIGV4ZWN1dGVzIHNvIHRoYXRcbiAgLy8gRGV2VG9vbHMgY2FuIHJlcG9ydCBiYWQgbWluaWZpY2F0aW9uIGR1cmluZyBpbmplY3Rpb24uXG4gIGNoZWNrRENFKCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJzt2YXIgcixCPXJ8fChyPXt9KTtCLlBvcD1cIlBPUFwiO0IuUHVzaD1cIlBVU0hcIjtCLlJlcGxhY2U9XCJSRVBMQUNFXCI7dmFyIEM9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9mdW5jdGlvbihiKXtyZXR1cm4gT2JqZWN0LmZyZWV6ZShiKX06ZnVuY3Rpb24oYil7cmV0dXJuIGJ9O2Z1bmN0aW9uIEQoYixoKXtpZighYil7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiZjb25zb2xlLndhcm4oaCk7dHJ5e3Rocm93IEVycm9yKGgpO31jYXRjaChlKXt9fX1mdW5jdGlvbiBFKGIpe2IucHJldmVudERlZmF1bHQoKTtiLnJldHVyblZhbHVlPVwiXCJ9XG5mdW5jdGlvbiBGKCl7dmFyIGI9W107cmV0dXJue2dldCBsZW5ndGgoKXtyZXR1cm4gYi5sZW5ndGh9LHB1c2g6ZnVuY3Rpb24oaCl7Yi5wdXNoKGgpO3JldHVybiBmdW5jdGlvbigpe2I9Yi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1ofSl9fSxjYWxsOmZ1bmN0aW9uKGgpe2IuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZSYmZShoKX0pfX19ZnVuY3Rpb24gSCgpe3JldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiw4KX1mdW5jdGlvbiBJKGIpe3ZhciBoPWIucGF0aG5hbWU7aD12b2lkIDA9PT1oP1wiL1wiOmg7dmFyIGU9Yi5zZWFyY2g7ZT12b2lkIDA9PT1lP1wiXCI6ZTtiPWIuaGFzaDtiPXZvaWQgMD09PWI/XCJcIjpiO2UmJlwiP1wiIT09ZSYmKGgrPVwiP1wiPT09ZS5jaGFyQXQoMCk/ZTpcIj9cIitlKTtiJiZcIiNcIiE9PWImJihoKz1cIiNcIj09PWIuY2hhckF0KDApP2I6XCIjXCIrYik7cmV0dXJuIGh9XG5mdW5jdGlvbiBKKGIpe3ZhciBoPXt9O2lmKGIpe3ZhciBlPWIuaW5kZXhPZihcIiNcIik7MDw9ZSYmKGguaGFzaD1iLnN1YnN0cihlKSxiPWIuc3Vic3RyKDAsZSkpO2U9Yi5pbmRleE9mKFwiP1wiKTswPD1lJiYoaC5zZWFyY2g9Yi5zdWJzdHIoZSksYj1iLnN1YnN0cigwLGUpKTtiJiYoaC5wYXRobmFtZT1iKX1yZXR1cm4gaH1cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoKXt2YXIgYz1wLmxvY2F0aW9uLGE9bS5zdGF0ZXx8e307cmV0dXJuW2EuaWR4LEMoe3BhdGhuYW1lOmMucGF0aG5hbWUsc2VhcmNoOmMuc2VhcmNoLGhhc2g6Yy5oYXNoLHN0YXRlOmEudXNyfHxudWxsLGtleTphLmtleXx8XCJkZWZhdWx0XCJ9KV19ZnVuY3Rpb24gZShjKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGM/YzpJKGMpfWZ1bmN0aW9uIHgoYyxhKXt2b2lkIDA9PT1hJiYoYT1udWxsKTtyZXR1cm4gQyhfZXh0ZW5kcyh7cGF0aG5hbWU6cS5wYXRobmFtZSxoYXNoOlwiXCIsc2VhcmNoOlwiXCJ9LFwic3RyaW5nXCI9PT10eXBlb2YgYz9KKGMpOmMse3N0YXRlOmEsa2V5OkgoKX0pKX1mdW5jdGlvbiB6KGMpe3Q9YztjPWgoKTt2PWNbMF07cT1jWzFdO2QuY2FsbCh7YWN0aW9uOnQsbG9jYXRpb246cX0pfWZ1bmN0aW9uIEEoYyxhKXtmdW5jdGlvbiBmKCl7QShjLGEpfXZhciBsPXIuUHVzaCxrPXgoYyxcbmEpO2lmKCFnLmxlbmd0aHx8KGcuY2FsbCh7YWN0aW9uOmwsbG9jYXRpb246ayxyZXRyeTpmfSksITEpKXt2YXIgbj1be3VzcjprLnN0YXRlLGtleTprLmtleSxpZHg6disxfSxlKGspXTtrPW5bMF07bj1uWzFdO3RyeXttLnB1c2hTdGF0ZShrLFwiXCIsbil9Y2F0Y2goRyl7cC5sb2NhdGlvbi5hc3NpZ24obil9eihsKX19ZnVuY3Rpb24geShjLGEpe2Z1bmN0aW9uIGYoKXt5KGMsYSl9dmFyIGw9ci5SZXBsYWNlLGs9eChjLGEpO2cubGVuZ3RoJiYoZy5jYWxsKHthY3Rpb246bCxsb2NhdGlvbjprLHJldHJ5OmZ9KSwxKXx8KGs9W3t1c3I6ay5zdGF0ZSxrZXk6ay5rZXksaWR4OnZ9LGUoayldLG0ucmVwbGFjZVN0YXRlKGtbMF0sXCJcIixrWzFdKSx6KGwpKX1mdW5jdGlvbiB3KGMpe20uZ28oYyl9dm9pZCAwPT09YiYmKGI9e30pO2I9Yi53aW5kb3c7dmFyIHA9dm9pZCAwPT09Yj9kb2N1bWVudC5kZWZhdWx0VmlldzpiLG09cC5oaXN0b3J5LHU9bnVsbDtwLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLFxuZnVuY3Rpb24oKXtpZih1KWcuY2FsbCh1KSx1PW51bGw7ZWxzZXt2YXIgYz1yLlBvcCxhPWgoKSxmPWFbMF07YT1hWzFdO2lmKGcubGVuZ3RoKWlmKG51bGwhPWYpe3ZhciBsPXYtZjtsJiYodT17YWN0aW9uOmMsbG9jYXRpb246YSxyZXRyeTpmdW5jdGlvbigpe3coLTEqbCl9fSx3KGwpKX1lbHNlXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKCExLFwiWW91IGFyZSB0cnlpbmcgdG8gYmxvY2sgYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIHRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoZSBoaXN0b3J5IGxpYnJhcnkuIFRoZSBibG9jayB3aWxsIGZhaWwgc2lsZW50bHkgaW4gcHJvZHVjdGlvbiwgYnV0IGluIGdlbmVyYWwgeW91IHNob3VsZCBkbyBhbGwgbmF2aWdhdGlvbiB3aXRoIHRoZSBoaXN0b3J5IGxpYnJhcnkgKGluc3RlYWQgb2YgdXNpbmcgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGRpcmVjdGx5KSB0byBhdm9pZCB0aGlzIHNpdHVhdGlvbi5cIik6XG52b2lkIDA7ZWxzZSB6KGMpfX0pO3ZhciB0PXIuUG9wO2I9aCgpO3ZhciB2PWJbMF0scT1iWzFdLGQ9RigpLGc9RigpO251bGw9PXYmJih2PTAsbS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sbS5zdGF0ZSx7aWR4OnZ9KSxcIlwiKSk7cmV0dXJue2dldCBhY3Rpb24oKXtyZXR1cm4gdH0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIHF9LGNyZWF0ZUhyZWY6ZSxwdXNoOkEscmVwbGFjZTp5LGdvOncsYmFjazpmdW5jdGlvbigpe3coLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7dygxKX0sbGlzdGVuOmZ1bmN0aW9uKGMpe3JldHVybiBkLnB1c2goYyl9LGJsb2NrOmZ1bmN0aW9uKGMpe3ZhciBhPWcucHVzaChjKTsxPT09Zy5sZW5ndGgmJnAuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpO3JldHVybiBmdW5jdGlvbigpe2EoKTtnLmxlbmd0aHx8cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSl9fX19O1xuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoYil7ZnVuY3Rpb24gaCgpe3ZhciBhPUoobS5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSksZj1hLnBhdGhuYW1lLGw9YS5zZWFyY2g7YT1hLmhhc2g7dmFyIGs9dS5zdGF0ZXx8e307cmV0dXJuW2suaWR4LEMoe3BhdGhuYW1lOnZvaWQgMD09PWY/XCIvXCI6ZixzZWFyY2g6dm9pZCAwPT09bD9cIlwiOmwsaGFzaDp2b2lkIDA9PT1hP1wiXCI6YSxzdGF0ZTprLnVzcnx8bnVsbCxrZXk6ay5rZXl8fFwiZGVmYXVsdFwifSldfWZ1bmN0aW9uIGUoKXtpZih0KWMuY2FsbCh0KSx0PW51bGw7ZWxzZXt2YXIgYT1yLlBvcCxmPWgoKSxsPWZbMF07Zj1mWzFdO2lmKGMubGVuZ3RoKWlmKG51bGwhPWwpe3ZhciBrPXEtbDtrJiYodD17YWN0aW9uOmEsbG9jYXRpb246ZixyZXRyeTpmdW5jdGlvbigpe3AoLTEqayl9fSxwKGspKX1lbHNlXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKCExLFwiWW91IGFyZSB0cnlpbmcgdG8gYmxvY2sgYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIHRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoZSBoaXN0b3J5IGxpYnJhcnkuIFRoZSBibG9jayB3aWxsIGZhaWwgc2lsZW50bHkgaW4gcHJvZHVjdGlvbiwgYnV0IGluIGdlbmVyYWwgeW91IHNob3VsZCBkbyBhbGwgbmF2aWdhdGlvbiB3aXRoIHRoZSBoaXN0b3J5IGxpYnJhcnkgKGluc3RlYWQgb2YgdXNpbmcgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGRpcmVjdGx5KSB0byBhdm9pZCB0aGlzIHNpdHVhdGlvbi5cIik6XG52b2lkIDA7ZWxzZSBBKGEpfX1mdW5jdGlvbiB4KGEpe3ZhciBmPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpLGw9XCJcIjtmJiZmLmdldEF0dHJpYnV0ZShcImhyZWZcIikmJihmPW0ubG9jYXRpb24uaHJlZixsPWYuaW5kZXhPZihcIiNcIiksbD0tMT09PWw/ZjpmLnNsaWNlKDAsbCkpO3JldHVybiBsK1wiI1wiKyhcInN0cmluZ1wiPT09dHlwZW9mIGE/YTpJKGEpKX1mdW5jdGlvbiB6KGEsZil7dm9pZCAwPT09ZiYmKGY9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe3BhdGhuYW1lOmQucGF0aG5hbWUsaGFzaDpcIlwiLHNlYXJjaDpcIlwifSxcInN0cmluZ1wiPT09dHlwZW9mIGE/SihhKTphLHtzdGF0ZTpmLGtleTpIKCl9KSl9ZnVuY3Rpb24gQShhKXt2PWE7YT1oKCk7cT1hWzBdO2Q9YVsxXTtnLmNhbGwoe2FjdGlvbjp2LGxvY2F0aW9uOmR9KX1mdW5jdGlvbiB5KGEsZil7ZnVuY3Rpb24gbCgpe3koYSxmKX12YXIgaz1yLlB1c2gsbj16KGEsZik7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9cbkQoXCIvXCI9PT1uLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucHVzaChcIitKU09OLnN0cmluZ2lmeShhKStcIilcIik6dm9pZCAwO2lmKCFjLmxlbmd0aHx8KGMuY2FsbCh7YWN0aW9uOmssbG9jYXRpb246bixyZXRyeTpsfSksITEpKXt2YXIgRz1be3VzcjpuLnN0YXRlLGtleTpuLmtleSxpZHg6cSsxfSx4KG4pXTtuPUdbMF07Rz1HWzFdO3RyeXt1LnB1c2hTdGF0ZShuLFwiXCIsRyl9Y2F0Y2goSyl7bS5sb2NhdGlvbi5hc3NpZ24oRyl9QShrKX19ZnVuY3Rpb24gdyhhLGYpe2Z1bmN0aW9uIGwoKXt3KGEsZil9dmFyIGs9ci5SZXBsYWNlLG49eihhLGYpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PW4ucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGhhc2ggaGlzdG9yeS5yZXBsYWNlKFwiK0pTT04uc3RyaW5naWZ5KGEpK1xuXCIpXCIpOnZvaWQgMDtjLmxlbmd0aCYmKGMuY2FsbCh7YWN0aW9uOmssbG9jYXRpb246bixyZXRyeTpsfSksMSl8fChuPVt7dXNyOm4uc3RhdGUsa2V5Om4ua2V5LGlkeDpxfSx4KG4pXSx1LnJlcGxhY2VTdGF0ZShuWzBdLFwiXCIsblsxXSksQShrKSl9ZnVuY3Rpb24gcChhKXt1LmdvKGEpfXZvaWQgMD09PWImJihiPXt9KTtiPWIud2luZG93O3ZhciBtPXZvaWQgMD09PWI/ZG9jdW1lbnQuZGVmYXVsdFZpZXc6Yix1PW0uaGlzdG9yeSx0PW51bGw7bS5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixlKTttLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYT1oKClbMV07SShhKSE9PUkoZCkmJmUoKX0pO3ZhciB2PXIuUG9wO2I9aCgpO3ZhciBxPWJbMF0sZD1iWzFdLGc9RigpLGM9RigpO251bGw9PXEmJihxPTAsdS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sdS5zdGF0ZSx7aWR4OnF9KSxcIlwiKSk7cmV0dXJue2dldCBhY3Rpb24oKXtyZXR1cm4gdn0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIGR9LFxuY3JlYXRlSHJlZjp4LHB1c2g6eSxyZXBsYWNlOncsZ286cCxiYWNrOmZ1bmN0aW9uKCl7cCgtMSl9LGZvcndhcmQ6ZnVuY3Rpb24oKXtwKDEpfSxsaXN0ZW46ZnVuY3Rpb24oYSl7cmV0dXJuIGcucHVzaChhKX0sYmxvY2s6ZnVuY3Rpb24oYSl7dmFyIGY9Yy5wdXNoKGEpOzE9PT1jLmxlbmd0aCYmbS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSk7cmV0dXJuIGZ1bmN0aW9uKCl7ZigpO2MubGVuZ3RofHxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIixFKX19fX07XG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoZCxnKXt2b2lkIDA9PT1nJiYoZz1udWxsKTtyZXR1cm4gQyhfZXh0ZW5kcyh7cGF0aG5hbWU6dC5wYXRobmFtZSxzZWFyY2g6XCJcIixoYXNoOlwiXCJ9LFwic3RyaW5nXCI9PT10eXBlb2YgZD9KKGQpOmQse3N0YXRlOmcsa2V5OkgoKX0pKX1mdW5jdGlvbiBlKGQsZyxjKXtyZXR1cm4hcS5sZW5ndGh8fChxLmNhbGwoe2FjdGlvbjpkLGxvY2F0aW9uOmcscmV0cnk6Y30pLCExKX1mdW5jdGlvbiB4KGQsZyl7dT1kO3Q9Zzt2LmNhbGwoe2FjdGlvbjp1LGxvY2F0aW9uOnR9KX1mdW5jdGlvbiB6KGQsZyl7dmFyIGM9ci5QdXNoLGE9aChkLGcpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PXQucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5LnB1c2goXCIrSlNPTi5zdHJpbmdpZnkoZCkrXCIpXCIpOlxudm9pZCAwO2UoYyxhLGZ1bmN0aW9uKCl7eihkLGcpfSkmJihtKz0xLHAuc3BsaWNlKG0scC5sZW5ndGgsYSkseChjLGEpKX1mdW5jdGlvbiBBKGQsZyl7dmFyIGM9ci5SZXBsYWNlLGE9aChkLGcpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PXQucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5LnJlcGxhY2UoXCIrSlNPTi5zdHJpbmdpZnkoZCkrXCIpXCIpOnZvaWQgMDtlKGMsYSxmdW5jdGlvbigpe0EoZCxnKX0pJiYocFttXT1hLHgoYyxhKSl9ZnVuY3Rpb24geShkKXt2YXIgZz1NYXRoLm1pbihNYXRoLm1heChtK2QsMCkscC5sZW5ndGgtMSksYz1yLlBvcCxhPXBbZ107ZShjLGEsZnVuY3Rpb24oKXt5KGQpfSkmJihtPWcseChjLGEpKX12b2lkIDA9PT1iJiYoYj17fSk7dmFyIHc9YjtiPXcuaW5pdGlhbEVudHJpZXM7dz13LmluaXRpYWxJbmRleDt2YXIgcD0odm9pZCAwPT09XG5iP1tcIi9cIl06YikubWFwKGZ1bmN0aW9uKGQpe3ZhciBnPUMoX2V4dGVuZHMoe3BhdGhuYW1lOlwiL1wiLHNlYXJjaDpcIlwiLGhhc2g6XCJcIixzdGF0ZTpudWxsLGtleTpIKCl9LFwic3RyaW5nXCI9PT10eXBlb2YgZD9KKGQpOmQpKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT1nLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXMgfSkgKGludmFsaWQgZW50cnk6IFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTp2b2lkIDA7cmV0dXJuIGd9KSxtPU1hdGgubWluKE1hdGgubWF4KG51bGw9PXc/cC5sZW5ndGgtMTp3LDApLHAubGVuZ3RoLTEpLHU9ci5Qb3AsdD1wW21dLHY9RigpLHE9RigpO3JldHVybntnZXQgaW5kZXgoKXtyZXR1cm4gbX0sZ2V0IGFjdGlvbigpe3JldHVybiB1fSxnZXQgbG9jYXRpb24oKXtyZXR1cm4gdH0sY3JlYXRlSHJlZjpmdW5jdGlvbihkKXtyZXR1cm5cInN0cmluZ1wiPT09XG50eXBlb2YgZD9kOkkoZCl9LHB1c2g6eixyZXBsYWNlOkEsZ286eSxiYWNrOmZ1bmN0aW9uKCl7eSgtMSl9LGZvcndhcmQ6ZnVuY3Rpb24oKXt5KDEpfSxsaXN0ZW46ZnVuY3Rpb24oZCl7cmV0dXJuIHYucHVzaChkKX0sYmxvY2s6ZnVuY3Rpb24oZCl7cmV0dXJuIHEucHVzaChkKX19fTtleHBvcnR7ciBhcyBBY3Rpb24sY3JlYXRlQnJvd3Nlckhpc3RvcnksY3JlYXRlSGFzaEhpc3RvcnksY3JlYXRlTWVtb3J5SGlzdG9yeSxJIGFzIGNyZWF0ZVBhdGgsSiBhcyBwYXJzZVBhdGh9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjIuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIGNyZWF0ZUVsZW1lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlQ2FsbGJhY2ssIENoaWxkcmVuLCBpc1ZhbGlkRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5LCBBY3Rpb24sIHBhcnNlUGF0aCB9IGZyb20gJ2hpc3RvcnknO1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gd2FybmluZyhjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgUm91dGVyIVxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28geW91IGNhbiBtb3JlIGVhc2lseVxuICAgICAgLy8gZmluZCB0aGUgc291cmNlIGZvciBhIHdhcm5pbmcgdGhhdCBhcHBlYXJzIGluIHRoZSBjb25zb2xlIGJ5XG4gICAgICAvLyBlbmFibGluZyBcInBhdXNlIG9uIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIEphdmFTY3JpcHQgZGVidWdnZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuY29uc3QgYWxyZWFkeVdhcm5lZCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuaW5nT25jZShrZXksIGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kICYmICFhbHJlYWR5V2FybmVkW2tleV0pIHtcbiAgICBhbHJlYWR5V2FybmVkW2tleV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIG1lc3NhZ2UpIDogdm9pZCAwO1xuICB9XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTlRFWFRcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBBIE5hdmlnYXRvciBpcyBhIFwibG9jYXRpb24gY2hhbmdlclwiOyBpdCdzIGhvdyB5b3UgZ2V0IHRvIGRpZmZlcmVudCBsb2NhdGlvbnMuXG4gKlxuICogRXZlcnkgaGlzdG9yeSBpbnN0YW5jZSBjb25mb3JtcyB0byB0aGUgTmF2aWdhdG9yIGludGVyZmFjZSwgYnV0IHRoZVxuICogZGlzdGluY3Rpb24gaXMgdXNlZnVsIHByaW1hcmlseSB3aGVuIGl0IGNvbWVzIHRvIHRoZSBsb3ctbGV2ZWwgPFJvdXRlcj4gQVBJXG4gKiB3aGVyZSBib3RoIHRoZSBsb2NhdGlvbiBhbmQgYSBuYXZpZ2F0b3IgbXVzdCBiZSBwcm92aWRlZCBzZXBhcmF0ZWx5IGluIG9yZGVyXG4gKiB0byBhdm9pZCBcInRlYXJpbmdcIiB0aGF0IG1heSBvY2N1ciBpbiBhIHN1c3BlbnNlLWVuYWJsZWQgYXBwIGlmIHRoZSBhY3Rpb25cbiAqIGFuZC9vciBsb2NhdGlvbiB3ZXJlIHRvIGJlIHJlYWQgZGlyZWN0bHkgZnJvbSB0aGUgaGlzdG9yeSBpbnN0YW5jZS5cbiAqL1xuXG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2aWdhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk5hdmlnYXRpb25cIjtcbn1cblxuY29uc3QgTG9jYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xufVxuXG5jb25zdCBSb3V0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7XG4gIG91dGxldDogbnVsbCxcbiAgbWF0Y2hlczogW11cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVcIjtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8qKlxuICogQSA8Um91dGVyPiB0aGF0IHN0b3JlcyBhbGwgZW50cmllcyBpbiBtZW1vcnkuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNtZW1vcnlyb3V0ZXJcbiAqL1xuZnVuY3Rpb24gTWVtb3J5Um91dGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXhcbiAgfSA9IF9yZWY7XG4gIGxldCBoaXN0b3J5UmVmID0gdXNlUmVmKCk7XG5cbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBOb3RlOiBUaGlzIEFQSSBpcyBtb3N0bHkgdXNlZnVsIGluIFJlYWN0LkNvbXBvbmVudCBzdWJjbGFzc2VzIHRoYXQgYXJlIG5vdFxuICogYWJsZSB0byB1c2UgaG9va3MuIEluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgdGhlXG4gKiBgdXNlTmF2aWdhdGVgIGhvb2sgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI25hdmlnYXRlXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRlKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgdG8sXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZVxuICB9ID0gX3JlZjI7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgLy8gdGhlIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCI8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCkuc3RhdGljLCBcIjxOYXZpZ2F0ZT4gbXVzdCBub3QgYmUgdXNlZCBvbiB0aGUgaW5pdGlhbCByZW5kZXIgaW4gYSA8U3RhdGljUm91dGVyPi4gXCIgKyBcIlRoaXMgaXMgYSBuby1vcCwgYnV0IHlvdSBzaG91bGQgbW9kaWZ5IHlvdXIgY29kZSBzbyB0aGUgPE5hdmlnYXRlPiBpcyBcIiArIFwib25seSBldmVyIHJlbmRlcmVkIGluIHJlc3BvbnNlIHRvIHNvbWUgdXNlciBpbnRlcmFjdGlvbiBvciBzdGF0ZSBjaGFuZ2UuXCIpIDogdm9pZCAwO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICByZXBsYWNlLFxuICAgICAgc3RhdGVcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNoaWxkIHJvdXRlJ3MgZWxlbWVudCwgaWYgdGhlcmUgaXMgb25lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYXQgYSBjZXJ0YWluIFVSTCBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcm91dGVcbiAqL1xuZnVuY3Rpb24gUm91dGUoX3Byb3BzKSB7XG4gICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiQSA8Um91dGU+IGlzIG9ubHkgZXZlciB0byBiZSB1c2VkIGFzIHRoZSBjaGlsZCBvZiA8Um91dGVzPiBlbGVtZW50LCBcIiArIFwibmV2ZXIgcmVuZGVyZWQgZGlyZWN0bHkuIFBsZWFzZSB3cmFwIHlvdXIgPFJvdXRlPiBpbiBhIDxSb3V0ZXM+LlwiKSA6IGludmFyaWFudChmYWxzZSkgO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGxvY2F0aW9uIGNvbnRleHQgZm9yIHRoZSByZXN0IG9mIHRoZSBhcHAuXG4gKlxuICogTm90ZTogWW91IHVzdWFsbHkgd29uJ3QgcmVuZGVyIGEgPFJvdXRlcj4gZGlyZWN0bHkuIEluc3RlYWQsIHlvdSdsbCByZW5kZXIgYVxuICogcm91dGVyIHRoYXQgaXMgbW9yZSBzcGVjaWZpYyB0byB5b3VyIGVudmlyb25tZW50IHN1Y2ggYXMgYSA8QnJvd3NlclJvdXRlcj5cbiAqIGluIHdlYiBicm93c2VycyBvciBhIDxTdGF0aWNSb3V0ZXI+IGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcm91dGVyXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcihfcmVmMykge1xuICBsZXQge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgICBjaGlsZHJlbiA9IG51bGwsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uUHJvcCxcbiAgICBuYXZpZ2F0aW9uVHlwZSA9IEFjdGlvbi5Qb3AsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlXG4gIH0gPSBfcmVmMztcbiAgISF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgY2Fubm90IHJlbmRlciBhIDxSb3V0ZXI+IGluc2lkZSBhbm90aGVyIDxSb3V0ZXI+LlwiICsgXCIgWW91IHNob3VsZCBuZXZlciBoYXZlIG1vcmUgdGhhbiBvbmUgaW4geW91ciBhcHAuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IGJhc2VuYW1lID0gbm9ybWFsaXplUGF0aG5hbWUoYmFzZW5hbWVQcm9wKTtcbiAgbGV0IG5hdmlnYXRpb25Db250ZXh0ID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3BcbiAgfSksIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCBzdGF0aWNQcm9wXSk7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsb2NhdGlvblByb3AgPSBwYXJzZVBhdGgobG9jYXRpb25Qcm9wKTtcbiAgfVxuXG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiLFxuICAgIHN0YXRlID0gbnVsbCxcbiAgICBrZXkgPSBcImRlZmF1bHRcIlxuICB9ID0gbG9jYXRpb25Qcm9wO1xuICBsZXQgbG9jYXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJhaWxpbmdQYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKTtcblxuICAgIGlmICh0cmFpbGluZ1BhdGhuYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2gsXG4gICAgICBzdGF0ZSxcbiAgICAgIGtleVxuICAgIH07XG4gIH0sIFtiYXNlbmFtZSwgcGF0aG5hbWUsIHNlYXJjaCwgaGFzaCwgc3RhdGUsIGtleV0pO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGxvY2F0aW9uICE9IG51bGwsIFwiPFJvdXRlciBiYXNlbmFtZT1cXFwiXCIgKyBiYXNlbmFtZSArIFwiXFxcIj4gaXMgbm90IGFibGUgdG8gbWF0Y2ggdGhlIFVSTCBcIiArIChcIlxcXCJcIiArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCArIFwiXFxcIiBiZWNhdXNlIGl0IGRvZXMgbm90IHN0YXJ0IHdpdGggdGhlIFwiKSArIFwiYmFzZW5hbWUsIHNvIHRoZSA8Um91dGVyPiB3b24ndCByZW5kZXIgYW55dGhpbmcuXCIpIDogdm9pZCAwO1xuXG4gIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbmF2aWdhdGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHZhbHVlOiB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIG5hdmlnYXRpb25UeXBlXG4gICAgfVxuICB9KSk7XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgbmVzdGVkIHRyZWUgb2YgPFJvdXRlPiBlbGVtZW50cyB0aGF0IHJlbmRlcnMgdGhlIGJyYW5jaFxuICogdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNyb3V0ZXNcbiAqL1xuZnVuY3Rpb24gUm91dGVzKF9yZWY0KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgbG9jYXRpb25cbiAgfSA9IF9yZWY0O1xuICByZXR1cm4gdXNlUm91dGVzKGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiksIGxvY2F0aW9uKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSE9PS1Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmdWxsIGhyZWYgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUuIFRoaXMgaXMgdXNlZnVsIGZvciBidWlsZGluZ1xuICogY3VzdG9tIGxpbmtzIHRoYXQgYXJlIGFsc28gYWNjZXNzaWJsZSBhbmQgcHJlc2VydmUgcmlnaHQtY2xpY2sgYmVoYXZpb3IuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VocmVmXG4gKi9cblxuZnVuY3Rpb24gdXNlSHJlZih0bykge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlSHJlZigpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IHVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIGhhc2gsXG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoXG4gIH0gPSB1c2VSZXNvbHZlZFBhdGgodG8pO1xuICBsZXQgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZTtcblxuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgbGV0IHRvUGF0aG5hbWUgPSBnZXRUb1BhdGhuYW1lKHRvKTtcbiAgICBsZXQgZW5kc1dpdGhTbGFzaCA9IHRvUGF0aG5hbWUgIT0gbnVsbCAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcbiAgICBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lICsgKGVuZHNXaXRoU2xhc2ggPyBcIi9cIiA6IFwiXCIpIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aG5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IuY3JlYXRlSHJlZih7XG4gICAgcGF0aG5hbWU6IGpvaW5lZFBhdGhuYW1lLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlcj4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VpbnJvdXRlcmNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VJblJvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkgIT0gbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2Vsb2NhdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUxvY2F0aW9uKCkge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiB1c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubG9jYXRpb247XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIGFjdGlvbiB3aGljaCBkZXNjcmliZXMgaG93IHRoZSByb3V0ZXIgY2FtZSB0b1xuICogdGhlIGN1cnJlbnQgbG9jYXRpb24sIGVpdGhlciBieSBhIHBvcCwgcHVzaCwgb3IgcmVwbGFjZSBvbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZW5hdmlnYXRpb250eXBlXG4gKi9cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIFVSTCBmb3IgdGhlIGdpdmVuIFwidG9cIiB2YWx1ZSBtYXRjaGVzIHRoZSBjdXJyZW50IFVSTC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IFwiYWN0aXZlXCIgc3RhdGUsIGUuZy5cbiAqIDxOYXZMaW5rPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZW1hdGNoXG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2gocGF0dGVybikge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTWF0Y2goKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgcGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgbmF2aWdhdGUoKSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHVzZU5hdmlnYXRlKCkuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgPExpbms+cywgYnV0XG4gKiBtYXkgYWxzbyBiZSB1c2VkIGJ5IG90aGVyIGVsZW1lbnRzIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VuYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZSgpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU5hdmlnYXRlKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gdXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkobWF0Y2hlcy5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSk7XG4gIGxldCBhY3RpdmVSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGl2ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0bywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIikgOiB2b2lkIDA7XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbmF2aWdhdG9yLmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lKTtcblxuICAgIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICAgIHBhdGgucGF0aG5hbWUgPSBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgfVxuXG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWVdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VvdXRsZXRjb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlT3V0bGV0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoT3V0bGV0Q29udGV4dCk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LiBVc2VkIGludGVybmFsbHkgYnkgPE91dGxldD4gdG8gcmVuZGVyIGNoaWxkIHJvdXRlcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZW91dGxldFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuXG4gIGlmIChvdXRsZXQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoT3V0bGV0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBvdXRsZXQpO1xuICB9XG5cbiAgcmV0dXJuIG91dGxldDtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIG9mIHRoZSBkeW5hbWljIHBhcmFtcyBmcm9tIHRoZSBjdXJyZW50XG4gKiBVUkwgdGhhdCB3ZXJlIG1hdGNoZWQgYnkgdGhlIHJvdXRlIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VwYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xufVxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGF0aG5hbWUgb2YgdGhlIGdpdmVuIGB0b2AgdmFsdWUgYWdhaW5zdCB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZXJlc29sdmVkcGF0aFxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bykge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KG1hdGNoZXMubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSksIFt0bywgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgb2YgdGhlIHJvdXRlIHRoYXQgbWF0Y2hlZCB0aGUgY3VycmVudCBsb2NhdGlvbiwgcHJlcGFyZWRcbiAqIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dCB0byByZW5kZXIgdGhlIHJlbWFpbmRlciBvZiB0aGUgcm91dGUgdHJlZS4gUm91dGVcbiAqIGVsZW1lbnRzIGluIHRoZSB0cmVlIG11c3QgcmVuZGVyIGFuIDxPdXRsZXQ+IHRvIHJlbmRlciB0aGVpciBjaGlsZCByb3V0ZSdzXG4gKiBlbGVtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlcm91dGVzXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBtYXRjaGVzOiBwYXJlbnRNYXRjaGVzXG4gIH0gPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCByb3V0ZU1hdGNoID0gcGFyZW50TWF0Y2hlc1twYXJlbnRNYXRjaGVzLmxlbmd0aCAtIDFdO1xuICBsZXQgcGFyZW50UGFyYW1zID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGFyYW1zIDoge307XG4gIGxldCBwYXJlbnRQYXRobmFtZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lIDogXCIvXCI7XG4gIGxldCBwYXJlbnRQYXRobmFtZUJhc2UgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZUJhc2UgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFJvdXRlID0gcm91dGVNYXRjaCAmJiByb3V0ZU1hdGNoLnJvdXRlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBZb3Ugd29uJ3QgZ2V0IGEgd2FybmluZyBhYm91dCAyIGRpZmZlcmVudCA8Um91dGVzPiB1bmRlciBhIDxSb3V0ZT5cbiAgICAvLyB3aXRob3V0IGEgdHJhaWxpbmcgKiwgYnV0IHRoaXMgaXMgYSBiZXN0LWVmZm9ydCB3YXJuaW5nIGFueXdheSBzaW5jZSB3ZVxuICAgIC8vIGNhbm5vdCBldmVuIGdpdmUgdGhlIHdhcm5pbmcgdW5sZXNzIHRoZXkgbGFuZCBhdCB0aGUgcGFyZW50IHJvdXRlLlxuICAgIC8vXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvL1xuICAgIC8vIDxSb3V0ZXM+XG4gICAgLy8gICB7LyogVGhpcyByb3V0ZSBwYXRoIE1VU1QgZW5kIHdpdGggLyogYmVjYXVzZSBvdGhlcndpc2VcbiAgICAvLyAgICAgICBpdCB3aWxsIG5ldmVyIG1hdGNoIC9ibG9nL3Bvc3QvMTIzICovfVxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nXCIgZWxlbWVudD17PEJsb2cgLz59IC8+XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2cvZmVlZFwiIGVsZW1lbnQ9ezxCbG9nRmVlZCAvPn0gLz5cbiAgICAvLyA8L1JvdXRlcz5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIEJsb2coKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Um91dGVzPlxuICAgIC8vICAgICAgIDxSb3V0ZSBwYXRoPVwicG9zdC86aWRcIiBlbGVtZW50PXs8UG9zdCAvPn0gLz5cbiAgICAvLyAgICAgPC9Sb3V0ZXM+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgICBsZXQgcGFyZW50UGF0aCA9IHBhcmVudFJvdXRlICYmIHBhcmVudFJvdXRlLnBhdGggfHwgXCJcIjtcbiAgICB3YXJuaW5nT25jZShwYXJlbnRQYXRobmFtZSwgIXBhcmVudFJvdXRlIHx8IHBhcmVudFBhdGguZW5kc1dpdGgoXCIqXCIpLCBcIllvdSByZW5kZXJlZCBkZXNjZW5kYW50IDxSb3V0ZXM+IChvciBjYWxsZWQgYHVzZVJvdXRlcygpYCkgYXQgXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRobmFtZSArIFwiXFxcIiAodW5kZXIgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4pIGJ1dCB0aGUgXCIpICsgXCJwYXJlbnQgcm91dGUgcGF0aCBoYXMgbm8gdHJhaWxpbmcgXFxcIipcXFwiLiBUaGlzIG1lYW5zIGlmIHlvdSBuYXZpZ2F0ZSBcIiArIFwiZGVlcGVyLCB0aGUgcGFyZW50IHdvbid0IG1hdGNoIGFueW1vcmUgYW5kIHRoZXJlZm9yZSB0aGUgY2hpbGQgXCIgKyBcInJvdXRlcyB3aWxsIG5ldmVyIHJlbmRlci5cXG5cXG5cIiArIChcIlBsZWFzZSBjaGFuZ2UgdGhlIHBhcmVudCA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPiB0byA8Um91dGUgXCIpICsgKFwicGF0aD1cXFwiXCIgKyAocGFyZW50UGF0aCA9PT0gXCIvXCIgPyBcIipcIiA6IHBhcmVudFBhdGggKyBcIi8qXCIpICsgXCJcXFwiPi5cIikpO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uRnJvbUNvbnRleHQgPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbG9jYXRpb247XG5cbiAgaWYgKGxvY2F0aW9uQXJnKSB7XG4gICAgdmFyIF9wYXJzZWRMb2NhdGlvbkFyZyRwYTtcblxuICAgIGxldCBwYXJzZWRMb2NhdGlvbkFyZyA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgICAhKHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgfHwgKChfcGFyc2VkTG9jYXRpb25BcmckcGEgPSBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wYXJzZWRMb2NhdGlvbkFyZyRwYS5zdGFydHNXaXRoKHBhcmVudFBhdGhuYW1lQmFzZSkpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJXaGVuIG92ZXJyaWRpbmcgdGhlIGxvY2F0aW9uIHVzaW5nIGA8Um91dGVzIGxvY2F0aW9uPmAgb3IgYHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKWAsIFwiICsgXCJ0aGUgbG9jYXRpb24gcGF0aG5hbWUgbXVzdCBiZWdpbiB3aXRoIHRoZSBwb3J0aW9uIG9mIHRoZSBVUkwgcGF0aG5hbWUgdGhhdCB3YXMgXCIgKyAoXCJtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFxcXCJcIiArIHBhcmVudFBhdGhuYW1lQmFzZSArIFwiXFxcIiBcIikgKyAoXCJidXQgcGF0aG5hbWUgXFxcIlwiICsgcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUgKyBcIlxcXCIgd2FzIGdpdmVuIGluIHRoZSBgbG9jYXRpb25gIHByb3AuXCIpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbG9jYXRpb24gPSBwYXJzZWRMb2NhdGlvbkFyZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbUNvbnRleHQ7XG4gIH1cblxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UocGFyZW50UGF0aG5hbWVCYXNlLmxlbmd0aCkgfHwgXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB7XG4gICAgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHBhcmVudFJvdXRlIHx8IG1hdGNoZXMgIT0gbnVsbCwgXCJObyByb3V0ZXMgbWF0Y2hlZCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQsIFwiTWF0Y2hlZCBsZWFmIHJvdXRlIGF0IGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBkb2VzIG5vdCBoYXZlIGFuIGVsZW1lbnQuIFwiICsgXCJUaGlzIG1lYW5zIGl0IHdpbGwgcmVuZGVyIGFuIDxPdXRsZXQgLz4gd2l0aCBhIG51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzICYmIG1hdGNoZXMubWFwKG1hdGNoID0+IE9iamVjdC5hc3NpZ24oe30sIG1hdGNoLCB7XG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMsIG1hdGNoLnBhcmFtcyksXG4gICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICB9KSksIHBhcmVudE1hdGNoZXMpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVVElMU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZSBjb25maWcgZnJvbSBhIFJlYWN0IFwiY2hpbGRyZW5cIiBvYmplY3QsIHdoaWNoIGlzIHVzdWFsbHlcbiAqIGVpdGhlciBhIGA8Um91dGU+YCBlbGVtZW50IG9yIGFuIGFycmF5IG9mIHRoZW0uIFVzZWQgaW50ZXJuYWxseSBieVxuICogYDxSb3V0ZXM+YCB0byBjcmVhdGUgYSByb3V0ZSBjb25maWcgZnJvbSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNjcmVhdGVyb3V0ZXNmcm9tY2hpbGRyZW5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgbGV0IHJvdXRlcyA9IFtdO1xuICBDaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBlbGVtZW50ID0+IHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIElnbm9yZSBub24tZWxlbWVudHMuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBtb3JlIGVhc2lseSBpbmxpbmVcbiAgICAgIC8vIGNvbmRpdGlvbmFscyBpbiB0aGVpciByb3V0ZSBjb25maWcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICEoZWxlbWVudC50eXBlID09PSBSb3V0ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiW1wiICsgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZSkgKyBcIl0gaXMgbm90IGEgPFJvdXRlPiBjb21wb25lbnQuIEFsbCBjb21wb25lbnQgY2hpbGRyZW4gb2YgPFJvdXRlcz4gbXVzdCBiZSBhIDxSb3V0ZT4gb3IgPFJlYWN0LkZyYWdtZW50PlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbGV0IHJvdXRlID0ge1xuICAgICAgY2FzZVNlbnNpdGl2ZTogZWxlbWVudC5wcm9wcy5jYXNlU2Vuc2l0aXZlLFxuICAgICAgZWxlbWVudDogZWxlbWVudC5wcm9wcy5lbGVtZW50LFxuICAgICAgaW5kZXg6IGVsZW1lbnQucHJvcHMuaW5kZXgsXG4gICAgICBwYXRoOiBlbGVtZW50LnByb3BzLnBhdGhcbiAgICB9O1xuXG4gICAgaWYgKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXM7XG59XG4vKipcbiAqIFRoZSBwYXJhbWV0ZXJzIHRoYXQgd2VyZSBwYXJzZWQgZnJvbSB0aGUgVVJMIHBhdGguXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNnZW5lcmF0ZXBhdGhcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKHBhdGgsIHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBwYXRoLnJlcGxhY2UoLzooXFx3KykvZywgKF8sIGtleSkgPT4ge1xuICAgICEocGFyYW1zW2tleV0gIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiTWlzc2luZyBcXFwiOlwiICsga2V5ICsgXCJcXFwiIHBhcmFtXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gcGFyYW1zW2tleV07XG4gIH0pLnJlcGxhY2UoL1xcLypcXCokLywgXyA9PiBwYXJhbXNbXCIqXCJdID09IG51bGwgPyBcIlwiIDogcGFyYW1zW1wiKlwiXS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKSk7XG59XG4vKipcbiAqIEEgUm91dGVNYXRjaCBjb250YWlucyBpbmZvIGFib3V0IGhvdyBhIHJvdXRlIG1hdGNoZWQgYSBVUkwuXG4gKi9cblxuLyoqXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiByb3V0ZXMgdG8gYSBsb2NhdGlvbiBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI21hdGNocm91dGVzXG4gKi9cbmZ1bmN0aW9uIG1hdGNoUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcsIGJhc2VuYW1lKSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZW5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbiA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgbGV0IHBhdGhuYW1lID0gc3RyaXBCYXNlbmFtZShsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIiwgYmFzZW5hbWUpO1xuXG4gIGlmIChwYXRobmFtZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgYnJhbmNoZXMgPSBmbGF0dGVuUm91dGVzKHJvdXRlcyk7XG4gIHJhbmtSb3V0ZUJyYW5jaGVzKGJyYW5jaGVzKTtcbiAgbGV0IG1hdGNoZXMgPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwOyBtYXRjaGVzID09IG51bGwgJiYgaSA8IGJyYW5jaGVzLmxlbmd0aDsgKytpKSB7XG4gICAgbWF0Y2hlcyA9IG1hdGNoUm91dGVCcmFuY2goYnJhbmNoZXNbaV0sIHBhdGhuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuUm91dGVzKHJvdXRlcywgYnJhbmNoZXMsIHBhcmVudHNNZXRhLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChicmFuY2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgYnJhbmNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRzTWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50c01ldGEgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gXCJcIjtcbiAgfVxuXG4gIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICBsZXQgbWV0YSA9IHtcbiAgICAgIHJlbGF0aXZlUGF0aDogcm91dGUucGF0aCB8fCBcIlwiLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogcm91dGUuY2FzZVNlbnNpdGl2ZSA9PT0gdHJ1ZSxcbiAgICAgIGNoaWxkcmVuSW5kZXg6IGluZGV4LFxuICAgICAgcm91dGVcbiAgICB9O1xuXG4gICAgaWYgKG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAhbWV0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChwYXJlbnRQYXRoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJBYnNvbHV0ZSByb3V0ZSBwYXRoIFxcXCJcIiArIG1ldGEucmVsYXRpdmVQYXRoICsgXCJcXFwiIG5lc3RlZCB1bmRlciBwYXRoIFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIiBpcyBub3QgdmFsaWQuIEFuIGFic29sdXRlIGNoaWxkIHJvdXRlIHBhdGggXCIpICsgXCJtdXN0IHN0YXJ0IHdpdGggdGhlIGNvbWJpbmVkIHBhdGggb2YgYWxsIGl0cyBwYXJlbnQgcm91dGVzLlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBtZXRhLnJlbGF0aXZlUGF0aCA9IG1ldGEucmVsYXRpdmVQYXRoLnNsaWNlKHBhcmVudFBhdGgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGpvaW5QYXRocyhbcGFyZW50UGF0aCwgbWV0YS5yZWxhdGl2ZVBhdGhdKTtcbiAgICBsZXQgcm91dGVzTWV0YSA9IHBhcmVudHNNZXRhLmNvbmNhdChtZXRhKTsgLy8gQWRkIHRoZSBjaGlsZHJlbiBiZWZvcmUgYWRkaW5nIHRoaXMgcm91dGUgdG8gdGhlIGFycmF5IHNvIHdlIHRyYXZlcnNlIHRoZVxuICAgIC8vIHJvdXRlIHRyZWUgZGVwdGgtZmlyc3QgYW5kIGNoaWxkIHJvdXRlcyBhcHBlYXIgYmVmb3JlIHRoZWlyIHBhcmVudHMgaW5cbiAgICAvLyB0aGUgXCJmbGF0dGVuZWRcIiB2ZXJzaW9uLlxuXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICEocm91dGUuaW5kZXggIT09IHRydWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkluZGV4IHJvdXRlcyBtdXN0IG5vdCBoYXZlIGNoaWxkIHJvdXRlcy4gUGxlYXNlIHJlbW92ZSBcIiArIChcImFsbCBjaGlsZCByb3V0ZXMgZnJvbSByb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIuXCIpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBmbGF0dGVuUm91dGVzKHJvdXRlLmNoaWxkcmVuLCBicmFuY2hlcywgcm91dGVzTWV0YSwgcGF0aCk7XG4gICAgfSAvLyBSb3V0ZXMgd2l0aG91dCBhIHBhdGggc2hvdWxkbid0IGV2ZXIgbWF0Y2ggYnkgdGhlbXNlbHZlcyB1bmxlc3MgdGhleSBhcmVcbiAgICAvLyBpbmRleCByb3V0ZXMsIHNvIGRvbid0IGFkZCB0aGVtIHRvIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGJyYW5jaGVzLlxuXG5cbiAgICBpZiAocm91dGUucGF0aCA9PSBudWxsICYmICFyb3V0ZS5pbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJyYW5jaGVzLnB1c2goe1xuICAgICAgcGF0aCxcbiAgICAgIHNjb3JlOiBjb21wdXRlU2NvcmUocGF0aCwgcm91dGUuaW5kZXgpLFxuICAgICAgcm91dGVzTWV0YVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGJyYW5jaGVzO1xufVxuXG5mdW5jdGlvbiByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcykge1xuICBicmFuY2hlcy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlICE9PSBiLnNjb3JlID8gYi5zY29yZSAtIGEuc2NvcmUgLy8gSGlnaGVyIHNjb3JlIGZpcnN0XG4gIDogY29tcGFyZUluZGV4ZXMoYS5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCksIGIucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpKSk7XG59XG5cbmNvbnN0IHBhcmFtUmUgPSAvXjpcXHcrJC87XG5jb25zdCBkeW5hbWljU2VnbWVudFZhbHVlID0gMztcbmNvbnN0IGluZGV4Um91dGVWYWx1ZSA9IDI7XG5jb25zdCBlbXB0eVNlZ21lbnRWYWx1ZSA9IDE7XG5jb25zdCBzdGF0aWNTZWdtZW50VmFsdWUgPSAxMDtcbmNvbnN0IHNwbGF0UGVuYWx0eSA9IC0yO1xuXG5jb25zdCBpc1NwbGF0ID0gcyA9PiBzID09PSBcIipcIjtcblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKHBhdGgsIGluZGV4KSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBsZXQgaW5pdGlhbFNjb3JlID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gIGlmIChzZWdtZW50cy5zb21lKGlzU3BsYXQpKSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IHNwbGF0UGVuYWx0eTtcbiAgfVxuXG4gIGlmIChpbmRleCkge1xuICAgIGluaXRpYWxTY29yZSArPSBpbmRleFJvdXRlVmFsdWU7XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHMuZmlsdGVyKHMgPT4gIWlzU3BsYXQocykpLnJlZHVjZSgoc2NvcmUsIHNlZ21lbnQpID0+IHNjb3JlICsgKHBhcmFtUmUudGVzdChzZWdtZW50KSA/IGR5bmFtaWNTZWdtZW50VmFsdWUgOiBzZWdtZW50ID09PSBcIlwiID8gZW1wdHlTZWdtZW50VmFsdWUgOiBzdGF0aWNTZWdtZW50VmFsdWUpLCBpbml0aWFsU2NvcmUpO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlSW5kZXhlcyhhLCBiKSB7XG4gIGxldCBzaWJsaW5ncyA9IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLnNsaWNlKDAsIC0xKS5ldmVyeSgobiwgaSkgPT4gbiA9PT0gYltpXSk7XG4gIHJldHVybiBzaWJsaW5ncyA/IC8vIElmIHR3byByb3V0ZXMgYXJlIHNpYmxpbmdzLCB3ZSBzaG91bGQgdHJ5IHRvIG1hdGNoIHRoZSBlYXJsaWVyIHNpYmxpbmdcbiAgLy8gZmlyc3QuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBoYXZlIGZpbmUtZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIG1hdGNoaW5nXG4gIC8vIGJlaGF2aW9yIGJ5IHNpbXBseSBwdXR0aW5nIHJvdXRlcyB3aXRoIGlkZW50aWNhbCBwYXRocyBpbiB0aGUgb3JkZXIgdGhleVxuICAvLyB3YW50IHRoZW0gdHJpZWQuXG4gIGFbYS5sZW5ndGggLSAxXSAtIGJbYi5sZW5ndGggLSAxXSA6IC8vIE90aGVyd2lzZSwgaXQgZG9lc24ndCByZWFsbHkgbWFrZSBzZW5zZSB0byByYW5rIG5vbi1zaWJsaW5ncyBieSBpbmRleCxcbiAgLy8gc28gdGhleSBzb3J0IGVxdWFsbHkuXG4gIDA7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGVCcmFuY2goYnJhbmNoLCBwYXRobmFtZSkge1xuICBsZXQge1xuICAgIHJvdXRlc01ldGFcbiAgfSA9IGJyYW5jaDtcbiAgbGV0IG1hdGNoZWRQYXJhbXMgPSB7fTtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzTWV0YS5sZW5ndGg7ICsraSkge1xuICAgIGxldCBtZXRhID0gcm91dGVzTWV0YVtpXTtcbiAgICBsZXQgZW5kID0gaSA9PT0gcm91dGVzTWV0YS5sZW5ndGggLSAxO1xuICAgIGxldCByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWRQYXRobmFtZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKG1hdGNoZWRQYXRobmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoUGF0aCh7XG4gICAgICBwYXRoOiBtZXRhLnJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IG1ldGEuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVuZFxuICAgIH0sIHJlbWFpbmluZ1BhdGhuYW1lKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgICBPYmplY3QuYXNzaWduKG1hdGNoZWRQYXJhbXMsIG1hdGNoLnBhcmFtcyk7XG4gICAgbGV0IHJvdXRlID0gbWV0YS5yb3V0ZTtcbiAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgcGFyYW1zOiBtYXRjaGVkUGFyYW1zLFxuICAgICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZV0pLFxuICAgICAgcGF0aG5hbWVCYXNlOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSksXG4gICAgICByb3V0ZVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IG9mIGBtYXRjaFJvdXRlcygpYCBpbnRvIGEgUmVhY3QgZWxlbWVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbmRlck1hdGNoZXMobWF0Y2hlcykge1xuICByZXR1cm4gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyk7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMsIHBhcmVudE1hdGNoZXMpIHtcbiAgaWYgKHBhcmVudE1hdGNoZXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzID09IG51bGwpIHJldHVybiBudWxsO1xuICByZXR1cm4gbWF0Y2hlcy5yZWR1Y2VSaWdodCgob3V0bGV0LCBtYXRjaCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICBjaGlsZHJlbjogbWF0Y2gucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkID8gbWF0Y2gucm91dGUuZWxlbWVudCA6IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE91dGxldCwgbnVsbCksXG4gICAgICB2YWx1ZToge1xuICAgICAgICBvdXRsZXQsXG4gICAgICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXMuY29uY2F0KG1hdGNoZXMuc2xpY2UoMCwgaW5kZXggKyAxKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEEgUGF0aFBhdHRlcm4gaXMgdXNlZCB0byBtYXRjaCBvbiBzb21lIHBvcnRpb24gb2YgYSBVUkwgcGF0aG5hbWUuXG4gKi9cblxuXG4vKipcbiAqIFBlcmZvcm1zIHBhdHRlcm4gbWF0Y2hpbmcgb24gYSBVUkwgcGF0aG5hbWUgYW5kIHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXRcbiAqIHRoZSBtYXRjaC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI21hdGNocGF0aFxuICovXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XG4gICAgcGF0dGVybiA9IHtcbiAgICAgIHBhdGg6IHBhdHRlcm4sXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIGVuZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBsZXQgW21hdGNoZXIsIHBhcmFtTmFtZXNdID0gY29tcGlsZVBhdGgocGF0dGVybi5wYXRoLCBwYXR0ZXJuLmNhc2VTZW5zaXRpdmUsIHBhdHRlcm4uZW5kKTtcbiAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobWF0Y2hlcik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gbWF0Y2hbMF07XG4gIGxldCBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICBsZXQgY2FwdHVyZUdyb3VwcyA9IG1hdGNoLnNsaWNlKDEpO1xuICBsZXQgcGFyYW1zID0gcGFyYW1OYW1lcy5yZWR1Y2UoKG1lbW8sIHBhcmFtTmFtZSwgaW5kZXgpID0+IHtcbiAgICAvLyBXZSBuZWVkIHRvIGNvbXB1dGUgdGhlIHBhdGhuYW1lQmFzZSBoZXJlIHVzaW5nIHRoZSByYXcgc3BsYXQgdmFsdWVcbiAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nIHBhcmFtc1tcIipcIl0gbGF0ZXIgYmVjYXVzZSBpdCB3aWxsIGJlIGRlY29kZWQgdGhlblxuICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICBsZXQgc3BsYXRWYWx1ZSA9IGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCI7XG4gICAgICBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUuc2xpY2UoMCwgbWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCAtIHNwbGF0VmFsdWUubGVuZ3RoKS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gICAgfVxuXG4gICAgbWVtb1twYXJhbU5hbWVdID0gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCIsIHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcGF0aG5hbWU6IG1hdGNoZWRQYXRobmFtZSxcbiAgICBwYXRobmFtZUJhc2UsXG4gICAgcGF0dGVyblxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21waWxlUGF0aChwYXRoLCBjYXNlU2Vuc2l0aXZlLCBlbmQpIHtcbiAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IHZvaWQgMCkge1xuICAgIGVuZCA9IHRydWU7XG4gIH1cblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHBhdGggPT09IFwiKlwiIHx8ICFwYXRoLmVuZHNXaXRoKFwiKlwiKSB8fCBwYXRoLmVuZHNXaXRoKFwiLypcIiksIFwiUm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3ZXJlIFwiICsgKFwiXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIiBiZWNhdXNlIHRoZSBgKmAgY2hhcmFjdGVyIG11c3QgXCIpICsgXCJhbHdheXMgZm9sbG93IGEgYC9gIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgXCIgKyAoXCJwbGVhc2UgY2hhbmdlIHRoZSByb3V0ZSBwYXRoIHRvIFxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIuXCIpKSA6IHZvaWQgMDtcbiAgbGV0IHBhcmFtTmFtZXMgPSBbXTtcbiAgbGV0IHJlZ2V4cFNvdXJjZSA9IFwiXlwiICsgcGF0aC5yZXBsYWNlKC9cXC8qXFwqPyQvLCBcIlwiKSAvLyBJZ25vcmUgdHJhaWxpbmcgLyBhbmQgLyosIHdlJ2xsIGhhbmRsZSBpdCBiZWxvd1xuICAucmVwbGFjZSgvXlxcLyovLCBcIi9cIikgLy8gTWFrZSBzdXJlIGl0IGhhcyBhIGxlYWRpbmcgL1xuICAucmVwbGFjZSgvW1xcXFwuKiteJD97fXwoKVtcXF1dL2csIFwiXFxcXCQmXCIpIC8vIEVzY2FwZSBzcGVjaWFsIHJlZ2V4IGNoYXJzXG4gIC5yZXBsYWNlKC86KFxcdyspL2csIChfLCBwYXJhbU5hbWUpID0+IHtcbiAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICByZXR1cm4gXCIoW15cXFxcL10rKVwiO1xuICB9KTtcblxuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goXCIqXCIpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBwYXRoID09PSBcIipcIiB8fCBwYXRoID09PSBcIi8qXCIgPyBcIiguKikkXCIgLy8gQWxyZWFkeSBtYXRjaGVkIHRoZSBpbml0aWFsIC8sIGp1c3QgbWF0Y2ggdGhlIHJlc3RcbiAgICA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7IC8vIERvbid0IGluY2x1ZGUgdGhlIC8gaW4gcGFyYW1zW1wiKlwiXVxuICB9IGVsc2Uge1xuICAgIHJlZ2V4cFNvdXJjZSArPSBlbmQgPyBcIlxcXFwvKiRcIiAvLyBXaGVuIG1hdGNoaW5nIHRvIHRoZSBlbmQsIGlnbm9yZSB0cmFpbGluZyBzbGFzaGVzXG4gICAgOiAvLyBPdGhlcndpc2UsIG1hdGNoIGEgd29yZCBib3VuZGFyeSBvciBhIHByb2NlZWRpbmcgLy4gVGhlIHdvcmQgYm91bmRhcnkgcmVzdHJpY3RzXG4gICAgLy8gcGFyZW50IHJvdXRlcyB0byBtYXRjaGluZyBvbmx5IHRoZWlyIG93biB3b3JkcyBhbmQgbm90aGluZyBtb3JlLCBlLmcuIHBhcmVudFxuICAgIC8vIHJvdXRlIFwiL2hvbWVcIiBzaG91bGQgbm90IG1hdGNoIFwiL2hvbWUyXCIuXG4gICAgXCIoPzpcXFxcYnxcXFxcL3wkKVwiO1xuICB9XG5cbiAgbGV0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKHJlZ2V4cFNvdXJjZSwgY2FzZVNlbnNpdGl2ZSA/IHVuZGVmaW5lZCA6IFwiaVwiKTtcbiAgcmV0dXJuIFttYXRjaGVyLCBwYXJhbU5hbWVzXTtcbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLCBwYXJhbU5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIlRoZSB2YWx1ZSBmb3IgdGhlIFVSTCBwYXJhbSBcXFwiXCIgKyBwYXJhbU5hbWUgKyBcIlxcXCIgd2lsbCBub3QgYmUgZGVjb2RlZCBiZWNhdXNlXCIgKyAoXCIgdGhlIHN0cmluZyBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBpcyBhIG1hbGZvcm1lZCBVUkwgc2VnbWVudC4gVGhpcyBpcyBwcm9iYWJseVwiKSArIChcIiBkdWUgdG8gYSBiYWQgcGVyY2VudCBlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpIDogdm9pZCAwO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzb2x2ZWQgcGF0aCBvYmplY3QgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIHBhdGhuYW1lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcmVzb2x2ZXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoKHRvLCBmcm9tUGF0aG5hbWUpIHtcbiAgaWYgKGZyb21QYXRobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgZnJvbVBhdGhuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lOiB0b1BhdGhuYW1lLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgbGV0IHBhdGhuYW1lID0gdG9QYXRobmFtZSA/IHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgPyB0b1BhdGhuYW1lIDogcmVzb2x2ZVBhdGhuYW1lKHRvUGF0aG5hbWUsIGZyb21QYXRobmFtZSkgOiBmcm9tUGF0aG5hbWU7XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBub3JtYWxpemVTZWFyY2goc2VhcmNoKSxcbiAgICBoYXNoOiBub3JtYWxpemVIYXNoKGhhc2gpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZShyZWxhdGl2ZVBhdGgsIGZyb21QYXRobmFtZSkge1xuICBsZXQgc2VnbWVudHMgPSBmcm9tUGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIGxldCByZWxhdGl2ZVNlZ21lbnRzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgcmVsYXRpdmVTZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgIGlmIChzZWdtZW50ID09PSBcIi4uXCIpIHtcbiAgICAgIC8vIEtlZXAgdGhlIHJvb3QgXCJcIiBzZWdtZW50IHNvIHRoZSBwYXRobmFtZSBzdGFydHMgYXQgL1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHNlZ21lbnRzLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gXCIuXCIpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBzZWdtZW50cy5qb2luKFwiL1wiKSA6IFwiL1wiO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVG8odG9BcmcsIHJvdXRlUGF0aG5hbWVzLCBsb2NhdGlvblBhdGhuYW1lKSB7XG4gIGxldCB0byA9IHR5cGVvZiB0b0FyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0b0FyZykgOiB0b0FyZztcbiAgbGV0IHRvUGF0aG5hbWUgPSB0b0FyZyA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdG8ucGF0aG5hbWU7IC8vIElmIGEgcGF0aG5hbWUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBgdG9gLCBpdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlXG4gIC8vIHJvdXRlIGNvbnRleHQuIFRoaXMgaXMgZXhwbGFpbmVkIGluIGBOb3RlIG9uIGA8TGluayB0bz5gIHZhbHVlc2AgaW4gb3VyXG4gIC8vIG1pZ3JhdGlvbiBndWlkZSBmcm9tIHY1IGFzIGEgbWVhbnMgb2YgZGlzYW1iaWd1YXRpb24gYmV0d2VlbiBgdG9gIHZhbHVlc1xuICAvLyB0aGF0IGJlZ2luIHdpdGggYC9gIGFuZCB0aG9zZSB0aGF0IGRvIG5vdC4gSG93ZXZlciwgdGhpcyBpcyBwcm9ibGVtYXRpYyBmb3JcbiAgLy8gYHRvYCB2YWx1ZXMgdGhhdCBkbyBub3QgcHJvdmlkZSBhIHBhdGhuYW1lLiBgdG9gIGNhbiBzaW1wbHkgYmUgYSBzZWFyY2ggb3JcbiAgLy8gaGFzaCBzdHJpbmcsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGFzc3VtZSB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIHJlbGF0aXZlXG4gIC8vIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uJ3MgcGF0aG5hbWUgYW5kICpub3QqIHRoZSByb3V0ZSBwYXRobmFtZS5cblxuICBsZXQgZnJvbTtcblxuICBpZiAodG9QYXRobmFtZSA9PSBudWxsKSB7XG4gICAgZnJvbSA9IGxvY2F0aW9uUGF0aG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJvdXRlUGF0aG5hbWVJbmRleCA9IHJvdXRlUGF0aG5hbWVzLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAodG9QYXRobmFtZS5zdGFydHNXaXRoKFwiLi5cIikpIHtcbiAgICAgIGxldCB0b1NlZ21lbnRzID0gdG9QYXRobmFtZS5zcGxpdChcIi9cIik7IC8vIEVhY2ggbGVhZGluZyAuLiBzZWdtZW50IG1lYW5zIFwiZ28gdXAgb25lIHJvdXRlXCIgaW5zdGVhZCBvZiBcImdvIHVwIG9uZVxuICAgICAgLy8gVVJMIHNlZ21lbnRcIi4gIFRoaXMgaXMgYSBrZXkgZGlmZmVyZW5jZSBmcm9tIGhvdyA8YSBocmVmPiB3b3JrcyBhbmQgYVxuICAgICAgLy8gbWFqb3IgcmVhc29uIHdlIGNhbGwgdGhpcyBhIFwidG9cIiB2YWx1ZSBpbnN0ZWFkIG9mIGEgXCJocmVmXCIuXG5cbiAgICAgIHdoaWxlICh0b1NlZ21lbnRzWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgdG9TZWdtZW50cy5zaGlmdCgpO1xuICAgICAgICByb3V0ZVBhdGhuYW1lSW5kZXggLT0gMTtcbiAgICAgIH1cblxuICAgICAgdG8ucGF0aG5hbWUgPSB0b1NlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgIH0gLy8gSWYgdGhlcmUgYXJlIG1vcmUgXCIuLlwiIHNlZ21lbnRzIHRoYW4gcGFyZW50IHJvdXRlcywgcmVzb2x2ZSByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSByb290IC8gVVJMLlxuXG5cbiAgICBmcm9tID0gcm91dGVQYXRobmFtZUluZGV4ID49IDAgPyByb3V0ZVBhdGhuYW1lc1tyb3V0ZVBhdGhuYW1lSW5kZXhdIDogXCIvXCI7XG4gIH1cblxuICBsZXQgcGF0aCA9IHJlc29sdmVQYXRoKHRvLCBmcm9tKTsgLy8gRW5zdXJlIHRoZSBwYXRobmFtZSBoYXMgYSB0cmFpbGluZyBzbGFzaCBpZiB0aGUgb3JpZ2luYWwgdG8gdmFsdWUgaGFkIG9uZS5cblxuICBpZiAodG9QYXRobmFtZSAmJiB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSAmJiAhcGF0aC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikpIHtcbiAgICBwYXRoLnBhdGhuYW1lICs9IFwiL1wiO1xuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFRvUGF0aG5hbWUodG8pIHtcbiAgLy8gRW1wdHkgc3RyaW5ncyBzaG91bGQgYmUgdHJlYXRlZCB0aGUgc2FtZSBhcyAvIHBhdGhzXG4gIHJldHVybiB0byA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKS5wYXRobmFtZSA6IHRvLnBhdGhuYW1lO1xufVxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSByZXR1cm4gcGF0aG5hbWU7XG5cbiAgaWYgKCFwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYmFzZW5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBuZXh0Q2hhciA9IHBhdGhuYW1lLmNoYXJBdChiYXNlbmFtZS5sZW5ndGgpO1xuXG4gIGlmIChuZXh0Q2hhciAmJiBuZXh0Q2hhciAhPT0gXCIvXCIpIHtcbiAgICAvLyBwYXRobmFtZSBkb2VzIG5vdCBzdGFydCB3aXRoIGJhc2VuYW1lL1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhuYW1lLnNsaWNlKGJhc2VuYW1lLmxlbmd0aCkgfHwgXCIvXCI7XG59XG5cbmNvbnN0IGpvaW5QYXRocyA9IHBhdGhzID0+IHBhdGhzLmpvaW4oXCIvXCIpLnJlcGxhY2UoL1xcL1xcLysvZywgXCIvXCIpO1xuXG5jb25zdCBub3JtYWxpemVQYXRobmFtZSA9IHBhdGhuYW1lID0+IHBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikucmVwbGFjZSgvXlxcLyovLCBcIi9cIik7XG5cbmNvbnN0IG5vcm1hbGl6ZVNlYXJjaCA9IHNlYXJjaCA9PiAhc2VhcmNoIHx8IHNlYXJjaCA9PT0gXCI/XCIgPyBcIlwiIDogc2VhcmNoLnN0YXJ0c1dpdGgoXCI/XCIpID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG5cbmNvbnN0IG5vcm1hbGl6ZUhhc2ggPSBoYXNoID0+ICFoYXNoIHx8IGhhc2ggPT09IFwiI1wiID8gXCJcIiA6IGhhc2guc3RhcnRzV2l0aChcIiNcIikgPyBoYXNoIDogXCIjXCIgKyBoYXNoOyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVzLCBMb2NhdGlvbkNvbnRleHQgYXMgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgTmF2aWdhdGlvbkNvbnRleHQgYXMgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBSb3V0ZUNvbnRleHQgYXMgVU5TQUZFX1JvdXRlQ29udGV4dCwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLCBnZW5lcmF0ZVBhdGgsIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIHJlbmRlck1hdGNoZXMsIHJlc29sdmVQYXRoLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBSZWFjdCBSb3V0ZXIgRE9NIHY2LjIuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVQYXRoIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZUhyZWYsIHVzZUxvY2F0aW9uLCB1c2VSZXNvbHZlZFBhdGgsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVzLCBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCByZW5kZXJNYXRjaGVzLCByZXNvbHZlUGF0aCwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmNvbnN0IF9leGNsdWRlZCA9IFtcIm9uQ2xpY2tcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcImFyaWEtY3VycmVudFwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJlbmRcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiY2hpbGRyZW5cIl07XG5cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IFJvdXRlciFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gUHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKi9cbmZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoX3JlZikge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHdpbmRvd1xuICB9ID0gX3JlZjtcbiAgbGV0IGhpc3RvcnlSZWYgPSB1c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3dcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gU3RvcmVzIHRoZSBsb2NhdGlvbiBpbiB0aGUgaGFzaFxuICogcG9ydGlvbiBvZiB0aGUgVVJMIHNvIGl0IGlzIG5vdCBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gKi9cbmZ1bmN0aW9uIEhhc2hSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IHVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUhhc2hIaXN0b3J5KHtcbiAgICAgIHdpbmRvd1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQSBgPFJvdXRlcj5gIHRoYXQgYWNjZXB0cyBhIHByZS1pbnN0YW50aWF0ZWQgaGlzdG9yeSBvYmplY3QuIEl0J3MgaW1wb3J0YW50XG4gKiB0byBub3RlIHRoYXQgdXNpbmcgeW91ciBvd24gaGlzdG9yeSBvYmplY3QgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkIGFuZCBtYXkgYWRkXG4gKiB0d28gdmVyc2lvbnMgb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0byB5b3VyIGJ1bmRsZXMgdW5sZXNzIHlvdSB1c2UgdGhlIHNhbWVcbiAqIHZlcnNpb24gb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0aGF0IFJlYWN0IFJvdXRlciB1c2VzIGludGVybmFsbHkuXG4gKi9cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmMztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhpc3RvcnlSb3V0ZXIuZGlzcGxheU5hbWUgPSBcInVuc3RhYmxlX0hpc3RvcnlSb3V0ZXJcIjtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cbmNvbnN0IExpbmsgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rV2l0aFJlZihfcmVmNCwgcmVmKSB7XG4gIGxldCB7XG4gICAgb25DbGljayxcbiAgICByZWxvYWREb2N1bWVudCxcbiAgICByZXBsYWNlID0gZmFsc2UsXG4gICAgc3RhdGUsXG4gICAgdGFyZ2V0LFxuICAgIHRvXG4gIH0gPSBfcmVmNCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcblxuICBsZXQgaHJlZiA9IHVzZUhyZWYodG8pO1xuICBsZXQgaW50ZXJuYWxPbkNsaWNrID0gdXNlTGlua0NsaWNrSGFuZGxlcih0bywge1xuICAgIHJlcGxhY2UsXG4gICAgc3RhdGUsXG4gICAgdGFyZ2V0XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmICFyZWxvYWREb2N1bWVudCkge1xuICAgICAgaW50ZXJuYWxPbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50XG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIHJlZjogcmVmLFxuICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICB9KSlcbiAgKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcbn1cblxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuY29uc3QgTmF2TGluayA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkxpbmtXaXRoUmVmKF9yZWY1LCByZWYpIHtcbiAgbGV0IHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFByb3AgPSBcInBhZ2VcIixcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wID0gXCJcIixcbiAgICBlbmQgPSBmYWxzZSxcbiAgICBzdHlsZTogc3R5bGVQcm9wLFxuICAgIHRvLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmNSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgX2V4Y2x1ZGVkMik7XG5cbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8pO1xuICBsZXQgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICBsZXQgdG9QYXRobmFtZSA9IHBhdGgucGF0aG5hbWU7XG5cbiAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XG4gICAgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB0b1BhdGhuYW1lID0gdG9QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgbGV0IGlzQWN0aXZlID0gbG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIGxvY2F0aW9uUGF0aG5hbWUuc3RhcnRzV2l0aCh0b1BhdGhuYW1lKSAmJiBsb2NhdGlvblBhdGhuYW1lLmNoYXJBdCh0b1BhdGhuYW1lLmxlbmd0aCkgPT09IFwiL1wiO1xuICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHVuZGVmaW5lZDtcbiAgbGV0IGNsYXNzTmFtZTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGxdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIGxldCBzdHlsZSA9IHR5cGVvZiBzdHlsZVByb3AgPT09IFwiZnVuY3Rpb25cIiA/IHN0eWxlUHJvcCh7XG4gICAgaXNBY3RpdmVcbiAgfSkgOiBzdHlsZVByb3A7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB0bzogdG9cbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oe1xuICAgIGlzQWN0aXZlXG4gIH0pIDogY2hpbGRyZW4pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gSE9PS1Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpY2sgYmVoYXZpb3IgZm9yIHJvdXRlciBgPExpbms+YCBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bCBpZlxuICogeW91IG5lZWQgdG8gY3JlYXRlIGN1c3RvbSBgPExpbms+YCBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgY2xpY2sgYmVoYXZpb3Igd2VcbiAqIHVzZSBpbiBvdXIgZXhwb3J0ZWQgYDxMaW5rPmAuXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHRhcmdldCxcbiAgICByZXBsYWNlOiByZXBsYWNlUHJvcCxcbiAgICBzdGF0ZVxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gSWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgIXRhcmdldCB8fCB0YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gTGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gSWYgdGhlIFVSTCBoYXNuJ3QgY2hhbmdlZCwgYSByZWd1bGFyIDxhPiB3aWxsIGRvIGEgcmVwbGFjZSBpbnN0ZWFkIG9mXG4gICAgICAvLyBhIHB1c2gsIHNvIGRvIHRoZSBzYW1lIGhlcmUuXG5cbiAgICAgIGxldCByZXBsYWNlID0gISFyZXBsYWNlUHJvcCB8fCBjcmVhdGVQYXRoKGxvY2F0aW9uKSA9PT0gY3JlYXRlUGF0aChwYXRoKTtcbiAgICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHN0YXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHBhdGgsIHJlcGxhY2VQcm9wLCBzdGF0ZSwgdGFyZ2V0LCB0b10pO1xufVxuLyoqXG4gKiBBIGNvbnZlbmllbnQgd3JhcHBlciBmb3IgcmVhZGluZyBhbmQgd3JpdGluZyBzZWFyY2ggcGFyYW1ldGVycyB2aWEgdGhlXG4gKiBVUkxTZWFyY2hQYXJhbXMgaW50ZXJmYWNlLlxuICovXG5cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIsIFwiWW91IGNhbm5vdCB1c2UgdGhlIGB1c2VTZWFyY2hQYXJhbXNgIGhvb2sgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3QgXCIgKyBcInN1cHBvcnQgdGhlIFVSTFNlYXJjaFBhcmFtcyBBUEkuIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgSW50ZXJuZXQgXCIgKyBcIkV4cGxvcmVyIDExLCB3ZSByZWNvbW1lbmQgeW91IGxvYWQgYSBwb2x5ZmlsbCBzdWNoIGFzIFwiICsgXCJodHRwczovL2dpdGh1Yi5jb20vdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXNcXG5cXG5cIiArIFwiSWYgeW91J3JlIHVuc3VyZSBob3cgdG8gbG9hZCBwb2x5ZmlsbHMsIHdlIHJlY29tbWVuZCB5b3UgY2hlY2sgb3V0IFwiICsgXCJodHRwczovL3BvbHlmaWxsLmlvL3YzLyB3aGljaCBwcm92aWRlcyBzb21lIHJlY29tbWVuZGF0aW9ucyBhYm91dCBob3cgXCIgKyBcInRvIGxvYWQgcG9seWZpbGxzIG9ubHkgZm9yIHVzZXJzIHRoYXQgbmVlZCB0aGVtLCBpbnN0ZWFkIG9mIGZvciBldmVyeSBcIiArIFwidXNlci5cIikgOiB2b2lkIDA7XG4gIGxldCBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmID0gdXNlUmVmKGNyZWF0ZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgc2VhcmNoUGFyYW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudC5rZXlzKCkpIHtcbiAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcyhrZXkpKSB7XG4gICAgICAgIGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudC5nZXRBbGwoa2V5KS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VhcmNoUGFyYW1zO1xuICB9LCBbbG9jYXRpb24uc2VhcmNoXSk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBzZXRTZWFyY2hQYXJhbXMgPSB1c2VDYWxsYmFjaygobmV4dEluaXQsIG5hdmlnYXRlT3B0aW9ucykgPT4ge1xuICAgIG5hdmlnYXRlKFwiP1wiICsgY3JlYXRlU2VhcmNoUGFyYW1zKG5leHRJbml0KSwgbmF2aWdhdGVPcHRpb25zKTtcbiAgfSwgW25hdmlnYXRlXSk7XG4gIHJldHVybiBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFBhcmFtcyhpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHR5cGVvZiBpbml0ID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoaW5pdCkgfHwgaW5pdCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyA/IGluaXQgOiBPYmplY3Qua2V5cyhpbml0KS5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGluaXRba2V5XTtcbiAgICByZXR1cm4gbWVtby5jb25jYXQoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAodiA9PiBba2V5LCB2XSkgOiBbW2tleSwgdmFsdWVdXSk7XG4gIH0sIFtdKSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmssIGNyZWF0ZVNlYXJjaFBhcmFtcywgSGlzdG9yeVJvdXRlciBhcyB1bnN0YWJsZV9IaXN0b3J5Um91dGVyLCB1c2VMaW5rQ2xpY2tIYW5kbGVyLCB1c2VTZWFyY2hQYXJhbXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MC4yMC4yXG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBmLGcsaCxrO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBsPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIGwubm93KCl9fWVsc2V7dmFyIHA9RGF0ZSxxPXAubm93KCk7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gcC5ub3coKS1xfX1cbmlmKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgTWVzc2FnZUNoYW5uZWwpe3ZhciB0PW51bGwsdT1udWxsLHc9ZnVuY3Rpb24oKXtpZihudWxsIT09dCl0cnl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0KCEwLGEpO3Q9bnVsbH1jYXRjaChiKXt0aHJvdyBzZXRUaW1lb3V0KHcsMCksYjt9fTtmPWZ1bmN0aW9uKGEpe251bGwhPT10P3NldFRpbWVvdXQoZiwwLGEpOih0PWEsc2V0VGltZW91dCh3LDApKX07Zz1mdW5jdGlvbihhLGIpe3U9c2V0VGltZW91dChhLGIpfTtoPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpfTtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2s9ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbigpe319ZWxzZXt2YXIgeD13aW5kb3cuc2V0VGltZW91dCx5PXdpbmRvdy5jbGVhclRpbWVvdXQ7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlKXt2YXIgej1cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcmVhY3QtcG9seWZpbGxzXCIpO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiB6JiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKX12YXIgQT0hMSxCPW51bGwsQz0tMSxEPTUsRT0wO2V4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4gZXhwb3J0cy51bnN0YWJsZV9ub3coKT49XG5FfTtrPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKGEpezA+YXx8MTI1PGE/Y29uc29sZS5lcnJvcihcImZvcmNlRnJhbWVSYXRlIHRha2VzIGEgcG9zaXRpdmUgaW50IGJldHdlZW4gMCBhbmQgMTI1LCBmb3JjaW5nIGZyYW1lIHJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHN1cHBvcnRlZFwiKTpEPTA8YT9NYXRoLmZsb29yKDFFMy9hKTo1fTt2YXIgRj1uZXcgTWVzc2FnZUNoYW5uZWwsRz1GLnBvcnQyO0YucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7aWYobnVsbCE9PUIpe3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7RT1hK0Q7dHJ5e0IoITAsYSk/Ry5wb3N0TWVzc2FnZShudWxsKTooQT0hMSxCPW51bGwpfWNhdGNoKGIpe3Rocm93IEcucG9zdE1lc3NhZ2UobnVsbCksYjt9fWVsc2UgQT0hMX07Zj1mdW5jdGlvbihhKXtCPWE7QXx8KEE9ITAsRy5wb3N0TWVzc2FnZShudWxsKSl9O2c9ZnVuY3Rpb24oYSxiKXtDPVxueChmdW5jdGlvbigpe2EoZXhwb3J0cy51bnN0YWJsZV9ub3coKSl9LGIpfTtoPWZ1bmN0aW9uKCl7eShDKTtDPS0xfX1mdW5jdGlvbiBIKGEsYil7dmFyIGM9YS5sZW5ndGg7YS5wdXNoKGIpO2E6Zm9yKDs7KXt2YXIgZD1jLTE+Pj4xLGU9YVtkXTtpZih2b2lkIDAhPT1lJiYwPEkoZSxiKSlhW2RdPWIsYVtjXT1lLGM9ZDtlbHNlIGJyZWFrIGF9fWZ1bmN0aW9uIEooYSl7YT1hWzBdO3JldHVybiB2b2lkIDA9PT1hP251bGw6YX1cbmZ1bmN0aW9uIEsoYSl7dmFyIGI9YVswXTtpZih2b2lkIDAhPT1iKXt2YXIgYz1hLnBvcCgpO2lmKGMhPT1iKXthWzBdPWM7YTpmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTspe3ZhciBtPTIqKGQrMSktMSxuPWFbbV0sdj1tKzEscj1hW3ZdO2lmKHZvaWQgMCE9PW4mJjA+SShuLGMpKXZvaWQgMCE9PXImJjA+SShyLG4pPyhhW2RdPXIsYVt2XT1jLGQ9dik6KGFbZF09bixhW21dPWMsZD1tKTtlbHNlIGlmKHZvaWQgMCE9PXImJjA+SShyLGMpKWFbZF09cixhW3ZdPWMsZD12O2Vsc2UgYnJlYWsgYX19cmV0dXJuIGJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gSShhLGIpe3ZhciBjPWEuc29ydEluZGV4LWIuc29ydEluZGV4O3JldHVybiAwIT09Yz9jOmEuaWQtYi5pZH12YXIgTD1bXSxNPVtdLE49MSxPPW51bGwsUD0zLFE9ITEsUj0hMSxTPSExO1xuZnVuY3Rpb24gVChhKXtmb3IodmFyIGI9SihNKTtudWxsIT09Yjspe2lmKG51bGw9PT1iLmNhbGxiYWNrKUsoTSk7ZWxzZSBpZihiLnN0YXJ0VGltZTw9YSlLKE0pLGIuc29ydEluZGV4PWIuZXhwaXJhdGlvblRpbWUsSChMLGIpO2Vsc2UgYnJlYWs7Yj1KKE0pfX1mdW5jdGlvbiBVKGEpe1M9ITE7VChhKTtpZighUilpZihudWxsIT09SihMKSlSPSEwLGYoVik7ZWxzZXt2YXIgYj1KKE0pO251bGwhPT1iJiZnKFUsYi5zdGFydFRpbWUtYSl9fVxuZnVuY3Rpb24gVihhLGIpe1I9ITE7UyYmKFM9ITEsaCgpKTtRPSEwO3ZhciBjPVA7dHJ5e1QoYik7Zm9yKE89SihMKTtudWxsIT09TyYmKCEoTy5leHBpcmF0aW9uVGltZT5iKXx8YSYmIWV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQoKSk7KXt2YXIgZD1PLmNhbGxiYWNrO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXtPLmNhbGxiYWNrPW51bGw7UD1PLnByaW9yaXR5TGV2ZWw7dmFyIGU9ZChPLmV4cGlyYXRpb25UaW1lPD1iKTtiPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGU/Ty5jYWxsYmFjaz1lOk89PT1KKEwpJiZLKEwpO1QoYil9ZWxzZSBLKEwpO089SihMKX1pZihudWxsIT09Tyl2YXIgbT0hMDtlbHNle3ZhciBuPUooTSk7bnVsbCE9PW4mJmcoVSxuLnN0YXJ0VGltZS1iKTttPSExfXJldHVybiBtfWZpbmFsbHl7Tz1udWxsLFA9YyxRPSExfX12YXIgVz1rO2V4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7XG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eT00O2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZz1udWxsO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe2EuY2FsbGJhY2s9bnVsbH07ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe1J8fFF8fChSPSEwLGYoVikpfTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIFB9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gSihMKX07XG5leHBvcnRzLnVuc3RhYmxlX25leHQ9ZnVuY3Rpb24oYSl7c3dpdGNoKFApe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOnZhciBiPTM7YnJlYWs7ZGVmYXVsdDpiPVB9dmFyIGM9UDtQPWI7dHJ5e3JldHVybiBhKCl9ZmluYWxseXtQPWN9fTtleHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludD1XO2V4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9UDtQPWE7dHJ5e3JldHVybiBiKCl9ZmluYWxseXtQPWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jPyhjPWMuZGVsYXksYz1cIm51bWJlclwiPT09dHlwZW9mIGMmJjA8Yz9kK2M6ZCk6Yz1kO3N3aXRjaChhKXtjYXNlIDE6dmFyIGU9LTE7YnJlYWs7Y2FzZSAyOmU9MjUwO2JyZWFrO2Nhc2UgNTplPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmU9MUU0O2JyZWFrO2RlZmF1bHQ6ZT01RTN9ZT1jK2U7YT17aWQ6TisrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpjLGV4cGlyYXRpb25UaW1lOmUsc29ydEluZGV4Oi0xfTtjPmQ/KGEuc29ydEluZGV4PWMsSChNLGEpLG51bGw9PT1KKEwpJiZhPT09SihNKSYmKFM/aCgpOlM9ITAsZyhVLGMtZCkpKTooYS5zb3J0SW5kZXg9ZSxIKEwsYSksUnx8UXx8KFI9ITAsZihWKSkpO3JldHVybiBhfTtcbmV4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPVA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9UDtQPWI7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e1A9Y319fTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjggLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5vPWJ8fGE7dGhpcy5jPXRoaXMuby5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5vLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9ZnVuY3Rpb24geihhLGIsYyl7ZnVuY3Rpb24gZCgpe20mJmUmJmYmJihtKGcpLG09bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLG09Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQigpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEMoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RChhKX19ZnVuY3Rpb24gRShhLGIpe2EuYz1iO0QoYSl9ZnVuY3Rpb24gRChhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRihhKXt0aGlzLmE9YXx8XCItXCJ9Ri5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBIKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitJKGEuYyl9ZnVuY3Rpb24gSShhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEgoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5vLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEYoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7SyhhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBMKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1LKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBLKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSihjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBOKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gTyhhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSShhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSChhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBQKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9UC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMuby5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoZiwyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9ZigpfSksZT1udWxsLGY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtlPXNldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtmLGRdKS50aGVuKGZ1bmN0aW9uKCl7ZSYmKGNsZWFyVGltZW91dChlKSxlPW51bGwpO2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubT10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMubT1uZXcgTSh0aGlzLmMsdGhpcy5zKTthPW5ldyBHKHRoaXMuYS5jK1wiLHNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9XG5PKGEpO3RoaXMubS5hLnN0eWxlLmNzc1RleHQ9YTtOKHRoaXMuZyk7Tih0aGlzLmgpO04odGhpcy5qKTtOKHRoaXMubSl9dmFyIFI9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFM9bnVsbDtmdW5jdGlvbiBUKCl7aWYobnVsbD09PVMpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtTPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFN9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm0uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO1UodGhpcyl9O1xuZnVuY3Rpb24gbGEoYSxiLGMpe2Zvcih2YXIgZCBpbiBSKWlmKFIuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbUltkXV0mJmM9PT1hLmZbUltkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1UKCkmJmxhKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VCgpJiZsYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTptYShhKTpWKGEsYS52KX1mdW5jdGlvbiBtYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtVKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5tLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubT10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7SyhiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubT0hMDtuYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9SyhiLFwiZm9udGluYWN0aXZlXCIsYSk7bmEodGhpcyl9O2Z1bmN0aW9uIG5hKGEpezA9PS0tYS5mJiZhLmomJihhLm0/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxLKGEsXCJhY3RpdmVcIikpOkwoYS5hKSl9O2Z1bmN0aW9uIG9hKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1vYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3BhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiBxYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLG09ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKUwoYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxsPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF0sbj1tW2suY10scj1iLmEseD1rO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSih4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0socixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx4YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnhhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFAocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLG4pOnI9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLGEsbik7bC5wdXNoKHIpfWZvcihoPTA7aDxsLmxlbmd0aDtoKyspbFtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcGEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtxYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHJhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9XG5yYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIGw9MDtsPGMubGVuZ3RoO2wrKyl7dmFyIGs9Y1tsXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1tsXS5mb250U3R5bGUmJnZvaWQgMCE9Y1tsXS5mb250V2VpZ2h0PyhoPWNbbF0uZm9udFN0eWxlK2NbbF0uZm9udFdlaWdodCxlLnB1c2gobmV3IEcoayxoKSkpOmUucHVzaChuZXcgRyhrKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5vO0EodGhpcy5jLChjLmEuYXBpfHxcImh0dHBzOi8vZmFzdC5mb250cy5uZXQvanNhcGlcIikrXCIvXCIrZCtcIi5qc1wiKyhlP1wiP3Y9XCIrZTpcIlwiKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK1xuZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitkfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9c2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEI7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspeih0aGlzLmMsZFtiXSxDKGcpKTt2YXIgbT1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLGw9MDtsPGgubGVuZ3RoO2wrPTEpbS5wdXNoKG5ldyBHKGRbMF0saFtsXSkpO2Vsc2UgbS5wdXNoKG5ldyBHKGRbMF0pKTtFKGcsZnVuY3Rpb24oKXthKG0sZil9KX07ZnVuY3Rpb24gdGEoYSxiKXthP3RoaXMuYz1hOnRoaXMuYz11YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1ifHxcIlwifXZhciB1YT1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB3YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB5YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIHphPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEFhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQmE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkNhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBtPWRbMV07Zz1bXTtpZihtKWZvcih2YXIgbT1tLnNwbGl0KFwiLFwiKSxoPW0ubGVuZ3RoLGw9MDtsPGg7bCsrKXt2YXIgaztrPW1bbF07aWYoay5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUNhLmV4ZWMoay50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWs9XCJcIjtlbHNle2s9blsyXTtrPW51bGw9PWt8fFwiXCI9PWs/XCJuXCI6QmFba107bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUFhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7az1bayxuXS5qb2luKFwiXCIpfX1lbHNlIGs9XCJcIjtrJiZnLnB1c2goayl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPXphW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD16YVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEcoZSxmW2RdKSl9fTtmdW5jdGlvbiBFYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBGYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEIsYz10aGlzLmMsZD1uZXcgdGEodGhpcy5hLmFwaSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7dmEoZCxlKTt2YXIgZj1uZXcgeWEoZSk7RGEoZik7eihjLHdhKGQpLEMoYikpO0UoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxGYSl9KX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1HYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubztiP0EodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0sbT1iW2YrMV0saD0wO2g8bS5sZW5ndGg7aCsrKWUucHVzaChuZXcgRyhnLG1baF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobCl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubyxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxtPWMuZm9udHMubGVuZ3RoO2c8bTsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEcoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQSh0aGlzLmMsKHRoaXMuZi5hcGl8fFwiaHR0cHM6Ly9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBvYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEVhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjFmNGY4YTRhOGZjNTY3OTYxNTdcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiZGVtb3M6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kZW1vcy9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTQzOiAwLFxuXHQ5NjU6IDAsXG5cdDI0NTogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2RlbW9zXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2RlbW9zXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWZsYW1pbmdvL2AgOiAnL2ZsYW1pbmdvLyc7XG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfVVJMID0gaXNQcm9kdWN0aW9uXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy9mbGFtaW5nb2Bcblx0OiAnL2ZsYW1pbmdvJztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBTZWFyY2ggPSAoeyBvbkNsb3NlID0gKCkgPT4ge30sIG9uU2VhcmNoID0gKCkgPT4ge30gfSkgPT4ge1xuXHRjb25zdCBpbnB1dFJlZiA9IGNyZWF0ZVJlZigpO1xuXG5cdHJldHVybiAoXG5cdFx0PGIgY2xhc3NOYW1lPXskLnNlYXJjaH0+XG5cdFx0XHQ8YiBjbGFzc05hbWU9eyQuY2xvc2V9PlxuXHRcdFx0XHQ8aVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoKX1cblx0XHRcdFx0PjwvaT5cblx0XHRcdDwvYj5cblx0XHRcdDxiIGNsYXNzTmFtZT17JC5zZWFyY2hfaW5wdXR9PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e2lucHV0UmVmfSAvPlxuXHRcdFx0XHQ8aVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhcyBmYS1zZWFyY2ggJHskLnNlYXJjaF9pY29ufWB9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25TZWFyY2goaW5wdXRSZWYuY3VycmVudC52YWx1ZSl9XG5cdFx0XHRcdD48L2k+XG5cdFx0XHQ8L2I+XG5cdFx0PC9iPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzNdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU1hdGNoLCB1c2VSZXNvbHZlZFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICd+Yy9GbGFtaW5nby9CdXR0b24nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICd+Yy9GbGFtaW5nby9TZWFyY2hNb2RhbCc7XG5cbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBsb2dvID0gbnVsbCwgbWVudSA9IFtdLCBoaWRlU2VhcmNoID0gZmFsc2UgfSkgPT4ge1xuXHRjb25zdCBbaXNTZWFyY2hPbiwgb25DaGFuZ2VTZWFyY2hWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NlYXJjaFRlcm0sIG9uQ2hhbmdlU2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3Qgc2F2ZVNlYXJjaFRlcm0gPSB0ZXJtID0+IHtcblx0XHRjb25zb2xlLmxvZyh0ZXJtKTtcblx0XHRvbkNoYW5nZVNlYXJjaFRlcm0odGVybSk7XG5cdFx0b25DaGFuZ2VTZWFyY2hWaXNpYmlsaXR5KGZhbHNlKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxiIGNsYXNzTmFtZT17JC5uYXZpZ2F0aW9ufT5cblx0XHRcdHtsb2dvICYmIChcblx0XHRcdFx0PGIgY2xhc3NOYW1lPXskLmxvZ299PlxuXHRcdFx0XHRcdDxMaW5rIHRvPXtsb2dvLnJvdXRlfT5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtsb2dvLmltYWdlfSBhbHQ9XCJsb2dvXCIgLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvYj5cblx0XHRcdCl9XG5cdFx0XHQ8YiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdHttZW51Lmxlbmd0aCAmJiAoXG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPXskLm1lbnV9PlxuXHRcdFx0XHRcdFx0e21lbnUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgcmVzb2x2ZWQgPSB1c2VSZXNvbHZlZFBhdGgoaXRlbS5yb3V0ZSk7XG5cdFx0XHRcdFx0XHRcdGxldCBtYXRjaCA9IHVzZU1hdGNoKHtcblx0XHRcdFx0XHRcdFx0XHRwYXRoOiByZXNvbHZlZC5wYXRobmFtZSxcblx0XHRcdFx0XHRcdFx0XHRlbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmlzQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rPXtpdGVtLnJvdXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17aXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHR0bz17aXRlbS5yb3V0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hdGNoID8gJC5tZW51X2l0ZW1fYWN0aXZlIDogJC5tZW51X2l0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFoaWRlU2VhcmNoICYmIChcblx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9eyQuc2VhcmNofT5cblx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlU2VhcmNoVmlzaWJpbGl0eSh0cnVlKX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXskLnNlYXJjaF9pY29ufVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9pPlxuXG5cdFx0XHRcdFx0XHR7aXNTZWFyY2hPbiAmJiAoXG5cdFx0XHRcdFx0XHRcdDxTZWFyY2hcblx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBvbkNoYW5nZVNlYXJjaFZpc2liaWxpdHkoZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdG9uU2VhcmNoPXt2YWwgPT4gc2F2ZVNlYXJjaFRlcm0odmFsKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9iPlxuXHRcdDwvYj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnfmMvRmxhbWluZ28vQnV0dG9uJztcblxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgSW5xdWlyeSA9ICh7XG5cdHNvY2lhbE1lZGlhID0gW10sXG5cdGhlYWRpbmcgPSAnJyxcblx0aW1hZ2UgPSAnJyxcblx0YWN0aW9uID0ge30sXG59KSA9PiAoXG5cdDxkaXZcblx0XHRjbGFzc05hbWU9XCJzZWN0aW9uIHRleHQtY2VudGVyIGJnLWNvdmVyIGJnLWZpeGVkXCJcblx0XHRzdHlsZT17e1xuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBpbWFnZSAmJiBgdXJsKCR7aW1hZ2V9KWAsXG5cdFx0fX1cblx0PlxuXHRcdHtzb2NpYWxNZWRpYSAmJiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5zb2NpYWxfbWVkaWF9IG1iLW1gfT5cblx0XHRcdFx0e3NvY2lhbE1lZGlhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8YSBocmVmPXtpdGVtLmxpbmt9IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0XHQ8aDIgY2xhc3NOYW1lPVwibWItbVwiPntoZWFkaW5nfTwvaDI+XG5cdFx0e2FjdGlvbiAmJiBhY3Rpb24udGV4dCAmJiAoXG5cdFx0XHQ8QnV0dG9uIHRleHQ9e2FjdGlvbi50ZXh0fSBsaW5rPXthY3Rpb24ubGlua30gLz5cblx0XHQpfVxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IElucXVpcnk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVszXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbM10hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IElucXVpcnkgZnJvbSAnfmMvRmxhbWluZ28vSW5xdWlyeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ35jL0ZsYW1pbmdvL0J1dHRvbic7XG5pbXBvcnQgeyBiYXNlLCBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xuXG5pbXBvcnQgJCBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoeyBpbnF1aXJ5ID0ge30sIGNvbHVtbnMgPSBbXSwgY29weXJpZ2h0ID0ge30gfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17JC5mb290ZXJ9PlxuXHRcdHtpbnF1aXJ5ICYmIDxJbnF1aXJ5IHsuLi5pbnF1aXJ5fSAvPn1cblx0XHR7Y29sdW1ucy5sZW5ndGggJiYgKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb24gYmItd2hpdGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51c30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51fT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQubG9nb30gbWItZGVmYXVsdGB9PlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPXtiYXNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtgJHtQVUJMSUNfVVJMfS9sb2dvLnBuZ2B9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHA+V2UgYXJlIG1vcmUgdGhhbiBhIGRpZ2l0YWwgYWdlbmN5PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51fT5cblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5Db250YWN0IFVzPC9oNT5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjA3Mjc3MjkwNjhcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtcGhvbmUtdm9sdW1lICR7JC5pY29uX3doaXRlfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0MDcyNzcyOTA2OFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJtYWlsdG86bW9jYW51LmFsZXhhbmRydTIwQHlhaG9vLnJvXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhciBmYS1lbnZlbG9wZSAkeyQuaWNvbl93aGl0ZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdG1vY2FudS5hbGV4YW5kcnUyMEB5YWhvby5yb1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtbWFwLW1hcmtlci1hbHQgJHskLmljb25fd2hpdGV9YH1cblx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdENvbnN0YW50emEsIFJvbWFuaWFcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGlcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhciBmYS1jYWxlbmRhci1hbHQgJHskLmljb25fd2hpdGV9YH1cblx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdE1vbmRheSB0byBGcmlkYXlcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLm1lbnV9PlxuXHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPk91ciBTZXJ2aWNlczwvaDU+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRMaW5rIG5iLjFcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0TGluayBuYi4yXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdExpbmsgbmIuM1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRMaW5rIG5iLjRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tZW51fT5cblx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5BYm91dCBVczwvaDU+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRBYm91dFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRCbG9nXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3QgdXMgMVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0IHVzIDJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgcHktbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29weXJpZ2h0fSBtYi1kZWZhdWx0IGZsZXhgfT5cblx0XHRcdFx0XHQ8cD5Db3B5cmlnaHQgMjAyMCBBbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5UZXJtcyBvZiBVc2U8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYmV0d2VlblwiPlxuXHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cblx0XHRcdFx0XHRcdFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXJcblx0XHRcdFx0XHRcdGRhcGlidXMgbGVvLlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5zb2NpYWxfbWVkaWFfc21hbGx9PlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9va1wiPjwvaT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8veW91dHViZS5jb21cIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFiIGZhLXlvdXR1YmVcIj48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgYmFzZSwgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRoZWFkZXI6IHtcblx0XHRpbWFnZTogYCR7UFVCTElDX1VSTH0vaG9tZS5qcGVnYCxcblx0XHRoZWFkaW5nOiAnV2UgYXJlIGRpZ2l0YWwgYWdlbmN5LicsXG5cdFx0ZGVzY3JpcHRpb246ICdDUkVBVElWRSBNSU5ELCBDUkVBVElWRSBXT1JLUy4nLFxuXHRcdGFjdGlvbjoge1xuXHRcdFx0dGV4dDogJ2dldHRpbmcgc3RhcnRlZCcsXG5cdFx0fSxcblx0XHRjb2x1bW5zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYXMgZmEtcGFwZXItcGxhbmUnLFxuXHRcdFx0XHRoZWFkaW5nOiAnRnV0dXJlIENvbmNlcHQuJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmFzIGZhLWJyYWluJyxcblx0XHRcdFx0aGVhZGluZzogJ1RoZSBCaWcgSWRlYXMuJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmFzIGZhLWxpZ2h0YnVsYicsXG5cdFx0XHRcdGhlYWRpbmc6ICdDcmVhdGl2ZSBTb2x1dGlvbnMuJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHNlY3Rpb25zOiBbXG5cdFx0e1xuXHRcdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXG5cdFx0XHRkZXNjcmlwdGlvbjogJ291ciBzZXJ2aWNlcyBmb3IgY2xpZW50cycsXG5cdFx0XHRpc0NvbnRhaW5lcjogdHJ1ZSxcblx0XHRcdGhhc0RlZmF1bHRDb2x1bW5zOiB0cnVlLFxuXHRcdFx0Y29sdW1uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1jaGFydC1iYXInLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdEaWdpdGFsIFN0cmF0ZWd5Jyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1wZW5jaWwtYWx0Jyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVVggRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtdXNlci1mcmllbmRzJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVUkgRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtZ2xvYmUnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdTb2NpYWwgTWVkaWEnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWJvb2ttYXJrJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnRGVzaWduIENvbmNlcHQnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLWNoYXJ0LWFyZWEnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdNZWRpYSBQYWlyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGhlYWRpbmc6ICdXb3Jrcy4nLFxuXHRcdFx0ZGVzY3JpcHRpb246IFwidGhpbmdzIHdlJ3ZlIG1hZGVcIixcblx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHR0ZXh0OiAndmlldyBhbGwnLFxuXHRcdFx0fSxcblx0XHRcdGNvbHVtbnNUeXBlOiAnd29ya3MnLFxuXHRcdFx0Y29sdW1uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1jaGFydC1iYXInLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdEaWdpdGFsIFN0cmF0ZWd5Jyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1wZW5jaWwtYWx0Jyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVVggRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtdXNlci1mcmllbmRzJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnVUkgRGVzaWducycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtZ2xvYmUnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdTb2NpYWwgTWVkaWEnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWJvb2ttYXJrJyxcblx0XHRcdFx0XHRoZWFkaW5nOiAnRGVzaWduIENvbmNlcHQnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLWNoYXJ0LWFyZWEnLFxuXHRcdFx0XHRcdGhlYWRpbmc6ICdNZWRpYSBQYWlyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxufTtcbiIsImltcG9ydCB7IGJhc2UsIFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XG5cbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxNZWRpYSA9IFtcblx0e1xuXHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXG5cdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vaycsXG5cdH0sXG5cdHtcblx0XHRsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbScsXG5cdFx0aWNvbjogJ2ZhYiBmYS10d2l0dGVyJyxcblx0fSxcblx0e1xuXHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxuXHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcblx0fSxcblx0e1xuXHRcdGxpbms6ICdodHRwczovL3lvdXR1YmUuY29tJyxcblx0XHRpY29uOiAnZmFiIGZhLXlvdXR1YmUnLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGlucXVpcnkgPSB7XG5cdGltYWdlOiBQVUJMSUNfVVJMICsgJy9iYWNrZ3JvdW5kLWZvb3Rlci5qcGcnLFxuXHRzb2NpYWxNZWRpYSxcblx0aGVhZGluZzogJ0hhdmUgYW55IHByb2plY3QgaW4gbWluZD8nLFxuXHRhY3Rpb246IHtcblx0XHR0ZXh0OiAnbWFrZSBpbnF1aXJ5Jyxcblx0fSxcbn07XG5cbmV4cG9ydCBjb25zdCBwYWdlcyA9IHtcblx0aG9tZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bG9nbzoge1xuXHRcdGltYWdlOiBgJHtQVUJMSUNfVVJMfS9sb2dvLnBuZ2AsXG5cdFx0cm91dGU6IGJhc2UsXG5cdH0sXG5cdG1lbnU6IFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnaG9tZScsXG5cdFx0XHRyb3V0ZTogYmFzZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdzZXJ2aWNlcycsXG5cdFx0XHRyb3V0ZTogYCR7YmFzZX1zZXJ2aWNlc2AsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnd29ya3MnLFxuXHRcdFx0cm91dGU6IGAke2Jhc2V9d29ya3NgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2Fib3V0Jyxcblx0XHRcdHJvdXRlOiBgJHtiYXNlfWFib3V0YCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdibG9nJyxcblx0XHRcdHJvdXRlOiBgJHtiYXNlfWJsb2dgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2NvbnRhY3QgdXMnLFxuXHRcdFx0cm91dGU6IGAke2Jhc2V9Y29udGFjdC11c2AsXG5cdFx0XHRpc0J1dHRvbjogdHJ1ZSxcblx0XHR9LFxuXHRdLFxuXHRmb290ZXI6IHtcblx0XHRpbnF1aXJ5LFxuXHRcdGNvbHVtbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0bG9nbzoge1xuXHRcdFx0XHRcdGltYWdlOiBgJHtQVUJMSUNfVVJMfS9sb2dvLnBuZ2AsXG5cdFx0XHRcdFx0cm91dGU6IGJhc2UsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnV2UgYXJlIG1vcmUgdGhhbiBhIGRpZ2l0YWwgYWdlbmN5Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1lbnVOYW1lOiAnQ29udGFjdCBVcycsXG5cdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGluazogJ3RlbDowNzI3NzI5MDY4Jyxcblx0XHRcdFx0XHRcdHRleHQ6ICcwNzI3NzI5MDY4Jyxcblx0XHRcdFx0XHRcdGljb246ICdmYXMgZmEtcGhvbmUtdm9sdW1lJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxpbms6ICdtYWlsdG86bW9jYW51LmFsZXhhbmRydTIwQHlhaG9vLnJvJyxcblx0XHRcdFx0XHRcdHRleHQ6ICdtb2NhbnUuYWxleGFuZHJ1MjBAeWFob28ucm8nLFxuXHRcdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1lbnZlbG9wZScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiAnQ29uc3RhbnR6YSwgUm9tYW5pYScsXG5cdFx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLW1hcC1tYXJrZXItYWx0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6ICdNb25kYXkgdG8gRnJpZGF5Jyxcblx0XHRcdFx0XHRcdGljb246ICdmYXIgZmEtY2FsZW5kYXItYWx0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWVudU5hbWU6ICdPdXIgU2VydmljZXMnLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlLFxuXHRcdFx0XHRcdFx0dGV4dDogJ0xpbmsgbmIuMScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3V0ZTogYmFzZSxcblx0XHRcdFx0XHRcdHRleHQ6ICdMaW5rIG5iLjInLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cm91dGU6IGJhc2UsXG5cdFx0XHRcdFx0XHR0ZXh0OiAnTGluayBuYi4zJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlLFxuXHRcdFx0XHRcdFx0dGV4dDogJ0xpbmsgbmIuNCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1lbnVOYW1lOiAnQWJvdXQgVXMnLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlICsgJ2Fib3V0Jyxcblx0XHRcdFx0XHRcdHRleHQ6ICdBYm91dCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3V0ZTogYmFzZSArICdibG9nJyxcblx0XHRcdFx0XHRcdHRleHQ6ICdCbG9nJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvdXRlOiBiYXNlICsgJ3dvcmtzJyxcblx0XHRcdFx0XHRcdHRleHQ6ICdXb3JrcycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3V0ZTogYmFzZSArICdjb250YWN0LXVzJyxcblx0XHRcdFx0XHRcdHRleHQ6ICdDb250YWN0IHVzJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdGNvcHlyaWdodDoge1xuXHRcdFx0dGV4dDogJ0NvcHlyaWdodCAyMDIwIEFsbCByaWdodHMgcmVzZXJ2ZWQnLFxuXHRcdFx0cHJpdmFjeToge1xuXHRcdFx0XHRyb3V0ZTogYmFzZSArICdwcml2YWN5Jyxcblx0XHRcdFx0dGV4dDogJ1ByaXZhY3kgUG9saWN5Jyxcblx0XHRcdH0sXG5cdFx0XHRwcml2YWN5OiB7XG5cdFx0XHRcdHJvdXRlOiBiYXNlICsgJ3Rlcm1zJyxcblx0XHRcdFx0dGV4dDogJ1Rlcm1zIG9mIFVzZScsXG5cdFx0XHR9LFxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cywgbHVjdHVzIG5lYyB1bGxhbWNvcnBlciBtYXR0aXMsIHB1bHZpbmFyIGRhcGlidXMgbGVvLicsXG5cdFx0XHRzb2NpYWxNZWRpYSxcblx0XHR9LFxuXHR9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcblxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IGJhc2UgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ35jL0ZsYW1pbmdvL05hdmlnYXRpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICd+Yy9GbGFtaW5nby9Gb290ZXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuL1NlcnZpY2VzJztcblxuaW1wb3J0IGRhdGEsIHsgcGFnZXMgfSBmcm9tICcuL2RiL2RhdGEnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IGluZGV4OiB0cnVlLCBlbGVtZW50OiA8SG9tZSB7Li4ucGFnZXMuaG9tZX0gLz4gfSxcblx0e1xuXHRcdHBhdGg6IGBzZXJ2aWNlc2AsXG5cdFx0ZWxlbWVudDogPFNlcnZpY2VzIC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogYHdvcmtzYCxcblx0XHRlbGVtZW50OiA8U2VydmljZXMgLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiBgYWJvdXRgLFxuXHRcdGVsZW1lbnQ6IDxTZXJ2aWNlcyAvPixcblx0fSxcblx0e1xuXHRcdHBhdGg6IGBibG9nYCxcblx0XHRlbGVtZW50OiA8U2VydmljZXMgLz4sXG5cdH0sXG5cdHtcblx0XHRwYXRoOiBgY29udGFjdC11c2AsXG5cdFx0ZWxlbWVudDogPFNlcnZpY2VzIC8+LFxuXHR9LFxuXTtcblxuY29uc3QgRmxhbWluZ28gPSAoKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0V2ViRm9udC5sb2FkKHtcblx0XHRcdGdvb2dsZToge1xuXHRcdFx0XHRmYW1pbGllczogWydQb3BwaW5zOjQwMCw4MDAnLCAnUm9ib3RvOjQwMCddLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGltcG9ydCgnLi9zdHlsZS5zY3NzJyk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxiPlxuXHRcdFx0PE5hdmlnYXRpb24gbG9nbz17ZGF0YS5sb2dvfSBtZW51PXtkYXRhLm1lbnV9IC8+XG5cdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8Rm9vdGVyIHsuLi5kYXRhLmZvb3Rlcn0gLz5cblx0XHQ8L2I+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbGFtaW5nbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXMsIE91dGxldCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgSG9tZSBmcm9tICd+L3BhZ2VzL0hvbWUnO1xuaW1wb3J0IEZsYW1pbmdvLCB7IHJvdXRlcyBhcyBmbGFtaW5nb1JvdXRlcyB9IGZyb20gJ34vcGFnZXMvRmxhbWluZ28nO1xuXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHRwYXRoOiBiYXNlLFxuXHRcdGVsZW1lbnQ6IDxIb21lIC8+LFxuXHR9LFxuXHR7XG5cdFx0cGF0aDogYCR7YmFzZX1mbGFtaW5nb2AsXG5cdFx0ZWxlbWVudDogPEZsYW1pbmdvIC8+LFxuXHRcdGNoaWxkcmVuOiBmbGFtaW5nb1JvdXRlcyxcblx0fSxcbl07XG5cbmNvbnN0IFJvdXRlcyA9ICgpID0+IHVzZVJvdXRlcyhyb3V0ZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFJvdXRlcyBmcm9tICd+L3BhZ2VzL1JvdXRlcyc7XG5cbmltcG9ydCAnLi9kZWZhdWx0cy5jc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxCcm93c2VyUm91dGVyPlxuXHRcdDxSb3V0ZXMgLz5cblx0PC9Ccm93c2VyUm91dGVyPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCIkIiwiQnV0dG9uIiwidGV4dCIsImxpbmsiLCJzbWFsbCIsImdob3N0IiwiY2hpbGRyZW4iLCJidXR0b25fc21hbGwiLCJidXR0b24iLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJiYXNlIiwiQ29sdW1uIiwiaWNvbiIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiIsImNsYXNzZXMiLCJoYXNTZXBhcmF0b3IiLCJob3ZlciIsInR5cGUiLCJob3Zlcl9iIiwiaG92ZXJfYmciLCJGbGFtaW5nb0hvbWUiLCJoZWFkZXIiLCJzZWN0aW9ucyIsImhvbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsImFjdGlvbiIsImNvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJpbmRleCIsInNlY3Rpb24iLCJpc0NvbnRhaW5lciIsImhhc0RlZmF1bHRDb2x1bW5zIiwia2V5IiwiY29sdW1uc1R5cGUiLCJ3b3JrIiwiU2VydmljZXMiLCJIb21lIiwicHJvamVjdEJhc2UiLCJQVUJMSUNfVVJMIiwiY3JlYXRlUmVmIiwiU2VhcmNoIiwib25DbG9zZSIsIm9uU2VhcmNoIiwiaW5wdXRSZWYiLCJzZWFyY2giLCJjbG9zZSIsInNlYXJjaF9pbnB1dCIsInNlYXJjaF9pY29uIiwiY3VycmVudCIsInZhbHVlIiwidXNlU3RhdGUiLCJ1c2VNYXRjaCIsInVzZVJlc29sdmVkUGF0aCIsIk5hdmlnYXRpb24iLCJsb2dvIiwibWVudSIsImhpZGVTZWFyY2giLCJpc1NlYXJjaE9uIiwib25DaGFuZ2VTZWFyY2hWaXNpYmlsaXR5Iiwic2VhcmNoVGVybSIsIm9uQ2hhbmdlU2VhcmNoVGVybSIsInNhdmVTZWFyY2hUZXJtIiwidGVybSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0aW9uIiwicm91dGUiLCJsZW5ndGgiLCJpdGVtIiwicmVzb2x2ZWQiLCJtYXRjaCIsInBhdGgiLCJwYXRobmFtZSIsImVuZCIsImlzQnV0dG9uIiwibmFtZSIsIm1lbnVfaXRlbV9hY3RpdmUiLCJtZW51X2l0ZW0iLCJ2YWwiLCJJbnF1aXJ5Iiwic29jaWFsTWVkaWEiLCJzb2NpYWxfbWVkaWEiLCJGb290ZXIiLCJpbnF1aXJ5IiwiY29weXJpZ2h0IiwiZm9vdGVyIiwibWVudXMiLCJpY29uX3doaXRlIiwic29jaWFsX21lZGlhX3NtYWxsIiwicGFnZXMiLCJtZW51TmFtZSIsIml0ZW1zIiwicHJpdmFjeSIsInVzZUVmZmVjdCIsIldlYkZvbnQiLCJPdXRsZXQiLCJkYXRhIiwicm91dGVzIiwiZWxlbWVudCIsIkZsYW1pbmdvIiwibG9hZCIsImdvb2dsZSIsImZhbWlsaWVzIiwidXNlUm91dGVzIiwiZmxhbWluZ29Sb3V0ZXMiLCJSb3V0ZXMiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==