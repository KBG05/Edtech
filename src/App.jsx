import { Component, useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Loader2Icon } from 'lucide-react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router'
import Login from "@/pages/Login"
import Learn from "@/pages/Learn"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/Learn' element={<Learn/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
