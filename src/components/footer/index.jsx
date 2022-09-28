import React from "react";
import styles from "./style.module.css";
import WeatherIcon from "react-icons-weather";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <WeatherIcon
          className={styles.weatherIcon}
          name="owm"
          iconId="781"
          flip="horizontal"
          rotate="90"
        />
        <WeatherIcon
          className={styles.weatherIcon}
          name="owm"
          iconId="800"
          flip="horizontal"
          rotate="90"
        />
        <WeatherIcon
          className={styles.weatherIcon}
          name="owm"
          iconId="212"
          flip="horizontal"
          rotate="90"
        />
        <WeatherIcon
          className={styles.weatherIcon}
          name="owm"
          iconId="611"
          flip="horizontal"
          rotate="90"
        />
      </div>
      <p> Weather Foracest</p>
    </div>
  );
}

export default Footer;
