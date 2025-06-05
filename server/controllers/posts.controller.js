import Post from "../models/posts.model.js";
import * as dotenv from "dotenv";
dotenv.config();
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";


// Cloudinary Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
});


// Get Posts
export const getPosts = async (req,res,next) =>{
    try{
        const posts = await Post.find();
        return res.status(200).json({
            success: true, data: posts
        });
    }catch (error){
        next(createError(error.status,
            error?.response?.data?.error.message || error.message
        ));
    }
}

// Create Post
export const createPost = async (req, res, next) => {
    try{
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl?.secure_url,
        }); 
        return res.status(201).json({
            success: true, data: newPost
        });
    }catch (error) {
        next(createError(error.status,
            error?.response?.data?.error.message || error.message
        ));
    }
}