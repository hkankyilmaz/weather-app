import React from "react";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { GiWindSlap } from "react-icons/gi";

import WeatherIcon from "react-icons-weather";
import { cities } from "../../../constants/cities";

const CardCity = ({ city }) => {
  const data = useSelector((state) => state.weather.data);
  const filteredData = data.filter((item) => city.name == item.city.name);

  if (filteredData.length !== 0) {
    return (
      <div className={styles.container}>
        <div className={styles.weatherInfo}>
          <div>
            <WeatherIcon
              className={styles.weatherIcon}
              name="owm"
              iconId={filteredData[0].list[4].weather[0].id}
              flip="horizontal"
              rotate="90"
            />
          </div>
          <div>{filteredData[0].list[4].main.temp}°C</div>
          <div>
            <p>
              <WiHumidity style={{ fontSize: "1em" }} /> %
              {filteredData[0].list[4].main.humidity}
            </p>
            <p>
              <MdOutlineVisibility /> {filteredData[0].list[4].visibility} m
            </p>
            <p>
              <GiWindSlap /> {filteredData[0].list[4].wind.speed} km/h
            </p>
          </div>
        </div>
        <div className={styles.cityInfo}>
          <p> {filteredData[0].city.name} </p>
          <p> {city.region} </p>
          <p>{filteredData[0].list[4].weather[0].description.toUpperCase()} </p>
        </div>
      </div>
    );
  } else {
    <p>Loading...</p>;
  }
};

export default CardCity;
