import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:[true,"please enter the product name"],
            maxLength:[200,"product name cannot exceed 200 letters"],
        },
        price: {
            type:Number,
            required:[true,"please enter the price"],
            maxLength:[true,"price cannot exceed 6 digit"],
        },
        description: {
            type:String,
            required:[true,"please enter the description"],
        },
        rating :{
            type:Number,
            default:0,
        },
        images :[
            {
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    required:true,
                },
            },
        ],
        category :{
            type:String,
            required:[true,"please enter the description"],
            enum:{
                values:[
                    "Electronics",
                    "Camera",
                    "Laptops",
                    "Accessories",
                    "Headphones",
                    "Food",
                    "Books",
                    "Sports",
                    "Outdoor",
                    "Home",
                ],
                message:"please choose the correct category",
            },
        },
        seller :{
            type:String,
            required:[true,"please enter the seller name"],
        },
        stock :{
            type:Number,
            required:[true,"please enter the product stock"],
        },
        numOfreviews :{
            type:Number,
            default:0,
        },
        reviews :[
            {
                user :{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"user",
                    required:true,
                },
                rating :{
                    type:Number,
                    required:true,
                },
                comment: {
                    type:String,
                    required:true,
                },
            },
        ],
        user :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
    },
    {timestamps:true},
);

export default mongoose.model("Products",productSchema);