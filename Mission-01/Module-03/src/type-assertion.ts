let test: any;
test = 'Next Level Development';
(test as string).length; // as-- assertion
// <string>test.length; // this is also assertion

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The Converted Value is ${value} gm`
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return `The Converted Value is ${value} gm`
    }
}

const resultToNumber = kgToGram(1000) as number;
// const resultToString = kgToGram("1000") as string;
const resultToString = <string>kgToGram("1000");

type CustomErrorType = {
    message: string;
}
try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
}