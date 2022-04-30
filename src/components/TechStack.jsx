import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";
import { fetchAirtable } from "../api/Airtable";
import PropTypes from "prop-types";

const TechStack = (props) => {
  const [techStack, setTechStack] = useState([]);

  fetchAirtable("TechStack", setTechStack);

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

TechStack.propTypes = {};

export default TechStack;
