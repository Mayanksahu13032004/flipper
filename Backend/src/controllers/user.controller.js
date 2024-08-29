import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Patient } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";




const userRegister = asyncHandler(async(req,res)=>{
    
console.log("The User is reigistred is successfully:-");


const {name,email,password}=req.body
console.log("name:-",name);
console.log("email:-",email);
console.log("password:-",password);
console.log(req.body);

if(
   [name,email,password].some((field)=>
   field?.trim()==="")
)
{
   throw new ApiError(400,"All fields are required")
}


const existeduser=await Patient.findOne({
   $or:[{email},{password}]
})


if (existeduser) {
    return res.status(203).json({message : "User already exists! Please try with another email" })

    
}

const patient=await Patient.create({
   name,
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
console.log("User login")

const {email,password}=req.body
console.log("Email is :-",email)
console.log("Password is :-",password)

if(!email || !password){
    throw new ApiError(400,"Email or Password is required")

}

const patient=await Patient.findOne({
    $and:[{email},{password}]
})

console.log("User is",patient);

if(!patient){
    throw new ApiError(404,"notexits")
}




// exist matlab login successfully
return res.status(200).json({message : "exists" })
})




export {userRegister,Login}



































































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




