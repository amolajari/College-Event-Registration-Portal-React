import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
    <div className='inline-block bg-black text-white w-full p-8'>
      <div className='float-left font-bold text-3xl'>
        <Link to='/'>SOFTCLONES</Link>
      </div>
      <div className='text-xl'>
        <ul className='inline-flex float-right'>
          <li className='mx-5'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-5'>
            <Link to='/admin-login'>Admin</Link>
          </li>
          <li className='mx-5'>
            <Link to='/new-registration' className='border rounded-full px-7 py-3'>Participate</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
