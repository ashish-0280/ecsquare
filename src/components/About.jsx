import React from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
function About() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 justify-center items-center mt-28'>
          <div className='font-extrabold text-purple-500 text-4xl mb-14'>
           About EC<sup>2</sup>
          </div>
          <div className='md:text-xl text-lg'>
          <span><h4>Welcome to EC Square, where we are committed to empowering individuals to achieve their full potential through personalized coaching and mentorship. Our mission is to provide a supportive and growth-oriented environment, helping our clients overcome challenges and unlock their true capabilities.</h4></span>
          <br />
          <span><h4>At EC<sup>2</sup>, we believe that success is a journey, not a destination. With our expert coaches, who bring years of experience in various fields, we offer tailored coaching programs that cater to your unique needs and goals. Whether you are looking to advance in your career, develop new skills, or achieve personal growth, we are here to guide you every step of the way.</h4></span>
          <br />
          <span><h4>What sets us apart is our holistic approach to coaching. We understand that every individual is different, and our coaching strategies are designed to align with your personal and professional aspirations. At EC<sup>2</sup>, we don’t just focus on immediate goals; we aim to equip you with the tools and mindset for long-term success and fulfillment.</h4></span>
          <br />
          <span><h4>Join us at EC<sup>2</sup> and start your journey towards becoming the best version of yourself.</h4></span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About