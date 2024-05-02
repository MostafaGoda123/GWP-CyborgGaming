import React from 'react'
import './CardMostPopular.css'
import { FaDownload, FaStar } from 'react-icons/fa6'

export default function CardMostPopular({item}) {
   return <div className="card bg-black bg-opacity-25 rounded-4 overflow-hidden">
   <img src={item.image} height={180} className='w-100' alt="" />
   <ul className='list-unstyled d-flex flex-column m-0 px-3 py-4 text-light'>
      <li className="d-flex justify-content-between align-items-center">
         <h5 className='m-0 mb-1'>{item.title}</h5>
         <div className="d-flex align-items-center gap-2">
            <FaStar className='text-warning' />
            {item.rate}
         </div>
      </li>
      <li className="d-flex justify-content-between align-items-center">
         <p className='text-dark-emphasis m-0 fs-5'>{item.category}</p>
         <div className="d-flex align-items-center gap-2">
            <FaDownload className='mainColor' />
            {item.downloads}
         </div>
      </li>
   </ul>
</div>
}
