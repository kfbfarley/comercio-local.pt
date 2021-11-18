"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/client.ts

let prisma = new client_namespaceObject.PrismaClient();
/* harmony default export */ const client = (prisma);

;// CONCATENATED MODULE: ./pages/api/register.ts

async function register(request, response) {
    if (request.method === 'POST') {
        const body = request.body;
        try {
            const exists = await findByNif(body.nif);
            if (exists) {
                return response.status(200).json({
                    result: false,
                    exists: true,
                    merchant: null
                });
            } else {
                const merchant = await create({
                    nif: body.nif,
                    social: body.social,
                    email: body.email
                });
                return response.status(200).json({
                    result: true,
                    exists: false,
                    merchant: merchant
                });
            }
        } catch (error) {
            response.status(error).json({
                result: false,
                merchant: null
            });
        }
    }
};
const findByNif = async (nif)=>{
    return client.merchant.findFirst({
        where: {
            merchant_nif: nif
        }
    }).then((merchant)=>{
        return merchant ? true : false;
    });
};
const create = async (merchant1)=>{
    return client.merchant.create({
        data: {
            merchant_nif: merchant1.nif,
            merchant_social_name: merchant1.social,
            email: merchant1.email
        }
    }).then((merchant)=>{
        delete merchant.password;
        return merchant;
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(364));
module.exports = __webpack_exports__;

})();