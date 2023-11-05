import React from "react";

function TestingComponent({ name, surname }) {
  const numbers = ["one", "two", "three", "four"];
  return (
    <div>
      <h1>
        Name and surname:
        {" " + name + " " + surname}
      </h1>
      {numbers.map((number, index) => (
        <p>
          Number: {number} Index: {index}
        </p>
      ))}
    </div>
  );
}

export default TestingComponent;
