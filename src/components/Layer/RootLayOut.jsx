import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div>
        <Navbar/>
        {/* <Outlet/> */}
    </div>
  )
}

export default RootLayOut