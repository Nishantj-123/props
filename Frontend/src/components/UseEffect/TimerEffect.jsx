import React, { useState, useEffect } from 'react';

const TimerEffect = () => {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime + 2); 
    }, 1000);
   
  }, []); 

  return <div>Time: {time} seconds</div>;
};

export default TimerEffect;


