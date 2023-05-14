import User from "./user.model";

const createUserToDb = async () => {
    const user = await new User({
      id: '789',
      role: "student",
      password: 'adminUser',
      name: {
        firstName: "Al Mamun",
        lastName: "Khan",
      },
      gender: "male"
    })
    await user.save();
    return user;
  };

export default createUserToDb;