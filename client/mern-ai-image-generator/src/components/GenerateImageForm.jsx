import React,{useState} from 'react'
import TextInput from './TextInput.jsx'
import styled from 'styled-components'
import {AddRounded, AutoAwesome, CreateRounded} from '@mui/icons-material'
import CreatePost from '../pages/CreatePost.jsx'
import { generateImage, createPost } from '../api'
import {useNavigate} from 'react-router-dom';

function GenerateImageForm({
  createPostLoading,
  setCreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  post,
  setPost,
}) {

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const generateImageFun = async () =>{
    setGenerateImageLoading(true);
    await generateImage({prompt: post.prompt}).then((res)=>{
      console.log(res);
      setPost({...post, photo: `data:image/jpeg;base64,${res?.data?.photo}`,});
      setGenerateImageLoading(false);
      console.log("Image generated successfully with the prompt:", post.prompt);
    }).catch((err)=>{
      console.error("Error generating image:", err);
      setError(error?.response?.data?.message);
      setGenerateImageLoading(false);
    });
  }

  const createPostFun = async () => {
    setCreatePostLoading(true);
    await createPost(post)
      .then((res)=>{
        console.log(res);
        setGenerateImageLoading(false);
        navigate('/');
        console.log("Post created successfully: ", post);
    }).catch((err)=>{
      setError(error?.response?.data?.message);
      setCreatePostLoading(false);
    });
  }

  return (
    <div className='flex-1 min-w-[300px] mt-10 mb-10 gap-15 flex flex-col w-[100%] justify-center items-center'>
        <div className='text-center w-[100%] max-w-[1920px] flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-3xl font-bold'>Generate image with a prompt</h1>
            <p className='text-gray-500'>Enter a prompt to generate an image.</p>
        </div>
        <div className='text-center w-[100%] flex flex-col gap-4 justify-center items-center'>
            <input 
            // value={post.name}
            className='w-[80%] outline-0 bg-transparent rounded-2xl border-2 border-gray-300 px-5 py-4' 
            placeholder='Enter your Name' 
            type="text" 
            onChange={(e) => setPost({...post, name: e.target.value})}
            />
            <textarea 
              // value={post.prompt} 
              className='w-[80%] outline-0 bg-transparent rounded-2xl border-2 border-gray-300 px-5 py-4' 
              placeholder='Write your prompt...' 
              type="text" 
              onChange={(e) => setPost({...post, prompt: e.target.value})}
            />
          
        </div>
        <div className='w-[80%] flex gap-5 flex-wrap'>
            <button className='
                    bg-blue-500
                    rounded-2xl
                    px-4
                    py-3
                    cursor-pointer
                    text-white
                    flex
                    items-center
                    justify-center
                    gap-2
                    flex-1
                    '
                    // isLoading={generateImageLoading}
                    // isDisabled={post.prompt === ''}
                    onClick={generateImageFun}
                    ><AutoAwesome/>Generate Image</button>
            <button className='
                    bg-transparent
                    border-3
                    border-blue-500
                    text-blue-500
                    rounded-2xl
                    px-4
                    py-3
                    cursor-pointer
                    flex
                    items-center
                    justify-center
                    gap-2
                    flex-1
                    '
                    onClick={createPostFun}
                    // isLoading={createPostLoading}
                    // isDisabled={post.name === '' || post.prompt === '' || post.photo === ''}
                    ><CreateRounded/>Post Image</button>
        </div>
    </div>
  )
}

export default GenerateImageForm