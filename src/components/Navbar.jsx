import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <div className='flex  items-center w-full justify-between px-5 bg-[#1E235E] py-4'>
        <img src="https://img.freepik.com/free-vector/play-vibrant-gradient-typography_53876-93868.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_hybrid" alt="" width={50} height={50} className='rounded-lg'/>



        <ul className='flex space-x-10 text-white'>
           <li><Link to='/'>Home</Link> </li>
           <li><Link to='/truth'>Truth</Link> </li>
           <li><Link to='/dare'>Dare</Link> </li>
        </ul>
    </div>      



    </>
  )
}

export default Navbar
