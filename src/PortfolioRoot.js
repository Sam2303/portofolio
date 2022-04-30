import React from "react";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import WelcomePage from "./components/WelcomePage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const PortfolioRoot = () => {
  return (
    <div className="">
      <Header />
      <div className="d-flex justify-content-center">
        <div className="col-md-10">
          <section id='home'><WelcomePage/></section>
          <section id='about'><AboutMe/></section>
          <section id='tech'><TechStack/></section>
          <section id='projects'><Projects/></section>
          <section id='contact'><Contact/></section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRoot;
