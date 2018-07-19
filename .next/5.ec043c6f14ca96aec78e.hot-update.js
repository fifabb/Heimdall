webpackHotUpdate(5,{

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__("./config/list/index.js");

/* unused harmony default export */ var _unused_webpack_default_export = ({
  list: __WEBPACK_IMPORTED_MODULE_0__list__["default"]
});

/***/ }),

/***/ "./config/list/ffm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  columns: [{
    title: '',
    dataIndex: 'avatar'
  }, {
    title: '评分',
    dataIndex: 'overall'
  }, {
    title: '姓名',
    dataIndex: 'real_name'
  }, {
    title: '位置',
    dataIndex: 'position'
  }, {
    title: '俱乐部',
    dataIndex: 'club_logo'
  }, {
    title: '国家',
    dataIndex: 'nation_logo'
  }, {
    title: '活动',
    dataIndex: 'activity'
  }, {
    title: '步频',
    dataIndex: 'pace'
  }, {
    title: '射术',
    dataIndex: 'shooting'
  }, {
    title: '传球',
    dataIndex: 'passing'
  }, {
    title: '灵活',
    dataIndex: 'agilty'
  }, {
    title: '体格',
    dataIndex: 'body'
  }, {
    title: '合计',
    dataIndex: 'total'
  }]
});

/***/ }),

/***/ "./config/list/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ffm__ = __webpack_require__("./config/list/ffm.js");
/* unused harmony reexport ffm */



/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./pages/ffm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Search__ = __webpack_require__("./components/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PlayerList__ = __webpack_require__("./components/PlayerList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./config/index.js");
var _jsxFileName = "/Users/maopy/www/fifabb/Heimdall/pages/ffm.js";








var Page = function Page() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-359860292" + " " + "page-ffm"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Search__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlayerList__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/ffm/player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-359860292"
  }, "FIFA Mobile Player")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "359860292",
    css: ".page-ffm.jsx-359860292{padding:20px 20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ZmbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHNkIsb0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2ZmbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFvcHkvd3d3L2ZpZmFiYi9IZWltZGFsbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2gnXG5pbXBvcnQgUGxheWVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllckxpc3QnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZmZtXCI+XG4gICAgPFNlYXJjaCAvPlxuICAgIDxQbGF5ZXJMaXN0IC8+XG4gICAgPExpbmsgaHJlZj1cIi9mZm0vcGxheWVyXCI+XG4gICAgICA8YT5GSUZBIE1vYmlsZSBQbGF5ZXI8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wYWdlLWZmbSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+ICg8TGF5b3V0PjxQYWdlPjwvUGFnZT48L0xheW91dD4pXG4iXX0= */\n/*@ sourceURL=pages/ffm.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ffm")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.ec043c6f14ca96aec78e.hot-update.js.map