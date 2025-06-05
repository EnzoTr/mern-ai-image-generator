import React from 'react'
import styled from 'styled-components'
import {CircularProgress} from '@mui/material'

function GeneratedImageCard({src, loading}) {
  return (
    <div className='
    flex
    w-[100%] 
    min-h-[300px]
    flex-col
    gap-4
    justify-center 
    items-center 
    flex-1 
    min-w-[300px] 
    px-6 py-6 
    rounded-2xl 
    border-4 border-dashed border-amber-600'>

      {loading ? (
        <> 
            <CircularProgress style={{color: 'inherit', width:'24px', height:'24px'}}/>
            Generating image... 
        </> 
        ) : src ? (
          <img className='w-[100%] h-[100%] object-cover rounded-2xl bg-neutral-300 border-0' src={src} />
        ) : (
          <>Write a Prompt</>
      )}

    </div>
  );
};
export default GeneratedImageCard