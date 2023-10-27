import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-full text-center my-52'>
      <div className='my-15 text-4xl font-semibold'>
        Elevate Your College Experience: Register for Thrilling Contests!
      </div>
      <div className='my-10 text-2xl font-normal'>Unleash Your Talent and Compete for Glory</div>
      <div className='my-20 text-2xl font-medium'>
            <Link to='/new-registration' className='border border-black bg-black text-white rounded-full px-10 py-4'>Participate</Link>
      </div>
    </div>
  )
}

export default Home
