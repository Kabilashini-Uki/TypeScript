"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./day3/bank");
const peoples_1 = require("./day3/peoples");
const HNB_1 = require("./day3/HNB");
const BOC_1 = require("./day3/BOC");
const circle_1 = require("./day3/circle");
function functionForBanking() {
    const bankobj = new bank_1.bank();
    const peoplesobj = new peoples_1.peoples();
    const hnbobj = new HNB_1.HNB();
    const bocobj = new BOC_1.BOC();
    console.log(bankobj.interest);
    console.log(peoplesobj.interest);
    console.log(hnbobj.interest);
    console.log(bocobj.interest);
}
functionForBanking();
const Circle = new circle_1.circle(5, "red", true);
console.log(Circle.getArea());
console.log(Circle.getPerimiter());
console.log(Circle.getDiameter);
//# sourceMappingURL=index.js.map