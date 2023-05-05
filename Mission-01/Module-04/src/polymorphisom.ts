class Person {
    takeNap(): void {
        console.log(`I'm sleeping 8hrs`);
    }
}

class Student2 extends Person {
    takeNap(): void {
        console.log(`I am sleeping 5 hours per day`);
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log(`I'm sleeping 6hrs a day.`);
    }
}

function getNap(param: Person) {
    param.takeNap();
}

const person1 = new Person();
const person2 = new Student2();
const developer = new Developer();
getNap(person1);
getNap(person2);
getNap(developer);
//////////////
class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number){
        super()
        this.radius = radius;
    }
    getArea():number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    weight: number;
    constructor(height: number, weight: number) {
        super();
        this.height = height;
        this.weight = weight;
    }
    getArea(): number {
        return this.height * this.weight;
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 20));