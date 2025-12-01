import { shape } from "./shape";

export class circle extends shape{
    private radius:number

    constructor( radius:number, color:string,filled:boolean){
        super(color,filled)
        this.radius=radius
    }
    public getRadius():number{
        return this.radius
    }
    public setRadius(radius:number){
        this.radius=radius
    }
    public getArea(){
        return Math.PI*Math.sqrt(this.radius)
    }
    public getPerimeter(){
        return 2*Math.PI*Math.pow(this.radius,2)
    }

    public printCircle(){
        return "A circle with radius = "+this.radius+ ", which is the subclass "+this.toString();
    }
}