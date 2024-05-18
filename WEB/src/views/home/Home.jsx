import React from "react";
import Banner from "../../components/banners/Banner";
import Pools from "../../components/pools/Pools";
import WhyMazAutos from "../../components/banners/WhyMazAutos";

const Home = () => {
  return (
    <>
      <Banner />
      <Pools />
      <WhyMazAutos/>
    </>
  );
};

export default Home;
