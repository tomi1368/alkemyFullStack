import React from "react";
import NavBar from "./NavBar/NavBar";
import "./Home.scss"
import Hero from "./Hero/Hero";
const Home = () => {
  return (
    <div className="background">
      <header className="wrapper">
        <NavBar/>
        <Hero/>
      </header>
    </div>
  );
};

export default Home;
