type Volume = {
    height: number;
    weight: number;
    depth: number;
}

type Area = {
    [key in keyof Volume]: Volume[key];
}
type Area1<T> = {
     [key in keyof T]: T[key];
    // readonly [key in keyof T]: T[key];
}

const area1 : Area1 <{'name': string; 'age': number }> = {name: "Al Mamun", age: 23};
