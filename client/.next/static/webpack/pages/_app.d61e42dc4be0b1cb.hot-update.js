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

/***/ "./src/redux/slices/windowSlice.ts":
/*!*****************************************!*\
  !*** ./src/redux/slices/windowSlice.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StatusOrderSelect\": function() { return /* binding */ StatusOrderSelect; },\n/* harmony export */   \"setActiveStatusOrder\": function() { return /* binding */ setActiveStatusOrder; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    activeStatusOrder: false,\n    activeIngridients: false\n};\nconst windowSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Window\",\n    initialState,\n    reducers: {\n        setActiveStatusOrder (state, action) {\n            state.activeStatusOrder = action.payload;\n        }\n    }\n});\nconst { setActiveStatusOrder  } = windowSlice.actions;\nconst StatusOrderSelect = (state)=>state.window.activeStatusOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (windowSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2xpY2VzL3dpbmRvd1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0RDtBQVM1RCxNQUFNQyxlQUE0QjtJQUM5QkMsbUJBQW1CLEtBQUs7SUFDeEJDLG1CQUFtQixLQUFLO0FBQzVCO0FBRUEsTUFBTUMsY0FBY0osNkRBQVdBLENBQUM7SUFDNUJLLE1BQU07SUFDTko7SUFDQUssVUFBVTtRQUNOQyxzQkFBcUJDLEtBQUssRUFBRUMsTUFBOEIsRUFBRTtZQUN4REQsTUFBTU4saUJBQWlCLEdBQUdPLE9BQU9DLE9BQU87UUFDNUM7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUNUSCxxQkFBb0IsRUFDdkIsR0FBR0gsWUFBWU8sT0FBTztBQUVoQixNQUFNQyxvQkFBb0IsQ0FBQ0osUUFBcUJBLE1BQU1LLE1BQU0sQ0FBQ1gsaUJBQWlCO0FBRXJGLCtEQUFlRSxZQUFZVSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvd2luZG93U2xpY2UudHM/NzE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFN0b3JhZ2VNb2RlIH0gZnJvbSAnQC9jb21wb25lbnRzL3V0aWxzL2dldFN0b3JhZ2VNb2RlJztcblxuaW50ZXJmYWNlIEluaXRpYWxUeXBlIHtcbiAgICBhY3RpdmVTdGF0dXNPcmRlcjogYm9vbGVhblxuICAgIGFjdGl2ZUluZ3JpZGllbnRzOiBib29sZWFuXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5pdGlhbFR5cGUgPSB7XG4gICAgYWN0aXZlU3RhdHVzT3JkZXI6IGZhbHNlLFxuICAgIGFjdGl2ZUluZ3JpZGllbnRzOiBmYWxzZVxufVxuXG5jb25zdCB3aW5kb3dTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnV2luZG93JyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0QWN0aXZlU3RhdHVzT3JkZXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuICAgICAgICAgICAgc3RhdGUuYWN0aXZlU3RhdHVzT3JkZXIgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgICBzZXRBY3RpdmVTdGF0dXNPcmRlclxufSA9IHdpbmRvd1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGNvbnN0IFN0YXR1c09yZGVyU2VsZWN0ID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLndpbmRvdy5hY3RpdmVTdGF0dXNPcmRlclxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aXZlU3RhdHVzT3JkZXIiLCJhY3RpdmVJbmdyaWRpZW50cyIsIndpbmRvd1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0QWN0aXZlU3RhdHVzT3JkZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiU3RhdHVzT3JkZXJTZWxlY3QiLCJ3aW5kb3ciLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/slices/windowSlice.ts\n"));

/***/ })

});