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

/***/ "./src/redux/slices/storageSlice.ts":
/*!******************************************!*\
  !*** ./src/redux/slices/storageSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StorageSelect\": function() { return /* binding */ StorageSelect; },\n/* harmony export */   \"setUser\": function() { return /* binding */ setUser; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    user: \"\",\n    toScroll: true\n};\nconst storageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Storage\",\n    initialState,\n    reducers: {\n        setUser (state, action) {\n            state.user = action.payload;\n        },\n        setToScroll (state, action) {}\n    }\n});\nconst { setUser  } = storageSlice.actions;\nconst StorageSelect = (state)=>state.storage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (storageSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2xpY2VzL3N0b3JhZ2VTbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEQ7QUFRNUQsTUFBTUMsZUFBNEI7SUFDOUJDLE1BQU07SUFDTkMsVUFBVSxJQUFJO0FBQ2xCO0FBRUEsTUFBTUMsZUFBZUosNkRBQVdBLENBQUM7SUFDN0JLLE1BQU07SUFDTko7SUFDQUssVUFBVTtRQUNOQyxTQUFRQyxLQUFLLEVBQUVDLE1BQTBCLEVBQUU7WUFDdkNELE1BQU1OLElBQUksR0FBR08sT0FBT0MsT0FBTztRQUMvQjtRQUVBQyxhQUFZSCxLQUFLLEVBQUVDLE1BQThCLEVBQUUsQ0FFbkQ7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUNURixRQUFPLEVBQ1YsR0FBR0gsYUFBYVEsT0FBTztBQUVqQixNQUFNQyxnQkFBZ0IsQ0FBQ0wsUUFBcUJBLE1BQU1NLE9BQU87QUFFaEUsK0RBQWVWLGFBQWFXLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy9zdG9yYWdlU2xpY2UudHM/ZWEzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcblxuaW50ZXJmYWNlIEluaXRpYWxUeXBlIHtcbiAgICB1c2VyOiBzdHJpbmdcbiAgICB0b1Njcm9sbDogYm9vbGVhblxufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEluaXRpYWxUeXBlID0ge1xuICAgIHVzZXI6ICcnLFxuICAgIHRvU2Nyb2xsOiB0cnVlXG59XG5cbmNvbnN0IHN0b3JhZ2VTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnU3RvcmFnZScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFVzZXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxhbnk+KSB7XG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRUb1Njcm9sbChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG5cbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7XG4gICAgc2V0VXNlclxufSA9IHN0b3JhZ2VTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBjb25zdCBTdG9yYWdlU2VsZWN0ID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZVNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwidG9TY3JvbGwiLCJzdG9yYWdlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0VG9TY3JvbGwiLCJhY3Rpb25zIiwiU3RvcmFnZVNlbGVjdCIsInN0b3JhZ2UiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/slices/storageSlice.ts\n"));

/***/ })

});