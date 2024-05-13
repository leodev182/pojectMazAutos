import React from 'react'
import Banner from '../../components/banner/Banner'
import Pools from '../../components/pools/Pools'
import Payment from '../../components/payment/Payment'


const Home = () => {
  return (
    <>
      <Banner/>
      {/* <PreBooking/> */}
      <Pools/>
      <Payment/>
      {/* <Carrousel/> */}
      {/* <PoolDetails/> */}
      {/* <LogIn/> */}
      {/* <Register/> */}
      {/* <Profile/> */}
    </>
  )
}

export default Home