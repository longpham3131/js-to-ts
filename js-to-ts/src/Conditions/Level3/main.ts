import { upperCaseFirstLetter } from "../../ultis/upperCaseFirstLetter";

export function ConditionsLevel3 (){
    const month = upperCaseFirstLetter('February')
    const year = 2064;
    let numberOfDays = 0;
    switch(month){
        case 'April': case 'June': case 'September': case 'November': numberOfDays = 30; break;
        case 'February':{
            console.log("go");
            if(year % 100 === 0 && year % 400 === 0 || year % 4 === 0 ){
                numberOfDays = 29;
            }
            else{
                numberOfDays = 28;
            }
            break;
        }
        default:{
            numberOfDays = 31;
        }
    }
    console.log(` ${month} has ${numberOfDays} days.`);
}