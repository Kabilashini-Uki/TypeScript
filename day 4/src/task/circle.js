"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const shape_1 = require("./shape");
class circle extends shape_1.shape {
    radius;
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.sqrt(this.radius);
    }
    getPerimeter() {
        return 2 * Math.PI * Math.pow(this.radius, 2);
    }
    toString() {
        return "A circle with radius =" + this.radius + ", which is the subclass" + (shape_1.shape);
    }
}
exports.circle = circle;
//# sourceMappingURL=circle.js.map