import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Section_1 from "./Section_1";
import { Routes, Route } from "react-router-dom";
import Section_1_artical from "./Section_1_artical";
import Error_page from "./Error_page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section_1 />} />
        <Route path="/artical_1" element ={<Section_1_artical/>}/>
        <Route path = '*' element = {<Error_page/>}/>
      </Routes>
      {/* <Section_1 /> */}
    </>
  );
}

export default App;