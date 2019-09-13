import React from 'react'
import {NavLink} from 'react-router-dom'



const InsignedLink = () => {
  return (

    <ul className = "right">
      
      <li><NavLink to = '/create'> New Project </NavLink></li>
      <li> <NavLink to = '/'> Log out </NavLink></li>
      <li><NavLink to = '/' className="btn btn-floating green"> MLL </NavLink></li>
    
    </ul>


  )



}

export default InsignedLink