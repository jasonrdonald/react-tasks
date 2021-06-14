import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import {Reacttable} from '../table';
import {systempriority, 
  systemtaskbuckets, 
  systemfrequency, 
  systemfinancecategory, 
  systeminputtaskfinancecategory, 
  systeminputtaskconfig, 
  systemtaskstatus, 
  inputtasks, 
  systemtaskhistory} from '../datastore';

const ConfigPage = () => {
  
return (
    <Container>
  <Accordion defaultActiveKey="0">
<Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Priority (system)
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Reacttable id="1" data={systempriority} />
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
      <Reacttable id="2" data={systemtaskbuckets} />
      
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
      <Reacttable id="3" data={systemfrequency} />
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
      <Reacttable id="4" data={systemfinancecategory} />
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
      <Reacttable id="5" data={systeminputtaskfinancecategory} formname="systeminputtaskfinancecategory"/>
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
      <Reacttable id="6" data={systeminputtaskconfig} formname="systeminputtaskconfig" />
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
      <Reacttable id="7" data={systemtaskstatus} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
</Container>
      );
    }
    
    export default ConfigPage;