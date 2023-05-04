type PersonType = {
  name: string;
  age: number;
  address: string;
};
type newType = "name" | "age" | "address"; // manual union
const a: newType= 'age'

type newTypeUsingKeyOf = keyof PersonType;
// const b: newTypeUsingKeyOf = 'holla';

function getProperty<X , Y extends keyof X>(obj: X, key: Y) {
    obj[key];
}
const property = getProperty({name: 'Al Mamun', age: 23}, 'age');