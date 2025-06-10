import {  useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router'
import Login from "@/pages/Login"
import Learn from "@/pages/Learn"
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/ThemeProvider'
import Test from './pages/Test'
import Certify from './pages/Certify'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar/>
          <Routes >
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/learn' element={<Learn/>}></Route>
            <Route path='/learn/:categoryId' element={<Learn/>}></Route>
            <Route path='/learn/:categoryId/:topicId' element={<Learn/>}></Route>
            <Route path='/learn/:categoryId/:topicId/:chapterId' element={<Learn/>}></Route>
            
            <Route path='/test' element={<Test/>}></Route>
            <Route path='/test/:categoryId' element={<Test/>}></Route>
            <Route path='/test/:categoryId/:topicId' element={<Test/>}></Route>

            <Route path='/certify' element={<Certify/>}></Route>
            <Route path='/certify/:categoryId' element={<Certify/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
