import { Router } from "express";
import { getSubscribe, subscribe } from "../controllers/subscribe.controller.js";

const router=Router()

router.route("/subscribe-user").post(subscribe)
router.route("/get-subscribe").get(getSubscribe)

export default router