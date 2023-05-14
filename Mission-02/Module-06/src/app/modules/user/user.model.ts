import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema <IUser, UserModel, IUserMethods> ({
    id: {type: String, required: true, unique: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    name: {
      firstName: {type: String, required: true},
      middleName: {type: String,},
      lastName: {type: String, required: true},
    },
    dateOfBirth: {type: Number},
    gender: {type: String, enum: ["male", "female"]}
  });
  
  userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
  })
  
  const User = model<IUser, UserModel>("User", userSchema);
  
  export default User;