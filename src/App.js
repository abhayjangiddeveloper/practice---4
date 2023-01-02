import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Section_1 from "./Section_1";

const App = () =>{
  return (
    <>
      <div className="main_container">
          <Navbar/>
          <Section_1/>
      </div>
    </>
  );
}

export default App;