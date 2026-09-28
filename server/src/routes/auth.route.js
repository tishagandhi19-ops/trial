import express from "express";
import {register,login,alluser,edituser, deleteuser} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/alluser",alluser)
router.patch("/edituser/:id",edituser)
router.delete("/deleteuser/:id",deleteuser)

export default router;