import React, { useEffect } from "react";
import styles from "./style.module.css";
import Container from "@mui/material/Container";
import { RiTempHotLine } from "react-icons/ri";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { MdOutlineCompress } from "react-icons/md";
import WeatherIcon from "react-icons-weather";
import Grid from "@mui/material/Unstable_Grid2";
import { cities } from "../../constants/cities";
import CardCityTwo from "./cityCardTwo";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherDataCurrent } from "../../services/services";
import { getDate } from "../../hook/getDate";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let date = getDate(0);

  const current = useSelector((state) => state.weather.current);
  const currentStatus = useSelector((state) => state.weather.currentStatus);
  const city = cities.filter(
    (city) => city.name.toLowerCase() === param.city.toLowerCase()
  );

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
              <div>
                <button
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                  className={styles.btn}
                >
                  Anasayfa
                </button>
                <button
                  onClick={() => navigate("/map")}
                  style={{ cursor: "pointer" }}
                  className={styles.btn}
                >
                  Harita
                </button>
              </div>
              <select
                onChange={(e) => navigate(`/${e.target.value}`)}
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
                marginBottom: "1em",
              }}
              xs={12}
            >
              <p className={styles.location}> {city[0].name} </p>
              <p className={styles.date}>
                {date.day},{date.month} {date.dayOfMonth}
              </p>
              <span className={styles.span}></span>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1em",
              }}
              xs={12}
              md={6}
            >
              <div>
                <WeatherIcon
                  className={styles.weatherIcon}
                  name="owm"
                  iconId={current[0].list[3].weather[0].id}
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
                marginBottom: "1em",
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
            <Grid container xs={12}>
              <span className={styles.span}></span>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <CardCityTwo city={city} current={current} num={3} dayNum={0} />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <CardCityTwo city={city} current={current} num={11} dayNum={1} />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <CardCityTwo city={city} current={current} num={19} dayNum={2} />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <CardCityTwo city={city} current={current} num={27} dayNum={3} />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <CardCityTwo city={city} current={current} num={35} dayNum={4} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else if (currentStatus === "loading") {
    return (
      <div className={styles.containerInfo}>
        <p>Loading...</p>
      </div>
    );
  } else if (currentStatus === "failed") {
    return (
      <div className={styles.containerInfo}>
        <p>There is a problem about API services...</p>
      </div>
    );
  }
};

export default Detail;
