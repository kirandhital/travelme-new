import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  
        path='/'
        element={<Home />} >
        </Route>
         <Route  
        path='/about'
        element={<About />} >
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
