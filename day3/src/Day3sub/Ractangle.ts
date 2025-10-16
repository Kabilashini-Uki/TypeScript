import { geometricObject } from "./practice";

export class ractangle extends geometricObject{
    private width = 10;
    private height =10;

    constructor(width:number,height:number, color:string, filled:boolean){
        super(color,filled);
        this.width=width;
        this.height=height
    }
    
    public getWidth():number{
        return this.width;
    }

    public setWidth(width:number):void{
        this.width=width
    }

    public getHeight():number{
        return this.height;
    }

    public setHeight(height:number):void{
        this.height=height;
    }

    public getArea():number{
        return this.height*this.width
    }

    public getPerimeter():number{
        return 2*(this.width+this.height)
    }
}