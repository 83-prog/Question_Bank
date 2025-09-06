import { useState } from 'react'
import './App.css'
import { Navbar } from './Component/Navbar/Navbar'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Component/Navbar/Home'
import { About } from './Component/Navbar/About'
import { Contact } from './Component/Navbar/Contact'
import { Services } from './Component/Navbar/Services'
import { CreatePost } from './pages/createPost/CreatePost'
import { Singlepost } from './pages/createPost/Singlepost'

function App() {

  return (
    <>
   <div> 
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/singlePost/:postID' element={<Singlepost/>}/>
      <Route path='/updatepost/:postID' element={<CreatePost/>}/>
    </Routes>

   </Router>
    </div>
    </>
  )
}

export default App
