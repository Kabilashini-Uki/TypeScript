"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ractangle = void 0;
const geometric_1 = require("./geometric");
class ractangle extends geometric_1.geometricObject {
    width;
    height;
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
//# sourceMappingURL=rectangle.js.map