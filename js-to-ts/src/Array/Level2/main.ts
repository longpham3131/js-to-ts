import { webTechs } from './web_techs';
import { countries } from './countries';

function addItemToShoppingCart (shpCart: string[], item: string, atTheEnd: boolean = false): string[] {
    if(shpCart.includes(item.trim())) return shpCart;
    atTheEnd ? shpCart.push(item) : shpCart.unshift(item)
    return shpCart
}
function removeItemToShoppingCart(shpCart: string[], itemDel: string): string[] {
    return shpCart.filter((item: string) => item !== itemDel );
}
// function checkCountry(contry: string):void {
//     countries.includes(contry) ? console.log(contry.toUpperCase()) : countries.push(contry);
// }
// function checkWebTechs(tech: string) : void{


// }
export function ArraysLevel2() {
    // 2. First remove all the punctuations and change the string to array and count the number of words in the array 
    let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  const result = text.replaceAll('.', '').split(' ').length;
  console.log("res", result);
  // 3.
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  // 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
    addItemToShoppingCart(shoppingCart, "Meat");
    addItemToShoppingCart(shoppingCart, "Meat");
  

    // 3.2 add Sugar at the end of you shopping cart if it has not been already added
    addItemToShoppingCart(shoppingCart, "Sugar");
    addItemToShoppingCart(shoppingCart, "Sugar");

    // 3.3
   const newCart =  removeItemToShoppingCart(shoppingCart, 'Honey');

    // 3.4
    const modifyTeaToGreenTea = shoppingCart.map((item) => {
        if(item === 'Tea'){
            item = 'Green Tea';
        }
        return item;
    })

    //4
    countries.includes('Ethiopia') ? console.log('Ethiopia'.toUpperCase()) : countries.push('Ethiopia');

    //5
    if(webTechs.includes('Sass') ){
        console.log('Sass is a CSS preprocess')
    }
    else{
        webTechs.push('Sass');
        console.log(webTechs);
    }

    //6
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
    const backEnd = ['Node', 'Express', 'MongoDB'];
    const fullStack = [...frontEnd, ...backEnd]
    console.log("6", fullStack);
    
}