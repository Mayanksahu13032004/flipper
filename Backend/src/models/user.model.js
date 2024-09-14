import mongoose,{Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"


const patientSchema=new Schema(
  {
  fullname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:Number,
    required:true
  },
  
},{timestamps:true});

export const Patient=mongoose.model("Patient",patientSchema);