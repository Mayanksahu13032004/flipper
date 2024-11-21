import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Patient } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const userRegister = asyncHandler(async(req,res)=>{    

const {fullname,email,password}=req.body
if(
   [fullname,email,password].some((field)=>
   field?.trim()==="")
)
{
   throw new ApiError(400,"All fields are required")
}

const existeduser=await Patient.findOne({
   $or:[{email}]
})
if (existeduser) {
    return res.status(203).json({message : "User already exists! Please try with another email" })
}

const patient=await Patient.create({
   fullname,
   email,
   password
})
const createPatient=await Patient.findById(patient._id).select("")

if (!createPatient) {
   throw new ApiError(500,"Something went wrong  while register User")
}

return res.status(201).json(
   new ApiResponse(200,createPatient,"User register sucessfully")
)
})



const Login=asyncHandler(async(req,res)=>{
const {email,password}=req.body
console.log("Email is :-",email)

if(!email || !password){
    throw new ApiError(400,"Email or Password is required")
}

const patient=await Patient.findOne({
    $and:[{email},{password}]
})

if(!patient){
    throw new ApiError(404,"Notexits")
}

// exist matlab login successfully
return res.status(200).json({message : "Login successfully" })
})


const updateUser=asyncHandler(async(req,res)=>{
const userId=req.params.id;
   
if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
   }
try {
const updateUser=await Patient.findByIdAndUpdate(userId,req.body,{new:true,runValidators: true});
if(!updateUser){
   return res.status(404).json({ message: 'User not found' });
}

res.status(200).json(updateUser);
 
   } catch (error) {
      console.log("Error generate while update the card",error);
      
   }
   
})


const deleteUser=asyncHandler(async(req,res)=>{
   
   const userId=req.params.id;
   if(!mongoose.Types.ObjectId.isValid(userId)){
         return res.status(400).json({message:"Invalid user ID"});
   }
   try {
      const deleteUser=await Patient.findByIdAndDelete(userId,req.body,{new:true,runValidators:true})
      if(!deleteUser){
         return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ message: 'user delete successfully' });
   } catch (error) {
      console.log("Error generate while delete the card",error);
   }
})


const getllRegisterUser=asyncHandler(async(req,res)=>{
   
   try {
      const alluser=await Patient.find();
      res.json(alluser);   
   } catch (error) {
      res.status(500)
      .json({message:"Server error"})
      
   }
   
   
})


export {userRegister,Login,updateUser,deleteUser,getllRegisterUser}



































































// // import { asyncHandler } from "../utils/asyncHandler.js";
// // import {ApiError} from "../utils/ApiError.js"
// // import { Patient } from "../models/health.model.js";
// // import { ApiResponse } from "../utils/ApiResponse.js";

// // const PatientHealthRegister=asyncHandler(async(req,res)=>{
 
// // console.log("register patient");
// // console.log("The patient is reigistred is successfully:-");


// // const {name,email,Password}=req.body
// // console.log("name:-",name);
// // console.log("email:-",email);
// // console.log("password:-",Password);
// // console.log(req.body);

// // if(
// //    [name,email,Password].some((field)=>
// //    field?.trim()==="")
// // )
// // {
// //    throw new ApiError(400,"All fields are required")
// // }


// // const existeduser=await Patient.findOne({
// //    $or:[{email},{Password}]
// // })


// // if (existeduser) {
// //     throw new ApiError(409,"user with email or name already exits")
// // }

// // const patient=await Patient.create({
// //    name,
// //    email,
// //    Password
// // })

// // const createPatient=await Patient.findById(patient._id).select("")


// // if (!createPatient) {
// //    throw new ApiError(500,"Something went wrong  while register Patient")
// // }

// // return res.status(201).json(
// //    new ApiResponse(200,createPatient,"patient register sucessfully:-")
// // )
// // })





// // const HealthLogin=asyncHandler(async(req,res)=>{
// // console.log("health login")

// // const {email,Password}=req.body
// // console.log("email is :-",email)
// // console.log("passwoerd is :-",Password)
// // })


// // export {PatientHealthRegister,HealthLogin}




