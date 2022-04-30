import React from "react";
import profilePic from "../resources/me.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="welcomeMsg">
        <h2>Hi, I'm Sam</h2>
        <p>Graduate Computer Scientist</p>
        <p>Solution-oriented Software Developer</p>
      </div>
      <div className="pictureContainer">
        <img src={profilePic} alt="Sam Parsons in there graduation Grown"></img>
      </div>
    </div>
  );
};

export default Home;
