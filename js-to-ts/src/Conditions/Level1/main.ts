
export function ConditionLevel1(){
    //1,

    // const age = prompt("Enter your age: ") as string;
    // if(parseInt(age) >= 18){
    //     alert("You are old enough to drive.")
    // }
    // else{
    //     alert(`You are left with ${18 - parseInt(age)} years to drive.`)
    // }

    //2.
    // const myAge = 22;
    // const yourAge = parseInt(prompt("Enter your age: ") as string) ;
    // if(myAge > yourAge){
    //     console.log(`I am ${Math.abs(myAge - yourAge)} years older than you.`);
    // }
    // else{
    //     console.log(`You are ${Math.abs(myAge - yourAge)} years older than me.`);
    // }

    //3.
    let a = 4
    let b = 3
    a > b ? console.log('a is greater than b' ) : console.log('a is less than b');

    //4.
    const yourNumber = parseInt(prompt("Enter your number: ") as string) ;
    console.log(`${yourNumber} is a ${yourNumber % 2 === 0 ? 'even' : 'odd'} number`);
   
}