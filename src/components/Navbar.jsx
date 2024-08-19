import React from 'react'
import Login from './Login.jsx'
function Navbar() {
    const nav = (
        <>
                    <li><a href='/'>Home</a></li>
                    <li><a href='courses'>Courses</a></li>
                    <li><a href='about'>About us</a></li>
                    <li><a href='contact'>Contact</a></li>
    </>
    );
  return (
    <>
        <div className='bg-white max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50'>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {nav}
    
                </ul>
                </div>
                <a className="text-3xl font-medium cursor-pointer">EC Square</a>
            </div>
            <div className="navbar-end space-x-5">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {nav}
                </ul>
            </div>
            <div className='hidden md:block'>
                <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
                </label>
            </div>
            
            <div>
                <a className="bg-black text-white cursor-pointer px-3 py-2 rounded-md hover:bg-slate-800 duration-300"
                onClick={()=>
                    document.getElementById("my_modal_3").showModal()
                }>
                    Login</a>
                    <Login />
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar