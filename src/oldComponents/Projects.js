import React, { useState, useEffect } from "react";
import { fetchAirtable } from "../api/Airtable";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchAirtable("projects").then((result) => {
      setProjects(result);
    });
  }, []);
  return (
    <div className="projectsContainer">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          const techStack = project.fields.TechStack.split(", ");
          return (
            <div className="project" key={project.fields.id}>
              <div className="projectContent">
                {project.fields.Picture && (
                  <img src={project.fields.Picture[0].url} alt="website" />
                )}
                <h3>{project.fields.Name}</h3>

                <p>{project.fields.Description}</p>
                <div className="techStack">
                  {techStack.map((tech) => {
                    return <p>{tech}</p>;
                  })}
                </div>
              </div>
              <div className="projectLinks">
                <a href={project.fields.Code} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.fields.Site && (
                  <a
                    href={project.fields.Site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
