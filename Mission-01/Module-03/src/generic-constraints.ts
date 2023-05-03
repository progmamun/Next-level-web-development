type MandatoryType = {name: string, speciality: string}

const addMyInfo = <T extends MandatoryType>(myInf: T) => {
    const old = "JavaScript";
    const newData = {...myInf, old};
    return newData;
}

type MyInfoT = {
    name: string;
    speciality: string;
    other: boolean;
    other1: number;
}
const myInf: MyInfoT = {
    name: "T3 Developer",
    speciality: "Cloud Engineer",
    other: true,
    other1: 2
}

const result5 = addMyInfo<MyInfoT>(myInf);