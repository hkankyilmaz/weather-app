import React from "react";
import styles from "./style.module.css";
import CardCity from "./cityCard";

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
        <CardCity />
        <CardCity />
      </div>
    </div>
  );
};

export default Home;
