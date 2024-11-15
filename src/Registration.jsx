import React, { useState } from 'react'

function Registration() {
    const [details,setdetails]=useState({
        username:"",
        email:"",
        password:""
    })
    console.log(details);
    const handleRegister =()=>{
        const {username,email,password}=details
        alert(`User Registered with username as ${username}, with email ${email}, and password as ${password}`)
    }
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <form action="" className='m-5 p-4 shadow w-50'>
       <div className='mt-3'>
            <input type="text" placeholder='Username' className='form-control bg-info' onChange={(e)=>{setdetails({...details,username:e.target.value})}}/>
            <p className='text-danger'>Invalid Input</p>
        </div>
        <div className="mt-3">
            <input type="Email" placeholder='Email' className='form-control bg-info'onChange={(e)=>setdetails({...details,email:e.target.value})}/>
            <p id='' className='text-danger'>Invalid Input</p>
        </div>
        <div className="mt-3">
            <input type="password" placeholder='Password' className='form-control bg-info'onChange={(e)=>setdetails({...details,password:e.target.value})}/>
            <p className='text-danger'>Invalid Input</p>
        </div>
        <button type='button' className='mt-3 btn btn-outline-secondary text-dark' onClick={handleRegister}>Submit</button>
        </form>
    </div>
  )
}

export default Registration