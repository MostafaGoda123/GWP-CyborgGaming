import React from 'react'
import './Hero.css'

function Hero() {
   return <div className="hero p-5 rounded-5">
      <p className='m-0'>Welcome To Cyborg</p>
      <h1 className="fw-bolder text-uppercase my-4"><span className="mainColor">Browse</span> our <br/>Popular<br/>Games here</h1>
      <button className='primaryButton'>Browse now</button>
   </div>
}

export default Hero