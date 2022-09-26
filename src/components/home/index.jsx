import React, { useEffect } from "react";
import styles from "./style.module.css";
import CardCity from "./cityCard";
import CityLabel from "./cityLabel";
import { BsSearch } from "react-icons/bs";
import { cities } from "../../constants/cities";
import { mainCities } from "../../constants/mainCities";
import { fetchWeatherData } from "../../services/services";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>İllere Göre Hava Durumu Tahminleri</h1>
      <div className={styles.cardContainer}>
        {mainCities.map((city) => (
          <CardCity city={city.name} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input placeholder="Şehir Arayın..." />
        <BsSearch className={styles.icon} />
      </div>

      <div className={styles.listContainer}>
        {cities.map((item) => (
          <CityLabel city={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;

export function loader() {
  return fetchWeatherData(mainCities);
}
