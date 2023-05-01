//ternary operator

const age:number = 23;

const isAdult = age>=18 ? "Yes" : "No";
console.log(isAdult);

// Nullish coalescing operator
// Null and undefined
const isAuthenticateUser = undefined;
const userName = isAuthenticateUser ?? "Guest"
console.log(userName);

///
type Phero = {
  name: string;
  age: number;
  address: {
    city: "Dhaka",
    road: "Mirpur1",
    home?: '',
  }
}
const hero: Phero = {
  name: "Al Mamun",
  age: 23,
  address: {
    city: "Dhaka",
    road: "Mirpur1",
  }
}
// console.log({hero});

const home = hero?.address?.home ?? "No home" // Default 'No home'
console.log({home});
