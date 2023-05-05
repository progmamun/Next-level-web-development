// typeof guard 
type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    } 
    else {
        return param1.toString() + param2.toString();
    }
}
add(1, 2);
add("1", "2");

// type in guard
type NormalUserType = {
    name: string;
}
type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUserType | AdminUserType): string {
    if('role' in user) {
        return `I am an admin my role is ${user.role}`
    } else {
        return `I am normal user`;
    }
}

const normalUser1: NormalUserType = {name: 'normal user'};
const adminUser1: AdminUserType = {name: 'normal user', role: 'admin'};
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof 
class Animal5 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('animal sound...');
    }
}

class Cow extends Animal5 {
    constructor(name: string, species: string){
        super(name, species);
    }
    makeHamba() {
        console.log('the cow sound is hamba hamba');
    }
}

function isCow (animal: Animal5): animal is Cow {
    return animal instanceof Cow;
}

function getAnimal(animal: Animal5) {
    // if (animal instanceof Cow) {
    //     animal.makeHamba()
    // } else {
    //     animal.makeSound()
    // }
    if (isCow(animal)) {
        animal.makeHamba()
    } else {
        animal.makeSound()
    }
}

const animal5 = new Cow ('the animal of food', 'Cow')
getAnimal(animal5);