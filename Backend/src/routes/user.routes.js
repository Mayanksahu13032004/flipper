import { Router } from "express";
import { Login, userRegister } from "../controllers/user.controller.js";

const router=Router()

router.route("/register").post(userRegister)
router.route("/login").post(Login)

export default router