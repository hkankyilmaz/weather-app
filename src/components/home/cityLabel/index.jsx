import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router";

const CityLabel = ({ city }) => {
  const formattedCity = city.toLowerCase();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${formattedCity}`);
  };

  return (
    <button style={{ cursor: "pointer" }} onClick={() => handleClick()}>
      {city}
    </button>
  );
};

export default CityLabel;
