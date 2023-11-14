import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Trusted from '../Components/Trusted'
import Services from '../Components/Services'
import FeatureProducts from '../Components/FeatureProducts'

const Home = () => {
  return (
    <>
    <HeroSection name="Super Store"/>
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home
