export function FunctionsLevel2 (){
    
    //1 
    function solveQuadEquation (a: number= 0, b: number = 0, c: number = 0): void{
        // ax2 + bx + c = 0
        const delta = (b * b) - (4 * a* c);
        if( delta < 0){
            console.log('{}'); 
        }
        else if(delta === 0){
            const x = (-b) / 2 * a
            console.log(`{${x}}`);
        }
        else{
            const x = (-b + Math.sqrt(delta)) / 2 * a;
            const x2 = (-b - Math.sqrt(delta)) / 2 * a;
           console.log(`{${x}, ${x2}}`);
        }

    }
    
    //2
    function printArray(arr: string[] | number[]): void {
        arr.forEach((item: string | number) => {
            console.log(item);
        })
    }

    //3
    function showDateTime(): void{
        const date = new Date("August 19, 1975 23:15:30");
        console.log(`${date.toLocaleString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' , day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/AM|PM|,/, '')}`);
    }

    //4
    function swapValues (x : number | string , y: number | string){
        let temp = x;
        x = y
        y= temp;
    }


    //5
    function reverseArray (arr: string[] | number[]): string[] | number[] {
        let start = 0;
        let end = arr.length - 1

        while(start < end){
            // swapValues(arr[start], arr[end])
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp
            start++
            end--
        }
        return arr;
    }
    //6
    const capitalizeArray = (...arr: string[]): string[] => arr.map((char: string) => char.toUpperCase());

    console.log(capitalizeArray('a', 'b', 'c', 't'));
    console.log(reverseArray([1,2,3,4,5]));

}