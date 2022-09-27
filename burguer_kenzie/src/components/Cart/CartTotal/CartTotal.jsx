import styles from "./CartTotal.module.scss";

const CartTotal = () => {
  return (
    <div className={styles["cart_total"]}>
      <div>
        <p>Total</p>
        <p>R$ 40,00</p>
      </div>
      <button>Remover tudo</button>
    </div>
  );
};

export default CartTotal;
