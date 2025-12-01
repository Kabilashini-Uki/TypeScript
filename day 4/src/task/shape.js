"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
class shape {
    color;
    filled;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = this.color;
    }
    getFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = this.filled;
    }
    toString() {
        return "A shape with color" + this.color + "and not" + this.filled;
    }
}
exports.shape = shape;
//# sourceMappingURL=shape.js.map