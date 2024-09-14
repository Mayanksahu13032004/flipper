import { Router } from "express";
import { deleteUser, getllRegisterUser, Login, updateUser, userRegister } from "../controllers/user.controller.js";

const router=Router()

router.route("/register").post(userRegister)
router.route("/login").post(Login)
router.route("/update-user/:id").put(updateUser)
router.route("/delete-user/:id").delete(deleteUser)
router.route("/get-register-user").get(getllRegisterUser)

export default router