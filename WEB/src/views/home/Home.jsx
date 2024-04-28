import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Banner from '../../components/banner/Banner'
import PoolCard from '../../components/poolcard/PoolCard'
import Carrousel from '../../components/Carrousel/Carrousel'
import PoolDetails from '../../components/pooldetails/PoolDetails'
// import LogIn from '../../views/login/LogIn'
// import Pools from '../../components/pools/Pools'


const Home = () => {
  return (
    <>
      <NavBar/>
      {/* <Banner/> */}
      {/* <Pools/> */}
      {/* <Carrousel/> */}
      {/* <PoolCard/> */}
      <PoolDetails/>
      {/* <LogIn/> */}
    </>
  )
}

export default Home