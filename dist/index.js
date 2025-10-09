"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./day-1/circle");
function main() {
    const circle1 = new circle_1.Circle(1);
    const circle2 = new circle_1.Circle(25);
    const circle3 = new circle_1.Circle(125);
    console.log("This Area of circle 1 is " + circle1.getArea());
    console.log("This Area of circle 2 is " + circle2.getArea());
    console.log("This Area of circle 3 is " + circle3.getArea());
    console.log("\n");
    console.log("This perimiter of circle 1 is " + circle1.getPerimiter());
    console.log("This perimiter of circle 2 is " + circle2.getPerimiter());
    console.log("This perimiter of circle 3 is " + circle3.getPerimiter());
}
main();
//# sourceMappingURL=index.js.map