import React from 'react'
import mostPopularItems from '../Data/MostPopularItem'
import CardMostPopular from '../4_CardMostPopular/CardMostPopular'

function MostPopular() {



   return <div className="mostPopular bg-dark p-5 rounded-5">
      <h1 className='fw-bolder mb-4'>Most Popular <span className='mainColor'>Right Now</span></h1>
      <div className="row">
         {
            mostPopularItems.map((item) => {
               return <div key={item.id} className="col-lg-3 col-md-6 p-3 ">
                  <CardMostPopular item={item} />
               </div>
            })
         }
      </div>
   </div>
}

export default MostPopular