import React from 'react'
import Gaming from './../5_Gaming/Gaming';
import prof from '../../images/profile.jpg'
import { FaEye } from "react-icons/fa";
import clipProfileItems from '../Data/clipProfileItems';

export default function Profile() {
   
   return <>
      <section className="p-5 bg-dark bg-opacity-50 rounded-5">
         <div className="row align-items-center">
            <div className="col-md-4">
               <img src={prof} className='w-100 rounded-4' alt="" />
            </div>
            <div className="col-md-4 py-4 d-flex flex-column gap-4">
               <button className="primaryButton w-fit">Offline</button>
               <h2 className='fw-bolder m-0'>Alan Smithee</h2>
               <p className='text-dark-emphasis m-0'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
               <button className="secondaryButton w-fit">Start live Stream</button>
            </div>
            <div className="col-md-4">
               <ul className="bg-dark rounded-4 p-4 list-unstyled w-100 text-dark-emphasis">
                  <li className="d-flex justify-content-between py-1">
                     <span>Games Downloaded</span>
                     <span className="mainColor">3</span>
                  </li>
                  <hr />
                  <li className="d-flex justify-content-between py-1">
                     <span>Friends Online</span>
                     <span className="mainColor">16</span>
                  </li>
                  <hr />
                  <li className="d-flex justify-content-between py-1">
                     <span>Live Streams</span>
                     <span className="mainColor">None</span>
                  </li>
                  <hr />
                  <li className="d-flex justify-content-between py-1">
                     <span>Clips</span>
                     <span className="mainColor">29</span>
                  </li>
               </ul>
            </div>
         </div>
         <hr className='my-5' />
         <div>
            <h1 className='fw-bolder mb-4'>Your Most Popular<span className='mainColor'>Clips</span></h1>
            <div className="row">
               {
                  clipProfileItems.map((item , index) => {
                     return <div key={index} className="col-lg-3 p-2 col-md-6">
                     <div className="card p-3 rounded-4 bg-black bg-opacity-25">
                        <img src={item.image} className='rounded-4 w-100 mb-3' alt="" />
                        <p className="d-flex align-items-center justify-content-between m-0 text-light">
                           <span className='h5'>{item.title}</span>
                           <span className='d-flex align-items-center'><FaEye className='mainColor me-1'/>{item.numbers}</span>
                        </p>
                     </div>
                  </div>
                  })
               }
            </div>
         </div>
      </section>
      <Gaming />
   </>
}
