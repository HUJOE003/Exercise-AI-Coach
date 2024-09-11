"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/page",{

/***/ "(app-pages-browser)/./app/(app)/page.tsx":
/*!****************************!*\
  !*** ./app/(app)/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/atoms */ \"(app-pages-browser)/./atoms.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst POLLING_FREQUENCY_MS = 1000;\nfunction ChatPage() {\n    _s();\n    // Atom State\n    const [userThread] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_1__.userThreadAtom);\n    const [assistant] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_1__.assistantAtom);\n    // State\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [pollingRun, setPollingRun] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const fetchMessages = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        if (!userThread) return;\n        setFetching(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/message/list\", {\n                threadId: userThread.threadId\n            });\n            // Validation\n            if (!response.data.success || !response.data.messages) {\n                var _response_data_error;\n                console.error((_response_data_error = response.data.error) !== null && _response_data_error !== void 0 ? _response_data_error : \"Unknown error.\");\n                return;\n            }\n            let newMessages = response.data.messages;\n            // Sort in descending order\n            newMessages = newMessages.sort((a, b)=>{\n                return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();\n            }).filter((message)=>message.content[0].type === \"text\" && message.content[0].text.value.trim() !== \"\");\n            setMessages(newMessages);\n        } catch (error) {\n            console.error(error);\n            setMessages([]);\n        } finally{\n            setFetching(false);\n        }\n    }, [\n        userThread\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const intervalId = setInterval(fetchMessages, POLLING_FREQUENCY_MS);\n        // Clean up on unmount\n        return ()=>clearInterval(intervalId);\n    }, [\n        fetchMessages\n    ]);\n    const startRun = async (threadId, assistantId)=>{\n        // api/run/create\n        try {\n            const { data: { success, run, error } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/run/create\", {\n                threadId,\n                assistantId\n            });\n            if (!success || !run) {\n                console.error(error);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to start run.\");\n                return \"\";\n            }\n            return run.id;\n        } catch (error) {\n            console.error(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to start run.\");\n            return \"\";\n        }\n    };\n    const pollRunStatus = async (threadId, runId)=>{\n        // api/run/retrieve\n        setPollingRun(true);\n        const intervalId = setInterval(async ()=>{\n            try {\n                const { data: { run, success, error } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/run/retrieve\", {\n                    threadId,\n                    runId\n                });\n                if (!success || !run) {\n                    console.error(error);\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to poll run status.\");\n                    return;\n                }\n                console.log(\"run\", run);\n                if (run.status === \"completed\") {\n                    clearInterval(intervalId);\n                    setPollingRun(false);\n                    fetchMessages();\n                    return;\n                } else if (run.status === \"failed\") {\n                    clearInterval(intervalId);\n                    setPollingRun(false);\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Run failed.\");\n                    return;\n                }\n            } catch (error) {\n                console.error(error);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to poll run status.\");\n                clearInterval(intervalId);\n            }\n        }, POLLING_FREQUENCY_MS);\n        // Clean up on unmount\n        return ()=>clearInterval(intervalId);\n    };\n    const sendMessage = async ()=>{\n        // Validation\n        if (!userThread || sending || !assistant) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to send message. Invalid state.\");\n            return;\n        }\n        setSending(true);\n        // Send message /api/message/create\n        try {\n            const { data: { message: newMessages } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/message/create\", {\n                message,\n                threadId: userThread.threadId,\n                fromUser: \"true\"\n            });\n            // Update ours messages with our new response\n            if (!newMessages) {\n                console.error(\"No message returned.\");\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to send message. Please try again.\");\n                return;\n            }\n            setMessages((prev)=>[\n                    ...prev,\n                    newMessages\n                ]);\n            setMessage(\"\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Message sent.\");\n            // Start a run and then we are going to start polling.\n            const runId = await startRun(userThread.threadId, assistant.assistantId);\n            if (!runId) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to start run.\");\n                return;\n            }\n            pollRunStatus(userThread.threadId, runId);\n        } catch (error) {\n            console.error(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to send message. Please try again.\");\n        } finally{\n            setSending(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-[calc(100vh-64px)] flex flex-col bg-black text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-scroll p-8 space-y-2\",\n                children: [\n                    fetching && messages.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold\",\n                        children: \"Fetching...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                        lineNumber: 206,\n                        columnNumber: 11\n                    }, this),\n                    messages.length === 0 && !fetching && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold\",\n                        children: \"No messages.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                        lineNumber: 210,\n                        columnNumber: 11\n                    }, this),\n                    messages.map((message)=>/*#__PURE__*/ {\n                        var _message_metadata_fromUser;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-4 py-2 mb-3 rounded-lg w-fit text-lg \".concat([\n                                \"true\",\n                                \"True\"\n                            ].includes((_message_metadata_fromUser = message.metadata.fromUser) !== null && _message_metadata_fromUser !== void 0 ? _message_metadata_fromUser : \"\") ? \"bg-yellow-500 ml-auto\" : \"bg-gray-700\"),\n                            children: message.content[0].type === \"text\" ? message.content[0].text.value.split(\"\\n\").map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: text\n                                }, index, false, {\n                                    fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                                    lineNumber: 227,\n                                    columnNumber: 41\n                                }, this)) : null\n                        }, message.id, false, {\n                            fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                            lineNumber: 214,\n                            columnNumber: 11\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                lineNumber: 203,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto p-4 bg-gray-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-white p-2 rounded-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"flex-grow bg-transparent ml-2 text-black focus:outline-none\",\n                            placeholder: \" Type a message...\",\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                            lineNumber: 236,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: !(userThread === null || userThread === void 0 ? void 0 : userThread.threadId) || !assistant || sending || !message.trim(),\n                            className: \"ml-4 bg-yellow-500 text-white px-4 py-2 rounded-full focus:outline-none disabled:bg-yellow-700\",\n                            onClick: sendMessage,\n                            children: sending ? \"Sending...\" : pollingRun ? \"Polling Run...\" : \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                            lineNumber: 243,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                    lineNumber: 235,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                lineNumber: 234,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n        lineNumber: 201,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatPage, \"/Kk9o46Ix41GxSz92Uw1G/WU/yY=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom\n    ];\n});\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXBwKS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXdEO0FBQzlCO0FBQ007QUFHZ0M7QUFDNUI7QUFFcEMsTUFBTVMsdUJBQXVCO0FBRTdCLFNBQVNDOztJQUNQLGFBQWE7SUFDYixNQUFNLENBQUNDLFdBQVcsR0FBR1IsOENBQU9BLENBQUNGLGtEQUFjQTtJQUMzQyxNQUFNLENBQUNXLFVBQVUsR0FBR1QsOENBQU9BLENBQUNILGlEQUFhQTtJQUV6QyxRQUFRO0lBQ1IsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1nQixnQkFBZ0JsQixrREFBV0EsQ0FBQztRQUNoQyxJQUFJLENBQUNNLFlBQVk7UUFFakJHLFlBQVk7UUFFWixJQUFJO1lBQ0YsTUFBTVUsV0FBVyxNQUFNdEIsNkNBQUtBLENBQUN1QixJQUFJLENBSTlCLHFCQUFxQjtnQkFBRUMsVUFBVWYsV0FBV2UsUUFBUTtZQUFDO1lBRXhELGFBQWE7WUFDYixJQUFJLENBQUNGLFNBQVNHLElBQUksQ0FBQ0MsT0FBTyxJQUFJLENBQUNKLFNBQVNHLElBQUksQ0FBQ1osUUFBUSxFQUFFO29CQUN2Q1M7Z0JBQWRLLFFBQVFDLEtBQUssQ0FBQ04sQ0FBQUEsdUJBQUFBLFNBQVNHLElBQUksQ0FBQ0csS0FBSyxjQUFuQk4sa0NBQUFBLHVCQUF1QjtnQkFDckM7WUFDRjtZQUVBLElBQUlPLGNBQWNQLFNBQVNHLElBQUksQ0FBQ1osUUFBUTtZQUV4QywyQkFBMkI7WUFD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RCxxRUFBd0QsTUFFdEQsMEJBQ0E7c0NBR0x2QyxRQUFRc0IsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxLQUFLLFNBQ3pCdkIsUUFBUXNCLE9BQU8sQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUMxQnNCLEtBQUssQ0FBQyxNQUNOSCxHQUFHLENBQUMsQ0FBQ3BCLE1BQU13QixzQkFBVSw4REFBQ0M7OENBQWV6QjttQ0FBUndCOzs7OzRDQUNoQzsyQkFiQ2hELFFBQVFpQyxFQUFFOzs7OztvQkFjWjs7Ozs7OzswQkFLVCw4REFBQ1E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1E7NEJBQ0MzQixNQUFLOzRCQUNMbUIsV0FBVTs0QkFDVlMsYUFBWTs0QkFDWjFCLE9BQU96Qjs0QkFDUG9ELFVBQVUsQ0FBQ0MsSUFBTXBELFdBQVdvRCxFQUFFQyxNQUFNLENBQUM3QixLQUFLOzs7Ozs7c0NBRTVDLDhEQUFDOEI7NEJBQ0NDLFVBQ0UsRUFBQzlELHVCQUFBQSxpQ0FBQUEsV0FBWWUsUUFBUSxLQUFJLENBQUNkLGFBQWFPLFdBQVcsQ0FBQ0YsUUFBUTBCLElBQUk7NEJBRWpFZ0IsV0FBVTs0QkFDVmUsU0FBU25CO3NDQUVScEMsVUFBVSxlQUFlRSxhQUFhLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEU7R0FuUFNYOztRQUVjUCwwQ0FBT0E7UUFDUkEsMENBQU9BOzs7S0FIcEJPO0FBcVBULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYXBwKS9wYWdlLnRzeD81NTI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhc3Npc3RhbnRBdG9tLCB1c2VyVGhyZWFkQXRvbSB9IGZyb20gXCJAL2F0b21zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgeyBSdW4gfSBmcm9tIFwib3BlbmFpL3Jlc291cmNlcy9iZXRhL3RocmVhZHMvaW5kZXhcIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwib3BlbmFpL3Jlc291cmNlcy9iZXRhL3RocmVhZHMvaW5kZXhcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuY29uc3QgUE9MTElOR19GUkVRVUVOQ1lfTVMgPSAxMDAwO1xuXG5mdW5jdGlvbiBDaGF0UGFnZSgpIHtcbiAgLy8gQXRvbSBTdGF0ZVxuICBjb25zdCBbdXNlclRocmVhZF0gPSB1c2VBdG9tKHVzZXJUaHJlYWRBdG9tKTtcbiAgY29uc3QgW2Fzc2lzdGFudF0gPSB1c2VBdG9tKGFzc2lzdGFudEF0b20pO1xuXG4gIC8vIFN0YXRlXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbmRpbmcsIHNldFNlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9sbGluZ1J1biwgc2V0UG9sbGluZ1J1bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXVzZXJUaHJlYWQpIHJldHVybjtcblxuICAgIHNldEZldGNoaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdDx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGVycm9yPzogc3RyaW5nO1xuICAgICAgICBtZXNzYWdlcz86IE1lc3NhZ2VbXTtcbiAgICAgIH0+KFwiL2FwaS9tZXNzYWdlL2xpc3RcIiwgeyB0aHJlYWRJZDogdXNlclRocmVhZC50aHJlYWRJZCB9KTtcblxuICAgICAgLy8gVmFsaWRhdGlvblxuICAgICAgaWYgKCFyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgfHwgIXJlc3BvbnNlLmRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5kYXRhLmVycm9yID8/IFwiVW5rbm93biBlcnJvci5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5ld01lc3NhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlcztcblxuICAgICAgLy8gU29ydCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICBuZXdNZXNzYWdlcyA9IG5ld01lc3NhZ2VzXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5ldyBEYXRlKGEuY3JlYXRlZF9hdCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5jcmVhdGVkX2F0KS5nZXRUaW1lKClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChtZXNzYWdlKSA9PlxuICAgICAgICAgICAgbWVzc2FnZS5jb250ZW50WzBdLnR5cGUgPT09IFwidGV4dFwiICYmXG4gICAgICAgICAgICBtZXNzYWdlLmNvbnRlbnRbMF0udGV4dC52YWx1ZS50cmltKCkgIT09IFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgc2V0TWVzc2FnZXMobmV3TWVzc2FnZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHNldE1lc3NhZ2VzKFtdKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3VzZXJUaHJlYWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmZXRjaE1lc3NhZ2VzLCBQT0xMSU5HX0ZSRVFVRU5DWV9NUyk7XG5cbiAgICAvLyBDbGVhbiB1cCBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFtmZXRjaE1lc3NhZ2VzXSk7XG5cbiAgY29uc3Qgc3RhcnRSdW4gPSBhc3luYyAoXG4gICAgdGhyZWFkSWQ6IHN0cmluZyxcbiAgICBhc3Npc3RhbnRJZDogc3RyaW5nXG4gICk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgLy8gYXBpL3J1bi9jcmVhdGVcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IHN1Y2Nlc3MsIHJ1biwgZXJyb3IgfSxcbiAgICAgIH0gPSBhd2FpdCBheGlvcy5wb3N0PHtcbiAgICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICAgICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgICAgIHJ1bj86IFJ1bjtcbiAgICAgIH0+KFwiYXBpL3J1bi9jcmVhdGVcIiwge1xuICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgYXNzaXN0YW50SWQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzdWNjZXNzIHx8ICFydW4pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHJ1bi5cIik7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVuLmlkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHJ1bi5cIik7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9sbFJ1blN0YXR1cyA9IGFzeW5jICh0aHJlYWRJZDogc3RyaW5nLCBydW5JZDogc3RyaW5nKSA9PiB7XG4gICAgLy8gYXBpL3J1bi9yZXRyaWV2ZVxuICAgIHNldFBvbGxpbmdSdW4odHJ1ZSk7XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRhdGE6IHsgcnVuLCBzdWNjZXNzLCBlcnJvciB9LFxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MucG9zdDx7XG4gICAgICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgICBydW4/OiBSdW47XG4gICAgICAgIH0+KFwiYXBpL3J1bi9yZXRyaWV2ZVwiLCB7XG4gICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgcnVuSWQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3VjY2VzcyB8fCAhcnVuKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gcG9sbCBydW4gc3RhdHVzLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcInJ1blwiLCBydW4pO1xuXG4gICAgICAgIGlmIChydW4uc3RhdHVzID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICBzZXRQb2xsaW5nUnVuKGZhbHNlKTtcbiAgICAgICAgICBmZXRjaE1lc3NhZ2VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHJ1bi5zdGF0dXMgPT09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgIHNldFBvbGxpbmdSdW4oZmFsc2UpO1xuICAgICAgICAgIHRvYXN0LmVycm9yKFwiUnVuIGZhaWxlZC5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gcG9sbCBydW4gc3RhdHVzLlwiKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICB9LCBQT0xMSU5HX0ZSRVFVRU5DWV9NUyk7XG5cbiAgICAvLyBDbGVhbiB1cCBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gVmFsaWRhdGlvblxuICAgIGlmICghdXNlclRocmVhZCB8fCBzZW5kaW5nIHx8ICFhc3Npc3RhbnQpIHtcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gSW52YWxpZCBzdGF0ZS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U2VuZGluZyh0cnVlKTtcblxuICAgIC8vIFNlbmQgbWVzc2FnZSAvYXBpL21lc3NhZ2UvY3JlYXRlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiBuZXdNZXNzYWdlcyB9LFxuICAgICAgfSA9IGF3YWl0IGF4aW9zLnBvc3Q8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBtZXNzYWdlPzogTWVzc2FnZTtcbiAgICAgICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgICB9PihcIi9hcGkvbWVzc2FnZS9jcmVhdGVcIiwge1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgICB0aHJlYWRJZDogdXNlclRocmVhZC50aHJlYWRJZCxcbiAgICAgICAgZnJvbVVzZXI6IFwidHJ1ZVwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBvdXJzIG1lc3NhZ2VzIHdpdGggb3VyIG5ldyByZXNwb25zZVxuICAgICAgaWYgKCFuZXdNZXNzYWdlcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gbWVzc2FnZSByZXR1cm5lZC5cIik7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBuZXdNZXNzYWdlc10pO1xuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJNZXNzYWdlIHNlbnQuXCIpO1xuICAgICAgLy8gU3RhcnQgYSBydW4gYW5kIHRoZW4gd2UgYXJlIGdvaW5nIHRvIHN0YXJ0IHBvbGxpbmcuXG4gICAgICBjb25zdCBydW5JZCA9IGF3YWl0IHN0YXJ0UnVuKHVzZXJUaHJlYWQudGhyZWFkSWQsIGFzc2lzdGFudC5hc3Npc3RhbnRJZCk7XG4gICAgICBpZiAoIXJ1bklkKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHJ1bi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBvbGxSdW5TdGF0dXModXNlclRocmVhZC50aHJlYWRJZCwgcnVuSWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNlbmRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bY2FsYygxMDB2aC02NHB4KV0gZmxleCBmbGV4LWNvbCBiZy1ibGFjayB0ZXh0LXdoaXRlXCI+XG4gICAgICB7LyogTUVTU0FHRVMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LXNjcm9sbCBwLTggc3BhY2UteS0yXCI+XG4gICAgICAgIHsvKiAxLiBGRVRDSElORyBNRVNTQUdFUyAqL31cbiAgICAgICAge2ZldGNoaW5nICYmIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGRcIj5GZXRjaGluZy4uLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogMi4gTk8gTUVTU0FHRVMgKi99XG4gICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgIWZldGNoaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZFwiPk5vIG1lc3NhZ2VzLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogMy4gTElTVElORyBPVVQgVEhFIE1FU1NBR0VTICovfVxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIG1iLTMgcm91bmRlZC1sZyB3LWZpdCB0ZXh0LWxnICR7XG4gICAgICAgICAgICAgIFtcInRydWVcIiwgXCJUcnVlXCJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIChtZXNzYWdlLm1ldGFkYXRhIGFzIHsgZnJvbVVzZXI/OiBzdHJpbmcgfSkuZnJvbVVzZXIgPz8gXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgPyBcImJnLXllbGxvdy01MDAgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgOiBcImJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnRbMF0udHlwZSA9PT0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgPyBtZXNzYWdlLmNvbnRlbnRbMF0udGV4dC52YWx1ZVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiXFxuXCIpXG4gICAgICAgICAgICAgICAgICAubWFwKCh0ZXh0LCBpbmRleCkgPT4gPHAga2V5PXtpbmRleH0+e3RleHR9PC9wPilcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogSU5QVVQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gcC00IGJnLWdyYXktODAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcC0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IGJnLXRyYW5zcGFyZW50IG1sLTIgdGV4dC1ibGFjayBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgVHlwZSBhIG1lc3NhZ2UuLi5cIlxuICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAhdXNlclRocmVhZD8udGhyZWFkSWQgfHwgIWFzc2lzdGFudCB8fCBzZW5kaW5nIHx8ICFtZXNzYWdlLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBiZy15ZWxsb3ctNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZGlzYWJsZWQ6YmcteWVsbG93LTcwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VuZGluZyA/IFwiU2VuZGluZy4uLlwiIDogcG9sbGluZ1J1biA/IFwiUG9sbGluZyBSdW4uLi5cIiA6IFwiU2VuZFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTsiXSwibmFtZXMiOlsiYXNzaXN0YW50QXRvbSIsInVzZXJUaHJlYWRBdG9tIiwiYXhpb3MiLCJ1c2VBdG9tIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJQT0xMSU5HX0ZSRVFVRU5DWV9NUyIsIkNoYXRQYWdlIiwidXNlclRocmVhZCIsImFzc2lzdGFudCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInBvbGxpbmdSdW4iLCJzZXRQb2xsaW5nUnVuIiwiZmV0Y2hNZXNzYWdlcyIsInJlc3BvbnNlIiwicG9zdCIsInRocmVhZElkIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJuZXdNZXNzYWdlcyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJjcmVhdGVkX2F0IiwiZ2V0VGltZSIsImZpbHRlciIsImNvbnRlbnQiLCJ0eXBlIiwidGV4dCIsInZhbHVlIiwidHJpbSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdGFydFJ1biIsImFzc2lzdGFudElkIiwicnVuIiwiaWQiLCJwb2xsUnVuU3RhdHVzIiwicnVuSWQiLCJsb2ciLCJzdGF0dXMiLCJzZW5kTWVzc2FnZSIsImZyb21Vc2VyIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsImluY2x1ZGVzIiwibWV0YWRhdGEiLCJzcGxpdCIsImluZGV4IiwicCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(app)/page.tsx\n"));

/***/ })

});