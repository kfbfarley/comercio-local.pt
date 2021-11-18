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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxHQUFHLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNELHdEQUFZO0FBRTdCLGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC50cz8xNTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxubGV0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client.ts\n");

/***/ }),

/***/ "./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.ts\");\n\nasync function register(request, response) {\n    if (request.method === 'POST') {\n        const body = request.body;\n        try {\n            const exists = await findByNif(body.nif);\n            if (exists) {\n                return response.status(200).json({\n                    result: false,\n                    exists: true,\n                    merchant: null\n                });\n            } else {\n                const merchant = await create({\n                    nif: body.nif,\n                    social: body.social,\n                    email: body.email\n                });\n                return response.status(200).json({\n                    result: true,\n                    exists: false,\n                    merchant: merchant\n                });\n            }\n        } catch (error) {\n            response.status(error).json({\n                result: false,\n                merchant: null\n            });\n        }\n    }\n};\nconst findByNif = async (nif)=>{\n    return _lib_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].merchant.findFirst({\n        where: {\n            merchant_nif: nif\n        }\n    }).then((merchant)=>{\n        return merchant ? true : false;\n    });\n};\nconst create = async (merchant1)=>{\n    return _lib_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].merchant.create({\n        data: {\n            merchant_nif: merchant1.nif,\n            merchant_social_name: merchant1.social,\n            email: merchant1.email\n        }\n    }).then((merchant)=>{\n        delete merchant.password;\n        return merchant;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7QUFFdEIsZUFBZUMsUUFBUSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZELEVBQUUsRUFBRUQsT0FBTyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0csSUFBSTtRQUV6QixHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0MsU0FBUyxDQUFDRixJQUFJLENBQUNHLEdBQUc7WUFDdkMsRUFBRSxFQUFFRixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLENBQUNILFFBQVEsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCQyxNQUFNLEVBQUUsS0FBSztvQkFDYkwsTUFBTSxFQUFFLElBQUk7b0JBQ1pNLFFBQVEsRUFBRSxJQUFJO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQyxNQUFNLENBQUM7Z0JBQ0osS0FBSyxDQUFDQSxRQUFRLEdBQUcsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztvQkFDM0JMLEdBQUcsRUFBRUgsSUFBSSxDQUFDRyxHQUFHO29CQUNiTSxNQUFNLEVBQUVULElBQUksQ0FBQ1MsTUFBTTtvQkFDbkJDLEtBQUssRUFBRVYsSUFBSSxDQUFDVSxLQUFLO2dCQUNyQixDQUFDO2dCQUNELE1BQU0sQ0FBQ1osUUFBUSxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFDOUJDLE1BQU0sRUFBRSxJQUFJO29CQUNaTCxNQUFNLEVBQUUsS0FBSztvQkFDYk0sUUFBUSxFQUFFQSxRQUFRO2dCQUN0QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEtBQUssRUFBRSxDQUFDO1lBQ2JiLFFBQVEsQ0FBQ00sTUFBTSxDQUFDTyxLQUFLLEVBQUVOLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxNQUFNLEVBQUUsS0FBSztnQkFBRUMsUUFBUSxFQUFFLElBQUk7WUFBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQWtCRCxLQUFLLENBQUNMLFNBQVMsVUFBVUMsR0FBVyxHQUFLLENBQUM7SUFDdEMsTUFBTSxDQUFDUixzRUFDTyxDQUFDLENBQUM7UUFDUmtCLEtBQUssRUFBRSxDQUFDO1lBQ0pDLFlBQVksRUFBRVgsR0FBRztRQUNyQixDQUFDO0lBQ0wsQ0FBQyxFQUNBWSxJQUFJLEVBQUVSLFFBQWtCLEdBQUssQ0FBQztRQUMzQixNQUFNLENBQUNBLFFBQVEsR0FBRyxJQUFJLEdBQUcsS0FBSztJQUNsQyxDQUFDO0FBQ1QsQ0FBQztBQUNELEtBQUssQ0FBQ0MsTUFBTSxVQUFVRCxTQUFpQixHQUFLLENBQUM7SUFDekMsTUFBTSxDQUFDWixtRUFDSSxDQUFDLENBQUM7UUFDTHFCLElBQUksRUFBRSxDQUFDO1lBQ0hGLFlBQVksRUFBRVAsU0FBUSxDQUFDSixHQUFHO1lBQzFCYyxvQkFBb0IsRUFBRVYsU0FBUSxDQUFDRSxNQUFNO1lBQ3JDQyxLQUFLLEVBQUVILFNBQVEsQ0FBQ0csS0FBSztRQUN6QixDQUFDO0lBQ0wsQ0FBQyxFQUNBSyxJQUFJLEVBQUVSLFFBQWtCLEdBQUssQ0FBQztRQUMzQixNQUFNLENBQUNBLFFBQVEsQ0FBQ1csUUFBUTtRQUN4QixNQUFNLENBQUNYLFFBQVE7SUFDbkIsQ0FBQztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHM/N2RhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9jbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcihyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgaWYgKHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gcmVxdWVzdC5ib2R5IGFzIFJlcXVlc3RcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gYXdhaXQgZmluZEJ5TmlmKGJvZHkubmlmKVxyXG4gICAgICAgICAgICBpZiAoZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBleGlzdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVyY2hhbnQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJjaGFudCA9IGF3YWl0IGNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlmOiBib2R5Lm5pZixcclxuICAgICAgICAgICAgICAgICAgICBzb2NpYWw6IGJvZHkuc29jaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBib2R5LmVtYWlsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBleGlzdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lcmNoYW50OiBtZXJjaGFudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyhlcnJvcikuanNvbih7IHJlc3VsdDogZmFsc2UsIG1lcmNoYW50OiBudWxsIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWVyY2hhbnQge1xyXG4gICAgbWVyY2hhbnRfaWQ6IG51bWJlclxyXG4gICAgbWVyY2hhbnRfbmFtZTogc3RyaW5nXHJcbiAgICBtZXJjaGFudF9icmFuZF9uYW1lOiBzdHJpbmdcclxuICAgIG1lcmNoYW50X3NvY2lhbF9uYW1lOiBzdHJpbmdcclxuICAgIGNpdHk6IHN0cmluZ1xyXG4gICAgbWVyY2hhbnRfbmlmOiBudW1iZXJcclxuICAgIGVtYWlsOiBzdHJpbmdcclxuICAgIHBob25lOiBzdHJpbmdcclxuICAgIHBhc3N3b3JkPzogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIFJlcXVlc3Qge1xyXG4gICAgbmlmOiBudW1iZXJcclxuICAgIHNvY2lhbDogc3RyaW5nXHJcbiAgICBlbWFpbDogc3RyaW5nXHJcbn1cclxuY29uc3QgZmluZEJ5TmlmID0gYXN5bmMgKG5pZjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gcHJpc21hLm1lcmNoYW50XHJcbiAgICAgICAgLmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBtZXJjaGFudF9uaWY6IG5pZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigobWVyY2hhbnQ6IE1lcmNoYW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXJjaGFudCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbn1cclxuY29uc3QgY3JlYXRlID0gYXN5bmMgKG1lcmNoYW50OiBSZXF1ZXN0KSA9PiB7XHJcbiAgICByZXR1cm4gcHJpc21hLm1lcmNoYW50XHJcbiAgICAgICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG1lcmNoYW50X25pZjogbWVyY2hhbnQubmlmLFxyXG4gICAgICAgICAgICAgICAgbWVyY2hhbnRfc29jaWFsX25hbWU6IG1lcmNoYW50LnNvY2lhbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBtZXJjaGFudC5lbWFpbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigobWVyY2hhbnQ6IE1lcmNoYW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtZXJjaGFudC5wYXNzd29yZFxyXG4gICAgICAgICAgICByZXR1cm4gbWVyY2hhbnRcclxuICAgICAgICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJyZWdpc3RlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsImJvZHkiLCJleGlzdHMiLCJmaW5kQnlOaWYiLCJuaWYiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwibWVyY2hhbnQiLCJjcmVhdGUiLCJzb2NpYWwiLCJlbWFpbCIsImVycm9yIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJtZXJjaGFudF9uaWYiLCJ0aGVuIiwiZGF0YSIsIm1lcmNoYW50X3NvY2lhbF9uYW1lIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();