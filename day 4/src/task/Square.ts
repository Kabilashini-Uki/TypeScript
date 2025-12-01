import { ractangle } from "./ractangle";

export class Square extends ractangle{
     private side:number;
   constructor(side:number, color:string,filled:boolean){
        super(side,side,color,filled)
        this.side=side
       }
    public getSide():number{
         return this.side;
    }
    public setSide(side:number){
         this.side=side;
    }
    public printSquare() {
        return "A Ractangle width = "+this.side+" and length "+this.side+", which is a subclass of "+this.toString();
    }

}


