import { findMiddleValue } from "../../ultis/findMiddleValue";


export default function ArraysLevel1() {
  // 1.
  const emptyArr = [];

  // 2.
  const arr = [1, 2, 3, 4, 5, 6];

  // 3.
  const lengthMyArr = arr.length;

  // 4.
  const firstItem = arr[0];
  const lastItem = arr[lengthMyArr - 1];
  const middleItem = findMiddleValue(arr);

  // 5.
  const mixedDataTypes: any[] = [1, null, undefined, { a: 33 }, [12]];
  const lengthOfMixedDataTypes = mixedDataTypes.length;

  // 6.
  const itCompanies: string[] = [];
  itCompanies.push(
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
  );

  //7.
  console.log("itCompanies", itCompanies);

  //8.
  const numberOfCompanies = itCompanies.length;
  console.log("Number of companies", numberOfCompanies);

  //9.
  console.log("first company", itCompanies[0]);
  console.log("middle company", findMiddleValue(itCompanies).join(", "));
  console.log("last company", itCompanies[numberOfCompanies - 1]);

  //10.
  itCompanies.forEach((comp: string, index: number) => {
    console.log(`Company ${index + 1}: ${comp}`);
  });

  //11.
  const upperCaseCompanies = itCompanies.map((comp: string) => {
    return comp.toUpperCase();
  });

  upperCaseCompanies.forEach((comp: string, index: number) => {
    console.log(`Company ${index + 1}: ${comp}`);
  });

  //12.
  const [...copyItCompanies] = itCompanies;
  const lastValue = copyItCompanies.pop();
  console.log(
    `${copyItCompanies.join(", ")} and ${lastValue} are big IT companies`
  );

  //13.
  const searchKeyword = "Facebook";
  console.log(
    "Search company: ",
    itCompanies.includes(searchKeyword) ? searchKeyword : "not found"
  );

  //14.
  const filterArr: string[] = [];

  itCompanies.forEach((comp: string) => {
    const splitText = comp.toLowerCase().split("");
    let countCharacterO = 0;
    splitText.forEach((char: string) => {
      if (char === "o") {
        countCharacterO++;
      }
    });

    if (countCharacterO < 2) {
      filterArr.push(comp);
    }
  });

  console.log("companies which have more than one 'o': ", filterArr);

  //15.
  const sortItCompanies = itCompanies.sort((a: string, b: string) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log("sort companies: ", sortItCompanies);

  //16.
  const reverseCompanies = itCompanies.reverse();
  console.log("reverse companies: ", reverseCompanies);

  //17. Slice out the first 3 companies from the array
  const sliceFirst3Comp = itCompanies.slice(0, 3);
  //18
  const sliceLast3Comp = itCompanies.slice(-3);
  //19
  const sliceMiddleComp = findMiddleValue(itCompanies);

  // 20
  itCompanies.shift();

  //21
  let copy21: string[] = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
  ];
  copy21 = copy21.filter((comp: string) =>
    findMiddleValue(copy21).includes(comp as never)
  );

  //22
  itCompanies.pop();

  //23
  itCompanies.length = 0;
}
