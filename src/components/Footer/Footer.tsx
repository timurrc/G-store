import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <h2>G-store</h2>
        </li>
        <li>© G-store.ru 2004 — 2024</li>
      </ul>
    </div>
  );
};

export default Footer;
