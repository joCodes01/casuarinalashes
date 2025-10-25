import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import NewClientForm from './pages/NewClientForm.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import AccessibilityStatement from './pages/AccessibilityStatement.jsx'
import NotFound from './pages/NotFound.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'


import '/src/Styles.css'


function App() {

  return(
    < >
      <Router>
        <Navbar />
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newclientform' element={<NewClientForm />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/termsandconditions' element={<TermsAndConditions />} />
            <Route path='/accessibilitystatement' element={<AccessibilityStatement />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </>
        <Footer />
      </Router>
    </>
  )
}

export default App

