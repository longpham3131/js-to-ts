import { findMiddleValue } from "../ultis/findMiddleValue";
interface FreqDist{
    number: number;
    count: number;
    occurrenceRate: number;
}
export function Classes () {
   abstract class Animal {
    constructor(private name : string, private age: number, private color: string,private legs: number){

    }
    abstract exclamation (): void
    get getName(){ 
        return this.name
    }
    set setName(name: string) {
        this.name = name
    }
    getInfomation(): string {
        return `${this.name} , ${this.age}, ${this.color},${this.legs}`
    }
   } 

   class Dog extends Animal {
    constructor( name : string,  age: number,  color: string, legs: number){
        super(name, age, color, legs);
    }

    exclamation(): void {
        console.log("wooh wooh");
    }

   }
   class Cat extends Animal {
    constructor( name : string,  age: number,  color: string, legs: number){
        super(name, age, color, legs);
    }

    exclamation(): void {
        console.log("meow meow");
    }
    getInfomation(){
        return `override method`
    }
    
   }

   const cat1 = new Dog('Mimi', 12, 'red', 4);

//    cat1.exclamation()
//    cat1.setName = 'Long'

//    console.log(cat1.getInfomation());
//    console.log(cat1.getName);
class Statistics {
    arr: number[];
    constructor(arr: number[]){
        this.arr = arr.sort((a, b) => a-b)
    }
    get getArr() {
        return this.arr;
    }

    count(){
        return this.arr.length;
    }
    sum(){
        return this.arr.reduce((sum, curr) => sum + curr, 0 );
    }
    min(){
        return this.arr[0];
    }
    max(){
        return this.arr[this.count() - 1];
    }
    range(){
        return this.max() - this.min()
    }
    mean() {
        return this.sum() / this.count()
    }
    median(){
        const middleValue = findMiddleValue(this.arr)
        if(this.count()  %2 === 0){
            const sum = middleValue.reduce((sum, curr) => sum + curr, 0 );
            return sum / 2
        }
        return middleValue[0];
    }
    freqDist () {
        const freqDist: FreqDist[] = [{number: this.arr[0], count: 0, occurrenceRate: 0}]
        let currVal = this.arr[0];
        for(const number  of this.arr){
            if(number === currVal){
                const data = freqDist[freqDist.length - 1]
                data.count += 1;
                data.occurrenceRate = data.count * 100 / this.count();
            }
            else{
                freqDist.push({number, count: 1, occurrenceRate: 1 * 100 / this.count()}
                )
                currVal = number;
            }
        }
        return freqDist.sort((a, b) => b.occurrenceRate - a.occurrenceRate );
    }
    mode(): {number: number, count:number}{
      return this.freqDist()[0];
    }
    var(){
        const mean = this.mean();
        const sumOfSquares = this.arr.reduce((sum, curr) => sum + Math.pow((curr - mean), 2), 0);
        return sumOfSquares / this.count() 
    }
    std(){
        return Math.sqrt(this.var());
    }
    describe(){
        const {number, count} = this.mode();
        return `
        Count: ${this.count()}
        Sum:  ${this.sum()}
        Min:  ${this.min()}
        Max:  ${this.max()}
        Range:  ${this.range()}
        Mean:  ${Math.round(this.mean())}
        Median:  ${this.median()}
        Mode:  (${number}, ${count})
        Variance:  ${this.var().toFixed(1)}
        Standard Deviation:  ${this.std().toFixed(1)}
        Frequency Distribution: ${this.freqDist().map((item) => `(${item.occurrenceRate}, ${item.number})`)}
        `
    }
}

const statistics = new Statistics( [1,2,3,4,5])
console.log(statistics.getArr);
console.log(statistics.describe());
}