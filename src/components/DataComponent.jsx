import elephant from "./../images/elephant.jpeg";
import React from "react";

const DataComponent = () => {
  const data = [
    { id: 1, img: elephant },
    { id: 2, img: elephant },
    { id: 3, img: elephant },
    { id: 4, img: elephant }
  ];

  return data;
};

export default DataComponent;