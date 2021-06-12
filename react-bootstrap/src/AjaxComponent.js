import React, {useState, useEffect} from 'react';

const AjaxComponent = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ids, setIds] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3001/users/")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          setIsLoaded(true);
          setItems(Object.values(result));
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
      <ul>
        {items.map((item, i) => (
          <li key={item.id}>
            {ids[i]} ::
            {item.name} - {item.password}
          </li>
        ))}
      </ul>
    );
  }
}

export default AjaxComponent;