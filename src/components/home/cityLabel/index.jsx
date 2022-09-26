import React from "react";
import styles from "./style.module.css";

const CityLabel = ({ city }) => {
  const handleClick = () => {};

  return <button onClick={() => handleClick()}>{city} </button>;
};

export default CityLabel;
