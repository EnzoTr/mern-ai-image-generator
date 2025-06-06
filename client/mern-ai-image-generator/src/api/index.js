import axios from 'axios';

const API = axios.create({
    baseURL: 'https://mern-ai-image-generator-w9ag.onrender.com/api/',
});

export const getPosts = async () =>{
    return await API.get('/post/');
};

export const createPost = async (data) => {
    return await API.post('/post/', data);
}

export const generateImage = async (data) => {
    return await API.post('/generateImage/', data);
}