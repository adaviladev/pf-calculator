import React from "react";
import ReactDOM from "react-dom";

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
(function () {
  "use strict";

  // Regular expressions and styles
  var isOperator = /[x/+-]/;
  var endsWithOperator = /[x+-/]$/;
  var endsWithNegativeSign = /\d[x/+-]{1}-$/;
  var clearStyle = {
    background: "#ac3939"
  };
  var operatorStyle = {
    background: "#666666"
  };
  var equalsStyle = {
    background: "#004466",
    position: "absolute",
    height: 130,
    bottom: 5
  };

  // Calculator component
  var Calculator = /*#__PURE__*/function (_React$Component) {
    function Calculator(props) {
      var _this;
      _classCallCheck(this, Calculator);
      _this = _callSuper(this, Calculator, [props]);
      _this.state = {
        currentVal: "0",
        prevVal: "0",
        formula: "",
        currentSign: "pos",
        lastClicked: "",
        evaluated: false
      };

      // Binding methods
      _this.maxDigitWarning = _this.maxDigitWarning.bind(_this);
      _this.handleEvaluate = _this.handleEvaluate.bind(_this);
      _this.initialize = _this.initialize.bind(_this);
      _this.handleDecimal = _this.handleDecimal.bind(_this);
      _this.handleNumbers = _this.handleNumbers.bind(_this);
      _this.handleOperators = _this.handleOperators.bind(_this);
      _this.handleKeyDown = _this.handleKeyDown.bind(_this);
      return _this;
    }
    _inherits(Calculator, _React$Component);
    return _createClass(Calculator, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Add event listener for key presses on the whole document
        document.addEventListener("keydown", this.handleKeyDown);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // Remove event listener when component unmounts
        document.removeEventListener("keydown", this.handleKeyDown);
      }

      // Handler for key down events
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(event) {
        // Define key mappings to button actions
        var keyMappings = {
          Escape: "AC",
          Delete: "AC",
          "/": "/",
          "*": "x",
          x: "x",
          "-": "-",
          "+": "+",
          Enter: "=",
          "=": "=",
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          ".": "."
        };
        var keyPressed = event.key;

        // Check if the key pressed has a corresponding action
        if (keyMappings[keyPressed]) {
          event.preventDefault(); // Prevent default action (like scrolling)

          // Simulate button click based on key pressed
          var value = keyMappings[keyPressed];
          var button = document.querySelector("button[value=\"".concat(value, "\"]"));
          if (button) {
            button.click(); // Trigger button click
          }
        }
      }

      // Method to handle max digit warning
    }, {
      key: "maxDigitWarning",
      value: function maxDigitWarning() {
        var _this2 = this;
        this.setState({
          currentVal: "Digit Limit Met",
          prevVal: this.state.currentVal
        });
        setTimeout(function () {
          return _this2.setState({
            currentVal: _this2.state.prevVal
          });
        }, 1000);
      }

      // Method to handle evaluation
    }, {
      key: "handleEvaluate",
      value: function handleEvaluate() {
        if (!this.state.currentVal.includes("Limit")) {
          var expression = this.state.formula;
          while (endsWithOperator.test(expression)) {
            expression = expression.slice(0, -1);
          }
          expression = expression.replace(/x/g, "*").replace(/--/g, "+").replace(/-/g, "-");
          var answer = Math.round(1e12 * eval(expression)) / 1e12;
          this.setState({
            currentVal: answer.toString(),
            formula: expression.replace(/\*/g, "⋅").replace(/-/g, "-").replace(/(x|\/|\+)-/, "$1-").replace(/^-/, "-") + "=" + answer,
            prevVal: answer,
            evaluated: true
          });
        }
      }

      // Method to handle operators
    }, {
      key: "handleOperators",
      value: function handleOperators(e) {
        if (!this.state.currentVal.includes("Limit")) {
          var operator = e.target.value;
          var _this$state = this.state,
            formula = _this$state.formula,
            prevVal = _this$state.prevVal,
            evaluated = _this$state.evaluated;
          this.setState({
            currentVal: operator,
            evaluated: false
          });
          if (evaluated) {
            this.setState({
              formula: prevVal + operator
            });
          } else if (endsWithOperator.test(formula)) {
            if (endsWithNegativeSign.test(formula)) {
              if (operator !== "-") {
                this.setState({
                  formula: prevVal + operator
                });
              }
            } else {
              this.setState({
                formula: (endsWithNegativeSign.test(formula + operator) ? formula : prevVal) + operator
              });
            }
          } else {
            this.setState({
              prevVal: formula,
              formula: formula + operator
            });
          }
        }
      }

      // Method to handle numbers
    }, {
      key: "handleNumbers",
      value: function handleNumbers(e) {
        if (!this.state.currentVal.includes("Limit")) {
          var _this$state2 = this.state,
            currentVal = _this$state2.currentVal,
            formula = _this$state2.formula,
            evaluated = _this$state2.evaluated;
          var number = e.target.value;
          this.setState({
            evaluated: false
          });
          if (currentVal.length > 21) {
            this.maxDigitWarning();
          } else if (evaluated) {
            this.setState({
              currentVal: number,
              formula: number !== "0" ? number : ""
            });
          } else {
            this.setState({
              currentVal: currentVal === "0" || isOperator.test(currentVal) ? number : currentVal + number,
              formula: currentVal === "0" && number === "0" ? formula === "" ? number : formula : /([^.0-9]0|^0)$/.test(formula) ? formula.slice(0, -1) + number : formula + number
            });
          }
        }
      }

      // Method to handle decimal point
    }, {
      key: "handleDecimal",
      value: function handleDecimal() {
        if (this.state.evaluated) {
          this.setState({
            currentVal: "0.",
            formula: "0.",
            evaluated: false
          });
        } else if (!this.state.currentVal.includes(".") && !this.state.currentVal.includes("Limit")) {
          this.setState({
            evaluated: false
          });
          if (this.state.currentVal.length > 21) {
            this.maxDigitWarning();
          } else if (endsWithOperator.test(this.state.formula) || this.state.currentVal === "0" && this.state.formula === "") {
            this.setState({
              currentVal: "0.",
              formula: this.state.formula + "0."
            });
          } else {
            this.setState({
              currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
              formula: this.state.formula + "."
            });
          }
        }
      }

      // Method to initialize calculator
    }, {
      key: "initialize",
      value: function initialize() {
        this.setState({
          currentVal: "0",
          prevVal: "0",
          formula: "",
          currentSign: "pos",
          lastClicked: "",
          evaluated: false
        });
      }

      // Rendering the calculator component
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "calculator"
        }, /*#__PURE__*/_react["default"].createElement(Formula, {
          formula: this.state.formula.replace(/x/g, "⋅")
        }), /*#__PURE__*/_react["default"].createElement(Output, {
          currentValue: this.state.currentVal
        }), /*#__PURE__*/_react["default"].createElement(Buttons, {
          decimal: this.handleDecimal,
          evaluate: this.handleEvaluate,
          initialize: this.initialize,
          numbers: this.handleNumbers,
          operators: this.handleOperators
        })));
      }
    }]);
  }(_react["default"].Component); // Formula component
  var Formula = function Formula(props) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "formulaScreen"
    }, props.formula);
  };

  // Output component
  var Output = function Output(props) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "outputScreen"
    }, props.currentValue);
  };

  // Buttons component
  var Buttons = function Buttons(props) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
      className: "jumbo",
      id: "clear",
      onClick: props.initialize,
      value: "AC"
    }, "AC"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "divide",
      onClick: props.operators,
      value: "/"
    }, "/"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "multiply",
      onClick: props.operators,
      value: "x"
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "seven",
      onClick: props.numbers,
      value: "7"
    }, "7"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "eight",
      onClick: props.numbers,
      value: "8"
    }, "8"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "nine",
      onClick: props.numbers,
      value: "9"
    }, "9"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "subtract",
      onClick: props.operators,
      value: "-"
    }, "-"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "four",
      onClick: props.numbers,
      value: "4"
    }, "4"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "five",
      onClick: props.numbers,
      value: "5"
    }, "5"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "six",
      onClick: props.numbers,
      value: "6"
    }, "6"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "add",
      onClick: props.operators,
      value: "+"
    }, "+"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "one",
      onClick: props.numbers,
      value: "1"
    }, "1"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "two",
      onClick: props.numbers,
      value: "2"
    }, "2"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "three",
      onClick: props.numbers,
      value: "3"
    }, "3"), /*#__PURE__*/_react["default"].createElement("button", {
      className: "jumbo",
      id: "zero",
      onClick: props.numbers,
      value: "0"
    }, "0"), /*#__PURE__*/_react["default"].createElement("button", {
      id: "decimal",
      onClick: props.decimal,
      value: "."
    }, "."), /*#__PURE__*/_react["default"].createElement("button", {
      id: "equals",
      onClick: props.evaluate,
      value: "=",
      style: equalsStyle
    }, "="));
  };

  // Render the Calculator component to the DOM

  document.addEventListener("DOMContentLoaded", function () {
    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Calculator, null), document.getElementById("app"));
  });
  console.log("Starting application...");
})();
