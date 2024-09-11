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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/atoms */ \"(app-pages-browser)/./atoms.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst POLLING_FREQUENCY_MS = 1000;\nfunction ChatPage() {\n    _s();\n    // Atom State\n    const [userThread] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_1__.userThreadAtom);\n    const [assistant] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_1__.assistantAtom);\n    // State\n    const [fetching, setFetching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [pollingRun, setPollingRun] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const fetchMessages = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        if (!userThread) return;\n        setFetching(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/message/list\", {\n                threadId: userThread.threadId\n            });\n            // Validation\n            if (!response.data.success || !response.data.messages) {\n                var _response_data_error;\n                console.error((_response_data_error = response.data.error) !== null && _response_data_error !== void 0 ? _response_data_error : \"Unknown error.\");\n                setFetching(false);\n                return;\n            }\n            let newMessages = response.data.messages;\n            // Sort in descending order\n            newMessages = newMessages.sort((a, b)=>{\n                return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();\n            }).filter((message)=>message.content[0].type === \"text\" && message.content[0].text.value.trim() !== \"\");\n            setMessages(newMessages);\n        } catch (error) {\n            console.error(error);\n            setMessages([]);\n        } finally{\n            setFetching(false);\n        }\n    }, [\n        userThread\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const intervalId = setInterval(fetchMessages, POLLING_FREQUENCY_MS);\n        // Clean up on unmount\n        return ()=>clearInterval(intervalId);\n    }, [\n        fetchMessages\n    ]);\n    const startRun = async (threadId, assistantId)=>{\n        // api/run/create\n        try {\n            const { data: { success, run, error } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/run/create\", {\n                threadId,\n                assistantId\n            });\n            if (!success || !run) {\n                console.error(error);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to start run.\");\n                return \"\";\n            }\n            return run.id;\n        } catch (error) {\n            console.error(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to start run.\");\n            return \"\";\n        }\n    };\n    const pollRunStatus = async (threadId, runId)=>{\n        // api/run/retrieve\n        setPollingRun(true);\n        const intervalId = setInterval(async ()=>{\n            try {\n                const { data: { run, success, error } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"api/run/retrieve\", {\n                    threadId,\n                    runId\n                });\n                if (!success || !run) {\n                    console.error(error);\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to poll run status.\");\n                    return;\n                }\n                console.log(\"run\", run);\n                if (run.status === \"completed\") {\n                    clearInterval(intervalId);\n                    setPollingRun(false);\n                    fetchMessages();\n                    return;\n                } else if (run.status === \"failed\") {\n                    clearInterval(intervalId);\n                    setPollingRun(false);\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Run failed.\");\n                    return;\n                }\n            } catch (error) {\n                console.error(error);\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to poll run status.\");\n                clearInterval(intervalId);\n            }\n        }, POLLING_FREQUENCY_MS);\n        // Clean up on unmount\n        return ()=>clearInterval(intervalId);\n    };\n    const sendMessage = async ()=>{\n        // Validation\n        if (!userThread || sending || !assistant) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to send message. Invalid state.\");\n            return;\n        }\n        setSending(true);\n        // Send message /api/message/create\n        try {\n            const { data: { message: newMessages } } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/message/create\", {\n                message,\n                threadId: userThread.threadId,\n                fromUser: \"true\"\n            });\n            // Update ours messages with our new response\n            if (!newMessages) {\n                console.error(\"No message returned.\");\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to send message. Please try again.\");\n                return;\n            }\n            setMessages((prev)=>[\n                    ...prev,\n                    newMessages\n                ]);\n            setMessage(\"\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Message sent.\");\n            // Start a run and then we are going to start polling.\n            const runId = await startRun(userThread.threadId, assistant.assistantId);\n            if (!runId) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to start run.\");\n                return;\n            }\n            pollRunStatus(userThread.threadId, runId);\n        } catch (error) {\n            console.error(error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to send message. Please try again.\");\n        } finally{\n            setSending(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-[calc(100vh-64px)] flex flex-col bg-black text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-scroll p-8 space-y-2\",\n                children: [\n                    fetching && messages.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold\",\n                        children: \"Fetching...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                        lineNumber: 207,\n                        columnNumber: 11\n                    }, this),\n                    messages.length === 0 && !fetching && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold\",\n                        children: \"No messages.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                        lineNumber: 211,\n                        columnNumber: 11\n                    }, this),\n                    messages.map((message)=>/*#__PURE__*/ {\n                        var _message_metadata_fromUser;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-4 py-2 mb-3 rounded-lg w-fit text-lg \".concat([\n                                \"true\",\n                                \"True\"\n                            ].includes((_message_metadata_fromUser = message.metadata.fromUser) !== null && _message_metadata_fromUser !== void 0 ? _message_metadata_fromUser : \"\") ? \"bg-green-500 ml-auto\" : \"bg-gray-700\"),\n                            children: message.content[0].type === \"text\" ? message.content[0].text.value.split(\"\\n\").map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: text\n                                }, index, false, {\n                                    fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                                    lineNumber: 228,\n                                    columnNumber: 41\n                                }, this)) : null\n                        }, message.id, false, {\n                            fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                            lineNumber: 215,\n                            columnNumber: 11\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                lineNumber: 204,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto p-4 bg-gray-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-white p-2 rounded-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"flex-grow bg-transparent ml-2 text-black focus:outline-none\",\n                            placeholder: \" Type a message...\",\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                            lineNumber: 237,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: !(userThread === null || userThread === void 0 ? void 0 : userThread.threadId) || !assistant || sending || !message.trim(),\n                            className: \"ml-4 bg-yellow-500 text-white px-4 py-2 rounded-full focus:outline-none disabled:bg-yellow-700\",\n                            onClick: sendMessage,\n                            children: sending ? \"Sending...\" : pollingRun ? \"Polling Run...\" : \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                            lineNumber: 244,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                    lineNumber: 236,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n                lineNumber: 235,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/__Hujoe__/Documents/Exercise web app/Exercise-AI-Coach/app/(app)/page.tsx\",\n        lineNumber: 202,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatPage, \"/Kk9o46Ix41GxSz92Uw1G/WU/yY=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom\n    ];\n});\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXBwKS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXdEO0FBQzlCO0FBQ007QUFHZ0M7QUFDNUI7QUFFcEMsTUFBTVMsdUJBQXVCO0FBRTdCLFNBQVNDOztJQUNQLGFBQWE7SUFDYixNQUFNLENBQUNDLFdBQVcsR0FBR1IsOENBQU9BLENBQUNGLGtEQUFjQTtJQUMzQyxNQUFNLENBQUNXLFVBQVUsR0FBR1QsOENBQU9BLENBQUNILGlEQUFhQTtJQUV6QyxRQUFRO0lBQ1IsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1nQixnQkFBZ0JsQixrREFBV0EsQ0FBQztRQUNoQyxJQUFJLENBQUNNLFlBQVk7UUFFakJHLFlBQVk7UUFFWixJQUFJO1lBQ0YsTUFBTVUsV0FBVyxNQUFNdEIsNkNBQUtBLENBQUN1QixJQUFJLENBSTlCLHFCQUFxQjtnQkFBRUMsVUFBVWYsV0FBV2UsUUFBUTtZQUFDO1lBRXhELGFBQWE7WUFDYixJQUFJLENBQUNGLFNBQVNHLElBQUksQ0FBQ0MsT0FBTyxJQUFJLENBQUNKLFNBQVNHLElBQUksQ0FBQ1osUUFBUSxFQUFFO29CQUN2Q1M7Z0JBQWRLLFFBQVFDLEtBQUssQ0FBQ04sQ0FBQUEsdUJBQUFBLFNBQVNHLElBQUksQ0FBQ0csS0FBSyxjQUFuQk4sa0NBQUFBLHVCQUF1QjtnQkFDckNWLFlBQVk7Z0JBQ1o7WUFDRjtZQUVBLElBQUlpQixjQUFjUCxTQUFTRyxJQUFJLENBQUNaLFFBQVE7WUFFeEMsMkJBQTJCO1lBQzNCZ0IsY0FBY0EsWUFDWEMsSUFBSSxDQUFDLENBQUNDLEdBQUdDO2dCQUNSLE9BQ0UsSUFBSUMsS0FBS0YsRUFBRUcsVUFBVSxFQUFFQyxPQUFPLEtBQUssSUFBSUYsS0FBS0QsRUFBRUUsVUFBVSxFQUFFQyxPQUFPO1lBRXJFLEdBQ0NDLE1BQU0sQ0FDTCxDQUFDckIsVUFDQ0EsUUFBUXNCLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksS0FBSyxVQUM1QnZCLFFBQVFzQixPQUFPLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxPQUFPO1lBRy9DM0IsWUFBWWU7UUFDZCxFQUFFLE9BQU9ELE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDQTtZQUNkZCxZQUFZLEVBQUU7UUFDaEIsU0FBVTtZQUNSRixZQUFZO1FBQ2Q7SUFDRixHQUFHO1FBQUNIO0tBQVc7SUFFZkwsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0MsYUFBYUMsWUFBWXRCLGVBQWVkO1FBRTlDLHNCQUFzQjtRQUN0QixPQUFPLElBQU1xQyxjQUFjRjtJQUM3QixHQUFHO1FBQUNyQjtLQUFjO0lBRWxCLE1BQU13QixXQUFXLE9BQ2ZyQixVQUNBc0I7UUFFQSxpQkFBaUI7UUFDakIsSUFBSTtZQUNGLE1BQU0sRUFDSnJCLE1BQU0sRUFBRUMsT0FBTyxFQUFFcUIsR0FBRyxFQUFFbkIsS0FBSyxFQUFFLEVBQzlCLEdBQUcsTUFBTTVCLDZDQUFLQSxDQUFDdUIsSUFBSSxDQUlqQixrQkFBa0I7Z0JBQ25CQztnQkFDQXNCO1lBQ0Y7WUFFQSxJQUFJLENBQUNwQixXQUFXLENBQUNxQixLQUFLO2dCQUNwQnBCLFFBQVFDLEtBQUssQ0FBQ0E7Z0JBQ2R0Qix1REFBS0EsQ0FBQ3NCLEtBQUssQ0FBQztnQkFDWixPQUFPO1lBQ1Q7WUFFQSxPQUFPbUIsSUFBSUMsRUFBRTtRQUNmLEVBQUUsT0FBT3BCLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDQTtZQUNkdEIsdURBQUtBLENBQUNzQixLQUFLLENBQUM7WUFDWixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE1BQU1xQixnQkFBZ0IsT0FBT3pCLFVBQWtCMEI7UUFDN0MsbUJBQW1CO1FBQ25COUIsY0FBYztRQUVkLE1BQU1zQixhQUFhQyxZQUFZO1lBQzdCLElBQUk7Z0JBQ0YsTUFBTSxFQUNKbEIsTUFBTSxFQUFFc0IsR0FBRyxFQUFFckIsT0FBTyxFQUFFRSxLQUFLLEVBQUUsRUFDOUIsR0FBRyxNQUFNNUIsNkNBQUtBLENBQUN1QixJQUFJLENBSWpCLG9CQUFvQjtvQkFDckJDO29CQUNBMEI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDeEIsV0FBVyxDQUFDcUIsS0FBSztvQkFDcEJwQixRQUFRQyxLQUFLLENBQUNBO29CQUNkdEIsdURBQUtBLENBQUNzQixLQUFLLENBQUM7b0JBQ1o7Z0JBQ0Y7Z0JBRUFELFFBQVF3QixHQUFHLENBQUMsT0FBT0o7Z0JBRW5CLElBQUlBLElBQUlLLE1BQU0sS0FBSyxhQUFhO29CQUM5QlIsY0FBY0Y7b0JBQ2R0QixjQUFjO29CQUNkQztvQkFDQTtnQkFDRixPQUFPLElBQUkwQixJQUFJSyxNQUFNLEtBQUssVUFBVTtvQkFDbENSLGNBQWNGO29CQUNkdEIsY0FBYztvQkFDZGQsdURBQUtBLENBQUNzQixLQUFLLENBQUM7b0JBQ1o7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9BLE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQ0E7Z0JBQ2R0Qix1REFBS0EsQ0FBQ3NCLEtBQUssQ0FBQztnQkFDWmdCLGNBQWNGO1lBQ2hCO1FBQ0YsR0FBR25DO1FBRUgsc0JBQXNCO1FBQ3RCLE9BQU8sSUFBTXFDLGNBQWNGO0lBQzdCO0lBRUEsTUFBTVcsY0FBYztRQUNsQixhQUFhO1FBQ2IsSUFBSSxDQUFDNUMsY0FBY1EsV0FBVyxDQUFDUCxXQUFXO1lBQ3hDSix1REFBS0EsQ0FBQ3NCLEtBQUssQ0FBQztZQUNaO1FBQ0Y7UUFFQVYsV0FBVztRQUVYLG1DQUFtQztRQUNuQyxJQUFJO1lBQ0YsTUFBTSxFQUNKTyxNQUFNLEVBQUVWLFNBQVNjLFdBQVcsRUFBRSxFQUMvQixHQUFHLE1BQU03Qiw2Q0FBS0EsQ0FBQ3VCLElBQUksQ0FJakIsdUJBQXVCO2dCQUN4QlI7Z0JBQ0FTLFVBQVVmLFdBQVdlLFFBQVE7Z0JBQzdCOEIsVUFBVTtZQUNaO1lBRUEsNkNBQTZDO1lBQzdDLElBQUksQ0FBQ3pCLGFBQWE7Z0JBQ2hCRixRQUFRQyxLQUFLLENBQUM7Z0JBQ2R0Qix1REFBS0EsQ0FBQ3NCLEtBQUssQ0FBQztnQkFDWjtZQUNGO1lBRUFkLFlBQVksQ0FBQ3lDLE9BQVM7dUJBQUlBO29CQUFNMUI7aUJBQVk7WUFDNUNiLFdBQVc7WUFDWFYsdURBQUtBLENBQUNvQixPQUFPLENBQUM7WUFDZCxzREFBc0Q7WUFDdEQsTUFBTXdCLFFBQVEsTUFBTUwsU0FBU3BDLFdBQVdlLFFBQVEsRUFBRWQsVUFBVW9DLFdBQVc7WUFDdkUsSUFBSSxDQUFDSSxPQUFPO2dCQUNWNUMsdURBQUtBLENBQUNzQixLQUFLLENBQUM7Z0JBQ1o7WUFDRjtZQUNBcUIsY0FBY3hDLFdBQVdlLFFBQVEsRUFBRTBCO1FBQ3JDLEVBQUUsT0FBT3RCLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDQTtZQUNkdEIsdURBQUtBLENBQUNzQixLQUFLLENBQUM7UUFDZCxTQUFVO1lBQ1JWLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNzQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUVaOUMsWUFBWUUsU0FBUzZDLE1BQU0sS0FBSyxtQkFDL0IsOERBQUNGO3dCQUFJQyxXQUFVO2tDQUF3Qjs7Ozs7O29CQUd4QzVDLFNBQVM2QyxNQUFNLEtBQUssS0FBSyxDQUFDL0MsMEJBQ3pCLDhEQUFDNkM7d0JBQUlDLFdBQVU7a0NBQXdCOzs7Ozs7b0JBR3hDNUMsU0FBUzhDLEdBQUcsQ0FBQyxDQUFDNUM7NEJBS1A7K0JBSk4sOERBQUN5Qzs0QkFFQ0MsV0FBVywyQ0FNVixPQUxDO2dDQUFDO2dDQUFROzZCQUFPLENBQUNHLFFBQVEsQ0FDdkIsc0NBQVNDLFFBQVEsQ0FBMkJQLFFBQVEsY0FBcEQscUVBQXdELE1BRXRELHlCQUNBO3NDQUdMdkMsUUFBUXNCLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksS0FBSyxTQUN6QnZCLFFBQVFzQixPQUFPLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FDMUJzQixLQUFLLENBQUMsTUFDTkgsR0FBRyxDQUFDLENBQUNwQixNQUFNd0Isc0JBQVUsOERBQUNDOzhDQUFlekI7bUNBQVJ3Qjs7Ozs0Q0FDaEM7MkJBYkNoRCxRQUFRaUMsRUFBRTs7Ozs7b0JBY1o7Ozs7Ozs7MEJBS1QsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNROzRCQUNDM0IsTUFBSzs0QkFDTG1CLFdBQVU7NEJBQ1ZTLGFBQVk7NEJBQ1oxQixPQUFPekI7NEJBQ1BvRCxVQUFVLENBQUNDLElBQU1wRCxXQUFXb0QsRUFBRUMsTUFBTSxDQUFDN0IsS0FBSzs7Ozs7O3NDQUU1Qyw4REFBQzhCOzRCQUNDQyxVQUNFLEVBQUM5RCx1QkFBQUEsaUNBQUFBLFdBQVllLFFBQVEsS0FBSSxDQUFDZCxhQUFhTyxXQUFXLENBQUNGLFFBQVEwQixJQUFJOzRCQUVqRWdCLFdBQVU7NEJBQ1ZlLFNBQVNuQjtzQ0FFUnBDLFVBQVUsZUFBZUUsYUFBYSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRFO0dBcFBTWDs7UUFFY1AsMENBQU9BO1FBQ1JBLDBDQUFPQTs7O0tBSHBCTztBQXNQVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGFwcCkvcGFnZS50c3g/NTUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgYXNzaXN0YW50QXRvbSwgdXNlclRocmVhZEF0b20gfSBmcm9tIFwiQC9hdG9tc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xuaW1wb3J0IHsgUnVuIH0gZnJvbSBcIm9wZW5haS9yZXNvdXJjZXMvYmV0YS90aHJlYWRzL2luZGV4XCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIm9wZW5haS9yZXNvdXJjZXMvYmV0YS90aHJlYWRzL2luZGV4XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmNvbnN0IFBPTExJTkdfRlJFUVVFTkNZX01TID0gMTAwMDtcblxuZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XG4gIC8vIEF0b20gU3RhdGVcbiAgY29uc3QgW3VzZXJUaHJlYWRdID0gdXNlQXRvbSh1c2VyVGhyZWFkQXRvbSk7XG4gIGNvbnN0IFthc3Npc3RhbnRdID0gdXNlQXRvbShhc3Npc3RhbnRBdG9tKTtcblxuICAvLyBTdGF0ZVxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxNZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZW5kaW5nLCBzZXRTZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BvbGxpbmdSdW4sIHNldFBvbGxpbmdSdW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoTWVzc2FnZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF1c2VyVGhyZWFkKSByZXR1cm47XG5cbiAgICBzZXRGZXRjaGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3Q8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgbWVzc2FnZXM/OiBNZXNzYWdlW107XG4gICAgICB9PihcIi9hcGkvbWVzc2FnZS9saXN0XCIsIHsgdGhyZWFkSWQ6IHVzZXJUaHJlYWQudGhyZWFkSWQgfSk7XG5cbiAgICAgIC8vIFZhbGlkYXRpb25cbiAgICAgIGlmICghcmVzcG9uc2UuZGF0YS5zdWNjZXNzIHx8ICFyZXNwb25zZS5kYXRhLm1lc3NhZ2VzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvciA/PyBcIlVua25vd24gZXJyb3IuXCIpO1xuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5ld01lc3NhZ2VzID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlcztcblxuICAgICAgLy8gU29ydCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICBuZXdNZXNzYWdlcyA9IG5ld01lc3NhZ2VzXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5ldyBEYXRlKGEuY3JlYXRlZF9hdCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5jcmVhdGVkX2F0KS5nZXRUaW1lKClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChtZXNzYWdlKSA9PlxuICAgICAgICAgICAgbWVzc2FnZS5jb250ZW50WzBdLnR5cGUgPT09IFwidGV4dFwiICYmXG4gICAgICAgICAgICBtZXNzYWdlLmNvbnRlbnRbMF0udGV4dC52YWx1ZS50cmltKCkgIT09IFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgc2V0TWVzc2FnZXMobmV3TWVzc2FnZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHNldE1lc3NhZ2VzKFtdKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3VzZXJUaHJlYWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmZXRjaE1lc3NhZ2VzLCBQT0xMSU5HX0ZSRVFVRU5DWV9NUyk7XG5cbiAgICAvLyBDbGVhbiB1cCBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFtmZXRjaE1lc3NhZ2VzXSk7XG5cbiAgY29uc3Qgc3RhcnRSdW4gPSBhc3luYyAoXG4gICAgdGhyZWFkSWQ6IHN0cmluZyxcbiAgICBhc3Npc3RhbnRJZDogc3RyaW5nXG4gICk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgLy8gYXBpL3J1bi9jcmVhdGVcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IHN1Y2Nlc3MsIHJ1biwgZXJyb3IgfSxcbiAgICAgIH0gPSBhd2FpdCBheGlvcy5wb3N0PHtcbiAgICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICAgICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgICAgIHJ1bj86IFJ1bjtcbiAgICAgIH0+KFwiYXBpL3J1bi9jcmVhdGVcIiwge1xuICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgYXNzaXN0YW50SWQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzdWNjZXNzIHx8ICFydW4pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHJ1bi5cIik7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVuLmlkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHJ1bi5cIik7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9sbFJ1blN0YXR1cyA9IGFzeW5jICh0aHJlYWRJZDogc3RyaW5nLCBydW5JZDogc3RyaW5nKSA9PiB7XG4gICAgLy8gYXBpL3J1bi9yZXRyaWV2ZVxuICAgIHNldFBvbGxpbmdSdW4odHJ1ZSk7XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRhdGE6IHsgcnVuLCBzdWNjZXNzLCBlcnJvciB9LFxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MucG9zdDx7XG4gICAgICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICAgICAgICBlcnJvcj86IHN0cmluZztcbiAgICAgICAgICBydW4/OiBSdW47XG4gICAgICAgIH0+KFwiYXBpL3J1bi9yZXRyaWV2ZVwiLCB7XG4gICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgcnVuSWQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3VjY2VzcyB8fCAhcnVuKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gcG9sbCBydW4gc3RhdHVzLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcInJ1blwiLCBydW4pO1xuXG4gICAgICAgIGlmIChydW4uc3RhdHVzID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICBzZXRQb2xsaW5nUnVuKGZhbHNlKTtcbiAgICAgICAgICBmZXRjaE1lc3NhZ2VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKHJ1bi5zdGF0dXMgPT09IFwiZmFpbGVkXCIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgIHNldFBvbGxpbmdSdW4oZmFsc2UpO1xuICAgICAgICAgIHRvYXN0LmVycm9yKFwiUnVuIGZhaWxlZC5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gcG9sbCBydW4gc3RhdHVzLlwiKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICB9LCBQT0xMSU5HX0ZSRVFVRU5DWV9NUyk7XG5cbiAgICAvLyBDbGVhbiB1cCBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gVmFsaWRhdGlvblxuICAgIGlmICghdXNlclRocmVhZCB8fCBzZW5kaW5nIHx8ICFhc3Npc3RhbnQpIHtcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gSW52YWxpZCBzdGF0ZS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U2VuZGluZyh0cnVlKTtcblxuICAgIC8vIFNlbmQgbWVzc2FnZSAvYXBpL21lc3NhZ2UvY3JlYXRlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiBuZXdNZXNzYWdlcyB9LFxuICAgICAgfSA9IGF3YWl0IGF4aW9zLnBvc3Q8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBtZXNzYWdlPzogTWVzc2FnZTtcbiAgICAgICAgZXJyb3I/OiBzdHJpbmc7XG4gICAgICB9PihcIi9hcGkvbWVzc2FnZS9jcmVhdGVcIiwge1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgICB0aHJlYWRJZDogdXNlclRocmVhZC50aHJlYWRJZCxcbiAgICAgICAgZnJvbVVzZXI6IFwidHJ1ZVwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBvdXJzIG1lc3NhZ2VzIHdpdGggb3VyIG5ldyByZXNwb25zZVxuICAgICAgaWYgKCFuZXdNZXNzYWdlcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gbWVzc2FnZSByZXR1cm5lZC5cIik7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBuZXdNZXNzYWdlc10pO1xuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJNZXNzYWdlIHNlbnQuXCIpO1xuICAgICAgLy8gU3RhcnQgYSBydW4gYW5kIHRoZW4gd2UgYXJlIGdvaW5nIHRvIHN0YXJ0IHBvbGxpbmcuXG4gICAgICBjb25zdCBydW5JZCA9IGF3YWl0IHN0YXJ0UnVuKHVzZXJUaHJlYWQudGhyZWFkSWQsIGFzc2lzdGFudC5hc3Npc3RhbnRJZCk7XG4gICAgICBpZiAoIXJ1bklkKSB7XG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHJ1bi5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBvbGxSdW5TdGF0dXModXNlclRocmVhZC50aHJlYWRJZCwgcnVuSWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNlbmRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bY2FsYygxMDB2aC02NHB4KV0gZmxleCBmbGV4LWNvbCBiZy1ibGFjayB0ZXh0LXdoaXRlXCI+XG4gICAgICB7LyogTUVTU0FHRVMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LXNjcm9sbCBwLTggc3BhY2UteS0yXCI+XG4gICAgICAgIHsvKiAxLiBGRVRDSElORyBNRVNTQUdFUyAqL31cbiAgICAgICAge2ZldGNoaW5nICYmIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGRcIj5GZXRjaGluZy4uLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogMi4gTk8gTUVTU0FHRVMgKi99XG4gICAgICAgIHttZXNzYWdlcy5sZW5ndGggPT09IDAgJiYgIWZldGNoaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZFwiPk5vIG1lc3NhZ2VzLjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogMy4gTElTVElORyBPVVQgVEhFIE1FU1NBR0VTICovfVxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIG1iLTMgcm91bmRlZC1sZyB3LWZpdCB0ZXh0LWxnICR7XG4gICAgICAgICAgICAgIFtcInRydWVcIiwgXCJUcnVlXCJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIChtZXNzYWdlLm1ldGFkYXRhIGFzIHsgZnJvbVVzZXI/OiBzdHJpbmcgfSkuZnJvbVVzZXIgPz8gXCJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgPyBcImJnLWdyZWVuLTUwMCBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS03MDBcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lc3NhZ2UuY29udGVudFswXS50eXBlID09PSBcInRleHRcIlxuICAgICAgICAgICAgICA/IG1lc3NhZ2UuY29udGVudFswXS50ZXh0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoXCJcXG5cIilcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHRleHQsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fT57dGV4dH08L3A+KVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBJTlBVVCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBwLTQgYmctZ3JheS04MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBwLTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmctdHJhbnNwYXJlbnQgbWwtMiB0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBUeXBlIGEgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICF1c2VyVGhyZWFkPy50aHJlYWRJZCB8fCAhYXNzaXN0YW50IHx8IHNlbmRpbmcgfHwgIW1lc3NhZ2UudHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBkaXNhYmxlZDpiZy15ZWxsb3ctNzAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZW5kaW5nID8gXCJTZW5kaW5nLi4uXCIgOiBwb2xsaW5nUnVuID8gXCJQb2xsaW5nIFJ1bi4uLlwiIDogXCJTZW5kXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRQYWdlOyJdLCJuYW1lcyI6WyJhc3Npc3RhbnRBdG9tIiwidXNlclRocmVhZEF0b20iLCJheGlvcyIsInVzZUF0b20iLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlBPTExJTkdfRlJFUVVFTkNZX01TIiwiQ2hhdFBhZ2UiLCJ1c2VyVGhyZWFkIiwiYXNzaXN0YW50IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwicG9sbGluZ1J1biIsInNldFBvbGxpbmdSdW4iLCJmZXRjaE1lc3NhZ2VzIiwicmVzcG9uc2UiLCJwb3N0IiwidGhyZWFkSWQiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJlcnJvciIsIm5ld01lc3NhZ2VzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJnZXRUaW1lIiwiZmlsdGVyIiwiY29udGVudCIsInR5cGUiLCJ0ZXh0IiwidmFsdWUiLCJ0cmltIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0UnVuIiwiYXNzaXN0YW50SWQiLCJydW4iLCJpZCIsInBvbGxSdW5TdGF0dXMiLCJydW5JZCIsImxvZyIsInN0YXR1cyIsInNlbmRNZXNzYWdlIiwiZnJvbVVzZXIiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwiaW5jbHVkZXMiLCJtZXRhZGF0YSIsInNwbGl0IiwiaW5kZXgiLCJwIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(app)/page.tsx\n"));

/***/ })

});