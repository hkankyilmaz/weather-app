import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import CardCity from "./cityCard";
import CityLabel from "./cityLabel";
import { BsSearch } from "react-icons/bs";
import { cities } from "../../constants/cities";
import { mainCities } from "../../constants/mainCities";
import { fetchWeatherData } from "../../services/services";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [search, setSearch] = useState("");
  const dataStatus = useSelector((state) => state.weather.dataStatus);
  const dispatch = useDispatch();
  const filteredCities = cities.filter((city) => {
    return city.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(search);
  console.log(filteredCities);

  useEffect(() => {
    mainCities.map((city) => {
      dispatch(fetchWeatherData(city));
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>İllere Göre Hava Durumu Tahminleri</h1>
      <div className={styles.cardContainer}>
        {dataStatus === "loading" && (
          <p className={styles.status}>Loading...</p>
        )}
        {dataStatus === "failed" && (
          <p className={styles.status}>There is a problem...</p>
        )}
        {dataStatus === "succeeded" &&
          mainCities.map((city, idx) => <CardCity city={city} key={idx} />)}
      </div>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Şehir Arayın..."
        />
        <BsSearch className={styles.icon} />
      </div>

      <div className={styles.listContainer}>
        {filteredCities.map((item, idx) => (
          <CityLabel key={idx} city={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
