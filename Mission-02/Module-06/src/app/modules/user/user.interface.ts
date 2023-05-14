

export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: number;
    gender: "male"|"female";
  }
  
 export interface IUserMethods {
    fullName(): string;
  }