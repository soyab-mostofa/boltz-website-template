"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pricing.tsx":
/*!********************************!*\
  !*** ./components/Pricing.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/.pnpm/tailwind-styled-components@2.1.7_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"text-neutral-50 text-center text-4xl font-bold mb-8 \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar H1 = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1(_templateObject());\n_c = H1;\nvar pricingData = [\n    {\n        tier: \"personal\",\n        target: \"Special first packer for all\",\n        price: \"8\",\n        features: [\n            \"Upto 5 page each group\",\n            \"Upto 10 group page\",\n            \"5 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    },\n    {\n        tier: \"regular\",\n        target: \"Recommended for personal pro\",\n        price: \"20\",\n        features: [\n            \"Upto 15 page each group\",\n            \"Upto 10 group page\",\n            \"Download page up to 20 page\",\n            \"15 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    },\n    {\n        tier: \"premium\",\n        target: \"packet for startup company\",\n        price: \"48\",\n        features: [\n            \"Unlimited group pages\",\n            \"Unlimited download page\",\n            \"Unlimited page each group\",\n            \"Customize sorting group pages\",\n            \"Customize group page name\",\n            \"30 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    }, \n];\nvar renderCards = pricingData.map(function(card, i) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(i === 1 ? \"bg-green-2\" : \"bg-neutral-50\", \" rounded-2xl p-4 text-sm text-xl\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold uppercase\",\n                children: card.tier\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: card.target\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: card.price\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            card.features.map(function(feature) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: feature\n                }, void 0, false, {\n                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 16\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: card.btnText\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, i, true, {\n        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n});\nvar Pricing = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2 py-12 bg-neutral-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(H1, {\n                children: \"Get your best deal\"\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"toggleB\",\n                    className: \"flex items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-3 font-medium text-gray-50\",\n                            children: \"Monthly\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"toggleB\",\n                                    className: \"sr-only\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"block h-8 rounded-full bg-gray-50 w-14\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute w-6 h-6 transition rounded-full bg-green-2 dot left-1 top-1\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-3 font-medium text-gray-700\",\n                            children: \"Yearly\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-8 mt-8 space-y-4\",\n                children: renderCards\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Pricing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pricing);\nvar _c, _c1;\n$RefreshReg$(_c, \"H1\");\n$RefreshReg$(_c1, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByaWNpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2tCO0FBQzVDLElBQU1FLEVBQUUsR0FBR0Qsb0VBQUssbUJBQ2Y7QUFES0MsS0FBQUEsRUFBRTtBQUdSLElBQU1FLFdBQVcsR0FBRztJQUNsQjtRQUNFQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsTUFBTSxFQUFFLDhCQUE4QjtRQUN0Q0MsS0FBSyxFQUFFLEdBQUc7UUFDVkMsUUFBUSxFQUFFO1lBQ1Isd0JBQXdCO1lBQ3hCLG9CQUFvQjtZQUNwQix5QkFBeUI7U0FDMUI7UUFDREMsT0FBTyxFQUFFLGtCQUFrQjtLQUM1QjtJQUNEO1FBQ0VKLElBQUksRUFBRSxTQUFTO1FBQ2ZDLE1BQU0sRUFBRSw4QkFBOEI7UUFDdENDLEtBQUssRUFBRSxJQUFJO1FBQ1hDLFFBQVEsRUFBRTtZQUNSLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsNkJBQTZCO1lBQzdCLDBCQUEwQjtTQUMzQjtRQUNEQyxPQUFPLEVBQUUsa0JBQWtCO0tBQzVCO0lBQ0Q7UUFDRUosSUFBSSxFQUFFLFNBQVM7UUFDZkMsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQ0MsS0FBSyxFQUFFLElBQUk7UUFDWEMsUUFBUSxFQUFFO1lBQ1IsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QiwyQkFBMkI7WUFDM0IsK0JBQStCO1lBQy9CLDJCQUEyQjtZQUMzQiwwQkFBMEI7U0FDM0I7UUFDREMsT0FBTyxFQUFFLGtCQUFrQjtLQUM1QjtDQUNGO0FBRUQsSUFBTUMsV0FBVyxHQUFHTixXQUFXLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSzs7SUFDL0MscUJBQ0UsOERBQUNDLEtBQUc7UUFFRkMsU0FBUyxFQUFFLEVBQUMsQ0FFWCxNQUFnQyxDQUQvQkYsQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUcsZUFBZSxFQUN6QyxrQ0FBZ0MsQ0FBQzs7MEJBRWxDLDhEQUFDRyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMseUJBQXlCOzBCQUFFSCxJQUFJLENBQUNQLElBQUk7Ozs7O3FCQUFNOzBCQUN4RCw4REFBQ1ksR0FBQzswQkFBRUwsSUFBSSxDQUFDTixNQUFNOzs7OztxQkFBSzswQkFDcEIsOERBQUNXLEdBQUM7MEJBQUVMLElBQUksQ0FBQ0wsS0FBSzs7Ozs7cUJBQUs7WUFDbEJLLElBQUksQ0FBQ0osUUFBUSxDQUFDRyxHQUFHLENBQUMsU0FBQ08sT0FBTyxFQUFLO2dCQUM5QixxQkFBTyw4REFBQ0QsR0FBQzs4QkFBRUMsT0FBTzs7Ozs7MEJBQUssQ0FBQzthQUN6QixDQUFDOzBCQUVGLDhEQUFDQyxRQUFNOzBCQUFFUCxJQUFJLENBQUNILE9BQU87Ozs7O3FCQUFVOztPQVoxQkksQ0FBQzs7OzthQWFGLENBQ047Q0FDSCxDQUFDO0FBRUYsSUFBTU8sT0FBTyxHQUFHLFdBQU07SUFDcEIscUJBQ0UsOERBQUNOLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7MEJBQ3hDLDhEQUFDYixFQUFFOzBCQUFDLG9CQUFrQjs7Ozs7cUJBQUs7MEJBRTNCLDhEQUFDWSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUNBQXlDOzBCQUN0RCw0RUFBQ00sT0FBSztvQkFBQ0MsT0FBTyxFQUFDLFNBQVM7b0JBQUNQLFNBQVMsRUFBQyxrQ0FBa0M7O3NDQUNuRSw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLCtCQUErQjtzQ0FBQyxTQUFPOzs7OztpQ0FBTTtzQ0FDNUQsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxVQUFVOzs4Q0FDdkIsOERBQUNRLE9BQUs7b0NBQUNDLElBQUksRUFBQyxVQUFVO29DQUFDQyxFQUFFLEVBQUMsU0FBUztvQ0FBQ1YsU0FBUyxFQUFDLFNBQVM7Ozs7O3lDQUFHOzhDQUMxRCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs7Ozs7eUNBQU87OENBQzlELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsc0VBQXNFOzs7Ozt5Q0FBTzs7Ozs7O2lDQUN4RjtzQ0FDTiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdDQUFnQztzQ0FBQyxRQUFNOzs7OztpQ0FBTTs7Ozs7O3lCQUN0RDs7Ozs7cUJBQ0o7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7MEJBQUVMLFdBQVc7Ozs7O3FCQUFPOzs7Ozs7YUFDcEQsQ0FDTjtDQUNIO0FBbkJLVSxNQUFBQSxPQUFPO0FBcUJiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nLnRzeD84MDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZlYXR1cmVzIH0gZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQtc3R5bGVkLWNvbXBvbmVudHNcIjtcbmNvbnN0IEgxID0gdHcuaDFgdGV4dC1uZXV0cmFsLTUwIHRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBtYi04IFxuYDtcblxuY29uc3QgcHJpY2luZ0RhdGEgPSBbXG4gIHtcbiAgICB0aWVyOiBcInBlcnNvbmFsXCIsXG4gICAgdGFyZ2V0OiBcIlNwZWNpYWwgZmlyc3QgcGFja2VyIGZvciBhbGxcIixcbiAgICBwcmljZTogXCI4XCIsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIFwiVXB0byA1IHBhZ2UgZWFjaCBncm91cFwiLFxuICAgICAgXCJVcHRvIDEwIGdyb3VwIHBhZ2VcIixcbiAgICAgIFwiNSBEYXlzIGdyb3VwIHBhZ2Ugc2F2ZWRcIixcbiAgICBdLFxuICAgIGJ0blRleHQ6IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxuICB9LFxuICB7XG4gICAgdGllcjogXCJyZWd1bGFyXCIsXG4gICAgdGFyZ2V0OiBcIlJlY29tbWVuZGVkIGZvciBwZXJzb25hbCBwcm9cIixcbiAgICBwcmljZTogXCIyMFwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIlVwdG8gMTUgcGFnZSBlYWNoIGdyb3VwXCIsXG4gICAgICBcIlVwdG8gMTAgZ3JvdXAgcGFnZVwiLFxuICAgICAgXCJEb3dubG9hZCBwYWdlIHVwIHRvIDIwIHBhZ2VcIixcbiAgICAgIFwiMTUgRGF5cyBncm91cCBwYWdlIHNhdmVkXCIsXG4gICAgXSxcbiAgICBidG5UZXh0OiBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcbiAgfSxcbiAge1xuICAgIHRpZXI6IFwicHJlbWl1bVwiLFxuICAgIHRhcmdldDogXCJwYWNrZXQgZm9yIHN0YXJ0dXAgY29tcGFueVwiLFxuICAgIHByaWNlOiBcIjQ4XCIsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIFwiVW5saW1pdGVkIGdyb3VwIHBhZ2VzXCIsXG4gICAgICBcIlVubGltaXRlZCBkb3dubG9hZCBwYWdlXCIsXG4gICAgICBcIlVubGltaXRlZCBwYWdlIGVhY2ggZ3JvdXBcIixcbiAgICAgIFwiQ3VzdG9taXplIHNvcnRpbmcgZ3JvdXAgcGFnZXNcIixcbiAgICAgIFwiQ3VzdG9taXplIGdyb3VwIHBhZ2UgbmFtZVwiLFxuICAgICAgXCIzMCBEYXlzIGdyb3VwIHBhZ2Ugc2F2ZWRcIixcbiAgICBdLFxuICAgIGJ0blRleHQ6IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxuICB9LFxuXTtcblxuY29uc3QgcmVuZGVyQ2FyZHMgPSBwcmljaW5nRGF0YS5tYXAoKGNhcmQsIGkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2l9XG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBpID09PSAxID8gXCJiZy1ncmVlbi0yXCIgOiBcImJnLW5ldXRyYWwtNTBcIlxuICAgICAgfSByb3VuZGVkLTJ4bCBwLTQgdGV4dC1zbSB0ZXh0LXhsYH1cbiAgICA+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj57Y2FyZC50aWVyfTwvaDM+XG4gICAgICA8cD57Y2FyZC50YXJnZXR9PC9wPlxuICAgICAgPHA+e2NhcmQucHJpY2V9PC9wPlxuICAgICAge2NhcmQuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XG4gICAgICAgIHJldHVybiA8cD57ZmVhdHVyZX08L3A+O1xuICAgICAgfSl9XG5cbiAgICAgIDxidXR0b24+e2NhcmQuYnRuVGV4dH08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5jb25zdCBQcmljaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBweS0xMiBiZy1uZXV0cmFsLTkwMFwiPlxuICAgICAgPEgxPkdldCB5b3VyIGJlc3QgZGVhbDwvSDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9nZ2xlQlwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0zIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MFwiPk1vbnRobHk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2dnbGVCXCIgY2xhc3NOYW1lPVwic3Itb25seVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGgtOCByb3VuZGVkLWZ1bGwgYmctZ3JheS01MCB3LTE0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctNiBoLTYgdHJhbnNpdGlvbiByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMiBkb3QgbGVmdC0xIHRvcC0xXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5ZZWFybHk8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC04IG10LTggc3BhY2UteS00XCI+e3JlbmRlckNhcmRzfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInR3IiwiSDEiLCJoMSIsInByaWNpbmdEYXRhIiwidGllciIsInRhcmdldCIsInByaWNlIiwiZmVhdHVyZXMiLCJidG5UZXh0IiwicmVuZGVyQ2FyZHMiLCJtYXAiLCJjYXJkIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsImZlYXR1cmUiLCJidXR0b24iLCJQcmljaW5nIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pricing.tsx\n");

/***/ })

});