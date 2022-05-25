import express from "express";
import { getFav } from "../controllers/favCtrl.js";

const router = express.Router();

router.get("/getfav", getFav);

export default router;
