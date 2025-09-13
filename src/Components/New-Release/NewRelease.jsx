import React from 'react'
// import NewData from './NewData'

function NewRelease() {
  return (
    <>
    <div className="newRelease">
        <span className='bg-gray-300 text-black'>
          <ul className='flex list-none w-[50%] justify-evenly left'>
            <li className='hover:text-gray-400'>Bestsellers</li>
            <li className='hover:text-gray-400'>Hot New Releases</li>
            <li className='hover:text-gray-400'>Movers and Shakers</li>
            <li className='hover:text-gray-400'>Most Wished for</li>
            <li className='hover:text-gray-400'>Most Gifted</li>
          </ul>
          <hr /><br />
        </span>
        {/* <span >< NewData/></span> */}
    </div>  
    </>
  )
}

export default NewRelease
