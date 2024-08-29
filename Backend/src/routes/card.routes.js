import { Router } from "express";
import { createCard, getCards ,deleteCard} from "../controllers/card.controller.js";
import {upload } from "../middlewares/multer.middlewares.js"
const router=Router()

// router.route("/create-card").post(createCard) 
router.route("/create-card").post(createCard) 
router.route("/get-card").get(getCards)
router.route("/delete-cards").delete(deleteCard)

export default router