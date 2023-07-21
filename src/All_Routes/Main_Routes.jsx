import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login'
import Company from '../Pages/Company'
import Support from '../Pages/Support'
import Homepage from '../Pages/Homepage'
import Register from '../Pages/Homepage'
import Application from '../Pages/Application'

import Process from '../Pages/Process'

import { Product } from '../Pages/Product'
import { SignUp } from '../Pages/SignUp'


const Main_Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/support' element={<Support />}/>
            <Route path='/company' element={<Company />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/verification' element={<Application/>}/>

            <Route path='/process' element={<Process/>}/>

            <Route path='/products' element={<Product/>}/>

        </Routes>
    </div>
  )
}

export default Main_Routes