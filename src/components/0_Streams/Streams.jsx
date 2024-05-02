import React from 'react'
import serv_1 from '../../images/service-01.jpg'
import serv_2 from '../../images/service-02.jpg'
import serv_3 from '../../images/service-03.jpg'
import f_1 from '../../images/featured-01.jpg'
import f_2 from '../../images/featured-02.jpg'
import f_3 from '../../images/featured-03.jpg'
import { FaStar , FaDownload, FaCircleCheck , FaEye, FaGamepad  } from "react-icons/fa6";
import topStreamersItems, { popularStreamItems } from '../Data/streamItems'

export default function Streams() {
   return <>
   <div className="row ">
            <div className="col-lg-8 col-md-12 p-lg-2 py-2">
               <div className="bg-dark p-4 rounded-5">
                  <h1 className='fw-bolder mb-4'>Live <span className='mainColor'>Streams</span></h1>
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
                  <h1 className='fw-bolder mb-5'>Top <span className='mainColor'>Streamers</span></h1>
                  <ul className="list-unstyled">
                     {
                        topStreamersItems.map((item,index) => {
                           return <>
                           <li key={item.id} className='d-flex align-items-center'>
                              <h4 className='me-2'>{item.id}</h4>
                              <img src={item.image} className=' rounded-pill' alt="" />
                              <div className="content flex-grow-1 px-3">
                                 <span className='d-flex align-items-center mainColor gap-2'><FaCircleCheck />{item.name}</span>
                              </div>
                              <button className="primaryButton">Follow</button>
                              {/* <span className='rounded-pill bg-black bg-opacity-25 mainColor fs-5 d-flex justify-content-center align-items-center' style={{ cursor:'pointer' , width : `50px` , height : `50px` }}><FaDownload  /></span> */}
                           </li>
                           {topStreamersItems.length!==index+1 && <hr className='my-4' />}
                           {topStreamersItems.length===index+1 && <br />}
                        </>
                        })
                     }
                  </ul>
               </div>
            </div>
   </div>
   <div className="popular p-4 bg-dark rounded-5">
            <h1 className='fw-bolder mb-4'>Most Popular <span className='mainColor'>Live Stream</span></h1>
            <div className="row">
               {
                  popularStreamItems.map((item , index) => {
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
