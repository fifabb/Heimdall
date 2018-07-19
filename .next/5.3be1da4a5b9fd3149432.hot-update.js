webpackHotUpdate(5,{

/***/ "./components/PlayerList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table_style_css__ = __webpack_require__("./node_modules/antd/lib/table/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_table_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_table_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_table__ = __webpack_require__("./node_modules/antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);


var _jsxFileName = "/Users/maopy/www/fifabb/Heimdall/components/PlayerList.js";


var PlayerList = function PlayerList() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_table___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (PlayerList);

/***/ }),

/***/ "./node_modules/add-dom-event-listener/lib/EventBaseObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/add-dom-event-listener/lib/EventObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__("./node_modules/add-dom-event-listener/lib/EventBaseObject.js");

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/add-dom-event-listener/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__("./node_modules/add-dom-event-listener/lib/EventObject.js");

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/_util/openAnimation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cssAnimation = __webpack_require__("./node_modules/css-animation/es/index.js");

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

var _raf = __webpack_require__("./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function animate(node, show, done) {
    var height = void 0;
    var requestAnimationFrameId = void 0;
    return (0, _cssAnimation2['default'])(node, 'ant-motion-collapse', {
        start: function start() {
            if (!show) {
                node.style.height = node.offsetHeight + 'px';
                node.style.opacity = '1';
            } else {
                height = node.offsetHeight;
                node.style.height = '0px';
                node.style.opacity = '0';
            }
        },
        active: function active() {
            if (requestAnimationFrameId) {
                _raf2['default'].cancel(requestAnimationFrameId);
            }
            requestAnimationFrameId = (0, _raf2['default'])(function () {
                node.style.height = (show ? height : 0) + 'px';
                node.style.opacity = show ? '1' : '0';
            });
        },
        end: function end() {
            if (requestAnimationFrameId) {
                _raf2['default'].cancel(requestAnimationFrameId);
            }
            node.style.height = '';
            node.style.opacity = '';
            done();
        }
    });
}
var animation = {
    enter: function enter(node, done) {
        return animate(node, true, done);
    },
    leave: function leave(node, done) {
        return animate(node, false, done);
    },
    appear: function appear(node, done) {
        return animate(node, true, done);
    }
};
exports['default'] = animation;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__("./node_modules/antd/lib/date-picker/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _en_US2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Checkbox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _rcCheckbox = __webpack_require__("./node_modules/rc-checkbox/es/index.js");

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Checkbox = function (_React$Component) {
    (0, _inherits3['default'])(Checkbox, _React$Component);

    function Checkbox() {
        (0, _classCallCheck3['default'])(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));

        _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        };
        return _this;
    }

    (0, _createClass3['default'])(Checkbox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState) || !(0, _shallowequal2['default'])(this.context.checkboxGroup, nextContext.checkboxGroup);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.rcCheckbox.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcCheckbox.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                indeterminate = props.indeterminate,
                style = props.style,
                onMouseEnter = props.onMouseEnter,
                onMouseLeave = props.onMouseLeave,
                restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);

            var checkboxGroup = context.checkboxGroup;

            var checkboxProps = (0, _extends3['default'])({}, restProps);
            if (checkboxGroup) {
                checkboxProps.onChange = function () {
                    return checkboxGroup.toggleOption({ label: children, value: props.value });
                };
                checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
                checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
            }
            var classString = (0, _classnames2['default'])(className, (0, _defineProperty3['default'])({}, prefixCls + '-wrapper', true));
            var checkboxClass = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-indeterminate', indeterminate));
            return React.createElement(
                'label',
                { className: classString, style: style, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
                React.createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, checkboxProps, { prefixCls: prefixCls, className: checkboxClass, ref: this.saveCheckbox })),
                children !== undefined ? React.createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);
    return Checkbox;
}(React.Component);

exports['default'] = Checkbox;

Checkbox.defaultProps = {
    prefixCls: 'ant-checkbox',
    indeterminate: false
};
Checkbox.contextTypes = {
    checkboxGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _Checkbox = __webpack_require__("./node_modules/antd/lib/checkbox/Checkbox.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CheckboxGroup = function (_React$Component) {
    (0, _inherits3['default'])(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        (0, _classCallCheck3['default'])(this, CheckboxGroup);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.toggleOption = function (option) {
            var optionIndex = _this.state.value.indexOf(option.value);
            var value = [].concat((0, _toConsumableArray3['default'])(_this.state.value));
            if (optionIndex === -1) {
                value.push(option.value);
            } else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(value);
            }
        };
        _this.state = {
            value: props.value || props.defaultValue || []
        };
        return _this;
    }

    (0, _createClass3['default'])(CheckboxGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                checkboxGroup: {
                    toggleOption: this.toggleOption,
                    value: this.state.value,
                    disabled: this.props.disabled
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value || []
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState);
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            var options = this.props.options;
            // https://github.com/Microsoft/TypeScript/issues/7960

            return options.map(function (option) {
                if (typeof option === 'string') {
                    return {
                        label: option,
                        value: option
                    };
                }
                return option;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                className = props.className,
                style = props.style,
                options = props.options;

            var groupPrefixCls = prefixCls + '-group';
            var children = props.children;
            if (options && options.length > 0) {
                children = this.getOptions().map(function (option) {
                    return React.createElement(
                        _Checkbox2['default'],
                        { prefixCls: prefixCls, key: option.value.toString(), disabled: 'disabled' in option ? option.disabled : props.disabled, value: option.value, checked: state.value.indexOf(option.value) !== -1, onChange: function onChange() {
                                return _this2.toggleOption(option);
                            }, className: groupPrefixCls + '-item' },
                        option.label
                    );
                });
            }
            var classString = (0, _classnames2['default'])(groupPrefixCls, className);
            return React.createElement(
                'div',
                { className: classString, style: style },
                children
            );
        }
    }]);
    return CheckboxGroup;
}(React.Component);

exports['default'] = CheckboxGroup;

CheckboxGroup.defaultProps = {
    options: [],
    prefixCls: 'ant-checkbox'
};
CheckboxGroup.propTypes = {
    defaultValue: _propTypes2['default'].array,
    value: _propTypes2['default'].array,
    options: _propTypes2['default'].array.isRequired,
    onChange: _propTypes2['default'].func
};
CheckboxGroup.childContextTypes = {
    checkboxGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__("./node_modules/antd/lib/checkbox/Checkbox.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Group = __webpack_require__("./node_modules/antd/lib/checkbox/Group.js");

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Checkbox2['default'].Group = _Group2['default'];
exports['default'] = _Checkbox2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/checkbox/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _en_US = __webpack_require__("./node_modules/rc-calendar/lib/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__("./node_modules/antd/lib/time-picker/locale/en_US.js");

var _en_US4 = _interopRequireDefault(_en_US3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _extends3['default'])({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, _en_US2['default']),
    timePickerLocale: (0, _extends3['default'])({}, _en_US4['default'])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/dropdown-button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _button = __webpack_require__("./node_modules/antd/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _dropdown = __webpack_require__("./node_modules/antd/lib/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var ButtonGroup = _button2['default'].Group;

var DropdownButton = function (_React$Component) {
    (0, _inherits3['default'])(DropdownButton, _React$Component);

    function DropdownButton() {
        (0, _classCallCheck3['default'])(this, DropdownButton);
        return (0, _possibleConstructorReturn3['default'])(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).apply(this, arguments));
    }

    (0, _createClass3['default'])(DropdownButton, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                disabled = _a.disabled,
                onClick = _a.onClick,
                children = _a.children,
                prefixCls = _a.prefixCls,
                className = _a.className,
                overlay = _a.overlay,
                trigger = _a.trigger,
                align = _a.align,
                visible = _a.visible,
                onVisibleChange = _a.onVisibleChange,
                placement = _a.placement,
                getPopupContainer = _a.getPopupContainer,
                restProps = __rest(_a, ["type", "disabled", "onClick", "children", "prefixCls", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer"]);
            var dropdownProps = {
                align: align,
                overlay: overlay,
                disabled: disabled,
                trigger: disabled ? [] : trigger,
                onVisibleChange: onVisibleChange,
                placement: placement,
                getPopupContainer: getPopupContainer
            };
            if ('visible' in this.props) {
                dropdownProps.visible = visible;
            }
            return React.createElement(
                ButtonGroup,
                (0, _extends3['default'])({}, restProps, { className: (0, _classnames2['default'])(prefixCls, className) }),
                React.createElement(
                    _button2['default'],
                    { type: type, disabled: disabled, onClick: onClick },
                    children
                ),
                React.createElement(
                    _dropdown2['default'],
                    dropdownProps,
                    React.createElement(_button2['default'], { type: type, icon: 'ellipsis' })
                )
            );
        }
    }]);
    return DropdownButton;
}(React.Component);

exports['default'] = DropdownButton;

DropdownButton.defaultProps = {
    placement: 'bottomRight',
    type: 'default',
    prefixCls: 'ant-dropdown-button'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rcDropdown = __webpack_require__("./node_modules/rc-dropdown/es/index.js");

var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Dropdown = function (_React$Component) {
    (0, _inherits3['default'])(Dropdown, _React$Component);

    function Dropdown() {
        (0, _classCallCheck3['default'])(this, Dropdown);
        return (0, _possibleConstructorReturn3['default'])(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Dropdown, [{
        key: 'getTransitionName',
        value: function getTransitionName() {
            var _props = this.props,
                _props$placement = _props.placement,
                placement = _props$placement === undefined ? '' : _props$placement,
                transitionName = _props.transitionName;

            if (transitionName !== undefined) {
                return transitionName;
            }
            if (placement.indexOf('top') >= 0) {
                return 'slide-down';
            }
            return 'slide-up';
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var overlay = this.props.overlay;

            if (overlay) {
                var overlayProps = overlay.props;
                (0, _warning2['default'])(!overlayProps.mode || overlayProps.mode === 'vertical', 'mode="' + overlayProps.mode + '" is not supported for Dropdown\'s Menu.');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                prefixCls = _props2.prefixCls,
                overlayElements = _props2.overlay,
                trigger = _props2.trigger,
                disabled = _props2.disabled;

            var child = React.Children.only(children);
            var overlay = React.Children.only(overlayElements);
            var dropdownTrigger = React.cloneElement(child, {
                className: (0, _classnames2['default'])(child.props.className, prefixCls + '-trigger'),
                disabled: disabled
            });
            // menu cannot be selectable in dropdown defaultly
            // menu should be focusable in dropdown defaultly
            var _overlay$props = overlay.props,
                _overlay$props$select = _overlay$props.selectable,
                selectable = _overlay$props$select === undefined ? false : _overlay$props$select,
                _overlay$props$focusa = _overlay$props.focusable,
                focusable = _overlay$props$focusa === undefined ? true : _overlay$props$focusa;

            var fixedModeOverlay = typeof overlay.type === 'string' ? overlay : React.cloneElement(overlay, {
                mode: 'vertical',
                selectable: selectable,
                focusable: focusable
            });
            return React.createElement(
                _rcDropdown2['default'],
                (0, _extends3['default'])({}, this.props, { transitionName: this.getTransitionName(), trigger: disabled ? [] : trigger, overlay: fixedModeOverlay }),
                dropdownTrigger
            );
        }
    }]);
    return Dropdown;
}(React.Component);

exports['default'] = Dropdown;

Dropdown.defaultProps = {
    prefixCls: 'ant-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: 'bottomLeft'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__("./node_modules/antd/lib/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownButton = __webpack_require__("./node_modules/antd/lib/dropdown/dropdown-button.js");

var _dropdownButton2 = _interopRequireDefault(_dropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_dropdown2['default'].Button = _dropdownButton2['default'];
exports['default'] = _dropdown2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/dropdown/style/index.css");

__webpack_require__("./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/input/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/input/style/index.css");

__webpack_require__("./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LocaleReceiver = function (_React$Component) {
    (0, _inherits3['default'])(LocaleReceiver, _React$Component);

    function LocaleReceiver() {
        (0, _classCallCheck3['default'])(this, LocaleReceiver);
        return (0, _possibleConstructorReturn3['default'])(this, (LocaleReceiver.__proto__ || Object.getPrototypeOf(LocaleReceiver)).apply(this, arguments));
    }

    (0, _createClass3['default'])(LocaleReceiver, [{
        key: 'getLocale',
        value: function getLocale() {
            var _props = this.props,
                componentName = _props.componentName,
                defaultLocale = _props.defaultLocale;
            var antLocale = this.context.antLocale;

            var localeFromContext = antLocale && antLocale[componentName];
            return (0, _extends3['default'])({}, typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale, localeFromContext || {});
        }
    }, {
        key: 'getLocaleCode',
        value: function getLocaleCode() {
            var antLocale = this.context.antLocale;

            var localeCode = antLocale && antLocale.locale;
            // Had use LocaleProvide but didn't set locale
            if (antLocale && antLocale.exist && !localeCode) {
                return 'en-us';
            }
            return localeCode;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.getLocale(), this.getLocaleCode());
        }
    }]);
    return LocaleReceiver;
}(React.Component);

exports['default'] = LocaleReceiver;

LocaleReceiver.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__("./node_modules/rc-pagination/lib/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__("./node_modules/antd/lib/date-picker/locale/en_US.js");

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__("./node_modules/antd/lib/time-picker/locale/en_US.js");

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__("./node_modules/antd/lib/calendar/locale/en_US.js");

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    locale: 'en',
    Pagination: _en_US2['default'],
    DatePicker: _en_US4['default'],
    TimePicker: _en_US6['default'],
    Calendar: _en_US8['default'],
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/menu/MenuItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rcMenu = __webpack_require__("./node_modules/rc-menu/es/index.js");

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltip = __webpack_require__("./node_modules/antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MenuItem = function (_React$Component) {
    (0, _inherits3['default'])(MenuItem, _React$Component);

    function MenuItem() {
        (0, _classCallCheck3['default'])(this, MenuItem);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));

        _this.onKeyDown = function (e) {
            _this.menuItem.onKeyDown(e);
        };
        _this.saveMenuItem = function (menuItem) {
            _this.menuItem = menuItem;
        };
        return _this;
    }

    (0, _createClass3['default'])(MenuItem, [{
        key: 'render',
        value: function render() {
            var inlineCollapsed = this.context.inlineCollapsed;

            var props = this.props;
            return React.createElement(
                _tooltip2['default'],
                { title: inlineCollapsed && props.level === 1 ? props.children : '', placement: 'right', overlayClassName: props.rootPrefixCls + '-inline-collapsed-tooltip' },
                React.createElement(_rcMenu.Item, (0, _extends3['default'])({}, props, { ref: this.saveMenuItem }))
            );
        }
    }]);
    return MenuItem;
}(React.Component);

MenuItem.contextTypes = {
    inlineCollapsed: _propTypes2['default'].bool
};
MenuItem.isMenuItem = 1;
exports['default'] = MenuItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/menu/SubMenu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcMenu = __webpack_require__("./node_modules/rc-menu/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SubMenu = function (_React$Component) {
    (0, _inherits3['default'])(SubMenu, _React$Component);

    function SubMenu() {
        (0, _classCallCheck3['default'])(this, SubMenu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).apply(this, arguments));

        _this.onKeyDown = function (e) {
            _this.subMenu.onKeyDown(e);
        };
        _this.saveSubMenu = function (subMenu) {
            _this.subMenu = subMenu;
        };
        return _this;
    }

    (0, _createClass3['default'])(SubMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                rootPrefixCls = _props.rootPrefixCls,
                className = _props.className;

            var theme = this.context.antdMenuTheme;
            return React.createElement(_rcMenu.SubMenu, (0, _extends3['default'])({}, this.props, { ref: this.saveSubMenu, popupClassName: (0, _classnames2['default'])(rootPrefixCls + '-' + theme, className) }));
        }
    }]);
    return SubMenu;
}(React.Component);

SubMenu.contextTypes = {
    antdMenuTheme: _propTypes2['default'].string
};
// fix issue:https://github.com/ant-design/ant-design/issues/8666
SubMenu.isSubMenu = 1;
exports['default'] = SubMenu;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/menu/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _rcMenu = __webpack_require__("./node_modules/rc-menu/es/index.js");

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = __webpack_require__("./node_modules/antd/lib/_util/openAnimation.js");

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = __webpack_require__("./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _SubMenu = __webpack_require__("./node_modules/antd/lib/menu/SubMenu.js");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = __webpack_require__("./node_modules/antd/lib/menu/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3['default'])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3['default'])(this, Menu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.inlineOpenKeys = [];
        _this.handleClick = function (e) {
            _this.handleOpenChange([]);
            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };
        _this.handleOpenChange = function (openKeys) {
            _this.setOpenKeys(openKeys);
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(openKeys);
            }
        };
        (0, _warning2['default'])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');
        (0, _warning2['default'])(!('inlineCollapsed' in props && props.mode !== 'inline'), '`inlineCollapsed` should only be used when Menu\'s `mode` is inline.');
        var openKeys = void 0;
        if ('defaultOpenKeys' in props) {
            openKeys = props.defaultOpenKeys;
        } else if ('openKeys' in props) {
            openKeys = props.openKeys;
        }
        _this.state = {
            openKeys: openKeys || []
        };
        return _this;
    }

    (0, _createClass3['default'])(Menu, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                inlineCollapsed: this.getInlineCollapsed(),
                antdMenuTheme: this.props.theme
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            var prefixCls = this.props.prefixCls;

            if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
                this.switchModeFromInline = true;
            }
            if ('openKeys' in nextProps) {
                this.setState({ openKeys: nextProps.openKeys });
                return;
            }
            if (nextProps.inlineCollapsed && !this.props.inlineCollapsed || nextContext.siderCollapsed && !this.context.siderCollapsed) {
                var menuNode = (0, _reactDom.findDOMNode)(this);
                this.switchModeFromInline = !!this.state.openKeys.length && !!menuNode.querySelectorAll('.' + prefixCls + '-submenu-open').length;
                this.inlineOpenKeys = this.state.openKeys;
                this.setState({ openKeys: [] });
            }
            if (!nextProps.inlineCollapsed && this.props.inlineCollapsed || !nextContext.siderCollapsed && this.context.siderCollapsed) {
                this.setState({ openKeys: this.inlineOpenKeys });
                this.inlineOpenKeys = [];
            }
        }
    }, {
        key: 'setOpenKeys',
        value: function setOpenKeys(openKeys) {
            if (!('openKeys' in this.props)) {
                this.setState({ openKeys: openKeys });
            }
        }
    }, {
        key: 'getRealMenuMode',
        value: function getRealMenuMode() {
            var inlineCollapsed = this.getInlineCollapsed();
            if (this.switchModeFromInline && inlineCollapsed) {
                return 'inline';
            }
            var mode = this.props.mode;

            return inlineCollapsed ? 'vertical' : mode;
        }
    }, {
        key: 'getInlineCollapsed',
        value: function getInlineCollapsed() {
            var inlineCollapsed = this.props.inlineCollapsed;

            if (this.context.siderCollapsed !== undefined) {
                return this.context.siderCollapsed;
            }
            return inlineCollapsed;
        }
    }, {
        key: 'getMenuOpenAnimation',
        value: function getMenuOpenAnimation(menuMode) {
            var _this2 = this;

            var _props = this.props,
                openAnimation = _props.openAnimation,
                openTransitionName = _props.openTransitionName;

            var menuOpenAnimation = openAnimation || openTransitionName;
            if (openAnimation === undefined && openTransitionName === undefined) {
                switch (menuMode) {
                    case 'horizontal':
                        menuOpenAnimation = 'slide-up';
                        break;
                    case 'vertical':
                    case 'vertical-left':
                    case 'vertical-right':
                        // When mode switch from inline
                        // submenu should hide without animation
                        if (this.switchModeFromInline) {
                            menuOpenAnimation = '';
                            this.switchModeFromInline = false;
                        } else {
                            menuOpenAnimation = 'zoom-big';
                        }
                        break;
                    case 'inline':
                        menuOpenAnimation = (0, _extends3['default'])({}, _openAnimation2['default'], { leave: function leave(node, done) {
                                return _openAnimation2['default'].leave(node, function () {
                                    // Make sure inline menu leave animation finished before mode is switched
                                    _this2.switchModeFromInline = false;
                                    _this2.setState({});
                                    // when inlineCollapsed change false to true, all submenu will be unmounted,
                                    // so that we don't need handle animation leaving.
                                    if (_this2.getRealMenuMode() === 'vertical') {
                                        return;
                                    }
                                    done();
                                });
                            } });
                        break;
                    default:
                }
            }
            return menuOpenAnimation;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                theme = _props2.theme;

            var menuMode = this.getRealMenuMode();
            var menuOpenAnimation = this.getMenuOpenAnimation(menuMode);
            var menuClassName = (0, _classnames2['default'])(className, prefixCls + '-' + theme, (0, _defineProperty3['default'])({}, prefixCls + '-inline-collapsed', this.getInlineCollapsed()));
            var menuProps = {
                openKeys: this.state.openKeys,
                onOpenChange: this.handleOpenChange,
                className: menuClassName,
                mode: menuMode
            };
            if (menuMode !== 'inline') {
                // closing vertical popup submenu after click it
                menuProps.onClick = this.handleClick;
                menuProps.openTransitionName = menuOpenAnimation;
            } else {
                menuProps.openAnimation = menuOpenAnimation;
            }
            // https://github.com/ant-design/ant-design/issues/8587
            var collapsedWidth = this.context.collapsedWidth;

            if (this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')) {
                return null;
            }
            return React.createElement(_rcMenu2['default'], (0, _extends3['default'])({}, this.props, menuProps));
        }
    }]);
    return Menu;
}(React.Component);

exports['default'] = Menu;

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem2['default'];
Menu.SubMenu = _SubMenu2['default'];
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
    prefixCls: 'ant-menu',
    className: '',
    theme: 'light',
    focusable: false
};
Menu.childContextTypes = {
    inlineCollapsed: _propTypes2['default'].bool,
    antdMenuTheme: _propTypes2['default'].string
};
Menu.contextTypes = {
    siderCollapsed: _propTypes2['default'].bool,
    collapsedWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string])
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/pagination/MiniSelect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _select = __webpack_require__("./node_modules/antd/lib/select/index.js");

var _select2 = _interopRequireDefault(_select);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MiniSelect = function (_React$Component) {
    (0, _inherits3['default'])(MiniSelect, _React$Component);

    function MiniSelect() {
        (0, _classCallCheck3['default'])(this, MiniSelect);
        return (0, _possibleConstructorReturn3['default'])(this, (MiniSelect.__proto__ || Object.getPrototypeOf(MiniSelect)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MiniSelect, [{
        key: 'render',
        value: function render() {
            return React.createElement(_select2['default'], (0, _extends3['default'])({ size: 'small' }, this.props));
        }
    }]);
    return MiniSelect;
}(React.Component);

exports['default'] = MiniSelect;

MiniSelect.Option = _select2['default'].Option;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/pagination/Pagination.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rcPagination = __webpack_require__("./node_modules/rc-pagination/es/index.js");

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _en_US = __webpack_require__("./node_modules/rc-pagination/lib/locale/en_US.js");

var _en_US2 = _interopRequireDefault(_en_US);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = __webpack_require__("./node_modules/antd/lib/locale-provider/LocaleReceiver.js");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _select = __webpack_require__("./node_modules/antd/lib/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _MiniSelect = __webpack_require__("./node_modules/antd/lib/pagination/MiniSelect.js");

var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Pagination = function (_React$Component) {
    (0, _inherits3['default'])(Pagination, _React$Component);

    function Pagination() {
        (0, _classCallCheck3['default'])(this, Pagination);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));

        _this.renderPagination = function (contextLocale) {
            var _a = _this.props,
                className = _a.className,
                size = _a.size,
                customLocale = _a.locale,
                restProps = __rest(_a, ["className", "size", "locale"]);
            var locale = (0, _extends3['default'])({}, contextLocale, customLocale);
            var isSmall = size === 'small';
            return React.createElement(_rcPagination2['default'], (0, _extends3['default'])({}, restProps, { className: (0, _classnames2['default'])(className, { mini: isSmall }), selectComponentClass: isSmall ? _MiniSelect2['default'] : _select2['default'], locale: locale }));
        };
        return _this;
    }

    (0, _createClass3['default'])(Pagination, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                _LocaleReceiver2['default'],
                { componentName: 'Pagination', defaultLocale: _en_US2['default'] },
                this.renderPagination
            );
        }
    }]);
    return Pagination;
}(React.Component);

exports['default'] = Pagination;

Pagination.defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/pagination/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pagination = __webpack_require__("./node_modules/antd/lib/pagination/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Pagination2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/pagination/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/pagination/style/index.css");

__webpack_require__("./node_modules/antd/lib/select/style/css.js");

__webpack_require__("./node_modules/antd/lib/input/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/radio/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _radio = __webpack_require__("./node_modules/antd/lib/radio/radio.js");

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getCheckedValue(children) {
    var value = null;
    var matched = false;
    React.Children.forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    (0, _inherits3['default'])(RadioGroup, _React$Component);

    function RadioGroup(props) {
        (0, _classCallCheck3['default'])(this, RadioGroup);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _this.onRadioChange = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;

            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            var onChange = _this.props.onChange;
            if (onChange && value !== lastValue) {
                onChange(ev);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    (0, _createClass3['default'])(RadioGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                radioGroup: {
                    onChange: this.onRadioChange,
                    value: this.state.value,
                    disabled: this.props.disabled,
                    name: this.props.name
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            } else {
                var checkedValue = getCheckedValue(nextProps.children);
                if (checkedValue) {
                    this.setState({
                        value: checkedValue.value
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var prefixCls = props.prefixCls,
                _props$className = props.className,
                className = _props$className === undefined ? '' : _props$className,
                options = props.options;

            var groupPrefixCls = prefixCls + '-group';
            var classString = (0, _classnames2['default'])(groupPrefixCls, (0, _defineProperty3['default'])({}, groupPrefixCls + '-' + props.size, props.size), className);
            var children = props.children;
            // 如果存在 options, 优先使用
            if (options && options.length > 0) {
                children = options.map(function (option, index) {
                    if (typeof option === 'string') {
                        // 此处类型自动推导为 string
                        return React.createElement(
                            _radio2['default'],
                            { key: index, prefixCls: prefixCls, disabled: _this2.props.disabled, value: option, onChange: _this2.onRadioChange, checked: _this2.state.value === option },
                            option
                        );
                    } else {
                        // 此处类型自动推导为 { label: string value: string }
                        return React.createElement(
                            _radio2['default'],
                            { key: index, prefixCls: prefixCls, disabled: option.disabled || _this2.props.disabled, value: option.value, onChange: _this2.onRadioChange, checked: _this2.state.value === option.value },
                            option.label
                        );
                    }
                });
            }
            return React.createElement(
                'div',
                { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, id: props.id },
                children
            );
        }
    }]);
    return RadioGroup;
}(React.Component);

exports['default'] = RadioGroup;

RadioGroup.defaultProps = {
    disabled: false,
    prefixCls: 'ant-radio'
};
RadioGroup.childContextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = exports.Button = undefined;

var _radio = __webpack_require__("./node_modules/antd/lib/radio/radio.js");

var _radio2 = _interopRequireDefault(_radio);

var _group = __webpack_require__("./node_modules/antd/lib/radio/group.js");

var _group2 = _interopRequireDefault(_group);

var _radioButton = __webpack_require__("./node_modules/antd/lib/radio/radioButton.js");

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_radio2['default'].Button = _radioButton2['default'];
_radio2['default'].Group = _group2['default'];
exports.Button = _radioButton2['default'];
exports.Group = _group2['default'];
exports['default'] = _radio2['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/radio.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcCheckbox = __webpack_require__("./node_modules/rc-checkbox/es/index.js");

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Radio = function (_React$Component) {
    (0, _inherits3['default'])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3['default'])(this, Radio);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        };
        return _this;
    }

    (0, _createClass3['default'])(Radio, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2['default'])(this.props, nextProps) || !(0, _shallowequal2['default'])(this.state, nextState) || !(0, _shallowequal2['default'])(this.context.radioGroup, nextContext.radioGroup);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.rcCheckbox.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcCheckbox.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                style = props.style,
                restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

            var radioGroup = context.radioGroup;

            var radioProps = (0, _extends3['default'])({}, restProps);
            if (radioGroup) {
                radioProps.name = radioGroup.name;
                radioProps.onChange = radioGroup.onChange;
                radioProps.checked = props.value === radioGroup.value;
                radioProps.disabled = props.disabled || radioGroup.disabled;
            }
            var wrapperClassString = (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-checked', radioProps.checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-disabled', radioProps.disabled), _classNames));
            return React.createElement(
                'label',
                { className: wrapperClassString, style: style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                React.createElement(_rcCheckbox2['default'], (0, _extends3['default'])({}, radioProps, { prefixCls: prefixCls, ref: this.saveCheckbox })),
                children !== undefined ? React.createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);
    return Radio;
}(React.Component);

exports['default'] = Radio;

Radio.defaultProps = {
    prefixCls: 'ant-radio',
    type: 'radio'
};
Radio.contextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/radioButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radio = __webpack_require__("./node_modules/antd/lib/radio/radio.js");

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RadioButton = function (_React$Component) {
    (0, _inherits3['default'])(RadioButton, _React$Component);

    function RadioButton() {
        (0, _classCallCheck3['default'])(this, RadioButton);
        return (0, _possibleConstructorReturn3['default'])(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    (0, _createClass3['default'])(RadioButton, [{
        key: 'render',
        value: function render() {
            var radioProps = (0, _extends3['default'])({}, this.props);
            if (this.context.radioGroup) {
                radioProps.onChange = this.context.radioGroup.onChange;
                radioProps.checked = this.props.value === this.context.radioGroup.value;
                radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
            }
            return React.createElement(_radio2['default'], radioProps);
        }
    }]);
    return RadioButton;
}(React.Component);

exports['default'] = RadioButton;

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button'
};
RadioButton.contextTypes = {
    radioGroup: _propTypes2['default'].any
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/radio/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/radio/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSelect = __webpack_require__("./node_modules/rc-select/es/index.js");

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = __webpack_require__("./node_modules/antd/lib/locale-provider/LocaleReceiver.js");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = __webpack_require__("./node_modules/antd/lib/locale-provider/default.js");

var _default2 = _interopRequireDefault(_default);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var SelectPropTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    size: _propTypes2['default'].oneOf(['default', 'large', 'small']),
    combobox: _propTypes2['default'].bool,
    notFoundContent: _propTypes2['default'].any,
    showSearch: _propTypes2['default'].bool,
    optionLabelProp: _propTypes2['default'].string,
    transitionName: _propTypes2['default'].string,
    choiceTransitionName: _propTypes2['default'].string
};
// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select = function (_React$Component) {
    (0, _inherits3['default'])(Select, _React$Component);

    function Select() {
        (0, _classCallCheck3['default'])(this, Select);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));

        _this.saveSelect = function (node) {
            _this.rcSelect = node;
        };
        _this.renderSelect = function (locale) {
            var _classNames;

            var _a = _this.props,
                prefixCls = _a.prefixCls,
                _a$className = _a.className,
                className = _a$className === undefined ? '' : _a$className,
                size = _a.size,
                mode = _a.mode,
                restProps = __rest(_a, ["prefixCls", "className", "size", "mode"]);
            var cls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);
            var optionLabelProp = _this.props.optionLabelProp;

            var isCombobox = mode === 'combobox';
            if (isCombobox) {
                // children 带 dom 结构时，无法填入输入框
                optionLabelProp = optionLabelProp || 'value';
            }
            var modeConfig = {
                multiple: mode === 'multiple',
                tags: mode === 'tags',
                combobox: isCombobox
            };
            return React.createElement(_rcSelect2['default'], (0, _extends3['default'])({}, restProps, modeConfig, { prefixCls: prefixCls, className: cls, optionLabelProp: optionLabelProp || 'children', notFoundContent: _this.getNotFoundContent(locale), ref: _this.saveSelect }));
        };
        return _this;
    }

    (0, _createClass3['default'])(Select, [{
        key: 'focus',
        value: function focus() {
            this.rcSelect.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSelect.blur();
        }
    }, {
        key: 'getNotFoundContent',
        value: function getNotFoundContent(locale) {
            var _props = this.props,
                notFoundContent = _props.notFoundContent,
                mode = _props.mode;

            var isCombobox = mode === 'combobox';
            if (isCombobox) {
                // AutoComplete don't have notFoundContent defaultly
                return notFoundContent === undefined ? null : notFoundContent;
            }
            return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                _LocaleReceiver2['default'],
                { componentName: 'Select', defaultLocale: _default2['default'].Select },
                this.renderSelect
            );
        }
    }]);
    return Select;
}(React.Component);

exports['default'] = Select;

Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select.defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/select/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/select/style/index.css");

__webpack_require__("./node_modules/antd/lib/input/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/spin/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = __webpack_require__("./node_modules/rc-animate/es/Animate.js");

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _omit = __webpack_require__("./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Spin = function (_React$Component) {
    (0, _inherits3['default'])(Spin, _React$Component);

    function Spin(props) {
        (0, _classCallCheck3['default'])(this, Spin);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    (0, _createClass3['default'])(Spin, [{
        key: 'isNestedPattern',
        value: function isNestedPattern() {
            return !!(this.props && this.props.children);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                spinning = _props.spinning,
                delay = _props.delay;

            if (spinning && delay && !isNaN(Number(delay))) {
                this.setState({ spinning: false });
                this.delayTimeout = window.setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, delay);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            var currentSpinning = this.props.spinning;
            var spinning = nextProps.spinning;
            var delay = this.props.delay;

            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (currentSpinning && !spinning) {
                this.debounceTimeout = window.setTimeout(function () {
                    return _this3.setState({ spinning: spinning });
                }, 200);
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
            } else {
                if (spinning && delay && !isNaN(Number(delay))) {
                    if (this.delayTimeout) {
                        clearTimeout(this.delayTimeout);
                    }
                    this.delayTimeout = window.setTimeout(function () {
                        return _this3.setState({ spinning: spinning });
                    }, delay);
                } else {
                    this.setState({ spinning: spinning });
                }
            }
        }
    }, {
        key: 'renderIndicator',
        value: function renderIndicator() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                indicator = _props2.indicator;

            var dotClassName = prefixCls + '-dot';
            if (React.isValidElement(indicator)) {
                return React.cloneElement(indicator, {
                    className: (0, _classnames2['default'])(indicator.props.className, dotClassName)
                });
            }
            return React.createElement(
                'span',
                { className: (0, _classnames2['default'])(dotClassName, prefixCls + '-dot-spin') },
                React.createElement('i', null),
                React.createElement('i', null),
                React.createElement('i', null),
                React.createElement('i', null)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                size = _a.size,
                prefixCls = _a.prefixCls,
                tip = _a.tip,
                wrapperClassName = _a.wrapperClassName,
                restProps = __rest(_a, ["className", "size", "prefixCls", "tip", "wrapperClassName"]);var spinning = this.state.spinning;

            var spinClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-text', !!tip), _classNames), className);
            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2['default'])(restProps, ['spinning', 'delay', 'indicator']);
            var spinElement = React.createElement(
                'div',
                (0, _extends3['default'])({}, divProps, { className: spinClassName }),
                this.renderIndicator(),
                tip ? React.createElement(
                    'div',
                    { className: prefixCls + '-text' },
                    tip
                ) : null
            );
            if (this.isNestedPattern()) {
                var _classNames2;

                var animateClassName = prefixCls + '-nested-loading';
                if (wrapperClassName) {
                    animateClassName += ' ' + wrapperClassName;
                }
                var containerClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-container', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-blur', spinning), _classNames2));
                return React.createElement(
                    _rcAnimate2['default'],
                    (0, _extends3['default'])({}, divProps, { component: 'div', className: animateClassName, style: null, transitionName: 'fade' }),
                    spinning && React.createElement(
                        'div',
                        { key: 'loading' },
                        spinElement
                    ),
                    React.createElement(
                        'div',
                        { className: containerClassName, key: 'container' },
                        this.props.children
                    )
                );
            }
            return spinElement;
        }
    }]);
    return Spin;
}(React.Component);

exports['default'] = Spin;

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: ''
};
Spin.propTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    spinning: _propTypes2['default'].bool,
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    wrapperClassName: _propTypes2['default'].string,
    indicator: _propTypes2['default'].node
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/spin/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/spin/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/table/Column.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Column = function (_React$Component) {
  (0, _inherits3['default'])(Column, _React$Component);

  function Column() {
    (0, _classCallCheck3['default'])(this, Column);
    return (0, _possibleConstructorReturn3['default'])(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  return Column;
}(React.Component);

exports['default'] = Column;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/ColumnGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ColumnGroup = function (_React$Component) {
  (0, _inherits3['default'])(ColumnGroup, _React$Component);

  function ColumnGroup() {
    (0, _classCallCheck3['default'])(this, ColumnGroup);
    return (0, _possibleConstructorReturn3['default'])(this, (ColumnGroup.__proto__ || Object.getPrototypeOf(ColumnGroup)).apply(this, arguments));
  }

  return ColumnGroup;
}(React.Component);

exports['default'] = ColumnGroup;

ColumnGroup.__ANT_TABLE_COLUMN_GROUP = true;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/FilterDropdownMenuWrapper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

exports['default'] = function (props) {
    return React.createElement(
        'div',
        { className: props.className, onClick: props.onClick },
        props.children
    );
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/SelectionBox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _checkbox = __webpack_require__("./node_modules/antd/lib/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__("./node_modules/antd/lib/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var SelectionBox = function (_React$Component) {
    (0, _inherits3['default'])(SelectionBox, _React$Component);

    function SelectionBox(props) {
        (0, _classCallCheck3['default'])(this, SelectionBox);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SelectionBox.__proto__ || Object.getPrototypeOf(SelectionBox)).call(this, props));

        _this.state = {
            checked: _this.getCheckState(props)
        };
        return _this;
    }

    (0, _createClass3['default'])(SelectionBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                var checked = _this2.getCheckState(_this2.props);
                _this2.setState({ checked: checked });
            });
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                defaultSelection = props.defaultSelection,
                rowIndex = props.rowIndex;

            var checked = false;
            if (store.getState().selectionDirty) {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
            }
            return checked;
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                rowIndex = _a.rowIndex,
                rest = __rest(_a, ["type", "rowIndex"]);var checked = this.state.checked;

            if (type === 'radio') {
                return React.createElement(_radio2['default'], (0, _extends3['default'])({ checked: checked, value: rowIndex }, rest));
            } else {
                return React.createElement(_checkbox2['default'], (0, _extends3['default'])({ checked: checked }, rest));
            }
        }
    }]);
    return SelectionBox;
}(React.Component);

exports['default'] = SelectionBox;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/SelectionCheckboxAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _checkbox = __webpack_require__("./node_modules/antd/lib/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _dropdown = __webpack_require__("./node_modules/antd/lib/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./node_modules/antd/lib/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SelectionCheckboxAll = function (_React$Component) {
    (0, _inherits3['default'])(SelectionCheckboxAll, _React$Component);

    function SelectionCheckboxAll(props) {
        (0, _classCallCheck3['default'])(this, SelectionCheckboxAll);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SelectionCheckboxAll.__proto__ || Object.getPrototypeOf(SelectionCheckboxAll)).call(this, props));

        _this.handleSelectAllChagne = function (e) {
            var checked = e.target.checked;
            _this.props.onSelect(checked ? 'all' : 'removeAll', 0, null);
        };
        _this.defaultSelections = props.hideDefaultSelections ? [] : [{
            key: 'all',
            text: props.locale.selectAll,
            onSelect: function onSelect() {}
        }, {
            key: 'invert',
            text: props.locale.selectInvert,
            onSelect: function onSelect() {}
        }];
        _this.state = {
            checked: _this.getCheckState(props),
            indeterminate: _this.getIndeterminateState(props)
        };
        return _this;
    }

    (0, _createClass3['default'])(SelectionCheckboxAll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setCheckState(nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                _this2.setCheckState(_this2.props);
            });
        }
    }, {
        key: 'checkSelection',
        value: function checkSelection(data, type, byDefaultChecked) {
            var _props = this.props,
                store = _props.store,
                getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
                getRecordKey = _props.getRecordKey;
            // type should be 'every' | 'some'

            if (type === 'every' || type === 'some') {
                return byDefaultChecked ? data[type](function (item, i) {
                    return getCheckboxPropsByItem(item, i).defaultChecked;
                }) : data[type](function (item, i) {
                    return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
                });
            }
            return false;
        }
    }, {
        key: 'setCheckState',
        value: function setCheckState(props) {
            var checked = this.getCheckState(props);
            var indeterminate = this.getIndeterminateState(props);
            this.setState(function (prevState) {
                var newState = {};
                if (indeterminate !== prevState.indeterminate) {
                    newState.indeterminate = indeterminate;
                }
                if (checked !== prevState.checked) {
                    newState.checked = checked;
                }
                return newState;
            });
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                data = props.data;

            var checked = void 0;
            if (!data.length) {
                checked = false;
            } else {
                checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
            }
            return checked;
        }
    }, {
        key: 'getIndeterminateState',
        value: function getIndeterminateState(props) {
            var store = props.store,
                data = props.data;

            var indeterminate = void 0;
            if (!data.length) {
                indeterminate = false;
            } else {
                indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
            }
            return indeterminate;
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(selections) {
            var _this3 = this;

            return selections.map(function (selection, index) {
                return React.createElement(
                    _menu2['default'].Item,
                    { key: selection.key || index },
                    React.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this3.props.onSelect(selection.key, index, selection.onSelect);
                            } },
                        selection.text
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                disabled = _props2.disabled,
                prefixCls = _props2.prefixCls,
                selections = _props2.selections,
                getPopupContainer = _props2.getPopupContainer;
            var _state = this.state,
                checked = _state.checked,
                indeterminate = _state.indeterminate;

            var selectionPrefixCls = prefixCls + '-selection';
            var customSelections = null;
            if (selections) {
                var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;
                var menu = React.createElement(
                    _menu2['default'],
                    { className: selectionPrefixCls + '-menu', selectedKeys: [] },
                    this.renderMenus(newSelections)
                );
                customSelections = newSelections.length > 0 ? React.createElement(
                    _dropdown2['default'],
                    { overlay: menu, getPopupContainer: getPopupContainer },
                    React.createElement(
                        'div',
                        { className: selectionPrefixCls + '-down' },
                        React.createElement(_icon2['default'], { type: 'down' })
                    )
                ) : null;
            }
            return React.createElement(
                'div',
                { className: selectionPrefixCls },
                React.createElement(_checkbox2['default'], { className: (0, _classnames2['default'])((0, _defineProperty3['default'])({}, selectionPrefixCls + '-select-all-custom', customSelections)), checked: checked, indeterminate: indeterminate, disabled: disabled, onChange: this.handleSelectAllChagne }),
                customSelections
            );
        }
    }]);
    return SelectionCheckboxAll;
}(React.Component);

exports['default'] = SelectionCheckboxAll;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/Table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends5 = _interopRequireDefault(_extends4);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcTable = __webpack_require__("./node_modules/rc-table/es/index.js");

var _rcTable2 = _interopRequireDefault(_rcTable);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _pagination = __webpack_require__("./node_modules/antd/lib/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _spin = __webpack_require__("./node_modules/antd/lib/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _LocaleReceiver = __webpack_require__("./node_modules/antd/lib/locale-provider/LocaleReceiver.js");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = __webpack_require__("./node_modules/antd/lib/locale-provider/default.js");

var _default2 = _interopRequireDefault(_default);

var _warning = __webpack_require__("./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _filterDropdown = __webpack_require__("./node_modules/antd/lib/table/filterDropdown.js");

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _createStore = __webpack_require__("./node_modules/antd/lib/table/createStore.js");

var _createStore2 = _interopRequireDefault(_createStore);

var _SelectionBox = __webpack_require__("./node_modules/antd/lib/table/SelectionBox.js");

var _SelectionBox2 = _interopRequireDefault(_SelectionBox);

var _SelectionCheckboxAll = __webpack_require__("./node_modules/antd/lib/table/SelectionCheckboxAll.js");

var _SelectionCheckboxAll2 = _interopRequireDefault(_SelectionCheckboxAll);

var _Column = __webpack_require__("./node_modules/antd/lib/table/Column.js");

var _Column2 = _interopRequireDefault(_Column);

var _ColumnGroup = __webpack_require__("./node_modules/antd/lib/table/ColumnGroup.js");

var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

var _createBodyRow = __webpack_require__("./node_modules/antd/lib/table/createBodyRow.js");

var _createBodyRow2 = _interopRequireDefault(_createBodyRow);

var _util = __webpack_require__("./node_modules/antd/lib/table/util.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function noop() {}
function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
function getRowSelection(props) {
    return props.rowSelection || {};
}
var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};
/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately。
 */
var emptyObject = {};

var Table = function (_React$Component) {
    (0, _inherits3['default'])(Table, _React$Component);

    function Table(props) {
        (0, _classCallCheck3['default'])(this, Table);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.getCheckboxPropsByItem = function (item, index) {
            var rowSelection = getRowSelection(_this.props);
            if (!rowSelection.getCheckboxProps) {
                return {};
            }
            var key = _this.getRecordKey(item, index);
            // Cache checkboxProps
            if (!_this.CheckboxPropsCache[key]) {
                _this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
            }
            return _this.CheckboxPropsCache[key];
        };
        _this.onRow = function (record, index) {
            var _this$props = _this.props,
                onRow = _this$props.onRow,
                prefixCls = _this$props.prefixCls;

            var custom = onRow ? onRow(record, index) : {};
            return (0, _extends5['default'])({}, custom, { prefixCls: prefixCls, store: _this.store, rowKey: _this.getRecordKey(record, index) });
        };
        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = (0, _extends5['default'])({}, _this.state.pagination);
            var filters = (0, _extends5['default'])({}, _this.state.filters, (0, _defineProperty3['default'])({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = [];
            (0, _util.treeMap)(_this.columns, function (c) {
                if (!c.children) {
                    currentColumnKeys.push(_this.getColumnKey(c));
                }
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                pagination: pagination,
                filters: {}
            };
            var filtersToSetState = (0, _extends5['default'])({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if ((0, _typeof3['default'])(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = (0, _extends5['default'])({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState, function () {
                _this.store.setState({
                    selectionDirty: false
                });
                var onChange = _this.props.onChange;
                if (onChange) {
                    onChange.apply(null, _this.prepareParamsArguments((0, _extends5['default'])({}, _this.state, { selectionDirty: false, filters: filters,
                        pagination: pagination })));
                }
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var nativeEvent = e.nativeEvent;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked,
                changeRowKeys: void 0,
                nativeEvent: nativeEvent
            });
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var nativeEvent = e.nativeEvent;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked,
                changeRowKeys: void 0,
                nativeEvent: nativeEvent
            });
        };
        _this.handleSelectRow = function (selectionKey, index, onSelectFunc) {
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var changeableRowKeys = data.filter(function (item, i) {
                return !_this.getCheckboxPropsByItem(item, i).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            var changeRowKeys = [];
            var selectWay = 'onSelectAll';
            var checked = void 0;
            // handle default selection
            switch (selectionKey) {
                case 'all':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = true;
                    break;
                case 'removeAll':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) >= 0) {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = false;
                    break;
                case 'invert':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                        } else {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        }
                        changeRowKeys.push(key);
                        selectWay = 'onSelectInvert';
                    });
                    break;
                default:
                    break;
            }
            _this.store.setState({
                selectionDirty: true
            });
            // when select custom selection, callback selections[n].onSelect
            var rowSelection = _this.props.rowSelection;

            var customSelectionStartIndex = 2;
            if (rowSelection && rowSelection.hideDefaultSelections) {
                customSelectionStartIndex = 0;
            }
            if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
                return onSelectFunc(changeableRowKeys);
            }
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: selectWay,
                checked: checked,
                changeRowKeys: changeRowKeys
            });
        };
        _this.handlePageChange = function (current) {
            for (var _len = arguments.length, otherArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                otherArguments[_key - 1] = arguments[_key];
            }

            var props = _this.props;
            var pagination = (0, _extends5['default'])({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));
            var newState = {
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if (props.pagination && (0, _typeof3['default'])(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = (0, _extends5['default'])({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState);
            _this.store.setState({
                selectionDirty: false
            });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments((0, _extends5['default'])({}, _this.state, { selectionDirty: false, pagination: pagination })));
            }
        };
        _this.renderSelectionBox = function (type) {
            return function (_, record, index) {
                var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
                var props = _this.getCheckboxPropsByItem(record, index);
                var handleChange = function handleChange(e) {
                    type === 'radio' ? _this.handleRadioSelect(record, rowIndex, e) : _this.handleSelect(record, rowIndex, e);
                };
                return React.createElement(
                    'span',
                    { onClick: stopPropagation },
                    React.createElement(_SelectionBox2['default'], (0, _extends5['default'])({ type: type, store: _this.store, rowIndex: rowIndex, onChange: handleChange, defaultSelection: _this.getDefaultSelection() }, props))
                );
            };
        };
        _this.getRecordKey = function (record, index) {
            var rowKey = _this.props.rowKey;
            var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
            (0, _warning2['default'])(recordKey !== undefined, 'Each record in dataSource of table should have a unique `key` prop, or set `rowKey` to an unique primary key,' + 'see https://u.ant.design/table-row-key');
            return recordKey === undefined ? index : recordKey;
        };
        _this.getPopupContainer = function () {
            return ReactDOM.findDOMNode(_this);
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = (0, _extends5['default'])({}, pagination, { pageSize: pageSize,
                current: current });
            _this.setState({ pagination: nextPagination });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments((0, _extends5['default'])({}, _this.state, { pagination: nextPagination })));
            }
        };
        _this.renderTable = function (contextLocale, loading) {
            var _classNames;

            var locale = (0, _extends5['default'])({}, contextLocale, _this.props.locale);
            var _a = _this.props,
                style = _a.style,
                className = _a.className,
                prefixCls = _a.prefixCls,
                showHeader = _a.showHeader,
                restProps = __rest(_a, ["style", "className", "prefixCls", "showHeader"]);
            var data = _this.getCurrentPageData();
            var expandIconAsCell = _this.props.expandedRowRender && _this.props.expandIconAsCell !== false;
            var classString = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + _this.props.size, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-bordered', _this.props.bordered), (0, _defineProperty3['default'])(_classNames, prefixCls + '-empty', !data.length), (0, _defineProperty3['default'])(_classNames, prefixCls + '-without-column-header', !showHeader), _classNames));
            var columns = _this.renderRowSelection(locale);
            columns = _this.renderColumnsDropdown(columns, locale);
            columns = columns.map(function (column, i) {
                var newColumn = (0, _extends5['default'])({}, column);
                newColumn.key = _this.getColumnKey(newColumn, i);
                return newColumn;
            });
            var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
            if ('expandIconColumnIndex' in restProps) {
                expandIconColumnIndex = restProps.expandIconColumnIndex;
            }
            return React.createElement(_rcTable2['default'], (0, _extends5['default'])({ key: 'table' }, restProps, { onRow: _this.onRow, components: _this.components, prefixCls: prefixCls, data: data, columns: columns, showHeader: showHeader, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: !loading.spinning && locale.emptyText }));
        };
        (0, _warning2['default'])(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: https://u.ant.design/fixed-columns.');
        _this.columns = props.columns || (0, _util.normalizeColumns)(props.children);
        _this.createComponents(props.components);
        _this.state = (0, _extends5['default'])({}, _this.getDefaultSortOrder(_this.columns), {
            // 减少状态
            filters: _this.getFiltersFromColumns(), pagination: _this.getDefaultPagination(props) });
        _this.CheckboxPropsCache = {};
        _this.store = (0, _createStore2['default'])({
            selectedRowKeys: getRowSelection(props).selectedRowKeys || [],
            selectionDirty: false
        });
        return _this;
    }

    (0, _createClass3['default'])(Table, [{
        key: 'getDefaultSelection',
        value: function getDefaultSelection() {
            var _this2 = this;

            var rowSelection = getRowSelection(this.props);
            if (!rowSelection.getCheckboxProps) {
                return [];
            }
            return this.getFlatData().filter(function (item, rowIndex) {
                return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
            }).map(function (record, rowIndex) {
                return _this2.getRecordKey(record, rowIndex);
            });
        }
    }, {
        key: 'getDefaultPagination',
        value: function getDefaultPagination(props) {
            var pagination = props.pagination || {};
            return this.hasPagination(props) ? (0, _extends5['default'])({}, defaultPagination, pagination, { current: pagination.defaultCurrent || pagination.current || 1, pageSize: pagination.defaultPageSize || pagination.pageSize || 10 }) : {};
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.columns = nextProps.columns || (0, _util.normalizeColumns)(nextProps.children);
            if ('pagination' in nextProps || 'pagination' in this.props) {
                this.setState(function (previousState) {
                    var newPagination = (0, _extends5['default'])({}, defaultPagination, previousState.pagination, nextProps.pagination);
                    newPagination.current = newPagination.current || 1;
                    newPagination.pageSize = newPagination.pageSize || 10;
                    return { pagination: nextProps.pagination !== false ? newPagination : emptyObject };
                });
            }
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                this.store.setState({
                    selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
                });
            }
            if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
                this.store.setState({
                    selectionDirty: false
                });
            }
            // https://github.com/ant-design/ant-design/issues/10133
            this.CheckboxPropsCache = {};
            if (this.getSortOrderColumns(this.columns).length > 0) {
                var sortState = this.getSortStateFromColumns(this.columns);
                if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                    this.setState(sortState);
                }
            }
            var filteredValueColumns = this.getFilteredValueColumns(this.columns);
            if (filteredValueColumns.length > 0) {
                var filtersFromColumns = this.getFiltersFromColumns(this.columns);
                var newFilters = (0, _extends5['default'])({}, this.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (this.isFiltersChanged(newFilters)) {
                    this.setState({ filters: newFilters });
                }
            }
            this.createComponents(nextProps.components, this.props.components);
        }
    }, {
        key: 'setSelectedRowKeys',
        value: function setSelectedRowKeys(selectedRowKeys, selectionInfo) {
            var _this3 = this;

            var selectWay = selectionInfo.selectWay,
                record = selectionInfo.record,
                checked = selectionInfo.checked,
                changeRowKeys = selectionInfo.changeRowKeys,
                nativeEvent = selectionInfo.nativeEvent;

            var rowSelection = getRowSelection(this.props);
            if (rowSelection && !('selectedRowKeys' in rowSelection)) {
                this.store.setState({ selectedRowKeys: selectedRowKeys });
            }
            var data = this.getFlatData();
            if (!rowSelection.onChange && !rowSelection[selectWay]) {
                return;
            }
            var selectedRows = data.filter(function (row, i) {
                return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
            });
            if (rowSelection.onChange) {
                rowSelection.onChange(selectedRowKeys, selectedRows);
            }
            if (selectWay === 'onSelect' && rowSelection.onSelect) {
                rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
            } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
                var changeRows = data.filter(function (row, i) {
                    return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
                });
                rowSelection.onSelectAll(checked, selectedRows, changeRows);
            } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
                rowSelection.onSelectInvert(selectedRowKeys);
            }
        }
    }, {
        key: 'hasPagination',
        value: function hasPagination(props) {
            return (props || this.props).pagination !== false;
        }
    }, {
        key: 'isFiltersChanged',
        value: function isFiltersChanged(filters) {
            var _this4 = this;

            var filtersChanged = false;
            if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
                filtersChanged = true;
            } else {
                Object.keys(filters).forEach(function (columnKey) {
                    if (filters[columnKey] !== _this4.state.filters[columnKey]) {
                        filtersChanged = true;
                    }
                });
            }
            return filtersChanged;
        }
    }, {
        key: 'getSortOrderColumns',
        value: function getSortOrderColumns(columns) {
            return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
                return 'sortOrder' in column;
            });
        }
    }, {
        key: 'getFilteredValueColumns',
        value: function getFilteredValueColumns(columns) {
            return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
                return typeof column.filteredValue !== 'undefined';
            });
        }
    }, {
        key: 'getFiltersFromColumns',
        value: function getFiltersFromColumns(columns) {
            var _this5 = this;

            var filters = {};
            this.getFilteredValueColumns(columns).forEach(function (col) {
                var colKey = _this5.getColumnKey(col);
                filters[colKey] = col.filteredValue;
            });
            return filters;
        }
    }, {
        key: 'getDefaultSortOrder',
        value: function getDefaultSortOrder(columns) {
            var definedSortState = this.getSortStateFromColumns(columns);
            var defaultSortedColumn = (0, _util.flatFilter)(columns || [], function (column) {
                return column.defaultSortOrder != null;
            })[0];
            if (defaultSortedColumn && !definedSortState.sortColumn) {
                return {
                    sortColumn: defaultSortedColumn,
                    sortOrder: defaultSortedColumn.defaultSortOrder
                };
            }
            return definedSortState;
        }
    }, {
        key: 'getSortStateFromColumns',
        value: function getSortStateFromColumns(columns) {
            // return first column which sortOrder is not falsy
            var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
                return col.sortOrder;
            })[0];
            if (sortedColumn) {
                return {
                    sortColumn: sortedColumn,
                    sortOrder: sortedColumn.sortOrder
                };
            }
            return {
                sortColumn: null,
                sortOrder: null
            };
        }
    }, {
        key: 'getSorterFn',
        value: function getSorterFn() {
            var _state = this.state,
                sortOrder = _state.sortOrder,
                sortColumn = _state.sortColumn;

            if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
                return;
            }
            return function (a, b) {
                var result = sortColumn.sorter(a, b, sortOrder);
                if (result !== 0) {
                    return sortOrder === 'descend' ? -result : result;
                }
                return 0;
            };
        }
    }, {
        key: 'toggleSortOrder',
        value: function toggleSortOrder(order, column) {
            var _state2 = this.state,
                sortColumn = _state2.sortColumn,
                sortOrder = _state2.sortOrder;
            // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

            var isSortColumn = this.isSortColumn(column);
            if (!isSortColumn) {
                // 当前列未排序
                sortOrder = order;
                sortColumn = column;
            } else {
                // 当前列已排序
                if (sortOrder === order) {
                    // 切换为未排序状态
                    sortOrder = undefined;
                    sortColumn = null;
                } else {
                    // 切换为排序状态
                    sortOrder = order;
                }
            }
            var newState = {
                sortOrder: sortOrder,
                sortColumn: sortColumn
            };
            // Controlled
            if (this.getSortOrderColumns().length === 0) {
                this.setState(newState);
            }
            var onChange = this.props.onChange;
            if (onChange) {
                onChange.apply(null, this.prepareParamsArguments((0, _extends5['default'])({}, this.state, newState)));
            }
        }
    }, {
        key: 'renderRowSelection',
        value: function renderRowSelection(locale) {
            var _this6 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                rowSelection = _props.rowSelection;

            var columns = this.columns.concat();
            if (rowSelection) {
                var data = this.getFlatCurrentPageData().filter(function (item, index) {
                    if (rowSelection.getCheckboxProps) {
                        return !_this6.getCheckboxPropsByItem(item, index).disabled;
                    }
                    return true;
                });
                var selectionColumnClass = (0, _classnames2['default'])(prefixCls + '-selection-column', (0, _defineProperty3['default'])({}, prefixCls + '-selection-column-custom', rowSelection.selections));
                var selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionBox(rowSelection.type),
                    className: selectionColumnClass,
                    fixed: rowSelection.fixed,
                    width: rowSelection.columnWidth
                };
                if (rowSelection.type !== 'radio') {
                    var checkboxAllDisabled = data.every(function (item, index) {
                        return _this6.getCheckboxPropsByItem(item, index).disabled;
                    });
                    selectionColumn.title = React.createElement(_SelectionCheckboxAll2['default'], { store: this.store, locale: locale, data: data, getCheckboxPropsByItem: this.getCheckboxPropsByItem, getRecordKey: this.getRecordKey, disabled: checkboxAllDisabled, prefixCls: prefixCls, onSelect: this.handleSelectRow, selections: rowSelection.selections, hideDefaultSelections: rowSelection.hideDefaultSelections, getPopupContainer: this.getPopupContainer });
                }
                if ('fixed' in rowSelection) {
                    selectionColumn.fixed = rowSelection.fixed;
                } else if (columns.some(function (column) {
                    return column.fixed === 'left' || column.fixed === true;
                })) {
                    selectionColumn.fixed = 'left';
                }
                if (columns[0] && columns[0].key === 'selection-column') {
                    columns[0] = selectionColumn;
                } else {
                    columns.unshift(selectionColumn);
                }
            }
            return columns;
        }
    }, {
        key: 'getColumnKey',
        value: function getColumnKey(column, index) {
            return column.key || column.dataIndex || index;
        }
    }, {
        key: 'getMaxCurrent',
        value: function getMaxCurrent(total) {
            var _state$pagination = this.state.pagination,
                current = _state$pagination.current,
                pageSize = _state$pagination.pageSize;

            if ((current - 1) * pageSize >= total) {
                return Math.floor((total - 1) / pageSize) + 1;
            }
            return current;
        }
    }, {
        key: 'isSortColumn',
        value: function isSortColumn(column) {
            var sortColumn = this.state.sortColumn;

            if (!column || !sortColumn) {
                return false;
            }
            return this.getColumnKey(sortColumn) === this.getColumnKey(column);
        }
    }, {
        key: 'renderColumnsDropdown',
        value: function renderColumnsDropdown(columns, locale) {
            var _this7 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                dropdownPrefixCls = _props2.dropdownPrefixCls;
            var sortOrder = this.state.sortOrder;

            return (0, _util.treeMap)(columns, function (originColumn, i) {
                var column = (0, _extends5['default'])({}, originColumn);
                var key = _this7.getColumnKey(column, i);
                var filterDropdown = void 0;
                var sortButton = void 0;
                if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                    var colFilters = _this7.state.filters[key] || [];
                    filterDropdown = React.createElement(_filterDropdown2['default'], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this7.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown', getPopupContainer: _this7.getPopupContainer });
                }
                if (column.sorter) {
                    var isSortColumn = _this7.isSortColumn(column);
                    if (isSortColumn) {
                        column.className = (0, _classnames2['default'])(column.className, (0, _defineProperty3['default'])({}, prefixCls + '-column-sort', sortOrder));
                    }
                    var isAscend = isSortColumn && sortOrder === 'ascend';
                    var isDescend = isSortColumn && sortOrder === 'descend';
                    sortButton = React.createElement(
                        'div',
                        { className: prefixCls + '-column-sorter' },
                        React.createElement(
                            'span',
                            { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
                                    return _this7.toggleSortOrder('ascend', column);
                                } },
                            React.createElement(_icon2['default'], { type: 'caret-up' })
                        ),
                        React.createElement(
                            'span',
                            { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
                                    return _this7.toggleSortOrder('descend', column);
                                } },
                            React.createElement(_icon2['default'], { type: 'caret-down' })
                        )
                    );
                }
                column.title = React.createElement(
                    'span',
                    { key: key },
                    column.title,
                    sortButton,
                    filterDropdown
                );
                if (sortButton || filterDropdown) {
                    column.className = (0, _classnames2['default'])(prefixCls + '-column-has-filters', column.className);
                }
                return column;
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination(paginationPosition) {
            // 强制不需要分页
            if (!this.hasPagination()) {
                return null;
            }
            var size = 'default';
            var pagination = this.state.pagination;

            if (pagination.size) {
                size = pagination.size;
            } else if (this.props.size === 'middle' || this.props.size === 'small') {
                size = 'small';
            }
            var position = pagination.position || 'bottom';
            var total = pagination.total || this.getLocalData().length;
            return total > 0 && (position === paginationPosition || position === 'both') ? React.createElement(_pagination2['default'], (0, _extends5['default'])({ key: 'pagination-' + paginationPosition }, pagination, { className: (0, _classnames2['default'])(pagination.className, this.props.prefixCls + '-pagination'), onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
        }
        // Get pagination, filters, sorter

    }, {
        key: 'prepareParamsArguments',
        value: function prepareParamsArguments(state) {
            var pagination = (0, _extends5['default'])({}, state.pagination);
            // remove useless handle function in Table.onChange
            delete pagination.onChange;
            delete pagination.onShowSizeChange;
            var filters = state.filters;
            var sorter = {};
            if (state.sortColumn && state.sortOrder) {
                sorter.column = state.sortColumn;
                sorter.order = state.sortOrder;
                sorter.field = state.sortColumn.dataIndex;
                sorter.columnKey = this.getColumnKey(state.sortColumn);
            }
            return [pagination, filters, sorter];
        }
    }, {
        key: 'findColumn',
        value: function findColumn(myKey) {
            var _this8 = this;

            var column = void 0;
            (0, _util.treeMap)(this.columns, function (c) {
                if (_this8.getColumnKey(c) === myKey) {
                    column = c;
                }
            });
            return column;
        }
    }, {
        key: 'getCurrentPageData',
        value: function getCurrentPageData() {
            var data = this.getLocalData();
            var current = void 0;
            var pageSize = void 0;
            var state = this.state;
            // 如果没有分页的话，默认全部展示
            if (!this.hasPagination()) {
                pageSize = Number.MAX_VALUE;
                current = 1;
            } else {
                pageSize = state.pagination.pageSize;
                current = this.getMaxCurrent(state.pagination.total || data.length);
            }
            // 分页
            // ---
            // 当数据量少于等于每页数量时，直接设置数据
            // 否则进行读取分页数据
            if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
                data = data.filter(function (_, i) {
                    return i >= (current - 1) * pageSize && i < current * pageSize;
                });
            }
            return data;
        }
    }, {
        key: 'getFlatData',
        value: function getFlatData() {
            return (0, _util.flatArray)(this.getLocalData());
        }
    }, {
        key: 'getFlatCurrentPageData',
        value: function getFlatCurrentPageData() {
            return (0, _util.flatArray)(this.getCurrentPageData());
        }
    }, {
        key: 'recursiveSort',
        value: function recursiveSort(data, sorterFn) {
            var _this9 = this;

            var _props$childrenColumn = this.props.childrenColumnName,
                childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

            return data.sort(sorterFn).map(function (item) {
                return item[childrenColumnName] ? (0, _extends5['default'])({}, item, (0, _defineProperty3['default'])({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
            });
        }
    }, {
        key: 'getLocalData',
        value: function getLocalData() {
            var _this10 = this;

            var state = this.state;
            var dataSource = this.props.dataSource;

            var data = dataSource || [];
            // 优化本地排序
            data = data.slice(0);
            var sorterFn = this.getSorterFn();
            if (sorterFn) {
                data = this.recursiveSort(data, sorterFn);
            }
            // 筛选
            if (state.filters) {
                Object.keys(state.filters).forEach(function (columnKey) {
                    var col = _this10.findColumn(columnKey);
                    if (!col) {
                        return;
                    }
                    var values = state.filters[columnKey] || [];
                    if (values.length === 0) {
                        return;
                    }
                    var onFilter = col.onFilter;
                    data = onFilter ? data.filter(function (record) {
                        return values.some(function (v) {
                            return onFilter(v, record);
                        });
                    }) : data;
                });
            }
            return data;
        }
    }, {
        key: 'createComponents',
        value: function createComponents() {
            var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var prevComponents = arguments[1];

            var bodyRow = components && components.body && components.body.row;
            var preBodyRow = prevComponents && prevComponents.body && prevComponents.body.row;
            if (!this.components || bodyRow !== preBodyRow) {
                this.components = (0, _extends5['default'])({}, components);
                this.components.body = (0, _extends5['default'])({}, components.body, { row: (0, _createBodyRow2['default'])(bodyRow) });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            var _props3 = this.props,
                style = _props3.style,
                className = _props3.className,
                prefixCls = _props3.prefixCls;

            var data = this.getCurrentPageData();
            var loading = this.props.loading;
            if (typeof loading === 'boolean') {
                loading = {
                    spinning: loading
                };
            }
            var table = React.createElement(
                _LocaleReceiver2['default'],
                { componentName: 'Table', defaultLocale: _default2['default'].Table },
                function (locale) {
                    return _this11.renderTable(locale, loading);
                }
            );
            // if there is no pagination or no data,
            // the height of spin should decrease by half of pagination
            var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
            return React.createElement(
                'div',
                { className: (0, _classnames2['default'])(prefixCls + '-wrapper', className), style: style },
                React.createElement(
                    _spin2['default'],
                    (0, _extends5['default'])({}, loading, { className: loading.spinning ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '' }),
                    this.renderPagination('top'),
                    table,
                    this.renderPagination('bottom')
                )
            );
        }
    }]);
    return Table;
}(React.Component);

exports['default'] = Table;

Table.Column = _Column2['default'];
Table.ColumnGroup = _ColumnGroup2['default'];
Table.propTypes = {
    dataSource: _propTypes2['default'].array,
    columns: _propTypes2['default'].array,
    prefixCls: _propTypes2['default'].string,
    useFixedHeader: _propTypes2['default'].bool,
    rowSelection: _propTypes2['default'].object,
    className: _propTypes2['default'].string,
    size: _propTypes2['default'].string,
    loading: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    bordered: _propTypes2['default'].bool,
    onChange: _propTypes2['default'].func,
    locale: _propTypes2['default'].object,
    dropdownPrefixCls: _propTypes2['default'].string
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    useFixedHeader: false,
    className: '',
    size: 'default',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/createBodyRow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createTableRow;

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _omit = __webpack_require__("./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function createTableRow() {
    var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';

    var BodyRow = function (_React$Component) {
        (0, _inherits3['default'])(BodyRow, _React$Component);

        function BodyRow(props) {
            (0, _classCallCheck3['default'])(this, BodyRow);

            var _this = (0, _possibleConstructorReturn3['default'])(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).call(this, props));

            _this.store = props.store;

            var _this$store$getState = _this.store.getState(),
                selectedRowKeys = _this$store$getState.selectedRowKeys;

            _this.state = {
                selected: selectedRowKeys.indexOf(props.rowKey) >= 0
            };
            return _this;
        }

        (0, _createClass3['default'])(BodyRow, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.subscribe();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        }, {
            key: 'subscribe',
            value: function subscribe() {
                var _this2 = this;

                var _props = this.props,
                    store = _props.store,
                    rowKey = _props.rowKey;

                this.unsubscribe = store.subscribe(function () {
                    var _store$getState = _this2.store.getState(),
                        selectedRowKeys = _store$getState.selectedRowKeys;

                    var selected = selectedRowKeys.indexOf(rowKey) >= 0;
                    if (selected !== _this2.state.selected) {
                        _this2.setState({ selected: selected });
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var rowProps = (0, _omit2['default'])(this.props, ['prefixCls', 'rowKey', 'store']);
                var className = (0, _classnames3['default'])(this.props.className, (0, _defineProperty3['default'])({}, this.props.prefixCls + '-row-selected', this.state.selected));
                return React.createElement(
                    Component,
                    (0, _extends3['default'])({}, rowProps, { className: className }),
                    this.props.children
                );
            }
        }]);
        return BodyRow;
    }(React.Component);

    return BodyRow;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/createStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports["default"] = createStore;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createStore(initialState) {
    var state = initialState;
    var listeners = [];
    function setState(partial) {
        state = (0, _extends3["default"])({}, state, partial);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }
    return {
        setState: setState,
        getState: getState,
        subscribe: subscribe
    };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/antd/lib/table/filterDropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcMenu = __webpack_require__("./node_modules/rc-menu/es/index.js");

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _domClosest = __webpack_require__("./node_modules/dom-closest/index.js");

var _domClosest2 = _interopRequireDefault(_domClosest);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _dropdown = __webpack_require__("./node_modules/antd/lib/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = __webpack_require__("./node_modules/antd/lib/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__("./node_modules/antd/lib/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _FilterDropdownMenuWrapper = __webpack_require__("./node_modules/antd/lib/table/FilterDropdownMenuWrapper.js");

var _FilterDropdownMenuWrapper2 = _interopRequireDefault(_FilterDropdownMenuWrapper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FilterMenu = function (_React$Component) {
    (0, _inherits3['default'])(FilterMenu, _React$Component);

    function FilterMenu(props) {
        (0, _classCallCheck3['default'])(this, FilterMenu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (FilterMenu.__proto__ || Object.getPrototypeOf(FilterMenu)).call(this, props));

        _this.setNeverShown = function (column) {
            var rootNode = ReactDOM.findDOMNode(_this);
            var filterBelongToScrollBody = !!(0, _domClosest2['default'])(rootNode, '.ant-table-scroll');
            if (filterBelongToScrollBody) {
                // When fixed column have filters, there will be two dropdown menus
                // Filter dropdown menu inside scroll body should never be shown
                // To fix https://github.com/ant-design/ant-design/issues/5010 and
                // https://github.com/ant-design/ant-design/issues/7909
                _this.neverShown = !!column.fixed;
            }
        };
        _this.setSelectedKeys = function (_ref) {
            var selectedKeys = _ref.selectedKeys;

            _this.setState({ selectedKeys: selectedKeys });
        };
        _this.handleClearFilters = function () {
            _this.setState({
                selectedKeys: []
            }, _this.handleConfirm);
        };
        _this.handleConfirm = function () {
            _this.setVisible(false);
            _this.confirmFilter();
        };
        _this.onVisibleChange = function (visible) {
            _this.setVisible(visible);
            if (!visible) {
                _this.confirmFilter();
            }
        };
        _this.handleMenuItemClick = function (info) {
            if (!info.keyPath || info.keyPath.length <= 1) {
                return;
            }
            var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
            if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
                // deselect SubMenu child
                delete keyPathOfSelectedItem[info.key];
            } else {
                // select SubMenu child
                keyPathOfSelectedItem[info.key] = info.keyPath;
            }
            _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
        };
        _this.renderFilterIcon = function () {
            var _this$props = _this.props,
                column = _this$props.column,
                locale = _this$props.locale,
                prefixCls = _this$props.prefixCls;

            var filterIcon = column.filterIcon;
            var dropdownSelectedClass = _this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';
            return filterIcon ? React.cloneElement(filterIcon, {
                title: locale.filterTitle,
                className: (0, _classnames2['default'])(prefixCls + '-icon', filterIcon.props.className)
            }) : React.createElement(_icon2['default'], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass });
        };
        var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
        _this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {},
            visible: visible
        };
        return _this;
    }

    (0, _createClass3['default'])(FilterMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var column = this.props.column;

            this.setNeverShown(column);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var column = nextProps.column;

            this.setNeverShown(column);
            var newState = {};
            /**
             * if the state is visible the component should ignore updates on selectedKeys prop to avoid
             * that the user selection is lost
             * this happens frequently when a table is connected on some sort of realtime data
             * Fixes https://github.com/ant-design/ant-design/issues/10289 and
             * https://github.com/ant-design/ant-design/issues/10209
             */
            if ('selectedKeys' in nextProps && !(0, _shallowequal2['default'])(this.props.selectedKeys, nextProps.selectedKeys)) {
                newState.selectedKeys = nextProps.selectedKeys;
            }
            if ('filterDropdownVisible' in column) {
                newState.visible = column.filterDropdownVisible;
            }
            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            var column = this.props.column;

            if (!('filterDropdownVisible' in column)) {
                this.setState({ visible: visible });
            }
            if (column.onFilterDropdownVisibleChange) {
                column.onFilterDropdownVisibleChange(visible);
            }
        }
    }, {
        key: 'confirmFilter',
        value: function confirmFilter() {
            if (this.state.selectedKeys !== this.props.selectedKeys) {
                this.props.confirmFilter(this.props.column, this.state.selectedKeys);
            }
        }
    }, {
        key: 'renderMenuItem',
        value: function renderMenuItem(item) {
            var column = this.props.column;
            var selectedKeys = this.state.selectedKeys;

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var input = multiple ? React.createElement(_checkbox2['default'], { checked: selectedKeys.indexOf(item.value.toString()) >= 0 }) : React.createElement(_radio2['default'], { checked: selectedKeys.indexOf(item.value.toString()) >= 0 });
            return React.createElement(
                _rcMenu.Item,
                { key: item.value },
                input,
                React.createElement(
                    'span',
                    null,
                    item.text
                )
            );
        }
    }, {
        key: 'hasSubMenu',
        value: function hasSubMenu() {
            var _props$column$filters = this.props.column.filters,
                filters = _props$column$filters === undefined ? [] : _props$column$filters;

            return filters.some(function (item) {
                return !!(item.children && item.children.length > 0);
            });
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(items) {
            var _this2 = this;

            return items.map(function (item) {
                if (item.children && item.children.length > 0) {
                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
                    });
                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
                    return React.createElement(
                        _rcMenu.SubMenu,
                        { title: item.text, className: subMenuCls, key: item.value.toString() },
                        _this2.renderMenus(item.children)
                    );
                }
                return _this2.renderMenuItem(item);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                column = _props.column,
                locale = _props.locale,
                prefixCls = _props.prefixCls,
                dropdownPrefixCls = _props.dropdownPrefixCls,
                getPopupContainer = _props.getPopupContainer;
            // default multiple selection in filter dropdown

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var dropdownMenuClass = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, dropdownPrefixCls + '-menu-without-submenu', !this.hasSubMenu()));
            var menus = column.filterDropdown ? React.createElement(
                _FilterDropdownMenuWrapper2['default'],
                null,
                column.filterDropdown
            ) : React.createElement(
                _FilterDropdownMenuWrapper2['default'],
                { className: prefixCls + '-dropdown' },
                React.createElement(
                    _rcMenu2['default'],
                    { multiple: multiple, onClick: this.handleMenuItemClick, prefixCls: dropdownPrefixCls + '-menu', className: dropdownMenuClass, onSelect: this.setSelectedKeys, onDeselect: this.setSelectedKeys, selectedKeys: this.state.selectedKeys, getPopupContainer: function getPopupContainer(triggerNode) {
                            return triggerNode.parentNode;
                        } },
                    this.renderMenus(column.filters)
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-dropdown-btns' },
                    React.createElement(
                        'a',
                        { className: prefixCls + '-dropdown-link confirm', onClick: this.handleConfirm },
                        locale.filterConfirm
                    ),
                    React.createElement(
                        'a',
                        { className: prefixCls + '-dropdown-link clear', onClick: this.handleClearFilters },
                        locale.filterReset
                    )
                )
            );
            return React.createElement(
                _dropdown2['default'],
                { trigger: ['click'], overlay: menus, visible: this.neverShown ? false : this.state.visible, onVisibleChange: this.onVisibleChange, getPopupContainer: getPopupContainer, forceRender: true },
                this.renderFilterIcon()
            );
        }
    }]);
    return FilterMenu;
}(React.Component);

exports['default'] = FilterMenu;

FilterMenu.defaultProps = {
    handleFilter: function handleFilter() {},

    column: {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Table = __webpack_require__("./node_modules/antd/lib/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Table2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/table/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/table/style/index.css");

__webpack_require__("./node_modules/antd/lib/radio/style/css.js");

__webpack_require__("./node_modules/antd/lib/checkbox/style/css.js");

__webpack_require__("./node_modules/antd/lib/dropdown/style/css.js");

__webpack_require__("./node_modules/antd/lib/spin/style/css.js");

__webpack_require__("./node_modules/antd/lib/pagination/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/table/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.flatArray = flatArray;
exports.treeMap = treeMap;
exports.flatFilter = flatFilter;
exports.normalizeColumns = normalizeColumns;

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function flatArray() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

    var result = [];
    var loop = function loop(array) {
        array.forEach(function (item) {
            if (item[childrenName]) {
                var newItem = (0, _extends3['default'])({}, item);
                delete newItem[childrenName];
                result.push(newItem);
                if (item[childrenName].length > 0) {
                    loop(item[childrenName]);
                }
            } else {
                result.push(item);
            }
        });
    };
    loop(data);
    return result;
}
function treeMap(tree, mapper) {
    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    return tree.map(function (node, index) {
        var extra = {};
        if (node[childrenName]) {
            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
        }
        return (0, _extends3['default'])({}, mapper(node, index), extra);
    });
}
function flatFilter(tree, callback) {
    return tree.reduce(function (acc, node) {
        if (callback(node)) {
            acc.push(node);
        }
        if (node.children) {
            var children = flatFilter(node.children, callback);
            acc.push.apply(acc, (0, _toConsumableArray3['default'])(children));
        }
        return acc;
    }, []);
}
function normalizeColumns(elements) {
    var columns = [];
    React.Children.forEach(elements, function (element) {
        if (!React.isValidElement(element)) {
            return;
        }
        var column = (0, _extends3['default'])({}, element.props);
        if (element.key) {
            column.key = element.key;
        }
        if (element.type && element.type.__ANT_TABLE_COLUMN_GROUP) {
            column.children = normalizeColumns(column.children);
        }
        columns.push(column);
    });
    return columns;
}

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: 'Select time'
};
exports['default'] = locale;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rcTooltip = __webpack_require__("./node_modules/rc-tooltip/es/index.js");

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = __webpack_require__("./node_modules/antd/lib/tooltip/placements.js");

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var splitObject = function splitObject(obj, keys) {
    var picked = {};
    var omitted = (0, _extends3['default'])({}, obj);
    keys.forEach(function (key) {
        if (obj && key in obj) {
            picked[key] = obj[key];
            delete omitted[key];
        }
    });
    return { picked: picked, omitted: omitted };
};

var Tooltip = function (_React$Component) {
    (0, _inherits3['default'])(Tooltip, _React$Component);

    function Tooltip(props) {
        (0, _classCallCheck3['default'])(this, Tooltip);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.onVisibleChange = function (visible) {
            var onVisibleChange = _this.props.onVisibleChange;

            if (!('visible' in _this.props)) {
                _this.setState({ visible: _this.isNoTitle() ? false : visible });
            }
            if (onVisibleChange && !_this.isNoTitle()) {
                onVisibleChange(visible);
            }
        };
        // 动态设置动画点
        _this.onPopupAlign = function (domNode, align) {
            var placements = _this.getPlacements();
            // 当前返回的位置
            var placement = Object.keys(placements).filter(function (key) {
                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
            })[0];
            if (!placement) {
                return;
            }
            // 根据当前坐标设置动画点
            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
                top: '50%',
                left: '50%'
            };
            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                transformOrigin.top = rect.height - align.offset[1] + 'px';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                transformOrigin.top = -align.offset[1] + 'px';
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                transformOrigin.left = rect.width - align.offset[0] + 'px';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                transformOrigin.left = -align.offset[0] + 'px';
            }
            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
        };
        _this.saveTooltip = function (node) {
            _this.tooltip = node;
        };
        _this.state = {
            visible: !!props.visible || !!props.defaultVisible
        };
        return _this;
    }

    (0, _createClass3['default'])(Tooltip, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('visible' in nextProps) {
                this.setState({ visible: nextProps.visible });
            }
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return this.tooltip.getPopupDomNode();
        }
    }, {
        key: 'getPlacements',
        value: function getPlacements() {
            var _props = this.props,
                builtinPlacements = _props.builtinPlacements,
                arrowPointAtCenter = _props.arrowPointAtCenter,
                autoAdjustOverflow = _props.autoAdjustOverflow;

            return builtinPlacements || (0, _placements2['default'])({
                arrowPointAtCenter: arrowPointAtCenter,
                verticalArrowShift: 8,
                autoAdjustOverflow: autoAdjustOverflow
            });
        }
    }, {
        key: 'isHoverTrigger',
        value: function isHoverTrigger() {
            var trigger = this.props.trigger;

            if (!trigger || trigger === 'hover') {
                return true;
            }
            if (Array.isArray(trigger)) {
                return trigger.indexOf('hover') >= 0;
            }
            return false;
        }
        // Fix Tooltip won't hide at disabled button
        // mouse events don't trigger at disabled button in Chrome
        // https://github.com/react-component/tooltip/issues/18

    }, {
        key: 'getDisabledCompatibleChildren',
        value: function getDisabledCompatibleChildren(element) {
            if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled && this.isHoverTrigger()) {
                // Pick some layout related style properties up to span
                // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
                var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
                    picked = _splitObject.picked,
                    omitted = _splitObject.omitted;

                var spanStyle = (0, _extends3['default'])({ display: 'inline-block' }, picked, { cursor: 'not-allowed' });
                var buttonStyle = (0, _extends3['default'])({}, omitted, { pointerEvents: 'none' });
                var child = (0, _react.cloneElement)(element, {
                    style: buttonStyle,
                    className: null
                });
                return React.createElement(
                    'span',
                    { style: spanStyle, className: element.props.className },
                    child
                );
            }
            return element;
        }
    }, {
        key: 'isNoTitle',
        value: function isNoTitle() {
            var _props2 = this.props,
                title = _props2.title,
                overlay = _props2.overlay;

            return !title && !overlay; // overlay for old version compatibility
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                title = props.title,
                overlay = props.overlay,
                openClassName = props.openClassName,
                getPopupContainer = props.getPopupContainer,
                getTooltipContainer = props.getTooltipContainer;

            var children = props.children;
            var visible = state.visible;
            // Hide tooltip when there is no title
            if (!('visible' in props) && this.isNoTitle()) {
                visible = false;
            }
            var child = this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : React.createElement(
                'span',
                null,
                children
            ));
            var childProps = child.props;
            var childCls = (0, _classnames2['default'])(childProps.className, (0, _defineProperty3['default'])({}, openClassName || prefixCls + '-open', true));
            return React.createElement(
                _rcTooltip2['default'],
                (0, _extends3['default'])({}, this.props, { getTooltipContainer: getPopupContainer || getTooltipContainer, ref: this.saveTooltip, builtinPlacements: this.getPlacements(), overlay: overlay || title || '', visible: visible, onVisibleChange: this.onVisibleChange, onPopupAlign: this.onPopupAlign }),
                visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
            );
        }
    }]);
    return Tooltip;
}(React.Component);

exports['default'] = Tooltip;

Tooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/placements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.getOverflowOptions = getOverflowOptions;
exports['default'] = getPlacements;

var _placements = __webpack_require__("./node_modules/rc-tooltip/lib/placements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var autoAdjustOverflowEnabled = {
    adjustX: 1,
    adjustY: 1
};
var autoAdjustOverflowDisabled = {
    adjustX: 0,
    adjustY: 0
};
var targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow) {
    if (typeof autoAdjustOverflow === 'boolean') {
        return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
    }
    return (0, _extends3['default'])({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}
function getPlacements() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _config$arrowWidth = config.arrowWidth,
        arrowWidth = _config$arrowWidth === undefined ? 5 : _config$arrowWidth,
        _config$horizontalArr = config.horizontalArrowShift,
        horizontalArrowShift = _config$horizontalArr === undefined ? 16 : _config$horizontalArr,
        _config$verticalArrow = config.verticalArrowShift,
        verticalArrowShift = _config$verticalArrow === undefined ? 12 : _config$verticalArrow,
        _config$autoAdjustOve = config.autoAdjustOverflow,
        autoAdjustOverflow = _config$autoAdjustOve === undefined ? true : _config$autoAdjustOve;

    var placementMap = {
        left: {
            points: ['cr', 'cl'],
            offset: [-4, 0]
        },
        right: {
            points: ['cl', 'cr'],
            offset: [4, 0]
        },
        top: {
            points: ['bc', 'tc'],
            offset: [0, -4]
        },
        bottom: {
            points: ['tc', 'bc'],
            offset: [0, 4]
        },
        topLeft: {
            points: ['bl', 'tc'],
            offset: [-(horizontalArrowShift + arrowWidth), -4]
        },
        leftTop: {
            points: ['tr', 'cl'],
            offset: [-4, -(verticalArrowShift + arrowWidth)]
        },
        topRight: {
            points: ['br', 'tc'],
            offset: [horizontalArrowShift + arrowWidth, -4]
        },
        rightTop: {
            points: ['tl', 'cr'],
            offset: [4, -(verticalArrowShift + arrowWidth)]
        },
        bottomRight: {
            points: ['tr', 'bc'],
            offset: [horizontalArrowShift + arrowWidth, 4]
        },
        rightBottom: {
            points: ['bl', 'cr'],
            offset: [4, verticalArrowShift + arrowWidth]
        },
        bottomLeft: {
            points: ['tl', 'bc'],
            offset: [-(horizontalArrowShift + arrowWidth), 4]
        },
        leftBottom: {
            points: ['br', 'cl'],
            offset: [-4, verticalArrowShift + arrowWidth]
        }
    };
    Object.keys(placementMap).forEach(function (key) {
        placementMap[key] = config.arrowPointAtCenter ? (0, _extends3['default'])({}, placementMap[key], { overflow: getOverflowOptions(autoAdjustOverflow), targetOffset: targetOffset }) : (0, _extends3['default'])({}, _placements.placements[key], { overflow: getOverflowOptions(autoAdjustOverflow) });
    });
    return placementMap;
}

/***/ }),

/***/ "./node_modules/css-animation/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssAnimationSupported", function() { return isCssAnimationSupported; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("./node_modules/css-animation/es/Event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes__ = __webpack_require__("./node_modules/component-classes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_component_classes__);




var isCssAnimationSupported = __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = __WEBPACK_IMPORTED_MODULE_2_component_classes___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  __WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["default"] = (cssAnimation);

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/dom-align/es/adjustForViewport.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");


function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].mix(pos, size);
}

/* harmony default export */ __webpack_exports__["a"] = (adjustForViewport);

/***/ }),

/***/ "./node_modules/dom-align/es/align/align.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getVisibleRectForElement__ = __webpack_require__("./node_modules/dom-align/es/getVisibleRectForElement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adjustForViewport__ = __webpack_require__("./node_modules/dom-align/es/adjustForViewport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getRegion__ = __webpack_require__("./node_modules/dom-align/es/getRegion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getElFuturePos__ = __webpack_require__("./node_modules/dom-align/es/getElFuturePos.js");
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */







// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = Object(__WEBPACK_IMPORTED_MODULE_1__getVisibleRectForElement__["a" /* default */])(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = Object(__WEBPACK_IMPORTED_MODULE_3__getRegion__["a" /* default */])(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = Object(__WEBPACK_IMPORTED_MODULE_4__getElFuturePos__["a" /* default */])(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = Object(__WEBPACK_IMPORTED_MODULE_4__getElFuturePos__["a" /* default */])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = Object(__WEBPACK_IMPORTED_MODULE_4__getElFuturePos__["a" /* default */])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = Object(__WEBPACK_IMPORTED_MODULE_4__getElFuturePos__["a" /* default */])(elRegion, tgtRegion, points, offset, targetOffset);
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = Object(__WEBPACK_IMPORTED_MODULE_2__adjustForViewport__["a" /* default */])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(source, 'width', __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(source, 'height', __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

/* harmony default export */ __webpack_exports__["a"] = (doAlign);
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

/***/ }),

/***/ "./node_modules/dom-align/es/align/alignElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__align__ = __webpack_require__("./node_modules/dom-align/es/align/align.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getOffsetParent__ = __webpack_require__("./node_modules/dom-align/es/getOffsetParent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getVisibleRectForElement__ = __webpack_require__("./node_modules/dom-align/es/getVisibleRectForElement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getRegion__ = __webpack_require__("./node_modules/dom-align/es/getRegion.js");





function isOutOfVisibleRect(target) {
  var visibleRect = Object(__WEBPACK_IMPORTED_MODULE_2__getVisibleRectForElement__["a" /* default */])(target);
  var targetRegion = Object(__WEBPACK_IMPORTED_MODULE_3__getRegion__["a" /* default */])(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = Object(__WEBPACK_IMPORTED_MODULE_3__getRegion__["a" /* default */])(target);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  return Object(__WEBPACK_IMPORTED_MODULE_0__align__["a" /* default */])(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = __WEBPACK_IMPORTED_MODULE_1__getOffsetParent__["a" /* default */];

alignElement.__getVisibleRectForElement = __WEBPACK_IMPORTED_MODULE_2__getVisibleRectForElement__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (alignElement);

/***/ }),

/***/ "./node_modules/dom-align/es/align/alignPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__align__ = __webpack_require__("./node_modules/dom-align/es/align/align.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX = void 0;
  var pageY = void 0;

  var doc = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getDocument(el);
  var win = doc.defaultView || doc.parentWindow;

  var scrollX = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindowScrollLeft(win);
  var scrollY = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindowScrollTop(win);
  var viewportWidth = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].viewportWidth(win);
  var viewportHeight = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };

  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];

  return Object(__WEBPACK_IMPORTED_MODULE_1__align__["a" /* default */])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
}

/* harmony default export */ __webpack_exports__["a"] = (alignPoint);

/***/ }),

/***/ "./node_modules/dom-align/es/getAlignOffset.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

/* harmony default export */ __webpack_exports__["a"] = (getAlignOffset);

/***/ }),

/***/ "./node_modules/dom-align/es/getElFuturePos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getAlignOffset__ = __webpack_require__("./node_modules/dom-align/es/getAlignOffset.js");


function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = Object(__WEBPACK_IMPORTED_MODULE_0__getAlignOffset__["a" /* default */])(refNodeRegion, points[1]);
  var p2 = Object(__WEBPACK_IMPORTED_MODULE_0__getAlignOffset__["a" /* default */])(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (getElFuturePos);

/***/ }),

/***/ "./node_modules/dom-align/es/getOffsetParent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");


/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (getOffsetParent);

/***/ }),

/***/ "./node_modules/dom-align/es/getRegion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");


function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isWindow(node) && node.nodeType !== 9) {
    offset = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].offset(node);
    w = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].outerWidth(node);
    h = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].outerHeight(node);
  } else {
    var win = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindow(node);
    offset = {
      left: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindowScrollLeft(win),
      top: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindowScrollTop(win)
    };
    w = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].viewportWidth(win);
    h = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/* harmony default export */ __webpack_exports__["a"] = (getRegion);

/***/ }),

/***/ "./node_modules/dom-align/es/getVisibleRectForElement.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getOffsetParent__ = __webpack_require__("./node_modules/dom-align/es/getOffsetParent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isAncestorFixed__ = __webpack_require__("./node_modules/dom-align/es/isAncestorFixed.js");




/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = Object(__WEBPACK_IMPORTED_MODULE_1__getOffsetParent__["a" /* default */])(element);
  var doc = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(el, 'overflow') !== 'visible') {
      var pos = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = Object(__WEBPACK_IMPORTED_MODULE_1__getOffsetParent__["a" /* default */])(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindowScrollLeft(win);
  var scrollY = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getWindowScrollTop(win);
  var viewportWidth = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].viewportWidth(win);
  var viewportHeight = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__isAncestorFixed__["a" /* default */])(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

/* harmony default export */ __webpack_exports__["a"] = (getVisibleRectForElement);

/***/ }),

/***/ "./node_modules/dom-align/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__align_alignElement__ = __webpack_require__("./node_modules/dom-align/es/align/alignElement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__align_alignPoint__ = __webpack_require__("./node_modules/dom-align/es/align/alignPoint.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__align_alignElement__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__align_alignPoint__["a"]; });





/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__align_alignElement__["a" /* default */]);

/***/ }),

/***/ "./node_modules/dom-align/es/isAncestorFixed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAncestorFixed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./node_modules/dom-align/es/utils.js");


function isAncestorFixed(element) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/***/ }),

/***/ "./node_modules/dom-align/es/propertyUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransformName;
/* harmony export (immutable) */ __webpack_exports__["e"] = setTransitionProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTransitionProperty;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTransformXY;
/* harmony export (immutable) */ __webpack_exports__["d"] = setTransformXY;
var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}

/***/ }),

/***/ "./node_modules/dom-align/es/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__propertyUtils__ = __webpack_require__("./node_modules/dom-align/es/propertyUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = Object(__WEBPACK_IMPORTED_MODULE_0__propertyUtils__["c" /* getTransitionProperty */])(elem) || '';
    Object(__WEBPACK_IMPORTED_MODULE_0__propertyUtils__["e" /* setTransitionProperty */])(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    Object(__WEBPACK_IMPORTED_MODULE_0__propertyUtils__["e" /* setTransitionProperty */])(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function setTransform(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = Object(__WEBPACK_IMPORTED_MODULE_0__propertyUtils__["b" /* getTransformXY */])(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__propertyUtils__["d" /* setTransformXY */])(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);

    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && Object(__WEBPACK_IMPORTED_MODULE_0__propertyUtils__["a" /* getTransformName */])() in document.body.style) {
    setTransform(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),

/***/ "./node_modules/dom-closest/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var matches = __webpack_require__("./node_modules/dom-matches/index.js");

/**
 * @param element {Element}
 * @param selector {String}
 * @param context {Element}
 * @return {Element}
 */
module.exports = function (element, selector, context) {
  context = context || document;
  // guard against orphans
  element = { parentNode: element };

  while ((element = element.parentNode) && element !== context) {
    if (matches(element, selector)) {
      return element;
    }
  }
};


/***/ }),

/***/ "./node_modules/dom-matches/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determine if a DOM element matches a CSS selector
 *
 * @param {Element} elem
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function matches(elem, selector) {
  // Vendor-specific implementations of `Element.prototype.matches()`.
  var proto = window.Element.prototype;
  var nativeMatches = proto.matches ||
      proto.mozMatchesSelector ||
      proto.msMatchesSelector ||
      proto.oMatchesSelector ||
      proto.webkitMatchesSelector;

  if (!elem || elem.nodeType !== 1) {
    return false;
  }

  var parentElem = elem.parentNode;

  // use native 'matches'
  if (nativeMatches) {
    return nativeMatches.call(elem, selector);
  }

  // native support for `matches` is missing and a fallback is required
  var nodes = parentElem.querySelectorAll(selector);
  var len = nodes.length;

  for (var i = 0; i < len; i++) {
    if (nodes[i] === elem) {
      return true;
    }
  }

  return false;
}

/**
 * Expose `matches`
 */

module.exports = matches;


/***/ }),

/***/ "./node_modules/lodash._getnative/index.js":
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash.isarguments/index.js":
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash.isarray/index.js":
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash.keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__("./node_modules/lodash._getnative/index.js"),
    isArguments = __webpack_require__("./node_modules/lodash.isarguments/index.js"),
    isArray = __webpack_require__("./node_modules/lodash.isarray/index.js");

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__("./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__("./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__("./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__("./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__("./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__("./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__("./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__("./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__("./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__("./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__("./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__("./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__("./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__("./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__("./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__("./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__("./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__("./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__("./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__("./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__("./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/mini-store/lib/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = undefined;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  setState: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});

/***/ }),

/***/ "./node_modules/mini-store/lib/Provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _PropTypes = __webpack_require__("./node_modules/mini-store/lib/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        miniStore: this.props.store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(_react.Component);

Provider.propTypes = {
  store: _PropTypes.storeShape.isRequired
};
Provider.childContextTypes = {
  miniStore: _PropTypes.storeShape.isRequired
};
exports.default = Provider;

/***/ }),

/***/ "./node_modules/mini-store/lib/connect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connect;

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _hoistNonReactStatics = __webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _PropTypes = __webpack_require__("./node_modules/mini-store/lib/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function isStateless(Component) {
  return !Component.prototype.render;
}

var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};

function connect(mapStateToProps) {
  var shouldSubscribe = !!mapStateToProps;
  var finnalMapStateToProps = mapStateToProps || defaultMapStateToProps;

  return function wrapWithConnect(WrappedComponent) {
    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props, context));

        _this.handleChange = function () {
          if (!_this.unsubscribe) {
            return;
          }

          var nextState = finnalMapStateToProps(_this.store.getState(), _this.props);
          if (!(0, _shallowequal2.default)(_this.nextState, nextState)) {
            _this.nextState = nextState;
            _this.setState({ subscribed: nextState });
          }
        };

        _this.store = context.miniStore;
        _this.state = { subscribed: finnalMapStateToProps(_this.store.getState(), props) };
        return _this;
      }

      _createClass(Connect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.trySubscribe();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.tryUnsubscribe();
        }
      }, {
        key: 'trySubscribe',
        value: function trySubscribe() {
          if (shouldSubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange);
            this.handleChange();
          }
        }
      }, {
        key: 'tryUnsubscribe',
        value: function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          return this.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var props = _extends({}, this.props, this.state.subscribed, {
            store: this.store
          });

          if (!isStateless(WrappedComponent)) {
            props = _extends({}, props, {
              ref: function ref(c) {
                return _this2.wrappedInstance = c;
              }
            });
          }

          return _react2.default.createElement(WrappedComponent, props);
        }
      }]);

      return Connect;
    }(_react.Component);

    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
    Connect.contextTypes = {
      miniStore: _PropTypes.storeShape.isRequired
    };


    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/mini-store/lib/create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = create;
function create(initialState) {
  var state = initialState;
  var listeners = [];

  function setState(partial) {
    state = _extends({}, state, partial);
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe
  };
}

/***/ }),

/***/ "./node_modules/mini-store/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.connect = exports.Provider = undefined;

var _Provider2 = __webpack_require__("./node_modules/mini-store/lib/Provider.js");

var _Provider3 = _interopRequireDefault(_Provider2);

var _connect2 = __webpack_require__("./node_modules/mini-store/lib/connect.js");

var _connect3 = _interopRequireDefault(_connect2);

var _create2 = __webpack_require__("./node_modules/mini-store/lib/create.js");

var _create3 = _interopRequireDefault(_create2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider3.default;
exports.connect = _connect3.default;
exports.create = _create3.default;

/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__("./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_align__ = __webpack_require__("./node_modules/dom-align/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_addEventListener__ = __webpack_require__("./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__("./node_modules/rc-align/es/util.js");











function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Align, _Component);

  function Align() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        if (element) {
          result = Object(__WEBPACK_IMPORTED_MODULE_6_dom_align__["a" /* alignElement */])(source, element, align);
        } else if (point) {
          result = Object(__WEBPACK_IMPORTED_MODULE_6_dom_align__["b" /* alignPoint */])(source, point, align);
        }

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Align.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  };

  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      var source = __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this);
      var sourceRect = source ? source.getBoundingClientRect() : null;

      if (prevProps.disabled) {
        reAlign = true;
      } else {
        var lastElement = getElement(prevProps.target);
        var currentElement = getElement(props.target);
        var lastPoint = getPoint(prevProps.target);
        var currentPoint = getPoint(props.target);

        if (Object(__WEBPACK_IMPORTED_MODULE_8__util__["c" /* isWindow */])(lastElement) && Object(__WEBPACK_IMPORTED_MODULE_8__util__["c" /* isWindow */])(currentElement)) {
          // Skip if is window
          reAlign = false;
        } else if (lastElement !== currentElement || // Element change
        lastElement && !currentElement && currentPoint || // Change from element to point
        lastPoint && currentPoint && currentElement || // Change from point to element
        currentPoint && !Object(__WEBPACK_IMPORTED_MODULE_8__util__["b" /* isSamePoint */])(lastPoint, currentPoint)) {
          reAlign = true;
        }

        // If source element size changed
        var preRect = this.sourceRect || {};
        if (!reAlign && source && (preRect.width !== sourceRect.width || preRect.height !== sourceRect.height)) {
          reAlign = true;
        }
      }

      this.sourceRect = sourceRect;
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  };

  Align.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stopMonitorWindowResize();
  };

  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = Object(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* buffer */])(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_addEventListener__["a" /* default */])(window, 'resize', this.bufferMonitor);
    }
  };

  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  };

  Align.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(children);
    if (childrenProps) {
      var newProps = {};
      var propList = Object.keys(childrenProps);
      propList.forEach(function (prop) {
        newProps[prop] = _this2.props[childrenProps[prop]];
      });

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(child, newProps);
    }
    return child;
  };

  return Align;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

Align.propTypes = {
  childrenProps: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  align: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  target: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    clientX: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
    clientY: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
    pageX: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
    pageY: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
  })]),
  onAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  monitorBufferTime: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  monitorWindowResize: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


/* harmony default export */ __webpack_exports__["a"] = (Align);

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Align__ = __webpack_require__("./node_modules/rc-align/es/Align.js");
// export this package's api


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Align__["a" /* default */]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buffer;
/* harmony export (immutable) */ __webpack_exports__["b"] = isSamePoint;
/* harmony export (immutable) */ __webpack_exports__["c"] = isWindow;
function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}

function isWindow(obj) {
  return obj && typeof obj === 'object' && obj.window === obj;
}

/***/ }),

/***/ "./node_modules/rc-animate/es/AnimateChild.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_css_animation__ = __webpack_require__("./node_modules/css-animation/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__("./node_modules/rc-animate/es/util.js");











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AnimateChild);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* default */].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((__WEBPACK_IMPORTED_MODULE_8_css_animation__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = Object(__WEBPACK_IMPORTED_MODULE_8_css_animation__["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

AnimateChild.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (AnimateChild);

/***/ }),

/***/ "./node_modules/rc-calendar/lib/locale/en_US.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-checkbox/es/Checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_PureRenderMixin__ = __webpack_require__("./node_modules/rc-util/es/PureRenderMixin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_PureRenderMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_PureRenderMixin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);










var Checkbox = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Checkbox, _React$Component);

  function Checkbox(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Checkbox);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var checked = 'checked' in props ? props.checked : props.defaultChecked;

    _this.state = {
      checked: checked
    };
    return _this;
  }

  Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked
      });
    }
  };

  Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return __WEBPACK_IMPORTED_MODULE_7_rc_util_es_PureRenderMixin___default.a.shouldComponentUpdate.apply(this, args);
  };

  Checkbox.prototype.focus = function focus() {
    this.input.focus();
  };

  Checkbox.prototype.blur = function blur() {
    this.input.blur();
  };

  Checkbox.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        style = _props.style,
        name = _props.name,
        id = _props.id,
        type = _props.type,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        tabIndex = _props.tabIndex,
        onClick = _props.onClick,
        onFocus = _props.onFocus,
        onBlur = _props.onBlur,
        autoFocus = _props.autoFocus,
        value = _props.value,
        others = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['prefixCls', 'className', 'style', 'name', 'id', 'type', 'disabled', 'readOnly', 'tabIndex', 'onClick', 'onFocus', 'onBlur', 'autoFocus', 'value']);

    var globalProps = Object.keys(others).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    var checked = this.state.checked;

    var classString = __WEBPACK_IMPORTED_MODULE_8_classnames___default()(prefixCls, className, (_classNames = {}, _classNames[prefixCls + '-checked'] = checked, _classNames[prefixCls + '-disabled'] = disabled, _classNames));

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'span',
      { className: classString, style: style },
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        name: name,
        id: id,
        type: type,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: prefixCls + '-input',
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: prefixCls + '-inner' })
    );
  };

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Checkbox.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  name: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  id: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  defaultChecked: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),
  checked: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  tabIndex: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  readOnly: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  autoFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any
};
Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var props = _this2.props;

    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      _this2.setState({
        checked: e.target.checked
      });
    }
    props.onChange({
      target: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      },

      nativeEvent: e.nativeEvent
    });
  };

  this.saveInput = function (node) {
    _this2.input = node;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "./node_modules/rc-checkbox/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox__ = __webpack_require__("./node_modules/rc-checkbox/es/Checkbox.js");


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Checkbox__["a" /* default */]);

/***/ }),

/***/ "./node_modules/rc-dropdown/es/Dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_trigger__ = __webpack_require__("./node_modules/rc-trigger/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__placements__ = __webpack_require__("./node_modules/rc-dropdown/es/placements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    if ('visible' in props) {
      _this.state = {
        visible: props.visible
      };
    } else {
      _this.state = {
        visible: props.defaultVisible
      };
    }
    return _this;
  }

  Dropdown.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    }
    return null;
  };

  Dropdown.prototype.getMenuElement = function getMenuElement() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls;

    var extraOverlayProps = {
      prefixCls: prefixCls + '-menu',
      onClick: this.onClick
    };
    if (typeof overlay.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(overlay, extraOverlayProps);
  };

  Dropdown.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Dropdown.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        children = _props2.children,
        transitionName = _props2.transitionName,
        animation = _props2.animation,
        align = _props2.align,
        placement = _props2.placement,
        getPopupContainer = _props2.getPopupContainer,
        showAction = _props2.showAction,
        hideAction = _props2.hideAction,
        overlayClassName = _props2.overlayClassName,
        overlayStyle = _props2.overlayStyle,
        trigger = _props2.trigger,
        otherProps = _objectWithoutProperties(_props2, ['prefixCls', 'children', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_rc_trigger__["a" /* default */],
      _extends({}, otherProps, {
        prefixCls: prefixCls,
        ref: this.saveTrigger,
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: __WEBPACK_IMPORTED_MODULE_4__placements__["a" /* default */],
        action: trigger,
        showAction: showAction,
        hideAction: hideAction,
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: this.state.visible,
        afterPopupVisibleChange: this.afterVisibleChange,
        popup: this.getMenuElement(),
        onPopupVisibleChange: this.onVisibleChange,
        getPopupContainer: getPopupContainer
      }),
      children
    );
  };

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Dropdown.propTypes = {
  minOverlayWidthMatchTrigger: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onVisibleChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onOverlayClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  prefixCls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  transitionName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  overlayClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  animation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  align: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  overlayStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  overlay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  trigger: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  showAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  hideAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  getPopupContainer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  visible: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  defaultVisible: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
Dropdown.defaultProps = {
  minOverlayWidthMatchTrigger: true,
  prefixCls: 'rc-dropdown',
  trigger: ['hover'],
  showAction: [],
  hideAction: [],
  overlayClassName: '',
  overlayStyle: {},
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {},

  placement: 'bottomLeft'
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClick = function (e) {
    var props = _this2.props;
    var overlayProps = props.overlay.props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      _this2.setState({
        visible: false
      });
    }
    if (props.onOverlayClick) {
      props.onOverlayClick(e);
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  this.onVisibleChange = function (visible) {
    var props = _this2.props;
    if (!('visible' in props)) {
      _this2.setState({
        visible: visible
      });
    }
    props.onVisibleChange(visible);
  };

  this.afterVisibleChange = function (visible) {
    if (visible && _this2.props.minOverlayWidthMatchTrigger) {
      var overlayNode = _this2.getPopupDomNode();
      var rootNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this2);
      if (rootNode && overlayNode && rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.minWidth = rootNode.offsetWidth + 'px';
        if (_this2.trigger && _this2.trigger._component && _this2.trigger._component.alignInstance) {
          _this2.trigger._component.alignInstance.forceAlign();
        }
      }
    }
  };

  this.saveTrigger = function (node) {
    _this2.trigger = node;
  };
};

Object(__WEBPACK_IMPORTED_MODULE_5_react_lifecycles_compat__["polyfill"])(Dropdown);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "./node_modules/rc-dropdown/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown__ = __webpack_require__("./node_modules/rc-dropdown/es/Dropdown.js");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Dropdown__["a" /* default */]);

/***/ }),

/***/ "./node_modules/rc-dropdown/es/placements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export placements */
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};

/* harmony default export */ __webpack_exports__["a"] = (placements);

/***/ }),

/***/ "./node_modules/rc-menu/es/DOMWrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);







var DOMWrap = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(DOMWrap, _React$Component);

  function DOMWrap() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DOMWrap);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  DOMWrap.prototype.render = function render() {
    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
    if (!props.visible) {
      props.className += ' ' + props.hiddenClassName;
    }
    var Tag = props.tag;
    delete props.tag;
    delete props.hiddenClassName;
    delete props.visible;
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Tag, props);
  };

  return DOMWrap;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

DOMWrap.propTypes = {
  tag: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  hiddenClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  visible: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
DOMWrap.defaultProps = {
  tag: 'div',
  className: ''
};
/* harmony default export */ __webpack_exports__["a"] = (DOMWrap);

/***/ }),

/***/ "./node_modules/rc-menu/es/Divider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);






var Divider = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Divider, _React$Component);

  function Divider() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Divider);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  Divider.prototype.render = function render() {
    var _props = this.props,
        _props$className = _props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = _props.rootPrefixCls;

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
  };

  return Divider;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Divider.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
};
Divider.defaultProps = {
  // To fix keyboard UX.
  disabled: true
};
/* harmony default export */ __webpack_exports__["a"] = (Divider);

/***/ }),

/***/ "./node_modules/rc-menu/es/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SubPopupMenu__ = __webpack_require__("./node_modules/rc-menu/es/SubPopupMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");











var Menu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Menu, _React$Component);

  function Menu(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Menu);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.isRootMenu = true;

    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    _this.store = Object(__WEBPACK_IMPORTED_MODULE_7_mini_store__["create"])({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: { '0-menu-': Object(__WEBPACK_IMPORTED_MODULE_8__SubPopupMenu__["b" /* getActiveKey */])(props, props.activeKey) }
    });
    return _this;
  }

  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('selectedKeys' in nextProps) {
      this.store.setState({
        selectedKeys: nextProps.selectedKeys || []
      });
    }
    if ('openKeys' in nextProps) {
      this.store.setState({
        openKeys: nextProps.openKeys || []
      });
    }
  };

  // onKeyDown needs to be exposed as a instance method
  // e.g., in rc-select, we need to navigate menu item while
  // current active item is rc-select input box rather than the menu itself


  Menu.prototype.render = function render() {
    var _this2 = this;

    var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

    props.className += ' ' + props.prefixCls + '-root';
    props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
      onClick: this.onClick,
      onOpenChange: this.onOpenChange,
      onDeselect: this.onDeselect,
      onSelect: this.onSelect,
      openTransitionName: this.getOpenTransitionName(),
      parentMenu: this
    });
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_mini_store__["Provider"],
      { store: this.store },
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__SubPopupMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { ref: function ref(c) {
            return _this2.innerMenu = c;
          } }),
        this.props.children
      )
    );
  };

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Menu.propTypes = {
  defaultSelectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultActiveFirst: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultOpenKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  openKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  mode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  getPopupContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  openTransitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  openAnimation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  subMenuOpenDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  subMenuCloseDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  forceSubMenuRender: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  level: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  selectable: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
Menu.defaultProps = {
  selectable: true,
  onClick: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  onSelect: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  onOpenChange: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  onDeselect: __WEBPACK_IMPORTED_MODULE_9__util__["f" /* noop */],
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  subMenuOpenDelay: 0.1,
  subMenuCloseDelay: 0.1,
  triggerSubMenuAction: 'hover',
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  style: {}
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onSelect = function (selectInfo) {
    var props = _this3.props;
    if (props.selectable) {
      // root menu
      var selectedKeys = _this3.store.getState().selectedKeys;
      var selectedKey = selectInfo.key;
      if (props.multiple) {
        selectedKeys = selectedKeys.concat([selectedKey]);
      } else {
        selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in props)) {
        _this3.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onSelect(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  };

  this.onClick = function (e) {
    _this3.props.onClick(e);
  };

  this.onKeyDown = function (e, callback) {
    _this3.innerMenu.getWrappedInstance().onKeyDown(e, callback);
  };

  this.onOpenChange = function (event) {
    var props = _this3.props;
    var openKeys = _this3.store.getState().openKeys.concat();
    var changed = false;
    var processSingle = function processSingle(e) {
      var oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {
          openKeys.push(e.key);
        }
      } else {
        var index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {
          openKeys.splice(index, 1);
        }
      }
      changed = changed || oneChanged;
    };
    if (Array.isArray(event)) {
      // batch change call
      event.forEach(processSingle);
    } else {
      processSingle(event);
    }
    if (changed) {
      if (!('openKeys' in _this3.props)) {
        _this3.store.setState({ openKeys: openKeys });
      }
      props.onOpenChange(openKeys);
    }
  };

  this.onDeselect = function (selectInfo) {
    var props = _this3.props;
    if (props.selectable) {
      var selectedKeys = _this3.store.getState().selectedKeys.concat();
      var selectedKey = selectInfo.key;
      var index = selectedKeys.indexOf(selectedKey);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
      if (!('selectedKeys' in props)) {
        _this3.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onDeselect(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  };

  this.getOpenTransitionName = function () {
    var props = _this3.props;
    var transitionName = props.openTransitionName;
    var animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = props.prefixCls + '-open-' + animationName;
    }
    return transitionName;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./node_modules/rc-menu/es/MenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__ = __webpack_require__("./node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");













/* eslint react/no-is-mounted:0 */

var MenuItem = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MenuItem, _React$Component);

  function MenuItem(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MenuItem);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ENTER) {
        _this.onClick(e);
        return true;
      }
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;

      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;

      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;

      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: _this,
        domEvent: e
      };
      onClick(info);
      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    return _this;
  }

  MenuItem.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    this.callRef();
  };

  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.active) {
      __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default()(__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this), __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this.props.parentMenu), {
        onlyScrollIfNeeded: true
      });
    }
    this.callRef();
  };

  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  };

  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  };

  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  };

  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  };

  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  };

  MenuItem.prototype.callRef = function callRef() {
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  MenuItem.prototype.render = function render() {
    var _classNames;

    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
    var className = __WEBPACK_IMPORTED_MODULE_8_classnames___default()(this.getPrefixCls(), props.className, (_classNames = {}, _classNames[this.getActiveClassName()] = !props.disabled && props.active, _classNames[this.getSelectedClassName()] = props.isSelected, _classNames[this.getDisabledClassName()] = props.disabled, _classNames));
    var attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.attribute, {
      title: props.title,
      className: className,
      // set to menuitem by default
      role: 'menuitem',
      'aria-disabled': props.disabled
    });

    if (props.role === 'option') {
      // overwrite to option
      attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null) {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      delete attrs.role;
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      onMouseLeave: props.disabled ? null : this.onMouseLeave,
      onMouseEnter: props.disabled ? null : this.onMouseEnter
    };
    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.style);
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    __WEBPACK_IMPORTED_MODULE_11__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, attrs, mouseEvent, {
        style: style
      }),
      props.children
    );
  };

  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MenuItem.propTypes = {
  attribute: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  onItemHover: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  parentMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  isSelected: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  manualRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
MenuItem.defaultProps = {
  onSelect: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  manualRef: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */]
};
MenuItem.isMenuItem = true;

var connected = Object(__WEBPACK_IMPORTED_MODULE_10_mini_store__["connect"])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);

/* harmony default export */ __webpack_exports__["a"] = (connected);

/***/ }),

/***/ "./node_modules/rc-menu/es/MenuItemGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");









var MenuItemGroup = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MenuItemGroup, _React$Component);

  function MenuItemGroup() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, MenuItemGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderInnerMenuItem = function (item) {
      var _this$props = _this.props,
          renderMenuItem = _this$props.renderMenuItem,
          index = _this$props.index;

      return renderMenuItem(item, index, _this.props.subMenuKey);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  MenuItemGroup.prototype.render = function render() {
    var props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

    var _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = props.rootPrefixCls;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    var title = props.title,
        children = props.children;

    __WEBPACK_IMPORTED_MODULE_7__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });

    // Set onClick to null, to ignore propagated onClick event
    delete props.onClick;

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { className: className + ' ' + rootPrefixCls + '-item-group' }),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          className: titleClassName,
          title: typeof title === 'string' ? title : undefined
        },
        title
      ),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'ul',
        { className: listClassName },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.map(children, this.renderInnerMenuItem)
      )
    );
  };

  return MenuItemGroup;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

MenuItemGroup.propTypes = {
  renderMenuItem: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  index: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  subMenuKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
MenuItemGroup.defaultProps = {
  disabled: true
};


MenuItemGroup.isMenuItemGroup = true;

/* harmony default export */ __webpack_exports__["a"] = (MenuItemGroup);

/***/ }),

/***/ "./node_modules/rc-menu/es/SubMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_trigger__ = __webpack_require__("./node_modules/rc-trigger/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SubPopupMenu__ = __webpack_require__("./node_modules/rc-menu/es/SubPopupMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__placements__ = __webpack_require__("./node_modules/rc-menu/es/placements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rc_animate__ = __webpack_require__("./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");
















var guid = 0;

var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var _extends2;

  var menuId = Object(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* getMenuIdFromSubMenuEventKey */])(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, state.defaultActiveFirst, (_extends2 = {}, _extends2[menuId] = defaultActiveFirst, _extends2))
  });
};

var SubMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SubMenu, _React$Component);

  function SubMenu(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SubMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var store = props.store;
    var eventKey = props.eventKey;
    var defaultActiveFirst = store.getState().defaultActiveFirst;

    _this.isRootMenu = false;

    var value = false;

    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }

    updateDefaultActiveFirst(store, eventKey, value);
    return _this;
  }

  SubMenu.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate();
  };

  SubMenu.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var _props = this.props,
        mode = _props.mode,
        parentMenu = _props.parentMenu,
        manualRef = _props.manualRef;

    // invoke customized ref to expose component to mixin

    if (manualRef) {
      manualRef(this);
    }

    if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.props.isOpen) {
      return;
    }

    this.minWidthTimeout = setTimeout(function () {
      return _this2.adjustWidth();
    }, 0);
  };

  SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        onDestroy = _props2.onDestroy,
        eventKey = _props2.eventKey;

    if (onDestroy) {
      onDestroy(eventKey);
    }

    /* istanbul ignore if */
    if (this.minWidthTimeout) {
      clearTimeout(this.minWidthTimeout);
    }

    /* istanbul ignore if */
    if (this.mouseenterTimeout) {
      clearTimeout(this.mouseenterTimeout);
    }
  };

  SubMenu.prototype.renderChildren = function renderChildren(children) {
    var props = this.props;
    var baseProps = {
      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
      visible: this.props.isOpen,
      level: props.level + 1,
      inlineIndent: props.inlineIndent,
      focusable: false,
      onClick: this.onSubMenuClick,
      onSelect: this.onSelect,
      onDeselect: this.onDeselect,
      onDestroy: this.onDestroy,
      selectedKeys: props.selectedKeys,
      eventKey: props.eventKey + '-menu-',
      openKeys: props.openKeys,
      openTransitionName: props.openTransitionName,
      openAnimation: props.openAnimation,
      onOpenChange: this.onOpenChange,
      subMenuOpenDelay: props.subMenuOpenDelay,
      parentMenu: this,
      subMenuCloseDelay: props.subMenuCloseDelay,
      forceSubMenuRender: props.forceSubMenuRender,
      triggerSubMenuAction: props.triggerSubMenuAction,
      defaultActiveFirst: props.store.getState().defaultActiveFirst[Object(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* getMenuIdFromSubMenuEventKey */])(props.eventKey)],
      multiple: props.multiple,
      prefixCls: props.rootPrefixCls,
      id: this._menuId,
      manualRef: this.saveMenuInstance
    };

    var haveRendered = this.haveRendered;
    this.haveRendered = true;

    this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender;
    // never rendered not planning to, don't render
    if (!this.haveOpened) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', null);
    }

    // don't show transition on first rendering (no animation for opened menu)
    // show appear transition if it's not visible (not sure why)
    // show appear transition if it's not inline mode
    var transitionAppear = haveRendered || !baseProps.visible || !baseProps.mode === 'inline';

    baseProps.className = ' ' + baseProps.prefixCls + '-sub';
    var animProps = {};

    if (baseProps.openTransitionName) {
      animProps.transitionName = baseProps.openTransitionName;
    } else if (typeof baseProps.openAnimation === 'object') {
      animProps.animation = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, baseProps.openAnimation);
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_rc_animate__["default"],
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, animProps, {
        showProp: 'visible',
        component: '',
        transitionAppear: transitionAppear
      }),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11__SubPopupMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, baseProps, { id: this._menuId }),
        children
      )
    );
  };

  SubMenu.prototype.render = function render() {
    var _classNames;

    var props = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, this.props);
    var isOpen = props.isOpen;
    var prefixCls = this.getPrefixCls();
    var isInlineMode = props.mode === 'inline';
    var className = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(prefixCls, prefixCls + '-' + props.mode, (_classNames = {}, _classNames[props.className] = !!props.className, _classNames[this.getOpenClassName()] = isOpen, _classNames[this.getActiveClassName()] = props.active || isOpen && !isInlineMode, _classNames[this.getDisabledClassName()] = props.disabled, _classNames[this.getSelectedClassName()] = this.isChildrenSelected(), _classNames));

    if (!this._menuId) {
      if (props.eventKey) {
        this._menuId = props.eventKey + '$Menu';
      } else {
        this._menuId = '$__$' + ++guid + '$Menu';
      }
    }

    var mouseEvents = {};
    var titleClickEvents = {};
    var titleMouseEvents = {};
    if (!props.disabled) {
      mouseEvents = {
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      };

      // only works in title, not outer li
      titleClickEvents = {
        onClick: this.onTitleClick
      };
      titleMouseEvents = {
        onMouseEnter: this.onTitleMouseEnter,
        onMouseLeave: this.onTitleMouseLeave
      };
    }

    var style = {};
    if (isInlineMode) {
      style.paddingLeft = props.inlineIndent * props.level;
    }

    var ariaOwns = {};
    // only set aria-owns when menu is open
    // otherwise it would be an invalid aria-owns value
    // since corresponding node cannot be found
    if (this.props.isOpen) {
      ariaOwns = {
        'aria-owns': this._menuId
      };
    }

    var title = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({
        ref: this.saveSubMenuTitle,
        style: style,
        className: prefixCls + '-title'
      }, titleMouseEvents, titleClickEvents, {
        'aria-expanded': isOpen
      }, ariaOwns, {
        'aria-haspopup': 'true',
        title: typeof props.title === 'string' ? props.title : undefined
      }),
      props.title,
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('i', { className: prefixCls + '-arrow' })
    );
    var children = this.renderChildren(props.children);

    var getPopupContainer = props.parentMenu.isRootMenu ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
      return triggerNode.parentNode;
    };
    var popupPlacement = popupPlacementMap[props.mode];
    var popupAlign = props.popupOffset ? { offset: props.popupOffset } : {};
    var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
    var disabled = props.disabled,
        triggerSubMenuAction = props.triggerSubMenuAction,
        subMenuOpenDelay = props.subMenuOpenDelay,
        forceSubMenuRender = props.forceSubMenuRender,
        subMenuCloseDelay = props.subMenuCloseDelay;

    __WEBPACK_IMPORTED_MODULE_14__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });
    // Set onClick to null, to ignore propagated onClick event
    delete props.onClick;

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, props, mouseEvents, {
        className: className,
        role: 'menuitem'
      }),
      isInlineMode && title,
      isInlineMode && children,
      !isInlineMode && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_rc_trigger__["a" /* default */],
        {
          prefixCls: prefixCls,
          popupClassName: prefixCls + '-popup ' + popupClassName,
          getPopupContainer: getPopupContainer,
          builtinPlacements: __WEBPACK_IMPORTED_MODULE_12__placements__["a" /* default */],
          popupPlacement: popupPlacement,
          popupVisible: isOpen,
          popupAlign: popupAlign,
          popup: children,
          action: disabled ? [] : [triggerSubMenuAction],
          mouseEnterDelay: subMenuOpenDelay,
          mouseLeaveDelay: subMenuCloseDelay,
          onPopupVisibleChange: this.onPopupVisibleChange,
          forceRender: forceSubMenuRender
        },
        title
      )
    );
  };

  return SubMenu;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

SubMenu.propTypes = {
  parentMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  openKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onOpenChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, // TODO: remove
  onItemHover: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onTitleMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onTitleMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onTitleClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  popupOffset: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  isOpen: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  store: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  mode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  manualRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
SubMenu.defaultProps = {
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_14__util__["f" /* noop */],
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_14__util__["f" /* noop */],
  onTitleMouseEnter: __WEBPACK_IMPORTED_MODULE_14__util__["f" /* noop */],
  onTitleMouseLeave: __WEBPACK_IMPORTED_MODULE_14__util__["f" /* noop */],
  onTitleClick: __WEBPACK_IMPORTED_MODULE_14__util__["f" /* noop */],
  manualRef: __WEBPACK_IMPORTED_MODULE_14__util__["f" /* noop */],
  mode: 'vertical',
  title: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onDestroy = function (key) {
    _this3.props.onDestroy(key);
  };

  this.onKeyDown = function (e) {
    var keyCode = e.keyCode;
    var menu = _this3.menuInstance;
    var _props3 = _this3.props,
        isOpen = _props3.isOpen,
        store = _props3.store;


    if (keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].ENTER) {
      _this3.onTitleClick(e);
      updateDefaultActiveFirst(store, _this3.props.eventKey, true);
      return true;
    }

    if (keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].RIGHT) {
      if (isOpen) {
        menu.onKeyDown(e);
      } else {
        _this3.triggerOpenChange(true);
        // need to update current menu's defaultActiveFirst value
        updateDefaultActiveFirst(store, _this3.props.eventKey, true);
      }
      return true;
    }
    if (keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].LEFT) {
      var handled = void 0;
      if (isOpen) {
        handled = menu.onKeyDown(e);
      } else {
        return undefined;
      }
      if (!handled) {
        _this3.triggerOpenChange(false);
        handled = true;
      }
      return handled;
    }

    if (isOpen && (keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].UP || keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].DOWN)) {
      return menu.onKeyDown(e);
    }
  };

  this.onOpenChange = function (e) {
    _this3.props.onOpenChange(e);
  };

  this.onPopupVisibleChange = function (visible) {
    _this3.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
  };

  this.onMouseEnter = function (e) {
    var _props4 = _this3.props,
        key = _props4.eventKey,
        onMouseEnter = _props4.onMouseEnter,
        store = _props4.store;

    updateDefaultActiveFirst(store, _this3.props.eventKey, false);
    onMouseEnter({
      key: key,
      domEvent: e
    });
  };

  this.onMouseLeave = function (e) {
    var _props5 = _this3.props,
        parentMenu = _props5.parentMenu,
        eventKey = _props5.eventKey,
        onMouseLeave = _props5.onMouseLeave;

    parentMenu.subMenuInstance = _this3;
    onMouseLeave({
      key: eventKey,
      domEvent: e
    });
  };

  this.onTitleMouseEnter = function (domEvent) {
    var _props6 = _this3.props,
        key = _props6.eventKey,
        onItemHover = _props6.onItemHover,
        onTitleMouseEnter = _props6.onTitleMouseEnter;

    onItemHover({
      key: key,
      hover: true
    });
    onTitleMouseEnter({
      key: key,
      domEvent: domEvent
    });
  };

  this.onTitleMouseLeave = function (e) {
    var _props7 = _this3.props,
        parentMenu = _props7.parentMenu,
        eventKey = _props7.eventKey,
        onItemHover = _props7.onItemHover,
        onTitleMouseLeave = _props7.onTitleMouseLeave;

    parentMenu.subMenuInstance = _this3;
    onItemHover({
      key: eventKey,
      hover: false
    });
    onTitleMouseLeave({
      key: eventKey,
      domEvent: e
    });
  };

  this.onTitleClick = function (e) {
    var props = _this3.props;

    props.onTitleClick({
      key: props.eventKey,
      domEvent: e
    });
    if (props.triggerSubMenuAction === 'hover') {
      return;
    }
    _this3.triggerOpenChange(!props.isOpen, 'click');
    updateDefaultActiveFirst(props.store, _this3.props.eventKey, false);
  };

  this.onSubMenuClick = function (info) {
    _this3.props.onClick(_this3.addKeyPath(info));
  };

  this.onSelect = function (info) {
    _this3.props.onSelect(info);
  };

  this.onDeselect = function (info) {
    _this3.props.onDeselect(info);
  };

  this.getPrefixCls = function () {
    return _this3.props.rootPrefixCls + '-submenu';
  };

  this.getActiveClassName = function () {
    return _this3.getPrefixCls() + '-active';
  };

  this.getDisabledClassName = function () {
    return _this3.getPrefixCls() + '-disabled';
  };

  this.getSelectedClassName = function () {
    return _this3.getPrefixCls() + '-selected';
  };

  this.getOpenClassName = function () {
    return _this3.props.rootPrefixCls + '-submenu-open';
  };

  this.saveMenuInstance = function (c) {
    // children menu instance
    _this3.menuInstance = c;
  };

  this.addKeyPath = function (info) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, info, {
      keyPath: (info.keyPath || []).concat(_this3.props.eventKey)
    });
  };

  this.triggerOpenChange = function (open, type) {
    var key = _this3.props.eventKey;
    var openChange = function openChange() {
      _this3.onOpenChange({
        key: key,
        item: _this3,
        trigger: type,
        open: open
      });
    };
    if (type === 'mouseenter') {
      // make sure mouseenter happen after other menu item's mouseleave
      _this3.mouseenterTimeout = setTimeout(function () {
        openChange();
      }, 0);
    } else {
      openChange();
    }
  };

  this.isChildrenSelected = function () {
    var ret = { find: false };
    Object(__WEBPACK_IMPORTED_MODULE_14__util__["d" /* loopMenuItemRecursively */])(_this3.props.children, _this3.props.selectedKeys, ret);
    return ret.find;
  };

  this.isOpen = function () {
    return _this3.props.openKeys.indexOf(_this3.props.eventKey) !== -1;
  };

  this.adjustWidth = function () {
    /* istanbul ignore if */
    if (!_this3.subMenuTitle || !_this3.menuInstance) {
      return;
    }
    var popupMenu = __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(_this3.menuInstance);
    if (popupMenu.offsetWidth >= _this3.subMenuTitle.offsetWidth) {
      return;
    }

    /* istanbul ignore next */
    popupMenu.style.minWidth = _this3.subMenuTitle.offsetWidth + 'px';
  };

  this.saveSubMenuTitle = function (subMenuTitle) {
    _this3.subMenuTitle = subMenuTitle;
  };
};

var connected = Object(__WEBPACK_IMPORTED_MODULE_10_mini_store__["connect"])(function (_ref, _ref2) {
  var openKeys = _ref.openKeys,
      activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu);

connected.isSubMenu = true;

/* harmony default export */ __webpack_exports__["a"] = (connected);

/***/ }),

/***/ "./node_modules/rc-menu/es/SubPopupMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getActiveKey;
/* unused harmony export saveRef */
/* unused harmony export SubPopupMenu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_util_es_createChainedFunction__ = __webpack_require__("./node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/rc-menu/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DOMWrap__ = __webpack_require__("./node_modules/rc-menu/es/DOMWrap.js");














function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }
  return arr.every(function (c) {
    return !!c.props.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var _extends2;

  var state = store.getState();
  store.setState({
    activeKey: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, state.activeKey, (_extends2 = {}, _extends2[menuId] = activeKey, _extends2))
  });
}

function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var children = props.children,
      eventKey = props.eventKey;

  if (activeKey) {
    var found = void 0;
    Object(__WEBPACK_IMPORTED_MODULE_11__util__["c" /* loopMenuItem */])(children, function (c, i) {
      if (c && !c.props.disabled && activeKey === Object(__WEBPACK_IMPORTED_MODULE_11__util__["a" /* getKeyFromChildrenIndex */])(c, eventKey, i)) {
        found = true;
      }
    });
    if (found) {
      return activeKey;
    }
  }
  activeKey = null;
  if (props.defaultActiveFirst) {
    Object(__WEBPACK_IMPORTED_MODULE_11__util__["c" /* loopMenuItem */])(children, function (c, i) {
      if (!activeKey && c && !c.props.disabled) {
        activeKey = Object(__WEBPACK_IMPORTED_MODULE_11__util__["a" /* getKeyFromChildrenIndex */])(c, eventKey, i);
      }
    });
    return activeKey;
  }
  return activeKey;
}

function saveRef(c) {
  if (c) {
    var index = this.instanceArray.indexOf(c);
    if (index !== -1) {
      // update component if it's already inside instanceArray
      this.instanceArray[index] = c;
    } else {
      // add component if it's not in instanceArray yet;
      this.instanceArray.push(c);
    }
  }
}

var SubPopupMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(SubPopupMenu, _React$Component);

  function SubPopupMenu(props) {
    var _extends3;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SubPopupMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    props.store.setState({
      activeKey: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props.store.getState().activeKey, (_extends3 = {}, _extends3[props.eventKey] = getActiveKey(props, props.activeKey), _extends3))
    });
    return _this;
  }

  SubPopupMenu.prototype.componentWillMount = function componentWillMount() {
    this.instanceArray = [];
  };

  SubPopupMenu.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  SubPopupMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var originalActiveKey = 'activeKey' in nextProps ? nextProps.activeKey : this.getStore().getState().activeKey[this.getEventKey()];
    var activeKey = getActiveKey(nextProps, originalActiveKey);
    if (activeKey !== originalActiveKey) {
      updateActiveKey(this.getStore(), this.getEventKey(), activeKey);
    }
  };

  SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  };

  // all keyboard events callbacks run from here at first


  SubPopupMenu.prototype.render = function render() {
    var _this2 = this;

    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(this.props, []);

    this.instanceArray = [];
    var className = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(props.prefixCls, props.className, props.prefixCls + '-' + props.mode);
    var domProps = {
      className: className,
      // role could be 'select' and by default set to menu
      role: props.role || 'menu'
    };
    if (props.id) {
      domProps.id = props.id;
    }
    if (props.focusable) {
      domProps.tabIndex = '0';
      domProps.onKeyDown = this.onKeyDown;
    }
    var prefixCls = props.prefixCls,
        eventKey = props.eventKey,
        visible = props.visible;

    __WEBPACK_IMPORTED_MODULE_11__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });

    // Otherwise, the propagated click event will trigger another onClick
    delete props.onClick;
    return (
      // ESLint is not smart enough to know that the type of `children` was checked.
      /* eslint-disable */
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__DOMWrap__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props, {
          tag: 'ul',
          hiddenClassName: prefixCls + '-hidden',
          visible: visible
        }, domProps),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.map(props.children, function (c, i) {
          return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
        })
      )
      /*eslint-enable */

    );
  };

  return SubPopupMenu;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

SubPopupMenu.propTypes = {
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onOpenChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  openTransitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  openAnimation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  openKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  parentMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  store: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    getState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    setState: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }),

  // adding in refactor
  focusable: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  defaultActiveFirst: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultSelectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  defaultOpenKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  level: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  mode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['click', 'hover']),
  inlineIndent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),
  manualRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
SubPopupMenu.defaultProps = {
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  level: 1,
  inlineIndent: 24,
  visible: true,
  focusable: true,
  style: {},
  manualRef: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */]
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onKeyDown = function (e, callback) {
    var keyCode = e.keyCode;
    var handled = void 0;
    _this3.getFlatInstanceArray().forEach(function (obj) {
      if (obj && obj.props.active && obj.onKeyDown) {
        handled = obj.onKeyDown(e);
      }
    });
    if (handled) {
      return 1;
    }
    var activeItem = null;
    if (keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].UP || keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].DOWN) {
      activeItem = _this3.step(keyCode === __WEBPACK_IMPORTED_MODULE_8_rc_util_es_KeyCode__["a" /* default */].UP ? -1 : 1);
    }
    if (activeItem) {
      e.preventDefault();
      updateActiveKey(_this3.getStore(), _this3.getEventKey(), activeItem.props.eventKey);

      if (typeof callback === 'function') {
        callback(activeItem);
      }

      return 1;
    }
  };

  this.onItemHover = function (e) {
    var key = e.key,
        hover = e.hover;

    updateActiveKey(_this3.getStore(), _this3.getEventKey(), hover ? key : null);
  };

  this.onDeselect = function (selectInfo) {
    _this3.props.onDeselect(selectInfo);
  };

  this.onSelect = function (selectInfo) {
    _this3.props.onSelect(selectInfo);
  };

  this.onClick = function (e) {
    _this3.props.onClick(e);
  };

  this.onOpenChange = function (e) {
    _this3.props.onOpenChange(e);
  };

  this.onDestroy = function (key) {
    /* istanbul ignore next */
    _this3.props.onDestroy(key);
  };

  this.getFlatInstanceArray = function () {
    return _this3.instanceArray;
  };

  this.getStore = function () {
    return _this3.props.store;
  };

  this.getEventKey = function () {
    // when eventKey not available ,it's menu and return menu id '0-menu-'
    return _this3.props.eventKey || '0-menu-';
  };

  this.getOpenTransitionName = function () {
    return _this3.props.openTransitionName;
  };

  this.step = function (direction) {
    var children = _this3.getFlatInstanceArray();
    var activeKey = _this3.getStore().getState().activeKey[_this3.getEventKey()];
    var len = children.length;
    if (!len) {
      return null;
    }
    if (direction < 0) {
      children = children.concat().reverse();
    }
    // find current activeIndex
    var activeIndex = -1;
    children.every(function (c, ci) {
      if (c && c.props.eventKey === activeKey) {
        activeIndex = ci;
        return false;
      }
      return true;
    });
    if (!_this3.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
      return undefined;
    }
    var start = (activeIndex + 1) % len;
    var i = start;

    do {
      var child = children[i];
      if (!child || child.props.disabled) {
        i = (i + 1) % len;
      } else {
        return child;
      }
    } while (i !== start);

    return null;
  };

  this.renderCommonMenuItem = function (child, i, extraProps) {
    var state = _this3.getStore().getState();
    var props = _this3.props;
    var key = Object(__WEBPACK_IMPORTED_MODULE_11__util__["a" /* getKeyFromChildrenIndex */])(child, props.eventKey, i);
    var childProps = child.props;
    var isActive = key === state.activeKey;
    var newChildProps = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
      mode: props.mode,
      level: props.level,
      inlineIndent: props.inlineIndent,
      renderMenuItem: _this3.renderMenuItem,
      rootPrefixCls: props.prefixCls,
      index: i,
      parentMenu: props.parentMenu,
      // customized ref function, need to be invoked manually in child's componentDidMount
      manualRef: childProps.disabled ? undefined : Object(__WEBPACK_IMPORTED_MODULE_9_rc_util_es_createChainedFunction__["a" /* default */])(child.ref, saveRef.bind(_this3)),
      eventKey: key,
      active: !childProps.disabled && isActive,
      multiple: props.multiple,
      onClick: function onClick(e) {
        (childProps.onClick || __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */])(e);
        _this3.onClick(e);
      },
      onItemHover: _this3.onItemHover,
      openTransitionName: _this3.getOpenTransitionName(),
      openAnimation: props.openAnimation,
      subMenuOpenDelay: props.subMenuOpenDelay,
      subMenuCloseDelay: props.subMenuCloseDelay,
      forceSubMenuRender: props.forceSubMenuRender,
      onOpenChange: _this3.onOpenChange,
      onDeselect: _this3.onDeselect,
      onSelect: _this3.onSelect
    }, extraProps);
    if (props.mode === 'inline') {
      newChildProps.triggerSubMenuAction = 'click';
    }
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(child, newChildProps);
  };

  this.renderMenuItem = function (c, i, subMenuKey) {
    /* istanbul ignore if */
    if (!c) {
      return null;
    }
    var state = _this3.getStore().getState();
    var extraProps = {
      openKeys: state.openKeys,
      selectedKeys: state.selectedKeys,
      triggerSubMenuAction: _this3.props.triggerSubMenuAction,
      subMenuKey: subMenuKey
    };
    return _this3.renderCommonMenuItem(c, i, extraProps);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_mini_store__["connect"])()(SubPopupMenu));

/***/ }),

/***/ "./node_modules/rc-menu/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__("./node_modules/rc-menu/es/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubMenu__ = __webpack_require__("./node_modules/rc-menu/es/SubMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__("./node_modules/rc-menu/es/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuItemGroup__ = __webpack_require__("./node_modules/rc-menu/es/MenuItemGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Divider__ = __webpack_require__("./node_modules/rc-menu/es/Divider.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return __WEBPACK_IMPORTED_MODULE_1__SubMenu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return __WEBPACK_IMPORTED_MODULE_2__MenuItem__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return __WEBPACK_IMPORTED_MODULE_2__MenuItem__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemGroup", function() { return __WEBPACK_IMPORTED_MODULE_3__MenuItemGroup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ItemGroup", function() { return __WEBPACK_IMPORTED_MODULE_3__MenuItemGroup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return __WEBPACK_IMPORTED_MODULE_4__Divider__["a"]; });








/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Menu__["a" /* default */]);

/***/ }),

/***/ "./node_modules/rc-menu/es/placements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export placements */
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};

/* harmony default export */ __webpack_exports__["a"] = (placements);

/***/ }),

/***/ "./node_modules/rc-menu/es/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = noop;
/* harmony export (immutable) */ __webpack_exports__["a"] = getKeyFromChildrenIndex;
/* harmony export (immutable) */ __webpack_exports__["b"] = getMenuIdFromSubMenuEventKey;
/* harmony export (immutable) */ __webpack_exports__["c"] = loopMenuItem;
/* harmony export (immutable) */ __webpack_exports__["d"] = loopMenuItemRecursively;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return menuAllProps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function noop() {}

function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || prefix + 'item_' + index;
}

function getMenuIdFromSubMenuEventKey(eventKey) {
  return eventKey + '-menu-';
}

function loopMenuItem(children, cb) {
  var index = -1;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (c) {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(c.props.children, function (c2) {
        index++;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}

function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (c) {
    if (c) {
      var construct = c.type;
      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
        return;
      }
      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.props.children) {
        loopMenuItemRecursively(c.props.children, keys, ret);
      }
    }
  });
}

var menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey',

// the following keys found need to be removed from test regression
'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme'];

/***/ }),

/***/ "./node_modules/rc-pagination/es/KeyCode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  ZERO: 48,
  NINE: 57,

  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,

  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,

  ARROW_UP: 38,
  ARROW_DOWN: 40
});

/***/ }),

/***/ "./node_modules/rc-pagination/es/Options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__KeyCode__ = __webpack_require__("./node_modules/rc-pagination/es/KeyCode.js");








var Options = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Options, _React$Component);

  function Options(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Options);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this.buildOptionText = function (value) {
      return value + ' ' + _this.props.locale.items_per_page;
    };

    _this.changeSize = function (value) {
      _this.props.changeSize(Number(value));
    };

    _this.handleChange = function (e) {
      _this.setState({
        goInputText: e.target.value
      });
    };

    _this.go = function (e) {
      var val = _this.state.goInputText;
      if (val === '') {
        return;
      }
      val = isNaN(val) ? _this.props.current : Number(val);
      if (e.keyCode === __WEBPACK_IMPORTED_MODULE_6__KeyCode__["a" /* default */].ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });
        _this.props.quickGo(val);
      }
    };

    _this.state = {
      goInputText: ''
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Options, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var state = this.state;
      var locale = props.locale;
      var prefixCls = props.rootPrefixCls + '-options';
      var changeSize = props.changeSize;
      var quickGo = props.quickGo;
      var goButton = props.goButton;
      var buildOptionText = props.buildOptionText || this.buildOptionText;
      var Select = props.selectComponentClass;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!(changeSize || quickGo)) {
        return null;
      }

      if (changeSize && Select) {
        var Option = Select.Option;
        var pageSize = props.pageSize || props.pageSizeOptions[0];
        var options = props.pageSizeOptions.map(function (opt, i) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            Option,
            { key: i, value: opt },
            buildOptionText(opt)
          );
        });

        changeSelect = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          Select,
          {
            prefixCls: props.selectPrefixCls,
            showSearch: false,
            className: prefixCls + '-size-changer',
            optionLabelProp: 'children',
            dropdownMatchSelectWidth: false,
            value: pageSize.toString(),
            onChange: this.changeSize,
            getPopupContainer: function getPopupContainer(triggerNode) {
              return triggerNode.parentNode;
            }
          },
          options
        );
      }

      if (quickGo) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: this.go,
                onKeyUp: this.go
              },
              locale.jump_to_confirm
            );
          } else {
            gotoButton = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'span',
              {
                onClick: this.go,
                onKeyUp: this.go
              },
              goButton
            );
          }
        }
        goInput = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: prefixCls + '-quick-jumper' },
          locale.jump_to,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
            type: 'text',
            value: state.goInputText,
            onChange: this.handleChange,
            onKeyUp: this.go
          }),
          locale.page,
          gotoButton
        );
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'li',
        { className: '' + prefixCls },
        changeSelect,
        goInput
      );
    }
  }]);

  return Options;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Options.propTypes = {
  changeSize: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  quickGo: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  selectComponentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  current: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  pageSizeOptions: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string),
  pageSize: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  buildOptionText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  locale: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};
Options.defaultProps = {
  pageSizeOptions: ['10', '20', '30', '40']
};


/* harmony default export */ __webpack_exports__["a"] = (Options);

/***/ }),

/***/ "./node_modules/rc-pagination/es/Pager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var Pager = function Pager(props) {
  var prefixCls = props.rootPrefixCls + '-item';
  var cls = prefixCls + ' ' + prefixCls + '-' + props.page;

  if (props.active) {
    cls = cls + ' ' + prefixCls + '-active';
  }

  if (props.className) {
    cls = cls + ' ' + props.className;
  }

  var handleClick = function handleClick() {
    props.onClick(props.page);
  };

  var handleKeyPress = function handleKeyPress(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    {
      title: props.showTitle ? props.page : null,
      className: cls,
      onClick: handleClick,
      onKeyPress: handleKeyPress,
      tabIndex: '0'
    },
    props.itemRender(props.page, 'page', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      null,
      props.page
    ))
  );
};

Pager.propTypes = {
  page: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  active: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  last: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  showTitle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onKeyPress: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  itemRender: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (Pager);

/***/ }),

/***/ "./node_modules/rc-pagination/es/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pager__ = __webpack_require__("./node_modules/rc-pagination/es/Pager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Options__ = __webpack_require__("./node_modules/rc-pagination/es/Options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__KeyCode__ = __webpack_require__("./node_modules/rc-pagination/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__locale_zh_CN__ = __webpack_require__("./node_modules/rc-pagination/es/locale/zh_CN.js");












function noop() {}

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function defaultItemRender(page, type, element) {
  return element;
}

var Pagination = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Pagination, _React$Component);

  function Pagination(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Pagination);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _initialiseProps.call(_this);

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = 'current' in props;
    if (hasCurrent && !hasOnChange) {
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.'); // eslint-disable-line
    }

    var current = props.defaultCurrent;
    if ('current' in props) {
      current = props.current;
    }

    var pageSize = props.defaultPageSize;
    if ('pageSize' in props) {
      pageSize = props.pageSize;
    }

    _this.state = {
      current: current,
      currentInputValue: current,
      pageSize: pageSize
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('current' in nextProps) {
        this.setState({
          current: nextProps.current,
          currentInputValue: nextProps.current
        });
      }

      if ('pageSize' in nextProps) {
        var newState = {};
        var current = this.state.current;
        var newCurrent = this.calculatePage(nextProps.pageSize);
        current = current > newCurrent ? newCurrent : current;
        if (!('current' in nextProps)) {
          newState.current = current;
          newState.currentInputValue = current;
        }
        newState.pageSize = nextProps.pageSize;
        this.setState(newState);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      var prefixCls = this.props.prefixCls;

      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector('.' + prefixCls + '-item-' + prevState.current);
        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: 'getJumpPrevPage',
    value: function getJumpPrevPage() {
      return Math.max(1, this.state.current - (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'getJumpNextPage',
    value: function getJumpNextPage() {
      return Math.min(this.calculatePage(), this.state.current + (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'getJumpPrevPage',
    value: function getJumpPrevPage() {
      return Math.max(1, this.state.current - (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'getJumpNextPage',
    value: function getJumpNextPage() {
      return Math.min(this.calculatePage(), this.state.current + (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'render',
    value: function render() {
      // When hideOnSinglePage is true and there is only 1 page, hide the pager
      if (this.props.hideOnSinglePage === true && this.props.total <= this.state.pageSize) {
        return null;
      }

      var props = this.props;
      var locale = props.locale;

      var prefixCls = props.prefixCls;
      var allPages = this.calculatePage();
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var gotoButton = null;

      var goButton = props.showQuickJumper && props.showQuickJumper.goButton;
      var pageBufferSize = props.showLessItems ? 1 : 2;
      var _state = this.state,
          current = _state.current,
          pageSize = _state.pageSize;


      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;

      var dataOrAriaAttributeProps = Object.keys(props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          prev[key] = props[key];
        }
        return prev;
      }, {});

      if (props.simple) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: this.handleGoTO,
                onKeyUp: this.handleGoTO
              },
              locale.jump_to_confirm
            );
          } else {
            gotoButton = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'span',
              {
                onClick: this.handleGoTO,
                onKeyUp: this.handleGoTO
              },
              goButton
            );
          }
          gotoButton = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            {
              title: props.showTitle ? '' + locale.jump_to + this.state.current + '/' + allPages : null,
              className: prefixCls + '-simple-pager'
            },
            gotoButton
          );
        }

        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'ul',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            className: prefixCls + ' ' + prefixCls + '-simple ' + props.className,
            style: props.style,
            ref: this.savePaginationNode
          }, dataOrAriaAttributeProps),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            {
              title: props.showTitle ? locale.prev_page : null,
              onClick: this.prev,
              tabIndex: this.hasPrev() ? 0 : null,
              onKeyPress: this.runIfEnterPrev,
              className: (this.hasPrev() ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
              'aria-disabled': !this.hasPrev()
            },
            props.itemRender(prevPage, 'prev', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            {
              title: props.showTitle ? this.state.current + '/' + allPages : null,
              className: prefixCls + '-simple-pager'
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', {
              type: 'text',
              value: this.state.currentInputValue,
              onKeyDown: this.handleKeyDown,
              onKeyUp: this.handleKeyUp,
              onChange: this.handleKeyUp,
              size: '3'
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'span',
              { className: prefixCls + '-slash' },
              '\uFF0F'
            ),
            allPages
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            {
              title: props.showTitle ? locale.next_page : null,
              onClick: this.next,
              tabIndex: this.hasPrev() ? 0 : null,
              onKeyPress: this.runIfEnterNext,
              className: (this.hasNext() ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
              'aria-disabled': !this.hasNext()
            },
            props.itemRender(nextPage, 'next', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          ),
          gotoButton
        );
      }

      if (allPages <= 5 + pageBufferSize * 2) {
        for (var i = 1; i <= allPages; i++) {
          var active = this.state.current === i;
          pagerList.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Pager__["a" /* default */], {
            locale: locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: i,
            page: i,
            active: active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }
      } else {
        var prevItemTitle = props.showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = props.showLessItems ? locale.next_3 : locale.next_5;
        if (props.showPrevNextJumpers) {
          jumpPrev = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            {
              title: props.showTitle ? prevItemTitle : null,
              key: 'prev',
              onClick: this.jumpPrev,
              tabIndex: '0',
              onKeyPress: this.runIfEnterJumpPrev,
              className: prefixCls + '-jump-prev'
            },
            props.itemRender(this.getJumpPrevPage(), 'jump-prev', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          );
          jumpNext = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            {
              title: props.showTitle ? nextItemTitle : null,
              key: 'next',
              tabIndex: '0',
              onClick: this.jumpNext,
              onKeyPress: this.runIfEnterJumpNext,
              className: prefixCls + '-jump-next'
            },
            props.itemRender(this.getJumpNextPage(), 'jump-next', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          );
        }
        lastPager = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Pager__["a" /* default */], {
          locale: props.locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });
        firstPager = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Pager__["a" /* default */], {
          locale: props.locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });

        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i++) {
          var _active = current === _i;
          pagerList.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Pager__["a" /* default */], {
            locale: props.locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(pagerList[0], {
            className: prefixCls + '-item-after-jump-prev'
          });
          pagerList.unshift(jumpPrev);
        }
        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(pagerList[pagerList.length - 1], {
            className: prefixCls + '-item-before-jump-next'
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1) {
          pagerList.unshift(firstPager);
        }
        if (right !== allPages) {
          pagerList.push(lastPager);
        }
      }

      var totalText = null;

      if (props.showTotal) {
        totalText = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'li',
          { className: prefixCls + '-total-text' },
          props.showTotal(props.total, [(current - 1) * pageSize + 1, current * pageSize > props.total ? props.total : current * pageSize])
        );
      }
      var prevDisabled = !this.hasPrev();
      var nextDisabled = !this.hasNext();
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'ul',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          className: prefixCls + ' ' + props.className,
          style: props.style,
          unselectable: 'unselectable',
          ref: this.savePaginationNode
        }, dataOrAriaAttributeProps),
        totalText,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'li',
          {
            title: props.showTitle ? locale.prev_page : null,
            onClick: this.prev,
            tabIndex: prevDisabled ? null : 0,
            onKeyPress: this.runIfEnterPrev,
            className: (!prevDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
            'aria-disabled': prevDisabled
          },
          props.itemRender(prevPage, 'prev', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('a', { className: prefixCls + '-item-link' }))
        ),
        pagerList,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'li',
          {
            title: props.showTitle ? locale.next_page : null,
            onClick: this.next,
            tabIndex: nextDisabled ? null : 0,
            onKeyPress: this.runIfEnterNext,
            className: (!nextDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
            'aria-disabled': nextDisabled
          },
          props.itemRender(nextPage, 'next', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('a', { className: prefixCls + '-item-link' }))
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Options__["a" /* default */], {
          locale: props.locale,
          rootPrefixCls: prefixCls,
          selectComponentClass: props.selectComponentClass,
          selectPrefixCls: props.selectPrefixCls,
          changeSize: this.props.showSizeChanger ? this.changePageSize : null,
          current: this.state.current,
          pageSize: this.state.pageSize,
          pageSizeOptions: this.props.pageSizeOptions,
          quickGo: this.props.showQuickJumper ? this.handleChange : null,
          goButton: goButton
        })
      );
    }
  }]);

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Pagination.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  current: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  defaultCurrent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  total: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  pageSize: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  defaultPageSize: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  onChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  hideOnSinglePage: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  showSizeChanger: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  showLessItems: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onShowSizeChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  selectComponentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  showPrevNextJumpers: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  showQuickJumper: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  showTitle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  pageSizeOptions: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string),
  showTotal: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  locale: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  itemRender: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showSizeChanger: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: __WEBPACK_IMPORTED_MODULE_10__locale_zh_CN__["a" /* default */],
  style: {},
  itemRender: defaultItemRender
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.savePaginationNode = function (node) {
    _this2.paginationNode = node;
  };

  this.calculatePage = function (p) {
    var pageSize = p;
    if (typeof pageSize === 'undefined') {
      pageSize = _this2.state.pageSize;
    }
    return Math.floor((_this2.props.total - 1) / pageSize) + 1;
  };

  this.isValid = function (page) {
    return isInteger(page) && page >= 1 && page !== _this2.state.current;
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].ARROW_UP || e.keyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].ARROW_DOWN) {
      e.preventDefault();
    }
  };

  this.handleKeyUp = function (e) {
    var inputValue = e.target.value;
    var currentInputValue = _this2.state.currentInputValue;
    var value = void 0;

    if (inputValue === '') {
      value = inputValue;
    } else if (isNaN(Number(inputValue))) {
      value = currentInputValue;
    } else {
      value = Number(inputValue);
    }

    if (value !== currentInputValue) {
      _this2.setState({
        currentInputValue: value
      });
    }

    if (e.keyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].ENTER) {
      _this2.handleChange(value);
    } else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].ARROW_UP) {
      _this2.handleChange(value - 1);
    } else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].ARROW_DOWN) {
      _this2.handleChange(value + 1);
    }
  };

  this.changePageSize = function (size) {
    var current = _this2.state.current;
    var newCurrent = _this2.calculatePage(size);
    current = current > newCurrent ? newCurrent : current;
    // fix the issue:
    // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.
    if (newCurrent === 0) {
      current = _this2.state.current;
    }

    if (typeof size === 'number') {
      if (!('pageSize' in _this2.props)) {
        _this2.setState({
          pageSize: size
        });
      }
      if (!('current' in _this2.props)) {
        _this2.setState({
          current: current,
          currentInputValue: current
        });
      }
    }
    _this2.props.onShowSizeChange(current, size);
  };

  this.handleChange = function (p) {
    var page = p;
    if (_this2.isValid(page)) {
      if (page > _this2.calculatePage()) {
        page = _this2.calculatePage();
      }

      if (!('current' in _this2.props)) {
        _this2.setState({
          current: page,
          currentInputValue: page
        });
      }

      var pageSize = _this2.state.pageSize;
      _this2.props.onChange(page, pageSize);

      return page;
    }

    return _this2.state.current;
  };

  this.prev = function () {
    if (_this2.hasPrev()) {
      _this2.handleChange(_this2.state.current - 1);
    }
  };

  this.next = function () {
    if (_this2.hasNext()) {
      _this2.handleChange(_this2.state.current + 1);
    }
  };

  this.jumpPrev = function () {
    _this2.handleChange(_this2.getJumpPrevPage());
  };

  this.jumpNext = function () {
    _this2.handleChange(_this2.getJumpNextPage());
  };

  this.hasPrev = function () {
    return _this2.state.current > 1;
  };

  this.hasNext = function () {
    return _this2.state.current < _this2.calculatePage();
  };

  this.runIfEnter = function (event, callback) {
    for (var _len = arguments.length, restParams = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      restParams[_key - 2] = arguments[_key];
    }

    if (event.key === 'Enter' || event.charCode === 13) {
      callback.apply(undefined, restParams);
    }
  };

  this.runIfEnterPrev = function (e) {
    _this2.runIfEnter(e, _this2.prev);
  };

  this.runIfEnterNext = function (e) {
    _this2.runIfEnter(e, _this2.next);
  };

  this.runIfEnterJumpPrev = function (e) {
    _this2.runIfEnter(e, _this2.jumpPrev);
  };

  this.runIfEnterJumpNext = function (e) {
    _this2.runIfEnter(e, _this2.jumpNext);
  };

  this.handleGoTO = function (e) {
    if (e.keyCode === __WEBPACK_IMPORTED_MODULE_9__KeyCode__["a" /* default */].ENTER || e.type === 'click') {
      _this2.handleChange(_this2.state.currentInputValue);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ "./node_modules/rc-pagination/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__("./node_modules/rc-pagination/es/Pagination.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__Pagination__["a"]; });


/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/zh_CN.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',

  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
});

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  jump_to_confirm: 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-select/es/DropdownMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_Children_toArray__ = __webpack_require__("./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_menu__ = __webpack_require__("./node_modules/rc-menu/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__ = __webpack_require__("./node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__("./node_modules/rc-select/es/util.js");












var DropdownMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DropdownMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = Object(__WEBPACK_IMPORTED_MODULE_10__util__["q" /* saveRef */])(_this, 'menuRef');
    return _this;
  }

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue,
        firstActiveValue = props.firstActiveValue,
        backfillValue = props.backfillValue;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = Object(__WEBPACK_IMPORTED_MODULE_10__util__["i" /* getSelectKeys */])(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length || firstActiveValue) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
            foundFirst = true;
            return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(item, {
              ref: function ref(_ref) {
                _this2.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type.isMenuItemGroup) {
            var children = Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Children_toArray__["a" /* default */])(item.props.children).map(clone);
            return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(item, {}, children);
          }
          return clone(item);
        });
      } else {
        // Clear firstActiveItem when dropdown menu items was empty
        // Avoid `Unable to find node on an unmounted component`
        // https://github.com/ant-design/ant-design/issues/10774
        this.firstActiveItem = null;
      }

      // clear activeKey when inputValue change
      var lastValue = value && value[value.length - 1];
      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
        activeKeyProps.activeKey = '';
      }
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_rc_menu__["default"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          ref: this.saveMenuRef,
          style: this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirstOption,
          role: 'listbox'
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: prefixCls + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      {
        style: { overflow: 'auto' },
        onFocus: this.props.onPopupFocus,
        onMouseDown: __WEBPACK_IMPORTED_MODULE_10__util__["p" /* preventDefaultEvent */],
        onScroll: this.props.onPopupScroll
      },
      renderMenu
    ) : null;
  };

  return DropdownMenu;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

DropdownMenu.propTypes = {
  defaultActiveFirstOption: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  dropdownMenuStyle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onPopupFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onPopupScroll: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMenuDeSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMenuSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  menuItems: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  inputValue: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.scrollActiveItemToView = function () {
    // scroll into view
    var itemComponent = Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(_this3.firstActiveItem);
    var props = _this3.props;

    if (itemComponent) {
      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };
      if ((!props.value || props.value.length === 0) && props.firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      }

      __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default()(itemComponent, Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(_this3.menuRef), scrollIntoViewOpts);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);


DropdownMenu.displayName = 'DropdownMenu';

/***/ }),

/***/ "./node_modules/rc-select/es/OptGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);





var OptGroup = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(OptGroup, _React$Component);

  function OptGroup() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, OptGroup);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  return OptGroup;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

OptGroup.isSelectOptGroup = true;
/* harmony default export */ __webpack_exports__["a"] = (OptGroup);

/***/ }),

/***/ "./node_modules/rc-select/es/Option.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);






var Option = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Option, _React$Component);

  function Option() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Option);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  return Option;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Option.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number])
};
Option.isSelectOption = true;
/* harmony default export */ __webpack_exports__["a"] = (Option);

/***/ }),

/***/ "./node_modules/rc-select/es/PropTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPropTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


function valueType(props, propName, componentName) {
  var basicType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]);

  var labelInValueShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    key: basicType.isRequired,
    label: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node
  });
  if (props.labelInValue) {
    var validate = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(labelInValueShape), labelInValueShape]);
    var error = validate.apply(undefined, arguments);
    if (error) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`, ' + ('when you set `labelInValue` to `true`, `' + propName + '` should in ') + 'shape of `{ key: string | number, label?: ReactNode }`.');
    }
  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
    return new Error('Invalid prop `' + propName + '` of type `string` supplied to `' + componentName + '`, ' + 'expected `array` when `multiple` or `tags` is `true`.');
  } else {
    var _validate = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(basicType), basicType]);
    return _validate.apply(undefined, arguments);
  }
}

var SelectPropTypes = {
  defaultActiveFirstOption: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  multiple: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  filterOption: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  showSearch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  allowClear: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  showArrow: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  tags: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  prefixCls: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  transitionName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  optionLabelProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  optionFilterProp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  animation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  choiceTransitionName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSearch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPopupScroll: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onInputKeyDown: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  placeholder: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  onDeselect: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  labelInValue: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  value: valueType,
  defaultValue: valueType,
  dropdownStyle: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  maxTagTextLength: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  maxTagCount: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  maxTagPlaceholder: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func]),
  tokenSeparators: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string),
  getInputElement: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  showAction: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
};

/***/ }),

/***/ "./node_modules/rc-select/es/Select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_Children_toArray__ = __webpack_require__("./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rc_animate__ = __webpack_require__("./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_component_classes__ = __webpack_require__("./node_modules/component-classes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_component_classes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rc_menu__ = __webpack_require__("./node_modules/rc-menu/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_warning__ = __webpack_require__("./node_modules/rc-select/node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Option__ = __webpack_require__("./node_modules/rc-select/es/Option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util__ = __webpack_require__("./node_modules/rc-select/es/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__SelectTrigger__ = __webpack_require__("./node_modules/rc-select/es/SelectTrigger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__PropTypes__ = __webpack_require__("./node_modules/rc-select/es/PropTypes.js");




/* eslint func-names: 1 */
















function noop() {}

function chaining() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // eslint-disable-line
    // eslint-disable-line
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(this, args);
      }
    }
  };
}

var Select = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Select, _React$Component);

  function Select(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Select);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var optionsInfo = Select.getOptionsInfoFromProps(props);
    _this.state = {
      value: Select.getValueFromProps(props, true), // true: use default value
      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true // use default value
      ) : '',
      open: props.defaultOpen,
      optionsInfo: optionsInfo,
      // a flag for aviod redundant getOptionsInfoFromProps call
      skipBuildOptionsInfo: true
    };

    _this.saveInputRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'inputRef');
    _this.saveInputMirrorRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'inputMirrorRef');
    _this.saveTopCtrlRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'topCtrlRef');
    _this.saveSelectTriggerRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'selectTriggerRef');
    _this.saveRootRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'rootRef');
    _this.saveSelectionRef = Object(__WEBPACK_IMPORTED_MODULE_15__util__["q" /* saveRef */])(_this, 'selectionRef');
    return _this;
  }

  Select.prototype.componentDidMount = function componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate() {
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(this.props)) {
      var inputNode = this.getInputDOMNode();
      var mirrorNode = this.getInputMirrorDOMNode();
      if (inputNode.value) {
        inputNode.style.width = '';
        inputNode.style.width = mirrorNode.clientWidth + 'px';
      } else {
        inputNode.style.width = '';
      }
    }
    this.forcePopupAlign();
  };

  Select.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearFocusTime();
    this.clearBlurTime();
    if (this.dropdownContainer) {
      __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unmountComponentAtNode(this.dropdownContainer);
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  };

  // combobox ignore


  Select.prototype.focus = function focus() {
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(this.props)) {
      this.selectionRef.focus();
    } else {
      this.getInputDOMNode().focus();
    }
  };

  Select.prototype.blur = function blur() {
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(this.props)) {
      this.selectionRef.blur();
    } else {
      this.getInputDOMNode().blur();
    }
  };

  Select.prototype.renderClear = function renderClear() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        allowClear = _props.allowClear;
    var _state = this.state,
        value = _state.value,
        inputValue = _state.inputValue;

    var clear = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('span', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      key: 'clear',
      onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
      style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
    }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
      className: prefixCls + '-selection__clear',
      onClick: this.onClearSelection
    }));
    if (!allowClear) {
      return null;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(this.props)) {
      if (inputValue) {
        return clear;
      }
      return null;
    }
    if (inputValue || value.length) {
      return clear;
    }
    return null;
  };

  Select.prototype.render = function render() {
    var _rootCls;

    var props = this.props;
    var multiple = Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props);
    var state = this.state;
    var className = props.className,
        disabled = props.disabled,
        prefixCls = props.prefixCls;

    var ctrlNode = this.renderTopControlNode();
    var extraSelectionProps = {};
    var open = this.state.open;

    if (open) {
      this._options = this.renderFilterOptions();
    }
    var realOpen = this.getRealOpenState();
    var options = this._options || [];
    if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(props)) {
      extraSelectionProps = {
        onKeyDown: this.onKeyDown,
        tabIndex: props.disabled ? -1 : 0
      };
    }
    var rootCls = (_rootCls = {}, _rootCls[className] = !!className, _rootCls[prefixCls] = 1, _rootCls[prefixCls + '-open'] = open, _rootCls[prefixCls + '-focused'] = open || !!this._focused, _rootCls[prefixCls + '-combobox'] = Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(props), _rootCls[prefixCls + '-disabled'] = disabled, _rootCls[prefixCls + '-enabled'] = !disabled, _rootCls[prefixCls + '-allow-clear'] = !!props.allowClear, _rootCls[prefixCls + '-no-arrow'] = !props.showArrow, _rootCls);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_16__SelectTrigger__["a" /* default */],
      {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: this.saveSelectTriggerRef
      },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        {
          style: props.style,
          ref: this.saveRootRef,
          onBlur: this.onOuterBlur,
          onFocus: this.onOuterFocus,
          className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(rootCls)
        },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            ref: this.saveSelectionRef,
            key: 'selection',
            className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-haspopup': 'true',
            'aria-expanded': realOpen
          }, extraSelectionProps),
          ctrlNode,
          this.renderClear(),
          multiple || !props.showArrow ? null : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'span',
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              key: 'arrow',
              className: prefixCls + '-arrow',
              style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
            }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
              onClick: this.onArrowClick
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('b', null)
          )
        )
      )
    );
  };

  return Select;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Select.propTypes = __WEBPACK_IMPORTED_MODULE_17__PropTypes__["a" /* SelectPropTypes */];
Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  onInputKeyDown: noop,
  showArrow: true,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: [],
  autoClearSearchValue: true
};

Select.getDerivedStateFromProps = function (nextProps, prevState) {
  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select.getOptionsInfoFromProps(nextProps, prevState);

  var newState = {
    optionsInfo: optionsInfo,
    skipBuildOptionsInfo: false
  };

  if ('open' in nextProps) {
    newState.open = nextProps.open;
  }

  if ('value' in nextProps) {
    var value = Select.getValueFromProps(nextProps);
    newState.value = value;
    if (nextProps.combobox) {
      newState.inputValue = Select.getInputValueForCombobox(nextProps, optionsInfo);
    }
  }
  return newState;
};

Select.getOptionsFromChildren = function (children) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.forEach(children, function (child) {
    if (!child) {
      return;
    }
    if (child.type.isSelectOptGroup) {
      Select.getOptionsFromChildren(child.props.children, options);
    } else {
      options.push(child);
    }
  });
  return options;
};

Select.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
  var value = [];
  if ('value' in props && !useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.value);
  }
  if ('defaultValue' in props && useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.defaultValue);
  }
  if (value.length) {
    value = value[0];
  } else {
    return '';
  }
  var label = value;
  if (props.labelInValue) {
    label = value.label;
  } else if (optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)]) {
    label = optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)].label;
  }
  if (label === undefined) {
    label = '';
  }
  return label;
};

Select.getLabelFromOption = function (props, option) {
  return Object(__WEBPACK_IMPORTED_MODULE_15__util__["h" /* getPropValue */])(option, props.optionLabelProp);
};

Select.getOptionsInfoFromProps = function (props, preState) {
  var options = Select.getOptionsFromChildren(props.children);
  var optionsInfo = {};
  options.forEach(function (option) {
    var singleValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(option);
    optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(singleValue)] = {
      option: option,
      value: singleValue,
      label: Select.getLabelFromOption(props, option),
      title: option.props.title
    };
  });
  if (preState) {
    // keep option info in pre state value.
    var oldOptionsInfo = preState.optionsInfo;
    var value = preState.value;
    value.forEach(function (v) {
      var key = Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(v);
      if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
        optionsInfo[key] = oldOptionsInfo[key];
      }
    });
  }
  return optionsInfo;
};

Select.getValueFromProps = function (props, useDefaultValue) {
  var value = [];
  if ('value' in props && !useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.value);
  }
  if ('defaultValue' in props && useDefaultValue) {
    value = Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(props.defaultValue);
  }
  if (props.labelInValue) {
    value = value.map(function (v) {
      return v.key;
    });
  }
  return value;
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onInputChange = function (event) {
    var tokenSeparators = _this2.props.tokenSeparators;

    var val = event.target.value;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(_this2.props) && tokenSeparators.length && Object(__WEBPACK_IMPORTED_MODULE_15__util__["k" /* includesSeparators */])(val, tokenSeparators)) {
      var nextValue = _this2.getValueByInput(val);
      if (nextValue !== undefined) {
        _this2.fireChange(nextValue);
      }
      _this2.setOpenState(false, true);
      _this2.setInputValue('', false);
      return;
    }
    _this2.setInputValue(val);
    _this2.setState({
      open: true
    });
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(_this2.props)) {
      _this2.fireChange([val]);
    }
  };

  this.onDropdownVisibleChange = function (open) {
    if (open && !_this2._focused) {
      _this2.clearBlurTime();
      _this2.timeoutFocus();
      _this2._focused = true;
      _this2.updateFocusClassName();
    }
    _this2.setOpenState(open);
  };

  this.onKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var keyCode = event.keyCode;
    if (_this2.state.open && !_this2.getInputDOMNode()) {
      _this2.onInputKeyDown(event);
    } else if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ENTER || keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].DOWN) {
      _this2.setOpenState(true);
      event.preventDefault();
    }
  };

  this.onInputKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var state = _this2.state;
    var keyCode = event.keyCode;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props) && !event.target.value && keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].BACKSPACE) {
      event.preventDefault();
      var value = state.value;

      if (value.length) {
        _this2.removeSelected(value[value.length - 1]);
      }
      return;
    }
    if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].DOWN) {
      if (!state.open) {
        _this2.openIfHasChildren();
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    } else if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ENTER && state.open) {
      // Aviod trigger form submit when select item
      // https://github.com/ant-design/ant-design/issues/10861
      event.preventDefault();
    } else if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ESC) {
      if (state.open) {
        _this2.setOpenState(false);
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }

    if (state.open) {
      var menu = _this2.selectTriggerRef.getInnerMenu();
      if (menu && menu.onKeyDown(event, _this2.handleBackfill)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  this.onMenuSelect = function (_ref) {
    var item = _ref.item;

    if (!item) {
      return;
    }
    var value = _this2.state.value;
    var props = _this2.props;
    var selectedValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(item);
    var lastValue = value[value.length - 1];
    _this2.fireSelect(selectedValue);
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["e" /* findIndexInValueBySingleValue */])(value, selectedValue) !== -1) {
        return;
      }
      value = value.concat([selectedValue]);
    } else {
      if (lastValue && lastValue === selectedValue && selectedValue !== _this2.state.backfillValue) {
        _this2.setOpenState(false, true);
        return;
      }
      value = [selectedValue];
      _this2.setOpenState(false, true);
    }
    _this2.fireChange(value);
    var inputValue = void 0;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(props)) {
      inputValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["h" /* getPropValue */])(item, props.optionLabelProp);
    } else {
      inputValue = '';
    }
    if (props.autoClearSearchValue) {
      _this2.setInputValue(inputValue, false);
    }
  };

  this.onMenuDeselect = function (_ref2) {
    var item = _ref2.item,
        domEvent = _ref2.domEvent;

    if (domEvent.type === 'click') {
      _this2.removeSelected(Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(item));
    }
    var props = _this2.props;

    if (props.autoClearSearchValue) {
      _this2.setInputValue('', false);
    }
  };

  this.onArrowClick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (!_this2.props.disabled) {
      _this2.setOpenState(!_this2.state.open, !_this2.state.open);
    }
  };

  this.onPlaceholderClick = function () {
    if (_this2.getInputDOMNode()) {
      _this2.getInputDOMNode().focus();
    }
  };

  this.onOuterFocus = function (e) {
    if (_this2.props.disabled) {
      e.preventDefault();
      return;
    }
    _this2.clearBlurTime();
    if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(_this2.props) && e.target === _this2.getInputDOMNode()) {
      return;
    }
    if (_this2._focused) {
      return;
    }
    _this2._focused = true;
    _this2.updateFocusClassName();
    _this2.timeoutFocus();
  };

  this.onPopupFocus = function () {
    // fix ie scrollbar, focus element again
    _this2.maybeFocus(true, true);
  };

  this.onOuterBlur = function (e) {
    if (_this2.props.disabled) {
      e.preventDefault();
      return;
    }
    _this2.blurTimer = setTimeout(function () {
      _this2._focused = false;
      _this2.updateFocusClassName();
      var props = _this2.props;
      var value = _this2.state.value;
      var inputValue = _this2.state.inputValue;

      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
        var options = _this2._options || [];
        if (options.length) {
          var firstOption = Object(__WEBPACK_IMPORTED_MODULE_15__util__["d" /* findFirstMenuItem */])(options);
          if (firstOption) {
            value = [Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(firstOption)];
            _this2.fireChange(value);
          }
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props) && inputValue) {
        // why not use setState?
        _this2.state.inputValue = _this2.getInputDOMNode().value = '';

        value = _this2.getValueByInput(inputValue);
        if (value !== undefined) {
          _this2.fireChange(value);
        }
      }
      props.onBlur(_this2.getVLForOnChange(value));
      _this2.setOpenState(false);
    }, 10);
  };

  this.onClearSelection = function (event) {
    var props = _this2.props;
    var state = _this2.state;
    if (props.disabled) {
      return;
    }
    var inputValue = state.inputValue,
        value = state.value;

    event.stopPropagation();
    if (inputValue || value.length) {
      if (value.length) {
        _this2.fireChange([]);
      }
      _this2.setOpenState(false, true);
      if (inputValue) {
        _this2.setInputValue('');
      }
    }
  };

  this.onChoiceAnimationLeave = function () {
    _this2.forcePopupAlign();
  };

  this.getOptionInfoBySingleValue = function (value, optionsInfo) {
    var info = void 0;
    optionsInfo = optionsInfo || _this2.state.optionsInfo;
    if (optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)]) {
      info = optionsInfo[Object(__WEBPACK_IMPORTED_MODULE_15__util__["g" /* getMapKey */])(value)];
    }
    if (info) {
      return info;
    }
    var defaultLabel = value;
    if (_this2.props.labelInValue) {
      var label = Object(__WEBPACK_IMPORTED_MODULE_15__util__["f" /* getLabelFromPropsValue */])(_this2.props.value, value);
      if (label !== undefined) {
        defaultLabel = label;
      }
    }
    var defaultInfo = {
      option: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_14__Option__["a" /* default */],
        { value: value, key: value },
        value
      ),
      value: value,
      label: defaultLabel
    };
    return defaultInfo;
  };

  this.getOptionBySingleValue = function (value) {
    var _getOptionInfoBySingl = _this2.getOptionInfoBySingleValue(value),
        option = _getOptionInfoBySingl.option;

    return option;
  };

  this.getOptionsBySingleValue = function (values) {
    return values.map(function (value) {
      return _this2.getOptionBySingleValue(value);
    });
  };

  this.getValueByLabel = function (label) {
    if (label === undefined) {
      return null;
    }
    var value = null;
    Object.keys(_this2.state.optionsInfo).forEach(function (key) {
      var info = _this2.state.optionsInfo[key];
      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["s" /* toArray */])(info.label).join('') === label) {
        value = info.value;
      }
    });
    return value;
  };

  this.getVLBySingleValue = function (value) {
    if (_this2.props.labelInValue) {
      return {
        key: value,
        label: _this2.getLabelBySingleValue(value)
      };
    }
    return value;
  };

  this.getVLForOnChange = function (vls_) {
    var vls = vls_;
    if (vls !== undefined) {
      if (!_this2.props.labelInValue) {
        vls = vls.map(function (v) {
          return v;
        });
      } else {
        vls = vls.map(function (vl) {
          return {
            key: vl,
            label: _this2.getLabelBySingleValue(vl)
          };
        });
      }
      return Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(_this2.props) ? vls : vls[0];
    }
    return vls;
  };

  this.getLabelBySingleValue = function (value, optionsInfo) {
    var _getOptionInfoBySingl2 = _this2.getOptionInfoBySingleValue(value, optionsInfo),
        label = _getOptionInfoBySingl2.label;

    return label;
  };

  this.getDropdownContainer = function () {
    if (!_this2.dropdownContainer) {
      _this2.dropdownContainer = document.createElement('div');
      document.body.appendChild(_this2.dropdownContainer);
    }
    return _this2.dropdownContainer;
  };

  this.getPlaceholderElement = function () {
    var props = _this2.props,
        state = _this2.state;

    var hidden = false;
    if (state.inputValue) {
      hidden = true;
    }
    if (state.value.length) {
      hidden = true;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(props) && state.value.length === 1 && !state.value[0]) {
      hidden = false;
    }
    var placeholder = props.placeholder;
    if (placeholder) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
          style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            display: hidden ? 'none' : 'block'
          }, __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */])
        }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
          onClick: _this2.onPlaceholderClick,
          className: props.prefixCls + '-selection__placeholder'
        }),
        placeholder
      );
    }
    return null;
  };

  this.getInputElement = function () {
    var _classnames;

    var props = _this2.props;
    var inputElement = props.getInputElement ? props.getInputElement() : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { id: props.id, autoComplete: 'off' });
    var inputCls = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(inputElement.props.className, (_classnames = {}, _classnames[props.prefixCls + '-search__field'] = true, _classnames));
    // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
    // Add space to the end of the inputValue as the width measurement tolerance
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: props.prefixCls + '-search__field__wrap' },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(inputElement, {
        ref: _this2.saveInputRef,
        onChange: _this2.onInputChange,
        onKeyDown: chaining(_this2.onInputKeyDown, inputElement.props.onKeyDown, _this2.props.onInputKeyDown),
        value: _this2.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'span',
        {
          ref: _this2.saveInputMirrorRef,
          className: props.prefixCls + '-search__field__mirror'
        },
        _this2.state.inputValue,
        '\xA0'
      )
    );
  };

  this.getInputDOMNode = function () {
    return _this2.topCtrlRef ? _this2.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this2.inputRef;
  };

  this.getInputMirrorDOMNode = function () {
    return _this2.inputMirrorRef;
  };

  this.getPopupDOMNode = function () {
    return _this2.selectTriggerRef.getPopupDOMNode();
  };

  this.getPopupMenuComponent = function () {
    return _this2.selectTriggerRef.getInnerMenu();
  };

  this.setOpenState = function (open, needFocus) {
    var props = _this2.props,
        state = _this2.state;

    if (state.open === open) {
      _this2.maybeFocus(open, needFocus);
      return;
    }
    var nextState = {
      open: open,
      backfillValue: undefined
    };
    // clear search input value when open is false in singleMode.
    if (!open && Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props) && props.showSearch) {
      _this2.setInputValue('', false);
    }
    if (!open) {
      _this2.maybeFocus(open, needFocus);
    }
    _this2.setState(nextState, function () {
      if (open) {
        _this2.maybeFocus(open, needFocus);
      }
    });
  };

  this.setInputValue = function (inputValue) {
    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (inputValue !== _this2.state.inputValue) {
      _this2.setState({
        inputValue: inputValue
      }, _this2.forcePopupAlign);
      if (fireSearch) {
        _this2.props.onSearch(inputValue);
      }
    }
  };

  this.getValueByInput = function (string) {
    var _props2 = _this2.props,
        multiple = _props2.multiple,
        tokenSeparators = _props2.tokenSeparators;

    var nextValue = _this2.state.value;
    var hasNewValue = false;
    Object(__WEBPACK_IMPORTED_MODULE_15__util__["r" /* splitBySeparators */])(string, tokenSeparators).forEach(function (label) {
      var selectedValue = [label];
      if (multiple) {
        var value = _this2.getValueByLabel(label);
        if (value && Object(__WEBPACK_IMPORTED_MODULE_15__util__["e" /* findIndexInValueBySingleValue */])(nextValue, value) === -1) {
          nextValue = nextValue.concat(value);
          hasNewValue = true;
          _this2.fireSelect(value);
        }
      } else {
        // tag
        if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["e" /* findIndexInValueBySingleValue */])(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;
          _this2.fireSelect(label);
        }
      }
    });
    return hasNewValue ? nextValue : undefined;
  };

  this.getRealOpenState = function () {
    var open = _this2.state.open;
    var options = _this2._options || [];
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(_this2.props) || !_this2.props.showSearch) {
      if (open && !options.length) {
        open = false;
      }
    }
    return open;
  };

  this.handleBackfill = function (item) {
    if (!_this2.props.backfill || !(Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(_this2.props) || Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(_this2.props))) {
      return;
    }

    var key = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(item);

    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["l" /* isCombobox */])(_this2.props)) {
      _this2.setInputValue(key, false);
    }

    _this2.setState({
      value: [key],
      backfillValue: key
    });
  };

  this.filterOption = function (input, child) {
    var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_15__util__["c" /* defaultFilterFn */];
    var value = _this2.state.value;

    var lastValue = value[value.length - 1];
    if (!input || lastValue && lastValue === _this2.state.backfillValue) {
      return true;
    }
    var filterFn = _this2.props.filterOption;
    if ('filterOption' in _this2.props) {
      if (_this2.props.filterOption === true) {
        filterFn = defaultFilter;
      }
    } else {
      filterFn = defaultFilter;
    }

    if (!filterFn) {
      return true;
    } else if (typeof filterFn === 'function') {
      return filterFn.call(_this2, input, child);
    } else if (child.props.disabled) {
      return false;
    }
    return true;
  };

  this.timeoutFocus = function () {
    if (_this2.focusTimer) {
      _this2.clearFocusTime();
    }
    _this2.focusTimer = setTimeout(function () {
      _this2.props.onFocus();
    }, 10);
  };

  this.clearFocusTime = function () {
    if (_this2.focusTimer) {
      clearTimeout(_this2.focusTimer);
      _this2.focusTimer = null;
    }
  };

  this.clearBlurTime = function () {
    if (_this2.blurTimer) {
      clearTimeout(_this2.blurTimer);
      _this2.blurTimer = null;
    }
  };

  this.updateFocusClassName = function () {
    var rootRef = _this2.rootRef,
        props = _this2.props;
    // avoid setState and its side effect

    if (_this2._focused) {
      __WEBPACK_IMPORTED_MODULE_11_component_classes___default()(rootRef).add(props.prefixCls + '-focused');
    } else {
      __WEBPACK_IMPORTED_MODULE_11_component_classes___default()(rootRef).remove(props.prefixCls + '-focused');
    }
  };

  this.maybeFocus = function (open, needFocus) {
    if (needFocus || open) {
      var input = _this2.getInputDOMNode();
      var _document = document,
          activeElement = _document.activeElement;

      if (input && (open || Object(__WEBPACK_IMPORTED_MODULE_15__util__["n" /* isMultipleOrTagsOrCombobox */])(_this2.props))) {
        if (activeElement !== input) {
          input.focus();
          _this2._focused = true;
        }
      } else {
        if (activeElement !== _this2.selectionRef) {
          _this2.selectionRef.focus();
          _this2._focused = true;
        }
      }
    }
  };

  this.removeSelected = function (selectedKey, e) {
    var props = _this2.props;
    if (props.disabled || _this2.isChildDisabled(selectedKey)) {
      return;
    }

    // Do not trigger Trigger popup
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }

    var value = _this2.state.value.filter(function (singleValue) {
      return singleValue !== selectedKey;
    });
    var canMultiple = Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props);

    if (canMultiple) {
      var event = selectedKey;
      if (props.labelInValue) {
        event = {
          key: selectedKey,
          label: _this2.getLabelBySingleValue(selectedKey)
        };
      }
      props.onDeselect(event, _this2.getOptionBySingleValue(selectedKey));
    }
    _this2.fireChange(value);
  };

  this.openIfHasChildren = function () {
    var props = _this2.props;
    if (__WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.count(props.children) || Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props)) {
      _this2.setOpenState(true);
    }
  };

  this.fireSelect = function (value) {
    _this2.props.onSelect(_this2.getVLBySingleValue(value), _this2.getOptionBySingleValue(value));
  };

  this.fireChange = function (value) {
    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      }, _this2.forcePopupAlign);
    }
    var vls = _this2.getVLForOnChange(value);
    var options = _this2.getOptionsBySingleValue(value);
    props.onChange(vls, Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(_this2.props) ? options : options[0]);
  };

  this.isChildDisabled = function (key) {
    return Object(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_Children_toArray__["a" /* default */])(_this2.props.children).some(function (child) {
      var childValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(child);
      return childValue === key && child.props && child.props.disabled;
    });
  };

  this.forcePopupAlign = function () {
    _this2.selectTriggerRef.triggerRef.forcePopupAlign();
  };

  this.renderFilterOptions = function () {
    var inputValue = _this2.state.inputValue;
    var _props3 = _this2.props,
        children = _props3.children,
        tags = _props3.tags,
        filterOption = _props3.filterOption,
        notFoundContent = _props3.notFoundContent;

    var menuItems = [];
    var childrenKeys = [];
    var options = _this2.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);
    if (tags) {
      // tags value must be string
      var value = _this2.state.value;
      value = value.filter(function (singleValue) {
        return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
      });
      value.forEach(function (singleValue) {
        var key = singleValue;
        var menuItem = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"],
          {
            style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
            role: 'option',
            attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
            value: key,
            key: key
          },
          key
        );
        options.push(menuItem);
        menuItems.push(menuItem);
      });
      if (inputValue) {
        var notFindInputItem = menuItems.every(function (option) {
          // this.filterOption return true has two meaning,
          // 1, some one exists after filtering
          // 2, filterOption is set to false
          // condition 2 does not mean the option has same value with inputValue
          var filterFn = function filterFn() {
            return Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(option) === inputValue;
          };
          if (filterOption !== false) {
            return !_this2.filterOption.call(_this2, inputValue, option, filterFn);
          }
          return !filterFn();
        });
        if (notFindInputItem) {
          options.unshift(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"],
            {
              style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
              role: 'option',
              attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
              value: inputValue,
              key: inputValue
            },
            inputValue
          ));
        }
      }
    }

    if (!options.length && notFoundContent) {
      options = [__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"],
        {
          style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
          attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
          disabled: true,
          role: 'option',
          value: 'NOT_FOUND',
          key: 'NOT_FOUND'
        },
        notFoundContent
      )];
    }
    return options;
  };

  this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
    var sel = [];
    var props = _this2.props;
    var inputValue = _this2.state.inputValue;

    var tags = props.tags;
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      if (child.type.isSelectOptGroup) {
        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);
        if (innerItems.length) {
          var label = child.props.label;
          var key = child.key;
          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          }
          sel.push(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_rc_menu__["ItemGroup"],
            { key: key, title: label },
            innerItems
          ));
        }
        return;
      }

      __WEBPACK_IMPORTED_MODULE_13_warning___default()(child.type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + (child.type.name || child.type.displayName || child.type) + '`.'));

      var childValue = Object(__WEBPACK_IMPORTED_MODULE_15__util__["j" /* getValuePropValue */])(child);

      Object(__WEBPACK_IMPORTED_MODULE_15__util__["u" /* validateOptionValue */])(childValue, _this2.props);

      if (_this2.filterOption(inputValue, child)) {
        var menuItem = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_rc_menu__["Item"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */],
          attribute: __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */],
          value: childValue,
          key: childValue,
          role: 'option'
        }, child.props));
        sel.push(menuItem);
        menuItems.push(menuItem);
      }

      if (tags) {
        childrenKeys.push(childValue);
      }
    });

    return sel;
  };

  this.renderTopControlNode = function () {
    var _state2 = _this2.state,
        value = _state2.value,
        open = _state2.open,
        inputValue = _state2.inputValue;

    var props = _this2.props;
    var choiceTransitionName = props.choiceTransitionName,
        prefixCls = props.prefixCls,
        maxTagTextLength = props.maxTagTextLength,
        maxTagCount = props.maxTagCount,
        maxTagPlaceholder = props.maxTagPlaceholder,
        showSearch = props.showSearch;

    var className = prefixCls + '-selection__rendered';
    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
    var innerNode = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["o" /* isSingleMode */])(props)) {
      var selectedValue = null;
      if (value.length) {
        var showSelectedValue = false;
        var opacity = 1;
        if (!showSearch) {
          showSelectedValue = true;
        } else {
          if (open) {
            showSelectedValue = !inputValue;
            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }
        }
        var singleValue = value[0];

        var _getOptionInfoBySingl3 = _this2.getOptionInfoBySingleValue(singleValue),
            label = _getOptionInfoBySingl3.label,
            title = _getOptionInfoBySingl3.title;

        selectedValue = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          {
            key: 'value',
            className: prefixCls + '-selection-selected-value',
            title: Object(__WEBPACK_IMPORTED_MODULE_15__util__["t" /* toTitle */])(title || label),
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          },
          label
        );
      }
      if (!showSearch) {
        innerNode = [selectedValue];
      } else {
        innerNode = [selectedValue, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          {
            className: prefixCls + '-search ' + prefixCls + '-search--inline',
            key: 'input',
            style: {
              display: open ? 'block' : 'none'
            }
          },
          _this2.getInputElement()
        )];
      }
    } else {
      var selectedValueNodes = [];
      var limitedCountValue = value;
      var maxTagPlaceholderEl = void 0;
      if (maxTagCount !== undefined && value.length > maxTagCount) {
        limitedCountValue = limitedCountValue.slice(0, maxTagCount);
        var omittedValues = _this2.getVLForOnChange(value.slice(maxTagCount, value.length));
        var content = '+ ' + (value.length - maxTagCount) + ' ...';
        if (maxTagPlaceholder) {
          content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
        }
        maxTagPlaceholderEl = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'li',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
          }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
            onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
            className: prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled',
            key: 'maxTagPlaceholder',
            title: Object(__WEBPACK_IMPORTED_MODULE_15__util__["t" /* toTitle */])(content)
          }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { className: prefixCls + '-selection__choice__content' },
            content
          )
        );
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props)) {
        selectedValueNodes = limitedCountValue.map(function (singleValue) {
          var info = _this2.getOptionInfoBySingleValue(singleValue);
          var content = info.label;
          var title = info.title || content;
          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
            content = content.slice(0, maxTagTextLength) + '...';
          }
          var disabled = _this2.isChildDisabled(singleValue);
          var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'li',
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              style: __WEBPACK_IMPORTED_MODULE_15__util__["b" /* UNSELECTABLE_STYLE */]
            }, __WEBPACK_IMPORTED_MODULE_15__util__["a" /* UNSELECTABLE_ATTRIBUTE */], {
              onMouseDown: __WEBPACK_IMPORTED_MODULE_15__util__["p" /* preventDefaultEvent */],
              className: choiceClassName,
              key: singleValue,
              title: Object(__WEBPACK_IMPORTED_MODULE_15__util__["t" /* toTitle */])(title)
            }),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: prefixCls + '-selection__choice__content' },
              content
            ),
            disabled ? null : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('span', {
              className: prefixCls + '-selection__choice__remove',
              onClick: function onClick(event) {
                _this2.removeSelected(singleValue, event);
              }
            })
          );
        });
      }
      if (maxTagPlaceholderEl) {
        selectedValueNodes.push(maxTagPlaceholderEl);
      }
      selectedValueNodes.push(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'li',
        {
          className: prefixCls + '-search ' + prefixCls + '-search--inline',
          key: '__input'
        },
        _this2.getInputElement()
      ));

      if (Object(__WEBPACK_IMPORTED_MODULE_15__util__["m" /* isMultipleOrTags */])(props) && choiceTransitionName) {
        innerNode = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_rc_animate__["default"],
          {
            onLeave: _this2.onChoiceAnimationLeave,
            component: 'ul',
            transitionName: choiceTransitionName
          },
          selectedValueNodes
        );
      } else {
        innerNode = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'ul',
          null,
          selectedValueNodes
        );
      }
    }
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: className, ref: _this2.saveTopCtrlRef },
      _this2.getPlaceholderElement(),
      innerNode
    );
  };
};

Select.displayName = 'Select';

Object(__WEBPACK_IMPORTED_MODULE_6_react_lifecycles_compat__["polyfill"])(Select);

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ "./node_modules/rc-select/es/SelectTrigger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_trigger__ = __webpack_require__("./node_modules/rc-trigger/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DropdownMenu__ = __webpack_require__("./node_modules/rc-select/es/DropdownMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/rc-select/es/util.js");













__WEBPACK_IMPORTED_MODULE_5_rc_trigger__["a" /* default */].displayName = 'Trigger';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, SelectTrigger);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.saveDropdownMenuRef = Object(__WEBPACK_IMPORTED_MODULE_11__util__["q" /* saveRef */])(_this, 'dropdownMenuRef');
    _this.saveTriggerRef = Object(__WEBPACK_IMPORTED_MODULE_11__util__["q" /* saveRef */])(_this, 'triggerRef');

    _this.state = {
      dropdownWidth: null
    };
    return _this;
  }

  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.render = function render() {
    var _popupClassName;

    var _props = this.props,
        onPopupFocus = _props.onPopupFocus,
        props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['onPopupFocus']);

    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign,
        disabled = props.disabled,
        showSearch = props.showSearch,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, _popupClassName[dropdownClassName] = !!dropdownClassName, _popupClassName[dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single')] = 1, _popupClassName);
    var popupElement = this.getDropdownElement({
      menuItems: props.options,
      onPopupFocus: onPopupFocus,
      multiple: multiple,
      inputValue: inputValue,
      visible: visible
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if (Object(__WEBPACK_IMPORTED_MODULE_11__util__["o" /* isSingleMode */])(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.state.dropdownWidth) {
      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
    }

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_rc_trigger__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: __WEBPACK_IMPORTED_MODULE_8_classnames___default()(popupClassName),
        popupStyle: popupStyle
      }),
      props.children
    );
  };

  return SelectTrigger;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

SelectTrigger.propTypes = {
  onPopupFocus: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  onPopupScroll: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  dropdownMatchSelectWidth: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  dropdownAlign: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  visible: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  showSearch: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  dropdownClassName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  multiple: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,
  inputValue: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  filterOption: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  options: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  prefixCls: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  popupClassName: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.any,
  showAction: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string)
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.setDropdownWidth = function () {
    var width = __WEBPACK_IMPORTED_MODULE_10_react_dom___default.a.findDOMNode(_this2).offsetWidth;
    if (width !== _this2.state.dropdownWidth) {
      _this2.setState({ dropdownWidth: width });
    }
  };

  this.getInnerMenu = function () {
    return _this2.dropdownMenuRef && _this2.dropdownMenuRef.menuRef;
  };

  this.getPopupDOMNode = function () {
    return _this2.triggerRef.getPopupDomNode();
  };

  this.getDropdownElement = function (newProps) {
    var props = _this2.props;
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__DropdownMenu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      ref: _this2.saveDropdownMenuRef
    }, newProps, {
      prefixCls: _this2.getDropdownPrefixCls(),
      onMenuSelect: props.onMenuSelect,
      onMenuDeselect: props.onMenuDeselect,
      onPopupScroll: props.onPopupScroll,
      value: props.value,
      backfillValue: props.backfillValue,
      firstActiveValue: props.firstActiveValue,
      defaultActiveFirstOption: props.defaultActiveFirstOption,
      dropdownMenuStyle: props.dropdownMenuStyle
    }));
  };

  this.getDropdownTransitionName = function () {
    var props = _this2.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = _this2.getDropdownPrefixCls() + '-' + props.animation;
    }
    return transitionName;
  };

  this.getDropdownPrefixCls = function () {
    return _this2.props.prefixCls + '-dropdown';
  };
};

/* harmony default export */ __webpack_exports__["a"] = (SelectTrigger);


SelectTrigger.displayName = 'SelectTrigger';

/***/ }),

/***/ "./node_modules/rc-select/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select__ = __webpack_require__("./node_modules/rc-select/es/Select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Option__ = __webpack_require__("./node_modules/rc-select/es/Option.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PropTypes__ = __webpack_require__("./node_modules/rc-select/es/PropTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OptGroup__ = __webpack_require__("./node_modules/rc-select/es/OptGroup.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return __WEBPACK_IMPORTED_MODULE_1__Option__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return __WEBPACK_IMPORTED_MODULE_3__OptGroup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPropTypes", function() { return __WEBPACK_IMPORTED_MODULE_2__PropTypes__["a"]; });




__WEBPACK_IMPORTED_MODULE_0__Select__["a" /* default */].Option = __WEBPACK_IMPORTED_MODULE_1__Option__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Select__["a" /* default */].OptGroup = __WEBPACK_IMPORTED_MODULE_3__OptGroup__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Select__["a" /* default */]);

/***/ }),

/***/ "./node_modules/rc-select/es/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["t"] = toTitle;
/* harmony export (immutable) */ __webpack_exports__["j"] = getValuePropValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = getPropValue;
/* unused harmony export isMultiple */
/* harmony export (immutable) */ __webpack_exports__["l"] = isCombobox;
/* harmony export (immutable) */ __webpack_exports__["m"] = isMultipleOrTags;
/* harmony export (immutable) */ __webpack_exports__["n"] = isMultipleOrTagsOrCombobox;
/* harmony export (immutable) */ __webpack_exports__["o"] = isSingleMode;
/* harmony export (immutable) */ __webpack_exports__["s"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["g"] = getMapKey;
/* harmony export (immutable) */ __webpack_exports__["p"] = preventDefaultEvent;
/* harmony export (immutable) */ __webpack_exports__["e"] = findIndexInValueBySingleValue;
/* harmony export (immutable) */ __webpack_exports__["f"] = getLabelFromPropsValue;
/* harmony export (immutable) */ __webpack_exports__["i"] = getSelectKeys;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNSELECTABLE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UNSELECTABLE_ATTRIBUTE; });
/* harmony export (immutable) */ __webpack_exports__["d"] = findFirstMenuItem;
/* harmony export (immutable) */ __webpack_exports__["k"] = includesSeparators;
/* harmony export (immutable) */ __webpack_exports__["r"] = splitBySeparators;
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultFilterFn;
/* harmony export (immutable) */ __webpack_exports__["u"] = validateOptionValue;
/* harmony export (immutable) */ __webpack_exports__["q"] = saveRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }
  return null;
}

function getValuePropValue(child) {
  if (!child) {
    return null;
  }

  var props = child.props;
  if ('value' in props) {
    return props.value;
  }
  if (child.key) {
    return child.key;
  }
  if (child.type && child.type.isSelectOptGroup && props.label) {
    return props.label;
  }
  throw new Error('Need at least a key or a value or a label (only for OptGroup) for ' + child);
}

function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }
  return child.props[prop];
}

function isMultiple(props) {
  return props.multiple;
}

function isCombobox(props) {
  return props.combobox;
}

function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}

function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}

function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}

function toArray(value) {
  var ret = value;
  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }
  return ret;
}

function getMapKey(value) {
  return typeof value + '-' + value;
}

function preventDefaultEvent(e) {
  e.preventDefault();
}

function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;
  for (var i = 0; i < value.length; i++) {
    if (value[i] === singleValue) {
      index = i;
      break;
    }
  }
  return index;
}

function getLabelFromPropsValue(value, key) {
  var label = void 0;
  value = toArray(value);
  for (var i = 0; i < value.length; i++) {
    if (value[i].key === key) {
      label = value[i].label;
      break;
    }
  }
  return label;
}

function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }
  var selectedKeys = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(menuItems, function (item) {
    if (item.type.isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;
      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}

var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};

function findFirstMenuItem(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.type.isMenuItemGroup) {
      var found = findFirstMenuItem(child.props.children);
      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }
  return null;
}

function includesSeparators(string, separators) {
  for (var i = 0; i < separators.length; ++i) {
    if (string.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }
  return false;
}

function splitBySeparators(string, separators) {
  var reg = new RegExp('[' + separators.join() + ']');
  return string.split(reg).filter(function (token) {
    return token;
  });
}

function defaultFilterFn(input, child) {
  if (child.props.disabled) {
    return false;
  }
  var value = toArray(getPropValue(child, this.props.optionFilterProp)).join('');
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}

function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }
  if (typeof value !== 'string') {
    throw new Error('Invalid `value` of type `' + typeof value + '` supplied to Option, ' + 'expected `string` when `tags/combobox` is `true`.');
  }
}

function saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}

/***/ }),

/***/ "./node_modules/rc-select/node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/rc-table/es/BaseTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ColGroup__ = __webpack_require__("./node_modules/rc-table/es/ColGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TableHeader__ = __webpack_require__("./node_modules/rc-table/es/TableHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TableRow__ = __webpack_require__("./node_modules/rc-table/es/TableRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ExpandableRow__ = __webpack_require__("./node_modules/rc-table/es/ExpandableRow.js");












var BaseTable = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(BaseTable, _React$Component);

  function BaseTable() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BaseTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleRowHover = function (isHover, key) {
      _this.props.store.setState({
        currentHoverKey: isHover ? key : null
      });
    }, _this.renderRows = function (renderData, indent) {
      var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var table = _this.context.table;
      var columnManager = table.columnManager,
          components = table.components;
      var _table$props = table.props,
          prefixCls = _table$props.prefixCls,
          childrenColumnName = _table$props.childrenColumnName,
          rowClassName = _table$props.rowClassName,
          rowRef = _table$props.rowRef,
          onRowClick = _table$props.onRowClick,
          onRowDoubleClick = _table$props.onRowDoubleClick,
          onRowContextMenu = _table$props.onRowContextMenu,
          onRowMouseEnter = _table$props.onRowMouseEnter,
          onRowMouseLeave = _table$props.onRowMouseLeave,
          onRow = _table$props.onRow;
      var _this$props = _this.props,
          getRowKey = _this$props.getRowKey,
          fixed = _this$props.fixed,
          expander = _this$props.expander,
          isAnyColumnsFixed = _this$props.isAnyColumnsFixed;


      var rows = [];

      var _loop = function _loop(i) {
        var record = renderData[i];
        var key = getRowKey(record, i);
        var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);

        var onHoverProps = {};
        if (columnManager.isAnyColumnsFixed()) {
          onHoverProps.onHover = _this.handleRowHover;
        }

        var leafColumns = void 0;
        if (fixed === 'left') {
          leafColumns = columnManager.leftLeafColumns();
        } else if (fixed === 'right') {
          leafColumns = columnManager.rightLeafColumns();
        } else {
          leafColumns = columnManager.leafColumns();
        }

        var rowPrefixCls = prefixCls + '-row';

        var row = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__ExpandableRow__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, expander.props, {
            fixed: fixed,
            index: i,
            prefixCls: rowPrefixCls,
            record: record,
            key: key,
            rowKey: key,
            onRowClick: onRowClick,
            needIndentSpaced: expander.needIndentSpaced,
            onExpandedChange: expander.handleExpandChange
          }),
          function (expandableRow) {
            return (// eslint-disable-line
              __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TableRow__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                fixed: fixed,
                indent: indent,
                className: className,
                record: record,
                index: i,
                prefixCls: rowPrefixCls,
                childrenColumnName: childrenColumnName,
                columns: leafColumns,
                onRow: onRow,
                onRowDoubleClick: onRowDoubleClick,
                onRowContextMenu: onRowContextMenu,
                onRowMouseEnter: onRowMouseEnter,
                onRowMouseLeave: onRowMouseLeave
              }, onHoverProps, {
                rowKey: key,
                ancestorKeys: ancestorKeys,
                ref: rowRef(record, i, indent),
                components: components,
                isAnyColumnsFixed: isAnyColumnsFixed
              }, expandableRow))
            );
          }
        );

        rows.push(row);

        expander.renderRows(_this.renderRows, rows, record, i, indent, fixed, key, ancestorKeys);
      };

      for (var i = 0; i < renderData.length; i++) {
        _loop(i);
      }
      return rows;
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  BaseTable.prototype.render = function render() {
    var table = this.context.table;
    var components = table.components;
    var _table$props2 = table.props,
        prefixCls = _table$props2.prefixCls,
        scroll = _table$props2.scroll,
        data = _table$props2.data,
        getBodyWrapper = _table$props2.getBodyWrapper;
    var _props = this.props,
        expander = _props.expander,
        tableClassName = _props.tableClassName,
        hasHead = _props.hasHead,
        hasBody = _props.hasBody,
        fixed = _props.fixed,
        columns = _props.columns;

    var tableStyle = {};

    if (!fixed && scroll.x) {
      // not set width, then use content fixed width
      if (scroll.x === true) {
        tableStyle.tableLayout = 'fixed';
      } else {
        tableStyle.width = scroll.x;
      }
    }

    var Table = hasBody ? components.table : 'table';
    var BodyWrapper = components.body.wrapper;

    var body = void 0;
    if (hasBody) {
      body = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        BodyWrapper,
        { className: prefixCls + '-tbody' },
        this.renderRows(data, 0)
      );
      if (getBodyWrapper) {
        body = getBodyWrapper(body);
      }
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      Table,
      { className: tableClassName, style: tableStyle, key: 'table' },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ColGroup__["a" /* default */], { columns: columns, fixed: fixed }),
      hasHead && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TableHeader__["a" /* default */], { expander: expander, columns: columns, fixed: fixed }),
      body
    );
  };

  return BaseTable;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

BaseTable.propTypes = {
  fixed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool]),
  columns: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array.isRequired,
  tableClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
  hasHead: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool.isRequired,
  hasBody: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool.isRequired,
  store: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  expander: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  getRowKey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  isAnyColumnsFixed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
BaseTable.contextTypes = {
  table: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_mini_store__["connect"])()(BaseTable));

/***/ }),

/***/ "./node_modules/rc-table/es/BodyTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BodyTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./node_modules/rc-table/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BaseTable__ = __webpack_require__("./node_modules/rc-table/es/BaseTable.js");






function BodyTable(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      scroll = _table$props.scroll;
  var columns = props.columns,
      fixed = props.fixed,
      tableClassName = props.tableClassName,
      getRowKey = props.getRowKey,
      handleBodyScroll = props.handleBodyScroll,
      handleWheel = props.handleWheel,
      expander = props.expander,
      isAnyColumnsFixed = props.isAnyColumnsFixed;
  var saveRef = table.saveRef;
  var useFixedHeader = table.props.useFixedHeader;

  var bodyStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, table.props.bodyStyle);
  var innerBodyStyle = {};

  if (scroll.x || fixed) {
    bodyStyle.overflowX = bodyStyle.overflowX || 'scroll';
    // Fix weired webkit render bug
    // https://github.com/ant-design/ant-design/issues/7783
    bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';
  }

  if (scroll.y) {
    // maxHeight will make fixed-Table scrolling not working
    // so we only set maxHeight to body-Table here
    if (fixed) {
      innerBodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
      innerBodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
    } else {
      bodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
    }
    bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
    useFixedHeader = true;

    // Add negative margin bottom for scroll bar overflow bug
    var scrollbarWidth = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* measureScrollbar */])();
    if (scrollbarWidth > 0 && fixed) {
      bodyStyle.marginBottom = '-' + scrollbarWidth + 'px';
      bodyStyle.paddingBottom = '0px';
    }
  }

  var baseTable = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BaseTable__["a" /* default */], {
    tableClassName: tableClassName,
    hasHead: !useFixedHeader,
    hasBody: true,
    fixed: fixed,
    columns: columns,
    expander: expander,
    getRowKey: getRowKey,
    isAnyColumnsFixed: isAnyColumnsFixed
  });

  if (fixed && columns.length) {
    var refName = void 0;
    if (columns[0].fixed === 'left' || columns[0].fixed === true) {
      refName = 'fixedColumnsBodyLeft';
    } else if (columns[0].fixed === 'right') {
      refName = 'fixedColumnsBodyRight';
    }
    delete bodyStyle.overflowX;
    delete bodyStyle.overflowY;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { key: 'bodyTable', className: prefixCls + '-body-outer', style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, bodyStyle) },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: prefixCls + '-body-inner',
          style: innerBodyStyle,
          ref: saveRef(refName),
          onWheel: handleWheel,
          onScroll: handleBodyScroll
        },
        baseTable
      )
    );
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      key: 'bodyTable',
      className: prefixCls + '-body',
      style: bodyStyle,
      ref: saveRef('bodyTable'),
      onWheel: handleWheel,
      onScroll: handleBodyScroll
    },
    baseTable
  );
}

BodyTable.propTypes = {
  fixed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool]),
  columns: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
  tableClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  handleWheel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  handleBodyScroll: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  getRowKey: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  expander: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  isAnyColumnsFixed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};

BodyTable.contextTypes = {
  table: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
};

/***/ }),

/***/ "./node_modules/rc-table/es/ColGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ColGroup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



function ColGroup(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      expandIconAsCell = _table$props.expandIconAsCell;
  var fixed = props.fixed;


  var cols = [];

  if (expandIconAsCell && fixed !== 'right') {
    cols.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('col', { className: prefixCls + '-expand-icon-col', key: 'rc-table-expand-icon-col' }));
  }

  var leafColumns = void 0;

  if (fixed === 'left') {
    leafColumns = table.columnManager.leftLeafColumns();
  } else if (fixed === 'right') {
    leafColumns = table.columnManager.rightLeafColumns();
  } else {
    leafColumns = table.columnManager.leafColumns();
  }
  cols = cols.concat(leafColumns.map(function (c) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('col', { key: c.key || c.dataIndex, style: { width: c.width, minWidth: c.width } });
  }));

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'colgroup',
    null,
    cols
  );
}

ColGroup.propTypes = {
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

ColGroup.contextTypes = {
  table: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

/***/ }),

/***/ "./node_modules/rc-table/es/Column.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


function Column() {}

Column.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  colSpan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  title: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node,
  dataIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  width: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string]),
  fixed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([true, 'left', 'right']),
  render: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onCellClick: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onCell: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onHeaderCell: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (Column);

/***/ }),

/***/ "./node_modules/rc-table/es/ColumnGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);






var ColumnGroup = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ColumnGroup, _Component);

  function ColumnGroup() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ColumnGroup);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  return ColumnGroup;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

ColumnGroup.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node
};
ColumnGroup.isTableColumnGroup = true;
/* harmony default export */ __webpack_exports__["a"] = (ColumnGroup);

/***/ }),

/***/ "./node_modules/rc-table/es/ColumnManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);




var ColumnManager = function () {
  function ColumnManager(columns, elements) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ColumnManager);

    this._cached = {};

    this.columns = columns || this.normalize(elements);
  }

  ColumnManager.prototype.isAnyColumnsFixed = function isAnyColumnsFixed() {
    var _this = this;

    return this._cache('isAnyColumnsFixed', function () {
      return _this.columns.some(function (column) {
        return !!column.fixed;
      });
    });
  };

  ColumnManager.prototype.isAnyColumnsLeftFixed = function isAnyColumnsLeftFixed() {
    var _this2 = this;

    return this._cache('isAnyColumnsLeftFixed', function () {
      return _this2.columns.some(function (column) {
        return column.fixed === 'left' || column.fixed === true;
      });
    });
  };

  ColumnManager.prototype.isAnyColumnsRightFixed = function isAnyColumnsRightFixed() {
    var _this3 = this;

    return this._cache('isAnyColumnsRightFixed', function () {
      return _this3.columns.some(function (column) {
        return column.fixed === 'right';
      });
    });
  };

  ColumnManager.prototype.leftColumns = function leftColumns() {
    var _this4 = this;

    return this._cache('leftColumns', function () {
      return _this4.groupedColumns().filter(function (column) {
        return column.fixed === 'left' || column.fixed === true;
      });
    });
  };

  ColumnManager.prototype.rightColumns = function rightColumns() {
    var _this5 = this;

    return this._cache('rightColumns', function () {
      return _this5.groupedColumns().filter(function (column) {
        return column.fixed === 'right';
      });
    });
  };

  ColumnManager.prototype.leafColumns = function leafColumns() {
    var _this6 = this;

    return this._cache('leafColumns', function () {
      return _this6._leafColumns(_this6.columns);
    });
  };

  ColumnManager.prototype.leftLeafColumns = function leftLeafColumns() {
    var _this7 = this;

    return this._cache('leftLeafColumns', function () {
      return _this7._leafColumns(_this7.leftColumns());
    });
  };

  ColumnManager.prototype.rightLeafColumns = function rightLeafColumns() {
    var _this8 = this;

    return this._cache('rightLeafColumns', function () {
      return _this8._leafColumns(_this8.rightColumns());
    });
  };

  // add appropriate rowspan and colspan to column


  ColumnManager.prototype.groupedColumns = function groupedColumns() {
    var _this9 = this;

    return this._cache('groupedColumns', function () {
      var _groupColumns = function _groupColumns(columns) {
        var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var parentColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        // track how many rows we got
        rows[currentRow] = rows[currentRow] || [];
        var grouped = [];
        var setRowSpan = function setRowSpan(column) {
          var rowSpan = rows.length - currentRow;
          if (column && !column.children && // parent columns are supposed to be one row
          rowSpan > 1 && (!column.rowSpan || column.rowSpan < rowSpan)) {
            column.rowSpan = rowSpan;
          }
        };
        columns.forEach(function (column, index) {
          var newColumn = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, column);
          rows[currentRow].push(newColumn);
          parentColumn.colSpan = parentColumn.colSpan || 0;
          if (newColumn.children && newColumn.children.length > 0) {
            newColumn.children = _groupColumns(newColumn.children, currentRow + 1, newColumn, rows);
            parentColumn.colSpan += newColumn.colSpan;
          } else {
            parentColumn.colSpan++;
          }
          // update rowspan to all same row columns
          for (var i = 0; i < rows[currentRow].length - 1; ++i) {
            setRowSpan(rows[currentRow][i]);
          }
          // last column, update rowspan immediately
          if (index + 1 === columns.length) {
            setRowSpan(newColumn);
          }
          grouped.push(newColumn);
        });
        return grouped;
      };
      return _groupColumns(_this9.columns);
    });
  };

  ColumnManager.prototype.normalize = function normalize(elements) {
    var _this10 = this;

    var columns = [];
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.forEach(elements, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_2_react___default.a.isValidElement(element)) {
        return;
      }
      var column = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, element.props);
      if (element.key) {
        column.key = element.key;
      }
      if (element.type.isTableColumnGroup) {
        column.children = _this10.normalize(column.children);
      }
      columns.push(column);
    });
    return columns;
  };

  ColumnManager.prototype.reset = function reset(columns, elements) {
    this.columns = columns || this.normalize(elements);
    this._cached = {};
  };

  ColumnManager.prototype._cache = function _cache(name, fn) {
    if (name in this._cached) {
      return this._cached[name];
    }
    this._cached[name] = fn();
    return this._cached[name];
  };

  ColumnManager.prototype._leafColumns = function _leafColumns(columns) {
    var _this11 = this;

    var leafColumns = [];
    columns.forEach(function (column) {
      if (!column.children) {
        leafColumns.push(column);
      } else {
        leafColumns.push.apply(leafColumns, _this11._leafColumns(column.children));
      }
    });
    return leafColumns;
  };

  return ColumnManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (ColumnManager);

/***/ }),

/***/ "./node_modules/rc-table/es/ExpandIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shallowequal__ = __webpack_require__("./node_modules/shallowequal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shallowequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_shallowequal__);







var ExpandIcon = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ExpandIcon, _React$Component);

  function ExpandIcon() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ExpandIcon);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  ExpandIcon.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_5_shallowequal___default()(nextProps, this.props);
  };

  ExpandIcon.prototype.render = function render() {
    var _props = this.props,
        expandable = _props.expandable,
        prefixCls = _props.prefixCls,
        onExpand = _props.onExpand,
        needIndentSpaced = _props.needIndentSpaced,
        expanded = _props.expanded,
        record = _props.record;

    if (expandable) {
      var expandClassName = expanded ? 'expanded' : 'collapsed';
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', {
        className: prefixCls + '-expand-icon ' + prefixCls + '-' + expandClassName,
        onClick: function onClick(e) {
          return onExpand(record, e);
        }
      });
    } else if (needIndentSpaced) {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('span', { className: prefixCls + '-expand-icon ' + prefixCls + '-spaced' });
    }
    return null;
  };

  return ExpandIcon;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

ExpandIcon.propTypes = {
  record: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  expandable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
  expanded: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  needIndentSpaced: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  onExpand: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (ExpandIcon);

/***/ }),

/***/ "./node_modules/rc-table/es/ExpandableRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ExpandIcon__ = __webpack_require__("./node_modules/rc-table/es/ExpandIcon.js");








var ExpandableRow = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ExpandableRow, _React$Component);

  function ExpandableRow() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ExpandableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.hasExpandIcon = function (columnIndex) {
      var expandRowByClick = _this.props.expandRowByClick;

      return !_this.expandIconAsCell && !expandRowByClick && columnIndex === _this.expandIconColumnIndex;
    }, _this.handleExpandChange = function (record, event) {
      var _this$props = _this.props,
          onExpandedChange = _this$props.onExpandedChange,
          expanded = _this$props.expanded,
          rowKey = _this$props.rowKey;

      if (_this.expandable) {
        onExpandedChange(!expanded, record, event, rowKey);
      }
    }, _this.handleRowClick = function (record, index, event) {
      var _this$props2 = _this.props,
          expandRowByClick = _this$props2.expandRowByClick,
          onRowClick = _this$props2.onRowClick;

      if (expandRowByClick) {
        _this.handleExpandChange(record, event);
      }
      if (onRowClick) {
        onRowClick(record, index, event);
      }
    }, _this.renderExpandIcon = function () {
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          expanded = _this$props3.expanded,
          record = _this$props3.record,
          needIndentSpaced = _this$props3.needIndentSpaced;


      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ExpandIcon__["a" /* default */], {
        expandable: _this.expandable,
        prefixCls: prefixCls,
        onExpand: _this.handleExpandChange,
        needIndentSpaced: needIndentSpaced,
        expanded: expanded,
        record: record
      });
    }, _this.renderExpandIconCell = function (cells) {
      if (!_this.expandIconAsCell) {
        return;
      }
      var prefixCls = _this.props.prefixCls;


      cells.push(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'td',
        { className: prefixCls + '-expand-icon-cell', key: 'rc-table-expand-icon-cell' },
        _this.renderExpandIcon()
      ));
    }, _temp), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  ExpandableRow.prototype.componentWillUnmount = function componentWillUnmount() {
    this.handleDestroy();
  };

  ExpandableRow.prototype.handleDestroy = function handleDestroy() {
    var _props = this.props,
        onExpandedChange = _props.onExpandedChange,
        rowKey = _props.rowKey,
        record = _props.record;

    if (this.expandable) {
      onExpandedChange(false, record, null, rowKey, true);
    }
  };

  ExpandableRow.prototype.render = function render() {
    var _props2 = this.props,
        childrenColumnName = _props2.childrenColumnName,
        expandedRowRender = _props2.expandedRowRender,
        indentSize = _props2.indentSize,
        record = _props2.record,
        fixed = _props2.fixed;


    this.expandIconAsCell = fixed !== 'right' ? this.props.expandIconAsCell : false;
    this.expandIconColumnIndex = fixed !== 'right' ? this.props.expandIconColumnIndex : -1;
    var childrenData = record[childrenColumnName];
    this.expandable = !!(childrenData || expandedRowRender);

    var expandableRowProps = {
      indentSize: indentSize,
      onRowClick: this.handleRowClick,
      hasExpandIcon: this.hasExpandIcon,
      renderExpandIcon: this.renderExpandIcon,
      renderExpandIconCell: this.renderExpandIconCell
    };

    return this.props.children(expandableRowProps);
  };

  return ExpandableRow;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

ExpandableRow.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string.isRequired,
  rowKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number]).isRequired,
  fixed: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool]),
  record: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  indentSize: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  needIndentSpaced: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired,
  expandRowByClick: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  expanded: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired,
  expandIconAsCell: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  expandIconColumnIndex: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  childrenColumnName: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  expandedRowRender: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  onExpandedChange: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired,
  onRowClick: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_mini_store__["connect"])(function (_ref, _ref2) {
  var expandedRowKeys = _ref.expandedRowKeys;
  var rowKey = _ref2.rowKey;
  return {
    expanded: !!~expandedRowKeys.indexOf(rowKey)
  };
})(ExpandableRow));

/***/ }),

/***/ "./node_modules/rc-table/es/ExpandableTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TableRow__ = __webpack_require__("./node_modules/rc-table/es/TableRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__("./node_modules/rc-table/es/utils.js");











var ExpandableTable = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(ExpandableTable, _React$Component);

  function ExpandableTable(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ExpandableTable);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var data = props.data,
        childrenColumnName = props.childrenColumnName,
        defaultExpandAllRows = props.defaultExpandAllRows,
        expandedRowKeys = props.expandedRowKeys,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
        getRowKey = props.getRowKey;


    var finnalExpandedRowKeys = [];
    var rows = [].concat(data);

    if (defaultExpandAllRows) {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        finnalExpandedRowKeys.push(getRowKey(row, i));
        rows = rows.concat(row[childrenColumnName] || []);
      }
    } else {
      finnalExpandedRowKeys = expandedRowKeys || defaultExpandedRowKeys;
    }

    _this.columnManager = props.columnManager;
    _this.store = props.store;

    _this.store.setState({
      expandedRowsHeight: {},
      expandedRowKeys: finnalExpandedRowKeys
    });
    return _this;
  }

  ExpandableTable.prototype.componentDidUpdate = function componentDidUpdate() {
    if ('expandedRowKeys' in this.props) {
      this.store.setState({
        expandedRowKeys: this.props.expandedRowKeys
      });
    }
  };

  ExpandableTable.prototype.renderExpandedRow = function renderExpandedRow(record, index, _render, className, ancestorKeys, indent, fixed) {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        expandIconAsCell = _props.expandIconAsCell,
        indentSize = _props.indentSize;

    var colCount = void 0;
    if (fixed === 'left') {
      colCount = this.columnManager.leftLeafColumns().length;
    } else if (fixed === 'right') {
      colCount = this.columnManager.rightLeafColumns().length;
    } else {
      colCount = this.columnManager.leafColumns().length;
    }
    var columns = [{
      key: 'extra-row',
      render: function render() {
        return {
          props: {
            colSpan: colCount
          },
          children: fixed !== 'right' ? _render(record, index, indent) : '&nbsp;'
        };
      }
    }];
    if (expandIconAsCell && fixed !== 'right') {
      columns.unshift({
        key: 'expand-icon-placeholder',
        render: function render() {
          return null;
        }
      });
    }
    var parentKey = ancestorKeys[ancestorKeys.length - 1];
    var rowKey = parentKey + '-extra-row';
    var components = {
      body: {
        row: 'tr',
        cell: 'td'
      }
    };

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TableRow__["a" /* default */], {
      key: rowKey,
      columns: columns,
      className: className,
      rowKey: rowKey,
      ancestorKeys: ancestorKeys,
      prefixCls: prefixCls + '-expanded-row',
      indentSize: indentSize,
      indent: indent,
      fixed: fixed,
      components: components,
      expandedRow: true
    });
  };

  ExpandableTable.prototype.render = function render() {
    var _props2 = this.props,
        data = _props2.data,
        childrenColumnName = _props2.childrenColumnName,
        children = _props2.children;

    var needIndentSpaced = data.some(function (record) {
      return record[childrenColumnName];
    });

    return children({
      props: this.props,
      needIndentSpaced: needIndentSpaced,
      renderRows: this.renderRows,
      handleExpandChange: this.handleExpandChange,
      renderExpandIndentCell: this.renderExpandIndentCell
    });
  };

  return ExpandableTable;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ExpandableTable.propTypes = {
  expandIconAsCell: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  expandedRowKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
  expandedRowClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  defaultExpandAllRows: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  defaultExpandedRowKeys: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
  expandIconColumnIndex: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  expandedRowRender: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  childrenColumnName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  indentSize: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  onExpand: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onExpandedRowsChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  columnManager: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  store: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired,
  prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired,
  data: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired,
  getRowKey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired
};
ExpandableTable.defaultProps = {
  expandIconAsCell: false,
  expandedRowClassName: function expandedRowClassName() {
    return '';
  },
  expandIconColumnIndex: 0,
  defaultExpandAllRows: false,
  defaultExpandedRowKeys: [],
  childrenColumnName: 'children',
  indentSize: 15,
  onExpand: function onExpand() {},
  onExpandedRowsChange: function onExpandedRowsChange() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleExpandChange = function (expanded, record, event, rowKey) {
    var destroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    var _props3 = _this2.props,
        onExpandedRowsChange = _props3.onExpandedRowsChange,
        onExpand = _props3.onExpand;

    var _store$getState = _this2.store.getState(),
        expandedRowKeys = _store$getState.expandedRowKeys;

    if (expanded) {
      // row was expaned
      expandedRowKeys = [].concat(expandedRowKeys, [rowKey]);
    } else {
      // row was collapse
      var expandedRowIndex = expandedRowKeys.indexOf(rowKey);
      if (expandedRowIndex !== -1) {
        expandedRowKeys = Object(__WEBPACK_IMPORTED_MODULE_9__utils__["c" /* remove */])(expandedRowKeys, rowKey);
      }
    }

    if (!_this2.props.expandedRowKeys) {
      _this2.store.setState({ expandedRowKeys: expandedRowKeys });
    }

    onExpandedRowsChange(expandedRowKeys);
    if (!destroy) {
      onExpand(expanded, record);
    }
  };

  this.renderExpandIndentCell = function (rows, fixed) {
    var _props4 = _this2.props,
        prefixCls = _props4.prefixCls,
        expandIconAsCell = _props4.expandIconAsCell;

    if (!expandIconAsCell || fixed === 'right' || !rows.length) {
      return;
    }

    var iconColumn = {
      key: 'rc-table-expand-icon-cell',
      className: prefixCls + '-expand-icon-th',
      title: '',
      rowSpan: rows.length
    };

    rows[0].unshift(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, iconColumn, { column: iconColumn }));
  };

  this.renderRows = function (renderRows, rows, record, index, indent, fixed, parentKey, ancestorKeys) {
    var _props5 = _this2.props,
        expandedRowClassName = _props5.expandedRowClassName,
        expandedRowRender = _props5.expandedRowRender,
        childrenColumnName = _props5.childrenColumnName;

    var childrenData = record[childrenColumnName];
    var nextAncestorKeys = [].concat(ancestorKeys, [parentKey]);
    var nextIndent = indent + 1;

    if (expandedRowRender) {
      rows.push(_this2.renderExpandedRow(record, index, expandedRowRender, expandedRowClassName(record, index, indent), nextAncestorKeys, nextIndent, fixed));
    }

    if (childrenData) {
      rows.push.apply(rows, renderRows(childrenData, nextIndent, nextAncestorKeys));
    }
  };
};

Object(__WEBPACK_IMPORTED_MODULE_7_react_lifecycles_compat__["polyfill"])(ExpandableTable);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_mini_store__["connect"])()(ExpandableTable));

/***/ }),

/***/ "./node_modules/rc-table/es/HeadTable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HeadTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./node_modules/rc-table/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BaseTable__ = __webpack_require__("./node_modules/rc-table/es/BaseTable.js");





function HeadTable(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      scroll = _table$props.scroll,
      showHeader = _table$props.showHeader;
  var columns = props.columns,
      fixed = props.fixed,
      tableClassName = props.tableClassName,
      handleBodyScrollLeft = props.handleBodyScrollLeft,
      expander = props.expander;
  var saveRef = table.saveRef;
  var useFixedHeader = table.props.useFixedHeader;

  var headStyle = {};

  if (scroll.y) {
    useFixedHeader = true;
    // Add negative margin bottom for scroll bar overflow bug
    var scrollbarWidth = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* measureScrollbar */])('horizontal');
    if (scrollbarWidth > 0 && !fixed) {
      headStyle.marginBottom = '-' + scrollbarWidth + 'px';
      headStyle.paddingBottom = '0px';
    }
  }

  if (!useFixedHeader || !showHeader) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      key: 'headTable',
      ref: fixed ? null : saveRef('headTable'),
      className: prefixCls + '-header',
      style: headStyle,
      onScroll: handleBodyScrollLeft
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__BaseTable__["a" /* default */], {
      tableClassName: tableClassName,
      hasHead: true,
      hasBody: false,
      fixed: fixed,
      columns: columns,
      expander: expander
    })
  );
}

HeadTable.propTypes = {
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  tableClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  handleBodyScrollLeft: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  expander: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

HeadTable.contextTypes = {
  table: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

/***/ }),

/***/ "./node_modules/rc-table/es/Table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal__ = __webpack_require__("./node_modules/shallowequal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shallowequal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_shallowequal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_addEventListener__ = __webpack_require__("./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_merge__ = __webpack_require__("./node_modules/lodash/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_component_classes__ = __webpack_require__("./node_modules/component-classes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_component_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_component_classes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__("./node_modules/rc-table/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ColumnManager__ = __webpack_require__("./node_modules/rc-table/es/ColumnManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__HeadTable__ = __webpack_require__("./node_modules/rc-table/es/HeadTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__BodyTable__ = __webpack_require__("./node_modules/rc-table/es/BodyTable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ExpandableTable__ = __webpack_require__("./node_modules/rc-table/es/ExpandableTable.js");


















var Table = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Table, _React$Component);

  Table.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.columns && nextProps.columns !== prevState.columns) {
      return {
        columns: nextProps.columns,
        children: null
      };
    } else if (nextProps.children !== prevState.children) {
      return {
        columns: null,
        children: nextProps.children
      };
    }
    return null;
  };

  function Table(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Table);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.state = {};

    _this.getRowKey = function (record, index) {
      var rowKey = _this.props.rowKey;
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      Object(__WEBPACK_IMPORTED_MODULE_12__utils__["d" /* warningOnce */])(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
      return key === undefined ? index : key;
    };

    _this.handleWindowResize = function () {
      _this.syncFixedTableRowHeight();
      _this.setScrollPositionClassName();
    };

    _this.syncFixedTableRowHeight = function () {
      var tableRect = _this.tableNode.getBoundingClientRect();
      // If tableNode's height less than 0, suppose it is hidden and don't recalculate rowHeight.
      // see: https://github.com/ant-design/ant-design/issues/4836
      if (tableRect.height !== undefined && tableRect.height <= 0) {
        return;
      }
      var prefixCls = _this.props.prefixCls;

      var headRows = _this.headTable ? _this.headTable.querySelectorAll('thead') : _this.bodyTable.querySelectorAll('thead');
      var bodyRows = _this.bodyTable.querySelectorAll('.' + prefixCls + '-row') || [];
      var fixedColumnsHeadRowsHeight = [].map.call(headRows, function (row) {
        return row.getBoundingClientRect().height || 'auto';
      });
      var fixedColumnsBodyRowsHeight = [].map.call(bodyRows, function (row) {
        return row.getBoundingClientRect().height || 'auto';
      });
      var state = _this.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_6_shallowequal___default()(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && __WEBPACK_IMPORTED_MODULE_6_shallowequal___default()(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
        return;
      }

      _this.store.setState({
        fixedColumnsHeadRowsHeight: fixedColumnsHeadRowsHeight,
        fixedColumnsBodyRowsHeight: fixedColumnsBodyRowsHeight
      });
    };

    _this.handleBodyScrollLeft = function (e) {
      // Fix https://github.com/ant-design/ant-design/issues/7635
      if (e.currentTarget !== e.target) {
        return;
      }
      var target = e.target;
      var _this$props$scroll = _this.props.scroll,
          scroll = _this$props$scroll === undefined ? {} : _this$props$scroll;
      var headTable = _this.headTable,
          bodyTable = _this.bodyTable;

      if (target.scrollLeft !== _this.lastScrollLeft && scroll.x) {
        if (target === bodyTable && headTable) {
          headTable.scrollLeft = target.scrollLeft;
        } else if (target === headTable && bodyTable) {
          bodyTable.scrollLeft = target.scrollLeft;
        }
        _this.setScrollPositionClassName();
      }
      // Remember last scrollLeft for scroll direction detecting.
      _this.lastScrollLeft = target.scrollLeft;
    };

    _this.handleBodyScrollTop = function (e) {
      var target = e.target;
      // Fix https://github.com/ant-design/ant-design/issues/9033
      if (e.currentTarget !== target) {
        return;
      }
      var _this$props$scroll2 = _this.props.scroll,
          scroll = _this$props$scroll2 === undefined ? {} : _this$props$scroll2;
      var headTable = _this.headTable,
          bodyTable = _this.bodyTable,
          fixedColumnsBodyLeft = _this.fixedColumnsBodyLeft,
          fixedColumnsBodyRight = _this.fixedColumnsBodyRight;

      if (target.scrollTop !== _this.lastScrollTop && scroll.y && target !== headTable) {
        var scrollTop = target.scrollTop;
        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
          fixedColumnsBodyLeft.scrollTop = scrollTop;
        }
        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
          fixedColumnsBodyRight.scrollTop = scrollTop;
        }
        if (bodyTable && target !== bodyTable) {
          bodyTable.scrollTop = scrollTop;
        }
      }
      // Remember last scrollTop for scroll direction detecting.
      _this.lastScrollTop = target.scrollTop;
    };

    _this.handleBodyScroll = function (e) {
      _this.handleBodyScrollLeft(e);
      _this.handleBodyScrollTop(e);
    };

    _this.handleWheel = function (event) {
      var _this$props$scroll3 = _this.props.scroll,
          scroll = _this$props$scroll3 === undefined ? {} : _this$props$scroll3;

      if (window.navigator.userAgent.match(/Trident\/7\./) && scroll.y) {
        event.preventDefault();
        var wd = event.deltaY;
        var target = event.target;
        var bodyTable = _this.bodyTable,
            fixedColumnsBodyLeft = _this.fixedColumnsBodyLeft,
            fixedColumnsBodyRight = _this.fixedColumnsBodyRight;

        var scrollTop = 0;

        if (_this.lastScrollTop) {
          scrollTop = _this.lastScrollTop + wd;
        } else {
          scrollTop = wd;
        }

        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
          fixedColumnsBodyLeft.scrollTop = scrollTop;
        }
        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
          fixedColumnsBodyRight.scrollTop = scrollTop;
        }
        if (bodyTable && target !== bodyTable) {
          bodyTable.scrollTop = scrollTop;
        }
      }
    };

    _this.saveRef = function (name) {
      return function (node) {
        _this[name] = node;
      };
    };

    ['onRowClick', 'onRowDoubleClick', 'onRowContextMenu', 'onRowMouseEnter', 'onRowMouseLeave'].forEach(function (name) {
      Object(__WEBPACK_IMPORTED_MODULE_12__utils__["d" /* warningOnce */])(props[name] === undefined, name + ' is deprecated, please use onRow instead.');
    });

    Object(__WEBPACK_IMPORTED_MODULE_12__utils__["d" /* warningOnce */])(props.getBodyWrapper === undefined, 'getBodyWrapper is deprecated, please use custom components instead.');

    _this.columnManager = new __WEBPACK_IMPORTED_MODULE_13__ColumnManager__["a" /* default */](props.columns, props.children);

    _this.store = Object(__WEBPACK_IMPORTED_MODULE_8_mini_store__["create"])({
      currentHoverKey: null,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: []
    });

    _this.setScrollPosition('left');

    _this.debouncedWindowResize = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["a" /* debounce */])(_this.handleWindowResize, 150);
    return _this;
  }

  Table.prototype.getChildContext = function getChildContext() {
    return {
      table: {
        props: this.props,
        columnManager: this.columnManager,
        saveRef: this.saveRef,
        components: __WEBPACK_IMPORTED_MODULE_9_lodash_merge___default()({
          table: 'table',
          header: {
            wrapper: 'thead',
            row: 'tr',
            cell: 'th'
          },
          body: {
            wrapper: 'tbody',
            row: 'tr',
            cell: 'td'
          }
        }, this.props.components)
      }
    };
  };

  Table.prototype.componentDidMount = function componentDidMount() {
    if (this.columnManager.isAnyColumnsFixed()) {
      this.handleWindowResize();
      this.resizeEvent = Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_addEventListener__["a" /* default */])(window, 'resize', this.debouncedWindowResize);
    }
  };

  Table.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.columnManager.isAnyColumnsFixed()) {
      this.handleWindowResize();
      if (!this.resizeEvent) {
        this.resizeEvent = Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_addEventListener__["a" /* default */])(window, 'resize', this.debouncedWindowResize);
      }
    }
    // when table changes to empty, reset scrollLeft
    if (prevProps.data.length > 0 && this.props.data.length === 0 && this.hasScrollX()) {
      this.resetScrollX();
    }
  };

  Table.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedWindowResize) {
      this.debouncedWindowResize.cancel();
    }
  };

  Table.prototype.setScrollPosition = function setScrollPosition(position) {
    this.scrollPosition = position;
    if (this.tableNode) {
      var prefixCls = this.props.prefixCls;

      if (position === 'both') {
        __WEBPACK_IMPORTED_MODULE_10_component_classes___default()(this.tableNode).remove(new RegExp('^' + prefixCls + '-scroll-position-.+$')).add(prefixCls + '-scroll-position-left').add(prefixCls + '-scroll-position-right');
      } else {
        __WEBPACK_IMPORTED_MODULE_10_component_classes___default()(this.tableNode).remove(new RegExp('^' + prefixCls + '-scroll-position-.+$')).add(prefixCls + '-scroll-position-' + position);
      }
    }
  };

  Table.prototype.setScrollPositionClassName = function setScrollPositionClassName() {
    var node = this.bodyTable;
    var scrollToLeft = node.scrollLeft === 0;
    var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;
    if (scrollToLeft && scrollToRight) {
      this.setScrollPosition('both');
    } else if (scrollToLeft) {
      this.setScrollPosition('left');
    } else if (scrollToRight) {
      this.setScrollPosition('right');
    } else if (this.scrollPosition !== 'middle') {
      this.setScrollPosition('middle');
    }
  };

  Table.prototype.resetScrollX = function resetScrollX() {
    if (this.headTable) {
      this.headTable.scrollLeft = 0;
    }
    if (this.bodyTable) {
      this.bodyTable.scrollLeft = 0;
    }
  };

  Table.prototype.hasScrollX = function hasScrollX() {
    var _props$scroll = this.props.scroll,
        scroll = _props$scroll === undefined ? {} : _props$scroll;

    return 'x' in scroll;
  };

  Table.prototype.renderMainTable = function renderMainTable() {
    var _props = this.props,
        scroll = _props.scroll,
        prefixCls = _props.prefixCls;

    var isAnyColumnsFixed = this.columnManager.isAnyColumnsFixed();
    var scrollable = isAnyColumnsFixed || scroll.x || scroll.y;

    var table = [this.renderTable({
      columns: this.columnManager.groupedColumns(),
      isAnyColumnsFixed: isAnyColumnsFixed
    }), this.renderEmptyText(), this.renderFooter()];

    return scrollable ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: prefixCls + '-scroll' },
      table
    ) : table;
  };

  Table.prototype.renderLeftFixedTable = function renderLeftFixedTable() {
    var prefixCls = this.props.prefixCls;


    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: prefixCls + '-fixed-left' },
      this.renderTable({
        columns: this.columnManager.leftColumns(),
        fixed: 'left'
      })
    );
  };

  Table.prototype.renderRightFixedTable = function renderRightFixedTable() {
    var prefixCls = this.props.prefixCls;


    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: prefixCls + '-fixed-right' },
      this.renderTable({
        columns: this.columnManager.rightColumns(),
        fixed: 'right'
      })
    );
  };

  Table.prototype.renderTable = function renderTable(options) {
    var columns = options.columns,
        fixed = options.fixed,
        isAnyColumnsFixed = options.isAnyColumnsFixed;
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        _props2$scroll = _props2.scroll,
        scroll = _props2$scroll === undefined ? {} : _props2$scroll;

    var tableClassName = scroll.x || fixed ? prefixCls + '-fixed' : '';

    var headTable = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__HeadTable__["a" /* default */], {
      key: 'head',
      columns: columns,
      fixed: fixed,
      tableClassName: tableClassName,
      handleBodyScrollLeft: this.handleBodyScrollLeft,
      expander: this.expander
    });

    var bodyTable = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__BodyTable__["a" /* default */], {
      key: 'body',
      columns: columns,
      fixed: fixed,
      tableClassName: tableClassName,
      getRowKey: this.getRowKey,
      handleWheel: this.handleWheel,
      handleBodyScroll: this.handleBodyScroll,
      expander: this.expander,
      isAnyColumnsFixed: isAnyColumnsFixed
    });

    return [headTable, bodyTable];
  };

  Table.prototype.renderTitle = function renderTitle() {
    var _props3 = this.props,
        title = _props3.title,
        prefixCls = _props3.prefixCls;

    return title ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: prefixCls + '-title', key: 'title' },
      title(this.props.data)
    ) : null;
  };

  Table.prototype.renderFooter = function renderFooter() {
    var _props4 = this.props,
        footer = _props4.footer,
        prefixCls = _props4.prefixCls;

    return footer ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: prefixCls + '-footer', key: 'footer' },
      footer(this.props.data)
    ) : null;
  };

  Table.prototype.renderEmptyText = function renderEmptyText() {
    var _props5 = this.props,
        emptyText = _props5.emptyText,
        prefixCls = _props5.prefixCls,
        data = _props5.data;

    if (data.length) {
      return null;
    }
    var emptyClassName = prefixCls + '-placeholder';
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      { className: emptyClassName, key: 'emptyText' },
      typeof emptyText === 'function' ? emptyText() : emptyText
    );
  };

  Table.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls;

    if (this.state.columns) {
      this.columnManager.reset(props.columns);
    } else if (this.state.children) {
      this.columnManager.reset(null, props.children);
    }

    var className = props.prefixCls;
    if (props.className) {
      className += ' ' + props.className;
    }
    if (props.useFixedHeader || props.scroll && props.scroll.y) {
      className += ' ' + prefixCls + '-fixed-header';
    }
    if (this.scrollPosition === 'both') {
      className += ' ' + prefixCls + '-scroll-position-left ' + prefixCls + '-scroll-position-right';
    } else {
      className += ' ' + prefixCls + '-scroll-position-' + this.scrollPosition;
    }
    var hasLeftFixed = this.columnManager.isAnyColumnsLeftFixed();
    var hasRightFixed = this.columnManager.isAnyColumnsRightFixed();

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_mini_store__["Provider"],
      { store: this.store },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_16__ExpandableTable__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { columnManager: this.columnManager, getRowKey: this.getRowKey }),
        function (expander) {
          _this2.expander = expander;
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            {
              ref: _this2.saveRef('tableNode'),
              className: className,
              style: props.style,
              id: props.id
            },
            _this2.renderTitle(),
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { className: prefixCls + '-content' },
              _this2.renderMainTable(),
              hasLeftFixed && _this2.renderLeftFixedTable(),
              hasRightFixed && _this2.renderRightFixedTable()
            )
          );
        }
      )
    );
  };

  return Table;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Table.propTypes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  data: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
  useFixedHeader: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  columns: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
  prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  bodyStyle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  rowKey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func]),
  rowClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func]),
  onRow: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onHeaderRow: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onRowClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onRowDoubleClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onRowContextMenu: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onRowMouseEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onRowMouseLeave: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  showHeader: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  id: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  footer: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  emptyText: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func]),
  scroll: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  rowRef: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  getBodyWrapper: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,
  components: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    table: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
    header: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
      wrapper: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
      row: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
      cell: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any
    }),
    body: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
      wrapper: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
      row: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
      cell: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any
    })
  })
}, __WEBPACK_IMPORTED_MODULE_16__ExpandableTable__["a" /* default */].PropTypes);
Table.childContextTypes = {
  table: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  components: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any
};
Table.defaultProps = {
  data: [],
  useFixedHeader: false,
  rowKey: 'key',
  rowClassName: function rowClassName() {
    return '';
  },
  onRow: function onRow() {},
  onHeaderRow: function onHeaderRow() {},

  prefixCls: 'rc-table',
  bodyStyle: {},
  style: {},
  showHeader: true,
  scroll: {},
  rowRef: function rowRef() {
    return null;
  },
  emptyText: function emptyText() {
    return 'No Data';
  }
};


Object(__WEBPACK_IMPORTED_MODULE_11_react_lifecycles_compat__["polyfill"])(Table);

/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),

/***/ "./node_modules/rc-table/es/TableCell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_get__ = __webpack_require__("./node_modules/lodash/get.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_get__);








function isInvalidRenderCellText(text) {
  return text && !__WEBPACK_IMPORTED_MODULE_4_react___default.a.isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
}

var TableCell = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(TableCell, _React$Component);

  function TableCell() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TableCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          record = _this$props.record,
          onCellClick = _this$props.column.onCellClick;

      if (onCellClick) {
        onCellClick(record, e);
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  TableCell.prototype.render = function render() {
    var _props = this.props,
        record = _props.record,
        indentSize = _props.indentSize,
        prefixCls = _props.prefixCls,
        indent = _props.indent,
        index = _props.index,
        expandIcon = _props.expandIcon,
        column = _props.column,
        BodyCell = _props.component;
    var dataIndex = column.dataIndex,
        render = column.render,
        _column$className = column.className,
        className = _column$className === undefined ? '' : _column$className;

    // We should return undefined if no dataIndex is specified, but in order to
    // be compatible with object-path's behavior, we return the record object instead.

    var text = void 0;
    if (typeof dataIndex === 'number') {
      text = __WEBPACK_IMPORTED_MODULE_6_lodash_get___default()(record, dataIndex);
    } else if (!dataIndex || dataIndex.length === 0) {
      text = record;
    } else {
      text = __WEBPACK_IMPORTED_MODULE_6_lodash_get___default()(record, dataIndex);
    }
    var tdProps = {};
    var colSpan = void 0;
    var rowSpan = void 0;

    if (render) {
      text = render(text, record, index);
      if (isInvalidRenderCellText(text)) {
        tdProps = text.props || tdProps;
        colSpan = tdProps.colSpan;
        rowSpan = tdProps.rowSpan;
        text = text.children;
      }
    }

    if (column.onCell) {
      tdProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, tdProps, column.onCell(record));
    }

    // Fix https://github.com/ant-design/ant-design/issues/1202
    if (isInvalidRenderCellText(text)) {
      text = null;
    }

    var indentText = expandIcon ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('span', {
      style: { paddingLeft: indentSize * indent + 'px' },
      className: prefixCls + '-indent indent-level-' + indent
    }) : null;

    if (rowSpan === 0 || colSpan === 0) {
      return null;
    }

    if (column.align) {
      tdProps.style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, tdProps.style, { textAlign: column.align });
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      BodyCell,
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: className, onClick: this.handleClick }, tdProps),
      indentText,
      expandIcon,
      text
    );
  };

  return TableCell;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

TableCell.propTypes = {
  record: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  index: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  indent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  indentSize: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  column: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  expandIcon: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,
  component: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (TableCell);

/***/ }),

/***/ "./node_modules/rc-table/es/TableHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TableHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TableHeaderRow__ = __webpack_require__("./node_modules/rc-table/es/TableHeaderRow.js");




function getHeaderRows(columns) {
  var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var rows = arguments[2];

  rows = rows || [];
  rows[currentRow] = rows[currentRow] || [];

  columns.forEach(function (column) {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }
    var cell = {
      key: column.key,
      className: column.className || '',
      children: column.title,
      column: column
    };
    if (column.children) {
      getHeaderRows(column.children, currentRow + 1, rows);
    }
    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }
    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }
    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(function (row) {
    return row.length > 0;
  });
}

function TableHeader(props, _ref) {
  var table = _ref.table;
  var components = table.components;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      showHeader = _table$props.showHeader,
      onHeaderRow = _table$props.onHeaderRow;
  var expander = props.expander,
      columns = props.columns,
      fixed = props.fixed;


  if (!showHeader) {
    return null;
  }

  var rows = getHeaderRows(columns);

  expander.renderExpandIndentCell(rows, fixed);

  var HeaderWrapper = components.header.wrapper;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    HeaderWrapper,
    { className: prefixCls + '-thead' },
    rows.map(function (row, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TableHeaderRow__["a" /* default */], {
        key: index,
        index: index,
        fixed: fixed,
        columns: columns,
        rows: rows,
        row: row,
        components: components,
        onHeaderRow: onHeaderRow
      });
    })
  );
}

TableHeader.propTypes = {
  fixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  expander: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onHeaderRow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

TableHeader.contextTypes = {
  table: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

/***/ }),

/***/ "./node_modules/rc-table/es/TableHeaderRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mini_store__);






function TableHeaderRow(_ref) {
  var row = _ref.row,
      index = _ref.index,
      height = _ref.height,
      components = _ref.components,
      onHeaderRow = _ref.onHeaderRow;

  var HeaderRow = components.header.row;
  var HeaderCell = components.header.cell;
  var rowProps = onHeaderRow(row.map(function (cell) {
    return cell.column;
  }), index);
  var customStyle = rowProps ? rowProps.style : {};
  var style = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ height: height }, customStyle);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    HeaderRow,
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rowProps, { style: style }),
    row.map(function (cell, i) {
      var column = cell.column,
          cellProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(cell, ['column']);

      var customProps = column.onHeaderCell ? column.onHeaderCell(column) : {};
      if (column.align) {
        customProps.style = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, customProps.style, { textAlign: column.align });
      }
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(HeaderCell, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, cellProps, customProps, { key: column.key || column.dataIndex || i }));
    })
  );
}

TableHeaderRow.propTypes = {
  row: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
  index: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
  height: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number]),
  components: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
  onHeaderRow: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
};

function getRowHeight(state, props) {
  var fixedColumnsHeadRowsHeight = state.fixedColumnsHeadRowsHeight;
  var columns = props.columns,
      rows = props.rows,
      fixed = props.fixed;

  var headerHeight = fixedColumnsHeadRowsHeight[0];

  if (!fixed) {
    return null;
  }

  if (headerHeight && columns) {
    if (headerHeight === 'auto') {
      return 'auto';
    }
    return headerHeight / rows.length;
  }
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_mini_store__["connect"])(function (state, props) {
  return {
    height: getRowHeight(state, props)
  };
})(TableHeaderRow));

/***/ }),

/***/ "./node_modules/rc-table/es/TableRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store__ = __webpack_require__("./node_modules/mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_lifecycles_compat__ = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TableCell__ = __webpack_require__("./node_modules/rc-table/es/TableCell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__("./node_modules/rc-table/es/utils.js");












var TableRow = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(TableRow, _React$Component);

  TableRow.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.visible || !prevState.visible && nextProps.visible) {
      return {
        shouldRender: true,
        visible: nextProps.visible
      };
    }
    return {
      visible: nextProps.visible
    };
  };

  function TableRow(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TableRow);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onRowClick = function (event) {
      var _this$props = _this.props,
          record = _this$props.record,
          index = _this$props.index,
          onRowClick = _this$props.onRowClick;

      if (onRowClick) {
        onRowClick(record, index, event);
      }
    };

    _this.onRowDoubleClick = function (event) {
      var _this$props2 = _this.props,
          record = _this$props2.record,
          index = _this$props2.index,
          onRowDoubleClick = _this$props2.onRowDoubleClick;

      if (onRowDoubleClick) {
        onRowDoubleClick(record, index, event);
      }
    };

    _this.onContextMenu = function (event) {
      var _this$props3 = _this.props,
          record = _this$props3.record,
          index = _this$props3.index,
          onRowContextMenu = _this$props3.onRowContextMenu;

      if (onRowContextMenu) {
        onRowContextMenu(record, index, event);
      }
    };

    _this.onMouseEnter = function (event) {
      var _this$props4 = _this.props,
          record = _this$props4.record,
          index = _this$props4.index,
          onRowMouseEnter = _this$props4.onRowMouseEnter,
          onHover = _this$props4.onHover,
          rowKey = _this$props4.rowKey;

      onHover(true, rowKey);
      if (onRowMouseEnter) {
        onRowMouseEnter(record, index, event);
      }
    };

    _this.onMouseLeave = function (event) {
      var _this$props5 = _this.props,
          record = _this$props5.record,
          index = _this$props5.index,
          onRowMouseLeave = _this$props5.onRowMouseLeave,
          onHover = _this$props5.onHover,
          rowKey = _this$props5.rowKey;

      onHover(false, rowKey);
      if (onRowMouseLeave) {
        onRowMouseLeave(record, index, event);
      }
    };

    _this.shouldRender = props.visible;

    _this.state = {};
    return _this;
  }

  TableRow.prototype.componentDidMount = function componentDidMount() {
    if (this.state.shouldRender) {
      this.saveRowRef();
    }
  };

  TableRow.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !!(this.props.visible || nextProps.visible);
  };

  TableRow.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.shouldRender && !this.rowRef) {
      this.saveRowRef();
    }
  };

  TableRow.prototype.setExpanedRowHeight = function setExpanedRowHeight() {
    var _extends2;

    var _props = this.props,
        store = _props.store,
        rowKey = _props.rowKey;

    var _store$getState = store.getState(),
        expandedRowsHeight = _store$getState.expandedRowsHeight;

    var height = this.rowRef.getBoundingClientRect().height;
    expandedRowsHeight = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, expandedRowsHeight, (_extends2 = {}, _extends2[rowKey] = height, _extends2));
    store.setState({ expandedRowsHeight: expandedRowsHeight });
  };

  TableRow.prototype.setRowHeight = function setRowHeight() {
    var _props2 = this.props,
        store = _props2.store,
        index = _props2.index;

    var fixedColumnsBodyRowsHeight = store.getState().fixedColumnsBodyRowsHeight.slice();
    var height = this.rowRef.getBoundingClientRect().height;
    fixedColumnsBodyRowsHeight[index] = height;
    store.setState({ fixedColumnsBodyRowsHeight: fixedColumnsBodyRowsHeight });
  };

  TableRow.prototype.getStyle = function getStyle() {
    var _props3 = this.props,
        height = _props3.height,
        visible = _props3.visible;


    if (height && height !== this.style.height) {
      this.style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.style, { height: height });
    }

    if (!visible && !this.style.display) {
      this.style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.style, { display: 'none' });
    }

    return this.style;
  };

  TableRow.prototype.saveRowRef = function saveRowRef() {
    this.rowRef = __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this);

    var _props4 = this.props,
        isAnyColumnsFixed = _props4.isAnyColumnsFixed,
        fixed = _props4.fixed,
        expandedRow = _props4.expandedRow,
        ancestorKeys = _props4.ancestorKeys;


    if (!isAnyColumnsFixed) {
      return;
    }

    if (!fixed && expandedRow) {
      this.setExpanedRowHeight();
    }

    if (!fixed && ancestorKeys.length >= 0) {
      this.setRowHeight();
    }
  };

  TableRow.prototype.render = function render() {
    if (!this.state.shouldRender) {
      return null;
    }

    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        columns = _props5.columns,
        record = _props5.record,
        index = _props5.index,
        onRow = _props5.onRow,
        indent = _props5.indent,
        indentSize = _props5.indentSize,
        hovered = _props5.hovered,
        height = _props5.height,
        visible = _props5.visible,
        components = _props5.components,
        hasExpandIcon = _props5.hasExpandIcon,
        renderExpandIcon = _props5.renderExpandIcon,
        renderExpandIconCell = _props5.renderExpandIconCell;


    var BodyRow = components.body.row;
    var BodyCell = components.body.cell;

    var className = this.props.className;


    if (hovered) {
      className += ' ' + prefixCls + '-hover';
    }

    var cells = [];

    renderExpandIconCell(cells);

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];

      Object(__WEBPACK_IMPORTED_MODULE_10__utils__["d" /* warningOnce */])(column.onCellClick === undefined, 'column[onCellClick] is deprecated, please use column[onCell] instead.');

      cells.push(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TableCell__["a" /* default */], {
        prefixCls: prefixCls,
        record: record,
        indentSize: indentSize,
        indent: indent,
        index: index,
        column: column,
        key: column.key || column.dataIndex,
        expandIcon: hasExpandIcon(i) && renderExpandIcon(),
        component: BodyCell
      }));
    }

    var rowClassName = (prefixCls + ' ' + className + ' ' + prefixCls + '-level-' + indent).trim();

    var rowProps = onRow(record, index);
    var customStyle = rowProps ? rowProps.style : {};
    var style = { height: height };

    if (!visible) {
      style.display = 'none';
    }

    style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, customStyle);

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      BodyRow,
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        onClick: this.onRowClick,
        onDoubleClick: this.onRowDoubleClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onContextMenu: this.onContextMenu,
        className: rowClassName
      }, rowProps, {
        style: style
      }),
      cells
    );
  };

  return TableRow;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

TableRow.propTypes = {
  onRow: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onRowClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onRowDoubleClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onRowContextMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onRowMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onRowMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  record: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  onHover: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  columns: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  height: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number]),
  index: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  rowKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number]).isRequired,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  indent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  indentSize: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  hasExpandIcon: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  hovered: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired,
  store: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  fixed: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),
  renderExpandIcon: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  renderExpandIconCell: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  components: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  expandedRow: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  isAnyColumnsFixed: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  ancestorKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired
};
TableRow.defaultProps = {
  onRow: function onRow() {},
  onHover: function onHover() {},
  hasExpandIcon: function hasExpandIcon() {},
  renderExpandIcon: function renderExpandIcon() {},
  renderExpandIconCell: function renderExpandIconCell() {}
};


function getRowHeight(state, props) {
  var expandedRowsHeight = state.expandedRowsHeight,
      fixedColumnsBodyRowsHeight = state.fixedColumnsBodyRowsHeight;
  var fixed = props.fixed,
      index = props.index,
      rowKey = props.rowKey;


  if (!fixed) {
    return null;
  }

  if (expandedRowsHeight[rowKey]) {
    return expandedRowsHeight[rowKey];
  }

  if (fixedColumnsBodyRowsHeight[index]) {
    return fixedColumnsBodyRowsHeight[index];
  }

  return null;
}

Object(__WEBPACK_IMPORTED_MODULE_8_react_lifecycles_compat__["polyfill"])(TableRow);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_mini_store__["connect"])(function (state, props) {
  var currentHoverKey = state.currentHoverKey,
      expandedRowKeys = state.expandedRowKeys;
  var rowKey = props.rowKey,
      ancestorKeys = props.ancestorKeys;

  var visible = ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
    return ~expandedRowKeys.indexOf(k);
  });

  return {
    visible: visible,
    hovered: currentHoverKey === rowKey,
    height: getRowHeight(state, props)
  };
})(TableRow));

/***/ }),

/***/ "./node_modules/rc-table/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table__ = __webpack_require__("./node_modules/rc-table/es/Table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Column__ = __webpack_require__("./node_modules/rc-table/es/Column.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColumnGroup__ = __webpack_require__("./node_modules/rc-table/es/ColumnGroup.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return __WEBPACK_IMPORTED_MODULE_1__Column__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__ColumnGroup__["a"]; });




__WEBPACK_IMPORTED_MODULE_0__Table__["a" /* default */].Column = __WEBPACK_IMPORTED_MODULE_1__Column__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__Table__["a" /* default */].ColumnGroup = __WEBPACK_IMPORTED_MODULE_2__ColumnGroup__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Table__["a" /* default */]);


/***/ }),

/***/ "./node_modules/rc-table/es/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = measureScrollbar;
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["d"] = warningOnce;
/* harmony export (immutable) */ __webpack_exports__["c"] = remove;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/rc-table/node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var scrollbarSize = void 0;

// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

function measureScrollbar() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vertical';

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0;
  }
  if (scrollbarSize) {
    return scrollbarSize;
  }
  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
  });
  document.body.appendChild(scrollDiv);
  var size = 0;
  if (direction === 'vertical') {
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  } else if (direction === 'horizontal') {
    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
  }

  document.body.removeChild(scrollDiv);
  scrollbarSize = size;
  return scrollbarSize;
}

function debounce(func, wait, immediate) {
  var timeout = void 0;
  function debounceFunc() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
  debounceFunc.cancel = function cancel() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounceFunc;
}

var warned = {};
function warningOnce(condition, format, args) {
  if (!warned[format]) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(condition, format, args);
    warned[format] = !condition;
  }
}

function remove(array, item) {
  var index = array.indexOf(item);
  var front = array.slice(0, index);
  var last = array.slice(index + 1, array.length);
  return front.concat(last);
}

/***/ }),

/***/ "./node_modules/rc-table/node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/rc-tooltip/es/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);






var Content = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Content, _React$Component);

  function Content() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Content);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      { className: prefixCls + '-inner', id: id },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Content.propTypes = {
  prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  overlay: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]).isRequired,
  id: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  trigger: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_trigger__ = __webpack_require__("./node_modules/rc-trigger/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__placements__ = __webpack_require__("./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Content__ = __webpack_require__("./node_modules/rc-tooltip/es/Content.js");











var Tooltip = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Content__["a" /* default */], {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_rc_trigger__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: __WEBPACK_IMPORTED_MODULE_8__placements__["a" /* placements */],
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Tooltip.propTypes = {
  trigger: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  defaultVisible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  placement: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  transitionName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object]),
  animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  onVisibleChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  afterVisibleChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  overlay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func]).isRequired,
  overlayStyle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  overlayClassName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  mouseEnterDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  mouseLeaveDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  getTooltipContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  destroyTooltipOnHide: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  align: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  arrowContent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  id: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


/* harmony default export */ __webpack_exports__["a"] = (Tooltip);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tooltip__ = __webpack_require__("./node_modules/rc-tooltip/es/Tooltip.js");


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Tooltip__["a" /* default */]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (placements);

/***/ }),

/***/ "./node_modules/rc-tooltip/lib/placements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ }),

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);







var LazyRenderBox = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LazyRenderBox);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('div', props);
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

LazyRenderBox.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  visible: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  hiddenClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};


/* harmony default export */ __webpack_exports__["a"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_align__ = __webpack_require__("./node_modules/rc-align/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_animate__ = __webpack_require__("./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PopupInner__ = __webpack_require__("./node_modules/rc-trigger/es/PopupInner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LazyRenderBox__ = __webpack_require__("./node_modules/rc-trigger/es/LazyRenderBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__("./node_modules/rc-trigger/es/utils.js");













var Popup = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Popup, _Component);

  function Popup(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Popup);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = __WEBPACK_IMPORTED_MODULE_11__utils__["c" /* saveRef */].bind(_this, 'popupInstance');
    _this.saveAlignRef = __WEBPACK_IMPORTED_MODULE_11__utils__["c" /* saveRef */].bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return __WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_rc_animate__["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_rc_align__["a" /* default */],
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__PopupInner__["a" /* default */],
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_rc_animate__["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_rc_align__["a" /* default */],
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__PopupInner__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__LazyRenderBox__["a" /* default */], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_rc_animate__["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

Popup.propTypes = {
  visible: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  style: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  getClassNameFromAlign: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onAlign: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  getRootDomNode: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  align: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  destroyPopupOnHide: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  stretch: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,
  point: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    pageX: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
    pageY: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number
  })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({ stretchChecked: false });
      }
      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LazyRenderBox__ = __webpack_require__("./node_modules/rc-trigger/es/LazyRenderBox.js");







var PopupInner = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(PopupInner, _Component);

  function PopupInner() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PopupInner);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__LazyRenderBox__["a" /* default */],
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

PopupInner.propTypes = {
  hiddenClassName: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any
};


/* harmony default export */ __webpack_exports__["a"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_contains__ = __webpack_require__("./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_util_es_Dom_addEventListener__ = __webpack_require__("./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Popup__ = __webpack_require__("./node_modules/rc-trigger/es/Popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__("./node_modules/rc-trigger/es/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_util_es_ContainerRender__ = __webpack_require__("./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rc_util_es_Portal__ = __webpack_require__("./node_modules/rc-util/es/Portal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_classnames__);















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!__WEBPACK_IMPORTED_MODULE_6_react_dom__["createPortal"];

var Trigger = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Trigger, _React$Component);

  function Trigger(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Trigger);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Object(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_Dom_addEventListener__["a" /* default */])(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Object(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_Dom_addEventListener__["a" /* default */])(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Object(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_Dom_addEventListener__["a" /* default */])(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Object(__WEBPACK_IMPORTED_MODULE_8_rc_util_es_Dom_addEventListener__["a" /* default */])(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* getAlignFromPlacement */])(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = __WEBPACK_IMPORTED_MODULE_13_classnames___default()(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_rc_util_es_ContainerRender__["a" /* default */],
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12_rc_util_es_Portal__["a" /* default */],
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Trigger.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  action: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string)]),
  showAction: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  hideAction: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  getPopupClassNameFromAlign: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  onPopupVisibleChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  afterPopupVisibleChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  popup: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func]).isRequired,
  popupStyle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  prefixCls: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  popupClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  popupPlacement: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  builtinPlacements: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  popupTransitionName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object]),
  popupAnimation: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  mouseEnterDelay: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  mouseLeaveDelay: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  zIndex: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  focusDelay: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  blurDelay: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  getPopupContainer: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  getDocument: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  forceRender: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  destroyPopupOnHide: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  mask: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  maskClosable: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  onPopupAlign: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  popupAlign: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  popupVisible: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  defaultPopupVisible: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  maskTransitionName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object]),
  maskAnimation: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  stretch: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  alignPoint: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool // Maybe we can support user pass position in the future
};
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_contains__["a" /* default */])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = Object(__WEBPACK_IMPORTED_MODULE_6_react_dom__["findDOMNode"])(_this5);
    var popupNode = _this5.getPopupDomNode();
    if (!Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_contains__["a" /* default */])(root, target) && !Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Dom_contains__["a" /* default */])(popupNode, target)) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_6_react_dom__["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* getAlignPopupClassName */])(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9__Popup__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(__WEBPACK_IMPORTED_MODULE_6_react_dom__["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Trigger);

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAlignFromPlacement;
/* harmony export (immutable) */ __webpack_exports__["b"] = getAlignPopupClassName;
/* harmony export (immutable) */ __webpack_exports__["c"] = saveRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Children/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function toArray(children) {
  var ret = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

/***/ }),

/***/ "./node_modules/rc-util/es/ContainerRender.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);








var ContainerRender = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ContainerRender.propTypes = {
  autoMount: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  autoDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  forceRender: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  parent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  getComponent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  getContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["a"] = (ContainerRender);

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEventListenerWrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener__ = __webpack_require__("./node_modules/add-dom-event-listener/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_batchedUpdates ? function run(e) {
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener___default()(target, eventType, callback);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/contains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);








var Portal = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Portal, _React$Component);

  function Portal() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Portal);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Portal.propTypes = {
  getContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node.isRequired,
  didUpdate: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ "./node_modules/rc-util/es/PureRenderMixin.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

var shallowEqual = __webpack_require__("./node_modules/rc-util/node_modules/shallowequal/modules/index.js");

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ "./node_modules/rc-util/es/createChainedFunction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createChainedFunction;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);
  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-util/node_modules/shallowequal/modules/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchKeys = __webpack_require__("./node_modules/lodash.keys/index.js");

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
        return !!ret;
    }

    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = fetchKeys(objA);
    var keysB = fetchKeys(objB);

    var len = keysA.length;
    if (len !== keysB.length) {
        return false;
    }

    compareContext = compareContext || null;

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < len; i++) {
        var key = keysA[i];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];

        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (_ret === false || _ret === void 0 && valueA !== valueB) {
            return false;
        }
    }

    return true;
};

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ })

})
//# sourceMappingURL=5.3be1da4a5b9fd3149432.hot-update.js.map