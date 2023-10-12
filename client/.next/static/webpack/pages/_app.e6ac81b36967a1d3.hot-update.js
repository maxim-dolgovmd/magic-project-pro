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

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; },\n/* harmony export */   \"useAppDispatch\": function() { return /* binding */ useAppDispatch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_addCartSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/addCartSlice */ \"./src/redux/slices/addCartSlice.ts\");\n/* harmony import */ var _slices_storageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/storageSlice */ \"./src/redux/slices/storageSlice.ts\");\n/* harmony import */ var _slices_ingridientSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/ingridientSlice */ \"./src/redux/slices/ingridientSlice.ts\");\n/* harmony import */ var _services_ingridientsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ingridientsApi */ \"./src/services/ingridientsApi.ts\");\n/* harmony import */ var _services_ordersApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ordersApi */ \"./src/services/ordersApi.ts\");\n/* harmony import */ var _services_registrationApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/registrationApi */ \"./src/services/registrationApi.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/categoriesApi */ \"./src/services/categoriesApi.ts\");\n\n\n\n\n\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.configureStore)({\n    reducer: {\n        addCart: _slices_addCartSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        storage: _slices_storageSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        newIngr: _slices_ingridientSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        [_services_ordersApi__WEBPACK_IMPORTED_MODULE_4__.ordersApi.reducerPath]: _services_ordersApi__WEBPACK_IMPORTED_MODULE_4__.ordersApi.reducer,\n        [_services_registrationApi__WEBPACK_IMPORTED_MODULE_5__.registrationApi.reducerPath]: _services_registrationApi__WEBPACK_IMPORTED_MODULE_5__.registrationApi.reducer,\n        [_services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__.categoriesApi.reducerPath]: _services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__.categoriesApi.reducer\n    },\n    middleware: (getDefaultMiddleWare)=>getDefaultMiddleWare().concat([\n            _services_ingridientsApi__WEBPACK_IMPORTED_MODULE_3__.ingridientApi.middleware,\n            _services_ordersApi__WEBPACK_IMPORTED_MODULE_4__.ordersApi.middleware,\n            _services_registrationApi__WEBPACK_IMPORTED_MODULE_5__.registrationApi.middleware,\n            _services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__.categoriesApi.middleware\n        ])\n});\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSjtBQUNBO0FBQ0c7QUFDVTtBQUNUO0FBQ1k7QUFDbEI7QUFDZ0I7QUFFbEQsTUFBTVMsUUFBUVQsZ0VBQWNBLENBQUM7SUFDaENVLFNBQVM7UUFDTFQsT0FBT0EsOERBQUFBO1FBQ1BDLE9BQU9BLDhEQUFBQTtRQUNQQyxPQUFPQSxpRUFBQUE7UUFDUCxDQUFDRSxzRUFBcUIsQ0FBQyxFQUFFQSxrRUFBaUI7UUFDMUMsQ0FBQ0Msa0ZBQTJCLENBQUMsRUFBRUEsOEVBQXVCO1FBQ3RELENBQUNFLDhFQUF5QixDQUFDLEVBQUVBLDBFQUFxQjtJQUN0RDtJQUNBSSxZQUFZLENBQUNDLHVCQUF5QkEsdUJBQXVCQyxNQUFNLENBQUM7WUFDaEVWLDhFQUF3QjtZQUN4QkMscUVBQW9CO1lBQ3BCQyxpRkFBMEI7WUFDMUJFLDZFQUF3QjtTQUMzQjtBQUNMLEdBQUU7QUFNSyxNQUFNTyxpQkFBb0NSLG9EQUFXQSxDQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zdG9yZS50cz9hNWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlndXJlU3RvcmV9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgYWRkQ2FydCBmcm9tICcuL3NsaWNlcy9hZGRDYXJ0U2xpY2UnXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3NsaWNlcy9zdG9yYWdlU2xpY2UnXG5pbXBvcnQgbmV3SW5nciBmcm9tICcuL3NsaWNlcy9pbmdyaWRpZW50U2xpY2UnXG5pbXBvcnQge2luZ3JpZGllbnRBcGl9IGZyb20gJy4uL3NlcnZpY2VzL2luZ3JpZGllbnRzQXBpJ1xuaW1wb3J0IHtvcmRlcnNBcGl9IGZyb20gJy4uL3NlcnZpY2VzL29yZGVyc0FwaSdcbmltcG9ydCB7cmVnaXN0cmF0aW9uQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWdpc3RyYXRpb25BcGknXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY2F0ZWdvcmllc0FwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhdGVnb3JpZXNBcGknXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICAgIGFkZENhcnQsXG4gICAgICAgIHN0b3JhZ2UsXG4gICAgICAgIG5ld0luZ3IsXG4gICAgICAgIFtvcmRlcnNBcGkucmVkdWNlclBhdGhdOiBvcmRlcnNBcGkucmVkdWNlcixcbiAgICAgICAgW3JlZ2lzdHJhdGlvbkFwaS5yZWR1Y2VyUGF0aF06IHJlZ2lzdHJhdGlvbkFwaS5yZWR1Y2VyLFxuICAgICAgICBbY2F0ZWdvcmllc0FwaS5yZWR1Y2VyUGF0aF06IGNhdGVnb3JpZXNBcGkucmVkdWNlcixcbiAgICB9LFxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxlV2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZVdhcmUoKS5jb25jYXQoW1xuICAgICAgICBpbmdyaWRpZW50QXBpLm1pZGRsZXdhcmUsXG4gICAgICAgIG9yZGVyc0FwaS5taWRkbGV3YXJlLCBcbiAgICAgICAgcmVnaXN0cmF0aW9uQXBpLm1pZGRsZXdhcmUsXG4gICAgICAgIGNhdGVnb3JpZXNBcGkubWlkZGxld2FyZVxuICAgIF0pLFxufSlcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG5cbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaDogKCkgPT4gQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImFkZENhcnQiLCJzdG9yYWdlIiwibmV3SW5nciIsImluZ3JpZGllbnRBcGkiLCJvcmRlcnNBcGkiLCJyZWdpc3RyYXRpb25BcGkiLCJ1c2VEaXNwYXRjaCIsImNhdGVnb3JpZXNBcGkiLCJzdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxlV2FyZSIsImNvbmNhdCIsInVzZUFwcERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n"));

/***/ })

});