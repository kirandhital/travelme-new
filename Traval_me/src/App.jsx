import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Destinations from './Pages/Destinations'
import Contacts from './Pages/Contacts'
import Packages from './Pages/Packages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/destinations' element={<Destinations />} /> */}
        <Route path='/contact' element={<Contacts />} />
        <Route path='/packages' element={<Packages />} />
      </Routes>
    </Router>
  )
}

export default App
