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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\",\n    \"/\",\n    \"/profile(.*)\",\n    \"/api/assistant/create(.*)\",\n    \"/api/thread(.*)\",\n    \"/api/message/create(.*)\",\n    \"/api/message/list(.*)\",\n    \"/api/run/create(.*)\",\n    \"/api/run/retrieve(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n    }\n}));\nconst config = {\n    matcher: [\n        \"/((?!.*\\\\..*|_next).*)\",\n        \"/\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQUM7SUFBZ0I7SUFBZTtJQUFJO0lBQWdCO0lBQTRCO0lBQWtCO0lBQTBCO0lBQXdCO0lBQXNCO0NBQXdCO0FBRTNPLGlFQUFlRCxxRUFBZUEsQ0FBQyxDQUFDRyxNQUFNQztJQUNwQyxJQUFHLENBQUNGLGNBQWNFLFVBQVU7UUFDMUJELE9BQU9FLE9BQU87SUFDaEI7QUFDRixFQUFFLEVBQUM7QUFFSSxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7UUFBMEI7UUFBSztLQUFrQjtBQUM3RCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVya01pZGRsZXdhcmUsIGNyZWF0ZVJvdXRlTWF0Y2hlciB9IGZyb20gJ0BjbGVyay9uZXh0anMvc2VydmVyJ1xuXG5jb25zdCBpc1B1YmxpY1JvdXRlID0gY3JlYXRlUm91dGVNYXRjaGVyKFsnL3NpZ24taW4oLiopJywgJy9zaWduLXVwKC4qKScsJy8nLCcvcHJvZmlsZSguKiknLCAnL2FwaS9hc3Npc3RhbnQvY3JlYXRlKC4qKScsJy9hcGkvdGhyZWFkKC4qKScsJy9hcGkvbWVzc2FnZS9jcmVhdGUoLiopJywnL2FwaS9tZXNzYWdlL2xpc3QoLiopJywnL2FwaS9ydW4vY3JlYXRlKC4qKScsJy9hcGkvcnVuL3JldHJpZXZlKC4qKSddKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlcmtNaWRkbGV3YXJlKChhdXRoLCByZXF1ZXN0KSA9PiB7XG4gIGlmKCFpc1B1YmxpY1JvdXRlKHJlcXVlc3QpKSB7XG4gICAgYXV0aCgpLnByb3RlY3QoKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLygoPyEuKlxcXFwuLip8X25leHQpLiopJywgJy8nLCAnLyhhcGl8dHJwYykoLiopJ10sXG59OyJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJpc1B1YmxpY1JvdXRlIiwiYXV0aCIsInJlcXVlc3QiLCJwcm90ZWN0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});