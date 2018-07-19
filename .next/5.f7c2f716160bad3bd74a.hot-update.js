webpackHotUpdate(5,{

/***/ "./database/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__("./database/player/index.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  player: __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]
});

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__database__ = __webpack_require__("./database/index.js");
var _jsxFileName = "/Users/maopy/www/fifabb/Heimdall/pages/ffm.js";








var scoped = resolveScopedStyles(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("scope", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  className: "jsx-818978699"
}, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
  styleId: "818978699",
  css: ".ffm-player-list.jsx-818978699{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ZmbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHeUIsZ0JBQ2xCIiwiZmlsZSI6InBhZ2VzL2ZmbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFvcHkvd3d3L2ZpZmFiYi9IZWltZGFsbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2gnXG5pbXBvcnQgUGxheWVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllckxpc3QnXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gJy4uL2RhdGFiYXNlJ1xuXG5jb25zdCBzY29wZWQgPSByZXNvbHZlU2NvcGVkU3R5bGVzKFxuICA8c2NvcGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmZmbS1wbGF5ZXItbGlzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3Njb3BlPlxuKVxuXG5jb25zdCBQYWdlID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZmZtXCI+XG4gICAgPFNlYXJjaCAvPlxuICAgIDxQbGF5ZXJMaXN0XG4gICAgICBjbGFzc05hbWU9e2BmZm0tcGxheWVyLWxpc3QgJHtzY29wZWQuY2xhc3NOYW1lfWB9XG4gICAgICBjb2x1bW5zPXtjb25maWcubGlzdC5mZm0uY29sdW1uc31cbiAgICAgIHBheWxvYWQ9e2RhdGFiYXNlLnBsYXllci5mZm19XG4gICAgLz5cbiAgICA8TGluayBocmVmPVwiL2ZmbS9wbGF5ZXJcIj5cbiAgICAgIDxhPkZJRkEgTW9iaWxlIFBsYXllcjwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBhZ2UtZmZtIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZnVuY3Rpb24gcmVzb2x2ZVNjb3BlZFN0eWxlcyhzY29wZSkge1xuICByZXR1cm4ge1xuICAgIGNsYXNzTmFtZTogc2NvcGUucHJvcHMuY2xhc3NOYW1lLFxuICAgIHN0eWxlczogc2NvcGUucHJvcHMuY2hpbGRyZW5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoPExheW91dD48UGFnZT48L1BhZ2U+PC9MYXlvdXQ+KVxuIl19 */\n/*@ sourceURL=pages/ffm.js */"
})));

var Page = function Page() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-359860292" + " " + "page-ffm"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Search__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlayerList__["a" /* default */], {
    className: "ffm-player-list ".concat(scoped.className),
    columns: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].list.ffm.columns,
    payload: __WEBPACK_IMPORTED_MODULE_7__database__["a" /* default */].player.ffm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/ffm/player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-359860292"
  }, "FIFA Mobile Player")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "359860292",
    css: ".page-ffm.jsx-359860292{padding:20px 20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ZmbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmdCLEFBRzZCLG9CQUN0QiIsImZpbGUiOiJwYWdlcy9mZm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hb3B5L3d3dy9maWZhYmIvSGVpbWRhbGwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoJ1xuaW1wb3J0IFBsYXllckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXJMaXN0J1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZSBmcm9tICcuLi9kYXRhYmFzZSdcblxuY29uc3Qgc2NvcGVkID0gcmVzb2x2ZVNjb3BlZFN0eWxlcyhcbiAgPHNjb3BlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mZm0tcGxheWVyLWxpc3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zY29wZT5cbilcblxuY29uc3QgUGFnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZmbVwiPlxuICAgIDxTZWFyY2ggLz5cbiAgICA8UGxheWVyTGlzdFxuICAgICAgY2xhc3NOYW1lPXtgZmZtLXBsYXllci1saXN0ICR7c2NvcGVkLmNsYXNzTmFtZX1gfVxuICAgICAgY29sdW1ucz17Y29uZmlnLmxpc3QuZmZtLmNvbHVtbnN9XG4gICAgICBwYXlsb2FkPXtkYXRhYmFzZS5wbGF5ZXIuZmZtfVxuICAgIC8+XG4gICAgPExpbmsgaHJlZj1cIi9mZm0vcGxheWVyXCI+XG4gICAgICA8YT5GSUZBIE1vYmlsZSBQbGF5ZXI8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wYWdlLWZmbSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmZ1bmN0aW9uIHJlc29sdmVTY29wZWRTdHlsZXMoc2NvcGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWU6IHNjb3BlLnByb3BzLmNsYXNzTmFtZSxcbiAgICBzdHlsZXM6IHNjb3BlLnByb3BzLmNoaWxkcmVuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKDxMYXlvdXQ+PFBhZ2U+PC9QYWdlPjwvTGF5b3V0PilcbiJdfQ== */\n/*@ sourceURL=pages/ffm.js */"
  }));
};

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
//# sourceMappingURL=5.f7c2f716160bad3bd74a.hot-update.js.map