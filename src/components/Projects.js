import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
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
        setProjects(await table.select({
          maxRecords: 4,
          sort: [{field: "id", direction: "asc"}]          
        }).all());
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjects();
  }, []);
  console.log(projects);
  return (<>
  <h2>Projects</h2>
    <div className="projectsContainer">
      
      {projects.map((project) => {
        if (project.fields.Site === undefined) {
          return (
            <div className="project">
              <h3>{project.fields.Name}</h3>
              <p>{project.fields.Description}</p>
              <p><b>Tech Stack: {project.fields.TechStack}</b></p>
              <div className="projectLinks">
                <a href={project.fields.Code} target="_blank"rel="noreferrer">Code</a>
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
                <a href={project.fields.Code} target="_blank"rel="noreferrer">Code</a>
                <a href={project.fields.Site} target="_blank"rel="noreferrer">Live Site</a>
              </div>
            </div>
          );
        }
      })}
      <Link to={"/projects"} className="moreButton">More Projects</Link>
    </div>
      
    </>
  );
};

export default Projects;
