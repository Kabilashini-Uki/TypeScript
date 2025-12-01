"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ractangle = void 0;
const shape_1 = require("./shape");
class ractangle extends shape_1.shape {
    length;
    width;
    constructor(length, width, color, filled) {
        super(color, filled);
        this.length = length;
        this.width = width;
    }
    getlength() {
        return this.length;
    }
    setHeight(height) {
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getArea() {
        return this.length * this.length;
    }
    gerPerimeter() {
        return 2 * (this.length + this.width);
    }
    toString() {
        return "A Rectanglr width = " + this.width + "and length " + this.length + ", which is a subclass of" + (shape_1.shape);
    }
}
exports.ractangle = ractangle;
//# sourceMappingURL=ractangle.js.map