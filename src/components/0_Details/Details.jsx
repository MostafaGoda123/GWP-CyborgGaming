import React from 'react'
import det_1 from '../../images/feature-left.jpg'
import det_2 from '../../images/feature-right.jpg'
import fortnite_1 from '../../images/details-01.jpg'
import fortnite_2 from '../../images/details-02.jpg'
import fortnite_3 from '../../images/details-03.jpg'
import './Details.css'
import { VscDebugStart } from 'react-icons/vsc';
import { FaDownload, FaGamepad, FaServer, FaStar } from 'react-icons/fa';
import mostPopularItems from '../Data/MostPopularItem'

export default function Details() {
   return <>
      <div className="row">
         <div className="col-md-4">
            <img src={det_1} height={300} className='rounded-5 w-100 my-2' alt="" />
         </div>
         <div className="col-md-8 position-relative">
            <img src={det_2} height={300} className='rounded-5 w-100 my-2' alt="" />
            <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target='_blank' className="goToYoutube" rel="noreferrer"><VscDebugStart /></a>
         </div>
      </div>
      <h1 className="fw-bolder text-center">FORTNITE DETAILS</h1>
      <div className="fortnite p-4 bg-dark rounded-5 d-flex flex-column gap-4">
         <div className="row">
            <div className="col-lg-6 p-3">
               <div className='bg-black bg-opacity-25 p-4 d-flex flex-column gap-2 rounded-5'>
                  <p className='d-flex justify-content-between m-0'>
                     <span className="">Fortnite</span>
                     <span className='d-flex align-items-center'><FaStar className='text-warning me-2' />4.8</span>
                  </p>
                  <p className='d-flex justify-content-between m-0'>
                     <span className="text-dark-emphasis">Sandbox</span>
                     <span className='d-flex align-items-center'><FaDownload className='mainColor me-2' />2.3M</span>
                  </p>
               </div>
            </div>
            <div className="col-lg-6 p-3">
               <div className='row bg-black bg-opacity-25 p-4 rounded-5'>
                  <div className="col-3 text-center"><p className='m-0 text-warning mb-2'><FaStar /></p><p className='m-0'>4.8</p></div>
                  <div className="col-3 text-center"><p className='m-0 mainColor mb-2'><FaDownload /></p><p className='m-0'>2.3M</p></div>
                  <div className="col-3 text-center"><p className='m-0 mainColor mb-2'><FaServer /></p><p className='m-0'>36GB</p></div>
                  <div className="col-3 text-center"><p className='m-0 mainColor mb-2'><FaGamepad /></p><p className='m-0'>Action</p></div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-4 col-md-6 p-md-3 py-2"><img src={fortnite_1} className='w-100 rounded-5' alt="" /></div>
            <div className="col-lg-4 col-md-6 p-md-3 py-2"><img src={fortnite_2} className='w-100 rounded-5' alt="" /></div>
            <div className="col-lg-4 col-md-6 p-md-3 py-2"><img src={fortnite_3} className='w-100 rounded-5' alt="" /></div>
         </div>
         <p className='text-dark-emphasis lh-lg'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via <span className='mainColor' style={{cursor:'pointer'}}>PayPal</span> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
         <button className="secondaryButton py-3">Download Fortnite Now</button>
      </div>
      <div className="games bg-dark p-5 rounded-5">
         <h1 className='fw-bolder mb-4'>Other Related <span className='mainColor'>Games</span></h1>
         <div className="row">
            {
               mostPopularItems.map(item => {
                  return <div className="col-md-6 py-3 ">
                     <div className="d-flex align-items-center border rounded-4 border-1 border-white border-opacity-10">
                        <img src={item.image} width={150} className='rounded-4' alt="" />
                        <div className="px-3 flex-grow-1">
                           <h5 className='m-0 mb-2'>{item.title}</h5>
                           <p className="m-0 text-dark-emphasis">{item.category}</p>
                        </div>
                        <div className="px-3">
                           <p className='m-0 d-flex align-items-center gap-2 mb-2'><FaStar className='text-warning'/>{item.rate}</p>
                           <p className="m-0 d-flex align-items-center gap-2 "><FaDownload className='mainColor'/>{item.downloads}</p>
                        </div>
                     </div>
                  </div>
               })
            }
         </div>
      </div>
   </>
}
