import dotenv from 'dotenv';
import { createError } from '../error.js';
import Together from 'together-ai/index.mjs';

dotenv.config();


//setup OpenAI API key
const together = new Together({
    apiKey: process.env.TOGETHER_API_KEY,})


// Controller to generate imaage
export const generateImage = async (req, res, next) => {
    try{
        const { prompt } = req.body;

        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell",
            prompt: prompt,
            steps: 3,
            width: 1024,
            height: 768,
            response_format: "b64_json",
        });
        const generatedImage = response.data[0].b64_json;
        console.log("Image generated successfully with the prompt:", prompt);
        //console.log("Generated Image: ", generatedImage);
        res.status(200).json({message:'Success' ,photo: generatedImage});
    }catch (error) {
        next(createError(error.status,
            error?.response?.data?.error.message || error.message
        ));
    }
}