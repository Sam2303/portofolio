import React, { useState, useEffect } from "react";
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
        setProjects(
          await table
            .select({ sort: [{ field: "id", direction: "asc" }] })
            .all()
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjects();
  }, []);
  return (
    <div className="projectsContainer">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          const techStack = project.fields.TechStack.split(", ");
          let site;
          let image;
          if(project.fields.Picture !== undefined){
            image = <img src={project.fields.Picture[0].url} alt="website" />
          }
          if (project.fields.Site !== undefined) {
            site = (
              <a href={project.fields.Site} target="_blank" rel="noreferrer">
                Live Site
              </a>
            );
          }
          return (
            <div className="project">
              <div className="projectContent">
                {image}
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
                {site}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
