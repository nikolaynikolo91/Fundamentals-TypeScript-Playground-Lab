"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataClass_1 = require("./DataClass");
let myData = new DataClass_1.default("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
