import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  
  // testing api call
  const [data, setData] = React.useState(null);

  React.useEffect(()=> {
    fetch("/api")
      .then((res)=> res.json())
      .then((data)=> setData(data));
  }, []);
  //
  

  return (
    <div>
      <h1>Hello!</h1>
      <p>This will one day contain glorious brewery data</p>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
