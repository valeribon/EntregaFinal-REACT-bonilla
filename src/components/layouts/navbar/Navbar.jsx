import CartWidget from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Audiolibros Logo</h2>
        <ul>
          <li className={styles.container}> Prices</li>
          <li className={styles.container}> Categories</li>
          <li className={styles.container}> Newest additions</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
