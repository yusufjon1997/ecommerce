import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <>
        {/* <Navbar /> */}
        <Banner />
        <Outlet />
    </>
  )
}

export default Home;