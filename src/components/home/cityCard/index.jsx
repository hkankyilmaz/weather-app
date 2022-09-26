import React from "react";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cities } from "../../../constants/cities";

const CardCity = ({ city }) => {
  const infoCities = useSelector((state) => state.weather.data);

  return (
    <div className={styles.container}>
      <div className={styles.weatherInfo}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.cityInfo}>
        <p>İstanbul</p>
        <p>Marmara Bölgesi</p>
        <p>Parçalı Bulutlu</p>
      </div>
    </div>
  );
};

export default CardCity;
