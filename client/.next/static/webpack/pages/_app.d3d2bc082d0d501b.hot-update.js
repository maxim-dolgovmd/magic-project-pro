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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_arrow_up_solid_two_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/arrow-up-solid-two.svg */ \"./public/arrow-up-solid-two.svg\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: fixed;\\n    width: 80px;\\n    bottom: 100px;\\n    right: 100px;\\n    z-index: 300;\\n    opacity: 0.3;\\n    cursor: pointer;\\n    svg {\\n        fill: #8585AD;\\n    }\\n\\n    \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst BoxScroll = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"scrollComponent__BoxScroll\",\n    componentId: \"sc-a5db362a-0\"\n})(_templateObject(), (props)=>{\n    return props.scrollActive && {\n        opacity: 0\n    };\n});\n_c = BoxScroll;\nconst ScrollComponent = ()=>{\n    _s();\n    const [toScroll, setToScroll] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    window.addEventListener(\"scroll\", function() {\n        const scrollPosition = window.scrollY;\n        console.log(scrollPosition);\n        if (scrollPosition > 300) {\n        //   window.scrollTo({\n        //     top: 0,\n        //     left: 0,\n        //     behavior: 'smooth',\n        //   });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BoxScroll, {\n        scrollActive: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_public_arrow_up_solid_two_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/scroll/scrollComponent.tsx\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/meefala/Desktop/practice/magic-project-pro/client/src/components/scroll/scrollComponent.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ScrollComponent, \"PrLLaoikkhJnT4bp12JvX8VNseQ=\");\n_c1 = ScrollComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"BoxScroll\");\n$RefreshReg$(_c1, \"ScrollComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsQ29tcG9uZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0M7QUFDckI7QUFNdkMsTUFBTUcsWUFBWUQsd0VBQVU7OztzQkFZdEIsQ0FBQ0csUUFBc0I7SUFDckIsT0FBT0EsTUFBTUMsWUFBWSxJQUFJO1FBQ3pCQyxTQUFTO0lBQ2I7QUFDSjtLQWhCRUo7QUFtQk4sTUFBTUssa0JBQTRCLElBQU07O0lBRXBDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVixxREFBYyxDQUFDLEtBQUs7SUFFcERZLE9BQU9DLGdCQUFnQixDQUFDLFVBQVUsV0FBWTtRQUMxQyxNQUFNQyxpQkFBaUJGLE9BQU9HLE9BQU87UUFDckNDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixJQUFJQSxpQkFBaUIsS0FBSztRQUUxQixzQkFBc0I7UUFDdEIsY0FBYztRQUNkLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsUUFBUTtRQUdSLENBQUM7SUFDSDtJQUVGLHFCQUNJLDhEQUFDWDtRQUFVRyxjQUFjLEtBQUs7a0JBQzFCLDRFQUFDTCxzRUFBT0E7Ozs7Ozs7Ozs7QUFHcEI7R0F4Qk1PO01BQUFBO0FBMEJOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Njcm9sbC9zY3JvbGxDb21wb25lbnQudHN4P2Q2ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFycm93VXAgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fycm93LXVwLXNvbGlkLXR3by5zdmcnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG50eXBlIFNjcm9sbFR5cGUgPSB7XG4gICAgc2Nyb2xsQWN0aXZlPzogYm9vbGVhblxufVxuXG5jb25zdCBCb3hTY3JvbGwgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogODBweDtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiAzMDA7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBzdmcge1xuICAgICAgICBmaWxsOiAjODU4NUFEO1xuICAgIH1cblxuICAgICR7KHByb3BzOiBTY3JvbGxUeXBlKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9wcy5zY3JvbGxBY3RpdmUgJiYge1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9XG4gICAgfX07XG5gXG5cbmNvbnN0IFNjcm9sbENvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdG9TY3JvbGwsIHNldFRvU2Nyb2xsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiAzMDApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIC8vICAgICB0b3A6IDAsXG4gICAgICAgIC8vICAgICBsZWZ0OiAwLFxuICAgICAgICAvLyAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94U2Nyb2xsIHNjcm9sbEFjdGl2ZT17ZmFsc2V9PlxuICAgICAgICAgICAgPEFycm93VXAvPlxuICAgICAgICA8L0JveFNjcm9sbD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbENvbXBvbmVudCJdLCJuYW1lcyI6WyJSZWFjdCIsIkFycm93VXAiLCJzdHlsZWQiLCJCb3hTY3JvbGwiLCJkaXYiLCJwcm9wcyIsInNjcm9sbEFjdGl2ZSIsIm9wYWNpdHkiLCJTY3JvbGxDb21wb25lbnQiLCJ0b1Njcm9sbCIsInNldFRvU2Nyb2xsIiwidXNlU3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/scroll/scrollComponent.tsx\n"));

/***/ })

});