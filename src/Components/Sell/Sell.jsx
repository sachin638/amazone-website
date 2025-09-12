import React from 'react'
import banner from '../../assets/poster1.png'
function Sell() {
  return (
    <>
      <div className="sell">
        <div className="banner1">
         <span className='w-full h-67 relative'><img src={banner} alt="" />
         <button className='absolute top-102 left-46 text-white
         -translate-x-1/2 -translate-y-1/2 bg-orange-500  
         px-11 py-5  rounded-md text-lg font-semibold shadow-md'>
         <b>Start Selling</b></button>
         </span>

        </div>
      </div>
    </>
  )
}

export default Sell
