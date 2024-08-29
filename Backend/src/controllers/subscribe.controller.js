import { asyncHandler } from "../utils/asyncHandler.js";
import { SubscriberDetail } from "../models/subscribe.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// User can subscribe the newsletter with Email.
const subscribe=asyncHandler(async(req, res) => {
    const { email } = req.body;
    try {
        const newSubscriber = new SubscriberDetail({ email });
        await newSubscriber.save();
        console.log("The user can successfully subscribe.");
        return res.status(201).json(
        new ApiResponse(200,newSubscriber,"Subscribed successfully.")
        )
} catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already subscribed' });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});


// Display all the user email on the Admin-Panel.
const getSubscribe=asyncHandler(async(req, res) => {
    try {
        const subscribers = await SubscriberDetail.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export {subscribe,getSubscribe}
