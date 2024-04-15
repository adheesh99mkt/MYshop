// const express =require ("express");
import express from "express";
import { getProducts, newProducts } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProducts);

export default router;