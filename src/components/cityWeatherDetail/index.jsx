import React, { useEffect } from "react";
import styles from "./style.module.css";
import Container from "@mui/material/Container";
import { RiTempHotLine } from "react-icons/ri";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { MdOutlineCompress } from "react-icons/md";
import WeatherIcon from "react-icons-weather";
import Grid from "@mui/material/Unstable_Grid2";
import { cities } from "../../constants/cities";
import CardCityTwo from "./cityCardTwo";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherDataCurrent } from "../../services/services";
import { useParams } from "react-router";

const Detail = () => {
  const [value, setValue] = React.useState("istanbul");
  const param = useParams();
  const dispatch = useDispatch();

  console.log(param);
  const current = useSelector((state) => state.weather.current);
  const currentStatus = useSelector((state) => state.weather.currentStatus);
  const city = cities.filter(
    (city) => city.name.toLowerCase() === param.city.toLowerCase()
  );
  console.log(current);
  console.log(city);

  useEffect(() => {
    dispatch(fetchWeatherDataCurrent(param.city));
  }, [param.city]);

  if (currentStatus === "succeeded") {
    return (
      <div className={styles.container}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid
              container
              sx={{
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              xs={12}
            >
              <button style={{ cursor: "pointer" }} className={styles.btn}>
                Anasayfa
              </button>
              <select
                onChange={(e) => setValue(e.target.value)}
                placeholder="Lütfen Şehir Seçin..."
              >
                <option value="">Şehir Seçin</option>
                {cities.map((city, idx) => (
                  <option value={city.name} key={idx}>
                    {city.name}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              container
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginBottom: "2em",
              }}
              xs={12}
            >
              <p className={styles.location}>İstanbul</p>
              <p className={styles.date}>Salı,Eylül 29</p>
              <span></span>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
              md={6}
            >
              <div>
                <WeatherIcon
                  className={styles.weatherIcon}
                  name="owm"
                  iconId="800"
                  flip="horizontal"
                  rotate="90"
                />
              </div>
              <div>
                <p className={styles.cal}>{current[0].list[3].main.temp}°C </p>
                <p className={styles.description}>
                  {current[0].list[3].weather.description}
                </p>
              </div>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2em",
              }}
              xs={12}
              md={6}
            >
              <div className={styles.desContainer}>
                <div style={{ marginRight: "2em" }}>
                  <p>
                    <RiTempHotLine className={styles.icon} />
                  </p>
                  <p>Feels Like: {current[0].list[3].main.feels_like} °C </p>
                </div>
                <div>
                  <p>
                    <GiSunrise className={styles.icon} />
                  </p>
                  <p>Sunrise : 06:40</p>
                </div>
                <div>
                  <p>
                    <GiSunset className={styles.icon} />
                  </p>
                  <p>Sunset : 18:45</p>
                </div>
              </div>
              <div className={styles.desContainer}>
                <div>
                  <p>
                    <WiHumidity className={styles.icon} />
                  </p>
                  <p>Humidity :{current[0].list[3].main.pressure} %</p>
                </div>
                <div>
                  <p>
                    <FaWind className={styles.icon} />
                  </p>
                  <p>WindSpeed :{current[0].list[3].wind.speed} m/sn</p>
                </div>
                <div>
                  <p>
                    <MdOutlineCompress className={styles.icon} />
                  </p>
                  <p>Pressure :{current[0].list[3].main.pressure} hPa</p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <CardCityTwo city={city} current={current} num={3} />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <CardCityTwo city={city} current={current} num={11} />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <CardCityTwo city={city} current={current} num={19} />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <CardCityTwo city={city} current={current} num={27} />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <CardCityTwo city={city} current={current} num={35} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
    <div className={styles.container}>
      <p>Loading...</p>
    </div>;
  }
};

export default Detail;
