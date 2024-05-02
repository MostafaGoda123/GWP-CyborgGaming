import React from 'react'
import './Browse.css'
import serv_1 from '../../images/service-01.jpg'
import serv_2 from '../../images/service-02.jpg'
import serv_3 from '../../images/service-03.jpg'
import f_1 from '../../images/featured-01.jpg'
import f_2 from '../../images/featured-02.jpg'
import f_3 from '../../images/featured-03.jpg'
import { browseStreamItems, downloadItems } from '../Data/browseItems'
import { FaStar , FaDownload, FaCircleCheck , FaEye, FaGamepad  } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'

export default function Browse() {
   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
   };
   let navigate = useNavigate()
      return <>
         <div className="row ">
            <div className="col-lg-8 col-md-12 p-lg-2 py-2">
               <div className="bg-dark p-4 rounded-5">
                  <h1 className='fw-bolder mb-4'>Featured <span className='mainColor'>Games</span></h1>
                  <div className="row">
                     <div className="col-md-4 p-3">
                        <img src={f_1} className='w-100 rounded-4 mb-3' alt="" />
                        <p className="d-flex justify-content-between align-items-center m-0">
                           <span className='fw-bold'>CS-GO</span>
                           <span className='d-flex align-items-center'><FaStar className='me-1 text-warning' />4.8</span>
                        </p>
                        <p className="d-flex justify-content-between align-items-center m-0">
                           <span className='text-dark-emphasis'>249k downloads</span>
                           <span className='d-flex align-items-center'><FaDownload className='me-1 mainColor' />2.3M</span>
                        </p>
                     </div>
                     <div className="col-md-4 p-3">
                        <img src={f_2} className='w-100 rounded-4 mb-3' alt="" />
                        <p className="d-flex justify-content-between align-items-center m-0">
                           <span className='fw-bold'>Gamezer</span>
                           <span className='d-flex align-items-center'><FaStar className='me-1 text-warning' />4.8</span>
                        </p>
                        <p className="d-flex justify-content-between align-items-center m-0">
                           <span className='text-dark-emphasis'>249k downloads</span>
                           <span className='d-flex align-items-center'><FaDownload className='me-1 mainColor' />2.3M</span>
                        </p>
                     </div>
                     <div className="col-md-4 p-3">
                        <img src={f_3} className='w-100 rounded-4 mb-3' alt="" />
                        <p className="d-flex justify-content-between align-items-center m-0">
                           <span className='fw-bold'>Island Rusty</span>
                           <span className='d-flex align-items-center'><FaStar className='me-1 text-warning' />4.8</span>
                        </p>
                        <p className="d-flex justify-content-between align-items-center m-0">
                           <span className='text-dark-emphasis'>249k downloads</span>
                           <span className='d-flex align-items-center'><FaDownload className='me-1 mainColor' />2.3M</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-12 p-lg-2 py-2">
               <div className="bg-dark p-4 rounded-5">
                  <h1 className='fw-bolder mb-4'>Top <span className='mainColor'>Downloaded</span></h1>
                  <ul className="list-unstyled py-4">
                     {
                        downloadItems.map(item => {
                           return <>
                           <li className='d-flex align-items-center'>
                              <img src={item.image} className=' rounded-4' alt="" />
                              <div className="content flex-grow-1 px-3">
                                 <h5 className='m-0'>{item.title}</h5>
                                 <p className='m-0 text-dark-emphasis my-1'>{item.category}</p>
                                 <span className='d-flex align-items-center'><FaStar className='text-warning me-1' />{item.rate}<FaDownload className='mainColor ms-3 me-1' />{item.downloads}</span>
                              </div>
                              <span className='rounded-pill bg-black bg-opacity-25 mainColor fs-5 d-flex justify-content-center align-items-center' style={{ cursor:'pointer' , width : `50px` , height : `50px` }}><FaDownload  /></span>
                           </li>
                           <hr className='my-4' />
                        </>
                        })
                     }
                     <Link to={`/profile`} className='mainColor h5 text-center d-block text-decoration-none' >View All Games</Link>
                  </ul>
               </div>
            </div>
         </div>
         <div className="start">
            <h1 className='fw-bolder text-center'>How To Start Your <span className='mainColor'>Live Stream</span></h1>
            <div className="row my-5">
               <div className="col-lg-4 col-md-6 p-3">
                  <div className="card bg-transparent text-white border border-1 border-light border-opacity-10 rounded-5 p-4 ">
                     <img src={serv_1} width={50} className='rounded-pill' alt="" />
                     <h3 className='my-3'>Go To Your Profile</h3>
                     <p className='text-dark-emphasis m-0'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                  </div>
               </div>
               <div className="col-md-4 p-3">
                  <div className="card bg-transparent text-white border border-1 border-light border-opacity-10 rounded-5 p-4 ">
                     <img src={serv_1} width={50} className='rounded-pill' alt="" />
                     <h3 className='my-3'>Live Stream Button</h3>
                     <p className='text-dark-emphasis m-0'>If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</p>
                  </div>
               </div>
               <div className="col-md-4 p-3">
                  <div className="card bg-transparent text-white border border-1 border-light border-opacity-10 rounded-5 p-4 ">
                     <img src={serv_1} width={50} className='rounded-pill' alt="" />
                     <h3 className='my-3'>You Are Live</h3>
                     <p className='text-dark-emphasis m-0'>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</p>
                  </div>
               </div>
            </div>
            <button className='primaryButton d-block mx-auto' onClick={()=>navigate('/profile')}>Go To Profile</button>
         </div>
         <div className="popular p-4 bg-dark rounded-5">
            <h1 className='fw-bolder mb-4'>Most Popular <span className='mainColor'>Live Stream</span></h1>
            <div className="row">
               {
                  browseStreamItems.map((item , index) => {
                     return <div key={index} className="col-lg-3 col-md-6 p-3">
                           <div className='parentHover'>
                              <div className="position-relative">
                                 <img src={item.streamImg} className='rounded-5 w-100' alt="" />
                                 <span className="imageHoverLive">Live</span>
                                 <p className="imageHoverParagraph">
                                    <span><FaEye className='me-2' />1.2k</span>
                                    <span><FaGamepad className='me-2' />CS-GO</span>
                                 </p>
                              </div>
                              <div className="d-flex gap-3 py-4">
                                 <img src={item.avatarImg} className='rounded-pill' height={50} alt="" />
                                 <div>
                                    <p className="mainColor mb-2"><FaCircleCheck className='me-2' />{item.subTitle}</p>
                                    <h4>{item.title}</h4>
                                 </div>
                              </div>
                           </div>
                     </div>
                  })
               }
            </div>
         </div>
      </>
}
