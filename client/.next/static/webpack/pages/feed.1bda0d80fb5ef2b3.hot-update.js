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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 24px;\\n\\n  \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: #f2f2f3;\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 30px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  color: #00cccc;\\n  font-weight: 400;\\n  font-size: 28px;\\n  line-height: 24px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst ReadiOrder = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"statusOrder__ReadiOrder\",\n    componentId: \"sc-6e56c07c-0\"\n})(_templateObject(), (props)=>{\n    return props.active && {\n        display: \"none\"\n    };\n});\n_c = ReadiOrder;\nconst TextStatus = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"statusOrder__TextStatus\",\n    componentId: \"sc-6e56c07c-1\"\n})(_templateObject1());\n_c1 = TextStatus;\nconst ReadyStatus = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.withConfig({\n    displayName: \"statusOrder__ReadyStatus\",\n    componentId: \"sc-6e56c07c-2\"\n})(_templateObject2());\n_c2 = ReadyStatus;\nconst StatusOrder = (props)=>{\n    var _props_order, _props_order_, _props_order___id;\n    console.log(props);\n    const array = props === null || props === void 0 ? void 0 : props.order;\n    const numberId = props === null || props === void 0 ? void 0 : (_props_order = props.order) === null || _props_order === void 0 ? void 0 : (_props_order_ = _props_order[0]) === null || _props_order_ === void 0 ? void 0 : (_props_order___id = _props_order_._id) === null || _props_order___id === void 0 ? void 0 : _props_order___id.slice(-4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ReadiOrder, {\n        active: !(props === null || props === void 0 ? void 0 : props.order),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextStatus, {\n                children: [\n                    props.status,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ReadyStatus, {}, void 0, false, {\n                fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/statusOrder/statusOrder.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_c3 = StatusOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusOrder);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ReadiOrder\");\n$RefreshReg$(_c1, \"TextStatus\");\n$RefreshReg$(_c2, \"ReadyStatus\");\n$RefreshReg$(_c3, \"StatusOrder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGF0dXNPcmRlci9zdGF0dXNPcmRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNhO0FBZXZDLE1BQU1FLGFBQWFELHdFQUFVOzs7c0JBS3pCLENBQUNHLFFBQTBCO0lBQzNCLE9BQU9BLE1BQU1DLE1BQU0sSUFBSTtRQUNyQkMsU0FBUztJQUNYO0FBQ0Y7S0FUSUo7QUFZTixNQUFNSyxhQUFhTix3RUFBVTs7OztNQUF2Qk07QUFPTixNQUFNQyxjQUFjUCx1RUFBUzs7OztNQUF2Qk87QUFnQk4sTUFBTUUsY0FBeUMsQ0FBQ04sUUFBVTtRQUdyQ0E7SUFGakJPLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixNQUFNUyxRQUFRVCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9VLEtBQUs7SUFDMUIsTUFBTUMsV0FBV1gsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxlQUFBQSxNQUFPVSxLQUFLLGNBQVpWLDBCQUFBQSxLQUFBQSxJQUFBQSxpQkFBQUEsWUFBYyxDQUFDLEVBQUUseUNBQWpCQSxLQUFBQSxJQUFBQSxtQ0FBbUJZLGdEQUFuQlosS0FBQUEsSUFBQUEsa0JBQXdCYSxNQUFNLENBQUM7SUFDaEQscUJBQ0ksOERBQUNmO1FBQVdHLFFBQVEsQ0FBQ0QsQ0FBQUEsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPVSxLQUFLOzswQkFDN0IsOERBQUNQOztvQkFBWUgsTUFBTWMsTUFBTTtvQkFBQzs7Ozs7OzswQkFDMUIsOERBQUNWOzs7Ozs7Ozs7OztBQUtiO01BWk1FO0FBY04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3RhdHVzT3JkZXIvc3RhdHVzT3JkZXIudHN4PzI5OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUluZ3JlZGllbnQsIFN0YXR1c1R5cGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3JlZHV4L3NsaWNlcy9hZGRDYXJ0U2xpY2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBPcmRlciB7XG4gIF9pZDogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBzdGF0dXM6IFN0YXR1c1R5cGU7XG4gIGluZ3JlZGllbnRzOiBJSW5ncmVkaWVudFtdO1xufVxuXG50eXBlIFByb3BzT3JkZXJUeXBlID0ge1xuICBhY3RpdmU6IGFueVxufVxuXG5jb25zdCBSZWFkaU9yZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuXG4gICR7KHByb3BzOiBQcm9wc09yZGVyVHlwZSkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5hY3RpdmUgJiYge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9fTtcbmA7XG5cbmNvbnN0IFRleHRTdGF0dXMgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2YyZjJmMztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbmA7XG5cbmNvbnN0IFJlYWR5U3RhdHVzID0gc3R5bGVkLnVsYFxuICBjb2xvcjogIzAwY2NjYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG5gO1xuXG5cbnR5cGUgU3RhdHVzVHlwZVByb3BzID0ge1xuICBvcmRlcjogT3JkZXJbXSxcbiAgc3RhdHVzOiBzdHJpbmcsXG59XG5cbmNvbnN0IFN0YXR1c09yZGVyOiBSZWFjdC5GQzxTdGF0dXNUeXBlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgY29uc3QgYXJyYXkgPSBwcm9wcz8ub3JkZXJcbiAgICBjb25zdCBudW1iZXJJZCA9IHByb3BzPy5vcmRlcj8uWzBdPy5faWQ/LnNsaWNlKC00KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFkaU9yZGVyIGFjdGl2ZT17IXByb3BzPy5vcmRlcn0+XG4gICAgICAgICAgICA8VGV4dFN0YXR1cz57cHJvcHMuc3RhdHVzfTo8L1RleHRTdGF0dXM+XG4gICAgICAgICAgICA8UmVhZHlTdGF0dXM+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1JlYWR5U3RhdHVzPlxuICAgICAgICA8L1JlYWRpT3JkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNPcmRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIlJlYWRpT3JkZXIiLCJkaXYiLCJwcm9wcyIsImFjdGl2ZSIsImRpc3BsYXkiLCJUZXh0U3RhdHVzIiwiUmVhZHlTdGF0dXMiLCJ1bCIsIlN0YXR1c09yZGVyIiwiY29uc29sZSIsImxvZyIsImFycmF5Iiwib3JkZXIiLCJudW1iZXJJZCIsIl9pZCIsInNsaWNlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/statusOrder/statusOrder.tsx\n"));

/***/ })

});