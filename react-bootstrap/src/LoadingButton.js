import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import configServerUrl from './config';
import {stateTask, stateGetTaskById, stateSetTask, stateCurrTaskId} from './stateTask';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState([]);

    
  useEffect(() => {
    console.log('LoadingButton.props.data');
    console.log(props.data);
    
    const currTask = stateGetTaskById(props.data.item.systemtaskid); //stateTask.getTaskById(props.data.item.systemtaskid);
    const id = props.data.item.systemtaskid !== 0 ? props.data.item.systemtaskid : Date.now().toString();
    if(props.data.item.systemtaskid === 0)  currTask.systemtaskid = id;
    console.log('props.data.item.systemtaskid');
    console.log(props.data.item.systemtaskid);
    console.log('LoadingButton.currTask');
    console.log(currTask);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currTask)
    };
    
    
    if (isLoading) {
        fetch(configServerUrl + "/tasks/" + id, requestOptions)
        .then(res => {  
          return res;
        })
        .then(
          (result) => {
            setLoading(false);
              
            setIsLoaded(true);

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setLoading(false);
            console.log('TaskGet.fetch.result.error');
            console.log(error);
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  }, [isLoading, props.data, props.data.item.priority, props.data.item.status, props.data.item.systemid, props.data.item.taskconfig, props.data.item.title]);

  const handleClick = (event) => {
    let systemtaskid = stateCurrTaskId;
    setLoading(true);
    stateTask.pushTask(stateGetTaskById(systemtaskid));
  };

  return (
    <Button
      variant= {props.action === 'save' ? "primary" : "secondary"}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      action={props.action}
    >
      {isLoading ? 'Saving..' : props.action}
    </Button>
  );
}

export default LoadingButton;