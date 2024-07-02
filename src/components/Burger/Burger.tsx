import { useState } from "react";
import styles from "../../Styles/components/Burger.module.scss";

const Burger = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${styles.burger} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Burger;
