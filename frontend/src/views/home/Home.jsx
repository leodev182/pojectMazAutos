import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Banner from '../../components/banner/Banner'
import Carrousel from '../../components/Carrousel/Carrousel'
import PoolDetails from '../../components/pooldetails/PoolDetails'
import LogIn from '../../views/login/LogIn'
import Register from '../../components/register/Register'
import Profile from '../../components/profile/Profile'
import Pools from '../../components/pools/Pools'
import Booking from '../../components/booking/Booking'
import PreBooking from '../../components/prebooking/PreBooking'
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