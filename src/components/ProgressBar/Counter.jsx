import React, { useEffect, useState } from "react";

const Counter = ({ percentValue }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < percentValue) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    //cleanup pour éviter les fuites de mémoires
    return () => clearInterval(interval);
  }, [counter, percentValue]);
  return (
    <div>
      <p>{counter}%</p>
    </div>
  );
};

export default Counter;
