import React from 'react'
import styled from 'styled-components'
import Button from './Button.jsx'
import {AddRounded} from '@mui/icons-material'

function Navbar() {
  return (
    <div className='
    flex
    flex-wrap
    justify-between
    items-center
    px-7
    py-5
    '>
        <a href='/' className='text-3xl font-bold text-blue-500'>GEN-IA</a>
        <a href='/post' className='
        bg-blue-500
        rounded-2xl
        px-4
        py-2
        cursor-pointer
        text-white
        flex
        items-center
        justify-between
        gap-2
        '><AddRounded/>Create new Post</a>
    </div>
    
  )
}

export default Navbar