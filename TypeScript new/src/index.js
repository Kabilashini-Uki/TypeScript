"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./geo/circle");
const rectangle_1 = require("./geo/rectangle");
const geometric_1 = require("./geo/geometric");
function functionForGeometricobject() {
    const Ractangle = new rectangle_1.ractangle(4, 5, "blue", true);
    const Circle = new circle_1.circle(5, "red", true);
    const GeometricObject = new geometric_1.geometricObject();
    console.log(Ractangle.getArea());
    console.log(Ractangle.getPerimeter());
    console.log(Circle.getArea());
    console.log(Circle.getPerimiter());
    console.log(Circle.getDiameter());
    console.log(GeometricObject.toString());
}
functionForGeometricobject();
//# sourceMappingURL=index.js.map