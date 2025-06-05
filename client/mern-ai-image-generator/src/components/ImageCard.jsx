import React from 'react'
import styled from 'styled-components'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import '../main.css'
import { Avatar } from "@mui/material";
import {DownloadRounded} from '@mui/icons-material'
import FileSaver from "file-saver";

function ImageCard({item}) {
  return (
    <div className='
    image-card
    transition-all 
    rounded-2xl 
    relative 
    cursor-pointer 
    hover:scale-[1.025]
    '
    >
      <LazyLoadImage className='rounded-[.4em] object-cover w-[100%] h-[100%]' src={item?.photo} />
      <div className='
      w-[100%]
      h-[100%]
      rounded-[.4em]
      flex
      flex-row
      items-end
      justify-between
      absolute
      bottom-0
      top-0
      left-0
      right-0
      bg-gray-950/50
      text-white
      px-5
      py-5
      transition-all
      opacity-0
      hover:opacity-100
      '>
        <div className='flex flex-col gap-2'>
          <h2>{item?.prompt}</h2>
          <span className='flex items-center gap-2'><Avatar sx={{width:'32px', height:'32px'}}>{item?.name[0]}</Avatar>{item?.name}</span>
        </div>
        <DownloadRounded 
        onClick={() => FileSaver.saveAs(item?.photo,"image.jpg")} 
        style={{transition:'all .1s ease-in-out'}} className='hover:scale-[1.5] hover:text-green-500'/>
      </div>
    </div>
  )
}

export default ImageCard