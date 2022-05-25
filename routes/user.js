import express from "express";
import {
  getUser,
  signIn,
  getExistsUser,
  signUp,
} from "../controllers/userCtrl.js";

const router = express.Router();

router.get("/login", signIn);

router.get("/user", getUser);
router.get("/existuser", getExistsUser);
router.post("/signup", signUp);

export default router;
