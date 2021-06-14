import React from 'react';
import Card from 'react-bootstrap/Card';
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
import FormSelect from '../FormSelect';
import {TaskGet} from '../TasksAPI';

const TasksPage = () => {
  
    return (
        <Container>
        <Card>
            <Card.Header>
                Tasks (user)
            </Card.Header>
            <Card.Body>
            <TaskGet />
            </Card.Body>
        </Card>
        </Container>
          );
        }
        
export default TasksPage;

