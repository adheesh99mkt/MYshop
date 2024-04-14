// const express =require ("express");
import express from "express";
const app =express();
// const dotenv =require ("dotenv");
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({path:"backend/config/config.env"});

//connect to database

connectDatabase()

//import all routes

import productRoutes from "./routes/products.js";

app.use("/api/v1",productRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

