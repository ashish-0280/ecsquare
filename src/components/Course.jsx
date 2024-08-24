import React from 'react'
import Card from './Card.jsx'
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-36 text-slate-400 md:ml-16 ml-12 text-xl text-wrap w- justify-center items-center'>
          <p>At EC<sup>2</sup>, we offer a range of courses designed to help you achieve your goals, whether you're looking to advance in your career, develop new skills, or pursue a personal passion. Our expert instructors provide personalized guidance, ensuring you get the most out of each course.</p>
        </div>
        <div className='mt-28 md:mt-32 ml-4 flex flex-col md:space-x-12 space-y-8 md:space-y-0'>
            <div className="card bg-base-100 w-90 shadow-xl md:ml-12 hover:scale-110 duration-150">
                <figure>
                <img
                    className='w-50'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyivT7Qb3bJEd7s0Do_O0BHN2bFR35k7hdLA&s"
                    alt="Shoes"
                />
                </figure>
                <div className="card-body">
                <h2 className="card-title">
                    Physics
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Unlock the Mysteries of Physics! Our course simplifies the complexities of motion, energy, and forces, helping you grasp key concepts with confidence.</p>
                <div className="card-actions justify-end">
                    <button className="btn text-white btn-primary">Join Now</button>
                </div>
                </div>
            </div>

            <div className="card bg-base-100 w-90 shadow-xl md:ml-12 hover:scale-110 duration-150">
                <figure>
                <img
                    className='w-50'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyivT7Qb3bJEd7s0Do_O0BHN2bFR35k7hdLA&s"
                    alt="Shoes"
                />
                </figure>
                <div className="card-body">
                <h2 className="card-title">
                    Chemistry
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Explore the Wonders of Chemistry! Our course breaks down complex reactions and principles into easy-to-understand lessons, perfect for boosting your knowledge and grades</p>
                <div className="card-actions justify-end">
                    <button className="btn text-white btn-primary">Join Now</button>
                </div>
                </div>
            </div>

            <div className="card bg-base-100 w-90 shadow-xl md:ml-12 hover:scale-110 duration-150">
                <figure>
                <img
                    className='w-50'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyivT7Qb3bJEd7s0Do_O0BHN2bFR35k7hdLA&s"
                    alt="Shoes"
                />
                </figure>
                <div className="card-body">
                <h2 className="card-title">
                    Maths
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Master Mathematics with Ease! Dive into comprehensive lessons that simplify complex concepts. Perfect for students aiming to excel and build a strong foundation.</p>
                <div className="card-actions justify-end">
                    <button className="btn text-white btn-primary">Join Now</button>
                </div>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center mt-8'>
            <button className='bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline' ><a href="/">Back</a></button>
          </div>
      </div>
    </>
  )
}

export default Course