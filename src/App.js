import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NewRegistration from './pages/NewRegistration'
import Navbar from './components/Navbar'
import AdminLogin from './pages/AdminLogin'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
        </div>

        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin-login' element={<AdminLogin/>}/>
            <Route path='/new-registration' element={<NewRegistration/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
