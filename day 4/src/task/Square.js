"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const ractangle_1 = require("./ractangle");
class Square extends ractangle_1.ractangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
    }
    getSide() {
        return super.getWidth();
    }
    setSide(side) {
        this.setlength(side);
        this.setWidth(side);
    }
    toString() {
        return "A Ractangle width =" + this.getSide + "and length" + this.getSide + ", which is a subclass of" + (ractangle_1.ractangle);
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map