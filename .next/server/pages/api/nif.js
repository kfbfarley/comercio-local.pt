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
exports.id = "pages/api/nif";
exports.ids = ["pages/api/nif"];
exports.modules = {

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("request");

/***/ }),

/***/ "./pages/api/nif.ts":
/*!**************************!*\
  !*** ./pages/api/nif.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hello)\n/* harmony export */ });\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request */ \"request\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction hello(request, response) {\n    if (request.method === 'GET' && request.query.value && request.query.value.length == 9) {\n        const nif = Number(request.query.value);\n        request__WEBPACK_IMPORTED_MODULE_0__({\n            uri: `https://www.nif.pt/${nif}`\n        }, (error, body)=>{\n            if (error) {\n                response.status(400).send({\n                    nif: null\n                });\n            } else {\n                let $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default().load(body.body);\n                let company = $('.search-title').text().toUpperCase();\n                return response.status(200).json({\n                    nif: nif,\n                    name: company\n                });\n            }\n        });\n    } else {\n        return response.status(400).send({\n            nif: null\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmlmLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBQ0Q7QUFFZCxRQUFRLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxFQUFFLEVBQ0VELE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLENBQUssUUFDeEJGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLElBQ25CSixPQUFPLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUNqQyxDQUFDO1FBQ0MsS0FBSyxDQUFDQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ1AsT0FBTyxDQUFDRyxLQUFLLENBQUNDLEtBQUs7UUFFdENQLG9DQUFHLENBQUMsQ0FBQztZQUFDVyxHQUFHLEdBQUcsbUJBQW1CLEVBQUVGLEdBQUc7UUFBRyxDQUFDLEdBQUdHLEtBQUssRUFBRUMsSUFBSSxHQUFLLENBQUM7WUFDeEQsRUFBRSxFQUFFRCxLQUFLLEVBQUUsQ0FBQztnQkFDUlIsUUFBUSxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ04sR0FBRyxFQUFFLElBQUk7Z0JBQUMsQ0FBQztZQUMzQyxDQUFDLE1BQU0sQ0FBQztnQkFDSixHQUFHLENBQUNPLENBQUMsR0FBR2YsbURBQVksQ0FBQ1ksSUFBSSxDQUFDQSxJQUFJO2dCQUM5QixHQUFHLENBQUNLLE9BQU8sR0FBR0YsQ0FBQyxDQUFDLENBQWUsZ0JBQUVHLElBQUksR0FBR0MsV0FBVztnQkFDbkQsTUFBTSxDQUFDaEIsUUFBUSxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFTyxJQUFJLENBQUMsQ0FBQztvQkFDOUJaLEdBQUcsRUFBRUEsR0FBRztvQkFDUmEsSUFBSSxFQUFFSixPQUFPO2dCQUNqQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLE1BQU0sQ0FBQztRQUNKLE1BQU0sQ0FBQ2QsUUFBUSxDQUFDVSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDTixHQUFHLEVBQUUsSUFBSTtRQUFDLENBQUM7SUFDbEQsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmlmLnRzPzgzNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVxIGZyb20gJ3JlcXVlc3QnXHJcbmltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxsbyhyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIHJlcXVlc3QubWV0aG9kID09PSAnR0VUJyAmJlxyXG4gICAgICAgIHJlcXVlc3QucXVlcnkudmFsdWUgJiZcclxuICAgICAgICByZXF1ZXN0LnF1ZXJ5LnZhbHVlLmxlbmd0aCA9PSA5XHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBuaWYgPSBOdW1iZXIocmVxdWVzdC5xdWVyeS52YWx1ZSlcclxuXHJcbiAgICAgICAgcmVxKHsgdXJpOiBgaHR0cHM6Ly93d3cubmlmLnB0LyR7bmlmfWAgfSwgKGVycm9yLCBib2R5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwMCkuc2VuZCh7IG5pZjogbnVsbCB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0ICQgPSBjaGVlcmlvLmxvYWQoYm9keS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhbnkgPSAkKCcuc2VhcmNoLXRpdGxlJykudGV4dCgpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBuaWY6IG5pZixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb21wYW55XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg0MDApLnNlbmQoeyBuaWY6IG51bGwgfSlcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsicmVxIiwiY2hlZXJpbyIsImhlbGxvIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwicXVlcnkiLCJ2YWx1ZSIsImxlbmd0aCIsIm5pZiIsIk51bWJlciIsInVyaSIsImVycm9yIiwiYm9keSIsInN0YXR1cyIsInNlbmQiLCIkIiwibG9hZCIsImNvbXBhbnkiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJqc29uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/nif.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/nif.ts"));
module.exports = __webpack_exports__;

})();