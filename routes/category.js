import express from "express";
import {
  getAllCategory,
  getCategory,
  getProductByCategory,
  getFourCate,
} from "../controllers/categoryCtrl.js";

const router = express.Router();

router.get("/allcategory", getAllCategory);
router.get("/fourcate", getFourCate);
router.get("/category", getCategory);
router.get("/getpercate", getProductByCategory);

export default router;
