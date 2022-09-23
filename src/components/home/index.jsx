import React from "react";
import styles from "./style.module.css";
import CardCity from "./cityCard";
import CityLabel from "./cityLabel";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>İllere Göre Hava Durumu Tahminleri</h1>
      <div className={styles.cardContainer}>
        <CardCity />
        <CardCity />
        <CardCity />
        <CardCity />
        <CardCity />
        <CardCity />
      </div>
      <input placeholder="Şehir Arayın..." />
      <div className={styles.listContainer}>
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
        <CityLabel />
      </div>
    </div>
  );
};

export default Home;
