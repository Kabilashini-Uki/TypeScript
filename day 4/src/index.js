"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./task/shape");
const circle_1 = require("./task/circle");
const ractangle_1 = require("./task/ractangle");
const Square_1 = require("./task/Square");
function functionOfShapObject() {
    const Shape = new shape_1.shape("red", true);
    const Circle = new circle_1.circle(7.0, "red", true);
    const Circle1 = new circle_1.circle(2.1, "yellow", false);
    const Ractangle = new ractangle_1.ractangle(20, 30, "red", true);
    const Ractangle1 = new ractangle_1.ractangle(35.5, 45.6, "yellow", false);
    const square = new Square_1.Square(50, "green", true);
    console.log(Shape.toString());
    console.log(Circle.getArea());
    console.log(Circle.getPerimeter());
    console.log(Circle.toString());
    console.log(Circle1.getArea());
    console.log(Circle1.getPerimeter());
    console.log(Circle1.toString());
    console.log(Ractangle.getArea());
    console.log(Ractangle.gerPerimeter());
    console.log(Ractangle.toString());
    console.log(Ractangle1.getArea());
    console.log(Ractangle1.gerPerimeter());
    console.log(Ractangle1.toString());
    console.log(square.toString);
}
functionOfShapObject();
//# sourceMappingURL=index.js.map