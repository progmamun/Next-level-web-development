// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// return value number ,, a jono 3ta number a asba.
add(2, 2);

// default perameter
function adds(num1: number, num2: number = 20): number {
  return num1 + num2;
}
adds(10);

// spread operator
const myFriends = ["js", "react", "next"];
const newFriends = ["aws", "docker", "typescript"];

myFriends.push(...newFriends);
console.log(myFriends);

// array and object destructuring
const myBestFriend = {
  fullName: "React Native",
  age: 15,
};
const [bestFriends] = myFriends;
const { fullName } = myBestFriend;
// const { fullName: string } = myBestFriend; // name alias, overwrite name
// console.log({ string });

// rest operator
// const greetFriends = (
//   friend1: string,
//   friend2: string,
//   friend3: string
// ): void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}\n`);
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`hi, ${friend}`));
greetFriends("Javascript", "Next.js", "Node");

// arrow function
const arrowAdd = (num1: number, num2: number): number => num1 + num2;
arrowAdd(4, 5);
// ============= Call back
const arr = [9, 10];

const newArray = arr.map((elem: number) => elem * elem);
// ===
const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
  //   addBalance(money: number): void;
} = {
  name: "Mamun",
  balance: 5,
  addBalance(money: number) {
    return `My new Balance is ${this.balance + money}`;
    // console.log(`My new Balance is ${this.balance + money}`);
  },
};
