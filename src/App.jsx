import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Tours from "./pages/Tours";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Route,
  Routes
} from "react-router-dom"; /**Switch will render the first route child that matches */

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms/" element={<Rooms/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/rooms/:zebra" element={<SingleRoom/>} />
        <Route element={<Error/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
