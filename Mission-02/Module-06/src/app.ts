import express, { Application, NextFunction, Request, Response, urlencoded } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();

// using cors 
app.use(cors());

// parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // insert a test data 
    // create an interface 
    interface IUser {
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
    // creating schema using interface 
    const userSchema = new Schema <IUser> ({
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
    
  });
  


  

export default app;