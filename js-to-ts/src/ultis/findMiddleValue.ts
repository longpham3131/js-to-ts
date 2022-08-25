 export function findMiddleValue<T> (arr: T[]):  T[] {
    const length = arr.length;
    const middleLength = length / 2;
    return length % 2 === 0
      ? arr.slice(middleLength - 1, middleLength + 1)
      : [arr[Math.floor(middleLength)]];
  };