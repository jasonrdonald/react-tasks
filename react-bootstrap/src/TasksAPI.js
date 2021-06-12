import React, {useState, useEffect} from 'react';
import {Reacttable} from './table';

const TaskGet = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ids, setIds] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3001/tasks/")
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
      fetch("http://localhost:3001/tasks/", requestOptions)
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

export {TaskGet, TaskPost};