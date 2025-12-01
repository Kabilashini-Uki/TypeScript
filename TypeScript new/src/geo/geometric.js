"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geometricObject = void 0;
class geometricObject {
    color;
    filled;
    dataCreated;
    constructor(color = "white", filled = false) {
        this.color = color;
        this.filled = filled;
        this.dataCreated = new Date();
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isfilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDataCreated() {
        return this.dataCreated;
    }
    toString() {
        return "Color: " + this.color + " Filled: " + this.filled + " Date: " + this.dataCreated;
    }
}
exports.geometricObject = geometricObject;
//# sourceMappingURL=geometric.js.map