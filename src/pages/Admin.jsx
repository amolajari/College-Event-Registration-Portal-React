import React, { useEffect, useState } from 'react'
import { dataRef } from '../firebase/Firebase'

const Admin = () => {
  const [allValue, setAllValue] = useState([])

  useEffect(()=>{
    dataRef.ref().child("participants").on('value', data=>{
      const getData = Object.values(data.val())
      setAllValue(getData)
    })
  },[])
  console.log(allValue)
  return (
    <div className='bg-lime-300 h-screen -mt-2 flex'>
      <div className=' w-full mt-10'>
      <h1 className='mx-4 my-6 text-xl font-semibold'>PARTICIPANTS DATABASE</h1>

      <table class="min-w-full divide-y divide-gray-200 ">
        <thead className=''>
          <tr>
            <th class="px-6 py-5 border bg-gray-400 border-black text-left text-lg leading-4 font-medium text-Black-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-5 border bg-gray-400 border-black text-left text-lg leading-4 font-medium text-Black-500 uppercase tracking-wider">Branch</th>
            <th class="px-6 py-5 border bg-gray-400 border-black text-left text-lg leading-4 font-medium text-Black-500 uppercase tracking-wider">Year</th>
            <th class="px-6 py-5 border bg-gray-400 border-black text-left text-lg leading-4 font-medium text-Black-500 uppercase tracking-wider">College Name</th>
            <th class="px-6 py-5 border bg-gray-400 border-black text-left text-lg leading-4 font-medium text-Black-500 uppercase tracking-wider">Contest Name</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {allValue.map((data, i) => (
            <tr key={i}>
              <td class="px-6 py-4 border border-black whitespace-no-wrap">{data.fullName}</td>
              <td class="px-6 py-4 border border-black whitespace-no-wrap">{data.branch}</td>
              <td class="px-6 py-4 border border-black whitespace-no-wrap">{data.year}</td>
              <td class="px-6 py-4 border border-black whitespace-no-wrap">{data.collegeName}</td>
              <td class="px-6 py-4 border border-black whitespace-no-wrap">{data.contestName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  )
}

export default Admin
