import React, {useState, useEffect} from 'react';
import {Reacttable} from './table';
import configServerUrl from './config';
import {stateTask, stateTasks} from './stateTask';

const TaskGet = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ids, setIds] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(configServerUrl + "/tasks/")
      .then(res => res.json())
      .then(
        (result) => {
          /*  
          console.log('TaskGet.fetch.result');
            console.log(result);
            console.log('TaskGet.fetch.Object.values(result)');
            console.log(Object.values(result));
          */
          console.log(result);
          Object.values(result).map((x,i) => { if(i > 1) stateTask.pushTask(x); return 0;});
              console.log('TaskGet.fetch.stateTasks');
              console.log(stateTasks);
          setIsLoaded(true);
          setItems(Object.values(result));
          //setItems([{name: "test"}, {name: "stupid"}]);
          setIds(Object.keys(result));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <>
        {items.map((item, i) => 
        {
            if(i === 0)
            return (
                <Reacttable id="8" data={items} formname="inputtasks"/>
            );

            return (<></>);
        }
        )}
      </>
    );
  }
}

const TaskPost = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState([]);
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: props.data })
    };
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(configServerUrl + "/tasks/", requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
              console.log('TaskGet.fetch.result');
              console.log(result);
              console.log('TaskGet.fetch.Object.values(result)');
              console.log(Object.values(result));
            setIsLoaded(true);
            setItems(Object.values(result));
            //setItems([{name: "test"}, {name: "stupid"}]);
            setIds(Object.keys(result));
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>Saved Succesfully</div>
      );
    }
  }


  const TaskPut = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState([]);
    const id = props.data.systemtaskid !== undefined ? props.data.systemtaskid : Date.now().toString();
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: props.data })
    };
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(configServerUrl + "/tasks/" + id, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
              console.log('TaskGet.fetch.result');
              console.log(result);
              console.log('TaskGet.fetch.Object.values(result)');
              console.log(Object.values(result));
            setIsLoaded(true);
            setItems(Object.values(result));
            //setItems([{name: "test"}, {name: "stupid"}]);
            setIds(Object.keys(result));
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>Saved Succesfully</div>
      );
    }
  }

export {TaskGet, TaskPost, TaskPut};