import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home.jsx";
import Bookings from "./views/bookings/Bookings.jsx";
import Profile from "./views/profile/Profile.jsx";
import LogIn from "./views/login/LogIn.jsx";
import Manager from "./views/manager/Manager.jsx";
import NotFound from "./views/notfound/NotFound.jsx";
import Details from "./views/details/Details.jsx";
import Payment from "./views/payment/Payment.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import PreBooking from "./components/prebooking/PreBooking.jsx";
import PoolEditor from "./components/pooleditor/PoolEditor.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/details/:id' element={<Details/>}></Route>
        <Route path='/checkout/:id' element={<PreBooking/>}></Route>
        <Route path='/payment/:id' element={<Payment/>}></Route>
        <Route path='/editor/:id' element={<PoolEditor/>}></Route>
        <Route path="/booking" element={<Bookings/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/manager" element={<Manager/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
