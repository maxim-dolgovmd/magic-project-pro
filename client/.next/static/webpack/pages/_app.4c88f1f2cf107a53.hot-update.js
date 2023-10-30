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

/***/ "./src/services/ordersApi.ts":
/*!***********************************!*\
  !*** ./src/services/ordersApi.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ordersApi\": function() { return /* binding */ ordersApi; },\n/* harmony export */   \"useGetAdminOrderQuery\": function() { return /* binding */ useGetAdminOrderQuery; },\n/* harmony export */   \"useGetOneOrderQuery\": function() { return /* binding */ useGetOneOrderQuery; },\n/* harmony export */   \"useGetOrderQuery\": function() { return /* binding */ useGetOrderQuery; },\n/* harmony export */   \"usePostOrderMutation\": function() { return /* binding */ usePostOrderMutation; },\n/* harmony export */   \"useUpdateStatusIdMutation\": function() { return /* binding */ useUpdateStatusIdMutation; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n\nconst API_URL = \"http://localhost:5555\";\nconst ordersApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"ordersApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: API_URL\n    }),\n    tagTypes: [\n        \"User\"\n    ],\n    endpoints: (builder)=>({\n            postOrder: builder.mutation({\n                query: (param)=>{\n                    let { sumProduct , addProduct  } = param;\n                    return {\n                        url: \"/order\",\n                        method: \"POST\",\n                        headers: {\n                            Authorization: window.localStorage.getItem(\"token\")\n                        },\n                        body: {\n                            name: \"заказ 1\",\n                            price: sumProduct,\n                            status: \"in preparation\",\n                            ingredients: addProduct\n                        }\n                    };\n                },\n                invalidatesTags: [\n                    \"User\"\n                ]\n            }),\n            getOrder: builder.query({\n                query: ()=>{\n                    return {\n                        url: \"/order/user\",\n                        method: \"GET\",\n                        headers: {\n                            Authorization: window.localStorage.getItem(\"token\")\n                        }\n                    };\n                },\n                providesTags: [\n                    \"User\"\n                ]\n            }),\n            getAdminOrder: builder.query({\n                query: ()=>{\n                    return {\n                        url: \"/order\",\n                        method: \"GET\"\n                    };\n                }\n            }),\n            getOneOrder: builder.query({\n                query: (param)=>{\n                    let { id  } = param;\n                    return {\n                        url: \"/order/\".concat(id),\n                        method: \"GET\",\n                        headers: {\n                            Authorization: window.localStorage.getItem(\"token\")\n                        }\n                    };\n                }\n            }),\n            updateStatusId: builder.mutation({\n                query: (param)=>{\n                    let { data , statusId  } = param;\n                    console.log(data, statusId);\n                    return {\n                        url: \"/order/\".concat(orderId),\n                        method: \"PATCH\",\n                        body: {\n                            status: statusId\n                        }\n                    };\n                }\n            })\n        })\n});\nconst { usePostOrderMutation , useGetOrderQuery , useGetAdminOrderQuery , useUpdateStatusIdMutation , useGetOneOrderQuery  } = ordersApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvb3JkZXJzQXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0U7QUFZdEUsTUFBTUUsVUFBVTtBQUVULE1BQU1DLFlBQVlILHVFQUFTQSxDQUFDO0lBQy9CSSxhQUFhO0lBQ2JDLFdBQVdKLDRFQUFjQSxDQUFDO1FBQ3RCSyxTQUFTSjtJQUNiO0lBQ0FLLFVBQVU7UUFBQztLQUFPO0lBQ2xCQyxXQUFXLENBQUNDLFVBQWE7WUFDckJDLFdBQVdELFFBQVFFLFFBQVEsQ0FBdUI7Z0JBQzlDQyxPQUFPLFNBQThCO3dCQUE3QixFQUFDQyxXQUFVLEVBQUVDLFdBQVUsRUFBQztvQkFDNUIsT0FBTzt3QkFDSEMsS0FBSzt3QkFDTEMsUUFBUTt3QkFDUkMsU0FBUzs0QkFDTEMsZUFBZ0JDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO3dCQUNoRDt3QkFDQUMsTUFBTTs0QkFDRkMsTUFBTTs0QkFDTkMsT0FBT1g7NEJBQ1BZLFFBQVE7NEJBQ1JDLGFBQWFaO3dCQUNqQjtvQkFDSjtnQkFDSjtnQkFDQWEsaUJBQWlCO29CQUFDO2lCQUFPO1lBQzdCO1lBRUFDLFVBQVVuQixRQUFRRyxLQUFLLENBQWdCO2dCQUNuQ0EsT0FBTyxJQUFNO29CQUNULE9BQU87d0JBQ0hHLEtBQU07d0JBQ05DLFFBQVE7d0JBQ1JDLFNBQVM7NEJBQ0xDLGVBQWdCQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQzt3QkFDaEQ7b0JBQ0o7Z0JBQ0o7Z0JBQ0FRLGNBQWM7b0JBQUM7aUJBQU87WUFDMUI7WUFFQUMsZUFBZXJCLFFBQVFHLEtBQUssQ0FBZ0I7Z0JBQ3hDQSxPQUFPLElBQU07b0JBQ1QsT0FBTzt3QkFDSEcsS0FBTTt3QkFDTkMsUUFBUTtvQkFDWjtnQkFDSjtZQUNKO1lBRUFlLGFBQWF0QixRQUFRRyxLQUFLLENBQTBCO2dCQUNoREEsT0FBTyxTQUFVO3dCQUFULEVBQUNvQixHQUFFLEVBQUM7b0JBQ1IsT0FBTzt3QkFDSGpCLEtBQUssVUFBYSxPQUFIaUI7d0JBQ2ZoQixRQUFRO3dCQUNSQyxTQUFTOzRCQUNMQyxlQUFnQkMsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7d0JBQ2hEO29CQUNKO2dCQUNKO1lBQ0o7WUFFQVksZ0JBQWdCeEIsUUFBUUUsUUFBUSxDQUFDO2dCQUM3QkMsT0FBTyxTQUFzQjt3QkFBckIsRUFBQ3NCLEtBQUksRUFBRUMsU0FBUSxFQUFDO29CQUNwQkMsUUFBUUMsR0FBRyxDQUFDSCxNQUFNQztvQkFDbEIsT0FBTzt3QkFDSHBCLEtBQUssVUFBa0IsT0FBUnVCO3dCQUNmdEIsUUFBUTt3QkFDUk0sTUFBTTs0QkFDRkcsUUFBUVU7d0JBQ1o7b0JBQ0o7Z0JBQ0o7WUFDSjtRQUNKO0FBQ0osR0FBRTtBQUVLLE1BQU0sRUFDVEkscUJBQW9CLEVBQ3BCQyxpQkFBZ0IsRUFDaEJDLHNCQUFxQixFQUNyQkMsMEJBQXlCLEVBQ3pCQyxvQkFBbUIsRUFDdEIsR0FBR3hDLFVBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL29yZGVyc0FwaS50cz8yY2NhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeX0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCdcbmltcG9ydCB7IElJbmdyZWRpZW50LCBPcmRlciB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy9hZGRDYXJ0U2xpY2UnXG5cbmludGVyZmFjZSBPcmRlclF1ZXJ5VHlwZSB7XG4gICAgc3VtUHJvZHVjdDogbnVtYmVyXG4gICAgYWRkUHJvZHVjdDogSUluZ3JlZGllbnRbXVxufVxuXG50eXBlIEdldE9yZGVyT25lUXVlcnkgPSB7XG4gICAgaWQ6IHN0cmluZ1xufVxuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NSdcblxuZXhwb3J0IGNvbnN0IG9yZGVyc0FwaSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6ICdvcmRlcnNBcGknLFxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgICAgICBiYXNlVXJsOiBBUElfVVJMLFxuICAgIH0pLFxuICAgIHRhZ1R5cGVzOiBbJ1VzZXInXSxcbiAgICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgICAgICBwb3N0T3JkZXI6IGJ1aWxkZXIubXV0YXRpb248dm9pZCwgT3JkZXJRdWVyeVR5cGU+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoe3N1bVByb2R1Y3QsIGFkZFByb2R1Y3R9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL29yZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgYXMgYW55KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn0LfQsNC60LDQtyAxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzdW1Qcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnaW4gcHJlcGFyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudHM6IGFkZFByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmFsaWRhdGVzVGFnczogWydVc2VyJ10sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGdldE9yZGVyOiBidWlsZGVyLnF1ZXJ5PE9yZGVyW10sIHZvaWQ+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL29yZGVyL3VzZXJgLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIGFzIGFueSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbJ1VzZXInXSxcbiAgICAgICAgfSksXG4gICAgICAgIFxuICAgICAgICBnZXRBZG1pbk9yZGVyOiBidWlsZGVyLnF1ZXJ5PE9yZGVyW10sIHZvaWQ+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL29yZGVyYCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcblxuICAgICAgICBnZXRPbmVPcmRlcjogYnVpbGRlci5xdWVyeTxPcmRlciwgR2V0T3JkZXJPbmVRdWVyeT4oe1xuICAgICAgICAgICAgcXVlcnk6ICh7aWR9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL29yZGVyLyR7aWR9YCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSBhcyBhbnkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcblxuICAgICAgICB1cGRhdGVTdGF0dXNJZDogYnVpbGRlci5tdXRhdGlvbih7XG4gICAgICAgICAgICBxdWVyeTogKHtkYXRhLCBzdGF0dXNJZH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCBzdGF0dXNJZClcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvb3JkZXIvJHtvcmRlcklkfWAsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59KVxuXG5leHBvcnQgY29uc3Qge1xuICAgIHVzZVBvc3RPcmRlck11dGF0aW9uLCBcbiAgICB1c2VHZXRPcmRlclF1ZXJ5LCBcbiAgICB1c2VHZXRBZG1pbk9yZGVyUXVlcnksXG4gICAgdXNlVXBkYXRlU3RhdHVzSWRNdXRhdGlvbixcbiAgICB1c2VHZXRPbmVPcmRlclF1ZXJ5XG59ID0gb3JkZXJzQXBpIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiQVBJX1VSTCIsIm9yZGVyc0FwaSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsInBvc3RPcmRlciIsIm11dGF0aW9uIiwicXVlcnkiLCJzdW1Qcm9kdWN0IiwiYWRkUHJvZHVjdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJuYW1lIiwicHJpY2UiLCJzdGF0dXMiLCJpbmdyZWRpZW50cyIsImludmFsaWRhdGVzVGFncyIsImdldE9yZGVyIiwicHJvdmlkZXNUYWdzIiwiZ2V0QWRtaW5PcmRlciIsImdldE9uZU9yZGVyIiwiaWQiLCJ1cGRhdGVTdGF0dXNJZCIsImRhdGEiLCJzdGF0dXNJZCIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcklkIiwidXNlUG9zdE9yZGVyTXV0YXRpb24iLCJ1c2VHZXRPcmRlclF1ZXJ5IiwidXNlR2V0QWRtaW5PcmRlclF1ZXJ5IiwidXNlVXBkYXRlU3RhdHVzSWRNdXRhdGlvbiIsInVzZUdldE9uZU9yZGVyUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/ordersApi.ts\n"));

/***/ })

});