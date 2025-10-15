import { bank } from "./bank";

export class peoples extends bank{
         constructor(){
            super()
         }
         public interest():number{
            return this.deposit*0.079
         }
        }