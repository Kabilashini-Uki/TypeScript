"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ractangle = void 0;
const practice_1 = require("./practice");
class ractangle extends practice_1.geometricObject {
    width = 10;
    height = 10;
    constructor(width, height, color, filled) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.ractangle = ractangle;
//# sourceMappingURL=Ractangle.js.map