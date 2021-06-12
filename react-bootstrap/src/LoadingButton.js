import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { status, title, taskconfig, priority } from './store/taskSlice';
import {stateTask, stateTasks} from './stateTask';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState([]);
    console.log('LoadingButton.props');
    console.log(props);
    
  useEffect(() => {
    const currTask = stateTask.getTaskById(props.data.item.systemid);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currTask)
        /*body: JSON.stringify({ 
          systemid: props.data.item.systemid, 
          status: props.data.item.status, 
          title: props.data.item.title, 
          taskconfig: props.data.item.taskconfig, 
          priority: props.data.item.priority 
        })*/
    };
    if (isLoading) {
        fetch("http://localhost:3001/tasks/", requestOptions)
        .then(res => {  
          console.log(res);
          console.log('LoadingButton.useEffect'); 
          return res;
        })
        .then(
          (result) => {
            setLoading(false);
              console.log('TaskGet.fetch.result');
              console.log(result);
              console.log('TaskGet.fetch.Object.values(result)');
              console.log(Object.values(result));
            setIsLoaded(true);
            //setItems(Object.values(result));
            //setItems([{name: "test"}, {name: "stupid"}]);
            //setIds(Object.keys(result));
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
  }, [isLoading, props.data.item.priority, props.data.item.status, props.data.item.systemid, props.data.item.taskconfig, props.data.item.title]);

  /*
  const status = useSelector(state => task.status.value);
  const title = useSelector(state => task.title.value);
  const taskconfig = useSelector(state => task.taskconfig.value);
  const priority = useSelector(state => task.priority.value);
  const dispatch = useDispatch();
*/
  let [task, setTask] = useState({
    status: '',
    title: '',
    taskconfig: '',
    priority: ''
  })
  const handleClick = (event) => {
    setLoading(true);
    stateTask.pushTask(stateTask);
    console.log('global.stateTasks');
    console.log(stateTasks);
    /*let value = event.target.value;
      let heading = 'test';//event.target.attributes["heading"].value;
      console.log('h');
      console.log(event.target);
    
      setTask((prevalue) => {
        console.log('setTask');
        console.log({
          ...prevalue,   // Spread Operator               
          [heading]: value
        });
        return {
          ...prevalue,   // Spread Operator               
          [heading]: value
        }
      });
      */
  };


  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Saving..' : 'Save'}
    </Button>
  );
}

export default LoadingButton;