import { bank } from "./bank";

export class HNB extends bank{
         constructor(){
            super()
         }
         public interest():number{
            return this.deposit*0.082
         }
        }