"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/modal/modal.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/modal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _device_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../device/device */ \"./src/components/device/device.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-Index: 200;\\n    width: 100%;\\n    height: 100%;\\n    background: rgba(0,0,0,0.4);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    /* height: 720px; */\\n    /* max-width: 718px; */\\n    background: \",\n        \";\\n    border: 1px solid rgba(76, 76, 255, 0.2);\\n    box-shadow: \\n        0px 24px 32px rgba(0, 0, 0, 0.04), \\n        0px 16px 24px rgba(0, 0, 0, 0.04),\\n        0px 4px 8px rgba(0, 0, 0, 0.04),\\n        0px 0px 1px rgba(0, 0, 0, 0.04);\\n    border-radius: 40px;\\n    display: flex;\\n    /* justify-content: center; */\\n\\n    @media \",\n        \" {\\n        width: 100%;\\n        height: 100%;\\n        border-radius: 0px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst Window = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"modal__Window\",\n    componentId: \"sc-5892bf0f-0\"\n})(_templateObject());\n_c = Window;\nconst OrderContent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h1.withConfig({\n    displayName: \"modal__OrderContent\",\n    componentId: \"sc-5892bf0f-1\"\n})(_templateObject1(), (param)=>{\n    let { theme  } = param;\n    return theme.modal;\n}, _device_device__WEBPACK_IMPORTED_MODULE_3__.device.tablet);\n_c1 = OrderContent;\nconst Modal = (param)=>{\n    let { children , activeModal  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Window, {\n        onClick: activeModal,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OrderContent, {\n            onClick: (e)=>e.stopPropagation(),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/modal/modal.tsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/modal/modal.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Window\");\n$RefreshReg$(_c1, \"OrderContent\");\n$RefreshReg$(_c2, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFHRztBQUUxQyxNQUFNRyxTQUFTRix3RUFBVTs7OztLQUFuQkU7QUFhTixNQUFNRSxlQUFlSix1RUFBUzs7O3VCQUdaLFNBQWVNO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLEtBQUs7QUFBRCxHQVc5Qk4seURBQWE7TUFkcEJHO0FBMEJOLE1BQU1LLFFBQTRCLFNBQTZCO1FBQTVCLEVBQUNDLFNBQVEsRUFBRUMsWUFBVyxFQUFDO0lBRXRELHFCQUNJLDhEQUFDVDtRQUFPVSxTQUFTRDtrQkFDYiw0RUFBQ1A7WUFBYVEsU0FBUyxDQUFDQyxJQUFNQSxFQUFFQyxlQUFlO3NCQUMxQ0o7Ozs7Ozs7Ozs7O0FBSWpCO01BVE1EO0FBV04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwudHN4P2YxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi9kZXZpY2UvZGV2aWNlXCI7XG5cbmNvbnN0IFdpbmRvdyA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotSW5kZXg6IDIwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgT3JkZXJDb250ZW50ID0gc3R5bGVkLmgxYFxuICAgIC8qIGhlaWdodDogNzIwcHg7ICovXG4gICAgLyogbWF4LXdpZHRoOiA3MThweDsgKi9cbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vZGFsfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc2LCA3NiwgMjU1LCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwcHggMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIFxuICAgICAgICAwcHggMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgICAgIDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgICAgIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuXG4gICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuYFxuXG50eXBlIE1vZGFsVHlwZSA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLFxuICAgIGFjdGl2ZU1vZGFsOiAoKSA9PiB2b2lkLFxufVxuXG5jb25zdCBNb2RhbDpSZWFjdC5GQzxNb2RhbFR5cGU+ID0gKHtjaGlsZHJlbiwgYWN0aXZlTW9kYWx9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8V2luZG93IG9uQ2xpY2s9e2FjdGl2ZU1vZGFsfT5cbiAgICAgICAgICAgIDxPcmRlckNvbnRlbnQgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvT3JkZXJDb250ZW50PlxuICAgICAgICA8L1dpbmRvdz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiZGV2aWNlIiwiV2luZG93IiwiZGl2IiwiT3JkZXJDb250ZW50IiwiaDEiLCJ0aGVtZSIsIm1vZGFsIiwidGFibGV0IiwiTW9kYWwiLCJjaGlsZHJlbiIsImFjdGl2ZU1vZGFsIiwib25DbGljayIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal/modal.tsx\n"));

/***/ })

});