import express from "express";
import {
  getAllProduct,
  getProduct,
  searchAll,
  getProductByCate,
  getFourProduct,
} from "../controllers/productCtrl.js";

const router = express.Router();

router.get("/fourproduct", getFourProduct);
router.get("/allproduct", getAllProduct);
router.get("/product", getProduct);
router.get("/productbycate", getProductByCate);
router.get("/searchall", searchAll);

export default router;
