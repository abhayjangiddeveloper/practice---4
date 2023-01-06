import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import { Routes, Route } from "react-router-dom";
import Section1Artical from "./Section1Artical";
import ErrorPage from "./ErrorPage.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/artical_1" element ={<Section1Artical/>}/>
        <Route path = '*' element = {<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;