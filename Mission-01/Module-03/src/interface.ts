interface IUser {
    name: string;
    age: number;
}

// type IExtendedUser = IUser & {
//     role: string;
// }

interface IExtendedUser extends IUser {
    role: string;
}

const User: IExtendedUser = {
    name: 'Mamun',
    age: 23,
    role: 'Admin'
}
// =====
// type IRollNumber = Number[]; // type alias more readable
interface IRollNumber {
    [index: number]:number
}

const rollNumbers: IRollNumber = [2, 3, 4]