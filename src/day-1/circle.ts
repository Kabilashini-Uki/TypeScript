export class Circle{
    private radius:number;

    constructor(rad:number){
        this.radius=rad;
    }

    public getArea(){
         return Math.PI*Math.sqrt(this.radius);
    }

     public getPerimiter(){
         return 2*Math.PI*Math.pow(this.radius,2);
    }

    public setRadius(rad:number){
         this.radius=rad;
    }
       
    
}