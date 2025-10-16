"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peoples = void 0;
const bank_1 = require("./bank");
class peoples extends bank_1.bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.079;
    }
}
exports.peoples = peoples;
//# sourceMappingURL=peoples.js.map