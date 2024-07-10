import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const amount = useSelector((store) => store.basket.amount)
  return (
   <div className='flex items-center justify-evenly py-4 mt-4 text-lg font-medium'>
    <p>Home</p>
    <p>Basket
        <span className='text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1'>{amount}</span>
    </p>
   </div>
  )
}

export default Navbar
