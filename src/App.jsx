import { Component, useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Loader2Icon } from 'lucide-react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router'
import Login from "@/pages/Login"
import Learn from "@/pages/Learn"
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/learn' element={<Learn/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
