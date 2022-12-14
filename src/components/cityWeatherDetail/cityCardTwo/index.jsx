import React from "react";
import styles from "./style.module.css";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { GiWindSlap } from "react-icons/gi";
import WeatherIcon from "react-icons-weather";
import { getDate } from "../../../hook/getDate";

const CardCityTwo = ({ current, city, num, dayNum }) => {
  const date = getDate(dayNum);

  if (current.length !== 0) {
    return (
      <div className={styles.container}>
        <div className={styles.weatherInfo}>
          <div>
            <WeatherIcon
              className={styles.weatherIcon}
              name="owm"
              iconId={current[0].list[num].weather[0].id}
              flip="horizontal"
              rotate="90"
            />
          </div>
          <div>{current[0].list[num].main.temp}°C</div>
          <div>
            <p>
              <WiHumidity style={{ fontSize: "1em" }} /> %
              {current[0].list[num].main.humidity}
            </p>
            <p>
              <MdOutlineVisibility /> {current[0].list[4].visibility} m
            </p>
            <p>
              <GiWindSlap /> {current[0].list[num].wind.speed} km/h
            </p>
          </div>
        </div>
        <div className={styles.cityInfo}>
          <p> {current[0].city.name} </p>
          <p> {city[0].region} </p>
          <p>{current[0].list[num].weather[0].description.toUpperCase()} </p>
          <p className={styles.date}>
            {date.day === undefined ? "Pazar" : date.day},{date.month}{" "}
            {date.dayOfMonth}
          </p>
        </div>
      </div>
    );
  } else {
    <p>Loading...</p>;
  }
};

export default CardCityTwo;
