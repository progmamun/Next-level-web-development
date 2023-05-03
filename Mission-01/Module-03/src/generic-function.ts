// Arrow function
const createArray = (param: string): string[] => {
    return [param];
}
const createArray1 = <T, Y>(param1: T, param2: Y): [T, Y] => {
    return [param1, param2];
}
// normal function
function createArray2 <X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
}

const result = createArray("hello world");
const result1 = createArray1<string, string>("hello", "world");

// spreed operator with generic function
const addMyCareer = <T>(myInfo: T) => {
    const old = "JavaScript";
    const newData = {...myInfo, old};
    return newData;
}

type MyInfoType = {
    name: string;
    speciality: string;
}
const myInfo: MyInfoType = {
    name: "T3 Developer",
    speciality: "Cloud Engineer"
}

const spreedData = addMyCareer<MyInfoType>(myInfo);
