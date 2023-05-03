type GenericArray<T> = Array<T>;

const rollNumber: GenericArray<number> = [1, 2, 3];
const rollNumberString: GenericArray<string> = ["1", "2", "3"];
const rollNumberBoolean: GenericArray<boolean> = [true, false];

// ======== 
type GenericTuple<x, y> = [x, y];
const myData: GenericTuple<string, string> = ["Al Mamun", "Programmer"]
/////

// type RelationWithSalaryType = {name: string, salary: number};
interface RelationWithSalaryI {name: string, salary: number};

const relationSalary: GenericTuple<RelationWithSalaryI, string> = [{
    name: "Al Mamun",
    salary: 100000,
}, "Programmer"];