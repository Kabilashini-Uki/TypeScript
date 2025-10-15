"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./day3/bank");
const peoples_1 = require("./day3/peoples");
const HNB_1 = require("./day3/HNB");
const BOC_1 = require("./day3/BOC");
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
//# sourceMappingURL=index.js.map