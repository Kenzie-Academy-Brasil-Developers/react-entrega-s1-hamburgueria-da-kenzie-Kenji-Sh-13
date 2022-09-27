import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import CartTotal from "./CartTotal/CartTotal";

const Cart = ({ cartList, setCartList }) => {
  return (
    <div className={styles["cart"]}>
      <h3>Carrinho de compras</h3>
      {cartList.length ? (
        <>
          <ul>
            <CartProduct setCartList={setCartList} />
          </ul>
          <CartTotal />
        </>
      ) : (
        <div className={styles["nothing"]}>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
