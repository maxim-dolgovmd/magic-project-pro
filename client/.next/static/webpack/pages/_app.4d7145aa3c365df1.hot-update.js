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

/***/ "./src/services/ingridientsApi.ts":
/*!****************************************!*\
  !*** ./src/services/ingridientsApi.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ingridientApi\": function() { return /* binding */ ingridientApi; },\n/* harmony export */   \"useC\": function() { return /* binding */ useC; },\n/* harmony export */   \"useGetIngridientQuery\": function() { return /* binding */ useGetIngridientQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\nconst API_URL = \"http://localhost:5555\";\nconst ingridientApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"ingridientApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: API_URL\n    }),\n    endpoints: (builder)=>({\n            getIngridient: builder.query({\n                query: ()=>{\n                    return {\n                        url: \"/ingridients\",\n                        method: \"GET\"\n                    };\n                }\n            }),\n            createIngridient: builder.mutation({\n                query: (param)=>{\n                    let { largePhotoUrl , normalPhotoUrl , mobilePhotoUrl , previewPhotoUrl , price , name , category  } = param;\n                    return {\n                        url: \"/ingridients\",\n                        method: \"POST\",\n                        body: {\n                            largePhotoUrl,\n                            normalPhotoUrl,\n                            mobilePhotoUrl,\n                            previewPhotoUrl,\n                            price,\n                            name,\n                            category\n                        }\n                    };\n                }\n            })\n        })\n});\nconst { useGetIngridientQuery , useC  } = ingridientApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5ncmlkaWVudHNBcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRTtBQUd0RSxNQUFNRSxVQUFVO0FBRVQsTUFBTUMsZ0JBQXFCSCx1RUFBU0EsQ0FBQztJQUN4Q0ksYUFBYTtJQUNiQyxXQUFXSiw0RUFBY0EsQ0FBQztRQUN0QkssU0FBU0o7SUFDYjtJQUNBSyxXQUFXLENBQUNDLFVBQWE7WUFDckJDLGVBQWVELFFBQVFFLEtBQUssQ0FBc0I7Z0JBQzlDQSxPQUFPLElBQU07b0JBQ1QsT0FBTzt3QkFDSEMsS0FBTTt3QkFDTkMsUUFBUTtvQkFDWjtnQkFDSjtZQUNKO1lBRUFDLGtCQUFrQkwsUUFBUU0sUUFBUSxDQUFDO2dCQUMvQkosT0FBTyxTQUE2Rjt3QkFBNUYsRUFBQ0ssY0FBYSxFQUFFQyxlQUFjLEVBQUVDLGVBQWMsRUFBRUMsZ0JBQWUsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBQztvQkFDM0YsT0FBTzt3QkFDSFYsS0FBSzt3QkFDTEMsUUFBUTt3QkFDUlUsTUFBTTs0QkFDRlA7NEJBQ0FDOzRCQUNBQzs0QkFDQUM7NEJBQ0FDOzRCQUNBQzs0QkFDQUM7d0JBQ0o7b0JBQ0o7Z0JBQ0o7WUFDSjtRQUNKO0FBQ0osR0FBRTtBQUVLLE1BQU0sRUFDVEUsc0JBQXFCLEVBQ3JCQyxLQUFJLEVBQ1AsR0FBR3JCLGNBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2luZ3JpZGllbnRzQXBpLnRzPzUxNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5fSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0J1xuaW1wb3J0IHsgSUluZ3JlZGllbnQgfSBmcm9tICcuLi9yZWR1eC9zbGljZXMvYWRkQ2FydFNsaWNlJ1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NSdcblxuZXhwb3J0IGNvbnN0IGluZ3JpZGllbnRBcGk6IGFueSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6ICdpbmdyaWRpZW50QXBpJyxcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHtcbiAgICAgICAgYmFzZVVybDogQVBJX1VSTCxcbiAgICB9KSxcbiAgICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgICAgICBnZXRJbmdyaWRpZW50OiBidWlsZGVyLnF1ZXJ5PElJbmdyZWRpZW50W10sIHZvaWQ+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL2luZ3JpZGllbnRzYCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcblxuICAgICAgICBjcmVhdGVJbmdyaWRpZW50OiBidWlsZGVyLm11dGF0aW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoe2xhcmdlUGhvdG9VcmwsIG5vcm1hbFBob3RvVXJsLCBtb2JpbGVQaG90b1VybCwgcHJldmlld1Bob3RvVXJsLCBwcmljZSwgbmFtZSwgY2F0ZWdvcnl9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2luZ3JpZGllbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlUGhvdG9VcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxQaG90b1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBob3RvVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld1Bob3RvVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgICB1c2VHZXRJbmdyaWRpZW50UXVlcnksIFxuICAgIHVzZUNcbn0gPSBpbmdyaWRpZW50QXBpIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiQVBJX1VSTCIsImluZ3JpZGllbnRBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiZ2V0SW5ncmlkaWVudCIsInF1ZXJ5IiwidXJsIiwibWV0aG9kIiwiY3JlYXRlSW5ncmlkaWVudCIsIm11dGF0aW9uIiwibGFyZ2VQaG90b1VybCIsIm5vcm1hbFBob3RvVXJsIiwibW9iaWxlUGhvdG9VcmwiLCJwcmV2aWV3UGhvdG9VcmwiLCJwcmljZSIsIm5hbWUiLCJjYXRlZ29yeSIsImJvZHkiLCJ1c2VHZXRJbmdyaWRpZW50UXVlcnkiLCJ1c2VDIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/ingridientsApi.ts\n"));

/***/ })

});