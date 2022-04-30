import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';

const Contact = () => {
  const card = (title, icon, url, text) => {
    const iconText = `bi bi-${icon} display-4`;
    return (
      < Col xs={12} md={4} className='my-2'>
        <Card>
          <Card.Body>
            <Card.Title className="display-4">{title}</Card.Title>
            <Card.Text><i className={iconText}></i></Card.Text>
          </Card.Body>
          <Button
            variant='primary'
            onClick={() => window.location.href = { url }}
            className='m-1'
          >
            {text}
          </Button>
        </Card>
      </Col >
    );
  }

  return (
    <div className="text-center">
      <h2 className="display-2 text-center">Contact Me</h2>
      <Row className='m-4'>
        {card('Email', 'mailbox', 'mailto:sjp2303@hotmail.com', 'Email Me')}
        {card('Github', 'github', 'https://github.com/Sam2303', 'My Github')}
        {card('LinkedIn', 'linkedin', 'https://www.linkedin.com/in/sam-parsons-31a73720b/', 'Connect with me')}
      </Row>
    </div>
  );
};

export default Contact;
