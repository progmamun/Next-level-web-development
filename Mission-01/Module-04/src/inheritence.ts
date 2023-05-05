class Parent {
    name: string;
    age: number;
    address: string;
    
    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours: number): string {
        return `this ${this.name} will sleep for ${hours}hrs`;
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}
const student = new Student('Al Mamun', 23, 'pabna');

class Teacher extends Parent {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
}
const teacher = new Teacher('MR. Jhanker', 35, 'gulsan', 'programmer')
