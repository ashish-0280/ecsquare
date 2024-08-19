import React from 'react'
import { useForm } from "react-hook-form"
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <div className='flex m-6 h-screen items-center justify-center'>
        <div className='card bg-base-100 w-90 shadow-xl md:ml-12'>
            <form onSubmit={handleSubmit(onSubmit)} method="card">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2"  
            ><a href="/">✕</a></button>
            <h2 className="font-extrabold text-lg p-3 mt-8">Signup</h2>
            <div>
            <div className='flex flex-col mt-8 space-y-4 p-3'>
                <span>Name</span>
                <input type="text" placeholder='Enter Your Name' className='rounded-md border px-3 py-1 outline-none'/>
            </div>
            <div className='flex flex-col mt-4 space-y-4 p-3'>
                <span>Email</span>
                <input type="text" placeholder='user@gmail.com' className='rounded-md border px-3 py-1 outline-none'
                {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
            </div>
            <div className='flex flex-col space-y-4 mt-4 p-3'>
                <span>Password</span>
                <input type="password" placeholder='password' className='rounded-md border px-3 py-1 outline-none'
                {...register("password", { required: true })}
                />
                {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
            </div>
            <div className='flex flex-row '>
            <div className='md:w-24 m-3 md:text-base w-44 md:py-4 rounded-md p-6 text-lg md:px-4 bg-blue-500 hover:bg-blue-700 text-white mt-6'>
                <button>Sign up</button>
            </div>
            <div className='md:ml-32 ml-14 mt-8 p-4 hover:scale-105 duration-100'>
            <p>Already Registered? <a href="/" className='text-blue-500 underline'>Login</a></p>
            </div>
            </div>
            </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup