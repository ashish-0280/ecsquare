import React from 'react'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
        <div>
            <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2">
        <a href="/">✕</a></button>
    <h2 className="font-extrabold text-lg">Login</h2>
    <div>
    <div className='flex flex-col mt-8 space-y-4'>
        <span>Email</span>
        <input 
        type="email" 
        placeholder='user@gmail.com' 
        className='rounded-md border px-3 py-1 outline-none'
        {...register("email", { required: true })}
        />
     
        {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
    </div>
    <div className='flex flex-col space-y-4 mt-4'>
        <span>Password</span>
        <input 
        type="password" 
        placeholder='password' 
        className='rounded-md border px-3 py-1 outline-none'
        {...register("password", { required: true })}
        />
        
        {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
    </div>
    <div className='flex flex-row '>
    <div className='md:w-20 w-24 rounded-md px-3 md:px-4 py-4 md:py-2 bg-blue-500 hover:bg-blue-700 text-white mt-6'>
        <button>Login</button>
    </div>
    <div className='ml-48 mt-8 hover:scale-105 duration-100'>
    <p>Not signed up? <a href="/signup" className='text-blue-500 underline'>Signup</a></p>
    </div>
    </div>
    </div>
    </form>
  </div>
</dialog>
        </div>
    </>
  )
}

export default Login