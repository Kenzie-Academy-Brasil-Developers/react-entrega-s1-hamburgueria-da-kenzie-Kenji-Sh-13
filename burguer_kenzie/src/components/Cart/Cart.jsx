import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <div>
      <h3 className={styles["cart_header"]}>Carrinho de compras</h3>
      <div>
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </div>
    </div>
  );
};

export default Cart;
