// Pick 
interface Person {
    name: string;
    email: string;
    contactNo: string;
}

type Contact = Pick<Person, "email"| "contactNo" >;

// Omit || বাদ দেয়া
type Contact1 = Omit<Person, "email" >;

// Partial 
// To make all the properties be optional type 
type Optional = Partial<Person>

type RequiredProps = Required<Person>

// readonly
const person: Readonly<Person> = {
    name: "Al Mamun",
    email: "progmamun@gmail.com",
    contactNo: "017917191717",
}
// person.name = "khan";

// record
type MyObj = Record<'a'|'b'|'c'|'d', string>

const obj: MyObj = {
    a: '1',
    b: '1',
    c: '1',
    d: '1',
}