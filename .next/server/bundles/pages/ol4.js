module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/row/style/css"
var css_ = __webpack_require__(3);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col/style/css"
var style_css_ = __webpack_require__(5);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(6);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.js


var linkStyle = {
  marginLeft: 20
};

var Header_Header = function Header() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", null, "FIFABB")), external__react__default.a.createElement(link__default.a, {
    href: "/ol4"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "FIFA OL4")), external__react__default.a.createElement(link__default.a, {
    href: "/ffm"
  }, external__react__default.a.createElement("a", {
    style: linkStyle
  }, "FIFA Mobile")));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/MyLayout.js








var layoutStyle = {};

var MyLayout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return external__react__default.a.createElement(row__default.a, {
    style: layoutStyle
  }, external__react__default.a.createElement(col__default.a, {
    span: 24
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-172840546"
  }), external__react__default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-172840546"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    className: "jsx-172840546"
  })), external__react__default.a.createElement(components_Header, null), children), external__react__default.a.createElement(style__default.a, {
    styleId: "172840546",
    css: ["body{margin:0;}"]
  }));
};

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout__ = __webpack_require__(7);



var Page = function Page() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "This is the ol4 page"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MyLayout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Page, null));
});

/***/ })
/******/ ]);