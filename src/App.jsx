import React from 'react'



import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayOut from './components/Layer/RootLayOut';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import Journalist from './components/pages/Journalist';
import ABout from './components/pages/About';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayOut/>}>

      <Route index element ={<Home/>}/>
      <Route path='/shop' element ={<Shop/>}>Shop</Route>
      <Route path='/about' element ={<ABout/>}>About</Route>
      
      <Route path='/contact' element ={<Contact/>}>Contact</Route>
      <Route path='/journalist' element ={<Journalist/>}>Journal</Route>

    </Route>
  )
);



const App = () => {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App