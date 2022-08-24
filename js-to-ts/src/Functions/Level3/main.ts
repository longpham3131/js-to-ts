import { userIdGenerator } from "../../ultis/userIdGenerator";
import { FunctionsLevel2 } from "../Level2/main";

export function FunctionsLevel3 () {

    //1
    function userIdGeneratedByUser() {
        const numberOfCharacters = parseInt(prompt("Enter ur number of characters") as string);
        const numberOfIds = parseInt(prompt("Enter ur number of ids") as string);

        for(let i = 0; i < numberOfIds; i++){
            console.log(userIdGenerator(numberOfCharacters));
        }
    }

    // 2

    function generateColors (typeColor: "hexa" | "rgb", numberOfColors: number): string | string[] {
        let result: string[] = [];
        if(typeColor === "hexa"){
            for(let i = 0; i < numberOfColors ; i++){
                result.push('#'+userIdGenerator(6, 'abcdef0123456789'))
            } 
        }
        else{
            for(let i = 0; i < numberOfColors ; i++){
                const red= Math.floor(Math.random() * 255)
                const green= Math.floor(Math.random() * 255)
                const blue= Math.floor(Math.random() * 255)
                result.push(`rgb(${red},${green},${blue})`)
            } 
        }

        return numberOfColors > 1 ? result : result.toString(); 

    }
    //3
    function shuffleArray (){
        const arr = [1,2,3,4,5,6,7,8];
        let start = 0;
        let end = arr.length - 1;

        while(start < end){
            const ramdom1 = Math.floor(Math.random() * (arr.length ));
            const ramdom2 = Math.floor(Math.random() * (arr.length ));

            let temp = arr[ramdom1];
            arr[ramdom1] = arr[ramdom2];
            arr[ramdom2] = temp;

            start++
            end--
        }

        //   arr.sort(() => Math.random() - 0.5)
        console.log(arr);

      
    }
    //4
    const factorial = (number: number): number =>  number === 1 || number === 0 ?  1 : number * factorial(number - 1); 

    //5
    function average(arr: number[]): number | string {
        let sum = 0;
        let hasNotNumber = false;
        for(let i = 0; i < arr.length; i++ ){
            if(typeof arr[i] !== 'number'){
                hasNotNumber = true;
                break;
            }
            sum += arr[i];
        }

        return hasNotNumber ? 'arr not valid' : sum / arr.length;
    }
}