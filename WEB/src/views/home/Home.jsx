import React from "react";
import Banner from "../../components/banner/Banner";
import Pools from "../../components/pools/Pools";
import PaymentBox from "../../components/payment/PaymentBox";
import FileUpload from "../../components/payment/FileUpload";
import PoolsCenter from "../../components/poolscenter/PoolsCenter";
import PoolEditor from "../../components/pooleditor/PoolEditor";
import Profile from "../../components/profile/Profile";
import SignIn from "../../components/signin/SignIn";
import Stepper from "../../components/signin/Stepper";
import LogIn from "../../views/login/LogIn";

const Home = () => {
  return (
    <>
      <Banner />
      <Pools />
      <Stepper />
      {/* <PoolEditor /> */}
      {/* <PreBooking /> */}
      <PoolsCenter />
      <PaymentBox />
      <FileUpload />
      {/* <Carrousel /> */}
      {/* <PoolDetails /> */}
      <LogIn />
      <SignIn />
      <Profile />
    </>
  );
};

export default Home;
