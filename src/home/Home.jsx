import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import Card from '../components/Card.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card />
      <Footer />
    </>
  )
}

export default Home