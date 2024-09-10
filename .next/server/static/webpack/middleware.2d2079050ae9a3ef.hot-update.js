"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@clerk/nextjs/dist/esm/server/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   API_VERSION: () => (/* binding */ API_VERSION),\n/* harmony export */   CLERK_JS_URL: () => (/* binding */ CLERK_JS_URL),\n/* harmony export */   CLERK_JS_VERSION: () => (/* binding */ CLERK_JS_VERSION),\n/* harmony export */   DOMAIN: () => (/* binding */ DOMAIN),\n/* harmony export */   ENCRYPTION_KEY: () => (/* binding */ ENCRYPTION_KEY),\n/* harmony export */   IS_SATELLITE: () => (/* binding */ IS_SATELLITE),\n/* harmony export */   PROXY_URL: () => (/* binding */ PROXY_URL),\n/* harmony export */   PUBLISHABLE_KEY: () => (/* binding */ PUBLISHABLE_KEY),\n/* harmony export */   SDK_METADATA: () => (/* binding */ SDK_METADATA),\n/* harmony export */   SECRET_KEY: () => (/* binding */ SECRET_KEY),\n/* harmony export */   SIGN_IN_URL: () => (/* binding */ SIGN_IN_URL),\n/* harmony export */   SIGN_UP_URL: () => (/* binding */ SIGN_UP_URL),\n/* harmony export */   TELEMETRY_DEBUG: () => (/* binding */ TELEMETRY_DEBUG),\n/* harmony export */   TELEMETRY_DISABLED: () => (/* binding */ TELEMETRY_DISABLED)\n/* harmony export */ });\n/* harmony import */ var _clerk_shared_apiUrlFromPublishableKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/shared/apiUrlFromPublishableKey */ \"(middleware)/./node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs\");\n/* harmony import */ var _clerk_shared_underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/shared/underscore */ \"(middleware)/./node_modules/@clerk/shared/dist/underscore.mjs\");\n\n\nconst CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || \"\";\nconst CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS_URL || \"\";\nconst API_VERSION = process.env.CLERK_API_VERSION || \"v1\";\nconst SECRET_KEY = process.env.CLERK_SECRET_KEY || \"\";\nconst PUBLISHABLE_KEY = \"pk_test_ZGl2aW5lLXNwaWRlci02MC5jbGVyay5hY2NvdW50cy5kZXYk\" || 0;\nconst ENCRYPTION_KEY = process.env.CLERK_ENCRYPTION_KEY || \"\";\nconst API_URL = process.env.CLERK_API_URL || (0,_clerk_shared_apiUrlFromPublishableKey__WEBPACK_IMPORTED_MODULE_0__.apiUrlFromPublishableKey)(PUBLISHABLE_KEY);\nconst DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || \"\";\nconst PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || \"\";\nconst IS_SATELLITE = (0,_clerk_shared_underscore__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE) || false;\nconst SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || \"\";\nconst SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || \"\";\nconst SDK_METADATA = {\n  name: \"@clerk/nextjs\",\n  version: \"5.4.1\",\n  environment: \"development\"\n};\nconst TELEMETRY_DISABLED = (0,_clerk_shared_underscore__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED);\nconst TELEMETRY_DEBUG = (0,_clerk_shared_underscore__WEBPACK_IMPORTED_MODULE_1__.isTruthy)(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);\n\n//# sourceMappingURL=constants.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL0BjbGVyay9uZXh0anMvZGlzdC9lc20vc2VydmVyL2NvbnN0YW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRjtBQUM5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBNkMsSUFBSSxDQUFFO0FBQzNFO0FBQ0EsNkNBQTZDLGdHQUF3QjtBQUNyRTtBQUNBO0FBQ0EscUJBQXFCLGtFQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQW9CO0FBQ25DO0FBQ0EsMkJBQTJCLGtFQUFRO0FBQ25DLHdCQUF3QixrRUFBUTtBQWlCOUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZXJrL25leHRqcy9kaXN0L2VzbS9zZXJ2ZXIvY29uc3RhbnRzLmpzP2YwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpVXJsRnJvbVB1Ymxpc2hhYmxlS2V5IH0gZnJvbSBcIkBjbGVyay9zaGFyZWQvYXBpVXJsRnJvbVB1Ymxpc2hhYmxlS2V5XCI7XG5pbXBvcnQgeyBpc1RydXRoeSB9IGZyb20gXCJAY2xlcmsvc2hhcmVkL3VuZGVyc2NvcmVcIjtcbmNvbnN0IENMRVJLX0pTX1ZFUlNJT04gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTEVSS19KU19WRVJTSU9OIHx8IFwiXCI7XG5jb25zdCBDTEVSS19KU19VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTEVSS19KU19VUkwgfHwgXCJcIjtcbmNvbnN0IEFQSV9WRVJTSU9OID0gcHJvY2Vzcy5lbnYuQ0xFUktfQVBJX1ZFUlNJT04gfHwgXCJ2MVwiO1xuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkNMRVJLX1NFQ1JFVF9LRVkgfHwgXCJcIjtcbmNvbnN0IFBVQkxJU0hBQkxFX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1BVQkxJU0hBQkxFX0tFWSB8fCBcIlwiO1xuY29uc3QgRU5DUllQVElPTl9LRVkgPSBwcm9jZXNzLmVudi5DTEVSS19FTkNSWVBUSU9OX0tFWSB8fCBcIlwiO1xuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LkNMRVJLX0FQSV9VUkwgfHwgYXBpVXJsRnJvbVB1Ymxpc2hhYmxlS2V5KFBVQkxJU0hBQkxFX0tFWSk7XG5jb25zdCBET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTEVSS19ET01BSU4gfHwgXCJcIjtcbmNvbnN0IFBST1hZX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1BST1hZX1VSTCB8fCBcIlwiO1xuY29uc3QgSVNfU0FURUxMSVRFID0gaXNUcnV0aHkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfSVNfU0FURUxMSVRFKSB8fCBmYWxzZTtcbmNvbnN0IFNJR05fSU5fVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfU0lHTl9JTl9VUkwgfHwgXCJcIjtcbmNvbnN0IFNJR05fVVBfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfU0lHTl9VUF9VUkwgfHwgXCJcIjtcbmNvbnN0IFNES19NRVRBREFUQSA9IHtcbiAgbmFtZTogXCJAY2xlcmsvbmV4dGpzXCIsXG4gIHZlcnNpb246IFwiNS40LjFcIixcbiAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59O1xuY29uc3QgVEVMRU1FVFJZX0RJU0FCTEVEID0gaXNUcnV0aHkocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xFUktfVEVMRU1FVFJZX0RJU0FCTEVEKTtcbmNvbnN0IFRFTEVNRVRSWV9ERUJVRyA9IGlzVHJ1dGh5KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1RFTEVNRVRSWV9ERUJVRyk7XG5leHBvcnQge1xuICBBUElfVVJMLFxuICBBUElfVkVSU0lPTixcbiAgQ0xFUktfSlNfVVJMLFxuICBDTEVSS19KU19WRVJTSU9OLFxuICBET01BSU4sXG4gIEVOQ1JZUFRJT05fS0VZLFxuICBJU19TQVRFTExJVEUsXG4gIFBST1hZX1VSTCxcbiAgUFVCTElTSEFCTEVfS0VZLFxuICBTREtfTUVUQURBVEEsXG4gIFNFQ1JFVF9LRVksXG4gIFNJR05fSU5fVVJMLFxuICBTSUdOX1VQX1VSTCxcbiAgVEVMRU1FVFJZX0RFQlVHLFxuICBURUxFTUVUUllfRElTQUJMRURcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/constants.js\n");

/***/ })

});