import styles from "../../Styles/components/Navigation.module.scss";

import cartImg from "../../Images/cart.svg";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { useTypedSelector } from "../../Hooks/useTypedSelector";

const Navigation = () => {
  const { cart } = useTypedSelector((state) => state);
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">
              <b>G-store</b>
            </Link>
          </li>
          <Link to="/cart">
            <li className={styles.cart}>
              <img src={cartImg} alt="" />
              <p className={styles.cartLength}>{cart.length}</p>
            </li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
