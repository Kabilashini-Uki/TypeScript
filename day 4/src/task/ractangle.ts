import { shape } from "./shape";


export class ractangle extends shape{
    private length:number
    private width:number

    constructor(length:number, width:number, color:string, filled:boolean){
        super(color,filled)
        this.length=length
        this.width=width
    }
    public getlength():number{
        return this.length
    }
    public setHeight(height:number){
        this.length=length
    }
    public getWidth():number{
        return this.width
    }
    public setWidth(width:number){
        this.width=width
    }
    public getArea(){
        return this.length*this.length
    }
    public gerPerimeter(){
        return 2*(this.length+this.width)
    }
    public printRectangle() {
        return "A Rectangle width = "+this.width+" and length "+this.length+", which is a subclass of "+this.toString();
    }
}