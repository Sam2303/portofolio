import React from "react";
import profilePic from "../resources/profile.jpg";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="welcomeMsg">
        <h2>Hello, I am Sam Parsons</h2>
        <p>Graduate Computer Scientist</p>
        <p>
          Solution-oriented Software Developer, with a high interest in Web
          Technologies
        </p>
        <img src={profilePic} alt="Sam Parsons in there graduation Grown"></img>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
