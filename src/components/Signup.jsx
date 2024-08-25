import React from 'react'
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios'
function Signup() {
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://backend-ecsquare.vercel.app/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
    }
  return (
    <>
    <div>
    <div className='flex h-screen items-center justify-center'>
        <div className='card bg-base-100 w-90 shadow-xl md:ml-12'>
            <form onSubmit={handleSubmit(onSubmit)} method="card">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2"  
            ><a href="/">✕</a></button>
            <h2 className="font-extrabold text-lg p-3 mt-8">Signup</h2>
            <div>
            <div className='flex flex-col mt-8 space-y-4 p-3'>
                <span>Name</span>
                <input type="text" placeholder='Enter Your Name' className='border-none rounded-md px-3 py-1 outline-none'/>
            </div>
            <div className='flex flex-col mt-4 space-y-4 p-3'>
                <span>Email</span>
                <input type="text" placeholder='user@gmail.com' className='rounded-md border-none px-3 py-1 outline-none'
                {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
            </div>
            <div className='flex flex-col space-y-4 mt-4 p-3'>
                <span>Password</span>
                <input type="password" placeholder='password' className='rounded-md border-none px-3 py-1 outline-none'
                {...register("password", { required: true })}
                />
                {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
            </div>
            <div className='flex flex-row '>
            <div className='bg-blue-600 text-slate-300 h-auto w-auto rounded-md p-2 ml-4 m-8 mt-12'>
                <button type='submit'>Sign up</button>
            </div>
            <div className='mt-12 ml-6 hover:scale-105 duration-100'>
            <p>Already registered? <br /><a href="/" className='text-blue-500 underline'>Login</a></p>
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