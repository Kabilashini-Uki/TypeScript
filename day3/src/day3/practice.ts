export class geometricObject{
    private color:string;
    private filled:boolean;
    private dataCreated:Date;

    constructor(){
        this.color=color;
        this.filled=filled;
        this.dataCreated= number;
    }

    public getColor():string{
        return this.color
    }

    public setColor(color:string):void{
         this.color=color
    }
     public isfilled():boolean{
        return this.filled
     }
     
     public setFilled(filled:boolean){
        this.filled=filled
     }

     public getDataCreated(){
        return this.dataCreated;
     }

   
}