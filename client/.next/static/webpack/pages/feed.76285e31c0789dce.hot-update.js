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

/***/ "./src/components/button/popUpWindow.tsx":
/*!***********************************************!*\
  !*** ./src/components/button/popUpWindow.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: fixed;\\n    bottom: 10px;\\n    right: 20px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    padding: 12px 16px;\\n    border-radius: 24px;\\n    background-color: #61c358;\\n    color: #fff;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"popUpWindow__Box\",\n    componentId: \"sc-da9c00ab-0\"\n})(_templateObject());\n_c = Box;\nconst BlockWindow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"popUpWindow__BlockWindow\",\n    componentId: \"sc-da9c00ab-1\"\n})(_templateObject1());\n_c1 = BlockWindow;\nconst PopUpWindow = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BlockWindow, {\n            children: \"Статус заказа изменен\"\n        }, void 0, false, {\n            fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/button/popUpWindow.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/button/popUpWindow.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = PopUpWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopUpWindow);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Box\");\n$RefreshReg$(_c1, \"BlockWindow\");\n$RefreshReg$(_c2, \"PopUpWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9idXR0b24vcG9wVXBXaW5kb3cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLE1BQU1ELHdFQUFVOzs7O0tBQWhCQztBQU1OLE1BQU1FLGNBQWNILHdFQUFVOzs7O01BQXhCRztBQU9OLE1BQU1DLGNBQXdCLElBQU07SUFDaEMscUJBQ0ksOERBQUNIO2tCQUNHLDRFQUFDRTtzQkFBWTs7Ozs7Ozs7Ozs7QUFHekI7TUFOTUM7QUFRTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idXR0b24vcG9wVXBXaW5kb3cudHN4P2I1OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuYFxuXG5jb25zdCBCbG9ja1dpbmRvdyA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzM1ODtcbiAgICBjb2xvcjogI2ZmZjtcbmBcblxuY29uc3QgUG9wVXBXaW5kb3c6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8QmxvY2tXaW5kb3c+0KHRgtCw0YLRg9GBINC30LDQutCw0LfQsCDQuNC30LzQtdC90LXQvTwvQmxvY2tXaW5kb3c+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wVXBXaW5kb3ciXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJCb3giLCJkaXYiLCJCbG9ja1dpbmRvdyIsIlBvcFVwV2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/button/popUpWindow.tsx\n"));

/***/ })

});