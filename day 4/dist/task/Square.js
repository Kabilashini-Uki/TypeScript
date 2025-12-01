"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const ractangle_1 = require("./ractangle");
class Square extends ractangle_1.ractangle {
    side;
    constructor(side, color, filled) {
        super(side, side, color, filled);
        this.side = side;
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    printSquare() {
        return "A Ractangle width = " + this.side + " and length " + this.side + ", which is a subclass of " + this.toString();
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map