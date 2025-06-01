import React from 'react'
import '../index.css'
import Hero from '../Components/Hero/Hero'
import Shop from './Shop'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newsletter from '../Components/Newsletter/Newsletter'


const Home = () => {
  return (
    <div className='main-content'>
      <Hero />
      <Popular />
      <Offers />
      <Newsletter/>

    </div>
    
  )
}

export default Home

