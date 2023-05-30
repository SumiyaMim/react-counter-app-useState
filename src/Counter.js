import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className='container'>
        <div className='box'>
           <h1>COUNTER APP</h1><br></br>
           <h2>{count}</h2><br></br><br></br>
           <button className='button' onClick={handleIncrement}>Increment</button>
           <button className='button' onClick={handleReset}>Reset</button>
           <button className='button' onClick={handleDecrement} disabled= {count===0 ? true : false}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter



  
