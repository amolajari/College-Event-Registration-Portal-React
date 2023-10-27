import React, { useRef, useState } from 'react'
import Admin from './Admin'

const AdminLogin = () => {
    const usernameInput = useRef()
    const passwordInput = useRef()
    const [isLoginValid, setIsLoginValid] = useState(false)
    const submitHandler=()=>{
        const enteredUsername = usernameInput.current.value
        const enteredPassword = passwordInput.current.value
        if(enteredUsername==='admin' && enteredPassword==='admin'){
            setIsLoginValid(true)
        }else{
            alert('Invalid Credentials')
        }
    }
    return (
    <div>
    {isLoginValid? <Admin/> :
    
    <div>
      <div className='flex flex-col mx-20 my-20 bg-white border-2 border-black w-1/3 rounded-lg shadow-sm py-5 px-5'>
      <h1 className='mx-4 my-6 text-xl font-semibold'>ADMIN-LOGIN</h1>
        <div className='my-6 text-xl'>
            <label htmlFor='username' className='mx-4'>Username: </label>
            <input type="text" id='username' ref={usernameInput} required className='border border-black rounded-lg px-4 py-3'/>
        </div>
        <div className='my-6 text-xl'>
            <label htmlFor='password' className='mx-4'>Password: </label>
            <input type='password' id='password' ref={passwordInput} required className='border border-black rounded-lg px-4 py-3'/>
        </div>
        <div className='pt-6'>
            <button onClick={submitHandler} className='float-right border bg-black text-white font-medium text-lg rounded-md px-7 py-3'>Login</button>
        </div>
      </div>
        <h3 className='text-xs mx-20'>Username: admin</h3>
        <h3 className='text-xs mx-20'>Password: admin</h3>
    </div>
    }
    </div>
  )
}

export default AdminLogin
