import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NotFound404 from './pages/NotFound404'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFound404 />} />
      </Route>
    </Routes>
  )
}

export default App