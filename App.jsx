import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import { Outlet } from "react-router-dom";

function App(){
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}
export default App;