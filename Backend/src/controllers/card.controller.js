import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {CardDetail} from "../models/card.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import mongoose from "mongoose";
// Create a new card
const createCard = asyncHandler(async (req, res) => {
  
const { tag, title, location, description, total_price, get_price, security_type, investment_multiple, maturity, min_investment } = req.body;

if ([tag, title].some(field => field?.trim() === "")) {
      throw new ApiError(400, "Tag and title fields are required");
    }
     const newCardData = {
      tag,
      // card_image, // Assuming you want to store the image URL
      title,
      location,
      description,
      total_price : total_price,
      get_price,
      security_type,
      investment_multiple,
      maturity,
      min_investment
    };
  
    // Save the card to the database
    const card = await CardDetail.create(newCardData);
  
    if (!card) {
      throw new ApiError(500, "Something went wrong while creating the card");
    }
  
    console.log("Card created and saved successfully");
  
    return res.status(201).json(
      new ApiResponse(200, card, "Investment card created successfully.")
    );
  });
  
// Get all cards
const getCards = asyncHandler(async(req, res) => {
    try {
        const cards = await CardDetail.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


const updateCard=asyncHandler(async(req,res)=>{
  const cardId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(cardId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
 }
 try {
  const updateCard=await CardDetail.findByIdAndUpdate(cardId,req.body,{new:true,runValidators:true})
  if(!updateCard){
    return res.status(404).json({ message: 'Card not found' });
 }
 res.status(200).json(updateCard);
 } catch (error) {
  console.log("Error generate while update the card",error);
 }
})


const deleteCard=asyncHandler(async(req,res)=>{
  const  cardId=req.params.id;
  if(!mongoose.Types.ObjectId.isValid(cardId)){
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  try {
    const deleteCard=await CardDetail.findByIdAndDelete(cardId,req.body,{new:true,runValidators:true})
    if(!deleteCard){
      return res.status(404).json({message:"Card not found"})
    }
    res.status(200).json({message:"User card delete successfully of this ID",cardId})
  } catch (error) {
    console.log("Error generate while delete the card",error);
  }
})



export {createCard,getCards,updateCard,deleteCard}
