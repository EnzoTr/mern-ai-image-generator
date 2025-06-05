import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar.jsx'
import ImageCard from '../components/ImageCard.jsx'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { getPosts } from '../api'


const Home = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getAllPosts = async () => {
    setLoading(true);
    await getPosts().then((res)=>{
      setPosts(res?.data?.data);
      setFilteredPosts(res?.data?.data);
      setLoading(false);
    }).catch((err)=>{
      setLoading(false);
      setError(err?.response?.data?.message || 'Something went wrong');
    });
  };

  useEffect(()=>{
    getAllPosts();
  },[]);

  //Search
  useEffect(()=>{
    if(!search){
      setFilteredPosts(posts);
    }
    const searchFilteredPosts = posts.filter((post)=>{
      const promptMatch = post?.prompt?.toLowerCase().includes(search.toLowerCase());
      const authorMatch = post?.name?.toLowerCase().includes(search.toLowerCase());

      return promptMatch || authorMatch;
    })

    if(search){
      setFilteredPosts(searchFilteredPosts);
    }

  },[posts, search]);

  return (
    <div className='
    h-screen
    flex
    flex-col
    items-center
    gap-1
    mt-5
    px-7
    py5
    '>
      
      <h2 className='opacity-60'>Explore popular post in the Community</h2>
      <p className='font-bold text-3xl mb-10'>Generated with AI</p>
      <SearchBar search={search} setSearch={setSearch}/>

      <div className='mt-5 flex justify-center w-screen px-15 py-5 '>

        {error && <div className='text-red-700 font-semibold'>{error}</div>}
        {loading ? (
          <CircularProgress/>
        ) : (
          <div className='w-[100%] max-w-[1920px] grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {filteredPosts.length > 0 ? (
                <>
                  {filteredPosts
                    .slice()
                    .reverse()
                    .map((item, index)=>(
                      <ImageCard key={index} item={item}/>
                    ))
                  } 
                </>
              ) : (
                <h2 className='font-medium opacity-75 text-2xl col-span-full text-center mt-20'>No posts found 🥲</h2>
            )}
          </div>
        )}
        
      </div>

    </div>
  )
}

export default Home