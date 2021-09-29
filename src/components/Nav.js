import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Airtable from "airtable";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";

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
    fetchCV();
  }, []);
  return (
    <Router>
      <nav className="navbar">
        <Link to={"/"}>
          <h1>Sam Parsons</h1>
        </Link>

        <div className="burgerMenu" onClick={navToggle}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="links" ref={links}>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <a href={CV} target="_blank" rel="noreferrer">CV</a>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default Nav;
