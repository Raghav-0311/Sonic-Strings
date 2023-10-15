import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'

const Home = ({ size }) => {
  return (
    <>
      <NavBar size={size} />
      <Hero />
      <Footer/>
    </>
  )
}

export default Home
