import React from 'react'
import Card from './Card.jsx'
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-36'>
          <h1 className='font-extrabold text-2xl md:text-4xl text-purple-600 text-center'>Our Courses</h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  )
}

export default Course