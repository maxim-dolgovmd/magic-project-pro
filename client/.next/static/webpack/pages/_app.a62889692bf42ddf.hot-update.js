"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/scroll/scrollComponent.tsx":
/*!***************************************************!*\
  !*** ./src/components/scroll/scrollComponent.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_arrow_up_solid_two_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/arrow-up-solid-two.svg */ \"./public/arrow-up-solid-two.svg\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_utils_windowAutoScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/utils/windowAutoScroll */ \"./src/utils/windowAutoScroll.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/redux/slices/storageSlice */ \"./src/redux/slices/storageSlice.ts\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: fixed;\\n    width: 80px;\\n    bottom: 100px;\\n    right: 100px;\\n    z-index: 300;\\n    opacity: 0.3;\\n    cursor: pointer;\\n    svg {\\n        fill: #8585AD;\\n    }\\n\\n    \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst BoxScroll = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"scrollComponent__BoxScroll\",\n    componentId: \"sc-9820ee23-0\"\n})(_templateObject(), (props)=>{\n    return props.scrollActive && {\n        opacity: 0\n    };\n});\n_c = BoxScroll;\nconst ScrollComponent = ()=>{\n    _s();\n    const { toScroll  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_components_redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_6__.ToScrollSelect);\n    (0,_components_utils_windowAutoScroll__WEBPACK_IMPORTED_MODULE_4__.windowAutoScroll)();\n    const toScrollOnClick = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BoxScroll, {\n        scrollActive: toScroll,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_public_arrow_up_solid_two_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/scroll/scrollComponent.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/scroll/scrollComponent.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ScrollComponent, \"SXANCB9Evmelh4m+8H2sLd+cmDI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c1 = ScrollComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"BoxScroll\");\n$RefreshReg$(_c1, \"ScrollComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsQ29tcG9uZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0M7QUFDckI7QUFDZ0M7QUFDN0I7QUFDOEI7QUFNeEUsTUFBTU0sWUFBWUosd0VBQVU7OztzQkFZdEIsQ0FBQ00sUUFBc0I7SUFDckIsT0FBT0EsTUFBTUMsWUFBWSxJQUFJO1FBQ3pCQyxTQUFTO0lBQ2I7QUFDSjtLQWhCRUo7QUFtQk4sTUFBTUssa0JBQTRCLElBQU07O0lBRXBDLE1BQU0sRUFBQ0MsU0FBUSxFQUFDLEdBQUdSLHdEQUFXQSxDQUFDQyxpRkFBY0E7SUFDN0NGLG9GQUFnQkE7SUFFaEIsTUFBTVUsa0JBQWtCLElBQU0sQ0FFOUI7SUFFQSxxQkFDSSw4REFBQ1A7UUFBVUcsY0FBY0c7a0JBQ3JCLDRFQUFDWCxzRUFBT0E7Ozs7Ozs7Ozs7QUFHcEI7R0FkTVU7O1FBRWlCUCxvREFBV0E7OztNQUY1Qk87QUFnQk4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2Nyb2xsL3Njcm9sbENvbXBvbmVudC50c3g/ZDZkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJyb3dVcCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXJyb3ctdXAtc29saWQtdHdvLnN2ZydcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB3aW5kb3dBdXRvU2Nyb2xsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91dGlscy93aW5kb3dBdXRvU2Nyb2xsXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgVG9TY3JvbGxTZWxlY3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3JlZHV4L3NsaWNlcy9zdG9yYWdlU2xpY2VcIjtcblxudHlwZSBTY3JvbGxUeXBlID0ge1xuICAgIHNjcm9sbEFjdGl2ZT86IGJvb2xlYW5cbn1cblxuY29uc3QgQm94U2Nyb2xsID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICByaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogMzAwO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc3ZnIHtcbiAgICAgICAgZmlsbDogIzg1ODVBRDtcbiAgICB9XG5cbiAgICAkeyhwcm9wczogU2Nyb2xsVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvcHMuc2Nyb2xsQWN0aXZlICYmIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfVxuICAgIH19O1xuYFxuXG5jb25zdCBTY3JvbGxDb21wb25lbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gICAgY29uc3Qge3RvU2Nyb2xsfSA9IHVzZVNlbGVjdG9yKFRvU2Nyb2xsU2VsZWN0KVxuICAgIHdpbmRvd0F1dG9TY3JvbGwoKVxuXG4gICAgY29uc3QgdG9TY3JvbGxPbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94U2Nyb2xsIHNjcm9sbEFjdGl2ZT17dG9TY3JvbGx9PlxuICAgICAgICAgICAgPEFycm93VXAvPlxuICAgICAgICA8L0JveFNjcm9sbD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbENvbXBvbmVudCJdLCJuYW1lcyI6WyJSZWFjdCIsIkFycm93VXAiLCJzdHlsZWQiLCJ3aW5kb3dBdXRvU2Nyb2xsIiwidXNlU2VsZWN0b3IiLCJUb1Njcm9sbFNlbGVjdCIsIkJveFNjcm9sbCIsImRpdiIsInByb3BzIiwic2Nyb2xsQWN0aXZlIiwib3BhY2l0eSIsIlNjcm9sbENvbXBvbmVudCIsInRvU2Nyb2xsIiwidG9TY3JvbGxPbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/scroll/scrollComponent.tsx\n"));

/***/ })

});