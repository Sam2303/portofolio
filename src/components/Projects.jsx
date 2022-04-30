import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { fetchAirtable } from '../api/Airtable';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Projects = props => {
    const [projects, setProjects] = useState([]);
    fetchAirtable("Projects", setProjects);
  return (
    <div>
        <h1 className='m-4 display-2 text-center'>Projects</h1>
        <Row>
        {projects.map(project => {
            console.log(project.fields);
            const techStack = project.fields.TechStack.split(", ").join(', ');
            let image
            if (project.fields.Picture) image = project.fields.Picture[0].url; else image = false 
            const liveSite = project.fields.Site || null
            return(
                <Col xs={12} md={4} className="my-2 d-flex align-items-stretch">
                    <Card className='text-center'>
                        {image && <Card.Img variant='top' src={image} alt='live site'/>}
                        <Card.Body>
                            <Card.Title className='display-6'>{project.fields.Name}</Card.Title>
                            <Card.Text>{project.fields.Description}</Card.Text>
                            <Card.Text className='text-white bg-dark'>{techStack}</Card.Text>
                        </Card.Body>
                        {liveSite && <Button variant='secondary' onClick={liveSite} className='m-1'>Live Site</Button>}
                        <Button variant='primary' onClick={project.fields.Code} className='m-1'>GitHub</Button>
                    </Card>
                </Col>
            )
        })}
        </Row>
    </div>
  )
}

Projects.propTypes = {}

export default Projects