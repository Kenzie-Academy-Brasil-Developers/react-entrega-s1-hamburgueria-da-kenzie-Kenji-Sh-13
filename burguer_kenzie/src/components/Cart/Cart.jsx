import styles from "./Cart.module.scss";
import CartProduct from "./CartProduct/CartProduct";
import CartTotal from "./CartTotal/CartTotal";

const Cart = ({ cartList }) => {
  return (
    <div className={styles["cart"]}>
      <h3>Carrinho de compras</h3>
      {cartList.length ? (
        <>
          <ul>
            {cartList.map(({ id, name, category, img }) => (
              <CartProduct
                key={id}
                id={id}
                name={name}
                category={category}
                img={img}
              />
            ))}
          </ul>
          <CartTotal cartList={cartList} />
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
