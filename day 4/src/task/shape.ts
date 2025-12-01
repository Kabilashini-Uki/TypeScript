export class shape{
    private color:string;
    private filled:boolean;

    constructor(color:string, filled:boolean){
        this.color=color
        this.filled=filled
    
    }
    public getColor():string{
        return this.color
    }
    public setColor(color:string){
        this.color=this.color
    }

    public getFilled():boolean{
        return this.filled
    }
    public setFilled(filled:boolean){
        this.filled=this.filled
    }
    public toString(){
        return "A shape with color "+this.color+" and "+this.filled
    }
}