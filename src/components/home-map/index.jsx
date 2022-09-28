import React, { useEffect } from "react";
import TurkeyMap from "turkey-map-react";
import styles from "./style.module.css";
import Footer from "../footer";
import { useNavigate } from "react-router";

function HomeMap() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>İllere Göre Hava Durumu Tahminleri</h1>
      <h2 className={styles.h2}>Lütfen İl Seçiniz...</h2>
      <TurkeyMap
        customStyle={{ idleColor: "#191d3a", hoverColor: "#ec5990" }}
        showTooltip="true"
        onClick={(city) => navigate(`/${city.name}`)}
      />
      <Footer />
    </div>
  );
}

export default HomeMap;
