import React from "react";
import styles from "./style.module.css";
import Clock from "react-live-clock";
import dayjs from "dayjs";

const Header = () => {
  const now = dayjs().format("DD/MM/YYYY");
  return (
    <>
      <div className={styles.place}></div>
      <div className={styles.container}>
        <Clock className={styles.clock} format={"HH:mm:ss"} ticking={true} />
        <p className={styles.date}> {now} </p>
        <div className={styles.btnContainer}>
          <button>Harita</button>
          <span></span>
          <button>Liste</button>
        </div>
      </div>
    </>
  );
};

export default Header;
