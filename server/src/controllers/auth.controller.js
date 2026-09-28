import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export async function register(req,res){
    const {name,email,password,role="employ"} = req.body;
    const isUserAlreadyExist =await userModel.findOne({email})

    if(isUserAlreadyExist){
        return res.status(409).json({message:"user is already exist."})
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        name,
        email,
        password:hash,
        role
    })

    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    let newRes = {
        id: user._id,
        name : user.name,
        email:user.email,
        role:user.role

    }

    return res.status(201).json({
        message:"user sucessfully created",
       user: newRes
    })

}

export async function login(req,res){
    const {email,password} = req.body;

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(401).json({message:"user is not exist try again"})
    }

    const ispasswordCorrect = await bcrypt.compare(password,user.password)
    if(!ispasswordCorrect){
        return res.status(401).json({message:"password is invalid"})
    }

    const token = jwt.sign({
        id : user._id,
        role : user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"welcome you login sucessfully",
        user
    })

}

export async function alluser(req,res){
    const user = await userModel.find()
    return res.status(200).json({
        message:"all user fetched sucessfully",
        user 
    }) 
}

export async function edituser(req,res){
    const id = req.params.id;
    const {name,email,password,role}= req.body;
    const user = await userModel.findById(id);
    if(!user){
        return res.status(404).json({message:"user is not found "})
    }

    if(name) user.name = name ;
    if(email) user.email = email;
    if(password) user.password = password;
    if(role) user.role = role;
    return res.status(200).json({message :"edit sucessfully",user});

}

export async function deleteuser(req,res){
    const id = req.params.id 
    const user = await userModel.findById(id)

    if(!user){
        res.status(404).json({message:"user is not found"})
    }

    await userModel.findByIdAndDelete(id)
    res.status(200).json({meassage:"user delete sucessfully"})
}



