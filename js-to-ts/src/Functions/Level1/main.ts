export function FunctionsLevel1 () {
    //1
    function fullName (fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }
    //2
    function addNumbers (num1: number, num2: number): number {
        return num1 + num2;
    }
    //3
    function calculates_areaOfCircle (radius: number): string {
        const areaOfCircle = Math.PI * radius * radius
        return areaOfCircle.toFixed(2)
    }
    //4
    function convertCelciusToFahrenheit (oC: number): string {
        const oF = (oC * 9/5) + 32
        return oF.toFixed(1);
    }


    //5
    function calculates_BMI (wei: number , hei: number): string {
        const bmi = wei / (hei * hei);
       if( bmi < 18.5){
        return 'Underweight'
       }
       else if(bmi < 24.9){
        return 'Normal weight'
       }
       else if(bmi < 29.9){
        return 'Overweight'
       }
       else{
        return 'Obese'
       }
    }

    //6
    function checkSeason (month: string): string {
        let theSeason = ''
        switch(month.toLowerCase().trim()){
            case 'september': case 'october': case 'november': theSeason = 'Autumn'; break;
            case 'december': case 'january': case 'february': theSeason = 'Winter'; break;
            case 'march': case 'april ': case 'may': theSeason = 'Spring'; break;
            case 'june': case 'july': case 'august': theSeason = 'Summer'; break;
            default: break;
        }
    
        return theSeason ? `The season is ${theSeason}` : 'Not found'
    }

    
}