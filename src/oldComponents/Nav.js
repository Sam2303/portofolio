import React, { useRef, useEffect, useState } from "react";
import Airtable from "airtable";

const Nav = () => {
  const links = useRef(null);
  const navToggle = () => {
    if (
      links.current.style.display === "none" ||
      links.current.style.display === ""
    ) {
      links.current.style.display = "flex";
    } else {
      links.current.style.display = "none";
    }
  };
  const [CV, setCV] = useState("");
  useEffect(() => {
    async function fetchCV() {
      var base = new Airtable({
        apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
      }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
      const table = base("CV");
      try {
        const CV = await table.select({}).all();
        setCV(CV[0].fields.Attachments[0].url);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCV()
  }, []);
  return (
      <nav className="navbar">
        <a href="#home">
          <h1>SP</h1>
        </a>

        <div className="burgerMenu" onClick={navToggle}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="links" ref={links}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={CV} target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>

  );
};

export default Nav;
