"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BoxesClass_1 = require("./BoxesClass");
// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count); //3
let box = new BoxesClass_1.Boxes();
box.add("Pesho");
box.add("Gosho");
console.log(box.count); //2
box.remove();
console.log(box.count); //1
