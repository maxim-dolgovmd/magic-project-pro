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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActiveIngrSelect\": function() { return /* binding */ ActiveIngrSelect; },\n/* harmony export */   \"StatusOrderSelect\": function() { return /* binding */ StatusOrderSelect; },\n/* harmony export */   \"UpdateActiveSelect\": function() { return /* binding */ UpdateActiveSelect; },\n/* harmony export */   \"setActiveIngridients\": function() { return /* binding */ setActiveIngridients; },\n/* harmony export */   \"setActiveStatusOrder\": function() { return /* binding */ setActiveStatusOrder; },\n/* harmony export */   \"setUpdateActive\": function() { return /* binding */ setUpdateActive; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    activeStatusOrder: false,\n    activeIngridients: false,\n    updateActive: false\n};\nconst windowSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Window\",\n    initialState,\n    reducers: {\n        setActiveStatusOrder (state, action) {\n            state.activeStatusOrder = action.payload;\n        },\n        setActiveIngridients (state, action) {\n            state.activeIngridients = action.payload;\n        },\n        setUpdateActive (state, action) {\n            state.updateActive = action.payload;\n        }\n    }\n});\nconst { setActiveStatusOrder , setActiveIngridients , setUpdateActive  } = windowSlice.actions;\nconst StatusOrderSelect = (state)=>state.window.activeStatusOrder;\nconst ActiveIngrSelect = (state)=>state.window.activeIngridients;\nconst UpdateActiveSelect = (state)=>state.window.updateActive;\n/* harmony default export */ __webpack_exports__[\"default\"] = (windowSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2xpY2VzL3dpbmRvd1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEQ7QUFVNUQsTUFBTUMsZUFBNEI7SUFDOUJDLG1CQUFtQixLQUFLO0lBQ3hCQyxtQkFBbUIsS0FBSztJQUN4QkMsY0FBYyxLQUFLO0FBQ3ZCO0FBRUEsTUFBTUMsY0FBY0wsNkRBQVdBLENBQUM7SUFDNUJNLE1BQU07SUFDTkw7SUFDQU0sVUFBVTtRQUNOQyxzQkFBcUJDLEtBQUssRUFBRUMsTUFBOEIsRUFBRTtZQUN4REQsTUFBTVAsaUJBQWlCLEdBQUdRLE9BQU9DLE9BQU87UUFDNUM7UUFFQUMsc0JBQXFCSCxLQUFLLEVBQUVDLE1BQThCLEVBQUU7WUFDeERELE1BQU1OLGlCQUFpQixHQUFHTyxPQUFPQyxPQUFPO1FBQzVDO1FBRUFFLGlCQUFnQkosS0FBSyxFQUFFQyxNQUE4QixFQUFFO1lBQ25ERCxNQUFNTCxZQUFZLEdBQUdNLE9BQU9DLE9BQU87UUFDdkM7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUNUSCxxQkFBb0IsRUFDcEJJLHFCQUFvQixFQUNwQkMsZ0JBQWUsRUFDbEIsR0FBR1IsWUFBWVMsT0FBTztBQUVoQixNQUFNQyxvQkFBb0IsQ0FBQ04sUUFBcUJBLE1BQU1PLE1BQU0sQ0FBQ2QsaUJBQWlCO0FBQzlFLE1BQU1lLG1CQUFtQixDQUFDUixRQUFxQkEsTUFBTU8sTUFBTSxDQUFDYixpQkFBaUI7QUFDN0UsTUFBTWUscUJBQXFCLENBQUNULFFBQXFCQSxNQUFNTyxNQUFNLENBQUNaLFlBQVk7QUFFakYsK0RBQWVDLFlBQVljLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NsaWNlcy93aW5kb3dTbGljZS50cz83MThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZU1vZGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdXRpbHMvZ2V0U3RvcmFnZU1vZGUnO1xuXG5pbnRlcmZhY2UgSW5pdGlhbFR5cGUge1xuICAgIGFjdGl2ZVN0YXR1c09yZGVyOiBib29sZWFuXG4gICAgYWN0aXZlSW5ncmlkaWVudHM6IGJvb2xlYW5cbiAgICB1cGRhdGVBY3RpdmU6IGJvb2xlYW5cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJbml0aWFsVHlwZSA9IHtcbiAgICBhY3RpdmVTdGF0dXNPcmRlcjogZmFsc2UsXG4gICAgYWN0aXZlSW5ncmlkaWVudHM6IGZhbHNlLFxuICAgIHVwZGF0ZUFjdGl2ZTogZmFsc2Vcbn1cblxuY29uc3Qgd2luZG93U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ1dpbmRvdycsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldEFjdGl2ZVN0YXR1c09yZGVyKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZVN0YXR1c09yZGVyID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRBY3RpdmVJbmdyaWRpZW50cyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVJbmdyaWRpZW50cyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0VXBkYXRlQWN0aXZlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pIHtcbiAgICAgICAgICAgIHN0YXRlLnVwZGF0ZUFjdGl2ZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qge1xuICAgIHNldEFjdGl2ZVN0YXR1c09yZGVyLFxuICAgIHNldEFjdGl2ZUluZ3JpZGllbnRzLFxuICAgIHNldFVwZGF0ZUFjdGl2ZSxcbn0gPSB3aW5kb3dTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBjb25zdCBTdGF0dXNPcmRlclNlbGVjdCA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS53aW5kb3cuYWN0aXZlU3RhdHVzT3JkZXJcbmV4cG9ydCBjb25zdCBBY3RpdmVJbmdyU2VsZWN0ID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLndpbmRvdy5hY3RpdmVJbmdyaWRpZW50c1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUFjdGl2ZVNlbGVjdCA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS53aW5kb3cudXBkYXRlQWN0aXZlXG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhY3RpdmVTdGF0dXNPcmRlciIsImFjdGl2ZUluZ3JpZGllbnRzIiwidXBkYXRlQWN0aXZlIiwid2luZG93U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRBY3RpdmVTdGF0dXNPcmRlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEFjdGl2ZUluZ3JpZGllbnRzIiwic2V0VXBkYXRlQWN0aXZlIiwiYWN0aW9ucyIsIlN0YXR1c09yZGVyU2VsZWN0Iiwid2luZG93IiwiQWN0aXZlSW5nclNlbGVjdCIsIlVwZGF0ZUFjdGl2ZVNlbGVjdCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/slices/windowSlice.ts\n"));

/***/ })

});