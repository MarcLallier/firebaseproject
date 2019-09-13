import React from 'react'
import {Link} from 'react-router-dom'

import InsignedLink from './InsignedLink'
import OutsignedLink from './OutsignedLink';


const Navbar = () => {
  return (

    <nav className= "nav-wrapper red lighten-1">
      <div className= "container">
        <Link to = '/' className="brand-logo">marco</Link>
        <InsignedLink />
        <OutsignedLink />
      </div>
    </nav>


  )



}

export default Navbar