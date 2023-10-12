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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ingridientApi\": function() { return /* binding */ ingridientApi; },\n/* harmony export */   \"useGetIngridientQuery\": function() { return /* binding */ useGetIngridientQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\nconst API_URL = \"http://localhost:5555\";\nconst ingridientApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"ingridientApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: API_URL\n    }),\n    endpoints: (builder)=>({\n            getIngridient: builder.query({\n                query: ()=>{\n                    return {\n                        url: \"/ingridients\",\n                        method: \"GET\"\n                    };\n                }\n            }),\n            createIngridient: builder.mutation({\n                query: ()=>{\n                    return {\n                        url: \"/ingridients\",\n                        method: \"POST\"\n                    };\n                }\n            })\n        })\n});\nconst { useGetIngridientQuery  } = ingridientApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaW5ncmlkaWVudHNBcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNFO0FBR3RFLE1BQU1FLFVBQVU7QUFFVCxNQUFNQyxnQkFBcUJILHVFQUFTQSxDQUFDO0lBQ3hDSSxhQUFhO0lBQ2JDLFdBQVdKLDRFQUFjQSxDQUFDO1FBQ3RCSyxTQUFTSjtJQUNiO0lBQ0FLLFdBQVcsQ0FBQ0MsVUFBYTtZQUNyQkMsZUFBZUQsUUFBUUUsS0FBSyxDQUFzQjtnQkFDOUNBLE9BQU8sSUFBTTtvQkFDVCxPQUFPO3dCQUNIQyxLQUFNO3dCQUNOQyxRQUFRO29CQUNaO2dCQUNKO1lBQ0o7WUFFQUMsa0JBQWtCTCxRQUFRTSxRQUFRLENBQUM7Z0JBQy9CSixPQUFPLElBQU07b0JBQ1QsT0FBTzt3QkFDSEMsS0FBSzt3QkFDTEMsUUFBUTtvQkFDWjtnQkFDSjtZQUNKO1FBQ0o7QUFDSixHQUFFO0FBRUssTUFBTSxFQUNURyxzQkFBcUIsRUFDeEIsR0FBR1osY0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvaW5ncmlkaWVudHNBcGkudHM/NTE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnXG5pbXBvcnQgeyBJSW5ncmVkaWVudCB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy9hZGRDYXJ0U2xpY2UnXG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1NTU1J1xuXG5leHBvcnQgY29uc3QgaW5ncmlkaWVudEFwaTogYW55ID0gY3JlYXRlQXBpKHtcbiAgICByZWR1Y2VyUGF0aDogJ2luZ3JpZGllbnRBcGknLFxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgICAgICBiYXNlVXJsOiBBUElfVVJMLFxuICAgIH0pLFxuICAgIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgICAgIGdldEluZ3JpZGllbnQ6IGJ1aWxkZXIucXVlcnk8SUluZ3JlZGllbnRbXSwgdm9pZD4oe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvaW5ncmlkaWVudHNgLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGNyZWF0ZUluZ3JpZGllbnQ6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgICAgICAgcXVlcnk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvaW5ncmlkaWVudHMnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuZXhwb3J0IGNvbnN0IHtcbiAgICB1c2VHZXRJbmdyaWRpZW50UXVlcnksIFxufSA9IGluZ3JpZGllbnRBcGkiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJBUElfVVJMIiwiaW5ncmlkaWVudEFwaSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRJbmdyaWRpZW50IiwicXVlcnkiLCJ1cmwiLCJtZXRob2QiLCJjcmVhdGVJbmdyaWRpZW50IiwibXV0YXRpb24iLCJ1c2VHZXRJbmdyaWRpZW50UXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/ingridientsApi.ts\n"));

/***/ })

});