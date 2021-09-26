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
  console.log(projects);

  return (
    <div className="projectsContainer">
      {projects.map((project) => {
          console.log(project.fields.Site)
        if (project.fields.Site === undefined) {
          return (
            <div className="project">
              <h3>{project.fields.Name}</h3>
              <p>{project.fields.Description}</p>
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
              <div className="projectLinks">
              <Link to={project.fields.Code}>Code</Link>
              <Link to={project.fields.Site}>Site</Link>
              </div>
            </div>
          );
        }
      })}
      </div>
  );
};

export default Projects;
