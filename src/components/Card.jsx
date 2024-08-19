import React from 'react'

function Card() {
  return (
    <>
        <div className='mt-28 ml-4 flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0'>
            <div className="card bg-white w-90 shadow-xl md:ml-12 hover:scale-110 duration-150">
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

            <div className="card bg-white w-90 shadow-xl md:ml-12 hover:scale-110 duration-150">
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

            <div className="card bg-white w-90 shadow-xl md:ml-12 hover:scale-110 duration-150">
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

    </>
  )
}

export default Card