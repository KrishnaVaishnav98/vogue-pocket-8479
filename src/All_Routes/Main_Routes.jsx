import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login'
import Company from '../Pages/Company'
import Support from '../Pages/Support'
import Homepage from '../Pages/Homepage'
import Register from '../Pages/Homepage'

const Main_Routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            {/* <Route path='/login' element={<Login />}/> */}
            <Route path='/support' element={<Support />}/>
            <Route path='/company' element={<Company />}/>
            <Route path='/register' element={<Register />}/>

        </Routes>
    </div>
  )
}

export default Main_Routes