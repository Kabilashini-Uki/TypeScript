"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./Day3sub/circle");
const Ractangle_1 = require("./Day3sub/Ractangle");
const practice_1 = require("./Day3sub/practice");
/*function functionForBanking(){
    const bankobj = new bank()
    const peoplesobj = new peoples()
    const hnbobj = new HNB()
    const bocobj = new BOC()

    console.log(bankobj.interest)
      console.log(peoplesobj.interest)
        console.log(hnbobj.interest)
          console.log(bocobj.interest)

}
functionForBanking();*/
function functionForGeometricobject() {
    const Ractangle = new Ractangle_1.ractangle(4, 5, "blue", true);
    const Circle = new circle_1.circle(5, "red", true);
    const GeometricObject = new practice_1.geometricObject();
    console.log(Ractangle.getArea());
    console.log(Ractangle.getPerimeter());
    console.log(Circle.getArea());
    console.log(Circle.getPerimiter());
    console.log(Circle.getDiameter());
    console.log(GeometricObject.getDataCreated());
}
functionForGeometricobject();
//# sourceMappingURL=index.js.map