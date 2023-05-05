class Animal {
    // name: string;
    // species: string;
    // sound: string;
    
    // constructor(name: string, species: string, sound: string){
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    // }
    constructor(public name: string, public species: string, public sound: string){}
    makeSound () {
        console.log(`The ${this.name} says your sound ${this.sound}`);
    }
}

const tiger = new Animal("German Cow", "Cow", "hamba hamba");
tiger.makeSound()