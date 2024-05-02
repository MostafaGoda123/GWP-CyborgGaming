import React from 'react'
import './CardGaming.css'

function CardGaming({item}) {
   return <div key={item.id} className="row  align-items-center">

      <div className="col-lg-1 col-12 text-center">
         <img src={item.image} className='rounded-4' alt="" />
      </div>
      <div className="col-lg-2 col-6 px-3 py-3">
         <h4>{item.title}</h4>
         <p className="text-dark-emphasis m-0">{item.category}</p>
      </div>
      <div className="col-lg-2 col-6 px-3 py-3">
         <h4>Date Added</h4>
         <p className="text-dark-emphasis m-0">{item.dateAdd}</p>
      </div>
      <div className="col-lg-2 col-6 px-3 py-3">
         <h4>Hours Played</h4>
         <p className="text-dark-emphasis m-0">{item.hourPlayed}</p>
      </div>
      <div className="col-lg-2 col-6 px-3 py-3">
         <h4>Currently</h4>
         <p className="text-dark-emphasis m-0">{item.downloads}</p>
      </div>
      <div className="col-lg-3 col-12 text-center ">
         <button className={`w-50  rounded-4  ${item.downloads==="Download"?"secondaryButton":"border border-1 p-2 border-dark-subtle text-dark-emphasis bg-transparent"}`} >{item.downloads}</button>
      </div>

   </div>
}

export default CardGaming