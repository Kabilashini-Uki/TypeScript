import { circle } from "./geo/circle";
import { ractangle } from "./geo/rectangle";
import { geometricObject } from "./geo/geometric";

function functionForGeometricobject(){
const Ractangle= new ractangle(4,5, "blue", true)
  const Circle = new circle(5, "red", true);
  const GeometricObject=new geometricObject();

console.log(Ractangle.getArea());
console.log(Ractangle.getPerimeter())

console.log( Circle.getArea());
console.log( Circle.getPerimiter());
console.log(Circle.getDiameter())

console.log(GeometricObject.toString())

}
functionForGeometricobject()