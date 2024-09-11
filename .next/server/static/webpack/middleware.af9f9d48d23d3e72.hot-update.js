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

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\",\n    \"/profile(.*)\",\n    \"/api/assistant/create(.*)\",\n    \"/api/thread(.*)\",\n    \"/api/message/create(.*)\",\n    \"/api/message/list(.*)\",\n    \"/api/run/create(.*)\",\n    \"/api/run/retrieve(.*)\",\n    \"/api/openai(.*)\",\n    \"/api/subscription(.*)\",\n    \"/api/challenge-users(.*)\",\n    \"/api/send-notifications(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n    }\n}));\nconst config = {\n    matcher: [\n        \"/((?!.*\\\\..*|_next).*)\",\n        \"/\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQ3ZDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0M7QUFFSCxpRUFBZUQscUVBQWVBLENBQUMsQ0FBQ0csTUFBTUM7SUFDcEMsSUFBRyxDQUFDRixjQUFjRSxVQUFVO1FBQzFCRCxPQUFPRSxPQUFPO0lBQ2hCO0FBQ0YsRUFBRSxFQUFDO0FBRUksTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO1FBQTBCO1FBQUs7S0FBa0I7QUFDN0QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlLCBjcmVhdGVSb3V0ZU1hdGNoZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcblxuY29uc3QgaXNQdWJsaWNSb3V0ZSA9IGNyZWF0ZVJvdXRlTWF0Y2hlcihbXG4gICcvc2lnbi1pbiguKiknLCBcbiAgJy9zaWduLXVwKC4qKScsXG4gICcvcHJvZmlsZSguKiknLFxuICAnL2FwaS9hc3Npc3RhbnQvY3JlYXRlKC4qKScsXG4gICcvYXBpL3RocmVhZCguKiknLFxuICAnL2FwaS9tZXNzYWdlL2NyZWF0ZSguKiknLFxuICAnL2FwaS9tZXNzYWdlL2xpc3QoLiopJyxcbiAgJy9hcGkvcnVuL2NyZWF0ZSguKiknLFxuICAnL2FwaS9ydW4vcmV0cmlldmUoLiopJyxcbiAgJy9hcGkvb3BlbmFpKC4qKScsXG4gICcvYXBpL3N1YnNjcmlwdGlvbiguKiknLFxuICAnL2FwaS9jaGFsbGVuZ2UtdXNlcnMoLiopJyxcbiAgXCIvYXBpL3NlbmQtbm90aWZpY2F0aW9ucyguKilcIixcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsZXJrTWlkZGxld2FyZSgoYXV0aCwgcmVxdWVzdCkgPT4ge1xuICBpZighaXNQdWJsaWNSb3V0ZShyZXF1ZXN0KSkge1xuICAgIGF1dGgoKS5wcm90ZWN0KCk7XG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy8oKD8hLipcXFxcLi4qfF9uZXh0KS4qKScsICcvJywgJy8oYXBpfHRycGMpKC4qKSddLFxufTsiXSwibmFtZXMiOlsiY2xlcmtNaWRkbGV3YXJlIiwiY3JlYXRlUm91dGVNYXRjaGVyIiwiaXNQdWJsaWNSb3V0ZSIsImF1dGgiLCJyZXF1ZXN0IiwicHJvdGVjdCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});