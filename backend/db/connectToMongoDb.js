import mongoose from "mongoose";

const connectToMongodb=async()=>{
       
    try{
       await mongoose.connect(process.env.MONGO_DB_URI);
       console.log("Mongodb is connected")
    }
    catch(error)
    {
     console.log("Error, connecting to MongoDb");
    }
}
export default connectToMongodb;