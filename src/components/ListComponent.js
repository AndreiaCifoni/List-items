import React from "react";

const ListComponent = ({ items }) => {
  return (
    <div>
      <p>This is my list of items:</p>
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListComponent;
