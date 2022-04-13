import React from 'react'
import { Outlet , useParams } from 'react-router-dom';

function Contact() {

  let { id } = useParams();

  return (
    <div>
      <h2>Contact</h2>
      <p>{id}</p>
      <Outlet />
    </div>

  )
}

export default Contact