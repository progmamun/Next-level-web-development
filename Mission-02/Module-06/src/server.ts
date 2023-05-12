import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connection 
async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
        console.log(`database connection successful.`);
    } catch (err) {
        console.log(`Fail to connect Database: error code 500`, err);
    }
}
bootstrap();


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
