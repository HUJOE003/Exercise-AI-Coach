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
exports.id = "app/api/subscription/route";
exports.ids = ["app/api/subscription/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription%2Froute&page=%2Fapi%2Fsubscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription%2Froute.ts&appDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription%2Froute&page=%2Fapi%2Fsubscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription%2Froute.ts&appDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_Hujoe_Documents_Exercise_web_app_Exercise_AI_Coach_app_api_subscription_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/subscription/route.ts */ \"(rsc)/./app/api/subscription/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/subscription/route\",\n        pathname: \"/api/subscription\",\n        filename: \"route\",\n        bundlePath: \"app/api/subscription/route\"\n    },\n    resolvedPagePath: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/api/subscription/route.ts\",\n    nextConfigOutput,\n    userland: _Users_Hujoe_Documents_Exercise_web_app_Exercise_AI_Coach_app_api_subscription_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/subscription/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJzY3JpcHRpb24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1YnNjcmlwdGlvbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1YnNjcmlwdGlvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRl9fSHVqb2VfXyUyRkRvY3VtZW50cyUyRkV4ZXJjaXNlJTIwd2ViJTIwYXBwJTJGRXhlcmNpc2UtQUktQ29hY2glMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGX19IdWpvZV9fJTJGRG9jdW1lbnRzJTJGRXhlcmNpc2UlMjB3ZWIlMjBhcHAlMkZFeGVyY2lzZS1BSS1Db2FjaCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMkM7QUFDeEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWpvZS1haS1jb2FjaC8/MWE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvX19IdWpvZV9fL0RvY3VtZW50cy9FeGVyY2lzZSB3ZWIgYXBwL0V4ZXJjaXNlLUFJLUNvYWNoL2FwcC9hcGkvc3Vic2NyaXB0aW9uL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdWJzY3JpcHRpb24vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdWJzY3JpcHRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N1YnNjcmlwdGlvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9fX0h1am9lX18vRG9jdW1lbnRzL0V4ZXJjaXNlIHdlYiBhcHAvRXhlcmNpc2UtQUktQ29hY2gvYXBwL2FwaS9zdWJzY3JpcHRpb24vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3N1YnNjcmlwdGlvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription%2Froute&page=%2Fapi%2Fsubscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription%2Froute.ts&appDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/subscription/route.ts":
/*!***************************************!*\
  !*** ./app/api/subscription/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(rsc)/./lib/prismadb.ts\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(request) {\n    const user = await (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_2__.currentUser)();\n    if (!user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: false,\n            messages: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const { endpoint, keys } = await request.json();\n    if (!endpoint || !keys) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: false,\n            messages: \"Invalid request\"\n        }, {\n            status: 400\n        });\n    }\n    const existingUserMeta = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userMeta.findUnique({\n        where: {\n            userId: user.id\n        }\n    });\n    console.log(\"existingUserMeta\", existingUserMeta);\n    try {\n        if (existingUserMeta) {\n            await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userMeta.update({\n                where: {\n                    userId: user.id\n                },\n                data: {\n                    endpoint,\n                    p256dh: keys.p256dh,\n                    auth: keys.auth\n                }\n            });\n        } else {\n            await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userMeta.create({\n                data: {\n                    userId: user.id,\n                    endpoint,\n                    p256dh: keys.p256dh,\n                    auth: keys.auth\n                }\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(\"error\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: false,\n            message: \"Error creating/updating user meta\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1YnNjcmlwdGlvbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1M7QUFDUjtBQUVwQyxlQUFlRyxLQUFLQyxPQUFnQjtJQUN6QyxNQUFNQyxPQUFPLE1BQU1KLGlFQUFXQTtJQUU5QixJQUFJLENBQUNJLE1BQU07UUFDVCxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1lBQU9DLFVBQVU7UUFBZSxHQUMzQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVAsUUFBUUUsSUFBSTtJQUM3QyxJQUFJLENBQUNJLFlBQVksQ0FBQ0MsTUFBTTtRQUN0QixPQUFPVCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1lBQU9DLFVBQVU7UUFBa0IsR0FDOUM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0lBRUEsTUFBTUcsbUJBQW1CLE1BQU1aLG1EQUFRQSxDQUFDYSxRQUFRLENBQUNDLFVBQVUsQ0FBQztRQUMxREMsT0FBTztZQUFFQyxRQUFRWCxLQUFLWSxFQUFFO1FBQUM7SUFDM0I7SUFFQUMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQlA7SUFFaEMsSUFBSTtRQUNGLElBQUlBLGtCQUFrQjtZQUVwQixNQUFNWixtREFBUUEsQ0FBQ2EsUUFBUSxDQUFDTyxNQUFNLENBQUM7Z0JBQzdCTCxPQUFPO29CQUNMQyxRQUFRWCxLQUFLWSxFQUFFO2dCQUNqQjtnQkFDQUksTUFBTTtvQkFDSlg7b0JBQ0FZLFFBQVFYLEtBQUtXLE1BQU07b0JBQ25CQyxNQUFNWixLQUFLWSxJQUFJO2dCQUNqQjtZQUNGO1FBQ0YsT0FBTztZQUVMLE1BQU12QixtREFBUUEsQ0FBQ2EsUUFBUSxDQUFDVyxNQUFNLENBQUM7Z0JBQzdCSCxNQUFNO29CQUNKTCxRQUFRWCxLQUFLWSxFQUFFO29CQUNmUDtvQkFDQVksUUFBUVgsS0FBS1csTUFBTTtvQkFDbkJDLE1BQU1aLEtBQUtZLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUNBLE9BQU9yQixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBSyxHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM1RCxFQUFFLE9BQU9nQixPQUFPO1FBQ2RQLFFBQVFDLEdBQUcsQ0FBQyxTQUFTTTtRQUNyQixPQUFPdkIscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRUMsU0FBUztZQUFPbUIsU0FBUztRQUFvQyxHQUMvRDtZQUFFakIsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWpvZS1haS1jb2FjaC8uL2FwcC9hcGkvc3Vic2NyaXB0aW9uL3JvdXRlLnRzP2U5Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hZGJcIjtcbmltcG9ydCB7IGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgY3VycmVudFVzZXIoKTtcbiAgXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2VzOiBcIlVuYXV0aG9yaXplZFwiIH0sXG4gICAgICB7IHN0YXR1czogNDAxIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3QgeyBlbmRwb2ludCwga2V5cyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIGlmICghZW5kcG9pbnQgfHwgIWtleXMpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlczogXCJJbnZhbGlkIHJlcXVlc3RcIiB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nVXNlck1ldGEgPSBhd2FpdCBwcmlzbWFkYi51c2VyTWV0YS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJleGlzdGluZ1VzZXJNZXRhXCIsIGV4aXN0aW5nVXNlck1ldGEpO1xuXG4gIHRyeSB7XG4gICAgaWYgKGV4aXN0aW5nVXNlck1ldGEpIHtcbiAgICAgIFxuICAgICAgYXdhaXQgcHJpc21hZGIudXNlck1ldGEudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBlbmRwb2ludCxcbiAgICAgICAgICBwMjU2ZGg6IGtleXMucDI1NmRoLFxuICAgICAgICAgIGF1dGg6IGtleXMuYXV0aFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgYXdhaXQgcHJpc21hZGIudXNlck1ldGEuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgICAgICBlbmRwb2ludCxcbiAgICAgICAgICBwMjU2ZGg6IGtleXMucDI1NmRoLFxuICAgICAgICAgIGF1dGg6IGtleXMuYXV0aFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIGNyZWF0aW5nL3VwZGF0aW5nIHVzZXIgbWV0YVwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYWRiIiwiY3VycmVudFVzZXIiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsInVzZXIiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwic3RhdHVzIiwiZW5kcG9pbnQiLCJrZXlzIiwiZXhpc3RpbmdVc2VyTWV0YSIsInVzZXJNZXRhIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXNlcklkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiZGF0YSIsInAyNTZkaCIsImF1dGgiLCJjcmVhdGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/subscription/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prismadb: () => (/* binding */ prismadb)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prismadb = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prismadb;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFJakIsTUFBTUMsV0FDWEYsZ0JBQWdCRyxNQUFNLElBQ3RCLElBQUlKLHdEQUFZQSxDQUFDO0lBQ2ZLLEtBQ0VDLEtBQXNDLEdBQ2xDO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FDMUIsQ0FBUztBQUNqQixHQUFHO0FBRUwsSUFBSUEsSUFBcUMsRUFBRUwsZ0JBQWdCRyxNQUFNLEdBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVqb2UtYWktY29hY2gvLi9saWIvcHJpc21hZGIudHM/MGUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hZGIgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcbiAgICAgICAgPyBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwid2FyblwiXVxuICAgICAgICA6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYWRiOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hZGIiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/crypto-js","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscription%2Froute&page=%2Fapi%2Fsubscription%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscription%2Froute.ts&appDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2F__Hujoe__%2FDocuments%2FExercise%20web%20app%2FExercise-AI-Coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();