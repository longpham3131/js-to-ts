import { upperCaseFirstLetter } from "../../ultis/upperCaseFirstLetter";

export function ConditionsLevel2 () {
    // console.log();

    //1.
    function giveGrades (score: number): void {
        if(score <= 49){
            console.log("F");
        }
        else if(score <=59){
            console.log("D");
        }
        else if(score <= 69){
            console.log("C");
        }
        else if(score <= 89){
            console.log("B");
        }
        else{
            console.log("A");
        }
    }

    giveGrades(62)
    const month = 'Maasrch'
    let theSeason = ''
    //2.
    switch(month.toLowerCase().trim()){
        case 'september': case 'october': case 'november': theSeason = 'Autumn'; break;
        case 'december': case 'january': case 'february': theSeason = 'Winter'; break;
        case 'march': case 'april ': case 'may': theSeason = 'Spring'; break;
        case 'june': case 'july': case 'august': theSeason = 'Summer'; break;
        default: break;
    }

    theSeason ? console.log(`the season is ${theSeason}`): console.log('Not found');


    //3.
    const day = 'mOnDAY'
    let typeOfDay: string = ''
    switch(day.toLowerCase().trim()){
        case 'saturday': case 'sunday': typeOfDay = 'weekend'; break;
        case 'monday': case 'tuesday': case 'wednesday': case 'thursday': case 'friday': typeOfDay= 'working'; break;
        default: break;
    }
    // covert string -> array 
    const formattDay = upperCaseFirstLetter(day);

    typeOfDay ? console.log(`${formattDay} is a ${typeOfDay}`) : console.log(`not found`);
    //4.

    


}