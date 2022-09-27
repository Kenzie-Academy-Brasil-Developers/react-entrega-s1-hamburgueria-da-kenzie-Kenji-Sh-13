import { RemoveAllButton } from "../../Button/Button.style";
import styles from "./CartTotal.module.scss";

const CartTotal = () => {
  return (
    <div className={styles["cart_total"]}>
      <div>
        <p>Total</p>
        <p>R$ 40,00</p>
      </div>
      <RemoveAllButton>Remover tudo</RemoveAllButton>
    </div>
  );
};

export default CartTotal;
