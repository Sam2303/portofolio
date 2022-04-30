import Nav from "./oldComponents/Nav";
import Home from "./oldComponents/Home";
import About from "./oldComponents/About";
import Projects from "./oldComponents/Projects";
import Contact from "./oldComponents/Contact";

function OldApp() {
  return (
    <div className="App">
      <Nav />
      <section id="home">
        <Home />
      </section>
       <section id="about" >
        <About />
      </section>
    <section id="projects" >
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default OldApp;
