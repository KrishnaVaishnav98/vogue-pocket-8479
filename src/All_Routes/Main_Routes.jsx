import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'

import Support from '../Pages/Support'
import Homepage from '../Pages/Homepage'

import Application from '../Pages/Application'
import Process from '../Pages/Process'
import { Product } from '../Pages/Product'
import { SignUp } from '../Pages/SignUp'

import { BankApplication } from '../Pages/BankApplication'
import { Admin } from '../Pages/Admin'
import { Profile } from '../Components/Profile'
import { PrivateRoute } from './PrivateRoute'


const Main_Routes = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/support' element={<Support />} />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/verification' element={<PrivateRoute><Application /></PrivateRoute>} />

        <Route path='/process' element={<Process />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<PrivateRoute><Product /></PrivateRoute>} />
        <Route path='/bankApplication' element={<PrivateRoute><BankApplication /></PrivateRoute>} />
        <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>} />
      </Routes>
    </div >

  )
}

export default Main_Routes