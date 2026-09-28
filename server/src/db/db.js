import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected sucessfully")
    }catch(err){
        console.log("database connection errror:",err)
    }
    
}

export default connectDB;