import React from 'react'
import styled from 'styled-components'
import {SearchRounded} from '@mui/icons-material'

function SearchBar({search, setSearch}) {
  return (
    <div className='
    flex
    w-[90%]
    items-center
    border-gray-400
    border-2
    rounded-2xl
    px-4
    '>
        <SearchRounded/>
        <input 
        className='w-screen px-3 py-3 outline-0 bg-transparent' 
        type="text" 
        placeholder='Search with prompt or name...' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchBar