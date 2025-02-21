import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import About from './About'
import Loading from './Loading'
import Login from '../Login/page'

const page = () => {
  useEffect
  return (
    <div>
      <h1>welcome</h1>
      <Login/>
      <Loading/>
      <Sidebar />
      <About />
    </div>
  )
}

export default page
