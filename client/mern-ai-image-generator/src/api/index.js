import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/api/',
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