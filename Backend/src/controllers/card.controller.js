import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {CardDetail} from "../models/card.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
// Create a new card
const createCard = asyncHandler(async (req, res) => {
  
  
    const {card_image, tag, title, location, description, total_price, get_price, security_type, investment_multiple, maturity, min_investment } = req.body;
  
    console.log("card_image name is:", card_image);
  
    // Validate required fields
    if ([tag, title].some(field => field?.trim() === "")) {
      throw new ApiError(400, "Tag and title fields are required");
    }
  
    // // Validate image file
    // const imageLocalPath = req.files?.card_image?.[0]?.path;
    // if (!imageLocalPath) {
    //   throw new ApiError(400, 'Image file is required');
    // }
  
    // // // Upload image to cloud storage
    // const image = await uploadOnCloudinary(imageLocalPath);
    // console.log('Image URL:', image.url);
  
    // Create card data
    const newCardData = {
      tag,
      card_image, // Assuming you want to store the image URL
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



const deleteCard = asyncHandler(async (req,res) => {
    const card = await CardDetail.deleteMany()
    res.status(200).json({
        message : "data deleted successfully "
    })
})
export {createCard,getCards,deleteCard}