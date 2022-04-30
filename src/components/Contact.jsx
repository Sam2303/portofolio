import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Contact = (props) => {

  return (
    <div className="text-center">
      <h2 className="display-2 text-center">Contact Me</h2>
      <Row>
        <Col xs={12} md={4} className="my-2 align-items-stretch d-flex">
          <Card>
            <Card.Body>
              <Card.Title className="display-4">Email</Card.Title>
              <Card.Text><i className="bi bi-mailbox display-4"></i></Card.Text>
            </Card.Body>
            <Button
              variant='primary'
              onClick={() =>  window.location.href='mailto:sjp2303@hotmail.com'}
              className='m-1'>Email Me
            </Button>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="display-4">Github</Card.Title>
              <Card.Text><i className="bi bi-github display-4"></i></Card.Text>
            </Card.Body>
            <Button variant='primary'className='m-1'>
              <a href='https://github.com/Sam2303' target='_blank' rel="noreferrer" className="text-light text-decoration-none">My Github</a>
            </Button>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="display-4">Email</Card.Title>
              <Card.Text><i className="bi bi-mailbox display-4"></i></Card.Text>
            </Card.Body>
            <Button
              variant='primary'
              onClick={() =>  window.location.href='mailto:sjp2303@hotmail.com'}
              className='m-1'>Email Me
            </Button>          
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
