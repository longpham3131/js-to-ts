
import { findMiddleValue } from '../../ultis/findMiddleValue';
import { countries } from './../Level2/countries';

export function ArraysLevel3 () {
    //1. 
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ages.sort();

    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    const middleAge = findMiddleValue(ages);
    const rangeOfTheAges = maxAge - minAge;
    
    const averageAges = ages.reduce((sum: number, cur: number) => sum + cur) / ages.length
    // compareMinMax
    const compareMinMax = Math.abs(minAge - averageAges ) > Math.abs(maxAge - averageAges )
    console.log(compareMinMax);

    //2.
    const firstTenCountries = countries.slice(0, 10);

    //3.
    const middleContries = findMiddleValue(countries);

    //4.
    if(countries.length %2 === 0){
        const newArr = countries.slice(-countries.length / 2);
        countries.length = countries.length / 2;
        console.log(newArr, countries);
    }else{
        console.log("concat the arr", [...countries.slice(0,  Math.floor(countries.length / 2)), "VietNam",...countries.slice( Math.floor(countries.length / 2 ), countries.length) ]);
    }
}