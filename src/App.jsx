import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import NewClientForm from './pages/NewClientForm.jsx'
import NotFound from './pages/NotFound.jsx'
import { Navbar } from './components/Navbar.jsx'
import '/src/Styles.css'


function App() {

  return(
    <div  >
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newclientform' element={<NewClientForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App

