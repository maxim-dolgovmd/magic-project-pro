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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; },\n/* harmony export */   \"useAppDispatch\": function() { return /* binding */ useAppDispatch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_addCartSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/addCartSlice */ \"./src/redux/slices/addCartSlice.ts\");\n/* harmony import */ var _slices_storageSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/storageSlice */ \"./src/redux/slices/storageSlice.ts\");\n/* harmony import */ var _slices_ingridientSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/ingridientSlice */ \"./src/redux/slices/ingridientSlice.ts\");\n/* harmony import */ var _services_ingridientsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ingridientsApi */ \"./src/services/ingridientsApi.ts\");\n/* harmony import */ var _services_ordersApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ordersApi */ \"./src/services/ordersApi.ts\");\n/* harmony import */ var _services_registrationApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/registrationApi */ \"./src/services/registrationApi.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/categoriesApi */ \"./src/services/categoriesApi.ts\");\n\n\n\n\n\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.configureStore)({\n    reducer: {\n        window,\n        addCart: _slices_addCartSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        storage: _slices_storageSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        newIngr: _slices_ingridientSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        [_services_ingridientsApi__WEBPACK_IMPORTED_MODULE_3__.ingridientApi.reducerPath]: _services_ingridientsApi__WEBPACK_IMPORTED_MODULE_3__.ingridientApi.reducer,\n        [_services_ordersApi__WEBPACK_IMPORTED_MODULE_4__.ordersApi.reducerPath]: _services_ordersApi__WEBPACK_IMPORTED_MODULE_4__.ordersApi.reducer,\n        [_services_registrationApi__WEBPACK_IMPORTED_MODULE_5__.registrationApi.reducerPath]: _services_registrationApi__WEBPACK_IMPORTED_MODULE_5__.registrationApi.reducer,\n        [_services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__.categoriesApi.reducerPath]: _services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__.categoriesApi.reducer\n    },\n    middleware: (getDefaultMiddleWare)=>getDefaultMiddleWare().concat([\n            _services_ingridientsApi__WEBPACK_IMPORTED_MODULE_3__.ingridientApi.middleware,\n            _services_ordersApi__WEBPACK_IMPORTED_MODULE_4__.ordersApi.middleware,\n            _services_registrationApi__WEBPACK_IMPORTED_MODULE_5__.registrationApi.middleware,\n            _services_categoriesApi__WEBPACK_IMPORTED_MODULE_7__.categoriesApi.middleware\n        ])\n});\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSjtBQUNBO0FBQ0c7QUFDVTtBQUNUO0FBQ1k7QUFDbEI7QUFDZ0I7QUFFbEQsTUFBTVMsUUFBUVQsZ0VBQWNBLENBQUM7SUFDaENVLFNBQVM7UUFDTEM7UUFDQVYsT0FBT0EsOERBQUFBO1FBQ1BDLE9BQU9BLDhEQUFBQTtRQUNQQyxPQUFPQSxpRUFBQUE7UUFDUCxDQUFDQywrRUFBeUIsQ0FBQyxFQUFFQSwyRUFBcUI7UUFDbEQsQ0FBQ0Msc0VBQXFCLENBQUMsRUFBRUEsa0VBQWlCO1FBQzFDLENBQUNDLGtGQUEyQixDQUFDLEVBQUVBLDhFQUF1QjtRQUN0RCxDQUFDRSw4RUFBeUIsQ0FBQyxFQUFFQSwwRUFBcUI7SUFDdEQ7SUFDQUssWUFBWSxDQUFDQyx1QkFBeUJBLHVCQUF1QkMsTUFBTSxDQUFDO1lBQ2hFWCw4RUFBd0I7WUFDeEJDLHFFQUFvQjtZQUNwQkMsaUZBQTBCO1lBQzFCRSw2RUFBd0I7U0FDM0I7QUFDTCxHQUFFO0FBTUssTUFBTVEsaUJBQW9DVCxvREFBV0EsQ0FBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc3RvcmUudHM/YTViMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ3VyZVN0b3JlfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IGFkZENhcnQgZnJvbSAnLi9zbGljZXMvYWRkQ2FydFNsaWNlJ1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zbGljZXMvc3RvcmFnZVNsaWNlJ1xuaW1wb3J0IG5ld0luZ3IgZnJvbSAnLi9zbGljZXMvaW5ncmlkaWVudFNsaWNlJ1xuaW1wb3J0IHtpbmdyaWRpZW50QXBpfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmdyaWRpZW50c0FwaSdcbmltcG9ydCB7b3JkZXJzQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy9vcmRlcnNBcGknXG5pbXBvcnQge3JlZ2lzdHJhdGlvbkFwaX0gZnJvbSAnLi4vc2VydmljZXMvcmVnaXN0cmF0aW9uQXBpJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNhdGVnb3JpZXNBcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYXRlZ29yaWVzQXBpJ1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICB3aW5kb3csXG4gICAgICAgIGFkZENhcnQsXG4gICAgICAgIHN0b3JhZ2UsXG4gICAgICAgIG5ld0luZ3IsXG4gICAgICAgIFtpbmdyaWRpZW50QXBpLnJlZHVjZXJQYXRoXTogaW5ncmlkaWVudEFwaS5yZWR1Y2VyLFxuICAgICAgICBbb3JkZXJzQXBpLnJlZHVjZXJQYXRoXTogb3JkZXJzQXBpLnJlZHVjZXIsXG4gICAgICAgIFtyZWdpc3RyYXRpb25BcGkucmVkdWNlclBhdGhdOiByZWdpc3RyYXRpb25BcGkucmVkdWNlcixcbiAgICAgICAgW2NhdGVnb3JpZXNBcGkucmVkdWNlclBhdGhdOiBjYXRlZ29yaWVzQXBpLnJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZVdhcmUpID0+IGdldERlZmF1bHRNaWRkbGVXYXJlKCkuY29uY2F0KFtcbiAgICAgICAgaW5ncmlkaWVudEFwaS5taWRkbGV3YXJlLFxuICAgICAgICBvcmRlcnNBcGkubWlkZGxld2FyZSwgXG4gICAgICAgIHJlZ2lzdHJhdGlvbkFwaS5taWRkbGV3YXJlLFxuICAgICAgICBjYXRlZ29yaWVzQXBpLm1pZGRsZXdhcmVcbiAgICBdKSxcbn0pXG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPlxuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxuXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2g6ICgpID0+IEFwcERpc3BhdGNoID0gdXNlRGlzcGF0Y2giXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJhZGRDYXJ0Iiwic3RvcmFnZSIsIm5ld0luZ3IiLCJpbmdyaWRpZW50QXBpIiwib3JkZXJzQXBpIiwicmVnaXN0cmF0aW9uQXBpIiwidXNlRGlzcGF0Y2giLCJjYXRlZ29yaWVzQXBpIiwic3RvcmUiLCJyZWR1Y2VyIiwid2luZG93IiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZVdhcmUiLCJjb25jYXQiLCJ1c2VBcHBEaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/store.ts\n"));

/***/ })

});