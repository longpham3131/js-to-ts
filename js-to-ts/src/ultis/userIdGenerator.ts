export function userIdGenerator(numberOfCharacter: number = 7, characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = ''
    for(let i= 0; i < numberOfCharacter; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length)) 
    }
    return result;
}