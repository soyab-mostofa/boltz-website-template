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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/.pnpm/react-icons@4.3.1_react@18.1.0/node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/.pnpm/tailwind-styled-components@2.1.7_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"text-neutral-50 text-center text-4xl font-bold mb-8 \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar H1 = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1(_templateObject());\n_c = H1;\nvar pricingData = [\n    {\n        tier: \"personal\",\n        target: \"Special first packer for all\",\n        price: \"8\",\n        features: [\n            \"Upto 5 page each group\",\n            \"Upto 10 group page\",\n            \"5 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    },\n    {\n        tier: \"regular\",\n        target: \"Recommended for personal pro\",\n        price: \"20\",\n        features: [\n            \"Upto 15 page each group\",\n            \"Upto 10 group page\",\n            \"Download page up to 20 page\",\n            \"15 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    },\n    {\n        tier: \"premium\",\n        target: \"packet for startup company\",\n        price: \"48\",\n        features: [\n            \"Unlimited group pages\",\n            \"Unlimited download page\",\n            \"Unlimited page each group\",\n            \"Customize sorting group pages\",\n            \"Customize group page name\",\n            \"30 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    }, \n];\nvar renderCards = pricingData.map(function(card, i) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(i === 1 ? \"bg-primary\" : \"bg-neutral-50\", \" rounded-2xl p-4 text-sm sm:flex-1 \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl font-semibold uppercase\",\n                children: card.tier\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: card.target\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-2xl\",\n                                children: [\n                                    \" $\",\n                                    card.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            \"/month\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    card.features.map(function(feature) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"inline-flex flex-row gap-2 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineCheck, {}, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this1),\n                                feature\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-6 py-2 mx-auto font-semibold max-w-fit bg-neutral-900 text-neutral-50 rounded-xl \",\n                children: card.btnText\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, i, true, {\n        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n});\nvar Pricing = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2 py-12 bg-neutral-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(H1, {\n                children: \"Get your best deal\"\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"toggleB\",\n                    className: \"flex items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-3 font-medium text-gray-50\",\n                            children: \"Monthly\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"toggleB\",\n                                    className: \"sr-only\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"block h-8 rounded-full bg-gray-50 w-14\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute w-6 h-6 transition rounded-full bg-green-2 dot left-1 top-1\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-3 font-medium text-gray-700\",\n                            children: \"Yearly\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 px-8 mt-8 sm:flex-row\",\n                children: renderCards\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Pricing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pricing);\nvar _c, _c1;\n$RefreshReg$(_c, \"H1\");\n$RefreshReg$(_c1, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtzQ0FBQyxTQUFPOzs7OztpQ0FBTTtzQ0FDNUQsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxVQUFVOzs4Q0FDdkIsOERBQUNTLE9BQUs7b0NBQUNDLElBQUksRUFBQyxVQUFVO29DQUFDQyxFQUFFLEVBQUMsU0FBUztvQ0FBQ1gsU0FBUyxFQUFDLFNBQVM7Ozs7O3lDQUFHOzhDQUMxRCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs7Ozs7eUNBQU87OENBQzlELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsc0VBQXNFOzs7Ozt5Q0FBTzs7Ozs7O2lDQUN4RjtzQ0FDTiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdDQUFnQztzQ0FBQyxRQUFNOzs7OztpQ0FBTTs7Ozs7O3lCQUN0RDs7Ozs7cUJBQ0o7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQ0FBMkM7MEJBQ3ZETCxXQUFXOzs7OztxQkFDUjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBckJLVyxNQUFBQSxPQUFPO0FBdUJiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljaW5nLnRzeD84MDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZlYXR1cmVzIH0gZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFpT3V0bGluZUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLXN0eWxlZC1jb21wb25lbnRzXCI7XG5jb25zdCBIMSA9IHR3LmgxYHRleHQtbmV1dHJhbC01MCB0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgbWItOCBcbmA7XG5cbmNvbnN0IHByaWNpbmdEYXRhID0gW1xuICB7XG4gICAgdGllcjogXCJwZXJzb25hbFwiLFxuICAgIHRhcmdldDogXCJTcGVjaWFsIGZpcnN0IHBhY2tlciBmb3IgYWxsXCIsXG4gICAgcHJpY2U6IFwiOFwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIlVwdG8gNSBwYWdlIGVhY2ggZ3JvdXBcIixcbiAgICAgIFwiVXB0byAxMCBncm91cCBwYWdlXCIsXG4gICAgICBcIjUgRGF5cyBncm91cCBwYWdlIHNhdmVkXCIsXG4gICAgXSxcbiAgICBidG5UZXh0OiBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcbiAgfSxcbiAge1xuICAgIHRpZXI6IFwicmVndWxhclwiLFxuICAgIHRhcmdldDogXCJSZWNvbW1lbmRlZCBmb3IgcGVyc29uYWwgcHJvXCIsXG4gICAgcHJpY2U6IFwiMjBcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJVcHRvIDE1IHBhZ2UgZWFjaCBncm91cFwiLFxuICAgICAgXCJVcHRvIDEwIGdyb3VwIHBhZ2VcIixcbiAgICAgIFwiRG93bmxvYWQgcGFnZSB1cCB0byAyMCBwYWdlXCIsXG4gICAgICBcIjE1IERheXMgZ3JvdXAgcGFnZSBzYXZlZFwiLFxuICAgIF0sXG4gICAgYnRuVGV4dDogXCJTdGFydCBGcmVlIFRyaWFsXCIsXG4gIH0sXG4gIHtcbiAgICB0aWVyOiBcInByZW1pdW1cIixcbiAgICB0YXJnZXQ6IFwicGFja2V0IGZvciBzdGFydHVwIGNvbXBhbnlcIixcbiAgICBwcmljZTogXCI0OFwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIlVubGltaXRlZCBncm91cCBwYWdlc1wiLFxuICAgICAgXCJVbmxpbWl0ZWQgZG93bmxvYWQgcGFnZVwiLFxuICAgICAgXCJVbmxpbWl0ZWQgcGFnZSBlYWNoIGdyb3VwXCIsXG4gICAgICBcIkN1c3RvbWl6ZSBzb3J0aW5nIGdyb3VwIHBhZ2VzXCIsXG4gICAgICBcIkN1c3RvbWl6ZSBncm91cCBwYWdlIG5hbWVcIixcbiAgICAgIFwiMzAgRGF5cyBncm91cCBwYWdlIHNhdmVkXCIsXG4gICAgXSxcbiAgICBidG5UZXh0OiBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcbiAgfSxcbl07XG5cbmNvbnN0IHJlbmRlckNhcmRzID0gcHJpY2luZ0RhdGEubWFwKChjYXJkLCBpKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpfVxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgaSA9PT0gMSA/IFwiYmctcHJpbWFyeVwiIDogXCJiZy1uZXV0cmFsLTUwXCJcbiAgICAgIH0gcm91bmRlZC0yeGwgcC00IHRleHQtc20gc206ZmxleC0xIGB9XG4gICAgPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj57Y2FyZC50aWVyfTwvaDM+XG4gICAgICA8cD57Y2FyZC50YXJnZXR9PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHktNlwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPiAke2NhcmQucHJpY2V9PC9zcGFuPi9tb250aFxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2NhcmQuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGZsZXgtcm93IGdhcC0yIG10LTJcIj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZUNoZWNrIC8+XG4gICAgICAgICAgICAgIHtmZWF0dXJlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTYgcHktMiBteC1hdXRvIGZvbnQtc2VtaWJvbGQgbWF4LXctZml0IGJnLW5ldXRyYWwtOTAwIHRleHQtbmV1dHJhbC01MCByb3VuZGVkLXhsIFwiPlxuICAgICAgICB7Y2FyZC5idG5UZXh0fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuY29uc3QgUHJpY2luZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHktMTIgYmctbmV1dHJhbC05MDBcIj5cbiAgICAgIDxIMT5HZXQgeW91ciBiZXN0IGRlYWw8L0gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZUJcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTBcIj5Nb250aGx5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG9nZ2xlQlwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBoLTggcm91bmRlZC1mdWxsIGJnLWdyYXktNTAgdy0xNFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTYgaC02IHRyYW5zaXRpb24gcm91bmRlZC1mdWxsIGJnLWdyZWVuLTIgZG90IGxlZnQtMSB0b3AtMVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+WWVhcmx5PC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBweC04IG10LTggc206ZmxleC1yb3dcIj5cbiAgICAgICAge3JlbmRlckNhcmRzfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWlPdXRsaW5lQ2hlY2siLCJ0dyIsIkgxIiwiaDEiLCJwcmljaW5nRGF0YSIsInRpZXIiLCJ0YXJnZXQiLCJwcmljZSIsImZlYXR1cmVzIiwiYnRuVGV4dCIsInJlbmRlckNhcmRzIiwibWFwIiwiY2FyZCIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJzcGFuIiwiZmVhdHVyZSIsImJ1dHRvbiIsIlByaWNpbmciLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pricing.tsx\n");

/***/ })

});