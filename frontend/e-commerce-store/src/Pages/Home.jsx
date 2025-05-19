import React from 'react'
import Hero from '../Components/Hero/Hero'
import Shop from './Shop'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
    </div>
  )
}

export default Home