import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Join() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const navigate = useNavigate();
  const [error, setError] = useState(null)

  function handleFormSubmit(newUser) {
    console.log(newUser)  
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },  // Fixed typo here: 'applicatio/json' → 'application/json'
      body: JSON.stringify(newUser)
    })
      .then((res) => {
        if (res.status === 201)
          navigate("/login");
        console.log("res is", res)
      })
      .catch(err =>
        setError(err)
      );
  }

  return (
    <div className='mt-4'>
      {/* <h2>Register</h2> */}
      <h1 className="display-3 text-center">Registration</h1>

      {/* display error message */}
      {error !== null && <p className='display-3 text-warning'>{error.message}</p>}

      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="un" className="form-label">Username</label>
          <input type="text" {...register('username')} id='un' className='form-control' />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="pw" className="form-label">Password</label>
          <input type="password" {...register('password')} id='pw' className='form-control' />
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" {...register('email')} id='email' className='form-control' />
        </div>
        {/* date of birth */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" {...register('dob')} id='dob' className='form-control' />
        </div>
        <button className="btn btn-success d-block mx-auto" type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Join;
