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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/.pnpm/tailwind-styled-components@2.1.7_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"text-neutral-50 text-center text-4xl font-bold mb-8 \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar H1 = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1(_templateObject());\n_c = H1;\nvar pricingData = [\n    {\n        tier: \"personal\",\n        target: \"Special first packer for all\",\n        price: \"8\",\n        features: [\n            \"Upto 5 page each group\",\n            \"Upto 10 group page\",\n            \"5 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    },\n    {\n        tier: \"regular\",\n        target: \"Recommended for personal pro\",\n        price: \"20\",\n        features: [\n            \"Upto 15 page each group\",\n            \"Upto 10 group page\",\n            \"Download page up to 20 page\",\n            \"15 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    },\n    {\n        tier: \"premium\",\n        target: \"packet for startup company\",\n        price: \"48\",\n        features: [\n            \"Unlimited group pages\",\n            \"Unlimited download page\",\n            \"Unlimited page each group\",\n            \"Customize sorting group pages\",\n            \"Customize group page name\",\n            \"30 Days group page saved\", \n        ],\n        btnText: \"Start Free Trial\"\n    }, \n];\nvar renderCards = pricingData.map(function(card, i) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(i === 1 ? \"bg-green-2\" : \"bg-neutral-50\", \" rounded-2xl p-4 text-sm\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl font-semibold uppercase\",\n                children: card.tier\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-4\",\n                children: card.target\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: [\n                            \"$\",\n                            card.price,\n                            \"/month\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    card.features.map(function(feature) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: feature\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 18\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: card.btnText\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, i, true, {\n        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n});\nvar Pricing = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-2 py-12 bg-neutral-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(H1, {\n                children: \"Get your best deal\"\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"toggleB\",\n                    className: \"flex items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-3 font-medium text-gray-50\",\n                            children: \"Monthly\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    id: \"toggleB\",\n                                    className: \"sr-only\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"block h-8 rounded-full bg-gray-50 w-14\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute w-6 h-6 transition rounded-full bg-green-2 dot left-1 top-1\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-3 font-medium text-gray-700\",\n                            children: \"Yearly\"\n                        }, void 0, false, {\n                            fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-8 mt-8 space-y-4\",\n                children: renderCards\n            }, void 0, false, {\n                fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hexatech/Documents/boltz-template/components/Pricing.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Pricing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pricing);\nvar _c, _c1;\n$RefreshReg$(_c, \"H1\");\n$RefreshReg$(_c1, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTOzs7Ozt5Q0FBRzs4Q0FDMUQsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7Ozs7O3lDQUFPOzhDQUM5RCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHNFQUFzRTs7Ozs7eUNBQU87Ozs7OztpQ0FDeEY7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7c0NBQUMsUUFBTTs7Ozs7aUNBQU07Ozs7Ozt5QkFDdEQ7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOzBCQUFFTCxXQUFXOzs7OztxQkFBTzs7Ozs7O2FBQ3BELENBQ047Q0FDSDtBQW5CS1UsTUFBQUEsT0FBTztBQXFCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJpY2luZy50c3g/ODA0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZWF0dXJlcyB9IGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLXN0eWxlZC1jb21wb25lbnRzXCI7XG5jb25zdCBIMSA9IHR3LmgxYHRleHQtbmV1dHJhbC01MCB0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgbWItOCBcbmA7XG5cbmNvbnN0IHByaWNpbmdEYXRhID0gW1xuICB7XG4gICAgdGllcjogXCJwZXJzb25hbFwiLFxuICAgIHRhcmdldDogXCJTcGVjaWFsIGZpcnN0IHBhY2tlciBmb3IgYWxsXCIsXG4gICAgcHJpY2U6IFwiOFwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIlVwdG8gNSBwYWdlIGVhY2ggZ3JvdXBcIixcbiAgICAgIFwiVXB0byAxMCBncm91cCBwYWdlXCIsXG4gICAgICBcIjUgRGF5cyBncm91cCBwYWdlIHNhdmVkXCIsXG4gICAgXSxcbiAgICBidG5UZXh0OiBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcbiAgfSxcbiAge1xuICAgIHRpZXI6IFwicmVndWxhclwiLFxuICAgIHRhcmdldDogXCJSZWNvbW1lbmRlZCBmb3IgcGVyc29uYWwgcHJvXCIsXG4gICAgcHJpY2U6IFwiMjBcIixcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJVcHRvIDE1IHBhZ2UgZWFjaCBncm91cFwiLFxuICAgICAgXCJVcHRvIDEwIGdyb3VwIHBhZ2VcIixcbiAgICAgIFwiRG93bmxvYWQgcGFnZSB1cCB0byAyMCBwYWdlXCIsXG4gICAgICBcIjE1IERheXMgZ3JvdXAgcGFnZSBzYXZlZFwiLFxuICAgIF0sXG4gICAgYnRuVGV4dDogXCJTdGFydCBGcmVlIFRyaWFsXCIsXG4gIH0sXG4gIHtcbiAgICB0aWVyOiBcInByZW1pdW1cIixcbiAgICB0YXJnZXQ6IFwicGFja2V0IGZvciBzdGFydHVwIGNvbXBhbnlcIixcbiAgICBwcmljZTogXCI0OFwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIlVubGltaXRlZCBncm91cCBwYWdlc1wiLFxuICAgICAgXCJVbmxpbWl0ZWQgZG93bmxvYWQgcGFnZVwiLFxuICAgICAgXCJVbmxpbWl0ZWQgcGFnZSBlYWNoIGdyb3VwXCIsXG4gICAgICBcIkN1c3RvbWl6ZSBzb3J0aW5nIGdyb3VwIHBhZ2VzXCIsXG4gICAgICBcIkN1c3RvbWl6ZSBncm91cCBwYWdlIG5hbWVcIixcbiAgICAgIFwiMzAgRGF5cyBncm91cCBwYWdlIHNhdmVkXCIsXG4gICAgXSxcbiAgICBidG5UZXh0OiBcIlN0YXJ0IEZyZWUgVHJpYWxcIixcbiAgfSxcbl07XG5cbmNvbnN0IHJlbmRlckNhcmRzID0gcHJpY2luZ0RhdGEubWFwKChjYXJkLCBpKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpfVxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgaSA9PT0gMSA/IFwiYmctZ3JlZW4tMlwiIDogXCJiZy1uZXV0cmFsLTUwXCJcbiAgICAgIH0gcm91bmRlZC0yeGwgcC00IHRleHQtc21gfVxuICAgID5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+e2NhcmQudGllcn08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPntjYXJkLnRhcmdldH08L3A+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPiR7Y2FyZC5wcmljZX0vbW9udGg8L3A+XG4gICAgICAgIHtjYXJkLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8cD57ZmVhdHVyZX08L3A+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbj57Y2FyZC5idG5UZXh0fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmNvbnN0IFByaWNpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTEyIGJnLW5ldXRyYWwtOTAwXCI+XG4gICAgICA8SDE+R2V0IHlvdXIgYmVzdCBkZWFsPC9IMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGVCXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwXCI+TW9udGhseTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZ2dsZUJcIiBjbGFzc05hbWU9XCJzci1vbmx5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgaC04IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTUwIHctMTRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02IGgtNiB0cmFuc2l0aW9uIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0yIGRvdCBsZWZ0LTEgdG9wLTFcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlllYXJseTwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTggbXQtOCBzcGFjZS15LTRcIj57cmVuZGVyQ2FyZHN9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidHciLCJIMSIsImgxIiwicHJpY2luZ0RhdGEiLCJ0aWVyIiwidGFyZ2V0IiwicHJpY2UiLCJmZWF0dXJlcyIsImJ0blRleHQiLCJyZW5kZXJDYXJkcyIsIm1hcCIsImNhcmQiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiZmVhdHVyZSIsImJ1dHRvbiIsIlByaWNpbmciLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pricing.tsx\n");

/***/ })

});