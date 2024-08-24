import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

const onSubmit = async (data) => {
    try{
      await axios.post('http://localhost:5000/login', data, {withCredentials: true});
      alert("successfully Logged in");
      window.location.href = "/";

    } catch(error){
      res.status(400).json({message: 'Incorrect Email or Password'});
      alert('Incorrect Email or Password');
      window.location.href = "/";

    }
  }
  const handleLogout = async (data) => {
    try{
      await axios.post("http://localhost:5000/logout", data, {withCredentials: true});
      alert("Logged out successfully");
    } catch(error){
      alert("Something went wrong!!");
    }
  }
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
    <div className='flex flex-row'>
    <div className='w-auto h-auto p-2 rounded-md  bg-blue-500 hover:bg-blue-700 text-white mt-6'>
        <button>Login</button>
    </div>
    <div className='mt-4 ml-28 md:ml-64  hover:scale-105 duration-100'>
    <p>Not signed up? <br /><a href="/signup" className='text-blue-500 underline'>Signup</a></p>
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