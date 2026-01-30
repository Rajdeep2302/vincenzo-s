import React from 'react'
import Navbar from '../components/Navbar'
import HomeOrder from '../components/HomeOrder'
import Flavors from '../components/Flavors'
import HomeCatering from '../components/HomeCatering'
import HomeContact from '../components/HomeContact'

const Home = () => {
  return (
    <div className='flex flex-col max-w-screen overflow-hidden relative justify-center items-center'>
        <Navbar />
        <HomeOrder />
        <Flavors/>
        <HomeCatering/>
        <HomeContact/>
    </div>
  )
}

export default Home