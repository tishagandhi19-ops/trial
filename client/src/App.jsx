import React from 'react'
import Register from './pages/Register.jsx'
import Allusers from './pages/Alluser'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>  
        {/* Home */} <Route path="/" element={<Allusers />} />
      <Route path="/register" element={<Register />} />
      {/* Login */} <Route path="/login" element={<Login />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
