import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Accordions = () => {
  
return (
  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Priority (system)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <div id="systempriority"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Task Buckets (system)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <div id="systemtaskbuckets" ></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Frequency (system)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <div id="systemfrequency"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Finance Category (system)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <div id="systemfinancecategory"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        Task Finance Category (system/user)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <div id="systeminputtaskfinancecategory"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        Task Config (user)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>
      <div id="systeminputtaskconfig"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="6">
        Task Status (system)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="6">
      <Card.Body>
      <div id="systemtaskstatus"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="7">
        Tasks (user)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="7">
      <Card.Body>
      <div id="inputtasks"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="8">
        Task History (system-generated)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="8">
      <Card.Body>
      <div id="systemtaskhistory"></div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    );
}

export default Accordions;