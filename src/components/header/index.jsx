import React from "react";
import styles from "./style.module.css";
import Clock from "react-live-clock";
import dayjs from "dayjs";
import { useNavigate } from "react-router";

const Header = () => {
  const now = dayjs().format("DD/MM/YYYY");
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.place}></div>
      <div className={styles.container}>
        <Clock className={styles.clock} format={"HH:mm:ss"} ticking={true} />
        <span></span>
        <p className={styles.date}> {now} </p>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate("/map")}>Harita</button>
          <span></span>
          <button onClick={() => navigate("/")}>Liste</button>
        </div>
      </div>
    </>
  );
};

export default Header;
