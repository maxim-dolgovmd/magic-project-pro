"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feed",{

/***/ "./src/components/statusOrder/statusOrder.tsx":
/*!****************************************************!*\
  !*** ./src/components/statusOrder/statusOrder.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 24px;\\n\\n  \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: #f2f2f3;\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 30px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: #00cccc;\\n  font-weight: 400;\\n  font-size: 28px;\\n  line-height: 24px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst ReadiOrder = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"statusOrder__ReadiOrder\",\n    componentId: \"sc-6e31234c-0\"\n})(_templateObject(), (props)=>{\n    return props.active && {\n        display: \"none\"\n    };\n});\n_c = ReadiOrder;\nconst TextStatus = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"statusOrder__TextStatus\",\n    componentId: \"sc-6e31234c-1\"\n})(_templateObject1());\n_c1 = TextStatus;\nconst ReadyStatus = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.withConfig({\n    displayName: \"statusOrder__ReadyStatus\",\n    componentId: \"sc-6e31234c-2\"\n})(_templateObject2());\n_c2 = ReadyStatus;\nconst StatusOrder = (props)=>{\n    var _props_order, _props_order_, _props_order___id;\n    console.log(props);\n    const array = props === null || props === void 0 ? void 0 : props.order;\n    const numberId = props === null || props === void 0 ? void 0 : (_props_order = props.order) === null || _props_order === void 0 ? void 0 : (_props_order_ = _props_order[0]) === null || _props_order_ === void 0 ? void 0 : (_props_order___id = _props_order_._id) === null || _props_order___id === void 0 ? void 0 : _props_order___id.slice(-4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ReadiOrder, {\n        active: !(props === null || props === void 0 ? void 0 : props.order),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextStatus, {\n                children: [\n                    props.status,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ReadyStatus, {\n                children: array === null || array === void 0 ? void 0 : array.map((obj)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {}, void 0, false, {\n                        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 23\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = StatusOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusOrder);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ReadiOrder\");\n$RefreshReg$(_c1, \"TextStatus\");\n$RefreshReg$(_c2, \"ReadyStatus\");\n$RefreshReg$(_c3, \"StatusOrder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGF0dXNPcmRlci9zdGF0dXNPcmRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNhO0FBZXZDLE1BQU1FLGFBQWFELHdFQUFVOzs7c0JBS3pCLENBQUNHLFFBQTBCO0lBQzNCLE9BQU9BLE1BQU1DLE1BQU0sSUFBSTtRQUNyQkMsU0FBUztJQUNYO0FBQ0Y7S0FUSUo7QUFZTixNQUFNSyxhQUFhTix3RUFBVTs7OztNQUF2Qk07QUFPTixNQUFNQyxjQUFjUCx1RUFBUzs7OztNQUF2Qk87QUFnQk4sTUFBTUUsY0FBeUMsQ0FBQ04sUUFBVTtRQUdyQ0E7SUFGakJPLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixNQUFNUyxRQUFRVCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9VLEtBQUs7SUFDMUIsTUFBTUMsV0FBV1gsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxlQUFBQSxNQUFPVSxLQUFLLGNBQVpWLDBCQUFBQSxLQUFBQSxJQUFBQSxpQkFBQUEsWUFBYyxDQUFDLEVBQUUseUNBQWpCQSxLQUFBQSxJQUFBQSxtQ0FBbUJZLGdEQUFuQlosS0FBQUEsSUFBQUEsa0JBQXdCYSxNQUFNLENBQUM7SUFDaEQscUJBQ0ksOERBQUNmO1FBQVdHLFFBQVEsQ0FBQ0QsQ0FBQUEsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPVSxLQUFLOzswQkFDN0IsOERBQUNQOztvQkFBWUgsTUFBTWMsTUFBTTtvQkFBQzs7Ozs7OzswQkFDMUIsOERBQUNWOzBCQUVLSyxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9NLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO29CQUNsQixxQkFDRSw4REFBQ0M7Ozs7O2dCQUVMOzs7Ozs7Ozs7Ozs7QUFLbEI7TUFsQk1YO0FBb0JOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0YXR1c09yZGVyL3N0YXR1c09yZGVyLnRzeD8yOTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElJbmdyZWRpZW50LCBTdGF0dXNUeXBlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9yZWR1eC9zbGljZXMvYWRkQ2FydFNsaWNlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgT3JkZXIge1xuICBfaWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgc3RhdHVzOiBTdGF0dXNUeXBlO1xuICBpbmdyZWRpZW50czogSUluZ3JlZGllbnRbXTtcbn1cblxudHlwZSBQcm9wc09yZGVyVHlwZSA9IHtcbiAgYWN0aXZlOiBhbnlcbn1cblxuY29uc3QgUmVhZGlPcmRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcblxuICAkeyhwcm9wczogUHJvcHNPcmRlclR5cGUpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuYWN0aXZlICYmIHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfX07XG5gO1xuXG5jb25zdCBUZXh0U3RhdHVzID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICNmMmYyZjM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG5gO1xuXG5jb25zdCBSZWFkeVN0YXR1cyA9IHN0eWxlZC51bGBcbiAgY29sb3I6ICMwMGNjY2M7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuYDtcblxuXG50eXBlIFN0YXR1c1R5cGVQcm9wcyA9IHtcbiAgb3JkZXI6IE9yZGVyW10sXG4gIHN0YXR1czogc3RyaW5nLFxufVxuXG5jb25zdCBTdGF0dXNPcmRlcjogUmVhY3QuRkM8U3RhdHVzVHlwZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIGNvbnN0IGFycmF5ID0gcHJvcHM/Lm9yZGVyXG4gICAgY29uc3QgbnVtYmVySWQgPSBwcm9wcz8ub3JkZXI/LlswXT8uX2lkPy5zbGljZSgtNClcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhZGlPcmRlciBhY3RpdmU9eyFwcm9wcz8ub3JkZXJ9PlxuICAgICAgICAgICAgPFRleHRTdGF0dXM+e3Byb3BzLnN0YXR1c306PC9UZXh0U3RhdHVzPlxuICAgICAgICAgICAgPFJlYWR5U3RhdHVzPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGFycmF5Py5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaT57fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9SZWFkeVN0YXR1cz5cbiAgICAgICAgPC9SZWFkaU9yZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzT3JkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJSZWFkaU9yZGVyIiwiZGl2IiwicHJvcHMiLCJhY3RpdmUiLCJkaXNwbGF5IiwiVGV4dFN0YXR1cyIsIlJlYWR5U3RhdHVzIiwidWwiLCJTdGF0dXNPcmRlciIsImNvbnNvbGUiLCJsb2ciLCJhcnJheSIsIm9yZGVyIiwibnVtYmVySWQiLCJfaWQiLCJzbGljZSIsInN0YXR1cyIsIm1hcCIsIm9iaiIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/statusOrder/statusOrder.tsx\n"));

/***/ })

});