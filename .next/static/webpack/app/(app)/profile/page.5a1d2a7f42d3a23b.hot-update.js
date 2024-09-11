"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/profile/page",{

/***/ "(app-pages-browser)/./components/ProfileContainer.tsx":
/*!*****************************************!*\
  !*** ./components/ProfileContainer.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ui_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/switch */ \"(app-pages-browser)/./components/ui/switch.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// import DifficultyCard from \"./DifficultyCard\";\n\n\nconst difficulties = [\n    {\n        id: \"EASY\",\n        level: \"Easy\",\n        description: \"This challenge level is for people who are new to programming. Receive 3 challenges per day (7:30AM, 12PM, & 5:30PM EST).\"\n    },\n    {\n        id: \"MEDIUM\",\n        level: \"Medium\",\n        description: \"This challenge level is for people who are familiar with programming. Receive 4 challenges per day (7AM, 12PM, 5PM, & 8PM EST).\"\n    },\n    {\n        id: \"HARD\",\n        level: \"Hard\",\n        description: \"This challenge level is for people who are experienced with programming. Receive 5 challenges per day (6AM, 9AM, 12PM, 5PM, & 8PM EST).\"\n    }\n];\nfunction ProfileContainer(param) {\n    let { challengePreferences } = param;\n    _s();\n    const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedDifficulty, setSelectedDifficulty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(challengePreferences.challengeId);\n    const [sendNotifications, setSendNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(challengePreferences.sendNotifications);\n    const handleToggleNotifications = ()=>{\n        setSendNotifications((prev)=>!prev);\n    };\n    const handleSelectDifficulty = (difficultyId)=>{\n        setSelectedDifficulty(difficultyId);\n    };\n    const handleSave = async ()=>{\n        setSaving(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/challenge-preferences\", {\n                id: challengePreferences.id,\n                challengeId: selectedDifficulty,\n                sendNotifications\n            });\n            if (!response.data.success || !response.data.data) {\n                var _response_data_message;\n                console.error((_response_data_message = response.data.message) !== null && _response_data_message !== void 0 ? _response_data_message : \"Something went wrong\");\n                var _response_data_message1;\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error((_response_data_message1 = response.data.message) !== null && _response_data_message1 !== void 0 ? _response_data_message1 : \"Something went wrong\");\n                return;\n            }\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Preferences saved!\");\n        } catch (error) {\n            console.error(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Something went wrong. Please try again.\");\n        } finally{\n            setSaving(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-2xl\",\n                        children: \"Challenge Level\"\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: handleSave,\n                        children: saving ? \"Saving...\" : \"Save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex flex-row items-center justify-between mb-4 p-4 shadow rounded-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-medium text-lg  text-gray-900 \",\n                                children: \"Push Notifications\"\n                            }, void 0, false, {\n                                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Receive push notifications when new challenges are available.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_switch__WEBPACK_IMPORTED_MODULE_3__.Switch, {\n                        checked: sendNotifications,\n                        onCheckedChange: handleToggleNotifications\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-col-1 md:grid-cols-3 gap-4\"\n            }, void 0, false, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/components/ProfileContainer.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfileContainer, \"kybPs9tNX2FPxyxCQilJ+lNaHOE=\");\n_c = ProfileContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileContainer);\nvar _c;\n$RefreshReg$(_c, \"ProfileContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUd3QztBQUNIO0FBQ0E7QUFDckMsaURBQWlEO0FBQ3ZCO0FBQ1U7QUFFcEMsTUFBTU0sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7Q0FDRDtBQVFELFNBQVNDLGlCQUFpQixLQUErQztRQUEvQyxFQUFFQyxvQkFBb0IsRUFBeUIsR0FBL0M7O0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLG9CQUFvQkMsc0JBQXNCLEdBQUdkLCtDQUFRQSxDQUMxRFUscUJBQXFCSyxXQUFXO0lBRWxDLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2pCLCtDQUFRQSxDQUN4RFUscUJBQXFCTSxpQkFBaUI7SUFHeEMsTUFBTUUsNEJBQTRCO1FBQ2hDRCxxQkFBcUIsQ0FBQ0UsT0FBUyxDQUFDQTtJQUNsQztJQUVBLE1BQU1DLHlCQUF5QixDQUFDQztRQUM5QlAsc0JBQXNCTztJQUN4QjtJQUVBLE1BQU1DLGFBQWE7UUFDakJWLFVBQVU7UUFDVixJQUFJO1lBQ0YsTUFBTVcsV0FBVyxNQUFNcEIsNkNBQUtBLENBQUNxQixJQUFJLENBSTlCLDhCQUE4QjtnQkFDL0JsQixJQUFJSSxxQkFBcUJKLEVBQUU7Z0JBQzNCUyxhQUFhRjtnQkFDYkc7WUFDRjtZQUVBLElBQUksQ0FBQ08sU0FBU0UsSUFBSSxDQUFDQyxPQUFPLElBQUksQ0FBQ0gsU0FBU0UsSUFBSSxDQUFDQSxJQUFJLEVBQUU7b0JBQ25DRjtnQkFBZEksUUFBUUMsS0FBSyxDQUFDTCxDQUFBQSx5QkFBQUEsU0FBU0UsSUFBSSxDQUFDSSxPQUFPLGNBQXJCTixvQ0FBQUEseUJBQXlCO29CQUMzQkE7Z0JBQVpuQix1REFBS0EsQ0FBQ3dCLEtBQUssQ0FBQ0wsQ0FBQUEsMEJBQUFBLFNBQVNFLElBQUksQ0FBQ0ksT0FBTyxjQUFyQk4scUNBQUFBLDBCQUF5QjtnQkFDckM7WUFDRjtZQUVBbkIsdURBQUtBLENBQUNzQixPQUFPLENBQUM7UUFDaEIsRUFBRSxPQUFPRSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQ0E7WUFDZHhCLHVEQUFLQSxDQUFDd0IsS0FBSyxDQUFDO1FBQ2QsU0FBVTtZQUNSaEIsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFxQjs7Ozs7O2tDQUNuQyw4REFBQzlCLDhDQUFNQTt3QkFBQ2dDLFNBQVNYO2tDQUFhWCxTQUFTLGNBQWM7Ozs7Ozs7Ozs7OzswQkFFdkQsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQXNDOzs7Ozs7MENBR3BELDhEQUFDSTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVMLDhEQUFDakMsOENBQU1BO3dCQUNMa0MsU0FBU3BCO3dCQUNUcUIsaUJBQWlCbkI7Ozs7Ozs7Ozs7OzswQkFHckIsOERBQUNZO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFlckI7R0E5RVN0QjtLQUFBQTtBQWdGVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lci50c3g/MDkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQ2hhbGxlbmdlUHJlZmVyZW5jZXMgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiLi91aS9zd2l0Y2hcIjtcbi8vIGltcG9ydCBEaWZmaWN1bHR5Q2FyZCBmcm9tIFwiLi9EaWZmaWN1bHR5Q2FyZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuY29uc3QgZGlmZmljdWx0aWVzID0gW1xuICB7XG4gICAgaWQ6IFwiRUFTWVwiLFxuICAgIGxldmVsOiBcIkVhc3lcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBjaGFsbGVuZ2UgbGV2ZWwgaXMgZm9yIHBlb3BsZSB3aG8gYXJlIG5ldyB0byBwcm9ncmFtbWluZy4gUmVjZWl2ZSAzIGNoYWxsZW5nZXMgcGVyIGRheSAoNzozMEFNLCAxMlBNLCAmIDU6MzBQTSBFU1QpLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiTUVESVVNXCIsXG4gICAgbGV2ZWw6IFwiTWVkaXVtXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgY2hhbGxlbmdlIGxldmVsIGlzIGZvciBwZW9wbGUgd2hvIGFyZSBmYW1pbGlhciB3aXRoIHByb2dyYW1taW5nLiBSZWNlaXZlIDQgY2hhbGxlbmdlcyBwZXIgZGF5ICg3QU0sIDEyUE0sIDVQTSwgJiA4UE0gRVNUKS5cIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIkhBUkRcIixcbiAgICBsZXZlbDogXCJIYXJkXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgY2hhbGxlbmdlIGxldmVsIGlzIGZvciBwZW9wbGUgd2hvIGFyZSBleHBlcmllbmNlZCB3aXRoIHByb2dyYW1taW5nLiBSZWNlaXZlIDUgY2hhbGxlbmdlcyBwZXIgZGF5ICg2QU0sIDlBTSwgMTJQTSwgNVBNLCAmIDhQTSBFU1QpLlwiLFxuICB9LFxuXTtcblxudHlwZSBEaWZmaWN1bHRpZXMgPSBcIkVBU1lcIiB8IFwiTUVESVVNXCIgfCBcIkhBUkRcIjtcblxuaW50ZXJmYWNlIFByb2ZpbGVDb250YWluZXJQcm9wcyB7XG4gIGNoYWxsZW5nZVByZWZlcmVuY2VzOiBDaGFsbGVuZ2VQcmVmZXJlbmNlcztcbn1cblxuZnVuY3Rpb24gUHJvZmlsZUNvbnRhaW5lcih7IGNoYWxsZW5nZVByZWZlcmVuY2VzIH06IFByb2ZpbGVDb250YWluZXJQcm9wcykge1xuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWREaWZmaWN1bHR5LCBzZXRTZWxlY3RlZERpZmZpY3VsdHldID0gdXNlU3RhdGUoXG4gICAgY2hhbGxlbmdlUHJlZmVyZW5jZXMuY2hhbGxlbmdlSWRcbiAgKTtcbiAgY29uc3QgW3NlbmROb3RpZmljYXRpb25zLCBzZXRTZW5kTm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBjaGFsbGVuZ2VQcmVmZXJlbmNlcy5zZW5kTm90aWZpY2F0aW9uc1xuICApO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZU5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gICAgc2V0U2VuZE5vdGlmaWNhdGlvbnMoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3REaWZmaWN1bHR5ID0gKGRpZmZpY3VsdHlJZDogRGlmZmljdWx0aWVzKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWREaWZmaWN1bHR5KGRpZmZpY3VsdHlJZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdDx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGRhdGE/OiBDaGFsbGVuZ2VQcmVmZXJlbmNlcztcbiAgICAgICAgbWVzc2FnZT86IHN0cmluZztcbiAgICAgIH0+KFwiL2FwaS9jaGFsbGVuZ2UtcHJlZmVyZW5jZXNcIiwge1xuICAgICAgICBpZDogY2hhbGxlbmdlUHJlZmVyZW5jZXMuaWQsXG4gICAgICAgIGNoYWxsZW5nZUlkOiBzZWxlY3RlZERpZmZpY3VsdHksXG4gICAgICAgIHNlbmROb3RpZmljYXRpb25zLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5zdWNjZXNzIHx8ICFyZXNwb25zZS5kYXRhLmRhdGEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPz8gXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZGF0YS5tZXNzYWdlID8/IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlByZWZlcmVuY2VzIHNhdmVkIVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj5DaGFsbGVuZ2UgTGV2ZWw8L2gxPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PntzYXZpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9PC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00IHAtNCBzaGFkb3cgcm91bmRlZC1sZyBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xMFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWxnICB0ZXh0LWdyYXktOTAwIFwiPlxuICAgICAgICAgICAgUHVzaCBOb3RpZmljYXRpb25zXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cD5SZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucyB3aGVuIG5ldyBjaGFsbGVuZ2VzIGFyZSBhdmFpbGFibGUuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIGNoZWNrZWQ9e3NlbmROb3RpZmljYXRpb25zfVxuICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17aGFuZGxlVG9nZ2xlTm90aWZpY2F0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29sLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgey8qIHtkaWZmaWN1bHRpZXMubWFwKChkaWZmaWN1bHR5KSA9PiAoXG4gICAgICAgICAgPERpZmZpY3VsdHlDYXJkXG4gICAgICAgICAgICBrZXk9e2RpZmZpY3VsdHkuaWR9XG4gICAgICAgICAgICBsZXZlbD17ZGlmZmljdWx0eS5sZXZlbH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkaWZmaWN1bHR5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2RpZmZpY3VsdHkuaWQgPT09IHNlbGVjdGVkRGlmZmljdWx0eX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PlxuICAgICAgICAgICAgICBoYW5kbGVTZWxlY3REaWZmaWN1bHR5KGRpZmZpY3VsdHkuaWQgYXMgRGlmZmljdWx0aWVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfSAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ29udGFpbmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiU3dpdGNoIiwiYXhpb3MiLCJ0b2FzdCIsImRpZmZpY3VsdGllcyIsImlkIiwibGV2ZWwiLCJkZXNjcmlwdGlvbiIsIlByb2ZpbGVDb250YWluZXIiLCJjaGFsbGVuZ2VQcmVmZXJlbmNlcyIsInNhdmluZyIsInNldFNhdmluZyIsInNlbGVjdGVkRGlmZmljdWx0eSIsInNldFNlbGVjdGVkRGlmZmljdWx0eSIsImNoYWxsZW5nZUlkIiwic2VuZE5vdGlmaWNhdGlvbnMiLCJzZXRTZW5kTm90aWZpY2F0aW9ucyIsImhhbmRsZVRvZ2dsZU5vdGlmaWNhdGlvbnMiLCJwcmV2IiwiaGFuZGxlU2VsZWN0RGlmZmljdWx0eSIsImRpZmZpY3VsdHlJZCIsImhhbmRsZVNhdmUiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJoMyIsInAiLCJjaGVja2VkIiwib25DaGVja2VkQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProfileContainer.tsx\n"));

/***/ })

});