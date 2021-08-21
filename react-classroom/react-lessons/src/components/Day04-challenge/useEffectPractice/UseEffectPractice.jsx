//imrse imports useState, and useEffect
import React, { useState, useEffect } from "react";

const UseEffectpractice = (props) => {
  const [animal, setAnimal] = useState("alligator");
  const [isPredator, setIsPredator] = useState(undefined);

  const handleClick = () => {
    setAnimal("monkey");
  };

  //uef is use effect shortcut
  useEffect(() => {
    console.log(animal);
    
    switch (animal) {
      case "monkey":
        setIsPredator(false);
        break;
      case "alligator":
        setIsPredator(true);
        break;
      default:
        setIsPredator(undefined);
    }
  }, [animal]);

  return (
    <div>
      <p>
        The current animal is {animal} and isPredator is set to{" "}
        {isPredator?.toString() ?? "undefined"}
      </p>
      <button onClick={handleClick}>Click to Change Animal</button>
      {/* <button onClick={()=>setIsPredator(!isPredator)}>Change IsPredator</button> */}
    </div>
  );
};

export default UseEffectpractice;
