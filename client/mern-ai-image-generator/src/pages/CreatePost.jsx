import React from 'react'
import GenerateImageForm from '../components/GenerateImageForm.jsx'
import styled from 'styled-components' 
import GeneratedImageCard from '../components/GeneratedImageCard.jsx'
import { useState } from 'react'

const CreatePost = () => {

  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  return (
    <div>
      <div className='flex flex-wrap gap-8 px-7 mt-10'>
        <GenerateImageForm 
          post={post} 
          setPost={setPost} 
          createPostLoading={createPostLoading} 
          setCreatePostLoading={setCreatePostLoading}
          generateImageLoading={generateImageLoading} 
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GeneratedImageCard loading={generateImageLoading} src={post.photo}/>
      </div>
    </div>
  )
}

export default CreatePost