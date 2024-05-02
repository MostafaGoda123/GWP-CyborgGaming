import React from 'react'
import './Gaming.css'
import gamingItems from '../Data/gamingItems'
import CardGaming from '../6_CardGaming/CardGaming'

function Gaming() {
   return <div className="gaming bg-dark p-5 rounded-5">
   <h1 className='fw-bolder mb-4'>Your Gaming <span className='mainColor'>Library</span></h1>
   {
      gamingItems.map( (item,index) => {
         return <>
            <CardGaming item={item} />
            {
               gamingItems.length === index+1 ? "" : <hr />
            }
         </>
      } )
   }
</div>
}

export default Gaming