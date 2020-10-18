"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`key = ${this.myKeys}, value = ${this.myValue}`);
    }
    get myKeys() {
        return this.key;
    }
    get myValue() {
        return this.value;
    }
}
exports.default = KeyValuePair;
