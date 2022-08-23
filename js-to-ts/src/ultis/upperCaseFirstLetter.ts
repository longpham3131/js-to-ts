export function upperCaseFirstLetter(word: string): string{
    const arrCharLowerCase = word.toLowerCase().trim().split('');
    arrCharLowerCase[0] = arrCharLowerCase[0].toUpperCase();
    return arrCharLowerCase.join('');
}