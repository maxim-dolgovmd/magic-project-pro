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

/***/ "./src/utils/windowAutoScroll.ts":
/*!***************************************!*\
  !*** ./src/utils/windowAutoScroll.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"windowAutoScroll\": function() { return /* binding */ windowAutoScroll; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/redux/slices/storageSlice */ \"./src/redux/slices/storageSlice.ts\");\n\n\n\nconst windowAutoScroll = ()=>{\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    if (true) {\n        window.addEventListener(\"scroll\", function() {\n            const scrollPosition = window.scrollY;\n            console.log(scrollPosition);\n            if (scrollPosition > 300) {\n                //   window.scrollTo({\n                //     top: 0,\n                //     left: 0,\n                //     behavior: 'smooth',\n                //   });\n                dispatch((0,_components_redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_2__.setToScroll)(false));\n            } else {\n                dispatch((0,_components_redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_2__.setToScroll)());\n            }\n        });\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvd2luZG93QXV0b1Njcm9sbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMwQjtBQUVjO0FBRTNELE1BQU1HLG1CQUFtQixJQUFNO0lBRWxDLE1BQU1DLFdBQVdILHdEQUFXQTtJQUU1QixJQUFJLElBQWtCLEVBQWE7UUFDL0JJLE9BQU9DLGdCQUFnQixDQUFDLFVBQVUsV0FBWTtZQUMxQyxNQUFNQyxpQkFBaUJGLE9BQU9HLE9BQU87WUFDckNDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixJQUFJQSxpQkFBaUIsS0FBSztnQkFFMUIsc0JBQXNCO2dCQUN0QixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsMEJBQTBCO2dCQUMxQixRQUFRO2dCQUVKSCxTQUFTRixrRkFBV0EsQ0FBQyxLQUFLO1lBQzlCLE9BQU87Z0JBQ0hFLFNBQVNGLGtGQUFXQTtZQUN4QixDQUFDO1FBQ0g7SUFDSixDQUFDO0FBQ1AsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvd2luZG93QXV0b1Njcm9sbC50cz9hMzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFRvU2Nyb2xsU2VsZWN0IH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9zdG9yYWdlU2xpY2VcIjtcbmltcG9ydCB7c2V0VG9TY3JvbGx9IGZyb20gJ0AvY29tcG9uZW50cy9yZWR1eC9zbGljZXMvc3RvcmFnZVNsaWNlJ1xuXG5leHBvcnQgY29uc3Qgd2luZG93QXV0b1Njcm9sbCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID4gMzAwKSB7XG4gICAgXG4gICAgICAgICAgICAvLyAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAvLyAgICAgdG9wOiAwLFxuICAgICAgICAgICAgLy8gICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAvLyAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRUb1Njcm9sbChmYWxzZSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFRvU2Nyb2xsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJzZXRUb1Njcm9sbCIsIndpbmRvd0F1dG9TY3JvbGwiLCJkaXNwYXRjaCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/windowAutoScroll.ts\n"));

/***/ })

});