import { Route, Routes } from "react-router-dom";
import Home from "@views/home/Home.jsx";
import Booking from "@views/booking/Booking.jsx";
import LogIn from "@views/login/LogIn.jsx";
import Profle from "@views/profile/Profile.jsx";
import Manager from "@views/manager/Manager.jsx";
import NotFound from "@views/notfound/NotFound.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profle />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
