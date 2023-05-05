// interface 
// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move?(): void;
// }

// class Car implements Vehicle {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number
//     ){}
//     startEngine(): void {
//         console.log("I am starting engine.");
//     }
//     stopEngine(): void {
//         console.log("I am stopping engine");
//     }
//     // move(): void {
//     //     console.log('move engine');
//     // }
// }

// const Vehicle1 = new Vehicle("car", "Tesla", 2122)
/*
interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
  }
  
  class Car implements Vehicle {
    constructor(
      public name: string,
      public brand: string,
      public model: number
    ) {}
    startEngine(): void {
      console.log(" I am starting engine... ");
    }
    stopEngine(): void {
      console.log(" I am syopping engine");
    }
    // move(): void {
    //   console.log(" I am syopping engine");
    // }
  }*/
//   const vehicle1 = new Vehicle("Car", "Toyota", 2000);
  
//   abstract class 
abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {}
    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log("I am stopping engine");
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log('I am starting engine');
    };
    stopEngine(): void {
        console.log('I am stopping engine');
    };
}

// const car1 = new Vehicle('Car', 'Honda', 2023)
