import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavLink() {
  return (
    <>
      <div className=''>
        <span className=''>
          <ul className='flex justify-evenly bg-gray-400 text-black h-8  '>
            <Link to='/'><li className='hover:text-white'>All</li></Link>
            <Link to='/fresh'><li className='hover:text-white '>Fresh</li></Link>
            <Link to='/sell'><li className='hover:text-white'>Sell</li></Link>
            <Link to="/todays-deals">Today's Deals</Link>
            <Link to="/new-releases">New Releases</Link>
            <Link to='/BestSellers'><li className='hover:text-white'>BestSellers</li></Link>
            <Link to='/mobile'><li className='hover:text-white'>Mobiles</li></Link>
            <Link to='/prime'><li className='hover:text-white'>Prime</li></Link>
            <Link to='/customer '><li className='hover:text-white'>Customer Service</li></Link>
            <Link to='/electronics'><li className='hover:text-white'>Electronics</li></Link>
            <Link to='/fashion'><li className='hover:text-white '>Fashion</li></Link>
            <Link to='/recipes'><li className='hover:text-white '>Recipes</li></Link>
          </ul>
          <Outlet />
        </span>
      </div>
    </>
  )
}

export default NavLink
