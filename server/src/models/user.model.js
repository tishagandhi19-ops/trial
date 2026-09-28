import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum: ["employ","manger"],
        default: "employ"
    }
})

const userModel = mongoose.model("user",userSchema);
export default userModel;