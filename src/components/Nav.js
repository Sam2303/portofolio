import React, {useRef} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import CV from "../pages/CV";

const Nav = () => {
  const links = useRef(null)
  const navToggle = () => {
    if(links.current.style.display === "none" || links.current.style.display === ""){
      links.current.style.display = "flex"
    }else{
      links.current.style.display = "none"
    }
  }
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
          <Link to={"/cv"}>CV</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/cv" component={CV} />
      </Switch>
    </Router>
  );
};

export default Nav;
