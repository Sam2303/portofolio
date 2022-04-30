import React, { useState, useEffect } from "react";
import { Image, Container } from "react-bootstrap";
import { fetchAirtable } from "../api/Airtable";

const TechStack = () => {
  const [techStack, setTechStack] = useState([]);
  useEffect(() => {
    fetchAirtable("TechStack", setTechStack);
  }, []);

  return (
    <Container className="col-md-10 text-center">
      <h1 className="m-4  display-2">Tech Stack</h1>
      {techStack.map((tech) => {
        return (
          <Image
            src={tech.fields.Image[0].url}
            alt={tech.Name}
            className="col-md-1 pr-1 pt-2 m-2 col-2"
          />
        );
      })}
    </Container>
  );
};

export default TechStack;
