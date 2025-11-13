import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const mongoURI =`${process.env.MONGODB_URI}youth-career` || "mongodb://localhost:27017/youth-career";
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err){
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

export default connectDB;