import { bank } from "./bank";

export class BOC extends bank{
         constructor(){
            super()
         }
         public interest():number{
            return this.deposit*0.082
         }
        }