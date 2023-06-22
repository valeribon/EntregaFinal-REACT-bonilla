import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className={styles.CartWidget}>
      <BsFillCartCheckFill color="blue" size={30} />
      <span className={styles.CartWidget}>0</span>
    </div>
  );
};

export default CartWidget;
