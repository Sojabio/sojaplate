import './App.css'
import InstallPWA from './components/InstallPWA'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Form  from './components/Form'
import Card from './components/Card'
import View from './pages/View'
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {


  return (
    <Router>
      <InstallPWA/>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<Card />} />
        <Route path="/view" element={<View />} />
      </Routes>
  </Router>
  )
}

export default App
