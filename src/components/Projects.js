import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Airtable from "airtable";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      var base = new Airtable({
        apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
      }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
      const table = base("Projects");
      try {
        setProjects(await table.select({}).all());
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjects();
  }, []);
  return (
    <div className="projectsContainer">
      {projects.map((project) => {
        if (project.fields.Site === undefined) {
          return (
            <div className="project">
              <h3>{project.fields.Name}</h3>
              <p>{project.fields.Description}</p>
              <p><b>Tech Stack: {project.fields.TechStack}</b></p>
              <div className="projectLinks">
                <Link to={project.fields.Code}>Code</Link>
              </div>
            </div>
          );
        } else {
          return (
            <div className="project">
              <h3>{project.fields.Name}</h3>
              <p>{project.fields.Description}</p>
              <p><b>Tech Stack: {project.fields.TechStack}</b></p>
              <div className="projectLinks">
                <Link to={project.fields.Code}>Code</Link>
                <Link to={project.fields.Site}>Live Site</Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Projects;
