import React from 'react'
import '../index.css'
import Hero from '../Components/Hero/Hero'
import Shop from './Shop'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='main-content'>
      <Hero />
      <Popular />
      <Offers />
      <Newsletter/>
      <Footer/>
    </div>
    
  )
}

export default Home

