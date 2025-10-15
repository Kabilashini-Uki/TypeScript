import { geometricObject } from "./practice";

export class circle extends geometricObject{
   private radius:number;

   constructor(radius:number, color:string, filled:boolean){

   }

   public getRadius():number{
    return this.radius
   }

   public setRadius(radius:number):void{
     this.radius=radius
   }

      public getArea(){
         return Math.PI*Math.sqrt(this.radius);
    }

    public getPerimiter(){
         return 2*Math.PI*Math.pow(this.radius,2);
    }

    public getDiameter():number{
        return 2* this.radius


    }
   
