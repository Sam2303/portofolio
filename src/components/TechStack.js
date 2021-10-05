import React, { useState, useEffect } from "react";
import Airtable from "airtable";

const TechStack = () => {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    async function fetchTechStack() {
      var base = new Airtable({
        apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
      }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
      const table = base("TechStack");
      try {
        const techStack = await table.select({}).all();
        setTechStack(
          techStack.sort(
            (a, b) => parseFloat(a.fields.ID) - parseFloat(b.fields.ID)
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchTechStack();
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
