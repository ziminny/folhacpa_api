"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error = /** @class */ (function () {
    function Error(message, code) {
        if (code === void 0) { code = 400; }
        this.message = message;
        this.code = code;
    }
    return Error;
}());
exports.default = Error;
