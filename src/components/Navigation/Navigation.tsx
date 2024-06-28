import styles from "./Navigation.module.scss";
import burger from "../../assets/burger.svg";
import search from "../../assets/search.svg";
import { Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <button>
              <img src={burger} alt="" width="24" />
            </button>
          </li>
          <li>
            <img src={search} alt="" width="24" />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
