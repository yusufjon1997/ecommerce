import React from 'react'
import Banner from '../components/Banner/Banner';
import { Outlet } from 'react-router-dom'


function Home() {
  return (
    <>
        <Banner />
        <Outlet />
    </>
  )
}

export default Home;