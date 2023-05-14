import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    console.log(user.fullName());
    return user;
  };
  
  
export const getUserFromDB = async(): Promise<IUser[]> => {
    const users = await User.find({});
    return users;
}

export const getUserFromId = async(payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, role: 1})
    return user;
}