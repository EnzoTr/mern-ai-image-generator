import { useState } from 'react'
import './App.css'
import '../src/main.css'
import styled, { ThemeProvider } from 'styled-components'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <div className='flex items-center justify-center'>
        <div className='w-screen max-w-[1920px]'>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/post" element={<CreatePost/>} exact/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
