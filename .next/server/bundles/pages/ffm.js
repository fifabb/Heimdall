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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/MyLayout.js + 1 modules
var MyLayout = __webpack_require__(7);

// EXTERNAL MODULE: external "antd/lib/button/style/css"
var css_ = __webpack_require__(11);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(12);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row/style/css"
var style_css_ = __webpack_require__(3);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(4);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col/style/css"
var col_style_css_ = __webpack_require__(5);
var col_style_css__default = /*#__PURE__*/__webpack_require__.n(col_style_css_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(6);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/input/style/css"
var input_style_css_ = __webpack_require__(13);
var input_style_css__default = /*#__PURE__*/__webpack_require__.n(input_style_css_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(14);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/form/style/css"
var form_style_css_ = __webpack_require__(15);
var form_style_css__default = /*#__PURE__*/__webpack_require__.n(form_style_css_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(16);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// CONCATENATED MODULE: ./components/Search.js












var FormItem = form__default.a.Item;

var Search_Search = function Search(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-2846853666"
  }, external__react__default.a.createElement(form__default.a, {
    className: "search-form"
  }, external__react__default.a.createElement(row__default.a, null, external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u7403\u5458\u59D3\u540D"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u4F4D\u7F6E"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u6D3B\u52A8"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u56FD\u5BB6"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u8054\u8D5B"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u7403\u961F"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u5929\u8D4B"
  }, external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(col__default.a, {
    span: 6
  }, external__react__default.a.createElement(FormItem, {
    label: "\u5E38\u7528\u811A"
  }, external__react__default.a.createElement(input__default.a, null)))), external__react__default.a.createElement(row__default.a, null, external__react__default.a.createElement(col__default.a, {
    span: 24,
    style: {
      textAlign: 'right'
    }
  }, external__react__default.a.createElement(button__default.a, {
    type: "primary",
    htmlType: "submit"
  }, "\u641C\u7D22"), external__react__default.a.createElement(button__default.a, {
    className: "btn-clear"
  }, "\u6E05\u7A7A")))), external__react__default.a.createElement(style__default.a, {
    styleId: "2846853666",
    css: [".search-form{padding:24px;background:#fbfbfb;border:1px solid #d9d9d9;borderR-radius:6px;}", ".search-form .ant-form-item{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".search-form .ant-form-item-label{width:100px;}", ".search-form .ant-form-item-control-wrapper{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}", ".search-form .btn-clear{margin-left:8px;}"]
  }));
};

/* harmony default export */ var components_Search = (Search_Search);
// EXTERNAL MODULE: external "antd/lib/table/style/css"
var table_style_css_ = __webpack_require__(17);
var table_style_css__default = /*#__PURE__*/__webpack_require__.n(table_style_css_);

// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__(18);
var table__default = /*#__PURE__*/__webpack_require__.n(table_);

// CONCATENATED MODULE: ./components/PlayerList.js




var PlayerList_PlayerList = function PlayerList(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      payload = _ref.payload;
  return external__react__default.a.createElement("div", {
    className: className
  }, external__react__default.a.createElement(table__default.a, {
    columns: columns,
    dataSource: payload
  }));
};

/* harmony default export */ var components_PlayerList = (PlayerList_PlayerList);
// CONCATENATED MODULE: ./config/list/ffm.js
/* harmony default export */ var ffm = ({
  columns: [{
    title: '',
    dataIndex: 'avatar'
  }, {
    title: '评分',
    dataIndex: 'Overall'
  }, {
    title: '姓名',
    dataIndex: 'Chinese Name'
  }, {
    title: '位置',
    dataIndex: 'Position'
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
// CONCATENATED MODULE: ./config/list/index.js

/* harmony default export */ var list = ({
  ffm: ffm
});
// CONCATENATED MODULE: ./config/index.js

/* harmony default export */ var config = ({
  list: list
});
// CONCATENATED MODULE: ./database/player/ffm/index.js
/* harmony default export */ var player_ffm = ([{
  "Overall": 89,
  "Acceleration": 98,
  "Sprint Speed": 87,
  "Finishing": 88,
  "Long Shot": 77,
  "Shot Power": 78,
  "Positioning": 83,
  "Crossing": 90,
  "Short Passing": 91,
  "Long Passing": 84,
  "Free Kick": 75,
  "Awareness": 60,
  "Reactions": 94,
  "Ball Control": 95,
  "Dribbling": 103,
  "Composure": 90,
  "Heading": 58,
  "Marking": 60,
  "Tackling": 56,
  "Strength": 65,
  "Aggression": 70,
  // "GK Diving":72,"GK Positioning":74,"Handling":77,"Reflexes":67,"Passing":48,"Physical":54,
  "Chinese Name": "贝尔纳多·席尔瓦",
  "English Name": "Bernardo Silva",
  "ID": "218667_AS",
  "Season": "02",
  "Position": "RW",
  "Skill Boost": "盘带",
  "Club": "曼彻斯特城",
  "League": "英格兰足球超级联赛",
  "Nation": "葡萄牙",
  "Height": 173,
  "Strong Foot": "左脚"
}, {
  "Overall": 88,
  "Acceleration": 85,
  "Sprint Speed": 86,
  "Finishing": 55,
  "Long Shot": 65,
  "Shot Power": 83,
  "Positioning": 92,
  "Crossing": 65,
  "Short Passing": 84,
  "Long Passing": 76,
  "Free Kick": 75,
  "Awareness": 86,
  "Reactions": 89,
  "Ball Control": 81,
  "Dribbling": 75,
  "Composure": 85,
  "Heading": 91,
  "Marking": 92,
  "Tackling": 93,
  "Strength": 93,
  "Aggression": 95,
  "Chinese Name": "林德洛夫",
  "English Name": "V. Lindelöf",
  "ID": "221660",
  "Season": "02",
  "Position": "CB",
  "Skill Boost": "镇定",
  "Club": "曼彻斯特联",
  "League": "英格兰足球超级联赛",
  "Nation": "瑞典",
  "Height": 187,
  "Strong Foot": "右脚"
}, {
  "Overall": 88,
  "Acceleration": 90,
  "Sprint Speed": 80,
  "Finishing": 86,
  "Long Shot": 88,
  "Shot Power": 88,
  "Positioning": 91,
  "Crossing": 75,
  "Short Passing": 96,
  "Long Passing": 91,
  "Free Kick": 80,
  "Awareness": 92,
  "Reactions": 95,
  "Ball Control": 92,
  "Dribbling": 89,
  "Composure": 86,
  "Heading": 87,
  "Marking": 85,
  "Tackling": 89,
  "Strength": 88,
  "Aggression": 87,
  "Chinese Name": "托利索",
  "English Name": "C. Tolisso",
  "ID": "219683",
  "Season": "02",
  "Position": "CM",
  "Skill Boost": "队长",
  "Club": "拜仁慕尼黑",
  "League": "德国足球甲级联赛",
  "Nation": "法国",
  "Height": 181,
  "Strong Foot": "右脚"
}, {
  "Overall": 87,
  "Acceleration": 107,
  "Sprint Speed": 103,
  "Finishing": 73,
  "Long Shot": 73,
  "Shot Power": 89,
  "Positioning": 88,
  "Crossing": 96,
  "Short Passing": 88,
  "Long Passing": 84,
  "Free Kick": 76,
  "Awareness": 68,
  "Reactions": 87,
  "Ball Control": 90,
  "Dribbling": 89,
  "Composure": 80,
  "Heading": 75,
  "Marking": 85,
  "Tackling": 93,
  "Strength": 75,
  "Aggression": 82,
  "Chinese Name": "若昂·坎斯洛",
  "English Name": "João Cancelo",
  "ID": "210514",
  "Season": "02",
  "Position": "RB",
  "Skill Boost": "步频",
  "Club": "国际米兰",
  "League": "意大利足球甲级联赛",
  "Nation": "葡萄牙",
  "Height": 182,
  "Strong Foot": "右脚"
}, {
  "Overall": 87,
  "Sprint Speed": 73,
  "Acceleration": 73,
  "Strength": 96,
  "Ball Control": 91,
  "Dribbling": 78,
  "Heading": 92,
  "Finishing": 61,
  "Shot Power": 89,
  "Long Shot": 80,
  "Positioning": 65,
  "Tackling": 97,
  "Marking": 81,
  "Aggression": 111,
  "Composure": 87,
  "Awareness": 97,
  "Reactions": 84,
  "Free Kick": 75,
  "Short Passing": 96,
  "Long Passing": 95,
  "Crossing": 74,
  "Chinese Name": "莫塔",
  "English Name": "",
  "ID": "49370",
  "Season": "02",
  "Position": "CDM",
  "Skill Boost": "持球",
  "Club": "巴黎圣日耳曼",
  "League": "法国足球甲级联赛",
  "Nation": "意大利",
  "Height": 187,
  "Strong Foot": "左脚"
}, {
  "Overall": 86,
  "Sprint Speed": 71,
  "Acceleration": 65,
  "Strength": 72,
  "Ball Control": 55,
  "Dribbling": 50,
  "Heading": 65,
  // "Finishing":61,"Shot Power":89,"Long Shot":80,"Positioning":65,
  "GK Diving": 92,
  "GK Positioning": 87,
  "Reflexes": 96,
  "Handling": 90,
  "Tackling": 45,
  "Marking": 55,
  "Aggression": 60,
  "Composure": 99,
  "Awareness": 60,
  "Reactions": 85,
  "Free Kick": 40,
  "Short Passing": 60,
  "Long Passing": 82,
  "Crossing": 35,
  "Chinese Name": "阿里萨瓦拉加",
  "English Name": "",
  "ID": "206585",
  "Season": "02",
  "Position": "GK",
  "Skill Boost": "门将鱼跃扑救能力",
  "Club": "毕尔巴鄂竞技",
  "League": "西班牙足球甲级联赛",
  "Nation": "西班牙",
  "Height": 188,
  "Strong Foot": "右脚"
}, {
  "Overall": 86,
  "Sprint Speed": 88,
  "Acceleration": 86,
  "Strength": 80,
  "Ball Control": 90,
  "Dribbling": 94,
  "Heading": 73,
  "Finishing": 88,
  "Shot Power": 85,
  "Long Shot": 80,
  "Positioning": 87,
  "Tackling": 80,
  "Marking": 83,
  "Aggression": 81,
  "Composure": 86,
  "Awareness": 89,
  "Reactions": 94,
  "Free Kick": 78,
  "Short Passing": 92,
  "Long Passing": 90,
  "Crossing": 84,
  "Chinese Name": "桑松",
  "English Name": "",
  "ID": "210896",
  "Season": "02",
  "Position": "CAM",
  "Skill Boost": "速度",
  "Club": "马赛",
  "League": "法国足球甲级联赛",
  "Nation": "法国",
  "Height": 180,
  "Strong Foot": "右脚"
}, {
  "Overall": 85,
  "Sprint Speed": 80,
  "Acceleration": 78,
  "Strength": 88,
  "Ball Control": 75,
  "Dribbling": 70,
  "Heading": 86,
  "Finishing": 35,
  "Shot Power": 66,
  "Long Shot": 55,
  "Positioning": 68,
  "Tackling": 94,
  "Marking": 89,
  "Aggression": 94,
  "Composure": 83,
  "Awareness": 83,
  "Reactions": 86,
  "Free Kick": 40,
  "Short Passing": 78,
  "Long Passing": 72,
  "Crossing": 45,
  "Chinese Name": "罗马格洛尼",
  "English Name": "",
  "ID": "210413",
  "Season": "02",
  "Position": "CB",
  "Skill Boost": "抢断",
  "Club": "AC米兰",
  "League": "意大利足球甲级联赛",
  "Nation": "意大利",
  "Height": 185,
  "Strong Foot": "左脚"
}, {
  "Overall": 85,
  "Sprint Speed": 88,
  "Acceleration": 94,
  "Strength": 79,
  "Ball Control": 94,
  "Dribbling": 94,
  "Heading": 62,
  "Finishing": 88,
  "Shot Power": 94,
  "Long Shot": 82,
  "Positioning": 91,
  "Tackling": 42,
  "Marking": 37,
  "Aggression": 62,
  "Composure": 73,
  "Awareness": 73,
  "Reactions": 86,
  "Free Kick": 70,
  "Short Passing": 88,
  "Long Passing": 71,
  "Crossing": 67,
  "Chinese Name": "菲利普",
  "English Name": "",
  "ID": "216497",
  "Season": "02",
  "Position": "LW",
  "Skill Boost": "第二前锋",
  "Club": "多特蒙德",
  "League": "德国足球甲级联赛",
  "Nation": "德国",
  "Height": 183,
  "Strong Foot": "右脚"
}, {
  "Overall": 84,
  "Sprint Speed": 92,
  "Acceleration": 93,
  "Strength": 77,
  "Ball Control": 87,
  "Dribbling": 80,
  "Heading": 79,
  "Finishing": 70,
  "Shot Power": 78,
  "Long Shot": 68,
  "Positioning": 78,
  "Tackling": 89,
  "Marking": 89,
  "Aggression": 87,
  "Composure": 76,
  "Awareness": 72,
  "Reactions": 82,
  "Free Kick": 47,
  "Short Passing": 77,
  "Long Passing": 69,
  "Crossing": 94,
  "Chinese Name": "罗伯逊",
  "English Name": "",
  "ID": "216267",
  "Season": "02",
  "Position": "LB",
  "Skill Boost": "进攻性",
  "Club": "利物浦",
  "League": "英格兰足球超级联赛",
  "Nation": "苏格兰",
  "Height": 178,
  "Strong Foot": "左脚"
}, {
  "Overall": 84,
  "Sprint Speed": 88,
  "Acceleration": 80,
  "Strength": 92,
  "Ball Control": 82,
  "Dribbling": 82,
  "Heading": 86,
  "Finishing": 87,
  "Shot Power": 87,
  "Long Shot": 77,
  "Positioning": 87,
  "Tackling": 44,
  "Marking": 42,
  "Aggression": 84,
  "Composure": 67,
  "Awareness": 76,
  "Reactions": 89,
  "Free Kick": 46,
  "Short Passing": 75,
  "Long Passing": 56,
  "Crossing": 57,
  "Chinese Name": "塞尔克",
  "English Name": "",
  "ID": "212626",
  "Season": "02",
  "Position": "ST",
  "Skill Boost": "射门力量",
  "Club": "柏林赫塔",
  "League": "德国足球甲级联赛",
  "Nation": "德国",
  "Height": 192,
  "Strong Foot": "右脚"
}, {
  "Overall": 83,
  "Acceleration": 88,
  "Sprint Speed": 81,
  "Finishing": 80,
  "Long Shot": 68,
  "Shot Power": 75,
  "Positioning": 79,
  "Crossing": 83,
  "Short Passing": 86,
  "Long Passing": 80,
  "Free Kick": 66,
  "Awareness": 64,
  "Reactions": 87,
  "Ball Control": 90,
  "Dribbling": 93,
  "Composure": 87,
  "Heading": 54,
  "Marking": 51,
  "Tackling": 49,
  "Strength": 57,
  "Aggression": 60,
  "Chinese Name": "贝尔纳多·席尔瓦",
  "English Name": "Bernardo Silva",
  "ID": "218667_AS",
  "Season": "03",
  "Position": "CAM",
  "Skill Boost": "远射",
  "Club": "曼彻斯特城",
  "League": "英格兰足球超级联赛",
  "Nation": "葡萄牙",
  "Height": 173,
  "Strong Foot": "左脚"
}, {
  "Overall": 82,
  "Sprint Speed": 78,
  "Acceleration": 74,
  "Strength": 87,
  "Ball Control": 68,
  "Dribbling": 65,
  "Heading": 84,
  "Finishing": 44,
  "Shot Power": 76,
  "Long Shot": 60,
  "Positioning": 66,
  "Tackling": 87,
  "Marking": 85,
  "Aggression": 88,
  "Composure": 79,
  "Awareness": 83,
  "Reactions": 85,
  "Free Kick": 68,
  "Short Passing": 80,
  "Long Passing": 72,
  "Crossing": 52,
  "Chinese Name": "林德洛夫",
  "English Name": "",
  "ID": "221660",
  "Season": "03",
  "Position": "RB",
  "Skill Boost": "防守",
  "Club": "曼彻斯特联",
  "League": "英格兰足球超级联赛",
  "Nation": "瑞典",
  "Height": 187,
  "Strong Foot": "右脚"
}, {
  "Overall": 82,
  "Sprint Speed": 77,
  "Acceleration": 85,
  "Strength": 83,
  "Ball Control": 86,
  "Dribbling": 84,
  "Heading": 84,
  "Finishing": 82,
  "Shot Power": 85,
  "Long Shot": 86,
  "Positioning": 86,
  "Tackling": 87,
  "Marking": 79,
  "Aggression": 86,
  "Composure": 77,
  "Awareness": 86,
  "Reactions": 91,
  "Free Kick": 76,
  "Short Passing": 91,
  "Long Passing": 88,
  "Crossing": 69,
  "Chinese Name": "托利索",
  "English Name": "",
  "ID": "219683",
  "Season": "03",
  "Position": "CM",
  "Skill Boost": "多面手",
  "Club": "拜仁慕尼黑",
  "League": "德国足球甲级联赛",
  "Nation": "法国",
  "Height": 181,
  "Strong Foot": "右脚"
}, {
  "Overall": 81,
  "Sprint Speed": 97,
  "Acceleration": 100,
  "Strength": 71,
  "Ball Control": 84,
  "Dribbling": 84,
  "Heading": 70,
  "Finishing": 61,
  "Shot Power": 87,
  "Long Shot": 68,
  "Positioning": 86,
  "Tackling": 84,
  "Marking": 79,
  "Aggression": 75,
  "Composure": 73,
  "Awareness": 63,
  "Reactions": 84,
  "Free Kick": 72,
  "Short Passing": 84,
  "Long Passing": 77,
  "Crossing": 85,
  "Chinese Name": "若昂·坎斯洛",
  "English Name": "João Cancelo",
  "ID": "210514",
  "Season": "03",
  "Position": "RW",
  "Skill Boost": "加速度",
  "Club": "国际米兰",
  "League": "意大利足球甲级联赛",
  "Nation": "葡萄牙",
  "Height": 182,
  "Strong Foot": "右脚"
}, {
  "Overall": 81,
  "Sprint Speed": 58,
  "Acceleration": 57,
  "Strength": 92,
  "Ball Control": 87,
  "Dribbling": 70,
  "Heading": 86,
  "Finishing": 58,
  "Shot Power": 86,
  "Long Shot": 77,
  "Positioning": 60,
  "Tackling": 89,
  "Marking": 76,
  "Aggression": 104,
  "Composure": 84,
  "Awareness": 93,
  "Reactions": 82,
  "Free Kick": 71,
  "Short Passing": 90,
  "Long Passing": 90,
  "Crossing": 69,
  "Chinese Name": "莫塔",
  "English Name": "",
  "ID": "49370",
  "Season": "03",
  "Position": "CB",
  "Skill Boost": "力量",
  "Club": "巴黎圣日耳曼",
  "League": "法国足球甲级联赛",
  "Nation": "意大利",
  "Height": 187,
  "Strong Foot": "左脚"
}, {
  "Overall": 80,
  "Sprint Speed": 60,
  "Acceleration": 50,
  "Strength": 65,
  "Ball Control": 47,
  "Dribbling": 45,
  "Heading": 60,
  "GK Diving": 84,
  "GK Positioning": 80,
  "Reflexes": 90,
  "Handling": 85,
  "Tackling": 40,
  "Marking": 50,
  "Aggression": 50,
  "Composure": 81,
  "Awareness": 50,
  "Reactions": 82,
  "Free Kick": 34,
  "Short Passing": 50,
  "Long Passing": 79,
  "Crossing": 30,
  "Chinese Name": "阿里萨瓦拉加",
  "English Name": "",
  "ID": "206585",
  "Season": "03",
  "Position": "GK",
  "Skill Boost": "门将反应",
  "Club": "毕尔巴鄂竞技",
  "League": "西班牙足球甲级联赛",
  "Nation": "西班牙",
  "Height": 188,
  "Strong Foot": "右脚"
}, {
  "Overall": 80,
  "Sprint Speed": 80,
  "Acceleration": 82,
  "Strength": 77,
  "Ball Control": 85,
  "Dribbling": 86,
  "Heading": 71,
  "Finishing": 80,
  "Shot Power": 81,
  "Long Shot": 76,
  "Positioning": 79,
  "Tackling": 77,
  "Marking": 79,
  "Aggression": 78,
  "Composure": 79,
  "Awareness": 86,
  "Reactions": 85,
  "Free Kick": 71,
  "Short Passing": 88,
  "Long Passing": 88,
  "Crossing": 81,
  "Chinese Name": "桑松",
  "English Name": "",
  "ID": "210896",
  "Season": "03",
  "Position": "CDM",
  "Skill Boost": "防守意识",
  "Club": "马赛",
  "League": "法国足球甲级联赛",
  "Nation": "法国",
  "Height": 180,
  "Strong Foot": "右脚"
}, {
  "Overall": 79,
  "Sprint Speed": 72,
  "Acceleration": 68,
  "Strength": 80,
  "Ball Control": 68,
  "Dribbling": 65,
  "Heading": 80,
  "Finishing": 26,
  "Shot Power": 60,
  "Long Shot": 46,
  "Positioning": 62,
  "Tackling": 85,
  "Marking": 83,
  "Aggression": 85,
  "Composure": 80,
  "Awareness": 76,
  "Reactions": 77,
  "Free Kick": 30,
  "Short Passing": 70,
  "Long Passing": 70,
  "Crossing": 40,
  "Chinese Name": "罗马格洛尼",
  "English Name": "",
  "ID": "210413",
  "Season": "03",
  "Position": "CB",
  "Skill Boost": "体格",
  "Club": "AC米兰",
  "League": "意大利足球甲级联赛",
  "Nation": "意大利",
  "Height": 185,
  "Strong Foot": "左脚"
}, {
  "Overall": 79,
  "Sprint Speed": 84,
  "Acceleration": 86,
  "Strength": 72,
  "Ball Control": 88,
  "Dribbling": 88,
  "Heading": 60,
  "Finishing": 79,
  "Shot Power": 85,
  "Long Shot": 74,
  "Positioning": 82,
  "Tackling": 36,
  "Marking": 31,
  "Aggression": 60,
  "Composure": 70,
  "Awareness": 68,
  "Reactions": 81,
  "Free Kick": 64,
  "Short Passing": 80,
  "Long Passing": 65,
  "Crossing": 66,
  "Chinese Name": "菲利普",
  "English Name": "",
  "ID": "216497",
  "Season": "03",
  "Position": "ST",
  "Skill Boost": "灵活性",
  "Club": "多特蒙德",
  "League": "德国足球甲级联赛",
  "Nation": "德国",
  "Height": 183,
  "Strong Foot": "右脚"
}, {
  "Overall": 78,
  "Sprint Speed": 85,
  "Acceleration": 82,
  "Strength": 72,
  "Ball Control": 79,
  "Dribbling": 77,
  "Heading": 70,
  "Finishing": 64,
  "Shot Power": 72,
  "Long Shot": 65,
  "Positioning": 71,
  "Tackling": 80,
  "Marking": 78,
  "Aggression": 75,
  "Composure": 70,
  "Awareness": 67,
  "Reactions": 76,
  "Free Kick": 40,
  "Short Passing": 74,
  "Long Passing": 63,
  "Crossing": 86,
  "Chinese Name": "罗伯逊",
  "English Name": "",
  "ID": "216267",
  "Season": "03",
  "Position": "LM",
  "Skill Boost": "传球",
  "Club": "利物浦",
  "League": "英格兰足球超级联赛",
  "Nation": "苏格兰",
  "Height": 178,
  "Strong Foot": "左脚"
}, {
  "Overall": 78,
  "Sprint Speed": 80,
  "Acceleration": 72,
  "Strength": 82,
  "Ball Control": 77,
  "Dribbling": 74,
  "Heading": 77,
  "Finishing": 80,
  "Shot Power": 80,
  "Long Shot": 69,
  "Positioning": 81,
  "Tackling": 38,
  "Marking": 36,
  "Aggression": 78,
  "Composure": 65,
  "Awareness": 70,
  "Reactions": 79,
  "Free Kick": 40,
  "Short Passing": 67,
  "Long Passing": 53,
  "Crossing": 51,
  "Chinese Name": "塞尔克",
  "English Name": "",
  "ID": "212626",
  "Season": "03",
  "Position": "ST",
  "Skill Boost": "头球",
  "Club": "柏林赫塔",
  "League": "德国足球甲级联赛",
  "Nation": "德国",
  "Height": 192,
  "Strong Foot": "右脚"
}]);
// CONCATENATED MODULE: ./database/player/index.js

/* harmony default export */ var player = ({
  ffm: player_ffm
});
// CONCATENATED MODULE: ./database/index.js

/* harmony default export */ var database = ({
  player: player
});
// CONCATENATED MODULE: ./pages/ffm.js








var scoped = resolveScopedStyles(external__react__default.a.createElement("scope", {
  className: "jsx-818978699"
}, external__react__default.a.createElement(style__default.a, {
  styleId: "818978699",
  css: [".ffm-player-list.jsx-818978699{margin-top:20px;}"]
})));

var ffm_Page = function Page() {
  return external__react__default.a.createElement("div", {
    className: "jsx-359860292" + " " + "page-ffm"
  }, external__react__default.a.createElement(components_Search, null), external__react__default.a.createElement(components_PlayerList, {
    className: "ffm-player-list ".concat(scoped.className),
    columns: config.list.ffm.columns,
    payload: database.player.ffm
  }), external__react__default.a.createElement(link__default.a, {
    href: "/ffm/player"
  }, external__react__default.a.createElement("a", {
    className: "jsx-359860292"
  }, "FIFA Mobile Player")), external__react__default.a.createElement(style__default.a, {
    styleId: "359860292",
    css: [".page-ffm.jsx-359860292{padding:20px 20px 0;}"]
  }));
};

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
}

/* harmony default export */ var pages_ffm = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(MyLayout["a" /* default */], null, external__react__default.a.createElement(ffm_Page, null));
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table/style/css");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ })
/******/ ]);