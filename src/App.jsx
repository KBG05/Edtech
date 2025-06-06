import { Component, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router'
import Login from "@/pages/Login"
import Learn from "@/pages/Learn"
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ThemeProvider'
import { ThemeDropdown } from './components/ThemeDropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/learn' element={<Learn/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
