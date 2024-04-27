import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Service from "./pages/Service"; // Corrected import statement
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Error  from "./pages/Error";
import Footer from "./components/footer/Footer";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error/>} />
          <Route path="logout" element={<Logout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
