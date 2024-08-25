import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        const response = await axios.post('https://backend-flax-two.vercel.app/user/send', data, {
            withCredentials: true,
        });
        toast.success("Sent successfully!!");
        console.log(response.data);
    } catch (error) {
        toast.error("Something went wrong");

        // Check if error.response exists before trying to access its properties
        if (error.response) {
            console.error("Server responded with an error:", error.response.data);
        } else if (error.request) {
            console.error("No response received:", error.request);
        } else {
            console.error("Error setting up request:", error.message);
        }
    }
};


  return (
    <>
      <div className='container mx-auto md:px-20 px-4 '>
        <Navbar />
        <div className='h-screen mt-32'>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-zinc-800 shadow-md rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border-none rounded w-full py-2 px-3 leading-tight bg-zinc-900 focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border-none bg-zinc-900 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border-none bg-zinc-900 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                {...register('phone', { required: true })}
              />
              {errors.phone && <p className="text-red-500 text-xs italic">Phone number is required.</p>}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-none bg-zinc-900 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="message"
                placeholder="Your Message"
                {...register('message', { required: true })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs italic">Message is required.</p>}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <div className='flex justify-center items-center mt-8'>
            <button className='bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline' ><a href="/">Back</a></button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
