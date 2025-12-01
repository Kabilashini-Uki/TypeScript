import { shape } from "./task/shape";
import { circle } from "./task/circle";
import { ractangle } from "./task/ractangle";
import { Square } from "./task/Square";

function functionOfShapObject(){
    const Shape= new shape("red",true);
    const Circle= new circle(7.0,"red",true)
    const Circle1= new circle(2.1,"yellow",false)
    const Ractangle= new ractangle(20,30,"red",true)
    const Ractangle1= new ractangle(35.5,45.6, "yellow",false)
    const square= new Square(50,"green",true)

    console.log(Shape.toString());

    console.log("\n");

    console.log(Circle.getArea());
    console.log(Circle.getPerimeter());
    console.log(Circle.printCircle());

    console.log("\n");

    console.log(Circle1.getArea());
    console.log(Circle1.getPerimeter());
    console.log(Circle1.printCircle());

    console.log("\n");

    console.log(Ractangle.getArea());
    console.log(Ractangle.gerPerimeter());
    console.log(Ractangle.printRectangle());

    console.log("\n");

    console.log(Ractangle1.getArea());
    console.log(Ractangle1.gerPerimeter());
    console.log(Ractangle1.printRectangle());

    console.log("\n");

    console.log(square.printSquare())
}
functionOfShapObject();