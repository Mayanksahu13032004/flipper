import { Router } from "express";
import { createCard, deleteCard, getCards, updateCard } from "../controllers/card.controller.js";
import {upload } from "../middlewares/multer.middlewares.js"
const router=Router()

// router.route("/create-card").post(createCard) 
router.route("/create-cards").post(createCard) 
router.route("/get-cards").get(getCards)
router.route("/update-cards/:id").put(updateCard)
router.route("/delete-cards/:id").delete(deleteCard)

export default router