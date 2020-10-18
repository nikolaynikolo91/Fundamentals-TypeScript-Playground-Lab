"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor(method, url, version, massage) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.massage = massage;
        this.response = undefined;
        this.fulfilled = false;
    }
}
exports.default = Data;
