// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// return value number ,, a jono 3ta number a asba.
add(2, 2);

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
