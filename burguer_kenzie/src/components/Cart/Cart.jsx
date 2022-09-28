import CartProduct from "./CartProduct/CartProduct";
import CartTotal from "./CartTotal/CartTotal";

import styles from "./Cart.module.scss";

const Cart = ({ cartList, setCartList, toast }) => {
  const removeProduct = (productId) => {
    setCartList((prevCartList) => {
      return prevCartList.filter((product) => productId !== product["id"]);
    });
  };

  const removeAllProducts = () => {
    setCartList([]);
    toast.info("Todos os itens foram removidos do carrinho.")
  };

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
                removeProduct={removeProduct}
              />
            ))}
          </ul>
          <CartTotal
            cartList={cartList}
            removeAllProducts={removeAllProducts}
          />
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
