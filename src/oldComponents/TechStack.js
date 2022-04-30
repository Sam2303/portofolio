import React, { useState, useEffect } from "react";
import {fetchAirtable} from "../api/Airtable";

const TechStack = () => {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    fetchAirtable("TechStack").then( (res) => {
      setTechStack(res)
    } )
  }, []);

  return (<div className="techStack">
  <h2>Tech Stack</h2>
    <div className="techStackContainer">
      
      {techStack.map((tech) => {
        tech = tech.fields;
        // console.log(tech);
        return (
          <div className="tech">
            <img src={tech.Image[0].url} alt={tech.Name} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default TechStack;
