"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boxes = void 0;
class Boxes {
    constructor() {
        this._boxes = [];
    }
    add(el) {
        this._boxes.push(el);
    }
    remove() {
        this._boxes.pop();
    }
    get count() {
        return this._boxes.length;
    }
}
exports.Boxes = Boxes;
