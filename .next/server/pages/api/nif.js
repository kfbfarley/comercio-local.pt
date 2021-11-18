"use strict";
(() => {
var exports = {};
exports.id = 109;
exports.ids = [109];
exports.modules = {

/***/ 659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hello)
});

;// CONCATENATED MODULE: external "request"
const external_request_namespaceObject = require("request");
;// CONCATENATED MODULE: external "cheerio"
const external_cheerio_namespaceObject = require("cheerio");
var external_cheerio_default = /*#__PURE__*/__webpack_require__.n(external_cheerio_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/nif.ts


function hello(request, response) {
    if (request.method === 'GET' && request.query.value && request.query.value.length == 9) {
        const nif = Number(request.query.value);
        external_request_namespaceObject({
            uri: `https://www.nif.pt/${nif}`
        }, (error, body)=>{
            if (error) {
                response.status(400).send({
                    nif: null
                });
            } else {
                let $ = external_cheerio_default().load(body.body);
                let company = $('.search-title').text().toUpperCase();
                return response.status(200).json({
                    nif: nif,
                    name: company
                });
            }
        });
    } else {
        return response.status(400).send({
            nif: null
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(659));
module.exports = __webpack_exports__;

})();