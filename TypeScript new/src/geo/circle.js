"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const geometric_1 = require("./geometric");
class circle extends geometric_1.geometricObject {
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
    getPerimiter() {
        return 2 * Math.PI * Math.pow(this.radius, 2);
    }
    getDiameter() {
        return 2 * this.radius;
    }
}
exports.circle = circle;
//# sourceMappingURL=circle.js.map