import React, { useState, useEffect } from "react";

const ChuckFetch = (props) => {
    const url = 'https://api.chucknorris.io/jokes/random'

    const [joke, setJoke] = useState("");
    
    const fetchURL = async () => {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data.value)
        setJoke(data.value)
    }

    useEffect(() => {
        fetchURL()
    }, []);
    
    const handleClick = () => {
        fetchURL()
    }

  return (
    <div>
      <p>Hello from Chuck Fetch</p>
      <p>JOKE: {joke}</p>
      <button onClick={handleClick}>Click for joke</button>
    </div>
  );
};

export default ChuckFetch;
