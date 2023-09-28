import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  // Use useState to manage the numeric value
  const [value, setValue] = useState(initialValue || 0);

  // Function to handle increment
  const handleIncrement = () => {
    setValue(value + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
