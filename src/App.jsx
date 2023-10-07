import { useState } from 'react'
import { BrowserRouter, Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Aboutme from './components/Aboutme'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="packages" element={'hello how are you  werey'}/>
        <Route path="about-us" element={<Aboutme/>}/>
        <Route path="contact-us" element={''}/>
      </Route>
    </Route>
  )
)

function App() {
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App


