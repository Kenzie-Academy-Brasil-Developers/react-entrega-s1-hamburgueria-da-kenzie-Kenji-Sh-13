import { RemoveAllButton } from "../../Button/Button.style";
import styles from "./CartTotal.module.scss";

const CartTotal = ({ cartList, removeAllProducts }) => {
  return (
    <div className={styles["cart_total"]}>
      <div>
        <p>Total</p>
        <p>
          {cartList
            .reduce((acc, cur) => acc + cur["price"], 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <RemoveAllButton onClick={removeAllProducts}>
        Remover tudo
      </RemoveAllButton>
    </div>
  );
};

export default CartTotal;
