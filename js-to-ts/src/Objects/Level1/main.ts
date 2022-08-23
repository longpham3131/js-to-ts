export function ObjectsLevel1() {
    interface Dog {
        name?: string,
        legs?: number,
        color?: string,
        age?: number,
        breed?: string,
        bark(): string;
        getDogInfo(): string;
    }
    //1.
    const dog: Dog = {} as Dog;
    //2.
    console.log("Dog", dog);

    //3.
    dog.name = "Kiki"
    dog.legs = 4,
    dog.color = 'red',
    dog.age = 100,
    dog.bark = function () {
        return "woof woof"
    }
    //4.
    const name = dog['name'];
    const legs = dog['legs']
    const color = dog['color'];
    const age = dog['age']
    const bark = dog.bark();

    console.log("Dog", name, legs, color, age, bark);
    //5.

    dog.breed = "Doberman"
    dog.getDogInfo = function () {
        return `Dog - ${this.legs} legs - color: ${this.color} - age: ${this.age} - breed: ${this.breed}`;
    }

}