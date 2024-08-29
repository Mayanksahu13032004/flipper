import mongoose,{Schema} from "mongoose";

const CardSchema = new Schema(
    {
    tag: {
         type: String, 
         required: true 
        },
    card_image: {
         type: String, 
         required: false 
        },
    title: {
         type: String,
          required: true 
        },
    location: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String,
         required: true 
        },
    total_price: {
         type: Number,
          required: true 
        },
    get_price: { 
        type: Number,
        required: true 
    },
    security_type: {
         type: String, 
         required: true 
        },
    investment_multiple: { 
        type: Number, 
        required: true 
    },
    maturity: { 
        type: String, 
        required: true 
    },
    min_investment: {
         type: Number, 
         required: false 
        }
},{timestamps:true});

export const CardDetail=mongoose.model("CardDetail",CardSchema);
