import React from "react";
import ListComponent from "./ListComponent";

const items = [
  "ball",
  "chair",
  "sunscreen",
  "cellphone",
  "water",
  "juice",
  "snacks",
];

const App = () => {
  return (
    <div>
      <ListComponent items={items} />
    </div>
  );
};

export default App;
