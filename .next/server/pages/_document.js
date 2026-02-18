"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * Sanitize Google Analytics ID to prevent XSS attacks.\n * Only allows valid GA4 (G-XXXXXXXXXX) or Universal Analytics (UA-XXXXXX-X) IDs.\n */ const sanitizeGaId = (gaId)=>{\n    if (!gaId) return null;\n    // GA4 format: G-XXXXXXXXXX (10+ alphanumeric after G-)\n    // UA format: UA-XXXXXXXX-X (numeric with dashes)\n    const ga4Pattern = /^G-[A-Z0-9]{10,}$/;\n    const uaPattern = /^UA-\\d{4,}-\\d{1,}$/;\n    if (ga4Pattern.test(gaId) || uaPattern.test(gaId)) {\n        return gaId;\n    }\n    return null;\n};\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    render() {\n        const gaId = sanitizeGaId(\"xxx\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"google-site-verification\",\n                            content: \"LQKx09sYrr_jVCWjVkP5S1guD6Dzdu93g7CrgbvsTCw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            defer: true,\n                            src: \"https://cloud.umami.is/script.js\",\n                            \"data-website-id\": \"f718f716-0b9e-4164-b3b0-7e65df928f94\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        gaId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                                    async: true,\n                                    src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,\n                                    id: \"site-tag-01\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                                    id: \"site-tag-02\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: `window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${gaId}');`\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    className: \"openthreads\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kahboom/Projects/openthreads.dev/src/pages/_document.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUU7QUFFdkU7OztDQUdDLEdBQ0QsTUFBTUssZUFBZSxDQUFDQztJQUNwQixJQUFJLENBQUNBLE1BQU0sT0FBTztJQUNsQix1REFBdUQ7SUFDdkQsaURBQWlEO0lBQ2pELE1BQU1DLGFBQWE7SUFDbkIsTUFBTUMsWUFBWTtJQUNsQixJQUFJRCxXQUFXRSxJQUFJLENBQUNILFNBQVNFLFVBQVVDLElBQUksQ0FBQ0gsT0FBTztRQUNqRCxPQUFPQTtJQUNUO0lBQ0EsT0FBTztBQUNUO0FBRUEsTUFBTUksbUJBQW1CVixzREFBUUE7SUFDL0JXLFNBQVM7UUFDUCxNQUFNTCxPQUFPRCxhQUFhTyxLQUF3QztRQUVsRSxxQkFDRSw4REFBQ1YsK0NBQUlBO1lBQUNhLE1BQUs7OzhCQUNULDhEQUFDZCwrQ0FBSUE7O3NDQUNILDhEQUFDZTs0QkFDQ0MsTUFBSzs0QkFDTEMsU0FBUTs7Ozs7O3NDQUVWLDhEQUFDQzs0QkFDQ0MsS0FBSzs0QkFDTEMsS0FBSTs0QkFDSkMsbUJBQWdCOzs7Ozs7d0JBR2pCaEIsc0JBQ0M7OzhDQUNFLDhEQUFDYTtvQ0FDQ0ksS0FBSztvQ0FDTEYsS0FBSyxDQUFDLDRDQUE0QyxFQUFFZixLQUFLLENBQUM7b0NBQzFEa0IsSUFBRzs7Ozs7OzhDQUVMLDhEQUFDTDtvQ0FDQ0ssSUFBRztvQ0FDSEMseUJBQXlCO3dDQUN2QkMsUUFBUSxDQUFDOzs7NEJBR0MsRUFBRXBCLEtBQUssR0FBRyxDQUFDO29DQUN2Qjs7Ozs7Ozs7Ozs7Ozs7OEJBS1IsOERBQUNxQjtvQkFBS0MsV0FBVzs7c0NBQ2YsOERBQUN6QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxpRUFBZU0sVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW50aHJlYWRzLy4vc3JjL3BhZ2VzL19kb2N1bWVudC50c3g/MTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuXG4vKipcbiAqIFNhbml0aXplIEdvb2dsZSBBbmFseXRpY3MgSUQgdG8gcHJldmVudCBYU1MgYXR0YWNrcy5cbiAqIE9ubHkgYWxsb3dzIHZhbGlkIEdBNCAoRy1YWFhYWFhYWFhYKSBvciBVbml2ZXJzYWwgQW5hbHl0aWNzIChVQS1YWFhYWFgtWCkgSURzLlxuICovXG5jb25zdCBzYW5pdGl6ZUdhSWQgPSAoZ2FJZDogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmICghZ2FJZCkgcmV0dXJuIG51bGw7XG4gIC8vIEdBNCBmb3JtYXQ6IEctWFhYWFhYWFhYWCAoMTArIGFscGhhbnVtZXJpYyBhZnRlciBHLSlcbiAgLy8gVUEgZm9ybWF0OiBVQS1YWFhYWFhYWC1YIChudW1lcmljIHdpdGggZGFzaGVzKVxuICBjb25zdCBnYTRQYXR0ZXJuID0gL15HLVtBLVowLTldezEwLH0kLztcbiAgY29uc3QgdWFQYXR0ZXJuID0gL15VQS1cXGR7NCx9LVxcZHsxLH0kLztcbiAgaWYgKGdhNFBhdHRlcm4udGVzdChnYUlkKSB8fCB1YVBhdHRlcm4udGVzdChnYUlkKSkge1xuICAgIHJldHVybiBnYUlkO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGdhSWQgPSBzYW5pdGl6ZUdhSWQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJMUUt4MDlzWXJyX2pWQ1dqVmtQNVMxZ3VENkR6ZHU5M2c3Q3JnYnZzVEN3XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRlZmVyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Nsb3VkLnVtYW1pLmlzL3NjcmlwdC5qc1wiXG4gICAgICAgICAgICBkYXRhLXdlYnNpdGUtaWQ9XCJmNzE4ZjcxNi0wYjllLTQxNjQtYjNiMC03ZTY1ZGY5MjhmOTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qPCEtLSBHbG9iYWwgc2l0ZSB0YWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAtLT4qL31cbiAgICAgICAgICB7Z2FJZCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z2FJZH1gfVxuICAgICAgICAgICAgICAgIGlkPVwic2l0ZS10YWctMDFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAgaWQ9XCJzaXRlLXRhZy0wMlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke2dhSWR9Jyk7YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keSBjbGFzc05hbWU9eydvcGVudGhyZWFkcyd9PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcbiJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJIdG1sIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJzYW5pdGl6ZUdhSWQiLCJnYUlkIiwiZ2E0UGF0dGVybiIsInVhUGF0dGVybiIsInRlc3QiLCJNeURvY3VtZW50IiwicmVuZGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MiLCJsYW5nIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Iiwic2NyaXB0IiwiZGVmZXIiLCJzcmMiLCJkYXRhLXdlYnNpdGUtaWQiLCJhc3luYyIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJib2R5IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();