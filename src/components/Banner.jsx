import React from 'react'
import banner from '../../public/banner.png';
function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container md:mt-12 mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-4 md:mt-22 order-2 md:order-1 '>
        <div className='space-y-10 mt-20'>
        <h1 className='text-4xl font-bold'>Welcome, Unlock your potential with <br /> <span className='text-4xl mt-8 md:text-5xl text-blue-700 font-bold'>EC Square!!!</span> </h1>
        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates voluptas harum quibusdam voluptatem earum laboriosam ullam vero repellat quos. Consequs nostrum beatae ad quasi iste saepe qui quo?</p></div>
        </div>
        <div className='w-full md:w-1/2 md:mt-14 mt-24 md:mt-22 order-1'>
          <img src={banner} alt="banner" className='w-100 h-80 md:ml-25' />
        </div>
      </div>
    </>
  )
}

export default Banner