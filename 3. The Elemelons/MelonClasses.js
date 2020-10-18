"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melolemonmelon = exports.Earthmelon = exports.Airemelon = exports.Firemelon = exports.Watermelon = void 0;
class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.el = "Water";
        this.elementIndex = this.weight * this.melonSort.length;
    }
    get elIndex() {
        return this.elementIndex;
    }
    toString() {
        console.log(`Element: ${this.el}`);
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elIndex}`);
    }
}
exports.Watermelon = Watermelon;
class Firemelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.el = "Fire";
    }
}
exports.Firemelon = Firemelon;
class Airemelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.el = "Air";
    }
}
exports.Airemelon = Airemelon;
class Earthmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.el = "Earth";
    }
}
exports.Earthmelon = Earthmelon;
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elArr = ["Fire", "Earth", "Air", "Water"];
        this.el = "";
    }
    morph() {
        const currentEl = this.elArr.shift();
        this.el = currentEl;
        this.elArr.push(currentEl);
    }
}
exports.Melolemonmelon = Melolemonmelon;
