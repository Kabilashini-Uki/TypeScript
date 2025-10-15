import { bank } from "./day3/bank"
import {peoples} from "./day3/peoples"
import {HNB} from "./day3/HNB"
import { BOC } from "./day3/BOC"

function functionForBanking(){
    const bankobj = new bank()
    const peoplesobj = new peoples()
    const hnbobj = new HNB()
    const bocobj = new BOC()

    console.log(bankobj.interest)
      console.log(peoplesobj.interest)
        console.log(hnbobj.interest)
          console.log(bocobj.interest)

}
functionForBanking();