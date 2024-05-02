import React from 'react'
import './Header.css'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
import profile_header from "../../images/profile-header.jpg"

function Header() {
   return (
      <header>
         <nav className="navbar navbar-expand-lg">
         <div className="container">
            <Link className="navbar-brand" to={`/`}><img src={logo} alt="" /></Link>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon navbar-dark text-white barHeaderIcon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav ms-auto align-items-center">
               <Link className="text-white nav-link" aria-current="page" to={`/`}>Home</Link>
               <Link className="text-white nav-link" to={`/browse`}>Browse</Link>
               <Link className="text-white nav-link" to={`/details`}>Details</Link>
               <Link className="text-white nav-link" to={`/streams`}>Streams</Link>
               <Link className="text-white nav-link profileLink" to={`/profile`}>Profile <img src={profile_header} className='rounded-pill' alt="" /></Link>
               </div>
            </div>
         </div>
         </nav>
      </header>
   )
}

export default Header