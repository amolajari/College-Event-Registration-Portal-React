import React from 'react'
import { useRef } from 'react'

const NewRegistrationForm = (props) => {
  const fullNameInputRef = useRef()
  const branchInputRef = useRef()
  const yearInputRef = useRef()
  const collegeNameInputRef = useRef()
  const contestNameInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredFullName = fullNameInputRef.current.value
    const enteredBranch = branchInputRef.current.value
    const enteredYear = yearInputRef.current.value
    const enteredCollegeName = collegeNameInputRef.current.value
    const enteredContestName = contestNameInputRef.current.value

    const participantData={
      fullName: enteredFullName,
      branch: enteredBranch,
      year: enteredYear,
      collegeName: enteredCollegeName,
      contestName: enteredContestName
    }
    // console.log(participantData)
    props.onAddParticipant(participantData)
    
    if(participantData){
      window.location.href='/'
    }
  }
  return (
    <div className='bg-lime-300 h-screen -mt-2 flex justify-center items-center'>
        
        <div className='bg-white border-2 border-black w-1/3 rounded-lg shadow-sm py-5 px-5'>
        <h1 className='mx-4 my-8 text-xl font-semibold'>Contest Registration Form</h1>
          
          <form onSubmit={submitHandler}>
              <div className='my-4 text-xl'>
                <label htmlFor='fullName' className='mx-4'>Full Name:</label>
                <input 
                type='text' 
                id='fullName' 
                required 
                ref={fullNameInputRef}
                className='border border-black rounded-lg px-4 py-3'/>
              </div>

              <div className='my-6 text-xl'>
                <label htmlFor='branch' className='mx-4'>Branch:</label>
                <select id='branch' ref={branchInputRef} className=' border border-black rounded-lg px-4 py-3'>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="EnTC Engineering">EnTC Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechnical Engineering">Mechnical Engineering</option>
                </select>
              </div>

              <div className='my-6 text-xl'>
                <label htmlFor='year' className='mx-4'>Year:</label>
                <select id='year' ref={yearInputRef} className=' border border-black rounded-lg px-4 py-3'>
                  <option value="FY">FY</option>
                  <option value="SY">SY</option>
                  <option value="TY">TY</option>
                  <option value="BT">BT</option>
                </select>
              </div>
              <div className='my-6 text-xl'>
                <label htmlFor='collegeName' className='mx-4'>College Name:</label>
                <input 
                  type='text' 
                  id='collegeName' 
                  required 
                  ref={collegeNameInputRef}
                  className=' border border-black rounded-lg px-4 py-3'
                />
              </div>
              <div className='my-6 text-xl'>
                <label htmlFor='contestName' className='mx-4'>Select Contest:</label>
                <select id='contestName' ref={contestNameInputRef} className=' border border-black rounded-lg px-4 py-3'>
                  <option value="Codding Contest">Codding Contest</option>
                  <option value="UI Designing">UI Designing</option>
                  <option value="Paper Presentation">Paper Presentation</option>
                  <option value="Photograhpy">Photograhpy</option>
                </select>
              </div>
              <div className='pt-6'>
                <button 
                  className='float-right border bg-black text-white font-medium text-lg rounded-md px-7 py-3'>
                  Submit
                </button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default NewRegistrationForm
